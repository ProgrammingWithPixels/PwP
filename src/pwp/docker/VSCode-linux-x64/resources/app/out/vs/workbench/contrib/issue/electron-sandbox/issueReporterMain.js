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


// out-build/vs/base/browser/window.js
function $YS(targetWindow, fallbackWindowId) {
  const codeWindow = targetWindow;
  if (typeof codeWindow.vscodeWindowId !== "number") {
    Object.defineProperty(codeWindow, "vscodeWindowId", {
      get: () => fallbackWindowId
    });
  }
}
var $ZS = window;

// out-build/vs/base/common/collections.js
var _a;
function $a(data, groupFn) {
  const result = /* @__PURE__ */ Object.create(null);
  for (const element of data) {
    const key = groupFn(element);
    let target = result[key];
    if (!target) {
      target = result[key] = [];
    }
    target.push(element);
  }
  return result;
}
var $e = class {
  static {
    _a = Symbol.toStringTag;
  }
  constructor(values, b) {
    this.b = b;
    this.a = /* @__PURE__ */ new Map();
    this[_a] = "SetWithKey";
    for (const value of values) {
      this.add(value);
    }
  }
  get size() {
    return this.a.size;
  }
  add(value) {
    const key = this.b(value);
    this.a.set(key, value);
    return this;
  }
  delete(value) {
    return this.a.delete(this.b(value));
  }
  has(value) {
    return this.a.has(this.b(value));
  }
  *entries() {
    for (const entry of this.a.values()) {
      yield [entry, entry];
    }
  }
  keys() {
    return this.values();
  }
  *values() {
    for (const entry of this.a.values()) {
      yield entry;
    }
  }
  clear() {
    this.a.clear();
  }
  forEach(callbackfn, thisArg) {
    this.a.forEach((entry) => callbackfn.call(thisArg, entry, entry, this));
  }
  [Symbol.iterator]() {
    return this.values();
  }
};

// out-build/vs/base/common/errors.js
var $8 = class {
  constructor() {
    this.b = [];
    this.a = function(e) {
      setTimeout(() => {
        if (e.stack) {
          if ($ob.isErrorNoTelemetry(e)) {
            throw new $ob(e.message + "\n\n" + e.stack);
          }
          throw new Error(e.message + "\n\n" + e.stack);
        }
        throw e;
      }, 0);
    };
  }
  addListener(listener) {
    this.b.push(listener);
    return () => {
      this.d(listener);
    };
  }
  c(e) {
    this.b.forEach((listener) => {
      listener(e);
    });
  }
  d(listener) {
    this.b.splice(this.b.indexOf(listener), 1);
  }
  setUnexpectedErrorHandler(newUnexpectedErrorHandler) {
    this.a = newUnexpectedErrorHandler;
  }
  getUnexpectedErrorHandler() {
    return this.a;
  }
  onUnexpectedError(e) {
    this.a(e);
    this.c(e);
  }
  // For external errors, we don't want the listeners to be called
  onUnexpectedExternalError(e) {
    this.a(e);
  }
};
var $9 = new $8();
function $ab(e) {
  if (!$eb(e)) {
    $9.onUnexpectedError(e);
  }
  return void 0;
}
var canceledName = "Canceled";
function $eb(error) {
  if (error instanceof $fb) {
    return true;
  }
  return error instanceof Error && error.name === canceledName && error.message === canceledName;
}
var $fb = class extends Error {
  constructor() {
    super(canceledName);
    this.name = this.message;
  }
};
function $hb(name) {
  if (name) {
    return new Error(`Illegal argument: ${name}`);
  } else {
    return new Error("Illegal argument");
  }
}
function $ib(name) {
  if (name) {
    return new Error(`Illegal state: ${name}`);
  } else {
    return new Error("Illegal state");
  }
}
var $ob = class _$ob extends Error {
  constructor(msg) {
    super(msg);
    this.name = "CodeExpectedError";
  }
  static fromError(err) {
    if (err instanceof _$ob) {
      return err;
    }
    const result = new _$ob();
    result.message = err.message;
    result.stack = err.stack;
    return result;
  }
  static isErrorNoTelemetry(err) {
    return err.name === "CodeExpectedError";
  }
};

// out-build/vs/base/common/functional.js
function $qb(fn, fnDidRunCallback) {
  const _this = this;
  let didCall = false;
  let result;
  return function() {
    if (didCall) {
      return result;
    }
    didCall = true;
    if (fnDidRunCallback) {
      try {
        result = fn.apply(_this, arguments);
      } finally {
        fnDidRunCallback();
      }
    } else {
      result = fn.apply(_this, arguments);
    }
    return result;
  };
}

// out-build/vs/base/common/arraysFind.js
function $ub(array, predicate, startIdx = 0, endIdxEx = array.length) {
  let i = startIdx;
  let j = endIdxEx;
  while (i < j) {
    const k = Math.floor((i + j) / 2);
    if (predicate(array[k])) {
      i = k + 1;
    } else {
      j = k;
    }
  }
  return i - 1;
}
var $yb = class _$yb {
  static {
    this.assertInvariants = false;
  }
  constructor(e) {
    this.e = e;
    this.c = 0;
  }
  /**
   * The predicate must be monotonous, i.e. `arr.map(predicate)` must be like `[true, ..., true, false, ..., false]`!
   * For subsequent calls, current predicate must be weaker than (or equal to) the previous predicate, i.e. more entries must be `true`.
   */
  findLastMonotonous(predicate) {
    if (_$yb.assertInvariants) {
      if (this.d) {
        for (const item of this.e) {
          if (this.d(item) && !predicate(item)) {
            throw new Error("MonotonousArray: current predicate must be weaker than (or equal to) the previous predicate.");
          }
        }
      }
      this.d = predicate;
    }
    const idx = $ub(this.e, predicate, this.c);
    this.c = idx + 1;
    return idx === -1 ? void 0 : this.e[idx];
  }
};

// out-build/vs/base/common/arrays.js
function $Fb(array, n = 0) {
  return array[array.length - (1 + n)];
}
var CompareResult;
(function(CompareResult2) {
  function isLessThan(result) {
    return result < 0;
  }
  CompareResult2.isLessThan = isLessThan;
  function isLessThanOrEqual(result) {
    return result <= 0;
  }
  CompareResult2.isLessThanOrEqual = isLessThanOrEqual;
  function isGreaterThan(result) {
    return result > 0;
  }
  CompareResult2.isGreaterThan = isGreaterThan;
  function isNeitherLessOrGreaterThan(result) {
    return result === 0;
  }
  CompareResult2.isNeitherLessOrGreaterThan = isNeitherLessOrGreaterThan;
  CompareResult2.greaterThan = 1;
  CompareResult2.lessThan = -1;
  CompareResult2.neitherLessOrGreaterThan = 0;
})(CompareResult || (CompareResult = {}));
function $ec(selector, comparator) {
  return (a, b) => comparator(selector(a), selector(b));
}
var $gc = (a, b) => a - b;
var $kc = class _$kc {
  static {
    this.empty = new _$kc((_callback) => {
    });
  }
  constructor(iterate) {
    this.iterate = iterate;
  }
  forEach(handler) {
    this.iterate((item) => {
      handler(item);
      return true;
    });
  }
  toArray() {
    const result = [];
    this.iterate((item) => {
      result.push(item);
      return true;
    });
    return result;
  }
  filter(predicate) {
    return new _$kc((cb) => this.iterate((item) => predicate(item) ? cb(item) : true));
  }
  map(mapFn) {
    return new _$kc((cb) => this.iterate((item) => cb(mapFn(item))));
  }
  some(predicate) {
    let result = false;
    this.iterate((item) => {
      result = predicate(item);
      return !result;
    });
    return result;
  }
  findFirst(predicate) {
    let result;
    this.iterate((item) => {
      if (predicate(item)) {
        result = item;
        return false;
      }
      return true;
    });
    return result;
  }
  findLast(predicate) {
    let result;
    this.iterate((item) => {
      if (predicate(item)) {
        result = item;
      }
      return true;
    });
    return result;
  }
  findLastMaxBy(comparator) {
    let result;
    let first = true;
    this.iterate((item) => {
      if (first || CompareResult.isGreaterThan(comparator(item, result))) {
        first = false;
        result = item;
      }
      return true;
    });
    return result;
  }
};

// out-build/vs/base/common/map.js
var _a2;
var _b;
var _c;
var ResourceMapEntry = class {
  constructor(uri, value) {
    this.uri = uri;
    this.value = value;
  }
};
function isEntries(arg) {
  return Array.isArray(arg);
}
var $Mc = class _$Mc {
  static {
    this.c = (resource) => resource.toString();
  }
  constructor(arg, toKey) {
    this[_a2] = "ResourceMap";
    if (arg instanceof _$Mc) {
      this.d = new Map(arg.d);
      this.e = toKey ?? _$Mc.c;
    } else if (isEntries(arg)) {
      this.d = /* @__PURE__ */ new Map();
      this.e = toKey ?? _$Mc.c;
      for (const [resource, value] of arg) {
        this.set(resource, value);
      }
    } else {
      this.d = /* @__PURE__ */ new Map();
      this.e = arg ?? _$Mc.c;
    }
  }
  set(resource, value) {
    this.d.set(this.e(resource), new ResourceMapEntry(resource, value));
    return this;
  }
  get(resource) {
    return this.d.get(this.e(resource))?.value;
  }
  has(resource) {
    return this.d.has(this.e(resource));
  }
  get size() {
    return this.d.size;
  }
  clear() {
    this.d.clear();
  }
  delete(resource) {
    return this.d.delete(this.e(resource));
  }
  forEach(clb, thisArg) {
    if (typeof thisArg !== "undefined") {
      clb = clb.bind(thisArg);
    }
    for (const [_, entry] of this.d) {
      clb(entry.value, entry.uri, this);
    }
  }
  *values() {
    for (const entry of this.d.values()) {
      yield entry.value;
    }
  }
  *keys() {
    for (const entry of this.d.values()) {
      yield entry.uri;
    }
  }
  *entries() {
    for (const entry of this.d.values()) {
      yield [entry.uri, entry.value];
    }
  }
  *[(_a2 = Symbol.toStringTag, Symbol.iterator)]() {
    for (const [, entry] of this.d) {
      yield [entry.uri, entry.value];
    }
  }
};
var $Nc = class {
  constructor(entriesOrKey, toKey) {
    this[_b] = "ResourceSet";
    if (!entriesOrKey || typeof entriesOrKey === "function") {
      this.c = new $Mc(entriesOrKey);
    } else {
      this.c = new $Mc(toKey);
      entriesOrKey.forEach(this.add, this);
    }
  }
  get size() {
    return this.c.size;
  }
  add(value) {
    this.c.set(value, value);
    return this;
  }
  clear() {
    this.c.clear();
  }
  delete(value) {
    return this.c.delete(value);
  }
  forEach(callbackfn, thisArg) {
    this.c.forEach((_value, key) => callbackfn.call(thisArg, key, key, this));
  }
  has(value) {
    return this.c.has(value);
  }
  entries() {
    return this.c.entries();
  }
  keys() {
    return this.c.keys();
  }
  values() {
    return this.c.keys();
  }
  [(_b = Symbol.toStringTag, Symbol.iterator)]() {
    return this.keys();
  }
};
var Touch;
(function(Touch2) {
  Touch2[Touch2["None"] = 0] = "None";
  Touch2[Touch2["AsOld"] = 1] = "AsOld";
  Touch2[Touch2["AsNew"] = 2] = "AsNew";
})(Touch || (Touch = {}));
var $Oc = class {
  constructor() {
    this[_c] = "LinkedMap";
    this.c = /* @__PURE__ */ new Map();
    this.d = void 0;
    this.e = void 0;
    this.f = 0;
    this.g = 0;
  }
  clear() {
    this.c.clear();
    this.d = void 0;
    this.e = void 0;
    this.f = 0;
    this.g++;
  }
  isEmpty() {
    return !this.d && !this.e;
  }
  get size() {
    return this.f;
  }
  get first() {
    return this.d?.value;
  }
  get last() {
    return this.e?.value;
  }
  has(key) {
    return this.c.has(key);
  }
  get(key, touch = 0) {
    const item = this.c.get(key);
    if (!item) {
      return void 0;
    }
    if (touch !== 0) {
      this.m(item, touch);
    }
    return item.value;
  }
  set(key, value, touch = 0) {
    let item = this.c.get(key);
    if (item) {
      item.value = value;
      if (touch !== 0) {
        this.m(item, touch);
      }
    } else {
      item = { key, value, next: void 0, previous: void 0 };
      switch (touch) {
        case 0:
          this.k(item);
          break;
        case 1:
          this.j(item);
          break;
        case 2:
          this.k(item);
          break;
        default:
          this.k(item);
          break;
      }
      this.c.set(key, item);
      this.f++;
    }
    return this;
  }
  delete(key) {
    return !!this.remove(key);
  }
  remove(key) {
    const item = this.c.get(key);
    if (!item) {
      return void 0;
    }
    this.c.delete(key);
    this.l(item);
    this.f--;
    return item.value;
  }
  shift() {
    if (!this.d && !this.e) {
      return void 0;
    }
    if (!this.d || !this.e) {
      throw new Error("Invalid list");
    }
    const item = this.d;
    this.c.delete(item.key);
    this.l(item);
    this.f--;
    return item.value;
  }
  forEach(callbackfn, thisArg) {
    const state = this.g;
    let current = this.d;
    while (current) {
      if (thisArg) {
        callbackfn.bind(thisArg)(current.value, current.key, this);
      } else {
        callbackfn(current.value, current.key, this);
      }
      if (this.g !== state) {
        throw new Error(`LinkedMap got modified during iteration.`);
      }
      current = current.next;
    }
  }
  keys() {
    const map = this;
    const state = this.g;
    let current = this.d;
    const iterator = {
      [Symbol.iterator]() {
        return iterator;
      },
      next() {
        if (map.g !== state) {
          throw new Error(`LinkedMap got modified during iteration.`);
        }
        if (current) {
          const result = { value: current.key, done: false };
          current = current.next;
          return result;
        } else {
          return { value: void 0, done: true };
        }
      }
    };
    return iterator;
  }
  values() {
    const map = this;
    const state = this.g;
    let current = this.d;
    const iterator = {
      [Symbol.iterator]() {
        return iterator;
      },
      next() {
        if (map.g !== state) {
          throw new Error(`LinkedMap got modified during iteration.`);
        }
        if (current) {
          const result = { value: current.value, done: false };
          current = current.next;
          return result;
        } else {
          return { value: void 0, done: true };
        }
      }
    };
    return iterator;
  }
  entries() {
    const map = this;
    const state = this.g;
    let current = this.d;
    const iterator = {
      [Symbol.iterator]() {
        return iterator;
      },
      next() {
        if (map.g !== state) {
          throw new Error(`LinkedMap got modified during iteration.`);
        }
        if (current) {
          const result = { value: [current.key, current.value], done: false };
          current = current.next;
          return result;
        } else {
          return { value: void 0, done: true };
        }
      }
    };
    return iterator;
  }
  [(_c = Symbol.toStringTag, Symbol.iterator)]() {
    return this.entries();
  }
  h(newSize) {
    if (newSize >= this.size) {
      return;
    }
    if (newSize === 0) {
      this.clear();
      return;
    }
    let current = this.d;
    let currentSize = this.size;
    while (current && currentSize > newSize) {
      this.c.delete(current.key);
      current = current.next;
      currentSize--;
    }
    this.d = current;
    this.f = currentSize;
    if (current) {
      current.previous = void 0;
    }
    this.g++;
  }
  i(newSize) {
    if (newSize >= this.size) {
      return;
    }
    if (newSize === 0) {
      this.clear();
      return;
    }
    let current = this.e;
    let currentSize = this.size;
    while (current && currentSize > newSize) {
      this.c.delete(current.key);
      current = current.previous;
      currentSize--;
    }
    this.e = current;
    this.f = currentSize;
    if (current) {
      current.next = void 0;
    }
    this.g++;
  }
  j(item) {
    if (!this.d && !this.e) {
      this.e = item;
    } else if (!this.d) {
      throw new Error("Invalid list");
    } else {
      item.next = this.d;
      this.d.previous = item;
    }
    this.d = item;
    this.g++;
  }
  k(item) {
    if (!this.d && !this.e) {
      this.d = item;
    } else if (!this.e) {
      throw new Error("Invalid list");
    } else {
      item.previous = this.e;
      this.e.next = item;
    }
    this.e = item;
    this.g++;
  }
  l(item) {
    if (item === this.d && item === this.e) {
      this.d = void 0;
      this.e = void 0;
    } else if (item === this.d) {
      if (!item.next) {
        throw new Error("Invalid list");
      }
      item.next.previous = void 0;
      this.d = item.next;
    } else if (item === this.e) {
      if (!item.previous) {
        throw new Error("Invalid list");
      }
      item.previous.next = void 0;
      this.e = item.previous;
    } else {
      const next = item.next;
      const previous = item.previous;
      if (!next || !previous) {
        throw new Error("Invalid list");
      }
      next.previous = previous;
      previous.next = next;
    }
    item.next = void 0;
    item.previous = void 0;
    this.g++;
  }
  m(item, touch) {
    if (!this.d || !this.e) {
      throw new Error("Invalid list");
    }
    if (touch !== 1 && touch !== 2) {
      return;
    }
    if (touch === 1) {
      if (item === this.d) {
        return;
      }
      const next = item.next;
      const previous = item.previous;
      if (item === this.e) {
        previous.next = void 0;
        this.e = previous;
      } else {
        next.previous = previous;
        previous.next = next;
      }
      item.previous = void 0;
      item.next = this.d;
      this.d.previous = item;
      this.d = item;
      this.g++;
    } else if (touch === 2) {
      if (item === this.e) {
        return;
      }
      const next = item.next;
      const previous = item.previous;
      if (item === this.d) {
        next.previous = void 0;
        this.d = next;
      } else {
        next.previous = previous;
        previous.next = next;
      }
      item.next = void 0;
      item.previous = this.e;
      this.e.next = item;
      this.e = item;
      this.g++;
    }
  }
  toJSON() {
    const data = [];
    this.forEach((value, key) => {
      data.push([key, value]);
    });
    return data;
  }
  fromJSON(data) {
    this.clear();
    for (const [key, value] of data) {
      this.set(key, value);
    }
  }
};
var Cache = class extends $Oc {
  constructor(limit, ratio = 1) {
    super();
    this.n = limit;
    this.o = Math.min(Math.max(0, ratio), 1);
  }
  get limit() {
    return this.n;
  }
  set limit(limit) {
    this.n = limit;
    this.p();
  }
  get ratio() {
    return this.o;
  }
  set ratio(ratio) {
    this.o = Math.min(Math.max(0, ratio), 1);
    this.p();
  }
  get(key, touch = 2) {
    return super.get(key, touch);
  }
  peek(key) {
    return super.get(
      key,
      0
      /* Touch.None */
    );
  }
  set(key, value) {
    super.set(
      key,
      value,
      2
      /* Touch.AsNew */
    );
    return this;
  }
  p() {
    if (this.size > this.n) {
      this.q(Math.round(this.n * this.o));
    }
  }
};
var $Pc = class extends Cache {
  constructor(limit, ratio = 1) {
    super(limit, ratio);
  }
  q(newSize) {
    this.h(newSize);
  }
  set(key, value) {
    super.set(key, value);
    this.p();
    return this;
  }
};
var $Tc = class {
  constructor() {
    this.c = /* @__PURE__ */ new Map();
  }
  add(key, value) {
    let values = this.c.get(key);
    if (!values) {
      values = /* @__PURE__ */ new Set();
      this.c.set(key, values);
    }
    values.add(value);
  }
  delete(key, value) {
    const values = this.c.get(key);
    if (!values) {
      return;
    }
    values.delete(value);
    if (values.size === 0) {
      this.c.delete(key);
    }
  }
  forEach(key, fn) {
    const values = this.c.get(key);
    if (!values) {
      return;
    }
    values.forEach(fn);
  }
  get(key) {
    const values = this.c.get(key);
    if (!values) {
      return /* @__PURE__ */ new Set();
    }
    return values;
  }
};

// out-build/vs/base/common/iterator.js
var Iterable;
(function(Iterable2) {
  function is(thing) {
    return thing && typeof thing === "object" && typeof thing[Symbol.iterator] === "function";
  }
  Iterable2.is = is;
  const _empty2 = Object.freeze([]);
  function empty() {
    return _empty2;
  }
  Iterable2.empty = empty;
  function* single(element) {
    yield element;
  }
  Iterable2.single = single;
  function wrap(iterableOrElement) {
    if (is(iterableOrElement)) {
      return iterableOrElement;
    } else {
      return single(iterableOrElement);
    }
  }
  Iterable2.wrap = wrap;
  function from(iterable) {
    return iterable || _empty2;
  }
  Iterable2.from = from;
  function* reverse(array) {
    for (let i = array.length - 1; i >= 0; i--) {
      yield array[i];
    }
  }
  Iterable2.reverse = reverse;
  function isEmpty(iterable) {
    return !iterable || iterable[Symbol.iterator]().next().done === true;
  }
  Iterable2.isEmpty = isEmpty;
  function first(iterable) {
    return iterable[Symbol.iterator]().next().value;
  }
  Iterable2.first = first;
  function some(iterable, predicate) {
    let i = 0;
    for (const element of iterable) {
      if (predicate(element, i++)) {
        return true;
      }
    }
    return false;
  }
  Iterable2.some = some;
  function find(iterable, predicate) {
    for (const element of iterable) {
      if (predicate(element)) {
        return element;
      }
    }
    return void 0;
  }
  Iterable2.find = find;
  function* filter(iterable, predicate) {
    for (const element of iterable) {
      if (predicate(element)) {
        yield element;
      }
    }
  }
  Iterable2.filter = filter;
  function* map(iterable, fn) {
    let index = 0;
    for (const element of iterable) {
      yield fn(element, index++);
    }
  }
  Iterable2.map = map;
  function* flatMap(iterable, fn) {
    let index = 0;
    for (const element of iterable) {
      yield* fn(element, index++);
    }
  }
  Iterable2.flatMap = flatMap;
  function* concat(...iterables) {
    for (const iterable of iterables) {
      yield* iterable;
    }
  }
  Iterable2.concat = concat;
  function reduce(iterable, reducer, initialValue) {
    let value = initialValue;
    for (const element of iterable) {
      value = reducer(value, element);
    }
    return value;
  }
  Iterable2.reduce = reduce;
  function* slice(arr, from2, to = arr.length) {
    if (from2 < 0) {
      from2 += arr.length;
    }
    if (to < 0) {
      to += arr.length;
    } else if (to > arr.length) {
      to = arr.length;
    }
    for (; from2 < to; from2++) {
      yield arr[from2];
    }
  }
  Iterable2.slice = slice;
  function consume(iterable, atMost = Number.POSITIVE_INFINITY) {
    const consumed = [];
    if (atMost === 0) {
      return [consumed, iterable];
    }
    const iterator = iterable[Symbol.iterator]();
    for (let i = 0; i < atMost; i++) {
      const next = iterator.next();
      if (next.done) {
        return [consumed, Iterable2.empty()];
      }
      consumed.push(next.value);
    }
    return [consumed, { [Symbol.iterator]() {
      return iterator;
    } }];
  }
  Iterable2.consume = consume;
  async function asyncToArray(iterable) {
    const result = [];
    for await (const item of iterable) {
      result.push(item);
    }
    return Promise.resolve(result);
  }
  Iterable2.asyncToArray = asyncToArray;
})(Iterable || (Iterable = {}));

// out-build/vs/base/common/lifecycle.js
var TRACK_DISPOSABLES = false;
var disposableTracker = null;
var $Xc = class _$Xc {
  constructor() {
    this.b = /* @__PURE__ */ new Map();
  }
  static {
    this.a = 0;
  }
  c(d) {
    let val = this.b.get(d);
    if (!val) {
      val = { parent: null, source: null, isSingleton: false, value: d, idx: _$Xc.a++ };
      this.b.set(d, val);
    }
    return val;
  }
  trackDisposable(d) {
    const data = this.c(d);
    if (!data.source) {
      data.source = new Error().stack;
    }
  }
  setParent(child, parent) {
    const data = this.c(child);
    data.parent = parent;
  }
  markAsDisposed(x) {
    this.b.delete(x);
  }
  markAsSingleton(disposable) {
    this.c(disposable).isSingleton = true;
  }
  f(data, cache) {
    const cacheValue = cache.get(data);
    if (cacheValue) {
      return cacheValue;
    }
    const result = data.parent ? this.f(this.c(data.parent), cache) : data;
    cache.set(data, result);
    return result;
  }
  getTrackedDisposables() {
    const rootParentCache = /* @__PURE__ */ new Map();
    const leaking = [...this.b.entries()].filter(([, v]) => v.source !== null && !this.f(v, rootParentCache).isSingleton).flatMap(([k]) => k);
    return leaking;
  }
  computeLeakingDisposables(maxReported = 10, preComputedLeaks) {
    let uncoveredLeakingObjs;
    if (preComputedLeaks) {
      uncoveredLeakingObjs = preComputedLeaks;
    } else {
      const rootParentCache = /* @__PURE__ */ new Map();
      const leakingObjects = [...this.b.values()].filter((info) => info.source !== null && !this.f(info, rootParentCache).isSingleton);
      if (leakingObjects.length === 0) {
        return;
      }
      const leakingObjsSet = new Set(leakingObjects.map((o) => o.value));
      uncoveredLeakingObjs = leakingObjects.filter((l) => {
        return !(l.parent && leakingObjsSet.has(l.parent));
      });
      if (uncoveredLeakingObjs.length === 0) {
        throw new Error("There are cyclic diposable chains!");
      }
    }
    if (!uncoveredLeakingObjs) {
      return void 0;
    }
    function getStackTracePath(leaking) {
      function removePrefix(array, linesToRemove) {
        while (array.length > 0 && linesToRemove.some((regexp) => typeof regexp === "string" ? regexp === array[0] : array[0].match(regexp))) {
          array.shift();
        }
      }
      const lines = leaking.source.split("\n").map((p) => p.trim().replace("at ", "")).filter((l) => l !== "");
      removePrefix(lines, ["Error", /^trackDisposable \(.*\)$/, /^DisposableTracker.trackDisposable \(.*\)$/]);
      return lines.reverse();
    }
    const stackTraceStarts = new $Tc();
    for (const leaking of uncoveredLeakingObjs) {
      const stackTracePath = getStackTracePath(leaking);
      for (let i2 = 0; i2 <= stackTracePath.length; i2++) {
        stackTraceStarts.add(stackTracePath.slice(0, i2).join("\n"), leaking);
      }
    }
    uncoveredLeakingObjs.sort($ec((l) => l.idx, $gc));
    let message = "";
    let i = 0;
    for (const leaking of uncoveredLeakingObjs.slice(0, maxReported)) {
      i++;
      const stackTracePath = getStackTracePath(leaking);
      const stackTraceFormattedLines = [];
      for (let i2 = 0; i2 < stackTracePath.length; i2++) {
        let line = stackTracePath[i2];
        const starts = stackTraceStarts.get(stackTracePath.slice(0, i2 + 1).join("\n"));
        line = `(shared with ${starts.size}/${uncoveredLeakingObjs.length} leaks) at ${line}`;
        const prevStarts = stackTraceStarts.get(stackTracePath.slice(0, i2).join("\n"));
        const continuations = $a([...prevStarts].map((d) => getStackTracePath(d)[i2]), (v) => v);
        delete continuations[stackTracePath[i2]];
        for (const [cont, set] of Object.entries(continuations)) {
          stackTraceFormattedLines.unshift(`    - stacktraces of ${set.length} other leaks continue with ${cont}`);
        }
        stackTraceFormattedLines.unshift(line);
      }
      message += `


==================== Leaking disposable ${i}/${uncoveredLeakingObjs.length}: ${leaking.value.constructor.name} ====================
${stackTraceFormattedLines.join("\n")}
============================================================

`;
    }
    if (uncoveredLeakingObjs.length > maxReported) {
      message += `


... and ${uncoveredLeakingObjs.length - maxReported} more leaking disposables

`;
    }
    return { leaks: uncoveredLeakingObjs, details: message };
  }
};
function $Yc(tracker) {
  disposableTracker = tracker;
}
if (TRACK_DISPOSABLES) {
  const __is_disposable_tracked__ = "__is_disposable_tracked__";
  $Yc(new class {
    trackDisposable(x) {
      const stack = new Error("Potentially leaked disposable").stack;
      setTimeout(() => {
        if (!x[__is_disposable_tracked__]) {
          console.log(stack);
        }
      }, 3e3);
    }
    setParent(child, parent) {
      if (child && child !== $9c.None) {
        try {
          child[__is_disposable_tracked__] = true;
        } catch {
        }
      }
    }
    markAsDisposed(disposable) {
      if (disposable && disposable !== $9c.None) {
        try {
          disposable[__is_disposable_tracked__] = true;
        } catch {
        }
      }
    }
    markAsSingleton(disposable) {
    }
  }());
}
function $Zc(x) {
  disposableTracker?.trackDisposable(x);
  return x;
}
function $1c(disposable) {
  disposableTracker?.markAsDisposed(disposable);
}
function setParentOfDisposable(child, parent) {
  disposableTracker?.setParent(child, parent);
}
function setParentOfDisposables(children, parent) {
  if (!disposableTracker) {
    return;
  }
  for (const child of children) {
    disposableTracker.setParent(child, parent);
  }
}
function $2c(singleton) {
  disposableTracker?.markAsSingleton(singleton);
  return singleton;
}
function $3c(thing) {
  return typeof thing === "object" && thing !== null && typeof thing.dispose === "function" && thing.dispose.length === 0;
}
function $4c(arg) {
  if (Iterable.is(arg)) {
    const errors = [];
    for (const d of arg) {
      if (d) {
        try {
          d.dispose();
        } catch (e) {
          errors.push(e);
        }
      }
    }
    if (errors.length === 1) {
      throw errors[0];
    } else if (errors.length > 1) {
      throw new AggregateError(errors, "Encountered errors while disposing of store");
    }
    return Array.isArray(arg) ? [] : arg;
  } else if (arg) {
    arg.dispose();
    return arg;
  }
}
function $6c(...disposables) {
  const parent = $7c(() => $4c(disposables));
  setParentOfDisposables(disposables, parent);
  return parent;
}
function $7c(fn) {
  const self2 = $Zc({
    dispose: $qb(() => {
      $1c(self2);
      fn();
    })
  });
  return self2;
}
var $8c = class _$8c {
  static {
    this.DISABLE_DISPOSED_WARNING = false;
  }
  constructor() {
    this.f = /* @__PURE__ */ new Set();
    this.g = false;
    $Zc(this);
  }
  /**
   * Dispose of all registered disposables and mark this object as disposed.
   *
   * Any future disposables added to this object will be disposed of on `add`.
   */
  dispose() {
    if (this.g) {
      return;
    }
    $1c(this);
    this.g = true;
    this.clear();
  }
  /**
   * @return `true` if this object has been disposed of.
   */
  get isDisposed() {
    return this.g;
  }
  /**
   * Dispose of all registered disposables but do not mark this object as disposed.
   */
  clear() {
    if (this.f.size === 0) {
      return;
    }
    try {
      $4c(this.f);
    } finally {
      this.f.clear();
    }
  }
  /**
   * Add a new {@link IDisposable disposable} to the collection.
   */
  add(o) {
    if (!o) {
      return o;
    }
    if (o === this) {
      throw new Error("Cannot register a disposable on itself!");
    }
    setParentOfDisposable(o, this);
    if (this.g) {
      if (!_$8c.DISABLE_DISPOSED_WARNING) {
        console.warn(new Error("Trying to add a disposable to a DisposableStore that has already been disposed of. The added object will be leaked!").stack);
      }
    } else {
      this.f.add(o);
    }
    return o;
  }
  /**
   * Deletes a disposable from store and disposes of it. This will not throw or warn and proceed to dispose the
   * disposable even when the disposable is not part in the store.
   */
  delete(o) {
    if (!o) {
      return;
    }
    if (o === this) {
      throw new Error("Cannot dispose a disposable on itself!");
    }
    this.f.delete(o);
    o.dispose();
  }
  /**
   * Deletes the value from the store, but does not dispose it.
   */
  deleteAndLeak(o) {
    if (!o) {
      return;
    }
    if (this.f.has(o)) {
      this.f.delete(o);
      setParentOfDisposable(o, null);
    }
  }
};
var $9c = class {
  static {
    this.None = Object.freeze({ dispose() {
    } });
  }
  constructor() {
    this.q = new $8c();
    $Zc(this);
    setParentOfDisposable(this.q, this);
  }
  dispose() {
    $1c(this);
    this.q.dispose();
  }
  /**
   * Adds `o` to the collection of disposables managed by this object.
   */
  B(o) {
    if (o === this) {
      throw new Error("Cannot register a disposable on itself!");
    }
    return this.q.add(o);
  }
};

// out-build/vs/base/common/linkedList.js
var Node2 = class _Node {
  static {
    this.Undefined = new _Node(void 0);
  }
  constructor(element) {
    this.element = element;
    this.next = _Node.Undefined;
    this.prev = _Node.Undefined;
  }
};
var $gd = class {
  constructor() {
    this.a = Node2.Undefined;
    this.b = Node2.Undefined;
    this.c = 0;
  }
  get size() {
    return this.c;
  }
  isEmpty() {
    return this.a === Node2.Undefined;
  }
  clear() {
    let node = this.a;
    while (node !== Node2.Undefined) {
      const next = node.next;
      node.prev = Node2.Undefined;
      node.next = Node2.Undefined;
      node = next;
    }
    this.a = Node2.Undefined;
    this.b = Node2.Undefined;
    this.c = 0;
  }
  unshift(element) {
    return this.d(element, false);
  }
  push(element) {
    return this.d(element, true);
  }
  d(element, atTheEnd) {
    const newNode = new Node2(element);
    if (this.a === Node2.Undefined) {
      this.a = newNode;
      this.b = newNode;
    } else if (atTheEnd) {
      const oldLast = this.b;
      this.b = newNode;
      newNode.prev = oldLast;
      oldLast.next = newNode;
    } else {
      const oldFirst = this.a;
      this.a = newNode;
      newNode.next = oldFirst;
      oldFirst.prev = newNode;
    }
    this.c += 1;
    let didRemove = false;
    return () => {
      if (!didRemove) {
        didRemove = true;
        this.e(newNode);
      }
    };
  }
  shift() {
    if (this.a === Node2.Undefined) {
      return void 0;
    } else {
      const res = this.a.element;
      this.e(this.a);
      return res;
    }
  }
  pop() {
    if (this.b === Node2.Undefined) {
      return void 0;
    } else {
      const res = this.b.element;
      this.e(this.b);
      return res;
    }
  }
  e(node) {
    if (node.prev !== Node2.Undefined && node.next !== Node2.Undefined) {
      const anchor = node.prev;
      anchor.next = node.next;
      node.next.prev = anchor;
    } else if (node.prev === Node2.Undefined && node.next === Node2.Undefined) {
      this.a = Node2.Undefined;
      this.b = Node2.Undefined;
    } else if (node.next === Node2.Undefined) {
      this.b = this.b.prev;
      this.b.next = Node2.Undefined;
    } else if (node.prev === Node2.Undefined) {
      this.a = this.a.next;
      this.a.prev = Node2.Undefined;
    }
    this.c -= 1;
  }
  *[Symbol.iterator]() {
    let node = this.a;
    while (node !== Node2.Undefined) {
      yield node.element;
      node = node.next;
    }
  }
};

// out-build/vs/base/common/stopwatch.js
var hasPerformanceNow = globalThis.performance && typeof globalThis.performance.now === "function";
var $we = class _$we {
  static create(highResolution) {
    return new _$we(highResolution);
  }
  constructor(highResolution) {
    this.c = hasPerformanceNow && highResolution === false ? Date.now : globalThis.performance.now.bind(globalThis.performance);
    this.a = this.c();
    this.b = -1;
  }
  stop() {
    this.b = this.c();
  }
  reset() {
    this.a = this.c();
    this.b = -1;
  }
  elapsed() {
    if (this.b !== -1) {
      return this.b - this.a;
    }
    return this.c() - this.a;
  }
};

// out-build/vs/base/common/event.js
var _enableListenerGCedWarning = false;
var _enableDisposeWithListenerWarning = false;
var _enableSnapshotPotentialLeakWarning = false;
var Event;
(function(Event2) {
  Event2.None = () => $9c.None;
  function _addLeakageTraceLogic(options2) {
    if (_enableSnapshotPotentialLeakWarning) {
      const { onDidAddListener: origListenerDidAdd } = options2;
      const stack = Stacktrace.create();
      let count = 0;
      options2.onDidAddListener = () => {
        if (++count === 2) {
          console.warn("snapshotted emitter LIKELY used public and SHOULD HAVE BEEN created with DisposableStore. snapshotted here");
          stack.print();
        }
        origListenerDidAdd?.();
      };
    }
  }
  function defer(event, disposable) {
    return debounce(event, () => void 0, 0, void 0, true, void 0, disposable);
  }
  Event2.defer = defer;
  function once(event) {
    return (listener, thisArgs = null, disposables) => {
      let didFire = false;
      let result = void 0;
      result = event((e) => {
        if (didFire) {
          return;
        } else if (result) {
          result.dispose();
        } else {
          didFire = true;
        }
        return listener.call(thisArgs, e);
      }, null, disposables);
      if (didFire) {
        result.dispose();
      }
      return result;
    };
  }
  Event2.once = once;
  function onceIf(event, condition) {
    return Event2.once(Event2.filter(event, condition));
  }
  Event2.onceIf = onceIf;
  function map(event, map2, disposable) {
    return snapshot((listener, thisArgs = null, disposables) => event((i) => listener.call(thisArgs, map2(i)), null, disposables), disposable);
  }
  Event2.map = map;
  function forEach(event, each, disposable) {
    return snapshot((listener, thisArgs = null, disposables) => event((i) => {
      each(i);
      listener.call(thisArgs, i);
    }, null, disposables), disposable);
  }
  Event2.forEach = forEach;
  function filter(event, filter2, disposable) {
    return snapshot((listener, thisArgs = null, disposables) => event((e) => filter2(e) && listener.call(thisArgs, e), null, disposables), disposable);
  }
  Event2.filter = filter;
  function signal(event) {
    return event;
  }
  Event2.signal = signal;
  function any(...events) {
    return (listener, thisArgs = null, disposables) => {
      const disposable = $6c(...events.map((event) => event((e) => listener.call(thisArgs, e))));
      return addAndReturnDisposable(disposable, disposables);
    };
  }
  Event2.any = any;
  function reduce(event, merge, initial, disposable) {
    let output = initial;
    return map(event, (e) => {
      output = merge(output, e);
      return output;
    }, disposable);
  }
  Event2.reduce = reduce;
  function snapshot(event, disposable) {
    let listener;
    const options2 = {
      onWillAddFirstListener() {
        listener = event(emitter.fire, emitter);
      },
      onDidRemoveLastListener() {
        listener?.dispose();
      }
    };
    if (!disposable) {
      _addLeakageTraceLogic(options2);
    }
    const emitter = new $Ce(options2);
    disposable?.add(emitter);
    return emitter.event;
  }
  function addAndReturnDisposable(d, store) {
    if (store instanceof Array) {
      store.push(d);
    } else if (store) {
      store.add(d);
    }
    return d;
  }
  function debounce(event, merge, delay = 100, leading = false, flushOnListenerRemove = false, leakWarningThreshold, disposable) {
    let subscription;
    let output = void 0;
    let handle = void 0;
    let numDebouncedCalls = 0;
    let doFire;
    const options2 = {
      leakWarningThreshold,
      onWillAddFirstListener() {
        subscription = event((cur) => {
          numDebouncedCalls++;
          output = merge(output, cur);
          if (leading && !handle) {
            emitter.fire(output);
            output = void 0;
          }
          doFire = () => {
            const _output = output;
            output = void 0;
            handle = void 0;
            if (!leading || numDebouncedCalls > 1) {
              emitter.fire(_output);
            }
            numDebouncedCalls = 0;
          };
          if (typeof delay === "number") {
            clearTimeout(handle);
            handle = setTimeout(doFire, delay);
          } else {
            if (handle === void 0) {
              handle = 0;
              queueMicrotask(doFire);
            }
          }
        });
      },
      onWillRemoveListener() {
        if (flushOnListenerRemove && numDebouncedCalls > 0) {
          doFire?.();
        }
      },
      onDidRemoveLastListener() {
        doFire = void 0;
        subscription.dispose();
      }
    };
    if (!disposable) {
      _addLeakageTraceLogic(options2);
    }
    const emitter = new $Ce(options2);
    disposable?.add(emitter);
    return emitter.event;
  }
  Event2.debounce = debounce;
  function accumulate(event, delay = 0, disposable) {
    return Event2.debounce(event, (last, e) => {
      if (!last) {
        return [e];
      }
      last.push(e);
      return last;
    }, delay, void 0, true, void 0, disposable);
  }
  Event2.accumulate = accumulate;
  function latch(event, equals = (a, b) => a === b, disposable) {
    let firstCall = true;
    let cache;
    return filter(event, (value) => {
      const shouldEmit = firstCall || !equals(value, cache);
      firstCall = false;
      cache = value;
      return shouldEmit;
    }, disposable);
  }
  Event2.latch = latch;
  function split(event, isT, disposable) {
    return [
      Event2.filter(event, isT, disposable),
      Event2.filter(event, (e) => !isT(e), disposable)
    ];
  }
  Event2.split = split;
  function buffer(event, flushAfterTimeout = false, _buffer = [], disposable) {
    let buffer2 = _buffer.slice();
    let listener = event((e) => {
      if (buffer2) {
        buffer2.push(e);
      } else {
        emitter.fire(e);
      }
    });
    if (disposable) {
      disposable.add(listener);
    }
    const flush = () => {
      buffer2?.forEach((e) => emitter.fire(e));
      buffer2 = null;
    };
    const emitter = new $Ce({
      onWillAddFirstListener() {
        if (!listener) {
          listener = event((e) => emitter.fire(e));
          if (disposable) {
            disposable.add(listener);
          }
        }
      },
      onDidAddFirstListener() {
        if (buffer2) {
          if (flushAfterTimeout) {
            setTimeout(flush);
          } else {
            flush();
          }
        }
      },
      onDidRemoveLastListener() {
        if (listener) {
          listener.dispose();
        }
        listener = null;
      }
    });
    if (disposable) {
      disposable.add(emitter);
    }
    return emitter.event;
  }
  Event2.buffer = buffer;
  function chain(event, sythensize) {
    const fn = (listener, thisArgs, disposables) => {
      const cs = sythensize(new ChainableSynthesis());
      return event(function(value) {
        const result = cs.evaluate(value);
        if (result !== HaltChainable) {
          listener.call(thisArgs, result);
        }
      }, void 0, disposables);
    };
    return fn;
  }
  Event2.chain = chain;
  const HaltChainable = Symbol("HaltChainable");
  class ChainableSynthesis {
    constructor() {
      this.f = [];
    }
    map(fn) {
      this.f.push(fn);
      return this;
    }
    forEach(fn) {
      this.f.push((v) => {
        fn(v);
        return v;
      });
      return this;
    }
    filter(fn) {
      this.f.push((v) => fn(v) ? v : HaltChainable);
      return this;
    }
    reduce(merge, initial) {
      let last = initial;
      this.f.push((v) => {
        last = merge(last, v);
        return last;
      });
      return this;
    }
    latch(equals = (a, b) => a === b) {
      let firstCall = true;
      let cache;
      this.f.push((value) => {
        const shouldEmit = firstCall || !equals(value, cache);
        firstCall = false;
        cache = value;
        return shouldEmit ? value : HaltChainable;
      });
      return this;
    }
    evaluate(value) {
      for (const step of this.f) {
        value = step(value);
        if (value === HaltChainable) {
          break;
        }
      }
      return value;
    }
  }
  function fromNodeEventEmitter(emitter, eventName, map2 = (id2) => id2) {
    const fn = (...args) => result.fire(map2(...args));
    const onFirstListenerAdd = () => emitter.on(eventName, fn);
    const onLastListenerRemove = () => emitter.removeListener(eventName, fn);
    const result = new $Ce({ onWillAddFirstListener: onFirstListenerAdd, onDidRemoveLastListener: onLastListenerRemove });
    return result.event;
  }
  Event2.fromNodeEventEmitter = fromNodeEventEmitter;
  function fromDOMEventEmitter(emitter, eventName, map2 = (id2) => id2) {
    const fn = (...args) => result.fire(map2(...args));
    const onFirstListenerAdd = () => emitter.addEventListener(eventName, fn);
    const onLastListenerRemove = () => emitter.removeEventListener(eventName, fn);
    const result = new $Ce({ onWillAddFirstListener: onFirstListenerAdd, onDidRemoveLastListener: onLastListenerRemove });
    return result.event;
  }
  Event2.fromDOMEventEmitter = fromDOMEventEmitter;
  function toPromise(event) {
    return new Promise((resolve) => once(event)(resolve));
  }
  Event2.toPromise = toPromise;
  function fromPromise(promise) {
    const result = new $Ce();
    promise.then((res) => {
      result.fire(res);
    }, () => {
      result.fire(void 0);
    }).finally(() => {
      result.dispose();
    });
    return result.event;
  }
  Event2.fromPromise = fromPromise;
  function forward(from, to) {
    return from((e) => to.fire(e));
  }
  Event2.forward = forward;
  function runAndSubscribe(event, handler, initial) {
    handler(initial);
    return event((e) => handler(e));
  }
  Event2.runAndSubscribe = runAndSubscribe;
  class EmitterObserver {
    constructor(_observable, store) {
      this._observable = _observable;
      this.f = 0;
      this.g = false;
      const options2 = {
        onWillAddFirstListener: () => {
          _observable.addObserver(this);
          this._observable.reportChanges();
        },
        onDidRemoveLastListener: () => {
          _observable.removeObserver(this);
        }
      };
      if (!store) {
        _addLeakageTraceLogic(options2);
      }
      this.emitter = new $Ce(options2);
      if (store) {
        store.add(this.emitter);
      }
    }
    beginUpdate(_observable) {
      this.f++;
    }
    handlePossibleChange(_observable) {
    }
    handleChange(_observable, _change) {
      this.g = true;
    }
    endUpdate(_observable) {
      this.f--;
      if (this.f === 0) {
        this._observable.reportChanges();
        if (this.g) {
          this.g = false;
          this.emitter.fire(this._observable.get());
        }
      }
    }
  }
  function fromObservable(obs, store) {
    const observer = new EmitterObserver(obs, store);
    return observer.emitter.event;
  }
  Event2.fromObservable = fromObservable;
  function fromObservableLight(observable) {
    return (listener, thisArgs, disposables) => {
      let count = 0;
      let didChange = false;
      const observer = {
        beginUpdate() {
          count++;
        },
        endUpdate() {
          count--;
          if (count === 0) {
            observable.reportChanges();
            if (didChange) {
              didChange = false;
              listener.call(thisArgs);
            }
          }
        },
        handlePossibleChange() {
        },
        handleChange() {
          didChange = true;
        }
      };
      observable.addObserver(observer);
      observable.reportChanges();
      const disposable = {
        dispose() {
          observable.removeObserver(observer);
        }
      };
      if (disposables instanceof $8c) {
        disposables.add(disposable);
      } else if (Array.isArray(disposables)) {
        disposables.push(disposable);
      }
      return disposable;
    };
  }
  Event2.fromObservableLight = fromObservableLight;
})(Event || (Event = {}));
var $ye = class _$ye {
  static {
    this.all = /* @__PURE__ */ new Set();
  }
  static {
    this.f = 0;
  }
  constructor(name) {
    this.listenerCount = 0;
    this.invocationCount = 0;
    this.elapsedOverall = 0;
    this.durations = [];
    this.name = `${name}_${_$ye.f++}`;
    _$ye.all.add(this);
  }
  start(listenerCount) {
    this.g = new $we();
    this.listenerCount = listenerCount;
  }
  stop() {
    if (this.g) {
      const elapsed = this.g.elapsed();
      this.durations.push(elapsed);
      this.elapsedOverall += elapsed;
      this.invocationCount += 1;
      this.g = void 0;
    }
  }
};
var _globalLeakWarningThreshold = -1;
var LeakageMonitor = class _LeakageMonitor {
  static {
    this.f = 1;
  }
  constructor(j, threshold, name = (_LeakageMonitor.f++).toString(16).padStart(3, "0")) {
    this.j = j;
    this.threshold = threshold;
    this.name = name;
    this.h = 0;
  }
  dispose() {
    this.g?.clear();
  }
  check(stack, listenerCount) {
    const threshold = this.threshold;
    if (threshold <= 0 || listenerCount < threshold) {
      return void 0;
    }
    if (!this.g) {
      this.g = /* @__PURE__ */ new Map();
    }
    const count = this.g.get(stack.value) || 0;
    this.g.set(stack.value, count + 1);
    this.h -= 1;
    if (this.h <= 0) {
      this.h = threshold * 0.5;
      const [topStack, topCount] = this.getMostFrequentStack();
      const message = `[${this.name}] potential listener LEAK detected, having ${listenerCount} listeners already. MOST frequent listener (${topCount}):`;
      console.warn(message);
      console.warn(topStack);
      const error = new $Ae(message, topStack);
      this.j(error);
    }
    return () => {
      const count2 = this.g.get(stack.value) || 0;
      this.g.set(stack.value, count2 - 1);
    };
  }
  getMostFrequentStack() {
    if (!this.g) {
      return void 0;
    }
    let topStack;
    let topCount = 0;
    for (const [stack, count] of this.g) {
      if (!topStack || topCount < count) {
        topStack = [stack, count];
        topCount = count;
      }
    }
    return topStack;
  }
};
var Stacktrace = class _Stacktrace {
  static create() {
    const err = new Error();
    return new _Stacktrace(err.stack ?? "");
  }
  constructor(value) {
    this.value = value;
  }
  print() {
    console.warn(this.value.split("\n").slice(2).join("\n"));
  }
};
var $Ae = class extends Error {
  constructor(message, stack) {
    super(message);
    this.name = "ListenerLeakError";
    this.stack = stack;
  }
};
var $Be = class extends Error {
  constructor(message, stack) {
    super(message);
    this.name = "ListenerRefusalError";
    this.stack = stack;
  }
};
var id = 0;
var UniqueContainer = class {
  constructor(value) {
    this.value = value;
    this.id = id++;
  }
};
var compactionThreshold = 2;
var forEachListener = (listeners, fn) => {
  if (listeners instanceof UniqueContainer) {
    fn(listeners);
  } else {
    for (let i = 0; i < listeners.length; i++) {
      const l = listeners[i];
      if (l) {
        fn(l);
      }
    }
  }
};
var _listenerFinalizers;
if (_enableListenerGCedWarning) {
  const leaks = [];
  setInterval(() => {
    if (leaks.length === 0) {
      return;
    }
    console.warn("[LEAKING LISTENERS] GC'ed these listeners that were NOT yet disposed:");
    console.warn(leaks.join("\n"));
    leaks.length = 0;
  }, 3e3);
  _listenerFinalizers = new FinalizationRegistry((heldValue) => {
    if (typeof heldValue === "string") {
      leaks.push(heldValue);
    }
  });
}
var $Ce = class {
  constructor(options2) {
    this.z = 0;
    this.f = options2;
    this.g = _globalLeakWarningThreshold > 0 || this.f?.leakWarningThreshold ? new LeakageMonitor(options2?.onListenerError ?? $ab, this.f?.leakWarningThreshold ?? _globalLeakWarningThreshold) : void 0;
    this.j = this.f?._profName ? new $ye(this.f._profName) : void 0;
    this.w = this.f?.deliveryQueue;
  }
  dispose() {
    if (!this.m) {
      this.m = true;
      if (this.w?.current === this) {
        this.w.reset();
      }
      if (this.u) {
        if (_enableDisposeWithListenerWarning) {
          const listeners = this.u;
          queueMicrotask(() => {
            forEachListener(listeners, (l) => l.stack?.print());
          });
        }
        this.u = void 0;
        this.z = 0;
      }
      this.f?.onDidRemoveLastListener?.();
      this.g?.dispose();
    }
  }
  /**
   * For the public to allow to subscribe
   * to events from this Emitter
   */
  get event() {
    this.q ??= (callback, thisArgs, disposables) => {
      if (this.g && this.z > this.g.threshold ** 2) {
        const message = `[${this.g.name}] REFUSES to accept new listeners because it exceeded its threshold by far (${this.z} vs ${this.g.threshold})`;
        console.warn(message);
        const tuple = this.g.getMostFrequentStack() ?? ["UNKNOWN stack", -1];
        const error = new $Be(`${message}. HINT: Stack shows most frequent listener (${tuple[1]}-times)`, tuple[0]);
        const errorHandler = this.f?.onListenerError || $ab;
        errorHandler(error);
        return $9c.None;
      }
      if (this.m) {
        return $9c.None;
      }
      if (thisArgs) {
        callback = callback.bind(thisArgs);
      }
      const contained = new UniqueContainer(callback);
      let removeMonitor;
      let stack;
      if (this.g && this.z >= Math.ceil(this.g.threshold * 0.2)) {
        contained.stack = Stacktrace.create();
        removeMonitor = this.g.check(contained.stack, this.z + 1);
      }
      if (_enableDisposeWithListenerWarning) {
        contained.stack = stack ?? Stacktrace.create();
      }
      if (!this.u) {
        this.f?.onWillAddFirstListener?.(this);
        this.u = contained;
        this.f?.onDidAddFirstListener?.(this);
      } else if (this.u instanceof UniqueContainer) {
        this.w ??= new EventDeliveryQueuePrivate();
        this.u = [this.u, contained];
      } else {
        this.u.push(contained);
      }
      this.z++;
      const result = $7c(() => {
        _listenerFinalizers?.unregister(result);
        removeMonitor?.();
        this.A(contained);
      });
      if (disposables instanceof $8c) {
        disposables.add(result);
      } else if (Array.isArray(disposables)) {
        disposables.push(result);
      }
      if (_listenerFinalizers) {
        const stack2 = new Error().stack.split("\n").slice(2, 3).join("\n").trim();
        const match = /(file:|vscode-file:\/\/vscode-app)?(\/[^:]*:\d+:\d+)/.exec(stack2);
        _listenerFinalizers.register(result, match?.[2] ?? stack2, result);
      }
      return result;
    };
    return this.q;
  }
  A(listener) {
    this.f?.onWillRemoveListener?.(this);
    if (!this.u) {
      return;
    }
    if (this.z === 1) {
      this.u = void 0;
      this.f?.onDidRemoveLastListener?.(this);
      this.z = 0;
      return;
    }
    const listeners = this.u;
    const index = listeners.indexOf(listener);
    if (index === -1) {
      console.log("disposed?", this.m);
      console.log("size?", this.z);
      console.log("arr?", JSON.stringify(this.u));
      throw new Error("Attempted to dispose unknown listener");
    }
    this.z--;
    listeners[index] = void 0;
    const adjustDeliveryQueue = this.w.current === this;
    if (this.z * compactionThreshold <= listeners.length) {
      let n = 0;
      for (let i = 0; i < listeners.length; i++) {
        if (listeners[i]) {
          listeners[n++] = listeners[i];
        } else if (adjustDeliveryQueue) {
          this.w.end--;
          if (n < this.w.i) {
            this.w.i--;
          }
        }
      }
      listeners.length = n;
    }
  }
  B(listener, value) {
    if (!listener) {
      return;
    }
    const errorHandler = this.f?.onListenerError || $ab;
    if (!errorHandler) {
      listener.value(value);
      return;
    }
    try {
      listener.value(value);
    } catch (e) {
      errorHandler(e);
    }
  }
  /** Delivers items in the queue. Assumes the queue is ready to go. */
  C(dq) {
    const listeners = dq.current.u;
    while (dq.i < dq.end) {
      this.B(listeners[dq.i++], dq.value);
    }
    dq.reset();
  }
  /**
   * To be kept private to fire an event to
   * subscribers
   */
  fire(event) {
    if (this.w?.current) {
      this.C(this.w);
      this.j?.stop();
    }
    this.j?.start(this.z);
    if (!this.u) {
    } else if (this.u instanceof UniqueContainer) {
      this.B(this.u, event);
    } else {
      const dq = this.w;
      dq.enqueue(this, event, this.u.length);
      this.C(dq);
    }
    this.j?.stop();
  }
  hasListeners() {
    return this.z > 0;
  }
};
var EventDeliveryQueuePrivate = class {
  constructor() {
    this.i = -1;
    this.end = 0;
  }
  enqueue(emitter, value, end) {
    this.i = 0;
    this.end = end;
    this.current = emitter;
    this.value = value;
  }
  reset() {
    this.i = this.end;
    this.current = void 0;
    this.value = void 0;
  }
};

// out-build/vs/base/browser/browser.js
var WindowManager = class _WindowManager {
  constructor() {
    this.a = /* @__PURE__ */ new Map();
    this.b = new $Ce();
    this.onDidChangeZoomLevel = this.b.event;
    this.c = /* @__PURE__ */ new Map();
    this.d = new $Ce();
    this.onDidChangeFullscreen = this.d.event;
    this.e = /* @__PURE__ */ new Map();
  }
  static {
    this.INSTANCE = new _WindowManager();
  }
  getZoomLevel(targetWindow) {
    return this.a.get(this.f(targetWindow)) ?? 0;
  }
  setZoomLevel(zoomLevel, targetWindow) {
    if (this.getZoomLevel(targetWindow) === zoomLevel) {
      return;
    }
    const targetWindowId = this.f(targetWindow);
    this.a.set(targetWindowId, zoomLevel);
    this.b.fire(targetWindowId);
  }
  getZoomFactor(targetWindow) {
    return this.c.get(this.f(targetWindow)) ?? 1;
  }
  setZoomFactor(zoomFactor, targetWindow) {
    this.c.set(this.f(targetWindow), zoomFactor);
  }
  setFullscreen(fullscreen, targetWindow) {
    if (this.isFullscreen(targetWindow) === fullscreen) {
      return;
    }
    const windowId = this.f(targetWindow);
    this.e.set(windowId, fullscreen);
    this.d.fire(windowId);
  }
  isFullscreen(targetWindow) {
    return !!this.e.get(this.f(targetWindow));
  }
  f(targetWindow) {
    return targetWindow.vscodeWindowId;
  }
};
function $3S(targetWindow, query, callback) {
  if (typeof query === "string") {
    query = targetWindow.matchMedia(query);
  }
  query.addEventListener("change", callback);
}
function $4S(zoomLevel, targetWindow) {
  WindowManager.INSTANCE.setZoomLevel(zoomLevel, targetWindow);
}
function $5S(targetWindow) {
  return WindowManager.INSTANCE.getZoomLevel(targetWindow);
}
var $6S = WindowManager.INSTANCE.onDidChangeZoomLevel;
function $8S(zoomFactor, targetWindow) {
  WindowManager.INSTANCE.setZoomFactor(zoomFactor, targetWindow);
}
var $$S = WindowManager.INSTANCE.onDidChangeFullscreen;
var userAgent = navigator.userAgent;
var $_S = userAgent.indexOf("Firefox") >= 0;
var $aT = userAgent.indexOf("AppleWebKit") >= 0;
var $bT = userAgent.indexOf("Chrome") >= 0;
var $cT = !$bT && userAgent.indexOf("Safari") >= 0;
var $eT = userAgent.indexOf("Electron/") >= 0;
var $fT = userAgent.indexOf("Android") >= 0;
var standalone = false;
if (typeof $ZS.matchMedia === "function") {
  const standaloneMatchMedia = $ZS.matchMedia("(display-mode: standalone) or (display-mode: window-controls-overlay)");
  const fullScreenMatchMedia = $ZS.matchMedia("(display-mode: fullscreen)");
  standalone = standaloneMatchMedia.matches;
  $3S($ZS, standaloneMatchMedia, ({ matches }) => {
    if (standalone && fullScreenMatchMedia.matches) {
      return;
    }
    standalone = matches;
  });
}
function $gT() {
  return standalone;
}

// out-build/vs/nls.messages.js
function $f() {
  return globalThis._VSCODE_NLS_MESSAGES;
}
function $g() {
  return globalThis._VSCODE_NLS_LANGUAGE;
}

// out-build/vs/nls.js
var isPseudo = $g() === "pseudo" || typeof document !== "undefined" && document.location && document.location.hash.indexOf("pseudo=true") >= 0;
function _format(message, args) {
  let result;
  if (args.length === 0) {
    result = message;
  } else {
    result = message.replace(/\{(\d+)\}/g, (match, rest) => {
      const index = rest[0];
      const arg = args[index];
      let result2 = match;
      if (typeof arg === "string") {
        result2 = arg;
      } else if (typeof arg === "number" || typeof arg === "boolean" || arg === void 0 || arg === null) {
        result2 = String(arg);
      }
      return result2;
    });
  }
  if (isPseudo) {
    result = "\uFF3B" + result.replace(/[aouei]/g, "$&$&") + "\uFF3D";
  }
  return result;
}
function localize(data, message, ...args) {
  if (typeof data === "number") {
    return _format(lookupMessage(data, message), args);
  }
  return _format(message, args);
}
function lookupMessage(index, fallback) {
  const message = $f()?.[index];
  if (typeof message !== "string") {
    if (typeof fallback === "string") {
      return fallback;
    }
    throw new Error(`!!! NLS MISSING: ${index} !!!`);
  }
  return message;
}

// out-build/vs/base/common/platform.js
var $j = "en";
var _isWindows = false;
var _isMacintosh = false;
var _isLinux = false;
var _isLinuxSnap = false;
var _isNative = false;
var _isWeb = false;
var _isElectron = false;
var _isIOS = false;
var _isCI = false;
var _isMobile = false;
var _locale = void 0;
var _language = $j;
var _platformLocale = $j;
var _translationsConfigFile = void 0;
var _userAgent = void 0;
var $globalThis = globalThis;
var nodeProcess = void 0;
if (typeof $globalThis.vscode !== "undefined" && typeof $globalThis.vscode.process !== "undefined") {
  nodeProcess = $globalThis.vscode.process;
} else if (typeof process !== "undefined" && typeof process?.versions?.node === "string") {
  nodeProcess = process;
}
var isElectronProcess = typeof nodeProcess?.versions?.electron === "string";
var isElectronRenderer = isElectronProcess && nodeProcess?.type === "renderer";
if (typeof nodeProcess === "object") {
  _isWindows = nodeProcess.platform === "win32";
  _isMacintosh = nodeProcess.platform === "darwin";
  _isLinux = nodeProcess.platform === "linux";
  _isLinuxSnap = _isLinux && !!nodeProcess.env["SNAP"] && !!nodeProcess.env["SNAP_REVISION"];
  _isElectron = isElectronProcess;
  _isCI = !!nodeProcess.env["CI"] || !!nodeProcess.env["BUILD_ARTIFACTSTAGINGDIRECTORY"];
  _locale = $j;
  _language = $j;
  const rawNlsConfig = nodeProcess.env["VSCODE_NLS_CONFIG"];
  if (rawNlsConfig) {
    try {
      const nlsConfig = JSON.parse(rawNlsConfig);
      _locale = nlsConfig.userLocale;
      _platformLocale = nlsConfig.osLocale;
      _language = nlsConfig.resolvedLanguage || $j;
      _translationsConfigFile = nlsConfig.languagePack?.translationsConfigFile;
    } catch (e) {
    }
  }
  _isNative = true;
} else if (typeof navigator === "object" && !isElectronRenderer) {
  _userAgent = navigator.userAgent;
  _isWindows = _userAgent.indexOf("Windows") >= 0;
  _isMacintosh = _userAgent.indexOf("Macintosh") >= 0;
  _isIOS = (_userAgent.indexOf("Macintosh") >= 0 || _userAgent.indexOf("iPad") >= 0 || _userAgent.indexOf("iPhone") >= 0) && !!navigator.maxTouchPoints && navigator.maxTouchPoints > 0;
  _isLinux = _userAgent.indexOf("Linux") >= 0;
  _isMobile = _userAgent?.indexOf("Mobi") >= 0;
  _isWeb = true;
  _language = $g() || $j;
  _locale = navigator.language.toLowerCase();
  _platformLocale = _locale;
} else {
  console.error("Unable to resolve platform.");
}
var Platform;
(function(Platform2) {
  Platform2[Platform2["Web"] = 0] = "Web";
  Platform2[Platform2["Mac"] = 1] = "Mac";
  Platform2[Platform2["Linux"] = 2] = "Linux";
  Platform2[Platform2["Windows"] = 3] = "Windows";
})(Platform || (Platform = {}));
var _platform = 0;
if (_isMacintosh) {
  _platform = 1;
} else if (_isWindows) {
  _platform = 3;
} else if (_isLinux) {
  _platform = 2;
}
var $l = _isWindows;
var $m = _isMacintosh;
var $n = _isLinux;
var $o = _isLinuxSnap;
var $p = _isNative;
var $r = _isWeb;
var $s = _isWeb && typeof $globalThis.importScripts === "function";
var $t = $s ? $globalThis.origin : void 0;
var $y = _userAgent;
var $z = _language;
var Language;
(function(Language2) {
  function value() {
    return $z;
  }
  Language2.value = value;
  function isDefaultVariant() {
    if ($z.length === 2) {
      return $z === "en";
    } else if ($z.length >= 3) {
      return $z[0] === "e" && $z[1] === "n" && $z[2] === "-";
    } else {
      return false;
    }
  }
  Language2.isDefaultVariant = isDefaultVariant;
  function isDefault() {
    return $z === "en";
  }
  Language2.isDefault = isDefault;
})(Language || (Language = {}));
var $D = typeof $globalThis.postMessage === "function" && !$globalThis.importScripts;
var $E = (() => {
  if ($D) {
    const pending = [];
    $globalThis.addEventListener("message", (e) => {
      if (e.data && e.data.vscodeScheduleAsyncWork) {
        for (let i = 0, len = pending.length; i < len; i++) {
          const candidate = pending[i];
          if (candidate.id === e.data.vscodeScheduleAsyncWork) {
            pending.splice(i, 1);
            candidate.callback();
            return;
          }
        }
      }
    });
    let lastId = 0;
    return (callback) => {
      const myId = ++lastId;
      pending.push({
        id: myId,
        callback
      });
      $globalThis.postMessage({ vscodeScheduleAsyncWork: myId }, "*");
    };
  }
  return (callback) => setTimeout(callback);
})();
var OperatingSystem;
(function(OperatingSystem2) {
  OperatingSystem2[OperatingSystem2["Windows"] = 1] = "Windows";
  OperatingSystem2[OperatingSystem2["Macintosh"] = 2] = "Macintosh";
  OperatingSystem2[OperatingSystem2["Linux"] = 3] = "Linux";
})(OperatingSystem || (OperatingSystem = {}));
var $H = !!($y && $y.indexOf("Chrome") >= 0);
var $I = !!($y && $y.indexOf("Firefox") >= 0);
var $J = !!(!$H && ($y && $y.indexOf("Safari") >= 0));
var $K = !!($y && $y.indexOf("Edg/") >= 0);
var $L = !!($y && $y.indexOf("Android") >= 0);

// out-build/vs/base/browser/canIUse.js
var KeyboardSupport;
(function(KeyboardSupport2) {
  KeyboardSupport2[KeyboardSupport2["Always"] = 0] = "Always";
  KeyboardSupport2[KeyboardSupport2["FullScreen"] = 1] = "FullScreen";
  KeyboardSupport2[KeyboardSupport2["None"] = 2] = "None";
})(KeyboardSupport || (KeyboardSupport = {}));
var $jT = {
  clipboard: {
    writeText: $p || document.queryCommandSupported && document.queryCommandSupported("copy") || !!(navigator && navigator.clipboard && navigator.clipboard.writeText),
    readText: $p || !!(navigator && navigator.clipboard && navigator.clipboard.readText)
  },
  keyboard: (() => {
    if ($p || $gT()) {
      return 0;
    }
    if (navigator.keyboard || $cT) {
      return 1;
    }
    return 2;
  })(),
  // 'ontouchstart' in window always evaluates to true with typescript's modern typings. This causes `window` to be
  // `never` later in `window.navigator`. That's why we need the explicit `window as Window` cast
  touch: "ontouchstart" in $ZS || navigator.maxTouchPoints > 0,
  pointerEvents: $ZS.PointerEvent && ("ontouchstart" in $ZS || navigator.maxTouchPoints > 0)
};

// out-build/vs/base/common/keyCodes.js
var KeyCode;
(function(KeyCode2) {
  KeyCode2[KeyCode2["DependsOnKbLayout"] = -1] = "DependsOnKbLayout";
  KeyCode2[KeyCode2["Unknown"] = 0] = "Unknown";
  KeyCode2[KeyCode2["Backspace"] = 1] = "Backspace";
  KeyCode2[KeyCode2["Tab"] = 2] = "Tab";
  KeyCode2[KeyCode2["Enter"] = 3] = "Enter";
  KeyCode2[KeyCode2["Shift"] = 4] = "Shift";
  KeyCode2[KeyCode2["Ctrl"] = 5] = "Ctrl";
  KeyCode2[KeyCode2["Alt"] = 6] = "Alt";
  KeyCode2[KeyCode2["PauseBreak"] = 7] = "PauseBreak";
  KeyCode2[KeyCode2["CapsLock"] = 8] = "CapsLock";
  KeyCode2[KeyCode2["Escape"] = 9] = "Escape";
  KeyCode2[KeyCode2["Space"] = 10] = "Space";
  KeyCode2[KeyCode2["PageUp"] = 11] = "PageUp";
  KeyCode2[KeyCode2["PageDown"] = 12] = "PageDown";
  KeyCode2[KeyCode2["End"] = 13] = "End";
  KeyCode2[KeyCode2["Home"] = 14] = "Home";
  KeyCode2[KeyCode2["LeftArrow"] = 15] = "LeftArrow";
  KeyCode2[KeyCode2["UpArrow"] = 16] = "UpArrow";
  KeyCode2[KeyCode2["RightArrow"] = 17] = "RightArrow";
  KeyCode2[KeyCode2["DownArrow"] = 18] = "DownArrow";
  KeyCode2[KeyCode2["Insert"] = 19] = "Insert";
  KeyCode2[KeyCode2["Delete"] = 20] = "Delete";
  KeyCode2[KeyCode2["Digit0"] = 21] = "Digit0";
  KeyCode2[KeyCode2["Digit1"] = 22] = "Digit1";
  KeyCode2[KeyCode2["Digit2"] = 23] = "Digit2";
  KeyCode2[KeyCode2["Digit3"] = 24] = "Digit3";
  KeyCode2[KeyCode2["Digit4"] = 25] = "Digit4";
  KeyCode2[KeyCode2["Digit5"] = 26] = "Digit5";
  KeyCode2[KeyCode2["Digit6"] = 27] = "Digit6";
  KeyCode2[KeyCode2["Digit7"] = 28] = "Digit7";
  KeyCode2[KeyCode2["Digit8"] = 29] = "Digit8";
  KeyCode2[KeyCode2["Digit9"] = 30] = "Digit9";
  KeyCode2[KeyCode2["KeyA"] = 31] = "KeyA";
  KeyCode2[KeyCode2["KeyB"] = 32] = "KeyB";
  KeyCode2[KeyCode2["KeyC"] = 33] = "KeyC";
  KeyCode2[KeyCode2["KeyD"] = 34] = "KeyD";
  KeyCode2[KeyCode2["KeyE"] = 35] = "KeyE";
  KeyCode2[KeyCode2["KeyF"] = 36] = "KeyF";
  KeyCode2[KeyCode2["KeyG"] = 37] = "KeyG";
  KeyCode2[KeyCode2["KeyH"] = 38] = "KeyH";
  KeyCode2[KeyCode2["KeyI"] = 39] = "KeyI";
  KeyCode2[KeyCode2["KeyJ"] = 40] = "KeyJ";
  KeyCode2[KeyCode2["KeyK"] = 41] = "KeyK";
  KeyCode2[KeyCode2["KeyL"] = 42] = "KeyL";
  KeyCode2[KeyCode2["KeyM"] = 43] = "KeyM";
  KeyCode2[KeyCode2["KeyN"] = 44] = "KeyN";
  KeyCode2[KeyCode2["KeyO"] = 45] = "KeyO";
  KeyCode2[KeyCode2["KeyP"] = 46] = "KeyP";
  KeyCode2[KeyCode2["KeyQ"] = 47] = "KeyQ";
  KeyCode2[KeyCode2["KeyR"] = 48] = "KeyR";
  KeyCode2[KeyCode2["KeyS"] = 49] = "KeyS";
  KeyCode2[KeyCode2["KeyT"] = 50] = "KeyT";
  KeyCode2[KeyCode2["KeyU"] = 51] = "KeyU";
  KeyCode2[KeyCode2["KeyV"] = 52] = "KeyV";
  KeyCode2[KeyCode2["KeyW"] = 53] = "KeyW";
  KeyCode2[KeyCode2["KeyX"] = 54] = "KeyX";
  KeyCode2[KeyCode2["KeyY"] = 55] = "KeyY";
  KeyCode2[KeyCode2["KeyZ"] = 56] = "KeyZ";
  KeyCode2[KeyCode2["Meta"] = 57] = "Meta";
  KeyCode2[KeyCode2["ContextMenu"] = 58] = "ContextMenu";
  KeyCode2[KeyCode2["F1"] = 59] = "F1";
  KeyCode2[KeyCode2["F2"] = 60] = "F2";
  KeyCode2[KeyCode2["F3"] = 61] = "F3";
  KeyCode2[KeyCode2["F4"] = 62] = "F4";
  KeyCode2[KeyCode2["F5"] = 63] = "F5";
  KeyCode2[KeyCode2["F6"] = 64] = "F6";
  KeyCode2[KeyCode2["F7"] = 65] = "F7";
  KeyCode2[KeyCode2["F8"] = 66] = "F8";
  KeyCode2[KeyCode2["F9"] = 67] = "F9";
  KeyCode2[KeyCode2["F10"] = 68] = "F10";
  KeyCode2[KeyCode2["F11"] = 69] = "F11";
  KeyCode2[KeyCode2["F12"] = 70] = "F12";
  KeyCode2[KeyCode2["F13"] = 71] = "F13";
  KeyCode2[KeyCode2["F14"] = 72] = "F14";
  KeyCode2[KeyCode2["F15"] = 73] = "F15";
  KeyCode2[KeyCode2["F16"] = 74] = "F16";
  KeyCode2[KeyCode2["F17"] = 75] = "F17";
  KeyCode2[KeyCode2["F18"] = 76] = "F18";
  KeyCode2[KeyCode2["F19"] = 77] = "F19";
  KeyCode2[KeyCode2["F20"] = 78] = "F20";
  KeyCode2[KeyCode2["F21"] = 79] = "F21";
  KeyCode2[KeyCode2["F22"] = 80] = "F22";
  KeyCode2[KeyCode2["F23"] = 81] = "F23";
  KeyCode2[KeyCode2["F24"] = 82] = "F24";
  KeyCode2[KeyCode2["NumLock"] = 83] = "NumLock";
  KeyCode2[KeyCode2["ScrollLock"] = 84] = "ScrollLock";
  KeyCode2[KeyCode2["Semicolon"] = 85] = "Semicolon";
  KeyCode2[KeyCode2["Equal"] = 86] = "Equal";
  KeyCode2[KeyCode2["Comma"] = 87] = "Comma";
  KeyCode2[KeyCode2["Minus"] = 88] = "Minus";
  KeyCode2[KeyCode2["Period"] = 89] = "Period";
  KeyCode2[KeyCode2["Slash"] = 90] = "Slash";
  KeyCode2[KeyCode2["Backquote"] = 91] = "Backquote";
  KeyCode2[KeyCode2["BracketLeft"] = 92] = "BracketLeft";
  KeyCode2[KeyCode2["Backslash"] = 93] = "Backslash";
  KeyCode2[KeyCode2["BracketRight"] = 94] = "BracketRight";
  KeyCode2[KeyCode2["Quote"] = 95] = "Quote";
  KeyCode2[KeyCode2["OEM_8"] = 96] = "OEM_8";
  KeyCode2[KeyCode2["IntlBackslash"] = 97] = "IntlBackslash";
  KeyCode2[KeyCode2["Numpad0"] = 98] = "Numpad0";
  KeyCode2[KeyCode2["Numpad1"] = 99] = "Numpad1";
  KeyCode2[KeyCode2["Numpad2"] = 100] = "Numpad2";
  KeyCode2[KeyCode2["Numpad3"] = 101] = "Numpad3";
  KeyCode2[KeyCode2["Numpad4"] = 102] = "Numpad4";
  KeyCode2[KeyCode2["Numpad5"] = 103] = "Numpad5";
  KeyCode2[KeyCode2["Numpad6"] = 104] = "Numpad6";
  KeyCode2[KeyCode2["Numpad7"] = 105] = "Numpad7";
  KeyCode2[KeyCode2["Numpad8"] = 106] = "Numpad8";
  KeyCode2[KeyCode2["Numpad9"] = 107] = "Numpad9";
  KeyCode2[KeyCode2["NumpadMultiply"] = 108] = "NumpadMultiply";
  KeyCode2[KeyCode2["NumpadAdd"] = 109] = "NumpadAdd";
  KeyCode2[KeyCode2["NUMPAD_SEPARATOR"] = 110] = "NUMPAD_SEPARATOR";
  KeyCode2[KeyCode2["NumpadSubtract"] = 111] = "NumpadSubtract";
  KeyCode2[KeyCode2["NumpadDecimal"] = 112] = "NumpadDecimal";
  KeyCode2[KeyCode2["NumpadDivide"] = 113] = "NumpadDivide";
  KeyCode2[KeyCode2["KEY_IN_COMPOSITION"] = 114] = "KEY_IN_COMPOSITION";
  KeyCode2[KeyCode2["ABNT_C1"] = 115] = "ABNT_C1";
  KeyCode2[KeyCode2["ABNT_C2"] = 116] = "ABNT_C2";
  KeyCode2[KeyCode2["AudioVolumeMute"] = 117] = "AudioVolumeMute";
  KeyCode2[KeyCode2["AudioVolumeUp"] = 118] = "AudioVolumeUp";
  KeyCode2[KeyCode2["AudioVolumeDown"] = 119] = "AudioVolumeDown";
  KeyCode2[KeyCode2["BrowserSearch"] = 120] = "BrowserSearch";
  KeyCode2[KeyCode2["BrowserHome"] = 121] = "BrowserHome";
  KeyCode2[KeyCode2["BrowserBack"] = 122] = "BrowserBack";
  KeyCode2[KeyCode2["BrowserForward"] = 123] = "BrowserForward";
  KeyCode2[KeyCode2["MediaTrackNext"] = 124] = "MediaTrackNext";
  KeyCode2[KeyCode2["MediaTrackPrevious"] = 125] = "MediaTrackPrevious";
  KeyCode2[KeyCode2["MediaStop"] = 126] = "MediaStop";
  KeyCode2[KeyCode2["MediaPlayPause"] = 127] = "MediaPlayPause";
  KeyCode2[KeyCode2["LaunchMediaPlayer"] = 128] = "LaunchMediaPlayer";
  KeyCode2[KeyCode2["LaunchMail"] = 129] = "LaunchMail";
  KeyCode2[KeyCode2["LaunchApp2"] = 130] = "LaunchApp2";
  KeyCode2[KeyCode2["Clear"] = 131] = "Clear";
  KeyCode2[KeyCode2["MAX_VALUE"] = 132] = "MAX_VALUE";
})(KeyCode || (KeyCode = {}));
var ScanCode;
(function(ScanCode2) {
  ScanCode2[ScanCode2["DependsOnKbLayout"] = -1] = "DependsOnKbLayout";
  ScanCode2[ScanCode2["None"] = 0] = "None";
  ScanCode2[ScanCode2["Hyper"] = 1] = "Hyper";
  ScanCode2[ScanCode2["Super"] = 2] = "Super";
  ScanCode2[ScanCode2["Fn"] = 3] = "Fn";
  ScanCode2[ScanCode2["FnLock"] = 4] = "FnLock";
  ScanCode2[ScanCode2["Suspend"] = 5] = "Suspend";
  ScanCode2[ScanCode2["Resume"] = 6] = "Resume";
  ScanCode2[ScanCode2["Turbo"] = 7] = "Turbo";
  ScanCode2[ScanCode2["Sleep"] = 8] = "Sleep";
  ScanCode2[ScanCode2["WakeUp"] = 9] = "WakeUp";
  ScanCode2[ScanCode2["KeyA"] = 10] = "KeyA";
  ScanCode2[ScanCode2["KeyB"] = 11] = "KeyB";
  ScanCode2[ScanCode2["KeyC"] = 12] = "KeyC";
  ScanCode2[ScanCode2["KeyD"] = 13] = "KeyD";
  ScanCode2[ScanCode2["KeyE"] = 14] = "KeyE";
  ScanCode2[ScanCode2["KeyF"] = 15] = "KeyF";
  ScanCode2[ScanCode2["KeyG"] = 16] = "KeyG";
  ScanCode2[ScanCode2["KeyH"] = 17] = "KeyH";
  ScanCode2[ScanCode2["KeyI"] = 18] = "KeyI";
  ScanCode2[ScanCode2["KeyJ"] = 19] = "KeyJ";
  ScanCode2[ScanCode2["KeyK"] = 20] = "KeyK";
  ScanCode2[ScanCode2["KeyL"] = 21] = "KeyL";
  ScanCode2[ScanCode2["KeyM"] = 22] = "KeyM";
  ScanCode2[ScanCode2["KeyN"] = 23] = "KeyN";
  ScanCode2[ScanCode2["KeyO"] = 24] = "KeyO";
  ScanCode2[ScanCode2["KeyP"] = 25] = "KeyP";
  ScanCode2[ScanCode2["KeyQ"] = 26] = "KeyQ";
  ScanCode2[ScanCode2["KeyR"] = 27] = "KeyR";
  ScanCode2[ScanCode2["KeyS"] = 28] = "KeyS";
  ScanCode2[ScanCode2["KeyT"] = 29] = "KeyT";
  ScanCode2[ScanCode2["KeyU"] = 30] = "KeyU";
  ScanCode2[ScanCode2["KeyV"] = 31] = "KeyV";
  ScanCode2[ScanCode2["KeyW"] = 32] = "KeyW";
  ScanCode2[ScanCode2["KeyX"] = 33] = "KeyX";
  ScanCode2[ScanCode2["KeyY"] = 34] = "KeyY";
  ScanCode2[ScanCode2["KeyZ"] = 35] = "KeyZ";
  ScanCode2[ScanCode2["Digit1"] = 36] = "Digit1";
  ScanCode2[ScanCode2["Digit2"] = 37] = "Digit2";
  ScanCode2[ScanCode2["Digit3"] = 38] = "Digit3";
  ScanCode2[ScanCode2["Digit4"] = 39] = "Digit4";
  ScanCode2[ScanCode2["Digit5"] = 40] = "Digit5";
  ScanCode2[ScanCode2["Digit6"] = 41] = "Digit6";
  ScanCode2[ScanCode2["Digit7"] = 42] = "Digit7";
  ScanCode2[ScanCode2["Digit8"] = 43] = "Digit8";
  ScanCode2[ScanCode2["Digit9"] = 44] = "Digit9";
  ScanCode2[ScanCode2["Digit0"] = 45] = "Digit0";
  ScanCode2[ScanCode2["Enter"] = 46] = "Enter";
  ScanCode2[ScanCode2["Escape"] = 47] = "Escape";
  ScanCode2[ScanCode2["Backspace"] = 48] = "Backspace";
  ScanCode2[ScanCode2["Tab"] = 49] = "Tab";
  ScanCode2[ScanCode2["Space"] = 50] = "Space";
  ScanCode2[ScanCode2["Minus"] = 51] = "Minus";
  ScanCode2[ScanCode2["Equal"] = 52] = "Equal";
  ScanCode2[ScanCode2["BracketLeft"] = 53] = "BracketLeft";
  ScanCode2[ScanCode2["BracketRight"] = 54] = "BracketRight";
  ScanCode2[ScanCode2["Backslash"] = 55] = "Backslash";
  ScanCode2[ScanCode2["IntlHash"] = 56] = "IntlHash";
  ScanCode2[ScanCode2["Semicolon"] = 57] = "Semicolon";
  ScanCode2[ScanCode2["Quote"] = 58] = "Quote";
  ScanCode2[ScanCode2["Backquote"] = 59] = "Backquote";
  ScanCode2[ScanCode2["Comma"] = 60] = "Comma";
  ScanCode2[ScanCode2["Period"] = 61] = "Period";
  ScanCode2[ScanCode2["Slash"] = 62] = "Slash";
  ScanCode2[ScanCode2["CapsLock"] = 63] = "CapsLock";
  ScanCode2[ScanCode2["F1"] = 64] = "F1";
  ScanCode2[ScanCode2["F2"] = 65] = "F2";
  ScanCode2[ScanCode2["F3"] = 66] = "F3";
  ScanCode2[ScanCode2["F4"] = 67] = "F4";
  ScanCode2[ScanCode2["F5"] = 68] = "F5";
  ScanCode2[ScanCode2["F6"] = 69] = "F6";
  ScanCode2[ScanCode2["F7"] = 70] = "F7";
  ScanCode2[ScanCode2["F8"] = 71] = "F8";
  ScanCode2[ScanCode2["F9"] = 72] = "F9";
  ScanCode2[ScanCode2["F10"] = 73] = "F10";
  ScanCode2[ScanCode2["F11"] = 74] = "F11";
  ScanCode2[ScanCode2["F12"] = 75] = "F12";
  ScanCode2[ScanCode2["PrintScreen"] = 76] = "PrintScreen";
  ScanCode2[ScanCode2["ScrollLock"] = 77] = "ScrollLock";
  ScanCode2[ScanCode2["Pause"] = 78] = "Pause";
  ScanCode2[ScanCode2["Insert"] = 79] = "Insert";
  ScanCode2[ScanCode2["Home"] = 80] = "Home";
  ScanCode2[ScanCode2["PageUp"] = 81] = "PageUp";
  ScanCode2[ScanCode2["Delete"] = 82] = "Delete";
  ScanCode2[ScanCode2["End"] = 83] = "End";
  ScanCode2[ScanCode2["PageDown"] = 84] = "PageDown";
  ScanCode2[ScanCode2["ArrowRight"] = 85] = "ArrowRight";
  ScanCode2[ScanCode2["ArrowLeft"] = 86] = "ArrowLeft";
  ScanCode2[ScanCode2["ArrowDown"] = 87] = "ArrowDown";
  ScanCode2[ScanCode2["ArrowUp"] = 88] = "ArrowUp";
  ScanCode2[ScanCode2["NumLock"] = 89] = "NumLock";
  ScanCode2[ScanCode2["NumpadDivide"] = 90] = "NumpadDivide";
  ScanCode2[ScanCode2["NumpadMultiply"] = 91] = "NumpadMultiply";
  ScanCode2[ScanCode2["NumpadSubtract"] = 92] = "NumpadSubtract";
  ScanCode2[ScanCode2["NumpadAdd"] = 93] = "NumpadAdd";
  ScanCode2[ScanCode2["NumpadEnter"] = 94] = "NumpadEnter";
  ScanCode2[ScanCode2["Numpad1"] = 95] = "Numpad1";
  ScanCode2[ScanCode2["Numpad2"] = 96] = "Numpad2";
  ScanCode2[ScanCode2["Numpad3"] = 97] = "Numpad3";
  ScanCode2[ScanCode2["Numpad4"] = 98] = "Numpad4";
  ScanCode2[ScanCode2["Numpad5"] = 99] = "Numpad5";
  ScanCode2[ScanCode2["Numpad6"] = 100] = "Numpad6";
  ScanCode2[ScanCode2["Numpad7"] = 101] = "Numpad7";
  ScanCode2[ScanCode2["Numpad8"] = 102] = "Numpad8";
  ScanCode2[ScanCode2["Numpad9"] = 103] = "Numpad9";
  ScanCode2[ScanCode2["Numpad0"] = 104] = "Numpad0";
  ScanCode2[ScanCode2["NumpadDecimal"] = 105] = "NumpadDecimal";
  ScanCode2[ScanCode2["IntlBackslash"] = 106] = "IntlBackslash";
  ScanCode2[ScanCode2["ContextMenu"] = 107] = "ContextMenu";
  ScanCode2[ScanCode2["Power"] = 108] = "Power";
  ScanCode2[ScanCode2["NumpadEqual"] = 109] = "NumpadEqual";
  ScanCode2[ScanCode2["F13"] = 110] = "F13";
  ScanCode2[ScanCode2["F14"] = 111] = "F14";
  ScanCode2[ScanCode2["F15"] = 112] = "F15";
  ScanCode2[ScanCode2["F16"] = 113] = "F16";
  ScanCode2[ScanCode2["F17"] = 114] = "F17";
  ScanCode2[ScanCode2["F18"] = 115] = "F18";
  ScanCode2[ScanCode2["F19"] = 116] = "F19";
  ScanCode2[ScanCode2["F20"] = 117] = "F20";
  ScanCode2[ScanCode2["F21"] = 118] = "F21";
  ScanCode2[ScanCode2["F22"] = 119] = "F22";
  ScanCode2[ScanCode2["F23"] = 120] = "F23";
  ScanCode2[ScanCode2["F24"] = 121] = "F24";
  ScanCode2[ScanCode2["Open"] = 122] = "Open";
  ScanCode2[ScanCode2["Help"] = 123] = "Help";
  ScanCode2[ScanCode2["Select"] = 124] = "Select";
  ScanCode2[ScanCode2["Again"] = 125] = "Again";
  ScanCode2[ScanCode2["Undo"] = 126] = "Undo";
  ScanCode2[ScanCode2["Cut"] = 127] = "Cut";
  ScanCode2[ScanCode2["Copy"] = 128] = "Copy";
  ScanCode2[ScanCode2["Paste"] = 129] = "Paste";
  ScanCode2[ScanCode2["Find"] = 130] = "Find";
  ScanCode2[ScanCode2["AudioVolumeMute"] = 131] = "AudioVolumeMute";
  ScanCode2[ScanCode2["AudioVolumeUp"] = 132] = "AudioVolumeUp";
  ScanCode2[ScanCode2["AudioVolumeDown"] = 133] = "AudioVolumeDown";
  ScanCode2[ScanCode2["NumpadComma"] = 134] = "NumpadComma";
  ScanCode2[ScanCode2["IntlRo"] = 135] = "IntlRo";
  ScanCode2[ScanCode2["KanaMode"] = 136] = "KanaMode";
  ScanCode2[ScanCode2["IntlYen"] = 137] = "IntlYen";
  ScanCode2[ScanCode2["Convert"] = 138] = "Convert";
  ScanCode2[ScanCode2["NonConvert"] = 139] = "NonConvert";
  ScanCode2[ScanCode2["Lang1"] = 140] = "Lang1";
  ScanCode2[ScanCode2["Lang2"] = 141] = "Lang2";
  ScanCode2[ScanCode2["Lang3"] = 142] = "Lang3";
  ScanCode2[ScanCode2["Lang4"] = 143] = "Lang4";
  ScanCode2[ScanCode2["Lang5"] = 144] = "Lang5";
  ScanCode2[ScanCode2["Abort"] = 145] = "Abort";
  ScanCode2[ScanCode2["Props"] = 146] = "Props";
  ScanCode2[ScanCode2["NumpadParenLeft"] = 147] = "NumpadParenLeft";
  ScanCode2[ScanCode2["NumpadParenRight"] = 148] = "NumpadParenRight";
  ScanCode2[ScanCode2["NumpadBackspace"] = 149] = "NumpadBackspace";
  ScanCode2[ScanCode2["NumpadMemoryStore"] = 150] = "NumpadMemoryStore";
  ScanCode2[ScanCode2["NumpadMemoryRecall"] = 151] = "NumpadMemoryRecall";
  ScanCode2[ScanCode2["NumpadMemoryClear"] = 152] = "NumpadMemoryClear";
  ScanCode2[ScanCode2["NumpadMemoryAdd"] = 153] = "NumpadMemoryAdd";
  ScanCode2[ScanCode2["NumpadMemorySubtract"] = 154] = "NumpadMemorySubtract";
  ScanCode2[ScanCode2["NumpadClear"] = 155] = "NumpadClear";
  ScanCode2[ScanCode2["NumpadClearEntry"] = 156] = "NumpadClearEntry";
  ScanCode2[ScanCode2["ControlLeft"] = 157] = "ControlLeft";
  ScanCode2[ScanCode2["ShiftLeft"] = 158] = "ShiftLeft";
  ScanCode2[ScanCode2["AltLeft"] = 159] = "AltLeft";
  ScanCode2[ScanCode2["MetaLeft"] = 160] = "MetaLeft";
  ScanCode2[ScanCode2["ControlRight"] = 161] = "ControlRight";
  ScanCode2[ScanCode2["ShiftRight"] = 162] = "ShiftRight";
  ScanCode2[ScanCode2["AltRight"] = 163] = "AltRight";
  ScanCode2[ScanCode2["MetaRight"] = 164] = "MetaRight";
  ScanCode2[ScanCode2["BrightnessUp"] = 165] = "BrightnessUp";
  ScanCode2[ScanCode2["BrightnessDown"] = 166] = "BrightnessDown";
  ScanCode2[ScanCode2["MediaPlay"] = 167] = "MediaPlay";
  ScanCode2[ScanCode2["MediaRecord"] = 168] = "MediaRecord";
  ScanCode2[ScanCode2["MediaFastForward"] = 169] = "MediaFastForward";
  ScanCode2[ScanCode2["MediaRewind"] = 170] = "MediaRewind";
  ScanCode2[ScanCode2["MediaTrackNext"] = 171] = "MediaTrackNext";
  ScanCode2[ScanCode2["MediaTrackPrevious"] = 172] = "MediaTrackPrevious";
  ScanCode2[ScanCode2["MediaStop"] = 173] = "MediaStop";
  ScanCode2[ScanCode2["Eject"] = 174] = "Eject";
  ScanCode2[ScanCode2["MediaPlayPause"] = 175] = "MediaPlayPause";
  ScanCode2[ScanCode2["MediaSelect"] = 176] = "MediaSelect";
  ScanCode2[ScanCode2["LaunchMail"] = 177] = "LaunchMail";
  ScanCode2[ScanCode2["LaunchApp2"] = 178] = "LaunchApp2";
  ScanCode2[ScanCode2["LaunchApp1"] = 179] = "LaunchApp1";
  ScanCode2[ScanCode2["SelectTask"] = 180] = "SelectTask";
  ScanCode2[ScanCode2["LaunchScreenSaver"] = 181] = "LaunchScreenSaver";
  ScanCode2[ScanCode2["BrowserSearch"] = 182] = "BrowserSearch";
  ScanCode2[ScanCode2["BrowserHome"] = 183] = "BrowserHome";
  ScanCode2[ScanCode2["BrowserBack"] = 184] = "BrowserBack";
  ScanCode2[ScanCode2["BrowserForward"] = 185] = "BrowserForward";
  ScanCode2[ScanCode2["BrowserStop"] = 186] = "BrowserStop";
  ScanCode2[ScanCode2["BrowserRefresh"] = 187] = "BrowserRefresh";
  ScanCode2[ScanCode2["BrowserFavorites"] = 188] = "BrowserFavorites";
  ScanCode2[ScanCode2["ZoomToggle"] = 189] = "ZoomToggle";
  ScanCode2[ScanCode2["MailReply"] = 190] = "MailReply";
  ScanCode2[ScanCode2["MailForward"] = 191] = "MailForward";
  ScanCode2[ScanCode2["MailSend"] = 192] = "MailSend";
  ScanCode2[ScanCode2["MAX_VALUE"] = 193] = "MAX_VALUE";
})(ScanCode || (ScanCode = {}));
var KeyCodeStrMap = class {
  constructor() {
    this._keyCodeToStr = [];
    this._strToKeyCode = /* @__PURE__ */ Object.create(null);
  }
  define(keyCode, str) {
    this._keyCodeToStr[keyCode] = str;
    this._strToKeyCode[str.toLowerCase()] = keyCode;
  }
  keyCodeToStr(keyCode) {
    return this._keyCodeToStr[keyCode];
  }
  strToKeyCode(str) {
    return this._strToKeyCode[str.toLowerCase()] || 0;
  }
};
var uiMap = new KeyCodeStrMap();
var userSettingsUSMap = new KeyCodeStrMap();
var userSettingsGeneralMap = new KeyCodeStrMap();
var $cs = new Array(230);
var $ds = {};
var scanCodeIntToStr = [];
var scanCodeStrToInt = /* @__PURE__ */ Object.create(null);
var scanCodeLowerCaseStrToInt = /* @__PURE__ */ Object.create(null);
var $fs = [];
var $gs = [];
for (let i = 0; i <= 193; i++) {
  $fs[i] = -1;
}
for (let i = 0; i <= 132; i++) {
  $gs[i] = -1;
}
(function() {
  const empty = "";
  const mappings = [
    // immutable, scanCode, scanCodeStr, keyCode, keyCodeStr, eventKeyCode, vkey, usUserSettingsLabel, generalUserSettingsLabel
    [1, 0, "None", 0, "unknown", 0, "VK_UNKNOWN", empty, empty],
    [1, 1, "Hyper", 0, empty, 0, empty, empty, empty],
    [1, 2, "Super", 0, empty, 0, empty, empty, empty],
    [1, 3, "Fn", 0, empty, 0, empty, empty, empty],
    [1, 4, "FnLock", 0, empty, 0, empty, empty, empty],
    [1, 5, "Suspend", 0, empty, 0, empty, empty, empty],
    [1, 6, "Resume", 0, empty, 0, empty, empty, empty],
    [1, 7, "Turbo", 0, empty, 0, empty, empty, empty],
    [1, 8, "Sleep", 0, empty, 0, "VK_SLEEP", empty, empty],
    [1, 9, "WakeUp", 0, empty, 0, empty, empty, empty],
    [0, 10, "KeyA", 31, "A", 65, "VK_A", empty, empty],
    [0, 11, "KeyB", 32, "B", 66, "VK_B", empty, empty],
    [0, 12, "KeyC", 33, "C", 67, "VK_C", empty, empty],
    [0, 13, "KeyD", 34, "D", 68, "VK_D", empty, empty],
    [0, 14, "KeyE", 35, "E", 69, "VK_E", empty, empty],
    [0, 15, "KeyF", 36, "F", 70, "VK_F", empty, empty],
    [0, 16, "KeyG", 37, "G", 71, "VK_G", empty, empty],
    [0, 17, "KeyH", 38, "H", 72, "VK_H", empty, empty],
    [0, 18, "KeyI", 39, "I", 73, "VK_I", empty, empty],
    [0, 19, "KeyJ", 40, "J", 74, "VK_J", empty, empty],
    [0, 20, "KeyK", 41, "K", 75, "VK_K", empty, empty],
    [0, 21, "KeyL", 42, "L", 76, "VK_L", empty, empty],
    [0, 22, "KeyM", 43, "M", 77, "VK_M", empty, empty],
    [0, 23, "KeyN", 44, "N", 78, "VK_N", empty, empty],
    [0, 24, "KeyO", 45, "O", 79, "VK_O", empty, empty],
    [0, 25, "KeyP", 46, "P", 80, "VK_P", empty, empty],
    [0, 26, "KeyQ", 47, "Q", 81, "VK_Q", empty, empty],
    [0, 27, "KeyR", 48, "R", 82, "VK_R", empty, empty],
    [0, 28, "KeyS", 49, "S", 83, "VK_S", empty, empty],
    [0, 29, "KeyT", 50, "T", 84, "VK_T", empty, empty],
    [0, 30, "KeyU", 51, "U", 85, "VK_U", empty, empty],
    [0, 31, "KeyV", 52, "V", 86, "VK_V", empty, empty],
    [0, 32, "KeyW", 53, "W", 87, "VK_W", empty, empty],
    [0, 33, "KeyX", 54, "X", 88, "VK_X", empty, empty],
    [0, 34, "KeyY", 55, "Y", 89, "VK_Y", empty, empty],
    [0, 35, "KeyZ", 56, "Z", 90, "VK_Z", empty, empty],
    [0, 36, "Digit1", 22, "1", 49, "VK_1", empty, empty],
    [0, 37, "Digit2", 23, "2", 50, "VK_2", empty, empty],
    [0, 38, "Digit3", 24, "3", 51, "VK_3", empty, empty],
    [0, 39, "Digit4", 25, "4", 52, "VK_4", empty, empty],
    [0, 40, "Digit5", 26, "5", 53, "VK_5", empty, empty],
    [0, 41, "Digit6", 27, "6", 54, "VK_6", empty, empty],
    [0, 42, "Digit7", 28, "7", 55, "VK_7", empty, empty],
    [0, 43, "Digit8", 29, "8", 56, "VK_8", empty, empty],
    [0, 44, "Digit9", 30, "9", 57, "VK_9", empty, empty],
    [0, 45, "Digit0", 21, "0", 48, "VK_0", empty, empty],
    [1, 46, "Enter", 3, "Enter", 13, "VK_RETURN", empty, empty],
    [1, 47, "Escape", 9, "Escape", 27, "VK_ESCAPE", empty, empty],
    [1, 48, "Backspace", 1, "Backspace", 8, "VK_BACK", empty, empty],
    [1, 49, "Tab", 2, "Tab", 9, "VK_TAB", empty, empty],
    [1, 50, "Space", 10, "Space", 32, "VK_SPACE", empty, empty],
    [0, 51, "Minus", 88, "-", 189, "VK_OEM_MINUS", "-", "OEM_MINUS"],
    [0, 52, "Equal", 86, "=", 187, "VK_OEM_PLUS", "=", "OEM_PLUS"],
    [0, 53, "BracketLeft", 92, "[", 219, "VK_OEM_4", "[", "OEM_4"],
    [0, 54, "BracketRight", 94, "]", 221, "VK_OEM_6", "]", "OEM_6"],
    [0, 55, "Backslash", 93, "\\", 220, "VK_OEM_5", "\\", "OEM_5"],
    [0, 56, "IntlHash", 0, empty, 0, empty, empty, empty],
    // has been dropped from the w3c spec
    [0, 57, "Semicolon", 85, ";", 186, "VK_OEM_1", ";", "OEM_1"],
    [0, 58, "Quote", 95, "'", 222, "VK_OEM_7", "'", "OEM_7"],
    [0, 59, "Backquote", 91, "`", 192, "VK_OEM_3", "`", "OEM_3"],
    [0, 60, "Comma", 87, ",", 188, "VK_OEM_COMMA", ",", "OEM_COMMA"],
    [0, 61, "Period", 89, ".", 190, "VK_OEM_PERIOD", ".", "OEM_PERIOD"],
    [0, 62, "Slash", 90, "/", 191, "VK_OEM_2", "/", "OEM_2"],
    [1, 63, "CapsLock", 8, "CapsLock", 20, "VK_CAPITAL", empty, empty],
    [1, 64, "F1", 59, "F1", 112, "VK_F1", empty, empty],
    [1, 65, "F2", 60, "F2", 113, "VK_F2", empty, empty],
    [1, 66, "F3", 61, "F3", 114, "VK_F3", empty, empty],
    [1, 67, "F4", 62, "F4", 115, "VK_F4", empty, empty],
    [1, 68, "F5", 63, "F5", 116, "VK_F5", empty, empty],
    [1, 69, "F6", 64, "F6", 117, "VK_F6", empty, empty],
    [1, 70, "F7", 65, "F7", 118, "VK_F7", empty, empty],
    [1, 71, "F8", 66, "F8", 119, "VK_F8", empty, empty],
    [1, 72, "F9", 67, "F9", 120, "VK_F9", empty, empty],
    [1, 73, "F10", 68, "F10", 121, "VK_F10", empty, empty],
    [1, 74, "F11", 69, "F11", 122, "VK_F11", empty, empty],
    [1, 75, "F12", 70, "F12", 123, "VK_F12", empty, empty],
    [1, 76, "PrintScreen", 0, empty, 0, empty, empty, empty],
    [1, 77, "ScrollLock", 84, "ScrollLock", 145, "VK_SCROLL", empty, empty],
    [1, 78, "Pause", 7, "PauseBreak", 19, "VK_PAUSE", empty, empty],
    [1, 79, "Insert", 19, "Insert", 45, "VK_INSERT", empty, empty],
    [1, 80, "Home", 14, "Home", 36, "VK_HOME", empty, empty],
    [1, 81, "PageUp", 11, "PageUp", 33, "VK_PRIOR", empty, empty],
    [1, 82, "Delete", 20, "Delete", 46, "VK_DELETE", empty, empty],
    [1, 83, "End", 13, "End", 35, "VK_END", empty, empty],
    [1, 84, "PageDown", 12, "PageDown", 34, "VK_NEXT", empty, empty],
    [1, 85, "ArrowRight", 17, "RightArrow", 39, "VK_RIGHT", "Right", empty],
    [1, 86, "ArrowLeft", 15, "LeftArrow", 37, "VK_LEFT", "Left", empty],
    [1, 87, "ArrowDown", 18, "DownArrow", 40, "VK_DOWN", "Down", empty],
    [1, 88, "ArrowUp", 16, "UpArrow", 38, "VK_UP", "Up", empty],
    [1, 89, "NumLock", 83, "NumLock", 144, "VK_NUMLOCK", empty, empty],
    [1, 90, "NumpadDivide", 113, "NumPad_Divide", 111, "VK_DIVIDE", empty, empty],
    [1, 91, "NumpadMultiply", 108, "NumPad_Multiply", 106, "VK_MULTIPLY", empty, empty],
    [1, 92, "NumpadSubtract", 111, "NumPad_Subtract", 109, "VK_SUBTRACT", empty, empty],
    [1, 93, "NumpadAdd", 109, "NumPad_Add", 107, "VK_ADD", empty, empty],
    [1, 94, "NumpadEnter", 3, empty, 0, empty, empty, empty],
    [1, 95, "Numpad1", 99, "NumPad1", 97, "VK_NUMPAD1", empty, empty],
    [1, 96, "Numpad2", 100, "NumPad2", 98, "VK_NUMPAD2", empty, empty],
    [1, 97, "Numpad3", 101, "NumPad3", 99, "VK_NUMPAD3", empty, empty],
    [1, 98, "Numpad4", 102, "NumPad4", 100, "VK_NUMPAD4", empty, empty],
    [1, 99, "Numpad5", 103, "NumPad5", 101, "VK_NUMPAD5", empty, empty],
    [1, 100, "Numpad6", 104, "NumPad6", 102, "VK_NUMPAD6", empty, empty],
    [1, 101, "Numpad7", 105, "NumPad7", 103, "VK_NUMPAD7", empty, empty],
    [1, 102, "Numpad8", 106, "NumPad8", 104, "VK_NUMPAD8", empty, empty],
    [1, 103, "Numpad9", 107, "NumPad9", 105, "VK_NUMPAD9", empty, empty],
    [1, 104, "Numpad0", 98, "NumPad0", 96, "VK_NUMPAD0", empty, empty],
    [1, 105, "NumpadDecimal", 112, "NumPad_Decimal", 110, "VK_DECIMAL", empty, empty],
    [0, 106, "IntlBackslash", 97, "OEM_102", 226, "VK_OEM_102", empty, empty],
    [1, 107, "ContextMenu", 58, "ContextMenu", 93, empty, empty, empty],
    [1, 108, "Power", 0, empty, 0, empty, empty, empty],
    [1, 109, "NumpadEqual", 0, empty, 0, empty, empty, empty],
    [1, 110, "F13", 71, "F13", 124, "VK_F13", empty, empty],
    [1, 111, "F14", 72, "F14", 125, "VK_F14", empty, empty],
    [1, 112, "F15", 73, "F15", 126, "VK_F15", empty, empty],
    [1, 113, "F16", 74, "F16", 127, "VK_F16", empty, empty],
    [1, 114, "F17", 75, "F17", 128, "VK_F17", empty, empty],
    [1, 115, "F18", 76, "F18", 129, "VK_F18", empty, empty],
    [1, 116, "F19", 77, "F19", 130, "VK_F19", empty, empty],
    [1, 117, "F20", 78, "F20", 131, "VK_F20", empty, empty],
    [1, 118, "F21", 79, "F21", 132, "VK_F21", empty, empty],
    [1, 119, "F22", 80, "F22", 133, "VK_F22", empty, empty],
    [1, 120, "F23", 81, "F23", 134, "VK_F23", empty, empty],
    [1, 121, "F24", 82, "F24", 135, "VK_F24", empty, empty],
    [1, 122, "Open", 0, empty, 0, empty, empty, empty],
    [1, 123, "Help", 0, empty, 0, empty, empty, empty],
    [1, 124, "Select", 0, empty, 0, empty, empty, empty],
    [1, 125, "Again", 0, empty, 0, empty, empty, empty],
    [1, 126, "Undo", 0, empty, 0, empty, empty, empty],
    [1, 127, "Cut", 0, empty, 0, empty, empty, empty],
    [1, 128, "Copy", 0, empty, 0, empty, empty, empty],
    [1, 129, "Paste", 0, empty, 0, empty, empty, empty],
    [1, 130, "Find", 0, empty, 0, empty, empty, empty],
    [1, 131, "AudioVolumeMute", 117, "AudioVolumeMute", 173, "VK_VOLUME_MUTE", empty, empty],
    [1, 132, "AudioVolumeUp", 118, "AudioVolumeUp", 175, "VK_VOLUME_UP", empty, empty],
    [1, 133, "AudioVolumeDown", 119, "AudioVolumeDown", 174, "VK_VOLUME_DOWN", empty, empty],
    [1, 134, "NumpadComma", 110, "NumPad_Separator", 108, "VK_SEPARATOR", empty, empty],
    [0, 135, "IntlRo", 115, "ABNT_C1", 193, "VK_ABNT_C1", empty, empty],
    [1, 136, "KanaMode", 0, empty, 0, empty, empty, empty],
    [0, 137, "IntlYen", 0, empty, 0, empty, empty, empty],
    [1, 138, "Convert", 0, empty, 0, empty, empty, empty],
    [1, 139, "NonConvert", 0, empty, 0, empty, empty, empty],
    [1, 140, "Lang1", 0, empty, 0, empty, empty, empty],
    [1, 141, "Lang2", 0, empty, 0, empty, empty, empty],
    [1, 142, "Lang3", 0, empty, 0, empty, empty, empty],
    [1, 143, "Lang4", 0, empty, 0, empty, empty, empty],
    [1, 144, "Lang5", 0, empty, 0, empty, empty, empty],
    [1, 145, "Abort", 0, empty, 0, empty, empty, empty],
    [1, 146, "Props", 0, empty, 0, empty, empty, empty],
    [1, 147, "NumpadParenLeft", 0, empty, 0, empty, empty, empty],
    [1, 148, "NumpadParenRight", 0, empty, 0, empty, empty, empty],
    [1, 149, "NumpadBackspace", 0, empty, 0, empty, empty, empty],
    [1, 150, "NumpadMemoryStore", 0, empty, 0, empty, empty, empty],
    [1, 151, "NumpadMemoryRecall", 0, empty, 0, empty, empty, empty],
    [1, 152, "NumpadMemoryClear", 0, empty, 0, empty, empty, empty],
    [1, 153, "NumpadMemoryAdd", 0, empty, 0, empty, empty, empty],
    [1, 154, "NumpadMemorySubtract", 0, empty, 0, empty, empty, empty],
    [1, 155, "NumpadClear", 131, "Clear", 12, "VK_CLEAR", empty, empty],
    [1, 156, "NumpadClearEntry", 0, empty, 0, empty, empty, empty],
    [1, 0, empty, 5, "Ctrl", 17, "VK_CONTROL", empty, empty],
    [1, 0, empty, 4, "Shift", 16, "VK_SHIFT", empty, empty],
    [1, 0, empty, 6, "Alt", 18, "VK_MENU", empty, empty],
    [1, 0, empty, 57, "Meta", 91, "VK_COMMAND", empty, empty],
    [1, 157, "ControlLeft", 5, empty, 0, "VK_LCONTROL", empty, empty],
    [1, 158, "ShiftLeft", 4, empty, 0, "VK_LSHIFT", empty, empty],
    [1, 159, "AltLeft", 6, empty, 0, "VK_LMENU", empty, empty],
    [1, 160, "MetaLeft", 57, empty, 0, "VK_LWIN", empty, empty],
    [1, 161, "ControlRight", 5, empty, 0, "VK_RCONTROL", empty, empty],
    [1, 162, "ShiftRight", 4, empty, 0, "VK_RSHIFT", empty, empty],
    [1, 163, "AltRight", 6, empty, 0, "VK_RMENU", empty, empty],
    [1, 164, "MetaRight", 57, empty, 0, "VK_RWIN", empty, empty],
    [1, 165, "BrightnessUp", 0, empty, 0, empty, empty, empty],
    [1, 166, "BrightnessDown", 0, empty, 0, empty, empty, empty],
    [1, 167, "MediaPlay", 0, empty, 0, empty, empty, empty],
    [1, 168, "MediaRecord", 0, empty, 0, empty, empty, empty],
    [1, 169, "MediaFastForward", 0, empty, 0, empty, empty, empty],
    [1, 170, "MediaRewind", 0, empty, 0, empty, empty, empty],
    [1, 171, "MediaTrackNext", 124, "MediaTrackNext", 176, "VK_MEDIA_NEXT_TRACK", empty, empty],
    [1, 172, "MediaTrackPrevious", 125, "MediaTrackPrevious", 177, "VK_MEDIA_PREV_TRACK", empty, empty],
    [1, 173, "MediaStop", 126, "MediaStop", 178, "VK_MEDIA_STOP", empty, empty],
    [1, 174, "Eject", 0, empty, 0, empty, empty, empty],
    [1, 175, "MediaPlayPause", 127, "MediaPlayPause", 179, "VK_MEDIA_PLAY_PAUSE", empty, empty],
    [1, 176, "MediaSelect", 128, "LaunchMediaPlayer", 181, "VK_MEDIA_LAUNCH_MEDIA_SELECT", empty, empty],
    [1, 177, "LaunchMail", 129, "LaunchMail", 180, "VK_MEDIA_LAUNCH_MAIL", empty, empty],
    [1, 178, "LaunchApp2", 130, "LaunchApp2", 183, "VK_MEDIA_LAUNCH_APP2", empty, empty],
    [1, 179, "LaunchApp1", 0, empty, 0, "VK_MEDIA_LAUNCH_APP1", empty, empty],
    [1, 180, "SelectTask", 0, empty, 0, empty, empty, empty],
    [1, 181, "LaunchScreenSaver", 0, empty, 0, empty, empty, empty],
    [1, 182, "BrowserSearch", 120, "BrowserSearch", 170, "VK_BROWSER_SEARCH", empty, empty],
    [1, 183, "BrowserHome", 121, "BrowserHome", 172, "VK_BROWSER_HOME", empty, empty],
    [1, 184, "BrowserBack", 122, "BrowserBack", 166, "VK_BROWSER_BACK", empty, empty],
    [1, 185, "BrowserForward", 123, "BrowserForward", 167, "VK_BROWSER_FORWARD", empty, empty],
    [1, 186, "BrowserStop", 0, empty, 0, "VK_BROWSER_STOP", empty, empty],
    [1, 187, "BrowserRefresh", 0, empty, 0, "VK_BROWSER_REFRESH", empty, empty],
    [1, 188, "BrowserFavorites", 0, empty, 0, "VK_BROWSER_FAVORITES", empty, empty],
    [1, 189, "ZoomToggle", 0, empty, 0, empty, empty, empty],
    [1, 190, "MailReply", 0, empty, 0, empty, empty, empty],
    [1, 191, "MailForward", 0, empty, 0, empty, empty, empty],
    [1, 192, "MailSend", 0, empty, 0, empty, empty, empty],
    // See https://lists.w3.org/Archives/Public/www-dom/2010JulSep/att-0182/keyCode-spec.html
    // If an Input Method Editor is processing key input and the event is keydown, return 229.
    [1, 0, empty, 114, "KeyInComposition", 229, empty, empty, empty],
    [1, 0, empty, 116, "ABNT_C2", 194, "VK_ABNT_C2", empty, empty],
    [1, 0, empty, 96, "OEM_8", 223, "VK_OEM_8", empty, empty],
    [1, 0, empty, 0, empty, 0, "VK_KANA", empty, empty],
    [1, 0, empty, 0, empty, 0, "VK_HANGUL", empty, empty],
    [1, 0, empty, 0, empty, 0, "VK_JUNJA", empty, empty],
    [1, 0, empty, 0, empty, 0, "VK_FINAL", empty, empty],
    [1, 0, empty, 0, empty, 0, "VK_HANJA", empty, empty],
    [1, 0, empty, 0, empty, 0, "VK_KANJI", empty, empty],
    [1, 0, empty, 0, empty, 0, "VK_CONVERT", empty, empty],
    [1, 0, empty, 0, empty, 0, "VK_NONCONVERT", empty, empty],
    [1, 0, empty, 0, empty, 0, "VK_ACCEPT", empty, empty],
    [1, 0, empty, 0, empty, 0, "VK_MODECHANGE", empty, empty],
    [1, 0, empty, 0, empty, 0, "VK_SELECT", empty, empty],
    [1, 0, empty, 0, empty, 0, "VK_PRINT", empty, empty],
    [1, 0, empty, 0, empty, 0, "VK_EXECUTE", empty, empty],
    [1, 0, empty, 0, empty, 0, "VK_SNAPSHOT", empty, empty],
    [1, 0, empty, 0, empty, 0, "VK_HELP", empty, empty],
    [1, 0, empty, 0, empty, 0, "VK_APPS", empty, empty],
    [1, 0, empty, 0, empty, 0, "VK_PROCESSKEY", empty, empty],
    [1, 0, empty, 0, empty, 0, "VK_PACKET", empty, empty],
    [1, 0, empty, 0, empty, 0, "VK_DBE_SBCSCHAR", empty, empty],
    [1, 0, empty, 0, empty, 0, "VK_DBE_DBCSCHAR", empty, empty],
    [1, 0, empty, 0, empty, 0, "VK_ATTN", empty, empty],
    [1, 0, empty, 0, empty, 0, "VK_CRSEL", empty, empty],
    [1, 0, empty, 0, empty, 0, "VK_EXSEL", empty, empty],
    [1, 0, empty, 0, empty, 0, "VK_EREOF", empty, empty],
    [1, 0, empty, 0, empty, 0, "VK_PLAY", empty, empty],
    [1, 0, empty, 0, empty, 0, "VK_ZOOM", empty, empty],
    [1, 0, empty, 0, empty, 0, "VK_NONAME", empty, empty],
    [1, 0, empty, 0, empty, 0, "VK_PA1", empty, empty],
    [1, 0, empty, 0, empty, 0, "VK_OEM_CLEAR", empty, empty]
  ];
  const seenKeyCode = [];
  const seenScanCode = [];
  for (const mapping of mappings) {
    const [immutable, scanCode, scanCodeStr, keyCode, keyCodeStr, eventKeyCode, vkey, usUserSettingsLabel, generalUserSettingsLabel] = mapping;
    if (!seenScanCode[scanCode]) {
      seenScanCode[scanCode] = true;
      scanCodeIntToStr[scanCode] = scanCodeStr;
      scanCodeStrToInt[scanCodeStr] = scanCode;
      scanCodeLowerCaseStrToInt[scanCodeStr.toLowerCase()] = scanCode;
      if (immutable) {
        $fs[scanCode] = keyCode;
        if (keyCode !== 0 && keyCode !== 3 && keyCode !== 5 && keyCode !== 4 && keyCode !== 6 && keyCode !== 57) {
          $gs[keyCode] = scanCode;
        }
      }
    }
    if (!seenKeyCode[keyCode]) {
      seenKeyCode[keyCode] = true;
      if (!keyCodeStr) {
        throw new Error(`String representation missing for key code ${keyCode} around scan code ${scanCodeStr}`);
      }
      uiMap.define(keyCode, keyCodeStr);
      userSettingsUSMap.define(keyCode, usUserSettingsLabel || keyCodeStr);
      userSettingsGeneralMap.define(keyCode, generalUserSettingsLabel || usUserSettingsLabel || keyCodeStr);
    }
    if (eventKeyCode) {
      $cs[eventKeyCode] = keyCode;
    }
    if (vkey) {
      $ds[vkey] = keyCode;
    }
  }
  $gs[
    3
    /* KeyCode.Enter */
  ] = 46;
})();
var KeyCodeUtils;
(function(KeyCodeUtils2) {
  function toString(keyCode) {
    return uiMap.keyCodeToStr(keyCode);
  }
  KeyCodeUtils2.toString = toString;
  function fromString(key) {
    return uiMap.strToKeyCode(key);
  }
  KeyCodeUtils2.fromString = fromString;
  function toUserSettingsUS(keyCode) {
    return userSettingsUSMap.keyCodeToStr(keyCode);
  }
  KeyCodeUtils2.toUserSettingsUS = toUserSettingsUS;
  function toUserSettingsGeneral(keyCode) {
    return userSettingsGeneralMap.keyCodeToStr(keyCode);
  }
  KeyCodeUtils2.toUserSettingsGeneral = toUserSettingsGeneral;
  function fromUserSettings(key) {
    return userSettingsUSMap.strToKeyCode(key) || userSettingsGeneralMap.strToKeyCode(key);
  }
  KeyCodeUtils2.fromUserSettings = fromUserSettings;
  function toElectronAccelerator(keyCode) {
    if (keyCode >= 98 && keyCode <= 113) {
      return null;
    }
    switch (keyCode) {
      case 16:
        return "Up";
      case 18:
        return "Down";
      case 15:
        return "Left";
      case 17:
        return "Right";
    }
    return uiMap.keyCodeToStr(keyCode);
  }
  KeyCodeUtils2.toElectronAccelerator = toElectronAccelerator;
})(KeyCodeUtils || (KeyCodeUtils = {}));
var KeyMod;
(function(KeyMod2) {
  KeyMod2[KeyMod2["CtrlCmd"] = 2048] = "CtrlCmd";
  KeyMod2[KeyMod2["Shift"] = 1024] = "Shift";
  KeyMod2[KeyMod2["Alt"] = 512] = "Alt";
  KeyMod2[KeyMod2["WinCtrl"] = 256] = "WinCtrl";
})(KeyMod || (KeyMod = {}));

// out-build/vs/base/common/keybindings.js
var BinaryKeybindingsMask;
(function(BinaryKeybindingsMask2) {
  BinaryKeybindingsMask2[BinaryKeybindingsMask2["CtrlCmd"] = 2048] = "CtrlCmd";
  BinaryKeybindingsMask2[BinaryKeybindingsMask2["Shift"] = 1024] = "Shift";
  BinaryKeybindingsMask2[BinaryKeybindingsMask2["Alt"] = 512] = "Alt";
  BinaryKeybindingsMask2[BinaryKeybindingsMask2["WinCtrl"] = 256] = "WinCtrl";
  BinaryKeybindingsMask2[BinaryKeybindingsMask2["KeyCode"] = 255] = "KeyCode";
})(BinaryKeybindingsMask || (BinaryKeybindingsMask = {}));
var $ks = class _$ks {
  constructor(ctrlKey, shiftKey, altKey, metaKey, keyCode) {
    this.ctrlKey = ctrlKey;
    this.shiftKey = shiftKey;
    this.altKey = altKey;
    this.metaKey = metaKey;
    this.keyCode = keyCode;
  }
  equals(other) {
    return other instanceof _$ks && this.ctrlKey === other.ctrlKey && this.shiftKey === other.shiftKey && this.altKey === other.altKey && this.metaKey === other.metaKey && this.keyCode === other.keyCode;
  }
  getHashCode() {
    const ctrl = this.ctrlKey ? "1" : "0";
    const shift = this.shiftKey ? "1" : "0";
    const alt = this.altKey ? "1" : "0";
    const meta = this.metaKey ? "1" : "0";
    return `K${ctrl}${shift}${alt}${meta}${this.keyCode}`;
  }
  isModifierKey() {
    return this.keyCode === 0 || this.keyCode === 5 || this.keyCode === 57 || this.keyCode === 6 || this.keyCode === 4;
  }
  toKeybinding() {
    return new $ms([this]);
  }
  /**
   * Does this keybinding refer to the key code of a modifier and it also has the modifier flag?
   */
  isDuplicateModifierCase() {
    return this.ctrlKey && this.keyCode === 5 || this.shiftKey && this.keyCode === 4 || this.altKey && this.keyCode === 6 || this.metaKey && this.keyCode === 57;
  }
};
var $ms = class {
  constructor(chords) {
    if (chords.length === 0) {
      throw $hb(`chords`);
    }
    this.chords = chords;
  }
  getHashCode() {
    let result = "";
    for (let i = 0, len = this.chords.length; i < len; i++) {
      if (i !== 0) {
        result += ";";
      }
      result += this.chords[i].getHashCode();
    }
    return result;
  }
  equals(other) {
    if (other === null) {
      return false;
    }
    if (this.chords.length !== other.chords.length) {
      return false;
    }
    for (let i = 0; i < this.chords.length; i++) {
      if (!this.chords[i].equals(other.chords[i])) {
        return false;
      }
    }
    return true;
  }
};

// out-build/vs/base/browser/keyboardEvent.js
function extractKeyCode(e) {
  if (e.charCode) {
    const char = String.fromCharCode(e.charCode).toUpperCase();
    return KeyCodeUtils.fromString(char);
  }
  const keyCode = e.keyCode;
  if (keyCode === 3) {
    return 7;
  } else if ($_S) {
    switch (keyCode) {
      case 59:
        return 85;
      case 60:
        if ($n) {
          return 97;
        }
        break;
      case 61:
        return 86;
      case 107:
        return 109;
      case 109:
        return 111;
      case 173:
        return 88;
      case 224:
        if ($m) {
          return 57;
        }
        break;
    }
  } else if ($aT) {
    if ($m && keyCode === 93) {
      return 57;
    } else if (!$m && keyCode === 92) {
      return 57;
    }
  }
  return $cs[keyCode] || 0;
}
var ctrlKeyMod = $m ? 256 : 2048;
var altKeyMod = 512;
var shiftKeyMod = 1024;
var metaKeyMod = $m ? 2048 : 256;
var $rT = class {
  constructor(source) {
    this._standardKeyboardEventBrand = true;
    const e = source;
    this.browserEvent = e;
    this.target = e.target;
    this.ctrlKey = e.ctrlKey;
    this.shiftKey = e.shiftKey;
    this.altKey = e.altKey;
    this.metaKey = e.metaKey;
    this.altGraphKey = e.getModifierState?.("AltGraph");
    this.keyCode = extractKeyCode(e);
    this.code = e.code;
    this.ctrlKey = this.ctrlKey || this.keyCode === 5;
    this.altKey = this.altKey || this.keyCode === 6;
    this.shiftKey = this.shiftKey || this.keyCode === 4;
    this.metaKey = this.metaKey || this.keyCode === 57;
    this.a = this.c();
    this.b = this.d();
  }
  preventDefault() {
    if (this.browserEvent && this.browserEvent.preventDefault) {
      this.browserEvent.preventDefault();
    }
  }
  stopPropagation() {
    if (this.browserEvent && this.browserEvent.stopPropagation) {
      this.browserEvent.stopPropagation();
    }
  }
  toKeyCodeChord() {
    return this.b;
  }
  equals(other) {
    return this.a === other;
  }
  c() {
    let key = 0;
    if (this.keyCode !== 5 && this.keyCode !== 4 && this.keyCode !== 6 && this.keyCode !== 57) {
      key = this.keyCode;
    }
    let result = 0;
    if (this.ctrlKey) {
      result |= ctrlKeyMod;
    }
    if (this.altKey) {
      result |= altKeyMod;
    }
    if (this.shiftKey) {
      result |= shiftKeyMod;
    }
    if (this.metaKey) {
      result |= metaKeyMod;
    }
    result |= key;
    return result;
  }
  d() {
    let key = 0;
    if (this.keyCode !== 5 && this.keyCode !== 4 && this.keyCode !== 6 && this.keyCode !== 57) {
      key = this.keyCode;
    }
    return new $ks(this.ctrlKey, this.shiftKey, this.altKey, this.metaKey, key);
  }
};

// out-build/vs/base/browser/iframe.js
var sameOriginWindowChainCache = /* @__PURE__ */ new WeakMap();
function getParentWindowIfSameOrigin(w) {
  if (!w.parent || w.parent === w) {
    return null;
  }
  try {
    const location = w.location;
    const parentLocation = w.parent.location;
    if (location.origin !== "null" && parentLocation.origin !== "null" && location.origin !== parentLocation.origin) {
      return null;
    }
  } catch (e) {
    return null;
  }
  return w.parent;
}
var $kT = class {
  /**
   * Returns a chain of embedded windows with the same origin (which can be accessed programmatically).
   * Having a chain of length 1 might mean that the current execution environment is running outside of an iframe or inside an iframe embedded in a window with a different origin.
   */
  static a(targetWindow) {
    let windowChainCache = sameOriginWindowChainCache.get(targetWindow);
    if (!windowChainCache) {
      windowChainCache = [];
      sameOriginWindowChainCache.set(targetWindow, windowChainCache);
      let w = targetWindow;
      let parent;
      do {
        parent = getParentWindowIfSameOrigin(w);
        if (parent) {
          windowChainCache.push({
            window: new WeakRef(w),
            iframeElement: w.frameElement || null
          });
        } else {
          windowChainCache.push({
            window: new WeakRef(w),
            iframeElement: null
          });
        }
        w = parent;
      } while (w);
    }
    return windowChainCache.slice(0);
  }
  /**
   * Returns the position of `childWindow` relative to `ancestorWindow`
   */
  static getPositionOfChildWindowRelativeToAncestorWindow(childWindow, ancestorWindow) {
    if (!ancestorWindow || childWindow === ancestorWindow) {
      return {
        top: 0,
        left: 0
      };
    }
    let top = 0, left = 0;
    const windowChain = this.a(childWindow);
    for (const windowChainEl of windowChain) {
      const windowInChain = windowChainEl.window.deref();
      top += windowInChain?.scrollY ?? 0;
      left += windowInChain?.scrollX ?? 0;
      if (windowInChain === ancestorWindow) {
        break;
      }
      if (!windowChainEl.iframeElement) {
        break;
      }
      const boundingRect = windowChainEl.iframeElement.getBoundingClientRect();
      top += boundingRect.top;
      left += boundingRect.left;
    }
    return {
      top,
      left
    };
  }
};

// out-build/vs/base/browser/mouseEvent.js
var $mT = class {
  constructor(targetWindow, e) {
    this.timestamp = Date.now();
    this.browserEvent = e;
    this.leftButton = e.button === 0;
    this.middleButton = e.button === 1;
    this.rightButton = e.button === 2;
    this.buttons = e.buttons;
    this.target = e.target;
    this.detail = e.detail || 1;
    if (e.type === "dblclick") {
      this.detail = 2;
    }
    this.ctrlKey = e.ctrlKey;
    this.shiftKey = e.shiftKey;
    this.altKey = e.altKey;
    this.metaKey = e.metaKey;
    if (typeof e.pageX === "number") {
      this.posx = e.pageX;
      this.posy = e.pageY;
    } else {
      this.posx = e.clientX + this.target.ownerDocument.body.scrollLeft + this.target.ownerDocument.documentElement.scrollLeft;
      this.posy = e.clientY + this.target.ownerDocument.body.scrollTop + this.target.ownerDocument.documentElement.scrollTop;
    }
    const iframeOffsets = $kT.getPositionOfChildWindowRelativeToAncestorWindow(targetWindow, e.view);
    this.posx -= iframeOffsets.left;
    this.posy -= iframeOffsets.top;
  }
  preventDefault() {
    this.browserEvent.preventDefault();
  }
  stopPropagation() {
    this.browserEvent.stopPropagation();
  }
};

// out-build/vs/base/common/cancellation.js
var shortcutEvent = Object.freeze(function(callback, context) {
  const handle = setTimeout(callback.bind(context), 0);
  return { dispose() {
    clearTimeout(handle);
  } };
});
var CancellationToken;
(function(CancellationToken2) {
  function isCancellationToken(thing) {
    if (thing === CancellationToken2.None || thing === CancellationToken2.Cancelled) {
      return true;
    }
    if (thing instanceof MutableToken) {
      return true;
    }
    if (!thing || typeof thing !== "object") {
      return false;
    }
    return typeof thing.isCancellationRequested === "boolean" && typeof thing.onCancellationRequested === "function";
  }
  CancellationToken2.isCancellationToken = isCancellationToken;
  CancellationToken2.None = Object.freeze({
    isCancellationRequested: false,
    onCancellationRequested: Event.None
  });
  CancellationToken2.Cancelled = Object.freeze({
    isCancellationRequested: true,
    onCancellationRequested: shortcutEvent
  });
})(CancellationToken || (CancellationToken = {}));
var MutableToken = class {
  constructor() {
    this.a = false;
    this.b = null;
  }
  cancel() {
    if (!this.a) {
      this.a = true;
      if (this.b) {
        this.b.fire(void 0);
        this.dispose();
      }
    }
  }
  get isCancellationRequested() {
    return this.a;
  }
  get onCancellationRequested() {
    if (this.a) {
      return shortcutEvent;
    }
    if (!this.b) {
      this.b = new $Ce();
    }
    return this.b.event;
  }
  dispose() {
    if (this.b) {
      this.b.dispose();
      this.b = null;
    }
  }
};
var $Oe = class {
  constructor(parent) {
    this.f = void 0;
    this.g = void 0;
    this.g = parent && parent.onCancellationRequested(this.cancel, this);
  }
  get token() {
    if (!this.f) {
      this.f = new MutableToken();
    }
    return this.f;
  }
  cancel() {
    if (!this.f) {
      this.f = CancellationToken.Cancelled;
    } else if (this.f instanceof MutableToken) {
      this.f.cancel();
    }
  }
  dispose(cancel = false) {
    if (cancel) {
      this.cancel();
    }
    this.g?.dispose();
    if (!this.f) {
      this.f = CancellationToken.None;
    } else if (this.f instanceof MutableToken) {
      this.f.dispose();
    }
  }
};

// out-build/vs/base/common/process.js
var safeProcess;
var vscodeGlobal = globalThis.vscode;
if (typeof vscodeGlobal !== "undefined" && typeof vscodeGlobal.process !== "undefined") {
  const sandboxProcess = vscodeGlobal.process;
  safeProcess = {
    get platform() {
      return sandboxProcess.platform;
    },
    get arch() {
      return sandboxProcess.arch;
    },
    get env() {
      return sandboxProcess.env;
    },
    cwd() {
      return sandboxProcess.cwd();
    }
  };
} else if (typeof process !== "undefined" && typeof process?.versions?.node === "string") {
  safeProcess = {
    get platform() {
      return process.platform;
    },
    get arch() {
      return process.arch;
    },
    get env() {
      return process.env;
    },
    cwd() {
      return process.env["VSCODE_CWD"] || process.cwd();
    }
  };
} else {
  safeProcess = {
    // Supported
    get platform() {
      return $l ? "win32" : $m ? "darwin" : "linux";
    },
    get arch() {
      return void 0;
    },
    // Unsupported
    get env() {
      return {};
    },
    cwd() {
      return "/";
    }
  };
}
var cwd = safeProcess.cwd;
var env = safeProcess.env;
var $pc = safeProcess.platform;
var $qc = safeProcess.arch;

// out-build/vs/base/common/path.js
var CHAR_UPPERCASE_A = 65;
var CHAR_LOWERCASE_A = 97;
var CHAR_UPPERCASE_Z = 90;
var CHAR_LOWERCASE_Z = 122;
var CHAR_DOT = 46;
var CHAR_FORWARD_SLASH = 47;
var CHAR_BACKWARD_SLASH = 92;
var CHAR_COLON = 58;
var CHAR_QUESTION_MARK = 63;
var ErrorInvalidArgType = class extends Error {
  constructor(name, expected, actual) {
    let determiner;
    if (typeof expected === "string" && expected.indexOf("not ") === 0) {
      determiner = "must not be";
      expected = expected.replace(/^not /, "");
    } else {
      determiner = "must be";
    }
    const type = name.indexOf(".") !== -1 ? "property" : "argument";
    let msg = `The "${name}" ${type} ${determiner} of type ${expected}`;
    msg += `. Received type ${typeof actual}`;
    super(msg);
    this.code = "ERR_INVALID_ARG_TYPE";
  }
};
function validateObject(pathObject, name) {
  if (pathObject === null || typeof pathObject !== "object") {
    throw new ErrorInvalidArgType(name, "Object", pathObject);
  }
}
function validateString(value, name) {
  if (typeof value !== "string") {
    throw new ErrorInvalidArgType(name, "string", value);
  }
}
var platformIsWin32 = $pc === "win32";
function isPathSeparator(code) {
  return code === CHAR_FORWARD_SLASH || code === CHAR_BACKWARD_SLASH;
}
function isPosixPathSeparator(code) {
  return code === CHAR_FORWARD_SLASH;
}
function isWindowsDeviceRoot(code) {
  return code >= CHAR_UPPERCASE_A && code <= CHAR_UPPERCASE_Z || code >= CHAR_LOWERCASE_A && code <= CHAR_LOWERCASE_Z;
}
function normalizeString(path, allowAboveRoot, separator, isPathSeparator2) {
  let res = "";
  let lastSegmentLength = 0;
  let lastSlash = -1;
  let dots = 0;
  let code = 0;
  for (let i = 0; i <= path.length; ++i) {
    if (i < path.length) {
      code = path.charCodeAt(i);
    } else if (isPathSeparator2(code)) {
      break;
    } else {
      code = CHAR_FORWARD_SLASH;
    }
    if (isPathSeparator2(code)) {
      if (lastSlash === i - 1 || dots === 1) {
      } else if (dots === 2) {
        if (res.length < 2 || lastSegmentLength !== 2 || res.charCodeAt(res.length - 1) !== CHAR_DOT || res.charCodeAt(res.length - 2) !== CHAR_DOT) {
          if (res.length > 2) {
            const lastSlashIndex = res.lastIndexOf(separator);
            if (lastSlashIndex === -1) {
              res = "";
              lastSegmentLength = 0;
            } else {
              res = res.slice(0, lastSlashIndex);
              lastSegmentLength = res.length - 1 - res.lastIndexOf(separator);
            }
            lastSlash = i;
            dots = 0;
            continue;
          } else if (res.length !== 0) {
            res = "";
            lastSegmentLength = 0;
            lastSlash = i;
            dots = 0;
            continue;
          }
        }
        if (allowAboveRoot) {
          res += res.length > 0 ? `${separator}..` : "..";
          lastSegmentLength = 2;
        }
      } else {
        if (res.length > 0) {
          res += `${separator}${path.slice(lastSlash + 1, i)}`;
        } else {
          res = path.slice(lastSlash + 1, i);
        }
        lastSegmentLength = i - lastSlash - 1;
      }
      lastSlash = i;
      dots = 0;
    } else if (code === CHAR_DOT && dots !== -1) {
      ++dots;
    } else {
      dots = -1;
    }
  }
  return res;
}
function formatExt(ext) {
  return ext ? `${ext[0] === "." ? "" : "."}${ext}` : "";
}
function _format2(sep2, pathObject) {
  validateObject(pathObject, "pathObject");
  const dir = pathObject.dir || pathObject.root;
  const base = pathObject.base || `${pathObject.name || ""}${formatExt(pathObject.ext)}`;
  if (!dir) {
    return base;
  }
  return dir === pathObject.root ? `${dir}${base}` : `${dir}${sep2}${base}`;
}
var $rc = {
  // path.resolve([from ...], to)
  resolve(...pathSegments) {
    let resolvedDevice = "";
    let resolvedTail = "";
    let resolvedAbsolute = false;
    for (let i = pathSegments.length - 1; i >= -1; i--) {
      let path;
      if (i >= 0) {
        path = pathSegments[i];
        validateString(path, `paths[${i}]`);
        if (path.length === 0) {
          continue;
        }
      } else if (resolvedDevice.length === 0) {
        path = cwd();
      } else {
        path = env[`=${resolvedDevice}`] || cwd();
        if (path === void 0 || path.slice(0, 2).toLowerCase() !== resolvedDevice.toLowerCase() && path.charCodeAt(2) === CHAR_BACKWARD_SLASH) {
          path = `${resolvedDevice}\\`;
        }
      }
      const len = path.length;
      let rootEnd = 0;
      let device = "";
      let isAbsolute = false;
      const code = path.charCodeAt(0);
      if (len === 1) {
        if (isPathSeparator(code)) {
          rootEnd = 1;
          isAbsolute = true;
        }
      } else if (isPathSeparator(code)) {
        isAbsolute = true;
        if (isPathSeparator(path.charCodeAt(1))) {
          let j = 2;
          let last = j;
          while (j < len && !isPathSeparator(path.charCodeAt(j))) {
            j++;
          }
          if (j < len && j !== last) {
            const firstPart = path.slice(last, j);
            last = j;
            while (j < len && isPathSeparator(path.charCodeAt(j))) {
              j++;
            }
            if (j < len && j !== last) {
              last = j;
              while (j < len && !isPathSeparator(path.charCodeAt(j))) {
                j++;
              }
              if (j === len || j !== last) {
                device = `\\\\${firstPart}\\${path.slice(last, j)}`;
                rootEnd = j;
              }
            }
          }
        } else {
          rootEnd = 1;
        }
      } else if (isWindowsDeviceRoot(code) && path.charCodeAt(1) === CHAR_COLON) {
        device = path.slice(0, 2);
        rootEnd = 2;
        if (len > 2 && isPathSeparator(path.charCodeAt(2))) {
          isAbsolute = true;
          rootEnd = 3;
        }
      }
      if (device.length > 0) {
        if (resolvedDevice.length > 0) {
          if (device.toLowerCase() !== resolvedDevice.toLowerCase()) {
            continue;
          }
        } else {
          resolvedDevice = device;
        }
      }
      if (resolvedAbsolute) {
        if (resolvedDevice.length > 0) {
          break;
        }
      } else {
        resolvedTail = `${path.slice(rootEnd)}\\${resolvedTail}`;
        resolvedAbsolute = isAbsolute;
        if (isAbsolute && resolvedDevice.length > 0) {
          break;
        }
      }
    }
    resolvedTail = normalizeString(resolvedTail, !resolvedAbsolute, "\\", isPathSeparator);
    return resolvedAbsolute ? `${resolvedDevice}\\${resolvedTail}` : `${resolvedDevice}${resolvedTail}` || ".";
  },
  normalize(path) {
    validateString(path, "path");
    const len = path.length;
    if (len === 0) {
      return ".";
    }
    let rootEnd = 0;
    let device;
    let isAbsolute = false;
    const code = path.charCodeAt(0);
    if (len === 1) {
      return isPosixPathSeparator(code) ? "\\" : path;
    }
    if (isPathSeparator(code)) {
      isAbsolute = true;
      if (isPathSeparator(path.charCodeAt(1))) {
        let j = 2;
        let last = j;
        while (j < len && !isPathSeparator(path.charCodeAt(j))) {
          j++;
        }
        if (j < len && j !== last) {
          const firstPart = path.slice(last, j);
          last = j;
          while (j < len && isPathSeparator(path.charCodeAt(j))) {
            j++;
          }
          if (j < len && j !== last) {
            last = j;
            while (j < len && !isPathSeparator(path.charCodeAt(j))) {
              j++;
            }
            if (j === len) {
              return `\\\\${firstPart}\\${path.slice(last)}\\`;
            }
            if (j !== last) {
              device = `\\\\${firstPart}\\${path.slice(last, j)}`;
              rootEnd = j;
            }
          }
        }
      } else {
        rootEnd = 1;
      }
    } else if (isWindowsDeviceRoot(code) && path.charCodeAt(1) === CHAR_COLON) {
      device = path.slice(0, 2);
      rootEnd = 2;
      if (len > 2 && isPathSeparator(path.charCodeAt(2))) {
        isAbsolute = true;
        rootEnd = 3;
      }
    }
    let tail = rootEnd < len ? normalizeString(path.slice(rootEnd), !isAbsolute, "\\", isPathSeparator) : "";
    if (tail.length === 0 && !isAbsolute) {
      tail = ".";
    }
    if (tail.length > 0 && isPathSeparator(path.charCodeAt(len - 1))) {
      tail += "\\";
    }
    if (device === void 0) {
      return isAbsolute ? `\\${tail}` : tail;
    }
    return isAbsolute ? `${device}\\${tail}` : `${device}${tail}`;
  },
  isAbsolute(path) {
    validateString(path, "path");
    const len = path.length;
    if (len === 0) {
      return false;
    }
    const code = path.charCodeAt(0);
    return isPathSeparator(code) || // Possible device root
    len > 2 && isWindowsDeviceRoot(code) && path.charCodeAt(1) === CHAR_COLON && isPathSeparator(path.charCodeAt(2));
  },
  join(...paths) {
    if (paths.length === 0) {
      return ".";
    }
    let joined;
    let firstPart;
    for (let i = 0; i < paths.length; ++i) {
      const arg = paths[i];
      validateString(arg, "path");
      if (arg.length > 0) {
        if (joined === void 0) {
          joined = firstPart = arg;
        } else {
          joined += `\\${arg}`;
        }
      }
    }
    if (joined === void 0) {
      return ".";
    }
    let needsReplace = true;
    let slashCount = 0;
    if (typeof firstPart === "string" && isPathSeparator(firstPart.charCodeAt(0))) {
      ++slashCount;
      const firstLen = firstPart.length;
      if (firstLen > 1 && isPathSeparator(firstPart.charCodeAt(1))) {
        ++slashCount;
        if (firstLen > 2) {
          if (isPathSeparator(firstPart.charCodeAt(2))) {
            ++slashCount;
          } else {
            needsReplace = false;
          }
        }
      }
    }
    if (needsReplace) {
      while (slashCount < joined.length && isPathSeparator(joined.charCodeAt(slashCount))) {
        slashCount++;
      }
      if (slashCount >= 2) {
        joined = `\\${joined.slice(slashCount)}`;
      }
    }
    return $rc.normalize(joined);
  },
  // It will solve the relative path from `from` to `to`, for instance:
  //  from = 'C:\\orandea\\test\\aaa'
  //  to = 'C:\\orandea\\impl\\bbb'
  // The output of the function should be: '..\\..\\impl\\bbb'
  relative(from, to) {
    validateString(from, "from");
    validateString(to, "to");
    if (from === to) {
      return "";
    }
    const fromOrig = $rc.resolve(from);
    const toOrig = $rc.resolve(to);
    if (fromOrig === toOrig) {
      return "";
    }
    from = fromOrig.toLowerCase();
    to = toOrig.toLowerCase();
    if (from === to) {
      return "";
    }
    let fromStart = 0;
    while (fromStart < from.length && from.charCodeAt(fromStart) === CHAR_BACKWARD_SLASH) {
      fromStart++;
    }
    let fromEnd = from.length;
    while (fromEnd - 1 > fromStart && from.charCodeAt(fromEnd - 1) === CHAR_BACKWARD_SLASH) {
      fromEnd--;
    }
    const fromLen = fromEnd - fromStart;
    let toStart = 0;
    while (toStart < to.length && to.charCodeAt(toStart) === CHAR_BACKWARD_SLASH) {
      toStart++;
    }
    let toEnd = to.length;
    while (toEnd - 1 > toStart && to.charCodeAt(toEnd - 1) === CHAR_BACKWARD_SLASH) {
      toEnd--;
    }
    const toLen = toEnd - toStart;
    const length = fromLen < toLen ? fromLen : toLen;
    let lastCommonSep = -1;
    let i = 0;
    for (; i < length; i++) {
      const fromCode = from.charCodeAt(fromStart + i);
      if (fromCode !== to.charCodeAt(toStart + i)) {
        break;
      } else if (fromCode === CHAR_BACKWARD_SLASH) {
        lastCommonSep = i;
      }
    }
    if (i !== length) {
      if (lastCommonSep === -1) {
        return toOrig;
      }
    } else {
      if (toLen > length) {
        if (to.charCodeAt(toStart + i) === CHAR_BACKWARD_SLASH) {
          return toOrig.slice(toStart + i + 1);
        }
        if (i === 2) {
          return toOrig.slice(toStart + i);
        }
      }
      if (fromLen > length) {
        if (from.charCodeAt(fromStart + i) === CHAR_BACKWARD_SLASH) {
          lastCommonSep = i;
        } else if (i === 2) {
          lastCommonSep = 3;
        }
      }
      if (lastCommonSep === -1) {
        lastCommonSep = 0;
      }
    }
    let out = "";
    for (i = fromStart + lastCommonSep + 1; i <= fromEnd; ++i) {
      if (i === fromEnd || from.charCodeAt(i) === CHAR_BACKWARD_SLASH) {
        out += out.length === 0 ? ".." : "\\..";
      }
    }
    toStart += lastCommonSep;
    if (out.length > 0) {
      return `${out}${toOrig.slice(toStart, toEnd)}`;
    }
    if (toOrig.charCodeAt(toStart) === CHAR_BACKWARD_SLASH) {
      ++toStart;
    }
    return toOrig.slice(toStart, toEnd);
  },
  toNamespacedPath(path) {
    if (typeof path !== "string" || path.length === 0) {
      return path;
    }
    const resolvedPath = $rc.resolve(path);
    if (resolvedPath.length <= 2) {
      return path;
    }
    if (resolvedPath.charCodeAt(0) === CHAR_BACKWARD_SLASH) {
      if (resolvedPath.charCodeAt(1) === CHAR_BACKWARD_SLASH) {
        const code = resolvedPath.charCodeAt(2);
        if (code !== CHAR_QUESTION_MARK && code !== CHAR_DOT) {
          return `\\\\?\\UNC\\${resolvedPath.slice(2)}`;
        }
      }
    } else if (isWindowsDeviceRoot(resolvedPath.charCodeAt(0)) && resolvedPath.charCodeAt(1) === CHAR_COLON && resolvedPath.charCodeAt(2) === CHAR_BACKWARD_SLASH) {
      return `\\\\?\\${resolvedPath}`;
    }
    return path;
  },
  dirname(path) {
    validateString(path, "path");
    const len = path.length;
    if (len === 0) {
      return ".";
    }
    let rootEnd = -1;
    let offset = 0;
    const code = path.charCodeAt(0);
    if (len === 1) {
      return isPathSeparator(code) ? path : ".";
    }
    if (isPathSeparator(code)) {
      rootEnd = offset = 1;
      if (isPathSeparator(path.charCodeAt(1))) {
        let j = 2;
        let last = j;
        while (j < len && !isPathSeparator(path.charCodeAt(j))) {
          j++;
        }
        if (j < len && j !== last) {
          last = j;
          while (j < len && isPathSeparator(path.charCodeAt(j))) {
            j++;
          }
          if (j < len && j !== last) {
            last = j;
            while (j < len && !isPathSeparator(path.charCodeAt(j))) {
              j++;
            }
            if (j === len) {
              return path;
            }
            if (j !== last) {
              rootEnd = offset = j + 1;
            }
          }
        }
      }
    } else if (isWindowsDeviceRoot(code) && path.charCodeAt(1) === CHAR_COLON) {
      rootEnd = len > 2 && isPathSeparator(path.charCodeAt(2)) ? 3 : 2;
      offset = rootEnd;
    }
    let end = -1;
    let matchedSlash = true;
    for (let i = len - 1; i >= offset; --i) {
      if (isPathSeparator(path.charCodeAt(i))) {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
        matchedSlash = false;
      }
    }
    if (end === -1) {
      if (rootEnd === -1) {
        return ".";
      }
      end = rootEnd;
    }
    return path.slice(0, end);
  },
  basename(path, suffix) {
    if (suffix !== void 0) {
      validateString(suffix, "suffix");
    }
    validateString(path, "path");
    let start = 0;
    let end = -1;
    let matchedSlash = true;
    let i;
    if (path.length >= 2 && isWindowsDeviceRoot(path.charCodeAt(0)) && path.charCodeAt(1) === CHAR_COLON) {
      start = 2;
    }
    if (suffix !== void 0 && suffix.length > 0 && suffix.length <= path.length) {
      if (suffix === path) {
        return "";
      }
      let extIdx = suffix.length - 1;
      let firstNonSlashEnd = -1;
      for (i = path.length - 1; i >= start; --i) {
        const code = path.charCodeAt(i);
        if (isPathSeparator(code)) {
          if (!matchedSlash) {
            start = i + 1;
            break;
          }
        } else {
          if (firstNonSlashEnd === -1) {
            matchedSlash = false;
            firstNonSlashEnd = i + 1;
          }
          if (extIdx >= 0) {
            if (code === suffix.charCodeAt(extIdx)) {
              if (--extIdx === -1) {
                end = i;
              }
            } else {
              extIdx = -1;
              end = firstNonSlashEnd;
            }
          }
        }
      }
      if (start === end) {
        end = firstNonSlashEnd;
      } else if (end === -1) {
        end = path.length;
      }
      return path.slice(start, end);
    }
    for (i = path.length - 1; i >= start; --i) {
      if (isPathSeparator(path.charCodeAt(i))) {
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
        matchedSlash = false;
        end = i + 1;
      }
    }
    if (end === -1) {
      return "";
    }
    return path.slice(start, end);
  },
  extname(path) {
    validateString(path, "path");
    let start = 0;
    let startDot = -1;
    let startPart = 0;
    let end = -1;
    let matchedSlash = true;
    let preDotState = 0;
    if (path.length >= 2 && path.charCodeAt(1) === CHAR_COLON && isWindowsDeviceRoot(path.charCodeAt(0))) {
      start = startPart = 2;
    }
    for (let i = path.length - 1; i >= start; --i) {
      const code = path.charCodeAt(i);
      if (isPathSeparator(code)) {
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
      if (end === -1) {
        matchedSlash = false;
        end = i + 1;
      }
      if (code === CHAR_DOT) {
        if (startDot === -1) {
          startDot = i;
        } else if (preDotState !== 1) {
          preDotState = 1;
        }
      } else if (startDot !== -1) {
        preDotState = -1;
      }
    }
    if (startDot === -1 || end === -1 || // We saw a non-dot character immediately before the dot
    preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
    preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
      return "";
    }
    return path.slice(startDot, end);
  },
  format: _format2.bind(null, "\\"),
  parse(path) {
    validateString(path, "path");
    const ret = { root: "", dir: "", base: "", ext: "", name: "" };
    if (path.length === 0) {
      return ret;
    }
    const len = path.length;
    let rootEnd = 0;
    let code = path.charCodeAt(0);
    if (len === 1) {
      if (isPathSeparator(code)) {
        ret.root = ret.dir = path;
        return ret;
      }
      ret.base = ret.name = path;
      return ret;
    }
    if (isPathSeparator(code)) {
      rootEnd = 1;
      if (isPathSeparator(path.charCodeAt(1))) {
        let j = 2;
        let last = j;
        while (j < len && !isPathSeparator(path.charCodeAt(j))) {
          j++;
        }
        if (j < len && j !== last) {
          last = j;
          while (j < len && isPathSeparator(path.charCodeAt(j))) {
            j++;
          }
          if (j < len && j !== last) {
            last = j;
            while (j < len && !isPathSeparator(path.charCodeAt(j))) {
              j++;
            }
            if (j === len) {
              rootEnd = j;
            } else if (j !== last) {
              rootEnd = j + 1;
            }
          }
        }
      }
    } else if (isWindowsDeviceRoot(code) && path.charCodeAt(1) === CHAR_COLON) {
      if (len <= 2) {
        ret.root = ret.dir = path;
        return ret;
      }
      rootEnd = 2;
      if (isPathSeparator(path.charCodeAt(2))) {
        if (len === 3) {
          ret.root = ret.dir = path;
          return ret;
        }
        rootEnd = 3;
      }
    }
    if (rootEnd > 0) {
      ret.root = path.slice(0, rootEnd);
    }
    let startDot = -1;
    let startPart = rootEnd;
    let end = -1;
    let matchedSlash = true;
    let i = path.length - 1;
    let preDotState = 0;
    for (; i >= rootEnd; --i) {
      code = path.charCodeAt(i);
      if (isPathSeparator(code)) {
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
      if (end === -1) {
        matchedSlash = false;
        end = i + 1;
      }
      if (code === CHAR_DOT) {
        if (startDot === -1) {
          startDot = i;
        } else if (preDotState !== 1) {
          preDotState = 1;
        }
      } else if (startDot !== -1) {
        preDotState = -1;
      }
    }
    if (end !== -1) {
      if (startDot === -1 || // We saw a non-dot character immediately before the dot
      preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
        ret.base = ret.name = path.slice(startPart, end);
      } else {
        ret.name = path.slice(startPart, startDot);
        ret.base = path.slice(startPart, end);
        ret.ext = path.slice(startDot, end);
      }
    }
    if (startPart > 0 && startPart !== rootEnd) {
      ret.dir = path.slice(0, startPart - 1);
    } else {
      ret.dir = ret.root;
    }
    return ret;
  },
  sep: "\\",
  delimiter: ";",
  win32: null,
  posix: null
};
var posixCwd = (() => {
  if (platformIsWin32) {
    const regexp = /\\/g;
    return () => {
      const cwd2 = cwd().replace(regexp, "/");
      return cwd2.slice(cwd2.indexOf("/"));
    };
  }
  return () => cwd();
})();
var $sc = {
  // path.resolve([from ...], to)
  resolve(...pathSegments) {
    let resolvedPath = "";
    let resolvedAbsolute = false;
    for (let i = pathSegments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
      const path = i >= 0 ? pathSegments[i] : posixCwd();
      validateString(path, `paths[${i}]`);
      if (path.length === 0) {
        continue;
      }
      resolvedPath = `${path}/${resolvedPath}`;
      resolvedAbsolute = path.charCodeAt(0) === CHAR_FORWARD_SLASH;
    }
    resolvedPath = normalizeString(resolvedPath, !resolvedAbsolute, "/", isPosixPathSeparator);
    if (resolvedAbsolute) {
      return `/${resolvedPath}`;
    }
    return resolvedPath.length > 0 ? resolvedPath : ".";
  },
  normalize(path) {
    validateString(path, "path");
    if (path.length === 0) {
      return ".";
    }
    const isAbsolute = path.charCodeAt(0) === CHAR_FORWARD_SLASH;
    const trailingSeparator = path.charCodeAt(path.length - 1) === CHAR_FORWARD_SLASH;
    path = normalizeString(path, !isAbsolute, "/", isPosixPathSeparator);
    if (path.length === 0) {
      if (isAbsolute) {
        return "/";
      }
      return trailingSeparator ? "./" : ".";
    }
    if (trailingSeparator) {
      path += "/";
    }
    return isAbsolute ? `/${path}` : path;
  },
  isAbsolute(path) {
    validateString(path, "path");
    return path.length > 0 && path.charCodeAt(0) === CHAR_FORWARD_SLASH;
  },
  join(...paths) {
    if (paths.length === 0) {
      return ".";
    }
    let joined;
    for (let i = 0; i < paths.length; ++i) {
      const arg = paths[i];
      validateString(arg, "path");
      if (arg.length > 0) {
        if (joined === void 0) {
          joined = arg;
        } else {
          joined += `/${arg}`;
        }
      }
    }
    if (joined === void 0) {
      return ".";
    }
    return $sc.normalize(joined);
  },
  relative(from, to) {
    validateString(from, "from");
    validateString(to, "to");
    if (from === to) {
      return "";
    }
    from = $sc.resolve(from);
    to = $sc.resolve(to);
    if (from === to) {
      return "";
    }
    const fromStart = 1;
    const fromEnd = from.length;
    const fromLen = fromEnd - fromStart;
    const toStart = 1;
    const toLen = to.length - toStart;
    const length = fromLen < toLen ? fromLen : toLen;
    let lastCommonSep = -1;
    let i = 0;
    for (; i < length; i++) {
      const fromCode = from.charCodeAt(fromStart + i);
      if (fromCode !== to.charCodeAt(toStart + i)) {
        break;
      } else if (fromCode === CHAR_FORWARD_SLASH) {
        lastCommonSep = i;
      }
    }
    if (i === length) {
      if (toLen > length) {
        if (to.charCodeAt(toStart + i) === CHAR_FORWARD_SLASH) {
          return to.slice(toStart + i + 1);
        }
        if (i === 0) {
          return to.slice(toStart + i);
        }
      } else if (fromLen > length) {
        if (from.charCodeAt(fromStart + i) === CHAR_FORWARD_SLASH) {
          lastCommonSep = i;
        } else if (i === 0) {
          lastCommonSep = 0;
        }
      }
    }
    let out = "";
    for (i = fromStart + lastCommonSep + 1; i <= fromEnd; ++i) {
      if (i === fromEnd || from.charCodeAt(i) === CHAR_FORWARD_SLASH) {
        out += out.length === 0 ? ".." : "/..";
      }
    }
    return `${out}${to.slice(toStart + lastCommonSep)}`;
  },
  toNamespacedPath(path) {
    return path;
  },
  dirname(path) {
    validateString(path, "path");
    if (path.length === 0) {
      return ".";
    }
    const hasRoot = path.charCodeAt(0) === CHAR_FORWARD_SLASH;
    let end = -1;
    let matchedSlash = true;
    for (let i = path.length - 1; i >= 1; --i) {
      if (path.charCodeAt(i) === CHAR_FORWARD_SLASH) {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
        matchedSlash = false;
      }
    }
    if (end === -1) {
      return hasRoot ? "/" : ".";
    }
    if (hasRoot && end === 1) {
      return "//";
    }
    return path.slice(0, end);
  },
  basename(path, suffix) {
    if (suffix !== void 0) {
      validateString(suffix, "ext");
    }
    validateString(path, "path");
    let start = 0;
    let end = -1;
    let matchedSlash = true;
    let i;
    if (suffix !== void 0 && suffix.length > 0 && suffix.length <= path.length) {
      if (suffix === path) {
        return "";
      }
      let extIdx = suffix.length - 1;
      let firstNonSlashEnd = -1;
      for (i = path.length - 1; i >= 0; --i) {
        const code = path.charCodeAt(i);
        if (code === CHAR_FORWARD_SLASH) {
          if (!matchedSlash) {
            start = i + 1;
            break;
          }
        } else {
          if (firstNonSlashEnd === -1) {
            matchedSlash = false;
            firstNonSlashEnd = i + 1;
          }
          if (extIdx >= 0) {
            if (code === suffix.charCodeAt(extIdx)) {
              if (--extIdx === -1) {
                end = i;
              }
            } else {
              extIdx = -1;
              end = firstNonSlashEnd;
            }
          }
        }
      }
      if (start === end) {
        end = firstNonSlashEnd;
      } else if (end === -1) {
        end = path.length;
      }
      return path.slice(start, end);
    }
    for (i = path.length - 1; i >= 0; --i) {
      if (path.charCodeAt(i) === CHAR_FORWARD_SLASH) {
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
        matchedSlash = false;
        end = i + 1;
      }
    }
    if (end === -1) {
      return "";
    }
    return path.slice(start, end);
  },
  extname(path) {
    validateString(path, "path");
    let startDot = -1;
    let startPart = 0;
    let end = -1;
    let matchedSlash = true;
    let preDotState = 0;
    for (let i = path.length - 1; i >= 0; --i) {
      const code = path.charCodeAt(i);
      if (code === CHAR_FORWARD_SLASH) {
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
      if (end === -1) {
        matchedSlash = false;
        end = i + 1;
      }
      if (code === CHAR_DOT) {
        if (startDot === -1) {
          startDot = i;
        } else if (preDotState !== 1) {
          preDotState = 1;
        }
      } else if (startDot !== -1) {
        preDotState = -1;
      }
    }
    if (startDot === -1 || end === -1 || // We saw a non-dot character immediately before the dot
    preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
    preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
      return "";
    }
    return path.slice(startDot, end);
  },
  format: _format2.bind(null, "/"),
  parse(path) {
    validateString(path, "path");
    const ret = { root: "", dir: "", base: "", ext: "", name: "" };
    if (path.length === 0) {
      return ret;
    }
    const isAbsolute = path.charCodeAt(0) === CHAR_FORWARD_SLASH;
    let start;
    if (isAbsolute) {
      ret.root = "/";
      start = 1;
    } else {
      start = 0;
    }
    let startDot = -1;
    let startPart = 0;
    let end = -1;
    let matchedSlash = true;
    let i = path.length - 1;
    let preDotState = 0;
    for (; i >= start; --i) {
      const code = path.charCodeAt(i);
      if (code === CHAR_FORWARD_SLASH) {
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
      if (end === -1) {
        matchedSlash = false;
        end = i + 1;
      }
      if (code === CHAR_DOT) {
        if (startDot === -1) {
          startDot = i;
        } else if (preDotState !== 1) {
          preDotState = 1;
        }
      } else if (startDot !== -1) {
        preDotState = -1;
      }
    }
    if (end !== -1) {
      const start2 = startPart === 0 && isAbsolute ? 1 : startPart;
      if (startDot === -1 || // We saw a non-dot character immediately before the dot
      preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
        ret.base = ret.name = path.slice(start2, end);
      } else {
        ret.name = path.slice(start2, startDot);
        ret.base = path.slice(start2, end);
        ret.ext = path.slice(startDot, end);
      }
    }
    if (startPart > 0) {
      ret.dir = path.slice(0, startPart - 1);
    } else if (isAbsolute) {
      ret.dir = "/";
    }
    return ret;
  },
  sep: "/",
  delimiter: ":",
  win32: null,
  posix: null
};
$sc.win32 = $rc.win32 = $rc;
$sc.posix = $rc.posix = $sc;
var $tc = platformIsWin32 ? $rc.normalize : $sc.normalize;
var $uc = platformIsWin32 ? $rc.isAbsolute : $sc.isAbsolute;
var $vc = platformIsWin32 ? $rc.join : $sc.join;
var $wc = platformIsWin32 ? $rc.resolve : $sc.resolve;
var $xc = platformIsWin32 ? $rc.relative : $sc.relative;
var $yc = platformIsWin32 ? $rc.dirname : $sc.dirname;
var $zc = platformIsWin32 ? $rc.basename : $sc.basename;
var $Ac = platformIsWin32 ? $rc.extname : $sc.extname;
var $Bc = platformIsWin32 ? $rc.format : $sc.format;
var $Cc = platformIsWin32 ? $rc.parse : $sc.parse;
var $Dc = platformIsWin32 ? $rc.toNamespacedPath : $sc.toNamespacedPath;
var sep = platformIsWin32 ? $rc.sep : $sc.sep;
var $Fc = platformIsWin32 ? $rc.delimiter : $sc.delimiter;

// out-build/vs/base/common/cache.js
function $pf(t) {
  return t;
}
var $qf = class {
  constructor(arg1, arg2) {
    this.a = void 0;
    this.b = void 0;
    if (typeof arg1 === "function") {
      this.c = arg1;
      this.d = $pf;
    } else {
      this.c = arg2;
      this.d = arg1.getCacheKey;
    }
  }
  get(arg) {
    const key = this.d(arg);
    if (this.b !== key) {
      this.b = key;
      this.a = this.c(arg);
    }
    return this.a;
  }
};

// out-build/vs/base/common/lazy.js
var $7 = class {
  constructor(d) {
    this.d = d;
    this.a = false;
  }
  /**
   * True if the lazy value has been resolved.
   */
  get hasValue() {
    return this.a;
  }
  /**
   * Get the wrapped value.
   *
   * This will force evaluation of the lazy value if it has not been resolved yet. Lazy values are only
   * resolved once. `getValue` will re-throw exceptions that are hit while resolving the value
   */
  get value() {
    if (!this.a) {
      try {
        this.b = this.d();
      } catch (err) {
        this.c = err;
      } finally {
        this.a = true;
      }
    }
    if (this.c) {
      throw this.c;
    }
    return this.b;
  }
  /**
   * Get the wrapped value without forcing evaluation.
   */
  get rawValue() {
    return this.b;
  }
};

// out-build/vs/base/common/strings.js
function $yf(html2) {
  return html2.replace(/[<>&]/g, function(match) {
    switch (match) {
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case "&":
        return "&amp;";
      default:
        return match;
    }
  });
}
function $zf(value) {
  return value.replace(/[\\\{\}\*\+\?\|\^\$\.\[\]\(\)]/g, "\\$&");
}
function $Ff(haystack, needle) {
  if (!haystack || !needle) {
    return haystack;
  }
  const needleLen = needle.length, haystackLen = haystack.length;
  if (needleLen === 0 || haystackLen === 0) {
    return haystack;
  }
  let offset = haystackLen, idx = -1;
  while (true) {
    idx = haystack.lastIndexOf(needle, offset - 1);
    if (idx === -1 || idx + needleLen !== offset) {
      break;
    }
    if (idx === 0) {
      return "";
    }
    offset = idx;
  }
  return haystack.substring(0, offset);
}
function $Qf(a, b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  } else {
    return 0;
  }
}
function $Rf(a, b, aStart = 0, aEnd = a.length, bStart = 0, bEnd = b.length) {
  for (; aStart < aEnd && bStart < bEnd; aStart++, bStart++) {
    const codeA = a.charCodeAt(aStart);
    const codeB = b.charCodeAt(bStart);
    if (codeA < codeB) {
      return -1;
    } else if (codeA > codeB) {
      return 1;
    }
  }
  const aLen = aEnd - aStart;
  const bLen = bEnd - bStart;
  if (aLen < bLen) {
    return -1;
  } else if (aLen > bLen) {
    return 1;
  }
  return 0;
}
function $Tf(a, b, aStart = 0, aEnd = a.length, bStart = 0, bEnd = b.length) {
  for (; aStart < aEnd && bStart < bEnd; aStart++, bStart++) {
    let codeA = a.charCodeAt(aStart);
    let codeB = b.charCodeAt(bStart);
    if (codeA === codeB) {
      continue;
    }
    if (codeA >= 128 || codeB >= 128) {
      return $Rf(a.toLowerCase(), b.toLowerCase(), aStart, aEnd, bStart, bEnd);
    }
    if ($Vf(codeA)) {
      codeA -= 32;
    }
    if ($Vf(codeB)) {
      codeB -= 32;
    }
    const diff = codeA - codeB;
    if (diff === 0) {
      continue;
    }
    return diff;
  }
  const aLen = aEnd - aStart;
  const bLen = bEnd - bStart;
  if (aLen < bLen) {
    return -1;
  } else if (aLen > bLen) {
    return 1;
  }
  return 0;
}
function $Vf(code) {
  return code >= 97 && code <= 122;
}
function $Wf(code) {
  return code >= 65 && code <= 90;
}
function $Xf(a, b) {
  return a.length === b.length && $Tf(a, b) === 0;
}
function $Yf(str, candidate) {
  const candidateLength = candidate.length;
  if (candidate.length > str.length) {
    return false;
  }
  return $Tf(str, candidate, 0, candidateLength) === 0;
}
function $2f(charCode) {
  return 55296 <= charCode && charCode <= 56319;
}
function $3f(charCode) {
  return 56320 <= charCode && charCode <= 57343;
}
function $4f(highSurrogate, lowSurrogate) {
  return (highSurrogate - 55296 << 10) + (lowSurrogate - 56320) + 65536;
}
var $jg = String.fromCharCode(
  65279
  /* CharCode.UTF8_BOM */
);
var GraphemeBreakType;
(function(GraphemeBreakType2) {
  GraphemeBreakType2[GraphemeBreakType2["Other"] = 0] = "Other";
  GraphemeBreakType2[GraphemeBreakType2["Prepend"] = 1] = "Prepend";
  GraphemeBreakType2[GraphemeBreakType2["CR"] = 2] = "CR";
  GraphemeBreakType2[GraphemeBreakType2["LF"] = 3] = "LF";
  GraphemeBreakType2[GraphemeBreakType2["Control"] = 4] = "Control";
  GraphemeBreakType2[GraphemeBreakType2["Extend"] = 5] = "Extend";
  GraphemeBreakType2[GraphemeBreakType2["Regional_Indicator"] = 6] = "Regional_Indicator";
  GraphemeBreakType2[GraphemeBreakType2["SpacingMark"] = 7] = "SpacingMark";
  GraphemeBreakType2[GraphemeBreakType2["L"] = 8] = "L";
  GraphemeBreakType2[GraphemeBreakType2["V"] = 9] = "V";
  GraphemeBreakType2[GraphemeBreakType2["T"] = 10] = "T";
  GraphemeBreakType2[GraphemeBreakType2["LV"] = 11] = "LV";
  GraphemeBreakType2[GraphemeBreakType2["LVT"] = 12] = "LVT";
  GraphemeBreakType2[GraphemeBreakType2["ZWJ"] = 13] = "ZWJ";
  GraphemeBreakType2[GraphemeBreakType2["Extended_Pictographic"] = 14] = "Extended_Pictographic";
})(GraphemeBreakType || (GraphemeBreakType = {}));
var GraphemeBreakTree = class _GraphemeBreakTree {
  static {
    this.c = null;
  }
  static getInstance() {
    if (!_GraphemeBreakTree.c) {
      _GraphemeBreakTree.c = new _GraphemeBreakTree();
    }
    return _GraphemeBreakTree.c;
  }
  constructor() {
    this.d = getGraphemeBreakRawData();
  }
  getGraphemeBreakType(codePoint) {
    if (codePoint < 32) {
      if (codePoint === 10) {
        return 3;
      }
      if (codePoint === 13) {
        return 2;
      }
      return 4;
    }
    if (codePoint < 127) {
      return 0;
    }
    const data = this.d;
    const nodeCount = data.length / 3;
    let nodeIndex = 1;
    while (nodeIndex <= nodeCount) {
      if (codePoint < data[3 * nodeIndex]) {
        nodeIndex = 2 * nodeIndex;
      } else if (codePoint > data[3 * nodeIndex + 1]) {
        nodeIndex = 2 * nodeIndex + 1;
      } else {
        return data[3 * nodeIndex + 2];
      }
    }
    return 0;
  }
};
function getGraphemeBreakRawData() {
  return JSON.parse("[0,0,0,51229,51255,12,44061,44087,12,127462,127487,6,7083,7085,5,47645,47671,12,54813,54839,12,128678,128678,14,3270,3270,5,9919,9923,14,45853,45879,12,49437,49463,12,53021,53047,12,71216,71218,7,128398,128399,14,129360,129374,14,2519,2519,5,4448,4519,9,9742,9742,14,12336,12336,14,44957,44983,12,46749,46775,12,48541,48567,12,50333,50359,12,52125,52151,12,53917,53943,12,69888,69890,5,73018,73018,5,127990,127990,14,128558,128559,14,128759,128760,14,129653,129655,14,2027,2035,5,2891,2892,7,3761,3761,5,6683,6683,5,8293,8293,4,9825,9826,14,9999,9999,14,43452,43453,5,44509,44535,12,45405,45431,12,46301,46327,12,47197,47223,12,48093,48119,12,48989,49015,12,49885,49911,12,50781,50807,12,51677,51703,12,52573,52599,12,53469,53495,12,54365,54391,12,65279,65279,4,70471,70472,7,72145,72147,7,119173,119179,5,127799,127818,14,128240,128244,14,128512,128512,14,128652,128652,14,128721,128722,14,129292,129292,14,129445,129450,14,129734,129743,14,1476,1477,5,2366,2368,7,2750,2752,7,3076,3076,5,3415,3415,5,4141,4144,5,6109,6109,5,6964,6964,5,7394,7400,5,9197,9198,14,9770,9770,14,9877,9877,14,9968,9969,14,10084,10084,14,43052,43052,5,43713,43713,5,44285,44311,12,44733,44759,12,45181,45207,12,45629,45655,12,46077,46103,12,46525,46551,12,46973,46999,12,47421,47447,12,47869,47895,12,48317,48343,12,48765,48791,12,49213,49239,12,49661,49687,12,50109,50135,12,50557,50583,12,51005,51031,12,51453,51479,12,51901,51927,12,52349,52375,12,52797,52823,12,53245,53271,12,53693,53719,12,54141,54167,12,54589,54615,12,55037,55063,12,69506,69509,5,70191,70193,5,70841,70841,7,71463,71467,5,72330,72342,5,94031,94031,5,123628,123631,5,127763,127765,14,127941,127941,14,128043,128062,14,128302,128317,14,128465,128467,14,128539,128539,14,128640,128640,14,128662,128662,14,128703,128703,14,128745,128745,14,129004,129007,14,129329,129330,14,129402,129402,14,129483,129483,14,129686,129704,14,130048,131069,14,173,173,4,1757,1757,1,2200,2207,5,2434,2435,7,2631,2632,5,2817,2817,5,3008,3008,5,3201,3201,5,3387,3388,5,3542,3542,5,3902,3903,7,4190,4192,5,6002,6003,5,6439,6440,5,6765,6770,7,7019,7027,5,7154,7155,7,8205,8205,13,8505,8505,14,9654,9654,14,9757,9757,14,9792,9792,14,9852,9853,14,9890,9894,14,9937,9937,14,9981,9981,14,10035,10036,14,11035,11036,14,42654,42655,5,43346,43347,7,43587,43587,5,44006,44007,7,44173,44199,12,44397,44423,12,44621,44647,12,44845,44871,12,45069,45095,12,45293,45319,12,45517,45543,12,45741,45767,12,45965,45991,12,46189,46215,12,46413,46439,12,46637,46663,12,46861,46887,12,47085,47111,12,47309,47335,12,47533,47559,12,47757,47783,12,47981,48007,12,48205,48231,12,48429,48455,12,48653,48679,12,48877,48903,12,49101,49127,12,49325,49351,12,49549,49575,12,49773,49799,12,49997,50023,12,50221,50247,12,50445,50471,12,50669,50695,12,50893,50919,12,51117,51143,12,51341,51367,12,51565,51591,12,51789,51815,12,52013,52039,12,52237,52263,12,52461,52487,12,52685,52711,12,52909,52935,12,53133,53159,12,53357,53383,12,53581,53607,12,53805,53831,12,54029,54055,12,54253,54279,12,54477,54503,12,54701,54727,12,54925,54951,12,55149,55175,12,68101,68102,5,69762,69762,7,70067,70069,7,70371,70378,5,70720,70721,7,71087,71087,5,71341,71341,5,71995,71996,5,72249,72249,7,72850,72871,5,73109,73109,5,118576,118598,5,121505,121519,5,127245,127247,14,127568,127569,14,127777,127777,14,127872,127891,14,127956,127967,14,128015,128016,14,128110,128172,14,128259,128259,14,128367,128368,14,128424,128424,14,128488,128488,14,128530,128532,14,128550,128551,14,128566,128566,14,128647,128647,14,128656,128656,14,128667,128673,14,128691,128693,14,128715,128715,14,128728,128732,14,128752,128752,14,128765,128767,14,129096,129103,14,129311,129311,14,129344,129349,14,129394,129394,14,129413,129425,14,129466,129471,14,129511,129535,14,129664,129666,14,129719,129722,14,129760,129767,14,917536,917631,5,13,13,2,1160,1161,5,1564,1564,4,1807,1807,1,2085,2087,5,2307,2307,7,2382,2383,7,2497,2500,5,2563,2563,7,2677,2677,5,2763,2764,7,2879,2879,5,2914,2915,5,3021,3021,5,3142,3144,5,3263,3263,5,3285,3286,5,3398,3400,7,3530,3530,5,3633,3633,5,3864,3865,5,3974,3975,5,4155,4156,7,4229,4230,5,5909,5909,7,6078,6085,7,6277,6278,5,6451,6456,7,6744,6750,5,6846,6846,5,6972,6972,5,7074,7077,5,7146,7148,7,7222,7223,5,7416,7417,5,8234,8238,4,8417,8417,5,9000,9000,14,9203,9203,14,9730,9731,14,9748,9749,14,9762,9763,14,9776,9783,14,9800,9811,14,9831,9831,14,9872,9873,14,9882,9882,14,9900,9903,14,9929,9933,14,9941,9960,14,9974,9974,14,9989,9989,14,10006,10006,14,10062,10062,14,10160,10160,14,11647,11647,5,12953,12953,14,43019,43019,5,43232,43249,5,43443,43443,5,43567,43568,7,43696,43696,5,43765,43765,7,44013,44013,5,44117,44143,12,44229,44255,12,44341,44367,12,44453,44479,12,44565,44591,12,44677,44703,12,44789,44815,12,44901,44927,12,45013,45039,12,45125,45151,12,45237,45263,12,45349,45375,12,45461,45487,12,45573,45599,12,45685,45711,12,45797,45823,12,45909,45935,12,46021,46047,12,46133,46159,12,46245,46271,12,46357,46383,12,46469,46495,12,46581,46607,12,46693,46719,12,46805,46831,12,46917,46943,12,47029,47055,12,47141,47167,12,47253,47279,12,47365,47391,12,47477,47503,12,47589,47615,12,47701,47727,12,47813,47839,12,47925,47951,12,48037,48063,12,48149,48175,12,48261,48287,12,48373,48399,12,48485,48511,12,48597,48623,12,48709,48735,12,48821,48847,12,48933,48959,12,49045,49071,12,49157,49183,12,49269,49295,12,49381,49407,12,49493,49519,12,49605,49631,12,49717,49743,12,49829,49855,12,49941,49967,12,50053,50079,12,50165,50191,12,50277,50303,12,50389,50415,12,50501,50527,12,50613,50639,12,50725,50751,12,50837,50863,12,50949,50975,12,51061,51087,12,51173,51199,12,51285,51311,12,51397,51423,12,51509,51535,12,51621,51647,12,51733,51759,12,51845,51871,12,51957,51983,12,52069,52095,12,52181,52207,12,52293,52319,12,52405,52431,12,52517,52543,12,52629,52655,12,52741,52767,12,52853,52879,12,52965,52991,12,53077,53103,12,53189,53215,12,53301,53327,12,53413,53439,12,53525,53551,12,53637,53663,12,53749,53775,12,53861,53887,12,53973,53999,12,54085,54111,12,54197,54223,12,54309,54335,12,54421,54447,12,54533,54559,12,54645,54671,12,54757,54783,12,54869,54895,12,54981,55007,12,55093,55119,12,55243,55291,10,66045,66045,5,68325,68326,5,69688,69702,5,69817,69818,5,69957,69958,7,70089,70092,5,70198,70199,5,70462,70462,5,70502,70508,5,70750,70750,5,70846,70846,7,71100,71101,5,71230,71230,7,71351,71351,5,71737,71738,5,72000,72000,7,72160,72160,5,72273,72278,5,72752,72758,5,72882,72883,5,73031,73031,5,73461,73462,7,94192,94193,7,119149,119149,7,121403,121452,5,122915,122916,5,126980,126980,14,127358,127359,14,127535,127535,14,127759,127759,14,127771,127771,14,127792,127793,14,127825,127867,14,127897,127899,14,127945,127945,14,127985,127986,14,128000,128007,14,128021,128021,14,128066,128100,14,128184,128235,14,128249,128252,14,128266,128276,14,128335,128335,14,128379,128390,14,128407,128419,14,128444,128444,14,128481,128481,14,128499,128499,14,128526,128526,14,128536,128536,14,128543,128543,14,128556,128556,14,128564,128564,14,128577,128580,14,128643,128645,14,128649,128649,14,128654,128654,14,128660,128660,14,128664,128664,14,128675,128675,14,128686,128689,14,128695,128696,14,128705,128709,14,128717,128719,14,128725,128725,14,128736,128741,14,128747,128748,14,128755,128755,14,128762,128762,14,128981,128991,14,129009,129023,14,129160,129167,14,129296,129304,14,129320,129327,14,129340,129342,14,129356,129356,14,129388,129392,14,129399,129400,14,129404,129407,14,129432,129442,14,129454,129455,14,129473,129474,14,129485,129487,14,129648,129651,14,129659,129660,14,129671,129679,14,129709,129711,14,129728,129730,14,129751,129753,14,129776,129782,14,917505,917505,4,917760,917999,5,10,10,3,127,159,4,768,879,5,1471,1471,5,1536,1541,1,1648,1648,5,1767,1768,5,1840,1866,5,2070,2073,5,2137,2139,5,2274,2274,1,2363,2363,7,2377,2380,7,2402,2403,5,2494,2494,5,2507,2508,7,2558,2558,5,2622,2624,7,2641,2641,5,2691,2691,7,2759,2760,5,2786,2787,5,2876,2876,5,2881,2884,5,2901,2902,5,3006,3006,5,3014,3016,7,3072,3072,5,3134,3136,5,3157,3158,5,3260,3260,5,3266,3266,5,3274,3275,7,3328,3329,5,3391,3392,7,3405,3405,5,3457,3457,5,3536,3537,7,3551,3551,5,3636,3642,5,3764,3772,5,3895,3895,5,3967,3967,7,3993,4028,5,4146,4151,5,4182,4183,7,4226,4226,5,4253,4253,5,4957,4959,5,5940,5940,7,6070,6070,7,6087,6088,7,6158,6158,4,6432,6434,5,6448,6449,7,6679,6680,5,6742,6742,5,6754,6754,5,6783,6783,5,6912,6915,5,6966,6970,5,6978,6978,5,7042,7042,7,7080,7081,5,7143,7143,7,7150,7150,7,7212,7219,5,7380,7392,5,7412,7412,5,8203,8203,4,8232,8232,4,8265,8265,14,8400,8412,5,8421,8432,5,8617,8618,14,9167,9167,14,9200,9200,14,9410,9410,14,9723,9726,14,9733,9733,14,9745,9745,14,9752,9752,14,9760,9760,14,9766,9766,14,9774,9774,14,9786,9786,14,9794,9794,14,9823,9823,14,9828,9828,14,9833,9850,14,9855,9855,14,9875,9875,14,9880,9880,14,9885,9887,14,9896,9897,14,9906,9916,14,9926,9927,14,9935,9935,14,9939,9939,14,9962,9962,14,9972,9972,14,9978,9978,14,9986,9986,14,9997,9997,14,10002,10002,14,10017,10017,14,10055,10055,14,10071,10071,14,10133,10135,14,10548,10549,14,11093,11093,14,12330,12333,5,12441,12442,5,42608,42610,5,43010,43010,5,43045,43046,5,43188,43203,7,43302,43309,5,43392,43394,5,43446,43449,5,43493,43493,5,43571,43572,7,43597,43597,7,43703,43704,5,43756,43757,5,44003,44004,7,44009,44010,7,44033,44059,12,44089,44115,12,44145,44171,12,44201,44227,12,44257,44283,12,44313,44339,12,44369,44395,12,44425,44451,12,44481,44507,12,44537,44563,12,44593,44619,12,44649,44675,12,44705,44731,12,44761,44787,12,44817,44843,12,44873,44899,12,44929,44955,12,44985,45011,12,45041,45067,12,45097,45123,12,45153,45179,12,45209,45235,12,45265,45291,12,45321,45347,12,45377,45403,12,45433,45459,12,45489,45515,12,45545,45571,12,45601,45627,12,45657,45683,12,45713,45739,12,45769,45795,12,45825,45851,12,45881,45907,12,45937,45963,12,45993,46019,12,46049,46075,12,46105,46131,12,46161,46187,12,46217,46243,12,46273,46299,12,46329,46355,12,46385,46411,12,46441,46467,12,46497,46523,12,46553,46579,12,46609,46635,12,46665,46691,12,46721,46747,12,46777,46803,12,46833,46859,12,46889,46915,12,46945,46971,12,47001,47027,12,47057,47083,12,47113,47139,12,47169,47195,12,47225,47251,12,47281,47307,12,47337,47363,12,47393,47419,12,47449,47475,12,47505,47531,12,47561,47587,12,47617,47643,12,47673,47699,12,47729,47755,12,47785,47811,12,47841,47867,12,47897,47923,12,47953,47979,12,48009,48035,12,48065,48091,12,48121,48147,12,48177,48203,12,48233,48259,12,48289,48315,12,48345,48371,12,48401,48427,12,48457,48483,12,48513,48539,12,48569,48595,12,48625,48651,12,48681,48707,12,48737,48763,12,48793,48819,12,48849,48875,12,48905,48931,12,48961,48987,12,49017,49043,12,49073,49099,12,49129,49155,12,49185,49211,12,49241,49267,12,49297,49323,12,49353,49379,12,49409,49435,12,49465,49491,12,49521,49547,12,49577,49603,12,49633,49659,12,49689,49715,12,49745,49771,12,49801,49827,12,49857,49883,12,49913,49939,12,49969,49995,12,50025,50051,12,50081,50107,12,50137,50163,12,50193,50219,12,50249,50275,12,50305,50331,12,50361,50387,12,50417,50443,12,50473,50499,12,50529,50555,12,50585,50611,12,50641,50667,12,50697,50723,12,50753,50779,12,50809,50835,12,50865,50891,12,50921,50947,12,50977,51003,12,51033,51059,12,51089,51115,12,51145,51171,12,51201,51227,12,51257,51283,12,51313,51339,12,51369,51395,12,51425,51451,12,51481,51507,12,51537,51563,12,51593,51619,12,51649,51675,12,51705,51731,12,51761,51787,12,51817,51843,12,51873,51899,12,51929,51955,12,51985,52011,12,52041,52067,12,52097,52123,12,52153,52179,12,52209,52235,12,52265,52291,12,52321,52347,12,52377,52403,12,52433,52459,12,52489,52515,12,52545,52571,12,52601,52627,12,52657,52683,12,52713,52739,12,52769,52795,12,52825,52851,12,52881,52907,12,52937,52963,12,52993,53019,12,53049,53075,12,53105,53131,12,53161,53187,12,53217,53243,12,53273,53299,12,53329,53355,12,53385,53411,12,53441,53467,12,53497,53523,12,53553,53579,12,53609,53635,12,53665,53691,12,53721,53747,12,53777,53803,12,53833,53859,12,53889,53915,12,53945,53971,12,54001,54027,12,54057,54083,12,54113,54139,12,54169,54195,12,54225,54251,12,54281,54307,12,54337,54363,12,54393,54419,12,54449,54475,12,54505,54531,12,54561,54587,12,54617,54643,12,54673,54699,12,54729,54755,12,54785,54811,12,54841,54867,12,54897,54923,12,54953,54979,12,55009,55035,12,55065,55091,12,55121,55147,12,55177,55203,12,65024,65039,5,65520,65528,4,66422,66426,5,68152,68154,5,69291,69292,5,69633,69633,5,69747,69748,5,69811,69814,5,69826,69826,5,69932,69932,7,70016,70017,5,70079,70080,7,70095,70095,5,70196,70196,5,70367,70367,5,70402,70403,7,70464,70464,5,70487,70487,5,70709,70711,7,70725,70725,7,70833,70834,7,70843,70844,7,70849,70849,7,71090,71093,5,71103,71104,5,71227,71228,7,71339,71339,5,71344,71349,5,71458,71461,5,71727,71735,5,71985,71989,7,71998,71998,5,72002,72002,7,72154,72155,5,72193,72202,5,72251,72254,5,72281,72283,5,72344,72345,5,72766,72766,7,72874,72880,5,72885,72886,5,73023,73029,5,73104,73105,5,73111,73111,5,92912,92916,5,94095,94098,5,113824,113827,4,119142,119142,7,119155,119162,4,119362,119364,5,121476,121476,5,122888,122904,5,123184,123190,5,125252,125258,5,127183,127183,14,127340,127343,14,127377,127386,14,127491,127503,14,127548,127551,14,127744,127756,14,127761,127761,14,127769,127769,14,127773,127774,14,127780,127788,14,127796,127797,14,127820,127823,14,127869,127869,14,127894,127895,14,127902,127903,14,127943,127943,14,127947,127950,14,127972,127972,14,127988,127988,14,127992,127994,14,128009,128011,14,128019,128019,14,128023,128041,14,128064,128064,14,128102,128107,14,128174,128181,14,128238,128238,14,128246,128247,14,128254,128254,14,128264,128264,14,128278,128299,14,128329,128330,14,128348,128359,14,128371,128377,14,128392,128393,14,128401,128404,14,128421,128421,14,128433,128434,14,128450,128452,14,128476,128478,14,128483,128483,14,128495,128495,14,128506,128506,14,128519,128520,14,128528,128528,14,128534,128534,14,128538,128538,14,128540,128542,14,128544,128549,14,128552,128555,14,128557,128557,14,128560,128563,14,128565,128565,14,128567,128576,14,128581,128591,14,128641,128642,14,128646,128646,14,128648,128648,14,128650,128651,14,128653,128653,14,128655,128655,14,128657,128659,14,128661,128661,14,128663,128663,14,128665,128666,14,128674,128674,14,128676,128677,14,128679,128685,14,128690,128690,14,128694,128694,14,128697,128702,14,128704,128704,14,128710,128714,14,128716,128716,14,128720,128720,14,128723,128724,14,128726,128727,14,128733,128735,14,128742,128744,14,128746,128746,14,128749,128751,14,128753,128754,14,128756,128758,14,128761,128761,14,128763,128764,14,128884,128895,14,128992,129003,14,129008,129008,14,129036,129039,14,129114,129119,14,129198,129279,14,129293,129295,14,129305,129310,14,129312,129319,14,129328,129328,14,129331,129338,14,129343,129343,14,129351,129355,14,129357,129359,14,129375,129387,14,129393,129393,14,129395,129398,14,129401,129401,14,129403,129403,14,129408,129412,14,129426,129431,14,129443,129444,14,129451,129453,14,129456,129465,14,129472,129472,14,129475,129482,14,129484,129484,14,129488,129510,14,129536,129647,14,129652,129652,14,129656,129658,14,129661,129663,14,129667,129670,14,129680,129685,14,129705,129708,14,129712,129718,14,129723,129727,14,129731,129733,14,129744,129750,14,129754,129759,14,129768,129775,14,129783,129791,14,917504,917504,4,917506,917535,4,917632,917759,4,918000,921599,4,0,9,4,11,12,4,14,31,4,169,169,14,174,174,14,1155,1159,5,1425,1469,5,1473,1474,5,1479,1479,5,1552,1562,5,1611,1631,5,1750,1756,5,1759,1764,5,1770,1773,5,1809,1809,5,1958,1968,5,2045,2045,5,2075,2083,5,2089,2093,5,2192,2193,1,2250,2273,5,2275,2306,5,2362,2362,5,2364,2364,5,2369,2376,5,2381,2381,5,2385,2391,5,2433,2433,5,2492,2492,5,2495,2496,7,2503,2504,7,2509,2509,5,2530,2531,5,2561,2562,5,2620,2620,5,2625,2626,5,2635,2637,5,2672,2673,5,2689,2690,5,2748,2748,5,2753,2757,5,2761,2761,7,2765,2765,5,2810,2815,5,2818,2819,7,2878,2878,5,2880,2880,7,2887,2888,7,2893,2893,5,2903,2903,5,2946,2946,5,3007,3007,7,3009,3010,7,3018,3020,7,3031,3031,5,3073,3075,7,3132,3132,5,3137,3140,7,3146,3149,5,3170,3171,5,3202,3203,7,3262,3262,7,3264,3265,7,3267,3268,7,3271,3272,7,3276,3277,5,3298,3299,5,3330,3331,7,3390,3390,5,3393,3396,5,3402,3404,7,3406,3406,1,3426,3427,5,3458,3459,7,3535,3535,5,3538,3540,5,3544,3550,7,3570,3571,7,3635,3635,7,3655,3662,5,3763,3763,7,3784,3789,5,3893,3893,5,3897,3897,5,3953,3966,5,3968,3972,5,3981,3991,5,4038,4038,5,4145,4145,7,4153,4154,5,4157,4158,5,4184,4185,5,4209,4212,5,4228,4228,7,4237,4237,5,4352,4447,8,4520,4607,10,5906,5908,5,5938,5939,5,5970,5971,5,6068,6069,5,6071,6077,5,6086,6086,5,6089,6099,5,6155,6157,5,6159,6159,5,6313,6313,5,6435,6438,7,6441,6443,7,6450,6450,5,6457,6459,5,6681,6682,7,6741,6741,7,6743,6743,7,6752,6752,5,6757,6764,5,6771,6780,5,6832,6845,5,6847,6862,5,6916,6916,7,6965,6965,5,6971,6971,7,6973,6977,7,6979,6980,7,7040,7041,5,7073,7073,7,7078,7079,7,7082,7082,7,7142,7142,5,7144,7145,5,7149,7149,5,7151,7153,5,7204,7211,7,7220,7221,7,7376,7378,5,7393,7393,7,7405,7405,5,7415,7415,7,7616,7679,5,8204,8204,5,8206,8207,4,8233,8233,4,8252,8252,14,8288,8292,4,8294,8303,4,8413,8416,5,8418,8420,5,8482,8482,14,8596,8601,14,8986,8987,14,9096,9096,14,9193,9196,14,9199,9199,14,9201,9202,14,9208,9210,14,9642,9643,14,9664,9664,14,9728,9729,14,9732,9732,14,9735,9741,14,9743,9744,14,9746,9746,14,9750,9751,14,9753,9756,14,9758,9759,14,9761,9761,14,9764,9765,14,9767,9769,14,9771,9773,14,9775,9775,14,9784,9785,14,9787,9791,14,9793,9793,14,9795,9799,14,9812,9822,14,9824,9824,14,9827,9827,14,9829,9830,14,9832,9832,14,9851,9851,14,9854,9854,14,9856,9861,14,9874,9874,14,9876,9876,14,9878,9879,14,9881,9881,14,9883,9884,14,9888,9889,14,9895,9895,14,9898,9899,14,9904,9905,14,9917,9918,14,9924,9925,14,9928,9928,14,9934,9934,14,9936,9936,14,9938,9938,14,9940,9940,14,9961,9961,14,9963,9967,14,9970,9971,14,9973,9973,14,9975,9977,14,9979,9980,14,9982,9985,14,9987,9988,14,9992,9996,14,9998,9998,14,10000,10001,14,10004,10004,14,10013,10013,14,10024,10024,14,10052,10052,14,10060,10060,14,10067,10069,14,10083,10083,14,10085,10087,14,10145,10145,14,10175,10175,14,11013,11015,14,11088,11088,14,11503,11505,5,11744,11775,5,12334,12335,5,12349,12349,14,12951,12951,14,42607,42607,5,42612,42621,5,42736,42737,5,43014,43014,5,43043,43044,7,43047,43047,7,43136,43137,7,43204,43205,5,43263,43263,5,43335,43345,5,43360,43388,8,43395,43395,7,43444,43445,7,43450,43451,7,43454,43456,7,43561,43566,5,43569,43570,5,43573,43574,5,43596,43596,5,43644,43644,5,43698,43700,5,43710,43711,5,43755,43755,7,43758,43759,7,43766,43766,5,44005,44005,5,44008,44008,5,44012,44012,7,44032,44032,11,44060,44060,11,44088,44088,11,44116,44116,11,44144,44144,11,44172,44172,11,44200,44200,11,44228,44228,11,44256,44256,11,44284,44284,11,44312,44312,11,44340,44340,11,44368,44368,11,44396,44396,11,44424,44424,11,44452,44452,11,44480,44480,11,44508,44508,11,44536,44536,11,44564,44564,11,44592,44592,11,44620,44620,11,44648,44648,11,44676,44676,11,44704,44704,11,44732,44732,11,44760,44760,11,44788,44788,11,44816,44816,11,44844,44844,11,44872,44872,11,44900,44900,11,44928,44928,11,44956,44956,11,44984,44984,11,45012,45012,11,45040,45040,11,45068,45068,11,45096,45096,11,45124,45124,11,45152,45152,11,45180,45180,11,45208,45208,11,45236,45236,11,45264,45264,11,45292,45292,11,45320,45320,11,45348,45348,11,45376,45376,11,45404,45404,11,45432,45432,11,45460,45460,11,45488,45488,11,45516,45516,11,45544,45544,11,45572,45572,11,45600,45600,11,45628,45628,11,45656,45656,11,45684,45684,11,45712,45712,11,45740,45740,11,45768,45768,11,45796,45796,11,45824,45824,11,45852,45852,11,45880,45880,11,45908,45908,11,45936,45936,11,45964,45964,11,45992,45992,11,46020,46020,11,46048,46048,11,46076,46076,11,46104,46104,11,46132,46132,11,46160,46160,11,46188,46188,11,46216,46216,11,46244,46244,11,46272,46272,11,46300,46300,11,46328,46328,11,46356,46356,11,46384,46384,11,46412,46412,11,46440,46440,11,46468,46468,11,46496,46496,11,46524,46524,11,46552,46552,11,46580,46580,11,46608,46608,11,46636,46636,11,46664,46664,11,46692,46692,11,46720,46720,11,46748,46748,11,46776,46776,11,46804,46804,11,46832,46832,11,46860,46860,11,46888,46888,11,46916,46916,11,46944,46944,11,46972,46972,11,47000,47000,11,47028,47028,11,47056,47056,11,47084,47084,11,47112,47112,11,47140,47140,11,47168,47168,11,47196,47196,11,47224,47224,11,47252,47252,11,47280,47280,11,47308,47308,11,47336,47336,11,47364,47364,11,47392,47392,11,47420,47420,11,47448,47448,11,47476,47476,11,47504,47504,11,47532,47532,11,47560,47560,11,47588,47588,11,47616,47616,11,47644,47644,11,47672,47672,11,47700,47700,11,47728,47728,11,47756,47756,11,47784,47784,11,47812,47812,11,47840,47840,11,47868,47868,11,47896,47896,11,47924,47924,11,47952,47952,11,47980,47980,11,48008,48008,11,48036,48036,11,48064,48064,11,48092,48092,11,48120,48120,11,48148,48148,11,48176,48176,11,48204,48204,11,48232,48232,11,48260,48260,11,48288,48288,11,48316,48316,11,48344,48344,11,48372,48372,11,48400,48400,11,48428,48428,11,48456,48456,11,48484,48484,11,48512,48512,11,48540,48540,11,48568,48568,11,48596,48596,11,48624,48624,11,48652,48652,11,48680,48680,11,48708,48708,11,48736,48736,11,48764,48764,11,48792,48792,11,48820,48820,11,48848,48848,11,48876,48876,11,48904,48904,11,48932,48932,11,48960,48960,11,48988,48988,11,49016,49016,11,49044,49044,11,49072,49072,11,49100,49100,11,49128,49128,11,49156,49156,11,49184,49184,11,49212,49212,11,49240,49240,11,49268,49268,11,49296,49296,11,49324,49324,11,49352,49352,11,49380,49380,11,49408,49408,11,49436,49436,11,49464,49464,11,49492,49492,11,49520,49520,11,49548,49548,11,49576,49576,11,49604,49604,11,49632,49632,11,49660,49660,11,49688,49688,11,49716,49716,11,49744,49744,11,49772,49772,11,49800,49800,11,49828,49828,11,49856,49856,11,49884,49884,11,49912,49912,11,49940,49940,11,49968,49968,11,49996,49996,11,50024,50024,11,50052,50052,11,50080,50080,11,50108,50108,11,50136,50136,11,50164,50164,11,50192,50192,11,50220,50220,11,50248,50248,11,50276,50276,11,50304,50304,11,50332,50332,11,50360,50360,11,50388,50388,11,50416,50416,11,50444,50444,11,50472,50472,11,50500,50500,11,50528,50528,11,50556,50556,11,50584,50584,11,50612,50612,11,50640,50640,11,50668,50668,11,50696,50696,11,50724,50724,11,50752,50752,11,50780,50780,11,50808,50808,11,50836,50836,11,50864,50864,11,50892,50892,11,50920,50920,11,50948,50948,11,50976,50976,11,51004,51004,11,51032,51032,11,51060,51060,11,51088,51088,11,51116,51116,11,51144,51144,11,51172,51172,11,51200,51200,11,51228,51228,11,51256,51256,11,51284,51284,11,51312,51312,11,51340,51340,11,51368,51368,11,51396,51396,11,51424,51424,11,51452,51452,11,51480,51480,11,51508,51508,11,51536,51536,11,51564,51564,11,51592,51592,11,51620,51620,11,51648,51648,11,51676,51676,11,51704,51704,11,51732,51732,11,51760,51760,11,51788,51788,11,51816,51816,11,51844,51844,11,51872,51872,11,51900,51900,11,51928,51928,11,51956,51956,11,51984,51984,11,52012,52012,11,52040,52040,11,52068,52068,11,52096,52096,11,52124,52124,11,52152,52152,11,52180,52180,11,52208,52208,11,52236,52236,11,52264,52264,11,52292,52292,11,52320,52320,11,52348,52348,11,52376,52376,11,52404,52404,11,52432,52432,11,52460,52460,11,52488,52488,11,52516,52516,11,52544,52544,11,52572,52572,11,52600,52600,11,52628,52628,11,52656,52656,11,52684,52684,11,52712,52712,11,52740,52740,11,52768,52768,11,52796,52796,11,52824,52824,11,52852,52852,11,52880,52880,11,52908,52908,11,52936,52936,11,52964,52964,11,52992,52992,11,53020,53020,11,53048,53048,11,53076,53076,11,53104,53104,11,53132,53132,11,53160,53160,11,53188,53188,11,53216,53216,11,53244,53244,11,53272,53272,11,53300,53300,11,53328,53328,11,53356,53356,11,53384,53384,11,53412,53412,11,53440,53440,11,53468,53468,11,53496,53496,11,53524,53524,11,53552,53552,11,53580,53580,11,53608,53608,11,53636,53636,11,53664,53664,11,53692,53692,11,53720,53720,11,53748,53748,11,53776,53776,11,53804,53804,11,53832,53832,11,53860,53860,11,53888,53888,11,53916,53916,11,53944,53944,11,53972,53972,11,54000,54000,11,54028,54028,11,54056,54056,11,54084,54084,11,54112,54112,11,54140,54140,11,54168,54168,11,54196,54196,11,54224,54224,11,54252,54252,11,54280,54280,11,54308,54308,11,54336,54336,11,54364,54364,11,54392,54392,11,54420,54420,11,54448,54448,11,54476,54476,11,54504,54504,11,54532,54532,11,54560,54560,11,54588,54588,11,54616,54616,11,54644,54644,11,54672,54672,11,54700,54700,11,54728,54728,11,54756,54756,11,54784,54784,11,54812,54812,11,54840,54840,11,54868,54868,11,54896,54896,11,54924,54924,11,54952,54952,11,54980,54980,11,55008,55008,11,55036,55036,11,55064,55064,11,55092,55092,11,55120,55120,11,55148,55148,11,55176,55176,11,55216,55238,9,64286,64286,5,65056,65071,5,65438,65439,5,65529,65531,4,66272,66272,5,68097,68099,5,68108,68111,5,68159,68159,5,68900,68903,5,69446,69456,5,69632,69632,7,69634,69634,7,69744,69744,5,69759,69761,5,69808,69810,7,69815,69816,7,69821,69821,1,69837,69837,1,69927,69931,5,69933,69940,5,70003,70003,5,70018,70018,7,70070,70078,5,70082,70083,1,70094,70094,7,70188,70190,7,70194,70195,7,70197,70197,7,70206,70206,5,70368,70370,7,70400,70401,5,70459,70460,5,70463,70463,7,70465,70468,7,70475,70477,7,70498,70499,7,70512,70516,5,70712,70719,5,70722,70724,5,70726,70726,5,70832,70832,5,70835,70840,5,70842,70842,5,70845,70845,5,70847,70848,5,70850,70851,5,71088,71089,7,71096,71099,7,71102,71102,7,71132,71133,5,71219,71226,5,71229,71229,5,71231,71232,5,71340,71340,7,71342,71343,7,71350,71350,7,71453,71455,5,71462,71462,7,71724,71726,7,71736,71736,7,71984,71984,5,71991,71992,7,71997,71997,7,71999,71999,1,72001,72001,1,72003,72003,5,72148,72151,5,72156,72159,7,72164,72164,7,72243,72248,5,72250,72250,1,72263,72263,5,72279,72280,7,72324,72329,1,72343,72343,7,72751,72751,7,72760,72765,5,72767,72767,5,72873,72873,7,72881,72881,7,72884,72884,7,73009,73014,5,73020,73021,5,73030,73030,1,73098,73102,7,73107,73108,7,73110,73110,7,73459,73460,5,78896,78904,4,92976,92982,5,94033,94087,7,94180,94180,5,113821,113822,5,118528,118573,5,119141,119141,5,119143,119145,5,119150,119154,5,119163,119170,5,119210,119213,5,121344,121398,5,121461,121461,5,121499,121503,5,122880,122886,5,122907,122913,5,122918,122922,5,123566,123566,5,125136,125142,5,126976,126979,14,126981,127182,14,127184,127231,14,127279,127279,14,127344,127345,14,127374,127374,14,127405,127461,14,127489,127490,14,127514,127514,14,127538,127546,14,127561,127567,14,127570,127743,14,127757,127758,14,127760,127760,14,127762,127762,14,127766,127768,14,127770,127770,14,127772,127772,14,127775,127776,14,127778,127779,14,127789,127791,14,127794,127795,14,127798,127798,14,127819,127819,14,127824,127824,14,127868,127868,14,127870,127871,14,127892,127893,14,127896,127896,14,127900,127901,14,127904,127940,14,127942,127942,14,127944,127944,14,127946,127946,14,127951,127955,14,127968,127971,14,127973,127984,14,127987,127987,14,127989,127989,14,127991,127991,14,127995,127999,5,128008,128008,14,128012,128014,14,128017,128018,14,128020,128020,14,128022,128022,14,128042,128042,14,128063,128063,14,128065,128065,14,128101,128101,14,128108,128109,14,128173,128173,14,128182,128183,14,128236,128237,14,128239,128239,14,128245,128245,14,128248,128248,14,128253,128253,14,128255,128258,14,128260,128263,14,128265,128265,14,128277,128277,14,128300,128301,14,128326,128328,14,128331,128334,14,128336,128347,14,128360,128366,14,128369,128370,14,128378,128378,14,128391,128391,14,128394,128397,14,128400,128400,14,128405,128406,14,128420,128420,14,128422,128423,14,128425,128432,14,128435,128443,14,128445,128449,14,128453,128464,14,128468,128475,14,128479,128480,14,128482,128482,14,128484,128487,14,128489,128494,14,128496,128498,14,128500,128505,14,128507,128511,14,128513,128518,14,128521,128525,14,128527,128527,14,128529,128529,14,128533,128533,14,128535,128535,14,128537,128537,14]");
}
var CodePoint;
(function(CodePoint2) {
  CodePoint2[CodePoint2["zwj"] = 8205] = "zwj";
  CodePoint2[CodePoint2["emojiVariantSelector"] = 65039] = "emojiVariantSelector";
  CodePoint2[CodePoint2["enclosingKeyCap"] = 8419] = "enclosingKeyCap";
})(CodePoint || (CodePoint = {}));
var $ug = class _$ug {
  static {
    this.c = new $7(() => {
      return JSON.parse('{"_common":[8232,32,8233,32,5760,32,8192,32,8193,32,8194,32,8195,32,8196,32,8197,32,8198,32,8200,32,8201,32,8202,32,8287,32,8199,32,8239,32,2042,95,65101,95,65102,95,65103,95,8208,45,8209,45,8210,45,65112,45,1748,45,8259,45,727,45,8722,45,10134,45,11450,45,1549,44,1643,44,8218,44,184,44,42233,44,894,59,2307,58,2691,58,1417,58,1795,58,1796,58,5868,58,65072,58,6147,58,6153,58,8282,58,1475,58,760,58,42889,58,8758,58,720,58,42237,58,451,33,11601,33,660,63,577,63,2429,63,5038,63,42731,63,119149,46,8228,46,1793,46,1794,46,42510,46,68176,46,1632,46,1776,46,42232,46,1373,96,65287,96,8219,96,8242,96,1370,96,1523,96,8175,96,65344,96,900,96,8189,96,8125,96,8127,96,8190,96,697,96,884,96,712,96,714,96,715,96,756,96,699,96,701,96,700,96,702,96,42892,96,1497,96,2036,96,2037,96,5194,96,5836,96,94033,96,94034,96,65339,91,10088,40,10098,40,12308,40,64830,40,65341,93,10089,41,10099,41,12309,41,64831,41,10100,123,119060,123,10101,125,65342,94,8270,42,1645,42,8727,42,66335,42,5941,47,8257,47,8725,47,8260,47,9585,47,10187,47,10744,47,119354,47,12755,47,12339,47,11462,47,20031,47,12035,47,65340,92,65128,92,8726,92,10189,92,10741,92,10745,92,119311,92,119355,92,12756,92,20022,92,12034,92,42872,38,708,94,710,94,5869,43,10133,43,66203,43,8249,60,10094,60,706,60,119350,60,5176,60,5810,60,5120,61,11840,61,12448,61,42239,61,8250,62,10095,62,707,62,119351,62,5171,62,94015,62,8275,126,732,126,8128,126,8764,126,65372,124,65293,45,120784,50,120794,50,120804,50,120814,50,120824,50,130034,50,42842,50,423,50,1000,50,42564,50,5311,50,42735,50,119302,51,120785,51,120795,51,120805,51,120815,51,120825,51,130035,51,42923,51,540,51,439,51,42858,51,11468,51,1248,51,94011,51,71882,51,120786,52,120796,52,120806,52,120816,52,120826,52,130036,52,5070,52,71855,52,120787,53,120797,53,120807,53,120817,53,120827,53,130037,53,444,53,71867,53,120788,54,120798,54,120808,54,120818,54,120828,54,130038,54,11474,54,5102,54,71893,54,119314,55,120789,55,120799,55,120809,55,120819,55,120829,55,130039,55,66770,55,71878,55,2819,56,2538,56,2666,56,125131,56,120790,56,120800,56,120810,56,120820,56,120830,56,130040,56,547,56,546,56,66330,56,2663,57,2920,57,2541,57,3437,57,120791,57,120801,57,120811,57,120821,57,120831,57,130041,57,42862,57,11466,57,71884,57,71852,57,71894,57,9082,97,65345,97,119834,97,119886,97,119938,97,119990,97,120042,97,120094,97,120146,97,120198,97,120250,97,120302,97,120354,97,120406,97,120458,97,593,97,945,97,120514,97,120572,97,120630,97,120688,97,120746,97,65313,65,119808,65,119860,65,119912,65,119964,65,120016,65,120068,65,120120,65,120172,65,120224,65,120276,65,120328,65,120380,65,120432,65,913,65,120488,65,120546,65,120604,65,120662,65,120720,65,5034,65,5573,65,42222,65,94016,65,66208,65,119835,98,119887,98,119939,98,119991,98,120043,98,120095,98,120147,98,120199,98,120251,98,120303,98,120355,98,120407,98,120459,98,388,98,5071,98,5234,98,5551,98,65314,66,8492,66,119809,66,119861,66,119913,66,120017,66,120069,66,120121,66,120173,66,120225,66,120277,66,120329,66,120381,66,120433,66,42932,66,914,66,120489,66,120547,66,120605,66,120663,66,120721,66,5108,66,5623,66,42192,66,66178,66,66209,66,66305,66,65347,99,8573,99,119836,99,119888,99,119940,99,119992,99,120044,99,120096,99,120148,99,120200,99,120252,99,120304,99,120356,99,120408,99,120460,99,7428,99,1010,99,11429,99,43951,99,66621,99,128844,67,71922,67,71913,67,65315,67,8557,67,8450,67,8493,67,119810,67,119862,67,119914,67,119966,67,120018,67,120174,67,120226,67,120278,67,120330,67,120382,67,120434,67,1017,67,11428,67,5087,67,42202,67,66210,67,66306,67,66581,67,66844,67,8574,100,8518,100,119837,100,119889,100,119941,100,119993,100,120045,100,120097,100,120149,100,120201,100,120253,100,120305,100,120357,100,120409,100,120461,100,1281,100,5095,100,5231,100,42194,100,8558,68,8517,68,119811,68,119863,68,119915,68,119967,68,120019,68,120071,68,120123,68,120175,68,120227,68,120279,68,120331,68,120383,68,120435,68,5024,68,5598,68,5610,68,42195,68,8494,101,65349,101,8495,101,8519,101,119838,101,119890,101,119942,101,120046,101,120098,101,120150,101,120202,101,120254,101,120306,101,120358,101,120410,101,120462,101,43826,101,1213,101,8959,69,65317,69,8496,69,119812,69,119864,69,119916,69,120020,69,120072,69,120124,69,120176,69,120228,69,120280,69,120332,69,120384,69,120436,69,917,69,120492,69,120550,69,120608,69,120666,69,120724,69,11577,69,5036,69,42224,69,71846,69,71854,69,66182,69,119839,102,119891,102,119943,102,119995,102,120047,102,120099,102,120151,102,120203,102,120255,102,120307,102,120359,102,120411,102,120463,102,43829,102,42905,102,383,102,7837,102,1412,102,119315,70,8497,70,119813,70,119865,70,119917,70,120021,70,120073,70,120125,70,120177,70,120229,70,120281,70,120333,70,120385,70,120437,70,42904,70,988,70,120778,70,5556,70,42205,70,71874,70,71842,70,66183,70,66213,70,66853,70,65351,103,8458,103,119840,103,119892,103,119944,103,120048,103,120100,103,120152,103,120204,103,120256,103,120308,103,120360,103,120412,103,120464,103,609,103,7555,103,397,103,1409,103,119814,71,119866,71,119918,71,119970,71,120022,71,120074,71,120126,71,120178,71,120230,71,120282,71,120334,71,120386,71,120438,71,1292,71,5056,71,5107,71,42198,71,65352,104,8462,104,119841,104,119945,104,119997,104,120049,104,120101,104,120153,104,120205,104,120257,104,120309,104,120361,104,120413,104,120465,104,1211,104,1392,104,5058,104,65320,72,8459,72,8460,72,8461,72,119815,72,119867,72,119919,72,120023,72,120179,72,120231,72,120283,72,120335,72,120387,72,120439,72,919,72,120494,72,120552,72,120610,72,120668,72,120726,72,11406,72,5051,72,5500,72,42215,72,66255,72,731,105,9075,105,65353,105,8560,105,8505,105,8520,105,119842,105,119894,105,119946,105,119998,105,120050,105,120102,105,120154,105,120206,105,120258,105,120310,105,120362,105,120414,105,120466,105,120484,105,618,105,617,105,953,105,8126,105,890,105,120522,105,120580,105,120638,105,120696,105,120754,105,1110,105,42567,105,1231,105,43893,105,5029,105,71875,105,65354,106,8521,106,119843,106,119895,106,119947,106,119999,106,120051,106,120103,106,120155,106,120207,106,120259,106,120311,106,120363,106,120415,106,120467,106,1011,106,1112,106,65322,74,119817,74,119869,74,119921,74,119973,74,120025,74,120077,74,120129,74,120181,74,120233,74,120285,74,120337,74,120389,74,120441,74,42930,74,895,74,1032,74,5035,74,5261,74,42201,74,119844,107,119896,107,119948,107,120000,107,120052,107,120104,107,120156,107,120208,107,120260,107,120312,107,120364,107,120416,107,120468,107,8490,75,65323,75,119818,75,119870,75,119922,75,119974,75,120026,75,120078,75,120130,75,120182,75,120234,75,120286,75,120338,75,120390,75,120442,75,922,75,120497,75,120555,75,120613,75,120671,75,120729,75,11412,75,5094,75,5845,75,42199,75,66840,75,1472,108,8739,73,9213,73,65512,73,1633,108,1777,73,66336,108,125127,108,120783,73,120793,73,120803,73,120813,73,120823,73,130033,73,65321,73,8544,73,8464,73,8465,73,119816,73,119868,73,119920,73,120024,73,120128,73,120180,73,120232,73,120284,73,120336,73,120388,73,120440,73,65356,108,8572,73,8467,108,119845,108,119897,108,119949,108,120001,108,120053,108,120105,73,120157,73,120209,73,120261,73,120313,73,120365,73,120417,73,120469,73,448,73,120496,73,120554,73,120612,73,120670,73,120728,73,11410,73,1030,73,1216,73,1493,108,1503,108,1575,108,126464,108,126592,108,65166,108,65165,108,1994,108,11599,73,5825,73,42226,73,93992,73,66186,124,66313,124,119338,76,8556,76,8466,76,119819,76,119871,76,119923,76,120027,76,120079,76,120131,76,120183,76,120235,76,120287,76,120339,76,120391,76,120443,76,11472,76,5086,76,5290,76,42209,76,93974,76,71843,76,71858,76,66587,76,66854,76,65325,77,8559,77,8499,77,119820,77,119872,77,119924,77,120028,77,120080,77,120132,77,120184,77,120236,77,120288,77,120340,77,120392,77,120444,77,924,77,120499,77,120557,77,120615,77,120673,77,120731,77,1018,77,11416,77,5047,77,5616,77,5846,77,42207,77,66224,77,66321,77,119847,110,119899,110,119951,110,120003,110,120055,110,120107,110,120159,110,120211,110,120263,110,120315,110,120367,110,120419,110,120471,110,1400,110,1404,110,65326,78,8469,78,119821,78,119873,78,119925,78,119977,78,120029,78,120081,78,120185,78,120237,78,120289,78,120341,78,120393,78,120445,78,925,78,120500,78,120558,78,120616,78,120674,78,120732,78,11418,78,42208,78,66835,78,3074,111,3202,111,3330,111,3458,111,2406,111,2662,111,2790,111,3046,111,3174,111,3302,111,3430,111,3664,111,3792,111,4160,111,1637,111,1781,111,65359,111,8500,111,119848,111,119900,111,119952,111,120056,111,120108,111,120160,111,120212,111,120264,111,120316,111,120368,111,120420,111,120472,111,7439,111,7441,111,43837,111,959,111,120528,111,120586,111,120644,111,120702,111,120760,111,963,111,120532,111,120590,111,120648,111,120706,111,120764,111,11423,111,4351,111,1413,111,1505,111,1607,111,126500,111,126564,111,126596,111,65259,111,65260,111,65258,111,65257,111,1726,111,64428,111,64429,111,64427,111,64426,111,1729,111,64424,111,64425,111,64423,111,64422,111,1749,111,3360,111,4125,111,66794,111,71880,111,71895,111,66604,111,1984,79,2534,79,2918,79,12295,79,70864,79,71904,79,120782,79,120792,79,120802,79,120812,79,120822,79,130032,79,65327,79,119822,79,119874,79,119926,79,119978,79,120030,79,120082,79,120134,79,120186,79,120238,79,120290,79,120342,79,120394,79,120446,79,927,79,120502,79,120560,79,120618,79,120676,79,120734,79,11422,79,1365,79,11604,79,4816,79,2848,79,66754,79,42227,79,71861,79,66194,79,66219,79,66564,79,66838,79,9076,112,65360,112,119849,112,119901,112,119953,112,120005,112,120057,112,120109,112,120161,112,120213,112,120265,112,120317,112,120369,112,120421,112,120473,112,961,112,120530,112,120544,112,120588,112,120602,112,120646,112,120660,112,120704,112,120718,112,120762,112,120776,112,11427,112,65328,80,8473,80,119823,80,119875,80,119927,80,119979,80,120031,80,120083,80,120187,80,120239,80,120291,80,120343,80,120395,80,120447,80,929,80,120504,80,120562,80,120620,80,120678,80,120736,80,11426,80,5090,80,5229,80,42193,80,66197,80,119850,113,119902,113,119954,113,120006,113,120058,113,120110,113,120162,113,120214,113,120266,113,120318,113,120370,113,120422,113,120474,113,1307,113,1379,113,1382,113,8474,81,119824,81,119876,81,119928,81,119980,81,120032,81,120084,81,120188,81,120240,81,120292,81,120344,81,120396,81,120448,81,11605,81,119851,114,119903,114,119955,114,120007,114,120059,114,120111,114,120163,114,120215,114,120267,114,120319,114,120371,114,120423,114,120475,114,43847,114,43848,114,7462,114,11397,114,43905,114,119318,82,8475,82,8476,82,8477,82,119825,82,119877,82,119929,82,120033,82,120189,82,120241,82,120293,82,120345,82,120397,82,120449,82,422,82,5025,82,5074,82,66740,82,5511,82,42211,82,94005,82,65363,115,119852,115,119904,115,119956,115,120008,115,120060,115,120112,115,120164,115,120216,115,120268,115,120320,115,120372,115,120424,115,120476,115,42801,115,445,115,1109,115,43946,115,71873,115,66632,115,65331,83,119826,83,119878,83,119930,83,119982,83,120034,83,120086,83,120138,83,120190,83,120242,83,120294,83,120346,83,120398,83,120450,83,1029,83,1359,83,5077,83,5082,83,42210,83,94010,83,66198,83,66592,83,119853,116,119905,116,119957,116,120009,116,120061,116,120113,116,120165,116,120217,116,120269,116,120321,116,120373,116,120425,116,120477,116,8868,84,10201,84,128872,84,65332,84,119827,84,119879,84,119931,84,119983,84,120035,84,120087,84,120139,84,120191,84,120243,84,120295,84,120347,84,120399,84,120451,84,932,84,120507,84,120565,84,120623,84,120681,84,120739,84,11430,84,5026,84,42196,84,93962,84,71868,84,66199,84,66225,84,66325,84,119854,117,119906,117,119958,117,120010,117,120062,117,120114,117,120166,117,120218,117,120270,117,120322,117,120374,117,120426,117,120478,117,42911,117,7452,117,43854,117,43858,117,651,117,965,117,120534,117,120592,117,120650,117,120708,117,120766,117,1405,117,66806,117,71896,117,8746,85,8899,85,119828,85,119880,85,119932,85,119984,85,120036,85,120088,85,120140,85,120192,85,120244,85,120296,85,120348,85,120400,85,120452,85,1357,85,4608,85,66766,85,5196,85,42228,85,94018,85,71864,85,8744,118,8897,118,65366,118,8564,118,119855,118,119907,118,119959,118,120011,118,120063,118,120115,118,120167,118,120219,118,120271,118,120323,118,120375,118,120427,118,120479,118,7456,118,957,118,120526,118,120584,118,120642,118,120700,118,120758,118,1141,118,1496,118,71430,118,43945,118,71872,118,119309,86,1639,86,1783,86,8548,86,119829,86,119881,86,119933,86,119985,86,120037,86,120089,86,120141,86,120193,86,120245,86,120297,86,120349,86,120401,86,120453,86,1140,86,11576,86,5081,86,5167,86,42719,86,42214,86,93960,86,71840,86,66845,86,623,119,119856,119,119908,119,119960,119,120012,119,120064,119,120116,119,120168,119,120220,119,120272,119,120324,119,120376,119,120428,119,120480,119,7457,119,1121,119,1309,119,1377,119,71434,119,71438,119,71439,119,43907,119,71919,87,71910,87,119830,87,119882,87,119934,87,119986,87,120038,87,120090,87,120142,87,120194,87,120246,87,120298,87,120350,87,120402,87,120454,87,1308,87,5043,87,5076,87,42218,87,5742,120,10539,120,10540,120,10799,120,65368,120,8569,120,119857,120,119909,120,119961,120,120013,120,120065,120,120117,120,120169,120,120221,120,120273,120,120325,120,120377,120,120429,120,120481,120,5441,120,5501,120,5741,88,9587,88,66338,88,71916,88,65336,88,8553,88,119831,88,119883,88,119935,88,119987,88,120039,88,120091,88,120143,88,120195,88,120247,88,120299,88,120351,88,120403,88,120455,88,42931,88,935,88,120510,88,120568,88,120626,88,120684,88,120742,88,11436,88,11613,88,5815,88,42219,88,66192,88,66228,88,66327,88,66855,88,611,121,7564,121,65369,121,119858,121,119910,121,119962,121,120014,121,120066,121,120118,121,120170,121,120222,121,120274,121,120326,121,120378,121,120430,121,120482,121,655,121,7935,121,43866,121,947,121,8509,121,120516,121,120574,121,120632,121,120690,121,120748,121,1199,121,4327,121,71900,121,65337,89,119832,89,119884,89,119936,89,119988,89,120040,89,120092,89,120144,89,120196,89,120248,89,120300,89,120352,89,120404,89,120456,89,933,89,978,89,120508,89,120566,89,120624,89,120682,89,120740,89,11432,89,1198,89,5033,89,5053,89,42220,89,94019,89,71844,89,66226,89,119859,122,119911,122,119963,122,120015,122,120067,122,120119,122,120171,122,120223,122,120275,122,120327,122,120379,122,120431,122,120483,122,7458,122,43923,122,71876,122,66293,90,71909,90,65338,90,8484,90,8488,90,119833,90,119885,90,119937,90,119989,90,120041,90,120197,90,120249,90,120301,90,120353,90,120405,90,120457,90,918,90,120493,90,120551,90,120609,90,120667,90,120725,90,5059,90,42204,90,71849,90,65282,34,65284,36,65285,37,65286,38,65290,42,65291,43,65294,46,65295,47,65296,48,65297,49,65298,50,65299,51,65300,52,65301,53,65302,54,65303,55,65304,56,65305,57,65308,60,65309,61,65310,62,65312,64,65316,68,65318,70,65319,71,65324,76,65329,81,65330,82,65333,85,65334,86,65335,87,65343,95,65346,98,65348,100,65350,102,65355,107,65357,109,65358,110,65361,113,65362,114,65364,116,65365,117,65367,119,65370,122,65371,123,65373,125,119846,109],"_default":[160,32,8211,45,65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"cs":[65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"de":[65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"es":[8211,45,65374,126,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"fr":[65374,126,65306,58,65281,33,8216,96,8245,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"it":[160,32,8211,45,65374,126,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"ja":[8211,45,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65292,44,65307,59],"ko":[8211,45,65374,126,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"pl":[65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"pt-BR":[65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"qps-ploc":[160,32,8211,45,65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"ru":[65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,305,105,921,73,1009,112,215,120,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"tr":[160,32,8211,45,65374,126,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"zh-hans":[65374,126,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41],"zh-hant":[8211,45,65374,126,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65307,59]}');
    });
  }
  static {
    this.d = new $qf({ getCacheKey: JSON.stringify }, (locales) => {
      function arrayToMap(arr) {
        const result = /* @__PURE__ */ new Map();
        for (let i = 0; i < arr.length; i += 2) {
          result.set(arr[i], arr[i + 1]);
        }
        return result;
      }
      function mergeMaps(map1, map2) {
        const result = new Map(map1);
        for (const [key, value] of map2) {
          result.set(key, value);
        }
        return result;
      }
      function intersectMaps(map1, map2) {
        if (!map1) {
          return map2;
        }
        const result = /* @__PURE__ */ new Map();
        for (const [key, value] of map1) {
          if (map2.has(key)) {
            result.set(key, value);
          }
        }
        return result;
      }
      const data = this.c.value;
      let filteredLocales = locales.filter((l) => !l.startsWith("_") && l in data);
      if (filteredLocales.length === 0) {
        filteredLocales = ["_default"];
      }
      let languageSpecificMap = void 0;
      for (const locale of filteredLocales) {
        const map2 = arrayToMap(data[locale]);
        languageSpecificMap = intersectMaps(languageSpecificMap, map2);
      }
      const commonMap = arrayToMap(data["_common"]);
      const map = mergeMaps(commonMap, languageSpecificMap);
      return new _$ug(map);
    });
  }
  static getInstance(locales) {
    return _$ug.d.get(Array.from(locales));
  }
  static {
    this.e = new $7(() => Object.keys(_$ug.c.value).filter((k) => !k.startsWith("_")));
  }
  static getLocales() {
    return _$ug.e.value;
  }
  constructor(f) {
    this.f = f;
  }
  isAmbiguous(codePoint) {
    return this.f.has(codePoint);
  }
  containsAmbiguousCharacter(str) {
    for (let i = 0; i < str.length; i++) {
      const codePoint = str.codePointAt(i);
      if (typeof codePoint === "number" && this.isAmbiguous(codePoint)) {
        return true;
      }
    }
    return false;
  }
  /**
   * Returns the non basic ASCII code point that the given code point can be confused,
   * or undefined if such code point does note exist.
   */
  getPrimaryConfusable(codePoint) {
    return this.f.get(codePoint);
  }
  getConfusableCodePoints() {
    return new Set(this.f.keys());
  }
};
var $vg = class _$vg {
  static c() {
    return JSON.parse("[9,10,11,12,13,32,127,160,173,847,1564,4447,4448,6068,6069,6155,6156,6157,6158,7355,7356,8192,8193,8194,8195,8196,8197,8198,8199,8200,8201,8202,8203,8204,8205,8206,8207,8234,8235,8236,8237,8238,8239,8287,8288,8289,8290,8291,8292,8293,8294,8295,8296,8297,8298,8299,8300,8301,8302,8303,10240,12288,12644,65024,65025,65026,65027,65028,65029,65030,65031,65032,65033,65034,65035,65036,65037,65038,65039,65279,65440,65520,65521,65522,65523,65524,65525,65526,65527,65528,65532,78844,119155,119156,119157,119158,119159,119160,119161,119162,917504,917505,917506,917507,917508,917509,917510,917511,917512,917513,917514,917515,917516,917517,917518,917519,917520,917521,917522,917523,917524,917525,917526,917527,917528,917529,917530,917531,917532,917533,917534,917535,917536,917537,917538,917539,917540,917541,917542,917543,917544,917545,917546,917547,917548,917549,917550,917551,917552,917553,917554,917555,917556,917557,917558,917559,917560,917561,917562,917563,917564,917565,917566,917567,917568,917569,917570,917571,917572,917573,917574,917575,917576,917577,917578,917579,917580,917581,917582,917583,917584,917585,917586,917587,917588,917589,917590,917591,917592,917593,917594,917595,917596,917597,917598,917599,917600,917601,917602,917603,917604,917605,917606,917607,917608,917609,917610,917611,917612,917613,917614,917615,917616,917617,917618,917619,917620,917621,917622,917623,917624,917625,917626,917627,917628,917629,917630,917631,917760,917761,917762,917763,917764,917765,917766,917767,917768,917769,917770,917771,917772,917773,917774,917775,917776,917777,917778,917779,917780,917781,917782,917783,917784,917785,917786,917787,917788,917789,917790,917791,917792,917793,917794,917795,917796,917797,917798,917799,917800,917801,917802,917803,917804,917805,917806,917807,917808,917809,917810,917811,917812,917813,917814,917815,917816,917817,917818,917819,917820,917821,917822,917823,917824,917825,917826,917827,917828,917829,917830,917831,917832,917833,917834,917835,917836,917837,917838,917839,917840,917841,917842,917843,917844,917845,917846,917847,917848,917849,917850,917851,917852,917853,917854,917855,917856,917857,917858,917859,917860,917861,917862,917863,917864,917865,917866,917867,917868,917869,917870,917871,917872,917873,917874,917875,917876,917877,917878,917879,917880,917881,917882,917883,917884,917885,917886,917887,917888,917889,917890,917891,917892,917893,917894,917895,917896,917897,917898,917899,917900,917901,917902,917903,917904,917905,917906,917907,917908,917909,917910,917911,917912,917913,917914,917915,917916,917917,917918,917919,917920,917921,917922,917923,917924,917925,917926,917927,917928,917929,917930,917931,917932,917933,917934,917935,917936,917937,917938,917939,917940,917941,917942,917943,917944,917945,917946,917947,917948,917949,917950,917951,917952,917953,917954,917955,917956,917957,917958,917959,917960,917961,917962,917963,917964,917965,917966,917967,917968,917969,917970,917971,917972,917973,917974,917975,917976,917977,917978,917979,917980,917981,917982,917983,917984,917985,917986,917987,917988,917989,917990,917991,917992,917993,917994,917995,917996,917997,917998,917999]");
  }
  static {
    this.d = void 0;
  }
  static e() {
    if (!this.d) {
      this.d = new Set(_$vg.c());
    }
    return this.d;
  }
  static isInvisibleCharacter(codePoint) {
    return _$vg.e().has(codePoint);
  }
  static containsInvisibleCharacter(str) {
    for (let i = 0; i < str.length; i++) {
      const codePoint = str.codePointAt(i);
      if (typeof codePoint === "number" && _$vg.isInvisibleCharacter(codePoint)) {
        return true;
      }
    }
    return false;
  }
  static get codePoints() {
    return _$vg.e();
  }
};

// out-build/vs/base/common/types.js
function $wg(str) {
  return typeof str === "string";
}
function $yg(obj) {
  return typeof obj === "object" && obj !== null && !Array.isArray(obj) && !(obj instanceof RegExp) && !(obj instanceof Date);
}
function $Dg(obj) {
  return typeof obj === "undefined";
}
function $Fg(obj) {
  return $Dg(obj) || obj === null;
}

// out-build/vs/base/common/extpath.js
function $Pg(code) {
  return code === 47 || code === 92;
}
function $Qg(osPath) {
  return osPath.replace(/[\\/]/g, $sc.sep);
}
function $Rg(osPath) {
  if (osPath.indexOf("/") === -1) {
    osPath = $Qg(osPath);
  }
  if (/^[a-zA-Z]:(\/|$)/.test(osPath)) {
    osPath = "/" + osPath;
  }
  return osPath;
}
function $Sg(path, sep2 = $sc.sep) {
  if (!path) {
    return "";
  }
  const len = path.length;
  const firstLetter = path.charCodeAt(0);
  if ($Pg(firstLetter)) {
    if ($Pg(path.charCodeAt(1))) {
      if (!$Pg(path.charCodeAt(2))) {
        let pos2 = 3;
        const start = pos2;
        for (; pos2 < len; pos2++) {
          if ($Pg(path.charCodeAt(pos2))) {
            break;
          }
        }
        if (start !== pos2 && !$Pg(path.charCodeAt(pos2 + 1))) {
          pos2 += 1;
          for (; pos2 < len; pos2++) {
            if ($Pg(path.charCodeAt(pos2))) {
              return path.slice(0, pos2 + 1).replace(/[\\/]/g, sep2);
            }
          }
        }
      }
    }
    return sep2;
  } else if ($Xg(firstLetter)) {
    if (path.charCodeAt(1) === 58) {
      if ($Pg(path.charCodeAt(2))) {
        return path.slice(0, 2) + sep2;
      } else {
        return path.slice(0, 2);
      }
    }
  }
  let pos = path.indexOf("://");
  if (pos !== -1) {
    pos += 3;
    for (; pos < len; pos++) {
      if ($Pg(path.charCodeAt(pos))) {
        return path.slice(0, pos + 1);
      }
    }
  }
  return "";
}
function $Wg(base, parentCandidate, ignoreCase, separator = sep) {
  if (base === parentCandidate) {
    return true;
  }
  if (!base || !parentCandidate) {
    return false;
  }
  if (parentCandidate.length > base.length) {
    return false;
  }
  if (ignoreCase) {
    const beginsWith = $Yf(base, parentCandidate);
    if (!beginsWith) {
      return false;
    }
    if (parentCandidate.length === base.length) {
      return true;
    }
    let sepOffset = parentCandidate.length;
    if (parentCandidate.charAt(parentCandidate.length - 1) === separator) {
      sepOffset--;
    }
    return base.charAt(sepOffset) === separator;
  }
  if (parentCandidate.charAt(parentCandidate.length - 1) !== separator) {
    parentCandidate += separator;
  }
  return base.indexOf(parentCandidate) === 0;
}
function $Xg(char0) {
  return char0 >= 65 && char0 <= 90 || char0 >= 97 && char0 <= 122;
}

// out-build/vs/base/common/uri.js
var _schemePattern = /^\w[\w\d+.-]*$/;
var _singleSlashStart = /^\//;
var _doubleSlashStart = /^\/\//;
function _validateUri(ret, _strict) {
  if (!ret.scheme && _strict) {
    throw new Error(`[UriError]: Scheme is missing: {scheme: "", authority: "${ret.authority}", path: "${ret.path}", query: "${ret.query}", fragment: "${ret.fragment}"}`);
  }
  if (ret.scheme && !_schemePattern.test(ret.scheme)) {
    throw new Error("[UriError]: Scheme contains illegal characters.");
  }
  if (ret.path) {
    if (ret.authority) {
      if (!_singleSlashStart.test(ret.path)) {
        throw new Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character');
      }
    } else {
      if (_doubleSlashStart.test(ret.path)) {
        throw new Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")');
      }
    }
  }
}
function _schemeFix(scheme, _strict) {
  if (!scheme && !_strict) {
    return "file";
  }
  return scheme;
}
function _referenceResolution(scheme, path) {
  switch (scheme) {
    case "https":
    case "http":
    case "file":
      if (!path) {
        path = _slash;
      } else if (path[0] !== _slash) {
        path = _slash + path;
      }
      break;
  }
  return path;
}
var _empty = "";
var _slash = "/";
var _regexp = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;
var URI = class _URI {
  static isUri(thing) {
    if (thing instanceof _URI) {
      return true;
    }
    if (!thing) {
      return false;
    }
    return typeof thing.authority === "string" && typeof thing.fragment === "string" && typeof thing.path === "string" && typeof thing.query === "string" && typeof thing.scheme === "string" && typeof thing.fsPath === "string" && typeof thing.with === "function" && typeof thing.toString === "function";
  }
  /**
   * @internal
   */
  constructor(schemeOrData, authority, path, query, fragment, _strict = false) {
    if (typeof schemeOrData === "object") {
      this.scheme = schemeOrData.scheme || _empty;
      this.authority = schemeOrData.authority || _empty;
      this.path = schemeOrData.path || _empty;
      this.query = schemeOrData.query || _empty;
      this.fragment = schemeOrData.fragment || _empty;
    } else {
      this.scheme = _schemeFix(schemeOrData, _strict);
      this.authority = authority || _empty;
      this.path = _referenceResolution(this.scheme, path || _empty);
      this.query = query || _empty;
      this.fragment = fragment || _empty;
      _validateUri(this, _strict);
    }
  }
  // ---- filesystem path -----------------------
  /**
   * Returns a string representing the corresponding file system path of this URI.
   * Will handle UNC paths, normalizes windows drive letters to lower-case, and uses the
   * platform specific path separator.
   *
   * * Will *not* validate the path for invalid characters and semantics.
   * * Will *not* look at the scheme of this URI.
   * * The result shall *not* be used for display purposes but for accessing a file on disk.
   *
   *
   * The *difference* to `URI#path` is the use of the platform specific separator and the handling
   * of UNC paths. See the below sample of a file-uri with an authority (UNC path).
   *
   * ```ts
      const u = URI.parse('file://server/c$/folder/file.txt')
      u.authority === 'server'
      u.path === '/shares/c$/file.txt'
      u.fsPath === '\\server\c$\folder\file.txt'
  ```
   *
   * Using `URI#path` to read a file (using fs-apis) would not be enough because parts of the path,
   * namely the server name, would be missing. Therefore `URI#fsPath` exists - it's sugar to ease working
   * with URIs that represent files on disk (`file` scheme).
   */
  get fsPath() {
    return $Ic(this, false);
  }
  // ---- modify to new -------------------------
  with(change) {
    if (!change) {
      return this;
    }
    let { scheme, authority, path, query, fragment } = change;
    if (scheme === void 0) {
      scheme = this.scheme;
    } else if (scheme === null) {
      scheme = _empty;
    }
    if (authority === void 0) {
      authority = this.authority;
    } else if (authority === null) {
      authority = _empty;
    }
    if (path === void 0) {
      path = this.path;
    } else if (path === null) {
      path = _empty;
    }
    if (query === void 0) {
      query = this.query;
    } else if (query === null) {
      query = _empty;
    }
    if (fragment === void 0) {
      fragment = this.fragment;
    } else if (fragment === null) {
      fragment = _empty;
    }
    if (scheme === this.scheme && authority === this.authority && path === this.path && query === this.query && fragment === this.fragment) {
      return this;
    }
    return new Uri(scheme, authority, path, query, fragment);
  }
  // ---- parse & validate ------------------------
  /**
   * Creates a new URI from a string, e.g. `http://www.example.com/some/path`,
   * `file:///usr/home`, or `scheme:with/path`.
   *
   * @param value A string which represents an URI (see `URI#toString`).
   */
  static parse(value, _strict = false) {
    const match = _regexp.exec(value);
    if (!match) {
      return new Uri(_empty, _empty, _empty, _empty, _empty);
    }
    return new Uri(match[2] || _empty, percentDecode(match[4] || _empty), percentDecode(match[5] || _empty), percentDecode(match[7] || _empty), percentDecode(match[9] || _empty), _strict);
  }
  /**
   * Creates a new URI from a file system path, e.g. `c:\my\files`,
   * `/usr/home`, or `\\server\share\some\path`.
   *
   * The *difference* between `URI#parse` and `URI#file` is that the latter treats the argument
   * as path, not as stringified-uri. E.g. `URI.file(path)` is **not the same as**
   * `URI.parse('file://' + path)` because the path might contain characters that are
   * interpreted (# and ?). See the following sample:
   * ```ts
  const good = URI.file('/coding/c#/project1');
  good.scheme === 'file';
  good.path === '/coding/c#/project1';
  good.fragment === '';
  const bad = URI.parse('file://' + '/coding/c#/project1');
  bad.scheme === 'file';
  bad.path === '/coding/c'; // path is now broken
  bad.fragment === '/project1';
  ```
   *
   * @param path A file system path (see `URI#fsPath`)
   */
  static file(path) {
    let authority = _empty;
    if ($l) {
      path = path.replace(/\\/g, _slash);
    }
    if (path[0] === _slash && path[1] === _slash) {
      const idx = path.indexOf(_slash, 2);
      if (idx === -1) {
        authority = path.substring(2);
        path = _slash;
      } else {
        authority = path.substring(2, idx);
        path = path.substring(idx) || _slash;
      }
    }
    return new Uri("file", authority, path, _empty, _empty);
  }
  /**
   * Creates new URI from uri components.
   *
   * Unless `strict` is `true` the scheme is defaults to be `file`. This function performs
   * validation and should be used for untrusted uri components retrieved from storage,
   * user input, command arguments etc
   */
  static from(components, strict) {
    const result = new Uri(components.scheme, components.authority, components.path, components.query, components.fragment, strict);
    return result;
  }
  /**
   * Join a URI path with path fragments and normalizes the resulting path.
   *
   * @param uri The input URI.
   * @param pathFragment The path fragment to add to the URI path.
   * @returns The resulting URI.
   */
  static joinPath(uri, ...pathFragment) {
    if (!uri.path) {
      throw new Error(`[UriError]: cannot call joinPath on URI without path`);
    }
    let newPath;
    if ($l && uri.scheme === "file") {
      newPath = _URI.file($rc.join($Ic(uri, true), ...pathFragment)).path;
    } else {
      newPath = $sc.join(uri.path, ...pathFragment);
    }
    return uri.with({ path: newPath });
  }
  // ---- printing/externalize ---------------------------
  /**
   * Creates a string representation for this URI. It's guaranteed that calling
   * `URI.parse` with the result of this function creates an URI which is equal
   * to this URI.
   *
   * * The result shall *not* be used for display purposes but for externalization or transport.
   * * The result will be encoded using the percentage encoding and encoding happens mostly
   * ignore the scheme-specific encoding rules.
   *
   * @param skipEncoding Do not encode the result, default is `false`
   */
  toString(skipEncoding = false) {
    return _asFormatted(this, skipEncoding);
  }
  toJSON() {
    return this;
  }
  static revive(data) {
    if (!data) {
      return data;
    } else if (data instanceof _URI) {
      return data;
    } else {
      const result = new Uri(data);
      result._formatted = data.external ?? null;
      result._fsPath = data._sep === _pathSepMarker ? data.fsPath ?? null : null;
      return result;
    }
  }
  [Symbol.for("debug.description")]() {
    return `URI(${this.toString()})`;
  }
};
var _pathSepMarker = $l ? 1 : void 0;
var Uri = class extends URI {
  constructor() {
    super(...arguments);
    this._formatted = null;
    this._fsPath = null;
  }
  get fsPath() {
    if (!this._fsPath) {
      this._fsPath = $Ic(this, false);
    }
    return this._fsPath;
  }
  toString(skipEncoding = false) {
    if (!skipEncoding) {
      if (!this._formatted) {
        this._formatted = _asFormatted(this, false);
      }
      return this._formatted;
    } else {
      return _asFormatted(this, true);
    }
  }
  toJSON() {
    const res = {
      $mid: 1
      /* MarshalledId.Uri */
    };
    if (this._fsPath) {
      res.fsPath = this._fsPath;
      res._sep = _pathSepMarker;
    }
    if (this._formatted) {
      res.external = this._formatted;
    }
    if (this.path) {
      res.path = this.path;
    }
    if (this.scheme) {
      res.scheme = this.scheme;
    }
    if (this.authority) {
      res.authority = this.authority;
    }
    if (this.query) {
      res.query = this.query;
    }
    if (this.fragment) {
      res.fragment = this.fragment;
    }
    return res;
  }
};
var encodeTable = {
  [
    58
    /* CharCode.Colon */
  ]: "%3A",
  // gen-delims
  [
    47
    /* CharCode.Slash */
  ]: "%2F",
  [
    63
    /* CharCode.QuestionMark */
  ]: "%3F",
  [
    35
    /* CharCode.Hash */
  ]: "%23",
  [
    91
    /* CharCode.OpenSquareBracket */
  ]: "%5B",
  [
    93
    /* CharCode.CloseSquareBracket */
  ]: "%5D",
  [
    64
    /* CharCode.AtSign */
  ]: "%40",
  [
    33
    /* CharCode.ExclamationMark */
  ]: "%21",
  // sub-delims
  [
    36
    /* CharCode.DollarSign */
  ]: "%24",
  [
    38
    /* CharCode.Ampersand */
  ]: "%26",
  [
    39
    /* CharCode.SingleQuote */
  ]: "%27",
  [
    40
    /* CharCode.OpenParen */
  ]: "%28",
  [
    41
    /* CharCode.CloseParen */
  ]: "%29",
  [
    42
    /* CharCode.Asterisk */
  ]: "%2A",
  [
    43
    /* CharCode.Plus */
  ]: "%2B",
  [
    44
    /* CharCode.Comma */
  ]: "%2C",
  [
    59
    /* CharCode.Semicolon */
  ]: "%3B",
  [
    61
    /* CharCode.Equals */
  ]: "%3D",
  [
    32
    /* CharCode.Space */
  ]: "%20"
};
function encodeURIComponentFast(uriComponent, isPath, isAuthority) {
  let res = void 0;
  let nativeEncodePos = -1;
  for (let pos = 0; pos < uriComponent.length; pos++) {
    const code = uriComponent.charCodeAt(pos);
    if (code >= 97 && code <= 122 || code >= 65 && code <= 90 || code >= 48 && code <= 57 || code === 45 || code === 46 || code === 95 || code === 126 || isPath && code === 47 || isAuthority && code === 91 || isAuthority && code === 93 || isAuthority && code === 58) {
      if (nativeEncodePos !== -1) {
        res += encodeURIComponent(uriComponent.substring(nativeEncodePos, pos));
        nativeEncodePos = -1;
      }
      if (res !== void 0) {
        res += uriComponent.charAt(pos);
      }
    } else {
      if (res === void 0) {
        res = uriComponent.substr(0, pos);
      }
      const escaped = encodeTable[code];
      if (escaped !== void 0) {
        if (nativeEncodePos !== -1) {
          res += encodeURIComponent(uriComponent.substring(nativeEncodePos, pos));
          nativeEncodePos = -1;
        }
        res += escaped;
      } else if (nativeEncodePos === -1) {
        nativeEncodePos = pos;
      }
    }
  }
  if (nativeEncodePos !== -1) {
    res += encodeURIComponent(uriComponent.substring(nativeEncodePos));
  }
  return res !== void 0 ? res : uriComponent;
}
function encodeURIComponentMinimal(path) {
  let res = void 0;
  for (let pos = 0; pos < path.length; pos++) {
    const code = path.charCodeAt(pos);
    if (code === 35 || code === 63) {
      if (res === void 0) {
        res = path.substr(0, pos);
      }
      res += encodeTable[code];
    } else {
      if (res !== void 0) {
        res += path[pos];
      }
    }
  }
  return res !== void 0 ? res : path;
}
function $Ic(uri, keepDriveLetterCasing) {
  let value;
  if (uri.authority && uri.path.length > 1 && uri.scheme === "file") {
    value = `//${uri.authority}${uri.path}`;
  } else if (uri.path.charCodeAt(0) === 47 && (uri.path.charCodeAt(1) >= 65 && uri.path.charCodeAt(1) <= 90 || uri.path.charCodeAt(1) >= 97 && uri.path.charCodeAt(1) <= 122) && uri.path.charCodeAt(2) === 58) {
    if (!keepDriveLetterCasing) {
      value = uri.path[1].toLowerCase() + uri.path.substr(2);
    } else {
      value = uri.path.substr(1);
    }
  } else {
    value = uri.path;
  }
  if ($l) {
    value = value.replace(/\//g, "\\");
  }
  return value;
}
function _asFormatted(uri, skipEncoding) {
  const encoder = !skipEncoding ? encodeURIComponentFast : encodeURIComponentMinimal;
  let res = "";
  let { scheme, authority, path, query, fragment } = uri;
  if (scheme) {
    res += scheme;
    res += ":";
  }
  if (authority || scheme === "file") {
    res += _slash;
    res += _slash;
  }
  if (authority) {
    let idx = authority.indexOf("@");
    if (idx !== -1) {
      const userinfo = authority.substr(0, idx);
      authority = authority.substr(idx + 1);
      idx = userinfo.lastIndexOf(":");
      if (idx === -1) {
        res += encoder(userinfo, false, false);
      } else {
        res += encoder(userinfo.substr(0, idx), false, false);
        res += ":";
        res += encoder(userinfo.substr(idx + 1), false, true);
      }
      res += "@";
    }
    authority = authority.toLowerCase();
    idx = authority.lastIndexOf(":");
    if (idx === -1) {
      res += encoder(authority, false, true);
    } else {
      res += encoder(authority.substr(0, idx), false, true);
      res += authority.substr(idx);
    }
  }
  if (path) {
    if (path.length >= 3 && path.charCodeAt(0) === 47 && path.charCodeAt(2) === 58) {
      const code = path.charCodeAt(1);
      if (code >= 65 && code <= 90) {
        path = `/${String.fromCharCode(code + 32)}:${path.substr(3)}`;
      }
    } else if (path.length >= 2 && path.charCodeAt(1) === 58) {
      const code = path.charCodeAt(0);
      if (code >= 65 && code <= 90) {
        path = `${String.fromCharCode(code + 32)}:${path.substr(2)}`;
      }
    }
    res += encoder(path, true, false);
  }
  if (query) {
    res += "?";
    res += encoder(query, false, false);
  }
  if (fragment) {
    res += "#";
    res += !skipEncoding ? encodeURIComponentFast(fragment, false, false) : fragment;
  }
  return res;
}
function decodeURIComponentGraceful(str) {
  try {
    return decodeURIComponent(str);
  } catch {
    if (str.length > 3) {
      return str.substr(0, 3) + decodeURIComponentGraceful(str.substr(3));
    } else {
      return str;
    }
  }
}
var _rEncodedAsHex = /(%[0-9A-Za-z][0-9A-Za-z])+/g;
function percentDecode(str) {
  if (!str.match(_rEncodedAsHex)) {
    return str;
  }
  return str.replace(_rEncodedAsHex, (match) => decodeURIComponentGraceful(match));
}

// out-build/vs/base/common/network.js
var Schemas;
(function(Schemas2) {
  Schemas2.inMemory = "inmemory";
  Schemas2.vscode = "vscode";
  Schemas2.internal = "private";
  Schemas2.walkThrough = "walkThrough";
  Schemas2.walkThroughSnippet = "walkThroughSnippet";
  Schemas2.http = "http";
  Schemas2.https = "https";
  Schemas2.file = "file";
  Schemas2.mailto = "mailto";
  Schemas2.untitled = "untitled";
  Schemas2.data = "data";
  Schemas2.command = "command";
  Schemas2.vscodeRemote = "vscode-remote";
  Schemas2.vscodeRemoteResource = "vscode-remote-resource";
  Schemas2.vscodeManagedRemoteResource = "vscode-managed-remote-resource";
  Schemas2.vscodeUserData = "vscode-userdata";
  Schemas2.vscodeCustomEditor = "vscode-custom-editor";
  Schemas2.vscodeNotebookCell = "vscode-notebook-cell";
  Schemas2.vscodeNotebookCellMetadata = "vscode-notebook-cell-metadata";
  Schemas2.vscodeNotebookCellMetadataDiff = "vscode-notebook-cell-metadata-diff";
  Schemas2.vscodeNotebookCellOutput = "vscode-notebook-cell-output";
  Schemas2.vscodeNotebookCellOutputDiff = "vscode-notebook-cell-output-diff";
  Schemas2.vscodeNotebookMetadata = "vscode-notebook-metadata";
  Schemas2.vscodeInteractiveInput = "vscode-interactive-input";
  Schemas2.vscodeSettings = "vscode-settings";
  Schemas2.vscodeWorkspaceTrust = "vscode-workspace-trust";
  Schemas2.vscodeTerminal = "vscode-terminal";
  Schemas2.vscodeChatCodeBlock = "vscode-chat-code-block";
  Schemas2.vscodeChatCodeCompareBlock = "vscode-chat-code-compare-block";
  Schemas2.vscodeChatSesssion = "vscode-chat-editor";
  Schemas2.webviewPanel = "webview-panel";
  Schemas2.vscodeWebview = "vscode-webview";
  Schemas2.extension = "extension";
  Schemas2.vscodeFileResource = "vscode-file";
  Schemas2.tmp = "tmp";
  Schemas2.vsls = "vsls";
  Schemas2.vscodeSourceControl = "vscode-scm";
  Schemas2.commentsInput = "comment";
  Schemas2.codeSetting = "code-setting";
  Schemas2.outputChannel = "output";
})(Schemas || (Schemas = {}));
var $0g = "tkn";
var RemoteAuthoritiesImpl = class {
  constructor() {
    this.a = /* @__PURE__ */ Object.create(null);
    this.b = /* @__PURE__ */ Object.create(null);
    this.c = /* @__PURE__ */ Object.create(null);
    this.d = "http";
    this.e = null;
    this.f = "/";
  }
  setPreferredWebSchema(schema) {
    this.d = schema;
  }
  setDelegate(delegate) {
    this.e = delegate;
  }
  setServerRootPath(product, serverBasePath) {
    this.f = $_g(product, serverBasePath);
  }
  getServerRootPath() {
    return this.f;
  }
  get g() {
    return $sc.join(this.f, Schemas.vscodeRemoteResource);
  }
  set(authority, host, port) {
    this.a[authority] = host;
    this.b[authority] = port;
  }
  setConnectionToken(authority, connectionToken) {
    this.c[authority] = connectionToken;
  }
  getPreferredWebSchema() {
    return this.d;
  }
  rewrite(uri) {
    if (this.e) {
      try {
        return this.e(uri);
      } catch (err) {
        $ab(err);
        return uri;
      }
    }
    const authority = uri.authority;
    let host = this.a[authority];
    if (host && host.indexOf(":") !== -1 && host.indexOf("[") === -1) {
      host = `[${host}]`;
    }
    const port = this.b[authority];
    const connectionToken = this.c[authority];
    let query = `path=${encodeURIComponent(uri.path)}`;
    if (typeof connectionToken === "string") {
      query += `&${$0g}=${encodeURIComponent(connectionToken)}`;
    }
    return URI.from({
      scheme: $r ? this.d : Schemas.vscodeRemoteResource,
      authority: `${host}:${port}`,
      path: this.g,
      query
    });
  }
};
var $$g = new RemoteAuthoritiesImpl();
function $_g(product, basePath) {
  return $sc.join(basePath ?? "/", `${product.quality ?? "oss"}-${product.commit ?? "dev"}`);
}
var $eh = "vscode-app";
var FileAccessImpl = class _FileAccessImpl {
  static {
    this.a = $eh;
  }
  /**
   * Returns a URI to use in contexts where the browser is responsible
   * for loading (e.g. fetch()) or when used within the DOM.
   *
   * **Note:** use `dom.ts#asCSSUrl` whenever the URL is to be used in CSS context.
   */
  asBrowserUri(resourcePath) {
    const uri = this.b(resourcePath);
    return this.uriToBrowserUri(uri);
  }
  /**
   * Returns a URI to use in contexts where the browser is responsible
   * for loading (e.g. fetch()) or when used within the DOM.
   *
   * **Note:** use `dom.ts#asCSSUrl` whenever the URL is to be used in CSS context.
   */
  uriToBrowserUri(uri) {
    if (uri.scheme === Schemas.vscodeRemote) {
      return $$g.rewrite(uri);
    }
    if (
      // ...only ever for `file` resources
      uri.scheme === Schemas.file && // ...and we run in native environments
      ($p || // ...or web worker extensions on desktop
      $t === `${Schemas.vscodeFileResource}://${_FileAccessImpl.a}`)
    ) {
      return uri.with({
        scheme: Schemas.vscodeFileResource,
        // We need to provide an authority here so that it can serve
        // as origin for network and loading matters in chromium.
        // If the URI is not coming with an authority already, we
        // add our own
        authority: uri.authority || _FileAccessImpl.a,
        query: null,
        fragment: null
      });
    }
    return uri;
  }
  /**
   * Returns the `file` URI to use in contexts where node.js
   * is responsible for loading.
   */
  asFileUri(resourcePath) {
    const uri = this.b(resourcePath);
    return this.uriToFileUri(uri);
  }
  /**
   * Returns the `file` URI to use in contexts where node.js
   * is responsible for loading.
   */
  uriToFileUri(uri) {
    if (uri.scheme === Schemas.vscodeFileResource) {
      return uri.with({
        scheme: Schemas.file,
        // Only preserve the `authority` if it is different from
        // our fallback authority. This ensures we properly preserve
        // Windows UNC paths that come with their own authority.
        authority: uri.authority !== _FileAccessImpl.a ? uri.authority : null,
        query: null,
        fragment: null
      });
    }
    return uri;
  }
  b(uriOrModule, moduleIdToUrl) {
    if (URI.isUri(uriOrModule)) {
      return uriOrModule;
    }
    if (globalThis._VSCODE_FILE_ROOT) {
      const rootUriOrPath = globalThis._VSCODE_FILE_ROOT;
      if (/^\w[\w\d+.-]*:\/\//.test(rootUriOrPath)) {
        return URI.joinPath(URI.parse(rootUriOrPath, true), uriOrModule);
      }
      const modulePath = $vc(rootUriOrPath, uriOrModule);
      return URI.file(modulePath);
    }
    return URI.parse(moduleIdToUrl.toUrl(uriOrModule));
  }
};
var $fh = new FileAccessImpl();
var COI;
(function(COI2) {
  const coiHeaders = /* @__PURE__ */ new Map([
    ["1", { "Cross-Origin-Opener-Policy": "same-origin" }],
    ["2", { "Cross-Origin-Embedder-Policy": "require-corp" }],
    ["3", { "Cross-Origin-Opener-Policy": "same-origin", "Cross-Origin-Embedder-Policy": "require-corp" }]
  ]);
  COI2.CoopAndCoep = Object.freeze(coiHeaders.get("3"));
  const coiSearchParamName = "vscode-coi";
  function getHeadersFromQuery(url) {
    let params;
    if (typeof url === "string") {
      params = new URL(url).searchParams;
    } else if (url instanceof URL) {
      params = url.searchParams;
    } else if (URI.isUri(url)) {
      params = new URL(url.toString(true)).searchParams;
    }
    const value = params?.get(coiSearchParamName);
    if (!value) {
      return void 0;
    }
    return coiHeaders.get(value);
  }
  COI2.getHeadersFromQuery = getHeadersFromQuery;
  function addSearchParam(urlOrSearch, coop, coep) {
    if (!globalThis.crossOriginIsolated) {
      return;
    }
    const value = coop && coep ? "3" : coep ? "2" : "1";
    if (urlOrSearch instanceof URLSearchParams) {
      urlOrSearch.set(coiSearchParamName, value);
    } else {
      urlOrSearch[coiSearchParamName] = value;
    }
  }
  COI2.addSearchParam = addSearchParam;
})(COI || (COI = {}));

// out-build/vs/base/common/resources.js
function $mh(uri) {
  return $Ic(uri, true);
}
var $nh = class {
  constructor(a) {
    this.a = a;
  }
  compare(uri1, uri2, ignoreFragment = false) {
    if (uri1 === uri2) {
      return 0;
    }
    return $Qf(this.getComparisonKey(uri1, ignoreFragment), this.getComparisonKey(uri2, ignoreFragment));
  }
  isEqual(uri1, uri2, ignoreFragment = false) {
    if (uri1 === uri2) {
      return true;
    }
    if (!uri1 || !uri2) {
      return false;
    }
    return this.getComparisonKey(uri1, ignoreFragment) === this.getComparisonKey(uri2, ignoreFragment);
  }
  getComparisonKey(uri, ignoreFragment = false) {
    return uri.with({
      path: this.a(uri) ? uri.path.toLowerCase() : void 0,
      fragment: ignoreFragment ? null : void 0
    }).toString();
  }
  ignorePathCasing(uri) {
    return this.a(uri);
  }
  isEqualOrParent(base, parentCandidate, ignoreFragment = false) {
    if (base.scheme === parentCandidate.scheme) {
      if (base.scheme === Schemas.file) {
        return $Wg($mh(base), $mh(parentCandidate), this.a(base)) && base.query === parentCandidate.query && (ignoreFragment || base.fragment === parentCandidate.fragment);
      }
      if ($Dh(base.authority, parentCandidate.authority)) {
        return $Wg(base.path, parentCandidate.path, this.a(base), "/") && base.query === parentCandidate.query && (ignoreFragment || base.fragment === parentCandidate.fragment);
      }
    }
    return false;
  }
  // --- path math
  joinPath(resource, ...pathFragment) {
    return URI.joinPath(resource, ...pathFragment);
  }
  basenameOrAuthority(resource) {
    return $vh(resource) || resource.authority;
  }
  basename(resource) {
    return $sc.basename(resource.path);
  }
  extname(resource) {
    return $sc.extname(resource.path);
  }
  dirname(resource) {
    if (resource.path.length === 0) {
      return resource;
    }
    let dirname;
    if (resource.scheme === Schemas.file) {
      dirname = URI.file($yc($mh(resource))).path;
    } else {
      dirname = $sc.dirname(resource.path);
      if (resource.authority && dirname.length && dirname.charCodeAt(0) !== 47) {
        console.error(`dirname("${resource.toString})) resulted in a relative path`);
        dirname = "/";
      }
    }
    return resource.with({
      path: dirname
    });
  }
  normalizePath(resource) {
    if (!resource.path.length) {
      return resource;
    }
    let normalizedPath;
    if (resource.scheme === Schemas.file) {
      normalizedPath = URI.file($tc($mh(resource))).path;
    } else {
      normalizedPath = $sc.normalize(resource.path);
    }
    return resource.with({
      path: normalizedPath
    });
  }
  relativePath(from, to) {
    if (from.scheme !== to.scheme || !$Dh(from.authority, to.authority)) {
      return void 0;
    }
    if (from.scheme === Schemas.file) {
      const relativePath = $xc($mh(from), $mh(to));
      return $l ? $Qg(relativePath) : relativePath;
    }
    let fromPath = from.path || "/";
    const toPath = to.path || "/";
    if (this.a(from)) {
      let i = 0;
      for (const len = Math.min(fromPath.length, toPath.length); i < len; i++) {
        if (fromPath.charCodeAt(i) !== toPath.charCodeAt(i)) {
          if (fromPath.charAt(i).toLowerCase() !== toPath.charAt(i).toLowerCase()) {
            break;
          }
        }
      }
      fromPath = toPath.substr(0, i) + fromPath.substr(i);
    }
    return $sc.relative(fromPath, toPath);
  }
  resolvePath(base, path) {
    if (base.scheme === Schemas.file) {
      const newURI = URI.file($wc($mh(base), path));
      return base.with({
        authority: newURI.authority,
        path: newURI.path
      });
    }
    path = $Rg(path);
    return base.with({
      path: $sc.resolve(base.path, path)
    });
  }
  // --- misc
  isAbsolutePath(resource) {
    return !!resource.path && resource.path[0] === "/";
  }
  isEqualAuthority(a1, a2) {
    return a1 === a2 || a1 !== void 0 && a2 !== void 0 && $Xf(a1, a2);
  }
  hasTrailingPathSeparator(resource, sep2 = sep) {
    if (resource.scheme === Schemas.file) {
      const fsp = $mh(resource);
      return fsp.length > $Sg(fsp).length && fsp[fsp.length - 1] === sep2;
    } else {
      const p = resource.path;
      return p.length > 1 && p.charCodeAt(p.length - 1) === 47 && !/^[a-zA-Z]:(\/$|\\$)/.test(resource.fsPath);
    }
  }
  removeTrailingPathSeparator(resource, sep2 = sep) {
    if ($Eh(resource, sep2)) {
      return resource.with({ path: resource.path.substr(0, resource.path.length - 1) });
    }
    return resource;
  }
  addTrailingPathSeparator(resource, sep2 = sep) {
    let isRootSep = false;
    if (resource.scheme === Schemas.file) {
      const fsp = $mh(resource);
      isRootSep = fsp !== void 0 && fsp.length === $Sg(fsp).length && fsp[fsp.length - 1] === sep2;
    } else {
      sep2 = "/";
      const p = resource.path;
      isRootSep = p.length === 1 && p.charCodeAt(p.length - 1) === 47;
    }
    if (!isRootSep && !$Eh(resource, sep2)) {
      return resource.with({ path: resource.path + "/" });
    }
    return resource;
  }
};
var $oh = new $nh(() => false);
var $ph = new $nh((uri) => {
  return uri.scheme === Schemas.file ? !$n : true;
});
var $qh = new $nh((_) => true);
var $rh = $oh.isEqual.bind($oh);
var $sh = $oh.isEqualOrParent.bind($oh);
var $th = $oh.getComparisonKey.bind($oh);
var $uh = $oh.basenameOrAuthority.bind($oh);
var $vh = $oh.basename.bind($oh);
var $wh = $oh.extname.bind($oh);
var $xh = $oh.dirname.bind($oh);
var $yh = $oh.joinPath.bind($oh);
var $zh = $oh.normalizePath.bind($oh);
var $Ah = $oh.relativePath.bind($oh);
var $Bh = $oh.resolvePath.bind($oh);
var $Ch = $oh.isAbsolutePath.bind($oh);
var $Dh = $oh.isEqualAuthority.bind($oh);
var $Eh = $oh.hasTrailingPathSeparator.bind($oh);
var $Fh = $oh.removeTrailingPathSeparator.bind($oh);
var $Gh = $oh.addTrailingPathSeparator.bind($oh);
var DataUri;
(function(DataUri2) {
  DataUri2.META_DATA_LABEL = "label";
  DataUri2.META_DATA_DESCRIPTION = "description";
  DataUri2.META_DATA_SIZE = "size";
  DataUri2.META_DATA_MIME = "mime";
  function parseMetaData(dataUri) {
    const metadata = /* @__PURE__ */ new Map();
    const meta = dataUri.path.substring(dataUri.path.indexOf(";") + 1, dataUri.path.lastIndexOf(";"));
    meta.split(";").forEach((property) => {
      const [key, value] = property.split(":");
      if (key && value) {
        metadata.set(key, value);
      }
    });
    const mime = dataUri.path.substring(0, dataUri.path.indexOf(";"));
    if (mime) {
      metadata.set(DataUri2.META_DATA_MIME, mime);
    }
    return metadata;
  }
  DataUri2.parseMetaData = parseMetaData;
})(DataUri || (DataUri = {}));

// out-build/vs/base/common/symbols.js
var $xe = Symbol("MicrotaskDelay");

// out-build/vs/base/common/async.js
function $Kh(callback) {
  const source = new $Oe();
  const thenable = callback(source.token);
  const promise = new Promise((resolve, reject) => {
    const subscription = source.token.onCancellationRequested(() => {
      subscription.dispose();
      reject(new $fb());
    });
    Promise.resolve(thenable).then((value) => {
      subscription.dispose();
      source.dispose();
      resolve(value);
    }, (err) => {
      subscription.dispose();
      source.dispose();
      reject(err);
    });
  });
  return new class {
    cancel() {
      source.cancel();
      source.dispose();
    }
    then(resolve, reject) {
      return promise.then(resolve, reject);
    }
    catch(reject) {
      return this.then(void 0, reject);
    }
    finally(onfinally) {
      return promise.finally(onfinally);
    }
  }();
}
var timeoutDeferred = (timeout, fn) => {
  let scheduled = true;
  const handle = setTimeout(() => {
    scheduled = false;
    fn();
  }, timeout);
  return {
    isTriggered: () => scheduled,
    dispose: () => {
      clearTimeout(handle);
      scheduled = false;
    }
  };
};
var microtaskDeferred = (fn) => {
  let scheduled = true;
  queueMicrotask(() => {
    if (scheduled) {
      scheduled = false;
      fn();
    }
  });
  return {
    isTriggered: () => scheduled,
    dispose: () => {
      scheduled = false;
    }
  };
};
var $Uh = class {
  constructor(defaultDelay) {
    this.defaultDelay = defaultDelay;
    this.a = null;
    this.b = null;
    this.d = null;
    this.f = null;
    this.g = null;
  }
  trigger(task, delay = this.defaultDelay) {
    this.g = task;
    this.h();
    if (!this.b) {
      this.b = new Promise((resolve, reject) => {
        this.d = resolve;
        this.f = reject;
      }).then(() => {
        this.b = null;
        this.d = null;
        if (this.g) {
          const task2 = this.g;
          this.g = null;
          return task2();
        }
        return void 0;
      });
    }
    const fn = () => {
      this.a = null;
      this.d?.(null);
    };
    this.a = delay === $xe ? microtaskDeferred(fn) : timeoutDeferred(delay, fn);
    return this.b;
  }
  isTriggered() {
    return !!this.a?.isTriggered();
  }
  cancel() {
    this.h();
    if (this.b) {
      this.f?.(new $fb());
      this.b = null;
    }
  }
  h() {
    this.a?.dispose();
    this.a = null;
  }
  dispose() {
    this.cancel();
  }
};
var $0h = class {
  constructor(runner, delay) {
    this.b = -1;
    this.a = runner;
    this.d = delay;
    this.f = this.g.bind(this);
  }
  /**
   * Dispose RunOnceScheduler
   */
  dispose() {
    this.cancel();
    this.a = null;
  }
  /**
   * Cancel current scheduled runner (if any).
   */
  cancel() {
    if (this.isScheduled()) {
      clearTimeout(this.b);
      this.b = -1;
    }
  }
  /**
   * Cancel previous runner (if any) & schedule a new runner.
   */
  schedule(delay = this.d) {
    this.cancel();
    this.b = setTimeout(this.f, delay);
  }
  get delay() {
    return this.d;
  }
  set delay(value) {
    this.d = value;
  }
  /**
   * Returns true if scheduled.
   */
  isScheduled() {
    return this.b !== -1;
  }
  flush() {
    if (this.isScheduled()) {
      this.cancel();
      this.h();
    }
  }
  g() {
    this.b = -1;
    if (this.a) {
      this.h();
    }
  }
  h() {
    this.a?.();
  }
};
var $bi;
var $ci;
(function() {
  if (typeof globalThis.requestIdleCallback !== "function" || typeof globalThis.cancelIdleCallback !== "function") {
    $ci = (_targetWindow, runner) => {
      $E(() => {
        if (disposed) {
          return;
        }
        const end = Date.now() + 15;
        const deadline = {
          didTimeout: true,
          timeRemaining() {
            return Math.max(0, end - Date.now());
          }
        };
        runner(Object.freeze(deadline));
      });
      let disposed = false;
      return {
        dispose() {
          if (disposed) {
            return;
          }
          disposed = true;
        }
      };
    };
  } else {
    $ci = (targetWindow, runner, timeout) => {
      const handle = targetWindow.requestIdleCallback(runner, typeof timeout === "number" ? { timeout } : void 0);
      let disposed = false;
      return {
        dispose() {
          if (disposed) {
            return;
          }
          disposed = true;
          targetWindow.cancelIdleCallback(handle);
        }
      };
    };
  }
  $bi = (runner) => $ci(globalThis, runner);
})();
var $di = class {
  constructor(targetWindow, executor) {
    this.g = false;
    this.d = () => {
      try {
        this.j = executor();
      } catch (err) {
        this.l = err;
      } finally {
        this.g = true;
      }
    };
    this.f = $ci(targetWindow, () => this.d());
  }
  dispose() {
    this.f.dispose();
  }
  get value() {
    if (!this.g) {
      this.f.dispose();
      this.d();
    }
    if (this.l) {
      throw this.l;
    }
    return this.j;
  }
  get isInitialized() {
    return this.g;
  }
};
var $ei = class extends $di {
  constructor(executor) {
    super(globalThis, executor);
  }
};
var DeferredOutcome;
(function(DeferredOutcome2) {
  DeferredOutcome2[DeferredOutcome2["Resolved"] = 0] = "Resolved";
  DeferredOutcome2[DeferredOutcome2["Rejected"] = 1] = "Rejected";
})(DeferredOutcome || (DeferredOutcome = {}));
var Promises;
(function(Promises2) {
  async function settled(promises) {
    let firstError = void 0;
    const result = await Promise.all(promises.map((promise) => promise.then((value) => value, (error) => {
      if (!firstError) {
        firstError = error;
      }
      return void 0;
    })));
    if (typeof firstError !== "undefined") {
      throw firstError;
    }
    return result;
  }
  Promises2.settled = settled;
  function withAsyncBody(bodyFn) {
    return new Promise(async (resolve, reject) => {
      try {
        await bodyFn(resolve, reject);
      } catch (error) {
        reject(error);
      }
    });
  }
  Promises2.withAsyncBody = withAsyncBody;
})(Promises || (Promises = {}));
var AsyncIterableSourceState;
(function(AsyncIterableSourceState2) {
  AsyncIterableSourceState2[AsyncIterableSourceState2["Initial"] = 0] = "Initial";
  AsyncIterableSourceState2[AsyncIterableSourceState2["DoneOK"] = 1] = "DoneOK";
  AsyncIterableSourceState2[AsyncIterableSourceState2["DoneError"] = 2] = "DoneError";
})(AsyncIterableSourceState || (AsyncIterableSourceState = {}));
var $li = class _$li {
  static fromArray(items) {
    return new _$li((writer) => {
      writer.emitMany(items);
    });
  }
  static fromPromise(promise) {
    return new _$li(async (emitter) => {
      emitter.emitMany(await promise);
    });
  }
  static fromPromises(promises) {
    return new _$li(async (emitter) => {
      await Promise.all(promises.map(async (p) => emitter.emitOne(await p)));
    });
  }
  static merge(iterables) {
    return new _$li(async (emitter) => {
      await Promise.all(iterables.map(async (iterable) => {
        for await (const item of iterable) {
          emitter.emitOne(item);
        }
      }));
    });
  }
  static {
    this.EMPTY = _$li.fromArray([]);
  }
  constructor(executor, onReturn) {
    this.a = 0;
    this.b = [];
    this.d = null;
    this.f = onReturn;
    this.g = new $Ce();
    queueMicrotask(async () => {
      const writer = {
        emitOne: (item) => this.h(item),
        emitMany: (items) => this.j(items),
        reject: (error) => this.l(error)
      };
      try {
        await Promise.resolve(executor(writer));
        this.k();
      } catch (err) {
        this.l(err);
      } finally {
        writer.emitOne = void 0;
        writer.emitMany = void 0;
        writer.reject = void 0;
      }
    });
  }
  [Symbol.asyncIterator]() {
    let i = 0;
    return {
      next: async () => {
        do {
          if (this.a === 2) {
            throw this.d;
          }
          if (i < this.b.length) {
            return { done: false, value: this.b[i++] };
          }
          if (this.a === 1) {
            return { done: true, value: void 0 };
          }
          await Event.toPromise(this.g.event);
        } while (true);
      },
      return: async () => {
        this.f?.();
        return { done: true, value: void 0 };
      }
    };
  }
  static map(iterable, mapFn) {
    return new _$li(async (emitter) => {
      for await (const item of iterable) {
        emitter.emitOne(mapFn(item));
      }
    });
  }
  map(mapFn) {
    return _$li.map(this, mapFn);
  }
  static filter(iterable, filterFn) {
    return new _$li(async (emitter) => {
      for await (const item of iterable) {
        if (filterFn(item)) {
          emitter.emitOne(item);
        }
      }
    });
  }
  filter(filterFn) {
    return _$li.filter(this, filterFn);
  }
  static coalesce(iterable) {
    return _$li.filter(iterable, (item) => !!item);
  }
  coalesce() {
    return _$li.coalesce(this);
  }
  static async toPromise(iterable) {
    const result = [];
    for await (const item of iterable) {
      result.push(item);
    }
    return result;
  }
  toPromise() {
    return _$li.toPromise(this);
  }
  /**
   * The value will be appended at the end.
   *
   * **NOTE** If `resolve()` or `reject()` have already been called, this method has no effect.
   */
  h(value) {
    if (this.a !== 0) {
      return;
    }
    this.b.push(value);
    this.g.fire();
  }
  /**
   * The values will be appended at the end.
   *
   * **NOTE** If `resolve()` or `reject()` have already been called, this method has no effect.
   */
  j(values) {
    if (this.a !== 0) {
      return;
    }
    this.b = this.b.concat(values);
    this.g.fire();
  }
  /**
   * Calling `resolve()` will mark the result array as complete.
   *
   * **NOTE** `resolve()` must be called, otherwise all consumers of this iterable will hang indefinitely, similar to a non-resolved promise.
   * **NOTE** If `resolve()` or `reject()` have already been called, this method has no effect.
   */
  k() {
    if (this.a !== 0) {
      return;
    }
    this.a = 1;
    this.g.fire();
  }
  /**
   * Writing an error will permanently invalidate this iterable.
   * The current users will receive an error thrown, as will all future users.
   *
   * **NOTE** If `resolve()` or `reject()` have already been called, this method has no effect.
   */
  l(error) {
    if (this.a !== 0) {
      return;
    }
    this.a = 2;
    this.d = error;
    this.g.fire();
  }
};

// out-build/vs/base/browser/dompurify/dompurify.js
var {
  entries,
  setPrototypeOf,
  isFrozen,
  getPrototypeOf,
  getOwnPropertyDescriptor
} = Object;
var {
  freeze,
  seal,
  create
} = Object;
var {
  apply,
  construct
} = typeof Reflect !== "undefined" && Reflect;
if (!apply) {
  apply = function apply2(fun, thisValue, args) {
    return fun.apply(thisValue, args);
  };
}
if (!freeze) {
  freeze = function freeze2(x) {
    return x;
  };
}
if (!seal) {
  seal = function seal2(x) {
    return x;
  };
}
if (!construct) {
  construct = function construct2(Func, args) {
    return new Func(...args);
  };
}
var arrayForEach = unapply(Array.prototype.forEach);
var arrayPop = unapply(Array.prototype.pop);
var arrayPush = unapply(Array.prototype.push);
var stringToLowerCase = unapply(String.prototype.toLowerCase);
var stringToString = unapply(String.prototype.toString);
var stringMatch = unapply(String.prototype.match);
var stringReplace = unapply(String.prototype.replace);
var stringIndexOf = unapply(String.prototype.indexOf);
var stringTrim = unapply(String.prototype.trim);
var regExpTest = unapply(RegExp.prototype.test);
var typeErrorCreate = unconstruct(TypeError);
function unapply(func) {
  return function(thisArg) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    return apply(func, thisArg, args);
  };
}
function unconstruct(func) {
  return function() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    return construct(func, args);
  };
}
function addToSet(set, array, transformCaseFunc) {
  var _transformCaseFunc;
  transformCaseFunc = (_transformCaseFunc = transformCaseFunc) !== null && _transformCaseFunc !== void 0 ? _transformCaseFunc : stringToLowerCase;
  if (setPrototypeOf) {
    setPrototypeOf(set, null);
  }
  let l = array.length;
  while (l--) {
    let element = array[l];
    if (typeof element === "string") {
      const lcElement = transformCaseFunc(element);
      if (lcElement !== element) {
        if (!isFrozen(array)) {
          array[l] = lcElement;
        }
        element = lcElement;
      }
    }
    set[element] = true;
  }
  return set;
}
function clone(object) {
  const newObject = create(null);
  for (const [property, value] of entries(object)) {
    newObject[property] = value;
  }
  return newObject;
}
function lookupGetter(object, prop) {
  while (object !== null) {
    const desc = getOwnPropertyDescriptor(object, prop);
    if (desc) {
      if (desc.get) {
        return unapply(desc.get);
      }
      if (typeof desc.value === "function") {
        return unapply(desc.value);
      }
    }
    object = getPrototypeOf(object);
  }
  function fallbackValue(element) {
    console.warn("fallback value for", element);
    return null;
  }
  return fallbackValue;
}
var html$1 = freeze(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]);
var svg$1 = freeze(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]);
var svgFilters = freeze(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]);
var svgDisallowed = freeze(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]);
var mathMl$1 = freeze(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]);
var mathMlDisallowed = freeze(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]);
var text = freeze(["#text"]);
var html = freeze(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]);
var svg = freeze(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]);
var mathMl = freeze(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]);
var xml = freeze(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]);
var MUSTACHE_EXPR = seal(/\{\{[\w\W]*|[\w\W]*\}\}/gm);
var ERB_EXPR = seal(/<%[\w\W]*|[\w\W]*%>/gm);
var TMPLIT_EXPR = seal(/\${[\w\W]*}/gm);
var DATA_ATTR = seal(/^data-[\-\w.\u00B7-\uFFFF]/);
var ARIA_ATTR = seal(/^aria-[\-\w]+$/);
var IS_ALLOWED_URI = seal(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
);
var IS_SCRIPT_OR_DATA = seal(/^(?:\w+script|data):/i);
var ATTR_WHITESPACE = seal(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
);
var DOCTYPE_NAME = seal(/^html$/i);
var EXPRESSIONS = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  MUSTACHE_EXPR,
  ERB_EXPR,
  TMPLIT_EXPR,
  DATA_ATTR,
  ARIA_ATTR,
  IS_ALLOWED_URI,
  IS_SCRIPT_OR_DATA,
  ATTR_WHITESPACE,
  DOCTYPE_NAME
});
var getGlobal = () => typeof window === "undefined" ? null : window;
var _createTrustedTypesPolicy = function _createTrustedTypesPolicy2(trustedTypes, purifyHostElement) {
  if (typeof trustedTypes !== "object" || typeof trustedTypes.createPolicy !== "function") {
    return null;
  }
  let suffix = null;
  const ATTR_NAME = "data-tt-policy-suffix";
  if (purifyHostElement && purifyHostElement.hasAttribute(ATTR_NAME)) {
    suffix = purifyHostElement.getAttribute(ATTR_NAME);
  }
  const policyName = "dompurify" + (suffix ? "#" + suffix : "");
  try {
    return trustedTypes.createPolicy(policyName, {
      createHTML(html2) {
        return html2;
      },
      createScriptURL(scriptUrl) {
        return scriptUrl;
      }
    });
  } catch (_) {
    console.warn("TrustedTypes policy " + policyName + " could not be created.");
    return null;
  }
};
function createDOMPurify() {
  let window2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : getGlobal();
  const DOMPurify = (root) => createDOMPurify(root);
  DOMPurify.version = "3.0.5";
  DOMPurify.removed = [];
  if (!window2 || !window2.document || window2.document.nodeType !== 9) {
    DOMPurify.isSupported = false;
    return DOMPurify;
  }
  const originalDocument = window2.document;
  const currentScript = originalDocument.currentScript;
  let {
    document: document2
  } = window2;
  const {
    DocumentFragment,
    HTMLTemplateElement,
    Node: Node3,
    Element,
    NodeFilter,
    NamedNodeMap = window2.NamedNodeMap || window2.MozNamedAttrMap,
    HTMLFormElement,
    DOMParser: DOMParser2,
    trustedTypes
  } = window2;
  const ElementPrototype = Element.prototype;
  const cloneNode = lookupGetter(ElementPrototype, "cloneNode");
  const getNextSibling = lookupGetter(ElementPrototype, "nextSibling");
  const getChildNodes = lookupGetter(ElementPrototype, "childNodes");
  const getParentNode = lookupGetter(ElementPrototype, "parentNode");
  if (typeof HTMLTemplateElement === "function") {
    const template = document2.createElement("template");
    if (template.content && template.content.ownerDocument) {
      document2 = template.content.ownerDocument;
    }
  }
  let trustedTypesPolicy;
  let emptyHTML = "";
  const {
    implementation,
    createNodeIterator,
    createDocumentFragment,
    getElementsByTagName
  } = document2;
  const {
    importNode
  } = originalDocument;
  let hooks = {};
  DOMPurify.isSupported = typeof entries === "function" && typeof getParentNode === "function" && implementation && implementation.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: MUSTACHE_EXPR2,
    ERB_EXPR: ERB_EXPR2,
    TMPLIT_EXPR: TMPLIT_EXPR2,
    DATA_ATTR: DATA_ATTR2,
    ARIA_ATTR: ARIA_ATTR2,
    IS_SCRIPT_OR_DATA: IS_SCRIPT_OR_DATA2,
    ATTR_WHITESPACE: ATTR_WHITESPACE2
  } = EXPRESSIONS;
  let {
    IS_ALLOWED_URI: IS_ALLOWED_URI$1
  } = EXPRESSIONS;
  let ALLOWED_TAGS = null;
  const DEFAULT_ALLOWED_TAGS = addToSet({}, [...html$1, ...svg$1, ...svgFilters, ...mathMl$1, ...text]);
  let ALLOWED_ATTR = null;
  const DEFAULT_ALLOWED_ATTR = addToSet({}, [...html, ...svg, ...mathMl, ...xml]);
  let CUSTOM_ELEMENT_HANDLING = Object.seal(Object.create(null, {
    tagNameCheck: {
      writable: true,
      configurable: false,
      enumerable: true,
      value: null
    },
    attributeNameCheck: {
      writable: true,
      configurable: false,
      enumerable: true,
      value: null
    },
    allowCustomizedBuiltInElements: {
      writable: true,
      configurable: false,
      enumerable: true,
      value: false
    }
  }));
  let FORBID_TAGS = null;
  let FORBID_ATTR = null;
  let ALLOW_ARIA_ATTR = true;
  let ALLOW_DATA_ATTR = true;
  let ALLOW_UNKNOWN_PROTOCOLS = false;
  let ALLOW_SELF_CLOSE_IN_ATTR = true;
  let SAFE_FOR_TEMPLATES = false;
  let WHOLE_DOCUMENT = false;
  let SET_CONFIG = false;
  let FORCE_BODY = false;
  let RETURN_DOM = false;
  let RETURN_DOM_FRAGMENT = false;
  let RETURN_TRUSTED_TYPE = false;
  let SANITIZE_DOM = true;
  let SANITIZE_NAMED_PROPS = false;
  const SANITIZE_NAMED_PROPS_PREFIX = "user-content-";
  let KEEP_CONTENT = true;
  let IN_PLACE = false;
  let USE_PROFILES = {};
  let FORBID_CONTENTS = null;
  const DEFAULT_FORBID_CONTENTS = addToSet({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let DATA_URI_TAGS = null;
  const DEFAULT_DATA_URI_TAGS = addToSet({}, ["audio", "video", "img", "source", "image", "track"]);
  let URI_SAFE_ATTRIBUTES = null;
  const DEFAULT_URI_SAFE_ATTRIBUTES = addToSet({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]);
  const MATHML_NAMESPACE = "http://www.w3.org/1998/Math/MathML";
  const SVG_NAMESPACE = "http://www.w3.org/2000/svg";
  const HTML_NAMESPACE = "http://www.w3.org/1999/xhtml";
  let NAMESPACE = HTML_NAMESPACE;
  let IS_EMPTY_INPUT = false;
  let ALLOWED_NAMESPACES = null;
  const DEFAULT_ALLOWED_NAMESPACES = addToSet({}, [MATHML_NAMESPACE, SVG_NAMESPACE, HTML_NAMESPACE], stringToString);
  let PARSER_MEDIA_TYPE;
  const SUPPORTED_PARSER_MEDIA_TYPES = ["application/xhtml+xml", "text/html"];
  const DEFAULT_PARSER_MEDIA_TYPE = "text/html";
  let transformCaseFunc;
  let CONFIG = null;
  const formElement = document2.createElement("form");
  const isRegexOrFunction = function isRegexOrFunction2(testValue) {
    return testValue instanceof RegExp || testValue instanceof Function;
  };
  const _parseConfig = function _parseConfig2(cfg) {
    if (CONFIG && CONFIG === cfg) {
      return;
    }
    if (!cfg || typeof cfg !== "object") {
      cfg = {};
    }
    cfg = clone(cfg);
    PARSER_MEDIA_TYPE = // eslint-disable-next-line unicorn/prefer-includes
    SUPPORTED_PARSER_MEDIA_TYPES.indexOf(cfg.PARSER_MEDIA_TYPE) === -1 ? PARSER_MEDIA_TYPE = DEFAULT_PARSER_MEDIA_TYPE : PARSER_MEDIA_TYPE = cfg.PARSER_MEDIA_TYPE;
    transformCaseFunc = PARSER_MEDIA_TYPE === "application/xhtml+xml" ? stringToString : stringToLowerCase;
    ALLOWED_TAGS = "ALLOWED_TAGS" in cfg ? addToSet({}, cfg.ALLOWED_TAGS, transformCaseFunc) : DEFAULT_ALLOWED_TAGS;
    ALLOWED_ATTR = "ALLOWED_ATTR" in cfg ? addToSet({}, cfg.ALLOWED_ATTR, transformCaseFunc) : DEFAULT_ALLOWED_ATTR;
    ALLOWED_NAMESPACES = "ALLOWED_NAMESPACES" in cfg ? addToSet({}, cfg.ALLOWED_NAMESPACES, stringToString) : DEFAULT_ALLOWED_NAMESPACES;
    URI_SAFE_ATTRIBUTES = "ADD_URI_SAFE_ATTR" in cfg ? addToSet(
      clone(DEFAULT_URI_SAFE_ATTRIBUTES),
      // eslint-disable-line indent
      cfg.ADD_URI_SAFE_ATTR,
      // eslint-disable-line indent
      transformCaseFunc
      // eslint-disable-line indent
    ) : DEFAULT_URI_SAFE_ATTRIBUTES;
    DATA_URI_TAGS = "ADD_DATA_URI_TAGS" in cfg ? addToSet(
      clone(DEFAULT_DATA_URI_TAGS),
      // eslint-disable-line indent
      cfg.ADD_DATA_URI_TAGS,
      // eslint-disable-line indent
      transformCaseFunc
      // eslint-disable-line indent
    ) : DEFAULT_DATA_URI_TAGS;
    FORBID_CONTENTS = "FORBID_CONTENTS" in cfg ? addToSet({}, cfg.FORBID_CONTENTS, transformCaseFunc) : DEFAULT_FORBID_CONTENTS;
    FORBID_TAGS = "FORBID_TAGS" in cfg ? addToSet({}, cfg.FORBID_TAGS, transformCaseFunc) : {};
    FORBID_ATTR = "FORBID_ATTR" in cfg ? addToSet({}, cfg.FORBID_ATTR, transformCaseFunc) : {};
    USE_PROFILES = "USE_PROFILES" in cfg ? cfg.USE_PROFILES : false;
    ALLOW_ARIA_ATTR = cfg.ALLOW_ARIA_ATTR !== false;
    ALLOW_DATA_ATTR = cfg.ALLOW_DATA_ATTR !== false;
    ALLOW_UNKNOWN_PROTOCOLS = cfg.ALLOW_UNKNOWN_PROTOCOLS || false;
    ALLOW_SELF_CLOSE_IN_ATTR = cfg.ALLOW_SELF_CLOSE_IN_ATTR !== false;
    SAFE_FOR_TEMPLATES = cfg.SAFE_FOR_TEMPLATES || false;
    WHOLE_DOCUMENT = cfg.WHOLE_DOCUMENT || false;
    RETURN_DOM = cfg.RETURN_DOM || false;
    RETURN_DOM_FRAGMENT = cfg.RETURN_DOM_FRAGMENT || false;
    RETURN_TRUSTED_TYPE = cfg.RETURN_TRUSTED_TYPE || false;
    FORCE_BODY = cfg.FORCE_BODY || false;
    SANITIZE_DOM = cfg.SANITIZE_DOM !== false;
    SANITIZE_NAMED_PROPS = cfg.SANITIZE_NAMED_PROPS || false;
    KEEP_CONTENT = cfg.KEEP_CONTENT !== false;
    IN_PLACE = cfg.IN_PLACE || false;
    IS_ALLOWED_URI$1 = cfg.ALLOWED_URI_REGEXP || IS_ALLOWED_URI;
    NAMESPACE = cfg.NAMESPACE || HTML_NAMESPACE;
    CUSTOM_ELEMENT_HANDLING = cfg.CUSTOM_ELEMENT_HANDLING || {};
    if (cfg.CUSTOM_ELEMENT_HANDLING && isRegexOrFunction(cfg.CUSTOM_ELEMENT_HANDLING.tagNameCheck)) {
      CUSTOM_ELEMENT_HANDLING.tagNameCheck = cfg.CUSTOM_ELEMENT_HANDLING.tagNameCheck;
    }
    if (cfg.CUSTOM_ELEMENT_HANDLING && isRegexOrFunction(cfg.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)) {
      CUSTOM_ELEMENT_HANDLING.attributeNameCheck = cfg.CUSTOM_ELEMENT_HANDLING.attributeNameCheck;
    }
    if (cfg.CUSTOM_ELEMENT_HANDLING && typeof cfg.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements === "boolean") {
      CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements = cfg.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements;
    }
    if (SAFE_FOR_TEMPLATES) {
      ALLOW_DATA_ATTR = false;
    }
    if (RETURN_DOM_FRAGMENT) {
      RETURN_DOM = true;
    }
    if (USE_PROFILES) {
      ALLOWED_TAGS = addToSet({}, [...text]);
      ALLOWED_ATTR = [];
      if (USE_PROFILES.html === true) {
        addToSet(ALLOWED_TAGS, html$1);
        addToSet(ALLOWED_ATTR, html);
      }
      if (USE_PROFILES.svg === true) {
        addToSet(ALLOWED_TAGS, svg$1);
        addToSet(ALLOWED_ATTR, svg);
        addToSet(ALLOWED_ATTR, xml);
      }
      if (USE_PROFILES.svgFilters === true) {
        addToSet(ALLOWED_TAGS, svgFilters);
        addToSet(ALLOWED_ATTR, svg);
        addToSet(ALLOWED_ATTR, xml);
      }
      if (USE_PROFILES.mathMl === true) {
        addToSet(ALLOWED_TAGS, mathMl$1);
        addToSet(ALLOWED_ATTR, mathMl);
        addToSet(ALLOWED_ATTR, xml);
      }
    }
    if (cfg.ADD_TAGS) {
      if (ALLOWED_TAGS === DEFAULT_ALLOWED_TAGS) {
        ALLOWED_TAGS = clone(ALLOWED_TAGS);
      }
      addToSet(ALLOWED_TAGS, cfg.ADD_TAGS, transformCaseFunc);
    }
    if (cfg.ADD_ATTR) {
      if (ALLOWED_ATTR === DEFAULT_ALLOWED_ATTR) {
        ALLOWED_ATTR = clone(ALLOWED_ATTR);
      }
      addToSet(ALLOWED_ATTR, cfg.ADD_ATTR, transformCaseFunc);
    }
    if (cfg.ADD_URI_SAFE_ATTR) {
      addToSet(URI_SAFE_ATTRIBUTES, cfg.ADD_URI_SAFE_ATTR, transformCaseFunc);
    }
    if (cfg.FORBID_CONTENTS) {
      if (FORBID_CONTENTS === DEFAULT_FORBID_CONTENTS) {
        FORBID_CONTENTS = clone(FORBID_CONTENTS);
      }
      addToSet(FORBID_CONTENTS, cfg.FORBID_CONTENTS, transformCaseFunc);
    }
    if (KEEP_CONTENT) {
      ALLOWED_TAGS["#text"] = true;
    }
    if (WHOLE_DOCUMENT) {
      addToSet(ALLOWED_TAGS, ["html", "head", "body"]);
    }
    if (ALLOWED_TAGS.table) {
      addToSet(ALLOWED_TAGS, ["tbody"]);
      delete FORBID_TAGS.tbody;
    }
    if (cfg.TRUSTED_TYPES_POLICY) {
      if (typeof cfg.TRUSTED_TYPES_POLICY.createHTML !== "function") {
        throw typeErrorCreate('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      }
      if (typeof cfg.TRUSTED_TYPES_POLICY.createScriptURL !== "function") {
        throw typeErrorCreate('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      }
      trustedTypesPolicy = cfg.TRUSTED_TYPES_POLICY;
      emptyHTML = trustedTypesPolicy.createHTML("");
    } else {
      if (trustedTypesPolicy === void 0) {
        trustedTypesPolicy = _createTrustedTypesPolicy(trustedTypes, currentScript);
      }
      if (trustedTypesPolicy !== null && typeof emptyHTML === "string") {
        emptyHTML = trustedTypesPolicy.createHTML("");
      }
    }
    if (freeze) {
      freeze(cfg);
    }
    CONFIG = cfg;
  };
  const MATHML_TEXT_INTEGRATION_POINTS = addToSet({}, ["mi", "mo", "mn", "ms", "mtext"]);
  const HTML_INTEGRATION_POINTS = addToSet({}, ["foreignobject", "desc", "title", "annotation-xml"]);
  const COMMON_SVG_AND_HTML_ELEMENTS = addToSet({}, ["title", "style", "font", "a", "script"]);
  const ALL_SVG_TAGS = addToSet({}, svg$1);
  addToSet(ALL_SVG_TAGS, svgFilters);
  addToSet(ALL_SVG_TAGS, svgDisallowed);
  const ALL_MATHML_TAGS = addToSet({}, mathMl$1);
  addToSet(ALL_MATHML_TAGS, mathMlDisallowed);
  const _checkValidNamespace = function _checkValidNamespace2(element) {
    let parent = getParentNode(element);
    if (!parent || !parent.tagName) {
      parent = {
        namespaceURI: NAMESPACE,
        tagName: "template"
      };
    }
    const tagName = stringToLowerCase(element.tagName);
    const parentTagName = stringToLowerCase(parent.tagName);
    if (!ALLOWED_NAMESPACES[element.namespaceURI]) {
      return false;
    }
    if (element.namespaceURI === SVG_NAMESPACE) {
      if (parent.namespaceURI === HTML_NAMESPACE) {
        return tagName === "svg";
      }
      if (parent.namespaceURI === MATHML_NAMESPACE) {
        return tagName === "svg" && (parentTagName === "annotation-xml" || MATHML_TEXT_INTEGRATION_POINTS[parentTagName]);
      }
      return Boolean(ALL_SVG_TAGS[tagName]);
    }
    if (element.namespaceURI === MATHML_NAMESPACE) {
      if (parent.namespaceURI === HTML_NAMESPACE) {
        return tagName === "math";
      }
      if (parent.namespaceURI === SVG_NAMESPACE) {
        return tagName === "math" && HTML_INTEGRATION_POINTS[parentTagName];
      }
      return Boolean(ALL_MATHML_TAGS[tagName]);
    }
    if (element.namespaceURI === HTML_NAMESPACE) {
      if (parent.namespaceURI === SVG_NAMESPACE && !HTML_INTEGRATION_POINTS[parentTagName]) {
        return false;
      }
      if (parent.namespaceURI === MATHML_NAMESPACE && !MATHML_TEXT_INTEGRATION_POINTS[parentTagName]) {
        return false;
      }
      return !ALL_MATHML_TAGS[tagName] && (COMMON_SVG_AND_HTML_ELEMENTS[tagName] || !ALL_SVG_TAGS[tagName]);
    }
    if (PARSER_MEDIA_TYPE === "application/xhtml+xml" && ALLOWED_NAMESPACES[element.namespaceURI]) {
      return true;
    }
    return false;
  };
  const _forceRemove = function _forceRemove2(node) {
    arrayPush(DOMPurify.removed, {
      element: node
    });
    try {
      node.parentNode.removeChild(node);
    } catch (_) {
      node.remove();
    }
  };
  const _removeAttribute = function _removeAttribute2(name, node) {
    try {
      arrayPush(DOMPurify.removed, {
        attribute: node.getAttributeNode(name),
        from: node
      });
    } catch (_) {
      arrayPush(DOMPurify.removed, {
        attribute: null,
        from: node
      });
    }
    node.removeAttribute(name);
    if (name === "is" && !ALLOWED_ATTR[name]) {
      if (RETURN_DOM || RETURN_DOM_FRAGMENT) {
        try {
          _forceRemove(node);
        } catch (_) {
        }
      } else {
        try {
          node.setAttribute(name, "");
        } catch (_) {
        }
      }
    }
  };
  const _initDocument = function _initDocument2(dirty) {
    let doc;
    let leadingWhitespace;
    if (FORCE_BODY) {
      dirty = "<remove></remove>" + dirty;
    } else {
      const matches = stringMatch(dirty, /^[\r\n\t ]+/);
      leadingWhitespace = matches && matches[0];
    }
    if (PARSER_MEDIA_TYPE === "application/xhtml+xml" && NAMESPACE === HTML_NAMESPACE) {
      dirty = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + dirty + "</body></html>";
    }
    const dirtyPayload = trustedTypesPolicy ? trustedTypesPolicy.createHTML(dirty) : dirty;
    if (NAMESPACE === HTML_NAMESPACE) {
      try {
        doc = new DOMParser2().parseFromString(dirtyPayload, PARSER_MEDIA_TYPE);
      } catch (_) {
      }
    }
    if (!doc || !doc.documentElement) {
      doc = implementation.createDocument(NAMESPACE, "template", null);
      try {
        doc.documentElement.innerHTML = IS_EMPTY_INPUT ? emptyHTML : dirtyPayload;
      } catch (_) {
      }
    }
    const body = doc.body || doc.documentElement;
    if (dirty && leadingWhitespace) {
      body.insertBefore(document2.createTextNode(leadingWhitespace), body.childNodes[0] || null);
    }
    if (NAMESPACE === HTML_NAMESPACE) {
      return getElementsByTagName.call(doc, WHOLE_DOCUMENT ? "html" : "body")[0];
    }
    return WHOLE_DOCUMENT ? doc.documentElement : body;
  };
  const _createIterator = function _createIterator2(root) {
    return createNodeIterator.call(
      root.ownerDocument || root,
      root,
      // eslint-disable-next-line no-bitwise
      NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_TEXT,
      null,
      false
    );
  };
  const _isClobbered = function _isClobbered2(elm) {
    return elm instanceof HTMLFormElement && (typeof elm.nodeName !== "string" || typeof elm.textContent !== "string" || typeof elm.removeChild !== "function" || !(elm.attributes instanceof NamedNodeMap) || typeof elm.removeAttribute !== "function" || typeof elm.setAttribute !== "function" || typeof elm.namespaceURI !== "string" || typeof elm.insertBefore !== "function" || typeof elm.hasChildNodes !== "function");
  };
  const _isNode = function _isNode2(object) {
    return typeof Node3 === "object" ? object instanceof Node3 : object && typeof object === "object" && typeof object.nodeType === "number" && typeof object.nodeName === "string";
  };
  const _executeHook = function _executeHook2(entryPoint, currentNode, data) {
    if (!hooks[entryPoint]) {
      return;
    }
    arrayForEach(hooks[entryPoint], (hook) => {
      hook.call(DOMPurify, currentNode, data, CONFIG);
    });
  };
  const _sanitizeElements = function _sanitizeElements2(currentNode) {
    let content;
    _executeHook("beforeSanitizeElements", currentNode, null);
    if (_isClobbered(currentNode)) {
      _forceRemove(currentNode);
      return true;
    }
    const tagName = transformCaseFunc(currentNode.nodeName);
    _executeHook("uponSanitizeElement", currentNode, {
      tagName,
      allowedTags: ALLOWED_TAGS
    });
    if (currentNode.hasChildNodes() && !_isNode(currentNode.firstElementChild) && (!_isNode(currentNode.content) || !_isNode(currentNode.content.firstElementChild)) && regExpTest(/<[/\w]/g, currentNode.innerHTML) && regExpTest(/<[/\w]/g, currentNode.textContent)) {
      _forceRemove(currentNode);
      return true;
    }
    if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
      if (!FORBID_TAGS[tagName] && _basicCustomElementTest(tagName)) {
        if (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, tagName)) return false;
        if (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(tagName)) return false;
      }
      if (KEEP_CONTENT && !FORBID_CONTENTS[tagName]) {
        const parentNode = getParentNode(currentNode) || currentNode.parentNode;
        const childNodes = getChildNodes(currentNode) || currentNode.childNodes;
        if (childNodes && parentNode) {
          const childCount = childNodes.length;
          for (let i = childCount - 1; i >= 0; --i) {
            parentNode.insertBefore(cloneNode(childNodes[i], true), getNextSibling(currentNode));
          }
        }
      }
      _forceRemove(currentNode);
      return true;
    }
    if (currentNode instanceof Element && !_checkValidNamespace(currentNode)) {
      _forceRemove(currentNode);
      return true;
    }
    if ((tagName === "noscript" || tagName === "noembed" || tagName === "noframes") && regExpTest(/<\/no(script|embed|frames)/i, currentNode.innerHTML)) {
      _forceRemove(currentNode);
      return true;
    }
    if (SAFE_FOR_TEMPLATES && currentNode.nodeType === 3) {
      content = currentNode.textContent;
      content = stringReplace(content, MUSTACHE_EXPR2, " ");
      content = stringReplace(content, ERB_EXPR2, " ");
      content = stringReplace(content, TMPLIT_EXPR2, " ");
      if (currentNode.textContent !== content) {
        arrayPush(DOMPurify.removed, {
          element: currentNode.cloneNode()
        });
        currentNode.textContent = content;
      }
    }
    _executeHook("afterSanitizeElements", currentNode, null);
    return false;
  };
  const _isValidAttribute = function _isValidAttribute2(lcTag, lcName, value) {
    if (SANITIZE_DOM && (lcName === "id" || lcName === "name") && (value in document2 || value in formElement)) {
      return false;
    }
    if (ALLOW_DATA_ATTR && !FORBID_ATTR[lcName] && regExpTest(DATA_ATTR2, lcName)) ;
    else if (ALLOW_ARIA_ATTR && regExpTest(ARIA_ATTR2, lcName)) ;
    else if (!ALLOWED_ATTR[lcName] || FORBID_ATTR[lcName]) {
      if (
        // First condition does a very basic check if a) it's basically a valid custom element tagname AND
        // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
        // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
        _basicCustomElementTest(lcTag) && (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, lcTag) || CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(lcTag)) && (CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.attributeNameCheck, lcName) || CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.attributeNameCheck(lcName)) || // Alternative, second condition checks if it's an `is`-attribute, AND
        // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
        lcName === "is" && CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements && (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, value) || CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(value))
      ) ;
      else {
        return false;
      }
    } else if (URI_SAFE_ATTRIBUTES[lcName]) ;
    else if (regExpTest(IS_ALLOWED_URI$1, stringReplace(value, ATTR_WHITESPACE2, ""))) ;
    else if ((lcName === "src" || lcName === "xlink:href" || lcName === "href") && lcTag !== "script" && stringIndexOf(value, "data:") === 0 && DATA_URI_TAGS[lcTag]) ;
    else if (ALLOW_UNKNOWN_PROTOCOLS && !regExpTest(IS_SCRIPT_OR_DATA2, stringReplace(value, ATTR_WHITESPACE2, ""))) ;
    else if (value) {
      return false;
    } else ;
    return true;
  };
  const _basicCustomElementTest = function _basicCustomElementTest2(tagName) {
    return tagName.indexOf("-") > 0;
  };
  const _sanitizeAttributes = function _sanitizeAttributes2(currentNode) {
    let attr;
    let value;
    let lcName;
    let l;
    _executeHook("beforeSanitizeAttributes", currentNode, null);
    const {
      attributes
    } = currentNode;
    if (!attributes) {
      return;
    }
    const hookEvent = {
      attrName: "",
      attrValue: "",
      keepAttr: true,
      allowedAttributes: ALLOWED_ATTR
    };
    l = attributes.length;
    while (l--) {
      attr = attributes[l];
      const {
        name,
        namespaceURI
      } = attr;
      value = name === "value" ? attr.value : stringTrim(attr.value);
      lcName = transformCaseFunc(name);
      hookEvent.attrName = lcName;
      hookEvent.attrValue = value;
      hookEvent.keepAttr = true;
      hookEvent.forceKeepAttr = void 0;
      _executeHook("uponSanitizeAttribute", currentNode, hookEvent);
      value = hookEvent.attrValue;
      if (hookEvent.forceKeepAttr) {
        continue;
      }
      _removeAttribute(name, currentNode);
      if (!hookEvent.keepAttr) {
        continue;
      }
      if (!ALLOW_SELF_CLOSE_IN_ATTR && regExpTest(/\/>/i, value)) {
        _removeAttribute(name, currentNode);
        continue;
      }
      if (SAFE_FOR_TEMPLATES) {
        value = stringReplace(value, MUSTACHE_EXPR2, " ");
        value = stringReplace(value, ERB_EXPR2, " ");
        value = stringReplace(value, TMPLIT_EXPR2, " ");
      }
      const lcTag = transformCaseFunc(currentNode.nodeName);
      if (!_isValidAttribute(lcTag, lcName, value)) {
        continue;
      }
      if (SANITIZE_NAMED_PROPS && (lcName === "id" || lcName === "name")) {
        _removeAttribute(name, currentNode);
        value = SANITIZE_NAMED_PROPS_PREFIX + value;
      }
      if (trustedTypesPolicy && typeof trustedTypes === "object" && typeof trustedTypes.getAttributeType === "function") {
        if (namespaceURI) ;
        else {
          switch (trustedTypes.getAttributeType(lcTag, lcName)) {
            case "TrustedHTML": {
              value = trustedTypesPolicy.createHTML(value);
              break;
            }
            case "TrustedScriptURL": {
              value = trustedTypesPolicy.createScriptURL(value);
              break;
            }
          }
        }
      }
      try {
        if (namespaceURI) {
          currentNode.setAttributeNS(namespaceURI, name, value);
        } else {
          currentNode.setAttribute(name, value);
        }
        arrayPop(DOMPurify.removed);
      } catch (_) {
      }
    }
    _executeHook("afterSanitizeAttributes", currentNode, null);
  };
  const _sanitizeShadowDOM = function _sanitizeShadowDOM2(fragment) {
    let shadowNode;
    const shadowIterator = _createIterator(fragment);
    _executeHook("beforeSanitizeShadowDOM", fragment, null);
    while (shadowNode = shadowIterator.nextNode()) {
      _executeHook("uponSanitizeShadowNode", shadowNode, null);
      if (_sanitizeElements(shadowNode)) {
        continue;
      }
      if (shadowNode.content instanceof DocumentFragment) {
        _sanitizeShadowDOM2(shadowNode.content);
      }
      _sanitizeAttributes(shadowNode);
    }
    _executeHook("afterSanitizeShadowDOM", fragment, null);
  };
  DOMPurify.sanitize = function(dirty) {
    let cfg = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    let body;
    let importedNode;
    let currentNode;
    let returnNode;
    IS_EMPTY_INPUT = !dirty;
    if (IS_EMPTY_INPUT) {
      dirty = "<!-->";
    }
    if (typeof dirty !== "string" && !_isNode(dirty)) {
      if (typeof dirty.toString === "function") {
        dirty = dirty.toString();
        if (typeof dirty !== "string") {
          throw typeErrorCreate("dirty is not a string, aborting");
        }
      } else {
        throw typeErrorCreate("toString is not a function");
      }
    }
    if (!DOMPurify.isSupported) {
      return dirty;
    }
    if (!SET_CONFIG) {
      _parseConfig(cfg);
    }
    DOMPurify.removed = [];
    if (typeof dirty === "string") {
      IN_PLACE = false;
    }
    if (IN_PLACE) {
      if (dirty.nodeName) {
        const tagName = transformCaseFunc(dirty.nodeName);
        if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
          throw typeErrorCreate("root node is forbidden and cannot be sanitized in-place");
        }
      }
    } else if (dirty instanceof Node3) {
      body = _initDocument("<!---->");
      importedNode = body.ownerDocument.importNode(dirty, true);
      if (importedNode.nodeType === 1 && importedNode.nodeName === "BODY") {
        body = importedNode;
      } else if (importedNode.nodeName === "HTML") {
        body = importedNode;
      } else {
        body.appendChild(importedNode);
      }
    } else {
      if (!RETURN_DOM && !SAFE_FOR_TEMPLATES && !WHOLE_DOCUMENT && // eslint-disable-next-line unicorn/prefer-includes
      dirty.indexOf("<") === -1) {
        return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(dirty) : dirty;
      }
      body = _initDocument(dirty);
      if (!body) {
        return RETURN_DOM ? null : RETURN_TRUSTED_TYPE ? emptyHTML : "";
      }
    }
    if (body && FORCE_BODY) {
      _forceRemove(body.firstChild);
    }
    const nodeIterator = _createIterator(IN_PLACE ? dirty : body);
    while (currentNode = nodeIterator.nextNode()) {
      if (_sanitizeElements(currentNode)) {
        continue;
      }
      if (currentNode.content instanceof DocumentFragment) {
        _sanitizeShadowDOM(currentNode.content);
      }
      _sanitizeAttributes(currentNode);
    }
    if (IN_PLACE) {
      return dirty;
    }
    if (RETURN_DOM) {
      if (RETURN_DOM_FRAGMENT) {
        returnNode = createDocumentFragment.call(body.ownerDocument);
        while (body.firstChild) {
          returnNode.appendChild(body.firstChild);
        }
      } else {
        returnNode = body;
      }
      if (ALLOWED_ATTR.shadowroot || ALLOWED_ATTR.shadowrootmode) {
        returnNode = importNode.call(originalDocument, returnNode, true);
      }
      return returnNode;
    }
    let serializedHTML = WHOLE_DOCUMENT ? body.outerHTML : body.innerHTML;
    if (WHOLE_DOCUMENT && ALLOWED_TAGS["!doctype"] && body.ownerDocument && body.ownerDocument.doctype && body.ownerDocument.doctype.name && regExpTest(DOCTYPE_NAME, body.ownerDocument.doctype.name)) {
      serializedHTML = "<!DOCTYPE " + body.ownerDocument.doctype.name + ">\n" + serializedHTML;
    }
    if (SAFE_FOR_TEMPLATES) {
      serializedHTML = stringReplace(serializedHTML, MUSTACHE_EXPR2, " ");
      serializedHTML = stringReplace(serializedHTML, ERB_EXPR2, " ");
      serializedHTML = stringReplace(serializedHTML, TMPLIT_EXPR2, " ");
    }
    return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(serializedHTML) : serializedHTML;
  };
  DOMPurify.setConfig = function(cfg) {
    _parseConfig(cfg);
    SET_CONFIG = true;
  };
  DOMPurify.clearConfig = function() {
    CONFIG = null;
    SET_CONFIG = false;
  };
  DOMPurify.isValidAttribute = function(tag, attr, value) {
    if (!CONFIG) {
      _parseConfig({});
    }
    const lcTag = transformCaseFunc(tag);
    const lcName = transformCaseFunc(attr);
    return _isValidAttribute(lcTag, lcName, value);
  };
  DOMPurify.addHook = function(entryPoint, hookFunction) {
    if (typeof hookFunction !== "function") {
      return;
    }
    hooks[entryPoint] = hooks[entryPoint] || [];
    arrayPush(hooks[entryPoint], hookFunction);
  };
  DOMPurify.removeHook = function(entryPoint) {
    if (hooks[entryPoint]) {
      return arrayPop(hooks[entryPoint]);
    }
  };
  DOMPurify.removeHooks = function(entryPoint) {
    if (hooks[entryPoint]) {
      hooks[entryPoint] = [];
    }
  };
  DOMPurify.removeAllHooks = function() {
    hooks = {};
  };
  return DOMPurify;
}
var purify = createDOMPurify();
var version = purify.version;
var isSupported = purify.isSupported;
var sanitize = purify.sanitize;
var setConfig = purify.setConfig;
var clearConfig = purify.clearConfig;
var isValidAttribute = purify.isValidAttribute;
var addHook = purify.addHook;
var removeHook = purify.removeHook;
var removeHooks = purify.removeHooks;
var removeAllHooks = purify.removeAllHooks;

// out-build/vs/base/common/hash.js
function $Lj(obj) {
  return $Mj(obj, 0);
}
function $Mj(obj, hashVal) {
  switch (typeof obj) {
    case "object":
      if (obj === null) {
        return $Nj(349, hashVal);
      } else if (Array.isArray(obj)) {
        return arrayHash(obj, hashVal);
      }
      return objectHash(obj, hashVal);
    case "string":
      return $Oj(obj, hashVal);
    case "boolean":
      return booleanHash(obj, hashVal);
    case "number":
      return $Nj(obj, hashVal);
    case "undefined":
      return $Nj(937, hashVal);
    default:
      return $Nj(617, hashVal);
  }
}
function $Nj(val, initialHashVal) {
  return (initialHashVal << 5) - initialHashVal + val | 0;
}
function booleanHash(b, initialHashVal) {
  return $Nj(b ? 433 : 863, initialHashVal);
}
function $Oj(s, hashVal) {
  hashVal = $Nj(149417, hashVal);
  for (let i = 0, length = s.length; i < length; i++) {
    hashVal = $Nj(s.charCodeAt(i), hashVal);
  }
  return hashVal;
}
function arrayHash(arr, initialHashVal) {
  initialHashVal = $Nj(104579, initialHashVal);
  return arr.reduce((hashVal, item) => $Mj(item, hashVal), initialHashVal);
}
function objectHash(obj, initialHashVal) {
  initialHashVal = $Nj(181387, initialHashVal);
  return Object.keys(obj).sort().reduce((hashVal, key) => {
    hashVal = $Oj(key, hashVal);
    return $Mj(obj[key], hashVal);
  }, initialHashVal);
}
var SHA1Constant;
(function(SHA1Constant2) {
  SHA1Constant2[SHA1Constant2["BLOCK_SIZE"] = 64] = "BLOCK_SIZE";
  SHA1Constant2[SHA1Constant2["UNICODE_REPLACEMENT"] = 65533] = "UNICODE_REPLACEMENT";
})(SHA1Constant || (SHA1Constant = {}));
function leftRotate(value, bits, totalBits = 32) {
  const delta = totalBits - bits;
  const mask = ~((1 << delta) - 1);
  return (value << bits | (mask & value) >>> delta) >>> 0;
}
function fill(dest, index = 0, count = dest.byteLength, value = 0) {
  for (let i = 0; i < count; i++) {
    dest[index + i] = value;
  }
}
function leftPad(value, length, char = "0") {
  while (value.length < length) {
    value = char + value;
  }
  return value;
}
function $Qj(bufferOrValue, bitsize = 32) {
  if (bufferOrValue instanceof ArrayBuffer) {
    return Array.from(new Uint8Array(bufferOrValue)).map((b) => b.toString(16).padStart(2, "0")).join("");
  }
  return leftPad((bufferOrValue >>> 0).toString(16), bitsize / 4);
}
var $Rj = class _$Rj {
  static {
    this.g = new DataView(new ArrayBuffer(320));
  }
  // 80 * 4 = 320
  constructor() {
    this.h = 1732584193;
    this.l = 4023233417;
    this.m = 2562383102;
    this.n = 271733878;
    this.o = 3285377520;
    this.p = new Uint8Array(
      64 + 3
      /* to fit any utf-8 */
    );
    this.q = new DataView(this.p.buffer);
    this.r = 0;
    this.t = 0;
    this.u = 0;
    this.v = false;
  }
  update(str) {
    const strLen = str.length;
    if (strLen === 0) {
      return;
    }
    const buff = this.p;
    let buffLen = this.r;
    let leftoverHighSurrogate = this.u;
    let charCode;
    let offset;
    if (leftoverHighSurrogate !== 0) {
      charCode = leftoverHighSurrogate;
      offset = -1;
      leftoverHighSurrogate = 0;
    } else {
      charCode = str.charCodeAt(0);
      offset = 0;
    }
    while (true) {
      let codePoint = charCode;
      if ($2f(charCode)) {
        if (offset + 1 < strLen) {
          const nextCharCode = str.charCodeAt(offset + 1);
          if ($3f(nextCharCode)) {
            offset++;
            codePoint = $4f(charCode, nextCharCode);
          } else {
            codePoint = 65533;
          }
        } else {
          leftoverHighSurrogate = charCode;
          break;
        }
      } else if ($3f(charCode)) {
        codePoint = 65533;
      }
      buffLen = this.w(buff, buffLen, codePoint);
      offset++;
      if (offset < strLen) {
        charCode = str.charCodeAt(offset);
      } else {
        break;
      }
    }
    this.r = buffLen;
    this.u = leftoverHighSurrogate;
  }
  w(buff, buffLen, codePoint) {
    if (codePoint < 128) {
      buff[buffLen++] = codePoint;
    } else if (codePoint < 2048) {
      buff[buffLen++] = 192 | (codePoint & 1984) >>> 6;
      buff[buffLen++] = 128 | (codePoint & 63) >>> 0;
    } else if (codePoint < 65536) {
      buff[buffLen++] = 224 | (codePoint & 61440) >>> 12;
      buff[buffLen++] = 128 | (codePoint & 4032) >>> 6;
      buff[buffLen++] = 128 | (codePoint & 63) >>> 0;
    } else {
      buff[buffLen++] = 240 | (codePoint & 1835008) >>> 18;
      buff[buffLen++] = 128 | (codePoint & 258048) >>> 12;
      buff[buffLen++] = 128 | (codePoint & 4032) >>> 6;
      buff[buffLen++] = 128 | (codePoint & 63) >>> 0;
    }
    if (buffLen >= 64) {
      this.y();
      buffLen -= 64;
      this.t += 64;
      buff[0] = buff[64 + 0];
      buff[1] = buff[64 + 1];
      buff[2] = buff[64 + 2];
    }
    return buffLen;
  }
  digest() {
    if (!this.v) {
      this.v = true;
      if (this.u) {
        this.u = 0;
        this.r = this.w(
          this.p,
          this.r,
          65533
          /* SHA1Constant.UNICODE_REPLACEMENT */
        );
      }
      this.t += this.r;
      this.x();
    }
    return $Qj(this.h) + $Qj(this.l) + $Qj(this.m) + $Qj(this.n) + $Qj(this.o);
  }
  x() {
    this.p[this.r++] = 128;
    fill(this.p, this.r);
    if (this.r > 56) {
      this.y();
      fill(this.p);
    }
    const ml = 8 * this.t;
    this.q.setUint32(56, Math.floor(ml / 4294967296), false);
    this.q.setUint32(60, ml % 4294967296, false);
    this.y();
  }
  y() {
    const bigBlock32 = _$Rj.g;
    const data = this.q;
    for (let j = 0; j < 64; j += 4) {
      bigBlock32.setUint32(j, data.getUint32(j, false), false);
    }
    for (let j = 64; j < 320; j += 4) {
      bigBlock32.setUint32(j, leftRotate(bigBlock32.getUint32(j - 12, false) ^ bigBlock32.getUint32(j - 32, false) ^ bigBlock32.getUint32(j - 56, false) ^ bigBlock32.getUint32(j - 64, false), 1), false);
    }
    let a = this.h;
    let b = this.l;
    let c = this.m;
    let d = this.n;
    let e = this.o;
    let f, k;
    let temp;
    for (let j = 0; j < 80; j++) {
      if (j < 20) {
        f = b & c | ~b & d;
        k = 1518500249;
      } else if (j < 40) {
        f = b ^ c ^ d;
        k = 1859775393;
      } else if (j < 60) {
        f = b & c | b & d | c & d;
        k = 2400959708;
      } else {
        f = b ^ c ^ d;
        k = 3395469782;
      }
      temp = leftRotate(a, 5) + f + e + k + bigBlock32.getUint32(j * 4, false) & 4294967295;
      e = d;
      d = c;
      c = leftRotate(b, 30);
      b = a;
      a = temp;
    }
    this.h = this.h + a & 4294967295;
    this.l = this.l + b & 4294967295;
    this.m = this.m + c & 4294967295;
    this.n = this.n + d & 4294967295;
    this.o = this.o + e & 4294967295;
  }
};

// out-build/vs/base/browser/dom.js
var { registerWindow, getWindow, getDocument, getWindows, getWindowsCount, getWindowId, getWindowById, hasWindow, onDidRegisterWindow, onWillUnregisterWindow, onDidUnregisterWindow } = function() {
  const windows = /* @__PURE__ */ new Map();
  $YS($ZS, 1);
  const mainWindowRegistration = { window: $ZS, disposables: new $8c() };
  windows.set($ZS.vscodeWindowId, mainWindowRegistration);
  const onDidRegisterWindow2 = new $Ce();
  const onDidUnregisterWindow2 = new $Ce();
  const onWillUnregisterWindow2 = new $Ce();
  function getWindowById2(windowId, fallbackToMain) {
    const window2 = typeof windowId === "number" ? windows.get(windowId) : void 0;
    return window2 ?? (fallbackToMain ? mainWindowRegistration : void 0);
  }
  return {
    onDidRegisterWindow: onDidRegisterWindow2.event,
    onWillUnregisterWindow: onWillUnregisterWindow2.event,
    onDidUnregisterWindow: onDidUnregisterWindow2.event,
    registerWindow(window2) {
      if (windows.has(window2.vscodeWindowId)) {
        return $9c.None;
      }
      const disposables = new $8c();
      const registeredWindow = {
        window: window2,
        disposables: disposables.add(new $8c())
      };
      windows.set(window2.vscodeWindowId, registeredWindow);
      disposables.add($7c(() => {
        windows.delete(window2.vscodeWindowId);
        onDidUnregisterWindow2.fire(window2);
      }));
      disposables.add($uT(window2, $vU.BEFORE_UNLOAD, () => {
        onWillUnregisterWindow2.fire(window2);
      }));
      onDidRegisterWindow2.fire(registeredWindow);
      return disposables;
    },
    getWindows() {
      return windows.values();
    },
    getWindowsCount() {
      return windows.size;
    },
    getWindowId(targetWindow) {
      return targetWindow.vscodeWindowId;
    },
    hasWindow(windowId) {
      return windows.has(windowId);
    },
    getWindowById: getWindowById2,
    getWindow(e) {
      const candidateNode = e;
      if (candidateNode?.ownerDocument?.defaultView) {
        return candidateNode.ownerDocument.defaultView.window;
      }
      const candidateEvent = e;
      if (candidateEvent?.view) {
        return candidateEvent.view.window;
      }
      return $ZS;
    },
    getDocument(e) {
      const candidateNode = e;
      return getWindow(candidateNode).document;
    }
  };
}();
var DomListener = class {
  constructor(node, type, handler, options2) {
    this.f = node;
    this.g = type;
    this.d = handler;
    this.j = options2 || false;
    this.f.addEventListener(this.g, this.d, this.j);
  }
  dispose() {
    if (!this.d) {
      return;
    }
    this.f.removeEventListener(this.g, this.d, this.j);
    this.f = null;
    this.d = null;
  }
};
function $uT(node, type, handler, useCaptureOrOptions) {
  return new DomListener(node, type, handler, useCaptureOrOptions);
}
var $DT;
var $ET;
var AnimationFrameQueueItem = class {
  constructor(runner, priority = 0) {
    this.d = runner;
    this.priority = priority;
    this.f = false;
  }
  dispose() {
    this.f = true;
  }
  execute() {
    if (this.f) {
      return;
    }
    try {
      this.d();
    } catch (e) {
      $ab(e);
    }
  }
  // Sort by priority (largest to lowest)
  static sort(a, b) {
    return b.priority - a.priority;
  }
};
(function() {
  const NEXT_QUEUE = /* @__PURE__ */ new Map();
  const CURRENT_QUEUE = /* @__PURE__ */ new Map();
  const animFrameRequested = /* @__PURE__ */ new Map();
  const inAnimationFrameRunner = /* @__PURE__ */ new Map();
  const animationFrameRunner = (targetWindowId) => {
    animFrameRequested.set(targetWindowId, false);
    const currentQueue = NEXT_QUEUE.get(targetWindowId) ?? [];
    CURRENT_QUEUE.set(targetWindowId, currentQueue);
    NEXT_QUEUE.set(targetWindowId, []);
    inAnimationFrameRunner.set(targetWindowId, true);
    while (currentQueue.length > 0) {
      currentQueue.sort(AnimationFrameQueueItem.sort);
      const top = currentQueue.shift();
      top.execute();
    }
    inAnimationFrameRunner.set(targetWindowId, false);
  };
  $ET = (targetWindow, runner, priority = 0) => {
    const targetWindowId = getWindowId(targetWindow);
    const item = new AnimationFrameQueueItem(runner, priority);
    let nextQueue = NEXT_QUEUE.get(targetWindowId);
    if (!nextQueue) {
      nextQueue = [];
      NEXT_QUEUE.set(targetWindowId, nextQueue);
    }
    nextQueue.push(item);
    if (!animFrameRequested.get(targetWindowId)) {
      animFrameRequested.set(targetWindowId, true);
      targetWindow.requestAnimationFrame(() => animationFrameRunner(targetWindowId));
    }
    return item;
  };
  $DT = (targetWindow, runner, priority) => {
    const targetWindowId = getWindowId(targetWindow);
    if (inAnimationFrameRunner.get(targetWindowId)) {
      const item = new AnimationFrameQueueItem(runner, priority);
      let currentQueue = CURRENT_QUEUE.get(targetWindowId);
      if (!currentQueue) {
        currentQueue = [];
        CURRENT_QUEUE.set(targetWindowId, currentQueue);
      }
      currentQueue.push(item);
      return item;
    } else {
      return $ET(targetWindow, runner, priority);
    }
  };
})();
var $MT = class _$MT {
  static {
    this.None = new _$MT(0, 0);
  }
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  with(width = this.width, height = this.height) {
    if (width !== this.width || height !== this.height) {
      return new _$MT(width, height);
    } else {
      return this;
    }
  }
  static is(obj) {
    return typeof obj === "object" && typeof obj.height === "number" && typeof obj.width === "number";
  }
  static lift(obj) {
    if (obj instanceof _$MT) {
      return obj;
    } else {
      return new _$MT(obj.width, obj.height);
    }
  }
  static equals(a, b) {
    if (a === b) {
      return true;
    }
    if (!a || !b) {
      return false;
    }
    return a.width === b.width && a.height === b.height;
  }
};
function $YT(testChild, testAncestor) {
  return Boolean(testAncestor?.contains(testChild));
}
function $4T(node) {
  return node && !!node.host && !!node.mode;
}
function $6T(domNode) {
  while (domNode.parentNode) {
    if (domNode === domNode.ownerDocument?.body) {
      return null;
    }
    domNode = domNode.parentNode;
  }
  return $4T(domNode) ? domNode : null;
}
function $7T() {
  let result = $$T().activeElement;
  while (result?.shadowRoot) {
    result = result.shadowRoot.activeElement;
  }
  return result;
}
function $8T(element) {
  return $7T() === element;
}
function $$T() {
  if (getWindowsCount() <= 1) {
    return $ZS.document;
  }
  const documents = Array.from(getWindows()).map(({ window: window2 }) => window2.document);
  return documents.find((doc) => doc.hasFocus()) ?? $ZS.document;
}
function $_T() {
  const document2 = $$T();
  return document2.defaultView?.window ?? $ZS;
}
var globalStylesheets = /* @__PURE__ */ new Map();
function $cU(container = $ZS.document.head, beforeAppend, disposableStore) {
  const style = document.createElement("style");
  style.type = "text/css";
  style.media = "screen";
  beforeAppend?.(style);
  container.appendChild(style);
  if (disposableStore) {
    disposableStore.add($7c(() => style.remove()));
  }
  if (container === $ZS.document.head) {
    const globalStylesheetClones = /* @__PURE__ */ new Set();
    globalStylesheets.set(style, globalStylesheetClones);
    for (const { window: targetWindow, disposables } of getWindows()) {
      if (targetWindow === $ZS) {
        continue;
      }
      const cloneDisposable = disposables.add(cloneGlobalStyleSheet(style, globalStylesheetClones, targetWindow));
      disposableStore?.add(cloneDisposable);
    }
  }
  return style;
}
function cloneGlobalStyleSheet(globalStylesheet, globalStylesheetClones, targetWindow) {
  const disposables = new $8c();
  const clone2 = globalStylesheet.cloneNode(true);
  targetWindow.document.head.appendChild(clone2);
  disposables.add($7c(() => clone2.remove()));
  for (const rule of getDynamicStyleSheetRules(globalStylesheet)) {
    clone2.sheet?.insertRule(rule.cssText, clone2.sheet?.cssRules.length);
  }
  disposables.add($eU.observe(globalStylesheet, disposables, { childList: true })(() => {
    clone2.textContent = globalStylesheet.textContent;
  }));
  globalStylesheetClones.add(clone2);
  disposables.add($7c(() => globalStylesheetClones.delete(clone2)));
  return disposables;
}
var $eU = new class {
  constructor() {
    this.mutationObservers = /* @__PURE__ */ new Map();
  }
  observe(target, disposables, options2) {
    let mutationObserversPerTarget = this.mutationObservers.get(target);
    if (!mutationObserversPerTarget) {
      mutationObserversPerTarget = /* @__PURE__ */ new Map();
      this.mutationObservers.set(target, mutationObserversPerTarget);
    }
    const optionsHash = $Lj(options2);
    let mutationObserverPerOptions = mutationObserversPerTarget.get(optionsHash);
    if (!mutationObserverPerOptions) {
      const onDidMutate = new $Ce();
      const observer = new MutationObserver((mutations) => onDidMutate.fire(mutations));
      observer.observe(target, options2);
      const resolvedMutationObserverPerOptions = mutationObserverPerOptions = {
        users: 1,
        observer,
        onDidMutate: onDidMutate.event
      };
      disposables.add($7c(() => {
        resolvedMutationObserverPerOptions.users -= 1;
        if (resolvedMutationObserverPerOptions.users === 0) {
          onDidMutate.dispose();
          observer.disconnect();
          mutationObserversPerTarget?.delete(optionsHash);
          if (mutationObserversPerTarget?.size === 0) {
            this.mutationObservers.delete(target);
          }
        }
      }));
      mutationObserversPerTarget.set(optionsHash, mutationObserverPerOptions);
    } else {
      mutationObserverPerOptions.users += 1;
    }
    return mutationObserverPerOptions.onDidMutate;
  }
}();
function getDynamicStyleSheetRules(style) {
  if (style?.sheet?.rules) {
    return style.sheet.rules;
  }
  if (style?.sheet?.cssRules) {
    return style.sheet.cssRules;
  }
  return [];
}
function $jU(e) {
  return e instanceof HTMLElement || e instanceof getWindow(e).HTMLElement;
}
function $mU(e) {
  return e instanceof HTMLTextAreaElement || e instanceof getWindow(e).HTMLTextAreaElement;
}
function $nU(e) {
  return e instanceof HTMLInputElement || e instanceof getWindow(e).HTMLInputElement;
}
var $vU = {
  // Mouse
  CLICK: "click",
  AUXCLICK: "auxclick",
  DBLCLICK: "dblclick",
  MOUSE_UP: "mouseup",
  MOUSE_DOWN: "mousedown",
  MOUSE_OVER: "mouseover",
  MOUSE_MOVE: "mousemove",
  MOUSE_OUT: "mouseout",
  MOUSE_ENTER: "mouseenter",
  MOUSE_LEAVE: "mouseleave",
  MOUSE_WHEEL: "wheel",
  POINTER_UP: "pointerup",
  POINTER_DOWN: "pointerdown",
  POINTER_MOVE: "pointermove",
  POINTER_LEAVE: "pointerleave",
  CONTEXT_MENU: "contextmenu",
  WHEEL: "wheel",
  // Keyboard
  KEY_DOWN: "keydown",
  KEY_PRESS: "keypress",
  KEY_UP: "keyup",
  // HTML Document
  LOAD: "load",
  BEFORE_UNLOAD: "beforeunload",
  UNLOAD: "unload",
  PAGE_SHOW: "pageshow",
  PAGE_HIDE: "pagehide",
  PASTE: "paste",
  ABORT: "abort",
  ERROR: "error",
  RESIZE: "resize",
  SCROLL: "scroll",
  FULLSCREEN_CHANGE: "fullscreenchange",
  WK_FULLSCREEN_CHANGE: "webkitfullscreenchange",
  // Form
  SELECT: "select",
  CHANGE: "change",
  SUBMIT: "submit",
  RESET: "reset",
  FOCUS: "focus",
  FOCUS_IN: "focusin",
  FOCUS_OUT: "focusout",
  BLUR: "blur",
  INPUT: "input",
  // Local Storage
  STORAGE: "storage",
  // Drag
  DRAG_START: "dragstart",
  DRAG: "drag",
  DRAG_ENTER: "dragenter",
  DRAG_LEAVE: "dragleave",
  DRAG_OVER: "dragover",
  DROP: "drop",
  DRAG_END: "dragend",
  // Animation
  ANIMATION_START: $aT ? "webkitAnimationStart" : "animationstart",
  ANIMATION_END: $aT ? "webkitAnimationEnd" : "animationend",
  ANIMATION_ITERATION: $aT ? "webkitAnimationIteration" : "animationiteration"
};
var $xU = {
  stop: (e, cancelBubble) => {
    e.preventDefault();
    if (cancelBubble) {
      e.stopPropagation();
    }
    return e;
  }
};
var FocusTracker = class _FocusTracker extends $9c {
  static m(element) {
    if ($jU(element)) {
      const shadowRoot = $6T(element);
      const activeElement = shadowRoot ? shadowRoot.activeElement : element.ownerDocument.activeElement;
      return $YT(activeElement, element);
    } else {
      const window2 = element;
      return $YT(window2.document.activeElement, window2.document);
    }
  }
  constructor(element) {
    super();
    this.f = this.B(new $Ce());
    this.onDidFocus = this.f.event;
    this.g = this.B(new $Ce());
    this.onDidBlur = this.g.event;
    let hasFocus = _FocusTracker.m(element);
    let loosingFocus = false;
    const onFocus = () => {
      loosingFocus = false;
      if (!hasFocus) {
        hasFocus = true;
        this.f.fire();
      }
    };
    const onBlur = () => {
      if (hasFocus) {
        loosingFocus = true;
        ($jU(element) ? getWindow(element) : element).setTimeout(() => {
          if (loosingFocus) {
            loosingFocus = false;
            hasFocus = false;
            this.g.fire();
          }
        }, 0);
      }
    };
    this.j = () => {
      const currentNodeHasFocus = _FocusTracker.m(element);
      if (currentNodeHasFocus !== hasFocus) {
        if (hasFocus) {
          onBlur();
        } else {
          onFocus();
        }
      }
    };
    this.B($uT(element, $vU.FOCUS, onFocus, true));
    this.B($uT(element, $vU.BLUR, onBlur, true));
    if ($jU(element)) {
      this.B($uT(element, $vU.FOCUS_IN, () => this.j()));
      this.B($uT(element, $vU.FOCUS_OUT, () => this.j()));
    }
  }
  refreshState() {
    this.j();
  }
};
function $AU(element) {
  return new FocusTracker(element);
}
function $CU(parent, ...children) {
  parent.append(...children);
  if (children.length === 1 && typeof children[0] !== "string") {
    return children[0];
  }
}
function $EU(parent, ...children) {
  parent.innerText = "";
  $CU(parent, ...children);
}
var SELECTOR_REGEX = /([\w\-]+)?(#([\w\-]+))?((\.([\w\-]+))*)/;
var Namespace;
(function(Namespace2) {
  Namespace2["HTML"] = "http://www.w3.org/1999/xhtml";
  Namespace2["SVG"] = "http://www.w3.org/2000/svg";
})(Namespace || (Namespace = {}));
function _$(namespace, description, attrs, ...children) {
  const match = SELECTOR_REGEX.exec(description);
  if (!match) {
    throw new Error("Bad use of emmet");
  }
  const tagName = match[1] || "div";
  let result;
  if (namespace !== Namespace.HTML) {
    result = document.createElementNS(namespace, tagName);
  } else {
    result = document.createElement(tagName);
  }
  if (match[3]) {
    result.id = match[3];
  }
  if (match[4]) {
    result.className = match[4].replace(/\./g, " ").trim();
  }
  if (attrs) {
    Object.entries(attrs).forEach(([name, value]) => {
      if (typeof value === "undefined") {
        return;
      }
      if (/^on\w+$/.test(name)) {
        result[name] = value;
      } else if (name === "selected") {
        if (value) {
          result.setAttribute(name, "true");
        }
      } else {
        result.setAttribute(name, value);
      }
    });
  }
  result.append(...children);
  return result;
}
function $(description, attrs, ...children) {
  return _$(Namespace.HTML, description, attrs, ...children);
}
$.SVG = function(description, attrs, ...children) {
  return _$(Namespace.SVG, description, attrs, ...children);
};
function $OU(url) {
  $ZS.open(url, "_blank", "noopener");
}
$$g.setPreferredWebSchema(/^https:/.test($ZS.location.href) ? "https" : "http");
function $SU(uri) {
  if (!uri) {
    return `url('')`;
  }
  return `url('${$fh.uriToBrowserUri(uri).toString(true).replace(/'/g, "%27")}')`;
}
function $TU(value) {
  return `'${value.replace(/'/g, "%27")}'`;
}
var DetectedFullscreenMode;
(function(DetectedFullscreenMode2) {
  DetectedFullscreenMode2[DetectedFullscreenMode2["DOCUMENT"] = 1] = "DOCUMENT";
  DetectedFullscreenMode2[DetectedFullscreenMode2["BROWSER"] = 2] = "BROWSER";
})(DetectedFullscreenMode || (DetectedFullscreenMode = {}));
function $YU(allowedProtocols, allowDataImages = false) {
  const anchor = document.createElement("a");
  addHook("afterSanitizeAttributes", (node) => {
    for (const attr of ["href", "src"]) {
      if (node.hasAttribute(attr)) {
        const attrValue = node.getAttribute(attr);
        if (attr === "href" && attrValue.startsWith("#")) {
          continue;
        }
        anchor.href = attrValue;
        if (!allowedProtocols.includes(anchor.protocol.replace(/:$/, ""))) {
          if (allowDataImages && attr === "src" && anchor.href.startsWith("data:")) {
            continue;
          }
          node.removeAttribute(attr);
        }
      }
    }
  });
  return $7c(() => {
    removeHook("afterSanitizeAttributes");
  });
}
var defaultSafeProtocols = [
  Schemas.http,
  Schemas.https,
  Schemas.command
];
var $ZU = Object.freeze([
  "a",
  "abbr",
  "b",
  "bdo",
  "blockquote",
  "br",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "dd",
  "del",
  "details",
  "dfn",
  "div",
  "dl",
  "dt",
  "em",
  "figcaption",
  "figure",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "hr",
  "i",
  "img",
  "input",
  "ins",
  "kbd",
  "label",
  "li",
  "mark",
  "ol",
  "p",
  "pre",
  "q",
  "rp",
  "rt",
  "ruby",
  "samp",
  "small",
  "small",
  "source",
  "span",
  "strike",
  "strong",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "tfoot",
  "th",
  "thead",
  "time",
  "tr",
  "tt",
  "u",
  "ul",
  "var",
  "video",
  "wbr"
]);
var defaultDomPurifyConfig = Object.freeze({
  ALLOWED_TAGS: ["a", "button", "blockquote", "code", "div", "h1", "h2", "h3", "h4", "h5", "h6", "hr", "input", "label", "li", "p", "pre", "select", "small", "span", "strong", "textarea", "ul", "ol"],
  ALLOWED_ATTR: ["href", "data-href", "data-command", "target", "title", "name", "src", "alt", "class", "id", "role", "tabindex", "style", "data-code", "width", "height", "align", "x-dispatch", "required", "checked", "placeholder", "type", "start"],
  RETURN_DOM: false,
  RETURN_DOM_FRAGMENT: false,
  RETURN_TRUSTED_TYPE: true
});
function $1U(node, value, extraDomPurifyConfig) {
  const hook = $YU(defaultSafeProtocols);
  try {
    const html2 = sanitize(value, { ...defaultDomPurifyConfig, ...extraDomPurifyConfig });
    node.innerHTML = html2;
  } finally {
    hook.dispose();
  }
}

// out-build/vs/platform/instantiation/common/descriptors.js
var $Ui = class {
  constructor(ctor, staticArguments = [], supportsDelayedInstantiation = false) {
    this.ctor = ctor;
    this.staticArguments = staticArguments;
    this.supportsDelayedInstantiation = supportsDelayedInstantiation;
  }
};

// out-build/vs/platform/instantiation/common/extensions.js
var _registry = [];
var InstantiationType;
(function(InstantiationType2) {
  InstantiationType2[InstantiationType2["Eager"] = 0] = "Eager";
  InstantiationType2[InstantiationType2["Delayed"] = 1] = "Delayed";
})(InstantiationType || (InstantiationType = {}));
function $at(id2, ctorOrDescriptor, supportsDelayedInstantiation) {
  if (!(ctorOrDescriptor instanceof $Ui)) {
    ctorOrDescriptor = new $Ui(ctorOrDescriptor, [], Boolean(supportsDelayedInstantiation));
  }
  _registry.push([id2, ctorOrDescriptor]);
}
function $bt() {
  return _registry;
}

// out-build/vs/platform/instantiation/common/graph.js
var $Pr = class {
  constructor(key, data) {
    this.key = key;
    this.data = data;
    this.incoming = /* @__PURE__ */ new Map();
    this.outgoing = /* @__PURE__ */ new Map();
  }
};
var $Qr = class {
  constructor(b) {
    this.b = b;
    this.a = /* @__PURE__ */ new Map();
  }
  roots() {
    const ret = [];
    for (const node of this.a.values()) {
      if (node.outgoing.size === 0) {
        ret.push(node);
      }
    }
    return ret;
  }
  insertEdge(from, to) {
    const fromNode = this.lookupOrInsertNode(from);
    const toNode = this.lookupOrInsertNode(to);
    fromNode.outgoing.set(toNode.key, toNode);
    toNode.incoming.set(fromNode.key, fromNode);
  }
  removeNode(data) {
    const key = this.b(data);
    this.a.delete(key);
    for (const node of this.a.values()) {
      node.outgoing.delete(key);
      node.incoming.delete(key);
    }
  }
  lookupOrInsertNode(data) {
    const key = this.b(data);
    let node = this.a.get(key);
    if (!node) {
      node = new $Pr(key, data);
      this.a.set(key, node);
    }
    return node;
  }
  lookup(data) {
    return this.a.get(this.b(data));
  }
  isEmpty() {
    return this.a.size === 0;
  }
  toString() {
    const data = [];
    for (const [key, value] of this.a) {
      data.push(`${key}
	(-> incoming)[${[...value.incoming.keys()].join(", ")}]
	(outgoing ->)[${[...value.outgoing.keys()].join(",")}]
`);
    }
    return data.join("\n");
  }
  /**
   * This is brute force and slow and **only** be used
   * to trouble shoot.
   */
  findCycleSlow() {
    for (const [id2, node] of this.a) {
      const seen = /* @__PURE__ */ new Set([id2]);
      const res = this.c(node, seen);
      if (res) {
        return res;
      }
    }
    return void 0;
  }
  c(node, seen) {
    for (const [id2, outgoing] of node.outgoing) {
      if (seen.has(id2)) {
        return [...seen, id2].join(" -> ");
      }
      seen.add(id2);
      const value = this.c(outgoing, seen);
      if (value) {
        return value;
      }
      seen.delete(id2);
    }
    return void 0;
  }
};

// out-build/vs/platform/instantiation/common/instantiation.js
var _util;
(function(_util2) {
  _util2.serviceIds = /* @__PURE__ */ new Map();
  _util2.DI_TARGET = "$di$target";
  _util2.DI_DEPENDENCIES = "$di$dependencies";
  function getServiceDependencies(ctor) {
    return ctor[_util2.DI_DEPENDENCIES] || [];
  }
  _util2.getServiceDependencies = getServiceDependencies;
})(_util || (_util = {}));
var $Wi = $Xi("instantiationService");
function storeServiceDependency(id2, target, index) {
  if (target[_util.DI_TARGET] === target) {
    target[_util.DI_DEPENDENCIES].push({ id: id2, index });
  } else {
    target[_util.DI_DEPENDENCIES] = [{ id: id2, index }];
    target[_util.DI_TARGET] = target;
  }
}
function $Xi(serviceId) {
  if (_util.serviceIds.has(serviceId)) {
    return _util.serviceIds.get(serviceId);
  }
  const id2 = function(target, key, index) {
    if (arguments.length !== 3) {
      throw new Error("@IServiceName-decorator can only be used to decorate a parameter");
    }
    storeServiceDependency(id2, target, index);
  };
  id2.toString = () => serviceId;
  _util.serviceIds.set(serviceId, id2);
  return id2;
}

// out-build/vs/platform/instantiation/common/serviceCollection.js
var $Vi = class {
  constructor(...entries2) {
    this.a = /* @__PURE__ */ new Map();
    for (const [id2, service] of entries2) {
      this.set(id2, service);
    }
  }
  set(id2, instanceOrDescriptor) {
    const result = this.a.get(id2);
    this.a.set(id2, instanceOrDescriptor);
    return result;
  }
  has(id2) {
    return this.a.has(id2);
  }
  get(id2) {
    return this.a.get(id2);
  }
};

// out-build/vs/platform/instantiation/common/instantiationService.js
var _enableAllTracing = false;
var CyclicDependencyError = class extends Error {
  constructor(graph) {
    super("cyclic dependency between services");
    this.message = graph.findCycleSlow() ?? `UNABLE to detect cycle, dumping graph: 
${graph.toString()}`;
  }
};
var $Rr = class _$Rr {
  constructor(i = new $Vi(), j = false, k, l = _enableAllTracing) {
    this.i = i;
    this.j = j;
    this.k = k;
    this.l = l;
    this.f = false;
    this.g = /* @__PURE__ */ new Set();
    this.h = /* @__PURE__ */ new Set();
    this.t = /* @__PURE__ */ new Set();
    this.i.set($Wi, this);
    this._globalGraph = l ? k?._globalGraph ?? new $Qr((e) => e) : void 0;
  }
  dispose() {
    if (!this.f) {
      this.f = true;
      $4c(this.h);
      this.h.clear();
      for (const candidate of this.g) {
        if ($3c(candidate)) {
          candidate.dispose();
        }
      }
      this.g.clear();
    }
  }
  m() {
    if (this.f) {
      throw new Error("InstantiationService has been disposed");
    }
  }
  createChild(services, store) {
    this.m();
    const that = this;
    const result = new class extends _$Rr {
      dispose() {
        that.h.delete(result);
        super.dispose();
      }
    }(services, this.j, this, this.l);
    this.h.add(result);
    store?.add(result);
    return result;
  }
  invokeFunction(fn, ...args) {
    this.m();
    const _trace = $Sr.traceInvocation(this.l, fn);
    let _done = false;
    try {
      const accessor = {
        get: (id2) => {
          if (_done) {
            throw $ib("service accessor is only valid during the invocation of its target method");
          }
          const result = this.s(id2, _trace);
          if (!result) {
            throw new Error(`[invokeFunction] unknown service '${id2}'`);
          }
          return result;
        }
      };
      return fn(accessor, ...args);
    } finally {
      _done = true;
      _trace.stop();
    }
  }
  createInstance(ctorOrDescriptor, ...rest) {
    this.m();
    let _trace;
    let result;
    if (ctorOrDescriptor instanceof $Ui) {
      _trace = $Sr.traceCreation(this.l, ctorOrDescriptor.ctor);
      result = this.o(ctorOrDescriptor.ctor, ctorOrDescriptor.staticArguments.concat(rest), _trace);
    } else {
      _trace = $Sr.traceCreation(this.l, ctorOrDescriptor);
      result = this.o(ctorOrDescriptor, rest, _trace);
    }
    _trace.stop();
    return result;
  }
  o(ctor, args = [], _trace) {
    const serviceDependencies = _util.getServiceDependencies(ctor).sort((a, b) => a.index - b.index);
    const serviceArgs = [];
    for (const dependency of serviceDependencies) {
      const service = this.s(dependency.id, _trace);
      if (!service) {
        this.y(`[createInstance] ${ctor.name} depends on UNKNOWN service ${dependency.id}.`, false);
      }
      serviceArgs.push(service);
    }
    const firstServiceArgPos = serviceDependencies.length > 0 ? serviceDependencies[0].index : args.length;
    if (args.length !== firstServiceArgPos) {
      console.trace(`[createInstance] First service dependency of ${ctor.name} at position ${firstServiceArgPos + 1} conflicts with ${args.length} static arguments`);
      const delta = firstServiceArgPos - args.length;
      if (delta > 0) {
        args = args.concat(new Array(delta));
      } else {
        args = args.slice(0, firstServiceArgPos);
      }
    }
    return Reflect.construct(ctor, args.concat(serviceArgs));
  }
  q(id2, instance) {
    if (this.i.get(id2) instanceof $Ui) {
      this.i.set(id2, instance);
    } else if (this.k) {
      this.k.q(id2, instance);
    } else {
      throw new Error("illegalState - setting UNKNOWN service instance");
    }
  }
  r(id2) {
    const instanceOrDesc = this.i.get(id2);
    if (!instanceOrDesc && this.k) {
      return this.k.r(id2);
    } else {
      return instanceOrDesc;
    }
  }
  s(id2, _trace) {
    if (this._globalGraph && this.c) {
      this._globalGraph.insertEdge(this.c, String(id2));
    }
    const thing = this.r(id2);
    if (thing instanceof $Ui) {
      return this.u(id2, thing, _trace.branch(id2, true));
    } else {
      _trace.branch(id2, false);
      return thing;
    }
  }
  u(id2, desc, _trace) {
    if (this.t.has(id2)) {
      throw new Error(`illegal state - RECURSIVELY instantiating service '${id2}'`);
    }
    this.t.add(id2);
    try {
      return this.v(id2, desc, _trace);
    } finally {
      this.t.delete(id2);
    }
  }
  v(id2, desc, _trace) {
    const graph = new $Qr((data) => data.id.toString());
    let cycleCount = 0;
    const stack = [{ id: id2, desc, _trace }];
    const seen = /* @__PURE__ */ new Set();
    while (stack.length) {
      const item = stack.pop();
      if (seen.has(String(item.id))) {
        continue;
      }
      seen.add(String(item.id));
      graph.lookupOrInsertNode(item);
      if (cycleCount++ > 1e3) {
        throw new CyclicDependencyError(graph);
      }
      for (const dependency of _util.getServiceDependencies(item.desc.ctor)) {
        const instanceOrDesc = this.r(dependency.id);
        if (!instanceOrDesc) {
          this.y(`[createInstance] ${id2} depends on ${dependency.id} which is NOT registered.`, true);
        }
        this._globalGraph?.insertEdge(String(item.id), String(dependency.id));
        if (instanceOrDesc instanceof $Ui) {
          const d = { id: dependency.id, desc: instanceOrDesc, _trace: item._trace.branch(dependency.id, true) };
          graph.insertEdge(item, d);
          stack.push(d);
        }
      }
    }
    while (true) {
      const roots = graph.roots();
      if (roots.length === 0) {
        if (!graph.isEmpty()) {
          throw new CyclicDependencyError(graph);
        }
        break;
      }
      for (const { data } of roots) {
        const instanceOrDesc = this.r(data.id);
        if (instanceOrDesc instanceof $Ui) {
          const instance = this.w(data.id, data.desc.ctor, data.desc.staticArguments, data.desc.supportsDelayedInstantiation, data._trace);
          this.q(data.id, instance);
        }
        graph.removeNode(data);
      }
    }
    return this.r(id2);
  }
  w(id2, ctor, args = [], supportsDelayedInstantiation, _trace) {
    if (this.i.get(id2) instanceof $Ui) {
      return this.x(id2, ctor, args, supportsDelayedInstantiation, _trace, this.g);
    } else if (this.k) {
      return this.k.w(id2, ctor, args, supportsDelayedInstantiation, _trace);
    } else {
      throw new Error(`illegalState - creating UNKNOWN service instance ${ctor.name}`);
    }
  }
  x(id2, ctor, args = [], supportsDelayedInstantiation, _trace, disposeBucket) {
    if (!supportsDelayedInstantiation) {
      const result = this.o(ctor, args, _trace);
      disposeBucket.add(result);
      return result;
    } else {
      const child = new _$Rr(void 0, this.j, this, this.l);
      child.c = String(id2);
      const earlyListeners = /* @__PURE__ */ new Map();
      const idle = new $ei(() => {
        const result = child.o(ctor, args, _trace);
        for (const [key, values] of earlyListeners) {
          const candidate = result[key];
          if (typeof candidate === "function") {
            for (const value of values) {
              value.disposable = candidate.apply(result, value.listener);
            }
          }
        }
        earlyListeners.clear();
        disposeBucket.add(result);
        return result;
      });
      return new Proxy(/* @__PURE__ */ Object.create(null), {
        get(target, key) {
          if (!idle.isInitialized) {
            if (typeof key === "string" && (key.startsWith("onDid") || key.startsWith("onWill"))) {
              let list = earlyListeners.get(key);
              if (!list) {
                list = new $gd();
                earlyListeners.set(key, list);
              }
              const event = (callback, thisArg, disposables) => {
                if (idle.isInitialized) {
                  return idle.value[key](callback, thisArg, disposables);
                } else {
                  const entry = { listener: [callback, thisArg, disposables], disposable: void 0 };
                  const rm = list.push(entry);
                  const result = $7c(() => {
                    rm();
                    entry.disposable?.dispose();
                  });
                  return result;
                }
              };
              return event;
            }
          }
          if (key in target) {
            return target[key];
          }
          const obj = idle.value;
          let prop = obj[key];
          if (typeof prop !== "function") {
            return prop;
          }
          prop = prop.bind(obj);
          target[key] = prop;
          return prop;
        },
        set(_target, p, value) {
          idle.value[p] = value;
          return true;
        },
        getPrototypeOf(_target) {
          return ctor.prototype;
        }
      });
    }
  }
  y(msg, printWarning) {
    if (printWarning) {
      console.warn(msg);
    }
    if (this.j) {
      throw new Error(msg);
    }
  }
};
var TraceType;
(function(TraceType2) {
  TraceType2[TraceType2["None"] = 0] = "None";
  TraceType2[TraceType2["Creation"] = 1] = "Creation";
  TraceType2[TraceType2["Invocation"] = 2] = "Invocation";
  TraceType2[TraceType2["Branch"] = 3] = "Branch";
})(TraceType || (TraceType = {}));
var $Sr = class _$Sr {
  static {
    this.all = /* @__PURE__ */ new Set();
  }
  static {
    this.c = new class extends _$Sr {
      constructor() {
        super(0, null);
      }
      stop() {
      }
      branch() {
        return this;
      }
    }();
  }
  static traceInvocation(_enableTracing, ctor) {
    return !_enableTracing ? _$Sr.c : new _$Sr(2, ctor.name || new Error().stack.split("\n").slice(3, 4).join("\n"));
  }
  static traceCreation(_enableTracing, ctor) {
    return !_enableTracing ? _$Sr.c : new _$Sr(1, ctor.name);
  }
  static {
    this.f = 0;
  }
  constructor(type, name) {
    this.type = type;
    this.name = name;
    this.g = Date.now();
    this.h = [];
  }
  branch(id2, first) {
    const child = new _$Sr(3, id2.toString());
    this.h.push([id2, first, child]);
    return child;
  }
  stop() {
    const dur = Date.now() - this.g;
    _$Sr.f += dur;
    let causedCreation = false;
    function printChild(n, trace) {
      const res = [];
      const prefix = new Array(n + 1).join("	");
      for (const [id2, first, child] of trace.h) {
        if (first && child) {
          causedCreation = true;
          res.push(`${prefix}CREATES -> ${id2}`);
          const nested = printChild(n + 1, child);
          if (nested) {
            res.push(nested);
          }
        } else {
          res.push(`${prefix}uses -> ${id2}`);
        }
      }
      return res.join("\n");
    }
    const lines = [
      `${this.type === 1 ? "CREATE" : "CALL"} ${this.name}`,
      `${printChild(1, this)}`,
      `DONE, took ${dur.toFixed(2)}ms (grand total ${_$Sr.f.toFixed(2)}ms)`
    ];
    if (dur > 2 || causedCreation) {
      _$Sr.all.add(lines.join("\n"));
    }
  }
};

// out-build/vs/platform/ipc/common/mainProcessService.js
var $ikc = $Xi("mainProcessService");

// out-build/vs/base/common/buffer.js
var hasBuffer = typeof Buffer !== "undefined";
var indexOfTable = new $7(() => new Uint8Array(256));
var textEncoder;
var textDecoder;
var $6e = class _$6e {
  /**
   * When running in a nodejs context, the backing store for the returned `VSBuffer` instance
   * might use a nodejs Buffer allocated from node's Buffer pool, which is not transferrable.
   */
  static alloc(byteLength) {
    if (hasBuffer) {
      return new _$6e(Buffer.allocUnsafe(byteLength));
    } else {
      return new _$6e(new Uint8Array(byteLength));
    }
  }
  /**
   * When running in a nodejs context, if `actual` is not a nodejs Buffer, the backing store for
   * the returned `VSBuffer` instance might use a nodejs Buffer allocated from node's Buffer pool,
   * which is not transferrable.
   */
  static wrap(actual) {
    if (hasBuffer && !Buffer.isBuffer(actual)) {
      actual = Buffer.from(actual.buffer, actual.byteOffset, actual.byteLength);
    }
    return new _$6e(actual);
  }
  /**
   * When running in a nodejs context, the backing store for the returned `VSBuffer` instance
   * might use a nodejs Buffer allocated from node's Buffer pool, which is not transferrable.
   */
  static fromString(source, options2) {
    const dontUseNodeBuffer = options2?.dontUseNodeBuffer || false;
    if (!dontUseNodeBuffer && hasBuffer) {
      return new _$6e(Buffer.from(source));
    } else {
      if (!textEncoder) {
        textEncoder = new TextEncoder();
      }
      return new _$6e(textEncoder.encode(source));
    }
  }
  /**
   * When running in a nodejs context, the backing store for the returned `VSBuffer` instance
   * might use a nodejs Buffer allocated from node's Buffer pool, which is not transferrable.
   */
  static fromByteArray(source) {
    const result = _$6e.alloc(source.length);
    for (let i = 0, len = source.length; i < len; i++) {
      result.buffer[i] = source[i];
    }
    return result;
  }
  /**
   * When running in a nodejs context, the backing store for the returned `VSBuffer` instance
   * might use a nodejs Buffer allocated from node's Buffer pool, which is not transferrable.
   */
  static concat(buffers, totalLength) {
    if (typeof totalLength === "undefined") {
      totalLength = 0;
      for (let i = 0, len = buffers.length; i < len; i++) {
        totalLength += buffers[i].byteLength;
      }
    }
    const ret = _$6e.alloc(totalLength);
    let offset = 0;
    for (let i = 0, len = buffers.length; i < len; i++) {
      const element = buffers[i];
      ret.set(element, offset);
      offset += element.byteLength;
    }
    return ret;
  }
  constructor(buffer) {
    this.buffer = buffer;
    this.byteLength = this.buffer.byteLength;
  }
  /**
   * When running in a nodejs context, the backing store for the returned `VSBuffer` instance
   * might use a nodejs Buffer allocated from node's Buffer pool, which is not transferrable.
   */
  clone() {
    const result = _$6e.alloc(this.byteLength);
    result.set(this);
    return result;
  }
  toString() {
    if (hasBuffer) {
      return this.buffer.toString();
    } else {
      if (!textDecoder) {
        textDecoder = new TextDecoder();
      }
      return textDecoder.decode(this.buffer);
    }
  }
  slice(start, end) {
    return new _$6e(this.buffer.subarray(start, end));
  }
  set(array, offset) {
    if (array instanceof _$6e) {
      this.buffer.set(array.buffer, offset);
    } else if (array instanceof Uint8Array) {
      this.buffer.set(array, offset);
    } else if (array instanceof ArrayBuffer) {
      this.buffer.set(new Uint8Array(array), offset);
    } else if (ArrayBuffer.isView(array)) {
      this.buffer.set(new Uint8Array(array.buffer, array.byteOffset, array.byteLength), offset);
    } else {
      throw new Error(`Unknown argument 'array'`);
    }
  }
  readUInt32BE(offset) {
    return $0e(this.buffer, offset);
  }
  writeUInt32BE(value, offset) {
    $$e(this.buffer, value, offset);
  }
  readUInt32LE(offset) {
    return $_e(this.buffer, offset);
  }
  writeUInt32LE(value, offset) {
    $af(this.buffer, value, offset);
  }
  readUInt8(offset) {
    return $bf(this.buffer, offset);
  }
  writeUInt8(value, offset) {
    $cf(this.buffer, value, offset);
  }
  indexOf(subarray, offset = 0) {
    return $7e(this.buffer, subarray instanceof _$6e ? subarray.buffer : subarray, offset);
  }
};
function $7e(haystack, needle, offset = 0) {
  const needleLen = needle.byteLength;
  const haystackLen = haystack.byteLength;
  if (needleLen === 0) {
    return 0;
  }
  if (needleLen === 1) {
    return haystack.indexOf(needle[0]);
  }
  if (needleLen > haystackLen - offset) {
    return -1;
  }
  const table = indexOfTable.value;
  table.fill(needle.length);
  for (let i2 = 0; i2 < needle.length; i2++) {
    table[needle[i2]] = needle.length - i2 - 1;
  }
  let i = offset + needle.length - 1;
  let j = i;
  let result = -1;
  while (i < haystackLen) {
    if (haystack[i] === needle[j]) {
      if (j === 0) {
        result = i;
        break;
      }
      i--;
      j--;
    } else {
      i += Math.max(needle.length - j, table[haystack[i]]);
      j = needle.length - 1;
    }
  }
  return result;
}
function $0e(source, offset) {
  return source[offset] * 2 ** 24 + source[offset + 1] * 2 ** 16 + source[offset + 2] * 2 ** 8 + source[offset + 3];
}
function $$e(destination, value, offset) {
  destination[offset + 3] = value;
  value = value >>> 8;
  destination[offset + 2] = value;
  value = value >>> 8;
  destination[offset + 1] = value;
  value = value >>> 8;
  destination[offset] = value;
}
function $_e(source, offset) {
  return source[offset + 0] << 0 >>> 0 | source[offset + 1] << 8 >>> 0 | source[offset + 2] << 16 >>> 0 | source[offset + 3] << 24 >>> 0;
}
function $af(destination, value, offset) {
  destination[offset + 0] = value & 255;
  value = value >>> 8;
  destination[offset + 1] = value & 255;
  value = value >>> 8;
  destination[offset + 2] = value & 255;
  value = value >>> 8;
  destination[offset + 3] = value & 255;
}
function $bf(source, offset) {
  return source[offset];
}
function $cf(destination, value, offset) {
  destination[offset] = value;
}

// out-build/vs/base/common/decorators.js
function createDecorator(mapFn) {
  return (target, key, descriptor) => {
    let fnKey = null;
    let fn = null;
    if (typeof descriptor.value === "function") {
      fnKey = "value";
      fn = descriptor.value;
    } else if (typeof descriptor.get === "function") {
      fnKey = "get";
      fn = descriptor.get;
    }
    if (!fn) {
      throw new Error("not supported");
    }
    descriptor[fnKey] = mapFn(fn, key);
  };
}
function $pi(_target, key, descriptor) {
  let fnKey = null;
  let fn = null;
  if (typeof descriptor.value === "function") {
    fnKey = "value";
    fn = descriptor.value;
    if (fn.length !== 0) {
      console.warn("Memoize should only be used in functions with zero parameters");
    }
  } else if (typeof descriptor.get === "function") {
    fnKey = "get";
    fn = descriptor.get;
  }
  if (!fn) {
    throw new Error("not supported");
  }
  const memoizeKey = `$memoize$${key}`;
  descriptor[fnKey] = function(...args) {
    if (!this.hasOwnProperty(memoizeKey)) {
      Object.defineProperty(this, memoizeKey, {
        configurable: false,
        enumerable: false,
        writable: false,
        value: fn.apply(this, args)
      });
    }
    return this[memoizeKey];
  };
}
function $qi(delay, reducer, initialValueProvider) {
  return createDecorator((fn, key) => {
    const timerKey = `$debounce$${key}`;
    const resultKey = `$debounce$result$${key}`;
    return function(...args) {
      if (!this[resultKey]) {
        this[resultKey] = initialValueProvider ? initialValueProvider() : void 0;
      }
      clearTimeout(this[timerKey]);
      if (reducer) {
        this[resultKey] = reducer(this[resultKey], ...args);
        args = [this[resultKey]];
      }
      this[timerKey] = setTimeout(() => {
        fn.apply(this, args);
        this[resultKey] = initialValueProvider ? initialValueProvider() : void 0;
      }, delay);
    };
  });
}

// out-build/vs/base/common/marshalling.js
function $ti(text2) {
  let data = JSON.parse(text2);
  data = $ui(data);
  return data;
}
function $ui(obj, depth = 0) {
  if (!obj || depth > 200) {
    return obj;
  }
  if (typeof obj === "object") {
    switch (obj.$mid) {
      case 1:
        return URI.revive(obj);
      case 2:
        return new RegExp(obj.source, obj.flags);
      case 17:
        return new Date(obj.source);
    }
    if (obj instanceof $6e || obj instanceof Uint8Array) {
      return obj;
    }
    if (Array.isArray(obj)) {
      for (let i = 0; i < obj.length; ++i) {
        obj[i] = $ui(obj[i], depth + 1);
      }
    } else {
      for (const key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {
          obj[key] = $ui(obj[key], depth + 1);
        }
      }
    }
  }
  return obj;
}

// out-build/vs/base/parts/ipc/common/ipc.js
var RequestType;
(function(RequestType2) {
  RequestType2[RequestType2["Promise"] = 100] = "Promise";
  RequestType2[RequestType2["PromiseCancel"] = 101] = "PromiseCancel";
  RequestType2[RequestType2["EventListen"] = 102] = "EventListen";
  RequestType2[RequestType2["EventDispose"] = 103] = "EventDispose";
})(RequestType || (RequestType = {}));
function requestTypeToStr(type) {
  switch (type) {
    case 100:
      return "req";
    case 101:
      return "cancel";
    case 102:
      return "subscribe";
    case 103:
      return "unsubscribe";
  }
}
var ResponseType;
(function(ResponseType2) {
  ResponseType2[ResponseType2["Initialize"] = 200] = "Initialize";
  ResponseType2[ResponseType2["PromiseSuccess"] = 201] = "PromiseSuccess";
  ResponseType2[ResponseType2["PromiseError"] = 202] = "PromiseError";
  ResponseType2[ResponseType2["PromiseErrorObj"] = 203] = "PromiseErrorObj";
  ResponseType2[ResponseType2["EventFire"] = 204] = "EventFire";
})(ResponseType || (ResponseType = {}));
function responseTypeToStr(type) {
  switch (type) {
    case 200:
      return `init`;
    case 201:
      return `reply:`;
    case 202:
    case 203:
      return `replyErr:`;
    case 204:
      return `event:`;
  }
}
var State;
(function(State2) {
  State2[State2["Uninitialized"] = 0] = "Uninitialized";
  State2[State2["Idle"] = 1] = "Idle";
})(State || (State = {}));
function readIntVQL(reader) {
  let value = 0;
  for (let n = 0; ; n += 7) {
    const next = reader.read(1);
    value |= (next.buffer[0] & 127) << n;
    if (!(next.buffer[0] & 128)) {
      return value;
    }
  }
}
var vqlZero = createOneByteBuffer(0);
function writeInt32VQL(writer, value) {
  if (value === 0) {
    writer.write(vqlZero);
    return;
  }
  let len = 0;
  for (let v2 = value; v2 !== 0; v2 = v2 >>> 7) {
    len++;
  }
  const scratch = $6e.alloc(len);
  for (let i = 0; value !== 0; i++) {
    scratch.buffer[i] = value & 127;
    value = value >>> 7;
    if (value > 0) {
      scratch.buffer[i] |= 128;
    }
  }
  writer.write(scratch);
}
var $vi = class {
  constructor(b) {
    this.b = b;
    this.a = 0;
  }
  read(bytes) {
    const result = this.b.slice(this.a, this.a + bytes);
    this.a += result.byteLength;
    return result;
  }
};
var $wi = class {
  constructor() {
    this.a = [];
  }
  get buffer() {
    return $6e.concat(this.a);
  }
  write(buffer) {
    this.a.push(buffer);
  }
};
var DataType;
(function(DataType2) {
  DataType2[DataType2["Undefined"] = 0] = "Undefined";
  DataType2[DataType2["String"] = 1] = "String";
  DataType2[DataType2["Buffer"] = 2] = "Buffer";
  DataType2[DataType2["VSBuffer"] = 3] = "VSBuffer";
  DataType2[DataType2["Array"] = 4] = "Array";
  DataType2[DataType2["Object"] = 5] = "Object";
  DataType2[DataType2["Int"] = 6] = "Int";
})(DataType || (DataType = {}));
function createOneByteBuffer(value) {
  const result = $6e.alloc(1);
  result.writeUInt8(value, 0);
  return result;
}
var BufferPresets = {
  Undefined: createOneByteBuffer(DataType.Undefined),
  String: createOneByteBuffer(DataType.String),
  Buffer: createOneByteBuffer(DataType.Buffer),
  VSBuffer: createOneByteBuffer(DataType.VSBuffer),
  Array: createOneByteBuffer(DataType.Array),
  Object: createOneByteBuffer(DataType.Object),
  Uint: createOneByteBuffer(DataType.Int)
};
var hasBuffer2 = typeof Buffer !== "undefined";
function $xi(writer, data) {
  if (typeof data === "undefined") {
    writer.write(BufferPresets.Undefined);
  } else if (typeof data === "string") {
    const buffer = $6e.fromString(data);
    writer.write(BufferPresets.String);
    writeInt32VQL(writer, buffer.byteLength);
    writer.write(buffer);
  } else if (hasBuffer2 && Buffer.isBuffer(data)) {
    const buffer = $6e.wrap(data);
    writer.write(BufferPresets.Buffer);
    writeInt32VQL(writer, buffer.byteLength);
    writer.write(buffer);
  } else if (data instanceof $6e) {
    writer.write(BufferPresets.VSBuffer);
    writeInt32VQL(writer, data.byteLength);
    writer.write(data);
  } else if (Array.isArray(data)) {
    writer.write(BufferPresets.Array);
    writeInt32VQL(writer, data.length);
    for (const el of data) {
      $xi(writer, el);
    }
  } else if (typeof data === "number" && (data | 0) === data) {
    writer.write(BufferPresets.Uint);
    writeInt32VQL(writer, data);
  } else {
    const buffer = $6e.fromString(JSON.stringify(data));
    writer.write(BufferPresets.Object);
    writeInt32VQL(writer, buffer.byteLength);
    writer.write(buffer);
  }
}
function $yi(reader) {
  const type = reader.read(1).readUInt8(0);
  switch (type) {
    case DataType.Undefined:
      return void 0;
    case DataType.String:
      return reader.read(readIntVQL(reader)).toString();
    case DataType.Buffer:
      return reader.read(readIntVQL(reader)).buffer;
    case DataType.VSBuffer:
      return reader.read(readIntVQL(reader));
    case DataType.Array: {
      const length = readIntVQL(reader);
      const result = [];
      for (let i = 0; i < length; i++) {
        result.push($yi(reader));
      }
      return result;
    }
    case DataType.Object:
      return JSON.parse(reader.read(readIntVQL(reader)).toString());
    case DataType.Int:
      return readIntVQL(reader);
  }
}
var $zi = class {
  constructor(h, j, k = null, l = 1e3) {
    this.h = h;
    this.j = j;
    this.k = k;
    this.l = l;
    this.b = /* @__PURE__ */ new Map();
    this.d = /* @__PURE__ */ new Map();
    this.g = /* @__PURE__ */ new Map();
    this.f = this.h.onMessage((msg) => this.q(msg));
    this.m({
      type: 200
      /* ResponseType.Initialize */
    });
  }
  registerChannel(channelName, channel) {
    this.b.set(channelName, channel);
    setTimeout(() => this.w(channelName), 0);
  }
  m(response) {
    switch (response.type) {
      case 200: {
        const msgLength = this.o([response.type]);
        this.k?.logOutgoing(msgLength, 0, 1, responseTypeToStr(response.type));
        return;
      }
      case 201:
      case 202:
      case 204:
      case 203: {
        const msgLength = this.o([response.type, response.id], response.data);
        this.k?.logOutgoing(msgLength, response.id, 1, responseTypeToStr(response.type), response.data);
        return;
      }
    }
  }
  o(header, body = void 0) {
    const writer = new $wi();
    $xi(writer, header);
    $xi(writer, body);
    return this.p(writer.buffer);
  }
  p(message) {
    try {
      this.h.send(message);
      return message.byteLength;
    } catch (err) {
      return 0;
    }
  }
  q(message) {
    const reader = new $vi(message);
    const header = $yi(reader);
    const body = $yi(reader);
    const type = header[0];
    switch (type) {
      case 100:
        this.k?.logIncoming(message.byteLength, header[1], 1, `${requestTypeToStr(type)}: ${header[2]}.${header[3]}`, body);
        return this.s({ type, id: header[1], channelName: header[2], name: header[3], arg: body });
      case 102:
        this.k?.logIncoming(message.byteLength, header[1], 1, `${requestTypeToStr(type)}: ${header[2]}.${header[3]}`, body);
        return this.t({ type, id: header[1], channelName: header[2], name: header[3], arg: body });
      case 101:
        this.k?.logIncoming(message.byteLength, header[1], 1, `${requestTypeToStr(type)}`);
        return this.u({ type, id: header[1] });
      case 103:
        this.k?.logIncoming(message.byteLength, header[1], 1, `${requestTypeToStr(type)}`);
        return this.u({ type, id: header[1] });
    }
  }
  s(request) {
    const channel = this.b.get(request.channelName);
    if (!channel) {
      this.v(request);
      return;
    }
    const cancellationTokenSource = new $Oe();
    let promise;
    try {
      promise = channel.call(this.j, request.name, request.arg, cancellationTokenSource.token);
    } catch (err) {
      promise = Promise.reject(err);
    }
    const id2 = request.id;
    promise.then((data) => {
      this.m({
        id: id2,
        data,
        type: 201
        /* ResponseType.PromiseSuccess */
      });
    }, (err) => {
      if (err instanceof Error) {
        this.m({
          id: id2,
          data: {
            message: err.message,
            name: err.name,
            stack: err.stack ? err.stack.split("\n") : void 0
          },
          type: 202
          /* ResponseType.PromiseError */
        });
      } else {
        this.m({
          id: id2,
          data: err,
          type: 203
          /* ResponseType.PromiseErrorObj */
        });
      }
    }).finally(() => {
      disposable.dispose();
      this.d.delete(request.id);
    });
    const disposable = $7c(() => cancellationTokenSource.cancel());
    this.d.set(request.id, disposable);
  }
  t(request) {
    const channel = this.b.get(request.channelName);
    if (!channel) {
      this.v(request);
      return;
    }
    const id2 = request.id;
    const event = channel.listen(this.j, request.name, request.arg);
    const disposable = event((data) => this.m({
      id: id2,
      data,
      type: 204
      /* ResponseType.EventFire */
    }));
    this.d.set(request.id, disposable);
  }
  u(request) {
    const disposable = this.d.get(request.id);
    if (disposable) {
      disposable.dispose();
      this.d.delete(request.id);
    }
  }
  v(request) {
    let pendingRequests = this.g.get(request.channelName);
    if (!pendingRequests) {
      pendingRequests = [];
      this.g.set(request.channelName, pendingRequests);
    }
    const timer = setTimeout(() => {
      console.error(`Unknown channel: ${request.channelName}`);
      if (request.type === 100) {
        this.m({
          id: request.id,
          data: { name: "Unknown channel", message: `Channel name '${request.channelName}' timed out after ${this.l}ms`, stack: void 0 },
          type: 202
          /* ResponseType.PromiseError */
        });
      }
    }, this.l);
    pendingRequests.push({ request, timeoutTimer: timer });
  }
  w(channelName) {
    const requests = this.g.get(channelName);
    if (requests) {
      for (const request of requests) {
        clearTimeout(request.timeoutTimer);
        switch (request.request.type) {
          case 100:
            this.s(request.request);
            break;
          case 102:
            this.t(request.request);
            break;
        }
      }
      this.g.delete(channelName);
    }
  }
  dispose() {
    if (this.f) {
      this.f.dispose();
      this.f = null;
    }
    $4c(this.d.values());
    this.d.clear();
  }
};
var RequestInitiator;
(function(RequestInitiator2) {
  RequestInitiator2[RequestInitiator2["LocalSide"] = 0] = "LocalSide";
  RequestInitiator2[RequestInitiator2["OtherSide"] = 1] = "OtherSide";
})(RequestInitiator || (RequestInitiator = {}));
var $Ai = class {
  constructor(l, logger = null) {
    this.l = l;
    this.a = false;
    this.b = State.Uninitialized;
    this.d = /* @__PURE__ */ new Set();
    this.f = /* @__PURE__ */ new Map();
    this.g = 0;
    this.k = new $Ce();
    this.onDidInitialize = this.k.event;
    this.h = this.l.onMessage((msg) => this.s(msg));
    this.j = logger;
  }
  getChannel(channelName) {
    const that = this;
    return {
      call(command, arg, cancellationToken) {
        if (that.a) {
          return Promise.reject(new $fb());
        }
        return that.m(channelName, command, arg, cancellationToken);
      },
      listen(event, arg) {
        if (that.a) {
          return Event.None;
        }
        return that.o(channelName, event, arg);
      }
    };
  }
  m(channelName, name, arg, cancellationToken = CancellationToken.None) {
    const id2 = this.g++;
    const type = 100;
    const request = { id: id2, type, channelName, name, arg };
    if (cancellationToken.isCancellationRequested) {
      return Promise.reject(new $fb());
    }
    let disposable;
    const result = new Promise((c, e) => {
      if (cancellationToken.isCancellationRequested) {
        return e(new $fb());
      }
      const doRequest = () => {
        const handler = (response) => {
          switch (response.type) {
            case 201:
              this.f.delete(id2);
              c(response.data);
              break;
            case 202: {
              this.f.delete(id2);
              const error = new Error(response.data.message);
              error.stack = Array.isArray(response.data.stack) ? response.data.stack.join("\n") : response.data.stack;
              error.name = response.data.name;
              e(error);
              break;
            }
            case 203:
              this.f.delete(id2);
              e(response.data);
              break;
          }
        };
        this.f.set(id2, handler);
        this.p(request);
      };
      let uninitializedPromise = null;
      if (this.b === State.Idle) {
        doRequest();
      } else {
        uninitializedPromise = $Kh((_) => this.u());
        uninitializedPromise.then(() => {
          uninitializedPromise = null;
          doRequest();
        });
      }
      const cancel = () => {
        if (uninitializedPromise) {
          uninitializedPromise.cancel();
          uninitializedPromise = null;
        } else {
          this.p({
            id: id2,
            type: 101
            /* RequestType.PromiseCancel */
          });
        }
        e(new $fb());
      };
      const cancellationTokenListener = cancellationToken.onCancellationRequested(cancel);
      disposable = $6c($7c(cancel), cancellationTokenListener);
      this.d.add(disposable);
    });
    return result.finally(() => {
      disposable.dispose();
      this.d.delete(disposable);
    });
  }
  o(channelName, name, arg) {
    const id2 = this.g++;
    const type = 102;
    const request = { id: id2, type, channelName, name, arg };
    let uninitializedPromise = null;
    const emitter = new $Ce({
      onWillAddFirstListener: () => {
        uninitializedPromise = $Kh((_) => this.u());
        uninitializedPromise.then(() => {
          uninitializedPromise = null;
          this.d.add(emitter);
          this.p(request);
        });
      },
      onDidRemoveLastListener: () => {
        if (uninitializedPromise) {
          uninitializedPromise.cancel();
          uninitializedPromise = null;
        } else {
          this.d.delete(emitter);
          this.p({
            id: id2,
            type: 103
            /* RequestType.EventDispose */
          });
        }
      }
    });
    const handler = (res) => emitter.fire(res.data);
    this.f.set(id2, handler);
    return emitter.event;
  }
  p(request) {
    switch (request.type) {
      case 100:
      case 102: {
        const msgLength = this.q([request.type, request.id, request.channelName, request.name], request.arg);
        this.j?.logOutgoing(msgLength, request.id, 0, `${requestTypeToStr(request.type)}: ${request.channelName}.${request.name}`, request.arg);
        return;
      }
      case 101:
      case 103: {
        const msgLength = this.q([request.type, request.id]);
        this.j?.logOutgoing(msgLength, request.id, 0, requestTypeToStr(request.type));
        return;
      }
    }
  }
  q(header, body = void 0) {
    const writer = new $wi();
    $xi(writer, header);
    $xi(writer, body);
    return this.r(writer.buffer);
  }
  r(message) {
    try {
      this.l.send(message);
      return message.byteLength;
    } catch (err) {
      return 0;
    }
  }
  s(message) {
    const reader = new $vi(message);
    const header = $yi(reader);
    const body = $yi(reader);
    const type = header[0];
    switch (type) {
      case 200:
        this.j?.logIncoming(message.byteLength, 0, 0, responseTypeToStr(type));
        return this.t({ type: header[0] });
      case 201:
      case 202:
      case 204:
      case 203:
        this.j?.logIncoming(message.byteLength, header[1], 0, responseTypeToStr(type), body);
        return this.t({ type: header[0], id: header[1], data: body });
    }
  }
  t(response) {
    if (response.type === 200) {
      this.b = State.Idle;
      this.k.fire();
      return;
    }
    const handler = this.f.get(response.id);
    handler?.(response);
  }
  get onDidInitializePromise() {
    return Event.toPromise(this.onDidInitialize);
  }
  u() {
    if (this.b === State.Idle) {
      return Promise.resolve();
    } else {
      return this.onDidInitializePromise;
    }
  }
  dispose() {
    this.a = true;
    if (this.h) {
      this.h.dispose();
      this.h = null;
    }
    $4c(this.d.values());
    this.d.clear();
  }
};
__decorate([
  $pi
], $Ai.prototype, "onDidInitializePromise", null);
var $Ci = class {
  constructor(protocol, ctx, ipcLogger = null) {
    const writer = new $wi();
    $xi(writer, ctx);
    protocol.send(writer.buffer);
    this.a = new $Ai(protocol, ipcLogger);
    this.d = new $zi(protocol, ctx, ipcLogger);
  }
  getChannel(channelName) {
    return this.a.getChannel(channelName);
  }
  registerChannel(channelName, channel) {
    this.d.registerChannel(channelName, channel);
  }
  dispose() {
    this.a.dispose();
    this.d.dispose();
  }
};
var ProxyChannel;
(function(ProxyChannel2) {
  function fromService(service, disposables, options2) {
    const handler = service;
    const disableMarshalling = options2 && options2.disableMarshalling;
    const mapEventNameToEvent = /* @__PURE__ */ new Map();
    for (const key in handler) {
      if (propertyIsEvent(key)) {
        mapEventNameToEvent.set(key, Event.buffer(handler[key], true, void 0, disposables));
      }
    }
    return new class {
      listen(_, event, arg) {
        const eventImpl = mapEventNameToEvent.get(event);
        if (eventImpl) {
          return eventImpl;
        }
        const target = handler[event];
        if (typeof target === "function") {
          if (propertyIsDynamicEvent(event)) {
            return target.call(handler, arg);
          }
          if (propertyIsEvent(event)) {
            mapEventNameToEvent.set(event, Event.buffer(handler[event], true, void 0, disposables));
            return mapEventNameToEvent.get(event);
          }
        }
        throw new $ob(`Event not found: ${event}`);
      }
      call(_, command, args) {
        const target = handler[command];
        if (typeof target === "function") {
          if (!disableMarshalling && Array.isArray(args)) {
            for (let i = 0; i < args.length; i++) {
              args[i] = $ui(args[i]);
            }
          }
          let res = target.apply(handler, args);
          if (!(res instanceof Promise)) {
            res = Promise.resolve(res);
          }
          return res;
        }
        throw new $ob(`Method not found: ${command}`);
      }
    }();
  }
  ProxyChannel2.fromService = fromService;
  function toService(channel, options2) {
    const disableMarshalling = options2 && options2.disableMarshalling;
    return new Proxy({}, {
      get(_target, propKey) {
        if (typeof propKey === "string") {
          if (options2?.properties?.has(propKey)) {
            return options2.properties.get(propKey);
          }
          if (propertyIsDynamicEvent(propKey)) {
            return function(arg) {
              return channel.listen(propKey, arg);
            };
          }
          if (propertyIsEvent(propKey)) {
            return channel.listen(propKey);
          }
          return async function(...args) {
            let methodArgs;
            if (options2 && !$Fg(options2.context)) {
              methodArgs = [options2.context, ...args];
            } else {
              methodArgs = args;
            }
            const result = await channel.call(propKey, methodArgs);
            if (!disableMarshalling) {
              return $ui(result);
            }
            return result;
          };
        }
        throw new $ob(`Property not found: ${String(propKey)}`);
      }
    });
  }
  ProxyChannel2.toService = toService;
  function propertyIsEvent(name) {
    return name[0] === "o" && name[1] === "n" && $Wf(name.charCodeAt(2));
  }
  function propertyIsDynamicEvent(name) {
    return /^onDynamic/.test(name) && $Wf(name.charCodeAt(9));
  }
})(ProxyChannel || (ProxyChannel = {}));

// out-build/vs/base/parts/ipc/common/ipc.electron.js
var $RY = class {
  constructor(a, onMessage) {
    this.a = a;
    this.onMessage = onMessage;
  }
  send(message) {
    try {
      this.a.send("vscode:message", message.buffer);
    } catch (e) {
    }
  }
  disconnect() {
    this.a.send("vscode:disconnect", null);
  }
};

// out-build/vs/base/parts/sandbox/electron-sandbox/globals.js
var vscodeGlobal2 = globalThis.vscode;
var $X = vscodeGlobal2.ipcRenderer;
var $Y = vscodeGlobal2.ipcMessagePort;
var $Z = vscodeGlobal2.webFrame;
var $1 = vscodeGlobal2.process;
var $2 = vscodeGlobal2.context;
var $3 = vscodeGlobal2.webUtils;

// out-build/vs/base/parts/ipc/electron-sandbox/ipc.electron.js
var $VY = class _$VY extends $Ci {
  static f() {
    const onMessage = Event.fromNodeEventEmitter($X, "vscode:message", (_, message) => $6e.wrap(message));
    $X.send("vscode:hello");
    return new $RY($X, onMessage);
  }
  constructor(id2) {
    const protocol = _$VY.f();
    super(protocol, id2);
    this.b = protocol;
  }
  dispose() {
    this.b.disconnect();
    super.dispose();
  }
};

// out-build/vs/platform/ipc/electron-sandbox/mainProcessService.js
var $kkc = class extends $9c {
  constructor(windowId) {
    super();
    this.a = this.B(new $VY(`window:${windowId}`));
  }
  getChannel(channelName) {
    return this.a.getChannel(channelName);
  }
  registerChannel(channelName, channel) {
    this.a.registerChannel(channelName, channel);
  }
};

// out-build/vs/platform/ipc/electron-sandbox/services.js
var RemoteServiceStub = class {
  constructor(channelName, options2, remote, instantiationService) {
    const channel = remote.getChannel(channelName);
    if (isRemoteServiceWithChannelClientOptions(options2)) {
      return instantiationService.createInstance(new $Ui(options2.channelClientCtor, [channel]));
    }
    return ProxyChannel.toService(channel, options2?.proxyOptions);
  }
};
function isRemoteServiceWithChannelClientOptions(obj) {
  const candidate = obj;
  return !!candidate?.channelClientCtor;
}
var MainProcessRemoteServiceStub = class MainProcessRemoteServiceStub2 extends RemoteServiceStub {
  constructor(channelName, options2, ipcService, instantiationService) {
    super(channelName, options2, ipcService, instantiationService);
  }
};
MainProcessRemoteServiceStub = __decorate([
  __param(2, $ikc),
  __param(3, $Wi)
], MainProcessRemoteServiceStub);
function $Qoc(id2, channelName, options2) {
  $at(id2, new $Ui(MainProcessRemoteServiceStub, [channelName, options2], true));
}
var $Roc = $Xi("sharedProcessService");
var SharedProcessRemoteServiceStub = class SharedProcessRemoteServiceStub2 extends RemoteServiceStub {
  constructor(channelName, options2, ipcService, instantiationService) {
    super(channelName, options2, ipcService, instantiationService);
  }
};
SharedProcessRemoteServiceStub = __decorate([
  __param(2, $Roc),
  __param(3, $Wi)
], SharedProcessRemoteServiceStub);

// out-build/vs/platform/native/common/native.js
var $3ic = $Xi("nativeHostService");

// out-build/vs/platform/native/common/nativeHostService.js
var $lkc = class $lkc2 {
  constructor(windowId, mainProcessService) {
    this.windowId = windowId;
    return ProxyChannel.toService(mainProcessService.getChannel("nativeHost"), {
      context: windowId,
      properties: (() => {
        const properties = /* @__PURE__ */ new Map();
        properties.set("windowId", windowId);
        return properties;
      })()
    });
  }
};
$lkc = __decorate([
  __param(1, $ikc)
], $lkc);

// out-build/vs/workbench/contrib/issue/browser/issueReporterPage.js
var sendSystemInfoLabel = $yf(localize(7201, null));
var sendProcessInfoLabel = $yf(localize(7202, null));
var sendWorkspaceInfoLabel = $yf(localize(7203, null));
var sendExtensionsLabel = $yf(localize(7204, null));
var sendExperimentsLabel = $yf(localize(7205, null));
var sendExtensionData = $yf(localize(7206, null));
var reviewGuidanceLabel = localize(
  // intentionally not escaped because of its embedded tags
  7207,
  null
);
var issueReporterPage_default = () => `
<div class="issue-reporter" id="issue-reporter">
	<div id="english" class="input-group hidden">${$yf(localize(7208, null))}</div>

	<div id="review-guidance-help-text" class="input-group">${reviewGuidanceLabel}</div>

	<div class="section">
		<div class="input-group">
			<label class="inline-label" for="issue-type">${$yf(localize(7209, null))}</label>
			<select id="issue-type" class="inline-form-control">
				<!-- To be dynamically filled -->
			</select>
		</div>

		<div class="input-group" id="problem-source">
			<label class="inline-label" for="issue-source">${$yf(localize(7210, null))} <span class="required-input">*</span></label>
			<select id="issue-source" class="inline-form-control" required>
				<!-- To be dynamically filled -->
			</select>
			<div id="issue-source-empty-error" class="validation-error hidden" role="alert">${$yf(localize(7211, null))}</div>
			<div id="problem-source-help-text" class="instructions hidden">${$yf(localize(7212, null)).replace("{0}", () => `<span tabIndex=0 role="button" id="disableExtensions" class="workbenchCommand">${$yf(localize(7213, null))}</span>`)}
			</div>

			<div id="extension-selection">
				<label class="inline-label" for="extension-selector">${$yf(localize(7214, null))} <span class="required-input">*</span></label>
				<select id="extension-selector" class="inline-form-control">
					<!-- To be dynamically filled -->
				</select>
				<div id="extension-selection-validation-error" class="validation-error hidden" role="alert">${$yf(localize(7215, null)).replace("{0}", () => `<span tabIndex=0 role="button" id="extensionBugsLink" class="workbenchCommand"><!-- To be dynamically filled --></span>`)}</div>
				<div id="extension-selection-validation-error-no-url" class="validation-error hidden" role="alert">
					${$yf(localize(7216, null))}
				</div>
			</div>
		</div>

		<div id="issue-title-container" class="input-group">
			<label class="inline-label" for="issue-title">${$yf(localize(7217, null))} <span class="required-input">*</span></label>
			<input id="issue-title" type="text" class="inline-form-control" placeholder="${$yf(localize(7218, null))}" required>
			<div id="issue-title-empty-error" class="validation-error hidden" role="alert">${$yf(localize(7219, null))}</div>
			<div id="issue-title-length-validation-error" class="validation-error hidden" role="alert">${$yf(localize(7220, null))}</div>
			<small id="similar-issues">
				<!-- To be dynamically filled -->
			</small>
		</div>

	</div>

	<div class="input-group description-section">
		<label for="description" id="issue-description-label">
			<!-- To be dynamically filled -->
		</label>
		<div class="instructions" id="issue-description-subtitle">
			<!-- To be dynamically filled -->
		</div>
		<div class="block-info-text">
			<textarea name="description" id="description" placeholder="${$yf(localize(7221, null))}" required></textarea>
		</div>
		<div id="description-empty-error" class="validation-error hidden" role="alert">${$yf(localize(7222, null))}</div>
		<div id="description-short-error" class="validation-error hidden" role="alert">${$yf(localize(7223, null))}</div>
	</div>

	<div class="system-info" id="block-container">
		<div class="block block-extension-data">
			<input class="send-extension-data" aria-label="${sendExtensionData}" type="checkbox" id="includeExtensionData" checked/>
			<label class="extension-caption" id="extension-caption" for="includeExtensionData">
				${sendExtensionData}
				<span id="ext-loading" hidden></span>
				<span class="ext-parens" hidden>(</span><a href="#" class="showInfo" id="extension-id">${$yf(localize(7224, null))}</a><span class="ext-parens" hidden>)</span>
			</label>
			<pre class="block-info" id="extension-data" placeholder="${$yf(localize(7225, null))}" style="white-space: pre-wrap; user-select: text;">
				<!-- To be dynamically filled -->
			</pre>
		</div>

		<div class="block block-system">
			<input class="sendData" aria-label="${sendSystemInfoLabel}" type="checkbox" id="includeSystemInfo" checked/>
			<label class="caption" for="includeSystemInfo">
				${sendSystemInfoLabel}
				(<a href="#" class="showInfo">${$yf(localize(7226, null))}</a>)
			</label>
			<div class="block-info hidden">
				<!-- To be dynamically filled -->
		</div>
		</div>
		<div class="block block-process">
			<input class="sendData" aria-label="${sendProcessInfoLabel}" type="checkbox" id="includeProcessInfo" checked/>
			<label class="caption" for="includeProcessInfo">
				${sendProcessInfoLabel}
				(<a href="#" class="showInfo">${$yf(localize(7227, null))}</a>)
			</label>
			<pre class="block-info hidden">
				<code>
				<!-- To be dynamically filled -->
				</code>
			</pre>
		</div>
		<div class="block block-workspace">
			<input class="sendData" aria-label="${sendWorkspaceInfoLabel}" type="checkbox" id="includeWorkspaceInfo" checked/>
			<label class="caption" for="includeWorkspaceInfo">
				${sendWorkspaceInfoLabel}
				(<a href="#" class="showInfo">${$yf(localize(7228, null))}</a>)
			</label>
			<pre id="systemInfo" class="block-info hidden">
				<code>
				<!-- To be dynamically filled -->
				</code>
			</pre>
		</div>
		<div class="block block-extensions">
			<input class="sendData" aria-label="${sendExtensionsLabel}" type="checkbox" id="includeExtensions" checked/>
			<label class="caption" for="includeExtensions">
				${sendExtensionsLabel}
				(<a href="#" class="showInfo">${$yf(localize(7229, null))}</a>)
			</label>
			<div id="systemInfo" class="block-info hidden">
				<!-- To be dynamically filled -->
			</div>
		</div>
		<div class="block block-experiments">
			<input class="sendData" aria-label="${sendExperimentsLabel}" type="checkbox" id="includeExperiments" checked/>
			<label class="caption" for="includeExperiments">
				${sendExperimentsLabel}
				(<a href="#" class="showInfo">${$yf(localize(7230, null))}</a>)
			</label>
			<pre class="block-info hidden">
				<!-- To be dynamically filled -->
			</pre>
		</div>
	</div>
</div>`;

// out-build/vs/platform/issue/common/issue.js
var OldIssueType;
(function(OldIssueType2) {
  OldIssueType2[OldIssueType2["Bug"] = 0] = "Bug";
  OldIssueType2[OldIssueType2["PerformanceIssue"] = 1] = "PerformanceIssue";
  OldIssueType2[OldIssueType2["FeatureRequest"] = 2] = "FeatureRequest";
})(OldIssueType || (OldIssueType = {}));
var IssueSource;
(function(IssueSource3) {
  IssueSource3["VSCode"] = "vscode";
  IssueSource3["Extension"] = "extension";
  IssueSource3["Marketplace"] = "marketplace";
})(IssueSource || (IssueSource = {}));
var $oob = $Xi("issueService");
var $pob = $Xi("processService");

// out-build/vs/base/browser/event.js
var $JV = class {
  get event() {
    return this.a.event;
  }
  constructor(element, type, useCapture) {
    const fn = (e) => this.a.fire(e);
    this.a = new $Ce({
      onWillAddFirstListener: () => element.addEventListener(type, fn, useCapture),
      onDidRemoveLastListener: () => element.removeEventListener(type, fn, useCapture)
    });
  }
  dispose() {
    this.a.dispose();
  }
};

// out-build/vs/base/browser/formattedTextRenderer.js
function $IV(options2) {
  const tagName = options2.inline ? "span" : "div";
  const element = document.createElement(tagName);
  if (options2.className) {
    element.className = options2.className;
  }
  return element;
}
var FormatType;
(function(FormatType2) {
  FormatType2[FormatType2["Invalid"] = 0] = "Invalid";
  FormatType2[FormatType2["Root"] = 1] = "Root";
  FormatType2[FormatType2["Text"] = 2] = "Text";
  FormatType2[FormatType2["Bold"] = 3] = "Bold";
  FormatType2[FormatType2["Italics"] = 4] = "Italics";
  FormatType2[FormatType2["Action"] = 5] = "Action";
  FormatType2[FormatType2["ActionClose"] = 6] = "ActionClose";
  FormatType2[FormatType2["Code"] = 7] = "Code";
  FormatType2[FormatType2["NewLine"] = 8] = "NewLine";
})(FormatType || (FormatType = {}));

// out-build/vs/base/common/codiconsUtil.js
var _codiconFontCharacters = /* @__PURE__ */ Object.create(null);
function $fk(id2, fontCharacter) {
  if ($wg(fontCharacter)) {
    const val = _codiconFontCharacters[fontCharacter];
    if (val === void 0) {
      throw new Error(`${id2} references an unknown codicon: ${fontCharacter}`);
    }
    fontCharacter = val;
  }
  _codiconFontCharacters[id2] = fontCharacter;
  return { id: id2 };
}
function $gk() {
  return _codiconFontCharacters;
}

// out-build/vs/base/common/codiconsLibrary.js
var $hk = {
  add: $fk("add", 6e4),
  plus: $fk("plus", 6e4),
  gistNew: $fk("gist-new", 6e4),
  repoCreate: $fk("repo-create", 6e4),
  lightbulb: $fk("lightbulb", 60001),
  lightBulb: $fk("light-bulb", 60001),
  repo: $fk("repo", 60002),
  repoDelete: $fk("repo-delete", 60002),
  gistFork: $fk("gist-fork", 60003),
  repoForked: $fk("repo-forked", 60003),
  gitPullRequest: $fk("git-pull-request", 60004),
  gitPullRequestAbandoned: $fk("git-pull-request-abandoned", 60004),
  recordKeys: $fk("record-keys", 60005),
  keyboard: $fk("keyboard", 60005),
  tag: $fk("tag", 60006),
  gitPullRequestLabel: $fk("git-pull-request-label", 60006),
  tagAdd: $fk("tag-add", 60006),
  tagRemove: $fk("tag-remove", 60006),
  person: $fk("person", 60007),
  personFollow: $fk("person-follow", 60007),
  personOutline: $fk("person-outline", 60007),
  personFilled: $fk("person-filled", 60007),
  gitBranch: $fk("git-branch", 60008),
  gitBranchCreate: $fk("git-branch-create", 60008),
  gitBranchDelete: $fk("git-branch-delete", 60008),
  sourceControl: $fk("source-control", 60008),
  mirror: $fk("mirror", 60009),
  mirrorPublic: $fk("mirror-public", 60009),
  star: $fk("star", 60010),
  starAdd: $fk("star-add", 60010),
  starDelete: $fk("star-delete", 60010),
  starEmpty: $fk("star-empty", 60010),
  comment: $fk("comment", 60011),
  commentAdd: $fk("comment-add", 60011),
  alert: $fk("alert", 60012),
  warning: $fk("warning", 60012),
  search: $fk("search", 60013),
  searchSave: $fk("search-save", 60013),
  logOut: $fk("log-out", 60014),
  signOut: $fk("sign-out", 60014),
  logIn: $fk("log-in", 60015),
  signIn: $fk("sign-in", 60015),
  eye: $fk("eye", 60016),
  eyeUnwatch: $fk("eye-unwatch", 60016),
  eyeWatch: $fk("eye-watch", 60016),
  circleFilled: $fk("circle-filled", 60017),
  primitiveDot: $fk("primitive-dot", 60017),
  closeDirty: $fk("close-dirty", 60017),
  debugBreakpoint: $fk("debug-breakpoint", 60017),
  debugBreakpointDisabled: $fk("debug-breakpoint-disabled", 60017),
  debugHint: $fk("debug-hint", 60017),
  terminalDecorationSuccess: $fk("terminal-decoration-success", 60017),
  primitiveSquare: $fk("primitive-square", 60018),
  edit: $fk("edit", 60019),
  pencil: $fk("pencil", 60019),
  info: $fk("info", 60020),
  issueOpened: $fk("issue-opened", 60020),
  gistPrivate: $fk("gist-private", 60021),
  gitForkPrivate: $fk("git-fork-private", 60021),
  lock: $fk("lock", 60021),
  mirrorPrivate: $fk("mirror-private", 60021),
  close: $fk("close", 60022),
  removeClose: $fk("remove-close", 60022),
  x: $fk("x", 60022),
  repoSync: $fk("repo-sync", 60023),
  sync: $fk("sync", 60023),
  clone: $fk("clone", 60024),
  desktopDownload: $fk("desktop-download", 60024),
  beaker: $fk("beaker", 60025),
  microscope: $fk("microscope", 60025),
  vm: $fk("vm", 60026),
  deviceDesktop: $fk("device-desktop", 60026),
  file: $fk("file", 60027),
  fileText: $fk("file-text", 60027),
  more: $fk("more", 60028),
  ellipsis: $fk("ellipsis", 60028),
  kebabHorizontal: $fk("kebab-horizontal", 60028),
  mailReply: $fk("mail-reply", 60029),
  reply: $fk("reply", 60029),
  organization: $fk("organization", 60030),
  organizationFilled: $fk("organization-filled", 60030),
  organizationOutline: $fk("organization-outline", 60030),
  newFile: $fk("new-file", 60031),
  fileAdd: $fk("file-add", 60031),
  newFolder: $fk("new-folder", 60032),
  fileDirectoryCreate: $fk("file-directory-create", 60032),
  trash: $fk("trash", 60033),
  trashcan: $fk("trashcan", 60033),
  history: $fk("history", 60034),
  clock: $fk("clock", 60034),
  folder: $fk("folder", 60035),
  fileDirectory: $fk("file-directory", 60035),
  symbolFolder: $fk("symbol-folder", 60035),
  logoGithub: $fk("logo-github", 60036),
  markGithub: $fk("mark-github", 60036),
  github: $fk("github", 60036),
  terminal: $fk("terminal", 60037),
  console: $fk("console", 60037),
  repl: $fk("repl", 60037),
  zap: $fk("zap", 60038),
  symbolEvent: $fk("symbol-event", 60038),
  error: $fk("error", 60039),
  stop: $fk("stop", 60039),
  variable: $fk("variable", 60040),
  symbolVariable: $fk("symbol-variable", 60040),
  array: $fk("array", 60042),
  symbolArray: $fk("symbol-array", 60042),
  symbolModule: $fk("symbol-module", 60043),
  symbolPackage: $fk("symbol-package", 60043),
  symbolNamespace: $fk("symbol-namespace", 60043),
  symbolObject: $fk("symbol-object", 60043),
  symbolMethod: $fk("symbol-method", 60044),
  symbolFunction: $fk("symbol-function", 60044),
  symbolConstructor: $fk("symbol-constructor", 60044),
  symbolBoolean: $fk("symbol-boolean", 60047),
  symbolNull: $fk("symbol-null", 60047),
  symbolNumeric: $fk("symbol-numeric", 60048),
  symbolNumber: $fk("symbol-number", 60048),
  symbolStructure: $fk("symbol-structure", 60049),
  symbolStruct: $fk("symbol-struct", 60049),
  symbolParameter: $fk("symbol-parameter", 60050),
  symbolTypeParameter: $fk("symbol-type-parameter", 60050),
  symbolKey: $fk("symbol-key", 60051),
  symbolText: $fk("symbol-text", 60051),
  symbolReference: $fk("symbol-reference", 60052),
  goToFile: $fk("go-to-file", 60052),
  symbolEnum: $fk("symbol-enum", 60053),
  symbolValue: $fk("symbol-value", 60053),
  symbolRuler: $fk("symbol-ruler", 60054),
  symbolUnit: $fk("symbol-unit", 60054),
  activateBreakpoints: $fk("activate-breakpoints", 60055),
  archive: $fk("archive", 60056),
  arrowBoth: $fk("arrow-both", 60057),
  arrowDown: $fk("arrow-down", 60058),
  arrowLeft: $fk("arrow-left", 60059),
  arrowRight: $fk("arrow-right", 60060),
  arrowSmallDown: $fk("arrow-small-down", 60061),
  arrowSmallLeft: $fk("arrow-small-left", 60062),
  arrowSmallRight: $fk("arrow-small-right", 60063),
  arrowSmallUp: $fk("arrow-small-up", 60064),
  arrowUp: $fk("arrow-up", 60065),
  bell: $fk("bell", 60066),
  bold: $fk("bold", 60067),
  book: $fk("book", 60068),
  bookmark: $fk("bookmark", 60069),
  debugBreakpointConditionalUnverified: $fk("debug-breakpoint-conditional-unverified", 60070),
  debugBreakpointConditional: $fk("debug-breakpoint-conditional", 60071),
  debugBreakpointConditionalDisabled: $fk("debug-breakpoint-conditional-disabled", 60071),
  debugBreakpointDataUnverified: $fk("debug-breakpoint-data-unverified", 60072),
  debugBreakpointData: $fk("debug-breakpoint-data", 60073),
  debugBreakpointDataDisabled: $fk("debug-breakpoint-data-disabled", 60073),
  debugBreakpointLogUnverified: $fk("debug-breakpoint-log-unverified", 60074),
  debugBreakpointLog: $fk("debug-breakpoint-log", 60075),
  debugBreakpointLogDisabled: $fk("debug-breakpoint-log-disabled", 60075),
  briefcase: $fk("briefcase", 60076),
  broadcast: $fk("broadcast", 60077),
  browser: $fk("browser", 60078),
  bug: $fk("bug", 60079),
  calendar: $fk("calendar", 60080),
  caseSensitive: $fk("case-sensitive", 60081),
  check: $fk("check", 60082),
  checklist: $fk("checklist", 60083),
  chevronDown: $fk("chevron-down", 60084),
  chevronLeft: $fk("chevron-left", 60085),
  chevronRight: $fk("chevron-right", 60086),
  chevronUp: $fk("chevron-up", 60087),
  chromeClose: $fk("chrome-close", 60088),
  chromeMaximize: $fk("chrome-maximize", 60089),
  chromeMinimize: $fk("chrome-minimize", 60090),
  chromeRestore: $fk("chrome-restore", 60091),
  circleOutline: $fk("circle-outline", 60092),
  circle: $fk("circle", 60092),
  debugBreakpointUnverified: $fk("debug-breakpoint-unverified", 60092),
  terminalDecorationIncomplete: $fk("terminal-decoration-incomplete", 60092),
  circleSlash: $fk("circle-slash", 60093),
  circuitBoard: $fk("circuit-board", 60094),
  clearAll: $fk("clear-all", 60095),
  clippy: $fk("clippy", 60096),
  closeAll: $fk("close-all", 60097),
  cloudDownload: $fk("cloud-download", 60098),
  cloudUpload: $fk("cloud-upload", 60099),
  code: $fk("code", 60100),
  collapseAll: $fk("collapse-all", 60101),
  colorMode: $fk("color-mode", 60102),
  commentDiscussion: $fk("comment-discussion", 60103),
  creditCard: $fk("credit-card", 60105),
  dash: $fk("dash", 60108),
  dashboard: $fk("dashboard", 60109),
  database: $fk("database", 60110),
  debugContinue: $fk("debug-continue", 60111),
  debugDisconnect: $fk("debug-disconnect", 60112),
  debugPause: $fk("debug-pause", 60113),
  debugRestart: $fk("debug-restart", 60114),
  debugStart: $fk("debug-start", 60115),
  debugStepInto: $fk("debug-step-into", 60116),
  debugStepOut: $fk("debug-step-out", 60117),
  debugStepOver: $fk("debug-step-over", 60118),
  debugStop: $fk("debug-stop", 60119),
  debug: $fk("debug", 60120),
  deviceCameraVideo: $fk("device-camera-video", 60121),
  deviceCamera: $fk("device-camera", 60122),
  deviceMobile: $fk("device-mobile", 60123),
  diffAdded: $fk("diff-added", 60124),
  diffIgnored: $fk("diff-ignored", 60125),
  diffModified: $fk("diff-modified", 60126),
  diffRemoved: $fk("diff-removed", 60127),
  diffRenamed: $fk("diff-renamed", 60128),
  diff: $fk("diff", 60129),
  diffSidebyside: $fk("diff-sidebyside", 60129),
  discard: $fk("discard", 60130),
  editorLayout: $fk("editor-layout", 60131),
  emptyWindow: $fk("empty-window", 60132),
  exclude: $fk("exclude", 60133),
  extensions: $fk("extensions", 60134),
  eyeClosed: $fk("eye-closed", 60135),
  fileBinary: $fk("file-binary", 60136),
  fileCode: $fk("file-code", 60137),
  fileMedia: $fk("file-media", 60138),
  filePdf: $fk("file-pdf", 60139),
  fileSubmodule: $fk("file-submodule", 60140),
  fileSymlinkDirectory: $fk("file-symlink-directory", 60141),
  fileSymlinkFile: $fk("file-symlink-file", 60142),
  fileZip: $fk("file-zip", 60143),
  files: $fk("files", 60144),
  filter: $fk("filter", 60145),
  flame: $fk("flame", 60146),
  foldDown: $fk("fold-down", 60147),
  foldUp: $fk("fold-up", 60148),
  fold: $fk("fold", 60149),
  folderActive: $fk("folder-active", 60150),
  folderOpened: $fk("folder-opened", 60151),
  gear: $fk("gear", 60152),
  gift: $fk("gift", 60153),
  gistSecret: $fk("gist-secret", 60154),
  gist: $fk("gist", 60155),
  gitCommit: $fk("git-commit", 60156),
  gitCompare: $fk("git-compare", 60157),
  compareChanges: $fk("compare-changes", 60157),
  gitMerge: $fk("git-merge", 60158),
  githubAction: $fk("github-action", 60159),
  githubAlt: $fk("github-alt", 60160),
  globe: $fk("globe", 60161),
  grabber: $fk("grabber", 60162),
  graph: $fk("graph", 60163),
  gripper: $fk("gripper", 60164),
  heart: $fk("heart", 60165),
  home: $fk("home", 60166),
  horizontalRule: $fk("horizontal-rule", 60167),
  hubot: $fk("hubot", 60168),
  inbox: $fk("inbox", 60169),
  issueReopened: $fk("issue-reopened", 60171),
  issues: $fk("issues", 60172),
  italic: $fk("italic", 60173),
  jersey: $fk("jersey", 60174),
  json: $fk("json", 60175),
  kebabVertical: $fk("kebab-vertical", 60176),
  key: $fk("key", 60177),
  law: $fk("law", 60178),
  lightbulbAutofix: $fk("lightbulb-autofix", 60179),
  linkExternal: $fk("link-external", 60180),
  link: $fk("link", 60181),
  listOrdered: $fk("list-ordered", 60182),
  listUnordered: $fk("list-unordered", 60183),
  liveShare: $fk("live-share", 60184),
  loading: $fk("loading", 60185),
  location: $fk("location", 60186),
  mailRead: $fk("mail-read", 60187),
  mail: $fk("mail", 60188),
  markdown: $fk("markdown", 60189),
  megaphone: $fk("megaphone", 60190),
  mention: $fk("mention", 60191),
  milestone: $fk("milestone", 60192),
  gitPullRequestMilestone: $fk("git-pull-request-milestone", 60192),
  mortarBoard: $fk("mortar-board", 60193),
  move: $fk("move", 60194),
  multipleWindows: $fk("multiple-windows", 60195),
  mute: $fk("mute", 60196),
  noNewline: $fk("no-newline", 60197),
  note: $fk("note", 60198),
  octoface: $fk("octoface", 60199),
  openPreview: $fk("open-preview", 60200),
  package: $fk("package", 60201),
  paintcan: $fk("paintcan", 60202),
  pin: $fk("pin", 60203),
  play: $fk("play", 60204),
  run: $fk("run", 60204),
  plug: $fk("plug", 60205),
  preserveCase: $fk("preserve-case", 60206),
  preview: $fk("preview", 60207),
  project: $fk("project", 60208),
  pulse: $fk("pulse", 60209),
  question: $fk("question", 60210),
  quote: $fk("quote", 60211),
  radioTower: $fk("radio-tower", 60212),
  reactions: $fk("reactions", 60213),
  references: $fk("references", 60214),
  refresh: $fk("refresh", 60215),
  regex: $fk("regex", 60216),
  remoteExplorer: $fk("remote-explorer", 60217),
  remote: $fk("remote", 60218),
  remove: $fk("remove", 60219),
  replaceAll: $fk("replace-all", 60220),
  replace: $fk("replace", 60221),
  repoClone: $fk("repo-clone", 60222),
  repoForcePush: $fk("repo-force-push", 60223),
  repoPull: $fk("repo-pull", 60224),
  repoPush: $fk("repo-push", 60225),
  report: $fk("report", 60226),
  requestChanges: $fk("request-changes", 60227),
  rocket: $fk("rocket", 60228),
  rootFolderOpened: $fk("root-folder-opened", 60229),
  rootFolder: $fk("root-folder", 60230),
  rss: $fk("rss", 60231),
  ruby: $fk("ruby", 60232),
  saveAll: $fk("save-all", 60233),
  saveAs: $fk("save-as", 60234),
  save: $fk("save", 60235),
  screenFull: $fk("screen-full", 60236),
  screenNormal: $fk("screen-normal", 60237),
  searchStop: $fk("search-stop", 60238),
  server: $fk("server", 60240),
  settingsGear: $fk("settings-gear", 60241),
  settings: $fk("settings", 60242),
  shield: $fk("shield", 60243),
  smiley: $fk("smiley", 60244),
  sortPrecedence: $fk("sort-precedence", 60245),
  splitHorizontal: $fk("split-horizontal", 60246),
  splitVertical: $fk("split-vertical", 60247),
  squirrel: $fk("squirrel", 60248),
  starFull: $fk("star-full", 60249),
  starHalf: $fk("star-half", 60250),
  symbolClass: $fk("symbol-class", 60251),
  symbolColor: $fk("symbol-color", 60252),
  symbolConstant: $fk("symbol-constant", 60253),
  symbolEnumMember: $fk("symbol-enum-member", 60254),
  symbolField: $fk("symbol-field", 60255),
  symbolFile: $fk("symbol-file", 60256),
  symbolInterface: $fk("symbol-interface", 60257),
  symbolKeyword: $fk("symbol-keyword", 60258),
  symbolMisc: $fk("symbol-misc", 60259),
  symbolOperator: $fk("symbol-operator", 60260),
  symbolProperty: $fk("symbol-property", 60261),
  wrench: $fk("wrench", 60261),
  wrenchSubaction: $fk("wrench-subaction", 60261),
  symbolSnippet: $fk("symbol-snippet", 60262),
  tasklist: $fk("tasklist", 60263),
  telescope: $fk("telescope", 60264),
  textSize: $fk("text-size", 60265),
  threeBars: $fk("three-bars", 60266),
  thumbsdown: $fk("thumbsdown", 60267),
  thumbsup: $fk("thumbsup", 60268),
  tools: $fk("tools", 60269),
  triangleDown: $fk("triangle-down", 60270),
  triangleLeft: $fk("triangle-left", 60271),
  triangleRight: $fk("triangle-right", 60272),
  triangleUp: $fk("triangle-up", 60273),
  twitter: $fk("twitter", 60274),
  unfold: $fk("unfold", 60275),
  unlock: $fk("unlock", 60276),
  unmute: $fk("unmute", 60277),
  unverified: $fk("unverified", 60278),
  verified: $fk("verified", 60279),
  versions: $fk("versions", 60280),
  vmActive: $fk("vm-active", 60281),
  vmOutline: $fk("vm-outline", 60282),
  vmRunning: $fk("vm-running", 60283),
  watch: $fk("watch", 60284),
  whitespace: $fk("whitespace", 60285),
  wholeWord: $fk("whole-word", 60286),
  window: $fk("window", 60287),
  wordWrap: $fk("word-wrap", 60288),
  zoomIn: $fk("zoom-in", 60289),
  zoomOut: $fk("zoom-out", 60290),
  listFilter: $fk("list-filter", 60291),
  listFlat: $fk("list-flat", 60292),
  listSelection: $fk("list-selection", 60293),
  selection: $fk("selection", 60293),
  listTree: $fk("list-tree", 60294),
  debugBreakpointFunctionUnverified: $fk("debug-breakpoint-function-unverified", 60295),
  debugBreakpointFunction: $fk("debug-breakpoint-function", 60296),
  debugBreakpointFunctionDisabled: $fk("debug-breakpoint-function-disabled", 60296),
  debugStackframeActive: $fk("debug-stackframe-active", 60297),
  circleSmallFilled: $fk("circle-small-filled", 60298),
  debugStackframeDot: $fk("debug-stackframe-dot", 60298),
  terminalDecorationMark: $fk("terminal-decoration-mark", 60298),
  debugStackframe: $fk("debug-stackframe", 60299),
  debugStackframeFocused: $fk("debug-stackframe-focused", 60299),
  debugBreakpointUnsupported: $fk("debug-breakpoint-unsupported", 60300),
  symbolString: $fk("symbol-string", 60301),
  debugReverseContinue: $fk("debug-reverse-continue", 60302),
  debugStepBack: $fk("debug-step-back", 60303),
  debugRestartFrame: $fk("debug-restart-frame", 60304),
  debugAlt: $fk("debug-alt", 60305),
  callIncoming: $fk("call-incoming", 60306),
  callOutgoing: $fk("call-outgoing", 60307),
  menu: $fk("menu", 60308),
  expandAll: $fk("expand-all", 60309),
  feedback: $fk("feedback", 60310),
  gitPullRequestReviewer: $fk("git-pull-request-reviewer", 60310),
  groupByRefType: $fk("group-by-ref-type", 60311),
  ungroupByRefType: $fk("ungroup-by-ref-type", 60312),
  account: $fk("account", 60313),
  gitPullRequestAssignee: $fk("git-pull-request-assignee", 60313),
  bellDot: $fk("bell-dot", 60314),
  debugConsole: $fk("debug-console", 60315),
  library: $fk("library", 60316),
  output: $fk("output", 60317),
  runAll: $fk("run-all", 60318),
  syncIgnored: $fk("sync-ignored", 60319),
  pinned: $fk("pinned", 60320),
  githubInverted: $fk("github-inverted", 60321),
  serverProcess: $fk("server-process", 60322),
  serverEnvironment: $fk("server-environment", 60323),
  pass: $fk("pass", 60324),
  issueClosed: $fk("issue-closed", 60324),
  stopCircle: $fk("stop-circle", 60325),
  playCircle: $fk("play-circle", 60326),
  record: $fk("record", 60327),
  debugAltSmall: $fk("debug-alt-small", 60328),
  vmConnect: $fk("vm-connect", 60329),
  cloud: $fk("cloud", 60330),
  merge: $fk("merge", 60331),
  export: $fk("export", 60332),
  graphLeft: $fk("graph-left", 60333),
  magnet: $fk("magnet", 60334),
  notebook: $fk("notebook", 60335),
  redo: $fk("redo", 60336),
  checkAll: $fk("check-all", 60337),
  pinnedDirty: $fk("pinned-dirty", 60338),
  passFilled: $fk("pass-filled", 60339),
  circleLargeFilled: $fk("circle-large-filled", 60340),
  circleLarge: $fk("circle-large", 60341),
  circleLargeOutline: $fk("circle-large-outline", 60341),
  combine: $fk("combine", 60342),
  gather: $fk("gather", 60342),
  table: $fk("table", 60343),
  variableGroup: $fk("variable-group", 60344),
  typeHierarchy: $fk("type-hierarchy", 60345),
  typeHierarchySub: $fk("type-hierarchy-sub", 60346),
  typeHierarchySuper: $fk("type-hierarchy-super", 60347),
  gitPullRequestCreate: $fk("git-pull-request-create", 60348),
  runAbove: $fk("run-above", 60349),
  runBelow: $fk("run-below", 60350),
  notebookTemplate: $fk("notebook-template", 60351),
  debugRerun: $fk("debug-rerun", 60352),
  workspaceTrusted: $fk("workspace-trusted", 60353),
  workspaceUntrusted: $fk("workspace-untrusted", 60354),
  workspaceUnknown: $fk("workspace-unknown", 60355),
  terminalCmd: $fk("terminal-cmd", 60356),
  terminalDebian: $fk("terminal-debian", 60357),
  terminalLinux: $fk("terminal-linux", 60358),
  terminalPowershell: $fk("terminal-powershell", 60359),
  terminalTmux: $fk("terminal-tmux", 60360),
  terminalUbuntu: $fk("terminal-ubuntu", 60361),
  terminalBash: $fk("terminal-bash", 60362),
  arrowSwap: $fk("arrow-swap", 60363),
  copy: $fk("copy", 60364),
  personAdd: $fk("person-add", 60365),
  filterFilled: $fk("filter-filled", 60366),
  wand: $fk("wand", 60367),
  debugLineByLine: $fk("debug-line-by-line", 60368),
  inspect: $fk("inspect", 60369),
  layers: $fk("layers", 60370),
  layersDot: $fk("layers-dot", 60371),
  layersActive: $fk("layers-active", 60372),
  compass: $fk("compass", 60373),
  compassDot: $fk("compass-dot", 60374),
  compassActive: $fk("compass-active", 60375),
  azure: $fk("azure", 60376),
  issueDraft: $fk("issue-draft", 60377),
  gitPullRequestClosed: $fk("git-pull-request-closed", 60378),
  gitPullRequestDraft: $fk("git-pull-request-draft", 60379),
  debugAll: $fk("debug-all", 60380),
  debugCoverage: $fk("debug-coverage", 60381),
  runErrors: $fk("run-errors", 60382),
  folderLibrary: $fk("folder-library", 60383),
  debugContinueSmall: $fk("debug-continue-small", 60384),
  beakerStop: $fk("beaker-stop", 60385),
  graphLine: $fk("graph-line", 60386),
  graphScatter: $fk("graph-scatter", 60387),
  pieChart: $fk("pie-chart", 60388),
  bracket: $fk("bracket", 60175),
  bracketDot: $fk("bracket-dot", 60389),
  bracketError: $fk("bracket-error", 60390),
  lockSmall: $fk("lock-small", 60391),
  azureDevops: $fk("azure-devops", 60392),
  verifiedFilled: $fk("verified-filled", 60393),
  newline: $fk("newline", 60394),
  layout: $fk("layout", 60395),
  layoutActivitybarLeft: $fk("layout-activitybar-left", 60396),
  layoutActivitybarRight: $fk("layout-activitybar-right", 60397),
  layoutPanelLeft: $fk("layout-panel-left", 60398),
  layoutPanelCenter: $fk("layout-panel-center", 60399),
  layoutPanelJustify: $fk("layout-panel-justify", 60400),
  layoutPanelRight: $fk("layout-panel-right", 60401),
  layoutPanel: $fk("layout-panel", 60402),
  layoutSidebarLeft: $fk("layout-sidebar-left", 60403),
  layoutSidebarRight: $fk("layout-sidebar-right", 60404),
  layoutStatusbar: $fk("layout-statusbar", 60405),
  layoutMenubar: $fk("layout-menubar", 60406),
  layoutCentered: $fk("layout-centered", 60407),
  target: $fk("target", 60408),
  indent: $fk("indent", 60409),
  recordSmall: $fk("record-small", 60410),
  errorSmall: $fk("error-small", 60411),
  terminalDecorationError: $fk("terminal-decoration-error", 60411),
  arrowCircleDown: $fk("arrow-circle-down", 60412),
  arrowCircleLeft: $fk("arrow-circle-left", 60413),
  arrowCircleRight: $fk("arrow-circle-right", 60414),
  arrowCircleUp: $fk("arrow-circle-up", 60415),
  layoutSidebarRightOff: $fk("layout-sidebar-right-off", 60416),
  layoutPanelOff: $fk("layout-panel-off", 60417),
  layoutSidebarLeftOff: $fk("layout-sidebar-left-off", 60418),
  blank: $fk("blank", 60419),
  heartFilled: $fk("heart-filled", 60420),
  map: $fk("map", 60421),
  mapHorizontal: $fk("map-horizontal", 60421),
  foldHorizontal: $fk("fold-horizontal", 60421),
  mapFilled: $fk("map-filled", 60422),
  mapHorizontalFilled: $fk("map-horizontal-filled", 60422),
  foldHorizontalFilled: $fk("fold-horizontal-filled", 60422),
  circleSmall: $fk("circle-small", 60423),
  bellSlash: $fk("bell-slash", 60424),
  bellSlashDot: $fk("bell-slash-dot", 60425),
  commentUnresolved: $fk("comment-unresolved", 60426),
  gitPullRequestGoToChanges: $fk("git-pull-request-go-to-changes", 60427),
  gitPullRequestNewChanges: $fk("git-pull-request-new-changes", 60428),
  searchFuzzy: $fk("search-fuzzy", 60429),
  commentDraft: $fk("comment-draft", 60430),
  send: $fk("send", 60431),
  sparkle: $fk("sparkle", 60432),
  insert: $fk("insert", 60433),
  mic: $fk("mic", 60434),
  thumbsdownFilled: $fk("thumbsdown-filled", 60435),
  thumbsupFilled: $fk("thumbsup-filled", 60436),
  coffee: $fk("coffee", 60437),
  snake: $fk("snake", 60438),
  game: $fk("game", 60439),
  vr: $fk("vr", 60440),
  chip: $fk("chip", 60441),
  piano: $fk("piano", 60442),
  music: $fk("music", 60443),
  micFilled: $fk("mic-filled", 60444),
  repoFetch: $fk("repo-fetch", 60445),
  copilot: $fk("copilot", 60446),
  lightbulbSparkle: $fk("lightbulb-sparkle", 60447),
  robot: $fk("robot", 60448),
  sparkleFilled: $fk("sparkle-filled", 60449),
  diffSingle: $fk("diff-single", 60450),
  diffMultiple: $fk("diff-multiple", 60451),
  surroundWith: $fk("surround-with", 60452),
  share: $fk("share", 60453),
  gitStash: $fk("git-stash", 60454),
  gitStashApply: $fk("git-stash-apply", 60455),
  gitStashPop: $fk("git-stash-pop", 60456),
  vscode: $fk("vscode", 60457),
  vscodeInsiders: $fk("vscode-insiders", 60458),
  codeOss: $fk("code-oss", 60459),
  runCoverage: $fk("run-coverage", 60460),
  runAllCoverage: $fk("run-all-coverage", 60461),
  coverage: $fk("coverage", 60462),
  githubProject: $fk("github-project", 60463),
  mapVertical: $fk("map-vertical", 60464),
  foldVertical: $fk("fold-vertical", 60464),
  mapVerticalFilled: $fk("map-vertical-filled", 60465),
  foldVerticalFilled: $fk("fold-vertical-filled", 60465),
  goToSearch: $fk("go-to-search", 60466),
  percentage: $fk("percentage", 60467),
  sortPercentage: $fk("sort-percentage", 60467),
  attach: $fk("attach", 60468)
};

// out-build/vs/base/common/codicons.js
var $jk = {
  dialogError: $fk("dialog-error", "error"),
  dialogWarning: $fk("dialog-warning", "warning"),
  dialogInfo: $fk("dialog-info", "info"),
  dialogClose: $fk("dialog-close", "close"),
  treeItemExpanded: $fk("tree-item-expanded", "chevron-down"),
  // collapsed is done with rotation
  treeFilterOnTypeOn: $fk("tree-filter-on-type-on", "list-filter"),
  treeFilterOnTypeOff: $fk("tree-filter-on-type-off", "list-selection"),
  treeFilterClear: $fk("tree-filter-clear", "close"),
  treeItemLoading: $fk("tree-item-loading", "loading"),
  menuSelection: $fk("menu-selection", "check"),
  menuSubmenu: $fk("menu-submenu", "chevron-right"),
  menuBarMore: $fk("menubar-more", "more"),
  scrollbarButtonLeft: $fk("scrollbar-button-left", "triangle-left"),
  scrollbarButtonRight: $fk("scrollbar-button-right", "triangle-right"),
  scrollbarButtonUp: $fk("scrollbar-button-up", "triangle-up"),
  scrollbarButtonDown: $fk("scrollbar-button-down", "triangle-down"),
  toolBarMore: $fk("toolbar-more", "more"),
  quickInputBack: $fk("quick-input-back", "arrow-left"),
  dropDownButton: $fk("drop-down-button", 60084),
  symbolCustomColor: $fk("symbol-customcolor", 60252),
  exportIcon: $fk("export", 60332),
  workspaceUnspecified: $fk("workspace-unspecified", 60355),
  newLine: $fk("newline", 60394),
  thumbsDownFilled: $fk("thumbsdown-filled", 60435),
  thumbsUpFilled: $fk("thumbsup-filled", 60436),
  gitFetch: $fk("git-fetch", 60445),
  lightbulbSparkleAutofix: $fk("lightbulb-sparkle-autofix", 60447),
  debugBreakpointPending: $fk("debug-breakpoint-pending", 60377)
};
var $kk = {
  ...$hk,
  ...$jk
};

// out-build/vs/base/common/themables.js
var ThemeColor;
(function(ThemeColor2) {
  function isThemeColor(obj) {
    return obj && typeof obj === "object" && typeof obj.id === "string";
  }
  ThemeColor2.isThemeColor = isThemeColor;
})(ThemeColor || (ThemeColor = {}));
var ThemeIcon;
(function(ThemeIcon2) {
  ThemeIcon2.iconNameSegment = "[A-Za-z0-9]+";
  ThemeIcon2.iconNameExpression = "[A-Za-z0-9-]+";
  ThemeIcon2.iconModifierExpression = "~[A-Za-z]+";
  ThemeIcon2.iconNameCharacter = "[A-Za-z0-9~-]";
  const ThemeIconIdRegex = new RegExp(`^(${ThemeIcon2.iconNameExpression})(${ThemeIcon2.iconModifierExpression})?$`);
  function asClassNameArray(icon) {
    const match = ThemeIconIdRegex.exec(icon.id);
    if (!match) {
      return asClassNameArray($kk.error);
    }
    const [, id2, modifier] = match;
    const classNames = ["codicon", "codicon-" + id2];
    if (modifier) {
      classNames.push("codicon-modifier-" + modifier.substring(1));
    }
    return classNames;
  }
  ThemeIcon2.asClassNameArray = asClassNameArray;
  function asClassName(icon) {
    return asClassNameArray(icon).join(" ");
  }
  ThemeIcon2.asClassName = asClassName;
  function asCSSSelector(icon) {
    return "." + asClassNameArray(icon).join(".");
  }
  ThemeIcon2.asCSSSelector = asCSSSelector;
  function isThemeIcon(obj) {
    return obj && typeof obj === "object" && typeof obj.id === "string" && (typeof obj.color === "undefined" || ThemeColor.isThemeColor(obj.color));
  }
  ThemeIcon2.isThemeIcon = isThemeIcon;
  const _regexFromString = new RegExp(`^\\$\\((${ThemeIcon2.iconNameExpression}(?:${ThemeIcon2.iconModifierExpression})?)\\)$`);
  function fromString(str) {
    const match = _regexFromString.exec(str);
    if (!match) {
      return void 0;
    }
    const [, name] = match;
    return { id: name };
  }
  ThemeIcon2.fromString = fromString;
  function fromId(id2) {
    return { id: id2 };
  }
  ThemeIcon2.fromId = fromId;
  function modify(icon, modifier) {
    let id2 = icon.id;
    const tildeIndex = id2.lastIndexOf("~");
    if (tildeIndex !== -1) {
      id2 = id2.substring(0, tildeIndex);
    }
    if (modifier) {
      id2 = `${id2}~${modifier}`;
    }
    return { id: id2 };
  }
  ThemeIcon2.modify = modify;
  function getModifier(icon) {
    const tildeIndex = icon.id.lastIndexOf("~");
    if (tildeIndex !== -1) {
      return icon.id.substring(tildeIndex + 1);
    }
    return void 0;
  }
  ThemeIcon2.getModifier = getModifier;
  function isEqual(ti1, ti2) {
    return ti1.id === ti2.id && ti1.color?.id === ti2.color?.id;
  }
  ThemeIcon2.isEqual = isEqual;
})(ThemeIcon || (ThemeIcon = {}));

// out-build/vs/base/browser/ui/iconLabel/iconLabels.js
var labelWithIconsRegex = new RegExp(`(\\\\)?\\$\\((${ThemeIcon.iconNameExpression}(?:${ThemeIcon.iconModifierExpression})?)\\)`, "g");
function $cW(text2) {
  const elements = new Array();
  let match;
  let textStart = 0, textStop = 0;
  while ((match = labelWithIconsRegex.exec(text2)) !== null) {
    textStop = match.index || 0;
    if (textStart < textStop) {
      elements.push(text2.substring(textStart, textStop));
    }
    textStart = (match.index || 0) + match[0].length;
    const [, escaped, codicon] = match;
    elements.push(escaped ? `$(${codicon})` : $dW({ id: codicon }));
  }
  if (textStart < text2.length) {
    elements.push(text2.substring(textStart));
  }
  return elements;
}
function $dW(icon) {
  const node = $(`span`);
  node.classList.add(...ThemeIcon.asClassNameArray(icon));
  return node;
}

// out-build/vs/base/common/naturalLanguage/korean.js
var codeBuffer = new Uint32Array(10);
var HangulRangeStartCode;
(function(HangulRangeStartCode2) {
  HangulRangeStartCode2[HangulRangeStartCode2["InitialConsonant"] = 4352] = "InitialConsonant";
  HangulRangeStartCode2[HangulRangeStartCode2["Vowel"] = 4449] = "Vowel";
  HangulRangeStartCode2[HangulRangeStartCode2["FinalConsonant"] = 4520] = "FinalConsonant";
  HangulRangeStartCode2[HangulRangeStartCode2["CompatibilityJamo"] = 12593] = "CompatibilityJamo";
})(HangulRangeStartCode || (HangulRangeStartCode = {}));
var AsciiCode;
(function(AsciiCode2) {
  AsciiCode2[AsciiCode2["NUL"] = 0] = "NUL";
  AsciiCode2[AsciiCode2["A"] = 65] = "A";
  AsciiCode2[AsciiCode2["B"] = 66] = "B";
  AsciiCode2[AsciiCode2["C"] = 67] = "C";
  AsciiCode2[AsciiCode2["D"] = 68] = "D";
  AsciiCode2[AsciiCode2["E"] = 69] = "E";
  AsciiCode2[AsciiCode2["F"] = 70] = "F";
  AsciiCode2[AsciiCode2["G"] = 71] = "G";
  AsciiCode2[AsciiCode2["H"] = 72] = "H";
  AsciiCode2[AsciiCode2["I"] = 73] = "I";
  AsciiCode2[AsciiCode2["J"] = 74] = "J";
  AsciiCode2[AsciiCode2["K"] = 75] = "K";
  AsciiCode2[AsciiCode2["L"] = 76] = "L";
  AsciiCode2[AsciiCode2["M"] = 77] = "M";
  AsciiCode2[AsciiCode2["N"] = 78] = "N";
  AsciiCode2[AsciiCode2["O"] = 79] = "O";
  AsciiCode2[AsciiCode2["P"] = 80] = "P";
  AsciiCode2[AsciiCode2["Q"] = 81] = "Q";
  AsciiCode2[AsciiCode2["R"] = 82] = "R";
  AsciiCode2[AsciiCode2["S"] = 83] = "S";
  AsciiCode2[AsciiCode2["T"] = 84] = "T";
  AsciiCode2[AsciiCode2["U"] = 85] = "U";
  AsciiCode2[AsciiCode2["V"] = 86] = "V";
  AsciiCode2[AsciiCode2["W"] = 87] = "W";
  AsciiCode2[AsciiCode2["X"] = 88] = "X";
  AsciiCode2[AsciiCode2["Y"] = 89] = "Y";
  AsciiCode2[AsciiCode2["Z"] = 90] = "Z";
  AsciiCode2[AsciiCode2["a"] = 97] = "a";
  AsciiCode2[AsciiCode2["b"] = 98] = "b";
  AsciiCode2[AsciiCode2["c"] = 99] = "c";
  AsciiCode2[AsciiCode2["d"] = 100] = "d";
  AsciiCode2[AsciiCode2["e"] = 101] = "e";
  AsciiCode2[AsciiCode2["f"] = 102] = "f";
  AsciiCode2[AsciiCode2["g"] = 103] = "g";
  AsciiCode2[AsciiCode2["h"] = 104] = "h";
  AsciiCode2[AsciiCode2["i"] = 105] = "i";
  AsciiCode2[AsciiCode2["j"] = 106] = "j";
  AsciiCode2[AsciiCode2["k"] = 107] = "k";
  AsciiCode2[AsciiCode2["l"] = 108] = "l";
  AsciiCode2[AsciiCode2["m"] = 109] = "m";
  AsciiCode2[AsciiCode2["n"] = 110] = "n";
  AsciiCode2[AsciiCode2["o"] = 111] = "o";
  AsciiCode2[AsciiCode2["p"] = 112] = "p";
  AsciiCode2[AsciiCode2["q"] = 113] = "q";
  AsciiCode2[AsciiCode2["r"] = 114] = "r";
  AsciiCode2[AsciiCode2["s"] = 115] = "s";
  AsciiCode2[AsciiCode2["t"] = 116] = "t";
  AsciiCode2[AsciiCode2["u"] = 117] = "u";
  AsciiCode2[AsciiCode2["v"] = 118] = "v";
  AsciiCode2[AsciiCode2["w"] = 119] = "w";
  AsciiCode2[AsciiCode2["x"] = 120] = "x";
  AsciiCode2[AsciiCode2["y"] = 121] = "y";
  AsciiCode2[AsciiCode2["z"] = 122] = "z";
})(AsciiCode || (AsciiCode = {}));
var AsciiCodeCombo;
(function(AsciiCodeCombo2) {
  AsciiCodeCombo2[AsciiCodeCombo2["fa"] = 24934] = "fa";
  AsciiCodeCombo2[AsciiCodeCombo2["fg"] = 26470] = "fg";
  AsciiCodeCombo2[AsciiCodeCombo2["fq"] = 29030] = "fq";
  AsciiCodeCombo2[AsciiCodeCombo2["fr"] = 29286] = "fr";
  AsciiCodeCombo2[AsciiCodeCombo2["ft"] = 29798] = "ft";
  AsciiCodeCombo2[AsciiCodeCombo2["fv"] = 30310] = "fv";
  AsciiCodeCombo2[AsciiCodeCombo2["fx"] = 30822] = "fx";
  AsciiCodeCombo2[AsciiCodeCombo2["hk"] = 27496] = "hk";
  AsciiCodeCombo2[AsciiCodeCombo2["hl"] = 27752] = "hl";
  AsciiCodeCombo2[AsciiCodeCombo2["ho"] = 28520] = "ho";
  AsciiCodeCombo2[AsciiCodeCombo2["ml"] = 27757] = "ml";
  AsciiCodeCombo2[AsciiCodeCombo2["nj"] = 27246] = "nj";
  AsciiCodeCombo2[AsciiCodeCombo2["nl"] = 27758] = "nl";
  AsciiCodeCombo2[AsciiCodeCombo2["np"] = 28782] = "np";
  AsciiCodeCombo2[AsciiCodeCombo2["qt"] = 29809] = "qt";
  AsciiCodeCombo2[AsciiCodeCombo2["rt"] = 29810] = "rt";
  AsciiCodeCombo2[AsciiCodeCombo2["sg"] = 26483] = "sg";
  AsciiCodeCombo2[AsciiCodeCombo2["sw"] = 30579] = "sw";
})(AsciiCodeCombo || (AsciiCodeCombo = {}));
var modernConsonants = new Uint8Array([
  114,
  // ㄱ
  82,
  // ㄲ
  115,
  // ㄴ
  101,
  // ㄷ
  69,
  // ㄸ
  102,
  // ㄹ
  97,
  // ㅁ
  113,
  // ㅂ
  81,
  // ㅃ
  116,
  // ㅅ
  84,
  // ㅆ
  100,
  // ㅇ
  119,
  // ㅈ
  87,
  // ㅉ
  99,
  // ㅊ
  122,
  // ㅋ
  120,
  // ㅌ
  118,
  // ㅍ
  103
  // ㅎ
]);
var modernVowels = new Uint16Array([
  107,
  //  -> ㅏ
  111,
  //  -> ㅐ
  105,
  //  -> ㅑ
  79,
  //  -> ㅒ
  106,
  //  -> ㅓ
  112,
  //  -> ㅔ
  117,
  //  -> ㅕ
  80,
  //  -> ㅖ
  104,
  //  -> ㅗ
  27496,
  //  -> ㅘ
  28520,
  //  -> ㅙ
  27752,
  //  -> ㅚ
  121,
  //  -> ㅛ
  110,
  //  -> ㅜ
  27246,
  //  -> ㅝ
  28782,
  //  -> ㅞ
  27758,
  //  -> ㅟ
  98,
  //  -> ㅠ
  109,
  //  -> ㅡ
  27757,
  //  -> ㅢ
  108
  //  -> ㅣ
]);
var modernFinalConsonants = new Uint16Array([
  114,
  // ㄱ
  82,
  // ㄲ
  29810,
  // ㄳ
  115,
  // ㄴ
  30579,
  // ㄵ
  26483,
  // ㄶ
  101,
  // ㄷ
  102,
  // ㄹ
  29286,
  // ㄺ
  24934,
  // ㄻ
  29030,
  // ㄼ
  29798,
  // ㄽ
  30822,
  // ㄾ
  30310,
  // ㄿ
  26470,
  // ㅀ
  97,
  // ㅁ
  113,
  // ㅂ
  29809,
  // ㅄ
  116,
  // ㅅ
  84,
  // ㅆ
  100,
  // ㅇ
  119,
  // ㅈ
  99,
  // ㅊ
  122,
  // ㅋ
  120,
  // ㅌ
  118,
  // ㅍ
  103
  // ㅎ
]);
var compatibilityJamo = new Uint16Array([
  114,
  // ㄱ
  82,
  // ㄲ
  29810,
  // ㄳ
  115,
  // ㄴ
  30579,
  // ㄵ
  26483,
  // ㄶ
  101,
  // ㄷ
  69,
  // ㄸ
  102,
  // ㄹ
  29286,
  // ㄺ
  24934,
  // ㄻ
  29030,
  // ㄼ
  29798,
  // ㄽ
  30822,
  // ㄾ
  30310,
  // ㄿ
  26470,
  // ㅀ
  97,
  // ㅁ
  113,
  // ㅂ
  81,
  // ㅃ
  29809,
  // ㅄ
  116,
  // ㅅ
  84,
  // ㅆ
  100,
  // ㅇ
  119,
  // ㅈ
  87,
  // ㅉ
  99,
  // ㅊ
  122,
  // ㅋ
  120,
  // ㅌ
  118,
  // ㅍ
  103,
  // ㅎ
  107,
  // ㅏ
  111,
  // ㅐ
  105,
  // ㅑ
  79,
  // ㅒ
  106,
  // ㅓ
  112,
  // ㅔ
  117,
  // ㅕ
  80,
  // ㅖ
  104,
  // ㅗ
  27496,
  // ㅘ
  28520,
  // ㅙ
  27752,
  // ㅚ
  121,
  // ㅛ
  110,
  // ㅜ
  27246,
  // ㅝ
  28782,
  // ㅞ
  27758,
  // ㅟ
  98,
  // ㅠ
  109,
  // ㅡ
  27757,
  // ㅢ
  108
  // ㅣ
  // HF: Hangul Filler (everything after this is archaic)
  // ㅥ
  // ㅦ
  // ㅧ
  // ㅨ
  // ㅩ
  // ㅪ
  // ㅫ
  // ㅬ
  // ㅮ
  // ㅯ
  // ㅰ
  // ㅱ
  // ㅲ
  // ㅳ
  // ㅴ
  // ㅵ
  // ㅶ
  // ㅷ
  // ㅸ
  // ㅹ
  // ㅺ
  // ㅻ
  // ㅼ
  // ㅽ
  // ㅾ
  // ㅿ
  // ㆀ
  // ㆁ
  // ㆂ
  // ㆃ
  // ㆄ
  // ㆅ
  // ㆆ
  // ㆇ
  // ㆈ
  // ㆉ
  // ㆊ
  // ㆋ
  // ㆌ
  // ㆍ
  // ㆎ
]);

// out-build/vs/base/common/filters.js
function or(...filter) {
  return function(word, wordToMatchAgainst) {
    for (let i = 0, len = filter.length; i < len; i++) {
      const match = filter[i](word, wordToMatchAgainst);
      if (match) {
        return match;
      }
    }
    return null;
  };
}
var $Zk = _matchesPrefix.bind(void 0, false);
var $1k = _matchesPrefix.bind(void 0, true);
function _matchesPrefix(ignoreCase, word, wordToMatchAgainst) {
  if (!wordToMatchAgainst || wordToMatchAgainst.length < word.length) {
    return null;
  }
  let matches;
  if (ignoreCase) {
    matches = $Yf(wordToMatchAgainst, word);
  } else {
    matches = wordToMatchAgainst.indexOf(word) === 0;
  }
  if (!matches) {
    return null;
  }
  return word.length > 0 ? [{ start: 0, end: word.length }] : [];
}
function $2k(word, wordToMatchAgainst) {
  const index = wordToMatchAgainst.toLowerCase().indexOf(word.toLowerCase());
  if (index === -1) {
    return null;
  }
  return [{ start: index, end: index + word.length }];
}
function $3k(word, wordToMatchAgainst) {
  return _matchesSubString(word.toLowerCase(), wordToMatchAgainst.toLowerCase(), 0, 0);
}
function _matchesSubString(word, wordToMatchAgainst, i, j) {
  if (i === word.length) {
    return [];
  } else if (j === wordToMatchAgainst.length) {
    return null;
  } else {
    if (word[i] === wordToMatchAgainst[j]) {
      let result = null;
      if (result = _matchesSubString(word, wordToMatchAgainst, i + 1, j + 1)) {
        return join({ start: j, end: j + 1 }, result);
      }
      return null;
    }
    return _matchesSubString(word, wordToMatchAgainst, i, j + 1);
  }
}
function isLower(code) {
  return 97 <= code && code <= 122;
}
function $4k(code) {
  return 65 <= code && code <= 90;
}
function isNumber(code) {
  return 48 <= code && code <= 57;
}
function isWhitespace(code) {
  return code === 32 || code === 9 || code === 10 || code === 13;
}
var wordSeparators = /* @__PURE__ */ new Set();
"()[]{}<>`'\"-/;:,.?!".split("").forEach((s) => wordSeparators.add(s.charCodeAt(0)));
function isAlphanumeric(code) {
  return isLower(code) || $4k(code) || isNumber(code);
}
function join(head, tail) {
  if (tail.length === 0) {
    tail = [head];
  } else if (head.end === tail[0].start) {
    tail[0].start = head.start;
  } else {
    tail.unshift(head);
  }
  return tail;
}
function nextAnchor(camelCaseWord, start) {
  for (let i = start; i < camelCaseWord.length; i++) {
    const c = camelCaseWord.charCodeAt(i);
    if ($4k(c) || isNumber(c) || i > 0 && !isAlphanumeric(camelCaseWord.charCodeAt(i - 1))) {
      return i;
    }
  }
  return camelCaseWord.length;
}
function _matchesCamelCase(word, camelCaseWord, i, j) {
  if (i === word.length) {
    return [];
  } else if (j === camelCaseWord.length) {
    return null;
  } else if (word[i] !== camelCaseWord[j].toLowerCase()) {
    return null;
  } else {
    let result = null;
    let nextUpperIndex = j + 1;
    result = _matchesCamelCase(word, camelCaseWord, i + 1, j + 1);
    while (!result && (nextUpperIndex = nextAnchor(camelCaseWord, nextUpperIndex)) < camelCaseWord.length) {
      result = _matchesCamelCase(word, camelCaseWord, i + 1, nextUpperIndex);
      nextUpperIndex++;
    }
    return result === null ? null : join({ start: j, end: j + 1 }, result);
  }
}
function analyzeCamelCaseWord(word) {
  let upper = 0, lower = 0, alpha = 0, numeric = 0, code = 0;
  for (let i = 0; i < word.length; i++) {
    code = word.charCodeAt(i);
    if ($4k(code)) {
      upper++;
    }
    if (isLower(code)) {
      lower++;
    }
    if (isAlphanumeric(code)) {
      alpha++;
    }
    if (isNumber(code)) {
      numeric++;
    }
  }
  const upperPercent = upper / word.length;
  const lowerPercent = lower / word.length;
  const alphaPercent = alpha / word.length;
  const numericPercent = numeric / word.length;
  return { upperPercent, lowerPercent, alphaPercent, numericPercent };
}
function isUpperCaseWord(analysis) {
  const { upperPercent, lowerPercent } = analysis;
  return lowerPercent === 0 && upperPercent > 0.6;
}
function isCamelCaseWord(analysis) {
  const { upperPercent, lowerPercent, alphaPercent, numericPercent } = analysis;
  return lowerPercent > 0.2 && upperPercent < 0.8 && alphaPercent > 0.6 && numericPercent < 0.2;
}
function isCamelCasePattern(word) {
  let upper = 0, lower = 0, code = 0, whitespace = 0;
  for (let i = 0; i < word.length; i++) {
    code = word.charCodeAt(i);
    if ($4k(code)) {
      upper++;
    }
    if (isLower(code)) {
      lower++;
    }
    if (isWhitespace(code)) {
      whitespace++;
    }
  }
  if ((upper === 0 || lower === 0) && whitespace === 0) {
    return word.length <= 30;
  } else {
    return upper <= 5;
  }
}
function $5k(word, camelCaseWord) {
  if (!camelCaseWord) {
    return null;
  }
  camelCaseWord = camelCaseWord.trim();
  if (camelCaseWord.length === 0) {
    return null;
  }
  if (!isCamelCasePattern(word)) {
    return null;
  }
  if (camelCaseWord.length > 60) {
    camelCaseWord = camelCaseWord.substring(0, 60);
  }
  const analysis = analyzeCamelCaseWord(camelCaseWord);
  if (!isCamelCaseWord(analysis)) {
    if (!isUpperCaseWord(analysis)) {
      return null;
    }
    camelCaseWord = camelCaseWord.toLowerCase();
  }
  let result = null;
  let i = 0;
  word = word.toLowerCase();
  while (i < camelCaseWord.length && (result = _matchesCamelCase(word, camelCaseWord, 0, i)) === null) {
    i = nextAnchor(camelCaseWord, i + 1);
  }
  return result;
}
var fuzzyContiguousFilter = or($1k, $5k, $2k);
var fuzzySeparateFilter = or($1k, $5k, $3k);
var fuzzyRegExpCache = new $Pc(1e4);
var _maxLen = 128;
function initTable() {
  const table = [];
  const row = [];
  for (let i = 0; i <= _maxLen; i++) {
    row[i] = 0;
  }
  for (let i = 0; i <= _maxLen; i++) {
    table.push(row.slice(0));
  }
  return table;
}
function initArr(maxLen) {
  const row = [];
  for (let i = 0; i <= maxLen; i++) {
    row[i] = 0;
  }
  return row;
}
var _minWordMatchPos = initArr(2 * _maxLen);
var _maxWordMatchPos = initArr(2 * _maxLen);
var _diag = initTable();
var _table = initTable();
var _arrows = initTable();
var Arrow;
(function(Arrow2) {
  Arrow2[Arrow2["Diag"] = 1] = "Diag";
  Arrow2[Arrow2["Left"] = 2] = "Left";
  Arrow2[Arrow2["LeftLeft"] = 3] = "LeftLeft";
})(Arrow || (Arrow = {}));
var FuzzyScore;
(function(FuzzyScore2) {
  FuzzyScore2.Default = [-100, 0];
  function isDefault(score) {
    return !score || score.length === 2 && score[0] === -100 && score[1] === 0;
  }
  FuzzyScore2.isDefault = isDefault;
})(FuzzyScore || (FuzzyScore = {}));
var $_k = class {
  static {
    this.default = { boostFullMatch: true, firstMatchCanBeWeak: false };
  }
  constructor(firstMatchCanBeWeak, boostFullMatch) {
    this.firstMatchCanBeWeak = firstMatchCanBeWeak;
    this.boostFullMatch = boostFullMatch;
  }
};

// out-build/vs/base/common/iconLabels.js
var iconsRegex = new RegExp(`\\$\\(${ThemeIcon.iconNameExpression}(?:${ThemeIcon.iconModifierExpression})?\\)`, "g");
var escapeIconsRegex = new RegExp(`(\\\\)?${iconsRegex.source}`, "g");
function $dl(text2) {
  return text2.replace(escapeIconsRegex, (match, escaped) => escaped ? match : `\\${match}`);
}
var markdownEscapedIconsRegex = new RegExp(`\\\\${iconsRegex.source}`, "g");
function $el(text2) {
  return text2.replace(markdownEscapedIconsRegex, (match) => `\\${match}`);
}
var stripIconsRegex = new RegExp(`(\\s)?(\\\\)?${iconsRegex.source}(\\s)?`, "g");
var _parseIconsRegex = new RegExp(`\\$\\(${ThemeIcon.iconNameCharacter}+\\)`, "g");

// out-build/vs/base/common/htmlContent.js
var MarkdownStringTextNewlineStyle;
(function(MarkdownStringTextNewlineStyle2) {
  MarkdownStringTextNewlineStyle2[MarkdownStringTextNewlineStyle2["Paragraph"] = 0] = "Paragraph";
  MarkdownStringTextNewlineStyle2[MarkdownStringTextNewlineStyle2["Break"] = 1] = "Break";
})(MarkdownStringTextNewlineStyle || (MarkdownStringTextNewlineStyle = {}));
var $jl = class {
  constructor(value = "", isTrustedOrOptions = false) {
    this.value = value;
    if (typeof this.value !== "string") {
      throw $hb("value");
    }
    if (typeof isTrustedOrOptions === "boolean") {
      this.isTrusted = isTrustedOrOptions;
      this.supportThemeIcons = false;
      this.supportHtml = false;
    } else {
      this.isTrusted = isTrustedOrOptions.isTrusted ?? void 0;
      this.supportThemeIcons = isTrustedOrOptions.supportThemeIcons ?? false;
      this.supportHtml = isTrustedOrOptions.supportHtml ?? false;
    }
  }
  appendText(value, newlineStyle = 0) {
    this.value += $nl(this.supportThemeIcons ? $dl(value) : value).replace(/([ \t]+)/g, (_match, g1) => "&nbsp;".repeat(g1.length)).replace(/\>/gm, "\\>").replace(/\n/g, newlineStyle === 1 ? "\\\n" : "\n\n");
    return this;
  }
  appendMarkdown(value) {
    this.value += value;
    return this;
  }
  appendCodeblock(langId, code) {
    this.value += `
${$ol(code, langId)}
`;
    return this;
  }
  appendLink(target, label, title) {
    this.value += "[";
    this.value += this.c(label, "]");
    this.value += "](";
    this.value += this.c(String(target), ")");
    if (title) {
      this.value += ` "${this.c(this.c(title, '"'), ")")}"`;
    }
    this.value += ")";
    return this;
  }
  c(value, ch) {
    const r = new RegExp($zf(ch), "g");
    return value.replace(r, (match, offset) => {
      if (value.charAt(offset - 1) !== "\\") {
        return `\\${match}`;
      } else {
        return match;
      }
    });
  }
};
function $ll(thing) {
  if (thing instanceof $jl) {
    return true;
  } else if (thing && typeof thing === "object") {
    return typeof thing.value === "string" && (typeof thing.isTrusted === "boolean" || typeof thing.isTrusted === "object" || thing.isTrusted === void 0) && (typeof thing.supportThemeIcons === "boolean" || thing.supportThemeIcons === void 0);
  }
  return false;
}
function $ml(a, b) {
  if (a === b) {
    return true;
  } else if (!a || !b) {
    return false;
  } else {
    return a.value === b.value && a.isTrusted === b.isTrusted && a.supportThemeIcons === b.supportThemeIcons && a.supportHtml === b.supportHtml && (a.baseUri === b.baseUri || !!a.baseUri && !!b.baseUri && $rh(URI.from(a.baseUri), URI.from(b.baseUri)));
  }
}
function $nl(text2) {
  return text2.replace(/[\\`*_{}[\]()#+\-!~]/g, "\\$&");
}
function $ol(code, langId) {
  const longestFenceLength = code.match(/^`+/gm)?.reduce((a, b) => a.length > b.length ? a : b).length ?? 0;
  const desiredFenceLength = longestFenceLength >= 3 ? longestFenceLength + 1 : 3;
  return [
    `${"`".repeat(desiredFenceLength)}${langId}`,
    code,
    `${"`".repeat(desiredFenceLength)}`
  ].join("\n");
}
function $pl(input) {
  return input.replace(/"/g, "&quot;");
}
function $ql(text2) {
  if (!text2) {
    return text2;
  }
  return text2.replace(/\\([\\`*_{}[\]()#+\-.!~])/g, "$1");
}
function $rl(href) {
  const dimensions = [];
  const splitted = href.split("|").map((s) => s.trim());
  href = splitted[0];
  const parameters = splitted[1];
  if (parameters) {
    const heightFromParams = /height=(\d+)/.exec(parameters);
    const widthFromParams = /width=(\d+)/.exec(parameters);
    const height = heightFromParams ? heightFromParams[1] : "";
    const width = widthFromParams ? widthFromParams[1] : "";
    const widthIsFinite = isFinite(parseInt(width));
    const heightIsFinite = isFinite(parseInt(height));
    if (widthIsFinite) {
      dimensions.push(`width="${width}"`);
    }
    if (heightIsFinite) {
      dimensions.push(`height="${height}"`);
    }
  }
  return { href, dimensions };
}

// out-build/vs/base/common/idGenerator.js
var $bR = class {
  constructor(prefix) {
    this.a = prefix;
    this.b = 0;
  }
  nextId() {
    return this.a + ++this.b;
  }
};
var $cR = new $bR("id#");

// out-build/vs/base/common/marked/marked.js
var __marked_exports = {};
(function() {
  function define(deps, factory) {
    factory(__marked_exports);
  }
  define.amd = true;
  (function(global, factory) {
    typeof define === "function" && define.amd ? define(["exports"], factory) : typeof exports === "object" && typeof module !== "undefined" ? factory(exports) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global.marked = {}));
  })(this, function(exports2) {
    "use strict";
    function _getDefaults() {
      return {
        async: false,
        breaks: false,
        extensions: null,
        gfm: true,
        hooks: null,
        pedantic: false,
        renderer: null,
        silent: false,
        tokenizer: null,
        walkTokens: null
      };
    }
    exports2.defaults = _getDefaults();
    function changeDefaults(newDefaults) {
      exports2.defaults = newDefaults;
    }
    const escapeTest = /[&<>"']/;
    const escapeReplace = new RegExp(escapeTest.source, "g");
    const escapeTestNoEncode = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/;
    const escapeReplaceNoEncode = new RegExp(escapeTestNoEncode.source, "g");
    const escapeReplacements = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    };
    const getEscapeReplacement = (ch) => escapeReplacements[ch];
    function escape$1(html3, encode) {
      if (encode) {
        if (escapeTest.test(html3)) {
          return html3.replace(escapeReplace, getEscapeReplacement);
        }
      } else {
        if (escapeTestNoEncode.test(html3)) {
          return html3.replace(escapeReplaceNoEncode, getEscapeReplacement);
        }
      }
      return html3;
    }
    const caret = /(^|[^\[])\^/g;
    function edit(regex, opt) {
      let source = typeof regex === "string" ? regex : regex.source;
      opt = opt || "";
      const obj = {
        replace: (name, val) => {
          let valSource = typeof val === "string" ? val : val.source;
          valSource = valSource.replace(caret, "$1");
          source = source.replace(name, valSource);
          return obj;
        },
        getRegex: () => {
          return new RegExp(source, opt);
        }
      };
      return obj;
    }
    function cleanUrl(href) {
      try {
        href = encodeURI(href).replace(/%25/g, "%");
      } catch {
        return null;
      }
      return href;
    }
    const noopTest = { exec: () => null };
    function splitCells(tableRow, count) {
      const row = tableRow.replace(/\|/g, (match, offset, str) => {
        let escaped = false;
        let curr = offset;
        while (--curr >= 0 && str[curr] === "\\")
          escaped = !escaped;
        if (escaped) {
          return "|";
        } else {
          return " |";
        }
      }), cells = row.split(/ \|/);
      let i = 0;
      if (!cells[0].trim()) {
        cells.shift();
      }
      if (cells.length > 0 && !cells[cells.length - 1].trim()) {
        cells.pop();
      }
      if (count) {
        if (cells.length > count) {
          cells.splice(count);
        } else {
          while (cells.length < count)
            cells.push("");
        }
      }
      for (; i < cells.length; i++) {
        cells[i] = cells[i].trim().replace(/\\\|/g, "|");
      }
      return cells;
    }
    function rtrim(str, c, invert) {
      const l = str.length;
      if (l === 0) {
        return "";
      }
      let suffLen = 0;
      while (suffLen < l) {
        const currChar = str.charAt(l - suffLen - 1);
        if (currChar === c && !invert) {
          suffLen++;
        } else if (currChar !== c && invert) {
          suffLen++;
        } else {
          break;
        }
      }
      return str.slice(0, l - suffLen);
    }
    function findClosingBracket(str, b) {
      if (str.indexOf(b[1]) === -1) {
        return -1;
      }
      let level = 0;
      for (let i = 0; i < str.length; i++) {
        if (str[i] === "\\") {
          i++;
        } else if (str[i] === b[0]) {
          level++;
        } else if (str[i] === b[1]) {
          level--;
          if (level < 0) {
            return i;
          }
        }
      }
      return -1;
    }
    function outputLink(cap, link2, raw, lexer3) {
      const href = link2.href;
      const title = link2.title ? escape$1(link2.title) : null;
      const text2 = cap[1].replace(/\\([\[\]])/g, "$1");
      if (cap[0].charAt(0) !== "!") {
        lexer3.state.inLink = true;
        const token = {
          type: "link",
          raw,
          href,
          title,
          text: text2,
          tokens: lexer3.inlineTokens(text2)
        };
        lexer3.state.inLink = false;
        return token;
      }
      return {
        type: "image",
        raw,
        href,
        title,
        text: escape$1(text2)
      };
    }
    function indentCodeCompensation(raw, text2) {
      const matchIndentToCode = raw.match(/^(\s+)(?:```)/);
      if (matchIndentToCode === null) {
        return text2;
      }
      const indentToCode = matchIndentToCode[1];
      return text2.split("\n").map((node) => {
        const matchIndentInNode = node.match(/^\s+/);
        if (matchIndentInNode === null) {
          return node;
        }
        const [indentInNode] = matchIndentInNode;
        if (indentInNode.length >= indentToCode.length) {
          return node.slice(indentToCode.length);
        }
        return node;
      }).join("\n");
    }
    class _Tokenizer {
      options;
      rules;
      // set by the lexer
      lexer;
      // set by the lexer
      constructor(options3) {
        this.options = options3 || exports2.defaults;
      }
      space(src) {
        const cap = this.rules.block.newline.exec(src);
        if (cap && cap[0].length > 0) {
          return {
            type: "space",
            raw: cap[0]
          };
        }
      }
      code(src) {
        const cap = this.rules.block.code.exec(src);
        if (cap) {
          const text2 = cap[0].replace(/^ {1,4}/gm, "");
          return {
            type: "code",
            raw: cap[0],
            codeBlockStyle: "indented",
            text: !this.options.pedantic ? rtrim(text2, "\n") : text2
          };
        }
      }
      fences(src) {
        const cap = this.rules.block.fences.exec(src);
        if (cap) {
          const raw = cap[0];
          const text2 = indentCodeCompensation(raw, cap[3] || "");
          return {
            type: "code",
            raw,
            lang: cap[2] ? cap[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : cap[2],
            text: text2
          };
        }
      }
      heading(src) {
        const cap = this.rules.block.heading.exec(src);
        if (cap) {
          let text2 = cap[2].trim();
          if (/#$/.test(text2)) {
            const trimmed = rtrim(text2, "#");
            if (this.options.pedantic) {
              text2 = trimmed.trim();
            } else if (!trimmed || / $/.test(trimmed)) {
              text2 = trimmed.trim();
            }
          }
          return {
            type: "heading",
            raw: cap[0],
            depth: cap[1].length,
            text: text2,
            tokens: this.lexer.inline(text2)
          };
        }
      }
      hr(src) {
        const cap = this.rules.block.hr.exec(src);
        if (cap) {
          return {
            type: "hr",
            raw: rtrim(cap[0], "\n")
          };
        }
      }
      blockquote(src) {
        const cap = this.rules.block.blockquote.exec(src);
        if (cap) {
          let lines = rtrim(cap[0], "\n").split("\n");
          let raw = "";
          let text2 = "";
          const tokens = [];
          while (lines.length > 0) {
            let inBlockquote = false;
            const currentLines = [];
            let i;
            for (i = 0; i < lines.length; i++) {
              if (/^ {0,3}>/.test(lines[i])) {
                currentLines.push(lines[i]);
                inBlockquote = true;
              } else if (!inBlockquote) {
                currentLines.push(lines[i]);
              } else {
                break;
              }
            }
            lines = lines.slice(i);
            const currentRaw = currentLines.join("\n");
            const currentText = currentRaw.replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g, "\n    $1").replace(/^ {0,3}>[ \t]?/gm, "");
            raw = raw ? `${raw}
${currentRaw}` : currentRaw;
            text2 = text2 ? `${text2}
${currentText}` : currentText;
            const top = this.lexer.state.top;
            this.lexer.state.top = true;
            this.lexer.blockTokens(currentText, tokens, true);
            this.lexer.state.top = top;
            if (lines.length === 0) {
              break;
            }
            const lastToken = tokens[tokens.length - 1];
            if (lastToken?.type === "code") {
              break;
            } else if (lastToken?.type === "blockquote") {
              const oldToken = lastToken;
              const newText = oldToken.raw + "\n" + lines.join("\n");
              const newToken = this.blockquote(newText);
              tokens[tokens.length - 1] = newToken;
              raw = raw.substring(0, raw.length - oldToken.raw.length) + newToken.raw;
              text2 = text2.substring(0, text2.length - oldToken.text.length) + newToken.text;
              break;
            } else if (lastToken?.type === "list") {
              const oldToken = lastToken;
              const newText = oldToken.raw + "\n" + lines.join("\n");
              const newToken = this.list(newText);
              tokens[tokens.length - 1] = newToken;
              raw = raw.substring(0, raw.length - lastToken.raw.length) + newToken.raw;
              text2 = text2.substring(0, text2.length - oldToken.raw.length) + newToken.raw;
              lines = newText.substring(tokens[tokens.length - 1].raw.length).split("\n");
              continue;
            }
          }
          return {
            type: "blockquote",
            raw,
            tokens,
            text: text2
          };
        }
      }
      list(src) {
        let cap = this.rules.block.list.exec(src);
        if (cap) {
          let bull = cap[1].trim();
          const isordered = bull.length > 1;
          const list2 = {
            type: "list",
            raw: "",
            ordered: isordered,
            start: isordered ? +bull.slice(0, -1) : "",
            loose: false,
            items: []
          };
          bull = isordered ? `\\d{1,9}\\${bull.slice(-1)}` : `\\${bull}`;
          if (this.options.pedantic) {
            bull = isordered ? bull : "[*+-]";
          }
          const itemRegex = new RegExp(`^( {0,3}${bull})((?:[	 ][^\\n]*)?(?:\\n|$))`);
          let endsWithBlankLine = false;
          while (src) {
            let endEarly = false;
            let raw = "";
            let itemContents = "";
            if (!(cap = itemRegex.exec(src))) {
              break;
            }
            if (this.rules.block.hr.test(src)) {
              break;
            }
            raw = cap[0];
            src = src.substring(raw.length);
            let line = cap[2].split("\n", 1)[0].replace(/^\t+/, (t) => " ".repeat(3 * t.length));
            let nextLine = src.split("\n", 1)[0];
            let blankLine = !line.trim();
            let indent = 0;
            if (this.options.pedantic) {
              indent = 2;
              itemContents = line.trimStart();
            } else if (blankLine) {
              indent = cap[1].length + 1;
            } else {
              indent = cap[2].search(/[^ ]/);
              indent = indent > 4 ? 1 : indent;
              itemContents = line.slice(indent);
              indent += cap[1].length;
            }
            if (blankLine && /^ *$/.test(nextLine)) {
              raw += nextLine + "\n";
              src = src.substring(nextLine.length + 1);
              endEarly = true;
            }
            if (!endEarly) {
              const nextBulletRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`);
              const hrRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`);
              const fencesBeginRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}(?:\`\`\`|~~~)`);
              const headingBeginRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}#`);
              while (src) {
                const rawLine = src.split("\n", 1)[0];
                nextLine = rawLine;
                if (this.options.pedantic) {
                  nextLine = nextLine.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ");
                }
                if (fencesBeginRegex.test(nextLine)) {
                  break;
                }
                if (headingBeginRegex.test(nextLine)) {
                  break;
                }
                if (nextBulletRegex.test(nextLine)) {
                  break;
                }
                if (hrRegex.test(src)) {
                  break;
                }
                if (nextLine.search(/[^ ]/) >= indent || !nextLine.trim()) {
                  itemContents += "\n" + nextLine.slice(indent);
                } else {
                  if (blankLine) {
                    break;
                  }
                  if (line.search(/[^ ]/) >= 4) {
                    break;
                  }
                  if (fencesBeginRegex.test(line)) {
                    break;
                  }
                  if (headingBeginRegex.test(line)) {
                    break;
                  }
                  if (hrRegex.test(line)) {
                    break;
                  }
                  itemContents += "\n" + nextLine;
                }
                if (!blankLine && !nextLine.trim()) {
                  blankLine = true;
                }
                raw += rawLine + "\n";
                src = src.substring(rawLine.length + 1);
                line = nextLine.slice(indent);
              }
            }
            if (!list2.loose) {
              if (endsWithBlankLine) {
                list2.loose = true;
              } else if (/\n *\n *$/.test(raw)) {
                endsWithBlankLine = true;
              }
            }
            let istask = null;
            let ischecked;
            if (this.options.gfm) {
              istask = /^\[[ xX]\] /.exec(itemContents);
              if (istask) {
                ischecked = istask[0] !== "[ ] ";
                itemContents = itemContents.replace(/^\[[ xX]\] +/, "");
              }
            }
            list2.items.push({
              type: "list_item",
              raw,
              task: !!istask,
              checked: ischecked,
              loose: false,
              text: itemContents,
              tokens: []
            });
            list2.raw += raw;
          }
          list2.items[list2.items.length - 1].raw = list2.items[list2.items.length - 1].raw.trimEnd();
          list2.items[list2.items.length - 1].text = list2.items[list2.items.length - 1].text.trimEnd();
          list2.raw = list2.raw.trimEnd();
          for (let i = 0; i < list2.items.length; i++) {
            this.lexer.state.top = false;
            list2.items[i].tokens = this.lexer.blockTokens(list2.items[i].text, []);
            if (!list2.loose) {
              const spacers = list2.items[i].tokens.filter((t) => t.type === "space");
              const hasMultipleLineBreaks = spacers.length > 0 && spacers.some((t) => /\n.*\n/.test(t.raw));
              list2.loose = hasMultipleLineBreaks;
            }
          }
          if (list2.loose) {
            for (let i = 0; i < list2.items.length; i++) {
              list2.items[i].loose = true;
            }
          }
          return list2;
        }
      }
      html(src) {
        const cap = this.rules.block.html.exec(src);
        if (cap) {
          const token = {
            type: "html",
            block: true,
            raw: cap[0],
            pre: cap[1] === "pre" || cap[1] === "script" || cap[1] === "style",
            text: cap[0]
          };
          return token;
        }
      }
      def(src) {
        const cap = this.rules.block.def.exec(src);
        if (cap) {
          const tag2 = cap[1].toLowerCase().replace(/\s+/g, " ");
          const href = cap[2] ? cap[2].replace(/^<(.*)>$/, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "";
          const title = cap[3] ? cap[3].substring(1, cap[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : cap[3];
          return {
            type: "def",
            tag: tag2,
            raw: cap[0],
            href,
            title
          };
        }
      }
      table(src) {
        const cap = this.rules.block.table.exec(src);
        if (!cap) {
          return;
        }
        if (!/[:|]/.test(cap[2])) {
          return;
        }
        const headers = splitCells(cap[1]);
        const aligns = cap[2].replace(/^\||\| *$/g, "").split("|");
        const rows = cap[3] && cap[3].trim() ? cap[3].replace(/\n[ \t]*$/, "").split("\n") : [];
        const item = {
          type: "table",
          raw: cap[0],
          header: [],
          align: [],
          rows: []
        };
        if (headers.length !== aligns.length) {
          return;
        }
        for (const align of aligns) {
          if (/^ *-+: *$/.test(align)) {
            item.align.push("right");
          } else if (/^ *:-+: *$/.test(align)) {
            item.align.push("center");
          } else if (/^ *:-+ *$/.test(align)) {
            item.align.push("left");
          } else {
            item.align.push(null);
          }
        }
        for (let i = 0; i < headers.length; i++) {
          item.header.push({
            text: headers[i],
            tokens: this.lexer.inline(headers[i]),
            header: true,
            align: item.align[i]
          });
        }
        for (const row of rows) {
          item.rows.push(splitCells(row, item.header.length).map((cell, i) => {
            return {
              text: cell,
              tokens: this.lexer.inline(cell),
              header: false,
              align: item.align[i]
            };
          }));
        }
        return item;
      }
      lheading(src) {
        const cap = this.rules.block.lheading.exec(src);
        if (cap) {
          return {
            type: "heading",
            raw: cap[0],
            depth: cap[2].charAt(0) === "=" ? 1 : 2,
            text: cap[1],
            tokens: this.lexer.inline(cap[1])
          };
        }
      }
      paragraph(src) {
        const cap = this.rules.block.paragraph.exec(src);
        if (cap) {
          const text2 = cap[1].charAt(cap[1].length - 1) === "\n" ? cap[1].slice(0, -1) : cap[1];
          return {
            type: "paragraph",
            raw: cap[0],
            text: text2,
            tokens: this.lexer.inline(text2)
          };
        }
      }
      text(src) {
        const cap = this.rules.block.text.exec(src);
        if (cap) {
          return {
            type: "text",
            raw: cap[0],
            text: cap[0],
            tokens: this.lexer.inline(cap[0])
          };
        }
      }
      escape(src) {
        const cap = this.rules.inline.escape.exec(src);
        if (cap) {
          return {
            type: "escape",
            raw: cap[0],
            text: escape$1(cap[1])
          };
        }
      }
      tag(src) {
        const cap = this.rules.inline.tag.exec(src);
        if (cap) {
          if (!this.lexer.state.inLink && /^<a /i.test(cap[0])) {
            this.lexer.state.inLink = true;
          } else if (this.lexer.state.inLink && /^<\/a>/i.test(cap[0])) {
            this.lexer.state.inLink = false;
          }
          if (!this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
            this.lexer.state.inRawBlock = true;
          } else if (this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
            this.lexer.state.inRawBlock = false;
          }
          return {
            type: "html",
            raw: cap[0],
            inLink: this.lexer.state.inLink,
            inRawBlock: this.lexer.state.inRawBlock,
            block: false,
            text: cap[0]
          };
        }
      }
      link(src) {
        const cap = this.rules.inline.link.exec(src);
        if (cap) {
          const trimmedUrl = cap[2].trim();
          if (!this.options.pedantic && /^</.test(trimmedUrl)) {
            if (!/>$/.test(trimmedUrl)) {
              return;
            }
            const rtrimSlash = rtrim(trimmedUrl.slice(0, -1), "\\");
            if ((trimmedUrl.length - rtrimSlash.length) % 2 === 0) {
              return;
            }
          } else {
            const lastParenIndex = findClosingBracket(cap[2], "()");
            if (lastParenIndex > -1) {
              const start = cap[0].indexOf("!") === 0 ? 5 : 4;
              const linkLen = start + cap[1].length + lastParenIndex;
              cap[2] = cap[2].substring(0, lastParenIndex);
              cap[0] = cap[0].substring(0, linkLen).trim();
              cap[3] = "";
            }
          }
          let href = cap[2];
          let title = "";
          if (this.options.pedantic) {
            const link2 = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(href);
            if (link2) {
              href = link2[1];
              title = link2[3];
            }
          } else {
            title = cap[3] ? cap[3].slice(1, -1) : "";
          }
          href = href.trim();
          if (/^</.test(href)) {
            if (this.options.pedantic && !/>$/.test(trimmedUrl)) {
              href = href.slice(1);
            } else {
              href = href.slice(1, -1);
            }
          }
          return outputLink(cap, {
            href: href ? href.replace(this.rules.inline.anyPunctuation, "$1") : href,
            title: title ? title.replace(this.rules.inline.anyPunctuation, "$1") : title
          }, cap[0], this.lexer);
        }
      }
      reflink(src, links) {
        let cap;
        if ((cap = this.rules.inline.reflink.exec(src)) || (cap = this.rules.inline.nolink.exec(src))) {
          const linkString = (cap[2] || cap[1]).replace(/\s+/g, " ");
          const link2 = links[linkString.toLowerCase()];
          if (!link2) {
            const text2 = cap[0].charAt(0);
            return {
              type: "text",
              raw: text2,
              text: text2
            };
          }
          return outputLink(cap, link2, cap[0], this.lexer);
        }
      }
      emStrong(src, maskedSrc, prevChar = "") {
        let match = this.rules.inline.emStrongLDelim.exec(src);
        if (!match)
          return;
        if (match[3] && prevChar.match(/[\p{L}\p{N}]/u))
          return;
        const nextChar = match[1] || match[2] || "";
        if (!nextChar || !prevChar || this.rules.inline.punctuation.exec(prevChar)) {
          const lLength = [...match[0]].length - 1;
          let rDelim, rLength, delimTotal = lLength, midDelimTotal = 0;
          const endReg = match[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
          endReg.lastIndex = 0;
          maskedSrc = maskedSrc.slice(-1 * src.length + lLength);
          while ((match = endReg.exec(maskedSrc)) != null) {
            rDelim = match[1] || match[2] || match[3] || match[4] || match[5] || match[6];
            if (!rDelim)
              continue;
            rLength = [...rDelim].length;
            if (match[3] || match[4]) {
              delimTotal += rLength;
              continue;
            } else if (match[5] || match[6]) {
              if (lLength % 3 && !((lLength + rLength) % 3)) {
                midDelimTotal += rLength;
                continue;
              }
            }
            delimTotal -= rLength;
            if (delimTotal > 0)
              continue;
            rLength = Math.min(rLength, rLength + delimTotal + midDelimTotal);
            const lastCharLength = [...match[0]][0].length;
            const raw = src.slice(0, lLength + match.index + lastCharLength + rLength);
            if (Math.min(lLength, rLength) % 2) {
              const text3 = raw.slice(1, -1);
              return {
                type: "em",
                raw,
                text: text3,
                tokens: this.lexer.inlineTokens(text3)
              };
            }
            const text2 = raw.slice(2, -2);
            return {
              type: "strong",
              raw,
              text: text2,
              tokens: this.lexer.inlineTokens(text2)
            };
          }
        }
      }
      codespan(src) {
        const cap = this.rules.inline.code.exec(src);
        if (cap) {
          let text2 = cap[2].replace(/\n/g, " ");
          const hasNonSpaceChars = /[^ ]/.test(text2);
          const hasSpaceCharsOnBothEnds = /^ /.test(text2) && / $/.test(text2);
          if (hasNonSpaceChars && hasSpaceCharsOnBothEnds) {
            text2 = text2.substring(1, text2.length - 1);
          }
          text2 = escape$1(text2, true);
          return {
            type: "codespan",
            raw: cap[0],
            text: text2
          };
        }
      }
      br(src) {
        const cap = this.rules.inline.br.exec(src);
        if (cap) {
          return {
            type: "br",
            raw: cap[0]
          };
        }
      }
      del(src) {
        const cap = this.rules.inline.del.exec(src);
        if (cap) {
          return {
            type: "del",
            raw: cap[0],
            text: cap[2],
            tokens: this.lexer.inlineTokens(cap[2])
          };
        }
      }
      autolink(src) {
        const cap = this.rules.inline.autolink.exec(src);
        if (cap) {
          let text2, href;
          if (cap[2] === "@") {
            text2 = escape$1(cap[1]);
            href = "mailto:" + text2;
          } else {
            text2 = escape$1(cap[1]);
            href = text2;
          }
          return {
            type: "link",
            raw: cap[0],
            text: text2,
            href,
            tokens: [
              {
                type: "text",
                raw: text2,
                text: text2
              }
            ]
          };
        }
      }
      url(src) {
        let cap;
        if (cap = this.rules.inline.url.exec(src)) {
          let text2, href;
          if (cap[2] === "@") {
            text2 = escape$1(cap[0]);
            href = "mailto:" + text2;
          } else {
            let prevCapZero;
            do {
              prevCapZero = cap[0];
              cap[0] = this.rules.inline._backpedal.exec(cap[0])?.[0] ?? "";
            } while (prevCapZero !== cap[0]);
            text2 = escape$1(cap[0]);
            if (cap[1] === "www.") {
              href = "http://" + cap[0];
            } else {
              href = cap[0];
            }
          }
          return {
            type: "link",
            raw: cap[0],
            text: text2,
            href,
            tokens: [
              {
                type: "text",
                raw: text2,
                text: text2
              }
            ]
          };
        }
      }
      inlineText(src) {
        const cap = this.rules.inline.text.exec(src);
        if (cap) {
          let text2;
          if (this.lexer.state.inRawBlock) {
            text2 = cap[0];
          } else {
            text2 = escape$1(cap[0]);
          }
          return {
            type: "text",
            raw: cap[0],
            text: text2
          };
        }
      }
    }
    const newline = /^(?: *(?:\n|$))+/;
    const blockCode = /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/;
    const fences = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/;
    const hr = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/;
    const heading = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/;
    const bullet = /(?:[*+-]|\d{1,9}[.)])/;
    const lheading = edit(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g, bullet).replace(/blockCode/g, / {4}/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).getRegex();
    const _paragraph = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/;
    const blockText = /^[^\n]+/;
    const _blockLabel = /(?!\s*\])(?:\\.|[^\[\]\\])+/;
    const def = edit(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label", _blockLabel).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex();
    const list = edit(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, bullet).getRegex();
    const _tag = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";
    const _comment = /<!--(?:-?>|[\s\S]*?(?:-->|$))/;
    const html2 = edit("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))", "i").replace("comment", _comment).replace("tag", _tag).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();
    const paragraph = edit(_paragraph).replace("hr", hr).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", _tag).getRegex();
    const blockquote = edit(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", paragraph).getRegex();
    const blockNormal = {
      blockquote,
      code: blockCode,
      def,
      fences,
      heading,
      hr,
      html: html2,
      lheading,
      list,
      newline,
      paragraph,
      table: noopTest,
      text: blockText
    };
    const gfmTable = edit("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", hr).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", _tag).getRegex();
    const blockGfm = {
      ...blockNormal,
      table: gfmTable,
      paragraph: edit(_paragraph).replace("hr", hr).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", gfmTable).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", _tag).getRegex()
    };
    const blockPedantic = {
      ...blockNormal,
      html: edit(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", _comment).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
      def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
      heading: /^(#{1,6})(.*)(?:\n+|$)/,
      fences: noopTest,
      // fences not supported
      lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
      paragraph: edit(_paragraph).replace("hr", hr).replace("heading", " *#{1,6} *[^\n]").replace("lheading", lheading).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
    };
    const escape = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/;
    const inlineCode = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/;
    const br = /^( {2,}|\\)\n(?!\s*$)/;
    const inlineText = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/;
    const _punctuation = "\\p{P}\\p{S}";
    const punctuation = edit(/^((?![*_])[\spunctuation])/, "u").replace(/punctuation/g, _punctuation).getRegex();
    const blockSkip = /\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g;
    const emStrongLDelim = edit(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/, "u").replace(/punct/g, _punctuation).getRegex();
    const emStrongRDelimAst = edit("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])", "gu").replace(/punct/g, _punctuation).getRegex();
    const emStrongRDelimUnd = edit("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])", "gu").replace(/punct/g, _punctuation).getRegex();
    const anyPunctuation = edit(/\\([punct])/, "gu").replace(/punct/g, _punctuation).getRegex();
    const autolink = edit(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex();
    const _inlineComment = edit(_comment).replace("(?:-->|$)", "-->").getRegex();
    const tag = edit("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", _inlineComment).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex();
    const _inlineLabel = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;
    const link = edit(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label", _inlineLabel).replace("href", /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex();
    const reflink = edit(/^!?\[(label)\]\[(ref)\]/).replace("label", _inlineLabel).replace("ref", _blockLabel).getRegex();
    const nolink = edit(/^!?\[(ref)\](?:\[\])?/).replace("ref", _blockLabel).getRegex();
    const reflinkSearch = edit("reflink|nolink(?!\\()", "g").replace("reflink", reflink).replace("nolink", nolink).getRegex();
    const inlineNormal = {
      _backpedal: noopTest,
      // only used for GFM url
      anyPunctuation,
      autolink,
      blockSkip,
      br,
      code: inlineCode,
      del: noopTest,
      emStrongLDelim,
      emStrongRDelimAst,
      emStrongRDelimUnd,
      escape,
      link,
      nolink,
      punctuation,
      reflink,
      reflinkSearch,
      tag,
      text: inlineText,
      url: noopTest
    };
    const inlinePedantic = {
      ...inlineNormal,
      link: edit(/^!?\[(label)\]\((.*?)\)/).replace("label", _inlineLabel).getRegex(),
      reflink: edit(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", _inlineLabel).getRegex()
    };
    const inlineGfm = {
      ...inlineNormal,
      escape: edit(escape).replace("])", "~|])").getRegex(),
      url: edit(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
      _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
      del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
      text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
    };
    const inlineBreaks = {
      ...inlineGfm,
      br: edit(br).replace("{2,}", "*").getRegex(),
      text: edit(inlineGfm.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
    };
    const block = {
      normal: blockNormal,
      gfm: blockGfm,
      pedantic: blockPedantic
    };
    const inline = {
      normal: inlineNormal,
      gfm: inlineGfm,
      breaks: inlineBreaks,
      pedantic: inlinePedantic
    };
    class _Lexer {
      tokens;
      options;
      state;
      tokenizer;
      inlineQueue;
      constructor(options3) {
        this.tokens = [];
        this.tokens.links = /* @__PURE__ */ Object.create(null);
        this.options = options3 || exports2.defaults;
        this.options.tokenizer = this.options.tokenizer || new _Tokenizer();
        this.tokenizer = this.options.tokenizer;
        this.tokenizer.options = this.options;
        this.tokenizer.lexer = this;
        this.inlineQueue = [];
        this.state = {
          inLink: false,
          inRawBlock: false,
          top: true
        };
        const rules = {
          block: block.normal,
          inline: inline.normal
        };
        if (this.options.pedantic) {
          rules.block = block.pedantic;
          rules.inline = inline.pedantic;
        } else if (this.options.gfm) {
          rules.block = block.gfm;
          if (this.options.breaks) {
            rules.inline = inline.breaks;
          } else {
            rules.inline = inline.gfm;
          }
        }
        this.tokenizer.rules = rules;
      }
      /**
       * Expose Rules
       */
      static get rules() {
        return {
          block,
          inline
        };
      }
      /**
       * Static Lex Method
       */
      static lex(src, options3) {
        const lexer3 = new _Lexer(options3);
        return lexer3.lex(src);
      }
      /**
       * Static Lex Inline Method
       */
      static lexInline(src, options3) {
        const lexer3 = new _Lexer(options3);
        return lexer3.inlineTokens(src);
      }
      /**
       * Preprocessing
       */
      lex(src) {
        src = src.replace(/\r\n|\r/g, "\n");
        this.blockTokens(src, this.tokens);
        for (let i = 0; i < this.inlineQueue.length; i++) {
          const next = this.inlineQueue[i];
          this.inlineTokens(next.src, next.tokens);
        }
        this.inlineQueue = [];
        return this.tokens;
      }
      blockTokens(src, tokens = [], lastParagraphClipped = false) {
        if (this.options.pedantic) {
          src = src.replace(/\t/g, "    ").replace(/^ +$/gm, "");
        } else {
          src = src.replace(/^( *)(\t+)/gm, (_, leading, tabs) => {
            return leading + "    ".repeat(tabs.length);
          });
        }
        let token;
        let lastToken;
        let cutSrc;
        while (src) {
          if (this.options.extensions && this.options.extensions.block && this.options.extensions.block.some((extTokenizer) => {
            if (token = extTokenizer.call({ lexer: this }, src, tokens)) {
              src = src.substring(token.raw.length);
              tokens.push(token);
              return true;
            }
            return false;
          })) {
            continue;
          }
          if (token = this.tokenizer.space(src)) {
            src = src.substring(token.raw.length);
            if (token.raw.length === 1 && tokens.length > 0) {
              tokens[tokens.length - 1].raw += "\n";
            } else {
              tokens.push(token);
            }
            continue;
          }
          if (token = this.tokenizer.code(src)) {
            src = src.substring(token.raw.length);
            lastToken = tokens[tokens.length - 1];
            if (lastToken && (lastToken.type === "paragraph" || lastToken.type === "text")) {
              lastToken.raw += "\n" + token.raw;
              lastToken.text += "\n" + token.text;
              this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
            } else {
              tokens.push(token);
            }
            continue;
          }
          if (token = this.tokenizer.fences(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            continue;
          }
          if (token = this.tokenizer.heading(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            continue;
          }
          if (token = this.tokenizer.hr(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            continue;
          }
          if (token = this.tokenizer.blockquote(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            continue;
          }
          if (token = this.tokenizer.list(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            continue;
          }
          if (token = this.tokenizer.html(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            continue;
          }
          if (token = this.tokenizer.def(src)) {
            src = src.substring(token.raw.length);
            lastToken = tokens[tokens.length - 1];
            if (lastToken && (lastToken.type === "paragraph" || lastToken.type === "text")) {
              lastToken.raw += "\n" + token.raw;
              lastToken.text += "\n" + token.raw;
              this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
            } else if (!this.tokens.links[token.tag]) {
              this.tokens.links[token.tag] = {
                href: token.href,
                title: token.title
              };
            }
            continue;
          }
          if (token = this.tokenizer.table(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            continue;
          }
          if (token = this.tokenizer.lheading(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            continue;
          }
          cutSrc = src;
          if (this.options.extensions && this.options.extensions.startBlock) {
            let startIndex = Infinity;
            const tempSrc = src.slice(1);
            let tempStart;
            this.options.extensions.startBlock.forEach((getStartIndex) => {
              tempStart = getStartIndex.call({ lexer: this }, tempSrc);
              if (typeof tempStart === "number" && tempStart >= 0) {
                startIndex = Math.min(startIndex, tempStart);
              }
            });
            if (startIndex < Infinity && startIndex >= 0) {
              cutSrc = src.substring(0, startIndex + 1);
            }
          }
          if (this.state.top && (token = this.tokenizer.paragraph(cutSrc))) {
            lastToken = tokens[tokens.length - 1];
            if (lastParagraphClipped && lastToken?.type === "paragraph") {
              lastToken.raw += "\n" + token.raw;
              lastToken.text += "\n" + token.text;
              this.inlineQueue.pop();
              this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
            } else {
              tokens.push(token);
            }
            lastParagraphClipped = cutSrc.length !== src.length;
            src = src.substring(token.raw.length);
            continue;
          }
          if (token = this.tokenizer.text(src)) {
            src = src.substring(token.raw.length);
            lastToken = tokens[tokens.length - 1];
            if (lastToken && lastToken.type === "text") {
              lastToken.raw += "\n" + token.raw;
              lastToken.text += "\n" + token.text;
              this.inlineQueue.pop();
              this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
            } else {
              tokens.push(token);
            }
            continue;
          }
          if (src) {
            const errMsg = "Infinite loop on byte: " + src.charCodeAt(0);
            if (this.options.silent) {
              console.error(errMsg);
              break;
            } else {
              throw new Error(errMsg);
            }
          }
        }
        this.state.top = true;
        return tokens;
      }
      inline(src, tokens = []) {
        this.inlineQueue.push({ src, tokens });
        return tokens;
      }
      /**
       * Lexing/Compiling
       */
      inlineTokens(src, tokens = []) {
        let token, lastToken, cutSrc;
        let maskedSrc = src;
        let match;
        let keepPrevChar, prevChar;
        if (this.tokens.links) {
          const links = Object.keys(this.tokens.links);
          if (links.length > 0) {
            while ((match = this.tokenizer.rules.inline.reflinkSearch.exec(maskedSrc)) != null) {
              if (links.includes(match[0].slice(match[0].lastIndexOf("[") + 1, -1))) {
                maskedSrc = maskedSrc.slice(0, match.index) + "[" + "a".repeat(match[0].length - 2) + "]" + maskedSrc.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex);
              }
            }
          }
        }
        while ((match = this.tokenizer.rules.inline.blockSkip.exec(maskedSrc)) != null) {
          maskedSrc = maskedSrc.slice(0, match.index) + "[" + "a".repeat(match[0].length - 2) + "]" + maskedSrc.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
        }
        while ((match = this.tokenizer.rules.inline.anyPunctuation.exec(maskedSrc)) != null) {
          maskedSrc = maskedSrc.slice(0, match.index) + "++" + maskedSrc.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
        }
        while (src) {
          if (!keepPrevChar) {
            prevChar = "";
          }
          keepPrevChar = false;
          if (this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some((extTokenizer) => {
            if (token = extTokenizer.call({ lexer: this }, src, tokens)) {
              src = src.substring(token.raw.length);
              tokens.push(token);
              return true;
            }
            return false;
          })) {
            continue;
          }
          if (token = this.tokenizer.escape(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            continue;
          }
          if (token = this.tokenizer.tag(src)) {
            src = src.substring(token.raw.length);
            lastToken = tokens[tokens.length - 1];
            if (lastToken && token.type === "text" && lastToken.type === "text") {
              lastToken.raw += token.raw;
              lastToken.text += token.text;
            } else {
              tokens.push(token);
            }
            continue;
          }
          if (token = this.tokenizer.link(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            continue;
          }
          if (token = this.tokenizer.reflink(src, this.tokens.links)) {
            src = src.substring(token.raw.length);
            lastToken = tokens[tokens.length - 1];
            if (lastToken && token.type === "text" && lastToken.type === "text") {
              lastToken.raw += token.raw;
              lastToken.text += token.text;
            } else {
              tokens.push(token);
            }
            continue;
          }
          if (token = this.tokenizer.emStrong(src, maskedSrc, prevChar)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            continue;
          }
          if (token = this.tokenizer.codespan(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            continue;
          }
          if (token = this.tokenizer.br(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            continue;
          }
          if (token = this.tokenizer.del(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            continue;
          }
          if (token = this.tokenizer.autolink(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            continue;
          }
          if (!this.state.inLink && (token = this.tokenizer.url(src))) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            continue;
          }
          cutSrc = src;
          if (this.options.extensions && this.options.extensions.startInline) {
            let startIndex = Infinity;
            const tempSrc = src.slice(1);
            let tempStart;
            this.options.extensions.startInline.forEach((getStartIndex) => {
              tempStart = getStartIndex.call({ lexer: this }, tempSrc);
              if (typeof tempStart === "number" && tempStart >= 0) {
                startIndex = Math.min(startIndex, tempStart);
              }
            });
            if (startIndex < Infinity && startIndex >= 0) {
              cutSrc = src.substring(0, startIndex + 1);
            }
          }
          if (token = this.tokenizer.inlineText(cutSrc)) {
            src = src.substring(token.raw.length);
            if (token.raw.slice(-1) !== "_") {
              prevChar = token.raw.slice(-1);
            }
            keepPrevChar = true;
            lastToken = tokens[tokens.length - 1];
            if (lastToken && lastToken.type === "text") {
              lastToken.raw += token.raw;
              lastToken.text += token.text;
            } else {
              tokens.push(token);
            }
            continue;
          }
          if (src) {
            const errMsg = "Infinite loop on byte: " + src.charCodeAt(0);
            if (this.options.silent) {
              console.error(errMsg);
              break;
            } else {
              throw new Error(errMsg);
            }
          }
        }
        return tokens;
      }
    }
    class _Renderer {
      options;
      parser;
      // set by the parser
      constructor(options3) {
        this.options = options3 || exports2.defaults;
      }
      space(token) {
        return "";
      }
      code({ text: text2, lang, escaped }) {
        const langString = (lang || "").match(/^\S*/)?.[0];
        const code = text2.replace(/\n$/, "") + "\n";
        if (!langString) {
          return "<pre><code>" + (escaped ? code : escape$1(code, true)) + "</code></pre>\n";
        }
        return '<pre><code class="language-' + escape$1(langString) + '">' + (escaped ? code : escape$1(code, true)) + "</code></pre>\n";
      }
      blockquote({ tokens }) {
        const body = this.parser.parse(tokens);
        return `<blockquote>
${body}</blockquote>
`;
      }
      html({ text: text2 }) {
        return text2;
      }
      heading({ tokens, depth }) {
        return `<h${depth}>${this.parser.parseInline(tokens)}</h${depth}>
`;
      }
      hr(token) {
        return "<hr>\n";
      }
      list(token) {
        const ordered = token.ordered;
        const start = token.start;
        let body = "";
        for (let j = 0; j < token.items.length; j++) {
          const item = token.items[j];
          body += this.listitem(item);
        }
        const type = ordered ? "ol" : "ul";
        const startAttr = ordered && start !== 1 ? ' start="' + start + '"' : "";
        return "<" + type + startAttr + ">\n" + body + "</" + type + ">\n";
      }
      listitem(item) {
        let itemBody = "";
        if (item.task) {
          const checkbox = this.checkbox({ checked: !!item.checked });
          if (item.loose) {
            if (item.tokens.length > 0 && item.tokens[0].type === "paragraph") {
              item.tokens[0].text = checkbox + " " + item.tokens[0].text;
              if (item.tokens[0].tokens && item.tokens[0].tokens.length > 0 && item.tokens[0].tokens[0].type === "text") {
                item.tokens[0].tokens[0].text = checkbox + " " + item.tokens[0].tokens[0].text;
              }
            } else {
              item.tokens.unshift({
                type: "text",
                raw: checkbox + " ",
                text: checkbox + " "
              });
            }
          } else {
            itemBody += checkbox + " ";
          }
        }
        itemBody += this.parser.parse(item.tokens, !!item.loose);
        return `<li>${itemBody}</li>
`;
      }
      checkbox({ checked }) {
        return "<input " + (checked ? 'checked="" ' : "") + 'disabled="" type="checkbox">';
      }
      paragraph({ tokens }) {
        return `<p>${this.parser.parseInline(tokens)}</p>
`;
      }
      table(token) {
        let header = "";
        let cell = "";
        for (let j = 0; j < token.header.length; j++) {
          cell += this.tablecell(token.header[j]);
        }
        header += this.tablerow({ text: cell });
        let body = "";
        for (let j = 0; j < token.rows.length; j++) {
          const row = token.rows[j];
          cell = "";
          for (let k = 0; k < row.length; k++) {
            cell += this.tablecell(row[k]);
          }
          body += this.tablerow({ text: cell });
        }
        if (body)
          body = `<tbody>${body}</tbody>`;
        return "<table>\n<thead>\n" + header + "</thead>\n" + body + "</table>\n";
      }
      tablerow({ text: text2 }) {
        return `<tr>
${text2}</tr>
`;
      }
      tablecell(token) {
        const content = this.parser.parseInline(token.tokens);
        const type = token.header ? "th" : "td";
        const tag2 = token.align ? `<${type} align="${token.align}">` : `<${type}>`;
        return tag2 + content + `</${type}>
`;
      }
      /**
       * span level renderer
       */
      strong({ tokens }) {
        return `<strong>${this.parser.parseInline(tokens)}</strong>`;
      }
      em({ tokens }) {
        return `<em>${this.parser.parseInline(tokens)}</em>`;
      }
      codespan({ text: text2 }) {
        return `<code>${text2}</code>`;
      }
      br(token) {
        return "<br>";
      }
      del({ tokens }) {
        return `<del>${this.parser.parseInline(tokens)}</del>`;
      }
      link({ href, title, tokens }) {
        const text2 = this.parser.parseInline(tokens);
        const cleanHref = cleanUrl(href);
        if (cleanHref === null) {
          return text2;
        }
        href = cleanHref;
        let out = '<a href="' + href + '"';
        if (title) {
          out += ' title="' + title + '"';
        }
        out += ">" + text2 + "</a>";
        return out;
      }
      image({ href, title, text: text2 }) {
        const cleanHref = cleanUrl(href);
        if (cleanHref === null) {
          return text2;
        }
        href = cleanHref;
        let out = `<img src="${href}" alt="${text2}"`;
        if (title) {
          out += ` title="${title}"`;
        }
        out += ">";
        return out;
      }
      text(token) {
        return "tokens" in token && token.tokens ? this.parser.parseInline(token.tokens) : token.text;
      }
    }
    class _TextRenderer {
      // no need for block level renderers
      strong({ text: text2 }) {
        return text2;
      }
      em({ text: text2 }) {
        return text2;
      }
      codespan({ text: text2 }) {
        return text2;
      }
      del({ text: text2 }) {
        return text2;
      }
      html({ text: text2 }) {
        return text2;
      }
      text({ text: text2 }) {
        return text2;
      }
      link({ text: text2 }) {
        return "" + text2;
      }
      image({ text: text2 }) {
        return "" + text2;
      }
      br() {
        return "";
      }
    }
    class _Parser {
      options;
      renderer;
      textRenderer;
      constructor(options3) {
        this.options = options3 || exports2.defaults;
        this.options.renderer = this.options.renderer || new _Renderer();
        this.renderer = this.options.renderer;
        this.renderer.options = this.options;
        this.renderer.parser = this;
        this.textRenderer = new _TextRenderer();
      }
      /**
       * Static Parse Method
       */
      static parse(tokens, options3) {
        const parser3 = new _Parser(options3);
        return parser3.parse(tokens);
      }
      /**
       * Static Parse Inline Method
       */
      static parseInline(tokens, options3) {
        const parser3 = new _Parser(options3);
        return parser3.parseInline(tokens);
      }
      /**
       * Parse Loop
       */
      parse(tokens, top = true) {
        let out = "";
        for (let i = 0; i < tokens.length; i++) {
          const anyToken = tokens[i];
          if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[anyToken.type]) {
            const genericToken = anyToken;
            const ret = this.options.extensions.renderers[genericToken.type].call({ parser: this }, genericToken);
            if (ret !== false || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(genericToken.type)) {
              out += ret || "";
              continue;
            }
          }
          const token = anyToken;
          switch (token.type) {
            case "space": {
              out += this.renderer.space(token);
              continue;
            }
            case "hr": {
              out += this.renderer.hr(token);
              continue;
            }
            case "heading": {
              out += this.renderer.heading(token);
              continue;
            }
            case "code": {
              out += this.renderer.code(token);
              continue;
            }
            case "table": {
              out += this.renderer.table(token);
              continue;
            }
            case "blockquote": {
              out += this.renderer.blockquote(token);
              continue;
            }
            case "list": {
              out += this.renderer.list(token);
              continue;
            }
            case "html": {
              out += this.renderer.html(token);
              continue;
            }
            case "paragraph": {
              out += this.renderer.paragraph(token);
              continue;
            }
            case "text": {
              let textToken = token;
              let body = this.renderer.text(textToken);
              while (i + 1 < tokens.length && tokens[i + 1].type === "text") {
                textToken = tokens[++i];
                body += "\n" + this.renderer.text(textToken);
              }
              if (top) {
                out += this.renderer.paragraph({
                  type: "paragraph",
                  raw: body,
                  text: body,
                  tokens: [{ type: "text", raw: body, text: body }]
                });
              } else {
                out += body;
              }
              continue;
            }
            default: {
              const errMsg = 'Token with "' + token.type + '" type was not found.';
              if (this.options.silent) {
                console.error(errMsg);
                return "";
              } else {
                throw new Error(errMsg);
              }
            }
          }
        }
        return out;
      }
      /**
       * Parse Inline Tokens
       */
      parseInline(tokens, renderer) {
        renderer = renderer || this.renderer;
        let out = "";
        for (let i = 0; i < tokens.length; i++) {
          const anyToken = tokens[i];
          if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[anyToken.type]) {
            const ret = this.options.extensions.renderers[anyToken.type].call({ parser: this }, anyToken);
            if (ret !== false || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(anyToken.type)) {
              out += ret || "";
              continue;
            }
          }
          const token = anyToken;
          switch (token.type) {
            case "escape": {
              out += renderer.text(token);
              break;
            }
            case "html": {
              out += renderer.html(token);
              break;
            }
            case "link": {
              out += renderer.link(token);
              break;
            }
            case "image": {
              out += renderer.image(token);
              break;
            }
            case "strong": {
              out += renderer.strong(token);
              break;
            }
            case "em": {
              out += renderer.em(token);
              break;
            }
            case "codespan": {
              out += renderer.codespan(token);
              break;
            }
            case "br": {
              out += renderer.br(token);
              break;
            }
            case "del": {
              out += renderer.del(token);
              break;
            }
            case "text": {
              out += renderer.text(token);
              break;
            }
            default: {
              const errMsg = 'Token with "' + token.type + '" type was not found.';
              if (this.options.silent) {
                console.error(errMsg);
                return "";
              } else {
                throw new Error(errMsg);
              }
            }
          }
        }
        return out;
      }
    }
    class _Hooks {
      options;
      constructor(options3) {
        this.options = options3 || exports2.defaults;
      }
      static passThroughHooks = /* @__PURE__ */ new Set([
        "preprocess",
        "postprocess",
        "processAllTokens"
      ]);
      /**
       * Process markdown before marked
       */
      preprocess(markdown) {
        return markdown;
      }
      /**
       * Process HTML after marked is finished
       */
      postprocess(html3) {
        return html3;
      }
      /**
       * Process all tokens before walk tokens
       */
      processAllTokens(tokens) {
        return tokens;
      }
    }
    class Marked2 {
      defaults = _getDefaults();
      options = this.setOptions;
      parse = this.parseMarkdown(_Lexer.lex, _Parser.parse);
      parseInline = this.parseMarkdown(_Lexer.lexInline, _Parser.parseInline);
      Parser = _Parser;
      Renderer = _Renderer;
      TextRenderer = _TextRenderer;
      Lexer = _Lexer;
      Tokenizer = _Tokenizer;
      Hooks = _Hooks;
      constructor(...args) {
        this.use(...args);
      }
      /**
       * Run callback for every token
       */
      walkTokens(tokens, callback) {
        let values = [];
        for (const token of tokens) {
          values = values.concat(callback.call(this, token));
          switch (token.type) {
            case "table": {
              const tableToken = token;
              for (const cell of tableToken.header) {
                values = values.concat(this.walkTokens(cell.tokens, callback));
              }
              for (const row of tableToken.rows) {
                for (const cell of row) {
                  values = values.concat(this.walkTokens(cell.tokens, callback));
                }
              }
              break;
            }
            case "list": {
              const listToken = token;
              values = values.concat(this.walkTokens(listToken.items, callback));
              break;
            }
            default: {
              const genericToken = token;
              if (this.defaults.extensions?.childTokens?.[genericToken.type]) {
                this.defaults.extensions.childTokens[genericToken.type].forEach((childTokens) => {
                  const tokens2 = genericToken[childTokens].flat(Infinity);
                  values = values.concat(this.walkTokens(tokens2, callback));
                });
              } else if (genericToken.tokens) {
                values = values.concat(this.walkTokens(genericToken.tokens, callback));
              }
            }
          }
        }
        return values;
      }
      use(...args) {
        const extensions = this.defaults.extensions || { renderers: {}, childTokens: {} };
        args.forEach((pack) => {
          const opts = { ...pack };
          opts.async = this.defaults.async || opts.async || false;
          if (pack.extensions) {
            pack.extensions.forEach((ext) => {
              if (!ext.name) {
                throw new Error("extension name required");
              }
              if ("renderer" in ext) {
                const prevRenderer = extensions.renderers[ext.name];
                if (prevRenderer) {
                  extensions.renderers[ext.name] = function(...args2) {
                    let ret = ext.renderer.apply(this, args2);
                    if (ret === false) {
                      ret = prevRenderer.apply(this, args2);
                    }
                    return ret;
                  };
                } else {
                  extensions.renderers[ext.name] = ext.renderer;
                }
              }
              if ("tokenizer" in ext) {
                if (!ext.level || ext.level !== "block" && ext.level !== "inline") {
                  throw new Error("extension level must be 'block' or 'inline'");
                }
                const extLevel = extensions[ext.level];
                if (extLevel) {
                  extLevel.unshift(ext.tokenizer);
                } else {
                  extensions[ext.level] = [ext.tokenizer];
                }
                if (ext.start) {
                  if (ext.level === "block") {
                    if (extensions.startBlock) {
                      extensions.startBlock.push(ext.start);
                    } else {
                      extensions.startBlock = [ext.start];
                    }
                  } else if (ext.level === "inline") {
                    if (extensions.startInline) {
                      extensions.startInline.push(ext.start);
                    } else {
                      extensions.startInline = [ext.start];
                    }
                  }
                }
              }
              if ("childTokens" in ext && ext.childTokens) {
                extensions.childTokens[ext.name] = ext.childTokens;
              }
            });
            opts.extensions = extensions;
          }
          if (pack.renderer) {
            const renderer = this.defaults.renderer || new _Renderer(this.defaults);
            for (const prop in pack.renderer) {
              if (!(prop in renderer)) {
                throw new Error(`renderer '${prop}' does not exist`);
              }
              if (["options", "parser"].includes(prop)) {
                continue;
              }
              const rendererProp = prop;
              const rendererFunc = pack.renderer[rendererProp];
              const prevRenderer = renderer[rendererProp];
              renderer[rendererProp] = (...args2) => {
                let ret = rendererFunc.apply(renderer, args2);
                if (ret === false) {
                  ret = prevRenderer.apply(renderer, args2);
                }
                return ret || "";
              };
            }
            opts.renderer = renderer;
          }
          if (pack.tokenizer) {
            const tokenizer = this.defaults.tokenizer || new _Tokenizer(this.defaults);
            for (const prop in pack.tokenizer) {
              if (!(prop in tokenizer)) {
                throw new Error(`tokenizer '${prop}' does not exist`);
              }
              if (["options", "rules", "lexer"].includes(prop)) {
                continue;
              }
              const tokenizerProp = prop;
              const tokenizerFunc = pack.tokenizer[tokenizerProp];
              const prevTokenizer = tokenizer[tokenizerProp];
              tokenizer[tokenizerProp] = (...args2) => {
                let ret = tokenizerFunc.apply(tokenizer, args2);
                if (ret === false) {
                  ret = prevTokenizer.apply(tokenizer, args2);
                }
                return ret;
              };
            }
            opts.tokenizer = tokenizer;
          }
          if (pack.hooks) {
            const hooks = this.defaults.hooks || new _Hooks();
            for (const prop in pack.hooks) {
              if (!(prop in hooks)) {
                throw new Error(`hook '${prop}' does not exist`);
              }
              if (prop === "options") {
                continue;
              }
              const hooksProp = prop;
              const hooksFunc = pack.hooks[hooksProp];
              const prevHook = hooks[hooksProp];
              if (_Hooks.passThroughHooks.has(prop)) {
                hooks[hooksProp] = (arg) => {
                  if (this.defaults.async) {
                    return Promise.resolve(hooksFunc.call(hooks, arg)).then((ret2) => {
                      return prevHook.call(hooks, ret2);
                    });
                  }
                  const ret = hooksFunc.call(hooks, arg);
                  return prevHook.call(hooks, ret);
                };
              } else {
                hooks[hooksProp] = (...args2) => {
                  let ret = hooksFunc.apply(hooks, args2);
                  if (ret === false) {
                    ret = prevHook.apply(hooks, args2);
                  }
                  return ret;
                };
              }
            }
            opts.hooks = hooks;
          }
          if (pack.walkTokens) {
            const walkTokens3 = this.defaults.walkTokens;
            const packWalktokens = pack.walkTokens;
            opts.walkTokens = function(token) {
              let values = [];
              values.push(packWalktokens.call(this, token));
              if (walkTokens3) {
                values = values.concat(walkTokens3.call(this, token));
              }
              return values;
            };
          }
          this.defaults = { ...this.defaults, ...opts };
        });
        return this;
      }
      setOptions(opt) {
        this.defaults = { ...this.defaults, ...opt };
        return this;
      }
      lexer(src, options3) {
        return _Lexer.lex(src, options3 ?? this.defaults);
      }
      parser(tokens, options3) {
        return _Parser.parse(tokens, options3 ?? this.defaults);
      }
      parseMarkdown(lexer3, parser3) {
        const parse3 = (src, options3) => {
          const origOpt = { ...options3 };
          const opt = { ...this.defaults, ...origOpt };
          const throwError = this.onError(!!opt.silent, !!opt.async);
          if (this.defaults.async === true && origOpt.async === false) {
            return throwError(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
          }
          if (typeof src === "undefined" || src === null) {
            return throwError(new Error("marked(): input parameter is undefined or null"));
          }
          if (typeof src !== "string") {
            return throwError(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(src) + ", string expected"));
          }
          if (opt.hooks) {
            opt.hooks.options = opt;
          }
          if (opt.async) {
            return Promise.resolve(opt.hooks ? opt.hooks.preprocess(src) : src).then((src2) => lexer3(src2, opt)).then((tokens) => opt.hooks ? opt.hooks.processAllTokens(tokens) : tokens).then((tokens) => opt.walkTokens ? Promise.all(this.walkTokens(tokens, opt.walkTokens)).then(() => tokens) : tokens).then((tokens) => parser3(tokens, opt)).then((html3) => opt.hooks ? opt.hooks.postprocess(html3) : html3).catch(throwError);
          }
          try {
            if (opt.hooks) {
              src = opt.hooks.preprocess(src);
            }
            let tokens = lexer3(src, opt);
            if (opt.hooks) {
              tokens = opt.hooks.processAllTokens(tokens);
            }
            if (opt.walkTokens) {
              this.walkTokens(tokens, opt.walkTokens);
            }
            let html3 = parser3(tokens, opt);
            if (opt.hooks) {
              html3 = opt.hooks.postprocess(html3);
            }
            return html3;
          } catch (e) {
            return throwError(e);
          }
        };
        return parse3;
      }
      onError(silent, async) {
        return (e) => {
          e.message += "\nPlease report this to https://github.com/markedjs/marked.";
          if (silent) {
            const msg = "<p>An error occurred:</p><pre>" + escape$1(e.message + "", true) + "</pre>";
            if (async) {
              return Promise.resolve(msg);
            }
            return msg;
          }
          if (async) {
            return Promise.reject(e);
          }
          throw e;
        };
      }
    }
    const markedInstance = new Marked2();
    function marked2(src, opt) {
      return markedInstance.parse(src, opt);
    }
    marked2.options = marked2.setOptions = function(options3) {
      markedInstance.setOptions(options3);
      marked2.defaults = markedInstance.defaults;
      changeDefaults(marked2.defaults);
      return marked2;
    };
    marked2.getDefaults = _getDefaults;
    marked2.defaults = exports2.defaults;
    marked2.use = function(...args) {
      markedInstance.use(...args);
      marked2.defaults = markedInstance.defaults;
      changeDefaults(marked2.defaults);
      return marked2;
    };
    marked2.walkTokens = function(tokens, callback) {
      return markedInstance.walkTokens(tokens, callback);
    };
    marked2.parseInline = markedInstance.parseInline;
    marked2.Parser = _Parser;
    marked2.parser = _Parser.parse;
    marked2.Renderer = _Renderer;
    marked2.TextRenderer = _TextRenderer;
    marked2.Lexer = _Lexer;
    marked2.lexer = _Lexer.lex;
    marked2.Tokenizer = _Tokenizer;
    marked2.Hooks = _Hooks;
    marked2.parse = marked2;
    const options2 = marked2.options;
    const setOptions2 = marked2.setOptions;
    const use2 = marked2.use;
    const walkTokens2 = marked2.walkTokens;
    const parseInline2 = marked2.parseInline;
    const parse2 = marked2;
    const parser2 = _Parser.parse;
    const lexer2 = _Lexer.lex;
    exports2.Hooks = _Hooks;
    exports2.Lexer = _Lexer;
    exports2.Marked = Marked2;
    exports2.Parser = _Parser;
    exports2.Renderer = _Renderer;
    exports2.TextRenderer = _TextRenderer;
    exports2.Tokenizer = _Tokenizer;
    exports2.getDefaults = _getDefaults;
    exports2.lexer = lexer2;
    exports2.marked = marked2;
    exports2.options = options2;
    exports2.parse = parse2;
    exports2.parseInline = parseInline2;
    exports2.parser = parser2;
    exports2.setOptions = setOptions2;
    exports2.use = use2;
    exports2.walkTokens = walkTokens2;
  });
})();
var Hooks = __marked_exports.Hooks || exports.Hooks;
var Lexer = __marked_exports.Lexer || exports.Lexer;
var Marked = __marked_exports.Marked || exports.Marked;
var Parser = __marked_exports.Parser || exports.Parser;
var Renderer = __marked_exports.Renderer || exports.Renderer;
var TextRenderer = __marked_exports.TextRenderer || exports.TextRenderer;
var Tokenizer = __marked_exports.Tokenizer || exports.Tokenizer;
var defaults = __marked_exports.defaults || exports.defaults;
var getDefaults = __marked_exports.getDefaults || exports.getDefaults;
var lexer = __marked_exports.lexer || exports.lexer;
var marked = __marked_exports.marked || exports.marked;
var options = __marked_exports.options || exports.options;
var parse = __marked_exports.parse || exports.parse;
var parseInline = __marked_exports.parseInline || exports.parseInline;
var parser = __marked_exports.parser || exports.parser;
var setOptions = __marked_exports.setOptions || exports.setOptions;
var use = __marked_exports.use || exports.use;
var walkTokens = __marked_exports.walkTokens || exports.walkTokens;

// out-build/vs/base/common/objects.js
var _hasOwnProperty = Object.prototype.hasOwnProperty;
function $zo(obj, changer) {
  return _cloneAndChange(obj, changer, /* @__PURE__ */ new Set());
}
function _cloneAndChange(obj, changer, seen) {
  if ($Fg(obj)) {
    return obj;
  }
  const changed = changer(obj);
  if (typeof changed !== "undefined") {
    return changed;
  }
  if (Array.isArray(obj)) {
    const r1 = [];
    for (const e of obj) {
      r1.push(_cloneAndChange(e, changer, seen));
    }
    return r1;
  }
  if ($yg(obj)) {
    if (seen.has(obj)) {
      throw new Error("Cannot clone recursive data-structure");
    }
    seen.add(obj);
    const r2 = {};
    for (const i2 in obj) {
      if (_hasOwnProperty.call(obj, i2)) {
        r2[i2] = _cloneAndChange(obj[i2], changer, seen);
      }
    }
    seen.delete(obj);
    return r2;
  }
  return obj;
}

// out-build/vs/base/browser/markdownRenderer.js
var defaultMarkedRenderers = Object.freeze({
  image: ({ href, title, text: text2 }) => {
    let dimensions = [];
    let attributes = [];
    if (href) {
      ({ href, dimensions } = $rl(href));
      attributes.push(`src="${$pl(href)}"`);
    }
    if (text2) {
      attributes.push(`alt="${$pl(text2)}"`);
    }
    if (title) {
      attributes.push(`title="${$pl(title)}"`);
    }
    if (dimensions.length) {
      attributes = attributes.concat(dimensions);
    }
    return "<img " + attributes.join(" ") + ">";
  },
  paragraph({ tokens }) {
    return `<p>${this.parser.parseInline(tokens)}</p>`;
  },
  link({ href, title, tokens }) {
    let text2 = this.parser.parseInline(tokens);
    if (typeof href !== "string") {
      return "";
    }
    if (href === text2) {
      text2 = $ql(text2);
    }
    title = typeof title === "string" ? $pl($ql(title)) : "";
    href = $ql(href);
    href = href.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
    return `<a href="${href}" title="${title || href}" draggable="false">${text2}</a>`;
  }
});
function $eW(markdown, options2 = {}, markedOptions = {}) {
  const disposables = new $8c();
  let isDisposed = false;
  const element = $IV(options2);
  const _uriMassage = function(part) {
    let data;
    try {
      data = $ti(decodeURIComponent(part));
    } catch (e) {
    }
    if (!data) {
      return part;
    }
    data = $zo(data, (value2) => {
      if (markdown.uris && markdown.uris[value2]) {
        return URI.revive(markdown.uris[value2]);
      } else {
        return void 0;
      }
    });
    return encodeURIComponent(JSON.stringify(data));
  };
  const _href = function(href, isDomUri) {
    const data = markdown.uris && markdown.uris[href];
    let uri = URI.revive(data);
    if (isDomUri) {
      if (href.startsWith(Schemas.data + ":")) {
        return href;
      }
      if (!uri) {
        uri = URI.parse(href);
      }
      return $fh.uriToBrowserUri(uri).toString(true);
    }
    if (!uri) {
      return href;
    }
    if (URI.parse(href).toString() === uri.toString()) {
      return href;
    }
    if (uri.query) {
      uri = uri.with({ query: _uriMassage(uri.query) });
    }
    return uri.toString();
  };
  const renderer = new Renderer();
  renderer.image = defaultMarkedRenderers.image;
  renderer.link = defaultMarkedRenderers.link;
  renderer.paragraph = defaultMarkedRenderers.paragraph;
  const codeBlocks = [];
  const syncCodeBlocks = [];
  if (options2.codeBlockRendererSync) {
    renderer.code = ({ text: text2, lang }) => {
      const id2 = $cR.nextId();
      const value2 = options2.codeBlockRendererSync(postProcessCodeBlockLanguageId(lang), text2);
      syncCodeBlocks.push([id2, value2]);
      return `<div class="code" data-code="${id2}">${$yf(text2)}</div>`;
    };
  } else if (options2.codeBlockRenderer) {
    renderer.code = ({ text: text2, lang }) => {
      const id2 = $cR.nextId();
      const value2 = options2.codeBlockRenderer(postProcessCodeBlockLanguageId(lang), text2);
      codeBlocks.push(value2.then((element2) => [id2, element2]));
      return `<div class="code" data-code="${id2}">${$yf(text2)}</div>`;
    };
  }
  if (options2.actionHandler) {
    const _activateLink = function(event) {
      const target = event.target.closest("a[data-href]");
      if (!$jU(target)) {
        return;
      }
      try {
        let href = target.dataset["href"];
        if (href) {
          if (markdown.baseUri) {
            href = resolveWithBaseUri(URI.from(markdown.baseUri), href);
          }
          options2.actionHandler.callback(href, event);
        }
      } catch (err) {
        $ab(err);
      } finally {
        event.preventDefault();
      }
    };
    const onClick = options2.actionHandler.disposables.add(new $JV(element, "click"));
    const onAuxClick = options2.actionHandler.disposables.add(new $JV(element, "auxclick"));
    options2.actionHandler.disposables.add(Event.any(onClick.event, onAuxClick.event)((e) => {
      const mouseEvent = new $mT(getWindow(element), e);
      if (!mouseEvent.leftButton && !mouseEvent.middleButton) {
        return;
      }
      _activateLink(mouseEvent);
    }));
    options2.actionHandler.disposables.add($uT(element, "keydown", (e) => {
      const keyboardEvent = new $rT(e);
      if (!keyboardEvent.equals(
        10
        /* KeyCode.Space */
      ) && !keyboardEvent.equals(
        3
        /* KeyCode.Enter */
      )) {
        return;
      }
      _activateLink(keyboardEvent);
    }));
  }
  if (!markdown.supportHtml) {
    renderer.html = ({ text: text2 }) => {
      if (options2.sanitizerOptions?.replaceWithPlaintext) {
        return $yf(text2);
      }
      const match = markdown.isTrusted ? text2.match(/^(<span[^>]+>)|(<\/\s*span>)$/) : void 0;
      return match ? text2 : "";
    };
  }
  markedOptions.renderer = renderer;
  let value = markdown.value ?? "";
  if (value.length > 1e5) {
    value = `${value.substr(0, 1e5)}\u2026`;
  }
  if (markdown.supportThemeIcons) {
    value = $el(value);
  }
  let renderedMarkdown;
  if (options2.fillInIncompleteTokens) {
    const opts = {
      ...defaults,
      ...markedOptions
    };
    const tokens = lexer(value, opts);
    const newTokens = $iW(tokens);
    renderedMarkdown = parser(newTokens, opts);
  } else {
    renderedMarkdown = parse(value, { ...markedOptions, async: false });
  }
  if (markdown.supportThemeIcons) {
    const elements = $cW(renderedMarkdown);
    renderedMarkdown = elements.map((e) => typeof e === "string" ? e : e.outerHTML).join("");
  }
  const htmlParser = new DOMParser();
  const markdownHtmlDoc = htmlParser.parseFromString(sanitizeRenderedMarkdown({ isTrusted: markdown.isTrusted, ...options2.sanitizerOptions }, renderedMarkdown), "text/html");
  markdownHtmlDoc.body.querySelectorAll("img, audio, video, source").forEach((img) => {
    const src = img.getAttribute("src");
    if (src) {
      let href = src;
      try {
        if (markdown.baseUri) {
          href = resolveWithBaseUri(URI.from(markdown.baseUri), href);
        }
      } catch (err) {
      }
      img.setAttribute("src", _href(href, true));
      if (options2.remoteImageIsAllowed) {
        const uri = URI.parse(href);
        if (uri.scheme !== Schemas.file && uri.scheme !== Schemas.data && !options2.remoteImageIsAllowed(uri)) {
          img.replaceWith($("", void 0, img.outerHTML));
        }
      }
    }
  });
  markdownHtmlDoc.body.querySelectorAll("a").forEach((a) => {
    const href = a.getAttribute("href");
    a.setAttribute("href", "");
    if (!href || /^data:|javascript:/i.test(href) || /^command:/i.test(href) && !markdown.isTrusted || /^command:(\/\/\/)?_workbench\.downloadResource/i.test(href)) {
      a.replaceWith(...a.childNodes);
    } else {
      let resolvedHref = _href(href, false);
      if (markdown.baseUri) {
        resolvedHref = resolveWithBaseUri(URI.from(markdown.baseUri), href);
      }
      a.dataset.href = resolvedHref;
    }
  });
  element.innerHTML = sanitizeRenderedMarkdown({ isTrusted: markdown.isTrusted, ...options2.sanitizerOptions }, markdownHtmlDoc.body.innerHTML);
  if (codeBlocks.length > 0) {
    Promise.all(codeBlocks).then((tuples) => {
      if (isDisposed) {
        return;
      }
      const renderedElements = new Map(tuples);
      const placeholderElements = element.querySelectorAll(`div[data-code]`);
      for (const placeholderElement of placeholderElements) {
        const renderedElement = renderedElements.get(placeholderElement.dataset["code"] ?? "");
        if (renderedElement) {
          $EU(placeholderElement, renderedElement);
        }
      }
      options2.asyncRenderCallback?.();
    });
  } else if (syncCodeBlocks.length > 0) {
    const renderedElements = new Map(syncCodeBlocks);
    const placeholderElements = element.querySelectorAll(`div[data-code]`);
    for (const placeholderElement of placeholderElements) {
      const renderedElement = renderedElements.get(placeholderElement.dataset["code"] ?? "");
      if (renderedElement) {
        $EU(placeholderElement, renderedElement);
      }
    }
  }
  if (options2.asyncRenderCallback) {
    for (const img of element.getElementsByTagName("img")) {
      const listener = disposables.add($uT(img, "load", () => {
        listener.dispose();
        options2.asyncRenderCallback();
      }));
    }
  }
  return {
    element,
    dispose: () => {
      isDisposed = true;
      disposables.dispose();
    }
  };
}
function postProcessCodeBlockLanguageId(lang) {
  if (!lang) {
    return "";
  }
  const parts = lang.split(/[\s+|:|,|\{|\?]/, 1);
  if (parts.length) {
    return parts[0];
  }
  return lang;
}
function resolveWithBaseUri(baseUri, href) {
  const hasScheme = /^\w[\w\d+.-]*:/.test(href);
  if (hasScheme) {
    return href;
  }
  if (baseUri.path.endsWith("/")) {
    return $Bh(baseUri, href).toString();
  } else {
    return $Bh($xh(baseUri), href).toString();
  }
}
var selfClosingTags = ["area", "base", "br", "col", "command", "embed", "hr", "img", "input", "keygen", "link", "meta", "param", "source", "track", "wbr"];
function sanitizeRenderedMarkdown(options2, renderedMarkdown) {
  const { config, allowedSchemes } = getSanitizerOptions(options2);
  const store = new $8c();
  store.add(addDompurifyHook("uponSanitizeAttribute", (element, e) => {
    if (e.attrName === "style" || e.attrName === "class") {
      if (element.tagName === "SPAN") {
        if (e.attrName === "style") {
          e.keepAttr = /^(color\:(#[0-9a-fA-F]+|var\(--vscode(-[a-zA-Z0-9]+)+\));)?(background-color\:(#[0-9a-fA-F]+|var\(--vscode(-[a-zA-Z0-9]+)+\));)?(border-radius:[0-9]+px;)?$/.test(e.attrValue);
          return;
        } else if (e.attrName === "class") {
          e.keepAttr = /^codicon codicon-[a-z\-]+( codicon-modifier-[a-z\-]+)?$/.test(e.attrValue);
          return;
        }
      }
      e.keepAttr = false;
      return;
    } else if (element.tagName === "INPUT" && element.attributes.getNamedItem("type")?.value === "checkbox") {
      if (e.attrName === "type" && e.attrValue === "checkbox" || e.attrName === "disabled" || e.attrName === "checked") {
        e.keepAttr = true;
        return;
      }
      e.keepAttr = false;
    }
  }));
  store.add(addDompurifyHook("uponSanitizeElement", (element, e) => {
    if (e.tagName === "input") {
      if (element.attributes.getNamedItem("type")?.value === "checkbox") {
        element.setAttribute("disabled", "");
      } else if (!options2.replaceWithPlaintext) {
        element.remove();
      }
    }
    if (options2.replaceWithPlaintext && !e.allowedTags[e.tagName] && e.tagName !== "body") {
      if (element.parentElement) {
        let startTagText;
        let endTagText;
        if (e.tagName === "#comment") {
          startTagText = `<!--${element.textContent}-->`;
        } else {
          const isSelfClosing = selfClosingTags.includes(e.tagName);
          const attrString = element.attributes.length ? " " + Array.from(element.attributes).map((attr) => `${attr.name}="${attr.value}"`).join(" ") : "";
          startTagText = `<${e.tagName}${attrString}>`;
          if (!isSelfClosing) {
            endTagText = `</${e.tagName}>`;
          }
        }
        const fragment = document.createDocumentFragment();
        const textNode = element.parentElement.ownerDocument.createTextNode(startTagText);
        fragment.appendChild(textNode);
        const endTagTextNode = endTagText ? element.parentElement.ownerDocument.createTextNode(endTagText) : void 0;
        while (element.firstChild) {
          fragment.appendChild(element.firstChild);
        }
        if (endTagTextNode) {
          fragment.appendChild(endTagTextNode);
        }
        element.parentElement.replaceChild(fragment, element);
      }
    }
  }));
  store.add($YU(allowedSchemes));
  try {
    return sanitize(renderedMarkdown, { ...config, RETURN_TRUSTED_TYPE: true });
  } finally {
    store.dispose();
  }
}
var $fW = [
  "align",
  "autoplay",
  "alt",
  "checked",
  "class",
  "colspan",
  "controls",
  "data-code",
  "data-href",
  "disabled",
  "draggable",
  "height",
  "href",
  "loop",
  "muted",
  "playsinline",
  "poster",
  "rowspan",
  "src",
  "style",
  "target",
  "title",
  "type",
  "width",
  "start"
];
function getSanitizerOptions(options2) {
  const allowedSchemes = [
    Schemas.http,
    Schemas.https,
    Schemas.mailto,
    Schemas.data,
    Schemas.file,
    Schemas.vscodeFileResource,
    Schemas.vscodeRemote,
    Schemas.vscodeRemoteResource
  ];
  if (options2.isTrusted) {
    allowedSchemes.push(Schemas.command);
  }
  return {
    config: {
      // allowedTags should included everything that markdown renders to.
      // Since we have our own sanitize function for marked, it's possible we missed some tag so let dompurify make sure.
      // HTML tags that can result from markdown are from reading https://spec.commonmark.org/0.29/
      // HTML table tags that can result from markdown are from https://github.github.com/gfm/#tables-extension-
      ALLOWED_TAGS: options2.allowedTags ?? [...$ZU],
      ALLOWED_ATTR: $fW,
      ALLOW_UNKNOWN_PROTOCOLS: true
    },
    allowedSchemes
  };
}
function $gW(string) {
  return typeof string === "string" ? string : $hW(string);
}
function $hW(markdown, withCodeBlocks) {
  let value = markdown.value ?? "";
  if (value.length > 1e5) {
    value = `${value.substr(0, 1e5)}\u2026`;
  }
  const html2 = parse(value, { async: false, renderer: withCodeBlocks ? plainTextWithCodeBlocksRenderer.value : plainTextRenderer.value });
  return sanitizeRenderedMarkdown({ isTrusted: false }, html2).toString().replace(/&(#\d+|[a-zA-Z]+);/g, (m) => unescapeInfo.get(m) ?? m);
}
var unescapeInfo = /* @__PURE__ */ new Map([
  ["&quot;", '"'],
  ["&nbsp;", " "],
  ["&amp;", "&"],
  ["&#39;", "'"],
  ["&lt;", "<"],
  ["&gt;", ">"]
]);
function createRenderer() {
  const renderer = new Renderer();
  renderer.code = ({ text: text2 }) => {
    return text2;
  };
  renderer.blockquote = ({ text: text2 }) => {
    return text2 + "\n";
  };
  renderer.html = (_) => {
    return "";
  };
  renderer.heading = function({ tokens }) {
    return this.parser.parseInline(tokens) + "\n";
  };
  renderer.hr = () => {
    return "";
  };
  renderer.list = function({ items }) {
    return items.map((x) => this.listitem(x)).join("\n") + "\n";
  };
  renderer.listitem = ({ text: text2 }) => {
    return text2 + "\n";
  };
  renderer.paragraph = function({ tokens }) {
    return this.parser.parseInline(tokens) + "\n";
  };
  renderer.table = function({ header, rows }) {
    return header.map((cell) => this.tablecell(cell)).join(" ") + "\n" + rows.map((cells) => cells.map((cell) => this.tablecell(cell)).join(" ")).join("\n") + "\n";
  };
  renderer.tablerow = ({ text: text2 }) => {
    return text2;
  };
  renderer.tablecell = function({ tokens }) {
    return this.parser.parseInline(tokens);
  };
  renderer.strong = ({ text: text2 }) => {
    return text2;
  };
  renderer.em = ({ text: text2 }) => {
    return text2;
  };
  renderer.codespan = ({ text: text2 }) => {
    return text2;
  };
  renderer.br = (_) => {
    return "\n";
  };
  renderer.del = ({ text: text2 }) => {
    return text2;
  };
  renderer.image = (_) => {
    return "";
  };
  renderer.text = ({ text: text2 }) => {
    return text2;
  };
  renderer.link = ({ text: text2 }) => {
    return text2;
  };
  return renderer;
}
var plainTextRenderer = new $7((withCodeBlocks) => createRenderer());
var plainTextWithCodeBlocksRenderer = new $7(() => {
  const renderer = createRenderer();
  renderer.code = ({ text: text2 }) => {
    return `
\`\`\`
${text2}
\`\`\`
`;
  };
  return renderer;
});
function mergeRawTokenText(tokens) {
  let mergedTokenText = "";
  tokens.forEach((token) => {
    mergedTokenText += token.raw;
  });
  return mergedTokenText;
}
function completeSingleLinePattern(token) {
  if (!token.tokens) {
    return void 0;
  }
  for (let i = token.tokens.length - 1; i >= 0; i--) {
    const subtoken = token.tokens[i];
    if (subtoken.type === "text") {
      const lines = subtoken.raw.split("\n");
      const lastLine = lines[lines.length - 1];
      if (lastLine.includes("`")) {
        return completeCodespan(token);
      } else if (lastLine.includes("**")) {
        return completeDoublestar(token);
      } else if (lastLine.match(/\*\w/)) {
        return completeStar(token);
      } else if (lastLine.match(/(^|\s)__\w/)) {
        return completeDoubleUnderscore(token);
      } else if (lastLine.match(/(^|\s)_\w/)) {
        return completeUnderscore(token);
      } else if (
        // Text with start of link target
        hasLinkTextAndStartOfLinkTarget(lastLine) || // This token doesn't have the link text, eg if it contains other markdown constructs that are in other subtokens.
        // But some preceding token does have an unbalanced [ at least
        hasStartOfLinkTargetAndNoLinkText(lastLine) && token.tokens.slice(0, i).some((t) => t.type === "text" && t.raw.match(/\[[^\]]*$/))
      ) {
        const nextTwoSubTokens = token.tokens.slice(i + 1);
        if (
          // If the link was parsed as a link, then look for a link token and a text token with a quote
          nextTwoSubTokens[0]?.type === "link" && nextTwoSubTokens[1]?.type === "text" && nextTwoSubTokens[1].raw.match(/^ *"[^"]*$/) || // And if the link was not parsed as a link (eg command link), just look for a single quote in this token
          lastLine.match(/^[^"]* +"[^"]*$/)
        ) {
          return completeLinkTargetArg(token);
        }
        return completeLinkTarget(token);
      } else if (lastLine.match(/(^|\s)\[\w*/)) {
        return completeLinkText(token);
      }
    }
  }
  return void 0;
}
function hasLinkTextAndStartOfLinkTarget(str) {
  return !!str.match(/(^|\s)\[.*\]\(\w*/);
}
function hasStartOfLinkTargetAndNoLinkText(str) {
  return !!str.match(/^[^\[]*\]\([^\)]*$/);
}
function completeListItemPattern(list) {
  const lastListItem = list.items[list.items.length - 1];
  const lastListSubToken = lastListItem.tokens ? lastListItem.tokens[lastListItem.tokens.length - 1] : void 0;
  let newToken;
  if (lastListSubToken?.type === "text" && !("inRawBlock" in lastListItem)) {
    newToken = completeSingleLinePattern(lastListSubToken);
  }
  if (!newToken || newToken.type !== "paragraph") {
    return;
  }
  const previousListItemsText = mergeRawTokenText(list.items.slice(0, -1));
  const lastListItemLead = lastListItem.raw.match(/^(\s*(-|\d+\.|\*) +)/)?.[0];
  if (!lastListItemLead) {
    return;
  }
  const newListItemText = lastListItemLead + mergeRawTokenText(lastListItem.tokens.slice(0, -1)) + newToken.raw;
  const newList = lexer(previousListItemsText + newListItemText)[0];
  if (newList.type !== "list") {
    return;
  }
  return newList;
}
var maxIncompleteTokensFixRounds = 3;
function $iW(tokens) {
  for (let i = 0; i < maxIncompleteTokensFixRounds; i++) {
    const newTokens = fillInIncompleteTokensOnce(tokens);
    if (newTokens) {
      tokens = newTokens;
    } else {
      break;
    }
  }
  return tokens;
}
function fillInIncompleteTokensOnce(tokens) {
  let i;
  let newTokens;
  for (i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.type === "paragraph" && token.raw.match(/(\n|^)\|/)) {
      newTokens = completeTable(tokens.slice(i));
      break;
    }
    if (i === tokens.length - 1 && token.type === "list") {
      const newListToken = completeListItemPattern(token);
      if (newListToken) {
        newTokens = [newListToken];
        break;
      }
    }
    if (i === tokens.length - 1 && token.type === "paragraph") {
      const newToken = completeSingleLinePattern(token);
      if (newToken) {
        newTokens = [newToken];
        break;
      }
    }
  }
  if (newTokens) {
    const newTokensList = [
      ...tokens.slice(0, i),
      ...newTokens
    ];
    newTokensList.links = tokens.links;
    return newTokensList;
  }
  return null;
}
function completeCodespan(token) {
  return completeWithString(token, "`");
}
function completeStar(tokens) {
  return completeWithString(tokens, "*");
}
function completeUnderscore(tokens) {
  return completeWithString(tokens, "_");
}
function completeLinkTarget(tokens) {
  return completeWithString(tokens, ")");
}
function completeLinkTargetArg(tokens) {
  return completeWithString(tokens, '")');
}
function completeLinkText(tokens) {
  return completeWithString(tokens, "](https://microsoft.com)");
}
function completeDoublestar(tokens) {
  return completeWithString(tokens, "**");
}
function completeDoubleUnderscore(tokens) {
  return completeWithString(tokens, "__");
}
function completeWithString(tokens, closingString) {
  const mergedRawText = mergeRawTokenText(Array.isArray(tokens) ? tokens : [tokens]);
  return lexer(mergedRawText + closingString)[0];
}
function completeTable(tokens) {
  const mergedRawText = mergeRawTokenText(tokens);
  const lines = mergedRawText.split("\n");
  let numCols;
  let hasSeparatorRow = false;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (typeof numCols === "undefined" && line.match(/^\s*\|/)) {
      const line1Matches = line.match(/(\|[^\|]+)(?=\||$)/g);
      if (line1Matches) {
        numCols = line1Matches.length;
      }
    } else if (typeof numCols === "number") {
      if (line.match(/^\s*\|/)) {
        if (i !== lines.length - 1) {
          return void 0;
        }
        hasSeparatorRow = true;
      } else {
        return void 0;
      }
    }
  }
  if (typeof numCols === "number" && numCols > 0) {
    const prefixText = hasSeparatorRow ? lines.slice(0, -1).join("\n") : mergedRawText;
    const line1EndsInPipe = !!prefixText.match(/\|\s*$/);
    const newRawText = prefixText + (line1EndsInPipe ? "" : "|") + `
|${" --- |".repeat(numCols)}`;
    return lexer(newRawText);
  }
  return void 0;
}
function addDompurifyHook(hook, cb) {
  addHook(hook, cb);
  return $7c(() => removeHook(hook));
}

// out-build/vs/base/browser/touch.js
var EventType;
(function(EventType2) {
  EventType2.Tap = "-monaco-gesturetap";
  EventType2.Change = "-monaco-gesturechange";
  EventType2.Start = "-monaco-gesturestart";
  EventType2.End = "-monaco-gesturesend";
  EventType2.Contextmenu = "-monaco-gesturecontextmenu";
})(EventType || (EventType = {}));
var $cV = class _$cV extends $9c {
  static {
    this.c = -5e-3;
  }
  static {
    this.g = 700;
  }
  static {
    this.u = 400;
  }
  // ms
  constructor() {
    super();
    this.h = false;
    this.j = new $gd();
    this.m = new $gd();
    this.r = {};
    this.n = null;
    this.s = 0;
    this.B(Event.runAndSubscribe(onDidRegisterWindow, ({ window: window2, disposables }) => {
      disposables.add($uT(window2.document, "touchstart", (e) => this.w(e), { passive: false }));
      disposables.add($uT(window2.document, "touchend", (e) => this.z(window2, e)));
      disposables.add($uT(window2.document, "touchmove", (e) => this.G(e), { passive: false }));
    }, { window: $ZS, disposables: this.q }));
  }
  static addTarget(element) {
    if (!_$cV.isTouchDevice()) {
      return $9c.None;
    }
    if (!_$cV.f) {
      _$cV.f = $2c(new _$cV());
    }
    const remove = _$cV.f.j.push(element);
    return $7c(remove);
  }
  static ignoreTarget(element) {
    if (!_$cV.isTouchDevice()) {
      return $9c.None;
    }
    if (!_$cV.f) {
      _$cV.f = $2c(new _$cV());
    }
    const remove = _$cV.f.m.push(element);
    return $7c(remove);
  }
  static isTouchDevice() {
    return "ontouchstart" in $ZS || navigator.maxTouchPoints > 0;
  }
  dispose() {
    if (this.n) {
      this.n.dispose();
      this.n = null;
    }
    super.dispose();
  }
  w(e) {
    const timestamp = Date.now();
    if (this.n) {
      this.n.dispose();
      this.n = null;
    }
    for (let i = 0, len = e.targetTouches.length; i < len; i++) {
      const touch = e.targetTouches.item(i);
      this.r[touch.identifier] = {
        id: touch.identifier,
        initialTarget: touch.target,
        initialTimeStamp: timestamp,
        initialPageX: touch.pageX,
        initialPageY: touch.pageY,
        rollingTimestamps: [timestamp],
        rollingPageX: [touch.pageX],
        rollingPageY: [touch.pageY]
      };
      const evt = this.C(EventType.Start, touch.target);
      evt.pageX = touch.pageX;
      evt.pageY = touch.pageY;
      this.D(evt);
    }
    if (this.h) {
      e.preventDefault();
      e.stopPropagation();
      this.h = false;
    }
  }
  z(targetWindow, e) {
    const timestamp = Date.now();
    const activeTouchCount = Object.keys(this.r).length;
    for (let i = 0, len = e.changedTouches.length; i < len; i++) {
      const touch = e.changedTouches.item(i);
      if (!this.r.hasOwnProperty(String(touch.identifier))) {
        console.warn("move of an UNKNOWN touch", touch);
        continue;
      }
      const data = this.r[touch.identifier], holdTime = Date.now() - data.initialTimeStamp;
      if (holdTime < _$cV.g && Math.abs(data.initialPageX - $Fb(data.rollingPageX)) < 30 && Math.abs(data.initialPageY - $Fb(data.rollingPageY)) < 30) {
        const evt = this.C(EventType.Tap, data.initialTarget);
        evt.pageX = $Fb(data.rollingPageX);
        evt.pageY = $Fb(data.rollingPageY);
        this.D(evt);
      } else if (holdTime >= _$cV.g && Math.abs(data.initialPageX - $Fb(data.rollingPageX)) < 30 && Math.abs(data.initialPageY - $Fb(data.rollingPageY)) < 30) {
        const evt = this.C(EventType.Contextmenu, data.initialTarget);
        evt.pageX = $Fb(data.rollingPageX);
        evt.pageY = $Fb(data.rollingPageY);
        this.D(evt);
      } else if (activeTouchCount === 1) {
        const finalX = $Fb(data.rollingPageX);
        const finalY = $Fb(data.rollingPageY);
        const deltaT = $Fb(data.rollingTimestamps) - data.rollingTimestamps[0];
        const deltaX = finalX - data.rollingPageX[0];
        const deltaY = finalY - data.rollingPageY[0];
        const dispatchTo = [...this.j].filter((t) => data.initialTarget instanceof Node && t.contains(data.initialTarget));
        this.F(
          targetWindow,
          dispatchTo,
          timestamp,
          // time now
          Math.abs(deltaX) / deltaT,
          // speed
          deltaX > 0 ? 1 : -1,
          // x direction
          finalX,
          // x now
          Math.abs(deltaY) / deltaT,
          // y speed
          deltaY > 0 ? 1 : -1,
          // y direction
          finalY
          // y now
        );
      }
      this.D(this.C(EventType.End, data.initialTarget));
      delete this.r[touch.identifier];
    }
    if (this.h) {
      e.preventDefault();
      e.stopPropagation();
      this.h = false;
    }
  }
  C(type, initialTarget) {
    const event = document.createEvent("CustomEvent");
    event.initEvent(type, false, true);
    event.initialTarget = initialTarget;
    event.tapCount = 0;
    return event;
  }
  D(event) {
    if (event.type === EventType.Tap) {
      const currentTime = (/* @__PURE__ */ new Date()).getTime();
      let setTapCount = 0;
      if (currentTime - this.s > _$cV.u) {
        setTapCount = 1;
      } else {
        setTapCount = 2;
      }
      this.s = currentTime;
      event.tapCount = setTapCount;
    } else if (event.type === EventType.Change || event.type === EventType.Contextmenu) {
      this.s = 0;
    }
    if (event.initialTarget instanceof Node) {
      for (const ignoreTarget of this.m) {
        if (ignoreTarget.contains(event.initialTarget)) {
          return;
        }
      }
      const targets = [];
      for (const target of this.j) {
        if (target.contains(event.initialTarget)) {
          let depth = 0;
          let now = event.initialTarget;
          while (now && now !== target) {
            depth++;
            now = now.parentElement;
          }
          targets.push([depth, target]);
        }
      }
      targets.sort((a, b) => a[0] - b[0]);
      for (const [_, target] of targets) {
        target.dispatchEvent(event);
        this.h = true;
      }
    }
  }
  F(targetWindow, dispatchTo, t1, vX, dirX, x, vY, dirY, y) {
    this.n = $ET(targetWindow, () => {
      const now = Date.now();
      const deltaT = now - t1;
      let delta_pos_x = 0, delta_pos_y = 0;
      let stopped = true;
      vX += _$cV.c * deltaT;
      vY += _$cV.c * deltaT;
      if (vX > 0) {
        stopped = false;
        delta_pos_x = dirX * vX * deltaT;
      }
      if (vY > 0) {
        stopped = false;
        delta_pos_y = dirY * vY * deltaT;
      }
      const evt = this.C(EventType.Change);
      evt.translationX = delta_pos_x;
      evt.translationY = delta_pos_y;
      dispatchTo.forEach((d) => d.dispatchEvent(evt));
      if (!stopped) {
        this.F(targetWindow, dispatchTo, now, vX, dirX, x + delta_pos_x, vY, dirY, y + delta_pos_y);
      }
    });
  }
  G(e) {
    const timestamp = Date.now();
    for (let i = 0, len = e.changedTouches.length; i < len; i++) {
      const touch = e.changedTouches.item(i);
      if (!this.r.hasOwnProperty(String(touch.identifier))) {
        console.warn("end of an UNKNOWN touch", touch);
        continue;
      }
      const data = this.r[touch.identifier];
      const evt = this.C(EventType.Change, data.initialTarget);
      evt.translationX = touch.pageX - $Fb(data.rollingPageX);
      evt.translationY = touch.pageY - $Fb(data.rollingPageY);
      evt.pageX = touch.pageX;
      evt.pageY = touch.pageY;
      this.D(evt);
      if (data.rollingPageX.length > 3) {
        data.rollingPageX.shift();
        data.rollingPageY.shift();
        data.rollingTimestamps.shift();
      }
      data.rollingPageX.push(touch.pageX);
      data.rollingPageY.push(touch.pageY);
      data.rollingTimestamps.push(timestamp);
    }
    if (this.h) {
      e.preventDefault();
      e.stopPropagation();
      this.h = false;
    }
  }
};
__decorate([
  $pi
], $cV, "isTouchDevice", null);

// out-build/vs/base/browser/ui/hover/hoverDelegateFactory.js
var nullHoverDelegateFactory = () => ({
  get delay() {
    return -1;
  },
  dispose: () => {
  },
  showHover: () => {
    return void 0;
  }
});
var hoverDelegateFactory = nullHoverDelegateFactory;
var defaultHoverDelegateMouse = new $7(() => hoverDelegateFactory("mouse", false));
var defaultHoverDelegateElement = new $7(() => hoverDelegateFactory("element", false));
function $zV(placement) {
  if (placement === "element") {
    return defaultHoverDelegateElement.value;
  }
  return defaultHoverDelegateMouse.value;
}

// out-build/vs/base/common/actions.js
var $Cj = class extends $9c {
  constructor(id2, label = "", cssClass = "", enabled = true, actionCallback) {
    super();
    this.j = this.B(new $Ce());
    this.onDidChange = this.j.event;
    this.z = true;
    this.m = id2;
    this.n = label;
    this.w = cssClass;
    this.z = enabled;
    this.D = actionCallback;
  }
  get id() {
    return this.m;
  }
  get label() {
    return this.n;
  }
  set label(value) {
    this.F(value);
  }
  F(value) {
    if (this.n !== value) {
      this.n = value;
      this.j.fire({ label: value });
    }
  }
  get tooltip() {
    return this.u || "";
  }
  set tooltip(value) {
    this.G(value);
  }
  G(value) {
    if (this.u !== value) {
      this.u = value;
      this.j.fire({ tooltip: value });
    }
  }
  get class() {
    return this.w;
  }
  set class(value) {
    this.H(value);
  }
  H(value) {
    if (this.w !== value) {
      this.w = value;
      this.j.fire({ class: value });
    }
  }
  get enabled() {
    return this.z;
  }
  set enabled(value) {
    this.I(value);
  }
  I(value) {
    if (this.z !== value) {
      this.z = value;
      this.j.fire({ enabled: value });
    }
  }
  get checked() {
    return this.C;
  }
  set checked(value) {
    this.J(value);
  }
  J(value) {
    if (this.C !== value) {
      this.C = value;
      this.j.fire({ checked: value });
    }
  }
  async run(event, data) {
    if (this.D) {
      await this.D(event);
    }
  }
};
var $Ej = class _$Ej {
  constructor() {
    this.id = _$Ej.ID;
    this.label = "";
    this.tooltip = "";
    this.class = "separator";
    this.enabled = false;
    this.checked = false;
  }
  /**
   * Joins all non-empty lists of actions with separators.
   */
  static join(...actionLists) {
    let out = [];
    for (const list of actionLists) {
      if (!list.length) {
      } else if (out.length) {
        out = [...out, new _$Ej(), ...list];
      } else {
        out = list;
      }
    }
    return out;
  }
  static {
    this.ID = "vs.actions.separator";
  }
  async run() {
  }
};
var $Gj = class _$Gj extends $Cj {
  static {
    this.ID = "vs.actions.empty";
  }
  constructor() {
    super(_$Gj.ID, localize(41, null), void 0, false);
  }
};

// out-build/vs/base/common/color.js
function roundFloat(number, decimalPoints) {
  const decimal = Math.pow(10, decimalPoints);
  return Math.round(number * decimal) / decimal;
}
var $Gu = class {
  constructor(r, g, b, a = 1) {
    this._rgbaBrand = void 0;
    this.r = Math.min(255, Math.max(0, r)) | 0;
    this.g = Math.min(255, Math.max(0, g)) | 0;
    this.b = Math.min(255, Math.max(0, b)) | 0;
    this.a = roundFloat(Math.max(Math.min(1, a), 0), 3);
  }
  static equals(a, b) {
    return a.r === b.r && a.g === b.g && a.b === b.b && a.a === b.a;
  }
};
var $Hu = class _$Hu {
  constructor(h, s, l, a) {
    this._hslaBrand = void 0;
    this.h = Math.max(Math.min(360, h), 0) | 0;
    this.s = roundFloat(Math.max(Math.min(1, s), 0), 3);
    this.l = roundFloat(Math.max(Math.min(1, l), 0), 3);
    this.a = roundFloat(Math.max(Math.min(1, a), 0), 3);
  }
  static equals(a, b) {
    return a.h === b.h && a.s === b.s && a.l === b.l && a.a === b.a;
  }
  /**
   * Converts an RGB color value to HSL. Conversion formula
   * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
   * Assumes r, g, and b are contained in the set [0, 255] and
   * returns h in the set [0, 360], s, and l in the set [0, 1].
   */
  static fromRGBA(rgba) {
    const r = rgba.r / 255;
    const g = rgba.g / 255;
    const b = rgba.b / 255;
    const a = rgba.a;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h = 0;
    let s = 0;
    const l = (min + max) / 2;
    const chroma = max - min;
    if (chroma > 0) {
      s = Math.min(l <= 0.5 ? chroma / (2 * l) : chroma / (2 - 2 * l), 1);
      switch (max) {
        case r:
          h = (g - b) / chroma + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / chroma + 2;
          break;
        case b:
          h = (r - g) / chroma + 4;
          break;
      }
      h *= 60;
      h = Math.round(h);
    }
    return new _$Hu(h, s, l, a);
  }
  static i(p, q, t) {
    if (t < 0) {
      t += 1;
    }
    if (t > 1) {
      t -= 1;
    }
    if (t < 1 / 6) {
      return p + (q - p) * 6 * t;
    }
    if (t < 1 / 2) {
      return q;
    }
    if (t < 2 / 3) {
      return p + (q - p) * (2 / 3 - t) * 6;
    }
    return p;
  }
  /**
   * Converts an HSL color value to RGB. Conversion formula
   * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
   * Assumes h in the set [0, 360] s, and l are contained in the set [0, 1] and
   * returns r, g, and b in the set [0, 255].
   */
  static toRGBA(hsla) {
    const h = hsla.h / 360;
    const { s, l, a } = hsla;
    let r, g, b;
    if (s === 0) {
      r = g = b = l;
    } else {
      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;
      r = _$Hu.i(p, q, h + 1 / 3);
      g = _$Hu.i(p, q, h);
      b = _$Hu.i(p, q, h - 1 / 3);
    }
    return new $Gu(Math.round(r * 255), Math.round(g * 255), Math.round(b * 255), a);
  }
};
var $Iu = class _$Iu {
  constructor(h, s, v, a) {
    this._hsvaBrand = void 0;
    this.h = Math.max(Math.min(360, h), 0) | 0;
    this.s = roundFloat(Math.max(Math.min(1, s), 0), 3);
    this.v = roundFloat(Math.max(Math.min(1, v), 0), 3);
    this.a = roundFloat(Math.max(Math.min(1, a), 0), 3);
  }
  static equals(a, b) {
    return a.h === b.h && a.s === b.s && a.v === b.v && a.a === b.a;
  }
  // from http://www.rapidtables.com/convert/color/rgb-to-hsv.htm
  static fromRGBA(rgba) {
    const r = rgba.r / 255;
    const g = rgba.g / 255;
    const b = rgba.b / 255;
    const cmax = Math.max(r, g, b);
    const cmin = Math.min(r, g, b);
    const delta = cmax - cmin;
    const s = cmax === 0 ? 0 : delta / cmax;
    let m;
    if (delta === 0) {
      m = 0;
    } else if (cmax === r) {
      m = ((g - b) / delta % 6 + 6) % 6;
    } else if (cmax === g) {
      m = (b - r) / delta + 2;
    } else {
      m = (r - g) / delta + 4;
    }
    return new _$Iu(Math.round(m * 60), s, cmax, rgba.a);
  }
  // from http://www.rapidtables.com/convert/color/hsv-to-rgb.htm
  static toRGBA(hsva) {
    const { h, s, v, a } = hsva;
    const c = v * s;
    const x = c * (1 - Math.abs(h / 60 % 2 - 1));
    const m = v - c;
    let [r, g, b] = [0, 0, 0];
    if (h < 60) {
      r = c;
      g = x;
    } else if (h < 120) {
      r = x;
      g = c;
    } else if (h < 180) {
      g = c;
      b = x;
    } else if (h < 240) {
      g = x;
      b = c;
    } else if (h < 300) {
      r = x;
      b = c;
    } else if (h <= 360) {
      r = c;
      b = x;
    }
    r = Math.round((r + m) * 255);
    g = Math.round((g + m) * 255);
    b = Math.round((b + m) * 255);
    return new $Gu(r, g, b, a);
  }
};
var $Ju = class _$Ju {
  static fromHex(hex) {
    return _$Ju.Format.CSS.parseHex(hex) || _$Ju.red;
  }
  static equals(a, b) {
    if (!a && !b) {
      return true;
    }
    if (!a || !b) {
      return false;
    }
    return a.equals(b);
  }
  get hsla() {
    if (this.i) {
      return this.i;
    } else {
      return $Hu.fromRGBA(this.rgba);
    }
  }
  get hsva() {
    if (this.j) {
      return this.j;
    }
    return $Iu.fromRGBA(this.rgba);
  }
  constructor(arg) {
    if (!arg) {
      throw new Error("Color needs a value");
    } else if (arg instanceof $Gu) {
      this.rgba = arg;
    } else if (arg instanceof $Hu) {
      this.i = arg;
      this.rgba = $Hu.toRGBA(arg);
    } else if (arg instanceof $Iu) {
      this.j = arg;
      this.rgba = $Iu.toRGBA(arg);
    } else {
      throw new Error("Invalid color ctor argument");
    }
  }
  equals(other) {
    return !!other && $Gu.equals(this.rgba, other.rgba) && $Hu.equals(this.hsla, other.hsla) && $Iu.equals(this.hsva, other.hsva);
  }
  /**
   * http://www.w3.org/TR/WCAG20/#relativeluminancedef
   * Returns the number in the set [0, 1]. O => Darkest Black. 1 => Lightest white.
   */
  getRelativeLuminance() {
    const R = _$Ju.k(this.rgba.r);
    const G = _$Ju.k(this.rgba.g);
    const B = _$Ju.k(this.rgba.b);
    const luminance = 0.2126 * R + 0.7152 * G + 0.0722 * B;
    return roundFloat(luminance, 4);
  }
  static k(color) {
    const c = color / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  }
  /**
   * http://www.w3.org/TR/WCAG20/#contrast-ratiodef
   * Returns the contrast ration number in the set [1, 21].
   */
  getContrastRatio(another) {
    const lum1 = this.getRelativeLuminance();
    const lum2 = another.getRelativeLuminance();
    return lum1 > lum2 ? (lum1 + 0.05) / (lum2 + 0.05) : (lum2 + 0.05) / (lum1 + 0.05);
  }
  /**
   *	http://24ways.org/2010/calculating-color-contrast
   *  Return 'true' if darker color otherwise 'false'
   */
  isDarker() {
    const yiq = (this.rgba.r * 299 + this.rgba.g * 587 + this.rgba.b * 114) / 1e3;
    return yiq < 128;
  }
  /**
   *	http://24ways.org/2010/calculating-color-contrast
   *  Return 'true' if lighter color otherwise 'false'
   */
  isLighter() {
    const yiq = (this.rgba.r * 299 + this.rgba.g * 587 + this.rgba.b * 114) / 1e3;
    return yiq >= 128;
  }
  isLighterThan(another) {
    const lum1 = this.getRelativeLuminance();
    const lum2 = another.getRelativeLuminance();
    return lum1 > lum2;
  }
  isDarkerThan(another) {
    const lum1 = this.getRelativeLuminance();
    const lum2 = another.getRelativeLuminance();
    return lum1 < lum2;
  }
  lighten(factor) {
    return new _$Ju(new $Hu(this.hsla.h, this.hsla.s, this.hsla.l + this.hsla.l * factor, this.hsla.a));
  }
  darken(factor) {
    return new _$Ju(new $Hu(this.hsla.h, this.hsla.s, this.hsla.l - this.hsla.l * factor, this.hsla.a));
  }
  transparent(factor) {
    const { r, g, b, a } = this.rgba;
    return new _$Ju(new $Gu(r, g, b, a * factor));
  }
  isTransparent() {
    return this.rgba.a === 0;
  }
  isOpaque() {
    return this.rgba.a === 1;
  }
  opposite() {
    return new _$Ju(new $Gu(255 - this.rgba.r, 255 - this.rgba.g, 255 - this.rgba.b, this.rgba.a));
  }
  blend(c) {
    const rgba = c.rgba;
    const thisA = this.rgba.a;
    const colorA = rgba.a;
    const a = thisA + colorA * (1 - thisA);
    if (a < 1e-6) {
      return _$Ju.transparent;
    }
    const r = this.rgba.r * thisA / a + rgba.r * colorA * (1 - thisA) / a;
    const g = this.rgba.g * thisA / a + rgba.g * colorA * (1 - thisA) / a;
    const b = this.rgba.b * thisA / a + rgba.b * colorA * (1 - thisA) / a;
    return new _$Ju(new $Gu(r, g, b, a));
  }
  makeOpaque(opaqueBackground) {
    if (this.isOpaque() || opaqueBackground.rgba.a !== 1) {
      return this;
    }
    const { r, g, b, a } = this.rgba;
    return new _$Ju(new $Gu(opaqueBackground.rgba.r - a * (opaqueBackground.rgba.r - r), opaqueBackground.rgba.g - a * (opaqueBackground.rgba.g - g), opaqueBackground.rgba.b - a * (opaqueBackground.rgba.b - b), 1));
  }
  flatten(...backgrounds) {
    const background = backgrounds.reduceRight((accumulator, color) => {
      return _$Ju.o(color, accumulator);
    });
    return _$Ju.o(this, background);
  }
  static o(foreground, background) {
    const backgroundAlpha = 1 - foreground.rgba.a;
    return new _$Ju(new $Gu(backgroundAlpha * background.rgba.r + foreground.rgba.a * foreground.rgba.r, backgroundAlpha * background.rgba.g + foreground.rgba.a * foreground.rgba.g, backgroundAlpha * background.rgba.b + foreground.rgba.a * foreground.rgba.b));
  }
  toString() {
    if (!this.u) {
      this.u = _$Ju.Format.CSS.format(this);
    }
    return this.u;
  }
  static getLighterColor(of, relative, factor) {
    if (of.isLighterThan(relative)) {
      return of;
    }
    factor = factor ? factor : 0.5;
    const lum1 = of.getRelativeLuminance();
    const lum2 = relative.getRelativeLuminance();
    factor = factor * (lum2 - lum1) / lum2;
    return of.lighten(factor);
  }
  static getDarkerColor(of, relative, factor) {
    if (of.isDarkerThan(relative)) {
      return of;
    }
    factor = factor ? factor : 0.5;
    const lum1 = of.getRelativeLuminance();
    const lum2 = relative.getRelativeLuminance();
    factor = factor * (lum1 - lum2) / lum1;
    return of.darken(factor);
  }
  static {
    this.white = new _$Ju(new $Gu(255, 255, 255, 1));
  }
  static {
    this.black = new _$Ju(new $Gu(0, 0, 0, 1));
  }
  static {
    this.red = new _$Ju(new $Gu(255, 0, 0, 1));
  }
  static {
    this.blue = new _$Ju(new $Gu(0, 0, 255, 1));
  }
  static {
    this.green = new _$Ju(new $Gu(0, 255, 0, 1));
  }
  static {
    this.cyan = new _$Ju(new $Gu(0, 255, 255, 1));
  }
  static {
    this.lightgrey = new _$Ju(new $Gu(211, 211, 211, 1));
  }
  static {
    this.transparent = new _$Ju(new $Gu(0, 0, 0, 0));
  }
};
(function($Ju2) {
  let Format;
  (function(Format2) {
    let CSS;
    (function(CSS2) {
      function formatRGB(color) {
        if (color.rgba.a === 1) {
          return `rgb(${color.rgba.r}, ${color.rgba.g}, ${color.rgba.b})`;
        }
        return $Ju2.Format.CSS.formatRGBA(color);
      }
      CSS2.formatRGB = formatRGB;
      function formatRGBA(color) {
        return `rgba(${color.rgba.r}, ${color.rgba.g}, ${color.rgba.b}, ${+color.rgba.a.toFixed(2)})`;
      }
      CSS2.formatRGBA = formatRGBA;
      function formatHSL(color) {
        if (color.hsla.a === 1) {
          return `hsl(${color.hsla.h}, ${(color.hsla.s * 100).toFixed(2)}%, ${(color.hsla.l * 100).toFixed(2)}%)`;
        }
        return $Ju2.Format.CSS.formatHSLA(color);
      }
      CSS2.formatHSL = formatHSL;
      function formatHSLA(color) {
        return `hsla(${color.hsla.h}, ${(color.hsla.s * 100).toFixed(2)}%, ${(color.hsla.l * 100).toFixed(2)}%, ${color.hsla.a.toFixed(2)})`;
      }
      CSS2.formatHSLA = formatHSLA;
      function _toTwoDigitHex(n) {
        const r = n.toString(16);
        return r.length !== 2 ? "0" + r : r;
      }
      function formatHex(color) {
        return `#${_toTwoDigitHex(color.rgba.r)}${_toTwoDigitHex(color.rgba.g)}${_toTwoDigitHex(color.rgba.b)}`;
      }
      CSS2.formatHex = formatHex;
      function formatHexA(color, compact = false) {
        if (compact && color.rgba.a === 1) {
          return $Ju2.Format.CSS.formatHex(color);
        }
        return `#${_toTwoDigitHex(color.rgba.r)}${_toTwoDigitHex(color.rgba.g)}${_toTwoDigitHex(color.rgba.b)}${_toTwoDigitHex(Math.round(color.rgba.a * 255))}`;
      }
      CSS2.formatHexA = formatHexA;
      function format(color) {
        if (color.isOpaque()) {
          return $Ju2.Format.CSS.formatHex(color);
        }
        return $Ju2.Format.CSS.formatRGBA(color);
      }
      CSS2.format = format;
      function parseHex(hex) {
        const length = hex.length;
        if (length === 0) {
          return null;
        }
        if (hex.charCodeAt(0) !== 35) {
          return null;
        }
        if (length === 7) {
          const r = 16 * _parseHexDigit(hex.charCodeAt(1)) + _parseHexDigit(hex.charCodeAt(2));
          const g = 16 * _parseHexDigit(hex.charCodeAt(3)) + _parseHexDigit(hex.charCodeAt(4));
          const b = 16 * _parseHexDigit(hex.charCodeAt(5)) + _parseHexDigit(hex.charCodeAt(6));
          return new $Ju2(new $Gu(r, g, b, 1));
        }
        if (length === 9) {
          const r = 16 * _parseHexDigit(hex.charCodeAt(1)) + _parseHexDigit(hex.charCodeAt(2));
          const g = 16 * _parseHexDigit(hex.charCodeAt(3)) + _parseHexDigit(hex.charCodeAt(4));
          const b = 16 * _parseHexDigit(hex.charCodeAt(5)) + _parseHexDigit(hex.charCodeAt(6));
          const a = 16 * _parseHexDigit(hex.charCodeAt(7)) + _parseHexDigit(hex.charCodeAt(8));
          return new $Ju2(new $Gu(r, g, b, a / 255));
        }
        if (length === 4) {
          const r = _parseHexDigit(hex.charCodeAt(1));
          const g = _parseHexDigit(hex.charCodeAt(2));
          const b = _parseHexDigit(hex.charCodeAt(3));
          return new $Ju2(new $Gu(16 * r + r, 16 * g + g, 16 * b + b));
        }
        if (length === 5) {
          const r = _parseHexDigit(hex.charCodeAt(1));
          const g = _parseHexDigit(hex.charCodeAt(2));
          const b = _parseHexDigit(hex.charCodeAt(3));
          const a = _parseHexDigit(hex.charCodeAt(4));
          return new $Ju2(new $Gu(16 * r + r, 16 * g + g, 16 * b + b, (16 * a + a) / 255));
        }
        return null;
      }
      CSS2.parseHex = parseHex;
      function _parseHexDigit(charCode) {
        switch (charCode) {
          case 48:
            return 0;
          case 49:
            return 1;
          case 50:
            return 2;
          case 51:
            return 3;
          case 52:
            return 4;
          case 53:
            return 5;
          case 54:
            return 6;
          case 55:
            return 7;
          case 56:
            return 8;
          case 57:
            return 9;
          case 97:
            return 10;
          case 65:
            return 10;
          case 98:
            return 11;
          case 66:
            return 11;
          case 99:
            return 12;
          case 67:
            return 12;
          case 100:
            return 13;
          case 68:
            return 13;
          case 101:
            return 14;
          case 69:
            return 14;
          case 102:
            return 15;
          case 70:
            return 15;
        }
        return 0;
      }
    })(CSS = Format2.CSS || (Format2.CSS = {}));
  })(Format = $Ju2.Format || ($Ju2.Format = {}));
})($Ju || ($Ju = {}));

// out-build/vs/base/browser/ui/hover/hoverDelegate2.js
var baseHoverDelegate = {
  showHover: () => void 0,
  hideHover: () => void 0,
  showAndFocusLastHover: () => void 0,
  setupManagedHover: () => null,
  showManagedHover: () => void 0
};
function $kW() {
  return baseHoverDelegate;
}

// out-build/vs/base/browser/ui/button/button.js
var $XW = {
  buttonBackground: "#0E639C",
  buttonHoverBackground: "#006BB3",
  buttonSeparator: $Ju.white.toString(),
  buttonForeground: $Ju.white.toString(),
  buttonBorder: void 0,
  buttonSecondaryBackground: void 0,
  buttonSecondaryForeground: void 0,
  buttonSecondaryHoverBackground: void 0
};
var $YW = class extends $9c {
  get onDidClick() {
    return this.j.event;
  }
  get onDidEscape() {
    return this.m.event;
  }
  constructor(container, options2) {
    super();
    this.c = "";
    this.j = this.B(new $Ce());
    this.m = this.B(new $Ce());
    this.a = options2;
    this.b = document.createElement("a");
    this.b.classList.add("monaco-button");
    this.b.tabIndex = 0;
    this.b.setAttribute("role", "button");
    this.b.classList.toggle("secondary", !!options2.secondary);
    const background = options2.secondary ? options2.buttonSecondaryBackground : options2.buttonBackground;
    const foreground = options2.secondary ? options2.buttonSecondaryForeground : options2.buttonForeground;
    this.b.style.color = foreground || "";
    this.b.style.backgroundColor = background || "";
    if (options2.supportShortLabel) {
      this.g = document.createElement("div");
      this.g.classList.add("monaco-button-label-short");
      this.b.appendChild(this.g);
      this.f = document.createElement("div");
      this.f.classList.add("monaco-button-label");
      this.b.appendChild(this.f);
      this.b.classList.add("monaco-text-button-with-short-label");
    }
    if (typeof options2.title === "string") {
      this.setTitle(options2.title);
    }
    if (typeof options2.ariaLabel === "string") {
      this.b.setAttribute("aria-label", options2.ariaLabel);
    }
    container.appendChild(this.b);
    this.B($cV.addTarget(this.b));
    [$vU.CLICK, EventType.Tap].forEach((eventType) => {
      this.B($uT(this.b, eventType, (e) => {
        if (!this.enabled) {
          $xU.stop(e);
          return;
        }
        this.j.fire(e);
      }));
    });
    this.B($uT(this.b, $vU.KEY_DOWN, (e) => {
      const event = new $rT(e);
      let eventHandled = false;
      if (this.enabled && (event.equals(
        3
        /* KeyCode.Enter */
      ) || event.equals(
        10
        /* KeyCode.Space */
      ))) {
        this.j.fire(e);
        eventHandled = true;
      } else if (event.equals(
        9
        /* KeyCode.Escape */
      )) {
        this.m.fire(e);
        this.b.blur();
        eventHandled = true;
      }
      if (eventHandled) {
        $xU.stop(event, true);
      }
    }));
    this.B($uT(this.b, $vU.MOUSE_OVER, (e) => {
      if (!this.b.classList.contains("disabled")) {
        this.s(true);
      }
    }));
    this.B($uT(this.b, $vU.MOUSE_OUT, (e) => {
      this.s(false);
    }));
    this.n = this.B($AU(this.b));
    this.B(this.n.onDidFocus(() => {
      if (this.enabled) {
        this.s(true);
      }
    }));
    this.B(this.n.onDidBlur(() => {
      if (this.enabled) {
        this.s(false);
      }
    }));
  }
  dispose() {
    super.dispose();
    this.b.remove();
  }
  r(content) {
    const elements = [];
    for (let segment of $cW(content)) {
      if (typeof segment === "string") {
        segment = segment.trim();
        if (segment === "") {
          continue;
        }
        const node = document.createElement("span");
        node.textContent = segment;
        elements.push(node);
      } else {
        elements.push(segment);
      }
    }
    return elements;
  }
  s(hover) {
    let background;
    if (this.a.secondary) {
      background = hover ? this.a.buttonSecondaryHoverBackground : this.a.buttonSecondaryBackground;
    } else {
      background = hover ? this.a.buttonHoverBackground : this.a.buttonBackground;
    }
    if (background) {
      this.b.style.backgroundColor = background;
    }
  }
  get element() {
    return this.b;
  }
  set label(value) {
    if (this.c === value) {
      return;
    }
    if ($ll(this.c) && $ll(value) && $ml(this.c, value)) {
      return;
    }
    this.b.classList.add("monaco-text-button");
    const labelElement = this.a.supportShortLabel ? this.f : this.b;
    if ($ll(value)) {
      const rendered = $eW(value, { inline: true });
      rendered.dispose();
      const root = rendered.element.querySelector("p")?.innerHTML;
      if (root) {
        const sanitized = sanitize(root, { ADD_TAGS: ["b", "i", "u", "code", "span"], ALLOWED_ATTR: ["class"], RETURN_TRUSTED_TYPE: true });
        labelElement.innerHTML = sanitized;
      } else {
        $EU(labelElement);
      }
    } else {
      if (this.a.supportIcons) {
        $EU(labelElement, ...this.r(value));
      } else {
        labelElement.textContent = value;
      }
    }
    let title = "";
    if (typeof this.a.title === "string") {
      title = this.a.title;
    } else if (this.a.title) {
      title = $gW(value);
    }
    this.setTitle(title);
    if (typeof this.a.ariaLabel === "string") {
      this.b.setAttribute("aria-label", this.a.ariaLabel);
    } else if (this.a.ariaLabel) {
      this.b.setAttribute("aria-label", title);
    }
    this.c = value;
  }
  get label() {
    return this.c;
  }
  set labelShort(value) {
    if (!this.a.supportShortLabel || !this.g) {
      return;
    }
    if (this.a.supportIcons) {
      $EU(this.g, ...this.r(value));
    } else {
      this.g.textContent = value;
    }
  }
  set icon(icon) {
    this.b.classList.add(...ThemeIcon.asClassNameArray(icon));
  }
  set enabled(value) {
    if (value) {
      this.b.classList.remove("disabled");
      this.b.setAttribute("aria-disabled", String(false));
      this.b.tabIndex = 0;
    } else {
      this.b.classList.add("disabled");
      this.b.setAttribute("aria-disabled", String(true));
    }
  }
  get enabled() {
    return !this.b.classList.contains("disabled");
  }
  set checked(value) {
    if (value) {
      this.b.classList.add("checked");
      this.b.setAttribute("aria-checked", "true");
    } else {
      this.b.classList.remove("checked");
      this.b.setAttribute("aria-checked", "false");
    }
  }
  get checked() {
    return this.b.classList.contains("checked");
  }
  setTitle(title) {
    if (!this.h && title !== "") {
      this.h = this.B($kW().setupManagedHover(this.a.hoverDelegate ?? $zV("mouse"), this.b, title));
    } else if (this.h) {
      this.h.update(title);
    }
  }
  focus() {
    this.b.focus();
  }
  hasFocus() {
    return $8T(this.b);
  }
};

// out-build/vs/platform/diagnostics/common/diagnostics.js
var ID = "diagnosticsService";
var $_m = $Xi(ID);
function $an(x) {
  return !!x.hostName && !!x.errorMessage;
}

// out-build/vs/base/common/jsonSchema.js
function $nk(schema) {
  let hasDups = false;
  const equalsByString = /* @__PURE__ */ new Map();
  const nodeToEquals = /* @__PURE__ */ new Map();
  const visitSchemas = (next) => {
    if (schema === next) {
      return true;
    }
    const val = JSON.stringify(next);
    if (val.length < 30) {
      return true;
    }
    const eq = equalsByString.get(val);
    if (!eq) {
      const newEq = { schemas: [next] };
      equalsByString.set(val, newEq);
      nodeToEquals.set(next, newEq);
      return true;
    }
    eq.schemas.push(next);
    nodeToEquals.set(next, eq);
    hasDups = true;
    return false;
  };
  traverseNodes(schema, visitSchemas);
  equalsByString.clear();
  if (!hasDups) {
    return JSON.stringify(schema);
  }
  let defNodeName = "$defs";
  while (schema.hasOwnProperty(defNodeName)) {
    defNodeName += "_";
  }
  const definitions = [];
  function stringify(root) {
    return JSON.stringify(root, (_key, value) => {
      if (value !== root) {
        const eq = nodeToEquals.get(value);
        if (eq && eq.schemas.length > 1) {
          if (!eq.id) {
            eq.id = `_${definitions.length}`;
            definitions.push(eq.schemas[0]);
          }
          return { $ref: `#/${defNodeName}/${eq.id}` };
        }
      }
      return value;
    });
  }
  const str = stringify(schema);
  const defStrings = [];
  for (let i = 0; i < definitions.length; i++) {
    defStrings.push(`"_${i}":${stringify(definitions[i])}`);
  }
  if (defStrings.length) {
    return `${str.substring(0, str.length - 1)},"${defNodeName}":{${defStrings.join(",")}}}`;
  }
  return str;
}
function isObject(thing) {
  return typeof thing === "object" && thing !== null;
}
function traverseNodes(root, visit) {
  if (!root || typeof root !== "object") {
    return;
  }
  const collectEntries = (...entries2) => {
    for (const entry of entries2) {
      if (isObject(entry)) {
        toWalk.push(entry);
      }
    }
  };
  const collectMapEntries = (...maps) => {
    for (const map of maps) {
      if (isObject(map)) {
        for (const key in map) {
          const entry = map[key];
          if (isObject(entry)) {
            toWalk.push(entry);
          }
        }
      }
    }
  };
  const collectArrayEntries = (...arrays) => {
    for (const array of arrays) {
      if (Array.isArray(array)) {
        for (const entry of array) {
          if (isObject(entry)) {
            toWalk.push(entry);
          }
        }
      }
    }
  };
  const collectEntryOrArrayEntries = (items) => {
    if (Array.isArray(items)) {
      for (const entry of items) {
        if (isObject(entry)) {
          toWalk.push(entry);
        }
      }
    } else if (isObject(items)) {
      toWalk.push(items);
    }
  };
  const toWalk = [root];
  let next = toWalk.pop();
  while (next) {
    const visitChildern = visit(next);
    if (visitChildern) {
      collectEntries(next.additionalItems, next.additionalProperties, next.not, next.contains, next.propertyNames, next.if, next.then, next.else, next.unevaluatedItems, next.unevaluatedProperties);
      collectMapEntries(next.definitions, next.$defs, next.properties, next.patternProperties, next.dependencies, next.dependentSchemas);
      collectArrayEntries(next.anyOf, next.allOf, next.oneOf, next.prefixItems);
      collectEntryOrArrayEntries(next.items);
    }
    next = toWalk.pop();
  }
}

// out-build/vs/base/common/assert.js
function ok(value, message) {
  if (!value) {
    throw new Error(message ? `Assertion failed (${message})` : "Assertion Failed");
  }
}

// out-build/vs/platform/registry/common/platform.js
var RegistryImpl = class {
  constructor() {
    this.a = /* @__PURE__ */ new Map();
  }
  add(id2, data) {
    ok($wg(id2));
    ok($yg(data));
    ok(!this.a.has(id2), "There is already an extension with this id");
    this.a.set(id2, data);
  }
  knows(id2) {
    return this.a.has(id2);
  }
  as(id2) {
    return this.a.get(id2) || null;
  }
};
var $Ko = new RegistryImpl();

// out-build/vs/platform/jsonschemas/common/jsonContributionRegistry.js
var $Lo = {
  JSONContribution: "base.contributions.json"
};
function normalizeId(id2) {
  if (id2.length > 0 && id2.charAt(id2.length - 1) === "#") {
    return id2.substring(0, id2.length - 1);
  }
  return id2;
}
var JSONContributionRegistry = class {
  constructor() {
    this.b = new $Ce();
    this.onDidChangeSchema = this.b.event;
    this.a = {};
  }
  registerSchema(uri, unresolvedSchemaContent) {
    this.a[normalizeId(uri)] = unresolvedSchemaContent;
    this.b.fire(uri);
  }
  notifySchemaChanged(uri) {
    this.b.fire(uri);
  }
  getSchemaContributions() {
    return {
      schemas: this.a
    };
  }
  getSchemaContent(uri) {
    const schema = this.a[uri];
    return schema ? $nk(schema) : void 0;
  }
  hasSchemaContent(uri) {
    return !!this.a[uri];
  }
};
var jsonContributionRegistry = new JSONContributionRegistry();
$Ko.add($Lo.JSONContribution, jsonContributionRegistry);

// out-build/vs/platform/theme/common/iconRegistry.js
var $4x = {
  IconContribution: "base.contributions.icons"
};
var IconContribution;
(function(IconContribution2) {
  function getDefinition(contribution, registry) {
    let definition = contribution.defaults;
    while (ThemeIcon.isThemeIcon(definition)) {
      const c = iconRegistry.getIcon(definition.id);
      if (!c) {
        return void 0;
      }
      definition = c.defaults;
    }
    return definition;
  }
  IconContribution2.getDefinition = getDefinition;
})(IconContribution || (IconContribution = {}));
var IconFontDefinition;
(function(IconFontDefinition2) {
  function toJSONObject(iconFont) {
    return {
      weight: iconFont.weight,
      style: iconFont.style,
      src: iconFont.src.map((s) => ({ format: s.format, location: s.location.toString() }))
    };
  }
  IconFontDefinition2.toJSONObject = toJSONObject;
  function fromJSONObject(json) {
    const stringOrUndef = (s) => $wg(s) ? s : void 0;
    if (json && Array.isArray(json.src) && json.src.every((s) => $wg(s.format) && $wg(s.location))) {
      return {
        weight: stringOrUndef(json.weight),
        style: stringOrUndef(json.style),
        src: json.src.map((s) => ({ format: s.format, location: URI.parse(s.location) }))
      };
    }
    return void 0;
  }
  IconFontDefinition2.fromJSONObject = fromJSONObject;
})(IconFontDefinition || (IconFontDefinition = {}));
var IconRegistry = class {
  constructor() {
    this.a = new $Ce();
    this.onDidChange = this.a.event;
    this.d = {
      definitions: {
        icons: {
          type: "object",
          properties: {
            fontId: { type: "string", description: localize(2372, null) },
            fontCharacter: { type: "string", description: localize(2373, null) }
          },
          additionalProperties: false,
          defaultSnippets: [{ body: { fontCharacter: "\\\\e030" } }]
        }
      },
      type: "object",
      properties: {}
    };
    this.e = { type: "string", pattern: `^${ThemeIcon.iconNameExpression}$`, enum: [], enumDescriptions: [] };
    this.b = {};
    this.f = {};
  }
  registerIcon(id2, defaults2, description, deprecationMessage) {
    const existing = this.b[id2];
    if (existing) {
      if (description && !existing.description) {
        existing.description = description;
        this.d.properties[id2].markdownDescription = `${description} $(${id2})`;
        const enumIndex = this.e.enum.indexOf(id2);
        if (enumIndex !== -1) {
          this.e.enumDescriptions[enumIndex] = description;
        }
        this.a.fire();
      }
      return existing;
    }
    const iconContribution = { id: id2, description, defaults: defaults2, deprecationMessage };
    this.b[id2] = iconContribution;
    const propertySchema = { $ref: "#/definitions/icons" };
    if (deprecationMessage) {
      propertySchema.deprecationMessage = deprecationMessage;
    }
    if (description) {
      propertySchema.markdownDescription = `${description}: $(${id2})`;
    }
    this.d.properties[id2] = propertySchema;
    this.e.enum.push(id2);
    this.e.enumDescriptions.push(description || "");
    this.a.fire();
    return { id: id2 };
  }
  deregisterIcon(id2) {
    delete this.b[id2];
    delete this.d.properties[id2];
    const index = this.e.enum.indexOf(id2);
    if (index !== -1) {
      this.e.enum.splice(index, 1);
      this.e.enumDescriptions.splice(index, 1);
    }
    this.a.fire();
  }
  getIcons() {
    return Object.keys(this.b).map((id2) => this.b[id2]);
  }
  getIcon(id2) {
    return this.b[id2];
  }
  getIconSchema() {
    return this.d;
  }
  getIconReferenceSchema() {
    return this.e;
  }
  registerIconFont(id2, definition) {
    const existing = this.f[id2];
    if (existing) {
      return existing;
    }
    this.f[id2] = definition;
    this.a.fire();
    return definition;
  }
  deregisterIconFont(id2) {
    delete this.f[id2];
  }
  getIconFont(id2) {
    return this.f[id2];
  }
  toString() {
    const sorter = (i1, i2) => {
      return i1.id.localeCompare(i2.id);
    };
    const classNames = (i) => {
      while (ThemeIcon.isThemeIcon(i.defaults)) {
        i = this.b[i.defaults.id];
      }
      return `codicon codicon-${i ? i.id : ""}`;
    };
    const reference = [];
    reference.push(`| preview     | identifier                        | default codicon ID                | description`);
    reference.push(`| ----------- | --------------------------------- | --------------------------------- | --------------------------------- |`);
    const contributions = Object.keys(this.b).map((key) => this.b[key]);
    for (const i of contributions.filter((i2) => !!i2.description).sort(sorter)) {
      reference.push(`|<i class="${classNames(i)}"></i>|${i.id}|${ThemeIcon.isThemeIcon(i.defaults) ? i.defaults.id : i.id}|${i.description || ""}|`);
    }
    reference.push(`| preview     | identifier                        `);
    reference.push(`| ----------- | --------------------------------- |`);
    for (const i of contributions.filter((i2) => !ThemeIcon.isThemeIcon(i2.defaults)).sort(sorter)) {
      reference.push(`|<i class="${classNames(i)}"></i>|${i.id}|`);
    }
    return reference.join("\n");
  }
};
var iconRegistry = new IconRegistry();
$Ko.add($4x.IconContribution, iconRegistry);
function $5x(id2, defaults2, description, deprecationMessage) {
  return iconRegistry.registerIcon(id2, defaults2, description, deprecationMessage);
}
function $6x() {
  return iconRegistry;
}
function initialize() {
  const codiconFontCharacters = $gk();
  for (const icon in codiconFontCharacters) {
    const fontCharacter = "\\" + codiconFontCharacters[icon].toString(16);
    iconRegistry.registerIcon(icon, { fontCharacter });
  }
}
initialize();
var $7x = "vscode://schemas/icons";
var schemaRegistry = $Ko.as($Lo.JSONContribution);
schemaRegistry.registerSchema($7x, iconRegistry.getIconSchema());
var delayer = new $0h(() => schemaRegistry.notifySchemaChanged($7x), 200);
iconRegistry.onDidChange(() => {
  if (!delayer.isScheduled()) {
    delayer.schedule();
  }
});
var $8x = $5x("widget-close", $kk.close, localize(2374, null));
var $9x = $5x("goto-previous-location", $kk.arrowUp, localize(2375, null));
var $0x = $5x("goto-next-location", $kk.arrowDown, localize(2376, null));
var $$x = ThemeIcon.modify($kk.sync, "spin");
var $_x = ThemeIcon.modify($kk.loading, "spin");

// out-build/vs/platform/theme/browser/iconsStyleSheet.js
function $FOb(themeService) {
  const disposable = new $8c();
  const onDidChangeEmmiter = disposable.add(new $Ce());
  const iconRegistry2 = $6x();
  disposable.add(iconRegistry2.onDidChange(() => onDidChangeEmmiter.fire()));
  if (themeService) {
    disposable.add(themeService.onDidProductIconThemeChange(() => onDidChangeEmmiter.fire()));
  }
  return {
    dispose: () => disposable.dispose(),
    onDidChange: onDidChangeEmmiter.event,
    getCSS() {
      const productIconTheme = themeService ? themeService.getProductIconTheme() : new $GOb();
      const usedFontIds = {};
      const rules = [];
      const rootAttribs = [];
      for (const contribution of iconRegistry2.getIcons()) {
        const definition = productIconTheme.getIcon(contribution);
        if (!definition) {
          continue;
        }
        const fontContribution = definition.font;
        const fontFamilyVar = `--vscode-icon-${contribution.id}-font-family`;
        const contentVar = `--vscode-icon-${contribution.id}-content`;
        if (fontContribution) {
          usedFontIds[fontContribution.id] = fontContribution.definition;
          rootAttribs.push(`${fontFamilyVar}: ${$TU(fontContribution.id)};`, `${contentVar}: '${definition.fontCharacter}';`);
          rules.push(`.codicon-${contribution.id}:before { content: '${definition.fontCharacter}'; font-family: ${$TU(fontContribution.id)}; }`);
        } else {
          rootAttribs.push(`${contentVar}: '${definition.fontCharacter}'; ${fontFamilyVar}: 'codicon';`);
          rules.push(`.codicon-${contribution.id}:before { content: '${definition.fontCharacter}'; }`);
        }
      }
      for (const id2 in usedFontIds) {
        const definition = usedFontIds[id2];
        const fontWeight = definition.weight ? `font-weight: ${definition.weight};` : "";
        const fontStyle = definition.style ? `font-style: ${definition.style};` : "";
        const src = definition.src.map((l) => `${$SU(l.location)} format('${l.format}')`).join(", ");
        rules.push(`@font-face { src: ${src}; font-family: ${$TU(id2)};${fontWeight}${fontStyle} font-display: block; }`);
      }
      rules.push(`:root { ${rootAttribs.join(" ")} }`);
      return rules.join("\n");
    }
  };
}
var $GOb = class {
  getIcon(contribution) {
    const iconRegistry2 = $6x();
    let definition = contribution.defaults;
    while (ThemeIcon.isThemeIcon(definition)) {
      const c = iconRegistry2.getIcon(definition.id);
      if (!c) {
        return void 0;
      }
      definition = c.defaults;
    }
    return definition;
  }
};

// out-build/vs/platform/window/common/window.js
var TitleBarSetting;
(function(TitleBarSetting2) {
  TitleBarSetting2["TITLE_BAR_STYLE"] = "window.titleBarStyle";
  TitleBarSetting2["CUSTOM_TITLE_BAR_VISIBILITY"] = "window.customTitleBarVisibility";
})(TitleBarSetting || (TitleBarSetting = {}));
var TitlebarStyle;
(function(TitlebarStyle2) {
  TitlebarStyle2["NATIVE"] = "native";
  TitlebarStyle2["CUSTOM"] = "custom";
})(TitlebarStyle || (TitlebarStyle = {}));
var CustomTitleBarVisibility;
(function(CustomTitleBarVisibility2) {
  CustomTitleBarVisibility2["AUTO"] = "auto";
  CustomTitleBarVisibility2["WINDOWED"] = "windowed";
  CustomTitleBarVisibility2["NEVER"] = "never";
})(CustomTitleBarVisibility || (CustomTitleBarVisibility = {}));
function $UE(zoomLevel = 0) {
  return Math.pow(1.2, zoomLevel);
}

// out-build/vs/platform/window/electron-sandbox/window.js
var ApplyZoomTarget;
(function(ApplyZoomTarget2) {
  ApplyZoomTarget2[ApplyZoomTarget2["ACTIVE_WINDOW"] = 1] = "ACTIVE_WINDOW";
  ApplyZoomTarget2[ApplyZoomTarget2["ALL_WINDOWS"] = 2] = "ALL_WINDOWS";
})(ApplyZoomTarget || (ApplyZoomTarget = {}));
var $mkc = 8;
var $nkc = -8;
function $okc(zoomLevel, target) {
  zoomLevel = Math.min(Math.max(zoomLevel, $nkc), $mkc);
  const targetWindows = [];
  if (target === ApplyZoomTarget.ACTIVE_WINDOW) {
    targetWindows.push($_T());
  } else if (target === ApplyZoomTarget.ALL_WINDOWS) {
    targetWindows.push(...Array.from(getWindows()).map(({ window: window2 }) => window2));
  } else {
    targetWindows.push(target);
  }
  for (const targetWindow of targetWindows) {
    getGlobals(targetWindow)?.webFrame?.setZoomLevel(zoomLevel);
    $8S($UE(zoomLevel), targetWindow);
    $4S(zoomLevel, targetWindow);
  }
}
function getGlobals(win) {
  if (win === $ZS) {
    return { ipcRenderer: $X, webFrame: $Z };
  } else {
    const auxiliaryWindow = win;
    if (auxiliaryWindow?.vscode?.ipcRenderer && auxiliaryWindow?.vscode?.webFrame) {
      return auxiliaryWindow.vscode;
    }
  }
  return void 0;
}
function $pkc(target) {
  $okc($5S(typeof target === "number" ? $_T() : target) + 1, target);
}
function $qkc(target) {
  $okc($5S(typeof target === "number" ? $_T() : target) - 1, target);
}

// out-build/vs/workbench/contrib/issue/browser/issueReporterModel.js
var $Ohc = class {
  constructor(initialData) {
    const defaultData = {
      issueType: 0,
      includeSystemInfo: true,
      includeWorkspaceInfo: true,
      includeProcessInfo: true,
      includeExtensions: true,
      includeExperiments: true,
      includeExtensionData: true,
      allExtensions: []
    };
    this.a = initialData ? Object.assign(defaultData, initialData) : defaultData;
    $ZS.addEventListener("message", async (event) => {
      if (event.data && event.data.sendChannel === "vscode:triggerIssueData") {
        $ZS.postMessage({
          data: { issueBody: this.a.issueDescription, issueTitle: this.a.issueTitle },
          replyChannel: "vscode:triggerIssueDataResponse"
        }, "*");
      }
    });
  }
  getData() {
    return this.a;
  }
  update(newData) {
    Object.assign(this.a, newData);
  }
  serialize() {
    const modes = [];
    if (this.a.restrictedMode) {
      modes.push("Restricted");
    }
    if (this.a.isUnsupported) {
      modes.push("Unsupported");
    }
    return `
Type: <b>${this.d()}</b>

${this.a.issueDescription}
${this.c()}
VS Code version: ${this.a.versionInfo && this.a.versionInfo.vscodeVersion}
OS version: ${this.a.versionInfo && this.a.versionInfo.os}
Modes:${modes.length ? " " + modes.join(", ") : ""}
${this.b()}
${this.f()}
<!-- generated by issue reporter -->`;
  }
  b() {
    if (this.a.systemInfo && this.a.systemInfo.remoteData.length) {
      return this.a.systemInfo.remoteData.map((remote) => $an(remote) ? remote.errorMessage : `Remote OS version: ${remote.machineInfo.os}`).join("\n") + "\n";
    }
    return "";
  }
  fileOnExtension() {
    const fileOnExtensionSupported = this.a.issueType === 0 || this.a.issueType === 1 || this.a.issueType === 2;
    return fileOnExtensionSupported && this.a.fileOnExtension;
  }
  c() {
    if (this.fileOnExtension() && this.a.selectedExtension) {
      return `
Extension version: ${this.a.selectedExtension.version}`;
    } else {
      return "";
    }
  }
  d() {
    if (this.a.issueType === 0) {
      return "Bug";
    } else if (this.a.issueType === 1) {
      return "Performance Issue";
    } else {
      return "Feature Request";
    }
  }
  f() {
    let info = "";
    if (this.a.fileOnMarketplace) {
      return info;
    }
    const isBugOrPerformanceIssue = this.a.issueType === 0 || this.a.issueType === 1;
    if (isBugOrPerformanceIssue) {
      if (this.a.includeExtensionData && this.a.extensionData) {
        info += this.g();
      }
      if (this.a.includeSystemInfo && this.a.systemInfo) {
        info += this.h();
      }
      if (this.a.includeSystemInfo && this.a.systemInfoWeb) {
        info += "System Info: " + this.a.systemInfoWeb;
      }
    }
    if (this.a.issueType === 1) {
      if (this.a.includeProcessInfo) {
        info += this.i();
      }
      if (this.a.includeWorkspaceInfo) {
        info += this.j();
      }
    }
    if (isBugOrPerformanceIssue) {
      if (!this.a.fileOnExtension && this.a.includeExtensions) {
        info += this.l();
      }
      if (this.a.includeExperiments && this.a.experimentInfo) {
        info += this.k();
      }
    }
    return info;
  }
  g() {
    return this.a.extensionData ?? "";
  }
  h() {
    let md = `<details>
<summary>System Info</summary>

|Item|Value|
|---|---|
`;
    if (this.a.systemInfo) {
      md += `|CPUs|${this.a.systemInfo.cpus}|
|GPU Status|${Object.keys(this.a.systemInfo.gpuStatus).map((key) => `${key}: ${this.a.systemInfo.gpuStatus[key]}`).join("<br>")}|
|Load (avg)|${this.a.systemInfo.load}|
|Memory (System)|${this.a.systemInfo.memory}|
|Process Argv|${this.a.systemInfo.processArgs.replace(/\\/g, "\\\\")}|
|Screen Reader|${this.a.systemInfo.screenReader}|
|VM|${this.a.systemInfo.vmHint}|`;
      if (this.a.systemInfo.linuxEnv) {
        md += `
|DESKTOP_SESSION|${this.a.systemInfo.linuxEnv.desktopSession}|
|XDG_CURRENT_DESKTOP|${this.a.systemInfo.linuxEnv.xdgCurrentDesktop}|
|XDG_SESSION_DESKTOP|${this.a.systemInfo.linuxEnv.xdgSessionDesktop}|
|XDG_SESSION_TYPE|${this.a.systemInfo.linuxEnv.xdgSessionType}|`;
      }
      this.a.systemInfo.remoteData.forEach((remote) => {
        if ($an(remote)) {
          md += `

${remote.errorMessage}`;
        } else {
          md += `

|Item|Value|
|---|---|
|Remote|${remote.latency ? `${remote.hostName} (latency: ${remote.latency.current.toFixed(2)}ms last, ${remote.latency.average.toFixed(2)}ms average)` : remote.hostName}|
|OS|${remote.machineInfo.os}|
|CPUs|${remote.machineInfo.cpus}|
|Memory (System)|${remote.machineInfo.memory}|
|VM|${remote.machineInfo.vmHint}|`;
        }
      });
    }
    md += "\n</details>";
    return md;
  }
  i() {
    return `<details>
<summary>Process Info</summary>

\`\`\`
${this.a.processInfo}
\`\`\`

</details>
`;
  }
  j() {
    return `<details>
<summary>Workspace Info</summary>

\`\`\`
${this.a.workspaceInfo};
\`\`\`

</details>
`;
  }
  k() {
    return `<details>
<summary>A/B Experiments</summary>

\`\`\`
${this.a.experimentInfo}
\`\`\`

</details>
`;
  }
  l() {
    if (this.a.extensionsDisabled) {
      return "Extensions disabled";
    }
    const themeExclusionStr = this.a.numberOfThemeExtesions ? `
(${this.a.numberOfThemeExtesions} theme extensions excluded)` : "";
    if (!this.a.enabledNonThemeExtesions) {
      return "Extensions: none" + themeExclusionStr;
    }
    const tableHeader = `Extension|Author (truncated)|Version
---|---|---`;
    const table = this.a.enabledNonThemeExtesions.map((e) => {
      return `${e.name}|${e.publisher?.substr(0, 3) ?? "N/A"}|${e.version}`;
    }).join("\n");
    return `<details><summary>Extensions (${this.a.enabledNonThemeExtesions.length})</summary>

${tableHeader}
${table}
${themeExclusionStr}

</details>`;
  }
};

// out-build/vs/workbench/contrib/issue/common/issueReporterUtil.js
function $Phc(url) {
  if (url.endsWith(".git")) {
    url = url.substr(0, url.length - 4);
  }
  url = $Ff(url, "/");
  if (url.endsWith("/new")) {
    url = $Ff(url, "/new");
  }
  if (url.endsWith("/issues")) {
    url = $Ff(url, "/issues");
  }
  return url;
}

// out-build/vs/workbench/contrib/issue/electron-sandbox/issueReporterService.js
var MAX_URL_LENGTH = 7500;
var IssueSource2;
(function(IssueSource3) {
  IssueSource3["VSCode"] = "vscode";
  IssueSource3["Extension"] = "extension";
  IssueSource3["Marketplace"] = "marketplace";
  IssueSource3["Unknown"] = "unknown";
})(IssueSource2 || (IssueSource2 = {}));
var $Swc = class $Swc2 extends $9c {
  constructor(y, z, C, D) {
    super();
    this.y = y;
    this.z = z;
    this.C = C;
    this.D = D;
    this.f = 0;
    this.g = false;
    this.h = false;
    this.j = false;
    this.m = false;
    this.n = false;
    this.r = false;
    this.s = "";
    this.t = new $Uh(300);
    this.w = false;
    const targetExtension = y.data.extensionId ? y.data.enabledExtensions.find((extension) => extension.id.toLocaleLowerCase() === y.data.extensionId?.toLocaleLowerCase()) : void 0;
    this.c = new $Ohc({
      ...y.data,
      issueType: y.data.issueType || 0,
      versionInfo: {
        vscodeVersion: `${y.product.nameShort} ${!!y.product.darwinUniversalAssetId ? `${y.product.version} (Universal)` : y.product.version} (${y.product.commit || "Commit unknown"}, ${y.product.date || "Date unknown"})`,
        os: `${this.y.os.type} ${this.y.os.arch} ${this.y.os.release}${$o ? " snap" : ""}`
      },
      extensionsDisabled: !!y.disableExtensions,
      fileOnExtension: y.data.extensionId ? !targetExtension?.isBuiltin : void 0,
      selectedExtension: targetExtension
    });
    const fileOnMarketplace = y.data.issueSource === IssueSource2.Marketplace;
    const fileOnProduct = y.data.issueSource === IssueSource2.VSCode;
    this.c.update({ fileOnMarketplace, fileOnProduct });
    const issueReporterElement = this.Eb("issue-reporter");
    if (issueReporterElement) {
      this.u = new $YW(issueReporterElement, $XW);
      const issueRepoName = document.createElement("a");
      issueReporterElement.appendChild(issueRepoName);
      issueRepoName.id = "show-repo-name";
      issueRepoName.classList.add("hidden");
      this.M();
    }
    const issueTitle = y.data.issueTitle;
    if (issueTitle) {
      const issueTitleElement = this.Eb("issue-title");
      if (issueTitleElement) {
        issueTitleElement.value = issueTitle;
      }
    }
    const issueBody = y.data.issueBody;
    if (issueBody) {
      const description = this.Eb("description");
      if (description) {
        description.value = issueBody;
        this.c.update({ issueDescription: issueBody });
      }
    }
    this.D.$getSystemInfo().then((info) => {
      this.c.update({ systemInfo: info });
      this.g = true;
      this.ob(this.c.getData());
      this.M();
    });
    if (y.data.issueType === 1) {
      this.D.$getPerformanceInfo().then((info) => {
        this.L(info);
      });
    }
    if ($ZS.document.documentElement.lang !== "en") {
      show(this.Eb("english"));
    }
    const codiconStyleSheet = $cU();
    codiconStyleSheet.id = "codiconStyles";
    const iconsStyleSheet = this.B($FOb(void 0));
    function updateAll() {
      codiconStyleSheet.textContent = iconsStyleSheet.getCSS();
    }
    const delayer2 = new $0h(updateAll, 0);
    iconsStyleSheet.onDidChange(() => delayer2.schedule());
    delayer2.schedule();
    this.bb();
    this.J();
    $okc(y.data.zoomLevel, $ZS);
    this.F(y.data.styles);
    this.G(y.data.enabledExtensions);
    this.Bb(y.data.experiments);
    this.zb(y.data.restrictedMode);
    this.Ab(y.data.isUnsupported);
    if ((y.data.data || y.data.uri) && targetExtension) {
      this.rb(targetExtension);
    }
  }
  render() {
    this.eb();
  }
  setInitialFocus() {
    const { fileOnExtension } = this.c.getData();
    if (fileOnExtension) {
      const issueTitle = $ZS.document.getElementById("issue-title");
      issueTitle?.focus();
    } else {
      const issueType = $ZS.document.getElementById("issue-type");
      issueType?.focus();
    }
  }
  // TODO @justschen: After migration to Aux Window, switch to dedicated css.
  F(styles) {
    const styleTag = document.createElement("style");
    const content = [];
    if (styles.inputBackground) {
      content.push(`input[type="text"], textarea, select, .issues-container > .issue > .issue-state, .block-info { background-color: ${styles.inputBackground}; }`);
    }
    if (styles.inputBorder) {
      content.push(`input[type="text"], textarea, select { border: 1px solid ${styles.inputBorder}; }`);
    } else {
      content.push(`input[type="text"], textarea, select { border: 1px solid transparent; }`);
    }
    if (styles.inputForeground) {
      content.push(`input[type="text"], textarea, select, .issues-container > .issue > .issue-state, .block-info { color: ${styles.inputForeground}; }`);
    }
    if (styles.inputErrorBorder) {
      content.push(`.invalid-input, .invalid-input:focus, .validation-error { border: 1px solid ${styles.inputErrorBorder} !important; }`);
      content.push(`.required-input { color: ${styles.inputErrorBorder}; }`);
    }
    if (styles.inputErrorBackground) {
      content.push(`.validation-error { background: ${styles.inputErrorBackground}; }`);
    }
    if (styles.inputErrorForeground) {
      content.push(`.validation-error { color: ${styles.inputErrorForeground}; }`);
    }
    if (styles.inputActiveBorder) {
      content.push(`input[type='text']:focus, textarea:focus, select:focus, summary:focus, button:focus, a:focus, .workbenchCommand:focus  { border: 1px solid ${styles.inputActiveBorder}; outline-style: none; }`);
    }
    if (styles.textLinkColor) {
      content.push(`a, .workbenchCommand { color: ${styles.textLinkColor}; }`);
    }
    if (styles.textLinkColor) {
      content.push(`a { color: ${styles.textLinkColor}; }`);
    }
    if (styles.textLinkActiveForeground) {
      content.push(`a:hover, .workbenchCommand:hover { color: ${styles.textLinkActiveForeground}; }`);
    }
    if (styles.sliderBackgroundColor) {
      content.push(`::-webkit-scrollbar-thumb { background-color: ${styles.sliderBackgroundColor}; }`);
    }
    if (styles.sliderActiveColor) {
      content.push(`::-webkit-scrollbar-thumb:active { background-color: ${styles.sliderActiveColor}; }`);
    }
    if (styles.sliderHoverColor) {
      content.push(`::--webkit-scrollbar-thumb:hover { background-color: ${styles.sliderHoverColor}; }`);
    }
    if (styles.buttonBackground) {
      content.push(`.monaco-text-button { background-color: ${styles.buttonBackground} !important; }`);
    }
    if (styles.buttonForeground) {
      content.push(`.monaco-text-button { color: ${styles.buttonForeground} !important; }`);
    }
    if (styles.buttonHoverBackground) {
      content.push(`.monaco-text-button:not(.disabled):hover, .monaco-text-button:focus { background-color: ${styles.buttonHoverBackground} !important; }`);
    }
    styleTag.textContent = content.join("\n");
    $ZS.document.head.appendChild(styleTag);
    $ZS.document.body.style.color = styles.color || "";
  }
  G(extensions) {
    const installedExtensions = extensions.filter((x) => !x.isBuiltin);
    const { nonThemes, themes } = $a(installedExtensions, (ext) => {
      return ext.isTheme ? "themes" : "nonThemes";
    });
    const numberOfThemeExtesions = themes && themes.length;
    this.c.update({ numberOfThemeExtesions, enabledNonThemeExtesions: nonThemes, allExtensions: installedExtensions });
    this.yb(nonThemes, numberOfThemeExtesions);
    if (this.y.disableExtensions || installedExtensions.length === 0) {
      this.Eb("disableExtensions").disabled = true;
    }
    this.pb(installedExtensions);
  }
  async H(extension) {
    try {
      if (extension.uri) {
        const uri = URI.revive(extension.uri);
        extension.bugsUrl = uri.toString();
      }
    } catch (e) {
      this.eb();
    }
  }
  async I(extension) {
    try {
      const data = await this.C.$sendReporterMenu(extension.id, extension.name);
      return data;
    } catch (e) {
      console.error(e);
      return void 0;
    }
  }
  J() {
    this.Fb("issue-type", "change", (event) => {
      const issueType = parseInt(event.target.value);
      this.c.update({ issueType });
      if (issueType === 1 && !this.h) {
        this.D.$getPerformanceInfo().then((info) => {
          this.L(info);
        });
      }
      const descriptionTextArea = this.Eb("issue-title");
      if (descriptionTextArea) {
        descriptionTextArea.placeholder = localize(7260, null);
      }
      this.M();
      this.db();
      this.render();
    });
    ["includeSystemInfo", "includeProcessInfo", "includeWorkspaceInfo", "includeExtensions", "includeExperiments", "includeExtensionData"].forEach((elementId) => {
      this.Fb(elementId, "click", (event) => {
        event.stopPropagation();
        this.c.update({ [elementId]: !this.c.getData()[elementId] });
      });
    });
    const showInfoElements = $ZS.document.getElementsByClassName("showInfo");
    for (let i = 0; i < showInfoElements.length; i++) {
      const showInfo = showInfoElements.item(i);
      showInfo.addEventListener("click", (e) => {
        e.preventDefault();
        const label = e.target;
        if (label) {
          const containingElement = label.parentElement && label.parentElement.parentElement;
          const info = containingElement && containingElement.lastElementChild;
          if (info && info.classList.contains("hidden")) {
            show(info);
            label.textContent = localize(7261, null);
          } else {
            hide(info);
            label.textContent = localize(7262, null);
          }
        }
      });
    }
    this.Fb("issue-source", "change", (e) => {
      const value = e.target.value;
      const problemSourceHelpText = this.Eb("problem-source-help-text");
      if (value === "") {
        this.c.update({ fileOnExtension: void 0 });
        show(problemSourceHelpText);
        this.X();
        this.render();
        return;
      } else {
        hide(problemSourceHelpText);
      }
      const descriptionTextArea = this.Eb("issue-title");
      if (value === IssueSource2.VSCode) {
        descriptionTextArea.placeholder = localize(7263, null);
      } else if (value === IssueSource2.Extension) {
        descriptionTextArea.placeholder = localize(7264, null);
      } else if (value === IssueSource2.Marketplace) {
        descriptionTextArea.placeholder = localize(7265, null);
      } else {
        descriptionTextArea.placeholder = localize(7266, null);
      }
      let fileOnExtension, fileOnMarketplace = false;
      if (value === IssueSource2.Extension) {
        fileOnExtension = true;
      } else if (value === IssueSource2.Marketplace) {
        fileOnMarketplace = true;
      }
      this.c.update({ fileOnExtension, fileOnMarketplace });
      this.render();
      const title = this.Eb("issue-title").value;
      this.R(title, fileOnExtension, fileOnMarketplace);
    });
    this.Fb("description", "input", (e) => {
      const issueDescription = e.target.value;
      this.c.update({ issueDescription });
      if (this.c.fileOnExtension() === false) {
        const title = this.Eb("issue-title").value;
        this.Q(title, issueDescription);
      }
    });
    this.Fb("issue-title", "input", (e) => {
      const title = e.target.value;
      const lengthValidationMessage = this.Eb("issue-title-length-validation-error");
      const issueUrl = this.kb();
      if (title && this.nb(title, issueUrl).length > MAX_URL_LENGTH) {
        show(lengthValidationMessage);
      } else {
        hide(lengthValidationMessage);
      }
      const issueSource = this.Eb("issue-source");
      if (!issueSource || issueSource.value === "") {
        return;
      }
      const { fileOnExtension, fileOnMarketplace } = this.c.getData();
      this.R(title, fileOnExtension, fileOnMarketplace);
    });
    this.u.onDidClick(async () => {
      this.t.trigger(async () => {
        this.ib();
      });
    });
    this.Fb("disableExtensions", "click", () => {
      this.C.$reloadWithExtensionsDisabled();
    });
    this.Fb("extensionBugsLink", "click", (e) => {
      const url = e.target.innerText;
      $OU(url);
    });
    this.Fb("disableExtensions", "keydown", (e) => {
      e.stopPropagation();
      if (e.keyCode === 13 || e.keyCode === 32) {
        this.C.$reloadWithExtensionsDisabled();
      }
    });
    $ZS.document.onkeydown = async (e) => {
      const cmdOrCtrlKey = $m ? e.metaKey : e.ctrlKey;
      if (cmdOrCtrlKey && e.keyCode === 13) {
        this.t.trigger(async () => {
          if (await this.ib()) {
            this.W();
          }
        });
      }
      if (cmdOrCtrlKey && e.keyCode === 87) {
        e.stopPropagation();
        e.preventDefault();
        const issueTitle = this.Eb("issue-title").value;
        const { issueDescription } = this.c.getData();
        if (!this.m && (issueTitle || issueDescription)) {
          this.C.$showConfirmCloseDialog();
        } else {
          this.W();
        }
      }
      if (cmdOrCtrlKey && e.keyCode === 187) {
        $pkc($ZS);
      }
      if (cmdOrCtrlKey && e.keyCode === 189) {
        $qkc($ZS);
      }
      if ($m) {
        if (cmdOrCtrlKey && e.keyCode === 65 && e.target) {
          if ($nU(e.target) || $mU(e.target)) {
            e.target.select();
          }
        }
      }
    };
  }
  L(info) {
    this.c.update(info);
    this.h = true;
    const state = this.c.getData();
    this.wb(state);
    this.xb(state);
    this.M();
  }
  M() {
    if (this.N()) {
      if (this.y.data.githubAccessToken) {
        this.u.label = localize(7267, null);
      } else {
        this.u.label = localize(7268, null);
      }
      this.u.enabled = true;
    } else {
      this.u.enabled = false;
      this.u.label = localize(7269, null);
    }
    const issueRepoName = this.Eb("show-repo-name");
    const selectedExtension = this.c.getData().selectedExtension;
    if (selectedExtension && selectedExtension.uri) {
      const urlString = URI.revive(selectedExtension.uri).toString();
      issueRepoName.href = urlString;
      issueRepoName.addEventListener("click", (e) => this.Db(e));
      issueRepoName.addEventListener("auxclick", (e) => this.Db(e));
      const gitHubInfo = this.lb(urlString);
      issueRepoName.textContent = gitHubInfo ? gitHubInfo.owner + "/" + gitHubInfo.repositoryName : urlString;
      Object.assign(issueRepoName.style, {
        alignSelf: "flex-end",
        display: "block",
        fontSize: "13px",
        marginBottom: "10px",
        padding: "4px 0px",
        textDecoration: "none",
        width: "auto"
      });
      show(issueRepoName);
    } else {
      issueRepoName.removeAttribute("style");
      hide(issueRepoName);
    }
    this.mb();
  }
  N() {
    const issueType = this.c.getData().issueType;
    if (this.r) {
      return false;
    }
    if (issueType === 0 && this.g) {
      return true;
    }
    if (issueType === 1 && this.g && this.h) {
      return true;
    }
    if (issueType === 2) {
      return true;
    }
    return false;
  }
  O() {
    const selectedExtension = this.c.getData().selectedExtension;
    return selectedExtension && selectedExtension.repositoryUrl;
  }
  P() {
    const selectedExtension = this.c.getData().selectedExtension;
    return selectedExtension && selectedExtension.bugsUrl;
  }
  Q(title, issueDescription) {
    if (title) {
      this.Z(title, issueDescription);
    } else {
      this.X();
    }
  }
  R(title, fileOnExtension, fileOnMarketplace) {
    if (fileOnExtension) {
      return this.S(title);
    }
    if (fileOnMarketplace) {
      return this.U(title);
    }
    const description = this.c.getData().issueDescription;
    this.Q(title, description);
  }
  S(title) {
    const url = this.mb();
    if (title) {
      const matches = /^https?:\/\/github\.com\/(.*)/.exec(url);
      if (matches && matches.length) {
        const repo = matches[1];
        return this.Y(repo, title);
      }
      if (this.c.getData().selectedExtension) {
        this.X();
        return this.ab([]);
      }
    }
    this.X();
  }
  U(title) {
    if (title) {
      const gitHubInfo = this.lb(this.y.product.reportMarketplaceIssueUrl);
      if (gitHubInfo) {
        return this.Y(`${gitHubInfo.owner}/${gitHubInfo.repositoryName}`, title);
      }
    }
  }
  async W() {
    await this.C.$closeReporter();
  }
  X() {
    const similarIssues = this.Eb("similar-issues");
    similarIssues.innerText = "";
    this.f = 0;
  }
  Y(repo, title) {
    const query = `is:issue+repo:${repo}+${title}`;
    const similarIssues = this.Eb("similar-issues");
    fetch(`https://api.github.com/search/issues?q=${query}`).then((response) => {
      response.json().then((result) => {
        similarIssues.innerText = "";
        if (result && result.items) {
          this.ab(result.items);
        } else {
          const message = $("div.list-title");
          message.textContent = localize(7270, null);
          similarIssues.appendChild(message);
          const resetTime = response.headers.get("X-RateLimit-Reset");
          const timeToWait = resetTime ? parseInt(resetTime) - Math.floor(Date.now() / 1e3) : 1;
          if (this.j) {
            this.j = false;
            setTimeout(() => {
              this.Y(repo, title);
              this.j = true;
            }, timeToWait * 1e3);
          }
        }
      }).catch((_) => {
      });
    }).catch((_) => {
    });
  }
  Z(title, body) {
    const url = "https://vscode-probot.westus.cloudapp.azure.com:7890/duplicate_candidates";
    const init = {
      method: "POST",
      body: JSON.stringify({
        title,
        body
      }),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    };
    fetch(url, init).then((response) => {
      response.json().then((result) => {
        this.X();
        if (result && result.candidates) {
          this.ab(result.candidates);
        } else {
          throw new Error("Unexpected response, no candidates property");
        }
      }).catch((_) => {
      });
    }).catch((_) => {
    });
  }
  ab(results) {
    const similarIssues = this.Eb("similar-issues");
    if (results.length) {
      const issues = $("div.issues-container");
      const issuesText = $("div.list-title");
      issuesText.textContent = localize(7271, null);
      this.f = results.length < 5 ? results.length : 5;
      for (let i = 0; i < this.f; i++) {
        const issue = results[i];
        const link = $("a.issue-link", { href: issue.html_url });
        link.textContent = issue.title;
        link.title = issue.title;
        link.addEventListener("click", (e) => this.Db(e));
        link.addEventListener("auxclick", (e) => this.Db(e));
        let issueState;
        let item;
        if (issue.state) {
          issueState = $("span.issue-state");
          const issueIcon = $("span.issue-icon");
          issueIcon.appendChild($dW(issue.state === "open" ? $kk.issueOpened : $kk.issueClosed));
          const issueStateLabel = $("span.issue-state.label");
          issueStateLabel.textContent = issue.state === "open" ? localize(7272, null) : localize(7273, null);
          issueState.title = issue.state === "open" ? localize(7274, null) : localize(7275, null);
          issueState.appendChild(issueIcon);
          issueState.appendChild(issueStateLabel);
          item = $("div.issue", void 0, issueState, link);
        } else {
          item = $("div.issue", void 0, link);
        }
        issues.appendChild(item);
      }
      similarIssues.appendChild(issuesText);
      similarIssues.appendChild(issues);
    } else {
      const message = $("div.list-title");
      message.textContent = localize(7276, null);
      similarIssues.appendChild(message);
    }
  }
  bb() {
    const makeOption = (issueType2, description) => $("option", { "value": issueType2.valueOf() }, $yf(description));
    const typeSelect = this.Eb("issue-type");
    const { issueType } = this.c.getData();
    $EU(typeSelect, makeOption(0, localize(7277, null)), makeOption(2, localize(7278, null)), makeOption(1, localize(7279, null)));
    typeSelect.value = issueType.toString();
    this.db();
  }
  cb(value, description, disabled) {
    const option = document.createElement("option");
    option.disabled = disabled;
    option.value = value;
    option.textContent = description;
    return option;
  }
  db() {
    const sourceSelect = this.Eb("issue-source");
    const { issueType, fileOnExtension, selectedExtension, fileOnMarketplace, fileOnProduct } = this.c.getData();
    let selected = sourceSelect.selectedIndex;
    if (selected === -1) {
      if (fileOnExtension !== void 0) {
        selected = fileOnExtension ? 2 : 1;
      } else if (selectedExtension?.isBuiltin) {
        selected = 1;
      } else if (fileOnMarketplace) {
        selected = 3;
      } else if (fileOnProduct) {
        selected = 1;
      }
    }
    sourceSelect.innerText = "";
    sourceSelect.append(this.cb("", localize(7280, null), true));
    sourceSelect.append(this.cb(IssueSource2.VSCode, localize(7281, null), false));
    sourceSelect.append(this.cb(IssueSource2.Extension, localize(7282, null), false));
    if (this.y.product.reportMarketplaceIssueUrl) {
      sourceSelect.append(this.cb(IssueSource2.Marketplace, localize(7283, null), false));
    }
    if (issueType !== 2) {
      sourceSelect.append(this.cb(IssueSource2.Unknown, localize(7284, null), false));
    }
    if (selected !== -1 && selected < sourceSelect.options.length) {
      sourceSelect.selectedIndex = selected;
    } else {
      sourceSelect.selectedIndex = 0;
      hide(this.Eb("problem-source-help-text"));
    }
  }
  eb() {
    const { issueType, fileOnExtension, fileOnMarketplace, selectedExtension } = this.c.getData();
    const blockContainer = this.Eb("block-container");
    const systemBlock = $ZS.document.querySelector(".block-system");
    const processBlock = $ZS.document.querySelector(".block-process");
    const workspaceBlock = $ZS.document.querySelector(".block-workspace");
    const extensionsBlock = $ZS.document.querySelector(".block-extensions");
    const experimentsBlock = $ZS.document.querySelector(".block-experiments");
    const extensionDataBlock = $ZS.document.querySelector(".block-extension-data");
    const problemSource = this.Eb("problem-source");
    const descriptionTitle = this.Eb("issue-description-label");
    const descriptionSubtitle = this.Eb("issue-description-subtitle");
    const extensionSelector = this.Eb("extension-selection");
    const titleTextArea = this.Eb("issue-title-container");
    const descriptionTextArea = this.Eb("description");
    const extensionDataTextArea = this.Eb("extension-data");
    hide(blockContainer);
    hide(systemBlock);
    hide(processBlock);
    hide(workspaceBlock);
    hide(extensionsBlock);
    hide(experimentsBlock);
    hide(extensionSelector);
    hide(extensionDataTextArea);
    hide(extensionDataBlock);
    show(problemSource);
    show(titleTextArea);
    show(descriptionTextArea);
    if (fileOnExtension) {
      show(extensionSelector);
    }
    if (selectedExtension && this.w) {
      hide(titleTextArea);
      hide(descriptionTextArea);
      $EU(descriptionTitle, localize(7285, null));
      $EU(descriptionSubtitle, localize(7286, null, selectedExtension.displayName));
      this.u.label = localize(7287, null);
      return;
    }
    if (fileOnExtension && selectedExtension?.data) {
      const data = selectedExtension?.data;
      extensionDataTextArea.innerText = data.toString();
      extensionDataTextArea.readOnly = true;
      show(extensionDataBlock);
    }
    if (fileOnExtension && this.n) {
      extensionDataTextArea.readOnly = true;
      setTimeout(() => {
        if (this.n) {
          show(extensionDataBlock);
        }
      }, 100);
    }
    if (issueType === 0) {
      if (!fileOnMarketplace) {
        show(blockContainer);
        show(systemBlock);
        show(experimentsBlock);
        if (!fileOnExtension) {
          show(extensionsBlock);
        }
      }
      $EU(descriptionTitle, localize(7288, null) + " ", $("span.required-input", void 0, "*"));
      $EU(descriptionSubtitle, localize(7289, null));
    } else if (issueType === 1) {
      if (!fileOnMarketplace) {
        show(blockContainer);
        show(systemBlock);
        show(processBlock);
        show(workspaceBlock);
        show(experimentsBlock);
      }
      if (fileOnExtension) {
        show(extensionSelector);
      } else if (!fileOnMarketplace) {
        show(extensionsBlock);
      }
      $EU(descriptionTitle, localize(7290, null) + " ", $("span.required-input", void 0, "*"));
      $EU(descriptionSubtitle, localize(7291, null));
    } else if (issueType === 2) {
      $EU(descriptionTitle, localize(7292, null) + " ", $("span.required-input", void 0, "*"));
      $EU(descriptionSubtitle, localize(7293, null));
    }
  }
  fb(inputId) {
    const inputElement = this.Eb(inputId);
    const inputValidationMessage = this.Eb(`${inputId}-empty-error`);
    const descriptionShortMessage = this.Eb(`description-short-error`);
    if (!inputElement.value) {
      inputElement.classList.add("invalid-input");
      inputValidationMessage?.classList.remove("hidden");
      descriptionShortMessage?.classList.add("hidden");
      return false;
    } else if (inputId === "description" && inputElement.value.length < 10) {
      inputElement.classList.add("invalid-input");
      descriptionShortMessage?.classList.remove("hidden");
      inputValidationMessage?.classList.add("hidden");
      return false;
    } else {
      inputElement.classList.remove("invalid-input");
      inputValidationMessage?.classList.add("hidden");
      if (inputId === "description") {
        descriptionShortMessage?.classList.add("hidden");
      }
      return true;
    }
  }
  gb() {
    let isValid = true;
    ["issue-title", "description", "issue-source"].forEach((elementId) => {
      isValid = this.fb(elementId) && isValid;
    });
    if (this.c.fileOnExtension()) {
      isValid = this.fb("extension-selector") && isValid;
    }
    return isValid;
  }
  async hb(issueTitle, issueBody, gitHubDetails) {
    const url = `https://api.github.com/repos/${gitHubDetails.owner}/${gitHubDetails.repositoryName}/issues`;
    const init = {
      method: "POST",
      body: JSON.stringify({
        title: issueTitle,
        body: issueBody
      }),
      headers: new Headers({
        "Content-Type": "application/json",
        "Authorization": `Bearer ${this.y.data.githubAccessToken}`
      })
    };
    const response = await fetch(url, init);
    if (!response.ok) {
      console.error("Invalid GitHub URL provided.");
      return false;
    }
    const result = await response.json();
    await this.z.openExternal(result.html_url);
    this.W();
    return true;
  }
  async ib() {
    const selectedExtension = this.c.getData().selectedExtension;
    const hasUri = this.w;
    if (hasUri) {
      const url2 = this.P();
      if (url2) {
        this.m = true;
        await this.z.openExternal(url2);
        return true;
      }
    }
    if (!this.gb()) {
      const invalidInput = $ZS.document.getElementsByClassName("invalid-input");
      if (invalidInput.length) {
        invalidInput[0].focus();
      }
      this.Fb("issue-title", "input", (_) => {
        this.fb("issue-title");
      });
      this.Fb("description", "input", (_) => {
        this.fb("description");
      });
      this.Fb("issue-source", "change", (_) => {
        this.fb("issue-source");
      });
      if (this.c.fileOnExtension()) {
        this.Fb("extension-selector", "change", (_) => {
          this.fb("extension-selector");
        });
      }
      return false;
    }
    this.m = true;
    const issueTitle = this.Eb("issue-title").value;
    const issueBody = this.c.serialize();
    let issueUrl = this.kb();
    if (!issueUrl) {
      console.error("No issue url found");
      return false;
    }
    if (selectedExtension?.uri) {
      const uri = URI.revive(selectedExtension.uri);
      issueUrl = uri.toString();
    }
    const gitHubDetails = this.lb(issueUrl);
    const baseUrl = this.nb(this.Eb("issue-title").value, issueUrl);
    let url = baseUrl + `&body=${encodeURIComponent(issueBody)}`;
    if (url.length > MAX_URL_LENGTH) {
      try {
        url = await this.jb(baseUrl, issueBody);
      } catch (_) {
        console.error("Writing to clipboard failed");
        return false;
      }
    } else if (this.y.data.githubAccessToken && gitHubDetails) {
      return this.hb(issueTitle, issueBody, gitHubDetails);
    }
    await this.z.openExternal(url);
    return true;
  }
  async jb(baseUrl, issueBody) {
    const shouldWrite = await this.C.$showClipboardDialog();
    if (!shouldWrite) {
      throw new $fb();
    }
    await this.z.writeClipboardText(issueBody);
    return baseUrl + `&body=${encodeURIComponent(localize(7294, null))}`;
  }
  kb() {
    return this.c.fileOnExtension() ? this.mb() : this.c.getData().fileOnMarketplace ? this.y.product.reportMarketplaceIssueUrl : this.y.product.reportIssueUrl;
  }
  lb(url) {
    const match = /^https?:\/\/github\.com\/([^\/]*)\/([^\/]*).*/.exec(url);
    if (match && match.length) {
      return {
        owner: match[1],
        repositoryName: match[2]
      };
    } else {
      console.error("No GitHub issues match");
    }
    return void 0;
  }
  mb() {
    let repositoryUrl = "";
    const bugsUrl = this.P();
    const extensionUrl = this.O();
    if (bugsUrl && bugsUrl.match(/^https?:\/\/github\.com\/([^\/]*)\/([^\/]*)\/?(\/issues)?$/)) {
      repositoryUrl = $Phc(bugsUrl);
    } else if (extensionUrl && extensionUrl.match(/^https?:\/\/github\.com\/([^\/]*)\/([^\/]*)$/)) {
      repositoryUrl = $Phc(extensionUrl);
    } else {
      this.w = true;
      repositoryUrl = bugsUrl || extensionUrl || "";
    }
    return repositoryUrl;
  }
  nb(issueTitle, repositoryUrl) {
    if (this.c.fileOnExtension()) {
      repositoryUrl = repositoryUrl + "/issues/new";
    }
    const queryStringPrefix = repositoryUrl.indexOf("?") === -1 ? "?" : "&";
    return `${repositoryUrl}${queryStringPrefix}title=${encodeURIComponent(issueTitle)}`;
  }
  ob(state) {
    const target = $ZS.document.querySelector(".block-system .block-info");
    if (target) {
      const systemInfo = state.systemInfo;
      const renderedDataTable = $("table", void 0, $("tr", void 0, $("td", void 0, "CPUs"), $("td", void 0, systemInfo.cpus || "")), $("tr", void 0, $("td", void 0, "GPU Status"), $("td", void 0, Object.keys(systemInfo.gpuStatus).map((key) => `${key}: ${systemInfo.gpuStatus[key]}`).join("\n"))), $("tr", void 0, $("td", void 0, "Load (avg)"), $("td", void 0, systemInfo.load || "")), $("tr", void 0, $("td", void 0, "Memory (System)"), $("td", void 0, systemInfo.memory)), $("tr", void 0, $("td", void 0, "Process Argv"), $("td", void 0, systemInfo.processArgs)), $("tr", void 0, $("td", void 0, "Screen Reader"), $("td", void 0, systemInfo.screenReader)), $("tr", void 0, $("td", void 0, "VM"), $("td", void 0, systemInfo.vmHint)));
      $EU(target, renderedDataTable);
      systemInfo.remoteData.forEach((remote) => {
        target.appendChild($("hr"));
        if ($an(remote)) {
          const remoteDataTable = $("table", void 0, $("tr", void 0, $("td", void 0, "Remote"), $("td", void 0, remote.hostName)), $("tr", void 0, $("td", void 0, ""), $("td", void 0, remote.errorMessage)));
          target.appendChild(remoteDataTable);
        } else {
          const remoteDataTable = $("table", void 0, $("tr", void 0, $("td", void 0, "Remote"), $("td", void 0, remote.latency ? `${remote.hostName} (latency: ${remote.latency.current.toFixed(2)}ms last, ${remote.latency.average.toFixed(2)}ms average)` : remote.hostName)), $("tr", void 0, $("td", void 0, "OS"), $("td", void 0, remote.machineInfo.os)), $("tr", void 0, $("td", void 0, "CPUs"), $("td", void 0, remote.machineInfo.cpus || "")), $("tr", void 0, $("td", void 0, "Memory (System)"), $("td", void 0, remote.machineInfo.memory)), $("tr", void 0, $("td", void 0, "VM"), $("td", void 0, remote.machineInfo.vmHint)));
          target.appendChild(remoteDataTable);
        }
      });
    }
  }
  pb(extensions) {
    const extensionOptions = extensions.map((extension) => {
      return {
        name: extension.displayName || extension.name || "",
        id: extension.id
      };
    });
    extensionOptions.sort((a, b) => {
      const aName = a.name.toLowerCase();
      const bName = b.name.toLowerCase();
      if (aName > bName) {
        return 1;
      }
      if (aName < bName) {
        return -1;
      }
      return 0;
    });
    const makeOption = (extension, selectedExtension) => {
      const selected = selectedExtension && extension.id === selectedExtension.id;
      return $("option", {
        "value": extension.id,
        "selected": selected || ""
      }, extension.name);
    };
    const extensionsSelector = this.Eb("extension-selector");
    if (extensionsSelector) {
      const { selectedExtension } = this.c.getData();
      $EU(extensionsSelector, this.cb("", localize(7295, null), true), ...extensionOptions.map((extension) => makeOption(extension, selectedExtension)));
      if (!selectedExtension) {
        extensionsSelector.selectedIndex = 0;
      }
      this.Fb("extension-selector", "change", async (e) => {
        this.qb();
        const selectedExtensionId = e.target.value;
        this.s = selectedExtensionId;
        const extensions2 = this.c.getData().allExtensions;
        const matches = extensions2.filter((extension) => extension.id === selectedExtensionId);
        if (matches.length) {
          this.c.update({ selectedExtension: matches[0] });
          const selectedExtension2 = this.c.getData().selectedExtension;
          if (selectedExtension2) {
            const iconElement = document.createElement("span");
            iconElement.classList.add(...ThemeIcon.asClassNameArray($kk.loading), "codicon-modifier-spin");
            this.tb(iconElement);
            const openReporterData = await this.I(selectedExtension2);
            if (openReporterData) {
              if (this.s === selectedExtensionId) {
                this.ub(iconElement, true);
                this.y.data = openReporterData;
              } else if (this.s !== selectedExtensionId) {
              }
            } else {
              if (!this.r) {
                iconElement.classList.remove(...ThemeIcon.asClassNameArray($kk.loading), "codicon-modifier-spin");
              }
              this.ub(iconElement);
              this.qb();
              selectedExtension2.data = void 0;
              selectedExtension2.uri = void 0;
            }
            if (this.s === selectedExtensionId) {
              this.rb(matches[0]);
              this.n = false;
            }
          } else {
            this.c.update({ selectedExtension: void 0 });
            this.X();
            this.qb();
            this.sb();
            this.rb(matches[0]);
          }
        }
      });
    }
    this.Fb("problem-source", "change", (_) => {
      this.sb();
    });
  }
  qb() {
    this.w = false;
    this.c.update({ extensionData: void 0 });
    this.y.data.issueBody = void 0;
    this.y.data.data = void 0;
    this.y.data.uri = void 0;
  }
  async rb(extension) {
    this.c.update({ selectedExtension: extension });
    const template = this.y.data.issueBody;
    if (template) {
      const descriptionTextArea = this.Eb("description");
      const descriptionText = descriptionTextArea.value;
      if (descriptionText === "" || !descriptionText.includes(template.toString())) {
        const fullTextArea = descriptionText + (descriptionText === "" ? "" : "\n") + template.toString();
        descriptionTextArea.value = fullTextArea;
        this.c.update({ issueDescription: fullTextArea });
      }
    }
    const data = this.y.data.data;
    if (data) {
      this.c.update({ extensionData: data });
      extension.data = data;
      const extensionDataBlock = $ZS.document.querySelector(".block-extension-data");
      show(extensionDataBlock);
      this.eb();
    }
    const uri = this.y.data.uri;
    if (uri) {
      extension.uri = uri;
      this.H(extension);
    }
    this.sb();
    const title = this.Eb("issue-title").value;
    this.S(title);
    this.M();
    this.eb();
  }
  sb() {
    const extensionValidationMessage = this.Eb("extension-selection-validation-error");
    const extensionValidationNoUrlsMessage = this.Eb("extension-selection-validation-error-no-url");
    hide(extensionValidationMessage);
    hide(extensionValidationNoUrlsMessage);
    const extension = this.c.getData().selectedExtension;
    if (!extension) {
      this.u.enabled = true;
      return;
    }
    if (this.r) {
      return;
    }
    const hasValidGitHubUrl = this.mb();
    if (hasValidGitHubUrl) {
      this.u.enabled = true;
    } else {
      this.vb();
      this.u.enabled = false;
    }
  }
  tb(element) {
    this.n = true;
    this.r = true;
    this.M();
    const extensionDataCaption = this.Eb("extension-id");
    hide(extensionDataCaption);
    const extensionDataCaption2 = Array.from($ZS.document.querySelectorAll(".ext-parens"));
    extensionDataCaption2.forEach((extensionDataCaption22) => hide(extensionDataCaption22));
    const showLoading = this.Eb("ext-loading");
    show(showLoading);
    while (showLoading.firstChild) {
      showLoading.firstChild.remove();
    }
    showLoading.append(element);
    this.eb();
  }
  ub(element, fromReporter = false) {
    this.n = fromReporter;
    this.r = false;
    this.M();
    const extensionDataCaption = this.Eb("extension-id");
    show(extensionDataCaption);
    const extensionDataCaption2 = Array.from($ZS.document.querySelectorAll(".ext-parens"));
    extensionDataCaption2.forEach((extensionDataCaption22) => show(extensionDataCaption22));
    const hideLoading = this.Eb("ext-loading");
    hide(hideLoading);
    if (hideLoading.firstChild) {
      element.remove();
    }
    this.eb();
  }
  vb() {
    const extensionValidationMessage = this.Eb("extension-selection-validation-error");
    const extensionValidationNoUrlsMessage = this.Eb("extension-selection-validation-error-no-url");
    const bugsUrl = this.P();
    if (bugsUrl) {
      show(extensionValidationMessage);
      const link = this.Eb("extensionBugsLink");
      link.textContent = bugsUrl;
      return;
    }
    const extensionUrl = this.O();
    if (extensionUrl) {
      show(extensionValidationMessage);
      const link = this.Eb("extensionBugsLink");
      link.textContent = extensionUrl;
      return;
    }
    show(extensionValidationNoUrlsMessage);
  }
  wb(state) {
    const target = $ZS.document.querySelector(".block-process .block-info");
    if (target) {
      $EU(target, $("code", void 0, state.processInfo ?? ""));
    }
  }
  xb(state) {
    $ZS.document.querySelector(".block-workspace .block-info code").textContent = "\n" + state.workspaceInfo;
  }
  yb(extensions, numThemeExtensions) {
    const target = $ZS.document.querySelector(".block-extensions .block-info");
    if (target) {
      if (this.y.disableExtensions) {
        $EU(target, localize(7296, null));
        return;
      }
      const themeExclusionStr = numThemeExtensions ? `
(${numThemeExtensions} theme extensions excluded)` : "";
      extensions = extensions || [];
      if (!extensions.length) {
        target.innerText = "Extensions: none" + themeExclusionStr;
        return;
      }
      $EU(target, this.Cb(extensions), document.createTextNode(themeExclusionStr));
    }
  }
  zb(restrictedMode) {
    this.c.update({ restrictedMode });
  }
  Ab(isUnsupported) {
    this.c.update({ isUnsupported });
  }
  Bb(experimentInfo) {
    this.c.update({ experimentInfo });
    const target = $ZS.document.querySelector(".block-experiments .block-info");
    if (target) {
      target.textContent = experimentInfo ? experimentInfo : localize(7297, null);
    }
  }
  Cb(extensions) {
    return $("table", void 0, $("tr", void 0, $("th", void 0, "Extension"), $("th", void 0, "Author (truncated)"), $("th", void 0, "Version")), ...extensions.map((extension) => $("tr", void 0, $("td", void 0, extension.name), $("td", void 0, extension.publisher?.substr(0, 3) ?? "N/A"), $("td", void 0, extension.version))));
  }
  Db(event) {
    event.preventDefault();
    event.stopPropagation();
    if (event.which < 3) {
      $OU(event.target.href);
    }
  }
  Eb(elementId) {
    const element = $ZS.document.getElementById(elementId);
    if (element) {
      return element;
    } else {
      return void 0;
    }
  }
  Fb(elementId, eventType, handler) {
    const element = this.Eb(elementId);
    element?.addEventListener(eventType, handler);
  }
};
__decorate([
  $qi(300)
], $Swc.prototype, "Y", null);
__decorate([
  $qi(300)
], $Swc.prototype, "Z", null);
$Swc = __decorate([
  __param(1, $3ic),
  __param(2, $oob),
  __param(3, $pob)
], $Swc);
function hide(el) {
  el?.classList.add("hidden");
}
function show(el) {
  el?.classList.remove("hidden");
}

// out-build/vs/workbench/contrib/issue/electron-sandbox/issueReporterMain.js
function startup(configuration) {
  const platformClass = $l ? "windows" : $n ? "linux" : "mac";
  $ZS.document.body.classList.add(platformClass);
  $1U($ZS.document.body, issueReporterPage_default());
  const instantiationService = initServices(configuration.windowId);
  const issueReporter = instantiationService.createInstance($Swc, configuration);
  issueReporter.render();
  $ZS.document.body.style.display = "block";
  issueReporter.setInitialFocus();
}
function initServices(windowId) {
  const services = new $Vi();
  const contributedServices = $bt();
  for (const [id2, descriptor] of contributedServices) {
    services.set(id2, descriptor);
  }
  services.set($ikc, new $Ui($kkc, [windowId]));
  services.set($3ic, new $Ui($lkc, [windowId]));
  return new $Rr(services, true);
}
$Qoc($oob, "issue");
$Qoc($pob, "process");
export {
  startup
};
/*! @license DOMPurify 3.0.5 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.0.5/LICENSE */

//# sourceMappingURL=issueReporterMain.js.map
