(function () {
  const r = document.createElement("link").relList;
  if (r && r.supports && r.supports("modulepreload")) return;
  for (const c of document.querySelectorAll('link[rel="modulepreload"]')) o(c);
  new MutationObserver((c) => {
    for (const f of c)
      if (f.type === "childList")
        for (const d of f.addedNodes)
          d.tagName === "LINK" && d.rel === "modulepreload" && o(d);
  }).observe(document, { childList: !0, subtree: !0 });
  function u(c) {
    const f = {};
    return (
      c.integrity && (f.integrity = c.integrity),
      c.referrerPolicy && (f.referrerPolicy = c.referrerPolicy),
      c.crossOrigin === "use-credentials"
        ? (f.credentials = "include")
        : c.crossOrigin === "anonymous"
          ? (f.credentials = "omit")
          : (f.credentials = "same-origin"),
      f
    );
  }
  function o(c) {
    if (c.ep) return;
    c.ep = !0;
    const f = u(c);
    fetch(c.href, f);
  }
})();
function n1(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default")
    ? n.default
    : n;
}
var vc = { exports: {} },
  Wr = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var k0;
function r1() {
  if (k0) return Wr;
  k0 = 1;
  var n = Symbol.for("react.transitional.element"),
    r = Symbol.for("react.fragment");
  function u(o, c, f) {
    var d = null;
    if (
      (f !== void 0 && (d = "" + f),
      c.key !== void 0 && (d = "" + c.key),
      "key" in c)
    ) {
      f = {};
      for (var p in c) p !== "key" && (f[p] = c[p]);
    } else f = c;
    return (
      (c = f.ref),
      { $$typeof: n, type: o, key: d, ref: c !== void 0 ? c : null, props: f }
    );
  }
  return ((Wr.Fragment = r), (Wr.jsx = u), (Wr.jsxs = u), Wr);
}
var Y0;
function i1() {
  return (Y0 || ((Y0 = 1), (vc.exports = r1())), vc.exports);
}
var J = i1(),
  bc = { exports: {} },
  Ir = {},
  Sc = { exports: {} },
  Ec = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var G0;
function u1() {
  return (
    G0 ||
      ((G0 = 1),
      (function (n) {
        function r(O, P) {
          var G = O.length;
          O.push(P);
          e: for (; 0 < G; ) {
            var Ee = (G - 1) >>> 1,
              E = O[Ee];
            if (0 < c(E, P)) ((O[Ee] = P), (O[G] = E), (G = Ee));
            else break e;
          }
        }
        function u(O) {
          return O.length === 0 ? null : O[0];
        }
        function o(O) {
          if (O.length === 0) return null;
          var P = O[0],
            G = O.pop();
          if (G !== P) {
            O[0] = G;
            e: for (var Ee = 0, E = O.length, k = E >>> 1; Ee < k; ) {
              var I = 2 * (Ee + 1) - 1,
                K = O[I],
                ae = I + 1,
                xe = O[ae];
              if (0 > c(K, G))
                ae < E && 0 > c(xe, K)
                  ? ((O[Ee] = xe), (O[ae] = G), (Ee = ae))
                  : ((O[Ee] = K), (O[I] = G), (Ee = I));
              else if (ae < E && 0 > c(xe, G))
                ((O[Ee] = xe), (O[ae] = G), (Ee = ae));
              else break e;
            }
          }
          return P;
        }
        function c(O, P) {
          var G = O.sortIndex - P.sortIndex;
          return G !== 0 ? G : O.id - P.id;
        }
        if (
          ((n.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var f = performance;
          n.unstable_now = function () {
            return f.now();
          };
        } else {
          var d = Date,
            p = d.now();
          n.unstable_now = function () {
            return d.now() - p;
          };
        }
        var y = [],
          m = [],
          v = 1,
          b = null,
          T = 3,
          U = !1,
          w = !1,
          q = !1,
          D = !1,
          V = typeof setTimeout == "function" ? setTimeout : null,
          F = typeof clearTimeout == "function" ? clearTimeout : null,
          ee = typeof setImmediate < "u" ? setImmediate : null;
        function le(O) {
          for (var P = u(m); P !== null; ) {
            if (P.callback === null) o(m);
            else if (P.startTime <= O)
              (o(m), (P.sortIndex = P.expirationTime), r(y, P));
            else break;
            P = u(m);
          }
        }
        function $(O) {
          if (((q = !1), le(O), !w))
            if (u(y) !== null) ((w = !0), z || ((z = !0), Be()));
            else {
              var P = u(m);
              P !== null && _e($, P.startTime - O);
            }
        }
        var z = !1,
          ne = -1,
          te = 5,
          fe = -1;
        function Ue() {
          return D ? !0 : !(n.unstable_now() - fe < te);
        }
        function Xe() {
          if (((D = !1), z)) {
            var O = n.unstable_now();
            fe = O;
            var P = !0;
            try {
              e: {
                ((w = !1), q && ((q = !1), F(ne), (ne = -1)), (U = !0));
                var G = T;
                try {
                  t: {
                    for (
                      le(O), b = u(y);
                      b !== null && !(b.expirationTime > O && Ue());

                    ) {
                      var Ee = b.callback;
                      if (typeof Ee == "function") {
                        ((b.callback = null), (T = b.priorityLevel));
                        var E = Ee(b.expirationTime <= O);
                        if (((O = n.unstable_now()), typeof E == "function")) {
                          ((b.callback = E), le(O), (P = !0));
                          break t;
                        }
                        (b === u(y) && o(y), le(O));
                      } else o(y);
                      b = u(y);
                    }
                    if (b !== null) P = !0;
                    else {
                      var k = u(m);
                      (k !== null && _e($, k.startTime - O), (P = !1));
                    }
                  }
                  break e;
                } finally {
                  ((b = null), (T = G), (U = !1));
                }
                P = void 0;
              }
            } finally {
              P ? Be() : (z = !1);
            }
          }
        }
        var Be;
        if (typeof ee == "function")
          Be = function () {
            ee(Xe);
          };
        else if (typeof MessageChannel < "u") {
          var we = new MessageChannel(),
            Re = we.port2;
          ((we.port1.onmessage = Xe),
            (Be = function () {
              Re.postMessage(null);
            }));
        } else
          Be = function () {
            V(Xe, 0);
          };
        function _e(O, P) {
          ne = V(function () {
            O(n.unstable_now());
          }, P);
        }
        ((n.unstable_IdlePriority = 5),
          (n.unstable_ImmediatePriority = 1),
          (n.unstable_LowPriority = 4),
          (n.unstable_NormalPriority = 3),
          (n.unstable_Profiling = null),
          (n.unstable_UserBlockingPriority = 2),
          (n.unstable_cancelCallback = function (O) {
            O.callback = null;
          }),
          (n.unstable_forceFrameRate = function (O) {
            0 > O || 125 < O
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (te = 0 < O ? Math.floor(1e3 / O) : 5);
          }),
          (n.unstable_getCurrentPriorityLevel = function () {
            return T;
          }),
          (n.unstable_next = function (O) {
            switch (T) {
              case 1:
              case 2:
              case 3:
                var P = 3;
                break;
              default:
                P = T;
            }
            var G = T;
            T = P;
            try {
              return O();
            } finally {
              T = G;
            }
          }),
          (n.unstable_requestPaint = function () {
            D = !0;
          }),
          (n.unstable_runWithPriority = function (O, P) {
            switch (O) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                O = 3;
            }
            var G = T;
            T = O;
            try {
              return P();
            } finally {
              T = G;
            }
          }),
          (n.unstable_scheduleCallback = function (O, P, G) {
            var Ee = n.unstable_now();
            switch (
              (typeof G == "object" && G !== null
                ? ((G = G.delay),
                  (G = typeof G == "number" && 0 < G ? Ee + G : Ee))
                : (G = Ee),
              O)
            ) {
              case 1:
                var E = -1;
                break;
              case 2:
                E = 250;
                break;
              case 5:
                E = 1073741823;
                break;
              case 4:
                E = 1e4;
                break;
              default:
                E = 5e3;
            }
            return (
              (E = G + E),
              (O = {
                id: v++,
                callback: P,
                priorityLevel: O,
                startTime: G,
                expirationTime: E,
                sortIndex: -1,
              }),
              G > Ee
                ? ((O.sortIndex = G),
                  r(m, O),
                  u(y) === null &&
                    O === u(m) &&
                    (q ? (F(ne), (ne = -1)) : (q = !0), _e($, G - Ee)))
                : ((O.sortIndex = E),
                  r(y, O),
                  w || U || ((w = !0), z || ((z = !0), Be()))),
              O
            );
          }),
          (n.unstable_shouldYield = Ue),
          (n.unstable_wrapCallback = function (O) {
            var P = T;
            return function () {
              var G = T;
              T = P;
              try {
                return O.apply(this, arguments);
              } finally {
                T = G;
              }
            };
          }));
      })(Ec)),
    Ec
  );
}
var V0;
function o1() {
  return (V0 || ((V0 = 1), (Sc.exports = u1())), Sc.exports);
}
var xc = { exports: {} },
  Ce = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var X0;
function s1() {
  if (X0) return Ce;
  X0 = 1;
  var n = Symbol.for("react.transitional.element"),
    r = Symbol.for("react.portal"),
    u = Symbol.for("react.fragment"),
    o = Symbol.for("react.strict_mode"),
    c = Symbol.for("react.profiler"),
    f = Symbol.for("react.consumer"),
    d = Symbol.for("react.context"),
    p = Symbol.for("react.forward_ref"),
    y = Symbol.for("react.suspense"),
    m = Symbol.for("react.memo"),
    v = Symbol.for("react.lazy"),
    b = Symbol.iterator;
  function T(E) {
    return E === null || typeof E != "object"
      ? null
      : ((E = (b && E[b]) || E["@@iterator"]),
        typeof E == "function" ? E : null);
  }
  var U = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    w = Object.assign,
    q = {};
  function D(E, k, I) {
    ((this.props = E),
      (this.context = k),
      (this.refs = q),
      (this.updater = I || U));
  }
  ((D.prototype.isReactComponent = {}),
    (D.prototype.setState = function (E, k) {
      if (typeof E != "object" && typeof E != "function" && E != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, E, k, "setState");
    }),
    (D.prototype.forceUpdate = function (E) {
      this.updater.enqueueForceUpdate(this, E, "forceUpdate");
    }));
  function V() {}
  V.prototype = D.prototype;
  function F(E, k, I) {
    ((this.props = E),
      (this.context = k),
      (this.refs = q),
      (this.updater = I || U));
  }
  var ee = (F.prototype = new V());
  ((ee.constructor = F), w(ee, D.prototype), (ee.isPureReactComponent = !0));
  var le = Array.isArray,
    $ = { H: null, A: null, T: null, S: null, V: null },
    z = Object.prototype.hasOwnProperty;
  function ne(E, k, I, K, ae, xe) {
    return (
      (I = xe.ref),
      { $$typeof: n, type: E, key: k, ref: I !== void 0 ? I : null, props: xe }
    );
  }
  function te(E, k) {
    return ne(E.type, k, void 0, void 0, void 0, E.props);
  }
  function fe(E) {
    return typeof E == "object" && E !== null && E.$$typeof === n;
  }
  function Ue(E) {
    var k = { "=": "=0", ":": "=2" };
    return (
      "$" +
      E.replace(/[=:]/g, function (I) {
        return k[I];
      })
    );
  }
  var Xe = /\/+/g;
  function Be(E, k) {
    return typeof E == "object" && E !== null && E.key != null
      ? Ue("" + E.key)
      : k.toString(36);
  }
  function we() {}
  function Re(E) {
    switch (E.status) {
      case "fulfilled":
        return E.value;
      case "rejected":
        throw E.reason;
      default:
        switch (
          (typeof E.status == "string"
            ? E.then(we, we)
            : ((E.status = "pending"),
              E.then(
                function (k) {
                  E.status === "pending" &&
                    ((E.status = "fulfilled"), (E.value = k));
                },
                function (k) {
                  E.status === "pending" &&
                    ((E.status = "rejected"), (E.reason = k));
                },
              )),
          E.status)
        ) {
          case "fulfilled":
            return E.value;
          case "rejected":
            throw E.reason;
        }
    }
    throw E;
  }
  function _e(E, k, I, K, ae) {
    var xe = typeof E;
    (xe === "undefined" || xe === "boolean") && (E = null);
    var ye = !1;
    if (E === null) ye = !0;
    else
      switch (xe) {
        case "bigint":
        case "string":
        case "number":
          ye = !0;
          break;
        case "object":
          switch (E.$$typeof) {
            case n:
            case r:
              ye = !0;
              break;
            case v:
              return ((ye = E._init), _e(ye(E._payload), k, I, K, ae));
          }
      }
    if (ye)
      return (
        (ae = ae(E)),
        (ye = K === "" ? "." + Be(E, 0) : K),
        le(ae)
          ? ((I = ""),
            ye != null && (I = ye.replace(Xe, "$&/") + "/"),
            _e(ae, k, I, "", function (Mt) {
              return Mt;
            }))
          : ae != null &&
            (fe(ae) &&
              (ae = te(
                ae,
                I +
                  (ae.key == null || (E && E.key === ae.key)
                    ? ""
                    : ("" + ae.key).replace(Xe, "$&/") + "/") +
                  ye,
              )),
            k.push(ae)),
        1
      );
    ye = 0;
    var qe = K === "" ? "." : K + ":";
    if (le(E))
      for (var Qe = 0; Qe < E.length; Qe++)
        ((K = E[Qe]), (xe = qe + Be(K, Qe)), (ye += _e(K, k, I, xe, ae)));
    else if (((Qe = T(E)), typeof Qe == "function"))
      for (E = Qe.call(E), Qe = 0; !(K = E.next()).done; )
        ((K = K.value), (xe = qe + Be(K, Qe++)), (ye += _e(K, k, I, xe, ae)));
    else if (xe === "object") {
      if (typeof E.then == "function") return _e(Re(E), k, I, K, ae);
      throw (
        (k = String(E)),
        Error(
          "Objects are not valid as a React child (found: " +
            (k === "[object Object]"
              ? "object with keys {" + Object.keys(E).join(", ") + "}"
              : k) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    }
    return ye;
  }
  function O(E, k, I) {
    if (E == null) return E;
    var K = [],
      ae = 0;
    return (
      _e(E, K, "", "", function (xe) {
        return k.call(I, xe, ae++);
      }),
      K
    );
  }
  function P(E) {
    if (E._status === -1) {
      var k = E._result;
      ((k = k()),
        k.then(
          function (I) {
            (E._status === 0 || E._status === -1) &&
              ((E._status = 1), (E._result = I));
          },
          function (I) {
            (E._status === 0 || E._status === -1) &&
              ((E._status = 2), (E._result = I));
          },
        ),
        E._status === -1 && ((E._status = 0), (E._result = k)));
    }
    if (E._status === 1) return E._result.default;
    throw E._result;
  }
  var G =
    typeof reportError == "function"
      ? reportError
      : function (E) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var k = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof E == "object" &&
                E !== null &&
                typeof E.message == "string"
                  ? String(E.message)
                  : String(E),
              error: E,
            });
            if (!window.dispatchEvent(k)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", E);
            return;
          }
          console.error(E);
        };
  function Ee() {}
  return (
    (Ce.Children = {
      map: O,
      forEach: function (E, k, I) {
        O(
          E,
          function () {
            k.apply(this, arguments);
          },
          I,
        );
      },
      count: function (E) {
        var k = 0;
        return (
          O(E, function () {
            k++;
          }),
          k
        );
      },
      toArray: function (E) {
        return (
          O(E, function (k) {
            return k;
          }) || []
        );
      },
      only: function (E) {
        if (!fe(E))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return E;
      },
    }),
    (Ce.Component = D),
    (Ce.Fragment = u),
    (Ce.Profiler = c),
    (Ce.PureComponent = F),
    (Ce.StrictMode = o),
    (Ce.Suspense = y),
    (Ce.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = $),
    (Ce.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (E) {
        return $.H.useMemoCache(E);
      },
    }),
    (Ce.cache = function (E) {
      return function () {
        return E.apply(null, arguments);
      };
    }),
    (Ce.cloneElement = function (E, k, I) {
      if (E == null)
        throw Error(
          "The argument must be a React element, but you passed " + E + ".",
        );
      var K = w({}, E.props),
        ae = E.key,
        xe = void 0;
      if (k != null)
        for (ye in (k.ref !== void 0 && (xe = void 0),
        k.key !== void 0 && (ae = "" + k.key),
        k))
          !z.call(k, ye) ||
            ye === "key" ||
            ye === "__self" ||
            ye === "__source" ||
            (ye === "ref" && k.ref === void 0) ||
            (K[ye] = k[ye]);
      var ye = arguments.length - 2;
      if (ye === 1) K.children = I;
      else if (1 < ye) {
        for (var qe = Array(ye), Qe = 0; Qe < ye; Qe++)
          qe[Qe] = arguments[Qe + 2];
        K.children = qe;
      }
      return ne(E.type, ae, void 0, void 0, xe, K);
    }),
    (Ce.createContext = function (E) {
      return (
        (E = {
          $$typeof: d,
          _currentValue: E,
          _currentValue2: E,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (E.Provider = E),
        (E.Consumer = { $$typeof: f, _context: E }),
        E
      );
    }),
    (Ce.createElement = function (E, k, I) {
      var K,
        ae = {},
        xe = null;
      if (k != null)
        for (K in (k.key !== void 0 && (xe = "" + k.key), k))
          z.call(k, K) &&
            K !== "key" &&
            K !== "__self" &&
            K !== "__source" &&
            (ae[K] = k[K]);
      var ye = arguments.length - 2;
      if (ye === 1) ae.children = I;
      else if (1 < ye) {
        for (var qe = Array(ye), Qe = 0; Qe < ye; Qe++)
          qe[Qe] = arguments[Qe + 2];
        ae.children = qe;
      }
      if (E && E.defaultProps)
        for (K in ((ye = E.defaultProps), ye))
          ae[K] === void 0 && (ae[K] = ye[K]);
      return ne(E, xe, void 0, void 0, null, ae);
    }),
    (Ce.createRef = function () {
      return { current: null };
    }),
    (Ce.forwardRef = function (E) {
      return { $$typeof: p, render: E };
    }),
    (Ce.isValidElement = fe),
    (Ce.lazy = function (E) {
      return { $$typeof: v, _payload: { _status: -1, _result: E }, _init: P };
    }),
    (Ce.memo = function (E, k) {
      return { $$typeof: m, type: E, compare: k === void 0 ? null : k };
    }),
    (Ce.startTransition = function (E) {
      var k = $.T,
        I = {};
      $.T = I;
      try {
        var K = E(),
          ae = $.S;
        (ae !== null && ae(I, K),
          typeof K == "object" &&
            K !== null &&
            typeof K.then == "function" &&
            K.then(Ee, G));
      } catch (xe) {
        G(xe);
      } finally {
        $.T = k;
      }
    }),
    (Ce.unstable_useCacheRefresh = function () {
      return $.H.useCacheRefresh();
    }),
    (Ce.use = function (E) {
      return $.H.use(E);
    }),
    (Ce.useActionState = function (E, k, I) {
      return $.H.useActionState(E, k, I);
    }),
    (Ce.useCallback = function (E, k) {
      return $.H.useCallback(E, k);
    }),
    (Ce.useContext = function (E) {
      return $.H.useContext(E);
    }),
    (Ce.useDebugValue = function () {}),
    (Ce.useDeferredValue = function (E, k) {
      return $.H.useDeferredValue(E, k);
    }),
    (Ce.useEffect = function (E, k, I) {
      var K = $.H;
      if (typeof I == "function")
        throw Error(
          "useEffect CRUD overload is not enabled in this build of React.",
        );
      return K.useEffect(E, k);
    }),
    (Ce.useId = function () {
      return $.H.useId();
    }),
    (Ce.useImperativeHandle = function (E, k, I) {
      return $.H.useImperativeHandle(E, k, I);
    }),
    (Ce.useInsertionEffect = function (E, k) {
      return $.H.useInsertionEffect(E, k);
    }),
    (Ce.useLayoutEffect = function (E, k) {
      return $.H.useLayoutEffect(E, k);
    }),
    (Ce.useMemo = function (E, k) {
      return $.H.useMemo(E, k);
    }),
    (Ce.useOptimistic = function (E, k) {
      return $.H.useOptimistic(E, k);
    }),
    (Ce.useReducer = function (E, k, I) {
      return $.H.useReducer(E, k, I);
    }),
    (Ce.useRef = function (E) {
      return $.H.useRef(E);
    }),
    (Ce.useState = function (E) {
      return $.H.useState(E);
    }),
    (Ce.useSyncExternalStore = function (E, k, I) {
      return $.H.useSyncExternalStore(E, k, I);
    }),
    (Ce.useTransition = function () {
      return $.H.useTransition();
    }),
    (Ce.version = "19.1.1"),
    Ce
  );
}
var Q0;
function Kc() {
  return (Q0 || ((Q0 = 1), (xc.exports = s1())), xc.exports);
}
var Rc = { exports: {} },
  Ot = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Z0;
function c1() {
  if (Z0) return Ot;
  Z0 = 1;
  var n = Kc();
  function r(y) {
    var m = "https://react.dev/errors/" + y;
    if (1 < arguments.length) {
      m += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var v = 2; v < arguments.length; v++)
        m += "&args[]=" + encodeURIComponent(arguments[v]);
    }
    return (
      "Minified React error #" +
      y +
      "; visit " +
      m +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function u() {}
  var o = {
      d: {
        f: u,
        r: function () {
          throw Error(r(522));
        },
        D: u,
        C: u,
        L: u,
        m: u,
        X: u,
        S: u,
        M: u,
      },
      p: 0,
      findDOMNode: null,
    },
    c = Symbol.for("react.portal");
  function f(y, m, v) {
    var b =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: c,
      key: b == null ? null : "" + b,
      children: y,
      containerInfo: m,
      implementation: v,
    };
  }
  var d = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function p(y, m) {
    if (y === "font") return "";
    if (typeof m == "string") return m === "use-credentials" ? m : "";
  }
  return (
    (Ot.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o),
    (Ot.createPortal = function (y, m) {
      var v =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!m || (m.nodeType !== 1 && m.nodeType !== 9 && m.nodeType !== 11))
        throw Error(r(299));
      return f(y, m, null, v);
    }),
    (Ot.flushSync = function (y) {
      var m = d.T,
        v = o.p;
      try {
        if (((d.T = null), (o.p = 2), y)) return y();
      } finally {
        ((d.T = m), (o.p = v), o.d.f());
      }
    }),
    (Ot.preconnect = function (y, m) {
      typeof y == "string" &&
        (m
          ? ((m = m.crossOrigin),
            (m =
              typeof m == "string"
                ? m === "use-credentials"
                  ? m
                  : ""
                : void 0))
          : (m = null),
        o.d.C(y, m));
    }),
    (Ot.prefetchDNS = function (y) {
      typeof y == "string" && o.d.D(y);
    }),
    (Ot.preinit = function (y, m) {
      if (typeof y == "string" && m && typeof m.as == "string") {
        var v = m.as,
          b = p(v, m.crossOrigin),
          T = typeof m.integrity == "string" ? m.integrity : void 0,
          U = typeof m.fetchPriority == "string" ? m.fetchPriority : void 0;
        v === "style"
          ? o.d.S(y, typeof m.precedence == "string" ? m.precedence : void 0, {
              crossOrigin: b,
              integrity: T,
              fetchPriority: U,
            })
          : v === "script" &&
            o.d.X(y, {
              crossOrigin: b,
              integrity: T,
              fetchPriority: U,
              nonce: typeof m.nonce == "string" ? m.nonce : void 0,
            });
      }
    }),
    (Ot.preinitModule = function (y, m) {
      if (typeof y == "string")
        if (typeof m == "object" && m !== null) {
          if (m.as == null || m.as === "script") {
            var v = p(m.as, m.crossOrigin);
            o.d.M(y, {
              crossOrigin: v,
              integrity: typeof m.integrity == "string" ? m.integrity : void 0,
              nonce: typeof m.nonce == "string" ? m.nonce : void 0,
            });
          }
        } else m == null && o.d.M(y);
    }),
    (Ot.preload = function (y, m) {
      if (
        typeof y == "string" &&
        typeof m == "object" &&
        m !== null &&
        typeof m.as == "string"
      ) {
        var v = m.as,
          b = p(v, m.crossOrigin);
        o.d.L(y, v, {
          crossOrigin: b,
          integrity: typeof m.integrity == "string" ? m.integrity : void 0,
          nonce: typeof m.nonce == "string" ? m.nonce : void 0,
          type: typeof m.type == "string" ? m.type : void 0,
          fetchPriority:
            typeof m.fetchPriority == "string" ? m.fetchPriority : void 0,
          referrerPolicy:
            typeof m.referrerPolicy == "string" ? m.referrerPolicy : void 0,
          imageSrcSet:
            typeof m.imageSrcSet == "string" ? m.imageSrcSet : void 0,
          imageSizes: typeof m.imageSizes == "string" ? m.imageSizes : void 0,
          media: typeof m.media == "string" ? m.media : void 0,
        });
      }
    }),
    (Ot.preloadModule = function (y, m) {
      if (typeof y == "string")
        if (m) {
          var v = p(m.as, m.crossOrigin);
          o.d.m(y, {
            as: typeof m.as == "string" && m.as !== "script" ? m.as : void 0,
            crossOrigin: v,
            integrity: typeof m.integrity == "string" ? m.integrity : void 0,
          });
        } else o.d.m(y);
    }),
    (Ot.requestFormReset = function (y) {
      o.d.r(y);
    }),
    (Ot.unstable_batchedUpdates = function (y, m) {
      return y(m);
    }),
    (Ot.useFormState = function (y, m, v) {
      return d.H.useFormState(y, m, v);
    }),
    (Ot.useFormStatus = function () {
      return d.H.useHostTransitionStatus();
    }),
    (Ot.version = "19.1.1"),
    Ot
  );
}
var K0;
function Ym() {
  if (K0) return Rc.exports;
  K0 = 1;
  function n() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (r) {
        console.error(r);
      }
  }
  return (n(), (Rc.exports = c1()), Rc.exports);
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var J0;
function f1() {
  if (J0) return Ir;
  J0 = 1;
  var n = o1(),
    r = Kc(),
    u = Ym();
  function o(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++)
        t += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function c(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function f(e) {
    var t = e,
      a = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do ((t = e), (t.flags & 4098) !== 0 && (a = t.return), (e = t.return));
      while (e);
    }
    return t.tag === 3 ? a : null;
  }
  function d(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function p(e) {
    if (f(e) !== e) throw Error(o(188));
  }
  function y(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = f(e)), t === null)) throw Error(o(188));
      return t !== e ? null : e;
    }
    for (var a = e, l = t; ; ) {
      var i = a.return;
      if (i === null) break;
      var s = i.alternate;
      if (s === null) {
        if (((l = i.return), l !== null)) {
          a = l;
          continue;
        }
        break;
      }
      if (i.child === s.child) {
        for (s = i.child; s; ) {
          if (s === a) return (p(i), e);
          if (s === l) return (p(i), t);
          s = s.sibling;
        }
        throw Error(o(188));
      }
      if (a.return !== l.return) ((a = i), (l = s));
      else {
        for (var h = !1, g = i.child; g; ) {
          if (g === a) {
            ((h = !0), (a = i), (l = s));
            break;
          }
          if (g === l) {
            ((h = !0), (l = i), (a = s));
            break;
          }
          g = g.sibling;
        }
        if (!h) {
          for (g = s.child; g; ) {
            if (g === a) {
              ((h = !0), (a = s), (l = i));
              break;
            }
            if (g === l) {
              ((h = !0), (l = s), (a = i));
              break;
            }
            g = g.sibling;
          }
          if (!h) throw Error(o(189));
        }
      }
      if (a.alternate !== l) throw Error(o(190));
    }
    if (a.tag !== 3) throw Error(o(188));
    return a.stateNode.current === a ? e : t;
  }
  function m(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (((t = m(e)), t !== null)) return t;
      e = e.sibling;
    }
    return null;
  }
  var v = Object.assign,
    b = Symbol.for("react.element"),
    T = Symbol.for("react.transitional.element"),
    U = Symbol.for("react.portal"),
    w = Symbol.for("react.fragment"),
    q = Symbol.for("react.strict_mode"),
    D = Symbol.for("react.profiler"),
    V = Symbol.for("react.provider"),
    F = Symbol.for("react.consumer"),
    ee = Symbol.for("react.context"),
    le = Symbol.for("react.forward_ref"),
    $ = Symbol.for("react.suspense"),
    z = Symbol.for("react.suspense_list"),
    ne = Symbol.for("react.memo"),
    te = Symbol.for("react.lazy"),
    fe = Symbol.for("react.activity"),
    Ue = Symbol.for("react.memo_cache_sentinel"),
    Xe = Symbol.iterator;
  function Be(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (Xe && e[Xe]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var we = Symbol.for("react.client.reference");
  function Re(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === we ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case w:
        return "Fragment";
      case D:
        return "Profiler";
      case q:
        return "StrictMode";
      case $:
        return "Suspense";
      case z:
        return "SuspenseList";
      case fe:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case U:
          return "Portal";
        case ee:
          return (e.displayName || "Context") + ".Provider";
        case F:
          return (e._context.displayName || "Context") + ".Consumer";
        case le:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case ne:
          return (
            (t = e.displayName || null),
            t !== null ? t : Re(e.type) || "Memo"
          );
        case te:
          ((t = e._payload), (e = e._init));
          try {
            return Re(e(t));
          } catch {}
      }
    return null;
  }
  var _e = Array.isArray,
    O = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    P = u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    G = { pending: !1, data: null, method: null, action: null },
    Ee = [],
    E = -1;
  function k(e) {
    return { current: e };
  }
  function I(e) {
    0 > E || ((e.current = Ee[E]), (Ee[E] = null), E--);
  }
  function K(e, t) {
    (E++, (Ee[E] = e.current), (e.current = t));
  }
  var ae = k(null),
    xe = k(null),
    ye = k(null),
    qe = k(null);
  function Qe(e, t) {
    switch ((K(ye, t), K(xe, e), K(ae, null), t.nodeType)) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? m0(e) : 0;
        break;
      default:
        if (((e = t.tagName), (t = t.namespaceURI)))
          ((t = m0(t)), (e = p0(t, e)));
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    (I(ae), K(ae, e));
  }
  function Mt() {
    (I(ae), I(xe), I(ye));
  }
  function et(e) {
    e.memoizedState !== null && K(qe, e);
    var t = ae.current,
      a = p0(t, e.type);
    t !== a && (K(xe, e), K(ae, a));
  }
  function _t(e) {
    (xe.current === e && (I(ae), I(xe)),
      qe.current === e && (I(qe), (Kr._currentValue = G)));
  }
  var fa = Object.prototype.hasOwnProperty,
    ar = n.unstable_scheduleCallback,
    da = n.unstable_cancelCallback,
    co = n.unstable_shouldYield,
    fo = n.unstable_requestPaint,
    Vt = n.unstable_now,
    ho = n.unstable_getCurrentPriorityLevel,
    gi = n.unstable_ImmediatePriority,
    vi = n.unstable_UserBlockingPriority,
    sn = n.unstable_NormalPriority,
    Da = n.unstable_LowPriority,
    el = n.unstable_IdlePriority,
    bi = n.log,
    lr = n.unstable_setDisableYieldValue,
    Nt = null,
    lt = null;
  function ha(e) {
    if (
      (typeof bi == "function" && lr(e),
      lt && typeof lt.setStrictMode == "function")
    )
      try {
        lt.setStrictMode(Nt, e);
      } catch {}
  }
  var xt = Math.clz32 ? Math.clz32 : Si,
    mo = Math.log,
    Sa = Math.LN2;
  function Si(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((mo(e) / Sa) | 0)) | 0);
  }
  var zl = 256,
    Nl = 4194304;
  function za(e) {
    var t = e & 42;
    if (t !== 0) return t;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function Ul(e, t, a) {
    var l = e.pendingLanes;
    if (l === 0) return 0;
    var i = 0,
      s = e.suspendedLanes,
      h = e.pingedLanes;
    e = e.warmLanes;
    var g = l & 134217727;
    return (
      g !== 0
        ? ((l = g & ~s),
          l !== 0
            ? (i = za(l))
            : ((h &= g),
              h !== 0
                ? (i = za(h))
                : a || ((a = g & ~e), a !== 0 && (i = za(a)))))
        : ((g = l & ~s),
          g !== 0
            ? (i = za(g))
            : h !== 0
              ? (i = za(h))
              : a || ((a = l & ~e), a !== 0 && (i = za(a)))),
      i === 0
        ? 0
        : t !== 0 &&
            t !== i &&
            (t & s) === 0 &&
            ((s = i & -i),
            (a = t & -t),
            s >= a || (s === 32 && (a & 4194048) !== 0))
          ? t
          : i
    );
  }
  function Ea(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function Ei(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function cn() {
    var e = zl;
    return ((zl <<= 1), (zl & 4194048) === 0 && (zl = 256), e);
  }
  function xi() {
    var e = Nl;
    return ((Nl <<= 1), (Nl & 62914560) === 0 && (Nl = 4194304), e);
  }
  function fn(e) {
    for (var t = [], a = 0; 31 > a; a++) t.push(e);
    return t;
  }
  function Ll(e, t) {
    ((e.pendingLanes |= t),
      t !== 268435456 &&
        ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0)));
  }
  function Ri(e, t, a, l, i, s) {
    var h = e.pendingLanes;
    ((e.pendingLanes = a),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= a),
      (e.entangledLanes &= a),
      (e.errorRecoveryDisabledLanes &= a),
      (e.shellSuspendCounter = 0));
    var g = e.entanglements,
      S = e.expirationTimes,
      N = e.hiddenUpdates;
    for (a = h & ~a; 0 < a; ) {
      var Y = 31 - xt(a),
        Q = 1 << Y;
      ((g[Y] = 0), (S[Y] = -1));
      var L = N[Y];
      if (L !== null)
        for (N[Y] = null, Y = 0; Y < L.length; Y++) {
          var j = L[Y];
          j !== null && (j.lane &= -536870913);
        }
      a &= ~Q;
    }
    (l !== 0 && jl(e, l, 0),
      s !== 0 && i === 0 && e.tag !== 0 && (e.suspendedLanes |= s & ~(h & ~t)));
  }
  function jl(e, t, a) {
    ((e.pendingLanes |= t), (e.suspendedLanes &= ~t));
    var l = 31 - xt(t);
    ((e.entangledLanes |= t),
      (e.entanglements[l] = e.entanglements[l] | 1073741824 | (a & 4194090)));
  }
  function Hl(e, t) {
    var a = (e.entangledLanes |= t);
    for (e = e.entanglements; a; ) {
      var l = 31 - xt(a),
        i = 1 << l;
      ((i & t) | (e[l] & t) && (e[l] |= t), (a &= ~i));
    }
  }
  function nr(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function rr(e) {
    return (
      (e &= -e),
      2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function x() {
    var e = P.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : U0(e.type));
  }
  function M(e, t) {
    var a = P.p;
    try {
      return ((P.p = e), t());
    } finally {
      P.p = a;
    }
  }
  var H = Math.random().toString(36).slice(2),
    Z = "__reactFiber$" + H,
    W = "__reactProps$" + H,
    oe = "__reactContainer$" + H,
    he = "__reactEvents$" + H,
    se = "__reactListeners$" + H,
    pe = "__reactHandles$" + H,
    ge = "__reactResources$" + H,
    ce = "__reactMarker$" + H;
  function de(e) {
    (delete e[Z], delete e[W], delete e[he], delete e[se], delete e[pe]);
  }
  function Me(e) {
    var t = e[Z];
    if (t) return t;
    for (var a = e.parentNode; a; ) {
      if ((t = a[oe] || a[Z])) {
        if (
          ((a = t.alternate),
          t.child !== null || (a !== null && a.child !== null))
        )
          for (e = b0(e); e !== null; ) {
            if ((a = e[Z])) return a;
            e = b0(e);
          }
        return t;
      }
      ((e = a), (a = e.parentNode));
    }
    return null;
  }
  function Ge(e) {
    if ((e = e[Z] || e[oe])) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function tt(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(o(33));
  }
  function it(e) {
    var t = e[ge];
    return (
      t ||
        (t = e[ge] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      t
    );
  }
  function Te(e) {
    e[ce] = !0;
  }
  var Je = new Set(),
    xa = {};
  function Xt(e, t) {
    (Dt(e, t), Dt(e + "Capture", t));
  }
  function Dt(e, t) {
    for (xa[e] = t, e = 0; e < t.length; e++) Je.add(t[e]);
  }
  var It = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    dn = {},
    tl = {};
  function Na(e) {
    return fa.call(tl, e)
      ? !0
      : fa.call(dn, e)
        ? !1
        : It.test(e)
          ? (tl[e] = !0)
          : ((dn[e] = !0), !1);
  }
  function Ua(e, t, a) {
    if (Na(t))
      if (a === null) e.removeAttribute(t);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var l = t.toLowerCase().slice(0, 5);
            if (l !== "data-" && l !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, "" + a);
      }
  }
  function La(e, t, a) {
    if (a === null) e.removeAttribute(t);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, "" + a);
    }
  }
  function Ae(e, t, a, l) {
    if (l === null) e.removeAttribute(a);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(a);
          return;
      }
      e.setAttributeNS(t, a, "" + l);
    }
  }
  var ht, ja;
  function Ut(e) {
    if (ht === void 0)
      try {
        throw Error();
      } catch (a) {
        var t = a.stack.trim().match(/\n( *(at )?)/);
        ((ht = (t && t[1]) || ""),
          (ja =
            -1 <
            a.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < a.stack.indexOf("@")
                ? "@unknown:0:0"
                : ""));
      }
    return (
      `
` +
      ht +
      e +
      ja
    );
  }
  var nt = !1;
  function al(e, t) {
    if (!e || nt) return "";
    nt = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var Q = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(Q.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(Q, []);
                } catch (j) {
                  var L = j;
                }
                Reflect.construct(e, [], Q);
              } else {
                try {
                  Q.call();
                } catch (j) {
                  L = j;
                }
                e.call(Q.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (j) {
                L = j;
              }
              (Q = e()) &&
                typeof Q.catch == "function" &&
                Q.catch(function () {});
            }
          } catch (j) {
            if (j && L && typeof j.stack == "string") return [j.stack, L.stack];
          }
          return [null, null];
        },
      };
      l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var i = Object.getOwnPropertyDescriptor(
        l.DetermineComponentFrameRoot,
        "name",
      );
      i &&
        i.configurable &&
        Object.defineProperty(l.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var s = l.DetermineComponentFrameRoot(),
        h = s[0],
        g = s[1];
      if (h && g) {
        var S = h.split(`
`),
          N = g.split(`
`);
        for (
          i = l = 0;
          l < S.length && !S[l].includes("DetermineComponentFrameRoot");

        )
          l++;
        for (; i < N.length && !N[i].includes("DetermineComponentFrameRoot"); )
          i++;
        if (l === S.length || i === N.length)
          for (
            l = S.length - 1, i = N.length - 1;
            1 <= l && 0 <= i && S[l] !== N[i];

          )
            i--;
        for (; 1 <= l && 0 <= i; l--, i--)
          if (S[l] !== N[i]) {
            if (l !== 1 || i !== 1)
              do
                if ((l--, i--, 0 > i || S[l] !== N[i])) {
                  var Y =
                    `
` + S[l].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      Y.includes("<anonymous>") &&
                      (Y = Y.replace("<anonymous>", e.displayName)),
                    Y
                  );
                }
              while (1 <= l && 0 <= i);
            break;
          }
      }
    } finally {
      ((nt = !1), (Error.prepareStackTrace = a));
    }
    return (a = e ? e.displayName || e.name : "") ? Ut(a) : "";
  }
  function wi(e) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Ut(e.type);
      case 16:
        return Ut("Lazy");
      case 13:
        return Ut("Suspense");
      case 19:
        return Ut("SuspenseList");
      case 0:
      case 15:
        return al(e.type, !1);
      case 11:
        return al(e.type.render, !1);
      case 1:
        return al(e.type, !0);
      case 31:
        return Ut("Activity");
      default:
        return "";
    }
  }
  function Ti(e) {
    try {
      var t = "";
      do ((t += wi(e)), (e = e.return));
      while (e);
      return t;
    } catch (a) {
      return (
        `
Error generating stack: ` +
        a.message +
        `
` +
        a.stack
      );
    }
  }
  function ea(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function sf(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function Ip(e) {
    var t = sf(e) ? "checked" : "value",
      a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      l = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof a < "u" &&
      typeof a.get == "function" &&
      typeof a.set == "function"
    ) {
      var i = a.get,
        s = a.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return i.call(this);
          },
          set: function (h) {
            ((l = "" + h), s.call(this, h));
          },
        }),
        Object.defineProperty(e, t, { enumerable: a.enumerable }),
        {
          getValue: function () {
            return l;
          },
          setValue: function (h) {
            l = "" + h;
          },
          stopTracking: function () {
            ((e._valueTracker = null), delete e[t]);
          },
        }
      );
    }
  }
  function Ai(e) {
    e._valueTracker || (e._valueTracker = Ip(e));
  }
  function cf(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var a = t.getValue(),
      l = "";
    return (
      e && (l = sf(e) ? (e.checked ? "true" : "false") : e.value),
      (e = l),
      e !== a ? (t.setValue(e), !0) : !1
    );
  }
  function Oi(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var ey = /[\n"\\]/g;
  function ta(e) {
    return e.replace(ey, function (t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function po(e, t, a, l, i, s, h, g) {
    ((e.name = ""),
      h != null &&
      typeof h != "function" &&
      typeof h != "symbol" &&
      typeof h != "boolean"
        ? (e.type = h)
        : e.removeAttribute("type"),
      t != null
        ? h === "number"
          ? ((t === 0 && e.value === "") || e.value != t) &&
            (e.value = "" + ea(t))
          : e.value !== "" + ea(t) && (e.value = "" + ea(t))
        : (h !== "submit" && h !== "reset") || e.removeAttribute("value"),
      t != null
        ? yo(e, h, ea(t))
        : a != null
          ? yo(e, h, ea(a))
          : l != null && e.removeAttribute("value"),
      i == null && s != null && (e.defaultChecked = !!s),
      i != null &&
        (e.checked = i && typeof i != "function" && typeof i != "symbol"),
      g != null &&
      typeof g != "function" &&
      typeof g != "symbol" &&
      typeof g != "boolean"
        ? (e.name = "" + ea(g))
        : e.removeAttribute("name"));
  }
  function ff(e, t, a, l, i, s, h, g) {
    if (
      (s != null &&
        typeof s != "function" &&
        typeof s != "symbol" &&
        typeof s != "boolean" &&
        (e.type = s),
      t != null || a != null)
    ) {
      if (!((s !== "submit" && s !== "reset") || t != null)) return;
      ((a = a != null ? "" + ea(a) : ""),
        (t = t != null ? "" + ea(t) : a),
        g || t === e.value || (e.value = t),
        (e.defaultValue = t));
    }
    ((l = l ?? i),
      (l = typeof l != "function" && typeof l != "symbol" && !!l),
      (e.checked = g ? e.checked : !!l),
      (e.defaultChecked = !!l),
      h != null &&
        typeof h != "function" &&
        typeof h != "symbol" &&
        typeof h != "boolean" &&
        (e.name = h));
  }
  function yo(e, t, a) {
    (t === "number" && Oi(e.ownerDocument) === e) ||
      e.defaultValue === "" + a ||
      (e.defaultValue = "" + a);
  }
  function hn(e, t, a, l) {
    if (((e = e.options), t)) {
      t = {};
      for (var i = 0; i < a.length; i++) t["$" + a[i]] = !0;
      for (a = 0; a < e.length; a++)
        ((i = t.hasOwnProperty("$" + e[a].value)),
          e[a].selected !== i && (e[a].selected = i),
          i && l && (e[a].defaultSelected = !0));
    } else {
      for (a = "" + ea(a), t = null, i = 0; i < e.length; i++) {
        if (e[i].value === a) {
          ((e[i].selected = !0), l && (e[i].defaultSelected = !0));
          return;
        }
        t !== null || e[i].disabled || (t = e[i]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function df(e, t, a) {
    if (
      t != null &&
      ((t = "" + ea(t)), t !== e.value && (e.value = t), a == null)
    ) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = a != null ? "" + ea(a) : "";
  }
  function hf(e, t, a, l) {
    if (t == null) {
      if (l != null) {
        if (a != null) throw Error(o(92));
        if (_e(l)) {
          if (1 < l.length) throw Error(o(93));
          l = l[0];
        }
        a = l;
      }
      (a == null && (a = ""), (t = a));
    }
    ((a = ea(t)),
      (e.defaultValue = a),
      (l = e.textContent),
      l === a && l !== "" && l !== null && (e.value = l));
  }
  function mn(e, t) {
    if (t) {
      var a = e.firstChild;
      if (a && a === e.lastChild && a.nodeType === 3) {
        a.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var ty = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " ",
    ),
  );
  function mf(e, t, a) {
    var l = t.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === ""
      ? l
        ? e.setProperty(t, "")
        : t === "float"
          ? (e.cssFloat = "")
          : (e[t] = "")
      : l
        ? e.setProperty(t, a)
        : typeof a != "number" || a === 0 || ty.has(t)
          ? t === "float"
            ? (e.cssFloat = a)
            : (e[t] = ("" + a).trim())
          : (e[t] = a + "px");
  }
  function pf(e, t, a) {
    if (t != null && typeof t != "object") throw Error(o(62));
    if (((e = e.style), a != null)) {
      for (var l in a)
        !a.hasOwnProperty(l) ||
          (t != null && t.hasOwnProperty(l)) ||
          (l.indexOf("--") === 0
            ? e.setProperty(l, "")
            : l === "float"
              ? (e.cssFloat = "")
              : (e[l] = ""));
      for (var i in t)
        ((l = t[i]), t.hasOwnProperty(i) && a[i] !== l && mf(e, i, l));
    } else for (var s in t) t.hasOwnProperty(s) && mf(e, s, t[s]);
  }
  function go(e) {
    if (e.indexOf("-") === -1) return !1;
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var ay = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    ly =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Ci(e) {
    return ly.test("" + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  var vo = null;
  function bo(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var pn = null,
    yn = null;
  function yf(e) {
    var t = Ge(e);
    if (t && (e = t.stateNode)) {
      var a = e[W] || null;
      e: switch (((e = t.stateNode), t.type)) {
        case "input":
          if (
            (po(
              e,
              a.value,
              a.defaultValue,
              a.defaultValue,
              a.checked,
              a.defaultChecked,
              a.type,
              a.name,
            ),
            (t = a.name),
            a.type === "radio" && t != null)
          ) {
            for (a = e; a.parentNode; ) a = a.parentNode;
            for (
              a = a.querySelectorAll(
                'input[name="' + ta("" + t) + '"][type="radio"]',
              ),
                t = 0;
              t < a.length;
              t++
            ) {
              var l = a[t];
              if (l !== e && l.form === e.form) {
                var i = l[W] || null;
                if (!i) throw Error(o(90));
                po(
                  l,
                  i.value,
                  i.defaultValue,
                  i.defaultValue,
                  i.checked,
                  i.defaultChecked,
                  i.type,
                  i.name,
                );
              }
            }
            for (t = 0; t < a.length; t++)
              ((l = a[t]), l.form === e.form && cf(l));
          }
          break e;
        case "textarea":
          df(e, a.value, a.defaultValue);
          break e;
        case "select":
          ((t = a.value), t != null && hn(e, !!a.multiple, t, !1));
      }
    }
  }
  var So = !1;
  function gf(e, t, a) {
    if (So) return e(t, a);
    So = !0;
    try {
      var l = e(t);
      return l;
    } finally {
      if (
        ((So = !1),
        (pn !== null || yn !== null) &&
          (hu(), pn && ((t = pn), (e = yn), (yn = pn = null), yf(t), e)))
      )
        for (t = 0; t < e.length; t++) yf(e[t]);
    }
  }
  function ir(e, t) {
    var a = e.stateNode;
    if (a === null) return null;
    var l = a[W] || null;
    if (l === null) return null;
    a = l[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        ((l = !l.disabled) ||
          ((e = e.type),
          (l = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !l));
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (a && typeof a != "function") throw Error(o(231, t, typeof a));
    return a;
  }
  var Ha = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    Eo = !1;
  if (Ha)
    try {
      var ur = {};
      (Object.defineProperty(ur, "passive", {
        get: function () {
          Eo = !0;
        },
      }),
        window.addEventListener("test", ur, ur),
        window.removeEventListener("test", ur, ur));
    } catch {
      Eo = !1;
    }
  var ll = null,
    xo = null,
    Mi = null;
  function vf() {
    if (Mi) return Mi;
    var e,
      t = xo,
      a = t.length,
      l,
      i = "value" in ll ? ll.value : ll.textContent,
      s = i.length;
    for (e = 0; e < a && t[e] === i[e]; e++);
    var h = a - e;
    for (l = 1; l <= h && t[a - l] === i[s - l]; l++);
    return (Mi = i.slice(e, 1 < l ? 1 - l : void 0));
  }
  function _i(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Di() {
    return !0;
  }
  function bf() {
    return !1;
  }
  function Lt(e) {
    function t(a, l, i, s, h) {
      ((this._reactName = a),
        (this._targetInst = i),
        (this.type = l),
        (this.nativeEvent = s),
        (this.target = h),
        (this.currentTarget = null));
      for (var g in e)
        e.hasOwnProperty(g) && ((a = e[g]), (this[g] = a ? a(s) : s[g]));
      return (
        (this.isDefaultPrevented = (
          s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
        )
          ? Di
          : bf),
        (this.isPropagationStopped = bf),
        this
      );
    }
    return (
      v(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a &&
            (a.preventDefault
              ? a.preventDefault()
              : typeof a.returnValue != "unknown" && (a.returnValue = !1),
            (this.isDefaultPrevented = Di));
        },
        stopPropagation: function () {
          var a = this.nativeEvent;
          a &&
            (a.stopPropagation
              ? a.stopPropagation()
              : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0),
            (this.isPropagationStopped = Di));
        },
        persist: function () {},
        isPersistent: Di,
      }),
      t
    );
  }
  var Bl = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    zi = Lt(Bl),
    or = v({}, Bl, { view: 0, detail: 0 }),
    ny = Lt(or),
    Ro,
    wo,
    sr,
    Ni = v({}, or, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Ao,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== sr &&
              (sr && e.type === "mousemove"
                ? ((Ro = e.screenX - sr.screenX), (wo = e.screenY - sr.screenY))
                : (wo = Ro = 0),
              (sr = e)),
            Ro);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : wo;
      },
    }),
    Sf = Lt(Ni),
    ry = v({}, Ni, { dataTransfer: 0 }),
    iy = Lt(ry),
    uy = v({}, or, { relatedTarget: 0 }),
    To = Lt(uy),
    oy = v({}, Bl, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    sy = Lt(oy),
    cy = v({}, Bl, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    fy = Lt(cy),
    dy = v({}, Bl, { data: 0 }),
    Ef = Lt(dy),
    hy = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    my = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    py = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function yy(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = py[e])
        ? !!t[e]
        : !1;
  }
  function Ao() {
    return yy;
  }
  var gy = v({}, or, {
      key: function (e) {
        if (e.key) {
          var t = hy[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = _i(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? my[e.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Ao,
      charCode: function (e) {
        return e.type === "keypress" ? _i(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? _i(e)
          : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
      },
    }),
    vy = Lt(gy),
    by = v({}, Ni, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    xf = Lt(by),
    Sy = v({}, or, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Ao,
    }),
    Ey = Lt(Sy),
    xy = v({}, Bl, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Ry = Lt(xy),
    wy = v({}, Ni, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
            ? -e.wheelDeltaX
            : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
            ? -e.wheelDeltaY
            : "wheelDelta" in e
              ? -e.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Ty = Lt(wy),
    Ay = v({}, Bl, { newState: 0, oldState: 0 }),
    Oy = Lt(Ay),
    Cy = [9, 13, 27, 32],
    Oo = Ha && "CompositionEvent" in window,
    cr = null;
  Ha && "documentMode" in document && (cr = document.documentMode);
  var My = Ha && "TextEvent" in window && !cr,
    Rf = Ha && (!Oo || (cr && 8 < cr && 11 >= cr)),
    wf = " ",
    Tf = !1;
  function Af(e, t) {
    switch (e) {
      case "keyup":
        return Cy.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Of(e) {
    return (
      (e = e.detail),
      typeof e == "object" && "data" in e ? e.data : null
    );
  }
  var gn = !1;
  function _y(e, t) {
    switch (e) {
      case "compositionend":
        return Of(t);
      case "keypress":
        return t.which !== 32 ? null : ((Tf = !0), wf);
      case "textInput":
        return ((e = t.data), e === wf && Tf ? null : e);
      default:
        return null;
    }
  }
  function Dy(e, t) {
    if (gn)
      return e === "compositionend" || (!Oo && Af(e, t))
        ? ((e = vf()), (Mi = xo = ll = null), (gn = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Rf && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var zy = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Cf(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!zy[e.type] : t === "textarea";
  }
  function Mf(e, t, a, l) {
    (pn ? (yn ? yn.push(l) : (yn = [l])) : (pn = l),
      (t = bu(t, "onChange")),
      0 < t.length &&
        ((a = new zi("onChange", "change", null, a, l)),
        e.push({ event: a, listeners: t })));
  }
  var fr = null,
    dr = null;
  function Ny(e) {
    s0(e, 0);
  }
  function Ui(e) {
    var t = tt(e);
    if (cf(t)) return e;
  }
  function _f(e, t) {
    if (e === "change") return t;
  }
  var Df = !1;
  if (Ha) {
    var Co;
    if (Ha) {
      var Mo = "oninput" in document;
      if (!Mo) {
        var zf = document.createElement("div");
        (zf.setAttribute("oninput", "return;"),
          (Mo = typeof zf.oninput == "function"));
      }
      Co = Mo;
    } else Co = !1;
    Df = Co && (!document.documentMode || 9 < document.documentMode);
  }
  function Nf() {
    fr && (fr.detachEvent("onpropertychange", Uf), (dr = fr = null));
  }
  function Uf(e) {
    if (e.propertyName === "value" && Ui(dr)) {
      var t = [];
      (Mf(t, dr, e, bo(e)), gf(Ny, t));
    }
  }
  function Uy(e, t, a) {
    e === "focusin"
      ? (Nf(), (fr = t), (dr = a), fr.attachEvent("onpropertychange", Uf))
      : e === "focusout" && Nf();
  }
  function Ly(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Ui(dr);
  }
  function jy(e, t) {
    if (e === "click") return Ui(t);
  }
  function Hy(e, t) {
    if (e === "input" || e === "change") return Ui(t);
  }
  function By(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var Qt = typeof Object.is == "function" ? Object.is : By;
  function hr(e, t) {
    if (Qt(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var a = Object.keys(e),
      l = Object.keys(t);
    if (a.length !== l.length) return !1;
    for (l = 0; l < a.length; l++) {
      var i = a[l];
      if (!fa.call(t, i) || !Qt(e[i], t[i])) return !1;
    }
    return !0;
  }
  function Lf(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function jf(e, t) {
    var a = Lf(e);
    e = 0;
    for (var l; a; ) {
      if (a.nodeType === 3) {
        if (((l = e + a.textContent.length), e <= t && l >= t))
          return { node: a, offset: t - e };
        e = l;
      }
      e: {
        for (; a; ) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break e;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = Lf(a);
    }
  }
  function Hf(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? Hf(e, t.parentNode)
            : "contains" in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function Bf(e) {
    e =
      e != null &&
      e.ownerDocument != null &&
      e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window;
    for (var t = Oi(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var a = typeof t.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) e = t.contentWindow;
      else break;
      t = Oi(e.document);
    }
    return t;
  }
  function _o(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  var qy = Ha && "documentMode" in document && 11 >= document.documentMode,
    vn = null,
    Do = null,
    mr = null,
    zo = !1;
  function qf(e, t, a) {
    var l =
      a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    zo ||
      vn == null ||
      vn !== Oi(l) ||
      ((l = vn),
      "selectionStart" in l && _o(l)
        ? (l = { start: l.selectionStart, end: l.selectionEnd })
        : ((l = (
            (l.ownerDocument && l.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (l = {
            anchorNode: l.anchorNode,
            anchorOffset: l.anchorOffset,
            focusNode: l.focusNode,
            focusOffset: l.focusOffset,
          })),
      (mr && hr(mr, l)) ||
        ((mr = l),
        (l = bu(Do, "onSelect")),
        0 < l.length &&
          ((t = new zi("onSelect", "select", null, t, a)),
          e.push({ event: t, listeners: l }),
          (t.target = vn))));
  }
  function ql(e, t) {
    var a = {};
    return (
      (a[e.toLowerCase()] = t.toLowerCase()),
      (a["Webkit" + e] = "webkit" + t),
      (a["Moz" + e] = "moz" + t),
      a
    );
  }
  var bn = {
      animationend: ql("Animation", "AnimationEnd"),
      animationiteration: ql("Animation", "AnimationIteration"),
      animationstart: ql("Animation", "AnimationStart"),
      transitionrun: ql("Transition", "TransitionRun"),
      transitionstart: ql("Transition", "TransitionStart"),
      transitioncancel: ql("Transition", "TransitionCancel"),
      transitionend: ql("Transition", "TransitionEnd"),
    },
    No = {},
    kf = {};
  Ha &&
    ((kf = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete bn.animationend.animation,
      delete bn.animationiteration.animation,
      delete bn.animationstart.animation),
    "TransitionEvent" in window || delete bn.transitionend.transition);
  function kl(e) {
    if (No[e]) return No[e];
    if (!bn[e]) return e;
    var t = bn[e],
      a;
    for (a in t) if (t.hasOwnProperty(a) && a in kf) return (No[e] = t[a]);
    return e;
  }
  var Yf = kl("animationend"),
    Gf = kl("animationiteration"),
    Vf = kl("animationstart"),
    ky = kl("transitionrun"),
    Yy = kl("transitionstart"),
    Gy = kl("transitioncancel"),
    Xf = kl("transitionend"),
    Qf = new Map(),
    Uo =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  Uo.push("scrollEnd");
  function ma(e, t) {
    (Qf.set(e, t), Xt(t, [e]));
  }
  var Zf = new WeakMap();
  function aa(e, t) {
    if (typeof e == "object" && e !== null) {
      var a = Zf.get(e);
      return a !== void 0
        ? a
        : ((t = { value: e, source: t, stack: Ti(t) }), Zf.set(e, t), t);
    }
    return { value: e, source: t, stack: Ti(t) };
  }
  var la = [],
    Sn = 0,
    Lo = 0;
  function Li() {
    for (var e = Sn, t = (Lo = Sn = 0); t < e; ) {
      var a = la[t];
      la[t++] = null;
      var l = la[t];
      la[t++] = null;
      var i = la[t];
      la[t++] = null;
      var s = la[t];
      if (((la[t++] = null), l !== null && i !== null)) {
        var h = l.pending;
        (h === null ? (i.next = i) : ((i.next = h.next), (h.next = i)),
          (l.pending = i));
      }
      s !== 0 && Kf(a, i, s);
    }
  }
  function ji(e, t, a, l) {
    ((la[Sn++] = e),
      (la[Sn++] = t),
      (la[Sn++] = a),
      (la[Sn++] = l),
      (Lo |= l),
      (e.lanes |= l),
      (e = e.alternate),
      e !== null && (e.lanes |= l));
  }
  function jo(e, t, a, l) {
    return (ji(e, t, a, l), Hi(e));
  }
  function En(e, t) {
    return (ji(e, null, null, t), Hi(e));
  }
  function Kf(e, t, a) {
    e.lanes |= a;
    var l = e.alternate;
    l !== null && (l.lanes |= a);
    for (var i = !1, s = e.return; s !== null; )
      ((s.childLanes |= a),
        (l = s.alternate),
        l !== null && (l.childLanes |= a),
        s.tag === 22 &&
          ((e = s.stateNode), e === null || e._visibility & 1 || (i = !0)),
        (e = s),
        (s = s.return));
    return e.tag === 3
      ? ((s = e.stateNode),
        i &&
          t !== null &&
          ((i = 31 - xt(a)),
          (e = s.hiddenUpdates),
          (l = e[i]),
          l === null ? (e[i] = [t]) : l.push(t),
          (t.lane = a | 536870912)),
        s)
      : null;
  }
  function Hi(e) {
    if (50 < qr) throw ((qr = 0), (Gs = null), Error(o(185)));
    for (var t = e.return; t !== null; ) ((e = t), (t = e.return));
    return e.tag === 3 ? e.stateNode : null;
  }
  var xn = {};
  function Vy(e, t, a, l) {
    ((this.tag = e),
      (this.key = a),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = l),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function Zt(e, t, a, l) {
    return new Vy(e, t, a, l);
  }
  function Ho(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function Ba(e, t) {
    var a = e.alternate;
    return (
      a === null
        ? ((a = Zt(e.tag, t, e.key, e.mode)),
          (a.elementType = e.elementType),
          (a.type = e.type),
          (a.stateNode = e.stateNode),
          (a.alternate = e),
          (e.alternate = a))
        : ((a.pendingProps = t),
          (a.type = e.type),
          (a.flags = 0),
          (a.subtreeFlags = 0),
          (a.deletions = null)),
      (a.flags = e.flags & 65011712),
      (a.childLanes = e.childLanes),
      (a.lanes = e.lanes),
      (a.child = e.child),
      (a.memoizedProps = e.memoizedProps),
      (a.memoizedState = e.memoizedState),
      (a.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (a.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (a.sibling = e.sibling),
      (a.index = e.index),
      (a.ref = e.ref),
      (a.refCleanup = e.refCleanup),
      a
    );
  }
  function Jf(e, t) {
    e.flags &= 65011714;
    var a = e.alternate;
    return (
      a === null
        ? ((e.childLanes = 0),
          (e.lanes = t),
          (e.child = null),
          (e.subtreeFlags = 0),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.updateQueue = null),
          (e.dependencies = null),
          (e.stateNode = null))
        : ((e.childLanes = a.childLanes),
          (e.lanes = a.lanes),
          (e.child = a.child),
          (e.subtreeFlags = 0),
          (e.deletions = null),
          (e.memoizedProps = a.memoizedProps),
          (e.memoizedState = a.memoizedState),
          (e.updateQueue = a.updateQueue),
          (e.type = a.type),
          (t = a.dependencies),
          (e.dependencies =
            t === null
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext })),
      e
    );
  }
  function Bi(e, t, a, l, i, s) {
    var h = 0;
    if (((l = e), typeof e == "function")) Ho(e) && (h = 1);
    else if (typeof e == "string")
      h = Q2(e, a, ae.current)
        ? 26
        : e === "html" || e === "head" || e === "body"
          ? 27
          : 5;
    else
      e: switch (e) {
        case fe:
          return (
            (e = Zt(31, a, t, i)),
            (e.elementType = fe),
            (e.lanes = s),
            e
          );
        case w:
          return Yl(a.children, i, s, t);
        case q:
          ((h = 8), (i |= 24));
          break;
        case D:
          return (
            (e = Zt(12, a, t, i | 2)),
            (e.elementType = D),
            (e.lanes = s),
            e
          );
        case $:
          return ((e = Zt(13, a, t, i)), (e.elementType = $), (e.lanes = s), e);
        case z:
          return ((e = Zt(19, a, t, i)), (e.elementType = z), (e.lanes = s), e);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case V:
              case ee:
                h = 10;
                break e;
              case F:
                h = 9;
                break e;
              case le:
                h = 11;
                break e;
              case ne:
                h = 14;
                break e;
              case te:
                ((h = 16), (l = null));
                break e;
            }
          ((h = 29),
            (a = Error(o(130, e === null ? "null" : typeof e, ""))),
            (l = null));
      }
    return (
      (t = Zt(h, a, t, i)),
      (t.elementType = e),
      (t.type = l),
      (t.lanes = s),
      t
    );
  }
  function Yl(e, t, a, l) {
    return ((e = Zt(7, e, l, t)), (e.lanes = a), e);
  }
  function Bo(e, t, a) {
    return ((e = Zt(6, e, null, t)), (e.lanes = a), e);
  }
  function qo(e, t, a) {
    return (
      (t = Zt(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = a),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  var Rn = [],
    wn = 0,
    qi = null,
    ki = 0,
    na = [],
    ra = 0,
    Gl = null,
    qa = 1,
    ka = "";
  function Vl(e, t) {
    ((Rn[wn++] = ki), (Rn[wn++] = qi), (qi = e), (ki = t));
  }
  function Ff(e, t, a) {
    ((na[ra++] = qa), (na[ra++] = ka), (na[ra++] = Gl), (Gl = e));
    var l = qa;
    e = ka;
    var i = 32 - xt(l) - 1;
    ((l &= ~(1 << i)), (a += 1));
    var s = 32 - xt(t) + i;
    if (30 < s) {
      var h = i - (i % 5);
      ((s = (l & ((1 << h) - 1)).toString(32)),
        (l >>= h),
        (i -= h),
        (qa = (1 << (32 - xt(t) + i)) | (a << i) | l),
        (ka = s + e));
    } else ((qa = (1 << s) | (a << i) | l), (ka = e));
  }
  function ko(e) {
    e.return !== null && (Vl(e, 1), Ff(e, 1, 0));
  }
  function Yo(e) {
    for (; e === qi; )
      ((qi = Rn[--wn]), (Rn[wn] = null), (ki = Rn[--wn]), (Rn[wn] = null));
    for (; e === Gl; )
      ((Gl = na[--ra]),
        (na[ra] = null),
        (ka = na[--ra]),
        (na[ra] = null),
        (qa = na[--ra]),
        (na[ra] = null));
  }
  var zt = null,
    ut = null,
    Ve = !1,
    Xl = null,
    Ra = !1,
    Go = Error(o(519));
  function Ql(e) {
    var t = Error(o(418, ""));
    throw (gr(aa(t, e)), Go);
  }
  function Pf(e) {
    var t = e.stateNode,
      a = e.type,
      l = e.memoizedProps;
    switch (((t[Z] = e), (t[W] = l), a)) {
      case "dialog":
        (je("cancel", t), je("close", t));
        break;
      case "iframe":
      case "object":
      case "embed":
        je("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < Yr.length; a++) je(Yr[a], t);
        break;
      case "source":
        je("error", t);
        break;
      case "img":
      case "image":
      case "link":
        (je("error", t), je("load", t));
        break;
      case "details":
        je("toggle", t);
        break;
      case "input":
        (je("invalid", t),
          ff(
            t,
            l.value,
            l.defaultValue,
            l.checked,
            l.defaultChecked,
            l.type,
            l.name,
            !0,
          ),
          Ai(t));
        break;
      case "select":
        je("invalid", t);
        break;
      case "textarea":
        (je("invalid", t), hf(t, l.value, l.defaultValue, l.children), Ai(t));
    }
    ((a = l.children),
      (typeof a != "string" && typeof a != "number" && typeof a != "bigint") ||
      t.textContent === "" + a ||
      l.suppressHydrationWarning === !0 ||
      h0(t.textContent, a)
        ? (l.popover != null && (je("beforetoggle", t), je("toggle", t)),
          l.onScroll != null && je("scroll", t),
          l.onScrollEnd != null && je("scrollend", t),
          l.onClick != null && (t.onclick = Su),
          (t = !0))
        : (t = !1),
      t || Ql(e));
  }
  function $f(e) {
    for (zt = e.return; zt; )
      switch (zt.tag) {
        case 5:
        case 13:
          Ra = !1;
          return;
        case 27:
        case 3:
          Ra = !0;
          return;
        default:
          zt = zt.return;
      }
  }
  function pr(e) {
    if (e !== zt) return !1;
    if (!Ve) return ($f(e), (Ve = !0), !1);
    var t = e.tag,
      a;
    if (
      ((a = t !== 3 && t !== 27) &&
        ((a = t === 5) &&
          ((a = e.type),
          (a =
            !(a !== "form" && a !== "button") || nc(e.type, e.memoizedProps))),
        (a = !a)),
      a && ut && Ql(e),
      $f(e),
      t === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(o(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8)
            if (((a = e.data), a === "/$")) {
              if (t === 0) {
                ut = ya(e.nextSibling);
                break e;
              }
              t--;
            } else (a !== "$" && a !== "$!" && a !== "$?") || t++;
          e = e.nextSibling;
        }
        ut = null;
      }
    } else
      t === 27
        ? ((t = ut), bl(e.type) ? ((e = oc), (oc = null), (ut = e)) : (ut = t))
        : (ut = zt ? ya(e.stateNode.nextSibling) : null);
    return !0;
  }
  function yr() {
    ((ut = zt = null), (Ve = !1));
  }
  function Wf() {
    var e = Xl;
    return (
      e !== null &&
        (Bt === null ? (Bt = e) : Bt.push.apply(Bt, e), (Xl = null)),
      e
    );
  }
  function gr(e) {
    Xl === null ? (Xl = [e]) : Xl.push(e);
  }
  var Vo = k(null),
    Zl = null,
    Ya = null;
  function nl(e, t, a) {
    (K(Vo, t._currentValue), (t._currentValue = a));
  }
  function Ga(e) {
    ((e._currentValue = Vo.current), I(Vo));
  }
  function Xo(e, t, a) {
    for (; e !== null; ) {
      var l = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), l !== null && (l.childLanes |= t))
          : l !== null && (l.childLanes & t) !== t && (l.childLanes |= t),
        e === a)
      )
        break;
      e = e.return;
    }
  }
  function Qo(e, t, a, l) {
    var i = e.child;
    for (i !== null && (i.return = e); i !== null; ) {
      var s = i.dependencies;
      if (s !== null) {
        var h = i.child;
        s = s.firstContext;
        e: for (; s !== null; ) {
          var g = s;
          s = i;
          for (var S = 0; S < t.length; S++)
            if (g.context === t[S]) {
              ((s.lanes |= a),
                (g = s.alternate),
                g !== null && (g.lanes |= a),
                Xo(s.return, a, e),
                l || (h = null));
              break e;
            }
          s = g.next;
        }
      } else if (i.tag === 18) {
        if (((h = i.return), h === null)) throw Error(o(341));
        ((h.lanes |= a),
          (s = h.alternate),
          s !== null && (s.lanes |= a),
          Xo(h, a, e),
          (h = null));
      } else h = i.child;
      if (h !== null) h.return = i;
      else
        for (h = i; h !== null; ) {
          if (h === e) {
            h = null;
            break;
          }
          if (((i = h.sibling), i !== null)) {
            ((i.return = h.return), (h = i));
            break;
          }
          h = h.return;
        }
      i = h;
    }
  }
  function vr(e, t, a, l) {
    e = null;
    for (var i = t, s = !1; i !== null; ) {
      if (!s) {
        if ((i.flags & 524288) !== 0) s = !0;
        else if ((i.flags & 262144) !== 0) break;
      }
      if (i.tag === 10) {
        var h = i.alternate;
        if (h === null) throw Error(o(387));
        if (((h = h.memoizedProps), h !== null)) {
          var g = i.type;
          Qt(i.pendingProps.value, h.value) ||
            (e !== null ? e.push(g) : (e = [g]));
        }
      } else if (i === qe.current) {
        if (((h = i.alternate), h === null)) throw Error(o(387));
        h.memoizedState.memoizedState !== i.memoizedState.memoizedState &&
          (e !== null ? e.push(Kr) : (e = [Kr]));
      }
      i = i.return;
    }
    (e !== null && Qo(t, e, a, l), (t.flags |= 262144));
  }
  function Yi(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!Qt(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function Kl(e) {
    ((Zl = e),
      (Ya = null),
      (e = e.dependencies),
      e !== null && (e.firstContext = null));
  }
  function At(e) {
    return If(Zl, e);
  }
  function Gi(e, t) {
    return (Zl === null && Kl(e), If(e, t));
  }
  function If(e, t) {
    var a = t._currentValue;
    if (((t = { context: t, memoizedValue: a, next: null }), Ya === null)) {
      if (e === null) throw Error(o(308));
      ((Ya = t),
        (e.dependencies = { lanes: 0, firstContext: t }),
        (e.flags |= 524288));
    } else Ya = Ya.next = t;
    return a;
  }
  var Xy =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var e = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (a, l) {
                  e.push(l);
                },
              });
            this.abort = function () {
              ((t.aborted = !0),
                e.forEach(function (a) {
                  return a();
                }));
            };
          },
    Qy = n.unstable_scheduleCallback,
    Zy = n.unstable_NormalPriority,
    yt = {
      $$typeof: ee,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Zo() {
    return { controller: new Xy(), data: new Map(), refCount: 0 };
  }
  function br(e) {
    (e.refCount--,
      e.refCount === 0 &&
        Qy(Zy, function () {
          e.controller.abort();
        }));
  }
  var Sr = null,
    Ko = 0,
    Tn = 0,
    An = null;
  function Ky(e, t) {
    if (Sr === null) {
      var a = (Sr = []);
      ((Ko = 0),
        (Tn = Fs()),
        (An = {
          status: "pending",
          value: void 0,
          then: function (l) {
            a.push(l);
          },
        }));
    }
    return (Ko++, t.then(ed, ed), t);
  }
  function ed() {
    if (--Ko === 0 && Sr !== null) {
      An !== null && (An.status = "fulfilled");
      var e = Sr;
      ((Sr = null), (Tn = 0), (An = null));
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function Jy(e, t) {
    var a = [],
      l = {
        status: "pending",
        value: null,
        reason: null,
        then: function (i) {
          a.push(i);
        },
      };
    return (
      e.then(
        function () {
          ((l.status = "fulfilled"), (l.value = t));
          for (var i = 0; i < a.length; i++) (0, a[i])(t);
        },
        function (i) {
          for (l.status = "rejected", l.reason = i, i = 0; i < a.length; i++)
            (0, a[i])(void 0);
        },
      ),
      l
    );
  }
  var td = O.S;
  O.S = function (e, t) {
    (typeof t == "object" &&
      t !== null &&
      typeof t.then == "function" &&
      Ky(e, t),
      td !== null && td(e, t));
  };
  var Jl = k(null);
  function Jo() {
    var e = Jl.current;
    return e !== null ? e : Ie.pooledCache;
  }
  function Vi(e, t) {
    t === null ? K(Jl, Jl.current) : K(Jl, t.pool);
  }
  function ad() {
    var e = Jo();
    return e === null ? null : { parent: yt._currentValue, pool: e };
  }
  var Er = Error(o(460)),
    ld = Error(o(474)),
    Xi = Error(o(542)),
    Fo = { then: function () {} };
  function nd(e) {
    return ((e = e.status), e === "fulfilled" || e === "rejected");
  }
  function Qi() {}
  function rd(e, t, a) {
    switch (
      ((a = e[a]),
      a === void 0 ? e.push(t) : a !== t && (t.then(Qi, Qi), (t = a)),
      t.status)
    ) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw ((e = t.reason), ud(e), e);
      default:
        if (typeof t.status == "string") t.then(Qi, Qi);
        else {
          if (((e = Ie), e !== null && 100 < e.shellSuspendCounter))
            throw Error(o(482));
          ((e = t),
            (e.status = "pending"),
            e.then(
              function (l) {
                if (t.status === "pending") {
                  var i = t;
                  ((i.status = "fulfilled"), (i.value = l));
                }
              },
              function (l) {
                if (t.status === "pending") {
                  var i = t;
                  ((i.status = "rejected"), (i.reason = l));
                }
              },
            ));
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw ((e = t.reason), ud(e), e);
        }
        throw ((xr = t), Er);
    }
  }
  var xr = null;
  function id() {
    if (xr === null) throw Error(o(459));
    var e = xr;
    return ((xr = null), e);
  }
  function ud(e) {
    if (e === Er || e === Xi) throw Error(o(483));
  }
  var rl = !1;
  function Po(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function $o(e, t) {
    ((e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          callbacks: null,
        }));
  }
  function il(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function ul(e, t, a) {
    var l = e.updateQueue;
    if (l === null) return null;
    if (((l = l.shared), (Ze & 2) !== 0)) {
      var i = l.pending;
      return (
        i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
        (l.pending = t),
        (t = Hi(e)),
        Kf(e, null, a),
        t
      );
    }
    return (ji(e, l, t, a), Hi(e));
  }
  function Rr(e, t, a) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (a & 4194048) !== 0))
    ) {
      var l = t.lanes;
      ((l &= e.pendingLanes), (a |= l), (t.lanes = a), Hl(e, a));
    }
  }
  function Wo(e, t) {
    var a = e.updateQueue,
      l = e.alternate;
    if (l !== null && ((l = l.updateQueue), a === l)) {
      var i = null,
        s = null;
      if (((a = a.firstBaseUpdate), a !== null)) {
        do {
          var h = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null,
          };
          (s === null ? (i = s = h) : (s = s.next = h), (a = a.next));
        } while (a !== null);
        s === null ? (i = s = t) : (s = s.next = t);
      } else i = s = t;
      ((a = {
        baseState: l.baseState,
        firstBaseUpdate: i,
        lastBaseUpdate: s,
        shared: l.shared,
        callbacks: l.callbacks,
      }),
        (e.updateQueue = a));
      return;
    }
    ((e = a.lastBaseUpdate),
      e === null ? (a.firstBaseUpdate = t) : (e.next = t),
      (a.lastBaseUpdate = t));
  }
  var Io = !1;
  function wr() {
    if (Io) {
      var e = An;
      if (e !== null) throw e;
    }
  }
  function Tr(e, t, a, l) {
    Io = !1;
    var i = e.updateQueue;
    rl = !1;
    var s = i.firstBaseUpdate,
      h = i.lastBaseUpdate,
      g = i.shared.pending;
    if (g !== null) {
      i.shared.pending = null;
      var S = g,
        N = S.next;
      ((S.next = null), h === null ? (s = N) : (h.next = N), (h = S));
      var Y = e.alternate;
      Y !== null &&
        ((Y = Y.updateQueue),
        (g = Y.lastBaseUpdate),
        g !== h &&
          (g === null ? (Y.firstBaseUpdate = N) : (g.next = N),
          (Y.lastBaseUpdate = S)));
    }
    if (s !== null) {
      var Q = i.baseState;
      ((h = 0), (Y = N = S = null), (g = s));
      do {
        var L = g.lane & -536870913,
          j = L !== g.lane;
        if (j ? (ke & L) === L : (l & L) === L) {
          (L !== 0 && L === Tn && (Io = !0),
            Y !== null &&
              (Y = Y.next =
                {
                  lane: 0,
                  tag: g.tag,
                  payload: g.payload,
                  callback: null,
                  next: null,
                }));
          e: {
            var Se = e,
              ve = g;
            L = t;
            var $e = a;
            switch (ve.tag) {
              case 1:
                if (((Se = ve.payload), typeof Se == "function")) {
                  Q = Se.call($e, Q, L);
                  break e;
                }
                Q = Se;
                break e;
              case 3:
                Se.flags = (Se.flags & -65537) | 128;
              case 0:
                if (
                  ((Se = ve.payload),
                  (L = typeof Se == "function" ? Se.call($e, Q, L) : Se),
                  L == null)
                )
                  break e;
                Q = v({}, Q, L);
                break e;
              case 2:
                rl = !0;
            }
          }
          ((L = g.callback),
            L !== null &&
              ((e.flags |= 64),
              j && (e.flags |= 8192),
              (j = i.callbacks),
              j === null ? (i.callbacks = [L]) : j.push(L)));
        } else
          ((j = {
            lane: L,
            tag: g.tag,
            payload: g.payload,
            callback: g.callback,
            next: null,
          }),
            Y === null ? ((N = Y = j), (S = Q)) : (Y = Y.next = j),
            (h |= L));
        if (((g = g.next), g === null)) {
          if (((g = i.shared.pending), g === null)) break;
          ((j = g),
            (g = j.next),
            (j.next = null),
            (i.lastBaseUpdate = j),
            (i.shared.pending = null));
        }
      } while (!0);
      (Y === null && (S = Q),
        (i.baseState = S),
        (i.firstBaseUpdate = N),
        (i.lastBaseUpdate = Y),
        s === null && (i.shared.lanes = 0),
        (pl |= h),
        (e.lanes = h),
        (e.memoizedState = Q));
    }
  }
  function od(e, t) {
    if (typeof e != "function") throw Error(o(191, e));
    e.call(t);
  }
  function sd(e, t) {
    var a = e.callbacks;
    if (a !== null)
      for (e.callbacks = null, e = 0; e < a.length; e++) od(a[e], t);
  }
  var On = k(null),
    Zi = k(0);
  function cd(e, t) {
    ((e = Fa), K(Zi, e), K(On, t), (Fa = e | t.baseLanes));
  }
  function es() {
    (K(Zi, Fa), K(On, On.current));
  }
  function ts() {
    ((Fa = Zi.current), I(On), I(Zi));
  }
  var ol = 0,
    De = null,
    Fe = null,
    mt = null,
    Ki = !1,
    Cn = !1,
    Fl = !1,
    Ji = 0,
    Ar = 0,
    Mn = null,
    Fy = 0;
  function ct() {
    throw Error(o(321));
  }
  function as(e, t) {
    if (t === null) return !1;
    for (var a = 0; a < t.length && a < e.length; a++)
      if (!Qt(e[a], t[a])) return !1;
    return !0;
  }
  function ls(e, t, a, l, i, s) {
    return (
      (ol = s),
      (De = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (O.H = e === null || e.memoizedState === null ? Kd : Jd),
      (Fl = !1),
      (s = a(l, i)),
      (Fl = !1),
      Cn && (s = dd(t, a, l, i)),
      fd(e),
      s
    );
  }
  function fd(e) {
    O.H = eu;
    var t = Fe !== null && Fe.next !== null;
    if (((ol = 0), (mt = Fe = De = null), (Ki = !1), (Ar = 0), (Mn = null), t))
      throw Error(o(300));
    e === null ||
      bt ||
      ((e = e.dependencies), e !== null && Yi(e) && (bt = !0));
  }
  function dd(e, t, a, l) {
    De = e;
    var i = 0;
    do {
      if ((Cn && (Mn = null), (Ar = 0), (Cn = !1), 25 <= i))
        throw Error(o(301));
      if (((i += 1), (mt = Fe = null), e.updateQueue != null)) {
        var s = e.updateQueue;
        ((s.lastEffect = null),
          (s.events = null),
          (s.stores = null),
          s.memoCache != null && (s.memoCache.index = 0));
      }
      ((O.H = a2), (s = t(a, l)));
    } while (Cn);
    return s;
  }
  function Py() {
    var e = O.H,
      t = e.useState()[0];
    return (
      (t = typeof t.then == "function" ? Or(t) : t),
      (e = e.useState()[0]),
      (Fe !== null ? Fe.memoizedState : null) !== e && (De.flags |= 1024),
      t
    );
  }
  function ns() {
    var e = Ji !== 0;
    return ((Ji = 0), e);
  }
  function rs(e, t, a) {
    ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~a));
  }
  function is(e) {
    if (Ki) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        (t !== null && (t.pending = null), (e = e.next));
      }
      Ki = !1;
    }
    ((ol = 0), (mt = Fe = De = null), (Cn = !1), (Ar = Ji = 0), (Mn = null));
  }
  function jt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (mt === null ? (De.memoizedState = mt = e) : (mt = mt.next = e), mt);
  }
  function pt() {
    if (Fe === null) {
      var e = De.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Fe.next;
    var t = mt === null ? De.memoizedState : mt.next;
    if (t !== null) ((mt = t), (Fe = e));
    else {
      if (e === null)
        throw De.alternate === null ? Error(o(467)) : Error(o(310));
      ((Fe = e),
        (e = {
          memoizedState: Fe.memoizedState,
          baseState: Fe.baseState,
          baseQueue: Fe.baseQueue,
          queue: Fe.queue,
          next: null,
        }),
        mt === null ? (De.memoizedState = mt = e) : (mt = mt.next = e));
    }
    return mt;
  }
  function us() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Or(e) {
    var t = Ar;
    return (
      (Ar += 1),
      Mn === null && (Mn = []),
      (e = rd(Mn, e, t)),
      (t = De),
      (mt === null ? t.memoizedState : mt.next) === null &&
        ((t = t.alternate),
        (O.H = t === null || t.memoizedState === null ? Kd : Jd)),
      e
    );
  }
  function Fi(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Or(e);
      if (e.$$typeof === ee) return At(e);
    }
    throw Error(o(438, String(e)));
  }
  function os(e) {
    var t = null,
      a = De.updateQueue;
    if ((a !== null && (t = a.memoCache), t == null)) {
      var l = De.alternate;
      l !== null &&
        ((l = l.updateQueue),
        l !== null &&
          ((l = l.memoCache),
          l != null &&
            (t = {
              data: l.data.map(function (i) {
                return i.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      a === null && ((a = us()), (De.updateQueue = a)),
      (a.memoCache = t),
      (a = t.data[t.index]),
      a === void 0)
    )
      for (a = t.data[t.index] = Array(e), l = 0; l < e; l++) a[l] = Ue;
    return (t.index++, a);
  }
  function Va(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Pi(e) {
    var t = pt();
    return ss(t, Fe, e);
  }
  function ss(e, t, a) {
    var l = e.queue;
    if (l === null) throw Error(o(311));
    l.lastRenderedReducer = a;
    var i = e.baseQueue,
      s = l.pending;
    if (s !== null) {
      if (i !== null) {
        var h = i.next;
        ((i.next = s.next), (s.next = h));
      }
      ((t.baseQueue = i = s), (l.pending = null));
    }
    if (((s = e.baseState), i === null)) e.memoizedState = s;
    else {
      t = i.next;
      var g = (h = null),
        S = null,
        N = t,
        Y = !1;
      do {
        var Q = N.lane & -536870913;
        if (Q !== N.lane ? (ke & Q) === Q : (ol & Q) === Q) {
          var L = N.revertLane;
          if (L === 0)
            (S !== null &&
              (S = S.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: N.action,
                  hasEagerState: N.hasEagerState,
                  eagerState: N.eagerState,
                  next: null,
                }),
              Q === Tn && (Y = !0));
          else if ((ol & L) === L) {
            ((N = N.next), L === Tn && (Y = !0));
            continue;
          } else
            ((Q = {
              lane: 0,
              revertLane: N.revertLane,
              action: N.action,
              hasEagerState: N.hasEagerState,
              eagerState: N.eagerState,
              next: null,
            }),
              S === null ? ((g = S = Q), (h = s)) : (S = S.next = Q),
              (De.lanes |= L),
              (pl |= L));
          ((Q = N.action),
            Fl && a(s, Q),
            (s = N.hasEagerState ? N.eagerState : a(s, Q)));
        } else
          ((L = {
            lane: Q,
            revertLane: N.revertLane,
            action: N.action,
            hasEagerState: N.hasEagerState,
            eagerState: N.eagerState,
            next: null,
          }),
            S === null ? ((g = S = L), (h = s)) : (S = S.next = L),
            (De.lanes |= Q),
            (pl |= Q));
        N = N.next;
      } while (N !== null && N !== t);
      if (
        (S === null ? (h = s) : (S.next = g),
        !Qt(s, e.memoizedState) && ((bt = !0), Y && ((a = An), a !== null)))
      )
        throw a;
      ((e.memoizedState = s),
        (e.baseState = h),
        (e.baseQueue = S),
        (l.lastRenderedState = s));
    }
    return (i === null && (l.lanes = 0), [e.memoizedState, l.dispatch]);
  }
  function cs(e) {
    var t = pt(),
      a = t.queue;
    if (a === null) throw Error(o(311));
    a.lastRenderedReducer = e;
    var l = a.dispatch,
      i = a.pending,
      s = t.memoizedState;
    if (i !== null) {
      a.pending = null;
      var h = (i = i.next);
      do ((s = e(s, h.action)), (h = h.next));
      while (h !== i);
      (Qt(s, t.memoizedState) || (bt = !0),
        (t.memoizedState = s),
        t.baseQueue === null && (t.baseState = s),
        (a.lastRenderedState = s));
    }
    return [s, l];
  }
  function hd(e, t, a) {
    var l = De,
      i = pt(),
      s = Ve;
    if (s) {
      if (a === void 0) throw Error(o(407));
      a = a();
    } else a = t();
    var h = !Qt((Fe || i).memoizedState, a);
    (h && ((i.memoizedState = a), (bt = !0)), (i = i.queue));
    var g = yd.bind(null, l, i, e);
    if (
      (Cr(2048, 8, g, [e]),
      i.getSnapshot !== t || h || (mt !== null && mt.memoizedState.tag & 1))
    ) {
      if (
        ((l.flags |= 2048),
        _n(9, $i(), pd.bind(null, l, i, a, t), null),
        Ie === null)
      )
        throw Error(o(349));
      s || (ol & 124) !== 0 || md(l, t, a);
    }
    return a;
  }
  function md(e, t, a) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: a }),
      (t = De.updateQueue),
      t === null
        ? ((t = us()), (De.updateQueue = t), (t.stores = [e]))
        : ((a = t.stores), a === null ? (t.stores = [e]) : a.push(e)));
  }
  function pd(e, t, a, l) {
    ((t.value = a), (t.getSnapshot = l), gd(t) && vd(e));
  }
  function yd(e, t, a) {
    return a(function () {
      gd(t) && vd(e);
    });
  }
  function gd(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var a = t();
      return !Qt(e, a);
    } catch {
      return !0;
    }
  }
  function vd(e) {
    var t = En(e, 2);
    t !== null && $t(t, e, 2);
  }
  function fs(e) {
    var t = jt();
    if (typeof e == "function") {
      var a = e;
      if (((e = a()), Fl)) {
        ha(!0);
        try {
          a();
        } finally {
          ha(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = e),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Va,
        lastRenderedState: e,
      }),
      t
    );
  }
  function bd(e, t, a, l) {
    return ((e.baseState = a), ss(e, Fe, typeof l == "function" ? l : Va));
  }
  function $y(e, t, a, l, i) {
    if (Ii(e)) throw Error(o(485));
    if (((e = t.action), e !== null)) {
      var s = {
        payload: i,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (h) {
          s.listeners.push(h);
        },
      };
      (O.T !== null ? a(!0) : (s.isTransition = !1),
        l(s),
        (a = t.pending),
        a === null
          ? ((s.next = t.pending = s), Sd(t, s))
          : ((s.next = a.next), (t.pending = a.next = s)));
    }
  }
  function Sd(e, t) {
    var a = t.action,
      l = t.payload,
      i = e.state;
    if (t.isTransition) {
      var s = O.T,
        h = {};
      O.T = h;
      try {
        var g = a(i, l),
          S = O.S;
        (S !== null && S(h, g), Ed(e, t, g));
      } catch (N) {
        ds(e, t, N);
      } finally {
        O.T = s;
      }
    } else
      try {
        ((s = a(i, l)), Ed(e, t, s));
      } catch (N) {
        ds(e, t, N);
      }
  }
  function Ed(e, t, a) {
    a !== null && typeof a == "object" && typeof a.then == "function"
      ? a.then(
          function (l) {
            xd(e, t, l);
          },
          function (l) {
            return ds(e, t, l);
          },
        )
      : xd(e, t, a);
  }
  function xd(e, t, a) {
    ((t.status = "fulfilled"),
      (t.value = a),
      Rd(t),
      (e.state = a),
      (t = e.pending),
      t !== null &&
        ((a = t.next),
        a === t ? (e.pending = null) : ((a = a.next), (t.next = a), Sd(e, a))));
  }
  function ds(e, t, a) {
    var l = e.pending;
    if (((e.pending = null), l !== null)) {
      l = l.next;
      do ((t.status = "rejected"), (t.reason = a), Rd(t), (t = t.next));
      while (t !== l);
    }
    e.action = null;
  }
  function Rd(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function wd(e, t) {
    return t;
  }
  function Td(e, t) {
    if (Ve) {
      var a = Ie.formState;
      if (a !== null) {
        e: {
          var l = De;
          if (Ve) {
            if (ut) {
              t: {
                for (var i = ut, s = Ra; i.nodeType !== 8; ) {
                  if (!s) {
                    i = null;
                    break t;
                  }
                  if (((i = ya(i.nextSibling)), i === null)) {
                    i = null;
                    break t;
                  }
                }
                ((s = i.data), (i = s === "F!" || s === "F" ? i : null));
              }
              if (i) {
                ((ut = ya(i.nextSibling)), (l = i.data === "F!"));
                break e;
              }
            }
            Ql(l);
          }
          l = !1;
        }
        l && (t = a[0]);
      }
    }
    return (
      (a = jt()),
      (a.memoizedState = a.baseState = t),
      (l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: wd,
        lastRenderedState: t,
      }),
      (a.queue = l),
      (a = Xd.bind(null, De, l)),
      (l.dispatch = a),
      (l = fs(!1)),
      (s = gs.bind(null, De, !1, l.queue)),
      (l = jt()),
      (i = { state: t, dispatch: null, action: e, pending: null }),
      (l.queue = i),
      (a = $y.bind(null, De, i, s, a)),
      (i.dispatch = a),
      (l.memoizedState = e),
      [t, a, !1]
    );
  }
  function Ad(e) {
    var t = pt();
    return Od(t, Fe, e);
  }
  function Od(e, t, a) {
    if (
      ((t = ss(e, t, wd)[0]),
      (e = Pi(Va)[0]),
      typeof t == "object" && t !== null && typeof t.then == "function")
    )
      try {
        var l = Or(t);
      } catch (h) {
        throw h === Er ? Xi : h;
      }
    else l = t;
    t = pt();
    var i = t.queue,
      s = i.dispatch;
    return (
      a !== t.memoizedState &&
        ((De.flags |= 2048), _n(9, $i(), Wy.bind(null, i, a), null)),
      [l, s, e]
    );
  }
  function Wy(e, t) {
    e.action = t;
  }
  function Cd(e) {
    var t = pt(),
      a = Fe;
    if (a !== null) return Od(t, a, e);
    (pt(), (t = t.memoizedState), (a = pt()));
    var l = a.queue.dispatch;
    return ((a.memoizedState = e), [t, l, !1]);
  }
  function _n(e, t, a, l) {
    return (
      (e = { tag: e, create: a, deps: l, inst: t, next: null }),
      (t = De.updateQueue),
      t === null && ((t = us()), (De.updateQueue = t)),
      (a = t.lastEffect),
      a === null
        ? (t.lastEffect = e.next = e)
        : ((l = a.next), (a.next = e), (e.next = l), (t.lastEffect = e)),
      e
    );
  }
  function $i() {
    return { destroy: void 0, resource: void 0 };
  }
  function Md() {
    return pt().memoizedState;
  }
  function Wi(e, t, a, l) {
    var i = jt();
    ((l = l === void 0 ? null : l),
      (De.flags |= e),
      (i.memoizedState = _n(1 | t, $i(), a, l)));
  }
  function Cr(e, t, a, l) {
    var i = pt();
    l = l === void 0 ? null : l;
    var s = i.memoizedState.inst;
    Fe !== null && l !== null && as(l, Fe.memoizedState.deps)
      ? (i.memoizedState = _n(t, s, a, l))
      : ((De.flags |= e), (i.memoizedState = _n(1 | t, s, a, l)));
  }
  function _d(e, t) {
    Wi(8390656, 8, e, t);
  }
  function Dd(e, t) {
    Cr(2048, 8, e, t);
  }
  function zd(e, t) {
    return Cr(4, 2, e, t);
  }
  function Nd(e, t) {
    return Cr(4, 4, e, t);
  }
  function Ud(e, t) {
    if (typeof t == "function") {
      e = e();
      var a = t(e);
      return function () {
        typeof a == "function" ? a() : t(null);
      };
    }
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function Ld(e, t, a) {
    ((a = a != null ? a.concat([e]) : null), Cr(4, 4, Ud.bind(null, t, e), a));
  }
  function hs() {}
  function jd(e, t) {
    var a = pt();
    t = t === void 0 ? null : t;
    var l = a.memoizedState;
    return t !== null && as(t, l[1]) ? l[0] : ((a.memoizedState = [e, t]), e);
  }
  function Hd(e, t) {
    var a = pt();
    t = t === void 0 ? null : t;
    var l = a.memoizedState;
    if (t !== null && as(t, l[1])) return l[0];
    if (((l = e()), Fl)) {
      ha(!0);
      try {
        e();
      } finally {
        ha(!1);
      }
    }
    return ((a.memoizedState = [l, t]), l);
  }
  function ms(e, t, a) {
    return a === void 0 || (ol & 1073741824) !== 0
      ? (e.memoizedState = t)
      : ((e.memoizedState = a), (e = kh()), (De.lanes |= e), (pl |= e), a);
  }
  function Bd(e, t, a, l) {
    return Qt(a, t)
      ? a
      : On.current !== null
        ? ((e = ms(e, a, l)), Qt(e, t) || (bt = !0), e)
        : (ol & 42) === 0
          ? ((bt = !0), (e.memoizedState = a))
          : ((e = kh()), (De.lanes |= e), (pl |= e), t);
  }
  function qd(e, t, a, l, i) {
    var s = P.p;
    P.p = s !== 0 && 8 > s ? s : 8;
    var h = O.T,
      g = {};
    ((O.T = g), gs(e, !1, t, a));
    try {
      var S = i(),
        N = O.S;
      if (
        (N !== null && N(g, S),
        S !== null && typeof S == "object" && typeof S.then == "function")
      ) {
        var Y = Jy(S, l);
        Mr(e, t, Y, Pt(e));
      } else Mr(e, t, l, Pt(e));
    } catch (Q) {
      Mr(e, t, { then: function () {}, status: "rejected", reason: Q }, Pt());
    } finally {
      ((P.p = s), (O.T = h));
    }
  }
  function Iy() {}
  function ps(e, t, a, l) {
    if (e.tag !== 5) throw Error(o(476));
    var i = kd(e).queue;
    qd(
      e,
      i,
      t,
      G,
      a === null
        ? Iy
        : function () {
            return (Yd(e), a(l));
          },
    );
  }
  function kd(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: G,
      baseState: G,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Va,
        lastRenderedState: G,
      },
      next: null,
    };
    var a = {};
    return (
      (t.next = {
        memoizedState: a,
        baseState: a,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Va,
          lastRenderedState: a,
        },
        next: null,
      }),
      (e.memoizedState = t),
      (e = e.alternate),
      e !== null && (e.memoizedState = t),
      t
    );
  }
  function Yd(e) {
    var t = kd(e).next.queue;
    Mr(e, t, {}, Pt());
  }
  function ys() {
    return At(Kr);
  }
  function Gd() {
    return pt().memoizedState;
  }
  function Vd() {
    return pt().memoizedState;
  }
  function e2(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var a = Pt();
          e = il(a);
          var l = ul(t, e, a);
          (l !== null && ($t(l, t, a), Rr(l, t, a)),
            (t = { cache: Zo() }),
            (e.payload = t));
          return;
      }
      t = t.return;
    }
  }
  function t2(e, t, a) {
    var l = Pt();
    ((a = {
      lane: l,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      Ii(e)
        ? Qd(t, a)
        : ((a = jo(e, t, a, l)), a !== null && ($t(a, e, l), Zd(a, t, l))));
  }
  function Xd(e, t, a) {
    var l = Pt();
    Mr(e, t, a, l);
  }
  function Mr(e, t, a, l) {
    var i = {
      lane: l,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (Ii(e)) Qd(t, i);
    else {
      var s = e.alternate;
      if (
        e.lanes === 0 &&
        (s === null || s.lanes === 0) &&
        ((s = t.lastRenderedReducer), s !== null)
      )
        try {
          var h = t.lastRenderedState,
            g = s(h, a);
          if (((i.hasEagerState = !0), (i.eagerState = g), Qt(g, h)))
            return (ji(e, t, i, 0), Ie === null && Li(), !1);
        } catch {
        } finally {
        }
      if (((a = jo(e, t, i, l)), a !== null))
        return ($t(a, e, l), Zd(a, t, l), !0);
    }
    return !1;
  }
  function gs(e, t, a, l) {
    if (
      ((l = {
        lane: 2,
        revertLane: Fs(),
        action: l,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Ii(e))
    ) {
      if (t) throw Error(o(479));
    } else ((t = jo(e, a, l, 2)), t !== null && $t(t, e, 2));
  }
  function Ii(e) {
    var t = e.alternate;
    return e === De || (t !== null && t === De);
  }
  function Qd(e, t) {
    Cn = Ki = !0;
    var a = e.pending;
    (a === null ? (t.next = t) : ((t.next = a.next), (a.next = t)),
      (e.pending = t));
  }
  function Zd(e, t, a) {
    if ((a & 4194048) !== 0) {
      var l = t.lanes;
      ((l &= e.pendingLanes), (a |= l), (t.lanes = a), Hl(e, a));
    }
  }
  var eu = {
      readContext: At,
      use: Fi,
      useCallback: ct,
      useContext: ct,
      useEffect: ct,
      useImperativeHandle: ct,
      useLayoutEffect: ct,
      useInsertionEffect: ct,
      useMemo: ct,
      useReducer: ct,
      useRef: ct,
      useState: ct,
      useDebugValue: ct,
      useDeferredValue: ct,
      useTransition: ct,
      useSyncExternalStore: ct,
      useId: ct,
      useHostTransitionStatus: ct,
      useFormState: ct,
      useActionState: ct,
      useOptimistic: ct,
      useMemoCache: ct,
      useCacheRefresh: ct,
    },
    Kd = {
      readContext: At,
      use: Fi,
      useCallback: function (e, t) {
        return ((jt().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: At,
      useEffect: _d,
      useImperativeHandle: function (e, t, a) {
        ((a = a != null ? a.concat([e]) : null),
          Wi(4194308, 4, Ud.bind(null, t, e), a));
      },
      useLayoutEffect: function (e, t) {
        return Wi(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        Wi(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var a = jt();
        t = t === void 0 ? null : t;
        var l = e();
        if (Fl) {
          ha(!0);
          try {
            e();
          } finally {
            ha(!1);
          }
        }
        return ((a.memoizedState = [l, t]), l);
      },
      useReducer: function (e, t, a) {
        var l = jt();
        if (a !== void 0) {
          var i = a(t);
          if (Fl) {
            ha(!0);
            try {
              a(t);
            } finally {
              ha(!1);
            }
          }
        } else i = t;
        return (
          (l.memoizedState = l.baseState = i),
          (e = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: i,
          }),
          (l.queue = e),
          (e = e.dispatch = t2.bind(null, De, e)),
          [l.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = jt();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: function (e) {
        e = fs(e);
        var t = e.queue,
          a = Xd.bind(null, De, t);
        return ((t.dispatch = a), [e.memoizedState, a]);
      },
      useDebugValue: hs,
      useDeferredValue: function (e, t) {
        var a = jt();
        return ms(a, e, t);
      },
      useTransition: function () {
        var e = fs(!1);
        return (
          (e = qd.bind(null, De, e.queue, !0, !1)),
          (jt().memoizedState = e),
          [!1, e]
        );
      },
      useSyncExternalStore: function (e, t, a) {
        var l = De,
          i = jt();
        if (Ve) {
          if (a === void 0) throw Error(o(407));
          a = a();
        } else {
          if (((a = t()), Ie === null)) throw Error(o(349));
          (ke & 124) !== 0 || md(l, t, a);
        }
        i.memoizedState = a;
        var s = { value: a, getSnapshot: t };
        return (
          (i.queue = s),
          _d(yd.bind(null, l, s, e), [e]),
          (l.flags |= 2048),
          _n(9, $i(), pd.bind(null, l, s, a, t), null),
          a
        );
      },
      useId: function () {
        var e = jt(),
          t = Ie.identifierPrefix;
        if (Ve) {
          var a = ka,
            l = qa;
          ((a = (l & ~(1 << (32 - xt(l) - 1))).toString(32) + a),
            (t = "«" + t + "R" + a),
            (a = Ji++),
            0 < a && (t += "H" + a.toString(32)),
            (t += "»"));
        } else ((a = Fy++), (t = "«" + t + "r" + a.toString(32) + "»"));
        return (e.memoizedState = t);
      },
      useHostTransitionStatus: ys,
      useFormState: Td,
      useActionState: Td,
      useOptimistic: function (e) {
        var t = jt();
        t.memoizedState = t.baseState = e;
        var a = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (t.queue = a),
          (t = gs.bind(null, De, !0, a)),
          (a.dispatch = t),
          [e, t]
        );
      },
      useMemoCache: os,
      useCacheRefresh: function () {
        return (jt().memoizedState = e2.bind(null, De));
      },
    },
    Jd = {
      readContext: At,
      use: Fi,
      useCallback: jd,
      useContext: At,
      useEffect: Dd,
      useImperativeHandle: Ld,
      useInsertionEffect: zd,
      useLayoutEffect: Nd,
      useMemo: Hd,
      useReducer: Pi,
      useRef: Md,
      useState: function () {
        return Pi(Va);
      },
      useDebugValue: hs,
      useDeferredValue: function (e, t) {
        var a = pt();
        return Bd(a, Fe.memoizedState, e, t);
      },
      useTransition: function () {
        var e = Pi(Va)[0],
          t = pt().memoizedState;
        return [typeof e == "boolean" ? e : Or(e), t];
      },
      useSyncExternalStore: hd,
      useId: Gd,
      useHostTransitionStatus: ys,
      useFormState: Ad,
      useActionState: Ad,
      useOptimistic: function (e, t) {
        var a = pt();
        return bd(a, Fe, e, t);
      },
      useMemoCache: os,
      useCacheRefresh: Vd,
    },
    a2 = {
      readContext: At,
      use: Fi,
      useCallback: jd,
      useContext: At,
      useEffect: Dd,
      useImperativeHandle: Ld,
      useInsertionEffect: zd,
      useLayoutEffect: Nd,
      useMemo: Hd,
      useReducer: cs,
      useRef: Md,
      useState: function () {
        return cs(Va);
      },
      useDebugValue: hs,
      useDeferredValue: function (e, t) {
        var a = pt();
        return Fe === null ? ms(a, e, t) : Bd(a, Fe.memoizedState, e, t);
      },
      useTransition: function () {
        var e = cs(Va)[0],
          t = pt().memoizedState;
        return [typeof e == "boolean" ? e : Or(e), t];
      },
      useSyncExternalStore: hd,
      useId: Gd,
      useHostTransitionStatus: ys,
      useFormState: Cd,
      useActionState: Cd,
      useOptimistic: function (e, t) {
        var a = pt();
        return Fe !== null
          ? bd(a, Fe, e, t)
          : ((a.baseState = e), [e, a.queue.dispatch]);
      },
      useMemoCache: os,
      useCacheRefresh: Vd,
    },
    Dn = null,
    _r = 0;
  function tu(e) {
    var t = _r;
    return ((_r += 1), Dn === null && (Dn = []), rd(Dn, e, t));
  }
  function Dr(e, t) {
    ((t = t.props.ref), (e.ref = t !== void 0 ? t : null));
  }
  function au(e, t) {
    throw t.$$typeof === b
      ? Error(o(525))
      : ((e = Object.prototype.toString.call(t)),
        Error(
          o(
            31,
            e === "[object Object]"
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : e,
          ),
        ));
  }
  function Fd(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Pd(e) {
    function t(A, R) {
      if (e) {
        var _ = A.deletions;
        _ === null ? ((A.deletions = [R]), (A.flags |= 16)) : _.push(R);
      }
    }
    function a(A, R) {
      if (!e) return null;
      for (; R !== null; ) (t(A, R), (R = R.sibling));
      return null;
    }
    function l(A) {
      for (var R = new Map(); A !== null; )
        (A.key !== null ? R.set(A.key, A) : R.set(A.index, A), (A = A.sibling));
      return R;
    }
    function i(A, R) {
      return ((A = Ba(A, R)), (A.index = 0), (A.sibling = null), A);
    }
    function s(A, R, _) {
      return (
        (A.index = _),
        e
          ? ((_ = A.alternate),
            _ !== null
              ? ((_ = _.index), _ < R ? ((A.flags |= 67108866), R) : _)
              : ((A.flags |= 67108866), R))
          : ((A.flags |= 1048576), R)
      );
    }
    function h(A) {
      return (e && A.alternate === null && (A.flags |= 67108866), A);
    }
    function g(A, R, _, X) {
      return R === null || R.tag !== 6
        ? ((R = Bo(_, A.mode, X)), (R.return = A), R)
        : ((R = i(R, _)), (R.return = A), R);
    }
    function S(A, R, _, X) {
      var re = _.type;
      return re === w
        ? Y(A, R, _.props.children, X, _.key)
        : R !== null &&
            (R.elementType === re ||
              (typeof re == "object" &&
                re !== null &&
                re.$$typeof === te &&
                Fd(re) === R.type))
          ? ((R = i(R, _.props)), Dr(R, _), (R.return = A), R)
          : ((R = Bi(_.type, _.key, _.props, null, A.mode, X)),
            Dr(R, _),
            (R.return = A),
            R);
    }
    function N(A, R, _, X) {
      return R === null ||
        R.tag !== 4 ||
        R.stateNode.containerInfo !== _.containerInfo ||
        R.stateNode.implementation !== _.implementation
        ? ((R = qo(_, A.mode, X)), (R.return = A), R)
        : ((R = i(R, _.children || [])), (R.return = A), R);
    }
    function Y(A, R, _, X, re) {
      return R === null || R.tag !== 7
        ? ((R = Yl(_, A.mode, X, re)), (R.return = A), R)
        : ((R = i(R, _)), (R.return = A), R);
    }
    function Q(A, R, _) {
      if (
        (typeof R == "string" && R !== "") ||
        typeof R == "number" ||
        typeof R == "bigint"
      )
        return ((R = Bo("" + R, A.mode, _)), (R.return = A), R);
      if (typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case T:
            return (
              (_ = Bi(R.type, R.key, R.props, null, A.mode, _)),
              Dr(_, R),
              (_.return = A),
              _
            );
          case U:
            return ((R = qo(R, A.mode, _)), (R.return = A), R);
          case te:
            var X = R._init;
            return ((R = X(R._payload)), Q(A, R, _));
        }
        if (_e(R) || Be(R))
          return ((R = Yl(R, A.mode, _, null)), (R.return = A), R);
        if (typeof R.then == "function") return Q(A, tu(R), _);
        if (R.$$typeof === ee) return Q(A, Gi(A, R), _);
        au(A, R);
      }
      return null;
    }
    function L(A, R, _, X) {
      var re = R !== null ? R.key : null;
      if (
        (typeof _ == "string" && _ !== "") ||
        typeof _ == "number" ||
        typeof _ == "bigint"
      )
        return re !== null ? null : g(A, R, "" + _, X);
      if (typeof _ == "object" && _ !== null) {
        switch (_.$$typeof) {
          case T:
            return _.key === re ? S(A, R, _, X) : null;
          case U:
            return _.key === re ? N(A, R, _, X) : null;
          case te:
            return ((re = _._init), (_ = re(_._payload)), L(A, R, _, X));
        }
        if (_e(_) || Be(_)) return re !== null ? null : Y(A, R, _, X, null);
        if (typeof _.then == "function") return L(A, R, tu(_), X);
        if (_.$$typeof === ee) return L(A, R, Gi(A, _), X);
        au(A, _);
      }
      return null;
    }
    function j(A, R, _, X, re) {
      if (
        (typeof X == "string" && X !== "") ||
        typeof X == "number" ||
        typeof X == "bigint"
      )
        return ((A = A.get(_) || null), g(R, A, "" + X, re));
      if (typeof X == "object" && X !== null) {
        switch (X.$$typeof) {
          case T:
            return (
              (A = A.get(X.key === null ? _ : X.key) || null),
              S(R, A, X, re)
            );
          case U:
            return (
              (A = A.get(X.key === null ? _ : X.key) || null),
              N(R, A, X, re)
            );
          case te:
            var Ne = X._init;
            return ((X = Ne(X._payload)), j(A, R, _, X, re));
        }
        if (_e(X) || Be(X))
          return ((A = A.get(_) || null), Y(R, A, X, re, null));
        if (typeof X.then == "function") return j(A, R, _, tu(X), re);
        if (X.$$typeof === ee) return j(A, R, _, Gi(R, X), re);
        au(R, X);
      }
      return null;
    }
    function Se(A, R, _, X) {
      for (
        var re = null, Ne = null, me = R, be = (R = 0), Et = null;
        me !== null && be < _.length;
        be++
      ) {
        me.index > be ? ((Et = me), (me = null)) : (Et = me.sibling);
        var Ye = L(A, me, _[be], X);
        if (Ye === null) {
          me === null && (me = Et);
          break;
        }
        (e && me && Ye.alternate === null && t(A, me),
          (R = s(Ye, R, be)),
          Ne === null ? (re = Ye) : (Ne.sibling = Ye),
          (Ne = Ye),
          (me = Et));
      }
      if (be === _.length) return (a(A, me), Ve && Vl(A, be), re);
      if (me === null) {
        for (; be < _.length; be++)
          ((me = Q(A, _[be], X)),
            me !== null &&
              ((R = s(me, R, be)),
              Ne === null ? (re = me) : (Ne.sibling = me),
              (Ne = me)));
        return (Ve && Vl(A, be), re);
      }
      for (me = l(me); be < _.length; be++)
        ((Et = j(me, A, be, _[be], X)),
          Et !== null &&
            (e &&
              Et.alternate !== null &&
              me.delete(Et.key === null ? be : Et.key),
            (R = s(Et, R, be)),
            Ne === null ? (re = Et) : (Ne.sibling = Et),
            (Ne = Et)));
      return (
        e &&
          me.forEach(function (wl) {
            return t(A, wl);
          }),
        Ve && Vl(A, be),
        re
      );
    }
    function ve(A, R, _, X) {
      if (_ == null) throw Error(o(151));
      for (
        var re = null,
          Ne = null,
          me = R,
          be = (R = 0),
          Et = null,
          Ye = _.next();
        me !== null && !Ye.done;
        be++, Ye = _.next()
      ) {
        me.index > be ? ((Et = me), (me = null)) : (Et = me.sibling);
        var wl = L(A, me, Ye.value, X);
        if (wl === null) {
          me === null && (me = Et);
          break;
        }
        (e && me && wl.alternate === null && t(A, me),
          (R = s(wl, R, be)),
          Ne === null ? (re = wl) : (Ne.sibling = wl),
          (Ne = wl),
          (me = Et));
      }
      if (Ye.done) return (a(A, me), Ve && Vl(A, be), re);
      if (me === null) {
        for (; !Ye.done; be++, Ye = _.next())
          ((Ye = Q(A, Ye.value, X)),
            Ye !== null &&
              ((R = s(Ye, R, be)),
              Ne === null ? (re = Ye) : (Ne.sibling = Ye),
              (Ne = Ye)));
        return (Ve && Vl(A, be), re);
      }
      for (me = l(me); !Ye.done; be++, Ye = _.next())
        ((Ye = j(me, A, be, Ye.value, X)),
          Ye !== null &&
            (e &&
              Ye.alternate !== null &&
              me.delete(Ye.key === null ? be : Ye.key),
            (R = s(Ye, R, be)),
            Ne === null ? (re = Ye) : (Ne.sibling = Ye),
            (Ne = Ye)));
      return (
        e &&
          me.forEach(function (l1) {
            return t(A, l1);
          }),
        Ve && Vl(A, be),
        re
      );
    }
    function $e(A, R, _, X) {
      if (
        (typeof _ == "object" &&
          _ !== null &&
          _.type === w &&
          _.key === null &&
          (_ = _.props.children),
        typeof _ == "object" && _ !== null)
      ) {
        switch (_.$$typeof) {
          case T:
            e: {
              for (var re = _.key; R !== null; ) {
                if (R.key === re) {
                  if (((re = _.type), re === w)) {
                    if (R.tag === 7) {
                      (a(A, R.sibling),
                        (X = i(R, _.props.children)),
                        (X.return = A),
                        (A = X));
                      break e;
                    }
                  } else if (
                    R.elementType === re ||
                    (typeof re == "object" &&
                      re !== null &&
                      re.$$typeof === te &&
                      Fd(re) === R.type)
                  ) {
                    (a(A, R.sibling),
                      (X = i(R, _.props)),
                      Dr(X, _),
                      (X.return = A),
                      (A = X));
                    break e;
                  }
                  a(A, R);
                  break;
                } else t(A, R);
                R = R.sibling;
              }
              _.type === w
                ? ((X = Yl(_.props.children, A.mode, X, _.key)),
                  (X.return = A),
                  (A = X))
                : ((X = Bi(_.type, _.key, _.props, null, A.mode, X)),
                  Dr(X, _),
                  (X.return = A),
                  (A = X));
            }
            return h(A);
          case U:
            e: {
              for (re = _.key; R !== null; ) {
                if (R.key === re)
                  if (
                    R.tag === 4 &&
                    R.stateNode.containerInfo === _.containerInfo &&
                    R.stateNode.implementation === _.implementation
                  ) {
                    (a(A, R.sibling),
                      (X = i(R, _.children || [])),
                      (X.return = A),
                      (A = X));
                    break e;
                  } else {
                    a(A, R);
                    break;
                  }
                else t(A, R);
                R = R.sibling;
              }
              ((X = qo(_, A.mode, X)), (X.return = A), (A = X));
            }
            return h(A);
          case te:
            return ((re = _._init), (_ = re(_._payload)), $e(A, R, _, X));
        }
        if (_e(_)) return Se(A, R, _, X);
        if (Be(_)) {
          if (((re = Be(_)), typeof re != "function")) throw Error(o(150));
          return ((_ = re.call(_)), ve(A, R, _, X));
        }
        if (typeof _.then == "function") return $e(A, R, tu(_), X);
        if (_.$$typeof === ee) return $e(A, R, Gi(A, _), X);
        au(A, _);
      }
      return (typeof _ == "string" && _ !== "") ||
        typeof _ == "number" ||
        typeof _ == "bigint"
        ? ((_ = "" + _),
          R !== null && R.tag === 6
            ? (a(A, R.sibling), (X = i(R, _)), (X.return = A), (A = X))
            : (a(A, R), (X = Bo(_, A.mode, X)), (X.return = A), (A = X)),
          h(A))
        : a(A, R);
    }
    return function (A, R, _, X) {
      try {
        _r = 0;
        var re = $e(A, R, _, X);
        return ((Dn = null), re);
      } catch (me) {
        if (me === Er || me === Xi) throw me;
        var Ne = Zt(29, me, null, A.mode);
        return ((Ne.lanes = X), (Ne.return = A), Ne);
      } finally {
      }
    };
  }
  var zn = Pd(!0),
    $d = Pd(!1),
    ia = k(null),
    wa = null;
  function sl(e) {
    var t = e.alternate;
    (K(gt, gt.current & 1),
      K(ia, e),
      wa === null &&
        (t === null || On.current !== null || t.memoizedState !== null) &&
        (wa = e));
  }
  function Wd(e) {
    if (e.tag === 22) {
      if ((K(gt, gt.current), K(ia, e), wa === null)) {
        var t = e.alternate;
        t !== null && t.memoizedState !== null && (wa = e);
      }
    } else cl();
  }
  function cl() {
    (K(gt, gt.current), K(ia, ia.current));
  }
  function Xa(e) {
    (I(ia), wa === e && (wa = null), I(gt));
  }
  var gt = k(0);
  function lu(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var a = t.memoizedState;
        if (
          a !== null &&
          ((a = a.dehydrated), a === null || a.data === "$?" || uc(a))
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        ((t.child.return = t), (t = t.child));
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
    return null;
  }
  function vs(e, t, a, l) {
    ((t = e.memoizedState),
      (a = a(l, t)),
      (a = a == null ? t : v({}, t, a)),
      (e.memoizedState = a),
      e.lanes === 0 && (e.updateQueue.baseState = a));
  }
  var bs = {
    enqueueSetState: function (e, t, a) {
      e = e._reactInternals;
      var l = Pt(),
        i = il(l);
      ((i.payload = t),
        a != null && (i.callback = a),
        (t = ul(e, i, l)),
        t !== null && ($t(t, e, l), Rr(t, e, l)));
    },
    enqueueReplaceState: function (e, t, a) {
      e = e._reactInternals;
      var l = Pt(),
        i = il(l);
      ((i.tag = 1),
        (i.payload = t),
        a != null && (i.callback = a),
        (t = ul(e, i, l)),
        t !== null && ($t(t, e, l), Rr(t, e, l)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var a = Pt(),
        l = il(a);
      ((l.tag = 2),
        t != null && (l.callback = t),
        (t = ul(e, l, a)),
        t !== null && ($t(t, e, a), Rr(t, e, a)));
    },
  };
  function Id(e, t, a, l, i, s, h) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(l, s, h)
        : t.prototype && t.prototype.isPureReactComponent
          ? !hr(a, l) || !hr(i, s)
          : !0
    );
  }
  function eh(e, t, a, l) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(a, l),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(a, l),
      t.state !== e && bs.enqueueReplaceState(t, t.state, null));
  }
  function Pl(e, t) {
    var a = t;
    if ("ref" in t) {
      a = {};
      for (var l in t) l !== "ref" && (a[l] = t[l]);
    }
    if ((e = e.defaultProps)) {
      a === t && (a = v({}, a));
      for (var i in e) a[i] === void 0 && (a[i] = e[i]);
    }
    return a;
  }
  var nu =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var t = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof e == "object" &&
                e !== null &&
                typeof e.message == "string"
                  ? String(e.message)
                  : String(e),
              error: e,
            });
            if (!window.dispatchEvent(t)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", e);
            return;
          }
          console.error(e);
        };
  function th(e) {
    nu(e);
  }
  function ah(e) {
    console.error(e);
  }
  function lh(e) {
    nu(e);
  }
  function ru(e, t) {
    try {
      var a = e.onUncaughtError;
      a(t.value, { componentStack: t.stack });
    } catch (l) {
      setTimeout(function () {
        throw l;
      });
    }
  }
  function nh(e, t, a) {
    try {
      var l = e.onCaughtError;
      l(a.value, {
        componentStack: a.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null,
      });
    } catch (i) {
      setTimeout(function () {
        throw i;
      });
    }
  }
  function Ss(e, t, a) {
    return (
      (a = il(a)),
      (a.tag = 3),
      (a.payload = { element: null }),
      (a.callback = function () {
        ru(e, t);
      }),
      a
    );
  }
  function rh(e) {
    return ((e = il(e)), (e.tag = 3), e);
  }
  function ih(e, t, a, l) {
    var i = a.type.getDerivedStateFromError;
    if (typeof i == "function") {
      var s = l.value;
      ((e.payload = function () {
        return i(s);
      }),
        (e.callback = function () {
          nh(t, a, l);
        }));
    }
    var h = a.stateNode;
    h !== null &&
      typeof h.componentDidCatch == "function" &&
      (e.callback = function () {
        (nh(t, a, l),
          typeof i != "function" &&
            (yl === null ? (yl = new Set([this])) : yl.add(this)));
        var g = l.stack;
        this.componentDidCatch(l.value, {
          componentStack: g !== null ? g : "",
        });
      });
  }
  function l2(e, t, a, l, i) {
    if (
      ((a.flags |= 32768),
      l !== null && typeof l == "object" && typeof l.then == "function")
    ) {
      if (
        ((t = a.alternate),
        t !== null && vr(t, a, i, !0),
        (a = ia.current),
        a !== null)
      ) {
        switch (a.tag) {
          case 13:
            return (
              wa === null ? Xs() : a.alternate === null && ot === 0 && (ot = 3),
              (a.flags &= -257),
              (a.flags |= 65536),
              (a.lanes = i),
              l === Fo
                ? (a.flags |= 16384)
                : ((t = a.updateQueue),
                  t === null ? (a.updateQueue = new Set([l])) : t.add(l),
                  Zs(e, l, i)),
              !1
            );
          case 22:
            return (
              (a.flags |= 65536),
              l === Fo
                ? (a.flags |= 16384)
                : ((t = a.updateQueue),
                  t === null
                    ? ((t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([l]),
                      }),
                      (a.updateQueue = t))
                    : ((a = t.retryQueue),
                      a === null ? (t.retryQueue = new Set([l])) : a.add(l)),
                  Zs(e, l, i)),
              !1
            );
        }
        throw Error(o(435, a.tag));
      }
      return (Zs(e, l, i), Xs(), !1);
    }
    if (Ve)
      return (
        (t = ia.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = i),
            l !== Go && ((e = Error(o(422), { cause: l })), gr(aa(e, a))))
          : (l !== Go && ((t = Error(o(423), { cause: l })), gr(aa(t, a))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (i &= -i),
            (e.lanes |= i),
            (l = aa(l, a)),
            (i = Ss(e.stateNode, l, i)),
            Wo(e, i),
            ot !== 4 && (ot = 2)),
        !1
      );
    var s = Error(o(520), { cause: l });
    if (
      ((s = aa(s, a)),
      Br === null ? (Br = [s]) : Br.push(s),
      ot !== 4 && (ot = 2),
      t === null)
    )
      return !0;
    ((l = aa(l, a)), (a = t));
    do {
      switch (a.tag) {
        case 3:
          return (
            (a.flags |= 65536),
            (e = i & -i),
            (a.lanes |= e),
            (e = Ss(a.stateNode, l, e)),
            Wo(a, e),
            !1
          );
        case 1:
          if (
            ((t = a.type),
            (s = a.stateNode),
            (a.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == "function" ||
                (s !== null &&
                  typeof s.componentDidCatch == "function" &&
                  (yl === null || !yl.has(s)))))
          )
            return (
              (a.flags |= 65536),
              (i &= -i),
              (a.lanes |= i),
              (i = rh(i)),
              ih(i, e, a, l),
              Wo(a, i),
              !1
            );
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var uh = Error(o(461)),
    bt = !1;
  function Rt(e, t, a, l) {
    t.child = e === null ? $d(t, null, a, l) : zn(t, e.child, a, l);
  }
  function oh(e, t, a, l, i) {
    a = a.render;
    var s = t.ref;
    if ("ref" in l) {
      var h = {};
      for (var g in l) g !== "ref" && (h[g] = l[g]);
    } else h = l;
    return (
      Kl(t),
      (l = ls(e, t, a, h, s, i)),
      (g = ns()),
      e !== null && !bt
        ? (rs(e, t, i), Qa(e, t, i))
        : (Ve && g && ko(t), (t.flags |= 1), Rt(e, t, l, i), t.child)
    );
  }
  function sh(e, t, a, l, i) {
    if (e === null) {
      var s = a.type;
      return typeof s == "function" &&
        !Ho(s) &&
        s.defaultProps === void 0 &&
        a.compare === null
        ? ((t.tag = 15), (t.type = s), ch(e, t, s, l, i))
        : ((e = Bi(a.type, null, l, t, t.mode, i)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((s = e.child), !Cs(e, i))) {
      var h = s.memoizedProps;
      if (
        ((a = a.compare), (a = a !== null ? a : hr), a(h, l) && e.ref === t.ref)
      )
        return Qa(e, t, i);
    }
    return (
      (t.flags |= 1),
      (e = Ba(s, l)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function ch(e, t, a, l, i) {
    if (e !== null) {
      var s = e.memoizedProps;
      if (hr(s, l) && e.ref === t.ref)
        if (((bt = !1), (t.pendingProps = l = s), Cs(e, i)))
          (e.flags & 131072) !== 0 && (bt = !0);
        else return ((t.lanes = e.lanes), Qa(e, t, i));
    }
    return Es(e, t, a, l, i);
  }
  function fh(e, t, a) {
    var l = t.pendingProps,
      i = l.children,
      s = e !== null ? e.memoizedState : null;
    if (l.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (((l = s !== null ? s.baseLanes | a : a), e !== null)) {
          for (i = t.child = e.child, s = 0; i !== null; )
            ((s = s | i.lanes | i.childLanes), (i = i.sibling));
          t.childLanes = s & ~l;
        } else ((t.childLanes = 0), (t.child = null));
        return dh(e, t, l, a);
      }
      if ((a & 536870912) !== 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && Vi(t, s !== null ? s.cachePool : null),
          s !== null ? cd(t, s) : es(),
          Wd(t));
      else
        return (
          (t.lanes = t.childLanes = 536870912),
          dh(e, t, s !== null ? s.baseLanes | a : a, a)
        );
    } else
      s !== null
        ? (Vi(t, s.cachePool), cd(t, s), cl(), (t.memoizedState = null))
        : (e !== null && Vi(t, null), es(), cl());
    return (Rt(e, t, i, a), t.child);
  }
  function dh(e, t, a, l) {
    var i = Jo();
    return (
      (i = i === null ? null : { parent: yt._currentValue, pool: i }),
      (t.memoizedState = { baseLanes: a, cachePool: i }),
      e !== null && Vi(t, null),
      es(),
      Wd(t),
      e !== null && vr(e, t, l, !0),
      null
    );
  }
  function iu(e, t) {
    var a = t.ref;
    if (a === null) e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object") throw Error(o(284));
      (e === null || e.ref !== a) && (t.flags |= 4194816);
    }
  }
  function Es(e, t, a, l, i) {
    return (
      Kl(t),
      (a = ls(e, t, a, l, void 0, i)),
      (l = ns()),
      e !== null && !bt
        ? (rs(e, t, i), Qa(e, t, i))
        : (Ve && l && ko(t), (t.flags |= 1), Rt(e, t, a, i), t.child)
    );
  }
  function hh(e, t, a, l, i, s) {
    return (
      Kl(t),
      (t.updateQueue = null),
      (a = dd(t, l, a, i)),
      fd(e),
      (l = ns()),
      e !== null && !bt
        ? (rs(e, t, s), Qa(e, t, s))
        : (Ve && l && ko(t), (t.flags |= 1), Rt(e, t, a, s), t.child)
    );
  }
  function mh(e, t, a, l, i) {
    if ((Kl(t), t.stateNode === null)) {
      var s = xn,
        h = a.contextType;
      (typeof h == "object" && h !== null && (s = At(h)),
        (s = new a(l, s)),
        (t.memoizedState =
          s.state !== null && s.state !== void 0 ? s.state : null),
        (s.updater = bs),
        (t.stateNode = s),
        (s._reactInternals = t),
        (s = t.stateNode),
        (s.props = l),
        (s.state = t.memoizedState),
        (s.refs = {}),
        Po(t),
        (h = a.contextType),
        (s.context = typeof h == "object" && h !== null ? At(h) : xn),
        (s.state = t.memoizedState),
        (h = a.getDerivedStateFromProps),
        typeof h == "function" && (vs(t, a, h, l), (s.state = t.memoizedState)),
        typeof a.getDerivedStateFromProps == "function" ||
          typeof s.getSnapshotBeforeUpdate == "function" ||
          (typeof s.UNSAFE_componentWillMount != "function" &&
            typeof s.componentWillMount != "function") ||
          ((h = s.state),
          typeof s.componentWillMount == "function" && s.componentWillMount(),
          typeof s.UNSAFE_componentWillMount == "function" &&
            s.UNSAFE_componentWillMount(),
          h !== s.state && bs.enqueueReplaceState(s, s.state, null),
          Tr(t, l, s, i),
          wr(),
          (s.state = t.memoizedState)),
        typeof s.componentDidMount == "function" && (t.flags |= 4194308),
        (l = !0));
    } else if (e === null) {
      s = t.stateNode;
      var g = t.memoizedProps,
        S = Pl(a, g);
      s.props = S;
      var N = s.context,
        Y = a.contextType;
      ((h = xn), typeof Y == "object" && Y !== null && (h = At(Y)));
      var Q = a.getDerivedStateFromProps;
      ((Y =
        typeof Q == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function"),
        (g = t.pendingProps !== g),
        Y ||
          (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
            typeof s.componentWillReceiveProps != "function") ||
          ((g || N !== h) && eh(t, s, l, h)),
        (rl = !1));
      var L = t.memoizedState;
      ((s.state = L),
        Tr(t, l, s, i),
        wr(),
        (N = t.memoizedState),
        g || L !== N || rl
          ? (typeof Q == "function" && (vs(t, a, Q, l), (N = t.memoizedState)),
            (S = rl || Id(t, a, S, l, L, N, h))
              ? (Y ||
                  (typeof s.UNSAFE_componentWillMount != "function" &&
                    typeof s.componentWillMount != "function") ||
                  (typeof s.componentWillMount == "function" &&
                    s.componentWillMount(),
                  typeof s.UNSAFE_componentWillMount == "function" &&
                    s.UNSAFE_componentWillMount()),
                typeof s.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof s.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = l),
                (t.memoizedState = N)),
            (s.props = l),
            (s.state = N),
            (s.context = h),
            (l = S))
          : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
            (l = !1)));
    } else {
      ((s = t.stateNode),
        $o(e, t),
        (h = t.memoizedProps),
        (Y = Pl(a, h)),
        (s.props = Y),
        (Q = t.pendingProps),
        (L = s.context),
        (N = a.contextType),
        (S = xn),
        typeof N == "object" && N !== null && (S = At(N)),
        (g = a.getDerivedStateFromProps),
        (N =
          typeof g == "function" ||
          typeof s.getSnapshotBeforeUpdate == "function") ||
          (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
            typeof s.componentWillReceiveProps != "function") ||
          ((h !== Q || L !== S) && eh(t, s, l, S)),
        (rl = !1),
        (L = t.memoizedState),
        (s.state = L),
        Tr(t, l, s, i),
        wr());
      var j = t.memoizedState;
      h !== Q ||
      L !== j ||
      rl ||
      (e !== null && e.dependencies !== null && Yi(e.dependencies))
        ? (typeof g == "function" && (vs(t, a, g, l), (j = t.memoizedState)),
          (Y =
            rl ||
            Id(t, a, Y, l, L, j, S) ||
            (e !== null && e.dependencies !== null && Yi(e.dependencies)))
            ? (N ||
                (typeof s.UNSAFE_componentWillUpdate != "function" &&
                  typeof s.componentWillUpdate != "function") ||
                (typeof s.componentWillUpdate == "function" &&
                  s.componentWillUpdate(l, j, S),
                typeof s.UNSAFE_componentWillUpdate == "function" &&
                  s.UNSAFE_componentWillUpdate(l, j, S)),
              typeof s.componentDidUpdate == "function" && (t.flags |= 4),
              typeof s.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof s.componentDidUpdate != "function" ||
                (h === e.memoizedProps && L === e.memoizedState) ||
                (t.flags |= 4),
              typeof s.getSnapshotBeforeUpdate != "function" ||
                (h === e.memoizedProps && L === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = l),
              (t.memoizedState = j)),
          (s.props = l),
          (s.state = j),
          (s.context = S),
          (l = Y))
        : (typeof s.componentDidUpdate != "function" ||
            (h === e.memoizedProps && L === e.memoizedState) ||
            (t.flags |= 4),
          typeof s.getSnapshotBeforeUpdate != "function" ||
            (h === e.memoizedProps && L === e.memoizedState) ||
            (t.flags |= 1024),
          (l = !1));
    }
    return (
      (s = l),
      iu(e, t),
      (l = (t.flags & 128) !== 0),
      s || l
        ? ((s = t.stateNode),
          (a =
            l && typeof a.getDerivedStateFromError != "function"
              ? null
              : s.render()),
          (t.flags |= 1),
          e !== null && l
            ? ((t.child = zn(t, e.child, null, i)),
              (t.child = zn(t, null, a, i)))
            : Rt(e, t, a, i),
          (t.memoizedState = s.state),
          (e = t.child))
        : (e = Qa(e, t, i)),
      e
    );
  }
  function ph(e, t, a, l) {
    return (yr(), (t.flags |= 256), Rt(e, t, a, l), t.child);
  }
  var xs = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function Rs(e) {
    return { baseLanes: e, cachePool: ad() };
  }
  function ws(e, t, a) {
    return ((e = e !== null ? e.childLanes & ~a : 0), t && (e |= ua), e);
  }
  function yh(e, t, a) {
    var l = t.pendingProps,
      i = !1,
      s = (t.flags & 128) !== 0,
      h;
    if (
      ((h = s) ||
        (h =
          e !== null && e.memoizedState === null ? !1 : (gt.current & 2) !== 0),
      h && ((i = !0), (t.flags &= -129)),
      (h = (t.flags & 32) !== 0),
      (t.flags &= -33),
      e === null)
    ) {
      if (Ve) {
        if ((i ? sl(t) : cl(), Ve)) {
          var g = ut,
            S;
          if ((S = g)) {
            e: {
              for (S = g, g = Ra; S.nodeType !== 8; ) {
                if (!g) {
                  g = null;
                  break e;
                }
                if (((S = ya(S.nextSibling)), S === null)) {
                  g = null;
                  break e;
                }
              }
              g = S;
            }
            g !== null
              ? ((t.memoizedState = {
                  dehydrated: g,
                  treeContext: Gl !== null ? { id: qa, overflow: ka } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (S = Zt(18, null, null, 0)),
                (S.stateNode = g),
                (S.return = t),
                (t.child = S),
                (zt = t),
                (ut = null),
                (S = !0))
              : (S = !1);
          }
          S || Ql(t);
        }
        if (
          ((g = t.memoizedState),
          g !== null && ((g = g.dehydrated), g !== null))
        )
          return (uc(g) ? (t.lanes = 32) : (t.lanes = 536870912), null);
        Xa(t);
      }
      return (
        (g = l.children),
        (l = l.fallback),
        i
          ? (cl(),
            (i = t.mode),
            (g = uu({ mode: "hidden", children: g }, i)),
            (l = Yl(l, i, a, null)),
            (g.return = t),
            (l.return = t),
            (g.sibling = l),
            (t.child = g),
            (i = t.child),
            (i.memoizedState = Rs(a)),
            (i.childLanes = ws(e, h, a)),
            (t.memoizedState = xs),
            l)
          : (sl(t), Ts(t, g))
      );
    }
    if (
      ((S = e.memoizedState), S !== null && ((g = S.dehydrated), g !== null))
    ) {
      if (s)
        t.flags & 256
          ? (sl(t), (t.flags &= -257), (t = As(e, t, a)))
          : t.memoizedState !== null
            ? (cl(), (t.child = e.child), (t.flags |= 128), (t = null))
            : (cl(),
              (i = l.fallback),
              (g = t.mode),
              (l = uu({ mode: "visible", children: l.children }, g)),
              (i = Yl(i, g, a, null)),
              (i.flags |= 2),
              (l.return = t),
              (i.return = t),
              (l.sibling = i),
              (t.child = l),
              zn(t, e.child, null, a),
              (l = t.child),
              (l.memoizedState = Rs(a)),
              (l.childLanes = ws(e, h, a)),
              (t.memoizedState = xs),
              (t = i));
      else if ((sl(t), uc(g))) {
        if (((h = g.nextSibling && g.nextSibling.dataset), h)) var N = h.dgst;
        ((h = N),
          (l = Error(o(419))),
          (l.stack = ""),
          (l.digest = h),
          gr({ value: l, source: null, stack: null }),
          (t = As(e, t, a)));
      } else if (
        (bt || vr(e, t, a, !1), (h = (a & e.childLanes) !== 0), bt || h)
      ) {
        if (
          ((h = Ie),
          h !== null &&
            ((l = a & -a),
            (l = (l & 42) !== 0 ? 1 : nr(l)),
            (l = (l & (h.suspendedLanes | a)) !== 0 ? 0 : l),
            l !== 0 && l !== S.retryLane))
        )
          throw ((S.retryLane = l), En(e, l), $t(h, e, l), uh);
        (g.data === "$?" || Xs(), (t = As(e, t, a)));
      } else
        g.data === "$?"
          ? ((t.flags |= 192), (t.child = e.child), (t = null))
          : ((e = S.treeContext),
            (ut = ya(g.nextSibling)),
            (zt = t),
            (Ve = !0),
            (Xl = null),
            (Ra = !1),
            e !== null &&
              ((na[ra++] = qa),
              (na[ra++] = ka),
              (na[ra++] = Gl),
              (qa = e.id),
              (ka = e.overflow),
              (Gl = t)),
            (t = Ts(t, l.children)),
            (t.flags |= 4096));
      return t;
    }
    return i
      ? (cl(),
        (i = l.fallback),
        (g = t.mode),
        (S = e.child),
        (N = S.sibling),
        (l = Ba(S, { mode: "hidden", children: l.children })),
        (l.subtreeFlags = S.subtreeFlags & 65011712),
        N !== null ? (i = Ba(N, i)) : ((i = Yl(i, g, a, null)), (i.flags |= 2)),
        (i.return = t),
        (l.return = t),
        (l.sibling = i),
        (t.child = l),
        (l = i),
        (i = t.child),
        (g = e.child.memoizedState),
        g === null
          ? (g = Rs(a))
          : ((S = g.cachePool),
            S !== null
              ? ((N = yt._currentValue),
                (S = S.parent !== N ? { parent: N, pool: N } : S))
              : (S = ad()),
            (g = { baseLanes: g.baseLanes | a, cachePool: S })),
        (i.memoizedState = g),
        (i.childLanes = ws(e, h, a)),
        (t.memoizedState = xs),
        l)
      : (sl(t),
        (a = e.child),
        (e = a.sibling),
        (a = Ba(a, { mode: "visible", children: l.children })),
        (a.return = t),
        (a.sibling = null),
        e !== null &&
          ((h = t.deletions),
          h === null ? ((t.deletions = [e]), (t.flags |= 16)) : h.push(e)),
        (t.child = a),
        (t.memoizedState = null),
        a);
  }
  function Ts(e, t) {
    return (
      (t = uu({ mode: "visible", children: t }, e.mode)),
      (t.return = e),
      (e.child = t)
    );
  }
  function uu(e, t) {
    return (
      (e = Zt(22, e, null, t)),
      (e.lanes = 0),
      (e.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null,
      }),
      e
    );
  }
  function As(e, t, a) {
    return (
      zn(t, e.child, null, a),
      (e = Ts(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function gh(e, t, a) {
    e.lanes |= t;
    var l = e.alternate;
    (l !== null && (l.lanes |= t), Xo(e.return, t, a));
  }
  function Os(e, t, a, l, i) {
    var s = e.memoizedState;
    s === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: l,
          tail: a,
          tailMode: i,
        })
      : ((s.isBackwards = t),
        (s.rendering = null),
        (s.renderingStartTime = 0),
        (s.last = l),
        (s.tail = a),
        (s.tailMode = i));
  }
  function vh(e, t, a) {
    var l = t.pendingProps,
      i = l.revealOrder,
      s = l.tail;
    if ((Rt(e, t, l.children, a), (l = gt.current), (l & 2) !== 0))
      ((l = (l & 1) | 2), (t.flags |= 128));
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && gh(e, a, t);
          else if (e.tag === 19) gh(e, a, t);
          else if (e.child !== null) {
            ((e.child.return = e), (e = e.child));
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          ((e.sibling.return = e.return), (e = e.sibling));
        }
      l &= 1;
    }
    switch ((K(gt, l), i)) {
      case "forwards":
        for (a = t.child, i = null; a !== null; )
          ((e = a.alternate),
            e !== null && lu(e) === null && (i = a),
            (a = a.sibling));
        ((a = i),
          a === null
            ? ((i = t.child), (t.child = null))
            : ((i = a.sibling), (a.sibling = null)),
          Os(t, !1, i, a, s));
        break;
      case "backwards":
        for (a = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && lu(e) === null)) {
            t.child = i;
            break;
          }
          ((e = i.sibling), (i.sibling = a), (a = i), (i = e));
        }
        Os(t, !0, a, null, s);
        break;
      case "together":
        Os(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Qa(e, t, a) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (pl |= t.lanes),
      (a & t.childLanes) === 0)
    )
      if (e !== null) {
        if ((vr(e, t, a, !1), (a & t.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && t.child !== e.child) throw Error(o(153));
    if (t.child !== null) {
      for (
        e = t.child, a = Ba(e, e.pendingProps), t.child = a, a.return = t;
        e.sibling !== null;

      )
        ((e = e.sibling),
          (a = a.sibling = Ba(e, e.pendingProps)),
          (a.return = t));
      a.sibling = null;
    }
    return t.child;
  }
  function Cs(e, t) {
    return (e.lanes & t) !== 0
      ? !0
      : ((e = e.dependencies), !!(e !== null && Yi(e)));
  }
  function n2(e, t, a) {
    switch (t.tag) {
      case 3:
        (Qe(t, t.stateNode.containerInfo),
          nl(t, yt, e.memoizedState.cache),
          yr());
        break;
      case 27:
      case 5:
        et(t);
        break;
      case 4:
        Qe(t, t.stateNode.containerInfo);
        break;
      case 10:
        nl(t, t.type, t.memoizedProps.value);
        break;
      case 13:
        var l = t.memoizedState;
        if (l !== null)
          return l.dehydrated !== null
            ? (sl(t), (t.flags |= 128), null)
            : (a & t.child.childLanes) !== 0
              ? yh(e, t, a)
              : (sl(t), (e = Qa(e, t, a)), e !== null ? e.sibling : null);
        sl(t);
        break;
      case 19:
        var i = (e.flags & 128) !== 0;
        if (
          ((l = (a & t.childLanes) !== 0),
          l || (vr(e, t, a, !1), (l = (a & t.childLanes) !== 0)),
          i)
        ) {
          if (l) return vh(e, t, a);
          t.flags |= 128;
        }
        if (
          ((i = t.memoizedState),
          i !== null &&
            ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
          K(gt, gt.current),
          l)
        )
          break;
        return null;
      case 22:
      case 23:
        return ((t.lanes = 0), fh(e, t, a));
      case 24:
        nl(t, yt, e.memoizedState.cache);
    }
    return Qa(e, t, a);
  }
  function bh(e, t, a) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps) bt = !0;
      else {
        if (!Cs(e, a) && (t.flags & 128) === 0) return ((bt = !1), n2(e, t, a));
        bt = (e.flags & 131072) !== 0;
      }
    else ((bt = !1), Ve && (t.flags & 1048576) !== 0 && Ff(t, ki, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        e: {
          e = t.pendingProps;
          var l = t.elementType,
            i = l._init;
          if (((l = i(l._payload)), (t.type = l), typeof l == "function"))
            Ho(l)
              ? ((e = Pl(l, e)), (t.tag = 1), (t = mh(null, t, l, e, a)))
              : ((t.tag = 0), (t = Es(null, t, l, e, a)));
          else {
            if (l != null) {
              if (((i = l.$$typeof), i === le)) {
                ((t.tag = 11), (t = oh(null, t, l, e, a)));
                break e;
              } else if (i === ne) {
                ((t.tag = 14), (t = sh(null, t, l, e, a)));
                break e;
              }
            }
            throw ((t = Re(l) || l), Error(o(306, t, "")));
          }
        }
        return t;
      case 0:
        return Es(e, t, t.type, t.pendingProps, a);
      case 1:
        return ((l = t.type), (i = Pl(l, t.pendingProps)), mh(e, t, l, i, a));
      case 3:
        e: {
          if ((Qe(t, t.stateNode.containerInfo), e === null))
            throw Error(o(387));
          l = t.pendingProps;
          var s = t.memoizedState;
          ((i = s.element), $o(e, t), Tr(t, l, null, a));
          var h = t.memoizedState;
          if (
            ((l = h.cache),
            nl(t, yt, l),
            l !== s.cache && Qo(t, [yt], a, !0),
            wr(),
            (l = h.element),
            s.isDehydrated)
          )
            if (
              ((s = { element: l, isDehydrated: !1, cache: h.cache }),
              (t.updateQueue.baseState = s),
              (t.memoizedState = s),
              t.flags & 256)
            ) {
              t = ph(e, t, l, a);
              break e;
            } else if (l !== i) {
              ((i = aa(Error(o(424)), t)), gr(i), (t = ph(e, t, l, a)));
              break e;
            } else {
              switch (((e = t.stateNode.containerInfo), e.nodeType)) {
                case 9:
                  e = e.body;
                  break;
                default:
                  e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
              }
              for (
                ut = ya(e.firstChild),
                  zt = t,
                  Ve = !0,
                  Xl = null,
                  Ra = !0,
                  a = $d(t, null, l, a),
                  t.child = a;
                a;

              )
                ((a.flags = (a.flags & -3) | 4096), (a = a.sibling));
            }
          else {
            if ((yr(), l === i)) {
              t = Qa(e, t, a);
              break e;
            }
            Rt(e, t, l, a);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          iu(e, t),
          e === null
            ? (a = R0(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = a)
              : Ve ||
                ((a = t.type),
                (e = t.pendingProps),
                (l = Eu(ye.current).createElement(a)),
                (l[Z] = t),
                (l[W] = e),
                Tt(l, a, e),
                Te(l),
                (t.stateNode = l))
            : (t.memoizedState = R0(
                t.type,
                e.memoizedProps,
                t.pendingProps,
                e.memoizedState,
              )),
          null
        );
      case 27:
        return (
          et(t),
          e === null &&
            Ve &&
            ((l = t.stateNode = S0(t.type, t.pendingProps, ye.current)),
            (zt = t),
            (Ra = !0),
            (i = ut),
            bl(t.type) ? ((oc = i), (ut = ya(l.firstChild))) : (ut = i)),
          Rt(e, t, t.pendingProps.children, a),
          iu(e, t),
          e === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          e === null &&
            Ve &&
            ((i = l = ut) &&
              ((l = z2(l, t.type, t.pendingProps, Ra)),
              l !== null
                ? ((t.stateNode = l),
                  (zt = t),
                  (ut = ya(l.firstChild)),
                  (Ra = !1),
                  (i = !0))
                : (i = !1)),
            i || Ql(t)),
          et(t),
          (i = t.type),
          (s = t.pendingProps),
          (h = e !== null ? e.memoizedProps : null),
          (l = s.children),
          nc(i, s) ? (l = null) : h !== null && nc(i, h) && (t.flags |= 32),
          t.memoizedState !== null &&
            ((i = ls(e, t, Py, null, null, a)), (Kr._currentValue = i)),
          iu(e, t),
          Rt(e, t, l, a),
          t.child
        );
      case 6:
        return (
          e === null &&
            Ve &&
            ((e = a = ut) &&
              ((a = N2(a, t.pendingProps, Ra)),
              a !== null
                ? ((t.stateNode = a), (zt = t), (ut = null), (e = !0))
                : (e = !1)),
            e || Ql(t)),
          null
        );
      case 13:
        return yh(e, t, a);
      case 4:
        return (
          Qe(t, t.stateNode.containerInfo),
          (l = t.pendingProps),
          e === null ? (t.child = zn(t, null, l, a)) : Rt(e, t, l, a),
          t.child
        );
      case 11:
        return oh(e, t, t.type, t.pendingProps, a);
      case 7:
        return (Rt(e, t, t.pendingProps, a), t.child);
      case 8:
        return (Rt(e, t, t.pendingProps.children, a), t.child);
      case 12:
        return (Rt(e, t, t.pendingProps.children, a), t.child);
      case 10:
        return (
          (l = t.pendingProps),
          nl(t, t.type, l.value),
          Rt(e, t, l.children, a),
          t.child
        );
      case 9:
        return (
          (i = t.type._context),
          (l = t.pendingProps.children),
          Kl(t),
          (i = At(i)),
          (l = l(i)),
          (t.flags |= 1),
          Rt(e, t, l, a),
          t.child
        );
      case 14:
        return sh(e, t, t.type, t.pendingProps, a);
      case 15:
        return ch(e, t, t.type, t.pendingProps, a);
      case 19:
        return vh(e, t, a);
      case 31:
        return (
          (l = t.pendingProps),
          (a = t.mode),
          (l = { mode: l.mode, children: l.children }),
          e === null
            ? ((a = uu(l, a)),
              (a.ref = t.ref),
              (t.child = a),
              (a.return = t),
              (t = a))
            : ((a = Ba(e.child, l)),
              (a.ref = t.ref),
              (t.child = a),
              (a.return = t),
              (t = a)),
          t
        );
      case 22:
        return fh(e, t, a);
      case 24:
        return (
          Kl(t),
          (l = At(yt)),
          e === null
            ? ((i = Jo()),
              i === null &&
                ((i = Ie),
                (s = Zo()),
                (i.pooledCache = s),
                s.refCount++,
                s !== null && (i.pooledCacheLanes |= a),
                (i = s)),
              (t.memoizedState = { parent: l, cache: i }),
              Po(t),
              nl(t, yt, i))
            : ((e.lanes & a) !== 0 && ($o(e, t), Tr(t, null, null, a), wr()),
              (i = e.memoizedState),
              (s = t.memoizedState),
              i.parent !== l
                ? ((i = { parent: l, cache: l }),
                  (t.memoizedState = i),
                  t.lanes === 0 &&
                    (t.memoizedState = t.updateQueue.baseState = i),
                  nl(t, yt, l))
                : ((l = s.cache),
                  nl(t, yt, l),
                  l !== i.cache && Qo(t, [yt], a, !0))),
          Rt(e, t, t.pendingProps.children, a),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(o(156, t.tag));
  }
  function Za(e) {
    e.flags |= 4;
  }
  function Sh(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (((e.flags |= 16777216), !C0(t))) {
      if (
        ((t = ia.current),
        t !== null &&
          ((ke & 4194048) === ke
            ? wa !== null
            : ((ke & 62914560) !== ke && (ke & 536870912) === 0) || t !== wa))
      )
        throw ((xr = Fo), ld);
      e.flags |= 8192;
    }
  }
  function ou(e, t) {
    (t !== null && (e.flags |= 4),
      e.flags & 16384 &&
        ((t = e.tag !== 22 ? xi() : 536870912), (e.lanes |= t), (jn |= t)));
  }
  function zr(e, t) {
    if (!Ve)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var a = null; t !== null; )
            (t.alternate !== null && (a = t), (t = t.sibling));
          a === null ? (e.tail = null) : (a.sibling = null);
          break;
        case "collapsed":
          a = e.tail;
          for (var l = null; a !== null; )
            (a.alternate !== null && (l = a), (a = a.sibling));
          l === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (l.sibling = null);
      }
  }
  function rt(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      a = 0,
      l = 0;
    if (t)
      for (var i = e.child; i !== null; )
        ((a |= i.lanes | i.childLanes),
          (l |= i.subtreeFlags & 65011712),
          (l |= i.flags & 65011712),
          (i.return = e),
          (i = i.sibling));
    else
      for (i = e.child; i !== null; )
        ((a |= i.lanes | i.childLanes),
          (l |= i.subtreeFlags),
          (l |= i.flags),
          (i.return = e),
          (i = i.sibling));
    return ((e.subtreeFlags |= l), (e.childLanes = a), t);
  }
  function r2(e, t, a) {
    var l = t.pendingProps;
    switch ((Yo(t), t.tag)) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (rt(t), null);
      case 1:
        return (rt(t), null);
      case 3:
        return (
          (a = t.stateNode),
          (l = null),
          e !== null && (l = e.memoizedState.cache),
          t.memoizedState.cache !== l && (t.flags |= 2048),
          Ga(yt),
          Mt(),
          a.pendingContext &&
            ((a.context = a.pendingContext), (a.pendingContext = null)),
          (e === null || e.child === null) &&
            (pr(t)
              ? Za(t)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), Wf())),
          rt(t),
          null
        );
      case 26:
        return (
          (a = t.memoizedState),
          e === null
            ? (Za(t),
              a !== null ? (rt(t), Sh(t, a)) : (rt(t), (t.flags &= -16777217)))
            : a
              ? a !== e.memoizedState
                ? (Za(t), rt(t), Sh(t, a))
                : (rt(t), (t.flags &= -16777217))
              : (e.memoizedProps !== l && Za(t), rt(t), (t.flags &= -16777217)),
          null
        );
      case 27:
        (_t(t), (a = ye.current));
        var i = t.type;
        if (e !== null && t.stateNode != null) e.memoizedProps !== l && Za(t);
        else {
          if (!l) {
            if (t.stateNode === null) throw Error(o(166));
            return (rt(t), null);
          }
          ((e = ae.current),
            pr(t) ? Pf(t) : ((e = S0(i, l, a)), (t.stateNode = e), Za(t)));
        }
        return (rt(t), null);
      case 5:
        if ((_t(t), (a = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== l && Za(t);
        else {
          if (!l) {
            if (t.stateNode === null) throw Error(o(166));
            return (rt(t), null);
          }
          if (((e = ae.current), pr(t))) Pf(t);
          else {
            switch (((i = Eu(ye.current)), e)) {
              case 1:
                e = i.createElementNS("http://www.w3.org/2000/svg", a);
                break;
              case 2:
                e = i.createElementNS("http://www.w3.org/1998/Math/MathML", a);
                break;
              default:
                switch (a) {
                  case "svg":
                    e = i.createElementNS("http://www.w3.org/2000/svg", a);
                    break;
                  case "math":
                    e = i.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      a,
                    );
                    break;
                  case "script":
                    ((e = i.createElement("div")),
                      (e.innerHTML = "<script><\/script>"),
                      (e = e.removeChild(e.firstChild)));
                    break;
                  case "select":
                    ((e =
                      typeof l.is == "string"
                        ? i.createElement("select", { is: l.is })
                        : i.createElement("select")),
                      l.multiple
                        ? (e.multiple = !0)
                        : l.size && (e.size = l.size));
                    break;
                  default:
                    e =
                      typeof l.is == "string"
                        ? i.createElement(a, { is: l.is })
                        : i.createElement(a);
                }
            }
            ((e[Z] = t), (e[W] = l));
            e: for (i = t.child; i !== null; ) {
              if (i.tag === 5 || i.tag === 6) e.appendChild(i.stateNode);
              else if (i.tag !== 4 && i.tag !== 27 && i.child !== null) {
                ((i.child.return = i), (i = i.child));
                continue;
              }
              if (i === t) break e;
              for (; i.sibling === null; ) {
                if (i.return === null || i.return === t) break e;
                i = i.return;
              }
              ((i.sibling.return = i.return), (i = i.sibling));
            }
            t.stateNode = e;
            e: switch ((Tt(e, a, l), a)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                e = !!l.autoFocus;
                break e;
              case "img":
                e = !0;
                break e;
              default:
                e = !1;
            }
            e && Za(t);
          }
        }
        return (rt(t), (t.flags &= -16777217), null);
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== l && Za(t);
        else {
          if (typeof l != "string" && t.stateNode === null) throw Error(o(166));
          if (((e = ye.current), pr(t))) {
            if (
              ((e = t.stateNode),
              (a = t.memoizedProps),
              (l = null),
              (i = zt),
              i !== null)
            )
              switch (i.tag) {
                case 27:
                case 5:
                  l = i.memoizedProps;
              }
            ((e[Z] = t),
              (e = !!(
                e.nodeValue === a ||
                (l !== null && l.suppressHydrationWarning === !0) ||
                h0(e.nodeValue, a)
              )),
              e || Ql(t));
          } else ((e = Eu(e).createTextNode(l)), (e[Z] = t), (t.stateNode = e));
        }
        return (rt(t), null);
      case 13:
        if (
          ((l = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((i = pr(t)), l !== null && l.dehydrated !== null)) {
            if (e === null) {
              if (!i) throw Error(o(318));
              if (
                ((i = t.memoizedState),
                (i = i !== null ? i.dehydrated : null),
                !i)
              )
                throw Error(o(317));
              i[Z] = t;
            } else
              (yr(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (rt(t), (i = !1));
          } else
            ((i = Wf()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = i),
              (i = !0));
          if (!i) return t.flags & 256 ? (Xa(t), t) : (Xa(t), null);
        }
        if ((Xa(t), (t.flags & 128) !== 0)) return ((t.lanes = a), t);
        if (
          ((a = l !== null), (e = e !== null && e.memoizedState !== null), a)
        ) {
          ((l = t.child),
            (i = null),
            l.alternate !== null &&
              l.alternate.memoizedState !== null &&
              l.alternate.memoizedState.cachePool !== null &&
              (i = l.alternate.memoizedState.cachePool.pool));
          var s = null;
          (l.memoizedState !== null &&
            l.memoizedState.cachePool !== null &&
            (s = l.memoizedState.cachePool.pool),
            s !== i && (l.flags |= 2048));
        }
        return (
          a !== e && a && (t.child.flags |= 8192),
          ou(t, t.updateQueue),
          rt(t),
          null
        );
      case 4:
        return (Mt(), e === null && Is(t.stateNode.containerInfo), rt(t), null);
      case 10:
        return (Ga(t.type), rt(t), null);
      case 19:
        if ((I(gt), (i = t.memoizedState), i === null)) return (rt(t), null);
        if (((l = (t.flags & 128) !== 0), (s = i.rendering), s === null))
          if (l) zr(i, !1);
          else {
            if (ot !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((s = lu(e)), s !== null)) {
                  for (
                    t.flags |= 128,
                      zr(i, !1),
                      e = s.updateQueue,
                      t.updateQueue = e,
                      ou(t, e),
                      t.subtreeFlags = 0,
                      e = a,
                      a = t.child;
                    a !== null;

                  )
                    (Jf(a, e), (a = a.sibling));
                  return (K(gt, (gt.current & 1) | 2), t.child);
                }
                e = e.sibling;
              }
            i.tail !== null &&
              Vt() > fu &&
              ((t.flags |= 128), (l = !0), zr(i, !1), (t.lanes = 4194304));
          }
        else {
          if (!l)
            if (((e = lu(s)), e !== null)) {
              if (
                ((t.flags |= 128),
                (l = !0),
                (e = e.updateQueue),
                (t.updateQueue = e),
                ou(t, e),
                zr(i, !0),
                i.tail === null &&
                  i.tailMode === "hidden" &&
                  !s.alternate &&
                  !Ve)
              )
                return (rt(t), null);
            } else
              2 * Vt() - i.renderingStartTime > fu &&
                a !== 536870912 &&
                ((t.flags |= 128), (l = !0), zr(i, !1), (t.lanes = 4194304));
          i.isBackwards
            ? ((s.sibling = t.child), (t.child = s))
            : ((e = i.last),
              e !== null ? (e.sibling = s) : (t.child = s),
              (i.last = s));
        }
        return i.tail !== null
          ? ((t = i.tail),
            (i.rendering = t),
            (i.tail = t.sibling),
            (i.renderingStartTime = Vt()),
            (t.sibling = null),
            (e = gt.current),
            K(gt, l ? (e & 1) | 2 : e & 1),
            t)
          : (rt(t), null);
      case 22:
      case 23:
        return (
          Xa(t),
          ts(),
          (l = t.memoizedState !== null),
          e !== null
            ? (e.memoizedState !== null) !== l && (t.flags |= 8192)
            : l && (t.flags |= 8192),
          l
            ? (a & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              (rt(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : rt(t),
          (a = t.updateQueue),
          a !== null && ou(t, a.retryQueue),
          (a = null),
          e !== null &&
            e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (a = e.memoizedState.cachePool.pool),
          (l = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (l = t.memoizedState.cachePool.pool),
          l !== a && (t.flags |= 2048),
          e !== null && I(Jl),
          null
        );
      case 24:
        return (
          (a = null),
          e !== null && (a = e.memoizedState.cache),
          t.memoizedState.cache !== a && (t.flags |= 2048),
          Ga(yt),
          rt(t),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(o(156, t.tag));
  }
  function i2(e, t) {
    switch ((Yo(t), t.tag)) {
      case 1:
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Ga(yt),
          Mt(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        );
      case 26:
      case 27:
      case 5:
        return (_t(t), null);
      case 13:
        if (
          (Xa(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(o(340));
          yr();
        }
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return (I(gt), null);
      case 4:
        return (Mt(), null);
      case 10:
        return (Ga(t.type), null);
      case 22:
      case 23:
        return (
          Xa(t),
          ts(),
          e !== null && I(Jl),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 24:
        return (Ga(yt), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Eh(e, t) {
    switch ((Yo(t), t.tag)) {
      case 3:
        (Ga(yt), Mt());
        break;
      case 26:
      case 27:
      case 5:
        _t(t);
        break;
      case 4:
        Mt();
        break;
      case 13:
        Xa(t);
        break;
      case 19:
        I(gt);
        break;
      case 10:
        Ga(t.type);
        break;
      case 22:
      case 23:
        (Xa(t), ts(), e !== null && I(Jl));
        break;
      case 24:
        Ga(yt);
    }
  }
  function Nr(e, t) {
    try {
      var a = t.updateQueue,
        l = a !== null ? a.lastEffect : null;
      if (l !== null) {
        var i = l.next;
        a = i;
        do {
          if ((a.tag & e) === e) {
            l = void 0;
            var s = a.create,
              h = a.inst;
            ((l = s()), (h.destroy = l));
          }
          a = a.next;
        } while (a !== i);
      }
    } catch (g) {
      We(t, t.return, g);
    }
  }
  function fl(e, t, a) {
    try {
      var l = t.updateQueue,
        i = l !== null ? l.lastEffect : null;
      if (i !== null) {
        var s = i.next;
        l = s;
        do {
          if ((l.tag & e) === e) {
            var h = l.inst,
              g = h.destroy;
            if (g !== void 0) {
              ((h.destroy = void 0), (i = t));
              var S = a,
                N = g;
              try {
                N();
              } catch (Y) {
                We(i, S, Y);
              }
            }
          }
          l = l.next;
        } while (l !== s);
      }
    } catch (Y) {
      We(t, t.return, Y);
    }
  }
  function xh(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var a = e.stateNode;
      try {
        sd(t, a);
      } catch (l) {
        We(e, e.return, l);
      }
    }
  }
  function Rh(e, t, a) {
    ((a.props = Pl(e.type, e.memoizedProps)), (a.state = e.memoizedState));
    try {
      a.componentWillUnmount();
    } catch (l) {
      We(e, t, l);
    }
  }
  function Ur(e, t) {
    try {
      var a = e.ref;
      if (a !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var l = e.stateNode;
            break;
          case 30:
            l = e.stateNode;
            break;
          default:
            l = e.stateNode;
        }
        typeof a == "function" ? (e.refCleanup = a(l)) : (a.current = l);
      }
    } catch (i) {
      We(e, t, i);
    }
  }
  function Ta(e, t) {
    var a = e.ref,
      l = e.refCleanup;
    if (a !== null)
      if (typeof l == "function")
        try {
          l();
        } catch (i) {
          We(e, t, i);
        } finally {
          ((e.refCleanup = null),
            (e = e.alternate),
            e != null && (e.refCleanup = null));
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (i) {
          We(e, t, i);
        }
      else a.current = null;
  }
  function wh(e) {
    var t = e.type,
      a = e.memoizedProps,
      l = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && l.focus();
          break e;
        case "img":
          a.src ? (l.src = a.src) : a.srcSet && (l.srcset = a.srcSet);
      }
    } catch (i) {
      We(e, e.return, i);
    }
  }
  function Ms(e, t, a) {
    try {
      var l = e.stateNode;
      (O2(l, e.type, a, t), (l[W] = t));
    } catch (i) {
      We(e, e.return, i);
    }
  }
  function Th(e) {
    return (
      e.tag === 5 ||
      e.tag === 3 ||
      e.tag === 26 ||
      (e.tag === 27 && bl(e.type)) ||
      e.tag === 4
    );
  }
  function _s(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Th(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (
          (e.tag === 27 && bl(e.type)) ||
          e.flags & 2 ||
          e.child === null ||
          e.tag === 4
        )
          continue e;
        ((e.child.return = e), (e = e.child));
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Ds(e, t, a) {
    var l = e.tag;
    if (l === 5 || l === 6)
      ((e = e.stateNode),
        t
          ? (a.nodeType === 9
              ? a.body
              : a.nodeName === "HTML"
                ? a.ownerDocument.body
                : a
            ).insertBefore(e, t)
          : ((t =
              a.nodeType === 9
                ? a.body
                : a.nodeName === "HTML"
                  ? a.ownerDocument.body
                  : a),
            t.appendChild(e),
            (a = a._reactRootContainer),
            a != null || t.onclick !== null || (t.onclick = Su)));
    else if (
      l !== 4 &&
      (l === 27 && bl(e.type) && ((a = e.stateNode), (t = null)),
      (e = e.child),
      e !== null)
    )
      for (Ds(e, t, a), e = e.sibling; e !== null; )
        (Ds(e, t, a), (e = e.sibling));
  }
  function su(e, t, a) {
    var l = e.tag;
    if (l === 5 || l === 6)
      ((e = e.stateNode), t ? a.insertBefore(e, t) : a.appendChild(e));
    else if (
      l !== 4 &&
      (l === 27 && bl(e.type) && (a = e.stateNode), (e = e.child), e !== null)
    )
      for (su(e, t, a), e = e.sibling; e !== null; )
        (su(e, t, a), (e = e.sibling));
  }
  function Ah(e) {
    var t = e.stateNode,
      a = e.memoizedProps;
    try {
      for (var l = e.type, i = t.attributes; i.length; )
        t.removeAttributeNode(i[0]);
      (Tt(t, l, a), (t[Z] = e), (t[W] = a));
    } catch (s) {
      We(e, e.return, s);
    }
  }
  var Ka = !1,
    ft = !1,
    zs = !1,
    Oh = typeof WeakSet == "function" ? WeakSet : Set,
    St = null;
  function u2(e, t) {
    if (((e = e.containerInfo), (ac = Ou), (e = Bf(e)), _o(e))) {
      if ("selectionStart" in e)
        var a = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          a = ((a = e.ownerDocument) && a.defaultView) || window;
          var l = a.getSelection && a.getSelection();
          if (l && l.rangeCount !== 0) {
            a = l.anchorNode;
            var i = l.anchorOffset,
              s = l.focusNode;
            l = l.focusOffset;
            try {
              (a.nodeType, s.nodeType);
            } catch {
              a = null;
              break e;
            }
            var h = 0,
              g = -1,
              S = -1,
              N = 0,
              Y = 0,
              Q = e,
              L = null;
            t: for (;;) {
              for (
                var j;
                Q !== a || (i !== 0 && Q.nodeType !== 3) || (g = h + i),
                  Q !== s || (l !== 0 && Q.nodeType !== 3) || (S = h + l),
                  Q.nodeType === 3 && (h += Q.nodeValue.length),
                  (j = Q.firstChild) !== null;

              )
                ((L = Q), (Q = j));
              for (;;) {
                if (Q === e) break t;
                if (
                  (L === a && ++N === i && (g = h),
                  L === s && ++Y === l && (S = h),
                  (j = Q.nextSibling) !== null)
                )
                  break;
                ((Q = L), (L = Q.parentNode));
              }
              Q = j;
            }
            a = g === -1 || S === -1 ? null : { start: g, end: S };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (
      lc = { focusedElem: e, selectionRange: a }, Ou = !1, St = t;
      St !== null;

    )
      if (
        ((t = St), (e = t.child), (t.subtreeFlags & 1024) !== 0 && e !== null)
      )
        ((e.return = t), (St = e));
      else
        for (; St !== null; ) {
          switch (((t = St), (s = t.alternate), (e = t.flags), t.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && s !== null) {
                ((e = void 0),
                  (a = t),
                  (i = s.memoizedProps),
                  (s = s.memoizedState),
                  (l = a.stateNode));
                try {
                  var Se = Pl(a.type, i, a.elementType === a.type);
                  ((e = l.getSnapshotBeforeUpdate(Se, s)),
                    (l.__reactInternalSnapshotBeforeUpdate = e));
                } catch (ve) {
                  We(a, a.return, ve);
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (
                  ((e = t.stateNode.containerInfo), (a = e.nodeType), a === 9)
                )
                  ic(e);
                else if (a === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      ic(e);
                      break;
                    default:
                      e.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((e & 1024) !== 0) throw Error(o(163));
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), (St = e));
            break;
          }
          St = t.return;
        }
  }
  function Ch(e, t, a) {
    var l = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        (dl(e, a), l & 4 && Nr(5, a));
        break;
      case 1:
        if ((dl(e, a), l & 4))
          if (((e = a.stateNode), t === null))
            try {
              e.componentDidMount();
            } catch (h) {
              We(a, a.return, h);
            }
          else {
            var i = Pl(a.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              e.componentDidUpdate(i, t, e.__reactInternalSnapshotBeforeUpdate);
            } catch (h) {
              We(a, a.return, h);
            }
          }
        (l & 64 && xh(a), l & 512 && Ur(a, a.return));
        break;
      case 3:
        if ((dl(e, a), l & 64 && ((e = a.updateQueue), e !== null))) {
          if (((t = null), a.child !== null))
            switch (a.child.tag) {
              case 27:
              case 5:
                t = a.child.stateNode;
                break;
              case 1:
                t = a.child.stateNode;
            }
          try {
            sd(e, t);
          } catch (h) {
            We(a, a.return, h);
          }
        }
        break;
      case 27:
        t === null && l & 4 && Ah(a);
      case 26:
      case 5:
        (dl(e, a), t === null && l & 4 && wh(a), l & 512 && Ur(a, a.return));
        break;
      case 12:
        dl(e, a);
        break;
      case 13:
        (dl(e, a),
          l & 4 && Dh(e, a),
          l & 64 &&
            ((e = a.memoizedState),
            e !== null &&
              ((e = e.dehydrated),
              e !== null && ((a = y2.bind(null, a)), U2(e, a)))));
        break;
      case 22:
        if (((l = a.memoizedState !== null || Ka), !l)) {
          ((t = (t !== null && t.memoizedState !== null) || ft), (i = Ka));
          var s = ft;
          ((Ka = l),
            (ft = t) && !s ? hl(e, a, (a.subtreeFlags & 8772) !== 0) : dl(e, a),
            (Ka = i),
            (ft = s));
        }
        break;
      case 30:
        break;
      default:
        dl(e, a);
    }
  }
  function Mh(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), Mh(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((t = e.stateNode), t !== null && de(t)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  var at = null,
    Ht = !1;
  function Ja(e, t, a) {
    for (a = a.child; a !== null; ) (_h(e, t, a), (a = a.sibling));
  }
  function _h(e, t, a) {
    if (lt && typeof lt.onCommitFiberUnmount == "function")
      try {
        lt.onCommitFiberUnmount(Nt, a);
      } catch {}
    switch (a.tag) {
      case 26:
        (ft || Ta(a, t),
          Ja(e, t, a),
          a.memoizedState
            ? a.memoizedState.count--
            : a.stateNode && ((a = a.stateNode), a.parentNode.removeChild(a)));
        break;
      case 27:
        ft || Ta(a, t);
        var l = at,
          i = Ht;
        (bl(a.type) && ((at = a.stateNode), (Ht = !1)),
          Ja(e, t, a),
          Vr(a.stateNode),
          (at = l),
          (Ht = i));
        break;
      case 5:
        ft || Ta(a, t);
      case 6:
        if (
          ((l = at),
          (i = Ht),
          (at = null),
          Ja(e, t, a),
          (at = l),
          (Ht = i),
          at !== null)
        )
          if (Ht)
            try {
              (at.nodeType === 9
                ? at.body
                : at.nodeName === "HTML"
                  ? at.ownerDocument.body
                  : at
              ).removeChild(a.stateNode);
            } catch (s) {
              We(a, t, s);
            }
          else
            try {
              at.removeChild(a.stateNode);
            } catch (s) {
              We(a, t, s);
            }
        break;
      case 18:
        at !== null &&
          (Ht
            ? ((e = at),
              v0(
                e.nodeType === 9
                  ? e.body
                  : e.nodeName === "HTML"
                    ? e.ownerDocument.body
                    : e,
                a.stateNode,
              ),
              $r(e))
            : v0(at, a.stateNode));
        break;
      case 4:
        ((l = at),
          (i = Ht),
          (at = a.stateNode.containerInfo),
          (Ht = !0),
          Ja(e, t, a),
          (at = l),
          (Ht = i));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (ft || fl(2, a, t), ft || fl(4, a, t), Ja(e, t, a));
        break;
      case 1:
        (ft ||
          (Ta(a, t),
          (l = a.stateNode),
          typeof l.componentWillUnmount == "function" && Rh(a, t, l)),
          Ja(e, t, a));
        break;
      case 21:
        Ja(e, t, a);
        break;
      case 22:
        ((ft = (l = ft) || a.memoizedState !== null), Ja(e, t, a), (ft = l));
        break;
      default:
        Ja(e, t, a);
    }
  }
  function Dh(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate),
      e !== null &&
        ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        $r(e);
      } catch (a) {
        We(t, t.return, a);
      }
  }
  function o2(e) {
    switch (e.tag) {
      case 13:
      case 19:
        var t = e.stateNode;
        return (t === null && (t = e.stateNode = new Oh()), t);
      case 22:
        return (
          (e = e.stateNode),
          (t = e._retryCache),
          t === null && (t = e._retryCache = new Oh()),
          t
        );
      default:
        throw Error(o(435, e.tag));
    }
  }
  function Ns(e, t) {
    var a = o2(e);
    t.forEach(function (l) {
      var i = g2.bind(null, e, l);
      a.has(l) || (a.add(l), l.then(i, i));
    });
  }
  function Kt(e, t) {
    var a = t.deletions;
    if (a !== null)
      for (var l = 0; l < a.length; l++) {
        var i = a[l],
          s = e,
          h = t,
          g = h;
        e: for (; g !== null; ) {
          switch (g.tag) {
            case 27:
              if (bl(g.type)) {
                ((at = g.stateNode), (Ht = !1));
                break e;
              }
              break;
            case 5:
              ((at = g.stateNode), (Ht = !1));
              break e;
            case 3:
            case 4:
              ((at = g.stateNode.containerInfo), (Ht = !0));
              break e;
          }
          g = g.return;
        }
        if (at === null) throw Error(o(160));
        (_h(s, h, i),
          (at = null),
          (Ht = !1),
          (s = i.alternate),
          s !== null && (s.return = null),
          (i.return = null));
      }
    if (t.subtreeFlags & 13878)
      for (t = t.child; t !== null; ) (zh(t, e), (t = t.sibling));
  }
  var pa = null;
  function zh(e, t) {
    var a = e.alternate,
      l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (Kt(t, e),
          Jt(e),
          l & 4 && (fl(3, e, e.return), Nr(3, e), fl(5, e, e.return)));
        break;
      case 1:
        (Kt(t, e),
          Jt(e),
          l & 512 && (ft || a === null || Ta(a, a.return)),
          l & 64 &&
            Ka &&
            ((e = e.updateQueue),
            e !== null &&
              ((l = e.callbacks),
              l !== null &&
                ((a = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = a === null ? l : a.concat(l))))));
        break;
      case 26:
        var i = pa;
        if (
          (Kt(t, e),
          Jt(e),
          l & 512 && (ft || a === null || Ta(a, a.return)),
          l & 4)
        ) {
          var s = a !== null ? a.memoizedState : null;
          if (((l = e.memoizedState), a === null))
            if (l === null)
              if (e.stateNode === null) {
                e: {
                  ((l = e.type),
                    (a = e.memoizedProps),
                    (i = i.ownerDocument || i));
                  t: switch (l) {
                    case "title":
                      ((s = i.getElementsByTagName("title")[0]),
                        (!s ||
                          s[ce] ||
                          s[Z] ||
                          s.namespaceURI === "http://www.w3.org/2000/svg" ||
                          s.hasAttribute("itemprop")) &&
                          ((s = i.createElement(l)),
                          i.head.insertBefore(
                            s,
                            i.querySelector("head > title"),
                          )),
                        Tt(s, l, a),
                        (s[Z] = e),
                        Te(s),
                        (l = s));
                      break e;
                    case "link":
                      var h = A0("link", "href", i).get(l + (a.href || ""));
                      if (h) {
                        for (var g = 0; g < h.length; g++)
                          if (
                            ((s = h[g]),
                            s.getAttribute("href") ===
                              (a.href == null || a.href === ""
                                ? null
                                : a.href) &&
                              s.getAttribute("rel") ===
                                (a.rel == null ? null : a.rel) &&
                              s.getAttribute("title") ===
                                (a.title == null ? null : a.title) &&
                              s.getAttribute("crossorigin") ===
                                (a.crossOrigin == null ? null : a.crossOrigin))
                          ) {
                            h.splice(g, 1);
                            break t;
                          }
                      }
                      ((s = i.createElement(l)),
                        Tt(s, l, a),
                        i.head.appendChild(s));
                      break;
                    case "meta":
                      if (
                        (h = A0("meta", "content", i).get(
                          l + (a.content || ""),
                        ))
                      ) {
                        for (g = 0; g < h.length; g++)
                          if (
                            ((s = h[g]),
                            s.getAttribute("content") ===
                              (a.content == null ? null : "" + a.content) &&
                              s.getAttribute("name") ===
                                (a.name == null ? null : a.name) &&
                              s.getAttribute("property") ===
                                (a.property == null ? null : a.property) &&
                              s.getAttribute("http-equiv") ===
                                (a.httpEquiv == null ? null : a.httpEquiv) &&
                              s.getAttribute("charset") ===
                                (a.charSet == null ? null : a.charSet))
                          ) {
                            h.splice(g, 1);
                            break t;
                          }
                      }
                      ((s = i.createElement(l)),
                        Tt(s, l, a),
                        i.head.appendChild(s));
                      break;
                    default:
                      throw Error(o(468, l));
                  }
                  ((s[Z] = e), Te(s), (l = s));
                }
                e.stateNode = l;
              } else O0(i, e.type, e.stateNode);
            else e.stateNode = T0(i, l, e.memoizedProps);
          else
            s !== l
              ? (s === null
                  ? a.stateNode !== null &&
                    ((a = a.stateNode), a.parentNode.removeChild(a))
                  : s.count--,
                l === null
                  ? O0(i, e.type, e.stateNode)
                  : T0(i, l, e.memoizedProps))
              : l === null &&
                e.stateNode !== null &&
                Ms(e, e.memoizedProps, a.memoizedProps);
        }
        break;
      case 27:
        (Kt(t, e),
          Jt(e),
          l & 512 && (ft || a === null || Ta(a, a.return)),
          a !== null && l & 4 && Ms(e, e.memoizedProps, a.memoizedProps));
        break;
      case 5:
        if (
          (Kt(t, e),
          Jt(e),
          l & 512 && (ft || a === null || Ta(a, a.return)),
          e.flags & 32)
        ) {
          i = e.stateNode;
          try {
            mn(i, "");
          } catch (j) {
            We(e, e.return, j);
          }
        }
        (l & 4 &&
          e.stateNode != null &&
          ((i = e.memoizedProps), Ms(e, i, a !== null ? a.memoizedProps : i)),
          l & 1024 && (zs = !0));
        break;
      case 6:
        if ((Kt(t, e), Jt(e), l & 4)) {
          if (e.stateNode === null) throw Error(o(162));
          ((l = e.memoizedProps), (a = e.stateNode));
          try {
            a.nodeValue = l;
          } catch (j) {
            We(e, e.return, j);
          }
        }
        break;
      case 3:
        if (
          ((wu = null),
          (i = pa),
          (pa = xu(t.containerInfo)),
          Kt(t, e),
          (pa = i),
          Jt(e),
          l & 4 && a !== null && a.memoizedState.isDehydrated)
        )
          try {
            $r(t.containerInfo);
          } catch (j) {
            We(e, e.return, j);
          }
        zs && ((zs = !1), Nh(e));
        break;
      case 4:
        ((l = pa),
          (pa = xu(e.stateNode.containerInfo)),
          Kt(t, e),
          Jt(e),
          (pa = l));
        break;
      case 12:
        (Kt(t, e), Jt(e));
        break;
      case 13:
        (Kt(t, e),
          Jt(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) !=
              (a !== null && a.memoizedState !== null) &&
            (qs = Vt()),
          l & 4 &&
            ((l = e.updateQueue),
            l !== null && ((e.updateQueue = null), Ns(e, l))));
        break;
      case 22:
        i = e.memoizedState !== null;
        var S = a !== null && a.memoizedState !== null,
          N = Ka,
          Y = ft;
        if (
          ((Ka = N || i),
          (ft = Y || S),
          Kt(t, e),
          (ft = Y),
          (Ka = N),
          Jt(e),
          l & 8192)
        )
          e: for (
            t = e.stateNode,
              t._visibility = i ? t._visibility & -2 : t._visibility | 1,
              i && (a === null || S || Ka || ft || $l(e)),
              a = null,
              t = e;
            ;

          ) {
            if (t.tag === 5 || t.tag === 26) {
              if (a === null) {
                S = a = t;
                try {
                  if (((s = S.stateNode), i))
                    ((h = s.style),
                      typeof h.setProperty == "function"
                        ? h.setProperty("display", "none", "important")
                        : (h.display = "none"));
                  else {
                    g = S.stateNode;
                    var Q = S.memoizedProps.style,
                      L =
                        Q != null && Q.hasOwnProperty("display")
                          ? Q.display
                          : null;
                    g.style.display =
                      L == null || typeof L == "boolean" ? "" : ("" + L).trim();
                  }
                } catch (j) {
                  We(S, S.return, j);
                }
              }
            } else if (t.tag === 6) {
              if (a === null) {
                S = t;
                try {
                  S.stateNode.nodeValue = i ? "" : S.memoizedProps;
                } catch (j) {
                  We(S, S.return, j);
                }
              }
            } else if (
              ((t.tag !== 22 && t.tag !== 23) ||
                t.memoizedState === null ||
                t === e) &&
              t.child !== null
            ) {
              ((t.child.return = t), (t = t.child));
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              (a === t && (a = null), (t = t.return));
            }
            (a === t && (a = null),
              (t.sibling.return = t.return),
              (t = t.sibling));
          }
        l & 4 &&
          ((l = e.updateQueue),
          l !== null &&
            ((a = l.retryQueue),
            a !== null && ((l.retryQueue = null), Ns(e, a))));
        break;
      case 19:
        (Kt(t, e),
          Jt(e),
          l & 4 &&
            ((l = e.updateQueue),
            l !== null && ((e.updateQueue = null), Ns(e, l))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (Kt(t, e), Jt(e));
    }
  }
  function Jt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var a, l = e.return; l !== null; ) {
          if (Th(l)) {
            a = l;
            break;
          }
          l = l.return;
        }
        if (a == null) throw Error(o(160));
        switch (a.tag) {
          case 27:
            var i = a.stateNode,
              s = _s(e);
            su(e, s, i);
            break;
          case 5:
            var h = a.stateNode;
            a.flags & 32 && (mn(h, ""), (a.flags &= -33));
            var g = _s(e);
            su(e, g, h);
            break;
          case 3:
          case 4:
            var S = a.stateNode.containerInfo,
              N = _s(e);
            Ds(e, N, S);
            break;
          default:
            throw Error(o(161));
        }
      } catch (Y) {
        We(e, e.return, Y);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Nh(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        (Nh(t),
          t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
          (e = e.sibling));
      }
  }
  function dl(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) (Ch(e, t.alternate, t), (t = t.sibling));
  }
  function $l(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (fl(4, t, t.return), $l(t));
          break;
        case 1:
          Ta(t, t.return);
          var a = t.stateNode;
          (typeof a.componentWillUnmount == "function" && Rh(t, t.return, a),
            $l(t));
          break;
        case 27:
          Vr(t.stateNode);
        case 26:
        case 5:
          (Ta(t, t.return), $l(t));
          break;
        case 22:
          t.memoizedState === null && $l(t);
          break;
        case 30:
          $l(t);
          break;
        default:
          $l(t);
      }
      e = e.sibling;
    }
  }
  function hl(e, t, a) {
    for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var l = t.alternate,
        i = e,
        s = t,
        h = s.flags;
      switch (s.tag) {
        case 0:
        case 11:
        case 15:
          (hl(i, s, a), Nr(4, s));
          break;
        case 1:
          if (
            (hl(i, s, a),
            (l = s),
            (i = l.stateNode),
            typeof i.componentDidMount == "function")
          )
            try {
              i.componentDidMount();
            } catch (N) {
              We(l, l.return, N);
            }
          if (((l = s), (i = l.updateQueue), i !== null)) {
            var g = l.stateNode;
            try {
              var S = i.shared.hiddenCallbacks;
              if (S !== null)
                for (i.shared.hiddenCallbacks = null, i = 0; i < S.length; i++)
                  od(S[i], g);
            } catch (N) {
              We(l, l.return, N);
            }
          }
          (a && h & 64 && xh(s), Ur(s, s.return));
          break;
        case 27:
          Ah(s);
        case 26:
        case 5:
          (hl(i, s, a), a && l === null && h & 4 && wh(s), Ur(s, s.return));
          break;
        case 12:
          hl(i, s, a);
          break;
        case 13:
          (hl(i, s, a), a && h & 4 && Dh(i, s));
          break;
        case 22:
          (s.memoizedState === null && hl(i, s, a), Ur(s, s.return));
          break;
        case 30:
          break;
        default:
          hl(i, s, a);
      }
      t = t.sibling;
    }
  }
  function Us(e, t) {
    var a = null;
    (e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (a = e.memoizedState.cachePool.pool),
      (e = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (e = t.memoizedState.cachePool.pool),
      e !== a && (e != null && e.refCount++, a != null && br(a)));
  }
  function Ls(e, t) {
    ((e = null),
      t.alternate !== null && (e = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== e && (t.refCount++, e != null && br(e)));
  }
  function Aa(e, t, a, l) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) (Uh(e, t, a, l), (t = t.sibling));
  }
  function Uh(e, t, a, l) {
    var i = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (Aa(e, t, a, l), i & 2048 && Nr(9, t));
        break;
      case 1:
        Aa(e, t, a, l);
        break;
      case 3:
        (Aa(e, t, a, l),
          i & 2048 &&
            ((e = null),
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== e && (t.refCount++, e != null && br(e))));
        break;
      case 12:
        if (i & 2048) {
          (Aa(e, t, a, l), (e = t.stateNode));
          try {
            var s = t.memoizedProps,
              h = s.id,
              g = s.onPostCommit;
            typeof g == "function" &&
              g(
                h,
                t.alternate === null ? "mount" : "update",
                e.passiveEffectDuration,
                -0,
              );
          } catch (S) {
            We(t, t.return, S);
          }
        } else Aa(e, t, a, l);
        break;
      case 13:
        Aa(e, t, a, l);
        break;
      case 23:
        break;
      case 22:
        ((s = t.stateNode),
          (h = t.alternate),
          t.memoizedState !== null
            ? s._visibility & 2
              ? Aa(e, t, a, l)
              : Lr(e, t)
            : s._visibility & 2
              ? Aa(e, t, a, l)
              : ((s._visibility |= 2),
                Nn(e, t, a, l, (t.subtreeFlags & 10256) !== 0)),
          i & 2048 && Us(h, t));
        break;
      case 24:
        (Aa(e, t, a, l), i & 2048 && Ls(t.alternate, t));
        break;
      default:
        Aa(e, t, a, l);
    }
  }
  function Nn(e, t, a, l, i) {
    for (i = i && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
      var s = e,
        h = t,
        g = a,
        S = l,
        N = h.flags;
      switch (h.tag) {
        case 0:
        case 11:
        case 15:
          (Nn(s, h, g, S, i), Nr(8, h));
          break;
        case 23:
          break;
        case 22:
          var Y = h.stateNode;
          (h.memoizedState !== null
            ? Y._visibility & 2
              ? Nn(s, h, g, S, i)
              : Lr(s, h)
            : ((Y._visibility |= 2), Nn(s, h, g, S, i)),
            i && N & 2048 && Us(h.alternate, h));
          break;
        case 24:
          (Nn(s, h, g, S, i), i && N & 2048 && Ls(h.alternate, h));
          break;
        default:
          Nn(s, h, g, S, i);
      }
      t = t.sibling;
    }
  }
  function Lr(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var a = e,
          l = t,
          i = l.flags;
        switch (l.tag) {
          case 22:
            (Lr(a, l), i & 2048 && Us(l.alternate, l));
            break;
          case 24:
            (Lr(a, l), i & 2048 && Ls(l.alternate, l));
            break;
          default:
            Lr(a, l);
        }
        t = t.sibling;
      }
  }
  var jr = 8192;
  function Un(e) {
    if (e.subtreeFlags & jr)
      for (e = e.child; e !== null; ) (Lh(e), (e = e.sibling));
  }
  function Lh(e) {
    switch (e.tag) {
      case 26:
        (Un(e),
          e.flags & jr &&
            e.memoizedState !== null &&
            K2(pa, e.memoizedState, e.memoizedProps));
        break;
      case 5:
        Un(e);
        break;
      case 3:
      case 4:
        var t = pa;
        ((pa = xu(e.stateNode.containerInfo)), Un(e), (pa = t));
        break;
      case 22:
        e.memoizedState === null &&
          ((t = e.alternate),
          t !== null && t.memoizedState !== null
            ? ((t = jr), (jr = 16777216), Un(e), (jr = t))
            : Un(e));
        break;
      default:
        Un(e);
    }
  }
  function jh(e) {
    var t = e.alternate;
    if (t !== null && ((e = t.child), e !== null)) {
      t.child = null;
      do ((t = e.sibling), (e.sibling = null), (e = t));
      while (e !== null);
    }
  }
  function Hr(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var l = t[a];
          ((St = l), Bh(l, e));
        }
      jh(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) (Hh(e), (e = e.sibling));
  }
  function Hh(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        (Hr(e), e.flags & 2048 && fl(9, e, e.return));
        break;
      case 3:
        Hr(e);
        break;
      case 12:
        Hr(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null &&
        t._visibility & 2 &&
        (e.return === null || e.return.tag !== 13)
          ? ((t._visibility &= -3), cu(e))
          : Hr(e);
        break;
      default:
        Hr(e);
    }
  }
  function cu(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var l = t[a];
          ((St = l), Bh(l, e));
        }
      jh(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((t = e), t.tag)) {
        case 0:
        case 11:
        case 15:
          (fl(8, t, t.return), cu(t));
          break;
        case 22:
          ((a = t.stateNode),
            a._visibility & 2 && ((a._visibility &= -3), cu(t)));
          break;
        default:
          cu(t);
      }
      e = e.sibling;
    }
  }
  function Bh(e, t) {
    for (; St !== null; ) {
      var a = St;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          fl(8, a, t);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var l = a.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          br(a.memoizedState.cache);
      }
      if (((l = a.child), l !== null)) ((l.return = a), (St = l));
      else
        e: for (a = e; St !== null; ) {
          l = St;
          var i = l.sibling,
            s = l.return;
          if ((Mh(l), l === a)) {
            St = null;
            break e;
          }
          if (i !== null) {
            ((i.return = s), (St = i));
            break e;
          }
          St = s;
        }
    }
  }
  var s2 = {
      getCacheForType: function (e) {
        var t = At(yt),
          a = t.data.get(e);
        return (a === void 0 && ((a = e()), t.data.set(e, a)), a);
      },
    },
    c2 = typeof WeakMap == "function" ? WeakMap : Map,
    Ze = 0,
    Ie = null,
    Le = null,
    ke = 0,
    Ke = 0,
    Ft = null,
    ml = !1,
    Ln = !1,
    js = !1,
    Fa = 0,
    ot = 0,
    pl = 0,
    Wl = 0,
    Hs = 0,
    ua = 0,
    jn = 0,
    Br = null,
    Bt = null,
    Bs = !1,
    qs = 0,
    fu = 1 / 0,
    du = null,
    yl = null,
    wt = 0,
    gl = null,
    Hn = null,
    Bn = 0,
    ks = 0,
    Ys = null,
    qh = null,
    qr = 0,
    Gs = null;
  function Pt() {
    if ((Ze & 2) !== 0 && ke !== 0) return ke & -ke;
    if (O.T !== null) {
      var e = Tn;
      return e !== 0 ? e : Fs();
    }
    return x();
  }
  function kh() {
    ua === 0 && (ua = (ke & 536870912) === 0 || Ve ? cn() : 536870912);
    var e = ia.current;
    return (e !== null && (e.flags |= 32), ua);
  }
  function $t(e, t, a) {
    (((e === Ie && (Ke === 2 || Ke === 9)) || e.cancelPendingCommit !== null) &&
      (qn(e, 0), vl(e, ke, ua, !1)),
      Ll(e, a),
      ((Ze & 2) === 0 || e !== Ie) &&
        (e === Ie &&
          ((Ze & 2) === 0 && (Wl |= a), ot === 4 && vl(e, ke, ua, !1)),
        Oa(e)));
  }
  function Yh(e, t, a) {
    if ((Ze & 6) !== 0) throw Error(o(327));
    var l = (!a && (t & 124) === 0 && (t & e.expiredLanes) === 0) || Ea(e, t),
      i = l ? h2(e, t) : Qs(e, t, !0),
      s = l;
    do {
      if (i === 0) {
        Ln && !l && vl(e, t, 0, !1);
        break;
      } else {
        if (((a = e.current.alternate), s && !f2(a))) {
          ((i = Qs(e, t, !1)), (s = !1));
          continue;
        }
        if (i === 2) {
          if (((s = t), e.errorRecoveryDisabledLanes & s)) var h = 0;
          else
            ((h = e.pendingLanes & -536870913),
              (h = h !== 0 ? h : h & 536870912 ? 536870912 : 0));
          if (h !== 0) {
            t = h;
            e: {
              var g = e;
              i = Br;
              var S = g.current.memoizedState.isDehydrated;
              if ((S && (qn(g, h).flags |= 256), (h = Qs(g, h, !1)), h !== 2)) {
                if (js && !S) {
                  ((g.errorRecoveryDisabledLanes |= s), (Wl |= s), (i = 4));
                  break e;
                }
                ((s = Bt),
                  (Bt = i),
                  s !== null &&
                    (Bt === null ? (Bt = s) : Bt.push.apply(Bt, s)));
              }
              i = h;
            }
            if (((s = !1), i !== 2)) continue;
          }
        }
        if (i === 1) {
          (qn(e, 0), vl(e, t, 0, !0));
          break;
        }
        e: {
          switch (((l = e), (s = i), s)) {
            case 0:
            case 1:
              throw Error(o(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              vl(l, t, ua, !ml);
              break e;
            case 2:
              Bt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(o(329));
          }
          if ((t & 62914560) === t && ((i = qs + 300 - Vt()), 10 < i)) {
            if ((vl(l, t, ua, !ml), Ul(l, 0, !0) !== 0)) break e;
            l.timeoutHandle = y0(
              Gh.bind(null, l, a, Bt, du, Bs, t, ua, Wl, jn, ml, s, 2, -0, 0),
              i,
            );
            break e;
          }
          Gh(l, a, Bt, du, Bs, t, ua, Wl, jn, ml, s, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    Oa(e);
  }
  function Gh(e, t, a, l, i, s, h, g, S, N, Y, Q, L, j) {
    if (
      ((e.timeoutHandle = -1),
      (Q = t.subtreeFlags),
      (Q & 8192 || (Q & 16785408) === 16785408) &&
        ((Zr = { stylesheets: null, count: 0, unsuspend: Z2 }),
        Lh(t),
        (Q = J2()),
        Q !== null))
    ) {
      ((e.cancelPendingCommit = Q(
        Fh.bind(null, e, t, s, a, l, i, h, g, S, Y, 1, L, j),
      )),
        vl(e, s, h, !N));
      return;
    }
    Fh(e, t, s, a, l, i, h, g, S);
  }
  function f2(e) {
    for (var t = e; ; ) {
      var a = t.tag;
      if (
        (a === 0 || a === 11 || a === 15) &&
        t.flags & 16384 &&
        ((a = t.updateQueue), a !== null && ((a = a.stores), a !== null))
      )
        for (var l = 0; l < a.length; l++) {
          var i = a[l],
            s = i.getSnapshot;
          i = i.value;
          try {
            if (!Qt(s(), i)) return !1;
          } catch {
            return !1;
          }
        }
      if (((a = t.child), t.subtreeFlags & 16384 && a !== null))
        ((a.return = t), (t = a));
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    }
    return !0;
  }
  function vl(e, t, a, l) {
    ((t &= ~Hs),
      (t &= ~Wl),
      (e.suspendedLanes |= t),
      (e.pingedLanes &= ~t),
      l && (e.warmLanes |= t),
      (l = e.expirationTimes));
    for (var i = t; 0 < i; ) {
      var s = 31 - xt(i),
        h = 1 << s;
      ((l[s] = -1), (i &= ~h));
    }
    a !== 0 && jl(e, a, t);
  }
  function hu() {
    return (Ze & 6) === 0 ? (kr(0), !1) : !0;
  }
  function Vs() {
    if (Le !== null) {
      if (Ke === 0) var e = Le.return;
      else ((e = Le), (Ya = Zl = null), is(e), (Dn = null), (_r = 0), (e = Le));
      for (; e !== null; ) (Eh(e.alternate, e), (e = e.return));
      Le = null;
    }
  }
  function qn(e, t) {
    var a = e.timeoutHandle;
    (a !== -1 && ((e.timeoutHandle = -1), M2(a)),
      (a = e.cancelPendingCommit),
      a !== null && ((e.cancelPendingCommit = null), a()),
      Vs(),
      (Ie = e),
      (Le = a = Ba(e.current, null)),
      (ke = t),
      (Ke = 0),
      (Ft = null),
      (ml = !1),
      (Ln = Ea(e, t)),
      (js = !1),
      (jn = ua = Hs = Wl = pl = ot = 0),
      (Bt = Br = null),
      (Bs = !1),
      (t & 8) !== 0 && (t |= t & 32));
    var l = e.entangledLanes;
    if (l !== 0)
      for (e = e.entanglements, l &= t; 0 < l; ) {
        var i = 31 - xt(l),
          s = 1 << i;
        ((t |= e[i]), (l &= ~s));
      }
    return ((Fa = t), Li(), a);
  }
  function Vh(e, t) {
    ((De = null),
      (O.H = eu),
      t === Er || t === Xi
        ? ((t = id()), (Ke = 3))
        : t === ld
          ? ((t = id()), (Ke = 4))
          : (Ke =
              t === uh
                ? 8
                : t !== null &&
                    typeof t == "object" &&
                    typeof t.then == "function"
                  ? 6
                  : 1),
      (Ft = t),
      Le === null && ((ot = 1), ru(e, aa(t, e.current))));
  }
  function Xh() {
    var e = O.H;
    return ((O.H = eu), e === null ? eu : e);
  }
  function Qh() {
    var e = O.A;
    return ((O.A = s2), e);
  }
  function Xs() {
    ((ot = 4),
      ml || ((ke & 4194048) !== ke && ia.current !== null) || (Ln = !0),
      ((pl & 134217727) === 0 && (Wl & 134217727) === 0) ||
        Ie === null ||
        vl(Ie, ke, ua, !1));
  }
  function Qs(e, t, a) {
    var l = Ze;
    Ze |= 2;
    var i = Xh(),
      s = Qh();
    ((Ie !== e || ke !== t) && ((du = null), qn(e, t)), (t = !1));
    var h = ot;
    e: do
      try {
        if (Ke !== 0 && Le !== null) {
          var g = Le,
            S = Ft;
          switch (Ke) {
            case 8:
              (Vs(), (h = 6));
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              ia.current === null && (t = !0);
              var N = Ke;
              if (((Ke = 0), (Ft = null), kn(e, g, S, N), a && Ln)) {
                h = 0;
                break e;
              }
              break;
            default:
              ((N = Ke), (Ke = 0), (Ft = null), kn(e, g, S, N));
          }
        }
        (d2(), (h = ot));
        break;
      } catch (Y) {
        Vh(e, Y);
      }
    while (!0);
    return (
      t && e.shellSuspendCounter++,
      (Ya = Zl = null),
      (Ze = l),
      (O.H = i),
      (O.A = s),
      Le === null && ((Ie = null), (ke = 0), Li()),
      h
    );
  }
  function d2() {
    for (; Le !== null; ) Zh(Le);
  }
  function h2(e, t) {
    var a = Ze;
    Ze |= 2;
    var l = Xh(),
      i = Qh();
    Ie !== e || ke !== t
      ? ((du = null), (fu = Vt() + 500), qn(e, t))
      : (Ln = Ea(e, t));
    e: do
      try {
        if (Ke !== 0 && Le !== null) {
          t = Le;
          var s = Ft;
          t: switch (Ke) {
            case 1:
              ((Ke = 0), (Ft = null), kn(e, t, s, 1));
              break;
            case 2:
            case 9:
              if (nd(s)) {
                ((Ke = 0), (Ft = null), Kh(t));
                break;
              }
              ((t = function () {
                ((Ke !== 2 && Ke !== 9) || Ie !== e || (Ke = 7), Oa(e));
              }),
                s.then(t, t));
              break e;
            case 3:
              Ke = 7;
              break e;
            case 4:
              Ke = 5;
              break e;
            case 7:
              nd(s)
                ? ((Ke = 0), (Ft = null), Kh(t))
                : ((Ke = 0), (Ft = null), kn(e, t, s, 7));
              break;
            case 5:
              var h = null;
              switch (Le.tag) {
                case 26:
                  h = Le.memoizedState;
                case 5:
                case 27:
                  var g = Le;
                  if (!h || C0(h)) {
                    ((Ke = 0), (Ft = null));
                    var S = g.sibling;
                    if (S !== null) Le = S;
                    else {
                      var N = g.return;
                      N !== null ? ((Le = N), mu(N)) : (Le = null);
                    }
                    break t;
                  }
              }
              ((Ke = 0), (Ft = null), kn(e, t, s, 5));
              break;
            case 6:
              ((Ke = 0), (Ft = null), kn(e, t, s, 6));
              break;
            case 8:
              (Vs(), (ot = 6));
              break e;
            default:
              throw Error(o(462));
          }
        }
        m2();
        break;
      } catch (Y) {
        Vh(e, Y);
      }
    while (!0);
    return (
      (Ya = Zl = null),
      (O.H = l),
      (O.A = i),
      (Ze = a),
      Le !== null ? 0 : ((Ie = null), (ke = 0), Li(), ot)
    );
  }
  function m2() {
    for (; Le !== null && !co(); ) Zh(Le);
  }
  function Zh(e) {
    var t = bh(e.alternate, e, Fa);
    ((e.memoizedProps = e.pendingProps), t === null ? mu(e) : (Le = t));
  }
  function Kh(e) {
    var t = e,
      a = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = hh(a, t, t.pendingProps, t.type, void 0, ke);
        break;
      case 11:
        t = hh(a, t, t.pendingProps, t.type.render, t.ref, ke);
        break;
      case 5:
        is(t);
      default:
        (Eh(a, t), (t = Le = Jf(t, Fa)), (t = bh(a, t, Fa)));
    }
    ((e.memoizedProps = e.pendingProps), t === null ? mu(e) : (Le = t));
  }
  function kn(e, t, a, l) {
    ((Ya = Zl = null), is(t), (Dn = null), (_r = 0));
    var i = t.return;
    try {
      if (l2(e, i, t, a, ke)) {
        ((ot = 1), ru(e, aa(a, e.current)), (Le = null));
        return;
      }
    } catch (s) {
      if (i !== null) throw ((Le = i), s);
      ((ot = 1), ru(e, aa(a, e.current)), (Le = null));
      return;
    }
    t.flags & 32768
      ? (Ve || l === 1
          ? (e = !0)
          : Ln || (ke & 536870912) !== 0
            ? (e = !1)
            : ((ml = e = !0),
              (l === 2 || l === 9 || l === 3 || l === 6) &&
                ((l = ia.current),
                l !== null && l.tag === 13 && (l.flags |= 16384))),
        Jh(t, e))
      : mu(t);
  }
  function mu(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        Jh(t, ml);
        return;
      }
      e = t.return;
      var a = r2(t.alternate, t, Fa);
      if (a !== null) {
        Le = a;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        Le = t;
        return;
      }
      Le = t = e;
    } while (t !== null);
    ot === 0 && (ot = 5);
  }
  function Jh(e, t) {
    do {
      var a = i2(e.alternate, e);
      if (a !== null) {
        ((a.flags &= 32767), (Le = a));
        return;
      }
      if (
        ((a = e.return),
        a !== null &&
          ((a.flags |= 32768), (a.subtreeFlags = 0), (a.deletions = null)),
        !t && ((e = e.sibling), e !== null))
      ) {
        Le = e;
        return;
      }
      Le = e = a;
    } while (e !== null);
    ((ot = 6), (Le = null));
  }
  function Fh(e, t, a, l, i, s, h, g, S) {
    e.cancelPendingCommit = null;
    do pu();
    while (wt !== 0);
    if ((Ze & 6) !== 0) throw Error(o(327));
    if (t !== null) {
      if (t === e.current) throw Error(o(177));
      if (
        ((s = t.lanes | t.childLanes),
        (s |= Lo),
        Ri(e, a, s, h, g, S),
        e === Ie && ((Le = Ie = null), (ke = 0)),
        (Hn = t),
        (gl = e),
        (Bn = a),
        (ks = s),
        (Ys = i),
        (qh = l),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((e.callbackNode = null),
            (e.callbackPriority = 0),
            v2(sn, function () {
              return (e0(), null);
            }))
          : ((e.callbackNode = null), (e.callbackPriority = 0)),
        (l = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || l)
      ) {
        ((l = O.T), (O.T = null), (i = P.p), (P.p = 2), (h = Ze), (Ze |= 4));
        try {
          u2(e, t, a);
        } finally {
          ((Ze = h), (P.p = i), (O.T = l));
        }
      }
      ((wt = 1), Ph(), $h(), Wh());
    }
  }
  function Ph() {
    if (wt === 1) {
      wt = 0;
      var e = gl,
        t = Hn,
        a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        ((a = O.T), (O.T = null));
        var l = P.p;
        P.p = 2;
        var i = Ze;
        Ze |= 4;
        try {
          zh(t, e);
          var s = lc,
            h = Bf(e.containerInfo),
            g = s.focusedElem,
            S = s.selectionRange;
          if (
            h !== g &&
            g &&
            g.ownerDocument &&
            Hf(g.ownerDocument.documentElement, g)
          ) {
            if (S !== null && _o(g)) {
              var N = S.start,
                Y = S.end;
              if ((Y === void 0 && (Y = N), "selectionStart" in g))
                ((g.selectionStart = N),
                  (g.selectionEnd = Math.min(Y, g.value.length)));
              else {
                var Q = g.ownerDocument || document,
                  L = (Q && Q.defaultView) || window;
                if (L.getSelection) {
                  var j = L.getSelection(),
                    Se = g.textContent.length,
                    ve = Math.min(S.start, Se),
                    $e = S.end === void 0 ? ve : Math.min(S.end, Se);
                  !j.extend && ve > $e && ((h = $e), ($e = ve), (ve = h));
                  var A = jf(g, ve),
                    R = jf(g, $e);
                  if (
                    A &&
                    R &&
                    (j.rangeCount !== 1 ||
                      j.anchorNode !== A.node ||
                      j.anchorOffset !== A.offset ||
                      j.focusNode !== R.node ||
                      j.focusOffset !== R.offset)
                  ) {
                    var _ = Q.createRange();
                    (_.setStart(A.node, A.offset),
                      j.removeAllRanges(),
                      ve > $e
                        ? (j.addRange(_), j.extend(R.node, R.offset))
                        : (_.setEnd(R.node, R.offset), j.addRange(_)));
                  }
                }
              }
            }
            for (Q = [], j = g; (j = j.parentNode); )
              j.nodeType === 1 &&
                Q.push({ element: j, left: j.scrollLeft, top: j.scrollTop });
            for (
              typeof g.focus == "function" && g.focus(), g = 0;
              g < Q.length;
              g++
            ) {
              var X = Q[g];
              ((X.element.scrollLeft = X.left), (X.element.scrollTop = X.top));
            }
          }
          ((Ou = !!ac), (lc = ac = null));
        } finally {
          ((Ze = i), (P.p = l), (O.T = a));
        }
      }
      ((e.current = t), (wt = 2));
    }
  }
  function $h() {
    if (wt === 2) {
      wt = 0;
      var e = gl,
        t = Hn,
        a = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || a) {
        ((a = O.T), (O.T = null));
        var l = P.p;
        P.p = 2;
        var i = Ze;
        Ze |= 4;
        try {
          Ch(e, t.alternate, t);
        } finally {
          ((Ze = i), (P.p = l), (O.T = a));
        }
      }
      wt = 3;
    }
  }
  function Wh() {
    if (wt === 4 || wt === 3) {
      ((wt = 0), fo());
      var e = gl,
        t = Hn,
        a = Bn,
        l = qh;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
        ? (wt = 5)
        : ((wt = 0), (Hn = gl = null), Ih(e, e.pendingLanes));
      var i = e.pendingLanes;
      if (
        (i === 0 && (yl = null),
        rr(a),
        (t = t.stateNode),
        lt && typeof lt.onCommitFiberRoot == "function")
      )
        try {
          lt.onCommitFiberRoot(Nt, t, void 0, (t.current.flags & 128) === 128);
        } catch {}
      if (l !== null) {
        ((t = O.T), (i = P.p), (P.p = 2), (O.T = null));
        try {
          for (var s = e.onRecoverableError, h = 0; h < l.length; h++) {
            var g = l[h];
            s(g.value, { componentStack: g.stack });
          }
        } finally {
          ((O.T = t), (P.p = i));
        }
      }
      ((Bn & 3) !== 0 && pu(),
        Oa(e),
        (i = e.pendingLanes),
        (a & 4194090) !== 0 && (i & 42) !== 0
          ? e === Gs
            ? qr++
            : ((qr = 0), (Gs = e))
          : (qr = 0),
        kr(0));
    }
  }
  function Ih(e, t) {
    (e.pooledCacheLanes &= t) === 0 &&
      ((t = e.pooledCache), t != null && ((e.pooledCache = null), br(t)));
  }
  function pu(e) {
    return (Ph(), $h(), Wh(), e0());
  }
  function e0() {
    if (wt !== 5) return !1;
    var e = gl,
      t = ks;
    ks = 0;
    var a = rr(Bn),
      l = O.T,
      i = P.p;
    try {
      ((P.p = 32 > a ? 32 : a), (O.T = null), (a = Ys), (Ys = null));
      var s = gl,
        h = Bn;
      if (((wt = 0), (Hn = gl = null), (Bn = 0), (Ze & 6) !== 0))
        throw Error(o(331));
      var g = Ze;
      if (
        ((Ze |= 4),
        Hh(s.current),
        Uh(s, s.current, h, a),
        (Ze = g),
        kr(0, !1),
        lt && typeof lt.onPostCommitFiberRoot == "function")
      )
        try {
          lt.onPostCommitFiberRoot(Nt, s);
        } catch {}
      return !0;
    } finally {
      ((P.p = i), (O.T = l), Ih(e, t));
    }
  }
  function t0(e, t, a) {
    ((t = aa(a, t)),
      (t = Ss(e.stateNode, t, 2)),
      (e = ul(e, t, 2)),
      e !== null && (Ll(e, 2), Oa(e)));
  }
  function We(e, t, a) {
    if (e.tag === 3) t0(e, e, a);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          t0(t, e, a);
          break;
        } else if (t.tag === 1) {
          var l = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof l.componentDidCatch == "function" &&
              (yl === null || !yl.has(l)))
          ) {
            ((e = aa(a, e)),
              (a = rh(2)),
              (l = ul(t, a, 2)),
              l !== null && (ih(a, l, t, e), Ll(l, 2), Oa(l)));
            break;
          }
        }
        t = t.return;
      }
  }
  function Zs(e, t, a) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new c2();
      var i = new Set();
      l.set(t, i);
    } else ((i = l.get(t)), i === void 0 && ((i = new Set()), l.set(t, i)));
    i.has(a) ||
      ((js = !0), i.add(a), (e = p2.bind(null, e, t, a)), t.then(e, e));
  }
  function p2(e, t, a) {
    var l = e.pingCache;
    (l !== null && l.delete(t),
      (e.pingedLanes |= e.suspendedLanes & a),
      (e.warmLanes &= ~a),
      Ie === e &&
        (ke & a) === a &&
        (ot === 4 || (ot === 3 && (ke & 62914560) === ke && 300 > Vt() - qs)
          ? (Ze & 2) === 0 && qn(e, 0)
          : (Hs |= a),
        jn === ke && (jn = 0)),
      Oa(e));
  }
  function a0(e, t) {
    (t === 0 && (t = xi()), (e = En(e, t)), e !== null && (Ll(e, t), Oa(e)));
  }
  function y2(e) {
    var t = e.memoizedState,
      a = 0;
    (t !== null && (a = t.retryLane), a0(e, a));
  }
  function g2(e, t) {
    var a = 0;
    switch (e.tag) {
      case 13:
        var l = e.stateNode,
          i = e.memoizedState;
        i !== null && (a = i.retryLane);
        break;
      case 19:
        l = e.stateNode;
        break;
      case 22:
        l = e.stateNode._retryCache;
        break;
      default:
        throw Error(o(314));
    }
    (l !== null && l.delete(t), a0(e, a));
  }
  function v2(e, t) {
    return ar(e, t);
  }
  var yu = null,
    Yn = null,
    Ks = !1,
    gu = !1,
    Js = !1,
    Il = 0;
  function Oa(e) {
    (e !== Yn &&
      e.next === null &&
      (Yn === null ? (yu = Yn = e) : (Yn = Yn.next = e)),
      (gu = !0),
      Ks || ((Ks = !0), S2()));
  }
  function kr(e, t) {
    if (!Js && gu) {
      Js = !0;
      do
        for (var a = !1, l = yu; l !== null; ) {
          if (e !== 0) {
            var i = l.pendingLanes;
            if (i === 0) var s = 0;
            else {
              var h = l.suspendedLanes,
                g = l.pingedLanes;
              ((s = (1 << (31 - xt(42 | e) + 1)) - 1),
                (s &= i & ~(h & ~g)),
                (s = s & 201326741 ? (s & 201326741) | 1 : s ? s | 2 : 0));
            }
            s !== 0 && ((a = !0), i0(l, s));
          } else
            ((s = ke),
              (s = Ul(
                l,
                l === Ie ? s : 0,
                l.cancelPendingCommit !== null || l.timeoutHandle !== -1,
              )),
              (s & 3) === 0 || Ea(l, s) || ((a = !0), i0(l, s)));
          l = l.next;
        }
      while (a);
      Js = !1;
    }
  }
  function b2() {
    l0();
  }
  function l0() {
    gu = Ks = !1;
    var e = 0;
    Il !== 0 && (C2() && (e = Il), (Il = 0));
    for (var t = Vt(), a = null, l = yu; l !== null; ) {
      var i = l.next,
        s = n0(l, t);
      (s === 0
        ? ((l.next = null),
          a === null ? (yu = i) : (a.next = i),
          i === null && (Yn = a))
        : ((a = l), (e !== 0 || (s & 3) !== 0) && (gu = !0)),
        (l = i));
    }
    kr(e);
  }
  function n0(e, t) {
    for (
      var a = e.suspendedLanes,
        l = e.pingedLanes,
        i = e.expirationTimes,
        s = e.pendingLanes & -62914561;
      0 < s;

    ) {
      var h = 31 - xt(s),
        g = 1 << h,
        S = i[h];
      (S === -1
        ? ((g & a) === 0 || (g & l) !== 0) && (i[h] = Ei(g, t))
        : S <= t && (e.expiredLanes |= g),
        (s &= ~g));
    }
    if (
      ((t = Ie),
      (a = ke),
      (a = Ul(
        e,
        e === t ? a : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
      )),
      (l = e.callbackNode),
      a === 0 ||
        (e === t && (Ke === 2 || Ke === 9)) ||
        e.cancelPendingCommit !== null)
    )
      return (
        l !== null && l !== null && da(l),
        (e.callbackNode = null),
        (e.callbackPriority = 0)
      );
    if ((a & 3) === 0 || Ea(e, a)) {
      if (((t = a & -a), t === e.callbackPriority)) return t;
      switch ((l !== null && da(l), rr(a))) {
        case 2:
        case 8:
          a = vi;
          break;
        case 32:
          a = sn;
          break;
        case 268435456:
          a = el;
          break;
        default:
          a = sn;
      }
      return (
        (l = r0.bind(null, e)),
        (a = ar(a, l)),
        (e.callbackPriority = t),
        (e.callbackNode = a),
        t
      );
    }
    return (
      l !== null && l !== null && da(l),
      (e.callbackPriority = 2),
      (e.callbackNode = null),
      2
    );
  }
  function r0(e, t) {
    if (wt !== 0 && wt !== 5)
      return ((e.callbackNode = null), (e.callbackPriority = 0), null);
    var a = e.callbackNode;
    if (pu() && e.callbackNode !== a) return null;
    var l = ke;
    return (
      (l = Ul(
        e,
        e === Ie ? l : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
      )),
      l === 0
        ? null
        : (Yh(e, l, t),
          n0(e, Vt()),
          e.callbackNode != null && e.callbackNode === a
            ? r0.bind(null, e)
            : null)
    );
  }
  function i0(e, t) {
    if (pu()) return null;
    Yh(e, t, !0);
  }
  function S2() {
    _2(function () {
      (Ze & 6) !== 0 ? ar(gi, b2) : l0();
    });
  }
  function Fs() {
    return (Il === 0 && (Il = cn()), Il);
  }
  function u0(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean"
      ? null
      : typeof e == "function"
        ? e
        : Ci("" + e);
  }
  function o0(e, t) {
    var a = t.ownerDocument.createElement("input");
    return (
      (a.name = t.name),
      (a.value = t.value),
      e.id && a.setAttribute("form", e.id),
      t.parentNode.insertBefore(a, t),
      (e = new FormData(e)),
      a.parentNode.removeChild(a),
      e
    );
  }
  function E2(e, t, a, l, i) {
    if (t === "submit" && a && a.stateNode === i) {
      var s = u0((i[W] || null).action),
        h = l.submitter;
      h &&
        ((t = (t = h[W] || null)
          ? u0(t.formAction)
          : h.getAttribute("formAction")),
        t !== null && ((s = t), (h = null)));
      var g = new zi("action", "action", null, l, i);
      e.push({
        event: g,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (l.defaultPrevented) {
                if (Il !== 0) {
                  var S = h ? o0(i, h) : new FormData(i);
                  ps(
                    a,
                    { pending: !0, data: S, method: i.method, action: s },
                    null,
                    S,
                  );
                }
              } else
                typeof s == "function" &&
                  (g.preventDefault(),
                  (S = h ? o0(i, h) : new FormData(i)),
                  ps(
                    a,
                    { pending: !0, data: S, method: i.method, action: s },
                    s,
                    S,
                  ));
            },
            currentTarget: i,
          },
        ],
      });
    }
  }
  for (var Ps = 0; Ps < Uo.length; Ps++) {
    var $s = Uo[Ps],
      x2 = $s.toLowerCase(),
      R2 = $s[0].toUpperCase() + $s.slice(1);
    ma(x2, "on" + R2);
  }
  (ma(Yf, "onAnimationEnd"),
    ma(Gf, "onAnimationIteration"),
    ma(Vf, "onAnimationStart"),
    ma("dblclick", "onDoubleClick"),
    ma("focusin", "onFocus"),
    ma("focusout", "onBlur"),
    ma(ky, "onTransitionRun"),
    ma(Yy, "onTransitionStart"),
    ma(Gy, "onTransitionCancel"),
    ma(Xf, "onTransitionEnd"),
    Dt("onMouseEnter", ["mouseout", "mouseover"]),
    Dt("onMouseLeave", ["mouseout", "mouseover"]),
    Dt("onPointerEnter", ["pointerout", "pointerover"]),
    Dt("onPointerLeave", ["pointerout", "pointerover"]),
    Xt(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    Xt(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    Xt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Xt(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    Xt(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    Xt(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var Yr =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    w2 = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(Yr),
    );
  function s0(e, t) {
    t = (t & 4) !== 0;
    for (var a = 0; a < e.length; a++) {
      var l = e[a],
        i = l.event;
      l = l.listeners;
      e: {
        var s = void 0;
        if (t)
          for (var h = l.length - 1; 0 <= h; h--) {
            var g = l[h],
              S = g.instance,
              N = g.currentTarget;
            if (((g = g.listener), S !== s && i.isPropagationStopped()))
              break e;
            ((s = g), (i.currentTarget = N));
            try {
              s(i);
            } catch (Y) {
              nu(Y);
            }
            ((i.currentTarget = null), (s = S));
          }
        else
          for (h = 0; h < l.length; h++) {
            if (
              ((g = l[h]),
              (S = g.instance),
              (N = g.currentTarget),
              (g = g.listener),
              S !== s && i.isPropagationStopped())
            )
              break e;
            ((s = g), (i.currentTarget = N));
            try {
              s(i);
            } catch (Y) {
              nu(Y);
            }
            ((i.currentTarget = null), (s = S));
          }
      }
    }
  }
  function je(e, t) {
    var a = t[he];
    a === void 0 && (a = t[he] = new Set());
    var l = e + "__bubble";
    a.has(l) || (c0(t, e, 2, !1), a.add(l));
  }
  function Ws(e, t, a) {
    var l = 0;
    (t && (l |= 4), c0(a, e, l, t));
  }
  var vu = "_reactListening" + Math.random().toString(36).slice(2);
  function Is(e) {
    if (!e[vu]) {
      ((e[vu] = !0),
        Je.forEach(function (a) {
          a !== "selectionchange" && (w2.has(a) || Ws(a, !1, e), Ws(a, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[vu] || ((t[vu] = !0), Ws("selectionchange", !1, t));
    }
  }
  function c0(e, t, a, l) {
    switch (U0(t)) {
      case 2:
        var i = $2;
        break;
      case 8:
        i = W2;
        break;
      default:
        i = hc;
    }
    ((a = i.bind(null, t, a, e)),
      (i = void 0),
      !Eo ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (i = !0),
      l
        ? i !== void 0
          ? e.addEventListener(t, a, { capture: !0, passive: i })
          : e.addEventListener(t, a, !0)
        : i !== void 0
          ? e.addEventListener(t, a, { passive: i })
          : e.addEventListener(t, a, !1));
  }
  function ec(e, t, a, l, i) {
    var s = l;
    if ((t & 1) === 0 && (t & 2) === 0 && l !== null)
      e: for (;;) {
        if (l === null) return;
        var h = l.tag;
        if (h === 3 || h === 4) {
          var g = l.stateNode.containerInfo;
          if (g === i) break;
          if (h === 4)
            for (h = l.return; h !== null; ) {
              var S = h.tag;
              if ((S === 3 || S === 4) && h.stateNode.containerInfo === i)
                return;
              h = h.return;
            }
          for (; g !== null; ) {
            if (((h = Me(g)), h === null)) return;
            if (((S = h.tag), S === 5 || S === 6 || S === 26 || S === 27)) {
              l = s = h;
              continue e;
            }
            g = g.parentNode;
          }
        }
        l = l.return;
      }
    gf(function () {
      var N = s,
        Y = bo(a),
        Q = [];
      e: {
        var L = Qf.get(e);
        if (L !== void 0) {
          var j = zi,
            Se = e;
          switch (e) {
            case "keypress":
              if (_i(a) === 0) break e;
            case "keydown":
            case "keyup":
              j = vy;
              break;
            case "focusin":
              ((Se = "focus"), (j = To));
              break;
            case "focusout":
              ((Se = "blur"), (j = To));
              break;
            case "beforeblur":
            case "afterblur":
              j = To;
              break;
            case "click":
              if (a.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              j = Sf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              j = iy;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              j = Ey;
              break;
            case Yf:
            case Gf:
            case Vf:
              j = sy;
              break;
            case Xf:
              j = Ry;
              break;
            case "scroll":
            case "scrollend":
              j = ny;
              break;
            case "wheel":
              j = Ty;
              break;
            case "copy":
            case "cut":
            case "paste":
              j = fy;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              j = xf;
              break;
            case "toggle":
            case "beforetoggle":
              j = Oy;
          }
          var ve = (t & 4) !== 0,
            $e = !ve && (e === "scroll" || e === "scrollend"),
            A = ve ? (L !== null ? L + "Capture" : null) : L;
          ve = [];
          for (var R = N, _; R !== null; ) {
            var X = R;
            if (
              ((_ = X.stateNode),
              (X = X.tag),
              (X !== 5 && X !== 26 && X !== 27) ||
                _ === null ||
                A === null ||
                ((X = ir(R, A)), X != null && ve.push(Gr(R, X, _))),
              $e)
            )
              break;
            R = R.return;
          }
          0 < ve.length &&
            ((L = new j(L, Se, null, a, Y)),
            Q.push({ event: L, listeners: ve }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((L = e === "mouseover" || e === "pointerover"),
            (j = e === "mouseout" || e === "pointerout"),
            L &&
              a !== vo &&
              (Se = a.relatedTarget || a.fromElement) &&
              (Me(Se) || Se[oe]))
          )
            break e;
          if (
            (j || L) &&
            ((L =
              Y.window === Y
                ? Y
                : (L = Y.ownerDocument)
                  ? L.defaultView || L.parentWindow
                  : window),
            j
              ? ((Se = a.relatedTarget || a.toElement),
                (j = N),
                (Se = Se ? Me(Se) : null),
                Se !== null &&
                  (($e = f(Se)),
                  (ve = Se.tag),
                  Se !== $e || (ve !== 5 && ve !== 27 && ve !== 6)) &&
                  (Se = null))
              : ((j = null), (Se = N)),
            j !== Se)
          ) {
            if (
              ((ve = Sf),
              (X = "onMouseLeave"),
              (A = "onMouseEnter"),
              (R = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((ve = xf),
                (X = "onPointerLeave"),
                (A = "onPointerEnter"),
                (R = "pointer")),
              ($e = j == null ? L : tt(j)),
              (_ = Se == null ? L : tt(Se)),
              (L = new ve(X, R + "leave", j, a, Y)),
              (L.target = $e),
              (L.relatedTarget = _),
              (X = null),
              Me(Y) === N &&
                ((ve = new ve(A, R + "enter", Se, a, Y)),
                (ve.target = _),
                (ve.relatedTarget = $e),
                (X = ve)),
              ($e = X),
              j && Se)
            )
              t: {
                for (ve = j, A = Se, R = 0, _ = ve; _; _ = Gn(_)) R++;
                for (_ = 0, X = A; X; X = Gn(X)) _++;
                for (; 0 < R - _; ) ((ve = Gn(ve)), R--);
                for (; 0 < _ - R; ) ((A = Gn(A)), _--);
                for (; R--; ) {
                  if (ve === A || (A !== null && ve === A.alternate)) break t;
                  ((ve = Gn(ve)), (A = Gn(A)));
                }
                ve = null;
              }
            else ve = null;
            (j !== null && f0(Q, L, j, ve, !1),
              Se !== null && $e !== null && f0(Q, $e, Se, ve, !0));
          }
        }
        e: {
          if (
            ((L = N ? tt(N) : window),
            (j = L.nodeName && L.nodeName.toLowerCase()),
            j === "select" || (j === "input" && L.type === "file"))
          )
            var re = _f;
          else if (Cf(L))
            if (Df) re = Hy;
            else {
              re = Ly;
              var Ne = Uy;
            }
          else
            ((j = L.nodeName),
              !j ||
              j.toLowerCase() !== "input" ||
              (L.type !== "checkbox" && L.type !== "radio")
                ? N && go(N.elementType) && (re = _f)
                : (re = jy));
          if (re && (re = re(e, N))) {
            Mf(Q, re, a, Y);
            break e;
          }
          (Ne && Ne(e, L, N),
            e === "focusout" &&
              N &&
              L.type === "number" &&
              N.memoizedProps.value != null &&
              yo(L, "number", L.value));
        }
        switch (((Ne = N ? tt(N) : window), e)) {
          case "focusin":
            (Cf(Ne) || Ne.contentEditable === "true") &&
              ((vn = Ne), (Do = N), (mr = null));
            break;
          case "focusout":
            mr = Do = vn = null;
            break;
          case "mousedown":
            zo = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((zo = !1), qf(Q, a, Y));
            break;
          case "selectionchange":
            if (qy) break;
          case "keydown":
          case "keyup":
            qf(Q, a, Y);
        }
        var me;
        if (Oo)
          e: {
            switch (e) {
              case "compositionstart":
                var be = "onCompositionStart";
                break e;
              case "compositionend":
                be = "onCompositionEnd";
                break e;
              case "compositionupdate":
                be = "onCompositionUpdate";
                break e;
            }
            be = void 0;
          }
        else
          gn
            ? Af(e, a) && (be = "onCompositionEnd")
            : e === "keydown" &&
              a.keyCode === 229 &&
              (be = "onCompositionStart");
        (be &&
          (Rf &&
            a.locale !== "ko" &&
            (gn || be !== "onCompositionStart"
              ? be === "onCompositionEnd" && gn && (me = vf())
              : ((ll = Y),
                (xo = "value" in ll ? ll.value : ll.textContent),
                (gn = !0))),
          (Ne = bu(N, be)),
          0 < Ne.length &&
            ((be = new Ef(be, e, null, a, Y)),
            Q.push({ event: be, listeners: Ne }),
            me
              ? (be.data = me)
              : ((me = Of(a)), me !== null && (be.data = me)))),
          (me = My ? _y(e, a) : Dy(e, a)) &&
            ((be = bu(N, "onBeforeInput")),
            0 < be.length &&
              ((Ne = new Ef("onBeforeInput", "beforeinput", null, a, Y)),
              Q.push({ event: Ne, listeners: be }),
              (Ne.data = me))),
          E2(Q, e, N, a, Y));
      }
      s0(Q, t);
    });
  }
  function Gr(e, t, a) {
    return { instance: e, listener: t, currentTarget: a };
  }
  function bu(e, t) {
    for (var a = t + "Capture", l = []; e !== null; ) {
      var i = e,
        s = i.stateNode;
      if (
        ((i = i.tag),
        (i !== 5 && i !== 26 && i !== 27) ||
          s === null ||
          ((i = ir(e, a)),
          i != null && l.unshift(Gr(e, i, s)),
          (i = ir(e, t)),
          i != null && l.push(Gr(e, i, s))),
        e.tag === 3)
      )
        return l;
      e = e.return;
    }
    return [];
  }
  function Gn(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function f0(e, t, a, l, i) {
    for (var s = t._reactName, h = []; a !== null && a !== l; ) {
      var g = a,
        S = g.alternate,
        N = g.stateNode;
      if (((g = g.tag), S !== null && S === l)) break;
      ((g !== 5 && g !== 26 && g !== 27) ||
        N === null ||
        ((S = N),
        i
          ? ((N = ir(a, s)), N != null && h.unshift(Gr(a, N, S)))
          : i || ((N = ir(a, s)), N != null && h.push(Gr(a, N, S)))),
        (a = a.return));
    }
    h.length !== 0 && e.push({ event: t, listeners: h });
  }
  var T2 = /\r\n?/g,
    A2 = /\u0000|\uFFFD/g;
  function d0(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        T2,
        `
`,
      )
      .replace(A2, "");
  }
  function h0(e, t) {
    return ((t = d0(t)), d0(e) === t);
  }
  function Su() {}
  function Pe(e, t, a, l, i, s) {
    switch (a) {
      case "children":
        typeof l == "string"
          ? t === "body" || (t === "textarea" && l === "") || mn(e, l)
          : (typeof l == "number" || typeof l == "bigint") &&
            t !== "body" &&
            mn(e, "" + l);
        break;
      case "className":
        La(e, "class", l);
        break;
      case "tabIndex":
        La(e, "tabindex", l);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        La(e, a, l);
        break;
      case "style":
        pf(e, l, s);
        break;
      case "data":
        if (t !== "object") {
          La(e, "data", l);
          break;
        }
      case "src":
      case "href":
        if (l === "" && (t !== "a" || a !== "href")) {
          e.removeAttribute(a);
          break;
        }
        if (
          l == null ||
          typeof l == "function" ||
          typeof l == "symbol" ||
          typeof l == "boolean"
        ) {
          e.removeAttribute(a);
          break;
        }
        ((l = Ci("" + l)), e.setAttribute(a, l));
        break;
      case "action":
      case "formAction":
        if (typeof l == "function") {
          e.setAttribute(
            a,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof s == "function" &&
            (a === "formAction"
              ? (t !== "input" && Pe(e, t, "name", i.name, i, null),
                Pe(e, t, "formEncType", i.formEncType, i, null),
                Pe(e, t, "formMethod", i.formMethod, i, null),
                Pe(e, t, "formTarget", i.formTarget, i, null))
              : (Pe(e, t, "encType", i.encType, i, null),
                Pe(e, t, "method", i.method, i, null),
                Pe(e, t, "target", i.target, i, null)));
        if (l == null || typeof l == "symbol" || typeof l == "boolean") {
          e.removeAttribute(a);
          break;
        }
        ((l = Ci("" + l)), e.setAttribute(a, l));
        break;
      case "onClick":
        l != null && (e.onclick = Su);
        break;
      case "onScroll":
        l != null && je("scroll", e);
        break;
      case "onScrollEnd":
        l != null && je("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l)) throw Error(o(61));
          if (((a = l.__html), a != null)) {
            if (i.children != null) throw Error(o(60));
            e.innerHTML = a;
          }
        }
        break;
      case "multiple":
        e.multiple = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "muted":
        e.muted = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          l == null ||
          typeof l == "function" ||
          typeof l == "boolean" ||
          typeof l == "symbol"
        ) {
          e.removeAttribute("xlink:href");
          break;
        }
        ((a = Ci("" + l)),
          e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a));
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        l != null && typeof l != "function" && typeof l != "symbol"
          ? e.setAttribute(a, "" + l)
          : e.removeAttribute(a);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        l && typeof l != "function" && typeof l != "symbol"
          ? e.setAttribute(a, "")
          : e.removeAttribute(a);
        break;
      case "capture":
      case "download":
        l === !0
          ? e.setAttribute(a, "")
          : l !== !1 &&
              l != null &&
              typeof l != "function" &&
              typeof l != "symbol"
            ? e.setAttribute(a, l)
            : e.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        l != null &&
        typeof l != "function" &&
        typeof l != "symbol" &&
        !isNaN(l) &&
        1 <= l
          ? e.setAttribute(a, l)
          : e.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        l == null || typeof l == "function" || typeof l == "symbol" || isNaN(l)
          ? e.removeAttribute(a)
          : e.setAttribute(a, l);
        break;
      case "popover":
        (je("beforetoggle", e), je("toggle", e), Ua(e, "popover", l));
        break;
      case "xlinkActuate":
        Ae(e, "http://www.w3.org/1999/xlink", "xlink:actuate", l);
        break;
      case "xlinkArcrole":
        Ae(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", l);
        break;
      case "xlinkRole":
        Ae(e, "http://www.w3.org/1999/xlink", "xlink:role", l);
        break;
      case "xlinkShow":
        Ae(e, "http://www.w3.org/1999/xlink", "xlink:show", l);
        break;
      case "xlinkTitle":
        Ae(e, "http://www.w3.org/1999/xlink", "xlink:title", l);
        break;
      case "xlinkType":
        Ae(e, "http://www.w3.org/1999/xlink", "xlink:type", l);
        break;
      case "xmlBase":
        Ae(e, "http://www.w3.org/XML/1998/namespace", "xml:base", l);
        break;
      case "xmlLang":
        Ae(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", l);
        break;
      case "xmlSpace":
        Ae(e, "http://www.w3.org/XML/1998/namespace", "xml:space", l);
        break;
      case "is":
        Ua(e, "is", l);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) ||
          (a[0] !== "o" && a[0] !== "O") ||
          (a[1] !== "n" && a[1] !== "N")) &&
          ((a = ay.get(a) || a), Ua(e, a, l));
    }
  }
  function tc(e, t, a, l, i, s) {
    switch (a) {
      case "style":
        pf(e, l, s);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l)) throw Error(o(61));
          if (((a = l.__html), a != null)) {
            if (i.children != null) throw Error(o(60));
            e.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof l == "string"
          ? mn(e, l)
          : (typeof l == "number" || typeof l == "bigint") && mn(e, "" + l);
        break;
      case "onScroll":
        l != null && je("scroll", e);
        break;
      case "onScrollEnd":
        l != null && je("scrollend", e);
        break;
      case "onClick":
        l != null && (e.onclick = Su);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!xa.hasOwnProperty(a))
          e: {
            if (
              a[0] === "o" &&
              a[1] === "n" &&
              ((i = a.endsWith("Capture")),
              (t = a.slice(2, i ? a.length - 7 : void 0)),
              (s = e[W] || null),
              (s = s != null ? s[a] : null),
              typeof s == "function" && e.removeEventListener(t, s, i),
              typeof l == "function")
            ) {
              (typeof s != "function" &&
                s !== null &&
                (a in e
                  ? (e[a] = null)
                  : e.hasAttribute(a) && e.removeAttribute(a)),
                e.addEventListener(t, l, i));
              break e;
            }
            a in e
              ? (e[a] = l)
              : l === !0
                ? e.setAttribute(a, "")
                : Ua(e, a, l);
          }
    }
  }
  function Tt(e, t, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        (je("error", e), je("load", e));
        var l = !1,
          i = !1,
          s;
        for (s in a)
          if (a.hasOwnProperty(s)) {
            var h = a[s];
            if (h != null)
              switch (s) {
                case "src":
                  l = !0;
                  break;
                case "srcSet":
                  i = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(o(137, t));
                default:
                  Pe(e, t, s, h, a, null);
              }
          }
        (i && Pe(e, t, "srcSet", a.srcSet, a, null),
          l && Pe(e, t, "src", a.src, a, null));
        return;
      case "input":
        je("invalid", e);
        var g = (s = h = i = null),
          S = null,
          N = null;
        for (l in a)
          if (a.hasOwnProperty(l)) {
            var Y = a[l];
            if (Y != null)
              switch (l) {
                case "name":
                  i = Y;
                  break;
                case "type":
                  h = Y;
                  break;
                case "checked":
                  S = Y;
                  break;
                case "defaultChecked":
                  N = Y;
                  break;
                case "value":
                  s = Y;
                  break;
                case "defaultValue":
                  g = Y;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (Y != null) throw Error(o(137, t));
                  break;
                default:
                  Pe(e, t, l, Y, a, null);
              }
          }
        (ff(e, s, g, S, N, h, i, !1), Ai(e));
        return;
      case "select":
        (je("invalid", e), (l = h = s = null));
        for (i in a)
          if (a.hasOwnProperty(i) && ((g = a[i]), g != null))
            switch (i) {
              case "value":
                s = g;
                break;
              case "defaultValue":
                h = g;
                break;
              case "multiple":
                l = g;
              default:
                Pe(e, t, i, g, a, null);
            }
        ((t = s),
          (a = h),
          (e.multiple = !!l),
          t != null ? hn(e, !!l, t, !1) : a != null && hn(e, !!l, a, !0));
        return;
      case "textarea":
        (je("invalid", e), (s = i = l = null));
        for (h in a)
          if (a.hasOwnProperty(h) && ((g = a[h]), g != null))
            switch (h) {
              case "value":
                l = g;
                break;
              case "defaultValue":
                i = g;
                break;
              case "children":
                s = g;
                break;
              case "dangerouslySetInnerHTML":
                if (g != null) throw Error(o(91));
                break;
              default:
                Pe(e, t, h, g, a, null);
            }
        (hf(e, l, i, s), Ai(e));
        return;
      case "option":
        for (S in a)
          if (a.hasOwnProperty(S) && ((l = a[S]), l != null))
            switch (S) {
              case "selected":
                e.selected =
                  l && typeof l != "function" && typeof l != "symbol";
                break;
              default:
                Pe(e, t, S, l, a, null);
            }
        return;
      case "dialog":
        (je("beforetoggle", e),
          je("toggle", e),
          je("cancel", e),
          je("close", e));
        break;
      case "iframe":
      case "object":
        je("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < Yr.length; l++) je(Yr[l], e);
        break;
      case "image":
        (je("error", e), je("load", e));
        break;
      case "details":
        je("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        (je("error", e), je("load", e));
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (N in a)
          if (a.hasOwnProperty(N) && ((l = a[N]), l != null))
            switch (N) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(o(137, t));
              default:
                Pe(e, t, N, l, a, null);
            }
        return;
      default:
        if (go(t)) {
          for (Y in a)
            a.hasOwnProperty(Y) &&
              ((l = a[Y]), l !== void 0 && tc(e, t, Y, l, a, void 0));
          return;
        }
    }
    for (g in a)
      a.hasOwnProperty(g) && ((l = a[g]), l != null && Pe(e, t, g, l, a, null));
  }
  function O2(e, t, a, l) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var i = null,
          s = null,
          h = null,
          g = null,
          S = null,
          N = null,
          Y = null;
        for (j in a) {
          var Q = a[j];
          if (a.hasOwnProperty(j) && Q != null)
            switch (j) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                S = Q;
              default:
                l.hasOwnProperty(j) || Pe(e, t, j, null, l, Q);
            }
        }
        for (var L in l) {
          var j = l[L];
          if (((Q = a[L]), l.hasOwnProperty(L) && (j != null || Q != null)))
            switch (L) {
              case "type":
                s = j;
                break;
              case "name":
                i = j;
                break;
              case "checked":
                N = j;
                break;
              case "defaultChecked":
                Y = j;
                break;
              case "value":
                h = j;
                break;
              case "defaultValue":
                g = j;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (j != null) throw Error(o(137, t));
                break;
              default:
                j !== Q && Pe(e, t, L, j, l, Q);
            }
        }
        po(e, h, g, S, N, Y, s, i);
        return;
      case "select":
        j = h = g = L = null;
        for (s in a)
          if (((S = a[s]), a.hasOwnProperty(s) && S != null))
            switch (s) {
              case "value":
                break;
              case "multiple":
                j = S;
              default:
                l.hasOwnProperty(s) || Pe(e, t, s, null, l, S);
            }
        for (i in l)
          if (
            ((s = l[i]),
            (S = a[i]),
            l.hasOwnProperty(i) && (s != null || S != null))
          )
            switch (i) {
              case "value":
                L = s;
                break;
              case "defaultValue":
                g = s;
                break;
              case "multiple":
                h = s;
              default:
                s !== S && Pe(e, t, i, s, l, S);
            }
        ((t = g),
          (a = h),
          (l = j),
          L != null
            ? hn(e, !!a, L, !1)
            : !!l != !!a &&
              (t != null ? hn(e, !!a, t, !0) : hn(e, !!a, a ? [] : "", !1)));
        return;
      case "textarea":
        j = L = null;
        for (g in a)
          if (
            ((i = a[g]),
            a.hasOwnProperty(g) && i != null && !l.hasOwnProperty(g))
          )
            switch (g) {
              case "value":
                break;
              case "children":
                break;
              default:
                Pe(e, t, g, null, l, i);
            }
        for (h in l)
          if (
            ((i = l[h]),
            (s = a[h]),
            l.hasOwnProperty(h) && (i != null || s != null))
          )
            switch (h) {
              case "value":
                L = i;
                break;
              case "defaultValue":
                j = i;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (i != null) throw Error(o(91));
                break;
              default:
                i !== s && Pe(e, t, h, i, l, s);
            }
        df(e, L, j);
        return;
      case "option":
        for (var Se in a)
          if (
            ((L = a[Se]),
            a.hasOwnProperty(Se) && L != null && !l.hasOwnProperty(Se))
          )
            switch (Se) {
              case "selected":
                e.selected = !1;
                break;
              default:
                Pe(e, t, Se, null, l, L);
            }
        for (S in l)
          if (
            ((L = l[S]),
            (j = a[S]),
            l.hasOwnProperty(S) && L !== j && (L != null || j != null))
          )
            switch (S) {
              case "selected":
                e.selected =
                  L && typeof L != "function" && typeof L != "symbol";
                break;
              default:
                Pe(e, t, S, L, l, j);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var ve in a)
          ((L = a[ve]),
            a.hasOwnProperty(ve) &&
              L != null &&
              !l.hasOwnProperty(ve) &&
              Pe(e, t, ve, null, l, L));
        for (N in l)
          if (
            ((L = l[N]),
            (j = a[N]),
            l.hasOwnProperty(N) && L !== j && (L != null || j != null))
          )
            switch (N) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (L != null) throw Error(o(137, t));
                break;
              default:
                Pe(e, t, N, L, l, j);
            }
        return;
      default:
        if (go(t)) {
          for (var $e in a)
            ((L = a[$e]),
              a.hasOwnProperty($e) &&
                L !== void 0 &&
                !l.hasOwnProperty($e) &&
                tc(e, t, $e, void 0, l, L));
          for (Y in l)
            ((L = l[Y]),
              (j = a[Y]),
              !l.hasOwnProperty(Y) ||
                L === j ||
                (L === void 0 && j === void 0) ||
                tc(e, t, Y, L, l, j));
          return;
        }
    }
    for (var A in a)
      ((L = a[A]),
        a.hasOwnProperty(A) &&
          L != null &&
          !l.hasOwnProperty(A) &&
          Pe(e, t, A, null, l, L));
    for (Q in l)
      ((L = l[Q]),
        (j = a[Q]),
        !l.hasOwnProperty(Q) ||
          L === j ||
          (L == null && j == null) ||
          Pe(e, t, Q, L, l, j));
  }
  var ac = null,
    lc = null;
  function Eu(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function m0(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function p0(e, t) {
    if (e === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && t === "foreignObject" ? 0 : e;
  }
  function nc(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      typeof t.children == "bigint" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var rc = null;
  function C2() {
    var e = window.event;
    return e && e.type === "popstate"
      ? e === rc
        ? !1
        : ((rc = e), !0)
      : ((rc = null), !1);
  }
  var y0 = typeof setTimeout == "function" ? setTimeout : void 0,
    M2 = typeof clearTimeout == "function" ? clearTimeout : void 0,
    g0 = typeof Promise == "function" ? Promise : void 0,
    _2 =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof g0 < "u"
          ? function (e) {
              return g0.resolve(null).then(e).catch(D2);
            }
          : y0;
  function D2(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function bl(e) {
    return e === "head";
  }
  function v0(e, t) {
    var a = t,
      l = 0,
      i = 0;
    do {
      var s = a.nextSibling;
      if ((e.removeChild(a), s && s.nodeType === 8))
        if (((a = s.data), a === "/$")) {
          if (0 < l && 8 > l) {
            a = l;
            var h = e.ownerDocument;
            if ((a & 1 && Vr(h.documentElement), a & 2 && Vr(h.body), a & 4))
              for (a = h.head, Vr(a), h = a.firstChild; h; ) {
                var g = h.nextSibling,
                  S = h.nodeName;
                (h[ce] ||
                  S === "SCRIPT" ||
                  S === "STYLE" ||
                  (S === "LINK" && h.rel.toLowerCase() === "stylesheet") ||
                  a.removeChild(h),
                  (h = g));
              }
          }
          if (i === 0) {
            (e.removeChild(s), $r(t));
            return;
          }
          i--;
        } else
          a === "$" || a === "$?" || a === "$!"
            ? i++
            : (l = a.charCodeAt(0) - 48);
      else l = 0;
      a = s;
    } while (a);
    $r(t);
  }
  function ic(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var a = t;
      switch (((t = t.nextSibling), a.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          (ic(a), de(a));
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (a.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(a);
    }
  }
  function z2(e, t, a, l) {
    for (; e.nodeType === 1; ) {
      var i = a;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!l && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
      } else if (l) {
        if (!e[ce])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (
                ((s = e.getAttribute("rel")),
                s === "stylesheet" && e.hasAttribute("data-precedence"))
              )
                break;
              if (
                s !== i.rel ||
                e.getAttribute("href") !==
                  (i.href == null || i.href === "" ? null : i.href) ||
                e.getAttribute("crossorigin") !==
                  (i.crossOrigin == null ? null : i.crossOrigin) ||
                e.getAttribute("title") !== (i.title == null ? null : i.title)
              )
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (
                ((s = e.getAttribute("src")),
                (s !== (i.src == null ? null : i.src) ||
                  e.getAttribute("type") !== (i.type == null ? null : i.type) ||
                  e.getAttribute("crossorigin") !==
                    (i.crossOrigin == null ? null : i.crossOrigin)) &&
                  s &&
                  e.hasAttribute("async") &&
                  !e.hasAttribute("itemprop"))
              )
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var s = i.name == null ? null : "" + i.name;
        if (i.type === "hidden" && e.getAttribute("name") === s) return e;
      } else return e;
      if (((e = ya(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function N2(e, t, a) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !a) ||
        ((e = ya(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function uc(e) {
    return (
      e.data === "$!" ||
      (e.data === "$?" && e.ownerDocument.readyState === "complete")
    );
  }
  function U2(e, t) {
    var a = e.ownerDocument;
    if (e.data !== "$?" || a.readyState === "complete") t();
    else {
      var l = function () {
        (t(), a.removeEventListener("DOMContentLoaded", l));
      };
      (a.addEventListener("DOMContentLoaded", l), (e._reactRetry = l));
    }
  }
  function ya(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (
          ((t = e.data),
          t === "$" || t === "$!" || t === "$?" || t === "F!" || t === "F")
        )
          break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  var oc = null;
  function b0(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var a = e.data;
        if (a === "$" || a === "$!" || a === "$?") {
          if (t === 0) return e;
          t--;
        } else a === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function S0(e, t, a) {
    switch (((t = Eu(a)), e)) {
      case "html":
        if (((e = t.documentElement), !e)) throw Error(o(452));
        return e;
      case "head":
        if (((e = t.head), !e)) throw Error(o(453));
        return e;
      case "body":
        if (((e = t.body), !e)) throw Error(o(454));
        return e;
      default:
        throw Error(o(451));
    }
  }
  function Vr(e) {
    for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
    de(e);
  }
  var oa = new Map(),
    E0 = new Set();
  function xu(e) {
    return typeof e.getRootNode == "function"
      ? e.getRootNode()
      : e.nodeType === 9
        ? e
        : e.ownerDocument;
  }
  var Pa = P.d;
  P.d = { f: L2, r: j2, D: H2, C: B2, L: q2, m: k2, X: G2, S: Y2, M: V2 };
  function L2() {
    var e = Pa.f(),
      t = hu();
    return e || t;
  }
  function j2(e) {
    var t = Ge(e);
    t !== null && t.tag === 5 && t.type === "form" ? Yd(t) : Pa.r(e);
  }
  var Vn = typeof document > "u" ? null : document;
  function x0(e, t, a) {
    var l = Vn;
    if (l && typeof t == "string" && t) {
      var i = ta(t);
      ((i = 'link[rel="' + e + '"][href="' + i + '"]'),
        typeof a == "string" && (i += '[crossorigin="' + a + '"]'),
        E0.has(i) ||
          (E0.add(i),
          (e = { rel: e, crossOrigin: a, href: t }),
          l.querySelector(i) === null &&
            ((t = l.createElement("link")),
            Tt(t, "link", e),
            Te(t),
            l.head.appendChild(t))));
    }
  }
  function H2(e) {
    (Pa.D(e), x0("dns-prefetch", e, null));
  }
  function B2(e, t) {
    (Pa.C(e, t), x0("preconnect", e, t));
  }
  function q2(e, t, a) {
    Pa.L(e, t, a);
    var l = Vn;
    if (l && e && t) {
      var i = 'link[rel="preload"][as="' + ta(t) + '"]';
      t === "image" && a && a.imageSrcSet
        ? ((i += '[imagesrcset="' + ta(a.imageSrcSet) + '"]'),
          typeof a.imageSizes == "string" &&
            (i += '[imagesizes="' + ta(a.imageSizes) + '"]'))
        : (i += '[href="' + ta(e) + '"]');
      var s = i;
      switch (t) {
        case "style":
          s = Xn(e);
          break;
        case "script":
          s = Qn(e);
      }
      oa.has(s) ||
        ((e = v(
          {
            rel: "preload",
            href: t === "image" && a && a.imageSrcSet ? void 0 : e,
            as: t,
          },
          a,
        )),
        oa.set(s, e),
        l.querySelector(i) !== null ||
          (t === "style" && l.querySelector(Xr(s))) ||
          (t === "script" && l.querySelector(Qr(s))) ||
          ((t = l.createElement("link")),
          Tt(t, "link", e),
          Te(t),
          l.head.appendChild(t)));
    }
  }
  function k2(e, t) {
    Pa.m(e, t);
    var a = Vn;
    if (a && e) {
      var l = t && typeof t.as == "string" ? t.as : "script",
        i =
          'link[rel="modulepreload"][as="' + ta(l) + '"][href="' + ta(e) + '"]',
        s = i;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          s = Qn(e);
      }
      if (
        !oa.has(s) &&
        ((e = v({ rel: "modulepreload", href: e }, t)),
        oa.set(s, e),
        a.querySelector(i) === null)
      ) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(Qr(s))) return;
        }
        ((l = a.createElement("link")),
          Tt(l, "link", e),
          Te(l),
          a.head.appendChild(l));
      }
    }
  }
  function Y2(e, t, a) {
    Pa.S(e, t, a);
    var l = Vn;
    if (l && e) {
      var i = it(l).hoistableStyles,
        s = Xn(e);
      t = t || "default";
      var h = i.get(s);
      if (!h) {
        var g = { loading: 0, preload: null };
        if ((h = l.querySelector(Xr(s)))) g.loading = 5;
        else {
          ((e = v({ rel: "stylesheet", href: e, "data-precedence": t }, a)),
            (a = oa.get(s)) && sc(e, a));
          var S = (h = l.createElement("link"));
          (Te(S),
            Tt(S, "link", e),
            (S._p = new Promise(function (N, Y) {
              ((S.onload = N), (S.onerror = Y));
            })),
            S.addEventListener("load", function () {
              g.loading |= 1;
            }),
            S.addEventListener("error", function () {
              g.loading |= 2;
            }),
            (g.loading |= 4),
            Ru(h, t, l));
        }
        ((h = { type: "stylesheet", instance: h, count: 1, state: g }),
          i.set(s, h));
      }
    }
  }
  function G2(e, t) {
    Pa.X(e, t);
    var a = Vn;
    if (a && e) {
      var l = it(a).hoistableScripts,
        i = Qn(e),
        s = l.get(i);
      s ||
        ((s = a.querySelector(Qr(i))),
        s ||
          ((e = v({ src: e, async: !0 }, t)),
          (t = oa.get(i)) && cc(e, t),
          (s = a.createElement("script")),
          Te(s),
          Tt(s, "link", e),
          a.head.appendChild(s)),
        (s = { type: "script", instance: s, count: 1, state: null }),
        l.set(i, s));
    }
  }
  function V2(e, t) {
    Pa.M(e, t);
    var a = Vn;
    if (a && e) {
      var l = it(a).hoistableScripts,
        i = Qn(e),
        s = l.get(i);
      s ||
        ((s = a.querySelector(Qr(i))),
        s ||
          ((e = v({ src: e, async: !0, type: "module" }, t)),
          (t = oa.get(i)) && cc(e, t),
          (s = a.createElement("script")),
          Te(s),
          Tt(s, "link", e),
          a.head.appendChild(s)),
        (s = { type: "script", instance: s, count: 1, state: null }),
        l.set(i, s));
    }
  }
  function R0(e, t, a, l) {
    var i = (i = ye.current) ? xu(i) : null;
    if (!i) throw Error(o(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string"
          ? ((t = Xn(a.href)),
            (a = it(i).hoistableStyles),
            (l = a.get(t)),
            l ||
              ((l = { type: "style", instance: null, count: 0, state: null }),
              a.set(t, l)),
            l)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          a.rel === "stylesheet" &&
          typeof a.href == "string" &&
          typeof a.precedence == "string"
        ) {
          e = Xn(a.href);
          var s = it(i).hoistableStyles,
            h = s.get(e);
          if (
            (h ||
              ((i = i.ownerDocument || i),
              (h = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              s.set(e, h),
              (s = i.querySelector(Xr(e))) &&
                !s._p &&
                ((h.instance = s), (h.state.loading = 5)),
              oa.has(e) ||
                ((a = {
                  rel: "preload",
                  as: "style",
                  href: a.href,
                  crossOrigin: a.crossOrigin,
                  integrity: a.integrity,
                  media: a.media,
                  hrefLang: a.hrefLang,
                  referrerPolicy: a.referrerPolicy,
                }),
                oa.set(e, a),
                s || X2(i, e, a, h.state))),
            t && l === null)
          )
            throw Error(o(528, ""));
          return h;
        }
        if (t && l !== null) throw Error(o(529, ""));
        return null;
      case "script":
        return (
          (t = a.async),
          (a = a.src),
          typeof a == "string" &&
          t &&
          typeof t != "function" &&
          typeof t != "symbol"
            ? ((t = Qn(a)),
              (a = it(i).hoistableScripts),
              (l = a.get(t)),
              l ||
                ((l = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                a.set(t, l)),
              l)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(o(444, e));
    }
  }
  function Xn(e) {
    return 'href="' + ta(e) + '"';
  }
  function Xr(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function w0(e) {
    return v({}, e, { "data-precedence": e.precedence, precedence: null });
  }
  function X2(e, t, a, l) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]")
      ? (l.loading = 1)
      : ((t = e.createElement("link")),
        (l.preload = t),
        t.addEventListener("load", function () {
          return (l.loading |= 1);
        }),
        t.addEventListener("error", function () {
          return (l.loading |= 2);
        }),
        Tt(t, "link", a),
        Te(t),
        e.head.appendChild(t));
  }
  function Qn(e) {
    return '[src="' + ta(e) + '"]';
  }
  function Qr(e) {
    return "script[async]" + e;
  }
  function T0(e, t, a) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case "style":
          var l = e.querySelector('style[data-href~="' + ta(a.href) + '"]');
          if (l) return ((t.instance = l), Te(l), l);
          var i = v({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null,
          });
          return (
            (l = (e.ownerDocument || e).createElement("style")),
            Te(l),
            Tt(l, "style", i),
            Ru(l, a.precedence, e),
            (t.instance = l)
          );
        case "stylesheet":
          i = Xn(a.href);
          var s = e.querySelector(Xr(i));
          if (s) return ((t.state.loading |= 4), (t.instance = s), Te(s), s);
          ((l = w0(a)),
            (i = oa.get(i)) && sc(l, i),
            (s = (e.ownerDocument || e).createElement("link")),
            Te(s));
          var h = s;
          return (
            (h._p = new Promise(function (g, S) {
              ((h.onload = g), (h.onerror = S));
            })),
            Tt(s, "link", l),
            (t.state.loading |= 4),
            Ru(s, a.precedence, e),
            (t.instance = s)
          );
        case "script":
          return (
            (s = Qn(a.src)),
            (i = e.querySelector(Qr(s)))
              ? ((t.instance = i), Te(i), i)
              : ((l = a),
                (i = oa.get(s)) && ((l = v({}, a)), cc(l, i)),
                (e = e.ownerDocument || e),
                (i = e.createElement("script")),
                Te(i),
                Tt(i, "link", l),
                e.head.appendChild(i),
                (t.instance = i))
          );
        case "void":
          return null;
        default:
          throw Error(o(443, t.type));
      }
    else
      t.type === "stylesheet" &&
        (t.state.loading & 4) === 0 &&
        ((l = t.instance), (t.state.loading |= 4), Ru(l, a.precedence, e));
    return t.instance;
  }
  function Ru(e, t, a) {
    for (
      var l = a.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]',
        ),
        i = l.length ? l[l.length - 1] : null,
        s = i,
        h = 0;
      h < l.length;
      h++
    ) {
      var g = l[h];
      if (g.dataset.precedence === t) s = g;
      else if (s !== i) break;
    }
    s
      ? s.parentNode.insertBefore(e, s.nextSibling)
      : ((t = a.nodeType === 9 ? a.head : a), t.insertBefore(e, t.firstChild));
  }
  function sc(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.title == null && (e.title = t.title));
  }
  function cc(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.integrity == null && (e.integrity = t.integrity));
  }
  var wu = null;
  function A0(e, t, a) {
    if (wu === null) {
      var l = new Map(),
        i = (wu = new Map());
      i.set(a, l);
    } else ((i = wu), (l = i.get(a)), l || ((l = new Map()), i.set(a, l)));
    if (l.has(e)) return l;
    for (
      l.set(e, null), a = a.getElementsByTagName(e), i = 0;
      i < a.length;
      i++
    ) {
      var s = a[i];
      if (
        !(
          s[ce] ||
          s[Z] ||
          (e === "link" && s.getAttribute("rel") === "stylesheet")
        ) &&
        s.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var h = s.getAttribute(t) || "";
        h = e + h;
        var g = l.get(h);
        g ? g.push(s) : l.set(h, [s]);
      }
    }
    return l;
  }
  function O0(e, t, a) {
    ((e = e.ownerDocument || e),
      e.head.insertBefore(
        a,
        t === "title" ? e.querySelector("head > title") : null,
      ));
  }
  function Q2(e, t, a) {
    if (a === 1 || t.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof t.precedence != "string" ||
          typeof t.href != "string" ||
          t.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof t.rel != "string" ||
          typeof t.href != "string" ||
          t.href === "" ||
          t.onLoad ||
          t.onError
        )
          break;
        switch (t.rel) {
          case "stylesheet":
            return (
              (e = t.disabled),
              typeof t.precedence == "string" && e == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          t.async &&
          typeof t.async != "function" &&
          typeof t.async != "symbol" &&
          !t.onLoad &&
          !t.onError &&
          t.src &&
          typeof t.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function C0(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  var Zr = null;
  function Z2() {}
  function K2(e, t, a) {
    if (Zr === null) throw Error(o(475));
    var l = Zr;
    if (
      t.type === "stylesheet" &&
      (typeof a.media != "string" || matchMedia(a.media).matches !== !1) &&
      (t.state.loading & 4) === 0
    ) {
      if (t.instance === null) {
        var i = Xn(a.href),
          s = e.querySelector(Xr(i));
        if (s) {
          ((e = s._p),
            e !== null &&
              typeof e == "object" &&
              typeof e.then == "function" &&
              (l.count++, (l = Tu.bind(l)), e.then(l, l)),
            (t.state.loading |= 4),
            (t.instance = s),
            Te(s));
          return;
        }
        ((s = e.ownerDocument || e),
          (a = w0(a)),
          (i = oa.get(i)) && sc(a, i),
          (s = s.createElement("link")),
          Te(s));
        var h = s;
        ((h._p = new Promise(function (g, S) {
          ((h.onload = g), (h.onerror = S));
        })),
          Tt(s, "link", a),
          (t.instance = s));
      }
      (l.stylesheets === null && (l.stylesheets = new Map()),
        l.stylesheets.set(t, e),
        (e = t.state.preload) &&
          (t.state.loading & 3) === 0 &&
          (l.count++,
          (t = Tu.bind(l)),
          e.addEventListener("load", t),
          e.addEventListener("error", t)));
    }
  }
  function J2() {
    if (Zr === null) throw Error(o(475));
    var e = Zr;
    return (
      e.stylesheets && e.count === 0 && fc(e, e.stylesheets),
      0 < e.count
        ? function (t) {
            var a = setTimeout(function () {
              if ((e.stylesheets && fc(e, e.stylesheets), e.unsuspend)) {
                var l = e.unsuspend;
                ((e.unsuspend = null), l());
              }
            }, 6e4);
            return (
              (e.unsuspend = t),
              function () {
                ((e.unsuspend = null), clearTimeout(a));
              }
            );
          }
        : null
    );
  }
  function Tu() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) fc(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        ((this.unsuspend = null), e());
      }
    }
  }
  var Au = null;
  function fc(e, t) {
    ((e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++,
        (Au = new Map()),
        t.forEach(F2, e),
        (Au = null),
        Tu.call(e)));
  }
  function F2(e, t) {
    if (!(t.state.loading & 4)) {
      var a = Au.get(e);
      if (a) var l = a.get(null);
      else {
        ((a = new Map()), Au.set(e, a));
        for (
          var i = e.querySelectorAll(
              "link[data-precedence],style[data-precedence]",
            ),
            s = 0;
          s < i.length;
          s++
        ) {
          var h = i[s];
          (h.nodeName === "LINK" || h.getAttribute("media") !== "not all") &&
            (a.set(h.dataset.precedence, h), (l = h));
        }
        l && a.set(null, l);
      }
      ((i = t.instance),
        (h = i.getAttribute("data-precedence")),
        (s = a.get(h) || l),
        s === l && a.set(null, i),
        a.set(h, i),
        this.count++,
        (l = Tu.bind(this)),
        i.addEventListener("load", l),
        i.addEventListener("error", l),
        s
          ? s.parentNode.insertBefore(i, s.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e),
            e.insertBefore(i, e.firstChild)),
        (t.state.loading |= 4));
    }
  }
  var Kr = {
    $$typeof: ee,
    Provider: null,
    Consumer: null,
    _currentValue: G,
    _currentValue2: G,
    _threadCount: 0,
  };
  function P2(e, t, a, l, i, s, h, g) {
    ((this.tag = 1),
      (this.containerInfo = e),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = fn(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = fn(0)),
      (this.hiddenUpdates = fn(null)),
      (this.identifierPrefix = l),
      (this.onUncaughtError = i),
      (this.onCaughtError = s),
      (this.onRecoverableError = h),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = g),
      (this.incompleteTransitions = new Map()));
  }
  function M0(e, t, a, l, i, s, h, g, S, N, Y, Q) {
    return (
      (e = new P2(e, t, a, h, g, S, N, Q)),
      (t = 1),
      s === !0 && (t |= 24),
      (s = Zt(3, null, null, t)),
      (e.current = s),
      (s.stateNode = e),
      (t = Zo()),
      t.refCount++,
      (e.pooledCache = t),
      t.refCount++,
      (s.memoizedState = { element: l, isDehydrated: a, cache: t }),
      Po(s),
      e
    );
  }
  function _0(e) {
    return e ? ((e = xn), e) : xn;
  }
  function D0(e, t, a, l, i, s) {
    ((i = _0(i)),
      l.context === null ? (l.context = i) : (l.pendingContext = i),
      (l = il(t)),
      (l.payload = { element: a }),
      (s = s === void 0 ? null : s),
      s !== null && (l.callback = s),
      (a = ul(e, l, t)),
      a !== null && ($t(a, e, t), Rr(a, e, t)));
  }
  function z0(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var a = e.retryLane;
      e.retryLane = a !== 0 && a < t ? a : t;
    }
  }
  function dc(e, t) {
    (z0(e, t), (e = e.alternate) && z0(e, t));
  }
  function N0(e) {
    if (e.tag === 13) {
      var t = En(e, 67108864);
      (t !== null && $t(t, e, 67108864), dc(e, 67108864));
    }
  }
  var Ou = !0;
  function $2(e, t, a, l) {
    var i = O.T;
    O.T = null;
    var s = P.p;
    try {
      ((P.p = 2), hc(e, t, a, l));
    } finally {
      ((P.p = s), (O.T = i));
    }
  }
  function W2(e, t, a, l) {
    var i = O.T;
    O.T = null;
    var s = P.p;
    try {
      ((P.p = 8), hc(e, t, a, l));
    } finally {
      ((P.p = s), (O.T = i));
    }
  }
  function hc(e, t, a, l) {
    if (Ou) {
      var i = mc(l);
      if (i === null) (ec(e, t, l, Cu, a), L0(e, l));
      else if (e1(i, e, t, a, l)) l.stopPropagation();
      else if ((L0(e, l), t & 4 && -1 < I2.indexOf(e))) {
        for (; i !== null; ) {
          var s = Ge(i);
          if (s !== null)
            switch (s.tag) {
              case 3:
                if (((s = s.stateNode), s.current.memoizedState.isDehydrated)) {
                  var h = za(s.pendingLanes);
                  if (h !== 0) {
                    var g = s;
                    for (g.pendingLanes |= 2, g.entangledLanes |= 2; h; ) {
                      var S = 1 << (31 - xt(h));
                      ((g.entanglements[1] |= S), (h &= ~S));
                    }
                    (Oa(s), (Ze & 6) === 0 && ((fu = Vt() + 500), kr(0)));
                  }
                }
                break;
              case 13:
                ((g = En(s, 2)), g !== null && $t(g, s, 2), hu(), dc(s, 2));
            }
          if (((s = mc(l)), s === null && ec(e, t, l, Cu, a), s === i)) break;
          i = s;
        }
        i !== null && l.stopPropagation();
      } else ec(e, t, l, null, a);
    }
  }
  function mc(e) {
    return ((e = bo(e)), pc(e));
  }
  var Cu = null;
  function pc(e) {
    if (((Cu = null), (e = Me(e)), e !== null)) {
      var t = f(e);
      if (t === null) e = null;
      else {
        var a = t.tag;
        if (a === 13) {
          if (((e = d(t)), e !== null)) return e;
          e = null;
        } else if (a === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return ((Cu = e), null);
  }
  function U0(e) {
    switch (e) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (ho()) {
          case gi:
            return 2;
          case vi:
            return 8;
          case sn:
          case Da:
            return 32;
          case el:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var yc = !1,
    Sl = null,
    El = null,
    xl = null,
    Jr = new Map(),
    Fr = new Map(),
    Rl = [],
    I2 =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " ",
      );
  function L0(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Sl = null;
        break;
      case "dragenter":
      case "dragleave":
        El = null;
        break;
      case "mouseover":
      case "mouseout":
        xl = null;
        break;
      case "pointerover":
      case "pointerout":
        Jr.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Fr.delete(t.pointerId);
    }
  }
  function Pr(e, t, a, l, i, s) {
    return e === null || e.nativeEvent !== s
      ? ((e = {
          blockedOn: t,
          domEventName: a,
          eventSystemFlags: l,
          nativeEvent: s,
          targetContainers: [i],
        }),
        t !== null && ((t = Ge(t)), t !== null && N0(t)),
        e)
      : ((e.eventSystemFlags |= l),
        (t = e.targetContainers),
        i !== null && t.indexOf(i) === -1 && t.push(i),
        e);
  }
  function e1(e, t, a, l, i) {
    switch (t) {
      case "focusin":
        return ((Sl = Pr(Sl, e, t, a, l, i)), !0);
      case "dragenter":
        return ((El = Pr(El, e, t, a, l, i)), !0);
      case "mouseover":
        return ((xl = Pr(xl, e, t, a, l, i)), !0);
      case "pointerover":
        var s = i.pointerId;
        return (Jr.set(s, Pr(Jr.get(s) || null, e, t, a, l, i)), !0);
      case "gotpointercapture":
        return (
          (s = i.pointerId),
          Fr.set(s, Pr(Fr.get(s) || null, e, t, a, l, i)),
          !0
        );
    }
    return !1;
  }
  function j0(e) {
    var t = Me(e.target);
    if (t !== null) {
      var a = f(t);
      if (a !== null) {
        if (((t = a.tag), t === 13)) {
          if (((t = d(a)), t !== null)) {
            ((e.blockedOn = t),
              M(e.priority, function () {
                if (a.tag === 13) {
                  var l = Pt();
                  l = nr(l);
                  var i = En(a, l);
                  (i !== null && $t(i, a, l), dc(a, l));
                }
              }));
            return;
          }
        } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Mu(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var a = mc(e.nativeEvent);
      if (a === null) {
        a = e.nativeEvent;
        var l = new a.constructor(a.type, a);
        ((vo = l), a.target.dispatchEvent(l), (vo = null));
      } else return ((t = Ge(a)), t !== null && N0(t), (e.blockedOn = a), !1);
      t.shift();
    }
    return !0;
  }
  function H0(e, t, a) {
    Mu(e) && a.delete(t);
  }
  function t1() {
    ((yc = !1),
      Sl !== null && Mu(Sl) && (Sl = null),
      El !== null && Mu(El) && (El = null),
      xl !== null && Mu(xl) && (xl = null),
      Jr.forEach(H0),
      Fr.forEach(H0));
  }
  function _u(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      yc ||
        ((yc = !0),
        n.unstable_scheduleCallback(n.unstable_NormalPriority, t1)));
  }
  var Du = null;
  function B0(e) {
    Du !== e &&
      ((Du = e),
      n.unstable_scheduleCallback(n.unstable_NormalPriority, function () {
        Du === e && (Du = null);
        for (var t = 0; t < e.length; t += 3) {
          var a = e[t],
            l = e[t + 1],
            i = e[t + 2];
          if (typeof l != "function") {
            if (pc(l || a) === null) continue;
            break;
          }
          var s = Ge(a);
          s !== null &&
            (e.splice(t, 3),
            (t -= 3),
            ps(s, { pending: !0, data: i, method: a.method, action: l }, l, i));
        }
      }));
  }
  function $r(e) {
    function t(S) {
      return _u(S, e);
    }
    (Sl !== null && _u(Sl, e),
      El !== null && _u(El, e),
      xl !== null && _u(xl, e),
      Jr.forEach(t),
      Fr.forEach(t));
    for (var a = 0; a < Rl.length; a++) {
      var l = Rl[a];
      l.blockedOn === e && (l.blockedOn = null);
    }
    for (; 0 < Rl.length && ((a = Rl[0]), a.blockedOn === null); )
      (j0(a), a.blockedOn === null && Rl.shift());
    if (((a = (e.ownerDocument || e).$$reactFormReplay), a != null))
      for (l = 0; l < a.length; l += 3) {
        var i = a[l],
          s = a[l + 1],
          h = i[W] || null;
        if (typeof s == "function") h || B0(a);
        else if (h) {
          var g = null;
          if (s && s.hasAttribute("formAction")) {
            if (((i = s), (h = s[W] || null))) g = h.formAction;
            else if (pc(i) !== null) continue;
          } else g = h.action;
          (typeof g == "function" ? (a[l + 1] = g) : (a.splice(l, 3), (l -= 3)),
            B0(a));
        }
      }
  }
  function gc(e) {
    this._internalRoot = e;
  }
  ((zu.prototype.render = gc.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(o(409));
      var a = t.current,
        l = Pt();
      D0(a, l, e, t, null, null);
    }),
    (zu.prototype.unmount = gc.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (D0(e.current, 2, null, e, null, null), hu(), (t[oe] = null));
        }
      }));
  function zu(e) {
    this._internalRoot = e;
  }
  zu.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = x();
      e = { blockedOn: null, target: e, priority: t };
      for (var a = 0; a < Rl.length && t !== 0 && t < Rl[a].priority; a++);
      (Rl.splice(a, 0, e), a === 0 && j0(e));
    }
  };
  var q0 = r.version;
  if (q0 !== "19.1.1") throw Error(o(527, q0, "19.1.1"));
  P.findDOMNode = function (e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function"
        ? Error(o(188))
        : ((e = Object.keys(e).join(",")), Error(o(268, e)));
    return (
      (e = y(t)),
      (e = e !== null ? m(e) : null),
      (e = e === null ? null : e.stateNode),
      e
    );
  };
  var a1 = {
    bundleType: 0,
    version: "19.1.1",
    rendererPackageName: "react-dom",
    currentDispatcherRef: O,
    reconcilerVersion: "19.1.1",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Nu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Nu.isDisabled && Nu.supportsFiber)
      try {
        ((Nt = Nu.inject(a1)), (lt = Nu));
      } catch {}
  }
  return (
    (Ir.createRoot = function (e, t) {
      if (!c(e)) throw Error(o(299));
      var a = !1,
        l = "",
        i = th,
        s = ah,
        h = lh,
        g = null;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (a = !0),
          t.identifierPrefix !== void 0 && (l = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (i = t.onUncaughtError),
          t.onCaughtError !== void 0 && (s = t.onCaughtError),
          t.onRecoverableError !== void 0 && (h = t.onRecoverableError),
          t.unstable_transitionCallbacks !== void 0 &&
            (g = t.unstable_transitionCallbacks)),
        (t = M0(e, 1, !1, null, null, a, l, i, s, h, g, null)),
        (e[oe] = t.current),
        Is(e),
        new gc(t)
      );
    }),
    (Ir.hydrateRoot = function (e, t, a) {
      if (!c(e)) throw Error(o(299));
      var l = !1,
        i = "",
        s = th,
        h = ah,
        g = lh,
        S = null,
        N = null;
      return (
        a != null &&
          (a.unstable_strictMode === !0 && (l = !0),
          a.identifierPrefix !== void 0 && (i = a.identifierPrefix),
          a.onUncaughtError !== void 0 && (s = a.onUncaughtError),
          a.onCaughtError !== void 0 && (h = a.onCaughtError),
          a.onRecoverableError !== void 0 && (g = a.onRecoverableError),
          a.unstable_transitionCallbacks !== void 0 &&
            (S = a.unstable_transitionCallbacks),
          a.formState !== void 0 && (N = a.formState)),
        (t = M0(e, 1, !0, t, a ?? null, l, i, s, h, g, S, N)),
        (t.context = _0(null)),
        (a = t.current),
        (l = Pt()),
        (l = nr(l)),
        (i = il(l)),
        (i.callback = null),
        ul(a, i, l),
        (a = l),
        (t.current.lanes = a),
        Ll(t, a),
        Oa(t),
        (e[oe] = t.current),
        Is(e),
        new zu(t)
      );
    }),
    (Ir.version = "19.1.1"),
    Ir
  );
}
var F0;
function d1() {
  if (F0) return bc.exports;
  F0 = 1;
  function n() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (r) {
        console.error(r);
      }
  }
  return (n(), (bc.exports = f1()), bc.exports);
}
var h1 = d1(),
  C = Kc();
const m1 = n1(C);
/**
 * react-router v7.9.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var Gm = (n) => {
    throw TypeError(n);
  },
  p1 = (n, r, u) => r.has(n) || Gm("Cannot " + u),
  wc = (n, r, u) => (
    p1(n, r, "read from private field"),
    u ? u.call(n) : r.get(n)
  ),
  y1 = (n, r, u) =>
    r.has(n)
      ? Gm("Cannot add the same private member more than once")
      : r instanceof WeakSet
        ? r.add(n)
        : r.set(n, u),
  P0 = "popstate";
function g1(n = {}) {
  function r(o, c) {
    let { pathname: f, search: d, hash: p } = o.location;
    return ii(
      "",
      { pathname: f, search: d, hash: p },
      (c.state && c.state.usr) || null,
      (c.state && c.state.key) || "default",
    );
  }
  function u(o, c) {
    return typeof c == "string" ? c : Ml(c);
  }
  return b1(r, u, null, n);
}
function He(n, r) {
  if (n === !1 || n === null || typeof n > "u") throw new Error(r);
}
function dt(n, r) {
  if (!n) {
    typeof console < "u" && console.warn(r);
    try {
      throw new Error(r);
    } catch {}
  }
}
function v1() {
  return Math.random().toString(36).substring(2, 10);
}
function $0(n, r) {
  return { usr: n.state, key: n.key, idx: r };
}
function ii(n, r, u = null, o) {
  return {
    pathname: typeof n == "string" ? n : n.pathname,
    search: "",
    hash: "",
    ...(typeof r == "string" ? _l(r) : r),
    state: u,
    key: (r && r.key) || o || v1(),
  };
}
function Ml({ pathname: n = "/", search: r = "", hash: u = "" }) {
  return (
    r && r !== "?" && (n += r.charAt(0) === "?" ? r : "?" + r),
    u && u !== "#" && (n += u.charAt(0) === "#" ? u : "#" + u),
    n
  );
}
function _l(n) {
  let r = {};
  if (n) {
    let u = n.indexOf("#");
    u >= 0 && ((r.hash = n.substring(u)), (n = n.substring(0, u)));
    let o = n.indexOf("?");
    (o >= 0 && ((r.search = n.substring(o)), (n = n.substring(0, o))),
      n && (r.pathname = n));
  }
  return r;
}
function b1(n, r, u, o = {}) {
  let { window: c = document.defaultView, v5Compat: f = !1 } = o,
    d = c.history,
    p = "POP",
    y = null,
    m = v();
  m == null && ((m = 0), d.replaceState({ ...d.state, idx: m }, ""));
  function v() {
    return (d.state || { idx: null }).idx;
  }
  function b() {
    p = "POP";
    let D = v(),
      V = D == null ? null : D - m;
    ((m = D), y && y({ action: p, location: q.location, delta: V }));
  }
  function T(D, V) {
    p = "PUSH";
    let F = ii(q.location, D, V);
    m = v() + 1;
    let ee = $0(F, m),
      le = q.createHref(F);
    try {
      d.pushState(ee, "", le);
    } catch ($) {
      if ($ instanceof DOMException && $.name === "DataCloneError") throw $;
      c.location.assign(le);
    }
    f && y && y({ action: p, location: q.location, delta: 1 });
  }
  function U(D, V) {
    p = "REPLACE";
    let F = ii(q.location, D, V);
    m = v();
    let ee = $0(F, m),
      le = q.createHref(F);
    (d.replaceState(ee, "", le),
      f && y && y({ action: p, location: q.location, delta: 0 }));
  }
  function w(D) {
    return Vm(D);
  }
  let q = {
    get action() {
      return p;
    },
    get location() {
      return n(c, d);
    },
    listen(D) {
      if (y) throw new Error("A history only accepts one active listener");
      return (
        c.addEventListener(P0, b),
        (y = D),
        () => {
          (c.removeEventListener(P0, b), (y = null));
        }
      );
    },
    createHref(D) {
      return r(c, D);
    },
    createURL: w,
    encodeLocation(D) {
      let V = w(D);
      return { pathname: V.pathname, search: V.search, hash: V.hash };
    },
    push: T,
    replace: U,
    go(D) {
      return d.go(D);
    },
  };
  return q;
}
function Vm(n, r = !1) {
  let u = "http://localhost";
  (typeof window < "u" &&
    (u =
      window.location.origin !== "null"
        ? window.location.origin
        : window.location.href),
    He(u, "No window.location.(origin|href) available to create URL"));
  let o = typeof n == "string" ? n : Ml(n);
  return (
    (o = o.replace(/ $/, "%20")),
    !r && o.startsWith("//") && (o = u + o),
    new URL(o, u)
  );
}
var ri,
  W0 = class {
    constructor(n) {
      if ((y1(this, ri, new Map()), n)) for (let [r, u] of n) this.set(r, u);
    }
    get(n) {
      if (wc(this, ri).has(n)) return wc(this, ri).get(n);
      if (n.defaultValue !== void 0) return n.defaultValue;
      throw new Error("No value found for context");
    }
    set(n, r) {
      wc(this, ri).set(n, r);
    }
  };
ri = new WeakMap();
var S1 = new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);
function E1(n) {
  return S1.has(n);
}
var x1 = new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "middleware",
  "children",
]);
function R1(n) {
  return x1.has(n);
}
function w1(n) {
  return n.index === !0;
}
function ui(n, r, u = [], o = {}, c = !1) {
  return n.map((f, d) => {
    let p = [...u, String(d)],
      y = typeof f.id == "string" ? f.id : p.join("-");
    if (
      (He(
        f.index !== !0 || !f.children,
        "Cannot specify children on an index route",
      ),
      He(
        c || !o[y],
        `Found a route id collision on id "${y}".  Route id's must be globally unique within Data Router usages`,
      ),
      w1(f))
    ) {
      let m = { ...f, ...r(f), id: y };
      return ((o[y] = m), m);
    } else {
      let m = { ...f, ...r(f), id: y, children: void 0 };
      return (
        (o[y] = m),
        f.children && (m.children = ui(f.children, r, p, o, c)),
        m
      );
    }
  });
}
function Ol(n, r, u = "/") {
  return Yu(n, r, u, !1);
}
function Yu(n, r, u, o) {
  let c = typeof r == "string" ? _l(r) : r,
    f = ca(c.pathname || "/", u);
  if (f == null) return null;
  let d = Xm(n);
  A1(d);
  let p = null;
  for (let y = 0; p == null && y < d.length; ++y) {
    let m = H1(f);
    p = L1(d[y], m, o);
  }
  return p;
}
function T1(n, r) {
  let { route: u, pathname: o, params: c } = n;
  return {
    id: u.id,
    pathname: o,
    params: c,
    data: r[u.id],
    loaderData: r[u.id],
    handle: u.handle,
  };
}
function Xm(n, r = [], u = [], o = "", c = !1) {
  let f = (d, p, y = c, m) => {
    let v = {
      relativePath: m === void 0 ? d.path || "" : m,
      caseSensitive: d.caseSensitive === !0,
      childrenIndex: p,
      route: d,
    };
    if (v.relativePath.startsWith("/")) {
      if (!v.relativePath.startsWith(o) && y) return;
      (He(
        v.relativePath.startsWith(o),
        `Absolute route path "${v.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`,
      ),
        (v.relativePath = v.relativePath.slice(o.length)));
    }
    let b = Ma([o, v.relativePath]),
      T = u.concat(v);
    (d.children &&
      d.children.length > 0 &&
      (He(
        d.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${b}".`,
      ),
      Xm(d.children, r, T, b, y)),
      !(d.path == null && !d.index) &&
        r.push({ path: b, score: N1(b, d.index), routesMeta: T }));
  };
  return (
    n.forEach((d, p) => {
      if (d.path === "" || !d.path?.includes("?")) f(d, p);
      else for (let y of Qm(d.path)) f(d, p, !0, y);
    }),
    r
  );
}
function Qm(n) {
  let r = n.split("/");
  if (r.length === 0) return [];
  let [u, ...o] = r,
    c = u.endsWith("?"),
    f = u.replace(/\?$/, "");
  if (o.length === 0) return c ? [f, ""] : [f];
  let d = Qm(o.join("/")),
    p = [];
  return (
    p.push(...d.map((y) => (y === "" ? f : [f, y].join("/")))),
    c && p.push(...d),
    p.map((y) => (n.startsWith("/") && y === "" ? "/" : y))
  );
}
function A1(n) {
  n.sort((r, u) =>
    r.score !== u.score
      ? u.score - r.score
      : U1(
          r.routesMeta.map((o) => o.childrenIndex),
          u.routesMeta.map((o) => o.childrenIndex),
        ),
  );
}
var O1 = /^:[\w-]+$/,
  C1 = 3,
  M1 = 2,
  _1 = 1,
  D1 = 10,
  z1 = -2,
  I0 = (n) => n === "*";
function N1(n, r) {
  let u = n.split("/"),
    o = u.length;
  return (
    u.some(I0) && (o += z1),
    r && (o += M1),
    u
      .filter((c) => !I0(c))
      .reduce((c, f) => c + (O1.test(f) ? C1 : f === "" ? _1 : D1), o)
  );
}
function U1(n, r) {
  return n.length === r.length && n.slice(0, -1).every((o, c) => o === r[c])
    ? n[n.length - 1] - r[r.length - 1]
    : 0;
}
function L1(n, r, u = !1) {
  let { routesMeta: o } = n,
    c = {},
    f = "/",
    d = [];
  for (let p = 0; p < o.length; ++p) {
    let y = o[p],
      m = p === o.length - 1,
      v = f === "/" ? r : r.slice(f.length) || "/",
      b = Iu(
        { path: y.relativePath, caseSensitive: y.caseSensitive, end: m },
        v,
      ),
      T = y.route;
    if (
      (!b &&
        m &&
        u &&
        !o[o.length - 1].route.index &&
        (b = Iu(
          { path: y.relativePath, caseSensitive: y.caseSensitive, end: !1 },
          v,
        )),
      !b)
    )
      return null;
    (Object.assign(c, b.params),
      d.push({
        params: c,
        pathname: Ma([f, b.pathname]),
        pathnameBase: Y1(Ma([f, b.pathnameBase])),
        route: T,
      }),
      b.pathnameBase !== "/" && (f = Ma([f, b.pathnameBase])));
  }
  return d;
}
function Iu(n, r) {
  typeof n == "string" && (n = { path: n, caseSensitive: !1, end: !0 });
  let [u, o] = j1(n.path, n.caseSensitive, n.end),
    c = r.match(u);
  if (!c) return null;
  let f = c[0],
    d = f.replace(/(.)\/+$/, "$1"),
    p = c.slice(1);
  return {
    params: o.reduce((m, { paramName: v, isOptional: b }, T) => {
      if (v === "*") {
        let w = p[T] || "";
        d = f.slice(0, f.length - w.length).replace(/(.)\/+$/, "$1");
      }
      const U = p[T];
      return (
        b && !U ? (m[v] = void 0) : (m[v] = (U || "").replace(/%2F/g, "/")),
        m
      );
    }, {}),
    pathname: f,
    pathnameBase: d,
    pattern: n,
  };
}
function j1(n, r = !1, u = !0) {
  dt(
    n === "*" || !n.endsWith("*") || n.endsWith("/*"),
    `Route path "${n}" will be treated as if it were "${n.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/, "/*")}".`,
  );
  let o = [],
    c =
      "^" +
      n
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (d, p, y) => (
            o.push({ paramName: p, isOptional: y != null }),
            y ? "/?([^\\/]+)?" : "/([^\\/]+)"
          ),
        )
        .replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
  return (
    n.endsWith("*")
      ? (o.push({ paramName: "*" }),
        (c += n === "*" || n === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : u
        ? (c += "\\/*$")
        : n !== "" && n !== "/" && (c += "(?:(?=\\/|$))"),
    [new RegExp(c, r ? void 0 : "i"), o]
  );
}
function H1(n) {
  try {
    return n
      .split("/")
      .map((r) => decodeURIComponent(r).replace(/\//g, "%2F"))
      .join("/");
  } catch (r) {
    return (
      dt(
        !1,
        `The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`,
      ),
      n
    );
  }
}
function ca(n, r) {
  if (r === "/") return n;
  if (!n.toLowerCase().startsWith(r.toLowerCase())) return null;
  let u = r.endsWith("/") ? r.length - 1 : r.length,
    o = n.charAt(u);
  return o && o !== "/" ? null : n.slice(u) || "/";
}
function B1({ basename: n, pathname: r }) {
  return r === "/" ? n : Ma([n, r]);
}
function q1(n, r = "/") {
  let {
    pathname: u,
    search: o = "",
    hash: c = "",
  } = typeof n == "string" ? _l(n) : n;
  return {
    pathname: u ? (u.startsWith("/") ? u : k1(u, r)) : r,
    search: G1(o),
    hash: V1(c),
  };
}
function k1(n, r) {
  let u = r.replace(/\/+$/, "").split("/");
  return (
    n.split("/").forEach((c) => {
      c === ".." ? u.length > 1 && u.pop() : c !== "." && u.push(c);
    }),
    u.length > 1 ? u.join("/") : "/"
  );
}
function Tc(n, r, u, o) {
  return `Cannot include a '${n}' character in a manually specified \`to.${r}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${u}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function Zm(n) {
  return n.filter(
    (r, u) => u === 0 || (r.route.path && r.route.path.length > 0),
  );
}
function Jc(n) {
  let r = Zm(n);
  return r.map((u, o) => (o === r.length - 1 ? u.pathname : u.pathnameBase));
}
function Fc(n, r, u, o = !1) {
  let c;
  typeof n == "string"
    ? (c = _l(n))
    : ((c = { ...n }),
      He(
        !c.pathname || !c.pathname.includes("?"),
        Tc("?", "pathname", "search", c),
      ),
      He(
        !c.pathname || !c.pathname.includes("#"),
        Tc("#", "pathname", "hash", c),
      ),
      He(!c.search || !c.search.includes("#"), Tc("#", "search", "hash", c)));
  let f = n === "" || c.pathname === "",
    d = f ? "/" : c.pathname,
    p;
  if (d == null) p = u;
  else {
    let b = r.length - 1;
    if (!o && d.startsWith("..")) {
      let T = d.split("/");
      for (; T[0] === ".."; ) (T.shift(), (b -= 1));
      c.pathname = T.join("/");
    }
    p = b >= 0 ? r[b] : "/";
  }
  let y = q1(c, p),
    m = d && d !== "/" && d.endsWith("/"),
    v = (f || d === ".") && u.endsWith("/");
  return (!y.pathname.endsWith("/") && (m || v) && (y.pathname += "/"), y);
}
var Ma = (n) => n.join("/").replace(/\/\/+/g, "/"),
  Y1 = (n) => n.replace(/\/+$/, "").replace(/^\/*/, "/"),
  G1 = (n) => (!n || n === "?" ? "" : n.startsWith("?") ? n : "?" + n),
  V1 = (n) => (!n || n === "#" ? "" : n.startsWith("#") ? n : "#" + n),
  eo = class {
    constructor(n, r, u, o = !1) {
      ((this.status = n),
        (this.statusText = r || ""),
        (this.internal = o),
        u instanceof Error
          ? ((this.data = u.toString()), (this.error = u))
          : (this.data = u));
    }
  };
function oi(n) {
  return (
    n != null &&
    typeof n.status == "number" &&
    typeof n.statusText == "string" &&
    typeof n.internal == "boolean" &&
    "data" in n
  );
}
var Km = ["POST", "PUT", "PATCH", "DELETE"],
  X1 = new Set(Km),
  Q1 = ["GET", ...Km],
  Z1 = new Set(Q1),
  K1 = new Set([301, 302, 303, 307, 308]),
  J1 = new Set([307, 308]),
  Ac = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  F1 = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  ei = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 },
  P1 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Pc = (n) => P1.test(n),
  $1 = (n) => ({ hasErrorBoundary: !!n.hasErrorBoundary }),
  Jm = "remix-router-transitions",
  Fm = Symbol("ResetLoaderData");
function W1(n) {
  const r = n.window ? n.window : typeof window < "u" ? window : void 0,
    u =
      typeof r < "u" &&
      typeof r.document < "u" &&
      typeof r.document.createElement < "u";
  He(
    n.routes.length > 0,
    "You must provide a non-empty routes array to createRouter",
  );
  let o = n.hydrationRouteProperties || [],
    c = n.mapRouteProperties || $1,
    f = {},
    d = ui(n.routes, c, void 0, f),
    p,
    y = n.basename || "/";
  y.startsWith("/") || (y = `/${y}`);
  let m = n.dataStrategy || lg,
    v = { ...n.future },
    b = null,
    T = new Set(),
    U = null,
    w = null,
    q = null,
    D = n.hydrationData != null,
    V = Ol(d, n.history.location, y),
    F = !1,
    ee = null,
    le;
  if (V == null && !n.patchRoutesOnNavigation) {
    let x = sa(404, { pathname: n.history.location.pathname }),
      { matches: M, route: H } = Uu(d);
    ((le = !0), (V = M), (ee = { [H.id]: x }));
  } else if (
    (V &&
      !n.hydrationData &&
      jl(V, d, n.history.location.pathname).active &&
      (V = null),
    V)
  )
    if (V.some((x) => x.route.lazy)) le = !1;
    else if (!V.some((x) => x.route.loader)) le = !0;
    else {
      let x = n.hydrationData ? n.hydrationData.loaderData : null,
        M = n.hydrationData ? n.hydrationData.errors : null;
      if (M) {
        let H = V.findIndex((Z) => M[Z.route.id] !== void 0);
        le = V.slice(0, H + 1).every((Z) => !Lc(Z.route, x, M));
      } else le = V.every((H) => !Lc(H.route, x, M));
    }
  else {
    ((le = !1), (V = []));
    let x = jl(null, d, n.history.location.pathname);
    x.active && x.matches && ((F = !0), (V = x.matches));
  }
  let $,
    z = {
      historyAction: n.history.action,
      location: n.history.location,
      matches: V,
      initialized: le,
      navigation: Ac,
      restoreScrollPosition: n.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: (n.hydrationData && n.hydrationData.loaderData) || {},
      actionData: (n.hydrationData && n.hydrationData.actionData) || null,
      errors: (n.hydrationData && n.hydrationData.errors) || ee,
      fetchers: new Map(),
      blockers: new Map(),
    },
    ne = "POP",
    te = !1,
    fe,
    Ue = !1,
    Xe = new Map(),
    Be = null,
    we = !1,
    Re = !1,
    _e = new Set(),
    O = new Map(),
    P = 0,
    G = -1,
    Ee = new Map(),
    E = new Set(),
    k = new Map(),
    I = new Map(),
    K = new Set(),
    ae = new Map(),
    xe,
    ye = null;
  function qe() {
    if (
      ((b = n.history.listen(({ action: x, location: M, delta: H }) => {
        if (xe) {
          (xe(), (xe = void 0));
          return;
        }
        dt(
          ae.size === 0 || H != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.",
        );
        let Z = Ei({
          currentLocation: z.location,
          nextLocation: M,
          historyAction: x,
        });
        if (Z && H != null) {
          let W = new Promise((oe) => {
            xe = oe;
          });
          (n.history.go(H * -1),
            Ea(Z, {
              state: "blocked",
              location: M,
              proceed() {
                (Ea(Z, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: M,
                }),
                  W.then(() => n.history.go(H)));
              },
              reset() {
                let oe = new Map(z.blockers);
                (oe.set(Z, ei), et({ blockers: oe }));
              },
            }));
          return;
        }
        return da(x, M);
      })),
      u)
    ) {
      vg(r, Xe);
      let x = () => bg(r, Xe);
      (r.addEventListener("pagehide", x),
        (Be = () => r.removeEventListener("pagehide", x)));
    }
    return (
      z.initialized || da("POP", z.location, { initialHydration: !0 }),
      $
    );
  }
  function Qe() {
    (b && b(),
      Be && Be(),
      T.clear(),
      fe && fe.abort(),
      z.fetchers.forEach((x, M) => xt(M)),
      z.blockers.forEach((x, M) => Ul(M)));
  }
  function Mt(x) {
    return (T.add(x), () => T.delete(x));
  }
  function et(x, M = {}) {
    (x.matches &&
      (x.matches = x.matches.map((W) => {
        let oe = f[W.route.id],
          he = W.route;
        return he.element !== oe.element ||
          he.errorElement !== oe.errorElement ||
          he.hydrateFallbackElement !== oe.hydrateFallbackElement
          ? { ...W, route: oe }
          : W;
      })),
      (z = { ...z, ...x }));
    let H = [],
      Z = [];
    (z.fetchers.forEach((W, oe) => {
      W.state === "idle" && (K.has(oe) ? H.push(oe) : Z.push(oe));
    }),
      K.forEach((W) => {
        !z.fetchers.has(W) && !O.has(W) && H.push(W);
      }),
      [...T].forEach((W) =>
        W(z, {
          deletedFetchers: H,
          viewTransitionOpts: M.viewTransitionOpts,
          flushSync: M.flushSync === !0,
        }),
      ),
      H.forEach((W) => xt(W)),
      Z.forEach((W) => z.fetchers.delete(W)));
  }
  function _t(x, M, { flushSync: H } = {}) {
    let Z =
        z.actionData != null &&
        z.navigation.formMethod != null &&
        kt(z.navigation.formMethod) &&
        z.navigation.state === "loading" &&
        x.state?._isRedirect !== !0,
      W;
    M.actionData
      ? Object.keys(M.actionData).length > 0
        ? (W = M.actionData)
        : (W = null)
      : Z
        ? (W = z.actionData)
        : (W = null);
    let oe = M.loaderData
        ? sm(z.loaderData, M.loaderData, M.matches || [], M.errors)
        : z.loaderData,
      he = z.blockers;
    he.size > 0 && ((he = new Map(he)), he.forEach((ce, de) => he.set(de, ei)));
    let se = we ? !1 : Ri(x, M.matches || z.matches),
      pe =
        te === !0 ||
        (z.navigation.formMethod != null &&
          kt(z.navigation.formMethod) &&
          x.state?._isRedirect !== !0);
    (p && ((d = p), (p = void 0)),
      we ||
        ne === "POP" ||
        (ne === "PUSH"
          ? n.history.push(x, x.state)
          : ne === "REPLACE" && n.history.replace(x, x.state)));
    let ge;
    if (ne === "POP") {
      let ce = Xe.get(z.location.pathname);
      ce && ce.has(x.pathname)
        ? (ge = { currentLocation: z.location, nextLocation: x })
        : Xe.has(x.pathname) &&
          (ge = { currentLocation: x, nextLocation: z.location });
    } else if (Ue) {
      let ce = Xe.get(z.location.pathname);
      (ce
        ? ce.add(x.pathname)
        : ((ce = new Set([x.pathname])), Xe.set(z.location.pathname, ce)),
        (ge = { currentLocation: z.location, nextLocation: x }));
    }
    (et(
      {
        ...M,
        actionData: W,
        loaderData: oe,
        historyAction: ne,
        location: x,
        initialized: !0,
        navigation: Ac,
        revalidation: "idle",
        restoreScrollPosition: se,
        preventScrollReset: pe,
        blockers: he,
      },
      { viewTransitionOpts: ge, flushSync: H === !0 },
    ),
      (ne = "POP"),
      (te = !1),
      (Ue = !1),
      (we = !1),
      (Re = !1),
      ye?.resolve(),
      (ye = null));
  }
  async function fa(x, M) {
    if (typeof x == "number") {
      n.history.go(x);
      return;
    }
    let H = Uc(z.location, z.matches, y, x, M?.fromRouteId, M?.relative),
      { path: Z, submission: W, error: oe } = em(!1, H, M),
      he = z.location,
      se = ii(z.location, Z, M && M.state);
    se = { ...se, ...n.history.encodeLocation(se) };
    let pe = M && M.replace != null ? M.replace : void 0,
      ge = "PUSH";
    pe === !0
      ? (ge = "REPLACE")
      : pe === !1 ||
        (W != null &&
          kt(W.formMethod) &&
          W.formAction === z.location.pathname + z.location.search &&
          (ge = "REPLACE"));
    let ce =
        M && "preventScrollReset" in M ? M.preventScrollReset === !0 : void 0,
      de = (M && M.flushSync) === !0,
      Me = Ei({ currentLocation: he, nextLocation: se, historyAction: ge });
    if (Me) {
      Ea(Me, {
        state: "blocked",
        location: se,
        proceed() {
          (Ea(Me, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: se,
          }),
            fa(x, M));
        },
        reset() {
          let Ge = new Map(z.blockers);
          (Ge.set(Me, ei), et({ blockers: Ge }));
        },
      });
      return;
    }
    await da(ge, se, {
      submission: W,
      pendingError: oe,
      preventScrollReset: ce,
      replace: M && M.replace,
      enableViewTransition: M && M.viewTransition,
      flushSync: de,
    });
  }
  function ar() {
    (ye || (ye = Sg()), lr(), et({ revalidation: "loading" }));
    let x = ye.promise;
    return z.navigation.state === "submitting"
      ? x
      : z.navigation.state === "idle"
        ? (da(z.historyAction, z.location, {
            startUninterruptedRevalidation: !0,
          }),
          x)
        : (da(ne || z.historyAction, z.navigation.location, {
            overrideNavigation: z.navigation,
            enableViewTransition: Ue === !0,
          }),
          x);
  }
  async function da(x, M, H) {
    (fe && fe.abort(),
      (fe = null),
      (ne = x),
      (we = (H && H.startUninterruptedRevalidation) === !0),
      Ll(z.location, z.matches),
      (te = (H && H.preventScrollReset) === !0),
      (Ue = (H && H.enableViewTransition) === !0));
    let Z = p || d,
      W = H && H.overrideNavigation,
      oe =
        H?.initialHydration && z.matches && z.matches.length > 0 && !F
          ? z.matches
          : Ol(Z, M, y),
      he = (H && H.flushSync) === !0;
    if (
      oe &&
      z.initialized &&
      !Re &&
      fg(z.location, M) &&
      !(H && H.submission && kt(H.submission.formMethod))
    ) {
      _t(M, { matches: oe }, { flushSync: he });
      return;
    }
    let se = jl(oe, Z, M.pathname);
    if ((se.active && se.matches && (oe = se.matches), !oe)) {
      let { error: it, notFoundMatches: Te, route: Je } = cn(M.pathname);
      _t(
        M,
        { matches: Te, loaderData: {}, errors: { [Je.id]: it } },
        { flushSync: he },
      );
      return;
    }
    fe = new AbortController();
    let pe = Kn(n.history, M, fe.signal, H && H.submission),
      ge = n.getContext ? await n.getContext() : new W0(),
      ce;
    if (H && H.pendingError)
      ce = [Cl(oe).route.id, { type: "error", error: H.pendingError }];
    else if (H && H.submission && kt(H.submission.formMethod)) {
      let it = await co(
        pe,
        M,
        H.submission,
        oe,
        ge,
        se.active,
        H && H.initialHydration === !0,
        { replace: H.replace, flushSync: he },
      );
      if (it.shortCircuited) return;
      if (it.pendingActionResult) {
        let [Te, Je] = it.pendingActionResult;
        if (Wt(Je) && oi(Je.error) && Je.error.status === 404) {
          ((fe = null),
            _t(M, {
              matches: it.matches,
              loaderData: {},
              errors: { [Te]: Je.error },
            }));
          return;
        }
      }
      ((oe = it.matches || oe),
        (ce = it.pendingActionResult),
        (W = Oc(M, H.submission)),
        (he = !1),
        (se.active = !1),
        (pe = Kn(n.history, pe.url, pe.signal)));
    }
    let {
      shortCircuited: de,
      matches: Me,
      loaderData: Ge,
      errors: tt,
    } = await fo(
      pe,
      M,
      oe,
      ge,
      se.active,
      W,
      H && H.submission,
      H && H.fetcherSubmission,
      H && H.replace,
      H && H.initialHydration === !0,
      he,
      ce,
    );
    de ||
      ((fe = null),
      _t(M, { matches: Me || oe, ...cm(ce), loaderData: Ge, errors: tt }));
  }
  async function co(x, M, H, Z, W, oe, he, se = {}) {
    lr();
    let pe = yg(M, H);
    if ((et({ navigation: pe }, { flushSync: se.flushSync === !0 }), oe)) {
      let de = await Hl(Z, M.pathname, x.signal);
      if (de.type === "aborted") return { shortCircuited: !0 };
      if (de.type === "error") {
        if (de.partialMatches.length === 0) {
          let { matches: Ge, route: tt } = Uu(d);
          return {
            matches: Ge,
            pendingActionResult: [tt.id, { type: "error", error: de.error }],
          };
        }
        let Me = Cl(de.partialMatches).route.id;
        return {
          matches: de.partialMatches,
          pendingActionResult: [Me, { type: "error", error: de.error }],
        };
      } else if (de.matches) Z = de.matches;
      else {
        let { notFoundMatches: Me, error: Ge, route: tt } = cn(M.pathname);
        return {
          matches: Me,
          pendingActionResult: [tt.id, { type: "error", error: Ge }],
        };
      }
    }
    let ge,
      ce = Gu(Z, M);
    if (!ce.route.action && !ce.route.lazy)
      ge = {
        type: "error",
        error: sa(405, {
          method: x.method,
          pathname: M.pathname,
          routeId: ce.route.id,
        }),
      };
    else {
      let de = Fn(c, f, x, Z, ce, he ? [] : o, W),
        Me = await el(x, de, W, null);
      if (((ge = Me[ce.route.id]), !ge)) {
        for (let Ge of Z)
          if (Me[Ge.route.id]) {
            ge = Me[Ge.route.id];
            break;
          }
      }
      if (x.signal.aborted) return { shortCircuited: !0 };
    }
    if (an(ge)) {
      let de;
      return (
        se && se.replace != null
          ? (de = se.replace)
          : (de =
              im(ge.response.headers.get("Location"), new URL(x.url), y) ===
              z.location.pathname + z.location.search),
        await Da(x, ge, !0, { submission: H, replace: de }),
        { shortCircuited: !0 }
      );
    }
    if (Wt(ge)) {
      let de = Cl(Z, ce.route.id);
      return (
        (se && se.replace) !== !0 && (ne = "PUSH"),
        { matches: Z, pendingActionResult: [de.route.id, ge, ce.route.id] }
      );
    }
    return { matches: Z, pendingActionResult: [ce.route.id, ge] };
  }
  async function fo(x, M, H, Z, W, oe, he, se, pe, ge, ce, de) {
    let Me = oe || Oc(M, he),
      Ge = he || se || dm(Me),
      tt = !we && !ge;
    if (W) {
      if (tt) {
        let ht = Vt(de);
        et(
          { navigation: Me, ...(ht !== void 0 ? { actionData: ht } : {}) },
          { flushSync: ce },
        );
      }
      let Ae = await Hl(H, M.pathname, x.signal);
      if (Ae.type === "aborted") return { shortCircuited: !0 };
      if (Ae.type === "error") {
        if (Ae.partialMatches.length === 0) {
          let { matches: ja, route: Ut } = Uu(d);
          return { matches: ja, loaderData: {}, errors: { [Ut.id]: Ae.error } };
        }
        let ht = Cl(Ae.partialMatches).route.id;
        return {
          matches: Ae.partialMatches,
          loaderData: {},
          errors: { [ht]: Ae.error },
        };
      } else if (Ae.matches) H = Ae.matches;
      else {
        let { error: ht, notFoundMatches: ja, route: Ut } = cn(M.pathname);
        return { matches: ja, loaderData: {}, errors: { [Ut.id]: ht } };
      }
    }
    let it = p || d,
      { dsMatches: Te, revalidatingFetchers: Je } = tm(
        x,
        Z,
        c,
        f,
        n.history,
        z,
        H,
        Ge,
        M,
        ge ? [] : o,
        ge === !0,
        Re,
        _e,
        K,
        k,
        E,
        it,
        y,
        n.patchRoutesOnNavigation != null,
        de,
      );
    if (
      ((G = ++P),
      !n.dataStrategy &&
        !Te.some((Ae) => Ae.shouldLoad) &&
        !Te.some((Ae) => Ae.route.middleware) &&
        Je.length === 0)
    ) {
      let Ae = zl();
      return (
        _t(
          M,
          {
            matches: H,
            loaderData: {},
            errors: de && Wt(de[1]) ? { [de[0]]: de[1].error } : null,
            ...cm(de),
            ...(Ae ? { fetchers: new Map(z.fetchers) } : {}),
          },
          { flushSync: ce },
        ),
        { shortCircuited: !0 }
      );
    }
    if (tt) {
      let Ae = {};
      if (!W) {
        Ae.navigation = Me;
        let ht = Vt(de);
        ht !== void 0 && (Ae.actionData = ht);
      }
      (Je.length > 0 && (Ae.fetchers = ho(Je)), et(Ae, { flushSync: ce }));
    }
    Je.forEach((Ae) => {
      (Sa(Ae.key), Ae.controller && O.set(Ae.key, Ae.controller));
    });
    let xa = () => Je.forEach((Ae) => Sa(Ae.key));
    fe && fe.signal.addEventListener("abort", xa);
    let { loaderResults: Xt, fetcherResults: Dt } = await bi(Te, Je, x, Z);
    if (x.signal.aborted) return { shortCircuited: !0 };
    (fe && fe.signal.removeEventListener("abort", xa),
      Je.forEach((Ae) => O.delete(Ae.key)));
    let It = Lu(Xt);
    if (It)
      return (
        await Da(x, It.result, !0, { replace: pe }),
        { shortCircuited: !0 }
      );
    if (((It = Lu(Dt)), It))
      return (
        E.add(It.key),
        await Da(x, It.result, !0, { replace: pe }),
        { shortCircuited: !0 }
      );
    let { loaderData: dn, errors: tl } = om(z, H, Xt, de, Je, Dt);
    ge && z.errors && (tl = { ...z.errors, ...tl });
    let Na = zl(),
      Ua = Nl(G),
      La = Na || Ua || Je.length > 0;
    return {
      matches: H,
      loaderData: dn,
      errors: tl,
      ...(La ? { fetchers: new Map(z.fetchers) } : {}),
    };
  }
  function Vt(x) {
    if (x && !Wt(x[1])) return { [x[0]]: x[1].data };
    if (z.actionData)
      return Object.keys(z.actionData).length === 0 ? null : z.actionData;
  }
  function ho(x) {
    return (
      x.forEach((M) => {
        let H = z.fetchers.get(M.key),
          Z = ti(void 0, H ? H.data : void 0);
        z.fetchers.set(M.key, Z);
      }),
      new Map(z.fetchers)
    );
  }
  async function gi(x, M, H, Z) {
    Sa(x);
    let W = (Z && Z.flushSync) === !0,
      oe = p || d,
      he = Uc(z.location, z.matches, y, H, M, Z?.relative),
      se = Ol(oe, he, y),
      pe = jl(se, oe, he);
    if ((pe.active && pe.matches && (se = pe.matches), !se)) {
      lt(x, M, sa(404, { pathname: he }), { flushSync: W });
      return;
    }
    let { path: ge, submission: ce, error: de } = em(!0, he, Z);
    if (de) {
      lt(x, M, de, { flushSync: W });
      return;
    }
    let Me = n.getContext ? await n.getContext() : new W0(),
      Ge = (Z && Z.preventScrollReset) === !0;
    if (ce && kt(ce.formMethod)) {
      await vi(x, M, ge, se, Me, pe.active, W, Ge, ce);
      return;
    }
    (k.set(x, { routeId: M, path: ge }),
      await sn(x, M, ge, se, Me, pe.active, W, Ge, ce));
  }
  async function vi(x, M, H, Z, W, oe, he, se, pe) {
    (lr(), k.delete(x));
    let ge = z.fetchers.get(x);
    Nt(x, gg(pe, ge), { flushSync: he });
    let ce = new AbortController(),
      de = Kn(n.history, H, ce.signal, pe);
    if (oe) {
      let nt = await Hl(Z, new URL(de.url).pathname, de.signal, x);
      if (nt.type === "aborted") return;
      if (nt.type === "error") {
        lt(x, M, nt.error, { flushSync: he });
        return;
      } else if (nt.matches) Z = nt.matches;
      else {
        lt(x, M, sa(404, { pathname: H }), { flushSync: he });
        return;
      }
    }
    let Me = Gu(Z, H);
    if (!Me.route.action && !Me.route.lazy) {
      let nt = sa(405, { method: pe.formMethod, pathname: H, routeId: M });
      lt(x, M, nt, { flushSync: he });
      return;
    }
    O.set(x, ce);
    let Ge = P,
      tt = Fn(c, f, de, Z, Me, o, W),
      Te = (await el(de, tt, W, x))[Me.route.id];
    if (de.signal.aborted) {
      O.get(x) === ce && O.delete(x);
      return;
    }
    if (K.has(x)) {
      if (an(Te) || Wt(Te)) {
        Nt(x, Al(void 0));
        return;
      }
    } else {
      if (an(Te))
        if ((O.delete(x), G > Ge)) {
          Nt(x, Al(void 0));
          return;
        } else
          return (
            E.add(x),
            Nt(x, ti(pe)),
            Da(de, Te, !1, { fetcherSubmission: pe, preventScrollReset: se })
          );
      if (Wt(Te)) {
        lt(x, M, Te.error);
        return;
      }
    }
    let Je = z.navigation.location || z.location,
      xa = Kn(n.history, Je, ce.signal),
      Xt = p || d,
      Dt =
        z.navigation.state !== "idle"
          ? Ol(Xt, z.navigation.location, y)
          : z.matches;
    He(Dt, "Didn't find any matches after fetcher action");
    let It = ++P;
    Ee.set(x, It);
    let dn = ti(pe, Te.data);
    z.fetchers.set(x, dn);
    let { dsMatches: tl, revalidatingFetchers: Na } = tm(
      xa,
      W,
      c,
      f,
      n.history,
      z,
      Dt,
      pe,
      Je,
      o,
      !1,
      Re,
      _e,
      K,
      k,
      E,
      Xt,
      y,
      n.patchRoutesOnNavigation != null,
      [Me.route.id, Te],
    );
    (Na.filter((nt) => nt.key !== x).forEach((nt) => {
      let al = nt.key,
        wi = z.fetchers.get(al),
        Ti = ti(void 0, wi ? wi.data : void 0);
      (z.fetchers.set(al, Ti),
        Sa(al),
        nt.controller && O.set(al, nt.controller));
    }),
      et({ fetchers: new Map(z.fetchers) }));
    let Ua = () => Na.forEach((nt) => Sa(nt.key));
    ce.signal.addEventListener("abort", Ua);
    let { loaderResults: La, fetcherResults: Ae } = await bi(tl, Na, xa, W);
    if (ce.signal.aborted) return;
    if (
      (ce.signal.removeEventListener("abort", Ua),
      Ee.delete(x),
      O.delete(x),
      Na.forEach((nt) => O.delete(nt.key)),
      z.fetchers.has(x))
    ) {
      let nt = Al(Te.data);
      z.fetchers.set(x, nt);
    }
    let ht = Lu(La);
    if (ht) return Da(xa, ht.result, !1, { preventScrollReset: se });
    if (((ht = Lu(Ae)), ht))
      return (E.add(ht.key), Da(xa, ht.result, !1, { preventScrollReset: se }));
    let { loaderData: ja, errors: Ut } = om(z, Dt, La, void 0, Na, Ae);
    (Nl(It),
      z.navigation.state === "loading" && It > G
        ? (He(ne, "Expected pending action"),
          fe && fe.abort(),
          _t(z.navigation.location, {
            matches: Dt,
            loaderData: ja,
            errors: Ut,
            fetchers: new Map(z.fetchers),
          }))
        : (et({
            errors: Ut,
            loaderData: sm(z.loaderData, ja, Dt, Ut),
            fetchers: new Map(z.fetchers),
          }),
          (Re = !1)));
  }
  async function sn(x, M, H, Z, W, oe, he, se, pe) {
    let ge = z.fetchers.get(x);
    Nt(x, ti(pe, ge ? ge.data : void 0), { flushSync: he });
    let ce = new AbortController(),
      de = Kn(n.history, H, ce.signal);
    if (oe) {
      let Je = await Hl(Z, new URL(de.url).pathname, de.signal, x);
      if (Je.type === "aborted") return;
      if (Je.type === "error") {
        lt(x, M, Je.error, { flushSync: he });
        return;
      } else if (Je.matches) Z = Je.matches;
      else {
        lt(x, M, sa(404, { pathname: H }), { flushSync: he });
        return;
      }
    }
    let Me = Gu(Z, H);
    O.set(x, ce);
    let Ge = P,
      tt = Fn(c, f, de, Z, Me, o, W),
      Te = (await el(de, tt, W, x))[Me.route.id];
    if ((O.get(x) === ce && O.delete(x), !de.signal.aborted)) {
      if (K.has(x)) {
        Nt(x, Al(void 0));
        return;
      }
      if (an(Te))
        if (G > Ge) {
          Nt(x, Al(void 0));
          return;
        } else {
          (E.add(x), await Da(de, Te, !1, { preventScrollReset: se }));
          return;
        }
      if (Wt(Te)) {
        lt(x, M, Te.error);
        return;
      }
      Nt(x, Al(Te.data));
    }
  }
  async function Da(
    x,
    M,
    H,
    {
      submission: Z,
      fetcherSubmission: W,
      preventScrollReset: oe,
      replace: he,
    } = {},
  ) {
    M.response.headers.has("X-Remix-Revalidate") && (Re = !0);
    let se = M.response.headers.get("Location");
    (He(se, "Expected a Location header on the redirect Response"),
      (se = im(se, new URL(x.url), y)));
    let pe = ii(z.location, se, { _isRedirect: !0 });
    if (u) {
      let tt = !1;
      if (M.response.headers.has("X-Remix-Reload-Document")) tt = !0;
      else if (Pc(se)) {
        const it = Vm(se, !0);
        tt = it.origin !== r.location.origin || ca(it.pathname, y) == null;
      }
      if (tt) {
        he ? r.location.replace(se) : r.location.assign(se);
        return;
      }
    }
    fe = null;
    let ge =
        he === !0 || M.response.headers.has("X-Remix-Replace")
          ? "REPLACE"
          : "PUSH",
      { formMethod: ce, formAction: de, formEncType: Me } = z.navigation;
    !Z && !W && ce && de && Me && (Z = dm(z.navigation));
    let Ge = Z || W;
    if (J1.has(M.response.status) && Ge && kt(Ge.formMethod))
      await da(ge, pe, {
        submission: { ...Ge, formAction: se },
        preventScrollReset: oe || te,
        enableViewTransition: H ? Ue : void 0,
      });
    else {
      let tt = Oc(pe, Z);
      await da(ge, pe, {
        overrideNavigation: tt,
        fetcherSubmission: W,
        preventScrollReset: oe || te,
        enableViewTransition: H ? Ue : void 0,
      });
    }
  }
  async function el(x, M, H, Z) {
    let W,
      oe = {};
    try {
      W = await rg(m, x, M, Z, H, !1);
    } catch (he) {
      return (
        M.filter((se) => se.shouldLoad).forEach((se) => {
          oe[se.route.id] = { type: "error", error: he };
        }),
        oe
      );
    }
    if (x.signal.aborted) return oe;
    for (let [he, se] of Object.entries(W))
      if (mg(se)) {
        let pe = se.result;
        oe[he] = { type: "redirect", response: sg(pe, x, he, M, y) };
      } else oe[he] = await og(se);
    return oe;
  }
  async function bi(x, M, H, Z) {
    let W = el(H, x, Z, null),
      oe = Promise.all(
        M.map(async (pe) => {
          if (pe.matches && pe.match && pe.request && pe.controller) {
            let ce = (await el(pe.request, pe.matches, Z, pe.key))[
              pe.match.route.id
            ];
            return { [pe.key]: ce };
          } else
            return Promise.resolve({
              [pe.key]: {
                type: "error",
                error: sa(404, { pathname: pe.path }),
              },
            });
        }),
      ),
      he = await W,
      se = (await oe).reduce((pe, ge) => Object.assign(pe, ge), {});
    return { loaderResults: he, fetcherResults: se };
  }
  function lr() {
    ((Re = !0),
      k.forEach((x, M) => {
        (O.has(M) && _e.add(M), Sa(M));
      }));
  }
  function Nt(x, M, H = {}) {
    (z.fetchers.set(x, M),
      et(
        { fetchers: new Map(z.fetchers) },
        { flushSync: (H && H.flushSync) === !0 },
      ));
  }
  function lt(x, M, H, Z = {}) {
    let W = Cl(z.matches, M);
    (xt(x),
      et(
        { errors: { [W.route.id]: H }, fetchers: new Map(z.fetchers) },
        { flushSync: (Z && Z.flushSync) === !0 },
      ));
  }
  function ha(x) {
    return (
      I.set(x, (I.get(x) || 0) + 1),
      K.has(x) && K.delete(x),
      z.fetchers.get(x) || F1
    );
  }
  function xt(x) {
    let M = z.fetchers.get(x);
    (O.has(x) && !(M && M.state === "loading" && Ee.has(x)) && Sa(x),
      k.delete(x),
      Ee.delete(x),
      E.delete(x),
      K.delete(x),
      _e.delete(x),
      z.fetchers.delete(x));
  }
  function mo(x) {
    let M = (I.get(x) || 0) - 1;
    (M <= 0 ? (I.delete(x), K.add(x)) : I.set(x, M),
      et({ fetchers: new Map(z.fetchers) }));
  }
  function Sa(x) {
    let M = O.get(x);
    M && (M.abort(), O.delete(x));
  }
  function Si(x) {
    for (let M of x) {
      let H = ha(M),
        Z = Al(H.data);
      z.fetchers.set(M, Z);
    }
  }
  function zl() {
    let x = [],
      M = !1;
    for (let H of E) {
      let Z = z.fetchers.get(H);
      (He(Z, `Expected fetcher: ${H}`),
        Z.state === "loading" && (E.delete(H), x.push(H), (M = !0)));
    }
    return (Si(x), M);
  }
  function Nl(x) {
    let M = [];
    for (let [H, Z] of Ee)
      if (Z < x) {
        let W = z.fetchers.get(H);
        (He(W, `Expected fetcher: ${H}`),
          W.state === "loading" && (Sa(H), Ee.delete(H), M.push(H)));
      }
    return (Si(M), M.length > 0);
  }
  function za(x, M) {
    let H = z.blockers.get(x) || ei;
    return (ae.get(x) !== M && ae.set(x, M), H);
  }
  function Ul(x) {
    (z.blockers.delete(x), ae.delete(x));
  }
  function Ea(x, M) {
    let H = z.blockers.get(x) || ei;
    He(
      (H.state === "unblocked" && M.state === "blocked") ||
        (H.state === "blocked" && M.state === "blocked") ||
        (H.state === "blocked" && M.state === "proceeding") ||
        (H.state === "blocked" && M.state === "unblocked") ||
        (H.state === "proceeding" && M.state === "unblocked"),
      `Invalid blocker state transition: ${H.state} -> ${M.state}`,
    );
    let Z = new Map(z.blockers);
    (Z.set(x, M), et({ blockers: Z }));
  }
  function Ei({ currentLocation: x, nextLocation: M, historyAction: H }) {
    if (ae.size === 0) return;
    ae.size > 1 && dt(!1, "A router only supports one blocker at a time");
    let Z = Array.from(ae.entries()),
      [W, oe] = Z[Z.length - 1],
      he = z.blockers.get(W);
    if (
      !(he && he.state === "proceeding") &&
      oe({ currentLocation: x, nextLocation: M, historyAction: H })
    )
      return W;
  }
  function cn(x) {
    let M = sa(404, { pathname: x }),
      H = p || d,
      { matches: Z, route: W } = Uu(H);
    return { notFoundMatches: Z, route: W, error: M };
  }
  function xi(x, M, H) {
    if (((U = x), (q = M), (w = H || null), !D && z.navigation === Ac)) {
      D = !0;
      let Z = Ri(z.location, z.matches);
      Z != null && et({ restoreScrollPosition: Z });
    }
    return () => {
      ((U = null), (q = null), (w = null));
    };
  }
  function fn(x, M) {
    return (
      (w &&
        w(
          x,
          M.map((Z) => T1(Z, z.loaderData)),
        )) ||
      x.key
    );
  }
  function Ll(x, M) {
    if (U && q) {
      let H = fn(x, M);
      U[H] = q();
    }
  }
  function Ri(x, M) {
    if (U) {
      let H = fn(x, M),
        Z = U[H];
      if (typeof Z == "number") return Z;
    }
    return null;
  }
  function jl(x, M, H) {
    if (n.patchRoutesOnNavigation)
      if (x) {
        if (Object.keys(x[0].params).length > 0)
          return { active: !0, matches: Yu(M, H, y, !0) };
      } else return { active: !0, matches: Yu(M, H, y, !0) || [] };
    return { active: !1, matches: null };
  }
  async function Hl(x, M, H, Z) {
    if (!n.patchRoutesOnNavigation) return { type: "success", matches: x };
    let W = x;
    for (;;) {
      let oe = p == null,
        he = p || d,
        se = f;
      try {
        await n.patchRoutesOnNavigation({
          signal: H,
          path: M,
          matches: W,
          fetcherKey: Z,
          patch: (ce, de) => {
            H.aborted || am(ce, de, he, se, c, !1);
          },
        });
      } catch (ce) {
        return { type: "error", error: ce, partialMatches: W };
      } finally {
        oe && !H.aborted && (d = [...d]);
      }
      if (H.aborted) return { type: "aborted" };
      let pe = Ol(he, M, y);
      if (pe) return { type: "success", matches: pe };
      let ge = Yu(he, M, y, !0);
      if (
        !ge ||
        (W.length === ge.length &&
          W.every((ce, de) => ce.route.id === ge[de].route.id))
      )
        return { type: "success", matches: null };
      W = ge;
    }
  }
  function nr(x) {
    ((f = {}), (p = ui(x, c, void 0, f)));
  }
  function rr(x, M, H = !1) {
    let Z = p == null;
    (am(x, M, p || d, f, c, H), Z && ((d = [...d]), et({})));
  }
  return (
    ($ = {
      get basename() {
        return y;
      },
      get future() {
        return v;
      },
      get state() {
        return z;
      },
      get routes() {
        return d;
      },
      get window() {
        return r;
      },
      initialize: qe,
      subscribe: Mt,
      enableScrollRestoration: xi,
      navigate: fa,
      fetch: gi,
      revalidate: ar,
      createHref: (x) => n.history.createHref(x),
      encodeLocation: (x) => n.history.encodeLocation(x),
      getFetcher: ha,
      deleteFetcher: mo,
      dispose: Qe,
      getBlocker: za,
      deleteBlocker: Ul,
      patchRoutes: rr,
      _internalFetchControllers: O,
      _internalSetRoutes: nr,
      _internalSetStateDoNotUseOrYouWillBreakYourApp(x) {
        et(x);
      },
    }),
    $
  );
}
function I1(n) {
  return (
    n != null &&
    (("formData" in n && n.formData != null) ||
      ("body" in n && n.body !== void 0))
  );
}
function Uc(n, r, u, o, c, f) {
  let d, p;
  if (c) {
    d = [];
    for (let m of r)
      if ((d.push(m), m.route.id === c)) {
        p = m;
        break;
      }
  } else ((d = r), (p = r[r.length - 1]));
  let y = Fc(o || ".", Jc(d), ca(n.pathname, u) || n.pathname, f === "path");
  if (
    (o == null && ((y.search = n.search), (y.hash = n.hash)),
    (o == null || o === "" || o === ".") && p)
  ) {
    let m = $c(y.search);
    if (p.route.index && !m)
      y.search = y.search ? y.search.replace(/^\?/, "?index&") : "?index";
    else if (!p.route.index && m) {
      let v = new URLSearchParams(y.search),
        b = v.getAll("index");
      (v.delete("index"),
        b.filter((U) => U).forEach((U) => v.append("index", U)));
      let T = v.toString();
      y.search = T ? `?${T}` : "";
    }
  }
  return (
    u !== "/" && (y.pathname = B1({ basename: u, pathname: y.pathname })),
    Ml(y)
  );
}
function em(n, r, u) {
  if (!u || !I1(u)) return { path: r };
  if (u.formMethod && !pg(u.formMethod))
    return { path: r, error: sa(405, { method: u.formMethod }) };
  let o = () => ({ path: r, error: sa(400, { type: "invalid-body" }) }),
    f = (u.formMethod || "get").toUpperCase(),
    d = tp(r);
  if (u.body !== void 0) {
    if (u.formEncType === "text/plain") {
      if (!kt(f)) return o();
      let b =
        typeof u.body == "string"
          ? u.body
          : u.body instanceof FormData || u.body instanceof URLSearchParams
            ? Array.from(u.body.entries()).reduce(
                (T, [U, w]) => `${T}${U}=${w}
`,
                "",
              )
            : String(u.body);
      return {
        path: r,
        submission: {
          formMethod: f,
          formAction: d,
          formEncType: u.formEncType,
          formData: void 0,
          json: void 0,
          text: b,
        },
      };
    } else if (u.formEncType === "application/json") {
      if (!kt(f)) return o();
      try {
        let b = typeof u.body == "string" ? JSON.parse(u.body) : u.body;
        return {
          path: r,
          submission: {
            formMethod: f,
            formAction: d,
            formEncType: u.formEncType,
            formData: void 0,
            json: b,
            text: void 0,
          },
        };
      } catch {
        return o();
      }
    }
  }
  He(
    typeof FormData == "function",
    "FormData is not available in this environment",
  );
  let p, y;
  if (u.formData) ((p = Hc(u.formData)), (y = u.formData));
  else if (u.body instanceof FormData) ((p = Hc(u.body)), (y = u.body));
  else if (u.body instanceof URLSearchParams) ((p = u.body), (y = um(p)));
  else if (u.body == null) ((p = new URLSearchParams()), (y = new FormData()));
  else
    try {
      ((p = new URLSearchParams(u.body)), (y = um(p)));
    } catch {
      return o();
    }
  let m = {
    formMethod: f,
    formAction: d,
    formEncType: (u && u.formEncType) || "application/x-www-form-urlencoded",
    formData: y,
    json: void 0,
    text: void 0,
  };
  if (kt(m.formMethod)) return { path: r, submission: m };
  let v = _l(r);
  return (
    n && v.search && $c(v.search) && p.append("index", ""),
    (v.search = `?${p}`),
    { path: Ml(v), submission: m }
  );
}
function tm(n, r, u, o, c, f, d, p, y, m, v, b, T, U, w, q, D, V, F, ee) {
  let le = ee ? (Wt(ee[1]) ? ee[1].error : ee[1].data) : void 0,
    $ = c.createURL(f.location),
    z = c.createURL(y),
    ne;
  if (v && f.errors) {
    let we = Object.keys(f.errors)[0];
    ne = d.findIndex((Re) => Re.route.id === we);
  } else if (ee && Wt(ee[1])) {
    let we = ee[0];
    ne = d.findIndex((Re) => Re.route.id === we) - 1;
  }
  let te = ee ? ee[1].statusCode : void 0,
    fe = te && te >= 400,
    Ue = {
      currentUrl: $,
      currentParams: f.matches[0]?.params || {},
      nextUrl: z,
      nextParams: d[0].params,
      ...p,
      actionResult: le,
      actionStatus: te,
    },
    Xe = d.map((we, Re) => {
      let { route: _e } = we,
        O = null;
      if (
        (ne != null && Re > ne
          ? (O = !1)
          : _e.lazy
            ? (O = !0)
            : _e.loader == null
              ? (O = !1)
              : v
                ? (O = Lc(_e, f.loaderData, f.errors))
                : eg(f.loaderData, f.matches[Re], we) && (O = !0),
        O !== null)
      )
        return jc(u, o, n, we, m, r, O);
      let P = fe
          ? !1
          : b ||
            $.pathname + $.search === z.pathname + z.search ||
            $.search !== z.search ||
            tg(f.matches[Re], we),
        G = { ...Ue, defaultShouldRevalidate: P },
        Ee = to(we, G);
      return jc(u, o, n, we, m, r, Ee, G);
    }),
    Be = [];
  return (
    w.forEach((we, Re) => {
      if (v || !d.some((I) => I.route.id === we.routeId) || U.has(Re)) return;
      let _e = f.fetchers.get(Re),
        O = _e && _e.state !== "idle" && _e.data === void 0,
        P = Ol(D, we.path, V);
      if (!P) {
        if (F && O) return;
        Be.push({
          key: Re,
          routeId: we.routeId,
          path: we.path,
          matches: null,
          match: null,
          request: null,
          controller: null,
        });
        return;
      }
      if (q.has(Re)) return;
      let G = Gu(P, we.path),
        Ee = new AbortController(),
        E = Kn(c, we.path, Ee.signal),
        k = null;
      if (T.has(Re)) (T.delete(Re), (k = Fn(u, o, E, P, G, m, r)));
      else if (O) b && (k = Fn(u, o, E, P, G, m, r));
      else {
        let I = { ...Ue, defaultShouldRevalidate: fe ? !1 : b };
        to(G, I) && (k = Fn(u, o, E, P, G, m, r, I));
      }
      k &&
        Be.push({
          key: Re,
          routeId: we.routeId,
          path: we.path,
          matches: k,
          match: G,
          request: E,
          controller: Ee,
        });
    }),
    { dsMatches: Xe, revalidatingFetchers: Be }
  );
}
function Lc(n, r, u) {
  if (n.lazy) return !0;
  if (!n.loader) return !1;
  let o = r != null && n.id in r,
    c = u != null && u[n.id] !== void 0;
  return !o && c
    ? !1
    : typeof n.loader == "function" && n.loader.hydrate === !0
      ? !0
      : !o && !c;
}
function eg(n, r, u) {
  let o = !r || u.route.id !== r.route.id,
    c = !n.hasOwnProperty(u.route.id);
  return o || c;
}
function tg(n, r) {
  let u = n.route.path;
  return (
    n.pathname !== r.pathname ||
    (u != null && u.endsWith("*") && n.params["*"] !== r.params["*"])
  );
}
function to(n, r) {
  if (n.route.shouldRevalidate) {
    let u = n.route.shouldRevalidate(r);
    if (typeof u == "boolean") return u;
  }
  return r.defaultShouldRevalidate;
}
function am(n, r, u, o, c, f) {
  let d;
  if (n) {
    let m = o[n];
    (He(m, `No route found to patch children into: routeId = ${n}`),
      m.children || (m.children = []),
      (d = m.children));
  } else d = u;
  let p = [],
    y = [];
  if (
    (r.forEach((m) => {
      let v = d.find((b) => Pm(m, b));
      v ? y.push({ existingRoute: v, newRoute: m }) : p.push(m);
    }),
    p.length > 0)
  ) {
    let m = ui(p, c, [n || "_", "patch", String(d?.length || "0")], o);
    d.push(...m);
  }
  if (f && y.length > 0)
    for (let m = 0; m < y.length; m++) {
      let { existingRoute: v, newRoute: b } = y[m],
        T = v,
        [U] = ui([b], c, [], {}, !0);
      Object.assign(T, {
        element: U.element ? U.element : T.element,
        errorElement: U.errorElement ? U.errorElement : T.errorElement,
        hydrateFallbackElement: U.hydrateFallbackElement
          ? U.hydrateFallbackElement
          : T.hydrateFallbackElement,
      });
    }
}
function Pm(n, r) {
  return "id" in n && "id" in r && n.id === r.id
    ? !0
    : n.index === r.index &&
        n.path === r.path &&
        n.caseSensitive === r.caseSensitive
      ? (!n.children || n.children.length === 0) &&
        (!r.children || r.children.length === 0)
        ? !0
        : n.children.every((u, o) => r.children?.some((c) => Pm(u, c)))
      : !1;
}
var lm = new WeakMap(),
  $m = ({ key: n, route: r, manifest: u, mapRouteProperties: o }) => {
    let c = u[r.id];
    if (
      (He(c, "No route found in manifest"),
      !c.lazy || typeof c.lazy != "object")
    )
      return;
    let f = c.lazy[n];
    if (!f) return;
    let d = lm.get(c);
    d || ((d = {}), lm.set(c, d));
    let p = d[n];
    if (p) return p;
    let y = (async () => {
      let m = E1(n),
        b = c[n] !== void 0 && n !== "hasErrorBoundary";
      if (m)
        (dt(
          !m,
          "Route property " +
            n +
            " is not a supported lazy route property. This property will be ignored.",
        ),
          (d[n] = Promise.resolve()));
      else if (b)
        dt(
          !1,
          `Route "${c.id}" has a static property "${n}" defined. The lazy property will be ignored.`,
        );
      else {
        let T = await f();
        T != null && (Object.assign(c, { [n]: T }), Object.assign(c, o(c)));
      }
      typeof c.lazy == "object" &&
        ((c.lazy[n] = void 0),
        Object.values(c.lazy).every((T) => T === void 0) && (c.lazy = void 0));
    })();
    return ((d[n] = y), y);
  },
  nm = new WeakMap();
function ag(n, r, u, o, c) {
  let f = u[n.id];
  if ((He(f, "No route found in manifest"), !n.lazy))
    return { lazyRoutePromise: void 0, lazyHandlerPromise: void 0 };
  if (typeof n.lazy == "function") {
    let v = nm.get(f);
    if (v) return { lazyRoutePromise: v, lazyHandlerPromise: v };
    let b = (async () => {
      He(typeof n.lazy == "function", "No lazy route function found");
      let T = await n.lazy(),
        U = {};
      for (let w in T) {
        let q = T[w];
        if (q === void 0) continue;
        let D = R1(w),
          F = f[w] !== void 0 && w !== "hasErrorBoundary";
        D
          ? dt(
              !D,
              "Route property " +
                w +
                " is not a supported property to be returned from a lazy route function. This property will be ignored.",
            )
          : F
            ? dt(
                !F,
                `Route "${f.id}" has a static property "${w}" defined but its lazy function is also returning a value for this property. The lazy route property "${w}" will be ignored.`,
              )
            : (U[w] = q);
      }
      (Object.assign(f, U), Object.assign(f, { ...o(f), lazy: void 0 }));
    })();
    return (
      nm.set(f, b),
      b.catch(() => {}),
      { lazyRoutePromise: b, lazyHandlerPromise: b }
    );
  }
  let d = Object.keys(n.lazy),
    p = [],
    y;
  for (let v of d) {
    if (c && c.includes(v)) continue;
    let b = $m({ key: v, route: n, manifest: u, mapRouteProperties: o });
    b && (p.push(b), v === r && (y = b));
  }
  let m = p.length > 0 ? Promise.all(p).then(() => {}) : void 0;
  return (
    m?.catch(() => {}),
    y?.catch(() => {}),
    { lazyRoutePromise: m, lazyHandlerPromise: y }
  );
}
async function rm(n) {
  let r = n.matches.filter((c) => c.shouldLoad),
    u = {};
  return (
    (await Promise.all(r.map((c) => c.resolve()))).forEach((c, f) => {
      u[r[f].route.id] = c;
    }),
    u
  );
}
async function lg(n) {
  return n.matches.some((r) => r.route.middleware) ? Wm(n, () => rm(n)) : rm(n);
}
function Wm(n, r) {
  return ng(n, r, (o) => o, dg, u);
  function u(o, c, f) {
    if (f)
      return Promise.resolve(
        Object.assign(f.value, { [c]: { type: "error", result: o } }),
      );
    {
      let { matches: d } = n,
        p = Math.min(
          d.findIndex((m) => m.route.id === c) || 0,
          d.findIndex((m) => m.unstable_shouldCallHandler()) || 0,
        ),
        y = Cl(d, d[p].route.id).route.id;
      return Promise.resolve({ [y]: { type: "error", result: o } });
    }
  }
}
async function ng(n, r, u, o, c) {
  let { matches: f, request: d, params: p, context: y } = n,
    m = f.flatMap((b) =>
      b.route.middleware ? b.route.middleware.map((T) => [b.route.id, T]) : [],
    );
  return await Im({ request: d, params: p, context: y }, m, r, u, o, c);
}
async function Im(n, r, u, o, c, f, d = 0) {
  let { request: p } = n;
  if (p.signal.aborted)
    throw p.signal.reason ?? new Error(`Request aborted: ${p.method} ${p.url}`);
  let y = r[d];
  if (!y) return await u();
  let [m, v] = y,
    b,
    T = async () => {
      if (b) throw new Error("You may only call `next()` once per middleware");
      try {
        return ((b = { value: await Im(n, r, u, o, c, f, d + 1) }), b.value);
      } catch (U) {
        return ((b = { value: await f(U, m, b) }), b.value);
      }
    };
  try {
    let U = await v(n, T),
      w = U != null ? o(U) : void 0;
    return c(w)
      ? w
      : b
        ? (w ?? b.value)
        : ((b = { value: await T() }), b.value);
  } catch (U) {
    return await f(U, m, b);
  }
}
function ep(n, r, u, o, c) {
  let f = $m({
      key: "middleware",
      route: o.route,
      manifest: r,
      mapRouteProperties: n,
    }),
    d = ag(o.route, kt(u.method) ? "action" : "loader", r, n, c);
  return {
    middleware: f,
    route: d.lazyRoutePromise,
    handler: d.lazyHandlerPromise,
  };
}
function jc(n, r, u, o, c, f, d, p = null) {
  let y = !1,
    m = ep(n, r, u, o, c);
  return {
    ...o,
    _lazyPromises: m,
    shouldLoad: d,
    unstable_shouldRevalidateArgs: p,
    unstable_shouldCallHandler(v) {
      return (
        (y = !0),
        p
          ? typeof v == "boolean"
            ? to(o, { ...p, defaultShouldRevalidate: v })
            : to(o, p)
          : d
      );
    },
    resolve(v) {
      return y || d || (v && !kt(u.method) && (o.route.lazy || o.route.loader))
        ? ig({
            request: u,
            match: o,
            lazyHandlerPromise: m?.handler,
            lazyRoutePromise: m?.route,
            handlerOverride: v,
            scopedContext: f,
          })
        : Promise.resolve({ type: "data", result: void 0 });
    },
  };
}
function Fn(n, r, u, o, c, f, d, p = null) {
  return o.map((y) =>
    y.route.id !== c.route.id
      ? {
          ...y,
          shouldLoad: !1,
          unstable_shouldRevalidateArgs: p,
          unstable_shouldCallHandler: () => !1,
          _lazyPromises: ep(n, r, u, y, f),
          resolve: () => Promise.resolve({ type: "data", result: void 0 }),
        }
      : jc(n, r, u, y, f, d, !0, p),
  );
}
async function rg(n, r, u, o, c, f) {
  u.some((m) => m._lazyPromises?.middleware) &&
    (await Promise.all(u.map((m) => m._lazyPromises?.middleware)));
  let d = { request: r, params: u[0].params, context: c, matches: u },
    y = await n({
      ...d,
      fetcherKey: o,
      runClientMiddleware: (m) => {
        let v = d;
        return Wm(v, () =>
          m({
            ...v,
            fetcherKey: o,
            runClientMiddleware: () => {
              throw new Error(
                "Cannot call `runClientMiddleware()` from within an `runClientMiddleware` handler",
              );
            },
          }),
        );
      },
    });
  try {
    await Promise.all(
      u.flatMap((m) => [m._lazyPromises?.handler, m._lazyPromises?.route]),
    );
  } catch {}
  return y;
}
async function ig({
  request: n,
  match: r,
  lazyHandlerPromise: u,
  lazyRoutePromise: o,
  handlerOverride: c,
  scopedContext: f,
}) {
  let d,
    p,
    y = kt(n.method),
    m = y ? "action" : "loader",
    v = (b) => {
      let T,
        U = new Promise((D, V) => (T = V));
      ((p = () => T()), n.signal.addEventListener("abort", p));
      let w = (D) =>
          typeof b != "function"
            ? Promise.reject(
                new Error(
                  `You cannot call the handler for a route which defines a boolean "${m}" [routeId: ${r.route.id}]`,
                ),
              )
            : b(
                { request: n, params: r.params, context: f },
                ...(D !== void 0 ? [D] : []),
              ),
        q = (async () => {
          try {
            return { type: "data", result: await (c ? c((V) => w(V)) : w()) };
          } catch (D) {
            return { type: "error", result: D };
          }
        })();
      return Promise.race([q, U]);
    };
  try {
    let b = y ? r.route.action : r.route.loader;
    if (u || o)
      if (b) {
        let T,
          [U] = await Promise.all([
            v(b).catch((w) => {
              T = w;
            }),
            u,
            o,
          ]);
        if (T !== void 0) throw T;
        d = U;
      } else {
        await u;
        let T = y ? r.route.action : r.route.loader;
        if (T) [d] = await Promise.all([v(T), o]);
        else if (m === "action") {
          let U = new URL(n.url),
            w = U.pathname + U.search;
          throw sa(405, { method: n.method, pathname: w, routeId: r.route.id });
        } else return { type: "data", result: void 0 };
      }
    else if (b) d = await v(b);
    else {
      let T = new URL(n.url),
        U = T.pathname + T.search;
      throw sa(404, { pathname: U });
    }
  } catch (b) {
    return { type: "error", result: b };
  } finally {
    p && n.signal.removeEventListener("abort", p);
  }
  return d;
}
async function ug(n) {
  let r = n.headers.get("Content-Type");
  return r && /\bapplication\/json\b/.test(r)
    ? n.body == null
      ? null
      : n.json()
    : n.text();
}
async function og(n) {
  let { result: r, type: u } = n;
  if (ap(r)) {
    let o;
    try {
      o = await ug(r);
    } catch (c) {
      return { type: "error", error: c };
    }
    return u === "error"
      ? {
          type: "error",
          error: new eo(r.status, r.statusText, o),
          statusCode: r.status,
          headers: r.headers,
        }
      : { type: "data", data: o, statusCode: r.status, headers: r.headers };
  }
  return u === "error"
    ? fm(r)
      ? r.data instanceof Error
        ? {
            type: "error",
            error: r.data,
            statusCode: r.init?.status,
            headers: r.init?.headers ? new Headers(r.init.headers) : void 0,
          }
        : {
            type: "error",
            error: new eo(r.init?.status || 500, void 0, r.data),
            statusCode: oi(r) ? r.status : void 0,
            headers: r.init?.headers ? new Headers(r.init.headers) : void 0,
          }
      : { type: "error", error: r, statusCode: oi(r) ? r.status : void 0 }
    : fm(r)
      ? {
          type: "data",
          data: r.data,
          statusCode: r.init?.status,
          headers: r.init?.headers ? new Headers(r.init.headers) : void 0,
        }
      : { type: "data", data: r };
}
function sg(n, r, u, o, c) {
  let f = n.headers.get("Location");
  if (
    (He(
      f,
      "Redirects returned/thrown from loaders/actions must have a Location header",
    ),
    !Pc(f))
  ) {
    let d = o.slice(0, o.findIndex((p) => p.route.id === u) + 1);
    ((f = Uc(new URL(r.url), d, c, f)), n.headers.set("Location", f));
  }
  return n;
}
function im(n, r, u) {
  if (Pc(n)) {
    let o = n,
      c = o.startsWith("//") ? new URL(r.protocol + o) : new URL(o),
      f = ca(c.pathname, u) != null;
    if (c.origin === r.origin && f) return c.pathname + c.search + c.hash;
  }
  return n;
}
function Kn(n, r, u, o) {
  let c = n.createURL(tp(r)).toString(),
    f = { signal: u };
  if (o && kt(o.formMethod)) {
    let { formMethod: d, formEncType: p } = o;
    ((f.method = d.toUpperCase()),
      p === "application/json"
        ? ((f.headers = new Headers({ "Content-Type": p })),
          (f.body = JSON.stringify(o.json)))
        : p === "text/plain"
          ? (f.body = o.text)
          : p === "application/x-www-form-urlencoded" && o.formData
            ? (f.body = Hc(o.formData))
            : (f.body = o.formData));
  }
  return new Request(c, f);
}
function Hc(n) {
  let r = new URLSearchParams();
  for (let [u, o] of n.entries())
    r.append(u, typeof o == "string" ? o : o.name);
  return r;
}
function um(n) {
  let r = new FormData();
  for (let [u, o] of n.entries()) r.append(u, o);
  return r;
}
function cg(n, r, u, o = !1, c = !1) {
  let f = {},
    d = null,
    p,
    y = !1,
    m = {},
    v = u && Wt(u[1]) ? u[1].error : void 0;
  return (
    n.forEach((b) => {
      if (!(b.route.id in r)) return;
      let T = b.route.id,
        U = r[T];
      if (
        (He(!an(U), "Cannot handle redirect results in processLoaderData"),
        Wt(U))
      ) {
        let w = U.error;
        if ((v !== void 0 && ((w = v), (v = void 0)), (d = d || {}), c))
          d[T] = w;
        else {
          let q = Cl(n, T);
          d[q.route.id] == null && (d[q.route.id] = w);
        }
        (o || (f[T] = Fm),
          y || ((y = !0), (p = oi(U.error) ? U.error.status : 500)),
          U.headers && (m[T] = U.headers));
      } else
        ((f[T] = U.data),
          U.statusCode && U.statusCode !== 200 && !y && (p = U.statusCode),
          U.headers && (m[T] = U.headers));
    }),
    v !== void 0 && u && ((d = { [u[0]]: v }), u[2] && (f[u[2]] = void 0)),
    { loaderData: f, errors: d, statusCode: p || 200, loaderHeaders: m }
  );
}
function om(n, r, u, o, c, f) {
  let { loaderData: d, errors: p } = cg(r, u, o);
  return (
    c
      .filter((y) => !y.matches || y.matches.some((m) => m.shouldLoad))
      .forEach((y) => {
        let { key: m, match: v, controller: b } = y;
        if (b && b.signal.aborted) return;
        let T = f[m];
        if ((He(T, "Did not find corresponding fetcher result"), Wt(T))) {
          let U = Cl(n.matches, v?.route.id);
          ((p && p[U.route.id]) || (p = { ...p, [U.route.id]: T.error }),
            n.fetchers.delete(m));
        } else if (an(T)) He(!1, "Unhandled fetcher revalidation redirect");
        else {
          let U = Al(T.data);
          n.fetchers.set(m, U);
        }
      }),
    { loaderData: d, errors: p }
  );
}
function sm(n, r, u, o) {
  let c = Object.entries(r)
    .filter(([, f]) => f !== Fm)
    .reduce((f, [d, p]) => ((f[d] = p), f), {});
  for (let f of u) {
    let d = f.route.id;
    if (
      (!r.hasOwnProperty(d) &&
        n.hasOwnProperty(d) &&
        f.route.loader &&
        (c[d] = n[d]),
      o && o.hasOwnProperty(d))
    )
      break;
  }
  return c;
}
function cm(n) {
  return n
    ? Wt(n[1])
      ? { actionData: {} }
      : { actionData: { [n[0]]: n[1].data } }
    : {};
}
function Cl(n, r) {
  return (
    (r ? n.slice(0, n.findIndex((o) => o.route.id === r) + 1) : [...n])
      .reverse()
      .find((o) => o.route.hasErrorBoundary === !0) || n[0]
  );
}
function Uu(n) {
  let r =
    n.length === 1
      ? n[0]
      : n.find((u) => u.index || !u.path || u.path === "/") || {
          id: "__shim-error-route__",
        };
  return {
    matches: [{ params: {}, pathname: "", pathnameBase: "", route: r }],
    route: r,
  };
}
function sa(
  n,
  { pathname: r, routeId: u, method: o, type: c, message: f } = {},
) {
  let d = "Unknown Server Error",
    p = "Unknown @remix-run/router error";
  return (
    n === 400
      ? ((d = "Bad Request"),
        o && r && u
          ? (p = `You made a ${o} request to "${r}" but did not provide a \`loader\` for route "${u}", so there is no way to handle the request.`)
          : c === "invalid-body" && (p = "Unable to encode submission body"))
      : n === 403
        ? ((d = "Forbidden"), (p = `Route "${u}" does not match URL "${r}"`))
        : n === 404
          ? ((d = "Not Found"), (p = `No route matches URL "${r}"`))
          : n === 405 &&
            ((d = "Method Not Allowed"),
            o && r && u
              ? (p = `You made a ${o.toUpperCase()} request to "${r}" but did not provide an \`action\` for route "${u}", so there is no way to handle the request.`)
              : o && (p = `Invalid request method "${o.toUpperCase()}"`)),
    new eo(n || 500, d, new Error(p), !0)
  );
}
function Lu(n) {
  let r = Object.entries(n);
  for (let u = r.length - 1; u >= 0; u--) {
    let [o, c] = r[u];
    if (an(c)) return { key: o, result: c };
  }
}
function tp(n) {
  let r = typeof n == "string" ? _l(n) : n;
  return Ml({ ...r, hash: "" });
}
function fg(n, r) {
  return n.pathname !== r.pathname || n.search !== r.search
    ? !1
    : n.hash === ""
      ? r.hash !== ""
      : n.hash === r.hash
        ? !0
        : r.hash !== "";
}
function dg(n) {
  return (
    n != null &&
    typeof n == "object" &&
    Object.entries(n).every(([r, u]) => typeof r == "string" && hg(u))
  );
}
function hg(n) {
  return (
    n != null &&
    typeof n == "object" &&
    "type" in n &&
    "result" in n &&
    (n.type === "data" || n.type === "error")
  );
}
function mg(n) {
  return ap(n.result) && K1.has(n.result.status);
}
function Wt(n) {
  return n.type === "error";
}
function an(n) {
  return (n && n.type) === "redirect";
}
function fm(n) {
  return (
    typeof n == "object" &&
    n != null &&
    "type" in n &&
    "data" in n &&
    "init" in n &&
    n.type === "DataWithResponseInit"
  );
}
function ap(n) {
  return (
    n != null &&
    typeof n.status == "number" &&
    typeof n.statusText == "string" &&
    typeof n.headers == "object" &&
    typeof n.body < "u"
  );
}
function pg(n) {
  return Z1.has(n.toUpperCase());
}
function kt(n) {
  return X1.has(n.toUpperCase());
}
function $c(n) {
  return new URLSearchParams(n).getAll("index").some((r) => r === "");
}
function Gu(n, r) {
  let u = typeof r == "string" ? _l(r).search : r.search;
  if (n[n.length - 1].route.index && $c(u || "")) return n[n.length - 1];
  let o = Zm(n);
  return o[o.length - 1];
}
function dm(n) {
  let {
    formMethod: r,
    formAction: u,
    formEncType: o,
    text: c,
    formData: f,
    json: d,
  } = n;
  if (!(!r || !u || !o)) {
    if (c != null)
      return {
        formMethod: r,
        formAction: u,
        formEncType: o,
        formData: void 0,
        json: void 0,
        text: c,
      };
    if (f != null)
      return {
        formMethod: r,
        formAction: u,
        formEncType: o,
        formData: f,
        json: void 0,
        text: void 0,
      };
    if (d !== void 0)
      return {
        formMethod: r,
        formAction: u,
        formEncType: o,
        formData: void 0,
        json: d,
        text: void 0,
      };
  }
}
function Oc(n, r) {
  return r
    ? {
        state: "loading",
        location: n,
        formMethod: r.formMethod,
        formAction: r.formAction,
        formEncType: r.formEncType,
        formData: r.formData,
        json: r.json,
        text: r.text,
      }
    : {
        state: "loading",
        location: n,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      };
}
function yg(n, r) {
  return {
    state: "submitting",
    location: n,
    formMethod: r.formMethod,
    formAction: r.formAction,
    formEncType: r.formEncType,
    formData: r.formData,
    json: r.json,
    text: r.text,
  };
}
function ti(n, r) {
  return n
    ? {
        state: "loading",
        formMethod: n.formMethod,
        formAction: n.formAction,
        formEncType: n.formEncType,
        formData: n.formData,
        json: n.json,
        text: n.text,
        data: r,
      }
    : {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: r,
      };
}
function gg(n, r) {
  return {
    state: "submitting",
    formMethod: n.formMethod,
    formAction: n.formAction,
    formEncType: n.formEncType,
    formData: n.formData,
    json: n.json,
    text: n.text,
    data: r ? r.data : void 0,
  };
}
function Al(n) {
  return {
    state: "idle",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: n,
  };
}
function vg(n, r) {
  try {
    let u = n.sessionStorage.getItem(Jm);
    if (u) {
      let o = JSON.parse(u);
      for (let [c, f] of Object.entries(o || {}))
        f && Array.isArray(f) && r.set(c, new Set(f || []));
    }
  } catch {}
}
function bg(n, r) {
  if (r.size > 0) {
    let u = {};
    for (let [o, c] of r) u[o] = [...c];
    try {
      n.sessionStorage.setItem(Jm, JSON.stringify(u));
    } catch (o) {
      dt(
        !1,
        `Failed to save applied view transitions in sessionStorage (${o}).`,
      );
    }
  }
}
function Sg() {
  let n,
    r,
    u = new Promise((o, c) => {
      ((n = async (f) => {
        o(f);
        try {
          await u;
        } catch {}
      }),
        (r = async (f) => {
          c(f);
          try {
            await u;
          } catch {}
        }));
    });
  return { promise: u, resolve: n, reject: r };
}
var un = C.createContext(null);
un.displayName = "DataRouter";
var si = C.createContext(null);
si.displayName = "DataRouterState";
C.createContext(!1);
var Wc = C.createContext({ isTransitioning: !1 });
Wc.displayName = "ViewTransition";
var lp = C.createContext(new Map());
lp.displayName = "Fetchers";
var Eg = C.createContext(null);
Eg.displayName = "Await";
var _a = C.createContext(null);
_a.displayName = "Navigation";
var lo = C.createContext(null);
lo.displayName = "Location";
var va = C.createContext({ outlet: null, matches: [], isDataRoute: !1 });
va.displayName = "Route";
var Ic = C.createContext(null);
Ic.displayName = "RouteError";
function xg(n, { relative: r } = {}) {
  He(
    ci(),
    "useHref() may be used only in the context of a <Router> component.",
  );
  let { basename: u, navigator: o } = C.useContext(_a),
    { hash: c, pathname: f, search: d } = fi(n, { relative: r }),
    p = f;
  return (
    u !== "/" && (p = f === "/" ? u : Ma([u, f])),
    o.createHref({ pathname: p, search: d, hash: c })
  );
}
function ci() {
  return C.useContext(lo) != null;
}
function Dl() {
  return (
    He(
      ci(),
      "useLocation() may be used only in the context of a <Router> component.",
    ),
    C.useContext(lo).location
  );
}
var np =
  "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function rp(n) {
  C.useContext(_a).static || C.useLayoutEffect(n);
}
function ip() {
  let { isDataRoute: n } = C.useContext(va);
  return n ? Hg() : Rg();
}
function Rg() {
  He(
    ci(),
    "useNavigate() may be used only in the context of a <Router> component.",
  );
  let n = C.useContext(un),
    { basename: r, navigator: u } = C.useContext(_a),
    { matches: o } = C.useContext(va),
    { pathname: c } = Dl(),
    f = JSON.stringify(Jc(o)),
    d = C.useRef(!1);
  return (
    rp(() => {
      d.current = !0;
    }),
    C.useCallback(
      (y, m = {}) => {
        if ((dt(d.current, np), !d.current)) return;
        if (typeof y == "number") {
          u.go(y);
          return;
        }
        let v = Fc(y, JSON.parse(f), c, m.relative === "path");
        (n == null &&
          r !== "/" &&
          (v.pathname = v.pathname === "/" ? r : Ma([r, v.pathname])),
          (m.replace ? u.replace : u.push)(v, m.state, m));
      },
      [r, u, f, c, n],
    )
  );
}
var wg = C.createContext(null);
function Tg(n) {
  let r = C.useContext(va).outlet;
  return r && C.createElement(wg.Provider, { value: n }, r);
}
function wS() {
  let { matches: n } = C.useContext(va),
    r = n[n.length - 1];
  return r ? r.params : {};
}
function fi(n, { relative: r } = {}) {
  let { matches: u } = C.useContext(va),
    { pathname: o } = Dl(),
    c = JSON.stringify(Jc(u));
  return C.useMemo(() => Fc(n, JSON.parse(c), o, r === "path"), [n, c, o, r]);
}
function Ag(n, r, u, o, c) {
  He(
    ci(),
    "useRoutes() may be used only in the context of a <Router> component.",
  );
  let { navigator: f } = C.useContext(_a),
    { matches: d } = C.useContext(va),
    p = d[d.length - 1],
    y = p ? p.params : {},
    m = p ? p.pathname : "/",
    v = p ? p.pathnameBase : "/",
    b = p && p.route;
  {
    let F = (b && b.path) || "";
    up(
      m,
      !b || F.endsWith("*") || F.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${F}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${F}"> to <Route path="${F === "/" ? "*" : `${F}/*`}">.`,
    );
  }
  let T = Dl(),
    U;
  U = T;
  let w = U.pathname || "/",
    q = w;
  if (v !== "/") {
    let F = v.replace(/^\//, "").split("/");
    q = "/" + w.replace(/^\//, "").split("/").slice(F.length).join("/");
  }
  let D = Ol(n, { pathname: q });
  return (
    dt(
      b || D != null,
      `No routes matched location "${U.pathname}${U.search}${U.hash}" `,
    ),
    dt(
      D == null ||
        D[D.length - 1].route.element !== void 0 ||
        D[D.length - 1].route.Component !== void 0 ||
        D[D.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${U.pathname}${U.search}${U.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`,
    ),
    Dg(
      D &&
        D.map((F) =>
          Object.assign({}, F, {
            params: Object.assign({}, y, F.params),
            pathname: Ma([
              v,
              f.encodeLocation
                ? f.encodeLocation(F.pathname).pathname
                : F.pathname,
            ]),
            pathnameBase:
              F.pathnameBase === "/"
                ? v
                : Ma([
                    v,
                    f.encodeLocation
                      ? f.encodeLocation(F.pathnameBase).pathname
                      : F.pathnameBase,
                  ]),
          }),
        ),
      d,
      u,
      o,
      c,
    )
  );
}
function Og() {
  let n = jg(),
    r = oi(n)
      ? `${n.status} ${n.statusText}`
      : n instanceof Error
        ? n.message
        : JSON.stringify(n),
    u = n instanceof Error ? n.stack : null,
    o = "rgba(200,200,200, 0.5)",
    c = { padding: "0.5rem", backgroundColor: o },
    f = { padding: "2px 4px", backgroundColor: o },
    d = null;
  return (
    console.error("Error handled by React Router default ErrorBoundary:", n),
    (d = C.createElement(
      C.Fragment,
      null,
      C.createElement("p", null, "💿 Hey developer 👋"),
      C.createElement(
        "p",
        null,
        "You can provide a way better UX than this when your app throws errors by providing your own ",
        C.createElement("code", { style: f }, "ErrorBoundary"),
        " or",
        " ",
        C.createElement("code", { style: f }, "errorElement"),
        " prop on your route.",
      ),
    )),
    C.createElement(
      C.Fragment,
      null,
      C.createElement("h2", null, "Unexpected Application Error!"),
      C.createElement("h3", { style: { fontStyle: "italic" } }, r),
      u ? C.createElement("pre", { style: c }, u) : null,
      d,
    )
  );
}
var Cg = C.createElement(Og, null),
  Mg = class extends C.Component {
    constructor(n) {
      (super(n),
        (this.state = {
          location: n.location,
          revalidation: n.revalidation,
          error: n.error,
        }));
    }
    static getDerivedStateFromError(n) {
      return { error: n };
    }
    static getDerivedStateFromProps(n, r) {
      return r.location !== n.location ||
        (r.revalidation !== "idle" && n.revalidation === "idle")
        ? { error: n.error, location: n.location, revalidation: n.revalidation }
        : {
            error: n.error !== void 0 ? n.error : r.error,
            location: r.location,
            revalidation: n.revalidation || r.revalidation,
          };
    }
    componentDidCatch(n, r) {
      this.props.unstable_onError
        ? this.props.unstable_onError(n, r)
        : console.error(
            "React Router caught the following error during render",
            n,
          );
    }
    render() {
      return this.state.error !== void 0
        ? C.createElement(
            va.Provider,
            { value: this.props.routeContext },
            C.createElement(Ic.Provider, {
              value: this.state.error,
              children: this.props.component,
            }),
          )
        : this.props.children;
    }
  };
function _g({ routeContext: n, match: r, children: u }) {
  let o = C.useContext(un);
  return (
    o &&
      o.static &&
      o.staticContext &&
      (r.route.errorElement || r.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = r.route.id),
    C.createElement(va.Provider, { value: n }, u)
  );
}
function Dg(n, r = [], u = null, o = null, c = null) {
  if (n == null) {
    if (!u) return null;
    if (u.errors) n = u.matches;
    else if (r.length === 0 && !u.initialized && u.matches.length > 0)
      n = u.matches;
    else return null;
  }
  let f = n,
    d = u?.errors;
  if (d != null) {
    let m = f.findIndex((v) => v.route.id && d?.[v.route.id] !== void 0);
    (He(
      m >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(d).join(",")}`,
    ),
      (f = f.slice(0, Math.min(f.length, m + 1))));
  }
  let p = !1,
    y = -1;
  if (u)
    for (let m = 0; m < f.length; m++) {
      let v = f[m];
      if (
        ((v.route.HydrateFallback || v.route.hydrateFallbackElement) && (y = m),
        v.route.id)
      ) {
        let { loaderData: b, errors: T } = u,
          U =
            v.route.loader &&
            !b.hasOwnProperty(v.route.id) &&
            (!T || T[v.route.id] === void 0);
        if (v.route.lazy || U) {
          ((p = !0), y >= 0 ? (f = f.slice(0, y + 1)) : (f = [f[0]]));
          break;
        }
      }
    }
  return f.reduceRight((m, v, b) => {
    let T,
      U = !1,
      w = null,
      q = null;
    u &&
      ((T = d && v.route.id ? d[v.route.id] : void 0),
      (w = v.route.errorElement || Cg),
      p &&
        (y < 0 && b === 0
          ? (up(
              "route-fallback",
              !1,
              "No `HydrateFallback` element provided to render during initial hydration",
            ),
            (U = !0),
            (q = null))
          : y === b &&
            ((U = !0), (q = v.route.hydrateFallbackElement || null))));
    let D = r.concat(f.slice(0, b + 1)),
      V = () => {
        let F;
        return (
          T
            ? (F = w)
            : U
              ? (F = q)
              : v.route.Component
                ? (F = C.createElement(v.route.Component, null))
                : v.route.element
                  ? (F = v.route.element)
                  : (F = m),
          C.createElement(_g, {
            match: v,
            routeContext: { outlet: m, matches: D, isDataRoute: u != null },
            children: F,
          })
        );
      };
    return u && (v.route.ErrorBoundary || v.route.errorElement || b === 0)
      ? C.createElement(Mg, {
          location: u.location,
          revalidation: u.revalidation,
          component: w,
          error: T,
          children: V(),
          routeContext: { outlet: null, matches: D, isDataRoute: !0 },
          unstable_onError: o,
        })
      : V();
  }, null);
}
function ef(n) {
  return `${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function zg(n) {
  let r = C.useContext(un);
  return (He(r, ef(n)), r);
}
function Ng(n) {
  let r = C.useContext(si);
  return (He(r, ef(n)), r);
}
function Ug(n) {
  let r = C.useContext(va);
  return (He(r, ef(n)), r);
}
function tf(n) {
  let r = Ug(n),
    u = r.matches[r.matches.length - 1];
  return (
    He(
      u.route.id,
      `${n} can only be used on routes that contain a unique "id"`,
    ),
    u.route.id
  );
}
function Lg() {
  return tf("useRouteId");
}
function jg() {
  let n = C.useContext(Ic),
    r = Ng("useRouteError"),
    u = tf("useRouteError");
  return n !== void 0 ? n : r.errors?.[u];
}
function Hg() {
  let { router: n } = zg("useNavigate"),
    r = tf("useNavigate"),
    u = C.useRef(!1);
  return (
    rp(() => {
      u.current = !0;
    }),
    C.useCallback(
      async (c, f = {}) => {
        (dt(u.current, np),
          u.current &&
            (typeof c == "number"
              ? n.navigate(c)
              : await n.navigate(c, { fromRouteId: r, ...f })));
      },
      [n, r],
    )
  );
}
var hm = {};
function up(n, r, u) {
  !r && !hm[n] && ((hm[n] = !0), dt(!1, u));
}
var mm = {};
function pm(n, r) {
  !n && !mm[r] && ((mm[r] = !0), console.warn(r));
}
function Bg(n) {
  let r = {
    hasErrorBoundary:
      n.hasErrorBoundary || n.ErrorBoundary != null || n.errorElement != null,
  };
  return (
    n.Component &&
      (n.element &&
        dt(
          !1,
          "You should not include both `Component` and `element` on your route - `Component` will be used.",
        ),
      Object.assign(r, {
        element: C.createElement(n.Component),
        Component: void 0,
      })),
    n.HydrateFallback &&
      (n.hydrateFallbackElement &&
        dt(
          !1,
          "You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used.",
        ),
      Object.assign(r, {
        hydrateFallbackElement: C.createElement(n.HydrateFallback),
        HydrateFallback: void 0,
      })),
    n.ErrorBoundary &&
      (n.errorElement &&
        dt(
          !1,
          "You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used.",
        ),
      Object.assign(r, {
        errorElement: C.createElement(n.ErrorBoundary),
        ErrorBoundary: void 0,
      })),
    r
  );
}
var qg = ["HydrateFallback", "hydrateFallbackElement"],
  kg = class {
    constructor() {
      ((this.status = "pending"),
        (this.promise = new Promise((n, r) => {
          ((this.resolve = (u) => {
            this.status === "pending" && ((this.status = "resolved"), n(u));
          }),
            (this.reject = (u) => {
              this.status === "pending" && ((this.status = "rejected"), r(u));
            }));
        })));
    }
  };
function Yg({ router: n, flushSync: r, unstable_onError: u }) {
  let [o, c] = C.useState(n.state),
    [f, d] = C.useState(),
    [p, y] = C.useState({ isTransitioning: !1 }),
    [m, v] = C.useState(),
    [b, T] = C.useState(),
    [U, w] = C.useState(),
    q = C.useRef(new Map()),
    D = C.useCallback(
      ($) => {
        c(
          (z) => (
            $.errors &&
              u &&
              Object.entries($.errors).forEach(([ne, te]) => {
                z.errors?.[ne] !== te && u(te);
              }),
            $
          ),
        );
      },
      [u],
    ),
    V = C.useCallback(
      ($, { deletedFetchers: z, flushSync: ne, viewTransitionOpts: te }) => {
        ($.fetchers.forEach((Ue, Xe) => {
          Ue.data !== void 0 && q.current.set(Xe, Ue.data);
        }),
          z.forEach((Ue) => q.current.delete(Ue)),
          pm(
            ne === !1 || r != null,
            'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.',
          ));
        let fe =
          n.window != null &&
          n.window.document != null &&
          typeof n.window.document.startViewTransition == "function";
        if (
          (pm(
            te == null || fe,
            "You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available.",
          ),
          !te || !fe)
        ) {
          r && ne ? r(() => D($)) : C.startTransition(() => D($));
          return;
        }
        if (r && ne) {
          r(() => {
            (b && (m && m.resolve(), b.skipTransition()),
              y({
                isTransitioning: !0,
                flushSync: !0,
                currentLocation: te.currentLocation,
                nextLocation: te.nextLocation,
              }));
          });
          let Ue = n.window.document.startViewTransition(() => {
            r(() => D($));
          });
          (Ue.finished.finally(() => {
            r(() => {
              (v(void 0), T(void 0), d(void 0), y({ isTransitioning: !1 }));
            });
          }),
            r(() => T(Ue)));
          return;
        }
        b
          ? (m && m.resolve(),
            b.skipTransition(),
            w({
              state: $,
              currentLocation: te.currentLocation,
              nextLocation: te.nextLocation,
            }))
          : (d($),
            y({
              isTransitioning: !0,
              flushSync: !1,
              currentLocation: te.currentLocation,
              nextLocation: te.nextLocation,
            }));
      },
      [n.window, r, b, m, D],
    );
  (C.useLayoutEffect(() => n.subscribe(V), [n, V]),
    C.useEffect(() => {
      p.isTransitioning && !p.flushSync && v(new kg());
    }, [p]),
    C.useEffect(() => {
      if (m && f && n.window) {
        let $ = f,
          z = m.promise,
          ne = n.window.document.startViewTransition(async () => {
            (C.startTransition(() => D($)), await z);
          });
        (ne.finished.finally(() => {
          (v(void 0), T(void 0), d(void 0), y({ isTransitioning: !1 }));
        }),
          T(ne));
      }
    }, [f, m, n.window, D]),
    C.useEffect(() => {
      m && f && o.location.key === f.location.key && m.resolve();
    }, [m, b, o.location, f]),
    C.useEffect(() => {
      !p.isTransitioning &&
        U &&
        (d(U.state),
        y({
          isTransitioning: !0,
          flushSync: !1,
          currentLocation: U.currentLocation,
          nextLocation: U.nextLocation,
        }),
        w(void 0));
    }, [p.isTransitioning, U]));
  let F = C.useMemo(
      () => ({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: ($) => n.navigate($),
        push: ($, z, ne) =>
          n.navigate($, {
            state: z,
            preventScrollReset: ne?.preventScrollReset,
          }),
        replace: ($, z, ne) =>
          n.navigate($, {
            replace: !0,
            state: z,
            preventScrollReset: ne?.preventScrollReset,
          }),
      }),
      [n],
    ),
    ee = n.basename || "/",
    le = C.useMemo(
      () => ({
        router: n,
        navigator: F,
        static: !1,
        basename: ee,
        unstable_onError: u,
      }),
      [n, F, ee, u],
    );
  return C.createElement(
    C.Fragment,
    null,
    C.createElement(
      un.Provider,
      { value: le },
      C.createElement(
        si.Provider,
        { value: o },
        C.createElement(
          lp.Provider,
          { value: q.current },
          C.createElement(
            Wc.Provider,
            { value: p },
            C.createElement(
              Qg,
              {
                basename: ee,
                location: o.location,
                navigationType: o.historyAction,
                navigator: F,
              },
              C.createElement(Gg, {
                routes: n.routes,
                future: n.future,
                state: o,
                unstable_onError: u,
              }),
            ),
          ),
        ),
      ),
    ),
    null,
  );
}
var Gg = C.memo(Vg);
function Vg({ routes: n, future: r, state: u, unstable_onError: o }) {
  return Ag(n, void 0, u, o, r);
}
function Xg(n) {
  return Tg(n.context);
}
function Qg({
  basename: n = "/",
  children: r = null,
  location: u,
  navigationType: o = "POP",
  navigator: c,
  static: f = !1,
}) {
  He(
    !ci(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.",
  );
  let d = n.replace(/^\/*/, "/"),
    p = C.useMemo(
      () => ({ basename: d, navigator: c, static: f, future: {} }),
      [d, c, f],
    );
  typeof u == "string" && (u = _l(u));
  let {
      pathname: y = "/",
      search: m = "",
      hash: v = "",
      state: b = null,
      key: T = "default",
    } = u,
    U = C.useMemo(() => {
      let w = ca(y, d);
      return w == null
        ? null
        : {
            location: { pathname: w, search: m, hash: v, state: b, key: T },
            navigationType: o,
          };
    }, [d, y, m, v, b, T, o]);
  return (
    dt(
      U != null,
      `<Router basename="${d}"> is not able to match the URL "${y}${m}${v}" because it does not start with the basename, so the <Router> won't render anything.`,
    ),
    U == null
      ? null
      : C.createElement(
          _a.Provider,
          { value: p },
          C.createElement(lo.Provider, { children: r, value: U }),
        )
  );
}
var Vu = "get",
  Xu = "application/x-www-form-urlencoded";
function no(n) {
  return n != null && typeof n.tagName == "string";
}
function Zg(n) {
  return no(n) && n.tagName.toLowerCase() === "button";
}
function Kg(n) {
  return no(n) && n.tagName.toLowerCase() === "form";
}
function Jg(n) {
  return no(n) && n.tagName.toLowerCase() === "input";
}
function Fg(n) {
  return !!(n.metaKey || n.altKey || n.ctrlKey || n.shiftKey);
}
function Pg(n, r) {
  return n.button === 0 && (!r || r === "_self") && !Fg(n);
}
function Bc(n = "") {
  return new URLSearchParams(
    typeof n == "string" || Array.isArray(n) || n instanceof URLSearchParams
      ? n
      : Object.keys(n).reduce((r, u) => {
          let o = n[u];
          return r.concat(Array.isArray(o) ? o.map((c) => [u, c]) : [[u, o]]);
        }, []),
  );
}
function $g(n, r) {
  let u = Bc(n);
  return (
    r &&
      r.forEach((o, c) => {
        u.has(c) ||
          r.getAll(c).forEach((f) => {
            u.append(c, f);
          });
      }),
    u
  );
}
var ju = null;
function Wg() {
  if (ju === null)
    try {
      (new FormData(document.createElement("form"), 0), (ju = !1));
    } catch {
      ju = !0;
    }
  return ju;
}
var Ig = new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain",
]);
function Cc(n) {
  return n != null && !Ig.has(n)
    ? (dt(
        !1,
        `"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Xu}"`,
      ),
      null)
    : n;
}
function ev(n, r) {
  let u, o, c, f, d;
  if (Kg(n)) {
    let p = n.getAttribute("action");
    ((o = p ? ca(p, r) : null),
      (u = n.getAttribute("method") || Vu),
      (c = Cc(n.getAttribute("enctype")) || Xu),
      (f = new FormData(n)));
  } else if (Zg(n) || (Jg(n) && (n.type === "submit" || n.type === "image"))) {
    let p = n.form;
    if (p == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>',
      );
    let y = n.getAttribute("formaction") || p.getAttribute("action");
    if (
      ((o = y ? ca(y, r) : null),
      (u = n.getAttribute("formmethod") || p.getAttribute("method") || Vu),
      (c =
        Cc(n.getAttribute("formenctype")) ||
        Cc(p.getAttribute("enctype")) ||
        Xu),
      (f = new FormData(p, n)),
      !Wg())
    ) {
      let { name: m, type: v, value: b } = n;
      if (v === "image") {
        let T = m ? `${m}.` : "";
        (f.append(`${T}x`, "0"), f.append(`${T}y`, "0"));
      } else m && f.append(m, b);
    }
  } else {
    if (no(n))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">',
      );
    ((u = Vu), (o = null), (c = Xu), (d = n));
  }
  return (
    f && c === "text/plain" && ((d = f), (f = void 0)),
    { action: o, method: u.toLowerCase(), encType: c, formData: f, body: d }
  );
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function af(n, r) {
  if (n === !1 || n === null || typeof n > "u") throw new Error(r);
}
function tv(n, r, u) {
  let o =
    typeof n == "string"
      ? new URL(
          n,
          typeof window > "u"
            ? "server://singlefetch/"
            : window.location.origin,
        )
      : n;
  return (
    o.pathname === "/"
      ? (o.pathname = `_root.${u}`)
      : r && ca(o.pathname, r) === "/"
        ? (o.pathname = `${r.replace(/\/$/, "")}/_root.${u}`)
        : (o.pathname = `${o.pathname.replace(/\/$/, "")}.${u}`),
    o
  );
}
async function av(n, r) {
  if (n.id in r) return r[n.id];
  try {
    let u = await import(n.module);
    return ((r[n.id] = u), u);
  } catch (u) {
    return (
      console.error(
        `Error loading route module \`${n.module}\`, reloading page...`,
      ),
      console.error(u),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function lv(n) {
  return n == null
    ? !1
    : n.href == null
      ? n.rel === "preload" &&
        typeof n.imageSrcSet == "string" &&
        typeof n.imageSizes == "string"
      : typeof n.rel == "string" && typeof n.href == "string";
}
async function nv(n, r, u) {
  let o = await Promise.all(
    n.map(async (c) => {
      let f = r.routes[c.route.id];
      if (f) {
        let d = await av(f, u);
        return d.links ? d.links() : [];
      }
      return [];
    }),
  );
  return ov(
    o
      .flat(1)
      .filter(lv)
      .filter((c) => c.rel === "stylesheet" || c.rel === "preload")
      .map((c) =>
        c.rel === "stylesheet"
          ? { ...c, rel: "prefetch", as: "style" }
          : { ...c, rel: "prefetch" },
      ),
  );
}
function ym(n, r, u, o, c, f) {
  let d = (y, m) => (u[m] ? y.route.id !== u[m].route.id : !0),
    p = (y, m) =>
      u[m].pathname !== y.pathname ||
      (u[m].route.path?.endsWith("*") && u[m].params["*"] !== y.params["*"]);
  return f === "assets"
    ? r.filter((y, m) => d(y, m) || p(y, m))
    : f === "data"
      ? r.filter((y, m) => {
          let v = o.routes[y.route.id];
          if (!v || !v.hasLoader) return !1;
          if (d(y, m) || p(y, m)) return !0;
          if (y.route.shouldRevalidate) {
            let b = y.route.shouldRevalidate({
              currentUrl: new URL(
                c.pathname + c.search + c.hash,
                window.origin,
              ),
              currentParams: u[0]?.params || {},
              nextUrl: new URL(n, window.origin),
              nextParams: y.params,
              defaultShouldRevalidate: !0,
            });
            if (typeof b == "boolean") return b;
          }
          return !0;
        })
      : [];
}
function rv(n, r, { includeHydrateFallback: u } = {}) {
  return iv(
    n
      .map((o) => {
        let c = r.routes[o.route.id];
        if (!c) return [];
        let f = [c.module];
        return (
          c.clientActionModule && (f = f.concat(c.clientActionModule)),
          c.clientLoaderModule && (f = f.concat(c.clientLoaderModule)),
          u &&
            c.hydrateFallbackModule &&
            (f = f.concat(c.hydrateFallbackModule)),
          c.imports && (f = f.concat(c.imports)),
          f
        );
      })
      .flat(1),
  );
}
function iv(n) {
  return [...new Set(n)];
}
function uv(n) {
  let r = {},
    u = Object.keys(n).sort();
  for (let o of u) r[o] = n[o];
  return r;
}
function ov(n, r) {
  let u = new Set();
  return (
    new Set(r),
    n.reduce((o, c) => {
      let f = JSON.stringify(uv(c));
      return (u.has(f) || (u.add(f), o.push({ key: f, link: c })), o);
    }, [])
  );
}
function op() {
  let n = C.useContext(un);
  return (
    af(
      n,
      "You must render this element inside a <DataRouterContext.Provider> element",
    ),
    n
  );
}
function sv() {
  let n = C.useContext(si);
  return (
    af(
      n,
      "You must render this element inside a <DataRouterStateContext.Provider> element",
    ),
    n
  );
}
var lf = C.createContext(void 0);
lf.displayName = "FrameworkContext";
function sp() {
  let n = C.useContext(lf);
  return (
    af(n, "You must render this element inside a <HydratedRouter> element"),
    n
  );
}
function cv(n, r) {
  let u = C.useContext(lf),
    [o, c] = C.useState(!1),
    [f, d] = C.useState(!1),
    {
      onFocus: p,
      onBlur: y,
      onMouseEnter: m,
      onMouseLeave: v,
      onTouchStart: b,
    } = r,
    T = C.useRef(null);
  (C.useEffect(() => {
    if ((n === "render" && d(!0), n === "viewport")) {
      let q = (V) => {
          V.forEach((F) => {
            d(F.isIntersecting);
          });
        },
        D = new IntersectionObserver(q, { threshold: 0.5 });
      return (
        T.current && D.observe(T.current),
        () => {
          D.disconnect();
        }
      );
    }
  }, [n]),
    C.useEffect(() => {
      if (o) {
        let q = setTimeout(() => {
          d(!0);
        }, 100);
        return () => {
          clearTimeout(q);
        };
      }
    }, [o]));
  let U = () => {
      c(!0);
    },
    w = () => {
      (c(!1), d(!1));
    };
  return u
    ? n !== "intent"
      ? [f, T, {}]
      : [
          f,
          T,
          {
            onFocus: ai(p, U),
            onBlur: ai(y, w),
            onMouseEnter: ai(m, U),
            onMouseLeave: ai(v, w),
            onTouchStart: ai(b, U),
          },
        ]
    : [!1, T, {}];
}
function ai(n, r) {
  return (u) => {
    (n && n(u), u.defaultPrevented || r(u));
  };
}
function fv({ page: n, ...r }) {
  let { router: u } = op(),
    o = C.useMemo(() => Ol(u.routes, n, u.basename), [u.routes, n, u.basename]);
  return o ? C.createElement(hv, { page: n, matches: o, ...r }) : null;
}
function dv(n) {
  let { manifest: r, routeModules: u } = sp(),
    [o, c] = C.useState([]);
  return (
    C.useEffect(() => {
      let f = !1;
      return (
        nv(n, r, u).then((d) => {
          f || c(d);
        }),
        () => {
          f = !0;
        }
      );
    }, [n, r, u]),
    o
  );
}
function hv({ page: n, matches: r, ...u }) {
  let o = Dl(),
    { manifest: c, routeModules: f } = sp(),
    { basename: d } = op(),
    { loaderData: p, matches: y } = sv(),
    m = C.useMemo(() => ym(n, r, y, c, o, "data"), [n, r, y, c, o]),
    v = C.useMemo(() => ym(n, r, y, c, o, "assets"), [n, r, y, c, o]),
    b = C.useMemo(() => {
      if (n === o.pathname + o.search + o.hash) return [];
      let w = new Set(),
        q = !1;
      if (
        (r.forEach((V) => {
          let F = c.routes[V.route.id];
          !F ||
            !F.hasLoader ||
            ((!m.some((ee) => ee.route.id === V.route.id) &&
              V.route.id in p &&
              f[V.route.id]?.shouldRevalidate) ||
            F.hasClientLoader
              ? (q = !0)
              : w.add(V.route.id));
        }),
        w.size === 0)
      )
        return [];
      let D = tv(n, d, "data");
      return (
        q &&
          w.size > 0 &&
          D.searchParams.set(
            "_routes",
            r
              .filter((V) => w.has(V.route.id))
              .map((V) => V.route.id)
              .join(","),
          ),
        [D.pathname + D.search]
      );
    }, [d, p, o, c, m, r, n, f]),
    T = C.useMemo(() => rv(v, c), [v, c]),
    U = dv(v);
  return C.createElement(
    C.Fragment,
    null,
    b.map((w) =>
      C.createElement("link", {
        key: w,
        rel: "prefetch",
        as: "fetch",
        href: w,
        ...u,
      }),
    ),
    T.map((w) =>
      C.createElement("link", { key: w, rel: "modulepreload", href: w, ...u }),
    ),
    U.map(({ key: w, link: q }) =>
      C.createElement("link", { key: w, nonce: u.nonce, ...q }),
    ),
  );
}
function mv(...n) {
  return (r) => {
    n.forEach((u) => {
      typeof u == "function" ? u(r) : u != null && (u.current = r);
    });
  };
}
var cp =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
try {
  cp && (window.__reactRouterVersion = "7.9.1");
} catch {}
function pv(n, r) {
  return W1({
    basename: r?.basename,
    getContext: r?.getContext,
    future: r?.future,
    history: g1({ window: r?.window }),
    hydrationData: yv(),
    routes: n,
    mapRouteProperties: Bg,
    hydrationRouteProperties: qg,
    dataStrategy: r?.dataStrategy,
    patchRoutesOnNavigation: r?.patchRoutesOnNavigation,
    window: r?.window,
  }).initialize();
}
function yv() {
  let n = window?.__staticRouterHydrationData;
  return (n && n.errors && (n = { ...n, errors: gv(n.errors) }), n);
}
function gv(n) {
  if (!n) return null;
  let r = Object.entries(n),
    u = {};
  for (let [o, c] of r)
    if (c && c.__type === "RouteErrorResponse")
      u[o] = new eo(c.status, c.statusText, c.data, c.internal === !0);
    else if (c && c.__type === "Error") {
      if (c.__subType) {
        let f = window[c.__subType];
        if (typeof f == "function")
          try {
            let d = new f(c.message);
            ((d.stack = ""), (u[o] = d));
          } catch {}
      }
      if (u[o] == null) {
        let f = new Error(c.message);
        ((f.stack = ""), (u[o] = f));
      }
    } else u[o] = c;
  return u;
}
var fp = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Jn = C.forwardRef(function (
    {
      onClick: r,
      discover: u = "render",
      prefetch: o = "none",
      relative: c,
      reloadDocument: f,
      replace: d,
      state: p,
      target: y,
      to: m,
      preventScrollReset: v,
      viewTransition: b,
      ...T
    },
    U,
  ) {
    let { basename: w } = C.useContext(_a),
      q = typeof m == "string" && fp.test(m),
      D,
      V = !1;
    if (typeof m == "string" && q && ((D = m), cp))
      try {
        let fe = new URL(window.location.href),
          Ue = m.startsWith("//") ? new URL(fe.protocol + m) : new URL(m),
          Xe = ca(Ue.pathname, w);
        Ue.origin === fe.origin && Xe != null
          ? (m = Xe + Ue.search + Ue.hash)
          : (V = !0);
      } catch {
        dt(
          !1,
          `<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`,
        );
      }
    let F = xg(m, { relative: c }),
      [ee, le, $] = cv(o, T),
      z = Ev(m, {
        replace: d,
        state: p,
        target: y,
        preventScrollReset: v,
        relative: c,
        viewTransition: b,
      });
    function ne(fe) {
      (r && r(fe), fe.defaultPrevented || z(fe));
    }
    let te = C.createElement("a", {
      ...T,
      ...$,
      href: D || F,
      onClick: V || f ? r : ne,
      ref: mv(U, le),
      target: y,
      "data-discover": !q && u === "render" ? "true" : void 0,
    });
    return ee && !q
      ? C.createElement(C.Fragment, null, te, C.createElement(fv, { page: F }))
      : te;
  });
Jn.displayName = "Link";
var vv = C.forwardRef(function (
  {
    "aria-current": r = "page",
    caseSensitive: u = !1,
    className: o = "",
    end: c = !1,
    style: f,
    to: d,
    viewTransition: p,
    children: y,
    ...m
  },
  v,
) {
  let b = fi(d, { relative: m.relative }),
    T = Dl(),
    U = C.useContext(si),
    { navigator: w, basename: q } = C.useContext(_a),
    D = U != null && Av(b) && p === !0,
    V = w.encodeLocation ? w.encodeLocation(b).pathname : b.pathname,
    F = T.pathname,
    ee =
      U && U.navigation && U.navigation.location
        ? U.navigation.location.pathname
        : null;
  (u ||
    ((F = F.toLowerCase()),
    (ee = ee ? ee.toLowerCase() : null),
    (V = V.toLowerCase())),
    ee && q && (ee = ca(ee, q) || ee));
  const le = V !== "/" && V.endsWith("/") ? V.length - 1 : V.length;
  let $ = F === V || (!c && F.startsWith(V) && F.charAt(le) === "/"),
    z =
      ee != null &&
      (ee === V || (!c && ee.startsWith(V) && ee.charAt(V.length) === "/")),
    ne = { isActive: $, isPending: z, isTransitioning: D },
    te = $ ? r : void 0,
    fe;
  typeof o == "function"
    ? (fe = o(ne))
    : (fe = [
        o,
        $ ? "active" : null,
        z ? "pending" : null,
        D ? "transitioning" : null,
      ]
        .filter(Boolean)
        .join(" "));
  let Ue = typeof f == "function" ? f(ne) : f;
  return C.createElement(
    Jn,
    {
      ...m,
      "aria-current": te,
      className: fe,
      ref: v,
      style: Ue,
      to: d,
      viewTransition: p,
    },
    typeof y == "function" ? y(ne) : y,
  );
});
vv.displayName = "NavLink";
var bv = C.forwardRef(
  (
    {
      discover: n = "render",
      fetcherKey: r,
      navigate: u,
      reloadDocument: o,
      replace: c,
      state: f,
      method: d = Vu,
      action: p,
      onSubmit: y,
      relative: m,
      preventScrollReset: v,
      viewTransition: b,
      ...T
    },
    U,
  ) => {
    let w = wv(),
      q = Tv(p, { relative: m }),
      D = d.toLowerCase() === "get" ? "get" : "post",
      V = typeof p == "string" && fp.test(p),
      F = (ee) => {
        if ((y && y(ee), ee.defaultPrevented)) return;
        ee.preventDefault();
        let le = ee.nativeEvent.submitter,
          $ = le?.getAttribute("formmethod") || d;
        w(le || ee.currentTarget, {
          fetcherKey: r,
          method: $,
          navigate: u,
          replace: c,
          state: f,
          relative: m,
          preventScrollReset: v,
          viewTransition: b,
        });
      };
    return C.createElement("form", {
      ref: U,
      method: D,
      action: q,
      onSubmit: o ? y : F,
      ...T,
      "data-discover": !V && n === "render" ? "true" : void 0,
    });
  },
);
bv.displayName = "Form";
function Sv(n) {
  return `${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function dp(n) {
  let r = C.useContext(un);
  return (He(r, Sv(n)), r);
}
function Ev(
  n,
  {
    target: r,
    replace: u,
    state: o,
    preventScrollReset: c,
    relative: f,
    viewTransition: d,
  } = {},
) {
  let p = ip(),
    y = Dl(),
    m = fi(n, { relative: f });
  return C.useCallback(
    (v) => {
      if (Pg(v, r)) {
        v.preventDefault();
        let b = u !== void 0 ? u : Ml(y) === Ml(m);
        p(n, {
          replace: b,
          state: o,
          preventScrollReset: c,
          relative: f,
          viewTransition: d,
        });
      }
    },
    [y, p, m, u, o, r, n, c, f, d],
  );
}
function TS(n) {
  dt(
    typeof URLSearchParams < "u",
    "You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.",
  );
  let r = C.useRef(Bc(n)),
    u = C.useRef(!1),
    o = Dl(),
    c = C.useMemo(() => $g(o.search, u.current ? null : r.current), [o.search]),
    f = ip(),
    d = C.useCallback(
      (p, y) => {
        const m = Bc(typeof p == "function" ? p(new URLSearchParams(c)) : p);
        ((u.current = !0), f("?" + m, y));
      },
      [f, c],
    );
  return [c, d];
}
var xv = 0,
  Rv = () => `__${String(++xv)}__`;
function wv() {
  let { router: n } = dp("useSubmit"),
    { basename: r } = C.useContext(_a),
    u = Lg();
  return C.useCallback(
    async (o, c = {}) => {
      let { action: f, method: d, encType: p, formData: y, body: m } = ev(o, r);
      if (c.navigate === !1) {
        let v = c.fetcherKey || Rv();
        await n.fetch(v, u, c.action || f, {
          preventScrollReset: c.preventScrollReset,
          formData: y,
          body: m,
          formMethod: c.method || d,
          formEncType: c.encType || p,
          flushSync: c.flushSync,
        });
      } else
        await n.navigate(c.action || f, {
          preventScrollReset: c.preventScrollReset,
          formData: y,
          body: m,
          formMethod: c.method || d,
          formEncType: c.encType || p,
          replace: c.replace,
          state: c.state,
          fromRouteId: u,
          flushSync: c.flushSync,
          viewTransition: c.viewTransition,
        });
    },
    [n, r, u],
  );
}
function Tv(n, { relative: r } = {}) {
  let { basename: u } = C.useContext(_a),
    o = C.useContext(va);
  He(o, "useFormAction must be used inside a RouteContext");
  let [c] = o.matches.slice(-1),
    f = { ...fi(n || ".", { relative: r }) },
    d = Dl();
  if (n == null) {
    f.search = d.search;
    let p = new URLSearchParams(f.search),
      y = p.getAll("index");
    if (y.some((v) => v === "")) {
      (p.delete("index"),
        y.filter((b) => b).forEach((b) => p.append("index", b)));
      let v = p.toString();
      f.search = v ? `?${v}` : "";
    }
  }
  return (
    (!n || n === ".") &&
      c.route.index &&
      (f.search = f.search ? f.search.replace(/^\?/, "?index&") : "?index"),
    u !== "/" && (f.pathname = f.pathname === "/" ? u : Ma([u, f.pathname])),
    Ml(f)
  );
}
function Av(n, { relative: r } = {}) {
  let u = C.useContext(Wc);
  He(
    u != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?",
  );
  let { basename: o } = dp("useViewTransitionState"),
    c = fi(n, { relative: r });
  if (!u.isTransitioning) return !1;
  let f = ca(u.currentLocation.pathname, o) || u.currentLocation.pathname,
    d = ca(u.nextLocation.pathname, o) || u.nextLocation.pathname;
  return Iu(c.pathname, d) != null || Iu(c.pathname, f) != null;
}
var hp = Ym();
function Ov(n) {
  return C.createElement(Yg, { flushSync: hp.flushSync, ...n });
}
const Cv = "modulepreload",
  Mv = function (n) {
    return "/" + n;
  },
  gm = {},
  Ia = function (r, u, o) {
    let c = Promise.resolve();
    if (u && u.length > 0) {
      let y = function (m) {
        return Promise.all(
          m.map((v) =>
            Promise.resolve(v).then(
              (b) => ({ status: "fulfilled", value: b }),
              (b) => ({ status: "rejected", reason: b }),
            ),
          ),
        );
      };
      document.getElementsByTagName("link");
      const d = document.querySelector("meta[property=csp-nonce]"),
        p = d?.nonce || d?.getAttribute("nonce");
      c = y(
        u.map((m) => {
          if (((m = Mv(m)), m in gm)) return;
          gm[m] = !0;
          const v = m.endsWith(".css"),
            b = v ? '[rel="stylesheet"]' : "";
          if (document.querySelector(`link[href="${m}"]${b}`)) return;
          const T = document.createElement("link");
          if (
            ((T.rel = v ? "stylesheet" : Cv),
            v || (T.as = "script"),
            (T.crossOrigin = ""),
            (T.href = m),
            p && T.setAttribute("nonce", p),
            document.head.appendChild(T),
            v)
          )
            return new Promise((U, w) => {
              (T.addEventListener("load", U),
                T.addEventListener("error", () =>
                  w(new Error(`Unable to preload CSS for ${m}`)),
                ));
            });
        }),
      );
    }
    function f(d) {
      const p = new Event("vite:preloadError", { cancelable: !0 });
      if (((p.payload = d), window.dispatchEvent(p), !p.defaultPrevented))
        throw d;
    }
    return c.then((d) => {
      for (const p of d || []) p.status === "rejected" && f(p.reason);
      return r().catch(f);
    });
  },
  Wa = {
    HOME: { ROOT: "/" },
    AUCTION: { ROOT: "/auction", ROOM: "/auction/:auctionId" },
    CREATE: { ROOT: "/create" },
    HISTORY: { ROOT: "/history" },
    AUTH: { ROOT: "/auth" },
    PAYMENT: {
      APPROVAL: "/payment/approve",
      CANCEL: "/payment/cancel",
      FAIL: "/payment/fail",
    },
  },
  tn = "/assets/profile1-BgNf41Vs.svg",
  Qu = "/assets/profile2-uimi6C9l.svg",
  Zu = "/assets/profile3-Cw6ESoX5.svg",
  Ku = "/assets/profile4-BoJny71e.svg",
  Ju = "/assets/profile5-CaBIp1ZG.svg",
  Fu = "/assets/profile6-D02euur1.svg",
  _v = "/assets/logo-CjZZMZa2.svg",
  mp = "/assets/cup-CJ517CSa.svg",
  Dv =
    "data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M16.875%201.13754C16.7594%201.02166%2016.622%200.929722%2016.4708%200.866995C16.3196%200.804268%2016.1575%200.77198%2015.9938%200.77198C15.8301%200.77198%2015.668%200.804268%2015.5168%200.866995C15.3655%200.929722%2015.2282%201.02166%2015.1125%201.13754L9.00003%207.23753L2.88754%201.12504C2.77181%201.00931%202.63442%200.917508%202.48321%200.854877C2.33201%200.792245%202.16995%200.76001%202.00629%200.76001C1.84262%200.76001%201.68056%200.792245%201.52936%200.854877C1.37815%200.917508%201.24076%201.00931%201.12504%201.12504C1.00931%201.24076%200.917508%201.37815%200.854877%201.52936C0.792245%201.68056%200.76001%201.84262%200.76001%202.00629C0.76001%202.16995%200.792245%202.33201%200.854877%202.48321C0.917508%202.63442%201.00931%202.77181%201.12504%202.88754L7.23753%209.00003L1.12504%2015.1125C1.00931%2015.2283%200.917508%2015.3656%200.854877%2015.5169C0.792245%2015.6681%200.76001%2015.8301%200.76001%2015.9938C0.76001%2016.1574%200.792245%2016.3195%200.854877%2016.4707C0.917508%2016.6219%201.00931%2016.7593%201.12504%2016.875C1.24076%2016.9908%201.37815%2017.0826%201.52936%2017.1452C1.68056%2017.2078%201.84262%2017.2401%202.00629%2017.2401C2.16995%2017.2401%202.33201%2017.2078%202.48321%2017.1452C2.63442%2017.0826%202.77181%2016.9908%202.88754%2016.875L9.00003%2010.7625L15.1125%2016.875C15.2283%2016.9908%2015.3656%2017.0826%2015.5169%2017.1452C15.6681%2017.2078%2015.8301%2017.2401%2015.9938%2017.2401C16.1574%2017.2401%2016.3195%2017.2078%2016.4707%2017.1452C16.6219%2017.0826%2016.7593%2016.9908%2016.875%2016.875C16.9908%2016.7593%2017.0826%2016.6219%2017.1452%2016.4707C17.2078%2016.3195%2017.2401%2016.1574%2017.2401%2015.9938C17.2401%2015.8301%2017.2078%2015.6681%2017.1452%2015.5169C17.0826%2015.3656%2016.9908%2015.2283%2016.875%2015.1125L10.7625%209.00003L16.875%202.88754C17.35%202.41254%2017.35%201.61254%2016.875%201.13754Z'%20fill='%23525252'/%3e%3c/svg%3e",
  zv =
    "data:image/svg+xml,%3csvg%20width='29'%20height='26'%20viewBox='0%200%2029%2026'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M14.5%200C22.2333%200%2028.5013%204.88533%2028.5013%2010.9133C28.5013%2016.94%2022.2333%2021.8253%2014.5013%2021.8253C13.7315%2021.824%2012.9625%2021.775%2012.1987%2021.6787L6.32134%2025.5227C5.65334%2025.876%205.41734%2025.8373%205.69201%2024.972L6.88134%2020.068C3.04134%2018.1213%200.501343%2014.748%200.501343%2010.9133C0.501343%204.88667%206.76801%200%2014.5013%200M22.3787%2010.7467L24.3387%208.848C24.4518%208.73054%2024.5149%208.57378%2024.5147%208.41073C24.5145%208.24767%2024.451%208.09106%2024.3376%207.97388C24.2242%207.8567%2024.0698%207.78809%2023.9069%207.78252C23.7439%207.77695%2023.5851%207.83484%2023.464%207.944L20.8933%2010.432V8.376C20.8933%208.20909%2020.827%208.04902%2020.709%207.93099C20.591%207.81297%2020.4309%207.74667%2020.264%207.74667C20.0971%207.74667%2019.937%207.81297%2019.819%207.93099C19.701%208.04902%2019.6347%208.20909%2019.6347%208.376V11.7853C19.6125%2011.8828%2019.6125%2011.9839%2019.6347%2012.0813V14C19.6347%2014.1669%2019.701%2014.327%2019.819%2014.445C19.937%2014.563%2020.0971%2014.6293%2020.264%2014.6293C20.4309%2014.6293%2020.591%2014.563%2020.709%2014.445C20.827%2014.327%2020.8933%2014.1669%2020.8933%2014V12.1827L21.4627%2011.632L23.3667%2014.3427C23.4142%2014.4103%2023.4746%2014.468%2023.5444%2014.5123C23.6143%2014.5567%2023.6921%2014.5868%2023.7736%2014.601C23.8551%2014.6153%2023.9385%2014.6133%2024.0192%2014.5953C24.1%2014.5773%2024.1763%2014.5435%2024.244%2014.496C24.3117%2014.4485%2024.3693%2014.3881%2024.4137%2014.3182C24.458%2014.2484%2024.4881%2014.1706%2024.5024%2014.0891C24.5166%2014.0076%2024.5147%2013.9241%2024.4966%2013.8434C24.4786%2013.7627%2024.4449%2013.6863%2024.3973%2013.6187L22.3787%2010.7467ZM18.4347%2013.312H16.488V8.396C16.4806%208.23427%2016.4111%208.08164%2016.294%207.96983C16.1769%207.85802%2016.0212%207.79563%2015.8593%207.79563C15.6974%207.79563%2015.5418%207.85802%2015.4247%207.96983C15.3076%208.08164%2015.2381%208.23427%2015.2307%208.396V13.9413C15.2307%2014.288%2015.5107%2014.5707%2015.8587%2014.5707H18.4347C18.6016%2014.5707%2018.7617%2014.5044%2018.8797%2014.3863C18.9977%2014.2683%2019.064%2014.1082%2019.064%2013.9413C19.064%2013.7744%2018.9977%2013.6143%2018.8797%2013.4963C18.7617%2013.3783%2018.6016%2013.312%2018.4347%2013.312ZM10.6253%2011.8573L11.5533%209.58L12.404%2011.856L10.6253%2011.8573ZM13.9893%2012.5067L13.992%2012.4853C13.9916%2012.3268%2013.9311%2012.1744%2013.8227%2012.0587L12.428%208.32533C12.3695%208.14742%2012.2582%207.99159%2012.1088%207.87866C11.9594%207.76573%2011.7791%207.70107%2011.592%207.69333C11.4037%207.69325%2011.2198%207.75012%2011.0644%207.85649C10.909%207.96286%2010.7894%208.11375%2010.7213%208.28933L8.50534%2013.7227C8.44222%2013.8772%208.44307%2014.0505%208.50771%2014.2044C8.57235%2014.3583%208.69548%2014.4802%208.85001%2014.5433C9.00454%2014.6065%209.17782%2014.6056%209.33173%2014.541C9.48563%2014.4763%209.60756%2014.3532%209.67068%2014.1987L10.1133%2013.1147H12.8733L13.2707%2014.1813C13.2978%2014.2611%2013.3406%2014.3345%2013.3966%2014.3974C13.4527%2014.4603%2013.5207%2014.5113%2013.5968%2014.5474C13.6729%2014.5835%2013.7554%2014.6039%2013.8396%2014.6075C13.9237%2014.6111%2014.0077%2014.5978%2014.0866%2014.5684C14.1655%2014.5389%2014.2377%2014.4939%2014.2989%2014.4361C14.3601%2014.3782%2014.409%2014.3087%2014.4429%2014.2315C14.4767%2014.1544%2014.4947%2014.0713%2014.4958%2013.9871C14.4969%2013.9029%2014.4811%2013.8193%2014.4493%2013.7413L13.9893%2012.5067ZM9.55868%208.40267C9.55903%208.32003%209.54303%208.23815%209.51162%208.16172C9.4802%208.0853%209.43397%208.01584%209.3756%207.95735C9.31724%207.89886%209.24788%207.85249%209.17152%207.8209C9.09516%207.78932%209.01331%207.77316%208.93068%207.77333H4.60401C4.4371%207.77333%204.27703%207.83964%204.159%207.95766C4.04098%208.07568%203.97468%208.23576%203.97468%208.40267C3.97468%208.56958%204.04098%208.72965%204.159%208.84767C4.27703%208.9657%204.4371%209.032%204.60401%209.032H6.15068V14.0133C6.15068%2014.1802%206.21698%2014.3403%206.335%2014.4583C6.45303%2014.5764%206.6131%2014.6427%206.78001%2014.6427C6.94692%2014.6427%207.10699%2014.5764%207.22502%2014.4583C7.34304%2014.3403%207.40934%2014.1802%207.40934%2014.0133V9.032H8.92934C9.01209%209.03235%209.09408%209.01632%209.1706%208.98481C9.24711%208.95331%209.31663%208.90697%209.37514%208.84846C9.43365%208.78995%209.47999%208.72043%209.51149%208.64392C9.54299%208.5674%209.55903%208.48541%209.55868%208.40267Z'%20fill='black'/%3e%3c/svg%3e",
  Nv =
    "data:image/svg+xml,%3csvg%20width='47'%20height='46'%20viewBox='0%200%2047%2046'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='23.5'%20cy='23'%20r='22'%20fill='white'%20stroke='%23F3F3F3'%20stroke-width='2'/%3e%3cpath%20d='M34.69%2011.8101C33.8509%2010.972%2032.7135%2010.5012%2031.5275%2010.5012C30.3416%2010.5012%2029.2041%2010.972%2028.365%2011.8101L13.425%2026.7501C12.9169%2027.2577%2012.5599%2027.8964%2012.3938%2028.5951L11.025%2034.3476C10.988%2034.5034%2010.9914%2034.6661%2011.0351%2034.8202C11.0788%2034.9743%2011.1612%2035.1146%2011.2745%2035.2278C11.3878%2035.341%2011.5283%2035.4233%2011.6824%2035.4668C11.8365%2035.5103%2011.9992%2035.5136%2012.155%2035.4764L17.9063%2034.1064C18.6054%2033.9404%2019.2446%2033.5834%2019.7525%2033.0751L34.69%2018.1376C35.5281%2017.2985%2035.9989%2016.1611%2035.9989%2014.9751C35.9989%2013.7892%2035.5281%2012.6517%2034.69%2011.8126M29.69%2013.1376C29.9313%2012.8963%2030.2178%2012.7049%2030.5331%2012.5743C30.8483%2012.4437%2031.1863%2012.3765%2031.5275%2012.3765C31.8688%2012.3765%2032.2067%2012.4437%2032.522%2012.5743C32.8372%2012.7049%2033.1237%2012.8963%2033.365%2013.1376C33.6063%2013.3789%2033.7977%2013.6654%2033.9283%2013.9807C34.0589%2014.2959%2034.1261%2014.6339%2034.1261%2014.9751C34.1261%2015.3164%2034.0589%2015.6543%2033.9283%2015.9696C33.7977%2016.2848%2033.6063%2016.5713%2033.365%2016.8126L32.25%2017.9239L28.575%2014.2501L29.69%2013.1376ZM27.25%2015.5776L30.925%2019.2501L18.425%2031.7501C18.1625%2032.0126%2017.8325%2032.1964%2017.4713%2032.2826L13.2013%2033.3001L14.2175%2029.0301C14.3038%2028.6676%2014.4888%2028.3376%2014.7513%2028.0751L27.25%2015.5776Z'%20fill='%23757575'/%3e%3c/svg%3e";
function pp(n) {
  var r,
    u,
    o = "";
  if (typeof n == "string" || typeof n == "number") o += n;
  else if (typeof n == "object")
    if (Array.isArray(n)) {
      var c = n.length;
      for (r = 0; r < c; r++)
        n[r] && (u = pp(n[r])) && (o && (o += " "), (o += u));
    } else for (u in n) n[u] && (o && (o += " "), (o += u));
  return o;
}
function Uv() {
  for (var n, r, u = 0, o = "", c = arguments.length; u < c; u++)
    (n = arguments[u]) && (r = pp(n)) && (o && (o += " "), (o += r));
  return o;
}
const nf = "-",
  Lv = (n) => {
    const r = Hv(n),
      { conflictingClassGroups: u, conflictingClassGroupModifiers: o } = n;
    return {
      getClassGroupId: (d) => {
        const p = d.split(nf);
        return (p[0] === "" && p.length !== 1 && p.shift(), yp(p, r) || jv(d));
      },
      getConflictingClassGroupIds: (d, p) => {
        const y = u[d] || [];
        return p && o[d] ? [...y, ...o[d]] : y;
      },
    };
  },
  yp = (n, r) => {
    if (n.length === 0) return r.classGroupId;
    const u = n[0],
      o = r.nextPart.get(u),
      c = o ? yp(n.slice(1), o) : void 0;
    if (c) return c;
    if (r.validators.length === 0) return;
    const f = n.join(nf);
    return r.validators.find(({ validator: d }) => d(f))?.classGroupId;
  },
  vm = /^\[(.+)\]$/,
  jv = (n) => {
    if (vm.test(n)) {
      const r = vm.exec(n)[1],
        u = r?.substring(0, r.indexOf(":"));
      if (u) return "arbitrary.." + u;
    }
  },
  Hv = (n) => {
    const { theme: r, classGroups: u } = n,
      o = { nextPart: new Map(), validators: [] };
    for (const c in u) qc(u[c], o, c, r);
    return o;
  },
  qc = (n, r, u, o) => {
    n.forEach((c) => {
      if (typeof c == "string") {
        const f = c === "" ? r : bm(r, c);
        f.classGroupId = u;
        return;
      }
      if (typeof c == "function") {
        if (Bv(c)) {
          qc(c(o), r, u, o);
          return;
        }
        r.validators.push({ validator: c, classGroupId: u });
        return;
      }
      Object.entries(c).forEach(([f, d]) => {
        qc(d, bm(r, f), u, o);
      });
    });
  },
  bm = (n, r) => {
    let u = n;
    return (
      r.split(nf).forEach((o) => {
        (u.nextPart.has(o) ||
          u.nextPart.set(o, { nextPart: new Map(), validators: [] }),
          (u = u.nextPart.get(o)));
      }),
      u
    );
  },
  Bv = (n) => n.isThemeGetter,
  qv = (n) => {
    if (n < 1) return { get: () => {}, set: () => {} };
    let r = 0,
      u = new Map(),
      o = new Map();
    const c = (f, d) => {
      (u.set(f, d), r++, r > n && ((r = 0), (o = u), (u = new Map())));
    };
    return {
      get(f) {
        let d = u.get(f);
        if (d !== void 0) return d;
        if ((d = o.get(f)) !== void 0) return (c(f, d), d);
      },
      set(f, d) {
        u.has(f) ? u.set(f, d) : c(f, d);
      },
    };
  },
  kc = "!",
  Yc = ":",
  kv = Yc.length,
  Yv = (n) => {
    const { prefix: r, experimentalParseClassName: u } = n;
    let o = (c) => {
      const f = [];
      let d = 0,
        p = 0,
        y = 0,
        m;
      for (let w = 0; w < c.length; w++) {
        let q = c[w];
        if (d === 0 && p === 0) {
          if (q === Yc) {
            (f.push(c.slice(y, w)), (y = w + kv));
            continue;
          }
          if (q === "/") {
            m = w;
            continue;
          }
        }
        q === "[" ? d++ : q === "]" ? d-- : q === "(" ? p++ : q === ")" && p--;
      }
      const v = f.length === 0 ? c : c.substring(y),
        b = Gv(v),
        T = b !== v,
        U = m && m > y ? m - y : void 0;
      return {
        modifiers: f,
        hasImportantModifier: T,
        baseClassName: b,
        maybePostfixModifierPosition: U,
      };
    };
    if (r) {
      const c = r + Yc,
        f = o;
      o = (d) =>
        d.startsWith(c)
          ? f(d.substring(c.length))
          : {
              isExternal: !0,
              modifiers: [],
              hasImportantModifier: !1,
              baseClassName: d,
              maybePostfixModifierPosition: void 0,
            };
    }
    if (u) {
      const c = o;
      o = (f) => u({ className: f, parseClassName: c });
    }
    return o;
  },
  Gv = (n) =>
    n.endsWith(kc)
      ? n.substring(0, n.length - 1)
      : n.startsWith(kc)
        ? n.substring(1)
        : n,
  Vv = (n) => {
    const r = Object.fromEntries(n.orderSensitiveModifiers.map((o) => [o, !0]));
    return (o) => {
      if (o.length <= 1) return o;
      const c = [];
      let f = [];
      return (
        o.forEach((d) => {
          d[0] === "[" || r[d] ? (c.push(...f.sort(), d), (f = [])) : f.push(d);
        }),
        c.push(...f.sort()),
        c
      );
    };
  },
  Xv = (n) => ({
    cache: qv(n.cacheSize),
    parseClassName: Yv(n),
    sortModifiers: Vv(n),
    ...Lv(n),
  }),
  Qv = /\s+/,
  Zv = (n, r) => {
    const {
        parseClassName: u,
        getClassGroupId: o,
        getConflictingClassGroupIds: c,
        sortModifiers: f,
      } = r,
      d = [],
      p = n.trim().split(Qv);
    let y = "";
    for (let m = p.length - 1; m >= 0; m -= 1) {
      const v = p[m],
        {
          isExternal: b,
          modifiers: T,
          hasImportantModifier: U,
          baseClassName: w,
          maybePostfixModifierPosition: q,
        } = u(v);
      if (b) {
        y = v + (y.length > 0 ? " " + y : y);
        continue;
      }
      let D = !!q,
        V = o(D ? w.substring(0, q) : w);
      if (!V) {
        if (!D) {
          y = v + (y.length > 0 ? " " + y : y);
          continue;
        }
        if (((V = o(w)), !V)) {
          y = v + (y.length > 0 ? " " + y : y);
          continue;
        }
        D = !1;
      }
      const F = f(T).join(":"),
        ee = U ? F + kc : F,
        le = ee + V;
      if (d.includes(le)) continue;
      d.push(le);
      const $ = c(V, D);
      for (let z = 0; z < $.length; ++z) {
        const ne = $[z];
        d.push(ee + ne);
      }
      y = v + (y.length > 0 ? " " + y : y);
    }
    return y;
  };
function Kv() {
  let n = 0,
    r,
    u,
    o = "";
  for (; n < arguments.length; )
    (r = arguments[n++]) && (u = gp(r)) && (o && (o += " "), (o += u));
  return o;
}
const gp = (n) => {
  if (typeof n == "string") return n;
  let r,
    u = "";
  for (let o = 0; o < n.length; o++)
    n[o] && (r = gp(n[o])) && (u && (u += " "), (u += r));
  return u;
};
function Jv(n, ...r) {
  let u,
    o,
    c,
    f = d;
  function d(y) {
    const m = r.reduce((v, b) => b(v), n());
    return ((u = Xv(m)), (o = u.cache.get), (c = u.cache.set), (f = p), p(y));
  }
  function p(y) {
    const m = o(y);
    if (m) return m;
    const v = Zv(y, u);
    return (c(y, v), v);
  }
  return function () {
    return f(Kv.apply(null, arguments));
  };
}
const vt = (n) => {
    const r = (u) => u[n] || [];
    return ((r.isThemeGetter = !0), r);
  },
  vp = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
  bp = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
  Fv = /^\d+\/\d+$/,
  Pv = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  $v =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  Wv = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
  Iv = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  eb =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  Zn = (n) => Fv.test(n),
  ze = (n) => !!n && !Number.isNaN(Number(n)),
  Tl = (n) => !!n && Number.isInteger(Number(n)),
  Mc = (n) => n.endsWith("%") && ze(n.slice(0, -1)),
  $a = (n) => Pv.test(n),
  tb = () => !0,
  ab = (n) => $v.test(n) && !Wv.test(n),
  Sp = () => !1,
  lb = (n) => Iv.test(n),
  nb = (n) => eb.test(n),
  rb = (n) => !ie(n) && !ue(n),
  ib = (n) => $n(n, Rp, Sp),
  ie = (n) => vp.test(n),
  en = (n) => $n(n, wp, ab),
  _c = (n) => $n(n, fb, ze),
  Sm = (n) => $n(n, Ep, Sp),
  ub = (n) => $n(n, xp, nb),
  Hu = (n) => $n(n, Tp, lb),
  ue = (n) => bp.test(n),
  li = (n) => Wn(n, wp),
  ob = (n) => Wn(n, db),
  Em = (n) => Wn(n, Ep),
  sb = (n) => Wn(n, Rp),
  cb = (n) => Wn(n, xp),
  Bu = (n) => Wn(n, Tp, !0),
  $n = (n, r, u) => {
    const o = vp.exec(n);
    return o ? (o[1] ? r(o[1]) : u(o[2])) : !1;
  },
  Wn = (n, r, u = !1) => {
    const o = bp.exec(n);
    return o ? (o[1] ? r(o[1]) : u) : !1;
  },
  Ep = (n) => n === "position" || n === "percentage",
  xp = (n) => n === "image" || n === "url",
  Rp = (n) => n === "length" || n === "size" || n === "bg-size",
  wp = (n) => n === "length",
  fb = (n) => n === "number",
  db = (n) => n === "family-name",
  Tp = (n) => n === "shadow",
  hb = () => {
    const n = vt("color"),
      r = vt("font"),
      u = vt("text"),
      o = vt("font-weight"),
      c = vt("tracking"),
      f = vt("leading"),
      d = vt("breakpoint"),
      p = vt("container"),
      y = vt("spacing"),
      m = vt("radius"),
      v = vt("shadow"),
      b = vt("inset-shadow"),
      T = vt("text-shadow"),
      U = vt("drop-shadow"),
      w = vt("blur"),
      q = vt("perspective"),
      D = vt("aspect"),
      V = vt("ease"),
      F = vt("animate"),
      ee = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      le = () => [
        "center",
        "top",
        "bottom",
        "left",
        "right",
        "top-left",
        "left-top",
        "top-right",
        "right-top",
        "bottom-right",
        "right-bottom",
        "bottom-left",
        "left-bottom",
      ],
      $ = () => [...le(), ue, ie],
      z = () => ["auto", "hidden", "clip", "visible", "scroll"],
      ne = () => ["auto", "contain", "none"],
      te = () => [ue, ie, y],
      fe = () => [Zn, "full", "auto", ...te()],
      Ue = () => [Tl, "none", "subgrid", ue, ie],
      Xe = () => ["auto", { span: ["full", Tl, ue, ie] }, Tl, ue, ie],
      Be = () => [Tl, "auto", ue, ie],
      we = () => ["auto", "min", "max", "fr", ue, ie],
      Re = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
        "baseline",
        "center-safe",
        "end-safe",
      ],
      _e = () => [
        "start",
        "end",
        "center",
        "stretch",
        "center-safe",
        "end-safe",
      ],
      O = () => ["auto", ...te()],
      P = () => [
        Zn,
        "auto",
        "full",
        "dvw",
        "dvh",
        "lvw",
        "lvh",
        "svw",
        "svh",
        "min",
        "max",
        "fit",
        ...te(),
      ],
      G = () => [n, ue, ie],
      Ee = () => [...le(), Em, Sm, { position: [ue, ie] }],
      E = () => ["no-repeat", { repeat: ["", "x", "y", "space", "round"] }],
      k = () => ["auto", "cover", "contain", sb, ib, { size: [ue, ie] }],
      I = () => [Mc, li, en],
      K = () => ["", "none", "full", m, ue, ie],
      ae = () => ["", ze, li, en],
      xe = () => ["solid", "dashed", "dotted", "double"],
      ye = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      qe = () => [ze, Mc, Em, Sm],
      Qe = () => ["", "none", w, ue, ie],
      Mt = () => ["none", ze, ue, ie],
      et = () => ["none", ze, ue, ie],
      _t = () => [ze, ue, ie],
      fa = () => [Zn, "full", ...te()];
    return {
      cacheSize: 500,
      theme: {
        animate: ["spin", "ping", "pulse", "bounce"],
        aspect: ["video"],
        blur: [$a],
        breakpoint: [$a],
        color: [tb],
        container: [$a],
        "drop-shadow": [$a],
        ease: ["in", "out", "in-out"],
        font: [rb],
        "font-weight": [
          "thin",
          "extralight",
          "light",
          "normal",
          "medium",
          "semibold",
          "bold",
          "extrabold",
          "black",
        ],
        "inset-shadow": [$a],
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
        perspective: [
          "dramatic",
          "near",
          "normal",
          "midrange",
          "distant",
          "none",
        ],
        radius: [$a],
        shadow: [$a],
        spacing: ["px", ze],
        text: [$a],
        "text-shadow": [$a],
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"],
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", Zn, ie, ue, D] }],
        container: ["container"],
        columns: [{ columns: [ze, ie, ue, p] }],
        "break-after": [{ "break-after": ee() }],
        "break-before": [{ "break-before": ee() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        sr: ["sr-only", "not-sr-only"],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: $() }],
        overflow: [{ overflow: z() }],
        "overflow-x": [{ "overflow-x": z() }],
        "overflow-y": [{ "overflow-y": z() }],
        overscroll: [{ overscroll: ne() }],
        "overscroll-x": [{ "overscroll-x": ne() }],
        "overscroll-y": [{ "overscroll-y": ne() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: fe() }],
        "inset-x": [{ "inset-x": fe() }],
        "inset-y": [{ "inset-y": fe() }],
        start: [{ start: fe() }],
        end: [{ end: fe() }],
        top: [{ top: fe() }],
        right: [{ right: fe() }],
        bottom: [{ bottom: fe() }],
        left: [{ left: fe() }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: [Tl, "auto", ue, ie] }],
        basis: [{ basis: [Zn, "full", "auto", p, ...te()] }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["nowrap", "wrap", "wrap-reverse"] }],
        flex: [{ flex: [ze, Zn, "auto", "initial", "none", ie] }],
        grow: [{ grow: ["", ze, ue, ie] }],
        shrink: [{ shrink: ["", ze, ue, ie] }],
        order: [{ order: [Tl, "first", "last", "none", ue, ie] }],
        "grid-cols": [{ "grid-cols": Ue() }],
        "col-start-end": [{ col: Xe() }],
        "col-start": [{ "col-start": Be() }],
        "col-end": [{ "col-end": Be() }],
        "grid-rows": [{ "grid-rows": Ue() }],
        "row-start-end": [{ row: Xe() }],
        "row-start": [{ "row-start": Be() }],
        "row-end": [{ "row-end": Be() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": we() }],
        "auto-rows": [{ "auto-rows": we() }],
        gap: [{ gap: te() }],
        "gap-x": [{ "gap-x": te() }],
        "gap-y": [{ "gap-y": te() }],
        "justify-content": [{ justify: [...Re(), "normal"] }],
        "justify-items": [{ "justify-items": [..._e(), "normal"] }],
        "justify-self": [{ "justify-self": ["auto", ..._e()] }],
        "align-content": [{ content: ["normal", ...Re()] }],
        "align-items": [{ items: [..._e(), { baseline: ["", "last"] }] }],
        "align-self": [{ self: ["auto", ..._e(), { baseline: ["", "last"] }] }],
        "place-content": [{ "place-content": Re() }],
        "place-items": [{ "place-items": [..._e(), "baseline"] }],
        "place-self": [{ "place-self": ["auto", ..._e()] }],
        p: [{ p: te() }],
        px: [{ px: te() }],
        py: [{ py: te() }],
        ps: [{ ps: te() }],
        pe: [{ pe: te() }],
        pt: [{ pt: te() }],
        pr: [{ pr: te() }],
        pb: [{ pb: te() }],
        pl: [{ pl: te() }],
        m: [{ m: O() }],
        mx: [{ mx: O() }],
        my: [{ my: O() }],
        ms: [{ ms: O() }],
        me: [{ me: O() }],
        mt: [{ mt: O() }],
        mr: [{ mr: O() }],
        mb: [{ mb: O() }],
        ml: [{ ml: O() }],
        "space-x": [{ "space-x": te() }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": te() }],
        "space-y-reverse": ["space-y-reverse"],
        size: [{ size: P() }],
        w: [{ w: [p, "screen", ...P()] }],
        "min-w": [{ "min-w": [p, "screen", "none", ...P()] }],
        "max-w": [
          { "max-w": [p, "screen", "none", "prose", { screen: [d] }, ...P()] },
        ],
        h: [{ h: ["screen", "lh", ...P()] }],
        "min-h": [{ "min-h": ["screen", "lh", "none", ...P()] }],
        "max-h": [{ "max-h": ["screen", "lh", ...P()] }],
        "font-size": [{ text: ["base", u, li, en] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [{ font: [o, ue, _c] }],
        "font-stretch": [
          {
            "font-stretch": [
              "ultra-condensed",
              "extra-condensed",
              "condensed",
              "semi-condensed",
              "normal",
              "semi-expanded",
              "expanded",
              "extra-expanded",
              "ultra-expanded",
              Mc,
              ie,
            ],
          },
        ],
        "font-family": [{ font: [ob, ie, r] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [{ tracking: [c, ue, ie] }],
        "line-clamp": [{ "line-clamp": [ze, "none", ue, _c] }],
        leading: [{ leading: [f, ...te()] }],
        "list-image": [{ "list-image": ["none", ue, ie] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "list-style-type": [{ list: ["disc", "decimal", "none", ue, ie] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "placeholder-color": [{ placeholder: G() }],
        "text-color": [{ text: G() }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...xe(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: [ze, "from-font", "auto", ue, en] },
        ],
        "text-decoration-color": [{ decoration: G() }],
        "underline-offset": [{ "underline-offset": [ze, "auto", ue, ie] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: te() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              ue,
              ie,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        wrap: [{ wrap: ["break-word", "anywhere", "normal"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", ue, ie] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: Ee() }],
        "bg-repeat": [{ bg: E() }],
        "bg-size": [{ bg: k() }],
        "bg-image": [
          {
            bg: [
              "none",
              {
                linear: [
                  { to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
                  Tl,
                  ue,
                  ie,
                ],
                radial: ["", ue, ie],
                conic: [Tl, ue, ie],
              },
              cb,
              ub,
            ],
          },
        ],
        "bg-color": [{ bg: G() }],
        "gradient-from-pos": [{ from: I() }],
        "gradient-via-pos": [{ via: I() }],
        "gradient-to-pos": [{ to: I() }],
        "gradient-from": [{ from: G() }],
        "gradient-via": [{ via: G() }],
        "gradient-to": [{ to: G() }],
        rounded: [{ rounded: K() }],
        "rounded-s": [{ "rounded-s": K() }],
        "rounded-e": [{ "rounded-e": K() }],
        "rounded-t": [{ "rounded-t": K() }],
        "rounded-r": [{ "rounded-r": K() }],
        "rounded-b": [{ "rounded-b": K() }],
        "rounded-l": [{ "rounded-l": K() }],
        "rounded-ss": [{ "rounded-ss": K() }],
        "rounded-se": [{ "rounded-se": K() }],
        "rounded-ee": [{ "rounded-ee": K() }],
        "rounded-es": [{ "rounded-es": K() }],
        "rounded-tl": [{ "rounded-tl": K() }],
        "rounded-tr": [{ "rounded-tr": K() }],
        "rounded-br": [{ "rounded-br": K() }],
        "rounded-bl": [{ "rounded-bl": K() }],
        "border-w": [{ border: ae() }],
        "border-w-x": [{ "border-x": ae() }],
        "border-w-y": [{ "border-y": ae() }],
        "border-w-s": [{ "border-s": ae() }],
        "border-w-e": [{ "border-e": ae() }],
        "border-w-t": [{ "border-t": ae() }],
        "border-w-r": [{ "border-r": ae() }],
        "border-w-b": [{ "border-b": ae() }],
        "border-w-l": [{ "border-l": ae() }],
        "divide-x": [{ "divide-x": ae() }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": ae() }],
        "divide-y-reverse": ["divide-y-reverse"],
        "border-style": [{ border: [...xe(), "hidden", "none"] }],
        "divide-style": [{ divide: [...xe(), "hidden", "none"] }],
        "border-color": [{ border: G() }],
        "border-color-x": [{ "border-x": G() }],
        "border-color-y": [{ "border-y": G() }],
        "border-color-s": [{ "border-s": G() }],
        "border-color-e": [{ "border-e": G() }],
        "border-color-t": [{ "border-t": G() }],
        "border-color-r": [{ "border-r": G() }],
        "border-color-b": [{ "border-b": G() }],
        "border-color-l": [{ "border-l": G() }],
        "divide-color": [{ divide: G() }],
        "outline-style": [{ outline: [...xe(), "none", "hidden"] }],
        "outline-offset": [{ "outline-offset": [ze, ue, ie] }],
        "outline-w": [{ outline: ["", ze, li, en] }],
        "outline-color": [{ outline: G() }],
        shadow: [{ shadow: ["", "none", v, Bu, Hu] }],
        "shadow-color": [{ shadow: G() }],
        "inset-shadow": [{ "inset-shadow": ["none", b, Bu, Hu] }],
        "inset-shadow-color": [{ "inset-shadow": G() }],
        "ring-w": [{ ring: ae() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: G() }],
        "ring-offset-w": [{ "ring-offset": [ze, en] }],
        "ring-offset-color": [{ "ring-offset": G() }],
        "inset-ring-w": [{ "inset-ring": ae() }],
        "inset-ring-color": [{ "inset-ring": G() }],
        "text-shadow": [{ "text-shadow": ["none", T, Bu, Hu] }],
        "text-shadow-color": [{ "text-shadow": G() }],
        opacity: [{ opacity: [ze, ue, ie] }],
        "mix-blend": [
          { "mix-blend": [...ye(), "plus-darker", "plus-lighter"] },
        ],
        "bg-blend": [{ "bg-blend": ye() }],
        "mask-clip": [
          {
            "mask-clip": [
              "border",
              "padding",
              "content",
              "fill",
              "stroke",
              "view",
            ],
          },
          "mask-no-clip",
        ],
        "mask-composite": [
          { mask: ["add", "subtract", "intersect", "exclude"] },
        ],
        "mask-image-linear-pos": [{ "mask-linear": [ze] }],
        "mask-image-linear-from-pos": [{ "mask-linear-from": qe() }],
        "mask-image-linear-to-pos": [{ "mask-linear-to": qe() }],
        "mask-image-linear-from-color": [{ "mask-linear-from": G() }],
        "mask-image-linear-to-color": [{ "mask-linear-to": G() }],
        "mask-image-t-from-pos": [{ "mask-t-from": qe() }],
        "mask-image-t-to-pos": [{ "mask-t-to": qe() }],
        "mask-image-t-from-color": [{ "mask-t-from": G() }],
        "mask-image-t-to-color": [{ "mask-t-to": G() }],
        "mask-image-r-from-pos": [{ "mask-r-from": qe() }],
        "mask-image-r-to-pos": [{ "mask-r-to": qe() }],
        "mask-image-r-from-color": [{ "mask-r-from": G() }],
        "mask-image-r-to-color": [{ "mask-r-to": G() }],
        "mask-image-b-from-pos": [{ "mask-b-from": qe() }],
        "mask-image-b-to-pos": [{ "mask-b-to": qe() }],
        "mask-image-b-from-color": [{ "mask-b-from": G() }],
        "mask-image-b-to-color": [{ "mask-b-to": G() }],
        "mask-image-l-from-pos": [{ "mask-l-from": qe() }],
        "mask-image-l-to-pos": [{ "mask-l-to": qe() }],
        "mask-image-l-from-color": [{ "mask-l-from": G() }],
        "mask-image-l-to-color": [{ "mask-l-to": G() }],
        "mask-image-x-from-pos": [{ "mask-x-from": qe() }],
        "mask-image-x-to-pos": [{ "mask-x-to": qe() }],
        "mask-image-x-from-color": [{ "mask-x-from": G() }],
        "mask-image-x-to-color": [{ "mask-x-to": G() }],
        "mask-image-y-from-pos": [{ "mask-y-from": qe() }],
        "mask-image-y-to-pos": [{ "mask-y-to": qe() }],
        "mask-image-y-from-color": [{ "mask-y-from": G() }],
        "mask-image-y-to-color": [{ "mask-y-to": G() }],
        "mask-image-radial": [{ "mask-radial": [ue, ie] }],
        "mask-image-radial-from-pos": [{ "mask-radial-from": qe() }],
        "mask-image-radial-to-pos": [{ "mask-radial-to": qe() }],
        "mask-image-radial-from-color": [{ "mask-radial-from": G() }],
        "mask-image-radial-to-color": [{ "mask-radial-to": G() }],
        "mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }],
        "mask-image-radial-size": [
          {
            "mask-radial": [
              { closest: ["side", "corner"], farthest: ["side", "corner"] },
            ],
          },
        ],
        "mask-image-radial-pos": [{ "mask-radial-at": le() }],
        "mask-image-conic-pos": [{ "mask-conic": [ze] }],
        "mask-image-conic-from-pos": [{ "mask-conic-from": qe() }],
        "mask-image-conic-to-pos": [{ "mask-conic-to": qe() }],
        "mask-image-conic-from-color": [{ "mask-conic-from": G() }],
        "mask-image-conic-to-color": [{ "mask-conic-to": G() }],
        "mask-mode": [{ mask: ["alpha", "luminance", "match"] }],
        "mask-origin": [
          {
            "mask-origin": [
              "border",
              "padding",
              "content",
              "fill",
              "stroke",
              "view",
            ],
          },
        ],
        "mask-position": [{ mask: Ee() }],
        "mask-repeat": [{ mask: E() }],
        "mask-size": [{ mask: k() }],
        "mask-type": [{ "mask-type": ["alpha", "luminance"] }],
        "mask-image": [{ mask: ["none", ue, ie] }],
        filter: [{ filter: ["", "none", ue, ie] }],
        blur: [{ blur: Qe() }],
        brightness: [{ brightness: [ze, ue, ie] }],
        contrast: [{ contrast: [ze, ue, ie] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", U, Bu, Hu] }],
        "drop-shadow-color": [{ "drop-shadow": G() }],
        grayscale: [{ grayscale: ["", ze, ue, ie] }],
        "hue-rotate": [{ "hue-rotate": [ze, ue, ie] }],
        invert: [{ invert: ["", ze, ue, ie] }],
        saturate: [{ saturate: [ze, ue, ie] }],
        sepia: [{ sepia: ["", ze, ue, ie] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none", ue, ie] }],
        "backdrop-blur": [{ "backdrop-blur": Qe() }],
        "backdrop-brightness": [{ "backdrop-brightness": [ze, ue, ie] }],
        "backdrop-contrast": [{ "backdrop-contrast": [ze, ue, ie] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": ["", ze, ue, ie] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [ze, ue, ie] }],
        "backdrop-invert": [{ "backdrop-invert": ["", ze, ue, ie] }],
        "backdrop-opacity": [{ "backdrop-opacity": [ze, ue, ie] }],
        "backdrop-saturate": [{ "backdrop-saturate": [ze, ue, ie] }],
        "backdrop-sepia": [{ "backdrop-sepia": ["", ze, ue, ie] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": te() }],
        "border-spacing-x": [{ "border-spacing-x": te() }],
        "border-spacing-y": [{ "border-spacing-y": te() }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "",
              "all",
              "colors",
              "opacity",
              "shadow",
              "transform",
              "none",
              ue,
              ie,
            ],
          },
        ],
        "transition-behavior": [{ transition: ["normal", "discrete"] }],
        duration: [{ duration: [ze, "initial", ue, ie] }],
        ease: [{ ease: ["linear", "initial", V, ue, ie] }],
        delay: [{ delay: [ze, ue, ie] }],
        animate: [{ animate: ["none", F, ue, ie] }],
        backface: [{ backface: ["hidden", "visible"] }],
        perspective: [{ perspective: [q, ue, ie] }],
        "perspective-origin": [{ "perspective-origin": $() }],
        rotate: [{ rotate: Mt() }],
        "rotate-x": [{ "rotate-x": Mt() }],
        "rotate-y": [{ "rotate-y": Mt() }],
        "rotate-z": [{ "rotate-z": Mt() }],
        scale: [{ scale: et() }],
        "scale-x": [{ "scale-x": et() }],
        "scale-y": [{ "scale-y": et() }],
        "scale-z": [{ "scale-z": et() }],
        "scale-3d": ["scale-3d"],
        skew: [{ skew: _t() }],
        "skew-x": [{ "skew-x": _t() }],
        "skew-y": [{ "skew-y": _t() }],
        transform: [{ transform: [ue, ie, "", "none", "gpu", "cpu"] }],
        "transform-origin": [{ origin: $() }],
        "transform-style": [{ transform: ["3d", "flat"] }],
        translate: [{ translate: fa() }],
        "translate-x": [{ "translate-x": fa() }],
        "translate-y": [{ "translate-y": fa() }],
        "translate-z": [{ "translate-z": fa() }],
        "translate-none": ["translate-none"],
        accent: [{ accent: G() }],
        appearance: [{ appearance: ["none", "auto"] }],
        "caret-color": [{ caret: G() }],
        "color-scheme": [
          {
            scheme: [
              "normal",
              "dark",
              "light",
              "light-dark",
              "only-dark",
              "only-light",
            ],
          },
        ],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              ue,
              ie,
            ],
          },
        ],
        "field-sizing": [{ "field-sizing": ["fixed", "content"] }],
        "pointer-events": [{ "pointer-events": ["auto", "none"] }],
        resize: [{ resize: ["none", "", "y", "x"] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": te() }],
        "scroll-mx": [{ "scroll-mx": te() }],
        "scroll-my": [{ "scroll-my": te() }],
        "scroll-ms": [{ "scroll-ms": te() }],
        "scroll-me": [{ "scroll-me": te() }],
        "scroll-mt": [{ "scroll-mt": te() }],
        "scroll-mr": [{ "scroll-mr": te() }],
        "scroll-mb": [{ "scroll-mb": te() }],
        "scroll-ml": [{ "scroll-ml": te() }],
        "scroll-p": [{ "scroll-p": te() }],
        "scroll-px": [{ "scroll-px": te() }],
        "scroll-py": [{ "scroll-py": te() }],
        "scroll-ps": [{ "scroll-ps": te() }],
        "scroll-pe": [{ "scroll-pe": te() }],
        "scroll-pt": [{ "scroll-pt": te() }],
        "scroll-pr": [{ "scroll-pr": te() }],
        "scroll-pb": [{ "scroll-pb": te() }],
        "scroll-pl": [{ "scroll-pl": te() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          {
            "will-change": ["auto", "scroll", "contents", "transform", ue, ie],
          },
        ],
        fill: [{ fill: ["none", ...G()] }],
        "stroke-w": [{ stroke: [ze, li, en, _c] }],
        stroke: [{ stroke: ["none", ...G()] }],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-x",
          "border-w-y",
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-x",
          "border-color-y",
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        translate: ["translate-x", "translate-y", "translate-none"],
        "translate-none": [
          "translate",
          "translate-x",
          "translate-y",
          "translate-z",
        ],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
      orderSensitiveModifiers: [
        "*",
        "**",
        "after",
        "backdrop",
        "before",
        "details-content",
        "file",
        "first-letter",
        "first-line",
        "marker",
        "placeholder",
        "selection",
      ],
    };
  },
  mb = Jv(hb),
  pb = (...n) => mb(Uv(n)),
  yb = { small: "px-3 py-1.5 text-base", large: "px-5 py-3 text-xl" },
  xm = { small: "rounded-[10px]", large: "rounded-[50px]" },
  gb = {
    primary: "bg-brand-primary text-bg-white",
    outlined: "bg-bg-white border border-2 border-scale-300 text-scale-600",
    gray: "bg-scale-100 text-scale-500",
    darkgray: "bg-scale-200 text-scale-300",
    kakao: "bg-point-kakao text-scale-600",
    disabled: "bg-brand-secondary text-[#C5B6AD]",
  };
function In({
  children: n,
  className: r,
  disabled: u = !1,
  variant: o = "primary",
  size: c = "large",
  isRounded: f = !1,
  onButtonClick: d,
}) {
  const p = pb(
    "font-bold cursor-pointer",
    r,
    yb[c],
    f ? xm.large : xm.small,
    gb[u ? "disabled" : o],
  );
  return J.jsx("button", { className: p, onClick: d, children: n });
}
const qt = {
    LOGIN: "login",
    PROFILE_SETTING: "profile-setting",
    PROFILE_IMAGE: "profile-image",
    PROFILE: "profile",
    POINT_CHARGE: "point-charge",
  },
  Ap = C.createContext(null);
function vb({ children: n }) {
  const [r, u] = C.useState(null),
    o = C.useCallback((p) => u(p), []),
    c = C.useCallback(() => u(null), []),
    f = C.useCallback((p) => r === p, [r]),
    d = { openModal: r, open: o, close: c, isOpen: f };
  return m1.createElement(Ap.Provider, { value: d }, n);
}
function Op() {
  const n = C.useContext(Ap);
  if (!n) throw new Error("useModal must be used within ModalProvider");
  return n;
}
function bb({
  isLoggedIn: n,
  onLoginClick: r,
  onProfileClick: u,
  profileBtnRef: o,
  showProfileMenu: c,
  nickname: f,
  imageSrc: d,
  points: p,
  onOpenCharge: y,
  onLogout: m,
}) {
  const { open: v, isOpen: b } = Op(),
    T = () => {
      (u?.(), v(qt.PROFILE));
    };
  return J.jsx("header", {
    className: "w-full fixed flex justify-center bg-bg-white mx-auto z-50",
    children: J.jsxs("div", {
      className: "w-full max-w-[1680px] flex justify-between px-17.5 py-5",
      children: [
        J.jsxs(Jn, {
          to: "/",
          className: "cursor-pointer flex gap-4.5 items-center",
          children: [
            J.jsx("img", { src: _v, className: "w-9 h-9" }),
            J.jsx("div", {
              className: "text-3xl text-brand-primary font-bold",
              children: "멋쟁이 시장처럼",
            }),
          ],
        }),
        J.jsxs("div", {
          className: "flex gap-10 items-center",
          children: [
            J.jsx(Jn, {
              to: "/auction",
              className: "cursor-pointer",
              children: J.jsx("div", {
                className: "text-xl text-scale-500",
                children: "경매 입찰",
              }),
            }),
            J.jsx(Jn, {
              to: "/create",
              className: "cursor-pointer",
              children: J.jsx("div", {
                className: "text-xl text-scale-500",
                children: "경매 등록",
              }),
            }),
            J.jsx(Jn, {
              to: "/history",
              className: "cursor-pointer",
              children: J.jsx("div", {
                className: "text-xl text-scale-500",
                children: "내 경매",
              }),
            }),
            n
              ? J.jsx("div", {
                  ref: o,
                  className:
                    "flex items-center gap-3 text-xl text-scale-500 cursor-pointer select-none",
                  onClick: T,
                  role: "button",
                  "aria-haspopup": "dialog",
                  "aria-expanded": b(qt.PROFILE),
                  title: f ? `${f} 프로필 열기` : "프로필 열기",
                  children: "프로필",
                })
              : J.jsx(In, {
                  variant: "gray",
                  className: "w-27",
                  onButtonClick: r,
                  children: "로그인",
                }),
          ],
        }),
      ],
    }),
  });
}
function Sb() {
  return J.jsx("footer", {
    className: "w-full flex justify-center px-15 py-25",
    children: J.jsx("div", {
      className: "text-xl text-scale-400",
      children: "© 2025 Likelion SNU 13th. All rights reserved.",
    }),
  });
}
function di({
  children: n,
  onClose: r,
  isProfileModal: u = !1,
  anchorRef: o,
  offsetY: c = 10,
  minWidthAnchor: f = !0,
}) {
  const d = C.useRef(null),
    [p, y] = C.useState({ top: 0, left: 0 });
  return (
    C.useEffect(() => {
      function m(v) {
        v.key === "Escape" && r?.();
      }
      return (
        document.addEventListener("keydown", m),
        () => {
          document.removeEventListener("keydown", m);
        }
      );
    }, [r]),
    C.useLayoutEffect(() => {
      if (!u || !o?.current) return;
      const m = () => {
        const v = o.current.getBoundingClientRect();
        y({ top: v.bottom + c, left: v.right, minWidth: f ? v.width : void 0 });
      };
      return (
        m(),
        window.addEventListener("resize", m),
        window.addEventListener("scroll", m, !0),
        () => {
          (window.removeEventListener("resize", m),
            window.removeEventListener("scroll", m, !0));
        }
      );
    }, [u, o, c, f]),
    C.useEffect(() => {
      if (!u) return;
      const m = (v) => {
        const b = v.target,
          T = d.current?.contains(b),
          U = o?.current?.contains(b);
        !T && !U && r?.();
      };
      return (
        document.addEventListener("mousedown", m),
        document.addEventListener("touchstart", m),
        () => {
          (document.removeEventListener("mousedown", m),
            document.removeEventListener("touchstart", m));
        }
      );
    }, [u, r, o]),
    hp.createPortal(
      J.jsxs("div", {
        className: u
          ? "fixed inset-0 z-[999] pointer-events-none"
          : "fixed inset-0 z-[999]",
        children: [
          !u &&
            J.jsx("div", {
              className: "absolute inset-0 bg-black/60",
              onClick: r,
            }),
          J.jsxs("div", {
            ref: d,
            className: u
              ? "absolute pointer-events-auto rounded-xl bg-bg-white shadow-2xl"
              : "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl bg-bg-white shadow-2xl",
            style: u
              ? {
                  top: p.top,
                  left: p.left,
                  transform: "translateX(-100%)",
                  minWidth: p.minWidth ? `${p.minWidth}px` : void 0,
                }
              : void 0,
            onClick: (m) => m.stopPropagation(),
            children: [
              !u &&
                J.jsx("button", {
                  "aria-label": "close",
                  className: "absolute right-7 top-7 p-2 cursor-pointer",
                  onClick: r,
                  children: J.jsx("img", { src: Dv }),
                }),
              n,
            ],
          }),
        ],
      }),
      document.body,
    )
  );
}
function Eb({ onLogin: n, onClose: r }) {
  const u = () => {
    try {
      const f =
        "https://kauth.kakao.com/oauth/authorize?client_id=ca96ee6349ccf542693f78326e55f925&redirect_uri=http://localhost:5174/auth&response_type=code";
      window.location.href = f;
    } catch (o) {
      console.error("카카오 로그인 오류:", o);
    }
  };
  return J.jsx(di, {
    onClose: r,
    children: J.jsxs("div", {
      className: "px-20 py-22.5 flex flex-col gap-10 w-150",
      children: [
        J.jsxs("div", {
          className: "flex flex-col gap-4",
          children: [
            J.jsx("div", {
              className: "text-4xl font-bold text-scale-600",
              children: "로그인",
            }),
            J.jsx("div", {
              className: "text-lg text-scale-400",
              children: "처음이면 자동 회원가입 후 이용할 수 있어요.",
            }),
          ],
        }),
        J.jsxs(In, {
          variant: "kakao",
          onButtonClick: u,
          className: "flex items-center justify-center gap-2",
          children: [
            J.jsx("img", { src: zv, className: "w-8 h-8", alt: "Kakao" }),
            "카카오로 시작하기",
          ],
        }),
      ],
    }),
  });
}
function xb({ imageSrc: n, onEditImage: r, onSubmitSuccess: u, onClose: o }) {
  const [c, f] = C.useState(""),
    d = /^[0-9A-Za-z\uAC00-\uD7A3\u1100-\u11FF\u3130-\u318F]+$/u,
    p = c.length > 10,
    y = !d.test(c),
    m = c.length === 0,
    v = !m && (p || y),
    b = !m && !p && !y;
  return J.jsx(di, {
    onClose: o,
    children: J.jsxs("div", {
      className: "px-20 py-22.5 flex flex-col gap-20 w-180",
      children: [
        J.jsx("div", {
          className: "text-4xl font-bold text-scale-600",
          children: "프로필 설정",
        }),
        J.jsxs("div", {
          className: "flex flex-col gap-12.5",
          children: [
            J.jsxs("div", {
              className: "mx-auto relative w-28 h-28",
              children: [
                J.jsx("img", {
                  src: n,
                  className: "w-28 h-28 rounded-full object-cover",
                }),
                J.jsx("button", {
                  onClick: r,
                  className:
                    "absolute -bottom-1 -right-1 w-9 h-9 rounded-full bg-white shadow flex items-center justify-center",
                  "aria-label": "edit profile image",
                  children: J.jsx("img", { src: Nv, className: "w-9 h-9" }),
                }),
              ],
            }),
            J.jsxs("div", {
              className: "flex flex-col gap-3",
              children: [
                J.jsx("input", {
                  value: c,
                  onChange: (T) => {
                    f(T.target.value);
                  },
                  placeholder: "닉네임(최대 10자)",
                  className:
                    "w-full h-14 rounded-xl border border-black/10 px-5 outline-none focus:border-brand-primary",
                }),
                v &&
                  J.jsx("p", {
                    className: "text-sm text-red-500",
                    children: "*10자 이내의 한글, 숫자, 영문자를 입력해주세요.",
                  }),
              ],
            }),
            J.jsx(In, {
              variant: b ? "primary" : "disabled",
              disabled: !b,
              onButtonClick: () => b && u(c),
              className: "h-14",
              children: "멋시장 시작하기",
            }),
          ],
        }),
      ],
    }),
  });
}
const Rm = [tn, Qu, Zu, Ku, Ju, Fu];
function Rb({ current: n = Rm[0], onSave: r, onClose: u }) {
  const [o, c] = C.useState(n);
  return J.jsx(di, {
    onClose: u,
    children: J.jsxs("div", {
      className: "px-8.5 pt-20 pb-5 flex flex-col gap-15 w-105 items-center",
      children: [
        J.jsx("div", {
          className: "text-2xl font-bold text-scale-600",
          children: "프로필 이미지 고르기",
        }),
        J.jsx("div", {
          className: "grid grid-cols-3 px-10 gap-8",
          children: Rm.map((f) => {
            const d = o === f;
            return J.jsxs(
              "button",
              {
                onClick: () => {
                  c(f);
                },
                className: `group relative w-20 h-20 rounded-full overflow-hidden ${d ? "ring-4 ring-brand-primary" : "ring-0"}`,
                children: [
                  J.jsx("img", {
                    src: f,
                    className: "w-full h-full object-cover",
                  }),
                  J.jsx("span", {
                    className: `absolute inset-0 bg-black/15 opacity-0 group-hover:opacity-100 transition-opacity ${d ? "opacity-100" : ""}`,
                  }),
                ],
              },
              f,
            );
          }),
        }),
        J.jsx(In, {
          variant: "primary",
          onButtonClick: () => {
            r(o);
          },
          className: "w-90 h-14",
          children: "저장하기",
        }),
      ],
    }),
  });
}
function wb({
  onClose: n,
  anchorRef: r,
  nickname: u = "닉네임",
  imageSrc: o,
  points: c = 0,
  onOpenCharge: f,
  onLogout: d,
}) {
  return J.jsx(di, {
    onClose: n,
    isProfileModal: !0,
    anchorRef: r,
    offsetY: 12,
    minWidthAnchor: !1,
    children: J.jsxs("div", {
      className:
        "p-6 flex flex-col gap-5 w-55 border border-brand-secondary rounded-xl",
      children: [
        J.jsxs("div", {
          className: "flex items-center gap-2",
          children: [
            J.jsx("img", {
              src: o ?? "https://via.placeholder.com/80",
              alt: "profile",
              className: "h-8 w-8 rounded-full object-cover",
            }),
            J.jsx("div", {
              className: "text-lg font-bold text-scale-600",
              children: u,
            }),
          ],
        }),
        J.jsxs("div", {
          className: "flex w-full justify-between items-center",
          children: [
            J.jsxs("div", {
              className: "flex items-center gap-1",
              children: [
                J.jsx("img", { src: mp, className: "w-8.5" }),
                J.jsx("div", {
                  className: "text-lg font-bold text-scale-500",
                  children: "포인트",
                }),
              ],
            }),
            J.jsxs("div", {
              className: "text-lg font-bold text-scale-600",
              children: [
                J.jsx("span", {
                  className: "text-brand-primary",
                  children: c.toLocaleString(),
                }),
                "잔",
              ],
            }),
          ],
        }),
        J.jsx(In, {
          variant: "primary",
          size: "small",
          isRounded: !0,
          onButtonClick: f,
          children: "충전하기",
        }),
        J.jsx("button", {
          onClick: d,
          className:
            "flex items-center text-base text-scale-400 underline underline-offset-1",
          children: "로그아웃",
        }),
      ],
    }),
  });
}
const Tb = Intl.NumberFormat("ko-kr", { compactDisplay: "long" }).format;
function Cp(n, r) {
  return function () {
    return n.apply(r, arguments);
  };
}
const { toString: Ab } = Object.prototype,
  { getPrototypeOf: rf } = Object,
  { iterator: ro, toStringTag: Mp } = Symbol,
  io = ((n) => (r) => {
    const u = Ab.call(r);
    return n[u] || (n[u] = u.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  ba = (n) => ((n = n.toLowerCase()), (r) => io(r) === n),
  uo = (n) => (r) => typeof r === n,
  { isArray: er } = Array,
  Pn = uo("undefined");
function hi(n) {
  return (
    n !== null &&
    !Pn(n) &&
    n.constructor !== null &&
    !Pn(n.constructor) &&
    Yt(n.constructor.isBuffer) &&
    n.constructor.isBuffer(n)
  );
}
const _p = ba("ArrayBuffer");
function Ob(n) {
  let r;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (r = ArrayBuffer.isView(n))
      : (r = n && n.buffer && _p(n.buffer)),
    r
  );
}
const Cb = uo("string"),
  Yt = uo("function"),
  Dp = uo("number"),
  mi = (n) => n !== null && typeof n == "object",
  Mb = (n) => n === !0 || n === !1,
  Pu = (n) => {
    if (io(n) !== "object") return !1;
    const r = rf(n);
    return (
      (r === null ||
        r === Object.prototype ||
        Object.getPrototypeOf(r) === null) &&
      !(Mp in n) &&
      !(ro in n)
    );
  },
  _b = (n) => {
    if (!mi(n) || hi(n)) return !1;
    try {
      return (
        Object.keys(n).length === 0 &&
        Object.getPrototypeOf(n) === Object.prototype
      );
    } catch {
      return !1;
    }
  },
  Db = ba("Date"),
  zb = ba("File"),
  Nb = ba("Blob"),
  Ub = ba("FileList"),
  Lb = (n) => mi(n) && Yt(n.pipe),
  jb = (n) => {
    let r;
    return (
      n &&
      ((typeof FormData == "function" && n instanceof FormData) ||
        (Yt(n.append) &&
          ((r = io(n)) === "formdata" ||
            (r === "object" &&
              Yt(n.toString) &&
              n.toString() === "[object FormData]"))))
    );
  },
  Hb = ba("URLSearchParams"),
  [Bb, qb, kb, Yb] = ["ReadableStream", "Request", "Response", "Headers"].map(
    ba,
  ),
  Gb = (n) =>
    n.trim ? n.trim() : n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function pi(n, r, { allOwnKeys: u = !1 } = {}) {
  if (n === null || typeof n > "u") return;
  let o, c;
  if ((typeof n != "object" && (n = [n]), er(n)))
    for (o = 0, c = n.length; o < c; o++) r.call(null, n[o], o, n);
  else {
    if (hi(n)) return;
    const f = u ? Object.getOwnPropertyNames(n) : Object.keys(n),
      d = f.length;
    let p;
    for (o = 0; o < d; o++) ((p = f[o]), r.call(null, n[p], p, n));
  }
}
function zp(n, r) {
  if (hi(n)) return null;
  r = r.toLowerCase();
  const u = Object.keys(n);
  let o = u.length,
    c;
  for (; o-- > 0; ) if (((c = u[o]), r === c.toLowerCase())) return c;
  return null;
}
const ln =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
        ? self
        : typeof window < "u"
          ? window
          : global,
  Np = (n) => !Pn(n) && n !== ln;
function Gc() {
  const { caseless: n, skipUndefined: r } = (Np(this) && this) || {},
    u = {},
    o = (c, f) => {
      const d = (n && zp(u, f)) || f;
      Pu(u[d]) && Pu(c)
        ? (u[d] = Gc(u[d], c))
        : Pu(c)
          ? (u[d] = Gc({}, c))
          : er(c)
            ? (u[d] = c.slice())
            : (!r || !Pn(c)) && (u[d] = c);
    };
  for (let c = 0, f = arguments.length; c < f; c++)
    arguments[c] && pi(arguments[c], o);
  return u;
}
const Vb = (n, r, u, { allOwnKeys: o } = {}) => (
    pi(
      r,
      (c, f) => {
        u && Yt(c) ? (n[f] = Cp(c, u)) : (n[f] = c);
      },
      { allOwnKeys: o },
    ),
    n
  ),
  Xb = (n) => (n.charCodeAt(0) === 65279 && (n = n.slice(1)), n),
  Qb = (n, r, u, o) => {
    ((n.prototype = Object.create(r.prototype, o)),
      (n.prototype.constructor = n),
      Object.defineProperty(n, "super", { value: r.prototype }),
      u && Object.assign(n.prototype, u));
  },
  Zb = (n, r, u, o) => {
    let c, f, d;
    const p = {};
    if (((r = r || {}), n == null)) return r;
    do {
      for (c = Object.getOwnPropertyNames(n), f = c.length; f-- > 0; )
        ((d = c[f]),
          (!o || o(d, n, r)) && !p[d] && ((r[d] = n[d]), (p[d] = !0)));
      n = u !== !1 && rf(n);
    } while (n && (!u || u(n, r)) && n !== Object.prototype);
    return r;
  },
  Kb = (n, r, u) => {
    ((n = String(n)),
      (u === void 0 || u > n.length) && (u = n.length),
      (u -= r.length));
    const o = n.indexOf(r, u);
    return o !== -1 && o === u;
  },
  Jb = (n) => {
    if (!n) return null;
    if (er(n)) return n;
    let r = n.length;
    if (!Dp(r)) return null;
    const u = new Array(r);
    for (; r-- > 0; ) u[r] = n[r];
    return u;
  },
  Fb = (
    (n) => (r) =>
      n && r instanceof n
  )(typeof Uint8Array < "u" && rf(Uint8Array)),
  Pb = (n, r) => {
    const o = (n && n[ro]).call(n);
    let c;
    for (; (c = o.next()) && !c.done; ) {
      const f = c.value;
      r.call(n, f[0], f[1]);
    }
  },
  $b = (n, r) => {
    let u;
    const o = [];
    for (; (u = n.exec(r)) !== null; ) o.push(u);
    return o;
  },
  Wb = ba("HTMLFormElement"),
  Ib = (n) =>
    n.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (u, o, c) {
      return o.toUpperCase() + c;
    }),
  wm = (
    ({ hasOwnProperty: n }) =>
    (r, u) =>
      n.call(r, u)
  )(Object.prototype),
  e3 = ba("RegExp"),
  Up = (n, r) => {
    const u = Object.getOwnPropertyDescriptors(n),
      o = {};
    (pi(u, (c, f) => {
      let d;
      (d = r(c, f, n)) !== !1 && (o[f] = d || c);
    }),
      Object.defineProperties(n, o));
  },
  t3 = (n) => {
    Up(n, (r, u) => {
      if (Yt(n) && ["arguments", "caller", "callee"].indexOf(u) !== -1)
        return !1;
      const o = n[u];
      if (Yt(o)) {
        if (((r.enumerable = !1), "writable" in r)) {
          r.writable = !1;
          return;
        }
        r.set ||
          (r.set = () => {
            throw Error("Can not rewrite read-only method '" + u + "'");
          });
      }
    });
  },
  a3 = (n, r) => {
    const u = {},
      o = (c) => {
        c.forEach((f) => {
          u[f] = !0;
        });
      };
    return (er(n) ? o(n) : o(String(n).split(r)), u);
  },
  l3 = () => {},
  n3 = (n, r) => (n != null && Number.isFinite((n = +n)) ? n : r);
function r3(n) {
  return !!(n && Yt(n.append) && n[Mp] === "FormData" && n[ro]);
}
const i3 = (n) => {
    const r = new Array(10),
      u = (o, c) => {
        if (mi(o)) {
          if (r.indexOf(o) >= 0) return;
          if (hi(o)) return o;
          if (!("toJSON" in o)) {
            r[c] = o;
            const f = er(o) ? [] : {};
            return (
              pi(o, (d, p) => {
                const y = u(d, c + 1);
                !Pn(y) && (f[p] = y);
              }),
              (r[c] = void 0),
              f
            );
          }
        }
        return o;
      };
    return u(n, 0);
  },
  u3 = ba("AsyncFunction"),
  o3 = (n) => n && (mi(n) || Yt(n)) && Yt(n.then) && Yt(n.catch),
  Lp = ((n, r) =>
    n
      ? setImmediate
      : r
        ? ((u, o) => (
            ln.addEventListener(
              "message",
              ({ source: c, data: f }) => {
                c === ln && f === u && o.length && o.shift()();
              },
              !1,
            ),
            (c) => {
              (o.push(c), ln.postMessage(u, "*"));
            }
          ))(`axios@${Math.random()}`, [])
        : (u) => setTimeout(u))(
    typeof setImmediate == "function",
    Yt(ln.postMessage),
  ),
  s3 =
    typeof queueMicrotask < "u"
      ? queueMicrotask.bind(ln)
      : (typeof process < "u" && process.nextTick) || Lp,
  c3 = (n) => n != null && Yt(n[ro]),
  B = {
    isArray: er,
    isArrayBuffer: _p,
    isBuffer: hi,
    isFormData: jb,
    isArrayBufferView: Ob,
    isString: Cb,
    isNumber: Dp,
    isBoolean: Mb,
    isObject: mi,
    isPlainObject: Pu,
    isEmptyObject: _b,
    isReadableStream: Bb,
    isRequest: qb,
    isResponse: kb,
    isHeaders: Yb,
    isUndefined: Pn,
    isDate: Db,
    isFile: zb,
    isBlob: Nb,
    isRegExp: e3,
    isFunction: Yt,
    isStream: Lb,
    isURLSearchParams: Hb,
    isTypedArray: Fb,
    isFileList: Ub,
    forEach: pi,
    merge: Gc,
    extend: Vb,
    trim: Gb,
    stripBOM: Xb,
    inherits: Qb,
    toFlatObject: Zb,
    kindOf: io,
    kindOfTest: ba,
    endsWith: Kb,
    toArray: Jb,
    forEachEntry: Pb,
    matchAll: $b,
    isHTMLForm: Wb,
    hasOwnProperty: wm,
    hasOwnProp: wm,
    reduceDescriptors: Up,
    freezeMethods: t3,
    toObjectSet: a3,
    toCamelCase: Ib,
    noop: l3,
    toFiniteNumber: n3,
    findKey: zp,
    global: ln,
    isContextDefined: Np,
    isSpecCompliantForm: r3,
    toJSONObject: i3,
    isAsyncFn: u3,
    isThenable: o3,
    setImmediate: Lp,
    asap: s3,
    isIterable: c3,
  };
function Oe(n, r, u, o, c) {
  (Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = n),
    (this.name = "AxiosError"),
    r && (this.code = r),
    u && (this.config = u),
    o && (this.request = o),
    c && ((this.response = c), (this.status = c.status ? c.status : null)));
}
B.inherits(Oe, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: B.toJSONObject(this.config),
      code: this.code,
      status: this.status,
    };
  },
});
const jp = Oe.prototype,
  Hp = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((n) => {
  Hp[n] = { value: n };
});
Object.defineProperties(Oe, Hp);
Object.defineProperty(jp, "isAxiosError", { value: !0 });
Oe.from = (n, r, u, o, c, f) => {
  const d = Object.create(jp);
  B.toFlatObject(
    n,
    d,
    function (v) {
      return v !== Error.prototype;
    },
    (m) => m !== "isAxiosError",
  );
  const p = n && n.message ? n.message : "Error",
    y = r == null && n ? n.code : r;
  return (
    Oe.call(d, p, y, u, o, c),
    n &&
      d.cause == null &&
      Object.defineProperty(d, "cause", { value: n, configurable: !0 }),
    (d.name = (n && n.name) || "Error"),
    f && Object.assign(d, f),
    d
  );
};
const f3 = null;
function Vc(n) {
  return B.isPlainObject(n) || B.isArray(n);
}
function Bp(n) {
  return B.endsWith(n, "[]") ? n.slice(0, -2) : n;
}
function Tm(n, r, u) {
  return n
    ? n
        .concat(r)
        .map(function (c, f) {
          return ((c = Bp(c)), !u && f ? "[" + c + "]" : c);
        })
        .join(u ? "." : "")
    : r;
}
function d3(n) {
  return B.isArray(n) && !n.some(Vc);
}
const h3 = B.toFlatObject(B, {}, null, function (r) {
  return /^is[A-Z]/.test(r);
});
function oo(n, r, u) {
  if (!B.isObject(n)) throw new TypeError("target must be an object");
  ((r = r || new FormData()),
    (u = B.toFlatObject(
      u,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (q, D) {
        return !B.isUndefined(D[q]);
      },
    )));
  const o = u.metaTokens,
    c = u.visitor || v,
    f = u.dots,
    d = u.indexes,
    y = (u.Blob || (typeof Blob < "u" && Blob)) && B.isSpecCompliantForm(r);
  if (!B.isFunction(c)) throw new TypeError("visitor must be a function");
  function m(w) {
    if (w === null) return "";
    if (B.isDate(w)) return w.toISOString();
    if (B.isBoolean(w)) return w.toString();
    if (!y && B.isBlob(w))
      throw new Oe("Blob is not supported. Use a Buffer instead.");
    return B.isArrayBuffer(w) || B.isTypedArray(w)
      ? y && typeof Blob == "function"
        ? new Blob([w])
        : Buffer.from(w)
      : w;
  }
  function v(w, q, D) {
    let V = w;
    if (w && !D && typeof w == "object") {
      if (B.endsWith(q, "{}"))
        ((q = o ? q : q.slice(0, -2)), (w = JSON.stringify(w)));
      else if (
        (B.isArray(w) && d3(w)) ||
        ((B.isFileList(w) || B.endsWith(q, "[]")) && (V = B.toArray(w)))
      )
        return (
          (q = Bp(q)),
          V.forEach(function (ee, le) {
            !(B.isUndefined(ee) || ee === null) &&
              r.append(
                d === !0 ? Tm([q], le, f) : d === null ? q : q + "[]",
                m(ee),
              );
          }),
          !1
        );
    }
    return Vc(w) ? !0 : (r.append(Tm(D, q, f), m(w)), !1);
  }
  const b = [],
    T = Object.assign(h3, {
      defaultVisitor: v,
      convertValue: m,
      isVisitable: Vc,
    });
  function U(w, q) {
    if (!B.isUndefined(w)) {
      if (b.indexOf(w) !== -1)
        throw Error("Circular reference detected in " + q.join("."));
      (b.push(w),
        B.forEach(w, function (V, F) {
          (!(B.isUndefined(V) || V === null) &&
            c.call(r, V, B.isString(F) ? F.trim() : F, q, T)) === !0 &&
            U(V, q ? q.concat(F) : [F]);
        }),
        b.pop());
    }
  }
  if (!B.isObject(n)) throw new TypeError("data must be an object");
  return (U(n), r);
}
function Am(n) {
  const r = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(n).replace(/[!'()~]|%20|%00/g, function (o) {
    return r[o];
  });
}
function uf(n, r) {
  ((this._pairs = []), n && oo(n, this, r));
}
const qp = uf.prototype;
qp.append = function (r, u) {
  this._pairs.push([r, u]);
};
qp.toString = function (r) {
  const u = r
    ? function (o) {
        return r.call(this, o, Am);
      }
    : Am;
  return this._pairs
    .map(function (c) {
      return u(c[0]) + "=" + u(c[1]);
    }, "")
    .join("&");
};
function m3(n) {
  return encodeURIComponent(n)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+");
}
function kp(n, r, u) {
  if (!r) return n;
  const o = (u && u.encode) || m3;
  B.isFunction(u) && (u = { serialize: u });
  const c = u && u.serialize;
  let f;
  if (
    (c
      ? (f = c(r, u))
      : (f = B.isURLSearchParams(r) ? r.toString() : new uf(r, u).toString(o)),
    f)
  ) {
    const d = n.indexOf("#");
    (d !== -1 && (n = n.slice(0, d)),
      (n += (n.indexOf("?") === -1 ? "?" : "&") + f));
  }
  return n;
}
class Om {
  constructor() {
    this.handlers = [];
  }
  use(r, u, o) {
    return (
      this.handlers.push({
        fulfilled: r,
        rejected: u,
        synchronous: o ? o.synchronous : !1,
        runWhen: o ? o.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(r) {
    this.handlers[r] && (this.handlers[r] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(r) {
    B.forEach(this.handlers, function (o) {
      o !== null && r(o);
    });
  }
}
const Yp = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  p3 = typeof URLSearchParams < "u" ? URLSearchParams : uf,
  y3 = typeof FormData < "u" ? FormData : null,
  g3 = typeof Blob < "u" ? Blob : null,
  v3 = {
    isBrowser: !0,
    classes: { URLSearchParams: p3, FormData: y3, Blob: g3 },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  of = typeof window < "u" && typeof document < "u",
  Xc = (typeof navigator == "object" && navigator) || void 0,
  b3 =
    of &&
    (!Xc || ["ReactNative", "NativeScript", "NS"].indexOf(Xc.product) < 0),
  S3 =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  E3 = (of && window.location.href) || "http://localhost",
  x3 = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: of,
        hasStandardBrowserEnv: b3,
        hasStandardBrowserWebWorkerEnv: S3,
        navigator: Xc,
        origin: E3,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  Ct = { ...x3, ...v3 };
function R3(n, r) {
  return oo(n, new Ct.classes.URLSearchParams(), {
    visitor: function (u, o, c, f) {
      return Ct.isNode && B.isBuffer(u)
        ? (this.append(o, u.toString("base64")), !1)
        : f.defaultVisitor.apply(this, arguments);
    },
    ...r,
  });
}
function w3(n) {
  return B.matchAll(/\w+|\[(\w*)]/g, n).map((r) =>
    r[0] === "[]" ? "" : r[1] || r[0],
  );
}
function T3(n) {
  const r = {},
    u = Object.keys(n);
  let o;
  const c = u.length;
  let f;
  for (o = 0; o < c; o++) ((f = u[o]), (r[f] = n[f]));
  return r;
}
function Gp(n) {
  function r(u, o, c, f) {
    let d = u[f++];
    if (d === "__proto__") return !0;
    const p = Number.isFinite(+d),
      y = f >= u.length;
    return (
      (d = !d && B.isArray(c) ? c.length : d),
      y
        ? (B.hasOwnProp(c, d) ? (c[d] = [c[d], o]) : (c[d] = o), !p)
        : ((!c[d] || !B.isObject(c[d])) && (c[d] = []),
          r(u, o, c[d], f) && B.isArray(c[d]) && (c[d] = T3(c[d])),
          !p)
    );
  }
  if (B.isFormData(n) && B.isFunction(n.entries)) {
    const u = {};
    return (
      B.forEachEntry(n, (o, c) => {
        r(w3(o), c, u, 0);
      }),
      u
    );
  }
  return null;
}
function A3(n, r, u) {
  if (B.isString(n))
    try {
      return ((r || JSON.parse)(n), B.trim(n));
    } catch (o) {
      if (o.name !== "SyntaxError") throw o;
    }
  return (u || JSON.stringify)(n);
}
const yi = {
  transitional: Yp,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (r, u) {
      const o = u.getContentType() || "",
        c = o.indexOf("application/json") > -1,
        f = B.isObject(r);
      if ((f && B.isHTMLForm(r) && (r = new FormData(r)), B.isFormData(r)))
        return c ? JSON.stringify(Gp(r)) : r;
      if (
        B.isArrayBuffer(r) ||
        B.isBuffer(r) ||
        B.isStream(r) ||
        B.isFile(r) ||
        B.isBlob(r) ||
        B.isReadableStream(r)
      )
        return r;
      if (B.isArrayBufferView(r)) return r.buffer;
      if (B.isURLSearchParams(r))
        return (
          u.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1,
          ),
          r.toString()
        );
      let p;
      if (f) {
        if (o.indexOf("application/x-www-form-urlencoded") > -1)
          return R3(r, this.formSerializer).toString();
        if ((p = B.isFileList(r)) || o.indexOf("multipart/form-data") > -1) {
          const y = this.env && this.env.FormData;
          return oo(
            p ? { "files[]": r } : r,
            y && new y(),
            this.formSerializer,
          );
        }
      }
      return f || c ? (u.setContentType("application/json", !1), A3(r)) : r;
    },
  ],
  transformResponse: [
    function (r) {
      const u = this.transitional || yi.transitional,
        o = u && u.forcedJSONParsing,
        c = this.responseType === "json";
      if (B.isResponse(r) || B.isReadableStream(r)) return r;
      if (r && B.isString(r) && ((o && !this.responseType) || c)) {
        const d = !(u && u.silentJSONParsing) && c;
        try {
          return JSON.parse(r, this.parseReviver);
        } catch (p) {
          if (d)
            throw p.name === "SyntaxError"
              ? Oe.from(p, Oe.ERR_BAD_RESPONSE, this, null, this.response)
              : p;
        }
      }
      return r;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: Ct.classes.FormData, Blob: Ct.classes.Blob },
  validateStatus: function (r) {
    return r >= 200 && r < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
B.forEach(["delete", "get", "head", "post", "put", "patch"], (n) => {
  yi.headers[n] = {};
});
const O3 = B.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  C3 = (n) => {
    const r = {};
    let u, o, c;
    return (
      n &&
        n
          .split(
            `
`,
          )
          .forEach(function (d) {
            ((c = d.indexOf(":")),
              (u = d.substring(0, c).trim().toLowerCase()),
              (o = d.substring(c + 1).trim()),
              !(!u || (r[u] && O3[u])) &&
                (u === "set-cookie"
                  ? r[u]
                    ? r[u].push(o)
                    : (r[u] = [o])
                  : (r[u] = r[u] ? r[u] + ", " + o : o)));
          }),
      r
    );
  },
  Cm = Symbol("internals");
function ni(n) {
  return n && String(n).trim().toLowerCase();
}
function $u(n) {
  return n === !1 || n == null ? n : B.isArray(n) ? n.map($u) : String(n);
}
function M3(n) {
  const r = Object.create(null),
    u = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let o;
  for (; (o = u.exec(n)); ) r[o[1]] = o[2];
  return r;
}
const _3 = (n) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());
function Dc(n, r, u, o, c) {
  if (B.isFunction(o)) return o.call(this, r, u);
  if ((c && (r = u), !!B.isString(r))) {
    if (B.isString(o)) return r.indexOf(o) !== -1;
    if (B.isRegExp(o)) return o.test(r);
  }
}
function D3(n) {
  return n
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (r, u, o) => u.toUpperCase() + o);
}
function z3(n, r) {
  const u = B.toCamelCase(" " + r);
  ["get", "set", "has"].forEach((o) => {
    Object.defineProperty(n, o + u, {
      value: function (c, f, d) {
        return this[o].call(this, r, c, f, d);
      },
      configurable: !0,
    });
  });
}
let Gt = class {
  constructor(r) {
    r && this.set(r);
  }
  set(r, u, o) {
    const c = this;
    function f(p, y, m) {
      const v = ni(y);
      if (!v) throw new Error("header name must be a non-empty string");
      const b = B.findKey(c, v);
      (!b || c[b] === void 0 || m === !0 || (m === void 0 && c[b] !== !1)) &&
        (c[b || y] = $u(p));
    }
    const d = (p, y) => B.forEach(p, (m, v) => f(m, v, y));
    if (B.isPlainObject(r) || r instanceof this.constructor) d(r, u);
    else if (B.isString(r) && (r = r.trim()) && !_3(r)) d(C3(r), u);
    else if (B.isObject(r) && B.isIterable(r)) {
      let p = {},
        y,
        m;
      for (const v of r) {
        if (!B.isArray(v))
          throw TypeError("Object iterator must return a key-value pair");
        p[(m = v[0])] = (y = p[m])
          ? B.isArray(y)
            ? [...y, v[1]]
            : [y, v[1]]
          : v[1];
      }
      d(p, u);
    } else r != null && f(u, r, o);
    return this;
  }
  get(r, u) {
    if (((r = ni(r)), r)) {
      const o = B.findKey(this, r);
      if (o) {
        const c = this[o];
        if (!u) return c;
        if (u === !0) return M3(c);
        if (B.isFunction(u)) return u.call(this, c, o);
        if (B.isRegExp(u)) return u.exec(c);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(r, u) {
    if (((r = ni(r)), r)) {
      const o = B.findKey(this, r);
      return !!(o && this[o] !== void 0 && (!u || Dc(this, this[o], o, u)));
    }
    return !1;
  }
  delete(r, u) {
    const o = this;
    let c = !1;
    function f(d) {
      if (((d = ni(d)), d)) {
        const p = B.findKey(o, d);
        p && (!u || Dc(o, o[p], p, u)) && (delete o[p], (c = !0));
      }
    }
    return (B.isArray(r) ? r.forEach(f) : f(r), c);
  }
  clear(r) {
    const u = Object.keys(this);
    let o = u.length,
      c = !1;
    for (; o--; ) {
      const f = u[o];
      (!r || Dc(this, this[f], f, r, !0)) && (delete this[f], (c = !0));
    }
    return c;
  }
  normalize(r) {
    const u = this,
      o = {};
    return (
      B.forEach(this, (c, f) => {
        const d = B.findKey(o, f);
        if (d) {
          ((u[d] = $u(c)), delete u[f]);
          return;
        }
        const p = r ? D3(f) : String(f).trim();
        (p !== f && delete u[f], (u[p] = $u(c)), (o[p] = !0));
      }),
      this
    );
  }
  concat(...r) {
    return this.constructor.concat(this, ...r);
  }
  toJSON(r) {
    const u = Object.create(null);
    return (
      B.forEach(this, (o, c) => {
        o != null && o !== !1 && (u[c] = r && B.isArray(o) ? o.join(", ") : o);
      }),
      u
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([r, u]) => r + ": " + u).join(`
`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(r) {
    return r instanceof this ? r : new this(r);
  }
  static concat(r, ...u) {
    const o = new this(r);
    return (u.forEach((c) => o.set(c)), o);
  }
  static accessor(r) {
    const o = (this[Cm] = this[Cm] = { accessors: {} }).accessors,
      c = this.prototype;
    function f(d) {
      const p = ni(d);
      o[p] || (z3(c, d), (o[p] = !0));
    }
    return (B.isArray(r) ? r.forEach(f) : f(r), this);
  }
};
Gt.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
B.reduceDescriptors(Gt.prototype, ({ value: n }, r) => {
  let u = r[0].toUpperCase() + r.slice(1);
  return {
    get: () => n,
    set(o) {
      this[u] = o;
    },
  };
});
B.freezeMethods(Gt);
function zc(n, r) {
  const u = this || yi,
    o = r || u,
    c = Gt.from(o.headers);
  let f = o.data;
  return (
    B.forEach(n, function (p) {
      f = p.call(u, f, c.normalize(), r ? r.status : void 0);
    }),
    c.normalize(),
    f
  );
}
function Vp(n) {
  return !!(n && n.__CANCEL__);
}
function tr(n, r, u) {
  (Oe.call(this, n ?? "canceled", Oe.ERR_CANCELED, r, u),
    (this.name = "CanceledError"));
}
B.inherits(tr, Oe, { __CANCEL__: !0 });
function Xp(n, r, u) {
  const o = u.config.validateStatus;
  !u.status || !o || o(u.status)
    ? n(u)
    : r(
        new Oe(
          "Request failed with status code " + u.status,
          [Oe.ERR_BAD_REQUEST, Oe.ERR_BAD_RESPONSE][
            Math.floor(u.status / 100) - 4
          ],
          u.config,
          u.request,
          u,
        ),
      );
}
function N3(n) {
  const r = /^([-+\w]{1,25})(:?\/\/|:)/.exec(n);
  return (r && r[1]) || "";
}
function U3(n, r) {
  n = n || 10;
  const u = new Array(n),
    o = new Array(n);
  let c = 0,
    f = 0,
    d;
  return (
    (r = r !== void 0 ? r : 1e3),
    function (y) {
      const m = Date.now(),
        v = o[f];
      (d || (d = m), (u[c] = y), (o[c] = m));
      let b = f,
        T = 0;
      for (; b !== c; ) ((T += u[b++]), (b = b % n));
      if (((c = (c + 1) % n), c === f && (f = (f + 1) % n), m - d < r)) return;
      const U = v && m - v;
      return U ? Math.round((T * 1e3) / U) : void 0;
    }
  );
}
function L3(n, r) {
  let u = 0,
    o = 1e3 / r,
    c,
    f;
  const d = (m, v = Date.now()) => {
    ((u = v), (c = null), f && (clearTimeout(f), (f = null)), n(...m));
  };
  return [
    (...m) => {
      const v = Date.now(),
        b = v - u;
      b >= o
        ? d(m, v)
        : ((c = m),
          f ||
            (f = setTimeout(() => {
              ((f = null), d(c));
            }, o - b)));
    },
    () => c && d(c),
  ];
}
const ao = (n, r, u = 3) => {
    let o = 0;
    const c = U3(50, 250);
    return L3((f) => {
      const d = f.loaded,
        p = f.lengthComputable ? f.total : void 0,
        y = d - o,
        m = c(y),
        v = d <= p;
      o = d;
      const b = {
        loaded: d,
        total: p,
        progress: p ? d / p : void 0,
        bytes: y,
        rate: m || void 0,
        estimated: m && p && v ? (p - d) / m : void 0,
        event: f,
        lengthComputable: p != null,
        [r ? "download" : "upload"]: !0,
      };
      n(b);
    }, u);
  },
  Mm = (n, r) => {
    const u = n != null;
    return [(o) => r[0]({ lengthComputable: u, total: n, loaded: o }), r[1]];
  },
  _m =
    (n) =>
    (...r) =>
      B.asap(() => n(...r)),
  j3 = Ct.hasStandardBrowserEnv
    ? ((n, r) => (u) => (
        (u = new URL(u, Ct.origin)),
        n.protocol === u.protocol &&
          n.host === u.host &&
          (r || n.port === u.port)
      ))(
        new URL(Ct.origin),
        Ct.navigator && /(msie|trident)/i.test(Ct.navigator.userAgent),
      )
    : () => !0,
  H3 = Ct.hasStandardBrowserEnv
    ? {
        write(n, r, u, o, c, f) {
          const d = [n + "=" + encodeURIComponent(r)];
          (B.isNumber(u) && d.push("expires=" + new Date(u).toGMTString()),
            B.isString(o) && d.push("path=" + o),
            B.isString(c) && d.push("domain=" + c),
            f === !0 && d.push("secure"),
            (document.cookie = d.join("; ")));
        },
        read(n) {
          const r = document.cookie.match(
            new RegExp("(^|;\\s*)(" + n + ")=([^;]*)"),
          );
          return r ? decodeURIComponent(r[3]) : null;
        },
        remove(n) {
          this.write(n, "", Date.now() - 864e5);
        },
      }
    : {
        write() {},
        read() {
          return null;
        },
        remove() {},
      };
function B3(n) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(n);
}
function q3(n, r) {
  return r ? n.replace(/\/?\/$/, "") + "/" + r.replace(/^\/+/, "") : n;
}
function Qp(n, r, u) {
  let o = !B3(r);
  return n && (o || u == !1) ? q3(n, r) : r;
}
const Dm = (n) => (n instanceof Gt ? { ...n } : n);
function rn(n, r) {
  r = r || {};
  const u = {};
  function o(m, v, b, T) {
    return B.isPlainObject(m) && B.isPlainObject(v)
      ? B.merge.call({ caseless: T }, m, v)
      : B.isPlainObject(v)
        ? B.merge({}, v)
        : B.isArray(v)
          ? v.slice()
          : v;
  }
  function c(m, v, b, T) {
    if (B.isUndefined(v)) {
      if (!B.isUndefined(m)) return o(void 0, m, b, T);
    } else return o(m, v, b, T);
  }
  function f(m, v) {
    if (!B.isUndefined(v)) return o(void 0, v);
  }
  function d(m, v) {
    if (B.isUndefined(v)) {
      if (!B.isUndefined(m)) return o(void 0, m);
    } else return o(void 0, v);
  }
  function p(m, v, b) {
    if (b in r) return o(m, v);
    if (b in n) return o(void 0, m);
  }
  const y = {
    url: f,
    method: f,
    data: f,
    baseURL: d,
    transformRequest: d,
    transformResponse: d,
    paramsSerializer: d,
    timeout: d,
    timeoutMessage: d,
    withCredentials: d,
    withXSRFToken: d,
    adapter: d,
    responseType: d,
    xsrfCookieName: d,
    xsrfHeaderName: d,
    onUploadProgress: d,
    onDownloadProgress: d,
    decompress: d,
    maxContentLength: d,
    maxBodyLength: d,
    beforeRedirect: d,
    transport: d,
    httpAgent: d,
    httpsAgent: d,
    cancelToken: d,
    socketPath: d,
    responseEncoding: d,
    validateStatus: p,
    headers: (m, v, b) => c(Dm(m), Dm(v), b, !0),
  };
  return (
    B.forEach(Object.keys({ ...n, ...r }), function (v) {
      const b = y[v] || c,
        T = b(n[v], r[v], v);
      (B.isUndefined(T) && b !== p) || (u[v] = T);
    }),
    u
  );
}
const Zp = (n) => {
    const r = rn({}, n);
    let {
      data: u,
      withXSRFToken: o,
      xsrfHeaderName: c,
      xsrfCookieName: f,
      headers: d,
      auth: p,
    } = r;
    if (
      ((r.headers = d = Gt.from(d)),
      (r.url = kp(
        Qp(r.baseURL, r.url, r.allowAbsoluteUrls),
        n.params,
        n.paramsSerializer,
      )),
      p &&
        d.set(
          "Authorization",
          "Basic " +
            btoa(
              (p.username || "") +
                ":" +
                (p.password ? unescape(encodeURIComponent(p.password)) : ""),
            ),
        ),
      B.isFormData(u))
    ) {
      if (Ct.hasStandardBrowserEnv || Ct.hasStandardBrowserWebWorkerEnv)
        d.setContentType(void 0);
      else if (B.isFunction(u.getHeaders)) {
        const y = u.getHeaders(),
          m = ["content-type", "content-length"];
        Object.entries(y).forEach(([v, b]) => {
          m.includes(v.toLowerCase()) && d.set(v, b);
        });
      }
    }
    if (
      Ct.hasStandardBrowserEnv &&
      (o && B.isFunction(o) && (o = o(r)), o || (o !== !1 && j3(r.url)))
    ) {
      const y = c && f && H3.read(f);
      y && d.set(c, y);
    }
    return r;
  },
  k3 = typeof XMLHttpRequest < "u",
  Y3 =
    k3 &&
    function (n) {
      return new Promise(function (u, o) {
        const c = Zp(n);
        let f = c.data;
        const d = Gt.from(c.headers).normalize();
        let { responseType: p, onUploadProgress: y, onDownloadProgress: m } = c,
          v,
          b,
          T,
          U,
          w;
        function q() {
          (U && U(),
            w && w(),
            c.cancelToken && c.cancelToken.unsubscribe(v),
            c.signal && c.signal.removeEventListener("abort", v));
        }
        let D = new XMLHttpRequest();
        (D.open(c.method.toUpperCase(), c.url, !0), (D.timeout = c.timeout));
        function V() {
          if (!D) return;
          const ee = Gt.from(
              "getAllResponseHeaders" in D && D.getAllResponseHeaders(),
            ),
            $ = {
              data:
                !p || p === "text" || p === "json"
                  ? D.responseText
                  : D.response,
              status: D.status,
              statusText: D.statusText,
              headers: ee,
              config: n,
              request: D,
            };
          (Xp(
            function (ne) {
              (u(ne), q());
            },
            function (ne) {
              (o(ne), q());
            },
            $,
          ),
            (D = null));
        }
        ("onloadend" in D
          ? (D.onloadend = V)
          : (D.onreadystatechange = function () {
              !D ||
                D.readyState !== 4 ||
                (D.status === 0 &&
                  !(D.responseURL && D.responseURL.indexOf("file:") === 0)) ||
                setTimeout(V);
            }),
          (D.onabort = function () {
            D &&
              (o(new Oe("Request aborted", Oe.ECONNABORTED, n, D)), (D = null));
          }),
          (D.onerror = function (le) {
            const $ = le && le.message ? le.message : "Network Error",
              z = new Oe($, Oe.ERR_NETWORK, n, D);
            ((z.event = le || null), o(z), (D = null));
          }),
          (D.ontimeout = function () {
            let le = c.timeout
              ? "timeout of " + c.timeout + "ms exceeded"
              : "timeout exceeded";
            const $ = c.transitional || Yp;
            (c.timeoutErrorMessage && (le = c.timeoutErrorMessage),
              o(
                new Oe(
                  le,
                  $.clarifyTimeoutError ? Oe.ETIMEDOUT : Oe.ECONNABORTED,
                  n,
                  D,
                ),
              ),
              (D = null));
          }),
          f === void 0 && d.setContentType(null),
          "setRequestHeader" in D &&
            B.forEach(d.toJSON(), function (le, $) {
              D.setRequestHeader($, le);
            }),
          B.isUndefined(c.withCredentials) ||
            (D.withCredentials = !!c.withCredentials),
          p && p !== "json" && (D.responseType = c.responseType),
          m && (([T, w] = ao(m, !0)), D.addEventListener("progress", T)),
          y &&
            D.upload &&
            (([b, U] = ao(y)),
            D.upload.addEventListener("progress", b),
            D.upload.addEventListener("loadend", U)),
          (c.cancelToken || c.signal) &&
            ((v = (ee) => {
              D &&
                (o(!ee || ee.type ? new tr(null, n, D) : ee),
                D.abort(),
                (D = null));
            }),
            c.cancelToken && c.cancelToken.subscribe(v),
            c.signal &&
              (c.signal.aborted
                ? v()
                : c.signal.addEventListener("abort", v))));
        const F = N3(c.url);
        if (F && Ct.protocols.indexOf(F) === -1) {
          o(new Oe("Unsupported protocol " + F + ":", Oe.ERR_BAD_REQUEST, n));
          return;
        }
        D.send(f || null);
      });
    },
  G3 = (n, r) => {
    const { length: u } = (n = n ? n.filter(Boolean) : []);
    if (r || u) {
      let o = new AbortController(),
        c;
      const f = function (m) {
        if (!c) {
          ((c = !0), p());
          const v = m instanceof Error ? m : this.reason;
          o.abort(
            v instanceof Oe ? v : new tr(v instanceof Error ? v.message : v),
          );
        }
      };
      let d =
        r &&
        setTimeout(() => {
          ((d = null), f(new Oe(`timeout ${r} of ms exceeded`, Oe.ETIMEDOUT)));
        }, r);
      const p = () => {
        n &&
          (d && clearTimeout(d),
          (d = null),
          n.forEach((m) => {
            m.unsubscribe
              ? m.unsubscribe(f)
              : m.removeEventListener("abort", f);
          }),
          (n = null));
      };
      n.forEach((m) => m.addEventListener("abort", f));
      const { signal: y } = o;
      return ((y.unsubscribe = () => B.asap(p)), y);
    }
  },
  V3 = function* (n, r) {
    let u = n.byteLength;
    if (u < r) {
      yield n;
      return;
    }
    let o = 0,
      c;
    for (; o < u; ) ((c = o + r), yield n.slice(o, c), (o = c));
  },
  X3 = async function* (n, r) {
    for await (const u of Q3(n)) yield* V3(u, r);
  },
  Q3 = async function* (n) {
    if (n[Symbol.asyncIterator]) {
      yield* n;
      return;
    }
    const r = n.getReader();
    try {
      for (;;) {
        const { done: u, value: o } = await r.read();
        if (u) break;
        yield o;
      }
    } finally {
      await r.cancel();
    }
  },
  zm = (n, r, u, o) => {
    const c = X3(n, r);
    let f = 0,
      d,
      p = (y) => {
        d || ((d = !0), o && o(y));
      };
    return new ReadableStream(
      {
        async pull(y) {
          try {
            const { done: m, value: v } = await c.next();
            if (m) {
              (p(), y.close());
              return;
            }
            let b = v.byteLength;
            if (u) {
              let T = (f += b);
              u(T);
            }
            y.enqueue(new Uint8Array(v));
          } catch (m) {
            throw (p(m), m);
          }
        },
        cancel(y) {
          return (p(y), c.return());
        },
      },
      { highWaterMark: 2 },
    );
  },
  Nm = 64 * 1024,
  { isFunction: qu } = B,
  Z3 = (({ Request: n, Response: r }) => ({ Request: n, Response: r }))(
    B.global,
  ),
  { ReadableStream: Um, TextEncoder: Lm } = B.global,
  jm = (n, ...r) => {
    try {
      return !!n(...r);
    } catch {
      return !1;
    }
  },
  K3 = (n) => {
    n = B.merge.call({ skipUndefined: !0 }, Z3, n);
    const { fetch: r, Request: u, Response: o } = n,
      c = r ? qu(r) : typeof fetch == "function",
      f = qu(u),
      d = qu(o);
    if (!c) return !1;
    const p = c && qu(Um),
      y =
        c &&
        (typeof Lm == "function"
          ? (
              (w) => (q) =>
                w.encode(q)
            )(new Lm())
          : async (w) => new Uint8Array(await new u(w).arrayBuffer())),
      m =
        f &&
        p &&
        jm(() => {
          let w = !1;
          const q = new u(Ct.origin, {
            body: new Um(),
            method: "POST",
            get duplex() {
              return ((w = !0), "half");
            },
          }).headers.has("Content-Type");
          return w && !q;
        }),
      v = d && p && jm(() => B.isReadableStream(new o("").body)),
      b = { stream: v && ((w) => w.body) };
    c &&
      ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((w) => {
        !b[w] &&
          (b[w] = (q, D) => {
            let V = q && q[w];
            if (V) return V.call(q);
            throw new Oe(
              `Response type '${w}' is not supported`,
              Oe.ERR_NOT_SUPPORT,
              D,
            );
          });
      });
    const T = async (w) => {
        if (w == null) return 0;
        if (B.isBlob(w)) return w.size;
        if (B.isSpecCompliantForm(w))
          return (
            await new u(Ct.origin, { method: "POST", body: w }).arrayBuffer()
          ).byteLength;
        if (B.isArrayBufferView(w) || B.isArrayBuffer(w)) return w.byteLength;
        if ((B.isURLSearchParams(w) && (w = w + ""), B.isString(w)))
          return (await y(w)).byteLength;
      },
      U = async (w, q) => {
        const D = B.toFiniteNumber(w.getContentLength());
        return D ?? T(q);
      };
    return async (w) => {
      let {
          url: q,
          method: D,
          data: V,
          signal: F,
          cancelToken: ee,
          timeout: le,
          onDownloadProgress: $,
          onUploadProgress: z,
          responseType: ne,
          headers: te,
          withCredentials: fe = "same-origin",
          fetchOptions: Ue,
        } = Zp(w),
        Xe = r || fetch;
      ne = ne ? (ne + "").toLowerCase() : "text";
      let Be = G3([F, ee && ee.toAbortSignal()], le),
        we = null;
      const Re =
        Be &&
        Be.unsubscribe &&
        (() => {
          Be.unsubscribe();
        });
      let _e;
      try {
        if (
          z &&
          m &&
          D !== "get" &&
          D !== "head" &&
          (_e = await U(te, V)) !== 0
        ) {
          let k = new u(q, { method: "POST", body: V, duplex: "half" }),
            I;
          if (
            (B.isFormData(V) &&
              (I = k.headers.get("content-type")) &&
              te.setContentType(I),
            k.body)
          ) {
            const [K, ae] = Mm(_e, ao(_m(z)));
            V = zm(k.body, Nm, K, ae);
          }
        }
        B.isString(fe) || (fe = fe ? "include" : "omit");
        const O = f && "credentials" in u.prototype,
          P = {
            ...Ue,
            signal: Be,
            method: D.toUpperCase(),
            headers: te.normalize().toJSON(),
            body: V,
            duplex: "half",
            credentials: O ? fe : void 0,
          };
        we = f && new u(q, P);
        let G = await (f ? Xe(we, Ue) : Xe(q, P));
        const Ee = v && (ne === "stream" || ne === "response");
        if (v && ($ || (Ee && Re))) {
          const k = {};
          ["status", "statusText", "headers"].forEach((xe) => {
            k[xe] = G[xe];
          });
          const I = B.toFiniteNumber(G.headers.get("content-length")),
            [K, ae] = ($ && Mm(I, ao(_m($), !0))) || [];
          G = new o(
            zm(G.body, Nm, K, () => {
              (ae && ae(), Re && Re());
            }),
            k,
          );
        }
        ne = ne || "text";
        let E = await b[B.findKey(b, ne) || "text"](G, w);
        return (
          !Ee && Re && Re(),
          await new Promise((k, I) => {
            Xp(k, I, {
              data: E,
              headers: Gt.from(G.headers),
              status: G.status,
              statusText: G.statusText,
              config: w,
              request: we,
            });
          })
        );
      } catch (O) {
        throw (
          Re && Re(),
          O && O.name === "TypeError" && /Load failed|fetch/i.test(O.message)
            ? Object.assign(new Oe("Network Error", Oe.ERR_NETWORK, w, we), {
                cause: O.cause || O,
              })
            : Oe.from(O, O && O.code, w, we)
        );
      }
    };
  },
  J3 = new Map(),
  Kp = (n) => {
    let r = n ? n.env : {};
    const { fetch: u, Request: o, Response: c } = r,
      f = [o, c, u];
    let d = f.length,
      p = d,
      y,
      m,
      v = J3;
    for (; p--; )
      ((y = f[p]),
        (m = v.get(y)),
        m === void 0 && v.set(y, (m = p ? new Map() : K3(r))),
        (v = m));
    return m;
  };
Kp();
const Qc = { http: f3, xhr: Y3, fetch: { get: Kp } };
B.forEach(Qc, (n, r) => {
  if (n) {
    try {
      Object.defineProperty(n, "name", { value: r });
    } catch {}
    Object.defineProperty(n, "adapterName", { value: r });
  }
});
const Hm = (n) => `- ${n}`,
  F3 = (n) => B.isFunction(n) || n === null || n === !1,
  Jp = {
    getAdapter: (n, r) => {
      n = B.isArray(n) ? n : [n];
      const { length: u } = n;
      let o, c;
      const f = {};
      for (let d = 0; d < u; d++) {
        o = n[d];
        let p;
        if (
          ((c = o),
          !F3(o) && ((c = Qc[(p = String(o)).toLowerCase()]), c === void 0))
        )
          throw new Oe(`Unknown adapter '${p}'`);
        if (c && (B.isFunction(c) || (c = c.get(r)))) break;
        f[p || "#" + d] = c;
      }
      if (!c) {
        const d = Object.entries(f).map(
          ([y, m]) =>
            `adapter ${y} ` +
            (m === !1
              ? "is not supported by the environment"
              : "is not available in the build"),
        );
        let p = u
          ? d.length > 1
            ? `since :
` +
              d.map(Hm).join(`
`)
            : " " + Hm(d[0])
          : "as no adapter specified";
        throw new Oe(
          "There is no suitable adapter to dispatch the request " + p,
          "ERR_NOT_SUPPORT",
        );
      }
      return c;
    },
    adapters: Qc,
  };
function Nc(n) {
  if (
    (n.cancelToken && n.cancelToken.throwIfRequested(),
    n.signal && n.signal.aborted)
  )
    throw new tr(null, n);
}
function Bm(n) {
  return (
    Nc(n),
    (n.headers = Gt.from(n.headers)),
    (n.data = zc.call(n, n.transformRequest)),
    ["post", "put", "patch"].indexOf(n.method) !== -1 &&
      n.headers.setContentType("application/x-www-form-urlencoded", !1),
    Jp.getAdapter(
      n.adapter || yi.adapter,
      n,
    )(n).then(
      function (o) {
        return (
          Nc(n),
          (o.data = zc.call(n, n.transformResponse, o)),
          (o.headers = Gt.from(o.headers)),
          o
        );
      },
      function (o) {
        return (
          Vp(o) ||
            (Nc(n),
            o &&
              o.response &&
              ((o.response.data = zc.call(n, n.transformResponse, o.response)),
              (o.response.headers = Gt.from(o.response.headers)))),
          Promise.reject(o)
        );
      },
    )
  );
}
const Fp = "1.12.2",
  so = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (n, r) => {
    so[n] = function (o) {
      return typeof o === n || "a" + (r < 1 ? "n " : " ") + n;
    };
  },
);
const qm = {};
so.transitional = function (r, u, o) {
  function c(f, d) {
    return (
      "[Axios v" +
      Fp +
      "] Transitional option '" +
      f +
      "'" +
      d +
      (o ? ". " + o : "")
    );
  }
  return (f, d, p) => {
    if (r === !1)
      throw new Oe(
        c(d, " has been removed" + (u ? " in " + u : "")),
        Oe.ERR_DEPRECATED,
      );
    return (
      u &&
        !qm[d] &&
        ((qm[d] = !0),
        console.warn(
          c(
            d,
            " has been deprecated since v" +
              u +
              " and will be removed in the near future",
          ),
        )),
      r ? r(f, d, p) : !0
    );
  };
};
so.spelling = function (r) {
  return (u, o) => (console.warn(`${o} is likely a misspelling of ${r}`), !0);
};
function P3(n, r, u) {
  if (typeof n != "object")
    throw new Oe("options must be an object", Oe.ERR_BAD_OPTION_VALUE);
  const o = Object.keys(n);
  let c = o.length;
  for (; c-- > 0; ) {
    const f = o[c],
      d = r[f];
    if (d) {
      const p = n[f],
        y = p === void 0 || d(p, f, n);
      if (y !== !0)
        throw new Oe("option " + f + " must be " + y, Oe.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (u !== !0) throw new Oe("Unknown option " + f, Oe.ERR_BAD_OPTION);
  }
}
const Wu = { assertOptions: P3, validators: so },
  Ca = Wu.validators;
let nn = class {
  constructor(r) {
    ((this.defaults = r || {}),
      (this.interceptors = { request: new Om(), response: new Om() }));
  }
  async request(r, u) {
    try {
      return await this._request(r, u);
    } catch (o) {
      if (o instanceof Error) {
        let c = {};
        Error.captureStackTrace
          ? Error.captureStackTrace(c)
          : (c = new Error());
        const f = c.stack ? c.stack.replace(/^.+\n/, "") : "";
        try {
          o.stack
            ? f &&
              !String(o.stack).endsWith(f.replace(/^.+\n.+\n/, "")) &&
              (o.stack +=
                `
` + f)
            : (o.stack = f);
        } catch {}
      }
      throw o;
    }
  }
  _request(r, u) {
    (typeof r == "string" ? ((u = u || {}), (u.url = r)) : (u = r || {}),
      (u = rn(this.defaults, u)));
    const { transitional: o, paramsSerializer: c, headers: f } = u;
    (o !== void 0 &&
      Wu.assertOptions(
        o,
        {
          silentJSONParsing: Ca.transitional(Ca.boolean),
          forcedJSONParsing: Ca.transitional(Ca.boolean),
          clarifyTimeoutError: Ca.transitional(Ca.boolean),
        },
        !1,
      ),
      c != null &&
        (B.isFunction(c)
          ? (u.paramsSerializer = { serialize: c })
          : Wu.assertOptions(
              c,
              { encode: Ca.function, serialize: Ca.function },
              !0,
            )),
      u.allowAbsoluteUrls !== void 0 ||
        (this.defaults.allowAbsoluteUrls !== void 0
          ? (u.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls)
          : (u.allowAbsoluteUrls = !0)),
      Wu.assertOptions(
        u,
        {
          baseUrl: Ca.spelling("baseURL"),
          withXsrfToken: Ca.spelling("withXSRFToken"),
        },
        !0,
      ),
      (u.method = (u.method || this.defaults.method || "get").toLowerCase()));
    let d = f && B.merge(f.common, f[u.method]);
    (f &&
      B.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (w) => {
          delete f[w];
        },
      ),
      (u.headers = Gt.concat(d, f)));
    const p = [];
    let y = !0;
    this.interceptors.request.forEach(function (q) {
      (typeof q.runWhen == "function" && q.runWhen(u) === !1) ||
        ((y = y && q.synchronous), p.unshift(q.fulfilled, q.rejected));
    });
    const m = [];
    this.interceptors.response.forEach(function (q) {
      m.push(q.fulfilled, q.rejected);
    });
    let v,
      b = 0,
      T;
    if (!y) {
      const w = [Bm.bind(this), void 0];
      for (
        w.unshift(...p), w.push(...m), T = w.length, v = Promise.resolve(u);
        b < T;

      )
        v = v.then(w[b++], w[b++]);
      return v;
    }
    T = p.length;
    let U = u;
    for (; b < T; ) {
      const w = p[b++],
        q = p[b++];
      try {
        U = w(U);
      } catch (D) {
        q.call(this, D);
        break;
      }
    }
    try {
      v = Bm.call(this, U);
    } catch (w) {
      return Promise.reject(w);
    }
    for (b = 0, T = m.length; b < T; ) v = v.then(m[b++], m[b++]);
    return v;
  }
  getUri(r) {
    r = rn(this.defaults, r);
    const u = Qp(r.baseURL, r.url, r.allowAbsoluteUrls);
    return kp(u, r.params, r.paramsSerializer);
  }
};
B.forEach(["delete", "get", "head", "options"], function (r) {
  nn.prototype[r] = function (u, o) {
    return this.request(
      rn(o || {}, { method: r, url: u, data: (o || {}).data }),
    );
  };
});
B.forEach(["post", "put", "patch"], function (r) {
  function u(o) {
    return function (f, d, p) {
      return this.request(
        rn(p || {}, {
          method: r,
          headers: o ? { "Content-Type": "multipart/form-data" } : {},
          url: f,
          data: d,
        }),
      );
    };
  }
  ((nn.prototype[r] = u()), (nn.prototype[r + "Form"] = u(!0)));
});
let $3 = class Pp {
  constructor(r) {
    if (typeof r != "function")
      throw new TypeError("executor must be a function.");
    let u;
    this.promise = new Promise(function (f) {
      u = f;
    });
    const o = this;
    (this.promise.then((c) => {
      if (!o._listeners) return;
      let f = o._listeners.length;
      for (; f-- > 0; ) o._listeners[f](c);
      o._listeners = null;
    }),
      (this.promise.then = (c) => {
        let f;
        const d = new Promise((p) => {
          (o.subscribe(p), (f = p));
        }).then(c);
        return (
          (d.cancel = function () {
            o.unsubscribe(f);
          }),
          d
        );
      }),
      r(function (f, d, p) {
        o.reason || ((o.reason = new tr(f, d, p)), u(o.reason));
      }));
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(r) {
    if (this.reason) {
      r(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(r) : (this._listeners = [r]);
  }
  unsubscribe(r) {
    if (!this._listeners) return;
    const u = this._listeners.indexOf(r);
    u !== -1 && this._listeners.splice(u, 1);
  }
  toAbortSignal() {
    const r = new AbortController(),
      u = (o) => {
        r.abort(o);
      };
    return (
      this.subscribe(u),
      (r.signal.unsubscribe = () => this.unsubscribe(u)),
      r.signal
    );
  }
  static source() {
    let r;
    return {
      token: new Pp(function (c) {
        r = c;
      }),
      cancel: r,
    };
  }
};
function W3(n) {
  return function (u) {
    return n.apply(null, u);
  };
}
function I3(n) {
  return B.isObject(n) && n.isAxiosError === !0;
}
const Zc = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(Zc).forEach(([n, r]) => {
  Zc[r] = n;
});
function $p(n) {
  const r = new nn(n),
    u = Cp(nn.prototype.request, r);
  return (
    B.extend(u, nn.prototype, r, { allOwnKeys: !0 }),
    B.extend(u, r, null, { allOwnKeys: !0 }),
    (u.create = function (c) {
      return $p(rn(n, c));
    }),
    u
  );
}
const st = $p(yi);
st.Axios = nn;
st.CanceledError = tr;
st.CancelToken = $3;
st.isCancel = Vp;
st.VERSION = Fp;
st.toFormData = oo;
st.AxiosError = Oe;
st.Cancel = st.CanceledError;
st.all = function (r) {
  return Promise.all(r);
};
st.spread = W3;
st.isAxiosError = I3;
st.mergeConfig = rn;
st.AxiosHeaders = Gt;
st.formToJSON = (n) => Gp(B.isHTMLForm(n) ? new FormData(n) : n);
st.getAdapter = Jp.getAdapter;
st.HttpStatusCode = Zc;
st.default = st;
const {
    Axios: CS,
    AxiosError: MS,
    CanceledError: _S,
    isCancel: DS,
    CancelToken: zS,
    VERSION: NS,
    all: US,
    Cancel: LS,
    isAxiosError: on,
    spread: jS,
    toFormData: HS,
    AxiosHeaders: BS,
    HttpStatusCode: qS,
    formToJSON: kS,
    getAdapter: YS,
    mergeConfig: GS,
  } = st,
  eS = "http://localhost:8000",
  ga = st.create({
    baseURL: `${eS}/api`,
    headers: { "Content-Type": "application/json" },
    withCredentials: !0,
  });
function tS(n) {
  const u = `; ${document.cookie}`.split(`; ${n}=`);
  return (u.length === 2 && u.pop()?.split(";").shift()) || null;
}
ga.interceptors.request.use((n) => n);
ga.interceptors.response.use(
  (n) => n,
  async (n) => {
    if (n.response?.status === 401) {
      console.warn("토큰 만료 - refresh 시도");
      const r = tS("refresh_token");
      if (r)
        try {
          if (
            (
              await st.post(
                "http://localhost:8000/api/user/refresh/",
                { refresh: r },
                { withCredentials: !0 },
              )
            ).status === 200
          )
            return ga.request(n.config);
        } catch (u) {
          (console.error("토큰 갱신 실패:", u),
            localStorage.removeItem("isLoggedIn"),
            localStorage.removeItem("userProfile"),
            localStorage.setItem("isFirstLogin", "false"),
            (window.location.href = "/"));
        }
      else
        (console.error("refresh token 없음"),
          localStorage.removeItem("isLoggedIn"),
          localStorage.removeItem("userProfile"),
          localStorage.setItem("isFirstLogin", "false"),
          (window.location.href = "/"));
    }
    return Promise.reject(n instanceof Error ? n : new Error(String(n)));
  },
);
async function VS(n) {
  try {
    return (
      (await ga.get("/user/kakao/callback/", { params: { code: n } }))
        .status === 200
    );
  } catch (r) {
    on(r)
      ? console.error(
          "kakaoSignIn error:",
          r.response?.status,
          r.response?.data,
        )
      : console.error("kakaoSignIn unknown error:", r);
  }
  return !1;
}
async function XS() {
  return (await ga.get("/payment/orders/")).data;
}
async function QS() {
  try {
    const n = await ga.get("/auction/recommended/");
    return n.status === 200 ? n.data : [];
  } catch (n) {
    return (
      on(n)
        ? console.error(
            "getRecommendedAuctions error:",
            n.response?.status,
            n.response?.data,
          )
        : console.error("getRecommendedAuctions unknown error:", n),
      []
    );
  }
}
async function ZS(n) {
  try {
    const r = encodeURIComponent(String(n)),
      u = await ga.get(`/auction/${r}/`);
    return u.status === 200 ? u.data : null;
  } catch (r) {
    return (
      on(r)
        ? console.error(
            "getAuctionDetail error:",
            r.response?.status,
            r.response?.data,
          )
        : console.error("getAuctionDetail unknown error:", r),
      null
    );
  }
}
async function km() {
  try {
    const n = await ga.get("/user/me/");
    return n.status === 200 ? n.data : null;
  } catch (n) {
    return (
      on(n)
        ? console.error(
            "getUserInfo error:",
            n.response?.status,
            n.response?.data,
          )
        : console.error("getUserInfo unknown error:", n),
      null
    );
  }
}
async function aS(n, r) {
  try {
    const u = await ga.put("/user/me/", { nickname: n, profilepic_id: r });
    return u.status === 200 ? u.data : null;
  } catch (u) {
    return (
      on(u)
        ? console.error(
            "updateUserProfile error:",
            u.response?.status,
            u.response?.data,
          )
        : console.error("updateUserProfile unknown error:", u),
      null
    );
  }
}
async function lS(n) {
  try {
    const r = await ga.post("/payment/ready/", {
      partner_order_id: `order_${Date.now()}`,
      partner_user_id: "user",
      item_name: n.point,
      quantity: 1,
      total_amount: parseInt(n.price),
      vat_amount: 0,
      tax_free_amount: 0,
      approval_url: `${window.location.origin}/payment/approve`,
      cancel_url: `${window.location.origin}/payment/cancel`,
      fail_url: `${window.location.origin}/payment/fail`,
    });
    return r.status === 200 ? r.data : null;
  } catch (r) {
    return (
      on(r)
        ? console.error(
            "paymentReady error:",
            r.response?.status,
            r.response?.data,
          )
        : console.error("paymentReady unknown error:", r),
      null
    );
  }
}
async function KS(n) {
  try {
    return (
      (
        await ga.post("/payment/approve/", {
          pg_token: n.pg_token,
          partner_order_id: n.partner_order_id,
        })
      ).status === 200
    );
  } catch (r) {
    return (
      on(r)
        ? console.error(
            "paymentApproval error:",
            r.response?.status,
            r.response?.data,
          )
        : console.error("paymentApproval unknown error:", r),
      !1
    );
  }
}
function ku({ cup: n, money: r }) {
  const u = async () => {
    if (
      !(
        localStorage.getItem("access_token") ||
        document.cookie
          .split(";")
          .find((c) => c.trim().startsWith("access_token="))
          ?.split("=")[1]
      )
    ) {
      alert("로그인이 필요합니다. 먼저 로그인해주세요.");
      return;
    }
    try {
      const c = await lS({ point: n.toString(), price: r.toString() });
      c &&
        (localStorage.setItem("partner_order_id", c.partner_order_id),
        (window.location.href = c.next_redirect_pc_url));
    } catch (c) {
      (console.error("결제 준비 실패:", c),
        c.response?.status === 401
          ? alert("로그인이 필요합니다. 먼저 로그인해주세요.")
          : alert("결제 준비에 실패했습니다. 다시 시도해주세요."));
    }
  };
  return J.jsxs("div", {
    className: "w-full flex items-center justify-between",
    children: [
      J.jsxs("div", {
        className: "flex items-center gap-2",
        children: [
          J.jsx("img", { src: mp, className: "w-10" }),
          J.jsxs("div", {
            className: "text-xl font-bold text-scale-500",
            children: [n, " 잔"],
          }),
        ],
      }),
      J.jsxs(In, {
        variant: "primary",
        isRounded: !0,
        className: "text-lg font-regular px-10 py-3",
        onButtonClick: u,
        children: ["₩ ", Tb(r)],
      }),
    ],
  });
}
function nS({ onClose: n }) {
  return J.jsx(di, {
    onClose: n,
    children: J.jsxs("div", {
      className: "flex flex-col items-center px-8 py-15 w-133 gap-12.5",
      children: [
        J.jsx("div", {
          className: "text-2xl font-bold text-scale-600",
          children: "포인트 충전하기",
        }),
        J.jsxs("div", {
          className: "flex flex-col gap-9 w-full",
          children: [
            J.jsx(ku, { cup: 10, money: 1e4, onSelect: () => {} }),
            J.jsx(ku, { cup: 30, money: 3e4, onSelect: () => {} }),
            J.jsx(ku, { cup: 50, money: 5e4, onSelect: () => {} }),
            J.jsx(ku, { cup: 100, money: 9e4, onSelect: () => {} }),
          ],
        }),
      ],
    }),
  });
}
function rS() {
  const { openModal: n, open: r, close: u, isOpen: o } = Op(),
    [c, f] = C.useState(!1),
    [d, p] = C.useState(tn),
    [y, m] = C.useState("닉네임"),
    [v, b] = C.useState(0);
  C.useEffect(() => {
    const D = localStorage.getItem("isLoggedIn"),
      V = localStorage.getItem("userProfile");
    if ((localStorage.getItem("isFirstLogin"), D === "true" && V))
      try {
        const F = JSON.parse(V);
        (f(!0),
          m(F.nickname ?? "닉네임"),
          b(F.remaining_points ?? 0),
          F.profilepic_id &&
            p([tn, Qu, Zu, Ku, Ju, Fu][F.profilepic_id - 1] ?? tn),
          (!F.nickname || F.nickname.trim() === "") && r(qt.PROFILE_SETTING),
          (async () => {
            try {
              const le = await km();
              le &&
                (localStorage.setItem("userProfile", JSON.stringify(le)),
                m(le.nickname || "프로필 설정"),
                b(le.remaining_points ?? 0),
                le.profilepic_id &&
                  p([tn, Qu, Zu, Ku, Ju, Fu][le.profilepic_id - 1] ?? tn));
            } catch (le) {
              console.error("사용자 정보 가져오기 실패:", le);
            }
          })());
      } catch {}
  }, [r]);
  const T = C.useRef(null),
    U = () => r(qt.POINT_CHARGE),
    w = () => u(),
    q = async (D) => {
      (b((V) => V + D), w());
      try {
        const V = await km();
        V &&
          (localStorage.setItem("userProfile", JSON.stringify(V)),
          b(V.remaining_points ?? 0));
      } catch (V) {
        console.error("포인트 충전 후 사용자 정보 가져오기 실패:", V);
      }
    };
  return J.jsxs("div", {
    className: "w-full bg-bg-default",
    children: [
      J.jsx(bb, {
        isLoggedIn: c,
        onLoginClick: () => r(qt.LOGIN),
        onProfileClick: () => r(qt.PROFILE),
        profileBtnRef: T,
        showProfileMenu: !1,
        nickname: y,
        imageSrc: d,
        points: v,
        onOpenCharge: U,
        onLogout: () => {
          (f(!1),
            localStorage.removeItem("isLoggedIn"),
            localStorage.removeItem("userProfile"),
            localStorage.removeItem("isFirstLogin"),
            localStorage.removeItem("access_token"),
            u());
        },
      }),
      J.jsx("main", {
        className: "min-h-screen pt-22",
        children: J.jsx(Xg, {}),
      }),
      J.jsx(Sb, {}),
      n === qt.LOGIN &&
        J.jsx(Eb, {
          onLogin: () => {
            r(qt.PROFILE_SETTING);
          },
          onClose: u,
        }),
      n === qt.PROFILE_SETTING &&
        J.jsx(xb, {
          imageSrc: d,
          onEditImage: () => r(qt.PROFILE_IMAGE),
          onSubmitSuccess: async (D) => {
            try {
              const F = [tn, Qu, Zu, Ku, Ju, Fu].indexOf(d) + 1;
              if (await aS(D, F)) {
                (m(D), f(!0));
                const $ = {
                  ...JSON.parse(localStorage.getItem("userProfile") || "{}"),
                  nickname: D,
                  profilepic_id: F,
                };
                (localStorage.setItem("userProfile", JSON.stringify($)), u());
              } else console.error("프로필 업데이트 실패");
            } catch (V) {
              console.error("프로필 업데이트 중 오류:", V);
            }
          },
          onClose: u,
        }),
      n === qt.PROFILE_IMAGE &&
        J.jsx(Rb, {
          current: d,
          onSave: (D) => {
            (p(D), r(qt.PROFILE_SETTING));
          },
          onClose: u,
        }),
      n === qt.PROFILE &&
        J.jsx(wb, {
          onClose: u,
          anchorRef: T,
          nickname: y,
          imageSrc: d,
          points: v,
          onOpenCharge: U,
          onLogout: () => {
            (f(!1),
              localStorage.removeItem("isLoggedIn"),
              localStorage.removeItem("userProfile"),
              localStorage.removeItem("isFirstLogin"),
              localStorage.removeItem("access_token"),
              u());
          },
        }),
      n === qt.POINT_CHARGE && J.jsx(nS, { onClose: u, onCharge: q }),
    ],
  });
}
const iS = C.lazy(() => Ia(() => import("./HomePage-C2td5jKN.js"), [])),
  uS = C.lazy(() => Ia(() => import("./AuctionSearchPage-BSMukPuE.js"), [])),
  oS = C.lazy(() => Ia(() => import("./AuctionRoomPage-C4hNvy9Q.js"), [])),
  sS = C.lazy(() => Ia(() => import("./AuctionCreatePage-B50uuTE0.js"), [])),
  cS = C.lazy(() => Ia(() => import("./HistoryPage-NAPOoQpf.js"), [])),
  fS = C.lazy(() => Ia(() => import("./Auth-BLefFyUt.js"), [])),
  dS = C.lazy(() => Ia(() => import("./PaymentApprovalPage-C0qe8ydd.js"), [])),
  hS = C.lazy(() => Ia(() => import("./PaymentCancelPage-CUEAule7.js"), [])),
  mS = C.lazy(() => Ia(() => import("./PaymentFailPage-DB7q1G6u.js"), [])),
  pS = [{ path: Wa.HOME.ROOT, element: J.jsx(iS, {}) }],
  yS = [
    { path: Wa.AUCTION.ROOT, element: J.jsx(uS, {}) },
    { path: Wa.AUCTION.ROOM, element: J.jsx(oS, {}) },
  ],
  gS = [{ path: Wa.CREATE.ROOT, element: J.jsx(sS, {}) }],
  vS = [{ path: Wa.HISTORY.ROOT, element: J.jsx(cS, {}) }],
  bS = [{ path: Wa.AUTH.ROOT, element: J.jsx(fS, {}) }],
  SS = [
    { path: Wa.PAYMENT.APPROVAL, element: J.jsx(dS, {}) },
    { path: Wa.PAYMENT.CANCEL, element: J.jsx(hS, {}) },
    { path: Wa.PAYMENT.FAIL, element: J.jsx(mS, {}) },
  ],
  ES = [...pS, ...yS, ...gS, ...vS, ...bS, ...SS],
  xS = pv([{ element: J.jsx(rS, {}), children: ES }]);
function RS() {
  return J.jsx(vb, {
    children: J.jsx(C.Suspense, {
      fallback: J.jsx("div", { children: "Loading..." }),
      children: J.jsx(Ov, { router: xS }),
    }),
  });
}
const Wp = document.getElementById("root");
if (!Wp) throw new Error("Root element not found");
h1.createRoot(Wp).render(J.jsx(C.StrictMode, { children: J.jsx(RS, {}) }));
export {
  In as B,
  mp as C,
  wS as a,
  ZS as b,
  XS as c,
  km as d,
  TS as e,
  QS as g,
  J as j,
  VS as k,
  Tb as n,
  KS as p,
  C as r,
  ip as u,
};
