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

var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});

// out-build/vs/base/common/diff/diffChange.js
var $au = class {
  /**
   * Constructs a new DiffChange with the given sequence information
   * and content.
   */
  constructor(originalStart, originalLength, modifiedStart, modifiedLength) {
    this.originalStart = originalStart;
    this.originalLength = originalLength;
    this.modifiedStart = modifiedStart;
    this.modifiedLength = modifiedLength;
  }
  /**
   * The end point (exclusive) of the change in the original sequence.
   */
  getOriginalEnd() {
    return this.originalStart + this.originalLength;
  }
  /**
   * The end point (exclusive) of the change in the modified sequence.
   */
  getModifiedEnd() {
    return this.modifiedStart + this.modifiedLength;
  }
};

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
function $cb(error) {
  if (error instanceof Error) {
    const { name, message } = error;
    const stack = error.stacktrace || error.stack;
    return {
      $isError: true,
      name,
      message,
      stack,
      noTelemetry: $ob.isErrorNoTelemetry(error)
    };
  }
  return error;
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
var $pb = class _$pb extends Error {
  constructor(message) {
    super(message || "An unexpected bug occurred.");
    Object.setPrototypeOf(this, _$pb.prototype);
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
function $tb(array, predicate) {
  const idx = $ub(array, predicate);
  return idx === -1 ? void 0 : array[idx];
}
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
function $vb(array, predicate) {
  const idx = $wb(array, predicate);
  return idx === array.length ? void 0 : array[idx];
}
function $wb(array, predicate, startIdx = 0, endIdxEx = array.length) {
  let i = startIdx;
  let j = endIdxEx;
  while (i < j) {
    const k = Math.floor((i + j) / 2);
    if (predicate(array[k])) {
      j = k;
    } else {
      i = k + 1;
    }
  }
  return i;
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
function $Hb(one, other, itemEquals = (a, b) => a === b) {
  if (one === other) {
    return true;
  }
  if (!one || !other) {
    return false;
  }
  if (one.length !== other.length) {
    return false;
  }
  for (let i = 0, len = one.length; i < len; i++) {
    if (!itemEquals(one[i], other[i])) {
      return false;
    }
  }
  return true;
}
function* $Nb(items, shouldBeGrouped) {
  let currentGroup;
  let last;
  for (const item of items) {
    if (last !== void 0 && shouldBeGrouped(last, item)) {
      currentGroup.push(item);
    } else {
      if (currentGroup) {
        yield currentGroup;
      }
      currentGroup = [item];
    }
    last = item;
  }
  if (currentGroup) {
    yield currentGroup;
  }
}
function $Ob(arr, f) {
  for (let i = 0; i <= arr.length; i++) {
    f(i === 0 ? void 0 : arr[i - 1], i === arr.length ? void 0 : arr[i]);
  }
}
function $Pb(arr, f) {
  for (let i = 0; i < arr.length; i++) {
    f(i === 0 ? void 0 : arr[i - 1], arr[i], i + 1 === arr.length ? void 0 : arr[i + 1]);
  }
}
function $$b(arr, items) {
  for (const item of items) {
    arr.push(item);
  }
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
function $ic(comparator) {
  return (a, b) => -comparator(a, b);
}
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
var Node = class _Node {
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
    this.a = Node.Undefined;
    this.b = Node.Undefined;
    this.c = 0;
  }
  get size() {
    return this.c;
  }
  isEmpty() {
    return this.a === Node.Undefined;
  }
  clear() {
    let node = this.a;
    while (node !== Node.Undefined) {
      const next = node.next;
      node.prev = Node.Undefined;
      node.next = Node.Undefined;
      node = next;
    }
    this.a = Node.Undefined;
    this.b = Node.Undefined;
    this.c = 0;
  }
  unshift(element) {
    return this.d(element, false);
  }
  push(element) {
    return this.d(element, true);
  }
  d(element, atTheEnd) {
    const newNode = new Node(element);
    if (this.a === Node.Undefined) {
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
    if (this.a === Node.Undefined) {
      return void 0;
    } else {
      const res = this.a.element;
      this.e(this.a);
      return res;
    }
  }
  pop() {
    if (this.b === Node.Undefined) {
      return void 0;
    } else {
      const res = this.b.element;
      this.e(this.b);
      return res;
    }
  }
  e(node) {
    if (node.prev !== Node.Undefined && node.next !== Node.Undefined) {
      const anchor = node.prev;
      anchor.next = node.next;
      node.next.prev = anchor;
    } else if (node.prev === Node.Undefined && node.next === Node.Undefined) {
      this.a = Node.Undefined;
      this.b = Node.Undefined;
    } else if (node.next === Node.Undefined) {
      this.b = this.b.prev;
      this.b.next = Node.Undefined;
    } else if (node.prev === Node.Undefined) {
      this.a = this.a.next;
      this.a.prev = Node.Undefined;
    }
    this.c -= 1;
  }
  *[Symbol.iterator]() {
    let node = this.a;
    while (node !== Node.Undefined) {
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
  function _addLeakageTraceLogic(options) {
    if (_enableSnapshotPotentialLeakWarning) {
      const { onDidAddListener: origListenerDidAdd } = options;
      const stack = Stacktrace.create();
      let count = 0;
      options.onDidAddListener = () => {
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
    const options = {
      onWillAddFirstListener() {
        listener = event(emitter.fire, emitter);
      },
      onDidRemoveLastListener() {
        listener?.dispose();
      }
    };
    if (!disposable) {
      _addLeakageTraceLogic(options);
    }
    const emitter = new $Ce(options);
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
    const options = {
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
      _addLeakageTraceLogic(options);
    }
    const emitter = new $Ce(options);
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
      const options = {
        onWillAddFirstListener: () => {
          _observable.addObserver(this);
          this._observable.reportChanges();
        },
        onDidRemoveLastListener: () => {
          _observable.removeObserver(this);
        }
      };
      if (!store) {
        _addLeakageTraceLogic(options);
      }
      this.emitter = new $Ce(options);
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
  constructor(options) {
    this.z = 0;
    this.f = options;
    this.g = _globalLeakWarningThreshold > 0 || this.f?.leakWarningThreshold ? new LeakageMonitor(options?.onListenerError ?? $ab, this.f?.leakWarningThreshold ?? _globalLeakWarningThreshold) : void 0;
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
function $zf(value) {
  return value.replace(/[\\\{\}\*\+\?\|\^\$\.\[\]\(\)]/g, "\\$&");
}
function $Kf(str) {
  return str.split(/\r\n|\r|\n/);
}
function $Mf(str) {
  for (let i = 0, len = str.length; i < len; i++) {
    const chCode = str.charCodeAt(i);
    if (chCode !== 32 && chCode !== 9) {
      return i;
    }
  }
  return -1;
}
function $Of(str, startIndex = str.length - 1) {
  for (let i = startIndex; i >= 0; i--) {
    const chCode = str.charCodeAt(i);
    if (chCode !== 32 && chCode !== 9) {
      return i;
    }
  }
  return -1;
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
function $5f(str, len, offset) {
  const charCode = str.charCodeAt(offset);
  if ($2f(charCode) && offset + 1 < len) {
    const nextCharCode = str.charCodeAt(offset + 1);
    if ($3f(nextCharCode)) {
      return $4f(charCode, nextCharCode);
    }
  }
  return charCode;
}
var IS_BASIC_ASCII = /^[\t\n\r\x20-\x7E]*$/;
function $ag(str) {
  return IS_BASIC_ASCII.test(str);
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

// out-build/vs/base/common/hash.js
function $Nj(val, initialHashVal) {
  return (initialHashVal << 5) - initialHashVal + val | 0;
}
function $Oj(s, hashVal) {
  hashVal = $Nj(149417, hashVal);
  for (let i = 0, length = s.length; i < length; i++) {
    hashVal = $Nj(s.charCodeAt(i), hashVal);
  }
  return hashVal;
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

// out-build/vs/base/common/diff/diff.js
var $bu = class {
  constructor(a) {
    this.a = a;
  }
  getElements() {
    const source = this.a;
    const characters = new Int32Array(source.length);
    for (let i = 0, len = source.length; i < len; i++) {
      characters[i] = source.charCodeAt(i);
    }
    return characters;
  }
};
function $cu(original, modified, pretty) {
  return new $du(new $bu(original), new $bu(modified)).ComputeDiff(pretty).changes;
}
var Debug = class {
  static Assert(condition, message) {
    if (!condition) {
      throw new Error(message);
    }
  }
};
var MyArray = class {
  /**
   * Copies a range of elements from an Array starting at the specified source index and pastes
   * them to another Array starting at the specified destination index. The length and the indexes
   * are specified as 64-bit integers.
   * sourceArray:
   *		The Array that contains the data to copy.
   * sourceIndex:
   *		A 64-bit integer that represents the index in the sourceArray at which copying begins.
   * destinationArray:
   *		The Array that receives the data.
   * destinationIndex:
   *		A 64-bit integer that represents the index in the destinationArray at which storing begins.
   * length:
   *		A 64-bit integer that represents the number of elements to copy.
   */
  static Copy(sourceArray, sourceIndex, destinationArray, destinationIndex, length) {
    for (let i = 0; i < length; i++) {
      destinationArray[destinationIndex + i] = sourceArray[sourceIndex + i];
    }
  }
  static Copy2(sourceArray, sourceIndex, destinationArray, destinationIndex, length) {
    for (let i = 0; i < length; i++) {
      destinationArray[destinationIndex + i] = sourceArray[sourceIndex + i];
    }
  }
};
var LocalConstants;
(function(LocalConstants2) {
  LocalConstants2[LocalConstants2["MaxDifferencesHistory"] = 1447] = "MaxDifferencesHistory";
})(LocalConstants || (LocalConstants = {}));
var DiffChangeHelper = class {
  /**
   * Constructs a new DiffChangeHelper for the given DiffSequences.
   */
  constructor() {
    this.a = [];
    this.b = 1073741824;
    this.c = 1073741824;
    this.d = 0;
    this.e = 0;
  }
  /**
   * Marks the beginning of the next change in the set of differences.
   */
  MarkNextChange() {
    if (this.d > 0 || this.e > 0) {
      this.a.push(new $au(this.b, this.d, this.c, this.e));
    }
    this.d = 0;
    this.e = 0;
    this.b = 1073741824;
    this.c = 1073741824;
  }
  /**
   * Adds the original element at the given position to the elements
   * affected by the current change. The modified index gives context
   * to the change position with respect to the original sequence.
   * @param originalIndex The index of the original element to add.
   * @param modifiedIndex The index of the modified element that provides corresponding position in the modified sequence.
   */
  AddOriginalElement(originalIndex, modifiedIndex) {
    this.b = Math.min(this.b, originalIndex);
    this.c = Math.min(this.c, modifiedIndex);
    this.d++;
  }
  /**
   * Adds the modified element at the given position to the elements
   * affected by the current change. The original index gives context
   * to the change position with respect to the modified sequence.
   * @param originalIndex The index of the original element that provides corresponding position in the original sequence.
   * @param modifiedIndex The index of the modified element to add.
   */
  AddModifiedElement(originalIndex, modifiedIndex) {
    this.b = Math.min(this.b, originalIndex);
    this.c = Math.min(this.c, modifiedIndex);
    this.e++;
  }
  /**
   * Retrieves all of the changes marked by the class.
   */
  getChanges() {
    if (this.d > 0 || this.e > 0) {
      this.MarkNextChange();
    }
    return this.a;
  }
  /**
   * Retrieves all of the changes marked by the class in the reverse order
   */
  getReverseChanges() {
    if (this.d > 0 || this.e > 0) {
      this.MarkNextChange();
    }
    this.a.reverse();
    return this.a;
  }
};
var $du = class _$du {
  /**
   * Constructs the DiffFinder
   */
  constructor(originalSequence, modifiedSequence, continueProcessingPredicate = null) {
    this.a = continueProcessingPredicate;
    this.b = originalSequence;
    this.c = modifiedSequence;
    const [originalStringElements, originalElementsOrHash, originalHasStrings] = _$du.o(originalSequence);
    const [modifiedStringElements, modifiedElementsOrHash, modifiedHasStrings] = _$du.o(modifiedSequence);
    this.d = originalHasStrings && modifiedHasStrings;
    this.e = originalStringElements;
    this.f = originalElementsOrHash;
    this.g = modifiedStringElements;
    this.h = modifiedElementsOrHash;
    this.k = [];
    this.m = [];
  }
  static n(arr) {
    return arr.length > 0 && typeof arr[0] === "string";
  }
  static o(sequence) {
    const elements = sequence.getElements();
    if (_$du.n(elements)) {
      const hashes = new Int32Array(elements.length);
      for (let i = 0, len = elements.length; i < len; i++) {
        hashes[i] = $Oj(elements[i], 0);
      }
      return [elements, hashes, true];
    }
    if (elements instanceof Int32Array) {
      return [[], elements, false];
    }
    return [[], new Int32Array(elements), false];
  }
  p(originalIndex, newIndex) {
    if (this.f[originalIndex] !== this.h[newIndex]) {
      return false;
    }
    return this.d ? this.e[originalIndex] === this.g[newIndex] : true;
  }
  q(originalIndex, newIndex) {
    if (!this.p(originalIndex, newIndex)) {
      return false;
    }
    const originalElement = _$du.r(this.b, originalIndex);
    const modifiedElement = _$du.r(this.c, newIndex);
    return originalElement === modifiedElement;
  }
  static r(sequence, index) {
    if (typeof sequence.getStrictElement === "function") {
      return sequence.getStrictElement(index);
    }
    return null;
  }
  s(index1, index2) {
    if (this.f[index1] !== this.f[index2]) {
      return false;
    }
    return this.d ? this.e[index1] === this.e[index2] : true;
  }
  u(index1, index2) {
    if (this.h[index1] !== this.h[index2]) {
      return false;
    }
    return this.d ? this.g[index1] === this.g[index2] : true;
  }
  ComputeDiff(pretty) {
    return this.v(0, this.f.length - 1, 0, this.h.length - 1, pretty);
  }
  /**
   * Computes the differences between the original and modified input
   * sequences on the bounded range.
   * @returns An array of the differences between the two input sequences.
   */
  v(originalStart, originalEnd, modifiedStart, modifiedEnd, pretty) {
    const quitEarlyArr = [false];
    let changes = this.w(originalStart, originalEnd, modifiedStart, modifiedEnd, quitEarlyArr);
    if (pretty) {
      changes = this.z(changes);
    }
    return {
      quitEarly: quitEarlyArr[0],
      changes
    };
  }
  /**
   * Private helper method which computes the differences on the bounded range
   * recursively.
   * @returns An array of the differences between the two input sequences.
   */
  w(originalStart, originalEnd, modifiedStart, modifiedEnd, quitEarlyArr) {
    quitEarlyArr[0] = false;
    while (originalStart <= originalEnd && modifiedStart <= modifiedEnd && this.p(originalStart, modifiedStart)) {
      originalStart++;
      modifiedStart++;
    }
    while (originalEnd >= originalStart && modifiedEnd >= modifiedStart && this.p(originalEnd, modifiedEnd)) {
      originalEnd--;
      modifiedEnd--;
    }
    if (originalStart > originalEnd || modifiedStart > modifiedEnd) {
      let changes;
      if (modifiedStart <= modifiedEnd) {
        Debug.Assert(originalStart === originalEnd + 1, "originalStart should only be one more than originalEnd");
        changes = [
          new $au(originalStart, 0, modifiedStart, modifiedEnd - modifiedStart + 1)
        ];
      } else if (originalStart <= originalEnd) {
        Debug.Assert(modifiedStart === modifiedEnd + 1, "modifiedStart should only be one more than modifiedEnd");
        changes = [
          new $au(originalStart, originalEnd - originalStart + 1, modifiedStart, 0)
        ];
      } else {
        Debug.Assert(originalStart === originalEnd + 1, "originalStart should only be one more than originalEnd");
        Debug.Assert(modifiedStart === modifiedEnd + 1, "modifiedStart should only be one more than modifiedEnd");
        changes = [];
      }
      return changes;
    }
    const midOriginalArr = [0];
    const midModifiedArr = [0];
    const result = this.y(originalStart, originalEnd, modifiedStart, modifiedEnd, midOriginalArr, midModifiedArr, quitEarlyArr);
    const midOriginal = midOriginalArr[0];
    const midModified = midModifiedArr[0];
    if (result !== null) {
      return result;
    } else if (!quitEarlyArr[0]) {
      const leftChanges = this.w(originalStart, midOriginal, modifiedStart, midModified, quitEarlyArr);
      let rightChanges = [];
      if (!quitEarlyArr[0]) {
        rightChanges = this.w(midOriginal + 1, originalEnd, midModified + 1, modifiedEnd, quitEarlyArr);
      } else {
        rightChanges = [
          new $au(midOriginal + 1, originalEnd - (midOriginal + 1) + 1, midModified + 1, modifiedEnd - (midModified + 1) + 1)
        ];
      }
      return this.H(leftChanges, rightChanges);
    }
    return [
      new $au(originalStart, originalEnd - originalStart + 1, modifiedStart, modifiedEnd - modifiedStart + 1)
    ];
  }
  x(diagonalForwardBase, diagonalForwardStart, diagonalForwardEnd, diagonalForwardOffset, diagonalReverseBase, diagonalReverseStart, diagonalReverseEnd, diagonalReverseOffset, forwardPoints, reversePoints, originalIndex, originalEnd, midOriginalArr, modifiedIndex, modifiedEnd, midModifiedArr, deltaIsEven, quitEarlyArr) {
    let forwardChanges = null;
    let reverseChanges = null;
    let changeHelper = new DiffChangeHelper();
    let diagonalMin = diagonalForwardStart;
    let diagonalMax = diagonalForwardEnd;
    let diagonalRelative = midOriginalArr[0] - midModifiedArr[0] - diagonalForwardOffset;
    let lastOriginalIndex = -1073741824;
    let historyIndex = this.k.length - 1;
    do {
      const diagonal = diagonalRelative + diagonalForwardBase;
      if (diagonal === diagonalMin || diagonal < diagonalMax && forwardPoints[diagonal - 1] < forwardPoints[diagonal + 1]) {
        originalIndex = forwardPoints[diagonal + 1];
        modifiedIndex = originalIndex - diagonalRelative - diagonalForwardOffset;
        if (originalIndex < lastOriginalIndex) {
          changeHelper.MarkNextChange();
        }
        lastOriginalIndex = originalIndex;
        changeHelper.AddModifiedElement(originalIndex + 1, modifiedIndex);
        diagonalRelative = diagonal + 1 - diagonalForwardBase;
      } else {
        originalIndex = forwardPoints[diagonal - 1] + 1;
        modifiedIndex = originalIndex - diagonalRelative - diagonalForwardOffset;
        if (originalIndex < lastOriginalIndex) {
          changeHelper.MarkNextChange();
        }
        lastOriginalIndex = originalIndex - 1;
        changeHelper.AddOriginalElement(originalIndex, modifiedIndex + 1);
        diagonalRelative = diagonal - 1 - diagonalForwardBase;
      }
      if (historyIndex >= 0) {
        forwardPoints = this.k[historyIndex];
        diagonalForwardBase = forwardPoints[0];
        diagonalMin = 1;
        diagonalMax = forwardPoints.length - 1;
      }
    } while (--historyIndex >= -1);
    forwardChanges = changeHelper.getReverseChanges();
    if (quitEarlyArr[0]) {
      let originalStartPoint = midOriginalArr[0] + 1;
      let modifiedStartPoint = midModifiedArr[0] + 1;
      if (forwardChanges !== null && forwardChanges.length > 0) {
        const lastForwardChange = forwardChanges[forwardChanges.length - 1];
        originalStartPoint = Math.max(originalStartPoint, lastForwardChange.getOriginalEnd());
        modifiedStartPoint = Math.max(modifiedStartPoint, lastForwardChange.getModifiedEnd());
      }
      reverseChanges = [
        new $au(originalStartPoint, originalEnd - originalStartPoint + 1, modifiedStartPoint, modifiedEnd - modifiedStartPoint + 1)
      ];
    } else {
      changeHelper = new DiffChangeHelper();
      diagonalMin = diagonalReverseStart;
      diagonalMax = diagonalReverseEnd;
      diagonalRelative = midOriginalArr[0] - midModifiedArr[0] - diagonalReverseOffset;
      lastOriginalIndex = 1073741824;
      historyIndex = deltaIsEven ? this.m.length - 1 : this.m.length - 2;
      do {
        const diagonal = diagonalRelative + diagonalReverseBase;
        if (diagonal === diagonalMin || diagonal < diagonalMax && reversePoints[diagonal - 1] >= reversePoints[diagonal + 1]) {
          originalIndex = reversePoints[diagonal + 1] - 1;
          modifiedIndex = originalIndex - diagonalRelative - diagonalReverseOffset;
          if (originalIndex > lastOriginalIndex) {
            changeHelper.MarkNextChange();
          }
          lastOriginalIndex = originalIndex + 1;
          changeHelper.AddOriginalElement(originalIndex + 1, modifiedIndex + 1);
          diagonalRelative = diagonal + 1 - diagonalReverseBase;
        } else {
          originalIndex = reversePoints[diagonal - 1];
          modifiedIndex = originalIndex - diagonalRelative - diagonalReverseOffset;
          if (originalIndex > lastOriginalIndex) {
            changeHelper.MarkNextChange();
          }
          lastOriginalIndex = originalIndex;
          changeHelper.AddModifiedElement(originalIndex + 1, modifiedIndex + 1);
          diagonalRelative = diagonal - 1 - diagonalReverseBase;
        }
        if (historyIndex >= 0) {
          reversePoints = this.m[historyIndex];
          diagonalReverseBase = reversePoints[0];
          diagonalMin = 1;
          diagonalMax = reversePoints.length - 1;
        }
      } while (--historyIndex >= -1);
      reverseChanges = changeHelper.getChanges();
    }
    return this.H(forwardChanges, reverseChanges);
  }
  /**
   * Given the range to compute the diff on, this method finds the point:
   * (midOriginal, midModified)
   * that exists in the middle of the LCS of the two sequences and
   * is the point at which the LCS problem may be broken down recursively.
   * This method will try to keep the LCS trace in memory. If the LCS recursion
   * point is calculated and the full trace is available in memory, then this method
   * will return the change list.
   * @param originalStart The start bound of the original sequence range
   * @param originalEnd The end bound of the original sequence range
   * @param modifiedStart The start bound of the modified sequence range
   * @param modifiedEnd The end bound of the modified sequence range
   * @param midOriginal The middle point of the original sequence range
   * @param midModified The middle point of the modified sequence range
   * @returns The diff changes, if available, otherwise null
   */
  y(originalStart, originalEnd, modifiedStart, modifiedEnd, midOriginalArr, midModifiedArr, quitEarlyArr) {
    let originalIndex = 0, modifiedIndex = 0;
    let diagonalForwardStart = 0, diagonalForwardEnd = 0;
    let diagonalReverseStart = 0, diagonalReverseEnd = 0;
    originalStart--;
    modifiedStart--;
    midOriginalArr[0] = 0;
    midModifiedArr[0] = 0;
    this.k = [];
    this.m = [];
    const maxDifferences = originalEnd - originalStart + (modifiedEnd - modifiedStart);
    const numDiagonals = maxDifferences + 1;
    const forwardPoints = new Int32Array(numDiagonals);
    const reversePoints = new Int32Array(numDiagonals);
    const diagonalForwardBase = modifiedEnd - modifiedStart;
    const diagonalReverseBase = originalEnd - originalStart;
    const diagonalForwardOffset = originalStart - modifiedStart;
    const diagonalReverseOffset = originalEnd - modifiedEnd;
    const delta = diagonalReverseBase - diagonalForwardBase;
    const deltaIsEven = delta % 2 === 0;
    forwardPoints[diagonalForwardBase] = originalStart;
    reversePoints[diagonalReverseBase] = originalEnd;
    quitEarlyArr[0] = false;
    for (let numDifferences = 1; numDifferences <= maxDifferences / 2 + 1; numDifferences++) {
      let furthestOriginalIndex = 0;
      let furthestModifiedIndex = 0;
      diagonalForwardStart = this.J(diagonalForwardBase - numDifferences, numDifferences, diagonalForwardBase, numDiagonals);
      diagonalForwardEnd = this.J(diagonalForwardBase + numDifferences, numDifferences, diagonalForwardBase, numDiagonals);
      for (let diagonal = diagonalForwardStart; diagonal <= diagonalForwardEnd; diagonal += 2) {
        if (diagonal === diagonalForwardStart || diagonal < diagonalForwardEnd && forwardPoints[diagonal - 1] < forwardPoints[diagonal + 1]) {
          originalIndex = forwardPoints[diagonal + 1];
        } else {
          originalIndex = forwardPoints[diagonal - 1] + 1;
        }
        modifiedIndex = originalIndex - (diagonal - diagonalForwardBase) - diagonalForwardOffset;
        const tempOriginalIndex = originalIndex;
        while (originalIndex < originalEnd && modifiedIndex < modifiedEnd && this.p(originalIndex + 1, modifiedIndex + 1)) {
          originalIndex++;
          modifiedIndex++;
        }
        forwardPoints[diagonal] = originalIndex;
        if (originalIndex + modifiedIndex > furthestOriginalIndex + furthestModifiedIndex) {
          furthestOriginalIndex = originalIndex;
          furthestModifiedIndex = modifiedIndex;
        }
        if (!deltaIsEven && Math.abs(diagonal - diagonalReverseBase) <= numDifferences - 1) {
          if (originalIndex >= reversePoints[diagonal]) {
            midOriginalArr[0] = originalIndex;
            midModifiedArr[0] = modifiedIndex;
            if (tempOriginalIndex <= reversePoints[diagonal] && 1447 > 0 && numDifferences <= 1447 + 1) {
              return this.x(diagonalForwardBase, diagonalForwardStart, diagonalForwardEnd, diagonalForwardOffset, diagonalReverseBase, diagonalReverseStart, diagonalReverseEnd, diagonalReverseOffset, forwardPoints, reversePoints, originalIndex, originalEnd, midOriginalArr, modifiedIndex, modifiedEnd, midModifiedArr, deltaIsEven, quitEarlyArr);
            } else {
              return null;
            }
          }
        }
      }
      const matchLengthOfLongest = (furthestOriginalIndex - originalStart + (furthestModifiedIndex - modifiedStart) - numDifferences) / 2;
      if (this.a !== null && !this.a(furthestOriginalIndex, matchLengthOfLongest)) {
        quitEarlyArr[0] = true;
        midOriginalArr[0] = furthestOriginalIndex;
        midModifiedArr[0] = furthestModifiedIndex;
        if (matchLengthOfLongest > 0 && 1447 > 0 && numDifferences <= 1447 + 1) {
          return this.x(diagonalForwardBase, diagonalForwardStart, diagonalForwardEnd, diagonalForwardOffset, diagonalReverseBase, diagonalReverseStart, diagonalReverseEnd, diagonalReverseOffset, forwardPoints, reversePoints, originalIndex, originalEnd, midOriginalArr, modifiedIndex, modifiedEnd, midModifiedArr, deltaIsEven, quitEarlyArr);
        } else {
          originalStart++;
          modifiedStart++;
          return [
            new $au(originalStart, originalEnd - originalStart + 1, modifiedStart, modifiedEnd - modifiedStart + 1)
          ];
        }
      }
      diagonalReverseStart = this.J(diagonalReverseBase - numDifferences, numDifferences, diagonalReverseBase, numDiagonals);
      diagonalReverseEnd = this.J(diagonalReverseBase + numDifferences, numDifferences, diagonalReverseBase, numDiagonals);
      for (let diagonal = diagonalReverseStart; diagonal <= diagonalReverseEnd; diagonal += 2) {
        if (diagonal === diagonalReverseStart || diagonal < diagonalReverseEnd && reversePoints[diagonal - 1] >= reversePoints[diagonal + 1]) {
          originalIndex = reversePoints[diagonal + 1] - 1;
        } else {
          originalIndex = reversePoints[diagonal - 1];
        }
        modifiedIndex = originalIndex - (diagonal - diagonalReverseBase) - diagonalReverseOffset;
        const tempOriginalIndex = originalIndex;
        while (originalIndex > originalStart && modifiedIndex > modifiedStart && this.p(originalIndex, modifiedIndex)) {
          originalIndex--;
          modifiedIndex--;
        }
        reversePoints[diagonal] = originalIndex;
        if (deltaIsEven && Math.abs(diagonal - diagonalForwardBase) <= numDifferences) {
          if (originalIndex <= forwardPoints[diagonal]) {
            midOriginalArr[0] = originalIndex;
            midModifiedArr[0] = modifiedIndex;
            if (tempOriginalIndex >= forwardPoints[diagonal] && 1447 > 0 && numDifferences <= 1447 + 1) {
              return this.x(diagonalForwardBase, diagonalForwardStart, diagonalForwardEnd, diagonalForwardOffset, diagonalReverseBase, diagonalReverseStart, diagonalReverseEnd, diagonalReverseOffset, forwardPoints, reversePoints, originalIndex, originalEnd, midOriginalArr, modifiedIndex, modifiedEnd, midModifiedArr, deltaIsEven, quitEarlyArr);
            } else {
              return null;
            }
          }
        }
      }
      if (numDifferences <= 1447) {
        let temp = new Int32Array(diagonalForwardEnd - diagonalForwardStart + 2);
        temp[0] = diagonalForwardBase - diagonalForwardStart + 1;
        MyArray.Copy2(forwardPoints, diagonalForwardStart, temp, 1, diagonalForwardEnd - diagonalForwardStart + 1);
        this.k.push(temp);
        temp = new Int32Array(diagonalReverseEnd - diagonalReverseStart + 2);
        temp[0] = diagonalReverseBase - diagonalReverseStart + 1;
        MyArray.Copy2(reversePoints, diagonalReverseStart, temp, 1, diagonalReverseEnd - diagonalReverseStart + 1);
        this.m.push(temp);
      }
    }
    return this.x(diagonalForwardBase, diagonalForwardStart, diagonalForwardEnd, diagonalForwardOffset, diagonalReverseBase, diagonalReverseStart, diagonalReverseEnd, diagonalReverseOffset, forwardPoints, reversePoints, originalIndex, originalEnd, midOriginalArr, modifiedIndex, modifiedEnd, midModifiedArr, deltaIsEven, quitEarlyArr);
  }
  /**
   * Shifts the given changes to provide a more intuitive diff.
   * While the first element in a diff matches the first element after the diff,
   * we shift the diff down.
   *
   * @param changes The list of changes to shift
   * @returns The shifted changes
   */
  z(changes) {
    for (let i = 0; i < changes.length; i++) {
      const change = changes[i];
      const originalStop = i < changes.length - 1 ? changes[i + 1].originalStart : this.f.length;
      const modifiedStop = i < changes.length - 1 ? changes[i + 1].modifiedStart : this.h.length;
      const checkOriginal = change.originalLength > 0;
      const checkModified = change.modifiedLength > 0;
      while (change.originalStart + change.originalLength < originalStop && change.modifiedStart + change.modifiedLength < modifiedStop && (!checkOriginal || this.s(change.originalStart, change.originalStart + change.originalLength)) && (!checkModified || this.u(change.modifiedStart, change.modifiedStart + change.modifiedLength))) {
        const startStrictEqual = this.q(change.originalStart, change.modifiedStart);
        const endStrictEqual = this.q(change.originalStart + change.originalLength, change.modifiedStart + change.modifiedLength);
        if (endStrictEqual && !startStrictEqual) {
          break;
        }
        change.originalStart++;
        change.modifiedStart++;
      }
      const mergedChangeArr = [null];
      if (i < changes.length - 1 && this.I(changes[i], changes[i + 1], mergedChangeArr)) {
        changes[i] = mergedChangeArr[0];
        changes.splice(i + 1, 1);
        i--;
        continue;
      }
    }
    for (let i = changes.length - 1; i >= 0; i--) {
      const change = changes[i];
      let originalStop = 0;
      let modifiedStop = 0;
      if (i > 0) {
        const prevChange = changes[i - 1];
        originalStop = prevChange.originalStart + prevChange.originalLength;
        modifiedStop = prevChange.modifiedStart + prevChange.modifiedLength;
      }
      const checkOriginal = change.originalLength > 0;
      const checkModified = change.modifiedLength > 0;
      let bestDelta = 0;
      let bestScore = this.G(change.originalStart, change.originalLength, change.modifiedStart, change.modifiedLength);
      for (let delta = 1; ; delta++) {
        const originalStart = change.originalStart - delta;
        const modifiedStart = change.modifiedStart - delta;
        if (originalStart < originalStop || modifiedStart < modifiedStop) {
          break;
        }
        if (checkOriginal && !this.s(originalStart, originalStart + change.originalLength)) {
          break;
        }
        if (checkModified && !this.u(modifiedStart, modifiedStart + change.modifiedLength)) {
          break;
        }
        const touchingPreviousChange = originalStart === originalStop && modifiedStart === modifiedStop;
        const score2 = (touchingPreviousChange ? 5 : 0) + this.G(originalStart, change.originalLength, modifiedStart, change.modifiedLength);
        if (score2 > bestScore) {
          bestScore = score2;
          bestDelta = delta;
        }
      }
      change.originalStart -= bestDelta;
      change.modifiedStart -= bestDelta;
      const mergedChangeArr = [null];
      if (i > 0 && this.I(changes[i - 1], changes[i], mergedChangeArr)) {
        changes[i - 1] = mergedChangeArr[0];
        changes.splice(i, 1);
        i++;
        continue;
      }
    }
    if (this.d) {
      for (let i = 1, len = changes.length; i < len; i++) {
        const aChange = changes[i - 1];
        const bChange = changes[i];
        const matchedLength = bChange.originalStart - aChange.originalStart - aChange.originalLength;
        const aOriginalStart = aChange.originalStart;
        const bOriginalEnd = bChange.originalStart + bChange.originalLength;
        const abOriginalLength = bOriginalEnd - aOriginalStart;
        const aModifiedStart = aChange.modifiedStart;
        const bModifiedEnd = bChange.modifiedStart + bChange.modifiedLength;
        const abModifiedLength = bModifiedEnd - aModifiedStart;
        if (matchedLength < 5 && abOriginalLength < 20 && abModifiedLength < 20) {
          const t = this.A(aOriginalStart, abOriginalLength, aModifiedStart, abModifiedLength, matchedLength);
          if (t) {
            const [originalMatchStart, modifiedMatchStart] = t;
            if (originalMatchStart !== aChange.originalStart + aChange.originalLength || modifiedMatchStart !== aChange.modifiedStart + aChange.modifiedLength) {
              aChange.originalLength = originalMatchStart - aChange.originalStart;
              aChange.modifiedLength = modifiedMatchStart - aChange.modifiedStart;
              bChange.originalStart = originalMatchStart + matchedLength;
              bChange.modifiedStart = modifiedMatchStart + matchedLength;
              bChange.originalLength = bOriginalEnd - bChange.originalStart;
              bChange.modifiedLength = bModifiedEnd - bChange.modifiedStart;
            }
          }
        }
      }
    }
    return changes;
  }
  A(originalStart, originalLength, modifiedStart, modifiedLength, desiredLength) {
    if (originalLength < desiredLength || modifiedLength < desiredLength) {
      return null;
    }
    const originalMax = originalStart + originalLength - desiredLength + 1;
    const modifiedMax = modifiedStart + modifiedLength - desiredLength + 1;
    let bestScore = 0;
    let bestOriginalStart = 0;
    let bestModifiedStart = 0;
    for (let i = originalStart; i < originalMax; i++) {
      for (let j = modifiedStart; j < modifiedMax; j++) {
        const score2 = this.B(i, j, desiredLength);
        if (score2 > 0 && score2 > bestScore) {
          bestScore = score2;
          bestOriginalStart = i;
          bestModifiedStart = j;
        }
      }
    }
    if (bestScore > 0) {
      return [bestOriginalStart, bestModifiedStart];
    }
    return null;
  }
  B(originalStart, modifiedStart, length) {
    let score2 = 0;
    for (let l = 0; l < length; l++) {
      if (!this.p(originalStart + l, modifiedStart + l)) {
        return 0;
      }
      score2 += this.e[originalStart + l].length;
    }
    return score2;
  }
  C(index) {
    if (index <= 0 || index >= this.f.length - 1) {
      return true;
    }
    return this.d && /^\s*$/.test(this.e[index]);
  }
  D(originalStart, originalLength) {
    if (this.C(originalStart) || this.C(originalStart - 1)) {
      return true;
    }
    if (originalLength > 0) {
      const originalEnd = originalStart + originalLength;
      if (this.C(originalEnd - 1) || this.C(originalEnd)) {
        return true;
      }
    }
    return false;
  }
  E(index) {
    if (index <= 0 || index >= this.h.length - 1) {
      return true;
    }
    return this.d && /^\s*$/.test(this.g[index]);
  }
  F(modifiedStart, modifiedLength) {
    if (this.E(modifiedStart) || this.E(modifiedStart - 1)) {
      return true;
    }
    if (modifiedLength > 0) {
      const modifiedEnd = modifiedStart + modifiedLength;
      if (this.E(modifiedEnd - 1) || this.E(modifiedEnd)) {
        return true;
      }
    }
    return false;
  }
  G(originalStart, originalLength, modifiedStart, modifiedLength) {
    const originalScore = this.D(originalStart, originalLength) ? 1 : 0;
    const modifiedScore = this.F(modifiedStart, modifiedLength) ? 1 : 0;
    return originalScore + modifiedScore;
  }
  /**
   * Concatenates the two input DiffChange lists and returns the resulting
   * list.
   * @param The left changes
   * @param The right changes
   * @returns The concatenated list
   */
  H(left, right) {
    const mergedChangeArr = [];
    if (left.length === 0 || right.length === 0) {
      return right.length > 0 ? right : left;
    } else if (this.I(left[left.length - 1], right[0], mergedChangeArr)) {
      const result = new Array(left.length + right.length - 1);
      MyArray.Copy(left, 0, result, 0, left.length - 1);
      result[left.length - 1] = mergedChangeArr[0];
      MyArray.Copy(right, 1, result, left.length, right.length - 1);
      return result;
    } else {
      const result = new Array(left.length + right.length);
      MyArray.Copy(left, 0, result, 0, left.length);
      MyArray.Copy(right, 0, result, left.length, right.length);
      return result;
    }
  }
  /**
   * Returns true if the two changes overlap and can be merged into a single
   * change
   * @param left The left change
   * @param right The right change
   * @param mergedChange The merged change if the two overlap, null otherwise
   * @returns True if the two changes overlap
   */
  I(left, right, mergedChangeArr) {
    Debug.Assert(left.originalStart <= right.originalStart, "Left change is not less than or equal to right change");
    Debug.Assert(left.modifiedStart <= right.modifiedStart, "Left change is not less than or equal to right change");
    if (left.originalStart + left.originalLength >= right.originalStart || left.modifiedStart + left.modifiedLength >= right.modifiedStart) {
      const originalStart = left.originalStart;
      let originalLength = left.originalLength;
      const modifiedStart = left.modifiedStart;
      let modifiedLength = left.modifiedLength;
      if (left.originalStart + left.originalLength >= right.originalStart) {
        originalLength = right.originalStart + right.originalLength - left.originalStart;
      }
      if (left.modifiedStart + left.modifiedLength >= right.modifiedStart) {
        modifiedLength = right.modifiedStart + right.modifiedLength - left.modifiedStart;
      }
      mergedChangeArr[0] = new $au(originalStart, originalLength, modifiedStart, modifiedLength);
      return true;
    } else {
      mergedChangeArr[0] = null;
      return false;
    }
  }
  /**
   * Helper method used to clip a diagonal index to the range of valid
   * diagonals. This also decides whether or not the diagonal index,
   * if it exceeds the boundary, should be clipped to the boundary or clipped
   * one inside the boundary depending on the Even/Odd status of the boundary
   * and numDifferences.
   * @param diagonal The index of the diagonal to clip.
   * @param numDifferences The current number of differences being iterated upon.
   * @param diagonalBaseIndex The base reference diagonal.
   * @param numDiagonals The total number of diagonals.
   * @returns The clipped diagonal index.
   */
  J(diagonal, numDifferences, diagonalBaseIndex, numDiagonals) {
    if (diagonal >= 0 && diagonal < numDiagonals) {
      return diagonal;
    }
    const diagonalsBelow = diagonalBaseIndex;
    const diagonalsAbove = numDiagonals - diagonalBaseIndex - 1;
    const diffEven = numDifferences % 2 === 0;
    if (diagonal < 0) {
      const lowerBoundEven = diagonalsBelow % 2 === 0;
      return diffEven === lowerBoundEven ? 0 : 1;
    } else {
      const upperBoundEven = diagonalsAbove % 2 === 0;
      return diffEven === upperBoundEven ? numDiagonals - 1 : numDiagonals - 2;
    }
  }
};

// out-build/vs/editor/common/core/position.js
var $9t = class _$9t {
  constructor(lineNumber, column) {
    this.lineNumber = lineNumber;
    this.column = column;
  }
  /**
   * Create a new position from this position.
   *
   * @param newLineNumber new line number
   * @param newColumn new column
   */
  with(newLineNumber = this.lineNumber, newColumn = this.column) {
    if (newLineNumber === this.lineNumber && newColumn === this.column) {
      return this;
    } else {
      return new _$9t(newLineNumber, newColumn);
    }
  }
  /**
   * Derive a new position from this position.
   *
   * @param deltaLineNumber line number delta
   * @param deltaColumn column delta
   */
  delta(deltaLineNumber = 0, deltaColumn = 0) {
    return this.with(this.lineNumber + deltaLineNumber, this.column + deltaColumn);
  }
  /**
   * Test if this position equals other position
   */
  equals(other) {
    return _$9t.equals(this, other);
  }
  /**
   * Test if position `a` equals position `b`
   */
  static equals(a, b) {
    if (!a && !b) {
      return true;
    }
    return !!a && !!b && a.lineNumber === b.lineNumber && a.column === b.column;
  }
  /**
   * Test if this position is before other position.
   * If the two positions are equal, the result will be false.
   */
  isBefore(other) {
    return _$9t.isBefore(this, other);
  }
  /**
   * Test if position `a` is before position `b`.
   * If the two positions are equal, the result will be false.
   */
  static isBefore(a, b) {
    if (a.lineNumber < b.lineNumber) {
      return true;
    }
    if (b.lineNumber < a.lineNumber) {
      return false;
    }
    return a.column < b.column;
  }
  /**
   * Test if this position is before other position.
   * If the two positions are equal, the result will be true.
   */
  isBeforeOrEqual(other) {
    return _$9t.isBeforeOrEqual(this, other);
  }
  /**
   * Test if position `a` is before position `b`.
   * If the two positions are equal, the result will be true.
   */
  static isBeforeOrEqual(a, b) {
    if (a.lineNumber < b.lineNumber) {
      return true;
    }
    if (b.lineNumber < a.lineNumber) {
      return false;
    }
    return a.column <= b.column;
  }
  /**
   * A function that compares positions, useful for sorting
   */
  static compare(a, b) {
    const aLineNumber = a.lineNumber | 0;
    const bLineNumber = b.lineNumber | 0;
    if (aLineNumber === bLineNumber) {
      const aColumn = a.column | 0;
      const bColumn = b.column | 0;
      return aColumn - bColumn;
    }
    return aLineNumber - bLineNumber;
  }
  /**
   * Clone this position.
   */
  clone() {
    return new _$9t(this.lineNumber, this.column);
  }
  /**
   * Convert to a human-readable representation.
   */
  toString() {
    return "(" + this.lineNumber + "," + this.column + ")";
  }
  // ---
  /**
   * Create a `Position` from an `IPosition`.
   */
  static lift(pos) {
    return new _$9t(pos.lineNumber, pos.column);
  }
  /**
   * Test if `obj` is an `IPosition`.
   */
  static isIPosition(obj) {
    return obj && typeof obj.lineNumber === "number" && typeof obj.column === "number";
  }
  toJSON() {
    return {
      lineNumber: this.lineNumber,
      column: this.column
    };
  }
};

// out-build/vs/editor/common/core/range.js
var $0t = class _$0t {
  constructor(startLineNumber, startColumn, endLineNumber, endColumn) {
    if (startLineNumber > endLineNumber || startLineNumber === endLineNumber && startColumn > endColumn) {
      this.startLineNumber = endLineNumber;
      this.startColumn = endColumn;
      this.endLineNumber = startLineNumber;
      this.endColumn = startColumn;
    } else {
      this.startLineNumber = startLineNumber;
      this.startColumn = startColumn;
      this.endLineNumber = endLineNumber;
      this.endColumn = endColumn;
    }
  }
  /**
   * Test if this range is empty.
   */
  isEmpty() {
    return _$0t.isEmpty(this);
  }
  /**
   * Test if `range` is empty.
   */
  static isEmpty(range) {
    return range.startLineNumber === range.endLineNumber && range.startColumn === range.endColumn;
  }
  /**
   * Test if position is in this range. If the position is at the edges, will return true.
   */
  containsPosition(position) {
    return _$0t.containsPosition(this, position);
  }
  /**
   * Test if `position` is in `range`. If the position is at the edges, will return true.
   */
  static containsPosition(range, position) {
    if (position.lineNumber < range.startLineNumber || position.lineNumber > range.endLineNumber) {
      return false;
    }
    if (position.lineNumber === range.startLineNumber && position.column < range.startColumn) {
      return false;
    }
    if (position.lineNumber === range.endLineNumber && position.column > range.endColumn) {
      return false;
    }
    return true;
  }
  /**
   * Test if `position` is in `range`. If the position is at the edges, will return false.
   * @internal
   */
  static strictContainsPosition(range, position) {
    if (position.lineNumber < range.startLineNumber || position.lineNumber > range.endLineNumber) {
      return false;
    }
    if (position.lineNumber === range.startLineNumber && position.column <= range.startColumn) {
      return false;
    }
    if (position.lineNumber === range.endLineNumber && position.column >= range.endColumn) {
      return false;
    }
    return true;
  }
  /**
   * Test if range is in this range. If the range is equal to this range, will return true.
   */
  containsRange(range) {
    return _$0t.containsRange(this, range);
  }
  /**
   * Test if `otherRange` is in `range`. If the ranges are equal, will return true.
   */
  static containsRange(range, otherRange) {
    if (otherRange.startLineNumber < range.startLineNumber || otherRange.endLineNumber < range.startLineNumber) {
      return false;
    }
    if (otherRange.startLineNumber > range.endLineNumber || otherRange.endLineNumber > range.endLineNumber) {
      return false;
    }
    if (otherRange.startLineNumber === range.startLineNumber && otherRange.startColumn < range.startColumn) {
      return false;
    }
    if (otherRange.endLineNumber === range.endLineNumber && otherRange.endColumn > range.endColumn) {
      return false;
    }
    return true;
  }
  /**
   * Test if `range` is strictly in this range. `range` must start after and end before this range for the result to be true.
   */
  strictContainsRange(range) {
    return _$0t.strictContainsRange(this, range);
  }
  /**
   * Test if `otherRange` is strictly in `range` (must start after, and end before). If the ranges are equal, will return false.
   */
  static strictContainsRange(range, otherRange) {
    if (otherRange.startLineNumber < range.startLineNumber || otherRange.endLineNumber < range.startLineNumber) {
      return false;
    }
    if (otherRange.startLineNumber > range.endLineNumber || otherRange.endLineNumber > range.endLineNumber) {
      return false;
    }
    if (otherRange.startLineNumber === range.startLineNumber && otherRange.startColumn <= range.startColumn) {
      return false;
    }
    if (otherRange.endLineNumber === range.endLineNumber && otherRange.endColumn >= range.endColumn) {
      return false;
    }
    return true;
  }
  /**
   * A reunion of the two ranges.
   * The smallest position will be used as the start point, and the largest one as the end point.
   */
  plusRange(range) {
    return _$0t.plusRange(this, range);
  }
  /**
   * A reunion of the two ranges.
   * The smallest position will be used as the start point, and the largest one as the end point.
   */
  static plusRange(a, b) {
    let startLineNumber;
    let startColumn;
    let endLineNumber;
    let endColumn;
    if (b.startLineNumber < a.startLineNumber) {
      startLineNumber = b.startLineNumber;
      startColumn = b.startColumn;
    } else if (b.startLineNumber === a.startLineNumber) {
      startLineNumber = b.startLineNumber;
      startColumn = Math.min(b.startColumn, a.startColumn);
    } else {
      startLineNumber = a.startLineNumber;
      startColumn = a.startColumn;
    }
    if (b.endLineNumber > a.endLineNumber) {
      endLineNumber = b.endLineNumber;
      endColumn = b.endColumn;
    } else if (b.endLineNumber === a.endLineNumber) {
      endLineNumber = b.endLineNumber;
      endColumn = Math.max(b.endColumn, a.endColumn);
    } else {
      endLineNumber = a.endLineNumber;
      endColumn = a.endColumn;
    }
    return new _$0t(startLineNumber, startColumn, endLineNumber, endColumn);
  }
  /**
   * A intersection of the two ranges.
   */
  intersectRanges(range) {
    return _$0t.intersectRanges(this, range);
  }
  /**
   * A intersection of the two ranges.
   */
  static intersectRanges(a, b) {
    let resultStartLineNumber = a.startLineNumber;
    let resultStartColumn = a.startColumn;
    let resultEndLineNumber = a.endLineNumber;
    let resultEndColumn = a.endColumn;
    const otherStartLineNumber = b.startLineNumber;
    const otherStartColumn = b.startColumn;
    const otherEndLineNumber = b.endLineNumber;
    const otherEndColumn = b.endColumn;
    if (resultStartLineNumber < otherStartLineNumber) {
      resultStartLineNumber = otherStartLineNumber;
      resultStartColumn = otherStartColumn;
    } else if (resultStartLineNumber === otherStartLineNumber) {
      resultStartColumn = Math.max(resultStartColumn, otherStartColumn);
    }
    if (resultEndLineNumber > otherEndLineNumber) {
      resultEndLineNumber = otherEndLineNumber;
      resultEndColumn = otherEndColumn;
    } else if (resultEndLineNumber === otherEndLineNumber) {
      resultEndColumn = Math.min(resultEndColumn, otherEndColumn);
    }
    if (resultStartLineNumber > resultEndLineNumber) {
      return null;
    }
    if (resultStartLineNumber === resultEndLineNumber && resultStartColumn > resultEndColumn) {
      return null;
    }
    return new _$0t(resultStartLineNumber, resultStartColumn, resultEndLineNumber, resultEndColumn);
  }
  /**
   * Test if this range equals other.
   */
  equalsRange(other) {
    return _$0t.equalsRange(this, other);
  }
  /**
   * Test if range `a` equals `b`.
   */
  static equalsRange(a, b) {
    if (!a && !b) {
      return true;
    }
    return !!a && !!b && a.startLineNumber === b.startLineNumber && a.startColumn === b.startColumn && a.endLineNumber === b.endLineNumber && a.endColumn === b.endColumn;
  }
  /**
   * Return the end position (which will be after or equal to the start position)
   */
  getEndPosition() {
    return _$0t.getEndPosition(this);
  }
  /**
   * Return the end position (which will be after or equal to the start position)
   */
  static getEndPosition(range) {
    return new $9t(range.endLineNumber, range.endColumn);
  }
  /**
   * Return the start position (which will be before or equal to the end position)
   */
  getStartPosition() {
    return _$0t.getStartPosition(this);
  }
  /**
   * Return the start position (which will be before or equal to the end position)
   */
  static getStartPosition(range) {
    return new $9t(range.startLineNumber, range.startColumn);
  }
  /**
   * Transform to a user presentable string representation.
   */
  toString() {
    return "[" + this.startLineNumber + "," + this.startColumn + " -> " + this.endLineNumber + "," + this.endColumn + "]";
  }
  /**
   * Create a new range using this range's start position, and using endLineNumber and endColumn as the end position.
   */
  setEndPosition(endLineNumber, endColumn) {
    return new _$0t(this.startLineNumber, this.startColumn, endLineNumber, endColumn);
  }
  /**
   * Create a new range using this range's end position, and using startLineNumber and startColumn as the start position.
   */
  setStartPosition(startLineNumber, startColumn) {
    return new _$0t(startLineNumber, startColumn, this.endLineNumber, this.endColumn);
  }
  /**
   * Create a new empty range using this range's start position.
   */
  collapseToStart() {
    return _$0t.collapseToStart(this);
  }
  /**
   * Create a new empty range using this range's start position.
   */
  static collapseToStart(range) {
    return new _$0t(range.startLineNumber, range.startColumn, range.startLineNumber, range.startColumn);
  }
  /**
   * Create a new empty range using this range's end position.
   */
  collapseToEnd() {
    return _$0t.collapseToEnd(this);
  }
  /**
   * Create a new empty range using this range's end position.
   */
  static collapseToEnd(range) {
    return new _$0t(range.endLineNumber, range.endColumn, range.endLineNumber, range.endColumn);
  }
  /**
   * Moves the range by the given amount of lines.
   */
  delta(lineCount) {
    return new _$0t(this.startLineNumber + lineCount, this.startColumn, this.endLineNumber + lineCount, this.endColumn);
  }
  // ---
  static fromPositions(start, end = start) {
    return new _$0t(start.lineNumber, start.column, end.lineNumber, end.column);
  }
  static lift(range) {
    if (!range) {
      return null;
    }
    return new _$0t(range.startLineNumber, range.startColumn, range.endLineNumber, range.endColumn);
  }
  /**
   * Test if `obj` is an `IRange`.
   */
  static isIRange(obj) {
    return obj && typeof obj.startLineNumber === "number" && typeof obj.startColumn === "number" && typeof obj.endLineNumber === "number" && typeof obj.endColumn === "number";
  }
  /**
   * Test if the two ranges are touching in any way.
   */
  static areIntersectingOrTouching(a, b) {
    if (a.endLineNumber < b.startLineNumber || a.endLineNumber === b.startLineNumber && a.endColumn < b.startColumn) {
      return false;
    }
    if (b.endLineNumber < a.startLineNumber || b.endLineNumber === a.startLineNumber && b.endColumn < a.startColumn) {
      return false;
    }
    return true;
  }
  /**
   * Test if the two ranges are intersecting. If the ranges are touching it returns true.
   */
  static areIntersecting(a, b) {
    if (a.endLineNumber < b.startLineNumber || a.endLineNumber === b.startLineNumber && a.endColumn <= b.startColumn) {
      return false;
    }
    if (b.endLineNumber < a.startLineNumber || b.endLineNumber === a.startLineNumber && b.endColumn <= a.startColumn) {
      return false;
    }
    return true;
  }
  /**
   * A function that compares ranges, useful for sorting ranges
   * It will first compare ranges on the startPosition and then on the endPosition
   */
  static compareRangesUsingStarts(a, b) {
    if (a && b) {
      const aStartLineNumber = a.startLineNumber | 0;
      const bStartLineNumber = b.startLineNumber | 0;
      if (aStartLineNumber === bStartLineNumber) {
        const aStartColumn = a.startColumn | 0;
        const bStartColumn = b.startColumn | 0;
        if (aStartColumn === bStartColumn) {
          const aEndLineNumber = a.endLineNumber | 0;
          const bEndLineNumber = b.endLineNumber | 0;
          if (aEndLineNumber === bEndLineNumber) {
            const aEndColumn = a.endColumn | 0;
            const bEndColumn = b.endColumn | 0;
            return aEndColumn - bEndColumn;
          }
          return aEndLineNumber - bEndLineNumber;
        }
        return aStartColumn - bStartColumn;
      }
      return aStartLineNumber - bStartLineNumber;
    }
    const aExists = a ? 1 : 0;
    const bExists = b ? 1 : 0;
    return aExists - bExists;
  }
  /**
   * A function that compares ranges, useful for sorting ranges
   * It will first compare ranges on the endPosition and then on the startPosition
   */
  static compareRangesUsingEnds(a, b) {
    if (a.endLineNumber === b.endLineNumber) {
      if (a.endColumn === b.endColumn) {
        if (a.startLineNumber === b.startLineNumber) {
          return a.startColumn - b.startColumn;
        }
        return a.startLineNumber - b.startLineNumber;
      }
      return a.endColumn - b.endColumn;
    }
    return a.endLineNumber - b.endLineNumber;
  }
  /**
   * Test if the range spans multiple lines.
   */
  static spansMultipleLines(range) {
    return range.endLineNumber > range.startLineNumber;
  }
  toJSON() {
    return this;
  }
};

// out-build/vs/base/common/uint.js
var Constants;
(function(Constants2) {
  Constants2[Constants2["MAX_SAFE_SMALL_INTEGER"] = 1073741824] = "MAX_SAFE_SMALL_INTEGER";
  Constants2[Constants2["MIN_SAFE_SMALL_INTEGER"] = -1073741824] = "MIN_SAFE_SMALL_INTEGER";
  Constants2[Constants2["MAX_UINT_8"] = 255] = "MAX_UINT_8";
  Constants2[Constants2["MAX_UINT_16"] = 65535] = "MAX_UINT_16";
  Constants2[Constants2["MAX_UINT_32"] = 4294967295] = "MAX_UINT_32";
  Constants2[Constants2["UNICODE_SUPPLEMENTARY_PLANE_BEGIN"] = 65536] = "UNICODE_SUPPLEMENTARY_PLANE_BEGIN";
})(Constants || (Constants = {}));
function $sf(v) {
  if (v < 0) {
    return 0;
  }
  if (v > 255) {
    return 255;
  }
  return v | 0;
}
function $tf(v) {
  if (v < 0) {
    return 0;
  }
  if (v > 4294967295) {
    return 4294967295;
  }
  return v | 0;
}

// out-build/vs/editor/common/core/characterClassifier.js
var $Cu = class _$Cu {
  constructor(_defaultValue) {
    const defaultValue = $sf(_defaultValue);
    this.c = defaultValue;
    this.a = _$Cu.d(defaultValue);
    this.b = /* @__PURE__ */ new Map();
  }
  static d(defaultValue) {
    const asciiMap = new Uint8Array(256);
    asciiMap.fill(defaultValue);
    return asciiMap;
  }
  set(charCode, _value) {
    const value = $sf(_value);
    if (charCode >= 0 && charCode < 256) {
      this.a[charCode] = value;
    } else {
      this.b.set(charCode, value);
    }
  }
  get(charCode) {
    if (charCode >= 0 && charCode < 256) {
      return this.a[charCode];
    } else {
      return this.b.get(charCode) || this.c;
    }
  }
  clear() {
    this.a.fill(this.c);
    this.b.clear();
  }
};
var Boolean2;
(function(Boolean3) {
  Boolean3[Boolean3["False"] = 0] = "False";
  Boolean3[Boolean3["True"] = 1] = "True";
})(Boolean2 || (Boolean2 = {}));

// out-build/vs/editor/common/languages/linkComputer.js
var State;
(function(State2) {
  State2[State2["Invalid"] = 0] = "Invalid";
  State2[State2["Start"] = 1] = "Start";
  State2[State2["H"] = 2] = "H";
  State2[State2["HT"] = 3] = "HT";
  State2[State2["HTT"] = 4] = "HTT";
  State2[State2["HTTP"] = 5] = "HTTP";
  State2[State2["F"] = 6] = "F";
  State2[State2["FI"] = 7] = "FI";
  State2[State2["FIL"] = 8] = "FIL";
  State2[State2["BeforeColon"] = 9] = "BeforeColon";
  State2[State2["AfterColon"] = 10] = "AfterColon";
  State2[State2["AlmostThere"] = 11] = "AlmostThere";
  State2[State2["End"] = 12] = "End";
  State2[State2["Accept"] = 13] = "Accept";
  State2[State2["LastKnownState"] = 14] = "LastKnownState";
})(State || (State = {}));
var Uint8Matrix = class {
  constructor(rows, cols, defaultValue) {
    const data = new Uint8Array(rows * cols);
    for (let i = 0, len = rows * cols; i < len; i++) {
      data[i] = defaultValue;
    }
    this.a = data;
    this.rows = rows;
    this.cols = cols;
  }
  get(row, col) {
    return this.a[row * this.cols + col];
  }
  set(row, col, value) {
    this.a[row * this.cols + col] = value;
  }
};
var $R5 = class {
  constructor(edges) {
    let maxCharCode = 0;
    let maxState = 0;
    for (let i = 0, len = edges.length; i < len; i++) {
      const [from, chCode, to] = edges[i];
      if (chCode > maxCharCode) {
        maxCharCode = chCode;
      }
      if (from > maxState) {
        maxState = from;
      }
      if (to > maxState) {
        maxState = to;
      }
    }
    maxCharCode++;
    maxState++;
    const states = new Uint8Matrix(
      maxState,
      maxCharCode,
      0
      /* State.Invalid */
    );
    for (let i = 0, len = edges.length; i < len; i++) {
      const [from, chCode, to] = edges[i];
      states.set(from, chCode, to);
    }
    this.a = states;
    this.b = maxCharCode;
  }
  nextState(currentState, chCode) {
    if (chCode < 0 || chCode >= this.b) {
      return 0;
    }
    return this.a.get(currentState, chCode);
  }
};
var _stateMachine = null;
function getStateMachine() {
  if (_stateMachine === null) {
    _stateMachine = new $R5([
      [
        1,
        104,
        2
        /* State.H */
      ],
      [
        1,
        72,
        2
        /* State.H */
      ],
      [
        1,
        102,
        6
        /* State.F */
      ],
      [
        1,
        70,
        6
        /* State.F */
      ],
      [
        2,
        116,
        3
        /* State.HT */
      ],
      [
        2,
        84,
        3
        /* State.HT */
      ],
      [
        3,
        116,
        4
        /* State.HTT */
      ],
      [
        3,
        84,
        4
        /* State.HTT */
      ],
      [
        4,
        112,
        5
        /* State.HTTP */
      ],
      [
        4,
        80,
        5
        /* State.HTTP */
      ],
      [
        5,
        115,
        9
        /* State.BeforeColon */
      ],
      [
        5,
        83,
        9
        /* State.BeforeColon */
      ],
      [
        5,
        58,
        10
        /* State.AfterColon */
      ],
      [
        6,
        105,
        7
        /* State.FI */
      ],
      [
        6,
        73,
        7
        /* State.FI */
      ],
      [
        7,
        108,
        8
        /* State.FIL */
      ],
      [
        7,
        76,
        8
        /* State.FIL */
      ],
      [
        8,
        101,
        9
        /* State.BeforeColon */
      ],
      [
        8,
        69,
        9
        /* State.BeforeColon */
      ],
      [
        9,
        58,
        10
        /* State.AfterColon */
      ],
      [
        10,
        47,
        11
        /* State.AlmostThere */
      ],
      [
        11,
        47,
        12
        /* State.End */
      ]
    ]);
  }
  return _stateMachine;
}
var CharacterClass;
(function(CharacterClass2) {
  CharacterClass2[CharacterClass2["None"] = 0] = "None";
  CharacterClass2[CharacterClass2["ForceTermination"] = 1] = "ForceTermination";
  CharacterClass2[CharacterClass2["CannotEndIn"] = 2] = "CannotEndIn";
})(CharacterClass || (CharacterClass = {}));
var _classifier = null;
function getClassifier() {
  if (_classifier === null) {
    _classifier = new $Cu(
      0
      /* CharacterClass.None */
    );
    const FORCE_TERMINATION_CHARACTERS = ` 	<>'"\u3001\u3002\uFF61\uFF64\uFF0C\uFF0E\uFF1A\uFF1B\u2018\u3008\u300C\u300E\u3014\uFF08\uFF3B\uFF5B\uFF62\uFF63\uFF5D\uFF3D\uFF09\u3015\u300F\u300D\u3009\u2019\uFF40\uFF5E\u2026`;
    for (let i = 0; i < FORCE_TERMINATION_CHARACTERS.length; i++) {
      _classifier.set(
        FORCE_TERMINATION_CHARACTERS.charCodeAt(i),
        1
        /* CharacterClass.ForceTermination */
      );
    }
    const CANNOT_END_WITH_CHARACTERS = ".,;:";
    for (let i = 0; i < CANNOT_END_WITH_CHARACTERS.length; i++) {
      _classifier.set(
        CANNOT_END_WITH_CHARACTERS.charCodeAt(i),
        2
        /* CharacterClass.CannotEndIn */
      );
    }
  }
  return _classifier;
}
var $S5 = class _$S5 {
  static a(classifier, line, lineNumber, linkBeginIndex, linkEndIndex) {
    let lastIncludedCharIndex = linkEndIndex - 1;
    do {
      const chCode = line.charCodeAt(lastIncludedCharIndex);
      const chClass = classifier.get(chCode);
      if (chClass !== 2) {
        break;
      }
      lastIncludedCharIndex--;
    } while (lastIncludedCharIndex > linkBeginIndex);
    if (linkBeginIndex > 0) {
      const charCodeBeforeLink = line.charCodeAt(linkBeginIndex - 1);
      const lastCharCodeInLink = line.charCodeAt(lastIncludedCharIndex);
      if (charCodeBeforeLink === 40 && lastCharCodeInLink === 41 || charCodeBeforeLink === 91 && lastCharCodeInLink === 93 || charCodeBeforeLink === 123 && lastCharCodeInLink === 125) {
        lastIncludedCharIndex--;
      }
    }
    return {
      range: {
        startLineNumber: lineNumber,
        startColumn: linkBeginIndex + 1,
        endLineNumber: lineNumber,
        endColumn: lastIncludedCharIndex + 2
      },
      url: line.substring(linkBeginIndex, lastIncludedCharIndex + 1)
    };
  }
  static computeLinks(model, stateMachine = getStateMachine()) {
    const classifier = getClassifier();
    const result = [];
    for (let i = 1, lineCount = model.getLineCount(); i <= lineCount; i++) {
      const line = model.getLineContent(i);
      const len = line.length;
      let j = 0;
      let linkBeginIndex = 0;
      let linkBeginChCode = 0;
      let state = 1;
      let hasOpenParens = false;
      let hasOpenSquareBracket = false;
      let inSquareBrackets = false;
      let hasOpenCurlyBracket = false;
      while (j < len) {
        let resetStateMachine = false;
        const chCode = line.charCodeAt(j);
        if (state === 13) {
          let chClass;
          switch (chCode) {
            case 40:
              hasOpenParens = true;
              chClass = 0;
              break;
            case 41:
              chClass = hasOpenParens ? 0 : 1;
              break;
            case 91:
              inSquareBrackets = true;
              hasOpenSquareBracket = true;
              chClass = 0;
              break;
            case 93:
              inSquareBrackets = false;
              chClass = hasOpenSquareBracket ? 0 : 1;
              break;
            case 123:
              hasOpenCurlyBracket = true;
              chClass = 0;
              break;
            case 125:
              chClass = hasOpenCurlyBracket ? 0 : 1;
              break;
            case 39:
            case 34:
            case 96:
              if (linkBeginChCode === chCode) {
                chClass = 1;
              } else if (linkBeginChCode === 39 || linkBeginChCode === 34 || linkBeginChCode === 96) {
                chClass = 0;
              } else {
                chClass = 1;
              }
              break;
            case 42:
              chClass = linkBeginChCode === 42 ? 1 : 0;
              break;
            case 124:
              chClass = linkBeginChCode === 124 ? 1 : 0;
              break;
            case 32:
              chClass = inSquareBrackets ? 0 : 1;
              break;
            default:
              chClass = classifier.get(chCode);
          }
          if (chClass === 1) {
            result.push(_$S5.a(classifier, line, i, linkBeginIndex, j));
            resetStateMachine = true;
          }
        } else if (state === 12) {
          let chClass;
          if (chCode === 91) {
            hasOpenSquareBracket = true;
            chClass = 0;
          } else {
            chClass = classifier.get(chCode);
          }
          if (chClass === 1) {
            resetStateMachine = true;
          } else {
            state = 13;
          }
        } else {
          state = stateMachine.nextState(state, chCode);
          if (state === 0) {
            resetStateMachine = true;
          }
        }
        if (resetStateMachine) {
          state = 1;
          hasOpenParens = false;
          hasOpenSquareBracket = false;
          hasOpenCurlyBracket = false;
          linkBeginIndex = j + 1;
          linkBeginChCode = chCode;
        }
        j++;
      }
      if (state === 13) {
        result.push(_$S5.a(classifier, line, i, linkBeginIndex, len));
      }
    }
    return result;
  }
};
function $T5(model) {
  if (!model || typeof model.getLineCount !== "function" || typeof model.getLineContent !== "function") {
    return [];
  }
  return $S5.computeLinks(model);
}

// out-build/vs/editor/common/languages/supports/inplaceReplaceSupport.js
var $U5 = class _$U5 {
  constructor() {
    this.c = [
      ["true", "false"],
      ["True", "False"],
      ["Private", "Public", "Friend", "ReadOnly", "Partial", "Protected", "WriteOnly"],
      ["public", "protected", "private"]
    ];
  }
  static {
    this.INSTANCE = new _$U5();
  }
  navigateValueSet(range1, text1, range2, text2, up) {
    if (range1 && text1) {
      const result = this.a(text1, up);
      if (result) {
        return {
          range: range1,
          value: result
        };
      }
    }
    if (range2 && text2) {
      const result = this.a(text2, up);
      if (result) {
        return {
          range: range2,
          value: result
        };
      }
    }
    return null;
  }
  a(text, up) {
    const numberResult = this.b(text, up);
    if (numberResult !== null) {
      return numberResult;
    }
    return this.d(text, up);
  }
  b(value, up) {
    const precision = Math.pow(10, value.length - (value.lastIndexOf(".") + 1));
    let n1 = Number(value);
    const n2 = parseFloat(value);
    if (!isNaN(n1) && !isNaN(n2) && n1 === n2) {
      if (n1 === 0 && !up) {
        return null;
      } else {
        n1 = Math.floor(n1 * precision);
        n1 += up ? precision : -precision;
        return String(n1 / precision);
      }
    }
    return null;
  }
  d(value, up) {
    return this.e(this.c, value, up);
  }
  e(valueSets, value, up) {
    let result = null;
    for (let i = 0, len = valueSets.length; result === null && i < len; i++) {
      result = this.f(valueSets[i], value, up);
    }
    return result;
  }
  f(valueSet, value, up) {
    let idx = valueSet.indexOf(value);
    if (idx >= 0) {
      idx += up ? 1 : -1;
      if (idx < 0) {
        idx = valueSet.length - 1;
      } else {
        idx %= valueSet.length;
      }
      return valueSet[idx];
    }
    return null;
  }
};

// out-build/vs/base/common/keyCodes.js
var KeyCode;
(function(KeyCode3) {
  KeyCode3[KeyCode3["DependsOnKbLayout"] = -1] = "DependsOnKbLayout";
  KeyCode3[KeyCode3["Unknown"] = 0] = "Unknown";
  KeyCode3[KeyCode3["Backspace"] = 1] = "Backspace";
  KeyCode3[KeyCode3["Tab"] = 2] = "Tab";
  KeyCode3[KeyCode3["Enter"] = 3] = "Enter";
  KeyCode3[KeyCode3["Shift"] = 4] = "Shift";
  KeyCode3[KeyCode3["Ctrl"] = 5] = "Ctrl";
  KeyCode3[KeyCode3["Alt"] = 6] = "Alt";
  KeyCode3[KeyCode3["PauseBreak"] = 7] = "PauseBreak";
  KeyCode3[KeyCode3["CapsLock"] = 8] = "CapsLock";
  KeyCode3[KeyCode3["Escape"] = 9] = "Escape";
  KeyCode3[KeyCode3["Space"] = 10] = "Space";
  KeyCode3[KeyCode3["PageUp"] = 11] = "PageUp";
  KeyCode3[KeyCode3["PageDown"] = 12] = "PageDown";
  KeyCode3[KeyCode3["End"] = 13] = "End";
  KeyCode3[KeyCode3["Home"] = 14] = "Home";
  KeyCode3[KeyCode3["LeftArrow"] = 15] = "LeftArrow";
  KeyCode3[KeyCode3["UpArrow"] = 16] = "UpArrow";
  KeyCode3[KeyCode3["RightArrow"] = 17] = "RightArrow";
  KeyCode3[KeyCode3["DownArrow"] = 18] = "DownArrow";
  KeyCode3[KeyCode3["Insert"] = 19] = "Insert";
  KeyCode3[KeyCode3["Delete"] = 20] = "Delete";
  KeyCode3[KeyCode3["Digit0"] = 21] = "Digit0";
  KeyCode3[KeyCode3["Digit1"] = 22] = "Digit1";
  KeyCode3[KeyCode3["Digit2"] = 23] = "Digit2";
  KeyCode3[KeyCode3["Digit3"] = 24] = "Digit3";
  KeyCode3[KeyCode3["Digit4"] = 25] = "Digit4";
  KeyCode3[KeyCode3["Digit5"] = 26] = "Digit5";
  KeyCode3[KeyCode3["Digit6"] = 27] = "Digit6";
  KeyCode3[KeyCode3["Digit7"] = 28] = "Digit7";
  KeyCode3[KeyCode3["Digit8"] = 29] = "Digit8";
  KeyCode3[KeyCode3["Digit9"] = 30] = "Digit9";
  KeyCode3[KeyCode3["KeyA"] = 31] = "KeyA";
  KeyCode3[KeyCode3["KeyB"] = 32] = "KeyB";
  KeyCode3[KeyCode3["KeyC"] = 33] = "KeyC";
  KeyCode3[KeyCode3["KeyD"] = 34] = "KeyD";
  KeyCode3[KeyCode3["KeyE"] = 35] = "KeyE";
  KeyCode3[KeyCode3["KeyF"] = 36] = "KeyF";
  KeyCode3[KeyCode3["KeyG"] = 37] = "KeyG";
  KeyCode3[KeyCode3["KeyH"] = 38] = "KeyH";
  KeyCode3[KeyCode3["KeyI"] = 39] = "KeyI";
  KeyCode3[KeyCode3["KeyJ"] = 40] = "KeyJ";
  KeyCode3[KeyCode3["KeyK"] = 41] = "KeyK";
  KeyCode3[KeyCode3["KeyL"] = 42] = "KeyL";
  KeyCode3[KeyCode3["KeyM"] = 43] = "KeyM";
  KeyCode3[KeyCode3["KeyN"] = 44] = "KeyN";
  KeyCode3[KeyCode3["KeyO"] = 45] = "KeyO";
  KeyCode3[KeyCode3["KeyP"] = 46] = "KeyP";
  KeyCode3[KeyCode3["KeyQ"] = 47] = "KeyQ";
  KeyCode3[KeyCode3["KeyR"] = 48] = "KeyR";
  KeyCode3[KeyCode3["KeyS"] = 49] = "KeyS";
  KeyCode3[KeyCode3["KeyT"] = 50] = "KeyT";
  KeyCode3[KeyCode3["KeyU"] = 51] = "KeyU";
  KeyCode3[KeyCode3["KeyV"] = 52] = "KeyV";
  KeyCode3[KeyCode3["KeyW"] = 53] = "KeyW";
  KeyCode3[KeyCode3["KeyX"] = 54] = "KeyX";
  KeyCode3[KeyCode3["KeyY"] = 55] = "KeyY";
  KeyCode3[KeyCode3["KeyZ"] = 56] = "KeyZ";
  KeyCode3[KeyCode3["Meta"] = 57] = "Meta";
  KeyCode3[KeyCode3["ContextMenu"] = 58] = "ContextMenu";
  KeyCode3[KeyCode3["F1"] = 59] = "F1";
  KeyCode3[KeyCode3["F2"] = 60] = "F2";
  KeyCode3[KeyCode3["F3"] = 61] = "F3";
  KeyCode3[KeyCode3["F4"] = 62] = "F4";
  KeyCode3[KeyCode3["F5"] = 63] = "F5";
  KeyCode3[KeyCode3["F6"] = 64] = "F6";
  KeyCode3[KeyCode3["F7"] = 65] = "F7";
  KeyCode3[KeyCode3["F8"] = 66] = "F8";
  KeyCode3[KeyCode3["F9"] = 67] = "F9";
  KeyCode3[KeyCode3["F10"] = 68] = "F10";
  KeyCode3[KeyCode3["F11"] = 69] = "F11";
  KeyCode3[KeyCode3["F12"] = 70] = "F12";
  KeyCode3[KeyCode3["F13"] = 71] = "F13";
  KeyCode3[KeyCode3["F14"] = 72] = "F14";
  KeyCode3[KeyCode3["F15"] = 73] = "F15";
  KeyCode3[KeyCode3["F16"] = 74] = "F16";
  KeyCode3[KeyCode3["F17"] = 75] = "F17";
  KeyCode3[KeyCode3["F18"] = 76] = "F18";
  KeyCode3[KeyCode3["F19"] = 77] = "F19";
  KeyCode3[KeyCode3["F20"] = 78] = "F20";
  KeyCode3[KeyCode3["F21"] = 79] = "F21";
  KeyCode3[KeyCode3["F22"] = 80] = "F22";
  KeyCode3[KeyCode3["F23"] = 81] = "F23";
  KeyCode3[KeyCode3["F24"] = 82] = "F24";
  KeyCode3[KeyCode3["NumLock"] = 83] = "NumLock";
  KeyCode3[KeyCode3["ScrollLock"] = 84] = "ScrollLock";
  KeyCode3[KeyCode3["Semicolon"] = 85] = "Semicolon";
  KeyCode3[KeyCode3["Equal"] = 86] = "Equal";
  KeyCode3[KeyCode3["Comma"] = 87] = "Comma";
  KeyCode3[KeyCode3["Minus"] = 88] = "Minus";
  KeyCode3[KeyCode3["Period"] = 89] = "Period";
  KeyCode3[KeyCode3["Slash"] = 90] = "Slash";
  KeyCode3[KeyCode3["Backquote"] = 91] = "Backquote";
  KeyCode3[KeyCode3["BracketLeft"] = 92] = "BracketLeft";
  KeyCode3[KeyCode3["Backslash"] = 93] = "Backslash";
  KeyCode3[KeyCode3["BracketRight"] = 94] = "BracketRight";
  KeyCode3[KeyCode3["Quote"] = 95] = "Quote";
  KeyCode3[KeyCode3["OEM_8"] = 96] = "OEM_8";
  KeyCode3[KeyCode3["IntlBackslash"] = 97] = "IntlBackslash";
  KeyCode3[KeyCode3["Numpad0"] = 98] = "Numpad0";
  KeyCode3[KeyCode3["Numpad1"] = 99] = "Numpad1";
  KeyCode3[KeyCode3["Numpad2"] = 100] = "Numpad2";
  KeyCode3[KeyCode3["Numpad3"] = 101] = "Numpad3";
  KeyCode3[KeyCode3["Numpad4"] = 102] = "Numpad4";
  KeyCode3[KeyCode3["Numpad5"] = 103] = "Numpad5";
  KeyCode3[KeyCode3["Numpad6"] = 104] = "Numpad6";
  KeyCode3[KeyCode3["Numpad7"] = 105] = "Numpad7";
  KeyCode3[KeyCode3["Numpad8"] = 106] = "Numpad8";
  KeyCode3[KeyCode3["Numpad9"] = 107] = "Numpad9";
  KeyCode3[KeyCode3["NumpadMultiply"] = 108] = "NumpadMultiply";
  KeyCode3[KeyCode3["NumpadAdd"] = 109] = "NumpadAdd";
  KeyCode3[KeyCode3["NUMPAD_SEPARATOR"] = 110] = "NUMPAD_SEPARATOR";
  KeyCode3[KeyCode3["NumpadSubtract"] = 111] = "NumpadSubtract";
  KeyCode3[KeyCode3["NumpadDecimal"] = 112] = "NumpadDecimal";
  KeyCode3[KeyCode3["NumpadDivide"] = 113] = "NumpadDivide";
  KeyCode3[KeyCode3["KEY_IN_COMPOSITION"] = 114] = "KEY_IN_COMPOSITION";
  KeyCode3[KeyCode3["ABNT_C1"] = 115] = "ABNT_C1";
  KeyCode3[KeyCode3["ABNT_C2"] = 116] = "ABNT_C2";
  KeyCode3[KeyCode3["AudioVolumeMute"] = 117] = "AudioVolumeMute";
  KeyCode3[KeyCode3["AudioVolumeUp"] = 118] = "AudioVolumeUp";
  KeyCode3[KeyCode3["AudioVolumeDown"] = 119] = "AudioVolumeDown";
  KeyCode3[KeyCode3["BrowserSearch"] = 120] = "BrowserSearch";
  KeyCode3[KeyCode3["BrowserHome"] = 121] = "BrowserHome";
  KeyCode3[KeyCode3["BrowserBack"] = 122] = "BrowserBack";
  KeyCode3[KeyCode3["BrowserForward"] = 123] = "BrowserForward";
  KeyCode3[KeyCode3["MediaTrackNext"] = 124] = "MediaTrackNext";
  KeyCode3[KeyCode3["MediaTrackPrevious"] = 125] = "MediaTrackPrevious";
  KeyCode3[KeyCode3["MediaStop"] = 126] = "MediaStop";
  KeyCode3[KeyCode3["MediaPlayPause"] = 127] = "MediaPlayPause";
  KeyCode3[KeyCode3["LaunchMediaPlayer"] = 128] = "LaunchMediaPlayer";
  KeyCode3[KeyCode3["LaunchMail"] = 129] = "LaunchMail";
  KeyCode3[KeyCode3["LaunchApp2"] = 130] = "LaunchApp2";
  KeyCode3[KeyCode3["Clear"] = 131] = "Clear";
  KeyCode3[KeyCode3["MAX_VALUE"] = 132] = "MAX_VALUE";
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
function $hs(firstPart, secondPart) {
  const chordPart = (secondPart & 65535) << 16 >>> 0;
  return (firstPart | chordPart) >>> 0;
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

// out-build/vs/editor/common/core/selection.js
var SelectionDirection;
(function(SelectionDirection3) {
  SelectionDirection3[SelectionDirection3["LTR"] = 0] = "LTR";
  SelectionDirection3[SelectionDirection3["RTL"] = 1] = "RTL";
})(SelectionDirection || (SelectionDirection = {}));
var $_t = class _$_t extends $0t {
  constructor(selectionStartLineNumber, selectionStartColumn, positionLineNumber, positionColumn) {
    super(selectionStartLineNumber, selectionStartColumn, positionLineNumber, positionColumn);
    this.selectionStartLineNumber = selectionStartLineNumber;
    this.selectionStartColumn = selectionStartColumn;
    this.positionLineNumber = positionLineNumber;
    this.positionColumn = positionColumn;
  }
  /**
   * Transform to a human-readable representation.
   */
  toString() {
    return "[" + this.selectionStartLineNumber + "," + this.selectionStartColumn + " -> " + this.positionLineNumber + "," + this.positionColumn + "]";
  }
  /**
   * Test if equals other selection.
   */
  equalsSelection(other) {
    return _$_t.selectionsEqual(this, other);
  }
  /**
   * Test if the two selections are equal.
   */
  static selectionsEqual(a, b) {
    return a.selectionStartLineNumber === b.selectionStartLineNumber && a.selectionStartColumn === b.selectionStartColumn && a.positionLineNumber === b.positionLineNumber && a.positionColumn === b.positionColumn;
  }
  /**
   * Get directions (LTR or RTL).
   */
  getDirection() {
    if (this.selectionStartLineNumber === this.startLineNumber && this.selectionStartColumn === this.startColumn) {
      return 0;
    }
    return 1;
  }
  /**
   * Create a new selection with a different `positionLineNumber` and `positionColumn`.
   */
  setEndPosition(endLineNumber, endColumn) {
    if (this.getDirection() === 0) {
      return new _$_t(this.startLineNumber, this.startColumn, endLineNumber, endColumn);
    }
    return new _$_t(endLineNumber, endColumn, this.startLineNumber, this.startColumn);
  }
  /**
   * Get the position at `positionLineNumber` and `positionColumn`.
   */
  getPosition() {
    return new $9t(this.positionLineNumber, this.positionColumn);
  }
  /**
   * Get the position at the start of the selection.
  */
  getSelectionStart() {
    return new $9t(this.selectionStartLineNumber, this.selectionStartColumn);
  }
  /**
   * Create a new selection with a different `selectionStartLineNumber` and `selectionStartColumn`.
   */
  setStartPosition(startLineNumber, startColumn) {
    if (this.getDirection() === 0) {
      return new _$_t(startLineNumber, startColumn, this.endLineNumber, this.endColumn);
    }
    return new _$_t(this.endLineNumber, this.endColumn, startLineNumber, startColumn);
  }
  // ----
  /**
   * Create a `Selection` from one or two positions
   */
  static fromPositions(start, end = start) {
    return new _$_t(start.lineNumber, start.column, end.lineNumber, end.column);
  }
  /**
   * Creates a `Selection` from a range, given a direction.
   */
  static fromRange(range, direction) {
    if (direction === 0) {
      return new _$_t(range.startLineNumber, range.startColumn, range.endLineNumber, range.endColumn);
    } else {
      return new _$_t(range.endLineNumber, range.endColumn, range.startLineNumber, range.startColumn);
    }
  }
  /**
   * Create a `Selection` from an `ISelection`.
   */
  static liftSelection(sel) {
    return new _$_t(sel.selectionStartLineNumber, sel.selectionStartColumn, sel.positionLineNumber, sel.positionColumn);
  }
  /**
   * `a` equals `b`.
   */
  static selectionsArrEqual(a, b) {
    if (a && !b || !a && b) {
      return false;
    }
    if (!a && !b) {
      return true;
    }
    if (a.length !== b.length) {
      return false;
    }
    for (let i = 0, len = a.length; i < len; i++) {
      if (!this.selectionsEqual(a[i], b[i])) {
        return false;
      }
    }
    return true;
  }
  /**
   * Test if `obj` is an `ISelection`.
   */
  static isISelection(obj) {
    return obj && typeof obj.selectionStartLineNumber === "number" && typeof obj.selectionStartColumn === "number" && typeof obj.positionLineNumber === "number" && typeof obj.positionColumn === "number";
  }
  /**
   * Create with a direction.
   */
  static createWithDirection(startLineNumber, startColumn, endLineNumber, endColumn, direction) {
    if (direction === 0) {
      return new _$_t(startLineNumber, startColumn, endLineNumber, endColumn);
    }
    return new _$_t(endLineNumber, endColumn, startLineNumber, startColumn);
  }
};

// out-build/vs/base/common/types.js
function $wg(str) {
  return typeof str === "string";
}

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

// out-build/vs/editor/common/tokenizationRegistry.js
var $Tu = class {
  constructor() {
    this.a = /* @__PURE__ */ new Map();
    this.b = /* @__PURE__ */ new Map();
    this.c = new $Ce();
    this.onDidChange = this.c.event;
    this.d = null;
  }
  handleChange(languageIds) {
    this.c.fire({
      changedLanguages: languageIds,
      changedColorMap: false
    });
  }
  register(languageId, support) {
    this.a.set(languageId, support);
    this.handleChange([languageId]);
    return $7c(() => {
      if (this.a.get(languageId) !== support) {
        return;
      }
      this.a.delete(languageId);
      this.handleChange([languageId]);
    });
  }
  get(languageId) {
    return this.a.get(languageId) || null;
  }
  registerFactory(languageId, factory) {
    this.b.get(languageId)?.dispose();
    const myData = new TokenizationSupportFactoryData(this, languageId, factory);
    this.b.set(languageId, myData);
    return $7c(() => {
      const v = this.b.get(languageId);
      if (!v || v !== myData) {
        return;
      }
      this.b.delete(languageId);
      v.dispose();
    });
  }
  async getOrCreate(languageId) {
    const tokenizationSupport = this.get(languageId);
    if (tokenizationSupport) {
      return tokenizationSupport;
    }
    const factory = this.b.get(languageId);
    if (!factory || factory.isResolved) {
      return null;
    }
    await factory.resolve();
    return this.get(languageId);
  }
  isResolved(languageId) {
    const tokenizationSupport = this.get(languageId);
    if (tokenizationSupport) {
      return true;
    }
    const factory = this.b.get(languageId);
    if (!factory || factory.isResolved) {
      return true;
    }
    return false;
  }
  setColorMap(colorMap) {
    this.d = colorMap;
    this.c.fire({
      changedLanguages: Array.from(this.a.keys()),
      changedColorMap: true
    });
  }
  getColorMap() {
    return this.d;
  }
  getDefaultBackground() {
    if (this.d && this.d.length > 2) {
      return this.d[
        2
        /* ColorId.DefaultBackground */
      ];
    }
    return null;
  }
};
var TokenizationSupportFactoryData = class extends $9c {
  get isResolved() {
    return this.c;
  }
  constructor(f, g, h) {
    super();
    this.f = f;
    this.g = g;
    this.h = h;
    this.a = false;
    this.b = null;
    this.c = false;
  }
  dispose() {
    this.a = true;
    super.dispose();
  }
  async resolve() {
    if (!this.b) {
      this.b = this.j();
    }
    return this.b;
  }
  async j() {
    const value = await this.h.tokenizationSupport;
    this.c = true;
    if (value && !this.a) {
      this.B(this.f.register(this.g, value));
    }
  }
};

// out-build/vs/editor/common/languages.js
var $6u = class {
  constructor(offset, type, language) {
    this.offset = offset;
    this.type = type;
    this.language = language;
    this._tokenBrand = void 0;
  }
  toString() {
    return "(" + this.offset + ", " + this.type + ")";
  }
};
var HoverVerbosityAction;
(function(HoverVerbosityAction3) {
  HoverVerbosityAction3[HoverVerbosityAction3["Increase"] = 0] = "Increase";
  HoverVerbosityAction3[HoverVerbosityAction3["Decrease"] = 1] = "Decrease";
})(HoverVerbosityAction || (HoverVerbosityAction = {}));
var CompletionItemKind;
(function(CompletionItemKind3) {
  CompletionItemKind3[CompletionItemKind3["Method"] = 0] = "Method";
  CompletionItemKind3[CompletionItemKind3["Function"] = 1] = "Function";
  CompletionItemKind3[CompletionItemKind3["Constructor"] = 2] = "Constructor";
  CompletionItemKind3[CompletionItemKind3["Field"] = 3] = "Field";
  CompletionItemKind3[CompletionItemKind3["Variable"] = 4] = "Variable";
  CompletionItemKind3[CompletionItemKind3["Class"] = 5] = "Class";
  CompletionItemKind3[CompletionItemKind3["Struct"] = 6] = "Struct";
  CompletionItemKind3[CompletionItemKind3["Interface"] = 7] = "Interface";
  CompletionItemKind3[CompletionItemKind3["Module"] = 8] = "Module";
  CompletionItemKind3[CompletionItemKind3["Property"] = 9] = "Property";
  CompletionItemKind3[CompletionItemKind3["Event"] = 10] = "Event";
  CompletionItemKind3[CompletionItemKind3["Operator"] = 11] = "Operator";
  CompletionItemKind3[CompletionItemKind3["Unit"] = 12] = "Unit";
  CompletionItemKind3[CompletionItemKind3["Value"] = 13] = "Value";
  CompletionItemKind3[CompletionItemKind3["Constant"] = 14] = "Constant";
  CompletionItemKind3[CompletionItemKind3["Enum"] = 15] = "Enum";
  CompletionItemKind3[CompletionItemKind3["EnumMember"] = 16] = "EnumMember";
  CompletionItemKind3[CompletionItemKind3["Keyword"] = 17] = "Keyword";
  CompletionItemKind3[CompletionItemKind3["Text"] = 18] = "Text";
  CompletionItemKind3[CompletionItemKind3["Color"] = 19] = "Color";
  CompletionItemKind3[CompletionItemKind3["File"] = 20] = "File";
  CompletionItemKind3[CompletionItemKind3["Reference"] = 21] = "Reference";
  CompletionItemKind3[CompletionItemKind3["Customcolor"] = 22] = "Customcolor";
  CompletionItemKind3[CompletionItemKind3["Folder"] = 23] = "Folder";
  CompletionItemKind3[CompletionItemKind3["TypeParameter"] = 24] = "TypeParameter";
  CompletionItemKind3[CompletionItemKind3["User"] = 25] = "User";
  CompletionItemKind3[CompletionItemKind3["Issue"] = 26] = "Issue";
  CompletionItemKind3[CompletionItemKind3["Snippet"] = 27] = "Snippet";
})(CompletionItemKind || (CompletionItemKind = {}));
var CompletionItemKinds;
(function(CompletionItemKinds2) {
  const byKind = /* @__PURE__ */ new Map();
  byKind.set(0, $kk.symbolMethod);
  byKind.set(1, $kk.symbolFunction);
  byKind.set(2, $kk.symbolConstructor);
  byKind.set(3, $kk.symbolField);
  byKind.set(4, $kk.symbolVariable);
  byKind.set(5, $kk.symbolClass);
  byKind.set(6, $kk.symbolStruct);
  byKind.set(7, $kk.symbolInterface);
  byKind.set(8, $kk.symbolModule);
  byKind.set(9, $kk.symbolProperty);
  byKind.set(10, $kk.symbolEvent);
  byKind.set(11, $kk.symbolOperator);
  byKind.set(12, $kk.symbolUnit);
  byKind.set(13, $kk.symbolValue);
  byKind.set(15, $kk.symbolEnum);
  byKind.set(14, $kk.symbolConstant);
  byKind.set(15, $kk.symbolEnum);
  byKind.set(16, $kk.symbolEnumMember);
  byKind.set(17, $kk.symbolKeyword);
  byKind.set(27, $kk.symbolSnippet);
  byKind.set(18, $kk.symbolText);
  byKind.set(19, $kk.symbolColor);
  byKind.set(20, $kk.symbolFile);
  byKind.set(21, $kk.symbolReference);
  byKind.set(22, $kk.symbolCustomColor);
  byKind.set(23, $kk.symbolFolder);
  byKind.set(24, $kk.symbolTypeParameter);
  byKind.set(25, $kk.account);
  byKind.set(26, $kk.issues);
  function toIcon(kind) {
    let codicon = byKind.get(kind);
    if (!codicon) {
      console.info("No codicon found for CompletionItemKind " + kind);
      codicon = $kk.symbolProperty;
    }
    return codicon;
  }
  CompletionItemKinds2.toIcon = toIcon;
  const data = /* @__PURE__ */ new Map();
  data.set(
    "method",
    0
    /* CompletionItemKind.Method */
  );
  data.set(
    "function",
    1
    /* CompletionItemKind.Function */
  );
  data.set(
    "constructor",
    2
    /* CompletionItemKind.Constructor */
  );
  data.set(
    "field",
    3
    /* CompletionItemKind.Field */
  );
  data.set(
    "variable",
    4
    /* CompletionItemKind.Variable */
  );
  data.set(
    "class",
    5
    /* CompletionItemKind.Class */
  );
  data.set(
    "struct",
    6
    /* CompletionItemKind.Struct */
  );
  data.set(
    "interface",
    7
    /* CompletionItemKind.Interface */
  );
  data.set(
    "module",
    8
    /* CompletionItemKind.Module */
  );
  data.set(
    "property",
    9
    /* CompletionItemKind.Property */
  );
  data.set(
    "event",
    10
    /* CompletionItemKind.Event */
  );
  data.set(
    "operator",
    11
    /* CompletionItemKind.Operator */
  );
  data.set(
    "unit",
    12
    /* CompletionItemKind.Unit */
  );
  data.set(
    "value",
    13
    /* CompletionItemKind.Value */
  );
  data.set(
    "constant",
    14
    /* CompletionItemKind.Constant */
  );
  data.set(
    "enum",
    15
    /* CompletionItemKind.Enum */
  );
  data.set(
    "enum-member",
    16
    /* CompletionItemKind.EnumMember */
  );
  data.set(
    "enumMember",
    16
    /* CompletionItemKind.EnumMember */
  );
  data.set(
    "keyword",
    17
    /* CompletionItemKind.Keyword */
  );
  data.set(
    "snippet",
    27
    /* CompletionItemKind.Snippet */
  );
  data.set(
    "text",
    18
    /* CompletionItemKind.Text */
  );
  data.set(
    "color",
    19
    /* CompletionItemKind.Color */
  );
  data.set(
    "file",
    20
    /* CompletionItemKind.File */
  );
  data.set(
    "reference",
    21
    /* CompletionItemKind.Reference */
  );
  data.set(
    "customcolor",
    22
    /* CompletionItemKind.Customcolor */
  );
  data.set(
    "folder",
    23
    /* CompletionItemKind.Folder */
  );
  data.set(
    "type-parameter",
    24
    /* CompletionItemKind.TypeParameter */
  );
  data.set(
    "typeParameter",
    24
    /* CompletionItemKind.TypeParameter */
  );
  data.set(
    "account",
    25
    /* CompletionItemKind.User */
  );
  data.set(
    "issue",
    26
    /* CompletionItemKind.Issue */
  );
  function fromString(value, strict) {
    let res = data.get(value);
    if (typeof res === "undefined" && !strict) {
      res = 9;
    }
    return res;
  }
  CompletionItemKinds2.fromString = fromString;
})(CompletionItemKinds || (CompletionItemKinds = {}));
var CompletionItemTag;
(function(CompletionItemTag3) {
  CompletionItemTag3[CompletionItemTag3["Deprecated"] = 1] = "Deprecated";
})(CompletionItemTag || (CompletionItemTag = {}));
var CompletionItemInsertTextRule;
(function(CompletionItemInsertTextRule3) {
  CompletionItemInsertTextRule3[CompletionItemInsertTextRule3["None"] = 0] = "None";
  CompletionItemInsertTextRule3[CompletionItemInsertTextRule3["KeepWhitespace"] = 1] = "KeepWhitespace";
  CompletionItemInsertTextRule3[CompletionItemInsertTextRule3["InsertAsSnippet"] = 4] = "InsertAsSnippet";
})(CompletionItemInsertTextRule || (CompletionItemInsertTextRule = {}));
var PartialAcceptTriggerKind;
(function(PartialAcceptTriggerKind3) {
  PartialAcceptTriggerKind3[PartialAcceptTriggerKind3["Word"] = 0] = "Word";
  PartialAcceptTriggerKind3[PartialAcceptTriggerKind3["Line"] = 1] = "Line";
  PartialAcceptTriggerKind3[PartialAcceptTriggerKind3["Suggest"] = 2] = "Suggest";
})(PartialAcceptTriggerKind || (PartialAcceptTriggerKind = {}));
var CompletionTriggerKind;
(function(CompletionTriggerKind3) {
  CompletionTriggerKind3[CompletionTriggerKind3["Invoke"] = 0] = "Invoke";
  CompletionTriggerKind3[CompletionTriggerKind3["TriggerCharacter"] = 1] = "TriggerCharacter";
  CompletionTriggerKind3[CompletionTriggerKind3["TriggerForIncompleteCompletions"] = 2] = "TriggerForIncompleteCompletions";
})(CompletionTriggerKind || (CompletionTriggerKind = {}));
var InlineCompletionTriggerKind;
(function(InlineCompletionTriggerKind3) {
  InlineCompletionTriggerKind3[InlineCompletionTriggerKind3["Automatic"] = 0] = "Automatic";
  InlineCompletionTriggerKind3[InlineCompletionTriggerKind3["Explicit"] = 1] = "Explicit";
})(InlineCompletionTriggerKind || (InlineCompletionTriggerKind = {}));
var CodeActionTriggerType;
(function(CodeActionTriggerType3) {
  CodeActionTriggerType3[CodeActionTriggerType3["Invoke"] = 1] = "Invoke";
  CodeActionTriggerType3[CodeActionTriggerType3["Auto"] = 2] = "Auto";
})(CodeActionTriggerType || (CodeActionTriggerType = {}));
var DocumentPasteTriggerKind;
(function(DocumentPasteTriggerKind2) {
  DocumentPasteTriggerKind2[DocumentPasteTriggerKind2["Automatic"] = 0] = "Automatic";
  DocumentPasteTriggerKind2[DocumentPasteTriggerKind2["PasteAs"] = 1] = "PasteAs";
})(DocumentPasteTriggerKind || (DocumentPasteTriggerKind = {}));
var SignatureHelpTriggerKind;
(function(SignatureHelpTriggerKind3) {
  SignatureHelpTriggerKind3[SignatureHelpTriggerKind3["Invoke"] = 1] = "Invoke";
  SignatureHelpTriggerKind3[SignatureHelpTriggerKind3["TriggerCharacter"] = 2] = "TriggerCharacter";
  SignatureHelpTriggerKind3[SignatureHelpTriggerKind3["ContentChange"] = 3] = "ContentChange";
})(SignatureHelpTriggerKind || (SignatureHelpTriggerKind = {}));
var DocumentHighlightKind;
(function(DocumentHighlightKind3) {
  DocumentHighlightKind3[DocumentHighlightKind3["Text"] = 0] = "Text";
  DocumentHighlightKind3[DocumentHighlightKind3["Read"] = 1] = "Read";
  DocumentHighlightKind3[DocumentHighlightKind3["Write"] = 2] = "Write";
})(DocumentHighlightKind || (DocumentHighlightKind = {}));
var SymbolKind;
(function(SymbolKind3) {
  SymbolKind3[SymbolKind3["File"] = 0] = "File";
  SymbolKind3[SymbolKind3["Module"] = 1] = "Module";
  SymbolKind3[SymbolKind3["Namespace"] = 2] = "Namespace";
  SymbolKind3[SymbolKind3["Package"] = 3] = "Package";
  SymbolKind3[SymbolKind3["Class"] = 4] = "Class";
  SymbolKind3[SymbolKind3["Method"] = 5] = "Method";
  SymbolKind3[SymbolKind3["Property"] = 6] = "Property";
  SymbolKind3[SymbolKind3["Field"] = 7] = "Field";
  SymbolKind3[SymbolKind3["Constructor"] = 8] = "Constructor";
  SymbolKind3[SymbolKind3["Enum"] = 9] = "Enum";
  SymbolKind3[SymbolKind3["Interface"] = 10] = "Interface";
  SymbolKind3[SymbolKind3["Function"] = 11] = "Function";
  SymbolKind3[SymbolKind3["Variable"] = 12] = "Variable";
  SymbolKind3[SymbolKind3["Constant"] = 13] = "Constant";
  SymbolKind3[SymbolKind3["String"] = 14] = "String";
  SymbolKind3[SymbolKind3["Number"] = 15] = "Number";
  SymbolKind3[SymbolKind3["Boolean"] = 16] = "Boolean";
  SymbolKind3[SymbolKind3["Array"] = 17] = "Array";
  SymbolKind3[SymbolKind3["Object"] = 18] = "Object";
  SymbolKind3[SymbolKind3["Key"] = 19] = "Key";
  SymbolKind3[SymbolKind3["Null"] = 20] = "Null";
  SymbolKind3[SymbolKind3["EnumMember"] = 21] = "EnumMember";
  SymbolKind3[SymbolKind3["Struct"] = 22] = "Struct";
  SymbolKind3[SymbolKind3["Event"] = 23] = "Event";
  SymbolKind3[SymbolKind3["Operator"] = 24] = "Operator";
  SymbolKind3[SymbolKind3["TypeParameter"] = 25] = "TypeParameter";
})(SymbolKind || (SymbolKind = {}));
var $_u = {
  [
    17
    /* SymbolKind.Array */
  ]: localize(791, null),
  [
    16
    /* SymbolKind.Boolean */
  ]: localize(792, null),
  [
    4
    /* SymbolKind.Class */
  ]: localize(793, null),
  [
    13
    /* SymbolKind.Constant */
  ]: localize(794, null),
  [
    8
    /* SymbolKind.Constructor */
  ]: localize(795, null),
  [
    9
    /* SymbolKind.Enum */
  ]: localize(796, null),
  [
    21
    /* SymbolKind.EnumMember */
  ]: localize(797, null),
  [
    23
    /* SymbolKind.Event */
  ]: localize(798, null),
  [
    7
    /* SymbolKind.Field */
  ]: localize(799, null),
  [
    0
    /* SymbolKind.File */
  ]: localize(800, null),
  [
    11
    /* SymbolKind.Function */
  ]: localize(801, null),
  [
    10
    /* SymbolKind.Interface */
  ]: localize(802, null),
  [
    19
    /* SymbolKind.Key */
  ]: localize(803, null),
  [
    5
    /* SymbolKind.Method */
  ]: localize(804, null),
  [
    1
    /* SymbolKind.Module */
  ]: localize(805, null),
  [
    2
    /* SymbolKind.Namespace */
  ]: localize(806, null),
  [
    20
    /* SymbolKind.Null */
  ]: localize(807, null),
  [
    15
    /* SymbolKind.Number */
  ]: localize(808, null),
  [
    18
    /* SymbolKind.Object */
  ]: localize(809, null),
  [
    24
    /* SymbolKind.Operator */
  ]: localize(810, null),
  [
    3
    /* SymbolKind.Package */
  ]: localize(811, null),
  [
    6
    /* SymbolKind.Property */
  ]: localize(812, null),
  [
    14
    /* SymbolKind.String */
  ]: localize(813, null),
  [
    22
    /* SymbolKind.Struct */
  ]: localize(814, null),
  [
    25
    /* SymbolKind.TypeParameter */
  ]: localize(815, null),
  [
    12
    /* SymbolKind.Variable */
  ]: localize(816, null)
};
var SymbolTag;
(function(SymbolTag3) {
  SymbolTag3[SymbolTag3["Deprecated"] = 1] = "Deprecated";
})(SymbolTag || (SymbolTag = {}));
var SymbolKinds;
(function(SymbolKinds2) {
  const byKind = /* @__PURE__ */ new Map();
  byKind.set(0, $kk.symbolFile);
  byKind.set(1, $kk.symbolModule);
  byKind.set(2, $kk.symbolNamespace);
  byKind.set(3, $kk.symbolPackage);
  byKind.set(4, $kk.symbolClass);
  byKind.set(5, $kk.symbolMethod);
  byKind.set(6, $kk.symbolProperty);
  byKind.set(7, $kk.symbolField);
  byKind.set(8, $kk.symbolConstructor);
  byKind.set(9, $kk.symbolEnum);
  byKind.set(10, $kk.symbolInterface);
  byKind.set(11, $kk.symbolFunction);
  byKind.set(12, $kk.symbolVariable);
  byKind.set(13, $kk.symbolConstant);
  byKind.set(14, $kk.symbolString);
  byKind.set(15, $kk.symbolNumber);
  byKind.set(16, $kk.symbolBoolean);
  byKind.set(17, $kk.symbolArray);
  byKind.set(18, $kk.symbolObject);
  byKind.set(19, $kk.symbolKey);
  byKind.set(20, $kk.symbolNull);
  byKind.set(21, $kk.symbolEnumMember);
  byKind.set(22, $kk.symbolStruct);
  byKind.set(23, $kk.symbolEvent);
  byKind.set(24, $kk.symbolOperator);
  byKind.set(25, $kk.symbolTypeParameter);
  function toIcon(kind) {
    let icon = byKind.get(kind);
    if (!icon) {
      console.info("No codicon found for SymbolKind " + kind);
      icon = $kk.symbolProperty;
    }
    return icon;
  }
  SymbolKinds2.toIcon = toIcon;
})(SymbolKinds || (SymbolKinds = {}));
var $cv = class _$cv {
  static {
    this.Comment = new _$cv("comment");
  }
  static {
    this.Imports = new _$cv("imports");
  }
  static {
    this.Region = new _$cv("region");
  }
  /**
   * Returns a {@link $cv} for the given value.
   *
   * @param value of the kind.
   */
  static fromValue(value) {
    switch (value) {
      case "comment":
        return _$cv.Comment;
      case "imports":
        return _$cv.Imports;
      case "region":
        return _$cv.Region;
    }
    return new _$cv(value);
  }
  /**
   * Creates a new {@link $cv}.
   *
   * @param value of the kind.
   */
  constructor(value) {
    this.value = value;
  }
};
var NewSymbolNameTag;
(function(NewSymbolNameTag3) {
  NewSymbolNameTag3[NewSymbolNameTag3["AIGenerated"] = 1] = "AIGenerated";
})(NewSymbolNameTag || (NewSymbolNameTag = {}));
var NewSymbolNameTriggerKind;
(function(NewSymbolNameTriggerKind3) {
  NewSymbolNameTriggerKind3[NewSymbolNameTriggerKind3["Invoke"] = 0] = "Invoke";
  NewSymbolNameTriggerKind3[NewSymbolNameTriggerKind3["Automatic"] = 1] = "Automatic";
})(NewSymbolNameTriggerKind || (NewSymbolNameTriggerKind = {}));
var Command;
(function(Command2) {
  function is(obj) {
    if (!obj || typeof obj !== "object") {
      return false;
    }
    return typeof obj.id === "string" && typeof obj.title === "string";
  }
  Command2.is = is;
})(Command || (Command = {}));
var CommentThreadCollapsibleState;
(function(CommentThreadCollapsibleState2) {
  CommentThreadCollapsibleState2[CommentThreadCollapsibleState2["Collapsed"] = 0] = "Collapsed";
  CommentThreadCollapsibleState2[CommentThreadCollapsibleState2["Expanded"] = 1] = "Expanded";
})(CommentThreadCollapsibleState || (CommentThreadCollapsibleState = {}));
var CommentThreadState;
(function(CommentThreadState2) {
  CommentThreadState2[CommentThreadState2["Unresolved"] = 0] = "Unresolved";
  CommentThreadState2[CommentThreadState2["Resolved"] = 1] = "Resolved";
})(CommentThreadState || (CommentThreadState = {}));
var CommentThreadApplicability;
(function(CommentThreadApplicability2) {
  CommentThreadApplicability2[CommentThreadApplicability2["Current"] = 0] = "Current";
  CommentThreadApplicability2[CommentThreadApplicability2["Outdated"] = 1] = "Outdated";
})(CommentThreadApplicability || (CommentThreadApplicability = {}));
var CommentMode;
(function(CommentMode2) {
  CommentMode2[CommentMode2["Editing"] = 0] = "Editing";
  CommentMode2[CommentMode2["Preview"] = 1] = "Preview";
})(CommentMode || (CommentMode = {}));
var CommentState;
(function(CommentState2) {
  CommentState2[CommentState2["Published"] = 0] = "Published";
  CommentState2[CommentState2["Draft"] = 1] = "Draft";
})(CommentState || (CommentState = {}));
var InlayHintKind;
(function(InlayHintKind3) {
  InlayHintKind3[InlayHintKind3["Type"] = 1] = "Type";
  InlayHintKind3[InlayHintKind3["Parameter"] = 2] = "Parameter";
})(InlayHintKind || (InlayHintKind = {}));
var $ev = new $Tu();
var $fv = new $Tu();
var ExternalUriOpenerPriority;
(function(ExternalUriOpenerPriority2) {
  ExternalUriOpenerPriority2[ExternalUriOpenerPriority2["None"] = 0] = "None";
  ExternalUriOpenerPriority2[ExternalUriOpenerPriority2["Option"] = 1] = "Option";
  ExternalUriOpenerPriority2[ExternalUriOpenerPriority2["Default"] = 2] = "Default";
  ExternalUriOpenerPriority2[ExternalUriOpenerPriority2["Preferred"] = 3] = "Preferred";
})(ExternalUriOpenerPriority || (ExternalUriOpenerPriority = {}));
var InlineEditTriggerKind;
(function(InlineEditTriggerKind3) {
  InlineEditTriggerKind3[InlineEditTriggerKind3["Invoke"] = 0] = "Invoke";
  InlineEditTriggerKind3[InlineEditTriggerKind3["Automatic"] = 1] = "Automatic";
})(InlineEditTriggerKind || (InlineEditTriggerKind = {}));

// out-build/vs/editor/common/standalone/standaloneEnums.js
var AccessibilitySupport;
(function(AccessibilitySupport2) {
  AccessibilitySupport2[AccessibilitySupport2["Unknown"] = 0] = "Unknown";
  AccessibilitySupport2[AccessibilitySupport2["Disabled"] = 1] = "Disabled";
  AccessibilitySupport2[AccessibilitySupport2["Enabled"] = 2] = "Enabled";
})(AccessibilitySupport || (AccessibilitySupport = {}));
var CodeActionTriggerType2;
(function(CodeActionTriggerType3) {
  CodeActionTriggerType3[CodeActionTriggerType3["Invoke"] = 1] = "Invoke";
  CodeActionTriggerType3[CodeActionTriggerType3["Auto"] = 2] = "Auto";
})(CodeActionTriggerType2 || (CodeActionTriggerType2 = {}));
var CompletionItemInsertTextRule2;
(function(CompletionItemInsertTextRule3) {
  CompletionItemInsertTextRule3[CompletionItemInsertTextRule3["None"] = 0] = "None";
  CompletionItemInsertTextRule3[CompletionItemInsertTextRule3["KeepWhitespace"] = 1] = "KeepWhitespace";
  CompletionItemInsertTextRule3[CompletionItemInsertTextRule3["InsertAsSnippet"] = 4] = "InsertAsSnippet";
})(CompletionItemInsertTextRule2 || (CompletionItemInsertTextRule2 = {}));
var CompletionItemKind2;
(function(CompletionItemKind3) {
  CompletionItemKind3[CompletionItemKind3["Method"] = 0] = "Method";
  CompletionItemKind3[CompletionItemKind3["Function"] = 1] = "Function";
  CompletionItemKind3[CompletionItemKind3["Constructor"] = 2] = "Constructor";
  CompletionItemKind3[CompletionItemKind3["Field"] = 3] = "Field";
  CompletionItemKind3[CompletionItemKind3["Variable"] = 4] = "Variable";
  CompletionItemKind3[CompletionItemKind3["Class"] = 5] = "Class";
  CompletionItemKind3[CompletionItemKind3["Struct"] = 6] = "Struct";
  CompletionItemKind3[CompletionItemKind3["Interface"] = 7] = "Interface";
  CompletionItemKind3[CompletionItemKind3["Module"] = 8] = "Module";
  CompletionItemKind3[CompletionItemKind3["Property"] = 9] = "Property";
  CompletionItemKind3[CompletionItemKind3["Event"] = 10] = "Event";
  CompletionItemKind3[CompletionItemKind3["Operator"] = 11] = "Operator";
  CompletionItemKind3[CompletionItemKind3["Unit"] = 12] = "Unit";
  CompletionItemKind3[CompletionItemKind3["Value"] = 13] = "Value";
  CompletionItemKind3[CompletionItemKind3["Constant"] = 14] = "Constant";
  CompletionItemKind3[CompletionItemKind3["Enum"] = 15] = "Enum";
  CompletionItemKind3[CompletionItemKind3["EnumMember"] = 16] = "EnumMember";
  CompletionItemKind3[CompletionItemKind3["Keyword"] = 17] = "Keyword";
  CompletionItemKind3[CompletionItemKind3["Text"] = 18] = "Text";
  CompletionItemKind3[CompletionItemKind3["Color"] = 19] = "Color";
  CompletionItemKind3[CompletionItemKind3["File"] = 20] = "File";
  CompletionItemKind3[CompletionItemKind3["Reference"] = 21] = "Reference";
  CompletionItemKind3[CompletionItemKind3["Customcolor"] = 22] = "Customcolor";
  CompletionItemKind3[CompletionItemKind3["Folder"] = 23] = "Folder";
  CompletionItemKind3[CompletionItemKind3["TypeParameter"] = 24] = "TypeParameter";
  CompletionItemKind3[CompletionItemKind3["User"] = 25] = "User";
  CompletionItemKind3[CompletionItemKind3["Issue"] = 26] = "Issue";
  CompletionItemKind3[CompletionItemKind3["Snippet"] = 27] = "Snippet";
})(CompletionItemKind2 || (CompletionItemKind2 = {}));
var CompletionItemTag2;
(function(CompletionItemTag3) {
  CompletionItemTag3[CompletionItemTag3["Deprecated"] = 1] = "Deprecated";
})(CompletionItemTag2 || (CompletionItemTag2 = {}));
var CompletionTriggerKind2;
(function(CompletionTriggerKind3) {
  CompletionTriggerKind3[CompletionTriggerKind3["Invoke"] = 0] = "Invoke";
  CompletionTriggerKind3[CompletionTriggerKind3["TriggerCharacter"] = 1] = "TriggerCharacter";
  CompletionTriggerKind3[CompletionTriggerKind3["TriggerForIncompleteCompletions"] = 2] = "TriggerForIncompleteCompletions";
})(CompletionTriggerKind2 || (CompletionTriggerKind2 = {}));
var ContentWidgetPositionPreference;
(function(ContentWidgetPositionPreference2) {
  ContentWidgetPositionPreference2[ContentWidgetPositionPreference2["EXACT"] = 0] = "EXACT";
  ContentWidgetPositionPreference2[ContentWidgetPositionPreference2["ABOVE"] = 1] = "ABOVE";
  ContentWidgetPositionPreference2[ContentWidgetPositionPreference2["BELOW"] = 2] = "BELOW";
})(ContentWidgetPositionPreference || (ContentWidgetPositionPreference = {}));
var CursorChangeReason;
(function(CursorChangeReason2) {
  CursorChangeReason2[CursorChangeReason2["NotSet"] = 0] = "NotSet";
  CursorChangeReason2[CursorChangeReason2["ContentFlush"] = 1] = "ContentFlush";
  CursorChangeReason2[CursorChangeReason2["RecoverFromMarkers"] = 2] = "RecoverFromMarkers";
  CursorChangeReason2[CursorChangeReason2["Explicit"] = 3] = "Explicit";
  CursorChangeReason2[CursorChangeReason2["Paste"] = 4] = "Paste";
  CursorChangeReason2[CursorChangeReason2["Undo"] = 5] = "Undo";
  CursorChangeReason2[CursorChangeReason2["Redo"] = 6] = "Redo";
})(CursorChangeReason || (CursorChangeReason = {}));
var DefaultEndOfLine;
(function(DefaultEndOfLine3) {
  DefaultEndOfLine3[DefaultEndOfLine3["LF"] = 1] = "LF";
  DefaultEndOfLine3[DefaultEndOfLine3["CRLF"] = 2] = "CRLF";
})(DefaultEndOfLine || (DefaultEndOfLine = {}));
var DocumentHighlightKind2;
(function(DocumentHighlightKind3) {
  DocumentHighlightKind3[DocumentHighlightKind3["Text"] = 0] = "Text";
  DocumentHighlightKind3[DocumentHighlightKind3["Read"] = 1] = "Read";
  DocumentHighlightKind3[DocumentHighlightKind3["Write"] = 2] = "Write";
})(DocumentHighlightKind2 || (DocumentHighlightKind2 = {}));
var EditorAutoIndentStrategy;
(function(EditorAutoIndentStrategy2) {
  EditorAutoIndentStrategy2[EditorAutoIndentStrategy2["None"] = 0] = "None";
  EditorAutoIndentStrategy2[EditorAutoIndentStrategy2["Keep"] = 1] = "Keep";
  EditorAutoIndentStrategy2[EditorAutoIndentStrategy2["Brackets"] = 2] = "Brackets";
  EditorAutoIndentStrategy2[EditorAutoIndentStrategy2["Advanced"] = 3] = "Advanced";
  EditorAutoIndentStrategy2[EditorAutoIndentStrategy2["Full"] = 4] = "Full";
})(EditorAutoIndentStrategy || (EditorAutoIndentStrategy = {}));
var EditorOption;
(function(EditorOption2) {
  EditorOption2[EditorOption2["acceptSuggestionOnCommitCharacter"] = 0] = "acceptSuggestionOnCommitCharacter";
  EditorOption2[EditorOption2["acceptSuggestionOnEnter"] = 1] = "acceptSuggestionOnEnter";
  EditorOption2[EditorOption2["accessibilitySupport"] = 2] = "accessibilitySupport";
  EditorOption2[EditorOption2["accessibilityPageSize"] = 3] = "accessibilityPageSize";
  EditorOption2[EditorOption2["ariaLabel"] = 4] = "ariaLabel";
  EditorOption2[EditorOption2["ariaRequired"] = 5] = "ariaRequired";
  EditorOption2[EditorOption2["autoClosingBrackets"] = 6] = "autoClosingBrackets";
  EditorOption2[EditorOption2["autoClosingComments"] = 7] = "autoClosingComments";
  EditorOption2[EditorOption2["screenReaderAnnounceInlineSuggestion"] = 8] = "screenReaderAnnounceInlineSuggestion";
  EditorOption2[EditorOption2["autoClosingDelete"] = 9] = "autoClosingDelete";
  EditorOption2[EditorOption2["autoClosingOvertype"] = 10] = "autoClosingOvertype";
  EditorOption2[EditorOption2["autoClosingQuotes"] = 11] = "autoClosingQuotes";
  EditorOption2[EditorOption2["autoIndent"] = 12] = "autoIndent";
  EditorOption2[EditorOption2["automaticLayout"] = 13] = "automaticLayout";
  EditorOption2[EditorOption2["autoSurround"] = 14] = "autoSurround";
  EditorOption2[EditorOption2["bracketPairColorization"] = 15] = "bracketPairColorization";
  EditorOption2[EditorOption2["guides"] = 16] = "guides";
  EditorOption2[EditorOption2["codeLens"] = 17] = "codeLens";
  EditorOption2[EditorOption2["codeLensFontFamily"] = 18] = "codeLensFontFamily";
  EditorOption2[EditorOption2["codeLensFontSize"] = 19] = "codeLensFontSize";
  EditorOption2[EditorOption2["colorDecorators"] = 20] = "colorDecorators";
  EditorOption2[EditorOption2["colorDecoratorsLimit"] = 21] = "colorDecoratorsLimit";
  EditorOption2[EditorOption2["columnSelection"] = 22] = "columnSelection";
  EditorOption2[EditorOption2["comments"] = 23] = "comments";
  EditorOption2[EditorOption2["contextmenu"] = 24] = "contextmenu";
  EditorOption2[EditorOption2["copyWithSyntaxHighlighting"] = 25] = "copyWithSyntaxHighlighting";
  EditorOption2[EditorOption2["cursorBlinking"] = 26] = "cursorBlinking";
  EditorOption2[EditorOption2["cursorSmoothCaretAnimation"] = 27] = "cursorSmoothCaretAnimation";
  EditorOption2[EditorOption2["cursorStyle"] = 28] = "cursorStyle";
  EditorOption2[EditorOption2["cursorSurroundingLines"] = 29] = "cursorSurroundingLines";
  EditorOption2[EditorOption2["cursorSurroundingLinesStyle"] = 30] = "cursorSurroundingLinesStyle";
  EditorOption2[EditorOption2["cursorWidth"] = 31] = "cursorWidth";
  EditorOption2[EditorOption2["disableLayerHinting"] = 32] = "disableLayerHinting";
  EditorOption2[EditorOption2["disableMonospaceOptimizations"] = 33] = "disableMonospaceOptimizations";
  EditorOption2[EditorOption2["domReadOnly"] = 34] = "domReadOnly";
  EditorOption2[EditorOption2["dragAndDrop"] = 35] = "dragAndDrop";
  EditorOption2[EditorOption2["dropIntoEditor"] = 36] = "dropIntoEditor";
  EditorOption2[EditorOption2["experimentalEditContextEnabled"] = 37] = "experimentalEditContextEnabled";
  EditorOption2[EditorOption2["emptySelectionClipboard"] = 38] = "emptySelectionClipboard";
  EditorOption2[EditorOption2["experimentalGpuAcceleration"] = 39] = "experimentalGpuAcceleration";
  EditorOption2[EditorOption2["experimentalWhitespaceRendering"] = 40] = "experimentalWhitespaceRendering";
  EditorOption2[EditorOption2["extraEditorClassName"] = 41] = "extraEditorClassName";
  EditorOption2[EditorOption2["fastScrollSensitivity"] = 42] = "fastScrollSensitivity";
  EditorOption2[EditorOption2["find"] = 43] = "find";
  EditorOption2[EditorOption2["fixedOverflowWidgets"] = 44] = "fixedOverflowWidgets";
  EditorOption2[EditorOption2["folding"] = 45] = "folding";
  EditorOption2[EditorOption2["foldingStrategy"] = 46] = "foldingStrategy";
  EditorOption2[EditorOption2["foldingHighlight"] = 47] = "foldingHighlight";
  EditorOption2[EditorOption2["foldingImportsByDefault"] = 48] = "foldingImportsByDefault";
  EditorOption2[EditorOption2["foldingMaximumRegions"] = 49] = "foldingMaximumRegions";
  EditorOption2[EditorOption2["unfoldOnClickAfterEndOfLine"] = 50] = "unfoldOnClickAfterEndOfLine";
  EditorOption2[EditorOption2["fontFamily"] = 51] = "fontFamily";
  EditorOption2[EditorOption2["fontInfo"] = 52] = "fontInfo";
  EditorOption2[EditorOption2["fontLigatures"] = 53] = "fontLigatures";
  EditorOption2[EditorOption2["fontSize"] = 54] = "fontSize";
  EditorOption2[EditorOption2["fontWeight"] = 55] = "fontWeight";
  EditorOption2[EditorOption2["fontVariations"] = 56] = "fontVariations";
  EditorOption2[EditorOption2["formatOnPaste"] = 57] = "formatOnPaste";
  EditorOption2[EditorOption2["formatOnType"] = 58] = "formatOnType";
  EditorOption2[EditorOption2["glyphMargin"] = 59] = "glyphMargin";
  EditorOption2[EditorOption2["gotoLocation"] = 60] = "gotoLocation";
  EditorOption2[EditorOption2["hideCursorInOverviewRuler"] = 61] = "hideCursorInOverviewRuler";
  EditorOption2[EditorOption2["hover"] = 62] = "hover";
  EditorOption2[EditorOption2["inDiffEditor"] = 63] = "inDiffEditor";
  EditorOption2[EditorOption2["inlineSuggest"] = 64] = "inlineSuggest";
  EditorOption2[EditorOption2["inlineEdit"] = 65] = "inlineEdit";
  EditorOption2[EditorOption2["letterSpacing"] = 66] = "letterSpacing";
  EditorOption2[EditorOption2["lightbulb"] = 67] = "lightbulb";
  EditorOption2[EditorOption2["lineDecorationsWidth"] = 68] = "lineDecorationsWidth";
  EditorOption2[EditorOption2["lineHeight"] = 69] = "lineHeight";
  EditorOption2[EditorOption2["lineNumbers"] = 70] = "lineNumbers";
  EditorOption2[EditorOption2["lineNumbersMinChars"] = 71] = "lineNumbersMinChars";
  EditorOption2[EditorOption2["linkedEditing"] = 72] = "linkedEditing";
  EditorOption2[EditorOption2["links"] = 73] = "links";
  EditorOption2[EditorOption2["matchBrackets"] = 74] = "matchBrackets";
  EditorOption2[EditorOption2["minimap"] = 75] = "minimap";
  EditorOption2[EditorOption2["mouseStyle"] = 76] = "mouseStyle";
  EditorOption2[EditorOption2["mouseWheelScrollSensitivity"] = 77] = "mouseWheelScrollSensitivity";
  EditorOption2[EditorOption2["mouseWheelZoom"] = 78] = "mouseWheelZoom";
  EditorOption2[EditorOption2["multiCursorMergeOverlapping"] = 79] = "multiCursorMergeOverlapping";
  EditorOption2[EditorOption2["multiCursorModifier"] = 80] = "multiCursorModifier";
  EditorOption2[EditorOption2["multiCursorPaste"] = 81] = "multiCursorPaste";
  EditorOption2[EditorOption2["multiCursorLimit"] = 82] = "multiCursorLimit";
  EditorOption2[EditorOption2["occurrencesHighlight"] = 83] = "occurrencesHighlight";
  EditorOption2[EditorOption2["overviewRulerBorder"] = 84] = "overviewRulerBorder";
  EditorOption2[EditorOption2["overviewRulerLanes"] = 85] = "overviewRulerLanes";
  EditorOption2[EditorOption2["padding"] = 86] = "padding";
  EditorOption2[EditorOption2["pasteAs"] = 87] = "pasteAs";
  EditorOption2[EditorOption2["parameterHints"] = 88] = "parameterHints";
  EditorOption2[EditorOption2["peekWidgetDefaultFocus"] = 89] = "peekWidgetDefaultFocus";
  EditorOption2[EditorOption2["placeholder"] = 90] = "placeholder";
  EditorOption2[EditorOption2["definitionLinkOpensInPeek"] = 91] = "definitionLinkOpensInPeek";
  EditorOption2[EditorOption2["quickSuggestions"] = 92] = "quickSuggestions";
  EditorOption2[EditorOption2["quickSuggestionsDelay"] = 93] = "quickSuggestionsDelay";
  EditorOption2[EditorOption2["readOnly"] = 94] = "readOnly";
  EditorOption2[EditorOption2["readOnlyMessage"] = 95] = "readOnlyMessage";
  EditorOption2[EditorOption2["renameOnType"] = 96] = "renameOnType";
  EditorOption2[EditorOption2["renderControlCharacters"] = 97] = "renderControlCharacters";
  EditorOption2[EditorOption2["renderFinalNewline"] = 98] = "renderFinalNewline";
  EditorOption2[EditorOption2["renderLineHighlight"] = 99] = "renderLineHighlight";
  EditorOption2[EditorOption2["renderLineHighlightOnlyWhenFocus"] = 100] = "renderLineHighlightOnlyWhenFocus";
  EditorOption2[EditorOption2["renderValidationDecorations"] = 101] = "renderValidationDecorations";
  EditorOption2[EditorOption2["renderWhitespace"] = 102] = "renderWhitespace";
  EditorOption2[EditorOption2["revealHorizontalRightPadding"] = 103] = "revealHorizontalRightPadding";
  EditorOption2[EditorOption2["roundedSelection"] = 104] = "roundedSelection";
  EditorOption2[EditorOption2["rulers"] = 105] = "rulers";
  EditorOption2[EditorOption2["scrollbar"] = 106] = "scrollbar";
  EditorOption2[EditorOption2["scrollBeyondLastColumn"] = 107] = "scrollBeyondLastColumn";
  EditorOption2[EditorOption2["scrollBeyondLastLine"] = 108] = "scrollBeyondLastLine";
  EditorOption2[EditorOption2["scrollPredominantAxis"] = 109] = "scrollPredominantAxis";
  EditorOption2[EditorOption2["selectionClipboard"] = 110] = "selectionClipboard";
  EditorOption2[EditorOption2["selectionHighlight"] = 111] = "selectionHighlight";
  EditorOption2[EditorOption2["selectOnLineNumbers"] = 112] = "selectOnLineNumbers";
  EditorOption2[EditorOption2["showFoldingControls"] = 113] = "showFoldingControls";
  EditorOption2[EditorOption2["showUnused"] = 114] = "showUnused";
  EditorOption2[EditorOption2["snippetSuggestions"] = 115] = "snippetSuggestions";
  EditorOption2[EditorOption2["smartSelect"] = 116] = "smartSelect";
  EditorOption2[EditorOption2["smoothScrolling"] = 117] = "smoothScrolling";
  EditorOption2[EditorOption2["stickyScroll"] = 118] = "stickyScroll";
  EditorOption2[EditorOption2["stickyTabStops"] = 119] = "stickyTabStops";
  EditorOption2[EditorOption2["stopRenderingLineAfter"] = 120] = "stopRenderingLineAfter";
  EditorOption2[EditorOption2["suggest"] = 121] = "suggest";
  EditorOption2[EditorOption2["suggestFontSize"] = 122] = "suggestFontSize";
  EditorOption2[EditorOption2["suggestLineHeight"] = 123] = "suggestLineHeight";
  EditorOption2[EditorOption2["suggestOnTriggerCharacters"] = 124] = "suggestOnTriggerCharacters";
  EditorOption2[EditorOption2["suggestSelection"] = 125] = "suggestSelection";
  EditorOption2[EditorOption2["tabCompletion"] = 126] = "tabCompletion";
  EditorOption2[EditorOption2["tabIndex"] = 127] = "tabIndex";
  EditorOption2[EditorOption2["unicodeHighlighting"] = 128] = "unicodeHighlighting";
  EditorOption2[EditorOption2["unusualLineTerminators"] = 129] = "unusualLineTerminators";
  EditorOption2[EditorOption2["useShadowDOM"] = 130] = "useShadowDOM";
  EditorOption2[EditorOption2["useTabStops"] = 131] = "useTabStops";
  EditorOption2[EditorOption2["wordBreak"] = 132] = "wordBreak";
  EditorOption2[EditorOption2["wordSegmenterLocales"] = 133] = "wordSegmenterLocales";
  EditorOption2[EditorOption2["wordSeparators"] = 134] = "wordSeparators";
  EditorOption2[EditorOption2["wordWrap"] = 135] = "wordWrap";
  EditorOption2[EditorOption2["wordWrapBreakAfterCharacters"] = 136] = "wordWrapBreakAfterCharacters";
  EditorOption2[EditorOption2["wordWrapBreakBeforeCharacters"] = 137] = "wordWrapBreakBeforeCharacters";
  EditorOption2[EditorOption2["wordWrapColumn"] = 138] = "wordWrapColumn";
  EditorOption2[EditorOption2["wordWrapOverride1"] = 139] = "wordWrapOverride1";
  EditorOption2[EditorOption2["wordWrapOverride2"] = 140] = "wordWrapOverride2";
  EditorOption2[EditorOption2["wrappingIndent"] = 141] = "wrappingIndent";
  EditorOption2[EditorOption2["wrappingStrategy"] = 142] = "wrappingStrategy";
  EditorOption2[EditorOption2["showDeprecated"] = 143] = "showDeprecated";
  EditorOption2[EditorOption2["inlayHints"] = 144] = "inlayHints";
  EditorOption2[EditorOption2["editorClassName"] = 145] = "editorClassName";
  EditorOption2[EditorOption2["pixelRatio"] = 146] = "pixelRatio";
  EditorOption2[EditorOption2["tabFocusMode"] = 147] = "tabFocusMode";
  EditorOption2[EditorOption2["layoutInfo"] = 148] = "layoutInfo";
  EditorOption2[EditorOption2["wrappingInfo"] = 149] = "wrappingInfo";
  EditorOption2[EditorOption2["defaultColorDecorators"] = 150] = "defaultColorDecorators";
  EditorOption2[EditorOption2["colorDecoratorsActivatedOn"] = 151] = "colorDecoratorsActivatedOn";
  EditorOption2[EditorOption2["inlineCompletionsAccessibilityVerbose"] = 152] = "inlineCompletionsAccessibilityVerbose";
})(EditorOption || (EditorOption = {}));
var EndOfLinePreference;
(function(EndOfLinePreference3) {
  EndOfLinePreference3[EndOfLinePreference3["TextDefined"] = 0] = "TextDefined";
  EndOfLinePreference3[EndOfLinePreference3["LF"] = 1] = "LF";
  EndOfLinePreference3[EndOfLinePreference3["CRLF"] = 2] = "CRLF";
})(EndOfLinePreference || (EndOfLinePreference = {}));
var EndOfLineSequence;
(function(EndOfLineSequence3) {
  EndOfLineSequence3[EndOfLineSequence3["LF"] = 0] = "LF";
  EndOfLineSequence3[EndOfLineSequence3["CRLF"] = 1] = "CRLF";
})(EndOfLineSequence || (EndOfLineSequence = {}));
var GlyphMarginLane;
(function(GlyphMarginLane3) {
  GlyphMarginLane3[GlyphMarginLane3["Left"] = 1] = "Left";
  GlyphMarginLane3[GlyphMarginLane3["Center"] = 2] = "Center";
  GlyphMarginLane3[GlyphMarginLane3["Right"] = 3] = "Right";
})(GlyphMarginLane || (GlyphMarginLane = {}));
var HoverVerbosityAction2;
(function(HoverVerbosityAction3) {
  HoverVerbosityAction3[HoverVerbosityAction3["Increase"] = 0] = "Increase";
  HoverVerbosityAction3[HoverVerbosityAction3["Decrease"] = 1] = "Decrease";
})(HoverVerbosityAction2 || (HoverVerbosityAction2 = {}));
var IndentAction;
(function(IndentAction2) {
  IndentAction2[IndentAction2["None"] = 0] = "None";
  IndentAction2[IndentAction2["Indent"] = 1] = "Indent";
  IndentAction2[IndentAction2["IndentOutdent"] = 2] = "IndentOutdent";
  IndentAction2[IndentAction2["Outdent"] = 3] = "Outdent";
})(IndentAction || (IndentAction = {}));
var InjectedTextCursorStops;
(function(InjectedTextCursorStops3) {
  InjectedTextCursorStops3[InjectedTextCursorStops3["Both"] = 0] = "Both";
  InjectedTextCursorStops3[InjectedTextCursorStops3["Right"] = 1] = "Right";
  InjectedTextCursorStops3[InjectedTextCursorStops3["Left"] = 2] = "Left";
  InjectedTextCursorStops3[InjectedTextCursorStops3["None"] = 3] = "None";
})(InjectedTextCursorStops || (InjectedTextCursorStops = {}));
var InlayHintKind2;
(function(InlayHintKind3) {
  InlayHintKind3[InlayHintKind3["Type"] = 1] = "Type";
  InlayHintKind3[InlayHintKind3["Parameter"] = 2] = "Parameter";
})(InlayHintKind2 || (InlayHintKind2 = {}));
var InlineCompletionTriggerKind2;
(function(InlineCompletionTriggerKind3) {
  InlineCompletionTriggerKind3[InlineCompletionTriggerKind3["Automatic"] = 0] = "Automatic";
  InlineCompletionTriggerKind3[InlineCompletionTriggerKind3["Explicit"] = 1] = "Explicit";
})(InlineCompletionTriggerKind2 || (InlineCompletionTriggerKind2 = {}));
var InlineEditTriggerKind2;
(function(InlineEditTriggerKind3) {
  InlineEditTriggerKind3[InlineEditTriggerKind3["Invoke"] = 0] = "Invoke";
  InlineEditTriggerKind3[InlineEditTriggerKind3["Automatic"] = 1] = "Automatic";
})(InlineEditTriggerKind2 || (InlineEditTriggerKind2 = {}));
var KeyCode2;
(function(KeyCode3) {
  KeyCode3[KeyCode3["DependsOnKbLayout"] = -1] = "DependsOnKbLayout";
  KeyCode3[KeyCode3["Unknown"] = 0] = "Unknown";
  KeyCode3[KeyCode3["Backspace"] = 1] = "Backspace";
  KeyCode3[KeyCode3["Tab"] = 2] = "Tab";
  KeyCode3[KeyCode3["Enter"] = 3] = "Enter";
  KeyCode3[KeyCode3["Shift"] = 4] = "Shift";
  KeyCode3[KeyCode3["Ctrl"] = 5] = "Ctrl";
  KeyCode3[KeyCode3["Alt"] = 6] = "Alt";
  KeyCode3[KeyCode3["PauseBreak"] = 7] = "PauseBreak";
  KeyCode3[KeyCode3["CapsLock"] = 8] = "CapsLock";
  KeyCode3[KeyCode3["Escape"] = 9] = "Escape";
  KeyCode3[KeyCode3["Space"] = 10] = "Space";
  KeyCode3[KeyCode3["PageUp"] = 11] = "PageUp";
  KeyCode3[KeyCode3["PageDown"] = 12] = "PageDown";
  KeyCode3[KeyCode3["End"] = 13] = "End";
  KeyCode3[KeyCode3["Home"] = 14] = "Home";
  KeyCode3[KeyCode3["LeftArrow"] = 15] = "LeftArrow";
  KeyCode3[KeyCode3["UpArrow"] = 16] = "UpArrow";
  KeyCode3[KeyCode3["RightArrow"] = 17] = "RightArrow";
  KeyCode3[KeyCode3["DownArrow"] = 18] = "DownArrow";
  KeyCode3[KeyCode3["Insert"] = 19] = "Insert";
  KeyCode3[KeyCode3["Delete"] = 20] = "Delete";
  KeyCode3[KeyCode3["Digit0"] = 21] = "Digit0";
  KeyCode3[KeyCode3["Digit1"] = 22] = "Digit1";
  KeyCode3[KeyCode3["Digit2"] = 23] = "Digit2";
  KeyCode3[KeyCode3["Digit3"] = 24] = "Digit3";
  KeyCode3[KeyCode3["Digit4"] = 25] = "Digit4";
  KeyCode3[KeyCode3["Digit5"] = 26] = "Digit5";
  KeyCode3[KeyCode3["Digit6"] = 27] = "Digit6";
  KeyCode3[KeyCode3["Digit7"] = 28] = "Digit7";
  KeyCode3[KeyCode3["Digit8"] = 29] = "Digit8";
  KeyCode3[KeyCode3["Digit9"] = 30] = "Digit9";
  KeyCode3[KeyCode3["KeyA"] = 31] = "KeyA";
  KeyCode3[KeyCode3["KeyB"] = 32] = "KeyB";
  KeyCode3[KeyCode3["KeyC"] = 33] = "KeyC";
  KeyCode3[KeyCode3["KeyD"] = 34] = "KeyD";
  KeyCode3[KeyCode3["KeyE"] = 35] = "KeyE";
  KeyCode3[KeyCode3["KeyF"] = 36] = "KeyF";
  KeyCode3[KeyCode3["KeyG"] = 37] = "KeyG";
  KeyCode3[KeyCode3["KeyH"] = 38] = "KeyH";
  KeyCode3[KeyCode3["KeyI"] = 39] = "KeyI";
  KeyCode3[KeyCode3["KeyJ"] = 40] = "KeyJ";
  KeyCode3[KeyCode3["KeyK"] = 41] = "KeyK";
  KeyCode3[KeyCode3["KeyL"] = 42] = "KeyL";
  KeyCode3[KeyCode3["KeyM"] = 43] = "KeyM";
  KeyCode3[KeyCode3["KeyN"] = 44] = "KeyN";
  KeyCode3[KeyCode3["KeyO"] = 45] = "KeyO";
  KeyCode3[KeyCode3["KeyP"] = 46] = "KeyP";
  KeyCode3[KeyCode3["KeyQ"] = 47] = "KeyQ";
  KeyCode3[KeyCode3["KeyR"] = 48] = "KeyR";
  KeyCode3[KeyCode3["KeyS"] = 49] = "KeyS";
  KeyCode3[KeyCode3["KeyT"] = 50] = "KeyT";
  KeyCode3[KeyCode3["KeyU"] = 51] = "KeyU";
  KeyCode3[KeyCode3["KeyV"] = 52] = "KeyV";
  KeyCode3[KeyCode3["KeyW"] = 53] = "KeyW";
  KeyCode3[KeyCode3["KeyX"] = 54] = "KeyX";
  KeyCode3[KeyCode3["KeyY"] = 55] = "KeyY";
  KeyCode3[KeyCode3["KeyZ"] = 56] = "KeyZ";
  KeyCode3[KeyCode3["Meta"] = 57] = "Meta";
  KeyCode3[KeyCode3["ContextMenu"] = 58] = "ContextMenu";
  KeyCode3[KeyCode3["F1"] = 59] = "F1";
  KeyCode3[KeyCode3["F2"] = 60] = "F2";
  KeyCode3[KeyCode3["F3"] = 61] = "F3";
  KeyCode3[KeyCode3["F4"] = 62] = "F4";
  KeyCode3[KeyCode3["F5"] = 63] = "F5";
  KeyCode3[KeyCode3["F6"] = 64] = "F6";
  KeyCode3[KeyCode3["F7"] = 65] = "F7";
  KeyCode3[KeyCode3["F8"] = 66] = "F8";
  KeyCode3[KeyCode3["F9"] = 67] = "F9";
  KeyCode3[KeyCode3["F10"] = 68] = "F10";
  KeyCode3[KeyCode3["F11"] = 69] = "F11";
  KeyCode3[KeyCode3["F12"] = 70] = "F12";
  KeyCode3[KeyCode3["F13"] = 71] = "F13";
  KeyCode3[KeyCode3["F14"] = 72] = "F14";
  KeyCode3[KeyCode3["F15"] = 73] = "F15";
  KeyCode3[KeyCode3["F16"] = 74] = "F16";
  KeyCode3[KeyCode3["F17"] = 75] = "F17";
  KeyCode3[KeyCode3["F18"] = 76] = "F18";
  KeyCode3[KeyCode3["F19"] = 77] = "F19";
  KeyCode3[KeyCode3["F20"] = 78] = "F20";
  KeyCode3[KeyCode3["F21"] = 79] = "F21";
  KeyCode3[KeyCode3["F22"] = 80] = "F22";
  KeyCode3[KeyCode3["F23"] = 81] = "F23";
  KeyCode3[KeyCode3["F24"] = 82] = "F24";
  KeyCode3[KeyCode3["NumLock"] = 83] = "NumLock";
  KeyCode3[KeyCode3["ScrollLock"] = 84] = "ScrollLock";
  KeyCode3[KeyCode3["Semicolon"] = 85] = "Semicolon";
  KeyCode3[KeyCode3["Equal"] = 86] = "Equal";
  KeyCode3[KeyCode3["Comma"] = 87] = "Comma";
  KeyCode3[KeyCode3["Minus"] = 88] = "Minus";
  KeyCode3[KeyCode3["Period"] = 89] = "Period";
  KeyCode3[KeyCode3["Slash"] = 90] = "Slash";
  KeyCode3[KeyCode3["Backquote"] = 91] = "Backquote";
  KeyCode3[KeyCode3["BracketLeft"] = 92] = "BracketLeft";
  KeyCode3[KeyCode3["Backslash"] = 93] = "Backslash";
  KeyCode3[KeyCode3["BracketRight"] = 94] = "BracketRight";
  KeyCode3[KeyCode3["Quote"] = 95] = "Quote";
  KeyCode3[KeyCode3["OEM_8"] = 96] = "OEM_8";
  KeyCode3[KeyCode3["IntlBackslash"] = 97] = "IntlBackslash";
  KeyCode3[KeyCode3["Numpad0"] = 98] = "Numpad0";
  KeyCode3[KeyCode3["Numpad1"] = 99] = "Numpad1";
  KeyCode3[KeyCode3["Numpad2"] = 100] = "Numpad2";
  KeyCode3[KeyCode3["Numpad3"] = 101] = "Numpad3";
  KeyCode3[KeyCode3["Numpad4"] = 102] = "Numpad4";
  KeyCode3[KeyCode3["Numpad5"] = 103] = "Numpad5";
  KeyCode3[KeyCode3["Numpad6"] = 104] = "Numpad6";
  KeyCode3[KeyCode3["Numpad7"] = 105] = "Numpad7";
  KeyCode3[KeyCode3["Numpad8"] = 106] = "Numpad8";
  KeyCode3[KeyCode3["Numpad9"] = 107] = "Numpad9";
  KeyCode3[KeyCode3["NumpadMultiply"] = 108] = "NumpadMultiply";
  KeyCode3[KeyCode3["NumpadAdd"] = 109] = "NumpadAdd";
  KeyCode3[KeyCode3["NUMPAD_SEPARATOR"] = 110] = "NUMPAD_SEPARATOR";
  KeyCode3[KeyCode3["NumpadSubtract"] = 111] = "NumpadSubtract";
  KeyCode3[KeyCode3["NumpadDecimal"] = 112] = "NumpadDecimal";
  KeyCode3[KeyCode3["NumpadDivide"] = 113] = "NumpadDivide";
  KeyCode3[KeyCode3["KEY_IN_COMPOSITION"] = 114] = "KEY_IN_COMPOSITION";
  KeyCode3[KeyCode3["ABNT_C1"] = 115] = "ABNT_C1";
  KeyCode3[KeyCode3["ABNT_C2"] = 116] = "ABNT_C2";
  KeyCode3[KeyCode3["AudioVolumeMute"] = 117] = "AudioVolumeMute";
  KeyCode3[KeyCode3["AudioVolumeUp"] = 118] = "AudioVolumeUp";
  KeyCode3[KeyCode3["AudioVolumeDown"] = 119] = "AudioVolumeDown";
  KeyCode3[KeyCode3["BrowserSearch"] = 120] = "BrowserSearch";
  KeyCode3[KeyCode3["BrowserHome"] = 121] = "BrowserHome";
  KeyCode3[KeyCode3["BrowserBack"] = 122] = "BrowserBack";
  KeyCode3[KeyCode3["BrowserForward"] = 123] = "BrowserForward";
  KeyCode3[KeyCode3["MediaTrackNext"] = 124] = "MediaTrackNext";
  KeyCode3[KeyCode3["MediaTrackPrevious"] = 125] = "MediaTrackPrevious";
  KeyCode3[KeyCode3["MediaStop"] = 126] = "MediaStop";
  KeyCode3[KeyCode3["MediaPlayPause"] = 127] = "MediaPlayPause";
  KeyCode3[KeyCode3["LaunchMediaPlayer"] = 128] = "LaunchMediaPlayer";
  KeyCode3[KeyCode3["LaunchMail"] = 129] = "LaunchMail";
  KeyCode3[KeyCode3["LaunchApp2"] = 130] = "LaunchApp2";
  KeyCode3[KeyCode3["Clear"] = 131] = "Clear";
  KeyCode3[KeyCode3["MAX_VALUE"] = 132] = "MAX_VALUE";
})(KeyCode2 || (KeyCode2 = {}));
var MarkerSeverity;
(function(MarkerSeverity2) {
  MarkerSeverity2[MarkerSeverity2["Hint"] = 1] = "Hint";
  MarkerSeverity2[MarkerSeverity2["Info"] = 2] = "Info";
  MarkerSeverity2[MarkerSeverity2["Warning"] = 4] = "Warning";
  MarkerSeverity2[MarkerSeverity2["Error"] = 8] = "Error";
})(MarkerSeverity || (MarkerSeverity = {}));
var MarkerTag;
(function(MarkerTag2) {
  MarkerTag2[MarkerTag2["Unnecessary"] = 1] = "Unnecessary";
  MarkerTag2[MarkerTag2["Deprecated"] = 2] = "Deprecated";
})(MarkerTag || (MarkerTag = {}));
var MinimapPosition;
(function(MinimapPosition3) {
  MinimapPosition3[MinimapPosition3["Inline"] = 1] = "Inline";
  MinimapPosition3[MinimapPosition3["Gutter"] = 2] = "Gutter";
})(MinimapPosition || (MinimapPosition = {}));
var MinimapSectionHeaderStyle;
(function(MinimapSectionHeaderStyle3) {
  MinimapSectionHeaderStyle3[MinimapSectionHeaderStyle3["Normal"] = 1] = "Normal";
  MinimapSectionHeaderStyle3[MinimapSectionHeaderStyle3["Underlined"] = 2] = "Underlined";
})(MinimapSectionHeaderStyle || (MinimapSectionHeaderStyle = {}));
var MouseTargetType;
(function(MouseTargetType2) {
  MouseTargetType2[MouseTargetType2["UNKNOWN"] = 0] = "UNKNOWN";
  MouseTargetType2[MouseTargetType2["TEXTAREA"] = 1] = "TEXTAREA";
  MouseTargetType2[MouseTargetType2["GUTTER_GLYPH_MARGIN"] = 2] = "GUTTER_GLYPH_MARGIN";
  MouseTargetType2[MouseTargetType2["GUTTER_LINE_NUMBERS"] = 3] = "GUTTER_LINE_NUMBERS";
  MouseTargetType2[MouseTargetType2["GUTTER_LINE_DECORATIONS"] = 4] = "GUTTER_LINE_DECORATIONS";
  MouseTargetType2[MouseTargetType2["GUTTER_VIEW_ZONE"] = 5] = "GUTTER_VIEW_ZONE";
  MouseTargetType2[MouseTargetType2["CONTENT_TEXT"] = 6] = "CONTENT_TEXT";
  MouseTargetType2[MouseTargetType2["CONTENT_EMPTY"] = 7] = "CONTENT_EMPTY";
  MouseTargetType2[MouseTargetType2["CONTENT_VIEW_ZONE"] = 8] = "CONTENT_VIEW_ZONE";
  MouseTargetType2[MouseTargetType2["CONTENT_WIDGET"] = 9] = "CONTENT_WIDGET";
  MouseTargetType2[MouseTargetType2["OVERVIEW_RULER"] = 10] = "OVERVIEW_RULER";
  MouseTargetType2[MouseTargetType2["SCROLLBAR"] = 11] = "SCROLLBAR";
  MouseTargetType2[MouseTargetType2["OVERLAY_WIDGET"] = 12] = "OVERLAY_WIDGET";
  MouseTargetType2[MouseTargetType2["OUTSIDE_EDITOR"] = 13] = "OUTSIDE_EDITOR";
})(MouseTargetType || (MouseTargetType = {}));
var NewSymbolNameTag2;
(function(NewSymbolNameTag3) {
  NewSymbolNameTag3[NewSymbolNameTag3["AIGenerated"] = 1] = "AIGenerated";
})(NewSymbolNameTag2 || (NewSymbolNameTag2 = {}));
var NewSymbolNameTriggerKind2;
(function(NewSymbolNameTriggerKind3) {
  NewSymbolNameTriggerKind3[NewSymbolNameTriggerKind3["Invoke"] = 0] = "Invoke";
  NewSymbolNameTriggerKind3[NewSymbolNameTriggerKind3["Automatic"] = 1] = "Automatic";
})(NewSymbolNameTriggerKind2 || (NewSymbolNameTriggerKind2 = {}));
var OverlayWidgetPositionPreference;
(function(OverlayWidgetPositionPreference2) {
  OverlayWidgetPositionPreference2[OverlayWidgetPositionPreference2["TOP_RIGHT_CORNER"] = 0] = "TOP_RIGHT_CORNER";
  OverlayWidgetPositionPreference2[OverlayWidgetPositionPreference2["BOTTOM_RIGHT_CORNER"] = 1] = "BOTTOM_RIGHT_CORNER";
  OverlayWidgetPositionPreference2[OverlayWidgetPositionPreference2["TOP_CENTER"] = 2] = "TOP_CENTER";
})(OverlayWidgetPositionPreference || (OverlayWidgetPositionPreference = {}));
var OverviewRulerLane;
(function(OverviewRulerLane3) {
  OverviewRulerLane3[OverviewRulerLane3["Left"] = 1] = "Left";
  OverviewRulerLane3[OverviewRulerLane3["Center"] = 2] = "Center";
  OverviewRulerLane3[OverviewRulerLane3["Right"] = 4] = "Right";
  OverviewRulerLane3[OverviewRulerLane3["Full"] = 7] = "Full";
})(OverviewRulerLane || (OverviewRulerLane = {}));
var PartialAcceptTriggerKind2;
(function(PartialAcceptTriggerKind3) {
  PartialAcceptTriggerKind3[PartialAcceptTriggerKind3["Word"] = 0] = "Word";
  PartialAcceptTriggerKind3[PartialAcceptTriggerKind3["Line"] = 1] = "Line";
  PartialAcceptTriggerKind3[PartialAcceptTriggerKind3["Suggest"] = 2] = "Suggest";
})(PartialAcceptTriggerKind2 || (PartialAcceptTriggerKind2 = {}));
var PositionAffinity;
(function(PositionAffinity3) {
  PositionAffinity3[PositionAffinity3["Left"] = 0] = "Left";
  PositionAffinity3[PositionAffinity3["Right"] = 1] = "Right";
  PositionAffinity3[PositionAffinity3["None"] = 2] = "None";
  PositionAffinity3[PositionAffinity3["LeftOfInjectedText"] = 3] = "LeftOfInjectedText";
  PositionAffinity3[PositionAffinity3["RightOfInjectedText"] = 4] = "RightOfInjectedText";
})(PositionAffinity || (PositionAffinity = {}));
var RenderLineNumbersType;
(function(RenderLineNumbersType2) {
  RenderLineNumbersType2[RenderLineNumbersType2["Off"] = 0] = "Off";
  RenderLineNumbersType2[RenderLineNumbersType2["On"] = 1] = "On";
  RenderLineNumbersType2[RenderLineNumbersType2["Relative"] = 2] = "Relative";
  RenderLineNumbersType2[RenderLineNumbersType2["Interval"] = 3] = "Interval";
  RenderLineNumbersType2[RenderLineNumbersType2["Custom"] = 4] = "Custom";
})(RenderLineNumbersType || (RenderLineNumbersType = {}));
var RenderMinimap;
(function(RenderMinimap2) {
  RenderMinimap2[RenderMinimap2["None"] = 0] = "None";
  RenderMinimap2[RenderMinimap2["Text"] = 1] = "Text";
  RenderMinimap2[RenderMinimap2["Blocks"] = 2] = "Blocks";
})(RenderMinimap || (RenderMinimap = {}));
var ScrollType;
(function(ScrollType2) {
  ScrollType2[ScrollType2["Smooth"] = 0] = "Smooth";
  ScrollType2[ScrollType2["Immediate"] = 1] = "Immediate";
})(ScrollType || (ScrollType = {}));
var ScrollbarVisibility;
(function(ScrollbarVisibility2) {
  ScrollbarVisibility2[ScrollbarVisibility2["Auto"] = 1] = "Auto";
  ScrollbarVisibility2[ScrollbarVisibility2["Hidden"] = 2] = "Hidden";
  ScrollbarVisibility2[ScrollbarVisibility2["Visible"] = 3] = "Visible";
})(ScrollbarVisibility || (ScrollbarVisibility = {}));
var SelectionDirection2;
(function(SelectionDirection3) {
  SelectionDirection3[SelectionDirection3["LTR"] = 0] = "LTR";
  SelectionDirection3[SelectionDirection3["RTL"] = 1] = "RTL";
})(SelectionDirection2 || (SelectionDirection2 = {}));
var ShowLightbulbIconMode;
(function(ShowLightbulbIconMode2) {
  ShowLightbulbIconMode2["Off"] = "off";
  ShowLightbulbIconMode2["OnCode"] = "onCode";
  ShowLightbulbIconMode2["On"] = "on";
})(ShowLightbulbIconMode || (ShowLightbulbIconMode = {}));
var SignatureHelpTriggerKind2;
(function(SignatureHelpTriggerKind3) {
  SignatureHelpTriggerKind3[SignatureHelpTriggerKind3["Invoke"] = 1] = "Invoke";
  SignatureHelpTriggerKind3[SignatureHelpTriggerKind3["TriggerCharacter"] = 2] = "TriggerCharacter";
  SignatureHelpTriggerKind3[SignatureHelpTriggerKind3["ContentChange"] = 3] = "ContentChange";
})(SignatureHelpTriggerKind2 || (SignatureHelpTriggerKind2 = {}));
var SymbolKind2;
(function(SymbolKind3) {
  SymbolKind3[SymbolKind3["File"] = 0] = "File";
  SymbolKind3[SymbolKind3["Module"] = 1] = "Module";
  SymbolKind3[SymbolKind3["Namespace"] = 2] = "Namespace";
  SymbolKind3[SymbolKind3["Package"] = 3] = "Package";
  SymbolKind3[SymbolKind3["Class"] = 4] = "Class";
  SymbolKind3[SymbolKind3["Method"] = 5] = "Method";
  SymbolKind3[SymbolKind3["Property"] = 6] = "Property";
  SymbolKind3[SymbolKind3["Field"] = 7] = "Field";
  SymbolKind3[SymbolKind3["Constructor"] = 8] = "Constructor";
  SymbolKind3[SymbolKind3["Enum"] = 9] = "Enum";
  SymbolKind3[SymbolKind3["Interface"] = 10] = "Interface";
  SymbolKind3[SymbolKind3["Function"] = 11] = "Function";
  SymbolKind3[SymbolKind3["Variable"] = 12] = "Variable";
  SymbolKind3[SymbolKind3["Constant"] = 13] = "Constant";
  SymbolKind3[SymbolKind3["String"] = 14] = "String";
  SymbolKind3[SymbolKind3["Number"] = 15] = "Number";
  SymbolKind3[SymbolKind3["Boolean"] = 16] = "Boolean";
  SymbolKind3[SymbolKind3["Array"] = 17] = "Array";
  SymbolKind3[SymbolKind3["Object"] = 18] = "Object";
  SymbolKind3[SymbolKind3["Key"] = 19] = "Key";
  SymbolKind3[SymbolKind3["Null"] = 20] = "Null";
  SymbolKind3[SymbolKind3["EnumMember"] = 21] = "EnumMember";
  SymbolKind3[SymbolKind3["Struct"] = 22] = "Struct";
  SymbolKind3[SymbolKind3["Event"] = 23] = "Event";
  SymbolKind3[SymbolKind3["Operator"] = 24] = "Operator";
  SymbolKind3[SymbolKind3["TypeParameter"] = 25] = "TypeParameter";
})(SymbolKind2 || (SymbolKind2 = {}));
var SymbolTag2;
(function(SymbolTag3) {
  SymbolTag3[SymbolTag3["Deprecated"] = 1] = "Deprecated";
})(SymbolTag2 || (SymbolTag2 = {}));
var TextEditorCursorBlinkingStyle;
(function(TextEditorCursorBlinkingStyle2) {
  TextEditorCursorBlinkingStyle2[TextEditorCursorBlinkingStyle2["Hidden"] = 0] = "Hidden";
  TextEditorCursorBlinkingStyle2[TextEditorCursorBlinkingStyle2["Blink"] = 1] = "Blink";
  TextEditorCursorBlinkingStyle2[TextEditorCursorBlinkingStyle2["Smooth"] = 2] = "Smooth";
  TextEditorCursorBlinkingStyle2[TextEditorCursorBlinkingStyle2["Phase"] = 3] = "Phase";
  TextEditorCursorBlinkingStyle2[TextEditorCursorBlinkingStyle2["Expand"] = 4] = "Expand";
  TextEditorCursorBlinkingStyle2[TextEditorCursorBlinkingStyle2["Solid"] = 5] = "Solid";
})(TextEditorCursorBlinkingStyle || (TextEditorCursorBlinkingStyle = {}));
var TextEditorCursorStyle;
(function(TextEditorCursorStyle2) {
  TextEditorCursorStyle2[TextEditorCursorStyle2["Line"] = 1] = "Line";
  TextEditorCursorStyle2[TextEditorCursorStyle2["Block"] = 2] = "Block";
  TextEditorCursorStyle2[TextEditorCursorStyle2["Underline"] = 3] = "Underline";
  TextEditorCursorStyle2[TextEditorCursorStyle2["LineThin"] = 4] = "LineThin";
  TextEditorCursorStyle2[TextEditorCursorStyle2["BlockOutline"] = 5] = "BlockOutline";
  TextEditorCursorStyle2[TextEditorCursorStyle2["UnderlineThin"] = 6] = "UnderlineThin";
})(TextEditorCursorStyle || (TextEditorCursorStyle = {}));
var TrackedRangeStickiness;
(function(TrackedRangeStickiness3) {
  TrackedRangeStickiness3[TrackedRangeStickiness3["AlwaysGrowsWhenTypingAtEdges"] = 0] = "AlwaysGrowsWhenTypingAtEdges";
  TrackedRangeStickiness3[TrackedRangeStickiness3["NeverGrowsWhenTypingAtEdges"] = 1] = "NeverGrowsWhenTypingAtEdges";
  TrackedRangeStickiness3[TrackedRangeStickiness3["GrowsOnlyWhenTypingBefore"] = 2] = "GrowsOnlyWhenTypingBefore";
  TrackedRangeStickiness3[TrackedRangeStickiness3["GrowsOnlyWhenTypingAfter"] = 3] = "GrowsOnlyWhenTypingAfter";
})(TrackedRangeStickiness || (TrackedRangeStickiness = {}));
var WrappingIndent;
(function(WrappingIndent2) {
  WrappingIndent2[WrappingIndent2["None"] = 0] = "None";
  WrappingIndent2[WrappingIndent2["Same"] = 1] = "Same";
  WrappingIndent2[WrappingIndent2["Indent"] = 2] = "Indent";
  WrappingIndent2[WrappingIndent2["DeepIndent"] = 3] = "DeepIndent";
})(WrappingIndent || (WrappingIndent = {}));

// out-build/vs/editor/common/services/editorBaseApi.js
var $V5 = class {
  static {
    this.CtrlCmd = 2048;
  }
  static {
    this.Shift = 1024;
  }
  static {
    this.Alt = 512;
  }
  static {
    this.WinCtrl = 256;
  }
  static chord(firstPart, secondPart) {
    return $hs(firstPart, secondPart);
  }
};
function $W5() {
  return {
    editor: void 0,
    // undefined override expected here
    languages: void 0,
    // undefined override expected here
    CancellationTokenSource: $Oe,
    Emitter: $Ce,
    KeyCode: KeyCode2,
    KeyMod: $V5,
    Position: $9t,
    Range: $0t,
    Selection: $_t,
    SelectionDirection: SelectionDirection2,
    MarkerSeverity,
    MarkerTag,
    Uri: URI,
    Token: $6u
  };
}

// out-build/vs/editor/common/services/editorWorkerHost.js
var $X5 = class _$X5 {
  static {
    this.CHANNEL_NAME = "editorWorkerHost";
  }
  static getChannel(workerServer) {
    return workerServer.getChannel(_$X5.CHANNEL_NAME);
  }
  static setChannel(workerClient, obj) {
    workerClient.setChannel(_$X5.CHANNEL_NAME, obj);
  }
};

// out-build/vs/editor/common/core/wordCharacterClassifier.js
var WordCharacterClass;
(function(WordCharacterClass2) {
  WordCharacterClass2[WordCharacterClass2["Regular"] = 0] = "Regular";
  WordCharacterClass2[WordCharacterClass2["Whitespace"] = 1] = "Whitespace";
  WordCharacterClass2[WordCharacterClass2["WordSeparator"] = 2] = "WordSeparator";
})(WordCharacterClass || (WordCharacterClass = {}));
var wordClassifierCache = new $Pc(10);

// out-build/vs/base/common/objects.js
function $Go(obj) {
  let res = [];
  while (Object.prototype !== obj) {
    res = res.concat(Object.getOwnPropertyNames(obj));
    obj = Object.getPrototypeOf(obj);
  }
  return res;
}
function $Ho(obj) {
  const methods = [];
  for (const prop of $Go(obj)) {
    if (typeof obj[prop] === "function") {
      methods.push(prop);
    }
  }
  return methods;
}
function $Io(methodNames, invoke) {
  const createProxyMethod = (method) => {
    return function() {
      const args = Array.prototype.slice.call(arguments, 0);
      return invoke(method, args);
    };
  };
  const result = {};
  for (const methodName of methodNames) {
    result[methodName] = createProxyMethod(methodName);
  }
  return result;
}

// out-build/vs/editor/common/model.js
var OverviewRulerLane2;
(function(OverviewRulerLane3) {
  OverviewRulerLane3[OverviewRulerLane3["Left"] = 1] = "Left";
  OverviewRulerLane3[OverviewRulerLane3["Center"] = 2] = "Center";
  OverviewRulerLane3[OverviewRulerLane3["Right"] = 4] = "Right";
  OverviewRulerLane3[OverviewRulerLane3["Full"] = 7] = "Full";
})(OverviewRulerLane2 || (OverviewRulerLane2 = {}));
var GlyphMarginLane2;
(function(GlyphMarginLane3) {
  GlyphMarginLane3[GlyphMarginLane3["Left"] = 1] = "Left";
  GlyphMarginLane3[GlyphMarginLane3["Center"] = 2] = "Center";
  GlyphMarginLane3[GlyphMarginLane3["Right"] = 3] = "Right";
})(GlyphMarginLane2 || (GlyphMarginLane2 = {}));
var MinimapPosition2;
(function(MinimapPosition3) {
  MinimapPosition3[MinimapPosition3["Inline"] = 1] = "Inline";
  MinimapPosition3[MinimapPosition3["Gutter"] = 2] = "Gutter";
})(MinimapPosition2 || (MinimapPosition2 = {}));
var MinimapSectionHeaderStyle2;
(function(MinimapSectionHeaderStyle3) {
  MinimapSectionHeaderStyle3[MinimapSectionHeaderStyle3["Normal"] = 1] = "Normal";
  MinimapSectionHeaderStyle3[MinimapSectionHeaderStyle3["Underlined"] = 2] = "Underlined";
})(MinimapSectionHeaderStyle2 || (MinimapSectionHeaderStyle2 = {}));
var InjectedTextCursorStops2;
(function(InjectedTextCursorStops3) {
  InjectedTextCursorStops3[InjectedTextCursorStops3["Both"] = 0] = "Both";
  InjectedTextCursorStops3[InjectedTextCursorStops3["Right"] = 1] = "Right";
  InjectedTextCursorStops3[InjectedTextCursorStops3["Left"] = 2] = "Left";
  InjectedTextCursorStops3[InjectedTextCursorStops3["None"] = 3] = "None";
})(InjectedTextCursorStops2 || (InjectedTextCursorStops2 = {}));
var EndOfLinePreference2;
(function(EndOfLinePreference3) {
  EndOfLinePreference3[EndOfLinePreference3["TextDefined"] = 0] = "TextDefined";
  EndOfLinePreference3[EndOfLinePreference3["LF"] = 1] = "LF";
  EndOfLinePreference3[EndOfLinePreference3["CRLF"] = 2] = "CRLF";
})(EndOfLinePreference2 || (EndOfLinePreference2 = {}));
var DefaultEndOfLine2;
(function(DefaultEndOfLine3) {
  DefaultEndOfLine3[DefaultEndOfLine3["LF"] = 1] = "LF";
  DefaultEndOfLine3[DefaultEndOfLine3["CRLF"] = 2] = "CRLF";
})(DefaultEndOfLine2 || (DefaultEndOfLine2 = {}));
var EndOfLineSequence2;
(function(EndOfLineSequence3) {
  EndOfLineSequence3[EndOfLineSequence3["LF"] = 0] = "LF";
  EndOfLineSequence3[EndOfLineSequence3["CRLF"] = 1] = "CRLF";
})(EndOfLineSequence2 || (EndOfLineSequence2 = {}));
var TrackedRangeStickiness2;
(function(TrackedRangeStickiness3) {
  TrackedRangeStickiness3[TrackedRangeStickiness3["AlwaysGrowsWhenTypingAtEdges"] = 0] = "AlwaysGrowsWhenTypingAtEdges";
  TrackedRangeStickiness3[TrackedRangeStickiness3["NeverGrowsWhenTypingAtEdges"] = 1] = "NeverGrowsWhenTypingAtEdges";
  TrackedRangeStickiness3[TrackedRangeStickiness3["GrowsOnlyWhenTypingBefore"] = 2] = "GrowsOnlyWhenTypingBefore";
  TrackedRangeStickiness3[TrackedRangeStickiness3["GrowsOnlyWhenTypingAfter"] = 3] = "GrowsOnlyWhenTypingAfter";
})(TrackedRangeStickiness2 || (TrackedRangeStickiness2 = {}));
var PositionAffinity2;
(function(PositionAffinity3) {
  PositionAffinity3[PositionAffinity3["Left"] = 0] = "Left";
  PositionAffinity3[PositionAffinity3["Right"] = 1] = "Right";
  PositionAffinity3[PositionAffinity3["None"] = 2] = "None";
  PositionAffinity3[PositionAffinity3["LeftOfInjectedText"] = 3] = "LeftOfInjectedText";
  PositionAffinity3[PositionAffinity3["RightOfInjectedText"] = 4] = "RightOfInjectedText";
})(PositionAffinity2 || (PositionAffinity2 = {}));
var ModelConstants;
(function(ModelConstants2) {
  ModelConstants2[ModelConstants2["FIRST_LINE_DETECTION_LENGTH_LIMIT"] = 1e3] = "FIRST_LINE_DETECTION_LENGTH_LIMIT";
})(ModelConstants || (ModelConstants = {}));

// out-build/vs/editor/common/model/textModelSearch.js
function leftIsWordBounday(wordSeparators, text, textLength, matchStartIndex, matchLength) {
  if (matchStartIndex === 0) {
    return true;
  }
  const charBefore = text.charCodeAt(matchStartIndex - 1);
  if (wordSeparators.get(charBefore) !== 0) {
    return true;
  }
  if (charBefore === 13 || charBefore === 10) {
    return true;
  }
  if (matchLength > 0) {
    const firstCharInMatch = text.charCodeAt(matchStartIndex);
    if (wordSeparators.get(firstCharInMatch) !== 0) {
      return true;
    }
  }
  return false;
}
function rightIsWordBounday(wordSeparators, text, textLength, matchStartIndex, matchLength) {
  if (matchStartIndex + matchLength === textLength) {
    return true;
  }
  const charAfter = text.charCodeAt(matchStartIndex + matchLength);
  if (wordSeparators.get(charAfter) !== 0) {
    return true;
  }
  if (charAfter === 13 || charAfter === 10) {
    return true;
  }
  if (matchLength > 0) {
    const lastCharInMatch = text.charCodeAt(matchStartIndex + matchLength - 1);
    if (wordSeparators.get(lastCharInMatch) !== 0) {
      return true;
    }
  }
  return false;
}
function $VD(wordSeparators, text, textLength, matchStartIndex, matchLength) {
  return leftIsWordBounday(wordSeparators, text, textLength, matchStartIndex, matchLength) && rightIsWordBounday(wordSeparators, text, textLength, matchStartIndex, matchLength);
}
var $WD = class {
  constructor(wordSeparators, searchRegex) {
    this._wordSeparators = wordSeparators;
    this.a = searchRegex;
    this.b = -1;
    this.c = 0;
  }
  reset(lastIndex) {
    this.a.lastIndex = lastIndex;
    this.b = -1;
    this.c = 0;
  }
  next(text) {
    const textLength = text.length;
    let m;
    do {
      if (this.b + this.c === textLength) {
        return null;
      }
      m = this.a.exec(text);
      if (!m) {
        return null;
      }
      const matchStartIndex = m.index;
      const matchLength = m[0].length;
      if (matchStartIndex === this.b && matchLength === this.c) {
        if (matchLength === 0) {
          if ($5f(text, textLength, this.a.lastIndex) > 65535) {
            this.a.lastIndex += 2;
          } else {
            this.a.lastIndex += 1;
          }
          continue;
        }
        return null;
      }
      this.b = matchStartIndex;
      this.c = matchLength;
      if (!this._wordSeparators || $VD(this._wordSeparators, text, textLength, matchStartIndex, matchLength)) {
        return m;
      }
    } while (m);
    return null;
  }
};

// out-build/vs/base/common/assert.js
function $ld(value, message = "Unreachable") {
  throw new Error(message);
}
function $od(condition) {
  if (!condition()) {
    debugger;
    condition();
    $ab(new $pb("Assertion Failed"));
  }
}
function $pd(items, predicate) {
  let i = 0;
  while (i < items.length - 1) {
    const a = items[i];
    const b = items[i + 1];
    if (!predicate(a, b)) {
      return false;
    }
    i++;
  }
  return true;
}

// out-build/vs/editor/common/core/wordHelper.js
var $Ht = "`~!@#$%^&*()-=+[{]}\\|;:'\",.<>/?";
function createWordRegExp(allowInWords = "") {
  let source = "(-?\\d*\\.\\d\\w*)|([^";
  for (const sep2 of $Ht) {
    if (allowInWords.indexOf(sep2) >= 0) {
      continue;
    }
    source += "\\" + sep2;
  }
  source += "\\s]+)";
  return new RegExp(source, "g");
}
var $It = createWordRegExp();
function $Jt(wordDefinition) {
  let result = $It;
  if (wordDefinition && wordDefinition instanceof RegExp) {
    if (!wordDefinition.global) {
      let flags = "g";
      if (wordDefinition.ignoreCase) {
        flags += "i";
      }
      if (wordDefinition.multiline) {
        flags += "m";
      }
      if (wordDefinition.unicode) {
        flags += "u";
      }
      result = new RegExp(wordDefinition.source, flags);
    } else {
      result = wordDefinition;
    }
  }
  result.lastIndex = 0;
  return result;
}
var _defaultConfig = new $gd();
_defaultConfig.unshift({
  maxLen: 1e3,
  windowSize: 15,
  timeBudget: 150
});
function $Lt(column, wordDefinition, text, textOffset, config) {
  wordDefinition = $Jt(wordDefinition);
  if (!config) {
    config = Iterable.first(_defaultConfig);
  }
  if (text.length > config.maxLen) {
    let start = column - config.maxLen / 2;
    if (start < 0) {
      start = 0;
    } else {
      textOffset += start;
    }
    text = text.substring(start, column + config.maxLen / 2);
    return $Lt(column, wordDefinition, text, textOffset, config);
  }
  const t1 = Date.now();
  const pos = column - 1 - textOffset;
  let prevRegexIndex = -1;
  let match = null;
  for (let i = 1; ; i++) {
    if (Date.now() - t1 >= config.timeBudget) {
      break;
    }
    const regexIndex = pos - config.windowSize * i;
    wordDefinition.lastIndex = Math.max(0, regexIndex);
    const thisMatch = _findRegexMatchEnclosingPosition(wordDefinition, text, pos, prevRegexIndex);
    if (!thisMatch && match) {
      break;
    }
    match = thisMatch;
    if (regexIndex <= 0) {
      break;
    }
    prevRegexIndex = regexIndex;
  }
  if (match) {
    const result = {
      word: match[0],
      startColumn: textOffset + 1 + match.index,
      endColumn: textOffset + 1 + match.index + match[0].length
    };
    wordDefinition.lastIndex = 0;
    return result;
  }
  return null;
}
function _findRegexMatchEnclosingPosition(wordDefinition, text, pos, stopPos) {
  let match;
  while (match = wordDefinition.exec(text)) {
    const matchIndex = match.index || 0;
    if (matchIndex <= pos && wordDefinition.lastIndex >= pos) {
      return match;
    } else if (stopPos > 0 && matchIndex > stopPos) {
      return null;
    }
  }
  return null;
}

// out-build/vs/editor/common/services/unicodeTextModelHighlighter.js
var $Q5 = class {
  static computeUnicodeHighlights(model, options, range) {
    const startLine = range ? range.startLineNumber : 1;
    const endLine = range ? range.endLineNumber : model.getLineCount();
    const codePointHighlighter = new CodePointHighlighter(options);
    const candidates = codePointHighlighter.getCandidateCodePoints();
    let regex;
    if (candidates === "allNonBasicAscii") {
      regex = new RegExp("[^\\t\\n\\r\\x20-\\x7E]", "g");
    } else {
      regex = new RegExp(`${buildRegExpCharClassExpr(Array.from(candidates))}`, "g");
    }
    const searcher = new $WD(null, regex);
    const ranges = [];
    let hasMore = false;
    let m;
    let ambiguousCharacterCount = 0;
    let invisibleCharacterCount = 0;
    let nonBasicAsciiCharacterCount = 0;
    forLoop: for (let lineNumber = startLine, lineCount = endLine; lineNumber <= lineCount; lineNumber++) {
      const lineContent = model.getLineContent(lineNumber);
      const lineLength = lineContent.length;
      searcher.reset(0);
      do {
        m = searcher.next(lineContent);
        if (m) {
          let startIndex = m.index;
          let endIndex = m.index + m[0].length;
          if (startIndex > 0) {
            const charCodeBefore = lineContent.charCodeAt(startIndex - 1);
            if ($2f(charCodeBefore)) {
              startIndex--;
            }
          }
          if (endIndex + 1 < lineLength) {
            const charCodeBefore = lineContent.charCodeAt(endIndex - 1);
            if ($2f(charCodeBefore)) {
              endIndex++;
            }
          }
          const str = lineContent.substring(startIndex, endIndex);
          let word = $Lt(startIndex + 1, $It, lineContent, 0);
          if (word && word.endColumn <= startIndex + 1) {
            word = null;
          }
          const highlightReason = codePointHighlighter.shouldHighlightNonBasicASCII(str, word ? word.word : null);
          if (highlightReason !== 0) {
            if (highlightReason === 3) {
              ambiguousCharacterCount++;
            } else if (highlightReason === 2) {
              invisibleCharacterCount++;
            } else if (highlightReason === 1) {
              nonBasicAsciiCharacterCount++;
            } else {
              $ld(highlightReason);
            }
            const MAX_RESULT_LENGTH = 1e3;
            if (ranges.length >= MAX_RESULT_LENGTH) {
              hasMore = true;
              break forLoop;
            }
            ranges.push(new $0t(lineNumber, startIndex + 1, lineNumber, endIndex + 1));
          }
        }
      } while (m);
    }
    return {
      ranges,
      hasMore,
      ambiguousCharacterCount,
      invisibleCharacterCount,
      nonBasicAsciiCharacterCount
    };
  }
  static computeUnicodeHighlightReason(char, options) {
    const codePointHighlighter = new CodePointHighlighter(options);
    const reason = codePointHighlighter.shouldHighlightNonBasicASCII(char, null);
    switch (reason) {
      case 0:
        return null;
      case 2:
        return {
          kind: 1
          /* UnicodeHighlighterReasonKind.Invisible */
        };
      case 3: {
        const codePoint = char.codePointAt(0);
        const primaryConfusable = codePointHighlighter.ambiguousCharacters.getPrimaryConfusable(codePoint);
        const notAmbiguousInLocales = $ug.getLocales().filter((l) => !$ug.getInstance(/* @__PURE__ */ new Set([...options.allowedLocales, l])).isAmbiguous(codePoint));
        return { kind: 0, confusableWith: String.fromCodePoint(primaryConfusable), notAmbiguousInLocales };
      }
      case 1:
        return {
          kind: 2
          /* UnicodeHighlighterReasonKind.NonBasicAscii */
        };
    }
  }
};
function buildRegExpCharClassExpr(codePoints, flags) {
  const src = `[${$zf(codePoints.map((i) => String.fromCodePoint(i)).join(""))}]`;
  return src;
}
var UnicodeHighlighterReasonKind;
(function(UnicodeHighlighterReasonKind2) {
  UnicodeHighlighterReasonKind2[UnicodeHighlighterReasonKind2["Ambiguous"] = 0] = "Ambiguous";
  UnicodeHighlighterReasonKind2[UnicodeHighlighterReasonKind2["Invisible"] = 1] = "Invisible";
  UnicodeHighlighterReasonKind2[UnicodeHighlighterReasonKind2["NonBasicAscii"] = 2] = "NonBasicAscii";
})(UnicodeHighlighterReasonKind || (UnicodeHighlighterReasonKind = {}));
var CodePointHighlighter = class {
  constructor(b) {
    this.b = b;
    this.a = new Set(b.allowedCodePoints);
    this.ambiguousCharacters = $ug.getInstance(new Set(b.allowedLocales));
  }
  getCandidateCodePoints() {
    if (this.b.nonBasicASCII) {
      return "allNonBasicAscii";
    }
    const set = /* @__PURE__ */ new Set();
    if (this.b.invisibleCharacters) {
      for (const cp of $vg.codePoints) {
        if (!isAllowedInvisibleCharacter(String.fromCodePoint(cp))) {
          set.add(cp);
        }
      }
    }
    if (this.b.ambiguousCharacters) {
      for (const cp of this.ambiguousCharacters.getConfusableCodePoints()) {
        set.add(cp);
      }
    }
    for (const cp of this.a) {
      set.delete(cp);
    }
    return set;
  }
  shouldHighlightNonBasicASCII(character, wordContext) {
    const codePoint = character.codePointAt(0);
    if (this.a.has(codePoint)) {
      return 0;
    }
    if (this.b.nonBasicASCII) {
      return 1;
    }
    let hasBasicASCIICharacters = false;
    let hasNonConfusableNonBasicAsciiCharacter = false;
    if (wordContext) {
      for (const char of wordContext) {
        const codePoint2 = char.codePointAt(0);
        const isBasicASCII = $ag(char);
        hasBasicASCIICharacters = hasBasicASCIICharacters || isBasicASCII;
        if (!isBasicASCII && !this.ambiguousCharacters.isAmbiguous(codePoint2) && !$vg.isInvisibleCharacter(codePoint2)) {
          hasNonConfusableNonBasicAsciiCharacter = true;
        }
      }
    }
    if (
      /* Don't allow mixing weird looking characters with ASCII */
      !hasBasicASCIICharacters && /* Is there an obviously weird looking character? */
      hasNonConfusableNonBasicAsciiCharacter
    ) {
      return 0;
    }
    if (this.b.invisibleCharacters) {
      if (!isAllowedInvisibleCharacter(character) && $vg.isInvisibleCharacter(codePoint)) {
        return 2;
      }
    }
    if (this.b.ambiguousCharacters) {
      if (this.ambiguousCharacters.isAmbiguous(codePoint)) {
        return 3;
      }
    }
    return 0;
  }
};
function isAllowedInvisibleCharacter(character) {
  return character === " " || character === "\n" || character === "	";
}
var SimpleHighlightReason;
(function(SimpleHighlightReason2) {
  SimpleHighlightReason2[SimpleHighlightReason2["None"] = 0] = "None";
  SimpleHighlightReason2[SimpleHighlightReason2["NonBasicASCII"] = 1] = "NonBasicASCII";
  SimpleHighlightReason2[SimpleHighlightReason2["Invisible"] = 2] = "Invisible";
  SimpleHighlightReason2[SimpleHighlightReason2["Ambiguous"] = 3] = "Ambiguous";
})(SimpleHighlightReason || (SimpleHighlightReason = {}));

// out-build/vs/editor/common/diff/linesDiffComputer.js
var $tu = class {
  constructor(changes, moves, hitTimeout) {
    this.changes = changes;
    this.moves = moves;
    this.hitTimeout = hitTimeout;
  }
};
var $uu = class _$uu {
  constructor(lineRangeMapping, changes) {
    this.lineRangeMapping = lineRangeMapping;
    this.changes = changes;
  }
  flip() {
    return new _$uu(this.lineRangeMapping.flip(), this.changes.map((c) => c.flip()));
  }
};

// out-build/vs/editor/common/core/offsetRange.js
var $eu = class _$eu {
  static addRange(range, sortedRanges) {
    let i = 0;
    while (i < sortedRanges.length && sortedRanges[i].endExclusive < range.start) {
      i++;
    }
    let j = i;
    while (j < sortedRanges.length && sortedRanges[j].start <= range.endExclusive) {
      j++;
    }
    if (i === j) {
      sortedRanges.splice(i, 0, range);
    } else {
      const start = Math.min(range.start, sortedRanges[i].start);
      const end = Math.max(range.endExclusive, sortedRanges[j - 1].endExclusive);
      sortedRanges.splice(i, j - i, new _$eu(start, end));
    }
  }
  static tryCreate(start, endExclusive) {
    if (start > endExclusive) {
      return void 0;
    }
    return new _$eu(start, endExclusive);
  }
  static ofLength(length) {
    return new _$eu(0, length);
  }
  static ofStartAndLength(start, length) {
    return new _$eu(start, start + length);
  }
  static emptyAt(offset) {
    return new _$eu(offset, offset);
  }
  constructor(start, endExclusive) {
    this.start = start;
    this.endExclusive = endExclusive;
    if (start > endExclusive) {
      throw new $pb(`Invalid range: ${this.toString()}`);
    }
  }
  get isEmpty() {
    return this.start === this.endExclusive;
  }
  delta(offset) {
    return new _$eu(this.start + offset, this.endExclusive + offset);
  }
  deltaStart(offset) {
    return new _$eu(this.start + offset, this.endExclusive);
  }
  deltaEnd(offset) {
    return new _$eu(this.start, this.endExclusive + offset);
  }
  get length() {
    return this.endExclusive - this.start;
  }
  toString() {
    return `[${this.start}, ${this.endExclusive})`;
  }
  equals(other) {
    return this.start === other.start && this.endExclusive === other.endExclusive;
  }
  containsRange(other) {
    return this.start <= other.start && other.endExclusive <= this.endExclusive;
  }
  contains(offset) {
    return this.start <= offset && offset < this.endExclusive;
  }
  /**
   * for all numbers n: range1.contains(n) or range2.contains(n) => range1.join(range2).contains(n)
   * The joined range is the smallest range that contains both ranges.
   */
  join(other) {
    return new _$eu(Math.min(this.start, other.start), Math.max(this.endExclusive, other.endExclusive));
  }
  /**
   * for all numbers n: range1.contains(n) and range2.contains(n) <=> range1.intersect(range2).contains(n)
   *
   * The resulting range is empty if the ranges do not intersect, but touch.
   * If the ranges don't even touch, the result is undefined.
   */
  intersect(other) {
    const start = Math.max(this.start, other.start);
    const end = Math.min(this.endExclusive, other.endExclusive);
    if (start <= end) {
      return new _$eu(start, end);
    }
    return void 0;
  }
  intersectionLength(range) {
    const start = Math.max(this.start, range.start);
    const end = Math.min(this.endExclusive, range.endExclusive);
    return Math.max(0, end - start);
  }
  intersects(other) {
    const start = Math.max(this.start, other.start);
    const end = Math.min(this.endExclusive, other.endExclusive);
    return start < end;
  }
  intersectsOrTouches(other) {
    const start = Math.max(this.start, other.start);
    const end = Math.min(this.endExclusive, other.endExclusive);
    return start <= end;
  }
  isBefore(other) {
    return this.endExclusive <= other.start;
  }
  isAfter(other) {
    return this.start >= other.endExclusive;
  }
  slice(arr) {
    return arr.slice(this.start, this.endExclusive);
  }
  substring(str) {
    return str.substring(this.start, this.endExclusive);
  }
  /**
   * Returns the given value if it is contained in this instance, otherwise the closest value that is contained.
   * The range must not be empty.
   */
  clip(value) {
    if (this.isEmpty) {
      throw new $pb(`Invalid clipping range: ${this.toString()}`);
    }
    return Math.max(this.start, Math.min(this.endExclusive - 1, value));
  }
  /**
   * Returns `r := value + k * length` such that `r` is contained in this range.
   * The range must not be empty.
   *
   * E.g. `[5, 10).clipCyclic(10) === 5`, `[5, 10).clipCyclic(11) === 6` and `[5, 10).clipCyclic(4) === 9`.
   */
  clipCyclic(value) {
    if (this.isEmpty) {
      throw new $pb(`Invalid clipping range: ${this.toString()}`);
    }
    if (value < this.start) {
      return this.endExclusive - (this.start - value) % this.length;
    }
    if (value >= this.endExclusive) {
      return this.start + (value - this.start) % this.length;
    }
    return value;
  }
  map(f) {
    const result = [];
    for (let i = this.start; i < this.endExclusive; i++) {
      result.push(f(i));
    }
    return result;
  }
  forEach(f) {
    for (let i = this.start; i < this.endExclusive; i++) {
      f(i);
    }
  }
};

// out-build/vs/editor/common/core/lineRange.js
var $gu = class _$gu {
  static fromRange(range) {
    return new _$gu(range.startLineNumber, range.endLineNumber);
  }
  static fromRangeInclusive(range) {
    return new _$gu(range.startLineNumber, range.endLineNumber + 1);
  }
  static subtract(a, b) {
    if (!b) {
      return [a];
    }
    if (a.startLineNumber < b.startLineNumber && b.endLineNumberExclusive < a.endLineNumberExclusive) {
      return [
        new _$gu(a.startLineNumber, b.startLineNumber),
        new _$gu(b.endLineNumberExclusive, a.endLineNumberExclusive)
      ];
    } else if (b.startLineNumber <= a.startLineNumber && a.endLineNumberExclusive <= b.endLineNumberExclusive) {
      return [];
    } else if (b.endLineNumberExclusive < a.endLineNumberExclusive) {
      return [new _$gu(Math.max(b.endLineNumberExclusive, a.startLineNumber), a.endLineNumberExclusive)];
    } else {
      return [new _$gu(a.startLineNumber, Math.min(b.startLineNumber, a.endLineNumberExclusive))];
    }
  }
  /**
   * @param lineRanges An array of sorted line ranges.
   */
  static joinMany(lineRanges) {
    if (lineRanges.length === 0) {
      return [];
    }
    let result = new $hu(lineRanges[0].slice());
    for (let i = 1; i < lineRanges.length; i++) {
      result = result.getUnion(new $hu(lineRanges[i].slice()));
    }
    return result.ranges;
  }
  static join(lineRanges) {
    if (lineRanges.length === 0) {
      throw new $pb("lineRanges cannot be empty");
    }
    let startLineNumber = lineRanges[0].startLineNumber;
    let endLineNumberExclusive = lineRanges[0].endLineNumberExclusive;
    for (let i = 1; i < lineRanges.length; i++) {
      startLineNumber = Math.min(startLineNumber, lineRanges[i].startLineNumber);
      endLineNumberExclusive = Math.max(endLineNumberExclusive, lineRanges[i].endLineNumberExclusive);
    }
    return new _$gu(startLineNumber, endLineNumberExclusive);
  }
  static ofLength(startLineNumber, length) {
    return new _$gu(startLineNumber, startLineNumber + length);
  }
  /**
   * @internal
   */
  static deserialize(lineRange) {
    return new _$gu(lineRange[0], lineRange[1]);
  }
  constructor(startLineNumber, endLineNumberExclusive) {
    if (startLineNumber > endLineNumberExclusive) {
      throw new $pb(`startLineNumber ${startLineNumber} cannot be after endLineNumberExclusive ${endLineNumberExclusive}`);
    }
    this.startLineNumber = startLineNumber;
    this.endLineNumberExclusive = endLineNumberExclusive;
  }
  /**
   * Indicates if this line range contains the given line number.
   */
  contains(lineNumber) {
    return this.startLineNumber <= lineNumber && lineNumber < this.endLineNumberExclusive;
  }
  /**
   * Indicates if this line range is empty.
   */
  get isEmpty() {
    return this.startLineNumber === this.endLineNumberExclusive;
  }
  /**
   * Moves this line range by the given offset of line numbers.
   */
  delta(offset) {
    return new _$gu(this.startLineNumber + offset, this.endLineNumberExclusive + offset);
  }
  deltaLength(offset) {
    return new _$gu(this.startLineNumber, this.endLineNumberExclusive + offset);
  }
  /**
   * The number of lines this line range spans.
   */
  get length() {
    return this.endLineNumberExclusive - this.startLineNumber;
  }
  /**
   * Creates a line range that combines this and the given line range.
   */
  join(other) {
    return new _$gu(Math.min(this.startLineNumber, other.startLineNumber), Math.max(this.endLineNumberExclusive, other.endLineNumberExclusive));
  }
  toString() {
    return `[${this.startLineNumber},${this.endLineNumberExclusive})`;
  }
  /**
   * The resulting range is empty if the ranges do not intersect, but touch.
   * If the ranges don't even touch, the result is undefined.
   */
  intersect(other) {
    const startLineNumber = Math.max(this.startLineNumber, other.startLineNumber);
    const endLineNumberExclusive = Math.min(this.endLineNumberExclusive, other.endLineNumberExclusive);
    if (startLineNumber <= endLineNumberExclusive) {
      return new _$gu(startLineNumber, endLineNumberExclusive);
    }
    return void 0;
  }
  intersectsStrict(other) {
    return this.startLineNumber < other.endLineNumberExclusive && other.startLineNumber < this.endLineNumberExclusive;
  }
  overlapOrTouch(other) {
    return this.startLineNumber <= other.endLineNumberExclusive && other.startLineNumber <= this.endLineNumberExclusive;
  }
  equals(b) {
    return this.startLineNumber === b.startLineNumber && this.endLineNumberExclusive === b.endLineNumberExclusive;
  }
  toInclusiveRange() {
    if (this.isEmpty) {
      return null;
    }
    return new $0t(this.startLineNumber, 1, this.endLineNumberExclusive - 1, Number.MAX_SAFE_INTEGER);
  }
  /**
   * @deprecated Using this function is discouraged because it might lead to bugs: The end position is not guaranteed to be a valid position!
  */
  toExclusiveRange() {
    return new $0t(this.startLineNumber, 1, this.endLineNumberExclusive, 1);
  }
  mapToLineArray(f) {
    const result = [];
    for (let lineNumber = this.startLineNumber; lineNumber < this.endLineNumberExclusive; lineNumber++) {
      result.push(f(lineNumber));
    }
    return result;
  }
  forEach(f) {
    for (let lineNumber = this.startLineNumber; lineNumber < this.endLineNumberExclusive; lineNumber++) {
      f(lineNumber);
    }
  }
  /**
   * @internal
   */
  serialize() {
    return [this.startLineNumber, this.endLineNumberExclusive];
  }
  includes(lineNumber) {
    return this.startLineNumber <= lineNumber && lineNumber < this.endLineNumberExclusive;
  }
  /**
   * Converts this 1-based line range to a 0-based offset range (subtracts 1!).
   * @internal
   */
  toOffsetRange() {
    return new $eu(this.startLineNumber - 1, this.endLineNumberExclusive - 1);
  }
};
var $hu = class _$hu {
  constructor(c = []) {
    this.c = c;
  }
  get ranges() {
    return this.c;
  }
  addRange(range) {
    if (range.length === 0) {
      return;
    }
    const joinRangeStartIdx = $wb(this.c, (r) => r.endLineNumberExclusive >= range.startLineNumber);
    const joinRangeEndIdxExclusive = $ub(this.c, (r) => r.startLineNumber <= range.endLineNumberExclusive) + 1;
    if (joinRangeStartIdx === joinRangeEndIdxExclusive) {
      this.c.splice(joinRangeStartIdx, 0, range);
    } else if (joinRangeStartIdx === joinRangeEndIdxExclusive - 1) {
      const joinRange = this.c[joinRangeStartIdx];
      this.c[joinRangeStartIdx] = joinRange.join(range);
    } else {
      const joinRange = this.c[joinRangeStartIdx].join(this.c[joinRangeEndIdxExclusive - 1]).join(range);
      this.c.splice(joinRangeStartIdx, joinRangeEndIdxExclusive - joinRangeStartIdx, joinRange);
    }
  }
  contains(lineNumber) {
    const rangeThatStartsBeforeEnd = $tb(this.c, (r) => r.startLineNumber <= lineNumber);
    return !!rangeThatStartsBeforeEnd && rangeThatStartsBeforeEnd.endLineNumberExclusive > lineNumber;
  }
  intersects(range) {
    const rangeThatStartsBeforeEnd = $tb(this.c, (r) => r.startLineNumber < range.endLineNumberExclusive);
    return !!rangeThatStartsBeforeEnd && rangeThatStartsBeforeEnd.endLineNumberExclusive > range.startLineNumber;
  }
  getUnion(other) {
    if (this.c.length === 0) {
      return other;
    }
    if (other.c.length === 0) {
      return this;
    }
    const result = [];
    let i1 = 0;
    let i2 = 0;
    let current = null;
    while (i1 < this.c.length || i2 < other.c.length) {
      let next = null;
      if (i1 < this.c.length && i2 < other.c.length) {
        const lineRange1 = this.c[i1];
        const lineRange2 = other.c[i2];
        if (lineRange1.startLineNumber < lineRange2.startLineNumber) {
          next = lineRange1;
          i1++;
        } else {
          next = lineRange2;
          i2++;
        }
      } else if (i1 < this.c.length) {
        next = this.c[i1];
        i1++;
      } else {
        next = other.c[i2];
        i2++;
      }
      if (current === null) {
        current = next;
      } else {
        if (current.endLineNumberExclusive >= next.startLineNumber) {
          current = new $gu(current.startLineNumber, Math.max(current.endLineNumberExclusive, next.endLineNumberExclusive));
        } else {
          result.push(current);
          current = next;
        }
      }
    }
    if (current !== null) {
      result.push(current);
    }
    return new _$hu(result);
  }
  /**
   * Subtracts all ranges in this set from `range` and returns the result.
   */
  subtractFrom(range) {
    const joinRangeStartIdx = $wb(this.c, (r) => r.endLineNumberExclusive >= range.startLineNumber);
    const joinRangeEndIdxExclusive = $ub(this.c, (r) => r.startLineNumber <= range.endLineNumberExclusive) + 1;
    if (joinRangeStartIdx === joinRangeEndIdxExclusive) {
      return new _$hu([range]);
    }
    const result = [];
    let startLineNumber = range.startLineNumber;
    for (let i = joinRangeStartIdx; i < joinRangeEndIdxExclusive; i++) {
      const r = this.c[i];
      if (r.startLineNumber > startLineNumber) {
        result.push(new $gu(startLineNumber, r.startLineNumber));
      }
      startLineNumber = r.endLineNumberExclusive;
    }
    if (startLineNumber < range.endLineNumberExclusive) {
      result.push(new $gu(startLineNumber, range.endLineNumberExclusive));
    }
    return new _$hu(result);
  }
  toString() {
    return this.c.map((r) => r.toString()).join(", ");
  }
  getIntersection(other) {
    const result = [];
    let i1 = 0;
    let i2 = 0;
    while (i1 < this.c.length && i2 < other.c.length) {
      const r1 = this.c[i1];
      const r2 = other.c[i2];
      const i = r1.intersect(r2);
      if (i && !i.isEmpty) {
        result.push(i);
      }
      if (r1.endLineNumberExclusive < r2.endLineNumberExclusive) {
        i1++;
      } else {
        i2++;
      }
    }
    return new _$hu(result);
  }
  getWithDelta(value) {
    return new _$hu(this.c.map((r) => r.delta(value)));
  }
};

// out-build/vs/editor/common/core/textLength.js
var $iu = class _$iu {
  static {
    this.zero = new _$iu(0, 0);
  }
  static lengthDiffNonNegative(start, end) {
    if (end.isLessThan(start)) {
      return _$iu.zero;
    }
    if (start.lineCount === end.lineCount) {
      return new _$iu(0, end.columnCount - start.columnCount);
    } else {
      return new _$iu(end.lineCount - start.lineCount, end.columnCount);
    }
  }
  static betweenPositions(position1, position2) {
    if (position1.lineNumber === position2.lineNumber) {
      return new _$iu(0, position2.column - position1.column);
    } else {
      return new _$iu(position2.lineNumber - position1.lineNumber, position2.column - 1);
    }
  }
  static ofRange(range) {
    return _$iu.betweenPositions(range.getStartPosition(), range.getEndPosition());
  }
  static ofText(text) {
    let line = 0;
    let column = 0;
    for (const c of text) {
      if (c === "\n") {
        line++;
        column = 0;
      } else {
        column++;
      }
    }
    return new _$iu(line, column);
  }
  constructor(lineCount, columnCount) {
    this.lineCount = lineCount;
    this.columnCount = columnCount;
  }
  isZero() {
    return this.lineCount === 0 && this.columnCount === 0;
  }
  isLessThan(other) {
    if (this.lineCount !== other.lineCount) {
      return this.lineCount < other.lineCount;
    }
    return this.columnCount < other.columnCount;
  }
  isGreaterThan(other) {
    if (this.lineCount !== other.lineCount) {
      return this.lineCount > other.lineCount;
    }
    return this.columnCount > other.columnCount;
  }
  isGreaterThanOrEqualTo(other) {
    if (this.lineCount !== other.lineCount) {
      return this.lineCount > other.lineCount;
    }
    return this.columnCount >= other.columnCount;
  }
  equals(other) {
    return this.lineCount === other.lineCount && this.columnCount === other.columnCount;
  }
  compare(other) {
    if (this.lineCount !== other.lineCount) {
      return this.lineCount - other.lineCount;
    }
    return this.columnCount - other.columnCount;
  }
  add(other) {
    if (other.lineCount === 0) {
      return new _$iu(this.lineCount, this.columnCount + other.columnCount);
    } else {
      return new _$iu(this.lineCount + other.lineCount, other.columnCount);
    }
  }
  createRange(startPosition) {
    if (this.lineCount === 0) {
      return new $0t(startPosition.lineNumber, startPosition.column, startPosition.lineNumber, startPosition.column + this.columnCount);
    } else {
      return new $0t(startPosition.lineNumber, startPosition.column, startPosition.lineNumber + this.lineCount, this.columnCount + 1);
    }
  }
  toRange() {
    return new $0t(1, 1, this.lineCount + 1, this.columnCount + 1);
  }
  addToPosition(position) {
    if (this.lineCount === 0) {
      return new $9t(position.lineNumber, position.column + this.columnCount);
    } else {
      return new $9t(position.lineNumber + this.lineCount, this.columnCount + 1);
    }
  }
  toString() {
    return `${this.lineCount},${this.columnCount}`;
  }
};

// out-build/vs/editor/common/core/textEdit.js
var $lu = class {
  constructor(range, text) {
    this.range = range;
    this.text = text;
  }
  get isEmpty() {
    return this.range.isEmpty() && this.text.length === 0;
  }
  static equals(first, second) {
    return first.range.equalsRange(second.range) && first.text === second.text;
  }
  toSingleEditOperation() {
    return {
      range: this.range,
      text: this.text
    };
  }
};

// out-build/vs/editor/common/diff/rangeMapping.js
var $qu = class _$qu {
  static inverse(mapping, originalLineCount, modifiedLineCount) {
    const result = [];
    let lastOriginalEndLineNumber = 1;
    let lastModifiedEndLineNumber = 1;
    for (const m of mapping) {
      const r2 = new _$qu(new $gu(lastOriginalEndLineNumber, m.original.startLineNumber), new $gu(lastModifiedEndLineNumber, m.modified.startLineNumber));
      if (!r2.modified.isEmpty) {
        result.push(r2);
      }
      lastOriginalEndLineNumber = m.original.endLineNumberExclusive;
      lastModifiedEndLineNumber = m.modified.endLineNumberExclusive;
    }
    const r = new _$qu(new $gu(lastOriginalEndLineNumber, originalLineCount + 1), new $gu(lastModifiedEndLineNumber, modifiedLineCount + 1));
    if (!r.modified.isEmpty) {
      result.push(r);
    }
    return result;
  }
  static clip(mapping, originalRange, modifiedRange) {
    const result = [];
    for (const m of mapping) {
      const original = m.original.intersect(originalRange);
      const modified = m.modified.intersect(modifiedRange);
      if (original && !original.isEmpty && modified && !modified.isEmpty) {
        result.push(new _$qu(original, modified));
      }
    }
    return result;
  }
  constructor(originalRange, modifiedRange) {
    this.original = originalRange;
    this.modified = modifiedRange;
  }
  toString() {
    return `{${this.original.toString()}->${this.modified.toString()}}`;
  }
  flip() {
    return new _$qu(this.modified, this.original);
  }
  join(other) {
    return new _$qu(this.original.join(other.original), this.modified.join(other.modified));
  }
  get changedLineCount() {
    return Math.max(this.original.length, this.modified.length);
  }
  /**
   * This method assumes that the LineRangeMapping describes a valid diff!
   * I.e. if one range is empty, the other range cannot be the entire document.
   * It avoids various problems when the line range points to non-existing line-numbers.
  */
  toRangeMapping() {
    const origInclusiveRange = this.original.toInclusiveRange();
    const modInclusiveRange = this.modified.toInclusiveRange();
    if (origInclusiveRange && modInclusiveRange) {
      return new $su(origInclusiveRange, modInclusiveRange);
    } else if (this.original.startLineNumber === 1 || this.modified.startLineNumber === 1) {
      if (!(this.modified.startLineNumber === 1 && this.original.startLineNumber === 1)) {
        throw new $pb("not a valid diff");
      }
      return new $su(new $0t(this.original.startLineNumber, 1, this.original.endLineNumberExclusive, 1), new $0t(this.modified.startLineNumber, 1, this.modified.endLineNumberExclusive, 1));
    } else {
      return new $su(new $0t(this.original.startLineNumber - 1, Number.MAX_SAFE_INTEGER, this.original.endLineNumberExclusive - 1, Number.MAX_SAFE_INTEGER), new $0t(this.modified.startLineNumber - 1, Number.MAX_SAFE_INTEGER, this.modified.endLineNumberExclusive - 1, Number.MAX_SAFE_INTEGER));
    }
  }
  /**
   * This method assumes that the LineRangeMapping describes a valid diff!
   * I.e. if one range is empty, the other range cannot be the entire document.
   * It avoids various problems when the line range points to non-existing line-numbers.
  */
  toRangeMapping2(original, modified) {
    if (isValidLineNumber(this.original.endLineNumberExclusive, original) && isValidLineNumber(this.modified.endLineNumberExclusive, modified)) {
      return new $su(new $0t(this.original.startLineNumber, 1, this.original.endLineNumberExclusive, 1), new $0t(this.modified.startLineNumber, 1, this.modified.endLineNumberExclusive, 1));
    }
    if (!this.original.isEmpty && !this.modified.isEmpty) {
      return new $su($0t.fromPositions(new $9t(this.original.startLineNumber, 1), normalizePosition(new $9t(this.original.endLineNumberExclusive - 1, Number.MAX_SAFE_INTEGER), original)), $0t.fromPositions(new $9t(this.modified.startLineNumber, 1), normalizePosition(new $9t(this.modified.endLineNumberExclusive - 1, Number.MAX_SAFE_INTEGER), modified)));
    }
    if (this.original.startLineNumber > 1 && this.modified.startLineNumber > 1) {
      return new $su($0t.fromPositions(normalizePosition(new $9t(this.original.startLineNumber - 1, Number.MAX_SAFE_INTEGER), original), normalizePosition(new $9t(this.original.endLineNumberExclusive - 1, Number.MAX_SAFE_INTEGER), original)), $0t.fromPositions(normalizePosition(new $9t(this.modified.startLineNumber - 1, Number.MAX_SAFE_INTEGER), modified), normalizePosition(new $9t(this.modified.endLineNumberExclusive - 1, Number.MAX_SAFE_INTEGER), modified)));
    }
    throw new $pb();
  }
};
function normalizePosition(position, content) {
  if (position.lineNumber < 1) {
    return new $9t(1, 1);
  }
  if (position.lineNumber > content.length) {
    return new $9t(content.length, content[content.length - 1].length + 1);
  }
  const line = content[position.lineNumber - 1];
  if (position.column > line.length + 1) {
    return new $9t(position.lineNumber, line.length + 1);
  }
  return position;
}
function isValidLineNumber(lineNumber, lines) {
  return lineNumber >= 1 && lineNumber <= lines.length;
}
var $ru = class _$ru extends $qu {
  static fromRangeMappings(rangeMappings) {
    const originalRange = $gu.join(rangeMappings.map((r) => $gu.fromRangeInclusive(r.originalRange)));
    const modifiedRange = $gu.join(rangeMappings.map((r) => $gu.fromRangeInclusive(r.modifiedRange)));
    return new _$ru(originalRange, modifiedRange, rangeMappings);
  }
  constructor(originalRange, modifiedRange, innerChanges) {
    super(originalRange, modifiedRange);
    this.innerChanges = innerChanges;
  }
  flip() {
    return new _$ru(this.modified, this.original, this.innerChanges?.map((c) => c.flip()));
  }
  withInnerChangesFromLineRanges() {
    return new _$ru(this.original, this.modified, [this.toRangeMapping()]);
  }
};
var $su = class _$su {
  static assertSorted(rangeMappings) {
    for (let i = 1; i < rangeMappings.length; i++) {
      const previous = rangeMappings[i - 1];
      const current = rangeMappings[i];
      if (!(previous.originalRange.getEndPosition().isBeforeOrEqual(current.originalRange.getStartPosition()) && previous.modifiedRange.getEndPosition().isBeforeOrEqual(current.modifiedRange.getStartPosition()))) {
        throw new $pb("Range mappings must be sorted");
      }
    }
  }
  constructor(originalRange, modifiedRange) {
    this.originalRange = originalRange;
    this.modifiedRange = modifiedRange;
  }
  toString() {
    return `{${this.originalRange.toString()}->${this.modifiedRange.toString()}}`;
  }
  flip() {
    return new _$su(this.modifiedRange, this.originalRange);
  }
  /**
   * Creates a single text edit that describes the change from the original to the modified text.
  */
  toTextEdit(modified) {
    const newText = modified.getValueOfRange(this.modifiedRange);
    return new $lu(this.originalRange, newText);
  }
};

// out-build/vs/editor/common/diff/legacyLinesDiffComputer.js
var MINIMUM_MATCHING_CHARACTER_LENGTH = 3;
var $vu = class {
  computeDiff(originalLines, modifiedLines, options) {
    const diffComputer = new $wu(originalLines, modifiedLines, {
      maxComputationTime: options.maxComputationTimeMs,
      shouldIgnoreTrimWhitespace: options.ignoreTrimWhitespace,
      shouldComputeCharChanges: true,
      shouldMakePrettyDiff: true,
      shouldPostProcessCharChanges: true
    });
    const result = diffComputer.computeDiff();
    const changes = [];
    let lastChange = null;
    for (const c of result.changes) {
      let originalRange;
      if (c.originalEndLineNumber === 0) {
        originalRange = new $gu(c.originalStartLineNumber + 1, c.originalStartLineNumber + 1);
      } else {
        originalRange = new $gu(c.originalStartLineNumber, c.originalEndLineNumber + 1);
      }
      let modifiedRange;
      if (c.modifiedEndLineNumber === 0) {
        modifiedRange = new $gu(c.modifiedStartLineNumber + 1, c.modifiedStartLineNumber + 1);
      } else {
        modifiedRange = new $gu(c.modifiedStartLineNumber, c.modifiedEndLineNumber + 1);
      }
      let change = new $ru(originalRange, modifiedRange, c.charChanges?.map((c2) => new $su(new $0t(c2.originalStartLineNumber, c2.originalStartColumn, c2.originalEndLineNumber, c2.originalEndColumn), new $0t(c2.modifiedStartLineNumber, c2.modifiedStartColumn, c2.modifiedEndLineNumber, c2.modifiedEndColumn))));
      if (lastChange) {
        if (lastChange.modified.endLineNumberExclusive === change.modified.startLineNumber || lastChange.original.endLineNumberExclusive === change.original.startLineNumber) {
          change = new $ru(lastChange.original.join(change.original), lastChange.modified.join(change.modified), lastChange.innerChanges && change.innerChanges ? lastChange.innerChanges.concat(change.innerChanges) : void 0);
          changes.pop();
        }
      }
      changes.push(change);
      lastChange = change;
    }
    $od(() => {
      return $pd(changes, (m1, m2) => m2.original.startLineNumber - m1.original.endLineNumberExclusive === m2.modified.startLineNumber - m1.modified.endLineNumberExclusive && // There has to be an unchanged line in between (otherwise both diffs should have been joined)
      m1.original.endLineNumberExclusive < m2.original.startLineNumber && m1.modified.endLineNumberExclusive < m2.modified.startLineNumber);
    });
    return new $tu(changes, [], result.quitEarly);
  }
};
function computeDiff(originalSequence, modifiedSequence, continueProcessingPredicate, pretty) {
  const diffAlgo = new $du(originalSequence, modifiedSequence, continueProcessingPredicate);
  return diffAlgo.ComputeDiff(pretty);
}
var LineSequence = class {
  constructor(lines) {
    const startColumns = [];
    const endColumns = [];
    for (let i = 0, length = lines.length; i < length; i++) {
      startColumns[i] = getFirstNonBlankColumn(lines[i], 1);
      endColumns[i] = getLastNonBlankColumn(lines[i], 1);
    }
    this.lines = lines;
    this.a = startColumns;
    this.b = endColumns;
  }
  getElements() {
    const elements = [];
    for (let i = 0, len = this.lines.length; i < len; i++) {
      elements[i] = this.lines[i].substring(this.a[i] - 1, this.b[i] - 1);
    }
    return elements;
  }
  getStrictElement(index) {
    return this.lines[index];
  }
  getStartLineNumber(i) {
    return i + 1;
  }
  getEndLineNumber(i) {
    return i + 1;
  }
  createCharSequence(shouldIgnoreTrimWhitespace, startIndex, endIndex) {
    const charCodes = [];
    const lineNumbers = [];
    const columns = [];
    let len = 0;
    for (let index = startIndex; index <= endIndex; index++) {
      const lineContent = this.lines[index];
      const startColumn = shouldIgnoreTrimWhitespace ? this.a[index] : 1;
      const endColumn = shouldIgnoreTrimWhitespace ? this.b[index] : lineContent.length + 1;
      for (let col = startColumn; col < endColumn; col++) {
        charCodes[len] = lineContent.charCodeAt(col - 1);
        lineNumbers[len] = index + 1;
        columns[len] = col;
        len++;
      }
      if (!shouldIgnoreTrimWhitespace && index < endIndex) {
        charCodes[len] = 10;
        lineNumbers[len] = index + 1;
        columns[len] = lineContent.length + 1;
        len++;
      }
    }
    return new CharSequence(charCodes, lineNumbers, columns);
  }
};
var CharSequence = class {
  constructor(charCodes, lineNumbers, columns) {
    this.a = charCodes;
    this.b = lineNumbers;
    this.d = columns;
  }
  toString() {
    return "[" + this.a.map((s, idx) => (s === 10 ? "\\n" : String.fromCharCode(s)) + `-(${this.b[idx]},${this.d[idx]})`).join(", ") + "]";
  }
  e(index, arr) {
    if (index < 0 || index >= arr.length) {
      throw new Error(`Illegal index`);
    }
  }
  getElements() {
    return this.a;
  }
  getStartLineNumber(i) {
    if (i > 0 && i === this.b.length) {
      return this.getEndLineNumber(i - 1);
    }
    this.e(i, this.b);
    return this.b[i];
  }
  getEndLineNumber(i) {
    if (i === -1) {
      return this.getStartLineNumber(i + 1);
    }
    this.e(i, this.b);
    if (this.a[i] === 10) {
      return this.b[i] + 1;
    }
    return this.b[i];
  }
  getStartColumn(i) {
    if (i > 0 && i === this.d.length) {
      return this.getEndColumn(i - 1);
    }
    this.e(i, this.d);
    return this.d[i];
  }
  getEndColumn(i) {
    if (i === -1) {
      return this.getStartColumn(i + 1);
    }
    this.e(i, this.d);
    if (this.a[i] === 10) {
      return 1;
    }
    return this.d[i] + 1;
  }
};
var CharChange = class _CharChange {
  constructor(originalStartLineNumber, originalStartColumn, originalEndLineNumber, originalEndColumn, modifiedStartLineNumber, modifiedStartColumn, modifiedEndLineNumber, modifiedEndColumn) {
    this.originalStartLineNumber = originalStartLineNumber;
    this.originalStartColumn = originalStartColumn;
    this.originalEndLineNumber = originalEndLineNumber;
    this.originalEndColumn = originalEndColumn;
    this.modifiedStartLineNumber = modifiedStartLineNumber;
    this.modifiedStartColumn = modifiedStartColumn;
    this.modifiedEndLineNumber = modifiedEndLineNumber;
    this.modifiedEndColumn = modifiedEndColumn;
  }
  static createFromDiffChange(diffChange, originalCharSequence, modifiedCharSequence) {
    const originalStartLineNumber = originalCharSequence.getStartLineNumber(diffChange.originalStart);
    const originalStartColumn = originalCharSequence.getStartColumn(diffChange.originalStart);
    const originalEndLineNumber = originalCharSequence.getEndLineNumber(diffChange.originalStart + diffChange.originalLength - 1);
    const originalEndColumn = originalCharSequence.getEndColumn(diffChange.originalStart + diffChange.originalLength - 1);
    const modifiedStartLineNumber = modifiedCharSequence.getStartLineNumber(diffChange.modifiedStart);
    const modifiedStartColumn = modifiedCharSequence.getStartColumn(diffChange.modifiedStart);
    const modifiedEndLineNumber = modifiedCharSequence.getEndLineNumber(diffChange.modifiedStart + diffChange.modifiedLength - 1);
    const modifiedEndColumn = modifiedCharSequence.getEndColumn(diffChange.modifiedStart + diffChange.modifiedLength - 1);
    return new _CharChange(originalStartLineNumber, originalStartColumn, originalEndLineNumber, originalEndColumn, modifiedStartLineNumber, modifiedStartColumn, modifiedEndLineNumber, modifiedEndColumn);
  }
};
function postProcessCharChanges(rawChanges) {
  if (rawChanges.length <= 1) {
    return rawChanges;
  }
  const result = [rawChanges[0]];
  let prevChange = result[0];
  for (let i = 1, len = rawChanges.length; i < len; i++) {
    const currChange = rawChanges[i];
    const originalMatchingLength = currChange.originalStart - (prevChange.originalStart + prevChange.originalLength);
    const modifiedMatchingLength = currChange.modifiedStart - (prevChange.modifiedStart + prevChange.modifiedLength);
    const matchingLength = Math.min(originalMatchingLength, modifiedMatchingLength);
    if (matchingLength < MINIMUM_MATCHING_CHARACTER_LENGTH) {
      prevChange.originalLength = currChange.originalStart + currChange.originalLength - prevChange.originalStart;
      prevChange.modifiedLength = currChange.modifiedStart + currChange.modifiedLength - prevChange.modifiedStart;
    } else {
      result.push(currChange);
      prevChange = currChange;
    }
  }
  return result;
}
var LineChange = class _LineChange {
  constructor(originalStartLineNumber, originalEndLineNumber, modifiedStartLineNumber, modifiedEndLineNumber, charChanges) {
    this.originalStartLineNumber = originalStartLineNumber;
    this.originalEndLineNumber = originalEndLineNumber;
    this.modifiedStartLineNumber = modifiedStartLineNumber;
    this.modifiedEndLineNumber = modifiedEndLineNumber;
    this.charChanges = charChanges;
  }
  static createFromDiffResult(shouldIgnoreTrimWhitespace, diffChange, originalLineSequence, modifiedLineSequence, continueCharDiff, shouldComputeCharChanges, shouldPostProcessCharChanges) {
    let originalStartLineNumber;
    let originalEndLineNumber;
    let modifiedStartLineNumber;
    let modifiedEndLineNumber;
    let charChanges = void 0;
    if (diffChange.originalLength === 0) {
      originalStartLineNumber = originalLineSequence.getStartLineNumber(diffChange.originalStart) - 1;
      originalEndLineNumber = 0;
    } else {
      originalStartLineNumber = originalLineSequence.getStartLineNumber(diffChange.originalStart);
      originalEndLineNumber = originalLineSequence.getEndLineNumber(diffChange.originalStart + diffChange.originalLength - 1);
    }
    if (diffChange.modifiedLength === 0) {
      modifiedStartLineNumber = modifiedLineSequence.getStartLineNumber(diffChange.modifiedStart) - 1;
      modifiedEndLineNumber = 0;
    } else {
      modifiedStartLineNumber = modifiedLineSequence.getStartLineNumber(diffChange.modifiedStart);
      modifiedEndLineNumber = modifiedLineSequence.getEndLineNumber(diffChange.modifiedStart + diffChange.modifiedLength - 1);
    }
    if (shouldComputeCharChanges && diffChange.originalLength > 0 && diffChange.originalLength < 20 && diffChange.modifiedLength > 0 && diffChange.modifiedLength < 20 && continueCharDiff()) {
      const originalCharSequence = originalLineSequence.createCharSequence(shouldIgnoreTrimWhitespace, diffChange.originalStart, diffChange.originalStart + diffChange.originalLength - 1);
      const modifiedCharSequence = modifiedLineSequence.createCharSequence(shouldIgnoreTrimWhitespace, diffChange.modifiedStart, diffChange.modifiedStart + diffChange.modifiedLength - 1);
      if (originalCharSequence.getElements().length > 0 && modifiedCharSequence.getElements().length > 0) {
        let rawChanges = computeDiff(originalCharSequence, modifiedCharSequence, continueCharDiff, true).changes;
        if (shouldPostProcessCharChanges) {
          rawChanges = postProcessCharChanges(rawChanges);
        }
        charChanges = [];
        for (let i = 0, length = rawChanges.length; i < length; i++) {
          charChanges.push(CharChange.createFromDiffChange(rawChanges[i], originalCharSequence, modifiedCharSequence));
        }
      }
    }
    return new _LineChange(originalStartLineNumber, originalEndLineNumber, modifiedStartLineNumber, modifiedEndLineNumber, charChanges);
  }
};
var $wu = class {
  constructor(originalLines, modifiedLines, opts) {
    this.a = opts.shouldComputeCharChanges;
    this.b = opts.shouldPostProcessCharChanges;
    this.d = opts.shouldIgnoreTrimWhitespace;
    this.e = opts.shouldMakePrettyDiff;
    this.f = originalLines;
    this.g = modifiedLines;
    this.h = new LineSequence(originalLines);
    this.j = new LineSequence(modifiedLines);
    this.k = createContinueProcessingPredicate(opts.maxComputationTime);
    this.l = createContinueProcessingPredicate(opts.maxComputationTime === 0 ? 0 : Math.min(opts.maxComputationTime, 5e3));
  }
  computeDiff() {
    if (this.h.lines.length === 1 && this.h.lines[0].length === 0) {
      if (this.j.lines.length === 1 && this.j.lines[0].length === 0) {
        return {
          quitEarly: false,
          changes: []
        };
      }
      return {
        quitEarly: false,
        changes: [{
          originalStartLineNumber: 1,
          originalEndLineNumber: 1,
          modifiedStartLineNumber: 1,
          modifiedEndLineNumber: this.j.lines.length,
          charChanges: void 0
        }]
      };
    }
    if (this.j.lines.length === 1 && this.j.lines[0].length === 0) {
      return {
        quitEarly: false,
        changes: [{
          originalStartLineNumber: 1,
          originalEndLineNumber: this.h.lines.length,
          modifiedStartLineNumber: 1,
          modifiedEndLineNumber: 1,
          charChanges: void 0
        }]
      };
    }
    const diffResult = computeDiff(this.h, this.j, this.k, this.e);
    const rawChanges = diffResult.changes;
    const quitEarly = diffResult.quitEarly;
    if (this.d) {
      const lineChanges = [];
      for (let i = 0, length = rawChanges.length; i < length; i++) {
        lineChanges.push(LineChange.createFromDiffResult(this.d, rawChanges[i], this.h, this.j, this.l, this.a, this.b));
      }
      return {
        quitEarly,
        changes: lineChanges
      };
    }
    const result = [];
    let originalLineIndex = 0;
    let modifiedLineIndex = 0;
    for (let i = -1, len = rawChanges.length; i < len; i++) {
      const nextChange = i + 1 < len ? rawChanges[i + 1] : null;
      const originalStop = nextChange ? nextChange.originalStart : this.f.length;
      const modifiedStop = nextChange ? nextChange.modifiedStart : this.g.length;
      while (originalLineIndex < originalStop && modifiedLineIndex < modifiedStop) {
        const originalLine = this.f[originalLineIndex];
        const modifiedLine = this.g[modifiedLineIndex];
        if (originalLine !== modifiedLine) {
          {
            let originalStartColumn = getFirstNonBlankColumn(originalLine, 1);
            let modifiedStartColumn = getFirstNonBlankColumn(modifiedLine, 1);
            while (originalStartColumn > 1 && modifiedStartColumn > 1) {
              const originalChar = originalLine.charCodeAt(originalStartColumn - 2);
              const modifiedChar = modifiedLine.charCodeAt(modifiedStartColumn - 2);
              if (originalChar !== modifiedChar) {
                break;
              }
              originalStartColumn--;
              modifiedStartColumn--;
            }
            if (originalStartColumn > 1 || modifiedStartColumn > 1) {
              this.m(result, originalLineIndex + 1, 1, originalStartColumn, modifiedLineIndex + 1, 1, modifiedStartColumn);
            }
          }
          {
            let originalEndColumn = getLastNonBlankColumn(originalLine, 1);
            let modifiedEndColumn = getLastNonBlankColumn(modifiedLine, 1);
            const originalMaxColumn = originalLine.length + 1;
            const modifiedMaxColumn = modifiedLine.length + 1;
            while (originalEndColumn < originalMaxColumn && modifiedEndColumn < modifiedMaxColumn) {
              const originalChar = originalLine.charCodeAt(originalEndColumn - 1);
              const modifiedChar = originalLine.charCodeAt(modifiedEndColumn - 1);
              if (originalChar !== modifiedChar) {
                break;
              }
              originalEndColumn++;
              modifiedEndColumn++;
            }
            if (originalEndColumn < originalMaxColumn || modifiedEndColumn < modifiedMaxColumn) {
              this.m(result, originalLineIndex + 1, originalEndColumn, originalMaxColumn, modifiedLineIndex + 1, modifiedEndColumn, modifiedMaxColumn);
            }
          }
        }
        originalLineIndex++;
        modifiedLineIndex++;
      }
      if (nextChange) {
        result.push(LineChange.createFromDiffResult(this.d, nextChange, this.h, this.j, this.l, this.a, this.b));
        originalLineIndex += nextChange.originalLength;
        modifiedLineIndex += nextChange.modifiedLength;
      }
    }
    return {
      quitEarly,
      changes: result
    };
  }
  m(result, originalLineNumber, originalStartColumn, originalEndColumn, modifiedLineNumber, modifiedStartColumn, modifiedEndColumn) {
    if (this.n(result, originalLineNumber, originalStartColumn, originalEndColumn, modifiedLineNumber, modifiedStartColumn, modifiedEndColumn)) {
      return;
    }
    let charChanges = void 0;
    if (this.a) {
      charChanges = [new CharChange(originalLineNumber, originalStartColumn, originalLineNumber, originalEndColumn, modifiedLineNumber, modifiedStartColumn, modifiedLineNumber, modifiedEndColumn)];
    }
    result.push(new LineChange(originalLineNumber, originalLineNumber, modifiedLineNumber, modifiedLineNumber, charChanges));
  }
  n(result, originalLineNumber, originalStartColumn, originalEndColumn, modifiedLineNumber, modifiedStartColumn, modifiedEndColumn) {
    const len = result.length;
    if (len === 0) {
      return false;
    }
    const prevChange = result[len - 1];
    if (prevChange.originalEndLineNumber === 0 || prevChange.modifiedEndLineNumber === 0) {
      return false;
    }
    if (prevChange.originalEndLineNumber === originalLineNumber && prevChange.modifiedEndLineNumber === modifiedLineNumber) {
      if (this.a && prevChange.charChanges) {
        prevChange.charChanges.push(new CharChange(originalLineNumber, originalStartColumn, originalLineNumber, originalEndColumn, modifiedLineNumber, modifiedStartColumn, modifiedLineNumber, modifiedEndColumn));
      }
      return true;
    }
    if (prevChange.originalEndLineNumber + 1 === originalLineNumber && prevChange.modifiedEndLineNumber + 1 === modifiedLineNumber) {
      prevChange.originalEndLineNumber = originalLineNumber;
      prevChange.modifiedEndLineNumber = modifiedLineNumber;
      if (this.a && prevChange.charChanges) {
        prevChange.charChanges.push(new CharChange(originalLineNumber, originalStartColumn, originalLineNumber, originalEndColumn, modifiedLineNumber, modifiedStartColumn, modifiedLineNumber, modifiedEndColumn));
      }
      return true;
    }
    return false;
  }
};
function getFirstNonBlankColumn(txt, defaultValue) {
  const r = $Mf(txt);
  if (r === -1) {
    return defaultValue;
  }
  return r + 1;
}
function getLastNonBlankColumn(txt, defaultValue) {
  const r = $Of(txt);
  if (r === -1) {
    return defaultValue;
  }
  return r + 2;
}
function createContinueProcessingPredicate(maximumRuntime) {
  if (maximumRuntime === 0) {
    return () => true;
  }
  const startTime = Date.now();
  return () => {
    return Date.now() - startTime < maximumRuntime;
  };
}

// out-build/vs/editor/common/diff/defaultLinesDiffComputer/algorithms/diffAlgorithm.js
var $Y5 = class _$Y5 {
  static trivial(seq1, seq2) {
    return new _$Y5([new $Z5($eu.ofLength(seq1.length), $eu.ofLength(seq2.length))], false);
  }
  static trivialTimedOut(seq1, seq2) {
    return new _$Y5([new $Z5($eu.ofLength(seq1.length), $eu.ofLength(seq2.length))], true);
  }
  constructor(diffs, hitTimeout) {
    this.diffs = diffs;
    this.hitTimeout = hitTimeout;
  }
};
var $Z5 = class _$Z5 {
  static invert(sequenceDiffs, doc1Length) {
    const result = [];
    $Ob(sequenceDiffs, (a, b) => {
      result.push(_$Z5.fromOffsetPairs(a ? a.getEndExclusives() : $15.zero, b ? b.getStarts() : new $15(doc1Length, (a ? a.seq2Range.endExclusive - a.seq1Range.endExclusive : 0) + doc1Length)));
    });
    return result;
  }
  static fromOffsetPairs(start, endExclusive) {
    return new _$Z5(new $eu(start.offset1, endExclusive.offset1), new $eu(start.offset2, endExclusive.offset2));
  }
  static assertSorted(sequenceDiffs) {
    let last = void 0;
    for (const cur of sequenceDiffs) {
      if (last) {
        if (!(last.seq1Range.endExclusive <= cur.seq1Range.start && last.seq2Range.endExclusive <= cur.seq2Range.start)) {
          throw new $pb("Sequence diffs must be sorted");
        }
      }
      last = cur;
    }
  }
  constructor(seq1Range, seq2Range) {
    this.seq1Range = seq1Range;
    this.seq2Range = seq2Range;
  }
  swap() {
    return new _$Z5(this.seq2Range, this.seq1Range);
  }
  toString() {
    return `${this.seq1Range} <-> ${this.seq2Range}`;
  }
  join(other) {
    return new _$Z5(this.seq1Range.join(other.seq1Range), this.seq2Range.join(other.seq2Range));
  }
  delta(offset) {
    if (offset === 0) {
      return this;
    }
    return new _$Z5(this.seq1Range.delta(offset), this.seq2Range.delta(offset));
  }
  deltaStart(offset) {
    if (offset === 0) {
      return this;
    }
    return new _$Z5(this.seq1Range.deltaStart(offset), this.seq2Range.deltaStart(offset));
  }
  deltaEnd(offset) {
    if (offset === 0) {
      return this;
    }
    return new _$Z5(this.seq1Range.deltaEnd(offset), this.seq2Range.deltaEnd(offset));
  }
  intersectsOrTouches(other) {
    return this.seq1Range.intersectsOrTouches(other.seq1Range) || this.seq2Range.intersectsOrTouches(other.seq2Range);
  }
  intersect(other) {
    const i1 = this.seq1Range.intersect(other.seq1Range);
    const i2 = this.seq2Range.intersect(other.seq2Range);
    if (!i1 || !i2) {
      return void 0;
    }
    return new _$Z5(i1, i2);
  }
  getStarts() {
    return new $15(this.seq1Range.start, this.seq2Range.start);
  }
  getEndExclusives() {
    return new $15(this.seq1Range.endExclusive, this.seq2Range.endExclusive);
  }
};
var $15 = class _$15 {
  static {
    this.zero = new _$15(0, 0);
  }
  static {
    this.max = new _$15(Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
  }
  constructor(offset1, offset2) {
    this.offset1 = offset1;
    this.offset2 = offset2;
  }
  toString() {
    return `${this.offset1} <-> ${this.offset2}`;
  }
  delta(offset) {
    if (offset === 0) {
      return this;
    }
    return new _$15(this.offset1 + offset, this.offset2 + offset);
  }
  equals(other) {
    return this.offset1 === other.offset1 && this.offset2 === other.offset2;
  }
};
var $25 = class _$25 {
  static {
    this.instance = new _$25();
  }
  isValid() {
    return true;
  }
};
var $35 = class {
  constructor(e) {
    this.e = e;
    this.c = Date.now();
    this.d = true;
    if (e <= 0) {
      throw new $pb("timeout must be positive");
    }
  }
  // Recommendation: Set a log-point `{this.disable()}` in the body
  isValid() {
    const valid = Date.now() - this.c < this.e;
    if (!valid && this.d) {
      this.d = false;
    }
    return this.d;
  }
  disable() {
    this.e = Number.MAX_SAFE_INTEGER;
    this.isValid = () => true;
    this.d = true;
  }
};

// out-build/vs/editor/common/diff/defaultLinesDiffComputer/utils.js
var $45 = class {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.a = [];
    this.a = new Array(width * height);
  }
  get(x, y) {
    return this.a[x + y * this.width];
  }
  set(x, y, value) {
    this.a[x + y * this.width] = value;
  }
};
function $55(charCode) {
  return charCode === 32 || charCode === 9;
}
var $65 = class _$65 {
  static {
    this.a = /* @__PURE__ */ new Map();
  }
  static b(chr) {
    let key = this.a.get(chr);
    if (key === void 0) {
      key = this.a.size;
      this.a.set(chr, key);
    }
    return key;
  }
  constructor(range, lines, source) {
    this.range = range;
    this.lines = lines;
    this.source = source;
    this.d = [];
    let counter = 0;
    for (let i = range.startLineNumber - 1; i < range.endLineNumberExclusive - 1; i++) {
      const line = lines[i];
      for (let j = 0; j < line.length; j++) {
        counter++;
        const chr = line[j];
        const key2 = _$65.b(chr);
        this.d[key2] = (this.d[key2] || 0) + 1;
      }
      counter++;
      const key = _$65.b("\n");
      this.d[key] = (this.d[key] || 0) + 1;
    }
    this.c = counter;
  }
  computeSimilarity(other) {
    let sumDifferences = 0;
    const maxLength = Math.max(this.d.length, other.d.length);
    for (let i = 0; i < maxLength; i++) {
      sumDifferences += Math.abs((this.d[i] ?? 0) - (other.d[i] ?? 0));
    }
    return 1 - sumDifferences / (this.c + other.c);
  }
};

// out-build/vs/editor/common/diff/defaultLinesDiffComputer/algorithms/dynamicProgrammingDiffing.js
var $75 = class {
  compute(sequence1, sequence2, timeout = $25.instance, equalityScore) {
    if (sequence1.length === 0 || sequence2.length === 0) {
      return $Y5.trivial(sequence1, sequence2);
    }
    const lcsLengths = new $45(sequence1.length, sequence2.length);
    const directions = new $45(sequence1.length, sequence2.length);
    const lengths = new $45(sequence1.length, sequence2.length);
    for (let s12 = 0; s12 < sequence1.length; s12++) {
      for (let s22 = 0; s22 < sequence2.length; s22++) {
        if (!timeout.isValid()) {
          return $Y5.trivialTimedOut(sequence1, sequence2);
        }
        const horizontalLen = s12 === 0 ? 0 : lcsLengths.get(s12 - 1, s22);
        const verticalLen = s22 === 0 ? 0 : lcsLengths.get(s12, s22 - 1);
        let extendedSeqScore;
        if (sequence1.getElement(s12) === sequence2.getElement(s22)) {
          if (s12 === 0 || s22 === 0) {
            extendedSeqScore = 0;
          } else {
            extendedSeqScore = lcsLengths.get(s12 - 1, s22 - 1);
          }
          if (s12 > 0 && s22 > 0 && directions.get(s12 - 1, s22 - 1) === 3) {
            extendedSeqScore += lengths.get(s12 - 1, s22 - 1);
          }
          extendedSeqScore += equalityScore ? equalityScore(s12, s22) : 1;
        } else {
          extendedSeqScore = -1;
        }
        const newValue = Math.max(horizontalLen, verticalLen, extendedSeqScore);
        if (newValue === extendedSeqScore) {
          const prevLen = s12 > 0 && s22 > 0 ? lengths.get(s12 - 1, s22 - 1) : 0;
          lengths.set(s12, s22, prevLen + 1);
          directions.set(s12, s22, 3);
        } else if (newValue === horizontalLen) {
          lengths.set(s12, s22, 0);
          directions.set(s12, s22, 1);
        } else if (newValue === verticalLen) {
          lengths.set(s12, s22, 0);
          directions.set(s12, s22, 2);
        }
        lcsLengths.set(s12, s22, newValue);
      }
    }
    const result = [];
    let lastAligningPosS1 = sequence1.length;
    let lastAligningPosS2 = sequence2.length;
    function reportDecreasingAligningPositions(s12, s22) {
      if (s12 + 1 !== lastAligningPosS1 || s22 + 1 !== lastAligningPosS2) {
        result.push(new $Z5(new $eu(s12 + 1, lastAligningPosS1), new $eu(s22 + 1, lastAligningPosS2)));
      }
      lastAligningPosS1 = s12;
      lastAligningPosS2 = s22;
    }
    let s1 = sequence1.length - 1;
    let s2 = sequence2.length - 1;
    while (s1 >= 0 && s2 >= 0) {
      if (directions.get(s1, s2) === 3) {
        reportDecreasingAligningPositions(s1, s2);
        s1--;
        s2--;
      } else {
        if (directions.get(s1, s2) === 1) {
          s1--;
        } else {
          s2--;
        }
      }
    }
    reportDecreasingAligningPositions(-1, -1);
    result.reverse();
    return new $Y5(result, false);
  }
};

// out-build/vs/editor/common/diff/defaultLinesDiffComputer/algorithms/myersDiffAlgorithm.js
var $85 = class {
  compute(seq1, seq2, timeout = $25.instance) {
    if (seq1.length === 0 || seq2.length === 0) {
      return $Y5.trivial(seq1, seq2);
    }
    const seqX = seq1;
    const seqY = seq2;
    function getXAfterSnake(x, y) {
      while (x < seqX.length && y < seqY.length && seqX.getElement(x) === seqY.getElement(y)) {
        x++;
        y++;
      }
      return x;
    }
    let d = 0;
    const V = new FastInt32Array();
    V.set(0, getXAfterSnake(0, 0));
    const paths = new FastArrayNegativeIndices();
    paths.set(0, V.get(0) === 0 ? null : new SnakePath(null, 0, 0, V.get(0)));
    let k = 0;
    loop: while (true) {
      d++;
      if (!timeout.isValid()) {
        return $Y5.trivialTimedOut(seqX, seqY);
      }
      const lowerBound = -Math.min(d, seqY.length + d % 2);
      const upperBound = Math.min(d, seqX.length + d % 2);
      for (k = lowerBound; k <= upperBound; k += 2) {
        let step = 0;
        const maxXofDLineTop = k === upperBound ? -1 : V.get(k + 1);
        const maxXofDLineLeft = k === lowerBound ? -1 : V.get(k - 1) + 1;
        step++;
        const x = Math.min(Math.max(maxXofDLineTop, maxXofDLineLeft), seqX.length);
        const y = x - k;
        step++;
        if (x > seqX.length || y > seqY.length) {
          continue;
        }
        const newMaxX = getXAfterSnake(x, y);
        V.set(k, newMaxX);
        const lastPath = x === maxXofDLineTop ? paths.get(k + 1) : paths.get(k - 1);
        paths.set(k, newMaxX !== x ? new SnakePath(lastPath, x, y, newMaxX - x) : lastPath);
        if (V.get(k) === seqX.length && V.get(k) - k === seqY.length) {
          break loop;
        }
      }
    }
    let path = paths.get(k);
    const result = [];
    let lastAligningPosS1 = seqX.length;
    let lastAligningPosS2 = seqY.length;
    while (true) {
      const endX = path ? path.x + path.length : 0;
      const endY = path ? path.y + path.length : 0;
      if (endX !== lastAligningPosS1 || endY !== lastAligningPosS2) {
        result.push(new $Z5(new $eu(endX, lastAligningPosS1), new $eu(endY, lastAligningPosS2)));
      }
      if (!path) {
        break;
      }
      lastAligningPosS1 = path.x;
      lastAligningPosS2 = path.y;
      path = path.prev;
    }
    result.reverse();
    return new $Y5(result, false);
  }
};
var SnakePath = class {
  constructor(prev, x, y, length) {
    this.prev = prev;
    this.x = x;
    this.y = y;
    this.length = length;
  }
};
var FastInt32Array = class {
  constructor() {
    this.a = new Int32Array(10);
    this.b = new Int32Array(10);
  }
  get(idx) {
    if (idx < 0) {
      idx = -idx - 1;
      return this.b[idx];
    } else {
      return this.a[idx];
    }
  }
  set(idx, value) {
    if (idx < 0) {
      idx = -idx - 1;
      if (idx >= this.b.length) {
        const arr = this.b;
        this.b = new Int32Array(arr.length * 2);
        this.b.set(arr);
      }
      this.b[idx] = value;
    } else {
      if (idx >= this.a.length) {
        const arr = this.a;
        this.a = new Int32Array(arr.length * 2);
        this.a.set(arr);
      }
      this.a[idx] = value;
    }
  }
};
var FastArrayNegativeIndices = class {
  constructor() {
    this.a = [];
    this.b = [];
  }
  get(idx) {
    if (idx < 0) {
      idx = -idx - 1;
      return this.b[idx];
    } else {
      return this.a[idx];
    }
  }
  set(idx, value) {
    if (idx < 0) {
      idx = -idx - 1;
      this.b[idx] = value;
    } else {
      this.a[idx] = value;
    }
  }
};

// out-build/vs/editor/common/diff/defaultLinesDiffComputer/linesSliceCharSequence.js
var $95 = class {
  constructor(lines, g, considerWhitespaceChanges) {
    this.lines = lines;
    this.g = g;
    this.considerWhitespaceChanges = considerWhitespaceChanges;
    this.b = [];
    this.c = [];
    this.d = [];
    this.f = [];
    this.c.push(0);
    for (let lineNumber = this.g.startLineNumber; lineNumber <= this.g.endLineNumber; lineNumber++) {
      let line = lines[lineNumber - 1];
      let lineStartOffset = 0;
      if (lineNumber === this.g.startLineNumber && this.g.startColumn > 1) {
        lineStartOffset = this.g.startColumn - 1;
        line = line.substring(lineStartOffset);
      }
      this.d.push(lineStartOffset);
      let trimmedWsLength = 0;
      if (!considerWhitespaceChanges) {
        const trimmedStartLine = line.trimStart();
        trimmedWsLength = line.length - trimmedStartLine.length;
        line = trimmedStartLine.trimEnd();
      }
      this.f.push(trimmedWsLength);
      const lineLength = lineNumber === this.g.endLineNumber ? Math.min(this.g.endColumn - 1 - lineStartOffset - trimmedWsLength, line.length) : line.length;
      for (let i = 0; i < lineLength; i++) {
        this.b.push(line.charCodeAt(i));
      }
      if (lineNumber < this.g.endLineNumber) {
        this.b.push("\n".charCodeAt(0));
        this.c.push(this.b.length);
      }
    }
  }
  toString() {
    return `Slice: "${this.text}"`;
  }
  get text() {
    return this.getText(new $eu(0, this.length));
  }
  getText(range) {
    return this.b.slice(range.start, range.endExclusive).map((e) => String.fromCharCode(e)).join("");
  }
  getElement(offset) {
    return this.b[offset];
  }
  get length() {
    return this.b.length;
  }
  getBoundaryScore(length) {
    const prevCategory = getCategory(length > 0 ? this.b[length - 1] : -1);
    const nextCategory = getCategory(length < this.b.length ? this.b[length] : -1);
    if (prevCategory === 7 && nextCategory === 8) {
      return 0;
    }
    if (prevCategory === 8) {
      return 150;
    }
    let score2 = 0;
    if (prevCategory !== nextCategory) {
      score2 += 10;
      if (prevCategory === 0 && nextCategory === 1) {
        score2 += 1;
      }
    }
    score2 += getCategoryBoundaryScore(prevCategory);
    score2 += getCategoryBoundaryScore(nextCategory);
    return score2;
  }
  translateOffset(offset, preference = "right") {
    const i = $ub(this.c, (value) => value <= offset);
    const lineOffset = offset - this.c[i];
    return new $9t(this.g.startLineNumber + i, 1 + this.d[i] + lineOffset + (lineOffset === 0 && preference === "left" ? 0 : this.f[i]));
  }
  translateRange(range) {
    const pos1 = this.translateOffset(range.start, "right");
    const pos2 = this.translateOffset(range.endExclusive, "left");
    if (pos2.isBefore(pos1)) {
      return $0t.fromPositions(pos2, pos2);
    }
    return $0t.fromPositions(pos1, pos2);
  }
  /**
   * Finds the word that contains the character at the given offset
   */
  findWordContaining(offset) {
    if (offset < 0 || offset >= this.b.length) {
      return void 0;
    }
    if (!isWordChar(this.b[offset])) {
      return void 0;
    }
    let start = offset;
    while (start > 0 && isWordChar(this.b[start - 1])) {
      start--;
    }
    let end = offset;
    while (end < this.b.length && isWordChar(this.b[end])) {
      end++;
    }
    return new $eu(start, end);
  }
  countLinesIn(range) {
    return this.translateOffset(range.endExclusive).lineNumber - this.translateOffset(range.start).lineNumber;
  }
  isStronglyEqual(offset1, offset2) {
    return this.b[offset1] === this.b[offset2];
  }
  extendToFullLines(range) {
    const start = $tb(this.c, (x) => x <= range.start) ?? 0;
    const end = $vb(this.c, (x) => range.endExclusive <= x) ?? this.b.length;
    return new $eu(start, end);
  }
};
function isWordChar(charCode) {
  return charCode >= 97 && charCode <= 122 || charCode >= 65 && charCode <= 90 || charCode >= 48 && charCode <= 57;
}
var CharBoundaryCategory;
(function(CharBoundaryCategory2) {
  CharBoundaryCategory2[CharBoundaryCategory2["WordLower"] = 0] = "WordLower";
  CharBoundaryCategory2[CharBoundaryCategory2["WordUpper"] = 1] = "WordUpper";
  CharBoundaryCategory2[CharBoundaryCategory2["WordNumber"] = 2] = "WordNumber";
  CharBoundaryCategory2[CharBoundaryCategory2["End"] = 3] = "End";
  CharBoundaryCategory2[CharBoundaryCategory2["Other"] = 4] = "Other";
  CharBoundaryCategory2[CharBoundaryCategory2["Separator"] = 5] = "Separator";
  CharBoundaryCategory2[CharBoundaryCategory2["Space"] = 6] = "Space";
  CharBoundaryCategory2[CharBoundaryCategory2["LineBreakCR"] = 7] = "LineBreakCR";
  CharBoundaryCategory2[CharBoundaryCategory2["LineBreakLF"] = 8] = "LineBreakLF";
})(CharBoundaryCategory || (CharBoundaryCategory = {}));
var score = {
  [
    0
    /* CharBoundaryCategory.WordLower */
  ]: 0,
  [
    1
    /* CharBoundaryCategory.WordUpper */
  ]: 0,
  [
    2
    /* CharBoundaryCategory.WordNumber */
  ]: 0,
  [
    3
    /* CharBoundaryCategory.End */
  ]: 10,
  [
    4
    /* CharBoundaryCategory.Other */
  ]: 2,
  [
    5
    /* CharBoundaryCategory.Separator */
  ]: 30,
  [
    6
    /* CharBoundaryCategory.Space */
  ]: 3,
  [
    7
    /* CharBoundaryCategory.LineBreakCR */
  ]: 10,
  [
    8
    /* CharBoundaryCategory.LineBreakLF */
  ]: 10
};
function getCategoryBoundaryScore(category) {
  return score[category];
}
function getCategory(charCode) {
  if (charCode === 10) {
    return 8;
  } else if (charCode === 13) {
    return 7;
  } else if ($55(charCode)) {
    return 6;
  } else if (charCode >= 97 && charCode <= 122) {
    return 0;
  } else if (charCode >= 65 && charCode <= 90) {
    return 1;
  } else if (charCode >= 48 && charCode <= 57) {
    return 2;
  } else if (charCode === -1) {
    return 3;
  } else if (charCode === 44 || charCode === 59) {
    return 5;
  } else {
    return 4;
  }
}

// out-build/vs/editor/common/diff/defaultLinesDiffComputer/computeMovedLines.js
function $05(changes, originalLines, modifiedLines, hashedOriginalLines, hashedModifiedLines, timeout) {
  let { moves, excludedChanges } = computeMovesFromSimpleDeletionsToSimpleInsertions(changes, originalLines, modifiedLines, timeout);
  if (!timeout.isValid()) {
    return [];
  }
  const filteredChanges = changes.filter((c) => !excludedChanges.has(c));
  const unchangedMoves = computeUnchangedMoves(filteredChanges, hashedOriginalLines, hashedModifiedLines, originalLines, modifiedLines, timeout);
  $$b(moves, unchangedMoves);
  moves = joinCloseConsecutiveMoves(moves);
  moves = moves.filter((current) => {
    const lines = current.original.toOffsetRange().slice(originalLines).map((l) => l.trim());
    const originalText = lines.join("\n");
    return originalText.length >= 15 && countWhere(lines, (l) => l.length >= 2) >= 2;
  });
  moves = removeMovesInSameDiff(changes, moves);
  return moves;
}
function countWhere(arr, predicate) {
  let count = 0;
  for (const t of arr) {
    if (predicate(t)) {
      count++;
    }
  }
  return count;
}
function computeMovesFromSimpleDeletionsToSimpleInsertions(changes, originalLines, modifiedLines, timeout) {
  const moves = [];
  const deletions = changes.filter((c) => c.modified.isEmpty && c.original.length >= 3).map((d) => new $65(d.original, originalLines, d));
  const insertions = new Set(changes.filter((c) => c.original.isEmpty && c.modified.length >= 3).map((d) => new $65(d.modified, modifiedLines, d)));
  const excludedChanges = /* @__PURE__ */ new Set();
  for (const deletion of deletions) {
    let highestSimilarity = -1;
    let best;
    for (const insertion of insertions) {
      const similarity = deletion.computeSimilarity(insertion);
      if (similarity > highestSimilarity) {
        highestSimilarity = similarity;
        best = insertion;
      }
    }
    if (highestSimilarity > 0.9 && best) {
      insertions.delete(best);
      moves.push(new $qu(deletion.range, best.range));
      excludedChanges.add(deletion.source);
      excludedChanges.add(best.source);
    }
    if (!timeout.isValid()) {
      return { moves, excludedChanges };
    }
  }
  return { moves, excludedChanges };
}
function computeUnchangedMoves(changes, hashedOriginalLines, hashedModifiedLines, originalLines, modifiedLines, timeout) {
  const moves = [];
  const original3LineHashes = new $Tc();
  for (const change of changes) {
    for (let i = change.original.startLineNumber; i < change.original.endLineNumberExclusive - 2; i++) {
      const key = `${hashedOriginalLines[i - 1]}:${hashedOriginalLines[i + 1 - 1]}:${hashedOriginalLines[i + 2 - 1]}`;
      original3LineHashes.add(key, { range: new $gu(i, i + 3) });
    }
  }
  const possibleMappings = [];
  changes.sort($ec((c) => c.modified.startLineNumber, $gc));
  for (const change of changes) {
    let lastMappings = [];
    for (let i = change.modified.startLineNumber; i < change.modified.endLineNumberExclusive - 2; i++) {
      const key = `${hashedModifiedLines[i - 1]}:${hashedModifiedLines[i + 1 - 1]}:${hashedModifiedLines[i + 2 - 1]}`;
      const currentModifiedRange = new $gu(i, i + 3);
      const nextMappings = [];
      original3LineHashes.forEach(key, ({ range }) => {
        for (const lastMapping of lastMappings) {
          if (lastMapping.originalLineRange.endLineNumberExclusive + 1 === range.endLineNumberExclusive && lastMapping.modifiedLineRange.endLineNumberExclusive + 1 === currentModifiedRange.endLineNumberExclusive) {
            lastMapping.originalLineRange = new $gu(lastMapping.originalLineRange.startLineNumber, range.endLineNumberExclusive);
            lastMapping.modifiedLineRange = new $gu(lastMapping.modifiedLineRange.startLineNumber, currentModifiedRange.endLineNumberExclusive);
            nextMappings.push(lastMapping);
            return;
          }
        }
        const mapping = {
          modifiedLineRange: currentModifiedRange,
          originalLineRange: range
        };
        possibleMappings.push(mapping);
        nextMappings.push(mapping);
      });
      lastMappings = nextMappings;
    }
    if (!timeout.isValid()) {
      return [];
    }
  }
  possibleMappings.sort($ic($ec((m) => m.modifiedLineRange.length, $gc)));
  const modifiedSet = new $hu();
  const originalSet = new $hu();
  for (const mapping of possibleMappings) {
    const diffOrigToMod = mapping.modifiedLineRange.startLineNumber - mapping.originalLineRange.startLineNumber;
    const modifiedSections = modifiedSet.subtractFrom(mapping.modifiedLineRange);
    const originalTranslatedSections = originalSet.subtractFrom(mapping.originalLineRange).getWithDelta(diffOrigToMod);
    const modifiedIntersectedSections = modifiedSections.getIntersection(originalTranslatedSections);
    for (const s of modifiedIntersectedSections.ranges) {
      if (s.length < 3) {
        continue;
      }
      const modifiedLineRange = s;
      const originalLineRange = s.delta(-diffOrigToMod);
      moves.push(new $qu(originalLineRange, modifiedLineRange));
      modifiedSet.addRange(modifiedLineRange);
      originalSet.addRange(originalLineRange);
    }
  }
  moves.sort($ec((m) => m.original.startLineNumber, $gc));
  const monotonousChanges = new $yb(changes);
  for (let i = 0; i < moves.length; i++) {
    const move = moves[i];
    const firstTouchingChangeOrig = monotonousChanges.findLastMonotonous((c) => c.original.startLineNumber <= move.original.startLineNumber);
    const firstTouchingChangeMod = $tb(changes, (c) => c.modified.startLineNumber <= move.modified.startLineNumber);
    const linesAbove = Math.max(move.original.startLineNumber - firstTouchingChangeOrig.original.startLineNumber, move.modified.startLineNumber - firstTouchingChangeMod.modified.startLineNumber);
    const lastTouchingChangeOrig = monotonousChanges.findLastMonotonous((c) => c.original.startLineNumber < move.original.endLineNumberExclusive);
    const lastTouchingChangeMod = $tb(changes, (c) => c.modified.startLineNumber < move.modified.endLineNumberExclusive);
    const linesBelow = Math.max(lastTouchingChangeOrig.original.endLineNumberExclusive - move.original.endLineNumberExclusive, lastTouchingChangeMod.modified.endLineNumberExclusive - move.modified.endLineNumberExclusive);
    let extendToTop;
    for (extendToTop = 0; extendToTop < linesAbove; extendToTop++) {
      const origLine = move.original.startLineNumber - extendToTop - 1;
      const modLine = move.modified.startLineNumber - extendToTop - 1;
      if (origLine > originalLines.length || modLine > modifiedLines.length) {
        break;
      }
      if (modifiedSet.contains(modLine) || originalSet.contains(origLine)) {
        break;
      }
      if (!areLinesSimilar(originalLines[origLine - 1], modifiedLines[modLine - 1], timeout)) {
        break;
      }
    }
    if (extendToTop > 0) {
      originalSet.addRange(new $gu(move.original.startLineNumber - extendToTop, move.original.startLineNumber));
      modifiedSet.addRange(new $gu(move.modified.startLineNumber - extendToTop, move.modified.startLineNumber));
    }
    let extendToBottom;
    for (extendToBottom = 0; extendToBottom < linesBelow; extendToBottom++) {
      const origLine = move.original.endLineNumberExclusive + extendToBottom;
      const modLine = move.modified.endLineNumberExclusive + extendToBottom;
      if (origLine > originalLines.length || modLine > modifiedLines.length) {
        break;
      }
      if (modifiedSet.contains(modLine) || originalSet.contains(origLine)) {
        break;
      }
      if (!areLinesSimilar(originalLines[origLine - 1], modifiedLines[modLine - 1], timeout)) {
        break;
      }
    }
    if (extendToBottom > 0) {
      originalSet.addRange(new $gu(move.original.endLineNumberExclusive, move.original.endLineNumberExclusive + extendToBottom));
      modifiedSet.addRange(new $gu(move.modified.endLineNumberExclusive, move.modified.endLineNumberExclusive + extendToBottom));
    }
    if (extendToTop > 0 || extendToBottom > 0) {
      moves[i] = new $qu(new $gu(move.original.startLineNumber - extendToTop, move.original.endLineNumberExclusive + extendToBottom), new $gu(move.modified.startLineNumber - extendToTop, move.modified.endLineNumberExclusive + extendToBottom));
    }
  }
  return moves;
}
function areLinesSimilar(line1, line2, timeout) {
  if (line1.trim() === line2.trim()) {
    return true;
  }
  if (line1.length > 300 && line2.length > 300) {
    return false;
  }
  const myersDiffingAlgorithm = new $85();
  const result = myersDiffingAlgorithm.compute(new $95([line1], new $0t(1, 1, 1, line1.length), false), new $95([line2], new $0t(1, 1, 1, line2.length), false), timeout);
  let commonNonSpaceCharCount = 0;
  const inverted = $Z5.invert(result.diffs, line1.length);
  for (const seq of inverted) {
    seq.seq1Range.forEach((idx) => {
      if (!$55(line1.charCodeAt(idx))) {
        commonNonSpaceCharCount++;
      }
    });
  }
  function countNonWsChars(str) {
    let count = 0;
    for (let i = 0; i < line1.length; i++) {
      if (!$55(str.charCodeAt(i))) {
        count++;
      }
    }
    return count;
  }
  const longerLineLength = countNonWsChars(line1.length > line2.length ? line1 : line2);
  const r = commonNonSpaceCharCount / longerLineLength > 0.6 && longerLineLength > 10;
  return r;
}
function joinCloseConsecutiveMoves(moves) {
  if (moves.length === 0) {
    return moves;
  }
  moves.sort($ec((m) => m.original.startLineNumber, $gc));
  const result = [moves[0]];
  for (let i = 1; i < moves.length; i++) {
    const last = result[result.length - 1];
    const current = moves[i];
    const originalDist = current.original.startLineNumber - last.original.endLineNumberExclusive;
    const modifiedDist = current.modified.startLineNumber - last.modified.endLineNumberExclusive;
    const currentMoveAfterLast = originalDist >= 0 && modifiedDist >= 0;
    if (currentMoveAfterLast && originalDist + modifiedDist <= 2) {
      result[result.length - 1] = last.join(current);
      continue;
    }
    result.push(current);
  }
  return result;
}
function removeMovesInSameDiff(changes, moves) {
  const changesMonotonous = new $yb(changes);
  moves = moves.filter((m) => {
    const diffBeforeEndOfMoveOriginal = changesMonotonous.findLastMonotonous((c) => c.original.startLineNumber < m.original.endLineNumberExclusive) || new $qu(new $gu(1, 1), new $gu(1, 1));
    const diffBeforeEndOfMoveModified = $tb(changes, (c) => c.modified.startLineNumber < m.modified.endLineNumberExclusive);
    const differentDiffs = diffBeforeEndOfMoveOriginal !== diffBeforeEndOfMoveModified;
    return differentDiffs;
  });
  return moves;
}

// out-build/vs/editor/common/diff/defaultLinesDiffComputer/heuristicSequenceOptimizations.js
function $_5(sequence1, sequence2, sequenceDiffs) {
  let result = sequenceDiffs;
  result = joinSequenceDiffsByShifting(sequence1, sequence2, result);
  result = joinSequenceDiffsByShifting(sequence1, sequence2, result);
  result = shiftSequenceDiffs(sequence1, sequence2, result);
  return result;
}
function joinSequenceDiffsByShifting(sequence1, sequence2, sequenceDiffs) {
  if (sequenceDiffs.length === 0) {
    return sequenceDiffs;
  }
  const result = [];
  result.push(sequenceDiffs[0]);
  for (let i = 1; i < sequenceDiffs.length; i++) {
    const prevResult = result[result.length - 1];
    let cur = sequenceDiffs[i];
    if (cur.seq1Range.isEmpty || cur.seq2Range.isEmpty) {
      const length = cur.seq1Range.start - prevResult.seq1Range.endExclusive;
      let d;
      for (d = 1; d <= length; d++) {
        if (sequence1.getElement(cur.seq1Range.start - d) !== sequence1.getElement(cur.seq1Range.endExclusive - d) || sequence2.getElement(cur.seq2Range.start - d) !== sequence2.getElement(cur.seq2Range.endExclusive - d)) {
          break;
        }
      }
      d--;
      if (d === length) {
        result[result.length - 1] = new $Z5(new $eu(prevResult.seq1Range.start, cur.seq1Range.endExclusive - length), new $eu(prevResult.seq2Range.start, cur.seq2Range.endExclusive - length));
        continue;
      }
      cur = cur.delta(-d);
    }
    result.push(cur);
  }
  const result2 = [];
  for (let i = 0; i < result.length - 1; i++) {
    const nextResult = result[i + 1];
    let cur = result[i];
    if (cur.seq1Range.isEmpty || cur.seq2Range.isEmpty) {
      const length = nextResult.seq1Range.start - cur.seq1Range.endExclusive;
      let d;
      for (d = 0; d < length; d++) {
        if (!sequence1.isStronglyEqual(cur.seq1Range.start + d, cur.seq1Range.endExclusive + d) || !sequence2.isStronglyEqual(cur.seq2Range.start + d, cur.seq2Range.endExclusive + d)) {
          break;
        }
      }
      if (d === length) {
        result[i + 1] = new $Z5(new $eu(cur.seq1Range.start + length, nextResult.seq1Range.endExclusive), new $eu(cur.seq2Range.start + length, nextResult.seq2Range.endExclusive));
        continue;
      }
      if (d > 0) {
        cur = cur.delta(d);
      }
    }
    result2.push(cur);
  }
  if (result.length > 0) {
    result2.push(result[result.length - 1]);
  }
  return result2;
}
function shiftSequenceDiffs(sequence1, sequence2, sequenceDiffs) {
  if (!sequence1.getBoundaryScore || !sequence2.getBoundaryScore) {
    return sequenceDiffs;
  }
  for (let i = 0; i < sequenceDiffs.length; i++) {
    const prevDiff = i > 0 ? sequenceDiffs[i - 1] : void 0;
    const diff = sequenceDiffs[i];
    const nextDiff = i + 1 < sequenceDiffs.length ? sequenceDiffs[i + 1] : void 0;
    const seq1ValidRange = new $eu(prevDiff ? prevDiff.seq1Range.endExclusive + 1 : 0, nextDiff ? nextDiff.seq1Range.start - 1 : sequence1.length);
    const seq2ValidRange = new $eu(prevDiff ? prevDiff.seq2Range.endExclusive + 1 : 0, nextDiff ? nextDiff.seq2Range.start - 1 : sequence2.length);
    if (diff.seq1Range.isEmpty) {
      sequenceDiffs[i] = shiftDiffToBetterPosition(diff, sequence1, sequence2, seq1ValidRange, seq2ValidRange);
    } else if (diff.seq2Range.isEmpty) {
      sequenceDiffs[i] = shiftDiffToBetterPosition(diff.swap(), sequence2, sequence1, seq2ValidRange, seq1ValidRange).swap();
    }
  }
  return sequenceDiffs;
}
function shiftDiffToBetterPosition(diff, sequence1, sequence2, seq1ValidRange, seq2ValidRange) {
  const maxShiftLimit = 100;
  let deltaBefore = 1;
  while (diff.seq1Range.start - deltaBefore >= seq1ValidRange.start && diff.seq2Range.start - deltaBefore >= seq2ValidRange.start && sequence2.isStronglyEqual(diff.seq2Range.start - deltaBefore, diff.seq2Range.endExclusive - deltaBefore) && deltaBefore < maxShiftLimit) {
    deltaBefore++;
  }
  deltaBefore--;
  let deltaAfter = 0;
  while (diff.seq1Range.start + deltaAfter < seq1ValidRange.endExclusive && diff.seq2Range.endExclusive + deltaAfter < seq2ValidRange.endExclusive && sequence2.isStronglyEqual(diff.seq2Range.start + deltaAfter, diff.seq2Range.endExclusive + deltaAfter) && deltaAfter < maxShiftLimit) {
    deltaAfter++;
  }
  if (deltaBefore === 0 && deltaAfter === 0) {
    return diff;
  }
  let bestDelta = 0;
  let bestScore = -1;
  for (let delta = -deltaBefore; delta <= deltaAfter; delta++) {
    const seq2OffsetStart = diff.seq2Range.start + delta;
    const seq2OffsetEndExclusive = diff.seq2Range.endExclusive + delta;
    const seq1Offset = diff.seq1Range.start + delta;
    const score2 = sequence1.getBoundaryScore(seq1Offset) + sequence2.getBoundaryScore(seq2OffsetStart) + sequence2.getBoundaryScore(seq2OffsetEndExclusive);
    if (score2 > bestScore) {
      bestScore = score2;
      bestDelta = delta;
    }
  }
  return diff.delta(bestDelta);
}
function $a6(sequence1, sequence2, sequenceDiffs) {
  const result = [];
  for (const s of sequenceDiffs) {
    const last = result[result.length - 1];
    if (!last) {
      result.push(s);
      continue;
    }
    if (s.seq1Range.start - last.seq1Range.endExclusive <= 2 || s.seq2Range.start - last.seq2Range.endExclusive <= 2) {
      result[result.length - 1] = new $Z5(last.seq1Range.join(s.seq1Range), last.seq2Range.join(s.seq2Range));
    } else {
      result.push(s);
    }
  }
  return result;
}
function $b6(sequence1, sequence2, sequenceDiffs) {
  const equalMappings = $Z5.invert(sequenceDiffs, sequence1.length);
  const additional = [];
  let lastPoint = new $15(0, 0);
  function scanWord(pair, equalMapping) {
    if (pair.offset1 < lastPoint.offset1 || pair.offset2 < lastPoint.offset2) {
      return;
    }
    const w1 = sequence1.findWordContaining(pair.offset1);
    const w2 = sequence2.findWordContaining(pair.offset2);
    if (!w1 || !w2) {
      return;
    }
    let w = new $Z5(w1, w2);
    const equalPart = w.intersect(equalMapping);
    let equalChars1 = equalPart.seq1Range.length;
    let equalChars2 = equalPart.seq2Range.length;
    while (equalMappings.length > 0) {
      const next = equalMappings[0];
      const intersects = next.seq1Range.intersects(w.seq1Range) || next.seq2Range.intersects(w.seq2Range);
      if (!intersects) {
        break;
      }
      const v1 = sequence1.findWordContaining(next.seq1Range.start);
      const v2 = sequence2.findWordContaining(next.seq2Range.start);
      const v = new $Z5(v1, v2);
      const equalPart2 = v.intersect(next);
      equalChars1 += equalPart2.seq1Range.length;
      equalChars2 += equalPart2.seq2Range.length;
      w = w.join(v);
      if (w.seq1Range.endExclusive >= next.seq1Range.endExclusive) {
        equalMappings.shift();
      } else {
        break;
      }
    }
    if (equalChars1 + equalChars2 < (w.seq1Range.length + w.seq2Range.length) * 2 / 3) {
      additional.push(w);
    }
    lastPoint = w.getEndExclusives();
  }
  while (equalMappings.length > 0) {
    const next = equalMappings.shift();
    if (next.seq1Range.isEmpty) {
      continue;
    }
    scanWord(next.getStarts(), next);
    scanWord(next.getEndExclusives().delta(-1), next);
  }
  const merged = mergeSequenceDiffs(sequenceDiffs, additional);
  return merged;
}
function mergeSequenceDiffs(sequenceDiffs1, sequenceDiffs2) {
  const result = [];
  while (sequenceDiffs1.length > 0 || sequenceDiffs2.length > 0) {
    const sd1 = sequenceDiffs1[0];
    const sd2 = sequenceDiffs2[0];
    let next;
    if (sd1 && (!sd2 || sd1.seq1Range.start < sd2.seq1Range.start)) {
      next = sequenceDiffs1.shift();
    } else {
      next = sequenceDiffs2.shift();
    }
    if (result.length > 0 && result[result.length - 1].seq1Range.endExclusive >= next.seq1Range.start) {
      result[result.length - 1] = result[result.length - 1].join(next);
    } else {
      result.push(next);
    }
  }
  return result;
}
function $c6(sequence1, _sequence2, sequenceDiffs) {
  let diffs = sequenceDiffs;
  if (diffs.length === 0) {
    return diffs;
  }
  let counter = 0;
  let shouldRepeat;
  do {
    shouldRepeat = false;
    const result = [
      diffs[0]
    ];
    for (let i = 1; i < diffs.length; i++) {
      let shouldJoinDiffs2 = function(before, after) {
        const unchangedRange = new $eu(lastResult.seq1Range.endExclusive, cur.seq1Range.start);
        const unchangedText = sequence1.getText(unchangedRange);
        const unchangedTextWithoutWs = unchangedText.replace(/\s/g, "");
        if (unchangedTextWithoutWs.length <= 4 && (before.seq1Range.length + before.seq2Range.length > 5 || after.seq1Range.length + after.seq2Range.length > 5)) {
          return true;
        }
        return false;
      };
      var shouldJoinDiffs = shouldJoinDiffs2;
      const cur = diffs[i];
      const lastResult = result[result.length - 1];
      const shouldJoin = shouldJoinDiffs2(lastResult, cur);
      if (shouldJoin) {
        shouldRepeat = true;
        result[result.length - 1] = result[result.length - 1].join(cur);
      } else {
        result.push(cur);
      }
    }
    diffs = result;
  } while (counter++ < 10 && shouldRepeat);
  return diffs;
}
function $d6(sequence1, sequence2, sequenceDiffs) {
  let diffs = sequenceDiffs;
  if (diffs.length === 0) {
    return diffs;
  }
  let counter = 0;
  let shouldRepeat;
  do {
    shouldRepeat = false;
    const result = [
      diffs[0]
    ];
    for (let i = 1; i < diffs.length; i++) {
      let shouldJoinDiffs2 = function(before, after) {
        const unchangedRange = new $eu(lastResult.seq1Range.endExclusive, cur.seq1Range.start);
        const unchangedLineCount = sequence1.countLinesIn(unchangedRange);
        if (unchangedLineCount > 5 || unchangedRange.length > 500) {
          return false;
        }
        const unchangedText = sequence1.getText(unchangedRange).trim();
        if (unchangedText.length > 20 || unchangedText.split(/\r\n|\r|\n/).length > 1) {
          return false;
        }
        const beforeLineCount1 = sequence1.countLinesIn(before.seq1Range);
        const beforeSeq1Length = before.seq1Range.length;
        const beforeLineCount2 = sequence2.countLinesIn(before.seq2Range);
        const beforeSeq2Length = before.seq2Range.length;
        const afterLineCount1 = sequence1.countLinesIn(after.seq1Range);
        const afterSeq1Length = after.seq1Range.length;
        const afterLineCount2 = sequence2.countLinesIn(after.seq2Range);
        const afterSeq2Length = after.seq2Range.length;
        const max = 2 * 40 + 50;
        function cap(v) {
          return Math.min(v, max);
        }
        if (Math.pow(Math.pow(cap(beforeLineCount1 * 40 + beforeSeq1Length), 1.5) + Math.pow(cap(beforeLineCount2 * 40 + beforeSeq2Length), 1.5), 1.5) + Math.pow(Math.pow(cap(afterLineCount1 * 40 + afterSeq1Length), 1.5) + Math.pow(cap(afterLineCount2 * 40 + afterSeq2Length), 1.5), 1.5) > (max ** 1.5) ** 1.5 * 1.3) {
          return true;
        }
        return false;
      };
      var shouldJoinDiffs = shouldJoinDiffs2;
      const cur = diffs[i];
      const lastResult = result[result.length - 1];
      const shouldJoin = shouldJoinDiffs2(lastResult, cur);
      if (shouldJoin) {
        shouldRepeat = true;
        result[result.length - 1] = result[result.length - 1].join(cur);
      } else {
        result.push(cur);
      }
    }
    diffs = result;
  } while (counter++ < 10 && shouldRepeat);
  const newDiffs = [];
  $Pb(diffs, (prev, cur, next) => {
    let newDiff = cur;
    function shouldMarkAsChanged(text) {
      return text.length > 0 && text.trim().length <= 3 && cur.seq1Range.length + cur.seq2Range.length > 100;
    }
    const fullRange1 = sequence1.extendToFullLines(cur.seq1Range);
    const prefix = sequence1.getText(new $eu(fullRange1.start, cur.seq1Range.start));
    if (shouldMarkAsChanged(prefix)) {
      newDiff = newDiff.deltaStart(-prefix.length);
    }
    const suffix = sequence1.getText(new $eu(cur.seq1Range.endExclusive, fullRange1.endExclusive));
    if (shouldMarkAsChanged(suffix)) {
      newDiff = newDiff.deltaEnd(suffix.length);
    }
    const availableSpace = $Z5.fromOffsetPairs(prev ? prev.getEndExclusives() : $15.zero, next ? next.getStarts() : $15.max);
    const result = newDiff.intersect(availableSpace);
    if (newDiffs.length > 0 && result.getStarts().equals(newDiffs[newDiffs.length - 1].getEndExclusives())) {
      newDiffs[newDiffs.length - 1] = newDiffs[newDiffs.length - 1].join(result);
    } else {
      newDiffs.push(result);
    }
  });
  return newDiffs;
}

// out-build/vs/editor/common/diff/defaultLinesDiffComputer/lineSequence.js
var $$5 = class {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
  getElement(offset) {
    return this.a[offset];
  }
  get length() {
    return this.a.length;
  }
  getBoundaryScore(length) {
    const indentationBefore = length === 0 ? 0 : getIndentation(this.b[length - 1]);
    const indentationAfter = length === this.b.length ? 0 : getIndentation(this.b[length]);
    return 1e3 - (indentationBefore + indentationAfter);
  }
  getText(range) {
    return this.b.slice(range.start, range.endExclusive).join("\n");
  }
  isStronglyEqual(offset1, offset2) {
    return this.b[offset1] === this.b[offset2];
  }
};
function getIndentation(str) {
  let i = 0;
  while (i < str.length && (str.charCodeAt(i) === 32 || str.charCodeAt(i) === 9)) {
    i++;
  }
  return i;
}

// out-build/vs/editor/common/diff/defaultLinesDiffComputer/defaultLinesDiffComputer.js
var $e6 = class {
  constructor() {
    this.e = new $75();
    this.f = new $85();
  }
  computeDiff(originalLines, modifiedLines, options) {
    if (originalLines.length <= 1 && $Hb(originalLines, modifiedLines, (a, b) => a === b)) {
      return new $tu([], [], false);
    }
    if (originalLines.length === 1 && originalLines[0].length === 0 || modifiedLines.length === 1 && modifiedLines[0].length === 0) {
      return new $tu([
        new $ru(new $gu(1, originalLines.length + 1), new $gu(1, modifiedLines.length + 1), [
          new $su(new $0t(1, 1, originalLines.length, originalLines[originalLines.length - 1].length + 1), new $0t(1, 1, modifiedLines.length, modifiedLines[modifiedLines.length - 1].length + 1))
        ])
      ], [], false);
    }
    const timeout = options.maxComputationTimeMs === 0 ? $25.instance : new $35(options.maxComputationTimeMs);
    const considerWhitespaceChanges = !options.ignoreTrimWhitespace;
    const perfectHashes = /* @__PURE__ */ new Map();
    function getOrCreateHash(text) {
      let hash = perfectHashes.get(text);
      if (hash === void 0) {
        hash = perfectHashes.size;
        perfectHashes.set(text, hash);
      }
      return hash;
    }
    const originalLinesHashes = originalLines.map((l) => getOrCreateHash(l.trim()));
    const modifiedLinesHashes = modifiedLines.map((l) => getOrCreateHash(l.trim()));
    const sequence1 = new $$5(originalLinesHashes, originalLines);
    const sequence2 = new $$5(modifiedLinesHashes, modifiedLines);
    const lineAlignmentResult = (() => {
      if (sequence1.length + sequence2.length < 1700) {
        return this.e.compute(sequence1, sequence2, timeout, (offset1, offset2) => originalLines[offset1] === modifiedLines[offset2] ? modifiedLines[offset2].length === 0 ? 0.1 : 1 + Math.log(1 + modifiedLines[offset2].length) : 0.99);
      }
      return this.f.compute(sequence1, sequence2, timeout);
    })();
    let lineAlignments = lineAlignmentResult.diffs;
    let hitTimeout = lineAlignmentResult.hitTimeout;
    lineAlignments = $_5(sequence1, sequence2, lineAlignments);
    lineAlignments = $c6(sequence1, sequence2, lineAlignments);
    const alignments = [];
    const scanForWhitespaceChanges = (equalLinesCount) => {
      if (!considerWhitespaceChanges) {
        return;
      }
      for (let i = 0; i < equalLinesCount; i++) {
        const seq1Offset = seq1LastStart + i;
        const seq2Offset = seq2LastStart + i;
        if (originalLines[seq1Offset] !== modifiedLines[seq2Offset]) {
          const characterDiffs = this.j(originalLines, modifiedLines, new $Z5(new $eu(seq1Offset, seq1Offset + 1), new $eu(seq2Offset, seq2Offset + 1)), timeout, considerWhitespaceChanges);
          for (const a of characterDiffs.mappings) {
            alignments.push(a);
          }
          if (characterDiffs.hitTimeout) {
            hitTimeout = true;
          }
        }
      }
    };
    let seq1LastStart = 0;
    let seq2LastStart = 0;
    for (const diff of lineAlignments) {
      $od(() => diff.seq1Range.start - seq1LastStart === diff.seq2Range.start - seq2LastStart);
      const equalLinesCount = diff.seq1Range.start - seq1LastStart;
      scanForWhitespaceChanges(equalLinesCount);
      seq1LastStart = diff.seq1Range.endExclusive;
      seq2LastStart = diff.seq2Range.endExclusive;
      const characterDiffs = this.j(originalLines, modifiedLines, diff, timeout, considerWhitespaceChanges);
      if (characterDiffs.hitTimeout) {
        hitTimeout = true;
      }
      for (const a of characterDiffs.mappings) {
        alignments.push(a);
      }
    }
    scanForWhitespaceChanges(originalLines.length - seq1LastStart);
    const changes = $f6(alignments, originalLines, modifiedLines);
    let moves = [];
    if (options.computeMoves) {
      moves = this.h(changes, originalLines, modifiedLines, originalLinesHashes, modifiedLinesHashes, timeout, considerWhitespaceChanges);
    }
    $od(() => {
      function validatePosition(pos, lines) {
        if (pos.lineNumber < 1 || pos.lineNumber > lines.length) {
          return false;
        }
        const line = lines[pos.lineNumber - 1];
        if (pos.column < 1 || pos.column > line.length + 1) {
          return false;
        }
        return true;
      }
      function validateRange(range, lines) {
        if (range.startLineNumber < 1 || range.startLineNumber > lines.length + 1) {
          return false;
        }
        if (range.endLineNumberExclusive < 1 || range.endLineNumberExclusive > lines.length + 1) {
          return false;
        }
        return true;
      }
      for (const c of changes) {
        if (!c.innerChanges) {
          return false;
        }
        for (const ic of c.innerChanges) {
          const valid = validatePosition(ic.modifiedRange.getStartPosition(), modifiedLines) && validatePosition(ic.modifiedRange.getEndPosition(), modifiedLines) && validatePosition(ic.originalRange.getStartPosition(), originalLines) && validatePosition(ic.originalRange.getEndPosition(), originalLines);
          if (!valid) {
            return false;
          }
        }
        if (!validateRange(c.modified, modifiedLines) || !validateRange(c.original, originalLines)) {
          return false;
        }
      }
      return true;
    });
    return new $tu(changes, moves, hitTimeout);
  }
  h(changes, originalLines, modifiedLines, hashedOriginalLines, hashedModifiedLines, timeout, considerWhitespaceChanges) {
    const moves = $05(changes, originalLines, modifiedLines, hashedOriginalLines, hashedModifiedLines, timeout);
    const movesWithDiffs = moves.map((m) => {
      const moveChanges = this.j(originalLines, modifiedLines, new $Z5(m.original.toOffsetRange(), m.modified.toOffsetRange()), timeout, considerWhitespaceChanges);
      const mappings = $f6(moveChanges.mappings, originalLines, modifiedLines, true);
      return new $uu(m, mappings);
    });
    return movesWithDiffs;
  }
  j(originalLines, modifiedLines, diff, timeout, considerWhitespaceChanges) {
    const lineRangeMapping = toLineRangeMapping(diff);
    const rangeMapping = lineRangeMapping.toRangeMapping2(originalLines, modifiedLines);
    const slice1 = new $95(originalLines, rangeMapping.originalRange, considerWhitespaceChanges);
    const slice2 = new $95(modifiedLines, rangeMapping.modifiedRange, considerWhitespaceChanges);
    const diffResult = slice1.length + slice2.length < 500 ? this.e.compute(slice1, slice2, timeout) : this.f.compute(slice1, slice2, timeout);
    const check = false;
    let diffs = diffResult.diffs;
    if (check) {
      $Z5.assertSorted(diffs);
    }
    diffs = $_5(slice1, slice2, diffs);
    if (check) {
      $Z5.assertSorted(diffs);
    }
    diffs = $b6(slice1, slice2, diffs);
    if (check) {
      $Z5.assertSorted(diffs);
    }
    diffs = $a6(slice1, slice2, diffs);
    if (check) {
      $Z5.assertSorted(diffs);
    }
    diffs = $d6(slice1, slice2, diffs);
    if (check) {
      $Z5.assertSorted(diffs);
    }
    const result = diffs.map((d) => new $su(slice1.translateRange(d.seq1Range), slice2.translateRange(d.seq2Range)));
    if (check) {
      $su.assertSorted(result);
    }
    return {
      mappings: result,
      hitTimeout: diffResult.hitTimeout
    };
  }
};
function $f6(alignments, originalLines, modifiedLines, dontAssertStartLine = false) {
  const changes = [];
  for (const g of $Nb(alignments.map((a) => $g6(a, originalLines, modifiedLines)), (a1, a2) => a1.original.overlapOrTouch(a2.original) || a1.modified.overlapOrTouch(a2.modified))) {
    const first = g[0];
    const last = g[g.length - 1];
    changes.push(new $ru(first.original.join(last.original), first.modified.join(last.modified), g.map((a) => a.innerChanges[0])));
  }
  $od(() => {
    if (!dontAssertStartLine && changes.length > 0) {
      if (changes[0].modified.startLineNumber !== changes[0].original.startLineNumber) {
        return false;
      }
      if (modifiedLines.length - changes[changes.length - 1].modified.endLineNumberExclusive !== originalLines.length - changes[changes.length - 1].original.endLineNumberExclusive) {
        return false;
      }
    }
    return $pd(changes, (m1, m2) => m2.original.startLineNumber - m1.original.endLineNumberExclusive === m2.modified.startLineNumber - m1.modified.endLineNumberExclusive && // There has to be an unchanged line in between (otherwise both diffs should have been joined)
    m1.original.endLineNumberExclusive < m2.original.startLineNumber && m1.modified.endLineNumberExclusive < m2.modified.startLineNumber);
  });
  return changes;
}
function $g6(rangeMapping, originalLines, modifiedLines) {
  let lineStartDelta = 0;
  let lineEndDelta = 0;
  if (rangeMapping.modifiedRange.endColumn === 1 && rangeMapping.originalRange.endColumn === 1 && rangeMapping.originalRange.startLineNumber + lineStartDelta <= rangeMapping.originalRange.endLineNumber && rangeMapping.modifiedRange.startLineNumber + lineStartDelta <= rangeMapping.modifiedRange.endLineNumber) {
    lineEndDelta = -1;
  }
  if (rangeMapping.modifiedRange.startColumn - 1 >= modifiedLines[rangeMapping.modifiedRange.startLineNumber - 1].length && rangeMapping.originalRange.startColumn - 1 >= originalLines[rangeMapping.originalRange.startLineNumber - 1].length && rangeMapping.originalRange.startLineNumber <= rangeMapping.originalRange.endLineNumber + lineEndDelta && rangeMapping.modifiedRange.startLineNumber <= rangeMapping.modifiedRange.endLineNumber + lineEndDelta) {
    lineStartDelta = 1;
  }
  const originalLineRange = new $gu(rangeMapping.originalRange.startLineNumber + lineStartDelta, rangeMapping.originalRange.endLineNumber + 1 + lineEndDelta);
  const modifiedLineRange = new $gu(rangeMapping.modifiedRange.startLineNumber + lineStartDelta, rangeMapping.modifiedRange.endLineNumber + 1 + lineEndDelta);
  return new $ru(originalLineRange, modifiedLineRange, [rangeMapping]);
}
function toLineRangeMapping(sequenceDiff) {
  return new $qu(new $gu(sequenceDiff.seq1Range.start + 1, sequenceDiff.seq1Range.endExclusive + 1), new $gu(sequenceDiff.seq2Range.start + 1, sequenceDiff.seq2Range.endExclusive + 1));
}

// out-build/vs/editor/common/diff/linesDiffComputers.js
var $h6 = {
  getLegacy: () => new $vu(),
  getDefault: () => new $e6()
};

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

// out-build/vs/editor/common/languages/defaultDocumentColorsComputer.js
function _parseCaptureGroups(captureGroups) {
  const values = [];
  for (const captureGroup of captureGroups) {
    const parsedNumber = Number(captureGroup);
    if (parsedNumber || parsedNumber === 0 && captureGroup.replace(/\s/g, "") !== "") {
      values.push(parsedNumber);
    }
  }
  return values;
}
function _toIColor(r, g, b, a) {
  return {
    red: r / 255,
    blue: b / 255,
    green: g / 255,
    alpha: a
  };
}
function _findRange(model, match) {
  const index = match.index;
  const length = match[0].length;
  if (!index) {
    return;
  }
  const startPosition = model.positionAt(index);
  const range = {
    startLineNumber: startPosition.lineNumber,
    startColumn: startPosition.column,
    endLineNumber: startPosition.lineNumber,
    endColumn: startPosition.column + length
  };
  return range;
}
function _findHexColorInformation(range, hexValue) {
  if (!range) {
    return;
  }
  const parsedHexColor = $Ju.Format.CSS.parseHex(hexValue);
  if (!parsedHexColor) {
    return;
  }
  return {
    range,
    color: _toIColor(parsedHexColor.rgba.r, parsedHexColor.rgba.g, parsedHexColor.rgba.b, parsedHexColor.rgba.a)
  };
}
function _findRGBColorInformation(range, matches, isAlpha) {
  if (!range || matches.length !== 1) {
    return;
  }
  const match = matches[0];
  const captureGroups = match.values();
  const parsedRegex = _parseCaptureGroups(captureGroups);
  return {
    range,
    color: _toIColor(parsedRegex[0], parsedRegex[1], parsedRegex[2], isAlpha ? parsedRegex[3] : 1)
  };
}
function _findHSLColorInformation(range, matches, isAlpha) {
  if (!range || matches.length !== 1) {
    return;
  }
  const match = matches[0];
  const captureGroups = match.values();
  const parsedRegex = _parseCaptureGroups(captureGroups);
  const colorEquivalent = new $Ju(new $Hu(parsedRegex[0], parsedRegex[1] / 100, parsedRegex[2] / 100, isAlpha ? parsedRegex[3] : 1));
  return {
    range,
    color: _toIColor(colorEquivalent.rgba.r, colorEquivalent.rgba.g, colorEquivalent.rgba.b, colorEquivalent.rgba.a)
  };
}
function _findMatches(model, regex) {
  if (typeof model === "string") {
    return [...model.matchAll(regex)];
  } else {
    return model.findMatches(regex);
  }
}
function computeColors(model) {
  const result = [];
  const initialValidationRegex = /\b(rgb|rgba|hsl|hsla)(\([0-9\s,.\%]*\))|(#)([A-Fa-f0-9]{3})\b|(#)([A-Fa-f0-9]{4})\b|(#)([A-Fa-f0-9]{6})\b|(#)([A-Fa-f0-9]{8})\b/gm;
  const initialValidationMatches = _findMatches(model, initialValidationRegex);
  if (initialValidationMatches.length > 0) {
    for (const initialMatch of initialValidationMatches) {
      const initialCaptureGroups = initialMatch.filter((captureGroup) => captureGroup !== void 0);
      const colorScheme = initialCaptureGroups[1];
      const colorParameters = initialCaptureGroups[2];
      if (!colorParameters) {
        continue;
      }
      let colorInformation;
      if (colorScheme === "rgb") {
        const regexParameters = /^\(\s*(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\s*,\s*(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\s*,\s*(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\s*\)$/gm;
        colorInformation = _findRGBColorInformation(_findRange(model, initialMatch), _findMatches(colorParameters, regexParameters), false);
      } else if (colorScheme === "rgba") {
        const regexParameters = /^\(\s*(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\s*,\s*(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\s*,\s*(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\s*,\s*(0[.][0-9]+|[.][0-9]+|[01][.]|[01])\s*\)$/gm;
        colorInformation = _findRGBColorInformation(_findRange(model, initialMatch), _findMatches(colorParameters, regexParameters), true);
      } else if (colorScheme === "hsl") {
        const regexParameters = /^\(\s*(36[0]|3[0-5][0-9]|[12][0-9][0-9]|[1-9]?[0-9])\s*,\s*(100|\d{1,2}[.]\d*|\d{1,2})%\s*,\s*(100|\d{1,2}[.]\d*|\d{1,2})%\s*\)$/gm;
        colorInformation = _findHSLColorInformation(_findRange(model, initialMatch), _findMatches(colorParameters, regexParameters), false);
      } else if (colorScheme === "hsla") {
        const regexParameters = /^\(\s*(36[0]|3[0-5][0-9]|[12][0-9][0-9]|[1-9]?[0-9])\s*,\s*(100|\d{1,2}[.]\d*|\d{1,2})%\s*,\s*(100|\d{1,2}[.]\d*|\d{1,2})%\s*,\s*(0[.][0-9]+|[.][0-9]+|[01][.]|[01])\s*\)$/gm;
        colorInformation = _findHSLColorInformation(_findRange(model, initialMatch), _findMatches(colorParameters, regexParameters), true);
      } else if (colorScheme === "#") {
        colorInformation = _findHexColorInformation(_findRange(model, initialMatch), colorScheme + colorParameters);
      }
      if (colorInformation) {
        result.push(colorInformation);
      }
    }
  }
  return result;
}
function $i6(model) {
  if (!model || typeof model.getValue !== "function" || typeof model.positionAt !== "function") {
    return [];
  }
  return computeColors(model);
}

// out-build/vs/editor/common/services/findSectionHeaders.js
var markRegex = new RegExp("\\bMARK:\\s*(.*)$", "d");
var trimDashesRegex = /^-+|-+$/g;
function $j6(model, options) {
  let headers = [];
  if (options.findRegionSectionHeaders && options.foldingRules?.markers) {
    const regionHeaders = collectRegionHeaders(model, options);
    headers = headers.concat(regionHeaders);
  }
  if (options.findMarkSectionHeaders) {
    const markHeaders = collectMarkHeaders(model);
    headers = headers.concat(markHeaders);
  }
  return headers;
}
function collectRegionHeaders(model, options) {
  const regionHeaders = [];
  const endLineNumber = model.getLineCount();
  for (let lineNumber = 1; lineNumber <= endLineNumber; lineNumber++) {
    const lineContent = model.getLineContent(lineNumber);
    const match = lineContent.match(options.foldingRules.markers.start);
    if (match) {
      const range = { startLineNumber: lineNumber, startColumn: match[0].length + 1, endLineNumber: lineNumber, endColumn: lineContent.length + 1 };
      if (range.endColumn > range.startColumn) {
        const sectionHeader = {
          range,
          ...getHeaderText(lineContent.substring(match[0].length)),
          shouldBeInComments: false
        };
        if (sectionHeader.text || sectionHeader.hasSeparatorLine) {
          regionHeaders.push(sectionHeader);
        }
      }
    }
  }
  return regionHeaders;
}
function collectMarkHeaders(model) {
  const markHeaders = [];
  const endLineNumber = model.getLineCount();
  for (let lineNumber = 1; lineNumber <= endLineNumber; lineNumber++) {
    const lineContent = model.getLineContent(lineNumber);
    addMarkHeaderIfFound(lineContent, lineNumber, markHeaders);
  }
  return markHeaders;
}
function addMarkHeaderIfFound(lineContent, lineNumber, sectionHeaders) {
  markRegex.lastIndex = 0;
  const match = markRegex.exec(lineContent);
  if (match) {
    const column = match.indices[1][0] + 1;
    const endColumn = match.indices[1][1] + 1;
    const range = { startLineNumber: lineNumber, startColumn: column, endLineNumber: lineNumber, endColumn };
    if (range.endColumn > range.startColumn) {
      const sectionHeader = {
        range,
        ...getHeaderText(match[1]),
        shouldBeInComments: true
      };
      if (sectionHeader.text || sectionHeader.hasSeparatorLine) {
        sectionHeaders.push(sectionHeader);
      }
    }
  }
}
function getHeaderText(text) {
  text = text.trim();
  const hasSeparatorLine = text.startsWith("-");
  text = text.replace(trimDashesRegex, "");
  return { text, hasSeparatorLine };
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

// out-build/vs/editor/common/model/prefixSumComputer.js
var $Pw = class {
  constructor(values) {
    this.a = values;
    this.b = new Uint32Array(values.length);
    this.c = new Int32Array(1);
    this.c[0] = -1;
  }
  getCount() {
    return this.a.length;
  }
  insertValues(insertIndex, insertValues) {
    insertIndex = $tf(insertIndex);
    const oldValues = this.a;
    const oldPrefixSum = this.b;
    const insertValuesLen = insertValues.length;
    if (insertValuesLen === 0) {
      return false;
    }
    this.a = new Uint32Array(oldValues.length + insertValuesLen);
    this.a.set(oldValues.subarray(0, insertIndex), 0);
    this.a.set(oldValues.subarray(insertIndex), insertIndex + insertValuesLen);
    this.a.set(insertValues, insertIndex);
    if (insertIndex - 1 < this.c[0]) {
      this.c[0] = insertIndex - 1;
    }
    this.b = new Uint32Array(this.a.length);
    if (this.c[0] >= 0) {
      this.b.set(oldPrefixSum.subarray(0, this.c[0] + 1));
    }
    return true;
  }
  setValue(index, value) {
    index = $tf(index);
    value = $tf(value);
    if (this.a[index] === value) {
      return false;
    }
    this.a[index] = value;
    if (index - 1 < this.c[0]) {
      this.c[0] = index - 1;
    }
    return true;
  }
  removeValues(startIndex, count) {
    startIndex = $tf(startIndex);
    count = $tf(count);
    const oldValues = this.a;
    const oldPrefixSum = this.b;
    if (startIndex >= oldValues.length) {
      return false;
    }
    const maxCount = oldValues.length - startIndex;
    if (count >= maxCount) {
      count = maxCount;
    }
    if (count === 0) {
      return false;
    }
    this.a = new Uint32Array(oldValues.length - count);
    this.a.set(oldValues.subarray(0, startIndex), 0);
    this.a.set(oldValues.subarray(startIndex + count), startIndex);
    this.b = new Uint32Array(this.a.length);
    if (startIndex - 1 < this.c[0]) {
      this.c[0] = startIndex - 1;
    }
    if (this.c[0] >= 0) {
      this.b.set(oldPrefixSum.subarray(0, this.c[0] + 1));
    }
    return true;
  }
  getTotalSum() {
    if (this.a.length === 0) {
      return 0;
    }
    return this.d(this.a.length - 1);
  }
  /**
   * Returns the sum of the first `index + 1` many items.
   * @returns `SUM(0 <= j <= index, values[j])`.
   */
  getPrefixSum(index) {
    if (index < 0) {
      return 0;
    }
    index = $tf(index);
    return this.d(index);
  }
  d(index) {
    if (index <= this.c[0]) {
      return this.b[index];
    }
    let startIndex = this.c[0] + 1;
    if (startIndex === 0) {
      this.b[0] = this.a[0];
      startIndex++;
    }
    if (index >= this.a.length) {
      index = this.a.length - 1;
    }
    for (let i = startIndex; i <= index; i++) {
      this.b[i] = this.b[i - 1] + this.a[i];
    }
    this.c[0] = Math.max(this.c[0], index);
    return this.b[index];
  }
  getIndexOf(sum) {
    sum = Math.floor(sum);
    this.getTotalSum();
    let low = 0;
    let high = this.a.length - 1;
    let mid = 0;
    let midStop = 0;
    let midStart = 0;
    while (low <= high) {
      mid = low + (high - low) / 2 | 0;
      midStop = this.b[mid];
      midStart = midStop - this.a[mid];
      if (sum < midStart) {
        high = mid - 1;
      } else if (sum >= midStop) {
        low = mid + 1;
      } else {
        break;
      }
    }
    return new $Rw(mid, sum - midStart);
  }
};
var $Rw = class {
  constructor(index, remainder) {
    this.index = index;
    this.remainder = remainder;
    this._prefixSumIndexOfResultBrand = void 0;
    this.index = index;
    this.remainder = remainder;
  }
};

// out-build/vs/editor/common/model/mirrorTextModel.js
var $Sw = class {
  constructor(uri, lines, eol, versionId) {
    this.a = uri;
    this.b = lines;
    this.c = eol;
    this.d = versionId;
    this.f = null;
    this.g = null;
  }
  dispose() {
    this.b.length = 0;
  }
  get version() {
    return this.d;
  }
  getText() {
    if (this.g === null) {
      this.g = this.b.join(this.c);
    }
    return this.g;
  }
  onEvents(e) {
    if (e.eol && e.eol !== this.c) {
      this.c = e.eol;
      this.f = null;
    }
    const changes = e.changes;
    for (const change of changes) {
      this.k(change.range);
      this.l(new $9t(change.range.startLineNumber, change.range.startColumn), change.text);
    }
    this.d = e.versionId;
    this.g = null;
  }
  h() {
    if (!this.f) {
      const eolLength = this.c.length;
      const linesLength = this.b.length;
      const lineStartValues = new Uint32Array(linesLength);
      for (let i = 0; i < linesLength; i++) {
        lineStartValues[i] = this.b[i].length + eolLength;
      }
      this.f = new $Pw(lineStartValues);
    }
  }
  /**
   * All changes to a line's text go through this method
   */
  j(lineIndex, newValue) {
    this.b[lineIndex] = newValue;
    if (this.f) {
      this.f.setValue(lineIndex, this.b[lineIndex].length + this.c.length);
    }
  }
  k(range) {
    if (range.startLineNumber === range.endLineNumber) {
      if (range.startColumn === range.endColumn) {
        return;
      }
      this.j(range.startLineNumber - 1, this.b[range.startLineNumber - 1].substring(0, range.startColumn - 1) + this.b[range.startLineNumber - 1].substring(range.endColumn - 1));
      return;
    }
    this.j(range.startLineNumber - 1, this.b[range.startLineNumber - 1].substring(0, range.startColumn - 1) + this.b[range.endLineNumber - 1].substring(range.endColumn - 1));
    this.b.splice(range.startLineNumber, range.endLineNumber - range.startLineNumber);
    if (this.f) {
      this.f.removeValues(range.startLineNumber, range.endLineNumber - range.startLineNumber);
    }
  }
  l(position, insertText) {
    if (insertText.length === 0) {
      return;
    }
    const insertLines = $Kf(insertText);
    if (insertLines.length === 1) {
      this.j(position.lineNumber - 1, this.b[position.lineNumber - 1].substring(0, position.column - 1) + insertLines[0] + this.b[position.lineNumber - 1].substring(position.column - 1));
      return;
    }
    insertLines[insertLines.length - 1] += this.b[position.lineNumber - 1].substring(position.column - 1);
    this.j(position.lineNumber - 1, this.b[position.lineNumber - 1].substring(0, position.column - 1) + insertLines[0]);
    const newLengths = new Uint32Array(insertLines.length - 1);
    for (let i = 1; i < insertLines.length; i++) {
      this.b.splice(position.lineNumber + i - 1, 0, insertLines[i]);
      newLengths[i - 1] = insertLines[i].length + this.c.length;
    }
    if (this.f) {
      this.f.insertValues(position.lineNumber, newLengths);
    }
  }
};

// out-build/vs/editor/common/services/textModelSync/textModelSync.impl.js
var $k6 = 60 * 1e3;
var $l6 = "workerTextModelSync";
var $n6 = class {
  constructor() {
    this.a = /* @__PURE__ */ Object.create(null);
  }
  bindToServer(workerServer) {
    workerServer.setChannel($l6, this);
  }
  getModel(uri) {
    return this.a[uri];
  }
  getModels() {
    const all = [];
    Object.keys(this.a).forEach((key) => all.push(this.a[key]));
    return all;
  }
  $acceptNewModel(data) {
    this.a[data.url] = new $o6(URI.parse(data.url), data.lines, data.EOL, data.versionId);
  }
  $acceptModelChanged(uri, e) {
    if (!this.a[uri]) {
      return;
    }
    const model = this.a[uri];
    model.onEvents(e);
  }
  $acceptRemovedModel(uri) {
    if (!this.a[uri]) {
      return;
    }
    delete this.a[uri];
  }
};
var $o6 = class extends $Sw {
  get uri() {
    return this.a;
  }
  get eol() {
    return this.c;
  }
  getValue() {
    return this.getText();
  }
  findMatches(regex) {
    const matches = [];
    for (let i = 0; i < this.b.length; i++) {
      const line = this.b[i];
      const offsetToAdd = this.offsetAt(new $9t(i + 1, 1));
      const iteratorOverMatches = line.matchAll(regex);
      for (const match of iteratorOverMatches) {
        if (match.index || match.index === 0) {
          match.index = match.index + offsetToAdd;
        }
        matches.push(match);
      }
    }
    return matches;
  }
  getLinesContent() {
    return this.b.slice(0);
  }
  getLineCount() {
    return this.b.length;
  }
  getLineContent(lineNumber) {
    return this.b[lineNumber - 1];
  }
  getWordAtPosition(position, wordDefinition) {
    const wordAtText = $Lt(position.column, $Jt(wordDefinition), this.b[position.lineNumber - 1], 0);
    if (wordAtText) {
      return new $0t(position.lineNumber, wordAtText.startColumn, position.lineNumber, wordAtText.endColumn);
    }
    return null;
  }
  getWordUntilPosition(position, wordDefinition) {
    const wordAtPosition = this.getWordAtPosition(position, wordDefinition);
    if (!wordAtPosition) {
      return {
        word: "",
        startColumn: position.column,
        endColumn: position.column
      };
    }
    return {
      word: this.b[position.lineNumber - 1].substring(wordAtPosition.startColumn - 1, position.column - 1),
      startColumn: wordAtPosition.startColumn,
      endColumn: position.column
    };
  }
  words(wordDefinition) {
    const lines = this.b;
    const wordenize = this.m.bind(this);
    let lineNumber = 0;
    let lineText = "";
    let wordRangesIdx = 0;
    let wordRanges = [];
    return {
      *[Symbol.iterator]() {
        while (true) {
          if (wordRangesIdx < wordRanges.length) {
            const value = lineText.substring(wordRanges[wordRangesIdx].start, wordRanges[wordRangesIdx].end);
            wordRangesIdx += 1;
            yield value;
          } else {
            if (lineNumber < lines.length) {
              lineText = lines[lineNumber];
              wordRanges = wordenize(lineText, wordDefinition);
              wordRangesIdx = 0;
              lineNumber += 1;
            } else {
              break;
            }
          }
        }
      }
    };
  }
  getLineWords(lineNumber, wordDefinition) {
    const content = this.b[lineNumber - 1];
    const ranges = this.m(content, wordDefinition);
    const words = [];
    for (const range of ranges) {
      words.push({
        word: content.substring(range.start, range.end),
        startColumn: range.start + 1,
        endColumn: range.end + 1
      });
    }
    return words;
  }
  m(content, wordDefinition) {
    const result = [];
    let match;
    wordDefinition.lastIndex = 0;
    while (match = wordDefinition.exec(content)) {
      if (match[0].length === 0) {
        break;
      }
      result.push({ start: match.index, end: match.index + match[0].length });
    }
    return result;
  }
  getValueInRange(range) {
    range = this.n(range);
    if (range.startLineNumber === range.endLineNumber) {
      return this.b[range.startLineNumber - 1].substring(range.startColumn - 1, range.endColumn - 1);
    }
    const lineEnding = this.c;
    const startLineIndex = range.startLineNumber - 1;
    const endLineIndex = range.endLineNumber - 1;
    const resultLines = [];
    resultLines.push(this.b[startLineIndex].substring(range.startColumn - 1));
    for (let i = startLineIndex + 1; i < endLineIndex; i++) {
      resultLines.push(this.b[i]);
    }
    resultLines.push(this.b[endLineIndex].substring(0, range.endColumn - 1));
    return resultLines.join(lineEnding);
  }
  offsetAt(position) {
    position = this.o(position);
    this.h();
    return this.f.getPrefixSum(position.lineNumber - 2) + (position.column - 1);
  }
  positionAt(offset) {
    offset = Math.floor(offset);
    offset = Math.max(0, offset);
    this.h();
    const out = this.f.getIndexOf(offset);
    const lineLength = this.b[out.index].length;
    return {
      lineNumber: 1 + out.index,
      column: 1 + Math.min(out.remainder, lineLength)
    };
  }
  n(range) {
    const start = this.o({ lineNumber: range.startLineNumber, column: range.startColumn });
    const end = this.o({ lineNumber: range.endLineNumber, column: range.endColumn });
    if (start.lineNumber !== range.startLineNumber || start.column !== range.startColumn || end.lineNumber !== range.endLineNumber || end.column !== range.endColumn) {
      return {
        startLineNumber: start.lineNumber,
        startColumn: start.column,
        endLineNumber: end.lineNumber,
        endColumn: end.column
      };
    }
    return range;
  }
  o(position) {
    if (!$9t.isIPosition(position)) {
      throw new Error("bad position");
    }
    let { lineNumber, column } = position;
    let hasChanged = false;
    if (lineNumber < 1) {
      lineNumber = 1;
      column = 1;
      hasChanged = true;
    } else if (lineNumber > this.b.length) {
      lineNumber = this.b.length;
      column = this.b[lineNumber - 1].length + 1;
      hasChanged = true;
    } else {
      const maxCharacter = this.b[lineNumber - 1].length + 1;
      if (column < 1) {
        column = 1;
        hasChanged = true;
      } else if (column > maxCharacter) {
        column = maxCharacter;
        hasChanged = true;
      }
    }
    if (!hasChanged) {
      return position;
    } else {
      return { lineNumber, column };
    }
  }
};

// out-build/vs/editor/common/services/editorSimpleWorker.js
var isESM = true;
var BaseEditorSimpleWorker = class {
  constructor() {
    this.d = new $n6();
  }
  dispose() {
  }
  f(uri) {
    return this.d.getModel(uri);
  }
  g() {
    return this.d.getModels();
  }
  $acceptNewModel(data) {
    this.d.$acceptNewModel(data);
  }
  $acceptModelChanged(uri, e) {
    this.d.$acceptModelChanged(uri, e);
  }
  $acceptRemovedModel(uri) {
    this.d.$acceptRemovedModel(uri);
  }
  async $computeUnicodeHighlights(url, options, range) {
    const model = this.f(url);
    if (!model) {
      return { ranges: [], hasMore: false, ambiguousCharacterCount: 0, invisibleCharacterCount: 0, nonBasicAsciiCharacterCount: 0 };
    }
    return $Q5.computeUnicodeHighlights(model, options, range);
  }
  async $findSectionHeaders(url, options) {
    const model = this.f(url);
    if (!model) {
      return [];
    }
    return $j6(model, options);
  }
  // ---- BEGIN diff --------------------------------------------------------------------------
  async $computeDiff(originalUrl, modifiedUrl, options, algorithm) {
    const original = this.f(originalUrl);
    const modified = this.f(modifiedUrl);
    if (!original || !modified) {
      return null;
    }
    const result = EditorSimpleWorker.h(original, modified, options, algorithm);
    return result;
  }
  static h(originalTextModel, modifiedTextModel, options, algorithm) {
    const diffAlgorithm = algorithm === "advanced" ? $h6.getDefault() : $h6.getLegacy();
    const originalLines = originalTextModel.getLinesContent();
    const modifiedLines = modifiedTextModel.getLinesContent();
    const result = diffAlgorithm.computeDiff(originalLines, modifiedLines, options);
    const identical = result.changes.length > 0 ? false : this.j(originalTextModel, modifiedTextModel);
    function getLineChanges(changes) {
      return changes.map((m) => [m.original.startLineNumber, m.original.endLineNumberExclusive, m.modified.startLineNumber, m.modified.endLineNumberExclusive, m.innerChanges?.map((m2) => [
        m2.originalRange.startLineNumber,
        m2.originalRange.startColumn,
        m2.originalRange.endLineNumber,
        m2.originalRange.endColumn,
        m2.modifiedRange.startLineNumber,
        m2.modifiedRange.startColumn,
        m2.modifiedRange.endLineNumber,
        m2.modifiedRange.endColumn
      ])]);
    }
    return {
      identical,
      quitEarly: result.hitTimeout,
      changes: getLineChanges(result.changes),
      moves: result.moves.map((m) => [
        m.lineRangeMapping.original.startLineNumber,
        m.lineRangeMapping.original.endLineNumberExclusive,
        m.lineRangeMapping.modified.startLineNumber,
        m.lineRangeMapping.modified.endLineNumberExclusive,
        getLineChanges(m.changes)
      ])
    };
  }
  static j(original, modified) {
    const originalLineCount = original.getLineCount();
    const modifiedLineCount = modified.getLineCount();
    if (originalLineCount !== modifiedLineCount) {
      return false;
    }
    for (let line = 1; line <= originalLineCount; line++) {
      const originalLine = original.getLineContent(line);
      const modifiedLine = modified.getLineContent(line);
      if (originalLine !== modifiedLine) {
        return false;
      }
    }
    return true;
  }
  async $computeDirtyDiff(originalUrl, modifiedUrl, ignoreTrimWhitespace) {
    const original = this.f(originalUrl);
    const modified = this.f(modifiedUrl);
    if (!original || !modified) {
      return null;
    }
    const originalLines = original.getLinesContent();
    const modifiedLines = modified.getLinesContent();
    const diffComputer = new $wu(originalLines, modifiedLines, {
      shouldComputeCharChanges: false,
      shouldPostProcessCharChanges: false,
      shouldIgnoreTrimWhitespace: ignoreTrimWhitespace,
      shouldMakePrettyDiff: true,
      maxComputationTime: 1e3
    });
    return diffComputer.computeDiff().changes;
  }
  static {
    this.k = 1e5;
  }
  async $computeMoreMinimalEdits(modelUrl, edits, pretty) {
    const model = this.f(modelUrl);
    if (!model) {
      return edits;
    }
    const result = [];
    let lastEol = void 0;
    edits = edits.slice(0).sort((a, b) => {
      if (a.range && b.range) {
        return $0t.compareRangesUsingStarts(a.range, b.range);
      }
      const aRng = a.range ? 0 : 1;
      const bRng = b.range ? 0 : 1;
      return aRng - bRng;
    });
    let writeIndex = 0;
    for (let readIndex = 1; readIndex < edits.length; readIndex++) {
      if ($0t.getEndPosition(edits[writeIndex].range).equals($0t.getStartPosition(edits[readIndex].range))) {
        edits[writeIndex].range = $0t.fromPositions($0t.getStartPosition(edits[writeIndex].range), $0t.getEndPosition(edits[readIndex].range));
        edits[writeIndex].text += edits[readIndex].text;
      } else {
        writeIndex++;
        edits[writeIndex] = edits[readIndex];
      }
    }
    edits.length = writeIndex + 1;
    for (let { range, text, eol } of edits) {
      if (typeof eol === "number") {
        lastEol = eol;
      }
      if ($0t.isEmpty(range) && !text) {
        continue;
      }
      const original = model.getValueInRange(range);
      text = text.replace(/\r\n|\n|\r/g, model.eol);
      if (original === text) {
        continue;
      }
      if (Math.max(text.length, original.length) > EditorSimpleWorker.k) {
        result.push({ range, text });
        continue;
      }
      const changes = $cu(original, text, pretty);
      const editOffset = model.offsetAt($0t.lift(range).getStartPosition());
      for (const change of changes) {
        const start = model.positionAt(editOffset + change.originalStart);
        const end = model.positionAt(editOffset + change.originalStart + change.originalLength);
        const newEdit = {
          text: text.substr(change.modifiedStart, change.modifiedLength),
          range: { startLineNumber: start.lineNumber, startColumn: start.column, endLineNumber: end.lineNumber, endColumn: end.column }
        };
        if (model.getValueInRange(newEdit.range) !== newEdit.text) {
          result.push(newEdit);
        }
      }
    }
    if (typeof lastEol === "number") {
      result.push({ eol: lastEol, text: "", range: { startLineNumber: 0, startColumn: 0, endLineNumber: 0, endColumn: 0 } });
    }
    return result;
  }
  $computeHumanReadableDiff(modelUrl, edits, options) {
    const model = this.f(modelUrl);
    if (!model) {
      return edits;
    }
    const result = [];
    let lastEol = void 0;
    edits = edits.slice(0).sort((a, b) => {
      if (a.range && b.range) {
        return $0t.compareRangesUsingStarts(a.range, b.range);
      }
      const aRng = a.range ? 0 : 1;
      const bRng = b.range ? 0 : 1;
      return aRng - bRng;
    });
    for (let { range, text, eol } of edits) {
      let addPositions2 = function(pos1, pos2) {
        return new $9t(pos1.lineNumber + pos2.lineNumber - 1, pos2.lineNumber === 1 ? pos1.column + pos2.column - 1 : pos2.column);
      }, getText2 = function(lines, range2) {
        const result2 = [];
        for (let i = range2.startLineNumber; i <= range2.endLineNumber; i++) {
          const line = lines[i - 1];
          if (i === range2.startLineNumber && i === range2.endLineNumber) {
            result2.push(line.substring(range2.startColumn - 1, range2.endColumn - 1));
          } else if (i === range2.startLineNumber) {
            result2.push(line.substring(range2.startColumn - 1));
          } else if (i === range2.endLineNumber) {
            result2.push(line.substring(0, range2.endColumn - 1));
          } else {
            result2.push(line);
          }
        }
        return result2;
      };
      var addPositions = addPositions2, getText = getText2;
      if (typeof eol === "number") {
        lastEol = eol;
      }
      if ($0t.isEmpty(range) && !text) {
        continue;
      }
      const original = model.getValueInRange(range);
      text = text.replace(/\r\n|\n|\r/g, model.eol);
      if (original === text) {
        continue;
      }
      if (Math.max(text.length, original.length) > EditorSimpleWorker.k) {
        result.push({ range, text });
        continue;
      }
      const originalLines = original.split(/\r\n|\n|\r/);
      const modifiedLines = text.split(/\r\n|\n|\r/);
      const diff = $h6.getDefault().computeDiff(originalLines, modifiedLines, options);
      const start = $0t.lift(range).getStartPosition();
      for (const c of diff.changes) {
        if (c.innerChanges) {
          for (const x of c.innerChanges) {
            result.push({
              range: $0t.fromPositions(addPositions2(start, x.originalRange.getStartPosition()), addPositions2(start, x.originalRange.getEndPosition())),
              text: getText2(modifiedLines, x.modifiedRange).join(model.eol)
            });
          }
        } else {
          throw new $pb("The experimental diff algorithm always produces inner changes");
        }
      }
    }
    if (typeof lastEol === "number") {
      result.push({ eol: lastEol, text: "", range: { startLineNumber: 0, startColumn: 0, endLineNumber: 0, endColumn: 0 } });
    }
    return result;
  }
  // ---- END minimal edits ---------------------------------------------------------------
  async $computeLinks(modelUrl) {
    const model = this.f(modelUrl);
    if (!model) {
      return null;
    }
    return $T5(model);
  }
  // --- BEGIN default document colors -----------------------------------------------------------
  async $computeDefaultDocumentColors(modelUrl) {
    const model = this.f(modelUrl);
    if (!model) {
      return null;
    }
    return $i6(model);
  }
  static {
    this.l = 1e4;
  }
  async $textualSuggest(modelUrls, leadingWord, wordDef, wordDefFlags) {
    const sw = new $we();
    const wordDefRegExp = new RegExp(wordDef, wordDefFlags);
    const seen = /* @__PURE__ */ new Set();
    outer: for (const url of modelUrls) {
      const model = this.f(url);
      if (!model) {
        continue;
      }
      for (const word of model.words(wordDefRegExp)) {
        if (word === leadingWord || !isNaN(Number(word))) {
          continue;
        }
        seen.add(word);
        if (seen.size > EditorSimpleWorker.l) {
          break outer;
        }
      }
    }
    return { words: Array.from(seen), duration: sw.elapsed() };
  }
  // ---- END suggest --------------------------------------------------------------------------
  //#region -- word ranges --
  async $computeWordRanges(modelUrl, range, wordDef, wordDefFlags) {
    const model = this.f(modelUrl);
    if (!model) {
      return /* @__PURE__ */ Object.create(null);
    }
    const wordDefRegExp = new RegExp(wordDef, wordDefFlags);
    const result = /* @__PURE__ */ Object.create(null);
    for (let line = range.startLineNumber; line < range.endLineNumber; line++) {
      const words = model.getLineWords(line, wordDefRegExp);
      for (const word of words) {
        if (!isNaN(Number(word.word))) {
          continue;
        }
        let array = result[word.word];
        if (!array) {
          array = [];
          result[word.word] = array;
        }
        array.push({
          startLineNumber: line,
          startColumn: word.startColumn,
          endLineNumber: line,
          endColumn: word.endColumn
        });
      }
    }
    return result;
  }
  //#endregion
  async $navigateValueSet(modelUrl, range, up, wordDef, wordDefFlags) {
    const model = this.f(modelUrl);
    if (!model) {
      return null;
    }
    const wordDefRegExp = new RegExp(wordDef, wordDefFlags);
    if (range.startColumn === range.endColumn) {
      range = {
        startLineNumber: range.startLineNumber,
        startColumn: range.startColumn,
        endLineNumber: range.endLineNumber,
        endColumn: range.endColumn + 1
      };
    }
    const selectionText = model.getValueInRange(range);
    const wordRange = model.getWordAtPosition({ lineNumber: range.startLineNumber, column: range.startColumn }, wordDefRegExp);
    if (!wordRange) {
      return null;
    }
    const word = model.getValueInRange(wordRange);
    const result = $U5.INSTANCE.navigateValueSet(range, selectionText, wordRange, word, up);
    return result;
  }
};
var EditorSimpleWorker = class extends BaseEditorSimpleWorker {
  constructor(o, p) {
    super();
    this.o = o;
    this.p = p;
    this.n = null;
  }
  async $ping() {
    return "pong";
  }
  // ---- BEGIN foreign module support --------------------------------------------------------------------------
  $loadForeignModule(moduleId, createData, foreignHostMethods) {
    const proxyMethodRequest = (method, args) => {
      return this.o.$fhr(method, args);
    };
    const foreignHost = $Io(foreignHostMethods, proxyMethodRequest);
    const ctx = {
      host: foreignHost,
      getMirrorModels: () => {
        return this.g();
      }
    };
    if (this.p) {
      this.n = this.p(ctx, createData);
      return Promise.resolve($Ho(this.n));
    }
    return new Promise((resolve, reject) => {
      const onModuleCallback = (foreignModule) => {
        this.n = foreignModule.create(ctx, createData);
        resolve($Ho(this.n));
      };
      if (!isESM) {
        __require([`${moduleId}`], onModuleCallback, reject);
      } else {
        const url = $fh.asBrowserUri(`${moduleId}.js`).toString(true);
        import(`${url}`).then(onModuleCallback).catch(reject);
      }
    });
  }
  // foreign method request
  $fmr(method, args) {
    if (!this.n || typeof this.n[method] !== "function") {
      return Promise.reject(new Error("Missing requestHandler or method: " + method));
    }
    try {
      return Promise.resolve(this.n[method].apply(this.n, args));
    } catch (e) {
      return Promise.reject(e);
    }
  }
};
function create(workerServer) {
  return new EditorSimpleWorker($X5.getChannel(workerServer), null);
}
if (typeof importScripts === "function") {
  globalThis.monaco = $W5();
}

// out-build/vs/base/common/worker/simpleWorker.js
var isESM2 = true;
var DEFAULT_CHANNEL = "default";
var INITIALIZE = "$initialize";
var MessageType;
(function(MessageType2) {
  MessageType2[MessageType2["Request"] = 0] = "Request";
  MessageType2[MessageType2["Reply"] = 1] = "Reply";
  MessageType2[MessageType2["SubscribeEvent"] = 2] = "SubscribeEvent";
  MessageType2[MessageType2["Event"] = 3] = "Event";
  MessageType2[MessageType2["UnsubscribeEvent"] = 4] = "UnsubscribeEvent";
})(MessageType || (MessageType = {}));
var RequestMessage = class {
  constructor(vsWorker, req, channel, method, args) {
    this.vsWorker = vsWorker;
    this.req = req;
    this.channel = channel;
    this.method = method;
    this.args = args;
    this.type = 0;
  }
};
var ReplyMessage = class {
  constructor(vsWorker, seq, res, err) {
    this.vsWorker = vsWorker;
    this.seq = seq;
    this.res = res;
    this.err = err;
    this.type = 1;
  }
};
var SubscribeEventMessage = class {
  constructor(vsWorker, req, channel, eventName, arg) {
    this.vsWorker = vsWorker;
    this.req = req;
    this.channel = channel;
    this.eventName = eventName;
    this.arg = arg;
    this.type = 2;
  }
};
var EventMessage = class {
  constructor(vsWorker, req, event) {
    this.vsWorker = vsWorker;
    this.req = req;
    this.event = event;
    this.type = 3;
  }
};
var UnsubscribeEventMessage = class {
  constructor(vsWorker, req) {
    this.vsWorker = vsWorker;
    this.req = req;
    this.type = 4;
  }
};
var SimpleWorkerProtocol = class {
  constructor(handler) {
    this.a = -1;
    this.g = handler;
    this.b = 0;
    this.c = /* @__PURE__ */ Object.create(null);
    this.d = /* @__PURE__ */ new Map();
    this.f = /* @__PURE__ */ new Map();
  }
  setWorkerId(workerId) {
    this.a = workerId;
  }
  sendMessage(channel, method, args) {
    const req = String(++this.b);
    return new Promise((resolve, reject) => {
      this.c[req] = {
        resolve,
        reject
      };
      this.o(new RequestMessage(this.a, req, channel, method, args));
    });
  }
  listen(channel, eventName, arg) {
    let req = null;
    const emitter = new $Ce({
      onWillAddFirstListener: () => {
        req = String(++this.b);
        this.d.set(req, emitter);
        this.o(new SubscribeEventMessage(this.a, req, channel, eventName, arg));
      },
      onDidRemoveLastListener: () => {
        this.d.delete(req);
        this.o(new UnsubscribeEventMessage(this.a, req));
        req = null;
      }
    });
    return emitter.event;
  }
  handleMessage(message) {
    if (!message || !message.vsWorker) {
      return;
    }
    if (this.a !== -1 && message.vsWorker !== this.a) {
      return;
    }
    this.h(message);
  }
  createProxyToRemoteChannel(channel, sendMessageBarrier) {
    const handler = {
      get: (target, name) => {
        if (typeof name === "string" && !target[name]) {
          if (propertyIsDynamicEvent(name)) {
            target[name] = (arg) => {
              return this.listen(channel, name, arg);
            };
          } else if (propertyIsEvent(name)) {
            target[name] = this.listen(channel, name, void 0);
          } else if (name.charCodeAt(0) === 36) {
            target[name] = async (...myArgs) => {
              await sendMessageBarrier?.();
              return this.sendMessage(channel, name, myArgs);
            };
          }
        }
        return target[name];
      }
    };
    return new Proxy(/* @__PURE__ */ Object.create(null), handler);
  }
  h(msg) {
    switch (msg.type) {
      case 1:
        return this.j(msg);
      case 0:
        return this.k(msg);
      case 2:
        return this.l(msg);
      case 3:
        return this.m(msg);
      case 4:
        return this.n(msg);
    }
  }
  j(replyMessage) {
    if (!this.c[replyMessage.seq]) {
      console.warn("Got reply to unknown seq");
      return;
    }
    const reply = this.c[replyMessage.seq];
    delete this.c[replyMessage.seq];
    if (replyMessage.err) {
      let err = replyMessage.err;
      if (replyMessage.err.$isError) {
        err = new Error();
        err.name = replyMessage.err.name;
        err.message = replyMessage.err.message;
        err.stack = replyMessage.err.stack;
      }
      reply.reject(err);
      return;
    }
    reply.resolve(replyMessage.res);
  }
  k(requestMessage) {
    const req = requestMessage.req;
    const result = this.g.handleMessage(requestMessage.channel, requestMessage.method, requestMessage.args);
    result.then((r) => {
      this.o(new ReplyMessage(this.a, req, r, void 0));
    }, (e) => {
      if (e.detail instanceof Error) {
        e.detail = $cb(e.detail);
      }
      this.o(new ReplyMessage(this.a, req, void 0, $cb(e)));
    });
  }
  l(msg) {
    const req = msg.req;
    const disposable = this.g.handleEvent(msg.channel, msg.eventName, msg.arg)((event) => {
      this.o(new EventMessage(this.a, req, event));
    });
    this.f.set(req, disposable);
  }
  m(msg) {
    if (!this.d.has(msg.req)) {
      console.warn("Got event for unknown req");
      return;
    }
    this.d.get(msg.req).fire(msg.event);
  }
  n(msg) {
    if (!this.f.has(msg.req)) {
      console.warn("Got unsubscribe for unknown req");
      return;
    }
    this.f.get(msg.req).dispose();
    this.f.delete(msg.req);
  }
  o(msg) {
    const transfer = [];
    if (msg.type === 0) {
      for (let i = 0; i < msg.args.length; i++) {
        if (msg.args[i] instanceof ArrayBuffer) {
          transfer.push(msg.args[i]);
        }
      }
    } else if (msg.type === 1) {
      if (msg.res instanceof ArrayBuffer) {
        transfer.push(msg.res);
      }
    }
    this.g.sendMessage(msg, transfer);
  }
};
function propertyIsEvent(name) {
  return name[0] === "o" && name[1] === "n" && $Wf(name.charCodeAt(2));
}
function propertyIsDynamicEvent(name) {
  return /^onDynamic/.test(name) && $Wf(name.charCodeAt(9));
}
var SimpleWorkerServer = class {
  constructor(postMessage, requestHandlerFactory) {
    this.d = /* @__PURE__ */ new Map();
    this.f = /* @__PURE__ */ new Map();
    this.a = requestHandlerFactory;
    this.b = null;
    this.c = new SimpleWorkerProtocol({
      sendMessage: (msg, transfer) => {
        postMessage(msg, transfer);
      },
      handleMessage: (channel, method, args) => this.g(channel, method, args),
      handleEvent: (channel, eventName, arg) => this.h(channel, eventName, arg)
    });
  }
  onmessage(msg) {
    this.c.handleMessage(msg);
  }
  g(channel, method, args) {
    if (channel === DEFAULT_CHANNEL && method === INITIALIZE) {
      return this.j(args[0], args[1], args[2]);
    }
    const requestHandler = channel === DEFAULT_CHANNEL ? this.b : this.d.get(channel);
    if (!requestHandler) {
      return Promise.reject(new Error(`Missing channel ${channel} on worker thread`));
    }
    if (typeof requestHandler[method] !== "function") {
      return Promise.reject(new Error(`Missing method ${method} on worker thread channel ${channel}`));
    }
    try {
      return Promise.resolve(requestHandler[method].apply(requestHandler, args));
    } catch (e) {
      return Promise.reject(e);
    }
  }
  h(channel, eventName, arg) {
    const requestHandler = channel === DEFAULT_CHANNEL ? this.b : this.d.get(channel);
    if (!requestHandler) {
      throw new Error(`Missing channel ${channel} on worker thread`);
    }
    if (propertyIsDynamicEvent(eventName)) {
      const event = requestHandler[eventName].call(requestHandler, arg);
      if (typeof event !== "function") {
        throw new Error(`Missing dynamic event ${eventName} on request handler.`);
      }
      return event;
    }
    if (propertyIsEvent(eventName)) {
      const event = requestHandler[eventName];
      if (typeof event !== "function") {
        throw new Error(`Missing event ${eventName} on request handler.`);
      }
      return event;
    }
    throw new Error(`Malformed event name ${eventName}`);
  }
  setChannel(channel, handler) {
    this.d.set(channel, handler);
  }
  getChannel(channel) {
    if (!this.f.has(channel)) {
      const inst = this.c.createProxyToRemoteChannel(channel);
      this.f.set(channel, inst);
    }
    return this.f.get(channel);
  }
  async j(workerId, loaderConfig, moduleId) {
    this.c.setWorkerId(workerId);
    if (this.a) {
      this.b = this.a(this);
      return;
    }
    if (loaderConfig) {
      if (typeof loaderConfig.baseUrl !== "undefined") {
        delete loaderConfig["baseUrl"];
      }
      if (typeof loaderConfig.paths !== "undefined") {
        if (typeof loaderConfig.paths.vs !== "undefined") {
          delete loaderConfig.paths["vs"];
        }
      }
      if (typeof loaderConfig.trustedTypesPolicy !== "undefined") {
        delete loaderConfig["trustedTypesPolicy"];
      }
      loaderConfig.catchError = true;
      globalThis.require.config(loaderConfig);
    }
    if (isESM2) {
      const url = $fh.asBrowserUri(`${moduleId}.js`).toString(true);
      return import(`${url}`).then((module) => {
        this.b = module.create(this);
        if (!this.b) {
          throw new Error(`No RequestHandler!`);
        }
      });
    }
    return new Promise((resolve, reject) => {
      const req = globalThis.require;
      req([moduleId], (module) => {
        this.b = module.create(this);
        if (!this.b) {
          reject(new Error(`No RequestHandler!`));
          return;
        }
        resolve();
      }, reject);
    });
  }
};

// out-build/vs/editor/common/services/editorWorkerBootstrap.js
var initialized = false;
function $knc(factory) {
  if (initialized) {
    return;
  }
  initialized = true;
  const simpleWorker = new SimpleWorkerServer((msg) => {
    globalThis.postMessage(msg);
  }, (workerServer) => new EditorSimpleWorker($X5.getChannel(workerServer), null));
  globalThis.onmessage = (e) => {
    simpleWorker.onmessage(e.data);
  };
}
globalThis.onmessage = (e) => {
  if (!initialized) {
    $knc(null);
  }
};
function $lnc(createFn) {
  globalThis.onmessage = () => {
    $knc((ctx, createData) => {
      return createFn.call(self, ctx, createData);
    });
  };
}

// out-build/vs/editor/common/services/editorSimpleWorker.esm.js
$lnc(create);

//# sourceMappingURL=editorSimpleWorker.esm.js.map
