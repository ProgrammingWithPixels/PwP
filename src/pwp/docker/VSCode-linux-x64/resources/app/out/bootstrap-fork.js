/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

export function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

export var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

export function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

export function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

export function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

export function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};

export function __runInitializers(thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};

export function __propKey(x) {
    return typeof x === "symbol" ? x : "".concat(x);
};

export function __setFunctionName(f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};

export function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

export function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

export function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

export var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

export function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

export function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

export function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
export function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
export function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

export function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

export function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

export function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function () { return this; }, i;
    function awaitReturn(f) { return function (v) { return Promise.resolve(v).then(f, reject); }; }
    function verb(n, f) { if (g[n]) { i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; if (f) i[n] = f(i[n]); } }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

export function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v; } : f; }
}

export function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

export function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

export function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

export function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

export function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

export function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

export function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}

export function __addDisposableResource(env, value, async) {
    if (value !== null && value !== void 0) {
        if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
        var dispose, inner;
        if (async) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            dispose = value[Symbol.asyncDispose];
        }
        if (dispose === void 0) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            dispose = value[Symbol.dispose];
            if (async) inner = dispose;
        }
        if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
        if (inner) dispose = function() { try { inner.call(this); } catch (e) { return Promise.reject(e); } };
        env.stack.push({ value: value, dispose: dispose, async: async });
    }
    else if (async) {
        env.stack.push({ async: true });
    }
    return value;

}

var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

export function __disposeResources(env) {
    function fail(e) {
        env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
        env.hasError = true;
    }
    function next() {
        while (env.stack.length) {
            var rec = env.stack.pop();
            try {
                var result = rec.dispose && rec.dispose.call(rec.value);
                if (rec.async) return Promise.resolve(result).then(next, function(e) { fail(e); return next(); });
            }
            catch (e) {
                fail(e);
            }
        }
        if (env.hasError) throw env.error;
    }
    return next();
}

export default {
    __extends: __extends,
    __assign: __assign,
    __rest: __rest,
    __decorate: __decorate,
    __param: __param,
    __metadata: __metadata,
    __awaiter: __awaiter,
    __generator: __generator,
    __createBinding: __createBinding,
    __exportStar: __exportStar,
    __values: __values,
    __read: __read,
    __spread: __spread,
    __spreadArrays: __spreadArrays,
    __spreadArray: __spreadArray,
    __await: __await,
    __asyncGenerator: __asyncGenerator,
    __asyncDelegator: __asyncDelegator,
    __asyncValues: __asyncValues,
    __makeTemplateObject: __makeTemplateObject,
    __importStar: __importStar,
    __importDefault: __importDefault,
    __classPrivateFieldGet: __classPrivateFieldGet,
    __classPrivateFieldSet: __classPrivateFieldSet,
    __classPrivateFieldIn: __classPrivateFieldIn,
    __addDisposableResource: __addDisposableResource,
    __disposeResources: __disposeResources,
};


