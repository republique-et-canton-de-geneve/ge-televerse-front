function $4c7ef179a45ab871$export$71511d61b312f219(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}


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
***************************************************************************** */ /* global Reflect, Promise, SuppressedError, Symbol, Iterator */ var $ee430606400354b3$var$extendStatics = function(d, b) {
    $ee430606400354b3$var$extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return $ee430606400354b3$var$extendStatics(d, b);
};
function $ee430606400354b3$export$a8ba968b8961cb8a(d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    $ee430606400354b3$var$extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var $ee430606400354b3$export$18ce0697a983be9b = function() {
    $ee430606400354b3$export$18ce0697a983be9b = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return $ee430606400354b3$export$18ce0697a983be9b.apply(this, arguments);
};
function $ee430606400354b3$export$3c9a16f847548506(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}
function $ee430606400354b3$export$29e00dfd3077644b(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function $ee430606400354b3$export$d5ad3fd78186038f(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
function $ee430606400354b3$export$3a84e1ae4e97e9b0(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) {
        if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
        return f;
    }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for(var i = decorators.length - 1; i >= 0; i--){
        var context = {};
        for(var p in contextIn)context[p] = p === "access" ? {} : contextIn[p];
        for(var p in contextIn.access)context.access[p] = contextIn.access[p];
        context.addInitializer = function(f) {
            if (done) throw new TypeError("Cannot add initializers after decoration has completed");
            extraInitializers.push(accept(f || null));
        };
        var result = (0, decorators[i])(kind === "accessor" ? {
            get: descriptor.get,
            set: descriptor.set
        } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        } else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
}
function $ee430606400354b3$export$d831c04e792af3d(thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for(var i = 0; i < initializers.length; i++)value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    return useValue ? value : void 0;
}
function $ee430606400354b3$export$6a2a36740a146cb8(x) {
    return typeof x === "symbol" ? x : "".concat(x);
}
function $ee430606400354b3$export$d1a06452d3489bc7(f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", {
        configurable: true,
        value: prefix ? "".concat(prefix, " ", name) : name
    });
}
function $ee430606400354b3$export$f1db080c865becb9(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function $ee430606400354b3$export$1050f835b63b671e(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
function $ee430606400354b3$export$67ebef60e6f28a6(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var $ee430606400354b3$export$45d3717a4c69092e = Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
        enumerable: true,
        get: function() {
            return m[k];
        }
    };
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
};
function $ee430606400354b3$export$f33643c0debef087(m, o) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) $ee430606400354b3$export$45d3717a4c69092e(o, m, p);
}
function $ee430606400354b3$export$19a8beecd37a4c45(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function $ee430606400354b3$export$8d051b38c9118094(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
}
function $ee430606400354b3$export$afc72e2116322959() {
    for(var ar = [], i = 0; i < arguments.length; i++)ar = ar.concat($ee430606400354b3$export$8d051b38c9118094(arguments[i]));
    return ar;
}
function $ee430606400354b3$export$6388937ca91ccae8() {
    for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
    for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
    return r;
}
function $ee430606400354b3$export$1216008129fb82ed(to, from, pack) {
    if (pack || arguments.length === 2) {
        for(var i = 0, l = from.length, ar; i < l; i++)if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}
function $ee430606400354b3$export$10c90e4f7922046c(v) {
    return this instanceof $ee430606400354b3$export$10c90e4f7922046c ? (this.v = v, this) : new $ee430606400354b3$export$10c90e4f7922046c(v);
}
function $ee430606400354b3$export$e427f37a30a4de9b(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
    function awaitReturn(f) {
        return function(v) {
            return Promise.resolve(v).then(f, reject);
        };
    }
    function verb(n, f) {
        if (g[n]) {
            i[n] = function(v) {
                return new Promise(function(a, b) {
                    q.push([
                        n,
                        v,
                        a,
                        b
                    ]) > 1 || resume(n, v);
                });
            };
            if (f) i[n] = f(i[n]);
        }
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof $ee430606400354b3$export$10c90e4f7922046c ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
}
function $ee430606400354b3$export$bbd80228419bb833(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function(e) {
        throw e;
    }), verb("return"), i[Symbol.iterator] = function() {
        return this;
    }, i;
    function verb(n, f) {
        i[n] = o[n] ? function(v) {
            return (p = !p) ? {
                value: $ee430606400354b3$export$10c90e4f7922046c(o[n](v)),
                done: false
            } : f ? f(v) : v;
        } : f;
    }
}
function $ee430606400354b3$export$e3b29a3d6162315f(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof $ee430606400354b3$export$19a8beecd37a4c45 === "function" ? $ee430606400354b3$export$19a8beecd37a4c45(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
    function verb(n) {
        i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function(v) {
            resolve({
                value: v,
                done: d
            });
        }, reject);
    }
}
function $ee430606400354b3$export$4fb47efe1390b86f(cooked, raw) {
    if (Object.defineProperty) Object.defineProperty(cooked, "raw", {
        value: raw
    });
    else cooked.raw = raw;
    return cooked;
}
var $ee430606400354b3$var$__setModuleDefault = Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
};
var $ee430606400354b3$var$ownKeys = function(o) {
    $ee430606400354b3$var$ownKeys = Object.getOwnPropertyNames || function(o) {
        var ar = [];
        for(var k in o)if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
        return ar;
    };
    return $ee430606400354b3$var$ownKeys(o);
};
function $ee430606400354b3$export$c21735bcef00d192(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k = $ee430606400354b3$var$ownKeys(mod), i = 0; i < k.length; i++)if (k[i] !== "default") $ee430606400354b3$export$45d3717a4c69092e(result, mod, k[i]);
    }
    $ee430606400354b3$var$__setModuleDefault(result, mod);
    return result;
}
function $ee430606400354b3$export$da59b14a69baef04(mod) {
    return mod && mod.__esModule ? mod : {
        default: mod
    };
}
function $ee430606400354b3$export$d5dcaf168c640c35(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function $ee430606400354b3$export$d40a35129aaff81f(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
function $ee430606400354b3$export$81fdc39f203e4e04(state, receiver) {
    if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}
function $ee430606400354b3$export$88ac25d8e944e405(env, value, async) {
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
        if (inner) dispose = function() {
            try {
                inner.call(this);
            } catch (e) {
                return Promise.reject(e);
            }
        };
        env.stack.push({
            value: value,
            dispose: dispose,
            async: async
        });
    } else if (async) env.stack.push({
        async: true
    });
    return value;
}
var $ee430606400354b3$var$_SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
function $ee430606400354b3$export$8f076105dc360e92(env) {
    function fail(e) {
        env.error = env.hasError ? new $ee430606400354b3$var$_SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
        env.hasError = true;
    }
    var r, s = 0;
    function next() {
        while(r = env.stack.pop())try {
            if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
            if (r.dispose) {
                var result = r.dispose.call(r.value);
                if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) {
                    fail(e);
                    return next();
                });
            } else s |= 1;
        } catch (e) {
            fail(e);
        }
        if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
        if (env.hasError) throw env.error;
    }
    return next();
}
function $ee430606400354b3$export$889dfb5d17574b0b(path, preserveJsx) {
    if (typeof path === "string" && /^\.\.?\//.test(path)) return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(m, tsx, d, ext, cm) {
        return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : d + ext + "." + cm.toLowerCase() + "js";
    });
    return path;
}
var $ee430606400354b3$export$2e2bcd8739ae039 = {
    __extends: $ee430606400354b3$export$a8ba968b8961cb8a,
    __assign: $ee430606400354b3$export$18ce0697a983be9b,
    __rest: $ee430606400354b3$export$3c9a16f847548506,
    __decorate: $ee430606400354b3$export$29e00dfd3077644b,
    __param: $ee430606400354b3$export$d5ad3fd78186038f,
    __esDecorate: $ee430606400354b3$export$3a84e1ae4e97e9b0,
    __runInitializers: $ee430606400354b3$export$d831c04e792af3d,
    __propKey: $ee430606400354b3$export$6a2a36740a146cb8,
    __setFunctionName: $ee430606400354b3$export$d1a06452d3489bc7,
    __metadata: $ee430606400354b3$export$f1db080c865becb9,
    __awaiter: $ee430606400354b3$export$1050f835b63b671e,
    __generator: $ee430606400354b3$export$67ebef60e6f28a6,
    __createBinding: $ee430606400354b3$export$45d3717a4c69092e,
    __exportStar: $ee430606400354b3$export$f33643c0debef087,
    __values: $ee430606400354b3$export$19a8beecd37a4c45,
    __read: $ee430606400354b3$export$8d051b38c9118094,
    __spread: $ee430606400354b3$export$afc72e2116322959,
    __spreadArrays: $ee430606400354b3$export$6388937ca91ccae8,
    __spreadArray: $ee430606400354b3$export$1216008129fb82ed,
    __await: $ee430606400354b3$export$10c90e4f7922046c,
    __asyncGenerator: $ee430606400354b3$export$e427f37a30a4de9b,
    __asyncDelegator: $ee430606400354b3$export$bbd80228419bb833,
    __asyncValues: $ee430606400354b3$export$e3b29a3d6162315f,
    __makeTemplateObject: $ee430606400354b3$export$4fb47efe1390b86f,
    __importStar: $ee430606400354b3$export$c21735bcef00d192,
    __importDefault: $ee430606400354b3$export$da59b14a69baef04,
    __classPrivateFieldGet: $ee430606400354b3$export$d5dcaf168c640c35,
    __classPrivateFieldSet: $ee430606400354b3$export$d40a35129aaff81f,
    __classPrivateFieldIn: $ee430606400354b3$export$81fdc39f203e4e04,
    __addDisposableResource: $ee430606400354b3$export$88ac25d8e944e405,
    __disposeResources: $ee430606400354b3$export$8f076105dc360e92,
    __rewriteRelativeImportExtension: $ee430606400354b3$export$889dfb5d17574b0b
};


/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $c60305268e0a629a$var$t = globalThis, $c60305268e0a629a$export$b4d10f6001c083c2 = $c60305268e0a629a$var$t.ShadowRoot && (void 0 === $c60305268e0a629a$var$t.ShadyCSS || $c60305268e0a629a$var$t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, $c60305268e0a629a$var$s = Symbol(), $c60305268e0a629a$var$o = new WeakMap;
class $c60305268e0a629a$export$505d1e8739bad805 {
    get styleSheet() {
        let t = this.o;
        const s = this.t;
        if ($c60305268e0a629a$export$b4d10f6001c083c2 && void 0 === t) {
            const e = void 0 !== s && 1 === s.length;
            e && (t = $c60305268e0a629a$var$o.get(s)), void 0 === t && ((this.o = t = new CSSStyleSheet).replaceSync(this.cssText), e && $c60305268e0a629a$var$o.set(s, t));
        }
        return t;
    }
    toString() {
        return this.cssText;
    }
    constructor(t, e, o){
        if (this._$cssResult$ = !0, o !== $c60305268e0a629a$var$s) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
        this.cssText = t, this.t = e;
    }
}
const $c60305268e0a629a$export$8d80f9cac07cdb3 = (t)=>new $c60305268e0a629a$export$505d1e8739bad805("string" == typeof t ? t : t + "", void 0, $c60305268e0a629a$var$s), $c60305268e0a629a$export$dbf350e5966cf602 = (t, ...e)=>{
    const o = 1 === t.length ? t[0] : e.reduce((e, s, o)=>e + ((t)=>{
            if (!0 === t._$cssResult$) return t.cssText;
            if ("number" == typeof t) return t;
            throw Error("Value passed to 'css' function must be a 'css' function result: " + t + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
        })(s) + t[o + 1], t[0]);
    return new $c60305268e0a629a$export$505d1e8739bad805(o, t, $c60305268e0a629a$var$s);
}, $c60305268e0a629a$export$2ca4a66ec4cecb90 = (s, o)=>{
    if ($c60305268e0a629a$export$b4d10f6001c083c2) s.adoptedStyleSheets = o.map((t)=>t instanceof CSSStyleSheet ? t : t.styleSheet);
    else for (const e of o){
        const o = document.createElement("style"), n = $c60305268e0a629a$var$t.litNonce;
        void 0 !== n && o.setAttribute("nonce", n), o.textContent = e.cssText, s.appendChild(o);
    }
}, $c60305268e0a629a$export$ee69dfd951e24778 = $c60305268e0a629a$export$b4d10f6001c083c2 ? (t)=>t : (t)=>t instanceof CSSStyleSheet ? ((t)=>{
        let e = "";
        for (const s of t.cssRules)e += s.cssText;
        return $c60305268e0a629a$export$8d80f9cac07cdb3(e);
    })(t) : t;


var $b3296c98c32cde16$var$_Symbol, $b3296c98c32cde16$var$_a, $b3296c98c32cde16$var$_a1;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const { is: $b3296c98c32cde16$var$i, defineProperty: $b3296c98c32cde16$var$e, getOwnPropertyDescriptor: $b3296c98c32cde16$var$h, getOwnPropertyNames: $b3296c98c32cde16$var$r, getOwnPropertySymbols: $b3296c98c32cde16$var$o, getPrototypeOf: $b3296c98c32cde16$var$n } = Object, $b3296c98c32cde16$var$a = globalThis, $b3296c98c32cde16$var$c = $b3296c98c32cde16$var$a.trustedTypes, $b3296c98c32cde16$var$l = $b3296c98c32cde16$var$c ? $b3296c98c32cde16$var$c.emptyScript : "", $b3296c98c32cde16$var$p = $b3296c98c32cde16$var$a.reactiveElementPolyfillSupport, $b3296c98c32cde16$var$d = (t, s)=>t, $b3296c98c32cde16$export$7312b35fbf521afb = {
    toAttribute (t, s) {
        switch(s){
            case Boolean:
                t = t ? $b3296c98c32cde16$var$l : null;
                break;
            case Object:
            case Array:
                t = null == t ? t : JSON.stringify(t);
        }
        return t;
    },
    fromAttribute (t, s) {
        let i = t;
        switch(s){
            case Boolean:
                i = null !== t;
                break;
            case Number:
                i = null === t ? null : Number(t);
                break;
            case Object:
            case Array:
                try {
                    i = JSON.parse(t);
                } catch (t) {
                    i = null;
                }
        }
        return i;
    }
}, $b3296c98c32cde16$export$53a6892c50694894 = (t, s)=>!$b3296c98c32cde16$var$i(t, s), $b3296c98c32cde16$var$b = {
    attribute: !0,
    type: String,
    converter: $b3296c98c32cde16$export$7312b35fbf521afb,
    reflect: !1,
    useDefault: !1,
    hasChanged: $b3296c98c32cde16$export$53a6892c50694894
};
var $b3296c98c32cde16$var$_metadata, $b3296c98c32cde16$var$_litPropertyMetadata;
($b3296c98c32cde16$var$_metadata = ($b3296c98c32cde16$var$_Symbol = Symbol).metadata) !== null && $b3296c98c32cde16$var$_metadata !== void 0 ? $b3296c98c32cde16$var$_metadata : $b3296c98c32cde16$var$_Symbol.metadata = Symbol("metadata"), ($b3296c98c32cde16$var$_litPropertyMetadata = ($b3296c98c32cde16$var$_a = $b3296c98c32cde16$var$a).litPropertyMetadata) !== null && $b3296c98c32cde16$var$_litPropertyMetadata !== void 0 ? $b3296c98c32cde16$var$_litPropertyMetadata : $b3296c98c32cde16$var$_a.litPropertyMetadata = new WeakMap;
class $b3296c98c32cde16$export$c7c07a37856565d extends HTMLElement {
    static addInitializer(t) {
        var _this_l;
        this._$Ei(), ((_this_l = this.l) !== null && _this_l !== void 0 ? _this_l : this.l = []).push(t);
    }
    static get observedAttributes() {
        return this.finalize(), this._$Eh && [
            ...this._$Eh.keys()
        ];
    }
    static createProperty(t, s = $b3296c98c32cde16$var$b) {
        if (s.state && (s.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((s = Object.create(s)).wrapped = !0), this.elementProperties.set(t, s), !s.noAccessor) {
            const i = Symbol(), h = this.getPropertyDescriptor(t, i, s);
            void 0 !== h && $b3296c98c32cde16$var$e(this.prototype, t, h);
        }
    }
    static getPropertyDescriptor(t, s, i) {
        var _h;
        const { get: e, set: r } = (_h = $b3296c98c32cde16$var$h(this.prototype, t)) !== null && _h !== void 0 ? _h : {
            get () {
                return this[s];
            },
            set (t) {
                this[s] = t;
            }
        };
        return {
            get: e,
            set (s) {
                const h = e === null || e === void 0 ? void 0 : e.call(this);
                r === null || r === void 0 ? void 0 : r.call(this, s), this.requestUpdate(t, h, i);
            },
            configurable: !0,
            enumerable: !0
        };
    }
    static getPropertyOptions(t) {
        var _this_elementProperties_get;
        return (_this_elementProperties_get = this.elementProperties.get(t)) !== null && _this_elementProperties_get !== void 0 ? _this_elementProperties_get : $b3296c98c32cde16$var$b;
    }
    static _$Ei() {
        if (this.hasOwnProperty($b3296c98c32cde16$var$d("elementProperties"))) return;
        const t = $b3296c98c32cde16$var$n(this);
        t.finalize(), void 0 !== t.l && (this.l = [
            ...t.l
        ]), this.elementProperties = new Map(t.elementProperties);
    }
    static finalize() {
        if (this.hasOwnProperty($b3296c98c32cde16$var$d("finalized"))) return;
        if (this.finalized = !0, this._$Ei(), this.hasOwnProperty($b3296c98c32cde16$var$d("properties"))) {
            const t = this.properties, s = [
                ...$b3296c98c32cde16$var$r(t),
                ...$b3296c98c32cde16$var$o(t)
            ];
            for (const i of s)this.createProperty(i, t[i]);
        }
        const t = this[Symbol.metadata];
        if (null !== t) {
            const s = litPropertyMetadata.get(t);
            if (void 0 !== s) for (const [t, i] of s)this.elementProperties.set(t, i);
        }
        this._$Eh = new Map;
        for (const [t, s] of this.elementProperties){
            const i = this._$Eu(t, s);
            void 0 !== i && this._$Eh.set(i, t);
        }
        this.elementStyles = this.finalizeStyles(this.styles);
    }
    static finalizeStyles(s) {
        const i = [];
        if (Array.isArray(s)) {
            const e = new Set(s.flat(1 / 0).reverse());
            for (const s of e)i.unshift((0, $c60305268e0a629a$export$ee69dfd951e24778)(s));
        } else void 0 !== s && i.push((0, $c60305268e0a629a$export$ee69dfd951e24778)(s));
        return i;
    }
    static _$Eu(t, s) {
        const i = s.attribute;
        return !1 === i ? void 0 : "string" == typeof i ? i : "string" == typeof t ? t.toLowerCase() : void 0;
    }
    _$Ev() {
        var _this_constructor_l;
        this._$ES = new Promise((t)=>this.enableUpdating = t), this._$AL = new Map, this._$E_(), this.requestUpdate(), (_this_constructor_l = this.constructor.l) === null || _this_constructor_l === void 0 ? void 0 : _this_constructor_l.forEach((t)=>t(this));
    }
    addController(t) {
        var _t_hostConnected;
        var _this__$EO;
        ((_this__$EO = this._$EO) !== null && _this__$EO !== void 0 ? _this__$EO : this._$EO = new Set).add(t), void 0 !== this.renderRoot && this.isConnected && ((_t_hostConnected = t.hostConnected) === null || _t_hostConnected === void 0 ? void 0 : _t_hostConnected.call(t));
    }
    removeController(t) {
        var _this__$EO;
        (_this__$EO = this._$EO) === null || _this__$EO === void 0 ? void 0 : _this__$EO.delete(t);
    }
    _$E_() {
        const t = new Map, s = this.constructor.elementProperties;
        for (const i of s.keys())this.hasOwnProperty(i) && (t.set(i, this[i]), delete this[i]);
        t.size > 0 && (this._$Ep = t);
    }
    createRenderRoot() {
        var _this_shadowRoot;
        const t = (_this_shadowRoot = this.shadowRoot) !== null && _this_shadowRoot !== void 0 ? _this_shadowRoot : this.attachShadow(this.constructor.shadowRootOptions);
        return (0, $c60305268e0a629a$export$2ca4a66ec4cecb90)(t, this.constructor.elementStyles), t;
    }
    connectedCallback() {
        var _this__$EO;
        var _this_renderRoot;
        (_this_renderRoot = this.renderRoot) !== null && _this_renderRoot !== void 0 ? _this_renderRoot : this.renderRoot = this.createRenderRoot(), this.enableUpdating(!0), (_this__$EO = this._$EO) === null || _this__$EO === void 0 ? void 0 : _this__$EO.forEach((t)=>{
            var _t_hostConnected;
            return (_t_hostConnected = t.hostConnected) === null || _t_hostConnected === void 0 ? void 0 : _t_hostConnected.call(t);
        });
    }
    enableUpdating(t) {}
    disconnectedCallback() {
        var _this__$EO;
        (_this__$EO = this._$EO) === null || _this__$EO === void 0 ? void 0 : _this__$EO.forEach((t)=>{
            var _t_hostDisconnected;
            return (_t_hostDisconnected = t.hostDisconnected) === null || _t_hostDisconnected === void 0 ? void 0 : _t_hostDisconnected.call(t);
        });
    }
    attributeChangedCallback(t, s, i) {
        this._$AK(t, i);
    }
    _$ET(t, s) {
        const i = this.constructor.elementProperties.get(t), e = this.constructor._$Eu(t, i);
        if (void 0 !== e && !0 === i.reflect) {
            var _i_converter;
            const h = (void 0 !== ((_i_converter = i.converter) === null || _i_converter === void 0 ? void 0 : _i_converter.toAttribute) ? i.converter : $b3296c98c32cde16$export$7312b35fbf521afb).toAttribute(s, i.type);
            this._$Em = t, null == h ? this.removeAttribute(e) : this.setAttribute(e, h), this._$Em = null;
        }
    }
    _$AK(t, s) {
        const i = this.constructor, e = i._$Eh.get(t);
        if (void 0 !== e && this._$Em !== e) {
            var _t_converter, _this__$Ej;
            const t = i.getPropertyOptions(e), h = "function" == typeof t.converter ? {
                fromAttribute: t.converter
            } : void 0 !== ((_t_converter = t.converter) === null || _t_converter === void 0 ? void 0 : _t_converter.fromAttribute) ? t.converter : $b3296c98c32cde16$export$7312b35fbf521afb;
            this._$Em = e;
            const r = h.fromAttribute(s, t.type);
            var _ref;
            this[e] = (_ref = r !== null && r !== void 0 ? r : (_this__$Ej = this._$Ej) === null || _this__$Ej === void 0 ? void 0 : _this__$Ej.get(e)) !== null && _ref !== void 0 ? _ref : r, this._$Em = null;
        }
    }
    requestUpdate(t, s, i, e = !1, h) {
        if (void 0 !== t) {
            var _this__$Ej;
            const r = this.constructor;
            var _i_hasChanged;
            if (!1 === e && (h = this[t]), i !== null && i !== void 0 ? i : i = r.getPropertyOptions(t), !(((_i_hasChanged = i.hasChanged) !== null && _i_hasChanged !== void 0 ? _i_hasChanged : $b3296c98c32cde16$export$53a6892c50694894)(h, s) || i.useDefault && i.reflect && h === ((_this__$Ej = this._$Ej) === null || _this__$Ej === void 0 ? void 0 : _this__$Ej.get(t)) && !this.hasAttribute(r._$Eu(t, i)))) return;
            this.C(t, s, i);
        }
        !1 === this.isUpdatePending && (this._$ES = this._$EP());
    }
    C(t, s, { useDefault: i, reflect: e, wrapped: h }, r) {
        var _this__$Ej, _ref, _this__$Eq;
        i && !((_this__$Ej = this._$Ej) !== null && _this__$Ej !== void 0 ? _this__$Ej : this._$Ej = new Map).has(t) && (this._$Ej.set(t, (_ref = r !== null && r !== void 0 ? r : s) !== null && _ref !== void 0 ? _ref : this[t]), !0 !== h || void 0 !== r) || (this._$AL.has(t) || (this.hasUpdated || i || (s = void 0), this._$AL.set(t, s)), !0 === e && this._$Em !== t && ((_this__$Eq = this._$Eq) !== null && _this__$Eq !== void 0 ? _this__$Eq : this._$Eq = new Set).add(t));
    }
    async _$EP() {
        this.isUpdatePending = !0;
        try {
            await this._$ES;
        } catch (t) {
            Promise.reject(t);
        }
        const t = this.scheduleUpdate();
        return null != t && await t, !this.isUpdatePending;
    }
    scheduleUpdate() {
        return this.performUpdate();
    }
    performUpdate() {
        if (!this.isUpdatePending) return;
        if (!this.hasUpdated) {
            var _this_renderRoot;
            if ((_this_renderRoot = this.renderRoot) !== null && _this_renderRoot !== void 0 ? _this_renderRoot : this.renderRoot = this.createRenderRoot(), this._$Ep) {
                for (const [t, s] of this._$Ep)this[t] = s;
                this._$Ep = void 0;
            }
            const t = this.constructor.elementProperties;
            if (t.size > 0) for (const [s, i] of t){
                const { wrapped: t } = i, e = this[s];
                !0 !== t || this._$AL.has(s) || void 0 === e || this.C(s, void 0, i, e);
            }
        }
        let t = !1;
        const s = this._$AL;
        try {
            var _this__$EO;
            t = this.shouldUpdate(s), t ? (this.willUpdate(s), (_this__$EO = this._$EO) === null || _this__$EO === void 0 ? void 0 : _this__$EO.forEach((t)=>{
                var _t_hostUpdate;
                return (_t_hostUpdate = t.hostUpdate) === null || _t_hostUpdate === void 0 ? void 0 : _t_hostUpdate.call(t);
            }), this.update(s)) : this._$EM();
        } catch (s) {
            throw t = !1, this._$EM(), s;
        }
        t && this._$AE(s);
    }
    willUpdate(t) {}
    _$AE(t) {
        var _this__$EO;
        (_this__$EO = this._$EO) === null || _this__$EO === void 0 ? void 0 : _this__$EO.forEach((t)=>{
            var _t_hostUpdated;
            return (_t_hostUpdated = t.hostUpdated) === null || _t_hostUpdated === void 0 ? void 0 : _t_hostUpdated.call(t);
        }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
    }
    _$EM() {
        this._$AL = new Map, this.isUpdatePending = !1;
    }
    get updateComplete() {
        return this.getUpdateComplete();
    }
    getUpdateComplete() {
        return this._$ES;
    }
    shouldUpdate(t) {
        return !0;
    }
    update(t) {
        this._$Eq && (this._$Eq = this._$Eq.forEach((t)=>this._$ET(t, this[t]))), this._$EM();
    }
    updated(t) {}
    firstUpdated(t) {}
    constructor(){
        super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
    }
}
var $b3296c98c32cde16$var$_reactiveElementVersions;
$b3296c98c32cde16$export$c7c07a37856565d.elementStyles = [], $b3296c98c32cde16$export$c7c07a37856565d.shadowRootOptions = {
    mode: "open"
}, $b3296c98c32cde16$export$c7c07a37856565d[$b3296c98c32cde16$var$d("elementProperties")] = new Map, $b3296c98c32cde16$export$c7c07a37856565d[$b3296c98c32cde16$var$d("finalized")] = new Map, $b3296c98c32cde16$var$p === null || $b3296c98c32cde16$var$p === void 0 ? void 0 : $b3296c98c32cde16$var$p({
    ReactiveElement: $b3296c98c32cde16$export$c7c07a37856565d
}), (($b3296c98c32cde16$var$_reactiveElementVersions = ($b3296c98c32cde16$var$_a1 = $b3296c98c32cde16$var$a).reactiveElementVersions) !== null && $b3296c98c32cde16$var$_reactiveElementVersions !== void 0 ? $b3296c98c32cde16$var$_reactiveElementVersions : $b3296c98c32cde16$var$_a1.reactiveElementVersions = []).push("2.1.2");


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var $5e4f263f2dad39fc$var$_t;
const $5e4f263f2dad39fc$var$t = globalThis, $5e4f263f2dad39fc$var$i = (t)=>t, $5e4f263f2dad39fc$var$s = $5e4f263f2dad39fc$var$t.trustedTypes, $5e4f263f2dad39fc$var$e = $5e4f263f2dad39fc$var$s ? $5e4f263f2dad39fc$var$s.createPolicy("lit-html", {
    createHTML: (t)=>t
}) : void 0, $5e4f263f2dad39fc$var$h = "$lit$", $5e4f263f2dad39fc$var$o = `lit$${Math.random().toFixed(9).slice(2)}$`, $5e4f263f2dad39fc$var$n = "?" + $5e4f263f2dad39fc$var$o, $5e4f263f2dad39fc$var$r = `<${$5e4f263f2dad39fc$var$n}>`, $5e4f263f2dad39fc$var$l = document, $5e4f263f2dad39fc$var$c = ()=>$5e4f263f2dad39fc$var$l.createComment(""), $5e4f263f2dad39fc$var$a = (t)=>null === t || "object" != typeof t && "function" != typeof t, $5e4f263f2dad39fc$var$u = Array.isArray, $5e4f263f2dad39fc$var$d = (t)=>$5e4f263f2dad39fc$var$u(t) || "function" == typeof (t === null || t === void 0 ? void 0 : t[Symbol.iterator]), $5e4f263f2dad39fc$var$f = "[ \t\n\f\r]", $5e4f263f2dad39fc$var$v = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, $5e4f263f2dad39fc$var$_ = /-->/g, $5e4f263f2dad39fc$var$m = />/g, $5e4f263f2dad39fc$var$p = RegExp(`>|${$5e4f263f2dad39fc$var$f}(?:([^\\s"'>=/]+)(${$5e4f263f2dad39fc$var$f}*=${$5e4f263f2dad39fc$var$f}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g"), $5e4f263f2dad39fc$var$g = /'/g, $5e4f263f2dad39fc$var$$ = /"/g, $5e4f263f2dad39fc$var$y = /^(?:script|style|textarea|title)$/i, $5e4f263f2dad39fc$var$x = (t)=>(i, ...s)=>({
            _$litType$: t,
            strings: i,
            values: s
        }), $5e4f263f2dad39fc$export$c0bb0b647f701bb5 = $5e4f263f2dad39fc$var$x(1), $5e4f263f2dad39fc$export$7ed1367e7fa1ad68 = $5e4f263f2dad39fc$var$x(2), $5e4f263f2dad39fc$export$47d5b44d225be5b4 = $5e4f263f2dad39fc$var$x(3), $5e4f263f2dad39fc$export$9c068ae9cc5db4e8 = Symbol.for("lit-noChange"), $5e4f263f2dad39fc$export$45b790e32b2810ee = Symbol.for("lit-nothing"), $5e4f263f2dad39fc$var$C = new WeakMap, $5e4f263f2dad39fc$var$P = $5e4f263f2dad39fc$var$l.createTreeWalker($5e4f263f2dad39fc$var$l, 129);
function $5e4f263f2dad39fc$var$V(t, i) {
    if (!$5e4f263f2dad39fc$var$u(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return void 0 !== $5e4f263f2dad39fc$var$e ? $5e4f263f2dad39fc$var$e.createHTML(i) : i;
}
const $5e4f263f2dad39fc$var$N = (t, i)=>{
    const s = t.length - 1, e = [];
    let n, l = 2 === i ? "<svg>" : 3 === i ? "<math>" : "", c = $5e4f263f2dad39fc$var$v;
    for(let i = 0; i < s; i++){
        const s = t[i];
        let a, u, d = -1, f = 0;
        for(; f < s.length && (c.lastIndex = f, u = c.exec(s), null !== u);)f = c.lastIndex, c === $5e4f263f2dad39fc$var$v ? "!--" === u[1] ? c = $5e4f263f2dad39fc$var$_ : void 0 !== u[1] ? c = $5e4f263f2dad39fc$var$m : void 0 !== u[2] ? ($5e4f263f2dad39fc$var$y.test(u[2]) && (n = RegExp("</" + u[2], "g")), c = $5e4f263f2dad39fc$var$p) : void 0 !== u[3] && (c = $5e4f263f2dad39fc$var$p) : c === $5e4f263f2dad39fc$var$p ? ">" === u[0] ? (c = n !== null && n !== void 0 ? n : $5e4f263f2dad39fc$var$v, d = -1) : void 0 === u[1] ? d = -2 : (d = c.lastIndex - u[2].length, a = u[1], c = void 0 === u[3] ? $5e4f263f2dad39fc$var$p : '"' === u[3] ? $5e4f263f2dad39fc$var$$ : $5e4f263f2dad39fc$var$g) : c === $5e4f263f2dad39fc$var$$ || c === $5e4f263f2dad39fc$var$g ? c = $5e4f263f2dad39fc$var$p : c === $5e4f263f2dad39fc$var$_ || c === $5e4f263f2dad39fc$var$m ? c = $5e4f263f2dad39fc$var$v : (c = $5e4f263f2dad39fc$var$p, n = void 0);
        const x = c === $5e4f263f2dad39fc$var$p && t[i + 1].startsWith("/>") ? " " : "";
        l += c === $5e4f263f2dad39fc$var$v ? s + $5e4f263f2dad39fc$var$r : d >= 0 ? (e.push(a), s.slice(0, d) + $5e4f263f2dad39fc$var$h + s.slice(d) + $5e4f263f2dad39fc$var$o + x) : s + $5e4f263f2dad39fc$var$o + (-2 === d ? i : x);
    }
    return [
        $5e4f263f2dad39fc$var$V(t, l + (t[s] || "<?>") + (2 === i ? "</svg>" : 3 === i ? "</math>" : "")),
        e
    ];
};
class $5e4f263f2dad39fc$var$S {
    static createElement(t, i) {
        const s = $5e4f263f2dad39fc$var$l.createElement("template");
        return s.innerHTML = t, s;
    }
    constructor({ strings: t, _$litType$: i }, e){
        let r;
        this.parts = [];
        let l = 0, a = 0;
        const u = t.length - 1, d = this.parts, [f, v] = $5e4f263f2dad39fc$var$N(t, i);
        if (this.el = $5e4f263f2dad39fc$var$S.createElement(f, e), $5e4f263f2dad39fc$var$P.currentNode = this.el.content, 2 === i || 3 === i) {
            const t = this.el.content.firstChild;
            t.replaceWith(...t.childNodes);
        }
        for(; null !== (r = $5e4f263f2dad39fc$var$P.nextNode()) && d.length < u;){
            if (1 === r.nodeType) {
                if (r.hasAttributes()) for (const t of r.getAttributeNames())if (t.endsWith($5e4f263f2dad39fc$var$h)) {
                    const i = v[a++], s = r.getAttribute(t).split($5e4f263f2dad39fc$var$o), e = /([.?@])?(.*)/.exec(i);
                    d.push({
                        type: 1,
                        index: l,
                        name: e[2],
                        strings: s,
                        ctor: "." === e[1] ? $5e4f263f2dad39fc$var$I : "?" === e[1] ? $5e4f263f2dad39fc$var$L : "@" === e[1] ? $5e4f263f2dad39fc$var$z : $5e4f263f2dad39fc$var$H
                    }), r.removeAttribute(t);
                } else t.startsWith($5e4f263f2dad39fc$var$o) && (d.push({
                    type: 6,
                    index: l
                }), r.removeAttribute(t));
                if ($5e4f263f2dad39fc$var$y.test(r.tagName)) {
                    const t = r.textContent.split($5e4f263f2dad39fc$var$o), i = t.length - 1;
                    if (i > 0) {
                        r.textContent = $5e4f263f2dad39fc$var$s ? $5e4f263f2dad39fc$var$s.emptyScript : "";
                        for(let s = 0; s < i; s++)r.append(t[s], $5e4f263f2dad39fc$var$c()), $5e4f263f2dad39fc$var$P.nextNode(), d.push({
                            type: 2,
                            index: ++l
                        });
                        r.append(t[i], $5e4f263f2dad39fc$var$c());
                    }
                }
            } else if (8 === r.nodeType) {
                if (r.data === $5e4f263f2dad39fc$var$n) d.push({
                    type: 2,
                    index: l
                });
                else {
                    let t = -1;
                    for(; -1 !== (t = r.data.indexOf($5e4f263f2dad39fc$var$o, t + 1));)d.push({
                        type: 7,
                        index: l
                    }), t += $5e4f263f2dad39fc$var$o.length - 1;
                }
            }
            l++;
        }
    }
}
function $5e4f263f2dad39fc$var$M(t, i, s = t, e) {
    var _s__$Co, _h__$AO;
    var _s;
    if (i === $5e4f263f2dad39fc$export$9c068ae9cc5db4e8) return i;
    let h = void 0 !== e ? (_s__$Co = s._$Co) === null || _s__$Co === void 0 ? void 0 : _s__$Co[e] : s._$Cl;
    const o = $5e4f263f2dad39fc$var$a(i) ? void 0 : i._$litDirective$;
    var __$Co;
    return (h === null || h === void 0 ? void 0 : h.constructor) !== o && (h === null || h === void 0 ? void 0 : (_h__$AO = h._$AO) === null || _h__$AO === void 0 ? void 0 : _h__$AO.call(h, !1), void 0 === o ? h = void 0 : (h = new o(t), h._$AT(t, s, e)), void 0 !== e ? ((__$Co = (_s = s)._$Co) !== null && __$Co !== void 0 ? __$Co : _s._$Co = [])[e] = h : s._$Cl = h), void 0 !== h && (i = $5e4f263f2dad39fc$var$M(t, h._$AS(t, i.values), h, e)), i;
}
class $5e4f263f2dad39fc$var$R {
    get parentNode() {
        return this._$AM.parentNode;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    u(t) {
        var _t_creationScope;
        const { el: { content: i }, parts: s } = this._$AD, e = ((_t_creationScope = t === null || t === void 0 ? void 0 : t.creationScope) !== null && _t_creationScope !== void 0 ? _t_creationScope : $5e4f263f2dad39fc$var$l).importNode(i, !0);
        $5e4f263f2dad39fc$var$P.currentNode = e;
        let h = $5e4f263f2dad39fc$var$P.nextNode(), o = 0, n = 0, r = s[0];
        for(; void 0 !== r;){
            if (o === r.index) {
                let i;
                2 === r.type ? i = new $5e4f263f2dad39fc$var$k(h, h.nextSibling, this, t) : 1 === r.type ? i = new r.ctor(h, r.name, r.strings, this, t) : 6 === r.type && (i = new $5e4f263f2dad39fc$var$Z(h, this, t)), this._$AV.push(i), r = s[++n];
            }
            o !== (r === null || r === void 0 ? void 0 : r.index) && (h = $5e4f263f2dad39fc$var$P.nextNode(), o++);
        }
        return $5e4f263f2dad39fc$var$P.currentNode = $5e4f263f2dad39fc$var$l, e;
    }
    p(t) {
        let i = 0;
        for (const s of this._$AV)void 0 !== s && (void 0 !== s.strings ? (s._$AI(t, s, i), i += s.strings.length - 2) : s._$AI(t[i])), i++;
    }
    constructor(t, i){
        this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = i;
    }
}
class $5e4f263f2dad39fc$var$k {
    get _$AU() {
        var _this__$AM;
        var _this__$AM__$AU;
        return (_this__$AM__$AU = (_this__$AM = this._$AM) === null || _this__$AM === void 0 ? void 0 : _this__$AM._$AU) !== null && _this__$AM__$AU !== void 0 ? _this__$AM__$AU : this._$Cv;
    }
    get parentNode() {
        let t = this._$AA.parentNode;
        const i = this._$AM;
        return void 0 !== i && 11 === (t === null || t === void 0 ? void 0 : t.nodeType) && (t = i.parentNode), t;
    }
    get startNode() {
        return this._$AA;
    }
    get endNode() {
        return this._$AB;
    }
    _$AI(t, i = this) {
        t = $5e4f263f2dad39fc$var$M(this, t, i), $5e4f263f2dad39fc$var$a(t) ? t === $5e4f263f2dad39fc$export$45b790e32b2810ee || null == t || "" === t ? (this._$AH !== $5e4f263f2dad39fc$export$45b790e32b2810ee && this._$AR(), this._$AH = $5e4f263f2dad39fc$export$45b790e32b2810ee) : t !== this._$AH && t !== $5e4f263f2dad39fc$export$9c068ae9cc5db4e8 && this._(t) : void 0 !== t._$litType$ ? this.$(t) : void 0 !== t.nodeType ? this.T(t) : $5e4f263f2dad39fc$var$d(t) ? this.k(t) : this._(t);
    }
    O(t) {
        return this._$AA.parentNode.insertBefore(t, this._$AB);
    }
    T(t) {
        this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
    }
    _(t) {
        this._$AH !== $5e4f263f2dad39fc$export$45b790e32b2810ee && $5e4f263f2dad39fc$var$a(this._$AH) ? this._$AA.nextSibling.data = t : this.T($5e4f263f2dad39fc$var$l.createTextNode(t)), this._$AH = t;
    }
    $(t) {
        var _this__$AH;
        const { values: i, _$litType$: s } = t, e = "number" == typeof s ? this._$AC(t) : (void 0 === s.el && (s.el = $5e4f263f2dad39fc$var$S.createElement($5e4f263f2dad39fc$var$V(s.h, s.h[0]), this.options)), s);
        if (((_this__$AH = this._$AH) === null || _this__$AH === void 0 ? void 0 : _this__$AH._$AD) === e) this._$AH.p(i);
        else {
            const t = new $5e4f263f2dad39fc$var$R(e, this), s = t.u(this.options);
            t.p(i), this.T(s), this._$AH = t;
        }
    }
    _$AC(t) {
        let i = $5e4f263f2dad39fc$var$C.get(t.strings);
        return void 0 === i && $5e4f263f2dad39fc$var$C.set(t.strings, i = new $5e4f263f2dad39fc$var$S(t)), i;
    }
    k(t) {
        $5e4f263f2dad39fc$var$u(this._$AH) || (this._$AH = [], this._$AR());
        const i = this._$AH;
        let s, e = 0;
        for (const h of t)e === i.length ? i.push(s = new $5e4f263f2dad39fc$var$k(this.O($5e4f263f2dad39fc$var$c()), this.O($5e4f263f2dad39fc$var$c()), this, this.options)) : s = i[e], s._$AI(h), e++;
        e < i.length && (this._$AR(s && s._$AB.nextSibling, e), i.length = e);
    }
    _$AR(t = this._$AA.nextSibling, s) {
        var _this__$AP, _this;
        for((_this__$AP = (_this = this)._$AP) === null || _this__$AP === void 0 ? void 0 : _this__$AP.call(_this, !1, !0, s); t !== this._$AB;){
            const s = $5e4f263f2dad39fc$var$i(t).nextSibling;
            $5e4f263f2dad39fc$var$i(t).remove(), t = s;
        }
    }
    setConnected(t) {
        var _this__$AP, _this;
        void 0 === this._$AM && (this._$Cv = t, (_this__$AP = (_this = this)._$AP) === null || _this__$AP === void 0 ? void 0 : _this__$AP.call(_this, t));
    }
    constructor(t, i, s, e){
        var _e_isConnected;
        this.type = 2, this._$AH = $5e4f263f2dad39fc$export$45b790e32b2810ee, this._$AN = void 0, this._$AA = t, this._$AB = i, this._$AM = s, this.options = e, this._$Cv = (_e_isConnected = e === null || e === void 0 ? void 0 : e.isConnected) !== null && _e_isConnected !== void 0 ? _e_isConnected : !0;
    }
}
class $5e4f263f2dad39fc$var$H {
    get tagName() {
        return this.element.tagName;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AI(t, i = this, s, e) {
        const h = this.strings;
        let o = !1;
        if (void 0 === h) t = $5e4f263f2dad39fc$var$M(this, t, i, 0), o = !$5e4f263f2dad39fc$var$a(t) || t !== this._$AH && t !== $5e4f263f2dad39fc$export$9c068ae9cc5db4e8, o && (this._$AH = t);
        else {
            const e = t;
            let n, r;
            for(t = h[0], n = 0; n < h.length - 1; n++)r = $5e4f263f2dad39fc$var$M(this, e[s + n], i, n), r === $5e4f263f2dad39fc$export$9c068ae9cc5db4e8 && (r = this._$AH[n]), o || (o = !$5e4f263f2dad39fc$var$a(r) || r !== this._$AH[n]), r === $5e4f263f2dad39fc$export$45b790e32b2810ee ? t = $5e4f263f2dad39fc$export$45b790e32b2810ee : t !== $5e4f263f2dad39fc$export$45b790e32b2810ee && (t += (r !== null && r !== void 0 ? r : "") + h[n + 1]), this._$AH[n] = r;
        }
        o && !e && this.j(t);
    }
    j(t) {
        t === $5e4f263f2dad39fc$export$45b790e32b2810ee ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t !== null && t !== void 0 ? t : "");
    }
    constructor(t, i, s, e, h){
        this.type = 1, this._$AH = $5e4f263f2dad39fc$export$45b790e32b2810ee, this._$AN = void 0, this.element = t, this.name = i, this._$AM = e, this.options = h, s.length > 2 || "" !== s[0] || "" !== s[1] ? (this._$AH = Array(s.length - 1).fill(new String), this.strings = s) : this._$AH = $5e4f263f2dad39fc$export$45b790e32b2810ee;
    }
}
class $5e4f263f2dad39fc$var$I extends $5e4f263f2dad39fc$var$H {
    j(t) {
        this.element[this.name] = t === $5e4f263f2dad39fc$export$45b790e32b2810ee ? void 0 : t;
    }
    constructor(){
        super(...arguments), this.type = 3;
    }
}
class $5e4f263f2dad39fc$var$L extends $5e4f263f2dad39fc$var$H {
    j(t) {
        this.element.toggleAttribute(this.name, !!t && t !== $5e4f263f2dad39fc$export$45b790e32b2810ee);
    }
    constructor(){
        super(...arguments), this.type = 4;
    }
}
class $5e4f263f2dad39fc$var$z extends $5e4f263f2dad39fc$var$H {
    _$AI(t, i = this) {
        var _M;
        if ((t = (_M = $5e4f263f2dad39fc$var$M(this, t, i, 0)) !== null && _M !== void 0 ? _M : $5e4f263f2dad39fc$export$45b790e32b2810ee) === $5e4f263f2dad39fc$export$9c068ae9cc5db4e8) return;
        const s = this._$AH, e = t === $5e4f263f2dad39fc$export$45b790e32b2810ee && s !== $5e4f263f2dad39fc$export$45b790e32b2810ee || t.capture !== s.capture || t.once !== s.once || t.passive !== s.passive, h = t !== $5e4f263f2dad39fc$export$45b790e32b2810ee && (s === $5e4f263f2dad39fc$export$45b790e32b2810ee || e);
        e && this.element.removeEventListener(this.name, this, s), h && this.element.addEventListener(this.name, this, t), this._$AH = t;
    }
    handleEvent(t) {
        var _this_options;
        var _this_options_host;
        "function" == typeof this._$AH ? this._$AH.call((_this_options_host = (_this_options = this.options) === null || _this_options === void 0 ? void 0 : _this_options.host) !== null && _this_options_host !== void 0 ? _this_options_host : this.element, t) : this._$AH.handleEvent(t);
    }
    constructor(t, i, s, e, h){
        super(t, i, s, e, h), this.type = 5;
    }
}
class $5e4f263f2dad39fc$var$Z {
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AI(t) {
        $5e4f263f2dad39fc$var$M(this, t);
    }
    constructor(t, i, s){
        this.element = t, this.type = 6, this._$AN = void 0, this._$AM = i, this.options = s;
    }
}
const $5e4f263f2dad39fc$export$8613d1ca9052b22e = {
    M: $5e4f263f2dad39fc$var$h,
    P: $5e4f263f2dad39fc$var$o,
    A: $5e4f263f2dad39fc$var$n,
    C: 1,
    L: $5e4f263f2dad39fc$var$N,
    R: $5e4f263f2dad39fc$var$R,
    D: $5e4f263f2dad39fc$var$d,
    V: $5e4f263f2dad39fc$var$M,
    I: $5e4f263f2dad39fc$var$k,
    H: $5e4f263f2dad39fc$var$H,
    N: $5e4f263f2dad39fc$var$L,
    U: $5e4f263f2dad39fc$var$z,
    B: $5e4f263f2dad39fc$var$I,
    F: $5e4f263f2dad39fc$var$Z
}, $5e4f263f2dad39fc$var$B = $5e4f263f2dad39fc$var$t.litHtmlPolyfillSupport;
var $5e4f263f2dad39fc$var$_litHtmlVersions;
$5e4f263f2dad39fc$var$B === null || $5e4f263f2dad39fc$var$B === void 0 ? void 0 : $5e4f263f2dad39fc$var$B($5e4f263f2dad39fc$var$S, $5e4f263f2dad39fc$var$k), (($5e4f263f2dad39fc$var$_litHtmlVersions = ($5e4f263f2dad39fc$var$_t = $5e4f263f2dad39fc$var$t).litHtmlVersions) !== null && $5e4f263f2dad39fc$var$_litHtmlVersions !== void 0 ? $5e4f263f2dad39fc$var$_litHtmlVersions : $5e4f263f2dad39fc$var$_t.litHtmlVersions = []).push("3.3.3");
const $5e4f263f2dad39fc$export$b3890eb0ae9dca99 = (t, i, s)=>{
    var _s_renderBefore;
    const e = (_s_renderBefore = s === null || s === void 0 ? void 0 : s.renderBefore) !== null && _s_renderBefore !== void 0 ? _s_renderBefore : i;
    let h = e._$litPart$;
    if (void 0 === h) {
        var _s_renderBefore1;
        const t = (_s_renderBefore1 = s === null || s === void 0 ? void 0 : s.renderBefore) !== null && _s_renderBefore1 !== void 0 ? _s_renderBefore1 : null;
        e._$litPart$ = h = new $5e4f263f2dad39fc$var$k(i.insertBefore($5e4f263f2dad39fc$var$c(), t), t, void 0, s !== null && s !== void 0 ? s : {});
    }
    return h._$AI(t), h;
};




var $08f2bff00ea64ee4$var$_s_litElementHydrateSupport;
var $08f2bff00ea64ee4$var$_s;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $08f2bff00ea64ee4$var$s = globalThis;
class $08f2bff00ea64ee4$export$3f2f9f5909897157 extends (0, $b3296c98c32cde16$export$c7c07a37856565d) {
    createRenderRoot() {
        var _this_renderOptions;
        const t = super.createRenderRoot();
        var _renderBefore;
        return (_renderBefore = (_this_renderOptions = this.renderOptions).renderBefore) !== null && _renderBefore !== void 0 ? _renderBefore : _this_renderOptions.renderBefore = t.firstChild, t;
    }
    update(t) {
        const r = this.render();
        this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = (0, $5e4f263f2dad39fc$export$b3890eb0ae9dca99)(r, this.renderRoot, this.renderOptions);
    }
    connectedCallback() {
        var _this__$Do;
        super.connectedCallback(), (_this__$Do = this._$Do) === null || _this__$Do === void 0 ? void 0 : _this__$Do.setConnected(!0);
    }
    disconnectedCallback() {
        var _this__$Do;
        super.disconnectedCallback(), (_this__$Do = this._$Do) === null || _this__$Do === void 0 ? void 0 : _this__$Do.setConnected(!1);
    }
    render() {
        return 0, $5e4f263f2dad39fc$export$9c068ae9cc5db4e8;
    }
    constructor(){
        super(...arguments), this.renderOptions = {
            host: this
        }, this._$Do = void 0;
    }
}
$08f2bff00ea64ee4$export$3f2f9f5909897157._$litElement$ = !0, $08f2bff00ea64ee4$export$3f2f9f5909897157["finalized"] = !0, ($08f2bff00ea64ee4$var$_s_litElementHydrateSupport = $08f2bff00ea64ee4$var$s.litElementHydrateSupport) === null || $08f2bff00ea64ee4$var$_s_litElementHydrateSupport === void 0 ? void 0 : $08f2bff00ea64ee4$var$_s_litElementHydrateSupport.call($08f2bff00ea64ee4$var$s, {
    LitElement: $08f2bff00ea64ee4$export$3f2f9f5909897157
});
const $08f2bff00ea64ee4$var$o = $08f2bff00ea64ee4$var$s.litElementPolyfillSupport;
$08f2bff00ea64ee4$var$o === null || $08f2bff00ea64ee4$var$o === void 0 ? void 0 : $08f2bff00ea64ee4$var$o({
    LitElement: $08f2bff00ea64ee4$export$3f2f9f5909897157
});
const $08f2bff00ea64ee4$export$f5c524615a7708d6 = {
    _$AK: (t, e, r)=>{
        t._$AK(e, r);
    },
    _$AL: (t)=>t._$AL
};
var $08f2bff00ea64ee4$var$_litElementVersions;
(($08f2bff00ea64ee4$var$_litElementVersions = ($08f2bff00ea64ee4$var$_s = $08f2bff00ea64ee4$var$s).litElementVersions) !== null && $08f2bff00ea64ee4$var$_litElementVersions !== void 0 ? $08f2bff00ea64ee4$var$_litElementVersions : $08f2bff00ea64ee4$var$_s.litElementVersions = []).push("4.2.2");


/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $c7d93c12585fc7f5$export$6acf61af03e62db = !1;




/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $a5f8d5703ae3d732$export$da64fc29f17f9d0e = (t)=>(e, o)=>{
        void 0 !== o ? o.addInitializer(()=>{
            customElements.define(t, e);
        }) : customElements.define(t, e);
    };



/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $e48c8bdf0d6f523c$var$o = {
    attribute: !0,
    type: String,
    converter: (0, $b3296c98c32cde16$export$7312b35fbf521afb),
    reflect: !1,
    hasChanged: (0, $b3296c98c32cde16$export$53a6892c50694894)
}, $e48c8bdf0d6f523c$export$8d623b1670eb40f4 = (t = $e48c8bdf0d6f523c$var$o, e, r)=>{
    const { kind: n, metadata: i } = r;
    let s = globalThis.litPropertyMetadata.get(i);
    if (void 0 === s && globalThis.litPropertyMetadata.set(i, s = new Map), "setter" === n && ((t = Object.create(t)).wrapped = !0), s.set(r.name, t), "accessor" === n) {
        const { name: o } = r;
        return {
            set (r) {
                const n = e.get.call(this);
                e.set.call(this, r), this.requestUpdate(o, n, t, !0, r);
            },
            init (e) {
                return void 0 !== e && this.C(o, void 0, t, e), e;
            }
        };
    }
    if ("setter" === n) {
        const { name: o } = r;
        return function(r) {
            const n = this[o];
            e.call(this, r), this.requestUpdate(o, n, t, !0, r);
        };
    }
    throw Error("Unsupported decorator location: " + n);
};
function $e48c8bdf0d6f523c$export$d541bacb2bda4494(t) {
    return (e, o)=>"object" == typeof o ? $e48c8bdf0d6f523c$export$8d623b1670eb40f4(t, e, o) : ((t, e, o)=>{
            const r = e.hasOwnProperty(o);
            return e.constructor.createProperty(o, t), r ? Object.getOwnPropertyDescriptor(e, o) : void 0;
        })(t, e, o);
}



function $352bf379245fbc9f$export$71511d61b312f219(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
            return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
        ownKeys.forEach(function(key) {
            (0, $4c7ef179a45ab871$export$71511d61b312f219)(target, key, source[key]);
        });
    }
    return target;
}


function $f4c2afb688ab0db2$var$ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function $f4c2afb688ab0db2$export$71511d61b312f219(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    else $f4c2afb688ab0db2$var$ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
    return target;
}



/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $6fffc213cda8605b$export$ca000e230c0caa3e(r) {
    return (0, $e48c8bdf0d6f523c$export$d541bacb2bda4494)((0, $f4c2afb688ab0db2$export$71511d61b312f219)((0, $352bf379245fbc9f$export$71511d61b312f219)({}, r), {
        state: !0,
        attribute: !1
    }));
}


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $71f064e90dcdc231$export$b2b799818fbabcf3(t) {
    return (n, o)=>{
        const c = "function" == typeof n ? n : n[o];
        Object.assign(c, t);
    };
}


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $1d0476d4c7a4c3a0$export$51987bb50e1f6752 = (e, t, c)=>(c.configurable = !0, c.enumerable = !0, Reflect.decorate && "object" != typeof t && Object.defineProperty(e, t, c), c);


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $f34c39adfc319163$export$2fa187e846a241c4(e, r) {
    return (n, s, i)=>{
        const o = (t)=>{
            var _t_renderRoot;
            var _t_renderRoot_querySelector;
            return (_t_renderRoot_querySelector = (_t_renderRoot = t.renderRoot) === null || _t_renderRoot === void 0 ? void 0 : _t_renderRoot.querySelector(e)) !== null && _t_renderRoot_querySelector !== void 0 ? _t_renderRoot_querySelector : null;
        };
        if (r) {
            const { get: e, set: r } = "object" == typeof s ? n : i !== null && i !== void 0 ? i : (()=>{
                const t = Symbol();
                return {
                    get () {
                        return this[t];
                    },
                    set (e) {
                        this[t] = e;
                    }
                };
            })();
            return (0, $1d0476d4c7a4c3a0$export$51987bb50e1f6752)(n, s, {
                get () {
                    let t = e.call(this);
                    return void 0 === t && (t = o(this), (null !== t || this.hasUpdated) && r.call(this, t)), t;
                }
            });
        }
        return (0, $1d0476d4c7a4c3a0$export$51987bb50e1f6752)(n, s, {
            get () {
                return o(this);
            }
        });
    };
}



/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ let $e09aae8105da4be0$var$e;
function $e09aae8105da4be0$export$dcd0d083aa86c355(r) {
    return (n, o)=>(0, $1d0476d4c7a4c3a0$export$51987bb50e1f6752)(n, o, {
            get () {
                var _this_renderRoot;
                return ((_this_renderRoot = this.renderRoot) !== null && _this_renderRoot !== void 0 ? _this_renderRoot : $e09aae8105da4be0$var$e !== null && $e09aae8105da4be0$var$e !== void 0 ? $e09aae8105da4be0$var$e : $e09aae8105da4be0$var$e = document.createDocumentFragment()).querySelectorAll(r);
            }
        });
}



/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $4a4a463c79cfbd5a$export$163dfc35cc43f240(r) {
    return (n, e)=>(0, $1d0476d4c7a4c3a0$export$51987bb50e1f6752)(n, e, {
            async get () {
                var _this_renderRoot;
                var _this_renderRoot_querySelector;
                return await this.updateComplete, (_this_renderRoot_querySelector = (_this_renderRoot = this.renderRoot) === null || _this_renderRoot === void 0 ? void 0 : _this_renderRoot.querySelector(r)) !== null && _this_renderRoot_querySelector !== void 0 ? _this_renderRoot_querySelector : null;
            }
        });
}



/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $73c2ba9ba31f5025$export$4682af2d9ee91415(o) {
    return (e, n)=>{
        const { slot: r, selector: s } = o !== null && o !== void 0 ? o : {}, c = "slot" + (r ? `[name=${r}]` : ":not([name])");
        return (0, $1d0476d4c7a4c3a0$export$51987bb50e1f6752)(e, n, {
            get () {
                var _this_renderRoot;
                var _t_assignedElements;
                const t = (_this_renderRoot = this.renderRoot) === null || _this_renderRoot === void 0 ? void 0 : _this_renderRoot.querySelector(c), e = (_t_assignedElements = t === null || t === void 0 ? void 0 : t.assignedElements(o)) !== null && _t_assignedElements !== void 0 ? _t_assignedElements : [];
                return void 0 === s ? e : e.filter((t)=>t.matches(s));
            }
        });
    };
}



/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $ee0a1213b38128eb$export$1bdbe53f9df1b8(n) {
    return (o, r)=>{
        const { slot: e } = n !== null && n !== void 0 ? n : {}, s = "slot" + (e ? `[name=${e}]` : ":not([name])");
        return (0, $1d0476d4c7a4c3a0$export$51987bb50e1f6752)(o, r, {
            get () {
                var _this_renderRoot;
                const t = (_this_renderRoot = this.renderRoot) === null || _this_renderRoot === void 0 ? void 0 : _this_renderRoot.querySelector(s);
                var _t_assignedNodes;
                return (_t_assignedNodes = t === null || t === void 0 ? void 0 : t.assignedNodes(n)) !== null && _t_assignedNodes !== void 0 ? _t_assignedNodes : [];
            }
        });
    };
}




/**
 * @license MIT
 * Copyright (c) 2025–2026 matraic
 * See LICENSE file in the project root for full license text.
 */ 


/**
 * @license MIT
 * Copyright (c) 2025–2026 matraic
 * See LICENSE file in the project root for full license text.
 */ 



/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $553f6b5191b9868b$export$9ba3b3f20a85bfa = {
    ATTRIBUTE: 1,
    CHILD: 2,
    PROPERTY: 3,
    BOOLEAN_ATTRIBUTE: 4,
    EVENT: 5,
    ELEMENT: 6
}, $553f6b5191b9868b$export$99b43ad1ed32e735 = (t)=>(...e)=>({
            _$litDirective$: t,
            values: e
        });
class $553f6b5191b9868b$export$befdefbdce210f91 {
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AT(t, e, i) {
        this._$Ct = t, this._$AM = e, this._$Ci = i;
    }
    _$AS(t, e) {
        return this.update(t, e);
    }
    update(t, e) {
        return this.render(...e);
    }
    constructor(t){}
}






/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $bc84d556abb824e4$export$f68dd208b5df064d = (o)=>o !== null && o !== void 0 ? o : (0, $5e4f263f2dad39fc$export$45b790e32b2810ee);




let $2795e4e0258f7c7d$var$_ = (t)=>t, $2795e4e0258f7c7d$var$t, $2795e4e0258f7c7d$var$t1, $2795e4e0258f7c7d$var$t2, $2795e4e0258f7c7d$var$t3, $2795e4e0258f7c7d$var$t4, $2795e4e0258f7c7d$var$t5, $2795e4e0258f7c7d$var$t6, $2795e4e0258f7c7d$var$t7, $2795e4e0258f7c7d$var$t8, $2795e4e0258f7c7d$var$t9, $2795e4e0258f7c7d$var$t10, $2795e4e0258f7c7d$var$t11, $2795e4e0258f7c7d$var$t12, $2795e4e0258f7c7d$var$t13, $2795e4e0258f7c7d$var$t14, $2795e4e0258f7c7d$var$t15, $2795e4e0258f7c7d$var$t16, $2795e4e0258f7c7d$var$t17, $2795e4e0258f7c7d$var$t18, $2795e4e0258f7c7d$var$t19, $2795e4e0258f7c7d$var$t20, $2795e4e0258f7c7d$var$t21, $2795e4e0258f7c7d$var$t22, $2795e4e0258f7c7d$var$t23, $2795e4e0258f7c7d$var$t24, $2795e4e0258f7c7d$var$t25, $2795e4e0258f7c7d$var$t26, $2795e4e0258f7c7d$var$t27;
var $2795e4e0258f7c7d$var$_AnimationLoopController_frameId, $2795e4e0258f7c7d$var$_AnimationLoopController_lastTime, $2795e4e0258f7c7d$var$_AnimationLoopController_running, $2795e4e0258f7c7d$var$_AnimationLoopController_callback, $2795e4e0258f7c7d$var$_AnimationLoopController_loop;
/** A `ReactiveController` used to execute a function in an animation loop. */ class $2795e4e0258f7c7d$export$643e6927a51c9d90 {
    /** @inheritdoc */ hostDisconnected() {
        this.stop();
    }
    /** Starts the animation loop. */ start() {
        if ((0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_AnimationLoopController_running, "f")) return;
        (0, $ee430606400354b3$export$d40a35129aaff81f)(this, $2795e4e0258f7c7d$var$_AnimationLoopController_running, true, "f");
        (0, $ee430606400354b3$export$d40a35129aaff81f)(this, $2795e4e0258f7c7d$var$_AnimationLoopController_lastTime, performance.now(), "f");
        (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_AnimationLoopController_loop, "f").call(this);
    }
    /** Stops the animation loop. */ stop() {
        if (!(0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_AnimationLoopController_running, "f")) return;
        (0, $ee430606400354b3$export$d40a35129aaff81f)(this, $2795e4e0258f7c7d$var$_AnimationLoopController_running, false, "f");
        if ((0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_AnimationLoopController_frameId, "f") !== null) {
            cancelAnimationFrame((0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_AnimationLoopController_frameId, "f"));
            (0, $ee430606400354b3$export$d40a35129aaff81f)(this, $2795e4e0258f7c7d$var$_AnimationLoopController_frameId, null, "f");
        }
    }
    constructor(host, callback){
        /** @private */ $2795e4e0258f7c7d$var$_AnimationLoopController_frameId.set(this, null);
        /** @private */ $2795e4e0258f7c7d$var$_AnimationLoopController_lastTime.set(this, 0);
        /** @private */ $2795e4e0258f7c7d$var$_AnimationLoopController_running.set(this, false);
        /** @private */ $2795e4e0258f7c7d$var$_AnimationLoopController_callback.set(this, void 0);
        /** @private */ $2795e4e0258f7c7d$var$_AnimationLoopController_loop.set(this, ()=>{
            if (!(0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_AnimationLoopController_running, "f")) return;
            const now = performance.now();
            (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_AnimationLoopController_callback, "f").call(this, (now - (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_AnimationLoopController_lastTime, "f")) / 1000, now / 1000);
            (0, $ee430606400354b3$export$d40a35129aaff81f)(this, $2795e4e0258f7c7d$var$_AnimationLoopController_lastTime, now, "f");
            (0, $ee430606400354b3$export$d40a35129aaff81f)(this, $2795e4e0258f7c7d$var$_AnimationLoopController_frameId, requestAnimationFrame((0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_AnimationLoopController_loop, "f")), "f");
        });
        (0, $ee430606400354b3$export$d40a35129aaff81f)(this, $2795e4e0258f7c7d$var$_AnimationLoopController_callback, callback, "f");
        host.addController(this);
    }
}
$2795e4e0258f7c7d$var$_AnimationLoopController_frameId = new WeakMap(), $2795e4e0258f7c7d$var$_AnimationLoopController_lastTime = new WeakMap(), $2795e4e0258f7c7d$var$_AnimationLoopController_running = new WeakMap(), $2795e4e0258f7c7d$var$_AnimationLoopController_callback = new WeakMap(), $2795e4e0258f7c7d$var$_AnimationLoopController_loop = new WeakMap();
var $2795e4e0258f7c7d$var$_MonitorControllerBase_host, $2795e4e0258f7c7d$var$_MonitorControllerBase_target, $2795e4e0258f7c7d$var$_MonitorControllerBase_targets;
/**
 * A base implementation for a `ReactiveController` used to monitor the state of one
 * or more elements. This class must be inherited.
 */ class $2795e4e0258f7c7d$var$MonitorControllerBase {
    /** The targets being observed. */ get targets() {
        return (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_MonitorControllerBase_targets, "f").values();
    }
    /** Whether one or more targets are being monitored. */ get hasTargets() {
        return (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_MonitorControllerBase_targets, "f").size > 0;
    }
    /** @inheritdoc */ hostConnected() {
        var __classPrivateFieldGet1;
        // Target defaults to host unless explicitly null.
        if ((0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_MonitorControllerBase_target, "f") !== null) this.observe((__classPrivateFieldGet1 = (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_MonitorControllerBase_target, "f")) !== null && __classPrivateFieldGet1 !== void 0 ? __classPrivateFieldGet1 : (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_MonitorControllerBase_host, "f"));
    }
    /** @inheritdoc */ hostDisconnected() {
        this.unobserveAll();
    }
    /**
   * Starts observing the specified element.
   * @param {HTMLElement} target The element to start observing.
   */ observe(target) {
        if ((0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_MonitorControllerBase_targets, "f").has(target)) return;
        (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_MonitorControllerBase_targets, "f").add(target);
        this._observe(target);
    }
    /**
   * Determines whether the specified element is being observed.
   * @param {HTMLElement} target The element to test.
   * @returns {boolean} Whether `target` is being observed.
   */ isObserving(target) {
        return (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_MonitorControllerBase_targets, "f").has(target);
    }
    /**
   * Stops observing the specified element.
   * @param {HTMLElement} target The element to stop observing.
   */ unobserve(target) {
        if (!(0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_MonitorControllerBase_targets, "f").delete(target)) return;
        this._unobserve(target);
    }
    /** Stops observing all targets. */ unobserveAll() {
        (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_MonitorControllerBase_targets, "f").forEach((x)=>this.unobserve(x));
        (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_MonitorControllerBase_targets, "f").clear();
    }
    /**
   * Initializes the `MonitorControllerBase` base class values when called by a derived class.
   * @param {ReactiveControllerHost & HTMLElement} host The host element to which this controller will be added.
   * @param {MonitorControllerOptions} options Options used to configure this controller.
   */ constructor(host, options){
        /** @private */ $2795e4e0258f7c7d$var$_MonitorControllerBase_host.set(this, void 0);
        /** @private */ $2795e4e0258f7c7d$var$_MonitorControllerBase_target.set(this, void 0);
        /** @private */ $2795e4e0258f7c7d$var$_MonitorControllerBase_targets.set(this, new Set());
        (0, $ee430606400354b3$export$d40a35129aaff81f)(this, $2795e4e0258f7c7d$var$_MonitorControllerBase_host, host, "f");
        (0, $ee430606400354b3$export$d40a35129aaff81f)(this, $2795e4e0258f7c7d$var$_MonitorControllerBase_target, options.target, "f");
        (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_MonitorControllerBase_host, "f").addController(this);
    }
}
$2795e4e0258f7c7d$var$_MonitorControllerBase_host = new WeakMap(), $2795e4e0258f7c7d$var$_MonitorControllerBase_target = new WeakMap(), $2795e4e0258f7c7d$var$_MonitorControllerBase_targets = new WeakMap();
var $2795e4e0258f7c7d$var$_ClickOutsideController_instances, $2795e4e0258f7c7d$var$_ClickOutsideController_callback, $2795e4e0258f7c7d$var$_ClickOutsideController_documentClickHandler, $2795e4e0258f7c7d$var$_ClickOutsideController_listening, $2795e4e0258f7c7d$var$_ClickOutsideController_handleDocumentClick;
/** A `ReactiveController` used to monitor whether the user clicks outside all observed elements. */ class $2795e4e0258f7c7d$export$bf69ce3f9b7a2eb8 extends $2795e4e0258f7c7d$var$MonitorControllerBase {
    /** @inheritdoc */ _observe() {
        if (!(0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_ClickOutsideController_listening, "f")) {
            document.addEventListener("click", (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_ClickOutsideController_documentClickHandler, "f"));
            (0, $ee430606400354b3$export$d40a35129aaff81f)(this, $2795e4e0258f7c7d$var$_ClickOutsideController_listening, true, "f");
        }
    }
    /** @inheritdoc */ _unobserve() {
        if (!this.hasTargets && (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_ClickOutsideController_listening, "f")) {
            document.removeEventListener("click", (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_ClickOutsideController_documentClickHandler, "f"));
            (0, $ee430606400354b3$export$d40a35129aaff81f)(this, $2795e4e0258f7c7d$var$_ClickOutsideController_listening, false, "f");
        }
    }
    /**
   * Initializes a new instance of this class.
   * @param {ReactiveControllerHost & HTMLElement} host The host element to which this controller will be added.
   * @param {FocusControllerOptions} options Options used to configure this controller.
   */ constructor(host, options){
        super(host, options);
        $2795e4e0258f7c7d$var$_ClickOutsideController_instances.add(this);
        /** @private */ $2795e4e0258f7c7d$var$_ClickOutsideController_callback.set(this, void 0);
        /** @private */ $2795e4e0258f7c7d$var$_ClickOutsideController_documentClickHandler.set(this, (e)=>(0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_ClickOutsideController_instances, "m", $2795e4e0258f7c7d$var$_ClickOutsideController_handleDocumentClick).call(this, e));
        /** @private */ $2795e4e0258f7c7d$var$_ClickOutsideController_listening.set(this, false);
        (0, $ee430606400354b3$export$d40a35129aaff81f)(this, $2795e4e0258f7c7d$var$_ClickOutsideController_callback, options.callback, "f");
    }
}
$2795e4e0258f7c7d$var$_ClickOutsideController_callback = new WeakMap(), $2795e4e0258f7c7d$var$_ClickOutsideController_documentClickHandler = new WeakMap(), $2795e4e0258f7c7d$var$_ClickOutsideController_listening = new WeakMap(), $2795e4e0258f7c7d$var$_ClickOutsideController_instances = new WeakSet(), $2795e4e0258f7c7d$var$_ClickOutsideController_handleDocumentClick = function _ClickOutsideController_handleDocumentClick(e) {
    const composedPath = e.composedPath();
    if (!composedPath.some((x)=>x instanceof HTMLElement && this.isObserving(x))) (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_ClickOutsideController_callback, "f").call(this, composedPath);
};
/**
 * Computes a CSS size expression (var(), %, rem, calc(), etc.) relative to the given host element.
 * @param {HTMLElement} host - The element whose coordinate system and CSS variables should be used to resolve the expression.
 * @param {string} expression - The CSS expression to evaluate.
 * @returns {number} The resolved pixel value.
 */ function $2795e4e0258f7c7d$export$e7e01037a2b604a4(host, expression) {
    if (!expression) return 0;
    const temp = document.createElement("div");
    temp.style.all = "inherit";
    temp.style.width = expression;
    temp.style.position = "absolute";
    temp.style.visibility = "hidden";
    temp.style.pointerEvents = "none";
    host.appendChild(temp);
    try {
        return parseFloat(getComputedStyle(temp).width);
    } finally{
        temp.remove();
    }
}
/**
 * Determines the number of textual lines presented by an element.
 * @param {HTMLElement} element The element for which to compute the number of lines.
 * @returns {number} The number of lines presented by an element.
 */ function $2795e4e0258f7c7d$export$e35a80688523fffb(element) {
    const lineHeight = parseFloat(getComputedStyle(element).lineHeight);
    return isNaN(lineHeight) || lineHeight <= 0 ? 0 : Math.round(element.scrollHeight / lineHeight);
}
/**
 * Asynchronously attempts to focus an element once it becomes focusable.
 * @param {HTMLElement} element The element to to focus.
 * @param {number} [timeout=200] The maximum amount of time to attempt to focus `el`.
 * @returns {Promise<boolean>} A `Promise` that resolves to whether `el` was focused.
 */ async function $2795e4e0258f7c7d$export$75c2638e65e78d0f(element, timeout = 200) {
    element.focus();
    function isFocused(element) {
        const root = element.getRootNode();
        return root instanceof ShadowRoot ? root.activeElement === element : document.activeElement === element;
    }
    const start = performance.now();
    while(!isFocused(element)){
        if (!element.isConnected || performance.now() - start > timeout) return false;
        await new Promise(requestAnimationFrame);
        element.focus();
    }
    return true;
}
/**
 * Determines whether forced colors are active.
 * @returns {boolean} Whether forced colors are active.
 */ function $2795e4e0258f7c7d$export$23294f3699b537b1() {
    return !(0, $c7d93c12585fc7f5$export$6acf61af03e62db) && matchMedia("(forced-colors: active)").matches;
}
function $2795e4e0258f7c7d$var$lerp(a, b, t) {
    return a + (b - a) * t;
}
function $2795e4e0258f7c7d$var$quadraticBezier(p0, p1, p2, t) {
    const x = Math.pow(1 - t, 2) * p0.x + 2 * (1 - t) * t * p1.x + Math.pow(t, 2) * p2.x;
    const y = Math.pow(1 - t, 2) * p0.y + 2 * (1 - t) * t * p1.y + Math.pow(t, 2) * p2.y;
    return {
        x: x,
        y: y
    };
}
function $2795e4e0258f7c7d$var$cubicBezier(p0, p1, p2, p3, t) {
    const x = Math.pow(1 - t, 3) * p0.x + 3 * Math.pow(1 - t, 2) * t * p1.x + 3 * (1 - t) * Math.pow(t, 2) * p2.x + Math.pow(t, 3) * p3.x;
    const y = Math.pow(1 - t, 3) * p0.y + 3 * Math.pow(1 - t, 2) * t * p1.y + 3 * (1 - t) * Math.pow(t, 2) * p2.y + Math.pow(t, 3) * p3.y;
    return {
        x: x,
        y: y
    };
}
function $2795e4e0258f7c7d$var$parsePath(pathData) {
    const commands = pathData.match(/[a-zA-Z][^a-zA-Z]*/g) || [];
    return commands.map((cmd)=>{
        const type = cmd[0];
        const nums = cmd.slice(1).trim().split(/[\s,]+/).filter(Boolean).map(Number);
        return {
            type: type,
            nums: nums
        };
    });
}
function $2795e4e0258f7c7d$var$samplePath(pathData, maxPoints) {
    const segments = $2795e4e0258f7c7d$var$parsePath(pathData);
    let current = {
        x: 0,
        y: 0
    };
    let start = {
        x: 0,
        y: 0
    };
    const segs = [];
    for (const seg of segments){
        if (seg.type === "M") {
            current = {
                x: seg.nums[0],
                y: seg.nums[1]
            };
            start = current;
        } else if (seg.type === "L") {
            const next = {
                x: seg.nums[0],
                y: seg.nums[1]
            };
            const dx = next.x - current.x;
            const dy = next.y - current.y;
            segs.push({
                type: "L",
                pts: [
                    current,
                    next
                ],
                length: Math.hypot(dx, dy)
            });
            current = next;
        } else if (seg.type === "H") {
            const next = {
                x: seg.nums[0],
                y: current.y
            };
            const dx = next.x - current.x;
            segs.push({
                type: "L",
                pts: [
                    current,
                    next
                ],
                length: Math.abs(dx)
            });
            current = next;
        } else if (seg.type === "V") {
            const next = {
                x: current.x,
                y: seg.nums[0]
            };
            const dy = next.y - current.y;
            segs.push({
                type: "L",
                pts: [
                    current,
                    next
                ],
                length: Math.abs(dy)
            });
            current = next;
        } else if (seg.type === "Q") {
            const p1 = {
                x: seg.nums[0],
                y: seg.nums[1]
            };
            const p2 = {
                x: seg.nums[2],
                y: seg.nums[3]
            };
            let length = 0;
            let prev = current;
            const steps = 20;
            for(let i = 1; i <= steps; i++){
                const t = i / steps;
                const pt = $2795e4e0258f7c7d$var$quadraticBezier(current, p1, p2, t);
                length += Math.hypot(pt.x - prev.x, pt.y - prev.y);
                prev = pt;
            }
            segs.push({
                type: "Q",
                pts: [
                    current,
                    p1,
                    p2
                ],
                length: length
            });
            current = p2;
        } else if (seg.type === "C") {
            const p1 = {
                x: seg.nums[0],
                y: seg.nums[1]
            };
            const p2 = {
                x: seg.nums[2],
                y: seg.nums[3]
            };
            const p3 = {
                x: seg.nums[4],
                y: seg.nums[5]
            };
            let length = 0;
            let prev = current;
            const steps = 20;
            for(let i = 1; i <= steps; i++){
                const t = i / steps;
                const pt = $2795e4e0258f7c7d$var$cubicBezier(current, p1, p2, p3, t);
                length += Math.hypot(pt.x - prev.x, pt.y - prev.y);
                prev = pt;
            }
            segs.push({
                type: "C",
                pts: [
                    current,
                    p1,
                    p2,
                    p3
                ],
                length: length
            });
            current = p3;
        } else if (seg.type === "Z") {
            const dx = start.x - current.x;
            const dy = start.y - current.y;
            segs.push({
                type: "L",
                pts: [
                    current,
                    start
                ],
                length: Math.hypot(dx, dy)
            });
            current = start;
        }
    }
    const totalLength = segs.reduce((sum, s)=>sum + s.length, 0);
    const step = totalLength / (maxPoints - 1);
    const points = [];
    let distSoFar = 0;
    let segIndex = 0;
    for(let i = 0; i < maxPoints; i++){
        const targetDist = i * step;
        while(segIndex < segs.length && distSoFar + segs[segIndex].length < targetDist){
            distSoFar += segs[segIndex].length;
            segIndex++;
        }
        const seg = segs[segIndex];
        if (!seg) break;
        const localT = (targetDist - distSoFar) / seg.length;
        if (seg.type === "L") {
            const [p0, p1] = seg.pts;
            points.push({
                x: $2795e4e0258f7c7d$var$lerp(p0.x, p1.x, localT),
                y: $2795e4e0258f7c7d$var$lerp(p0.y, p1.y, localT)
            });
        } else if (seg.type === "Q") {
            const [p0, p1, p2] = seg.pts;
            points.push($2795e4e0258f7c7d$var$quadraticBezier(p0, p1, p2, localT));
        } else if (seg.type === "C") {
            const [p0, p1, p2, p3] = seg.pts;
            points.push($2795e4e0258f7c7d$var$cubicBezier(p0, p1, p2, p3, localT));
        }
    }
    return points;
}
function $2795e4e0258f7c7d$var$pointsToPercentClipPath(points) {
    const coords = points.map((p)=>{
        const xPercent = $2795e4e0258f7c7d$var$clamp(p.x * 100, 0, 100);
        const yPercent = $2795e4e0258f7c7d$var$clamp(p.y * 100, 0, 100);
        return `${xPercent.toFixed(2)}% ${yPercent.toFixed(2)}%`;
    });
    return `${coords.join(", ")}`;
}
function $2795e4e0258f7c7d$var$clamp(v, a, b) {
    return Math.max(a, Math.min(b, v));
}
function $2795e4e0258f7c7d$var$bbox(points) {
    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
    for (const p of points){
        if (p.x < minX) minX = p.x;
        if (p.x > maxX) maxX = p.x;
        if (p.y < minY) minY = p.y;
        if (p.y > maxY) maxY = p.y;
    }
    return {
        minX: minX,
        minY: minY,
        maxX: maxX,
        maxY: maxY,
        width: maxX - minX,
        height: maxY - minY
    };
}
function $2795e4e0258f7c7d$var$rotateArray(arr, offset) {
    const n = arr.length;
    const out = new Array(n);
    for(let i = 0; i < n; i++)out[i] = arr[(i + offset) % n];
    return out;
}
function $2795e4e0258f7c7d$var$bestCircularShift(target, source) {
    const n = Math.min(source.length, target.length);
    let bestK = 0;
    let bestScore = Infinity;
    for(let k = 0; k < n; k++){
        let score = 0;
        for(let i = 0; i < n; i++){
            const s = source[(i + k) % n];
            const t = target[i];
            const dx = s.x - t.x;
            const dy = s.y - t.y;
            score += dx * dx + dy * dy;
            if (score >= bestScore) break; // early exit
        }
        if (score < bestScore) {
            bestScore = score;
            bestK = k;
        }
    }
    return bestK;
}
function $2795e4e0258f7c7d$var$signedArea(points) {
    let area = 0;
    const n = points.length;
    for(let i = 0; i < n; i++){
        const a = points[i];
        const b = points[(i + 1) % n];
        area += a.x * b.y - b.x * a.y;
    }
    return area / 2;
}
function $2795e4e0258f7c7d$var$normalizePointSets(sets) {
    const normalized = sets.map((pts)=>{
        const b = $2795e4e0258f7c7d$var$bbox(pts);
        const translated = pts.map((p)=>({
                x: p.x - b.minX,
                y: p.y - b.minY
            }));
        const scale = Math.max(b.width, b.height) || 1;
        const scaled = translated.map((p)=>({
                x: p.x / scale,
                y: p.y / scale
            }));
        const widthScaled = b.width / scale;
        const heightScaled = b.height / scale;
        const offsetX = (1 - widthScaled) / 2;
        const offsetY = (1 - heightScaled) / 2;
        return scaled.map((p)=>({
                x: p.x + offsetX,
                y: p.y + offsetY
            }));
    });
    const reference = normalized[0];
    const refSign = Math.sign($2795e4e0258f7c7d$var$signedArea(reference));
    for(let i = 1; i < normalized.length; i++){
        let set = normalized[i];
        const sign = Math.sign($2795e4e0258f7c7d$var$signedArea(set));
        if (sign !== 0 && sign !== refSign) set = set.slice().reverse();
        const k = $2795e4e0258f7c7d$var$bestCircularShift(reference, set);
        normalized[i] = $2795e4e0258f7c7d$var$rotateArray(set, k);
    }
    return normalized;
}
/**
 * Generates normalized clip paths from SVG path data.
 * @param {string[]} paths The SVG path data to convert to normalized clip paths.
 * @param {number} maxPoints The maximum number of points to which to normalize paths.
 * @returns {string[]} The normalized clip paths.
 */ function $2795e4e0258f7c7d$export$bd65317e0df81807(paths, maxPoints) {
    return $2795e4e0258f7c7d$var$normalizePointSets(paths.map((x)=>$2795e4e0258f7c7d$var$samplePath(x, maxPoints))).map((x)=>$2795e4e0258f7c7d$var$pointsToPercentClipPath(x));
}
let $2795e4e0258f7c7d$var$_cachedScrollbarWidth = null;
let $2795e4e0258f7c7d$var$_cachedThinScrollbarWidth = null;
/**
 * Computes the width of a scrollbar.
 * @param {boolean} [thin=false] Whether to get the width of a thin scrollbar.
 * @returns {number} The width of a scrollbar.
 */ function $2795e4e0258f7c7d$export$ace028f8da1a6300(thin = false) {
    if (thin) {
        if ($2795e4e0258f7c7d$var$_cachedThinScrollbarWidth !== null) return $2795e4e0258f7c7d$var$_cachedThinScrollbarWidth;
    }
    if ($2795e4e0258f7c7d$var$_cachedScrollbarWidth !== null) return $2795e4e0258f7c7d$var$_cachedScrollbarWidth;
    const outer = document.createElement("div");
    outer.style.visibility = "hidden";
    outer.style.overflow = "scroll";
    if (thin) outer.style.scrollbarWidth = "thin";
    outer.style.width = "100px";
    outer.style.position = "absolute";
    outer.style.top = "-9999px";
    document.body.appendChild(outer);
    const inner = document.createElement("div");
    inner.style.width = "100%";
    outer.appendChild(inner);
    let scrollbarWidth;
    if (thin) scrollbarWidth = $2795e4e0258f7c7d$var$_cachedThinScrollbarWidth = outer.offsetWidth - inner.offsetWidth;
    else scrollbarWidth = $2795e4e0258f7c7d$var$_cachedScrollbarWidth = outer.offsetWidth - inner.offsetWidth;
    outer.remove();
    return scrollbarWidth;
}
/**
 * Gets the text content of a given node, including slotted content.
 * @param {Node} node The node for which to get text content.
 * @param {boolean} [trim = false] Whether to trim content.
 * @returns {string} The text content of `node`.
 */ function $2795e4e0258f7c7d$export$132e79e4118a78e0(node, trim = false) {
    let textContent = "";
    switch(node.nodeType){
        case Node.TEXT_NODE:
            var _node_nodeValue;
            textContent = (_node_nodeValue = node.nodeValue) !== null && _node_nodeValue !== void 0 ? _node_nodeValue : "";
            break;
        case Node.ELEMENT_NODE:
            if (node instanceof HTMLSlotElement) for (const assignedNode of node.assignedNodes({
                flatten: true
            }))textContent += $2795e4e0258f7c7d$export$132e79e4118a78e0(assignedNode, trim);
            else for (const child of node.childNodes)textContent += $2795e4e0258f7c7d$export$132e79e4118a78e0(child, trim);
            break;
    }
    if (trim) textContent = textContent.trim();
    return textContent;
}
/**
 * Generates a new globally unique identifier (GUID).
 * @returns {string} A new globally unique identifier.
 */ function $2795e4e0258f7c7d$export$46e8f25c7328f77e() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c)=>{
        const r = Math.random() * 16 | 0;
        const v = c === "x" ? r : r & 0x3 | 0x8;
        return v.toString(16);
    });
}
/**
 * Determines whether a slot has any assigned nodes.
 * @param {HTMLSlotElement} slot The slot to test.
 * @returns {boolean} Whether `slot` has any assigned nodes.
 */ function $2795e4e0258f7c7d$export$e0478d61fdced58c(slot) {
    return slot.assignedNodes({
        flatten: true
    }).length > 0;
}
/**
 * Intercepts property access and mutations on a target object, allowing custom logic
 * to run when the property is read or written to.
 *
 * @template T - The type of the target object.
 * @template K - The key of the property being intercepted (must be a valid key of T).
 * @param target - The object whose property should be intercepted.
 * @param prop - The property key to intercept.
 * @param options - Configuration object for interceptor callbacks.
 * @returns A cleanup function that removes the interceptors and restores the original property descriptor.
 * @throws {Error} If the property does not exist on the target object or its prototype chain.
 */ function $2795e4e0258f7c7d$export$71095dc9b7609b02(target, prop, options) {
    var _descriptor_get, _descriptor_set;
    var _Object_getOwnPropertyDescriptor;
    const descriptor = (_Object_getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor(target, prop)) !== null && _Object_getOwnPropertyDescriptor !== void 0 ? _Object_getOwnPropertyDescriptor : Object.getOwnPropertyDescriptor(Object.getPrototypeOf(target), prop);
    if (!descriptor) throw new Error(`Property ${String(prop)} not found on target.`);
    const getter = (_descriptor_get = descriptor.get) === null || _descriptor_get === void 0 ? void 0 : _descriptor_get.bind(target);
    const setter = (_descriptor_set = descriptor.set) === null || _descriptor_set === void 0 ? void 0 : _descriptor_set.bind(target);
    Object.defineProperty(target, prop, {
        configurable: true,
        enumerable: descriptor.enumerable,
        get () {
            return options.get ? options.get(()=>getter === null || getter === void 0 ? void 0 : getter()) : getter === null || getter === void 0 ? void 0 : getter();
        },
        set (v) {
            if (options.set) options.set(v, (val)=>setter === null || setter === void 0 ? void 0 : setter(val));
            else setter === null || setter === void 0 ? void 0 : setter(v);
        }
    });
    return ()=>Object.defineProperty(target, prop, descriptor);
}
/**
 * Determines whether reduced motion is preferred.
 * @returns {boolean} Whether reduced motion is preferred.
 */ function $2795e4e0258f7c7d$export$ff7706047246b98b() {
    return (0, $c7d93c12585fc7f5$export$6acf61af03e62db) || matchMedia("(prefers-reduced-motion)").matches;
}
/**
 * Registers a constructable stylesheet in the document's `adoptedStyleSheets`.
 * @param css - A `CSSResult` (e.g., from `css```) whose text will be injected into a constructable stylesheet.
 */ function $2795e4e0258f7c7d$export$bbc01d91837a4fd(css) {
    if (typeof window === "undefined") return;
    const sheet = new CSSStyleSheet();
    sheet.replaceSync(css.toString());
    document.adoptedStyleSheets = [
        ...document.adoptedStyleSheets,
        sheet
    ];
}
/**
 * Resolves an element by ID, waiting for document readiness if needed.
 * @param {string} id - The element ID to resolve.
 * @param {ParentNode} root - Optional root node to query from (defaults to document).
 * @returns {Promise<T | null>} A promise that resolves with the element or `null` if not found.
 */ function $2795e4e0258f7c7d$export$eaf3894a2d38d832(id, root = document) {
    return new Promise((resolve)=>{
        const element = root.querySelector(`#${id}`);
        if (element) {
            resolve(element);
            return;
        }
        if (document.readyState === "complete" || document.readyState === "interactive") {
            resolve(root.querySelector(`#${id}`));
            return;
        }
        document.addEventListener("DOMContentLoaded", ()=>resolve(root.querySelector(`#${id}`)), {
            once: true
        });
    });
}
/**
 * Resolves a URL fragment reference (`url(path#id)`) based on the current document location.
 *
 * This helper is typically used when constructing fragment-based URLs for SVG
 * references (e.g., masks, clipPaths, filters) where the browser requires a fully
 * qualified `url(...)` value that includes the current path.
 *
 * How it works:
 * - Safely reads `document.location` (guarded for SSR environments).
 * - Extracts the current page's path + query string.
 * - Removes any existing hash fragment from the URL.
 * - Appends `#${id}` to produce a stable fragment reference.
 *
 * Example:
 *   // If the current page is /viewer/page?mode=edit#section2
 *   resolveFragmentUrl("clip") → "url(/viewer/page?mode=edit#clip)"
 *
 * @param id - The fragment identifier to append (e.g., an SVG element's ID).
 * @returns A `url(...)` string pointing to the fragment within the current document.
 */ function $2795e4e0258f7c7d$export$fdcd38275e41d289(id) {
    var _document;
    var _document_location;
    const location = (_document_location = (_document = document) === null || _document === void 0 ? void 0 : _document.location) !== null && _document_location !== void 0 ? _document_location : null;
    const path = location ? (location.pathname + location.search).split("#")[0] : "";
    return `url(${path}#${id})`;
}
/**
 * If needed, scrolls an element into view within a given scroll container.
 * @param {HTMLElement} element The element to scroll into view.
 * @param {HTMLElement} scrollContainer The scrollable container.
 * @param {ScrollIntoViewOptions} [options=undefined] Options used to scroll into view.
 */ function $2795e4e0258f7c7d$export$9657601bf1e130ee(element, scrollContainer, options) {
    const containerBounds = scrollContainer.getBoundingClientRect();
    const elementBounds = element.getBoundingClientRect();
    if (elementBounds.top < containerBounds.top || elementBounds.bottom > containerBounds.bottom) element.scrollIntoView(options);
}
var $2795e4e0258f7c7d$var$_VelocityTracker_samples, $2795e4e0258f7c7d$var$_VelocityTracker_windowMs;
/** Utility for computing gesture velocity over a rolling time window. */ class $2795e4e0258f7c7d$export$a81cb2a8dbea27f5 {
    /**
   * Adds a new sample to the tracker.
   * @param {number} value The value in pixels.
   * @param {number} [timestamp=performance.now()] The timestamp when `value` changed.
   */ add(value, timestamp = performance.now()) {
        (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_VelocityTracker_samples, "f").push({
            y: value,
            t: timestamp
        });
        const cutoff = timestamp - (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_VelocityTracker_windowMs, "f");
        while((0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_VelocityTracker_samples, "f").length > 1 && (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_VelocityTracker_samples, "f")[0].t < cutoff)(0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_VelocityTracker_samples, "f").shift();
    }
    /**
   * Computes the current velocity in px/s.
   * @returns The vertical velocity in pixels per second.
   */ getVelocity() {
        if ((0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_VelocityTracker_samples, "f").length < 2) return 0;
        const first = (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_VelocityTracker_samples, "f")[0];
        const last = (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_VelocityTracker_samples, "f")[(0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_VelocityTracker_samples, "f").length - 1];
        const dy = last.y - first.y;
        const dt = (last.t - first.t) / 1000;
        return dt > 0 ? dy / dt : 0;
    }
    /** Clears all stored samples. */ reset() {
        (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_VelocityTracker_samples, "f").length = 0;
    }
    /**
   * @param {number} [windowMs = 100] The size of the rolling sampling window in milliseconds.
   */ constructor(windowMs = 100){
        /** @private */ $2795e4e0258f7c7d$var$_VelocityTracker_samples.set(this, []);
        /** @private */ $2795e4e0258f7c7d$var$_VelocityTracker_windowMs.set(this, void 0);
        (0, $ee430606400354b3$export$d40a35129aaff81f)(this, $2795e4e0258f7c7d$var$_VelocityTracker_windowMs, windowMs, "f");
    }
}
$2795e4e0258f7c7d$var$_VelocityTracker_samples = new WeakMap(), $2795e4e0258f7c7d$var$_VelocityTracker_windowMs = new WeakMap();
/**
 * Determines whether an update is pending for an element and waits for it to complete.
 * @param {LitElement} el The element for which to wait for update.
 */ async function $2795e4e0258f7c7d$export$cb0ee25752f495a9(el) {
    if (el.isUpdatePending) await el.updateComplete;
}
/**
 * Determines whether an element is a custom element and waits for it to be upgraded.
 * @param {Element} el The element for which to wait for upgrade.
 */ async function $2795e4e0258f7c7d$export$6796da3dcba2f2eb(el) {
    const tag = el.tagName.toLowerCase();
    if (!tag.includes("-")) return;
    if (!customElements.get(tag)) await customElements.whenDefined(tag);
    const ctor = customElements.get(tag);
    if (!ctor || el instanceof ctor) return;
    await Promise.resolve();
    if (el instanceof ctor) return;
    await Promise.resolve();
}
var $2795e4e0258f7c7d$var$_FocusController_instances, $2795e4e0258f7c7d$var$_a, $2795e4e0258f7c7d$var$_FocusController_touch, $2795e4e0258f7c7d$var$_FocusController_callback, $2795e4e0258f7c7d$var$_FocusController_filter, $2795e4e0258f7c7d$var$_FocusController_keyDownHandler, $2795e4e0258f7c7d$var$_FocusController_focusInHandler, $2795e4e0258f7c7d$var$_FocusController_focusOutHandler, $2795e4e0258f7c7d$var$_FocusController_touchStartHandler, $2795e4e0258f7c7d$var$_FocusController_touchEndHandler, $2795e4e0258f7c7d$var$_FocusController_hadKeydown, $2795e4e0258f7c7d$var$_FocusController_handleKeyDown, $2795e4e0258f7c7d$var$_FocusController_handleFocusIn, $2795e4e0258f7c7d$var$_FocusController_handleFocusOut;
/** A `ReactiveController` used to monitor the focused state of one or more elements. */ class $2795e4e0258f7c7d$export$766c876d58dec02e extends $2795e4e0258f7c7d$var$MonitorControllerBase {
    /** @inheritdoc */ _observe(target) {
        target.addEventListener("keydown", (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_FocusController_keyDownHandler, "f"));
        target.addEventListener("focusin", (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_FocusController_focusInHandler, "f"));
        target.addEventListener("focusout", (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_FocusController_focusOutHandler, "f"));
        target.addEventListener("touchstart", (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_FocusController_touchStartHandler, "f"), {
            passive: true
        });
        target.addEventListener("touchend", (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_FocusController_touchEndHandler, "f"));
        target.addEventListener("touchcancel", (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_FocusController_touchEndHandler, "f"));
    }
    /** @inheritdoc */ _unobserve(target) {
        target.removeEventListener("keydown", (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_FocusController_keyDownHandler, "f"));
        target.removeEventListener("focusin", (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_FocusController_focusInHandler, "f"));
        target.removeEventListener("focusout", (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_FocusController_focusOutHandler, "f"));
        target.removeEventListener("touchstart", (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_FocusController_touchStartHandler, "f"));
        target.removeEventListener("touchend", (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_FocusController_touchEndHandler, "f"));
        target.removeEventListener("touchcancel", (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_FocusController_touchEndHandler, "f"));
    }
    /**
   * Initializes a new instance of this class.
   * @param {ReactiveControllerHost & HTMLElement} host The host element to which this controller will be added.
   * @param {FocusControllerOptions} options Options used to configure this controller.
   */ constructor(host, options){
        super(host, options);
        $2795e4e0258f7c7d$var$_FocusController_instances.add(this);
        /** @private */ $2795e4e0258f7c7d$var$_FocusController_touch.set(this, false);
        /** @private */ $2795e4e0258f7c7d$var$_FocusController_callback.set(this, void 0);
        /** @private */ $2795e4e0258f7c7d$var$_FocusController_filter.set(this, void 0);
        /** @private */ $2795e4e0258f7c7d$var$_FocusController_keyDownHandler.set(this, (e)=>(0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_FocusController_instances, "m", $2795e4e0258f7c7d$var$_FocusController_handleKeyDown).call(this, e));
        /** @private */ $2795e4e0258f7c7d$var$_FocusController_focusInHandler.set(this, (e)=>(0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_FocusController_instances, "m", $2795e4e0258f7c7d$var$_FocusController_handleFocusIn).call(this, e));
        /** @private */ $2795e4e0258f7c7d$var$_FocusController_focusOutHandler.set(this, (e)=>(0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_FocusController_instances, "m", $2795e4e0258f7c7d$var$_FocusController_handleFocusOut).call(this, e));
        /** @private */ $2795e4e0258f7c7d$var$_FocusController_touchStartHandler.set(this, ()=>(0, $ee430606400354b3$export$d40a35129aaff81f)(this, $2795e4e0258f7c7d$var$_FocusController_touch, true, "f"));
        /** @private */ $2795e4e0258f7c7d$var$_FocusController_touchEndHandler.set(this, ()=>(0, $ee430606400354b3$export$d40a35129aaff81f)(this, $2795e4e0258f7c7d$var$_FocusController_touch, false, "f"));
        (0, $ee430606400354b3$export$d40a35129aaff81f)(this, $2795e4e0258f7c7d$var$_FocusController_callback, options.callback, "f");
        (0, $ee430606400354b3$export$d40a35129aaff81f)(this, $2795e4e0258f7c7d$var$_FocusController_filter, options.filter, "f");
    }
}
$2795e4e0258f7c7d$var$_a = $2795e4e0258f7c7d$export$766c876d58dec02e, $2795e4e0258f7c7d$var$_FocusController_touch = new WeakMap(), $2795e4e0258f7c7d$var$_FocusController_callback = new WeakMap(), $2795e4e0258f7c7d$var$_FocusController_filter = new WeakMap(), $2795e4e0258f7c7d$var$_FocusController_keyDownHandler = new WeakMap(), $2795e4e0258f7c7d$var$_FocusController_focusInHandler = new WeakMap(), $2795e4e0258f7c7d$var$_FocusController_focusOutHandler = new WeakMap(), $2795e4e0258f7c7d$var$_FocusController_touchStartHandler = new WeakMap(), $2795e4e0258f7c7d$var$_FocusController_touchEndHandler = new WeakMap(), $2795e4e0258f7c7d$var$_FocusController_instances = new WeakSet(), $2795e4e0258f7c7d$var$_FocusController_handleKeyDown = function _FocusController_handleKeyDown(e) {
    var __classPrivateFieldGet1;
    if ((__classPrivateFieldGet1 = (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_FocusController_filter, "f")) === null || __classPrivateFieldGet1 === void 0 ? void 0 : __classPrivateFieldGet1.call(this, e)) return;
    const target = e.currentTarget;
    if (target.matches(":focus-within")) (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_FocusController_instances, "m", $2795e4e0258f7c7d$var$_FocusController_handleFocusIn).call(this, e);
}, $2795e4e0258f7c7d$var$_FocusController_handleFocusIn = function _FocusController_handleFocusIn(e) {
    var __classPrivateFieldGet1;
    if ((__classPrivateFieldGet1 = (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_FocusController_filter, "f")) === null || __classPrivateFieldGet1 === void 0 ? void 0 : __classPrivateFieldGet1.call(this, e)) return;
    if ((0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_FocusController_touch, "f")) return;
    const target = e.currentTarget;
    (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_FocusController_callback, "f").call(this, true, target.matches(":focus-visible") || (0, $ee430606400354b3$export$d5dcaf168c640c35)($2795e4e0258f7c7d$var$_a, $2795e4e0258f7c7d$var$_a, "f", $2795e4e0258f7c7d$var$_FocusController_hadKeydown) || $2795e4e0258f7c7d$export$23294f3699b537b1(), target);
}, $2795e4e0258f7c7d$var$_FocusController_handleFocusOut = function _FocusController_handleFocusOut(e) {
    var __classPrivateFieldGet1;
    if ((__classPrivateFieldGet1 = (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_FocusController_filter, "f")) === null || __classPrivateFieldGet1 === void 0 ? void 0 : __classPrivateFieldGet1.call(this, e)) return;
    if ((0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_FocusController_touch, "f")) return;
    (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_FocusController_callback, "f").call(this, false, false, e.currentTarget);
};
(()=>{
    if (typeof window !== "undefined") {
        window.addEventListener("keydown", ()=>(0, $ee430606400354b3$export$d40a35129aaff81f)($2795e4e0258f7c7d$var$_a, $2795e4e0258f7c7d$var$_a, true, "f", $2795e4e0258f7c7d$var$_FocusController_hadKeydown), {
            capture: true,
            passive: true
        });
        window.addEventListener("pointerdown", ()=>(0, $ee430606400354b3$export$d40a35129aaff81f)($2795e4e0258f7c7d$var$_a, $2795e4e0258f7c7d$var$_a, false, "f", $2795e4e0258f7c7d$var$_FocusController_hadKeydown), {
            capture: true
        });
    }
})();
/** @private */ $2795e4e0258f7c7d$var$_FocusController_hadKeydown = {
    value: false
};
var $2795e4e0258f7c7d$var$_HoverController_instances, $2795e4e0258f7c7d$var$_HoverController_callback, $2795e4e0258f7c7d$var$_HoverController_startDelays, $2795e4e0258f7c7d$var$_HoverController_endDelays, $2795e4e0258f7c7d$var$_HoverController_pointerInHandler, $2795e4e0258f7c7d$var$_HoverController_pointerLeaveHandler, $2795e4e0258f7c7d$var$_HoverController_clearDelays, $2795e4e0258f7c7d$var$_HoverController_clearStartDelay, $2795e4e0258f7c7d$var$_HoverController_clearEndDelay, $2795e4e0258f7c7d$var$_HoverController_handlePointerEnter, $2795e4e0258f7c7d$var$_HoverController_handlePointerLeave;
/** A `ReactiveController` used to monitor the hover state of one or more elements. */ class $2795e4e0258f7c7d$export$e97521e950437f92 extends $2795e4e0258f7c7d$var$MonitorControllerBase {
    /** Clears any hover delays for all targets. */ clearDelays() {
        for (const target of this.targets)(0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_HoverController_instances, "m", $2795e4e0258f7c7d$var$_HoverController_clearDelays).call(this, target);
    }
    /** @inheritdoc */ _observe(target) {
        target.addEventListener("pointerenter", (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_HoverController_pointerInHandler, "f"));
        target.addEventListener("pointerleave", (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_HoverController_pointerLeaveHandler, "f"));
        target.addEventListener("touchend", (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_HoverController_pointerLeaveHandler, "f"));
    }
    /** @inheritdoc */ _unobserve(target) {
        target.removeEventListener("pointerenter", (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_HoverController_pointerInHandler, "f"));
        target.removeEventListener("pointerleave", (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_HoverController_pointerLeaveHandler, "f"));
        target.removeEventListener("touchend", (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_HoverController_pointerLeaveHandler, "f"));
        (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_HoverController_instances, "m", $2795e4e0258f7c7d$var$_HoverController_clearDelays).call(this, target);
    }
    /**
   * Initializes a new instance of this class.
   * @param {ReactiveControllerHost & HTMLElement} host The host element to which this controller will be added.
   * @param {HoverControllerOptions} options Options used to configure this controller.
   */ constructor(host, options){
        super(host, options);
        $2795e4e0258f7c7d$var$_HoverController_instances.add(this);
        /** @private */ $2795e4e0258f7c7d$var$_HoverController_callback.set(this, void 0);
        /** @private */ $2795e4e0258f7c7d$var$_HoverController_startDelays.set(this, new Map());
        /** @private */ $2795e4e0258f7c7d$var$_HoverController_endDelays.set(this, new Map());
        /** @private */ $2795e4e0258f7c7d$var$_HoverController_pointerInHandler.set(this, (e)=>(0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_HoverController_instances, "m", $2795e4e0258f7c7d$var$_HoverController_handlePointerEnter).call(this, e));
        /** @private */ $2795e4e0258f7c7d$var$_HoverController_pointerLeaveHandler.set(this, (e)=>(0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_HoverController_instances, "m", $2795e4e0258f7c7d$var$_HoverController_handlePointerLeave).call(this, e));
        (0, $ee430606400354b3$export$d40a35129aaff81f)(this, $2795e4e0258f7c7d$var$_HoverController_callback, options.callback, "f");
        var _options_startDelay;
        this.startDelay = (_options_startDelay = options.startDelay) !== null && _options_startDelay !== void 0 ? _options_startDelay : 0;
        var _options_endDelay;
        this.endDelay = (_options_endDelay = options.endDelay) !== null && _options_endDelay !== void 0 ? _options_endDelay : 0;
    }
}
$2795e4e0258f7c7d$var$_HoverController_callback = new WeakMap(), $2795e4e0258f7c7d$var$_HoverController_startDelays = new WeakMap(), $2795e4e0258f7c7d$var$_HoverController_endDelays = new WeakMap(), $2795e4e0258f7c7d$var$_HoverController_pointerInHandler = new WeakMap(), $2795e4e0258f7c7d$var$_HoverController_pointerLeaveHandler = new WeakMap(), $2795e4e0258f7c7d$var$_HoverController_instances = new WeakSet(), $2795e4e0258f7c7d$var$_HoverController_clearDelays = function _HoverController_clearDelays(target) {
    (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_HoverController_instances, "m", $2795e4e0258f7c7d$var$_HoverController_clearStartDelay).call(this, target);
    (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_HoverController_instances, "m", $2795e4e0258f7c7d$var$_HoverController_clearEndDelay).call(this, target);
}, $2795e4e0258f7c7d$var$_HoverController_clearStartDelay = function _HoverController_clearStartDelay(target) {
    if ((0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_HoverController_startDelays, "f").has(target)) {
        clearTimeout((0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_HoverController_startDelays, "f").get(target));
        return (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_HoverController_startDelays, "f").delete(target);
    }
    return false;
}, $2795e4e0258f7c7d$var$_HoverController_clearEndDelay = function _HoverController_clearEndDelay(target) {
    if ((0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_HoverController_endDelays, "f").has(target)) {
        clearTimeout((0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_HoverController_endDelays, "f").get(target));
        return (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_HoverController_endDelays, "f").delete(target);
    }
    return false;
}, $2795e4e0258f7c7d$var$_HoverController_handlePointerEnter = function _HoverController_handlePointerEnter(e) {
    const target = e.target;
    // If there is a pending end delay, cancel it.
    (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_HoverController_instances, "m", $2795e4e0258f7c7d$var$_HoverController_clearEndDelay).call(this, target);
    // Otherwise, if there is a pending start delay, cancel it and start a new one.
    if (this.startDelay > 0) {
        (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_HoverController_instances, "m", $2795e4e0258f7c7d$var$_HoverController_clearStartDelay).call(this, target);
        (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_HoverController_startDelays, "f").set(target, setTimeout(()=>{
            (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_HoverController_startDelays, "f").delete(target);
            (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_HoverController_callback, "f").call(this, true, target);
        }, this.startDelay));
    } else // Otherwise, report the start.
    (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_HoverController_callback, "f").call(this, true, target);
}, $2795e4e0258f7c7d$var$_HoverController_handlePointerLeave = function _HoverController_handlePointerLeave(e) {
    const target = e.target;
    // If there is a pending start delay, cancel it and do not report the end.
    if ((0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_HoverController_instances, "m", $2795e4e0258f7c7d$var$_HoverController_clearStartDelay).call(this, target)) return;
    // Otherwise, if there is a pending end delay, cancel it and start a new one.
    if (this.endDelay > 0) {
        (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_HoverController_instances, "m", $2795e4e0258f7c7d$var$_HoverController_clearEndDelay).call(this, target);
        (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_HoverController_endDelays, "f").set(target, setTimeout(()=>{
            (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_HoverController_endDelays, "f").delete(target);
            (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_HoverController_callback, "f").call(this, false, target);
        }, this.endDelay));
    } else // Otherwise, report the end.
    (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_HoverController_callback, "f").call(this, false, target);
};
var $2795e4e0258f7c7d$var$_InertController_host, $2795e4e0258f7c7d$var$_InertController_inerts;
/**
 * A `ReactiveController` that provides safe, predictable inerting of background
 * content for modal UI surfaces (dialogs, date pickers, fullscreen search views).
 */ class $2795e4e0258f7c7d$export$155838d88759dd18 {
    /**
   * Locks background content by applying inertness to all non‑modal elements,
   * isolating the active surface from pointer and keyboard interaction.
   */ lock() {
        this.unlock();
        for(let current = (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_InertController_host, "f"); current.parentNode && current.parentNode !== document.documentElement; current = current.parentNode){
            for (const sibling of current.parentNode.children)if (sibling instanceof HTMLElement && sibling !== current && !sibling.inert) {
                sibling.inert = true;
                (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_InertController_inerts, "f").push(sibling);
            }
        }
    }
    /** Restores background interactivity by removing inertness previously applied during `lock()`. */ unlock() {
        (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_InertController_inerts, "f").forEach((x)=>x.inert = false);
        (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_InertController_inerts, "f").length = 0;
    }
    /** @inheritdoc */ hostDisconnected() {
        this.unlock();
    }
    constructor(host){
        /** @private */ $2795e4e0258f7c7d$var$_InertController_host.set(this, void 0);
        /** @private */ $2795e4e0258f7c7d$var$_InertController_inerts.set(this, new Array());
        (0, $ee430606400354b3$export$d40a35129aaff81f)(this, $2795e4e0258f7c7d$var$_InertController_host, host, "f");
        host.addController(this);
    }
}
$2795e4e0258f7c7d$var$_InertController_host = new WeakMap(), $2795e4e0258f7c7d$var$_InertController_inerts = new WeakMap();
var $2795e4e0258f7c7d$var$_IntersectionController_callback, $2795e4e0258f7c7d$var$_IntersectionController_skipInitial, $2795e4e0258f7c7d$var$_IntersectionController_observer, $2795e4e0258f7c7d$var$_IntersectionController_unobservedUpdate;
/** A `ReactiveController` used to monitor changes in the intersection of a target element with an ancestor element. */ class $2795e4e0258f7c7d$export$e9284c0dbc55b3ba extends $2795e4e0258f7c7d$var$MonitorControllerBase {
    /** @inheritdoc */ async hostUpdated() {
        if ((0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_IntersectionController_observer, "f") && !(0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_IntersectionController_skipInitial, "f") && (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_IntersectionController_unobservedUpdate, "f")) (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_IntersectionController_callback, "f").call(this, [], (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_IntersectionController_observer, "f"));
        (0, $ee430606400354b3$export$d40a35129aaff81f)(this, $2795e4e0258f7c7d$var$_IntersectionController_unobservedUpdate, false, "f");
    }
    /** @inheritdoc */ _observe(target) {
        var __classPrivateFieldGet1;
        (__classPrivateFieldGet1 = (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_IntersectionController_observer, "f")) === null || __classPrivateFieldGet1 === void 0 ? void 0 : __classPrivateFieldGet1.observe(target);
        (0, $ee430606400354b3$export$d40a35129aaff81f)(this, $2795e4e0258f7c7d$var$_IntersectionController_unobservedUpdate, true, "f");
    }
    /** @inheritdoc */ _unobserve(target) {
        var __classPrivateFieldGet1;
        (__classPrivateFieldGet1 = (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_IntersectionController_observer, "f")) === null || __classPrivateFieldGet1 === void 0 ? void 0 : __classPrivateFieldGet1.unobserve(target);
    }
    /**
   * Initializes a new instance of the `IntersectionController` class.
   * @param {ReactiveControllerHost & HTMLElement} host The host element to which this controller will be added.
   * @param {IntersectionControllerOptions} options Options used to configure this controller.
   */ constructor(host, options){
        super(host, options);
        /** @private */ $2795e4e0258f7c7d$var$_IntersectionController_callback.set(this, void 0);
        /** @private */ $2795e4e0258f7c7d$var$_IntersectionController_skipInitial.set(this, false);
        /** @private */ $2795e4e0258f7c7d$var$_IntersectionController_observer.set(this, void 0);
        /** @private */ $2795e4e0258f7c7d$var$_IntersectionController_unobservedUpdate.set(this, true);
        (0, $ee430606400354b3$export$d40a35129aaff81f)(this, $2795e4e0258f7c7d$var$_IntersectionController_callback, options.callback, "f");
        var _options_skipInitial;
        (0, $ee430606400354b3$export$d40a35129aaff81f)(this, $2795e4e0258f7c7d$var$_IntersectionController_skipInitial, (_options_skipInitial = options.skipInitial) !== null && _options_skipInitial !== void 0 ? _options_skipInitial : false, "f");
        if (0, $c7d93c12585fc7f5$export$6acf61af03e62db) return;
        if (!window.IntersectionObserver) {
            console.warn("IntersectionController error: the browser does not support IntersectionObserver.");
            return;
        }
        (0, $ee430606400354b3$export$d40a35129aaff81f)(this, $2795e4e0258f7c7d$var$_IntersectionController_observer, new IntersectionObserver((entries, observer)=>{
            (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_IntersectionController_callback, "f").call(this, entries, observer);
        }, options.init), "f");
    }
}
$2795e4e0258f7c7d$var$_IntersectionController_callback = new WeakMap(), $2795e4e0258f7c7d$var$_IntersectionController_skipInitial = new WeakMap(), $2795e4e0258f7c7d$var$_IntersectionController_observer = new WeakMap(), $2795e4e0258f7c7d$var$_IntersectionController_unobservedUpdate = new WeakMap();
var $2795e4e0258f7c7d$var$_LongPressController_instances, $2795e4e0258f7c7d$var$_LongPressController_callback, $2795e4e0258f7c7d$var$_LongPressController_threshold, $2795e4e0258f7c7d$var$_LongPressController_pressedTargets, $2795e4e0258f7c7d$var$_LongPressController_pressedTimeouts, $2795e4e0258f7c7d$var$_LongPressController_touchStartHandler, $2795e4e0258f7c7d$var$_LongPressController_touchEndOrCancelHandler, $2795e4e0258f7c7d$var$_LongPressController_handleTouchStart, $2795e4e0258f7c7d$var$_LongPressController_handleTouchEndOrCancel;
/** A `ReactiveController` used to detect a long press gesture. */ class $2795e4e0258f7c7d$export$e8716f94d74321da extends $2795e4e0258f7c7d$var$MonitorControllerBase {
    /** @inheritdoc */ _observe(target) {
        target.addEventListener("touchstart", (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_LongPressController_touchStartHandler, "f"), {
            passive: true
        });
        target.addEventListener("touchend", (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_LongPressController_touchEndOrCancelHandler, "f"));
        target.addEventListener("touchcancel", (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_LongPressController_touchEndOrCancelHandler, "f"));
    }
    /** @inheritdoc */ _unobserve(target) {
        target.removeEventListener("touchstart", (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_LongPressController_touchStartHandler, "f"));
        target.removeEventListener("touchend", (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_LongPressController_touchEndOrCancelHandler, "f"));
        target.removeEventListener("touchcancel", (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_LongPressController_touchEndOrCancelHandler, "f"));
    }
    /**
   * Initializes a new instance of this class.
   * @param {ReactiveControllerHost & HTMLElement} host The host element to which this controller will be added.
   * @param {LongPressControllerOptions} options Options used to configure this controller.
   */ constructor(host, options){
        super(host, options);
        $2795e4e0258f7c7d$var$_LongPressController_instances.add(this);
        /** @private */ $2795e4e0258f7c7d$var$_LongPressController_callback.set(this, void 0);
        /** @private */ $2795e4e0258f7c7d$var$_LongPressController_threshold.set(this, void 0);
        /** @private */ $2795e4e0258f7c7d$var$_LongPressController_pressedTargets.set(this, new Set());
        /** @private */ $2795e4e0258f7c7d$var$_LongPressController_pressedTimeouts.set(this, new Map());
        /** @private */ $2795e4e0258f7c7d$var$_LongPressController_touchStartHandler.set(this, (e)=>(0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_LongPressController_instances, "m", $2795e4e0258f7c7d$var$_LongPressController_handleTouchStart).call(this, e));
        /** @private */ $2795e4e0258f7c7d$var$_LongPressController_touchEndOrCancelHandler.set(this, (e)=>(0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_LongPressController_instances, "m", $2795e4e0258f7c7d$var$_LongPressController_handleTouchEndOrCancel).call(this, e));
        (0, $ee430606400354b3$export$d40a35129aaff81f)(this, $2795e4e0258f7c7d$var$_LongPressController_callback, options.callback, "f");
        var _options_threshold;
        (0, $ee430606400354b3$export$d40a35129aaff81f)(this, $2795e4e0258f7c7d$var$_LongPressController_threshold, (_options_threshold = options.threshold) !== null && _options_threshold !== void 0 ? _options_threshold : 500, "f");
    }
}
$2795e4e0258f7c7d$var$_LongPressController_callback = new WeakMap(), $2795e4e0258f7c7d$var$_LongPressController_threshold = new WeakMap(), $2795e4e0258f7c7d$var$_LongPressController_pressedTargets = new WeakMap(), $2795e4e0258f7c7d$var$_LongPressController_pressedTimeouts = new WeakMap(), $2795e4e0258f7c7d$var$_LongPressController_touchStartHandler = new WeakMap(), $2795e4e0258f7c7d$var$_LongPressController_touchEndOrCancelHandler = new WeakMap(), $2795e4e0258f7c7d$var$_LongPressController_instances = new WeakSet(), $2795e4e0258f7c7d$var$_LongPressController_handleTouchStart = function _LongPressController_handleTouchStart(e) {
    if (e.currentTarget instanceof HTMLElement && this.isObserving(e.currentTarget)) {
        const target = e.currentTarget;
        (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_LongPressController_pressedTimeouts, "f").set(target, setTimeout(()=>{
            (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_LongPressController_pressedTargets, "f").add(target);
            (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_LongPressController_pressedTimeouts, "f").delete(target);
            (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_LongPressController_callback, "f").call(this, true, target);
        }, (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_LongPressController_threshold, "f")));
    }
}, $2795e4e0258f7c7d$var$_LongPressController_handleTouchEndOrCancel = function _LongPressController_handleTouchEndOrCancel(e) {
    if (e.currentTarget instanceof HTMLElement && this.isObserving(e.currentTarget)) {
        const target = e.currentTarget;
        if ((0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_LongPressController_pressedTargets, "f").has(target)) {
            (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_LongPressController_callback, "f").call(this, false, target);
            (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_LongPressController_pressedTargets, "f").delete(target);
        }
        if ((0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_LongPressController_pressedTimeouts, "f").has(target)) {
            clearTimeout((0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_LongPressController_pressedTimeouts, "f").get(target));
            (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_LongPressController_pressedTimeouts, "f").delete(target);
        }
    }
};
var $2795e4e0258f7c7d$var$_MutationController_instances, $2795e4e0258f7c7d$var$_MutationController_callback, $2795e4e0258f7c7d$var$_MutationController_skipInitial, $2795e4e0258f7c7d$var$_MutationController_config, $2795e4e0258f7c7d$var$_MutationController_observer, $2795e4e0258f7c7d$var$_MutationController_unobservedUpdate, $2795e4e0258f7c7d$var$_MutationController_slotListeners, $2795e4e0258f7c7d$var$_MutationController_observedSlotted, $2795e4e0258f7c7d$var$_MutationController_disconnect, $2795e4e0258f7c7d$var$_MutationController_attachSlotListener, $2795e4e0258f7c7d$var$_MutationController_detachSlotListener, $2795e4e0258f7c7d$var$_MutationController_onSlotChange;
/**
 * A `ReactiveController` that integrates a `MutationObserver` with an element's reactive update lifecycle
 * to detect arbitrary changes to DOM, including nodes being added or removed and attributes changing.
 */ class $2795e4e0258f7c7d$export$745e8cbe4cbbf3f7 extends $2795e4e0258f7c7d$var$MonitorControllerBase {
    /** @inheritdoc */ async hostUpdated() {
        if ((0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_MutationController_observer, "f") && !(0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_MutationController_skipInitial, "f") && (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_MutationController_unobservedUpdate, "f")) {
            const records = (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_MutationController_observer, "f").takeRecords();
            if (records.length > 0) (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_MutationController_callback, "f").call(this, records, (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_MutationController_observer, "f"));
        }
        (0, $ee430606400354b3$export$d40a35129aaff81f)(this, $2795e4e0258f7c7d$var$_MutationController_unobservedUpdate, false, "f");
    }
    /** @inheritdoc */ hostDisconnected() {
        super.hostDisconnected();
        (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_MutationController_instances, "m", $2795e4e0258f7c7d$var$_MutationController_disconnect).call(this);
    }
    /** @inheritdoc */ _observe(target) {
        if (target instanceof HTMLSlotElement) (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_MutationController_instances, "m", $2795e4e0258f7c7d$var$_MutationController_attachSlotListener).call(this, target);
        else {
            var __classPrivateFieldGet1;
            (__classPrivateFieldGet1 = (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_MutationController_observer, "f")) === null || __classPrivateFieldGet1 === void 0 ? void 0 : __classPrivateFieldGet1.observe(target, (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_MutationController_config, "f"));
            (0, $ee430606400354b3$export$d40a35129aaff81f)(this, $2795e4e0258f7c7d$var$_MutationController_unobservedUpdate, true, "f");
        }
    }
    /** @inheritdoc */ _unobserve() {
        var __classPrivateFieldGet1;
        (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_MutationController_instances, "m", $2795e4e0258f7c7d$var$_MutationController_disconnect).call(this);
        for (const target of this.targets)if (target instanceof HTMLSlotElement) (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_MutationController_instances, "m", $2795e4e0258f7c7d$var$_MutationController_attachSlotListener).call(this, target);
        else (__classPrivateFieldGet1 = (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_MutationController_observer, "f")) === null || __classPrivateFieldGet1 === void 0 ? void 0 : __classPrivateFieldGet1.observe(target, (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_MutationController_config, "f"));
    }
    /**
   * Initializes a new instance of the `MutationController` class.
   * @param {ReactiveControllerHost & HTMLElement} host The host element to which this controller will be added.
   * @param {MutationControllerOptions} options Options used to configure this controller.
   */ constructor(host, options){
        super(host, options);
        $2795e4e0258f7c7d$var$_MutationController_instances.add(this);
        /** @private */ $2795e4e0258f7c7d$var$_MutationController_callback.set(this, void 0);
        /** @private */ $2795e4e0258f7c7d$var$_MutationController_skipInitial.set(this, false);
        /** @private */ $2795e4e0258f7c7d$var$_MutationController_config.set(this, void 0);
        /** @private */ $2795e4e0258f7c7d$var$_MutationController_observer.set(this, void 0);
        /** @private */ $2795e4e0258f7c7d$var$_MutationController_unobservedUpdate.set(this, true);
        /** @private */ $2795e4e0258f7c7d$var$_MutationController_slotListeners.set(this, new Map());
        /** @private */ $2795e4e0258f7c7d$var$_MutationController_observedSlotted.set(this, new Map());
        (0, $ee430606400354b3$export$d40a35129aaff81f)(this, $2795e4e0258f7c7d$var$_MutationController_callback, options.callback, "f");
        var _options_skipInitial;
        (0, $ee430606400354b3$export$d40a35129aaff81f)(this, $2795e4e0258f7c7d$var$_MutationController_skipInitial, (_options_skipInitial = options.skipInitial) !== null && _options_skipInitial !== void 0 ? _options_skipInitial : false, "f");
        (0, $ee430606400354b3$export$d40a35129aaff81f)(this, $2795e4e0258f7c7d$var$_MutationController_config, options.config, "f");
        if (0, $c7d93c12585fc7f5$export$6acf61af03e62db) return;
        if (!window.MutationObserver) {
            console.warn("MutationController error: the browser does not support MutationObserver.");
            return;
        }
        (0, $ee430606400354b3$export$d40a35129aaff81f)(this, $2795e4e0258f7c7d$var$_MutationController_observer, new MutationObserver((records, observer)=>(0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_MutationController_callback, "f").call(this, records, observer)), "f");
    }
}
$2795e4e0258f7c7d$var$_MutationController_callback = new WeakMap(), $2795e4e0258f7c7d$var$_MutationController_skipInitial = new WeakMap(), $2795e4e0258f7c7d$var$_MutationController_config = new WeakMap(), $2795e4e0258f7c7d$var$_MutationController_observer = new WeakMap(), $2795e4e0258f7c7d$var$_MutationController_unobservedUpdate = new WeakMap(), $2795e4e0258f7c7d$var$_MutationController_slotListeners = new WeakMap(), $2795e4e0258f7c7d$var$_MutationController_observedSlotted = new WeakMap(), $2795e4e0258f7c7d$var$_MutationController_instances = new WeakSet(), $2795e4e0258f7c7d$var$_MutationController_disconnect = function _MutationController_disconnect() {
    var __classPrivateFieldGet1;
    (__classPrivateFieldGet1 = (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_MutationController_observer, "f")) === null || __classPrivateFieldGet1 === void 0 ? void 0 : __classPrivateFieldGet1.disconnect();
    for (const [slot] of (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_MutationController_slotListeners, "f"))(0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_MutationController_instances, "m", $2795e4e0258f7c7d$var$_MutationController_detachSlotListener).call(this, slot);
    (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_MutationController_slotListeners, "f").clear();
    (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_MutationController_observedSlotted, "f").clear();
}, $2795e4e0258f7c7d$var$_MutationController_attachSlotListener = function _MutationController_attachSlotListener(slot) {
    if ((0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_MutationController_slotListeners, "f").has(slot)) return;
    const handler = ()=>(0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_MutationController_instances, "m", $2795e4e0258f7c7d$var$_MutationController_onSlotChange).call(this, slot);
    slot.addEventListener("slotchange", handler);
    (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_MutationController_slotListeners, "f").set(slot, ()=>slot.removeEventListener("slotchange", handler));
    (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_MutationController_instances, "m", $2795e4e0258f7c7d$var$_MutationController_onSlotChange).call(this, slot);
}, $2795e4e0258f7c7d$var$_MutationController_detachSlotListener = function _MutationController_detachSlotListener(slot) {
    const remover = (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_MutationController_slotListeners, "f").get(slot);
    if (remover) {
        remover();
        (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_MutationController_slotListeners, "f").delete(slot);
    }
    (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_MutationController_observedSlotted, "f").delete(slot);
}, $2795e4e0258f7c7d$var$_MutationController_onSlotChange = function _MutationController_onSlotChange(slot) {
    var __classPrivateFieldGet1, __classPrivateFieldGet2, __classPrivateFieldGet3;
    (__classPrivateFieldGet1 = (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_MutationController_observer, "f")) === null || __classPrivateFieldGet1 === void 0 ? void 0 : __classPrivateFieldGet1.disconnect();
    const slotted = slot.assignedElements({
        flatten: true
    });
    (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_MutationController_observedSlotted, "f").set(slot, slotted);
    for (const el of slotted)(__classPrivateFieldGet2 = (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_MutationController_observer, "f")) === null || __classPrivateFieldGet2 === void 0 ? void 0 : __classPrivateFieldGet2.observe(el, (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_MutationController_config, "f"));
    for (const target of this.targets)if (!(target instanceof HTMLSlotElement)) (__classPrivateFieldGet3 = (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_MutationController_observer, "f")) === null || __classPrivateFieldGet3 === void 0 ? void 0 : __classPrivateFieldGet3.observe(target, (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_MutationController_config, "f"));
    (0, $ee430606400354b3$export$d40a35129aaff81f)(this, $2795e4e0258f7c7d$var$_MutationController_unobservedUpdate, true, "f");
};
var $2795e4e0258f7c7d$var$_PressedController_instances, $2795e4e0258f7c7d$var$_PressedController_capture, $2795e4e0258f7c7d$var$_PressedController_callback, $2795e4e0258f7c7d$var$_PressedController_filter, $2795e4e0258f7c7d$var$_PressedController_isPressedKey, $2795e4e0258f7c7d$var$_PressedController_pressedTargets, $2795e4e0258f7c7d$var$_PressedController_releaseTimeouts, $2795e4e0258f7c7d$var$_PressedController_minPressedDuration, $2795e4e0258f7c7d$var$_PressedController_pointerDownHandler, $2795e4e0258f7c7d$var$_PressedController_pointerUpHandler, $2795e4e0258f7c7d$var$_PressedController_touchEndHandler, $2795e4e0258f7c7d$var$_PressedController_keyDownHandler, $2795e4e0258f7c7d$var$_PressedController_keyUpHandler, $2795e4e0258f7c7d$var$_PressedController_handlePointerDown, $2795e4e0258f7c7d$var$_PressedController_handlePointerUp, $2795e4e0258f7c7d$var$_PressedController_handleTouchEnd, $2795e4e0258f7c7d$var$_PressedController_handleKeyDown, $2795e4e0258f7c7d$var$_PressedController_handleKeyUp, $2795e4e0258f7c7d$var$_PressedController_clearPressedTargets, $2795e4e0258f7c7d$var$_PressedController_clearReleaseTimeout;
/** A `ReactiveController` used to monitor the pressed state of one or more elements. */ class $2795e4e0258f7c7d$export$1351ab2eef382c23 extends $2795e4e0258f7c7d$var$MonitorControllerBase {
    /** @inheritdoc */ hostConnected() {
        document.addEventListener("pointerup", (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_PressedController_pointerUpHandler, "f"), {
            capture: (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_PressedController_capture, "f")
        });
        document.addEventListener("touchend", (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_PressedController_touchEndHandler, "f"), {
            capture: (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_PressedController_capture, "f")
        });
        document.addEventListener("touchcancel", (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_PressedController_touchEndHandler, "f"), {
            capture: (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_PressedController_capture, "f")
        });
        super.hostConnected();
    }
    /** @inheritdoc */ hostDisconnected() {
        document.removeEventListener("pointerup", (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_PressedController_pointerUpHandler, "f"), {
            capture: (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_PressedController_capture, "f")
        });
        document.removeEventListener("touchend", (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_PressedController_touchEndHandler, "f"), {
            capture: (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_PressedController_capture, "f")
        });
        document.removeEventListener("touchcancel", (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_PressedController_touchEndHandler, "f"), {
            capture: (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_PressedController_capture, "f")
        });
        super.hostDisconnected();
        for (const id of (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_PressedController_releaseTimeouts, "f").values())clearTimeout(id);
        (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_PressedController_releaseTimeouts, "f").clear();
        (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_PressedController_pressedTargets, "f").clear();
    }
    /** @inheritdoc */ _observe(target) {
        target.addEventListener("pointerdown", (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_PressedController_pointerDownHandler, "f"), {
            capture: (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_PressedController_capture, "f")
        });
        if ((0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_PressedController_isPressedKey, "f")) {
            target.addEventListener("keydown", (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_PressedController_keyDownHandler, "f"), {
                capture: (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_PressedController_capture, "f")
            });
            target.addEventListener("keyup", (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_PressedController_keyUpHandler, "f"), {
                capture: (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_PressedController_capture, "f")
            });
        }
    }
    /** @inheritdoc */ _unobserve(target) {
        target.removeEventListener("pointerdown", (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_PressedController_pointerDownHandler, "f"), {
            capture: (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_PressedController_capture, "f")
        });
        if ((0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_PressedController_isPressedKey, "f")) {
            target.removeEventListener("keydown", (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_PressedController_keyDownHandler, "f"), {
                capture: (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_PressedController_capture, "f")
            });
            target.removeEventListener("keyup", (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_PressedController_keyUpHandler, "f"), {
                capture: (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_PressedController_capture, "f")
            });
        }
        (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_PressedController_instances, "m", $2795e4e0258f7c7d$var$_PressedController_clearReleaseTimeout).call(this, target);
        (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_PressedController_pressedTargets, "f").delete(target);
    }
    /**
   * Initializes a new instance of this class.
   * @param {ReactiveControllerHost & HTMLElement} host The host element to which this controller will be added.
   * @param {PressedControllerOptions} options Options used to configure this controller.
   */ constructor(host, options){
        super(host, options);
        $2795e4e0258f7c7d$var$_PressedController_instances.add(this);
        /** @private */ $2795e4e0258f7c7d$var$_PressedController_capture.set(this, void 0);
        /** @private */ $2795e4e0258f7c7d$var$_PressedController_callback.set(this, void 0);
        /** @private */ $2795e4e0258f7c7d$var$_PressedController_filter.set(this, void 0);
        /** @private */ $2795e4e0258f7c7d$var$_PressedController_isPressedKey.set(this, void 0);
        /** @private */ $2795e4e0258f7c7d$var$_PressedController_pressedTargets.set(this, new Map());
        /** @private */ $2795e4e0258f7c7d$var$_PressedController_releaseTimeouts.set(this, new Map());
        /** @private */ $2795e4e0258f7c7d$var$_PressedController_minPressedDuration.set(this, void 0);
        /** @private */ $2795e4e0258f7c7d$var$_PressedController_pointerDownHandler.set(this, (e)=>(0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_PressedController_instances, "m", $2795e4e0258f7c7d$var$_PressedController_handlePointerDown).call(this, e));
        /** @private */ $2795e4e0258f7c7d$var$_PressedController_pointerUpHandler.set(this, (e)=>(0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_PressedController_instances, "m", $2795e4e0258f7c7d$var$_PressedController_handlePointerUp).call(this, e));
        /** @private */ $2795e4e0258f7c7d$var$_PressedController_touchEndHandler.set(this, (e)=>(0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_PressedController_instances, "m", $2795e4e0258f7c7d$var$_PressedController_handleTouchEnd).call(this, e));
        /** @private */ $2795e4e0258f7c7d$var$_PressedController_keyDownHandler.set(this, (e)=>(0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_PressedController_instances, "m", $2795e4e0258f7c7d$var$_PressedController_handleKeyDown).call(this, e));
        /** @private */ $2795e4e0258f7c7d$var$_PressedController_keyUpHandler.set(this, (e)=>(0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_PressedController_instances, "m", $2795e4e0258f7c7d$var$_PressedController_handleKeyUp).call(this, e));
        (0, $ee430606400354b3$export$d40a35129aaff81f)(this, $2795e4e0258f7c7d$var$_PressedController_capture, options.capture, "f");
        (0, $ee430606400354b3$export$d40a35129aaff81f)(this, $2795e4e0258f7c7d$var$_PressedController_callback, options.callback, "f");
        (0, $ee430606400354b3$export$d40a35129aaff81f)(this, $2795e4e0258f7c7d$var$_PressedController_filter, options.filter, "f");
        (0, $ee430606400354b3$export$d40a35129aaff81f)(this, $2795e4e0258f7c7d$var$_PressedController_isPressedKey, options.isPressedKey, "f");
        var _options_minPressedDuration;
        (0, $ee430606400354b3$export$d40a35129aaff81f)(this, $2795e4e0258f7c7d$var$_PressedController_minPressedDuration, (_options_minPressedDuration = options.minPressedDuration) !== null && _options_minPressedDuration !== void 0 ? _options_minPressedDuration : 0, "f");
    }
}
$2795e4e0258f7c7d$var$_PressedController_capture = new WeakMap(), $2795e4e0258f7c7d$var$_PressedController_callback = new WeakMap(), $2795e4e0258f7c7d$var$_PressedController_filter = new WeakMap(), $2795e4e0258f7c7d$var$_PressedController_isPressedKey = new WeakMap(), $2795e4e0258f7c7d$var$_PressedController_pressedTargets = new WeakMap(), $2795e4e0258f7c7d$var$_PressedController_releaseTimeouts = new WeakMap(), $2795e4e0258f7c7d$var$_PressedController_minPressedDuration = new WeakMap(), $2795e4e0258f7c7d$var$_PressedController_pointerDownHandler = new WeakMap(), $2795e4e0258f7c7d$var$_PressedController_pointerUpHandler = new WeakMap(), $2795e4e0258f7c7d$var$_PressedController_touchEndHandler = new WeakMap(), $2795e4e0258f7c7d$var$_PressedController_keyDownHandler = new WeakMap(), $2795e4e0258f7c7d$var$_PressedController_keyUpHandler = new WeakMap(), $2795e4e0258f7c7d$var$_PressedController_instances = new WeakSet(), $2795e4e0258f7c7d$var$_PressedController_handlePointerDown = function _PressedController_handlePointerDown(e) {
    var __classPrivateFieldGet1;
    if ((__classPrivateFieldGet1 = (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_PressedController_filter, "f")) === null || __classPrivateFieldGet1 === void 0 ? void 0 : __classPrivateFieldGet1.call(this, e)) return;
    if (e.pointerType === "mouse" && e.button > 1) return;
    for (const target of e.composedPath())if (target instanceof HTMLElement && this.isObserving(target)) {
        (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_PressedController_instances, "m", $2795e4e0258f7c7d$var$_PressedController_clearReleaseTimeout).call(this, target);
        (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_PressedController_pressedTargets, "f").set(target, performance.now());
        (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_PressedController_callback, "f").call(this, true, {
            x: e.x,
            y: e.y
        }, target);
        break;
    }
}, $2795e4e0258f7c7d$var$_PressedController_handlePointerUp = function _PressedController_handlePointerUp(e) {
    if (e.pointerType === "mouse" && e.button > 1) return;
    (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_PressedController_instances, "m", $2795e4e0258f7c7d$var$_PressedController_clearPressedTargets).call(this, e.x, e.y);
}, $2795e4e0258f7c7d$var$_PressedController_handleTouchEnd = function _PressedController_handleTouchEnd(e) {
    var _e_changedTouches_, _e_changedTouches_1;
    var _e_changedTouches__clientX, _e_changedTouches__clientY;
    (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_PressedController_instances, "m", $2795e4e0258f7c7d$var$_PressedController_clearPressedTargets).call(this, (_e_changedTouches__clientX = (_e_changedTouches_ = e.changedTouches[0]) === null || _e_changedTouches_ === void 0 ? void 0 : _e_changedTouches_.clientX) !== null && _e_changedTouches__clientX !== void 0 ? _e_changedTouches__clientX : 0, (_e_changedTouches__clientY = (_e_changedTouches_1 = e.changedTouches[0]) === null || _e_changedTouches_1 === void 0 ? void 0 : _e_changedTouches_1.clientY) !== null && _e_changedTouches__clientY !== void 0 ? _e_changedTouches__clientY : 0);
}, $2795e4e0258f7c7d$var$_PressedController_handleKeyDown = function _PressedController_handleKeyDown(e) {
    var __classPrivateFieldGet1, __classPrivateFieldGet2;
    if ((__classPrivateFieldGet1 = (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_PressedController_filter, "f")) === null || __classPrivateFieldGet1 === void 0 ? void 0 : __classPrivateFieldGet1.call(this, e)) return;
    if (e.target !== e.currentTarget) return;
    const target = e.currentTarget;
    if ((__classPrivateFieldGet2 = (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_PressedController_isPressedKey, "f")) === null || __classPrivateFieldGet2 === void 0 ? void 0 : __classPrivateFieldGet2.call(this, e.key)) {
        if (e.key === " ") e.preventDefault();
        if (!e.repeat) {
            (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_PressedController_instances, "m", $2795e4e0258f7c7d$var$_PressedController_clearReleaseTimeout).call(this, target);
            (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_PressedController_pressedTargets, "f").set(target, performance.now());
            const bounds = target.getBoundingClientRect();
            (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_PressedController_callback, "f").call(this, true, {
                x: bounds.x + bounds.width / 2,
                y: bounds.y + bounds.height / 2
            }, target);
        }
    }
}, $2795e4e0258f7c7d$var$_PressedController_handleKeyUp = function _PressedController_handleKeyUp(e) {
    var __classPrivateFieldGet1;
    if (e.target !== e.currentTarget) return;
    const target = e.currentTarget;
    if ((0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_PressedController_pressedTargets, "f").has(target) && ((__classPrivateFieldGet1 = (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_PressedController_isPressedKey, "f")) === null || __classPrivateFieldGet1 === void 0 ? void 0 : __classPrivateFieldGet1.call(this, e.key))) {
        (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_PressedController_instances, "m", $2795e4e0258f7c7d$var$_PressedController_clearReleaseTimeout).call(this, target);
        const remainingTime = (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_PressedController_minPressedDuration, "f") - (performance.now() - (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_PressedController_pressedTargets, "f").get(target));
        const bounds = target.getBoundingClientRect();
        if (remainingTime > 0) (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_PressedController_releaseTimeouts, "f").set(target, setTimeout(()=>{
            (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_PressedController_pressedTargets, "f").delete(target);
            (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_PressedController_releaseTimeouts, "f").delete(target);
            (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_PressedController_callback, "f").call(this, false, {
                x: bounds.x + bounds.width / 2,
                y: bounds.y + bounds.height / 2
            }, target);
        }, remainingTime));
        else {
            (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_PressedController_pressedTargets, "f").delete(target);
            (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_PressedController_callback, "f").call(this, false, {
                x: bounds.x + bounds.width / 2,
                y: bounds.y + bounds.height / 2
            }, target);
        }
    }
}, $2795e4e0258f7c7d$var$_PressedController_clearPressedTargets = function _PressedController_clearPressedTargets(x, y) {
    for (const target of (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_PressedController_pressedTargets, "f")){
        (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_PressedController_instances, "m", $2795e4e0258f7c7d$var$_PressedController_clearReleaseTimeout).call(this, target[0]);
        const remainingTime = (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_PressedController_minPressedDuration, "f") - (performance.now() - target[1]);
        if (remainingTime > 0) (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_PressedController_releaseTimeouts, "f").set(target[0], setTimeout(()=>{
            (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_PressedController_pressedTargets, "f").delete(target[0]);
            (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_PressedController_releaseTimeouts, "f").delete(target[0]);
            (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_PressedController_callback, "f").call(this, false, {
                x: x,
                y: y
            }, target[0]);
        }, remainingTime));
        else {
            (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_PressedController_pressedTargets, "f").delete(target[0]);
            (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_PressedController_callback, "f").call(this, false, {
                x: x,
                y: y
            }, target[0]);
        }
    }
}, $2795e4e0258f7c7d$var$_PressedController_clearReleaseTimeout = function _PressedController_clearReleaseTimeout(target) {
    const id = (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_PressedController_releaseTimeouts, "f").get(target);
    if (id !== undefined) {
        clearTimeout(id);
        (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_PressedController_releaseTimeouts, "f").delete(target);
    }
};
var $2795e4e0258f7c7d$var$_ResizeController_callback, $2795e4e0258f7c7d$var$_ResizeController_skipInitial, $2795e4e0258f7c7d$var$_ResizeController_config, $2795e4e0258f7c7d$var$_ResizeController_observer, $2795e4e0258f7c7d$var$_ResizeController_unobservedUpdate;
/** A `ReactiveController` used to monitor when an element is resized. */ class $2795e4e0258f7c7d$export$8ba29cfbcbd8efc8 extends $2795e4e0258f7c7d$var$MonitorControllerBase {
    /** @inheritdoc */ async hostUpdated() {
        if ((0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_ResizeController_observer, "f") && !(0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_ResizeController_skipInitial, "f") && (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_ResizeController_unobservedUpdate, "f")) (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_ResizeController_callback, "f").call(this, [], (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_ResizeController_observer, "f"));
        (0, $ee430606400354b3$export$d40a35129aaff81f)(this, $2795e4e0258f7c7d$var$_ResizeController_unobservedUpdate, false, "f");
    }
    /** @inheritdoc */ _observe(target) {
        var __classPrivateFieldGet1;
        (__classPrivateFieldGet1 = (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_ResizeController_observer, "f")) === null || __classPrivateFieldGet1 === void 0 ? void 0 : __classPrivateFieldGet1.observe(target, (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_ResizeController_config, "f"));
        (0, $ee430606400354b3$export$d40a35129aaff81f)(this, $2795e4e0258f7c7d$var$_ResizeController_unobservedUpdate, true, "f");
    }
    /** @inheritdoc */ _unobserve(target) {
        var __classPrivateFieldGet1;
        (__classPrivateFieldGet1 = (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_ResizeController_observer, "f")) === null || __classPrivateFieldGet1 === void 0 ? void 0 : __classPrivateFieldGet1.unobserve(target);
    }
    /**
   * Initializes a new instance of the `ResizeController` class.
   * @param {ReactiveControllerHost & HTMLElement} host The host element to which this controller will be added.
   * @param {ResizeControllerOptions} options Options used to configure this controller.
   */ constructor(host, options){
        super(host, options);
        /** @private */ $2795e4e0258f7c7d$var$_ResizeController_callback.set(this, void 0);
        /** @private */ $2795e4e0258f7c7d$var$_ResizeController_skipInitial.set(this, void 0);
        /** @private */ $2795e4e0258f7c7d$var$_ResizeController_config.set(this, void 0);
        /** @private */ $2795e4e0258f7c7d$var$_ResizeController_observer.set(this, void 0);
        /** @private */ $2795e4e0258f7c7d$var$_ResizeController_unobservedUpdate.set(this, true);
        (0, $ee430606400354b3$export$d40a35129aaff81f)(this, $2795e4e0258f7c7d$var$_ResizeController_callback, options.callback, "f");
        var _options_skipInitial;
        (0, $ee430606400354b3$export$d40a35129aaff81f)(this, $2795e4e0258f7c7d$var$_ResizeController_skipInitial, (_options_skipInitial = options.skipInitial) !== null && _options_skipInitial !== void 0 ? _options_skipInitial : false, "f");
        (0, $ee430606400354b3$export$d40a35129aaff81f)(this, $2795e4e0258f7c7d$var$_ResizeController_config, options.config, "f");
        if (0, $c7d93c12585fc7f5$export$6acf61af03e62db) return;
        if (!window.ResizeObserver) {
            console.warn("ResizeController error: the browser does not support ResizeObserver.");
            return;
        }
        (0, $ee430606400354b3$export$d40a35129aaff81f)(this, $2795e4e0258f7c7d$var$_ResizeController_observer, new ResizeObserver((entries, observer)=>(0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_ResizeController_callback, "f").call(this, entries, observer)), "f");
    }
}
$2795e4e0258f7c7d$var$_ResizeController_callback = new WeakMap(), $2795e4e0258f7c7d$var$_ResizeController_skipInitial = new WeakMap(), $2795e4e0258f7c7d$var$_ResizeController_config = new WeakMap(), $2795e4e0258f7c7d$var$_ResizeController_observer = new WeakMap(), $2795e4e0258f7c7d$var$_ResizeController_unobservedUpdate = new WeakMap();
/**
 * Class decorator factory that defines the decorated class as a custom element.
 *
 * ```js
 * @customElement('my-element')
 * class MyElement extends LitElement {
 *   render() {
 *     return html``;
 *   }
 * }
 * ```
 * @param {string} tagName The tag name of the custom element to define.
 */ const $2795e4e0258f7c7d$export$da64fc29f17f9d0e = (tagName)=>(classOrTarget, context)=>{
        const define = ()=>{
            if (typeof window !== "undefined" && !customElements.get(tagName)) customElements.define(tagName, classOrTarget);
        };
        if (context) context.addInitializer(define);
        else define();
    };
/* eslint-disable @typescript-eslint/no-explicit-any */ /**
 * A decorator that runs a function once after a given "cooldown" period.
 * @param {number} timeout The timeout, in milliseconds, after which the function is invoked.
 * @returns {MethodDecorator} The decorator that runs a function once after a given "cooldown" period.
 */ function $2795e4e0258f7c7d$export$61fc7d43ac8f84b0(timeout) {
    const _id = Symbol("_id");
    return (_, __, descriptor)=>{
        const orig = descriptor.value;
        descriptor.value = function(...args) {
            // eslint-disable-next-line @typescript-eslint/no-this-alias
            const self = this;
            clearTimeout(self[_id]);
            self[_id] = setTimeout(()=>orig.apply(this, args), timeout);
        };
        return descriptor;
    };
}
var $2795e4e0258f7c7d$var$_ScrollController_instances, $2795e4e0258f7c7d$var$_ScrollController_debounce, $2795e4e0258f7c7d$var$_ScrollController_callback, $2795e4e0258f7c7d$var$_ScrollController_scrollHandler, $2795e4e0258f7c7d$var$_ScrollController_scrollContainers, $2795e4e0258f7c7d$var$_ScrollController_getShadowScrollContainer, $2795e4e0258f7c7d$var$_ScrollController_isScrollable, $2795e4e0258f7c7d$var$_ScrollController_getScrollContainers, $2795e4e0258f7c7d$var$_ScrollController_handleScroll;
/** A `ReactiveController` used to monitor when a scroll event is emitted from a scrollable ancestor. */ class $2795e4e0258f7c7d$export$fe3286d8cd36b08 extends $2795e4e0258f7c7d$var$MonitorControllerBase {
    /**
   * Returns the scrollable ancestors for a target element currently being observed by this controller.
   * @param target The element whose scroll containers are currently being observed.
   * @returns {Element[] | undefined} The scrollable ancestors, or `undefined` if `target` is not being observed.
   */ getScrollContainers(target) {
        return (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_ScrollController_scrollContainers, "f").get(target);
    }
    /** @inheritdoc */ _observe(target) {
        const scrollableAncestors = (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_ScrollController_instances, "m", $2795e4e0258f7c7d$var$_ScrollController_getScrollContainers).call(this, target);
        if (scrollableAncestors.length > 0) {
            (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_ScrollController_scrollContainers, "f").set(target, scrollableAncestors);
            for (const ancestor of scrollableAncestors)(ancestor === document.documentElement ? document : ancestor).addEventListener("scroll", (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_ScrollController_scrollHandler, "f"), {
                passive: true
            });
        }
    }
    /** @inheritdoc */ _unobserve(target) {
        if ((0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_ScrollController_scrollContainers, "f").has(target)) {
            for (const ancestor of (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_ScrollController_scrollContainers, "f").get(target))(ancestor === document.documentElement ? document : ancestor).removeEventListener("scroll", (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_ScrollController_scrollHandler, "f"));
            (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_ScrollController_scrollContainers, "f").delete(target);
        }
    }
    /** @private */ _debounceCallback(target) {
        (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_ScrollController_callback, "f").call(this, target);
    }
    /**
   * Initializes a new instance of the `ScrollController` class.
   * @param {ReactiveControllerHost & HTMLElement} host The host element to which this controller will be added.
   * @param {ScrollControllerOptions} options Options used to configure this controller.
   */ constructor(host, options){
        super(host, options);
        $2795e4e0258f7c7d$var$_ScrollController_instances.add(this);
        /** @private */ $2795e4e0258f7c7d$var$_ScrollController_debounce.set(this, void 0);
        /** @private */ $2795e4e0258f7c7d$var$_ScrollController_callback.set(this, void 0);
        /** @private */ $2795e4e0258f7c7d$var$_ScrollController_scrollHandler.set(this, (e)=>(0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_ScrollController_instances, "m", $2795e4e0258f7c7d$var$_ScrollController_handleScroll).call(this, e));
        /** @private */ $2795e4e0258f7c7d$var$_ScrollController_scrollContainers.set(this, new Map());
        (0, $ee430606400354b3$export$d40a35129aaff81f)(this, $2795e4e0258f7c7d$var$_ScrollController_debounce, options.debounce === true, "f");
        (0, $ee430606400354b3$export$d40a35129aaff81f)(this, $2795e4e0258f7c7d$var$_ScrollController_callback, options.callback, "f");
    }
}
$2795e4e0258f7c7d$var$_ScrollController_debounce = new WeakMap(), $2795e4e0258f7c7d$var$_ScrollController_callback = new WeakMap(), $2795e4e0258f7c7d$var$_ScrollController_scrollHandler = new WeakMap(), $2795e4e0258f7c7d$var$_ScrollController_scrollContainers = new WeakMap(), $2795e4e0258f7c7d$var$_ScrollController_instances = new WeakSet(), $2795e4e0258f7c7d$var$_ScrollController_getShadowScrollContainer = function _ScrollController_getShadowScrollContainer(element) {
    const root = element.shadowRoot;
    if (!root) return null;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT);
    let node = walker.currentNode;
    while(node){
        if (node instanceof Element && (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_ScrollController_instances, "m", $2795e4e0258f7c7d$var$_ScrollController_isScrollable).call(this, node)) return node;
        node = walker.nextNode();
    }
    return null;
}, $2795e4e0258f7c7d$var$_ScrollController_isScrollable = function _ScrollController_isScrollable(element) {
    const style = getComputedStyle(element);
    return /(auto|scroll)/.test(style.overflow + style.overflowY + style.overflowX);
}, $2795e4e0258f7c7d$var$_ScrollController_getScrollContainers = function _ScrollController_getScrollContainers(element) {
    const ancestors = new Array();
    const shadowScrollContainer = (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_ScrollController_instances, "m", $2795e4e0258f7c7d$var$_ScrollController_getShadowScrollContainer).call(this, element);
    if (shadowScrollContainer) ancestors.push(shadowScrollContainer);
    let ancestor = element;
    while(ancestor){
        if ((0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_ScrollController_instances, "m", $2795e4e0258f7c7d$var$_ScrollController_isScrollable).call(this, ancestor)) ancestors.push(ancestor);
        ancestor = ancestor.parentElement;
    }
    return ancestors;
}, $2795e4e0258f7c7d$var$_ScrollController_handleScroll = function _ScrollController_handleScroll(e) {
    const target = e.target === document ? document.documentElement : e.target;
    if ((0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_ScrollController_debounce, "f")) this._debounceCallback(target);
    else (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_ScrollController_callback, "f").call(this, target);
};
(0, $ee430606400354b3$export$29e00dfd3077644b)([
    $2795e4e0258f7c7d$export$61fc7d43ac8f84b0(40)
], $2795e4e0258f7c7d$export$fe3286d8cd36b08.prototype, "_debounceCallback", null);
var $2795e4e0258f7c7d$var$_ScrollLockController_instances, $2795e4e0258f7c7d$var$_ScrollLockController_locked, $2795e4e0258f7c7d$var$_ScrollLockController_scrollTop, $2795e4e0258f7c7d$var$_ScrollLockController_scrollLeft, $2795e4e0258f7c7d$var$_ScrollLockController_previousOverflow, $2795e4e0258f7c7d$var$_ScrollLockController_previousScrollbarGutter, $2795e4e0258f7c7d$var$_ScrollLockController_isVerticallyScrollable;
/**
 * A `ReactiveController` that provides safe, predictable scroll locking for modal UI
 * surfaces (dialogs, bottom sheets, overlays).
 */ class $2795e4e0258f7c7d$export$a136769acdb0ad4e {
    /** Locks document scrolling only if scroll actually exists. */ lock() {
        if ((0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_ScrollLockController_locked, "f")) return;
        (0, $ee430606400354b3$export$d40a35129aaff81f)(this, $2795e4e0258f7c7d$var$_ScrollLockController_locked, true, "f");
        // Save scroll position
        (0, $ee430606400354b3$export$d40a35129aaff81f)(this, $2795e4e0258f7c7d$var$_ScrollLockController_scrollTop, window.scrollY, "f");
        (0, $ee430606400354b3$export$d40a35129aaff81f)(this, $2795e4e0258f7c7d$var$_ScrollLockController_scrollLeft, window.scrollX, "f");
        // Save existing inline styles
        (0, $ee430606400354b3$export$d40a35129aaff81f)(this, $2795e4e0258f7c7d$var$_ScrollLockController_previousOverflow, document.documentElement.style.overflow, "f");
        (0, $ee430606400354b3$export$d40a35129aaff81f)(this, $2795e4e0258f7c7d$var$_ScrollLockController_previousScrollbarGutter, document.documentElement.style.scrollbarGutter, "f");
        // Only apply gutter if vertical scroll exists
        if ((0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_ScrollLockController_instances, "m", $2795e4e0258f7c7d$var$_ScrollLockController_isVerticallyScrollable).call(this)) document.documentElement.style.scrollbarGutter = "stable";
        // Lock scroll
        document.documentElement.style.overflow = "hidden";
        // Freeze scroll position
        window.scrollTo((0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_ScrollLockController_scrollLeft, "f"), (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_ScrollLockController_scrollTop, "f"));
    }
    /** Unlocks document scrolling and restores the previous state. */ unlock() {
        if (!(0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_ScrollLockController_locked, "f")) return;
        (0, $ee430606400354b3$export$d40a35129aaff81f)(this, $2795e4e0258f7c7d$var$_ScrollLockController_locked, false, "f");
        // Restore previous inline styles
        document.documentElement.style.overflow = (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_ScrollLockController_previousOverflow, "f");
        document.documentElement.style.scrollbarGutter = (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_ScrollLockController_previousScrollbarGutter, "f");
        // Restore scroll position
        window.scrollTo((0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_ScrollLockController_scrollLeft, "f"), (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_ScrollLockController_scrollTop, "f"));
    }
    /** @inheritdoc */ hostDisconnected() {
        this.unlock();
    }
    constructor(host){
        $2795e4e0258f7c7d$var$_ScrollLockController_instances.add(this);
        /** @private */ $2795e4e0258f7c7d$var$_ScrollLockController_locked.set(this, false);
        /** @private */ $2795e4e0258f7c7d$var$_ScrollLockController_scrollTop.set(this, 0);
        /** @private */ $2795e4e0258f7c7d$var$_ScrollLockController_scrollLeft.set(this, 0);
        /** @private */ $2795e4e0258f7c7d$var$_ScrollLockController_previousOverflow.set(this, "");
        /** @private */ $2795e4e0258f7c7d$var$_ScrollLockController_previousScrollbarGutter.set(this, "");
        host.addController(this);
    }
}
$2795e4e0258f7c7d$var$_ScrollLockController_locked = new WeakMap(), $2795e4e0258f7c7d$var$_ScrollLockController_scrollTop = new WeakMap(), $2795e4e0258f7c7d$var$_ScrollLockController_scrollLeft = new WeakMap(), $2795e4e0258f7c7d$var$_ScrollLockController_previousOverflow = new WeakMap(), $2795e4e0258f7c7d$var$_ScrollLockController_previousScrollbarGutter = new WeakMap(), $2795e4e0258f7c7d$var$_ScrollLockController_instances = new WeakSet(), $2795e4e0258f7c7d$var$_ScrollLockController_isVerticallyScrollable = function _ScrollLockController_isVerticallyScrollable() {
    return document.documentElement.scrollHeight > document.documentElement.clientHeight;
};
/** Converts an ISO‑8601 date to and from a `Date` object. */ const $2795e4e0258f7c7d$export$a904344ff111c3cc = {
    fromAttribute (value) {
        if (!value) return null;
        // Matches all four formats:
        // yyyy-MM-dd
        // yyyy-MM-ddTHH:mm:ss
        // yyyy-MM-ddTHH:mm:ssZ
        // yyyy-MM-ddTHH:mm:ss±HH:mm
        const isoRegex = /^(\d{4})-(\d{2})-(\d{2})(?:T(\d{2}):(\d{2}):(\d{2})(?:\.(\d{3}))?)?(Z|[+-]\d{2}:\d{2})?$/;
        const m = value.match(isoRegex);
        if (!m) return null;
        const year = Number(m[1]);
        const month = Number(m[2]) - 1; // JS months are 0-based
        const day = Number(m[3]);
        const hasTime = m[4] !== undefined;
        const hours = hasTime ? Number(m[4]) : 0;
        const minutes = hasTime ? Number(m[5]) : 0;
        const seconds = hasTime ? Number(m[6]) : 0;
        const ms = hasTime && m[7] ? Number(m[7]) : 0;
        const tz = m[8];
        // CASE 1: yyyy-MM-dd → local date (no timezone math)
        if (!hasTime && !tz) return new Date(year, month, day);
        // CASE 2: yyyy-MM-ddTHH:mm:ss (no timezone) → local datetime
        if (hasTime && !tz) return new Date(year, month, day, hours, minutes, seconds, ms);
        // CASE 3: yyyy-MM-ddTHH:mm:ssZ → UTC
        if (tz === "Z") return new Date(Date.UTC(year, month, day, hours, minutes, seconds, ms));
        // CASE 4: yyyy-MM-ddTHH:mm:ss±HH:mm → offset
        if (tz && /^[+-]\d{2}:\d{2}$/.test(tz)) {
            const sign = tz.startsWith("-") ? -1 : 1;
            const [tzH, tzM] = tz.slice(1).split(":").map(Number);
            const offsetMinutes = sign * (tzH * 60 + tzM);
            // Convert offset datetime → UTC → local
            const utc = Date.UTC(year, month, day, hours, minutes, seconds, ms);
            return new Date(utc - offsetMinutes * 60000);
        }
        return null;
    },
    toAttribute (value) {
        var _value_toISOString;
        return (_value_toISOString = value === null || value === void 0 ? void 0 : value.toISOString()) !== null && _value_toISOString !== void 0 ? _value_toISOString : null;
    }
};
/** Converts a space-separated attribute in to an array of strings. */ const $2795e4e0258f7c7d$export$79e726fbede78644 = {
    fromAttribute (value) {
        if (!value) return [];
        return value.split(/\s+/).map((d)=>d.trim()).filter(Boolean);
    },
    toAttribute (value) {
        return value.join(" ");
    }
};
/** Converts a time string (24h "HH:mm" or "HH:mm:ss",
 *  or 12h "h:mm am/pm" or "h:mm:ss am/pm")
 *  to and from a { hour, minute, second } object.
 */ const $2795e4e0258f7c7d$export$2f6f7d7dbbe1f46f = {
    fromAttribute (value) {
        if (!value) return null;
        value = value.trim().toLowerCase();
        // 24‑hour: "HH:mm" or "HH:mm:ss"
        let m = /^([01]\d|2[0-3]):([0-5]\d)(?::([0-5]\d))?$/.exec(value);
        if (m) return {
            hour: Number(m[1]),
            minute: Number(m[2]),
            second: m[3] !== undefined ? Number(m[3]) : 0
        };
        // 12‑hour: "h:mm am/pm" or "h:mm:ss am/pm"
        m = /^(\d{1,2}):([0-5]\d)(?::([0-5]\d))?\s*(am|pm)$/.exec(value);
        if (m) {
            const h = Number(m[1]);
            const min = Number(m[2]);
            const sec = m[3] !== undefined ? Number(m[3]) : 0;
            const period = m[4];
            if (h < 1 || h > 12) return null;
            const base = h % 12; // 12 → 0
            const hour = period === "pm" ? base + 12 : base;
            return {
                hour: hour,
                minute: min,
                second: sec
            };
        }
        return null;
    },
    toAttribute (value) {
        if (!value) return null;
        const hh = String(value.hour).padStart(2, "0");
        const mm = String(value.minute).padStart(2, "0");
        var _value_second;
        const ss = String((_value_second = value.second) !== null && _value_second !== void 0 ? _value_second : 0).padStart(2, "0");
        return `${hh}:${mm}:${ss}`; // always serialize as 24‑hour with seconds
    }
};
const $2795e4e0258f7c7d$var$important = "important";
// The leading space is important
const $2795e4e0258f7c7d$var$importantFlag = " !" + $2795e4e0258f7c7d$var$important;
// How many characters to remove from a value, as a negative number
const $2795e4e0258f7c7d$var$flagTrim = 0 - $2795e4e0258f7c7d$var$importantFlag.length;
class $2795e4e0258f7c7d$var$SafeStyleMapDirective extends (0, $553f6b5191b9868b$export$befdefbdce210f91) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    render(_) {
        return 0, $5e4f263f2dad39fc$export$45b790e32b2810ee;
    }
    update(part, [styleInfo]) {
        const { style: style } = part.element;
        if (this._previousStyleProperties === undefined) this._previousStyleProperties = new Set(Object.keys(styleInfo));
        // Remove old properties that no longer exist in styleInfo
        for (const name of this._previousStyleProperties)// If the name isn't in styleInfo or it's null/undefined
        if (styleInfo[name] == null) {
            this._previousStyleProperties.delete(name);
            if (name.includes("-")) style.removeProperty(name);
            else // eslint-disable-next-line @typescript-eslint/no-explicit-any
            style[name] = null;
        }
        // Add or update properties
        for(const name in styleInfo){
            const value = styleInfo[name];
            if (value != null) {
                this._previousStyleProperties.add(name);
                const isImportant = typeof value === "string" && value.endsWith($2795e4e0258f7c7d$var$importantFlag);
                if (name.includes("-") || isImportant) style.setProperty(name, isImportant ? value.slice(0, $2795e4e0258f7c7d$var$flagTrim) : value, isImportant ? $2795e4e0258f7c7d$var$important : "");
                else // eslint-disable-next-line @typescript-eslint/no-explicit-any
                style[name] = value;
            }
        }
        return 0, $5e4f263f2dad39fc$export$9c068ae9cc5db4e8;
    }
    constructor(partInfo){
        var _partInfo_strings;
        super(partInfo);
        if (partInfo.type !== (0, $553f6b5191b9868b$export$9ba3b3f20a85bfa).ATTRIBUTE || partInfo.name !== "style" || ((_partInfo_strings = partInfo.strings) === null || _partInfo_strings === void 0 ? void 0 : _partInfo_strings.length) > 2) throw new Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.");
    }
}
/**
 * A directive that applies CSS properties to an element.
 *
 * `safeStyleMap` can only be used in the `style` attribute and must be the only
 * expression in the attribute. It takes the property names in the
 * {@link StyleInfo styleInfo} object and adds the properties to the inline
 * style of the element.
 *
 * Property names with dashes (`-`) are assumed to be valid CSS
 * property names and set on the element's style object using `setProperty()`.
 * Names without dashes are assumed to be camelCased JavaScript property names
 * and set on the element's style object using property assignment, allowing the
 * style object to translate JavaScript-style names to CSS property names.
 *
 * For example `safeStyleMap({backgroundColor: 'red', 'border-top': '5px', '--size':
 * '0'})` sets the `background-color`, `border-top` and `--size` properties.
 *
 * @param styleInfo
 * @see {@link https://lit.dev/docs/templates/directives/#stylemap styleMap code samples on Lit.dev}
 */ const $2795e4e0258f7c7d$export$1a8e83982275c05e = (0, $553f6b5191b9868b$export$99b43ad1ed32e735)($2795e4e0258f7c7d$var$SafeStyleMapDirective);
/**
 * Determines whether an object has keys for a given type.
 * @template T The type to test.
 * @param {unknown} value The value to test.
 * @param {...keys: Array<keyof T>} keys The keys of `T` to test.
 * @returns {boolean} Whether `value` has all `keys`.
 */ function $2795e4e0258f7c7d$export$b3cfaccc1b88e6cb(value, ...keys) {
    return typeof value === "object" && value !== null && keys.every((x)=>x in value);
}
/** A symbol through which to access the `ElementInternals` attached to an element. */ const $2795e4e0258f7c7d$export$e368aba7747330f2 = Symbol("internals");
/**
 * Determines whether a value is an `AttachInternalsMixin`.
 * @param {unknown} value The value to test.
 * @returns Whether `value` is an `AttachInternalsMixin`.
 */ function $2795e4e0258f7c7d$export$6a3f3fc42130ef44(value) {
    return $2795e4e0258f7c7d$export$b3cfaccc1b88e6cb(value, $2795e4e0258f7c7d$export$e368aba7747330f2);
}
const $2795e4e0258f7c7d$var$_internals = Symbol("_internals");
// Since flushing custom state doesn't flush in Safari (affecting all iOS browsers),
// a copy of custom state is retained locally so components can correctly read after write.
const $2795e4e0258f7c7d$var$_customState = Symbol("_customState");
/**
 * Mixin to augment an element with behavior that attaches to `ElementInternals`.
 * @template T The type of the base class.
 * @param {T} base The base class.
 * @param {boolean | undefined} formAssociated Whether the element is "Form Associated".
 * @returns {Constructor<AttachInternalsMixin> & T} A constructor that implements `AttachInternalsMixin`.
 */ function $2795e4e0258f7c7d$export$282c9fa792fbac93(base, formAssociated) {
    var _a;
    class _AttachInternals extends base {
        /** @internal */ get [(_a = $2795e4e0258f7c7d$var$_customState, $2795e4e0258f7c7d$export$e368aba7747330f2)]() {
            var _this__internals;
            return (_this__internals = this[$2795e4e0258f7c7d$var$_internals]) !== null && _this__internals !== void 0 ? _this__internals : this[$2795e4e0258f7c7d$var$_internals] = this.attachInternals();
        }
        constructor(){
            super(...arguments);
            // Since flushing custom state doesn't flush in Safari (affecting all iOS browsers),
            // a copy of custom state is retained locally so components can correctly read after write.
            /** @private */ this[_a] = new Set();
        }
    }
    /** @internal */ _AttachInternals.formAssociated = formAssociated;
    return _AttachInternals;
}
/**
 * Convenience function used to test whether an element has a given custom state.
 * @param {AttachInternalsMixin} element The element to test.
 * @param {string} state The custom state to test.
 * @returns {boolean} Whether `element` has `state`.
 */ function $2795e4e0258f7c7d$export$6bae5520ca265d22(element, state) {
    // Since flushing custom state doesn't flush in Safari (affecting all iOS browsers),
    // a copy of custom state is retained locally so components can correctly read after write.
    if ($2795e4e0258f7c7d$var$_customState in element) return element[$2795e4e0258f7c7d$var$_customState].has(state);
    // This should never get called due to needing a local copy of custom state
    // since reading after write to flush doesn't work in Safari (affecting all iOS browsers).
    return element[$2795e4e0258f7c7d$export$e368aba7747330f2].states.has(state);
}
/**
 * Convenience function used to add custom state to an element.
 * @param {AttachInternalsMixin} element The element to which to add custom state.
 * @param {string} state The custom state to add.
 */ function $2795e4e0258f7c7d$export$ddd0a0ac12dd84d8(element, state) {
    var _element_internals, _element_internals1;
    // Avoid style recalculation when element already has state.
    if ($2795e4e0258f7c7d$export$6bae5520ca265d22(element, state)) return;
    // Since flushing custom state doesn't flush in Safari (affecting all iOS browsers),
    // a copy of custom state is retained locally so components can correctly read after write.
    if ($2795e4e0258f7c7d$var$_customState in element) element[$2795e4e0258f7c7d$var$_customState].add(state);
    (_element_internals = element[$2795e4e0258f7c7d$export$e368aba7747330f2]) === null || _element_internals === void 0 ? void 0 : _element_internals.states.add(state);
    (_element_internals1 = element[$2795e4e0258f7c7d$export$e368aba7747330f2]) === null || _element_internals1 === void 0 ? void 0 : _element_internals1.states.has(state); // flush (even though this doesn't work in Safari)
}
/**
 * Convenience function used to delete custom state from an element.
 * @param {AttachInternalsMixin} element The element from which to delete custom state.
 * @param {string} state The custom state to delete.
 * @returns {boolean} Whether `state` was removed from `element`.
 */ function $2795e4e0258f7c7d$export$eda34dc61103d62e(element, state) {
    var _element_internals;
    // Since flushing custom state doesn't flush in Safari (affecting all iOS browsers),
    // a copy of custom state is retained locally so components can correctly read after write.
    if ($2795e4e0258f7c7d$var$_customState in element) element[$2795e4e0258f7c7d$var$_customState].delete(state);
    if ((_element_internals = element[$2795e4e0258f7c7d$export$e368aba7747330f2]) === null || _element_internals === void 0 ? void 0 : _element_internals.states.delete(state)) {
        var _element_internals1;
        (_element_internals1 = element[$2795e4e0258f7c7d$export$e368aba7747330f2]) === null || _element_internals1 === void 0 ? void 0 : _element_internals1.states.has(state); // flush (even though this doesn't work in Safari)
        return true;
    }
    return false;
}
/**
 * Convenience function used to add or delete custom state for an element.
 * @param {AttachInternalsMixin} element The element for which to add or delete custom state.
 * @param {string} state The custom state to add or delete.
 * @param {boolean} value Whether to add or delete `state` from `element`.
 */ function $2795e4e0258f7c7d$export$a6b7fbc1acf03e5b(element, state, value) {
    if (value) $2795e4e0258f7c7d$export$ddd0a0ac12dd84d8(element, state);
    else $2795e4e0258f7c7d$export$eda34dc61103d62e(element, state);
}
/**
 * Convenience function used to add custom state for an element based on an enumerated value.
 *
 * For each value in `values`, a custom state named `--${value}` is updated.
 * The state matching `value` is added; all others are removed.
 *
 * @template T extends string
 * @param {AttachInternalsMixin} element The element for which to set custom state.
 * @param {T} value The current value of the enumeration.
 * @param {readonly T[]} values The possible values of the enumeration.
 */ function $2795e4e0258f7c7d$export$14685f959036e909(element, value, ...values) {
    values.forEach((x)=>$2795e4e0258f7c7d$export$a6b7fbc1acf03e5b(element, `--${x}`, x === value));
}
/**
 * Determines whether a value is a `CheckedMixin`.
 * @param {unknown} value The value to test.
 * @returns Whether `value` is a `CheckedMixin`.
 */ function $2795e4e0258f7c7d$export$be0c43499cc6393e(value) {
    return $2795e4e0258f7c7d$export$b3cfaccc1b88e6cb(value, "checked");
}
/**
 * Mixin to augment an element with behavior that supports a checked state.
 * @template T The type of the base class.
 * @param {T} base The base class.
 * @returns {Constructor<CheckedMixin> & T} A constructor that implements `CheckedMixin`.
 */ function $2795e4e0258f7c7d$export$8c8ee9238b7b0c2a(base) {
    class _CheckedMixin extends base {
        /** @inheritdoc */ update(changedProperties) {
            super.update(changedProperties);
            if (changedProperties.has("checked")) {
                if (this.role === "button") {
                    this.ariaPressed = `${this.checked}`;
                    this.ariaChecked = null;
                } else if (this.role && this.role !== "none" && this.role !== "presentation") {
                    this.ariaChecked = `${this.checked}`;
                    this.ariaPressed = null;
                }
            }
        }
        constructor(){
            super(...arguments);
            /**
       * Whether the element is checked.
       * @default false
       */ this.checked = false;
        }
    }
    (0, $ee430606400354b3$export$29e00dfd3077644b)([
        (0, $e48c8bdf0d6f523c$export$d541bacb2bda4494)({
            type: Boolean,
            reflect: true
        })
    ], _CheckedMixin.prototype, "checked", void 0);
    return _CheckedMixin;
}
/**
 * Determines whether a value is a `CheckedIndeterminateMixin`.
 * @param {unknown} value The value to test.
 * @returns Whether `value` is a `CheckedIndeterminateMixin`.
 */ function $2795e4e0258f7c7d$export$f52b304a5bb4eafa(value) {
    return $2795e4e0258f7c7d$export$b3cfaccc1b88e6cb(value, "indeterminate") && $2795e4e0258f7c7d$export$be0c43499cc6393e(value);
}
/**
 * Mixin to augment an element with behavior that supports a mixed checked state.
 * @template T The type of the base class.
 * @param {T} base The base class.
 * @returns {Constructor<CheckedIndeterminateMixin> & T} A constructor that implements `CheckedIndeterminateMixin`.
 */ function $2795e4e0258f7c7d$export$13a11691eea54028(base) {
    class _CheckedIndeterminateMixin extends $2795e4e0258f7c7d$export$8c8ee9238b7b0c2a(base) {
        /** @inheritdoc */ update(changedProperties) {
            super.update(changedProperties);
            if (changedProperties.has("indeterminate") && this.role && this.role !== "none" && this.role !== "presentation") this.ariaChecked = !this.checked && this.indeterminate ? "mixed" : `${this.checked}`;
        }
        constructor(){
            super(...arguments);
            /**
       * Whether the element's checked state is indeterminate.
       * @default false
       */ this.indeterminate = false;
        }
    }
    (0, $ee430606400354b3$export$29e00dfd3077644b)([
        (0, $e48c8bdf0d6f523c$export$d541bacb2bda4494)({
            type: Boolean,
            reflect: true
        })
    ], _CheckedIndeterminateMixin.prototype, "indeterminate", void 0);
    return _CheckedIndeterminateMixin;
}
/**
 * Determines whether a value is a `SelectedMixin`.
 * @param {unknown} value The value to test.
 * @returns Whether `value` is a `SelectedMixin`.
 */ function $2795e4e0258f7c7d$export$d8fb0462b931b26b(value) {
    return $2795e4e0258f7c7d$export$b3cfaccc1b88e6cb(value, "selected");
}
/**
 * Mixin to augment an element with behavior that supports a selected state.
 * @template T The type of the base class.
 * @param {T} base The base class.
 * @returns {Constructor<SelectedMixin> & T} A constructor that implements `SelectedMixin`.
 */ function $2795e4e0258f7c7d$export$168cec28b141e51c(base) {
    class _SelectedMixin extends base {
        /** @inheritdoc */ update(changedProperties) {
            super.update(changedProperties);
            if (changedProperties.has("selected")) {
                if (this.role === "button") {
                    this.ariaPressed = `${this.selected}`;
                    this.ariaSelected = null;
                    this.ariaChecked = null;
                } else if (this.role === "radio") {
                    this.ariaChecked = `${this.selected}`;
                    this.ariaSelected = null;
                    this.ariaPressed = null;
                } else if (this.role && this.role !== "none" && this.role !== "presentation") {
                    this.ariaSelected = `${this.selected}`;
                    this.ariaPressed = null;
                    this.ariaChecked = null;
                }
            }
        }
        constructor(){
            super(...arguments);
            /**
       * Whether the element is selected.
       * @default false
       */ this.selected = false;
        }
    }
    (0, $ee430606400354b3$export$29e00dfd3077644b)([
        (0, $e48c8bdf0d6f523c$export$d541bacb2bda4494)({
            type: Boolean,
            reflect: true
        })
    ], _SelectedMixin.prototype, "selected", void 0);
    return _SelectedMixin;
}
/**
 * Determines whether a value is a `CheckedOrSelectedMixin`.
 * @param {unknown} value The value to test.
 * @returns Whether `value` is a `CheckedOrSelectedMixin`.
 */ function $2795e4e0258f7c7d$export$d33dd76c0e70dfe6(value) {
    return $2795e4e0258f7c7d$export$be0c43499cc6393e(value) || $2795e4e0258f7c7d$export$d8fb0462b931b26b(value);
}
/**
 * Determines whether the state of an element is checked or selected.
 * @param {CheckedOrSelectedMixin} element The element to test.
 * @return {boolean} Whether `element` is checked or selected.
 */ function $2795e4e0258f7c7d$export$eba8465f59663c68(element) {
    return $2795e4e0258f7c7d$export$be0c43499cc6393e(element) && element.checked || $2795e4e0258f7c7d$export$d8fb0462b931b26b(element) && element.selected;
}
/**
 * Sets the checked or selected state of an element.
 * @param {CheckedOrSelectedMixin} element The element for which to set the checked or selected state.
 * @param {boolean} checkedOrSelected The checked or selected state.
 */ function $2795e4e0258f7c7d$export$3f5b0d3ac94b21cf(element, checkedOrSelected) {
    if ($2795e4e0258f7c7d$export$be0c43499cc6393e(element)) element.checked = checkedOrSelected;
    else element.selected = checkedOrSelected;
}
/**
 * Determines whether a value is a `DirtyMixin`.
 * @param {unknown} value The value to test.
 * @returns Whether `value` is a `DirtyMixin`.
 */ function $2795e4e0258f7c7d$export$4aa7c2a4145afbb9(value) {
    return $2795e4e0258f7c7d$export$b3cfaccc1b88e6cb(value, "dirty", "pristine", "markAsDirty", "markAsPristine");
}
const $2795e4e0258f7c7d$var$_eventHandler$2 = Symbol("_eventHandler");
/**
 * Mixin to augment an element with functionality used to mark it as dirty.
 * @template T The type of the base class.
 * @param {T} base The base class.
 * @returns {Constructor<DirtyMixin> & T} A constructor that implements `DirtyMixin`.
 */ function $2795e4e0258f7c7d$export$904c9fbc057090b4(base) {
    var _a;
    class _Dirty extends base {
        /** Whether the user has modified the value of the element. */ get dirty() {
            return $2795e4e0258f7c7d$export$6bae5520ca265d22(this, "--dirty");
        }
        /** Whether the user has not modified the value of the element. */ get pristine() {
            return !this.dirty;
        }
        /** @inheritdoc */ connectedCallback() {
            this.markAsPristine();
            super.connectedCallback();
            this.addEventListener("change", this[$2795e4e0258f7c7d$var$_eventHandler$2]);
        }
        /** @inheritdoc */ disconnectedCallback() {
            super.disconnectedCallback();
            this.removeEventListener("change", this[$2795e4e0258f7c7d$var$_eventHandler$2]);
        }
        /** Marks the element as pristine. */ markAsPristine() {
            $2795e4e0258f7c7d$export$eda34dc61103d62e(this, "--dirty");
        }
        /** Marks the element as dirty. */ markAsDirty() {
            $2795e4e0258f7c7d$export$ddd0a0ac12dd84d8(this, "--dirty");
        }
        constructor(){
            super(...arguments);
            /** @private */ this[_a] = ()=>this.markAsDirty();
        }
    }
    _a = $2795e4e0258f7c7d$var$_eventHandler$2;
    return _Dirty;
}
/**
 * Determines whether a value is a `TouchedMixin`.
 * @param {unknown} value The value to test.
 * @returns Whether `value` is a `TouchedMixin`.
 */ function $2795e4e0258f7c7d$export$d3eb229ee36277a6(value) {
    return $2795e4e0258f7c7d$export$b3cfaccc1b88e6cb(value, "touched", "untouched", "markAsTouched", "markAsUntouched");
}
const $2795e4e0258f7c7d$var$_eventHandler$1 = Symbol("_eventHandler");
/**
 * Mixin to augment an element with functionality used to mark it as touched.
 * @template T The type of the base class.
 * @param {T} base The base class.
 * @returns {Constructor<TouchedMixin> & T} A constructor that implements `TouchedMixin`.
 */ function $2795e4e0258f7c7d$export$f5f83eb3ab54ce3(base) {
    var _a;
    class _Touched extends base {
        /** Whether the user has interacted when the element. */ get touched() {
            return $2795e4e0258f7c7d$export$6bae5520ca265d22(this, "--touched");
        }
        /** Whether the user has not interacted when the element. */ get untouched() {
            return !this.touched;
        }
        /** @inheritdoc */ connectedCallback() {
            this.markAsUntouched();
            super.connectedCallback();
            this.addEventListener("focusout", this[$2795e4e0258f7c7d$var$_eventHandler$1], {
                capture: true
            });
        }
        /** @inheritdoc */ disconnectedCallback() {
            super.disconnectedCallback();
            this.removeEventListener("focusout", this[$2795e4e0258f7c7d$var$_eventHandler$1], {
                capture: true
            });
        }
        /** Marks the element as touched. */ markAsTouched() {
            $2795e4e0258f7c7d$export$ddd0a0ac12dd84d8(this, "--touched");
        }
        /** Marks the element as untouched. */ markAsUntouched() {
            $2795e4e0258f7c7d$export$eda34dc61103d62e(this, "--touched");
        }
        constructor(){
            super(...arguments);
            /** @private */ this[_a] = ()=>this.markAsTouched();
        }
    }
    _a = $2795e4e0258f7c7d$var$_eventHandler$1;
    return _Touched;
}
/** Design tokens that control color. */ const $2795e4e0258f7c7d$var$ColorToken = {
    /** High-emphasis fills, texts, and icons against surface. */ primary: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-color-primary, #6750A4)"),
    /** Text and icons against primary. */ onPrimary: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-color-on-primary, #FFFFFF)"),
    /** Standout fill color against surface, for key components. */ primaryContainer: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-color-primary-container, #EADDFF)"),
    /** Text and icons against primary container. */ onPrimaryContainer: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-color-on-primary-container, #4F378B)"),
    /** High-emphasis fills, texts, and icons that maintain the same tone in light and dark themes. */ primaryFixed: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-color-primary-fixed, #EADDFF)"),
    /** High-emphasis fills, texts, and icons that maintain the same stronger tone in light and dark themes. */ primaryFixedDim: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-color-primary-fixed-dim, #D0BCFF)"),
    /** Text and icons against fixed primary. */ onPrimaryFixed: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-color-on-primary-fixed, #21005D)"),
    /** Lower-emphasis text and icons against fixed primary. */ onPrimaryFixedVariant: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-color-on-primary-fixed-variant, #4F378B)"),
    /** Less prominent fills, text, and icons against surface. */ secondary: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-color-secondary, #625B71)"),
    /** Text and icons against secondary. */ onSecondary: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-color-on-secondary, #FFFFFF)"),
    /** Less prominent fill color against surface, for recessive components. */ secondaryContainer: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-color-secondary-container, #E8DEF8)"),
    /** Text and icons against secondary container. */ onSecondaryContainer: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-color-on-secondary-container, #4A4458)"),
    /** Less prominent fills, texts, and icons that maintain the same tone in light and dark themes. */ secondaryFixed: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-color-secondary-fixed, #E8DEF8)"),
    /** Less prominent fills, texts, and icons that maintain the same stronger tone in light and dark themes. */ secondaryFixedDim: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-color-secondary-fixed-dim, #CCC2DC)"),
    /** Text and icons against fixed secondary. */ onSecondaryFixed: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-color-on-secondary-fixed, #1D192B)"),
    /** Lower-emphasis text and icons against fixed secondary. */ onSecondaryFixedVariant: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-color-on-secondary-fixed-variant, #4A4458)"),
    /** Complementary fills, text, and icons against surface. */ tertiary: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-color-tertiary, #7D5260)"),
    /** Text and icons against tertiary. */ onTertiary: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-color-on-tertiary, #FFFFFF)"),
    /** Complementary container color against surface. */ tertiaryContainer: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-color-tertiary-container, #FFD8E4)"),
    /** Text and icons against tertiary container. */ onTertiaryContainer: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-color-on-tertiary-container, #633B48)"),
    /** Complementary fills, texts, and icons that maintain the same tone in light and dark themes. */ tertiaryFixed: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-color-tertiary-fixed, #FFD8E4)"),
    /** Complementary fills, texts, and icons that maintain the same stronger tone in light and dark themes. */ tertiaryFixedDim: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-color-tertiary-fixed-dim, #EFB8C8)"),
    /** Text and icons against fixed tertiary. */ onTertiaryFixed: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-color-on-tertiary-fixed, #31111D)"),
    /** Lower-emphasis text and icons against fixed tertiary. */ onTertiaryFixedVariant: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-color-on-tertiary-fixed-variant, #633B48)"),
    /** Attention-grabbing color against surface for fills, icons, and text, indicating urgency. */ error: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-color-error, #B3261E)"),
    /** Text and icons against error. */ onError: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-color-on-error, #FFFFFF)"),
    /** Attention-grabbing fill color against surface. */ errorContainer: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-color-error-container, #F9DEDC)"),
    /** Text and icons against error container. */ onErrorContainer: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-color-on-error-container, #8C1D18)"),
    /** Default color for backgrounds. */ surface: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-color-surface, #FEF7FF)"),
    /** Text and icons against any surface color. */ onSurface: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-color-on-surface, #1D1B20)"),
    /** Lower-emphasis color for text and icons against any surface color. */ onSurfaceVariant: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-color-on-surface-variant, #49454F)"),
    /** Lowest-emphasis container color. */ surfaceContainerLowest: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-color-surface-container-lowest, #FFFFFF)"),
    /** Low-emphasis container color. */ surfaceContainerLow: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-color-surface-container-low, #F7F2FA)"),
    /** Default container color. */ surfaceContainer: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-color-surface-container, #F3EDF7)"),
    /** High-emphasis container color. */ surfaceContainerHigh: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-color-surface-container-high, #ECE6F0)"),
    /** Highest-emphasis container color. */ surfaceContainerHighest: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-color-surface-container-highest, #E6E0E9)"),
    /** Dimmest surface color in light and dark themes. */ surfaceDim: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-color-surface-dim, #DED8E1)"),
    /** Brightest surface color in light and dark themes. */ surfaceBright: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-color-surface-bright, #FEF7FF)"),
    /** Alternate surface color, can be used for active states. */ surfaceVariant: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-color-surface-variant, #E7E0EC)"),
    /** Background fills for elements which contrast against surface. */ inverseSurface: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-color-inverse-surface, #322F35)"),
    /** Text and icons against inverse surface. */ inverseOnSurface: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-color-inverse-on-surface, #F5EFF7)"),
    /** Primary text and icons against inverse surface. */ inversePrimary: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-color-inverse-primary, #D0BCFF)"),
    /** Important boundaries, such as a text field outline. */ outline: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-color-outline, #79747E)"),
    /** Decorative elements, such as dividers. */ outlineVariant: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-color-outline-variant, #CAC4D0)"),
    /** Elevation shadow color. */ shadow: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-color-shadow, #000000)"),
    /** Backdrop which obscures underlying content. */ scrim: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-color-scrim, #000000)")
};
const $2795e4e0258f7c7d$var$_DensityToken = {
    /** Base density multiplier. */ scale: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-density-scale, 0)"),
    /** Spatial unit used to scale component dimensions based on density. */ size: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-density-size, 4px)")
};
/** Design tokens that control density. */ const $2795e4e0258f7c7d$var$DensityToken = (0, $f4c2afb688ab0db2$export$71511d61b312f219)((0, $352bf379245fbc9f$export$71511d61b312f219)({}, $2795e4e0258f7c7d$var$_DensityToken), {
    /**
   * Creates a CSS `calc` that calculates a dimension based on density.
   * @param {number} minScale The minimum supported scale.
   * @returns {CSSResult} A CSS `calc` used to calculate a dimension based on density.
   */ calc (minScale) {
        return (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`calc(max(${minScale}, ${$2795e4e0258f7c7d$var$_DensityToken.scale}) * ${$2795e4e0258f7c7d$var$_DensityToken.size})`);
    },
    /**
   * Creates a CSS `calc` that calculates a dimension based on half density.
   * @param {number} minScale The minimum supported scale.
   * @returns {CSSResult} A CSS `calc` used to calculate a dimension based on half density.
   */ calcHalf (minScale) {
        return (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`calc(max(${minScale}, ${$2795e4e0258f7c7d$var$_DensityToken.scale}) * (${$2795e4e0258f7c7d$var$_DensityToken.size} / 2))`);
    }
});
const $2795e4e0258f7c7d$var$UMBRA_COLOR = `color-mix(in srgb, var(--m3e-elevation-color, ${$2795e4e0258f7c7d$var$ColorToken.shadow}) 20%, transparent)`;
const $2795e4e0258f7c7d$var$UMBRA = [
    "0px 0px 0px 0px",
    "0px 2px 1px -1px",
    "0px 3px 1px -2px",
    "0px 3px 3px -2px",
    "0px 2px 4px -1px",
    "0px 3px 5px -1px",
    "0px 3px 5px -1px",
    "0px 4px 5px -2px",
    "0px 5px 5px -3px",
    "0px 5px 6px -3px",
    "0px 6px 6px -3px",
    "0px 6px 7px -4px",
    "0px 7px 8px -4px",
    "0px 7px 8px -4px",
    "0px 7px 9px -4px",
    "0px 8px 9px -5px",
    "0px 8px 10px -5px",
    "0px 8px 11px -5px",
    "0px 9px 11px -5px",
    "0px 9px 12px -6px",
    "0px 10px 13px -6px",
    "0px 10px 13px -6px",
    "0px 10px 14px -6px",
    "0px 11px 14px -7px",
    "0px 11px 15px -7px"
];
const $2795e4e0258f7c7d$var$PENUMBRA_COLOR = `color-mix(in srgb, var(--m3e-elevation-color, ${$2795e4e0258f7c7d$var$ColorToken.shadow}) 14%, transparent)`;
const $2795e4e0258f7c7d$var$PENUMBRA = [
    "0px 0px 0px 0px",
    "0px 1px 1px 0px",
    "0px 2px 2px 0px",
    "0px 3px 4px 0px",
    "0px 4px 5px 0px",
    "0px 5px 8px 0px",
    "0px 6px 10px 0px",
    "0px 7px 10px 1px",
    "0px 8px 10px 1px",
    "0px 9px 12px 1px",
    "0px 10px 14px 1px",
    "0px 11px 15px 1px",
    "0px 12px 17px 2px",
    "0px 13px 19px 2px",
    "0px 14px 21px 2px",
    "0px 15px 22px 2px",
    "0px 16px 24px 2px",
    "0px 17px 26px 2px",
    "0px 18px 28px 2px",
    "0px 19px 29px 2px",
    "0px 20px 31px 3px",
    "0px 21px 33px 3px",
    "0px 22px 35px 3px",
    "0px 23px 36px 3px",
    "0px 24px 38px 3px"
];
const $2795e4e0258f7c7d$var$AMBIENT_COLOR = `color-mix(in srgb, var(--m3e-elevation-color, ${$2795e4e0258f7c7d$var$ColorToken.shadow}) 12%, transparent)`;
const $2795e4e0258f7c7d$var$AMBIENT = [
    "0px 0px 0px 0px",
    "0px 1px 3px 0px",
    "0px 1px 5px 0px",
    "0px 1px 8px 0px",
    "0px 1px 10px 0px",
    "0px 1px 14px 0px",
    "0px 1px 18px 0px",
    "0px 2px 16px 1px",
    "0px 3px 14px 2px",
    "0px 3px 16px 2px",
    "0px 4px 18px 3px",
    "0px 4px 20px 3px",
    "0px 5px 22px 4px",
    "0px 5px 24px 4px",
    "0px 5px 26px 4px",
    "0px 6px 28px 5px",
    "0px 6px 30px 5px",
    "0px 6px 32px 5px",
    "0px 7px 34px 6px",
    "0px 7px 36px 6px",
    "0px 8px 38px 7px",
    "0px 8px 40px 7px",
    "0px 8px 42px 7px",
    "0px 9px 44px 8px",
    "0px 9px 46px 8px"
];
function $2795e4e0258f7c7d$var$elevation(z) {
    return `${$2795e4e0258f7c7d$var$UMBRA_COLOR} ${$2795e4e0258f7c7d$var$UMBRA[z]},${$2795e4e0258f7c7d$var$PENUMBRA_COLOR} ${$2795e4e0258f7c7d$var$PENUMBRA[z]},${$2795e4e0258f7c7d$var$AMBIENT_COLOR} ${$2795e4e0258f7c7d$var$AMBIENT[z]}`;
}
/** Design tokens that control elevation. */ const $2795e4e0258f7c7d$var$ElevationToken$1 = {
    /** Level 0 elevation. */ level0: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--md-sys-elevation-level0, ${$2795e4e0258f7c7d$var$elevation(0)})`),
    /** Level 1 elevation. */ level1: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--md-sys-elevation-level1, ${$2795e4e0258f7c7d$var$elevation(1)})`),
    /** Level 2 elevation. */ level2: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--md-sys-elevation-level2, ${$2795e4e0258f7c7d$var$elevation(3)})`),
    /** Level 3 elevation. */ level3: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--md-sys-elevation-level3, ${$2795e4e0258f7c7d$var$elevation(6)})`),
    /** Level 4 elevation. */ level4: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--md-sys-elevation-level4, ${$2795e4e0258f7c7d$var$elevation(8)})`),
    /** Level 5 elevation. */ level5: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--md-sys-elevation-level5, ${$2795e4e0258f7c7d$var$elevation(12)})`)
};
function $2795e4e0258f7c7d$var$space(unit) {
    return (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--md-sys-measurement-space${unit}, ${8 * (unit / 100)}px)`);
}
/** Design tokens that control measurements. */ const $2795e4e0258f7c7d$var$MeasurementToken = {
    /** Zero spacing. */ space0: $2795e4e0258f7c7d$var$space(0),
    /** 2dp spacing. */ space25: $2795e4e0258f7c7d$var$space(25),
    /** 4dp spacing. */ space50: $2795e4e0258f7c7d$var$space(50),
    /** 6dp spacing. */ space75: $2795e4e0258f7c7d$var$space(75),
    /** 8dp spacing. */ space100: $2795e4e0258f7c7d$var$space(100),
    /** 10dp spacing. */ space125: $2795e4e0258f7c7d$var$space(125),
    /** 12dp spacing. */ space150: $2795e4e0258f7c7d$var$space(150),
    /** 14dp spacing. */ space175: $2795e4e0258f7c7d$var$space(175),
    /** 16dp spacing. */ space200: $2795e4e0258f7c7d$var$space(200),
    /** 18dp spacing. */ space225: $2795e4e0258f7c7d$var$space(225),
    /** 20dp spacing. */ space250: $2795e4e0258f7c7d$var$space(250),
    /** 24dp spacing. */ space300: $2795e4e0258f7c7d$var$space(300),
    /** 26dp spacing. */ space325: $2795e4e0258f7c7d$var$space(325),
    /** 28dp spacing. */ space350: $2795e4e0258f7c7d$var$space(350),
    /** 30dp spacing. */ space375: $2795e4e0258f7c7d$var$space(375),
    /** 32dp spacing. */ space400: $2795e4e0258f7c7d$var$space(400),
    /** 34dp spacing. */ space425: $2795e4e0258f7c7d$var$space(425),
    /** 36dp spacing. */ space450: $2795e4e0258f7c7d$var$space(450),
    /** 38dp spacing. */ space475: $2795e4e0258f7c7d$var$space(475),
    /** 40dp spacing. */ space500: $2795e4e0258f7c7d$var$space(500),
    /** 42dp spacing. */ space525: $2795e4e0258f7c7d$var$space(525),
    /** 44dp spacing. */ space550: $2795e4e0258f7c7d$var$space(550),
    /** 46dp spacing. */ space575: $2795e4e0258f7c7d$var$space(575),
    /** 48dp spacing. */ space600: $2795e4e0258f7c7d$var$space(600),
    /** 50dp spacing. */ space625: $2795e4e0258f7c7d$var$space(625),
    /** 52dp spacing. */ space650: $2795e4e0258f7c7d$var$space(650),
    /** 54dp spacing. */ space675: $2795e4e0258f7c7d$var$space(675),
    /** 56dp spacing. */ space700: $2795e4e0258f7c7d$var$space(700),
    /** 58dp spacing. */ space725: $2795e4e0258f7c7d$var$space(725),
    /** 60dp spacing. */ space750: $2795e4e0258f7c7d$var$space(750),
    /** 62dp spacing. */ space775: $2795e4e0258f7c7d$var$space(775),
    /** 64dp spacing. */ space800: $2795e4e0258f7c7d$var$space(800),
    /** 66dp spacing. */ space825: $2795e4e0258f7c7d$var$space(825),
    /** 68dp spacing. */ space850: $2795e4e0258f7c7d$var$space(850),
    /** 70dp spacing. */ space875: $2795e4e0258f7c7d$var$space(875),
    /** 72dp spacing. */ space900: $2795e4e0258f7c7d$var$space(900)
};
const $2795e4e0258f7c7d$var$EasingToken = {
    /** Emphasized transition. */ emphasized: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-motion-easing-emphasized, cubic-bezier(0.2, 0.0, 0, 1.0))"),
    /** Decelerated emphasized transition. */ emphasizedDecelerate: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-motion-easing-emphasized-decelerate, cubic-bezier(0.05, 0.7, 0.1, 1.0))"),
    /** Accelerated emphasized transition. */ emphasizedAccelerate: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-motion-easing-emphasized-accelerate, cubic-bezier(0.3, 0.0, 0.8, 0.15))"),
    /** Simple, small, or utility-focused transition. */ standard: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-motion-easing-standard, cubic-bezier(0.2, 0.0, 0, 1.0))"),
    /** Decelerated standard transition. */ standardDecelerate: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-motion-easing-standard-decelerate, cubic-bezier(0, 0, 0, 1))"),
    /** Accelerated standard transition. */ standardAccelerate: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-motion-easing-standard-accelerate, cubic-bezier(0.3, 0, 1, 1))")
};
const $2795e4e0258f7c7d$var$SpringToken = {
    /** Fast spatial spring. */ fastSpatial: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-motion-spring-fast-spatial, 350ms cubic-bezier(0.27, 1.06, 0.18, 1.00))"),
    /** Default spatial spring. */ defaultSpatial: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-motion-spring-default-spatial, 500ms cubic-bezier(0.27, 1.06, 0.18, 1.00))"),
    /** Slow spatial spring. */ slowSpatial: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-motion-spring-slow-spatial, 750ms cubic-bezier(0.27, 1.06, 0.18, 1.00))"),
    /** Fast effects spring. */ fastEffects: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-motion-spring-fast-effects, 150ms cubic-bezier(0.31, 0.94, 0.34, 1.00))"),
    /** Default effects spring. */ defaultEffects: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-motion-spring-default-effects, 200ms cubic-bezier(0.34, 0.80, 0.34, 1.00))"),
    /** Slow effects spring. */ slowEffects: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-motion-spring-slow-effects, 200ms cubic-bezier(0.34, 0.88, 0.34, 1.00))")
};
const $2795e4e0258f7c7d$var$DurationToken = {
    /** Small utility-focused transition duration. */ short1: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-motion-duration-short-1, 50ms)"),
    /** Small utility-focused transition duration. */ short2: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-motion-duration-short-2, 100ms)"),
    /** Small utility-focused transition duration. */ short3: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-motion-duration-short-3, 150ms)"),
    /** Small utility-focused transition duration. */ short4: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-motion-duration-short-4, 200ms)"),
    /**  Duration for transitions that traverse a medium area of the screen. */ medium1: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-motion-duration-medium-1, 250ms)"),
    /**  Duration for transitions that traverse a medium area of the screen. */ medium2: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-motion-duration-medium-2, 300ms)"),
    /**  Duration for transitions that traverse a medium area of the screen. */ medium3: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-motion-duration-medium-3, 350ms)"),
    /**  Duration for transitions that traverse a medium area of the screen. */ medium4: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-motion-duration-medium-4, 400ms)"),
    /**  Duration for large expressive transitions. */ long1: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-motion-duration-long-1, 450ms)"),
    /**  Duration for large expressive transitions. */ long2: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-motion-duration-long-2, 500ms)"),
    /**  Duration for large expressive transitions. */ long3: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-motion-duration-long-3, 550ms)"),
    /**  Duration for large expressive transitions. */ long4: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-motion-duration-long-4, 600ms)"),
    /**  Extra long duration for ambient transitions. */ extraLong1: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-motion-duration-extra-long-1, 700ms)"),
    /**  Extra long duration for ambient transitions. */ extraLong2: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-motion-duration-extra-long-2, 800ms)"),
    /**  Extra long duration for ambient transitions. */ extraLong3: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-motion-duration-extra-long-3, 900ms)"),
    /**  Extra long duration for ambient transitions. */ extraLong4: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-motion-duration-extra-long-4, 1000ms)")
};
/** Design tokens that control motion. */ const $2795e4e0258f7c7d$var$MotionToken = {
    /** Design tokens that control transition effects. */ easing: $2795e4e0258f7c7d$var$EasingToken,
    /** Design tokens that control transition duration. */ duration: $2795e4e0258f7c7d$var$DurationToken,
    /** Design tokens that control spring effects. */ spring: $2795e4e0258f7c7d$var$SpringToken
};
/** Design tokens that control scrollbars. */ const $2795e4e0258f7c7d$var$ScrollbarToken = {
    /** Width of a standard scrollbar. */ width: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-scrollbar-width, auto)`),
    /** Width of a thin scrollbar. */ thinWidth: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-scrollbar-thin-width, thin)`),
    /** Color of a scrollbar. */ color: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-scrollbar-thumb-color, #938f94) var(--m3e-scrollbar-track-color, transparent)`)
};
const $2795e4e0258f7c7d$var$CornerValue = {
    /** No rounding. */ none: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-shape-corner-value-none, 0)"),
    /** Extra small rounded corner. */ extraSmall: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-shape-corner-value-extra-small, 4px)"),
    /** Small rounded corner. */ small: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-shape-corner-value-small, 8px)"),
    /** Medium rounded corner. */ medium: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-shape-corner-value-medium, 12px)"),
    /** Large rounded corner. */ large: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-shape-corner-value-large, 16px)"),
    /** Increased large rounded corner. */ largeIncreased: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-shape-corner-value-large-increased, 20px)"),
    /** Extra large rounded corner. */ extraLarge: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-shape-corner-value-extra-large, 28px)"),
    /** Increased extra large rounded corner. */ extraLargeIncreased: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-shape-corner-value-extra-large-increased, 32px)"),
    /** Extra extra large rounded corner. */ extraExtraLarge: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-shape-corner-value-extra-extra-large, 48px)")
};
/** Design tokens that control shape. */ const $2795e4e0258f7c7d$var$ShapeToken = {
    corner: {
        /** Fully rounded symmetric shape. */ full: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-shape-corner-full, 9999px)"),
        /** Extra large rounded asymmetric shape directed towards the top. */ extraLargeTop: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--md-sys-shape-corner-extra-large-top, ${$2795e4e0258f7c7d$var$CornerValue.extraLarge} ${$2795e4e0258f7c7d$var$CornerValue.extraLarge} ${$2795e4e0258f7c7d$var$CornerValue.none} ${$2795e4e0258f7c7d$var$CornerValue.none})`),
        /** Extra large rounded symmetric shape. */ extraLarge: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--md-sys-shape-corner-extra-large, ${$2795e4e0258f7c7d$var$CornerValue.extraLarge})`),
        /** Extra large rounded asymmetric shape directed towards the end. */ extraLargeEnd: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`${$2795e4e0258f7c7d$var$CornerValue.none} ${$2795e4e0258f7c7d$var$CornerValue.extraLarge} ${$2795e4e0258f7c7d$var$CornerValue.extraLarge} ${$2795e4e0258f7c7d$var$CornerValue.none}`),
        /** Extra large rounded asymmetric shape directed towards the start. */ extraLargeStart: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`${$2795e4e0258f7c7d$var$CornerValue.extraLarge} ${$2795e4e0258f7c7d$var$CornerValue.none} ${$2795e4e0258f7c7d$var$CornerValue.none} ${$2795e4e0258f7c7d$var$CornerValue.extraLarge}`),
        /** Large rounded asymmetric shape directed towards the top. */ largeTop: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--md-sys-shape-corner-large-top, ${$2795e4e0258f7c7d$var$CornerValue.large} ${$2795e4e0258f7c7d$var$CornerValue.large} ${$2795e4e0258f7c7d$var$CornerValue.none} ${$2795e4e0258f7c7d$var$CornerValue.none})`),
        /** Large rounded asymmetric shape directed towards the end. */ largeEnd: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--md-sys-shape-corner-large-end, ${$2795e4e0258f7c7d$var$CornerValue.none} ${$2795e4e0258f7c7d$var$CornerValue.large} ${$2795e4e0258f7c7d$var$CornerValue.large} ${$2795e4e0258f7c7d$var$CornerValue.none})`),
        /** Large rounded asymmetric shape directed towards the start. */ largeStart: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--md-sys-shape-corner-large-start, ${$2795e4e0258f7c7d$var$CornerValue.large} ${$2795e4e0258f7c7d$var$CornerValue.none} ${$2795e4e0258f7c7d$var$CornerValue.none} ${$2795e4e0258f7c7d$var$CornerValue.large})`),
        /** Large rounded symmetric shape. */ large: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--md-sys-shape-corner-large, ${$2795e4e0258f7c7d$var$CornerValue.large})`),
        /** Medium rounded symmetric shape. */ medium: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--md-sys-shape-corner-medium, ${$2795e4e0258f7c7d$var$CornerValue.medium})`),
        /** Medium rounded asymmetric shape directed towards the top. */ mediumTop: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`${$2795e4e0258f7c7d$var$CornerValue.medium} ${$2795e4e0258f7c7d$var$CornerValue.medium} ${$2795e4e0258f7c7d$var$CornerValue.none} ${$2795e4e0258f7c7d$var$CornerValue.none}`),
        /** Medium rounded asymmetric shape directed towards the end. */ mediumEnd: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`${$2795e4e0258f7c7d$var$CornerValue.none} ${$2795e4e0258f7c7d$var$CornerValue.medium} ${$2795e4e0258f7c7d$var$CornerValue.medium} ${$2795e4e0258f7c7d$var$CornerValue.none}`),
        /** Medium rounded asymmetric shape directed towards the start. */ mediumStart: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`${$2795e4e0258f7c7d$var$CornerValue.medium} ${$2795e4e0258f7c7d$var$CornerValue.none} ${$2795e4e0258f7c7d$var$CornerValue.none} ${$2795e4e0258f7c7d$var$CornerValue.medium}`),
        /** Small rounded symmetric shape. */ small: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--md-sys-shape-corner-small, ${$2795e4e0258f7c7d$var$CornerValue.small})`),
        /** Small rounded asymmetric shape directed towards the top. */ smallTop: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`${$2795e4e0258f7c7d$var$CornerValue.small} ${$2795e4e0258f7c7d$var$CornerValue.small} ${$2795e4e0258f7c7d$var$CornerValue.none} ${$2795e4e0258f7c7d$var$CornerValue.none}`),
        /** Small rounded asymmetric shape directed towards the end. */ smallEnd: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`${$2795e4e0258f7c7d$var$CornerValue.none} ${$2795e4e0258f7c7d$var$CornerValue.small} ${$2795e4e0258f7c7d$var$CornerValue.small} ${$2795e4e0258f7c7d$var$CornerValue.none}`),
        /** Small rounded asymmetric shape directed towards the start. */ smallStart: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`${$2795e4e0258f7c7d$var$CornerValue.small} ${$2795e4e0258f7c7d$var$CornerValue.none} ${$2795e4e0258f7c7d$var$CornerValue.none} ${$2795e4e0258f7c7d$var$CornerValue.small}`),
        /** Extra small rounded asymmetric shape directed towards the top. */ extraSmallTop: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--md-sys-shape-corner-extra-small-top, ${$2795e4e0258f7c7d$var$CornerValue.extraSmall} ${$2795e4e0258f7c7d$var$CornerValue.extraSmall} ${$2795e4e0258f7c7d$var$CornerValue.none} ${$2795e4e0258f7c7d$var$CornerValue.none})`),
        /** Extra small rounded symmetric shape. */ extraSmall: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--md-sys-shape-corner-extra-small, ${$2795e4e0258f7c7d$var$CornerValue.extraSmall})`),
        /** Extra small rounded asymmetric shape directed towards the end. */ extraSmallEnd: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`${$2795e4e0258f7c7d$var$CornerValue.none} ${$2795e4e0258f7c7d$var$CornerValue.extraSmall} ${$2795e4e0258f7c7d$var$CornerValue.extraSmall} ${$2795e4e0258f7c7d$var$CornerValue.none}`),
        /** Extra small rounded asymmetric shape directed towards the start. */ extraSmallStart: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`${$2795e4e0258f7c7d$var$CornerValue.extraSmall} ${$2795e4e0258f7c7d$var$CornerValue.none} ${$2795e4e0258f7c7d$var$CornerValue.none} ${$2795e4e0258f7c7d$var$CornerValue.extraSmall}`),
        /** Extra small rounded asymmetric shape directed towards the bottom. */ extraSmallBottom: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`${$2795e4e0258f7c7d$var$CornerValue.none} ${$2795e4e0258f7c7d$var$CornerValue.none} ${$2795e4e0258f7c7d$var$CornerValue.extraSmall} ${$2795e4e0258f7c7d$var$CornerValue.extraSmall}`),
        /** No rounding. */ none: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--md-sys-shape-corner-none, ${$2795e4e0258f7c7d$var$CornerValue.none})`),
        /** Increased large rounded symmetric shape. */ largeIncreased: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--md-sys-shape-corner-large-increased, ${$2795e4e0258f7c7d$var$CornerValue.largeIncreased})`),
        /** Increased extra large rounded symmetric shape. */ extraLargeIncreased: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--md-sys-shape-corner-extra-large-increased, ${$2795e4e0258f7c7d$var$CornerValue.extraLargeIncreased})`),
        /** Extra extra large rounded symmetric shape. */ extraExtraLarge: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--md-sys-shape-corner-extra-extra-large, ${$2795e4e0258f7c7d$var$CornerValue.extraExtraLarge})`),
        /** Design tokens that control specific corners. */ value: $2795e4e0258f7c7d$var$CornerValue
    }
};
/** Design tokens that control state layer. */ const $2795e4e0258f7c7d$var$StateToken = {
    /** Opacity of the state layer on focus. */ focusStateLayerOpacity: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-state-focus-state-layer-opacity, 10%)"),
    /** Opacity of the state layer on hover. */ hoverStateLayerOpacity: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-state-hover-state-layer-opacity, 8%)"),
    /** Opacity of the state layer on pressed. */ pressedStateLayerOpacity: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-state-pressed-state-layer-opacity, 10%)")
};
/** Design tokens that control typescale. */ const $2795e4e0258f7c7d$var$TypescaleToken = {
    /** Standard typescale variant. */ standard: {
        /** Short, important text or numerals. */ display: {
            large: {
                fontSize: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-typescale-display-large-font-size, 3.5625rem)"),
                fontWeight: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-typescale-display-large-font-weight, 400)"),
                lineHeight: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-typescale-display-large-line-height, 4rem)"),
                tracking: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-typescale-display-large-tracking, 0.015625rem)")
            },
            medium: {
                fontSize: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-typescale-display-medium-font-size, 2.8125rem)"),
                fontWeight: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-typescale-display-medium-font-weight, 400)"),
                lineHeight: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-typescale-display-medium-line-height, 3.25rem)"),
                tracking: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-typescale-display-medium-tracking, 0)")
            },
            small: {
                fontSize: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-typescale-display-small-font-size, 2.25rem)"),
                fontWeight: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-typescale-display-small-font-weight, 400)"),
                lineHeight: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-typescale-display-small-line-height, 2.75rem)"),
                tracking: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-typescale-display-small-tracking, 0)")
            }
        },
        /** Short, high-emphasis text on smaller screens. */ headline: {
            large: {
                fontSize: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-typescale-headline-large-font-size, 2rem)"),
                fontWeight: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-typescale-headline-large-font-weight, 400)"),
                lineHeight: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-typescale-headline-large-line-height, 2.5rem)"),
                tracking: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-typescale-headline-large-tracking, 0)")
            },
            medium: {
                fontSize: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-typescale-headline-medium-font-size, 1.75rem)"),
                fontWeight: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-typescale-headline-medium-font-weight, 400)"),
                lineHeight: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-typescale-headline-medium-line-height, 2.25rem)"),
                tracking: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-typescale-headline-medium-tracking, 0)")
            },
            small: {
                fontSize: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-typescale-headline-small-font-size, 1.5rem)"),
                fontWeight: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-typescale-headline-small-font-weight, 400)"),
                lineHeight: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-typescale-headline-small-line-height, 2rem)"),
                tracking: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-typescale-headline-small-tracking, 0)")
            }
        },
        /** Medium-emphasis text that remains relatively short. */ title: {
            large: {
                fontSize: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-typescale-title-large-font-size, 1.375rem)"),
                fontWeight: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-typescale-title-large-font-weight, 400)"),
                lineHeight: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-typescale-title-large-line-height, 1.75rem)"),
                tracking: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-typescale-title-large-tracking, 0)")
            },
            medium: {
                fontSize: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-typescale-title-medium-font-size, 1rem)"),
                fontWeight: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-typescale-title-medium-font-weight, 500)"),
                lineHeight: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-typescale-title-medium-line-height, 1.5rem)"),
                tracking: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-typescale-title-medium-tracking, 0.009375rem)")
            },
            small: {
                fontSize: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-typescale-title-small-font-size, 0.875rem)"),
                fontWeight: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-typescale-title-small-font-weight, 500)"),
                lineHeight: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-typescale-title-small-line-height, 1.25rem)"),
                tracking: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-typescale-title-small-tracking, 0.00625rem)")
            }
        },
        /** Longer passages of text. */ body: {
            large: {
                fontSize: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-typescale-body-large-font-size, 1rem)"),
                fontWeight: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-typescale-body-large-font-weight, 400)"),
                lineHeight: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-typescale-body-large-line-height, 1.5rem)"),
                tracking: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-typescale-body-large-tracking, 0.03125rem)")
            },
            medium: {
                fontSize: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-typescale-body-medium-font-size, 0.875rem)"),
                fontWeight: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-typescale-body-medium-font-weight, 400)"),
                lineHeight: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-typescale-body-medium-line-height, 1.25rem)"),
                tracking: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-typescale-body-medium-tracking, 0.015625rem)")
            },
            small: {
                fontSize: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-typescale-body-small-font-size, 0.75rem)"),
                fontWeight: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-typescale-body-small-font-weight, 400)"),
                lineHeight: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-typescale-body-small-line-height, 1rem)"),
                tracking: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-typescale-body-small-tracking, 0.025rem)")
            }
        },
        /** Smaller, utilitarian text. */ label: {
            large: {
                fontSize: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-typescale-label-large-font-size, 0.875rem)"),
                fontWeight: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-typescale-label-large-font-weight, 500)"),
                lineHeight: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-typescale-label-large-line-height, 1.25rem)"),
                tracking: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-typescale-label-large-tracking, 0.00625rem)")
            },
            medium: {
                fontSize: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-typescale-label-medium-font-size, 0.75rem)"),
                fontWeight: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-typescale-label-medium-font-weight, 500)"),
                lineHeight: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-typescale-label-medium-line-height, 1rem)"),
                tracking: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-typescale-label-medium-tracking, 0.03125rem)")
            },
            small: {
                fontSize: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-typescale-label-small-font-size, 0.6875rem)"),
                fontWeight: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-typescale-label-small-font-weight, 500)"),
                lineHeight: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-typescale-label-small-line-height, 1rem)"),
                tracking: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-typescale-label-small-tracking, 0.03125rem)")
            }
        }
    },
    /** Emphasized typescale variant. */ emphasized: {
        /** Short, important text or numerals. */ display: {
            large: {
                fontSize: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-typescale-emphasized-display-large-font-size, 3.5625rem)"),
                fontWeight: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-typescale-emphasized-display-large-font-weight, 500)"),
                lineHeight: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-typescale-emphasized-display-large-line-height, 4rem)"),
                tracking: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-typescale-emphasized-display-large-tracking, 0.015625rem)")
            },
            medium: {
                fontSize: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-typescale-emphasized-display-medium-font-size, 2.8125rem)"),
                fontWeight: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-typescale-emphasized-display-medium-font-weight, 500)"),
                lineHeight: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-typescale-emphasized-display-medium-line-height, 3.25rem)"),
                tracking: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-typescale-emphasized-display-medium-tracking, 0)")
            },
            small: {
                fontSize: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-typescale-emphasized-display-small-font-size, 2.25rem)"),
                fontWeight: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-typescale-emphasized-display-small-font-weight, 500)"),
                lineHeight: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-typescale-emphasized-display-small-line-height, 2.75rem)"),
                tracking: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-typescale-emphasized-display-small-tracking, 0)")
            }
        },
        /** Short, high-emphasis text on smaller screens. */ headline: {
            large: {
                fontSize: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-typescale-emphasized-headline-large-font-size, 2rem)"),
                fontWeight: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-typescale-emphasized-headline-large-font-weight, 500)"),
                lineHeight: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-typescale-emphasized-headline-large-line-height, 2.5rem)"),
                tracking: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-typescale-emphasized-headline-large-tracking, 0)")
            },
            medium: {
                fontSize: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-typescale-emphasized-headline-medium-font-size, 1.75rem)"),
                fontWeight: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-typescale-emphasized-headline-medium-font-weight, 500)"),
                lineHeight: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-typescale-emphasized-headline-medium-line-height, 2.25rem)"),
                tracking: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-typescale-emphasized-headline-medium-tracking, 0)")
            },
            small: {
                fontSize: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-typescale-emphasized-headline-small-font-size, 1.5rem)"),
                fontWeight: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-typescale-emphasized-headline-small-font-weight, 500)"),
                lineHeight: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-typescale-emphasized-headline-small-line-height, 2rem)"),
                tracking: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-typescale-emphasized-headline-small-tracking, 0)")
            }
        },
        /** Medium-emphasis text that remains relatively short. */ title: {
            large: {
                fontSize: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-typescale-emphasized-title-large-font-size, 1.375rem)"),
                fontWeight: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-typescale-emphasized-title-large-font-weight, 500)"),
                lineHeight: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-typescale-emphasized-title-large-line-height, 1.75rem)"),
                tracking: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-typescale-emphasized-title-large-tracking, 0)")
            },
            medium: {
                fontSize: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-typescale-emphasized-title-medium-font-size, 1rem)"),
                fontWeight: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-typescale-emphasized-title-medium-font-weight, 700)"),
                lineHeight: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-typescale-emphasized-title-medium-line-height, 3.5rem)"),
                tracking: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-typescale-emphasized-title-medium-tracking, 0.009375rem)")
            },
            small: {
                fontSize: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-typescale-emphasized-title-small-font-size, 0.875rem)"),
                fontWeight: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-typescale-emphasized-title-small-font-weight, 700)"),
                lineHeight: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-typescale-emphasized-title-small-line-height, 1.25rem)"),
                tracking: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-typescale-emphasized-title-small-tracking, 0.00625rem)")
            }
        },
        /** Longer passages of text. */ body: {
            large: {
                fontSize: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-typescale-emphasized-body-large-font-size, 1rem)"),
                fontWeight: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-typescale-emphasized-body-large-font-weight, 500)"),
                lineHeight: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-typescale-emphasized-body-large-line-height, 1.5rem)"),
                tracking: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-typescale-emphasized-body-large-tracking, 0.03125rem)")
            },
            medium: {
                fontSize: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-typescale-emphasized-body-medium-font-size, 0.875rem)"),
                fontWeight: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-typescale-emphasized-body-medium-font-weight, 500)"),
                lineHeight: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-typescale-emphasized-body-medium-line-height, 1.25rem)"),
                tracking: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-typescale-emphasized-body-medium-tracking, 0.015625rem)")
            },
            small: {
                fontSize: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-typescale-emphasized-body-small-font-size, 0.75rem)"),
                fontWeight: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-typescale-emphasized-body-small-font-weight, 500)"),
                lineHeight: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-typescale-emphasized-body-small-line-height, 1rem)"),
                tracking: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-typescale-emphasized-body-small-tracking, 0.025rem)")
            }
        },
        /** Smaller, utilitarian text. */ label: {
            large: {
                fontSize: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-typescale-emphasized-label-large-font-size, 0.875rem)"),
                fontWeight: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-typescale-emphasized-label-large-font-weight, 700)"),
                lineHeight: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-typescale-emphasized-label-large-line-height, 1.25rem)"),
                tracking: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-typescale-emphasized-label-large-tracking, 0.00625rem)")
            },
            medium: {
                fontSize: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-typescale-emphasized-label-medium-font-size, 0.75rem)"),
                fontWeight: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-typescale-emphasized-label-medium-font-weight, 700)"),
                lineHeight: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-typescale-emphasized-label-medium-line-height, 1rem)"),
                tracking: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-typescale-emphasized-label-medium-tracking, 0.03125rem)")
            },
            small: {
                fontSize: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-typescale-emphasized-label-small-font-size, 0.6875rem)"),
                fontWeight: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-typescale-emphasized-label-small-font-weight, 700)"),
                lineHeight: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-typescale-emphasized-label-small-line-height, 1rem)"),
                tracking: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--md-sys-typescale-emphasized-label-small-tracking, 0.03125rem)")
            }
        }
    }
};
/** Design tokens used to style components. */ const $2795e4e0258f7c7d$export$b6ce77d07cd22443 = {
    /** Design tokens that control color. */ color: $2795e4e0258f7c7d$var$ColorToken,
    /** Design tokens that control elevation. */ elevation: $2795e4e0258f7c7d$var$ElevationToken$1,
    /** Design tokens that control motion. */ motion: $2795e4e0258f7c7d$var$MotionToken,
    /** Design tokens that control shape. */ shape: $2795e4e0258f7c7d$var$ShapeToken,
    /** Design tokens that control state layer. */ state: $2795e4e0258f7c7d$var$StateToken,
    /** Design tokens that control typescale. */ typescale: $2795e4e0258f7c7d$var$TypescaleToken,
    /** Design tokens that control scrollbars. */ scrollbar: $2795e4e0258f7c7d$var$ScrollbarToken,
    /** Design tokens that control density. */ density: $2795e4e0258f7c7d$var$DensityToken,
    /** Design tokens that control measurement. */ measurement: $2795e4e0258f7c7d$var$MeasurementToken
};
/**
 * Determines whether a value is a `DisabledMixin`.
 * @param {unknown} value The value to test.
 * @returns {value is DisabledMixin} Whether `value` is a `DisabledMixin`.
 */ function $2795e4e0258f7c7d$export$8db646b38f27adce(value) {
    return $2795e4e0258f7c7d$export$b3cfaccc1b88e6cb(value, "disabled");
}
/**
 * Mixin to augment an element with behavior that supports a disabled state.
 * @template T The type of the base class.
 * @param {T} base The base class.
 * @param {boolean} [reflect=true] Whether the disabled property is reflected as an attribute.
 * @param {boolean} [supportsAria=true] Whether ARIA is supported.
 * @returns {Constructor<DisabledMixin> & T} A constructor that implements `DisabledMixin`.
 */ function $2795e4e0258f7c7d$export$9a986b15f53d6d10(base, reflect = true, supportsAria = true) {
    class _DisabledMixin extends base {
        /** @inheritdoc */ update(changedProperties) {
            super.update(changedProperties);
            if (changedProperties.has("disabled") && supportsAria && this.role && this.role !== "none" && this.role !== "presentation") this.ariaDisabled = this.disabled ? "true" : null;
        }
        constructor(){
            super(...arguments);
            /**
       * Whether the element is disabled.
       * @default false
       */ this.disabled = false;
        }
    }
    (0, $ee430606400354b3$export$29e00dfd3077644b)([
        (0, $e48c8bdf0d6f523c$export$d541bacb2bda4494)({
            type: Boolean,
            reflect: reflect
        })
    ], _DisabledMixin.prototype, "disabled", void 0);
    return _DisabledMixin;
}
/**
 * Determines whether a value is a `DisabledInteractiveMixin`.
 * @param {unknown} value The value to test.
 * @returns {value is DisabledInteractiveMixin} Whether `value` is a `DisabledInteractiveMixin`.
 */ function $2795e4e0258f7c7d$export$ef6ef51d21411889(value) {
    return $2795e4e0258f7c7d$export$b3cfaccc1b88e6cb(value, "disabledInteractive") && $2795e4e0258f7c7d$export$8db646b38f27adce(value);
}
const $2795e4e0258f7c7d$var$SUPPRESSED_EVENTS = [
    "click",
    "dblclick",
    "auxclick",
    "keydown",
    "keyup"
];
const $2795e4e0258f7c7d$var$INTERACTIVE_KEYS = [
    "Tab",
    "ArrowLeft",
    "ArrowUp",
    "ArrowRight",
    "ArrowDown",
    "Left",
    "Up",
    "Right",
    "Down"
];
const $2795e4e0258f7c7d$var$_suppressedEventHandler = Symbol("_suppressedEventHandler");
/**
 * Mixin to augment an element with behavior that supports an interactive disabled state.
 * @template T The type of the base class.
 * @param {T} base The base class.
 * @returns {Constructor<DisabledInteractiveMixin>} A constructor that implements `DisabledInteractiveMixin`.
 */ function $2795e4e0258f7c7d$export$3d1d3384b4efc6c3(base) {
    var _a;
    class _DisabledInteractiveMixin extends base {
        /** @inheritdoc */ connectedCallback() {
            $2795e4e0258f7c7d$var$SUPPRESSED_EVENTS.forEach((x)=>this.addEventListener(x, this[$2795e4e0258f7c7d$var$_suppressedEventHandler], true));
            super.connectedCallback();
        }
        /** @inheritdoc */ disconnectedCallback() {
            $2795e4e0258f7c7d$var$SUPPRESSED_EVENTS.forEach((x)=>this.removeEventListener(x, this[$2795e4e0258f7c7d$var$_suppressedEventHandler], true));
            super.disconnectedCallback();
        }
        /** @inheritdoc */ update(changedProperties) {
            super.update(changedProperties);
            if ((changedProperties.has("disabled") || changedProperties.has("disabledInteractive")) && this.role && this.role !== "none" && this.role !== "presentation" && this.role !== "none") this.ariaDisabled = this.disabled || this.disabledInteractive ? "true" : null;
        }
        constructor(){
            super(...arguments);
            /** @private */ this[_a] = (e)=>{
                if (this.disabledInteractive) {
                    // Only allow specific keys when disabled and interactive.
                    if (e instanceof KeyboardEvent && $2795e4e0258f7c7d$var$INTERACTIVE_KEYS.includes(e.key)) return;
                    e.stopImmediatePropagation();
                    e.preventDefault();
                }
            };
            /**
       * Whether the element is disabled and interactive.
       * @default false
       */ this.disabledInteractive = false;
        }
    }
    _a = $2795e4e0258f7c7d$var$_suppressedEventHandler;
    (0, $ee430606400354b3$export$29e00dfd3077644b)([
        (0, $e48c8bdf0d6f523c$export$d541bacb2bda4494)({
            attribute: "disabled-interactive",
            type: Boolean,
            reflect: true
        })
    ], _DisabledInteractiveMixin.prototype, "disabledInteractive", void 0);
    return _DisabledInteractiveMixin;
}
/** A symbol through which to update labels to reflect a control's current state. */ const $2795e4e0258f7c7d$export$f553cf48211bbbff = Symbol("updateLabels");
/**
 * Determines whether a value is a `LabelledMixin`.
 * @param {unknown} value The value to test.
 * @returns Whether `value` is a `LabelledMixin`.
 */ function $2795e4e0258f7c7d$export$a6465328056f6fec(value) {
    return $2795e4e0258f7c7d$export$b3cfaccc1b88e6cb(value, "labels") && $2795e4e0258f7c7d$export$6a3f3fc42130ef44(value);
}
const $2795e4e0258f7c7d$var$_eventHandler = Symbol("_eventHandler");
/**
 * Mixin to augment an element with support for labelling.
 * @template T The type of the base class.
 * @param {T} base The base class.
 * @returns {Constructor<FormAssociatedMixin> & T} A constructor that implements `FormAssociatedMixin`.
 */ function $2795e4e0258f7c7d$export$5fd2a77a6d4b3217(base) {
    var _a;
    class _Labelled extends base {
        /** The label elements that the element is associated with. */ get labels() {
            return this[$2795e4e0258f7c7d$export$e368aba7747330f2].labels;
        }
        /** @inheritdoc */ connectedCallback() {
            super.connectedCallback();
            this.addEventListener("focusout", this[$2795e4e0258f7c7d$var$_eventHandler]);
            this.addEventListener("change", this[$2795e4e0258f7c7d$var$_eventHandler]);
        }
        /** @inheritdoc */ disconnectedCallback() {
            super.disconnectedCallback();
            this.removeEventListener("focusout", this[$2795e4e0258f7c7d$var$_eventHandler]);
            this.removeEventListener("change", this[$2795e4e0258f7c7d$var$_eventHandler]);
        }
        /** @inheritdoc */ update(changedProperties) {
            super.update(changedProperties);
            this[$2795e4e0258f7c7d$export$f553cf48211bbbff]();
        }
        /** @internal */ [(_a = $2795e4e0258f7c7d$var$_eventHandler, $2795e4e0258f7c7d$export$f553cf48211bbbff)]() {
            const focusable = this.hasAttribute("tabindex");
            const disabled = $2795e4e0258f7c7d$export$8db646b38f27adce(this) && this.disabled || $2795e4e0258f7c7d$export$ef6ef51d21411889(this) && this.disabledInteractive;
            const invalid = $2795e4e0258f7c7d$export$d3eb229ee36277a6(this) && this.touched && (this.ariaInvalid || $2795e4e0258f7c7d$export$6bae5520ca265d22(this, "--invalid"));
            var _this_labels;
            for (const label of (_this_labels = this.labels) !== null && _this_labels !== void 0 ? _this_labels : []){
                label.style.userSelect = focusable ? "none" : "";
                label.style.cursor = !disabled && focusable ? "pointer" : "";
                if (!disabled && focusable) label.style.setProperty("-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)");
                else label.style.removeProperty("-webkit-tap-highlight-color");
                label.style.color = disabled ? `color-mix(in srgb, ${$2795e4e0258f7c7d$export$b6ce77d07cd22443.color.onSurface} 38%, transparent)` : invalid ? `${$2795e4e0258f7c7d$export$b6ce77d07cd22443.color.error}` : "";
            }
        }
        constructor(){
            super(...arguments);
            /** @private */ this[_a] = (e)=>{
                if (!e.defaultPrevented) this[$2795e4e0258f7c7d$export$f553cf48211bbbff]();
            };
        }
    }
    /** Indicates that this custom element participates in form submission, validation, and form state restoration. */ _Labelled.formAssociated = true;
    return _Labelled;
}
/** A symbol through which a "Form Associated" custom element provides a value for a form. */ const $2795e4e0258f7c7d$export$318685b77e3839c0 = Symbol("formValue");
/** A symbol through which a "Form Associated" custom element provides a default value for resetting a form. */ const $2795e4e0258f7c7d$export$1a01ae0705bafd37 = Symbol("defaultValue");
/**
 * Determines whether a value is a `FormAssociatedMixin`.
 * @param {unknown} value The value to test.
 * @returns Whether `value` is a `FormAssociatedMixin`.
 */ function $2795e4e0258f7c7d$export$28d2767d6d5fa3c4(value) {
    return $2795e4e0258f7c7d$export$b3cfaccc1b88e6cb(value, "disabled", "form", "name") && $2795e4e0258f7c7d$export$a6465328056f6fec(value) && $2795e4e0258f7c7d$export$6a3f3fc42130ef44(value);
}
const $2795e4e0258f7c7d$var$_defaultValue = Symbol("_defaultValue");
const $2795e4e0258f7c7d$var$_defaultIndeterminate = Symbol("_defaultIndeterminate");
const $2795e4e0258f7c7d$var$_formDisabled = Symbol("_formDisabled");
/**
 * Mixin to augment an element with "Form Associated" behavior.
 * @template T The type of the base class.
 * @param {T} base The base class.
 * @returns {Constructor<FormAssociatedMixin> & T} A constructor that implements `FormAssociatedMixin`.
 */ function $2795e4e0258f7c7d$export$ff50bfebacec67f(base) {
    var _a, _b;
    class _FormAssociatedMixin extends base {
        /** The `HTMLFormElement` associated with this element. */ get form() {
            return this[$2795e4e0258f7c7d$export$e368aba7747330f2].form;
        }
        /** @inheritdoc */ get labels() {
            return this[$2795e4e0258f7c7d$export$e368aba7747330f2].labels;
        }
        /** @internal */ get [(_a = $2795e4e0258f7c7d$var$_defaultIndeterminate, _b = $2795e4e0258f7c7d$var$_formDisabled, $2795e4e0258f7c7d$export$318685b77e3839c0)]() {
            return null;
        }
        /** @internal */ get [$2795e4e0258f7c7d$export$1a01ae0705bafd37]() {
            return this[$2795e4e0258f7c7d$var$_defaultValue];
        }
        /** The name that identifies the element when submitting the associated form. */ get name() {
            var _this_getAttribute;
            return (_this_getAttribute = this.getAttribute("name")) !== null && _this_getAttribute !== void 0 ? _this_getAttribute : "";
        }
        set name(value) {
            if (value) this.setAttribute("name", value);
            else this.removeAttribute("name");
        }
        // Disabled attributes should not be reflected for form associated elements due to
        // how the formDisabledCallback overrides an element's disabled state.
        // See https://github.com/whatwg/html/issues/8365
        /**
     * Whether the element is disabled.
     * @default false
     */ get disabled() {
            return super.disabled || this[$2795e4e0258f7c7d$var$_formDisabled];
        }
        set disabled(value) {
            super.disabled = value;
        }
        /** @inheritdoc */ connectedCallback() {
            super.connectedCallback();
            if ($2795e4e0258f7c7d$export$be0c43499cc6393e(this)) {
                this[$2795e4e0258f7c7d$var$_defaultValue] = this.checked;
                if ($2795e4e0258f7c7d$export$f52b304a5bb4eafa(this)) this[$2795e4e0258f7c7d$var$_defaultIndeterminate] = this.indeterminate;
            } else if ("value" in this) this[$2795e4e0258f7c7d$var$_defaultValue] = this.value;
        }
        /** @inheritdoc */ requestUpdate(name, oldValue, options) {
            super.requestUpdate(name, oldValue, options);
            this[$2795e4e0258f7c7d$export$e368aba7747330f2].setFormValue(this[$2795e4e0258f7c7d$export$318685b77e3839c0]);
        }
        /** Called when the element is disabled or enabled via its form association. */ formDisabledCallback(disabled) {
            const wasDisabled = this.disabled;
            this[$2795e4e0258f7c7d$var$_formDisabled] = disabled;
            if (this.disabled != wasDisabled) this.requestUpdate("disabled", wasDisabled);
        }
        /** Called when the associated form is reset. */ formResetCallback() {
            if ($2795e4e0258f7c7d$export$be0c43499cc6393e(this)) {
                this.checked = this[$2795e4e0258f7c7d$var$_defaultValue] === true;
                if ($2795e4e0258f7c7d$export$f52b304a5bb4eafa(this)) this.indeterminate = this[$2795e4e0258f7c7d$var$_defaultIndeterminate];
            } else if ("value" in this) this.value = this[$2795e4e0258f7c7d$export$1a01ae0705bafd37];
            if ($2795e4e0258f7c7d$export$4aa7c2a4145afbb9(this)) this.markAsPristine();
            if ($2795e4e0258f7c7d$export$d3eb229ee36277a6(this)) this.markAsUntouched();
        }
        constructor(){
            super(...arguments);
            /** @private */ this[_a] = false;
            /** @private */ this[_b] = false;
        }
    }
    /** Indicates that this custom element participates in form submission, validation, and form state restoration. */ _FormAssociatedMixin.formAssociated = true;
    (0, $ee430606400354b3$export$29e00dfd3077644b)([
        (0, $e48c8bdf0d6f523c$export$d541bacb2bda4494)({
            noAccessor: true
        })
    ], _FormAssociatedMixin.prototype, "name", null);
    (0, $ee430606400354b3$export$29e00dfd3077644b)([
        (0, $e48c8bdf0d6f523c$export$d541bacb2bda4494)({
            type: Boolean
        })
    ], _FormAssociatedMixin.prototype, "disabled", null);
    return _FormAssociatedMixin;
}
/** A symbol through which a "Form Associated" custom element validates its current state. */ const $2795e4e0258f7c7d$export$a22775fa5e2eebd9 = Symbol("validate");
/** A symbol through which a "Form Associated" custom element provides default validation messages. */ const $2795e4e0258f7c7d$export$a9858d9550adf522 = Symbol("defaultValidationMessages");
/**
 * Determines whether a value is a `ConstraintValidationMixin`.
 * @param {unknown} value The value to test.
 * @returns Whether `value` is a `ConstraintValidationMixin`.
 */ function $2795e4e0258f7c7d$export$f10b21c67db60ec2(value) {
    return $2795e4e0258f7c7d$export$b3cfaccc1b88e6cb(value, "willValidate", "validity", "validationMessage", "reportValidity", "checkValidity", "setCustomValidity") && $2795e4e0258f7c7d$export$28d2767d6d5fa3c4(value);
}
const $2795e4e0258f7c7d$var$_updateValidity = Symbol("_updateValidity");
const $2795e4e0258f7c7d$var$_validityMessage = Symbol("_validityMessage");
const $2795e4e0258f7c7d$var$_validationMessages = Symbol("_validationMessages");
/**
 * Mixin to augment an element with "Form Associated" behavior that supports constraint validation.
 * @template T The type of the base class.
 * @param {T} base The base class.
 * @returns {Constructor<ConstraintValidationMixin> & T} A constructor that implements `ConstraintValidationMixin`.
 */ function $2795e4e0258f7c7d$export$c75eeb9200041a45(base) {
    var _a;
    class _ConstraintValidation extends base {
        /** Whether the element is a submittable element that is a candidate for constraint validation. */ get willValidate() {
            return this[$2795e4e0258f7c7d$export$e368aba7747330f2].willValidate;
        }
        /** The validity state of the element. */ get validity() {
            this[$2795e4e0258f7c7d$var$_updateValidity]();
            return this[$2795e4e0258f7c7d$export$e368aba7747330f2].validity;
        }
        /** The error message that would be displayed if the user submits the form, or an empty string if no error message. */ get validationMessage() {
            this[$2795e4e0258f7c7d$var$_updateValidity]();
            return this[$2795e4e0258f7c7d$export$e368aba7747330f2].validationMessage;
        }
        /** Default validation messages mapped to individual error types. */ get [(_a = $2795e4e0258f7c7d$var$_validationMessages, $2795e4e0258f7c7d$export$a9858d9550adf522)]() {
            return {
                valueMissing: "This field is required.",
                typeMismatch: "The value is not in the correct format.",
                patternMismatch: "The value does not match the required pattern.",
                tooLong: "The value is too long.",
                tooShort: "The value is too short.",
                rangeUnderflow: "The value is too small.",
                rangeOverflow: "The value is too large.",
                stepMismatch: "The value is not a valid step.",
                badInput: "The value is invalid.",
                customError: "The value is invalid."
            };
        }
        /** Validation messages mapped to individual error types. */ set validationMessages(value) {
            this[$2795e4e0258f7c7d$var$_validationMessages] = value;
        }
        get validationMessages() {
            return (0, $352bf379245fbc9f$export$71511d61b312f219)({}, this[$2795e4e0258f7c7d$export$a9858d9550adf522], this[$2795e4e0258f7c7d$var$_validationMessages]);
        }
        /** @internal */ [$2795e4e0258f7c7d$export$a22775fa5e2eebd9]() {
            return this[$2795e4e0258f7c7d$var$_validityMessage] ? {
                customError: true
            } : undefined;
        }
        /**
     * Returns `true` if the element has no validity problems; otherwise, returns `false`, fires
     * an invalid event, and (if the event isn't canceled) reports the problem to the user.
     */ reportValidity() {
            if ($2795e4e0258f7c7d$export$d3eb229ee36277a6(this)) this.markAsTouched();
            this[$2795e4e0258f7c7d$var$_updateValidity]();
            return this[$2795e4e0258f7c7d$export$e368aba7747330f2].reportValidity();
        }
        /**
     * Returns `true` if the element has no validity problems; otherwise,
     * returns `false`, fires an invalid event.
     */ checkValidity() {
            this[$2795e4e0258f7c7d$var$_updateValidity]();
            return this[$2795e4e0258f7c7d$export$e368aba7747330f2].checkValidity();
        }
        /**
     * Sets a custom validity message for the element.
     * @param error The message to use for validity errors.
     */ setCustomValidity(error) {
            if (error) this[$2795e4e0258f7c7d$var$_validityMessage] = error;
            else this[$2795e4e0258f7c7d$var$_validityMessage] = undefined;
            this[$2795e4e0258f7c7d$var$_updateValidity]();
        }
        /** @inheritdoc */ requestUpdate(name, oldValue, options) {
            super.requestUpdate(name, oldValue, options);
            this[$2795e4e0258f7c7d$var$_updateValidity]();
        }
        /** @inheritdoc */ firstUpdated(_changedProperties) {
            super.firstUpdated(_changedProperties);
            this[$2795e4e0258f7c7d$var$_updateValidity]();
        }
        /** @private */ [$2795e4e0258f7c7d$var$_updateValidity]() {
            var _this_updateLabels, _this;
            if ((0, $c7d93c12585fc7f5$export$6acf61af03e62db) || !this.isConnected) return;
            const validity = this[$2795e4e0258f7c7d$export$a22775fa5e2eebd9]();
            const validityMessage = (validity === null || validity === void 0 ? void 0 : validity.customError) ? this[$2795e4e0258f7c7d$var$_validityMessage] || this._getValidityMessage(validity) : this._getValidityMessage(validity);
            const invalid = !!validityMessage;
            this[$2795e4e0258f7c7d$export$e368aba7747330f2].setValidity(validity, validityMessage);
            this.ariaInvalid = invalid ? "true" : null;
            $2795e4e0258f7c7d$export$a6b7fbc1acf03e5b(this, "--invalid", invalid === true);
            if ($2795e4e0258f7c7d$export$a6465328056f6fec(this)) (_this_updateLabels = (_this = this)[$2795e4e0258f7c7d$export$f553cf48211bbbff]) === null || _this_updateLabels === void 0 ? void 0 : _this_updateLabels.call(_this);
        }
        /** @private */ _getValidityMessage(flags) {
            if (flags) {
                const msgs = this.validationMessages;
                for(const key in flags)if (flags[key]) {
                    const msg = msgs[key];
                    if (typeof msg === "string") return msg;
                    if (typeof msg === "function") return msg(this);
                }
            }
            return "";
        }
        constructor(){
            super(...arguments);
            this[_a] = {};
        }
    }
    (0, $ee430606400354b3$export$29e00dfd3077644b)([
        (0, $e48c8bdf0d6f523c$export$d541bacb2bda4494)({
            type: Object
        })
    ], _ConstraintValidation.prototype, "validationMessages", null);
    return _ConstraintValidation;
}
const $2795e4e0258f7c7d$var$_tabindex = Symbol("_tabindex");
/**
 * Mixin to augment an element with behavior that supports a focused state.
 * @template T The type of the base class.
 * @param {T} base The base class.
 * @returns {Constructor & T} A constructor that implements focusable behavior.
 */ function $2795e4e0258f7c7d$export$35a3bebf7ef2d934(base) {
    var _a;
    class _FocusableMixin extends base {
        /** @inheritdoc */ connectedCallback() {
            var _this_getAttribute;
            this[$2795e4e0258f7c7d$var$_tabindex] = Number.parseInt((_this_getAttribute = this.getAttribute("tabindex")) !== null && _this_getAttribute !== void 0 ? _this_getAttribute : "0");
            super.connectedCallback();
        }
        /** @inheritdoc */ firstUpdated(_changedProperties) {
            super.firstUpdated(_changedProperties);
            if (!this.hasAttribute("tabindex") && !_changedProperties.has("disabled")) this.setAttribute("tabindex", `${this[$2795e4e0258f7c7d$var$_tabindex]}`);
        }
        /** @inheritdoc */ update(changedProperties) {
            super.update(changedProperties);
            if (changedProperties.has("disabled")) {
                if (!this.disabled && this.role !== "none") {
                    if (!this.hasAttribute("tabindex")) this.setAttribute("tabindex", `${this[$2795e4e0258f7c7d$var$_tabindex]}`);
                } else {
                    const tabIndex = this.getAttribute("tabindex");
                    if (tabIndex) this[$2795e4e0258f7c7d$var$_tabindex] = Number.parseInt(tabIndex);
                    this.removeAttribute("tabindex");
                }
            }
        }
        constructor(){
            super(...arguments);
            /** @private */ this[_a] = 0;
        }
    }
    _a = $2795e4e0258f7c7d$var$_tabindex;
    return _FocusableMixin;
}
/**
 * Determines whether a value is a `FormSubmitterMixin`.
 * @param {unknown} value The value to test.
 * @returns {value is FormSubmitterMixin} Whether `value` is a `FormSubmitterMixin`.
 */ function $2795e4e0258f7c7d$export$e3621352909a5e7d(value) {
    return $2795e4e0258f7c7d$export$b3cfaccc1b88e6cb(value, "name", "type", "value") && $2795e4e0258f7c7d$export$6a3f3fc42130ef44(value);
}
const $2795e4e0258f7c7d$var$_clickHandler$1 = Symbol("_clickHandler");
/**
 * Mixin to augment an element with behavior used to submit a form.
 * @template T The type of the base class.
 * @param {T} base The base class.
 * @returns {Constructor<FormSubmitterMixin>} A constructor that implements `FormSubmitterMixin`.
 */ function $2795e4e0258f7c7d$export$f7d03dabd73ead6b(base) {
    var _a;
    class _FormSubmitterMixin extends base {
        /**
     * The name of the element, submitted as a pair with the element's `value`
     * as part of form data, when the element is used to submit a form.
     */ get name() {
            var _this_getAttribute;
            return (_this_getAttribute = this.getAttribute("name")) !== null && _this_getAttribute !== void 0 ? _this_getAttribute : "";
        }
        set name(value) {
            if (value) this.setAttribute("name", value);
            else this.removeAttribute("name");
        }
        /** The value associated with the element's name when it's submitted with form data. */ get value() {
            return this.getAttribute("value");
        }
        set value(value) {
            if (value !== null && value !== undefined) this.setAttribute("value", value);
            else this.removeAttribute("value");
        }
        /** @inheritdoc */ connectedCallback() {
            super.connectedCallback();
            this.addEventListener("click", this[$2795e4e0258f7c7d$var$_clickHandler$1]);
        }
        /** @inheritdoc */ disconnectedCallback() {
            super.disconnectedCallback();
            this.removeEventListener("click", this[$2795e4e0258f7c7d$var$_clickHandler$1]);
        }
        constructor(){
            super(...arguments);
            /**
       * The type of the element.
       * @default "button"
       */ this.type = "button";
            /** @private */ this[_a] = async (e)=>{
                if (e.defaultPrevented || $2795e4e0258f7c7d$export$8db646b38f27adce(this) && this.disabled || $2795e4e0258f7c7d$export$ef6ef51d21411889(this) && this.disabledInteractive) return;
                const form = this[$2795e4e0258f7c7d$export$e368aba7747330f2].form;
                if (!form || this.type === "button") return;
                await new Promise((resolve)=>setTimeout(resolve));
                if (e.defaultPrevented) return;
                switch(this.type){
                    case "reset":
                        form.reset();
                        break;
                    case "submit":
                        form.addEventListener("submit", (e)=>Object.defineProperty(e, "submitter", {
                                configurable: true,
                                enumerable: true,
                                get: ()=>this
                            }), {
                            capture: true,
                            once: true
                        });
                        this[$2795e4e0258f7c7d$export$e368aba7747330f2].setFormValue(this.value);
                        form.requestSubmit();
                        break;
                }
            };
        }
    }
    _a = $2795e4e0258f7c7d$var$_clickHandler$1;
    /** Indicates that this custom element participates in form submission, validation, and form state restoration. */ _FormSubmitterMixin.formAssociated = true;
    (0, $ee430606400354b3$export$29e00dfd3077644b)([
        (0, $e48c8bdf0d6f523c$export$d541bacb2bda4494)()
    ], _FormSubmitterMixin.prototype, "name", null);
    (0, $ee430606400354b3$export$29e00dfd3077644b)([
        (0, $e48c8bdf0d6f523c$export$d541bacb2bda4494)()
    ], _FormSubmitterMixin.prototype, "value", null);
    (0, $ee430606400354b3$export$29e00dfd3077644b)([
        (0, $e48c8bdf0d6f523c$export$d541bacb2bda4494)()
    ], _FormSubmitterMixin.prototype, "type", void 0);
    return _FormSubmitterMixin;
}
/**
 * Determines whether a value is a `HtmlForMixin`.
 * @param {unknown} value The value to test.
 * @returns {value is HtmlForMixin} Whether `value` is a `HtmlForMixin`.
 */ function $2795e4e0258f7c7d$export$aee76d14a5b732d(value) {
    return $2795e4e0258f7c7d$export$b3cfaccc1b88e6cb(value, "htmlFor", "control", "attach", "detach");
}
const $2795e4e0258f7c7d$var$_control = Symbol("_control");
const $2795e4e0258f7c7d$var$_firstUpdated = Symbol("_firstUpdated");
/**
 * Mixin that creates an attached element associated with an interactive control.
 * @template T The type of the base class.
 * @param {T} base The base class.
 * @returns {Constructor<HtmlForMixin> & T} A constructor extends `base` and implements `HtmlForMixin`.
 */ function $2795e4e0258f7c7d$export$ccf21c713b2bbcbb(base) {
    var _a;
    class _HtmlForMixin extends base {
        /** The interactive element to which this element is attached. */ get control() {
            var _this__control;
            var _this__control_deref;
            return (_this__control_deref = (_this__control = this[$2795e4e0258f7c7d$var$_control]) === null || _this__control === void 0 ? void 0 : _this__control.deref()) !== null && _this__control_deref !== void 0 ? _this__control_deref : null;
        }
        /** @inheritdoc */ connectedCallback() {
            var _this__control;
            super.connectedCallback();
            const control = (_this__control = this[$2795e4e0258f7c7d$var$_control]) === null || _this__control === void 0 ? void 0 : _this__control.deref();
            if (control) this.attach(control);
        }
        /** @inheritdoc */ disconnectedCallback() {
            super.disconnectedCallback();
            const control = this[$2795e4e0258f7c7d$var$_control];
            if (control) {
                this.detach();
                this[$2795e4e0258f7c7d$var$_control] = control;
            }
        }
        /** @inheritdoc */ firstUpdated(_changedProperties) {
            super.firstUpdated(_changedProperties);
            this[$2795e4e0258f7c7d$var$_firstUpdated] = true;
        }
        /** @inheritdoc */ update(changedProperties) {
            super.update(changedProperties);
            if (changedProperties.has("htmlFor")) {
                if (this.htmlFor) {
                    const root = this.getRootNode();
                    if (root) $2795e4e0258f7c7d$export$eaf3894a2d38d832(this.htmlFor, root).then((control)=>{
                        if (control !== this.control) {
                            if (this.control) this.detach();
                            if (control instanceof HTMLElement) this.attach(control);
                        }
                    });
                } else if (this.control && this[$2795e4e0258f7c7d$var$_firstUpdated]) this.detach();
            }
        }
        /**
     * Attaches the element to an interactive control.
     * @param {HTMLElement} control The element that controls the attachable element.
     */ attach(control) {
            this[$2795e4e0258f7c7d$var$_control] = new WeakRef(control);
        }
        /** Detaches the element from its current interactive control. */ detach() {
            this[$2795e4e0258f7c7d$var$_control] = undefined;
        }
        constructor(){
            super(...arguments);
            /** @private */ this[_a] = false;
            /** The identifier of the interactive control to which this element is attached. */ this.htmlFor = null;
        }
    }
    _a = $2795e4e0258f7c7d$var$_firstUpdated;
    (0, $ee430606400354b3$export$29e00dfd3077644b)([
        (0, $e48c8bdf0d6f523c$export$d541bacb2bda4494)({
            attribute: "for"
        })
    ], _HtmlForMixin.prototype, "htmlFor", void 0);
    return _HtmlForMixin;
}
/**
 * Mixin to augment an element with behavior emits a click event on keyboard events.
 * @template T The type of the base class.
 * @param {T} base The base class.
 * @param {boolean} [allowEnter=true] Whether the `ENTER` key emits a click event.
 * @returns {T} A class that extends `base` with keyboard click behavior.
 */ function $2795e4e0258f7c7d$export$d564d59935f4debe(base, allowEnter = true) {
    var __KeyboardClickMixin_instances, __KeyboardClickMixin_keyPressed, __KeyboardClickMixin_keyDownHandler, __KeyboardClickMixin_keyUpHandler, __KeyboardClickMixin_focusOutHandler, __KeyboardClickMixin_handleKeyDown, __KeyboardClickMixin_handleKeyUp;
    class _KeyboardClickMixin extends base {
        /** @inheritdoc */ connectedCallback() {
            super.connectedCallback();
            this.addEventListener("keydown", (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, __KeyboardClickMixin_keyDownHandler, "f"));
            this.addEventListener("keyup", (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, __KeyboardClickMixin_keyUpHandler, "f"));
            this.addEventListener("focusout", (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, __KeyboardClickMixin_focusOutHandler, "f"));
        }
        /** @inheritdoc */ disconnectedCallback() {
            super.disconnectedCallback();
            this.removeEventListener("keydown", (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, __KeyboardClickMixin_keyDownHandler, "f"));
            this.removeEventListener("keyup", (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, __KeyboardClickMixin_keyUpHandler, "f"));
            this.removeEventListener("focusout", (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, __KeyboardClickMixin_focusOutHandler, "f"));
        }
        constructor(){
            super(...arguments);
            __KeyboardClickMixin_instances.add(this);
            /** @private */ __KeyboardClickMixin_keyPressed.set(this, false);
            /** @private */ __KeyboardClickMixin_keyDownHandler.set(this, (e)=>(0, $ee430606400354b3$export$d5dcaf168c640c35)(this, __KeyboardClickMixin_instances, "m", __KeyboardClickMixin_handleKeyDown).call(this, e));
            __KeyboardClickMixin_keyUpHandler.set(this, (e)=>(0, $ee430606400354b3$export$d5dcaf168c640c35)(this, __KeyboardClickMixin_instances, "m", __KeyboardClickMixin_handleKeyUp).call(this, e));
            __KeyboardClickMixin_focusOutHandler.set(this, ()=>(0, $ee430606400354b3$export$d40a35129aaff81f)(this, __KeyboardClickMixin_keyPressed, false, "f"));
        }
    }
    __KeyboardClickMixin_keyPressed = new WeakMap(), __KeyboardClickMixin_keyDownHandler = new WeakMap(), __KeyboardClickMixin_keyUpHandler = new WeakMap(), __KeyboardClickMixin_focusOutHandler = new WeakMap(), __KeyboardClickMixin_instances = new WeakSet(), __KeyboardClickMixin_handleKeyDown = function __KeyboardClickMixin_handleKeyDown(e) {
        if (e.target !== e.currentTarget || $2795e4e0258f7c7d$export$8db646b38f27adce(this) && this.disabled || $2795e4e0258f7c7d$export$ef6ef51d21411889(this) && this.disabledInteractive) {
            (0, $ee430606400354b3$export$d40a35129aaff81f)(this, __KeyboardClickMixin_keyPressed, false, "f");
            return;
        }
        if (e.key === " " || allowEnter && e.key === "Enter") (0, $ee430606400354b3$export$d40a35129aaff81f)(this, __KeyboardClickMixin_keyPressed, true, "f");
    }, __KeyboardClickMixin_handleKeyUp = function __KeyboardClickMixin_handleKeyUp(e) {
        if (e.target !== e.currentTarget || $2795e4e0258f7c7d$export$8db646b38f27adce(this) && this.disabled || $2795e4e0258f7c7d$export$ef6ef51d21411889(this) && this.disabledInteractive || !(0, $ee430606400354b3$export$d5dcaf168c640c35)(this, __KeyboardClickMixin_keyPressed, "f")) {
            (0, $ee430606400354b3$export$d40a35129aaff81f)(this, __KeyboardClickMixin_keyPressed, false, "f");
            return;
        }
        (0, $ee430606400354b3$export$d40a35129aaff81f)(this, __KeyboardClickMixin_keyPressed, false, "f");
        // NOTE: the dispatched click event will not be trusted since it is synthetic.
        this.dispatchEvent(new MouseEvent("click", {
            cancelable: true,
            bubbles: true,
            composed: true
        }));
    };
    return _KeyboardClickMixin;
}
/** A symbol through which to access a function used to render a pseudo link. */ const $2795e4e0258f7c7d$export$6118a8e97d251010 = Symbol("renderPseudoLink");
/**
 * Determines whether a value is a `LinkButtonMixin`.
 * @param {unknown} value The value to test.
 * @returns {value is LinkButtonMixin} Whether `value` is a `LinkButtonMixin`.
 */ function $2795e4e0258f7c7d$export$f840425621b07716(value) {
    return $2795e4e0258f7c7d$export$b3cfaccc1b88e6cb(value, "download", "href", "rel", "target");
}
const $2795e4e0258f7c7d$var$_clickHandler = Symbol("_clickHandler");
/**
 * Mixin to augment an element with behavior that supports functioning as a link.
 * @template T The type of the base class.
 * @param {T} base The base class.
 * @param {boolean} [disableClick=false] Whether to disable the default click handler.
 * @returns {Constructor<LinkButtonMixin>} A constructor that implements `LinkButtonMixin`.
 */ function $2795e4e0258f7c7d$export$29d11c0fe2fc51d8(base, disableClick = false) {
    var __LinkButtonMixin_instances, __LinkButtonMixin_handleLinkPointerDown, __LinkButtonMixin_handleLinkFocus, __LinkButtonMixin_handleLinkBlur, _a;
    class _LinkButtonMixin extends base {
        /**
     * Whether the `target` of the link button will be downloaded,
     * optionally specifying the new name of the file.
     * @default null
     */ get download() {
            return this.getAttribute("download");
        }
        set download(value) {
            const old = this.download;
            if (old !== value) {
                if (value) this.setAttribute("download", value);
                else this.removeAttribute("download");
                this.requestUpdate("download", old);
            }
        }
        /** @inheritdoc */ connectedCallback() {
            super.connectedCallback();
            if (!disableClick) this.addEventListener("click", this[$2795e4e0258f7c7d$var$_clickHandler]);
            if (this.hasAttribute("href") && this.role === "button") this.role = "link";
        }
        /** @inheritdoc */ disconnectedCallback() {
            super.disconnectedCallback();
            if (!disableClick) this.removeEventListener("click", this[$2795e4e0258f7c7d$var$_clickHandler]);
        }
        /** @internal */ [(__LinkButtonMixin_instances = new WeakSet(), _a = $2795e4e0258f7c7d$var$_clickHandler, $2795e4e0258f7c7d$export$6118a8e97d251010)]() {
            const disabled = $2795e4e0258f7c7d$export$8db646b38f27adce(this) && this.disabled;
            const disabledInteractive = $2795e4e0258f7c7d$export$ef6ef51d21411889(this) && this.disabledInteractive;
            return !disabled && !disabledInteractive && this.href ? (0, $5e4f263f2dad39fc$export$c0bb0b647f701bb5)($2795e4e0258f7c7d$var$t || ($2795e4e0258f7c7d$var$t = $2795e4e0258f7c7d$var$_`<a href="${0}" target="${0}" rel="${0}" download="${0}" tabindex="-1" aria-hidden="true" @pointerdown="${0}" @focus="${0}" @blur="${0}"></a>`), this.href, (0, $bc84d556abb824e4$export$f68dd208b5df064d)(this.target || undefined), (0, $bc84d556abb824e4$export$f68dd208b5df064d)(this.rel || undefined), (0, $bc84d556abb824e4$export$f68dd208b5df064d)(this.download || undefined), (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, __LinkButtonMixin_instances, "m", __LinkButtonMixin_handleLinkPointerDown), (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, __LinkButtonMixin_instances, "m", __LinkButtonMixin_handleLinkFocus), (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, __LinkButtonMixin_instances, "m", __LinkButtonMixin_handleLinkBlur)) : (0, $5e4f263f2dad39fc$export$45b790e32b2810ee);
        }
        constructor(){
            super(...arguments);
            __LinkButtonMixin_instances.add(this);
            this[_a] = async (e)=>{
                if ($2795e4e0258f7c7d$export$ef6ef51d21411889(this) && this.disabledInteractive) {
                    e.preventDefault();
                    e.stopPropagation();
                }
                await new Promise((resolve)=>resolve());
                if (e.defaultPrevented) return;
                if (this.href) {
                    e.preventDefault();
                    e.stopImmediatePropagation();
                    const link = document.createElement("a");
                    link.href = this.href;
                    link.rel = this.rel;
                    link.target = this.target;
                    if (this.download != null) link.download = this.download;
                    link.addEventListener("click", async ()=>{
                        await new Promise((resolve)=>resolve());
                        link.remove();
                    });
                    document.body.appendChild(link);
                    link.click();
                }
            };
            /**
       * The URL to which the link button points.
       * @default ""
       */ this.href = "";
            /**
       * The target of the link button.
       * @default ""
       */ this.target = "";
            /**
       * The relationship between the `target` of the link button and the document.
       * @default ""
       */ this.rel = "";
        }
    }
    __LinkButtonMixin_handleLinkPointerDown = function __LinkButtonMixin_handleLinkPointerDown(e) {
        if (e.button !== 2) // Preventing default cancel's link activation but will not cancel click.
        e.preventDefault();
        else e.target.removeAttribute("aria-hidden");
    }, __LinkButtonMixin_handleLinkFocus = function __LinkButtonMixin_handleLinkFocus(e) {
        e.target.blur();
        this.focus();
    }, __LinkButtonMixin_handleLinkBlur = function __LinkButtonMixin_handleLinkBlur(e) {
        e.target.setAttribute("aria-hidden", "true");
    };
    (0, $ee430606400354b3$export$29e00dfd3077644b)([
        (0, $e48c8bdf0d6f523c$export$d541bacb2bda4494)()
    ], _LinkButtonMixin.prototype, "href", void 0);
    (0, $ee430606400354b3$export$29e00dfd3077644b)([
        (0, $e48c8bdf0d6f523c$export$d541bacb2bda4494)()
    ], _LinkButtonMixin.prototype, "target", void 0);
    (0, $ee430606400354b3$export$29e00dfd3077644b)([
        (0, $e48c8bdf0d6f523c$export$d541bacb2bda4494)()
    ], _LinkButtonMixin.prototype, "rel", void 0);
    (0, $ee430606400354b3$export$29e00dfd3077644b)([
        (0, $e48c8bdf0d6f523c$export$d541bacb2bda4494)({
            reflect: false
        })
    ], _LinkButtonMixin.prototype, "download", null);
    return _LinkButtonMixin;
}
/**
 * Determines whether a value is a `ReadOnlyMixin`.
 * @param {unknown} value The value to test.
 * @returns Whether `value` is a `ReadOnlyMixin`.
 */ function $2795e4e0258f7c7d$export$4204e5f5cae6a57a(value) {
    return $2795e4e0258f7c7d$export$b3cfaccc1b88e6cb(value, "readOnly");
}
/**
 * Mixin to augment an element with behavior that supports a read-only state.
 * @template T The type of the base class.
 * @param {T} base The base class.
 * @param {boolean} reflect Whether the read-only state is reflected as an attribute. The default value is `true`.
 * @returns {Constructor<ReadOnlyMixin> & T} A constructor that implements `ReadOnlyMixin`.
 */ function $2795e4e0258f7c7d$export$f9d9eb730174736(base, reflect = true) {
    class _ReadOnlyMixin extends base {
        /** @inheritdoc */ update(changedProperties) {
            super.update(changedProperties);
            if (changedProperties.has("readOnly")) this.ariaReadOnly = this.readOnly ? "true" : null;
        }
        constructor(){
            super(...arguments);
            /**
       * Whether the element is read-only.
       * @default false
       */ this.readOnly = false;
        }
    }
    (0, $ee430606400354b3$export$29e00dfd3077644b)([
        (0, $e48c8bdf0d6f523c$export$d541bacb2bda4494)({
            attribute: "readonly",
            type: Boolean,
            reflect: reflect
        })
    ], _ReadOnlyMixin.prototype, "readOnly", void 0);
    return _ReadOnlyMixin;
}
const $2795e4e0258f7c7d$var$_wasConnected = Symbol("_wasConnected");
/**
 * Mixin to augment an element with behavior that supports reconnection logic.
 * @template T The type of the base class.
 * @param {T} base The base class.
 * @returns {Constructor<ReconnectedCallbackMixin> & T} A constructor that implements `ReconnectedCallbackMixin`.
 */ function $2795e4e0258f7c7d$export$625d28f11806c030(base) {
    var _a;
    class _ReconnectedCallbackMixin extends base {
        /** @inheritdoc */ reconnectedCallback() {}
        /** @inheritdoc */ connectedCallback() {
            super.connectedCallback();
            if (this[$2795e4e0258f7c7d$var$_wasConnected]) this.reconnectedCallback();
        }
        /** @inheritdoc */ disconnectedCallback() {
            super.disconnectedCallback();
            this[$2795e4e0258f7c7d$var$_wasConnected] = true;
        }
        constructor(){
            super(...arguments);
            /** @private */ this[_a] = false;
        }
    }
    _a = $2795e4e0258f7c7d$var$_wasConnected;
    return _ReconnectedCallbackMixin;
}
/**
 * Determines whether a value is a `RequiredMixin`.
 * @param {unknown} value The value to test.
 * @returns Whether `value` is a `RequiredMixin`.
 */ function $2795e4e0258f7c7d$export$9cd74388a5907c0e(value) {
    return $2795e4e0258f7c7d$export$b3cfaccc1b88e6cb(value, "required", "optional");
}
/**
 * Mixin to augment an element with behavior that supports a required state.
 * @template T The type of the base class.
 * @param {T} base The base class.
 * @param {boolean} [supportsAria=true] Whether ARIA is supported.
 * @returns {Constructor<RequiredMixin> & T} A constructor that implements `RequiredMixin`.
 */ function $2795e4e0258f7c7d$export$1788c381af06add2(base, supportsAria = true) {
    class _RequiredMixin extends base {
        /** Whether a value is not required for the element. */ get optional() {
            return !this.required;
        }
        /** @inheritdoc */ update(changedProperties) {
            super.update(changedProperties);
            if (changedProperties.has("required") && supportsAria) this.ariaRequired = `${this.required}`;
        }
        constructor(){
            super(...arguments);
            /**
       * Whether a value is required for the element.
       * @default false
       */ this.required = false;
        }
    }
    (0, $ee430606400354b3$export$29e00dfd3077644b)([
        (0, $e48c8bdf0d6f523c$export$d541bacb2bda4494)({
            type: Boolean,
            reflect: true
        })
    ], _RequiredMixin.prototype, "required", void 0);
    return _RequiredMixin;
}
/**
 * Determines whether a value is a `RequiredConstraintValidationMixin`.
 * @param {unknown} value The value to test.
 * @returns Whether `value` is a `RequiredConstraintValidationMixin`.
 */ function $2795e4e0258f7c7d$export$54d36338059db51b(value) {
    return $2795e4e0258f7c7d$export$9cd74388a5907c0e(value) && $2795e4e0258f7c7d$export$f10b21c67db60ec2(value);
}
/**
 * Mixin to augment an element with behavior that supports a required state.
 * @template T The type of the base class.
 * @param {T} base The base class.
 * @returns {Constructor<RequiredConstraintValidationMixin> & T} A constructor that implements `RequiredConstraintValidationMixin`.
 */ function $2795e4e0258f7c7d$export$ee0f44bbbd6c6cc1(base) {
    class _RequiredConstraintValidation extends base {
        /** @internal */ [$2795e4e0258f7c7d$export$a22775fa5e2eebd9]() {
            const validity = super[$2795e4e0258f7c7d$export$a22775fa5e2eebd9]();
            if (!validity && this.required) {
                if ($2795e4e0258f7c7d$export$be0c43499cc6393e(this) && !this.checked) return {
                    valueMissing: true
                };
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                if (!this.value) return {
                    valueMissing: true
                };
            }
            return validity;
        }
    }
    return _RequiredConstraintValidation;
}
/**
 * Mixin to augment an element with an ARIA role.
 * @template T The type of the base class.
 * @param {T} base The base class.
 * @param {ARIARole} role The ARIA role.
 * @returns {Constructor & T} A constructor that implements focusable behavior.
 */ function $2795e4e0258f7c7d$export$46919bad18fb2f76(base, role) {
    class _RoleMixin extends base {
        /** @inheritdoc */ connectedCallback() {
            this.role = this.role || role;
            super.connectedCallback();
        }
    }
    return _RoleMixin;
}
/** A symbol used to define the function called to resume animation. */ const $2795e4e0258f7c7d$export$6a16bd88582773fd = Symbol("resumeAnimation");
/**
 * Mixin to augment an element with behavior that suppresses initial animations.
 * @template T The type of the base class.
 * @param {T} base The base class.
 * @returns {Constructor<SuppressInitialAnimationMixin> & T} A constructor that implements initial animation suppression.
 */ function $2795e4e0258f7c7d$export$7478c9754756300(base) {
    class _SuppressInitialAnimation extends base {
        connectedCallback() {
            super.connectedCallback();
            $2795e4e0258f7c7d$export$ddd0a0ac12dd84d8(this, "--no-animate");
            this[$2795e4e0258f7c7d$export$6a16bd88582773fd]();
        }
        /** @internal */ [$2795e4e0258f7c7d$export$6a16bd88582773fd]() {
            requestAnimationFrame(()=>$2795e4e0258f7c7d$export$eda34dc61103d62e(this, "--no-animate"));
        }
    }
    return _SuppressInitialAnimation;
}
/**
 * Determines whether a value is a `VerticalMixin`.
 * @param {unknown} value The value to test.
 * @returns Whether `value` is a `VerticalMixin`.
 */ function $2795e4e0258f7c7d$export$e19221ce99b6a135(value) {
    return $2795e4e0258f7c7d$export$b3cfaccc1b88e6cb(value, "vertical");
}
/**
 * Mixin to augment an element with behavior that supports a vertical orientation.
 * @template T The type of the base class.
 * @param {T} base The base class.
 * @returns {Constructor<VerticalMixin> & T} A constructor that implements `VerticalMixin`.
 */ function $2795e4e0258f7c7d$export$fbd5e94d16e21e4d(base) {
    class _VerticalMixin extends base {
        /** @inheritdoc */ update(changedProperties) {
            super.update(changedProperties);
            if (changedProperties.has("vertical")) this.ariaOrientation = this.vertical ? "vertical" : "horizontal";
        }
        constructor(){
            super(...arguments);
            /**
       * Whether the element is oriented vertically.
       * @default false
       */ this.vertical = false;
        }
    }
    (0, $ee430606400354b3$export$29e00dfd3077644b)([
        (0, $e48c8bdf0d6f523c$export$d541bacb2bda4494)({
            type: Boolean,
            reflect: true
        })
    ], _VerticalMixin.prototype, "vertical", void 0);
    return _VerticalMixin;
}
var $2795e4e0258f7c7d$var$_ActionElementBase_clickHandler;
/**
 * A base implementation for an element, nested within a clickable element, used to
 * perform an action. This class must be inherited.
 */ class $2795e4e0258f7c7d$export$f87b6e31e5c1d231 extends (0, $08f2bff00ea64ee4$export$3f2f9f5909897157) {
    /** @inheritdoc */ connectedCallback() {
        var _this_parentElement;
        super.connectedCallback();
        (_this_parentElement = this.parentElement) === null || _this_parentElement === void 0 ? void 0 : _this_parentElement.addEventListener("click", (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_ActionElementBase_clickHandler, "f"));
    }
    /** @inheritdoc */ disconnectedCallback() {
        var _this_parentElement;
        super.disconnectedCallback();
        (_this_parentElement = this.parentElement) === null || _this_parentElement === void 0 ? void 0 : _this_parentElement.removeEventListener("click", (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_ActionElementBase_clickHandler, "f"));
    }
    /** @inheritdoc */ render() {
        return (0, $5e4f263f2dad39fc$export$c0bb0b647f701bb5)($2795e4e0258f7c7d$var$t1 || ($2795e4e0258f7c7d$var$t1 = $2795e4e0258f7c7d$var$_`<slot></slot>`));
    }
    constructor(){
        super(...arguments);
        /** @private */ $2795e4e0258f7c7d$var$_ActionElementBase_clickHandler.set(this, (e)=>{
            if (!e.defaultPrevented) this._onClick(e);
        });
    }
}
$2795e4e0258f7c7d$var$_ActionElementBase_clickHandler = new WeakMap();
/** The styles of the element. */ $2795e4e0258f7c7d$export$f87b6e31e5c1d231.styles = (0, $c60305268e0a629a$export$dbf350e5966cf602)($2795e4e0258f7c7d$var$t2 || ($2795e4e0258f7c7d$var$t2 = $2795e4e0258f7c7d$var$_`:host { display: contents; } ::slotted(.material-icons) { font-size: inherit !important; }`));
/**
 * Determines whether a value is a `CollapsibleOrientation`.
 * @param {unknown} value The value to test.
 * @returns Whether `value` is a `CollapsibleOrientation`.
 */ function $2795e4e0258f7c7d$export$bac15b66c2c4213b(value) {
    return value === "vertical" || value === "horizontal" || value === "both";
}
/* eslint-disable @typescript-eslint/no-unsafe-declaration-merging */ var $2795e4e0258f7c7d$var$_M3eCollapsibleElement_instances, $2795e4e0258f7c7d$var$_M3eCollapsibleElement_slotChanged, $2795e4e0258f7c7d$var$_M3eCollapsibleElement_hasOpened, $2795e4e0258f7c7d$var$_M3eCollapsibleElement_applyOrientation, $2795e4e0258f7c7d$var$_M3eCollapsibleElement_handleSlotChange, $2795e4e0258f7c7d$var$_M3eCollapsibleElement_autoSize, $2795e4e0258f7c7d$var$_M3eCollapsibleElement_clearSize, $2795e4e0258f7c7d$var$_M3eCollapsibleElement_actualSize;
/**
 * A container used to expand and collapse content.
 *
 * @example
 * ```html
 * <m3e-collapsible>
 *  <!-- Collapsible content -->
 * </m3e-collapsible>
 * ```
 *
 * @tag m3e-collapsible
 *
 * @slot - Renders the collapsible content.
 *
 * @attr open - Whether content is visible.
 * @attr orientation - Orientation of collapsible content.
 * @attr no-animate - Whether to disable animation.
 *
 * @fires opening - Dispatched when the collapsible begins to open.
 * @fires opened - Dispatched when the collapsible has opened.
 * @fires closing - Dispatched when the collapsible begins to close.
 * @fires closed - Dispatched when the collapsible has closed.
 *
 * @cssprop --m3e-collapsible-animation-duration - The duration of the expand / collapse animation.
 */ let $2795e4e0258f7c7d$export$5dbbfb77a67b0a06 = class M3eCollapsibleElement extends $2795e4e0258f7c7d$export$282c9fa792fbac93((0, $08f2bff00ea64ee4$export$3f2f9f5909897157)) {
    /** @inheritdoc */ connectedCallback() {
        super.connectedCallback();
        (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_M3eCollapsibleElement_instances, "m", $2795e4e0258f7c7d$var$_M3eCollapsibleElement_applyOrientation).call(this);
    }
    /** @inheritdoc */ willUpdate(_changedProperties) {
        super.willUpdate(_changedProperties);
        if (_changedProperties.has("orientation")) (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_M3eCollapsibleElement_instances, "m", $2795e4e0258f7c7d$var$_M3eCollapsibleElement_applyOrientation).call(this);
    }
    /** @inheritdoc */ update(changedProperties) {
        super.update(changedProperties);
        const noAnimate = this.noAnimate || changedProperties.has("orientation") && !changedProperties.has("open");
        $2795e4e0258f7c7d$export$ddd0a0ac12dd84d8(this, "--no-animate");
        if (!(0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_M3eCollapsibleElement_slotChanged, "f")) {
            if (this.open) {
                (0, $ee430606400354b3$export$d40a35129aaff81f)(this, $2795e4e0258f7c7d$var$_M3eCollapsibleElement_hasOpened, true, "f");
                (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_M3eCollapsibleElement_instances, "m", $2795e4e0258f7c7d$var$_M3eCollapsibleElement_autoSize).call(this);
            }
            (0, $ee430606400354b3$export$d40a35129aaff81f)(this, $2795e4e0258f7c7d$var$_M3eCollapsibleElement_slotChanged, true, "f");
            return;
        }
        this.toggleAttribute("inert", !this.open);
        if (this.open) {
            (0, $ee430606400354b3$export$d40a35129aaff81f)(this, $2795e4e0258f7c7d$var$_M3eCollapsibleElement_hasOpened, true, "f");
            if (!(noAnimate || $2795e4e0258f7c7d$export$ff7706047246b98b())) {
                (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_M3eCollapsibleElement_instances, "m", $2795e4e0258f7c7d$var$_M3eCollapsibleElement_autoSize).call(this);
                $2795e4e0258f7c7d$export$a6b7fbc1acf03e5b(this, "--overflows", this.orientation === "vertical" ? this.clientHeight < this.scrollHeight : this.orientation === "horizontal" ? this.clientWidth < this.scrollWidth : this.clientHeight < this.scrollHeight || this.clientWidth < this.scrollWidth);
                (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_M3eCollapsibleElement_instances, "m", $2795e4e0258f7c7d$var$_M3eCollapsibleElement_clearSize).call(this);
            }
            $2795e4e0258f7c7d$export$eda34dc61103d62e(this, "--closing");
            $2795e4e0258f7c7d$export$ddd0a0ac12dd84d8(this, "--opening");
            this.dispatchEvent(new Event("opening"));
            (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_M3eCollapsibleElement_instances, "m", $2795e4e0258f7c7d$var$_M3eCollapsibleElement_clearSize).call(this);
            $2795e4e0258f7c7d$export$eda34dc61103d62e(this, "--no-animate");
            (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_M3eCollapsibleElement_instances, "m", $2795e4e0258f7c7d$var$_M3eCollapsibleElement_actualSize).call(this);
            if (noAnimate || $2795e4e0258f7c7d$export$ff7706047246b98b()) {
                (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_M3eCollapsibleElement_instances, "m", $2795e4e0258f7c7d$var$_M3eCollapsibleElement_autoSize).call(this);
                $2795e4e0258f7c7d$export$eda34dc61103d62e(this, "--opening");
                this.dispatchEvent(new Event("opened"));
            } else this.addEventListener("transitionend", ()=>{
                if (this.open) {
                    (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_M3eCollapsibleElement_instances, "m", $2795e4e0258f7c7d$var$_M3eCollapsibleElement_autoSize).call(this);
                    $2795e4e0258f7c7d$export$eda34dc61103d62e(this, "--opening");
                    this.dispatchEvent(new Event("opened"));
                }
            }, {
                once: true
            });
        } else {
            $2795e4e0258f7c7d$export$eda34dc61103d62e(this, "--opening");
            $2795e4e0258f7c7d$export$ddd0a0ac12dd84d8(this, "--closing");
            this.dispatchEvent(new Event("closing"));
            (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_M3eCollapsibleElement_instances, "m", $2795e4e0258f7c7d$var$_M3eCollapsibleElement_actualSize).call(this);
            if ((0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_M3eCollapsibleElement_hasOpened, "f")) $2795e4e0258f7c7d$export$eda34dc61103d62e(this, "--no-animate");
            if (noAnimate || $2795e4e0258f7c7d$export$ff7706047246b98b()) {
                (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_M3eCollapsibleElement_instances, "m", $2795e4e0258f7c7d$var$_M3eCollapsibleElement_clearSize).call(this);
                $2795e4e0258f7c7d$export$eda34dc61103d62e(this, "--closing");
                this.dispatchEvent(new Event("closed"));
            } else requestAnimationFrame(()=>{
                (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_M3eCollapsibleElement_instances, "m", $2795e4e0258f7c7d$var$_M3eCollapsibleElement_clearSize).call(this);
                this.addEventListener("transitionend", ()=>{
                    if (!this.open) {
                        $2795e4e0258f7c7d$export$eda34dc61103d62e(this, "--closing");
                        this.dispatchEvent(new Event("closed"));
                    }
                }, {
                    once: true
                });
            });
        }
    }
    /** @inheritdoc */ render() {
        return (0, $5e4f263f2dad39fc$export$c0bb0b647f701bb5)($2795e4e0258f7c7d$var$t3 || ($2795e4e0258f7c7d$var$t3 = $2795e4e0258f7c7d$var$_`<slot @slotchange="${0}"></slot>`), (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_M3eCollapsibleElement_instances, "m", $2795e4e0258f7c7d$var$_M3eCollapsibleElement_handleSlotChange));
    }
    constructor(){
        super(...arguments);
        $2795e4e0258f7c7d$var$_M3eCollapsibleElement_instances.add(this);
        /** @private */ $2795e4e0258f7c7d$var$_M3eCollapsibleElement_slotChanged.set(this, false);
        /** @private */ $2795e4e0258f7c7d$var$_M3eCollapsibleElement_hasOpened.set(this, false);
        /**
     * Whether content is visible.
     * @default false
     */ this.open = false;
        /**
     * Orientation of collapsible content.
     * @default "vertical"
     */ this.orientation = "vertical";
        /**
     * Whether to disable animation.
     * @default false
     */ this.noAnimate = false;
    }
};
$2795e4e0258f7c7d$var$_M3eCollapsibleElement_slotChanged = new WeakMap();
$2795e4e0258f7c7d$var$_M3eCollapsibleElement_hasOpened = new WeakMap();
$2795e4e0258f7c7d$var$_M3eCollapsibleElement_instances = new WeakSet();
$2795e4e0258f7c7d$var$_M3eCollapsibleElement_applyOrientation = function _M3eCollapsibleElement_applyOrientation() {
    if (!$2795e4e0258f7c7d$export$bac15b66c2c4213b(this.orientation)) this.orientation = "horizontal";
    $2795e4e0258f7c7d$export$14685f959036e909(this, this.orientation, "both", "horizontal", "vertical");
};
$2795e4e0258f7c7d$var$_M3eCollapsibleElement_handleSlotChange = function _M3eCollapsibleElement_handleSlotChange() {
    (0, $ee430606400354b3$export$d40a35129aaff81f)(this, $2795e4e0258f7c7d$var$_M3eCollapsibleElement_slotChanged, true, "f");
};
$2795e4e0258f7c7d$var$_M3eCollapsibleElement_autoSize = function _M3eCollapsibleElement_autoSize() {
    switch(this.orientation){
        case "vertical":
            this.style.height = "auto";
            break;
        case "horizontal":
            this.style.width = "auto";
            break;
        case "both":
            this.style.height = this.style.width = "auto";
            break;
    }
};
$2795e4e0258f7c7d$var$_M3eCollapsibleElement_clearSize = function _M3eCollapsibleElement_clearSize() {
    switch(this.orientation){
        case "vertical":
            this.style.height = "";
            break;
        case "horizontal":
            this.style.width = "";
            break;
        case "both":
            this.style.height = this.style.width = "";
            break;
    }
};
$2795e4e0258f7c7d$var$_M3eCollapsibleElement_actualSize = function _M3eCollapsibleElement_actualSize() {
    switch(this.orientation){
        case "vertical":
            this.style.height = `${this.scrollHeight}px`;
            break;
        case "horizontal":
            this.style.width = `${this.scrollWidth}px`;
            break;
        case "both":
            this.style.height = `${this.scrollHeight}px`;
            this.style.width = `${this.scrollWidth}px`;
            break;
    }
};
/** The styles of the element. */ $2795e4e0258f7c7d$export$5dbbfb77a67b0a06.styles = (0, $c60305268e0a629a$export$dbf350e5966cf602)($2795e4e0258f7c7d$var$t4 || ($2795e4e0258f7c7d$var$t4 = $2795e4e0258f7c7d$var$_`:host { display: block; overflow: hidden; } :host([hidden]) { display: none; } :host(:is(:state(--vertical), :--vertical)) { height: 0px; transition: ${0}; } :host(:is(:state(--horizontal), :--horizontal)) { width: 0px; transition: ${0}; } :host([orientation="both"]) { height: 0px; width: 0px; transition: ${0}; } :host(:not(:is(:state(--closing), :--closing)):not([open])) { visibility: hidden; } :host(:is(:state(--vertical), :--vertical):not([open])) { min-height: unset !important; padding-top: 0px !important; padding-bottom: 0px !important; } :host(:is(:state(--horizontal), :--horizontal):not([open])) { min-width: unset !important; padding-left: 0px !important; padding-right: 0px !important; } :host([orientation="both"]:not([open])) { min-height: unset !important; min-width: unset !important; padding: 0px !important; } :host([no-animate]), :host(:is(:state(--no-animate), :--no-animate)) { transition-duration: 0ms; } :host(:is(:state(--vertical), :--vertical):is(:state(--opening), :--opening)), :host(:is(:state(--vertical), :--vertical):is(:state(--closing), :--closing)) { overflow-y: hidden !important; } :host(:is(:state(--horizontal), :--horizontal):is(:state(--opening), :--opening)), :host(:is(:state(--horizontal), :--horizontal):is(:state(--closing), :--closing)) { overflow-x: hidden !important; } :host([orientation="both"]:is(:state(--opening), :--opening)), :host([orientation="both"]:is(:state(--closing), :--closing)) { overflow-y: hidden !important; overflow-x: hidden !important; } :host(:is(:state(--overflows), :--overflows)) { scrollbar-gutter: stable; } ::slotted(*) { --m3e-collapsible-animation-duration: initial; } @media (prefers-reduced-motion) { :host { transition: none; } }`), (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`visibility var(--m3e-collapsible-animation-duration, ${$2795e4e0258f7c7d$export$b6ce77d07cd22443.motion.duration.medium1})
          ${$2795e4e0258f7c7d$export$b6ce77d07cd22443.motion.easing.standard},
        height var(--m3e-collapsible-animation-duration, ${$2795e4e0258f7c7d$export$b6ce77d07cd22443.motion.duration.medium1})
          ${$2795e4e0258f7c7d$export$b6ce77d07cd22443.motion.easing.standard},
        padding-top var(--m3e-collapsible-animation-duration, ${$2795e4e0258f7c7d$export$b6ce77d07cd22443.motion.duration.medium1})
          ${$2795e4e0258f7c7d$export$b6ce77d07cd22443.motion.easing.standard},
        padding-bottom var(--m3e-collapsible-animation-duration, ${$2795e4e0258f7c7d$export$b6ce77d07cd22443.motion.duration.medium1})
          ${$2795e4e0258f7c7d$export$b6ce77d07cd22443.motion.easing.standard}`), (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`visibility var(--m3e-collapsible-animation-duration, ${$2795e4e0258f7c7d$export$b6ce77d07cd22443.motion.duration.medium1})
          ${$2795e4e0258f7c7d$export$b6ce77d07cd22443.motion.easing.standard},
        width var(--m3e-collapsible-animation-duration, ${$2795e4e0258f7c7d$export$b6ce77d07cd22443.motion.duration.medium1})
          ${$2795e4e0258f7c7d$export$b6ce77d07cd22443.motion.easing.standard},
        padding-left var(--m3e-collapsible-animation-duration, ${$2795e4e0258f7c7d$export$b6ce77d07cd22443.motion.duration.medium1})
          ${$2795e4e0258f7c7d$export$b6ce77d07cd22443.motion.easing.standard},
        padding-right var(--m3e-collapsible-animation-duration, ${$2795e4e0258f7c7d$export$b6ce77d07cd22443.motion.duration.medium1})
          ${$2795e4e0258f7c7d$export$b6ce77d07cd22443.motion.easing.standard}`), (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`visibility var(--m3e-collapsible-animation-duration, ${$2795e4e0258f7c7d$export$b6ce77d07cd22443.motion.duration.medium1})
          ${$2795e4e0258f7c7d$export$b6ce77d07cd22443.motion.easing.standard},
        width var(--m3e-collapsible-animation-duration, ${$2795e4e0258f7c7d$export$b6ce77d07cd22443.motion.duration.medium1})
          ${$2795e4e0258f7c7d$export$b6ce77d07cd22443.motion.easing.standard},
        height var(--m3e-collapsible-animation-duration, ${$2795e4e0258f7c7d$export$b6ce77d07cd22443.motion.duration.medium1})
          ${$2795e4e0258f7c7d$export$b6ce77d07cd22443.motion.easing.standard},
        padding var(--m3e-collapsible-animation-duration, ${$2795e4e0258f7c7d$export$b6ce77d07cd22443.motion.duration.medium1})
          ${$2795e4e0258f7c7d$export$b6ce77d07cd22443.motion.easing.standard}`));
(0, $ee430606400354b3$export$29e00dfd3077644b)([
    (0, $e48c8bdf0d6f523c$export$d541bacb2bda4494)({
        type: Boolean,
        reflect: true
    })
], $2795e4e0258f7c7d$export$5dbbfb77a67b0a06.prototype, "open", void 0);
(0, $ee430606400354b3$export$29e00dfd3077644b)([
    (0, $e48c8bdf0d6f523c$export$d541bacb2bda4494)({
        reflect: true,
        useDefault: true
    })
], $2795e4e0258f7c7d$export$5dbbfb77a67b0a06.prototype, "orientation", void 0);
(0, $ee430606400354b3$export$29e00dfd3077644b)([
    (0, $e48c8bdf0d6f523c$export$d541bacb2bda4494)({
        attribute: "no-animate",
        type: Boolean,
        reflect: true
    })
], $2795e4e0258f7c7d$export$5dbbfb77a67b0a06.prototype, "noAnimate", void 0);
$2795e4e0258f7c7d$export$5dbbfb77a67b0a06 = (0, $ee430606400354b3$export$29e00dfd3077644b)([
    $2795e4e0258f7c7d$export$da64fc29f17f9d0e("m3e-collapsible")
], $2795e4e0258f7c7d$export$5dbbfb77a67b0a06);
/**
 * Determines whether a value is an `ElevationLevel`.
 * @param {unknown} value The value to test.
 * @returns Whether `value` is an `ElevationLevel`.
 */ function $2795e4e0258f7c7d$export$43d4ac3c28272df5(value) {
    return value === 0 || value === 1 || value === 2 || value === 3 || value === 4 || value === 5;
}
/**
 * Component design tokens that control the `M3eElevationElement`.
 * @internal
 */ const $2795e4e0258f7c7d$var$ElevationToken = {
    liftDuration: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-elevation-lift-duration, ${$2795e4e0258f7c7d$export$b6ce77d07cd22443.motion.duration.short4})`),
    liftEasing: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-elevation-lift-easing, ${$2795e4e0258f7c7d$export$b6ce77d07cd22443.motion.easing.standard})`),
    settleDuration: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-elevation-settle-duration, ${$2795e4e0258f7c7d$export$b6ce77d07cd22443.motion.duration.short3})`),
    settleEasing: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-elevation-settle-easing, ${$2795e4e0258f7c7d$export$b6ce77d07cd22443.motion.easing.standardAccelerate})`),
    level: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-elevation-level, ${$2795e4e0258f7c7d$export$b6ce77d07cd22443.elevation.level0})`),
    hoverLevel: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-elevation-hover-level, ${$2795e4e0258f7c7d$export$b6ce77d07cd22443.elevation.level0})`),
    focusLevel: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-elevation-focus-level, ${$2795e4e0258f7c7d$export$b6ce77d07cd22443.elevation.level0})`),
    pressedLevel: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-elevation-pressed-level, ${$2795e4e0258f7c7d$export$b6ce77d07cd22443.elevation.level0})`)
};
var $2795e4e0258f7c7d$var$_M3eElevationElement_instances, $2795e4e0258f7c7d$var$_M3eElevationElement_hoverController, $2795e4e0258f7c7d$var$_M3eElevationElement_focusController, $2795e4e0258f7c7d$var$_M3eElevationElement_pressedController, $2795e4e0258f7c7d$var$_M3eElevationElement_handleHoverChange, $2795e4e0258f7c7d$var$_M3eElevationElement_handleFocusChange, $2795e4e0258f7c7d$var$_M3eElevationElement_handlePressedChange;
/**
 * Visually depicts elevation using a shadow.
 *
 * @description
 * The `m3e-elevation` component is an absolute positioned element used to depict elevation using a shadow.
 * The parenting element must be a relative positioned element and allow for overflow. Use the `level` attribute
 * to specify the elevation level.
 *
 * The component can also be attached to another element using the `for` attribute.  When attached, elevation will
 * be lifted by 1 level on hover. This can be disabled using the `disabled` attribute.
 *
 * Alternatively, use the `attach` and `detach` methods to programmatically attach and detach this element to another.
 *
 * @example
 * The following example illustrates basic markup. Note how the parenting element's position is `relative`. A parenting
 * element's position must be `relative` and overflow must be visible.
 *
 * ```html
 * <div style="position: relative;">
 *  <m3e-elevation level="1"></m3e-elevation>
 * <div>
 * ```
 * @example
 * The following example illustrates attaching elevation to an interactive element. In this example, the parenting div
 * is given an `id` referenced by `m3e-elevation` using the `for` attribute.  Note that `#myDiv` is not used when
 * specifying the attached element's identifier.  The `#` is inferred.
 *
 * ```html
 * <div id="myDiv" style="position: relative;">
 *  <m3e-elevation for="myDiv" level="1"></m3e-elevation>
 * <div>
 * ```
 *
 * @tag m3e-elevation
 *
 * @attr disabled - Whether hover and press events will not trigger changes in elevation, when attached to an interactive element.
 * @attr for - The identifier of the interactive control to which this element is attached.
 * @attr level - The level at which to visually depict elevation.
 *
 * @cssprop --m3e-elevation-color - Color used to depict elevation.
 * @cssprop --m3e-elevation-lift-duration - Duration when lifting.
 * @cssprop --m3e-elevation-lift-easing - Easing curve when lifting.
 * @cssprop --m3e-elevation-settle-duration - Duration when settling.
 * @cssprop --m3e-elevation-settle-easing - Easing curve when settling.
 * @cssprop --m3e-elevation-level - Elevation when resting (box-shadow).
 * @cssprop --m3e-elevation-hover-level - Elevation on hover (box-shadow).
 * @cssprop --m3e-elevation-focus-level - Elevation on focus (box-shadow).
 * @cssprop --m3e-elevation-pressed-level - Elevation on pressed (box-shadow).
 */ let $2795e4e0258f7c7d$export$b8d84cf1103e360e = class M3eElevationElement extends $2795e4e0258f7c7d$export$ccf21c713b2bbcbb($2795e4e0258f7c7d$export$46919bad18fb2f76((0, $08f2bff00ea64ee4$export$3f2f9f5909897157), "none")) {
    /** @inheritdoc */ attach(control) {
        super.attach(control);
        (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_M3eElevationElement_hoverController, "f").observe(control);
        (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_M3eElevationElement_focusController, "f").observe(control);
        (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_M3eElevationElement_pressedController, "f").observe(control);
    }
    /** @inheritdoc */ detach() {
        if (this.control) {
            (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_M3eElevationElement_hoverController, "f").unobserve(this.control);
            (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_M3eElevationElement_focusController, "f").unobserve(this.control);
            (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_M3eElevationElement_pressedController, "f").unobserve(this.control);
        }
        super.detach();
    }
    /** @inheritdoc */ connectedCallback() {
        this.ariaHidden = "true";
        super.connectedCallback();
    }
    /** @inheritdoc */ disconnectedCallback() {
        var _this__shadow, _this__shadow1, _this__shadow2, _this__shadow3;
        super.disconnectedCallback();
        (_this__shadow = this._shadow) === null || _this__shadow === void 0 ? void 0 : _this__shadow.classList.toggle("hover", false);
        (_this__shadow1 = this._shadow) === null || _this__shadow1 === void 0 ? void 0 : _this__shadow1.classList.toggle("focus", false);
        (_this__shadow2 = this._shadow) === null || _this__shadow2 === void 0 ? void 0 : _this__shadow2.classList.toggle("pressed", false);
        (_this__shadow3 = this._shadow) === null || _this__shadow3 === void 0 ? void 0 : _this__shadow3.classList.toggle("resting", false);
    }
    /** @inheritdoc */ willUpdate(_changedProperties) {
        super.willUpdate(_changedProperties);
        if (_changedProperties.has("level") && this.level !== null && !$2795e4e0258f7c7d$export$43d4ac3c28272df5(this.level)) this.level = null;
    }
    /** @inheritdoc */ updated(_changedProperties) {
        super.updated(_changedProperties);
        if (_changedProperties.has("disabled") && this.disabled) {
            var _this__shadow, _this__shadow1, _this__shadow2, _this__shadow3;
            (_this__shadow = this._shadow) === null || _this__shadow === void 0 ? void 0 : _this__shadow.classList.toggle("hover", false);
            (_this__shadow1 = this._shadow) === null || _this__shadow1 === void 0 ? void 0 : _this__shadow1.classList.toggle("focus", false);
            (_this__shadow2 = this._shadow) === null || _this__shadow2 === void 0 ? void 0 : _this__shadow2.classList.toggle("pressed", false);
            (_this__shadow3 = this._shadow) === null || _this__shadow3 === void 0 ? void 0 : _this__shadow3.classList.toggle("resting", true);
        }
    }
    /** @inheritdoc */ render() {
        return (0, $5e4f263f2dad39fc$export$c0bb0b647f701bb5)($2795e4e0258f7c7d$var$t5 || ($2795e4e0258f7c7d$var$t5 = $2795e4e0258f7c7d$var$_`<div class="shadow"></div>`));
    }
    constructor(){
        super(...arguments);
        $2795e4e0258f7c7d$var$_M3eElevationElement_instances.add(this);
        /** @private */ $2795e4e0258f7c7d$var$_M3eElevationElement_hoverController.set(this, new $2795e4e0258f7c7d$export$e97521e950437f92(this, {
            target: null,
            callback: (hovering)=>(0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_M3eElevationElement_instances, "m", $2795e4e0258f7c7d$var$_M3eElevationElement_handleHoverChange).call(this, hovering)
        }));
        /** @private */ $2795e4e0258f7c7d$var$_M3eElevationElement_focusController.set(this, new $2795e4e0258f7c7d$export$766c876d58dec02e(this, {
            target: null,
            callback: (focused)=>(0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_M3eElevationElement_instances, "m", $2795e4e0258f7c7d$var$_M3eElevationElement_handleFocusChange).call(this, focused)
        }));
        /** @private */ $2795e4e0258f7c7d$var$_M3eElevationElement_pressedController.set(this, new $2795e4e0258f7c7d$export$1351ab2eef382c23(this, {
            target: null,
            callback: (pressed)=>(0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_M3eElevationElement_instances, "m", $2795e4e0258f7c7d$var$_M3eElevationElement_handlePressedChange).call(this, pressed)
        }));
        /**
     * Whether hover and press events will not trigger changes in elevation, when attached to an interactive element.
     * @default false
     */ this.disabled = false;
        /**
     * The level at which to visually depict elevation.
     * @default null
     */ this.level = null;
    }
};
$2795e4e0258f7c7d$var$_M3eElevationElement_hoverController = new WeakMap();
$2795e4e0258f7c7d$var$_M3eElevationElement_focusController = new WeakMap();
$2795e4e0258f7c7d$var$_M3eElevationElement_pressedController = new WeakMap();
$2795e4e0258f7c7d$var$_M3eElevationElement_instances = new WeakSet();
$2795e4e0258f7c7d$var$_M3eElevationElement_handleHoverChange = function _M3eElevationElement_handleHoverChange(hovering) {
    if (!this.disabled) {
        var _this__shadow, _this__shadow1;
        (_this__shadow = this._shadow) === null || _this__shadow === void 0 ? void 0 : _this__shadow.classList.toggle("hover", hovering);
        (_this__shadow1 = this._shadow) === null || _this__shadow1 === void 0 ? void 0 : _this__shadow1.classList.toggle("resting", !hovering);
    }
};
$2795e4e0258f7c7d$var$_M3eElevationElement_handleFocusChange = function _M3eElevationElement_handleFocusChange(focused) {
    var _this__shadow;
    if (!this.disabled) (_this__shadow = this._shadow) === null || _this__shadow === void 0 ? void 0 : _this__shadow.classList.toggle("focus", focused);
};
$2795e4e0258f7c7d$var$_M3eElevationElement_handlePressedChange = function _M3eElevationElement_handlePressedChange(pressed) {
    var _this__shadow;
    if (!this.disabled) (_this__shadow = this._shadow) === null || _this__shadow === void 0 ? void 0 : _this__shadow.classList.toggle("pressed", pressed);
};
/** The styles of the element. */ $2795e4e0258f7c7d$export$b8d84cf1103e360e.styles = (0, $c60305268e0a629a$export$dbf350e5966cf602)($2795e4e0258f7c7d$var$t6 || ($2795e4e0258f7c7d$var$t6 = $2795e4e0258f7c7d$var$_`:host { display: block; } :host([hidden]) { display: none; } :host, .shadow { position: absolute; left: 0; top: 0; right: 0; bottom: 0; pointer-events: none; border-radius: inherit; } .shadow.resting, .shadow.focus, .shadow.pressed { will-change: box-shadow; transition: ${0}; } .shadow.hover { will-change: box-shadow; transition: ${0}; } .shadow { box-shadow: ${0}; } .shadow.focus { box-shadow: ${0}; } .shadow.hover { box-shadow: ${0}; } .shadow.pressed { box-shadow: ${0}; } :host([level="0"]) .shadow { --m3e-elevation-level: ${0}; --m3e-elevation-hover-level: ${0}; } :host([level="1"]) .shadow { --m3e-elevation-level: ${0}; --m3e-elevation-hover-level: ${0}; } :host([level="2"]) .shadow { --m3e-elevation-level: ${0}; --m3e-elevation-hover-level: ${0}; } :host([level="3"]) .shadow { --m3e-elevation-level: ${0}; --m3e-elevation-hover-level: ${0}; } :host([level="4"]) .shadow { --m3e-elevation-level: ${0}; --m3e-elevation-hover-level: ${0}; } :host([level="5"]) .shadow { --m3e-elevation-level: ${0}; --m3e-elevation-hover-level: ${0}; } :host([level]) .shadow { --m3e-elevation-focus-level: ${0}; --m3e-elevation-pressed-level: ${0}; } @media (prefers-reduced-motion) { .shadow.resting, .shadow.pressed, .shadow.focus, .shadow.hover { transition: none; } } @media (forced-colors: active) { .shadow { display: none; } }`), (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`box-shadow ${$2795e4e0258f7c7d$var$ElevationToken.settleDuration} ${$2795e4e0258f7c7d$var$ElevationToken.settleEasing};`), (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`box-shadow ${$2795e4e0258f7c7d$var$ElevationToken.liftDuration} ${$2795e4e0258f7c7d$var$ElevationToken.liftEasing};`), $2795e4e0258f7c7d$var$ElevationToken.level, $2795e4e0258f7c7d$var$ElevationToken.focusLevel, $2795e4e0258f7c7d$var$ElevationToken.hoverLevel, $2795e4e0258f7c7d$var$ElevationToken.pressedLevel, $2795e4e0258f7c7d$export$b6ce77d07cd22443.elevation.level0, $2795e4e0258f7c7d$export$b6ce77d07cd22443.elevation.level1, $2795e4e0258f7c7d$export$b6ce77d07cd22443.elevation.level1, $2795e4e0258f7c7d$export$b6ce77d07cd22443.elevation.level2, $2795e4e0258f7c7d$export$b6ce77d07cd22443.elevation.level2, $2795e4e0258f7c7d$export$b6ce77d07cd22443.elevation.level3, $2795e4e0258f7c7d$export$b6ce77d07cd22443.elevation.level3, $2795e4e0258f7c7d$export$b6ce77d07cd22443.elevation.level4, $2795e4e0258f7c7d$export$b6ce77d07cd22443.elevation.level4, $2795e4e0258f7c7d$export$b6ce77d07cd22443.elevation.level5, $2795e4e0258f7c7d$export$b6ce77d07cd22443.elevation.level5, $2795e4e0258f7c7d$var$ElevationToken.level, $2795e4e0258f7c7d$var$ElevationToken.level, $2795e4e0258f7c7d$var$ElevationToken.level);
(0, $ee430606400354b3$export$29e00dfd3077644b)([
    (0, $f34c39adfc319163$export$2fa187e846a241c4)(".shadow")
], $2795e4e0258f7c7d$export$b8d84cf1103e360e.prototype, "_shadow", void 0);
(0, $ee430606400354b3$export$29e00dfd3077644b)([
    (0, $e48c8bdf0d6f523c$export$d541bacb2bda4494)({
        type: Boolean,
        reflect: true
    })
], $2795e4e0258f7c7d$export$b8d84cf1103e360e.prototype, "disabled", void 0);
(0, $ee430606400354b3$export$29e00dfd3077644b)([
    (0, $e48c8bdf0d6f523c$export$d541bacb2bda4494)({
        type: Number,
        reflect: true,
        useDefault: true
    })
], $2795e4e0258f7c7d$export$b8d84cf1103e360e.prototype, "level", void 0);
$2795e4e0258f7c7d$export$b8d84cf1103e360e = (0, $ee430606400354b3$export$29e00dfd3077644b)([
    $2795e4e0258f7c7d$export$da64fc29f17f9d0e("m3e-elevation")
], $2795e4e0258f7c7d$export$b8d84cf1103e360e);
/**
 * Component design tokens that control the `M3eFocusRingElement`.
 * @internal
 */ const $2795e4e0258f7c7d$var$FocusRingToken = {
    /** The color of the focus ring. */ color: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-focus-ring-color, ${$2795e4e0258f7c7d$export$b6ce77d07cd22443.color.secondary})`),
    /** The duration of the focus ring animation. */ duration: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-focus-ring-duration, ${$2795e4e0258f7c7d$export$b6ce77d07cd22443.motion.duration.long2})`),
    /** The thickness of the focus ring. */ thickness: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--m3e-focus-ring-thickness, 3px)"),
    /** Offset of an outward focus ring. */ outwardOffset: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--m3e-focus-ring-outward-offset, 2px)"),
    /** Offset of an inward focus ring. */ inwardOffset: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--m3e-focus-ring-inward-offset, 0px)"),
    /** The visibility of the focus ring. */ visibility: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--m3e-focus-ring-visibility, visible)"),
    /** The factor by which the focus ring grows. */ growthFactor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--m3e-focus-ring-growth-factor, 2)")
};
var $2795e4e0258f7c7d$var$_M3eFocusRingElement_instances, $2795e4e0258f7c7d$var$_M3eFocusRingElement_focusController, $2795e4e0258f7c7d$var$_M3eFocusRingElement_handleFocusChange;
/**
 * A focus ring used to depict a strong focus indicator.
 *
 * @description
 * The `m3e-focus-ring` component is an absolute positioned element used to provide a strong focus indicator.
 * The parenting element must be a relative positioned focusable element and allow for overflow.
 *
 * The component can be attached to an interactive element using the `for` attribute or programmatically using the `attach` method.
 * The focus ring is displayed when the interactive element receives visible focus and hidden when focus is lost.
 * This can be disabled using the `disabled` attribute.
 *
 * Alternatively, you can use the `show` and `hide` methods to programmatically control the focus ring.
 *
 * @example
 * The following example illustrates attaching a focus ring to an interactive element. In this example, the parenting div
 * has relative positioning and is given an `id` referenced by `m3e-focus-ring` using the `for` attribute.  Note that `#myDiv`
 * is not used when specifying the attached element's identifier.  The `#` is inferred.
 *
 * ```html
 * <div id="myDiv" tabindex="0" style="position: relative;">
 *  <m3e-focus-ring for="myDiv"></m3e-focus-ring>
 * <div>
 * ```
 *
 * @tag m3e-focus-ring
 *
 * @attr disabled - Whether the focus events will not trigger the focus ring. Focus rings can be still controlled manually by using the `show` and `hide` methods.
 * @attr inward - Whether the focus ring animates inward instead of outward.
 *
 * @cssprop --m3e-focus-ring-color - The color of the focus ring.
 * @cssprop --m3e-focus-ring-duration - The duration of the focus ring animation.
 * @cssprop --m3e-focus-ring-growth-factor - The factor by which the focus ring grows.
 * @cssprop --m3e-focus-ring-thickness - The thickness of the focus ring.
 * @cssprop --m3e-focus-ring-visibility - The visibility of the focus ring.
 * @cssprop --m3e-focus-ring-outward-offset - Offset of an outward focus ring.
 * @cssprop --m3e-focus-ring-inward-offset - Offset of an inward focus ring.
 */ let $2795e4e0258f7c7d$export$961832a2da773570 = class M3eFocusRingElement extends $2795e4e0258f7c7d$export$ccf21c713b2bbcbb($2795e4e0258f7c7d$export$46919bad18fb2f76((0, $08f2bff00ea64ee4$export$3f2f9f5909897157), "none")) {
    /** Launches a manual focus ring. */ show() {
        var _this__outline;
        (_this__outline = this._outline) === null || _this__outline === void 0 ? void 0 : _this__outline.classList.toggle("visible", true);
    }
    /** Hides the focus ring. */ hide() {
        var _this__outline;
        (_this__outline = this._outline) === null || _this__outline === void 0 ? void 0 : _this__outline.classList.toggle("visible", false);
    }
    /** @inheritdoc */ attach(control) {
        super.attach(control);
        (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_M3eFocusRingElement_focusController, "f").observe(control);
    }
    /** @inheritdoc */ detach() {
        if (this.control) (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_M3eFocusRingElement_focusController, "f").unobserve(this.control);
        super.detach();
    }
    /** @inheritdoc */ connectedCallback() {
        this.ariaHidden = "true";
        super.connectedCallback();
    }
    /** @inheritdoc */ disconnectedCallback() {
        super.disconnectedCallback();
        this.hide();
    }
    /** @inheritdoc */ render() {
        return (0, $5e4f263f2dad39fc$export$c0bb0b647f701bb5)($2795e4e0258f7c7d$var$t7 || ($2795e4e0258f7c7d$var$t7 = $2795e4e0258f7c7d$var$_`<div class="outline"></div>`));
    }
    /** @inheritdoc */ updated(_changedProperties) {
        super.updated(_changedProperties);
        if (_changedProperties.has("disabled") && this.disabled) this.hide();
    }
    constructor(){
        super(...arguments);
        $2795e4e0258f7c7d$var$_M3eFocusRingElement_instances.add(this);
        /** @private */ $2795e4e0258f7c7d$var$_M3eFocusRingElement_focusController.set(this, new $2795e4e0258f7c7d$export$766c876d58dec02e(this, {
            target: null,
            callback: (_, focusVisible)=>(0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_M3eFocusRingElement_instances, "m", $2795e4e0258f7c7d$var$_M3eFocusRingElement_handleFocusChange).call(this, focusVisible)
        }));
        /**
     * Whether the focus ring animates inward instead of outward.
     * @default false
     */ this.inward = false;
        /**
     * Whether the focus events will not trigger the focus ring.
     * Focus rings can be still controlled manually by using the `show` and `hide` methods.
     * @default false
     */ this.disabled = false;
    }
};
$2795e4e0258f7c7d$var$_M3eFocusRingElement_focusController = new WeakMap();
$2795e4e0258f7c7d$var$_M3eFocusRingElement_instances = new WeakSet();
$2795e4e0258f7c7d$var$_M3eFocusRingElement_handleFocusChange = function _M3eFocusRingElement_handleFocusChange(focusVisible) {
    if (!this.disabled) {
        if (focusVisible) this.show();
        else this.hide();
    }
};
/** The styles of the element. */ $2795e4e0258f7c7d$export$961832a2da773570.styles = (0, $c60305268e0a629a$export$dbf350e5966cf602)($2795e4e0258f7c7d$var$t8 || ($2795e4e0258f7c7d$var$t8 = $2795e4e0258f7c7d$var$_`:host { display: block; position: absolute; left: 0; top: 0; right: 0; bottom: 0; pointer-events: none; border-radius: inherit; outline: none; } :host([hidden]) { display: none; } .outline { contain: layout style; position: absolute; left: 0; top: 0; right: 0; bottom: 0; pointer-events: none; border-radius: inherit; z-index: 1; outline-color: ${0}; outline-width: ${0}; visibility: ${0}; } .outline.visible { outline-style: solid; } :host(:not([inward])) .outline { outline-offset: ${0}; } :host([inward]) .outline { outline-offset: calc(${0} - ${0}); } :host(:not([inward])) .outline.visible { animation: grow-shrink ${0}; } :host([inward]) .outline.visible { animation: shrink-grow ${0}; } @keyframes grow-shrink { 50% { outline-width: calc(${0} * ${0}); } } @keyframes shrink-grow { 50% { outline-offset: calc( ${0} - calc(${0} * ${0}) ); outline-width: calc(${0} * ${0}); } } @media (prefers-reduced-motion) { :host(:not([inward])) .outline.visible, :host([inward]) .outline.visible { animation: none; } } @media (forced-colors: active) { .outline { outline-color: Highlight; } }`), $2795e4e0258f7c7d$var$FocusRingToken.color, $2795e4e0258f7c7d$var$FocusRingToken.thickness, $2795e4e0258f7c7d$var$FocusRingToken.visibility, $2795e4e0258f7c7d$var$FocusRingToken.outwardOffset, $2795e4e0258f7c7d$var$FocusRingToken.inwardOffset, $2795e4e0258f7c7d$var$FocusRingToken.thickness, $2795e4e0258f7c7d$var$FocusRingToken.duration, $2795e4e0258f7c7d$var$FocusRingToken.duration, $2795e4e0258f7c7d$var$FocusRingToken.thickness, $2795e4e0258f7c7d$var$FocusRingToken.growthFactor, $2795e4e0258f7c7d$var$FocusRingToken.inwardOffset, $2795e4e0258f7c7d$var$FocusRingToken.thickness, $2795e4e0258f7c7d$var$FocusRingToken.growthFactor, $2795e4e0258f7c7d$var$FocusRingToken.thickness, $2795e4e0258f7c7d$var$FocusRingToken.growthFactor);
(0, $ee430606400354b3$export$29e00dfd3077644b)([
    (0, $f34c39adfc319163$export$2fa187e846a241c4)(".outline")
], $2795e4e0258f7c7d$export$961832a2da773570.prototype, "_outline", void 0);
(0, $ee430606400354b3$export$29e00dfd3077644b)([
    (0, $e48c8bdf0d6f523c$export$d541bacb2bda4494)({
        type: Boolean,
        reflect: true
    })
], $2795e4e0258f7c7d$export$961832a2da773570.prototype, "inward", void 0);
(0, $ee430606400354b3$export$29e00dfd3077644b)([
    (0, $e48c8bdf0d6f523c$export$d541bacb2bda4494)({
        type: Boolean,
        reflect: true
    })
], $2795e4e0258f7c7d$export$961832a2da773570.prototype, "disabled", void 0);
$2795e4e0258f7c7d$export$961832a2da773570 = (0, $ee430606400354b3$export$29e00dfd3077644b)([
    $2795e4e0258f7c7d$export$da64fc29f17f9d0e("m3e-focus-ring")
], $2795e4e0258f7c7d$export$961832a2da773570);
/**
 * An element which looks like a checkbox.
 *
 * @description
 * The `m3e-pseudo-checkbox` component is a pseudo-checkbox supporting checked, indeterminate, and disabled
 * states. It is customizable via CSS properties for expressive, accessible UI design.
 *
 * @example
 * The following example illustrates how to render a checked pseudo-checkbox.
 * ```html
 * <m3e-pseudo-checkbox checked></m3e-pseudo-checkbox>
 * ```
 *
 * @tag m3e-pseudo-checkbox
 *
 * @attr checked - Whether the element is checked.
 * @attr disabled - Whether the element is disabled.
 * @attr indeterminate - Whether the element's checked state is indeterminate.
 *
 * @cssprop --m3e-checkbox-icon-size - Size of the checkbox icon.
 * @cssprop --m3e-checkbox-container-shape - Border radius of the checkbox container.
 * @cssprop --m3e-checkbox-unselected-outline-thickness - Outline thickness for unselected state.
 * @cssprop --m3e-checkbox-unselected-outline-color - Outline color for unselected state.
 * @cssprop --m3e-checkbox-selected-container-color - Background color for selected state.
 * @cssprop --m3e-checkbox-selected-icon-color - Icon color for selected state.
 * @cssprop --m3e-checkbox-unselected-disabled-outline-color - Outline color for unselected disabled state.
 * @cssprop --m3e-checkbox-unselected-disabled-outline-opacity - Outline opacity for unselected disabled state.
 * @cssprop --m3e-checkbox-selected-disabled-container-color - Background color for selected disabled state.
 * @cssprop --m3e-checkbox-selected-disabled-container-opacity - Background opacity for selected disabled state.
 * @cssprop --m3e-checkbox-selected-disabled-icon-color - Icon color for selected disabled state.
 * @cssprop --m3e-checkbox-selected-disabled-icon-opacity - Icon opacity for selected disabled state.
 */ let $2795e4e0258f7c7d$export$dc19991764abe2ea = class M3ePseudoCheckboxElement extends $2795e4e0258f7c7d$export$13a11691eea54028($2795e4e0258f7c7d$export$9a986b15f53d6d10($2795e4e0258f7c7d$export$46919bad18fb2f76((0, $08f2bff00ea64ee4$export$3f2f9f5909897157), "none"))) {
    /** @inheritdoc */ connectedCallback() {
        super.connectedCallback();
        this.ariaHidden = "true";
    }
    /** @inheritdoc */ render() {
        if (this.indeterminate) return (0, $5e4f263f2dad39fc$export$c0bb0b647f701bb5)($2795e4e0258f7c7d$var$t9 || ($2795e4e0258f7c7d$var$t9 = $2795e4e0258f7c7d$var$_`<svg viewBox="0 -960 960 960" fill="currentColor"><path Required d="M240-440v-80h480v80H240Z"/></svg>`));
        if (this.checked) return (0, $5e4f263f2dad39fc$export$c0bb0b647f701bb5)($2795e4e0258f7c7d$var$t10 || ($2795e4e0258f7c7d$var$t10 = $2795e4e0258f7c7d$var$_`<svg viewBox="0 -960 960 960" fill="currentColor"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>`));
        return 0, $5e4f263f2dad39fc$export$45b790e32b2810ee;
    }
};
/** The styles of the element. */ $2795e4e0258f7c7d$export$dc19991764abe2ea.styles = (0, $c60305268e0a629a$export$dbf350e5966cf602)($2795e4e0258f7c7d$var$t11 || ($2795e4e0258f7c7d$var$t11 = $2795e4e0258f7c7d$var$_`:host { display: inline-block; vertical-align: middle; width: var(--m3e-checkbox-icon-size, 18px); height: var(--m3e-checkbox-icon-size, 18px); border-radius: var(--m3e-checkbox-container-shape, 2px); box-sizing: border-box; flex: none; contain: layout style paint; line-height: 0; } :host([hidden]) { display: none; } :host(:not([checked]):not([indeterminate])) { border-width: var(--m3e-checkbox-unselected-outline-thickness, 2px); border-style: solid; } :host(:not([disabled])[checked]), :host(:not([disabled])[indeterminate]) { background-color: var(--m3e-checkbox-selected-container-color, ${0}); color: var(--m3e-checkbox-selected-icon-color, ${0}); } :host(:not([disabled]):not([checked]):not([indeterminate])) { border-color: var(--m3e-checkbox-unselected-outline-color, ${0}); } :host([disabled]:not([checked]):not([indeterminate])) { border-color: color-mix( in srgb, var(--m3e-checkbox-unselected-disabled-outline-color, ${0}) var(--m3e-checkbox-unselected-disabled-outline-opacity, 38%), transparent ); } :host([disabled][checked]), :host([disabled][indeterminate]) { background-color: color-mix( in srgb, var(--m3e-checkbox-selected-disabled-container-color, ${0}) var(--m3e-checkbox-selected-disabled-container-opacity, 38%), transparent ); color: color-mix( in srgb, var(--m3e-checkbox-selected-disabled-icon-color, ${0}) var(--m3e-checkbox-selected-disabled-icon-opacity, 100%), transparent ); } svg { pointer-events: none; } @media (forced-colors: active) { :host(:not([disabled])[checked]), :host(:not([disabled])[indeterminate]) { border-color: Highlight; background-color: Highlight; color: HighlightText; } :host(:not([disabled]):not([checked]):not([indeterminate])) { border-color: CanvasText; background: Canvas; } :host([disabled]:not([checked]):not([indeterminate])) { border-color: GrayText; background-color: Canvas; } :host([disabled][checked]), :host([disabled][indeterminate]) { background-color: GrayText; color: Canvas; } }`), $2795e4e0258f7c7d$export$b6ce77d07cd22443.color.primary, $2795e4e0258f7c7d$export$b6ce77d07cd22443.color.onPrimary, $2795e4e0258f7c7d$export$b6ce77d07cd22443.color.onSurfaceVariant, $2795e4e0258f7c7d$export$b6ce77d07cd22443.color.onSurface, $2795e4e0258f7c7d$export$b6ce77d07cd22443.color.onSurface, $2795e4e0258f7c7d$export$b6ce77d07cd22443.color.surface);
$2795e4e0258f7c7d$export$dc19991764abe2ea = (0, $ee430606400354b3$export$29e00dfd3077644b)([
    $2795e4e0258f7c7d$export$da64fc29f17f9d0e("m3e-pseudo-checkbox")
], $2795e4e0258f7c7d$export$dc19991764abe2ea);
/**
 * An element which looks like a radio button.
 *
 * @description
 * The `m3e-pseudo-radio` component is a pseudo-radio supporting checked and disabled
 * states. It is customizable via CSS properties for expressive, accessible UI design.
 *
 * @example
 * The following example illustrates how to render a checked pseudo-radio.
 * ```html
 * <m3e-pseudo-radio checked></m3e-pseudo-radio>
 * ```
 *
 * @tag m3e-pseudo-radio
 *
 * @attr checked - Whether the element is checked.
 * @attr disabled - Whether the element is disabled.
 *
 * @cssprop --m3e-radio-icon-size - Size of the radio icon.
 * @cssprop --m3e-radio-unselected-icon-color - Color of the unselected radio icon.
 * @cssprop --m3e-radio-selected-icon-color - Color of the selected radio icon.
 * @cssprop --m3e-radio-disabled-icon-color - Color of the disabled radio icon.
 */ let $2795e4e0258f7c7d$export$75c468e60a2d8343 = class M3ePseudoRadioElement extends $2795e4e0258f7c7d$export$8c8ee9238b7b0c2a($2795e4e0258f7c7d$export$9a986b15f53d6d10($2795e4e0258f7c7d$export$46919bad18fb2f76((0, $08f2bff00ea64ee4$export$3f2f9f5909897157), "none"))) {
    /** @inheritdoc */ connectedCallback() {
        super.connectedCallback();
        this.ariaHidden = "true";
    }
    /** @inheritdoc */ render() {
        return (0, $5e4f263f2dad39fc$export$c0bb0b647f701bb5)($2795e4e0258f7c7d$var$t12 || ($2795e4e0258f7c7d$var$t12 = $2795e4e0258f7c7d$var$_`<svg class="icon" viewBox="0 0 20 20"><mask id="cutout2"><rect width="100%" height="100%" fill="white"></rect><circle cx="10" cy="10" r="8" fill="black"></circle></mask><circle class="outer circle" cx="10" cy="10" r="10" mask="url(#cutout2)"></circle><circle class="inner circle" cx="10" cy="10" r="5"></circle></svg>`));
    }
};
/** The styles of the element. */ $2795e4e0258f7c7d$export$75c468e60a2d8343.styles = (0, $c60305268e0a629a$export$dbf350e5966cf602)($2795e4e0258f7c7d$var$t13 || ($2795e4e0258f7c7d$var$t13 = $2795e4e0258f7c7d$var$_`:host { display: inline-block; vertical-align: middle; box-sizing: border-box; width: var(--m3e-radio-icon-size, 20px); height: var(--m3e-radio-icon-size, 20px); flex: none; contain: layout style paint; line-height: 0; } :host([hidden]) { display: none; } .circle { fill: currentColor; } :host(:not([checked])) .circle.inner { opacity: 0; } :host(:not([checked])) { color: var(--m3e-radio-unselected-icon-color, ${0}); } :host([checked]) { color: var(--m3e-radio-selected-icon-color, ${0}); } :host([disabled]) { color: color-mix(in srgb, var(--m3e-radio-disabled-icon-color, ${0}) 38%, transparent); } @media (forced-colors: active) { :host { border-radius: 50%; } :host(:not([checked])) { color: CanvasText; background-color: Canvas; } :host([checked]) { color: HighlightText; background-color: Highlight; } :host([disabled]) { color: GrayText; background-color: Canvas; } }`), $2795e4e0258f7c7d$export$b6ce77d07cd22443.color.onSurfaceVariant, $2795e4e0258f7c7d$export$b6ce77d07cd22443.color.primary, $2795e4e0258f7c7d$export$b6ce77d07cd22443.color.onSurface);
$2795e4e0258f7c7d$export$75c468e60a2d8343 = (0, $ee430606400354b3$export$29e00dfd3077644b)([
    $2795e4e0258f7c7d$export$da64fc29f17f9d0e("m3e-pseudo-radio")
], $2795e4e0258f7c7d$export$75c468e60a2d8343);
/**
 * Component design tokens that control the `M3eRippleElement`.
 * @internal
 */ const $2795e4e0258f7c7d$var$RippleToken = {
    color: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-ripple-color, ${$2795e4e0258f7c7d$export$b6ce77d07cd22443.color.onSurface})`),
    opacity: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-ripple-opacity, ${$2795e4e0258f7c7d$export$b6ce77d07cd22443.state.pressedStateLayerOpacity})`),
    enterDuration: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-ripple-enter-duration, ${$2795e4e0258f7c7d$export$b6ce77d07cd22443.motion.duration.long1})`),
    exitDuration: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-ripple-exit-duration, ${$2795e4e0258f7c7d$export$b6ce77d07cd22443.motion.duration.medium3})`)
};
var $2795e4e0258f7c7d$var$_M3eRippleElement_instances, $2795e4e0258f7c7d$var$_M3eRippleElement_ripples, $2795e4e0258f7c7d$var$_M3eRippleElement_pressedController, $2795e4e0258f7c7d$var$_M3eRippleElement_destroyRipple, $2795e4e0258f7c7d$var$_M3eRippleElement_handleAnimationEnd, $2795e4e0258f7c7d$var$_M3eRippleElement_handlePressedChange;
/**
 * Connects user input to screen reactions using ripples.
 *
 * @description
 * The `m3e-ripple` component is an absolute positioned element used to depict a ripple.
 * The parenting element must be a relative positioned element.
 *
 * The component can be attached to an interactive element using the `for` attribute or programmatically using the `attach` method.
 * The ripple is displayed when the interactive element is pressed and hidden when released.  This can be disabled using the `disabled` attribute.
 *
 * The pressed state actives either using both pointer and keyboard events. For keyboard events, `SPACE` activate a ripple.
 *
 * Alternatively, you can use the `show` and `hide` methods to programmatically control the ripple.
 *
 * @example
 * The following example illustrates attaching a ripple to an interactive element. In this example, the parenting div
 * has relative positioning and is given an `id` referenced by `m3e-ripple` using the `for` attribute.  Note that `#myDiv`
 * is not used when specifying the attached element's identifier.  The `#` is inferred.
 *
 * ```html
 * <div id="myDiv" tabindex="0" style="position: relative;">
 *  <m3e-ripple for="myDiv"></m3e-ripple>
 * <div>
 * ```
 *
 * @tag m3e-ripple
 *
 * @attr centered - Whether the ripple always originates from the center of the element's bounds, rather than originating from the location of the click event.
 * @attr disabled - Whether click events will not trigger the ripple.  Ripples can be still controlled manually by using the `show` and 'hide' methods.
 * @attr for - The identifier of the interactive control to which this element is attached.
 * @attr radius - The radius, in pixels, of the ripple.
 * @attr unbounded - Whether the ripple is visible outside the element's bounds.
 *
 * @cssprop --m3e-ripple-color - The color of the ripple.
 * @cssprop --m3e-ripple-enter-duration - The duration for the enter animation (expansion from point of contact).
 * @cssprop --m3e-ripple-exit-duration - The duration for the exit animation (fade-out).
 * @cssprop --m3e-ripple-opacity - The opacity of the ripple.
 */ let $2795e4e0258f7c7d$export$4ab7a510e6d61011 = class M3eRippleElement extends $2795e4e0258f7c7d$export$ccf21c713b2bbcbb($2795e4e0258f7c7d$export$46919bad18fb2f76((0, $08f2bff00ea64ee4$export$3f2f9f5909897157), "none")) {
    /** Whether the ripple is currently visible to the user. */ get visible() {
        return (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_M3eRippleElement_ripples, "f").size > 0;
    }
    /**
   * Launches a manual ripple.
   * @param {number} x The x-coordinate, relative to the viewport, at which to present the ripple.
   * @param {number} y The y-coordinate, relative to the viewport, at which to present the ripple.
   * @param {boolean} [persistent=false] Whether the ripple will persist until hidden.
   */ show(x, y, persistent = false) {
        const bounds = this.getBoundingClientRect();
        if (this.centered) {
            x = bounds.left + bounds.width / 2;
            y = bounds.top + bounds.height / 2;
        }
        let radius = this.radius;
        if (!radius || isNaN(radius)) {
            const distX = Math.max(Math.abs(x - bounds.left), Math.abs(x - bounds.right));
            const distY = Math.max(Math.abs(y - bounds.top), Math.abs(y - bounds.bottom));
            radius = Math.sqrt(distX * distX + distY * distY);
        }
        const offsetX = x - bounds.left;
        const offsetY = y - bounds.top;
        const ripple = document.createElement("div");
        ripple.classList.add("ripple");
        if (persistent) ripple.classList.add("persistent");
        ripple.style.left = `${offsetX - radius}px`;
        ripple.style.top = `${offsetY - radius}px`;
        ripple.style.width = `${radius * 2}px`;
        ripple.style.height = `${radius * 2}px`;
        ripple.addEventListener("animationend", ()=>(0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_M3eRippleElement_instances, "m", $2795e4e0258f7c7d$var$_M3eRippleElement_handleAnimationEnd).call(this, ripple, persistent), {
            once: true
        });
        ripple.addEventListener("transitionend", (e)=>{
            if (e.propertyName === "opacity") (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_M3eRippleElement_instances, "m", $2795e4e0258f7c7d$var$_M3eRippleElement_destroyRipple).call(this, ripple);
        }, {
            once: true
        });
        if (!this.shadowRoot) {
            (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_M3eRippleElement_ripples, "f").delete(ripple);
            return;
        }
        (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_M3eRippleElement_ripples, "f").add(ripple);
        this.shadowRoot.appendChild(ripple);
    }
    /** Manually hides the ripple. */ hide() {
        for (const ripple of (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_M3eRippleElement_ripples, "f"))ripple.classList.add("exit");
    }
    /** @inheritdoc */ attach(control) {
        super.attach(control);
        (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_M3eRippleElement_pressedController, "f").observe(control);
    }
    /** @inheritdoc */ detach() {
        if (this.control) (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_M3eRippleElement_pressedController, "f").unobserve(this.control);
        super.detach();
    }
    /** @inheritdoc */ connectedCallback() {
        this.ariaHidden = "true";
        super.connectedCallback();
    }
    /** @inheritdoc */ disconnectedCallback() {
        super.disconnectedCallback();
        (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_M3eRippleElement_instances, "m", $2795e4e0258f7c7d$var$_M3eRippleElement_destroyRipple).call(this);
    }
    /** @inheritdoc */ updated(_changedProperties) {
        super.updated(_changedProperties);
        if (_changedProperties.has("disabled") && this.disabled) this.hide();
    }
    constructor(){
        super(...arguments);
        $2795e4e0258f7c7d$var$_M3eRippleElement_instances.add(this);
        /** @private */ $2795e4e0258f7c7d$var$_M3eRippleElement_ripples.set(this, new Set());
        /** @private */ $2795e4e0258f7c7d$var$_M3eRippleElement_pressedController.set(this, new $2795e4e0258f7c7d$export$1351ab2eef382c23(this, {
            target: null,
            minPressedDuration: 0,
            isPressedKey: (key)=>key === " ",
            callback: (pressed, { x: x, y: y })=>(0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_M3eRippleElement_instances, "m", $2795e4e0258f7c7d$var$_M3eRippleElement_handlePressedChange).call(this, pressed, x, y)
        }));
        /**
     * Whether click events will not trigger the ripple.
     * Ripples can be still controlled manually by using the `show` and 'hide' methods.
     * @default false
     */ this.disabled = false;
        /**
     * Whether the ripple always originates from the center of the element's bounds, rather
     * than originating from the location of the click event.
     * @default false
     */ this.centered = false;
        /**
     * Whether the ripple is visible outside the element's bounds.
     * @default false
     */ this.unbounded = false;
        /**
     * The radius, in pixels, of the ripple.
     * @default null
     */ this.radius = null;
    }
};
$2795e4e0258f7c7d$var$_M3eRippleElement_ripples = new WeakMap();
$2795e4e0258f7c7d$var$_M3eRippleElement_pressedController = new WeakMap();
$2795e4e0258f7c7d$var$_M3eRippleElement_instances = new WeakSet();
$2795e4e0258f7c7d$var$_M3eRippleElement_destroyRipple = function _M3eRippleElement_destroyRipple(ripple) {
    if (ripple) {
        ripple.remove();
        (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_M3eRippleElement_ripples, "f").delete(ripple);
    } else {
        for (const r of (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_M3eRippleElement_ripples, "f"))r.remove();
        (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_M3eRippleElement_ripples, "f").clear();
    }
};
$2795e4e0258f7c7d$var$_M3eRippleElement_handleAnimationEnd = function _M3eRippleElement_handleAnimationEnd(ripple, persistent) {
    if (persistent) ripple.classList.add("pressed");
    else ripple.classList.add("exit");
};
$2795e4e0258f7c7d$var$_M3eRippleElement_handlePressedChange = function _M3eRippleElement_handlePressedChange(pressed, x, y) {
    if (!this.disabled) {
        if (pressed) this.show(x, y, true);
        else this.hide();
    }
};
/** The styles of the element. */ $2795e4e0258f7c7d$export$4ab7a510e6d61011.styles = (0, $c60305268e0a629a$export$dbf350e5966cf602)($2795e4e0258f7c7d$var$t14 || ($2795e4e0258f7c7d$var$t14 = $2795e4e0258f7c7d$var$_`:host { display: block; position: absolute; left: 0; top: 0; right: 0; bottom: 0; pointer-events: none; border-radius: inherit; } :host([hidden]) { display: none; } :host(:not([unbounded])) { overflow: hidden; } :host(:not([unbounded])) .ripple { contain: layout style paint; } :host([unbounded]) .ripple { contain: layout style; } .ripple { display: block; position: absolute; inset: 0; pointer-events: none; transform: scale(0); opacity: ${0}; border-radius: 50%; filter: blur(20px); background-color: ${0}; transition: ${0}; will-change: transform, background-color, opacity; animation: ripple ${0} linear; } .ripple.persistent.pressed { transform: scale(4); } .ripple.exit { transition: ${0}; opacity: 0; } @keyframes ripple { to { transform: scale(4); } } @media (prefers-reduced-motion) { .ripple { transform: scale(4); animation-duration: 90ms; } .ripple:not(.exit), .ripple.exit { transition-duration: 10ms; } } @media (forced-colors: active) { .ripple { display: none; } }`), $2795e4e0258f7c7d$var$RippleToken.opacity, $2795e4e0258f7c7d$var$RippleToken.color, (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`background-color ${$2795e4e0258f7c7d$export$b6ce77d07cd22443.motion.duration.short1} ${$2795e4e0258f7c7d$export$b6ce77d07cd22443.motion.easing.standard}`), $2795e4e0258f7c7d$var$RippleToken.enterDuration, (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`opacity ${$2795e4e0258f7c7d$var$RippleToken.exitDuration} cubic-bezier(0, 0, 0.2, 0.1),
        background-color ${$2795e4e0258f7c7d$export$b6ce77d07cd22443.motion.duration.short1} ${$2795e4e0258f7c7d$export$b6ce77d07cd22443.motion.easing.standard}`));
(0, $ee430606400354b3$export$29e00dfd3077644b)([
    (0, $e48c8bdf0d6f523c$export$d541bacb2bda4494)({
        type: Boolean,
        reflect: true
    })
], $2795e4e0258f7c7d$export$4ab7a510e6d61011.prototype, "disabled", void 0);
(0, $ee430606400354b3$export$29e00dfd3077644b)([
    (0, $e48c8bdf0d6f523c$export$d541bacb2bda4494)({
        type: Boolean,
        reflect: true
    })
], $2795e4e0258f7c7d$export$4ab7a510e6d61011.prototype, "centered", void 0);
(0, $ee430606400354b3$export$29e00dfd3077644b)([
    (0, $e48c8bdf0d6f523c$export$d541bacb2bda4494)({
        type: Boolean,
        reflect: true
    })
], $2795e4e0258f7c7d$export$4ab7a510e6d61011.prototype, "unbounded", void 0);
(0, $ee430606400354b3$export$29e00dfd3077644b)([
    (0, $e48c8bdf0d6f523c$export$d541bacb2bda4494)({
        type: Number
    })
], $2795e4e0258f7c7d$export$4ab7a510e6d61011.prototype, "radius", void 0);
$2795e4e0258f7c7d$export$4ab7a510e6d61011 = (0, $ee430606400354b3$export$29e00dfd3077644b)([
    $2795e4e0258f7c7d$export$da64fc29f17f9d0e("m3e-ripple")
], $2795e4e0258f7c7d$export$4ab7a510e6d61011);
/**
 * Determines whether a value is a `ScrollDividers`.
 * @param {unknown} value The value to test.
 * @returns Whether `value` is a `ScrollDividers`.
 */ function $2795e4e0258f7c7d$export$994a7321c6c5c099(value) {
    return value === "above" || value === "below" || value === "above-below" || value === "none";
}
var $2795e4e0258f7c7d$var$_M3eScrollContainerElement_scrollHandler;
/**
 * A vertically oriented content container which presents dividers above and below content when scrolled.
 *
 * @description
 * The `m3e-scroll-container` component provides a vertically oriented scrollable container with dynamic
 * dividers above and below content. Designed according to Material 3 principles, it supports custom scrollbar
 * thickness, divider styling, and focus ring theming via CSS custom properties.
 *
 * @example
 * This example shows a scrollable container with dividers above and below the content, and thin scrollbars enabled.
 * ```html
 * <m3e-scroll-container dividers="above-below" thin>
 *   <div>Scrollable content goes here</div>
 * </m3e-scroll-container>
 * ```
 *
 * @tag m3e-scroll-container
 *
 * @slot - Renders the scrollable content.
 *
 * @attr dividers - The dividers used to separate scrollable content.
 * @attr thin - Whether to present thin scrollbars.
 *
 * @cssprop --m3e-divider-thickness - Thickness of the divider lines above and below content.
 * @cssprop --m3e-divider-color - Color of the divider lines when visible.
 * @cssprop --m3e-focus-ring-color - Color of the focus ring outline.
 * @cssprop --m3e-focus-ring-thickness - Thickness of the focus ring outline.
 * @cssprop --m3e-focus-ring-factor - Animation factor for focus ring thickness.
 * @cssprop --m3e-focus-ring-duration - Duration of the focus ring animation.
 */ let $2795e4e0258f7c7d$export$2da5fcece8f45700 = class M3eScrollContainerElement extends $2795e4e0258f7c7d$export$282c9fa792fbac93((0, $08f2bff00ea64ee4$export$3f2f9f5909897157)) {
    /** @inheritdoc */ disconnectedCallback() {
        super.disconnectedCallback();
        this.removeEventListener("scroll", (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_M3eScrollContainerElement_scrollHandler, "f"));
    }
    /** @inheritdoc */ willUpdate(_changedProperties) {
        super.willUpdate(_changedProperties);
        if (_changedProperties.has("dividers") && !$2795e4e0258f7c7d$export$994a7321c6c5c099(this.dividers)) this.dividers = "above-below";
    }
    /** @inheritdoc */ update(changedProperties) {
        super.update(changedProperties);
        if (changedProperties.has("dividers")) {
            this.removeEventListener("scroll", (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_M3eScrollContainerElement_scrollHandler, "f"));
            if (this.dividers !== "none") this.addEventListener("scroll", (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_M3eScrollContainerElement_scrollHandler, "f"), {
                passive: true
            });
        }
    }
    /** @inheritdoc */ render() {
        return (0, $5e4f263f2dad39fc$export$c0bb0b647f701bb5)($2795e4e0258f7c7d$var$t15 || ($2795e4e0258f7c7d$var$t15 = $2795e4e0258f7c7d$var$_`<slot @slotchange="${0}"></slot>`), this._updateScroll);
    }
    /** @private */ _updateScroll() {
        const before = (this.dividers === "above" || this.dividers === "above-below") && this.scrollTop > 0;
        const after = (this.dividers === "below" || this.dividers === "above-below") && this.scrollHeight - this.scrollTop - this.clientHeight > 1;
        $2795e4e0258f7c7d$export$a6b7fbc1acf03e5b(this, "--above", before);
        $2795e4e0258f7c7d$export$a6b7fbc1acf03e5b(this, "--below", after);
    }
    constructor(){
        super(...arguments);
        /** @private */ $2795e4e0258f7c7d$var$_M3eScrollContainerElement_scrollHandler.set(this, ()=>this._updateScroll());
        /**
     * The dividers used to separate scrollable content.
     * @default "above-below"
     */ this.dividers = "above-below";
        /**
     * Whether to present thin scrollbars.
     * @default false
     */ this.thin = false;
    }
};
$2795e4e0258f7c7d$var$_M3eScrollContainerElement_scrollHandler = new WeakMap();
/** The styles of the element. */ $2795e4e0258f7c7d$export$2da5fcece8f45700.styles = (0, $c60305268e0a629a$export$dbf350e5966cf602)($2795e4e0258f7c7d$var$t16 || ($2795e4e0258f7c7d$var$t16 = $2795e4e0258f7c7d$var$_`:host { display: block; overflow-y: auto; position: relative; box-sizing: border-box; scrollbar-color: ${0}; border-top: var(--m3e-divider-thickness, 1px) solid transparent; border-bottom: var(--m3e-divider-thickness, 1px) solid transparent; outline-color: ${0}; outline-width: ${0}; outline-offset: ${0}; } :host([hidden]) { display: none; } :host([thin]) { scrollbar-width: ${0}; } :host(:not([thin])) { scrollbar-width: ${0}; } :host(:not(:focus-visible):is(:state(--above), :--above)) { border-top-color: var(--m3e-divider-color, ${0}); } :host(:not(:focus-visible):is(:state(--below), :--below)) { border-bottom-color: var(--m3e-divider-color, ${0}); } :host(:focus-visible) { outline-style: solid; animation: grow-shrink ${0}; } @keyframes grow-shrink { 50% { outline-width: calc(${0} * ${0}); } } @media (forced-colors: active) { :host { border-top: var(--m3e-divider-thickness, 1px) solid Canvas; border-bottom: var(--m3e-divider-thickness, 1px) solid Canvas; } :host(:not(:focus-visible):is(:state(--above), :--above)) { border-top-color: GrayText; } :host(:not(:focus-visible):is(:state(--below), :--below)) { border-bottom-color: GrayText; } } @media (prefers-reduced-motion) { :host(:focus-visible) { animation: none; } }`), $2795e4e0258f7c7d$export$b6ce77d07cd22443.scrollbar.color, $2795e4e0258f7c7d$var$FocusRingToken.color, $2795e4e0258f7c7d$var$FocusRingToken.thickness, $2795e4e0258f7c7d$var$FocusRingToken.outwardOffset, $2795e4e0258f7c7d$export$b6ce77d07cd22443.scrollbar.thinWidth, $2795e4e0258f7c7d$export$b6ce77d07cd22443.scrollbar.width, $2795e4e0258f7c7d$export$b6ce77d07cd22443.color.outlineVariant, $2795e4e0258f7c7d$export$b6ce77d07cd22443.color.outlineVariant, $2795e4e0258f7c7d$var$FocusRingToken.duration, $2795e4e0258f7c7d$var$FocusRingToken.thickness, $2795e4e0258f7c7d$var$FocusRingToken.growthFactor);
(0, $ee430606400354b3$export$29e00dfd3077644b)([
    (0, $e48c8bdf0d6f523c$export$d541bacb2bda4494)()
], $2795e4e0258f7c7d$export$2da5fcece8f45700.prototype, "dividers", void 0);
(0, $ee430606400354b3$export$29e00dfd3077644b)([
    (0, $e48c8bdf0d6f523c$export$d541bacb2bda4494)({
        type: Boolean,
        reflect: true
    })
], $2795e4e0258f7c7d$export$2da5fcece8f45700.prototype, "thin", void 0);
(0, $ee430606400354b3$export$29e00dfd3077644b)([
    $2795e4e0258f7c7d$export$61fc7d43ac8f84b0(40)
], $2795e4e0258f7c7d$export$2da5fcece8f45700.prototype, "_updateScroll", null);
$2795e4e0258f7c7d$export$2da5fcece8f45700 = (0, $ee430606400354b3$export$29e00dfd3077644b)([
    $2795e4e0258f7c7d$export$da64fc29f17f9d0e("m3e-scroll-container")
], $2795e4e0258f7c7d$export$2da5fcece8f45700);
var $2795e4e0258f7c7d$var$_M3eSelectionIndicatorElement_instances, $2795e4e0258f7c7d$var$_M3eSelectionIndicatorElement_pressedController, $2795e4e0258f7c7d$var$_M3eSelectionIndicatorElement_initStateLayer, $2795e4e0258f7c7d$var$_M3eSelectionIndicatorElement_handlePressedChange, $2795e4e0258f7c7d$var$_M3eSelectionIndicatorElement_handleAnimationEnd;
/**
 * Provides selection, focus, and hover state layer treatment for an interactive element that supports selection.
 *
 * @description
 * The `m3e-selection-indicator` component is an absolute positioned element used to depict a selected state
 * including hover and focus overlays. The parenting element must be a relative positioned element.
 *
 * This element can be attached to an interactive element using the `for` attribute or programmatically using the `attach` method.
 * The indicator's state layer is displayed when the interactive element is either hovered or focused.  This can be disabled using
 * the `disabled` attribute.  The `selected` attribute controls whether to present a selected state.
 *
 * @tag m3e-selection-indicator
 *
 * @attr bounce - Whether the indicator presents a bounce animation when selected.
 * @attr centered - Whether the selection animation always originates from the center of the element's bounds, rather than originating from the location of the click event.
 * @attr disabled - Whether hover and focus events will not trigger the indicator's state layer. State layers can still be controlled manually using the `show` and `hide` methods.
 * @attr selected - Whether the indicator is selected.
 *
 * @cssprop --m3e-selection-indicator-color - Color of the indicator.
 * @cssprop --m3e-selection-indicator-state-layer-duration - Duration of state layer changes.
 * @cssprop --m3e-selection-indicator-state-layer-easing - Easing curve of state layer changes.
 * @cssprop --m3e-selection-indicator-state-layer-focus-color - Color on focus.
 * @cssprop --m3e-selection-indicator-state-layer-focus-opacity - Opacity on focus.
 * @cssprop --m3e-selection-indicator-state-layer-hover-color - Color on hover.
 * @cssprop --m3e-selection-indicator-state-layer-hover-opacity - Opacity on hover.
 * @cssprop --m3e-selection-indicator-state-layer-pressed-color - Color on pressed.
 * @cssprop --m3e-selection-indicator-state-layer-pressed-opacity - Opacity on pressed.
 */ let $2795e4e0258f7c7d$export$9c88f2b92fe14e5f = class M3eSelectionIndicatorElement extends $2795e4e0258f7c7d$export$7478c9754756300($2795e4e0258f7c7d$export$625d28f11806c030($2795e4e0258f7c7d$export$ccf21c713b2bbcbb($2795e4e0258f7c7d$export$46919bad18fb2f76($2795e4e0258f7c7d$export$282c9fa792fbac93((0, $08f2bff00ea64ee4$export$3f2f9f5909897157)), "none")))) {
    /**
   * Launches a manual state layer for the indicator.
   * @param {"hover" | "focused" | "pressed"} state The state of the indicator's state layer to show.
   */ show(state) {
        var _this__stateLayer;
        (_this__stateLayer = this._stateLayer) === null || _this__stateLayer === void 0 ? void 0 : _this__stateLayer.show(state);
    }
    /**
   * Hides the state layer for the indicator.
   * @param {"hover" | "focused" | "pressed"} state The state of the indicator's state layer to hide.
   */ hide(state) {
        var _this__stateLayer;
        (_this__stateLayer = this._stateLayer) === null || _this__stateLayer === void 0 ? void 0 : _this__stateLayer.hide(state);
    }
    /** @inheritdoc */ attach(control) {
        var _this__stateLayer;
        super.attach(control);
        (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_M3eSelectionIndicatorElement_pressedController, "f").observe(control);
        (_this__stateLayer = this._stateLayer) === null || _this__stateLayer === void 0 ? void 0 : _this__stateLayer.attach(control);
    }
    /** @inheritdoc */ detach() {
        if (this.control) {
            var _this__stateLayer;
            (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_M3eSelectionIndicatorElement_pressedController, "f").unobserve(this.control);
            (_this__stateLayer = this._stateLayer) === null || _this__stateLayer === void 0 ? void 0 : _this__stateLayer.detach();
        }
        super.detach();
    }
    /** @inheritdoc */ connectedCallback() {
        this.ariaHidden = "true";
        super.connectedCallback();
    }
    /** @inheritdoc */ reconnectedCallback() {
        super.reconnectedCallback();
        (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_M3eSelectionIndicatorElement_instances, "m", $2795e4e0258f7c7d$var$_M3eSelectionIndicatorElement_initStateLayer).call(this);
    }
    /** @inheritdoc */ firstUpdated(_changedProperties) {
        super.firstUpdated(_changedProperties);
        (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_M3eSelectionIndicatorElement_instances, "m", $2795e4e0258f7c7d$var$_M3eSelectionIndicatorElement_initStateLayer).call(this);
    }
    /** @inheritdoc */ render() {
        return (0, $5e4f263f2dad39fc$export$c0bb0b647f701bb5)($2795e4e0258f7c7d$var$t17 || ($2795e4e0258f7c7d$var$t17 = $2795e4e0258f7c7d$var$_`<div class="base" @animationend="${0}"><div class="indicator"></div><m3e-state-layer class="state-layer" enable-pressed ?disabled="${0}"></m3e-state-layer></div>`), (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_M3eSelectionIndicatorElement_instances, "m", $2795e4e0258f7c7d$var$_M3eSelectionIndicatorElement_handleAnimationEnd), this.disabled);
    }
    constructor(){
        super(...arguments);
        $2795e4e0258f7c7d$var$_M3eSelectionIndicatorElement_instances.add(this);
        /** @private */ $2795e4e0258f7c7d$var$_M3eSelectionIndicatorElement_pressedController.set(this, new $2795e4e0258f7c7d$export$1351ab2eef382c23(this, {
            target: null,
            isPressedKey: (key)=>key === " ",
            callback: (pressed, point)=>(0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_M3eSelectionIndicatorElement_instances, "m", $2795e4e0258f7c7d$var$_M3eSelectionIndicatorElement_handlePressedChange).call(this, pressed, point)
        }));
        /**
     * Whether hover and focus events will not trigger the indicator's state layer. State layers can still
     * be controlled manually using the `show` and `hide` methods.
     * @default false
     */ this.disabled = false;
        /**
     * Whether the indicator is selected.
     * @default false
     */ this.selected = false;
        /**
     * Whether the indicator presents a bounce animation when selected.
     * @default false
     */ this.bounce = false;
        /**
     * Whether the selection animation always originates from the center of the element's bounds,
     * rather than originating from the location of the click event.
     * @default false
     */ this.centered = false;
    }
};
$2795e4e0258f7c7d$var$_M3eSelectionIndicatorElement_pressedController = new WeakMap();
$2795e4e0258f7c7d$var$_M3eSelectionIndicatorElement_instances = new WeakSet();
$2795e4e0258f7c7d$var$_M3eSelectionIndicatorElement_initStateLayer = function _M3eSelectionIndicatorElement_initStateLayer() {
    const stateLayer = this._stateLayer;
    if (stateLayer && this.control !== stateLayer.control) {
        if (this.control) stateLayer.attach(this.control);
        else stateLayer.detach();
    }
};
$2795e4e0258f7c7d$var$_M3eSelectionIndicatorElement_handlePressedChange = function _M3eSelectionIndicatorElement_handlePressedChange(pressed, point) {
    if (this.disabled || this.selected || this.centered || $2795e4e0258f7c7d$export$ff7706047246b98b()) return;
    const base = this._base;
    if (pressed && base) {
        const bounds = base.getBoundingClientRect();
        const x = Math.min(Math.max(point.x - bounds.left, bounds.height), bounds.width - bounds.height);
        base === null || base === void 0 ? void 0 : base.style.setProperty("--_pressed-origin-x", `${x}px`);
    }
};
$2795e4e0258f7c7d$var$_M3eSelectionIndicatorElement_handleAnimationEnd = function _M3eSelectionIndicatorElement_handleAnimationEnd() {
    var _this__base;
    (_this__base = this._base) === null || _this__base === void 0 ? void 0 : _this__base.style.removeProperty("--_pressed-origin-x");
};
/** The styles of the element. */ $2795e4e0258f7c7d$export$9c88f2b92fe14e5f.styles = (0, $c60305268e0a629a$export$dbf350e5966cf602)($2795e4e0258f7c7d$var$t18 || ($2795e4e0258f7c7d$var$t18 = $2795e4e0258f7c7d$var$_`:host { display: block; } :host([hidden]) { display: none; } .state-layer { --m3e-state-layer-hover-color: var( --m3e-selection-indicator-state-layer-hover-color, ${0} ); --m3e-state-layer-hover-opacity: var( --m3e-selection-indicator-state-layer-hover-opacity, ${0} ); --m3e-state-layer-focus-color: var( --m3e-selection-indicator-state-layer-focus-color, ${0} ); --m3e-state-layer-focus-opacity: var( --m3e-selection-indicator-state-layer-focus-opacity, ${0} ); --m3e-state-layer-pressed-color: var( --m3e-selection-indicator-state-layer-pressed-color, ${0} ); --m3e-state-layer-pressed-opacity: var( --m3e-selection-indicator-state-layer-pressed-opacity, ${0} ); --m3e-state-layer-duration: var( --m3e-selection-indicator-state-layer-duration, ${0} ); --m3e-state-layer-easing: var( --m3e-selection-indicator-state-layer-easing, ${0} ); } :host, .base, .indicator { position: absolute; inset: 0; pointer-events: none; border-radius: inherit; } .indicator { opacity: 0; will-change: opacity; } :host(:not([disabled])) .indicator { background-color: var(--m3e-selection-indicator-color, ${0}); } :host(:not(:is(:state(--no-animate), :--no-animate))) .indicator { transition: ${0}; } .base { contain: layout style paint; } :host(:not([centered])) .base { transform-origin: var(--_pressed-origin-x, center) center; } :host([centered]) .base { transform-origin: center center; } :host([selected]:not([bounce]):not(:is(:state(--no-animate), :--no-animate))) .base { animation: ${0}; } :host([selected][bounce]:not(:is(:state(--no-animate), :--no-animate))) .base { animation: ${0}; } :host([selected]) .indicator { opacity: 1; transition: none; } :host(:not(:is(:state(--no-animate), :--no-animate))) .indicator { transition: ${0}; } @keyframes grow { 0% { transform: scaleX(0); } 100% { transform: scaleX(1); } } @keyframes grow-bounce { 0% { transform: scaleX(0); } 60% { transform: scaleX(1.05); } 100% { transform: scaleX(1); } } @media (prefers-reduced-motion) { :host(:not(:is(:state(--no-animate), :--no-animate))) .indicator { transition: none; } :host([selected]:not([bounce]):not(:is(:state(--no-animate), :--no-animate))) .base, :host([selected][bounce]:not(:is(:state(--no-animate), :--no-animate))) .base { animation: none; } }`), $2795e4e0258f7c7d$export$b6ce77d07cd22443.color.onSurface, $2795e4e0258f7c7d$export$b6ce77d07cd22443.state.hoverStateLayerOpacity, $2795e4e0258f7c7d$export$b6ce77d07cd22443.color.onSurface, $2795e4e0258f7c7d$export$b6ce77d07cd22443.state.focusStateLayerOpacity, $2795e4e0258f7c7d$export$b6ce77d07cd22443.color.onSurface, $2795e4e0258f7c7d$export$b6ce77d07cd22443.state.pressedStateLayerOpacity, $2795e4e0258f7c7d$export$b6ce77d07cd22443.motion.duration.medium1, $2795e4e0258f7c7d$export$b6ce77d07cd22443.motion.easing.standard, $2795e4e0258f7c7d$export$b6ce77d07cd22443.color.secondaryContainer, (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`opacity var(--m3e-selection-indicator-state-layer-duration, ${$2795e4e0258f7c7d$export$b6ce77d07cd22443.motion.duration.medium1}) var(--m3e-selection-indicator-state-layer-easing, ${$2795e4e0258f7c7d$export$b6ce77d07cd22443.motion.easing.standard})`), (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`grow ${$2795e4e0258f7c7d$export$b6ce77d07cd22443.motion.duration.medium2} ${$2795e4e0258f7c7d$export$b6ce77d07cd22443.motion.easing.standardDecelerate}`), (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`grow-bounce ${$2795e4e0258f7c7d$export$b6ce77d07cd22443.motion.duration.medium2} ${$2795e4e0258f7c7d$export$b6ce77d07cd22443.motion.easing.standardDecelerate}`), (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`opacity ${$2795e4e0258f7c7d$export$b6ce77d07cd22443.motion.duration.short4} ${$2795e4e0258f7c7d$export$b6ce77d07cd22443.motion.easing.standard}`));
(0, $ee430606400354b3$export$29e00dfd3077644b)([
    (0, $f34c39adfc319163$export$2fa187e846a241c4)(".base")
], $2795e4e0258f7c7d$export$9c88f2b92fe14e5f.prototype, "_base", void 0);
(0, $ee430606400354b3$export$29e00dfd3077644b)([
    (0, $f34c39adfc319163$export$2fa187e846a241c4)(".state-layer")
], $2795e4e0258f7c7d$export$9c88f2b92fe14e5f.prototype, "_stateLayer", void 0);
(0, $ee430606400354b3$export$29e00dfd3077644b)([
    (0, $e48c8bdf0d6f523c$export$d541bacb2bda4494)({
        type: Boolean,
        reflect: true
    })
], $2795e4e0258f7c7d$export$9c88f2b92fe14e5f.prototype, "disabled", void 0);
(0, $ee430606400354b3$export$29e00dfd3077644b)([
    (0, $e48c8bdf0d6f523c$export$d541bacb2bda4494)({
        type: Boolean,
        reflect: true
    })
], $2795e4e0258f7c7d$export$9c88f2b92fe14e5f.prototype, "selected", void 0);
(0, $ee430606400354b3$export$29e00dfd3077644b)([
    (0, $e48c8bdf0d6f523c$export$d541bacb2bda4494)({
        type: Boolean,
        reflect: true
    })
], $2795e4e0258f7c7d$export$9c88f2b92fe14e5f.prototype, "bounce", void 0);
(0, $ee430606400354b3$export$29e00dfd3077644b)([
    (0, $e48c8bdf0d6f523c$export$d541bacb2bda4494)({
        type: Boolean,
        reflect: true
    })
], $2795e4e0258f7c7d$export$9c88f2b92fe14e5f.prototype, "centered", void 0);
$2795e4e0258f7c7d$export$9c88f2b92fe14e5f = (0, $ee430606400354b3$export$29e00dfd3077644b)([
    $2795e4e0258f7c7d$export$da64fc29f17f9d0e("m3e-selection-indicator")
], $2795e4e0258f7c7d$export$9c88f2b92fe14e5f);
var $2795e4e0258f7c7d$var$_M3eSlideElement_instances, $2795e4e0258f7c7d$var$_M3eSlideElement_items, $2795e4e0258f7c7d$var$_M3eSlideElement_handleSlotChange, $2795e4e0258f7c7d$var$_M3eSlideElement_updateItems;
/**
 * A carousel-like container used to horizontally cycle through slotted items.
 *
 * @example
 * The following example illustrates the use of `m3e-slide` to cycle through content.
 * In this example, `selected-index` is set to `1` so that "Content at index 1" is presented
 * by the component.
 * ```html
 * <m3e-slide selected-index="1">
 *  <div>Content at index 0</div>
 *  <div>Content at index 1</div>
 *  <div>Content at index 2</div>
 *  <div>Content at index 3</div>
 * </m3e-slide>
 * ```
 *
 * @tag m3e-slide
 *
 * @slot - Renders the items through which to cycle.
 *
 * @attr selected-index - The zero-based index of the visible item.
 *
 * @cssprop --m3e-slide-animation-duration - The duration of transitions between slotted items.
 */ let $2795e4e0258f7c7d$export$84a19532d31c2af4 = class M3eSlideElement extends $2795e4e0258f7c7d$export$282c9fa792fbac93((0, $08f2bff00ea64ee4$export$3f2f9f5909897157)) {
    /** @inheritdoc */ connectedCallback() {
        super.connectedCallback();
        $2795e4e0258f7c7d$export$ddd0a0ac12dd84d8(this, "--no-animate");
    }
    /** @inheritdoc */ update(changedProperties) {
        super.update(changedProperties);
        if (changedProperties.has("selectedIndex")) {
            if (this.selectedIndex === null) $2795e4e0258f7c7d$export$ddd0a0ac12dd84d8(this, "--no-animate");
            (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_M3eSlideElement_instances, "m", $2795e4e0258f7c7d$var$_M3eSlideElement_updateItems).call(this);
            if (this.selectedIndex !== null && $2795e4e0258f7c7d$export$6bae5520ca265d22(this, "--no-animate")) requestAnimationFrame(()=>{
                if (this.selectedIndex !== null) $2795e4e0258f7c7d$export$eda34dc61103d62e(this, "--no-animate");
            });
        }
    }
    /** @inheritdoc */ render() {
        return (0, $5e4f263f2dad39fc$export$c0bb0b647f701bb5)($2795e4e0258f7c7d$var$t19 || ($2795e4e0258f7c7d$var$t19 = $2795e4e0258f7c7d$var$_`<slot @slotchange="${0}"></slot>`), (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_M3eSlideElement_instances, "m", $2795e4e0258f7c7d$var$_M3eSlideElement_handleSlotChange));
    }
    constructor(){
        super(...arguments);
        $2795e4e0258f7c7d$var$_M3eSlideElement_instances.add(this);
        /** @private */ $2795e4e0258f7c7d$var$_M3eSlideElement_items.set(this, new Array());
        /**
     * The zero-based index of the visible item.
     * @default null
     */ this.selectedIndex = null;
    }
};
$2795e4e0258f7c7d$var$_M3eSlideElement_items = new WeakMap();
$2795e4e0258f7c7d$var$_M3eSlideElement_instances = new WeakSet();
$2795e4e0258f7c7d$var$_M3eSlideElement_handleSlotChange = function _M3eSlideElement_handleSlotChange(e) {
    const items = [
        ...e.target.assignedElements({
            flatten: true
        })
    ];
    for (const removed of (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_M3eSlideElement_items, "f").filter((x)=>!items.includes(x))){
        removed.classList.remove("-before");
        removed.classList.remove("-after");
        removed.removeAttribute("inert");
    }
    (0, $ee430606400354b3$export$d40a35129aaff81f)(this, $2795e4e0258f7c7d$var$_M3eSlideElement_items, items, "f");
    (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_M3eSlideElement_instances, "m", $2795e4e0258f7c7d$var$_M3eSlideElement_updateItems).call(this);
};
$2795e4e0258f7c7d$var$_M3eSlideElement_updateItems = function _M3eSlideElement_updateItems() {
    var _this_selectedIndex;
    const selectedIndex = (_this_selectedIndex = this.selectedIndex) !== null && _this_selectedIndex !== void 0 ? _this_selectedIndex : (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_M3eSlideElement_items, "f").length;
    for(let i = 0; i < (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_M3eSlideElement_items, "f").length; i++){
        const item = (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_M3eSlideElement_items, "f")[i];
        item.classList.toggle("-before", i < selectedIndex);
        item.classList.toggle("-after", i > selectedIndex);
        item.toggleAttribute("inert", i !== selectedIndex);
    }
};
/** The styles of the element. */ $2795e4e0258f7c7d$export$84a19532d31c2af4.styles = (0, $c60305268e0a629a$export$dbf350e5966cf602)($2795e4e0258f7c7d$var$t20 || ($2795e4e0258f7c7d$var$t20 = $2795e4e0258f7c7d$var$_`:host { display: flex; position: relative; overflow: hidden; } :host([hidden]) { display: none; } ::slotted(*) { width: 100%; top: 0; transition: ${0}; } ::slotted(.-before), ::slotted(.-after) { visibility: hidden; position: absolute; } ::slotted(.-before) { inset-inline-start: -100%; } ::slotted(.-after) { inset-inline-start: 100%; } ::slotted(:not(.-before):not(.-after)) { position: relative; inset-inline-start: 0; } :host(:is(:state(--no-animate), :--no-animate)) ::slotted(*) { transition: none; } @media (prefers-reduced-motion) { ::slotted(*) { transition: none; } }`), (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`inset-inline-start var(--m3e-slide-animation-duration, ${$2795e4e0258f7c7d$export$b6ce77d07cd22443.motion.duration.long2}) ${$2795e4e0258f7c7d$export$b6ce77d07cd22443.motion.easing.standard},
        visibility var(--m3e-slide-animation-duration, ${$2795e4e0258f7c7d$export$b6ce77d07cd22443.motion.duration.long2}) ${$2795e4e0258f7c7d$export$b6ce77d07cd22443.motion.easing.standard} allow-discrete`));
(0, $ee430606400354b3$export$29e00dfd3077644b)([
    (0, $e48c8bdf0d6f523c$export$d541bacb2bda4494)({
        attribute: "selected-index",
        type: Number,
        reflect: true
    })
], $2795e4e0258f7c7d$export$84a19532d31c2af4.prototype, "selectedIndex", void 0);
$2795e4e0258f7c7d$export$84a19532d31c2af4 = (0, $ee430606400354b3$export$29e00dfd3077644b)([
    $2795e4e0258f7c7d$export$da64fc29f17f9d0e("m3e-slide")
], $2795e4e0258f7c7d$export$84a19532d31c2af4);
/**
 * Component design tokens that control the `M3eStateLayerElement`.
 * @internal
 */ const $2795e4e0258f7c7d$var$StateLayerToken = {
    hoverColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-state-layer-hover-color, ${$2795e4e0258f7c7d$export$b6ce77d07cd22443.color.onSurface})`),
    hoverOpacity: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-state-layer-hover-opacity, ${$2795e4e0258f7c7d$export$b6ce77d07cd22443.state.hoverStateLayerOpacity})`),
    focusColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-state-layer-focus-color, ${$2795e4e0258f7c7d$export$b6ce77d07cd22443.color.onSurface})`),
    focusOpacity: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-state-layer-focus-opacity, ${$2795e4e0258f7c7d$export$b6ce77d07cd22443.state.focusStateLayerOpacity})`),
    pressedColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-state-layer-pressed-color, ${$2795e4e0258f7c7d$export$b6ce77d07cd22443.color.onSurface})`),
    pressedOpacity: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-state-layer-pressed-opacity, ${$2795e4e0258f7c7d$export$b6ce77d07cd22443.state.pressedStateLayerOpacity})`),
    duration: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-state-layer-duration, ${$2795e4e0258f7c7d$export$b6ce77d07cd22443.motion.duration.medium1})`),
    easing: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-state-layer-easing, ${$2795e4e0258f7c7d$export$b6ce77d07cd22443.motion.easing.standard})`)
};
var $2795e4e0258f7c7d$var$_M3eStateLayerElement_instances, $2795e4e0258f7c7d$var$_M3eStateLayerElement_hoverController, $2795e4e0258f7c7d$var$_M3eStateLayerElement_focusController, $2795e4e0258f7c7d$var$_M3eStateLayerElement_pressedController, $2795e4e0258f7c7d$var$_M3eStateLayerElement_handleHoverChange, $2795e4e0258f7c7d$var$_M3eStateLayerElement_handleFocusChange, $2795e4e0258f7c7d$var$_M3eStateLayerElement_handlePressedChange, $2795e4e0258f7c7d$var$_M3eStateLayerElement_updateHoverController, $2795e4e0258f7c7d$var$_M3eStateLayerElement_updatePressedController;
/**
 * Provides focus and hover state layer treatment for an interactive element.
 *
 * @description
 * The `m3e-state-layer` component is an absolute positioned element used to depict hover and focus overlays.
 * The parenting element must be a relative positioned element.
 *
 * This element can be attached to an interactive element using the `for` attribute or programmatically using the `attach` method.
 * The state layer is displayed when the interactive element is either hovered or focused.  This can be disabled using
 * the `disabled` attribute.
 *
 * @example
 * The following example illustrates attaching a state layer to an interactive element. In this example, the parenting div
 * has relative positioning and is given an `id` referenced by `m3e-state-layer` using the `for` attribute.  Note that `#myDiv`
 * is not used when specifying the attached element's identifier.  The `#` is inferred.
 *
 * ```html
 * <div id="myDiv" tabindex="0" style="position: relative;">
 *  <m3e-state-layer for="myDiv"></m3e-state-layer>
 * <div>
 * ```
 *
 * @tag m3e-state-layer
 *
 * @attr disabled - Whether hover and focus events will not trigger the state layer. State layers can still be controlled manually using the `show` and `hide` methods.
 * @attr disable-hover - Whether hover events will not trigger the state layer. State layers can still be controlled manually using the `show` and `hide` methods.
 * @attr enable-pressed - Whether pressed events will trigger the state layer. State layers can still be controlled manually using the `show` and `hide` methods.
 *
 * @cssprop --m3e-state-layer-duration - Duration of state layer changes.
 * @cssprop --m3e-state-layer-easing - Easing curve of state layer changes.
 * @cssprop --m3e-state-layer-focus-color - Color on focus.
 * @cssprop --m3e-state-layer-focus-opacity - Opacity on focus.
 * @cssprop --m3e-state-layer-hover-color - Color on hover.
 * @cssprop --m3e-state-layer-hover-opacity - Opacity on hover.
 * @cssprop --m3e-state-layer-pressed-color - Color on pressed.
 * @cssprop --m3e-state-layer-pressed-opacity - Opacity on pressed.
 */ let $2795e4e0258f7c7d$export$c4e02de320ba9d5f = class M3eStateLayerElement extends $2795e4e0258f7c7d$export$ccf21c713b2bbcbb($2795e4e0258f7c7d$export$46919bad18fb2f76((0, $08f2bff00ea64ee4$export$3f2f9f5909897157), "none")) {
    /**
   * Launches a manual state layer.
   * @param {"hover" | "focused" | "pressed"} state The state of the layer to show.
   */ show(state) {
        var _this__layer;
        (_this__layer = this._layer) === null || _this__layer === void 0 ? void 0 : _this__layer.classList.toggle(state, true);
    }
    /**
   * Hides the state layer.
   * @param {"hover" | "focused" | "pressed"} state The state of the layer to hide.
   */ hide(state) {
        var _this__layer;
        (_this__layer = this._layer) === null || _this__layer === void 0 ? void 0 : _this__layer.classList.toggle(state, false);
    }
    /** @inheritdoc */ attach(control) {
        super.attach(control);
        (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_M3eStateLayerElement_focusController, "f").observe(control);
        (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_M3eStateLayerElement_instances, "m", $2795e4e0258f7c7d$var$_M3eStateLayerElement_updateHoverController).call(this);
        (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_M3eStateLayerElement_instances, "m", $2795e4e0258f7c7d$var$_M3eStateLayerElement_updatePressedController).call(this);
    }
    /** @inheritdoc */ detach() {
        if (this.control) {
            (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_M3eStateLayerElement_hoverController, "f").unobserve(this.control);
            (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_M3eStateLayerElement_focusController, "f").unobserve(this.control);
            (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_M3eStateLayerElement_pressedController, "f").unobserve(this.control);
        }
        super.detach();
    }
    /** @inheritdoc */ connectedCallback() {
        this.ariaHidden = "true";
        super.connectedCallback();
    }
    /** @inheritdoc */ disconnectedCallback() {
        super.disconnectedCallback();
        this.hide("hover");
        this.hide("focused");
    }
    /** @inheritdoc */ updated(_changedProperties) {
        super.updated(_changedProperties);
        if (_changedProperties.has("disabled") && this.disabled) {
            this.hide("hover");
            this.hide("focused");
        }
        if (_changedProperties.has("disableHover") && this.disableHover) {
            (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_M3eStateLayerElement_instances, "m", $2795e4e0258f7c7d$var$_M3eStateLayerElement_updateHoverController).call(this);
            this.hide("hover");
        }
        if (_changedProperties.has("enablePressed") && !this.enablePressed) {
            (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_M3eStateLayerElement_instances, "m", $2795e4e0258f7c7d$var$_M3eStateLayerElement_updatePressedController).call(this);
            this.hide("pressed");
        }
    }
    /** @inheritdoc */ render() {
        return (0, $5e4f263f2dad39fc$export$c0bb0b647f701bb5)($2795e4e0258f7c7d$var$t21 || ($2795e4e0258f7c7d$var$t21 = $2795e4e0258f7c7d$var$_`<div class="layer"></div>`));
    }
    constructor(){
        super(...arguments);
        $2795e4e0258f7c7d$var$_M3eStateLayerElement_instances.add(this);
        /** @private */ $2795e4e0258f7c7d$var$_M3eStateLayerElement_hoverController.set(this, new $2795e4e0258f7c7d$export$e97521e950437f92(this, {
            target: null,
            callback: (hovering)=>(0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_M3eStateLayerElement_instances, "m", $2795e4e0258f7c7d$var$_M3eStateLayerElement_handleHoverChange).call(this, hovering)
        }));
        /** @private */ $2795e4e0258f7c7d$var$_M3eStateLayerElement_focusController.set(this, new $2795e4e0258f7c7d$export$766c876d58dec02e(this, {
            target: null,
            callback: (_, focusVisible)=>(0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_M3eStateLayerElement_instances, "m", $2795e4e0258f7c7d$var$_M3eStateLayerElement_handleFocusChange).call(this, focusVisible)
        }));
        /** @private */ $2795e4e0258f7c7d$var$_M3eStateLayerElement_pressedController.set(this, new $2795e4e0258f7c7d$export$1351ab2eef382c23(this, {
            target: null,
            capture: true,
            minPressedDuration: 225,
            isPressedKey: (key)=>key === " ",
            callback: (pressed)=>(0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_M3eStateLayerElement_instances, "m", $2795e4e0258f7c7d$var$_M3eStateLayerElement_handlePressedChange).call(this, pressed)
        }));
        /**
     * Whether hover and focus events will not trigger the state layer. State layers can still
     * be controlled manually using the `show` and `hide` methods.
     * @default false
     */ this.disabled = false;
        /**
     * Whether hover events will not trigger the state layer. State layers can still
     * be controlled manually using the `show` and `hide` methods.
     * @default false
     */ this.disableHover = false;
        /**
     * Whether pressed events will trigger the state layer. State layers can still
     * be controlled manually using the `show` and `hide` methods.
     * @default false
     */ this.enablePressed = false;
    }
};
$2795e4e0258f7c7d$var$_M3eStateLayerElement_hoverController = new WeakMap();
$2795e4e0258f7c7d$var$_M3eStateLayerElement_focusController = new WeakMap();
$2795e4e0258f7c7d$var$_M3eStateLayerElement_pressedController = new WeakMap();
$2795e4e0258f7c7d$var$_M3eStateLayerElement_instances = new WeakSet();
$2795e4e0258f7c7d$var$_M3eStateLayerElement_handleHoverChange = function _M3eStateLayerElement_handleHoverChange(hovering) {
    if (!this.disabled && !this.disableHover) {
        if (hovering) this.show("hover");
        else this.hide("hover");
    }
};
$2795e4e0258f7c7d$var$_M3eStateLayerElement_handleFocusChange = function _M3eStateLayerElement_handleFocusChange(focusVisible) {
    if (!this.disabled) {
        if (focusVisible) this.show("focused");
        else this.hide("focused");
    }
};
$2795e4e0258f7c7d$var$_M3eStateLayerElement_handlePressedChange = function _M3eStateLayerElement_handlePressedChange(pressed) {
    if (!this.disabled && this.enablePressed) {
        if (pressed) this.show("pressed");
        else this.hide("pressed");
    }
};
$2795e4e0258f7c7d$var$_M3eStateLayerElement_updateHoverController = function _M3eStateLayerElement_updateHoverController() {
    if (!this.control) return;
    if (this.disableHover) (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_M3eStateLayerElement_hoverController, "f").unobserve(this.control);
    else (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_M3eStateLayerElement_hoverController, "f").observe(this.control);
};
$2795e4e0258f7c7d$var$_M3eStateLayerElement_updatePressedController = function _M3eStateLayerElement_updatePressedController() {
    if (!this.control) return;
    if (this.enablePressed) (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_M3eStateLayerElement_pressedController, "f").observe(this.control);
    else (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_M3eStateLayerElement_pressedController, "f").unobserve(this.control);
};
/** The styles of the element. */ $2795e4e0258f7c7d$export$c4e02de320ba9d5f.styles = (0, $c60305268e0a629a$export$dbf350e5966cf602)($2795e4e0258f7c7d$var$t22 || ($2795e4e0258f7c7d$var$t22 = $2795e4e0258f7c7d$var$_`:host { display: block; } :host([hidden]) { display: none; } :host, .layer { position: absolute; left: 0; top: 0; right: 0; bottom: 0; pointer-events: none; border-radius: inherit; } .layer { contain: layout style paint; will-change: background-color; transition: ${0}; } .layer.focused { background-color: color-mix(in srgb, ${0} ${0}, transparent); } .layer.hover { background-color: color-mix(in srgb, ${0} ${0}, transparent); } .layer.pressed { background-color: color-mix( in srgb, ${0} ${0}, transparent ); } @media (prefers-reduced-motion) { .layer { transition: none; } } @media (forced-colors: active) { .layer { display: none; } }`), (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`background-color ${$2795e4e0258f7c7d$var$StateLayerToken.duration} ${$2795e4e0258f7c7d$var$StateLayerToken.easing}`), $2795e4e0258f7c7d$var$StateLayerToken.focusColor, $2795e4e0258f7c7d$var$StateLayerToken.focusOpacity, $2795e4e0258f7c7d$var$StateLayerToken.hoverColor, $2795e4e0258f7c7d$var$StateLayerToken.hoverOpacity, $2795e4e0258f7c7d$var$StateLayerToken.pressedColor, $2795e4e0258f7c7d$var$StateLayerToken.pressedOpacity);
(0, $ee430606400354b3$export$29e00dfd3077644b)([
    (0, $f34c39adfc319163$export$2fa187e846a241c4)(".layer")
], $2795e4e0258f7c7d$export$c4e02de320ba9d5f.prototype, "_layer", void 0);
(0, $ee430606400354b3$export$29e00dfd3077644b)([
    (0, $e48c8bdf0d6f523c$export$d541bacb2bda4494)({
        type: Boolean,
        reflect: true
    })
], $2795e4e0258f7c7d$export$c4e02de320ba9d5f.prototype, "disabled", void 0);
(0, $ee430606400354b3$export$29e00dfd3077644b)([
    (0, $e48c8bdf0d6f523c$export$d541bacb2bda4494)({
        attribute: "disable-hover",
        type: Boolean,
        reflect: true
    })
], $2795e4e0258f7c7d$export$c4e02de320ba9d5f.prototype, "disableHover", void 0);
(0, $ee430606400354b3$export$29e00dfd3077644b)([
    (0, $e48c8bdf0d6f523c$export$d541bacb2bda4494)({
        attribute: "enable-pressed",
        type: Boolean,
        reflect: true
    })
], $2795e4e0258f7c7d$export$c4e02de320ba9d5f.prototype, "enablePressed", void 0);
$2795e4e0258f7c7d$export$c4e02de320ba9d5f = (0, $ee430606400354b3$export$29e00dfd3077644b)([
    $2795e4e0258f7c7d$export$da64fc29f17f9d0e("m3e-state-layer")
], $2795e4e0258f7c7d$export$c4e02de320ba9d5f);
var $2795e4e0258f7c7d$var$_M3eTextHighlightElement_instances, $2795e4e0258f7c7d$var$_M3eTextHighlightElement_id, $2795e4e0258f7c7d$var$_M3eTextHighlightElement_ranges, $2795e4e0258f7c7d$var$_M3eTextHighlightElement_styles, $2795e4e0258f7c7d$var$_M3eTextHighlightElement_isTextNode, $2795e4e0258f7c7d$var$_M3eTextHighlightElement_findTextNodes, $2795e4e0258f7c7d$var$_M3eTextHighlightElement_highlight;
var $2795e4e0258f7c7d$var$M3eTextHighlightElement_1;
/**
 * Highlights text which matches a given search term.
 *
 * @description
 * Highlights all text ranges in slotted content that match a given search term using the CSS Custom Highlight API.
 *
 * @example
 * The following example illustrates highlighting "Lor".
 * ```html
 * <m3e-text-highlight term="Lor">
 *  <p>
 *    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
 *    ut labore et dolore magna aliqua.
 *  </p>
 * </m3e-text-highlight>
 * ```
 *
 * @tag m3e-text-highlight
 *
 * @slot - Renders the content to highlight.
 *
 * @attr case-sensitive - Whether matching is case sensitive.
 * @attr disabled - Whether text highlighting is disabled.
 * @attr mode - The mode in which to highlight text.
 * @attr term - The term to highlight.
 *
 * @fires highlight - Dispatched when content is highlighted.
 *
 * @cssprop --m3e-text-highlight-container-color - Background color applied to highlighted text ranges.
 * @cssprop --m3e-text-highlight-color - Foreground color of highlighted text content.
 * @cssprop --m3e-text-highlight-decoration - Optional text decoration (e.g., underline, line-through) for highlighted text.
 * @cssprop --m3e-text-highlight-shadow - Optional text shadow for emphasis or contrast.
 */ let $2795e4e0258f7c7d$export$3d345992ff2fb87e = $2795e4e0258f7c7d$var$M3eTextHighlightElement_1 = class M3eTextHighlightElement extends (0, $08f2bff00ea64ee4$export$3f2f9f5909897157) {
    /** Whether text highlighting is supported by the browser. */ get isSupported() {
        return !(0, $c7d93c12585fc7f5$export$6acf61af03e62db) && CSS.highlights ? true : false;
    }
    /** The ranges that match the current term. */ get ranges() {
        return (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_M3eTextHighlightElement_ranges, "f");
    }
    /** @inheritdoc */ firstUpdated(_changedProperties) {
        super.firstUpdated(_changedProperties);
        if (this.shadowRoot && (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_M3eTextHighlightElement_styles, "f") && !this.shadowRoot.adoptedStyleSheets.includes((0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_M3eTextHighlightElement_styles, "f"))) this.shadowRoot.adoptedStyleSheets.push((0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_M3eTextHighlightElement_styles, "f"));
    }
    /** @inheritdoc */ updated(_changedProperties) {
        super.updated(_changedProperties);
        if (_changedProperties.has("term") || _changedProperties.has("caseSensitive") || _changedProperties.has("disabled")) (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_M3eTextHighlightElement_instances, "m", $2795e4e0258f7c7d$var$_M3eTextHighlightElement_highlight).call(this);
    }
    /** @inheritdoc */ render() {
        return (0, $5e4f263f2dad39fc$export$c0bb0b647f701bb5)($2795e4e0258f7c7d$var$t23 || ($2795e4e0258f7c7d$var$t23 = $2795e4e0258f7c7d$var$_`<slot @slotchange="${0}"></slot>`), (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_M3eTextHighlightElement_instances, "m", $2795e4e0258f7c7d$var$_M3eTextHighlightElement_highlight));
    }
    constructor(){
        super();
        $2795e4e0258f7c7d$var$_M3eTextHighlightElement_instances.add(this);
        /** @private */ $2795e4e0258f7c7d$var$_M3eTextHighlightElement_id.set(this, `m3e-text-highlight-${$2795e4e0258f7c7d$var$M3eTextHighlightElement_1.__nextId++}`);
        /** @private */ $2795e4e0258f7c7d$var$_M3eTextHighlightElement_ranges.set(this, new Array());
        /** @private */ $2795e4e0258f7c7d$var$_M3eTextHighlightElement_styles.set(this, null);
        /**
     * Whether text highlighting is disabled.
     * @default false
     */ this.disabled = false;
        /**
     * The term to highlight.
     * @default ""
     */ this.term = "";
        /**
     * Whether matching is case sensitive.
     * @default false
     */ this.caseSensitive = false;
        /**
     * The mode in which to highlight text.
     * @default "contains"
     */ this.mode = "contains";
        if (this.isSupported) {
            (0, $ee430606400354b3$export$d40a35129aaff81f)(this, $2795e4e0258f7c7d$var$_M3eTextHighlightElement_styles, new CSSStyleSheet(), "f");
            (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_M3eTextHighlightElement_styles, "f").replaceSync((0, $c60305268e0a629a$export$dbf350e5966cf602)($2795e4e0258f7c7d$var$t24 || ($2795e4e0258f7c7d$var$t24 = $2795e4e0258f7c7d$var$_`::highlight(${0}) { background-color: var(--m3e-text-highlight-container-color, Highlight); color: var(--m3e-text-highlight-color, HighlightText); text-decoration: var(--m3e-text-highlight-decoration); text-shadow: var(--m3e-text-highlight-shadow); }`), (0, $c60305268e0a629a$export$8d80f9cac07cdb3)((0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_M3eTextHighlightElement_id, "f"))).toString());
        }
    }
};
$2795e4e0258f7c7d$var$_M3eTextHighlightElement_id = new WeakMap();
$2795e4e0258f7c7d$var$_M3eTextHighlightElement_ranges = new WeakMap();
$2795e4e0258f7c7d$var$_M3eTextHighlightElement_styles = new WeakMap();
$2795e4e0258f7c7d$var$_M3eTextHighlightElement_instances = new WeakSet();
$2795e4e0258f7c7d$var$_M3eTextHighlightElement_isTextNode = function _M3eTextHighlightElement_isTextNode(node) {
    return !/^\s*$/.test(node.data);
};
$2795e4e0258f7c7d$var$_M3eTextHighlightElement_findTextNodes = function _M3eTextHighlightElement_findTextNodes(parent, nodes) {
    if (parent instanceof HTMLSlotElement) parent.assignedNodes({
        flatten: true
    }).forEach((x)=>{
        switch(x.nodeType){
            case Node.TEXT_NODE:
                if ((0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_M3eTextHighlightElement_instances, "m", $2795e4e0258f7c7d$var$_M3eTextHighlightElement_isTextNode).call(this, x)) nodes.push(x);
                break;
            case Node.ELEMENT_NODE:
                (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_M3eTextHighlightElement_instances, "m", _M3eTextHighlightElement_findTextNodes).call(this, x, nodes);
                break;
        }
    });
    else parent.childNodes.forEach((x)=>{
        switch(x.nodeType){
            case Node.TEXT_NODE:
                if ((0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_M3eTextHighlightElement_instances, "m", $2795e4e0258f7c7d$var$_M3eTextHighlightElement_isTextNode).call(this, x)) nodes.push(x);
                break;
            case Node.ELEMENT_NODE:
                (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_M3eTextHighlightElement_instances, "m", _M3eTextHighlightElement_findTextNodes).call(this, x, nodes);
                break;
        }
    });
};
$2795e4e0258f7c7d$var$_M3eTextHighlightElement_highlight = function _M3eTextHighlightElement_highlight() {
    if (!this.isSupported || !this.isConnected) return;
    CSS.highlights.delete((0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_M3eTextHighlightElement_id, "f"));
    (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_M3eTextHighlightElement_ranges, "f").length = 0;
    if (this.disabled) return;
    if (!this.term) {
        this.dispatchEvent(new CustomEvent("highlight", {
            detail: [
                ...(0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_M3eTextHighlightElement_ranges, "f")
            ],
            bubbles: false,
            composed: false
        }));
        return;
    }
    const texts = new Array();
    (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_M3eTextHighlightElement_instances, "m", $2795e4e0258f7c7d$var$_M3eTextHighlightElement_findTextNodes).call(this, this, texts);
    if (texts.length > 0) {
        const term = !this.caseSensitive ? this.term.toLowerCase() : this.term;
        switch(this.mode){
            case "starts-with":
                {
                    var _first_textContent;
                    const first = texts[0];
                    var _ref;
                    const text = (_ref = this.caseSensitive ? first.textContent : (_first_textContent = first.textContent) === null || _first_textContent === void 0 ? void 0 : _first_textContent.toLowerCase()) !== null && _ref !== void 0 ? _ref : "";
                    if (text.startsWith(term)) {
                        const range = new Range();
                        range.setStart(first, 0);
                        range.setEnd(first, term.length);
                        (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_M3eTextHighlightElement_ranges, "f").push(range);
                    }
                }
                break;
            case "ends-with":
                {
                    var _last_textContent;
                    const last = texts[texts.length - 1];
                    var _ref1;
                    const text = (_ref1 = this.caseSensitive ? last.textContent : (_last_textContent = last.textContent) === null || _last_textContent === void 0 ? void 0 : _last_textContent.toLowerCase()) !== null && _ref1 !== void 0 ? _ref1 : "";
                    if (text.endsWith(term)) {
                        const start = text.length - term.length;
                        const end = start + term.length;
                        const range = new Range();
                        range.setStart(last, start);
                        range.setEnd(last, end);
                        (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_M3eTextHighlightElement_ranges, "f").push(range);
                    }
                }
                break;
            case "contains":
                (0, $ee430606400354b3$export$d40a35129aaff81f)(this, $2795e4e0258f7c7d$var$_M3eTextHighlightElement_ranges, texts.map((x)=>{
                    var _x_textContent;
                    var _ref;
                    return {
                        el: x,
                        text: (_ref = !this.caseSensitive ? (_x_textContent = x.textContent) === null || _x_textContent === void 0 ? void 0 : _x_textContent.toLowerCase() : x.textContent) !== null && _ref !== void 0 ? _ref : ""
                    };
                }).map(({ el: el, text: text })=>{
                    const indices = new Array();
                    let startPos = 0;
                    while(startPos < text.length){
                        const index = text.indexOf(term, startPos);
                        if (index === -1) break;
                        indices.push(index);
                        startPos = index + term.length;
                    }
                    return indices.map((index)=>{
                        const range = new Range();
                        range.setStart(el, index);
                        range.setEnd(el, index + term.length);
                        return range;
                    });
                }).flat(), "f");
                break;
        }
        if ((0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_M3eTextHighlightElement_ranges, "f").length > 0) CSS.highlights.set((0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_M3eTextHighlightElement_id, "f"), new Highlight(...(0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_M3eTextHighlightElement_ranges, "f")));
    }
    this.dispatchEvent(new CustomEvent("highlight", {
        detail: [
            ...(0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $2795e4e0258f7c7d$var$_M3eTextHighlightElement_ranges, "f")
        ],
        bubbles: false,
        composed: false
    }));
};
/** The styles of the element. */ $2795e4e0258f7c7d$export$3d345992ff2fb87e.styles = (0, $c60305268e0a629a$export$dbf350e5966cf602)($2795e4e0258f7c7d$var$t25 || ($2795e4e0258f7c7d$var$t25 = $2795e4e0258f7c7d$var$_`:host { display: contents; } :host([hidden]) { display: none; }`));
/** @private */ $2795e4e0258f7c7d$export$3d345992ff2fb87e.__nextId = 0;
(0, $ee430606400354b3$export$29e00dfd3077644b)([
    (0, $e48c8bdf0d6f523c$export$d541bacb2bda4494)({
        type: Boolean,
        reflect: true
    })
], $2795e4e0258f7c7d$export$3d345992ff2fb87e.prototype, "disabled", void 0);
(0, $ee430606400354b3$export$29e00dfd3077644b)([
    (0, $e48c8bdf0d6f523c$export$d541bacb2bda4494)()
], $2795e4e0258f7c7d$export$3d345992ff2fb87e.prototype, "term", void 0);
(0, $ee430606400354b3$export$29e00dfd3077644b)([
    (0, $e48c8bdf0d6f523c$export$d541bacb2bda4494)({
        attribute: "case-sensitive",
        type: Boolean
    })
], $2795e4e0258f7c7d$export$3d345992ff2fb87e.prototype, "caseSensitive", void 0);
(0, $ee430606400354b3$export$29e00dfd3077644b)([
    (0, $e48c8bdf0d6f523c$export$d541bacb2bda4494)()
], $2795e4e0258f7c7d$export$3d345992ff2fb87e.prototype, "mode", void 0);
$2795e4e0258f7c7d$export$3d345992ff2fb87e = $2795e4e0258f7c7d$var$M3eTextHighlightElement_1 = (0, $ee430606400354b3$export$29e00dfd3077644b)([
    $2795e4e0258f7c7d$export$da64fc29f17f9d0e("m3e-text-highlight")
], $2795e4e0258f7c7d$export$3d345992ff2fb87e);
/**
 * An inline container which presents an ellipsis when content overflows.
 *
 * @description
 * The `m3e-text-overflow` component truncates inline content with an ellipsis when it
 * exceeds the available width. It's intended for use inside flex or otherwise
 * constrained containers to preserve layout while providing predictable, single-line
 * truncation behavior for long text.
 *
 * @example
 * A typical usage inside a flex container where the heading and trailing actions are
 * constrained, allowing the center text to truncate with an ellipsis.
 *
 * ```html
 * <div style="display:flex;align-items:center;gap:12px;">
 *   <m3e-icon name="menu"></m3e-icon>
 *   <m3e-text-overflow>Very long title or breadcrumb that should truncate gracefully</m3e-text-overflow>
 *   <m3e-icon name="more_vert"></m3e-icon>
 * </div>
 * ```
 *
 * @tag m3e-text-overflow
 *
 * @slot - Renders the content to truncate with an ellipsis.
 */ let $2795e4e0258f7c7d$export$5aa27e0fcf302586 = class M3eTextOverflowElement extends (0, $08f2bff00ea64ee4$export$3f2f9f5909897157) {
    /** @inheritdoc */ render() {
        return (0, $5e4f263f2dad39fc$export$c0bb0b647f701bb5)($2795e4e0258f7c7d$var$t26 || ($2795e4e0258f7c7d$var$t26 = $2795e4e0258f7c7d$var$_`<span class="base"><slot></slot></span>`));
    }
};
/** The styles of the element. */ $2795e4e0258f7c7d$export$5aa27e0fcf302586.styles = (0, $c60305268e0a629a$export$dbf350e5966cf602)($2795e4e0258f7c7d$var$t27 || ($2795e4e0258f7c7d$var$t27 = $2795e4e0258f7c7d$var$_`:host { flex: 1 1 auto; display: inline-flex; align-items: center; flex-wrap: nowrap; min-width: 0; } :host([hidden]) { display: none; } .base { flex: 1 1 auto; display: inline; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }`));
$2795e4e0258f7c7d$export$5aa27e0fcf302586 = (0, $ee430606400354b3$export$29e00dfd3077644b)([
    $2795e4e0258f7c7d$export$da64fc29f17f9d0e("m3e-text-overflow")
], $2795e4e0258f7c7d$export$5aa27e0fcf302586);


let $d2bb940843202fcb$var$_ = (t)=>t, $d2bb940843202fcb$var$t, $d2bb940843202fcb$var$t1, $d2bb940843202fcb$var$t2, $d2bb940843202fcb$var$t3, $d2bb940843202fcb$var$t4, $d2bb940843202fcb$var$t5, $d2bb940843202fcb$var$t6, $d2bb940843202fcb$var$t7;
/**
 * Determines whether a value is a `ButtonShape`.
 * @param {unknown} value The value to test.
 * @returns Whether `value` is a `ButtonShape`.
 */ function $d2bb940843202fcb$export$7e58ccbe306fbc6f(value) {
    return value === "rounded" || value === "square";
}
/**
 * Determines whether a value is a `ButtonSize`.
 * @param {unknown} value The value to test.
 * @returns Whether `value` is a `ButtonSize`.
 */ function $d2bb940843202fcb$export$d117a176c0cc6cb4(value) {
    return value === "extra-small" || value === "small" || value === "medium" || value === "large" || value === "extra-large";
}
/**
 * Determines whether a value is a `ButtonVariant`.
 * @param {unknown} value The value to test.
 * @returns Whether `value` is a `ButtonVariant`.
 */ function $d2bb940843202fcb$export$75bf653326ddf5a4(value) {
    return value === "elevated" || value === "filled" || value === "tonal" || value === "outlined";
}
/**
 * Component design tokens that control the `M3eButtonElement` for all size variants.
 * @internal
 */ const $d2bb940843202fcb$var$ButtonSizeToken = {
    "extra-small": {
        containerHeight: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`calc(var(--m3e-button-extra-small-container-height, var(--m3e-button-container-height, 32px)) + ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).density.calc(-3)})`),
        outlineThickness: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--m3e-button-extra-small-outline-thickness, var(--m3e-button-outline-thickness, 1px))"),
        labelTextFontSize: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-button-extra-small-label-text-font-size, var(--m3e-button-label-text-font-size, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).typescale.standard.label.large.fontSize}))`),
        labelTextFontWeight: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-button-extra-small-label-text-font-weight, var(--m3e-button-label-text-font-weight, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).typescale.standard.label.large.fontWeight}))`),
        labelTextLineHeight: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-button-extra-small-label-text-line-height, var(--m3e-button-label-text-line-height, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).typescale.standard.label.large.lineHeight}))`),
        labelTextTracking: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-button-extra-small-label-text-tracking, var(--m3e-button-label-text-tracking, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).typescale.standard.label.large.tracking}))`),
        iconSize: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--m3e-button-extra-small-icon-size, var(--m3e-button-icon-size, 20px))"),
        shapeRound: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-button-extra-small-shape-round, var(--m3e-button-shape-round, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).shape.corner.full}))`),
        shapeSquare: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-button-extra-small-shape-square, var(--m3e-button-shape-square, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).shape.corner.medium}))`),
        selectedShapeRound: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-button-extra-small-selected-shape-round, var(--m3e-button-selected-shape-round, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).shape.corner.medium}))`),
        selectedShapeSquare: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-button-extra-small-selected-shape-square, var(--m3e-button-selected-shape-square, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).shape.corner.full}))`),
        shapePressedMorph: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-button-extra-small-shape-pressed-morph, var(--m3e-button-shape-pressed-morph, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).shape.corner.small}))`),
        leadingSpace: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-button-extra-small-leading-space, var(--m3e-button-leading-space, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).measurement.space150}))`),
        trailingSpace: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-button-extra-small-trailing-space, var(--m3e-button-trailing-space, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).measurement.space150}))`),
        iconLabelSpace: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-button-extra-small-icon-label-space, var(--m3e-button-icon-label-space, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).measurement.space100}))`)
    },
    small: {
        containerHeight: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`calc(var(--m3e-button-small-container-height, var(--m3e-button-container-height, 40px)) + ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).density.calc(-3)})`),
        outlineThickness: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--m3e-button-small-outline-thickness, var(--m3e-button-outline-thickness, 1px))"),
        labelTextFontSize: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-button-small-label-text-font-size, var(--m3e-button-label-text-font-size, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).typescale.standard.label.large.fontSize}))`),
        labelTextFontWeight: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-button-small-label-text-font-weight, var(--m3e-button-label-text-font-weight, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).typescale.standard.label.large.fontWeight}))`),
        labelTextLineHeight: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-button-small-label-text-line-height, var(--m3e-button-label-text-line-height, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).typescale.standard.label.large.lineHeight}))`),
        labelTextTracking: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-button-small-label-text-tracking, var(--m3e-button-label-text-tracking, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).typescale.standard.label.large.tracking}))`),
        iconSize: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--m3e-button-small-icon-size, var(--m3e-button-icon-size, 20px))"),
        shapeRound: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-button-small-shape-round, var(--m3e-button-shape-round, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).shape.corner.full}))`),
        shapeSquare: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-button-small-shape-square, var(--m3e-button-shape-square, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).shape.corner.medium}))`),
        selectedShapeRound: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-button-small-selected-shape-round, var(--m3e-button-selected-shape-round, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).shape.corner.medium}))`),
        selectedShapeSquare: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-button-small-selected-shape-square, var(--m3e-button-selected-shape-square, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).shape.corner.full}))`),
        shapePressedMorph: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-button-small-shape-pressed-morph, var(--m3e-button-shape-pressed-morph, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).shape.corner.small}))`),
        leadingSpace: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-button-small-leading-space, var(--m3e-button-leading-space, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).measurement.space250}))`),
        trailingSpace: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-button-small-trailing-space, var(--m3e-button-trailing-space, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).measurement.space250}))`),
        iconLabelSpace: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-button-small-icon-label-space, var(--m3e-button-icon-label-space, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).measurement.space100}))`)
    },
    medium: {
        containerHeight: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`calc(var(--m3e-button-medium-container-height, var(--m3e-button-container-height, 56px)) + ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).density.calc(-3)})`),
        outlineThickness: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--m3e-button-medium-outline-thickness, var(--m3e-button-outline-thickness, 1px))"),
        labelTextFontSize: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-button-medium-label-text-font-size, var(--m3e-button-label-text-font-size, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).typescale.standard.body.large.fontSize}))`),
        labelTextFontWeight: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-button-medium-label-text-font-weight, var(--m3e-button-label-text-font-weight, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).typescale.standard.body.large.fontWeight}))`),
        labelTextLineHeight: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-button-medium-label-text-line-height, var(--m3e-button-label-text-line-height, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).typescale.standard.body.large.lineHeight}))`),
        labelTextTracking: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-button-medium-label-text-tracking, var(--m3e-button-label-text-tracking, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).typescale.standard.body.large.tracking}))`),
        iconSize: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--m3e-button-medium-icon-size, var(--m3e-button-icon-size, 24px))"),
        shapeRound: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-button-medium-shape-round, var(--m3e-button-shape-round, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).shape.corner.full}))`),
        shapeSquare: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-button-medium-shape-square, var(--m3e-button-shape-square, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).shape.corner.large}))`),
        selectedShapeRound: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-button-medium-selected-shape-round, var(--m3e-button-selected-shape-round, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).shape.corner.large}))`),
        selectedShapeSquare: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-button-medium-selected-shape-square, var(--m3e-button-selected-shape-square, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).shape.corner.full}))`),
        shapePressedMorph: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-button-medium-shape-pressed-morph, var(--m3e-button-shape-pressed-morph, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).shape.corner.medium}))`),
        leadingSpace: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-button-medium-leading-space, var(--m3e-button-leading-space, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).measurement.space300}))`),
        trailingSpace: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-button-medium-trailing-space, var(--m3e-button-trailing-space, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).measurement.space300}))`),
        iconLabelSpace: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-button-medium-icon-label-space, var(--m3e-button-icon-label-space, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).measurement.space100}))`)
    },
    large: {
        containerHeight: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`calc(var(--m3e-button-large-container-height, var(--m3e-button-container-height, 96px)) + ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).density.calc(-3)})`),
        outlineThickness: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--m3e-button-large-outline-thickness, var(--m3e-button-outline-thickness, 2px))"),
        labelTextFontSize: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-button-large-label-text-font-size, var(--m3e-button-label-text-font-size, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).typescale.standard.headline.small.fontSize}))`),
        labelTextFontWeight: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-button-large-label-text-font-weight, var(--m3e-button-label-text-font-weight, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).typescale.standard.headline.small.fontWeight}))`),
        labelTextLineHeight: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-button-large-label-text-line-height, var(--m3e-button-label-text-line-height, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).typescale.standard.headline.small.lineHeight}))`),
        labelTextTracking: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-button-large-label-text-tracking, var(--m3e-button-label-text-tracking, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).typescale.standard.headline.small.tracking}))`),
        iconSize: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--m3e-button-large-icon-size, var(--m3e-button-icon-size, 32px))"),
        shapeRound: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-button-large-shape-round, var(--m3e-button-shape-round, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).shape.corner.full}))`),
        shapeSquare: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-button-large-shape-square, var(--m3e-button-shape-square, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).shape.corner.extraLarge}))`),
        selectedShapeRound: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-button-large-selected-shape-round, var(--m3e-button-selected-shape-round, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).shape.corner.extraLarge}))`),
        selectedShapeSquare: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-button-large-selected-shape-square, var(--m3e-button-selected-shape-square, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).shape.corner.full}))`),
        shapePressedMorph: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-button-large-shape-pressed-morph, var(--m3e-button-shape-pressed-morph, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).shape.corner.large}))`),
        leadingSpace: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-button-large-leading-space, var(--m3e-button-leading-space, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).measurement.space600}))`),
        trailingSpace: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-button-large-trailing-space, var(--m3e-button-trailing-space, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).measurement.space600}))`),
        iconLabelSpace: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-button-large-icon-label-space, var(--m3e-button-icon-label-space, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).measurement.space150}))`)
    },
    "extra-large": {
        containerHeight: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`calc(var(--m3e-button-extra-large-container-height, var(--m3e-button-container-height, 136px)) + ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).density.calc(-3)})`),
        outlineThickness: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--m3e-button-extra-large-outline-thickness, var(--m3e-button-outline-thickness, 3px))"),
        labelTextFontSize: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-button-extra-large-label-text-font-size, var(--m3e-button-label-text-font-size, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).typescale.standard.headline.large.fontSize}))`),
        labelTextFontWeight: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-button-extra-large-label-text-font-weight, var(--m3e-button-label-text-font-weight, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).typescale.standard.headline.large.fontWeight}))`),
        labelTextLineHeight: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-button-extra-large-label-text-line-height, var(--m3e-button-label-text-line-height, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).typescale.standard.headline.large.lineHeight}))`),
        labelTextTracking: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-button-extra-large-label-text-tracking, var(--m3e-button-label-text-tracking, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).typescale.standard.headline.large.tracking}))`),
        iconSize: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("var(--m3e-button-extra-large-icon-size, var(--m3e-button-icon-size, 40px))"),
        shapeRound: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-button-extra-large-shape-round, var(--m3e-button-shape-round, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).shape.corner.full}))`),
        shapeSquare: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-button-extra-large-shape-square, var(--m3e-button-shape-square, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).shape.corner.extraLarge}))`),
        selectedShapeRound: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-button-extra-large-selected-shape-round, var(--m3e-button-selected-shape-round, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).shape.corner.extraLarge}))`),
        selectedShapeSquare: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-button-extra-large-selected-shape-square, var(--m3e-button-selected-shape-square, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).shape.corner.full}))`),
        shapePressedMorph: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-button-extra-large-shape-pressed-morph, var(--m3e-button-shape-pressed-morph, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).shape.corner.large}))`),
        leadingSpace: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-button-extra-large-leading-space, var(--m3e-button-leading-space, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).measurement.space800}))`),
        trailingSpace: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-button-extra-large-trailing-space, var(--m3e-button-trailing-space, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).measurement.space800}))`),
        iconLabelSpace: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-button-extra-large-icon-label-space, var(--m3e-button-icon-label-space, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).measurement.space200}))`)
    }
};
/** @private */ function $d2bb940843202fcb$var$buttonStyle(size) {
    const selector = (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`:is(:state(--${size}), :--${size})`);
    return (0, $c60305268e0a629a$export$dbf350e5966cf602)($d2bb940843202fcb$var$t || ($d2bb940843202fcb$var$t = $d2bb940843202fcb$var$_`:host(${0}) .base { height: ${0}; } :host(${0}) .wrapper { padding-inline-start: calc(${0} - calc(var(--_adjacent-shrink, 0px) / 2)); padding-inline-end: calc(${0} - calc(var(--_adjacent-shrink, 0px) / 2)); column-gap: ${0}; } :host(${0}) .label { font-size: ${0}; font-weight: ${0}; line-height: ${0}; letter-spacing: ${0}; } :host(${0}) .icon { font-size: ${0}; --m3e-icon-size: ${0}; } :host(${0}) .base { outline-offset: calc(0px - ${0}); outline-width: ${0}; } :host(:not(:is(:state(--connected), :--connected))${0}:is(:state(--rounded), :--rounded)) .base { border-radius: var(--_button-shape, ${0}); } :host( :is(:state(--connected), :--connected)${0}:is(:state(--rounded), :--rounded)[toggle][selected]:not( :is(:state(--pressed), :--pressed) ) ) .base { border-radius: var(--_button-shape, ${0}); } :host( :not(:is(:state(--connected), :--connected))${0}:is(:state(--rounded), :--rounded)[toggle][selected]:not( :is(:state(--pressed), :--pressed) ) ) .base { border-radius: ${0}; } :host(:not(:is(:state(--connected), :--connected))${0}:is(:state(--square), :--square)) .base { border-radius: ${0}; } :host( :not(:is(:state(--connected), :--connected))${0}:is(:state(--square), :--square)[toggle][selected]:not( :is(:state(--pressed), :--pressed) ) ) .base { border-radius: var(--_button-shape, ${0}); } :host(:not(:is(:state(--connected), :--connected))${0}:is(:state(--pressed), :--pressed)) .base { border-radius: ${0}; } :host(:is(:state(--connected), :--connected)${0}:is(:state(--rounded), :--rounded):not([toggle][selected])) .base { border-start-start-radius: var( --_button-rounded-start-shape, var(--_button-shape, ${0}) ); border-end-start-radius: var( --_button-rounded-start-shape, var(--_button-shape, ${0}) ); border-start-end-radius: var( --_button-rounded-end-shape, var(--_button-shape, ${0}) ); border-end-end-radius: var( --_button-rounded-end-shape, var(--_button-shape, ${0}) ); } :host(:is(:state(--connected), :--connected)${0}:is(:state(--square), :--square)) .base { border-start-start-radius: var(--_button-square-start-shape, ${0}); border-end-start-radius: var(--_button-square-start-shape, ${0}); border-start-end-radius: var(--_button-square-end-shape, ${0}); border-end-end-radius: var(--_button-square-end-shape, ${0}); } :host( :is(:state(--connected), :--connected)${0}:is(:state(--square), :--square)[toggle][selected]:not( :is(:state(--pressed), :--pressed) ) ) .base { border-radius: var(--_button-shape, ${0}); } :host(:is(:state(--connected), :--connected)${0}:is(:state(--pressed), :--pressed)) .base { border-start-start-radius: var(--_button-start-shape-pressed-morph, ${0}); border-end-start-radius: var(--_button-start-shape-pressed-morph, ${0}); border-start-end-radius: var(--_button-end-shape-pressed-morph, ${0}); border-end-end-radius: var(--_button-end-shape-pressed-morph, ${0}); }`), selector, $d2bb940843202fcb$var$ButtonSizeToken[size].containerHeight, selector, $d2bb940843202fcb$var$ButtonSizeToken[size].leadingSpace, $d2bb940843202fcb$var$ButtonSizeToken[size].trailingSpace, $d2bb940843202fcb$var$ButtonSizeToken[size].iconLabelSpace, selector, $d2bb940843202fcb$var$ButtonSizeToken[size].labelTextFontSize, $d2bb940843202fcb$var$ButtonSizeToken[size].labelTextFontWeight, $d2bb940843202fcb$var$ButtonSizeToken[size].labelTextLineHeight, $d2bb940843202fcb$var$ButtonSizeToken[size].labelTextTracking, selector, $d2bb940843202fcb$var$ButtonSizeToken[size].iconSize, $d2bb940843202fcb$var$ButtonSizeToken[size].iconSize, selector, $d2bb940843202fcb$var$ButtonSizeToken[size].outlineThickness, $d2bb940843202fcb$var$ButtonSizeToken[size].outlineThickness, selector, $d2bb940843202fcb$var$ButtonSizeToken[size].shapeRound, selector, $d2bb940843202fcb$var$ButtonSizeToken[size].shapeRound, selector, $d2bb940843202fcb$var$ButtonSizeToken[size].selectedShapeRound, selector, $d2bb940843202fcb$var$ButtonSizeToken[size].shapeSquare, selector, $d2bb940843202fcb$var$ButtonSizeToken[size].selectedShapeSquare, selector, $d2bb940843202fcb$var$ButtonSizeToken[size].shapePressedMorph, selector, $d2bb940843202fcb$var$ButtonSizeToken[size].shapeRound, $d2bb940843202fcb$var$ButtonSizeToken[size].shapeRound, $d2bb940843202fcb$var$ButtonSizeToken[size].shapeRound, $d2bb940843202fcb$var$ButtonSizeToken[size].shapeRound, selector, $d2bb940843202fcb$var$ButtonSizeToken[size].shapeSquare, $d2bb940843202fcb$var$ButtonSizeToken[size].shapeSquare, $d2bb940843202fcb$var$ButtonSizeToken[size].shapeSquare, $d2bb940843202fcb$var$ButtonSizeToken[size].shapeSquare, selector, $d2bb940843202fcb$var$ButtonSizeToken[size].selectedShapeSquare, selector, $d2bb940843202fcb$var$ButtonSizeToken[size].shapePressedMorph, $d2bb940843202fcb$var$ButtonSizeToken[size].shapePressedMorph, $d2bb940843202fcb$var$ButtonSizeToken[size].shapePressedMorph, $d2bb940843202fcb$var$ButtonSizeToken[size].shapePressedMorph);
}
/**
 * Size variant styles for `M3eButtonElement`.
 * @internal
 */ const $d2bb940843202fcb$var$ButtonSizeStyle = [
    $d2bb940843202fcb$var$buttonStyle("extra-small"),
    $d2bb940843202fcb$var$buttonStyle("small"),
    $d2bb940843202fcb$var$buttonStyle("medium"),
    $d2bb940843202fcb$var$buttonStyle("large"),
    $d2bb940843202fcb$var$buttonStyle("extra-large")
];
/**
 * Baseline styles for `M3eButtonElement`.
 * @internal
 */ const $d2bb940843202fcb$var$ButtonStyle = (0, $c60305268e0a629a$export$dbf350e5966cf602)($d2bb940843202fcb$var$t1 || ($d2bb940843202fcb$var$t1 = $d2bb940843202fcb$var$_`:host { display: inline-block; outline: none; user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); } :host([hidden]) { display: none; } .base { box-sizing: border-box; vertical-align: middle; display: inline-flex; align-items: center; justify-content: center; position: relative; width: 100%; transition: ${0}; } .touch { position: absolute; height: 48px; left: 0; right: 0; } :host(:is(:state(--pressed), :--pressed)) .base, :host(:is(:state(--resting), :--resting)) .base { transition: ${0}; } .wrapper { box-sizing: border-box; width: 100%; overflow: hidden; display: inline-flex; align-items: center; justify-content: center; } .label { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; transition: ${0}; } .icon { transition: ${0}; } :host(:not(:disabled):not([disabled-interactive])) { cursor: pointer; } :host([disabled-interactive]) { cursor: not-allowed; } ::slotted([slot="icon"]), ::slotted([slot="selected-icon"]), ::slotted([slot="trailing-icon"]) { font-size: inherit !important; flex: none; } ::slotted(svg[slot="icon"]), ::slotted(svg[slot="selected-icon"]), ::slotted(svg[slot="trailing-icon"]) { width: 1em; height: 1em; } :host([toggle]:not([selected])) .base.with-selected-icon slot[name="selected-icon"], :host([toggle][selected]) .base.with-selected-icon slot[name="icon"] { display: none; } a { all: unset; display: block; position: absolute; top: 0px; left: 0px; right: 0px; bottom: 0px; z-index: 1; } :host(:is(:state(--grouped), :--grouped):is(:state(--connected), :--connected)) { flex: 1 1 auto; } :host(:is(:state(--grouped), :--grouped):not(:is(:state(--connected), :--connected))) { transition: ${0}; } :host(:is(:state(--grouped), :--grouped):not(:is(:state(--connected), :--connected))) .wrapper { transition: ${0}; } :host(:is(:state(--grouped), :--grouped):not(:is(:state(--connected), :--connected))) { flex-shrink: 0; flex-grow: 0; } :host( :is(:state(--grouped), :--grouped):not(:is(:state(--connected), :--connected)):not( :is(:state(--pressed), :--pressed, :state(--adjacent-pressed), :--adjacent-pressed) ) ) { width: var(--_button-width); } :host( :is(:state(--grouped), :--grouped):not(:is(:state(--connected), :--connected)):not( :is(:state(--pressed), :--pressed) ):is(:state(--adjacent-pressed), :--adjacent-pressed) ) { width: calc(var(--_button-width) - var(--_adjacent-shrink, 0px)); } :host( :is(:state(--grouped), :--grouped):not(:is(:state(--connected), :--connected)):is( :state(--pressed), :--pressed ):not([disabled-interactive]):not(:disabled) ) { width: calc( var(--_button-width) + calc(var(--_button-width) * var(--m3e-standard-button-group-width-multiplier, 0.15)) ); } :host( :is(:state(--grouped), :--grouped):not(:is(:state(--connected), :--connected)):is( :state(--adjacent-pressed), :--adjacent-pressed ):not(:is(:state(--pressed), :--pressed)) ) .label { text-overflow: clip; } @media (forced-colors: active) { .base, .label, .icon { transition: none; } :host(:is(:state(--pressed), :--pressed)) .base, :host(:is(:state(--resting), :--resting)) .base { transition: ${0}; } :host(:not(:disabled):not([disabled-interactive]):not([toggle])) .base { background-color: ButtonFace !important; outline-color: ButtonText !important; } :host(:not(:disabled):not([disabled-interactive]):not([toggle])) .label, :host(:not(:disabled):not([disabled-interactive]):not([toggle])) .icon { color: ButtonText !important; } :host(:not(:disabled):not([disabled-interactive])[toggle]:not([selected])) .base { background-color: ButtonFace !important; outline-color: ButtonText !important; } :host(:not(:disabled):not([disabled-interactive])[toggle]:not([selected])) .label, :host(:hover:not(:disabled):not([disabled-interactive])[toggle]:not([selected])) .label, :host(:not(:disabled):not([disabled-interactive])[toggle]:not([selected]):focus) .label, :host(:not(:disabled):not([disabled-interactive])[toggle]:not([selected])) .icon, :host(:hover:not(:disabled):not([disabled-interactive])[toggle]:not([selected])) .icon, :host(:not(:disabled):not([disabled-interactive])[toggle]:not([selected]):focus) .icon { color: ButtonText !important; } :host(:not(:disabled):not([disabled-interactive])[toggle][selected]) .base { background-color: ButtonText !important; outline: none !important; } :host(:not(:disabled):not([disabled-interactive])[toggle][selected]) .label, :host(:hover:not(:disabled):not([disabled-interactive])[toggle][selected]) .label, :host(:not(:disabled):not([disabled-interactive])[toggle][selected]:focus) .label, :host(:not(:disabled):not([disabled-interactive])[toggle][selected]) .icon, :host(:hover:not(:disabled):not([disabled-interactive])[toggle][selected]) .icon, :host(:not(:disabled):not([disabled-interactive])[toggle][selected]:focus) .icon { forced-color-adjust: none; color: ButtonFace !important; background-color: ButtonText !important; } :host(:disabled) .base, :host([disabled-interactive]) .base { outline-color: GrayText !important; background-color: unset !important; } :host(:disabled) .label, :host([disabled-interactive]) .label, :host(:disabled) .icon, :host([disabled-interactive]) .icon { color: GrayText !important; } .base { outline-style: solid; } :host(:is(:state(--extra-small), :--extra-small)) .base { outline-offset: calc(0px - var(--m3e-button-extra-small-outline-thickness, 1px)); outline-width: var(--m3e-button-extra-small-outline-thickness, 1px); } :host(:is(:state(--small), :--small)) .base { outline-offset: calc(0px - var(--m3e-button-small-outline-thickness, 1px)); outline-width: var(--m3e-button-small-outline-thickness, 1px); } :host(:is(:state(--medium), :--medium)) .base { outline-offset: calc(0px - var(--m3e-button-medium-outline-thickness, 1px)); outline-width: var(--m3e-button-medium-outline-thickness, 1px); } :host(:is(:state(--large), :--large)) .base { outline-offset: calc(0px - var(--m3e-button-large-outline-thickness, 2px)); outline-width: var(--m3e-button-large-outline-thickness, 2px); } :host(:is(:state(--extra-large), :--extra-large)) .base { outline-offset: calc(0px - var(--m3e-button-extra-large-outline-thickness, 3px)); outline-width: var(--m3e-button-extra-large-outline-thickness, 3px); } } @media (prefers-reduced-motion) { :host(:is(:state(--grouped), :--grouped):not(:is(:state(--connected), :--connected))), :host(:is(:state(--grouped), :--grouped):not(:is(:state(--connected), :--connected))) .wrapper, :host(:is(:state(--pressed), :--pressed)) .base, :host(:is(:state(--resting), :--resting)) .base, .base, .label, .icon { transition: none; } }`), (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`background-color ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).motion.duration.short4} ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).motion.easing.standard}`), (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`background-color ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).motion.duration.short4} ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).motion.easing.standard},
          border-radius ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).motion.spring.fastEffects}`), (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`color ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).motion.duration.short4} ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).motion.easing.standard}`), (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`color ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).motion.duration.short4} ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).motion.easing.standard}`), (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`width ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).motion.spring.fastEffects}`), (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`padding-inline ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).motion.spring.fastEffects}`), (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`border-radius ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).motion.spring.fastEffects}`));
/**
 * Component design tokens that control the appearance variants of `M3eButtonElement`.
 * @internal
 */ const $d2bb940843202fcb$var$ButtonVariantToken = {
    /** Design tokens that control the `elevated` variant. */ elevated: {
        /** Default label color. */ labelTextColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-elevated-button-label-text-color, var(--m3e-button-label-text-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.primary}))`),
        /** Default icon color. */ iconColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-elevated-button-icon-color, var(--m3e-button-icon-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.primary}))`),
        /** Default container background color. */ containerColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-elevated-button-container-color, var(--m3e-button-container-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.surfaceContainerLow}))`),
        /** Resting elevation. */ containerElevation: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-elevated-button-container-elevation, var(--m3e-button-container-elevation, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).elevation.level1}))`),
        /** Unselected label color. */ unselectedLabelTextColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-elevated-button-unselected-label-text-color, var(--m3e-button-unselected-label-text-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.primary}))`),
        /** Unselected icon color. */ unselectedIconColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-elevated-button-unselected-icon-color, var(--m3e-button-unselected-icon-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.primary}))`),
        /** Unselected container background color. */ unselectedContainerColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-elevated-button-unselected-container-color, var(--m3e-button-unselected-container-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.surfaceContainerLow}))`),
        /** Selected label color. */ selectedLabelTextColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-elevated-button-selected-label-text-color, var(--m3e-button-selected-label-text-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.onPrimary}))`),
        /** Selected icon color. */ selectedIconColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-elevated-button-selected-icon-color, var(--m3e-button-selected-icon-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.onPrimary}))`),
        /** Selected container background color. */ selectedContainerColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-elevated-button-selected-container-color, var(--m3e-button-selected-container-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.primary}))`),
        /** Design tokens that control disabled state. */ disabled: {
            /** Container background color when disabled. */ containerColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-elevated-button-disabled-container-color, var(--m3e-button-disabled-container-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.onSurface}))`),
            /** Opacity of container when disabled. */ containerOpacity: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-elevated-button-disabled-container-opacity, var(--m3e-button-disabled-container-opacity, 10%))`),
            /** Icon color when disabled. */ iconColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-elevated-button-disabled-icon-color, var(--m3e-button-disabled-icon-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.onSurface}))`),
            /** Icon opacity when disabled. */ iconOpacity: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-elevated-button-disabled-icon-opacity, var(--m3e-button-disabled-icon-opacity, 38%))`),
            /** Label color when disabled. */ labelTextColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-elevated-button-disabled-label-text-color, var(--m3e-button-disabled-label-text-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.onSurface}))`),
            /** Label opacity when disabled. */ labelTextOpacity: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-elevated-button-disabled-label-text-opacity, var(--m3e-button-disabled-label-text-opacity, 38%))`),
            /** Elevation when disabled. */ containerElevation: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-elevated-button-disabled-container-elevation, var(--m3e-button-disabled-container-elevation, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).elevation.level0}))`)
        },
        /** Design tokens that control hover state. */ hover: {
            /** Icon color on hover. */ iconColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-elevated-button-hover-icon-color, var(--m3e-button-hover-icon-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.primary}))`),
            /** Label color on hover. */ labelTextColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-elevated-button-hover-label-text-color, var(--m3e-button-hover-label-text-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.primary}))`),
            /** State layer color on hover. */ stateLayerColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-elevated-button-hover-state-layer-color, var(--m3e-button-hover-state-layer-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.primary}))`),
            /** State layer opacity on hover. */ stateLayerOpacity: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-elevated-button-hover-state-layer-opacity, var(--m3e-button-hover-state-layer-opacity, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).state.hoverStateLayerOpacity}))`),
            /** Elevation on hover. */ containerElevation: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-elevated-button-hover-container-elevation, var(--m3e-button-hover-container-elevation, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).elevation.level2}))`),
            /** Unselected icon color on hover. */ unselectedIconColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-elevated-button-hover-unselected-icon-color, var(--m3e-button-hover-unselected-icon-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.primary}))`),
            /** Unselected label color on hover. */ unselectedLabelTextColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-elevated-button-hover-unselected-label-text-color, var(--m3e-button-hover-unselected-label-text-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.primary}))`),
            /** Unselected state layer color on hover. */ unselectedStateLayerColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-elevated-button-hover-unselected-state-layer-color, var(--m3e-button-hover-unselected-state-layer-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.primary}))`),
            /** Selected icon color on hover. */ selectedIconColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-elevated-button-hover-selected-icon-color, var(--m3e-button-hover-selected-icon-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.onPrimary}))`),
            /** Selected label color on hover. */ selectedLabelTextColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-elevated-button-hover-selected-label-text-color, var(--m3e-button-hover-selected-label-text-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.onPrimary}))`),
            /** Selected ripple color on hover. */ selectedStateLayerColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-elevated-button-hover-selected-state-layer-color, var(--m3e-button-hover-selected-state-layer-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.onPrimary}))`)
        },
        /** Design tokens that control focus state. */ focus: {
            /** Icon color on focus. */ iconColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-elevated-button-focus-icon-color, var(--m3e-button-focus-icon-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.primary}))`),
            /** Label color on focus. */ labelTextColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-elevated-button-focus-label-text-color, var(--m3e-button-focus-label-text-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.primary}))`),
            /** State layer color on focus. */ stateLayerColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-elevated-button-focus-state-layer-color, var(--m3e-button-focus-state-layer-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.primary}))`),
            /**State layer opacity on focus. */ stateLayerOpacity: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-elevated-button-focus-state-layer-opacity, var(--m3e-button-focus-state-layer-opacity, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).state.focusStateLayerOpacity}))`),
            /** Elevation on focus. */ containerElevation: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-elevated-button-focus-container-elevation, var(--m3e-button-focus-container-elevation, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).elevation.level1}))`),
            /** Unselected label color on focus. */ unselectedLabelTextColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-elevated-button-focus-unselected-label-text-color, var(--m3e-button-focus-unselected-label-text-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.primary}))`),
            /** Unselected icon color on focus. */ unselectedIconColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-elevated-button-focus-unselected-icon-color, var(--m3e-button-focus-unselected-icon-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.primary}))`),
            /** Unselected ripple color on focus. */ unselectedStateLayerColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-elevated-button-focus-unselected-state-layer-color, var(--m3e-button-focus-unselected-state-layer-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.primary}))`),
            /** Selected icon color on focus. */ selectedIconColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-elevated-button-focus-selected-icon-color, var(--m3e-button-focus-selected-icon-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.onPrimary}))`),
            /** Selected label color on focus. */ selectedLabelTextColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-elevated-button-focus-selected-label-text-color, var(--m3e-button-focus-selected-label-text-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.onPrimary}))`),
            /** Selected ripple color on focus. */ selectedStateLayerColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-elevated-button-focus-selected-state-layer-color, var(--m3e-button-focus-selected-state-layer-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.onPrimary}))`)
        },
        /** Design tokens that control pressed state. */ pressed: {
            /** Icon color on pressed. */ iconColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-elevated-button-pressed-icon-color, var(--m3e-button-pressed-icon-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.primary}))`),
            /** Label color on pressed. */ labelTextColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-elevated-button-pressed-label-text-color, var(--m3e-button-pressed-label-text-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.primary}))`),
            /** State layer color on pressed. */ stateLayerColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-elevated-button-pressed-state-layer-color, var(--m3e-button-pressed-state-layer-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.primary}))`),
            /** State layer opacity on pressed. */ stateLayerOpacity: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-elevated-button-pressed-state-layer-opacity, var(--m3e-button-pressed-state-layer-opacity, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).state.pressedStateLayerOpacity}))`),
            /** Elevation on pressed. */ containerElevation: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-elevated-button-pressed-container-elevation, var(--m3e-button-pressed-container-elevation, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).elevation.level1}))`),
            /** Unselected label color on pressed. */ unselectedLabelTextColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-elevated-button-pressed-unselected-label-text-color, var(--m3e-button-pressed-unselected-label-text-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.primary}))`),
            /** Unselected icon color on pressed. */ unselectedIconColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-elevated-button-pressed-unselected-icon-color, var(--m3e-button-pressed-unselected-icon-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.primary}))`),
            /** Unselected ripple color on pressed. */ unselectedStateLayerColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-elevated-button-pressed-unselected-state-layer-color, var(--m3e-button-pressed-unselected-state-layer-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.primary}))`),
            /** Selected icon color on pressed. */ selectedIconColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-elevated-button-pressed-selected-icon-color, var(--m3e-button-pressed-selected-icon-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.onPrimary}))`),
            /** Selected label color on pressed. */ selectedLabelTextColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-elevated-button-pressed-selected-label-text-color, var(--m3e-button-pressed-selected-label-text-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.onPrimary}))`),
            /** Selected ripple color on pressed. */ selectedStateLayerColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-elevated-button-pressed-selected-state-layer-color, var(--m3e-button-pressed-selected-state-layer-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.onPrimary}))`)
        }
    },
    /** Design tokens that control the `outlined` variant. */ outlined: {
        /** Default label color. */ labelTextColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-outlined-button-label-text-color, var(--m3e-button-label-text-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.onSurfaceVariant}))`),
        /** Default icon color. */ iconColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-outlined-button-icon-color, var(--m3e-button-icon-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.onSurfaceVariant}))`),
        /** Default outline color. */ outlineColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-outlined-button-outline-color, var(--m3e-button-outline-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.outlineVariant}))`),
        /** Unselected label color. */ unselectedLabelTextColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-outlined-button-unselected-label-text-color, var(--m3e-button-unselected-label-text-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.onSurfaceVariant}))`),
        /** Unselected icon color. */ unselectedIconColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-outlined-button-unselected-icon-color, var(--m3e-button-unselected-icon-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.onSurfaceVariant}))`),
        /** Selected label color. */ selectedLabelTextColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-outlined-button-selected-label-text-color, var(--m3e-button-selected-label-text-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.inverseOnSurface}))`),
        /** Selected icon color. */ selectedIconColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-outlined-button-selected-icon-color, var(--m3e-button-selected-icon-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.inverseOnSurface}))`),
        /** Selected container background color. */ selectedContainerColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-outlined-button-selected-container-color, var(--m3e-button-selected-container-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.inverseSurface}))`),
        /** Design tokens that control disabled state. */ disabled: {
            /** Container background color when disabled. */ containerColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-outlined-button-disabled-container-color, var(--m3e-button-disabled-container-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.onSurface}))`),
            /** Opacity of container when disabled. */ containerOpacity: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-outlined-button-disabled-container-opacity, var(--m3e-button-disabled-container-opacity, 10%))`),
            /** Icon color when disabled. */ iconColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-outlined-button-disabled-icon-color, var(--m3e-button-disabled-icon-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.onSurface}))`),
            /** Icon opacity when disabled. */ iconOpacity: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-outlined-button-disabled-icon-opacity, var(--m3e-button-disabled-icon-opacity, 38%))`),
            /** Label color when disabled. */ labelTextColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-outlined-button-disabled-label-text-color, var(--m3e-button-disabled-label-text-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.onSurface}))`),
            /** Label opacity when disabled. */ labelTextOpacity: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-outlined-button-disabled-label-text-opacity, var(--m3e-button-disabled-label-text-opacity, 38%))`),
            /** Outline color when disabled. */ outlineColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-outlined-button-disabled-outline-color, var(--m3e-button-disabled-outline-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.outlineVariant}))`)
        },
        /** Design tokens that control hover state. */ hover: {
            /** Icon color on hover. */ iconColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-outlined-button-hover-icon-color, var(--m3e-button-hover-icon-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.onSurfaceVariant}))`),
            /** Label color on hover. */ labelTextColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-outlined-button-hover-label-text-color, var(--m3e-button-hover-label-text-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.onSurfaceVariant}))`),
            /** Outline color on hover. */ outlineColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-outlined-button-hover-outline-color, var(--m3e-button-hover-outline-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.outlineVariant}))`),
            /** State layer color on hover. */ stateLayerColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-outlined-button-hover-state-layer-color, var(--m3e-button-hover-state-layer-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.onSurfaceVariant}))`),
            /** State layer opacity on hover. */ stateLayerOpacity: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-outlined-button-hover-state-layer-opacity, var(--m3e-button-hover-state-layer-opacity, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).state.hoverStateLayerOpacity}))`),
            /** Unselected icon color on hover. */ unselectedIconColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-outlined-button-hover-unselected-icon-color, var(--m3e-button-hover-unselected-icon-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.onSurfaceVariant}))`),
            /** Unselected label color on hover. */ unselectedLabelTextColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-outlined-button-hover-unselected-label-text-color, var(--m3e-button-hover-unselected-label-text-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.onSurfaceVariant}))`),
            /** Unselected state layer color on hover. */ unselectedStateLayerColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-outlined-button-hover-unselected-state-layer-color, var(--m3e-button-hover-unselected-state-layer-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.onSurfaceVariant}))`),
            /** Selected icon color on hover. */ selectedIconColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-outlined-button-hover-selected-icon-color, var(--m3e-button-hover-selected-icon-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.inverseOnSurface}))`),
            /** Selected label color on hover. */ selectedLabelTextColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-outlined-button-hover-selected-label-text-color, var(--m3e-button-hover-selected-label-text-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.inverseOnSurface}))`),
            /** Selected state layer color on hover. */ selectedStateLayerColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-outlined-button-hover-selected-state-layer-color, var(--m3e-button-hover-selected-state-layer-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.inverseOnSurface}))`)
        },
        /** Design tokens that control focus state. */ focus: {
            /** Icon color on focus. */ iconColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-outlined-button-focus-icon-color, var(--m3e-button-focus-icon-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.onSurfaceVariant}))`),
            /** Label color on focus. */ labelTextColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-outlined-button-focus-label-text-color, var(--m3e-button-focus-label-text-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.onSurfaceVariant}))`),
            /** Outline color on focus. */ outlineColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-outlined-button-focus-outline-color, var(--m3e-button-focus-outline-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.outlineVariant}))`),
            /** State layer color on focus. */ stateLayerColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-outlined-button-focus-state-layer-color, var(--m3e-button-focus-state-layer-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.onSurfaceVariant}))`),
            /**State layer opacity on focus. */ stateLayerOpacity: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-outlined-button-focus-state-layer-opacity, var(--m3e-button-focus-state-layer-opacity, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).state.focusStateLayerOpacity}))`),
            /** Unselected icon color on focus. */ unselectedIconColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-outlined-button-focus-unselected-icon-color, var(--m3e-button-focus-unselected-icon-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.onSurfaceVariant}))`),
            /** Unselected label color on focus. */ unselectedLabelTextColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-outlined-button-focus-unselected-label-text-color, var(--m3e-button-focus-unselected-label-text-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.onSurfaceVariant}))`),
            /** Unselected state layer color on focus. */ unselectedStateLayerColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-outlined-button-focus-unselected-state-layer-color, var(--m3e-button-focus-unselected-state-layer-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.onSurfaceVariant}))`),
            /** Selected icon color on focus. */ selectedIconColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-outlined-button-focus-selected-icon-color, var(--m3e-button-focus-selected-icon-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.inverseOnSurface}))`),
            /** Selected label color on focus. */ selectedLabelTextColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-outlined-button-focus-selected-label-text-color, var(--m3e-button-focus-selected-label-text-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.inverseOnSurface}))`),
            /** Selected state layer color on focus. */ selectedStateLayerColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-outlined-button-focus-selected-state-layer-color, var(--m3e-button-focus-selected-state-layer-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.inverseOnSurface}))`)
        },
        /** Design tokens that control pressed state. */ pressed: {
            /** Icon color on pressed. */ iconColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-outlined-button-pressed-icon-color, var(--m3e-button-pressed-icon-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.onSurfaceVariant}))`),
            /** Label color on pressed. */ labelTextColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-outlined-button-pressed-label-text-color, var(--m3e-button-pressed-label-text-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.onSurfaceVariant}))`),
            /** Outline color on pressed. */ outlineColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-outlined-button-pressed-outline-color, var(--m3e-button-pressed-outline-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.outlineVariant}))`),
            /** State layer color on pressed. */ stateLayerColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-outlined-button-pressed-state-layer-color, var(--m3e-button-pressed-state-layer-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.onSurfaceVariant}))`),
            /** State layer opacity on pressed. */ stateLayerOpacity: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-outlined-button-pressed-state-layer-opacity, var(--m3e-button-pressed-state-layer-opacity, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).state.pressedStateLayerOpacity}))`),
            /** Unselected icon color on pressed. */ unselectedIconColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-outlined-button-pressed-unselected-icon-color, var(--m3e-button-pressed-unselected-icon-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.onSurfaceVariant}))`),
            /** Unselected label color on pressed. */ unselectedLabelTextColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-outlined-button-pressed-unselected-label-text-color, var(--m3e-button-pressed-unselected-label-text-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.onSurfaceVariant}))`),
            /** Unselected state layer color on pressed. */ unselectedStateLayerColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-outlined-button-pressed-unselected-state-layer-color, var(--m3e-button-pressed-unselected-state-layer-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.onSurfaceVariant}))`),
            /** Selected icon color on pressed. */ selectedIconColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-outlined-button-pressed-selected-icon-color, var(--m3e-button-pressed-selected-icon-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.inverseOnSurface}))`),
            /** Selected label color on pressed. */ selectedLabelTextColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-outlined-button-pressed-selected-label-text-color, var(--m3e-button-pressed-selected-label-text-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.inverseOnSurface}))`),
            /** Selected state layer color on pressed. */ selectedStateLayerColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-outlined-button-pressed-selected-state-layer-color, var(--m3e-button-pressed-selected-state-layer-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.inverseOnSurface}))`)
        }
    },
    /** Design tokens that control the `filled` variant. */ filled: {
        /** Default label color. */ labelTextColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-filled-button-label-text-color, var(--m3e-button-label-text-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.onPrimary}))`),
        /** Default icon color. */ iconColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-filled-button-icon-color, var(--m3e-button-icon-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.onPrimary}))`),
        /** Default container background color. */ containerColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-filled-button-container-color, var(--m3e-button-container-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.primary}))`),
        /** Resting elevation. */ containerElevation: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-filled-button-container-elevation, var(--m3e-button-container-elevation, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).elevation.level0}))`),
        /** Unselected label color. */ unselectedLabelTextColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-filled-button-unselected-label-text-color, var(--m3e-button-unselected-label-text-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.onSurfaceVariant}))`),
        /** Unselected icon color. */ unselectedIconColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-filled-button-unselected-icon-color, var(--m3e-button-unselected-icon-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.onSurfaceVariant}))`),
        /** Unselected container background color. */ unselectedContainerColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-filled-button-unselected-container-color, var(--m3e-button-unselected-container-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.surfaceContainer}))`),
        /** Selected label color. */ selectedLabelTextColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-filled-button-selected-label-text-color, var(--m3e-button-selected-label-text-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.onPrimary}))`),
        /** Selected icon color. */ selectedIconColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-filled-button-selected-icon-color, var(--m3e-button-selected-icon-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.onPrimary}))`),
        /** Selected container background color. */ selectedContainerColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-filled-button-selected-container-color, var(--m3e-button-selected-container-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.primary}))`),
        /** Design tokens that control disabled state. */ disabled: {
            /** Container background color when disabled. */ containerColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-filled-button-disabled-container-color, var(--m3e-button-disabled-container-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.onSurface}))`),
            /** Opacity of container when disabled. */ containerOpacity: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-filled-button-disabled-container-opacity, var(--m3e-button-disabled-container-opacity, 10%))`),
            /** Icon color when disabled. */ iconColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-filled-button-disabled-icon-color, var(--m3e-button-disabled-icon-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.onSurface}))`),
            /** Icon opacity when disabled. */ iconOpacity: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-filled-button-disabled-icon-opacity, var(--m3e-button-disabled-icon-opacity, 38%))`),
            /** Label color when disabled. */ labelTextColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-filled-button-disabled-label-text-color, var(--m3e-button-disabled-label-text-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.onSurface}))`),
            /** Label opacity when disabled. */ labelTextOpacity: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-filled-button-disabled-label-text-opacity, var(--m3e-button-disabled-label-text-opacity, 38%))`),
            /** Elevation when disabled. */ containerElevation: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-filled-button-disabled-container-elevation, var(--m3e-button-disabled-container-elevation, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).elevation.level0}))`)
        },
        /** Design tokens that control hover state. */ hover: {
            /** Icon color on hover. */ iconColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-filled-button-hover-icon-color, var(--m3e-button-hover-icon-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.onPrimary}))`),
            /** Label color on hover. */ labelTextColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-filled-button-hover-label-text-color, var(--m3e-button-hover-label-text-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.onPrimary}))`),
            /** State layer color on hover. */ stateLayerColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-filled-button-hover-state-layer-color, var(--m3e-button-hover-state-layer-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.onPrimary}))`),
            /** State layer opacity on hover. */ stateLayerOpacity: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-filled-button-hover-state-layer-opacity, var(--m3e-button-hover-state-layer-opacity, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).state.hoverStateLayerOpacity}))`),
            /** Elevation on hover. */ containerElevation: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-filled-button-hover-container-elevation, var(--m3e-button-hover-container-elevation, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).elevation.level1}))`),
            /** Unselected icon color on hover. */ unselectedIconColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-filled-button-hover-unselected-icon-color, var(--m3e-button-hover-unselected-icon-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.onSurfaceVariant}))`),
            /** Unselected label color on hover. */ unselectedLabelTextColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-filled-button-hover-unselected-label-text-color, var(--m3e-button-hover-unselected-label-text-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.onSurfaceVariant}))`),
            /** Unselected state layer color on hover. */ unselectedStateLayerColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-filled-button-hover-unselected-state-layer-color, var(--m3e-button-hover-unselected-state-layer-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.onSurfaceVariant}))`),
            /** Selected icon color on hover. */ selectedIconColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-filled-button-hover-selected-icon-color, var(--m3e-button-hover-selected-icon-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.onPrimary}))`),
            /** Selected label color on hover. */ selectedLabelTextColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-filled-button-hover-selected-label-text-color, var(--m3e-button-hover-selected-label-text-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.onPrimary}))`),
            /** Selected state layer color on hover. */ selectedStateLayerColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-filled-button-hover-selected-state-layer-color, var(--m3e-button-hover-selected-state-layer-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.onPrimary}))`)
        },
        /** Design tokens that control focus state. */ focus: {
            /** Icon color on focus. */ iconColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-filled-button-focus-icon-color, var(--m3e-button-focus-icon-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.onPrimary}))`),
            /** Label color on focus. */ labelTextColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-filled-button-focus-label-text-color, var(--m3e-button-focus-label-text-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.onPrimary}))`),
            /** State layer color on focus. */ stateLayerColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-filled-button-focus-state-layer-color, var(--m3e-button-focus-state-layer-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.onPrimary}))`),
            /**State layer opacity on focus. */ stateLayerOpacity: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-filled-button-focus-state-layer-opacity, var(--m3e-button-focus-state-layer-opacity, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).state.focusStateLayerOpacity}))`),
            /** Elevation on focus. */ containerElevation: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-filled-button-focus-container-elevation, var(--m3e-button-focus-container-elevation, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).elevation.level0}))`),
            /** Unselected icon color on focus. */ unselectedIconColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-filled-button-focus-unselected-icon-color, var(--m3e-button-focus-unselected-icon-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.onSurfaceVariant}))`),
            /** Unselected label color on focus. */ unselectedLabelTextColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-filled-button-focus-unselected-label-text-color, var(--m3e-button-focus-unselected-label-text-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.onSurfaceVariant}))`),
            /** Unselected state layer color on focus. */ unselectedStateLayerColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-filled-button-focus-unselected-state-layer-color, var(--m3e-button-focus-unselected-state-layer-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.onSurfaceVariant}))`),
            /** Selected icon color on focus. */ selectedIconColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-filled-button-focus-selected-icon-color, var(--m3e-button-focus-selected-icon-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.onPrimary}))`),
            /** Selected label color on focus. */ selectedLabelTextColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-filled-button-focus-selected-label-text-color, var(--m3e-button-focus-selected-label-text-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.onPrimary}))`),
            /** Selected state layer color on focus. */ selectedStateLayerColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-filled-button-focus-selected-state-layer-color, var(--m3e-button-focus-selected-state-layer-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.onPrimary}))`)
        },
        /** Design tokens that control pressed state. */ pressed: {
            /** Icon color on pressed. */ iconColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-filled-button-pressed-icon-color, var(--m3e-button-pressed-icon-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.onPrimary}))`),
            /** Label color on pressed. */ labelTextColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-filled-button-pressed-label-text-color, var(--m3e-button-pressed-label-text-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.onPrimary}))`),
            /** State layer color on pressed. */ stateLayerColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-filled-button-pressed-state-layer-color, var(--m3e-button-pressed-state-layer-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.onPrimary}))`),
            /** State layer opacity on pressed. */ stateLayerOpacity: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-filled-button-pressed-state-layer-opacity, var(--m3e-button-pressed-state-layer-opacity, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).state.pressedStateLayerOpacity}))`),
            /** Elevation on pressed. */ containerElevation: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-filled-button-pressed-container-elevation, var(--m3e-button-pressed-container-elevation, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).elevation.level0}))`),
            /** Unselected icon color on pressed. */ unselectedIconColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-filled-button-pressed-unselected-icon-color, var(--m3e-button-pressed-unselected-icon-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.onSurfaceVariant}))`),
            /** Unselected label color on pressed. */ unselectedLabelTextColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-filled-button-pressed-unselected-label-text-color, var(--m3e-button-pressed-unselected-label-text-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.onSurfaceVariant}))`),
            /** Unselected state layer color on pressed. */ unselectedStateLayerColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-filled-button-pressed-unselected-state-layer-color, var(--m3e-button-pressed-unselected-state-layer-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.onSurfaceVariant}))`),
            /** Selected icon color on pressed. */ selectedIconColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-filled-button-pressed-selected-icon-color, var(--m3e-button-pressed-selected-icon-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.onPrimary}))`),
            /** Selected label color on pressed. */ selectedLabelTextColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-filled-button-pressed-selected-label-text-color, var(--m3e-button-pressed-selected-label-text-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.onPrimary}))`),
            /** Selected state layer color on pressed. */ selectedStateLayerColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-filled-button-pressed-selected-state-layer-color, var(--m3e-button-pressed-selected-state-layer-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.onPrimary}))`)
        }
    },
    /** Design tokens that control the `tonal` variant. */ tonal: {
        /** Default label color. */ labelTextColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-tonal-button-label-text-color, var(--m3e-button-label-text-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.onSecondaryContainer}))`),
        /** Default icon color. */ iconColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-tonal-button-icon-color, var(--m3e-button-icon-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.onSecondaryContainer}))`),
        /** Default container background color. */ containerColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-tonal-button-container-color, var(--m3e-button-container-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.secondaryContainer}))`),
        /** Resting elevation. */ containerElevation: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-tonal-button-container-elevation, var(--m3e-button-container-elevation, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).elevation.level0}))`),
        /** Unselected label color. */ unselectedLabelTextColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-tonal-button-unselected-label-text-color, var(--m3e-button-unselected-label-text-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.onSecondaryContainer}))`),
        /** Unselected icon color. */ unselectedIconColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-tonal-button-unselected-icon-color, var(--m3e-button-unselected-icon-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.onSecondaryContainer}))`),
        /** Unselected container background color. */ unselectedContainerColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-tonal-button-unselected-container-color, var(--m3e-button-unselected-container-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.secondaryContainer}))`),
        /** Selected label color. */ selectedLabelTextColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-tonal-button-selected-label-text-color, var(--m3e-button-selected-label-text-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.onSecondary}))`),
        /** Selected icon color. */ selectedIconColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-tonal-button-selected-icon-color, var(--m3e-button-selected-icon-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.onSecondary}))`),
        /** Selected container background color. */ selectedContainerColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-tonal-button-selected-container-color, var(--m3e-button-selected-container-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.secondary}))`),
        /** Design tokens that control disabled state. */ disabled: {
            /** Container background color when disabled. */ containerColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-tonal-button-disabled-container-color, var(--m3e-button-disabled-container-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.onSurface}))`),
            /** Opacity of container when disabled. */ containerOpacity: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-tonal-button-disabled-container-opacity, var(--m3e-button-disabled-container-opacity, 10%))`),
            /** Icon color when disabled. */ iconColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-tonal-button-disabled-icon-color, var(--m3e-button-disabled-icon-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.onSurface}))`),
            /** Icon opacity when disabled. */ iconOpacity: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-tonal-button-disabled-icon-opacity, var(--m3e-button-disabled-icon-opacity, 38%))`),
            /** Label color when disabled. */ labelTextColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-tonal-button-disabled-label-text-color, var(--m3e-button-disabled-label-text-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.onSurface}))`),
            /** Label opacity when disabled. */ labelTextOpacity: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-tonal-button-disabled-label-text-opacity, var(--m3e-button-disabled-label-text-opacity, 38%))`),
            /** Elevation when disabled. */ containerElevation: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-tonal-button-disabled-container-elevation, var(--m3e-button-disabled-container-elevation, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).elevation.level0}))`)
        },
        /** Design tokens that control hover state. */ hover: {
            /** Icon color on hover. */ iconColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-tonal-button-hover-icon-color, var(--m3e-button-hover-icon-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.onSecondaryContainer}))`),
            /** Label color on hover. */ labelTextColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-tonal-button-hover-label-text-color, var(--m3e-button-hover-label-text-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.onSecondaryContainer}))`),
            /** State layer color on hover. */ stateLayerColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-tonal-button-hover-state-layer-color, var(--m3e-button-hover-state-layer-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.onSecondaryContainer}))`),
            /** State layer opacity on hover. */ stateLayerOpacity: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-tonal-button-hover-state-layer-opacity, var(--m3e-button-hover-state-layer-opacity, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).state.hoverStateLayerOpacity}))`),
            /** Elevation on hover. */ containerElevation: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-tonal-button-hover-container-elevation, var(--m3e-button-hover-container-elevation, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).elevation.level1}))`),
            /** Unselected icon color on hover. */ unselectedIconColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-tonal-button-hover-unselected-icon-color, var(--m3e-button-hover-unselected-icon-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.onSecondaryContainer}))`),
            /** Unselected label color on hover. */ unselectedLabelTextColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-tonal-button-hover-unselected-label-text-color, var(--m3e-button-hover-unselected-label-text-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.onSecondaryContainer}))`),
            /** Unselected state layer color on hover. */ unselectedStateLayerColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-tonal-button-hover-unselected-state-layer-color, var(--m3e-button-hover-unselected-state-layer-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.onSecondaryContainer}))`),
            /** Selected icon color on hover. */ selectedIconColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-tonal-button-hover-selected-icon-color, var(--m3e-button-hover-selected-icon-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.onSecondary}))`),
            /** Selected label color on hover. */ selectedLabelTextColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-tonal-button-hover-selected-label-text-color, var(--m3e-button-hover-selected-label-text-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.onSecondary}))`),
            /** Selected state layer color on hover. */ selectedStateLayerColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-tonal-button-hover-selected-state-layer-color, var(--m3e-button-hover-selected-state-layer-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.onSecondary}))`)
        },
        /** Design tokens that control focus state. */ focus: {
            /** Icon color on focus. */ iconColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-tonal-button-focus-icon-color, var(--m3e-button-focus-icon-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.onSecondaryContainer}))`),
            /** Label color on focus. */ labelTextColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-tonal-button-focus-label-text-color, var(--m3e-button-focus-label-text-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.onSecondaryContainer}))`),
            /** State layer color on focus. */ stateLayerColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-tonal-button-focus-state-layer-color, var(--m3e-button-focus-state-layer-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.onSecondaryContainer}))`),
            /**State layer opacity on focus. */ stateLayerOpacity: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-tonal-button-focus-state-layer-opacity, var(--m3e-button-focus-state-layer-opacity, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).state.focusStateLayerOpacity}))`),
            /** Elevation on focus. */ containerElevation: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-tonal-button-focus-container-elevation, var(--m3e-button-focus-container-elevation, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).elevation.level0}))`),
            /** Unselected icon color on focus. */ unselectedIconColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-tonal-button-focus-unselected-icon-color, var(--m3e-button-focus-unselected-icon-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.onSecondaryContainer}))`),
            /** Unselected label color on focus. */ unselectedLabelTextColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-tonal-button-focus-unselected-label-text-color, var(--m3e-button-focus-unselected-label-text-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.onSecondaryContainer}))`),
            /** Unselected state layer color on focus. */ unselectedStateLayerColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-tonal-button-focus-unselected-state-layer-color, var(--m3e-button-focus-unselected-state-layer-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.onSecondaryContainer}))`),
            /** Selected icon color on focus. */ selectedIconColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-tonal-button-focus-selected-icon-color, var(--m3e-button-focus-selected-icon-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.onSecondary}))`),
            /** Selected label color on focus. */ selectedLabelTextColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-tonal-button-focus-selected-label-text-color, var(--m3e-button-focus-selected-label-text-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.onSecondary}))`),
            /** Selected state layer color on focus. */ selectedStateLayerColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-tonal-button-focus-selected-state-layer-color, var(--m3e-button-focus-selected-state-layer-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.onSecondary}))`)
        },
        /** Design tokens that control pressed state. */ pressed: {
            /** Icon color on pressed. */ iconColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-tonal-button-pressed-icon-color, var(--m3e-button-pressed-icon-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.onSecondaryContainer}))`),
            /** Label color on pressed. */ labelTextColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-tonal-button-pressed-label-text-color, var(--m3e-button-pressed-label-text-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.onSecondaryContainer}))`),
            /** State layer color on pressed. */ stateLayerColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-tonal-button-pressed-state-layer-color, var(--m3e-button-pressed-state-layer-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.onSecondaryContainer}))`),
            /** State layer opacity on pressed. */ stateLayerOpacity: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-tonal-button-pressed-state-layer-opacity, var(--m3e-button-pressed-state-layer-opacity, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).state.pressedStateLayerOpacity}))`),
            /** Elevation on pressed. */ containerElevation: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-tonal-button-pressed-container-elevation, var(--m3e-button-pressed-container-elevation, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).elevation.level0}))`),
            /** Unselected icon color on pressed. */ unselectedIconColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-tonal-button-pressed-unselected-icon-color, var(--m3e-button-pressed-unselected-icon-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.onSecondaryContainer}))`),
            /** Unselected label color on pressed. */ unselectedLabelTextColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-tonal-button-pressed-unselected-label-text-color, var(--m3e-button-pressed-unselected-label-text-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.onSecondaryContainer}))`),
            /** Unselected state layer color on pressed. */ unselectedStateLayerColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-tonal-button-pressed-unselected-state-layer-color, var(--m3e-button-pressed-unselected-state-layer-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.onSecondaryContainer}))`),
            /** Selected icon color on pressed. */ selectedIconColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-tonal-button-pressed-selected-icon-color, var(--m3e-button-pressed-selected-icon-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.onSecondary}))`),
            /** Selected label color on pressed. */ selectedLabelTextColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-tonal-button-pressed-selected-label-text-color, var(--m3e-button-pressed-selected-label-text-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.onSecondary}))`),
            /** Selected state layer color on pressed. */ selectedStateLayerColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-tonal-button-pressed-selected-state-layer-color, var(--m3e-button-pressed-selected-state-layer-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.onSecondary}))`)
        }
    },
    /** Design tokens that control the `text` variant. */ text: {
        /** Default label color. */ labelTextColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-text-button-label-text-color, var(--m3e-button-label-text-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.primary}))`),
        /** Default icon color. */ iconColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-text-button-icon-color, var(--m3e-button-icon-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.primary}))`),
        /** Unselected label color. */ unselectedLabelTextColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-text-button-unselected-label-text-color, var(--m3e-button-unselected-label-text-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.primary}))`),
        /** Unselected icon color. */ unselectedIconColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-text-button-unselected-icon-color, var(--m3e-button-unselected-icon-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.primary}))`),
        /** Selected label color. */ selectedLabelTextColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-text-button-selected-label-text-color, var(--m3e-button-selected-label-text-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.primary}))`),
        /** Selected icon color. */ selectedIconColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-text-button-selected-icon-color, var(--m3e-button-selected-icon-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.primary}))`),
        /** Design tokens that control disabled state. */ disabled: {
            /** Container background color when disabled. */ containerColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-text-button-disabled-container-color, var(--m3e-button-disabled-container-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.onSurface}))`),
            /** Opacity of container when disabled. */ containerOpacity: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-text-button-disabled-container-opacity, var(--m3e-button-disabled-container-opacity, 10%))`),
            /** Icon color when disabled. */ iconColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-text-button-disabled-icon-color, var(--m3e-button-disabled-icon-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.onSurface}))`),
            /** Icon opacity when disabled. */ iconOpacity: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-text-button-disabled-icon-opacity, var(--m3e-button-disabled-icon-opacity, 38%))`),
            /** Label color when disabled. */ labelTextColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-text-button-disabled-label-text-color, var(--m3e-button-disabled-label-text-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.onSurface}))`),
            /** Label opacity when disabled. */ labelTextOpacity: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-text-button-disabled-label-text-opacity, var(--m3e-button-disabled-label-text-opacity, 38%))`)
        },
        /** Design tokens that control hover state. */ hover: {
            /** Icon color on hover. */ iconColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-text-button-hover-icon-color, var(--m3e-button-hover-icon-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.primary}))`),
            /** Label color on hover. */ labelTextColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-text-button-hover-label-text-color, var(--m3e-button-hover-label-text-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.primary}))`),
            /** State layer color on hover. */ stateLayerColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-text-button-hover-state-layer-color, var(--m3e-button-hover-state-layer-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.primary}))`),
            /** State layer opacity on hover. */ stateLayerOpacity: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-text-button-hover-state-layer-opacity, var(--m3e-button-hover-state-layer-opacity, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).state.hoverStateLayerOpacity}))`),
            /** Unselected icon color on hover. */ unselectedIconColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-text-button-hover-unselected-icon-color, var(--m3e-button-hover-unselected-icon-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.primary}))`),
            /** Unselected label color on hover. */ unselectedLabelTextColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-text-button-hover-unselected-label-text-color, var(--m3e-button-hover-unselected-label-text-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.primary}))`),
            /** Unselected state layer color on hover. */ unselectedStateLayerColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-text-button-hover-unselected-state-layer-color, var(--m3e-button-hover-unselected-state-layer-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.primary}))`),
            /** Selected icon color on hover. */ selectedIconColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-text-button-hover-selected-icon-color, var(--m3e-button-hover-selected-icon-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.primary}))`),
            /** Selected label color on hover. */ selectedLabelTextColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-text-button-hover-selected-label-text-color, var(--m3e-button-hover-selected-label-text-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.primary}))`),
            /** Selected state layer color on hover. */ selectedStateLayerColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-text-button-hover-selected-state-layer-color, var(--m3e-button-hover-selected-state-layer-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.primary}))`)
        },
        /** Design tokens that control focus state. */ focus: {
            /** Icon color on focus. */ iconColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-text-button-focus-icon-color, var(--m3e-button-focus-icon-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.primary}))`),
            /** Label color on focus. */ labelTextColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-text-button-focus-label-text-color, var(--m3e-button-focus-label-text-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.primary}))`),
            /** State layer color on focus. */ stateLayerColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-text-button-focus-state-layer-color, var(--m3e-button-focus-state-layer-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.primary}))`),
            /**State layer opacity on focus. */ stateLayerOpacity: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-text-button-focus-state-layer-opacity, var(--m3e-button-focus-state-layer-opacity, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).state.focusStateLayerOpacity}))`),
            /** Unselected icon color on focus. */ unselectedIconColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-text-button-focus-unselected-icon-color, var(--m3e-button-focus-unselected-icon-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.primary}))`),
            /** Unselected label color on focus. */ unselectedLabelTextColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-text-button-focus-unselected-label-text-color, var(--m3e-button-focus-unselected-label-text-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.primary}))`),
            /** Unselected state layer color on focus. */ unselectedStateLayerColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-text-button-focus-unselected-state-layer-color, var(--m3e-button-focus-unselected-state-layer-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.primary}))`),
            /** Selected icon color on focus. */ selectedIconColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-text-button-focus-selected-icon-color, var(--m3e-button-focus-selected-icon-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.primary}))`),
            /** Selected label color on focus. */ selectedLabelTextColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-text-button-focus-selected-label-text-color, var(--m3e-button-focus-selected-label-text-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.primary}))`),
            /** Selected state layer color on focus. */ selectedStateLayerColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-text-button-focus-selected-state-layer-color, var(--m3e-button-focus-selected-state-layer-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.primary}))`)
        },
        /** Design tokens that control pressed state. */ pressed: {
            /** Icon color on pressed. */ iconColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-text-button-pressed-icon-color, var(--m3e-button-pressed-icon-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.primary}))`),
            /** Label color on pressed. */ labelTextColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-text-button-pressed-label-text-color, var(--m3e-button-pressed-label-text-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.primary}))`),
            /** State layer color on pressed. */ stateLayerColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-text-button-pressed-state-layer-color, var(--m3e-button-pressed-state-layer-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.primary}))`),
            /** State layer opacity on pressed. */ stateLayerOpacity: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-text-button-pressed-state-layer-opacity, var(--m3e-button-pressed-state-layer-opacity, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).state.pressedStateLayerOpacity}))`),
            /** Unselected icon color on pressed. */ unselectedIconColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-text-button-pressed-unselected-icon-color, var(--m3e-button-pressed-unselected-icon-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.primary}))`),
            /** Unselected label color on pressed. */ unselectedLabelTextColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-text-button-pressed-unselected-label-text-color, var(--m3e-button-pressed-unselected-label-text-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.primary}))`),
            /** Unselected state layer color on pressed. */ unselectedStateLayerColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-text-button-pressed-unselected-state-layer-color, var(--m3e-button-pressed-unselected-state-layer-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.primary}))`),
            /** Selected icon color on pressed. */ selectedIconColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-text-button-pressed-selected-icon-color, var(--m3e-button-pressed-selected-icon-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.primary}))`),
            /** Selected label color on pressed. */ selectedLabelTextColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-text-button-pressed-selected-label-text-color, var(--m3e-button-pressed-selected-label-text-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.primary}))`),
            /** Selected state layer color on pressed. */ selectedStateLayerColor: (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`var(--m3e-text-button-pressed-selected-state-layer-color, var(--m3e-button-pressed-selected-state-layer-color, ${(0, $2795e4e0258f7c7d$export$b6ce77d07cd22443).color.primary}))`)
        }
    }
};
/** @private */ function $d2bb940843202fcb$var$buttonVariantStyle(variant) {
    const selector = (0, $c60305268e0a629a$export$8d80f9cac07cdb3)(`:is(:state(--${variant}), :--${variant})`);
    var _ButtonVariantToken_variant_containerColor, _ButtonVariantToken_variant_containerElevation, _ButtonVariantToken_variant_hover_containerElevation, _ButtonVariantToken_variant_focus_containerElevation, _ButtonVariantToken_variant_pressed_containerElevation, _ButtonVariantToken_variant_unselectedContainerColor, _ButtonVariantToken_variant_selectedContainerColor, _ButtonVariantToken_variant_outlineColor, _ButtonVariantToken_variant_focus_outlineColor, _ButtonVariantToken_variant_hover_outlineColor, _ButtonVariantToken_variant_pressed_outlineColor, _ButtonVariantToken_variant_disabled_containerElevation, _ButtonVariantToken_variant_disabled_outlineColor;
    return (0, $c60305268e0a629a$export$dbf350e5966cf602)($d2bb940843202fcb$var$t2 || ($d2bb940843202fcb$var$t2 = $d2bb940843202fcb$var$_`:host(${0}:not(:disabled):not([disabled-interactive])) .base { background-color: ${0}; --m3e-state-layer-hover-color: ${0}; --m3e-state-layer-hover-opacity: ${0}; --m3e-state-layer-focus-color: ${0}; --m3e-state-layer-focus-opacity: ${0}; --m3e-ripple-color: ${0}; --m3e-ripple-opacity: ${0}; --m3e-elevation-level: ${0}; --m3e-elevation-hover-level: ${0}; --m3e-elevation-focus-level: ${0}; --m3e-elevation-pressed-level: ${0}; } :host(${0}[toggle]:not([selected]):not(:disabled):not([disabled-interactive])) .base { background-color: ${0}; --m3e-state-layer-hover-color: ${0}; --m3e-state-layer-focus-color: ${0}; --m3e-ripple-color: ${0}; } :host(${0}[toggle][selected]:not(:disabled):not([disabled-interactive])) .base { background-color: ${0}; --m3e-state-layer-hover-color: ${0}; --m3e-state-layer-focus-color: ${0}; --m3e-ripple-color: ${0}; } :host(${0}:not(:disabled):not([disabled-interactive])) .base { outline-color: ${0}; } :host(${0}:focus:not(:disabled):not([disabled-interactive])) .base { outline-color: ${0}; } :host(${0}:hover:not(:disabled):not([disabled-interactive])) .base { outline-color: ${0}; } :host(${0}:is(:state(--pressed), :--pressed):not(:disabled):not([disabled-interactive])) .base { outline-color: ${0}; } :host(${0}:not(:disabled):not([disabled-interactive])) .label { color: ${0}; } :host(${0}[toggle]:not([selected]):not(:disabled):not([disabled-interactive])) .label { color: ${0}; } :host(${0}[toggle][selected]:not(:disabled):not([disabled-interactive])) .label { color: ${0}; } :host(${0}:focus:not(:disabled):not([disabled-interactive])) .label { color: ${0}; } :host(${0}[toggle]:not([selected]):focus:not(:disabled):not([disabled-interactive])) .label { color: ${0}; } :host(${0}[toggle][selected]:focus:not(:disabled):not([disabled-interactive])) .label { color: ${0}; } :host(${0}:hover:not(:disabled):not([disabled-interactive])) .label { color: ${0}; } :host(${0}[toggle]:not([selected]):hover:not(:disabled):not([disabled-interactive])) .label { color: ${0}; } :host(${0}[toggle][selected]:hover:not(:disabled):not([disabled-interactive])) .label { color: ${0}; } :host(${0}:is(:state(--pressed), :--pressed):not(:disabled):not([disabled-interactive])) .label { color: ${0}; } :host( ${0}[toggle]:not([selected]):is(:state(--pressed), :--pressed):not(:disabled):not([disabled-interactive]) ) .label { color: ${0}; } :host(${0}[toggle][selected]:is(:state(--pressed), :--pressed):not(:disabled):not([disabled-interactive])) .label { color: ${0}; } :host(${0}:not(:disabled):not([disabled-interactive])) .icon { color: ${0}; } :host(${0}[toggle]:not([selected]):not(:disabled):not([disabled-interactive])) .icon { color: ${0}; } :host(${0}[toggle][selected]:not(:disabled):not([disabled-interactive])) .icon { color: ${0}; } :host(${0}:focus:not(:disabled):not([disabled-interactive])) .icon { color: ${0}; } :host(${0}[toggle]:not([selected]):focus:not(:disabled):not([disabled-interactive])) .icon { color: ${0}; } :host(${0}[toggle][selected]:focus:not(:disabled):not([disabled-interactive])) .icon { color: ${0}; } :host(${0}:hover:not(:disabled):not([disabled-interactive])) .icon { color: ${0}; } :host(${0}[toggle]:not([selected]):hover:not(:disabled):not([disabled-interactive])) .icon { color: ${0}; } :host(${0}[toggle][selected]:hover:not(:disabled):not([disabled-interactive])) .icon { color: ${0}; } :host(${0}:is(:state(--pressed), :--pressed):not(:disabled):not([disabled-interactive])) .icon { color: ${0}; } :host( ${0}[toggle]:not([selected]):is(:state(--pressed), :--pressed):not(:disabled):not([disabled-interactive]) ) .icon { color: ${0}; } :host(${0}[toggle][selected]:is(:state(--pressed), :--pressed):not(:disabled):not([disabled-interactive])) .icon { color: ${0}; } :host(${0}:disabled) .base, :host(${0}[disabled-interactive]) .base { --m3e-elevation-level: ${0}; outline-color: ${0}; background-color: color-mix( in srgb, ${0} ${0}, transparent ); } :host(${0}:disabled) .label, :host(${0}[disabled-interactive]) .label { color: color-mix( in srgb, ${0} ${0}, transparent ); } :host(${0}:disabled) .icon, :host(${0}[disabled-interactive]) .icon { color: color-mix( in srgb, ${0} ${0}, transparent ); }`), selector, (_ButtonVariantToken_variant_containerColor = $d2bb940843202fcb$var$ButtonVariantToken[variant].containerColor) !== null && _ButtonVariantToken_variant_containerColor !== void 0 ? _ButtonVariantToken_variant_containerColor : (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("unset"), $d2bb940843202fcb$var$ButtonVariantToken[variant].hover.stateLayerColor, $d2bb940843202fcb$var$ButtonVariantToken[variant].hover.stateLayerOpacity, $d2bb940843202fcb$var$ButtonVariantToken[variant].focus.stateLayerColor, $d2bb940843202fcb$var$ButtonVariantToken[variant].focus.stateLayerOpacity, $d2bb940843202fcb$var$ButtonVariantToken[variant].pressed.stateLayerColor, $d2bb940843202fcb$var$ButtonVariantToken[variant].pressed.stateLayerOpacity, (_ButtonVariantToken_variant_containerElevation = $d2bb940843202fcb$var$ButtonVariantToken[variant].containerElevation) !== null && _ButtonVariantToken_variant_containerElevation !== void 0 ? _ButtonVariantToken_variant_containerElevation : (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("unset"), (_ButtonVariantToken_variant_hover_containerElevation = $d2bb940843202fcb$var$ButtonVariantToken[variant].hover.containerElevation) !== null && _ButtonVariantToken_variant_hover_containerElevation !== void 0 ? _ButtonVariantToken_variant_hover_containerElevation : (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("unset"), (_ButtonVariantToken_variant_focus_containerElevation = $d2bb940843202fcb$var$ButtonVariantToken[variant].focus.containerElevation) !== null && _ButtonVariantToken_variant_focus_containerElevation !== void 0 ? _ButtonVariantToken_variant_focus_containerElevation : (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("unset"), (_ButtonVariantToken_variant_pressed_containerElevation = $d2bb940843202fcb$var$ButtonVariantToken[variant].pressed.containerElevation) !== null && _ButtonVariantToken_variant_pressed_containerElevation !== void 0 ? _ButtonVariantToken_variant_pressed_containerElevation : (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("unset"), selector, (_ButtonVariantToken_variant_unselectedContainerColor = $d2bb940843202fcb$var$ButtonVariantToken[variant].unselectedContainerColor) !== null && _ButtonVariantToken_variant_unselectedContainerColor !== void 0 ? _ButtonVariantToken_variant_unselectedContainerColor : (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("unset"), $d2bb940843202fcb$var$ButtonVariantToken[variant].hover.unselectedStateLayerColor, $d2bb940843202fcb$var$ButtonVariantToken[variant].focus.unselectedStateLayerColor, $d2bb940843202fcb$var$ButtonVariantToken[variant].pressed.unselectedStateLayerColor, selector, (_ButtonVariantToken_variant_selectedContainerColor = $d2bb940843202fcb$var$ButtonVariantToken[variant].selectedContainerColor) !== null && _ButtonVariantToken_variant_selectedContainerColor !== void 0 ? _ButtonVariantToken_variant_selectedContainerColor : (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("unset"), $d2bb940843202fcb$var$ButtonVariantToken[variant].hover.selectedStateLayerColor, $d2bb940843202fcb$var$ButtonVariantToken[variant].focus.selectedStateLayerColor, $d2bb940843202fcb$var$ButtonVariantToken[variant].pressed.selectedStateLayerColor, selector, (_ButtonVariantToken_variant_outlineColor = $d2bb940843202fcb$var$ButtonVariantToken[variant].outlineColor) !== null && _ButtonVariantToken_variant_outlineColor !== void 0 ? _ButtonVariantToken_variant_outlineColor : (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("unset"), selector, (_ButtonVariantToken_variant_focus_outlineColor = $d2bb940843202fcb$var$ButtonVariantToken[variant].focus.outlineColor) !== null && _ButtonVariantToken_variant_focus_outlineColor !== void 0 ? _ButtonVariantToken_variant_focus_outlineColor : (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("unset"), selector, (_ButtonVariantToken_variant_hover_outlineColor = $d2bb940843202fcb$var$ButtonVariantToken[variant].hover.outlineColor) !== null && _ButtonVariantToken_variant_hover_outlineColor !== void 0 ? _ButtonVariantToken_variant_hover_outlineColor : (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("unset"), selector, (_ButtonVariantToken_variant_pressed_outlineColor = $d2bb940843202fcb$var$ButtonVariantToken[variant].pressed.outlineColor) !== null && _ButtonVariantToken_variant_pressed_outlineColor !== void 0 ? _ButtonVariantToken_variant_pressed_outlineColor : (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("unset"), selector, $d2bb940843202fcb$var$ButtonVariantToken[variant].labelTextColor, selector, $d2bb940843202fcb$var$ButtonVariantToken[variant].unselectedLabelTextColor, selector, $d2bb940843202fcb$var$ButtonVariantToken[variant].selectedLabelTextColor, selector, $d2bb940843202fcb$var$ButtonVariantToken[variant].focus.labelTextColor, selector, $d2bb940843202fcb$var$ButtonVariantToken[variant].focus.unselectedLabelTextColor, selector, $d2bb940843202fcb$var$ButtonVariantToken[variant].focus.selectedLabelTextColor, selector, $d2bb940843202fcb$var$ButtonVariantToken[variant].hover.labelTextColor, selector, $d2bb940843202fcb$var$ButtonVariantToken[variant].hover.unselectedLabelTextColor, selector, $d2bb940843202fcb$var$ButtonVariantToken[variant].hover.selectedLabelTextColor, selector, $d2bb940843202fcb$var$ButtonVariantToken[variant].pressed.labelTextColor, selector, $d2bb940843202fcb$var$ButtonVariantToken[variant].pressed.unselectedLabelTextColor, selector, $d2bb940843202fcb$var$ButtonVariantToken[variant].pressed.selectedLabelTextColor, selector, $d2bb940843202fcb$var$ButtonVariantToken[variant].iconColor, selector, $d2bb940843202fcb$var$ButtonVariantToken[variant].unselectedIconColor, selector, $d2bb940843202fcb$var$ButtonVariantToken[variant].selectedIconColor, selector, $d2bb940843202fcb$var$ButtonVariantToken[variant].focus.iconColor, selector, $d2bb940843202fcb$var$ButtonVariantToken[variant].focus.unselectedIconColor, selector, $d2bb940843202fcb$var$ButtonVariantToken[variant].focus.selectedIconColor, selector, $d2bb940843202fcb$var$ButtonVariantToken[variant].hover.iconColor, selector, $d2bb940843202fcb$var$ButtonVariantToken[variant].hover.unselectedIconColor, selector, $d2bb940843202fcb$var$ButtonVariantToken[variant].hover.selectedIconColor, selector, $d2bb940843202fcb$var$ButtonVariantToken[variant].pressed.iconColor, selector, $d2bb940843202fcb$var$ButtonVariantToken[variant].pressed.unselectedIconColor, selector, $d2bb940843202fcb$var$ButtonVariantToken[variant].pressed.selectedIconColor, selector, selector, (_ButtonVariantToken_variant_disabled_containerElevation = $d2bb940843202fcb$var$ButtonVariantToken[variant].disabled.containerElevation) !== null && _ButtonVariantToken_variant_disabled_containerElevation !== void 0 ? _ButtonVariantToken_variant_disabled_containerElevation : (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("unset"), (_ButtonVariantToken_variant_disabled_outlineColor = $d2bb940843202fcb$var$ButtonVariantToken[variant].disabled.outlineColor) !== null && _ButtonVariantToken_variant_disabled_outlineColor !== void 0 ? _ButtonVariantToken_variant_disabled_outlineColor : (0, $c60305268e0a629a$export$8d80f9cac07cdb3)("unset"), $d2bb940843202fcb$var$ButtonVariantToken[variant].disabled.containerColor, $d2bb940843202fcb$var$ButtonVariantToken[variant].disabled.containerOpacity, selector, selector, $d2bb940843202fcb$var$ButtonVariantToken[variant].disabled.labelTextColor, $d2bb940843202fcb$var$ButtonVariantToken[variant].disabled.labelTextOpacity, selector, selector, $d2bb940843202fcb$var$ButtonVariantToken[variant].disabled.iconColor, $d2bb940843202fcb$var$ButtonVariantToken[variant].disabled.iconOpacity);
}
/**
 * Appearance variant styles for `M3eButtonElement`.
 * @internal
 */ const $d2bb940843202fcb$var$ButtonVariantStyle = [
    $d2bb940843202fcb$var$buttonVariantStyle("text"),
    $d2bb940843202fcb$var$buttonVariantStyle("elevated"),
    $d2bb940843202fcb$var$buttonVariantStyle("outlined"),
    $d2bb940843202fcb$var$buttonVariantStyle("filled"),
    $d2bb940843202fcb$var$buttonVariantStyle("tonal"),
    (0, $c60305268e0a629a$export$dbf350e5966cf602)($d2bb940843202fcb$var$t3 || ($d2bb940843202fcb$var$t3 = $d2bb940843202fcb$var$_`:host(:is(:state(--outlined), :--outlined):not([toggle][selected]):not(:disabled):not([disabled-interactive])) .base { outline-style: solid; }`))
];
var $d2bb940843202fcb$var$_M3eButtonElement_instances, $d2bb940843202fcb$var$_M3eButtonElement_clickHandler, $d2bb940843202fcb$var$_M3eButtonElement_applyVariant, $d2bb940843202fcb$var$_M3eButtonElement_applyShape, $d2bb940843202fcb$var$_M3eButtonElement_applySize, $d2bb940843202fcb$var$_M3eButtonElement_handleClick, $d2bb940843202fcb$var$_M3eButtonElement_handleSelectedIconSlotChange, $d2bb940843202fcb$var$_M3eButtonElement_updateButtonShape, $d2bb940843202fcb$var$_M3eButtonElement_handlePressedChange, $d2bb940843202fcb$var$_M3eButtonElement_cleanupAdjacentPressed;
/**
 * A button users interact with to perform an action.
 *
 * @description
 * The `m3e-button` component is a semantic, expressive UI primitive users interact with to perform an action.
 * Designed according to Material Design 3 guidelines, it supports five visual variants, specified using the
 * `variant` attribute—`filled`, `tonal`, `elevated`, `outlined`, and `text`—each with dynamic elevation,
 * shape morphing, and adaptive color theming. The component responds to interaction states (hover, focus, press, disabled)
 * with smooth motion transitions, ensuring emotional clarity and visual hierarchy.
 *
 * The component is accessible by default, with ARIA roles, contrast-safe color tokens, and strong focus indicators.
 * It supports optional icons and states for binary actions.  When using `m3e-icon` for icons, `filled` is automatically
 * set based on the selected state of a toggle button. It can also function as a link or be used to submit form data.
 *
 * Native disabled `<button>` elements cannot receive focus. This can be problematic in some cases because it can prevent you
 * from telling the user why the button is disabled. You can use the `disabled-interactive` attribute to style a `m3e-button`
 * as disabled but allow for it to receive focus. The button will have `aria-disabled="true"` for assistive technology.
 *
 * @example
 * The following example illustrates changing the appearance from `text` (default), to `tonal` using the `variant` attribute.
 * ```html
 * <m3e-button variant="tonal">Tonal Button</m3e-button>
 * ```
 *
 * @tag m3e-button
 *
 * @slot - Renders the label of the button.
 * @slot icon - Renders an icon before the button's label.
 * @slot selected - Renders the label of the button, when selected.
 * @slot selected-icon - Renders an icon before the button's label, when selected.
 * @slot trailing-icon - Renders an icon after the button's label.
 *
 * @attr disabled - Whether the element is disabled.
 * @attr disabled-interactive - Whether the element is disabled and interactive.
 * @attr download - Whether the `target` of the link button will be downloaded, optionally specifying the new name of the file.
 * @attr href - The URL to which the link button points.
 * @attr name - The name of the element, submitted as a pair with the element's `value` as part of form data, when the element is used to submit a form.
 * @attr rel - The relationship between the `target` of the link button and the document.
 * @attr selected - Whether the toggle button is selected.
 * @attr shape - The shape of the button.
 * @attr size - The size of the button.
 * @attr target - The target of the link button.
 * @attr toggle - Whether the button will toggle between selected and unselected states.
 * @attr type - The type of the element.
 * @attr value - The value associated with the element's name when it's submitted with form data.
 * @attr variant - The appearance variant of the button.
 *
 * @fires beforeinput - Dispatched before a toggle button's selected state changes.
 * @fires input - Dispatched when a toggle button's selected state changes.
 * @fires change - Dispatched when a toggle button's selected state changes.
 * @fires click - Dispatched when the element is clicked.
 *
 * @cssprop --m3e-button-container-height - Height of the button container, for all size variants.
 * @cssprop --m3e-button-outline-thickness - Thickness of the button outline, for all size variants.
 * @cssprop --m3e-button-label-text-font-size - Font size for the label text, for all size variants.
 * @cssprop --m3e-button-label-text-font-weight - Font weight for the label text, for all size variants.
 * @cssprop --m3e-button-label-text-line-height - Line height for the label text, for all size variants.
 * @cssprop --m3e-button-label-text-tracking - Letter tracking for the label text, for all size variants.
 * @cssprop --m3e-button-icon-size - Size of the icon, for all size variants.
 * @cssprop --m3e-button-shape-round - Corner radius for round shape, for all size variants.
 * @cssprop --m3e-button-shape-square - Corner radius for square shape, for all size variants.
 * @cssprop --m3e-button-selected-shape-round - Corner radius when selected (round), for all size variants.
 * @cssprop --m3e-button-selected-shape-square - Corner radius when selected (square), for all size variants.
 * @cssprop --m3e-button-shape-pressed-morph - Corner radius when pressed, for all size variants.
 * @cssprop --m3e-button-leading-space - Space before icon or label, for all size variants.
 * @cssprop --m3e-button-trailing-space - Space after icon or label, for all size variants.
 * @cssprop --m3e-button-icon-label-space - Space between icon and label, for all size variants.
 * @cssprop --m3e-button-extra-small-container-height - Height of the button container, for the extra-small size variant.
 * @cssprop --m3e-button-extra-small-outline-thickness - Thickness of the button outline, for the extra-small size variant.
 * @cssprop --m3e-button-extra-small-label-text-font-size - Font size for the label text, for the extra-small size variant.
 * @cssprop --m3e-button-extra-small-label-text-font-weight - Font weight for the label text, for the extra-small size variant.
 * @cssprop --m3e-button-extra-small-label-text-line-height - Line height for the label text, for the extra-small size variant.
 * @cssprop --m3e-button-extra-small-label-text-tracking - Letter tracking for the label text, for the extra-small size variant.
 * @cssprop --m3e-button-extra-small-icon-size - Size of the icon, for the extra-small size variant.
 * @cssprop --m3e-button-extra-small-shape-round - Corner radius for round shape, for the extra-small size variant.
 * @cssprop --m3e-button-extra-small-shape-square - Corner radius for square shape, for the extra-small size variant.
 * @cssprop --m3e-button-extra-small-selected-shape-round - Corner radius when selected (round), for the extra-small size variant.
 * @cssprop --m3e-button-extra-small-selected-shape-square - Corner radius when selected (square), for the extra-small size variant.
 * @cssprop --m3e-button-extra-small-shape-pressed-morph - Corner radius when pressed, for the extra-small size variant.
 * @cssprop --m3e-button-extra-small-leading-space - Space before icon or label, for the extra-small size variant.
 * @cssprop --m3e-button-extra-small-trailing-space - Space after icon or label, for the extra-small size variant.
 * @cssprop --m3e-button-extra-small-icon-label-space - Space between icon and label, for the extra-small size variant.
 * @cssprop --m3e-button-small-container-height - Height of the button container, for the small size variant.
 * @cssprop --m3e-button-small-outline-thickness - Thickness of the button outline, for the small size variant.
 * @cssprop --m3e-button-small-label-text-font-size - Font size for the label text, for the small size variant.
 * @cssprop --m3e-button-small-label-text-font-weight - Font weight for the label text, for the small size variant.
 * @cssprop --m3e-button-small-label-text-line-height - Line height for the label text, for the small size variant.
 * @cssprop --m3e-button-small-label-text-tracking - Letter tracking for the label text, for the small size variant.
 * @cssprop --m3e-button-small-icon-size - Size of the icon, for the small size variant.
 * @cssprop --m3e-button-small-shape-round - Corner radius for round shape, for the small size variant.
 * @cssprop --m3e-button-small-shape-square - Corner radius for square shape, for the small size variant.
 * @cssprop --m3e-button-small-selected-shape-round - Corner radius when selected (round), for the small size variant.
 * @cssprop --m3e-button-small-selected-shape-square - Corner radius when selected (square), for the small size variant.
 * @cssprop --m3e-button-small-shape-pressed-morph - Corner radius when pressed, for the small size variant.
 * @cssprop --m3e-button-small-leading-space - Space before icon or label, for the small size variant.
 * @cssprop --m3e-button-small-trailing-space - Space after icon or label, for the small size variant.
 * @cssprop --m3e-button-small-icon-label-space - Space between icon and label, for the small size variant.
 * @cssprop --m3e-button-medium-container-height - Height of the button container, for the medium size variant.
 * @cssprop --m3e-button-medium-outline-thickness - Thickness of the button outline, for the medium size variant.
 * @cssprop --m3e-button-medium-label-text-font-size - Font size for the label text, for the medium size variant.
 * @cssprop --m3e-button-medium-label-text-font-weight - Font weight for the label text, for the medium size variant.
 * @cssprop --m3e-button-medium-label-text-line-height - Line height for the label text, for the medium size variant.
 * @cssprop --m3e-button-medium-label-text-tracking - Letter tracking for the label text, for the medium size variant.
 * @cssprop --m3e-button-medium-icon-size - Size of the icon, for the medium size variant.
 * @cssprop --m3e-button-medium-shape-round - Corner radius for round shape, for the medium size variant.
 * @cssprop --m3e-button-medium-shape-square - Corner radius for square shape, for the medium size variant.
 * @cssprop --m3e-button-medium-selected-shape-round - Corner radius when selected (round), for the medium size variant.
 * @cssprop --m3e-button-medium-selected-shape-square - Corner radius when selected (square), for the medium size variant.
 * @cssprop --m3e-button-medium-shape-pressed-morph - Corner radius when pressed, for the medium size variant.
 * @cssprop --m3e-button-medium-leading-space - Space before icon or label, for the medium size variant.
 * @cssprop --m3e-button-medium-trailing-space - Space after icon or label, for the medium size variant.
 * @cssprop --m3e-button-medium-icon-label-space - Space between icon and label, for the medium size variant.
 * @cssprop --m3e-button-large-container-height - Height of the button container, for the large size variant.
 * @cssprop --m3e-button-large-outline-thickness - Thickness of the button outline, for the large size variant.
 * @cssprop --m3e-button-large-label-text-font-size - Font size for the label text, for the large size variant.
 * @cssprop --m3e-button-large-label-text-font-weight - Font weight for the label text, for the large size variant.
 * @cssprop --m3e-button-large-label-text-line-height - Line height for the label text, for the large size variant.
 * @cssprop --m3e-button-large-label-text-tracking - Letter tracking for the label text, for the large size variant.
 * @cssprop --m3e-button-large-icon-size - Size of the icon, for the large size variant.
 * @cssprop --m3e-button-large-shape-round - Corner radius for round shape, for the large size variant.
 * @cssprop --m3e-button-large-shape-square - Corner radius for square shape, for the large size variant.
 * @cssprop --m3e-button-large-selected-shape-round - Corner radius when selected (round), for the large size variant.
 * @cssprop --m3e-button-large-selected-shape-square - Corner radius when selected (square), for the large size variant.
 * @cssprop --m3e-button-large-shape-pressed-morph - Corner radius when pressed, for the large size variant.
 * @cssprop --m3e-button-large-leading-space - Space before icon or label, for the large size variant.
 * @cssprop --m3e-button-large-trailing-space - Space after icon or label, for the large size variant.
 * @cssprop --m3e-button-large-icon-label-space - Space between icon and label, for the large size variant.
 * @cssprop --m3e-button-extra-large-container-height - Height of the button container, for the extra-large size variant.
 * @cssprop --m3e-button-extra-large-outline-thickness - Thickness of the button outline, for the extra-large size variant.
 * @cssprop --m3e-button-extra-large-label-text-font-size - Font size for the label text, for the extra-large size variant.
 * @cssprop --m3e-button-extra-large-label-text-font-weight - Font weight for the label text, for the extra-large size variant.
 * @cssprop --m3e-button-extra-large-label-text-line-height - Line height for the label text, for the extra-large size variant.
 * @cssprop --m3e-button-extra-large-label-text-tracking - Letter tracking for the label text, for the extra-large size variant.
 * @cssprop --m3e-button-extra-large-icon-size - Size of the icon, for the extra-large size variant.
 * @cssprop --m3e-button-extra-large-shape-round - Corner radius for round shape, for the extra-large size variant.
 * @cssprop --m3e-button-extra-large-shape-square - Corner radius for square shape, for the extra-large size variant.
 * @cssprop --m3e-button-extra-large-selected-shape-round - Corner radius when selected (round), for the extra-large size variant.
 * @cssprop --m3e-button-extra-large-selected-shape-square - Corner radius when selected (square), for the extra-large size variant.
 * @cssprop --m3e-button-extra-large-shape-pressed-morph - Corner radius when pressed, for the extra-large size variant.
 * @cssprop --m3e-button-extra-large-leading-space - Space before icon or label, for the extra-large size variant.
 * @cssprop --m3e-button-extra-large-trailing-space - Space after icon or label, for the extra-large size variant.
 * @cssprop --m3e-button-extra-large-icon-label-space - Space between icon and label, for the extra-large size variant.
 * @cssprop --m3e-button-outline-color - Outline color, for all variants.
 * @cssprop --m3e-button-disabled-outline-color - Disabled outline color, for all variants.
 * @cssprop --m3e-button-hover-outline-color - Hover outline color, for all variants.
 * @cssprop --m3e-button-focus-outline-color - Focus outline color, for all variants.
 * @cssprop --m3e-button-pressed-outline-color - Pressed outline color, for all variants.
 * @cssprop --m3e-button-container-color - Container background color, for all variants.
 * @cssprop --m3e-button-container-elevation - Elevation, for all variants.
 * @cssprop --m3e-button-unselected-container-color - Unselected container color, for all variants.
 * @cssprop --m3e-button-selected-container-color - Selected container color, for all variants.
 * @cssprop --m3e-button-disabled-container-elevation - Disabled elevation, for all variants.
 * @cssprop --m3e-button-hover-container-elevation - Hover elevation, for all variants.
 * @cssprop --m3e-button-focus-container-elevation - Focus elevation, for all variants.
 * @cssprop --m3e-button-pressed-container-elevation - Pressed elevation, for all variants.
 * @cssprop --m3e-button-label-text-color - Label color, for all variants.
 * @cssprop --m3e-button-icon-color - Icon color, for all variants.
 * @cssprop --m3e-button-unselected-label-text-color - Unselected label color, for all variants.
 * @cssprop --m3e-button-unselected-icon-color - Unselected icon color, for all variants.
 * @cssprop --m3e-button-selected-label-text-color - Selected label color, for all variants.
 * @cssprop --m3e-button-selected-icon-color - Selected icon color, for all variants.
 * @cssprop --m3e-button-disabled-container-color - Disabled container color, for all variants.
 * @cssprop --m3e-button-disabled-container-opacity - Disabled container opacity, for all variants.
 * @cssprop --m3e-button-disabled-icon-color - Disabled icon color, for all variants.
 * @cssprop --m3e-button-disabled-icon-opacity - Disabled icon opacity, for all variants.
 * @cssprop --m3e-button-disabled-label-text-color - Disabled label color, for all variants.
 * @cssprop --m3e-button-disabled-label-text-opacity - Disabled label opacity, for all variants.
 * @cssprop --m3e-button-hover-icon-color - Hover icon color, for all variants.
 * @cssprop --m3e-button-hover-label-text-color - Hover label color, for all variants.
 * @cssprop --m3e-button-hover-state-layer-color - Hover state layer color, for all variants.
 * @cssprop --m3e-button-hover-state-layer-opacity - Hover state layer opacity, for all variants.
 * @cssprop --m3e-button-hover-unselected-icon-color - Hover unselected icon color, for all variants.
 * @cssprop --m3e-button-hover-unselected-label-text-color - Hover unselected label color, for all variants.
 * @cssprop --m3e-button-hover-unselected-state-layer-color - Hover unselected state layer color, for all variants.
 * @cssprop --m3e-button-hover-selected-icon-color - Hover selected icon color, for all variants.
 * @cssprop --m3e-button-hover-selected-label-text-color - Hover selected label color, for all variants.
 * @cssprop --m3e-button-hover-selected-state-layer-color - Hover selected state layer color, for all variants.
 * @cssprop --m3e-button-focus-icon-color - Focus icon color, for all variants.
 * @cssprop --m3e-button-focus-label-text-color - Focus label color, for all variants.
 * @cssprop --m3e-button-focus-state-layer-color - Focus state layer color, for all variants.
 * @cssprop --m3e-button-focus-state-layer-opacity - Focus state layer opacity, for all variants.
 * @cssprop --m3e-button-focus-unselected-icon-color - Focus unselected icon color, for all variants.
 * @cssprop --m3e-button-focus-unselected-label-text-color - Focus unselected label color, for all variants.
 * @cssprop --m3e-button-focus-unselected-state-layer-color - Focus unselected state layer color, for all variants.
 * @cssprop --m3e-button-focus-selected-icon-color - Focus selected icon color, for all variants.
 * @cssprop --m3e-button-focus-selected-label-text-color - Focus selected label color, for all variants.
 * @cssprop --m3e-button-focus-selected-state-layer-color - Focus selected state layer color, for all variants.
 * @cssprop --m3e-button-pressed-icon-color - Pressed icon color, for all variants.
 * @cssprop --m3e-button-pressed-label-text-color - Pressed label color, for all variants.
 * @cssprop --m3e-button-pressed-state-layer-color - Pressed state layer color, for all variants.
 * @cssprop --m3e-button-pressed-state-layer-opacity - Pressed state layer opacity, for all variants.
 * @cssprop --m3e-button-pressed-unselected-icon-color - Pressed unselected icon color, for all variants.
 * @cssprop --m3e-button-pressed-unselected-label-text-color - Pressed unselected label color, for all variants.
 * @cssprop --m3e-button-pressed-unselected-state-layer-color - Pressed unselected state layer color, for all variants.
 * @cssprop --m3e-button-pressed-selected-icon-color - Pressed selected icon color, for all variants.
 * @cssprop --m3e-button-pressed-selected-label-text-color - Pressed selected label color, for all variants.
 * @cssprop --m3e-button-pressed-selected-state-layer-color - Pressed selected state layer color, for all variants.
 * @cssprop --m3e-elevated-button-label-text-color - Label color, for the elevated variant.
 * @cssprop --m3e-elevated-button-icon-color - Icon color, for the elevated variant.
 * @cssprop --m3e-elevated-button-container-color - Container background color, for the elevated variant.
 * @cssprop --m3e-elevated-button-container-elevation - Elevation, for the elevated variant.
 * @cssprop --m3e-elevated-button-unselected-label-text-color - Unselected label color, for the elevated variant.
 * @cssprop --m3e-elevated-button-unselected-icon-color - Unselected icon color, for the elevated variant.
 * @cssprop --m3e-elevated-button-unselected-container-color - Unselected container color, for the elevated variant.
 * @cssprop --m3e-elevated-button-selected-label-text-color - Selected label color, for the elevated variant.
 * @cssprop --m3e-elevated-button-selected-icon-color - Selected icon color, for the elevated variant.
 * @cssprop --m3e-elevated-button-selected-container-color - Selected container color, for the elevated variant.
 * @cssprop --m3e-elevated-button-disabled-container-color - Disabled container color, for the elevated variant.
 * @cssprop --m3e-elevated-button-disabled-container-opacity - Disabled container opacity, for the elevated variant.
 * @cssprop --m3e-elevated-button-disabled-icon-color - Disabled icon color, for the elevated variant.
 * @cssprop --m3e-elevated-button-disabled-icon-opacity - Disabled icon opacity, for the elevated variant.
 * @cssprop --m3e-elevated-button-disabled-label-text-color - Disabled label color, for the elevated variant.
 * @cssprop --m3e-elevated-button-disabled-label-text-opacity - Disabled label opacity, for the elevated variant.
 * @cssprop --m3e-elevated-button-disabled-container-elevation - Disabled elevation, for the elevated variant.
 * @cssprop --m3e-elevated-button-hover-icon-color - Hover icon color, for the elevated variant.
 * @cssprop --m3e-elevated-button-hover-label-text-color - Hover label color, for the elevated variant.
 * @cssprop --m3e-elevated-button-hover-state-layer-color - Hover state layer color, for the elevated variant.
 * @cssprop --m3e-elevated-button-hover-state-layer-opacity - Hover state layer opacity, for the elevated variant.
 * @cssprop --m3e-elevated-button-hover-container-elevation - Hover elevation, for the elevated variant.
 * @cssprop --m3e-elevated-button-hover-unselected-icon-color - Hover unselected icon color, for the elevated variant.
 * @cssprop --m3e-elevated-button-hover-unselected-label-text-color - Hover unselected label color, for the elevated variant.
 * @cssprop --m3e-elevated-button-hover-unselected-state-layer-color - Hover unselected state layer color, for the elevated variant.
 * @cssprop --m3e-elevated-button-hover-selected-icon-color - Hover selected icon color, for the elevated variant.
 * @cssprop --m3e-elevated-button-hover-selected-label-text-color - Hover selected label color, for the elevated variant.
 * @cssprop --m3e-elevated-button-hover-selected-state-layer-color - Hover selected state layer color, for the elevated variant.
 * @cssprop --m3e-elevated-button-focus-icon-color - Focus icon color, for the elevated variant.
 * @cssprop --m3e-elevated-button-focus-label-text-color - Focus label color, for the elevated variant.
 * @cssprop --m3e-elevated-button-focus-state-layer-color - Focus state layer color, for the elevated variant.
 * @cssprop --m3e-elevated-button-focus-state-layer-opacity - Focus state layer opacity, for the elevated variant.
 * @cssprop --m3e-elevated-button-focus-container-elevation - Focus elevation, for the elevated variant.
 * @cssprop --m3e-elevated-button-focus-unselected-label-text-color - Focus unselected label color, for the elevated variant.
 * @cssprop --m3e-elevated-button-focus-unselected-icon-color - Focus unselected icon color, for the elevated variant.
 * @cssprop --m3e-elevated-button-focus-unselected-state-layer-color - Focus unselected state layer color, for the elevated variant.
 * @cssprop --m3e-elevated-button-focus-selected-icon-color - Focus selected icon color, for the elevated variant.
 * @cssprop --m3e-elevated-button-focus-selected-label-text-color - Focus selected label color, for the elevated variant.
 * @cssprop --m3e-elevated-button-focus-selected-state-layer-color - Focus selected state layer color, for the elevated variant.
 * @cssprop --m3e-elevated-button-pressed-icon-color - Pressed icon color, for the elevated variant.
 * @cssprop --m3e-elevated-button-pressed-label-text-color - Pressed label color, for the elevated variant.
 * @cssprop --m3e-elevated-button-pressed-state-layer-color - Pressed state layer color, for the elevated variant.
 * @cssprop --m3e-elevated-button-pressed-state-layer-opacity - Pressed state layer opacity, for the elevated variant.
 * @cssprop --m3e-elevated-button-pressed-container-elevation - Pressed elevation, for the elevated variant.
 * @cssprop --m3e-elevated-button-pressed-unselected-label-text-color - Pressed unselected label color, for the elevated variant.
 * @cssprop --m3e-elevated-button-pressed-unselected-icon-color - Pressed unselected icon color, for the elevated variant.
 * @cssprop --m3e-elevated-button-pressed-unselected-state-layer-color - Pressed unselected state layer color, for the elevated variant.
 * @cssprop --m3e-elevated-button-pressed-selected-icon-color - Pressed selected icon color, for the elevated variant.
 * @cssprop --m3e-elevated-button-pressed-selected-label-text-color - Pressed selected label color, for the elevated variant.
 * @cssprop --m3e-elevated-button-pressed-selected-state-layer-color - Pressed selected state layer color, for the elevated variant.
 * @cssprop --m3e-outlined-button-label-text-color - Label color, for the outlined variant.
 * @cssprop --m3e-outlined-button-icon-color - Icon color, for the outlined variant.
 * @cssprop --m3e-outlined-button-outline-color - Outline color, for the outlined variant.
 * @cssprop --m3e-outlined-button-unselected-label-text-color - Unselected label color, for the outlined variant.
 * @cssprop --m3e-outlined-button-unselected-icon-color - Unselected icon color, for the outlined variant.
 * @cssprop --m3e-outlined-button-selected-label-text-color - Selected label color, for the outlined variant.
 * @cssprop --m3e-outlined-button-selected-icon-color - Selected icon color, for the outlined variant.
 * @cssprop --m3e-outlined-button-selected-container-color - Selected container color, for the outlined variant.
 * @cssprop --m3e-outlined-button-disabled-container-color - Disabled container color, for the outlined variant.
 * @cssprop --m3e-outlined-button-disabled-container-opacity - Disabled container opacity, for the outlined variant.
 * @cssprop --m3e-outlined-button-disabled-icon-color - Disabled icon color, for the outlined variant.
 * @cssprop --m3e-outlined-button-disabled-icon-opacity - Disabled icon opacity, for the outlined variant.
 * @cssprop --m3e-outlined-button-disabled-label-text-color - Disabled label color, for the outlined variant.
 * @cssprop --m3e-outlined-button-disabled-label-text-opacity - Disabled label opacity, for the outlined variant.
 * @cssprop --m3e-outlined-button-disabled-outline-color - Disabled outline color, for the outlined variant.
 * @cssprop --m3e-outlined-button-hover-icon-color - Hover icon color, for the outlined variant.
 * @cssprop --m3e-outlined-button-hover-label-text-color - Hover label color, for the outlined variant.
 * @cssprop --m3e-outlined-button-hover-outline-color - Hover outline color, for the outlined variant.
 * @cssprop --m3e-outlined-button-hover-state-layer-color - Hover state layer color, for the outlined variant.
 * @cssprop --m3e-outlined-button-hover-state-layer-opacity - Hover state layer opacity, for the outlined variant.
 * @cssprop --m3e-outlined-button-hover-unselected-icon-color - Hover unselected icon color, for the outlined variant.
 * @cssprop --m3e-outlined-button-hover-unselected-label-text-color - Hover unselected label color, for the outlined variant.
 * @cssprop --m3e-outlined-button-hover-unselected-state-layer-color - Hover unselected state layer color, for the outlined variant.
 * @cssprop --m3e-outlined-button-hover-selected-icon-color - Hover selected icon color, for the outlined variant.
 * @cssprop --m3e-outlined-button-hover-selected-label-text-color - Hover selected label color, for the outlined variant.
 * @cssprop --m3e-outlined-button-hover-selected-state-layer-color - Hover selected state layer color, for the outlined variant.
 * @cssprop --m3e-outlined-button-focus-icon-color - Focus icon color, for the outlined variant.
 * @cssprop --m3e-outlined-button-focus-label-text-color - Focus label color, for the outlined variant.
 * @cssprop --m3e-outlined-button-focus-outline-color - Focus outline color, for the outlined variant.
 * @cssprop --m3e-outlined-button-focus-state-layer-color - Focus state layer color, for the outlined variant.
 * @cssprop --m3e-outlined-button-focus-state-layer-opacity - Focus state layer opacity, for the outlined variant.
 * @cssprop --m3e-outlined-button-focus-unselected-icon-color - Focus unselected icon color, for the outlined variant.
 * @cssprop --m3e-outlined-button-focus-unselected-label-text-color - Focus unselected label color, for the outlined variant.
 * @cssprop --m3e-outlined-button-focus-unselected-state-layer-color - Focus unselected state layer color, for the outlined variant.
 * @cssprop --m3e-outlined-button-focus-selected-icon-color - Focus selected icon color, for the outlined variant.
 * @cssprop --m3e-outlined-button-focus-selected-label-text-color - Focus selected label color, for the outlined variant.
 * @cssprop --m3e-outlined-button-focus-selected-state-layer-color - Focus selected state layer color, for the outlined variant.
 * @cssprop --m3e-outlined-button-pressed-icon-color - Pressed icon color, for the outlined variant.
 * @cssprop --m3e-outlined-button-pressed-label-text-color - Pressed label color, for the outlined variant.
 * @cssprop --m3e-outlined-button-pressed-outline-color - Pressed outline color, for the outlined variant.
 * @cssprop --m3e-outlined-button-pressed-state-layer-color - Pressed state layer color, for the outlined variant.
 * @cssprop --m3e-outlined-button-pressed-state-layer-opacity - Pressed state layer opacity, for the outlined variant.
 * @cssprop --m3e-outlined-button-pressed-unselected-icon-color - Pressed unselected icon color, for the outlined variant.
 * @cssprop --m3e-outlined-button-pressed-unselected-label-text-color - Pressed unselected label color, for the outlined variant.
 * @cssprop --m3e-outlined-button-pressed-unselected-state-layer-color - Pressed unselected state layer color, for the outlined variant.
 * @cssprop --m3e-outlined-button-pressed-selected-icon-color - Pressed selected icon color, for the outlined variant.
 * @cssprop --m3e-outlined-button-pressed-selected-label-text-color - Pressed selected label color, for the outlined variant.
 * @cssprop --m3e-outlined-button-pressed-selected-state-layer-color - Pressed selected state layer color, for the outlined variant.
 * @cssprop --m3e-filled-button-label-text-color - Label color, for the filled variant.
 * @cssprop --m3e-filled-button-icon-color - Icon color, for the filled variant.
 * @cssprop --m3e-filled-button-container-color - Container background color, for the filled variant.
 * @cssprop --m3e-filled-button-container-elevation - Elevation, for the filled variant.
 * @cssprop --m3e-filled-button-unselected-label-text-color - Unselected label color, for the filled variant.
 * @cssprop --m3e-filled-button-unselected-icon-color - Unselected icon color, for the filled variant.
 * @cssprop --m3e-filled-button-unselected-container-color - Unselected container color, for the filled variant.
 * @cssprop --m3e-filled-button-selected-label-text-color - Selected label color, for the filled variant.
 * @cssprop --m3e-filled-button-selected-icon-color - Selected icon color, for the filled variant.
 * @cssprop --m3e-filled-button-selected-container-color - Selected container color, for the filled variant.
 * @cssprop --m3e-filled-button-disabled-container-color - Disabled container color, for the filled variant.
 * @cssprop --m3e-filled-button-disabled-container-opacity - Disabled container opacity, for the filled variant.
 * @cssprop --m3e-filled-button-disabled-icon-color - Disabled icon color, for the filled variant.
 * @cssprop --m3e-filled-button-disabled-icon-opacity - Disabled icon opacity, for the filled variant.
 * @cssprop --m3e-filled-button-disabled-label-text-color - Disabled label color, for the filled variant.
 * @cssprop --m3e-filled-button-disabled-label-text-opacity - Disabled label opacity, for the filled variant.
 * @cssprop --m3e-filled-button-disabled-container-elevation - Disabled elevation, for the filled variant.
 * @cssprop --m3e-filled-button-hover-icon-color - Hover icon color, for the filled variant.
 * @cssprop --m3e-filled-button-hover-label-text-color - Hover label color, for the filled variant.
 * @cssprop --m3e-filled-button-hover-state-layer-color - Hover state layer color, for the filled variant.
 * @cssprop --m3e-filled-button-hover-state-layer-opacity - Hover state layer opacity, for the filled variant.
 * @cssprop --m3e-filled-button-hover-container-elevation - Hover elevation, for the filled variant.
 * @cssprop --m3e-filled-button-hover-unselected-icon-color - Hover unselected icon color, for the filled variant.
 * @cssprop --m3e-filled-button-hover-unselected-label-text-color - Hover unselected label color, for the filled variant.
 * @cssprop --m3e-filled-button-hover-unselected-state-layer-color - Hover unselected state layer color, for the filled variant.
 * @cssprop --m3e-filled-button-hover-selected-icon-color - Hover selected icon color, for the filled variant.
 * @cssprop --m3e-filled-button-hover-selected-label-text-color - Hover selected label color, for the filled variant.
 * @cssprop --m3e-filled-button-hover-selected-state-layer-color - Hover selected state layer color, for the filled variant.
 * @cssprop --m3e-filled-button-focus-icon-color - Focus icon color, for the filled variant.
 * @cssprop --m3e-filled-button-focus-label-text-color - Focus label color, for the filled variant.
 * @cssprop --m3e-filled-button-focus-state-layer-color - Focus state layer color, for the filled variant.
 * @cssprop --m3e-filled-button-focus-state-layer-opacity - Focus state layer opacity, for the filled variant.
 * @cssprop --m3e-filled-button-focus-container-elevation - Focus elevation, for the filled variant.
 * @cssprop --m3e-filled-button-focus-unselected-icon-color - Focus unselected icon color, for the filled variant.
 * @cssprop --m3e-filled-button-focus-unselected-label-text-color - Focus unselected label color, for the filled variant.
 * @cssprop --m3e-filled-button-focus-unselected-state-layer-color - Focus unselected state layer color, for the filled variant.
 * @cssprop --m3e-filled-button-focus-selected-icon-color - Focus selected icon color, for the filled variant.
 * @cssprop --m3e-filled-button-focus-selected-label-text-color - Focus selected label color, for the filled variant.
 * @cssprop --m3e-filled-button-focus-selected-state-layer-color - Focus selected state layer color, for the filled variant.
 * @cssprop --m3e-filled-button-pressed-icon-color - Pressed icon color, for the filled variant.
 * @cssprop --m3e-filled-button-pressed-label-text-color - Pressed label color, for the filled variant.
 * @cssprop --m3e-filled-button-pressed-state-layer-color - Pressed state layer color, for the filled variant.
 * @cssprop --m3e-filled-button-pressed-state-layer-opacity - Pressed state layer opacity, for the filled variant.
 * @cssprop --m3e-filled-button-pressed-container-elevation - Pressed elevation, for the filled variant.
 * @cssprop --m3e-filled-button-pressed-unselected-icon-color - Pressed unselected icon color, for the filled variant.
 * @cssprop --m3e-filled-button-pressed-unselected-label-text-color - Pressed unselected label color, for the filled variant.
 * @cssprop --m3e-filled-button-pressed-unselected-state-layer-color - Pressed unselected state layer color, for the filled variant.
 * @cssprop --m3e-filled-button-pressed-selected-icon-color - Pressed selected icon color, for the filled variant.
 * @cssprop --m3e-filled-button-pressed-selected-label-text-color - Pressed selected label color, for the filled variant.
 * @cssprop --m3e-filled-button-pressed-selected-state-layer-color - Pressed selected state layer color, for the filled variant.
 * @cssprop --m3e-tonal-button-label-text-color - Label color, for the tonal variant.
 * @cssprop --m3e-tonal-button-icon-color - Icon color, for the tonal variant.
 * @cssprop --m3e-tonal-button-container-color - Container background color, for the tonal variant.
 * @cssprop --m3e-tonal-button-container-elevation - Elevation, for the tonal variant.
 * @cssprop --m3e-tonal-button-unselected-label-text-color - Unselected label color, for the tonal variant.
 * @cssprop --m3e-tonal-button-unselected-icon-color - Unselected icon color, for the tonal variant.
 * @cssprop --m3e-tonal-button-unselected-container-color - Unselected container color, for the tonal variant.
 * @cssprop --m3e-tonal-button-selected-label-text-color - Selected label color, for the tonal variant.
 * @cssprop --m3e-tonal-button-selected-icon-color - Selected icon color, for the tonal variant.
 * @cssprop --m3e-tonal-button-selected-container-color - Selected container color, for the tonal variant.
 * @cssprop --m3e-tonal-button-disabled-container-color - Disabled container color, for the tonal variant.
 * @cssprop --m3e-tonal-button-disabled-container-opacity - Disabled container opacity, for the tonal variant.
 * @cssprop --m3e-tonal-button-disabled-icon-color - Disabled icon color, for the tonal variant.
 * @cssprop --m3e-tonal-button-disabled-icon-opacity - Disabled icon opacity, for the tonal variant.
 * @cssprop --m3e-tonal-button-disabled-label-text-color - Disabled label color, for the tonal variant.
 * @cssprop --m3e-tonal-button-disabled-label-text-opacity - Disabled label opacity, for the tonal variant.
 * @cssprop --m3e-tonal-button-disabled-container-elevation - Disabled elevation, for the tonal variant.
 * @cssprop --m3e-tonal-button-hover-icon-color - Hover icon color, for the tonal variant.
 * @cssprop --m3e-tonal-button-hover-label-text-color - Hover label color, for the tonal variant.
 * @cssprop --m3e-tonal-button-hover-state-layer-color - Hover state layer color, for the tonal variant.
 * @cssprop --m3e-tonal-button-hover-state-layer-opacity - Hover state layer opacity, for the tonal variant.
 * @cssprop --m3e-tonal-button-hover-container-elevation - Hover elevation, for the tonal variant.
 * @cssprop --m3e-tonal-button-hover-unselected-icon-color - Hover unselected icon color, for the tonal variant.
 * @cssprop --m3e-tonal-button-hover-unselected-label-text-color - Hover unselected label color, for the tonal variant.
 * @cssprop --m3e-tonal-button-hover-unselected-state-layer-color - Hover unselected state layer color, for the tonal variant.
 * @cssprop --m3e-tonal-button-hover-selected-icon-color - Hover selected icon color, for the tonal variant.
 * @cssprop --m3e-tonal-button-hover-selected-label-text-color - Hover selected label color, for the tonal variant.
 * @cssprop --m3e-tonal-button-hover-selected-state-layer-color - Hover selected state layer color, for the tonal variant.
 * @cssprop --m3e-tonal-button-focus-icon-color - Focus icon color, for the tonal variant.
 * @cssprop --m3e-tonal-button-focus-label-text-color - Focus label color, for the tonal variant.
 * @cssprop --m3e-tonal-button-focus-state-layer-color - Focus state layer color, for the tonal variant.
 * @cssprop --m3e-tonal-button-focus-state-layer-opacity - Focus state layer opacity, for the tonal variant.
 * @cssprop --m3e-tonal-button-focus-container-elevation - Focus elevation, for the tonal variant.
 * @cssprop --m3e-tonal-button-focus-unselected-icon-color - Focus unselected icon color, for the tonal variant.
 * @cssprop --m3e-tonal-button-focus-unselected-label-text-color - Focus unselected label color, for the tonal variant.
 * @cssprop --m3e-tonal-button-focus-unselected-state-layer-color - Focus unselected state layer color, for the tonal variant.
 * @cssprop --m3e-tonal-button-focus-selected-icon-color - Focus selected icon color, for the tonal variant.
 * @cssprop --m3e-tonal-button-focus-selected-label-text-color - Focus selected label color, for the tonal variant.
 * @cssprop --m3e-tonal-button-focus-selected-state-layer-color - Focus selected state layer color, for the tonal variant.
 * @cssprop --m3e-tonal-button-pressed-icon-color - Pressed icon color, for the tonal variant.
 * @cssprop --m3e-tonal-button-pressed-label-text-color - Pressed label color, for the tonal variant.
 * @cssprop --m3e-tonal-button-pressed-state-layer-color - Pressed state layer color, for the tonal variant.
 * @cssprop --m3e-tonal-button-pressed-state-layer-opacity - Pressed state layer opacity, for the tonal variant.
 * @cssprop --m3e-tonal-button-pressed-container-elevation - Pressed elevation, for the tonal variant.
 * @cssprop --m3e-tonal-button-pressed-unselected-icon-color - Pressed unselected icon color, for the tonal variant.
 * @cssprop --m3e-tonal-button-pressed-unselected-label-text-color - Pressed unselected label color, for the tonal variant.
 * @cssprop --m3e-tonal-button-pressed-unselected-state-layer-color - Pressed unselected state layer color, for the tonal variant.
 * @cssprop --m3e-tonal-button-pressed-selected-icon-color - Pressed selected icon color, for the tonal variant.
 * @cssprop --m3e-tonal-button-pressed-selected-label-text-color - Pressed selected label color, for the tonal variant.
 * @cssprop --m3e-tonal-button-pressed-selected-state-layer-color - Pressed selected state layer color, for the tonal variant.
 * @cssprop --m3e-text-button-label-text-color - Label color, for the text variant.
 * @cssprop --m3e-text-button-icon-color - Icon color, for the text variant.
 * @cssprop --m3e-text-button-unselected-label-text-color - Unselected label color, for the text variant.
 * @cssprop --m3e-text-button-unselected-icon-color - Unselected icon color, for the text variant.
 * @cssprop --m3e-text-button-selected-label-text-color - Selected label color, for the text variant.
 * @cssprop --m3e-text-button-selected-icon-color - Selected icon color, for the text variant.
 * @cssprop --m3e-text-button-disabled-container-color - Disabled container color, for the text variant.
 * @cssprop --m3e-text-button-disabled-container-opacity - Disabled container opacity, for the text variant.
 * @cssprop --m3e-text-button-disabled-icon-color - Disabled icon color, for the text variant.
 * @cssprop --m3e-text-button-disabled-icon-opacity - Disabled icon opacity, for the text variant.
 * @cssprop --m3e-text-button-disabled-label-text-color - Disabled label color, for the text variant.
 * @cssprop --m3e-text-button-disabled-label-text-opacity - Disabled label opacity, for the text variant.
 * @cssprop --m3e-text-button-hover-icon-color - Hover icon color, for the text variant.
 * @cssprop --m3e-text-button-hover-label-text-color - Hover label color, for the text variant.
 * @cssprop --m3e-text-button-hover-state-layer-color - Hover state layer color, for the text variant.
 * @cssprop --m3e-text-button-hover-state-layer-opacity - Hover state layer opacity, for the text variant.
 * @cssprop --m3e-text-button-hover-unselected-icon-color - Hover unselected icon color, for the text variant.
 * @cssprop --m3e-text-button-hover-unselected-label-text-color - Hover unselected label color, for the text variant.
 * @cssprop --m3e-text-button-hover-unselected-state-layer-color - Hover unselected state layer color, for the text variant.
 * @cssprop --m3e-text-button-hover-selected-icon-color - Hover selected icon color, for the text variant.
 * @cssprop --m3e-text-button-hover-selected-label-text-color - Hover selected label color, for the text variant.
 * @cssprop --m3e-text-button-hover-selected-state-layer-color - Hover selected state layer color, for the text variant.
 * @cssprop --m3e-text-button-focus-icon-color - Focus icon color, for the text variant.
 * @cssprop --m3e-text-button-focus-label-text-color - Focus label color, for the text variant.
 * @cssprop --m3e-text-button-focus-state-layer-color - Focus state layer color, for the text variant.
 * @cssprop --m3e-text-button-focus-state-layer-opacity - Focus state layer opacity, for the text variant.
 * @cssprop --m3e-text-button-focus-unselected-icon-color - Focus unselected icon color, for the text variant.
 * @cssprop --m3e-text-button-focus-unselected-label-text-color - Focus unselected label color, for the text variant.
 * @cssprop --m3e-text-button-focus-unselected-state-layer-color - Focus unselected state layer color, for the text variant.
 * @cssprop --m3e-text-button-focus-selected-icon-color - Focus selected icon color, for the text variant.
 * @cssprop --m3e-text-button-focus-selected-label-text-color - Focus selected label color, for the text variant.
 * @cssprop --m3e-text-button-focus-selected-state-layer-color - Focus selected state layer color, for the text variant.
 * @cssprop --m3e-text-button-pressed-icon-color - Pressed icon color, for the text variant.
 * @cssprop --m3e-text-button-pressed-label-text-color - Pressed label color, for the text variant.
 * @cssprop --m3e-text-button-pressed-state-layer-color - Pressed state layer color, for the text variant.
 * @cssprop --m3e-text-button-pressed-state-layer-opacity - Pressed state layer opacity, for the text variant.
 * @cssprop --m3e-text-button-pressed-unselected-icon-color - Pressed unselected icon color, for the text variant.
 * @cssprop --m3e-text-button-pressed-unselected-label-text-color - Pressed unselected label color, for the text variant.
 * @cssprop --m3e-text-button-pressed-unselected-state-layer-color - Pressed unselected state layer color, for the text variant.
 * @cssprop --m3e-text-button-pressed-selected-icon-color - Pressed selected icon color, for the text variant.
 * @cssprop --m3e-text-button-pressed-selected-label-text-color - Pressed selected label color, for the text variant.
 * @cssprop --m3e-text-button-pressed-selected-state-layer-color - Pressed selected state layer color, for the text variant.
 */ let $d2bb940843202fcb$export$df1260532f1fcc98 = class M3eButtonElement extends (0, $2795e4e0258f7c7d$export$d564d59935f4debe)((0, $2795e4e0258f7c7d$export$29d11c0fe2fc51d8)((0, $2795e4e0258f7c7d$export$f7d03dabd73ead6b)((0, $2795e4e0258f7c7d$export$35a3bebf7ef2d934)((0, $2795e4e0258f7c7d$export$3d1d3384b4efc6c3)((0, $2795e4e0258f7c7d$export$9a986b15f53d6d10)((0, $2795e4e0258f7c7d$export$282c9fa792fbac93)((0, $2795e4e0258f7c7d$export$46919bad18fb2f76)((0, $08f2bff00ea64ee4$export$3f2f9f5909897157), "button"), true))))))) {
    /** Whether the button is contained by a button group. */ get grouped() {
        return (0, $2795e4e0258f7c7d$export$6bae5520ca265d22)(this, "--grouped");
    }
    /** @inheritdoc */ render() {
        return (0, $5e4f263f2dad39fc$export$c0bb0b647f701bb5)($d2bb940843202fcb$var$t7 || ($d2bb940843202fcb$var$t7 = $d2bb940843202fcb$var$_`<div class="base"><m3e-elevation class="elevation" ?disabled="${0}"></m3e-elevation><m3e-state-layer class="state-layer" ?disabled="${0}"></m3e-state-layer><m3e-focus-ring class="focus-ring" ?disabled="${0}"></m3e-focus-ring><m3e-ripple class="ripple" ?disabled="${0}"></m3e-ripple><div class="touch" aria-hidden="true"></div>${0}<div class="wrapper">${0}<slot class="icon" name="icon" aria-hidden="true"></slot><div class="label">${0}</div><slot class="icon" name="trailing-icon" aria-hidden="true"></slot></div></div>`), this.disabled || this.disabledInteractive, this.disabled || this.disabledInteractive, this.disabled, this.disabled || this.disabledInteractive, this[0, $2795e4e0258f7c7d$export$6118a8e97d251010](), this.toggle ? (0, $5e4f263f2dad39fc$export$c0bb0b647f701bb5)($d2bb940843202fcb$var$t4 || ($d2bb940843202fcb$var$t4 = $d2bb940843202fcb$var$_`<slot class="icon" name="selected-icon" aria-hidden="true" @slotchange="${0}"></slot>`), (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $d2bb940843202fcb$var$_M3eButtonElement_instances, "m", $d2bb940843202fcb$var$_M3eButtonElement_handleSelectedIconSlotChange)) : (0, $5e4f263f2dad39fc$export$45b790e32b2810ee), this.toggle && this.selected ? (0, $5e4f263f2dad39fc$export$c0bb0b647f701bb5)($d2bb940843202fcb$var$t5 || ($d2bb940843202fcb$var$t5 = $d2bb940843202fcb$var$_`<slot name="selected"><slot></slot></slot>`)) : (0, $5e4f263f2dad39fc$export$c0bb0b647f701bb5)($d2bb940843202fcb$var$t6 || ($d2bb940843202fcb$var$t6 = $d2bb940843202fcb$var$_`<slot></slot>`)));
    }
    /** @inheritdoc */ connectedCallback() {
        super.connectedCallback();
        this.addEventListener("click", (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $d2bb940843202fcb$var$_M3eButtonElement_clickHandler, "f"));
        (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $d2bb940843202fcb$var$_M3eButtonElement_instances, "m", $d2bb940843202fcb$var$_M3eButtonElement_applyVariant).call(this);
        (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $d2bb940843202fcb$var$_M3eButtonElement_instances, "m", $d2bb940843202fcb$var$_M3eButtonElement_applyShape).call(this);
        (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $d2bb940843202fcb$var$_M3eButtonElement_instances, "m", $d2bb940843202fcb$var$_M3eButtonElement_applySize).call(this);
    }
    /** @inheritdoc */ disconnectedCallback() {
        var _this__base;
        super.disconnectedCallback();
        [
            "--pressed",
            "--resting",
            "--grouped",
            "--connected"
        ].forEach((x)=>(0, $2795e4e0258f7c7d$export$eda34dc61103d62e)(this, x));
        (_this__base = this._base) === null || _this__base === void 0 ? void 0 : _this__base.style.removeProperty("--_button-shape");
        this.style.removeProperty("--_button-width");
        this.style.removeProperty("--_adjacent-shrink");
        (0, $2795e4e0258f7c7d$export$eda34dc61103d62e)(this, "--adjacent-pressed");
        this.removeEventListener("click", (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $d2bb940843202fcb$var$_M3eButtonElement_clickHandler, "f"));
    }
    /** @inheritdoc */ willUpdate(_changedProperties) {
        super.willUpdate(_changedProperties);
        if (_changedProperties.has("variant")) (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $d2bb940843202fcb$var$_M3eButtonElement_instances, "m", $d2bb940843202fcb$var$_M3eButtonElement_applyVariant).call(this);
        if (_changedProperties.has("shape")) (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $d2bb940843202fcb$var$_M3eButtonElement_instances, "m", $d2bb940843202fcb$var$_M3eButtonElement_applyShape).call(this);
        if (_changedProperties.has("size")) (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $d2bb940843202fcb$var$_M3eButtonElement_instances, "m", $d2bb940843202fcb$var$_M3eButtonElement_applySize).call(this);
    }
    /** @inheritdoc */ firstUpdated(_changedProperties) {
        super.firstUpdated(_changedProperties);
        [
            this._elevation,
            this._focusRing,
            this._stateLayer,
            this._ripple
        ].forEach((x)=>x === null || x === void 0 ? void 0 : x.attach(this));
    }
    /** @inheritdoc */ updated(_changedProperties) {
        super.updated(_changedProperties);
        if (_changedProperties.has("disabled") && this.disabled || _changedProperties.has("disabledInteractive") && this.disabledInteractive) {
            (0, $2795e4e0258f7c7d$export$eda34dc61103d62e)(this, "--pressed");
            (0, $2795e4e0258f7c7d$export$eda34dc61103d62e)(this, "--resting");
        }
        if (_changedProperties.has("toggle") || _changedProperties.has("selected")) {
            this.ariaPressed = this.toggle ? `${this.selected}` : null;
            if (this.toggle) for (const icon of this.querySelectorAll("m3e-icon"))icon.toggleAttribute("filled", this.selected);
        }
    }
    /** @private */ _handleResize() {
        if (this.grouped && !(0, $2795e4e0258f7c7d$export$6bae5520ca265d22)(this, "--no-resize") && this !== document.activeElement) {
            this.style.setProperty("--_button-width", `${this.getBoundingClientRect().width}px`);
            (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $d2bb940843202fcb$var$_M3eButtonElement_instances, "m", $d2bb940843202fcb$var$_M3eButtonElement_updateButtonShape).call(this, true);
        }
    }
    constructor(){
        super();
        $d2bb940843202fcb$var$_M3eButtonElement_instances.add(this);
        /** @internal */ this._adjacentPressedTimeout = -1;
        /** @private */ $d2bb940843202fcb$var$_M3eButtonElement_clickHandler.set(this, (e)=>(0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $d2bb940843202fcb$var$_M3eButtonElement_instances, "m", $d2bb940843202fcb$var$_M3eButtonElement_handleClick).call(this, e));
        /**
     * The appearance variant of the button.
     * @default "text"
     */ this.variant = "text";
        /**
     * The shape of the button.
     * @default "rounded"
     */ this.shape = "rounded";
        /**
     * The size of the button.
     * @default "small"
     */ this.size = "small";
        /**
     * Whether the button will toggle between selected and unselected states.
     * @default false
     */ this.toggle = false;
        /**
     * Whether the toggle button is selected.
     * @default false
     */ this.selected = false;
        new (0, $2795e4e0258f7c7d$export$8ba29cfbcbd8efc8)(this, {
            callback: ()=>this._handleResize()
        });
        new (0, $2795e4e0258f7c7d$export$766c876d58dec02e)(this, {
            callback: (focused)=>{
                var _this__base;
                if (!this.disabledInteractive && !focused && !this.grouped) (_this__base = this._base) === null || _this__base === void 0 ? void 0 : _this__base.style.removeProperty("--_button-shape");
            }
        });
        new (0, $2795e4e0258f7c7d$export$1351ab2eef382c23)(this, {
            isPressedKey: (key)=>key === " ",
            minPressedDuration: 225,
            callback: (pressed)=>{
                if (!this.disabled && !this.disabledInteractive) {
                    if (pressed) {
                        (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $d2bb940843202fcb$var$_M3eButtonElement_instances, "m", $d2bb940843202fcb$var$_M3eButtonElement_updateButtonShape).call(this);
                        (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $d2bb940843202fcb$var$_M3eButtonElement_instances, "m", $d2bb940843202fcb$var$_M3eButtonElement_handlePressedChange).call(this, true);
                    } else (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $d2bb940843202fcb$var$_M3eButtonElement_instances, "m", $d2bb940843202fcb$var$_M3eButtonElement_handlePressedChange).call(this, false);
                }
            }
        });
    }
};
$d2bb940843202fcb$var$_M3eButtonElement_clickHandler = new WeakMap();
$d2bb940843202fcb$var$_M3eButtonElement_instances = new WeakSet();
$d2bb940843202fcb$var$_M3eButtonElement_applyVariant = function _M3eButtonElement_applyVariant() {
    if (!$d2bb940843202fcb$export$75bf653326ddf5a4(this.variant)) this.variant = "text";
    (0, $2795e4e0258f7c7d$export$14685f959036e909)(this, this.variant, "elevated", "filled", "outlined", "text", "tonal");
};
$d2bb940843202fcb$var$_M3eButtonElement_applyShape = function _M3eButtonElement_applyShape() {
    if (!$d2bb940843202fcb$export$7e58ccbe306fbc6f(this.shape)) this.shape = "rounded";
    (0, $2795e4e0258f7c7d$export$14685f959036e909)(this, this.shape, "rounded", "square");
};
$d2bb940843202fcb$var$_M3eButtonElement_applySize = function _M3eButtonElement_applySize() {
    if (!$d2bb940843202fcb$export$d117a176c0cc6cb4(this.size)) this.size = "small";
    (0, $2795e4e0258f7c7d$export$14685f959036e909)(this, this.size, "extra-large", "extra-small", "large", "medium", "small");
};
$d2bb940843202fcb$var$_M3eButtonElement_handleClick = function _M3eButtonElement_handleClick(e) {
    if (this.disabled || this.disabledInteractive) {
        e.preventDefault();
        e.stopImmediatePropagation();
    }
    if (this.toggle && !e.defaultPrevented) {
        if (this.dispatchEvent(new Event("beforeinput", {
            bubbles: true,
            cancelable: true
        }))) {
            this.selected = !this.selected;
            this.dispatchEvent(new Event("input", {
                bubbles: true
            }));
            this.dispatchEvent(new Event("change", {
                bubbles: true
            }));
        }
    }
};
$d2bb940843202fcb$var$_M3eButtonElement_handleSelectedIconSlotChange = function _M3eButtonElement_handleSelectedIconSlotChange(e) {
    var _this__base;
    (_this__base = this._base) === null || _this__base === void 0 ? void 0 : _this__base.classList.toggle("with-selected-icon", (0, $2795e4e0258f7c7d$export$e0478d61fdced58c)(e.target));
};
$d2bb940843202fcb$var$_M3eButtonElement_updateButtonShape = function _M3eButtonElement_updateButtonShape(force = false) {
    if (!this._base) return;
    const shape = parseFloat(getComputedStyle(this._base).borderRadius);
    if (!isNaN(shape) || force) {
        var _this__base;
        const adjustedShape = this.clientHeight / 2;
        if (adjustedShape < shape || force) (_this__base = this._base) === null || _this__base === void 0 ? void 0 : _this__base.style.setProperty("--_button-shape", `${adjustedShape}px`);
    }
};
$d2bb940843202fcb$var$_M3eButtonElement_handlePressedChange = function _M3eButtonElement_handlePressedChange(pressed) {
    const clientWidth = this.getBoundingClientRect().width;
    const group = this.closest("m3e-button-group");
    if (group && group.variant === "standard") {
        const buttons = [
            ...group.querySelectorAll("m3e-button,m3e-icon-button")
        ];
        for (const button of buttons){
            clearTimeout(button._adjacentPressedTimeout);
            button._adjacentPressedTimeout = -1;
        }
        const index = buttons.indexOf(this);
        if (pressed) {
            const multiplier = parseFloat(getComputedStyle(this).getPropertyValue("--m3e-standard-button-group-width-multiplier") || "0.15");
            let adjacentShrink = clientWidth * multiplier;
            if (index > 0 && index < buttons.length - 1) adjacentShrink /= 2;
            for(let i = 0; i < buttons.length; i++){
                if (i == index - 1 || i == index + 1) {
                    (0, $2795e4e0258f7c7d$export$ddd0a0ac12dd84d8)(buttons[i], "--no-resize");
                    buttons[i].style.setProperty("--_adjacent-shrink", `${adjacentShrink}px`);
                    (0, $2795e4e0258f7c7d$export$ddd0a0ac12dd84d8)(buttons[i], "--adjacent-pressed");
                } else if (i == index) {
                    (0, $2795e4e0258f7c7d$export$ddd0a0ac12dd84d8)(buttons[i], "--no-resize");
                    buttons[i].style.removeProperty("--_adjacent-shrink");
                    (0, $2795e4e0258f7c7d$export$eda34dc61103d62e)(buttons[i], "--adjacent-pressed");
                } else {
                    (0, $2795e4e0258f7c7d$export$eda34dc61103d62e)(buttons[i], "--no-resize");
                    buttons[i].style.removeProperty("--_adjacent-shrink");
                    (0, $2795e4e0258f7c7d$export$eda34dc61103d62e)(buttons[i], "--adjacent-pressed");
                }
            }
        } else {
            for(let i = 0; i < buttons.length; i++)if (i == index - 1 || i == index + 1) buttons[i].style.setProperty("--_adjacent-shrink", "0px");
            if (!(0, $2795e4e0258f7c7d$export$ff7706047246b98b)()) this.addEventListener("transitionend", (e)=>{
                if (e.propertyName === "width") this._adjacentPressedTimeout = setTimeout(()=>{
                    // Pressed timeout is tested to ensure this runs only when the button
                    // is no longer pressed. This handles changes to pressed state in
                    // quick succession.
                    if (this._adjacentPressedTimeout > -1) (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $d2bb940843202fcb$var$_M3eButtonElement_instances, "m", $d2bb940843202fcb$var$_M3eButtonElement_cleanupAdjacentPressed).call(this, buttons);
                }, 600);
            }, {
                once: true
            });
            else (0, $ee430606400354b3$export$d5dcaf168c640c35)(this, $d2bb940843202fcb$var$_M3eButtonElement_instances, "m", $d2bb940843202fcb$var$_M3eButtonElement_cleanupAdjacentPressed).call(this, buttons);
        }
    }
    (0, $2795e4e0258f7c7d$export$a6b7fbc1acf03e5b)(this, "--pressed", pressed);
    (0, $2795e4e0258f7c7d$export$a6b7fbc1acf03e5b)(this, "--resting", !pressed);
};
$d2bb940843202fcb$var$_M3eButtonElement_cleanupAdjacentPressed = function _M3eButtonElement_cleanupAdjacentPressed(buttons) {
    for (const button of buttons){
        (0, $2795e4e0258f7c7d$export$eda34dc61103d62e)(button, "--adjacent-pressed");
        (0, $2795e4e0258f7c7d$export$eda34dc61103d62e)(button, "--no-resize");
        button.style.removeProperty("--_adjacent-shrink");
    }
};
/** The styles of the element. */ $d2bb940843202fcb$export$df1260532f1fcc98.styles = [
    $d2bb940843202fcb$var$ButtonSizeStyle,
    $d2bb940843202fcb$var$ButtonVariantStyle,
    $d2bb940843202fcb$var$ButtonStyle
];
(0, $ee430606400354b3$export$29e00dfd3077644b)([
    (0, $f34c39adfc319163$export$2fa187e846a241c4)(".base")
], $d2bb940843202fcb$export$df1260532f1fcc98.prototype, "_base", void 0);
(0, $ee430606400354b3$export$29e00dfd3077644b)([
    (0, $f34c39adfc319163$export$2fa187e846a241c4)(".elevation")
], $d2bb940843202fcb$export$df1260532f1fcc98.prototype, "_elevation", void 0);
(0, $ee430606400354b3$export$29e00dfd3077644b)([
    (0, $f34c39adfc319163$export$2fa187e846a241c4)(".focus-ring")
], $d2bb940843202fcb$export$df1260532f1fcc98.prototype, "_focusRing", void 0);
(0, $ee430606400354b3$export$29e00dfd3077644b)([
    (0, $f34c39adfc319163$export$2fa187e846a241c4)(".state-layer")
], $d2bb940843202fcb$export$df1260532f1fcc98.prototype, "_stateLayer", void 0);
(0, $ee430606400354b3$export$29e00dfd3077644b)([
    (0, $f34c39adfc319163$export$2fa187e846a241c4)(".ripple")
], $d2bb940843202fcb$export$df1260532f1fcc98.prototype, "_ripple", void 0);
(0, $ee430606400354b3$export$29e00dfd3077644b)([
    (0, $e48c8bdf0d6f523c$export$d541bacb2bda4494)({
        reflect: true,
        useDefault: true
    })
], $d2bb940843202fcb$export$df1260532f1fcc98.prototype, "variant", void 0);
(0, $ee430606400354b3$export$29e00dfd3077644b)([
    (0, $e48c8bdf0d6f523c$export$d541bacb2bda4494)({
        reflect: true,
        useDefault: true
    })
], $d2bb940843202fcb$export$df1260532f1fcc98.prototype, "shape", void 0);
(0, $ee430606400354b3$export$29e00dfd3077644b)([
    (0, $e48c8bdf0d6f523c$export$d541bacb2bda4494)({
        reflect: true,
        useDefault: true
    })
], $d2bb940843202fcb$export$df1260532f1fcc98.prototype, "size", void 0);
(0, $ee430606400354b3$export$29e00dfd3077644b)([
    (0, $e48c8bdf0d6f523c$export$d541bacb2bda4494)({
        type: Boolean,
        reflect: true
    })
], $d2bb940843202fcb$export$df1260532f1fcc98.prototype, "toggle", void 0);
(0, $ee430606400354b3$export$29e00dfd3077644b)([
    (0, $e48c8bdf0d6f523c$export$d541bacb2bda4494)({
        type: Boolean,
        reflect: true
    })
], $d2bb940843202fcb$export$df1260532f1fcc98.prototype, "selected", void 0);
(0, $ee430606400354b3$export$29e00dfd3077644b)([
    (0, $2795e4e0258f7c7d$export$61fc7d43ac8f84b0)(40)
], $d2bb940843202fcb$export$df1260532f1fcc98.prototype, "_handleResize", null);
$d2bb940843202fcb$export$df1260532f1fcc98 = (0, $ee430606400354b3$export$29e00dfd3077644b)([
    (0, $2795e4e0258f7c7d$export$da64fc29f17f9d0e)("m3e-button")
], $d2bb940843202fcb$export$df1260532f1fcc98);


let $7515c80633f2d174$var$_ = (t)=>t, $7515c80633f2d174$var$t, $7515c80633f2d174$var$t1, $7515c80633f2d174$var$t2, $7515c80633f2d174$var$t3, $7515c80633f2d174$var$t4;
const $7515c80633f2d174$var$BREAKPOINTS_URL = "https://static.app.ge.ch/scripts/breakpoints.js";
// Alignés sur les breakpoints `sm` / `md` de breakpoints.js — utilisés en
// repli si le chargement du script CDN échoue (CSP, hors-ligne, etc.).
const $7515c80633f2d174$var$MOBILE_MEDIA_QUERY = "(max-width: 768px)";
const $7515c80633f2d174$var$DESKTOP_MEDIA_QUERY = "(min-width: 1024px)";
const $7515c80633f2d174$var$POPUP_WIDTH = 1000;
const $7515c80633f2d174$var$POPUP_HEIGHT = 788;
const $7515c80633f2d174$var$POPUP_MARGIN = 16;
class $7515c80633f2d174$export$cff1808d08d476ff extends (0, $08f2bff00ea64ee4$export$3f2f9f5909897157) {
    connectedCallback() {
        super.connectedCallback();
        this._messageHandler = (e)=>this._onMessage(e);
        window.addEventListener("message", this._messageHandler);
        // Préchargement : le handler de clic doit rester synchrone pour que
        // `window.open` ne soit pas bloqué par le navigateur. Repli sur
        // `matchMedia` si le CDN est indisponible (CSP, offline, etc.).
        if (!this._breakpoints) import(/* @vite-ignore */ $7515c80633f2d174$var$BREAKPOINTS_URL).then((mod)=>{
            this._breakpoints = mod;
        }).catch(()=>{});
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        if (this._messageHandler) {
            window.removeEventListener("message", this._messageHandler);
            this._messageHandler = null;
        }
        this._spaWindow = null;
        this._callbackId = null;
    }
    _isMobile() {
        if (this._breakpoints) return this._breakpoints.isMobile().matches;
        return window.matchMedia($7515c80633f2d174$var$MOBILE_MEDIA_QUERY).matches;
    }
    _isDesktop() {
        if (this._breakpoints) return this._breakpoints.isDesktop().matches;
        return window.matchMedia($7515c80633f2d174$var$DESKTOP_MEDIA_QUERY).matches;
    }
    // Le handler de clic DOIT ouvrir le popup de façon synchrone (geste
    // utilisateur) sinon le navigateur le bloque. On l'ouvre donc vide, PUIS on
    // crée la session — c'est le webcomponent, sur la page hôte, qui appelle
    // POST /sessions : le navigateur estampille l'Origin RÉEL du formulaire,
    // infalsifiable côté usager, et c'est lui qui gouverne le profil de taille
    // côté serveur. On redirige enfin le popup vers la SPA avec le token reçu.
    _openSpa() {
        if (!this.spaUrl) {
            console.error("<ge-televerse> spa-url attribute is required");
            return;
        }
        this._startSession(false);
    }
    // Reprise après un 409 (autre session active sur ce poste) : c'est un
    // nouveau geste utilisateur, on peut donc rouvrir un popup synchrone puis
    // créer en force (la session bloquante est purgée côté serveur).
    _forceNew() {
        this._startSession(true);
    }
    _retry() {
        this._startSession(false);
    }
    _startSession(force) {
        this._errorMessage = "";
        this._callbackId = crypto.randomUUID();
        this._spaWindow = this._openBlankPopup();
        if (!this._spaWindow) {
            this._status = "blocked";
            return;
        }
        this._status = "creating";
        this._createAndNavigate(force);
    }
    _openBlankPopup() {
        // Mobile : un popup chromeless est ignoré (les navigateurs ouvrent un
        // onglet plein écran de toute façon) — on reste explicite.
        if (this._isMobile()) return window.open("about:blank", "_blank");
        // Desktop : popup centré sur l'écran du parent (multi-moniteurs OK grâce
        // à screenX/screenY). La barre d'URL reste visible — imposé par les
        // navigateurs depuis ~2018 (anti-phishing). Sur tablette (entre `sm` et
        // `md`), on rétrécit pour rester dans la viewport.
        const isDesktop = this._isDesktop();
        const width = isDesktop ? $7515c80633f2d174$var$POPUP_WIDTH : Math.min($7515c80633f2d174$var$POPUP_WIDTH, window.innerWidth - $7515c80633f2d174$var$POPUP_MARGIN);
        const height = isDesktop ? $7515c80633f2d174$var$POPUP_HEIGHT : Math.min($7515c80633f2d174$var$POPUP_HEIGHT, window.innerHeight - $7515c80633f2d174$var$POPUP_MARGIN);
        const left = Math.round(window.screenX + Math.max(0, (window.outerWidth - width) / 2));
        const top = Math.round(window.screenY + Math.max(0, (window.outerHeight - height) / 2));
        const features = [
            "popup=yes",
            `width=${width}`,
            `height=${height}`,
            `left=${left}`,
            `top=${top}`,
            "resizable=yes",
            "scrollbars=yes"
        ].join(",");
        return window.open("about:blank", `ge-televerse-${this._callbackId}`, features);
    }
    _apiBase() {
        // api-url explicite, sinon `/api` sur l'origine de la SPA (même hôte en
        // prod). On retire d'éventuels slashs finaux pour concaténer proprement.
        const base = this.apiUrl || new URL("/api", this.spaUrl).href;
        return base.replace(/\/+$/, "");
    }
    async _createAndNavigate(force) {
        try {
            const url = new URL(`${this._apiBase()}/sessions`);
            if (force) url.searchParams.set("force", "true");
            // Pas de corps : le profil de taille est dérivé de l'Origin côté
            // serveur. Requête « simple » (aucun header custom) → pas de
            // préflight CORS superflu.
            const res = await fetch(url.toString(), {
                method: "POST"
            });
            if (res.status === 409) {
                // ORIGINATOR_HAS_ACTIVE_SESSION : une session est déjà active sur
                // ce poste. On ferme le popup vide et on propose d'en démarrer
                // une nouvelle (force) au prochain clic.
                this._closeSpaWindow();
                this._status = "busy";
                return;
            }
            if (!res.ok) {
                this._closeSpaWindow();
                this._status = "error";
                this._errorMessage = "Impossible de cr\xe9er la session. Veuillez r\xe9essayer.";
                return;
            }
            const data = await res.json().catch(()=>null);
            if (!data || !data.token) {
                this._closeSpaWindow();
                this._status = "error";
                this._errorMessage = "R\xe9ponse inattendue du serveur.";
                return;
            }
            // Le popup a pu être fermé par l'utilisateur pendant le POST : rien à
            // rediriger (la session expirera d'elle-même par TTL côté serveur).
            if (!this._spaWindow || this._spaWindow.closed) {
                this._status = "idle";
                return;
            }
            const spa = new URL(this.spaUrl);
            spa.searchParams.set("callbackId", this._callbackId);
            spa.searchParams.set("token", data.token);
            // Origine de la page hôte. La SPA s'en sert comme `targetOrigin`
            // stricte dès son PREMIER message (`televerse-ready`) : sans elle,
            // elle devrait diffuser en `'*'` et livrer le callbackId à n'importe
            // quel document occupant l'onglet ouvreur. La valeur n'a pas à être
            // « de confiance » : le navigateur impose la cible, une valeur
            // falsifiée empêche la livraison au lieu de la détourner.
            spa.searchParams.set("origin", window.location.origin);
            // Propage la langue de la page hôte (<html lang>) à la SPA, qui la
            // lit dans le query param `lang` (repli français si absent).
            const lang = document.documentElement.lang;
            if (lang) spa.searchParams.set("lang", lang);
            // Transmission du flag d'onboarding
            if (this.showOnboarding) spa.searchParams.set("showOnboarding", "true");
            this._spaWindow.location.href = spa.toString();
            this._status = "idle";
        } catch (e) {
            this._closeSpaWindow();
            this._status = "error";
            this._errorMessage = "Le service est momentan\xe9ment indisponible.";
        }
    }
    _closeSpaWindow() {
        if (this._spaWindow && !this._spaWindow.closed) this._spaWindow.close();
        this._spaWindow = null;
    }
    /** @param {MessageEvent} e */ _onMessage(e) {
        if (!this.spaUrl) return;
        // Restreint aux messages venant de la fenêtre que NOUS avons ouverte :
        // la validation d'origine seule autoriserait n'importe quel autre onglet
        // servi par `spaUrl` à déclencher `televerse-complete`.
        if (e.source !== this._spaWindow) return;
        const expectedOrigin = new URL(this.spaUrl).origin;
        if (e.origin !== expectedOrigin) return;
        const { type: type, callbackId: callbackId, documentId: documentId } = e.data || {};
        if (callbackId !== this._callbackId) return;
        if (type === "televerse-ready") {
            // Cible explicite plutôt que `'*'` : le popup garde sa barre d'URL,
            // il peut donc avoir navigué ailleurs entre ce `televerse-ready` et
            // notre réponse. Le navigateur abandonne alors le message au lieu
            // de livrer le callbackId au document qui a pris sa place.
            this._spaWindow.postMessage({
                type: "televerse-init",
                callbackId: this._callbackId
            }, expectedOrigin);
            return;
        }
        if (type === "televerse-complete" && documentId) {
            this._spaWindow = null;
            this._callbackId = null;
            this.dispatchEvent(new CustomEvent("televerse-complete", {
                bubbles: true,
                composed: true,
                detail: {
                    documentId: documentId
                }
            }));
        }
    }
    render() {
        if (this._status === "busy") return (0, $5e4f263f2dad39fc$export$c0bb0b647f701bb5)($7515c80633f2d174$var$t || ($7515c80633f2d174$var$t = $7515c80633f2d174$var$_`
                <div class="message">
                    <p>Une autre fenêtre de téléversement est déjà active depuis ce poste. Vous pouvez démarrer une nouvelle session — la précédente sera abandonnée.</p>
                    <m3e-button variant="filled" @click=${0}>
                        Démarrer une nouvelle session
                    </m3e-button>
                </div>
            `), this._forceNew);
        if (this._status === "blocked") return (0, $5e4f263f2dad39fc$export$c0bb0b647f701bb5)($7515c80633f2d174$var$t1 || ($7515c80633f2d174$var$t1 = $7515c80633f2d174$var$_`
                <div class="message">
                    <p>Le navigateur a bloqué la fenêtre de téléversement. Autorisez les fenêtres pop-up pour ce site, puis réessayez.</p>
                    <m3e-button variant="filled-tonal" @click=${0}>
                        Réessayer
                    </m3e-button>
                </div>
            `), this._retry);
        if (this._status === "error") return (0, $5e4f263f2dad39fc$export$c0bb0b647f701bb5)($7515c80633f2d174$var$t2 || ($7515c80633f2d174$var$t2 = $7515c80633f2d174$var$_`
                <div class="message">
                    <p>${0}</p>
                    <m3e-button variant="filled-tonal" @click=${0}>
                        Réessayer
                    </m3e-button>
                </div>
            `), this._errorMessage, this._retry);
        return (0, $5e4f263f2dad39fc$export$c0bb0b647f701bb5)($7515c80633f2d174$var$t3 || ($7515c80633f2d174$var$t3 = $7515c80633f2d174$var$_`
            <m3e-button
                variant="filled-tonal"
                @click=${0}
                ?disabled=${0}
            >${0}</m3e-button>
        `), this._openSpa, !this.spaUrl || this._status === "creating", this.label);
    }
    constructor(){
        super();
        this.spaUrl = "";
        this.apiUrl = "";
        this.label = "Ajouter un document";
        this.showOnboarding = false;
        this._status = "idle";
        this._errorMessage = "";
        /** @type {Window|null} */ this._spaWindow = null;
        /** @type {string|null} */ this._callbackId = null;
        /** @type {((e: MessageEvent) => void)|null} */ this._messageHandler = null;
        /** @type {{ isMobile: () => { matches: boolean }, isDesktop: () => { matches: boolean } }|null} */ this._breakpoints = null;
    }
}
(0, $4c7ef179a45ab871$export$71511d61b312f219)($7515c80633f2d174$export$cff1808d08d476ff, "properties", {
    /** URL de base de la SPA ge-televerse-front (requis). */ spaUrl: {
        type: String,
        attribute: "spa-url"
    },
    /**
         * URL de base de l'API ge-televerse (où POSTer /sessions). Optionnel :
         * par défaut `/api` sur l'origine de `spa-url` (même hôte en prod).
         */ apiUrl: {
        type: String,
        attribute: "api-url"
    },
    /** Libellé du bouton. */ label: {
        type: String
    },
    /** Activer l'onboarding dans la SPA de téléversement. */ showOnboarding: {
        type: Boolean,
        attribute: "show-onboarding"
    },
    /** État du flux de création : idle | creating | busy | blocked | error. */ _status: {
        state: true
    },
    _errorMessage: {
        state: true
    }
});
(0, $4c7ef179a45ab871$export$71511d61b312f219)($7515c80633f2d174$export$cff1808d08d476ff, "styles", (0, $c60305268e0a629a$export$dbf350e5966cf602)($7515c80633f2d174$var$t4 || ($7515c80633f2d174$var$t4 = $7515c80633f2d174$var$_`
        :host {
            display: inline-block;

            /* M3 strict : le rayon d'appui reste celui du repos, le bouton ne
               devient pas rectangulaire au clic (cf. theme.css). */
            --m3e-button-shape-pressed-morph: var(--md-sys-shape-corner-full, 9999px);
            --m3e-icon-button-shape-pressed-morph: var(--md-sys-shape-corner-full, 9999px);
        }
        .message {
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
            max-width: 28rem;
        }
        .message p {
            margin: 0;
        }
    `)));
$7515c80633f2d174$export$cff1808d08d476ff = (0, $ee430606400354b3$export$29e00dfd3077644b)([
    (0, $a5f8d5703ae3d732$export$da64fc29f17f9d0e)("ge-televerse")
], $7515c80633f2d174$export$cff1808d08d476ff);


export {$7515c80633f2d174$export$cff1808d08d476ff as GeTeleverse};
