"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = activate;
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
const vscode = require("vscode");
const markdownMathSetting = 'markdown.math';
function activate(context) {
    function isEnabled() {
        const config = vscode.workspace.getConfiguration('markdown');
        return config.get('math.enabled', true);
    }
    function getMacros() {
        const config = vscode.workspace.getConfiguration('markdown');
        return config.get('math.macros', {});
    }
    vscode.workspace.onDidChangeConfiguration(e => {
        if (e.affectsConfiguration(markdownMathSetting)) {
            vscode.commands.executeCommand('markdown.api.reloadPlugins');
        }
    }, undefined, context.subscriptions);
    return {
        extendMarkdownIt(md) {
            if (isEnabled()) {
                const katex = require('@vscode/markdown-it-katex').default;
                const settingsMacros = getMacros();
                const options = {
                    enableFencedBlocks: true,
                    globalGroup: true,
                    macros: { ...settingsMacros }
                };
                md.core.ruler.push('reset-katex-macros', () => {
                    options.macros = { ...settingsMacros };
                });
                return md.use(katex, options);
            }
            return md;
        }
    };
}
//# sourceMappingURL=extension.js.map