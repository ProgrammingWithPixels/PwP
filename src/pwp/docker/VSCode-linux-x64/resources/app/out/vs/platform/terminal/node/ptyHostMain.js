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
function $Ub(array) {
  return array.filter((e) => !!e);
}
function $8b(array, _seed) {
  let rand;
  if (typeof _seed === "number") {
    let seed = _seed;
    rand = () => {
      const x = Math.sin(seed++) * 179426549;
      return x - Math.floor(x);
    };
  } else {
    rand = Math.random;
  }
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(rand() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}
function $bc(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
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
var $0c = class {
  constructor() {
    this.b = false;
    $Zc(this);
  }
  get value() {
    return this.b ? void 0 : this.a;
  }
  set value(value) {
    if (this.b || value === this.a) {
      return;
    }
    this.a?.dispose();
    if (value) {
      setParentOfDisposable(value, this);
    }
    this.a = value;
  }
  /**
   * Resets the stored value and disposed of the previously stored value.
   */
  clear() {
    this.value = void 0;
  }
  dispose() {
    this.b = true;
    $1c(this);
    this.a?.dispose();
    this.a = void 0;
  }
  /**
   * Clears the value, but does not dispose it.
   * The old value is returned.
  */
  clearAndLeak() {
    const oldValue = this.a;
    this.a = void 0;
    if (oldValue) {
      setParentOfDisposable(oldValue, null);
    }
    return oldValue;
  }
};
var $$c = class {
  constructor(initialValue) {
    this.a = new $0c();
    this.b = false;
    this.a.value = initialValue;
  }
  get value() {
    return this.a.value;
  }
  set value(value) {
    if (this.b || value === this.a.value) {
      return;
    }
    this.a.value = value;
  }
  dispose() {
    this.b = true;
    this.a.dispose();
  }
};
var $fd = class {
  constructor() {
    this.a = /* @__PURE__ */ new Map();
    this.b = false;
    $Zc(this);
  }
  /**
   * Disposes of all stored values and mark this object as disposed.
   *
   * Trying to use this object after it has been disposed of is an error.
   */
  dispose() {
    $1c(this);
    this.b = true;
    this.clearAndDisposeAll();
  }
  /**
   * Disposes of all stored values and clear the map, but DO NOT mark this object as disposed.
   */
  clearAndDisposeAll() {
    if (!this.a.size) {
      return;
    }
    try {
      $4c(this.a.values());
    } finally {
      this.a.clear();
    }
  }
  has(key) {
    return this.a.has(key);
  }
  get size() {
    return this.a.size;
  }
  get(key) {
    return this.a.get(key);
  }
  set(key, value, skipDisposeOnOverwrite = false) {
    if (this.b) {
      console.warn(new Error("Trying to add a disposable to a DisposableMap that has already been disposed of. The added object will be leaked!").stack);
    }
    if (!skipDisposeOnOverwrite) {
      this.a.get(key)?.dispose();
    }
    this.a.set(key, value);
  }
  /**
   * Delete the value stored for `key` from this map and also dispose of it.
   */
  deleteAndDispose(key) {
    this.a.get(key)?.dispose();
    this.a.delete(key);
  }
  /**
   * Delete the value stored for `key` from this map but return it. The caller is
   * responsible for disposing of the value.
   */
  deleteAndLeak(key) {
    const value = this.a.get(key);
    this.a.delete(key);
    return value;
  }
  keys() {
    return this.a.keys();
  }
  values() {
    return this.a.values();
  }
  [Symbol.iterator]() {
    return this.a[Symbol.iterator]();
  }
};

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
  static fromString(source, options) {
    const dontUseNodeBuffer = options?.dontUseNodeBuffer || false;
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
var $x = _platform;
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
var OS = _isMacintosh || _isIOS ? 2 : _isWindows ? 1 : 3;
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
function normalizeString(path2, allowAboveRoot, separator, isPathSeparator2) {
  let res = "";
  let lastSegmentLength = 0;
  let lastSlash = -1;
  let dots = 0;
  let code = 0;
  for (let i = 0; i <= path2.length; ++i) {
    if (i < path2.length) {
      code = path2.charCodeAt(i);
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
          res += `${separator}${path2.slice(lastSlash + 1, i)}`;
        } else {
          res = path2.slice(lastSlash + 1, i);
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
      let path2;
      if (i >= 0) {
        path2 = pathSegments[i];
        validateString(path2, `paths[${i}]`);
        if (path2.length === 0) {
          continue;
        }
      } else if (resolvedDevice.length === 0) {
        path2 = cwd();
      } else {
        path2 = env[`=${resolvedDevice}`] || cwd();
        if (path2 === void 0 || path2.slice(0, 2).toLowerCase() !== resolvedDevice.toLowerCase() && path2.charCodeAt(2) === CHAR_BACKWARD_SLASH) {
          path2 = `${resolvedDevice}\\`;
        }
      }
      const len = path2.length;
      let rootEnd = 0;
      let device = "";
      let isAbsolute = false;
      const code = path2.charCodeAt(0);
      if (len === 1) {
        if (isPathSeparator(code)) {
          rootEnd = 1;
          isAbsolute = true;
        }
      } else if (isPathSeparator(code)) {
        isAbsolute = true;
        if (isPathSeparator(path2.charCodeAt(1))) {
          let j = 2;
          let last = j;
          while (j < len && !isPathSeparator(path2.charCodeAt(j))) {
            j++;
          }
          if (j < len && j !== last) {
            const firstPart = path2.slice(last, j);
            last = j;
            while (j < len && isPathSeparator(path2.charCodeAt(j))) {
              j++;
            }
            if (j < len && j !== last) {
              last = j;
              while (j < len && !isPathSeparator(path2.charCodeAt(j))) {
                j++;
              }
              if (j === len || j !== last) {
                device = `\\\\${firstPart}\\${path2.slice(last, j)}`;
                rootEnd = j;
              }
            }
          }
        } else {
          rootEnd = 1;
        }
      } else if (isWindowsDeviceRoot(code) && path2.charCodeAt(1) === CHAR_COLON) {
        device = path2.slice(0, 2);
        rootEnd = 2;
        if (len > 2 && isPathSeparator(path2.charCodeAt(2))) {
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
        resolvedTail = `${path2.slice(rootEnd)}\\${resolvedTail}`;
        resolvedAbsolute = isAbsolute;
        if (isAbsolute && resolvedDevice.length > 0) {
          break;
        }
      }
    }
    resolvedTail = normalizeString(resolvedTail, !resolvedAbsolute, "\\", isPathSeparator);
    return resolvedAbsolute ? `${resolvedDevice}\\${resolvedTail}` : `${resolvedDevice}${resolvedTail}` || ".";
  },
  normalize(path2) {
    validateString(path2, "path");
    const len = path2.length;
    if (len === 0) {
      return ".";
    }
    let rootEnd = 0;
    let device;
    let isAbsolute = false;
    const code = path2.charCodeAt(0);
    if (len === 1) {
      return isPosixPathSeparator(code) ? "\\" : path2;
    }
    if (isPathSeparator(code)) {
      isAbsolute = true;
      if (isPathSeparator(path2.charCodeAt(1))) {
        let j = 2;
        let last = j;
        while (j < len && !isPathSeparator(path2.charCodeAt(j))) {
          j++;
        }
        if (j < len && j !== last) {
          const firstPart = path2.slice(last, j);
          last = j;
          while (j < len && isPathSeparator(path2.charCodeAt(j))) {
            j++;
          }
          if (j < len && j !== last) {
            last = j;
            while (j < len && !isPathSeparator(path2.charCodeAt(j))) {
              j++;
            }
            if (j === len) {
              return `\\\\${firstPart}\\${path2.slice(last)}\\`;
            }
            if (j !== last) {
              device = `\\\\${firstPart}\\${path2.slice(last, j)}`;
              rootEnd = j;
            }
          }
        }
      } else {
        rootEnd = 1;
      }
    } else if (isWindowsDeviceRoot(code) && path2.charCodeAt(1) === CHAR_COLON) {
      device = path2.slice(0, 2);
      rootEnd = 2;
      if (len > 2 && isPathSeparator(path2.charCodeAt(2))) {
        isAbsolute = true;
        rootEnd = 3;
      }
    }
    let tail = rootEnd < len ? normalizeString(path2.slice(rootEnd), !isAbsolute, "\\", isPathSeparator) : "";
    if (tail.length === 0 && !isAbsolute) {
      tail = ".";
    }
    if (tail.length > 0 && isPathSeparator(path2.charCodeAt(len - 1))) {
      tail += "\\";
    }
    if (device === void 0) {
      return isAbsolute ? `\\${tail}` : tail;
    }
    return isAbsolute ? `${device}\\${tail}` : `${device}${tail}`;
  },
  isAbsolute(path2) {
    validateString(path2, "path");
    const len = path2.length;
    if (len === 0) {
      return false;
    }
    const code = path2.charCodeAt(0);
    return isPathSeparator(code) || // Possible device root
    len > 2 && isWindowsDeviceRoot(code) && path2.charCodeAt(1) === CHAR_COLON && isPathSeparator(path2.charCodeAt(2));
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
  toNamespacedPath(path2) {
    if (typeof path2 !== "string" || path2.length === 0) {
      return path2;
    }
    const resolvedPath = $rc.resolve(path2);
    if (resolvedPath.length <= 2) {
      return path2;
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
    return path2;
  },
  dirname(path2) {
    validateString(path2, "path");
    const len = path2.length;
    if (len === 0) {
      return ".";
    }
    let rootEnd = -1;
    let offset = 0;
    const code = path2.charCodeAt(0);
    if (len === 1) {
      return isPathSeparator(code) ? path2 : ".";
    }
    if (isPathSeparator(code)) {
      rootEnd = offset = 1;
      if (isPathSeparator(path2.charCodeAt(1))) {
        let j = 2;
        let last = j;
        while (j < len && !isPathSeparator(path2.charCodeAt(j))) {
          j++;
        }
        if (j < len && j !== last) {
          last = j;
          while (j < len && isPathSeparator(path2.charCodeAt(j))) {
            j++;
          }
          if (j < len && j !== last) {
            last = j;
            while (j < len && !isPathSeparator(path2.charCodeAt(j))) {
              j++;
            }
            if (j === len) {
              return path2;
            }
            if (j !== last) {
              rootEnd = offset = j + 1;
            }
          }
        }
      }
    } else if (isWindowsDeviceRoot(code) && path2.charCodeAt(1) === CHAR_COLON) {
      rootEnd = len > 2 && isPathSeparator(path2.charCodeAt(2)) ? 3 : 2;
      offset = rootEnd;
    }
    let end = -1;
    let matchedSlash = true;
    for (let i = len - 1; i >= offset; --i) {
      if (isPathSeparator(path2.charCodeAt(i))) {
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
    return path2.slice(0, end);
  },
  basename(path2, suffix) {
    if (suffix !== void 0) {
      validateString(suffix, "suffix");
    }
    validateString(path2, "path");
    let start = 0;
    let end = -1;
    let matchedSlash = true;
    let i;
    if (path2.length >= 2 && isWindowsDeviceRoot(path2.charCodeAt(0)) && path2.charCodeAt(1) === CHAR_COLON) {
      start = 2;
    }
    if (suffix !== void 0 && suffix.length > 0 && suffix.length <= path2.length) {
      if (suffix === path2) {
        return "";
      }
      let extIdx = suffix.length - 1;
      let firstNonSlashEnd = -1;
      for (i = path2.length - 1; i >= start; --i) {
        const code = path2.charCodeAt(i);
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
        end = path2.length;
      }
      return path2.slice(start, end);
    }
    for (i = path2.length - 1; i >= start; --i) {
      if (isPathSeparator(path2.charCodeAt(i))) {
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
    return path2.slice(start, end);
  },
  extname(path2) {
    validateString(path2, "path");
    let start = 0;
    let startDot = -1;
    let startPart = 0;
    let end = -1;
    let matchedSlash = true;
    let preDotState = 0;
    if (path2.length >= 2 && path2.charCodeAt(1) === CHAR_COLON && isWindowsDeviceRoot(path2.charCodeAt(0))) {
      start = startPart = 2;
    }
    for (let i = path2.length - 1; i >= start; --i) {
      const code = path2.charCodeAt(i);
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
    return path2.slice(startDot, end);
  },
  format: _format2.bind(null, "\\"),
  parse(path2) {
    validateString(path2, "path");
    const ret = { root: "", dir: "", base: "", ext: "", name: "" };
    if (path2.length === 0) {
      return ret;
    }
    const len = path2.length;
    let rootEnd = 0;
    let code = path2.charCodeAt(0);
    if (len === 1) {
      if (isPathSeparator(code)) {
        ret.root = ret.dir = path2;
        return ret;
      }
      ret.base = ret.name = path2;
      return ret;
    }
    if (isPathSeparator(code)) {
      rootEnd = 1;
      if (isPathSeparator(path2.charCodeAt(1))) {
        let j = 2;
        let last = j;
        while (j < len && !isPathSeparator(path2.charCodeAt(j))) {
          j++;
        }
        if (j < len && j !== last) {
          last = j;
          while (j < len && isPathSeparator(path2.charCodeAt(j))) {
            j++;
          }
          if (j < len && j !== last) {
            last = j;
            while (j < len && !isPathSeparator(path2.charCodeAt(j))) {
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
    } else if (isWindowsDeviceRoot(code) && path2.charCodeAt(1) === CHAR_COLON) {
      if (len <= 2) {
        ret.root = ret.dir = path2;
        return ret;
      }
      rootEnd = 2;
      if (isPathSeparator(path2.charCodeAt(2))) {
        if (len === 3) {
          ret.root = ret.dir = path2;
          return ret;
        }
        rootEnd = 3;
      }
    }
    if (rootEnd > 0) {
      ret.root = path2.slice(0, rootEnd);
    }
    let startDot = -1;
    let startPart = rootEnd;
    let end = -1;
    let matchedSlash = true;
    let i = path2.length - 1;
    let preDotState = 0;
    for (; i >= rootEnd; --i) {
      code = path2.charCodeAt(i);
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
        ret.base = ret.name = path2.slice(startPart, end);
      } else {
        ret.name = path2.slice(startPart, startDot);
        ret.base = path2.slice(startPart, end);
        ret.ext = path2.slice(startDot, end);
      }
    }
    if (startPart > 0 && startPart !== rootEnd) {
      ret.dir = path2.slice(0, startPart - 1);
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
      const path2 = i >= 0 ? pathSegments[i] : posixCwd();
      validateString(path2, `paths[${i}]`);
      if (path2.length === 0) {
        continue;
      }
      resolvedPath = `${path2}/${resolvedPath}`;
      resolvedAbsolute = path2.charCodeAt(0) === CHAR_FORWARD_SLASH;
    }
    resolvedPath = normalizeString(resolvedPath, !resolvedAbsolute, "/", isPosixPathSeparator);
    if (resolvedAbsolute) {
      return `/${resolvedPath}`;
    }
    return resolvedPath.length > 0 ? resolvedPath : ".";
  },
  normalize(path2) {
    validateString(path2, "path");
    if (path2.length === 0) {
      return ".";
    }
    const isAbsolute = path2.charCodeAt(0) === CHAR_FORWARD_SLASH;
    const trailingSeparator = path2.charCodeAt(path2.length - 1) === CHAR_FORWARD_SLASH;
    path2 = normalizeString(path2, !isAbsolute, "/", isPosixPathSeparator);
    if (path2.length === 0) {
      if (isAbsolute) {
        return "/";
      }
      return trailingSeparator ? "./" : ".";
    }
    if (trailingSeparator) {
      path2 += "/";
    }
    return isAbsolute ? `/${path2}` : path2;
  },
  isAbsolute(path2) {
    validateString(path2, "path");
    return path2.length > 0 && path2.charCodeAt(0) === CHAR_FORWARD_SLASH;
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
  toNamespacedPath(path2) {
    return path2;
  },
  dirname(path2) {
    validateString(path2, "path");
    if (path2.length === 0) {
      return ".";
    }
    const hasRoot = path2.charCodeAt(0) === CHAR_FORWARD_SLASH;
    let end = -1;
    let matchedSlash = true;
    for (let i = path2.length - 1; i >= 1; --i) {
      if (path2.charCodeAt(i) === CHAR_FORWARD_SLASH) {
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
    return path2.slice(0, end);
  },
  basename(path2, suffix) {
    if (suffix !== void 0) {
      validateString(suffix, "ext");
    }
    validateString(path2, "path");
    let start = 0;
    let end = -1;
    let matchedSlash = true;
    let i;
    if (suffix !== void 0 && suffix.length > 0 && suffix.length <= path2.length) {
      if (suffix === path2) {
        return "";
      }
      let extIdx = suffix.length - 1;
      let firstNonSlashEnd = -1;
      for (i = path2.length - 1; i >= 0; --i) {
        const code = path2.charCodeAt(i);
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
        end = path2.length;
      }
      return path2.slice(start, end);
    }
    for (i = path2.length - 1; i >= 0; --i) {
      if (path2.charCodeAt(i) === CHAR_FORWARD_SLASH) {
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
    return path2.slice(start, end);
  },
  extname(path2) {
    validateString(path2, "path");
    let startDot = -1;
    let startPart = 0;
    let end = -1;
    let matchedSlash = true;
    let preDotState = 0;
    for (let i = path2.length - 1; i >= 0; --i) {
      const code = path2.charCodeAt(i);
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
    return path2.slice(startDot, end);
  },
  format: _format2.bind(null, "/"),
  parse(path2) {
    validateString(path2, "path");
    const ret = { root: "", dir: "", base: "", ext: "", name: "" };
    if (path2.length === 0) {
      return ret;
    }
    const isAbsolute = path2.charCodeAt(0) === CHAR_FORWARD_SLASH;
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
    let i = path2.length - 1;
    let preDotState = 0;
    for (; i >= start; --i) {
      const code = path2.charCodeAt(i);
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
        ret.base = ret.name = path2.slice(start2, end);
      } else {
        ret.name = path2.slice(start2, startDot);
        ret.base = path2.slice(start2, end);
        ret.ext = path2.slice(startDot, end);
      }
    }
    if (startPart > 0) {
      ret.dir = path2.slice(0, startPart - 1);
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
function _referenceResolution(scheme, path2) {
  switch (scheme) {
    case "https":
    case "http":
    case "file":
      if (!path2) {
        path2 = _slash;
      } else if (path2[0] !== _slash) {
        path2 = _slash + path2;
      }
      break;
  }
  return path2;
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
  constructor(schemeOrData, authority, path2, query, fragment, _strict = false) {
    if (typeof schemeOrData === "object") {
      this.scheme = schemeOrData.scheme || _empty;
      this.authority = schemeOrData.authority || _empty;
      this.path = schemeOrData.path || _empty;
      this.query = schemeOrData.query || _empty;
      this.fragment = schemeOrData.fragment || _empty;
    } else {
      this.scheme = _schemeFix(schemeOrData, _strict);
      this.authority = authority || _empty;
      this.path = _referenceResolution(this.scheme, path2 || _empty);
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
    let { scheme, authority, path: path2, query, fragment } = change;
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
    if (path2 === void 0) {
      path2 = this.path;
    } else if (path2 === null) {
      path2 = _empty;
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
    if (scheme === this.scheme && authority === this.authority && path2 === this.path && query === this.query && fragment === this.fragment) {
      return this;
    }
    return new Uri(scheme, authority, path2, query, fragment);
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
  static file(path2) {
    let authority = _empty;
    if ($l) {
      path2 = path2.replace(/\\/g, _slash);
    }
    if (path2[0] === _slash && path2[1] === _slash) {
      const idx = path2.indexOf(_slash, 2);
      if (idx === -1) {
        authority = path2.substring(2);
        path2 = _slash;
      } else {
        authority = path2.substring(2, idx);
        path2 = path2.substring(idx) || _slash;
      }
    }
    return new Uri("file", authority, path2, _empty, _empty);
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
function encodeURIComponentMinimal(path2) {
  let res = void 0;
  for (let pos = 0; pos < path2.length; pos++) {
    const code = path2.charCodeAt(pos);
    if (code === 35 || code === 63) {
      if (res === void 0) {
        res = path2.substr(0, pos);
      }
      res += encodeTable[code];
    } else {
      if (res !== void 0) {
        res += path2[pos];
      }
    }
  }
  return res !== void 0 ? res : path2;
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
  let { scheme, authority, path: path2, query, fragment } = uri;
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
  if (path2) {
    if (path2.length >= 3 && path2.charCodeAt(0) === 47 && path2.charCodeAt(2) === 58) {
      const code = path2.charCodeAt(1);
      if (code >= 65 && code <= 90) {
        path2 = `/${String.fromCharCode(code + 32)}:${path2.substr(3)}`;
      }
    } else if (path2.length >= 2 && path2.charCodeAt(1) === 58) {
      const code = path2.charCodeAt(0);
      if (code >= 65 && code <= 90) {
        path2 = `${String.fromCharCode(code + 32)}:${path2.substr(2)}`;
      }
    }
    res += encoder(path2, true, false);
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

// out-build/vs/base/common/uriIpc.js
var $7n = new class {
  transformIncoming(uri) {
    return uri;
  }
  transformOutgoing(uri) {
    return uri;
  }
  transformOutgoingURI(uri) {
    return uri;
  }
  transformOutgoingScheme(scheme) {
    return scheme;
  }
}();

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
var $Ie = class {
  constructor() {
    this.g = false;
    this.h = [];
    this.f = new $Ce({
      onWillAddFirstListener: () => this.j(),
      onDidRemoveLastListener: () => this.k()
    });
  }
  get event() {
    return this.f.event;
  }
  add(event) {
    const e = { event, listener: null };
    this.h.push(e);
    if (this.g) {
      this.m(e);
    }
    const dispose = () => {
      if (this.g) {
        this.o(e);
      }
      const idx = this.h.indexOf(e);
      this.h.splice(idx, 1);
    };
    return $7c($qb(dispose));
  }
  j() {
    this.g = true;
    this.h.forEach((e) => this.m(e));
  }
  k() {
    this.g = false;
    this.h.forEach((e) => this.o(e));
  }
  m(e) {
    e.listener = e.event((r) => this.f.fire(r));
  }
  o(e) {
    e.listener?.dispose();
    e.listener = null;
  }
  dispose() {
    this.f.dispose();
    for (const e of this.h) {
      e.listener?.dispose();
    }
    this.h = [];
  }
};
var $Le = class {
  constructor() {
    this.f = false;
    this.g = Event.None;
    this.h = $9c.None;
    this.j = new $Ce({
      onDidAddFirstListener: () => {
        this.f = true;
        this.h = this.g(this.j.fire, this.j);
      },
      onDidRemoveLastListener: () => {
        this.f = false;
        this.h.dispose();
      }
    });
    this.event = this.j.event;
  }
  set input(event) {
    this.g = event;
    if (this.f) {
      this.h.dispose();
      this.h = event(this.j.fire, this.j);
    }
  }
  dispose() {
    this.h.dispose();
    this.j.dispose();
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

// out-build/vs/base/common/strings.js
function $uf(str) {
  if (!str || typeof str !== "string") {
    return true;
  }
  return str.trim().length === 0;
}
var _formatRegexp = /{(\d+)}/g;
function $vf(value, ...args) {
  if (args.length === 0) {
    return value;
  }
  return value.replace(_formatRegexp, function(match, group) {
    const idx = parseInt(group, 10);
    return isNaN(idx) || idx < 0 || idx >= args.length ? match : args[idx];
  });
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
function $Sf(a, b) {
  return $Tf(a, b, 0, a.length, 0, b.length);
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
var CSI_SEQUENCE = /(?:(?:\x1b\[|\x9B)[=?>!]?[\d;:]*["$#'* ]?[a-zA-Z@^`{}|~])|(:?\x1b\].*?\x07)/g;
function $hg(str) {
  if (str) {
    str = str.replace(CSI_SEQUENCE, "");
  }
  return str;
}
var PROMPT_NON_PRINTABLE = /\\\[.*?\\\]/g;
function $ig(str) {
  return $hg(str).replace(PROMPT_NON_PRINTABLE, "");
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
function $Ag(obj) {
  return typeof obj === "number" && !isNaN(obj);
}
function $Dg(obj) {
  return typeof obj === "undefined";
}
function $Fg(obj) {
  return $Dg(obj) || obj === null;
}
function $Gg(condition, type) {
  if (!condition) {
    throw new Error(type ? `Unexpected type, expected '${type}'` : "Unexpected type");
  }
}
function $Kg(obj) {
  return typeof obj === "function";
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
function $Sg(path2, sep2 = $sc.sep) {
  if (!path2) {
    return "";
  }
  const len = path2.length;
  const firstLetter = path2.charCodeAt(0);
  if ($Pg(firstLetter)) {
    if ($Pg(path2.charCodeAt(1))) {
      if (!$Pg(path2.charCodeAt(2))) {
        let pos2 = 3;
        const start = pos2;
        for (; pos2 < len; pos2++) {
          if ($Pg(path2.charCodeAt(pos2))) {
            break;
          }
        }
        if (start !== pos2 && !$Pg(path2.charCodeAt(pos2 + 1))) {
          pos2 += 1;
          for (; pos2 < len; pos2++) {
            if ($Pg(path2.charCodeAt(pos2))) {
              return path2.slice(0, pos2 + 1).replace(/[\\/]/g, sep2);
            }
          }
        }
      }
    }
    return sep2;
  } else if ($Xg(firstLetter)) {
    if (path2.charCodeAt(1) === 58) {
      if ($Pg(path2.charCodeAt(2))) {
        return path2.slice(0, 2) + sep2;
      } else {
        return path2.slice(0, 2);
      }
    }
  }
  let pos = path2.indexOf("://");
  if (pos !== -1) {
    pos += 3;
    for (; pos < len; pos++) {
      if ($Pg(path2.charCodeAt(pos))) {
        return path2.slice(0, pos + 1);
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
function $1g(path2) {
  const pathNormalized = $tc(path2);
  if ($l) {
    if (path2.length > 3) {
      return false;
    }
    return $2g(pathNormalized) && (path2.length === 2 || pathNormalized.charCodeAt(2) === 92);
  }
  return pathNormalized === $sc.sep;
}
function $2g(path2, isWindowsOS = $l) {
  if (isWindowsOS) {
    return $Xg(path2.charCodeAt(0)) && path2.charCodeAt(1) === 58;
  }
  return false;
}
var pathChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
var windowsSafePathFirstChars = "BDEFGHIJKMOQRSTUVWXYZbdefghijkmoqrstuvwxyz0123456789";
function $6g(parent, prefix, randomLength = 8) {
  let suffix = "";
  for (let i = 0; i < randomLength; i++) {
    let pathCharsTouse;
    if (i === 0 && $l && !prefix && (randomLength === 3 || randomLength === 4)) {
      pathCharsTouse = windowsSafePathFirstChars;
    } else {
      pathCharsTouse = pathChars;
    }
    suffix += pathCharsTouse.charAt(Math.floor(Math.random() * pathCharsTouse.length));
  }
  let randomFileName;
  if (prefix) {
    randomFileName = `${prefix}-${suffix}`;
  } else {
    randomFileName = suffix;
  }
  if (parent) {
    return $vc(parent, randomFileName);
  }
  return randomFileName;
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
  setServerRootPath(product2, serverBasePath) {
    this.f = $_g(product2, serverBasePath);
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
function $_g(product2, basePath) {
  return $sc.join(basePath ?? "/", `${product2.quality ?? "oss"}-${product2.commit ?? "dev"}`);
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
  resolvePath(base, path2) {
    if (base.scheme === Schemas.file) {
      const newURI = URI.file($wc($mh(base), path2));
      return base.with({
        authority: newURI.authority,
        path: newURI.path
      });
    }
    path2 = $Rg(path2);
    return base.with({
      path: $sc.resolve(base.path, path2)
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
var $Wh = class {
  constructor() {
    this.a = false;
    this.b = new Promise((c, e) => {
      this.d = c;
    });
  }
  isOpen() {
    return this.a;
  }
  open() {
    this.a = true;
    this.d(true);
  }
  wait() {
    return this.b;
  }
};
var $Xh = class extends $Wh {
  constructor(autoOpenTimeMs) {
    super();
    this.f = setTimeout(() => this.open(), autoOpenTimeMs);
  }
  open() {
    clearTimeout(this.f);
    super.open();
  }
};
function $Yh(millis, token) {
  if (!token) {
    return $Kh((token2) => $Yh(millis, token2));
  }
  return new Promise((resolve, reject) => {
    const handle = setTimeout(() => {
      disposable.dispose();
      resolve();
    }, millis);
    const disposable = token.onCancellationRequested(() => {
      clearTimeout(handle);
      disposable.dispose();
      reject(new $fb());
    });
  });
}
var $4h = class {
  constructor(maxDegreeOfParalellism) {
    this.a = 0;
    this.b = false;
    this.f = maxDegreeOfParalellism;
    this.g = [];
    this.d = 0;
    this.h = new $Ce();
  }
  /**
   *
   * @returns A promise that resolved when all work is done (onDrained) or when
   * there is nothing to do
   */
  whenIdle() {
    return this.size > 0 ? Event.toPromise(this.onDrained) : Promise.resolve();
  }
  get onDrained() {
    return this.h.event;
  }
  get size() {
    return this.a;
  }
  queue(factory) {
    if (this.b) {
      throw new Error("Object has been disposed");
    }
    this.a++;
    return new Promise((c, e) => {
      this.g.push({ factory, c, e });
      this.j();
    });
  }
  j() {
    while (this.g.length && this.d < this.f) {
      const iLimitedTask = this.g.shift();
      this.d++;
      const promise = iLimitedTask.factory();
      promise.then(iLimitedTask.c, iLimitedTask.e);
      promise.then(() => this.k(), () => this.k());
    }
  }
  k() {
    if (this.b) {
      return;
    }
    this.d--;
    if (--this.a === 0) {
      this.h.fire();
    }
    if (this.g.length > 0) {
      this.j();
    }
  }
  clear() {
    if (this.b) {
      throw new Error("Object has been disposed");
    }
    this.g.length = 0;
    this.a = this.d;
  }
  dispose() {
    this.b = true;
    this.g.length = 0;
    this.a = 0;
    this.h.dispose();
  }
};
var $5h = class extends $4h {
  constructor() {
    super(1);
  }
};
var $7h = class {
  constructor() {
    this.a = /* @__PURE__ */ new Map();
    this.b = /* @__PURE__ */ new Set();
    this.d = void 0;
    this.f = 0;
  }
  async whenDrained() {
    if (this.g()) {
      return;
    }
    const promise = new $ii();
    this.b.add(promise);
    return promise.p;
  }
  g() {
    for (const [, queue] of this.a) {
      if (queue.size > 0) {
        return false;
      }
    }
    return true;
  }
  queueSize(resource, extUri = $oh) {
    const key = extUri.getComparisonKey(resource);
    return this.a.get(key)?.size ?? 0;
  }
  queueFor(resource, factory, extUri = $oh) {
    const key = extUri.getComparisonKey(resource);
    let queue = this.a.get(key);
    if (!queue) {
      queue = new $5h();
      const drainListenerId = this.f++;
      const drainListener = Event.once(queue.onDrained)(() => {
        queue?.dispose();
        this.a.delete(key);
        this.h();
        this.d?.deleteAndDispose(drainListenerId);
        if (this.d?.size === 0) {
          this.d.dispose();
          this.d = void 0;
        }
      });
      if (!this.d) {
        this.d = new $fd();
      }
      this.d.set(drainListenerId, drainListener);
      this.a.set(key, queue);
    }
    return queue.queue(factory);
  }
  h() {
    if (!this.g()) {
      return;
    }
    this.j();
  }
  j() {
    for (const drainer of this.b) {
      drainer.complete();
    }
    this.b.clear();
  }
  dispose() {
    for (const [, queue] of this.a) {
      queue.dispose();
    }
    this.a.clear();
    this.j();
    this.d?.dispose();
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
var $$h = class {
  constructor(runner, delay) {
    if (delay % 1e3 !== 0) {
      console.warn(`ProcessTimeRunOnceScheduler resolution is 1s, ${delay}ms is not a multiple of 1000ms.`);
    }
    this.a = runner;
    this.b = delay;
    this.d = 0;
    this.f = -1;
    this.g = this.h.bind(this);
  }
  dispose() {
    this.cancel();
    this.a = null;
  }
  cancel() {
    if (this.isScheduled()) {
      clearInterval(this.f);
      this.f = -1;
    }
  }
  /**
   * Cancel previous runner (if any) & schedule a new runner.
   */
  schedule(delay = this.b) {
    if (delay % 1e3 !== 0) {
      console.warn(`ProcessTimeRunOnceScheduler resolution is 1s, ${delay}ms is not a multiple of 1000ms.`);
    }
    this.cancel();
    this.d = Math.ceil(delay / 1e3);
    this.f = setInterval(this.g, 1e3);
  }
  /**
   * Returns true if scheduled.
   */
  isScheduled() {
    return this.f !== -1;
  }
  h() {
    this.d--;
    if (this.d > 0) {
      return;
    }
    clearInterval(this.f);
    this.f = -1;
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
var DeferredOutcome;
(function(DeferredOutcome2) {
  DeferredOutcome2[DeferredOutcome2["Resolved"] = 0] = "Resolved";
  DeferredOutcome2[DeferredOutcome2["Rejected"] = 1] = "Rejected";
})(DeferredOutcome || (DeferredOutcome = {}));
var $ii = class {
  get isRejected() {
    return this.d?.outcome === 1;
  }
  get isResolved() {
    return this.d?.outcome === 0;
  }
  get isSettled() {
    return !!this.d;
  }
  get value() {
    return this.d?.outcome === 0 ? this.d?.value : void 0;
  }
  constructor() {
    this.p = new Promise((c, e) => {
      this.a = c;
      this.b = e;
    });
  }
  complete(value) {
    return new Promise((resolve) => {
      this.a(value);
      this.d = { outcome: 0, value };
      resolve();
    });
  }
  error(err) {
    return new Promise((resolve) => {
      this.b(err);
      this.d = { outcome: 1, value: err };
      resolve();
    });
  }
  cancel() {
    return this.error(new $fb());
  }
};
var Promises;
(function(Promises3) {
  async function settled(promises4) {
    let firstError = void 0;
    const result = await Promise.all(promises4.map((promise) => promise.then((value) => value, (error) => {
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
  Promises3.settled = settled;
  function withAsyncBody(bodyFn) {
    return new Promise(async (resolve, reject) => {
      try {
        await bodyFn(resolve, reject);
      } catch (error) {
        reject(error);
      }
    });
  }
  Promises3.withAsyncBody = withAsyncBody;
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
  static fromPromises(promises4) {
    return new _$li(async (emitter) => {
      await Promise.all(promises4.map(async (p) => emitter.emitOne(await p)));
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
function $ri(delay, reducer, initialValueProvider) {
  return createDecorator((fn, key) => {
    const timerKey = `$throttle$timer$${key}`;
    const resultKey = `$throttle$result$${key}`;
    const lastRunKey = `$throttle$lastRun$${key}`;
    const pendingKey = `$throttle$pending$${key}`;
    return function(...args) {
      if (!this[resultKey]) {
        this[resultKey] = initialValueProvider ? initialValueProvider() : void 0;
      }
      if (this[lastRunKey] === null || this[lastRunKey] === void 0) {
        this[lastRunKey] = -Number.MAX_VALUE;
      }
      if (reducer) {
        this[resultKey] = reducer(this[resultKey], ...args);
      }
      if (this[pendingKey]) {
        return;
      }
      const nextTime = this[lastRunKey] + delay;
      if (nextTime <= Date.now()) {
        this[lastRunKey] = Date.now();
        fn.apply(this, [this[resultKey]]);
        this[resultKey] = initialValueProvider ? initialValueProvider() : void 0;
      } else {
        this[pendingKey] = true;
        this[timerKey] = setTimeout(() => {
          this[pendingKey] = false;
          this[lastRunKey] = Date.now();
          fn.apply(this, [this[resultKey]]);
          this[resultKey] = initialValueProvider ? initialValueProvider() : void 0;
        }, nextTime - Date.now());
      }
    };
  });
}

// out-build/vs/base/common/marshalling.js
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
var $Bi = class {
  get connections() {
    const result = [];
    this.f.forEach((ctx) => result.push(ctx));
    return result;
  }
  constructor(onDidClientConnect, ipcLogger, timeoutDelay) {
    this.a = /* @__PURE__ */ new Map();
    this.f = /* @__PURE__ */ new Set();
    this.g = new $Ce();
    this.onDidAddConnection = this.g.event;
    this.h = new $Ce();
    this.onDidRemoveConnection = this.h.event;
    this.j = new $8c();
    this.j.add(onDidClientConnect(({ protocol, onDidClientDisconnect }) => {
      const onFirstMessage = Event.once(protocol.onMessage);
      this.j.add(onFirstMessage((msg) => {
        const reader = new $vi(msg);
        const ctx = $yi(reader);
        const channelServer = new $zi(protocol, ctx, ipcLogger, timeoutDelay);
        const channelClient = new $Ai(protocol, ipcLogger);
        this.a.forEach((channel, name) => channelServer.registerChannel(name, channel));
        const connection = { channelServer, channelClient, ctx };
        this.f.add(connection);
        this.g.fire(connection);
        this.j.add(onDidClientDisconnect(() => {
          channelServer.dispose();
          channelClient.dispose();
          this.f.delete(connection);
          this.h.fire(connection);
        }));
      }));
    }));
  }
  getChannel(channelName, routerOrClientFilter) {
    const that = this;
    return {
      call(command, arg, cancellationToken) {
        let connectionPromise;
        if ($Kg(routerOrClientFilter)) {
          const connection = $bc(that.connections.filter(routerOrClientFilter));
          connectionPromise = connection ? Promise.resolve(connection) : Event.toPromise(Event.filter(that.onDidAddConnection, routerOrClientFilter));
        } else {
          connectionPromise = routerOrClientFilter.routeCall(that, command, arg);
        }
        const channelPromise = connectionPromise.then((connection) => connection.channelClient.getChannel(channelName));
        return $Di(channelPromise).call(command, arg, cancellationToken);
      },
      listen(event, arg) {
        if ($Kg(routerOrClientFilter)) {
          return that.k(channelName, routerOrClientFilter, event, arg);
        }
        const channelPromise = routerOrClientFilter.routeEvent(that, event, arg).then((connection) => connection.channelClient.getChannel(channelName));
        return $Di(channelPromise).listen(event, arg);
      }
    };
  }
  k(channelName, clientFilter, eventName, arg) {
    const that = this;
    let disposables;
    const emitter = new $Ce({
      onWillAddFirstListener: () => {
        disposables = new $8c();
        const eventMultiplexer = new $Ie();
        const map = /* @__PURE__ */ new Map();
        const onDidAddConnection = (connection) => {
          const channel = connection.channelClient.getChannel(channelName);
          const event = channel.listen(eventName, arg);
          const disposable = eventMultiplexer.add(event);
          map.set(connection, disposable);
        };
        const onDidRemoveConnection = (connection) => {
          const disposable = map.get(connection);
          if (!disposable) {
            return;
          }
          disposable.dispose();
          map.delete(connection);
        };
        that.connections.filter(clientFilter).forEach(onDidAddConnection);
        Event.filter(that.onDidAddConnection, clientFilter)(onDidAddConnection, void 0, disposables);
        that.onDidRemoveConnection(onDidRemoveConnection, void 0, disposables);
        eventMultiplexer.event(emitter.fire, emitter, disposables);
        disposables.add(eventMultiplexer);
      },
      onDidRemoveLastListener: () => {
        disposables?.dispose();
        disposables = void 0;
      }
    });
    return emitter.event;
  }
  registerChannel(channelName, channel) {
    this.a.set(channelName, channel);
    for (const connection of this.f) {
      connection.channelServer.registerChannel(channelName, channel);
    }
  }
  dispose() {
    this.j.dispose();
    for (const connection of this.f) {
      connection.channelClient.dispose();
      connection.channelServer.dispose();
    }
    this.f.clear();
    this.a.clear();
    this.g.dispose();
    this.h.dispose();
  }
};
function $Di(promise) {
  return {
    call(command, arg, cancellationToken) {
      return promise.then((c) => c.call(command, arg, cancellationToken));
    },
    listen(event, arg) {
      const relay = new $Le();
      promise.then((c) => relay.input = c.listen(event, arg));
      return relay.event;
    }
  };
}
var ProxyChannel;
(function(ProxyChannel2) {
  function fromService(service, disposables, options) {
    const handler = service;
    const disableMarshalling = options && options.disableMarshalling;
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
  function toService(channel, options) {
    const disableMarshalling = options && options.disableMarshalling;
    return new Proxy({}, {
      get(_target, propKey) {
        if (typeof propKey === "string") {
          if (options?.properties?.has(propKey)) {
            return options.properties.get(propKey);
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
            if (options && !$Fg(options.context)) {
              methodArgs = [options.context, ...args];
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

// out-build/vs/base/parts/ipc/node/ipc.cp.js
import { fork } from "child_process";

// out-build/vs/base/common/objects.js
function $Eo(target, key) {
  const lowercaseKey = key.toLowerCase();
  const equivalentKey = Object.keys(target).find((k) => k.toLowerCase() === lowercaseKey);
  return equivalentKey ? target[equivalentKey] : target[key];
}

// out-build/vs/base/node/processes.js
import { promises as promises2 } from "fs";

// out-build/vs/base/common/processes.js
var Source;
(function(Source2) {
  Source2[Source2["stdout"] = 0] = "stdout";
  Source2[Source2["stderr"] = 1] = "stderr";
})(Source || (Source = {}));
var TerminateResponseCode;
(function(TerminateResponseCode2) {
  TerminateResponseCode2[TerminateResponseCode2["Success"] = 0] = "Success";
  TerminateResponseCode2[TerminateResponseCode2["Unknown"] = 1] = "Unknown";
  TerminateResponseCode2[TerminateResponseCode2["AccessDenied"] = 2] = "AccessDenied";
  TerminateResponseCode2[TerminateResponseCode2["ProcessNotFound"] = 3] = "ProcessNotFound";
})(TerminateResponseCode || (TerminateResponseCode = {}));

// out-build/vs/base/node/pfs.js
import * as fs from "fs";
import { tmpdir } from "os";
import { promisify } from "util";

// out-build/vs/base/common/normalization.js
var nfcCache = new $Pc(1e4);
function $Fm(str) {
  return normalize(str, "NFC", nfcCache);
}
var nfdCache = new $Pc(1e4);
var nonAsciiCharactersPattern = /[^\u0000-\u0080]/;
function normalize(str, form, normalizedCache) {
  if (!str) {
    return str;
  }
  const cached = normalizedCache.get(str);
  if (cached) {
    return cached;
  }
  let res;
  if (nonAsciiCharactersPattern.test(str)) {
    res = str.normalize(form);
  } else {
    res = str;
  }
  normalizedCache.set(str, res);
  return res;
}

// out-build/vs/base/node/pfs.js
var RimRafMode;
(function(RimRafMode2) {
  RimRafMode2[RimRafMode2["UNLINK"] = 0] = "UNLINK";
  RimRafMode2[RimRafMode2["MOVE"] = 1] = "MOVE";
})(RimRafMode || (RimRafMode = {}));
async function rimraf(path2, mode = RimRafMode.UNLINK, moveToPath) {
  if ($1g(path2)) {
    throw new Error("rimraf - will refuse to recursively delete root");
  }
  if (mode === RimRafMode.UNLINK) {
    return rimrafUnlink(path2);
  }
  return rimrafMove(path2, moveToPath);
}
async function rimrafMove(path2, moveToPath = $6g(tmpdir())) {
  try {
    try {
      await fs.promises.rename(path2, moveToPath);
    } catch (error) {
      if (error.code === "ENOENT") {
        return;
      }
      return rimrafUnlink(path2);
    }
    rimrafUnlink(moveToPath).catch((error) => {
    });
  } catch (error) {
    if (error.code !== "ENOENT") {
      throw error;
    }
  }
}
async function rimrafUnlink(path2) {
  return fs.promises.rm(path2, { recursive: true, force: true, maxRetries: 3 });
}
async function readdir(path2, options) {
  return handleDirectoryChildren(await (options ? safeReaddirWithFileTypes(path2) : fs.promises.readdir(path2)));
}
async function safeReaddirWithFileTypes(path2) {
  try {
    return await fs.promises.readdir(path2, { withFileTypes: true });
  } catch (error) {
    console.warn("[node.js fs] readdir with filetypes failed with error: ", error);
  }
  const result = [];
  const children = await readdir(path2);
  for (const child of children) {
    let isFile = false;
    let isDirectory = false;
    let isSymbolicLink = false;
    try {
      const lstat = await fs.promises.lstat($vc(path2, child));
      isFile = lstat.isFile();
      isDirectory = lstat.isDirectory();
      isSymbolicLink = lstat.isSymbolicLink();
    } catch (error) {
      console.warn("[node.js fs] unexpected error from lstat after readdir: ", error);
    }
    result.push({
      name: child,
      isFile: () => isFile,
      isDirectory: () => isDirectory,
      isSymbolicLink: () => isSymbolicLink
    });
  }
  return result;
}
function handleDirectoryChildren(children) {
  return children.map((child) => {
    if (typeof child === "string") {
      return $m ? $Fm(child) : child;
    }
    child.name = $m ? $Fm(child.name) : child.name;
    return child;
  });
}
async function readDirsInDir(dirPath) {
  const children = await readdir(dirPath);
  const directories = [];
  for (const child of children) {
    if (await SymlinkSupport.existsDirectory($vc(dirPath, child))) {
      directories.push(child);
    }
  }
  return directories;
}
var SymlinkSupport;
(function(SymlinkSupport2) {
  async function stat(path2) {
    let lstats;
    try {
      lstats = await fs.promises.lstat(path2);
      if (!lstats.isSymbolicLink()) {
        return { stat: lstats };
      }
    } catch (error) {
    }
    try {
      const stats = await fs.promises.stat(path2);
      return { stat: stats, symbolicLink: lstats?.isSymbolicLink() ? { dangling: false } : void 0 };
    } catch (error) {
      if (error.code === "ENOENT" && lstats) {
        return { stat: lstats, symbolicLink: { dangling: true } };
      }
      if ($l && error.code === "EACCES") {
        try {
          const stats = await fs.promises.stat(await fs.promises.readlink(path2));
          return { stat: stats, symbolicLink: { dangling: false } };
        } catch (error2) {
          if (error2.code === "ENOENT" && lstats) {
            return { stat: lstats, symbolicLink: { dangling: true } };
          }
          throw error2;
        }
      }
      throw error;
    }
  }
  SymlinkSupport2.stat = stat;
  async function existsFile(path2) {
    try {
      const { stat: stat2, symbolicLink } = await SymlinkSupport2.stat(path2);
      return stat2.isFile() && symbolicLink?.dangling !== true;
    } catch (error) {
    }
    return false;
  }
  SymlinkSupport2.existsFile = existsFile;
  async function existsDirectory(path2) {
    try {
      const { stat: stat2, symbolicLink } = await SymlinkSupport2.stat(path2);
      return stat2.isDirectory() && symbolicLink?.dangling !== true;
    } catch (error) {
    }
    return false;
  }
  SymlinkSupport2.existsDirectory = existsDirectory;
})(SymlinkSupport || (SymlinkSupport = {}));
var writeQueues = new $7h();
function writeFile2(path2, data, options) {
  return writeQueues.queueFor(URI.file(path2), () => {
    const ensuredOptions = ensureWriteOptions(options);
    return new Promise((resolve, reject) => doWriteFileAndFlush(path2, data, ensuredOptions, (error) => error ? reject(error) : resolve()));
  }, $ph);
}
var canFlush = true;
function configureFlushOnWrite(enabled) {
  canFlush = enabled;
}
function doWriteFileAndFlush(path2, data, options, callback) {
  if (!canFlush) {
    return fs.writeFile(path2, data, { mode: options.mode, flag: options.flag }, callback);
  }
  fs.open(path2, options.flag, options.mode, (openError, fd) => {
    if (openError) {
      return callback(openError);
    }
    fs.writeFile(fd, data, (writeError) => {
      if (writeError) {
        return fs.close(fd, () => callback(writeError));
      }
      fs.fdatasync(fd, (syncError) => {
        if (syncError) {
          console.warn("[node.js fs] fdatasync is now disabled for this session because it failed: ", syncError);
          configureFlushOnWrite(false);
        }
        return fs.close(fd, (closeError) => callback(closeError));
      });
    });
  });
}
function ensureWriteOptions(options) {
  if (!options) {
    return { mode: 438, flag: "w" };
  }
  return {
    mode: typeof options.mode === "number" ? options.mode : 438,
    flag: typeof options.flag === "string" ? options.flag : "w"
  };
}
async function rename(source, target, windowsRetryTimeout = 6e4) {
  if (source === target) {
    return;
  }
  try {
    if ($l && typeof windowsRetryTimeout === "number") {
      await renameWithRetry(source, target, Date.now(), windowsRetryTimeout);
    } else {
      await fs.promises.rename(source, target);
    }
  } catch (error) {
    if (source.toLowerCase() !== target.toLowerCase() && error.code === "EXDEV" || source.endsWith(".")) {
      await copy(source, target, {
        preserveSymlinks: false
        /* copying to another device */
      });
      await rimraf(source, RimRafMode.MOVE);
    } else {
      throw error;
    }
  }
}
async function renameWithRetry(source, target, startTime, retryTimeout, attempt = 0) {
  try {
    return await fs.promises.rename(source, target);
  } catch (error) {
    if (error.code !== "EACCES" && error.code !== "EPERM" && error.code !== "EBUSY") {
      throw error;
    }
    if (Date.now() - startTime >= retryTimeout) {
      console.error(`[node.js fs] rename failed after ${attempt} retries with error: ${error}`);
      throw error;
    }
    if (attempt === 0) {
      let abortRetry = false;
      try {
        const { stat } = await SymlinkSupport.stat(target);
        if (!stat.isFile()) {
          abortRetry = true;
        }
      } catch (error2) {
      }
      if (abortRetry) {
        throw error;
      }
    }
    await $Yh(Math.min(100, attempt * 10));
    return renameWithRetry(source, target, startTime, retryTimeout, attempt + 1);
  }
}
async function copy(source, target, options) {
  return doCopy(source, target, { root: { source, target }, options, handledSourcePaths: /* @__PURE__ */ new Set() });
}
var COPY_MODE_MASK = 511;
async function doCopy(source, target, payload) {
  if (payload.handledSourcePaths.has(source)) {
    return;
  } else {
    payload.handledSourcePaths.add(source);
  }
  const { stat, symbolicLink } = await SymlinkSupport.stat(source);
  if (symbolicLink) {
    if (payload.options.preserveSymlinks) {
      try {
        return await doCopySymlink(source, target, payload);
      } catch (error) {
      }
    }
    if (symbolicLink.dangling) {
      return;
    }
  }
  if (stat.isDirectory()) {
    return doCopyDirectory(source, target, stat.mode & COPY_MODE_MASK, payload);
  } else {
    return doCopyFile(source, target, stat.mode & COPY_MODE_MASK);
  }
}
async function doCopyDirectory(source, target, mode, payload) {
  await fs.promises.mkdir(target, { recursive: true, mode });
  const files = await readdir(source);
  for (const file of files) {
    await doCopy($vc(source, file), $vc(target, file), payload);
  }
}
async function doCopyFile(source, target, mode) {
  await fs.promises.copyFile(source, target);
  await fs.promises.chmod(target, mode);
}
async function doCopySymlink(source, target, payload) {
  let linkTarget = await fs.promises.readlink(source);
  if ($Wg(linkTarget, payload.root.source, !$n)) {
    linkTarget = $vc(payload.root.target, linkTarget.substr(payload.root.source.length + 1));
  }
  await fs.promises.symlink(linkTarget, target);
}
var Promises2 = new class {
  //#region Implemented by node.js
  get read() {
    return (fd, buffer, offset, length, position) => {
      return new Promise((resolve, reject) => {
        fs.read(fd, buffer, offset, length, position, (err, bytesRead, buffer2) => {
          if (err) {
            return reject(err);
          }
          return resolve({ bytesRead, buffer: buffer2 });
        });
      });
    };
  }
  get write() {
    return (fd, buffer, offset, length, position) => {
      return new Promise((resolve, reject) => {
        fs.write(fd, buffer, offset, length, position, (err, bytesWritten, buffer2) => {
          if (err) {
            return reject(err);
          }
          return resolve({ bytesWritten, buffer: buffer2 });
        });
      });
    };
  }
  get fdatasync() {
    return promisify(fs.fdatasync);
  }
  // not exposed as API in 20.x yet
  get open() {
    return promisify(fs.open);
  }
  // changed to return `FileHandle` in promise API
  get close() {
    return promisify(fs.close);
  }
  // not exposed as API due to the `FileHandle` return type of `open`
  get realpath() {
    return promisify(fs.realpath);
  }
  // `fs.promises.realpath` will use `fs.realpath.native` which we do not want
  //#endregion
  //#region Implemented by us
  async exists(path2) {
    try {
      await fs.promises.access(path2);
      return true;
    } catch {
      return false;
    }
  }
  get readdir() {
    return readdir;
  }
  get readDirsInDir() {
    return readDirsInDir;
  }
  get writeFile() {
    return writeFile2;
  }
  get rm() {
    return rimraf;
  }
  get rename() {
    return rename;
  }
  get copy() {
    return copy;
  }
}();

// out-build/vs/base/node/processes.js
function $Qm(env2 = env) {
  return env2["comspec"] || "cmd.exe";
}
var win32;
(function(win322) {
  async function findExecutable(command, cwd2, paths) {
    if ($uc(command)) {
      return command;
    }
    if (cwd2 === void 0) {
      cwd2 = cwd();
    }
    const dir = $yc(command);
    if (dir !== ".") {
      return $vc(cwd2, command);
    }
    if (paths === void 0 && $wg(env["PATH"])) {
      paths = env["PATH"].split($Fc);
    }
    if (paths === void 0 || paths.length === 0) {
      return $vc(cwd2, command);
    }
    async function fileExists(path2) {
      if (await Promises2.exists(path2)) {
        let statValue;
        try {
          statValue = await promises2.stat(path2);
        } catch (e) {
          if (e.message.startsWith("EACCES")) {
            statValue = await promises2.lstat(path2);
          }
        }
        return statValue ? !statValue.isDirectory() : false;
      }
      return false;
    }
    for (const pathEntry of paths) {
      let fullPath;
      if ($uc(pathEntry)) {
        fullPath = $vc(pathEntry, command);
      } else {
        fullPath = $vc(cwd2, pathEntry, command);
      }
      if (await fileExists(fullPath)) {
        return fullPath;
      }
      let withExtension = fullPath + ".com";
      if (await fileExists(withExtension)) {
        return withExtension;
      }
      withExtension = fullPath + ".exe";
      if (await fileExists(withExtension)) {
        return withExtension;
      }
    }
    return $vc(cwd2, command);
  }
  win322.findExecutable = findExecutable;
})(win32 || (win32 = {}));

// out-build/vs/base/parts/ipc/node/ipc.cp.js
var $Cr = class extends $zi {
  constructor(ctx) {
    super({
      send: (r) => {
        try {
          process.send?.(r.buffer.toString("base64"));
        } catch (e) {
        }
      },
      onMessage: Event.fromNodeEventEmitter(process, "message", (msg) => $6e.wrap(Buffer.from(msg, "base64")))
    }, ctx);
    process.once("disconnect", () => this.dispose());
  }
};

// out-build/vs/base/parts/sandbox/node/electronTypes.js
function $XY(process2) {
  return !!process2.parentPort;
}

// out-build/vs/base/parts/ipc/node/ipc.mp.js
var Protocol = class {
  constructor(a) {
    this.a = a;
    this.onMessage = Event.fromNodeEventEmitter(this.a, "message", (e) => {
      if (e.data) {
        return $6e.wrap(e.data);
      }
      return $6e.alloc(0);
    });
    a.start();
  }
  send(message) {
    this.a.postMessage(message.buffer);
  }
  disconnect() {
    this.a.close();
  }
};
var $YY = class _$YY extends $Bi {
  static b(filter) {
    $Gg($XY(process), "Electron Utility Process");
    const onCreateMessageChannel = new $Ce();
    process.parentPort.on("message", (e) => {
      if (filter?.handledClientConnection(e)) {
        return;
      }
      const port = e.ports.at(0);
      if (port) {
        onCreateMessageChannel.fire(port);
      }
    });
    return Event.map(onCreateMessageChannel.event, (port) => {
      const protocol = new Protocol(port);
      const result = {
        protocol,
        // Not part of the standard spec, but in Electron we get a `close` event
        // when the other side closes. We can use this to detect disconnects
        // (https://github.com/electron/electron/blob/11-x-y/docs/api/message-port-main.md#event-close)
        onDidClientDisconnect: Event.fromNodeEventEmitter(port, "close")
      };
      return result;
    });
  }
  constructor(filter) {
    super(_$YY.b(filter));
  }
};

// out-build/vs/platform/environment/node/argv.js
import minimist from "minimist";
var helpCategories = {
  o: localize(1721, null),
  e: localize(1722, null),
  t: localize(1723, null)
};
var $Um = {
  "tunnel": {
    type: "subcommand",
    description: "Make the current machine accessible from vscode.dev or other machines through a secure tunnel",
    options: {
      "cli-data-dir": { type: "string", args: "dir", description: localize(1724, null) },
      "disable-telemetry": { type: "boolean" },
      "telemetry-level": { type: "string" },
      user: {
        type: "subcommand",
        options: {
          login: {
            type: "subcommand",
            options: {
              provider: { type: "string" },
              "access-token": { type: "string" }
            }
          }
        }
      }
    }
  },
  "serve-web": {
    type: "subcommand",
    description: "Run a server that displays the editor UI in browsers.",
    options: {
      "cli-data-dir": { type: "string", args: "dir", description: localize(1725, null) },
      "disable-telemetry": { type: "boolean" },
      "telemetry-level": { type: "string" }
    }
  },
  "diff": { type: "boolean", cat: "o", alias: "d", args: ["file", "file"], description: localize(1726, null) },
  "merge": { type: "boolean", cat: "o", alias: "m", args: ["path1", "path2", "base", "result"], description: localize(1727, null) },
  "add": { type: "boolean", cat: "o", alias: "a", args: "folder", description: localize(1728, null) },
  "goto": { type: "boolean", cat: "o", alias: "g", args: "file:line[:character]", description: localize(1729, null) },
  "new-window": { type: "boolean", cat: "o", alias: "n", description: localize(1730, null) },
  "reuse-window": { type: "boolean", cat: "o", alias: "r", description: localize(1731, null) },
  "wait": { type: "boolean", cat: "o", alias: "w", description: localize(1732, null) },
  "waitMarkerFilePath": { type: "string" },
  "locale": { type: "string", cat: "o", args: "locale", description: localize(1733, null) },
  "user-data-dir": { type: "string", cat: "o", args: "dir", description: localize(1734, null) },
  "profile": { type: "string", "cat": "o", args: "profileName", description: localize(1735, null) },
  "help": { type: "boolean", cat: "o", alias: "h", description: localize(1736, null) },
  "extensions-dir": { type: "string", deprecates: ["extensionHomePath"], cat: "e", args: "dir", description: localize(1737, null) },
  "extensions-download-dir": { type: "string" },
  "builtin-extensions-dir": { type: "string" },
  "list-extensions": { type: "boolean", cat: "e", description: localize(1738, null) },
  "show-versions": { type: "boolean", cat: "e", description: localize(1739, null) },
  "category": { type: "string", allowEmptyValue: true, cat: "e", description: localize(1740, null), args: "category" },
  "install-extension": { type: "string[]", cat: "e", args: "ext-id | path", description: localize(1741, null) },
  "pre-release": { type: "boolean", cat: "e", description: localize(1742, null) },
  "uninstall-extension": { type: "string[]", cat: "e", args: "ext-id", description: localize(1743, null) },
  "update-extensions": { type: "boolean", cat: "e", description: localize(1744, null) },
  "enable-proposed-api": { type: "string[]", allowEmptyValue: true, cat: "e", args: "ext-id", description: localize(1745, null) },
  "version": { type: "boolean", cat: "t", alias: "v", description: localize(1746, null) },
  "verbose": { type: "boolean", cat: "t", global: true, description: localize(1747, null) },
  "log": { type: "string[]", cat: "t", args: "level", global: true, description: localize(1748, null) },
  "status": { type: "boolean", alias: "s", cat: "t", description: localize(1749, null) },
  "prof-startup": { type: "boolean", cat: "t", description: localize(1750, null) },
  "prof-append-timers": { type: "string" },
  "prof-duration-markers": { type: "string[]" },
  "prof-duration-markers-file": { type: "string" },
  "no-cached-data": { type: "boolean" },
  "prof-startup-prefix": { type: "string" },
  "prof-v8-extensions": { type: "boolean" },
  "disable-extensions": { type: "boolean", deprecates: ["disableExtensions"], cat: "t", description: localize(1751, null) },
  "disable-extension": { type: "string[]", cat: "t", args: "ext-id", description: localize(1752, null) },
  "sync": { type: "string", cat: "t", description: localize(1753, null), args: ["on | off"] },
  "inspect-extensions": { type: "string", allowEmptyValue: true, deprecates: ["debugPluginHost"], args: "port", cat: "t", description: localize(1754, null) },
  "inspect-brk-extensions": { type: "string", allowEmptyValue: true, deprecates: ["debugBrkPluginHost"], args: "port", cat: "t", description: localize(1755, null) },
  "disable-lcd-text": { type: "boolean", cat: "t", description: localize(1756, null) },
  "disable-gpu": { type: "boolean", cat: "t", description: localize(1757, null) },
  "disable-chromium-sandbox": { type: "boolean", cat: "t", description: localize(1758, null) },
  "sandbox": { type: "boolean" },
  "telemetry": { type: "boolean", cat: "t", description: localize(1759, null) },
  "remote": { type: "string", allowEmptyValue: true },
  "folder-uri": { type: "string[]", cat: "o", args: "uri" },
  "file-uri": { type: "string[]", cat: "o", args: "uri" },
  "locate-extension": { type: "string[]" },
  "extensionDevelopmentPath": { type: "string[]" },
  "extensionDevelopmentKind": { type: "string[]" },
  "extensionTestsPath": { type: "string" },
  "extensionEnvironment": { type: "string" },
  "debugId": { type: "string" },
  "debugRenderer": { type: "boolean" },
  "inspect-ptyhost": { type: "string", allowEmptyValue: true },
  "inspect-brk-ptyhost": { type: "string", allowEmptyValue: true },
  "inspect-search": { type: "string", deprecates: ["debugSearch"], allowEmptyValue: true },
  "inspect-brk-search": { type: "string", deprecates: ["debugBrkSearch"], allowEmptyValue: true },
  "inspect-sharedprocess": { type: "string", allowEmptyValue: true },
  "inspect-brk-sharedprocess": { type: "string", allowEmptyValue: true },
  "export-default-configuration": { type: "string" },
  "install-source": { type: "string" },
  "enable-smoke-test-driver": { type: "boolean" },
  "logExtensionHostCommunication": { type: "boolean" },
  "skip-release-notes": { type: "boolean" },
  "skip-welcome": { type: "boolean" },
  "disable-telemetry": { type: "boolean" },
  "disable-updates": { type: "boolean" },
  "use-inmemory-secretstorage": { type: "boolean", deprecates: ["disable-keytar"] },
  "password-store": { type: "string" },
  "disable-workspace-trust": { type: "boolean" },
  "disable-crash-reporter": { type: "boolean" },
  "crash-reporter-directory": { type: "string" },
  "crash-reporter-id": { type: "string" },
  "skip-add-to-recently-opened": { type: "boolean" },
  "open-url": { type: "boolean" },
  "file-write": { type: "boolean" },
  "file-chmod": { type: "boolean" },
  "install-builtin-extension": { type: "string[]" },
  "force": { type: "boolean" },
  "do-not-sync": { type: "boolean" },
  "trace": { type: "boolean" },
  "trace-category-filter": { type: "string" },
  "trace-options": { type: "string" },
  "preserve-env": { type: "boolean" },
  "force-user-env": { type: "boolean" },
  "force-disable-user-env": { type: "boolean" },
  "open-devtools": { type: "boolean" },
  "disable-gpu-sandbox": { type: "boolean" },
  "logsPath": { type: "string" },
  "__enable-file-policy": { type: "boolean" },
  "editSessionId": { type: "string" },
  "continueOn": { type: "string" },
  "locate-shell-integration-path": { type: "string", args: ["bash", "pwsh", "zsh", "fish"] },
  "enable-coi": { type: "boolean" },
  // chromium flags
  "no-proxy-server": { type: "boolean" },
  // Minimist incorrectly parses keys that start with `--no`
  // https://github.com/substack/minimist/blob/aeb3e27dae0412de5c0494e9563a5f10c82cc7a9/index.js#L118-L121
  // If --no-sandbox is passed via cli wrapper it will be treated as --sandbox which is incorrect, we use
  // the alias here to make sure --no-sandbox is always respected.
  // For https://github.com/microsoft/vscode/issues/128279
  "no-sandbox": { type: "boolean", alias: "sandbox" },
  "proxy-server": { type: "string" },
  "proxy-bypass-list": { type: "string" },
  "proxy-pac-url": { type: "string" },
  "js-flags": { type: "string" },
  // chrome js flags
  "inspect": { type: "string", allowEmptyValue: true },
  "inspect-brk": { type: "string", allowEmptyValue: true },
  "nolazy": { type: "boolean" },
  // node inspect
  "force-device-scale-factor": { type: "string" },
  "force-renderer-accessibility": { type: "boolean" },
  "ignore-certificate-errors": { type: "boolean" },
  "allow-insecure-localhost": { type: "boolean" },
  "log-net-log": { type: "string" },
  "vmodule": { type: "string" },
  "_urls": { type: "string[]" },
  "disable-dev-shm-usage": { type: "boolean" },
  "profile-temp": { type: "boolean" },
  "ozone-platform": { type: "string" },
  "enable-tracing": { type: "string" },
  "trace-startup-format": { type: "string" },
  "trace-startup-file": { type: "string" },
  "trace-startup-duration": { type: "string" },
  _: { type: "string[]" }
  // main arguments
};
var ignoringReporter = {
  onUnknownOption: () => {
  },
  onMultipleValues: () => {
  },
  onEmptyValue: () => {
  },
  onDeprecatedOption: () => {
  }
};
function $Vm(args, options, errorReporter = ignoringReporter) {
  const firstArg = args.find((a) => a.length > 0 && a[0] !== "-");
  const alias = {};
  const stringOptions = ["_"];
  const booleanOptions = [];
  const globalOptions = {};
  let command = void 0;
  for (const optionId in options) {
    const o = options[optionId];
    if (o.type === "subcommand") {
      if (optionId === firstArg) {
        command = o;
      }
    } else {
      if (o.alias) {
        alias[optionId] = o.alias;
      }
      if (o.type === "string" || o.type === "string[]") {
        stringOptions.push(optionId);
        if (o.deprecates) {
          stringOptions.push(...o.deprecates);
        }
      } else if (o.type === "boolean") {
        booleanOptions.push(optionId);
        if (o.deprecates) {
          booleanOptions.push(...o.deprecates);
        }
      }
      if (o.global) {
        globalOptions[optionId] = o;
      }
    }
  }
  if (command && firstArg) {
    const options2 = globalOptions;
    for (const optionId in command.options) {
      options2[optionId] = command.options[optionId];
    }
    const newArgs = args.filter((a) => a !== firstArg);
    const reporter = errorReporter.getSubcommandReporter ? errorReporter.getSubcommandReporter(firstArg) : void 0;
    const subcommandOptions = $Vm(newArgs, options2, reporter);
    return {
      [firstArg]: subcommandOptions,
      _: []
    };
  }
  const parsedArgs = minimist(args, { string: stringOptions, boolean: booleanOptions, alias });
  const cleanedArgs = {};
  const remainingArgs = parsedArgs;
  cleanedArgs._ = parsedArgs._.map((arg) => String(arg)).filter((arg) => arg.length > 0);
  delete remainingArgs._;
  for (const optionId in options) {
    const o = options[optionId];
    if (o.type === "subcommand") {
      continue;
    }
    if (o.alias) {
      delete remainingArgs[o.alias];
    }
    let val = remainingArgs[optionId];
    if (o.deprecates) {
      for (const deprecatedId of o.deprecates) {
        if (remainingArgs.hasOwnProperty(deprecatedId)) {
          if (!val) {
            val = remainingArgs[deprecatedId];
            if (val) {
              errorReporter.onDeprecatedOption(deprecatedId, o.deprecationMessage || localize(1760, null, optionId));
            }
          }
          delete remainingArgs[deprecatedId];
        }
      }
    }
    if (typeof val !== "undefined") {
      if (o.type === "string[]") {
        if (!Array.isArray(val)) {
          val = [val];
        }
        if (!o.allowEmptyValue) {
          const sanitized = val.filter((v) => v.length > 0);
          if (sanitized.length !== val.length) {
            errorReporter.onEmptyValue(optionId);
            val = sanitized.length > 0 ? sanitized : void 0;
          }
        }
      } else if (o.type === "string") {
        if (Array.isArray(val)) {
          val = val.pop();
          errorReporter.onMultipleValues(optionId, val);
        } else if (!val && !o.allowEmptyValue) {
          errorReporter.onEmptyValue(optionId);
          val = void 0;
        }
      }
      cleanedArgs[optionId] = val;
      if (o.deprecationMessage) {
        errorReporter.onDeprecatedOption(optionId, o.deprecationMessage);
      }
    }
    delete remainingArgs[optionId];
  }
  for (const key in remainingArgs) {
    errorReporter.onUnknownOption(key);
  }
  return cleanedArgs;
}

// out-build/vs/platform/environment/node/environmentService.js
import { homedir, tmpdir as tmpdir2 } from "os";

// out-build/vs/base/common/date.js
var minute = 60;
var hour = minute * 60;
var day = hour * 24;
var week = day * 7;
var month = day * 30;
var year = day * 365;
function $kn(date) {
  return date.getFullYear() + "-" + String(date.getMonth() + 1).padStart(2, "0") + "-" + String(date.getDate()).padStart(2, "0") + "T" + String(date.getHours()).padStart(2, "0") + ":" + String(date.getMinutes()).padStart(2, "0") + ":" + String(date.getSeconds()).padStart(2, "0") + "." + (date.getMilliseconds() / 1e3).toFixed(3).slice(2, 5) + "Z";
}

// out-build/vs/platform/environment/common/environmentService.js
var $ln = /^([^.]+\..+)[:=](.+)$/;
var $mn = class {
  get appRoot() {
    return $yc($fh.asFileUri("").fsPath);
  }
  get userHome() {
    return URI.file(this.b.homeDir);
  }
  get userDataPath() {
    return this.b.userDataDir;
  }
  get appSettingsHome() {
    return URI.file($vc(this.userDataPath, "User"));
  }
  get tmpDir() {
    return URI.file(this.b.tmpDir);
  }
  get cacheHome() {
    return URI.file(this.userDataPath);
  }
  get stateResource() {
    return $yh(this.appSettingsHome, "globalStorage", "storage.json");
  }
  get userRoamingDataHome() {
    return this.appSettingsHome.with({ scheme: Schemas.vscodeUserData });
  }
  get userDataSyncHome() {
    return $yh(this.appSettingsHome, "sync");
  }
  get logsHome() {
    if (!this.args.logsPath) {
      const key = $kn(/* @__PURE__ */ new Date()).replace(/-|:|\.\d+Z$/g, "");
      this.args.logsPath = $vc(this.userDataPath, "logs", key);
    }
    return URI.file(this.args.logsPath);
  }
  get sync() {
    return this.args.sync;
  }
  get machineSettingsResource() {
    return $yh(URI.file($vc(this.userDataPath, "Machine")), "settings.json");
  }
  get workspaceStorageHome() {
    return $yh(this.appSettingsHome, "workspaceStorage");
  }
  get localHistoryHome() {
    return $yh(this.appSettingsHome, "History");
  }
  get keyboardLayoutResource() {
    return $yh(this.userRoamingDataHome, "keyboardLayout.json");
  }
  get argvResource() {
    const vscodePortable = env["VSCODE_PORTABLE"];
    if (vscodePortable) {
      return URI.file($vc(vscodePortable, "argv.json"));
    }
    return $yh(this.userHome, this.c.dataFolderName, "argv.json");
  }
  get isExtensionDevelopment() {
    return !!this.args.extensionDevelopmentPath;
  }
  get untitledWorkspacesHome() {
    return URI.file($vc(this.userDataPath, "Workspaces"));
  }
  get builtinExtensionsPath() {
    const cliBuiltinExtensionsDir = this.args["builtin-extensions-dir"];
    if (cliBuiltinExtensionsDir) {
      return $wc(cliBuiltinExtensionsDir);
    }
    return $tc($vc($fh.asFileUri("").fsPath, "..", "extensions"));
  }
  get extensionsDownloadLocation() {
    const cliExtensionsDownloadDir = this.args["extensions-download-dir"];
    if (cliExtensionsDownloadDir) {
      return URI.file($wc(cliExtensionsDownloadDir));
    }
    return URI.file($vc(this.userDataPath, "CachedExtensionVSIXs"));
  }
  get extensionsPath() {
    const cliExtensionsDir = this.args["extensions-dir"];
    if (cliExtensionsDir) {
      return $wc(cliExtensionsDir);
    }
    const vscodeExtensions = env["VSCODE_EXTENSIONS"];
    if (vscodeExtensions) {
      return vscodeExtensions;
    }
    const vscodePortable = env["VSCODE_PORTABLE"];
    if (vscodePortable) {
      return $vc(vscodePortable, "extensions");
    }
    return $yh(this.userHome, this.c.dataFolderName, "extensions").fsPath;
  }
  get extensionDevelopmentLocationURI() {
    const extensionDevelopmentPaths = this.args.extensionDevelopmentPath;
    if (Array.isArray(extensionDevelopmentPaths)) {
      return extensionDevelopmentPaths.map((extensionDevelopmentPath) => {
        if (/^[^:/?#]+?:\/\//.test(extensionDevelopmentPath)) {
          return URI.parse(extensionDevelopmentPath);
        }
        return URI.file($tc(extensionDevelopmentPath));
      });
    }
    return void 0;
  }
  get extensionDevelopmentKind() {
    return this.args.extensionDevelopmentKind?.map((kind) => kind === "ui" || kind === "workspace" || kind === "web" ? kind : "workspace");
  }
  get extensionTestsLocationURI() {
    const extensionTestsPath = this.args.extensionTestsPath;
    if (extensionTestsPath) {
      if (/^[^:/?#]+?:\/\//.test(extensionTestsPath)) {
        return URI.parse(extensionTestsPath);
      }
      return URI.file($tc(extensionTestsPath));
    }
    return void 0;
  }
  get disableExtensions() {
    if (this.args["disable-extensions"]) {
      return true;
    }
    const disableExtensions = this.args["disable-extension"];
    if (disableExtensions) {
      if (typeof disableExtensions === "string") {
        return [disableExtensions];
      }
      if (Array.isArray(disableExtensions) && disableExtensions.length > 0) {
        return disableExtensions;
      }
    }
    return false;
  }
  get debugExtensionHost() {
    return $nn(this.args, this.isBuilt);
  }
  get debugRenderer() {
    return !!this.args.debugRenderer;
  }
  get isBuilt() {
    return !env["VSCODE_DEV"];
  }
  get verbose() {
    return !!this.args.verbose;
  }
  get logLevel() {
    return this.args.log?.find((entry) => !$ln.test(entry));
  }
  get extensionLogLevel() {
    const result = [];
    for (const entry of this.args.log || []) {
      const matches = $ln.exec(entry);
      if (matches && matches[1] && matches[2]) {
        result.push([matches[1], matches[2]]);
      }
    }
    return result.length ? result : void 0;
  }
  get serviceMachineIdResource() {
    return $yh(URI.file(this.userDataPath), "machineid");
  }
  get crashReporterId() {
    return this.args["crash-reporter-id"];
  }
  get crashReporterDirectory() {
    return this.args["crash-reporter-directory"];
  }
  get disableTelemetry() {
    return !!this.args["disable-telemetry"];
  }
  get disableWorkspaceTrust() {
    return !!this.args["disable-workspace-trust"];
  }
  get useInMemorySecretStorage() {
    return !!this.args["use-inmemory-secretstorage"];
  }
  get policyFile() {
    if (this.args["__enable-file-policy"]) {
      const vscodePortable = env["VSCODE_PORTABLE"];
      if (vscodePortable) {
        return URI.file($vc(vscodePortable, "policy.json"));
      }
      return $yh(this.userHome, this.c.dataFolderName, "policy.json");
    }
    return void 0;
  }
  get continueOn() {
    return this.args["continueOn"];
  }
  set continueOn(value) {
    this.args["continueOn"] = value;
  }
  get args() {
    return this.a;
  }
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.editSessionId = this.args["editSessionId"];
  }
};
__decorate([
  $pi
], $mn.prototype, "appRoot", null);
__decorate([
  $pi
], $mn.prototype, "userHome", null);
__decorate([
  $pi
], $mn.prototype, "userDataPath", null);
__decorate([
  $pi
], $mn.prototype, "appSettingsHome", null);
__decorate([
  $pi
], $mn.prototype, "tmpDir", null);
__decorate([
  $pi
], $mn.prototype, "cacheHome", null);
__decorate([
  $pi
], $mn.prototype, "stateResource", null);
__decorate([
  $pi
], $mn.prototype, "userRoamingDataHome", null);
__decorate([
  $pi
], $mn.prototype, "userDataSyncHome", null);
__decorate([
  $pi
], $mn.prototype, "sync", null);
__decorate([
  $pi
], $mn.prototype, "machineSettingsResource", null);
__decorate([
  $pi
], $mn.prototype, "workspaceStorageHome", null);
__decorate([
  $pi
], $mn.prototype, "localHistoryHome", null);
__decorate([
  $pi
], $mn.prototype, "keyboardLayoutResource", null);
__decorate([
  $pi
], $mn.prototype, "argvResource", null);
__decorate([
  $pi
], $mn.prototype, "isExtensionDevelopment", null);
__decorate([
  $pi
], $mn.prototype, "untitledWorkspacesHome", null);
__decorate([
  $pi
], $mn.prototype, "builtinExtensionsPath", null);
__decorate([
  $pi
], $mn.prototype, "extensionsPath", null);
__decorate([
  $pi
], $mn.prototype, "extensionDevelopmentLocationURI", null);
__decorate([
  $pi
], $mn.prototype, "extensionDevelopmentKind", null);
__decorate([
  $pi
], $mn.prototype, "extensionTestsLocationURI", null);
__decorate([
  $pi
], $mn.prototype, "debugExtensionHost", null);
__decorate([
  $pi
], $mn.prototype, "logLevel", null);
__decorate([
  $pi
], $mn.prototype, "extensionLogLevel", null);
__decorate([
  $pi
], $mn.prototype, "serviceMachineIdResource", null);
__decorate([
  $pi
], $mn.prototype, "disableTelemetry", null);
__decorate([
  $pi
], $mn.prototype, "disableWorkspaceTrust", null);
__decorate([
  $pi
], $mn.prototype, "useInMemorySecretStorage", null);
__decorate([
  $pi
], $mn.prototype, "policyFile", null);
function $nn(args, isBuilt) {
  return $on(args["inspect-extensions"], args["inspect-brk-extensions"], 5870, isBuilt, args.debugId, args.extensionEnvironment);
}
function $on(debugArg, debugBrkArg, defaultBuildPort, isBuilt, debugId, environmentString) {
  const portStr = debugBrkArg || debugArg;
  const port = Number(portStr) || (!isBuilt ? defaultBuildPort : null);
  const brk = port ? Boolean(!!debugBrkArg) : false;
  let env2;
  if (environmentString) {
    try {
      env2 = JSON.parse(environmentString);
    } catch {
    }
  }
  return { port, break: brk, debugId, env: env2 };
}

// out-build/vs/platform/environment/node/userDataPath.js
import * as os from "os";
import * as path from "path";
var module = { exports: {} };
(function() {
  const isESM = true;
  function factory(path2, os4, cwd2) {
    function getUserDataPath2(cliArgs, productName) {
      const userDataPath = doGetUserDataPath(cliArgs, productName);
      const pathsToResolve = [userDataPath];
      if (!path2.isAbsolute(userDataPath)) {
        pathsToResolve.unshift(cwd2);
      }
      return path2.resolve(...pathsToResolve);
    }
    function doGetUserDataPath(cliArgs, productName) {
      if (process.env["VSCODE_DEV"]) {
        productName = "code-oss-dev";
      }
      const portablePath = process.env["VSCODE_PORTABLE"];
      if (portablePath) {
        return path2.join(portablePath, "user-data");
      }
      let appDataPath = process.env["VSCODE_APPDATA"];
      if (appDataPath) {
        return path2.join(appDataPath, productName);
      }
      const cliPath = cliArgs["user-data-dir"];
      if (cliPath) {
        return cliPath;
      }
      switch (process.platform) {
        case "win32":
          appDataPath = process.env["APPDATA"];
          if (!appDataPath) {
            const userProfile = process.env["USERPROFILE"];
            if (typeof userProfile !== "string") {
              throw new Error("Windows: Unexpected undefined %USERPROFILE% environment variable");
            }
            appDataPath = path2.join(userProfile, "AppData", "Roaming");
          }
          break;
        case "darwin":
          appDataPath = path2.join(os4.homedir(), "Library", "Application Support");
          break;
        case "linux":
          appDataPath = process.env["XDG_CONFIG_HOME"] || path2.join(os4.homedir(), ".config");
          break;
        default:
          throw new Error("Platform not supported");
      }
      return path2.join(appDataPath, productName);
    }
    return {
      getUserDataPath: getUserDataPath2
    };
  }
  if (!isESM && typeof define === "function") {
    define(["path", "os", "vs/base/common/process"], function(path2, os4, process2) {
      return factory(path2, os4, process2.cwd());
    });
  } else if (typeof module === "object" && typeof module.exports === "object") {
    module.exports = factory(path, os, process.env["VSCODE_CWD"] || process.cwd());
  } else {
    throw new Error("Unknown context");
  }
})();
var getUserDataPath = module.exports.getUserDataPath;

// out-build/vs/platform/environment/node/environmentService.js
var $pn = class extends $mn {
  constructor(args, productService) {
    super(args, {
      homeDir: homedir(),
      tmpDir: tmpdir2(),
      userDataDir: getUserDataPath(args, productService.nameShort)
    }, productService);
  }
};

// out-build/vs/base/common/errorMessage.js
function exceptionToErrorMessage(exception, verbose) {
  if (verbose && (exception.stack || exception.stacktrace)) {
    return localize(107, null, detectSystemErrorMessage(exception), stackToString(exception.stack) || stackToString(exception.stacktrace));
  }
  return detectSystemErrorMessage(exception);
}
function stackToString(stack) {
  if (Array.isArray(stack)) {
    return stack.join("\n");
  }
  return stack;
}
function detectSystemErrorMessage(exception) {
  if (exception.code === "ERR_UNC_HOST_NOT_ALLOWED") {
    return `${exception.message}. Please update the 'security.allowedUNCHosts' setting if you want to allow this host.`;
  }
  if (typeof exception.code === "string" && typeof exception.errno === "number" && typeof exception.syscall === "string") {
    return localize(108, null, exception.message);
  }
  return exception.message || localize(109, null);
}
function $Ij(error = null, verbose = false) {
  if (!error) {
    return localize(110, null);
  }
  if (Array.isArray(error)) {
    const errors = $Ub(error);
    const msg = $Ij(errors[0], verbose);
    if (errors.length > 1) {
      return localize(111, null, msg, errors.length);
    }
    return msg;
  }
  if ($wg(error)) {
    return error;
  }
  if (error.detail) {
    const detail = error.detail;
    if (detail.error) {
      return exceptionToErrorMessage(detail.error, verbose);
    }
    if (detail.exception) {
      return exceptionToErrorMessage(detail.exception, verbose);
    }
  }
  if (error.stack) {
    return exceptionToErrorMessage(error, verbose);
  }
  if (error.message) {
    return error.message;
  }
  return localize(112, null);
}

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

// out-build/vs/platform/contextkey/common/scanner.js
var TokenType;
(function(TokenType2) {
  TokenType2[TokenType2["LParen"] = 0] = "LParen";
  TokenType2[TokenType2["RParen"] = 1] = "RParen";
  TokenType2[TokenType2["Neg"] = 2] = "Neg";
  TokenType2[TokenType2["Eq"] = 3] = "Eq";
  TokenType2[TokenType2["NotEq"] = 4] = "NotEq";
  TokenType2[TokenType2["Lt"] = 5] = "Lt";
  TokenType2[TokenType2["LtEq"] = 6] = "LtEq";
  TokenType2[TokenType2["Gt"] = 7] = "Gt";
  TokenType2[TokenType2["GtEq"] = 8] = "GtEq";
  TokenType2[TokenType2["RegexOp"] = 9] = "RegexOp";
  TokenType2[TokenType2["RegexStr"] = 10] = "RegexStr";
  TokenType2[TokenType2["True"] = 11] = "True";
  TokenType2[TokenType2["False"] = 12] = "False";
  TokenType2[TokenType2["In"] = 13] = "In";
  TokenType2[TokenType2["Not"] = 14] = "Not";
  TokenType2[TokenType2["And"] = 15] = "And";
  TokenType2[TokenType2["Or"] = 16] = "Or";
  TokenType2[TokenType2["Str"] = 17] = "Str";
  TokenType2[TokenType2["QuotedStr"] = 18] = "QuotedStr";
  TokenType2[TokenType2["Error"] = 19] = "Error";
  TokenType2[TokenType2["EOF"] = 20] = "EOF";
})(TokenType || (TokenType = {}));
function hintDidYouMean(...meant) {
  switch (meant.length) {
    case 1:
      return localize(1701, null, meant[0]);
    case 2:
      return localize(1702, null, meant[0], meant[1]);
    case 3:
      return localize(1703, null, meant[0], meant[1], meant[2]);
    default:
      return void 0;
  }
}
var hintDidYouForgetToOpenOrCloseQuote = localize(1704, null);
var hintDidYouForgetToEscapeSlash = localize(1705, null);
var $Sj = class _$Sj {
  constructor() {
    this.c = "";
    this.d = 0;
    this.e = 0;
    this.f = [];
    this.g = [];
    this.m = /[a-zA-Z0-9_<>\-\./\\:\*\?\+\[\]\^,#@;"%\$\p{L}-]+/uy;
  }
  static getLexeme(token) {
    switch (token.type) {
      case 0:
        return "(";
      case 1:
        return ")";
      case 2:
        return "!";
      case 3:
        return token.isTripleEq ? "===" : "==";
      case 4:
        return token.isTripleEq ? "!==" : "!=";
      case 5:
        return "<";
      case 6:
        return "<=";
      case 7:
        return ">=";
      case 8:
        return ">=";
      case 9:
        return "=~";
      case 10:
        return token.lexeme;
      case 11:
        return "true";
      case 12:
        return "false";
      case 13:
        return "in";
      case 14:
        return "not";
      case 15:
        return "&&";
      case 16:
        return "||";
      case 17:
        return token.lexeme;
      case 18:
        return token.lexeme;
      case 19:
        return token.lexeme;
      case 20:
        return "EOF";
      default:
        throw $ib(`unhandled token type: ${JSON.stringify(token)}; have you forgotten to add a case?`);
    }
  }
  static {
    this.a = new Set(["i", "g", "s", "m", "y", "u"].map((ch) => ch.charCodeAt(0)));
  }
  static {
    this.b = /* @__PURE__ */ new Map([
      [
        "not",
        14
        /* TokenType.Not */
      ],
      [
        "in",
        13
        /* TokenType.In */
      ],
      [
        "false",
        12
        /* TokenType.False */
      ],
      [
        "true",
        11
        /* TokenType.True */
      ]
    ]);
  }
  get errors() {
    return this.g;
  }
  reset(value) {
    this.c = value;
    this.d = 0;
    this.e = 0;
    this.f = [];
    this.g = [];
    return this;
  }
  scan() {
    while (!this.r()) {
      this.d = this.e;
      const ch = this.i();
      switch (ch) {
        case 40:
          this.k(
            0
            /* TokenType.LParen */
          );
          break;
        case 41:
          this.k(
            1
            /* TokenType.RParen */
          );
          break;
        case 33:
          if (this.h(
            61
            /* CharCode.Equals */
          )) {
            const isTripleEq = this.h(
              61
              /* CharCode.Equals */
            );
            this.f.push({ type: 4, offset: this.d, isTripleEq });
          } else {
            this.k(
              2
              /* TokenType.Neg */
            );
          }
          break;
        case 39:
          this.o();
          break;
        case 47:
          this.q();
          break;
        case 61:
          if (this.h(
            61
            /* CharCode.Equals */
          )) {
            const isTripleEq = this.h(
              61
              /* CharCode.Equals */
            );
            this.f.push({ type: 3, offset: this.d, isTripleEq });
          } else if (this.h(
            126
            /* CharCode.Tilde */
          )) {
            this.k(
              9
              /* TokenType.RegexOp */
            );
          } else {
            this.l(hintDidYouMean("==", "=~"));
          }
          break;
        case 60:
          this.k(
            this.h(
              61
              /* CharCode.Equals */
            ) ? 6 : 5
            /* TokenType.Lt */
          );
          break;
        case 62:
          this.k(
            this.h(
              61
              /* CharCode.Equals */
            ) ? 8 : 7
            /* TokenType.Gt */
          );
          break;
        case 38:
          if (this.h(
            38
            /* CharCode.Ampersand */
          )) {
            this.k(
              15
              /* TokenType.And */
            );
          } else {
            this.l(hintDidYouMean("&&"));
          }
          break;
        case 124:
          if (this.h(
            124
            /* CharCode.Pipe */
          )) {
            this.k(
              16
              /* TokenType.Or */
            );
          } else {
            this.l(hintDidYouMean("||"));
          }
          break;
        case 32:
        case 13:
        case 9:
        case 10:
        case 160:
          break;
        default:
          this.n();
      }
    }
    this.d = this.e;
    this.k(
      20
      /* TokenType.EOF */
    );
    return Array.from(this.f);
  }
  h(expected) {
    if (this.r()) {
      return false;
    }
    if (this.c.charCodeAt(this.e) !== expected) {
      return false;
    }
    this.e++;
    return true;
  }
  i() {
    return this.c.charCodeAt(this.e++);
  }
  j() {
    return this.r() ? 0 : this.c.charCodeAt(this.e);
  }
  k(type) {
    this.f.push({ type, offset: this.d });
  }
  l(additional) {
    const offset = this.d;
    const lexeme = this.c.substring(this.d, this.e);
    const errToken = { type: 19, offset: this.d, lexeme };
    this.g.push({ offset, lexeme, additionalInfo: additional });
    this.f.push(errToken);
  }
  n() {
    this.m.lastIndex = this.d;
    const match = this.m.exec(this.c);
    if (match) {
      this.e = this.d + match[0].length;
      const lexeme = this.c.substring(this.d, this.e);
      const keyword = _$Sj.b.get(lexeme);
      if (keyword) {
        this.k(keyword);
      } else {
        this.f.push({ type: 17, lexeme, offset: this.d });
      }
    }
  }
  // captures the lexeme without the leading and trailing '
  o() {
    while (this.j() !== 39 && !this.r()) {
      this.i();
    }
    if (this.r()) {
      this.l(hintDidYouForgetToOpenOrCloseQuote);
      return;
    }
    this.i();
    this.f.push({ type: 18, lexeme: this.c.substring(this.d + 1, this.e - 1), offset: this.d + 1 });
  }
  /*
   * Lexing a regex expression: /.../[igsmyu]*
   * Based on https://github.com/microsoft/TypeScript/blob/9247ef115e617805983740ba795d7a8164babf89/src/compiler/scanner.ts#L2129-L2181
   *
   * Note that we want slashes within a regex to be escaped, e.g., /file:\\/\\/\\// should match `file:///`
   */
  q() {
    let p = this.e;
    let inEscape = false;
    let inCharacterClass = false;
    while (true) {
      if (p >= this.c.length) {
        this.e = p;
        this.l(hintDidYouForgetToEscapeSlash);
        return;
      }
      const ch = this.c.charCodeAt(p);
      if (inEscape) {
        inEscape = false;
      } else if (ch === 47 && !inCharacterClass) {
        p++;
        break;
      } else if (ch === 91) {
        inCharacterClass = true;
      } else if (ch === 92) {
        inEscape = true;
      } else if (ch === 93) {
        inCharacterClass = false;
      }
      p++;
    }
    while (p < this.c.length && _$Sj.a.has(this.c.charCodeAt(p))) {
      p++;
    }
    this.e = p;
    const lexeme = this.c.substring(this.d, this.e);
    this.f.push({ type: 10, lexeme, offset: this.d });
  }
  r() {
    return this.e >= this.c.length;
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

// out-build/vs/platform/contextkey/common/contextkey.js
var CONSTANT_VALUES = /* @__PURE__ */ new Map();
CONSTANT_VALUES.set("false", false);
CONSTANT_VALUES.set("true", true);
CONSTANT_VALUES.set("isMac", $m);
CONSTANT_VALUES.set("isLinux", $n);
CONSTANT_VALUES.set("isWindows", $l);
CONSTANT_VALUES.set("isWeb", $r);
CONSTANT_VALUES.set("isMacNative", $m && !$r);
CONSTANT_VALUES.set("isEdge", $K);
CONSTANT_VALUES.set("isFirefox", $I);
CONSTANT_VALUES.set("isChrome", $H);
CONSTANT_VALUES.set("isSafari", $J);
var hasOwnProperty = Object.prototype.hasOwnProperty;
var ContextKeyExprType;
(function(ContextKeyExprType2) {
  ContextKeyExprType2[ContextKeyExprType2["False"] = 0] = "False";
  ContextKeyExprType2[ContextKeyExprType2["True"] = 1] = "True";
  ContextKeyExprType2[ContextKeyExprType2["Defined"] = 2] = "Defined";
  ContextKeyExprType2[ContextKeyExprType2["Not"] = 3] = "Not";
  ContextKeyExprType2[ContextKeyExprType2["Equals"] = 4] = "Equals";
  ContextKeyExprType2[ContextKeyExprType2["NotEquals"] = 5] = "NotEquals";
  ContextKeyExprType2[ContextKeyExprType2["And"] = 6] = "And";
  ContextKeyExprType2[ContextKeyExprType2["Regex"] = 7] = "Regex";
  ContextKeyExprType2[ContextKeyExprType2["NotRegex"] = 8] = "NotRegex";
  ContextKeyExprType2[ContextKeyExprType2["Or"] = 9] = "Or";
  ContextKeyExprType2[ContextKeyExprType2["In"] = 10] = "In";
  ContextKeyExprType2[ContextKeyExprType2["NotIn"] = 11] = "NotIn";
  ContextKeyExprType2[ContextKeyExprType2["Greater"] = 12] = "Greater";
  ContextKeyExprType2[ContextKeyExprType2["GreaterEquals"] = 13] = "GreaterEquals";
  ContextKeyExprType2[ContextKeyExprType2["Smaller"] = 14] = "Smaller";
  ContextKeyExprType2[ContextKeyExprType2["SmallerEquals"] = 15] = "SmallerEquals";
})(ContextKeyExprType || (ContextKeyExprType = {}));
var defaultConfig = {
  regexParsingWithErrorRecovery: true
};
var errorEmptyString = localize(1681, null);
var hintEmptyString = localize(1682, null);
var errorNoInAfterNot = localize(1683, null);
var errorClosingParenthesis = localize(1684, null);
var errorUnexpectedToken = localize(1685, null);
var hintUnexpectedToken = localize(1686, null);
var errorUnexpectedEOF = localize(1687, null);
var hintUnexpectedEOF = localize(1688, null);
var $Uj = class _$Uj {
  static {
    this.c = new Error();
  }
  get lexingErrors() {
    return this.d.errors;
  }
  get parsingErrors() {
    return this.h;
  }
  constructor(k = defaultConfig) {
    this.k = k;
    this.d = new $Sj();
    this.f = [];
    this.g = 0;
    this.h = [];
    this.v = /g|y/g;
  }
  /**
   * Parse a context key expression.
   *
   * @param input the expression to parse
   * @returns the parsed expression or `undefined` if there's an error - call `lexingErrors` and `parsingErrors` to see the errors
   */
  parse(input) {
    if (input === "") {
      this.h.push({ message: errorEmptyString, offset: 0, lexeme: "", additionalInfo: hintEmptyString });
      return void 0;
    }
    this.f = this.d.reset(input).scan();
    this.g = 0;
    this.h = [];
    try {
      const expr = this.l();
      if (!this.E()) {
        const peek = this.D();
        const additionalInfo = peek.type === 17 ? hintUnexpectedToken : void 0;
        this.h.push({ message: errorUnexpectedToken, offset: peek.offset, lexeme: $Sj.getLexeme(peek), additionalInfo });
        throw _$Uj.c;
      }
      return expr;
    } catch (e) {
      if (!(e === _$Uj.c)) {
        throw e;
      }
      return void 0;
    }
  }
  l() {
    return this.m();
  }
  m() {
    const expr = [this.o()];
    while (this.y(
      16
      /* TokenType.Or */
    )) {
      const right = this.o();
      expr.push(right);
    }
    return expr.length === 1 ? expr[0] : $Vj.or(...expr);
  }
  o() {
    const expr = [this.s()];
    while (this.y(
      15
      /* TokenType.And */
    )) {
      const right = this.s();
      expr.push(right);
    }
    return expr.length === 1 ? expr[0] : $Vj.and(...expr);
  }
  s() {
    if (this.y(
      2
      /* TokenType.Neg */
    )) {
      const peek = this.D();
      switch (peek.type) {
        case 11:
          this.z();
          return $Yj.INSTANCE;
        case 12:
          this.z();
          return $Zj.INSTANCE;
        case 0: {
          this.z();
          const expr = this.l();
          this.A(1, errorClosingParenthesis);
          return expr?.negate();
        }
        case 17:
          this.z();
          return $6j.create(peek.lexeme);
        default:
          throw this.B(`KEY | true | false | '(' expression ')'`, peek);
      }
    }
    return this.t();
  }
  t() {
    const peek = this.D();
    switch (peek.type) {
      case 11:
        this.z();
        return $Vj.true();
      case 12:
        this.z();
        return $Vj.false();
      case 0: {
        this.z();
        const expr = this.l();
        this.A(1, errorClosingParenthesis);
        return expr;
      }
      case 17: {
        const key = peek.lexeme;
        this.z();
        if (this.y(
          9
          /* TokenType.RegexOp */
        )) {
          const expr = this.D();
          if (!this.k.regexParsingWithErrorRecovery) {
            this.z();
            if (expr.type !== 10) {
              throw this.B(`REGEX`, expr);
            }
            const regexLexeme = expr.lexeme;
            const closingSlashIndex = regexLexeme.lastIndexOf("/");
            const flags = closingSlashIndex === regexLexeme.length - 1 ? void 0 : this.w(regexLexeme.substring(closingSlashIndex + 1));
            let regexp;
            try {
              regexp = new RegExp(regexLexeme.substring(1, closingSlashIndex), flags);
            } catch (e) {
              throw this.B(`REGEX`, expr);
            }
            return $$j.create(key, regexp);
          }
          switch (expr.type) {
            case 10:
            case 19: {
              const lexemeReconstruction = [expr.lexeme];
              this.z();
              let followingToken = this.D();
              let parenBalance = 0;
              for (let i = 0; i < expr.lexeme.length; i++) {
                if (expr.lexeme.charCodeAt(i) === 40) {
                  parenBalance++;
                } else if (expr.lexeme.charCodeAt(i) === 41) {
                  parenBalance--;
                }
              }
              while (!this.E() && followingToken.type !== 15 && followingToken.type !== 16) {
                switch (followingToken.type) {
                  case 0:
                    parenBalance++;
                    break;
                  case 1:
                    parenBalance--;
                    break;
                  case 10:
                  case 18:
                    for (let i = 0; i < followingToken.lexeme.length; i++) {
                      if (followingToken.lexeme.charCodeAt(i) === 40) {
                        parenBalance++;
                      } else if (expr.lexeme.charCodeAt(i) === 41) {
                        parenBalance--;
                      }
                    }
                }
                if (parenBalance < 0) {
                  break;
                }
                lexemeReconstruction.push($Sj.getLexeme(followingToken));
                this.z();
                followingToken = this.D();
              }
              const regexLexeme = lexemeReconstruction.join("");
              const closingSlashIndex = regexLexeme.lastIndexOf("/");
              const flags = closingSlashIndex === regexLexeme.length - 1 ? void 0 : this.w(regexLexeme.substring(closingSlashIndex + 1));
              let regexp;
              try {
                regexp = new RegExp(regexLexeme.substring(1, closingSlashIndex), flags);
              } catch (e) {
                throw this.B(`REGEX`, expr);
              }
              return $Vj.regex(key, regexp);
            }
            case 18: {
              const serializedValue = expr.lexeme;
              this.z();
              let regex = null;
              if (!$uf(serializedValue)) {
                const start = serializedValue.indexOf("/");
                const end = serializedValue.lastIndexOf("/");
                if (start !== end && start >= 0) {
                  const value = serializedValue.slice(start + 1, end);
                  const caseIgnoreFlag = serializedValue[end + 1] === "i" ? "i" : "";
                  try {
                    regex = new RegExp(value, caseIgnoreFlag);
                  } catch (_e) {
                    throw this.B(`REGEX`, expr);
                  }
                }
              }
              if (regex === null) {
                throw this.B("REGEX", expr);
              }
              return $$j.create(key, regex);
            }
            default:
              throw this.B("REGEX", this.D());
          }
        }
        if (this.y(
          14
          /* TokenType.Not */
        )) {
          this.A(13, errorNoInAfterNot);
          const right = this.u();
          return $Vj.notIn(key, right);
        }
        const maybeOp = this.D().type;
        switch (maybeOp) {
          case 3: {
            this.z();
            const right = this.u();
            if (this.x().type === 18) {
              return $Vj.equals(key, right);
            }
            switch (right) {
              case "true":
                return $Vj.has(key);
              case "false":
                return $Vj.not(key);
              default:
                return $Vj.equals(key, right);
            }
          }
          case 4: {
            this.z();
            const right = this.u();
            if (this.x().type === 18) {
              return $Vj.notEquals(key, right);
            }
            switch (right) {
              case "true":
                return $Vj.not(key);
              case "false":
                return $Vj.has(key);
              default:
                return $Vj.notEquals(key, right);
            }
          }
          case 5:
            this.z();
            return $9j.create(key, this.u());
          case 6:
            this.z();
            return $0j.create(key, this.u());
          case 7:
            this.z();
            return $7j.create(key, this.u());
          case 8:
            this.z();
            return $8j.create(key, this.u());
          case 13:
            this.z();
            return $Vj.in(key, this.u());
          default:
            return $Vj.has(key);
        }
      }
      case 20:
        this.h.push({ message: errorUnexpectedEOF, offset: peek.offset, lexeme: "", additionalInfo: hintUnexpectedEOF });
        throw _$Uj.c;
      default:
        throw this.B(`true | false | KEY 
	| KEY '=~' REGEX 
	| KEY ('==' | '!=' | '<' | '<=' | '>' | '>=' | 'in' | 'not' 'in') value`, this.D());
    }
  }
  u() {
    const token = this.D();
    switch (token.type) {
      case 17:
      case 18:
        this.z();
        return token.lexeme;
      case 11:
        this.z();
        return "true";
      case 12:
        this.z();
        return "false";
      case 13:
        this.z();
        return "in";
      default:
        return "";
    }
  }
  w(flags) {
    return flags.replaceAll(this.v, "");
  }
  // careful: this can throw if current token is the initial one (ie index = 0)
  x() {
    return this.f[this.g - 1];
  }
  y(token) {
    if (this.C(token)) {
      this.z();
      return true;
    }
    return false;
  }
  z() {
    if (!this.E()) {
      this.g++;
    }
    return this.x();
  }
  A(type, message) {
    if (this.C(type)) {
      return this.z();
    }
    throw this.B(message, this.D());
  }
  B(expected, got, additionalInfo) {
    const message = localize(1689, null, expected, $Sj.getLexeme(got));
    const offset = got.offset;
    const lexeme = $Sj.getLexeme(got);
    this.h.push({ message, offset, lexeme, additionalInfo });
    return _$Uj.c;
  }
  C(type) {
    return this.D().type === type;
  }
  D() {
    return this.f[this.g];
  }
  E() {
    return this.D().type === 20;
  }
};
var $Vj = class {
  static false() {
    return $Yj.INSTANCE;
  }
  static true() {
    return $Zj.INSTANCE;
  }
  static has(key) {
    return $1j.create(key);
  }
  static equals(key, value) {
    return $2j.create(key, value);
  }
  static notEquals(key, value) {
    return $5j.create(key, value);
  }
  static regex(key, value) {
    return $$j.create(key, value);
  }
  static in(key, value) {
    return $3j.create(key, value);
  }
  static notIn(key, value) {
    return $4j.create(key, value);
  }
  static not(key) {
    return $6j.create(key);
  }
  static and(...expr) {
    return $ak.create(expr, null, true);
  }
  static or(...expr) {
    return $bk.create(expr, null, true);
  }
  static greater(key, value) {
    return $7j.create(key, value);
  }
  static greaterEquals(key, value) {
    return $8j.create(key, value);
  }
  static smaller(key, value) {
    return $9j.create(key, value);
  }
  static smallerEquals(key, value) {
    return $0j.create(key, value);
  }
  static {
    this.c = new $Uj({ regexParsingWithErrorRecovery: false });
  }
  static deserialize(serialized) {
    if (serialized === void 0 || serialized === null) {
      return void 0;
    }
    const expr = this.c.parse(serialized);
    return expr;
  }
};
function cmp(a, b) {
  return a.cmp(b);
}
var $Yj = class _$Yj {
  static {
    this.INSTANCE = new _$Yj();
  }
  constructor() {
    this.type = 0;
  }
  cmp(other) {
    return this.type - other.type;
  }
  equals(other) {
    return other.type === this.type;
  }
  substituteConstants() {
    return this;
  }
  evaluate(context) {
    return false;
  }
  serialize() {
    return "false";
  }
  keys() {
    return [];
  }
  map(mapFnc) {
    return this;
  }
  negate() {
    return $Zj.INSTANCE;
  }
};
var $Zj = class _$Zj {
  static {
    this.INSTANCE = new _$Zj();
  }
  constructor() {
    this.type = 1;
  }
  cmp(other) {
    return this.type - other.type;
  }
  equals(other) {
    return other.type === this.type;
  }
  substituteConstants() {
    return this;
  }
  evaluate(context) {
    return true;
  }
  serialize() {
    return "true";
  }
  keys() {
    return [];
  }
  map(mapFnc) {
    return this;
  }
  negate() {
    return $Yj.INSTANCE;
  }
};
var $1j = class _$1j {
  static create(key, negated = null) {
    const constantValue = CONSTANT_VALUES.get(key);
    if (typeof constantValue === "boolean") {
      return constantValue ? $Zj.INSTANCE : $Yj.INSTANCE;
    }
    return new _$1j(key, negated);
  }
  constructor(key, c) {
    this.key = key;
    this.c = c;
    this.type = 2;
  }
  cmp(other) {
    if (other.type !== this.type) {
      return this.type - other.type;
    }
    return cmp1(this.key, other.key);
  }
  equals(other) {
    if (other.type === this.type) {
      return this.key === other.key;
    }
    return false;
  }
  substituteConstants() {
    const constantValue = CONSTANT_VALUES.get(this.key);
    if (typeof constantValue === "boolean") {
      return constantValue ? $Zj.INSTANCE : $Yj.INSTANCE;
    }
    return this;
  }
  evaluate(context) {
    return !!context.getValue(this.key);
  }
  serialize() {
    return this.key;
  }
  keys() {
    return [this.key];
  }
  map(mapFnc) {
    return mapFnc.mapDefined(this.key);
  }
  negate() {
    if (!this.c) {
      this.c = $6j.create(this.key, this);
    }
    return this.c;
  }
};
var $2j = class _$2j {
  static create(key, value, negated = null) {
    if (typeof value === "boolean") {
      return value ? $1j.create(key, negated) : $6j.create(key, negated);
    }
    const constantValue = CONSTANT_VALUES.get(key);
    if (typeof constantValue === "boolean") {
      const trueValue = constantValue ? "true" : "false";
      return value === trueValue ? $Zj.INSTANCE : $Yj.INSTANCE;
    }
    return new _$2j(key, value, negated);
  }
  constructor(c, d, f) {
    this.c = c;
    this.d = d;
    this.f = f;
    this.type = 4;
  }
  cmp(other) {
    if (other.type !== this.type) {
      return this.type - other.type;
    }
    return cmp2(this.c, this.d, other.c, other.d);
  }
  equals(other) {
    if (other.type === this.type) {
      return this.c === other.c && this.d === other.d;
    }
    return false;
  }
  substituteConstants() {
    const constantValue = CONSTANT_VALUES.get(this.c);
    if (typeof constantValue === "boolean") {
      const trueValue = constantValue ? "true" : "false";
      return this.d === trueValue ? $Zj.INSTANCE : $Yj.INSTANCE;
    }
    return this;
  }
  evaluate(context) {
    return context.getValue(this.c) == this.d;
  }
  serialize() {
    return `${this.c} == '${this.d}'`;
  }
  keys() {
    return [this.c];
  }
  map(mapFnc) {
    return mapFnc.mapEquals(this.c, this.d);
  }
  negate() {
    if (!this.f) {
      this.f = $5j.create(this.c, this.d, this);
    }
    return this.f;
  }
};
var $3j = class _$3j {
  static create(key, valueKey) {
    return new _$3j(key, valueKey);
  }
  constructor(d, f) {
    this.d = d;
    this.f = f;
    this.type = 10;
    this.c = null;
  }
  cmp(other) {
    if (other.type !== this.type) {
      return this.type - other.type;
    }
    return cmp2(this.d, this.f, other.d, other.f);
  }
  equals(other) {
    if (other.type === this.type) {
      return this.d === other.d && this.f === other.f;
    }
    return false;
  }
  substituteConstants() {
    return this;
  }
  evaluate(context) {
    const source = context.getValue(this.f);
    const item = context.getValue(this.d);
    if (Array.isArray(source)) {
      return source.includes(item);
    }
    if (typeof item === "string" && typeof source === "object" && source !== null) {
      return hasOwnProperty.call(source, item);
    }
    return false;
  }
  serialize() {
    return `${this.d} in '${this.f}'`;
  }
  keys() {
    return [this.d, this.f];
  }
  map(mapFnc) {
    return mapFnc.mapIn(this.d, this.f);
  }
  negate() {
    if (!this.c) {
      this.c = $4j.create(this.d, this.f);
    }
    return this.c;
  }
};
var $4j = class _$4j {
  static create(key, valueKey) {
    return new _$4j(key, valueKey);
  }
  constructor(d, f) {
    this.d = d;
    this.f = f;
    this.type = 11;
    this.c = $3j.create(d, f);
  }
  cmp(other) {
    if (other.type !== this.type) {
      return this.type - other.type;
    }
    return this.c.cmp(other.c);
  }
  equals(other) {
    if (other.type === this.type) {
      return this.c.equals(other.c);
    }
    return false;
  }
  substituteConstants() {
    return this;
  }
  evaluate(context) {
    return !this.c.evaluate(context);
  }
  serialize() {
    return `${this.d} not in '${this.f}'`;
  }
  keys() {
    return this.c.keys();
  }
  map(mapFnc) {
    return mapFnc.mapNotIn(this.d, this.f);
  }
  negate() {
    return this.c;
  }
};
var $5j = class _$5j {
  static create(key, value, negated = null) {
    if (typeof value === "boolean") {
      if (value) {
        return $6j.create(key, negated);
      }
      return $1j.create(key, negated);
    }
    const constantValue = CONSTANT_VALUES.get(key);
    if (typeof constantValue === "boolean") {
      const falseValue = constantValue ? "true" : "false";
      return value === falseValue ? $Yj.INSTANCE : $Zj.INSTANCE;
    }
    return new _$5j(key, value, negated);
  }
  constructor(c, d, f) {
    this.c = c;
    this.d = d;
    this.f = f;
    this.type = 5;
  }
  cmp(other) {
    if (other.type !== this.type) {
      return this.type - other.type;
    }
    return cmp2(this.c, this.d, other.c, other.d);
  }
  equals(other) {
    if (other.type === this.type) {
      return this.c === other.c && this.d === other.d;
    }
    return false;
  }
  substituteConstants() {
    const constantValue = CONSTANT_VALUES.get(this.c);
    if (typeof constantValue === "boolean") {
      const falseValue = constantValue ? "true" : "false";
      return this.d === falseValue ? $Yj.INSTANCE : $Zj.INSTANCE;
    }
    return this;
  }
  evaluate(context) {
    return context.getValue(this.c) != this.d;
  }
  serialize() {
    return `${this.c} != '${this.d}'`;
  }
  keys() {
    return [this.c];
  }
  map(mapFnc) {
    return mapFnc.mapNotEquals(this.c, this.d);
  }
  negate() {
    if (!this.f) {
      this.f = $2j.create(this.c, this.d, this);
    }
    return this.f;
  }
};
var $6j = class _$6j {
  static create(key, negated = null) {
    const constantValue = CONSTANT_VALUES.get(key);
    if (typeof constantValue === "boolean") {
      return constantValue ? $Yj.INSTANCE : $Zj.INSTANCE;
    }
    return new _$6j(key, negated);
  }
  constructor(c, d) {
    this.c = c;
    this.d = d;
    this.type = 3;
  }
  cmp(other) {
    if (other.type !== this.type) {
      return this.type - other.type;
    }
    return cmp1(this.c, other.c);
  }
  equals(other) {
    if (other.type === this.type) {
      return this.c === other.c;
    }
    return false;
  }
  substituteConstants() {
    const constantValue = CONSTANT_VALUES.get(this.c);
    if (typeof constantValue === "boolean") {
      return constantValue ? $Yj.INSTANCE : $Zj.INSTANCE;
    }
    return this;
  }
  evaluate(context) {
    return !context.getValue(this.c);
  }
  serialize() {
    return `!${this.c}`;
  }
  keys() {
    return [this.c];
  }
  map(mapFnc) {
    return mapFnc.mapNot(this.c);
  }
  negate() {
    if (!this.d) {
      this.d = $1j.create(this.c, this);
    }
    return this.d;
  }
};
function withFloatOrStr(value, callback) {
  if (typeof value === "string") {
    const n = parseFloat(value);
    if (!isNaN(n)) {
      value = n;
    }
  }
  if (typeof value === "string" || typeof value === "number") {
    return callback(value);
  }
  return $Yj.INSTANCE;
}
var $7j = class _$7j {
  static create(key, _value, negated = null) {
    return withFloatOrStr(_value, (value) => new _$7j(key, value, negated));
  }
  constructor(c, d, f) {
    this.c = c;
    this.d = d;
    this.f = f;
    this.type = 12;
  }
  cmp(other) {
    if (other.type !== this.type) {
      return this.type - other.type;
    }
    return cmp2(this.c, this.d, other.c, other.d);
  }
  equals(other) {
    if (other.type === this.type) {
      return this.c === other.c && this.d === other.d;
    }
    return false;
  }
  substituteConstants() {
    return this;
  }
  evaluate(context) {
    if (typeof this.d === "string") {
      return false;
    }
    return parseFloat(context.getValue(this.c)) > this.d;
  }
  serialize() {
    return `${this.c} > ${this.d}`;
  }
  keys() {
    return [this.c];
  }
  map(mapFnc) {
    return mapFnc.mapGreater(this.c, this.d);
  }
  negate() {
    if (!this.f) {
      this.f = $0j.create(this.c, this.d, this);
    }
    return this.f;
  }
};
var $8j = class _$8j {
  static create(key, _value, negated = null) {
    return withFloatOrStr(_value, (value) => new _$8j(key, value, negated));
  }
  constructor(c, d, f) {
    this.c = c;
    this.d = d;
    this.f = f;
    this.type = 13;
  }
  cmp(other) {
    if (other.type !== this.type) {
      return this.type - other.type;
    }
    return cmp2(this.c, this.d, other.c, other.d);
  }
  equals(other) {
    if (other.type === this.type) {
      return this.c === other.c && this.d === other.d;
    }
    return false;
  }
  substituteConstants() {
    return this;
  }
  evaluate(context) {
    if (typeof this.d === "string") {
      return false;
    }
    return parseFloat(context.getValue(this.c)) >= this.d;
  }
  serialize() {
    return `${this.c} >= ${this.d}`;
  }
  keys() {
    return [this.c];
  }
  map(mapFnc) {
    return mapFnc.mapGreaterEquals(this.c, this.d);
  }
  negate() {
    if (!this.f) {
      this.f = $9j.create(this.c, this.d, this);
    }
    return this.f;
  }
};
var $9j = class _$9j {
  static create(key, _value, negated = null) {
    return withFloatOrStr(_value, (value) => new _$9j(key, value, negated));
  }
  constructor(c, d, f) {
    this.c = c;
    this.d = d;
    this.f = f;
    this.type = 14;
  }
  cmp(other) {
    if (other.type !== this.type) {
      return this.type - other.type;
    }
    return cmp2(this.c, this.d, other.c, other.d);
  }
  equals(other) {
    if (other.type === this.type) {
      return this.c === other.c && this.d === other.d;
    }
    return false;
  }
  substituteConstants() {
    return this;
  }
  evaluate(context) {
    if (typeof this.d === "string") {
      return false;
    }
    return parseFloat(context.getValue(this.c)) < this.d;
  }
  serialize() {
    return `${this.c} < ${this.d}`;
  }
  keys() {
    return [this.c];
  }
  map(mapFnc) {
    return mapFnc.mapSmaller(this.c, this.d);
  }
  negate() {
    if (!this.f) {
      this.f = $8j.create(this.c, this.d, this);
    }
    return this.f;
  }
};
var $0j = class _$0j {
  static create(key, _value, negated = null) {
    return withFloatOrStr(_value, (value) => new _$0j(key, value, negated));
  }
  constructor(c, d, f) {
    this.c = c;
    this.d = d;
    this.f = f;
    this.type = 15;
  }
  cmp(other) {
    if (other.type !== this.type) {
      return this.type - other.type;
    }
    return cmp2(this.c, this.d, other.c, other.d);
  }
  equals(other) {
    if (other.type === this.type) {
      return this.c === other.c && this.d === other.d;
    }
    return false;
  }
  substituteConstants() {
    return this;
  }
  evaluate(context) {
    if (typeof this.d === "string") {
      return false;
    }
    return parseFloat(context.getValue(this.c)) <= this.d;
  }
  serialize() {
    return `${this.c} <= ${this.d}`;
  }
  keys() {
    return [this.c];
  }
  map(mapFnc) {
    return mapFnc.mapSmallerEquals(this.c, this.d);
  }
  negate() {
    if (!this.f) {
      this.f = $7j.create(this.c, this.d, this);
    }
    return this.f;
  }
};
var $$j = class _$$j {
  static create(key, regexp) {
    return new _$$j(key, regexp);
  }
  constructor(d, f) {
    this.d = d;
    this.f = f;
    this.type = 7;
    this.c = null;
  }
  cmp(other) {
    if (other.type !== this.type) {
      return this.type - other.type;
    }
    if (this.d < other.d) {
      return -1;
    }
    if (this.d > other.d) {
      return 1;
    }
    const thisSource = this.f ? this.f.source : "";
    const otherSource = other.f ? other.f.source : "";
    if (thisSource < otherSource) {
      return -1;
    }
    if (thisSource > otherSource) {
      return 1;
    }
    return 0;
  }
  equals(other) {
    if (other.type === this.type) {
      const thisSource = this.f ? this.f.source : "";
      const otherSource = other.f ? other.f.source : "";
      return this.d === other.d && thisSource === otherSource;
    }
    return false;
  }
  substituteConstants() {
    return this;
  }
  evaluate(context) {
    const value = context.getValue(this.d);
    return this.f ? this.f.test(value) : false;
  }
  serialize() {
    const value = this.f ? `/${this.f.source}/${this.f.flags}` : "/invalid/";
    return `${this.d} =~ ${value}`;
  }
  keys() {
    return [this.d];
  }
  map(mapFnc) {
    return mapFnc.mapRegex(this.d, this.f);
  }
  negate() {
    if (!this.c) {
      this.c = $_j.create(this);
    }
    return this.c;
  }
};
var $_j = class _$_j {
  static create(actual) {
    return new _$_j(actual);
  }
  constructor(c) {
    this.c = c;
    this.type = 8;
  }
  cmp(other) {
    if (other.type !== this.type) {
      return this.type - other.type;
    }
    return this.c.cmp(other.c);
  }
  equals(other) {
    if (other.type === this.type) {
      return this.c.equals(other.c);
    }
    return false;
  }
  substituteConstants() {
    return this;
  }
  evaluate(context) {
    return !this.c.evaluate(context);
  }
  serialize() {
    return `!(${this.c.serialize()})`;
  }
  keys() {
    return this.c.keys();
  }
  map(mapFnc) {
    return new _$_j(this.c.map(mapFnc));
  }
  negate() {
    return this.c;
  }
};
function eliminateConstantsInArray(arr) {
  let newArr = null;
  for (let i = 0, len = arr.length; i < len; i++) {
    const newExpr = arr[i].substituteConstants();
    if (arr[i] !== newExpr) {
      if (newArr === null) {
        newArr = [];
        for (let j = 0; j < i; j++) {
          newArr[j] = arr[j];
        }
      }
    }
    if (newArr !== null) {
      newArr[i] = newExpr;
    }
  }
  if (newArr === null) {
    return arr;
  }
  return newArr;
}
var $ak = class _$ak {
  static create(_expr, negated, extraRedundantCheck) {
    return _$ak.d(_expr, negated, extraRedundantCheck);
  }
  constructor(expr, c) {
    this.expr = expr;
    this.c = c;
    this.type = 6;
  }
  cmp(other) {
    if (other.type !== this.type) {
      return this.type - other.type;
    }
    if (this.expr.length < other.expr.length) {
      return -1;
    }
    if (this.expr.length > other.expr.length) {
      return 1;
    }
    for (let i = 0, len = this.expr.length; i < len; i++) {
      const r = cmp(this.expr[i], other.expr[i]);
      if (r !== 0) {
        return r;
      }
    }
    return 0;
  }
  equals(other) {
    if (other.type === this.type) {
      if (this.expr.length !== other.expr.length) {
        return false;
      }
      for (let i = 0, len = this.expr.length; i < len; i++) {
        if (!this.expr[i].equals(other.expr[i])) {
          return false;
        }
      }
      return true;
    }
    return false;
  }
  substituteConstants() {
    const exprArr = eliminateConstantsInArray(this.expr);
    if (exprArr === this.expr) {
      return this;
    }
    return _$ak.create(exprArr, this.c, false);
  }
  evaluate(context) {
    for (let i = 0, len = this.expr.length; i < len; i++) {
      if (!this.expr[i].evaluate(context)) {
        return false;
      }
    }
    return true;
  }
  static d(arr, negated, extraRedundantCheck) {
    const expr = [];
    let hasTrue = false;
    for (const e of arr) {
      if (!e) {
        continue;
      }
      if (e.type === 1) {
        hasTrue = true;
        continue;
      }
      if (e.type === 0) {
        return $Yj.INSTANCE;
      }
      if (e.type === 6) {
        expr.push(...e.expr);
        continue;
      }
      expr.push(e);
    }
    if (expr.length === 0 && hasTrue) {
      return $Zj.INSTANCE;
    }
    if (expr.length === 0) {
      return void 0;
    }
    if (expr.length === 1) {
      return expr[0];
    }
    expr.sort(cmp);
    for (let i = 1; i < expr.length; i++) {
      if (expr[i - 1].equals(expr[i])) {
        expr.splice(i, 1);
        i--;
      }
    }
    if (expr.length === 1) {
      return expr[0];
    }
    while (expr.length > 1) {
      const lastElement = expr[expr.length - 1];
      if (lastElement.type !== 9) {
        break;
      }
      expr.pop();
      const secondToLastElement = expr.pop();
      const isFinished = expr.length === 0;
      const resultElement = $bk.create(lastElement.expr.map((el) => _$ak.create([el, secondToLastElement], null, extraRedundantCheck)), null, isFinished);
      if (resultElement) {
        expr.push(resultElement);
        expr.sort(cmp);
      }
    }
    if (expr.length === 1) {
      return expr[0];
    }
    if (extraRedundantCheck) {
      for (let i = 0; i < expr.length; i++) {
        for (let j = i + 1; j < expr.length; j++) {
          if (expr[i].negate().equals(expr[j])) {
            return $Yj.INSTANCE;
          }
        }
      }
      if (expr.length === 1) {
        return expr[0];
      }
    }
    return new _$ak(expr, negated);
  }
  serialize() {
    return this.expr.map((e) => e.serialize()).join(" && ");
  }
  keys() {
    const result = [];
    for (const expr of this.expr) {
      result.push(...expr.keys());
    }
    return result;
  }
  map(mapFnc) {
    return new _$ak(this.expr.map((expr) => expr.map(mapFnc)), null);
  }
  negate() {
    if (!this.c) {
      const result = [];
      for (const expr of this.expr) {
        result.push(expr.negate());
      }
      this.c = $bk.create(result, this, true);
    }
    return this.c;
  }
};
var $bk = class _$bk {
  static create(_expr, negated, extraRedundantCheck) {
    return _$bk.d(_expr, negated, extraRedundantCheck);
  }
  constructor(expr, c) {
    this.expr = expr;
    this.c = c;
    this.type = 9;
  }
  cmp(other) {
    if (other.type !== this.type) {
      return this.type - other.type;
    }
    if (this.expr.length < other.expr.length) {
      return -1;
    }
    if (this.expr.length > other.expr.length) {
      return 1;
    }
    for (let i = 0, len = this.expr.length; i < len; i++) {
      const r = cmp(this.expr[i], other.expr[i]);
      if (r !== 0) {
        return r;
      }
    }
    return 0;
  }
  equals(other) {
    if (other.type === this.type) {
      if (this.expr.length !== other.expr.length) {
        return false;
      }
      for (let i = 0, len = this.expr.length; i < len; i++) {
        if (!this.expr[i].equals(other.expr[i])) {
          return false;
        }
      }
      return true;
    }
    return false;
  }
  substituteConstants() {
    const exprArr = eliminateConstantsInArray(this.expr);
    if (exprArr === this.expr) {
      return this;
    }
    return _$bk.create(exprArr, this.c, false);
  }
  evaluate(context) {
    for (let i = 0, len = this.expr.length; i < len; i++) {
      if (this.expr[i].evaluate(context)) {
        return true;
      }
    }
    return false;
  }
  static d(arr, negated, extraRedundantCheck) {
    let expr = [];
    let hasFalse = false;
    if (arr) {
      for (let i = 0, len = arr.length; i < len; i++) {
        const e = arr[i];
        if (!e) {
          continue;
        }
        if (e.type === 0) {
          hasFalse = true;
          continue;
        }
        if (e.type === 1) {
          return $Zj.INSTANCE;
        }
        if (e.type === 9) {
          expr = expr.concat(e.expr);
          continue;
        }
        expr.push(e);
      }
      if (expr.length === 0 && hasFalse) {
        return $Yj.INSTANCE;
      }
      expr.sort(cmp);
    }
    if (expr.length === 0) {
      return void 0;
    }
    if (expr.length === 1) {
      return expr[0];
    }
    for (let i = 1; i < expr.length; i++) {
      if (expr[i - 1].equals(expr[i])) {
        expr.splice(i, 1);
        i--;
      }
    }
    if (expr.length === 1) {
      return expr[0];
    }
    if (extraRedundantCheck) {
      for (let i = 0; i < expr.length; i++) {
        for (let j = i + 1; j < expr.length; j++) {
          if (expr[i].negate().equals(expr[j])) {
            return $Zj.INSTANCE;
          }
        }
      }
      if (expr.length === 1) {
        return expr[0];
      }
    }
    return new _$bk(expr, negated);
  }
  serialize() {
    return this.expr.map((e) => e.serialize()).join(" || ");
  }
  keys() {
    const result = [];
    for (const expr of this.expr) {
      result.push(...expr.keys());
    }
    return result;
  }
  map(mapFnc) {
    return new _$bk(this.expr.map((expr) => expr.map(mapFnc)), null);
  }
  negate() {
    if (!this.c) {
      const result = [];
      for (const expr of this.expr) {
        result.push(expr.negate());
      }
      while (result.length > 1) {
        const LEFT = result.shift();
        const RIGHT = result.shift();
        const all = [];
        for (const left of getTerminals(LEFT)) {
          for (const right of getTerminals(RIGHT)) {
            all.push($ak.create([left, right], null, false));
          }
        }
        result.unshift(_$bk.create(all, null, false));
      }
      this.c = _$bk.create(result, this, true);
    }
    return this.c;
  }
};
var $ck = class _$ck extends $1j {
  static {
    this.d = [];
  }
  static all() {
    return _$ck.d.values();
  }
  constructor(key, defaultValue, metaOrHide) {
    super(key, null);
    this.f = defaultValue;
    if (typeof metaOrHide === "object") {
      _$ck.d.push({ ...metaOrHide, key });
    } else if (metaOrHide !== true) {
      _$ck.d.push({ key, description: metaOrHide, type: defaultValue !== null && defaultValue !== void 0 ? typeof defaultValue : void 0 });
    }
  }
  bindTo(target) {
    return target.createKey(this.key, this.f);
  }
  getValue(target) {
    return target.getContextKeyValue(this.key);
  }
  toNegated() {
    return this.negate();
  }
  isEqualTo(value) {
    return $2j.create(this.key, value);
  }
  notEqualsTo(value) {
    return $5j.create(this.key, value);
  }
};
var $dk = $Xi("contextKeyService");
function cmp1(key1, key2) {
  if (key1 < key2) {
    return -1;
  }
  if (key1 > key2) {
    return 1;
  }
  return 0;
}
function cmp2(key1, value1, key2, value2) {
  if (key1 < key2) {
    return -1;
  }
  if (key1 > key2) {
    return 1;
  }
  if (value1 < value2) {
    return -1;
  }
  if (value1 > value2) {
    return 1;
  }
  return 0;
}
function getTerminals(node) {
  if (node.type === 9) {
    return node.expr;
  }
  return [node];
}

// out-build/vs/platform/log/common/log.js
var $sk = $Xi("logService");
var $tk = $Xi("loggerService");
function $uk(thing) {
  return $Ag(thing);
}
var LogLevel;
(function(LogLevel2) {
  LogLevel2[LogLevel2["Off"] = 0] = "Off";
  LogLevel2[LogLevel2["Trace"] = 1] = "Trace";
  LogLevel2[LogLevel2["Debug"] = 2] = "Debug";
  LogLevel2[LogLevel2["Info"] = 3] = "Info";
  LogLevel2[LogLevel2["Warning"] = 4] = "Warning";
  LogLevel2[LogLevel2["Error"] = 5] = "Error";
})(LogLevel || (LogLevel = {}));
var $vk = LogLevel.Info;
function format(args, verbose = false) {
  let result = "";
  for (let i = 0; i < args.length; i++) {
    let a = args[i];
    if (a instanceof Error) {
      a = $Ij(a, verbose);
    }
    if (typeof a === "object") {
      try {
        a = JSON.stringify(a);
      } catch (e) {
      }
    }
    result += (i > 0 ? " " : "") + a;
  }
  return result;
}
var $xk = class extends $9c {
  constructor() {
    super(...arguments);
    this.b = $vk;
    this.c = this.B(new $Ce());
    this.onDidChangeLogLevel = this.c.event;
  }
  setLevel(level) {
    if (this.b !== level) {
      this.b = level;
      this.c.fire(this.b);
    }
  }
  getLevel() {
    return this.b;
  }
  f(level) {
    return this.b !== LogLevel.Off && this.b <= level;
  }
};
var $yk = class extends $xk {
  constructor(h) {
    super();
    this.h = h;
  }
  f(level) {
    return this.h || super.f(level);
  }
  trace(message, ...args) {
    if (this.f(LogLevel.Trace)) {
      this.g(LogLevel.Trace, format([message, ...args], true));
    }
  }
  debug(message, ...args) {
    if (this.f(LogLevel.Debug)) {
      this.g(LogLevel.Debug, format([message, ...args]));
    }
  }
  info(message, ...args) {
    if (this.f(LogLevel.Info)) {
      this.g(LogLevel.Info, format([message, ...args]));
    }
  }
  warn(message, ...args) {
    if (this.f(LogLevel.Warning)) {
      this.g(LogLevel.Warning, format([message, ...args]));
    }
  }
  error(message, ...args) {
    if (this.f(LogLevel.Error)) {
      if (message instanceof Error) {
        const array = Array.prototype.slice.call(arguments);
        array[0] = message.stack;
        this.g(LogLevel.Error, format(array));
      } else {
        this.g(LogLevel.Error, format([message, ...args]));
      }
    }
  }
  flush() {
  }
};
var $Ck = class extends $xk {
  constructor(g) {
    super();
    this.g = g;
    if (g.length) {
      this.setLevel(g[0].getLevel());
    }
  }
  setLevel(level) {
    for (const logger of this.g) {
      logger.setLevel(level);
    }
    super.setLevel(level);
  }
  trace(message, ...args) {
    for (const logger of this.g) {
      logger.trace(message, ...args);
    }
  }
  debug(message, ...args) {
    for (const logger of this.g) {
      logger.debug(message, ...args);
    }
  }
  info(message, ...args) {
    for (const logger of this.g) {
      logger.info(message, ...args);
    }
  }
  warn(message, ...args) {
    for (const logger of this.g) {
      logger.warn(message, ...args);
    }
  }
  error(message, ...args) {
    for (const logger of this.g) {
      logger.error(message, ...args);
    }
  }
  flush() {
    for (const logger of this.g) {
      logger.flush();
    }
  }
  dispose() {
    for (const logger of this.g) {
      logger.dispose();
    }
    super.dispose();
  }
};
var $Dk = class extends $9c {
  constructor(h, j, loggerResources) {
    super();
    this.h = h;
    this.j = j;
    this.b = new $Mc();
    this.c = this.B(new $Ce());
    this.onDidChangeLoggers = this.c.event;
    this.f = this.B(new $Ce());
    this.onDidChangeLogLevel = this.f.event;
    this.g = this.B(new $Ce());
    this.onDidChangeVisibility = this.g.event;
    if (loggerResources) {
      for (const loggerResource of loggerResources) {
        this.b.set(loggerResource.resource, { logger: void 0, info: loggerResource });
      }
    }
  }
  m(resourceOrId) {
    if ($wg(resourceOrId)) {
      return [...this.b.values()].find((logger) => logger.info.id === resourceOrId);
    }
    return this.b.get(resourceOrId);
  }
  getLogger(resourceOrId) {
    return this.m(resourceOrId)?.logger;
  }
  createLogger(idOrResource, options) {
    const resource = this.n(idOrResource);
    const id2 = $wg(idOrResource) ? idOrResource : options?.id ?? $Lj(resource.toString()).toString(16);
    let logger = this.b.get(resource)?.logger;
    const logLevel = options?.logLevel === "always" ? LogLevel.Trace : options?.logLevel;
    if (!logger) {
      logger = this.s(resource, logLevel ?? this.getLogLevel(resource) ?? this.h, { ...options, id: id2 });
    }
    const loggerEntry = {
      logger,
      info: { resource, id: id2, logLevel, name: options?.name, hidden: options?.hidden, extensionId: options?.extensionId, when: options?.when }
    };
    this.registerLogger(loggerEntry.info);
    this.b.set(resource, loggerEntry);
    return logger;
  }
  n(idOrResource) {
    return $wg(idOrResource) ? $yh(this.j, `${idOrResource}.log`) : idOrResource;
  }
  setLogLevel(arg1, arg2) {
    if (URI.isUri(arg1)) {
      const resource = arg1;
      const logLevel = arg2;
      const logger = this.b.get(resource);
      if (logger && logLevel !== logger.info.logLevel) {
        logger.info.logLevel = logLevel === this.h ? void 0 : logLevel;
        logger.logger?.setLevel(logLevel);
        this.b.set(logger.info.resource, logger);
        this.f.fire([resource, logLevel]);
      }
    } else {
      this.h = arg1;
      for (const [resource, logger] of this.b.entries()) {
        if (this.b.get(resource)?.info.logLevel === void 0) {
          logger.logger?.setLevel(this.h);
        }
      }
      this.f.fire(this.h);
    }
  }
  setVisibility(resourceOrId, visibility) {
    const logger = this.m(resourceOrId);
    if (logger && visibility !== !logger.info.hidden) {
      logger.info.hidden = !visibility;
      this.b.set(logger.info.resource, logger);
      this.g.fire([logger.info.resource, visibility]);
    }
  }
  getLogLevel(resource) {
    let logLevel;
    if (resource) {
      logLevel = this.b.get(resource)?.info.logLevel;
    }
    return logLevel ?? this.h;
  }
  registerLogger(resource) {
    const existing = this.b.get(resource.resource);
    if (existing) {
      if (existing.info.hidden !== resource.hidden) {
        this.setVisibility(resource.resource, !resource.hidden);
      }
    } else {
      this.b.set(resource.resource, { info: resource, logger: void 0 });
      this.c.fire({ added: [resource], removed: [] });
    }
  }
  deregisterLogger(resource) {
    const existing = this.b.get(resource);
    if (existing) {
      if (existing.logger) {
        existing.logger.dispose();
      }
      this.b.delete(resource);
      this.c.fire({ added: [], removed: [existing.info] });
    }
  }
  *getRegisteredLoggers() {
    for (const entry of this.b.values()) {
      yield entry.info;
    }
  }
  getRegisteredLogger(resource) {
    return this.b.get(resource)?.info;
  }
  dispose() {
    this.b.forEach((logger) => logger.logger?.dispose());
    this.b.clear();
    super.dispose();
  }
};
function $Gk(environmentService) {
  if (environmentService.verbose) {
    return LogLevel.Trace;
  }
  if (typeof environmentService.logLevel === "string") {
    const logLevel = $Jk(environmentService.logLevel.toLowerCase());
    if (logLevel !== void 0) {
      return logLevel;
    }
  }
  return $vk;
}
function $Hk(logLevel) {
  switch (logLevel) {
    case LogLevel.Trace:
      return "trace";
    case LogLevel.Debug:
      return "debug";
    case LogLevel.Info:
      return "info";
    case LogLevel.Warning:
      return "warn";
    case LogLevel.Error:
      return "error";
    case LogLevel.Off:
      return "off";
  }
}
function $Jk(logLevel) {
  switch (logLevel) {
    case "trace":
      return LogLevel.Trace;
    case "debug":
      return LogLevel.Debug;
    case "info":
      return LogLevel.Info;
    case "warn":
      return LogLevel.Warning;
    case "error":
      return LogLevel.Error;
    case "critical":
      return LogLevel.Error;
    case "off":
      return LogLevel.Off;
  }
  return void 0;
}
var $Kk = new $ck("logLevel", $Hk(LogLevel.Info));

// out-build/vs/platform/log/common/logIpc.js
var $Ps = class {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
  listen(context, event) {
    const uriTransformer = this.b(context);
    switch (event) {
      case "onDidChangeLoggers":
        return Event.map(this.a.onDidChangeLoggers, (e) => ({
          added: [...e.added].map((logger) => this.c(logger, uriTransformer)),
          removed: [...e.removed].map((logger) => this.c(logger, uriTransformer))
        }));
      case "onDidChangeVisibility":
        return Event.map(this.a.onDidChangeVisibility, (e) => [uriTransformer.transformOutgoingURI(e[0]), e[1]]);
      case "onDidChangeLogLevel":
        return Event.map(this.a.onDidChangeLogLevel, (e) => $uk(e) ? e : [uriTransformer.transformOutgoingURI(e[0]), e[1]]);
    }
    throw new Error(`Event not found: ${event}`);
  }
  async call(context, command, arg) {
    const uriTransformer = this.b(context);
    switch (command) {
      case "setLogLevel":
        return $uk(arg[0]) ? this.a.setLogLevel(arg[0]) : this.a.setLogLevel(URI.revive(uriTransformer.transformIncoming(arg[0][0])), arg[0][1]);
      case "getRegisteredLoggers":
        return Promise.resolve([...this.a.getRegisteredLoggers()].map((logger) => this.c(logger, uriTransformer)));
    }
    throw new Error(`Call not found: ${command}`);
  }
  c(logger, transformer) {
    return {
      ...logger,
      resource: transformer.transformOutgoingURI(logger.resource)
    };
  }
};

// out-build/vs/platform/log/common/logService.js
var $wS = class extends $9c {
  constructor(primaryLogger, otherLoggers = []) {
    super();
    this.a = new $Ck([primaryLogger, ...otherLoggers]);
    this.B(primaryLogger.onDidChangeLogLevel((level) => this.setLevel(level)));
  }
  get onDidChangeLogLevel() {
    return this.a.onDidChangeLogLevel;
  }
  setLevel(level) {
    this.a.setLevel(level);
  }
  getLevel() {
    return this.a.getLevel();
  }
  trace(message, ...args) {
    this.a.trace(message, ...args);
  }
  debug(message, ...args) {
    this.a.debug(message, ...args);
  }
  info(message, ...args) {
    this.a.info(message, ...args);
  }
  warn(message, ...args) {
    this.a.warn(message, ...args);
  }
  error(message, ...args) {
    this.a.error(message, ...args);
  }
  flush() {
    this.a.flush();
  }
};

// out-build/vs/base/common/uuid.js
var $hh = function() {
  if (typeof crypto === "object" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID.bind(crypto);
  }
  let getRandomValues;
  if (typeof crypto === "object" && typeof crypto.getRandomValues === "function") {
    getRandomValues = crypto.getRandomValues.bind(crypto);
  } else {
    getRandomValues = function(bucket) {
      for (let i = 0; i < bucket.length; i++) {
        bucket[i] = Math.floor(Math.random() * 256);
      }
      return bucket;
    };
  }
  const _data = new Uint8Array(16);
  const _hex = [];
  for (let i = 0; i < 256; i++) {
    _hex.push(i.toString(16).padStart(2, "0"));
  }
  return function generateUuid() {
    getRandomValues(_data);
    _data[6] = _data[6] & 15 | 64;
    _data[8] = _data[8] & 63 | 128;
    let i = 0;
    let result = "";
    result += _hex[_data[i++]];
    result += _hex[_data[i++]];
    result += _hex[_data[i++]];
    result += _hex[_data[i++]];
    result += "-";
    result += _hex[_data[i++]];
    result += _hex[_data[i++]];
    result += "-";
    result += _hex[_data[i++]];
    result += _hex[_data[i++]];
    result += "-";
    result += _hex[_data[i++]];
    result += _hex[_data[i++]];
    result += "-";
    result += _hex[_data[i++]];
    result += _hex[_data[i++]];
    result += _hex[_data[i++]];
    result += _hex[_data[i++]];
    result += _hex[_data[i++]];
    result += _hex[_data[i++]];
    return result;
  };
}();

// out-build/vs/base/common/ternarySearchTree.js
var $Zi = class {
  constructor() {
    this.b = "";
    this.c = 0;
  }
  reset(key) {
    this.b = key;
    this.c = 0;
    return this;
  }
  next() {
    this.c += 1;
    return this;
  }
  hasNext() {
    return this.c < this.b.length - 1;
  }
  cmp(a) {
    const aCode = a.charCodeAt(0);
    const thisCode = this.b.charCodeAt(this.c);
    return aCode - thisCode;
  }
  value() {
    return this.b[this.c];
  }
};
var $1i = class {
  constructor(e = true) {
    this.e = e;
  }
  reset(key) {
    this.b = key;
    this.c = 0;
    this.d = 0;
    return this.next();
  }
  hasNext() {
    return this.d < this.b.length;
  }
  next() {
    this.c = this.d;
    let justSeps = true;
    for (; this.d < this.b.length; this.d++) {
      const ch = this.b.charCodeAt(this.d);
      if (ch === 46) {
        if (justSeps) {
          this.c++;
        } else {
          break;
        }
      } else {
        justSeps = false;
      }
    }
    return this;
  }
  cmp(a) {
    return this.e ? $Rf(a, this.b, 0, a.length, this.c, this.d) : $Tf(a, this.b, 0, a.length, this.c, this.d);
  }
  value() {
    return this.b.substring(this.c, this.d);
  }
};
var $2i = class {
  constructor(f = true, g = true) {
    this.f = f;
    this.g = g;
  }
  reset(key) {
    this.d = 0;
    this.e = 0;
    this.b = key;
    this.c = key.length;
    for (let pos = key.length - 1; pos >= 0; pos--, this.c--) {
      const ch = this.b.charCodeAt(pos);
      if (!(ch === 47 || this.f && ch === 92)) {
        break;
      }
    }
    return this.next();
  }
  hasNext() {
    return this.e < this.c;
  }
  next() {
    this.d = this.e;
    let justSeps = true;
    for (; this.e < this.c; this.e++) {
      const ch = this.b.charCodeAt(this.e);
      if (ch === 47 || this.f && ch === 92) {
        if (justSeps) {
          this.d++;
        } else {
          break;
        }
      } else {
        justSeps = false;
      }
    }
    return this;
  }
  cmp(a) {
    return this.g ? $Rf(a, this.b, 0, a.length, this.d, this.e) : $Tf(a, this.b, 0, a.length, this.d, this.e);
  }
  value() {
    return this.b.substring(this.d, this.e);
  }
};
var UriIteratorState;
(function(UriIteratorState2) {
  UriIteratorState2[UriIteratorState2["Scheme"] = 1] = "Scheme";
  UriIteratorState2[UriIteratorState2["Authority"] = 2] = "Authority";
  UriIteratorState2[UriIteratorState2["Path"] = 3] = "Path";
  UriIteratorState2[UriIteratorState2["Query"] = 4] = "Query";
  UriIteratorState2[UriIteratorState2["Fragment"] = 5] = "Fragment";
})(UriIteratorState || (UriIteratorState = {}));
var $3i = class {
  constructor(f, g) {
    this.f = f;
    this.g = g;
    this.d = [];
    this.e = 0;
  }
  reset(key) {
    this.c = key;
    this.d = [];
    if (this.c.scheme) {
      this.d.push(
        1
        /* UriIteratorState.Scheme */
      );
    }
    if (this.c.authority) {
      this.d.push(
        2
        /* UriIteratorState.Authority */
      );
    }
    if (this.c.path) {
      this.b = new $2i(false, !this.f(key));
      this.b.reset(key.path);
      if (this.b.value()) {
        this.d.push(
          3
          /* UriIteratorState.Path */
        );
      }
    }
    if (!this.g(key)) {
      if (this.c.query) {
        this.d.push(
          4
          /* UriIteratorState.Query */
        );
      }
      if (this.c.fragment) {
        this.d.push(
          5
          /* UriIteratorState.Fragment */
        );
      }
    }
    this.e = 0;
    return this;
  }
  next() {
    if (this.d[this.e] === 3 && this.b.hasNext()) {
      this.b.next();
    } else {
      this.e += 1;
    }
    return this;
  }
  hasNext() {
    return this.d[this.e] === 3 && this.b.hasNext() || this.e < this.d.length - 1;
  }
  cmp(a) {
    if (this.d[this.e] === 1) {
      return $Sf(a, this.c.scheme);
    } else if (this.d[this.e] === 2) {
      return $Sf(a, this.c.authority);
    } else if (this.d[this.e] === 3) {
      return this.b.cmp(a);
    } else if (this.d[this.e] === 4) {
      return $Qf(a, this.c.query);
    } else if (this.d[this.e] === 5) {
      return $Qf(a, this.c.fragment);
    }
    throw new Error();
  }
  value() {
    if (this.d[this.e] === 1) {
      return this.c.scheme;
    } else if (this.d[this.e] === 2) {
      return this.c.authority;
    } else if (this.d[this.e] === 3) {
      return this.b.value();
    } else if (this.d[this.e] === 4) {
      return this.c.query;
    } else if (this.d[this.e] === 5) {
      return this.c.fragment;
    }
    throw new Error();
  }
};
var TernarySearchTreeNode = class {
  constructor() {
    this.height = 1;
  }
  isEmpty() {
    return !this.left && !this.mid && !this.right && !this.value;
  }
  rotateLeft() {
    const tmp = this.right;
    this.right = tmp.left;
    tmp.left = this;
    this.updateHeight();
    tmp.updateHeight();
    return tmp;
  }
  rotateRight() {
    const tmp = this.left;
    this.left = tmp.right;
    tmp.right = this;
    this.updateHeight();
    tmp.updateHeight();
    return tmp;
  }
  updateHeight() {
    this.height = 1 + Math.max(this.heightLeft, this.heightRight);
  }
  balanceFactor() {
    return this.heightRight - this.heightLeft;
  }
  get heightLeft() {
    return this.left?.height ?? 0;
  }
  get heightRight() {
    return this.right?.height ?? 0;
  }
};
var Dir;
(function(Dir2) {
  Dir2[Dir2["Left"] = -1] = "Left";
  Dir2[Dir2["Mid"] = 0] = "Mid";
  Dir2[Dir2["Right"] = 1] = "Right";
})(Dir || (Dir = {}));
var $4i = class _$4i {
  static forUris(ignorePathCasing = () => false, ignoreQueryAndFragment = () => false) {
    return new _$4i(new $3i(ignorePathCasing, ignoreQueryAndFragment));
  }
  static forPaths(ignorePathCasing = false) {
    return new _$4i(new $2i(void 0, !ignorePathCasing));
  }
  static forStrings() {
    return new _$4i(new $Zi());
  }
  static forConfigKeys() {
    return new _$4i(new $1i());
  }
  constructor(segments) {
    this.b = segments;
  }
  clear() {
    this.c = void 0;
  }
  fill(values, keys) {
    if (keys) {
      const arr = keys.slice(0);
      $8b(arr);
      for (const k of arr) {
        this.set(k, values);
      }
    } else {
      const arr = values.slice(0);
      $8b(arr);
      for (const entry of arr) {
        this.set(entry[0], entry[1]);
      }
    }
  }
  set(key, element) {
    const iter = this.b.reset(key);
    let node;
    if (!this.c) {
      this.c = new TernarySearchTreeNode();
      this.c.segment = iter.value();
    }
    const stack = [];
    node = this.c;
    while (true) {
      const val = iter.cmp(node.segment);
      if (val > 0) {
        if (!node.left) {
          node.left = new TernarySearchTreeNode();
          node.left.segment = iter.value();
        }
        stack.push([-1, node]);
        node = node.left;
      } else if (val < 0) {
        if (!node.right) {
          node.right = new TernarySearchTreeNode();
          node.right.segment = iter.value();
        }
        stack.push([1, node]);
        node = node.right;
      } else if (iter.hasNext()) {
        iter.next();
        if (!node.mid) {
          node.mid = new TernarySearchTreeNode();
          node.mid.segment = iter.value();
        }
        stack.push([0, node]);
        node = node.mid;
      } else {
        break;
      }
    }
    const oldElement = node.value;
    node.value = element;
    node.key = key;
    for (let i = stack.length - 1; i >= 0; i--) {
      const node2 = stack[i][1];
      node2.updateHeight();
      const bf = node2.balanceFactor();
      if (bf < -1 || bf > 1) {
        const d1 = stack[i][0];
        const d2 = stack[i + 1][0];
        if (d1 === 1 && d2 === 1) {
          stack[i][1] = node2.rotateLeft();
        } else if (d1 === -1 && d2 === -1) {
          stack[i][1] = node2.rotateRight();
        } else if (d1 === 1 && d2 === -1) {
          node2.right = stack[i + 1][1] = stack[i + 1][1].rotateRight();
          stack[i][1] = node2.rotateLeft();
        } else if (d1 === -1 && d2 === 1) {
          node2.left = stack[i + 1][1] = stack[i + 1][1].rotateLeft();
          stack[i][1] = node2.rotateRight();
        } else {
          throw new Error();
        }
        if (i > 0) {
          switch (stack[i - 1][0]) {
            case -1:
              stack[i - 1][1].left = stack[i][1];
              break;
            case 1:
              stack[i - 1][1].right = stack[i][1];
              break;
            case 0:
              stack[i - 1][1].mid = stack[i][1];
              break;
          }
        } else {
          this.c = stack[0][1];
        }
      }
    }
    return oldElement;
  }
  get(key) {
    return this.d(key)?.value;
  }
  d(key) {
    const iter = this.b.reset(key);
    let node = this.c;
    while (node) {
      const val = iter.cmp(node.segment);
      if (val > 0) {
        node = node.left;
      } else if (val < 0) {
        node = node.right;
      } else if (iter.hasNext()) {
        iter.next();
        node = node.mid;
      } else {
        break;
      }
    }
    return node;
  }
  has(key) {
    const node = this.d(key);
    return !(node?.value === void 0 && node?.mid === void 0);
  }
  delete(key) {
    return this.e(key, false);
  }
  deleteSuperstr(key) {
    return this.e(key, true);
  }
  e(key, superStr) {
    const iter = this.b.reset(key);
    const stack = [];
    let node = this.c;
    while (node) {
      const val = iter.cmp(node.segment);
      if (val > 0) {
        stack.push([-1, node]);
        node = node.left;
      } else if (val < 0) {
        stack.push([1, node]);
        node = node.right;
      } else if (iter.hasNext()) {
        iter.next();
        stack.push([0, node]);
        node = node.mid;
      } else {
        break;
      }
    }
    if (!node) {
      return;
    }
    if (superStr) {
      node.left = void 0;
      node.mid = void 0;
      node.right = void 0;
      node.height = 1;
    } else {
      node.key = void 0;
      node.value = void 0;
    }
    if (!node.mid && !node.value) {
      if (node.left && node.right) {
        const min = this.f(node.right);
        if (min.key) {
          const { key: key2, value, segment } = min;
          this.e(min.key, false);
          node.key = key2;
          node.value = value;
          node.segment = segment;
        }
      } else {
        const newChild = node.left ?? node.right;
        if (stack.length > 0) {
          const [dir, parent] = stack[stack.length - 1];
          switch (dir) {
            case -1:
              parent.left = newChild;
              break;
            case 0:
              parent.mid = newChild;
              break;
            case 1:
              parent.right = newChild;
              break;
          }
        } else {
          this.c = newChild;
        }
      }
    }
    for (let i = stack.length - 1; i >= 0; i--) {
      const node2 = stack[i][1];
      node2.updateHeight();
      const bf = node2.balanceFactor();
      if (bf > 1) {
        if (node2.right.balanceFactor() >= 0) {
          stack[i][1] = node2.rotateLeft();
        } else {
          node2.right = node2.right.rotateRight();
          stack[i][1] = node2.rotateLeft();
        }
      } else if (bf < -1) {
        if (node2.left.balanceFactor() <= 0) {
          stack[i][1] = node2.rotateRight();
        } else {
          node2.left = node2.left.rotateLeft();
          stack[i][1] = node2.rotateRight();
        }
      }
      if (i > 0) {
        switch (stack[i - 1][0]) {
          case -1:
            stack[i - 1][1].left = stack[i][1];
            break;
          case 1:
            stack[i - 1][1].right = stack[i][1];
            break;
          case 0:
            stack[i - 1][1].mid = stack[i][1];
            break;
        }
      } else {
        this.c = stack[0][1];
      }
    }
  }
  f(node) {
    while (node.left) {
      node = node.left;
    }
    return node;
  }
  findSubstr(key) {
    const iter = this.b.reset(key);
    let node = this.c;
    let candidate = void 0;
    while (node) {
      const val = iter.cmp(node.segment);
      if (val > 0) {
        node = node.left;
      } else if (val < 0) {
        node = node.right;
      } else if (iter.hasNext()) {
        iter.next();
        candidate = node.value || candidate;
        node = node.mid;
      } else {
        break;
      }
    }
    return node && node.value || candidate;
  }
  findSuperstr(key) {
    return this.g(key, false);
  }
  g(key, allowValue) {
    const iter = this.b.reset(key);
    let node = this.c;
    while (node) {
      const val = iter.cmp(node.segment);
      if (val > 0) {
        node = node.left;
      } else if (val < 0) {
        node = node.right;
      } else if (iter.hasNext()) {
        iter.next();
        node = node.mid;
      } else {
        if (!node.mid) {
          if (allowValue) {
            return node.value;
          } else {
            return void 0;
          }
        } else {
          return this.h(node.mid);
        }
      }
    }
    return void 0;
  }
  hasElementOrSubtree(key) {
    return this.g(key, true) !== void 0;
  }
  forEach(callback) {
    for (const [key, value] of this) {
      callback(value, key);
    }
  }
  *[Symbol.iterator]() {
    yield* this.h(this.c);
  }
  h(node) {
    const result = [];
    this.j(node, result);
    return result[Symbol.iterator]();
  }
  j(node, bucket) {
    if (!node) {
      return;
    }
    if (node.left) {
      this.j(node.left, bucket);
    }
    if (node.value) {
      bucket.push([node.key, node.value]);
    }
    if (node.mid) {
      this.j(node.mid, bucket);
    }
    if (node.right) {
      this.j(node.right, bucket);
    }
  }
  // for debug/testing
  _isBalanced() {
    const nodeIsBalanced = (node) => {
      if (!node) {
        return true;
      }
      const bf = node.balanceFactor();
      if (bf < -1 || bf > 1) {
        return false;
      }
      return nodeIsBalanced(node.left) && nodeIsBalanced(node.right);
    };
    return nodeIsBalanced(this.c);
  }
};

// out-build/vs/platform/files/common/files.js
var $sl = $Xi("fileService");
var FileType;
(function(FileType2) {
  FileType2[FileType2["Unknown"] = 0] = "Unknown";
  FileType2[FileType2["File"] = 1] = "File";
  FileType2[FileType2["Directory"] = 2] = "Directory";
  FileType2[FileType2["SymbolicLink"] = 64] = "SymbolicLink";
})(FileType || (FileType = {}));
var FilePermission;
(function(FilePermission2) {
  FilePermission2[FilePermission2["Readonly"] = 1] = "Readonly";
  FilePermission2[FilePermission2["Locked"] = 2] = "Locked";
})(FilePermission || (FilePermission = {}));
var FileChangeFilter;
(function(FileChangeFilter2) {
  FileChangeFilter2[FileChangeFilter2["UPDATED"] = 2] = "UPDATED";
  FileChangeFilter2[FileChangeFilter2["ADDED"] = 4] = "ADDED";
  FileChangeFilter2[FileChangeFilter2["DELETED"] = 8] = "DELETED";
})(FileChangeFilter || (FileChangeFilter = {}));
var FileSystemProviderCapabilities;
(function(FileSystemProviderCapabilities2) {
  FileSystemProviderCapabilities2[FileSystemProviderCapabilities2["None"] = 0] = "None";
  FileSystemProviderCapabilities2[FileSystemProviderCapabilities2["FileReadWrite"] = 2] = "FileReadWrite";
  FileSystemProviderCapabilities2[FileSystemProviderCapabilities2["FileOpenReadWriteClose"] = 4] = "FileOpenReadWriteClose";
  FileSystemProviderCapabilities2[FileSystemProviderCapabilities2["FileReadStream"] = 16] = "FileReadStream";
  FileSystemProviderCapabilities2[FileSystemProviderCapabilities2["FileFolderCopy"] = 8] = "FileFolderCopy";
  FileSystemProviderCapabilities2[FileSystemProviderCapabilities2["PathCaseSensitive"] = 1024] = "PathCaseSensitive";
  FileSystemProviderCapabilities2[FileSystemProviderCapabilities2["Readonly"] = 2048] = "Readonly";
  FileSystemProviderCapabilities2[FileSystemProviderCapabilities2["Trash"] = 4096] = "Trash";
  FileSystemProviderCapabilities2[FileSystemProviderCapabilities2["FileWriteUnlock"] = 8192] = "FileWriteUnlock";
  FileSystemProviderCapabilities2[FileSystemProviderCapabilities2["FileAtomicRead"] = 16384] = "FileAtomicRead";
  FileSystemProviderCapabilities2[FileSystemProviderCapabilities2["FileAtomicWrite"] = 32768] = "FileAtomicWrite";
  FileSystemProviderCapabilities2[FileSystemProviderCapabilities2["FileAtomicDelete"] = 65536] = "FileAtomicDelete";
  FileSystemProviderCapabilities2[FileSystemProviderCapabilities2["FileClone"] = 131072] = "FileClone";
})(FileSystemProviderCapabilities || (FileSystemProviderCapabilities = {}));
var FileSystemProviderErrorCode;
(function(FileSystemProviderErrorCode2) {
  FileSystemProviderErrorCode2["FileExists"] = "EntryExists";
  FileSystemProviderErrorCode2["FileNotFound"] = "EntryNotFound";
  FileSystemProviderErrorCode2["FileNotADirectory"] = "EntryNotADirectory";
  FileSystemProviderErrorCode2["FileIsADirectory"] = "EntryIsADirectory";
  FileSystemProviderErrorCode2["FileExceedsStorageQuota"] = "EntryExceedsStorageQuota";
  FileSystemProviderErrorCode2["FileTooLarge"] = "EntryTooLarge";
  FileSystemProviderErrorCode2["FileWriteLocked"] = "EntryWriteLocked";
  FileSystemProviderErrorCode2["NoPermissions"] = "NoPermissions";
  FileSystemProviderErrorCode2["Unavailable"] = "Unavailable";
  FileSystemProviderErrorCode2["Unknown"] = "Unknown";
})(FileSystemProviderErrorCode || (FileSystemProviderErrorCode = {}));
var FileOperation;
(function(FileOperation2) {
  FileOperation2[FileOperation2["CREATE"] = 0] = "CREATE";
  FileOperation2[FileOperation2["DELETE"] = 1] = "DELETE";
  FileOperation2[FileOperation2["MOVE"] = 2] = "MOVE";
  FileOperation2[FileOperation2["COPY"] = 3] = "COPY";
  FileOperation2[FileOperation2["WRITE"] = 4] = "WRITE";
})(FileOperation || (FileOperation = {}));
var FileChangeType;
(function(FileChangeType2) {
  FileChangeType2[FileChangeType2["UPDATED"] = 0] = "UPDATED";
  FileChangeType2[FileChangeType2["ADDED"] = 1] = "ADDED";
  FileChangeType2[FileChangeType2["DELETED"] = 2] = "DELETED";
})(FileChangeType || (FileChangeType = {}));
var $Ll = class _$Ll {
  static {
    this.a = null;
  }
  constructor(changes, c) {
    this.c = c;
    this.b = void 0;
    this.d = new $7(() => {
      const added = $4i.forUris(() => this.c);
      added.fill(this.rawAdded.map((resource) => [resource, true]));
      return added;
    });
    this.f = new $7(() => {
      const updated = $4i.forUris(() => this.c);
      updated.fill(this.rawUpdated.map((resource) => [resource, true]));
      return updated;
    });
    this.g = new $7(() => {
      const deleted = $4i.forUris(() => this.c);
      deleted.fill(this.rawDeleted.map((resource) => [resource, true]));
      return deleted;
    });
    this.rawAdded = [];
    this.rawUpdated = [];
    this.rawDeleted = [];
    for (const change of changes) {
      switch (change.type) {
        case 1:
          this.rawAdded.push(change.resource);
          break;
        case 0:
          this.rawUpdated.push(change.resource);
          break;
        case 2:
          this.rawDeleted.push(change.resource);
          break;
      }
      if (this.b !== _$Ll.a) {
        if (typeof change.cId === "number") {
          if (this.b === void 0) {
            this.b = change.cId;
          } else if (this.b !== change.cId) {
            this.b = _$Ll.a;
          }
        } else {
          if (this.b !== void 0) {
            this.b = _$Ll.a;
          }
        }
      }
    }
  }
  /**
   * Find out if the file change events match the provided resource.
   *
   * Note: when passing `FileChangeType.DELETED`, we consider a match
   * also when the parent of the resource got deleted.
   */
  contains(resource, ...types) {
    return this.h(resource, { includeChildren: false }, ...types);
  }
  /**
   * Find out if the file change events either match the provided
   * resource, or contain a child of this resource.
   */
  affects(resource, ...types) {
    return this.h(resource, { includeChildren: true }, ...types);
  }
  h(resource, options, ...types) {
    if (!resource) {
      return false;
    }
    const hasTypesFilter = types.length > 0;
    if (!hasTypesFilter || types.includes(
      1
      /* FileChangeType.ADDED */
    )) {
      if (this.d.value.get(resource)) {
        return true;
      }
      if (options.includeChildren && this.d.value.findSuperstr(resource)) {
        return true;
      }
    }
    if (!hasTypesFilter || types.includes(
      0
      /* FileChangeType.UPDATED */
    )) {
      if (this.f.value.get(resource)) {
        return true;
      }
      if (options.includeChildren && this.f.value.findSuperstr(resource)) {
        return true;
      }
    }
    if (!hasTypesFilter || types.includes(
      2
      /* FileChangeType.DELETED */
    )) {
      if (this.g.value.findSubstr(resource)) {
        return true;
      }
      if (options.includeChildren && this.g.value.findSuperstr(resource)) {
        return true;
      }
    }
    return false;
  }
  /**
   * Returns if this event contains added files.
   */
  gotAdded() {
    return this.rawAdded.length > 0;
  }
  /**
   * Returns if this event contains deleted files.
   */
  gotDeleted() {
    return this.rawDeleted.length > 0;
  }
  /**
   * Returns if this event contains updated files.
   */
  gotUpdated() {
    return this.rawUpdated.length > 0;
  }
  /**
   * Returns if this event contains changes that correlate to the
   * provided `correlationId`.
   *
   * File change event correlation is an advanced watch feature that
   * allows to  identify from which watch request the events originate
   * from. This correlation allows to route events specifically
   * only to the requestor and not emit them to all listeners.
   */
  correlates(correlationId) {
    return this.b === correlationId;
  }
  /**
   * Figure out if the event contains changes that correlate to one
   * correlation identifier.
   *
   * File change event correlation is an advanced watch feature that
   * allows to  identify from which watch request the events originate
   * from. This correlation allows to route events specifically
   * only to the requestor and not emit them to all listeners.
   */
  hasCorrelation() {
    return typeof this.b === "number";
  }
};
var FileOperationResult;
(function(FileOperationResult2) {
  FileOperationResult2[FileOperationResult2["FILE_IS_DIRECTORY"] = 0] = "FILE_IS_DIRECTORY";
  FileOperationResult2[FileOperationResult2["FILE_NOT_FOUND"] = 1] = "FILE_NOT_FOUND";
  FileOperationResult2[FileOperationResult2["FILE_NOT_MODIFIED_SINCE"] = 2] = "FILE_NOT_MODIFIED_SINCE";
  FileOperationResult2[FileOperationResult2["FILE_MODIFIED_SINCE"] = 3] = "FILE_MODIFIED_SINCE";
  FileOperationResult2[FileOperationResult2["FILE_MOVE_CONFLICT"] = 4] = "FILE_MOVE_CONFLICT";
  FileOperationResult2[FileOperationResult2["FILE_WRITE_LOCKED"] = 5] = "FILE_WRITE_LOCKED";
  FileOperationResult2[FileOperationResult2["FILE_PERMISSION_DENIED"] = 6] = "FILE_PERMISSION_DENIED";
  FileOperationResult2[FileOperationResult2["FILE_TOO_LARGE"] = 7] = "FILE_TOO_LARGE";
  FileOperationResult2[FileOperationResult2["FILE_INVALID_PATH"] = 8] = "FILE_INVALID_PATH";
  FileOperationResult2[FileOperationResult2["FILE_NOT_DIRECTORY"] = 9] = "FILE_NOT_DIRECTORY";
  FileOperationResult2[FileOperationResult2["FILE_OTHER_ERROR"] = 10] = "FILE_OTHER_ERROR";
})(FileOperationResult || (FileOperationResult = {}));
var FileKind;
(function(FileKind2) {
  FileKind2[FileKind2["FILE"] = 0] = "FILE";
  FileKind2[FileKind2["FOLDER"] = 1] = "FOLDER";
  FileKind2[FileKind2["ROOT_FOLDER"] = 2] = "ROOT_FOLDER";
})(FileKind || (FileKind = {}));
var $1l = class _$1l {
  static {
    this.KB = 1024;
  }
  static {
    this.MB = _$1l.KB * _$1l.KB;
  }
  static {
    this.GB = _$1l.MB * _$1l.KB;
  }
  static {
    this.TB = _$1l.GB * _$1l.KB;
  }
  static formatSize(size) {
    if (!$Ag(size)) {
      size = 0;
    }
    if (size < _$1l.KB) {
      return localize(1875, null, size.toFixed(0));
    }
    if (size < _$1l.MB) {
      return localize(1876, null, (size / _$1l.KB).toFixed(2));
    }
    if (size < _$1l.GB) {
      return localize(1877, null, (size / _$1l.MB).toFixed(2));
    }
    if (size < _$1l.TB) {
      return localize(1878, null, (size / _$1l.GB).toFixed(2));
    }
    return localize(1879, null, (size / _$1l.TB).toFixed(2));
  }
};

// out-build/vs/platform/log/node/spdlogLog.js
var SpdLogLevel;
(function(SpdLogLevel2) {
  SpdLogLevel2[SpdLogLevel2["Trace"] = 0] = "Trace";
  SpdLogLevel2[SpdLogLevel2["Debug"] = 1] = "Debug";
  SpdLogLevel2[SpdLogLevel2["Info"] = 2] = "Info";
  SpdLogLevel2[SpdLogLevel2["Warning"] = 3] = "Warning";
  SpdLogLevel2[SpdLogLevel2["Error"] = 4] = "Error";
  SpdLogLevel2[SpdLogLevel2["Critical"] = 5] = "Critical";
  SpdLogLevel2[SpdLogLevel2["Off"] = 6] = "Off";
})(SpdLogLevel || (SpdLogLevel = {}));
async function createSpdLogLogger(name, logfilePath, filesize, filecount, donotUseFormatters) {
  try {
    const _spdlog = await import("@vscode/spdlog");
    _spdlog.setFlushOn(SpdLogLevel.Trace);
    const logger = await _spdlog.createAsyncRotatingLogger(name, logfilePath, filesize, filecount);
    if (donotUseFormatters) {
      logger.clearFormatters();
    } else {
      logger.setPattern("%Y-%m-%d %H:%M:%S.%e [%l] %v");
    }
    return logger;
  } catch (e) {
    console.error(e);
  }
  return null;
}
function log2(logger, level, message) {
  switch (level) {
    case LogLevel.Trace:
      logger.trace(message);
      break;
    case LogLevel.Debug:
      logger.debug(message);
      break;
    case LogLevel.Info:
      logger.info(message);
      break;
    case LogLevel.Warning:
      logger.warn(message);
      break;
    case LogLevel.Error:
      logger.error(message);
      break;
    case LogLevel.Off:
      break;
    default:
      throw new Error(`Invalid log level ${level}`);
  }
}
function setLogLevel(logger, level) {
  switch (level) {
    case LogLevel.Trace:
      logger.setLevel(SpdLogLevel.Trace);
      break;
    case LogLevel.Debug:
      logger.setLevel(SpdLogLevel.Debug);
      break;
    case LogLevel.Info:
      logger.setLevel(SpdLogLevel.Info);
      break;
    case LogLevel.Warning:
      logger.setLevel(SpdLogLevel.Warning);
      break;
    case LogLevel.Error:
      logger.setLevel(SpdLogLevel.Error);
      break;
    case LogLevel.Off:
      logger.setLevel(SpdLogLevel.Off);
      break;
    default:
      throw new Error(`Invalid log level ${level}`);
  }
}
var $lS = class extends $yk {
  constructor(name, filepath, rotating, donotUseFormatters, level) {
    super();
    this.m = [];
    this.setLevel(level);
    this.n = this.s(name, filepath, rotating, donotUseFormatters);
    this.B(this.onDidChangeLogLevel((level2) => {
      if (this.r) {
        setLogLevel(this.r, level2);
      }
    }));
  }
  async s(name, filepath, rotating, donotUseFormatters) {
    const filecount = rotating ? 6 : 1;
    const filesize = 30 / filecount * $1l.MB;
    const logger = await createSpdLogLogger(name, filepath, filesize, filecount, donotUseFormatters);
    if (logger) {
      this.r = logger;
      setLogLevel(this.r, this.getLevel());
      for (const { level, message } of this.m) {
        log2(this.r, level, message);
      }
      this.m = [];
    }
  }
  g(level, message) {
    if (this.r) {
      log2(this.r, level, message);
    } else if (this.getLevel() <= level) {
      this.m.push({ level, message });
    }
  }
  flush() {
    if (this.r) {
      this.r.flush();
    } else {
      this.n.then(() => this.flush());
    }
  }
  dispose() {
    if (this.r) {
      this.u();
    } else {
      this.n.then(() => this.u());
    }
    super.dispose();
  }
  u() {
    if (this.r) {
      this.r.drop();
      this.r = void 0;
    }
  }
};

// out-build/vs/platform/log/node/loggerService.js
var $mS = class extends $Dk {
  s(resource, logLevel, options) {
    return new $lS($hh(), resource.fsPath, !options?.donotRotate, !!options?.donotUseFormatters, logLevel);
  }
};

// out-build/vs/platform/product/common/product.js
var product;
var vscodeGlobal2 = globalThis.vscode;
if (typeof vscodeGlobal2 !== "undefined" && typeof vscodeGlobal2.context !== "undefined") {
  const configuration = vscodeGlobal2.context.configuration();
  if (configuration) {
    product = configuration.product;
  } else {
    throw new Error("Sandbox: unable to resolve product configuration from preload script.");
  }
} else if (globalThis._VSCODE_PRODUCT_JSON && globalThis._VSCODE_PACKAGE_JSON) {
  product = globalThis._VSCODE_PRODUCT_JSON;
  if (env["VSCODE_DEV"]) {
    Object.assign(product, {
      nameShort: `${product.nameShort} Dev`,
      nameLong: `${product.nameLong} Dev`,
      dataFolderName: `${product.dataFolderName}-dev`,
      serverDataFolderName: product.serverDataFolderName ? `${product.serverDataFolderName}-dev` : void 0
    });
  }
  if (!product.version) {
    const pkg2 = globalThis._VSCODE_PACKAGE_JSON;
    Object.assign(product, {
      version: pkg2.version
    });
  }
} else {
  product = {
    /*BUILD->INSERT_PRODUCT_CONFIGURATION*/
  };
  if (Object.keys(product).length === 0) {
    Object.assign(product, {
      version: "1.94.0-dev",
      nameShort: "Code - OSS Dev",
      nameLong: "Code - OSS Dev",
      applicationName: "code-oss",
      dataFolderName: ".vscode-oss",
      urlProtocol: "code-oss",
      reportIssueUrl: "https://github.com/microsoft/vscode/issues/new",
      licenseName: "MIT",
      licenseUrl: "https://github.com/microsoft/vscode/blob/main/LICENSE.txt",
      serverLicenseUrl: "https://github.com/microsoft/vscode/blob/main/LICENSE.txt"
    });
  }
}
var product_default = product;

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

// out-build/vs/platform/terminal/common/terminal.js
var $Js = new $ck("terminalTabFocusMode", false, true);
var TerminalSettingPrefix;
(function(TerminalSettingPrefix2) {
  TerminalSettingPrefix2["AutomationProfile"] = "terminal.integrated.automationProfile.";
  TerminalSettingPrefix2["DefaultProfile"] = "terminal.integrated.defaultProfile.";
  TerminalSettingPrefix2["Profiles"] = "terminal.integrated.profiles.";
})(TerminalSettingPrefix || (TerminalSettingPrefix = {}));
var TerminalSettingId;
(function(TerminalSettingId2) {
  TerminalSettingId2["SendKeybindingsToShell"] = "terminal.integrated.sendKeybindingsToShell";
  TerminalSettingId2["AutomationProfileLinux"] = "terminal.integrated.automationProfile.linux";
  TerminalSettingId2["AutomationProfileMacOs"] = "terminal.integrated.automationProfile.osx";
  TerminalSettingId2["AutomationProfileWindows"] = "terminal.integrated.automationProfile.windows";
  TerminalSettingId2["ProfilesWindows"] = "terminal.integrated.profiles.windows";
  TerminalSettingId2["ProfilesMacOs"] = "terminal.integrated.profiles.osx";
  TerminalSettingId2["ProfilesLinux"] = "terminal.integrated.profiles.linux";
  TerminalSettingId2["DefaultProfileLinux"] = "terminal.integrated.defaultProfile.linux";
  TerminalSettingId2["DefaultProfileMacOs"] = "terminal.integrated.defaultProfile.osx";
  TerminalSettingId2["DefaultProfileWindows"] = "terminal.integrated.defaultProfile.windows";
  TerminalSettingId2["UseWslProfiles"] = "terminal.integrated.useWslProfiles";
  TerminalSettingId2["TabsDefaultColor"] = "terminal.integrated.tabs.defaultColor";
  TerminalSettingId2["TabsDefaultIcon"] = "terminal.integrated.tabs.defaultIcon";
  TerminalSettingId2["TabsEnabled"] = "terminal.integrated.tabs.enabled";
  TerminalSettingId2["TabsEnableAnimation"] = "terminal.integrated.tabs.enableAnimation";
  TerminalSettingId2["TabsHideCondition"] = "terminal.integrated.tabs.hideCondition";
  TerminalSettingId2["TabsShowActiveTerminal"] = "terminal.integrated.tabs.showActiveTerminal";
  TerminalSettingId2["TabsShowActions"] = "terminal.integrated.tabs.showActions";
  TerminalSettingId2["TabsLocation"] = "terminal.integrated.tabs.location";
  TerminalSettingId2["TabsFocusMode"] = "terminal.integrated.tabs.focusMode";
  TerminalSettingId2["MacOptionIsMeta"] = "terminal.integrated.macOptionIsMeta";
  TerminalSettingId2["MacOptionClickForcesSelection"] = "terminal.integrated.macOptionClickForcesSelection";
  TerminalSettingId2["AltClickMovesCursor"] = "terminal.integrated.altClickMovesCursor";
  TerminalSettingId2["CopyOnSelection"] = "terminal.integrated.copyOnSelection";
  TerminalSettingId2["EnableMultiLinePasteWarning"] = "terminal.integrated.enableMultiLinePasteWarning";
  TerminalSettingId2["DrawBoldTextInBrightColors"] = "terminal.integrated.drawBoldTextInBrightColors";
  TerminalSettingId2["FontFamily"] = "terminal.integrated.fontFamily";
  TerminalSettingId2["FontSize"] = "terminal.integrated.fontSize";
  TerminalSettingId2["LetterSpacing"] = "terminal.integrated.letterSpacing";
  TerminalSettingId2["LineHeight"] = "terminal.integrated.lineHeight";
  TerminalSettingId2["MinimumContrastRatio"] = "terminal.integrated.minimumContrastRatio";
  TerminalSettingId2["TabStopWidth"] = "terminal.integrated.tabStopWidth";
  TerminalSettingId2["FastScrollSensitivity"] = "terminal.integrated.fastScrollSensitivity";
  TerminalSettingId2["MouseWheelScrollSensitivity"] = "terminal.integrated.mouseWheelScrollSensitivity";
  TerminalSettingId2["BellDuration"] = "terminal.integrated.bellDuration";
  TerminalSettingId2["FontWeight"] = "terminal.integrated.fontWeight";
  TerminalSettingId2["FontWeightBold"] = "terminal.integrated.fontWeightBold";
  TerminalSettingId2["CursorBlinking"] = "terminal.integrated.cursorBlinking";
  TerminalSettingId2["CursorStyle"] = "terminal.integrated.cursorStyle";
  TerminalSettingId2["CursorStyleInactive"] = "terminal.integrated.cursorStyleInactive";
  TerminalSettingId2["CursorWidth"] = "terminal.integrated.cursorWidth";
  TerminalSettingId2["Scrollback"] = "terminal.integrated.scrollback";
  TerminalSettingId2["DetectLocale"] = "terminal.integrated.detectLocale";
  TerminalSettingId2["DefaultLocation"] = "terminal.integrated.defaultLocation";
  TerminalSettingId2["GpuAcceleration"] = "terminal.integrated.gpuAcceleration";
  TerminalSettingId2["TerminalTitleSeparator"] = "terminal.integrated.tabs.separator";
  TerminalSettingId2["TerminalTitle"] = "terminal.integrated.tabs.title";
  TerminalSettingId2["TerminalDescription"] = "terminal.integrated.tabs.description";
  TerminalSettingId2["RightClickBehavior"] = "terminal.integrated.rightClickBehavior";
  TerminalSettingId2["MiddleClickBehavior"] = "terminal.integrated.middleClickBehavior";
  TerminalSettingId2["Cwd"] = "terminal.integrated.cwd";
  TerminalSettingId2["ConfirmOnExit"] = "terminal.integrated.confirmOnExit";
  TerminalSettingId2["ConfirmOnKill"] = "terminal.integrated.confirmOnKill";
  TerminalSettingId2["EnableBell"] = "terminal.integrated.enableBell";
  TerminalSettingId2["EnableVisualBell"] = "terminal.integrated.enableVisualBell";
  TerminalSettingId2["CommandsToSkipShell"] = "terminal.integrated.commandsToSkipShell";
  TerminalSettingId2["AllowChords"] = "terminal.integrated.allowChords";
  TerminalSettingId2["AllowMnemonics"] = "terminal.integrated.allowMnemonics";
  TerminalSettingId2["TabFocusMode"] = "terminal.integrated.tabFocusMode";
  TerminalSettingId2["EnvMacOs"] = "terminal.integrated.env.osx";
  TerminalSettingId2["EnvLinux"] = "terminal.integrated.env.linux";
  TerminalSettingId2["EnvWindows"] = "terminal.integrated.env.windows";
  TerminalSettingId2["EnvironmentChangesIndicator"] = "terminal.integrated.environmentChangesIndicator";
  TerminalSettingId2["EnvironmentChangesRelaunch"] = "terminal.integrated.environmentChangesRelaunch";
  TerminalSettingId2["ExperimentalWindowsUseConptyDll"] = "terminal.integrated.experimental.windowsUseConptyDll";
  TerminalSettingId2["ShowExitAlert"] = "terminal.integrated.showExitAlert";
  TerminalSettingId2["SplitCwd"] = "terminal.integrated.splitCwd";
  TerminalSettingId2["WindowsEnableConpty"] = "terminal.integrated.windowsEnableConpty";
  TerminalSettingId2["WordSeparators"] = "terminal.integrated.wordSeparators";
  TerminalSettingId2["EnableFileLinks"] = "terminal.integrated.enableFileLinks";
  TerminalSettingId2["AllowedLinkSchemes"] = "terminal.integrated.allowedLinkSchemes";
  TerminalSettingId2["UnicodeVersion"] = "terminal.integrated.unicodeVersion";
  TerminalSettingId2["EnablePersistentSessions"] = "terminal.integrated.enablePersistentSessions";
  TerminalSettingId2["PersistentSessionReviveProcess"] = "terminal.integrated.persistentSessionReviveProcess";
  TerminalSettingId2["HideOnStartup"] = "terminal.integrated.hideOnStartup";
  TerminalSettingId2["CustomGlyphs"] = "terminal.integrated.customGlyphs";
  TerminalSettingId2["RescaleOverlappingGlyphs"] = "terminal.integrated.rescaleOverlappingGlyphs";
  TerminalSettingId2["PersistentSessionScrollback"] = "terminal.integrated.persistentSessionScrollback";
  TerminalSettingId2["InheritEnv"] = "terminal.integrated.inheritEnv";
  TerminalSettingId2["ShowLinkHover"] = "terminal.integrated.showLinkHover";
  TerminalSettingId2["IgnoreProcessNames"] = "terminal.integrated.ignoreProcessNames";
  TerminalSettingId2["AutoReplies"] = "terminal.integrated.autoReplies";
  TerminalSettingId2["ShellIntegrationEnabled"] = "terminal.integrated.shellIntegration.enabled";
  TerminalSettingId2["ShellIntegrationShowWelcome"] = "terminal.integrated.shellIntegration.showWelcome";
  TerminalSettingId2["ShellIntegrationDecorationsEnabled"] = "terminal.integrated.shellIntegration.decorationsEnabled";
  TerminalSettingId2["ShellIntegrationCommandHistory"] = "terminal.integrated.shellIntegration.history";
  TerminalSettingId2["EnableImages"] = "terminal.integrated.enableImages";
  TerminalSettingId2["SmoothScrolling"] = "terminal.integrated.smoothScrolling";
  TerminalSettingId2["IgnoreBracketedPasteMode"] = "terminal.integrated.ignoreBracketedPasteMode";
  TerminalSettingId2["FocusAfterRun"] = "terminal.integrated.focusAfterRun";
  TerminalSettingId2["DeveloperPtyHostLatency"] = "terminal.integrated.developer.ptyHost.latency";
  TerminalSettingId2["DeveloperPtyHostStartupDelay"] = "terminal.integrated.developer.ptyHost.startupDelay";
  TerminalSettingId2["DevMode"] = "terminal.integrated.developer.devMode";
})(TerminalSettingId || (TerminalSettingId = {}));
var PosixShellType;
(function(PosixShellType2) {
  PosixShellType2["Bash"] = "bash";
  PosixShellType2["Fish"] = "fish";
  PosixShellType2["Sh"] = "sh";
  PosixShellType2["Csh"] = "csh";
  PosixShellType2["Ksh"] = "ksh";
  PosixShellType2["Zsh"] = "zsh";
})(PosixShellType || (PosixShellType = {}));
var WindowsShellType;
(function(WindowsShellType2) {
  WindowsShellType2["CommandPrompt"] = "cmd";
  WindowsShellType2["Wsl"] = "wsl";
  WindowsShellType2["GitBash"] = "gitbash";
})(WindowsShellType || (WindowsShellType = {}));
var GeneralShellType;
(function(GeneralShellType2) {
  GeneralShellType2["PowerShell"] = "pwsh";
  GeneralShellType2["Python"] = "python";
  GeneralShellType2["Julia"] = "julia";
  GeneralShellType2["NuShell"] = "nu";
})(GeneralShellType || (GeneralShellType = {}));
var TitleEventSource;
(function(TitleEventSource2) {
  TitleEventSource2[TitleEventSource2["Api"] = 0] = "Api";
  TitleEventSource2[TitleEventSource2["Process"] = 1] = "Process";
  TitleEventSource2[TitleEventSource2["Sequence"] = 2] = "Sequence";
  TitleEventSource2[TitleEventSource2["Config"] = 3] = "Config";
})(TitleEventSource || (TitleEventSource = {}));
var TerminalIpcChannels;
(function(TerminalIpcChannels2) {
  TerminalIpcChannels2["LocalPty"] = "localPty";
  TerminalIpcChannels2["PtyHost"] = "ptyHost";
  TerminalIpcChannels2["PtyHostWindow"] = "ptyHostWindow";
  TerminalIpcChannels2["Logger"] = "logger";
  TerminalIpcChannels2["Heartbeat"] = "heartbeat";
})(TerminalIpcChannels || (TerminalIpcChannels = {}));
var ProcessPropertyType;
(function(ProcessPropertyType2) {
  ProcessPropertyType2["Cwd"] = "cwd";
  ProcessPropertyType2["InitialCwd"] = "initialCwd";
  ProcessPropertyType2["FixedDimensions"] = "fixedDimensions";
  ProcessPropertyType2["Title"] = "title";
  ProcessPropertyType2["ShellType"] = "shellType";
  ProcessPropertyType2["HasChildProcesses"] = "hasChildProcesses";
  ProcessPropertyType2["ResolvedShellLaunchConfig"] = "resolvedShellLaunchConfig";
  ProcessPropertyType2["OverrideDimensions"] = "overrideDimensions";
  ProcessPropertyType2["FailedShellIntegrationActivation"] = "failedShellIntegrationActivation";
  ProcessPropertyType2["UsedShellIntegrationInjection"] = "usedShellIntegrationInjection";
})(ProcessPropertyType || (ProcessPropertyType = {}));
var $Ks = $Xi("ptyService");
var HeartbeatConstants;
(function(HeartbeatConstants2) {
  HeartbeatConstants2[HeartbeatConstants2["BeatInterval"] = 5e3] = "BeatInterval";
  HeartbeatConstants2[HeartbeatConstants2["ConnectingBeatInterval"] = 2e4] = "ConnectingBeatInterval";
  HeartbeatConstants2[HeartbeatConstants2["FirstWaitMultiplier"] = 1.2] = "FirstWaitMultiplier";
  HeartbeatConstants2[HeartbeatConstants2["SecondWaitMultiplier"] = 1] = "SecondWaitMultiplier";
  HeartbeatConstants2[HeartbeatConstants2["CreateProcessTimeout"] = 5e3] = "CreateProcessTimeout";
})(HeartbeatConstants || (HeartbeatConstants = {}));
var TerminalLocation;
(function(TerminalLocation2) {
  TerminalLocation2[TerminalLocation2["Panel"] = 1] = "Panel";
  TerminalLocation2[TerminalLocation2["Editor"] = 2] = "Editor";
})(TerminalLocation || (TerminalLocation = {}));
var TerminalLocationString;
(function(TerminalLocationString2) {
  TerminalLocationString2["TerminalView"] = "view";
  TerminalLocationString2["Editor"] = "editor";
})(TerminalLocationString || (TerminalLocationString = {}));
var LocalReconnectConstants;
(function(LocalReconnectConstants2) {
  LocalReconnectConstants2[LocalReconnectConstants2["GraceTime"] = 6e4] = "GraceTime";
  LocalReconnectConstants2[LocalReconnectConstants2["ShortGraceTime"] = 6e3] = "ShortGraceTime";
})(LocalReconnectConstants || (LocalReconnectConstants = {}));
var FlowControlConstants;
(function(FlowControlConstants2) {
  FlowControlConstants2[FlowControlConstants2["HighWatermarkChars"] = 1e5] = "HighWatermarkChars";
  FlowControlConstants2[FlowControlConstants2["LowWatermarkChars"] = 5e3] = "LowWatermarkChars";
  FlowControlConstants2[FlowControlConstants2["CharCountAckSize"] = 5e3] = "CharCountAckSize";
})(FlowControlConstants || (FlowControlConstants = {}));
var ProfileSource;
(function(ProfileSource2) {
  ProfileSource2["GitBash"] = "Git Bash";
  ProfileSource2["Pwsh"] = "PowerShell";
})(ProfileSource || (ProfileSource = {}));
var ShellIntegrationStatus;
(function(ShellIntegrationStatus2) {
  ShellIntegrationStatus2[ShellIntegrationStatus2["Off"] = 0] = "Off";
  ShellIntegrationStatus2[ShellIntegrationStatus2["FinalTerm"] = 1] = "FinalTerm";
  ShellIntegrationStatus2[ShellIntegrationStatus2["VSCode"] = 2] = "VSCode";
})(ShellIntegrationStatus || (ShellIntegrationStatus = {}));
var TerminalExitReason;
(function(TerminalExitReason2) {
  TerminalExitReason2[TerminalExitReason2["Unknown"] = 0] = "Unknown";
  TerminalExitReason2[TerminalExitReason2["Shutdown"] = 1] = "Shutdown";
  TerminalExitReason2[TerminalExitReason2["Process"] = 2] = "Process";
  TerminalExitReason2[TerminalExitReason2["User"] = 3] = "User";
  TerminalExitReason2[TerminalExitReason2["Extension"] = 4] = "Extension";
})(TerminalExitReason || (TerminalExitReason = {}));
var $Ls = {
  Backend: "workbench.contributions.terminal.processBackend"
};
var TerminalBackendRegistry = class {
  constructor() {
    this.a = /* @__PURE__ */ new Map();
  }
  get backends() {
    return this.a;
  }
  registerTerminalBackend(backend) {
    const key = this.b(backend.remoteAuthority);
    if (this.a.has(key)) {
      throw new Error(`A terminal backend with remote authority '${key}' was already registered.`);
    }
    this.a.set(key, backend);
  }
  getTerminalBackend(remoteAuthority) {
    return this.a.get(this.b(remoteAuthority));
  }
  b(remoteAuthority) {
    return remoteAuthority?.toLowerCase() ?? "";
  }
};
$Ko.add($Ls.Backend, new TerminalBackendRegistry());
var $Ms = $Xi("localPtyService");
var $Ns = $Xi("terminalLogService");

// out-build/vs/platform/terminal/node/heartbeatService.js
var $hpc = class extends $9c {
  constructor() {
    super();
    this.a = this.B(new $Ce());
    this.onBeat = this.a.event;
    const interval = setInterval(() => {
      this.a.fire();
    }, HeartbeatConstants.BeatInterval);
    this.B($7c(() => clearInterval(interval)));
  }
};

// out-build/vs/platform/terminal/node/ptyService.js
import { execFile, exec as exec3 } from "child_process";

// out-build/vs/base/node/shell.js
import { userInfo } from "os";

// out-build/vs/base/node/powershell.js
import * as os2 from "os";
var IntRegex = /^\d+$/;
var PwshMsixRegex = /^Microsoft.PowerShell_.*/;
var PwshPreviewMsixRegex = /^Microsoft.PowerShellPreview_.*/;
var Arch;
(function(Arch2) {
  Arch2[Arch2["x64"] = 0] = "x64";
  Arch2[Arch2["x86"] = 1] = "x86";
  Arch2[Arch2["ARM"] = 2] = "ARM";
})(Arch || (Arch = {}));
var processArch;
switch (process.arch) {
  case "ia32":
    processArch = 1;
    break;
  case "arm":
  case "arm64":
    processArch = 2;
    break;
  default:
    processArch = 0;
    break;
}
var osArch;
if (process.env["PROCESSOR_ARCHITEW6432"]) {
  osArch = process.env["PROCESSOR_ARCHITEW6432"] === "ARM64" ? 2 : 0;
} else if (process.env["PROCESSOR_ARCHITECTURE"] === "ARM64") {
  osArch = 2;
} else if (process.env["PROCESSOR_ARCHITECTURE"] === "X86") {
  osArch = 1;
} else {
  osArch = 0;
}
var PossiblePowerShellExe = class {
  constructor(exePath, displayName, a) {
    this.exePath = exePath;
    this.displayName = displayName;
    this.a = a;
  }
  async exists() {
    if (this.a === void 0) {
      this.a = await SymlinkSupport.existsFile(this.exePath);
    }
    return this.a;
  }
};
function getProgramFilesPath({ useAlternateBitness = false } = {}) {
  if (!useAlternateBitness) {
    return process.env.ProgramFiles || null;
  }
  if (processArch === 0) {
    return process.env["ProgramFiles(x86)"] || null;
  }
  if (osArch === 0) {
    return process.env.ProgramW6432 || null;
  }
  return null;
}
async function findPSCoreWindowsInstallation({ useAlternateBitness = false, findPreview = false } = {}) {
  const programFilesPath = getProgramFilesPath({ useAlternateBitness });
  if (!programFilesPath) {
    return null;
  }
  const powerShellInstallBaseDir = $vc(programFilesPath, "PowerShell");
  if (!await SymlinkSupport.existsDirectory(powerShellInstallBaseDir)) {
    return null;
  }
  let highestSeenVersion = -1;
  let pwshExePath = null;
  for (const item of await Promises2.readdir(powerShellInstallBaseDir)) {
    let currentVersion = -1;
    if (findPreview) {
      const dashIndex = item.indexOf("-");
      if (dashIndex < 0) {
        continue;
      }
      const intPart = item.substring(0, dashIndex);
      if (!IntRegex.test(intPart) || item.substring(dashIndex + 1) !== "preview") {
        continue;
      }
      currentVersion = parseInt(intPart, 10);
    } else {
      if (!IntRegex.test(item)) {
        continue;
      }
      currentVersion = parseInt(item, 10);
    }
    if (currentVersion <= highestSeenVersion) {
      continue;
    }
    const exePath = $vc(powerShellInstallBaseDir, item, "pwsh.exe");
    if (!await SymlinkSupport.existsFile(exePath)) {
      continue;
    }
    pwshExePath = exePath;
    highestSeenVersion = currentVersion;
  }
  if (!pwshExePath) {
    return null;
  }
  const bitness = programFilesPath.includes("x86") ? " (x86)" : "";
  const preview = findPreview ? " Preview" : "";
  return new PossiblePowerShellExe(pwshExePath, `PowerShell${preview}${bitness}`, true);
}
async function findPSCoreMsix({ findPreview } = {}) {
  if (!process.env.LOCALAPPDATA) {
    return null;
  }
  const msixAppDir = $vc(process.env.LOCALAPPDATA, "Microsoft", "WindowsApps");
  if (!await SymlinkSupport.existsDirectory(msixAppDir)) {
    return null;
  }
  const { pwshMsixDirRegex, pwshMsixName } = findPreview ? { pwshMsixDirRegex: PwshPreviewMsixRegex, pwshMsixName: "PowerShell Preview (Store)" } : { pwshMsixDirRegex: PwshMsixRegex, pwshMsixName: "PowerShell (Store)" };
  for (const subdir of await Promises2.readdir(msixAppDir)) {
    if (pwshMsixDirRegex.test(subdir)) {
      const pwshMsixPath = $vc(msixAppDir, subdir, "pwsh.exe");
      return new PossiblePowerShellExe(pwshMsixPath, pwshMsixName);
    }
  }
  return null;
}
function findPSCoreDotnetGlobalTool() {
  const dotnetGlobalToolExePath = $vc(os2.homedir(), ".dotnet", "tools", "pwsh.exe");
  return new PossiblePowerShellExe(dotnetGlobalToolExePath, ".NET Core PowerShell Global Tool");
}
function findWinPS() {
  const winPSPath = $vc(process.env.windir, processArch === 1 && osArch !== 1 ? "SysNative" : "System32", "WindowsPowerShell", "v1.0", "powershell.exe");
  return new PossiblePowerShellExe(winPSPath, "Windows PowerShell", true);
}
async function* enumerateDefaultPowerShellInstallations() {
  let pwshExe = await findPSCoreWindowsInstallation();
  if (pwshExe) {
    yield pwshExe;
  }
  pwshExe = await findPSCoreWindowsInstallation({ useAlternateBitness: true });
  if (pwshExe) {
    yield pwshExe;
  }
  pwshExe = await findPSCoreMsix();
  if (pwshExe) {
    yield pwshExe;
  }
  pwshExe = findPSCoreDotnetGlobalTool();
  if (pwshExe) {
    yield pwshExe;
  }
  pwshExe = await findPSCoreWindowsInstallation({ findPreview: true });
  if (pwshExe) {
    yield pwshExe;
  }
  pwshExe = await findPSCoreMsix({ findPreview: true });
  if (pwshExe) {
    yield pwshExe;
  }
  pwshExe = await findPSCoreWindowsInstallation({ useAlternateBitness: true, findPreview: true });
  if (pwshExe) {
    yield pwshExe;
  }
  pwshExe = findWinPS();
  if (pwshExe) {
    yield pwshExe;
  }
}
async function* $Om() {
  for await (const defaultPwsh of enumerateDefaultPowerShellInstallations()) {
    if (await defaultPwsh.exists()) {
      yield defaultPwsh;
    }
  }
}
async function $Pm() {
  for await (const pwsh of $Om()) {
    return pwsh;
  }
  return null;
}

// out-build/vs/base/node/shell.js
async function $Sm(os4, env2) {
  if (os4 === 1) {
    if ($l) {
      return getSystemShellWindows();
    }
    return $Qm(env2);
  }
  return getSystemShellUnixLike(os4, env2);
}
var _TERMINAL_DEFAULT_SHELL_UNIX_LIKE = null;
function getSystemShellUnixLike(os4, env2) {
  if ($n && os4 === 2 || $m && os4 === 3) {
    return "/bin/bash";
  }
  if (!_TERMINAL_DEFAULT_SHELL_UNIX_LIKE) {
    let unixLikeTerminal;
    if ($l) {
      unixLikeTerminal = "/bin/bash";
    } else {
      unixLikeTerminal = env2["SHELL"];
      if (!unixLikeTerminal) {
        try {
          unixLikeTerminal = userInfo().shell;
        } catch (err) {
        }
      }
      if (!unixLikeTerminal) {
        unixLikeTerminal = "sh";
      }
      if (unixLikeTerminal === "/bin/false") {
        unixLikeTerminal = "/bin/bash";
      }
    }
    _TERMINAL_DEFAULT_SHELL_UNIX_LIKE = unixLikeTerminal;
  }
  return _TERMINAL_DEFAULT_SHELL_UNIX_LIKE;
}
var _TERMINAL_DEFAULT_SHELL_WINDOWS = null;
async function getSystemShellWindows() {
  if (!_TERMINAL_DEFAULT_SHELL_WINDOWS) {
    _TERMINAL_DEFAULT_SHELL_WINDOWS = (await $Pm()).exePath;
  }
  return _TERMINAL_DEFAULT_SHELL_WINDOWS;
}

// out-build/vs/platform/terminal/common/requestStore.js
var $Rs = class $Rs2 extends $9c {
  /**
   * @param timeout How long in ms to allow requests to go unanswered for, undefined will use the
   * default (15 seconds).
   */
  constructor(timeout, h) {
    super();
    this.h = h;
    this.a = 0;
    this.c = /* @__PURE__ */ new Map();
    this.f = /* @__PURE__ */ new Map();
    this.g = this.B(new $Ce());
    this.onCreateRequest = this.g.event;
    this.b = timeout === void 0 ? 15e3 : timeout;
    this.B($7c(() => {
      for (const d of this.f.values()) {
        $4c(d);
      }
    }));
  }
  /**
   * Creates a request.
   * @param args The arguments to pass to the onCreateRequest event.
   */
  createRequest(args) {
    return new Promise((resolve, reject) => {
      const requestId = ++this.a;
      this.c.set(requestId, resolve);
      this.g.fire({ requestId, ...args });
      const tokenSource = new $Oe();
      $Yh(this.b, tokenSource.token).then(() => reject(`Request ${requestId} timed out (${this.b}ms)`));
      this.f.set(requestId, [$7c(() => tokenSource.cancel())]);
    });
  }
  /**
   * Accept a reply to a request.
   * @param requestId The request ID originating from the onCreateRequest event.
   * @param data The reply data.
   */
  acceptReply(requestId, data) {
    const resolveRequest = this.c.get(requestId);
    if (resolveRequest) {
      this.c.delete(requestId);
      $4c(this.f.get(requestId) || []);
      this.f.delete(requestId);
      resolveRequest(data);
    } else {
      this.h.warn(`RequestStore#acceptReply was called without receiving a matching request ${requestId}`);
    }
  }
};
$Rs = __decorate([
  __param(1, $sk)
], $Rs);

// out-build/vs/platform/terminal/common/terminalDataBuffering.js
var $yBb = class {
  constructor(b) {
    this.b = b;
    this.a = /* @__PURE__ */ new Map();
  }
  dispose() {
    for (const buffer of this.a.values()) {
      buffer.dispose();
    }
  }
  startBuffering(id2, event, throttleBy = 5) {
    const disposable = event((e) => {
      const data = typeof e === "string" ? e : e.data;
      let buffer = this.a.get(id2);
      if (buffer) {
        buffer.data.push(data);
        return;
      }
      const timeoutId = setTimeout(() => this.flushBuffer(id2), throttleBy);
      buffer = {
        data: [data],
        timeoutId,
        dispose: () => {
          clearTimeout(timeoutId);
          this.flushBuffer(id2);
          disposable.dispose();
        }
      };
      this.a.set(id2, buffer);
    });
    return disposable;
  }
  stopBuffering(id2) {
    const buffer = this.a.get(id2);
    buffer?.dispose();
  }
  flushBuffer(id2) {
    const buffer = this.a.get(id2);
    if (buffer) {
      this.a.delete(id2);
      this.b(id2, buffer.data.join(""));
    }
  }
};

// out-build/vs/platform/terminal/common/terminalEnvironment.js
function $YR(path2) {
  let newPath = path2;
  if (newPath.includes("\\")) {
    newPath = newPath.replace(/\\/g, "\\\\");
  }
  const bannedChars = /[\`\$\|\&\>\~\#\!\^\*\;\<\"\']/g;
  newPath = newPath.replace(bannedChars, "");
  return `'${newPath}'`;
}
function $1R(cwd2) {
  if (cwd2.match(/^['"].*['"]$/)) {
    cwd2 = cwd2.substring(1, cwd2.length - 1);
  }
  if (OS === 1 && cwd2 && cwd2[1] === ":") {
    return cwd2[0].toUpperCase() + cwd2.substring(1);
  }
  return cwd2;
}

// out-build/vs/platform/terminal/node/terminalEnvironment.js
import * as os3 from "os";

// out-build/vs/platform/terminal/common/environmentVariable.js
var EnvironmentVariableMutatorType;
(function(EnvironmentVariableMutatorType2) {
  EnvironmentVariableMutatorType2[EnvironmentVariableMutatorType2["Replace"] = 1] = "Replace";
  EnvironmentVariableMutatorType2[EnvironmentVariableMutatorType2["Append"] = 2] = "Append";
  EnvironmentVariableMutatorType2[EnvironmentVariableMutatorType2["Prepend"] = 3] = "Prepend";
})(EnvironmentVariableMutatorType || (EnvironmentVariableMutatorType = {}));

// out-build/vs/platform/terminal/common/environmentVariableShared.js
function $3s(serializedCollection) {
  return new Map(serializedCollection);
}
function $4s(serializableEnvironmentDescription) {
  return new Map(serializableEnvironmentDescription ?? []);
}
function $6s(serializedCollection) {
  return new Map(serializedCollection.map((e) => {
    return [e[0], { map: $3s(e[1]), descriptionMap: $4s(e[2]) }];
  }));
}

// out-build/vs/platform/terminal/common/environmentVariableCollection.js
var mutatorTypeToLabelMap = /* @__PURE__ */ new Map([
  [EnvironmentVariableMutatorType.Append, "APPEND"],
  [EnvironmentVariableMutatorType.Prepend, "PREPEND"],
  [EnvironmentVariableMutatorType.Replace, "REPLACE"]
]);
var $7s = class {
  constructor(collections) {
    this.collections = collections;
    this.a = /* @__PURE__ */ new Map();
    this.b = /* @__PURE__ */ new Map();
    collections.forEach((collection, extensionIdentifier) => {
      this.d(collection, extensionIdentifier);
      const it = collection.map.entries();
      let next = it.next();
      while (!next.done) {
        const mutator = next.value[1];
        const key = next.value[0];
        let entry = this.a.get(key);
        if (!entry) {
          entry = [];
          this.a.set(key, entry);
        }
        if (entry.length > 0 && entry[0].type === EnvironmentVariableMutatorType.Replace) {
          next = it.next();
          continue;
        }
        const extensionMutator = {
          extensionIdentifier,
          value: mutator.value,
          type: mutator.type,
          scope: mutator.scope,
          variable: mutator.variable,
          options: mutator.options
        };
        if (!extensionMutator.scope) {
          delete extensionMutator.scope;
        }
        entry.unshift(extensionMutator);
        next = it.next();
      }
    });
  }
  async applyToProcessEnvironment(env2, scope, variableResolver) {
    let lowerToActualVariableNames;
    if ($l) {
      lowerToActualVariableNames = {};
      Object.keys(env2).forEach((e) => lowerToActualVariableNames[e.toLowerCase()] = e);
    }
    for (const [variable, mutators] of this.getVariableMap(scope)) {
      const actualVariable = $l ? lowerToActualVariableNames[variable.toLowerCase()] || variable : variable;
      for (const mutator of mutators) {
        const value = variableResolver ? await variableResolver(mutator.value) : mutator.value;
        if (mutator.options?.applyAtProcessCreation ?? true) {
          switch (mutator.type) {
            case EnvironmentVariableMutatorType.Append:
              env2[actualVariable] = (env2[actualVariable] || "") + value;
              break;
            case EnvironmentVariableMutatorType.Prepend:
              env2[actualVariable] = value + (env2[actualVariable] || "");
              break;
            case EnvironmentVariableMutatorType.Replace:
              env2[actualVariable] = value;
              break;
          }
        }
        if (mutator.options?.applyAtShellIntegration ?? false) {
          const key = `VSCODE_ENV_${mutatorTypeToLabelMap.get(mutator.type)}`;
          env2[key] = (env2[key] ? env2[key] + ":" : "") + variable + "=" + this.c(value);
        }
      }
    }
  }
  c(value) {
    return value.replaceAll(":", "\\x3a");
  }
  diff(other, scope) {
    const added = /* @__PURE__ */ new Map();
    const changed = /* @__PURE__ */ new Map();
    const removed = /* @__PURE__ */ new Map();
    other.getVariableMap(scope).forEach((otherMutators, variable) => {
      const currentMutators = this.getVariableMap(scope).get(variable);
      const result = getMissingMutatorsFromArray(otherMutators, currentMutators);
      if (result) {
        added.set(variable, result);
      }
    });
    this.getVariableMap(scope).forEach((currentMutators, variable) => {
      const otherMutators = other.getVariableMap(scope).get(variable);
      const result = getMissingMutatorsFromArray(currentMutators, otherMutators);
      if (result) {
        removed.set(variable, result);
      }
    });
    this.getVariableMap(scope).forEach((currentMutators, variable) => {
      const otherMutators = other.getVariableMap(scope).get(variable);
      const result = getChangedMutatorsFromArray(currentMutators, otherMutators);
      if (result) {
        changed.set(variable, result);
      }
    });
    if (added.size === 0 && changed.size === 0 && removed.size === 0) {
      return void 0;
    }
    return { added, changed, removed };
  }
  getVariableMap(scope) {
    const result = /* @__PURE__ */ new Map();
    for (const mutators of this.a.values()) {
      const filteredMutators = mutators.filter((m) => filterScope(m, scope));
      if (filteredMutators.length > 0) {
        result.set(filteredMutators[0].variable, filteredMutators);
      }
    }
    return result;
  }
  getDescriptionMap(scope) {
    const result = /* @__PURE__ */ new Map();
    for (const mutators of this.b.values()) {
      const filteredMutators = mutators.filter((m) => filterScope(m, scope, true));
      for (const mutator of filteredMutators) {
        result.set(mutator.extensionIdentifier, mutator.description);
      }
    }
    return result;
  }
  d(collection, extensionIdentifier) {
    if (!collection.descriptionMap) {
      return;
    }
    const it = collection.descriptionMap.entries();
    let next = it.next();
    while (!next.done) {
      const mutator = next.value[1];
      const key = next.value[0];
      let entry = this.b.get(key);
      if (!entry) {
        entry = [];
        this.b.set(key, entry);
      }
      const extensionMutator = {
        extensionIdentifier,
        scope: mutator.scope,
        description: mutator.description
      };
      if (!extensionMutator.scope) {
        delete extensionMutator.scope;
      }
      entry.push(extensionMutator);
      next = it.next();
    }
  }
};
function filterScope(mutator, scope, strictFilter = false) {
  if (!mutator.scope) {
    if (strictFilter) {
      return scope === mutator.scope;
    }
    return true;
  }
  if (mutator.scope.workspaceFolder && scope?.workspaceFolder && mutator.scope.workspaceFolder.index === scope.workspaceFolder.index) {
    return true;
  }
  return false;
}
function getMissingMutatorsFromArray(current, other) {
  if (!other) {
    return current;
  }
  const otherMutatorExtensions = /* @__PURE__ */ new Set();
  other.forEach((m) => otherMutatorExtensions.add(m.extensionIdentifier));
  const result = [];
  current.forEach((mutator) => {
    if (!otherMutatorExtensions.has(mutator.extensionIdentifier)) {
      result.push(mutator);
    }
  });
  return result.length === 0 ? void 0 : result;
}
function getChangedMutatorsFromArray(current, other) {
  if (!other) {
    return void 0;
  }
  const otherMutatorExtensions = /* @__PURE__ */ new Map();
  other.forEach((m) => otherMutatorExtensions.set(m.extensionIdentifier, m));
  const result = [];
  current.forEach((mutator) => {
    const otherMutator = otherMutatorExtensions.get(mutator.extensionIdentifier);
    if (otherMutator && (mutator.type !== otherMutator.type || mutator.value !== otherMutator.value || mutator.scope?.workspaceFolder?.index !== otherMutator.scope?.workspaceFolder?.index)) {
      result.push(otherMutator);
    }
  });
  return result.length === 0 ? void 0 : result;
}

// out-build/vs/platform/terminal/node/terminalEnvironment.js
function $8s() {
  const osVersion = /(\d+)\.(\d+)\.(\d+)/g.exec(os3.release());
  let buildNumber = 0;
  if (osVersion && osVersion.length === 4) {
    buildNumber = parseInt(osVersion[3]);
  }
  return buildNumber;
}
async function $9s(command, cwd2, paths, env2 = env, exists = Promises2.exists) {
  if ($uc(command)) {
    return await exists(command) ? command : void 0;
  }
  if (cwd2 === void 0) {
    cwd2 = cwd();
  }
  const dir = $yc(command);
  if (dir !== ".") {
    const fullPath2 = $vc(cwd2, command);
    return await exists(fullPath2) ? fullPath2 : void 0;
  }
  const envPath = $Eo(env2, "PATH");
  if (paths === void 0 && $wg(envPath)) {
    paths = envPath.split($Fc);
  }
  if (paths === void 0 || paths.length === 0) {
    const fullPath2 = $vc(cwd2, command);
    return await exists(fullPath2) ? fullPath2 : void 0;
  }
  for (const pathEntry of paths) {
    let fullPath2;
    if ($uc(pathEntry)) {
      fullPath2 = $vc(pathEntry, command);
    } else {
      fullPath2 = $vc(cwd2, pathEntry, command);
    }
    if (await exists(fullPath2)) {
      return fullPath2;
    }
    if ($l) {
      let withExtension = fullPath2 + ".com";
      if (await exists(withExtension)) {
        return withExtension;
      }
      withExtension = fullPath2 + ".exe";
      if (await exists(withExtension)) {
        return withExtension;
      }
    }
  }
  const fullPath = $vc(cwd2, command);
  return await exists(fullPath) ? fullPath : void 0;
}
function $0s(shellLaunchConfig, options, env2, logService, productService) {
  const useWinpty = $l && (!options.windowsEnableConpty || $8s() < 18309);
  if (
    // The global setting is disabled
    !options.shellIntegration.enabled || // There is no executable (so there's no way to determine how to inject)
    !shellLaunchConfig.executable || // It's a feature terminal (tasks, debug), unless it's explicitly being forced
    shellLaunchConfig.isFeatureTerminal && !shellLaunchConfig.forceShellIntegration || // The ignoreShellIntegration flag is passed (eg. relaunching without shell integration)
    shellLaunchConfig.ignoreShellIntegration || // Winpty is unsupported
    useWinpty
  ) {
    return void 0;
  }
  const originalArgs = shellLaunchConfig.args;
  const shell = $pc === "win32" ? $zc(shellLaunchConfig.executable).toLowerCase() : $zc(shellLaunchConfig.executable);
  const appRoot = $yc($fh.asFileUri("").fsPath);
  let newArgs;
  const envMixin = {
    "VSCODE_INJECTION": "1"
  };
  if (options.shellIntegration.nonce) {
    envMixin["VSCODE_NONCE"] = options.shellIntegration.nonce;
  }
  if ($l) {
    if (shell === "pwsh.exe" || shell === "powershell.exe") {
      if (!originalArgs || arePwshImpliedArgs(originalArgs)) {
        newArgs = shellIntegrationArgs.get(ShellIntegrationExecutable.WindowsPwsh);
      } else if (arePwshLoginArgs(originalArgs)) {
        newArgs = shellIntegrationArgs.get(ShellIntegrationExecutable.WindowsPwshLogin);
      }
      if (!newArgs) {
        return void 0;
      }
      newArgs = [...newArgs];
      newArgs[newArgs.length - 1] = $vf(newArgs[newArgs.length - 1], appRoot, "");
      envMixin["VSCODE_STABLE"] = productService.quality === "stable" ? "1" : "0";
      if (options.shellIntegration.suggestEnabled) {
        envMixin["VSCODE_SUGGEST"] = "1";
      }
      return { newArgs, envMixin };
    } else if (shell === "bash.exe") {
      if (!originalArgs || originalArgs.length === 0) {
        newArgs = shellIntegrationArgs.get(ShellIntegrationExecutable.Bash);
      } else if (areZshBashLoginArgs(originalArgs)) {
        envMixin["VSCODE_SHELL_LOGIN"] = "1";
        addEnvMixinPathPrefix(options, envMixin);
        newArgs = shellIntegrationArgs.get(ShellIntegrationExecutable.Bash);
      }
      if (!newArgs) {
        return void 0;
      }
      newArgs = [...newArgs];
      newArgs[newArgs.length - 1] = $vf(newArgs[newArgs.length - 1], appRoot);
      envMixin["VSCODE_STABLE"] = productService.quality === "stable" ? "1" : "0";
      return { newArgs, envMixin };
    }
    logService.warn(`Shell integration cannot be enabled for executable "${shellLaunchConfig.executable}" and args`, shellLaunchConfig.args);
    return void 0;
  }
  switch (shell) {
    case "bash": {
      if (!originalArgs || originalArgs.length === 0) {
        newArgs = shellIntegrationArgs.get(ShellIntegrationExecutable.Bash);
      } else if (areZshBashLoginArgs(originalArgs)) {
        envMixin["VSCODE_SHELL_LOGIN"] = "1";
        addEnvMixinPathPrefix(options, envMixin);
        newArgs = shellIntegrationArgs.get(ShellIntegrationExecutable.Bash);
      }
      if (!newArgs) {
        return void 0;
      }
      newArgs = [...newArgs];
      newArgs[newArgs.length - 1] = $vf(newArgs[newArgs.length - 1], appRoot);
      envMixin["VSCODE_STABLE"] = productService.quality === "stable" ? "1" : "0";
      return { newArgs, envMixin };
    }
    case "fish": {
      const oldDataDirs = env2?.XDG_DATA_DIRS ?? "/usr/local/share:/usr/share";
      const newDataDir = $vc(appRoot, "out/vs/workbench/contrib/terminal/common/scripts/fish_xdg_data");
      envMixin["XDG_DATA_DIRS"] = `${oldDataDirs}:${newDataDir}`;
      addEnvMixinPathPrefix(options, envMixin);
      return { newArgs: void 0, envMixin };
    }
    case "pwsh": {
      if (!originalArgs || arePwshImpliedArgs(originalArgs)) {
        newArgs = shellIntegrationArgs.get(ShellIntegrationExecutable.Pwsh);
      } else if (arePwshLoginArgs(originalArgs)) {
        newArgs = shellIntegrationArgs.get(ShellIntegrationExecutable.PwshLogin);
      }
      if (!newArgs) {
        return void 0;
      }
      if (options.shellIntegration.suggestEnabled) {
        envMixin["VSCODE_SUGGEST"] = "1";
      }
      newArgs = [...newArgs];
      newArgs[newArgs.length - 1] = $vf(newArgs[newArgs.length - 1], appRoot, "");
      envMixin["VSCODE_STABLE"] = productService.quality === "stable" ? "1" : "0";
      return { newArgs, envMixin };
    }
    case "zsh": {
      if (!originalArgs || originalArgs.length === 0) {
        newArgs = shellIntegrationArgs.get(ShellIntegrationExecutable.Zsh);
      } else if (areZshBashLoginArgs(originalArgs)) {
        newArgs = shellIntegrationArgs.get(ShellIntegrationExecutable.ZshLogin);
        addEnvMixinPathPrefix(options, envMixin);
      } else if (originalArgs === shellIntegrationArgs.get(ShellIntegrationExecutable.Zsh) || originalArgs === shellIntegrationArgs.get(ShellIntegrationExecutable.ZshLogin)) {
        newArgs = originalArgs;
      }
      if (!newArgs) {
        return void 0;
      }
      newArgs = [...newArgs];
      newArgs[newArgs.length - 1] = $vf(newArgs[newArgs.length - 1], appRoot);
      let username;
      try {
        username = os3.userInfo().username;
      } catch {
        username = "unknown";
      }
      const zdotdir = $vc(os3.tmpdir(), `${username}-${productService.applicationName}-zsh`);
      envMixin["ZDOTDIR"] = zdotdir;
      const userZdotdir = env2?.ZDOTDIR ?? os3.homedir() ?? `~`;
      envMixin["USER_ZDOTDIR"] = userZdotdir;
      const filesToCopy = [];
      filesToCopy.push({
        source: $vc(appRoot, "out/vs/workbench/contrib/terminal/common/scripts/shellIntegration-rc.zsh"),
        dest: $vc(zdotdir, ".zshrc")
      });
      filesToCopy.push({
        source: $vc(appRoot, "out/vs/workbench/contrib/terminal/common/scripts/shellIntegration-profile.zsh"),
        dest: $vc(zdotdir, ".zprofile")
      });
      filesToCopy.push({
        source: $vc(appRoot, "out/vs/workbench/contrib/terminal/common/scripts/shellIntegration-env.zsh"),
        dest: $vc(zdotdir, ".zshenv")
      });
      filesToCopy.push({
        source: $vc(appRoot, "out/vs/workbench/contrib/terminal/common/scripts/shellIntegration-login.zsh"),
        dest: $vc(zdotdir, ".zlogin")
      });
      return { newArgs, envMixin, filesToCopy };
    }
  }
  logService.warn(`Shell integration cannot be enabled for executable "${shellLaunchConfig.executable}" and args`, shellLaunchConfig.args);
  return void 0;
}
function addEnvMixinPathPrefix(options, envMixin) {
  if ($m && options.environmentVariableCollections) {
    const deserialized = $6s(options.environmentVariableCollections);
    const merged = new $7s(deserialized);
    const pathEntry = merged.getVariableMap({ workspaceFolder: options.workspaceFolder }).get("PATH");
    const prependToPath = [];
    if (pathEntry) {
      for (const mutator of pathEntry) {
        if (mutator.type === EnvironmentVariableMutatorType.Prepend) {
          prependToPath.push(mutator.value);
        }
      }
    }
    if (prependToPath.length > 0) {
      envMixin["VSCODE_PATH_PREFIX"] = prependToPath.join("");
    }
  }
}
var ShellIntegrationExecutable;
(function(ShellIntegrationExecutable2) {
  ShellIntegrationExecutable2["WindowsPwsh"] = "windows-pwsh";
  ShellIntegrationExecutable2["WindowsPwshLogin"] = "windows-pwsh-login";
  ShellIntegrationExecutable2["Pwsh"] = "pwsh";
  ShellIntegrationExecutable2["PwshLogin"] = "pwsh-login";
  ShellIntegrationExecutable2["Zsh"] = "zsh";
  ShellIntegrationExecutable2["ZshLogin"] = "zsh-login";
  ShellIntegrationExecutable2["Bash"] = "bash";
})(ShellIntegrationExecutable || (ShellIntegrationExecutable = {}));
var shellIntegrationArgs = /* @__PURE__ */ new Map();
shellIntegrationArgs.set(ShellIntegrationExecutable.WindowsPwsh, ["-noexit", "-command", 'try { . "{0}\\out\\vs\\workbench\\contrib\\terminal\\common\\scripts\\shellIntegration.ps1" } catch {}{1}']);
shellIntegrationArgs.set(ShellIntegrationExecutable.WindowsPwshLogin, ["-l", "-noexit", "-command", 'try { . "{0}\\out\\vs\\workbench\\contrib\\terminal\\common\\scripts\\shellIntegration.ps1" } catch {}{1}']);
shellIntegrationArgs.set(ShellIntegrationExecutable.Pwsh, ["-noexit", "-command", '. "{0}/out/vs/workbench/contrib/terminal/common/scripts/shellIntegration.ps1"{1}']);
shellIntegrationArgs.set(ShellIntegrationExecutable.PwshLogin, ["-l", "-noexit", "-command", '. "{0}/out/vs/workbench/contrib/terminal/common/scripts/shellIntegration.ps1"']);
shellIntegrationArgs.set(ShellIntegrationExecutable.Zsh, ["-i"]);
shellIntegrationArgs.set(ShellIntegrationExecutable.ZshLogin, ["-il"]);
shellIntegrationArgs.set(ShellIntegrationExecutable.Bash, ["--init-file", "{0}/out/vs/workbench/contrib/terminal/common/scripts/shellIntegration-bash.sh"]);
var pwshLoginArgs = ["-login", "-l"];
var shLoginArgs = ["--login", "-l"];
var shInteractiveArgs = ["-i", "--interactive"];
var pwshImpliedArgs = ["-nol", "-nologo"];
function arePwshLoginArgs(originalArgs) {
  if (typeof originalArgs === "string") {
    return pwshLoginArgs.includes(originalArgs.toLowerCase());
  } else {
    return originalArgs.length === 1 && pwshLoginArgs.includes(originalArgs[0].toLowerCase()) || originalArgs.length === 2 && (pwshLoginArgs.includes(originalArgs[0].toLowerCase()) || pwshLoginArgs.includes(originalArgs[1].toLowerCase())) && (pwshImpliedArgs.includes(originalArgs[0].toLowerCase()) || pwshImpliedArgs.includes(originalArgs[1].toLowerCase()));
  }
}
function arePwshImpliedArgs(originalArgs) {
  if (typeof originalArgs === "string") {
    return pwshImpliedArgs.includes(originalArgs.toLowerCase());
  } else {
    return originalArgs.length === 0 || originalArgs?.length === 1 && pwshImpliedArgs.includes(originalArgs[0].toLowerCase());
  }
}
function areZshBashLoginArgs(originalArgs) {
  if (typeof originalArgs !== "string") {
    originalArgs = originalArgs.filter((arg) => !shInteractiveArgs.includes(arg.toLowerCase()));
  }
  return originalArgs === "string" && shLoginArgs.includes(originalArgs.toLowerCase()) || typeof originalArgs !== "string" && originalArgs.length === 1 && shLoginArgs.includes(originalArgs[0].toLowerCase());
}

// out-build/vs/platform/terminal/node/terminalProcess.js
import * as fs2 from "fs";
import { exec as exec2 } from "child_process";

// out-build/vs/platform/product/common/productService.js
var $Lk = $Xi("productService");

// out-build/vs/base/node/ps.js
import { exec } from "child_process";
function $gt(rootPid) {
  return new Promise((resolve, reject) => {
    let rootItem;
    const map = /* @__PURE__ */ new Map();
    function addToTree(pid, ppid, cmd, load, mem) {
      const parent = map.get(ppid);
      if (pid === rootPid || parent) {
        const item = {
          name: findName(cmd),
          cmd,
          pid,
          ppid,
          load,
          mem
        };
        map.set(pid, item);
        if (pid === rootPid) {
          rootItem = item;
        }
        if (parent) {
          if (!parent.children) {
            parent.children = [];
          }
          parent.children.push(item);
          if (parent.children.length > 1) {
            parent.children = parent.children.sort((a, b) => a.pid - b.pid);
          }
        }
      }
    }
    function findName(cmd) {
      const UTILITY_NETWORK_HINT = /--utility-sub-type=network/i;
      const WINDOWS_CRASH_REPORTER = /--crashes-directory/i;
      const WINPTY = /\\pipe\\winpty-control/i;
      const CONPTY = /conhost\.exe.+--headless/i;
      const TYPE = /--type=([a-zA-Z-]+)/;
      if (WINDOWS_CRASH_REPORTER.exec(cmd)) {
        return "electron-crash-reporter";
      }
      if (WINPTY.exec(cmd)) {
        return "winpty-agent";
      }
      if (CONPTY.exec(cmd)) {
        return "conpty-agent";
      }
      let matches = TYPE.exec(cmd);
      if (matches && matches.length === 2) {
        if (matches[1] === "renderer") {
          return `window`;
        } else if (matches[1] === "utility") {
          if (UTILITY_NETWORK_HINT.exec(cmd)) {
            return "utility-network-service";
          }
          return "utility-process";
        } else if (matches[1] === "extensionHost") {
          return "extension-host";
        }
        return matches[1];
      }
      const JS = /[a-zA-Z-]+\.js/g;
      let result = "";
      do {
        matches = JS.exec(cmd);
        if (matches) {
          result += matches + " ";
        }
      } while (matches);
      if (result) {
        if (cmd.indexOf("node ") < 0 && cmd.indexOf("node.exe") < 0) {
          return `electron-nodejs (${result})`;
        }
      }
      return cmd;
    }
    if (process.platform === "win32") {
      const cleanUNCPrefix = (value) => {
        if (value.indexOf("\\\\?\\") === 0) {
          return value.substring(4);
        } else if (value.indexOf("\\??\\") === 0) {
          return value.substring(4);
        } else if (value.indexOf('"\\\\?\\') === 0) {
          return '"' + value.substring(5);
        } else if (value.indexOf('"\\??\\') === 0) {
          return '"' + value.substring(5);
        } else {
          return value;
        }
      };
      import("@vscode/windows-process-tree").then((windowsProcessTree2) => {
        windowsProcessTree2.getProcessList(rootPid, (processList) => {
          if (!processList) {
            reject(new Error(`Root process ${rootPid} not found`));
            return;
          }
          windowsProcessTree2.getProcessCpuUsage(processList, (completeProcessList) => {
            const processItems = /* @__PURE__ */ new Map();
            completeProcessList.forEach((process2) => {
              const commandLine = cleanUNCPrefix(process2.commandLine || "");
              processItems.set(process2.pid, {
                name: findName(commandLine),
                cmd: commandLine,
                pid: process2.pid,
                ppid: process2.ppid,
                load: process2.cpu || 0,
                mem: process2.memory || 0
              });
            });
            rootItem = processItems.get(rootPid);
            if (rootItem) {
              processItems.forEach((item) => {
                const parent = processItems.get(item.ppid);
                if (parent) {
                  if (!parent.children) {
                    parent.children = [];
                  }
                  parent.children.push(item);
                }
              });
              processItems.forEach((item) => {
                if (item.children) {
                  item.children = item.children.sort((a, b) => a.pid - b.pid);
                }
              });
              resolve(rootItem);
            } else {
              reject(new Error(`Root process ${rootPid} not found`));
            }
          });
        }, windowsProcessTree2.ProcessDataFlag.CommandLine | windowsProcessTree2.ProcessDataFlag.Memory);
      });
    } else {
      let calculateLinuxCpuUsage2 = function() {
        let processes = [rootItem];
        const pids = [];
        while (processes.length) {
          const process2 = processes.shift();
          if (process2) {
            pids.push(process2.pid);
            if (process2.children) {
              processes = processes.concat(process2.children);
            }
          }
        }
        let cmd = JSON.stringify($fh.asFileUri("vs/base/node/cpuUsage.sh").fsPath);
        cmd += " " + pids.join(" ");
        exec(cmd, {}, (err, stdout, stderr) => {
          if (err || stderr) {
            reject(err || new Error(stderr.toString()));
          } else {
            const cpuUsage = stdout.toString().split("\n");
            for (let i = 0; i < pids.length; i++) {
              const processInfo = map.get(pids[i]);
              processInfo.load = parseFloat(cpuUsage[i]);
            }
            if (!rootItem) {
              reject(new Error(`Root process ${rootPid} not found`));
              return;
            }
            resolve(rootItem);
          }
        });
      };
      var calculateLinuxCpuUsage = calculateLinuxCpuUsage2;
      exec("which ps", {}, (err, stdout, stderr) => {
        if (err || stderr) {
          if (process.platform !== "linux") {
            reject(err || new Error(stderr.toString()));
          } else {
            const cmd = JSON.stringify($fh.asFileUri("vs/base/node/ps.sh").fsPath);
            exec(cmd, {}, (err2, stdout2, stderr2) => {
              if (err2 || stderr2) {
                reject(err2 || new Error(stderr2.toString()));
              } else {
                parsePsOutput(stdout2, addToTree);
                calculateLinuxCpuUsage2();
              }
            });
          }
        } else {
          const ps = stdout.toString().trim();
          const args = "-ax -o pid=,ppid=,pcpu=,pmem=,command=";
          exec(`${ps} ${args}`, { maxBuffer: 1e3 * 1024, env: { LC_NUMERIC: "en_US.UTF-8" } }, (err2, stdout2, stderr2) => {
            if (err2 || stderr2 && !stderr2.includes("screen size is bogus")) {
              reject(err2 || new Error(stderr2.toString()));
            } else {
              parsePsOutput(stdout2, addToTree);
              if (process.platform === "linux") {
                calculateLinuxCpuUsage2();
              } else {
                if (!rootItem) {
                  reject(new Error(`Root process ${rootPid} not found`));
                } else {
                  resolve(rootItem);
                }
              }
            }
          });
        }
      });
    }
  });
}
function parsePsOutput(stdout, addToTree) {
  const PID_CMD = /^\s*([0-9]+)\s+([0-9]+)\s+([0-9]+\.[0-9]+)\s+([0-9]+\.[0-9]+)\s+(.+)$/;
  const lines = stdout.toString().split("\n");
  for (const line of lines) {
    const matches = PID_CMD.exec(line.trim());
    if (matches && matches.length === 6) {
      addToTree(parseInt(matches[1]), parseInt(matches[2]), matches[5], parseFloat(matches[3]), parseFloat(matches[4]));
    }
  }
}

// out-build/vs/platform/terminal/node/childProcessMonitor.js
var Constants;
(function(Constants5) {
  Constants5[Constants5["InactiveThrottleDuration"] = 5e3] = "InactiveThrottleDuration";
  Constants5[Constants5["ActiveDebounceDuration"] = 1e3] = "ActiveDebounceDuration";
})(Constants || (Constants = {}));
var $fpc = [];
var $gpc = class $gpc2 extends $9c {
  set hasChildProcesses(value) {
    if (this.a !== value) {
      this.a = value;
      this.f.debug("ChildProcessMonitor: Has child processes changed", value);
      this.b.fire(value);
    }
  }
  /**
   * Whether the process has child processes.
   */
  get hasChildProcesses() {
    return this.a;
  }
  constructor(c, f) {
    super();
    this.c = c;
    this.f = f;
    this.a = false;
    this.b = this.B(new $Ce());
    this.onDidChangeHasChildProcesses = this.b.event;
  }
  /**
   * Input was triggered on the process.
   */
  handleInput() {
    this.g();
  }
  /**
   * Output was triggered on the process.
   */
  handleOutput() {
    this.h();
  }
  async g() {
    if (this.q.isDisposed) {
      return;
    }
    try {
      const processItem = await $gt(this.c);
      this.hasChildProcesses = this.j(processItem);
    } catch (e) {
      this.f.debug("ChildProcessMonitor: Fetching process tree failed", e);
    }
  }
  h() {
    this.g();
  }
  j(processItem) {
    if (!processItem.children) {
      return false;
    }
    if (processItem.children.length === 1) {
      const item = processItem.children[0];
      let cmd;
      if (item.cmd.startsWith(`"`)) {
        cmd = item.cmd.substring(1, item.cmd.indexOf(`"`, 1));
      } else {
        const spaceIndex = item.cmd.indexOf(` `);
        if (spaceIndex === -1) {
          cmd = item.cmd;
        } else {
          cmd = item.cmd.substring(0, spaceIndex);
        }
      }
      return $fpc.indexOf($Cc(cmd).name) === -1;
    }
    return processItem.children.length > 0;
  }
};
__decorate([
  $qi(
    1e3
    /* Constants.ActiveDebounceDuration */
  )
], $gpc.prototype, "g", null);
__decorate([
  $ri(
    5e3
    /* Constants.InactiveThrottleDuration */
  )
], $gpc.prototype, "h", null);
$gpc = __decorate([
  __param(1, $sk)
], $gpc);

// out-build/vs/platform/terminal/node/windowsShellHelper.js
var SHELL_EXECUTABLES = [
  "cmd.exe",
  "powershell.exe",
  "pwsh.exe",
  "bash.exe",
  "wsl.exe",
  "ubuntu.exe",
  "ubuntu1804.exe",
  "kali.exe",
  "debian.exe",
  "opensuse-42.exe",
  "sles-12.exe"
];
var windowsProcessTree;
var $ipc = class extends $9c {
  get shellType() {
    return this.b;
  }
  get shellTitle() {
    return this.c;
  }
  get onShellNameChanged() {
    return this.f.event;
  }
  get onShellTypeChanged() {
    return this.g.event;
  }
  constructor(h) {
    super();
    this.h = h;
    this.c = "";
    this.f = new $Ce();
    this.g = new $Ce();
    if (!$l) {
      throw new Error(`WindowsShellHelper cannot be instantiated on ${$x}`);
    }
    this.j();
  }
  async j() {
    if (this.q.isDisposed) {
      return;
    }
    this.checkShell();
  }
  async checkShell() {
    if ($l) {
      await $Yh(300);
      this.getShellName().then((title) => {
        const type = this.getShellType(title);
        if (type !== this.b) {
          this.g.fire(type);
          this.f.fire(title);
          this.b = type;
          this.c = title;
        }
      });
    }
  }
  m(tree) {
    if (!tree) {
      return "";
    }
    if (SHELL_EXECUTABLES.indexOf(tree.name) === -1) {
      return tree.name;
    }
    if (!tree.children || tree.children.length === 0) {
      return tree.name;
    }
    let favouriteChild = 0;
    for (; favouriteChild < tree.children.length; favouriteChild++) {
      const child = tree.children[favouriteChild];
      if (!child.children || child.children.length === 0) {
        break;
      }
      if (child.children[0].name !== "conhost.exe") {
        break;
      }
    }
    if (favouriteChild >= tree.children.length) {
      return tree.name;
    }
    return this.m(tree.children[favouriteChild]);
  }
  /**
   * Returns the innermost shell executable running in the terminal
   */
  async getShellName() {
    if (this.q.isDisposed) {
      return Promise.resolve("");
    }
    if (this.a) {
      return this.a;
    }
    if (!windowsProcessTree) {
      windowsProcessTree = await import("@vscode/windows-process-tree");
    }
    this.a = new Promise((resolve) => {
      windowsProcessTree.getProcessTree(this.h, (tree) => {
        const name = this.m(tree);
        this.a = void 0;
        resolve(name);
      });
    });
    return this.a;
  }
  getShellType(executable) {
    switch (executable.toLowerCase()) {
      case "cmd.exe":
        return "cmd";
      case "powershell.exe":
      case "pwsh.exe":
        return "pwsh";
      case "bash.exe":
      case "git-cmd.exe":
        return "gitbash";
      case "julialauncher.exe":
        return "julia";
      case "nu.exe":
        return "nu";
      case "wsl.exe":
      case "ubuntu.exe":
      case "ubuntu1804.exe":
      case "kali.exe":
      case "debian.exe":
      case "opensuse-42.exe":
      case "sles-12.exe":
        return "wsl";
      default:
        if (executable.match(/python(\d(\.\d{0,2})?)?\.exe/)) {
          return "python";
        }
        return void 0;
    }
  }
};
__decorate([
  $qi(500)
], $ipc.prototype, "checkShell", null);

// out-build/vs/platform/terminal/node/terminalProcess.js
import { spawn } from "node-pty";

// out-build/vs/platform/terminal/common/terminalProcess.js
var Constants2;
(function(Constants5) {
  Constants5[Constants5["WriteMaxChunkSize"] = 50] = "WriteMaxChunkSize";
})(Constants2 || (Constants2 = {}));
function $Is(data) {
  const chunks = [];
  let nextChunkStartIndex = 0;
  for (let i = 0; i < data.length - 1; i++) {
    if (
      // If the max chunk size is reached
      i - nextChunkStartIndex + 1 >= 50 || // If the next character is ESC, send the pending data to avoid splitting the escape
      // sequence.
      data[i + 1] === "\x1B"
    ) {
      chunks.push(data.substring(nextChunkStartIndex, i + 1));
      nextChunkStartIndex = i + 1;
      i++;
    }
  }
  if (nextChunkStartIndex !== data.length) {
    chunks.push(data.substring(nextChunkStartIndex));
  }
  return chunks;
}

// out-build/vs/platform/terminal/node/terminalProcess.js
var $jpc_1;
var ShutdownConstants;
(function(ShutdownConstants2) {
  ShutdownConstants2[ShutdownConstants2["DataFlushTimeout"] = 250] = "DataFlushTimeout";
  ShutdownConstants2[ShutdownConstants2["MaximumShutdownTime"] = 5e3] = "MaximumShutdownTime";
})(ShutdownConstants || (ShutdownConstants = {}));
var Constants3;
(function(Constants5) {
  Constants5[Constants5["KillSpawnThrottleInterval"] = 250] = "KillSpawnThrottleInterval";
  Constants5[Constants5["KillSpawnSpacingDuration"] = 50] = "KillSpawnSpacingDuration";
  Constants5[Constants5["WriteInterval"] = 5] = "WriteInterval";
})(Constants3 || (Constants3 = {}));
var posixShellTypeMap = /* @__PURE__ */ new Map([
  [
    "bash",
    "bash"
    /* PosixShellType.Bash */
  ],
  [
    "csh",
    "csh"
    /* PosixShellType.Csh */
  ],
  [
    "fish",
    "fish"
    /* PosixShellType.Fish */
  ],
  [
    "ksh",
    "ksh"
    /* PosixShellType.Ksh */
  ],
  [
    "sh",
    "sh"
    /* PosixShellType.Sh */
  ],
  [
    "zsh",
    "zsh"
    /* PosixShellType.Zsh */
  ]
]);
var generalShellTypeMap = /* @__PURE__ */ new Map([
  [
    "pwsh",
    "pwsh"
    /* GeneralShellType.PowerShell */
  ],
  [
    "python",
    "python"
    /* GeneralShellType.Python */
  ],
  [
    "julia",
    "julia"
    /* GeneralShellType.Julia */
  ],
  [
    "nu",
    "nu"
    /* GeneralShellType.NuShell */
  ]
]);
var $jpc = class $jpc2 extends $9c {
  static {
    $jpc_1 = this;
  }
  static {
    this.b = 0;
  }
  get exitMessage() {
    return this.h;
  }
  get currentTitle() {
    return this.t?.shellTitle || this.n;
  }
  get shellType() {
    return $l ? this.t?.shellType : posixShellTypeMap.get(this.n) || generalShellTypeMap.get(this.n);
  }
  get hasChildProcesses() {
    return this.u?.hasChildProcesses || false;
  }
  constructor(shellLaunchConfig, cwd2, cols, rows, env2, N, O, P, Q) {
    super();
    this.shellLaunchConfig = shellLaunchConfig;
    this.N = N;
    this.O = O;
    this.P = P;
    this.Q = Q;
    this.id = 0;
    this.shouldPersist = false;
    this.a = {
      cwd: "",
      initialCwd: "",
      fixedDimensions: { cols: void 0, rows: void 0 },
      title: "",
      shellType: void 0,
      hasChildProcesses: true,
      resolvedShellLaunchConfig: {},
      overrideDimensions: void 0,
      failedShellIntegrationActivation: false,
      usedShellIntegrationInjection: void 0
    };
    this.n = "";
    this.w = null;
    this.y = [];
    this.G = false;
    this.H = 0;
    this.I = this.B(new $Ce());
    this.onProcessData = this.I.event;
    this.J = this.B(new $Ce());
    this.onProcessReady = this.J.event;
    this.L = this.B(new $Ce());
    this.onDidChangeProperty = this.L.event;
    this.M = this.B(new $Ce());
    this.onProcessExit = this.M.event;
    let name;
    if ($l) {
      name = $zc(this.shellLaunchConfig.executable || "");
    } else {
      name = "xterm-256color";
    }
    this.D = cwd2;
    this.a[
      "initialCwd"
      /* ProcessPropertyType.InitialCwd */
    ] = this.D;
    this.a[
      "cwd"
      /* ProcessPropertyType.Cwd */
    ] = this.D;
    const useConpty = this.O.windowsEnableConpty && process.platform === "win32" && $8s() >= 18309;
    const useConptyDll = useConpty && this.O.windowsUseConptyDll;
    this.F = {
      name,
      cwd: cwd2,
      // TODO: When node-pty is updated this cast can be removed
      env: env2,
      cols,
      rows,
      useConpty,
      useConptyDll,
      // This option will force conpty to not redraw the whole viewport on launch
      conptyInheritCursor: useConpty && !!shellLaunchConfig.initialText
    };
    if ($l) {
      if (useConpty && cols === 0 && rows === 0 && this.shellLaunchConfig.executable?.endsWith("Git\\bin\\bash.exe")) {
        this.C = new DelayedResizer();
        this.B(this.C.onTrigger((dimensions) => {
          this.C?.dispose();
          this.C = void 0;
          if (dimensions.cols && dimensions.rows) {
            this.resize(dimensions.cols, dimensions.rows);
          }
        }));
      }
      this.onProcessReady((e) => {
        this.t = this.B(new $ipc(e.pid));
        this.B(this.t.onShellTypeChanged((e2) => this.L.fire({ type: "shellType", value: e2 })));
        this.B(this.t.onShellNameChanged((e2) => this.L.fire({ type: "title", value: e2 })));
      });
    }
    this.B($7c(() => {
      if (this.w) {
        clearInterval(this.w);
        this.w = null;
      }
    }));
  }
  async start() {
    const results = await Promise.all([this.R(), this.S()]);
    const firstError = results.find((r) => r !== void 0);
    if (firstError) {
      return firstError;
    }
    let injection;
    if (this.O.shellIntegration.enabled) {
      injection = $0s(this.shellLaunchConfig, this.O, this.F.env, this.P, this.Q);
      if (injection) {
        this.L.fire({ type: "usedShellIntegrationInjection", value: true });
        if (injection.envMixin) {
          for (const [key, value] of Object.entries(injection.envMixin)) {
            this.F.env ||= {};
            this.F.env[key] = value;
          }
        }
        if (injection.filesToCopy) {
          for (const f of injection.filesToCopy) {
            try {
              await fs2.promises.mkdir($yc(f.dest), { recursive: true });
              await fs2.promises.copyFile(f.source, f.dest);
            } catch {
            }
          }
        }
      } else {
        this.L.fire({ type: "failedShellIntegrationActivation", value: true });
      }
    }
    try {
      await this.U(this.shellLaunchConfig, this.F, injection);
      if (injection?.newArgs) {
        return { injectedArgs: injection.newArgs };
      }
      return void 0;
    } catch (err) {
      this.P.trace("node-pty.node-pty.IPty#spawn native exception", err);
      return { message: `A native exception occurred during launch (${err.message})` };
    }
  }
  async R() {
    try {
      const result = await fs2.promises.stat(this.D);
      if (!result.isDirectory()) {
        return { message: localize(2129, null, this.D.toString()) };
      }
    } catch (err) {
      if (err?.code === "ENOENT") {
        return { message: localize(2130, null, this.D.toString()) };
      }
    }
    this.L.fire({ type: "initialCwd", value: this.D });
    return void 0;
  }
  async S() {
    const slc = this.shellLaunchConfig;
    if (!slc.executable) {
      throw new Error("IShellLaunchConfig.executable not set");
    }
    const cwd2 = slc.cwd instanceof URI ? slc.cwd.path : slc.cwd;
    const envPaths = slc.env && slc.env.PATH ? slc.env.PATH.split($Fc) : void 0;
    const executable = await $9s(slc.executable, cwd2, envPaths, this.N);
    if (!executable) {
      return { message: localize(2131, null, slc.executable) };
    }
    try {
      const result = await fs2.promises.stat(executable);
      if (!result.isFile() && !result.isSymbolicLink()) {
        return { message: localize(2132, null, slc.executable) };
      }
      slc.executable = executable;
    } catch (err) {
      if (err?.code === "EACCES") {
      } else {
        throw err;
      }
    }
    return void 0;
  }
  async U(shellLaunchConfig, options, shellIntegrationInjection) {
    const args = shellIntegrationInjection?.newArgs || shellLaunchConfig.args || [];
    await this.Z();
    this.P.trace("node-pty.IPty#spawn", shellLaunchConfig.executable, args, options);
    const ptyProcess = spawn(shellLaunchConfig.executable, args, options);
    this.m = ptyProcess;
    this.u = this.B(new $gpc(ptyProcess.pid, this.P));
    this.u.onDidChangeHasChildProcesses((value) => this.L.fire({ type: "hasChildProcesses", value }));
    this.s = new Promise((c) => {
      this.onProcessReady(() => c());
    });
    ptyProcess.onData((data) => {
      this.H += data.length;
      if (!this.G && this.H > 1e5) {
        this.P.trace(`Flow control: Pause (${this.H} > ${1e5})`);
        this.G = true;
        ptyProcess.pause();
      }
      this.P.trace("node-pty.IPty#onData", data);
      this.I.fire(data);
      if (this.j) {
        this.X();
      }
      this.t?.checkShell();
      this.u?.handleOutput();
    });
    ptyProcess.onExit((e) => {
      this.g = e.exitCode;
      this.X();
    });
    this.$(ptyProcess.pid);
    this.W(ptyProcess);
  }
  W(ptyProcess) {
    setTimeout(() => this.ab(ptyProcess));
    if (!$l) {
      this.w = setInterval(() => {
        if (this.n !== ptyProcess.process) {
          this.ab(ptyProcess);
        }
      }, 200);
    }
  }
  // Allow any trailing data events to be sent before the exit event is sent.
  // See https://github.com/Tyriar/node-pty/issues/72
  X() {
    if (this.P.getLevel() === LogLevel.Trace) {
      this.P.trace("TerminalProcess#_queueProcessExit", new Error().stack?.replace(/^Error/, ""));
    }
    if (this.j) {
      clearTimeout(this.j);
    }
    this.j = setTimeout(
      () => {
        this.j = void 0;
        this.Y();
      },
      250
      /* ShutdownConstants.DataFlushTimeout */
    );
  }
  async Y() {
    await this.s;
    if (this.q.isDisposed) {
      return;
    }
    try {
      if (this.m) {
        await this.Z();
        this.P.trace("node-pty.IPty#kill");
        this.m.kill();
      }
    } catch (ex) {
    }
    this.M.fire(this.g || 0);
    this.dispose();
  }
  async Z() {
    if (!$l || !("useConpty" in this.F) || !this.F.useConpty) {
      return;
    }
    while (Date.now() - $jpc_1.b < 250) {
      this.P.trace("Throttling kill/spawn call");
      await $Yh(
        250 - (Date.now() - $jpc_1.b) + 50
        /* Constants.KillSpawnSpacingDuration */
      );
    }
    $jpc_1.b = Date.now();
  }
  $(pid) {
    this.J.fire({
      pid,
      cwd: this.D,
      windowsPty: this.getWindowsPty()
    });
  }
  ab(ptyProcess) {
    if (this.q.isDisposed) {
      return;
    }
    this.n = ptyProcess.process ?? "";
    this.L.fire({ type: "title", value: this.n });
    const sanitizedTitle = this.currentTitle.replace(/ \(figterm\)$/g, "");
    if (sanitizedTitle.toLowerCase().startsWith("python")) {
      this.L.fire({
        type: "shellType",
        value: "python"
        /* GeneralShellType.Python */
      });
    } else if (sanitizedTitle.toLowerCase().startsWith("julia")) {
      this.L.fire({
        type: "shellType",
        value: "julia"
        /* GeneralShellType.Julia */
      });
    } else {
      const shellTypeValue = posixShellTypeMap.get(sanitizedTitle) || generalShellTypeMap.get(sanitizedTitle);
      this.L.fire({ type: "shellType", value: shellTypeValue });
    }
  }
  shutdown(immediate) {
    if (this.P.getLevel() === LogLevel.Trace) {
      this.P.trace("TerminalProcess#shutdown", new Error().stack?.replace(/^Error/, ""));
    }
    if (immediate && !$l) {
      this.Y();
    } else {
      if (!this.j && !this.q.isDisposed) {
        this.X();
        setTimeout(
          () => {
            if (this.j && !this.q.isDisposed) {
              this.j = void 0;
              this.Y();
            }
          },
          5e3
          /* ShutdownConstants.MaximumShutdownTime */
        );
      }
    }
  }
  input(data, isBinary = false) {
    if (this.q.isDisposed || !this.m) {
      return;
    }
    this.y.push(...$Is(data).map((e) => {
      return { isBinary, data: e };
    }));
    this.bb();
  }
  async processBinary(data) {
    this.input(data, true);
  }
  async refreshProperty(type) {
    switch (type) {
      case "cwd": {
        const newCwd = await this.getCwd();
        if (newCwd !== this.a.cwd) {
          this.a.cwd = newCwd;
          this.L.fire({ type: "cwd", value: this.a.cwd });
        }
        return newCwd;
      }
      case "initialCwd": {
        const initialCwd = await this.getInitialCwd();
        if (initialCwd !== this.a.initialCwd) {
          this.a.initialCwd = initialCwd;
          this.L.fire({ type: "initialCwd", value: this.a.initialCwd });
        }
        return initialCwd;
      }
      case "title":
        return this.currentTitle;
      default:
        return this.shellType;
    }
  }
  async updateProperty(type, value) {
    if (type === "fixedDimensions") {
      this.a.fixedDimensions = value;
    }
  }
  bb() {
    if (this.z !== void 0 || this.y.length === 0) {
      return;
    }
    this.cb();
    if (this.y.length === 0) {
      this.z = void 0;
      return;
    }
    this.z = setTimeout(
      () => {
        this.z = void 0;
        this.bb();
      },
      5
      /* Constants.WriteInterval */
    );
  }
  cb() {
    const object = this.y.shift();
    this.P.trace("node-pty.IPty#write", object.data);
    if (object.isBinary) {
      this.m.write(Buffer.from(object.data, "binary"));
    } else {
      this.m.write(object.data);
    }
    this.u?.handleInput();
  }
  resize(cols, rows) {
    if (this.q.isDisposed) {
      return;
    }
    if (typeof cols !== "number" || typeof rows !== "number" || isNaN(cols) || isNaN(rows)) {
      return;
    }
    if (this.m) {
      cols = Math.max(cols, 1);
      rows = Math.max(rows, 1);
      if (this.C) {
        this.C.cols = cols;
        this.C.rows = rows;
        return;
      }
      this.P.trace("node-pty.IPty#resize", cols, rows);
      try {
        this.m.resize(cols, rows);
      } catch (e) {
        this.P.trace("node-pty.IPty#resize exception " + e.message);
        if (this.g !== void 0 && e.message !== "ioctl(2) failed, EBADF" && e.message !== "Cannot resize a pty that has already exited") {
          throw e;
        }
      }
    }
  }
  clearBuffer() {
    this.m?.clear();
  }
  acknowledgeDataEvent(charCount) {
    this.H = Math.max(this.H - charCount, 0);
    this.P.trace(`Flow control: Ack ${charCount} chars (unacknowledged: ${this.H})`);
    if (this.G && this.H < 5e3) {
      this.P.trace(`Flow control: Resume (${this.H} < ${5e3})`);
      this.m?.resume();
      this.G = false;
    }
  }
  clearUnacknowledgedChars() {
    this.H = 0;
    this.P.trace(`Flow control: Cleared all unacknowledged chars, forcing resume`);
    if (this.G) {
      this.m?.resume();
      this.G = false;
    }
  }
  async setUnicodeVersion(version) {
  }
  getInitialCwd() {
    return Promise.resolve(this.D);
  }
  async getCwd() {
    if ($m) {
      return new Promise((resolve) => {
        if (!this.m) {
          resolve(this.D);
          return;
        }
        this.P.trace("node-pty.IPty#pid");
        exec2("lsof -OPln -p " + this.m.pid + " | grep cwd", { env: { ...process.env, LANG: "en_US.UTF-8" } }, (error, stdout, stderr) => {
          if (!error && stdout !== "") {
            resolve(stdout.substring(stdout.indexOf("/"), stdout.length - 1));
          } else {
            this.P.error("lsof did not run successfully, it may not be on the $PATH?", error, stdout, stderr);
            resolve(this.D);
          }
        });
      });
    }
    if ($n) {
      if (!this.m) {
        return this.D;
      }
      this.P.trace("node-pty.IPty#pid");
      try {
        return await fs2.promises.readlink(`/proc/${this.m.pid}/cwd`);
      } catch (error) {
        return this.D;
      }
    }
    return this.D;
  }
  getWindowsPty() {
    return $l ? {
      backend: "useConpty" in this.F && this.F.useConpty ? "conpty" : "winpty",
      buildNumber: $8s()
    } : void 0;
  }
};
$jpc = $jpc_1 = __decorate([
  __param(7, $sk),
  __param(8, $Lk)
], $jpc);
var DelayedResizer = class extends $9c {
  get onTrigger() {
    return this.b.event;
  }
  constructor() {
    super();
    this.b = this.B(new $Ce());
    this.a = setTimeout(() => {
      this.b.fire({ rows: this.rows, cols: this.cols });
    }, 1e3);
    this.B($7c(() => clearTimeout(this.a)));
  }
};

// out-build/vs/platform/terminal/common/terminalAutoResponder.js
var $epc = class extends $9c {
  constructor(proc, matchWord, response, logService) {
    super();
    this.a = 0;
    this.b = false;
    this.c = false;
    this.B(proc.onProcessData((e) => {
      if (this.b || this.c) {
        return;
      }
      const data = typeof e === "string" ? e : e.data;
      for (let i = 0; i < data.length; i++) {
        if (data[i] === matchWord[this.a]) {
          this.a++;
        } else {
          this.f();
        }
        if (this.a === matchWord.length) {
          logService.debug(`Auto reply match: "${matchWord}", response: "${response}"`);
          proc.input(response);
          this.c = true;
          $Yh(1e3).then(() => this.c = false);
          this.f();
        }
      }
    }));
  }
  f() {
    this.a = 0;
  }
  /**
   * No auto response will happen after a resize on Windows in case the resize is a result of
   * reprinting the screen.
   */
  handleResize() {
    if ($l) {
      this.b = true;
    }
  }
  handleInput() {
    this.b = false;
  }
};

// out-build/vs/platform/terminal/common/capabilities/terminalCapabilityStore.js
var $7zb = class extends $9c {
  constructor() {
    super(...arguments);
    this.a = /* @__PURE__ */ new Map();
    this.b = this.B(new $Ce());
    this.onDidRemoveCapabilityType = this.b.event;
    this.f = this.B(new $Ce());
    this.onDidAddCapabilityType = this.f.event;
    this.g = this.B(new $Ce());
    this.onDidRemoveCapability = this.g.event;
    this.h = this.B(new $Ce());
    this.onDidAddCapability = this.h.event;
  }
  get items() {
    return this.a.keys();
  }
  add(capability, impl) {
    this.a.set(capability, impl);
    this.f.fire(capability);
    this.h.fire({ id: capability, capability: impl });
  }
  get(capability) {
    return this.a.get(capability);
  }
  remove(capability) {
    const impl = this.a.get(capability);
    if (!impl) {
      return;
    }
    this.a.delete(capability);
    this.b.fire(capability);
    this.h.fire({ id: capability, capability: impl });
  }
  has(capability) {
    return this.a.has(capability);
  }
};

// out-build/vs/platform/terminal/common/capabilities/commandDetection/terminalCommand.js
var $Gs = class _$Gs {
  get command() {
    return this.b.command;
  }
  get commandLineConfidence() {
    return this.b.commandLineConfidence;
  }
  get isTrusted() {
    return this.b.isTrusted;
  }
  get timestamp() {
    return this.b.timestamp;
  }
  get duration() {
    return this.b.duration;
  }
  get promptStartMarker() {
    return this.b.promptStartMarker;
  }
  get marker() {
    return this.b.marker;
  }
  get endMarker() {
    return this.b.endMarker;
  }
  set endMarker(value) {
    this.b.endMarker = value;
  }
  get executedMarker() {
    return this.b.executedMarker;
  }
  get aliases() {
    return this.b.aliases;
  }
  get wasReplayed() {
    return this.b.wasReplayed;
  }
  get cwd() {
    return this.b.cwd;
  }
  get exitCode() {
    return this.b.exitCode;
  }
  get commandStartLineContent() {
    return this.b.commandStartLineContent;
  }
  get markProperties() {
    return this.b.markProperties;
  }
  get executedX() {
    return this.b.executedX;
  }
  get startX() {
    return this.b.startX;
  }
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
  static deserialize(xterm, serialized, isCommandStorageDisabled) {
    const buffer = xterm.buffer.normal;
    const marker = serialized.startLine !== void 0 ? xterm.registerMarker(serialized.startLine - (buffer.baseY + buffer.cursorY)) : void 0;
    if (!marker) {
      return void 0;
    }
    const promptStartMarker = serialized.promptStartLine !== void 0 ? xterm.registerMarker(serialized.promptStartLine - (buffer.baseY + buffer.cursorY)) : void 0;
    const endMarker = serialized.endLine !== void 0 ? xterm.registerMarker(serialized.endLine - (buffer.baseY + buffer.cursorY)) : void 0;
    const executedMarker = serialized.executedLine !== void 0 ? xterm.registerMarker(serialized.executedLine - (buffer.baseY + buffer.cursorY)) : void 0;
    const newCommand = new _$Gs(xterm, {
      command: isCommandStorageDisabled ? "" : serialized.command,
      commandLineConfidence: serialized.commandLineConfidence ?? "low",
      isTrusted: serialized.isTrusted,
      promptStartMarker,
      marker,
      startX: serialized.startX,
      endMarker,
      executedMarker,
      executedX: serialized.executedX,
      timestamp: serialized.timestamp,
      duration: serialized.duration,
      cwd: serialized.cwd,
      commandStartLineContent: serialized.commandStartLineContent,
      exitCode: serialized.exitCode,
      markProperties: serialized.markProperties,
      aliases: void 0,
      wasReplayed: true
    });
    return newCommand;
  }
  serialize(isCommandStorageDisabled) {
    return {
      promptStartLine: this.promptStartMarker?.line,
      startLine: this.marker?.line,
      startX: void 0,
      endLine: this.endMarker?.line,
      executedLine: this.executedMarker?.line,
      executedX: this.executedX,
      command: isCommandStorageDisabled ? "" : this.command,
      commandLineConfidence: isCommandStorageDisabled ? "low" : this.commandLineConfidence,
      isTrusted: this.isTrusted,
      cwd: this.cwd,
      exitCode: this.exitCode,
      commandStartLineContent: this.commandStartLineContent,
      timestamp: this.timestamp,
      duration: this.duration,
      markProperties: this.markProperties
    };
  }
  extractCommandLine() {
    return extractCommandLine(this.a.buffer.active, this.a.cols, this.marker, this.startX, this.executedMarker, this.executedX);
  }
  getOutput() {
    if (!this.executedMarker || !this.endMarker) {
      return void 0;
    }
    const startLine = this.executedMarker.line;
    const endLine = this.endMarker.line;
    if (startLine === endLine) {
      return void 0;
    }
    let output = "";
    let line;
    for (let i = startLine; i < endLine; i++) {
      line = this.a.buffer.active.getLine(i);
      if (!line) {
        continue;
      }
      output += line.translateToString(!line.isWrapped) + (line.isWrapped ? "" : "\n");
    }
    return output === "" ? void 0 : output;
  }
  getOutputMatch(outputMatcher) {
    if (!this.executedMarker || !this.endMarker) {
      return void 0;
    }
    const endLine = this.endMarker.line;
    if (endLine === -1) {
      return void 0;
    }
    const buffer = this.a.buffer.active;
    const startLine = Math.max(this.executedMarker.line, 0);
    const matcher = outputMatcher.lineMatcher;
    const linesToCheck = typeof matcher === "string" ? 1 : outputMatcher.length || countNewLines(matcher);
    const lines = [];
    let match;
    if (outputMatcher.anchor === "bottom") {
      for (let i = endLine - (outputMatcher.offset || 0); i >= startLine; i--) {
        let wrappedLineStart = i;
        const wrappedLineEnd = i;
        while (wrappedLineStart >= startLine && buffer.getLine(wrappedLineStart)?.isWrapped) {
          wrappedLineStart--;
        }
        i = wrappedLineStart;
        lines.unshift(getXtermLineContent(buffer, wrappedLineStart, wrappedLineEnd, this.a.cols));
        if (!match) {
          match = lines[0].match(matcher);
        }
        if (lines.length >= linesToCheck) {
          break;
        }
      }
    } else {
      for (let i = startLine + (outputMatcher.offset || 0); i < endLine; i++) {
        const wrappedLineStart = i;
        let wrappedLineEnd = i;
        while (wrappedLineEnd + 1 < endLine && buffer.getLine(wrappedLineEnd + 1)?.isWrapped) {
          wrappedLineEnd++;
        }
        i = wrappedLineEnd;
        lines.push(getXtermLineContent(buffer, wrappedLineStart, wrappedLineEnd, this.a.cols));
        if (!match) {
          match = lines[lines.length - 1].match(matcher);
        }
        if (lines.length >= linesToCheck) {
          break;
        }
      }
    }
    return match ? { regexMatch: match, outputLines: lines } : void 0;
  }
  hasOutput() {
    return !this.executedMarker?.isDisposed && !this.endMarker?.isDisposed && !!(this.executedMarker && this.endMarker && this.executedMarker.line < this.endMarker.line);
  }
  getPromptRowCount() {
    return getPromptRowCount(this, this.a.buffer.active);
  }
  getCommandRowCount() {
    return getCommandRowCount(this);
  }
};
var $Hs = class {
  constructor(c) {
    this.c = c;
  }
  serialize(cwd2) {
    if (!this.commandStartMarker) {
      return void 0;
    }
    return {
      promptStartLine: this.promptStartMarker?.line,
      startLine: this.commandStartMarker.line,
      startX: this.commandStartX,
      endLine: void 0,
      executedLine: void 0,
      executedX: void 0,
      command: "",
      commandLineConfidence: "low",
      isTrusted: true,
      cwd: cwd2,
      exitCode: void 0,
      commandStartLineContent: void 0,
      timestamp: 0,
      duration: 0,
      markProperties: void 0
    };
  }
  promoteToFullCommand(cwd2, exitCode, ignoreCommandLine, markProperties) {
    if (exitCode === void 0 && this.command === void 0) {
      this.command = "";
    }
    if (this.command !== void 0 && !this.command.startsWith("\\") || ignoreCommandLine) {
      return new $Gs(this.c, {
        command: ignoreCommandLine ? "" : this.command || "",
        commandLineConfidence: ignoreCommandLine ? "low" : this.commandLineConfidence || "low",
        isTrusted: !!this.isTrusted,
        promptStartMarker: this.promptStartMarker,
        marker: this.commandStartMarker,
        startX: this.commandStartX,
        endMarker: this.commandFinishedMarker,
        executedMarker: this.commandExecutedMarker,
        executedX: this.commandExecutedX,
        timestamp: Date.now(),
        duration: this.b || 0,
        cwd: cwd2,
        exitCode,
        commandStartLineContent: this.commandStartLineContent,
        markProperties
      });
    }
    return void 0;
  }
  markExecutedTime() {
    if (this.a === void 0) {
      this.a = Date.now();
    }
  }
  markFinishedTime() {
    if (this.b === void 0 && this.a !== void 0) {
      this.b = Date.now() - this.a;
    }
  }
  extractCommandLine() {
    return extractCommandLine(this.c.buffer.active, this.c.cols, this.commandStartMarker, this.commandStartX, this.commandExecutedMarker, this.commandExecutedX);
  }
  getPromptRowCount() {
    return getPromptRowCount(this, this.c.buffer.active);
  }
  getCommandRowCount() {
    return getCommandRowCount(this);
  }
};
function extractCommandLine(buffer, cols, commandStartMarker, commandStartX, commandExecutedMarker, commandExecutedX) {
  if (!commandStartMarker || !commandExecutedMarker || commandStartX === void 0 || commandExecutedX === void 0) {
    return "";
  }
  let content = "";
  for (let i = commandStartMarker.line; i <= commandExecutedMarker.line; i++) {
    const line = buffer.getLine(i);
    if (line) {
      content += line.translateToString(true, i === commandStartMarker.line ? commandStartX : 0, i === commandExecutedMarker.line ? commandExecutedX : cols);
    }
  }
  return content;
}
function getXtermLineContent(buffer, lineStart, lineEnd, cols) {
  const maxLineLength = Math.max(2048 / cols * 2);
  lineEnd = Math.min(lineEnd, lineStart + maxLineLength);
  let content = "";
  for (let i = lineStart; i <= lineEnd; i++) {
    const line = buffer.getLine(i);
    if (line) {
      content += line.translateToString(true, 0, cols);
    }
  }
  return content;
}
function countNewLines(regex) {
  if (!regex.multiline) {
    return 1;
  }
  const source = regex.source;
  let count = 1;
  let i = source.indexOf("\\n");
  while (i !== -1) {
    count++;
    i = source.indexOf("\\n", i + 1);
  }
  return count;
}
function getPromptRowCount(command, buffer) {
  const marker = "hasOutput" in command ? command.marker : command.commandStartMarker;
  if (!marker || !command.promptStartMarker) {
    return 1;
  }
  let promptRowCount = 1;
  let promptStartLine = command.promptStartMarker.line;
  while (promptStartLine < marker.line && (buffer.getLine(promptStartLine)?.translateToString(true) ?? "").length === 0) {
    promptStartLine++;
  }
  promptRowCount = marker.line - promptStartLine + 1;
  return promptRowCount;
}
function getCommandRowCount(command) {
  const marker = "hasOutput" in command ? command.marker : command.commandStartMarker;
  const executedMarker = "hasOutput" in command ? command.executedMarker : command.commandExecutedMarker;
  if (!marker || !executedMarker) {
    return 1;
  }
  const commandExecutedLine = Math.max(executedMarker.line, marker.line);
  let commandRowCount = commandExecutedLine - marker.line + 1;
  const executedX = "hasOutput" in command ? command.executedX : command.commandExecutedX;
  if (executedX === 0) {
    commandRowCount--;
  }
  return commandRowCount;
}

// out-build/vs/platform/terminal/common/capabilities/commandDetection/promptInputModel.js
var PromptInputState;
(function(PromptInputState2) {
  PromptInputState2[PromptInputState2["Unknown"] = 0] = "Unknown";
  PromptInputState2[PromptInputState2["Input"] = 1] = "Input";
  PromptInputState2[PromptInputState2["Execute"] = 2] = "Execute";
})(PromptInputState || (PromptInputState = {}));
var $Fs = class $Fs2 extends $9c {
  get value() {
    return this.j;
  }
  get prefix() {
    return this.j.substring(0, this.m);
  }
  get suffix() {
    return this.j.substring(this.m, this.n === -1 ? void 0 : this.n);
  }
  get cursorIndex() {
    return this.m;
  }
  get ghostTextIndex() {
    return this.n;
  }
  constructor(w, onCommandStart, onCommandExecuted, z) {
    super();
    this.w = w;
    this.z = z;
    this.a = 0;
    this.c = 0;
    this.h = "";
    this.j = "";
    this.m = 0;
    this.n = -1;
    this.r = this.B(new $Ce());
    this.onDidStartInput = this.r.event;
    this.s = this.B(new $Ce());
    this.onDidChangeInput = this.s.event;
    this.t = this.B(new $Ce());
    this.onDidFinishInput = this.t.event;
    this.u = this.B(new $Ce());
    this.onDidInterrupt = this.u.event;
    this.B(Event.any(this.w.onCursorMove, this.w.onData, this.w.onWriteParsed)(() => this.G()));
    this.B(this.w.onData((e) => this.I(e)));
    this.B(onCommandStart((e) => this.D(e)));
    this.B(onCommandExecuted(() => this.F()));
    this.B(this.onDidStartInput(() => this.C("PromptInputModel#onDidStartInput")));
    this.B(this.onDidChangeInput(() => this.C("PromptInputModel#onDidChangeInput")));
    this.B(this.onDidFinishInput(() => this.C("PromptInputModel#onDidFinishInput")));
    this.B(this.onDidInterrupt(() => this.C("PromptInputModel#onDidInterrupt")));
  }
  C(message) {
    if (this.z.getLevel() === LogLevel.Trace) {
      this.z.trace(message, this.getCombinedString());
    }
  }
  setContinuationPrompt(value) {
    this.g = value;
    this.G();
  }
  setLastPromptLine(value) {
    this.f = value;
    this.G();
  }
  setConfidentCommandLine(value) {
    if (this.j !== value) {
      this.j = value;
      this.m = -1;
      this.n = -1;
      this.s.fire(this.Q());
    }
  }
  getCombinedString() {
    const value = this.j.replaceAll("\n", "\u23CE");
    if (this.m === -1) {
      return value;
    }
    let result = `${value.substring(0, this.cursorIndex)}|`;
    if (this.ghostTextIndex !== -1) {
      result += `${value.substring(this.cursorIndex, this.ghostTextIndex)}[`;
      result += `${value.substring(this.ghostTextIndex)}]`;
    } else {
      result += value.substring(this.cursorIndex);
    }
    return result;
  }
  serialize() {
    return {
      modelState: this.Q(),
      commandStartX: this.c,
      lastPromptLine: this.f,
      continuationPrompt: this.g,
      lastUserInput: this.h
    };
  }
  deserialize(serialized) {
    this.j = serialized.modelState.value;
    this.m = serialized.modelState.cursorIndex;
    this.n = serialized.modelState.ghostTextIndex;
    this.c = serialized.commandStartX;
    this.f = serialized.lastPromptLine;
    this.g = serialized.continuationPrompt;
    this.h = serialized.lastUserInput;
  }
  D(command) {
    if (this.a === 1) {
      return;
    }
    this.a = 1;
    this.b = command.marker;
    this.c = this.w.buffer.active.cursorX;
    this.j = "";
    this.m = 0;
    this.r.fire(this.Q());
    this.s.fire(this.Q());
    if (this.f) {
      if (this.c !== this.f.length) {
        const line = this.w.buffer.active.getLine(this.b.line);
        if (line?.translateToString(true).startsWith(this.f)) {
          this.c = this.f.length;
          this.G();
        }
      }
    }
  }
  F() {
    if (this.a === 2) {
      return;
    }
    this.m = -1;
    if (this.n !== -1) {
      this.j = this.j.substring(0, this.n);
      this.n = -1;
    }
    const event = this.Q();
    if (this.h === "") {
      this.h = "";
      this.u.fire(event);
    }
    this.a = 2;
    this.t.fire(event);
    this.s.fire(event);
  }
  G() {
    try {
      this.H();
    } catch (e) {
      this.z.error("Error while syncing prompt input model", e);
    }
  }
  H() {
    if (this.a !== 1) {
      return;
    }
    const commandStartY = this.b?.line;
    if (commandStartY === void 0) {
      return;
    }
    const buffer = this.w.buffer.active;
    let line = buffer.getLine(commandStartY);
    const commandLine = line?.translateToString(true, this.c);
    if (!line || commandLine === void 0) {
      this.z.trace(`PromptInputModel#_sync: no line`);
      return;
    }
    const absoluteCursorY = buffer.baseY + buffer.cursorY;
    let value = commandLine;
    let ghostTextIndex = -1;
    let cursorIndex;
    if (absoluteCursorY === commandStartY) {
      cursorIndex = this.O(this.c, buffer, line);
    } else {
      cursorIndex = commandLine.trimEnd().length;
    }
    if (absoluteCursorY === commandStartY && buffer.cursorX > 1) {
      ghostTextIndex = this.J(buffer, line, cursorIndex);
    }
    for (let y = commandStartY + 1; y <= absoluteCursorY; y++) {
      line = buffer.getLine(y);
      const lineText = line?.translateToString(true);
      if (lineText && line) {
        if (line.isWrapped) {
          value += lineText;
          const relativeCursorIndex = this.O(0, buffer, line);
          if (absoluteCursorY === y) {
            cursorIndex += relativeCursorIndex;
          } else {
            cursorIndex += lineText.length;
          }
        } else if (this.g === void 0 || this.M(lineText)) {
          const trimmedLineText = this.L(lineText);
          value += `
${trimmedLineText}`;
          if (absoluteCursorY === y) {
            const continuationCellWidth = this.N(line, lineText);
            const relativeCursorIndex = this.O(continuationCellWidth, buffer, line);
            cursorIndex += relativeCursorIndex + 1;
          } else {
            cursorIndex += trimmedLineText.length + 1;
          }
        } else {
          break;
        }
      }
    }
    for (let y = absoluteCursorY + 1; y < buffer.baseY + this.w.rows; y++) {
      line = buffer.getLine(y);
      const lineText = line?.translateToString(true);
      if (lineText && line) {
        if (this.g === void 0 || this.M(lineText)) {
          value += `
${this.L(lineText)}`;
        } else {
          break;
        }
      } else {
        break;
      }
    }
    if (this.z.getLevel() === LogLevel.Trace) {
      this.z.trace(`PromptInputModel#_sync: ${this.getCombinedString()}`);
    }
    {
      let trailingWhitespace = this.j.length - this.j.trimEnd().length;
      if (this.h === "\x7F") {
        this.h = "";
        if (cursorIndex === this.m - 1) {
          if (this.j.trimEnd().length > value.trimEnd().length && value.trimEnd().length <= cursorIndex) {
            trailingWhitespace = Math.max(this.j.length - 1 - value.trimEnd().length, 0);
          } else {
            trailingWhitespace = Math.max(trailingWhitespace - 1, 0);
          }
        }
      }
      if (this.h === "\x1B[3~") {
        this.h = "";
        if (cursorIndex === this.m) {
          trailingWhitespace = Math.max(trailingWhitespace - 1, 0);
        }
      }
      const valueLines = value.split("\n");
      const isMultiLine = valueLines.length > 1;
      const valueEndTrimmed = value.trimEnd();
      if (!isMultiLine) {
        if (valueEndTrimmed.length < value.length) {
          if (this.h === " ") {
            this.h = "";
            if (cursorIndex > valueEndTrimmed.length && cursorIndex > this.m) {
              trailingWhitespace++;
            }
          }
          trailingWhitespace = Math.max(cursorIndex - valueEndTrimmed.length, trailingWhitespace, 0);
        }
        const charBeforeCursor = cursorIndex === 0 ? "" : value[cursorIndex - 1];
        if (trailingWhitespace > 0 && cursorIndex === this.m + 1 && this.h !== "" && charBeforeCursor !== " ") {
          trailingWhitespace = this.j.length - this.m;
        }
      }
      if (isMultiLine) {
        valueLines[valueLines.length - 1] = valueLines.at(-1)?.trimEnd() ?? "";
        const continuationOffset = (valueLines.length - 1) * (this.g?.length ?? 0);
        trailingWhitespace = Math.max(0, cursorIndex - value.length - continuationOffset);
      }
      value = valueLines.map((e) => e.trimEnd()).join("\n") + " ".repeat(trailingWhitespace);
    }
    if (this.j !== value || this.m !== cursorIndex || this.n !== ghostTextIndex) {
      this.j = value;
      this.m = cursorIndex;
      this.n = ghostTextIndex;
      this.s.fire(this.Q());
    }
  }
  I(e) {
    this.h = e;
  }
  /**
   * Detect ghost text by looking for italic or dim text in or after the cursor and
   * non-italic/dim text in the cell closest non-whitespace cell before the cursor.
   */
  J(buffer, line, cursorIndex) {
    let ghostTextIndex = -1;
    let proceedWithGhostTextCheck = false;
    let x = buffer.cursorX;
    while (x > 0) {
      const cell = line.getCell(--x);
      if (!cell) {
        break;
      }
      if (cell.getChars().trim().length > 0) {
        proceedWithGhostTextCheck = !this.P(cell);
        break;
      }
    }
    if (proceedWithGhostTextCheck) {
      let potentialGhostIndexOffset = 0;
      let x2 = buffer.cursorX;
      while (x2 < line.length) {
        const cell = line.getCell(x2++);
        if (!cell || cell.getCode() === 0) {
          break;
        }
        if (this.P(cell)) {
          ghostTextIndex = cursorIndex + potentialGhostIndexOffset;
          break;
        }
        potentialGhostIndexOffset += cell.getChars().length;
      }
    }
    return ghostTextIndex;
  }
  L(lineText) {
    if (this.M(lineText)) {
      lineText = lineText.substring(this.g.length);
    }
    return lineText;
  }
  M(lineText) {
    return !!(this.g && lineText.startsWith(this.g));
  }
  N(line, lineText) {
    if (!this.g || !lineText.startsWith(this.g)) {
      return 0;
    }
    let buffer = "";
    let x = 0;
    while (buffer !== this.g) {
      buffer += line.getCell(x++).getChars();
    }
    return x;
  }
  O(startCellX, buffer, line) {
    return line?.translateToString(true, startCellX, buffer.cursorX).length ?? 0;
  }
  P(cell) {
    return !!(cell.isItalic() || cell.isDim());
  }
  Q() {
    return Object.freeze({
      value: this.j,
      prefix: this.prefix,
      suffix: this.suffix,
      cursorIndex: this.m,
      ghostTextIndex: this.n
    });
  }
};
__decorate([
  $ri(0)
], $Fs.prototype, "G", null);
$Fs = __decorate([
  __param(3, $sk)
], $Fs);

// out-build/vs/platform/terminal/common/capabilities/commandDetectionCapability.js
var $9zb = class $9zb2 extends $9c {
  get promptInputModel() {
    return this.c;
  }
  get commands() {
    return this.f;
  }
  get executingCommand() {
    return this.n.command;
  }
  // TODO: as is unsafe here and it duplicates behavor of executingCommand
  get executingCommandObject() {
    if (this.n.commandStartMarker) {
      return { marker: this.n.commandStartMarker };
    }
    return void 0;
  }
  get currentCommand() {
    return this.n;
  }
  get cwd() {
    return this.g;
  }
  get promptTerminator() {
    return this.h;
  }
  constructor(L, M) {
    super();
    this.L = L;
    this.M = M;
    this.type = 2;
    this.f = [];
    this.n = new $Hs(this.L);
    this.r = [];
    this.t = false;
    this.D = this.B(new $Ce());
    this.onCommandStarted = this.D.event;
    this.F = this.B(new $Ce());
    this.onBeforeCommandFinished = this.F.event;
    this.G = this.B(new $Ce());
    this.onCommandFinished = this.G.event;
    this.H = this.B(new $Ce());
    this.onCommandExecuted = this.H.event;
    this.I = this.B(new $Ce());
    this.onCommandInvalidated = this.I.event;
    this.J = this.B(new $Ce());
    this.onCurrentCommandInvalidated = this.J.event;
    this.c = this.B(new $Fs(this.L, this.onCommandStarted, this.onCommandExecuted, this.M));
    this.B(this.onCommandExecuted((command) => {
      if (command.commandLineConfidence !== "high") {
        const typedCommand = command;
        command.command = typedCommand.extractCommandLine();
        command.commandLineConfidence = "low";
        if ("getOutput" in typedCommand) {
          if (
            // Markers exist
            typedCommand.promptStartMarker && typedCommand.marker && typedCommand.executedMarker && // Single line command
            command.command.indexOf("\n") === -1 && // Start marker is not on the left-most column
            typedCommand.startX !== void 0 && typedCommand.startX > 0
          ) {
            command.commandLineConfidence = "medium";
          }
        } else {
          if (
            // Markers exist
            typedCommand.promptStartMarker && typedCommand.commandStartMarker && typedCommand.commandExecutedMarker && // Single line command
            command.command.indexOf("\n") === -1 && // Start marker is not on the left-most column
            typedCommand.commandStartX !== void 0 && typedCommand.commandStartX > 0
          ) {
            command.commandLineConfidence = "medium";
          }
        }
      }
    }));
    const that = this;
    this.z = new class {
      get onCurrentCommandInvalidatedEmitter() {
        return that.J;
      }
      get onCommandStartedEmitter() {
        return that.D;
      }
      get onCommandExecutedEmitter() {
        return that.H;
      }
      get dimensions() {
        return that.s;
      }
      get isCommandStorageDisabled() {
        return that.t;
      }
      get commandMarkers() {
        return that.r;
      }
      set commandMarkers(value) {
        that.r = value;
      }
      get clearCommandsInViewport() {
        return that.P.bind(that);
      }
      commitCommandFinished() {
        that.w?.flush();
        that.w = void 0;
      }
    }();
    this.C = this.B(new $$c(new UnixPtyHeuristics(this.L, this, this.z, this.M)));
    this.s = {
      cols: this.L.cols,
      rows: this.L.rows
    };
    this.B(this.L.onResize((e) => this.N(e)));
    this.B(this.L.onCursorMove(() => this.O()));
  }
  N(e) {
    this.C.value.preHandleResize?.(e);
    this.s.cols = e.cols;
    this.s.rows = e.rows;
  }
  O() {
    if (this.q.isDisposed) {
      return;
    }
    if (this.L.buffer.active === this.L.buffer.normal && this.n.commandStartMarker) {
      if (this.L.buffer.active.baseY + this.L.buffer.active.cursorY < this.n.commandStartMarker.line) {
        this.P();
        this.n.isInvalid = true;
        this.J.fire({
          reason: "windows"
          /* CommandInvalidationReason.Windows */
        });
      }
    }
  }
  P() {
    let count = 0;
    for (let i = this.f.length - 1; i >= 0; i--) {
      const line = this.f[i].marker?.line;
      if (line && line < this.L.buffer.active.baseY) {
        break;
      }
      count++;
    }
    if (count > 0) {
      this.I.fire(this.f.splice(this.f.length - count, count));
    }
  }
  setContinuationPrompt(value) {
    this.c.setContinuationPrompt(value);
  }
  // TODO: Simplify this, can everything work off the last line?
  setPromptTerminator(promptTerminator, lastPromptLine) {
    this.M.debug("CommandDetectionCapability#setPromptTerminator", promptTerminator);
    this.h = promptTerminator;
    this.c.setLastPromptLine(lastPromptLine);
  }
  setCwd(value) {
    this.g = value;
  }
  setIsWindowsPty(value) {
    if (value && !(this.C.value instanceof WindowsPtyHeuristics)) {
      const that = this;
      this.C.value = new WindowsPtyHeuristics(this.L, this, new class {
        get onCurrentCommandInvalidatedEmitter() {
          return that.J;
        }
        get onCommandStartedEmitter() {
          return that.D;
        }
        get onCommandExecutedEmitter() {
          return that.H;
        }
        get dimensions() {
          return that.s;
        }
        get isCommandStorageDisabled() {
          return that.t;
        }
        get commandMarkers() {
          return that.r;
        }
        set commandMarkers(value2) {
          that.r = value2;
        }
        get clearCommandsInViewport() {
          return that.P.bind(that);
        }
        commitCommandFinished() {
          that.w?.flush();
          that.w = void 0;
        }
      }(), this.M);
    } else if (!value && !(this.C.value instanceof UnixPtyHeuristics)) {
      this.C.value = new UnixPtyHeuristics(this.L, this, this.z, this.M);
    }
  }
  setIsCommandStorageDisabled() {
    this.t = true;
  }
  getCommandForLine(line) {
    if (this.n.promptStartMarker && line >= this.n.promptStartMarker?.line) {
      return this.n;
    }
    if (this.f.length === 0) {
      return void 0;
    }
    if ((this.f[0].promptStartMarker ?? this.f[0].marker).line > line) {
      return void 0;
    }
    for (let i = this.commands.length - 1; i >= 0; i--) {
      if ((this.commands[i].promptStartMarker ?? this.commands[i].marker).line <= line) {
        return this.commands[i];
      }
    }
    return void 0;
  }
  getCwdForLine(line) {
    if (this.n.promptStartMarker && line >= this.n.promptStartMarker?.line) {
      return this.g;
    }
    const command = this.getCommandForLine(line);
    if (command && "cwd" in command) {
      return command.cwd;
    }
    return void 0;
  }
  handlePromptStart(options) {
    const lastCommand = this.commands.at(-1);
    if (lastCommand?.endMarker && lastCommand?.executedMarker && lastCommand.endMarker.line === lastCommand.executedMarker.line) {
      this.M.debug("CommandDetectionCapability#handlePromptStart adjusted commandFinished", `${lastCommand.endMarker.line} -> ${lastCommand.executedMarker.line + 1}`);
      lastCommand.endMarker = cloneMarker(this.L, lastCommand.executedMarker, 1);
    }
    this.n.promptStartMarker = options?.marker || (lastCommand?.endMarker ? cloneMarker(this.L, lastCommand.endMarker) : this.L.registerMarker(0));
    this.M.debug("CommandDetectionCapability#handlePromptStart", this.L.buffer.active.cursorX, this.n.promptStartMarker?.line);
  }
  handleContinuationStart() {
    this.n.currentContinuationMarker = this.L.registerMarker(0);
    this.M.debug("CommandDetectionCapability#handleContinuationStart", this.n.currentContinuationMarker);
  }
  handleContinuationEnd() {
    if (!this.n.currentContinuationMarker) {
      this.M.warn("CommandDetectionCapability#handleContinuationEnd Received continuation end without start");
      return;
    }
    if (!this.n.continuations) {
      this.n.continuations = [];
    }
    this.n.continuations.push({
      marker: this.n.currentContinuationMarker,
      end: this.L.buffer.active.cursorX
    });
    this.n.currentContinuationMarker = void 0;
    this.M.debug("CommandDetectionCapability#handleContinuationEnd", this.n.continuations[this.n.continuations.length - 1]);
  }
  handleRightPromptStart() {
    this.n.commandRightPromptStartX = this.L.buffer.active.cursorX;
    this.M.debug("CommandDetectionCapability#handleRightPromptStart", this.n.commandRightPromptStartX);
  }
  handleRightPromptEnd() {
    this.n.commandRightPromptEndX = this.L.buffer.active.cursorX;
    this.M.debug("CommandDetectionCapability#handleRightPromptEnd", this.n.commandRightPromptEndX);
  }
  handleCommandStart(options) {
    this.u = options;
    this.n.cwd = this.g;
    this.n.commandStartMarker = options?.marker || this.n.commandStartMarker;
    if (this.n.commandStartMarker?.line === this.L.buffer.active.cursorY) {
      this.n.commandStartX = this.L.buffer.active.cursorX;
      this.M.debug("CommandDetectionCapability#handleCommandStart", this.n.commandStartX, this.n.commandStartMarker?.line);
      return;
    }
    this.C.value.handleCommandStart(options);
  }
  handleGenericCommand(options) {
    if (options?.markProperties?.disableCommandStorage) {
      this.setIsCommandStorageDisabled();
    }
    this.handlePromptStart(options);
    this.handleCommandStart(options);
    this.handleCommandExecuted(options);
    this.handleCommandFinished(void 0, options);
  }
  handleCommandExecuted(options) {
    this.C.value.handleCommandExecuted(options);
    this.n.markExecutedTime();
  }
  handleCommandFinished(exitCode, options) {
    this.n.markFinishedTime();
    this.C.value.preHandleCommandFinished?.();
    this.M.debug("CommandDetectionCapability#handleCommandFinished", this.L.buffer.active.cursorX, options?.marker?.line, this.n.command, this.n);
    if (exitCode === void 0) {
      const lastCommand = this.commands.length > 0 ? this.commands[this.commands.length - 1] : void 0;
      if (this.n.command && this.n.command.length > 0 && lastCommand?.command === this.n.command) {
        exitCode = lastCommand.exitCode;
      }
    }
    if (this.n.commandStartMarker === void 0 || !this.L.buffer.active) {
      return;
    }
    this.n.commandFinishedMarker = options?.marker || this.L.registerMarker(0);
    this.C.value.postHandleCommandFinished?.();
    const newCommand = this.n.promoteToFullCommand(this.g, exitCode, this.u?.ignoreCommandLine ?? false, options?.markProperties);
    if (newCommand) {
      this.f.push(newCommand);
      this.w = new $0h(() => {
        this.F.fire(newCommand);
        if (!this.n.isInvalid) {
          this.M.debug("CommandDetectionCapability#onCommandFinished", newCommand);
          this.G.fire(newCommand);
        }
      }, 50);
      this.w.schedule();
    }
    this.n = new $Hs(this.L);
    this.u = void 0;
  }
  setCommandLine(commandLine, isTrusted) {
    this.M.debug("CommandDetectionCapability#setCommandLine", commandLine, isTrusted);
    this.n.command = commandLine;
    this.n.commandLineConfidence = "high";
    this.n.isTrusted = isTrusted;
    if (isTrusted) {
      this.c.setConfidentCommandLine(commandLine);
    }
  }
  serialize() {
    const commands = this.commands.map((e) => e.serialize(this.t));
    const partialCommand = this.n.serialize(this.g);
    if (partialCommand) {
      commands.push(partialCommand);
    }
    return {
      isWindowsPty: this.C.value instanceof WindowsPtyHeuristics,
      commands,
      promptInputModel: this.c.serialize()
    };
  }
  deserialize(serialized) {
    if (serialized.isWindowsPty) {
      this.setIsWindowsPty(serialized.isWindowsPty);
    }
    const buffer = this.L.buffer.normal;
    for (const e of serialized.commands) {
      if (!e.endLine) {
        const marker = e.startLine !== void 0 ? this.L.registerMarker(e.startLine - (buffer.baseY + buffer.cursorY)) : void 0;
        if (!marker) {
          continue;
        }
        this.n.commandStartMarker = e.startLine !== void 0 ? this.L.registerMarker(e.startLine - (buffer.baseY + buffer.cursorY)) : void 0;
        this.n.commandStartX = e.startX;
        this.n.promptStartMarker = e.promptStartLine !== void 0 ? this.L.registerMarker(e.promptStartLine - (buffer.baseY + buffer.cursorY)) : void 0;
        this.g = e.cwd;
        this.D.fire({ marker });
        continue;
      }
      const newCommand = $Gs.deserialize(this.L, e, this.t);
      if (!newCommand) {
        continue;
      }
      this.f.push(newCommand);
      this.M.debug("CommandDetectionCapability#onCommandFinished", newCommand);
      this.G.fire(newCommand);
    }
    if (serialized.promptInputModel) {
      this.c.deserialize(serialized.promptInputModel);
    }
  }
};
__decorate([
  $qi(500)
], $9zb.prototype, "O", null);
$9zb = __decorate([
  __param(1, $sk)
], $9zb);
var UnixPtyHeuristics = class extends $9c {
  constructor(c, f, g, h) {
    super();
    this.c = c;
    this.f = f;
    this.g = g;
    this.h = h;
    this.B(c.parser.registerCsiHandler({ final: "J" }, (params) => {
      if (params.length >= 1 && (params[0] === 2 || params[0] === 3)) {
        g.clearCommandsInViewport();
      }
      return false;
    }));
  }
  handleCommandStart(options) {
    this.g.commitCommandFinished();
    const currentCommand = this.f.currentCommand;
    currentCommand.commandStartX = this.c.buffer.active.cursorX;
    currentCommand.commandStartMarker = options?.marker || this.c.registerMarker(0);
    currentCommand.commandExecutedMarker?.dispose();
    currentCommand.commandExecutedMarker = void 0;
    currentCommand.commandExecutedX = void 0;
    for (const m of this.g.commandMarkers) {
      m.dispose();
    }
    this.g.commandMarkers.length = 0;
    this.g.onCommandStartedEmitter.fire({ marker: options?.marker || currentCommand.commandStartMarker, markProperties: options?.markProperties });
    this.h.debug("CommandDetectionCapability#handleCommandStart", currentCommand.commandStartX, currentCommand.commandStartMarker?.line);
  }
  handleCommandExecuted(options) {
    const currentCommand = this.f.currentCommand;
    currentCommand.commandExecutedMarker = options?.marker || this.c.registerMarker(0);
    currentCommand.commandExecutedX = this.c.buffer.active.cursorX;
    this.h.debug("CommandDetectionCapability#handleCommandExecuted", currentCommand.commandExecutedX, currentCommand.commandExecutedMarker?.line);
    if (!currentCommand.commandStartMarker || !currentCommand.commandExecutedMarker || currentCommand.commandStartX === void 0) {
      return;
    }
    currentCommand.command = this.g.isCommandStorageDisabled ? "" : this.c.buffer.active.getLine(currentCommand.commandStartMarker.line)?.translateToString(true, currentCommand.commandStartX, currentCommand.commandRightPromptStartX).trim();
    let y = currentCommand.commandStartMarker.line + 1;
    const commandExecutedLine = currentCommand.commandExecutedMarker.line;
    for (; y < commandExecutedLine; y++) {
      const line = this.c.buffer.active.getLine(y);
      if (line) {
        const continuation = currentCommand.continuations?.find((e) => e.marker.line === y);
        if (continuation) {
          currentCommand.command += "\n";
        }
        const startColumn = continuation?.end ?? 0;
        currentCommand.command += line.translateToString(true, startColumn);
      }
    }
    if (y === commandExecutedLine) {
      currentCommand.command += this.c.buffer.active.getLine(commandExecutedLine)?.translateToString(true, void 0, currentCommand.commandExecutedX) || "";
    }
    this.g.onCommandExecutedEmitter.fire(currentCommand);
  }
};
var AdjustCommandStartMarkerConstants;
(function(AdjustCommandStartMarkerConstants2) {
  AdjustCommandStartMarkerConstants2[AdjustCommandStartMarkerConstants2["MaxCheckLineCount"] = 10] = "MaxCheckLineCount";
  AdjustCommandStartMarkerConstants2[AdjustCommandStartMarkerConstants2["Interval"] = 20] = "Interval";
  AdjustCommandStartMarkerConstants2[AdjustCommandStartMarkerConstants2["MaximumPollCount"] = 10] = "MaximumPollCount";
})(AdjustCommandStartMarkerConstants || (AdjustCommandStartMarkerConstants = {}));
var WindowsPtyHeuristics = class WindowsPtyHeuristics2 extends $9c {
  constructor(n, r, s, t) {
    super();
    this.n = n;
    this.r = r;
    this.s = s;
    this.t = t;
    this.c = this.B(new $0c());
    this.g = 0;
    this.h = 0;
    this.B(n.parser.registerCsiHandler({ final: "J" }, (params) => {
      if (params.length >= 1 && (params[0] === 2 || params[0] === 3)) {
        this.s.clearCommandsInViewport();
      }
      return false;
    }));
    this.B(this.r.onBeforeCommandFinished((command) => {
      if (command.command.trim().toLowerCase() === "clear" || command.command.trim().toLowerCase() === "cls") {
        this.f?.cancel();
        this.f = void 0;
        this.s.clearCommandsInViewport();
        this.r.currentCommand.isInvalid = true;
        this.s.onCurrentCommandInvalidatedEmitter.fire({
          reason: "windows"
          /* CommandInvalidationReason.Windows */
        });
      }
    }));
  }
  preHandleResize(e) {
    const baseY = this.n.buffer.active.baseY;
    const rowsDifference = e.rows - this.s.dimensions.rows;
    if (rowsDifference > 0) {
      this.D().then(() => {
        const potentialShiftedLineCount = Math.min(rowsDifference, baseY);
        for (let i = this.r.commands.length - 1; i >= 0; i--) {
          const command = this.r.commands[i];
          if (!command.marker || command.marker.line < baseY || command.commandStartLineContent === void 0) {
            break;
          }
          const line = this.n.buffer.active.getLine(command.marker.line);
          if (!line || line.translateToString(true) === command.commandStartLineContent) {
            continue;
          }
          const shiftedY = command.marker.line - potentialShiftedLineCount;
          const shiftedLine = this.n.buffer.active.getLine(shiftedY);
          if (shiftedLine?.translateToString(true) !== command.commandStartLineContent) {
            continue;
          }
          this.n._core._bufferService.buffer.lines.onDeleteEmitter.fire({
            index: this.n.buffer.active.baseY,
            amount: potentialShiftedLineCount
          });
        }
      });
    }
  }
  handleCommandStart() {
    this.r.currentCommand.commandStartX = this.n.buffer.active.cursorX;
    this.s.commandMarkers.length = 0;
    const initialCommandStartMarker = this.r.currentCommand.commandStartMarker = this.r.currentCommand.promptStartMarker ? cloneMarker(this.n, this.r.currentCommand.promptStartMarker) : this.n.registerMarker(0);
    this.r.currentCommand.commandStartX = 0;
    this.g = 0;
    this.h = 0;
    this.f = new $0h(
      () => this.u(initialCommandStartMarker),
      20
      /* AdjustCommandStartMarkerConstants.Interval */
    );
    this.f.schedule();
  }
  u(start) {
    if (this.q.isDisposed) {
      return;
    }
    const buffer = this.n.buffer.active;
    let scannedLineCount = this.g;
    while (scannedLineCount < 10 && start.line + scannedLineCount < buffer.baseY + this.n.rows) {
      if (this.C()) {
        const prompt = this.F(start.line + scannedLineCount);
        if (prompt) {
          const adjustedPrompt = typeof prompt === "string" ? prompt : prompt.prompt;
          this.r.currentCommand.commandStartMarker = this.n.registerMarker(0);
          if (typeof prompt === "object" && prompt.likelySingleLine) {
            this.t.debug("CommandDetectionCapability#_tryAdjustCommandStartMarker adjusted promptStart", `${this.r.currentCommand.promptStartMarker?.line} -> ${this.r.currentCommand.commandStartMarker.line}`);
            this.r.currentCommand.promptStartMarker?.dispose();
            this.r.currentCommand.promptStartMarker = cloneMarker(this.n, this.r.currentCommand.commandStartMarker);
            const lastCommand = this.r.commands.at(-1);
            if (lastCommand && this.r.currentCommand.commandStartMarker.line !== lastCommand.endMarker?.line) {
              lastCommand.endMarker?.dispose();
              lastCommand.endMarker = cloneMarker(this.n, this.r.currentCommand.commandStartMarker);
            }
          }
          this.r.currentCommand.commandStartX = adjustedPrompt.length;
          this.t.debug("CommandDetectionCapability#_tryAdjustCommandStartMarker adjusted commandStart", `${start.line} -> ${this.r.currentCommand.commandStartMarker.line}:${this.r.currentCommand.commandStartX}`);
          this.w();
          return;
        }
      }
      scannedLineCount++;
    }
    if (scannedLineCount < 10) {
      this.g = scannedLineCount;
      if (++this.h < 10) {
        this.f?.schedule();
      } else {
        this.w();
      }
    } else {
      this.w();
    }
  }
  w() {
    if (this.f) {
      this.h = 10;
      this.f.flush();
      this.f = void 0;
    }
    this.s.commitCommandFinished();
    if (!this.r.currentCommand.commandExecutedMarker) {
      this.c.value = this.n.onCursorMove(() => {
        if (this.s.commandMarkers.length === 0 || this.s.commandMarkers[this.s.commandMarkers.length - 1].line !== this.n.buffer.active.cursorY) {
          const marker = this.n.registerMarker(0);
          if (marker) {
            this.s.commandMarkers.push(marker);
          }
        }
      });
    }
    if (this.r.currentCommand.commandStartMarker) {
      const line = this.n.buffer.active.getLine(this.r.currentCommand.commandStartMarker.line);
      if (line) {
        this.r.currentCommand.commandStartLineContent = line.translateToString(true);
      }
    }
    this.s.onCommandStartedEmitter.fire({ marker: this.r.currentCommand.commandStartMarker });
    this.t.debug("CommandDetectionCapability#_handleCommandStartWindows", this.r.currentCommand.commandStartX, this.r.currentCommand.commandStartMarker?.line);
  }
  handleCommandExecuted(options) {
    if (this.f) {
      this.w();
    }
    this.c.clear();
    this.z();
    this.r.currentCommand.commandExecutedX = this.n.buffer.active.cursorX;
    this.s.onCommandExecutedEmitter.fire(this.r.currentCommand);
    this.t.debug("CommandDetectionCapability#handleCommandExecuted", this.r.currentCommand.commandExecutedX, this.r.currentCommand.commandExecutedMarker?.line);
  }
  preHandleCommandFinished() {
    if (this.r.currentCommand.commandExecutedMarker) {
      return;
    }
    if (this.s.commandMarkers.length === 0) {
      if (!this.r.currentCommand.commandStartMarker) {
        this.r.currentCommand.commandStartMarker = this.n.registerMarker(0);
      }
      if (this.r.currentCommand.commandStartMarker) {
        this.s.commandMarkers.push(this.r.currentCommand.commandStartMarker);
      }
    }
    this.z();
  }
  postHandleCommandFinished() {
    const currentCommand = this.r.currentCommand;
    const commandText = currentCommand.command;
    const commandLine = currentCommand.commandStartMarker?.line;
    const executedLine = currentCommand.commandExecutedMarker?.line;
    if (!commandText || commandText.length === 0 || commandLine === void 0 || commandLine === -1 || executedLine === void 0 || executedLine === -1) {
      return;
    }
    let current = 0;
    let found = false;
    for (let i = commandLine; i <= executedLine; i++) {
      const line = this.n.buffer.active.getLine(i);
      if (!line) {
        break;
      }
      const text = line.translateToString(true);
      for (let j = 0; j < text.length; j++) {
        while (commandText.length < current && commandText[current] === " ") {
          current++;
        }
        if (text[j] === commandText[current]) {
          current++;
        }
        if (current === commandText.length) {
          const wrapsToNextLine = j >= this.n.cols - 1;
          currentCommand.commandExecutedMarker = this.n.registerMarker(i - (this.n.buffer.active.baseY + this.n.buffer.active.cursorY) + (wrapsToNextLine ? 1 : 0));
          currentCommand.commandExecutedX = wrapsToNextLine ? 0 : j + 1;
          found = true;
          break;
        }
      }
      if (found) {
        break;
      }
    }
  }
  z() {
    if (this.s.commandMarkers.length === 0) {
      return;
    }
    this.s.commandMarkers = this.s.commandMarkers.sort((a, b) => a.line - b.line);
    this.r.currentCommand.commandStartMarker = this.s.commandMarkers[0];
    if (this.r.currentCommand.commandStartMarker) {
      const line = this.n.buffer.active.getLine(this.r.currentCommand.commandStartMarker.line);
      if (line) {
        this.r.currentCommand.commandStartLineContent = line.translateToString(true);
      }
    }
    this.r.currentCommand.commandExecutedMarker = this.s.commandMarkers[this.s.commandMarkers.length - 1];
    this.s.onCommandExecutedEmitter.fire(this.r.currentCommand);
  }
  C() {
    const lastCommand = this.r.commands.at(-1);
    if (!lastCommand) {
      return true;
    }
    const cursorYAbsolute = this.n.buffer.active.baseY + this.n.buffer.active.cursorY;
    const lastCommandYAbsolute = (lastCommand.endMarker ? lastCommand.endMarker.line : lastCommand.marker?.line) ?? -1;
    return cursorYAbsolute > lastCommandYAbsolute;
  }
  D() {
    const cursorX = this.n.buffer.active.cursorX;
    const cursorY = this.n.buffer.active.cursorY;
    let totalDelay = 0;
    return new Promise((resolve, reject) => {
      const interval = setInterval(() => {
        if (cursorX !== this.n.buffer.active.cursorX || cursorY !== this.n.buffer.active.cursorY) {
          resolve();
          clearInterval(interval);
          return;
        }
        totalDelay += 10;
        if (totalDelay > 1e3) {
          clearInterval(interval);
          resolve();
        }
      }, 10);
    });
  }
  F(y = this.n.buffer.active.baseY + this.n.buffer.active.cursorY) {
    const line = this.n.buffer.active.getLine(y);
    if (!line) {
      return;
    }
    const lineText = line.translateToString(true);
    if (!lineText) {
      return;
    }
    const pwshPrompt = lineText.match(/(?<prompt>(\(.+\)\s)?(?:PS.+>\s?))/)?.groups?.prompt;
    if (pwshPrompt) {
      const adjustedPrompt = this.G(pwshPrompt, lineText, ">");
      if (adjustedPrompt) {
        return {
          prompt: adjustedPrompt,
          likelySingleLine: true
        };
      }
    }
    const customPrompt = lineText.match(/.*\u276f(?=[^\u276f]*$)/g)?.[0];
    if (customPrompt) {
      const adjustedPrompt = this.G(customPrompt, lineText, "\u276F");
      if (adjustedPrompt) {
        return adjustedPrompt;
      }
    }
    const bashPrompt = lineText.match(/^(?<prompt>\$)/)?.groups?.prompt;
    if (bashPrompt) {
      const adjustedPrompt = this.G(bashPrompt, lineText, "$");
      if (adjustedPrompt) {
        return adjustedPrompt;
      }
    }
    const pythonPrompt = lineText.match(/^(?<prompt>>>> )/g)?.groups?.prompt;
    if (pythonPrompt) {
      return {
        prompt: pythonPrompt,
        likelySingleLine: true
      };
    }
    if (this.r.promptTerminator && lineText.trim().endsWith(this.r.promptTerminator)) {
      const adjustedPrompt = this.G(lineText, lineText, this.r.promptTerminator);
      if (adjustedPrompt) {
        return adjustedPrompt;
      }
    }
    const cmdMatch = lineText.match(/^(?<prompt>(\(.+\)\s)?(?:[A-Z]:\\.*>))/);
    return cmdMatch?.groups?.prompt ? {
      prompt: cmdMatch.groups.prompt,
      likelySingleLine: true
    } : void 0;
  }
  G(prompt, lineText, char) {
    if (!prompt) {
      return;
    }
    if (lineText === prompt && prompt.endsWith(char)) {
      prompt += " ";
    }
    return prompt;
  }
};
WindowsPtyHeuristics = __decorate([
  __param(3, $sk)
], WindowsPtyHeuristics);
function cloneMarker(xterm, marker, offset = 0) {
  return xterm.registerMarker(marker.line - (xterm.buffer.active.baseY + xterm.buffer.active.cursorY) + offset);
}

// out-build/vs/platform/terminal/common/capabilities/cwdDetectionCapability.js
var $$zb = class extends $9c {
  constructor() {
    super(...arguments);
    this.type = 0;
    this.a = "";
    this.b = /* @__PURE__ */ new Map();
    this.c = this.B(new $Ce());
    this.onDidChangeCwd = this.c.event;
  }
  /**
   * Gets the list of cwds seen in this session in order of last accessed.
   */
  get cwds() {
    return Array.from(this.b.keys());
  }
  getCwd() {
    return this.a;
  }
  updateCwd(cwd2) {
    const didChange = this.a !== cwd2;
    this.a = cwd2;
    const count = this.b.get(this.a) || 0;
    this.b.delete(this.a);
    this.b.set(this.a, count + 1);
    if (didChange) {
      this.c.fire(cwd2);
    }
  }
};

// out-build/vs/platform/terminal/common/capabilities/partialCommandDetectionCapability.js
var Constants4;
(function(Constants5) {
  Constants5[Constants5["MinimumPromptLength"] = 2] = "MinimumPromptLength";
})(Constants4 || (Constants4 = {}));
var $_zb = class extends $8c {
  get commands() {
    return this.a;
  }
  constructor(c) {
    super();
    this.c = c;
    this.type = 3;
    this.a = [];
    this.b = this.add(new $Ce());
    this.onCommandFinished = this.b.event;
    this.add(this.c.onData((e) => this.h(e)));
    this.add(this.c.parser.registerCsiHandler({ final: "J" }, (params) => {
      if (params.length >= 1 && (params[0] === 2 || params[0] === 3)) {
        this.m();
      }
      return false;
    }));
  }
  h(data) {
    if (data === "\r") {
      this.j();
    }
  }
  j() {
    if (!this.c) {
      return;
    }
    if (this.c.buffer.active.cursorX >= 2) {
      const marker = this.c.registerMarker(0);
      if (marker) {
        this.a.push(marker);
        this.b.fire(marker);
      }
    }
  }
  m() {
    let count = 0;
    for (let i = this.a.length - 1; i >= 0; i--) {
      if (this.a[i].line < this.c.buffer.active.baseY) {
        break;
      }
      count++;
    }
    this.a.splice(this.a.length - count, count);
  }
};

// out-build/vs/platform/terminal/common/capabilities/bufferMarkCapability.js
var $aAb = class extends $9c {
  constructor(f) {
    super();
    this.f = f;
    this.type = 4;
    this.a = /* @__PURE__ */ new Map();
    this.b = /* @__PURE__ */ new Map();
    this.c = this.B(new $Ce());
    this.onMarkAdded = this.c.event;
  }
  *markers() {
    for (const m of this.a.values()) {
      yield m;
    }
    for (const m of this.b.values()) {
      yield m;
    }
  }
  addMark(properties) {
    const marker = properties?.marker || this.f.registerMarker();
    const id2 = properties?.id;
    if (!marker) {
      return;
    }
    if (id2) {
      this.a.set(id2, marker);
      marker.onDispose(() => this.a.delete(id2));
    } else {
      this.b.set(marker.id, marker);
      marker.onDispose(() => this.b.delete(marker.id));
    }
    this.c.fire({ marker, id: id2, hidden: properties?.hidden, hoverMessage: properties?.hoverMessage });
  }
  getMark(id2) {
    return this.a.get(id2);
  }
};

// out-build/vs/platform/terminal/common/xterm/shellIntegrationAddon.js
var ShellIntegrationOscPs;
(function(ShellIntegrationOscPs2) {
  ShellIntegrationOscPs2[ShellIntegrationOscPs2["FinalTerm"] = 133] = "FinalTerm";
  ShellIntegrationOscPs2[ShellIntegrationOscPs2["VSCode"] = 633] = "VSCode";
  ShellIntegrationOscPs2[ShellIntegrationOscPs2["ITerm"] = 1337] = "ITerm";
  ShellIntegrationOscPs2[ShellIntegrationOscPs2["SetCwd"] = 7] = "SetCwd";
  ShellIntegrationOscPs2[ShellIntegrationOscPs2["SetWindowsFriendlyCwd"] = 9] = "SetWindowsFriendlyCwd";
})(ShellIntegrationOscPs || (ShellIntegrationOscPs = {}));
var FinalTermOscPt;
(function(FinalTermOscPt2) {
  FinalTermOscPt2["PromptStart"] = "A";
  FinalTermOscPt2["CommandStart"] = "B";
  FinalTermOscPt2["CommandExecuted"] = "C";
  FinalTermOscPt2["CommandFinished"] = "D";
})(FinalTermOscPt || (FinalTermOscPt = {}));
var VSCodeOscPt;
(function(VSCodeOscPt2) {
  VSCodeOscPt2["PromptStart"] = "A";
  VSCodeOscPt2["CommandStart"] = "B";
  VSCodeOscPt2["CommandExecuted"] = "C";
  VSCodeOscPt2["CommandFinished"] = "D";
  VSCodeOscPt2["CommandLine"] = "E";
  VSCodeOscPt2["ContinuationStart"] = "F";
  VSCodeOscPt2["ContinuationEnd"] = "G";
  VSCodeOscPt2["RightPromptStart"] = "H";
  VSCodeOscPt2["RightPromptEnd"] = "I";
  VSCodeOscPt2["Property"] = "P";
  VSCodeOscPt2["SetMark"] = "SetMark";
})(VSCodeOscPt || (VSCodeOscPt = {}));
var ITermOscPt;
(function(ITermOscPt2) {
  ITermOscPt2["SetMark"] = "SetMark";
  ITermOscPt2["CurrentDir"] = "CurrentDir";
})(ITermOscPt || (ITermOscPt = {}));
var $bAb = class extends $9c {
  get status() {
    return this.g;
  }
  constructor(j, m, n, r) {
    super();
    this.j = j;
    this.m = m;
    this.n = n;
    this.r = r;
    this.capabilities = this.B(new $7zb());
    this.b = false;
    this.f = [];
    this.g = 0;
    this.h = new $Ce();
    this.onDidChangeStatus = this.h.event;
    this.B($7c(() => {
      this.z();
      this.s();
    }));
  }
  s() {
    $4c(this.f);
    this.f.length = 0;
  }
  activate(xterm) {
    this.a = xterm;
    this.capabilities.add(3, this.B(new $_zb(this.a)));
    this.B(xterm.parser.registerOscHandler(633, (data) => this.w(data)));
    this.B(xterm.parser.registerOscHandler(1337, (data) => this.H(data)));
    this.f.push(xterm.parser.registerOscHandler(133, (data) => this.t(data)));
    this.B(xterm.parser.registerOscHandler(7, (data) => this.J(data)));
    this.B(xterm.parser.registerOscHandler(9, (data) => this.I(data)));
    this.y();
  }
  getMarkerId(terminal, vscodeMarkerId) {
    this.N(terminal).getMark(vscodeMarkerId);
  }
  t(data) {
    const didHandle = this.u(data);
    if (this.g === 0) {
      this.g = 1;
      this.h.fire(this.g);
    }
    return didHandle;
  }
  u(data) {
    if (!this.a) {
      return false;
    }
    const [command, ...args] = data.split(";");
    switch (command) {
      case "A":
        this.M(this.a).handlePromptStart();
        return true;
      case "B":
        this.M(this.a).handleCommandStart({ ignoreCommandLine: true });
        return true;
      case "C":
        this.M(this.a).handleCommandExecuted();
        return true;
      case "D": {
        const exitCode = args.length === 1 ? parseInt(args[0]) : void 0;
        this.M(this.a).handleCommandFinished(exitCode);
        return true;
      }
    }
    return false;
  }
  w(data) {
    const didHandle = this.C(data);
    if (!this.b && didHandle) {
      this.n?.publicLog2("terminal/shellIntegrationActivationSucceeded");
      this.b = true;
      this.z();
    }
    if (this.g !== 2) {
      this.g = 2;
      this.h.fire(this.g);
    }
    return didHandle;
  }
  async y() {
    if (!this.n || this.m) {
      return;
    }
    this.c = setTimeout(() => {
      if (!this.capabilities.get(
        2
        /* TerminalCapability.CommandDetection */
      ) && !this.capabilities.get(
        0
        /* TerminalCapability.CwdDetection */
      )) {
        this.n?.publicLog2("terminal/shellIntegrationActivationTimeout");
        this.r.warn("Shell integration failed to add capabilities within 10 seconds");
      }
      this.b = true;
    }, 1e4);
  }
  z() {
    if (this.c !== void 0) {
      clearTimeout(this.c);
      this.c = void 0;
    }
  }
  C(data) {
    if (!this.a) {
      return false;
    }
    const argsIndex = data.indexOf(";");
    const sequenceCommand = argsIndex === -1 ? data : data.substring(0, argsIndex);
    const args = argsIndex === -1 ? [] : data.substring(argsIndex + 1).split(";");
    switch (sequenceCommand) {
      case "A":
        this.M(this.a).handlePromptStart();
        return true;
      case "B":
        this.M(this.a).handleCommandStart();
        return true;
      case "C":
        this.M(this.a).handleCommandExecuted();
        return true;
      case "D": {
        const arg0 = args[0];
        const exitCode = arg0 !== void 0 ? parseInt(arg0) : void 0;
        this.M(this.a).handleCommandFinished(exitCode);
        return true;
      }
      case "E": {
        const arg0 = args[0];
        const arg1 = args[1];
        let commandLine;
        if (arg0 !== void 0) {
          commandLine = $cAb(arg0);
        } else {
          commandLine = "";
        }
        this.M(this.a).setCommandLine(commandLine, arg1 === this.j);
        return true;
      }
      case "F": {
        this.M(this.a).handleContinuationStart();
        return true;
      }
      case "G": {
        this.M(this.a).handleContinuationEnd();
        return true;
      }
      case "H": {
        this.M(this.a).handleRightPromptStart();
        return true;
      }
      case "I": {
        this.M(this.a).handleRightPromptEnd();
        return true;
      }
      case "P": {
        const arg0 = args[0];
        const deserialized = arg0 !== void 0 ? $cAb(arg0) : "";
        const { key, value } = $dAb(deserialized);
        if (value === void 0) {
          return true;
        }
        switch (key) {
          case "ContinuationPrompt": {
            this.D($ig(value));
            return true;
          }
          case "Cwd": {
            this.G(value);
            return true;
          }
          case "IsWindows": {
            this.M(this.a).setIsWindowsPty(value === "True" ? true : false);
            return true;
          }
          case "Prompt": {
            const sanitizedValue = value.replace(/\x1b\[[0-9;]*m/g, "");
            this.F(sanitizedValue);
            return true;
          }
          case "Task": {
            this.N(this.a);
            this.capabilities.get(
              2
              /* TerminalCapability.CommandDetection */
            )?.setIsCommandStorageDisabled();
            return true;
          }
        }
      }
      case "SetMark": {
        this.N(this.a).addMark($eAb(args));
        return true;
      }
    }
    return false;
  }
  D(value) {
    if (!this.a) {
      return;
    }
    this.M(this.a).setContinuationPrompt(value);
  }
  F(prompt) {
    if (!this.a) {
      return;
    }
    const lastPromptLine = prompt.substring(prompt.lastIndexOf("\n") + 1);
    const promptTerminator = lastPromptLine.substring(lastPromptLine.lastIndexOf(" "));
    if (promptTerminator) {
      this.M(this.a).setPromptTerminator(promptTerminator, lastPromptLine);
    }
  }
  G(value) {
    value = $1R(value);
    this.L().updateCwd(value);
    const commandDetection = this.capabilities.get(
      2
      /* TerminalCapability.CommandDetection */
    );
    commandDetection?.setCwd(value);
  }
  H(data) {
    if (!this.a) {
      return false;
    }
    const [command] = data.split(";");
    switch (command) {
      case "SetMark": {
        this.N(this.a).addMark();
      }
      default: {
        const { key, value } = $dAb(command);
        if (value === void 0) {
          return true;
        }
        switch (key) {
          case "CurrentDir":
            this.G(value);
            return true;
        }
      }
    }
    return false;
  }
  I(data) {
    if (!this.a) {
      return false;
    }
    const [command, ...args] = data.split(";");
    switch (command) {
      case "9":
        if (args.length) {
          this.G(args[0]);
        }
        return true;
    }
    return false;
  }
  /**
   * Handles the sequence: `OSC 7 ; scheme://cwd ST`
   */
  J(data) {
    if (!this.a) {
      return false;
    }
    const [command] = data.split(";");
    if (command.match(/^file:\/\/.*\//)) {
      const uri = URI.parse(command);
      if (uri.path && uri.path.length > 0) {
        this.G(uri.path);
        return true;
      }
    }
    return false;
  }
  serialize() {
    if (!this.a || !this.capabilities.has(
      2
      /* TerminalCapability.CommandDetection */
    )) {
      return {
        isWindowsPty: false,
        commands: [],
        promptInputModel: void 0
      };
    }
    const result = this.M(this.a).serialize();
    return result;
  }
  deserialize(serialized) {
    if (!this.a) {
      throw new Error("Cannot restore commands before addon is activated");
    }
    this.M(this.a).deserialize(serialized);
  }
  L() {
    let cwdDetection = this.capabilities.get(
      0
      /* TerminalCapability.CwdDetection */
    );
    if (!cwdDetection) {
      cwdDetection = this.B(new $$zb());
      this.capabilities.add(0, cwdDetection);
    }
    return cwdDetection;
  }
  M(terminal) {
    let commandDetection = this.capabilities.get(
      2
      /* TerminalCapability.CommandDetection */
    );
    if (!commandDetection) {
      commandDetection = this.B(new $9zb(terminal, this.r));
      this.capabilities.add(2, commandDetection);
    }
    return commandDetection;
  }
  N(terminal) {
    let bufferMarkDetection = this.capabilities.get(
      4
      /* TerminalCapability.BufferMarkDetection */
    );
    if (!bufferMarkDetection) {
      bufferMarkDetection = this.B(new $aAb(terminal));
      this.capabilities.add(4, bufferMarkDetection);
    }
    return bufferMarkDetection;
  }
};
function $cAb(message) {
  return message.replaceAll(
    // Backslash ('\') followed by an escape operator: either another '\', or 'x' and two hex chars.
    /\\(\\|x([0-9a-f]{2}))/gi,
    // If it's a hex value, parse it to a character.
    // Otherwise the operator is '\', which we return literally, now unescaped.
    (_match, op, hex) => hex ? String.fromCharCode(parseInt(hex, 16)) : op
  );
}
function $dAb(message) {
  const separatorIndex = message.indexOf("=");
  if (separatorIndex === -1) {
    return { key: message, value: void 0 };
  }
  return {
    key: message.substring(0, separatorIndex),
    value: message.substring(1 + separatorIndex)
  };
}
function $eAb(sequence) {
  let id2 = void 0;
  let hidden = false;
  for (const property of sequence) {
    if (property === void 0) {
      continue;
    }
    if (property === "Hidden") {
      hidden = true;
    }
    if (property.startsWith("Id=")) {
      id2 = property.substring(3);
    }
  }
  return { id: id2, hidden };
}

// out-build/vs/platform/terminal/common/terminalStrings.js
function $M1b(message, options = {}) {
  let result = "";
  if (!options.excludeLeadingNewLine) {
    result += "\r\n";
  }
  result += "\x1B[0m\x1B[7m * ";
  if (options.loudFormatting) {
    result += "\x1B[0;104m";
  } else {
    result += "\x1B[0m";
  }
  result += ` ${message} \x1B[0m
\r`;
  return result;
}

// out-build/vs/platform/terminal/node/ptyService.js
import { join } from "path";

// out-build/vs/base/common/performance.js
var module2 = { exports: {} };
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
  } else if (typeof module2 === "object" && typeof module2.exports === "object") {
    module2.exports = _factory(sharedObj);
  } else {
    console.trace("perf-util defined in UNKNOWN context (neither requirejs or commonjs)");
    sharedObj.perf = _factory(sharedObj);
  }
})();
var mark = module2.exports.mark;
var getMarks = module2.exports.getMarks;

// out-build/vs/platform/terminal/node/ptyService.js
import pkg from "@xterm/headless";
var { Terminal: XtermTerminal } = pkg;
function $kpc(_target, key, descriptor) {
  if (typeof descriptor.value !== "function") {
    throw new Error("not supported");
  }
  const fnKey = "value";
  const fn = descriptor.value;
  descriptor[fnKey] = async function(...args) {
    if (this.traceRpcArgs.logService.getLevel() === LogLevel.Trace) {
      this.traceRpcArgs.logService.trace(`[RPC Request] PtyService#${fn.name}(${args.map((e) => JSON.stringify(e)).join(", ")})`);
    }
    if (this.traceRpcArgs.simulatedLatency) {
      await $Yh(this.traceRpcArgs.simulatedLatency);
    }
    let result;
    try {
      result = await fn.apply(this, args);
    } catch (e) {
      this.traceRpcArgs.logService.error(`[RPC Response] PtyService#${fn.name}`, e);
      throw e;
    }
    if (this.traceRpcArgs.logService.getLevel() === LogLevel.Trace) {
      this.traceRpcArgs.logService.trace(`[RPC Response] PtyService#${fn.name}`, result);
    }
    return result;
  };
}
var SerializeAddon;
var Unicode11Addon;
var $lpc = class extends $9c {
  H(name, event) {
    event((e) => {
      if (this.I.getLevel() === LogLevel.Trace) {
        this.I.trace(`[RPC Event] PtyService#${name}.fire(${JSON.stringify(e)})`);
      }
    });
    return event;
  }
  get traceRpcArgs() {
    return {
      logService: this.I,
      simulatedLatency: this.M
    };
  }
  constructor(I, J, L, M) {
    super();
    this.I = I;
    this.J = J;
    this.L = L;
    this.M = M;
    this.a = /* @__PURE__ */ new Map();
    this.b = /* @__PURE__ */ new Map();
    this.g = /* @__PURE__ */ new Map();
    this.j = /* @__PURE__ */ new Map();
    this.n = 0;
    this.u = this.B(new $Ce());
    this.onHeartbeat = this.H("_onHeartbeat", this.u.event);
    this.w = this.B(new $Ce());
    this.onProcessData = this.H("_onProcessData", this.w.event);
    this.y = this.B(new $Ce());
    this.onProcessReplay = this.H("_onProcessReplay", this.y.event);
    this.z = this.B(new $Ce());
    this.onProcessReady = this.H("_onProcessReady", this.z.event);
    this.C = this.B(new $Ce());
    this.onProcessExit = this.H("_onProcessExit", this.C.event);
    this.D = this.B(new $Ce());
    this.onProcessOrphanQuestion = this.H("_onProcessOrphanQuestion", this.D.event);
    this.F = this.B(new $Ce());
    this.onDidRequestDetach = this.H("_onDidRequestDetach", this.F.event);
    this.G = this.B(new $Ce());
    this.onDidChangeProperty = this.H("_onDidChangeProperty", this.G.event);
    this.B($7c(() => {
      for (const pty of this.a.values()) {
        pty.shutdown(true);
      }
      this.a.clear();
    }));
    this.f = this.B(new $Rs(void 0, this.I));
    this.f.onCreateRequest(this.F.fire, this.F);
  }
  async refreshIgnoreProcessNames(names) {
    $fpc.length = 0;
    $fpc.push(...names);
  }
  async requestDetachInstance(workspaceId, instanceId) {
    return this.f.createRequest({ workspaceId, instanceId });
  }
  async acceptDetachInstanceReply(requestId, persistentProcessId) {
    let processDetails = void 0;
    const pty = this.a.get(persistentProcessId);
    if (pty) {
      processDetails = await this.S(persistentProcessId, pty);
    }
    this.f.acceptReply(requestId, processDetails);
  }
  async freePortKillProcess(port) {
    const stdout = await new Promise((resolve, reject) => {
      exec3($l ? `netstat -ano | findstr "${port}"` : `lsof -nP -iTCP -sTCP:LISTEN | grep ${port}`, {}, (err, stdout2) => {
        if (err) {
          return reject("Problem occurred when listing active processes");
        }
        resolve(stdout2);
      });
    });
    const processesForPort = stdout.split(/\r?\n/).filter((s) => !!s.trim());
    if (processesForPort.length >= 1) {
      const capturePid = /\s+(\d+)(?:\s+|$)/;
      const processId = processesForPort[0].match(capturePid)?.[1];
      if (processId) {
        try {
          process.kill(Number.parseInt(processId));
        } catch {
        }
      } else {
        throw new Error(`Processes for port ${port} were not found`);
      }
      return { port, processId };
    }
    throw new Error(`Could not kill process with port ${port}`);
  }
  async serializeTerminalState(ids) {
    const promises4 = [];
    for (const [persistentProcessId, persistentProcess] of this.a.entries()) {
      if (persistentProcess.hasWrittenData && ids.indexOf(persistentProcessId) !== -1) {
        promises4.push(Promises.withAsyncBody(async (r) => {
          r({
            id: persistentProcessId,
            shellLaunchConfig: persistentProcess.shellLaunchConfig,
            processDetails: await this.S(persistentProcessId, persistentProcess),
            processLaunchConfig: persistentProcess.processLaunchOptions,
            unicodeVersion: persistentProcess.unicodeVersion,
            replayEvent: await persistentProcess.serializeNormalBuffer(),
            timestamp: Date.now()
          });
        }));
      }
    }
    const serialized = {
      version: 1,
      state: await Promise.all(promises4)
    };
    return JSON.stringify(serialized);
  }
  async reviveTerminalProcesses(workspaceId, state, dateTimeFormatLocale) {
    const promises4 = [];
    for (const terminal of state) {
      promises4.push(this.N(workspaceId, terminal));
    }
    await Promise.all(promises4);
  }
  async N(workspaceId, terminal) {
    const restoreMessage = localize(2128, null);
    const newId = await this.createProcess({
      ...terminal.shellLaunchConfig,
      cwd: terminal.processDetails.cwd,
      color: terminal.processDetails.color,
      icon: terminal.processDetails.icon,
      name: terminal.processDetails.titleSource === TitleEventSource.Api ? terminal.processDetails.title : void 0,
      initialText: terminal.replayEvent.events[0].data + $M1b(restoreMessage, { loudFormatting: true })
    }, terminal.processDetails.cwd, terminal.replayEvent.events[0].cols, terminal.replayEvent.events[0].rows, terminal.unicodeVersion, terminal.processLaunchConfig.env, terminal.processLaunchConfig.executableEnv, terminal.processLaunchConfig.options, true, terminal.processDetails.workspaceId, terminal.processDetails.workspaceName, true, terminal.replayEvent.events[0].data);
    const oldId = this.R(workspaceId, terminal.id);
    this.g.set(oldId, { newId, state: terminal });
    this.I.info(`Revived process, old id ${oldId} -> new id ${newId}`);
  }
  async shutdownAll() {
    this.dispose();
  }
  async createProcess(shellLaunchConfig, cwd2, cols, rows, unicodeVersion, env2, executableEnv, options, shouldPersist, workspaceId, workspaceName, isReviving, rawReviveBuffer) {
    if (shellLaunchConfig.attachPersistentProcess) {
      throw new Error("Attempt to create a process when attach object was provided");
    }
    const id2 = ++this.n;
    const process2 = new $jpc(shellLaunchConfig, cwd2, cols, rows, env2, executableEnv, options, this.I, this.J);
    const processLaunchOptions = {
      env: env2,
      executableEnv,
      options
    };
    const persistentProcess = new PersistentTerminalProcess(id2, process2, workspaceId, workspaceName, shouldPersist, cols, rows, processLaunchOptions, unicodeVersion, this.L, this.I, isReviving && typeof shellLaunchConfig.initialText === "string" ? shellLaunchConfig.initialText : void 0, rawReviveBuffer, shellLaunchConfig.icon, shellLaunchConfig.color, shellLaunchConfig.name, shellLaunchConfig.fixedDimensions);
    process2.onProcessExit((event) => {
      persistentProcess.dispose();
      this.a.delete(id2);
      this.C.fire({ id: id2, event });
    });
    persistentProcess.onProcessData((event) => this.w.fire({ id: id2, event }));
    persistentProcess.onProcessReplay((event) => this.y.fire({ id: id2, event }));
    persistentProcess.onProcessReady((event) => this.z.fire({ id: id2, event }));
    persistentProcess.onProcessOrphanQuestion(() => this.D.fire({ id: id2 }));
    persistentProcess.onDidChangeProperty((property) => this.G.fire({ id: id2, property }));
    persistentProcess.onPersistentProcessReady(() => {
      for (const e of this.j.entries()) {
        persistentProcess.installAutoReply(e[0], e[1]);
      }
    });
    this.a.set(id2, persistentProcess);
    return id2;
  }
  async attachToProcess(id2) {
    try {
      await this.U(id2).attach();
      this.I.info(`Persistent process reconnection "${id2}"`);
    } catch (e) {
      this.I.warn(`Persistent process reconnection "${id2}" failed`, e.message);
      throw e;
    }
  }
  async updateTitle(id2, title, titleSource) {
    this.U(id2).setTitle(title, titleSource);
  }
  async updateIcon(id2, userInitiated, icon, color) {
    this.U(id2).setIcon(userInitiated, icon, color);
  }
  async clearBuffer(id2) {
    this.U(id2).clearBuffer();
  }
  async refreshProperty(id2, type) {
    return this.U(id2).refreshProperty(type);
  }
  async updateProperty(id2, type, value) {
    return this.U(id2).updateProperty(type, value);
  }
  async detachFromProcess(id2, forcePersist) {
    return this.U(id2).detach(forcePersist);
  }
  async reduceConnectionGraceTime() {
    for (const pty of this.a.values()) {
      pty.reduceGraceTime();
    }
  }
  async listProcesses() {
    const persistentProcesses = Array.from(this.a.entries()).filter(([_, pty]) => pty.shouldPersistTerminal);
    this.I.info(`Listing ${persistentProcesses.length} persistent terminals, ${this.a.size} total terminals`);
    const promises4 = persistentProcesses.map(async ([id2, terminalProcessData]) => this.S(id2, terminalProcessData));
    const allTerminals = await Promise.all(promises4);
    return allTerminals.filter((entry) => entry.isOrphan);
  }
  async getPerformanceMarks() {
    return getMarks();
  }
  async start(id2) {
    const pty = this.a.get(id2);
    return pty ? pty.start() : { message: `Could not find pty with id "${id2}"` };
  }
  async shutdown(id2, immediate) {
    return this.a.get(id2)?.shutdown(immediate);
  }
  async input(id2, data) {
    return this.U(id2).input(data);
  }
  async processBinary(id2, data) {
    return this.U(id2).writeBinary(data);
  }
  async resize(id2, cols, rows) {
    return this.U(id2).resize(cols, rows);
  }
  async getInitialCwd(id2) {
    return this.U(id2).getInitialCwd();
  }
  async getCwd(id2) {
    return this.U(id2).getCwd();
  }
  async acknowledgeDataEvent(id2, charCount) {
    return this.U(id2).acknowledgeDataEvent(charCount);
  }
  async setUnicodeVersion(id2, version) {
    return this.U(id2).setUnicodeVersion(version);
  }
  async getLatency() {
    return [];
  }
  async orphanQuestionReply(id2) {
    return this.U(id2).orphanQuestionReply();
  }
  async installAutoReply(match, reply) {
    this.j.set(match, reply);
    for (const p of this.a.values()) {
      p.installAutoReply(match, reply);
    }
  }
  async uninstallAllAutoReplies() {
    for (const match of this.j.keys()) {
      for (const p of this.a.values()) {
        p.uninstallAutoReply(match);
      }
    }
  }
  async uninstallAutoReply(match) {
    for (const p of this.a.values()) {
      p.uninstallAutoReply(match);
    }
  }
  async getDefaultSystemShell(osOverride = OS) {
    return $Sm(osOverride, process.env);
  }
  async getEnvironment() {
    return { ...process.env };
  }
  async getWslPath(original, direction) {
    if (direction === "win-to-unix") {
      if (!$l) {
        return original;
      }
      if ($8s() < 17063) {
        return original.replace(/\\/g, "/");
      }
      const wslExecutable = this.O();
      if (!wslExecutable) {
        return original;
      }
      return new Promise((c) => {
        const proc = execFile(wslExecutable, ["-e", "wslpath", original], {}, (error, stdout, stderr) => {
          c(error ? original : $YR(stdout.trim()));
        });
        proc.stdin.end();
      });
    }
    if (direction === "unix-to-win") {
      if ($l) {
        if ($8s() < 17063) {
          return original;
        }
        const wslExecutable = this.O();
        if (!wslExecutable) {
          return original;
        }
        return new Promise((c) => {
          const proc = execFile(wslExecutable, ["-e", "wslpath", "-w", original], {}, (error, stdout, stderr) => {
            c(error ? original : stdout.trim());
          });
          proc.stdin.end();
        });
      }
    }
    return original;
  }
  O() {
    const useWSLexe = $8s() >= 16299;
    const is32ProcessOn64Windows = process.env.hasOwnProperty("PROCESSOR_ARCHITEW6432");
    const systemRoot = process.env["SystemRoot"];
    if (systemRoot) {
      return join(systemRoot, is32ProcessOn64Windows ? "Sysnative" : "System32", useWSLexe ? "wsl.exe" : "bash.exe");
    }
    return void 0;
  }
  async getRevivedPtyNewId(workspaceId, id2) {
    try {
      return this.g.get(this.R(workspaceId, id2))?.newId;
    } catch (e) {
      this.I.warn(`Couldn't find terminal ID ${workspaceId}-${id2}`, e.message);
    }
    return void 0;
  }
  async setTerminalLayoutInfo(args) {
    this.b.set(args.workspaceId, args);
  }
  async getTerminalLayoutInfo(args) {
    mark("code/willGetTerminalLayoutInfo");
    const layout = this.b.get(args.workspaceId);
    if (layout) {
      const doneSet = /* @__PURE__ */ new Set();
      const expandedTabs = await Promise.all(layout.tabs.map(async (tab) => this.P(args.workspaceId, tab, doneSet)));
      const tabs = expandedTabs.filter((t) => t.terminals.length > 0);
      mark("code/didGetTerminalLayoutInfo");
      return { tabs };
    }
    mark("code/didGetTerminalLayoutInfo");
    return void 0;
  }
  async P(workspaceId, tab, doneSet) {
    const expandedTerminals = await Promise.all(tab.terminals.map((t) => this.Q(workspaceId, t, doneSet)));
    const filtered = expandedTerminals.filter((term) => term.terminal !== null);
    return {
      isActive: tab.isActive,
      activePersistentProcessId: tab.activePersistentProcessId,
      terminals: filtered
    };
  }
  async Q(workspaceId, t, doneSet) {
    try {
      const oldId = this.R(workspaceId, t.terminal);
      const revivedPtyId = this.g.get(oldId)?.newId;
      this.I.info(`Expanding terminal instance, old id ${oldId} -> new id ${revivedPtyId}`);
      this.g.delete(oldId);
      const persistentProcessId = revivedPtyId ?? t.terminal;
      if (doneSet.has(persistentProcessId)) {
        throw new Error(`Terminal ${persistentProcessId} has already been expanded`);
      }
      doneSet.add(persistentProcessId);
      const persistentProcess = this.U(persistentProcessId);
      const processDetails = persistentProcess && await this.S(t.terminal, persistentProcess, revivedPtyId !== void 0);
      return {
        terminal: { ...processDetails, id: persistentProcessId },
        relativeSize: t.relativeSize
      };
    } catch (e) {
      this.I.warn(`Couldn't get layout info, a terminal was probably disconnected`, e.message);
      this.I.debug("Reattach to wrong terminal debug info - layout info by id", t);
      this.I.debug("Reattach to wrong terminal debug info - _revivePtyIdMap", Array.from(this.g.values()));
      this.I.debug("Reattach to wrong terminal debug info - _ptys ids", Array.from(this.a.keys()));
      return {
        terminal: null,
        relativeSize: t.relativeSize
      };
    }
  }
  R(workspaceId, ptyId) {
    return `${workspaceId}-${ptyId}`;
  }
  async S(id2, persistentProcess, wasRevived = false) {
    mark(`code/willBuildProcessDetails/${id2}`);
    const [cwd2, isOrphan] = await Promise.all([persistentProcess.getCwd(), wasRevived ? true : persistentProcess.isOrphaned()]);
    const result = {
      id: id2,
      title: persistentProcess.title,
      titleSource: persistentProcess.titleSource,
      pid: persistentProcess.pid,
      workspaceId: persistentProcess.workspaceId,
      workspaceName: persistentProcess.workspaceName,
      cwd: cwd2,
      isOrphan,
      icon: persistentProcess.icon,
      color: persistentProcess.color,
      fixedDimensions: persistentProcess.fixedDimensions,
      environmentVariableCollections: persistentProcess.processLaunchOptions.options.environmentVariableCollections,
      reconnectionProperties: persistentProcess.shellLaunchConfig.reconnectionProperties,
      waitOnExit: persistentProcess.shellLaunchConfig.waitOnExit,
      hideFromUser: persistentProcess.shellLaunchConfig.hideFromUser,
      isFeatureTerminal: persistentProcess.shellLaunchConfig.isFeatureTerminal,
      type: persistentProcess.shellLaunchConfig.type,
      hasChildProcesses: persistentProcess.hasChildProcesses,
      shellIntegrationNonce: persistentProcess.processLaunchOptions.options.shellIntegration.nonce
    };
    mark(`code/didBuildProcessDetails/${id2}`);
    return result;
  }
  U(id2) {
    const pty = this.a.get(id2);
    if (!pty) {
      throw new $ob(`Could not find pty ${id2} on pty host`);
    }
    return pty;
  }
};
__decorate([
  $pi
], $lpc.prototype, "traceRpcArgs", null);
__decorate([
  $kpc
], $lpc.prototype, "refreshIgnoreProcessNames", null);
__decorate([
  $kpc
], $lpc.prototype, "requestDetachInstance", null);
__decorate([
  $kpc
], $lpc.prototype, "acceptDetachInstanceReply", null);
__decorate([
  $kpc
], $lpc.prototype, "freePortKillProcess", null);
__decorate([
  $kpc
], $lpc.prototype, "serializeTerminalState", null);
__decorate([
  $kpc
], $lpc.prototype, "reviveTerminalProcesses", null);
__decorate([
  $kpc
], $lpc.prototype, "shutdownAll", null);
__decorate([
  $kpc
], $lpc.prototype, "createProcess", null);
__decorate([
  $kpc
], $lpc.prototype, "attachToProcess", null);
__decorate([
  $kpc
], $lpc.prototype, "updateTitle", null);
__decorate([
  $kpc
], $lpc.prototype, "updateIcon", null);
__decorate([
  $kpc
], $lpc.prototype, "clearBuffer", null);
__decorate([
  $kpc
], $lpc.prototype, "refreshProperty", null);
__decorate([
  $kpc
], $lpc.prototype, "updateProperty", null);
__decorate([
  $kpc
], $lpc.prototype, "detachFromProcess", null);
__decorate([
  $kpc
], $lpc.prototype, "reduceConnectionGraceTime", null);
__decorate([
  $kpc
], $lpc.prototype, "listProcesses", null);
__decorate([
  $kpc
], $lpc.prototype, "getPerformanceMarks", null);
__decorate([
  $kpc
], $lpc.prototype, "start", null);
__decorate([
  $kpc
], $lpc.prototype, "shutdown", null);
__decorate([
  $kpc
], $lpc.prototype, "input", null);
__decorate([
  $kpc
], $lpc.prototype, "processBinary", null);
__decorate([
  $kpc
], $lpc.prototype, "resize", null);
__decorate([
  $kpc
], $lpc.prototype, "getInitialCwd", null);
__decorate([
  $kpc
], $lpc.prototype, "getCwd", null);
__decorate([
  $kpc
], $lpc.prototype, "acknowledgeDataEvent", null);
__decorate([
  $kpc
], $lpc.prototype, "setUnicodeVersion", null);
__decorate([
  $kpc
], $lpc.prototype, "getLatency", null);
__decorate([
  $kpc
], $lpc.prototype, "orphanQuestionReply", null);
__decorate([
  $kpc
], $lpc.prototype, "installAutoReply", null);
__decorate([
  $kpc
], $lpc.prototype, "uninstallAllAutoReplies", null);
__decorate([
  $kpc
], $lpc.prototype, "uninstallAutoReply", null);
__decorate([
  $kpc
], $lpc.prototype, "getDefaultSystemShell", null);
__decorate([
  $kpc
], $lpc.prototype, "getEnvironment", null);
__decorate([
  $kpc
], $lpc.prototype, "getWslPath", null);
__decorate([
  $kpc
], $lpc.prototype, "getRevivedPtyNewId", null);
__decorate([
  $kpc
], $lpc.prototype, "setTerminalLayoutInfo", null);
__decorate([
  $kpc
], $lpc.prototype, "getTerminalLayoutInfo", null);
var InteractionState;
(function(InteractionState2) {
  InteractionState2["None"] = "None";
  InteractionState2["ReplayOnly"] = "ReplayOnly";
  InteractionState2["Session"] = "Session";
})(InteractionState || (InteractionState = {}));
var PersistentTerminalProcess = class extends $9c {
  get pid() {
    return this.L;
  }
  get shellLaunchConfig() {
    return this.W.shellLaunchConfig;
  }
  get hasWrittenData() {
    return this.j.value !== "None";
  }
  get title() {
    return this.N || this.W.currentTitle;
  }
  get titleSource() {
    return this.O;
  }
  get icon() {
    return this.Y;
  }
  get color() {
    return this.Z;
  }
  get fixedDimensions() {
    return this.R;
  }
  get hasChildProcesses() {
    return this.W.hasChildProcesses;
  }
  setTitle(title, titleSource) {
    if (titleSource === TitleEventSource.Api) {
      this.j.setValue("Session", "setTitle");
      this.P.freeRawReviveBuffer();
    }
    this.N = title;
    this.O = titleSource;
  }
  setIcon(userInitiated, icon, color) {
    if (!this.Y || "id" in icon && "id" in this.Y && icon.id !== this.Y.id || !this.color || color !== this.Z) {
      this.P.freeRawReviveBuffer();
      if (userInitiated) {
        this.j.setValue("Session", "setIcon");
      }
    }
    this.Y = icon;
    this.Z = color;
  }
  S(fixedDimensions) {
    this.R = fixedDimensions;
  }
  constructor(U, W, workspaceId, workspaceName, shouldPersistTerminal, cols, rows, processLaunchOptions, unicodeVersion, reconnectConstants, X, reviveBuffer, rawReviveBuffer, Y, Z, name, fixedDimensions) {
    super();
    this.U = U;
    this.W = W;
    this.workspaceId = workspaceId;
    this.workspaceName = workspaceName;
    this.shouldPersistTerminal = shouldPersistTerminal;
    this.processLaunchOptions = processLaunchOptions;
    this.unicodeVersion = unicodeVersion;
    this.X = X;
    this.Y = Y;
    this.Z = Z;
    this.b = /* @__PURE__ */ new Map();
    this.f = /* @__PURE__ */ new Map();
    this.g = false;
    this.w = new $5h();
    this.C = this.B(new $Ce());
    this.onProcessReplay = this.C.event;
    this.D = this.B(new $Ce());
    this.onProcessReady = this.D.event;
    this.F = this.B(new $Ce());
    this.onPersistentProcessReady = this.F.event;
    this.G = this.B(new $Ce());
    this.onProcessData = this.G.event;
    this.H = this.B(new $Ce());
    this.onProcessOrphanQuestion = this.H.event;
    this.I = this.B(new $Ce());
    this.onDidChangeProperty = this.I.event;
    this.J = false;
    this.L = -1;
    this.M = "";
    this.O = TitleEventSource.Process;
    this.j = new MutationLogger(`Persistent process "${this.U}" interaction state`, "None", this.X);
    this.Q = reviveBuffer !== void 0;
    this.P = new XtermSerializer(cols, rows, reconnectConstants.scrollback, unicodeVersion, reviveBuffer, processLaunchOptions.options.shellIntegration.nonce, shouldPersistTerminal ? rawReviveBuffer : void 0, this.X);
    if (name) {
      this.setTitle(name, TitleEventSource.Api);
    }
    this.R = fixedDimensions;
    this.n = null;
    this.u = 0;
    this.y = this.B(new $$h(() => {
      this.X.info(`Persistent process "${this.U}": The reconnection grace time of ${printTime(reconnectConstants.graceTime)} has expired, shutting down pid "${this.L}"`);
      this.shutdown(true);
    }, reconnectConstants.graceTime));
    this.z = this.B(new $$h(() => {
      this.X.info(`Persistent process "${this.U}": The short reconnection grace time of ${printTime(reconnectConstants.shortGraceTime)} has expired, shutting down pid ${this.L}`);
      this.shutdown(true);
    }, reconnectConstants.shortGraceTime));
    this.B(this.W.onProcessExit(() => this.a.stopBuffering(this.U)));
    this.B(this.W.onProcessReady((e) => {
      this.L = e.pid;
      this.M = e.cwd;
      this.D.fire(e);
    }));
    this.B(this.W.onDidChangeProperty((e) => {
      this.I.fire(e);
    }));
    this.a = new $yBb((_, data) => this.G.fire(data));
    this.B(this.a.startBuffering(this.U, this.W.onProcessData));
    this.B(this.onProcessData((e) => this.P.handleData(e)));
    this.B($7c(() => {
      for (const e of this.b.values()) {
        e.dispose();
      }
      this.b.clear();
    }));
  }
  async attach() {
    if (!this.y.isScheduled() && !this.z.isScheduled()) {
      this.X.warn(`Persistent process "${this.U}": Process had no disconnect runners but was an orphan`);
    }
    this.y.cancel();
    this.z.cancel();
  }
  async detach(forcePersist) {
    if (this.shouldPersistTerminal && (this.j.value !== "None" || forcePersist)) {
      this.y.schedule();
    } else {
      this.shutdown(true);
    }
  }
  serializeNormalBuffer() {
    return this.P.generateReplayEvent(
      true,
      this.j.value !== "Session"
      /* InteractionState.Session */
    );
  }
  async refreshProperty(type) {
    return this.W.refreshProperty(type);
  }
  async updateProperty(type, value) {
    if (type === "fixedDimensions") {
      return this.S(value);
    }
  }
  async start() {
    if (!this.g) {
      const result = await this.W.start();
      if (result && "message" in result) {
        return result;
      }
      this.g = true;
      if (this.Q) {
        this.triggerReplay();
      } else {
        this.F.fire();
      }
      return result;
    }
    this.D.fire({ pid: this.L, cwd: this.M, windowsPty: this.W.getWindowsPty() });
    this.I.fire({ type: "title", value: this.W.currentTitle });
    this.I.fire({ type: "shellType", value: this.W.shellType });
    this.triggerReplay();
    return void 0;
  }
  shutdown(immediate) {
    return this.W.shutdown(immediate);
  }
  input(data) {
    this.j.setValue("Session", "input");
    this.P.freeRawReviveBuffer();
    if (this.J) {
      return;
    }
    for (const listener of this.b.values()) {
      listener.handleInput();
    }
    return this.W.input(data);
  }
  writeBinary(data) {
    return this.W.processBinary(data);
  }
  resize(cols, rows) {
    if (this.J) {
      return;
    }
    this.P.handleResize(cols, rows);
    this.a.flushBuffer(this.U);
    for (const listener of this.b.values()) {
      listener.handleResize();
    }
    return this.W.resize(cols, rows);
  }
  async clearBuffer() {
    this.P.clearBuffer();
    this.W.clearBuffer();
  }
  setUnicodeVersion(version) {
    this.unicodeVersion = version;
    this.P.setUnicodeVersion?.(version);
  }
  acknowledgeDataEvent(charCount) {
    if (this.J) {
      return;
    }
    return this.W.acknowledgeDataEvent(charCount);
  }
  getInitialCwd() {
    return this.W.getInitialCwd();
  }
  getCwd() {
    return this.W.getCwd();
  }
  async triggerReplay() {
    if (this.j.value === "None") {
      this.j.setValue("ReplayOnly", "triggerReplay");
    }
    const ev = await this.P.generateReplayEvent();
    let dataLength = 0;
    for (const e of ev.events) {
      dataLength += e.data.length;
    }
    this.X.info(`Persistent process "${this.U}": Replaying ${dataLength} chars and ${ev.events.length} size events`);
    this.C.fire(ev);
    this.W.clearUnacknowledgedChars();
    this.F.fire();
  }
  installAutoReply(match, reply) {
    this.b.get(match)?.dispose();
    this.b.set(match, new $epc(this.W, match, reply, this.X));
  }
  uninstallAutoReply(match) {
    const autoReply = this.b.get(match);
    autoReply?.dispose();
    this.b.delete(match);
  }
  sendCommandResult(reqId, isError, serializedPayload) {
    const data = this.f.get(reqId);
    if (!data) {
      return;
    }
    this.f.delete(reqId);
  }
  orphanQuestionReply() {
    this.u = Date.now();
    if (this.n) {
      const barrier = this.n;
      this.n = null;
      barrier.open();
    }
  }
  reduceGraceTime() {
    if (this.z.isScheduled()) {
      return;
    }
    if (this.y.isScheduled()) {
      this.z.schedule();
    }
  }
  async isOrphaned() {
    return await this.w.queue(async () => this.$());
  }
  async $() {
    if (this.y.isScheduled() || this.z.isScheduled()) {
      return true;
    }
    if (!this.n) {
      this.n = new $Xh(4e3);
      this.u = 0;
      this.H.fire();
    }
    await this.n.wait();
    return Date.now() - this.u > 500;
  }
};
var MutationLogger = class {
  get value() {
    return this.b;
  }
  setValue(value, reason) {
    if (this.b !== value) {
      this.b = value;
      this.f(reason);
    }
  }
  constructor(a, b, d) {
    this.a = a;
    this.b = b;
    this.d = d;
    this.f("initialized");
  }
  f(reason) {
    this.d.debug(`MutationLogger "${this.a}" set to "${this.b}", reason: ${reason}`);
  }
};
var XtermSerializer = class {
  constructor(cols, rows, scrollback, unicodeVersion, reviveBufferWithRestoreMessage, shellIntegrationNonce, f, logService) {
    this.f = f;
    this.a = new XtermTerminal({
      cols,
      rows,
      scrollback,
      allowProposedApi: true
    });
    if (reviveBufferWithRestoreMessage) {
      this.a.writeln(reviveBufferWithRestoreMessage);
    }
    this.setUnicodeVersion(unicodeVersion);
    this.b = new $bAb(shellIntegrationNonce, true, void 0, logService);
    this.a.loadAddon(this.b);
  }
  freeRawReviveBuffer() {
    this.f = void 0;
  }
  handleData(data) {
    this.a.write(data);
  }
  handleResize(cols, rows) {
    this.a.resize(cols, rows);
  }
  clearBuffer() {
    this.a.clear();
  }
  async generateReplayEvent(normalBufferOnly, restoreToLastReviveBuffer) {
    const serialize = new (await this._getSerializeConstructor())();
    this.a.loadAddon(serialize);
    const options = {
      scrollback: this.a.options.scrollback
    };
    if (normalBufferOnly) {
      options.excludeAltBuffer = true;
      options.excludeModes = true;
    }
    let serialized;
    if (restoreToLastReviveBuffer && this.f) {
      serialized = this.f;
    } else {
      serialized = serialize.serialize(options);
    }
    return {
      events: [
        {
          cols: this.a.cols,
          rows: this.a.rows,
          data: serialized
        }
      ],
      commands: this.b.serialize()
    };
  }
  async setUnicodeVersion(version) {
    if (this.a.unicode.activeVersion === version) {
      return;
    }
    if (version === "11") {
      this.d = new (await this._getUnicode11Constructor())();
      this.a.loadAddon(this.d);
    } else {
      this.d?.dispose();
      this.d = void 0;
    }
    this.a.unicode.activeVersion = version;
  }
  async _getUnicode11Constructor() {
    if (!Unicode11Addon) {
      Unicode11Addon = (await import("@xterm/addon-unicode11")).Unicode11Addon;
    }
    return Unicode11Addon;
  }
  async _getSerializeConstructor() {
    if (!SerializeAddon) {
      SerializeAddon = (await import("@xterm/addon-serialize")).SerializeAddon;
    }
    return SerializeAddon;
  }
};
function printTime(ms) {
  let h = 0;
  let m = 0;
  let s = 0;
  if (ms >= 1e3) {
    s = Math.floor(ms / 1e3);
    ms -= s * 1e3;
  }
  if (s >= 60) {
    m = Math.floor(s / 60);
    s -= m * 60;
  }
  if (m >= 60) {
    h = Math.floor(m / 60);
    m -= h * 60;
  }
  const _h = h ? `${h}h` : ``;
  const _m = m ? `${m}m` : ``;
  const _s = s ? `${s}s` : ``;
  const _ms = ms ? `${ms}ms` : ``;
  return `${_h}${_m}${_s}${_ms}`;
}

// out-build/vs/platform/terminal/node/ptyHostMain.js
startPtyHost();
async function startPtyHost() {
  const startupDelay = parseInt(process.env.VSCODE_STARTUP_DELAY ?? "0");
  const simulatedLatency = parseInt(process.env.VSCODE_LATENCY ?? "0");
  const reconnectConstants = {
    graceTime: parseInt(process.env.VSCODE_RECONNECT_GRACE_TIME || "0"),
    shortGraceTime: parseInt(process.env.VSCODE_RECONNECT_SHORT_GRACE_TIME || "0"),
    scrollback: parseInt(process.env.VSCODE_RECONNECT_SCROLLBACK || "100")
  };
  delete process.env.VSCODE_RECONNECT_GRACE_TIME;
  delete process.env.VSCODE_RECONNECT_SHORT_GRACE_TIME;
  delete process.env.VSCODE_RECONNECT_SCROLLBACK;
  delete process.env.VSCODE_LATENCY;
  delete process.env.VSCODE_STARTUP_DELAY;
  if (startupDelay) {
    await $Yh(startupDelay);
  }
  const _isUtilityProcess = $XY(process);
  let server;
  if (_isUtilityProcess) {
    server = new $YY();
  } else {
    server = new $Cr(TerminalIpcChannels.PtyHost);
  }
  const productService = { _serviceBrand: void 0, ...product_default };
  const environmentService = new $pn($Vm(process.argv, $Um), productService);
  const loggerService = new $mS($Gk(environmentService), environmentService.logsHome);
  server.registerChannel(TerminalIpcChannels.Logger, new $Ps(loggerService, () => $7n));
  const logger = loggerService.createLogger("ptyhost", { name: localize(2127, null) });
  const logService = new $wS(logger);
  if (startupDelay) {
    logService.warn(`Pty Host startup is delayed ${startupDelay}ms`);
  }
  if (simulatedLatency) {
    logService.warn(`Pty host is simulating ${simulatedLatency}ms latency`);
  }
  const disposables = new $8c();
  const heartbeatService = new $hpc();
  server.registerChannel(TerminalIpcChannels.Heartbeat, ProxyChannel.fromService(heartbeatService, disposables));
  const ptyService = new $lpc(logService, productService, reconnectConstants, simulatedLatency);
  const ptyServiceChannel = ProxyChannel.fromService(ptyService, disposables);
  server.registerChannel(TerminalIpcChannels.PtyHost, ptyServiceChannel);
  if (_isUtilityProcess) {
    server.registerChannel(TerminalIpcChannels.PtyHostWindow, ptyServiceChannel);
  }
  process.once("exit", () => {
    logService.trace("Pty host exiting");
    logService.dispose();
    heartbeatService.dispose();
    ptyService.dispose();
  });
}

//# sourceMappingURL=ptyHostMain.js.map