// out-build/vs/base/common/performance.js
var module = { exports: {} };
(function() {
  const isESM = true;
  function _definePolyfillMarks(timeOrigin) {
    const _data = [];
    if (typeof timeOrigin === "number") {
      _data.push("code/timeOrigin", timeOrigin);
    }
    function mark2(name) {
      _data.push(name, Date.now());
    }
    function getMarks2() {
      const result = [];
      for (let i = 0; i < _data.length; i += 2) {
        result.push({
          name: _data[i],
          startTime: _data[i + 1]
        });
      }
      return result;
    }
    return { mark: mark2, getMarks: getMarks2 };
  }
  function _define() {
    if (typeof performance === "object" && typeof performance.mark === "function" && !performance.nodeTiming) {
      if (typeof performance.timeOrigin !== "number" && !performance.timing) {
        return _definePolyfillMarks();
      } else {
        return {
          mark(name) {
            performance.mark(name);
          },
          getMarks() {
            let timeOrigin = performance.timeOrigin;
            if (typeof timeOrigin !== "number") {
              timeOrigin = performance.timing.navigationStart || performance.timing.redirectStart || performance.timing.fetchStart;
            }
            const result = [{ name: "code/timeOrigin", startTime: Math.round(timeOrigin) }];
            for (const entry of performance.getEntriesByType("mark")) {
              result.push({
                name: entry.name,
                startTime: Math.round(timeOrigin + entry.startTime)
              });
            }
            return result;
          }
        };
      }
    } else if (typeof process === "object") {
      const timeOrigin = performance?.timeOrigin;
      return _definePolyfillMarks(timeOrigin);
    } else {
      console.trace("perf-util loaded in UNKNOWN environment");
      return _definePolyfillMarks();
    }
  }
  function _factory(sharedObj2) {
    if (!sharedObj2.MonacoPerformanceMarks) {
      sharedObj2.MonacoPerformanceMarks = _define();
    }
    return sharedObj2.MonacoPerformanceMarks;
  }
  var sharedObj;
  if (typeof global === "object") {
    sharedObj = global;
  } else if (typeof self === "object") {
    sharedObj = self;
  } else {
    sharedObj = {};
  }
  if (!isESM && typeof define === "function") {
    define([], function() {
      return _factory(sharedObj);
    });
  } else if (typeof module === "object" && typeof module.exports === "object") {
    module.exports = _factory(sharedObj);
  } else {
    console.trace("perf-util defined in UNKNOWN context (neither requirejs or commonjs)");
    sharedObj.perf = _factory(sharedObj);
  }
})();
var mark = module.exports.mark;
var getMarks = module.exports.getMarks;

