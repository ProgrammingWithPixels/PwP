/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

/// <reference path="typings/require.d.ts" />

//@ts-check
'use strict';

/**
 * @import { ISandboxConfiguration } from './vs/base/parts/sandbox/common/sandboxTypes'
 * @typedef {any} LoaderConfig
 */

/* eslint-disable no-restricted-globals */

(function (factory) {
	// @ts-ignore
	globalThis.MonacoBootstrapWindow = factory();
}(function () {
	const preloadGlobals = sandboxGlobals();
	const safeProcess = preloadGlobals.process;

	// increase number of stack frames(from 10, https://github.com/v8/v8/wiki/Stack-Trace-API)
	Error.stackTraceLimit = 100;

	/**
	 * @param {string[]} modulePaths
	 * @param {(result: unknown, configuration: ISandboxConfiguration) => Promise<unknown> | undefined} resultCallback
	 * @param {{
	 *  configureDeveloperSettings?: (config: ISandboxConfiguration) => {
	 * 		forceDisableShowDevtoolsOnError?: boolean,
	 * 		forceEnableDeveloperKeybindings?: boolean,
	 * 		disallowReloadKeybinding?: boolean,
	 * 		removeDeveloperKeybindingsAfterLoad?: boolean
	 * 	},
	 * 	canModifyDOM?: (config: ISandboxConfiguration) => void,
	 * 	beforeLoaderConfig?: (loaderConfig: object) => void,
	 *  beforeRequire?: (config: ISandboxConfiguration) => void
	 * }} [options]
	 */
	async function load(modulePaths, resultCallback, options) {

		// Await window configuration from preload
		const timeout = setTimeout(() => { console.error(`[resolve window config] Could not resolve window configuration within 10 seconds, but will continue to wait...`); }, 10000);
		performance.mark('code/willWaitForWindowConfig');
		/** @type {ISandboxConfiguration} */
		const configuration = await preloadGlobals.context.resolveConfiguration();
		performance.mark('code/didWaitForWindowConfig');
		clearTimeout(timeout);

		// Signal DOM modifications are now OK
		if (typeof options?.canModifyDOM === 'function') {
			options.canModifyDOM(configuration);
		}

		// Developer settings
		const {
			forceEnableDeveloperKeybindings,
			disallowReloadKeybinding,
			removeDeveloperKeybindingsAfterLoad
		} = typeof options?.configureDeveloperSettings === 'function' ? options.configureDeveloperSettings(configuration) : {
			forceEnableDeveloperKeybindings: false,
			disallowReloadKeybinding: false,
			removeDeveloperKeybindingsAfterLoad: false
		};
		const isDev = !!safeProcess.env['VSCODE_DEV'];
		const enableDeveloperKeybindings = isDev || forceEnableDeveloperKeybindings;
		/**
		 * @type {() => void | undefined}
		 */
		let developerDeveloperKeybindingsDisposable;
		if (enableDeveloperKeybindings) {
			developerDeveloperKeybindingsDisposable = registerDeveloperKeybindings(disallowReloadKeybinding);
		}

		globalThis._VSCODE_NLS_MESSAGES = configuration.nls.messages;
		globalThis._VSCODE_NLS_LANGUAGE = configuration.nls.language;
		let language = configuration.nls.language || 'en';
		if (language === 'zh-tw') {
			language = 'zh-Hant';
		} else if (language === 'zh-cn') {
			language = 'zh-Hans';
		}

		window.document.documentElement.setAttribute('lang', language);

		window['MonacoEnvironment'] = {};

		// ESM-uncomment-begin
		// Signal before require()
		if (typeof options?.beforeRequire === 'function') {
			options.beforeRequire(configuration);
		}

		const baseUrl = new URL(`${fileUriFromPath(configuration.appRoot, { isWindows: safeProcess.platform === 'win32', scheme: 'vscode-file', fallbackAuthority: 'vscode-app' })}/out/`);
		globalThis._VSCODE_FILE_ROOT = baseUrl.toString();

		// DEV ---------------------------------------------------------------------------------------
		// DEV: This is for development and enables loading CSS via import-statements via import-maps.
		// DEV: For each CSS modules that we have we defined an entry in the import map that maps to
		// DEV: a blob URL that loads the CSS via a dynamic @import-rule.
		// DEV ---------------------------------------------------------------------------------------
		if (Array.isArray(configuration.cssModules) && configuration.cssModules.length > 0) {
			performance.mark('code/willAddCssLoader');

			const style = document.createElement('style');
			style.type = 'text/css';
			style.media = 'screen';
			style.id = 'vscode-css-loading';
			document.head.appendChild(style);

			globalThis._VSCODE_CSS_LOAD = function (url) {
				style.textContent += `@import url(${url});\n`;
			};

			/**
			 * @type { { imports: Record<string, string> }}
			 */
			const importMap = { imports: {} };
			for (const cssModule of configuration.cssModules) {
				const cssUrl = new URL(cssModule, baseUrl).href;
				const jsSrc = `globalThis._VSCODE_CSS_LOAD('${cssUrl}');\n`;
				const blob = new Blob([jsSrc], { type: 'application/javascript' });
				importMap.imports[cssUrl] = URL.createObjectURL(blob);
			}

			const ttp = window.trustedTypes?.createPolicy('vscode-bootstrapImportMap', { createScript(value) { return value; }, });
			const importMapSrc = JSON.stringify(importMap, undefined, 2);
			const importMapScript = document.createElement('script');
			importMapScript.type = 'importmap';
			importMapScript.setAttribute('nonce', '0c6a828f1297');
			// @ts-ignore
			importMapScript.textContent = ttp?.createScript(importMapSrc) ?? importMapSrc;
			document.head.appendChild(importMapScript);

			performance.mark('code/didAddCssLoader');
		}

		const result = Promise.all(modulePaths.map(modulePath => {
			if (modulePath.includes('vs/css!')) {
				// ESM/CSS when seeing the old `vs/css!` prefix we use that as a signal to
				// load CSS via a <link> tag
				const cssModule = modulePath.replace('vs/css!', '');
				const link = document.createElement('link');
				link.rel = 'stylesheet';
				link.href = new URL(`${cssModule}.css`, baseUrl).href;
				document.head.appendChild(link);
				return Promise.resolve();

			} else {
				// ESM/JS module loading
				return import(new URL(`${modulePath}.js`, baseUrl).href);
			}
		}));

		result.then((res) => invokeResult(res[0]), onUnexpectedError);
		// ESM-uncomment-end

		// ESM-comment-begin
		// /** @type {LoaderConfig} */
		// const loaderConfig = {
		// baseUrl: `${fileUriFromPath(configuration.appRoot, { isWindows: safeProcess.platform === 'win32', scheme: 'vscode-file', fallbackAuthority: 'vscode-app' })}/out`,
		// preferScriptTags: true
		// };
		//
		// // use a trusted types policy when loading via script tags
		// loaderConfig.trustedTypesPolicy = window.trustedTypes?.createPolicy('amdLoader', {
		// createScriptURL(value) {
		// if (value.startsWith(window.location.origin)) {
		// return value;
		// }
		// throw new Error(`Invalid script url: ${value}`);
		// }
		// });
		//
		// // Teach the loader the location of the node modules we use in renderers
		// // This will enable to load these modules via <script> tags instead of
		// // using a fallback such as node.js require which does not exist in sandbox
		// const baseNodeModulesPath = isDev ? '../node_modules' : '../node_modules.asar';
		// loaderConfig.paths = {
		// '@vscode/tree-sitter-wasm': `${baseNodeModulesPath}/@vscode/tree-sitter-wasm/wasm/tree-sitter.js`,
		// 'vscode-textmate': `${baseNodeModulesPath}/vscode-textmate/release/main.js`,
		// 'vscode-oniguruma': `${baseNodeModulesPath}/vscode-oniguruma/release/main.js`,
		// 'vsda': `${baseNodeModulesPath}/vsda/index.js`,
		// '@xterm/xterm': `${baseNodeModulesPath}/@xterm/xterm/lib/xterm.js`,
		// '@xterm/addon-clipboard': `${baseNodeModulesPath}/@xterm/addon-clipboard/lib/addon-clipboard.js`,
		// '@xterm/addon-image': `${baseNodeModulesPath}/@xterm/addon-image/lib/addon-image.js`,
		// '@xterm/addon-search': `${baseNodeModulesPath}/@xterm/addon-search/lib/addon-search.js`,
		// '@xterm/addon-serialize': `${baseNodeModulesPath}/@xterm/addon-serialize/lib/addon-serialize.js`,
		// '@xterm/addon-unicode11': `${baseNodeModulesPath}/@xterm/addon-unicode11/lib/addon-unicode11.js`,
		// '@xterm/addon-webgl': `${baseNodeModulesPath}/@xterm/addon-webgl/lib/addon-webgl.js`,
		// '@vscode/iconv-lite-umd': `${baseNodeModulesPath}/@vscode/iconv-lite-umd/lib/iconv-lite-umd.js`,
		// 'jschardet': `${baseNodeModulesPath}/jschardet/dist/jschardet.min.js`,
		// '@vscode/vscode-languagedetection': `${baseNodeModulesPath}/@vscode/vscode-languagedetection/dist/lib/index.js`,
		// 'vscode-regexp-languagedetection': `${baseNodeModulesPath}/vscode-regexp-languagedetection/dist/index.js`,
		// 'tas-client-umd': `${baseNodeModulesPath}/tas-client-umd/lib/tas-client-umd.js`
		// };
		//
		// // Signal before require.config()
		// if (typeof options?.beforeLoaderConfig === 'function') {
		// options.beforeLoaderConfig(loaderConfig);
		// }
		//
		// // Configure loader
		// require.config(loaderConfig);
		//
		// // Signal before require()
		// if (typeof options?.beforeRequire === 'function') {
		// options.beforeRequire(configuration);
		// }
		//
		// // Actually require the main module as specified
		// require(modulePaths, invokeResult, onUnexpectedError);
		// ESM-comment-end

		/**
		 * @param {any} firstModule
		 */
		async function invokeResult(firstModule) {
			try {

				// Callback only after process environment is resolved
				const callbackResult = resultCallback(firstModule, configuration);
				if (callbackResult instanceof Promise) {
					await callbackResult;

					if (developerDeveloperKeybindingsDisposable && removeDeveloperKeybindingsAfterLoad) {
						developerDeveloperKeybindingsDisposable();
					}
				}
			} catch (error) {
				onUnexpectedError(error, enableDeveloperKeybindings);
			}
		}
	}

	/**
	 * @param {boolean | undefined} disallowReloadKeybinding
	 * @returns {() => void}
	 */
	function registerDeveloperKeybindings(disallowReloadKeybinding) {
		const ipcRenderer = preloadGlobals.ipcRenderer;

		const extractKey =
			/**
			 * @param {KeyboardEvent} e
			 */
			function (e) {
				return [
					e.ctrlKey ? 'ctrl-' : '',
					e.metaKey ? 'meta-' : '',
					e.altKey ? 'alt-' : '',
					e.shiftKey ? 'shift-' : '',
					e.keyCode
				].join('');
			};

		// Devtools & reload support
		const TOGGLE_DEV_TOOLS_KB = (safeProcess.platform === 'darwin' ? 'meta-alt-73' : 'ctrl-shift-73'); // mac: Cmd-Alt-I, rest: Ctrl-Shift-I
		const TOGGLE_DEV_TOOLS_KB_ALT = '123'; // F12
		const RELOAD_KB = (safeProcess.platform === 'darwin' ? 'meta-82' : 'ctrl-82'); // mac: Cmd-R, rest: Ctrl-R

		/** @type {((e: KeyboardEvent) => void) | undefined} */
		let listener = function (e) {
			const key = extractKey(e);
			if (key === TOGGLE_DEV_TOOLS_KB || key === TOGGLE_DEV_TOOLS_KB_ALT) {
				ipcRenderer.send('vscode:toggleDevTools');
			} else if (key === RELOAD_KB && !disallowReloadKeybinding) {
				ipcRenderer.send('vscode:reloadWindow');
			}
		};

		window.addEventListener('keydown', listener);

		return function () {
			if (listener) {
				window.removeEventListener('keydown', listener);
				listener = undefined;
			}
		};
	}

	/**
	 * @param {string | Error} error
	 * @param {boolean} [showDevtoolsOnError]
	 */
	function onUnexpectedError(error, showDevtoolsOnError) {
		if (showDevtoolsOnError) {
			const ipcRenderer = preloadGlobals.ipcRenderer;
			ipcRenderer.send('vscode:openDevTools');
		}

		console.error(`[uncaught exception]: ${error}`);

		if (error && typeof error !== 'string' && error.stack) {
			console.error(error.stack);
		}
	}

	/**
	 * @param {string} path
	 * @param {{ isWindows?: boolean, scheme?: string, fallbackAuthority?: string }} config
	 * @returns {string}
	 */
	function fileUriFromPath(path, config) {

		// Since we are building a URI, we normalize any backslash
		// to slashes and we ensure that the path begins with a '/'.
		let pathName = path.replace(/\\/g, '/');
		if (pathName.length > 0 && pathName.charAt(0) !== '/') {
			pathName = `/${pathName}`;
		}

		/** @type {string} */
		let uri;

		// Windows: in order to support UNC paths (which start with '//')
		// that have their own authority, we do not use the provided authority
		// but rather preserve it.
		if (config.isWindows && pathName.startsWith('//')) {
			uri = encodeURI(`${config.scheme || 'file'}:${pathName}`);
		}

		// Otherwise we optionally add the provided authority if specified
		else {
			uri = encodeURI(`${config.scheme || 'file'}://${config.fallbackAuthority || ''}${pathName}`);
		}

		return uri.replace(/#/g, '%23');
	}

	/**
	 * @return {typeof import('./vs/base/parts/sandbox/electron-sandbox/globals')}
	 */
	function sandboxGlobals() {
		// @ts-ignore (defined in globals.js)
		return window.vscode;
	}

	return {
		load
	};
}));

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

//@ts-check
'use strict';

(function () {

	/**
	 * @import {INativeWindowConfiguration} from '../../../platform/window/common/window'
	 * @import {NativeParsedArgs} from '../../../platform/environment/common/argv'
	 * @import {ISandboxConfiguration} from '../../../base/parts/sandbox/common/sandboxTypes'
	 */

	const bootstrapWindow = bootstrapWindowLib();

	// Add a perf entry right from the top
	performance.mark('code/didStartRenderer');

	// Load workbench main JS and CSS all in parallel. This is an
	// optimization to prevent a waterfall of loading to happen, because
	// we know for a fact that workbench.desktop.main will depend on
	// the related CSS counterpart.
	bootstrapWindow.load([
		'vs/workbench/workbench.desktop.main',
		'vs/css!vs/workbench/workbench.desktop.main'
	],
		function (desktopMain, configuration) {

			// Mark start of workbench
			performance.mark('code/didLoadWorkbenchMain');

			return desktopMain.main(configuration);
		},
		{
			configureDeveloperSettings: function (windowConfig) {
				return {
					// disable automated devtools opening on error when running extension tests
					// as this can lead to nondeterministic test execution (devtools steals focus)
					forceDisableShowDevtoolsOnError: typeof windowConfig.extensionTestsPath === 'string' || windowConfig['enable-smoke-test-driver'] === true,
					// enable devtools keybindings in extension development window
					forceEnableDeveloperKeybindings: Array.isArray(windowConfig.extensionDevelopmentPath) && windowConfig.extensionDevelopmentPath.length > 0,
					removeDeveloperKeybindingsAfterLoad: true
				};
			},
			canModifyDOM: function (windowConfig) {
				showSplash(windowConfig);
			},
			beforeLoaderConfig: function (loaderConfig) {
				// @ts-ignore
				loaderConfig.recordStats = true;
			},
			beforeRequire: function (windowConfig) {
				performance.mark('code/willLoadWorkbenchMain');

				// Code windows have a `vscodeWindowId` property to identify them
				Object.defineProperty(window, 'vscodeWindowId', {
					get: () => windowConfig.windowId
				});

				// It looks like browsers only lazily enable
				// the <canvas> element when needed. Since we
				// leverage canvas elements in our code in many
				// locations, we try to help the browser to
				// initialize canvas when it is idle, right
				// before we wait for the scripts to be loaded.
				window.requestIdleCallback(() => {
					const canvas = document.createElement('canvas');
					const context = canvas.getContext('2d');
					context?.clearRect(0, 0, canvas.width, canvas.height);
					canvas.remove();
				}, { timeout: 50 });
			}
		}
	);

	//#region Helpers

	/**
	 * @returns {{
	 *   load: (
	 *     modules: string[],
	 *     resultCallback: (result: any, configuration: INativeWindowConfiguration & NativeParsedArgs) => unknown,
	 *     options?: {
	 *       configureDeveloperSettings?: (config: INativeWindowConfiguration & NativeParsedArgs) => {
	 * 			forceDisableShowDevtoolsOnError?: boolean,
	 * 			forceEnableDeveloperKeybindings?: boolean,
	 * 			disallowReloadKeybinding?: boolean,
	 * 			removeDeveloperKeybindingsAfterLoad?: boolean
	 * 		 },
	 * 	     canModifyDOM?: (config: INativeWindowConfiguration & NativeParsedArgs) => void,
	 * 	     beforeLoaderConfig?: (loaderConfig: object) => void,
	 *       beforeRequire?: (config: ISandboxConfiguration) => void
	 *     }
	 *   ) => Promise<unknown>
	 * }}
	 */
	function bootstrapWindowLib() {
		// @ts-ignore (defined in bootstrap-window.js)
		return window.MonacoBootstrapWindow;
	}

	/**
	 * @param {INativeWindowConfiguration & NativeParsedArgs} configuration
	 */
	function showSplash(configuration) {
		performance.mark('code/willShowPartsSplash');

		let data = configuration.partsSplash;

		if (data) {
			// high contrast mode has been turned by the OS -> ignore stored colors and layouts
			if (configuration.autoDetectHighContrast && configuration.colorScheme.highContrast) {
				if ((configuration.colorScheme.dark && data.baseTheme !== 'hc-black') || (!configuration.colorScheme.dark && data.baseTheme !== 'hc-light')) {
					data = undefined;
				}
			} else if (configuration.autoDetectColorScheme) {
				// OS color scheme is tracked and has changed
				if ((configuration.colorScheme.dark && data.baseTheme !== 'vs-dark') || (!configuration.colorScheme.dark && data.baseTheme !== 'vs')) {
					data = undefined;
				}
			}
		}

		// developing an extension -> ignore stored layouts
		if (data && configuration.extensionDevelopmentPath) {
			data.layoutInfo = undefined;
		}

		// minimal color configuration (works with or without persisted data)
		let baseTheme;
		let shellBackground;
		let shellForeground;
		if (data) {
			baseTheme = data.baseTheme;
			shellBackground = data.colorInfo.editorBackground;
			shellForeground = data.colorInfo.foreground;
		} else if (configuration.autoDetectHighContrast && configuration.colorScheme.highContrast) {
			if (configuration.colorScheme.dark) {
				baseTheme = 'hc-black';
				shellBackground = '#000000';
				shellForeground = '#FFFFFF';
			} else {
				baseTheme = 'hc-light';
				shellBackground = '#FFFFFF';
				shellForeground = '#000000';
			}
		} else if (configuration.autoDetectColorScheme) {
			if (configuration.colorScheme.dark) {
				baseTheme = 'vs-dark';
				shellBackground = '#1E1E1E';
				shellForeground = '#CCCCCC';
			} else {
				baseTheme = 'vs';
				shellBackground = '#FFFFFF';
				shellForeground = '#000000';
			}
		}

		const style = document.createElement('style');
		style.className = 'initialShellColors';
		document.head.appendChild(style);
		style.textContent = `body {
			background-color: ${shellBackground};
			color: ${shellForeground};
			margin: 0;
			padding: 0;
		}`;

		// set zoom level as soon as possible
		// @ts-ignore
		if (typeof data?.zoomLevel === 'number' && typeof globalThis.vscode?.webFrame?.setZoomLevel === 'function') {
			// @ts-ignore
			globalThis.vscode.webFrame.setZoomLevel(data.zoomLevel);
		}

		// restore parts if possible (we might not always store layout info)
		if (data?.layoutInfo) {
			const { layoutInfo, colorInfo } = data;

			const splash = document.createElement('div');
			splash.id = 'monaco-parts-splash';
			splash.className = baseTheme ?? 'vs-dark';

			if (layoutInfo.windowBorder && colorInfo.windowBorder) {
				splash.setAttribute('style', `
					position: relative;
					height: calc(100vh - 2px);
					width: calc(100vw - 2px);
					border: 1px solid var(--window-border-color);
				`);
				splash.style.setProperty('--window-border-color', colorInfo.windowBorder);

				if (layoutInfo.windowBorderRadius) {
					splash.style.borderRadius = layoutInfo.windowBorderRadius;
				}
			}

			// ensure there is enough space
			layoutInfo.sideBarWidth = Math.min(layoutInfo.sideBarWidth, window.innerWidth - (layoutInfo.activityBarWidth + layoutInfo.editorPartMinWidth));

			// part: title
			const titleDiv = document.createElement('div');
			titleDiv.setAttribute('style', `
				position: absolute;
				width: 100%;
				height: ${layoutInfo.titleBarHeight}px;
				left: 0;
				top: 0;
				background-color: ${colorInfo.titleBarBackground};
				-webkit-app-region: drag;
			`);
			splash.appendChild(titleDiv);

			if (colorInfo.titleBarBorder && layoutInfo.titleBarHeight > 0) {
				const titleBorder = document.createElement('div');
				titleBorder.setAttribute('style', `
					position: absolute;
					width: 100%;
					height: 1px;
					left: 0;
					bottom: 0;
					border-bottom: 1px solid ${colorInfo.titleBarBorder};
				`);
				titleDiv.appendChild(titleBorder);
			}

			// part: activity bar
			const activityDiv = document.createElement('div');
			activityDiv.setAttribute('style', `
				position: absolute;
				width: ${layoutInfo.activityBarWidth}px;
				height: calc(100% - ${layoutInfo.titleBarHeight + layoutInfo.statusBarHeight}px);
				top: ${layoutInfo.titleBarHeight}px;
				${layoutInfo.sideBarSide}: 0;
				background-color: ${colorInfo.activityBarBackground};
			`);
			splash.appendChild(activityDiv);

			if (colorInfo.activityBarBorder && layoutInfo.activityBarWidth > 0) {
				const activityBorderDiv = document.createElement('div');
				activityBorderDiv.setAttribute('style', `
					position: absolute;
					width: 1px;
					height: 100%;
					top: 0;
					${layoutInfo.sideBarSide === 'left' ? 'right' : 'left'}: 0;
					${layoutInfo.sideBarSide === 'left' ? 'border-right' : 'border-left'}: 1px solid ${colorInfo.activityBarBorder};
				`);
				activityDiv.appendChild(activityBorderDiv);
			}

			// part: side bar (only when opening workspace/folder)
			// folder or workspace -> status bar color, sidebar
			if (configuration.workspace) {
				const sideDiv = document.createElement('div');
				sideDiv.setAttribute('style', `
					position: absolute;
					width: ${layoutInfo.sideBarWidth}px;
					height: calc(100% - ${layoutInfo.titleBarHeight + layoutInfo.statusBarHeight}px);
					top: ${layoutInfo.titleBarHeight}px;
					${layoutInfo.sideBarSide}: ${layoutInfo.activityBarWidth}px;
					background-color: ${colorInfo.sideBarBackground};
				`);
				splash.appendChild(sideDiv);

				if (colorInfo.sideBarBorder && layoutInfo.sideBarWidth > 0) {
					const sideBorderDiv = document.createElement('div');
					sideBorderDiv.setAttribute('style', `
						position: absolute;
						width: 1px;
						height: 100%;
						top: 0;
						right: 0;
						${layoutInfo.sideBarSide === 'left' ? 'right' : 'left'}: 0;
						${layoutInfo.sideBarSide === 'left' ? 'border-right' : 'border-left'}: 1px solid ${colorInfo.sideBarBorder};
					`);
					sideDiv.appendChild(sideBorderDiv);
				}
			}

			// part: statusbar
			const statusDiv = document.createElement('div');
			statusDiv.setAttribute('style', `
				position: absolute;
				width: 100%;
				height: ${layoutInfo.statusBarHeight}px;
				bottom: 0;
				left: 0;
				background-color: ${configuration.workspace ? colorInfo.statusBarBackground : colorInfo.statusBarNoFolderBackground};
			`);
			splash.appendChild(statusDiv);

			if (colorInfo.statusBarBorder && layoutInfo.statusBarHeight > 0) {
				const statusBorderDiv = document.createElement('div');
				statusBorderDiv.setAttribute('style', `
					position: absolute;
					width: 100%;
					height: 1px;
					top: 0;
					border-top: 1px solid ${colorInfo.statusBarBorder};
				`);
				statusDiv.appendChild(statusBorderDiv);
			}

			document.body.appendChild(splash);
		}

		performance.mark('code/didShowPartsSplash');
	}

	//#endregion
}());