// out-build/bootstrap-node.js
import * as path from "path";
import * as fs from "fs";
import { fileURLToPath } from "url";
import { createRequire } from "node:module";
var require2 = createRequire(import.meta.url);
var module2 = { exports: {} };
var __dirname = path.dirname(fileURLToPath(import.meta.url));
Error.stackTraceLimit = 100;
if (!process.env["VSCODE_HANDLES_SIGPIPE"]) {
  let didLogAboutSIGPIPE = false;
  process.on("SIGPIPE", () => {
    if (!didLogAboutSIGPIPE) {
      didLogAboutSIGPIPE = true;
      console.error(new Error(`Unexpected SIGPIPE`));
    }
  });
}
function setupCurrentWorkingDirectory() {
  try {
    if (typeof process.env["VSCODE_CWD"] !== "string") {
      process.env["VSCODE_CWD"] = process.cwd();
    }
    if (process.platform === "win32") {
      process.chdir(path.dirname(process.execPath));
    }
  } catch (err) {
    console.error(err);
  }
}
setupCurrentWorkingDirectory();
module2.exports.devInjectNodeModuleLookupPath = function(injectPath) {
  if (!process.env["VSCODE_DEV"]) {
    return;
  }
  if (!injectPath) {
    throw new Error("Missing injectPath");
  }
  const Module = require2("node:module");
  Module.register("./bootstrap-import.js", { parentURL: import.meta.url, data: injectPath });
};
module2.exports.removeGlobalNodeJsModuleLookupPaths = function() {
  if (typeof process?.versions?.electron === "string") {
    return;
  }
  const Module = require2("module");
  const globalPaths = Module.globalPaths;
  const originalResolveLookupPaths = Module._resolveLookupPaths;
  Module._resolveLookupPaths = function(moduleName, parent) {
    const paths = originalResolveLookupPaths(moduleName, parent);
    if (Array.isArray(paths)) {
      let commonSuffixLength = 0;
      while (commonSuffixLength < paths.length && paths[paths.length - 1 - commonSuffixLength] === globalPaths[globalPaths.length - 1 - commonSuffixLength]) {
        commonSuffixLength++;
      }
      return paths.slice(0, paths.length - commonSuffixLength);
    }
    return paths;
  };
};
module2.exports.configurePortable = function(product) {
  const appRoot = path.dirname(__dirname);
  function getApplicationPath(path3) {
    if (process.env["VSCODE_DEV"]) {
      return appRoot;
    }
    if (process.platform === "darwin") {
      return path3.dirname(path3.dirname(path3.dirname(appRoot)));
    }
    return path3.dirname(path3.dirname(appRoot));
  }
  function getPortableDataPath(path3) {
    if (process.env["VSCODE_PORTABLE"]) {
      return process.env["VSCODE_PORTABLE"];
    }
    if (process.platform === "win32" || process.platform === "linux") {
      return path3.join(getApplicationPath(path3), "data");
    }
    const portableDataName = product.portable || `${product.applicationName}-portable-data`;
    return path3.join(path3.dirname(getApplicationPath(path3)), portableDataName);
  }
  const portableDataPath = getPortableDataPath(path);
  const isPortable = !("target" in product) && fs.existsSync(portableDataPath);
  const portableTempPath = path.join(portableDataPath, "tmp");
  const isTempPortable = isPortable && fs.existsSync(portableTempPath);
  if (isPortable) {
    process.env["VSCODE_PORTABLE"] = portableDataPath;
  } else {
    delete process.env["VSCODE_PORTABLE"];
  }
  if (isTempPortable) {
    if (process.platform === "win32") {
      process.env["TMP"] = portableTempPath;
      process.env["TEMP"] = portableTempPath;
    } else {
      process.env["TMPDIR"] = portableTempPath;
    }
  }
  return {
    portableDataPath,
    isPortable
  };
};
module2.exports.enableASARSupport = function() {
};
module2.exports.fileUriFromPath = function(path3, config) {
  let pathName = path3.replace(/\\/g, "/");
  if (pathName.length > 0 && pathName.charAt(0) !== "/") {
    pathName = `/${pathName}`;
  }
  let uri;
  if (config.isWindows && pathName.startsWith("//")) {
    uri = encodeURI(`${config.scheme || "file"}:${pathName}`);
  } else {
    uri = encodeURI(`${config.scheme || "file"}://${config.fallbackAuthority || ""}${pathName}`);
  }
  return uri.replace(/#/g, "%23");
};
var $P = module2.exports.devInjectNodeModuleLookupPath;
var $Q = module2.exports.removeGlobalNodeJsModuleLookupPaths;
var $R = module2.exports.configurePortable;
var $S = module2.exports.enableASARSupport;
var $T = module2.exports.fileUriFromPath;

// out-build/bootstrap-amd.js
import * as path2 from "path";
import * as fs2 from "fs";
import { fileURLToPath as fileURLToPath2 } from "url";
import { createRequire as createRequire3, register } from "node:module";

// out-build/bootstrap-meta.js
import { createRequire as createRequire2 } from "node:module";
var require3 = createRequire2(import.meta.url);
var module3 = { exports: {} };
var productObj = { BUILD_INSERT_PRODUCT_CONFIGURATION: "BUILD_INSERT_PRODUCT_CONFIGURATION" };
if (productObj["BUILD_INSERT_PRODUCT_CONFIGURATION"]) {
  productObj = require3("../product.json");
}
var pkgObj = { BUILD_INSERT_PACKAGE_CONFIGURATION: "BUILD_INSERT_PACKAGE_CONFIGURATION" };
if (pkgObj["BUILD_INSERT_PACKAGE_CONFIGURATION"]) {
  pkgObj = require3("../package.json");
}
module3.exports.product = productObj;
module3.exports.pkg = pkgObj;
var $N = module3.exports.product;
var $O = module3.exports.pkg;

// out-build/bootstrap-amd.js
var require4 = createRequire3(import.meta.url);
var module4 = { exports: {} };
var __dirname2 = path2.dirname(fileURLToPath2(import.meta.url));
if (process.env["ELECTRON_RUN_AS_NODE"] || process.versions["electron"]) {
  const jsCode = `
	export async function resolve(specifier, context, nextResolve) {
		if (specifier === 'fs') {
			return {
				format: 'builtin',
				shortCircuit: true,
				url: 'node:original-fs'
			};
		}

		// Defer to the next hook in the chain, which would be the
		// Node.js default resolve if this is the last user-specified loader.
		return nextResolve(specifier, context);
	}`;
  register(`data:text/javascript;base64,${Buffer.from(jsCode).toString("base64")}`, import.meta.url);
}
globalThis._VSCODE_PRODUCT_JSON = { ...$N };
if (process.env["VSCODE_DEV"]) {
  try {
    const overrides = require4("../product.overrides.json");
    globalThis._VSCODE_PRODUCT_JSON = Object.assign(globalThis._VSCODE_PRODUCT_JSON, overrides);
  } catch (error) {
  }
}
globalThis._VSCODE_PACKAGE_JSON = { ...$O };
globalThis._VSCODE_FILE_ROOT = __dirname2;
var setupNLSResult = void 0;
function setupNLS() {
  if (!setupNLSResult) {
    setupNLSResult = doSetupNLS();
  }
  return setupNLSResult;
}
async function doSetupNLS() {
  mark("code/amd/willLoadNls");
  let nlsConfig = void 0;
  let messagesFile;
  if (process.env["VSCODE_NLS_CONFIG"]) {
    try {
      nlsConfig = JSON.parse(process.env["VSCODE_NLS_CONFIG"]);
      if (nlsConfig?.languagePack?.messagesFile) {
        messagesFile = nlsConfig.languagePack.messagesFile;
      } else if (nlsConfig?.defaultMessagesFile) {
        messagesFile = nlsConfig.defaultMessagesFile;
      }
      globalThis._VSCODE_NLS_LANGUAGE = nlsConfig?.resolvedLanguage;
    } catch (e) {
      console.error(`Error reading VSCODE_NLS_CONFIG from environment: ${e}`);
    }
  }
  if (process.env["VSCODE_DEV"] || // no NLS support in dev mode
  !messagesFile) {
    return void 0;
  }
  try {
    globalThis._VSCODE_NLS_MESSAGES = JSON.parse((await fs2.promises.readFile(messagesFile)).toString());
  } catch (error) {
    console.error(`Error reading NLS messages file ${messagesFile}: ${error}`);
    if (nlsConfig?.languagePack?.corruptMarkerFile) {
      try {
        await fs2.promises.writeFile(nlsConfig.languagePack.corruptMarkerFile, "corrupted");
      } catch (error2) {
        console.error(`Error writing corrupted NLS marker file: ${error2}`);
      }
    }
    if (nlsConfig?.defaultMessagesFile && nlsConfig.defaultMessagesFile !== messagesFile) {
      try {
        globalThis._VSCODE_NLS_MESSAGES = JSON.parse((await fs2.promises.readFile(nlsConfig.defaultMessagesFile)).toString());
      } catch (error2) {
        console.error(`Error reading default NLS messages file ${nlsConfig.defaultMessagesFile}: ${error2}`);
      }
    }
  }
  mark("code/amd/didLoadNls");
  return nlsConfig;
}
module4.exports.load = function(entrypoint, onLoad, onError) {
  if (!entrypoint) {
    return;
  }
  entrypoint = `./${entrypoint}.js`;
  onLoad = onLoad || function() {
  };
  onError = onError || function(err) {
    console.error(err);
  };
  setupNLS().then(() => {
    mark(`code/fork/willLoadCode`);
    import(entrypoint).then(onLoad, onError);
  });
};
var $U = module4.exports.load;

// out-build/bootstrap-fork.js
mark("code/fork/start");
configureCrashReporter();
$Q();
$S();
if (process.env["VSCODE_DEV_INJECT_NODE_MODULE_LOOKUP_PATH"]) {
  $P(process.env["VSCODE_DEV_INJECT_NODE_MODULE_LOOKUP_PATH"]);
}
if (!!process.send && process.env["VSCODE_PIPE_LOGGING"] === "true") {
  pipeLoggingToParent();
}
if (!process.env["VSCODE_HANDLES_UNCAUGHT_ERRORS"]) {
  handleExceptions();
}
if (process.env["VSCODE_PARENT_PID"]) {
  terminateWhenParentTerminates();
}
$U(process.env["VSCODE_AMD_ENTRYPOINT"]);
function pipeLoggingToParent() {
  const MAX_STREAM_BUFFER_LENGTH = 1024 * 1024;
  const MAX_LENGTH = 1e5;
  function safeToArray(args) {
    const seen = [];
    const argsArray = [];
    if (args.length) {
      for (let i = 0; i < args.length; i++) {
        let arg = args[i];
        if (typeof arg === "undefined") {
          arg = "undefined";
        } else if (arg instanceof Error) {
          const errorObj = arg;
          if (errorObj.stack) {
            arg = errorObj.stack;
          } else {
            arg = errorObj.toString();
          }
        }
        argsArray.push(arg);
      }
    }
    try {
      const res = JSON.stringify(argsArray, function(key, value) {
        if (isObject(value) || Array.isArray(value)) {
          if (seen.indexOf(value) !== -1) {
            return "[Circular]";
          }
          seen.push(value);
        }
        return value;
      });
      if (res.length > MAX_LENGTH) {
        return "Output omitted for a large object that exceeds the limits";
      }
      return res;
    } catch (error) {
      return `Output omitted for an object that cannot be inspected ('${error.toString()}')`;
    }
  }
  function safeSend(arg) {
    try {
      if (process.send) {
        process.send(arg);
      }
    } catch (error) {
    }
  }
  function isObject(obj) {
    return typeof obj === "object" && obj !== null && !Array.isArray(obj) && !(obj instanceof RegExp) && !(obj instanceof Date);
  }
  function safeSendConsoleMessage(severity, args) {
    safeSend({ type: "__$console", severity, arguments: args });
  }
  function wrapConsoleMethod(method, severity) {
    Object.defineProperty(console, method, {
      set: () => {
      },
      get: () => function() {
        safeSendConsoleMessage(severity, safeToArray(arguments));
      }
    });
  }
  function wrapStream(streamName, severity) {
    const stream = process[streamName];
    const original = stream.write;
    let buf = "";
    Object.defineProperty(stream, "write", {
      set: () => {
      },
      get: () => (chunk, encoding, callback) => {
        buf += chunk.toString(encoding);
        const eol = buf.length > MAX_STREAM_BUFFER_LENGTH ? buf.length : buf.lastIndexOf("\n");
        if (eol !== -1) {
          console[severity](buf.slice(0, eol));
          buf = buf.slice(eol + 1);
        }
        original.call(stream, chunk, encoding, callback);
      }
    });
  }
  if (process.env["VSCODE_VERBOSE_LOGGING"] === "true") {
    wrapConsoleMethod("info", "log");
    wrapConsoleMethod("log", "log");
    wrapConsoleMethod("warn", "warn");
    wrapConsoleMethod("error", "error");
  } else {
    console.log = function() {
    };
    console.warn = function() {
    };
    console.info = function() {
    };
    wrapConsoleMethod("error", "error");
  }
  wrapStream("stderr", "error");
  wrapStream("stdout", "log");
}
function handleExceptions() {
  process.on("uncaughtException", function(err) {
    console.error("Uncaught Exception: ", err);
  });
  process.on("unhandledRejection", function(reason) {
    console.error("Unhandled Promise Rejection: ", reason);
  });
}
function terminateWhenParentTerminates() {
  const parentPid = Number(process.env["VSCODE_PARENT_PID"]);
  if (typeof parentPid === "number" && !isNaN(parentPid)) {
    setInterval(function() {
      try {
        process.kill(parentPid, 0);
      } catch (e) {
        process.exit();
      }
    }, 5e3);
  }
}
function configureCrashReporter() {
  const crashReporterProcessType = process.env["VSCODE_CRASH_REPORTER_PROCESS_TYPE"];
  if (crashReporterProcessType) {
    try {
      if (process["crashReporter"] && typeof process["crashReporter"].addExtraParameter === "function") {
        process["crashReporter"].addExtraParameter("processType", crashReporterProcessType);
      }
    } catch (error) {
      console.error(error);
    }
  }
}

//# sourceMappingURL=bootstrap-fork.js.map
