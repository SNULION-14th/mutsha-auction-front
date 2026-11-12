const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/HomePage-gQiLUxDE.js",
      "assets/logo_white-B5195eUO.js",
      "assets/useAuctionQueries-1QkmGXdu.js",
      "assets/AuctionSearchPage-Ba0u0fu1.js",
      "assets/AuctionRoomPage-B8JxJWj_.js",
      "assets/AuctionCreatePage-DnX6Ao6l.js",
    ]),
) => i.map((i) => d[i]);
function IR(e, t) {
  for (var r = 0; r < t.length; r++) {
    const i = t[r];
    if (typeof i != "string" && !Array.isArray(i)) {
      for (const s in i)
        if (s !== "default" && !(s in e)) {
          const l = Object.getOwnPropertyDescriptor(i, s);
          l &&
            Object.defineProperty(
              e,
              s,
              l.get ? l : { enumerable: !0, get: () => i[s] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) i(s);
  new MutationObserver((s) => {
    for (const l of s)
      if (l.type === "childList")
        for (const c of l.addedNodes)
          c.tagName === "LINK" && c.rel === "modulepreload" && i(c);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(s) {
    const l = {};
    return (
      s.integrity && (l.integrity = s.integrity),
      s.referrerPolicy && (l.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === "use-credentials"
        ? (l.credentials = "include")
        : s.crossOrigin === "anonymous"
          ? (l.credentials = "omit")
          : (l.credentials = "same-origin"),
      l
    );
  }
  function i(s) {
    if (s.ep) return;
    s.ep = !0;
    const l = r(s);
    fetch(s.href, l);
  }
})();
function _w(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var _h = { exports: {} },
  Gs = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var V0;
function ZR() {
  if (V0) return Gs;
  V0 = 1;
  var e = Symbol.for("react.transitional.element"),
    t = Symbol.for("react.fragment");
  function r(i, s, l) {
    var c = null;
    if (
      (l !== void 0 && (c = "" + l),
      s.key !== void 0 && (c = "" + s.key),
      "key" in s)
    ) {
      l = {};
      for (var d in s) d !== "key" && (l[d] = s[d]);
    } else l = s;
    return (
      (s = l.ref),
      { $$typeof: e, type: i, key: c, ref: s !== void 0 ? s : null, props: l }
    );
  }
  return ((Gs.Fragment = t), (Gs.jsx = r), (Gs.jsxs = r), Gs);
}
var $0;
function qR() {
  return ($0 || (($0 = 1), (_h.exports = ZR())), _h.exports);
}
var j = qR(),
  Eh = { exports: {} },
  Ys = {},
  xh = { exports: {} },
  Rh = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var H0;
function GR() {
  return (
    H0 ||
      ((H0 = 1),
      (function (e) {
        function t(U, ne) {
          var q = U.length;
          U.push(ne);
          e: for (; 0 < q; ) {
            var ie = (q - 1) >>> 1,
              N = U[ie];
            if (0 < s(N, ne)) ((U[ie] = ne), (U[q] = N), (q = ie));
            else break e;
          }
        }
        function r(U) {
          return U.length === 0 ? null : U[0];
        }
        function i(U) {
          if (U.length === 0) return null;
          var ne = U[0],
            q = U.pop();
          if (q !== ne) {
            U[0] = q;
            e: for (var ie = 0, N = U.length, W = N >>> 1; ie < W; ) {
              var fe = 2 * (ie + 1) - 1,
                le = U[fe],
                ve = fe + 1,
                ke = U[ve];
              if (0 > s(le, q))
                ve < N && 0 > s(ke, le)
                  ? ((U[ie] = ke), (U[ve] = q), (ie = ve))
                  : ((U[ie] = le), (U[fe] = q), (ie = fe));
              else if (ve < N && 0 > s(ke, q))
                ((U[ie] = ke), (U[ve] = q), (ie = ve));
              else break e;
            }
          }
          return ne;
        }
        function s(U, ne) {
          var q = U.sortIndex - ne.sortIndex;
          return q !== 0 ? q : U.id - ne.id;
        }
        if (
          ((e.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var l = performance;
          e.unstable_now = function () {
            return l.now();
          };
        } else {
          var c = Date,
            d = c.now();
          e.unstable_now = function () {
            return c.now() - d;
          };
        }
        var m = [],
          h = [],
          y = 1,
          g = null,
          v = 3,
          _ = !1,
          S = !1,
          E = !1,
          x = !1,
          T = typeof setTimeout == "function" ? setTimeout : null,
          P = typeof clearTimeout == "function" ? clearTimeout : null,
          D = typeof setImmediate < "u" ? setImmediate : null;
        function B(U) {
          for (var ne = r(h); ne !== null; ) {
            if (ne.callback === null) i(h);
            else if (ne.startTime <= U)
              (i(h), (ne.sortIndex = ne.expirationTime), t(m, ne));
            else break;
            ne = r(h);
          }
        }
        function k(U) {
          if (((E = !1), B(U), !S))
            if (r(m) !== null) ((S = !0), C || ((C = !0), be()));
            else {
              var ne = r(h);
              ne !== null && ge(k, ne.startTime - U);
            }
        }
        var C = !1,
          Y = -1,
          Q = 5,
          me = -1;
        function pe() {
          return x ? !0 : !(e.unstable_now() - me < Q);
        }
        function we() {
          if (((x = !1), C)) {
            var U = e.unstable_now();
            me = U;
            var ne = !0;
            try {
              e: {
                ((S = !1), E && ((E = !1), P(Y), (Y = -1)), (_ = !0));
                var q = v;
                try {
                  t: {
                    for (
                      B(U), g = r(m);
                      g !== null && !(g.expirationTime > U && pe());

                    ) {
                      var ie = g.callback;
                      if (typeof ie == "function") {
                        ((g.callback = null), (v = g.priorityLevel));
                        var N = ie(g.expirationTime <= U);
                        if (((U = e.unstable_now()), typeof N == "function")) {
                          ((g.callback = N), B(U), (ne = !0));
                          break t;
                        }
                        (g === r(m) && i(m), B(U));
                      } else i(m);
                      g = r(m);
                    }
                    if (g !== null) ne = !0;
                    else {
                      var W = r(h);
                      (W !== null && ge(k, W.startTime - U), (ne = !1));
                    }
                  }
                  break e;
                } finally {
                  ((g = null), (v = q), (_ = !1));
                }
                ne = void 0;
              }
            } finally {
              ne ? be() : (C = !1);
            }
          }
        }
        var be;
        if (typeof D == "function")
          be = function () {
            D(we);
          };
        else if (typeof MessageChannel < "u") {
          var Se = new MessageChannel(),
            ce = Se.port2;
          ((Se.port1.onmessage = we),
            (be = function () {
              ce.postMessage(null);
            }));
        } else
          be = function () {
            T(we, 0);
          };
        function ge(U, ne) {
          Y = T(function () {
            U(e.unstable_now());
          }, ne);
        }
        ((e.unstable_IdlePriority = 5),
          (e.unstable_ImmediatePriority = 1),
          (e.unstable_LowPriority = 4),
          (e.unstable_NormalPriority = 3),
          (e.unstable_Profiling = null),
          (e.unstable_UserBlockingPriority = 2),
          (e.unstable_cancelCallback = function (U) {
            U.callback = null;
          }),
          (e.unstable_forceFrameRate = function (U) {
            0 > U || 125 < U
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (Q = 0 < U ? Math.floor(1e3 / U) : 5);
          }),
          (e.unstable_getCurrentPriorityLevel = function () {
            return v;
          }),
          (e.unstable_next = function (U) {
            switch (v) {
              case 1:
              case 2:
              case 3:
                var ne = 3;
                break;
              default:
                ne = v;
            }
            var q = v;
            v = ne;
            try {
              return U();
            } finally {
              v = q;
            }
          }),
          (e.unstable_requestPaint = function () {
            x = !0;
          }),
          (e.unstable_runWithPriority = function (U, ne) {
            switch (U) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                U = 3;
            }
            var q = v;
            v = U;
            try {
              return ne();
            } finally {
              v = q;
            }
          }),
          (e.unstable_scheduleCallback = function (U, ne, q) {
            var ie = e.unstable_now();
            switch (
              (typeof q == "object" && q !== null
                ? ((q = q.delay),
                  (q = typeof q == "number" && 0 < q ? ie + q : ie))
                : (q = ie),
              U)
            ) {
              case 1:
                var N = -1;
                break;
              case 2:
                N = 250;
                break;
              case 5:
                N = 1073741823;
                break;
              case 4:
                N = 1e4;
                break;
              default:
                N = 5e3;
            }
            return (
              (N = q + N),
              (U = {
                id: y++,
                callback: ne,
                priorityLevel: U,
                startTime: q,
                expirationTime: N,
                sortIndex: -1,
              }),
              q > ie
                ? ((U.sortIndex = q),
                  t(h, U),
                  r(m) === null &&
                    U === r(h) &&
                    (E ? (P(Y), (Y = -1)) : (E = !0), ge(k, q - ie)))
                : ((U.sortIndex = N),
                  t(m, U),
                  S || _ || ((S = !0), C || ((C = !0), be()))),
              U
            );
          }),
          (e.unstable_shouldYield = pe),
          (e.unstable_wrapCallback = function (U) {
            var ne = v;
            return function () {
              var q = v;
              v = ne;
              try {
                return U.apply(this, arguments);
              } finally {
                v = q;
              }
            };
          }));
      })(Rh)),
    Rh
  );
}
var I0;
function YR() {
  return (I0 || ((I0 = 1), (xh.exports = GR())), xh.exports);
}
var Oh = { exports: {} },
  $e = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Z0;
function KR() {
  if (Z0) return $e;
  Z0 = 1;
  var e = Symbol.for("react.transitional.element"),
    t = Symbol.for("react.portal"),
    r = Symbol.for("react.fragment"),
    i = Symbol.for("react.strict_mode"),
    s = Symbol.for("react.profiler"),
    l = Symbol.for("react.consumer"),
    c = Symbol.for("react.context"),
    d = Symbol.for("react.forward_ref"),
    m = Symbol.for("react.suspense"),
    h = Symbol.for("react.memo"),
    y = Symbol.for("react.lazy"),
    g = Symbol.iterator;
  function v(N) {
    return N === null || typeof N != "object"
      ? null
      : ((N = (g && N[g]) || N["@@iterator"]),
        typeof N == "function" ? N : null);
  }
  var _ = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    S = Object.assign,
    E = {};
  function x(N, W, fe) {
    ((this.props = N),
      (this.context = W),
      (this.refs = E),
      (this.updater = fe || _));
  }
  ((x.prototype.isReactComponent = {}),
    (x.prototype.setState = function (N, W) {
      if (typeof N != "object" && typeof N != "function" && N != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, N, W, "setState");
    }),
    (x.prototype.forceUpdate = function (N) {
      this.updater.enqueueForceUpdate(this, N, "forceUpdate");
    }));
  function T() {}
  T.prototype = x.prototype;
  function P(N, W, fe) {
    ((this.props = N),
      (this.context = W),
      (this.refs = E),
      (this.updater = fe || _));
  }
  var D = (P.prototype = new T());
  ((D.constructor = P), S(D, x.prototype), (D.isPureReactComponent = !0));
  var B = Array.isArray,
    k = { H: null, A: null, T: null, S: null, V: null },
    C = Object.prototype.hasOwnProperty;
  function Y(N, W, fe, le, ve, ke) {
    return (
      (fe = ke.ref),
      {
        $$typeof: e,
        type: N,
        key: W,
        ref: fe !== void 0 ? fe : null,
        props: ke,
      }
    );
  }
  function Q(N, W) {
    return Y(N.type, W, void 0, void 0, void 0, N.props);
  }
  function me(N) {
    return typeof N == "object" && N !== null && N.$$typeof === e;
  }
  function pe(N) {
    var W = { "=": "=0", ":": "=2" };
    return (
      "$" +
      N.replace(/[=:]/g, function (fe) {
        return W[fe];
      })
    );
  }
  var we = /\/+/g;
  function be(N, W) {
    return typeof N == "object" && N !== null && N.key != null
      ? pe("" + N.key)
      : W.toString(36);
  }
  function Se() {}
  function ce(N) {
    switch (N.status) {
      case "fulfilled":
        return N.value;
      case "rejected":
        throw N.reason;
      default:
        switch (
          (typeof N.status == "string"
            ? N.then(Se, Se)
            : ((N.status = "pending"),
              N.then(
                function (W) {
                  N.status === "pending" &&
                    ((N.status = "fulfilled"), (N.value = W));
                },
                function (W) {
                  N.status === "pending" &&
                    ((N.status = "rejected"), (N.reason = W));
                },
              )),
          N.status)
        ) {
          case "fulfilled":
            return N.value;
          case "rejected":
            throw N.reason;
        }
    }
    throw N;
  }
  function ge(N, W, fe, le, ve) {
    var ke = typeof N;
    (ke === "undefined" || ke === "boolean") && (N = null);
    var Oe = !1;
    if (N === null) Oe = !0;
    else
      switch (ke) {
        case "bigint":
        case "string":
        case "number":
          Oe = !0;
          break;
        case "object":
          switch (N.$$typeof) {
            case e:
            case t:
              Oe = !0;
              break;
            case y:
              return ((Oe = N._init), ge(Oe(N._payload), W, fe, le, ve));
          }
      }
    if (Oe)
      return (
        (ve = ve(N)),
        (Oe = le === "" ? "." + be(N, 0) : le),
        B(ve)
          ? ((fe = ""),
            Oe != null && (fe = Oe.replace(we, "$&/") + "/"),
            ge(ve, W, fe, "", function (gt) {
              return gt;
            }))
          : ve != null &&
            (me(ve) &&
              (ve = Q(
                ve,
                fe +
                  (ve.key == null || (N && N.key === ve.key)
                    ? ""
                    : ("" + ve.key).replace(we, "$&/") + "/") +
                  Oe,
              )),
            W.push(ve)),
        1
      );
    Oe = 0;
    var Ne = le === "" ? "." : le + ":";
    if (B(N))
      for (var qe = 0; qe < N.length; qe++)
        ((le = N[qe]), (ke = Ne + be(le, qe)), (Oe += ge(le, W, fe, ke, ve)));
    else if (((qe = v(N)), typeof qe == "function"))
      for (N = qe.call(N), qe = 0; !(le = N.next()).done; )
        ((le = le.value),
          (ke = Ne + be(le, qe++)),
          (Oe += ge(le, W, fe, ke, ve)));
    else if (ke === "object") {
      if (typeof N.then == "function") return ge(ce(N), W, fe, le, ve);
      throw (
        (W = String(N)),
        Error(
          "Objects are not valid as a React child (found: " +
            (W === "[object Object]"
              ? "object with keys {" + Object.keys(N).join(", ") + "}"
              : W) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    }
    return Oe;
  }
  function U(N, W, fe) {
    if (N == null) return N;
    var le = [],
      ve = 0;
    return (
      ge(N, le, "", "", function (ke) {
        return W.call(fe, ke, ve++);
      }),
      le
    );
  }
  function ne(N) {
    if (N._status === -1) {
      var W = N._result;
      ((W = W()),
        W.then(
          function (fe) {
            (N._status === 0 || N._status === -1) &&
              ((N._status = 1), (N._result = fe));
          },
          function (fe) {
            (N._status === 0 || N._status === -1) &&
              ((N._status = 2), (N._result = fe));
          },
        ),
        N._status === -1 && ((N._status = 0), (N._result = W)));
    }
    if (N._status === 1) return N._result.default;
    throw N._result;
  }
  var q =
    typeof reportError == "function"
      ? reportError
      : function (N) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var W = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof N == "object" &&
                N !== null &&
                typeof N.message == "string"
                  ? String(N.message)
                  : String(N),
              error: N,
            });
            if (!window.dispatchEvent(W)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", N);
            return;
          }
          console.error(N);
        };
  function ie() {}
  return (
    ($e.Children = {
      map: U,
      forEach: function (N, W, fe) {
        U(
          N,
          function () {
            W.apply(this, arguments);
          },
          fe,
        );
      },
      count: function (N) {
        var W = 0;
        return (
          U(N, function () {
            W++;
          }),
          W
        );
      },
      toArray: function (N) {
        return (
          U(N, function (W) {
            return W;
          }) || []
        );
      },
      only: function (N) {
        if (!me(N))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return N;
      },
    }),
    ($e.Component = x),
    ($e.Fragment = r),
    ($e.Profiler = s),
    ($e.PureComponent = P),
    ($e.StrictMode = i),
    ($e.Suspense = m),
    ($e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = k),
    ($e.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (N) {
        return k.H.useMemoCache(N);
      },
    }),
    ($e.cache = function (N) {
      return function () {
        return N.apply(null, arguments);
      };
    }),
    ($e.cloneElement = function (N, W, fe) {
      if (N == null)
        throw Error(
          "The argument must be a React element, but you passed " + N + ".",
        );
      var le = S({}, N.props),
        ve = N.key,
        ke = void 0;
      if (W != null)
        for (Oe in (W.ref !== void 0 && (ke = void 0),
        W.key !== void 0 && (ve = "" + W.key),
        W))
          !C.call(W, Oe) ||
            Oe === "key" ||
            Oe === "__self" ||
            Oe === "__source" ||
            (Oe === "ref" && W.ref === void 0) ||
            (le[Oe] = W[Oe]);
      var Oe = arguments.length - 2;
      if (Oe === 1) le.children = fe;
      else if (1 < Oe) {
        for (var Ne = Array(Oe), qe = 0; qe < Oe; qe++)
          Ne[qe] = arguments[qe + 2];
        le.children = Ne;
      }
      return Y(N.type, ve, void 0, void 0, ke, le);
    }),
    ($e.createContext = function (N) {
      return (
        (N = {
          $$typeof: c,
          _currentValue: N,
          _currentValue2: N,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (N.Provider = N),
        (N.Consumer = { $$typeof: l, _context: N }),
        N
      );
    }),
    ($e.createElement = function (N, W, fe) {
      var le,
        ve = {},
        ke = null;
      if (W != null)
        for (le in (W.key !== void 0 && (ke = "" + W.key), W))
          C.call(W, le) &&
            le !== "key" &&
            le !== "__self" &&
            le !== "__source" &&
            (ve[le] = W[le]);
      var Oe = arguments.length - 2;
      if (Oe === 1) ve.children = fe;
      else if (1 < Oe) {
        for (var Ne = Array(Oe), qe = 0; qe < Oe; qe++)
          Ne[qe] = arguments[qe + 2];
        ve.children = Ne;
      }
      if (N && N.defaultProps)
        for (le in ((Oe = N.defaultProps), Oe))
          ve[le] === void 0 && (ve[le] = Oe[le]);
      return Y(N, ke, void 0, void 0, null, ve);
    }),
    ($e.createRef = function () {
      return { current: null };
    }),
    ($e.forwardRef = function (N) {
      return { $$typeof: d, render: N };
    }),
    ($e.isValidElement = me),
    ($e.lazy = function (N) {
      return { $$typeof: y, _payload: { _status: -1, _result: N }, _init: ne };
    }),
    ($e.memo = function (N, W) {
      return { $$typeof: h, type: N, compare: W === void 0 ? null : W };
    }),
    ($e.startTransition = function (N) {
      var W = k.T,
        fe = {};
      k.T = fe;
      try {
        var le = N(),
          ve = k.S;
        (ve !== null && ve(fe, le),
          typeof le == "object" &&
            le !== null &&
            typeof le.then == "function" &&
            le.then(ie, q));
      } catch (ke) {
        q(ke);
      } finally {
        k.T = W;
      }
    }),
    ($e.unstable_useCacheRefresh = function () {
      return k.H.useCacheRefresh();
    }),
    ($e.use = function (N) {
      return k.H.use(N);
    }),
    ($e.useActionState = function (N, W, fe) {
      return k.H.useActionState(N, W, fe);
    }),
    ($e.useCallback = function (N, W) {
      return k.H.useCallback(N, W);
    }),
    ($e.useContext = function (N) {
      return k.H.useContext(N);
    }),
    ($e.useDebugValue = function () {}),
    ($e.useDeferredValue = function (N, W) {
      return k.H.useDeferredValue(N, W);
    }),
    ($e.useEffect = function (N, W, fe) {
      var le = k.H;
      if (typeof fe == "function")
        throw Error(
          "useEffect CRUD overload is not enabled in this build of React.",
        );
      return le.useEffect(N, W);
    }),
    ($e.useId = function () {
      return k.H.useId();
    }),
    ($e.useImperativeHandle = function (N, W, fe) {
      return k.H.useImperativeHandle(N, W, fe);
    }),
    ($e.useInsertionEffect = function (N, W) {
      return k.H.useInsertionEffect(N, W);
    }),
    ($e.useLayoutEffect = function (N, W) {
      return k.H.useLayoutEffect(N, W);
    }),
    ($e.useMemo = function (N, W) {
      return k.H.useMemo(N, W);
    }),
    ($e.useOptimistic = function (N, W) {
      return k.H.useOptimistic(N, W);
    }),
    ($e.useReducer = function (N, W, fe) {
      return k.H.useReducer(N, W, fe);
    }),
    ($e.useRef = function (N) {
      return k.H.useRef(N);
    }),
    ($e.useState = function (N) {
      return k.H.useState(N);
    }),
    ($e.useSyncExternalStore = function (N, W, fe) {
      return k.H.useSyncExternalStore(N, W, fe);
    }),
    ($e.useTransition = function () {
      return k.H.useTransition();
    }),
    ($e.version = "19.1.1"),
    $e
  );
}
var q0;
function qm() {
  return (q0 || ((q0 = 1), (Oh.exports = KR())), Oh.exports);
}
var Ah = { exports: {} },
  cn = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var G0;
function QR() {
  if (G0) return cn;
  G0 = 1;
  var e = qm();
  function t(m) {
    var h = "https://react.dev/errors/" + m;
    if (1 < arguments.length) {
      h += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var y = 2; y < arguments.length; y++)
        h += "&args[]=" + encodeURIComponent(arguments[y]);
    }
    return (
      "Minified React error #" +
      m +
      "; visit " +
      h +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function r() {}
  var i = {
      d: {
        f: r,
        r: function () {
          throw Error(t(522));
        },
        D: r,
        C: r,
        L: r,
        m: r,
        X: r,
        S: r,
        M: r,
      },
      p: 0,
      findDOMNode: null,
    },
    s = Symbol.for("react.portal");
  function l(m, h, y) {
    var g =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: s,
      key: g == null ? null : "" + g,
      children: m,
      containerInfo: h,
      implementation: y,
    };
  }
  var c = e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function d(m, h) {
    if (m === "font") return "";
    if (typeof h == "string") return h === "use-credentials" ? h : "";
  }
  return (
    (cn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i),
    (cn.createPortal = function (m, h) {
      var y =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!h || (h.nodeType !== 1 && h.nodeType !== 9 && h.nodeType !== 11))
        throw Error(t(299));
      return l(m, h, null, y);
    }),
    (cn.flushSync = function (m) {
      var h = c.T,
        y = i.p;
      try {
        if (((c.T = null), (i.p = 2), m)) return m();
      } finally {
        ((c.T = h), (i.p = y), i.d.f());
      }
    }),
    (cn.preconnect = function (m, h) {
      typeof m == "string" &&
        (h
          ? ((h = h.crossOrigin),
            (h =
              typeof h == "string"
                ? h === "use-credentials"
                  ? h
                  : ""
                : void 0))
          : (h = null),
        i.d.C(m, h));
    }),
    (cn.prefetchDNS = function (m) {
      typeof m == "string" && i.d.D(m);
    }),
    (cn.preinit = function (m, h) {
      if (typeof m == "string" && h && typeof h.as == "string") {
        var y = h.as,
          g = d(y, h.crossOrigin),
          v = typeof h.integrity == "string" ? h.integrity : void 0,
          _ = typeof h.fetchPriority == "string" ? h.fetchPriority : void 0;
        y === "style"
          ? i.d.S(m, typeof h.precedence == "string" ? h.precedence : void 0, {
              crossOrigin: g,
              integrity: v,
              fetchPriority: _,
            })
          : y === "script" &&
            i.d.X(m, {
              crossOrigin: g,
              integrity: v,
              fetchPriority: _,
              nonce: typeof h.nonce == "string" ? h.nonce : void 0,
            });
      }
    }),
    (cn.preinitModule = function (m, h) {
      if (typeof m == "string")
        if (typeof h == "object" && h !== null) {
          if (h.as == null || h.as === "script") {
            var y = d(h.as, h.crossOrigin);
            i.d.M(m, {
              crossOrigin: y,
              integrity: typeof h.integrity == "string" ? h.integrity : void 0,
              nonce: typeof h.nonce == "string" ? h.nonce : void 0,
            });
          }
        } else h == null && i.d.M(m);
    }),
    (cn.preload = function (m, h) {
      if (
        typeof m == "string" &&
        typeof h == "object" &&
        h !== null &&
        typeof h.as == "string"
      ) {
        var y = h.as,
          g = d(y, h.crossOrigin);
        i.d.L(m, y, {
          crossOrigin: g,
          integrity: typeof h.integrity == "string" ? h.integrity : void 0,
          nonce: typeof h.nonce == "string" ? h.nonce : void 0,
          type: typeof h.type == "string" ? h.type : void 0,
          fetchPriority:
            typeof h.fetchPriority == "string" ? h.fetchPriority : void 0,
          referrerPolicy:
            typeof h.referrerPolicy == "string" ? h.referrerPolicy : void 0,
          imageSrcSet:
            typeof h.imageSrcSet == "string" ? h.imageSrcSet : void 0,
          imageSizes: typeof h.imageSizes == "string" ? h.imageSizes : void 0,
          media: typeof h.media == "string" ? h.media : void 0,
        });
      }
    }),
    (cn.preloadModule = function (m, h) {
      if (typeof m == "string")
        if (h) {
          var y = d(h.as, h.crossOrigin);
          i.d.m(m, {
            as: typeof h.as == "string" && h.as !== "script" ? h.as : void 0,
            crossOrigin: y,
            integrity: typeof h.integrity == "string" ? h.integrity : void 0,
          });
        } else i.d.m(m);
    }),
    (cn.requestFormReset = function (m) {
      i.d.r(m);
    }),
    (cn.unstable_batchedUpdates = function (m, h) {
      return m(h);
    }),
    (cn.useFormState = function (m, h, y) {
      return c.H.useFormState(m, h, y);
    }),
    (cn.useFormStatus = function () {
      return c.H.useHostTransitionStatus();
    }),
    (cn.version = "19.1.1"),
    cn
  );
}
var Y0;
function Ew() {
  if (Y0) return Ah.exports;
  Y0 = 1;
  function e() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
      } catch (t) {
        console.error(t);
      }
  }
  return (e(), (Ah.exports = QR()), Ah.exports);
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var K0;
function XR() {
  if (K0) return Ys;
  K0 = 1;
  var e = YR(),
    t = qm(),
    r = Ew();
  function i(n) {
    var a = "https://react.dev/errors/" + n;
    if (1 < arguments.length) {
      a += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var o = 2; o < arguments.length; o++)
        a += "&args[]=" + encodeURIComponent(arguments[o]);
    }
    return (
      "Minified React error #" +
      n +
      "; visit " +
      a +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function s(n) {
    return !(!n || (n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11));
  }
  function l(n) {
    var a = n,
      o = n;
    if (n.alternate) for (; a.return; ) a = a.return;
    else {
      n = a;
      do ((a = n), (a.flags & 4098) !== 0 && (o = a.return), (n = a.return));
      while (n);
    }
    return a.tag === 3 ? o : null;
  }
  function c(n) {
    if (n.tag === 13) {
      var a = n.memoizedState;
      if (
        (a === null && ((n = n.alternate), n !== null && (a = n.memoizedState)),
        a !== null)
      )
        return a.dehydrated;
    }
    return null;
  }
  function d(n) {
    if (l(n) !== n) throw Error(i(188));
  }
  function m(n) {
    var a = n.alternate;
    if (!a) {
      if (((a = l(n)), a === null)) throw Error(i(188));
      return a !== n ? null : n;
    }
    for (var o = n, u = a; ; ) {
      var f = o.return;
      if (f === null) break;
      var p = f.alternate;
      if (p === null) {
        if (((u = f.return), u !== null)) {
          o = u;
          continue;
        }
        break;
      }
      if (f.child === p.child) {
        for (p = f.child; p; ) {
          if (p === o) return (d(f), n);
          if (p === u) return (d(f), a);
          p = p.sibling;
        }
        throw Error(i(188));
      }
      if (o.return !== u.return) ((o = f), (u = p));
      else {
        for (var b = !1, R = f.child; R; ) {
          if (R === o) {
            ((b = !0), (o = f), (u = p));
            break;
          }
          if (R === u) {
            ((b = !0), (u = f), (o = p));
            break;
          }
          R = R.sibling;
        }
        if (!b) {
          for (R = p.child; R; ) {
            if (R === o) {
              ((b = !0), (o = p), (u = f));
              break;
            }
            if (R === u) {
              ((b = !0), (u = p), (o = f));
              break;
            }
            R = R.sibling;
          }
          if (!b) throw Error(i(189));
        }
      }
      if (o.alternate !== u) throw Error(i(190));
    }
    if (o.tag !== 3) throw Error(i(188));
    return o.stateNode.current === o ? n : a;
  }
  function h(n) {
    var a = n.tag;
    if (a === 5 || a === 26 || a === 27 || a === 6) return n;
    for (n = n.child; n !== null; ) {
      if (((a = h(n)), a !== null)) return a;
      n = n.sibling;
    }
    return null;
  }
  var y = Object.assign,
    g = Symbol.for("react.element"),
    v = Symbol.for("react.transitional.element"),
    _ = Symbol.for("react.portal"),
    S = Symbol.for("react.fragment"),
    E = Symbol.for("react.strict_mode"),
    x = Symbol.for("react.profiler"),
    T = Symbol.for("react.provider"),
    P = Symbol.for("react.consumer"),
    D = Symbol.for("react.context"),
    B = Symbol.for("react.forward_ref"),
    k = Symbol.for("react.suspense"),
    C = Symbol.for("react.suspense_list"),
    Y = Symbol.for("react.memo"),
    Q = Symbol.for("react.lazy"),
    me = Symbol.for("react.activity"),
    pe = Symbol.for("react.memo_cache_sentinel"),
    we = Symbol.iterator;
  function be(n) {
    return n === null || typeof n != "object"
      ? null
      : ((n = (we && n[we]) || n["@@iterator"]),
        typeof n == "function" ? n : null);
  }
  var Se = Symbol.for("react.client.reference");
  function ce(n) {
    if (n == null) return null;
    if (typeof n == "function")
      return n.$$typeof === Se ? null : n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case S:
        return "Fragment";
      case x:
        return "Profiler";
      case E:
        return "StrictMode";
      case k:
        return "Suspense";
      case C:
        return "SuspenseList";
      case me:
        return "Activity";
    }
    if (typeof n == "object")
      switch (n.$$typeof) {
        case _:
          return "Portal";
        case D:
          return (n.displayName || "Context") + ".Provider";
        case P:
          return (n._context.displayName || "Context") + ".Consumer";
        case B:
          var a = n.render;
          return (
            (n = n.displayName),
            n ||
              ((n = a.displayName || a.name || ""),
              (n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef")),
            n
          );
        case Y:
          return (
            (a = n.displayName || null),
            a !== null ? a : ce(n.type) || "Memo"
          );
        case Q:
          ((a = n._payload), (n = n._init));
          try {
            return ce(n(a));
          } catch {}
      }
    return null;
  }
  var ge = Array.isArray,
    U = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    ne = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    q = { pending: !1, data: null, method: null, action: null },
    ie = [],
    N = -1;
  function W(n) {
    return { current: n };
  }
  function fe(n) {
    0 > N || ((n.current = ie[N]), (ie[N] = null), N--);
  }
  function le(n, a) {
    (N++, (ie[N] = n.current), (n.current = a));
  }
  var ve = W(null),
    ke = W(null),
    Oe = W(null),
    Ne = W(null);
  function qe(n, a) {
    switch ((le(Oe, a), le(ke, n), le(ve, null), a.nodeType)) {
      case 9:
      case 11:
        n = (n = a.documentElement) && (n = n.namespaceURI) ? p0(n) : 0;
        break;
      default:
        if (((n = a.tagName), (a = a.namespaceURI)))
          ((a = p0(a)), (n = y0(a, n)));
        else
          switch (n) {
            case "svg":
              n = 1;
              break;
            case "math":
              n = 2;
              break;
            default:
              n = 0;
          }
    }
    (fe(ve), le(ve, n));
  }
  function gt() {
    (fe(ve), fe(ke), fe(Oe));
  }
  function at(n) {
    n.memoizedState !== null && le(Ne, n);
    var a = ve.current,
      o = y0(a, n.type);
    a !== o && (le(ke, n), le(ve, o));
  }
  function ut(n) {
    (ke.current === n && (fe(ve), fe(ke)),
      Ne.current === n && (fe(Ne), ($s._currentValue = q)));
  }
  var Xt = Object.prototype.hasOwnProperty,
    Hn = e.unstable_scheduleCallback,
    dn = e.unstable_cancelCallback,
    Vi = e.unstable_shouldYield,
    $i = e.unstable_requestPaint,
    Vt = e.unstable_now,
    es = e.unstable_getCurrentPriorityLevel,
    ni = e.unstable_ImmediatePriority,
    ri = e.unstable_UserBlockingPriority,
    In = e.unstable_NormalPriority,
    lr = e.unstable_LowPriority,
    vr = e.unstable_IdlePriority,
    ai = e.log,
    Pr = e.unstable_setDisableYieldValue,
    $t = null,
    yt = null;
  function vn(n) {
    if (
      (typeof ai == "function" && Pr(n),
      yt && typeof yt.setStrictMode == "function")
    )
      try {
        yt.setStrictMode($t, n);
      } catch {}
  }
  var Ht = Math.clz32 ? Math.clz32 : ha,
    ii = Math.log,
    Tn = Math.LN2;
  function ha(n) {
    return ((n >>>= 0), n === 0 ? 32 : (31 - ((ii(n) / Tn) | 0)) | 0);
  }
  var ur = 256,
    Fr = 4194304;
  function Zn(n) {
    var a = n & 42;
    if (a !== 0) return a;
    switch (n & -n) {
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
        return n & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return n & 62914560;
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
        return n;
    }
  }
  function Br(n, a, o) {
    var u = n.pendingLanes;
    if (u === 0) return 0;
    var f = 0,
      p = n.suspendedLanes,
      b = n.pingedLanes;
    n = n.warmLanes;
    var R = u & 134217727;
    return (
      R !== 0
        ? ((u = R & ~p),
          u !== 0
            ? (f = Zn(u))
            : ((b &= R),
              b !== 0
                ? (f = Zn(b))
                : o || ((o = R & ~n), o !== 0 && (f = Zn(o)))))
        : ((R = u & ~p),
          R !== 0
            ? (f = Zn(R))
            : b !== 0
              ? (f = Zn(b))
              : o || ((o = u & ~n), o !== 0 && (f = Zn(o)))),
      f === 0
        ? 0
        : a !== 0 &&
            a !== f &&
            (a & p) === 0 &&
            ((p = f & -f),
            (o = a & -a),
            p >= o || (p === 32 && (o & 4194048) !== 0))
          ? a
          : f
    );
  }
  function Dn(n, a) {
    return (n.pendingLanes & ~(n.suspendedLanes & ~n.pingedLanes) & a) === 0;
  }
  function oi(n, a) {
    switch (n) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return a + 250;
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
        return a + 5e3;
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
  function ma() {
    var n = ur;
    return ((ur <<= 1), (ur & 4194048) === 0 && (ur = 256), n);
  }
  function Hi() {
    var n = Fr;
    return ((Fr <<= 1), (Fr & 62914560) === 0 && (Fr = 4194304), n);
  }
  function si(n) {
    for (var a = [], o = 0; 31 > o; o++) a.push(n);
    return a;
  }
  function pa(n, a) {
    ((n.pendingLanes |= a),
      a !== 268435456 &&
        ((n.suspendedLanes = 0), (n.pingedLanes = 0), (n.warmLanes = 0)));
  }
  function li(n, a, o, u, f, p) {
    var b = n.pendingLanes;
    ((n.pendingLanes = o),
      (n.suspendedLanes = 0),
      (n.pingedLanes = 0),
      (n.warmLanes = 0),
      (n.expiredLanes &= o),
      (n.entangledLanes &= o),
      (n.errorRecoveryDisabledLanes &= o),
      (n.shellSuspendCounter = 0));
    var R = n.entanglements,
      L = n.expirationTimes,
      K = n.hiddenUpdates;
    for (o = b & ~o; 0 < o; ) {
      var re = 31 - Ht(o),
        ue = 1 << re;
      ((R[re] = 0), (L[re] = -1));
      var X = K[re];
      if (X !== null)
        for (K[re] = null, re = 0; re < X.length; re++) {
          var J = X[re];
          J !== null && (J.lane &= -536870913);
        }
      o &= ~ue;
    }
    (u !== 0 && A(n, u, 0),
      p !== 0 && f === 0 && n.tag !== 0 && (n.suspendedLanes |= p & ~(b & ~a)));
  }
  function A(n, a, o) {
    ((n.pendingLanes |= a), (n.suspendedLanes &= ~a));
    var u = 31 - Ht(a);
    ((n.entangledLanes |= a),
      (n.entanglements[u] = n.entanglements[u] | 1073741824 | (o & 4194090)));
  }
  function F(n, a) {
    var o = (n.entangledLanes |= a);
    for (n = n.entanglements; o; ) {
      var u = 31 - Ht(o),
        f = 1 << u;
      ((f & a) | (n[u] & a) && (n[u] |= a), (o &= ~f));
    }
  }
  function H(n) {
    switch (n) {
      case 2:
        n = 1;
        break;
      case 8:
        n = 4;
        break;
      case 32:
        n = 16;
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
        n = 128;
        break;
      case 268435456:
        n = 134217728;
        break;
      default:
        n = 0;
    }
    return n;
  }
  function te(n) {
    return (
      (n &= -n),
      2 < n ? (8 < n ? ((n & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function O() {
    var n = ne.p;
    return n !== 0 ? n : ((n = window.event), n === void 0 ? 32 : j0(n.type));
  }
  function M(n, a) {
    var o = ne.p;
    try {
      return ((ne.p = n), a());
    } finally {
      ne.p = o;
    }
  }
  var z = Math.random().toString(36).slice(2),
    $ = "__reactFiber$" + z,
    I = "__reactProps$" + z,
    oe = "__reactContainer$" + z,
    de = "__reactEvents$" + z,
    ye = "__reactListeners$" + z,
    Ee = "__reactHandles$" + z,
    xe = "__reactResources$" + z,
    _e = "__reactMarker$" + z;
  function Ae(n) {
    (delete n[$], delete n[I], delete n[de], delete n[ye], delete n[Ee]);
  }
  function Fe(n) {
    var a = n[$];
    if (a) return a;
    for (var o = n.parentNode; o; ) {
      if ((a = o[oe] || o[$])) {
        if (
          ((o = a.alternate),
          a.child !== null || (o !== null && o.child !== null))
        )
          for (n = w0(n); n !== null; ) {
            if ((o = n[$])) return o;
            n = w0(n);
          }
        return a;
      }
      ((n = o), (o = n.parentNode));
    }
    return null;
  }
  function Je(n) {
    if ((n = n[$] || n[oe])) {
      var a = n.tag;
      if (a === 5 || a === 6 || a === 13 || a === 26 || a === 27 || a === 3)
        return n;
    }
    return null;
  }
  function it(n) {
    var a = n.tag;
    if (a === 5 || a === 26 || a === 27 || a === 6) return n.stateNode;
    throw Error(i(33));
  }
  function vt(n) {
    var a = n[xe];
    return (
      a ||
        (a = n[xe] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      a
    );
  }
  function Pe(n) {
    n[_e] = !0;
  }
  var ct = new Set(),
    br = {};
  function Mn(n, a) {
    (hn(n, a), hn(n + "Capture", a));
  }
  function hn(n, a) {
    for (br[n] = a, n = 0; n < a.length; n++) ct.add(a[n]);
  }
  var qn = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    Ii = {},
    ya = {};
  function Vr(n) {
    return Xt.call(ya, n)
      ? !0
      : Xt.call(Ii, n)
        ? !1
        : qn.test(n)
          ? (ya[n] = !0)
          : ((Ii[n] = !0), !1);
  }
  function $r(n, a, o) {
    if (Vr(a))
      if (o === null) n.removeAttribute(a);
      else {
        switch (typeof o) {
          case "undefined":
          case "function":
          case "symbol":
            n.removeAttribute(a);
            return;
          case "boolean":
            var u = a.toLowerCase().slice(0, 5);
            if (u !== "data-" && u !== "aria-") {
              n.removeAttribute(a);
              return;
            }
        }
        n.setAttribute(a, "" + o);
      }
  }
  function Hr(n, a, o) {
    if (o === null) n.removeAttribute(a);
    else {
      switch (typeof o) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          n.removeAttribute(a);
          return;
      }
      n.setAttribute(a, "" + o);
    }
  }
  function Be(n, a, o, u) {
    if (u === null) n.removeAttribute(o);
    else {
      switch (typeof u) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          n.removeAttribute(o);
          return;
      }
      n.setAttributeNS(a, o, "" + u);
    }
  }
  var jt, Ir;
  function bn(n) {
    if (jt === void 0)
      try {
        throw Error();
      } catch (o) {
        var a = o.stack.trim().match(/\n( *(at )?)/);
        ((jt = (a && a[1]) || ""),
          (Ir =
            -1 <
            o.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < o.stack.indexOf("@")
                ? "@unknown:0:0"
                : ""));
      }
    return (
      `
` +
      jt +
      n +
      Ir
    );
  }
  var Et = !1;
  function ga(n, a) {
    if (!n || Et) return "";
    Et = !0;
    var o = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var u = {
        DetermineComponentFrameRoot: function () {
          try {
            if (a) {
              var ue = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(ue.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(ue, []);
                } catch (J) {
                  var X = J;
                }
                Reflect.construct(n, [], ue);
              } else {
                try {
                  ue.call();
                } catch (J) {
                  X = J;
                }
                n.call(ue.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (J) {
                X = J;
              }
              (ue = n()) &&
                typeof ue.catch == "function" &&
                ue.catch(function () {});
            }
          } catch (J) {
            if (J && X && typeof J.stack == "string") return [J.stack, X.stack];
          }
          return [null, null];
        },
      };
      u.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var f = Object.getOwnPropertyDescriptor(
        u.DetermineComponentFrameRoot,
        "name",
      );
      f &&
        f.configurable &&
        Object.defineProperty(u.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var p = u.DetermineComponentFrameRoot(),
        b = p[0],
        R = p[1];
      if (b && R) {
        var L = b.split(`
`),
          K = R.split(`
`);
        for (
          f = u = 0;
          u < L.length && !L[u].includes("DetermineComponentFrameRoot");

        )
          u++;
        for (; f < K.length && !K[f].includes("DetermineComponentFrameRoot"); )
          f++;
        if (u === L.length || f === K.length)
          for (
            u = L.length - 1, f = K.length - 1;
            1 <= u && 0 <= f && L[u] !== K[f];

          )
            f--;
        for (; 1 <= u && 0 <= f; u--, f--)
          if (L[u] !== K[f]) {
            if (u !== 1 || f !== 1)
              do
                if ((u--, f--, 0 > f || L[u] !== K[f])) {
                  var re =
                    `
` + L[u].replace(" at new ", " at ");
                  return (
                    n.displayName &&
                      re.includes("<anonymous>") &&
                      (re = re.replace("<anonymous>", n.displayName)),
                    re
                  );
                }
              while (1 <= u && 0 <= f);
            break;
          }
      }
    } finally {
      ((Et = !1), (Error.prepareStackTrace = o));
    }
    return (o = n ? n.displayName || n.name : "") ? bn(o) : "";
  }
  function zl(n) {
    switch (n.tag) {
      case 26:
      case 27:
      case 5:
        return bn(n.type);
      case 16:
        return bn("Lazy");
      case 13:
        return bn("Suspense");
      case 19:
        return bn("SuspenseList");
      case 0:
      case 15:
        return ga(n.type, !1);
      case 11:
        return ga(n.type.render, !1);
      case 1:
        return ga(n.type, !0);
      case 31:
        return bn("Activity");
      default:
        return "";
    }
  }
  function kl(n) {
    try {
      var a = "";
      do ((a += zl(n)), (n = n.return));
      while (n);
      return a;
    } catch (o) {
      return (
        `
Error generating stack: ` +
        o.message +
        `
` +
        o.stack
      );
    }
  }
  function Gn(n) {
    switch (typeof n) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function cy(n) {
    var a = n.type;
    return (
      (n = n.nodeName) &&
      n.toLowerCase() === "input" &&
      (a === "checkbox" || a === "radio")
    );
  }
  function FE(n) {
    var a = cy(n) ? "checked" : "value",
      o = Object.getOwnPropertyDescriptor(n.constructor.prototype, a),
      u = "" + n[a];
    if (
      !n.hasOwnProperty(a) &&
      typeof o < "u" &&
      typeof o.get == "function" &&
      typeof o.set == "function"
    ) {
      var f = o.get,
        p = o.set;
      return (
        Object.defineProperty(n, a, {
          configurable: !0,
          get: function () {
            return f.call(this);
          },
          set: function (b) {
            ((u = "" + b), p.call(this, b));
          },
        }),
        Object.defineProperty(n, a, { enumerable: o.enumerable }),
        {
          getValue: function () {
            return u;
          },
          setValue: function (b) {
            u = "" + b;
          },
          stopTracking: function () {
            ((n._valueTracker = null), delete n[a]);
          },
        }
      );
    }
  }
  function jl(n) {
    n._valueTracker || (n._valueTracker = FE(n));
  }
  function fy(n) {
    if (!n) return !1;
    var a = n._valueTracker;
    if (!a) return !0;
    var o = a.getValue(),
      u = "";
    return (
      n && (u = cy(n) ? (n.checked ? "true" : "false") : n.value),
      (n = u),
      n !== o ? (a.setValue(n), !0) : !1
    );
  }
  function Ll(n) {
    if (
      ((n = n || (typeof document < "u" ? document : void 0)), typeof n > "u")
    )
      return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  var BE = /[\n"\\]/g;
  function Yn(n) {
    return n.replace(BE, function (a) {
      return "\\" + a.charCodeAt(0).toString(16) + " ";
    });
  }
  function bf(n, a, o, u, f, p, b, R) {
    ((n.name = ""),
      b != null &&
      typeof b != "function" &&
      typeof b != "symbol" &&
      typeof b != "boolean"
        ? (n.type = b)
        : n.removeAttribute("type"),
      a != null
        ? b === "number"
          ? ((a === 0 && n.value === "") || n.value != a) &&
            (n.value = "" + Gn(a))
          : n.value !== "" + Gn(a) && (n.value = "" + Gn(a))
        : (b !== "submit" && b !== "reset") || n.removeAttribute("value"),
      a != null
        ? wf(n, b, Gn(a))
        : o != null
          ? wf(n, b, Gn(o))
          : u != null && n.removeAttribute("value"),
      f == null && p != null && (n.defaultChecked = !!p),
      f != null &&
        (n.checked = f && typeof f != "function" && typeof f != "symbol"),
      R != null &&
      typeof R != "function" &&
      typeof R != "symbol" &&
      typeof R != "boolean"
        ? (n.name = "" + Gn(R))
        : n.removeAttribute("name"));
  }
  function dy(n, a, o, u, f, p, b, R) {
    if (
      (p != null &&
        typeof p != "function" &&
        typeof p != "symbol" &&
        typeof p != "boolean" &&
        (n.type = p),
      a != null || o != null)
    ) {
      if (!((p !== "submit" && p !== "reset") || a != null)) return;
      ((o = o != null ? "" + Gn(o) : ""),
        (a = a != null ? "" + Gn(a) : o),
        R || a === n.value || (n.value = a),
        (n.defaultValue = a));
    }
    ((u = u ?? f),
      (u = typeof u != "function" && typeof u != "symbol" && !!u),
      (n.checked = R ? n.checked : !!u),
      (n.defaultChecked = !!u),
      b != null &&
        typeof b != "function" &&
        typeof b != "symbol" &&
        typeof b != "boolean" &&
        (n.name = b));
  }
  function wf(n, a, o) {
    (a === "number" && Ll(n.ownerDocument) === n) ||
      n.defaultValue === "" + o ||
      (n.defaultValue = "" + o);
  }
  function Zi(n, a, o, u) {
    if (((n = n.options), a)) {
      a = {};
      for (var f = 0; f < o.length; f++) a["$" + o[f]] = !0;
      for (o = 0; o < n.length; o++)
        ((f = a.hasOwnProperty("$" + n[o].value)),
          n[o].selected !== f && (n[o].selected = f),
          f && u && (n[o].defaultSelected = !0));
    } else {
      for (o = "" + Gn(o), a = null, f = 0; f < n.length; f++) {
        if (n[f].value === o) {
          ((n[f].selected = !0), u && (n[f].defaultSelected = !0));
          return;
        }
        a !== null || n[f].disabled || (a = n[f]);
      }
      a !== null && (a.selected = !0);
    }
  }
  function hy(n, a, o) {
    if (
      a != null &&
      ((a = "" + Gn(a)), a !== n.value && (n.value = a), o == null)
    ) {
      n.defaultValue !== a && (n.defaultValue = a);
      return;
    }
    n.defaultValue = o != null ? "" + Gn(o) : "";
  }
  function my(n, a, o, u) {
    if (a == null) {
      if (u != null) {
        if (o != null) throw Error(i(92));
        if (ge(u)) {
          if (1 < u.length) throw Error(i(93));
          u = u[0];
        }
        o = u;
      }
      (o == null && (o = ""), (a = o));
    }
    ((o = Gn(a)),
      (n.defaultValue = o),
      (u = n.textContent),
      u === o && u !== "" && u !== null && (n.value = u));
  }
  function qi(n, a) {
    if (a) {
      var o = n.firstChild;
      if (o && o === n.lastChild && o.nodeType === 3) {
        o.nodeValue = a;
        return;
      }
    }
    n.textContent = a;
  }
  var VE = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " ",
    ),
  );
  function py(n, a, o) {
    var u = a.indexOf("--") === 0;
    o == null || typeof o == "boolean" || o === ""
      ? u
        ? n.setProperty(a, "")
        : a === "float"
          ? (n.cssFloat = "")
          : (n[a] = "")
      : u
        ? n.setProperty(a, o)
        : typeof o != "number" || o === 0 || VE.has(a)
          ? a === "float"
            ? (n.cssFloat = o)
            : (n[a] = ("" + o).trim())
          : (n[a] = o + "px");
  }
  function yy(n, a, o) {
    if (a != null && typeof a != "object") throw Error(i(62));
    if (((n = n.style), o != null)) {
      for (var u in o)
        !o.hasOwnProperty(u) ||
          (a != null && a.hasOwnProperty(u)) ||
          (u.indexOf("--") === 0
            ? n.setProperty(u, "")
            : u === "float"
              ? (n.cssFloat = "")
              : (n[u] = ""));
      for (var f in a)
        ((u = a[f]), a.hasOwnProperty(f) && o[f] !== u && py(n, f, u));
    } else for (var p in a) a.hasOwnProperty(p) && py(n, p, a[p]);
  }
  function Sf(n) {
    if (n.indexOf("-") === -1) return !1;
    switch (n) {
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
  var $E = new Map([
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
    HE =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Ul(n) {
    return HE.test("" + n)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : n;
  }
  var _f = null;
  function Ef(n) {
    return (
      (n = n.target || n.srcElement || window),
      n.correspondingUseElement && (n = n.correspondingUseElement),
      n.nodeType === 3 ? n.parentNode : n
    );
  }
  var Gi = null,
    Yi = null;
  function gy(n) {
    var a = Je(n);
    if (a && (n = a.stateNode)) {
      var o = n[I] || null;
      e: switch (((n = a.stateNode), a.type)) {
        case "input":
          if (
            (bf(
              n,
              o.value,
              o.defaultValue,
              o.defaultValue,
              o.checked,
              o.defaultChecked,
              o.type,
              o.name,
            ),
            (a = o.name),
            o.type === "radio" && a != null)
          ) {
            for (o = n; o.parentNode; ) o = o.parentNode;
            for (
              o = o.querySelectorAll(
                'input[name="' + Yn("" + a) + '"][type="radio"]',
              ),
                a = 0;
              a < o.length;
              a++
            ) {
              var u = o[a];
              if (u !== n && u.form === n.form) {
                var f = u[I] || null;
                if (!f) throw Error(i(90));
                bf(
                  u,
                  f.value,
                  f.defaultValue,
                  f.defaultValue,
                  f.checked,
                  f.defaultChecked,
                  f.type,
                  f.name,
                );
              }
            }
            for (a = 0; a < o.length; a++)
              ((u = o[a]), u.form === n.form && fy(u));
          }
          break e;
        case "textarea":
          hy(n, o.value, o.defaultValue);
          break e;
        case "select":
          ((a = o.value), a != null && Zi(n, !!o.multiple, a, !1));
      }
    }
  }
  var xf = !1;
  function vy(n, a, o) {
    if (xf) return n(a, o);
    xf = !0;
    try {
      var u = n(a);
      return u;
    } finally {
      if (
        ((xf = !1),
        (Gi !== null || Yi !== null) &&
          (_u(), Gi && ((a = Gi), (n = Yi), (Yi = Gi = null), gy(a), n)))
      )
        for (a = 0; a < n.length; a++) gy(n[a]);
    }
  }
  function ts(n, a) {
    var o = n.stateNode;
    if (o === null) return null;
    var u = o[I] || null;
    if (u === null) return null;
    o = u[a];
    e: switch (a) {
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
        ((u = !u.disabled) ||
          ((n = n.type),
          (u = !(
            n === "button" ||
            n === "input" ||
            n === "select" ||
            n === "textarea"
          ))),
          (n = !u));
        break e;
      default:
        n = !1;
    }
    if (n) return null;
    if (o && typeof o != "function") throw Error(i(231, a, typeof o));
    return o;
  }
  var Zr = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    Rf = !1;
  if (Zr)
    try {
      var ns = {};
      (Object.defineProperty(ns, "passive", {
        get: function () {
          Rf = !0;
        },
      }),
        window.addEventListener("test", ns, ns),
        window.removeEventListener("test", ns, ns));
    } catch {
      Rf = !1;
    }
  var va = null,
    Of = null,
    Pl = null;
  function by() {
    if (Pl) return Pl;
    var n,
      a = Of,
      o = a.length,
      u,
      f = "value" in va ? va.value : va.textContent,
      p = f.length;
    for (n = 0; n < o && a[n] === f[n]; n++);
    var b = o - n;
    for (u = 1; u <= b && a[o - u] === f[p - u]; u++);
    return (Pl = f.slice(n, 1 < u ? 1 - u : void 0));
  }
  function Fl(n) {
    var a = n.keyCode;
    return (
      "charCode" in n
        ? ((n = n.charCode), n === 0 && a === 13 && (n = 13))
        : (n = a),
      n === 10 && (n = 13),
      32 <= n || n === 13 ? n : 0
    );
  }
  function Bl() {
    return !0;
  }
  function wy() {
    return !1;
  }
  function wn(n) {
    function a(o, u, f, p, b) {
      ((this._reactName = o),
        (this._targetInst = f),
        (this.type = u),
        (this.nativeEvent = p),
        (this.target = b),
        (this.currentTarget = null));
      for (var R in n)
        n.hasOwnProperty(R) && ((o = n[R]), (this[R] = o ? o(p) : p[R]));
      return (
        (this.isDefaultPrevented = (
          p.defaultPrevented != null ? p.defaultPrevented : p.returnValue === !1
        )
          ? Bl
          : wy),
        (this.isPropagationStopped = wy),
        this
      );
    }
    return (
      y(a.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var o = this.nativeEvent;
          o &&
            (o.preventDefault
              ? o.preventDefault()
              : typeof o.returnValue != "unknown" && (o.returnValue = !1),
            (this.isDefaultPrevented = Bl));
        },
        stopPropagation: function () {
          var o = this.nativeEvent;
          o &&
            (o.stopPropagation
              ? o.stopPropagation()
              : typeof o.cancelBubble != "unknown" && (o.cancelBubble = !0),
            (this.isPropagationStopped = Bl));
        },
        persist: function () {},
        isPersistent: Bl,
      }),
      a
    );
  }
  var ui = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (n) {
        return n.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Vl = wn(ui),
    rs = y({}, ui, { view: 0, detail: 0 }),
    IE = wn(rs),
    Af,
    Cf,
    as,
    $l = y({}, rs, {
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
      getModifierState: Df,
      button: 0,
      buttons: 0,
      relatedTarget: function (n) {
        return n.relatedTarget === void 0
          ? n.fromElement === n.srcElement
            ? n.toElement
            : n.fromElement
          : n.relatedTarget;
      },
      movementX: function (n) {
        return "movementX" in n
          ? n.movementX
          : (n !== as &&
              (as && n.type === "mousemove"
                ? ((Af = n.screenX - as.screenX), (Cf = n.screenY - as.screenY))
                : (Cf = Af = 0),
              (as = n)),
            Af);
      },
      movementY: function (n) {
        return "movementY" in n ? n.movementY : Cf;
      },
    }),
    Sy = wn($l),
    ZE = y({}, $l, { dataTransfer: 0 }),
    qE = wn(ZE),
    GE = y({}, rs, { relatedTarget: 0 }),
    Tf = wn(GE),
    YE = y({}, ui, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    KE = wn(YE),
    QE = y({}, ui, {
      clipboardData: function (n) {
        return "clipboardData" in n ? n.clipboardData : window.clipboardData;
      },
    }),
    XE = wn(QE),
    JE = y({}, ui, { data: 0 }),
    _y = wn(JE),
    WE = {
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
    ex = {
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
    tx = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function nx(n) {
    var a = this.nativeEvent;
    return a.getModifierState
      ? a.getModifierState(n)
      : (n = tx[n])
        ? !!a[n]
        : !1;
  }
  function Df() {
    return nx;
  }
  var rx = y({}, rs, {
      key: function (n) {
        if (n.key) {
          var a = WE[n.key] || n.key;
          if (a !== "Unidentified") return a;
        }
        return n.type === "keypress"
          ? ((n = Fl(n)), n === 13 ? "Enter" : String.fromCharCode(n))
          : n.type === "keydown" || n.type === "keyup"
            ? ex[n.keyCode] || "Unidentified"
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
      getModifierState: Df,
      charCode: function (n) {
        return n.type === "keypress" ? Fl(n) : 0;
      },
      keyCode: function (n) {
        return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
      },
      which: function (n) {
        return n.type === "keypress"
          ? Fl(n)
          : n.type === "keydown" || n.type === "keyup"
            ? n.keyCode
            : 0;
      },
    }),
    ax = wn(rx),
    ix = y({}, $l, {
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
    Ey = wn(ix),
    ox = y({}, rs, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Df,
    }),
    sx = wn(ox),
    lx = y({}, ui, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    ux = wn(lx),
    cx = y({}, $l, {
      deltaX: function (n) {
        return "deltaX" in n
          ? n.deltaX
          : "wheelDeltaX" in n
            ? -n.wheelDeltaX
            : 0;
      },
      deltaY: function (n) {
        return "deltaY" in n
          ? n.deltaY
          : "wheelDeltaY" in n
            ? -n.wheelDeltaY
            : "wheelDelta" in n
              ? -n.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    fx = wn(cx),
    dx = y({}, ui, { newState: 0, oldState: 0 }),
    hx = wn(dx),
    mx = [9, 13, 27, 32],
    Mf = Zr && "CompositionEvent" in window,
    is = null;
  Zr && "documentMode" in document && (is = document.documentMode);
  var px = Zr && "TextEvent" in window && !is,
    xy = Zr && (!Mf || (is && 8 < is && 11 >= is)),
    Ry = " ",
    Oy = !1;
  function Ay(n, a) {
    switch (n) {
      case "keyup":
        return mx.indexOf(a.keyCode) !== -1;
      case "keydown":
        return a.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Cy(n) {
    return (
      (n = n.detail),
      typeof n == "object" && "data" in n ? n.data : null
    );
  }
  var Ki = !1;
  function yx(n, a) {
    switch (n) {
      case "compositionend":
        return Cy(a);
      case "keypress":
        return a.which !== 32 ? null : ((Oy = !0), Ry);
      case "textInput":
        return ((n = a.data), n === Ry && Oy ? null : n);
      default:
        return null;
    }
  }
  function gx(n, a) {
    if (Ki)
      return n === "compositionend" || (!Mf && Ay(n, a))
        ? ((n = by()), (Pl = Of = va = null), (Ki = !1), n)
        : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(a.ctrlKey || a.altKey || a.metaKey) || (a.ctrlKey && a.altKey)) {
          if (a.char && 1 < a.char.length) return a.char;
          if (a.which) return String.fromCharCode(a.which);
        }
        return null;
      case "compositionend":
        return xy && a.locale !== "ko" ? null : a.data;
      default:
        return null;
    }
  }
  var vx = {
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
  function Ty(n) {
    var a = n && n.nodeName && n.nodeName.toLowerCase();
    return a === "input" ? !!vx[n.type] : a === "textarea";
  }
  function Dy(n, a, o, u) {
    (Gi ? (Yi ? Yi.push(u) : (Yi = [u])) : (Gi = u),
      (a = Cu(a, "onChange")),
      0 < a.length &&
        ((o = new Vl("onChange", "change", null, o, u)),
        n.push({ event: o, listeners: a })));
  }
  var os = null,
    ss = null;
  function bx(n) {
    c0(n, 0);
  }
  function Hl(n) {
    var a = it(n);
    if (fy(a)) return n;
  }
  function My(n, a) {
    if (n === "change") return a;
  }
  var Ny = !1;
  if (Zr) {
    var Nf;
    if (Zr) {
      var zf = "oninput" in document;
      if (!zf) {
        var zy = document.createElement("div");
        (zy.setAttribute("oninput", "return;"),
          (zf = typeof zy.oninput == "function"));
      }
      Nf = zf;
    } else Nf = !1;
    Ny = Nf && (!document.documentMode || 9 < document.documentMode);
  }
  function ky() {
    os && (os.detachEvent("onpropertychange", jy), (ss = os = null));
  }
  function jy(n) {
    if (n.propertyName === "value" && Hl(ss)) {
      var a = [];
      (Dy(a, ss, n, Ef(n)), vy(bx, a));
    }
  }
  function wx(n, a, o) {
    n === "focusin"
      ? (ky(), (os = a), (ss = o), os.attachEvent("onpropertychange", jy))
      : n === "focusout" && ky();
  }
  function Sx(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown")
      return Hl(ss);
  }
  function _x(n, a) {
    if (n === "click") return Hl(a);
  }
  function Ex(n, a) {
    if (n === "input" || n === "change") return Hl(a);
  }
  function xx(n, a) {
    return (n === a && (n !== 0 || 1 / n === 1 / a)) || (n !== n && a !== a);
  }
  var Nn = typeof Object.is == "function" ? Object.is : xx;
  function ls(n, a) {
    if (Nn(n, a)) return !0;
    if (
      typeof n != "object" ||
      n === null ||
      typeof a != "object" ||
      a === null
    )
      return !1;
    var o = Object.keys(n),
      u = Object.keys(a);
    if (o.length !== u.length) return !1;
    for (u = 0; u < o.length; u++) {
      var f = o[u];
      if (!Xt.call(a, f) || !Nn(n[f], a[f])) return !1;
    }
    return !0;
  }
  function Ly(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function Uy(n, a) {
    var o = Ly(n);
    n = 0;
    for (var u; o; ) {
      if (o.nodeType === 3) {
        if (((u = n + o.textContent.length), n <= a && u >= a))
          return { node: o, offset: a - n };
        n = u;
      }
      e: {
        for (; o; ) {
          if (o.nextSibling) {
            o = o.nextSibling;
            break e;
          }
          o = o.parentNode;
        }
        o = void 0;
      }
      o = Ly(o);
    }
  }
  function Py(n, a) {
    return n && a
      ? n === a
        ? !0
        : n && n.nodeType === 3
          ? !1
          : a && a.nodeType === 3
            ? Py(n, a.parentNode)
            : "contains" in n
              ? n.contains(a)
              : n.compareDocumentPosition
                ? !!(n.compareDocumentPosition(a) & 16)
                : !1
      : !1;
  }
  function Fy(n) {
    n =
      n != null &&
      n.ownerDocument != null &&
      n.ownerDocument.defaultView != null
        ? n.ownerDocument.defaultView
        : window;
    for (var a = Ll(n.document); a instanceof n.HTMLIFrameElement; ) {
      try {
        var o = typeof a.contentWindow.location.href == "string";
      } catch {
        o = !1;
      }
      if (o) n = a.contentWindow;
      else break;
      a = Ll(n.document);
    }
    return a;
  }
  function kf(n) {
    var a = n && n.nodeName && n.nodeName.toLowerCase();
    return (
      a &&
      ((a === "input" &&
        (n.type === "text" ||
          n.type === "search" ||
          n.type === "tel" ||
          n.type === "url" ||
          n.type === "password")) ||
        a === "textarea" ||
        n.contentEditable === "true")
    );
  }
  var Rx = Zr && "documentMode" in document && 11 >= document.documentMode,
    Qi = null,
    jf = null,
    us = null,
    Lf = !1;
  function By(n, a, o) {
    var u =
      o.window === o ? o.document : o.nodeType === 9 ? o : o.ownerDocument;
    Lf ||
      Qi == null ||
      Qi !== Ll(u) ||
      ((u = Qi),
      "selectionStart" in u && kf(u)
        ? (u = { start: u.selectionStart, end: u.selectionEnd })
        : ((u = (
            (u.ownerDocument && u.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (u = {
            anchorNode: u.anchorNode,
            anchorOffset: u.anchorOffset,
            focusNode: u.focusNode,
            focusOffset: u.focusOffset,
          })),
      (us && ls(us, u)) ||
        ((us = u),
        (u = Cu(jf, "onSelect")),
        0 < u.length &&
          ((a = new Vl("onSelect", "select", null, a, o)),
          n.push({ event: a, listeners: u }),
          (a.target = Qi))));
  }
  function ci(n, a) {
    var o = {};
    return (
      (o[n.toLowerCase()] = a.toLowerCase()),
      (o["Webkit" + n] = "webkit" + a),
      (o["Moz" + n] = "moz" + a),
      o
    );
  }
  var Xi = {
      animationend: ci("Animation", "AnimationEnd"),
      animationiteration: ci("Animation", "AnimationIteration"),
      animationstart: ci("Animation", "AnimationStart"),
      transitionrun: ci("Transition", "TransitionRun"),
      transitionstart: ci("Transition", "TransitionStart"),
      transitioncancel: ci("Transition", "TransitionCancel"),
      transitionend: ci("Transition", "TransitionEnd"),
    },
    Uf = {},
    Vy = {};
  Zr &&
    ((Vy = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Xi.animationend.animation,
      delete Xi.animationiteration.animation,
      delete Xi.animationstart.animation),
    "TransitionEvent" in window || delete Xi.transitionend.transition);
  function fi(n) {
    if (Uf[n]) return Uf[n];
    if (!Xi[n]) return n;
    var a = Xi[n],
      o;
    for (o in a) if (a.hasOwnProperty(o) && o in Vy) return (Uf[n] = a[o]);
    return n;
  }
  var $y = fi("animationend"),
    Hy = fi("animationiteration"),
    Iy = fi("animationstart"),
    Ox = fi("transitionrun"),
    Ax = fi("transitionstart"),
    Cx = fi("transitioncancel"),
    Zy = fi("transitionend"),
    qy = new Map(),
    Pf =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  Pf.push("scrollEnd");
  function cr(n, a) {
    (qy.set(n, a), Mn(a, [n]));
  }
  var Gy = new WeakMap();
  function Kn(n, a) {
    if (typeof n == "object" && n !== null) {
      var o = Gy.get(n);
      return o !== void 0
        ? o
        : ((a = { value: n, source: a, stack: kl(a) }), Gy.set(n, a), a);
    }
    return { value: n, source: a, stack: kl(a) };
  }
  var Qn = [],
    Ji = 0,
    Ff = 0;
  function Il() {
    for (var n = Ji, a = (Ff = Ji = 0); a < n; ) {
      var o = Qn[a];
      Qn[a++] = null;
      var u = Qn[a];
      Qn[a++] = null;
      var f = Qn[a];
      Qn[a++] = null;
      var p = Qn[a];
      if (((Qn[a++] = null), u !== null && f !== null)) {
        var b = u.pending;
        (b === null ? (f.next = f) : ((f.next = b.next), (b.next = f)),
          (u.pending = f));
      }
      p !== 0 && Yy(o, f, p);
    }
  }
  function Zl(n, a, o, u) {
    ((Qn[Ji++] = n),
      (Qn[Ji++] = a),
      (Qn[Ji++] = o),
      (Qn[Ji++] = u),
      (Ff |= u),
      (n.lanes |= u),
      (n = n.alternate),
      n !== null && (n.lanes |= u));
  }
  function Bf(n, a, o, u) {
    return (Zl(n, a, o, u), ql(n));
  }
  function Wi(n, a) {
    return (Zl(n, null, null, a), ql(n));
  }
  function Yy(n, a, o) {
    n.lanes |= o;
    var u = n.alternate;
    u !== null && (u.lanes |= o);
    for (var f = !1, p = n.return; p !== null; )
      ((p.childLanes |= o),
        (u = p.alternate),
        u !== null && (u.childLanes |= o),
        p.tag === 22 &&
          ((n = p.stateNode), n === null || n._visibility & 1 || (f = !0)),
        (n = p),
        (p = p.return));
    return n.tag === 3
      ? ((p = n.stateNode),
        f &&
          a !== null &&
          ((f = 31 - Ht(o)),
          (n = p.hiddenUpdates),
          (u = n[f]),
          u === null ? (n[f] = [a]) : u.push(a),
          (a.lane = o | 536870912)),
        p)
      : null;
  }
  function ql(n) {
    if (50 < ks) throw ((ks = 0), (qd = null), Error(i(185)));
    for (var a = n.return; a !== null; ) ((n = a), (a = n.return));
    return n.tag === 3 ? n.stateNode : null;
  }
  var eo = {};
  function Tx(n, a, o, u) {
    ((this.tag = n),
      (this.key = o),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = a),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = u),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function zn(n, a, o, u) {
    return new Tx(n, a, o, u);
  }
  function Vf(n) {
    return ((n = n.prototype), !(!n || !n.isReactComponent));
  }
  function qr(n, a) {
    var o = n.alternate;
    return (
      o === null
        ? ((o = zn(n.tag, a, n.key, n.mode)),
          (o.elementType = n.elementType),
          (o.type = n.type),
          (o.stateNode = n.stateNode),
          (o.alternate = n),
          (n.alternate = o))
        : ((o.pendingProps = a),
          (o.type = n.type),
          (o.flags = 0),
          (o.subtreeFlags = 0),
          (o.deletions = null)),
      (o.flags = n.flags & 65011712),
      (o.childLanes = n.childLanes),
      (o.lanes = n.lanes),
      (o.child = n.child),
      (o.memoizedProps = n.memoizedProps),
      (o.memoizedState = n.memoizedState),
      (o.updateQueue = n.updateQueue),
      (a = n.dependencies),
      (o.dependencies =
        a === null ? null : { lanes: a.lanes, firstContext: a.firstContext }),
      (o.sibling = n.sibling),
      (o.index = n.index),
      (o.ref = n.ref),
      (o.refCleanup = n.refCleanup),
      o
    );
  }
  function Ky(n, a) {
    n.flags &= 65011714;
    var o = n.alternate;
    return (
      o === null
        ? ((n.childLanes = 0),
          (n.lanes = a),
          (n.child = null),
          (n.subtreeFlags = 0),
          (n.memoizedProps = null),
          (n.memoizedState = null),
          (n.updateQueue = null),
          (n.dependencies = null),
          (n.stateNode = null))
        : ((n.childLanes = o.childLanes),
          (n.lanes = o.lanes),
          (n.child = o.child),
          (n.subtreeFlags = 0),
          (n.deletions = null),
          (n.memoizedProps = o.memoizedProps),
          (n.memoizedState = o.memoizedState),
          (n.updateQueue = o.updateQueue),
          (n.type = o.type),
          (a = o.dependencies),
          (n.dependencies =
            a === null
              ? null
              : { lanes: a.lanes, firstContext: a.firstContext })),
      n
    );
  }
  function Gl(n, a, o, u, f, p) {
    var b = 0;
    if (((u = n), typeof n == "function")) Vf(n) && (b = 1);
    else if (typeof n == "string")
      b = MR(n, o, ve.current)
        ? 26
        : n === "html" || n === "head" || n === "body"
          ? 27
          : 5;
    else
      e: switch (n) {
        case me:
          return (
            (n = zn(31, o, a, f)),
            (n.elementType = me),
            (n.lanes = p),
            n
          );
        case S:
          return di(o.children, f, p, a);
        case E:
          ((b = 8), (f |= 24));
          break;
        case x:
          return (
            (n = zn(12, o, a, f | 2)),
            (n.elementType = x),
            (n.lanes = p),
            n
          );
        case k:
          return ((n = zn(13, o, a, f)), (n.elementType = k), (n.lanes = p), n);
        case C:
          return ((n = zn(19, o, a, f)), (n.elementType = C), (n.lanes = p), n);
        default:
          if (typeof n == "object" && n !== null)
            switch (n.$$typeof) {
              case T:
              case D:
                b = 10;
                break e;
              case P:
                b = 9;
                break e;
              case B:
                b = 11;
                break e;
              case Y:
                b = 14;
                break e;
              case Q:
                ((b = 16), (u = null));
                break e;
            }
          ((b = 29),
            (o = Error(i(130, n === null ? "null" : typeof n, ""))),
            (u = null));
      }
    return (
      (a = zn(b, o, a, f)),
      (a.elementType = n),
      (a.type = u),
      (a.lanes = p),
      a
    );
  }
  function di(n, a, o, u) {
    return ((n = zn(7, n, u, a)), (n.lanes = o), n);
  }
  function $f(n, a, o) {
    return ((n = zn(6, n, null, a)), (n.lanes = o), n);
  }
  function Hf(n, a, o) {
    return (
      (a = zn(4, n.children !== null ? n.children : [], n.key, a)),
      (a.lanes = o),
      (a.stateNode = {
        containerInfo: n.containerInfo,
        pendingChildren: null,
        implementation: n.implementation,
      }),
      a
    );
  }
  var to = [],
    no = 0,
    Yl = null,
    Kl = 0,
    Xn = [],
    Jn = 0,
    hi = null,
    Gr = 1,
    Yr = "";
  function mi(n, a) {
    ((to[no++] = Kl), (to[no++] = Yl), (Yl = n), (Kl = a));
  }
  function Qy(n, a, o) {
    ((Xn[Jn++] = Gr), (Xn[Jn++] = Yr), (Xn[Jn++] = hi), (hi = n));
    var u = Gr;
    n = Yr;
    var f = 32 - Ht(u) - 1;
    ((u &= ~(1 << f)), (o += 1));
    var p = 32 - Ht(a) + f;
    if (30 < p) {
      var b = f - (f % 5);
      ((p = (u & ((1 << b) - 1)).toString(32)),
        (u >>= b),
        (f -= b),
        (Gr = (1 << (32 - Ht(a) + f)) | (o << f) | u),
        (Yr = p + n));
    } else ((Gr = (1 << p) | (o << f) | u), (Yr = n));
  }
  function If(n) {
    n.return !== null && (mi(n, 1), Qy(n, 1, 0));
  }
  function Zf(n) {
    for (; n === Yl; )
      ((Yl = to[--no]), (to[no] = null), (Kl = to[--no]), (to[no] = null));
    for (; n === hi; )
      ((hi = Xn[--Jn]),
        (Xn[Jn] = null),
        (Yr = Xn[--Jn]),
        (Xn[Jn] = null),
        (Gr = Xn[--Jn]),
        (Xn[Jn] = null));
  }
  var mn = null,
    Ot = null,
    nt = !1,
    pi = null,
    wr = !1,
    qf = Error(i(519));
  function yi(n) {
    var a = Error(i(418, ""));
    throw (ds(Kn(a, n)), qf);
  }
  function Xy(n) {
    var a = n.stateNode,
      o = n.type,
      u = n.memoizedProps;
    switch (((a[$] = n), (a[I] = u), o)) {
      case "dialog":
        (Qe("cancel", a), Qe("close", a));
        break;
      case "iframe":
      case "object":
      case "embed":
        Qe("load", a);
        break;
      case "video":
      case "audio":
        for (o = 0; o < Ls.length; o++) Qe(Ls[o], a);
        break;
      case "source":
        Qe("error", a);
        break;
      case "img":
      case "image":
      case "link":
        (Qe("error", a), Qe("load", a));
        break;
      case "details":
        Qe("toggle", a);
        break;
      case "input":
        (Qe("invalid", a),
          dy(
            a,
            u.value,
            u.defaultValue,
            u.checked,
            u.defaultChecked,
            u.type,
            u.name,
            !0,
          ),
          jl(a));
        break;
      case "select":
        Qe("invalid", a);
        break;
      case "textarea":
        (Qe("invalid", a), my(a, u.value, u.defaultValue, u.children), jl(a));
    }
    ((o = u.children),
      (typeof o != "string" && typeof o != "number" && typeof o != "bigint") ||
      a.textContent === "" + o ||
      u.suppressHydrationWarning === !0 ||
      m0(a.textContent, o)
        ? (u.popover != null && (Qe("beforetoggle", a), Qe("toggle", a)),
          u.onScroll != null && Qe("scroll", a),
          u.onScrollEnd != null && Qe("scrollend", a),
          u.onClick != null && (a.onclick = Tu),
          (a = !0))
        : (a = !1),
      a || yi(n));
  }
  function Jy(n) {
    for (mn = n.return; mn; )
      switch (mn.tag) {
        case 5:
        case 13:
          wr = !1;
          return;
        case 27:
        case 3:
          wr = !0;
          return;
        default:
          mn = mn.return;
      }
  }
  function cs(n) {
    if (n !== mn) return !1;
    if (!nt) return (Jy(n), (nt = !0), !1);
    var a = n.tag,
      o;
    if (
      ((o = a !== 3 && a !== 27) &&
        ((o = a === 5) &&
          ((o = n.type),
          (o =
            !(o !== "form" && o !== "button") || lh(n.type, n.memoizedProps))),
        (o = !o)),
      o && Ot && yi(n),
      Jy(n),
      a === 13)
    ) {
      if (((n = n.memoizedState), (n = n !== null ? n.dehydrated : null), !n))
        throw Error(i(317));
      e: {
        for (n = n.nextSibling, a = 0; n; ) {
          if (n.nodeType === 8)
            if (((o = n.data), o === "/$")) {
              if (a === 0) {
                Ot = dr(n.nextSibling);
                break e;
              }
              a--;
            } else (o !== "$" && o !== "$!" && o !== "$?") || a++;
          n = n.nextSibling;
        }
        Ot = null;
      }
    } else
      a === 27
        ? ((a = Ot), ka(n.type) ? ((n = dh), (dh = null), (Ot = n)) : (Ot = a))
        : (Ot = mn ? dr(n.stateNode.nextSibling) : null);
    return !0;
  }
  function fs() {
    ((Ot = mn = null), (nt = !1));
  }
  function Wy() {
    var n = pi;
    return (
      n !== null &&
        (En === null ? (En = n) : En.push.apply(En, n), (pi = null)),
      n
    );
  }
  function ds(n) {
    pi === null ? (pi = [n]) : pi.push(n);
  }
  var Gf = W(null),
    gi = null,
    Kr = null;
  function ba(n, a, o) {
    (le(Gf, a._currentValue), (a._currentValue = o));
  }
  function Qr(n) {
    ((n._currentValue = Gf.current), fe(Gf));
  }
  function Yf(n, a, o) {
    for (; n !== null; ) {
      var u = n.alternate;
      if (
        ((n.childLanes & a) !== a
          ? ((n.childLanes |= a), u !== null && (u.childLanes |= a))
          : u !== null && (u.childLanes & a) !== a && (u.childLanes |= a),
        n === o)
      )
        break;
      n = n.return;
    }
  }
  function Kf(n, a, o, u) {
    var f = n.child;
    for (f !== null && (f.return = n); f !== null; ) {
      var p = f.dependencies;
      if (p !== null) {
        var b = f.child;
        p = p.firstContext;
        e: for (; p !== null; ) {
          var R = p;
          p = f;
          for (var L = 0; L < a.length; L++)
            if (R.context === a[L]) {
              ((p.lanes |= o),
                (R = p.alternate),
                R !== null && (R.lanes |= o),
                Yf(p.return, o, n),
                u || (b = null));
              break e;
            }
          p = R.next;
        }
      } else if (f.tag === 18) {
        if (((b = f.return), b === null)) throw Error(i(341));
        ((b.lanes |= o),
          (p = b.alternate),
          p !== null && (p.lanes |= o),
          Yf(b, o, n),
          (b = null));
      } else b = f.child;
      if (b !== null) b.return = f;
      else
        for (b = f; b !== null; ) {
          if (b === n) {
            b = null;
            break;
          }
          if (((f = b.sibling), f !== null)) {
            ((f.return = b.return), (b = f));
            break;
          }
          b = b.return;
        }
      f = b;
    }
  }
  function hs(n, a, o, u) {
    n = null;
    for (var f = a, p = !1; f !== null; ) {
      if (!p) {
        if ((f.flags & 524288) !== 0) p = !0;
        else if ((f.flags & 262144) !== 0) break;
      }
      if (f.tag === 10) {
        var b = f.alternate;
        if (b === null) throw Error(i(387));
        if (((b = b.memoizedProps), b !== null)) {
          var R = f.type;
          Nn(f.pendingProps.value, b.value) ||
            (n !== null ? n.push(R) : (n = [R]));
        }
      } else if (f === Ne.current) {
        if (((b = f.alternate), b === null)) throw Error(i(387));
        b.memoizedState.memoizedState !== f.memoizedState.memoizedState &&
          (n !== null ? n.push($s) : (n = [$s]));
      }
      f = f.return;
    }
    (n !== null && Kf(a, n, o, u), (a.flags |= 262144));
  }
  function Ql(n) {
    for (n = n.firstContext; n !== null; ) {
      if (!Nn(n.context._currentValue, n.memoizedValue)) return !0;
      n = n.next;
    }
    return !1;
  }
  function vi(n) {
    ((gi = n),
      (Kr = null),
      (n = n.dependencies),
      n !== null && (n.firstContext = null));
  }
  function un(n) {
    return eg(gi, n);
  }
  function Xl(n, a) {
    return (gi === null && vi(n), eg(n, a));
  }
  function eg(n, a) {
    var o = a._currentValue;
    if (((a = { context: a, memoizedValue: o, next: null }), Kr === null)) {
      if (n === null) throw Error(i(308));
      ((Kr = a),
        (n.dependencies = { lanes: 0, firstContext: a }),
        (n.flags |= 524288));
    } else Kr = Kr.next = a;
    return o;
  }
  var Dx =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var n = [],
              a = (this.signal = {
                aborted: !1,
                addEventListener: function (o, u) {
                  n.push(u);
                },
              });
            this.abort = function () {
              ((a.aborted = !0),
                n.forEach(function (o) {
                  return o();
                }));
            };
          },
    Mx = e.unstable_scheduleCallback,
    Nx = e.unstable_NormalPriority,
    It = {
      $$typeof: D,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Qf() {
    return { controller: new Dx(), data: new Map(), refCount: 0 };
  }
  function ms(n) {
    (n.refCount--,
      n.refCount === 0 &&
        Mx(Nx, function () {
          n.controller.abort();
        }));
  }
  var ps = null,
    Xf = 0,
    ro = 0,
    ao = null;
  function zx(n, a) {
    if (ps === null) {
      var o = (ps = []);
      ((Xf = 0),
        (ro = Wd()),
        (ao = {
          status: "pending",
          value: void 0,
          then: function (u) {
            o.push(u);
          },
        }));
    }
    return (Xf++, a.then(tg, tg), a);
  }
  function tg() {
    if (--Xf === 0 && ps !== null) {
      ao !== null && (ao.status = "fulfilled");
      var n = ps;
      ((ps = null), (ro = 0), (ao = null));
      for (var a = 0; a < n.length; a++) (0, n[a])();
    }
  }
  function kx(n, a) {
    var o = [],
      u = {
        status: "pending",
        value: null,
        reason: null,
        then: function (f) {
          o.push(f);
        },
      };
    return (
      n.then(
        function () {
          ((u.status = "fulfilled"), (u.value = a));
          for (var f = 0; f < o.length; f++) (0, o[f])(a);
        },
        function (f) {
          for (u.status = "rejected", u.reason = f, f = 0; f < o.length; f++)
            (0, o[f])(void 0);
        },
      ),
      u
    );
  }
  var ng = U.S;
  U.S = function (n, a) {
    (typeof a == "object" &&
      a !== null &&
      typeof a.then == "function" &&
      zx(n, a),
      ng !== null && ng(n, a));
  };
  var bi = W(null);
  function Jf() {
    var n = bi.current;
    return n !== null ? n : pt.pooledCache;
  }
  function Jl(n, a) {
    a === null ? le(bi, bi.current) : le(bi, a.pool);
  }
  function rg() {
    var n = Jf();
    return n === null ? null : { parent: It._currentValue, pool: n };
  }
  var ys = Error(i(460)),
    ag = Error(i(474)),
    Wl = Error(i(542)),
    Wf = { then: function () {} };
  function ig(n) {
    return ((n = n.status), n === "fulfilled" || n === "rejected");
  }
  function eu() {}
  function og(n, a, o) {
    switch (
      ((o = n[o]),
      o === void 0 ? n.push(a) : o !== a && (a.then(eu, eu), (a = o)),
      a.status)
    ) {
      case "fulfilled":
        return a.value;
      case "rejected":
        throw ((n = a.reason), lg(n), n);
      default:
        if (typeof a.status == "string") a.then(eu, eu);
        else {
          if (((n = pt), n !== null && 100 < n.shellSuspendCounter))
            throw Error(i(482));
          ((n = a),
            (n.status = "pending"),
            n.then(
              function (u) {
                if (a.status === "pending") {
                  var f = a;
                  ((f.status = "fulfilled"), (f.value = u));
                }
              },
              function (u) {
                if (a.status === "pending") {
                  var f = a;
                  ((f.status = "rejected"), (f.reason = u));
                }
              },
            ));
        }
        switch (a.status) {
          case "fulfilled":
            return a.value;
          case "rejected":
            throw ((n = a.reason), lg(n), n);
        }
        throw ((gs = a), ys);
    }
  }
  var gs = null;
  function sg() {
    if (gs === null) throw Error(i(459));
    var n = gs;
    return ((gs = null), n);
  }
  function lg(n) {
    if (n === ys || n === Wl) throw Error(i(483));
  }
  var wa = !1;
  function ed(n) {
    n.updateQueue = {
      baseState: n.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function td(n, a) {
    ((n = n.updateQueue),
      a.updateQueue === n &&
        (a.updateQueue = {
          baseState: n.baseState,
          firstBaseUpdate: n.firstBaseUpdate,
          lastBaseUpdate: n.lastBaseUpdate,
          shared: n.shared,
          callbacks: null,
        }));
  }
  function Sa(n) {
    return { lane: n, tag: 0, payload: null, callback: null, next: null };
  }
  function _a(n, a, o) {
    var u = n.updateQueue;
    if (u === null) return null;
    if (((u = u.shared), (ot & 2) !== 0)) {
      var f = u.pending;
      return (
        f === null ? (a.next = a) : ((a.next = f.next), (f.next = a)),
        (u.pending = a),
        (a = ql(n)),
        Yy(n, null, o),
        a
      );
    }
    return (Zl(n, u, a, o), ql(n));
  }
  function vs(n, a, o) {
    if (
      ((a = a.updateQueue), a !== null && ((a = a.shared), (o & 4194048) !== 0))
    ) {
      var u = a.lanes;
      ((u &= n.pendingLanes), (o |= u), (a.lanes = o), F(n, o));
    }
  }
  function nd(n, a) {
    var o = n.updateQueue,
      u = n.alternate;
    if (u !== null && ((u = u.updateQueue), o === u)) {
      var f = null,
        p = null;
      if (((o = o.firstBaseUpdate), o !== null)) {
        do {
          var b = {
            lane: o.lane,
            tag: o.tag,
            payload: o.payload,
            callback: null,
            next: null,
          };
          (p === null ? (f = p = b) : (p = p.next = b), (o = o.next));
        } while (o !== null);
        p === null ? (f = p = a) : (p = p.next = a);
      } else f = p = a;
      ((o = {
        baseState: u.baseState,
        firstBaseUpdate: f,
        lastBaseUpdate: p,
        shared: u.shared,
        callbacks: u.callbacks,
      }),
        (n.updateQueue = o));
      return;
    }
    ((n = o.lastBaseUpdate),
      n === null ? (o.firstBaseUpdate = a) : (n.next = a),
      (o.lastBaseUpdate = a));
  }
  var rd = !1;
  function bs() {
    if (rd) {
      var n = ao;
      if (n !== null) throw n;
    }
  }
  function ws(n, a, o, u) {
    rd = !1;
    var f = n.updateQueue;
    wa = !1;
    var p = f.firstBaseUpdate,
      b = f.lastBaseUpdate,
      R = f.shared.pending;
    if (R !== null) {
      f.shared.pending = null;
      var L = R,
        K = L.next;
      ((L.next = null), b === null ? (p = K) : (b.next = K), (b = L));
      var re = n.alternate;
      re !== null &&
        ((re = re.updateQueue),
        (R = re.lastBaseUpdate),
        R !== b &&
          (R === null ? (re.firstBaseUpdate = K) : (R.next = K),
          (re.lastBaseUpdate = L)));
    }
    if (p !== null) {
      var ue = f.baseState;
      ((b = 0), (re = K = L = null), (R = p));
      do {
        var X = R.lane & -536870913,
          J = X !== R.lane;
        if (J ? (We & X) === X : (u & X) === X) {
          (X !== 0 && X === ro && (rd = !0),
            re !== null &&
              (re = re.next =
                {
                  lane: 0,
                  tag: R.tag,
                  payload: R.payload,
                  callback: null,
                  next: null,
                }));
          e: {
            var Ue = n,
              je = R;
            X = a;
            var ht = o;
            switch (je.tag) {
              case 1:
                if (((Ue = je.payload), typeof Ue == "function")) {
                  ue = Ue.call(ht, ue, X);
                  break e;
                }
                ue = Ue;
                break e;
              case 3:
                Ue.flags = (Ue.flags & -65537) | 128;
              case 0:
                if (
                  ((Ue = je.payload),
                  (X = typeof Ue == "function" ? Ue.call(ht, ue, X) : Ue),
                  X == null)
                )
                  break e;
                ue = y({}, ue, X);
                break e;
              case 2:
                wa = !0;
            }
          }
          ((X = R.callback),
            X !== null &&
              ((n.flags |= 64),
              J && (n.flags |= 8192),
              (J = f.callbacks),
              J === null ? (f.callbacks = [X]) : J.push(X)));
        } else
          ((J = {
            lane: X,
            tag: R.tag,
            payload: R.payload,
            callback: R.callback,
            next: null,
          }),
            re === null ? ((K = re = J), (L = ue)) : (re = re.next = J),
            (b |= X));
        if (((R = R.next), R === null)) {
          if (((R = f.shared.pending), R === null)) break;
          ((J = R),
            (R = J.next),
            (J.next = null),
            (f.lastBaseUpdate = J),
            (f.shared.pending = null));
        }
      } while (!0);
      (re === null && (L = ue),
        (f.baseState = L),
        (f.firstBaseUpdate = K),
        (f.lastBaseUpdate = re),
        p === null && (f.shared.lanes = 0),
        (Da |= b),
        (n.lanes = b),
        (n.memoizedState = ue));
    }
  }
  function ug(n, a) {
    if (typeof n != "function") throw Error(i(191, n));
    n.call(a);
  }
  function cg(n, a) {
    var o = n.callbacks;
    if (o !== null)
      for (n.callbacks = null, n = 0; n < o.length; n++) ug(o[n], a);
  }
  var io = W(null),
    tu = W(0);
  function fg(n, a) {
    ((n = ra), le(tu, n), le(io, a), (ra = n | a.baseLanes));
  }
  function ad() {
    (le(tu, ra), le(io, io.current));
  }
  function id() {
    ((ra = tu.current), fe(io), fe(tu));
  }
  var Ea = 0,
    He = null,
    ft = null,
    Lt = null,
    nu = !1,
    oo = !1,
    wi = !1,
    ru = 0,
    Ss = 0,
    so = null,
    jx = 0;
  function Tt() {
    throw Error(i(321));
  }
  function od(n, a) {
    if (a === null) return !1;
    for (var o = 0; o < a.length && o < n.length; o++)
      if (!Nn(n[o], a[o])) return !1;
    return !0;
  }
  function sd(n, a, o, u, f, p) {
    return (
      (Ea = p),
      (He = a),
      (a.memoizedState = null),
      (a.updateQueue = null),
      (a.lanes = 0),
      (U.H = n === null || n.memoizedState === null ? Yg : Kg),
      (wi = !1),
      (p = o(u, f)),
      (wi = !1),
      oo && (p = hg(a, o, u, f)),
      dg(n),
      p
    );
  }
  function dg(n) {
    U.H = uu;
    var a = ft !== null && ft.next !== null;
    if (((Ea = 0), (Lt = ft = He = null), (nu = !1), (Ss = 0), (so = null), a))
      throw Error(i(300));
    n === null ||
      Gt ||
      ((n = n.dependencies), n !== null && Ql(n) && (Gt = !0));
  }
  function hg(n, a, o, u) {
    He = n;
    var f = 0;
    do {
      if ((oo && (so = null), (Ss = 0), (oo = !1), 25 <= f))
        throw Error(i(301));
      if (((f += 1), (Lt = ft = null), n.updateQueue != null)) {
        var p = n.updateQueue;
        ((p.lastEffect = null),
          (p.events = null),
          (p.stores = null),
          p.memoCache != null && (p.memoCache.index = 0));
      }
      ((U.H = $x), (p = a(o, u)));
    } while (oo);
    return p;
  }
  function Lx() {
    var n = U.H,
      a = n.useState()[0];
    return (
      (a = typeof a.then == "function" ? _s(a) : a),
      (n = n.useState()[0]),
      (ft !== null ? ft.memoizedState : null) !== n && (He.flags |= 1024),
      a
    );
  }
  function ld() {
    var n = ru !== 0;
    return ((ru = 0), n);
  }
  function ud(n, a, o) {
    ((a.updateQueue = n.updateQueue), (a.flags &= -2053), (n.lanes &= ~o));
  }
  function cd(n) {
    if (nu) {
      for (n = n.memoizedState; n !== null; ) {
        var a = n.queue;
        (a !== null && (a.pending = null), (n = n.next));
      }
      nu = !1;
    }
    ((Ea = 0), (Lt = ft = He = null), (oo = !1), (Ss = ru = 0), (so = null));
  }
  function Sn() {
    var n = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (Lt === null ? (He.memoizedState = Lt = n) : (Lt = Lt.next = n), Lt);
  }
  function Ut() {
    if (ft === null) {
      var n = He.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = ft.next;
    var a = Lt === null ? He.memoizedState : Lt.next;
    if (a !== null) ((Lt = a), (ft = n));
    else {
      if (n === null)
        throw He.alternate === null ? Error(i(467)) : Error(i(310));
      ((ft = n),
        (n = {
          memoizedState: ft.memoizedState,
          baseState: ft.baseState,
          baseQueue: ft.baseQueue,
          queue: ft.queue,
          next: null,
        }),
        Lt === null ? (He.memoizedState = Lt = n) : (Lt = Lt.next = n));
    }
    return Lt;
  }
  function fd() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function _s(n) {
    var a = Ss;
    return (
      (Ss += 1),
      so === null && (so = []),
      (n = og(so, n, a)),
      (a = He),
      (Lt === null ? a.memoizedState : Lt.next) === null &&
        ((a = a.alternate),
        (U.H = a === null || a.memoizedState === null ? Yg : Kg)),
      n
    );
  }
  function au(n) {
    if (n !== null && typeof n == "object") {
      if (typeof n.then == "function") return _s(n);
      if (n.$$typeof === D) return un(n);
    }
    throw Error(i(438, String(n)));
  }
  function dd(n) {
    var a = null,
      o = He.updateQueue;
    if ((o !== null && (a = o.memoCache), a == null)) {
      var u = He.alternate;
      u !== null &&
        ((u = u.updateQueue),
        u !== null &&
          ((u = u.memoCache),
          u != null &&
            (a = {
              data: u.data.map(function (f) {
                return f.slice();
              }),
              index: 0,
            })));
    }
    if (
      (a == null && (a = { data: [], index: 0 }),
      o === null && ((o = fd()), (He.updateQueue = o)),
      (o.memoCache = a),
      (o = a.data[a.index]),
      o === void 0)
    )
      for (o = a.data[a.index] = Array(n), u = 0; u < n; u++) o[u] = pe;
    return (a.index++, o);
  }
  function Xr(n, a) {
    return typeof a == "function" ? a(n) : a;
  }
  function iu(n) {
    var a = Ut();
    return hd(a, ft, n);
  }
  function hd(n, a, o) {
    var u = n.queue;
    if (u === null) throw Error(i(311));
    u.lastRenderedReducer = o;
    var f = n.baseQueue,
      p = u.pending;
    if (p !== null) {
      if (f !== null) {
        var b = f.next;
        ((f.next = p.next), (p.next = b));
      }
      ((a.baseQueue = f = p), (u.pending = null));
    }
    if (((p = n.baseState), f === null)) n.memoizedState = p;
    else {
      a = f.next;
      var R = (b = null),
        L = null,
        K = a,
        re = !1;
      do {
        var ue = K.lane & -536870913;
        if (ue !== K.lane ? (We & ue) === ue : (Ea & ue) === ue) {
          var X = K.revertLane;
          if (X === 0)
            (L !== null &&
              (L = L.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: K.action,
                  hasEagerState: K.hasEagerState,
                  eagerState: K.eagerState,
                  next: null,
                }),
              ue === ro && (re = !0));
          else if ((Ea & X) === X) {
            ((K = K.next), X === ro && (re = !0));
            continue;
          } else
            ((ue = {
              lane: 0,
              revertLane: K.revertLane,
              action: K.action,
              hasEagerState: K.hasEagerState,
              eagerState: K.eagerState,
              next: null,
            }),
              L === null ? ((R = L = ue), (b = p)) : (L = L.next = ue),
              (He.lanes |= X),
              (Da |= X));
          ((ue = K.action),
            wi && o(p, ue),
            (p = K.hasEagerState ? K.eagerState : o(p, ue)));
        } else
          ((X = {
            lane: ue,
            revertLane: K.revertLane,
            action: K.action,
            hasEagerState: K.hasEagerState,
            eagerState: K.eagerState,
            next: null,
          }),
            L === null ? ((R = L = X), (b = p)) : (L = L.next = X),
            (He.lanes |= ue),
            (Da |= ue));
        K = K.next;
      } while (K !== null && K !== a);
      if (
        (L === null ? (b = p) : (L.next = R),
        !Nn(p, n.memoizedState) && ((Gt = !0), re && ((o = ao), o !== null)))
      )
        throw o;
      ((n.memoizedState = p),
        (n.baseState = b),
        (n.baseQueue = L),
        (u.lastRenderedState = p));
    }
    return (f === null && (u.lanes = 0), [n.memoizedState, u.dispatch]);
  }
  function md(n) {
    var a = Ut(),
      o = a.queue;
    if (o === null) throw Error(i(311));
    o.lastRenderedReducer = n;
    var u = o.dispatch,
      f = o.pending,
      p = a.memoizedState;
    if (f !== null) {
      o.pending = null;
      var b = (f = f.next);
      do ((p = n(p, b.action)), (b = b.next));
      while (b !== f);
      (Nn(p, a.memoizedState) || (Gt = !0),
        (a.memoizedState = p),
        a.baseQueue === null && (a.baseState = p),
        (o.lastRenderedState = p));
    }
    return [p, u];
  }
  function mg(n, a, o) {
    var u = He,
      f = Ut(),
      p = nt;
    if (p) {
      if (o === void 0) throw Error(i(407));
      o = o();
    } else o = a();
    var b = !Nn((ft || f).memoizedState, o);
    (b && ((f.memoizedState = o), (Gt = !0)), (f = f.queue));
    var R = gg.bind(null, u, f, n);
    if (
      (Es(2048, 8, R, [n]),
      f.getSnapshot !== a || b || (Lt !== null && Lt.memoizedState.tag & 1))
    ) {
      if (
        ((u.flags |= 2048),
        lo(9, ou(), yg.bind(null, u, f, o, a), null),
        pt === null)
      )
        throw Error(i(349));
      p || (Ea & 124) !== 0 || pg(u, a, o);
    }
    return o;
  }
  function pg(n, a, o) {
    ((n.flags |= 16384),
      (n = { getSnapshot: a, value: o }),
      (a = He.updateQueue),
      a === null
        ? ((a = fd()), (He.updateQueue = a), (a.stores = [n]))
        : ((o = a.stores), o === null ? (a.stores = [n]) : o.push(n)));
  }
  function yg(n, a, o, u) {
    ((a.value = o), (a.getSnapshot = u), vg(a) && bg(n));
  }
  function gg(n, a, o) {
    return o(function () {
      vg(a) && bg(n);
    });
  }
  function vg(n) {
    var a = n.getSnapshot;
    n = n.value;
    try {
      var o = a();
      return !Nn(n, o);
    } catch {
      return !0;
    }
  }
  function bg(n) {
    var a = Wi(n, 2);
    a !== null && Pn(a, n, 2);
  }
  function pd(n) {
    var a = Sn();
    if (typeof n == "function") {
      var o = n;
      if (((n = o()), wi)) {
        vn(!0);
        try {
          o();
        } finally {
          vn(!1);
        }
      }
    }
    return (
      (a.memoizedState = a.baseState = n),
      (a.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Xr,
        lastRenderedState: n,
      }),
      a
    );
  }
  function wg(n, a, o, u) {
    return ((n.baseState = o), hd(n, ft, typeof u == "function" ? u : Xr));
  }
  function Ux(n, a, o, u, f) {
    if (lu(n)) throw Error(i(485));
    if (((n = a.action), n !== null)) {
      var p = {
        payload: f,
        action: n,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (b) {
          p.listeners.push(b);
        },
      };
      (U.T !== null ? o(!0) : (p.isTransition = !1),
        u(p),
        (o = a.pending),
        o === null
          ? ((p.next = a.pending = p), Sg(a, p))
          : ((p.next = o.next), (a.pending = o.next = p)));
    }
  }
  function Sg(n, a) {
    var o = a.action,
      u = a.payload,
      f = n.state;
    if (a.isTransition) {
      var p = U.T,
        b = {};
      U.T = b;
      try {
        var R = o(f, u),
          L = U.S;
        (L !== null && L(b, R), _g(n, a, R));
      } catch (K) {
        yd(n, a, K);
      } finally {
        U.T = p;
      }
    } else
      try {
        ((p = o(f, u)), _g(n, a, p));
      } catch (K) {
        yd(n, a, K);
      }
  }
  function _g(n, a, o) {
    o !== null && typeof o == "object" && typeof o.then == "function"
      ? o.then(
          function (u) {
            Eg(n, a, u);
          },
          function (u) {
            return yd(n, a, u);
          },
        )
      : Eg(n, a, o);
  }
  function Eg(n, a, o) {
    ((a.status = "fulfilled"),
      (a.value = o),
      xg(a),
      (n.state = o),
      (a = n.pending),
      a !== null &&
        ((o = a.next),
        o === a ? (n.pending = null) : ((o = o.next), (a.next = o), Sg(n, o))));
  }
  function yd(n, a, o) {
    var u = n.pending;
    if (((n.pending = null), u !== null)) {
      u = u.next;
      do ((a.status = "rejected"), (a.reason = o), xg(a), (a = a.next));
      while (a !== u);
    }
    n.action = null;
  }
  function xg(n) {
    n = n.listeners;
    for (var a = 0; a < n.length; a++) (0, n[a])();
  }
  function Rg(n, a) {
    return a;
  }
  function Og(n, a) {
    if (nt) {
      var o = pt.formState;
      if (o !== null) {
        e: {
          var u = He;
          if (nt) {
            if (Ot) {
              t: {
                for (var f = Ot, p = wr; f.nodeType !== 8; ) {
                  if (!p) {
                    f = null;
                    break t;
                  }
                  if (((f = dr(f.nextSibling)), f === null)) {
                    f = null;
                    break t;
                  }
                }
                ((p = f.data), (f = p === "F!" || p === "F" ? f : null));
              }
              if (f) {
                ((Ot = dr(f.nextSibling)), (u = f.data === "F!"));
                break e;
              }
            }
            yi(u);
          }
          u = !1;
        }
        u && (a = o[0]);
      }
    }
    return (
      (o = Sn()),
      (o.memoizedState = o.baseState = a),
      (u = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Rg,
        lastRenderedState: a,
      }),
      (o.queue = u),
      (o = Zg.bind(null, He, u)),
      (u.dispatch = o),
      (u = pd(!1)),
      (p = Sd.bind(null, He, !1, u.queue)),
      (u = Sn()),
      (f = { state: a, dispatch: null, action: n, pending: null }),
      (u.queue = f),
      (o = Ux.bind(null, He, f, p, o)),
      (f.dispatch = o),
      (u.memoizedState = n),
      [a, o, !1]
    );
  }
  function Ag(n) {
    var a = Ut();
    return Cg(a, ft, n);
  }
  function Cg(n, a, o) {
    if (
      ((a = hd(n, a, Rg)[0]),
      (n = iu(Xr)[0]),
      typeof a == "object" && a !== null && typeof a.then == "function")
    )
      try {
        var u = _s(a);
      } catch (b) {
        throw b === ys ? Wl : b;
      }
    else u = a;
    a = Ut();
    var f = a.queue,
      p = f.dispatch;
    return (
      o !== a.memoizedState &&
        ((He.flags |= 2048), lo(9, ou(), Px.bind(null, f, o), null)),
      [u, p, n]
    );
  }
  function Px(n, a) {
    n.action = a;
  }
  function Tg(n) {
    var a = Ut(),
      o = ft;
    if (o !== null) return Cg(a, o, n);
    (Ut(), (a = a.memoizedState), (o = Ut()));
    var u = o.queue.dispatch;
    return ((o.memoizedState = n), [a, u, !1]);
  }
  function lo(n, a, o, u) {
    return (
      (n = { tag: n, create: o, deps: u, inst: a, next: null }),
      (a = He.updateQueue),
      a === null && ((a = fd()), (He.updateQueue = a)),
      (o = a.lastEffect),
      o === null
        ? (a.lastEffect = n.next = n)
        : ((u = o.next), (o.next = n), (n.next = u), (a.lastEffect = n)),
      n
    );
  }
  function ou() {
    return { destroy: void 0, resource: void 0 };
  }
  function Dg() {
    return Ut().memoizedState;
  }
  function su(n, a, o, u) {
    var f = Sn();
    ((u = u === void 0 ? null : u),
      (He.flags |= n),
      (f.memoizedState = lo(1 | a, ou(), o, u)));
  }
  function Es(n, a, o, u) {
    var f = Ut();
    u = u === void 0 ? null : u;
    var p = f.memoizedState.inst;
    ft !== null && u !== null && od(u, ft.memoizedState.deps)
      ? (f.memoizedState = lo(a, p, o, u))
      : ((He.flags |= n), (f.memoizedState = lo(1 | a, p, o, u)));
  }
  function Mg(n, a) {
    su(8390656, 8, n, a);
  }
  function Ng(n, a) {
    Es(2048, 8, n, a);
  }
  function zg(n, a) {
    return Es(4, 2, n, a);
  }
  function kg(n, a) {
    return Es(4, 4, n, a);
  }
  function jg(n, a) {
    if (typeof a == "function") {
      n = n();
      var o = a(n);
      return function () {
        typeof o == "function" ? o() : a(null);
      };
    }
    if (a != null)
      return (
        (n = n()),
        (a.current = n),
        function () {
          a.current = null;
        }
      );
  }
  function Lg(n, a, o) {
    ((o = o != null ? o.concat([n]) : null), Es(4, 4, jg.bind(null, a, n), o));
  }
  function gd() {}
  function Ug(n, a) {
    var o = Ut();
    a = a === void 0 ? null : a;
    var u = o.memoizedState;
    return a !== null && od(a, u[1]) ? u[0] : ((o.memoizedState = [n, a]), n);
  }
  function Pg(n, a) {
    var o = Ut();
    a = a === void 0 ? null : a;
    var u = o.memoizedState;
    if (a !== null && od(a, u[1])) return u[0];
    if (((u = n()), wi)) {
      vn(!0);
      try {
        n();
      } finally {
        vn(!1);
      }
    }
    return ((o.memoizedState = [u, a]), u);
  }
  function vd(n, a, o) {
    return o === void 0 || (Ea & 1073741824) !== 0
      ? (n.memoizedState = a)
      : ((n.memoizedState = o), (n = Vv()), (He.lanes |= n), (Da |= n), o);
  }
  function Fg(n, a, o, u) {
    return Nn(o, a)
      ? o
      : io.current !== null
        ? ((n = vd(n, o, u)), Nn(n, a) || (Gt = !0), n)
        : (Ea & 42) === 0
          ? ((Gt = !0), (n.memoizedState = o))
          : ((n = Vv()), (He.lanes |= n), (Da |= n), a);
  }
  function Bg(n, a, o, u, f) {
    var p = ne.p;
    ne.p = p !== 0 && 8 > p ? p : 8;
    var b = U.T,
      R = {};
    ((U.T = R), Sd(n, !1, a, o));
    try {
      var L = f(),
        K = U.S;
      if (
        (K !== null && K(R, L),
        L !== null && typeof L == "object" && typeof L.then == "function")
      ) {
        var re = kx(L, u);
        xs(n, a, re, Un(n));
      } else xs(n, a, u, Un(n));
    } catch (ue) {
      xs(n, a, { then: function () {}, status: "rejected", reason: ue }, Un());
    } finally {
      ((ne.p = p), (U.T = b));
    }
  }
  function Fx() {}
  function bd(n, a, o, u) {
    if (n.tag !== 5) throw Error(i(476));
    var f = Vg(n).queue;
    Bg(
      n,
      f,
      a,
      q,
      o === null
        ? Fx
        : function () {
            return ($g(n), o(u));
          },
    );
  }
  function Vg(n) {
    var a = n.memoizedState;
    if (a !== null) return a;
    a = {
      memoizedState: q,
      baseState: q,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Xr,
        lastRenderedState: q,
      },
      next: null,
    };
    var o = {};
    return (
      (a.next = {
        memoizedState: o,
        baseState: o,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Xr,
          lastRenderedState: o,
        },
        next: null,
      }),
      (n.memoizedState = a),
      (n = n.alternate),
      n !== null && (n.memoizedState = a),
      a
    );
  }
  function $g(n) {
    var a = Vg(n).next.queue;
    xs(n, a, {}, Un());
  }
  function wd() {
    return un($s);
  }
  function Hg() {
    return Ut().memoizedState;
  }
  function Ig() {
    return Ut().memoizedState;
  }
  function Bx(n) {
    for (var a = n.return; a !== null; ) {
      switch (a.tag) {
        case 24:
        case 3:
          var o = Un();
          n = Sa(o);
          var u = _a(a, n, o);
          (u !== null && (Pn(u, a, o), vs(u, a, o)),
            (a = { cache: Qf() }),
            (n.payload = a));
          return;
      }
      a = a.return;
    }
  }
  function Vx(n, a, o) {
    var u = Un();
    ((o = {
      lane: u,
      revertLane: 0,
      action: o,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      lu(n)
        ? qg(a, o)
        : ((o = Bf(n, a, o, u)), o !== null && (Pn(o, n, u), Gg(o, a, u))));
  }
  function Zg(n, a, o) {
    var u = Un();
    xs(n, a, o, u);
  }
  function xs(n, a, o, u) {
    var f = {
      lane: u,
      revertLane: 0,
      action: o,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (lu(n)) qg(a, f);
    else {
      var p = n.alternate;
      if (
        n.lanes === 0 &&
        (p === null || p.lanes === 0) &&
        ((p = a.lastRenderedReducer), p !== null)
      )
        try {
          var b = a.lastRenderedState,
            R = p(b, o);
          if (((f.hasEagerState = !0), (f.eagerState = R), Nn(R, b)))
            return (Zl(n, a, f, 0), pt === null && Il(), !1);
        } catch {
        } finally {
        }
      if (((o = Bf(n, a, f, u)), o !== null))
        return (Pn(o, n, u), Gg(o, a, u), !0);
    }
    return !1;
  }
  function Sd(n, a, o, u) {
    if (
      ((u = {
        lane: 2,
        revertLane: Wd(),
        action: u,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      lu(n))
    ) {
      if (a) throw Error(i(479));
    } else ((a = Bf(n, o, u, 2)), a !== null && Pn(a, n, 2));
  }
  function lu(n) {
    var a = n.alternate;
    return n === He || (a !== null && a === He);
  }
  function qg(n, a) {
    oo = nu = !0;
    var o = n.pending;
    (o === null ? (a.next = a) : ((a.next = o.next), (o.next = a)),
      (n.pending = a));
  }
  function Gg(n, a, o) {
    if ((o & 4194048) !== 0) {
      var u = a.lanes;
      ((u &= n.pendingLanes), (o |= u), (a.lanes = o), F(n, o));
    }
  }
  var uu = {
      readContext: un,
      use: au,
      useCallback: Tt,
      useContext: Tt,
      useEffect: Tt,
      useImperativeHandle: Tt,
      useLayoutEffect: Tt,
      useInsertionEffect: Tt,
      useMemo: Tt,
      useReducer: Tt,
      useRef: Tt,
      useState: Tt,
      useDebugValue: Tt,
      useDeferredValue: Tt,
      useTransition: Tt,
      useSyncExternalStore: Tt,
      useId: Tt,
      useHostTransitionStatus: Tt,
      useFormState: Tt,
      useActionState: Tt,
      useOptimistic: Tt,
      useMemoCache: Tt,
      useCacheRefresh: Tt,
    },
    Yg = {
      readContext: un,
      use: au,
      useCallback: function (n, a) {
        return ((Sn().memoizedState = [n, a === void 0 ? null : a]), n);
      },
      useContext: un,
      useEffect: Mg,
      useImperativeHandle: function (n, a, o) {
        ((o = o != null ? o.concat([n]) : null),
          su(4194308, 4, jg.bind(null, a, n), o));
      },
      useLayoutEffect: function (n, a) {
        return su(4194308, 4, n, a);
      },
      useInsertionEffect: function (n, a) {
        su(4, 2, n, a);
      },
      useMemo: function (n, a) {
        var o = Sn();
        a = a === void 0 ? null : a;
        var u = n();
        if (wi) {
          vn(!0);
          try {
            n();
          } finally {
            vn(!1);
          }
        }
        return ((o.memoizedState = [u, a]), u);
      },
      useReducer: function (n, a, o) {
        var u = Sn();
        if (o !== void 0) {
          var f = o(a);
          if (wi) {
            vn(!0);
            try {
              o(a);
            } finally {
              vn(!1);
            }
          }
        } else f = a;
        return (
          (u.memoizedState = u.baseState = f),
          (n = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: n,
            lastRenderedState: f,
          }),
          (u.queue = n),
          (n = n.dispatch = Vx.bind(null, He, n)),
          [u.memoizedState, n]
        );
      },
      useRef: function (n) {
        var a = Sn();
        return ((n = { current: n }), (a.memoizedState = n));
      },
      useState: function (n) {
        n = pd(n);
        var a = n.queue,
          o = Zg.bind(null, He, a);
        return ((a.dispatch = o), [n.memoizedState, o]);
      },
      useDebugValue: gd,
      useDeferredValue: function (n, a) {
        var o = Sn();
        return vd(o, n, a);
      },
      useTransition: function () {
        var n = pd(!1);
        return (
          (n = Bg.bind(null, He, n.queue, !0, !1)),
          (Sn().memoizedState = n),
          [!1, n]
        );
      },
      useSyncExternalStore: function (n, a, o) {
        var u = He,
          f = Sn();
        if (nt) {
          if (o === void 0) throw Error(i(407));
          o = o();
        } else {
          if (((o = a()), pt === null)) throw Error(i(349));
          (We & 124) !== 0 || pg(u, a, o);
        }
        f.memoizedState = o;
        var p = { value: o, getSnapshot: a };
        return (
          (f.queue = p),
          Mg(gg.bind(null, u, p, n), [n]),
          (u.flags |= 2048),
          lo(9, ou(), yg.bind(null, u, p, o, a), null),
          o
        );
      },
      useId: function () {
        var n = Sn(),
          a = pt.identifierPrefix;
        if (nt) {
          var o = Yr,
            u = Gr;
          ((o = (u & ~(1 << (32 - Ht(u) - 1))).toString(32) + o),
            (a = "«" + a + "R" + o),
            (o = ru++),
            0 < o && (a += "H" + o.toString(32)),
            (a += "»"));
        } else ((o = jx++), (a = "«" + a + "r" + o.toString(32) + "»"));
        return (n.memoizedState = a);
      },
      useHostTransitionStatus: wd,
      useFormState: Og,
      useActionState: Og,
      useOptimistic: function (n) {
        var a = Sn();
        a.memoizedState = a.baseState = n;
        var o = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (a.queue = o),
          (a = Sd.bind(null, He, !0, o)),
          (o.dispatch = a),
          [n, a]
        );
      },
      useMemoCache: dd,
      useCacheRefresh: function () {
        return (Sn().memoizedState = Bx.bind(null, He));
      },
    },
    Kg = {
      readContext: un,
      use: au,
      useCallback: Ug,
      useContext: un,
      useEffect: Ng,
      useImperativeHandle: Lg,
      useInsertionEffect: zg,
      useLayoutEffect: kg,
      useMemo: Pg,
      useReducer: iu,
      useRef: Dg,
      useState: function () {
        return iu(Xr);
      },
      useDebugValue: gd,
      useDeferredValue: function (n, a) {
        var o = Ut();
        return Fg(o, ft.memoizedState, n, a);
      },
      useTransition: function () {
        var n = iu(Xr)[0],
          a = Ut().memoizedState;
        return [typeof n == "boolean" ? n : _s(n), a];
      },
      useSyncExternalStore: mg,
      useId: Hg,
      useHostTransitionStatus: wd,
      useFormState: Ag,
      useActionState: Ag,
      useOptimistic: function (n, a) {
        var o = Ut();
        return wg(o, ft, n, a);
      },
      useMemoCache: dd,
      useCacheRefresh: Ig,
    },
    $x = {
      readContext: un,
      use: au,
      useCallback: Ug,
      useContext: un,
      useEffect: Ng,
      useImperativeHandle: Lg,
      useInsertionEffect: zg,
      useLayoutEffect: kg,
      useMemo: Pg,
      useReducer: md,
      useRef: Dg,
      useState: function () {
        return md(Xr);
      },
      useDebugValue: gd,
      useDeferredValue: function (n, a) {
        var o = Ut();
        return ft === null ? vd(o, n, a) : Fg(o, ft.memoizedState, n, a);
      },
      useTransition: function () {
        var n = md(Xr)[0],
          a = Ut().memoizedState;
        return [typeof n == "boolean" ? n : _s(n), a];
      },
      useSyncExternalStore: mg,
      useId: Hg,
      useHostTransitionStatus: wd,
      useFormState: Tg,
      useActionState: Tg,
      useOptimistic: function (n, a) {
        var o = Ut();
        return ft !== null
          ? wg(o, ft, n, a)
          : ((o.baseState = n), [n, o.queue.dispatch]);
      },
      useMemoCache: dd,
      useCacheRefresh: Ig,
    },
    uo = null,
    Rs = 0;
  function cu(n) {
    var a = Rs;
    return ((Rs += 1), uo === null && (uo = []), og(uo, n, a));
  }
  function Os(n, a) {
    ((a = a.props.ref), (n.ref = a !== void 0 ? a : null));
  }
  function fu(n, a) {
    throw a.$$typeof === g
      ? Error(i(525))
      : ((n = Object.prototype.toString.call(a)),
        Error(
          i(
            31,
            n === "[object Object]"
              ? "object with keys {" + Object.keys(a).join(", ") + "}"
              : n,
          ),
        ));
  }
  function Qg(n) {
    var a = n._init;
    return a(n._payload);
  }
  function Xg(n) {
    function a(Z, V) {
      if (n) {
        var G = Z.deletions;
        G === null ? ((Z.deletions = [V]), (Z.flags |= 16)) : G.push(V);
      }
    }
    function o(Z, V) {
      if (!n) return null;
      for (; V !== null; ) (a(Z, V), (V = V.sibling));
      return null;
    }
    function u(Z) {
      for (var V = new Map(); Z !== null; )
        (Z.key !== null ? V.set(Z.key, Z) : V.set(Z.index, Z), (Z = Z.sibling));
      return V;
    }
    function f(Z, V) {
      return ((Z = qr(Z, V)), (Z.index = 0), (Z.sibling = null), Z);
    }
    function p(Z, V, G) {
      return (
        (Z.index = G),
        n
          ? ((G = Z.alternate),
            G !== null
              ? ((G = G.index), G < V ? ((Z.flags |= 67108866), V) : G)
              : ((Z.flags |= 67108866), V))
          : ((Z.flags |= 1048576), V)
      );
    }
    function b(Z) {
      return (n && Z.alternate === null && (Z.flags |= 67108866), Z);
    }
    function R(Z, V, G, ae) {
      return V === null || V.tag !== 6
        ? ((V = $f(G, Z.mode, ae)), (V.return = Z), V)
        : ((V = f(V, G)), (V.return = Z), V);
    }
    function L(Z, V, G, ae) {
      var Ce = G.type;
      return Ce === S
        ? re(Z, V, G.props.children, ae, G.key)
        : V !== null &&
            (V.elementType === Ce ||
              (typeof Ce == "object" &&
                Ce !== null &&
                Ce.$$typeof === Q &&
                Qg(Ce) === V.type))
          ? ((V = f(V, G.props)), Os(V, G), (V.return = Z), V)
          : ((V = Gl(G.type, G.key, G.props, null, Z.mode, ae)),
            Os(V, G),
            (V.return = Z),
            V);
    }
    function K(Z, V, G, ae) {
      return V === null ||
        V.tag !== 4 ||
        V.stateNode.containerInfo !== G.containerInfo ||
        V.stateNode.implementation !== G.implementation
        ? ((V = Hf(G, Z.mode, ae)), (V.return = Z), V)
        : ((V = f(V, G.children || [])), (V.return = Z), V);
    }
    function re(Z, V, G, ae, Ce) {
      return V === null || V.tag !== 7
        ? ((V = di(G, Z.mode, ae, Ce)), (V.return = Z), V)
        : ((V = f(V, G)), (V.return = Z), V);
    }
    function ue(Z, V, G) {
      if (
        (typeof V == "string" && V !== "") ||
        typeof V == "number" ||
        typeof V == "bigint"
      )
        return ((V = $f("" + V, Z.mode, G)), (V.return = Z), V);
      if (typeof V == "object" && V !== null) {
        switch (V.$$typeof) {
          case v:
            return (
              (G = Gl(V.type, V.key, V.props, null, Z.mode, G)),
              Os(G, V),
              (G.return = Z),
              G
            );
          case _:
            return ((V = Hf(V, Z.mode, G)), (V.return = Z), V);
          case Q:
            var ae = V._init;
            return ((V = ae(V._payload)), ue(Z, V, G));
        }
        if (ge(V) || be(V))
          return ((V = di(V, Z.mode, G, null)), (V.return = Z), V);
        if (typeof V.then == "function") return ue(Z, cu(V), G);
        if (V.$$typeof === D) return ue(Z, Xl(Z, V), G);
        fu(Z, V);
      }
      return null;
    }
    function X(Z, V, G, ae) {
      var Ce = V !== null ? V.key : null;
      if (
        (typeof G == "string" && G !== "") ||
        typeof G == "number" ||
        typeof G == "bigint"
      )
        return Ce !== null ? null : R(Z, V, "" + G, ae);
      if (typeof G == "object" && G !== null) {
        switch (G.$$typeof) {
          case v:
            return G.key === Ce ? L(Z, V, G, ae) : null;
          case _:
            return G.key === Ce ? K(Z, V, G, ae) : null;
          case Q:
            return ((Ce = G._init), (G = Ce(G._payload)), X(Z, V, G, ae));
        }
        if (ge(G) || be(G)) return Ce !== null ? null : re(Z, V, G, ae, null);
        if (typeof G.then == "function") return X(Z, V, cu(G), ae);
        if (G.$$typeof === D) return X(Z, V, Xl(Z, G), ae);
        fu(Z, G);
      }
      return null;
    }
    function J(Z, V, G, ae, Ce) {
      if (
        (typeof ae == "string" && ae !== "") ||
        typeof ae == "number" ||
        typeof ae == "bigint"
      )
        return ((Z = Z.get(G) || null), R(V, Z, "" + ae, Ce));
      if (typeof ae == "object" && ae !== null) {
        switch (ae.$$typeof) {
          case v:
            return (
              (Z = Z.get(ae.key === null ? G : ae.key) || null),
              L(V, Z, ae, Ce)
            );
          case _:
            return (
              (Z = Z.get(ae.key === null ? G : ae.key) || null),
              K(V, Z, ae, Ce)
            );
          case Q:
            var Ge = ae._init;
            return ((ae = Ge(ae._payload)), J(Z, V, G, ae, Ce));
        }
        if (ge(ae) || be(ae))
          return ((Z = Z.get(G) || null), re(V, Z, ae, Ce, null));
        if (typeof ae.then == "function") return J(Z, V, G, cu(ae), Ce);
        if (ae.$$typeof === D) return J(Z, V, G, Xl(V, ae), Ce);
        fu(V, ae);
      }
      return null;
    }
    function Ue(Z, V, G, ae) {
      for (
        var Ce = null, Ge = null, Me = V, Le = (V = 0), Kt = null;
        Me !== null && Le < G.length;
        Le++
      ) {
        Me.index > Le ? ((Kt = Me), (Me = null)) : (Kt = Me.sibling);
        var tt = X(Z, Me, G[Le], ae);
        if (tt === null) {
          Me === null && (Me = Kt);
          break;
        }
        (n && Me && tt.alternate === null && a(Z, Me),
          (V = p(tt, V, Le)),
          Ge === null ? (Ce = tt) : (Ge.sibling = tt),
          (Ge = tt),
          (Me = Kt));
      }
      if (Le === G.length) return (o(Z, Me), nt && mi(Z, Le), Ce);
      if (Me === null) {
        for (; Le < G.length; Le++)
          ((Me = ue(Z, G[Le], ae)),
            Me !== null &&
              ((V = p(Me, V, Le)),
              Ge === null ? (Ce = Me) : (Ge.sibling = Me),
              (Ge = Me)));
        return (nt && mi(Z, Le), Ce);
      }
      for (Me = u(Me); Le < G.length; Le++)
        ((Kt = J(Me, Z, Le, G[Le], ae)),
          Kt !== null &&
            (n &&
              Kt.alternate !== null &&
              Me.delete(Kt.key === null ? Le : Kt.key),
            (V = p(Kt, V, Le)),
            Ge === null ? (Ce = Kt) : (Ge.sibling = Kt),
            (Ge = Kt)));
      return (
        n &&
          Me.forEach(function (Fa) {
            return a(Z, Fa);
          }),
        nt && mi(Z, Le),
        Ce
      );
    }
    function je(Z, V, G, ae) {
      if (G == null) throw Error(i(151));
      for (
        var Ce = null,
          Ge = null,
          Me = V,
          Le = (V = 0),
          Kt = null,
          tt = G.next();
        Me !== null && !tt.done;
        Le++, tt = G.next()
      ) {
        Me.index > Le ? ((Kt = Me), (Me = null)) : (Kt = Me.sibling);
        var Fa = X(Z, Me, tt.value, ae);
        if (Fa === null) {
          Me === null && (Me = Kt);
          break;
        }
        (n && Me && Fa.alternate === null && a(Z, Me),
          (V = p(Fa, V, Le)),
          Ge === null ? (Ce = Fa) : (Ge.sibling = Fa),
          (Ge = Fa),
          (Me = Kt));
      }
      if (tt.done) return (o(Z, Me), nt && mi(Z, Le), Ce);
      if (Me === null) {
        for (; !tt.done; Le++, tt = G.next())
          ((tt = ue(Z, tt.value, ae)),
            tt !== null &&
              ((V = p(tt, V, Le)),
              Ge === null ? (Ce = tt) : (Ge.sibling = tt),
              (Ge = tt)));
        return (nt && mi(Z, Le), Ce);
      }
      for (Me = u(Me); !tt.done; Le++, tt = G.next())
        ((tt = J(Me, Z, Le, tt.value, ae)),
          tt !== null &&
            (n &&
              tt.alternate !== null &&
              Me.delete(tt.key === null ? Le : tt.key),
            (V = p(tt, V, Le)),
            Ge === null ? (Ce = tt) : (Ge.sibling = tt),
            (Ge = tt)));
      return (
        n &&
          Me.forEach(function (HR) {
            return a(Z, HR);
          }),
        nt && mi(Z, Le),
        Ce
      );
    }
    function ht(Z, V, G, ae) {
      if (
        (typeof G == "object" &&
          G !== null &&
          G.type === S &&
          G.key === null &&
          (G = G.props.children),
        typeof G == "object" && G !== null)
      ) {
        switch (G.$$typeof) {
          case v:
            e: {
              for (var Ce = G.key; V !== null; ) {
                if (V.key === Ce) {
                  if (((Ce = G.type), Ce === S)) {
                    if (V.tag === 7) {
                      (o(Z, V.sibling),
                        (ae = f(V, G.props.children)),
                        (ae.return = Z),
                        (Z = ae));
                      break e;
                    }
                  } else if (
                    V.elementType === Ce ||
                    (typeof Ce == "object" &&
                      Ce !== null &&
                      Ce.$$typeof === Q &&
                      Qg(Ce) === V.type)
                  ) {
                    (o(Z, V.sibling),
                      (ae = f(V, G.props)),
                      Os(ae, G),
                      (ae.return = Z),
                      (Z = ae));
                    break e;
                  }
                  o(Z, V);
                  break;
                } else a(Z, V);
                V = V.sibling;
              }
              G.type === S
                ? ((ae = di(G.props.children, Z.mode, ae, G.key)),
                  (ae.return = Z),
                  (Z = ae))
                : ((ae = Gl(G.type, G.key, G.props, null, Z.mode, ae)),
                  Os(ae, G),
                  (ae.return = Z),
                  (Z = ae));
            }
            return b(Z);
          case _:
            e: {
              for (Ce = G.key; V !== null; ) {
                if (V.key === Ce)
                  if (
                    V.tag === 4 &&
                    V.stateNode.containerInfo === G.containerInfo &&
                    V.stateNode.implementation === G.implementation
                  ) {
                    (o(Z, V.sibling),
                      (ae = f(V, G.children || [])),
                      (ae.return = Z),
                      (Z = ae));
                    break e;
                  } else {
                    o(Z, V);
                    break;
                  }
                else a(Z, V);
                V = V.sibling;
              }
              ((ae = Hf(G, Z.mode, ae)), (ae.return = Z), (Z = ae));
            }
            return b(Z);
          case Q:
            return ((Ce = G._init), (G = Ce(G._payload)), ht(Z, V, G, ae));
        }
        if (ge(G)) return Ue(Z, V, G, ae);
        if (be(G)) {
          if (((Ce = be(G)), typeof Ce != "function")) throw Error(i(150));
          return ((G = Ce.call(G)), je(Z, V, G, ae));
        }
        if (typeof G.then == "function") return ht(Z, V, cu(G), ae);
        if (G.$$typeof === D) return ht(Z, V, Xl(Z, G), ae);
        fu(Z, G);
      }
      return (typeof G == "string" && G !== "") ||
        typeof G == "number" ||
        typeof G == "bigint"
        ? ((G = "" + G),
          V !== null && V.tag === 6
            ? (o(Z, V.sibling), (ae = f(V, G)), (ae.return = Z), (Z = ae))
            : (o(Z, V), (ae = $f(G, Z.mode, ae)), (ae.return = Z), (Z = ae)),
          b(Z))
        : o(Z, V);
    }
    return function (Z, V, G, ae) {
      try {
        Rs = 0;
        var Ce = ht(Z, V, G, ae);
        return ((uo = null), Ce);
      } catch (Me) {
        if (Me === ys || Me === Wl) throw Me;
        var Ge = zn(29, Me, null, Z.mode);
        return ((Ge.lanes = ae), (Ge.return = Z), Ge);
      } finally {
      }
    };
  }
  var co = Xg(!0),
    Jg = Xg(!1),
    Wn = W(null),
    Sr = null;
  function xa(n) {
    var a = n.alternate;
    (le(Zt, Zt.current & 1),
      le(Wn, n),
      Sr === null &&
        (a === null || io.current !== null || a.memoizedState !== null) &&
        (Sr = n));
  }
  function Wg(n) {
    if (n.tag === 22) {
      if ((le(Zt, Zt.current), le(Wn, n), Sr === null)) {
        var a = n.alternate;
        a !== null && a.memoizedState !== null && (Sr = n);
      }
    } else Ra();
  }
  function Ra() {
    (le(Zt, Zt.current), le(Wn, Wn.current));
  }
  function Jr(n) {
    (fe(Wn), Sr === n && (Sr = null), fe(Zt));
  }
  var Zt = W(0);
  function du(n) {
    for (var a = n; a !== null; ) {
      if (a.tag === 13) {
        var o = a.memoizedState;
        if (
          o !== null &&
          ((o = o.dehydrated), o === null || o.data === "$?" || fh(o))
        )
          return a;
      } else if (a.tag === 19 && a.memoizedProps.revealOrder !== void 0) {
        if ((a.flags & 128) !== 0) return a;
      } else if (a.child !== null) {
        ((a.child.return = a), (a = a.child));
        continue;
      }
      if (a === n) break;
      for (; a.sibling === null; ) {
        if (a.return === null || a.return === n) return null;
        a = a.return;
      }
      ((a.sibling.return = a.return), (a = a.sibling));
    }
    return null;
  }
  function _d(n, a, o, u) {
    ((a = n.memoizedState),
      (o = o(u, a)),
      (o = o == null ? a : y({}, a, o)),
      (n.memoizedState = o),
      n.lanes === 0 && (n.updateQueue.baseState = o));
  }
  var Ed = {
    enqueueSetState: function (n, a, o) {
      n = n._reactInternals;
      var u = Un(),
        f = Sa(u);
      ((f.payload = a),
        o != null && (f.callback = o),
        (a = _a(n, f, u)),
        a !== null && (Pn(a, n, u), vs(a, n, u)));
    },
    enqueueReplaceState: function (n, a, o) {
      n = n._reactInternals;
      var u = Un(),
        f = Sa(u);
      ((f.tag = 1),
        (f.payload = a),
        o != null && (f.callback = o),
        (a = _a(n, f, u)),
        a !== null && (Pn(a, n, u), vs(a, n, u)));
    },
    enqueueForceUpdate: function (n, a) {
      n = n._reactInternals;
      var o = Un(),
        u = Sa(o);
      ((u.tag = 2),
        a != null && (u.callback = a),
        (a = _a(n, u, o)),
        a !== null && (Pn(a, n, o), vs(a, n, o)));
    },
  };
  function ev(n, a, o, u, f, p, b) {
    return (
      (n = n.stateNode),
      typeof n.shouldComponentUpdate == "function"
        ? n.shouldComponentUpdate(u, p, b)
        : a.prototype && a.prototype.isPureReactComponent
          ? !ls(o, u) || !ls(f, p)
          : !0
    );
  }
  function tv(n, a, o, u) {
    ((n = a.state),
      typeof a.componentWillReceiveProps == "function" &&
        a.componentWillReceiveProps(o, u),
      typeof a.UNSAFE_componentWillReceiveProps == "function" &&
        a.UNSAFE_componentWillReceiveProps(o, u),
      a.state !== n && Ed.enqueueReplaceState(a, a.state, null));
  }
  function Si(n, a) {
    var o = a;
    if ("ref" in a) {
      o = {};
      for (var u in a) u !== "ref" && (o[u] = a[u]);
    }
    if ((n = n.defaultProps)) {
      o === a && (o = y({}, o));
      for (var f in n) o[f] === void 0 && (o[f] = n[f]);
    }
    return o;
  }
  var hu =
    typeof reportError == "function"
      ? reportError
      : function (n) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var a = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof n == "object" &&
                n !== null &&
                typeof n.message == "string"
                  ? String(n.message)
                  : String(n),
              error: n,
            });
            if (!window.dispatchEvent(a)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", n);
            return;
          }
          console.error(n);
        };
  function nv(n) {
    hu(n);
  }
  function rv(n) {
    console.error(n);
  }
  function av(n) {
    hu(n);
  }
  function mu(n, a) {
    try {
      var o = n.onUncaughtError;
      o(a.value, { componentStack: a.stack });
    } catch (u) {
      setTimeout(function () {
        throw u;
      });
    }
  }
  function iv(n, a, o) {
    try {
      var u = n.onCaughtError;
      u(o.value, {
        componentStack: o.stack,
        errorBoundary: a.tag === 1 ? a.stateNode : null,
      });
    } catch (f) {
      setTimeout(function () {
        throw f;
      });
    }
  }
  function xd(n, a, o) {
    return (
      (o = Sa(o)),
      (o.tag = 3),
      (o.payload = { element: null }),
      (o.callback = function () {
        mu(n, a);
      }),
      o
    );
  }
  function ov(n) {
    return ((n = Sa(n)), (n.tag = 3), n);
  }
  function sv(n, a, o, u) {
    var f = o.type.getDerivedStateFromError;
    if (typeof f == "function") {
      var p = u.value;
      ((n.payload = function () {
        return f(p);
      }),
        (n.callback = function () {
          iv(a, o, u);
        }));
    }
    var b = o.stateNode;
    b !== null &&
      typeof b.componentDidCatch == "function" &&
      (n.callback = function () {
        (iv(a, o, u),
          typeof f != "function" &&
            (Ma === null ? (Ma = new Set([this])) : Ma.add(this)));
        var R = u.stack;
        this.componentDidCatch(u.value, {
          componentStack: R !== null ? R : "",
        });
      });
  }
  function Hx(n, a, o, u, f) {
    if (
      ((o.flags |= 32768),
      u !== null && typeof u == "object" && typeof u.then == "function")
    ) {
      if (
        ((a = o.alternate),
        a !== null && hs(a, o, f, !0),
        (o = Wn.current),
        o !== null)
      ) {
        switch (o.tag) {
          case 13:
            return (
              Sr === null ? Yd() : o.alternate === null && At === 0 && (At = 3),
              (o.flags &= -257),
              (o.flags |= 65536),
              (o.lanes = f),
              u === Wf
                ? (o.flags |= 16384)
                : ((a = o.updateQueue),
                  a === null ? (o.updateQueue = new Set([u])) : a.add(u),
                  Qd(n, u, f)),
              !1
            );
          case 22:
            return (
              (o.flags |= 65536),
              u === Wf
                ? (o.flags |= 16384)
                : ((a = o.updateQueue),
                  a === null
                    ? ((a = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([u]),
                      }),
                      (o.updateQueue = a))
                    : ((o = a.retryQueue),
                      o === null ? (a.retryQueue = new Set([u])) : o.add(u)),
                  Qd(n, u, f)),
              !1
            );
        }
        throw Error(i(435, o.tag));
      }
      return (Qd(n, u, f), Yd(), !1);
    }
    if (nt)
      return (
        (a = Wn.current),
        a !== null
          ? ((a.flags & 65536) === 0 && (a.flags |= 256),
            (a.flags |= 65536),
            (a.lanes = f),
            u !== qf && ((n = Error(i(422), { cause: u })), ds(Kn(n, o))))
          : (u !== qf && ((a = Error(i(423), { cause: u })), ds(Kn(a, o))),
            (n = n.current.alternate),
            (n.flags |= 65536),
            (f &= -f),
            (n.lanes |= f),
            (u = Kn(u, o)),
            (f = xd(n.stateNode, u, f)),
            nd(n, f),
            At !== 4 && (At = 2)),
        !1
      );
    var p = Error(i(520), { cause: u });
    if (
      ((p = Kn(p, o)),
      zs === null ? (zs = [p]) : zs.push(p),
      At !== 4 && (At = 2),
      a === null)
    )
      return !0;
    ((u = Kn(u, o)), (o = a));
    do {
      switch (o.tag) {
        case 3:
          return (
            (o.flags |= 65536),
            (n = f & -f),
            (o.lanes |= n),
            (n = xd(o.stateNode, u, n)),
            nd(o, n),
            !1
          );
        case 1:
          if (
            ((a = o.type),
            (p = o.stateNode),
            (o.flags & 128) === 0 &&
              (typeof a.getDerivedStateFromError == "function" ||
                (p !== null &&
                  typeof p.componentDidCatch == "function" &&
                  (Ma === null || !Ma.has(p)))))
          )
            return (
              (o.flags |= 65536),
              (f &= -f),
              (o.lanes |= f),
              (f = ov(f)),
              sv(f, n, o, u),
              nd(o, f),
              !1
            );
      }
      o = o.return;
    } while (o !== null);
    return !1;
  }
  var lv = Error(i(461)),
    Gt = !1;
  function Jt(n, a, o, u) {
    a.child = n === null ? Jg(a, null, o, u) : co(a, n.child, o, u);
  }
  function uv(n, a, o, u, f) {
    o = o.render;
    var p = a.ref;
    if ("ref" in u) {
      var b = {};
      for (var R in u) R !== "ref" && (b[R] = u[R]);
    } else b = u;
    return (
      vi(a),
      (u = sd(n, a, o, b, p, f)),
      (R = ld()),
      n !== null && !Gt
        ? (ud(n, a, f), Wr(n, a, f))
        : (nt && R && If(a), (a.flags |= 1), Jt(n, a, u, f), a.child)
    );
  }
  function cv(n, a, o, u, f) {
    if (n === null) {
      var p = o.type;
      return typeof p == "function" &&
        !Vf(p) &&
        p.defaultProps === void 0 &&
        o.compare === null
        ? ((a.tag = 15), (a.type = p), fv(n, a, p, u, f))
        : ((n = Gl(o.type, null, u, a, a.mode, f)),
          (n.ref = a.ref),
          (n.return = a),
          (a.child = n));
    }
    if (((p = n.child), !Nd(n, f))) {
      var b = p.memoizedProps;
      if (
        ((o = o.compare), (o = o !== null ? o : ls), o(b, u) && n.ref === a.ref)
      )
        return Wr(n, a, f);
    }
    return (
      (a.flags |= 1),
      (n = qr(p, u)),
      (n.ref = a.ref),
      (n.return = a),
      (a.child = n)
    );
  }
  function fv(n, a, o, u, f) {
    if (n !== null) {
      var p = n.memoizedProps;
      if (ls(p, u) && n.ref === a.ref)
        if (((Gt = !1), (a.pendingProps = u = p), Nd(n, f)))
          (n.flags & 131072) !== 0 && (Gt = !0);
        else return ((a.lanes = n.lanes), Wr(n, a, f));
    }
    return Rd(n, a, o, u, f);
  }
  function dv(n, a, o) {
    var u = a.pendingProps,
      f = u.children,
      p = n !== null ? n.memoizedState : null;
    if (u.mode === "hidden") {
      if ((a.flags & 128) !== 0) {
        if (((u = p !== null ? p.baseLanes | o : o), n !== null)) {
          for (f = a.child = n.child, p = 0; f !== null; )
            ((p = p | f.lanes | f.childLanes), (f = f.sibling));
          a.childLanes = p & ~u;
        } else ((a.childLanes = 0), (a.child = null));
        return hv(n, a, u, o);
      }
      if ((o & 536870912) !== 0)
        ((a.memoizedState = { baseLanes: 0, cachePool: null }),
          n !== null && Jl(a, p !== null ? p.cachePool : null),
          p !== null ? fg(a, p) : ad(),
          Wg(a));
      else
        return (
          (a.lanes = a.childLanes = 536870912),
          hv(n, a, p !== null ? p.baseLanes | o : o, o)
        );
    } else
      p !== null
        ? (Jl(a, p.cachePool), fg(a, p), Ra(), (a.memoizedState = null))
        : (n !== null && Jl(a, null), ad(), Ra());
    return (Jt(n, a, f, o), a.child);
  }
  function hv(n, a, o, u) {
    var f = Jf();
    return (
      (f = f === null ? null : { parent: It._currentValue, pool: f }),
      (a.memoizedState = { baseLanes: o, cachePool: f }),
      n !== null && Jl(a, null),
      ad(),
      Wg(a),
      n !== null && hs(n, a, u, !0),
      null
    );
  }
  function pu(n, a) {
    var o = a.ref;
    if (o === null) n !== null && n.ref !== null && (a.flags |= 4194816);
    else {
      if (typeof o != "function" && typeof o != "object") throw Error(i(284));
      (n === null || n.ref !== o) && (a.flags |= 4194816);
    }
  }
  function Rd(n, a, o, u, f) {
    return (
      vi(a),
      (o = sd(n, a, o, u, void 0, f)),
      (u = ld()),
      n !== null && !Gt
        ? (ud(n, a, f), Wr(n, a, f))
        : (nt && u && If(a), (a.flags |= 1), Jt(n, a, o, f), a.child)
    );
  }
  function mv(n, a, o, u, f, p) {
    return (
      vi(a),
      (a.updateQueue = null),
      (o = hg(a, u, o, f)),
      dg(n),
      (u = ld()),
      n !== null && !Gt
        ? (ud(n, a, p), Wr(n, a, p))
        : (nt && u && If(a), (a.flags |= 1), Jt(n, a, o, p), a.child)
    );
  }
  function pv(n, a, o, u, f) {
    if ((vi(a), a.stateNode === null)) {
      var p = eo,
        b = o.contextType;
      (typeof b == "object" && b !== null && (p = un(b)),
        (p = new o(u, p)),
        (a.memoizedState =
          p.state !== null && p.state !== void 0 ? p.state : null),
        (p.updater = Ed),
        (a.stateNode = p),
        (p._reactInternals = a),
        (p = a.stateNode),
        (p.props = u),
        (p.state = a.memoizedState),
        (p.refs = {}),
        ed(a),
        (b = o.contextType),
        (p.context = typeof b == "object" && b !== null ? un(b) : eo),
        (p.state = a.memoizedState),
        (b = o.getDerivedStateFromProps),
        typeof b == "function" && (_d(a, o, b, u), (p.state = a.memoizedState)),
        typeof o.getDerivedStateFromProps == "function" ||
          typeof p.getSnapshotBeforeUpdate == "function" ||
          (typeof p.UNSAFE_componentWillMount != "function" &&
            typeof p.componentWillMount != "function") ||
          ((b = p.state),
          typeof p.componentWillMount == "function" && p.componentWillMount(),
          typeof p.UNSAFE_componentWillMount == "function" &&
            p.UNSAFE_componentWillMount(),
          b !== p.state && Ed.enqueueReplaceState(p, p.state, null),
          ws(a, u, p, f),
          bs(),
          (p.state = a.memoizedState)),
        typeof p.componentDidMount == "function" && (a.flags |= 4194308),
        (u = !0));
    } else if (n === null) {
      p = a.stateNode;
      var R = a.memoizedProps,
        L = Si(o, R);
      p.props = L;
      var K = p.context,
        re = o.contextType;
      ((b = eo), typeof re == "object" && re !== null && (b = un(re)));
      var ue = o.getDerivedStateFromProps;
      ((re =
        typeof ue == "function" ||
        typeof p.getSnapshotBeforeUpdate == "function"),
        (R = a.pendingProps !== R),
        re ||
          (typeof p.UNSAFE_componentWillReceiveProps != "function" &&
            typeof p.componentWillReceiveProps != "function") ||
          ((R || K !== b) && tv(a, p, u, b)),
        (wa = !1));
      var X = a.memoizedState;
      ((p.state = X),
        ws(a, u, p, f),
        bs(),
        (K = a.memoizedState),
        R || X !== K || wa
          ? (typeof ue == "function" &&
              (_d(a, o, ue, u), (K = a.memoizedState)),
            (L = wa || ev(a, o, L, u, X, K, b))
              ? (re ||
                  (typeof p.UNSAFE_componentWillMount != "function" &&
                    typeof p.componentWillMount != "function") ||
                  (typeof p.componentWillMount == "function" &&
                    p.componentWillMount(),
                  typeof p.UNSAFE_componentWillMount == "function" &&
                    p.UNSAFE_componentWillMount()),
                typeof p.componentDidMount == "function" &&
                  (a.flags |= 4194308))
              : (typeof p.componentDidMount == "function" &&
                  (a.flags |= 4194308),
                (a.memoizedProps = u),
                (a.memoizedState = K)),
            (p.props = u),
            (p.state = K),
            (p.context = b),
            (u = L))
          : (typeof p.componentDidMount == "function" && (a.flags |= 4194308),
            (u = !1)));
    } else {
      ((p = a.stateNode),
        td(n, a),
        (b = a.memoizedProps),
        (re = Si(o, b)),
        (p.props = re),
        (ue = a.pendingProps),
        (X = p.context),
        (K = o.contextType),
        (L = eo),
        typeof K == "object" && K !== null && (L = un(K)),
        (R = o.getDerivedStateFromProps),
        (K =
          typeof R == "function" ||
          typeof p.getSnapshotBeforeUpdate == "function") ||
          (typeof p.UNSAFE_componentWillReceiveProps != "function" &&
            typeof p.componentWillReceiveProps != "function") ||
          ((b !== ue || X !== L) && tv(a, p, u, L)),
        (wa = !1),
        (X = a.memoizedState),
        (p.state = X),
        ws(a, u, p, f),
        bs());
      var J = a.memoizedState;
      b !== ue ||
      X !== J ||
      wa ||
      (n !== null && n.dependencies !== null && Ql(n.dependencies))
        ? (typeof R == "function" && (_d(a, o, R, u), (J = a.memoizedState)),
          (re =
            wa ||
            ev(a, o, re, u, X, J, L) ||
            (n !== null && n.dependencies !== null && Ql(n.dependencies)))
            ? (K ||
                (typeof p.UNSAFE_componentWillUpdate != "function" &&
                  typeof p.componentWillUpdate != "function") ||
                (typeof p.componentWillUpdate == "function" &&
                  p.componentWillUpdate(u, J, L),
                typeof p.UNSAFE_componentWillUpdate == "function" &&
                  p.UNSAFE_componentWillUpdate(u, J, L)),
              typeof p.componentDidUpdate == "function" && (a.flags |= 4),
              typeof p.getSnapshotBeforeUpdate == "function" &&
                (a.flags |= 1024))
            : (typeof p.componentDidUpdate != "function" ||
                (b === n.memoizedProps && X === n.memoizedState) ||
                (a.flags |= 4),
              typeof p.getSnapshotBeforeUpdate != "function" ||
                (b === n.memoizedProps && X === n.memoizedState) ||
                (a.flags |= 1024),
              (a.memoizedProps = u),
              (a.memoizedState = J)),
          (p.props = u),
          (p.state = J),
          (p.context = L),
          (u = re))
        : (typeof p.componentDidUpdate != "function" ||
            (b === n.memoizedProps && X === n.memoizedState) ||
            (a.flags |= 4),
          typeof p.getSnapshotBeforeUpdate != "function" ||
            (b === n.memoizedProps && X === n.memoizedState) ||
            (a.flags |= 1024),
          (u = !1));
    }
    return (
      (p = u),
      pu(n, a),
      (u = (a.flags & 128) !== 0),
      p || u
        ? ((p = a.stateNode),
          (o =
            u && typeof o.getDerivedStateFromError != "function"
              ? null
              : p.render()),
          (a.flags |= 1),
          n !== null && u
            ? ((a.child = co(a, n.child, null, f)),
              (a.child = co(a, null, o, f)))
            : Jt(n, a, o, f),
          (a.memoizedState = p.state),
          (n = a.child))
        : (n = Wr(n, a, f)),
      n
    );
  }
  function yv(n, a, o, u) {
    return (fs(), (a.flags |= 256), Jt(n, a, o, u), a.child);
  }
  var Od = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function Ad(n) {
    return { baseLanes: n, cachePool: rg() };
  }
  function Cd(n, a, o) {
    return ((n = n !== null ? n.childLanes & ~o : 0), a && (n |= er), n);
  }
  function gv(n, a, o) {
    var u = a.pendingProps,
      f = !1,
      p = (a.flags & 128) !== 0,
      b;
    if (
      ((b = p) ||
        (b =
          n !== null && n.memoizedState === null ? !1 : (Zt.current & 2) !== 0),
      b && ((f = !0), (a.flags &= -129)),
      (b = (a.flags & 32) !== 0),
      (a.flags &= -33),
      n === null)
    ) {
      if (nt) {
        if ((f ? xa(a) : Ra(), nt)) {
          var R = Ot,
            L;
          if ((L = R)) {
            e: {
              for (L = R, R = wr; L.nodeType !== 8; ) {
                if (!R) {
                  R = null;
                  break e;
                }
                if (((L = dr(L.nextSibling)), L === null)) {
                  R = null;
                  break e;
                }
              }
              R = L;
            }
            R !== null
              ? ((a.memoizedState = {
                  dehydrated: R,
                  treeContext: hi !== null ? { id: Gr, overflow: Yr } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (L = zn(18, null, null, 0)),
                (L.stateNode = R),
                (L.return = a),
                (a.child = L),
                (mn = a),
                (Ot = null),
                (L = !0))
              : (L = !1);
          }
          L || yi(a);
        }
        if (
          ((R = a.memoizedState),
          R !== null && ((R = R.dehydrated), R !== null))
        )
          return (fh(R) ? (a.lanes = 32) : (a.lanes = 536870912), null);
        Jr(a);
      }
      return (
        (R = u.children),
        (u = u.fallback),
        f
          ? (Ra(),
            (f = a.mode),
            (R = yu({ mode: "hidden", children: R }, f)),
            (u = di(u, f, o, null)),
            (R.return = a),
            (u.return = a),
            (R.sibling = u),
            (a.child = R),
            (f = a.child),
            (f.memoizedState = Ad(o)),
            (f.childLanes = Cd(n, b, o)),
            (a.memoizedState = Od),
            u)
          : (xa(a), Td(a, R))
      );
    }
    if (
      ((L = n.memoizedState), L !== null && ((R = L.dehydrated), R !== null))
    ) {
      if (p)
        a.flags & 256
          ? (xa(a), (a.flags &= -257), (a = Dd(n, a, o)))
          : a.memoizedState !== null
            ? (Ra(), (a.child = n.child), (a.flags |= 128), (a = null))
            : (Ra(),
              (f = u.fallback),
              (R = a.mode),
              (u = yu({ mode: "visible", children: u.children }, R)),
              (f = di(f, R, o, null)),
              (f.flags |= 2),
              (u.return = a),
              (f.return = a),
              (u.sibling = f),
              (a.child = u),
              co(a, n.child, null, o),
              (u = a.child),
              (u.memoizedState = Ad(o)),
              (u.childLanes = Cd(n, b, o)),
              (a.memoizedState = Od),
              (a = f));
      else if ((xa(a), fh(R))) {
        if (((b = R.nextSibling && R.nextSibling.dataset), b)) var K = b.dgst;
        ((b = K),
          (u = Error(i(419))),
          (u.stack = ""),
          (u.digest = b),
          ds({ value: u, source: null, stack: null }),
          (a = Dd(n, a, o)));
      } else if (
        (Gt || hs(n, a, o, !1), (b = (o & n.childLanes) !== 0), Gt || b)
      ) {
        if (
          ((b = pt),
          b !== null &&
            ((u = o & -o),
            (u = (u & 42) !== 0 ? 1 : H(u)),
            (u = (u & (b.suspendedLanes | o)) !== 0 ? 0 : u),
            u !== 0 && u !== L.retryLane))
        )
          throw ((L.retryLane = u), Wi(n, u), Pn(b, n, u), lv);
        (R.data === "$?" || Yd(), (a = Dd(n, a, o)));
      } else
        R.data === "$?"
          ? ((a.flags |= 192), (a.child = n.child), (a = null))
          : ((n = L.treeContext),
            (Ot = dr(R.nextSibling)),
            (mn = a),
            (nt = !0),
            (pi = null),
            (wr = !1),
            n !== null &&
              ((Xn[Jn++] = Gr),
              (Xn[Jn++] = Yr),
              (Xn[Jn++] = hi),
              (Gr = n.id),
              (Yr = n.overflow),
              (hi = a)),
            (a = Td(a, u.children)),
            (a.flags |= 4096));
      return a;
    }
    return f
      ? (Ra(),
        (f = u.fallback),
        (R = a.mode),
        (L = n.child),
        (K = L.sibling),
        (u = qr(L, { mode: "hidden", children: u.children })),
        (u.subtreeFlags = L.subtreeFlags & 65011712),
        K !== null ? (f = qr(K, f)) : ((f = di(f, R, o, null)), (f.flags |= 2)),
        (f.return = a),
        (u.return = a),
        (u.sibling = f),
        (a.child = u),
        (u = f),
        (f = a.child),
        (R = n.child.memoizedState),
        R === null
          ? (R = Ad(o))
          : ((L = R.cachePool),
            L !== null
              ? ((K = It._currentValue),
                (L = L.parent !== K ? { parent: K, pool: K } : L))
              : (L = rg()),
            (R = { baseLanes: R.baseLanes | o, cachePool: L })),
        (f.memoizedState = R),
        (f.childLanes = Cd(n, b, o)),
        (a.memoizedState = Od),
        u)
      : (xa(a),
        (o = n.child),
        (n = o.sibling),
        (o = qr(o, { mode: "visible", children: u.children })),
        (o.return = a),
        (o.sibling = null),
        n !== null &&
          ((b = a.deletions),
          b === null ? ((a.deletions = [n]), (a.flags |= 16)) : b.push(n)),
        (a.child = o),
        (a.memoizedState = null),
        o);
  }
  function Td(n, a) {
    return (
      (a = yu({ mode: "visible", children: a }, n.mode)),
      (a.return = n),
      (n.child = a)
    );
  }
  function yu(n, a) {
    return (
      (n = zn(22, n, null, a)),
      (n.lanes = 0),
      (n.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null,
      }),
      n
    );
  }
  function Dd(n, a, o) {
    return (
      co(a, n.child, null, o),
      (n = Td(a, a.pendingProps.children)),
      (n.flags |= 2),
      (a.memoizedState = null),
      n
    );
  }
  function vv(n, a, o) {
    n.lanes |= a;
    var u = n.alternate;
    (u !== null && (u.lanes |= a), Yf(n.return, a, o));
  }
  function Md(n, a, o, u, f) {
    var p = n.memoizedState;
    p === null
      ? (n.memoizedState = {
          isBackwards: a,
          rendering: null,
          renderingStartTime: 0,
          last: u,
          tail: o,
          tailMode: f,
        })
      : ((p.isBackwards = a),
        (p.rendering = null),
        (p.renderingStartTime = 0),
        (p.last = u),
        (p.tail = o),
        (p.tailMode = f));
  }
  function bv(n, a, o) {
    var u = a.pendingProps,
      f = u.revealOrder,
      p = u.tail;
    if ((Jt(n, a, u.children, o), (u = Zt.current), (u & 2) !== 0))
      ((u = (u & 1) | 2), (a.flags |= 128));
    else {
      if (n !== null && (n.flags & 128) !== 0)
        e: for (n = a.child; n !== null; ) {
          if (n.tag === 13) n.memoizedState !== null && vv(n, o, a);
          else if (n.tag === 19) vv(n, o, a);
          else if (n.child !== null) {
            ((n.child.return = n), (n = n.child));
            continue;
          }
          if (n === a) break e;
          for (; n.sibling === null; ) {
            if (n.return === null || n.return === a) break e;
            n = n.return;
          }
          ((n.sibling.return = n.return), (n = n.sibling));
        }
      u &= 1;
    }
    switch ((le(Zt, u), f)) {
      case "forwards":
        for (o = a.child, f = null; o !== null; )
          ((n = o.alternate),
            n !== null && du(n) === null && (f = o),
            (o = o.sibling));
        ((o = f),
          o === null
            ? ((f = a.child), (a.child = null))
            : ((f = o.sibling), (o.sibling = null)),
          Md(a, !1, f, o, p));
        break;
      case "backwards":
        for (o = null, f = a.child, a.child = null; f !== null; ) {
          if (((n = f.alternate), n !== null && du(n) === null)) {
            a.child = f;
            break;
          }
          ((n = f.sibling), (f.sibling = o), (o = f), (f = n));
        }
        Md(a, !0, o, null, p);
        break;
      case "together":
        Md(a, !1, null, null, void 0);
        break;
      default:
        a.memoizedState = null;
    }
    return a.child;
  }
  function Wr(n, a, o) {
    if (
      (n !== null && (a.dependencies = n.dependencies),
      (Da |= a.lanes),
      (o & a.childLanes) === 0)
    )
      if (n !== null) {
        if ((hs(n, a, o, !1), (o & a.childLanes) === 0)) return null;
      } else return null;
    if (n !== null && a.child !== n.child) throw Error(i(153));
    if (a.child !== null) {
      for (
        n = a.child, o = qr(n, n.pendingProps), a.child = o, o.return = a;
        n.sibling !== null;

      )
        ((n = n.sibling),
          (o = o.sibling = qr(n, n.pendingProps)),
          (o.return = a));
      o.sibling = null;
    }
    return a.child;
  }
  function Nd(n, a) {
    return (n.lanes & a) !== 0
      ? !0
      : ((n = n.dependencies), !!(n !== null && Ql(n)));
  }
  function Ix(n, a, o) {
    switch (a.tag) {
      case 3:
        (qe(a, a.stateNode.containerInfo),
          ba(a, It, n.memoizedState.cache),
          fs());
        break;
      case 27:
      case 5:
        at(a);
        break;
      case 4:
        qe(a, a.stateNode.containerInfo);
        break;
      case 10:
        ba(a, a.type, a.memoizedProps.value);
        break;
      case 13:
        var u = a.memoizedState;
        if (u !== null)
          return u.dehydrated !== null
            ? (xa(a), (a.flags |= 128), null)
            : (o & a.child.childLanes) !== 0
              ? gv(n, a, o)
              : (xa(a), (n = Wr(n, a, o)), n !== null ? n.sibling : null);
        xa(a);
        break;
      case 19:
        var f = (n.flags & 128) !== 0;
        if (
          ((u = (o & a.childLanes) !== 0),
          u || (hs(n, a, o, !1), (u = (o & a.childLanes) !== 0)),
          f)
        ) {
          if (u) return bv(n, a, o);
          a.flags |= 128;
        }
        if (
          ((f = a.memoizedState),
          f !== null &&
            ((f.rendering = null), (f.tail = null), (f.lastEffect = null)),
          le(Zt, Zt.current),
          u)
        )
          break;
        return null;
      case 22:
      case 23:
        return ((a.lanes = 0), dv(n, a, o));
      case 24:
        ba(a, It, n.memoizedState.cache);
    }
    return Wr(n, a, o);
  }
  function wv(n, a, o) {
    if (n !== null)
      if (n.memoizedProps !== a.pendingProps) Gt = !0;
      else {
        if (!Nd(n, o) && (a.flags & 128) === 0) return ((Gt = !1), Ix(n, a, o));
        Gt = (n.flags & 131072) !== 0;
      }
    else ((Gt = !1), nt && (a.flags & 1048576) !== 0 && Qy(a, Kl, a.index));
    switch (((a.lanes = 0), a.tag)) {
      case 16:
        e: {
          n = a.pendingProps;
          var u = a.elementType,
            f = u._init;
          if (((u = f(u._payload)), (a.type = u), typeof u == "function"))
            Vf(u)
              ? ((n = Si(u, n)), (a.tag = 1), (a = pv(null, a, u, n, o)))
              : ((a.tag = 0), (a = Rd(null, a, u, n, o)));
          else {
            if (u != null) {
              if (((f = u.$$typeof), f === B)) {
                ((a.tag = 11), (a = uv(null, a, u, n, o)));
                break e;
              } else if (f === Y) {
                ((a.tag = 14), (a = cv(null, a, u, n, o)));
                break e;
              }
            }
            throw ((a = ce(u) || u), Error(i(306, a, "")));
          }
        }
        return a;
      case 0:
        return Rd(n, a, a.type, a.pendingProps, o);
      case 1:
        return ((u = a.type), (f = Si(u, a.pendingProps)), pv(n, a, u, f, o));
      case 3:
        e: {
          if ((qe(a, a.stateNode.containerInfo), n === null))
            throw Error(i(387));
          u = a.pendingProps;
          var p = a.memoizedState;
          ((f = p.element), td(n, a), ws(a, u, null, o));
          var b = a.memoizedState;
          if (
            ((u = b.cache),
            ba(a, It, u),
            u !== p.cache && Kf(a, [It], o, !0),
            bs(),
            (u = b.element),
            p.isDehydrated)
          )
            if (
              ((p = { element: u, isDehydrated: !1, cache: b.cache }),
              (a.updateQueue.baseState = p),
              (a.memoizedState = p),
              a.flags & 256)
            ) {
              a = yv(n, a, u, o);
              break e;
            } else if (u !== f) {
              ((f = Kn(Error(i(424)), a)), ds(f), (a = yv(n, a, u, o)));
              break e;
            } else {
              switch (((n = a.stateNode.containerInfo), n.nodeType)) {
                case 9:
                  n = n.body;
                  break;
                default:
                  n = n.nodeName === "HTML" ? n.ownerDocument.body : n;
              }
              for (
                Ot = dr(n.firstChild),
                  mn = a,
                  nt = !0,
                  pi = null,
                  wr = !0,
                  o = Jg(a, null, u, o),
                  a.child = o;
                o;

              )
                ((o.flags = (o.flags & -3) | 4096), (o = o.sibling));
            }
          else {
            if ((fs(), u === f)) {
              a = Wr(n, a, o);
              break e;
            }
            Jt(n, a, u, o);
          }
          a = a.child;
        }
        return a;
      case 26:
        return (
          pu(n, a),
          n === null
            ? (o = x0(a.type, null, a.pendingProps, null))
              ? (a.memoizedState = o)
              : nt ||
                ((o = a.type),
                (n = a.pendingProps),
                (u = Du(Oe.current).createElement(o)),
                (u[$] = a),
                (u[I] = n),
                en(u, o, n),
                Pe(u),
                (a.stateNode = u))
            : (a.memoizedState = x0(
                a.type,
                n.memoizedProps,
                a.pendingProps,
                n.memoizedState,
              )),
          null
        );
      case 27:
        return (
          at(a),
          n === null &&
            nt &&
            ((u = a.stateNode = S0(a.type, a.pendingProps, Oe.current)),
            (mn = a),
            (wr = !0),
            (f = Ot),
            ka(a.type) ? ((dh = f), (Ot = dr(u.firstChild))) : (Ot = f)),
          Jt(n, a, a.pendingProps.children, o),
          pu(n, a),
          n === null && (a.flags |= 4194304),
          a.child
        );
      case 5:
        return (
          n === null &&
            nt &&
            ((f = u = Ot) &&
              ((u = vR(u, a.type, a.pendingProps, wr)),
              u !== null
                ? ((a.stateNode = u),
                  (mn = a),
                  (Ot = dr(u.firstChild)),
                  (wr = !1),
                  (f = !0))
                : (f = !1)),
            f || yi(a)),
          at(a),
          (f = a.type),
          (p = a.pendingProps),
          (b = n !== null ? n.memoizedProps : null),
          (u = p.children),
          lh(f, p) ? (u = null) : b !== null && lh(f, b) && (a.flags |= 32),
          a.memoizedState !== null &&
            ((f = sd(n, a, Lx, null, null, o)), ($s._currentValue = f)),
          pu(n, a),
          Jt(n, a, u, o),
          a.child
        );
      case 6:
        return (
          n === null &&
            nt &&
            ((n = o = Ot) &&
              ((o = bR(o, a.pendingProps, wr)),
              o !== null
                ? ((a.stateNode = o), (mn = a), (Ot = null), (n = !0))
                : (n = !1)),
            n || yi(a)),
          null
        );
      case 13:
        return gv(n, a, o);
      case 4:
        return (
          qe(a, a.stateNode.containerInfo),
          (u = a.pendingProps),
          n === null ? (a.child = co(a, null, u, o)) : Jt(n, a, u, o),
          a.child
        );
      case 11:
        return uv(n, a, a.type, a.pendingProps, o);
      case 7:
        return (Jt(n, a, a.pendingProps, o), a.child);
      case 8:
        return (Jt(n, a, a.pendingProps.children, o), a.child);
      case 12:
        return (Jt(n, a, a.pendingProps.children, o), a.child);
      case 10:
        return (
          (u = a.pendingProps),
          ba(a, a.type, u.value),
          Jt(n, a, u.children, o),
          a.child
        );
      case 9:
        return (
          (f = a.type._context),
          (u = a.pendingProps.children),
          vi(a),
          (f = un(f)),
          (u = u(f)),
          (a.flags |= 1),
          Jt(n, a, u, o),
          a.child
        );
      case 14:
        return cv(n, a, a.type, a.pendingProps, o);
      case 15:
        return fv(n, a, a.type, a.pendingProps, o);
      case 19:
        return bv(n, a, o);
      case 31:
        return (
          (u = a.pendingProps),
          (o = a.mode),
          (u = { mode: u.mode, children: u.children }),
          n === null
            ? ((o = yu(u, o)),
              (o.ref = a.ref),
              (a.child = o),
              (o.return = a),
              (a = o))
            : ((o = qr(n.child, u)),
              (o.ref = a.ref),
              (a.child = o),
              (o.return = a),
              (a = o)),
          a
        );
      case 22:
        return dv(n, a, o);
      case 24:
        return (
          vi(a),
          (u = un(It)),
          n === null
            ? ((f = Jf()),
              f === null &&
                ((f = pt),
                (p = Qf()),
                (f.pooledCache = p),
                p.refCount++,
                p !== null && (f.pooledCacheLanes |= o),
                (f = p)),
              (a.memoizedState = { parent: u, cache: f }),
              ed(a),
              ba(a, It, f))
            : ((n.lanes & o) !== 0 && (td(n, a), ws(a, null, null, o), bs()),
              (f = n.memoizedState),
              (p = a.memoizedState),
              f.parent !== u
                ? ((f = { parent: u, cache: u }),
                  (a.memoizedState = f),
                  a.lanes === 0 &&
                    (a.memoizedState = a.updateQueue.baseState = f),
                  ba(a, It, u))
                : ((u = p.cache),
                  ba(a, It, u),
                  u !== f.cache && Kf(a, [It], o, !0))),
          Jt(n, a, a.pendingProps.children, o),
          a.child
        );
      case 29:
        throw a.pendingProps;
    }
    throw Error(i(156, a.tag));
  }
  function ea(n) {
    n.flags |= 4;
  }
  function Sv(n, a) {
    if (a.type !== "stylesheet" || (a.state.loading & 4) !== 0)
      n.flags &= -16777217;
    else if (((n.flags |= 16777216), !T0(a))) {
      if (
        ((a = Wn.current),
        a !== null &&
          ((We & 4194048) === We
            ? Sr !== null
            : ((We & 62914560) !== We && (We & 536870912) === 0) || a !== Sr))
      )
        throw ((gs = Wf), ag);
      n.flags |= 8192;
    }
  }
  function gu(n, a) {
    (a !== null && (n.flags |= 4),
      n.flags & 16384 &&
        ((a = n.tag !== 22 ? Hi() : 536870912), (n.lanes |= a), (po |= a)));
  }
  function As(n, a) {
    if (!nt)
      switch (n.tailMode) {
        case "hidden":
          a = n.tail;
          for (var o = null; a !== null; )
            (a.alternate !== null && (o = a), (a = a.sibling));
          o === null ? (n.tail = null) : (o.sibling = null);
          break;
        case "collapsed":
          o = n.tail;
          for (var u = null; o !== null; )
            (o.alternate !== null && (u = o), (o = o.sibling));
          u === null
            ? a || n.tail === null
              ? (n.tail = null)
              : (n.tail.sibling = null)
            : (u.sibling = null);
      }
  }
  function xt(n) {
    var a = n.alternate !== null && n.alternate.child === n.child,
      o = 0,
      u = 0;
    if (a)
      for (var f = n.child; f !== null; )
        ((o |= f.lanes | f.childLanes),
          (u |= f.subtreeFlags & 65011712),
          (u |= f.flags & 65011712),
          (f.return = n),
          (f = f.sibling));
    else
      for (f = n.child; f !== null; )
        ((o |= f.lanes | f.childLanes),
          (u |= f.subtreeFlags),
          (u |= f.flags),
          (f.return = n),
          (f = f.sibling));
    return ((n.subtreeFlags |= u), (n.childLanes = o), a);
  }
  function Zx(n, a, o) {
    var u = a.pendingProps;
    switch ((Zf(a), a.tag)) {
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
        return (xt(a), null);
      case 1:
        return (xt(a), null);
      case 3:
        return (
          (o = a.stateNode),
          (u = null),
          n !== null && (u = n.memoizedState.cache),
          a.memoizedState.cache !== u && (a.flags |= 2048),
          Qr(It),
          gt(),
          o.pendingContext &&
            ((o.context = o.pendingContext), (o.pendingContext = null)),
          (n === null || n.child === null) &&
            (cs(a)
              ? ea(a)
              : n === null ||
                (n.memoizedState.isDehydrated && (a.flags & 256) === 0) ||
                ((a.flags |= 1024), Wy())),
          xt(a),
          null
        );
      case 26:
        return (
          (o = a.memoizedState),
          n === null
            ? (ea(a),
              o !== null ? (xt(a), Sv(a, o)) : (xt(a), (a.flags &= -16777217)))
            : o
              ? o !== n.memoizedState
                ? (ea(a), xt(a), Sv(a, o))
                : (xt(a), (a.flags &= -16777217))
              : (n.memoizedProps !== u && ea(a), xt(a), (a.flags &= -16777217)),
          null
        );
      case 27:
        (ut(a), (o = Oe.current));
        var f = a.type;
        if (n !== null && a.stateNode != null) n.memoizedProps !== u && ea(a);
        else {
          if (!u) {
            if (a.stateNode === null) throw Error(i(166));
            return (xt(a), null);
          }
          ((n = ve.current),
            cs(a) ? Xy(a) : ((n = S0(f, u, o)), (a.stateNode = n), ea(a)));
        }
        return (xt(a), null);
      case 5:
        if ((ut(a), (o = a.type), n !== null && a.stateNode != null))
          n.memoizedProps !== u && ea(a);
        else {
          if (!u) {
            if (a.stateNode === null) throw Error(i(166));
            return (xt(a), null);
          }
          if (((n = ve.current), cs(a))) Xy(a);
          else {
            switch (((f = Du(Oe.current)), n)) {
              case 1:
                n = f.createElementNS("http://www.w3.org/2000/svg", o);
                break;
              case 2:
                n = f.createElementNS("http://www.w3.org/1998/Math/MathML", o);
                break;
              default:
                switch (o) {
                  case "svg":
                    n = f.createElementNS("http://www.w3.org/2000/svg", o);
                    break;
                  case "math":
                    n = f.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      o,
                    );
                    break;
                  case "script":
                    ((n = f.createElement("div")),
                      (n.innerHTML = "<script><\/script>"),
                      (n = n.removeChild(n.firstChild)));
                    break;
                  case "select":
                    ((n =
                      typeof u.is == "string"
                        ? f.createElement("select", { is: u.is })
                        : f.createElement("select")),
                      u.multiple
                        ? (n.multiple = !0)
                        : u.size && (n.size = u.size));
                    break;
                  default:
                    n =
                      typeof u.is == "string"
                        ? f.createElement(o, { is: u.is })
                        : f.createElement(o);
                }
            }
            ((n[$] = a), (n[I] = u));
            e: for (f = a.child; f !== null; ) {
              if (f.tag === 5 || f.tag === 6) n.appendChild(f.stateNode);
              else if (f.tag !== 4 && f.tag !== 27 && f.child !== null) {
                ((f.child.return = f), (f = f.child));
                continue;
              }
              if (f === a) break e;
              for (; f.sibling === null; ) {
                if (f.return === null || f.return === a) break e;
                f = f.return;
              }
              ((f.sibling.return = f.return), (f = f.sibling));
            }
            a.stateNode = n;
            e: switch ((en(n, o, u), o)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                n = !!u.autoFocus;
                break e;
              case "img":
                n = !0;
                break e;
              default:
                n = !1;
            }
            n && ea(a);
          }
        }
        return (xt(a), (a.flags &= -16777217), null);
      case 6:
        if (n && a.stateNode != null) n.memoizedProps !== u && ea(a);
        else {
          if (typeof u != "string" && a.stateNode === null) throw Error(i(166));
          if (((n = Oe.current), cs(a))) {
            if (
              ((n = a.stateNode),
              (o = a.memoizedProps),
              (u = null),
              (f = mn),
              f !== null)
            )
              switch (f.tag) {
                case 27:
                case 5:
                  u = f.memoizedProps;
              }
            ((n[$] = a),
              (n = !!(
                n.nodeValue === o ||
                (u !== null && u.suppressHydrationWarning === !0) ||
                m0(n.nodeValue, o)
              )),
              n || yi(a));
          } else ((n = Du(n).createTextNode(u)), (n[$] = a), (a.stateNode = n));
        }
        return (xt(a), null);
      case 13:
        if (
          ((u = a.memoizedState),
          n === null ||
            (n.memoizedState !== null && n.memoizedState.dehydrated !== null))
        ) {
          if (((f = cs(a)), u !== null && u.dehydrated !== null)) {
            if (n === null) {
              if (!f) throw Error(i(318));
              if (
                ((f = a.memoizedState),
                (f = f !== null ? f.dehydrated : null),
                !f)
              )
                throw Error(i(317));
              f[$] = a;
            } else
              (fs(),
                (a.flags & 128) === 0 && (a.memoizedState = null),
                (a.flags |= 4));
            (xt(a), (f = !1));
          } else
            ((f = Wy()),
              n !== null &&
                n.memoizedState !== null &&
                (n.memoizedState.hydrationErrors = f),
              (f = !0));
          if (!f) return a.flags & 256 ? (Jr(a), a) : (Jr(a), null);
        }
        if ((Jr(a), (a.flags & 128) !== 0)) return ((a.lanes = o), a);
        if (
          ((o = u !== null), (n = n !== null && n.memoizedState !== null), o)
        ) {
          ((u = a.child),
            (f = null),
            u.alternate !== null &&
              u.alternate.memoizedState !== null &&
              u.alternate.memoizedState.cachePool !== null &&
              (f = u.alternate.memoizedState.cachePool.pool));
          var p = null;
          (u.memoizedState !== null &&
            u.memoizedState.cachePool !== null &&
            (p = u.memoizedState.cachePool.pool),
            p !== f && (u.flags |= 2048));
        }
        return (
          o !== n && o && (a.child.flags |= 8192),
          gu(a, a.updateQueue),
          xt(a),
          null
        );
      case 4:
        return (gt(), n === null && rh(a.stateNode.containerInfo), xt(a), null);
      case 10:
        return (Qr(a.type), xt(a), null);
      case 19:
        if ((fe(Zt), (f = a.memoizedState), f === null)) return (xt(a), null);
        if (((u = (a.flags & 128) !== 0), (p = f.rendering), p === null))
          if (u) As(f, !1);
          else {
            if (At !== 0 || (n !== null && (n.flags & 128) !== 0))
              for (n = a.child; n !== null; ) {
                if (((p = du(n)), p !== null)) {
                  for (
                    a.flags |= 128,
                      As(f, !1),
                      n = p.updateQueue,
                      a.updateQueue = n,
                      gu(a, n),
                      a.subtreeFlags = 0,
                      n = o,
                      o = a.child;
                    o !== null;

                  )
                    (Ky(o, n), (o = o.sibling));
                  return (le(Zt, (Zt.current & 1) | 2), a.child);
                }
                n = n.sibling;
              }
            f.tail !== null &&
              Vt() > wu &&
              ((a.flags |= 128), (u = !0), As(f, !1), (a.lanes = 4194304));
          }
        else {
          if (!u)
            if (((n = du(p)), n !== null)) {
              if (
                ((a.flags |= 128),
                (u = !0),
                (n = n.updateQueue),
                (a.updateQueue = n),
                gu(a, n),
                As(f, !0),
                f.tail === null &&
                  f.tailMode === "hidden" &&
                  !p.alternate &&
                  !nt)
              )
                return (xt(a), null);
            } else
              2 * Vt() - f.renderingStartTime > wu &&
                o !== 536870912 &&
                ((a.flags |= 128), (u = !0), As(f, !1), (a.lanes = 4194304));
          f.isBackwards
            ? ((p.sibling = a.child), (a.child = p))
            : ((n = f.last),
              n !== null ? (n.sibling = p) : (a.child = p),
              (f.last = p));
        }
        return f.tail !== null
          ? ((a = f.tail),
            (f.rendering = a),
            (f.tail = a.sibling),
            (f.renderingStartTime = Vt()),
            (a.sibling = null),
            (n = Zt.current),
            le(Zt, u ? (n & 1) | 2 : n & 1),
            a)
          : (xt(a), null);
      case 22:
      case 23:
        return (
          Jr(a),
          id(),
          (u = a.memoizedState !== null),
          n !== null
            ? (n.memoizedState !== null) !== u && (a.flags |= 8192)
            : u && (a.flags |= 8192),
          u
            ? (o & 536870912) !== 0 &&
              (a.flags & 128) === 0 &&
              (xt(a), a.subtreeFlags & 6 && (a.flags |= 8192))
            : xt(a),
          (o = a.updateQueue),
          o !== null && gu(a, o.retryQueue),
          (o = null),
          n !== null &&
            n.memoizedState !== null &&
            n.memoizedState.cachePool !== null &&
            (o = n.memoizedState.cachePool.pool),
          (u = null),
          a.memoizedState !== null &&
            a.memoizedState.cachePool !== null &&
            (u = a.memoizedState.cachePool.pool),
          u !== o && (a.flags |= 2048),
          n !== null && fe(bi),
          null
        );
      case 24:
        return (
          (o = null),
          n !== null && (o = n.memoizedState.cache),
          a.memoizedState.cache !== o && (a.flags |= 2048),
          Qr(It),
          xt(a),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(i(156, a.tag));
  }
  function qx(n, a) {
    switch ((Zf(a), a.tag)) {
      case 1:
        return (
          (n = a.flags),
          n & 65536 ? ((a.flags = (n & -65537) | 128), a) : null
        );
      case 3:
        return (
          Qr(It),
          gt(),
          (n = a.flags),
          (n & 65536) !== 0 && (n & 128) === 0
            ? ((a.flags = (n & -65537) | 128), a)
            : null
        );
      case 26:
      case 27:
      case 5:
        return (ut(a), null);
      case 13:
        if (
          (Jr(a), (n = a.memoizedState), n !== null && n.dehydrated !== null)
        ) {
          if (a.alternate === null) throw Error(i(340));
          fs();
        }
        return (
          (n = a.flags),
          n & 65536 ? ((a.flags = (n & -65537) | 128), a) : null
        );
      case 19:
        return (fe(Zt), null);
      case 4:
        return (gt(), null);
      case 10:
        return (Qr(a.type), null);
      case 22:
      case 23:
        return (
          Jr(a),
          id(),
          n !== null && fe(bi),
          (n = a.flags),
          n & 65536 ? ((a.flags = (n & -65537) | 128), a) : null
        );
      case 24:
        return (Qr(It), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function _v(n, a) {
    switch ((Zf(a), a.tag)) {
      case 3:
        (Qr(It), gt());
        break;
      case 26:
      case 27:
      case 5:
        ut(a);
        break;
      case 4:
        gt();
        break;
      case 13:
        Jr(a);
        break;
      case 19:
        fe(Zt);
        break;
      case 10:
        Qr(a.type);
        break;
      case 22:
      case 23:
        (Jr(a), id(), n !== null && fe(bi));
        break;
      case 24:
        Qr(It);
    }
  }
  function Cs(n, a) {
    try {
      var o = a.updateQueue,
        u = o !== null ? o.lastEffect : null;
      if (u !== null) {
        var f = u.next;
        o = f;
        do {
          if ((o.tag & n) === n) {
            u = void 0;
            var p = o.create,
              b = o.inst;
            ((u = p()), (b.destroy = u));
          }
          o = o.next;
        } while (o !== f);
      }
    } catch (R) {
      mt(a, a.return, R);
    }
  }
  function Oa(n, a, o) {
    try {
      var u = a.updateQueue,
        f = u !== null ? u.lastEffect : null;
      if (f !== null) {
        var p = f.next;
        u = p;
        do {
          if ((u.tag & n) === n) {
            var b = u.inst,
              R = b.destroy;
            if (R !== void 0) {
              ((b.destroy = void 0), (f = a));
              var L = o,
                K = R;
              try {
                K();
              } catch (re) {
                mt(f, L, re);
              }
            }
          }
          u = u.next;
        } while (u !== p);
      }
    } catch (re) {
      mt(a, a.return, re);
    }
  }
  function Ev(n) {
    var a = n.updateQueue;
    if (a !== null) {
      var o = n.stateNode;
      try {
        cg(a, o);
      } catch (u) {
        mt(n, n.return, u);
      }
    }
  }
  function xv(n, a, o) {
    ((o.props = Si(n.type, n.memoizedProps)), (o.state = n.memoizedState));
    try {
      o.componentWillUnmount();
    } catch (u) {
      mt(n, a, u);
    }
  }
  function Ts(n, a) {
    try {
      var o = n.ref;
      if (o !== null) {
        switch (n.tag) {
          case 26:
          case 27:
          case 5:
            var u = n.stateNode;
            break;
          case 30:
            u = n.stateNode;
            break;
          default:
            u = n.stateNode;
        }
        typeof o == "function" ? (n.refCleanup = o(u)) : (o.current = u);
      }
    } catch (f) {
      mt(n, a, f);
    }
  }
  function _r(n, a) {
    var o = n.ref,
      u = n.refCleanup;
    if (o !== null)
      if (typeof u == "function")
        try {
          u();
        } catch (f) {
          mt(n, a, f);
        } finally {
          ((n.refCleanup = null),
            (n = n.alternate),
            n != null && (n.refCleanup = null));
        }
      else if (typeof o == "function")
        try {
          o(null);
        } catch (f) {
          mt(n, a, f);
        }
      else o.current = null;
  }
  function Rv(n) {
    var a = n.type,
      o = n.memoizedProps,
      u = n.stateNode;
    try {
      e: switch (a) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          o.autoFocus && u.focus();
          break e;
        case "img":
          o.src ? (u.src = o.src) : o.srcSet && (u.srcset = o.srcSet);
      }
    } catch (f) {
      mt(n, n.return, f);
    }
  }
  function zd(n, a, o) {
    try {
      var u = n.stateNode;
      (hR(u, n.type, o, a), (u[I] = a));
    } catch (f) {
      mt(n, n.return, f);
    }
  }
  function Ov(n) {
    return (
      n.tag === 5 ||
      n.tag === 3 ||
      n.tag === 26 ||
      (n.tag === 27 && ka(n.type)) ||
      n.tag === 4
    );
  }
  function kd(n) {
    e: for (;;) {
      for (; n.sibling === null; ) {
        if (n.return === null || Ov(n.return)) return null;
        n = n.return;
      }
      for (
        n.sibling.return = n.return, n = n.sibling;
        n.tag !== 5 && n.tag !== 6 && n.tag !== 18;

      ) {
        if (
          (n.tag === 27 && ka(n.type)) ||
          n.flags & 2 ||
          n.child === null ||
          n.tag === 4
        )
          continue e;
        ((n.child.return = n), (n = n.child));
      }
      if (!(n.flags & 2)) return n.stateNode;
    }
  }
  function jd(n, a, o) {
    var u = n.tag;
    if (u === 5 || u === 6)
      ((n = n.stateNode),
        a
          ? (o.nodeType === 9
              ? o.body
              : o.nodeName === "HTML"
                ? o.ownerDocument.body
                : o
            ).insertBefore(n, a)
          : ((a =
              o.nodeType === 9
                ? o.body
                : o.nodeName === "HTML"
                  ? o.ownerDocument.body
                  : o),
            a.appendChild(n),
            (o = o._reactRootContainer),
            o != null || a.onclick !== null || (a.onclick = Tu)));
    else if (
      u !== 4 &&
      (u === 27 && ka(n.type) && ((o = n.stateNode), (a = null)),
      (n = n.child),
      n !== null)
    )
      for (jd(n, a, o), n = n.sibling; n !== null; )
        (jd(n, a, o), (n = n.sibling));
  }
  function vu(n, a, o) {
    var u = n.tag;
    if (u === 5 || u === 6)
      ((n = n.stateNode), a ? o.insertBefore(n, a) : o.appendChild(n));
    else if (
      u !== 4 &&
      (u === 27 && ka(n.type) && (o = n.stateNode), (n = n.child), n !== null)
    )
      for (vu(n, a, o), n = n.sibling; n !== null; )
        (vu(n, a, o), (n = n.sibling));
  }
  function Av(n) {
    var a = n.stateNode,
      o = n.memoizedProps;
    try {
      for (var u = n.type, f = a.attributes; f.length; )
        a.removeAttributeNode(f[0]);
      (en(a, u, o), (a[$] = n), (a[I] = o));
    } catch (p) {
      mt(n, n.return, p);
    }
  }
  var ta = !1,
    Dt = !1,
    Ld = !1,
    Cv = typeof WeakSet == "function" ? WeakSet : Set,
    Yt = null;
  function Gx(n, a) {
    if (((n = n.containerInfo), (oh = Lu), (n = Fy(n)), kf(n))) {
      if ("selectionStart" in n)
        var o = { start: n.selectionStart, end: n.selectionEnd };
      else
        e: {
          o = ((o = n.ownerDocument) && o.defaultView) || window;
          var u = o.getSelection && o.getSelection();
          if (u && u.rangeCount !== 0) {
            o = u.anchorNode;
            var f = u.anchorOffset,
              p = u.focusNode;
            u = u.focusOffset;
            try {
              (o.nodeType, p.nodeType);
            } catch {
              o = null;
              break e;
            }
            var b = 0,
              R = -1,
              L = -1,
              K = 0,
              re = 0,
              ue = n,
              X = null;
            t: for (;;) {
              for (
                var J;
                ue !== o || (f !== 0 && ue.nodeType !== 3) || (R = b + f),
                  ue !== p || (u !== 0 && ue.nodeType !== 3) || (L = b + u),
                  ue.nodeType === 3 && (b += ue.nodeValue.length),
                  (J = ue.firstChild) !== null;

              )
                ((X = ue), (ue = J));
              for (;;) {
                if (ue === n) break t;
                if (
                  (X === o && ++K === f && (R = b),
                  X === p && ++re === u && (L = b),
                  (J = ue.nextSibling) !== null)
                )
                  break;
                ((ue = X), (X = ue.parentNode));
              }
              ue = J;
            }
            o = R === -1 || L === -1 ? null : { start: R, end: L };
          } else o = null;
        }
      o = o || { start: 0, end: 0 };
    } else o = null;
    for (
      sh = { focusedElem: n, selectionRange: o }, Lu = !1, Yt = a;
      Yt !== null;

    )
      if (
        ((a = Yt), (n = a.child), (a.subtreeFlags & 1024) !== 0 && n !== null)
      )
        ((n.return = a), (Yt = n));
      else
        for (; Yt !== null; ) {
          switch (((a = Yt), (p = a.alternate), (n = a.flags), a.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((n & 1024) !== 0 && p !== null) {
                ((n = void 0),
                  (o = a),
                  (f = p.memoizedProps),
                  (p = p.memoizedState),
                  (u = o.stateNode));
                try {
                  var Ue = Si(o.type, f, o.elementType === o.type);
                  ((n = u.getSnapshotBeforeUpdate(Ue, p)),
                    (u.__reactInternalSnapshotBeforeUpdate = n));
                } catch (je) {
                  mt(o, o.return, je);
                }
              }
              break;
            case 3:
              if ((n & 1024) !== 0) {
                if (
                  ((n = a.stateNode.containerInfo), (o = n.nodeType), o === 9)
                )
                  ch(n);
                else if (o === 1)
                  switch (n.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      ch(n);
                      break;
                    default:
                      n.textContent = "";
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
              if ((n & 1024) !== 0) throw Error(i(163));
          }
          if (((n = a.sibling), n !== null)) {
            ((n.return = a.return), (Yt = n));
            break;
          }
          Yt = a.return;
        }
  }
  function Tv(n, a, o) {
    var u = o.flags;
    switch (o.tag) {
      case 0:
      case 11:
      case 15:
        (Aa(n, o), u & 4 && Cs(5, o));
        break;
      case 1:
        if ((Aa(n, o), u & 4))
          if (((n = o.stateNode), a === null))
            try {
              n.componentDidMount();
            } catch (b) {
              mt(o, o.return, b);
            }
          else {
            var f = Si(o.type, a.memoizedProps);
            a = a.memoizedState;
            try {
              n.componentDidUpdate(f, a, n.__reactInternalSnapshotBeforeUpdate);
            } catch (b) {
              mt(o, o.return, b);
            }
          }
        (u & 64 && Ev(o), u & 512 && Ts(o, o.return));
        break;
      case 3:
        if ((Aa(n, o), u & 64 && ((n = o.updateQueue), n !== null))) {
          if (((a = null), o.child !== null))
            switch (o.child.tag) {
              case 27:
              case 5:
                a = o.child.stateNode;
                break;
              case 1:
                a = o.child.stateNode;
            }
          try {
            cg(n, a);
          } catch (b) {
            mt(o, o.return, b);
          }
        }
        break;
      case 27:
        a === null && u & 4 && Av(o);
      case 26:
      case 5:
        (Aa(n, o), a === null && u & 4 && Rv(o), u & 512 && Ts(o, o.return));
        break;
      case 12:
        Aa(n, o);
        break;
      case 13:
        (Aa(n, o),
          u & 4 && Nv(n, o),
          u & 64 &&
            ((n = o.memoizedState),
            n !== null &&
              ((n = n.dehydrated),
              n !== null && ((o = nR.bind(null, o)), wR(n, o)))));
        break;
      case 22:
        if (((u = o.memoizedState !== null || ta), !u)) {
          ((a = (a !== null && a.memoizedState !== null) || Dt), (f = ta));
          var p = Dt;
          ((ta = u),
            (Dt = a) && !p ? Ca(n, o, (o.subtreeFlags & 8772) !== 0) : Aa(n, o),
            (ta = f),
            (Dt = p));
        }
        break;
      case 30:
        break;
      default:
        Aa(n, o);
    }
  }
  function Dv(n) {
    var a = n.alternate;
    (a !== null && ((n.alternate = null), Dv(a)),
      (n.child = null),
      (n.deletions = null),
      (n.sibling = null),
      n.tag === 5 && ((a = n.stateNode), a !== null && Ae(a)),
      (n.stateNode = null),
      (n.return = null),
      (n.dependencies = null),
      (n.memoizedProps = null),
      (n.memoizedState = null),
      (n.pendingProps = null),
      (n.stateNode = null),
      (n.updateQueue = null));
  }
  var bt = null,
    _n = !1;
  function na(n, a, o) {
    for (o = o.child; o !== null; ) (Mv(n, a, o), (o = o.sibling));
  }
  function Mv(n, a, o) {
    if (yt && typeof yt.onCommitFiberUnmount == "function")
      try {
        yt.onCommitFiberUnmount($t, o);
      } catch {}
    switch (o.tag) {
      case 26:
        (Dt || _r(o, a),
          na(n, a, o),
          o.memoizedState
            ? o.memoizedState.count--
            : o.stateNode && ((o = o.stateNode), o.parentNode.removeChild(o)));
        break;
      case 27:
        Dt || _r(o, a);
        var u = bt,
          f = _n;
        (ka(o.type) && ((bt = o.stateNode), (_n = !1)),
          na(n, a, o),
          Ps(o.stateNode),
          (bt = u),
          (_n = f));
        break;
      case 5:
        Dt || _r(o, a);
      case 6:
        if (
          ((u = bt),
          (f = _n),
          (bt = null),
          na(n, a, o),
          (bt = u),
          (_n = f),
          bt !== null)
        )
          if (_n)
            try {
              (bt.nodeType === 9
                ? bt.body
                : bt.nodeName === "HTML"
                  ? bt.ownerDocument.body
                  : bt
              ).removeChild(o.stateNode);
            } catch (p) {
              mt(o, a, p);
            }
          else
            try {
              bt.removeChild(o.stateNode);
            } catch (p) {
              mt(o, a, p);
            }
        break;
      case 18:
        bt !== null &&
          (_n
            ? ((n = bt),
              b0(
                n.nodeType === 9
                  ? n.body
                  : n.nodeName === "HTML"
                    ? n.ownerDocument.body
                    : n,
                o.stateNode,
              ),
              qs(n))
            : b0(bt, o.stateNode));
        break;
      case 4:
        ((u = bt),
          (f = _n),
          (bt = o.stateNode.containerInfo),
          (_n = !0),
          na(n, a, o),
          (bt = u),
          (_n = f));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (Dt || Oa(2, o, a), Dt || Oa(4, o, a), na(n, a, o));
        break;
      case 1:
        (Dt ||
          (_r(o, a),
          (u = o.stateNode),
          typeof u.componentWillUnmount == "function" && xv(o, a, u)),
          na(n, a, o));
        break;
      case 21:
        na(n, a, o);
        break;
      case 22:
        ((Dt = (u = Dt) || o.memoizedState !== null), na(n, a, o), (Dt = u));
        break;
      default:
        na(n, a, o);
    }
  }
  function Nv(n, a) {
    if (
      a.memoizedState === null &&
      ((n = a.alternate),
      n !== null &&
        ((n = n.memoizedState), n !== null && ((n = n.dehydrated), n !== null)))
    )
      try {
        qs(n);
      } catch (o) {
        mt(a, a.return, o);
      }
  }
  function Yx(n) {
    switch (n.tag) {
      case 13:
      case 19:
        var a = n.stateNode;
        return (a === null && (a = n.stateNode = new Cv()), a);
      case 22:
        return (
          (n = n.stateNode),
          (a = n._retryCache),
          a === null && (a = n._retryCache = new Cv()),
          a
        );
      default:
        throw Error(i(435, n.tag));
    }
  }
  function Ud(n, a) {
    var o = Yx(n);
    a.forEach(function (u) {
      var f = rR.bind(null, n, u);
      o.has(u) || (o.add(u), u.then(f, f));
    });
  }
  function kn(n, a) {
    var o = a.deletions;
    if (o !== null)
      for (var u = 0; u < o.length; u++) {
        var f = o[u],
          p = n,
          b = a,
          R = b;
        e: for (; R !== null; ) {
          switch (R.tag) {
            case 27:
              if (ka(R.type)) {
                ((bt = R.stateNode), (_n = !1));
                break e;
              }
              break;
            case 5:
              ((bt = R.stateNode), (_n = !1));
              break e;
            case 3:
            case 4:
              ((bt = R.stateNode.containerInfo), (_n = !0));
              break e;
          }
          R = R.return;
        }
        if (bt === null) throw Error(i(160));
        (Mv(p, b, f),
          (bt = null),
          (_n = !1),
          (p = f.alternate),
          p !== null && (p.return = null),
          (f.return = null));
      }
    if (a.subtreeFlags & 13878)
      for (a = a.child; a !== null; ) (zv(a, n), (a = a.sibling));
  }
  var fr = null;
  function zv(n, a) {
    var o = n.alternate,
      u = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (kn(a, n),
          jn(n),
          u & 4 && (Oa(3, n, n.return), Cs(3, n), Oa(5, n, n.return)));
        break;
      case 1:
        (kn(a, n),
          jn(n),
          u & 512 && (Dt || o === null || _r(o, o.return)),
          u & 64 &&
            ta &&
            ((n = n.updateQueue),
            n !== null &&
              ((u = n.callbacks),
              u !== null &&
                ((o = n.shared.hiddenCallbacks),
                (n.shared.hiddenCallbacks = o === null ? u : o.concat(u))))));
        break;
      case 26:
        var f = fr;
        if (
          (kn(a, n),
          jn(n),
          u & 512 && (Dt || o === null || _r(o, o.return)),
          u & 4)
        ) {
          var p = o !== null ? o.memoizedState : null;
          if (((u = n.memoizedState), o === null))
            if (u === null)
              if (n.stateNode === null) {
                e: {
                  ((u = n.type),
                    (o = n.memoizedProps),
                    (f = f.ownerDocument || f));
                  t: switch (u) {
                    case "title":
                      ((p = f.getElementsByTagName("title")[0]),
                        (!p ||
                          p[_e] ||
                          p[$] ||
                          p.namespaceURI === "http://www.w3.org/2000/svg" ||
                          p.hasAttribute("itemprop")) &&
                          ((p = f.createElement(u)),
                          f.head.insertBefore(
                            p,
                            f.querySelector("head > title"),
                          )),
                        en(p, u, o),
                        (p[$] = n),
                        Pe(p),
                        (u = p));
                      break e;
                    case "link":
                      var b = A0("link", "href", f).get(u + (o.href || ""));
                      if (b) {
                        for (var R = 0; R < b.length; R++)
                          if (
                            ((p = b[R]),
                            p.getAttribute("href") ===
                              (o.href == null || o.href === ""
                                ? null
                                : o.href) &&
                              p.getAttribute("rel") ===
                                (o.rel == null ? null : o.rel) &&
                              p.getAttribute("title") ===
                                (o.title == null ? null : o.title) &&
                              p.getAttribute("crossorigin") ===
                                (o.crossOrigin == null ? null : o.crossOrigin))
                          ) {
                            b.splice(R, 1);
                            break t;
                          }
                      }
                      ((p = f.createElement(u)),
                        en(p, u, o),
                        f.head.appendChild(p));
                      break;
                    case "meta":
                      if (
                        (b = A0("meta", "content", f).get(
                          u + (o.content || ""),
                        ))
                      ) {
                        for (R = 0; R < b.length; R++)
                          if (
                            ((p = b[R]),
                            p.getAttribute("content") ===
                              (o.content == null ? null : "" + o.content) &&
                              p.getAttribute("name") ===
                                (o.name == null ? null : o.name) &&
                              p.getAttribute("property") ===
                                (o.property == null ? null : o.property) &&
                              p.getAttribute("http-equiv") ===
                                (o.httpEquiv == null ? null : o.httpEquiv) &&
                              p.getAttribute("charset") ===
                                (o.charSet == null ? null : o.charSet))
                          ) {
                            b.splice(R, 1);
                            break t;
                          }
                      }
                      ((p = f.createElement(u)),
                        en(p, u, o),
                        f.head.appendChild(p));
                      break;
                    default:
                      throw Error(i(468, u));
                  }
                  ((p[$] = n), Pe(p), (u = p));
                }
                n.stateNode = u;
              } else C0(f, n.type, n.stateNode);
            else n.stateNode = O0(f, u, n.memoizedProps);
          else
            p !== u
              ? (p === null
                  ? o.stateNode !== null &&
                    ((o = o.stateNode), o.parentNode.removeChild(o))
                  : p.count--,
                u === null
                  ? C0(f, n.type, n.stateNode)
                  : O0(f, u, n.memoizedProps))
              : u === null &&
                n.stateNode !== null &&
                zd(n, n.memoizedProps, o.memoizedProps);
        }
        break;
      case 27:
        (kn(a, n),
          jn(n),
          u & 512 && (Dt || o === null || _r(o, o.return)),
          o !== null && u & 4 && zd(n, n.memoizedProps, o.memoizedProps));
        break;
      case 5:
        if (
          (kn(a, n),
          jn(n),
          u & 512 && (Dt || o === null || _r(o, o.return)),
          n.flags & 32)
        ) {
          f = n.stateNode;
          try {
            qi(f, "");
          } catch (J) {
            mt(n, n.return, J);
          }
        }
        (u & 4 &&
          n.stateNode != null &&
          ((f = n.memoizedProps), zd(n, f, o !== null ? o.memoizedProps : f)),
          u & 1024 && (Ld = !0));
        break;
      case 6:
        if ((kn(a, n), jn(n), u & 4)) {
          if (n.stateNode === null) throw Error(i(162));
          ((u = n.memoizedProps), (o = n.stateNode));
          try {
            o.nodeValue = u;
          } catch (J) {
            mt(n, n.return, J);
          }
        }
        break;
      case 3:
        if (
          ((zu = null),
          (f = fr),
          (fr = Mu(a.containerInfo)),
          kn(a, n),
          (fr = f),
          jn(n),
          u & 4 && o !== null && o.memoizedState.isDehydrated)
        )
          try {
            qs(a.containerInfo);
          } catch (J) {
            mt(n, n.return, J);
          }
        Ld && ((Ld = !1), kv(n));
        break;
      case 4:
        ((u = fr),
          (fr = Mu(n.stateNode.containerInfo)),
          kn(a, n),
          jn(n),
          (fr = u));
        break;
      case 12:
        (kn(a, n), jn(n));
        break;
      case 13:
        (kn(a, n),
          jn(n),
          n.child.flags & 8192 &&
            (n.memoizedState !== null) !=
              (o !== null && o.memoizedState !== null) &&
            (Hd = Vt()),
          u & 4 &&
            ((u = n.updateQueue),
            u !== null && ((n.updateQueue = null), Ud(n, u))));
        break;
      case 22:
        f = n.memoizedState !== null;
        var L = o !== null && o.memoizedState !== null,
          K = ta,
          re = Dt;
        if (
          ((ta = K || f),
          (Dt = re || L),
          kn(a, n),
          (Dt = re),
          (ta = K),
          jn(n),
          u & 8192)
        )
          e: for (
            a = n.stateNode,
              a._visibility = f ? a._visibility & -2 : a._visibility | 1,
              f && (o === null || L || ta || Dt || _i(n)),
              o = null,
              a = n;
            ;

          ) {
            if (a.tag === 5 || a.tag === 26) {
              if (o === null) {
                L = o = a;
                try {
                  if (((p = L.stateNode), f))
                    ((b = p.style),
                      typeof b.setProperty == "function"
                        ? b.setProperty("display", "none", "important")
                        : (b.display = "none"));
                  else {
                    R = L.stateNode;
                    var ue = L.memoizedProps.style,
                      X =
                        ue != null && ue.hasOwnProperty("display")
                          ? ue.display
                          : null;
                    R.style.display =
                      X == null || typeof X == "boolean" ? "" : ("" + X).trim();
                  }
                } catch (J) {
                  mt(L, L.return, J);
                }
              }
            } else if (a.tag === 6) {
              if (o === null) {
                L = a;
                try {
                  L.stateNode.nodeValue = f ? "" : L.memoizedProps;
                } catch (J) {
                  mt(L, L.return, J);
                }
              }
            } else if (
              ((a.tag !== 22 && a.tag !== 23) ||
                a.memoizedState === null ||
                a === n) &&
              a.child !== null
            ) {
              ((a.child.return = a), (a = a.child));
              continue;
            }
            if (a === n) break e;
            for (; a.sibling === null; ) {
              if (a.return === null || a.return === n) break e;
              (o === a && (o = null), (a = a.return));
            }
            (o === a && (o = null),
              (a.sibling.return = a.return),
              (a = a.sibling));
          }
        u & 4 &&
          ((u = n.updateQueue),
          u !== null &&
            ((o = u.retryQueue),
            o !== null && ((u.retryQueue = null), Ud(n, o))));
        break;
      case 19:
        (kn(a, n),
          jn(n),
          u & 4 &&
            ((u = n.updateQueue),
            u !== null && ((n.updateQueue = null), Ud(n, u))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (kn(a, n), jn(n));
    }
  }
  function jn(n) {
    var a = n.flags;
    if (a & 2) {
      try {
        for (var o, u = n.return; u !== null; ) {
          if (Ov(u)) {
            o = u;
            break;
          }
          u = u.return;
        }
        if (o == null) throw Error(i(160));
        switch (o.tag) {
          case 27:
            var f = o.stateNode,
              p = kd(n);
            vu(n, p, f);
            break;
          case 5:
            var b = o.stateNode;
            o.flags & 32 && (qi(b, ""), (o.flags &= -33));
            var R = kd(n);
            vu(n, R, b);
            break;
          case 3:
          case 4:
            var L = o.stateNode.containerInfo,
              K = kd(n);
            jd(n, K, L);
            break;
          default:
            throw Error(i(161));
        }
      } catch (re) {
        mt(n, n.return, re);
      }
      n.flags &= -3;
    }
    a & 4096 && (n.flags &= -4097);
  }
  function kv(n) {
    if (n.subtreeFlags & 1024)
      for (n = n.child; n !== null; ) {
        var a = n;
        (kv(a),
          a.tag === 5 && a.flags & 1024 && a.stateNode.reset(),
          (n = n.sibling));
      }
  }
  function Aa(n, a) {
    if (a.subtreeFlags & 8772)
      for (a = a.child; a !== null; ) (Tv(n, a.alternate, a), (a = a.sibling));
  }
  function _i(n) {
    for (n = n.child; n !== null; ) {
      var a = n;
      switch (a.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (Oa(4, a, a.return), _i(a));
          break;
        case 1:
          _r(a, a.return);
          var o = a.stateNode;
          (typeof o.componentWillUnmount == "function" && xv(a, a.return, o),
            _i(a));
          break;
        case 27:
          Ps(a.stateNode);
        case 26:
        case 5:
          (_r(a, a.return), _i(a));
          break;
        case 22:
          a.memoizedState === null && _i(a);
          break;
        case 30:
          _i(a);
          break;
        default:
          _i(a);
      }
      n = n.sibling;
    }
  }
  function Ca(n, a, o) {
    for (o = o && (a.subtreeFlags & 8772) !== 0, a = a.child; a !== null; ) {
      var u = a.alternate,
        f = n,
        p = a,
        b = p.flags;
      switch (p.tag) {
        case 0:
        case 11:
        case 15:
          (Ca(f, p, o), Cs(4, p));
          break;
        case 1:
          if (
            (Ca(f, p, o),
            (u = p),
            (f = u.stateNode),
            typeof f.componentDidMount == "function")
          )
            try {
              f.componentDidMount();
            } catch (K) {
              mt(u, u.return, K);
            }
          if (((u = p), (f = u.updateQueue), f !== null)) {
            var R = u.stateNode;
            try {
              var L = f.shared.hiddenCallbacks;
              if (L !== null)
                for (f.shared.hiddenCallbacks = null, f = 0; f < L.length; f++)
                  ug(L[f], R);
            } catch (K) {
              mt(u, u.return, K);
            }
          }
          (o && b & 64 && Ev(p), Ts(p, p.return));
          break;
        case 27:
          Av(p);
        case 26:
        case 5:
          (Ca(f, p, o), o && u === null && b & 4 && Rv(p), Ts(p, p.return));
          break;
        case 12:
          Ca(f, p, o);
          break;
        case 13:
          (Ca(f, p, o), o && b & 4 && Nv(f, p));
          break;
        case 22:
          (p.memoizedState === null && Ca(f, p, o), Ts(p, p.return));
          break;
        case 30:
          break;
        default:
          Ca(f, p, o);
      }
      a = a.sibling;
    }
  }
  function Pd(n, a) {
    var o = null;
    (n !== null &&
      n.memoizedState !== null &&
      n.memoizedState.cachePool !== null &&
      (o = n.memoizedState.cachePool.pool),
      (n = null),
      a.memoizedState !== null &&
        a.memoizedState.cachePool !== null &&
        (n = a.memoizedState.cachePool.pool),
      n !== o && (n != null && n.refCount++, o != null && ms(o)));
  }
  function Fd(n, a) {
    ((n = null),
      a.alternate !== null && (n = a.alternate.memoizedState.cache),
      (a = a.memoizedState.cache),
      a !== n && (a.refCount++, n != null && ms(n)));
  }
  function Er(n, a, o, u) {
    if (a.subtreeFlags & 10256)
      for (a = a.child; a !== null; ) (jv(n, a, o, u), (a = a.sibling));
  }
  function jv(n, a, o, u) {
    var f = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        (Er(n, a, o, u), f & 2048 && Cs(9, a));
        break;
      case 1:
        Er(n, a, o, u);
        break;
      case 3:
        (Er(n, a, o, u),
          f & 2048 &&
            ((n = null),
            a.alternate !== null && (n = a.alternate.memoizedState.cache),
            (a = a.memoizedState.cache),
            a !== n && (a.refCount++, n != null && ms(n))));
        break;
      case 12:
        if (f & 2048) {
          (Er(n, a, o, u), (n = a.stateNode));
          try {
            var p = a.memoizedProps,
              b = p.id,
              R = p.onPostCommit;
            typeof R == "function" &&
              R(
                b,
                a.alternate === null ? "mount" : "update",
                n.passiveEffectDuration,
                -0,
              );
          } catch (L) {
            mt(a, a.return, L);
          }
        } else Er(n, a, o, u);
        break;
      case 13:
        Er(n, a, o, u);
        break;
      case 23:
        break;
      case 22:
        ((p = a.stateNode),
          (b = a.alternate),
          a.memoizedState !== null
            ? p._visibility & 2
              ? Er(n, a, o, u)
              : Ds(n, a)
            : p._visibility & 2
              ? Er(n, a, o, u)
              : ((p._visibility |= 2),
                fo(n, a, o, u, (a.subtreeFlags & 10256) !== 0)),
          f & 2048 && Pd(b, a));
        break;
      case 24:
        (Er(n, a, o, u), f & 2048 && Fd(a.alternate, a));
        break;
      default:
        Er(n, a, o, u);
    }
  }
  function fo(n, a, o, u, f) {
    for (f = f && (a.subtreeFlags & 10256) !== 0, a = a.child; a !== null; ) {
      var p = n,
        b = a,
        R = o,
        L = u,
        K = b.flags;
      switch (b.tag) {
        case 0:
        case 11:
        case 15:
          (fo(p, b, R, L, f), Cs(8, b));
          break;
        case 23:
          break;
        case 22:
          var re = b.stateNode;
          (b.memoizedState !== null
            ? re._visibility & 2
              ? fo(p, b, R, L, f)
              : Ds(p, b)
            : ((re._visibility |= 2), fo(p, b, R, L, f)),
            f && K & 2048 && Pd(b.alternate, b));
          break;
        case 24:
          (fo(p, b, R, L, f), f && K & 2048 && Fd(b.alternate, b));
          break;
        default:
          fo(p, b, R, L, f);
      }
      a = a.sibling;
    }
  }
  function Ds(n, a) {
    if (a.subtreeFlags & 10256)
      for (a = a.child; a !== null; ) {
        var o = n,
          u = a,
          f = u.flags;
        switch (u.tag) {
          case 22:
            (Ds(o, u), f & 2048 && Pd(u.alternate, u));
            break;
          case 24:
            (Ds(o, u), f & 2048 && Fd(u.alternate, u));
            break;
          default:
            Ds(o, u);
        }
        a = a.sibling;
      }
  }
  var Ms = 8192;
  function ho(n) {
    if (n.subtreeFlags & Ms)
      for (n = n.child; n !== null; ) (Lv(n), (n = n.sibling));
  }
  function Lv(n) {
    switch (n.tag) {
      case 26:
        (ho(n),
          n.flags & Ms &&
            n.memoizedState !== null &&
            zR(fr, n.memoizedState, n.memoizedProps));
        break;
      case 5:
        ho(n);
        break;
      case 3:
      case 4:
        var a = fr;
        ((fr = Mu(n.stateNode.containerInfo)), ho(n), (fr = a));
        break;
      case 22:
        n.memoizedState === null &&
          ((a = n.alternate),
          a !== null && a.memoizedState !== null
            ? ((a = Ms), (Ms = 16777216), ho(n), (Ms = a))
            : ho(n));
        break;
      default:
        ho(n);
    }
  }
  function Uv(n) {
    var a = n.alternate;
    if (a !== null && ((n = a.child), n !== null)) {
      a.child = null;
      do ((a = n.sibling), (n.sibling = null), (n = a));
      while (n !== null);
    }
  }
  function Ns(n) {
    var a = n.deletions;
    if ((n.flags & 16) !== 0) {
      if (a !== null)
        for (var o = 0; o < a.length; o++) {
          var u = a[o];
          ((Yt = u), Fv(u, n));
        }
      Uv(n);
    }
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; ) (Pv(n), (n = n.sibling));
  }
  function Pv(n) {
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        (Ns(n), n.flags & 2048 && Oa(9, n, n.return));
        break;
      case 3:
        Ns(n);
        break;
      case 12:
        Ns(n);
        break;
      case 22:
        var a = n.stateNode;
        n.memoizedState !== null &&
        a._visibility & 2 &&
        (n.return === null || n.return.tag !== 13)
          ? ((a._visibility &= -3), bu(n))
          : Ns(n);
        break;
      default:
        Ns(n);
    }
  }
  function bu(n) {
    var a = n.deletions;
    if ((n.flags & 16) !== 0) {
      if (a !== null)
        for (var o = 0; o < a.length; o++) {
          var u = a[o];
          ((Yt = u), Fv(u, n));
        }
      Uv(n);
    }
    for (n = n.child; n !== null; ) {
      switch (((a = n), a.tag)) {
        case 0:
        case 11:
        case 15:
          (Oa(8, a, a.return), bu(a));
          break;
        case 22:
          ((o = a.stateNode),
            o._visibility & 2 && ((o._visibility &= -3), bu(a)));
          break;
        default:
          bu(a);
      }
      n = n.sibling;
    }
  }
  function Fv(n, a) {
    for (; Yt !== null; ) {
      var o = Yt;
      switch (o.tag) {
        case 0:
        case 11:
        case 15:
          Oa(8, o, a);
          break;
        case 23:
        case 22:
          if (o.memoizedState !== null && o.memoizedState.cachePool !== null) {
            var u = o.memoizedState.cachePool.pool;
            u != null && u.refCount++;
          }
          break;
        case 24:
          ms(o.memoizedState.cache);
      }
      if (((u = o.child), u !== null)) ((u.return = o), (Yt = u));
      else
        e: for (o = n; Yt !== null; ) {
          u = Yt;
          var f = u.sibling,
            p = u.return;
          if ((Dv(u), u === o)) {
            Yt = null;
            break e;
          }
          if (f !== null) {
            ((f.return = p), (Yt = f));
            break e;
          }
          Yt = p;
        }
    }
  }
  var Kx = {
      getCacheForType: function (n) {
        var a = un(It),
          o = a.data.get(n);
        return (o === void 0 && ((o = n()), a.data.set(n, o)), o);
      },
    },
    Qx = typeof WeakMap == "function" ? WeakMap : Map,
    ot = 0,
    pt = null,
    Ke = null,
    We = 0,
    st = 0,
    Ln = null,
    Ta = !1,
    mo = !1,
    Bd = !1,
    ra = 0,
    At = 0,
    Da = 0,
    Ei = 0,
    Vd = 0,
    er = 0,
    po = 0,
    zs = null,
    En = null,
    $d = !1,
    Hd = 0,
    wu = 1 / 0,
    Su = null,
    Ma = null,
    Wt = 0,
    Na = null,
    yo = null,
    go = 0,
    Id = 0,
    Zd = null,
    Bv = null,
    ks = 0,
    qd = null;
  function Un() {
    if ((ot & 2) !== 0 && We !== 0) return We & -We;
    if (U.T !== null) {
      var n = ro;
      return n !== 0 ? n : Wd();
    }
    return O();
  }
  function Vv() {
    er === 0 && (er = (We & 536870912) === 0 || nt ? ma() : 536870912);
    var n = Wn.current;
    return (n !== null && (n.flags |= 32), er);
  }
  function Pn(n, a, o) {
    (((n === pt && (st === 2 || st === 9)) || n.cancelPendingCommit !== null) &&
      (vo(n, 0), za(n, We, er, !1)),
      pa(n, o),
      ((ot & 2) === 0 || n !== pt) &&
        (n === pt &&
          ((ot & 2) === 0 && (Ei |= o), At === 4 && za(n, We, er, !1)),
        xr(n)));
  }
  function $v(n, a, o) {
    if ((ot & 6) !== 0) throw Error(i(327));
    var u = (!o && (a & 124) === 0 && (a & n.expiredLanes) === 0) || Dn(n, a),
      f = u ? Wx(n, a) : Kd(n, a, !0),
      p = u;
    do {
      if (f === 0) {
        mo && !u && za(n, a, 0, !1);
        break;
      } else {
        if (((o = n.current.alternate), p && !Xx(o))) {
          ((f = Kd(n, a, !1)), (p = !1));
          continue;
        }
        if (f === 2) {
          if (((p = a), n.errorRecoveryDisabledLanes & p)) var b = 0;
          else
            ((b = n.pendingLanes & -536870913),
              (b = b !== 0 ? b : b & 536870912 ? 536870912 : 0));
          if (b !== 0) {
            a = b;
            e: {
              var R = n;
              f = zs;
              var L = R.current.memoizedState.isDehydrated;
              if ((L && (vo(R, b).flags |= 256), (b = Kd(R, b, !1)), b !== 2)) {
                if (Bd && !L) {
                  ((R.errorRecoveryDisabledLanes |= p), (Ei |= p), (f = 4));
                  break e;
                }
                ((p = En),
                  (En = f),
                  p !== null &&
                    (En === null ? (En = p) : En.push.apply(En, p)));
              }
              f = b;
            }
            if (((p = !1), f !== 2)) continue;
          }
        }
        if (f === 1) {
          (vo(n, 0), za(n, a, 0, !0));
          break;
        }
        e: {
          switch (((u = n), (p = f), p)) {
            case 0:
            case 1:
              throw Error(i(345));
            case 4:
              if ((a & 4194048) !== a) break;
            case 6:
              za(u, a, er, !Ta);
              break e;
            case 2:
              En = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(i(329));
          }
          if ((a & 62914560) === a && ((f = Hd + 300 - Vt()), 10 < f)) {
            if ((za(u, a, er, !Ta), Br(u, 0, !0) !== 0)) break e;
            u.timeoutHandle = g0(
              Hv.bind(null, u, o, En, Su, $d, a, er, Ei, po, Ta, p, 2, -0, 0),
              f,
            );
            break e;
          }
          Hv(u, o, En, Su, $d, a, er, Ei, po, Ta, p, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    xr(n);
  }
  function Hv(n, a, o, u, f, p, b, R, L, K, re, ue, X, J) {
    if (
      ((n.timeoutHandle = -1),
      (ue = a.subtreeFlags),
      (ue & 8192 || (ue & 16785408) === 16785408) &&
        ((Vs = { stylesheets: null, count: 0, unsuspend: NR }),
        Lv(a),
        (ue = kR()),
        ue !== null))
    ) {
      ((n.cancelPendingCommit = ue(
        Qv.bind(null, n, a, p, o, u, f, b, R, L, re, 1, X, J),
      )),
        za(n, p, b, !K));
      return;
    }
    Qv(n, a, p, o, u, f, b, R, L);
  }
  function Xx(n) {
    for (var a = n; ; ) {
      var o = a.tag;
      if (
        (o === 0 || o === 11 || o === 15) &&
        a.flags & 16384 &&
        ((o = a.updateQueue), o !== null && ((o = o.stores), o !== null))
      )
        for (var u = 0; u < o.length; u++) {
          var f = o[u],
            p = f.getSnapshot;
          f = f.value;
          try {
            if (!Nn(p(), f)) return !1;
          } catch {
            return !1;
          }
        }
      if (((o = a.child), a.subtreeFlags & 16384 && o !== null))
        ((o.return = a), (a = o));
      else {
        if (a === n) break;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === n) return !0;
          a = a.return;
        }
        ((a.sibling.return = a.return), (a = a.sibling));
      }
    }
    return !0;
  }
  function za(n, a, o, u) {
    ((a &= ~Vd),
      (a &= ~Ei),
      (n.suspendedLanes |= a),
      (n.pingedLanes &= ~a),
      u && (n.warmLanes |= a),
      (u = n.expirationTimes));
    for (var f = a; 0 < f; ) {
      var p = 31 - Ht(f),
        b = 1 << p;
      ((u[p] = -1), (f &= ~b));
    }
    o !== 0 && A(n, o, a);
  }
  function _u() {
    return (ot & 6) === 0 ? (js(0), !1) : !0;
  }
  function Gd() {
    if (Ke !== null) {
      if (st === 0) var n = Ke.return;
      else ((n = Ke), (Kr = gi = null), cd(n), (uo = null), (Rs = 0), (n = Ke));
      for (; n !== null; ) (_v(n.alternate, n), (n = n.return));
      Ke = null;
    }
  }
  function vo(n, a) {
    var o = n.timeoutHandle;
    (o !== -1 && ((n.timeoutHandle = -1), pR(o)),
      (o = n.cancelPendingCommit),
      o !== null && ((n.cancelPendingCommit = null), o()),
      Gd(),
      (pt = n),
      (Ke = o = qr(n.current, null)),
      (We = a),
      (st = 0),
      (Ln = null),
      (Ta = !1),
      (mo = Dn(n, a)),
      (Bd = !1),
      (po = er = Vd = Ei = Da = At = 0),
      (En = zs = null),
      ($d = !1),
      (a & 8) !== 0 && (a |= a & 32));
    var u = n.entangledLanes;
    if (u !== 0)
      for (n = n.entanglements, u &= a; 0 < u; ) {
        var f = 31 - Ht(u),
          p = 1 << f;
        ((a |= n[f]), (u &= ~p));
      }
    return ((ra = a), Il(), o);
  }
  function Iv(n, a) {
    ((He = null),
      (U.H = uu),
      a === ys || a === Wl
        ? ((a = sg()), (st = 3))
        : a === ag
          ? ((a = sg()), (st = 4))
          : (st =
              a === lv
                ? 8
                : a !== null &&
                    typeof a == "object" &&
                    typeof a.then == "function"
                  ? 6
                  : 1),
      (Ln = a),
      Ke === null && ((At = 1), mu(n, Kn(a, n.current))));
  }
  function Zv() {
    var n = U.H;
    return ((U.H = uu), n === null ? uu : n);
  }
  function qv() {
    var n = U.A;
    return ((U.A = Kx), n);
  }
  function Yd() {
    ((At = 4),
      Ta || ((We & 4194048) !== We && Wn.current !== null) || (mo = !0),
      ((Da & 134217727) === 0 && (Ei & 134217727) === 0) ||
        pt === null ||
        za(pt, We, er, !1));
  }
  function Kd(n, a, o) {
    var u = ot;
    ot |= 2;
    var f = Zv(),
      p = qv();
    ((pt !== n || We !== a) && ((Su = null), vo(n, a)), (a = !1));
    var b = At;
    e: do
      try {
        if (st !== 0 && Ke !== null) {
          var R = Ke,
            L = Ln;
          switch (st) {
            case 8:
              (Gd(), (b = 6));
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Wn.current === null && (a = !0);
              var K = st;
              if (((st = 0), (Ln = null), bo(n, R, L, K), o && mo)) {
                b = 0;
                break e;
              }
              break;
            default:
              ((K = st), (st = 0), (Ln = null), bo(n, R, L, K));
          }
        }
        (Jx(), (b = At));
        break;
      } catch (re) {
        Iv(n, re);
      }
    while (!0);
    return (
      a && n.shellSuspendCounter++,
      (Kr = gi = null),
      (ot = u),
      (U.H = f),
      (U.A = p),
      Ke === null && ((pt = null), (We = 0), Il()),
      b
    );
  }
  function Jx() {
    for (; Ke !== null; ) Gv(Ke);
  }
  function Wx(n, a) {
    var o = ot;
    ot |= 2;
    var u = Zv(),
      f = qv();
    pt !== n || We !== a
      ? ((Su = null), (wu = Vt() + 500), vo(n, a))
      : (mo = Dn(n, a));
    e: do
      try {
        if (st !== 0 && Ke !== null) {
          a = Ke;
          var p = Ln;
          t: switch (st) {
            case 1:
              ((st = 0), (Ln = null), bo(n, a, p, 1));
              break;
            case 2:
            case 9:
              if (ig(p)) {
                ((st = 0), (Ln = null), Yv(a));
                break;
              }
              ((a = function () {
                ((st !== 2 && st !== 9) || pt !== n || (st = 7), xr(n));
              }),
                p.then(a, a));
              break e;
            case 3:
              st = 7;
              break e;
            case 4:
              st = 5;
              break e;
            case 7:
              ig(p)
                ? ((st = 0), (Ln = null), Yv(a))
                : ((st = 0), (Ln = null), bo(n, a, p, 7));
              break;
            case 5:
              var b = null;
              switch (Ke.tag) {
                case 26:
                  b = Ke.memoizedState;
                case 5:
                case 27:
                  var R = Ke;
                  if (!b || T0(b)) {
                    ((st = 0), (Ln = null));
                    var L = R.sibling;
                    if (L !== null) Ke = L;
                    else {
                      var K = R.return;
                      K !== null ? ((Ke = K), Eu(K)) : (Ke = null);
                    }
                    break t;
                  }
              }
              ((st = 0), (Ln = null), bo(n, a, p, 5));
              break;
            case 6:
              ((st = 0), (Ln = null), bo(n, a, p, 6));
              break;
            case 8:
              (Gd(), (At = 6));
              break e;
            default:
              throw Error(i(462));
          }
        }
        eR();
        break;
      } catch (re) {
        Iv(n, re);
      }
    while (!0);
    return (
      (Kr = gi = null),
      (U.H = u),
      (U.A = f),
      (ot = o),
      Ke !== null ? 0 : ((pt = null), (We = 0), Il(), At)
    );
  }
  function eR() {
    for (; Ke !== null && !Vi(); ) Gv(Ke);
  }
  function Gv(n) {
    var a = wv(n.alternate, n, ra);
    ((n.memoizedProps = n.pendingProps), a === null ? Eu(n) : (Ke = a));
  }
  function Yv(n) {
    var a = n,
      o = a.alternate;
    switch (a.tag) {
      case 15:
      case 0:
        a = mv(o, a, a.pendingProps, a.type, void 0, We);
        break;
      case 11:
        a = mv(o, a, a.pendingProps, a.type.render, a.ref, We);
        break;
      case 5:
        cd(a);
      default:
        (_v(o, a), (a = Ke = Ky(a, ra)), (a = wv(o, a, ra)));
    }
    ((n.memoizedProps = n.pendingProps), a === null ? Eu(n) : (Ke = a));
  }
  function bo(n, a, o, u) {
    ((Kr = gi = null), cd(a), (uo = null), (Rs = 0));
    var f = a.return;
    try {
      if (Hx(n, f, a, o, We)) {
        ((At = 1), mu(n, Kn(o, n.current)), (Ke = null));
        return;
      }
    } catch (p) {
      if (f !== null) throw ((Ke = f), p);
      ((At = 1), mu(n, Kn(o, n.current)), (Ke = null));
      return;
    }
    a.flags & 32768
      ? (nt || u === 1
          ? (n = !0)
          : mo || (We & 536870912) !== 0
            ? (n = !1)
            : ((Ta = n = !0),
              (u === 2 || u === 9 || u === 3 || u === 6) &&
                ((u = Wn.current),
                u !== null && u.tag === 13 && (u.flags |= 16384))),
        Kv(a, n))
      : Eu(a);
  }
  function Eu(n) {
    var a = n;
    do {
      if ((a.flags & 32768) !== 0) {
        Kv(a, Ta);
        return;
      }
      n = a.return;
      var o = Zx(a.alternate, a, ra);
      if (o !== null) {
        Ke = o;
        return;
      }
      if (((a = a.sibling), a !== null)) {
        Ke = a;
        return;
      }
      Ke = a = n;
    } while (a !== null);
    At === 0 && (At = 5);
  }
  function Kv(n, a) {
    do {
      var o = qx(n.alternate, n);
      if (o !== null) {
        ((o.flags &= 32767), (Ke = o));
        return;
      }
      if (
        ((o = n.return),
        o !== null &&
          ((o.flags |= 32768), (o.subtreeFlags = 0), (o.deletions = null)),
        !a && ((n = n.sibling), n !== null))
      ) {
        Ke = n;
        return;
      }
      Ke = n = o;
    } while (n !== null);
    ((At = 6), (Ke = null));
  }
  function Qv(n, a, o, u, f, p, b, R, L) {
    n.cancelPendingCommit = null;
    do xu();
    while (Wt !== 0);
    if ((ot & 6) !== 0) throw Error(i(327));
    if (a !== null) {
      if (a === n.current) throw Error(i(177));
      if (
        ((p = a.lanes | a.childLanes),
        (p |= Ff),
        li(n, o, p, b, R, L),
        n === pt && ((Ke = pt = null), (We = 0)),
        (yo = a),
        (Na = n),
        (go = o),
        (Id = p),
        (Zd = f),
        (Bv = u),
        (a.subtreeFlags & 10256) !== 0 || (a.flags & 10256) !== 0
          ? ((n.callbackNode = null),
            (n.callbackPriority = 0),
            aR(In, function () {
              return (t0(), null);
            }))
          : ((n.callbackNode = null), (n.callbackPriority = 0)),
        (u = (a.flags & 13878) !== 0),
        (a.subtreeFlags & 13878) !== 0 || u)
      ) {
        ((u = U.T), (U.T = null), (f = ne.p), (ne.p = 2), (b = ot), (ot |= 4));
        try {
          Gx(n, a, o);
        } finally {
          ((ot = b), (ne.p = f), (U.T = u));
        }
      }
      ((Wt = 1), Xv(), Jv(), Wv());
    }
  }
  function Xv() {
    if (Wt === 1) {
      Wt = 0;
      var n = Na,
        a = yo,
        o = (a.flags & 13878) !== 0;
      if ((a.subtreeFlags & 13878) !== 0 || o) {
        ((o = U.T), (U.T = null));
        var u = ne.p;
        ne.p = 2;
        var f = ot;
        ot |= 4;
        try {
          zv(a, n);
          var p = sh,
            b = Fy(n.containerInfo),
            R = p.focusedElem,
            L = p.selectionRange;
          if (
            b !== R &&
            R &&
            R.ownerDocument &&
            Py(R.ownerDocument.documentElement, R)
          ) {
            if (L !== null && kf(R)) {
              var K = L.start,
                re = L.end;
              if ((re === void 0 && (re = K), "selectionStart" in R))
                ((R.selectionStart = K),
                  (R.selectionEnd = Math.min(re, R.value.length)));
              else {
                var ue = R.ownerDocument || document,
                  X = (ue && ue.defaultView) || window;
                if (X.getSelection) {
                  var J = X.getSelection(),
                    Ue = R.textContent.length,
                    je = Math.min(L.start, Ue),
                    ht = L.end === void 0 ? je : Math.min(L.end, Ue);
                  !J.extend && je > ht && ((b = ht), (ht = je), (je = b));
                  var Z = Uy(R, je),
                    V = Uy(R, ht);
                  if (
                    Z &&
                    V &&
                    (J.rangeCount !== 1 ||
                      J.anchorNode !== Z.node ||
                      J.anchorOffset !== Z.offset ||
                      J.focusNode !== V.node ||
                      J.focusOffset !== V.offset)
                  ) {
                    var G = ue.createRange();
                    (G.setStart(Z.node, Z.offset),
                      J.removeAllRanges(),
                      je > ht
                        ? (J.addRange(G), J.extend(V.node, V.offset))
                        : (G.setEnd(V.node, V.offset), J.addRange(G)));
                  }
                }
              }
            }
            for (ue = [], J = R; (J = J.parentNode); )
              J.nodeType === 1 &&
                ue.push({ element: J, left: J.scrollLeft, top: J.scrollTop });
            for (
              typeof R.focus == "function" && R.focus(), R = 0;
              R < ue.length;
              R++
            ) {
              var ae = ue[R];
              ((ae.element.scrollLeft = ae.left),
                (ae.element.scrollTop = ae.top));
            }
          }
          ((Lu = !!oh), (sh = oh = null));
        } finally {
          ((ot = f), (ne.p = u), (U.T = o));
        }
      }
      ((n.current = a), (Wt = 2));
    }
  }
  function Jv() {
    if (Wt === 2) {
      Wt = 0;
      var n = Na,
        a = yo,
        o = (a.flags & 8772) !== 0;
      if ((a.subtreeFlags & 8772) !== 0 || o) {
        ((o = U.T), (U.T = null));
        var u = ne.p;
        ne.p = 2;
        var f = ot;
        ot |= 4;
        try {
          Tv(n, a.alternate, a);
        } finally {
          ((ot = f), (ne.p = u), (U.T = o));
        }
      }
      Wt = 3;
    }
  }
  function Wv() {
    if (Wt === 4 || Wt === 3) {
      ((Wt = 0), $i());
      var n = Na,
        a = yo,
        o = go,
        u = Bv;
      (a.subtreeFlags & 10256) !== 0 || (a.flags & 10256) !== 0
        ? (Wt = 5)
        : ((Wt = 0), (yo = Na = null), e0(n, n.pendingLanes));
      var f = n.pendingLanes;
      if (
        (f === 0 && (Ma = null),
        te(o),
        (a = a.stateNode),
        yt && typeof yt.onCommitFiberRoot == "function")
      )
        try {
          yt.onCommitFiberRoot($t, a, void 0, (a.current.flags & 128) === 128);
        } catch {}
      if (u !== null) {
        ((a = U.T), (f = ne.p), (ne.p = 2), (U.T = null));
        try {
          for (var p = n.onRecoverableError, b = 0; b < u.length; b++) {
            var R = u[b];
            p(R.value, { componentStack: R.stack });
          }
        } finally {
          ((U.T = a), (ne.p = f));
        }
      }
      ((go & 3) !== 0 && xu(),
        xr(n),
        (f = n.pendingLanes),
        (o & 4194090) !== 0 && (f & 42) !== 0
          ? n === qd
            ? ks++
            : ((ks = 0), (qd = n))
          : (ks = 0),
        js(0));
    }
  }
  function e0(n, a) {
    (n.pooledCacheLanes &= a) === 0 &&
      ((a = n.pooledCache), a != null && ((n.pooledCache = null), ms(a)));
  }
  function xu(n) {
    return (Xv(), Jv(), Wv(), t0());
  }
  function t0() {
    if (Wt !== 5) return !1;
    var n = Na,
      a = Id;
    Id = 0;
    var o = te(go),
      u = U.T,
      f = ne.p;
    try {
      ((ne.p = 32 > o ? 32 : o), (U.T = null), (o = Zd), (Zd = null));
      var p = Na,
        b = go;
      if (((Wt = 0), (yo = Na = null), (go = 0), (ot & 6) !== 0))
        throw Error(i(331));
      var R = ot;
      if (
        ((ot |= 4),
        Pv(p.current),
        jv(p, p.current, b, o),
        (ot = R),
        js(0, !1),
        yt && typeof yt.onPostCommitFiberRoot == "function")
      )
        try {
          yt.onPostCommitFiberRoot($t, p);
        } catch {}
      return !0;
    } finally {
      ((ne.p = f), (U.T = u), e0(n, a));
    }
  }
  function n0(n, a, o) {
    ((a = Kn(o, a)),
      (a = xd(n.stateNode, a, 2)),
      (n = _a(n, a, 2)),
      n !== null && (pa(n, 2), xr(n)));
  }
  function mt(n, a, o) {
    if (n.tag === 3) n0(n, n, o);
    else
      for (; a !== null; ) {
        if (a.tag === 3) {
          n0(a, n, o);
          break;
        } else if (a.tag === 1) {
          var u = a.stateNode;
          if (
            typeof a.type.getDerivedStateFromError == "function" ||
            (typeof u.componentDidCatch == "function" &&
              (Ma === null || !Ma.has(u)))
          ) {
            ((n = Kn(o, n)),
              (o = ov(2)),
              (u = _a(a, o, 2)),
              u !== null && (sv(o, u, a, n), pa(u, 2), xr(u)));
            break;
          }
        }
        a = a.return;
      }
  }
  function Qd(n, a, o) {
    var u = n.pingCache;
    if (u === null) {
      u = n.pingCache = new Qx();
      var f = new Set();
      u.set(a, f);
    } else ((f = u.get(a)), f === void 0 && ((f = new Set()), u.set(a, f)));
    f.has(o) ||
      ((Bd = !0), f.add(o), (n = tR.bind(null, n, a, o)), a.then(n, n));
  }
  function tR(n, a, o) {
    var u = n.pingCache;
    (u !== null && u.delete(a),
      (n.pingedLanes |= n.suspendedLanes & o),
      (n.warmLanes &= ~o),
      pt === n &&
        (We & o) === o &&
        (At === 4 || (At === 3 && (We & 62914560) === We && 300 > Vt() - Hd)
          ? (ot & 2) === 0 && vo(n, 0)
          : (Vd |= o),
        po === We && (po = 0)),
      xr(n));
  }
  function r0(n, a) {
    (a === 0 && (a = Hi()), (n = Wi(n, a)), n !== null && (pa(n, a), xr(n)));
  }
  function nR(n) {
    var a = n.memoizedState,
      o = 0;
    (a !== null && (o = a.retryLane), r0(n, o));
  }
  function rR(n, a) {
    var o = 0;
    switch (n.tag) {
      case 13:
        var u = n.stateNode,
          f = n.memoizedState;
        f !== null && (o = f.retryLane);
        break;
      case 19:
        u = n.stateNode;
        break;
      case 22:
        u = n.stateNode._retryCache;
        break;
      default:
        throw Error(i(314));
    }
    (u !== null && u.delete(a), r0(n, o));
  }
  function aR(n, a) {
    return Hn(n, a);
  }
  var Ru = null,
    wo = null,
    Xd = !1,
    Ou = !1,
    Jd = !1,
    xi = 0;
  function xr(n) {
    (n !== wo &&
      n.next === null &&
      (wo === null ? (Ru = wo = n) : (wo = wo.next = n)),
      (Ou = !0),
      Xd || ((Xd = !0), oR()));
  }
  function js(n, a) {
    if (!Jd && Ou) {
      Jd = !0;
      do
        for (var o = !1, u = Ru; u !== null; ) {
          if (n !== 0) {
            var f = u.pendingLanes;
            if (f === 0) var p = 0;
            else {
              var b = u.suspendedLanes,
                R = u.pingedLanes;
              ((p = (1 << (31 - Ht(42 | n) + 1)) - 1),
                (p &= f & ~(b & ~R)),
                (p = p & 201326741 ? (p & 201326741) | 1 : p ? p | 2 : 0));
            }
            p !== 0 && ((o = !0), s0(u, p));
          } else
            ((p = We),
              (p = Br(
                u,
                u === pt ? p : 0,
                u.cancelPendingCommit !== null || u.timeoutHandle !== -1,
              )),
              (p & 3) === 0 || Dn(u, p) || ((o = !0), s0(u, p)));
          u = u.next;
        }
      while (o);
      Jd = !1;
    }
  }
  function iR() {
    a0();
  }
  function a0() {
    Ou = Xd = !1;
    var n = 0;
    xi !== 0 && (mR() && (n = xi), (xi = 0));
    for (var a = Vt(), o = null, u = Ru; u !== null; ) {
      var f = u.next,
        p = i0(u, a);
      (p === 0
        ? ((u.next = null),
          o === null ? (Ru = f) : (o.next = f),
          f === null && (wo = o))
        : ((o = u), (n !== 0 || (p & 3) !== 0) && (Ou = !0)),
        (u = f));
    }
    js(n);
  }
  function i0(n, a) {
    for (
      var o = n.suspendedLanes,
        u = n.pingedLanes,
        f = n.expirationTimes,
        p = n.pendingLanes & -62914561;
      0 < p;

    ) {
      var b = 31 - Ht(p),
        R = 1 << b,
        L = f[b];
      (L === -1
        ? ((R & o) === 0 || (R & u) !== 0) && (f[b] = oi(R, a))
        : L <= a && (n.expiredLanes |= R),
        (p &= ~R));
    }
    if (
      ((a = pt),
      (o = We),
      (o = Br(
        n,
        n === a ? o : 0,
        n.cancelPendingCommit !== null || n.timeoutHandle !== -1,
      )),
      (u = n.callbackNode),
      o === 0 ||
        (n === a && (st === 2 || st === 9)) ||
        n.cancelPendingCommit !== null)
    )
      return (
        u !== null && u !== null && dn(u),
        (n.callbackNode = null),
        (n.callbackPriority = 0)
      );
    if ((o & 3) === 0 || Dn(n, o)) {
      if (((a = o & -o), a === n.callbackPriority)) return a;
      switch ((u !== null && dn(u), te(o))) {
        case 2:
        case 8:
          o = ri;
          break;
        case 32:
          o = In;
          break;
        case 268435456:
          o = vr;
          break;
        default:
          o = In;
      }
      return (
        (u = o0.bind(null, n)),
        (o = Hn(o, u)),
        (n.callbackPriority = a),
        (n.callbackNode = o),
        a
      );
    }
    return (
      u !== null && u !== null && dn(u),
      (n.callbackPriority = 2),
      (n.callbackNode = null),
      2
    );
  }
  function o0(n, a) {
    if (Wt !== 0 && Wt !== 5)
      return ((n.callbackNode = null), (n.callbackPriority = 0), null);
    var o = n.callbackNode;
    if (xu() && n.callbackNode !== o) return null;
    var u = We;
    return (
      (u = Br(
        n,
        n === pt ? u : 0,
        n.cancelPendingCommit !== null || n.timeoutHandle !== -1,
      )),
      u === 0
        ? null
        : ($v(n, u, a),
          i0(n, Vt()),
          n.callbackNode != null && n.callbackNode === o
            ? o0.bind(null, n)
            : null)
    );
  }
  function s0(n, a) {
    if (xu()) return null;
    $v(n, a, !0);
  }
  function oR() {
    yR(function () {
      (ot & 6) !== 0 ? Hn(ni, iR) : a0();
    });
  }
  function Wd() {
    return (xi === 0 && (xi = ma()), xi);
  }
  function l0(n) {
    return n == null || typeof n == "symbol" || typeof n == "boolean"
      ? null
      : typeof n == "function"
        ? n
        : Ul("" + n);
  }
  function u0(n, a) {
    var o = a.ownerDocument.createElement("input");
    return (
      (o.name = a.name),
      (o.value = a.value),
      n.id && o.setAttribute("form", n.id),
      a.parentNode.insertBefore(o, a),
      (n = new FormData(n)),
      o.parentNode.removeChild(o),
      n
    );
  }
  function sR(n, a, o, u, f) {
    if (a === "submit" && o && o.stateNode === f) {
      var p = l0((f[I] || null).action),
        b = u.submitter;
      b &&
        ((a = (a = b[I] || null)
          ? l0(a.formAction)
          : b.getAttribute("formAction")),
        a !== null && ((p = a), (b = null)));
      var R = new Vl("action", "action", null, u, f);
      n.push({
        event: R,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (u.defaultPrevented) {
                if (xi !== 0) {
                  var L = b ? u0(f, b) : new FormData(f);
                  bd(
                    o,
                    { pending: !0, data: L, method: f.method, action: p },
                    null,
                    L,
                  );
                }
              } else
                typeof p == "function" &&
                  (R.preventDefault(),
                  (L = b ? u0(f, b) : new FormData(f)),
                  bd(
                    o,
                    { pending: !0, data: L, method: f.method, action: p },
                    p,
                    L,
                  ));
            },
            currentTarget: f,
          },
        ],
      });
    }
  }
  for (var eh = 0; eh < Pf.length; eh++) {
    var th = Pf[eh],
      lR = th.toLowerCase(),
      uR = th[0].toUpperCase() + th.slice(1);
    cr(lR, "on" + uR);
  }
  (cr($y, "onAnimationEnd"),
    cr(Hy, "onAnimationIteration"),
    cr(Iy, "onAnimationStart"),
    cr("dblclick", "onDoubleClick"),
    cr("focusin", "onFocus"),
    cr("focusout", "onBlur"),
    cr(Ox, "onTransitionRun"),
    cr(Ax, "onTransitionStart"),
    cr(Cx, "onTransitionCancel"),
    cr(Zy, "onTransitionEnd"),
    hn("onMouseEnter", ["mouseout", "mouseover"]),
    hn("onMouseLeave", ["mouseout", "mouseover"]),
    hn("onPointerEnter", ["pointerout", "pointerover"]),
    hn("onPointerLeave", ["pointerout", "pointerover"]),
    Mn(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    Mn(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    Mn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Mn(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    Mn(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    Mn(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var Ls =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    cR = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(Ls),
    );
  function c0(n, a) {
    a = (a & 4) !== 0;
    for (var o = 0; o < n.length; o++) {
      var u = n[o],
        f = u.event;
      u = u.listeners;
      e: {
        var p = void 0;
        if (a)
          for (var b = u.length - 1; 0 <= b; b--) {
            var R = u[b],
              L = R.instance,
              K = R.currentTarget;
            if (((R = R.listener), L !== p && f.isPropagationStopped()))
              break e;
            ((p = R), (f.currentTarget = K));
            try {
              p(f);
            } catch (re) {
              hu(re);
            }
            ((f.currentTarget = null), (p = L));
          }
        else
          for (b = 0; b < u.length; b++) {
            if (
              ((R = u[b]),
              (L = R.instance),
              (K = R.currentTarget),
              (R = R.listener),
              L !== p && f.isPropagationStopped())
            )
              break e;
            ((p = R), (f.currentTarget = K));
            try {
              p(f);
            } catch (re) {
              hu(re);
            }
            ((f.currentTarget = null), (p = L));
          }
      }
    }
  }
  function Qe(n, a) {
    var o = a[de];
    o === void 0 && (o = a[de] = new Set());
    var u = n + "__bubble";
    o.has(u) || (f0(a, n, 2, !1), o.add(u));
  }
  function nh(n, a, o) {
    var u = 0;
    (a && (u |= 4), f0(o, n, u, a));
  }
  var Au = "_reactListening" + Math.random().toString(36).slice(2);
  function rh(n) {
    if (!n[Au]) {
      ((n[Au] = !0),
        ct.forEach(function (o) {
          o !== "selectionchange" && (cR.has(o) || nh(o, !1, n), nh(o, !0, n));
        }));
      var a = n.nodeType === 9 ? n : n.ownerDocument;
      a === null || a[Au] || ((a[Au] = !0), nh("selectionchange", !1, a));
    }
  }
  function f0(n, a, o, u) {
    switch (j0(a)) {
      case 2:
        var f = UR;
        break;
      case 8:
        f = PR;
        break;
      default:
        f = gh;
    }
    ((o = f.bind(null, a, o, n)),
      (f = void 0),
      !Rf ||
        (a !== "touchstart" && a !== "touchmove" && a !== "wheel") ||
        (f = !0),
      u
        ? f !== void 0
          ? n.addEventListener(a, o, { capture: !0, passive: f })
          : n.addEventListener(a, o, !0)
        : f !== void 0
          ? n.addEventListener(a, o, { passive: f })
          : n.addEventListener(a, o, !1));
  }
  function ah(n, a, o, u, f) {
    var p = u;
    if ((a & 1) === 0 && (a & 2) === 0 && u !== null)
      e: for (;;) {
        if (u === null) return;
        var b = u.tag;
        if (b === 3 || b === 4) {
          var R = u.stateNode.containerInfo;
          if (R === f) break;
          if (b === 4)
            for (b = u.return; b !== null; ) {
              var L = b.tag;
              if ((L === 3 || L === 4) && b.stateNode.containerInfo === f)
                return;
              b = b.return;
            }
          for (; R !== null; ) {
            if (((b = Fe(R)), b === null)) return;
            if (((L = b.tag), L === 5 || L === 6 || L === 26 || L === 27)) {
              u = p = b;
              continue e;
            }
            R = R.parentNode;
          }
        }
        u = u.return;
      }
    vy(function () {
      var K = p,
        re = Ef(o),
        ue = [];
      e: {
        var X = qy.get(n);
        if (X !== void 0) {
          var J = Vl,
            Ue = n;
          switch (n) {
            case "keypress":
              if (Fl(o) === 0) break e;
            case "keydown":
            case "keyup":
              J = ax;
              break;
            case "focusin":
              ((Ue = "focus"), (J = Tf));
              break;
            case "focusout":
              ((Ue = "blur"), (J = Tf));
              break;
            case "beforeblur":
            case "afterblur":
              J = Tf;
              break;
            case "click":
              if (o.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              J = Sy;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              J = qE;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              J = sx;
              break;
            case $y:
            case Hy:
            case Iy:
              J = KE;
              break;
            case Zy:
              J = ux;
              break;
            case "scroll":
            case "scrollend":
              J = IE;
              break;
            case "wheel":
              J = fx;
              break;
            case "copy":
            case "cut":
            case "paste":
              J = XE;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              J = Ey;
              break;
            case "toggle":
            case "beforetoggle":
              J = hx;
          }
          var je = (a & 4) !== 0,
            ht = !je && (n === "scroll" || n === "scrollend"),
            Z = je ? (X !== null ? X + "Capture" : null) : X;
          je = [];
          for (var V = K, G; V !== null; ) {
            var ae = V;
            if (
              ((G = ae.stateNode),
              (ae = ae.tag),
              (ae !== 5 && ae !== 26 && ae !== 27) ||
                G === null ||
                Z === null ||
                ((ae = ts(V, Z)), ae != null && je.push(Us(V, ae, G))),
              ht)
            )
              break;
            V = V.return;
          }
          0 < je.length &&
            ((X = new J(X, Ue, null, o, re)),
            ue.push({ event: X, listeners: je }));
        }
      }
      if ((a & 7) === 0) {
        e: {
          if (
            ((X = n === "mouseover" || n === "pointerover"),
            (J = n === "mouseout" || n === "pointerout"),
            X &&
              o !== _f &&
              (Ue = o.relatedTarget || o.fromElement) &&
              (Fe(Ue) || Ue[oe]))
          )
            break e;
          if (
            (J || X) &&
            ((X =
              re.window === re
                ? re
                : (X = re.ownerDocument)
                  ? X.defaultView || X.parentWindow
                  : window),
            J
              ? ((Ue = o.relatedTarget || o.toElement),
                (J = K),
                (Ue = Ue ? Fe(Ue) : null),
                Ue !== null &&
                  ((ht = l(Ue)),
                  (je = Ue.tag),
                  Ue !== ht || (je !== 5 && je !== 27 && je !== 6)) &&
                  (Ue = null))
              : ((J = null), (Ue = K)),
            J !== Ue)
          ) {
            if (
              ((je = Sy),
              (ae = "onMouseLeave"),
              (Z = "onMouseEnter"),
              (V = "mouse"),
              (n === "pointerout" || n === "pointerover") &&
                ((je = Ey),
                (ae = "onPointerLeave"),
                (Z = "onPointerEnter"),
                (V = "pointer")),
              (ht = J == null ? X : it(J)),
              (G = Ue == null ? X : it(Ue)),
              (X = new je(ae, V + "leave", J, o, re)),
              (X.target = ht),
              (X.relatedTarget = G),
              (ae = null),
              Fe(re) === K &&
                ((je = new je(Z, V + "enter", Ue, o, re)),
                (je.target = G),
                (je.relatedTarget = ht),
                (ae = je)),
              (ht = ae),
              J && Ue)
            )
              t: {
                for (je = J, Z = Ue, V = 0, G = je; G; G = So(G)) V++;
                for (G = 0, ae = Z; ae; ae = So(ae)) G++;
                for (; 0 < V - G; ) ((je = So(je)), V--);
                for (; 0 < G - V; ) ((Z = So(Z)), G--);
                for (; V--; ) {
                  if (je === Z || (Z !== null && je === Z.alternate)) break t;
                  ((je = So(je)), (Z = So(Z)));
                }
                je = null;
              }
            else je = null;
            (J !== null && d0(ue, X, J, je, !1),
              Ue !== null && ht !== null && d0(ue, ht, Ue, je, !0));
          }
        }
        e: {
          if (
            ((X = K ? it(K) : window),
            (J = X.nodeName && X.nodeName.toLowerCase()),
            J === "select" || (J === "input" && X.type === "file"))
          )
            var Ce = My;
          else if (Ty(X))
            if (Ny) Ce = Ex;
            else {
              Ce = Sx;
              var Ge = wx;
            }
          else
            ((J = X.nodeName),
              !J ||
              J.toLowerCase() !== "input" ||
              (X.type !== "checkbox" && X.type !== "radio")
                ? K && Sf(K.elementType) && (Ce = My)
                : (Ce = _x));
          if (Ce && (Ce = Ce(n, K))) {
            Dy(ue, Ce, o, re);
            break e;
          }
          (Ge && Ge(n, X, K),
            n === "focusout" &&
              K &&
              X.type === "number" &&
              K.memoizedProps.value != null &&
              wf(X, "number", X.value));
        }
        switch (((Ge = K ? it(K) : window), n)) {
          case "focusin":
            (Ty(Ge) || Ge.contentEditable === "true") &&
              ((Qi = Ge), (jf = K), (us = null));
            break;
          case "focusout":
            us = jf = Qi = null;
            break;
          case "mousedown":
            Lf = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((Lf = !1), By(ue, o, re));
            break;
          case "selectionchange":
            if (Rx) break;
          case "keydown":
          case "keyup":
            By(ue, o, re);
        }
        var Me;
        if (Mf)
          e: {
            switch (n) {
              case "compositionstart":
                var Le = "onCompositionStart";
                break e;
              case "compositionend":
                Le = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Le = "onCompositionUpdate";
                break e;
            }
            Le = void 0;
          }
        else
          Ki
            ? Ay(n, o) && (Le = "onCompositionEnd")
            : n === "keydown" &&
              o.keyCode === 229 &&
              (Le = "onCompositionStart");
        (Le &&
          (xy &&
            o.locale !== "ko" &&
            (Ki || Le !== "onCompositionStart"
              ? Le === "onCompositionEnd" && Ki && (Me = by())
              : ((va = re),
                (Of = "value" in va ? va.value : va.textContent),
                (Ki = !0))),
          (Ge = Cu(K, Le)),
          0 < Ge.length &&
            ((Le = new _y(Le, n, null, o, re)),
            ue.push({ event: Le, listeners: Ge }),
            Me
              ? (Le.data = Me)
              : ((Me = Cy(o)), Me !== null && (Le.data = Me)))),
          (Me = px ? yx(n, o) : gx(n, o)) &&
            ((Le = Cu(K, "onBeforeInput")),
            0 < Le.length &&
              ((Ge = new _y("onBeforeInput", "beforeinput", null, o, re)),
              ue.push({ event: Ge, listeners: Le }),
              (Ge.data = Me))),
          sR(ue, n, K, o, re));
      }
      c0(ue, a);
    });
  }
  function Us(n, a, o) {
    return { instance: n, listener: a, currentTarget: o };
  }
  function Cu(n, a) {
    for (var o = a + "Capture", u = []; n !== null; ) {
      var f = n,
        p = f.stateNode;
      if (
        ((f = f.tag),
        (f !== 5 && f !== 26 && f !== 27) ||
          p === null ||
          ((f = ts(n, o)),
          f != null && u.unshift(Us(n, f, p)),
          (f = ts(n, a)),
          f != null && u.push(Us(n, f, p))),
        n.tag === 3)
      )
        return u;
      n = n.return;
    }
    return [];
  }
  function So(n) {
    if (n === null) return null;
    do n = n.return;
    while (n && n.tag !== 5 && n.tag !== 27);
    return n || null;
  }
  function d0(n, a, o, u, f) {
    for (var p = a._reactName, b = []; o !== null && o !== u; ) {
      var R = o,
        L = R.alternate,
        K = R.stateNode;
      if (((R = R.tag), L !== null && L === u)) break;
      ((R !== 5 && R !== 26 && R !== 27) ||
        K === null ||
        ((L = K),
        f
          ? ((K = ts(o, p)), K != null && b.unshift(Us(o, K, L)))
          : f || ((K = ts(o, p)), K != null && b.push(Us(o, K, L)))),
        (o = o.return));
    }
    b.length !== 0 && n.push({ event: a, listeners: b });
  }
  var fR = /\r\n?/g,
    dR = /\u0000|\uFFFD/g;
  function h0(n) {
    return (typeof n == "string" ? n : "" + n)
      .replace(
        fR,
        `
`,
      )
      .replace(dR, "");
  }
  function m0(n, a) {
    return ((a = h0(a)), h0(n) === a);
  }
  function Tu() {}
  function dt(n, a, o, u, f, p) {
    switch (o) {
      case "children":
        typeof u == "string"
          ? a === "body" || (a === "textarea" && u === "") || qi(n, u)
          : (typeof u == "number" || typeof u == "bigint") &&
            a !== "body" &&
            qi(n, "" + u);
        break;
      case "className":
        Hr(n, "class", u);
        break;
      case "tabIndex":
        Hr(n, "tabindex", u);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Hr(n, o, u);
        break;
      case "style":
        yy(n, u, p);
        break;
      case "data":
        if (a !== "object") {
          Hr(n, "data", u);
          break;
        }
      case "src":
      case "href":
        if (u === "" && (a !== "a" || o !== "href")) {
          n.removeAttribute(o);
          break;
        }
        if (
          u == null ||
          typeof u == "function" ||
          typeof u == "symbol" ||
          typeof u == "boolean"
        ) {
          n.removeAttribute(o);
          break;
        }
        ((u = Ul("" + u)), n.setAttribute(o, u));
        break;
      case "action":
      case "formAction":
        if (typeof u == "function") {
          n.setAttribute(
            o,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof p == "function" &&
            (o === "formAction"
              ? (a !== "input" && dt(n, a, "name", f.name, f, null),
                dt(n, a, "formEncType", f.formEncType, f, null),
                dt(n, a, "formMethod", f.formMethod, f, null),
                dt(n, a, "formTarget", f.formTarget, f, null))
              : (dt(n, a, "encType", f.encType, f, null),
                dt(n, a, "method", f.method, f, null),
                dt(n, a, "target", f.target, f, null)));
        if (u == null || typeof u == "symbol" || typeof u == "boolean") {
          n.removeAttribute(o);
          break;
        }
        ((u = Ul("" + u)), n.setAttribute(o, u));
        break;
      case "onClick":
        u != null && (n.onclick = Tu);
        break;
      case "onScroll":
        u != null && Qe("scroll", n);
        break;
      case "onScrollEnd":
        u != null && Qe("scrollend", n);
        break;
      case "dangerouslySetInnerHTML":
        if (u != null) {
          if (typeof u != "object" || !("__html" in u)) throw Error(i(61));
          if (((o = u.__html), o != null)) {
            if (f.children != null) throw Error(i(60));
            n.innerHTML = o;
          }
        }
        break;
      case "multiple":
        n.multiple = u && typeof u != "function" && typeof u != "symbol";
        break;
      case "muted":
        n.muted = u && typeof u != "function" && typeof u != "symbol";
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
          u == null ||
          typeof u == "function" ||
          typeof u == "boolean" ||
          typeof u == "symbol"
        ) {
          n.removeAttribute("xlink:href");
          break;
        }
        ((o = Ul("" + u)),
          n.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", o));
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        u != null && typeof u != "function" && typeof u != "symbol"
          ? n.setAttribute(o, "" + u)
          : n.removeAttribute(o);
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
        u && typeof u != "function" && typeof u != "symbol"
          ? n.setAttribute(o, "")
          : n.removeAttribute(o);
        break;
      case "capture":
      case "download":
        u === !0
          ? n.setAttribute(o, "")
          : u !== !1 &&
              u != null &&
              typeof u != "function" &&
              typeof u != "symbol"
            ? n.setAttribute(o, u)
            : n.removeAttribute(o);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        u != null &&
        typeof u != "function" &&
        typeof u != "symbol" &&
        !isNaN(u) &&
        1 <= u
          ? n.setAttribute(o, u)
          : n.removeAttribute(o);
        break;
      case "rowSpan":
      case "start":
        u == null || typeof u == "function" || typeof u == "symbol" || isNaN(u)
          ? n.removeAttribute(o)
          : n.setAttribute(o, u);
        break;
      case "popover":
        (Qe("beforetoggle", n), Qe("toggle", n), $r(n, "popover", u));
        break;
      case "xlinkActuate":
        Be(n, "http://www.w3.org/1999/xlink", "xlink:actuate", u);
        break;
      case "xlinkArcrole":
        Be(n, "http://www.w3.org/1999/xlink", "xlink:arcrole", u);
        break;
      case "xlinkRole":
        Be(n, "http://www.w3.org/1999/xlink", "xlink:role", u);
        break;
      case "xlinkShow":
        Be(n, "http://www.w3.org/1999/xlink", "xlink:show", u);
        break;
      case "xlinkTitle":
        Be(n, "http://www.w3.org/1999/xlink", "xlink:title", u);
        break;
      case "xlinkType":
        Be(n, "http://www.w3.org/1999/xlink", "xlink:type", u);
        break;
      case "xmlBase":
        Be(n, "http://www.w3.org/XML/1998/namespace", "xml:base", u);
        break;
      case "xmlLang":
        Be(n, "http://www.w3.org/XML/1998/namespace", "xml:lang", u);
        break;
      case "xmlSpace":
        Be(n, "http://www.w3.org/XML/1998/namespace", "xml:space", u);
        break;
      case "is":
        $r(n, "is", u);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < o.length) ||
          (o[0] !== "o" && o[0] !== "O") ||
          (o[1] !== "n" && o[1] !== "N")) &&
          ((o = $E.get(o) || o), $r(n, o, u));
    }
  }
  function ih(n, a, o, u, f, p) {
    switch (o) {
      case "style":
        yy(n, u, p);
        break;
      case "dangerouslySetInnerHTML":
        if (u != null) {
          if (typeof u != "object" || !("__html" in u)) throw Error(i(61));
          if (((o = u.__html), o != null)) {
            if (f.children != null) throw Error(i(60));
            n.innerHTML = o;
          }
        }
        break;
      case "children":
        typeof u == "string"
          ? qi(n, u)
          : (typeof u == "number" || typeof u == "bigint") && qi(n, "" + u);
        break;
      case "onScroll":
        u != null && Qe("scroll", n);
        break;
      case "onScrollEnd":
        u != null && Qe("scrollend", n);
        break;
      case "onClick":
        u != null && (n.onclick = Tu);
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
        if (!br.hasOwnProperty(o))
          e: {
            if (
              o[0] === "o" &&
              o[1] === "n" &&
              ((f = o.endsWith("Capture")),
              (a = o.slice(2, f ? o.length - 7 : void 0)),
              (p = n[I] || null),
              (p = p != null ? p[o] : null),
              typeof p == "function" && n.removeEventListener(a, p, f),
              typeof u == "function")
            ) {
              (typeof p != "function" &&
                p !== null &&
                (o in n
                  ? (n[o] = null)
                  : n.hasAttribute(o) && n.removeAttribute(o)),
                n.addEventListener(a, u, f));
              break e;
            }
            o in n
              ? (n[o] = u)
              : u === !0
                ? n.setAttribute(o, "")
                : $r(n, o, u);
          }
    }
  }
  function en(n, a, o) {
    switch (a) {
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
        (Qe("error", n), Qe("load", n));
        var u = !1,
          f = !1,
          p;
        for (p in o)
          if (o.hasOwnProperty(p)) {
            var b = o[p];
            if (b != null)
              switch (p) {
                case "src":
                  u = !0;
                  break;
                case "srcSet":
                  f = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(i(137, a));
                default:
                  dt(n, a, p, b, o, null);
              }
          }
        (f && dt(n, a, "srcSet", o.srcSet, o, null),
          u && dt(n, a, "src", o.src, o, null));
        return;
      case "input":
        Qe("invalid", n);
        var R = (p = b = f = null),
          L = null,
          K = null;
        for (u in o)
          if (o.hasOwnProperty(u)) {
            var re = o[u];
            if (re != null)
              switch (u) {
                case "name":
                  f = re;
                  break;
                case "type":
                  b = re;
                  break;
                case "checked":
                  L = re;
                  break;
                case "defaultChecked":
                  K = re;
                  break;
                case "value":
                  p = re;
                  break;
                case "defaultValue":
                  R = re;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (re != null) throw Error(i(137, a));
                  break;
                default:
                  dt(n, a, u, re, o, null);
              }
          }
        (dy(n, p, R, L, K, b, f, !1), jl(n));
        return;
      case "select":
        (Qe("invalid", n), (u = b = p = null));
        for (f in o)
          if (o.hasOwnProperty(f) && ((R = o[f]), R != null))
            switch (f) {
              case "value":
                p = R;
                break;
              case "defaultValue":
                b = R;
                break;
              case "multiple":
                u = R;
              default:
                dt(n, a, f, R, o, null);
            }
        ((a = p),
          (o = b),
          (n.multiple = !!u),
          a != null ? Zi(n, !!u, a, !1) : o != null && Zi(n, !!u, o, !0));
        return;
      case "textarea":
        (Qe("invalid", n), (p = f = u = null));
        for (b in o)
          if (o.hasOwnProperty(b) && ((R = o[b]), R != null))
            switch (b) {
              case "value":
                u = R;
                break;
              case "defaultValue":
                f = R;
                break;
              case "children":
                p = R;
                break;
              case "dangerouslySetInnerHTML":
                if (R != null) throw Error(i(91));
                break;
              default:
                dt(n, a, b, R, o, null);
            }
        (my(n, u, f, p), jl(n));
        return;
      case "option":
        for (L in o)
          if (o.hasOwnProperty(L) && ((u = o[L]), u != null))
            switch (L) {
              case "selected":
                n.selected =
                  u && typeof u != "function" && typeof u != "symbol";
                break;
              default:
                dt(n, a, L, u, o, null);
            }
        return;
      case "dialog":
        (Qe("beforetoggle", n),
          Qe("toggle", n),
          Qe("cancel", n),
          Qe("close", n));
        break;
      case "iframe":
      case "object":
        Qe("load", n);
        break;
      case "video":
      case "audio":
        for (u = 0; u < Ls.length; u++) Qe(Ls[u], n);
        break;
      case "image":
        (Qe("error", n), Qe("load", n));
        break;
      case "details":
        Qe("toggle", n);
        break;
      case "embed":
      case "source":
      case "link":
        (Qe("error", n), Qe("load", n));
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
        for (K in o)
          if (o.hasOwnProperty(K) && ((u = o[K]), u != null))
            switch (K) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(i(137, a));
              default:
                dt(n, a, K, u, o, null);
            }
        return;
      default:
        if (Sf(a)) {
          for (re in o)
            o.hasOwnProperty(re) &&
              ((u = o[re]), u !== void 0 && ih(n, a, re, u, o, void 0));
          return;
        }
    }
    for (R in o)
      o.hasOwnProperty(R) && ((u = o[R]), u != null && dt(n, a, R, u, o, null));
  }
  function hR(n, a, o, u) {
    switch (a) {
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
        var f = null,
          p = null,
          b = null,
          R = null,
          L = null,
          K = null,
          re = null;
        for (J in o) {
          var ue = o[J];
          if (o.hasOwnProperty(J) && ue != null)
            switch (J) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                L = ue;
              default:
                u.hasOwnProperty(J) || dt(n, a, J, null, u, ue);
            }
        }
        for (var X in u) {
          var J = u[X];
          if (((ue = o[X]), u.hasOwnProperty(X) && (J != null || ue != null)))
            switch (X) {
              case "type":
                p = J;
                break;
              case "name":
                f = J;
                break;
              case "checked":
                K = J;
                break;
              case "defaultChecked":
                re = J;
                break;
              case "value":
                b = J;
                break;
              case "defaultValue":
                R = J;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (J != null) throw Error(i(137, a));
                break;
              default:
                J !== ue && dt(n, a, X, J, u, ue);
            }
        }
        bf(n, b, R, L, K, re, p, f);
        return;
      case "select":
        J = b = R = X = null;
        for (p in o)
          if (((L = o[p]), o.hasOwnProperty(p) && L != null))
            switch (p) {
              case "value":
                break;
              case "multiple":
                J = L;
              default:
                u.hasOwnProperty(p) || dt(n, a, p, null, u, L);
            }
        for (f in u)
          if (
            ((p = u[f]),
            (L = o[f]),
            u.hasOwnProperty(f) && (p != null || L != null))
          )
            switch (f) {
              case "value":
                X = p;
                break;
              case "defaultValue":
                R = p;
                break;
              case "multiple":
                b = p;
              default:
                p !== L && dt(n, a, f, p, u, L);
            }
        ((a = R),
          (o = b),
          (u = J),
          X != null
            ? Zi(n, !!o, X, !1)
            : !!u != !!o &&
              (a != null ? Zi(n, !!o, a, !0) : Zi(n, !!o, o ? [] : "", !1)));
        return;
      case "textarea":
        J = X = null;
        for (R in o)
          if (
            ((f = o[R]),
            o.hasOwnProperty(R) && f != null && !u.hasOwnProperty(R))
          )
            switch (R) {
              case "value":
                break;
              case "children":
                break;
              default:
                dt(n, a, R, null, u, f);
            }
        for (b in u)
          if (
            ((f = u[b]),
            (p = o[b]),
            u.hasOwnProperty(b) && (f != null || p != null))
          )
            switch (b) {
              case "value":
                X = f;
                break;
              case "defaultValue":
                J = f;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (f != null) throw Error(i(91));
                break;
              default:
                f !== p && dt(n, a, b, f, u, p);
            }
        hy(n, X, J);
        return;
      case "option":
        for (var Ue in o)
          if (
            ((X = o[Ue]),
            o.hasOwnProperty(Ue) && X != null && !u.hasOwnProperty(Ue))
          )
            switch (Ue) {
              case "selected":
                n.selected = !1;
                break;
              default:
                dt(n, a, Ue, null, u, X);
            }
        for (L in u)
          if (
            ((X = u[L]),
            (J = o[L]),
            u.hasOwnProperty(L) && X !== J && (X != null || J != null))
          )
            switch (L) {
              case "selected":
                n.selected =
                  X && typeof X != "function" && typeof X != "symbol";
                break;
              default:
                dt(n, a, L, X, u, J);
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
        for (var je in o)
          ((X = o[je]),
            o.hasOwnProperty(je) &&
              X != null &&
              !u.hasOwnProperty(je) &&
              dt(n, a, je, null, u, X));
        for (K in u)
          if (
            ((X = u[K]),
            (J = o[K]),
            u.hasOwnProperty(K) && X !== J && (X != null || J != null))
          )
            switch (K) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (X != null) throw Error(i(137, a));
                break;
              default:
                dt(n, a, K, X, u, J);
            }
        return;
      default:
        if (Sf(a)) {
          for (var ht in o)
            ((X = o[ht]),
              o.hasOwnProperty(ht) &&
                X !== void 0 &&
                !u.hasOwnProperty(ht) &&
                ih(n, a, ht, void 0, u, X));
          for (re in u)
            ((X = u[re]),
              (J = o[re]),
              !u.hasOwnProperty(re) ||
                X === J ||
                (X === void 0 && J === void 0) ||
                ih(n, a, re, X, u, J));
          return;
        }
    }
    for (var Z in o)
      ((X = o[Z]),
        o.hasOwnProperty(Z) &&
          X != null &&
          !u.hasOwnProperty(Z) &&
          dt(n, a, Z, null, u, X));
    for (ue in u)
      ((X = u[ue]),
        (J = o[ue]),
        !u.hasOwnProperty(ue) ||
          X === J ||
          (X == null && J == null) ||
          dt(n, a, ue, X, u, J));
  }
  var oh = null,
    sh = null;
  function Du(n) {
    return n.nodeType === 9 ? n : n.ownerDocument;
  }
  function p0(n) {
    switch (n) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function y0(n, a) {
    if (n === 0)
      switch (a) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return n === 1 && a === "foreignObject" ? 0 : n;
  }
  function lh(n, a) {
    return (
      n === "textarea" ||
      n === "noscript" ||
      typeof a.children == "string" ||
      typeof a.children == "number" ||
      typeof a.children == "bigint" ||
      (typeof a.dangerouslySetInnerHTML == "object" &&
        a.dangerouslySetInnerHTML !== null &&
        a.dangerouslySetInnerHTML.__html != null)
    );
  }
  var uh = null;
  function mR() {
    var n = window.event;
    return n && n.type === "popstate"
      ? n === uh
        ? !1
        : ((uh = n), !0)
      : ((uh = null), !1);
  }
  var g0 = typeof setTimeout == "function" ? setTimeout : void 0,
    pR = typeof clearTimeout == "function" ? clearTimeout : void 0,
    v0 = typeof Promise == "function" ? Promise : void 0,
    yR =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof v0 < "u"
          ? function (n) {
              return v0.resolve(null).then(n).catch(gR);
            }
          : g0;
  function gR(n) {
    setTimeout(function () {
      throw n;
    });
  }
  function ka(n) {
    return n === "head";
  }
  function b0(n, a) {
    var o = a,
      u = 0,
      f = 0;
    do {
      var p = o.nextSibling;
      if ((n.removeChild(o), p && p.nodeType === 8))
        if (((o = p.data), o === "/$")) {
          if (0 < u && 8 > u) {
            o = u;
            var b = n.ownerDocument;
            if ((o & 1 && Ps(b.documentElement), o & 2 && Ps(b.body), o & 4))
              for (o = b.head, Ps(o), b = o.firstChild; b; ) {
                var R = b.nextSibling,
                  L = b.nodeName;
                (b[_e] ||
                  L === "SCRIPT" ||
                  L === "STYLE" ||
                  (L === "LINK" && b.rel.toLowerCase() === "stylesheet") ||
                  o.removeChild(b),
                  (b = R));
              }
          }
          if (f === 0) {
            (n.removeChild(p), qs(a));
            return;
          }
          f--;
        } else
          o === "$" || o === "$?" || o === "$!"
            ? f++
            : (u = o.charCodeAt(0) - 48);
      else u = 0;
      o = p;
    } while (o);
    qs(a);
  }
  function ch(n) {
    var a = n.firstChild;
    for (a && a.nodeType === 10 && (a = a.nextSibling); a; ) {
      var o = a;
      switch (((a = a.nextSibling), o.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          (ch(o), Ae(o));
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (o.rel.toLowerCase() === "stylesheet") continue;
      }
      n.removeChild(o);
    }
  }
  function vR(n, a, o, u) {
    for (; n.nodeType === 1; ) {
      var f = o;
      if (n.nodeName.toLowerCase() !== a.toLowerCase()) {
        if (!u && (n.nodeName !== "INPUT" || n.type !== "hidden")) break;
      } else if (u) {
        if (!n[_e])
          switch (a) {
            case "meta":
              if (!n.hasAttribute("itemprop")) break;
              return n;
            case "link":
              if (
                ((p = n.getAttribute("rel")),
                p === "stylesheet" && n.hasAttribute("data-precedence"))
              )
                break;
              if (
                p !== f.rel ||
                n.getAttribute("href") !==
                  (f.href == null || f.href === "" ? null : f.href) ||
                n.getAttribute("crossorigin") !==
                  (f.crossOrigin == null ? null : f.crossOrigin) ||
                n.getAttribute("title") !== (f.title == null ? null : f.title)
              )
                break;
              return n;
            case "style":
              if (n.hasAttribute("data-precedence")) break;
              return n;
            case "script":
              if (
                ((p = n.getAttribute("src")),
                (p !== (f.src == null ? null : f.src) ||
                  n.getAttribute("type") !== (f.type == null ? null : f.type) ||
                  n.getAttribute("crossorigin") !==
                    (f.crossOrigin == null ? null : f.crossOrigin)) &&
                  p &&
                  n.hasAttribute("async") &&
                  !n.hasAttribute("itemprop"))
              )
                break;
              return n;
            default:
              return n;
          }
      } else if (a === "input" && n.type === "hidden") {
        var p = f.name == null ? null : "" + f.name;
        if (f.type === "hidden" && n.getAttribute("name") === p) return n;
      } else return n;
      if (((n = dr(n.nextSibling)), n === null)) break;
    }
    return null;
  }
  function bR(n, a, o) {
    if (a === "") return null;
    for (; n.nodeType !== 3; )
      if (
        ((n.nodeType !== 1 || n.nodeName !== "INPUT" || n.type !== "hidden") &&
          !o) ||
        ((n = dr(n.nextSibling)), n === null)
      )
        return null;
    return n;
  }
  function fh(n) {
    return (
      n.data === "$!" ||
      (n.data === "$?" && n.ownerDocument.readyState === "complete")
    );
  }
  function wR(n, a) {
    var o = n.ownerDocument;
    if (n.data !== "$?" || o.readyState === "complete") a();
    else {
      var u = function () {
        (a(), o.removeEventListener("DOMContentLoaded", u));
      };
      (o.addEventListener("DOMContentLoaded", u), (n._reactRetry = u));
    }
  }
  function dr(n) {
    for (; n != null; n = n.nextSibling) {
      var a = n.nodeType;
      if (a === 1 || a === 3) break;
      if (a === 8) {
        if (
          ((a = n.data),
          a === "$" || a === "$!" || a === "$?" || a === "F!" || a === "F")
        )
          break;
        if (a === "/$") return null;
      }
    }
    return n;
  }
  var dh = null;
  function w0(n) {
    n = n.previousSibling;
    for (var a = 0; n; ) {
      if (n.nodeType === 8) {
        var o = n.data;
        if (o === "$" || o === "$!" || o === "$?") {
          if (a === 0) return n;
          a--;
        } else o === "/$" && a++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  function S0(n, a, o) {
    switch (((a = Du(o)), n)) {
      case "html":
        if (((n = a.documentElement), !n)) throw Error(i(452));
        return n;
      case "head":
        if (((n = a.head), !n)) throw Error(i(453));
        return n;
      case "body":
        if (((n = a.body), !n)) throw Error(i(454));
        return n;
      default:
        throw Error(i(451));
    }
  }
  function Ps(n) {
    for (var a = n.attributes; a.length; ) n.removeAttributeNode(a[0]);
    Ae(n);
  }
  var tr = new Map(),
    _0 = new Set();
  function Mu(n) {
    return typeof n.getRootNode == "function"
      ? n.getRootNode()
      : n.nodeType === 9
        ? n
        : n.ownerDocument;
  }
  var aa = ne.d;
  ne.d = { f: SR, r: _R, D: ER, C: xR, L: RR, m: OR, X: CR, S: AR, M: TR };
  function SR() {
    var n = aa.f(),
      a = _u();
    return n || a;
  }
  function _R(n) {
    var a = Je(n);
    a !== null && a.tag === 5 && a.type === "form" ? $g(a) : aa.r(n);
  }
  var _o = typeof document > "u" ? null : document;
  function E0(n, a, o) {
    var u = _o;
    if (u && typeof a == "string" && a) {
      var f = Yn(a);
      ((f = 'link[rel="' + n + '"][href="' + f + '"]'),
        typeof o == "string" && (f += '[crossorigin="' + o + '"]'),
        _0.has(f) ||
          (_0.add(f),
          (n = { rel: n, crossOrigin: o, href: a }),
          u.querySelector(f) === null &&
            ((a = u.createElement("link")),
            en(a, "link", n),
            Pe(a),
            u.head.appendChild(a))));
    }
  }
  function ER(n) {
    (aa.D(n), E0("dns-prefetch", n, null));
  }
  function xR(n, a) {
    (aa.C(n, a), E0("preconnect", n, a));
  }
  function RR(n, a, o) {
    aa.L(n, a, o);
    var u = _o;
    if (u && n && a) {
      var f = 'link[rel="preload"][as="' + Yn(a) + '"]';
      a === "image" && o && o.imageSrcSet
        ? ((f += '[imagesrcset="' + Yn(o.imageSrcSet) + '"]'),
          typeof o.imageSizes == "string" &&
            (f += '[imagesizes="' + Yn(o.imageSizes) + '"]'))
        : (f += '[href="' + Yn(n) + '"]');
      var p = f;
      switch (a) {
        case "style":
          p = Eo(n);
          break;
        case "script":
          p = xo(n);
      }
      tr.has(p) ||
        ((n = y(
          {
            rel: "preload",
            href: a === "image" && o && o.imageSrcSet ? void 0 : n,
            as: a,
          },
          o,
        )),
        tr.set(p, n),
        u.querySelector(f) !== null ||
          (a === "style" && u.querySelector(Fs(p))) ||
          (a === "script" && u.querySelector(Bs(p))) ||
          ((a = u.createElement("link")),
          en(a, "link", n),
          Pe(a),
          u.head.appendChild(a)));
    }
  }
  function OR(n, a) {
    aa.m(n, a);
    var o = _o;
    if (o && n) {
      var u = a && typeof a.as == "string" ? a.as : "script",
        f =
          'link[rel="modulepreload"][as="' + Yn(u) + '"][href="' + Yn(n) + '"]',
        p = f;
      switch (u) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          p = xo(n);
      }
      if (
        !tr.has(p) &&
        ((n = y({ rel: "modulepreload", href: n }, a)),
        tr.set(p, n),
        o.querySelector(f) === null)
      ) {
        switch (u) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (o.querySelector(Bs(p))) return;
        }
        ((u = o.createElement("link")),
          en(u, "link", n),
          Pe(u),
          o.head.appendChild(u));
      }
    }
  }
  function AR(n, a, o) {
    aa.S(n, a, o);
    var u = _o;
    if (u && n) {
      var f = vt(u).hoistableStyles,
        p = Eo(n);
      a = a || "default";
      var b = f.get(p);
      if (!b) {
        var R = { loading: 0, preload: null };
        if ((b = u.querySelector(Fs(p)))) R.loading = 5;
        else {
          ((n = y({ rel: "stylesheet", href: n, "data-precedence": a }, o)),
            (o = tr.get(p)) && hh(n, o));
          var L = (b = u.createElement("link"));
          (Pe(L),
            en(L, "link", n),
            (L._p = new Promise(function (K, re) {
              ((L.onload = K), (L.onerror = re));
            })),
            L.addEventListener("load", function () {
              R.loading |= 1;
            }),
            L.addEventListener("error", function () {
              R.loading |= 2;
            }),
            (R.loading |= 4),
            Nu(b, a, u));
        }
        ((b = { type: "stylesheet", instance: b, count: 1, state: R }),
          f.set(p, b));
      }
    }
  }
  function CR(n, a) {
    aa.X(n, a);
    var o = _o;
    if (o && n) {
      var u = vt(o).hoistableScripts,
        f = xo(n),
        p = u.get(f);
      p ||
        ((p = o.querySelector(Bs(f))),
        p ||
          ((n = y({ src: n, async: !0 }, a)),
          (a = tr.get(f)) && mh(n, a),
          (p = o.createElement("script")),
          Pe(p),
          en(p, "link", n),
          o.head.appendChild(p)),
        (p = { type: "script", instance: p, count: 1, state: null }),
        u.set(f, p));
    }
  }
  function TR(n, a) {
    aa.M(n, a);
    var o = _o;
    if (o && n) {
      var u = vt(o).hoistableScripts,
        f = xo(n),
        p = u.get(f);
      p ||
        ((p = o.querySelector(Bs(f))),
        p ||
          ((n = y({ src: n, async: !0, type: "module" }, a)),
          (a = tr.get(f)) && mh(n, a),
          (p = o.createElement("script")),
          Pe(p),
          en(p, "link", n),
          o.head.appendChild(p)),
        (p = { type: "script", instance: p, count: 1, state: null }),
        u.set(f, p));
    }
  }
  function x0(n, a, o, u) {
    var f = (f = Oe.current) ? Mu(f) : null;
    if (!f) throw Error(i(446));
    switch (n) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof o.precedence == "string" && typeof o.href == "string"
          ? ((a = Eo(o.href)),
            (o = vt(f).hoistableStyles),
            (u = o.get(a)),
            u ||
              ((u = { type: "style", instance: null, count: 0, state: null }),
              o.set(a, u)),
            u)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          o.rel === "stylesheet" &&
          typeof o.href == "string" &&
          typeof o.precedence == "string"
        ) {
          n = Eo(o.href);
          var p = vt(f).hoistableStyles,
            b = p.get(n);
          if (
            (b ||
              ((f = f.ownerDocument || f),
              (b = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              p.set(n, b),
              (p = f.querySelector(Fs(n))) &&
                !p._p &&
                ((b.instance = p), (b.state.loading = 5)),
              tr.has(n) ||
                ((o = {
                  rel: "preload",
                  as: "style",
                  href: o.href,
                  crossOrigin: o.crossOrigin,
                  integrity: o.integrity,
                  media: o.media,
                  hrefLang: o.hrefLang,
                  referrerPolicy: o.referrerPolicy,
                }),
                tr.set(n, o),
                p || DR(f, n, o, b.state))),
            a && u === null)
          )
            throw Error(i(528, ""));
          return b;
        }
        if (a && u !== null) throw Error(i(529, ""));
        return null;
      case "script":
        return (
          (a = o.async),
          (o = o.src),
          typeof o == "string" &&
          a &&
          typeof a != "function" &&
          typeof a != "symbol"
            ? ((a = xo(o)),
              (o = vt(f).hoistableScripts),
              (u = o.get(a)),
              u ||
                ((u = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                o.set(a, u)),
              u)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(i(444, n));
    }
  }
  function Eo(n) {
    return 'href="' + Yn(n) + '"';
  }
  function Fs(n) {
    return 'link[rel="stylesheet"][' + n + "]";
  }
  function R0(n) {
    return y({}, n, { "data-precedence": n.precedence, precedence: null });
  }
  function DR(n, a, o, u) {
    n.querySelector('link[rel="preload"][as="style"][' + a + "]")
      ? (u.loading = 1)
      : ((a = n.createElement("link")),
        (u.preload = a),
        a.addEventListener("load", function () {
          return (u.loading |= 1);
        }),
        a.addEventListener("error", function () {
          return (u.loading |= 2);
        }),
        en(a, "link", o),
        Pe(a),
        n.head.appendChild(a));
  }
  function xo(n) {
    return '[src="' + Yn(n) + '"]';
  }
  function Bs(n) {
    return "script[async]" + n;
  }
  function O0(n, a, o) {
    if ((a.count++, a.instance === null))
      switch (a.type) {
        case "style":
          var u = n.querySelector('style[data-href~="' + Yn(o.href) + '"]');
          if (u) return ((a.instance = u), Pe(u), u);
          var f = y({}, o, {
            "data-href": o.href,
            "data-precedence": o.precedence,
            href: null,
            precedence: null,
          });
          return (
            (u = (n.ownerDocument || n).createElement("style")),
            Pe(u),
            en(u, "style", f),
            Nu(u, o.precedence, n),
            (a.instance = u)
          );
        case "stylesheet":
          f = Eo(o.href);
          var p = n.querySelector(Fs(f));
          if (p) return ((a.state.loading |= 4), (a.instance = p), Pe(p), p);
          ((u = R0(o)),
            (f = tr.get(f)) && hh(u, f),
            (p = (n.ownerDocument || n).createElement("link")),
            Pe(p));
          var b = p;
          return (
            (b._p = new Promise(function (R, L) {
              ((b.onload = R), (b.onerror = L));
            })),
            en(p, "link", u),
            (a.state.loading |= 4),
            Nu(p, o.precedence, n),
            (a.instance = p)
          );
        case "script":
          return (
            (p = xo(o.src)),
            (f = n.querySelector(Bs(p)))
              ? ((a.instance = f), Pe(f), f)
              : ((u = o),
                (f = tr.get(p)) && ((u = y({}, o)), mh(u, f)),
                (n = n.ownerDocument || n),
                (f = n.createElement("script")),
                Pe(f),
                en(f, "link", u),
                n.head.appendChild(f),
                (a.instance = f))
          );
        case "void":
          return null;
        default:
          throw Error(i(443, a.type));
      }
    else
      a.type === "stylesheet" &&
        (a.state.loading & 4) === 0 &&
        ((u = a.instance), (a.state.loading |= 4), Nu(u, o.precedence, n));
    return a.instance;
  }
  function Nu(n, a, o) {
    for (
      var u = o.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]',
        ),
        f = u.length ? u[u.length - 1] : null,
        p = f,
        b = 0;
      b < u.length;
      b++
    ) {
      var R = u[b];
      if (R.dataset.precedence === a) p = R;
      else if (p !== f) break;
    }
    p
      ? p.parentNode.insertBefore(n, p.nextSibling)
      : ((a = o.nodeType === 9 ? o.head : o), a.insertBefore(n, a.firstChild));
  }
  function hh(n, a) {
    (n.crossOrigin == null && (n.crossOrigin = a.crossOrigin),
      n.referrerPolicy == null && (n.referrerPolicy = a.referrerPolicy),
      n.title == null && (n.title = a.title));
  }
  function mh(n, a) {
    (n.crossOrigin == null && (n.crossOrigin = a.crossOrigin),
      n.referrerPolicy == null && (n.referrerPolicy = a.referrerPolicy),
      n.integrity == null && (n.integrity = a.integrity));
  }
  var zu = null;
  function A0(n, a, o) {
    if (zu === null) {
      var u = new Map(),
        f = (zu = new Map());
      f.set(o, u);
    } else ((f = zu), (u = f.get(o)), u || ((u = new Map()), f.set(o, u)));
    if (u.has(n)) return u;
    for (
      u.set(n, null), o = o.getElementsByTagName(n), f = 0;
      f < o.length;
      f++
    ) {
      var p = o[f];
      if (
        !(
          p[_e] ||
          p[$] ||
          (n === "link" && p.getAttribute("rel") === "stylesheet")
        ) &&
        p.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var b = p.getAttribute(a) || "";
        b = n + b;
        var R = u.get(b);
        R ? R.push(p) : u.set(b, [p]);
      }
    }
    return u;
  }
  function C0(n, a, o) {
    ((n = n.ownerDocument || n),
      n.head.insertBefore(
        o,
        a === "title" ? n.querySelector("head > title") : null,
      ));
  }
  function MR(n, a, o) {
    if (o === 1 || a.itemProp != null) return !1;
    switch (n) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof a.precedence != "string" ||
          typeof a.href != "string" ||
          a.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof a.rel != "string" ||
          typeof a.href != "string" ||
          a.href === "" ||
          a.onLoad ||
          a.onError
        )
          break;
        switch (a.rel) {
          case "stylesheet":
            return (
              (n = a.disabled),
              typeof a.precedence == "string" && n == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          a.async &&
          typeof a.async != "function" &&
          typeof a.async != "symbol" &&
          !a.onLoad &&
          !a.onError &&
          a.src &&
          typeof a.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function T0(n) {
    return !(n.type === "stylesheet" && (n.state.loading & 3) === 0);
  }
  var Vs = null;
  function NR() {}
  function zR(n, a, o) {
    if (Vs === null) throw Error(i(475));
    var u = Vs;
    if (
      a.type === "stylesheet" &&
      (typeof o.media != "string" || matchMedia(o.media).matches !== !1) &&
      (a.state.loading & 4) === 0
    ) {
      if (a.instance === null) {
        var f = Eo(o.href),
          p = n.querySelector(Fs(f));
        if (p) {
          ((n = p._p),
            n !== null &&
              typeof n == "object" &&
              typeof n.then == "function" &&
              (u.count++, (u = ku.bind(u)), n.then(u, u)),
            (a.state.loading |= 4),
            (a.instance = p),
            Pe(p));
          return;
        }
        ((p = n.ownerDocument || n),
          (o = R0(o)),
          (f = tr.get(f)) && hh(o, f),
          (p = p.createElement("link")),
          Pe(p));
        var b = p;
        ((b._p = new Promise(function (R, L) {
          ((b.onload = R), (b.onerror = L));
        })),
          en(p, "link", o),
          (a.instance = p));
      }
      (u.stylesheets === null && (u.stylesheets = new Map()),
        u.stylesheets.set(a, n),
        (n = a.state.preload) &&
          (a.state.loading & 3) === 0 &&
          (u.count++,
          (a = ku.bind(u)),
          n.addEventListener("load", a),
          n.addEventListener("error", a)));
    }
  }
  function kR() {
    if (Vs === null) throw Error(i(475));
    var n = Vs;
    return (
      n.stylesheets && n.count === 0 && ph(n, n.stylesheets),
      0 < n.count
        ? function (a) {
            var o = setTimeout(function () {
              if ((n.stylesheets && ph(n, n.stylesheets), n.unsuspend)) {
                var u = n.unsuspend;
                ((n.unsuspend = null), u());
              }
            }, 6e4);
            return (
              (n.unsuspend = a),
              function () {
                ((n.unsuspend = null), clearTimeout(o));
              }
            );
          }
        : null
    );
  }
  function ku() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) ph(this, this.stylesheets);
      else if (this.unsuspend) {
        var n = this.unsuspend;
        ((this.unsuspend = null), n());
      }
    }
  }
  var ju = null;
  function ph(n, a) {
    ((n.stylesheets = null),
      n.unsuspend !== null &&
        (n.count++,
        (ju = new Map()),
        a.forEach(jR, n),
        (ju = null),
        ku.call(n)));
  }
  function jR(n, a) {
    if (!(a.state.loading & 4)) {
      var o = ju.get(n);
      if (o) var u = o.get(null);
      else {
        ((o = new Map()), ju.set(n, o));
        for (
          var f = n.querySelectorAll(
              "link[data-precedence],style[data-precedence]",
            ),
            p = 0;
          p < f.length;
          p++
        ) {
          var b = f[p];
          (b.nodeName === "LINK" || b.getAttribute("media") !== "not all") &&
            (o.set(b.dataset.precedence, b), (u = b));
        }
        u && o.set(null, u);
      }
      ((f = a.instance),
        (b = f.getAttribute("data-precedence")),
        (p = o.get(b) || u),
        p === u && o.set(null, f),
        o.set(b, f),
        this.count++,
        (u = ku.bind(this)),
        f.addEventListener("load", u),
        f.addEventListener("error", u),
        p
          ? p.parentNode.insertBefore(f, p.nextSibling)
          : ((n = n.nodeType === 9 ? n.head : n),
            n.insertBefore(f, n.firstChild)),
        (a.state.loading |= 4));
    }
  }
  var $s = {
    $$typeof: D,
    Provider: null,
    Consumer: null,
    _currentValue: q,
    _currentValue2: q,
    _threadCount: 0,
  };
  function LR(n, a, o, u, f, p, b, R) {
    ((this.tag = 1),
      (this.containerInfo = n),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = si(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = si(0)),
      (this.hiddenUpdates = si(null)),
      (this.identifierPrefix = u),
      (this.onUncaughtError = f),
      (this.onCaughtError = p),
      (this.onRecoverableError = b),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = R),
      (this.incompleteTransitions = new Map()));
  }
  function D0(n, a, o, u, f, p, b, R, L, K, re, ue) {
    return (
      (n = new LR(n, a, o, b, R, L, K, ue)),
      (a = 1),
      p === !0 && (a |= 24),
      (p = zn(3, null, null, a)),
      (n.current = p),
      (p.stateNode = n),
      (a = Qf()),
      a.refCount++,
      (n.pooledCache = a),
      a.refCount++,
      (p.memoizedState = { element: u, isDehydrated: o, cache: a }),
      ed(p),
      n
    );
  }
  function M0(n) {
    return n ? ((n = eo), n) : eo;
  }
  function N0(n, a, o, u, f, p) {
    ((f = M0(f)),
      u.context === null ? (u.context = f) : (u.pendingContext = f),
      (u = Sa(a)),
      (u.payload = { element: o }),
      (p = p === void 0 ? null : p),
      p !== null && (u.callback = p),
      (o = _a(n, u, a)),
      o !== null && (Pn(o, n, a), vs(o, n, a)));
  }
  function z0(n, a) {
    if (((n = n.memoizedState), n !== null && n.dehydrated !== null)) {
      var o = n.retryLane;
      n.retryLane = o !== 0 && o < a ? o : a;
    }
  }
  function yh(n, a) {
    (z0(n, a), (n = n.alternate) && z0(n, a));
  }
  function k0(n) {
    if (n.tag === 13) {
      var a = Wi(n, 67108864);
      (a !== null && Pn(a, n, 67108864), yh(n, 67108864));
    }
  }
  var Lu = !0;
  function UR(n, a, o, u) {
    var f = U.T;
    U.T = null;
    var p = ne.p;
    try {
      ((ne.p = 2), gh(n, a, o, u));
    } finally {
      ((ne.p = p), (U.T = f));
    }
  }
  function PR(n, a, o, u) {
    var f = U.T;
    U.T = null;
    var p = ne.p;
    try {
      ((ne.p = 8), gh(n, a, o, u));
    } finally {
      ((ne.p = p), (U.T = f));
    }
  }
  function gh(n, a, o, u) {
    if (Lu) {
      var f = vh(u);
      if (f === null) (ah(n, a, u, Uu, o), L0(n, u));
      else if (BR(f, n, a, o, u)) u.stopPropagation();
      else if ((L0(n, u), a & 4 && -1 < FR.indexOf(n))) {
        for (; f !== null; ) {
          var p = Je(f);
          if (p !== null)
            switch (p.tag) {
              case 3:
                if (((p = p.stateNode), p.current.memoizedState.isDehydrated)) {
                  var b = Zn(p.pendingLanes);
                  if (b !== 0) {
                    var R = p;
                    for (R.pendingLanes |= 2, R.entangledLanes |= 2; b; ) {
                      var L = 1 << (31 - Ht(b));
                      ((R.entanglements[1] |= L), (b &= ~L));
                    }
                    (xr(p), (ot & 6) === 0 && ((wu = Vt() + 500), js(0)));
                  }
                }
                break;
              case 13:
                ((R = Wi(p, 2)), R !== null && Pn(R, p, 2), _u(), yh(p, 2));
            }
          if (((p = vh(u)), p === null && ah(n, a, u, Uu, o), p === f)) break;
          f = p;
        }
        f !== null && u.stopPropagation();
      } else ah(n, a, u, null, o);
    }
  }
  function vh(n) {
    return ((n = Ef(n)), bh(n));
  }
  var Uu = null;
  function bh(n) {
    if (((Uu = null), (n = Fe(n)), n !== null)) {
      var a = l(n);
      if (a === null) n = null;
      else {
        var o = a.tag;
        if (o === 13) {
          if (((n = c(a)), n !== null)) return n;
          n = null;
        } else if (o === 3) {
          if (a.stateNode.current.memoizedState.isDehydrated)
            return a.tag === 3 ? a.stateNode.containerInfo : null;
          n = null;
        } else a !== n && (n = null);
      }
    }
    return ((Uu = n), null);
  }
  function j0(n) {
    switch (n) {
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
        switch (es()) {
          case ni:
            return 2;
          case ri:
            return 8;
          case In:
          case lr:
            return 32;
          case vr:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var wh = !1,
    ja = null,
    La = null,
    Ua = null,
    Hs = new Map(),
    Is = new Map(),
    Pa = [],
    FR =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " ",
      );
  function L0(n, a) {
    switch (n) {
      case "focusin":
      case "focusout":
        ja = null;
        break;
      case "dragenter":
      case "dragleave":
        La = null;
        break;
      case "mouseover":
      case "mouseout":
        Ua = null;
        break;
      case "pointerover":
      case "pointerout":
        Hs.delete(a.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Is.delete(a.pointerId);
    }
  }
  function Zs(n, a, o, u, f, p) {
    return n === null || n.nativeEvent !== p
      ? ((n = {
          blockedOn: a,
          domEventName: o,
          eventSystemFlags: u,
          nativeEvent: p,
          targetContainers: [f],
        }),
        a !== null && ((a = Je(a)), a !== null && k0(a)),
        n)
      : ((n.eventSystemFlags |= u),
        (a = n.targetContainers),
        f !== null && a.indexOf(f) === -1 && a.push(f),
        n);
  }
  function BR(n, a, o, u, f) {
    switch (a) {
      case "focusin":
        return ((ja = Zs(ja, n, a, o, u, f)), !0);
      case "dragenter":
        return ((La = Zs(La, n, a, o, u, f)), !0);
      case "mouseover":
        return ((Ua = Zs(Ua, n, a, o, u, f)), !0);
      case "pointerover":
        var p = f.pointerId;
        return (Hs.set(p, Zs(Hs.get(p) || null, n, a, o, u, f)), !0);
      case "gotpointercapture":
        return (
          (p = f.pointerId),
          Is.set(p, Zs(Is.get(p) || null, n, a, o, u, f)),
          !0
        );
    }
    return !1;
  }
  function U0(n) {
    var a = Fe(n.target);
    if (a !== null) {
      var o = l(a);
      if (o !== null) {
        if (((a = o.tag), a === 13)) {
          if (((a = c(o)), a !== null)) {
            ((n.blockedOn = a),
              M(n.priority, function () {
                if (o.tag === 13) {
                  var u = Un();
                  u = H(u);
                  var f = Wi(o, u);
                  (f !== null && Pn(f, o, u), yh(o, u));
                }
              }));
            return;
          }
        } else if (a === 3 && o.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = o.tag === 3 ? o.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function Pu(n) {
    if (n.blockedOn !== null) return !1;
    for (var a = n.targetContainers; 0 < a.length; ) {
      var o = vh(n.nativeEvent);
      if (o === null) {
        o = n.nativeEvent;
        var u = new o.constructor(o.type, o);
        ((_f = u), o.target.dispatchEvent(u), (_f = null));
      } else return ((a = Je(o)), a !== null && k0(a), (n.blockedOn = o), !1);
      a.shift();
    }
    return !0;
  }
  function P0(n, a, o) {
    Pu(n) && o.delete(a);
  }
  function VR() {
    ((wh = !1),
      ja !== null && Pu(ja) && (ja = null),
      La !== null && Pu(La) && (La = null),
      Ua !== null && Pu(Ua) && (Ua = null),
      Hs.forEach(P0),
      Is.forEach(P0));
  }
  function Fu(n, a) {
    n.blockedOn === a &&
      ((n.blockedOn = null),
      wh ||
        ((wh = !0),
        e.unstable_scheduleCallback(e.unstable_NormalPriority, VR)));
  }
  var Bu = null;
  function F0(n) {
    Bu !== n &&
      ((Bu = n),
      e.unstable_scheduleCallback(e.unstable_NormalPriority, function () {
        Bu === n && (Bu = null);
        for (var a = 0; a < n.length; a += 3) {
          var o = n[a],
            u = n[a + 1],
            f = n[a + 2];
          if (typeof u != "function") {
            if (bh(u || o) === null) continue;
            break;
          }
          var p = Je(o);
          p !== null &&
            (n.splice(a, 3),
            (a -= 3),
            bd(p, { pending: !0, data: f, method: o.method, action: u }, u, f));
        }
      }));
  }
  function qs(n) {
    function a(L) {
      return Fu(L, n);
    }
    (ja !== null && Fu(ja, n),
      La !== null && Fu(La, n),
      Ua !== null && Fu(Ua, n),
      Hs.forEach(a),
      Is.forEach(a));
    for (var o = 0; o < Pa.length; o++) {
      var u = Pa[o];
      u.blockedOn === n && (u.blockedOn = null);
    }
    for (; 0 < Pa.length && ((o = Pa[0]), o.blockedOn === null); )
      (U0(o), o.blockedOn === null && Pa.shift());
    if (((o = (n.ownerDocument || n).$$reactFormReplay), o != null))
      for (u = 0; u < o.length; u += 3) {
        var f = o[u],
          p = o[u + 1],
          b = f[I] || null;
        if (typeof p == "function") b || F0(o);
        else if (b) {
          var R = null;
          if (p && p.hasAttribute("formAction")) {
            if (((f = p), (b = p[I] || null))) R = b.formAction;
            else if (bh(f) !== null) continue;
          } else R = b.action;
          (typeof R == "function" ? (o[u + 1] = R) : (o.splice(u, 3), (u -= 3)),
            F0(o));
        }
      }
  }
  function Sh(n) {
    this._internalRoot = n;
  }
  ((Vu.prototype.render = Sh.prototype.render =
    function (n) {
      var a = this._internalRoot;
      if (a === null) throw Error(i(409));
      var o = a.current,
        u = Un();
      N0(o, u, n, a, null, null);
    }),
    (Vu.prototype.unmount = Sh.prototype.unmount =
      function () {
        var n = this._internalRoot;
        if (n !== null) {
          this._internalRoot = null;
          var a = n.containerInfo;
          (N0(n.current, 2, null, n, null, null), _u(), (a[oe] = null));
        }
      }));
  function Vu(n) {
    this._internalRoot = n;
  }
  Vu.prototype.unstable_scheduleHydration = function (n) {
    if (n) {
      var a = O();
      n = { blockedOn: null, target: n, priority: a };
      for (var o = 0; o < Pa.length && a !== 0 && a < Pa[o].priority; o++);
      (Pa.splice(o, 0, n), o === 0 && U0(n));
    }
  };
  var B0 = t.version;
  if (B0 !== "19.1.1") throw Error(i(527, B0, "19.1.1"));
  ne.findDOMNode = function (n) {
    var a = n._reactInternals;
    if (a === void 0)
      throw typeof n.render == "function"
        ? Error(i(188))
        : ((n = Object.keys(n).join(",")), Error(i(268, n)));
    return (
      (n = m(a)),
      (n = n !== null ? h(n) : null),
      (n = n === null ? null : n.stateNode),
      n
    );
  };
  var $R = {
    bundleType: 0,
    version: "19.1.1",
    rendererPackageName: "react-dom",
    currentDispatcherRef: U,
    reconcilerVersion: "19.1.1",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var $u = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!$u.isDisabled && $u.supportsFiber)
      try {
        (($t = $u.inject($R)), (yt = $u));
      } catch {}
  }
  return (
    (Ys.createRoot = function (n, a) {
      if (!s(n)) throw Error(i(299));
      var o = !1,
        u = "",
        f = nv,
        p = rv,
        b = av,
        R = null;
      return (
        a != null &&
          (a.unstable_strictMode === !0 && (o = !0),
          a.identifierPrefix !== void 0 && (u = a.identifierPrefix),
          a.onUncaughtError !== void 0 && (f = a.onUncaughtError),
          a.onCaughtError !== void 0 && (p = a.onCaughtError),
          a.onRecoverableError !== void 0 && (b = a.onRecoverableError),
          a.unstable_transitionCallbacks !== void 0 &&
            (R = a.unstable_transitionCallbacks)),
        (a = D0(n, 1, !1, null, null, o, u, f, p, b, R, null)),
        (n[oe] = a.current),
        rh(n),
        new Sh(a)
      );
    }),
    (Ys.hydrateRoot = function (n, a, o) {
      if (!s(n)) throw Error(i(299));
      var u = !1,
        f = "",
        p = nv,
        b = rv,
        R = av,
        L = null,
        K = null;
      return (
        o != null &&
          (o.unstable_strictMode === !0 && (u = !0),
          o.identifierPrefix !== void 0 && (f = o.identifierPrefix),
          o.onUncaughtError !== void 0 && (p = o.onUncaughtError),
          o.onCaughtError !== void 0 && (b = o.onCaughtError),
          o.onRecoverableError !== void 0 && (R = o.onRecoverableError),
          o.unstable_transitionCallbacks !== void 0 &&
            (L = o.unstable_transitionCallbacks),
          o.formState !== void 0 && (K = o.formState)),
        (a = D0(n, 1, !0, a, o ?? null, u, f, p, b, R, L, K)),
        (a.context = M0(null)),
        (o = a.current),
        (u = Un()),
        (u = H(u)),
        (f = Sa(u)),
        (f.callback = null),
        _a(o, f, u),
        (o = u),
        (a.current.lanes = o),
        pa(a, o),
        xr(a),
        (n[oe] = a.current),
        rh(n),
        new Vu(a)
      );
    }),
    (Ys.version = "19.1.1"),
    Ys
  );
}
var Q0;
function JR() {
  if (Q0) return Eh.exports;
  Q0 = 1;
  function e() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
      } catch (t) {
        console.error(t);
      }
  }
  return (e(), (Eh.exports = XR()), Eh.exports);
}
var WR = JR(),
  w = qm();
const Re = _w(w),
  xw = IR({ __proto__: null, default: Re }, [w]);
/**
 * react-router v7.9.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var Rw = (e) => {
    throw TypeError(e);
  },
  eO = (e, t, r) => t.has(e) || Rw("Cannot " + r),
  Ch = (e, t, r) => (
    eO(e, t, "read from private field"),
    r ? r.call(e) : t.get(e)
  ),
  tO = (e, t, r) =>
    t.has(e)
      ? Rw("Cannot add the same private member more than once")
      : t instanceof WeakSet
        ? t.add(e)
        : t.set(e, r),
  X0 = "popstate";
function nO(e = {}) {
  function t(i, s) {
    let { pathname: l, search: c, hash: d } = i.location;
    return ul(
      "",
      { pathname: l, search: c, hash: d },
      (s.state && s.state.usr) || null,
      (s.state && s.state.key) || "default",
    );
  }
  function r(i, s) {
    return typeof s == "string" ? s : Ga(s);
  }
  return aO(t, r, null, e);
}
function Xe(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function zt(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function rO() {
  return Math.random().toString(36).substring(2, 10);
}
function J0(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function ul(e, t, r = null, i) {
  return {
    pathname: typeof e == "string" ? e : e.pathname,
    search: "",
    hash: "",
    ...(typeof t == "string" ? Ja(t) : t),
    state: r,
    key: (t && t.key) || i || rO(),
  };
}
function Ga({ pathname: e = "/", search: t = "", hash: r = "" }) {
  return (
    t && t !== "?" && (e += t.charAt(0) === "?" ? t : "?" + t),
    r && r !== "#" && (e += r.charAt(0) === "#" ? r : "#" + r),
    e
  );
}
function Ja(e) {
  let t = {};
  if (e) {
    let r = e.indexOf("#");
    r >= 0 && ((t.hash = e.substring(r)), (e = e.substring(0, r)));
    let i = e.indexOf("?");
    (i >= 0 && ((t.search = e.substring(i)), (e = e.substring(0, i))),
      e && (t.pathname = e));
  }
  return t;
}
function aO(e, t, r, i = {}) {
  let { window: s = document.defaultView, v5Compat: l = !1 } = i,
    c = s.history,
    d = "POP",
    m = null,
    h = y();
  h == null && ((h = 0), c.replaceState({ ...c.state, idx: h }, ""));
  function y() {
    return (c.state || { idx: null }).idx;
  }
  function g() {
    d = "POP";
    let x = y(),
      T = x == null ? null : x - h;
    ((h = x), m && m({ action: d, location: E.location, delta: T }));
  }
  function v(x, T) {
    d = "PUSH";
    let P = ul(E.location, x, T);
    h = y() + 1;
    let D = J0(P, h),
      B = E.createHref(P);
    try {
      c.pushState(D, "", B);
    } catch (k) {
      if (k instanceof DOMException && k.name === "DataCloneError") throw k;
      s.location.assign(B);
    }
    l && m && m({ action: d, location: E.location, delta: 1 });
  }
  function _(x, T) {
    d = "REPLACE";
    let P = ul(E.location, x, T);
    h = y();
    let D = J0(P, h),
      B = E.createHref(P);
    (c.replaceState(D, "", B),
      l && m && m({ action: d, location: E.location, delta: 0 }));
  }
  function S(x) {
    return Ow(x);
  }
  let E = {
    get action() {
      return d;
    },
    get location() {
      return e(s, c);
    },
    listen(x) {
      if (m) throw new Error("A history only accepts one active listener");
      return (
        s.addEventListener(X0, g),
        (m = x),
        () => {
          (s.removeEventListener(X0, g), (m = null));
        }
      );
    },
    createHref(x) {
      return t(s, x);
    },
    createURL: S,
    encodeLocation(x) {
      let T = S(x);
      return { pathname: T.pathname, search: T.search, hash: T.hash };
    },
    push: v,
    replace: _,
    go(x) {
      return c.go(x);
    },
  };
  return E;
}
function Ow(e, t = !1) {
  let r = "http://localhost";
  (typeof window < "u" &&
    (r =
      window.location.origin !== "null"
        ? window.location.origin
        : window.location.href),
    Xe(r, "No window.location.(origin|href) available to create URL"));
  let i = typeof e == "string" ? e : Ga(e);
  return (
    (i = i.replace(/ $/, "%20")),
    !t && i.startsWith("//") && (i = r + i),
    new URL(i, r)
  );
}
var tl,
  W0 = class {
    constructor(e) {
      if ((tO(this, tl, new Map()), e)) for (let [t, r] of e) this.set(t, r);
    }
    get(e) {
      if (Ch(this, tl).has(e)) return Ch(this, tl).get(e);
      if (e.defaultValue !== void 0) return e.defaultValue;
      throw new Error("No value found for context");
    }
    set(e, t) {
      Ch(this, tl).set(e, t);
    }
  };
tl = new WeakMap();
var iO = new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);
function oO(e) {
  return iO.has(e);
}
var sO = new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "middleware",
  "children",
]);
function lO(e) {
  return sO.has(e);
}
function uO(e) {
  return e.index === !0;
}
function cl(e, t, r = [], i = {}, s = !1) {
  return e.map((l, c) => {
    let d = [...r, String(c)],
      m = typeof l.id == "string" ? l.id : d.join("-");
    if (
      (Xe(
        l.index !== !0 || !l.children,
        "Cannot specify children on an index route",
      ),
      Xe(
        s || !i[m],
        `Found a route id collision on id "${m}".  Route id's must be globally unique within Data Router usages`,
      ),
      uO(l))
    ) {
      let h = { ...l, ...t(l), id: m };
      return ((i[m] = h), h);
    } else {
      let h = { ...l, ...t(l), id: m, children: void 0 };
      return (
        (i[m] = h),
        l.children && (h.children = cl(l.children, t, d, i, s)),
        h
      );
    }
  });
}
function Za(e, t, r = "/") {
  return uc(e, t, r, !1);
}
function uc(e, t, r, i) {
  let s = typeof t == "string" ? Ja(t) : t,
    l = ir(s.pathname || "/", r);
  if (l == null) return null;
  let c = Aw(e);
  fO(c);
  let d = null;
  for (let m = 0; d == null && m < c.length; ++m) {
    let h = _O(l);
    d = wO(c[m], h, i);
  }
  return d;
}
function cO(e, t) {
  let { route: r, pathname: i, params: s } = e;
  return {
    id: r.id,
    pathname: i,
    params: s,
    data: t[r.id],
    loaderData: t[r.id],
    handle: r.handle,
  };
}
function Aw(e, t = [], r = [], i = "", s = !1) {
  let l = (c, d, m = s, h) => {
    let y = {
      relativePath: h === void 0 ? c.path || "" : h,
      caseSensitive: c.caseSensitive === !0,
      childrenIndex: d,
      route: c,
    };
    if (y.relativePath.startsWith("/")) {
      if (!y.relativePath.startsWith(i) && m) return;
      (Xe(
        y.relativePath.startsWith(i),
        `Absolute route path "${y.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`,
      ),
        (y.relativePath = y.relativePath.slice(i.length)));
    }
    let g = Dr([i, y.relativePath]),
      v = r.concat(y);
    (c.children &&
      c.children.length > 0 &&
      (Xe(
        c.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${g}".`,
      ),
      Aw(c.children, t, v, g, m)),
      !(c.path == null && !c.index) &&
        t.push({ path: g, score: vO(g, c.index), routesMeta: v }));
  };
  return (
    e.forEach((c, d) => {
      if (c.path === "" || !c.path?.includes("?")) l(c, d);
      else for (let m of Cw(c.path)) l(c, d, !0, m);
    }),
    t
  );
}
function Cw(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [r, ...i] = t,
    s = r.endsWith("?"),
    l = r.replace(/\?$/, "");
  if (i.length === 0) return s ? [l, ""] : [l];
  let c = Cw(i.join("/")),
    d = [];
  return (
    d.push(...c.map((m) => (m === "" ? l : [l, m].join("/")))),
    s && d.push(...c),
    d.map((m) => (e.startsWith("/") && m === "" ? "/" : m))
  );
}
function fO(e) {
  e.sort((t, r) =>
    t.score !== r.score
      ? r.score - t.score
      : bO(
          t.routesMeta.map((i) => i.childrenIndex),
          r.routesMeta.map((i) => i.childrenIndex),
        ),
  );
}
var dO = /^:[\w-]+$/,
  hO = 3,
  mO = 2,
  pO = 1,
  yO = 10,
  gO = -2,
  eb = (e) => e === "*";
function vO(e, t) {
  let r = e.split("/"),
    i = r.length;
  return (
    r.some(eb) && (i += gO),
    t && (i += mO),
    r
      .filter((s) => !eb(s))
      .reduce((s, l) => s + (dO.test(l) ? hO : l === "" ? pO : yO), i)
  );
}
function bO(e, t) {
  return e.length === t.length && e.slice(0, -1).every((i, s) => i === t[s])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function wO(e, t, r = !1) {
  let { routesMeta: i } = e,
    s = {},
    l = "/",
    c = [];
  for (let d = 0; d < i.length; ++d) {
    let m = i[d],
      h = d === i.length - 1,
      y = l === "/" ? t : t.slice(l.length) || "/",
      g = Ec(
        { path: m.relativePath, caseSensitive: m.caseSensitive, end: h },
        y,
      ),
      v = m.route;
    if (
      (!g &&
        h &&
        r &&
        !i[i.length - 1].route.index &&
        (g = Ec(
          { path: m.relativePath, caseSensitive: m.caseSensitive, end: !1 },
          y,
        )),
      !g)
    )
      return null;
    (Object.assign(s, g.params),
      c.push({
        params: s,
        pathname: Dr([l, g.pathname]),
        pathnameBase: OO(Dr([l, g.pathnameBase])),
        route: v,
      }),
      g.pathnameBase !== "/" && (l = Dr([l, g.pathnameBase])));
  }
  return c;
}
function Ec(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [r, i] = SO(e.path, e.caseSensitive, e.end),
    s = t.match(r);
  if (!s) return null;
  let l = s[0],
    c = l.replace(/(.)\/+$/, "$1"),
    d = s.slice(1);
  return {
    params: i.reduce((h, { paramName: y, isOptional: g }, v) => {
      if (y === "*") {
        let S = d[v] || "";
        c = l.slice(0, l.length - S.length).replace(/(.)\/+$/, "$1");
      }
      const _ = d[v];
      return (
        g && !_ ? (h[y] = void 0) : (h[y] = (_ || "").replace(/%2F/g, "/")),
        h
      );
    }, {}),
    pathname: l,
    pathnameBase: c,
    pattern: e,
  };
}
function SO(e, t = !1, r = !0) {
  zt(
    e === "*" || !e.endsWith("*") || e.endsWith("/*"),
    `Route path "${e}" will be treated as if it were "${e.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/, "/*")}".`,
  );
  let i = [],
    s =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (c, d, m) => (
            i.push({ paramName: d, isOptional: m != null }),
            m ? "/?([^\\/]+)?" : "/([^\\/]+)"
          ),
        )
        .replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
  return (
    e.endsWith("*")
      ? (i.push({ paramName: "*" }),
        (s += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : r
        ? (s += "\\/*$")
        : e !== "" && e !== "/" && (s += "(?:(?=\\/|$))"),
    [new RegExp(s, t ? void 0 : "i"), i]
  );
}
function _O(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      zt(
        !1,
        `The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`,
      ),
      e
    );
  }
}
function ir(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let r = t.endsWith("/") ? t.length - 1 : t.length,
    i = e.charAt(r);
  return i && i !== "/" ? null : e.slice(r) || "/";
}
function EO({ basename: e, pathname: t }) {
  return t === "/" ? e : Dr([e, t]);
}
function xO(e, t = "/") {
  let {
    pathname: r,
    search: i = "",
    hash: s = "",
  } = typeof e == "string" ? Ja(e) : e;
  return {
    pathname: r ? (r.startsWith("/") ? r : RO(r, t)) : t,
    search: AO(i),
    hash: CO(s),
  };
}
function RO(e, t) {
  let r = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((s) => {
      s === ".." ? r.length > 1 && r.pop() : s !== "." && r.push(s);
    }),
    r.length > 1 ? r.join("/") : "/"
  );
}
function Th(e, t, r, i) {
  return `Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function Tw(e) {
  return e.filter(
    (t, r) => r === 0 || (t.route.path && t.route.path.length > 0),
  );
}
function Gm(e) {
  let t = Tw(e);
  return t.map((r, i) => (i === t.length - 1 ? r.pathname : r.pathnameBase));
}
function Ym(e, t, r, i = !1) {
  let s;
  typeof e == "string"
    ? (s = Ja(e))
    : ((s = { ...e }),
      Xe(
        !s.pathname || !s.pathname.includes("?"),
        Th("?", "pathname", "search", s),
      ),
      Xe(
        !s.pathname || !s.pathname.includes("#"),
        Th("#", "pathname", "hash", s),
      ),
      Xe(!s.search || !s.search.includes("#"), Th("#", "search", "hash", s)));
  let l = e === "" || s.pathname === "",
    c = l ? "/" : s.pathname,
    d;
  if (c == null) d = r;
  else {
    let g = t.length - 1;
    if (!i && c.startsWith("..")) {
      let v = c.split("/");
      for (; v[0] === ".."; ) (v.shift(), (g -= 1));
      s.pathname = v.join("/");
    }
    d = g >= 0 ? t[g] : "/";
  }
  let m = xO(s, d),
    h = c && c !== "/" && c.endsWith("/"),
    y = (l || c === ".") && r.endsWith("/");
  return (!m.pathname.endsWith("/") && (h || y) && (m.pathname += "/"), m);
}
var Dr = (e) => e.join("/").replace(/\/\/+/g, "/"),
  OO = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  AO = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  CO = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e),
  xc = class {
    constructor(e, t, r, i = !1) {
      ((this.status = e),
        (this.statusText = t || ""),
        (this.internal = i),
        r instanceof Error
          ? ((this.data = r.toString()), (this.error = r))
          : (this.data = r));
    }
  };
function fl(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
var Dw = ["POST", "PUT", "PATCH", "DELETE"],
  TO = new Set(Dw),
  DO = ["GET", ...Dw],
  MO = new Set(DO),
  NO = new Set([301, 302, 303, 307, 308]),
  zO = new Set([307, 308]),
  Dh = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  kO = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  Ks = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 },
  jO = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Km = (e) => jO.test(e),
  LO = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
  Mw = "remix-router-transitions",
  Nw = Symbol("ResetLoaderData");
function UO(e) {
  const t = e.window ? e.window : typeof window < "u" ? window : void 0,
    r =
      typeof t < "u" &&
      typeof t.document < "u" &&
      typeof t.document.createElement < "u";
  Xe(
    e.routes.length > 0,
    "You must provide a non-empty routes array to createRouter",
  );
  let i = e.hydrationRouteProperties || [],
    s = e.mapRouteProperties || LO,
    l = {},
    c = cl(e.routes, s, void 0, l),
    d,
    m = e.basename || "/";
  m.startsWith("/") || (m = `/${m}`);
  let h = e.dataStrategy || $O,
    y = { ...e.future },
    g = null,
    v = new Set(),
    _ = null,
    S = null,
    E = null,
    x = e.hydrationData != null,
    T = Za(c, e.history.location, m),
    P = !1,
    D = null,
    B;
  if (T == null && !e.patchRoutesOnNavigation) {
    let O = nr(404, { pathname: e.history.location.pathname }),
      { matches: M, route: z } = Hu(c);
    ((B = !0), (T = M), (D = { [z.id]: O }));
  } else if (
    (T &&
      !e.hydrationData &&
      A(T, c, e.history.location.pathname).active &&
      (T = null),
    T)
  )
    if (T.some((O) => O.route.lazy)) B = !1;
    else if (!T.some((O) => O.route.loader)) B = !0;
    else {
      let O = e.hydrationData ? e.hydrationData.loaderData : null,
        M = e.hydrationData ? e.hydrationData.errors : null;
      if (M) {
        let z = T.findIndex(($) => M[$.route.id] !== void 0);
        B = T.slice(0, z + 1).every(($) => !om($.route, O, M));
      } else B = T.every((z) => !om(z.route, O, M));
    }
  else {
    ((B = !1), (T = []));
    let O = A(null, c, e.history.location.pathname);
    O.active && O.matches && ((P = !0), (T = O.matches));
  }
  let k,
    C = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: T,
      initialized: B,
      navigation: Dh,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || D,
      fetchers: new Map(),
      blockers: new Map(),
    },
    Y = "POP",
    Q = !1,
    me,
    pe = !1,
    we = new Map(),
    be = null,
    Se = !1,
    ce = !1,
    ge = new Set(),
    U = new Map(),
    ne = 0,
    q = -1,
    ie = new Map(),
    N = new Set(),
    W = new Map(),
    fe = new Map(),
    le = new Set(),
    ve = new Map(),
    ke,
    Oe = null;
  function Ne() {
    if (
      ((g = e.history.listen(({ action: O, location: M, delta: z }) => {
        if (ke) {
          (ke(), (ke = void 0));
          return;
        }
        zt(
          ve.size === 0 || z != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.",
        );
        let $ = oi({
          currentLocation: C.location,
          nextLocation: M,
          historyAction: O,
        });
        if ($ && z != null) {
          let I = new Promise((oe) => {
            ke = oe;
          });
          (e.history.go(z * -1),
            Dn($, {
              state: "blocked",
              location: M,
              proceed() {
                (Dn($, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: M,
                }),
                  I.then(() => e.history.go(z)));
              },
              reset() {
                let oe = new Map(C.blockers);
                (oe.set($, Ks), at({ blockers: oe }));
              },
            }));
          return;
        }
        return dn(O, M);
      })),
      r)
    ) {
      rA(t, we);
      let O = () => aA(t, we);
      (t.addEventListener("pagehide", O),
        (be = () => t.removeEventListener("pagehide", O)));
    }
    return (
      C.initialized || dn("POP", C.location, { initialHydration: !0 }),
      k
    );
  }
  function qe() {
    (g && g(),
      be && be(),
      v.clear(),
      me && me.abort(),
      C.fetchers.forEach((O, M) => Ht(M)),
      C.blockers.forEach((O, M) => Br(M)));
  }
  function gt(O) {
    return (v.add(O), () => v.delete(O));
  }
  function at(O, M = {}) {
    (O.matches &&
      (O.matches = O.matches.map((I) => {
        let oe = l[I.route.id],
          de = I.route;
        return de.element !== oe.element ||
          de.errorElement !== oe.errorElement ||
          de.hydrateFallbackElement !== oe.hydrateFallbackElement
          ? { ...I, route: oe }
          : I;
      })),
      (C = { ...C, ...O }));
    let z = [],
      $ = [];
    (C.fetchers.forEach((I, oe) => {
      I.state === "idle" && (le.has(oe) ? z.push(oe) : $.push(oe));
    }),
      le.forEach((I) => {
        !C.fetchers.has(I) && !U.has(I) && z.push(I);
      }),
      [...v].forEach((I) =>
        I(C, {
          deletedFetchers: z,
          viewTransitionOpts: M.viewTransitionOpts,
          flushSync: M.flushSync === !0,
        }),
      ),
      z.forEach((I) => Ht(I)),
      $.forEach((I) => C.fetchers.delete(I)));
  }
  function ut(O, M, { flushSync: z } = {}) {
    let $ =
        C.actionData != null &&
        C.navigation.formMethod != null &&
        Rn(C.navigation.formMethod) &&
        C.navigation.state === "loading" &&
        O.state?._isRedirect !== !0,
      I;
    M.actionData
      ? Object.keys(M.actionData).length > 0
        ? (I = M.actionData)
        : (I = null)
      : $
        ? (I = C.actionData)
        : (I = null);
    let oe = M.loaderData
        ? cb(C.loaderData, M.loaderData, M.matches || [], M.errors)
        : C.loaderData,
      de = C.blockers;
    de.size > 0 && ((de = new Map(de)), de.forEach((_e, Ae) => de.set(Ae, Ks)));
    let ye = Se ? !1 : li(O, M.matches || C.matches),
      Ee =
        Q === !0 ||
        (C.navigation.formMethod != null &&
          Rn(C.navigation.formMethod) &&
          O.state?._isRedirect !== !0);
    (d && ((c = d), (d = void 0)),
      Se ||
        Y === "POP" ||
        (Y === "PUSH"
          ? e.history.push(O, O.state)
          : Y === "REPLACE" && e.history.replace(O, O.state)));
    let xe;
    if (Y === "POP") {
      let _e = we.get(C.location.pathname);
      _e && _e.has(O.pathname)
        ? (xe = { currentLocation: C.location, nextLocation: O })
        : we.has(O.pathname) &&
          (xe = { currentLocation: O, nextLocation: C.location });
    } else if (pe) {
      let _e = we.get(C.location.pathname);
      (_e
        ? _e.add(O.pathname)
        : ((_e = new Set([O.pathname])), we.set(C.location.pathname, _e)),
        (xe = { currentLocation: C.location, nextLocation: O }));
    }
    (at(
      {
        ...M,
        actionData: I,
        loaderData: oe,
        historyAction: Y,
        location: O,
        initialized: !0,
        navigation: Dh,
        revalidation: "idle",
        restoreScrollPosition: ye,
        preventScrollReset: Ee,
        blockers: de,
      },
      { viewTransitionOpts: xe, flushSync: z === !0 },
    ),
      (Y = "POP"),
      (Q = !1),
      (pe = !1),
      (Se = !1),
      (ce = !1),
      Oe?.resolve(),
      (Oe = null));
  }
  async function Xt(O, M) {
    if (typeof O == "number") {
      e.history.go(O);
      return;
    }
    let z = im(C.location, C.matches, m, O, M?.fromRouteId, M?.relative),
      { path: $, submission: I, error: oe } = tb(!1, z, M),
      de = C.location,
      ye = ul(C.location, $, M && M.state);
    ye = { ...ye, ...e.history.encodeLocation(ye) };
    let Ee = M && M.replace != null ? M.replace : void 0,
      xe = "PUSH";
    Ee === !0
      ? (xe = "REPLACE")
      : Ee === !1 ||
        (I != null &&
          Rn(I.formMethod) &&
          I.formAction === C.location.pathname + C.location.search &&
          (xe = "REPLACE"));
    let _e =
        M && "preventScrollReset" in M ? M.preventScrollReset === !0 : void 0,
      Ae = (M && M.flushSync) === !0,
      Fe = oi({ currentLocation: de, nextLocation: ye, historyAction: xe });
    if (Fe) {
      Dn(Fe, {
        state: "blocked",
        location: ye,
        proceed() {
          (Dn(Fe, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: ye,
          }),
            Xt(O, M));
        },
        reset() {
          let Je = new Map(C.blockers);
          (Je.set(Fe, Ks), at({ blockers: Je }));
        },
      });
      return;
    }
    await dn(xe, ye, {
      submission: I,
      pendingError: oe,
      preventScrollReset: _e,
      replace: M && M.replace,
      enableViewTransition: M && M.viewTransition,
      flushSync: Ae,
    });
  }
  function Hn() {
    (Oe || (Oe = iA()), Pr(), at({ revalidation: "loading" }));
    let O = Oe.promise;
    return C.navigation.state === "submitting"
      ? O
      : C.navigation.state === "idle"
        ? (dn(C.historyAction, C.location, {
            startUninterruptedRevalidation: !0,
          }),
          O)
        : (dn(Y || C.historyAction, C.navigation.location, {
            overrideNavigation: C.navigation,
            enableViewTransition: pe === !0,
          }),
          O);
  }
  async function dn(O, M, z) {
    (me && me.abort(),
      (me = null),
      (Y = O),
      (Se = (z && z.startUninterruptedRevalidation) === !0),
      pa(C.location, C.matches),
      (Q = (z && z.preventScrollReset) === !0),
      (pe = (z && z.enableViewTransition) === !0));
    let $ = d || c,
      I = z && z.overrideNavigation,
      oe =
        z?.initialHydration && C.matches && C.matches.length > 0 && !P
          ? C.matches
          : Za($, M, m),
      de = (z && z.flushSync) === !0;
    if (
      oe &&
      C.initialized &&
      !ce &&
      QO(C.location, M) &&
      !(z && z.submission && Rn(z.submission.formMethod))
    ) {
      ut(M, { matches: oe }, { flushSync: de });
      return;
    }
    let ye = A(oe, $, M.pathname);
    if ((ye.active && ye.matches && (oe = ye.matches), !oe)) {
      let { error: vt, notFoundMatches: Pe, route: ct } = ma(M.pathname);
      ut(
        M,
        { matches: Pe, loaderData: {}, errors: { [ct.id]: vt } },
        { flushSync: de },
      );
      return;
    }
    me = new AbortController();
    let Ee = Mo(e.history, M, me.signal, z && z.submission),
      xe = e.getContext ? await e.getContext() : new W0(),
      _e;
    if (z && z.pendingError)
      _e = [qa(oe).route.id, { type: "error", error: z.pendingError }];
    else if (z && z.submission && Rn(z.submission.formMethod)) {
      let vt = await Vi(
        Ee,
        M,
        z.submission,
        oe,
        xe,
        ye.active,
        z && z.initialHydration === !0,
        { replace: z.replace, flushSync: de },
      );
      if (vt.shortCircuited) return;
      if (vt.pendingActionResult) {
        let [Pe, ct] = vt.pendingActionResult;
        if (Fn(ct) && fl(ct.error) && ct.error.status === 404) {
          ((me = null),
            ut(M, {
              matches: vt.matches,
              loaderData: {},
              errors: { [Pe]: ct.error },
            }));
          return;
        }
      }
      ((oe = vt.matches || oe),
        (_e = vt.pendingActionResult),
        (I = Mh(M, z.submission)),
        (de = !1),
        (ye.active = !1),
        (Ee = Mo(e.history, Ee.url, Ee.signal)));
    }
    let {
      shortCircuited: Ae,
      matches: Fe,
      loaderData: Je,
      errors: it,
    } = await $i(
      Ee,
      M,
      oe,
      xe,
      ye.active,
      I,
      z && z.submission,
      z && z.fetcherSubmission,
      z && z.replace,
      z && z.initialHydration === !0,
      de,
      _e,
    );
    Ae ||
      ((me = null),
      ut(M, { matches: Fe || oe, ...fb(_e), loaderData: Je, errors: it }));
  }
  async function Vi(O, M, z, $, I, oe, de, ye = {}) {
    Pr();
    let Ee = tA(M, z);
    if ((at({ navigation: Ee }, { flushSync: ye.flushSync === !0 }), oe)) {
      let Ae = await F($, M.pathname, O.signal);
      if (Ae.type === "aborted") return { shortCircuited: !0 };
      if (Ae.type === "error") {
        if (Ae.partialMatches.length === 0) {
          let { matches: Je, route: it } = Hu(c);
          return {
            matches: Je,
            pendingActionResult: [it.id, { type: "error", error: Ae.error }],
          };
        }
        let Fe = qa(Ae.partialMatches).route.id;
        return {
          matches: Ae.partialMatches,
          pendingActionResult: [Fe, { type: "error", error: Ae.error }],
        };
      } else if (Ae.matches) $ = Ae.matches;
      else {
        let { notFoundMatches: Fe, error: Je, route: it } = ma(M.pathname);
        return {
          matches: Fe,
          pendingActionResult: [it.id, { type: "error", error: Je }],
        };
      }
    }
    let xe,
      _e = cc($, M);
    if (!_e.route.action && !_e.route.lazy)
      xe = {
        type: "error",
        error: nr(405, {
          method: O.method,
          pathname: M.pathname,
          routeId: _e.route.id,
        }),
      };
    else {
      let Ae = No(s, l, O, $, _e, de ? [] : i, I),
        Fe = await vr(O, Ae, I, null);
      if (((xe = Fe[_e.route.id]), !xe)) {
        for (let Je of $)
          if (Fe[Je.route.id]) {
            xe = Fe[Je.route.id];
            break;
          }
      }
      if (O.signal.aborted) return { shortCircuited: !0 };
    }
    if (Oi(xe)) {
      let Ae;
      return (
        ye && ye.replace != null
          ? (Ae = ye.replace)
          : (Ae =
              sb(xe.response.headers.get("Location"), new URL(O.url), m) ===
              C.location.pathname + C.location.search),
        await lr(O, xe, !0, { submission: z, replace: Ae }),
        { shortCircuited: !0 }
      );
    }
    if (Fn(xe)) {
      let Ae = qa($, _e.route.id);
      return (
        (ye && ye.replace) !== !0 && (Y = "PUSH"),
        { matches: $, pendingActionResult: [Ae.route.id, xe, _e.route.id] }
      );
    }
    return { matches: $, pendingActionResult: [_e.route.id, xe] };
  }
  async function $i(O, M, z, $, I, oe, de, ye, Ee, xe, _e, Ae) {
    let Fe = oe || Mh(M, de),
      Je = de || ye || hb(Fe),
      it = !Se && !xe;
    if (I) {
      if (it) {
        let jt = Vt(Ae);
        at(
          { navigation: Fe, ...(jt !== void 0 ? { actionData: jt } : {}) },
          { flushSync: _e },
        );
      }
      let Be = await F(z, M.pathname, O.signal);
      if (Be.type === "aborted") return { shortCircuited: !0 };
      if (Be.type === "error") {
        if (Be.partialMatches.length === 0) {
          let { matches: Ir, route: bn } = Hu(c);
          return { matches: Ir, loaderData: {}, errors: { [bn.id]: Be.error } };
        }
        let jt = qa(Be.partialMatches).route.id;
        return {
          matches: Be.partialMatches,
          loaderData: {},
          errors: { [jt]: Be.error },
        };
      } else if (Be.matches) z = Be.matches;
      else {
        let { error: jt, notFoundMatches: Ir, route: bn } = ma(M.pathname);
        return { matches: Ir, loaderData: {}, errors: { [bn.id]: jt } };
      }
    }
    let vt = d || c,
      { dsMatches: Pe, revalidatingFetchers: ct } = nb(
        O,
        $,
        s,
        l,
        e.history,
        C,
        z,
        Je,
        M,
        xe ? [] : i,
        xe === !0,
        ce,
        ge,
        le,
        W,
        N,
        vt,
        m,
        e.patchRoutesOnNavigation != null,
        Ae,
      );
    if (
      ((q = ++ne),
      !e.dataStrategy &&
        !Pe.some((Be) => Be.shouldLoad) &&
        !Pe.some((Be) => Be.route.middleware) &&
        ct.length === 0)
    ) {
      let Be = ur();
      return (
        ut(
          M,
          {
            matches: z,
            loaderData: {},
            errors: Ae && Fn(Ae[1]) ? { [Ae[0]]: Ae[1].error } : null,
            ...fb(Ae),
            ...(Be ? { fetchers: new Map(C.fetchers) } : {}),
          },
          { flushSync: _e },
        ),
        { shortCircuited: !0 }
      );
    }
    if (it) {
      let Be = {};
      if (!I) {
        Be.navigation = Fe;
        let jt = Vt(Ae);
        jt !== void 0 && (Be.actionData = jt);
      }
      (ct.length > 0 && (Be.fetchers = es(ct)), at(Be, { flushSync: _e }));
    }
    ct.forEach((Be) => {
      (Tn(Be.key), Be.controller && U.set(Be.key, Be.controller));
    });
    let br = () => ct.forEach((Be) => Tn(Be.key));
    me && me.signal.addEventListener("abort", br);
    let { loaderResults: Mn, fetcherResults: hn } = await ai(Pe, ct, O, $);
    if (O.signal.aborted) return { shortCircuited: !0 };
    (me && me.signal.removeEventListener("abort", br),
      ct.forEach((Be) => U.delete(Be.key)));
    let qn = Iu(Mn);
    if (qn)
      return (
        await lr(O, qn.result, !0, { replace: Ee }),
        { shortCircuited: !0 }
      );
    if (((qn = Iu(hn)), qn))
      return (
        N.add(qn.key),
        await lr(O, qn.result, !0, { replace: Ee }),
        { shortCircuited: !0 }
      );
    let { loaderData: Ii, errors: ya } = ub(C, z, Mn, Ae, ct, hn);
    xe && C.errors && (ya = { ...C.errors, ...ya });
    let Vr = ur(),
      $r = Fr(q),
      Hr = Vr || $r || ct.length > 0;
    return {
      matches: z,
      loaderData: Ii,
      errors: ya,
      ...(Hr ? { fetchers: new Map(C.fetchers) } : {}),
    };
  }
  function Vt(O) {
    if (O && !Fn(O[1])) return { [O[0]]: O[1].data };
    if (C.actionData)
      return Object.keys(C.actionData).length === 0 ? null : C.actionData;
  }
  function es(O) {
    return (
      O.forEach((M) => {
        let z = C.fetchers.get(M.key),
          $ = Qs(void 0, z ? z.data : void 0);
        C.fetchers.set(M.key, $);
      }),
      new Map(C.fetchers)
    );
  }
  async function ni(O, M, z, $) {
    Tn(O);
    let I = ($ && $.flushSync) === !0,
      oe = d || c,
      de = im(C.location, C.matches, m, z, M, $?.relative),
      ye = Za(oe, de, m),
      Ee = A(ye, oe, de);
    if ((Ee.active && Ee.matches && (ye = Ee.matches), !ye)) {
      yt(O, M, nr(404, { pathname: de }), { flushSync: I });
      return;
    }
    let { path: xe, submission: _e, error: Ae } = tb(!0, de, $);
    if (Ae) {
      yt(O, M, Ae, { flushSync: I });
      return;
    }
    let Fe = e.getContext ? await e.getContext() : new W0(),
      Je = ($ && $.preventScrollReset) === !0;
    if (_e && Rn(_e.formMethod)) {
      await ri(O, M, xe, ye, Fe, Ee.active, I, Je, _e);
      return;
    }
    (W.set(O, { routeId: M, path: xe }),
      await In(O, M, xe, ye, Fe, Ee.active, I, Je, _e));
  }
  async function ri(O, M, z, $, I, oe, de, ye, Ee) {
    (Pr(), W.delete(O));
    let xe = C.fetchers.get(O);
    $t(O, nA(Ee, xe), { flushSync: de });
    let _e = new AbortController(),
      Ae = Mo(e.history, z, _e.signal, Ee);
    if (oe) {
      let Et = await F($, new URL(Ae.url).pathname, Ae.signal, O);
      if (Et.type === "aborted") return;
      if (Et.type === "error") {
        yt(O, M, Et.error, { flushSync: de });
        return;
      } else if (Et.matches) $ = Et.matches;
      else {
        yt(O, M, nr(404, { pathname: z }), { flushSync: de });
        return;
      }
    }
    let Fe = cc($, z);
    if (!Fe.route.action && !Fe.route.lazy) {
      let Et = nr(405, { method: Ee.formMethod, pathname: z, routeId: M });
      yt(O, M, Et, { flushSync: de });
      return;
    }
    U.set(O, _e);
    let Je = ne,
      it = No(s, l, Ae, $, Fe, i, I),
      Pe = (await vr(Ae, it, I, O))[Fe.route.id];
    if (Ae.signal.aborted) {
      U.get(O) === _e && U.delete(O);
      return;
    }
    if (le.has(O)) {
      if (Oi(Pe) || Fn(Pe)) {
        $t(O, Va(void 0));
        return;
      }
    } else {
      if (Oi(Pe))
        if ((U.delete(O), q > Je)) {
          $t(O, Va(void 0));
          return;
        } else
          return (
            N.add(O),
            $t(O, Qs(Ee)),
            lr(Ae, Pe, !1, { fetcherSubmission: Ee, preventScrollReset: ye })
          );
      if (Fn(Pe)) {
        yt(O, M, Pe.error);
        return;
      }
    }
    let ct = C.navigation.location || C.location,
      br = Mo(e.history, ct, _e.signal),
      Mn = d || c,
      hn =
        C.navigation.state !== "idle"
          ? Za(Mn, C.navigation.location, m)
          : C.matches;
    Xe(hn, "Didn't find any matches after fetcher action");
    let qn = ++ne;
    ie.set(O, qn);
    let Ii = Qs(Ee, Pe.data);
    C.fetchers.set(O, Ii);
    let { dsMatches: ya, revalidatingFetchers: Vr } = nb(
      br,
      I,
      s,
      l,
      e.history,
      C,
      hn,
      Ee,
      ct,
      i,
      !1,
      ce,
      ge,
      le,
      W,
      N,
      Mn,
      m,
      e.patchRoutesOnNavigation != null,
      [Fe.route.id, Pe],
    );
    (Vr.filter((Et) => Et.key !== O).forEach((Et) => {
      let ga = Et.key,
        zl = C.fetchers.get(ga),
        kl = Qs(void 0, zl ? zl.data : void 0);
      (C.fetchers.set(ga, kl),
        Tn(ga),
        Et.controller && U.set(ga, Et.controller));
    }),
      at({ fetchers: new Map(C.fetchers) }));
    let $r = () => Vr.forEach((Et) => Tn(Et.key));
    _e.signal.addEventListener("abort", $r);
    let { loaderResults: Hr, fetcherResults: Be } = await ai(ya, Vr, br, I);
    if (_e.signal.aborted) return;
    if (
      (_e.signal.removeEventListener("abort", $r),
      ie.delete(O),
      U.delete(O),
      Vr.forEach((Et) => U.delete(Et.key)),
      C.fetchers.has(O))
    ) {
      let Et = Va(Pe.data);
      C.fetchers.set(O, Et);
    }
    let jt = Iu(Hr);
    if (jt) return lr(br, jt.result, !1, { preventScrollReset: ye });
    if (((jt = Iu(Be)), jt))
      return (N.add(jt.key), lr(br, jt.result, !1, { preventScrollReset: ye }));
    let { loaderData: Ir, errors: bn } = ub(C, hn, Hr, void 0, Vr, Be);
    (Fr(qn),
      C.navigation.state === "loading" && qn > q
        ? (Xe(Y, "Expected pending action"),
          me && me.abort(),
          ut(C.navigation.location, {
            matches: hn,
            loaderData: Ir,
            errors: bn,
            fetchers: new Map(C.fetchers),
          }))
        : (at({
            errors: bn,
            loaderData: cb(C.loaderData, Ir, hn, bn),
            fetchers: new Map(C.fetchers),
          }),
          (ce = !1)));
  }
  async function In(O, M, z, $, I, oe, de, ye, Ee) {
    let xe = C.fetchers.get(O);
    $t(O, Qs(Ee, xe ? xe.data : void 0), { flushSync: de });
    let _e = new AbortController(),
      Ae = Mo(e.history, z, _e.signal);
    if (oe) {
      let ct = await F($, new URL(Ae.url).pathname, Ae.signal, O);
      if (ct.type === "aborted") return;
      if (ct.type === "error") {
        yt(O, M, ct.error, { flushSync: de });
        return;
      } else if (ct.matches) $ = ct.matches;
      else {
        yt(O, M, nr(404, { pathname: z }), { flushSync: de });
        return;
      }
    }
    let Fe = cc($, z);
    U.set(O, _e);
    let Je = ne,
      it = No(s, l, Ae, $, Fe, i, I),
      Pe = (await vr(Ae, it, I, O))[Fe.route.id];
    if ((U.get(O) === _e && U.delete(O), !Ae.signal.aborted)) {
      if (le.has(O)) {
        $t(O, Va(void 0));
        return;
      }
      if (Oi(Pe))
        if (q > Je) {
          $t(O, Va(void 0));
          return;
        } else {
          (N.add(O), await lr(Ae, Pe, !1, { preventScrollReset: ye }));
          return;
        }
      if (Fn(Pe)) {
        yt(O, M, Pe.error);
        return;
      }
      $t(O, Va(Pe.data));
    }
  }
  async function lr(
    O,
    M,
    z,
    {
      submission: $,
      fetcherSubmission: I,
      preventScrollReset: oe,
      replace: de,
    } = {},
  ) {
    M.response.headers.has("X-Remix-Revalidate") && (ce = !0);
    let ye = M.response.headers.get("Location");
    (Xe(ye, "Expected a Location header on the redirect Response"),
      (ye = sb(ye, new URL(O.url), m)));
    let Ee = ul(C.location, ye, { _isRedirect: !0 });
    if (r) {
      let it = !1;
      if (M.response.headers.has("X-Remix-Reload-Document")) it = !0;
      else if (Km(ye)) {
        const vt = Ow(ye, !0);
        it = vt.origin !== t.location.origin || ir(vt.pathname, m) == null;
      }
      if (it) {
        de ? t.location.replace(ye) : t.location.assign(ye);
        return;
      }
    }
    me = null;
    let xe =
        de === !0 || M.response.headers.has("X-Remix-Replace")
          ? "REPLACE"
          : "PUSH",
      { formMethod: _e, formAction: Ae, formEncType: Fe } = C.navigation;
    !$ && !I && _e && Ae && Fe && ($ = hb(C.navigation));
    let Je = $ || I;
    if (zO.has(M.response.status) && Je && Rn(Je.formMethod))
      await dn(xe, Ee, {
        submission: { ...Je, formAction: ye },
        preventScrollReset: oe || Q,
        enableViewTransition: z ? pe : void 0,
      });
    else {
      let it = Mh(Ee, $);
      await dn(xe, Ee, {
        overrideNavigation: it,
        fetcherSubmission: I,
        preventScrollReset: oe || Q,
        enableViewTransition: z ? pe : void 0,
      });
    }
  }
  async function vr(O, M, z, $) {
    let I,
      oe = {};
    try {
      I = await IO(h, O, M, $, z, !1);
    } catch (de) {
      return (
        M.filter((ye) => ye.shouldLoad).forEach((ye) => {
          oe[ye.route.id] = { type: "error", error: de };
        }),
        oe
      );
    }
    if (O.signal.aborted) return oe;
    for (let [de, ye] of Object.entries(I))
      if (WO(ye)) {
        let Ee = ye.result;
        oe[de] = { type: "redirect", response: YO(Ee, O, de, M, m) };
      } else oe[de] = await GO(ye);
    return oe;
  }
  async function ai(O, M, z, $) {
    let I = vr(z, O, $, null),
      oe = Promise.all(
        M.map(async (Ee) => {
          if (Ee.matches && Ee.match && Ee.request && Ee.controller) {
            let _e = (await vr(Ee.request, Ee.matches, $, Ee.key))[
              Ee.match.route.id
            ];
            return { [Ee.key]: _e };
          } else
            return Promise.resolve({
              [Ee.key]: {
                type: "error",
                error: nr(404, { pathname: Ee.path }),
              },
            });
        }),
      ),
      de = await I,
      ye = (await oe).reduce((Ee, xe) => Object.assign(Ee, xe), {});
    return { loaderResults: de, fetcherResults: ye };
  }
  function Pr() {
    ((ce = !0),
      W.forEach((O, M) => {
        (U.has(M) && ge.add(M), Tn(M));
      }));
  }
  function $t(O, M, z = {}) {
    (C.fetchers.set(O, M),
      at(
        { fetchers: new Map(C.fetchers) },
        { flushSync: (z && z.flushSync) === !0 },
      ));
  }
  function yt(O, M, z, $ = {}) {
    let I = qa(C.matches, M);
    (Ht(O),
      at(
        { errors: { [I.route.id]: z }, fetchers: new Map(C.fetchers) },
        { flushSync: ($ && $.flushSync) === !0 },
      ));
  }
  function vn(O) {
    return (
      fe.set(O, (fe.get(O) || 0) + 1),
      le.has(O) && le.delete(O),
      C.fetchers.get(O) || kO
    );
  }
  function Ht(O) {
    let M = C.fetchers.get(O);
    (U.has(O) && !(M && M.state === "loading" && ie.has(O)) && Tn(O),
      W.delete(O),
      ie.delete(O),
      N.delete(O),
      le.delete(O),
      ge.delete(O),
      C.fetchers.delete(O));
  }
  function ii(O) {
    let M = (fe.get(O) || 0) - 1;
    (M <= 0 ? (fe.delete(O), le.add(O)) : fe.set(O, M),
      at({ fetchers: new Map(C.fetchers) }));
  }
  function Tn(O) {
    let M = U.get(O);
    M && (M.abort(), U.delete(O));
  }
  function ha(O) {
    for (let M of O) {
      let z = vn(M),
        $ = Va(z.data);
      C.fetchers.set(M, $);
    }
  }
  function ur() {
    let O = [],
      M = !1;
    for (let z of N) {
      let $ = C.fetchers.get(z);
      (Xe($, `Expected fetcher: ${z}`),
        $.state === "loading" && (N.delete(z), O.push(z), (M = !0)));
    }
    return (ha(O), M);
  }
  function Fr(O) {
    let M = [];
    for (let [z, $] of ie)
      if ($ < O) {
        let I = C.fetchers.get(z);
        (Xe(I, `Expected fetcher: ${z}`),
          I.state === "loading" && (Tn(z), ie.delete(z), M.push(z)));
      }
    return (ha(M), M.length > 0);
  }
  function Zn(O, M) {
    let z = C.blockers.get(O) || Ks;
    return (ve.get(O) !== M && ve.set(O, M), z);
  }
  function Br(O) {
    (C.blockers.delete(O), ve.delete(O));
  }
  function Dn(O, M) {
    let z = C.blockers.get(O) || Ks;
    Xe(
      (z.state === "unblocked" && M.state === "blocked") ||
        (z.state === "blocked" && M.state === "blocked") ||
        (z.state === "blocked" && M.state === "proceeding") ||
        (z.state === "blocked" && M.state === "unblocked") ||
        (z.state === "proceeding" && M.state === "unblocked"),
      `Invalid blocker state transition: ${z.state} -> ${M.state}`,
    );
    let $ = new Map(C.blockers);
    ($.set(O, M), at({ blockers: $ }));
  }
  function oi({ currentLocation: O, nextLocation: M, historyAction: z }) {
    if (ve.size === 0) return;
    ve.size > 1 && zt(!1, "A router only supports one blocker at a time");
    let $ = Array.from(ve.entries()),
      [I, oe] = $[$.length - 1],
      de = C.blockers.get(I);
    if (
      !(de && de.state === "proceeding") &&
      oe({ currentLocation: O, nextLocation: M, historyAction: z })
    )
      return I;
  }
  function ma(O) {
    let M = nr(404, { pathname: O }),
      z = d || c,
      { matches: $, route: I } = Hu(z);
    return { notFoundMatches: $, route: I, error: M };
  }
  function Hi(O, M, z) {
    if (((_ = O), (E = M), (S = z || null), !x && C.navigation === Dh)) {
      x = !0;
      let $ = li(C.location, C.matches);
      $ != null && at({ restoreScrollPosition: $ });
    }
    return () => {
      ((_ = null), (E = null), (S = null));
    };
  }
  function si(O, M) {
    return (
      (S &&
        S(
          O,
          M.map(($) => cO($, C.loaderData)),
        )) ||
      O.key
    );
  }
  function pa(O, M) {
    if (_ && E) {
      let z = si(O, M);
      _[z] = E();
    }
  }
  function li(O, M) {
    if (_) {
      let z = si(O, M),
        $ = _[z];
      if (typeof $ == "number") return $;
    }
    return null;
  }
  function A(O, M, z) {
    if (e.patchRoutesOnNavigation)
      if (O) {
        if (Object.keys(O[0].params).length > 0)
          return { active: !0, matches: uc(M, z, m, !0) };
      } else return { active: !0, matches: uc(M, z, m, !0) || [] };
    return { active: !1, matches: null };
  }
  async function F(O, M, z, $) {
    if (!e.patchRoutesOnNavigation) return { type: "success", matches: O };
    let I = O;
    for (;;) {
      let oe = d == null,
        de = d || c,
        ye = l;
      try {
        await e.patchRoutesOnNavigation({
          signal: z,
          path: M,
          matches: I,
          fetcherKey: $,
          patch: (_e, Ae) => {
            z.aborted || rb(_e, Ae, de, ye, s, !1);
          },
        });
      } catch (_e) {
        return { type: "error", error: _e, partialMatches: I };
      } finally {
        oe && !z.aborted && (c = [...c]);
      }
      if (z.aborted) return { type: "aborted" };
      let Ee = Za(de, M, m);
      if (Ee) return { type: "success", matches: Ee };
      let xe = uc(de, M, m, !0);
      if (
        !xe ||
        (I.length === xe.length &&
          I.every((_e, Ae) => _e.route.id === xe[Ae].route.id))
      )
        return { type: "success", matches: null };
      I = xe;
    }
  }
  function H(O) {
    ((l = {}), (d = cl(O, s, void 0, l)));
  }
  function te(O, M, z = !1) {
    let $ = d == null;
    (rb(O, M, d || c, l, s, z), $ && ((c = [...c]), at({})));
  }
  return (
    (k = {
      get basename() {
        return m;
      },
      get future() {
        return y;
      },
      get state() {
        return C;
      },
      get routes() {
        return c;
      },
      get window() {
        return t;
      },
      initialize: Ne,
      subscribe: gt,
      enableScrollRestoration: Hi,
      navigate: Xt,
      fetch: ni,
      revalidate: Hn,
      createHref: (O) => e.history.createHref(O),
      encodeLocation: (O) => e.history.encodeLocation(O),
      getFetcher: vn,
      deleteFetcher: ii,
      dispose: qe,
      getBlocker: Zn,
      deleteBlocker: Br,
      patchRoutes: te,
      _internalFetchControllers: U,
      _internalSetRoutes: H,
      _internalSetStateDoNotUseOrYouWillBreakYourApp(O) {
        at(O);
      },
    }),
    k
  );
}
function PO(e) {
  return (
    e != null &&
    (("formData" in e && e.formData != null) ||
      ("body" in e && e.body !== void 0))
  );
}
function im(e, t, r, i, s, l) {
  let c, d;
  if (s) {
    c = [];
    for (let h of t)
      if ((c.push(h), h.route.id === s)) {
        d = h;
        break;
      }
  } else ((c = t), (d = t[t.length - 1]));
  let m = Ym(i || ".", Gm(c), ir(e.pathname, r) || e.pathname, l === "path");
  if (
    (i == null && ((m.search = e.search), (m.hash = e.hash)),
    (i == null || i === "" || i === ".") && d)
  ) {
    let h = Qm(m.search);
    if (d.route.index && !h)
      m.search = m.search ? m.search.replace(/^\?/, "?index&") : "?index";
    else if (!d.route.index && h) {
      let y = new URLSearchParams(m.search),
        g = y.getAll("index");
      (y.delete("index"),
        g.filter((_) => _).forEach((_) => y.append("index", _)));
      let v = y.toString();
      m.search = v ? `?${v}` : "";
    }
  }
  return (
    r !== "/" && (m.pathname = EO({ basename: r, pathname: m.pathname })),
    Ga(m)
  );
}
function tb(e, t, r) {
  if (!r || !PO(r)) return { path: t };
  if (r.formMethod && !eA(r.formMethod))
    return { path: t, error: nr(405, { method: r.formMethod }) };
  let i = () => ({ path: t, error: nr(400, { type: "invalid-body" }) }),
    l = (r.formMethod || "get").toUpperCase(),
    c = Pw(t);
  if (r.body !== void 0) {
    if (r.formEncType === "text/plain") {
      if (!Rn(l)) return i();
      let g =
        typeof r.body == "string"
          ? r.body
          : r.body instanceof FormData || r.body instanceof URLSearchParams
            ? Array.from(r.body.entries()).reduce(
                (v, [_, S]) => `${v}${_}=${S}
`,
                "",
              )
            : String(r.body);
      return {
        path: t,
        submission: {
          formMethod: l,
          formAction: c,
          formEncType: r.formEncType,
          formData: void 0,
          json: void 0,
          text: g,
        },
      };
    } else if (r.formEncType === "application/json") {
      if (!Rn(l)) return i();
      try {
        let g = typeof r.body == "string" ? JSON.parse(r.body) : r.body;
        return {
          path: t,
          submission: {
            formMethod: l,
            formAction: c,
            formEncType: r.formEncType,
            formData: void 0,
            json: g,
            text: void 0,
          },
        };
      } catch {
        return i();
      }
    }
  }
  Xe(
    typeof FormData == "function",
    "FormData is not available in this environment",
  );
  let d, m;
  if (r.formData) ((d = lm(r.formData)), (m = r.formData));
  else if (r.body instanceof FormData) ((d = lm(r.body)), (m = r.body));
  else if (r.body instanceof URLSearchParams) ((d = r.body), (m = lb(d)));
  else if (r.body == null) ((d = new URLSearchParams()), (m = new FormData()));
  else
    try {
      ((d = new URLSearchParams(r.body)), (m = lb(d)));
    } catch {
      return i();
    }
  let h = {
    formMethod: l,
    formAction: c,
    formEncType: (r && r.formEncType) || "application/x-www-form-urlencoded",
    formData: m,
    json: void 0,
    text: void 0,
  };
  if (Rn(h.formMethod)) return { path: t, submission: h };
  let y = Ja(t);
  return (
    e && y.search && Qm(y.search) && d.append("index", ""),
    (y.search = `?${d}`),
    { path: Ga(y), submission: h }
  );
}
function nb(e, t, r, i, s, l, c, d, m, h, y, g, v, _, S, E, x, T, P, D) {
  let B = D ? (Fn(D[1]) ? D[1].error : D[1].data) : void 0,
    k = s.createURL(l.location),
    C = s.createURL(m),
    Y;
  if (y && l.errors) {
    let Se = Object.keys(l.errors)[0];
    Y = c.findIndex((ce) => ce.route.id === Se);
  } else if (D && Fn(D[1])) {
    let Se = D[0];
    Y = c.findIndex((ce) => ce.route.id === Se) - 1;
  }
  let Q = D ? D[1].statusCode : void 0,
    me = Q && Q >= 400,
    pe = {
      currentUrl: k,
      currentParams: l.matches[0]?.params || {},
      nextUrl: C,
      nextParams: c[0].params,
      ...d,
      actionResult: B,
      actionStatus: Q,
    },
    we = c.map((Se, ce) => {
      let { route: ge } = Se,
        U = null;
      if (
        (Y != null && ce > Y
          ? (U = !1)
          : ge.lazy
            ? (U = !0)
            : ge.loader == null
              ? (U = !1)
              : y
                ? (U = om(ge, l.loaderData, l.errors))
                : FO(l.loaderData, l.matches[ce], Se) && (U = !0),
        U !== null)
      )
        return sm(r, i, e, Se, h, t, U);
      let ne = me
          ? !1
          : g ||
            k.pathname + k.search === C.pathname + C.search ||
            k.search !== C.search ||
            BO(l.matches[ce], Se),
        q = { ...pe, defaultShouldRevalidate: ne },
        ie = Rc(Se, q);
      return sm(r, i, e, Se, h, t, ie, q);
    }),
    be = [];
  return (
    S.forEach((Se, ce) => {
      if (y || !c.some((fe) => fe.route.id === Se.routeId) || _.has(ce)) return;
      let ge = l.fetchers.get(ce),
        U = ge && ge.state !== "idle" && ge.data === void 0,
        ne = Za(x, Se.path, T);
      if (!ne) {
        if (P && U) return;
        be.push({
          key: ce,
          routeId: Se.routeId,
          path: Se.path,
          matches: null,
          match: null,
          request: null,
          controller: null,
        });
        return;
      }
      if (E.has(ce)) return;
      let q = cc(ne, Se.path),
        ie = new AbortController(),
        N = Mo(s, Se.path, ie.signal),
        W = null;
      if (v.has(ce)) (v.delete(ce), (W = No(r, i, N, ne, q, h, t)));
      else if (U) g && (W = No(r, i, N, ne, q, h, t));
      else {
        let fe = { ...pe, defaultShouldRevalidate: me ? !1 : g };
        Rc(q, fe) && (W = No(r, i, N, ne, q, h, t, fe));
      }
      W &&
        be.push({
          key: ce,
          routeId: Se.routeId,
          path: Se.path,
          matches: W,
          match: q,
          request: N,
          controller: ie,
        });
    }),
    { dsMatches: we, revalidatingFetchers: be }
  );
}
function om(e, t, r) {
  if (e.lazy) return !0;
  if (!e.loader) return !1;
  let i = t != null && e.id in t,
    s = r != null && r[e.id] !== void 0;
  return !i && s
    ? !1
    : typeof e.loader == "function" && e.loader.hydrate === !0
      ? !0
      : !i && !s;
}
function FO(e, t, r) {
  let i = !t || r.route.id !== t.route.id,
    s = !e.hasOwnProperty(r.route.id);
  return i || s;
}
function BO(e, t) {
  let r = e.route.path;
  return (
    e.pathname !== t.pathname ||
    (r != null && r.endsWith("*") && e.params["*"] !== t.params["*"])
  );
}
function Rc(e, t) {
  if (e.route.shouldRevalidate) {
    let r = e.route.shouldRevalidate(t);
    if (typeof r == "boolean") return r;
  }
  return t.defaultShouldRevalidate;
}
function rb(e, t, r, i, s, l) {
  let c;
  if (e) {
    let h = i[e];
    (Xe(h, `No route found to patch children into: routeId = ${e}`),
      h.children || (h.children = []),
      (c = h.children));
  } else c = r;
  let d = [],
    m = [];
  if (
    (t.forEach((h) => {
      let y = c.find((g) => zw(h, g));
      y ? m.push({ existingRoute: y, newRoute: h }) : d.push(h);
    }),
    d.length > 0)
  ) {
    let h = cl(d, s, [e || "_", "patch", String(c?.length || "0")], i);
    c.push(...h);
  }
  if (l && m.length > 0)
    for (let h = 0; h < m.length; h++) {
      let { existingRoute: y, newRoute: g } = m[h],
        v = y,
        [_] = cl([g], s, [], {}, !0);
      Object.assign(v, {
        element: _.element ? _.element : v.element,
        errorElement: _.errorElement ? _.errorElement : v.errorElement,
        hydrateFallbackElement: _.hydrateFallbackElement
          ? _.hydrateFallbackElement
          : v.hydrateFallbackElement,
      });
    }
}
function zw(e, t) {
  return "id" in e && "id" in t && e.id === t.id
    ? !0
    : e.index === t.index &&
        e.path === t.path &&
        e.caseSensitive === t.caseSensitive
      ? (!e.children || e.children.length === 0) &&
        (!t.children || t.children.length === 0)
        ? !0
        : e.children.every((r, i) => t.children?.some((s) => zw(r, s)))
      : !1;
}
var ab = new WeakMap(),
  kw = ({ key: e, route: t, manifest: r, mapRouteProperties: i }) => {
    let s = r[t.id];
    if (
      (Xe(s, "No route found in manifest"),
      !s.lazy || typeof s.lazy != "object")
    )
      return;
    let l = s.lazy[e];
    if (!l) return;
    let c = ab.get(s);
    c || ((c = {}), ab.set(s, c));
    let d = c[e];
    if (d) return d;
    let m = (async () => {
      let h = oO(e),
        g = s[e] !== void 0 && e !== "hasErrorBoundary";
      if (h)
        (zt(
          !h,
          "Route property " +
            e +
            " is not a supported lazy route property. This property will be ignored.",
        ),
          (c[e] = Promise.resolve()));
      else if (g)
        zt(
          !1,
          `Route "${s.id}" has a static property "${e}" defined. The lazy property will be ignored.`,
        );
      else {
        let v = await l();
        v != null && (Object.assign(s, { [e]: v }), Object.assign(s, i(s)));
      }
      typeof s.lazy == "object" &&
        ((s.lazy[e] = void 0),
        Object.values(s.lazy).every((v) => v === void 0) && (s.lazy = void 0));
    })();
    return ((c[e] = m), m);
  },
  ib = new WeakMap();
function VO(e, t, r, i, s) {
  let l = r[e.id];
  if ((Xe(l, "No route found in manifest"), !e.lazy))
    return { lazyRoutePromise: void 0, lazyHandlerPromise: void 0 };
  if (typeof e.lazy == "function") {
    let y = ib.get(l);
    if (y) return { lazyRoutePromise: y, lazyHandlerPromise: y };
    let g = (async () => {
      Xe(typeof e.lazy == "function", "No lazy route function found");
      let v = await e.lazy(),
        _ = {};
      for (let S in v) {
        let E = v[S];
        if (E === void 0) continue;
        let x = lO(S),
          P = l[S] !== void 0 && S !== "hasErrorBoundary";
        x
          ? zt(
              !x,
              "Route property " +
                S +
                " is not a supported property to be returned from a lazy route function. This property will be ignored.",
            )
          : P
            ? zt(
                !P,
                `Route "${l.id}" has a static property "${S}" defined but its lazy function is also returning a value for this property. The lazy route property "${S}" will be ignored.`,
              )
            : (_[S] = E);
      }
      (Object.assign(l, _), Object.assign(l, { ...i(l), lazy: void 0 }));
    })();
    return (
      ib.set(l, g),
      g.catch(() => {}),
      { lazyRoutePromise: g, lazyHandlerPromise: g }
    );
  }
  let c = Object.keys(e.lazy),
    d = [],
    m;
  for (let y of c) {
    if (s && s.includes(y)) continue;
    let g = kw({ key: y, route: e, manifest: r, mapRouteProperties: i });
    g && (d.push(g), y === t && (m = g));
  }
  let h = d.length > 0 ? Promise.all(d).then(() => {}) : void 0;
  return (
    h?.catch(() => {}),
    m?.catch(() => {}),
    { lazyRoutePromise: h, lazyHandlerPromise: m }
  );
}
async function ob(e) {
  let t = e.matches.filter((s) => s.shouldLoad),
    r = {};
  return (
    (await Promise.all(t.map((s) => s.resolve()))).forEach((s, l) => {
      r[t[l].route.id] = s;
    }),
    r
  );
}
async function $O(e) {
  return e.matches.some((t) => t.route.middleware) ? jw(e, () => ob(e)) : ob(e);
}
function jw(e, t) {
  return HO(e, t, (i) => i, XO, r);
  function r(i, s, l) {
    if (l)
      return Promise.resolve(
        Object.assign(l.value, { [s]: { type: "error", result: i } }),
      );
    {
      let { matches: c } = e,
        d = Math.min(
          c.findIndex((h) => h.route.id === s) || 0,
          c.findIndex((h) => h.unstable_shouldCallHandler()) || 0,
        ),
        m = qa(c, c[d].route.id).route.id;
      return Promise.resolve({ [m]: { type: "error", result: i } });
    }
  }
}
async function HO(e, t, r, i, s) {
  let { matches: l, request: c, params: d, context: m } = e,
    h = l.flatMap((g) =>
      g.route.middleware ? g.route.middleware.map((v) => [g.route.id, v]) : [],
    );
  return await Lw({ request: c, params: d, context: m }, h, t, r, i, s);
}
async function Lw(e, t, r, i, s, l, c = 0) {
  let { request: d } = e;
  if (d.signal.aborted)
    throw d.signal.reason ?? new Error(`Request aborted: ${d.method} ${d.url}`);
  let m = t[c];
  if (!m) return await r();
  let [h, y] = m,
    g,
    v = async () => {
      if (g) throw new Error("You may only call `next()` once per middleware");
      try {
        return ((g = { value: await Lw(e, t, r, i, s, l, c + 1) }), g.value);
      } catch (_) {
        return ((g = { value: await l(_, h, g) }), g.value);
      }
    };
  try {
    let _ = await y(e, v),
      S = _ != null ? i(_) : void 0;
    return s(S)
      ? S
      : g
        ? (S ?? g.value)
        : ((g = { value: await v() }), g.value);
  } catch (_) {
    return await l(_, h, g);
  }
}
function Uw(e, t, r, i, s) {
  let l = kw({
      key: "middleware",
      route: i.route,
      manifest: t,
      mapRouteProperties: e,
    }),
    c = VO(i.route, Rn(r.method) ? "action" : "loader", t, e, s);
  return {
    middleware: l,
    route: c.lazyRoutePromise,
    handler: c.lazyHandlerPromise,
  };
}
function sm(e, t, r, i, s, l, c, d = null) {
  let m = !1,
    h = Uw(e, t, r, i, s);
  return {
    ...i,
    _lazyPromises: h,
    shouldLoad: c,
    unstable_shouldRevalidateArgs: d,
    unstable_shouldCallHandler(y) {
      return (
        (m = !0),
        d
          ? typeof y == "boolean"
            ? Rc(i, { ...d, defaultShouldRevalidate: y })
            : Rc(i, d)
          : c
      );
    },
    resolve(y) {
      return m || c || (y && !Rn(r.method) && (i.route.lazy || i.route.loader))
        ? ZO({
            request: r,
            match: i,
            lazyHandlerPromise: h?.handler,
            lazyRoutePromise: h?.route,
            handlerOverride: y,
            scopedContext: l,
          })
        : Promise.resolve({ type: "data", result: void 0 });
    },
  };
}
function No(e, t, r, i, s, l, c, d = null) {
  return i.map((m) =>
    m.route.id !== s.route.id
      ? {
          ...m,
          shouldLoad: !1,
          unstable_shouldRevalidateArgs: d,
          unstable_shouldCallHandler: () => !1,
          _lazyPromises: Uw(e, t, r, m, l),
          resolve: () => Promise.resolve({ type: "data", result: void 0 }),
        }
      : sm(e, t, r, m, l, c, !0, d),
  );
}
async function IO(e, t, r, i, s, l) {
  r.some((h) => h._lazyPromises?.middleware) &&
    (await Promise.all(r.map((h) => h._lazyPromises?.middleware)));
  let c = { request: t, params: r[0].params, context: s, matches: r },
    m = await e({
      ...c,
      fetcherKey: i,
      runClientMiddleware: (h) => {
        let y = c;
        return jw(y, () =>
          h({
            ...y,
            fetcherKey: i,
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
      r.flatMap((h) => [h._lazyPromises?.handler, h._lazyPromises?.route]),
    );
  } catch {}
  return m;
}
async function ZO({
  request: e,
  match: t,
  lazyHandlerPromise: r,
  lazyRoutePromise: i,
  handlerOverride: s,
  scopedContext: l,
}) {
  let c,
    d,
    m = Rn(e.method),
    h = m ? "action" : "loader",
    y = (g) => {
      let v,
        _ = new Promise((x, T) => (v = T));
      ((d = () => v()), e.signal.addEventListener("abort", d));
      let S = (x) =>
          typeof g != "function"
            ? Promise.reject(
                new Error(
                  `You cannot call the handler for a route which defines a boolean "${h}" [routeId: ${t.route.id}]`,
                ),
              )
            : g(
                { request: e, params: t.params, context: l },
                ...(x !== void 0 ? [x] : []),
              ),
        E = (async () => {
          try {
            return { type: "data", result: await (s ? s((T) => S(T)) : S()) };
          } catch (x) {
            return { type: "error", result: x };
          }
        })();
      return Promise.race([E, _]);
    };
  try {
    let g = m ? t.route.action : t.route.loader;
    if (r || i)
      if (g) {
        let v,
          [_] = await Promise.all([
            y(g).catch((S) => {
              v = S;
            }),
            r,
            i,
          ]);
        if (v !== void 0) throw v;
        c = _;
      } else {
        await r;
        let v = m ? t.route.action : t.route.loader;
        if (v) [c] = await Promise.all([y(v), i]);
        else if (h === "action") {
          let _ = new URL(e.url),
            S = _.pathname + _.search;
          throw nr(405, { method: e.method, pathname: S, routeId: t.route.id });
        } else return { type: "data", result: void 0 };
      }
    else if (g) c = await y(g);
    else {
      let v = new URL(e.url),
        _ = v.pathname + v.search;
      throw nr(404, { pathname: _ });
    }
  } catch (g) {
    return { type: "error", result: g };
  } finally {
    d && e.signal.removeEventListener("abort", d);
  }
  return c;
}
async function qO(e) {
  let t = e.headers.get("Content-Type");
  return t && /\bapplication\/json\b/.test(t)
    ? e.body == null
      ? null
      : e.json()
    : e.text();
}
async function GO(e) {
  let { result: t, type: r } = e;
  if (Fw(t)) {
    let i;
    try {
      i = await qO(t);
    } catch (s) {
      return { type: "error", error: s };
    }
    return r === "error"
      ? {
          type: "error",
          error: new xc(t.status, t.statusText, i),
          statusCode: t.status,
          headers: t.headers,
        }
      : { type: "data", data: i, statusCode: t.status, headers: t.headers };
  }
  return r === "error"
    ? db(t)
      ? t.data instanceof Error
        ? {
            type: "error",
            error: t.data,
            statusCode: t.init?.status,
            headers: t.init?.headers ? new Headers(t.init.headers) : void 0,
          }
        : {
            type: "error",
            error: new xc(t.init?.status || 500, void 0, t.data),
            statusCode: fl(t) ? t.status : void 0,
            headers: t.init?.headers ? new Headers(t.init.headers) : void 0,
          }
      : { type: "error", error: t, statusCode: fl(t) ? t.status : void 0 }
    : db(t)
      ? {
          type: "data",
          data: t.data,
          statusCode: t.init?.status,
          headers: t.init?.headers ? new Headers(t.init.headers) : void 0,
        }
      : { type: "data", data: t };
}
function YO(e, t, r, i, s) {
  let l = e.headers.get("Location");
  if (
    (Xe(
      l,
      "Redirects returned/thrown from loaders/actions must have a Location header",
    ),
    !Km(l))
  ) {
    let c = i.slice(0, i.findIndex((d) => d.route.id === r) + 1);
    ((l = im(new URL(t.url), c, s, l)), e.headers.set("Location", l));
  }
  return e;
}
function sb(e, t, r) {
  if (Km(e)) {
    let i = e,
      s = i.startsWith("//") ? new URL(t.protocol + i) : new URL(i),
      l = ir(s.pathname, r) != null;
    if (s.origin === t.origin && l) return s.pathname + s.search + s.hash;
  }
  return e;
}
function Mo(e, t, r, i) {
  let s = e.createURL(Pw(t)).toString(),
    l = { signal: r };
  if (i && Rn(i.formMethod)) {
    let { formMethod: c, formEncType: d } = i;
    ((l.method = c.toUpperCase()),
      d === "application/json"
        ? ((l.headers = new Headers({ "Content-Type": d })),
          (l.body = JSON.stringify(i.json)))
        : d === "text/plain"
          ? (l.body = i.text)
          : d === "application/x-www-form-urlencoded" && i.formData
            ? (l.body = lm(i.formData))
            : (l.body = i.formData));
  }
  return new Request(s, l);
}
function lm(e) {
  let t = new URLSearchParams();
  for (let [r, i] of e.entries())
    t.append(r, typeof i == "string" ? i : i.name);
  return t;
}
function lb(e) {
  let t = new FormData();
  for (let [r, i] of e.entries()) t.append(r, i);
  return t;
}
function KO(e, t, r, i = !1, s = !1) {
  let l = {},
    c = null,
    d,
    m = !1,
    h = {},
    y = r && Fn(r[1]) ? r[1].error : void 0;
  return (
    e.forEach((g) => {
      if (!(g.route.id in t)) return;
      let v = g.route.id,
        _ = t[v];
      if (
        (Xe(!Oi(_), "Cannot handle redirect results in processLoaderData"),
        Fn(_))
      ) {
        let S = _.error;
        if ((y !== void 0 && ((S = y), (y = void 0)), (c = c || {}), s))
          c[v] = S;
        else {
          let E = qa(e, v);
          c[E.route.id] == null && (c[E.route.id] = S);
        }
        (i || (l[v] = Nw),
          m || ((m = !0), (d = fl(_.error) ? _.error.status : 500)),
          _.headers && (h[v] = _.headers));
      } else
        ((l[v] = _.data),
          _.statusCode && _.statusCode !== 200 && !m && (d = _.statusCode),
          _.headers && (h[v] = _.headers));
    }),
    y !== void 0 && r && ((c = { [r[0]]: y }), r[2] && (l[r[2]] = void 0)),
    { loaderData: l, errors: c, statusCode: d || 200, loaderHeaders: h }
  );
}
function ub(e, t, r, i, s, l) {
  let { loaderData: c, errors: d } = KO(t, r, i);
  return (
    s
      .filter((m) => !m.matches || m.matches.some((h) => h.shouldLoad))
      .forEach((m) => {
        let { key: h, match: y, controller: g } = m;
        if (g && g.signal.aborted) return;
        let v = l[h];
        if ((Xe(v, "Did not find corresponding fetcher result"), Fn(v))) {
          let _ = qa(e.matches, y?.route.id);
          ((d && d[_.route.id]) || (d = { ...d, [_.route.id]: v.error }),
            e.fetchers.delete(h));
        } else if (Oi(v)) Xe(!1, "Unhandled fetcher revalidation redirect");
        else {
          let _ = Va(v.data);
          e.fetchers.set(h, _);
        }
      }),
    { loaderData: c, errors: d }
  );
}
function cb(e, t, r, i) {
  let s = Object.entries(t)
    .filter(([, l]) => l !== Nw)
    .reduce((l, [c, d]) => ((l[c] = d), l), {});
  for (let l of r) {
    let c = l.route.id;
    if (
      (!t.hasOwnProperty(c) &&
        e.hasOwnProperty(c) &&
        l.route.loader &&
        (s[c] = e[c]),
      i && i.hasOwnProperty(c))
    )
      break;
  }
  return s;
}
function fb(e) {
  return e
    ? Fn(e[1])
      ? { actionData: {} }
      : { actionData: { [e[0]]: e[1].data } }
    : {};
}
function qa(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((i) => i.route.id === t) + 1) : [...e])
      .reverse()
      .find((i) => i.route.hasErrorBoundary === !0) || e[0]
  );
}
function Hu(e) {
  let t =
    e.length === 1
      ? e[0]
      : e.find((r) => r.index || !r.path || r.path === "/") || {
          id: "__shim-error-route__",
        };
  return {
    matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }],
    route: t,
  };
}
function nr(
  e,
  { pathname: t, routeId: r, method: i, type: s, message: l } = {},
) {
  let c = "Unknown Server Error",
    d = "Unknown @remix-run/router error";
  return (
    e === 400
      ? ((c = "Bad Request"),
        i && t && r
          ? (d = `You made a ${i} request to "${t}" but did not provide a \`loader\` for route "${r}", so there is no way to handle the request.`)
          : s === "invalid-body" && (d = "Unable to encode submission body"))
      : e === 403
        ? ((c = "Forbidden"), (d = `Route "${r}" does not match URL "${t}"`))
        : e === 404
          ? ((c = "Not Found"), (d = `No route matches URL "${t}"`))
          : e === 405 &&
            ((c = "Method Not Allowed"),
            i && t && r
              ? (d = `You made a ${i.toUpperCase()} request to "${t}" but did not provide an \`action\` for route "${r}", so there is no way to handle the request.`)
              : i && (d = `Invalid request method "${i.toUpperCase()}"`)),
    new xc(e || 500, c, new Error(d), !0)
  );
}
function Iu(e) {
  let t = Object.entries(e);
  for (let r = t.length - 1; r >= 0; r--) {
    let [i, s] = t[r];
    if (Oi(s)) return { key: i, result: s };
  }
}
function Pw(e) {
  let t = typeof e == "string" ? Ja(e) : e;
  return Ga({ ...t, hash: "" });
}
function QO(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search
    ? !1
    : e.hash === ""
      ? t.hash !== ""
      : e.hash === t.hash
        ? !0
        : t.hash !== "";
}
function XO(e) {
  return (
    e != null &&
    typeof e == "object" &&
    Object.entries(e).every(([t, r]) => typeof t == "string" && JO(r))
  );
}
function JO(e) {
  return (
    e != null &&
    typeof e == "object" &&
    "type" in e &&
    "result" in e &&
    (e.type === "data" || e.type === "error")
  );
}
function WO(e) {
  return Fw(e.result) && NO.has(e.result.status);
}
function Fn(e) {
  return e.type === "error";
}
function Oi(e) {
  return (e && e.type) === "redirect";
}
function db(e) {
  return (
    typeof e == "object" &&
    e != null &&
    "type" in e &&
    "data" in e &&
    "init" in e &&
    e.type === "DataWithResponseInit"
  );
}
function Fw(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.headers == "object" &&
    typeof e.body < "u"
  );
}
function eA(e) {
  return MO.has(e.toUpperCase());
}
function Rn(e) {
  return TO.has(e.toUpperCase());
}
function Qm(e) {
  return new URLSearchParams(e).getAll("index").some((t) => t === "");
}
function cc(e, t) {
  let r = typeof t == "string" ? Ja(t).search : t.search;
  if (e[e.length - 1].route.index && Qm(r || "")) return e[e.length - 1];
  let i = Tw(e);
  return i[i.length - 1];
}
function hb(e) {
  let {
    formMethod: t,
    formAction: r,
    formEncType: i,
    text: s,
    formData: l,
    json: c,
  } = e;
  if (!(!t || !r || !i)) {
    if (s != null)
      return {
        formMethod: t,
        formAction: r,
        formEncType: i,
        formData: void 0,
        json: void 0,
        text: s,
      };
    if (l != null)
      return {
        formMethod: t,
        formAction: r,
        formEncType: i,
        formData: l,
        json: void 0,
        text: void 0,
      };
    if (c !== void 0)
      return {
        formMethod: t,
        formAction: r,
        formEncType: i,
        formData: void 0,
        json: c,
        text: void 0,
      };
  }
}
function Mh(e, t) {
  return t
    ? {
        state: "loading",
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text,
      }
    : {
        state: "loading",
        location: e,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      };
}
function tA(e, t) {
  return {
    state: "submitting",
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text,
  };
}
function Qs(e, t) {
  return e
    ? {
        state: "loading",
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t,
      }
    : {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: t,
      };
}
function nA(e, t) {
  return {
    state: "submitting",
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t ? t.data : void 0,
  };
}
function Va(e) {
  return {
    state: "idle",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: e,
  };
}
function rA(e, t) {
  try {
    let r = e.sessionStorage.getItem(Mw);
    if (r) {
      let i = JSON.parse(r);
      for (let [s, l] of Object.entries(i || {}))
        l && Array.isArray(l) && t.set(s, new Set(l || []));
    }
  } catch {}
}
function aA(e, t) {
  if (t.size > 0) {
    let r = {};
    for (let [i, s] of t) r[i] = [...s];
    try {
      e.sessionStorage.setItem(Mw, JSON.stringify(r));
    } catch (i) {
      zt(
        !1,
        `Failed to save applied view transitions in sessionStorage (${i}).`,
      );
    }
  }
}
function iA() {
  let e,
    t,
    r = new Promise((i, s) => {
      ((e = async (l) => {
        i(l);
        try {
          await r;
        } catch {}
      }),
        (t = async (l) => {
          s(l);
          try {
            await r;
          } catch {}
        }));
    });
  return { promise: r, resolve: e, reject: t };
}
var Ui = w.createContext(null);
Ui.displayName = "DataRouter";
var wl = w.createContext(null);
wl.displayName = "DataRouterState";
w.createContext(!1);
var Xm = w.createContext({ isTransitioning: !1 });
Xm.displayName = "ViewTransition";
var Bw = w.createContext(new Map());
Bw.displayName = "Fetchers";
var oA = w.createContext(null);
oA.displayName = "Await";
var kr = w.createContext(null);
kr.displayName = "Navigation";
var Ic = w.createContext(null);
Ic.displayName = "Location";
var pr = w.createContext({ outlet: null, matches: [], isDataRoute: !1 });
pr.displayName = "Route";
var Jm = w.createContext(null);
Jm.displayName = "RouteError";
function sA(e, { relative: t } = {}) {
  Xe(
    Sl(),
    "useHref() may be used only in the context of a <Router> component.",
  );
  let { basename: r, navigator: i } = w.useContext(kr),
    { hash: s, pathname: l, search: c } = _l(e, { relative: t }),
    d = l;
  return (
    r !== "/" && (d = l === "/" ? r : Dr([r, l])),
    i.createHref({ pathname: d, search: c, hash: s })
  );
}
function Sl() {
  return w.useContext(Ic) != null;
}
function jr() {
  return (
    Xe(
      Sl(),
      "useLocation() may be used only in the context of a <Router> component.",
    ),
    w.useContext(Ic).location
  );
}
var Vw =
  "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function $w(e) {
  w.useContext(kr).static || w.useLayoutEffect(e);
}
function Hw() {
  let { isDataRoute: e } = w.useContext(pr);
  return e ? _A() : lA();
}
function lA() {
  Xe(
    Sl(),
    "useNavigate() may be used only in the context of a <Router> component.",
  );
  let e = w.useContext(Ui),
    { basename: t, navigator: r } = w.useContext(kr),
    { matches: i } = w.useContext(pr),
    { pathname: s } = jr(),
    l = JSON.stringify(Gm(i)),
    c = w.useRef(!1);
  return (
    $w(() => {
      c.current = !0;
    }),
    w.useCallback(
      (m, h = {}) => {
        if ((zt(c.current, Vw), !c.current)) return;
        if (typeof m == "number") {
          r.go(m);
          return;
        }
        let y = Ym(m, JSON.parse(l), s, h.relative === "path");
        (e == null &&
          t !== "/" &&
          (y.pathname = y.pathname === "/" ? t : Dr([t, y.pathname])),
          (h.replace ? r.replace : r.push)(y, h.state, h));
      },
      [t, r, l, s, e],
    )
  );
}
var uA = w.createContext(null);
function cA(e) {
  let t = w.useContext(pr).outlet;
  return t && w.createElement(uA.Provider, { value: e }, t);
}
function Vj() {
  let { matches: e } = w.useContext(pr),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function _l(e, { relative: t } = {}) {
  let { matches: r } = w.useContext(pr),
    { pathname: i } = jr(),
    s = JSON.stringify(Gm(r));
  return w.useMemo(() => Ym(e, JSON.parse(s), i, t === "path"), [e, s, i, t]);
}
function fA(e, t, r, i, s) {
  Xe(
    Sl(),
    "useRoutes() may be used only in the context of a <Router> component.",
  );
  let { navigator: l } = w.useContext(kr),
    { matches: c } = w.useContext(pr),
    d = c[c.length - 1],
    m = d ? d.params : {},
    h = d ? d.pathname : "/",
    y = d ? d.pathnameBase : "/",
    g = d && d.route;
  {
    let P = (g && g.path) || "";
    Iw(
      h,
      !g || P.endsWith("*") || P.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${P}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${P}"> to <Route path="${P === "/" ? "*" : `${P}/*`}">.`,
    );
  }
  let v = jr(),
    _;
  _ = v;
  let S = _.pathname || "/",
    E = S;
  if (y !== "/") {
    let P = y.replace(/^\//, "").split("/");
    E = "/" + S.replace(/^\//, "").split("/").slice(P.length).join("/");
  }
  let x = Za(e, { pathname: E });
  return (
    zt(
      g || x != null,
      `No routes matched location "${_.pathname}${_.search}${_.hash}" `,
    ),
    zt(
      x == null ||
        x[x.length - 1].route.element !== void 0 ||
        x[x.length - 1].route.Component !== void 0 ||
        x[x.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${_.pathname}${_.search}${_.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`,
    ),
    yA(
      x &&
        x.map((P) =>
          Object.assign({}, P, {
            params: Object.assign({}, m, P.params),
            pathname: Dr([
              y,
              l.encodeLocation
                ? l.encodeLocation(P.pathname).pathname
                : P.pathname,
            ]),
            pathnameBase:
              P.pathnameBase === "/"
                ? y
                : Dr([
                    y,
                    l.encodeLocation
                      ? l.encodeLocation(P.pathnameBase).pathname
                      : P.pathnameBase,
                  ]),
          }),
        ),
      c,
      r,
      i,
      s,
    )
  );
}
function dA() {
  let e = SA(),
    t = fl(e)
      ? `${e.status} ${e.statusText}`
      : e instanceof Error
        ? e.message
        : JSON.stringify(e),
    r = e instanceof Error ? e.stack : null,
    i = "rgba(200,200,200, 0.5)",
    s = { padding: "0.5rem", backgroundColor: i },
    l = { padding: "2px 4px", backgroundColor: i },
    c = null;
  return (
    console.error("Error handled by React Router default ErrorBoundary:", e),
    (c = w.createElement(
      w.Fragment,
      null,
      w.createElement("p", null, "💿 Hey developer 👋"),
      w.createElement(
        "p",
        null,
        "You can provide a way better UX than this when your app throws errors by providing your own ",
        w.createElement("code", { style: l }, "ErrorBoundary"),
        " or",
        " ",
        w.createElement("code", { style: l }, "errorElement"),
        " prop on your route.",
      ),
    )),
    w.createElement(
      w.Fragment,
      null,
      w.createElement("h2", null, "Unexpected Application Error!"),
      w.createElement("h3", { style: { fontStyle: "italic" } }, t),
      r ? w.createElement("pre", { style: s }, r) : null,
      c,
    )
  );
}
var hA = w.createElement(dA, null),
  mA = class extends w.Component {
    constructor(e) {
      (super(e),
        (this.state = {
          location: e.location,
          revalidation: e.revalidation,
          error: e.error,
        }));
    }
    static getDerivedStateFromError(e) {
      return { error: e };
    }
    static getDerivedStateFromProps(e, t) {
      return t.location !== e.location ||
        (t.revalidation !== "idle" && e.revalidation === "idle")
        ? { error: e.error, location: e.location, revalidation: e.revalidation }
        : {
            error: e.error !== void 0 ? e.error : t.error,
            location: t.location,
            revalidation: e.revalidation || t.revalidation,
          };
    }
    componentDidCatch(e, t) {
      this.props.unstable_onError
        ? this.props.unstable_onError(e, t)
        : console.error(
            "React Router caught the following error during render",
            e,
          );
    }
    render() {
      return this.state.error !== void 0
        ? w.createElement(
            pr.Provider,
            { value: this.props.routeContext },
            w.createElement(Jm.Provider, {
              value: this.state.error,
              children: this.props.component,
            }),
          )
        : this.props.children;
    }
  };
function pA({ routeContext: e, match: t, children: r }) {
  let i = w.useContext(Ui);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (t.route.errorElement || t.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = t.route.id),
    w.createElement(pr.Provider, { value: e }, r)
  );
}
function yA(e, t = [], r = null, i = null, s = null) {
  if (e == null) {
    if (!r) return null;
    if (r.errors) e = r.matches;
    else if (t.length === 0 && !r.initialized && r.matches.length > 0)
      e = r.matches;
    else return null;
  }
  let l = e,
    c = r?.errors;
  if (c != null) {
    let h = l.findIndex((y) => y.route.id && c?.[y.route.id] !== void 0);
    (Xe(
      h >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`,
    ),
      (l = l.slice(0, Math.min(l.length, h + 1))));
  }
  let d = !1,
    m = -1;
  if (r)
    for (let h = 0; h < l.length; h++) {
      let y = l[h];
      if (
        ((y.route.HydrateFallback || y.route.hydrateFallbackElement) && (m = h),
        y.route.id)
      ) {
        let { loaderData: g, errors: v } = r,
          _ =
            y.route.loader &&
            !g.hasOwnProperty(y.route.id) &&
            (!v || v[y.route.id] === void 0);
        if (y.route.lazy || _) {
          ((d = !0), m >= 0 ? (l = l.slice(0, m + 1)) : (l = [l[0]]));
          break;
        }
      }
    }
  return l.reduceRight((h, y, g) => {
    let v,
      _ = !1,
      S = null,
      E = null;
    r &&
      ((v = c && y.route.id ? c[y.route.id] : void 0),
      (S = y.route.errorElement || hA),
      d &&
        (m < 0 && g === 0
          ? (Iw(
              "route-fallback",
              !1,
              "No `HydrateFallback` element provided to render during initial hydration",
            ),
            (_ = !0),
            (E = null))
          : m === g &&
            ((_ = !0), (E = y.route.hydrateFallbackElement || null))));
    let x = t.concat(l.slice(0, g + 1)),
      T = () => {
        let P;
        return (
          v
            ? (P = S)
            : _
              ? (P = E)
              : y.route.Component
                ? (P = w.createElement(y.route.Component, null))
                : y.route.element
                  ? (P = y.route.element)
                  : (P = h),
          w.createElement(pA, {
            match: y,
            routeContext: { outlet: h, matches: x, isDataRoute: r != null },
            children: P,
          })
        );
      };
    return r && (y.route.ErrorBoundary || y.route.errorElement || g === 0)
      ? w.createElement(mA, {
          location: r.location,
          revalidation: r.revalidation,
          component: S,
          error: v,
          children: T(),
          routeContext: { outlet: null, matches: x, isDataRoute: !0 },
          unstable_onError: i,
        })
      : T();
  }, null);
}
function Wm(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function gA(e) {
  let t = w.useContext(Ui);
  return (Xe(t, Wm(e)), t);
}
function vA(e) {
  let t = w.useContext(wl);
  return (Xe(t, Wm(e)), t);
}
function bA(e) {
  let t = w.useContext(pr);
  return (Xe(t, Wm(e)), t);
}
function ep(e) {
  let t = bA(e),
    r = t.matches[t.matches.length - 1];
  return (
    Xe(
      r.route.id,
      `${e} can only be used on routes that contain a unique "id"`,
    ),
    r.route.id
  );
}
function wA() {
  return ep("useRouteId");
}
function SA() {
  let e = w.useContext(Jm),
    t = vA("useRouteError"),
    r = ep("useRouteError");
  return e !== void 0 ? e : t.errors?.[r];
}
function _A() {
  let { router: e } = gA("useNavigate"),
    t = ep("useNavigate"),
    r = w.useRef(!1);
  return (
    $w(() => {
      r.current = !0;
    }),
    w.useCallback(
      async (s, l = {}) => {
        (zt(r.current, Vw),
          r.current &&
            (typeof s == "number"
              ? e.navigate(s)
              : await e.navigate(s, { fromRouteId: t, ...l })));
      },
      [e, t],
    )
  );
}
var mb = {};
function Iw(e, t, r) {
  !t && !mb[e] && ((mb[e] = !0), zt(!1, r));
}
var pb = {};
function yb(e, t) {
  !e && !pb[t] && ((pb[t] = !0), console.warn(t));
}
function EA(e) {
  let t = {
    hasErrorBoundary:
      e.hasErrorBoundary || e.ErrorBoundary != null || e.errorElement != null,
  };
  return (
    e.Component &&
      (e.element &&
        zt(
          !1,
          "You should not include both `Component` and `element` on your route - `Component` will be used.",
        ),
      Object.assign(t, {
        element: w.createElement(e.Component),
        Component: void 0,
      })),
    e.HydrateFallback &&
      (e.hydrateFallbackElement &&
        zt(
          !1,
          "You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used.",
        ),
      Object.assign(t, {
        hydrateFallbackElement: w.createElement(e.HydrateFallback),
        HydrateFallback: void 0,
      })),
    e.ErrorBoundary &&
      (e.errorElement &&
        zt(
          !1,
          "You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used.",
        ),
      Object.assign(t, {
        errorElement: w.createElement(e.ErrorBoundary),
        ErrorBoundary: void 0,
      })),
    t
  );
}
var xA = ["HydrateFallback", "hydrateFallbackElement"],
  RA = class {
    constructor() {
      ((this.status = "pending"),
        (this.promise = new Promise((e, t) => {
          ((this.resolve = (r) => {
            this.status === "pending" && ((this.status = "resolved"), e(r));
          }),
            (this.reject = (r) => {
              this.status === "pending" && ((this.status = "rejected"), t(r));
            }));
        })));
    }
  };
function OA({ router: e, flushSync: t, unstable_onError: r }) {
  let [i, s] = w.useState(e.state),
    [l, c] = w.useState(),
    [d, m] = w.useState({ isTransitioning: !1 }),
    [h, y] = w.useState(),
    [g, v] = w.useState(),
    [_, S] = w.useState(),
    E = w.useRef(new Map()),
    x = w.useCallback(
      (k) => {
        s(
          (C) => (
            k.errors &&
              r &&
              Object.entries(k.errors).forEach(([Y, Q]) => {
                C.errors?.[Y] !== Q && r(Q);
              }),
            k
          ),
        );
      },
      [r],
    ),
    T = w.useCallback(
      (k, { deletedFetchers: C, flushSync: Y, viewTransitionOpts: Q }) => {
        (k.fetchers.forEach((pe, we) => {
          pe.data !== void 0 && E.current.set(we, pe.data);
        }),
          C.forEach((pe) => E.current.delete(pe)),
          yb(
            Y === !1 || t != null,
            'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.',
          ));
        let me =
          e.window != null &&
          e.window.document != null &&
          typeof e.window.document.startViewTransition == "function";
        if (
          (yb(
            Q == null || me,
            "You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available.",
          ),
          !Q || !me)
        ) {
          t && Y ? t(() => x(k)) : w.startTransition(() => x(k));
          return;
        }
        if (t && Y) {
          t(() => {
            (g && (h && h.resolve(), g.skipTransition()),
              m({
                isTransitioning: !0,
                flushSync: !0,
                currentLocation: Q.currentLocation,
                nextLocation: Q.nextLocation,
              }));
          });
          let pe = e.window.document.startViewTransition(() => {
            t(() => x(k));
          });
          (pe.finished.finally(() => {
            t(() => {
              (y(void 0), v(void 0), c(void 0), m({ isTransitioning: !1 }));
            });
          }),
            t(() => v(pe)));
          return;
        }
        g
          ? (h && h.resolve(),
            g.skipTransition(),
            S({
              state: k,
              currentLocation: Q.currentLocation,
              nextLocation: Q.nextLocation,
            }))
          : (c(k),
            m({
              isTransitioning: !0,
              flushSync: !1,
              currentLocation: Q.currentLocation,
              nextLocation: Q.nextLocation,
            }));
      },
      [e.window, t, g, h, x],
    );
  (w.useLayoutEffect(() => e.subscribe(T), [e, T]),
    w.useEffect(() => {
      d.isTransitioning && !d.flushSync && y(new RA());
    }, [d]),
    w.useEffect(() => {
      if (h && l && e.window) {
        let k = l,
          C = h.promise,
          Y = e.window.document.startViewTransition(async () => {
            (w.startTransition(() => x(k)), await C);
          });
        (Y.finished.finally(() => {
          (y(void 0), v(void 0), c(void 0), m({ isTransitioning: !1 }));
        }),
          v(Y));
      }
    }, [l, h, e.window, x]),
    w.useEffect(() => {
      h && l && i.location.key === l.location.key && h.resolve();
    }, [h, g, i.location, l]),
    w.useEffect(() => {
      !d.isTransitioning &&
        _ &&
        (c(_.state),
        m({
          isTransitioning: !0,
          flushSync: !1,
          currentLocation: _.currentLocation,
          nextLocation: _.nextLocation,
        }),
        S(void 0));
    }, [d.isTransitioning, _]));
  let P = w.useMemo(
      () => ({
        createHref: e.createHref,
        encodeLocation: e.encodeLocation,
        go: (k) => e.navigate(k),
        push: (k, C, Y) =>
          e.navigate(k, {
            state: C,
            preventScrollReset: Y?.preventScrollReset,
          }),
        replace: (k, C, Y) =>
          e.navigate(k, {
            replace: !0,
            state: C,
            preventScrollReset: Y?.preventScrollReset,
          }),
      }),
      [e],
    ),
    D = e.basename || "/",
    B = w.useMemo(
      () => ({
        router: e,
        navigator: P,
        static: !1,
        basename: D,
        unstable_onError: r,
      }),
      [e, P, D, r],
    );
  return w.createElement(
    w.Fragment,
    null,
    w.createElement(
      Ui.Provider,
      { value: B },
      w.createElement(
        wl.Provider,
        { value: i },
        w.createElement(
          Bw.Provider,
          { value: E.current },
          w.createElement(
            Xm.Provider,
            { value: d },
            w.createElement(
              DA,
              {
                basename: D,
                location: i.location,
                navigationType: i.historyAction,
                navigator: P,
              },
              w.createElement(AA, {
                routes: e.routes,
                future: e.future,
                state: i,
                unstable_onError: r,
              }),
            ),
          ),
        ),
      ),
    ),
    null,
  );
}
var AA = w.memo(CA);
function CA({ routes: e, future: t, state: r, unstable_onError: i }) {
  return fA(e, void 0, r, i, t);
}
function TA(e) {
  return cA(e.context);
}
function DA({
  basename: e = "/",
  children: t = null,
  location: r,
  navigationType: i = "POP",
  navigator: s,
  static: l = !1,
}) {
  Xe(
    !Sl(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.",
  );
  let c = e.replace(/^\/*/, "/"),
    d = w.useMemo(
      () => ({ basename: c, navigator: s, static: l, future: {} }),
      [c, s, l],
    );
  typeof r == "string" && (r = Ja(r));
  let {
      pathname: m = "/",
      search: h = "",
      hash: y = "",
      state: g = null,
      key: v = "default",
    } = r,
    _ = w.useMemo(() => {
      let S = ir(m, c);
      return S == null
        ? null
        : {
            location: { pathname: S, search: h, hash: y, state: g, key: v },
            navigationType: i,
          };
    }, [c, m, h, y, g, v, i]);
  return (
    zt(
      _ != null,
      `<Router basename="${c}"> is not able to match the URL "${m}${h}${y}" because it does not start with the basename, so the <Router> won't render anything.`,
    ),
    _ == null
      ? null
      : w.createElement(
          kr.Provider,
          { value: d },
          w.createElement(Ic.Provider, { children: t, value: _ }),
        )
  );
}
var fc = "get",
  dc = "application/x-www-form-urlencoded";
function Zc(e) {
  return e != null && typeof e.tagName == "string";
}
function MA(e) {
  return Zc(e) && e.tagName.toLowerCase() === "button";
}
function NA(e) {
  return Zc(e) && e.tagName.toLowerCase() === "form";
}
function zA(e) {
  return Zc(e) && e.tagName.toLowerCase() === "input";
}
function kA(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function jA(e, t) {
  return e.button === 0 && (!t || t === "_self") && !kA(e);
}
function um(e = "") {
  return new URLSearchParams(
    typeof e == "string" || Array.isArray(e) || e instanceof URLSearchParams
      ? e
      : Object.keys(e).reduce((t, r) => {
          let i = e[r];
          return t.concat(Array.isArray(i) ? i.map((s) => [r, s]) : [[r, i]]);
        }, []),
  );
}
function LA(e, t) {
  let r = um(e);
  return (
    t &&
      t.forEach((i, s) => {
        r.has(s) ||
          t.getAll(s).forEach((l) => {
            r.append(s, l);
          });
      }),
    r
  );
}
var Zu = null;
function UA() {
  if (Zu === null)
    try {
      (new FormData(document.createElement("form"), 0), (Zu = !1));
    } catch {
      Zu = !0;
    }
  return Zu;
}
var PA = new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain",
]);
function Nh(e) {
  return e != null && !PA.has(e)
    ? (zt(
        !1,
        `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${dc}"`,
      ),
      null)
    : e;
}
function FA(e, t) {
  let r, i, s, l, c;
  if (NA(e)) {
    let d = e.getAttribute("action");
    ((i = d ? ir(d, t) : null),
      (r = e.getAttribute("method") || fc),
      (s = Nh(e.getAttribute("enctype")) || dc),
      (l = new FormData(e)));
  } else if (MA(e) || (zA(e) && (e.type === "submit" || e.type === "image"))) {
    let d = e.form;
    if (d == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>',
      );
    let m = e.getAttribute("formaction") || d.getAttribute("action");
    if (
      ((i = m ? ir(m, t) : null),
      (r = e.getAttribute("formmethod") || d.getAttribute("method") || fc),
      (s =
        Nh(e.getAttribute("formenctype")) ||
        Nh(d.getAttribute("enctype")) ||
        dc),
      (l = new FormData(d, e)),
      !UA())
    ) {
      let { name: h, type: y, value: g } = e;
      if (y === "image") {
        let v = h ? `${h}.` : "";
        (l.append(`${v}x`, "0"), l.append(`${v}y`, "0"));
      } else h && l.append(h, g);
    }
  } else {
    if (Zc(e))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">',
      );
    ((r = fc), (i = null), (s = dc), (c = e));
  }
  return (
    l && s === "text/plain" && ((c = l), (l = void 0)),
    { action: i, method: r.toLowerCase(), encType: s, formData: l, body: c }
  );
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function tp(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function BA(e, t, r) {
  let i =
    typeof e == "string"
      ? new URL(
          e,
          typeof window > "u"
            ? "server://singlefetch/"
            : window.location.origin,
        )
      : e;
  return (
    i.pathname === "/"
      ? (i.pathname = `_root.${r}`)
      : t && ir(i.pathname, t) === "/"
        ? (i.pathname = `${t.replace(/\/$/, "")}/_root.${r}`)
        : (i.pathname = `${i.pathname.replace(/\/$/, "")}.${r}`),
    i
  );
}
async function VA(e, t) {
  if (e.id in t) return t[e.id];
  try {
    let r = await import(e.module);
    return ((t[e.id] = r), r);
  } catch (r) {
    return (
      console.error(
        `Error loading route module \`${e.module}\`, reloading page...`,
      ),
      console.error(r),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function $A(e) {
  return e == null
    ? !1
    : e.href == null
      ? e.rel === "preload" &&
        typeof e.imageSrcSet == "string" &&
        typeof e.imageSizes == "string"
      : typeof e.rel == "string" && typeof e.href == "string";
}
async function HA(e, t, r) {
  let i = await Promise.all(
    e.map(async (s) => {
      let l = t.routes[s.route.id];
      if (l) {
        let c = await VA(l, r);
        return c.links ? c.links() : [];
      }
      return [];
    }),
  );
  return GA(
    i
      .flat(1)
      .filter($A)
      .filter((s) => s.rel === "stylesheet" || s.rel === "preload")
      .map((s) =>
        s.rel === "stylesheet"
          ? { ...s, rel: "prefetch", as: "style" }
          : { ...s, rel: "prefetch" },
      ),
  );
}
function gb(e, t, r, i, s, l) {
  let c = (m, h) => (r[h] ? m.route.id !== r[h].route.id : !0),
    d = (m, h) =>
      r[h].pathname !== m.pathname ||
      (r[h].route.path?.endsWith("*") && r[h].params["*"] !== m.params["*"]);
  return l === "assets"
    ? t.filter((m, h) => c(m, h) || d(m, h))
    : l === "data"
      ? t.filter((m, h) => {
          let y = i.routes[m.route.id];
          if (!y || !y.hasLoader) return !1;
          if (c(m, h) || d(m, h)) return !0;
          if (m.route.shouldRevalidate) {
            let g = m.route.shouldRevalidate({
              currentUrl: new URL(
                s.pathname + s.search + s.hash,
                window.origin,
              ),
              currentParams: r[0]?.params || {},
              nextUrl: new URL(e, window.origin),
              nextParams: m.params,
              defaultShouldRevalidate: !0,
            });
            if (typeof g == "boolean") return g;
          }
          return !0;
        })
      : [];
}
function IA(e, t, { includeHydrateFallback: r } = {}) {
  return ZA(
    e
      .map((i) => {
        let s = t.routes[i.route.id];
        if (!s) return [];
        let l = [s.module];
        return (
          s.clientActionModule && (l = l.concat(s.clientActionModule)),
          s.clientLoaderModule && (l = l.concat(s.clientLoaderModule)),
          r &&
            s.hydrateFallbackModule &&
            (l = l.concat(s.hydrateFallbackModule)),
          s.imports && (l = l.concat(s.imports)),
          l
        );
      })
      .flat(1),
  );
}
function ZA(e) {
  return [...new Set(e)];
}
function qA(e) {
  let t = {},
    r = Object.keys(e).sort();
  for (let i of r) t[i] = e[i];
  return t;
}
function GA(e, t) {
  let r = new Set();
  return (
    new Set(t),
    e.reduce((i, s) => {
      let l = JSON.stringify(qA(s));
      return (r.has(l) || (r.add(l), i.push({ key: l, link: s })), i);
    }, [])
  );
}
function Zw() {
  let e = w.useContext(Ui);
  return (
    tp(
      e,
      "You must render this element inside a <DataRouterContext.Provider> element",
    ),
    e
  );
}
function YA() {
  let e = w.useContext(wl);
  return (
    tp(
      e,
      "You must render this element inside a <DataRouterStateContext.Provider> element",
    ),
    e
  );
}
var np = w.createContext(void 0);
np.displayName = "FrameworkContext";
function qw() {
  let e = w.useContext(np);
  return (
    tp(e, "You must render this element inside a <HydratedRouter> element"),
    e
  );
}
function KA(e, t) {
  let r = w.useContext(np),
    [i, s] = w.useState(!1),
    [l, c] = w.useState(!1),
    {
      onFocus: d,
      onBlur: m,
      onMouseEnter: h,
      onMouseLeave: y,
      onTouchStart: g,
    } = t,
    v = w.useRef(null);
  (w.useEffect(() => {
    if ((e === "render" && c(!0), e === "viewport")) {
      let E = (T) => {
          T.forEach((P) => {
            c(P.isIntersecting);
          });
        },
        x = new IntersectionObserver(E, { threshold: 0.5 });
      return (
        v.current && x.observe(v.current),
        () => {
          x.disconnect();
        }
      );
    }
  }, [e]),
    w.useEffect(() => {
      if (i) {
        let E = setTimeout(() => {
          c(!0);
        }, 100);
        return () => {
          clearTimeout(E);
        };
      }
    }, [i]));
  let _ = () => {
      s(!0);
    },
    S = () => {
      (s(!1), c(!1));
    };
  return r
    ? e !== "intent"
      ? [l, v, {}]
      : [
          l,
          v,
          {
            onFocus: Xs(d, _),
            onBlur: Xs(m, S),
            onMouseEnter: Xs(h, _),
            onMouseLeave: Xs(y, S),
            onTouchStart: Xs(g, _),
          },
        ]
    : [!1, v, {}];
}
function Xs(e, t) {
  return (r) => {
    (e && e(r), r.defaultPrevented || t(r));
  };
}
function QA({ page: e, ...t }) {
  let { router: r } = Zw(),
    i = w.useMemo(() => Za(r.routes, e, r.basename), [r.routes, e, r.basename]);
  return i ? w.createElement(JA, { page: e, matches: i, ...t }) : null;
}
function XA(e) {
  let { manifest: t, routeModules: r } = qw(),
    [i, s] = w.useState([]);
  return (
    w.useEffect(() => {
      let l = !1;
      return (
        HA(e, t, r).then((c) => {
          l || s(c);
        }),
        () => {
          l = !0;
        }
      );
    }, [e, t, r]),
    i
  );
}
function JA({ page: e, matches: t, ...r }) {
  let i = jr(),
    { manifest: s, routeModules: l } = qw(),
    { basename: c } = Zw(),
    { loaderData: d, matches: m } = YA(),
    h = w.useMemo(() => gb(e, t, m, s, i, "data"), [e, t, m, s, i]),
    y = w.useMemo(() => gb(e, t, m, s, i, "assets"), [e, t, m, s, i]),
    g = w.useMemo(() => {
      if (e === i.pathname + i.search + i.hash) return [];
      let S = new Set(),
        E = !1;
      if (
        (t.forEach((T) => {
          let P = s.routes[T.route.id];
          !P ||
            !P.hasLoader ||
            ((!h.some((D) => D.route.id === T.route.id) &&
              T.route.id in d &&
              l[T.route.id]?.shouldRevalidate) ||
            P.hasClientLoader
              ? (E = !0)
              : S.add(T.route.id));
        }),
        S.size === 0)
      )
        return [];
      let x = BA(e, c, "data");
      return (
        E &&
          S.size > 0 &&
          x.searchParams.set(
            "_routes",
            t
              .filter((T) => S.has(T.route.id))
              .map((T) => T.route.id)
              .join(","),
          ),
        [x.pathname + x.search]
      );
    }, [c, d, i, s, h, t, e, l]),
    v = w.useMemo(() => IA(y, s), [y, s]),
    _ = XA(y);
  return w.createElement(
    w.Fragment,
    null,
    g.map((S) =>
      w.createElement("link", {
        key: S,
        rel: "prefetch",
        as: "fetch",
        href: S,
        ...r,
      }),
    ),
    v.map((S) =>
      w.createElement("link", { key: S, rel: "modulepreload", href: S, ...r }),
    ),
    _.map(({ key: S, link: E }) =>
      w.createElement("link", { key: S, nonce: r.nonce, ...E }),
    ),
  );
}
function WA(...e) {
  return (t) => {
    e.forEach((r) => {
      typeof r == "function" ? r(t) : r != null && (r.current = t);
    });
  };
}
var Gw =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
try {
  Gw && (window.__reactRouterVersion = "7.9.1");
} catch {}
function eC(e, t) {
  return UO({
    basename: t?.basename,
    getContext: t?.getContext,
    future: t?.future,
    history: nO({ window: t?.window }),
    hydrationData: tC(),
    routes: e,
    mapRouteProperties: EA,
    hydrationRouteProperties: xA,
    dataStrategy: t?.dataStrategy,
    patchRoutesOnNavigation: t?.patchRoutesOnNavigation,
    window: t?.window,
  }).initialize();
}
function tC() {
  let e = window?.__staticRouterHydrationData;
  return (e && e.errors && (e = { ...e, errors: nC(e.errors) }), e);
}
function nC(e) {
  if (!e) return null;
  let t = Object.entries(e),
    r = {};
  for (let [i, s] of t)
    if (s && s.__type === "RouteErrorResponse")
      r[i] = new xc(s.status, s.statusText, s.data, s.internal === !0);
    else if (s && s.__type === "Error") {
      if (s.__subType) {
        let l = window[s.__subType];
        if (typeof l == "function")
          try {
            let c = new l(s.message);
            ((c.stack = ""), (r[i] = c));
          } catch {}
      }
      if (r[i] == null) {
        let l = new Error(s.message);
        ((l.stack = ""), (r[i] = l));
      }
    } else r[i] = s;
  return r;
}
var Yw = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Ai = w.forwardRef(function (
    {
      onClick: t,
      discover: r = "render",
      prefetch: i = "none",
      relative: s,
      reloadDocument: l,
      replace: c,
      state: d,
      target: m,
      to: h,
      preventScrollReset: y,
      viewTransition: g,
      ...v
    },
    _,
  ) {
    let { basename: S } = w.useContext(kr),
      E = typeof h == "string" && Yw.test(h),
      x,
      T = !1;
    if (typeof h == "string" && E && ((x = h), Gw))
      try {
        let me = new URL(window.location.href),
          pe = h.startsWith("//") ? new URL(me.protocol + h) : new URL(h),
          we = ir(pe.pathname, S);
        pe.origin === me.origin && we != null
          ? (h = we + pe.search + pe.hash)
          : (T = !0);
      } catch {
        zt(
          !1,
          `<Link to="${h}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`,
        );
      }
    let P = sA(h, { relative: s }),
      [D, B, k] = KA(i, v),
      C = oC(h, {
        replace: c,
        state: d,
        target: m,
        preventScrollReset: y,
        relative: s,
        viewTransition: g,
      });
    function Y(me) {
      (t && t(me), me.defaultPrevented || C(me));
    }
    let Q = w.createElement("a", {
      ...v,
      ...k,
      href: x || P,
      onClick: T || l ? t : Y,
      ref: WA(_, B),
      target: m,
      "data-discover": !E && r === "render" ? "true" : void 0,
    });
    return D && !E
      ? w.createElement(w.Fragment, null, Q, w.createElement(QA, { page: P }))
      : Q;
  });
Ai.displayName = "Link";
var rC = w.forwardRef(function (
  {
    "aria-current": t = "page",
    caseSensitive: r = !1,
    className: i = "",
    end: s = !1,
    style: l,
    to: c,
    viewTransition: d,
    children: m,
    ...h
  },
  y,
) {
  let g = _l(c, { relative: h.relative }),
    v = jr(),
    _ = w.useContext(wl),
    { navigator: S, basename: E } = w.useContext(kr),
    x = _ != null && fC(g) && d === !0,
    T = S.encodeLocation ? S.encodeLocation(g).pathname : g.pathname,
    P = v.pathname,
    D =
      _ && _.navigation && _.navigation.location
        ? _.navigation.location.pathname
        : null;
  (r ||
    ((P = P.toLowerCase()),
    (D = D ? D.toLowerCase() : null),
    (T = T.toLowerCase())),
    D && E && (D = ir(D, E) || D));
  const B = T !== "/" && T.endsWith("/") ? T.length - 1 : T.length;
  let k = P === T || (!s && P.startsWith(T) && P.charAt(B) === "/"),
    C =
      D != null &&
      (D === T || (!s && D.startsWith(T) && D.charAt(T.length) === "/")),
    Y = { isActive: k, isPending: C, isTransitioning: x },
    Q = k ? t : void 0,
    me;
  typeof i == "function"
    ? (me = i(Y))
    : (me = [
        i,
        k ? "active" : null,
        C ? "pending" : null,
        x ? "transitioning" : null,
      ]
        .filter(Boolean)
        .join(" "));
  let pe = typeof l == "function" ? l(Y) : l;
  return w.createElement(
    Ai,
    {
      ...h,
      "aria-current": Q,
      className: me,
      ref: y,
      style: pe,
      to: c,
      viewTransition: d,
    },
    typeof m == "function" ? m(Y) : m,
  );
});
rC.displayName = "NavLink";
var aC = w.forwardRef(
  (
    {
      discover: e = "render",
      fetcherKey: t,
      navigate: r,
      reloadDocument: i,
      replace: s,
      state: l,
      method: c = fc,
      action: d,
      onSubmit: m,
      relative: h,
      preventScrollReset: y,
      viewTransition: g,
      ...v
    },
    _,
  ) => {
    let S = uC(),
      E = cC(d, { relative: h }),
      x = c.toLowerCase() === "get" ? "get" : "post",
      T = typeof d == "string" && Yw.test(d),
      P = (D) => {
        if ((m && m(D), D.defaultPrevented)) return;
        D.preventDefault();
        let B = D.nativeEvent.submitter,
          k = B?.getAttribute("formmethod") || c;
        S(B || D.currentTarget, {
          fetcherKey: t,
          method: k,
          navigate: r,
          replace: s,
          state: l,
          relative: h,
          preventScrollReset: y,
          viewTransition: g,
        });
      };
    return w.createElement("form", {
      ref: _,
      method: x,
      action: E,
      onSubmit: i ? m : P,
      ...v,
      "data-discover": !T && e === "render" ? "true" : void 0,
    });
  },
);
aC.displayName = "Form";
function iC(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Kw(e) {
  let t = w.useContext(Ui);
  return (Xe(t, iC(e)), t);
}
function oC(
  e,
  {
    target: t,
    replace: r,
    state: i,
    preventScrollReset: s,
    relative: l,
    viewTransition: c,
  } = {},
) {
  let d = Hw(),
    m = jr(),
    h = _l(e, { relative: l });
  return w.useCallback(
    (y) => {
      if (jA(y, t)) {
        y.preventDefault();
        let g = r !== void 0 ? r : Ga(m) === Ga(h);
        d(e, {
          replace: g,
          state: i,
          preventScrollReset: s,
          relative: l,
          viewTransition: c,
        });
      }
    },
    [m, d, h, r, i, t, e, s, l, c],
  );
}
function $j(e) {
  zt(
    typeof URLSearchParams < "u",
    "You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.",
  );
  let t = w.useRef(um(e)),
    r = w.useRef(!1),
    i = jr(),
    s = w.useMemo(() => LA(i.search, r.current ? null : t.current), [i.search]),
    l = Hw(),
    c = w.useCallback(
      (d, m) => {
        const h = um(typeof d == "function" ? d(new URLSearchParams(s)) : d);
        ((r.current = !0), l("?" + h, m));
      },
      [l, s],
    );
  return [s, c];
}
var sC = 0,
  lC = () => `__${String(++sC)}__`;
function uC() {
  let { router: e } = Kw("useSubmit"),
    { basename: t } = w.useContext(kr),
    r = wA();
  return w.useCallback(
    async (i, s = {}) => {
      let { action: l, method: c, encType: d, formData: m, body: h } = FA(i, t);
      if (s.navigate === !1) {
        let y = s.fetcherKey || lC();
        await e.fetch(y, r, s.action || l, {
          preventScrollReset: s.preventScrollReset,
          formData: m,
          body: h,
          formMethod: s.method || c,
          formEncType: s.encType || d,
          flushSync: s.flushSync,
        });
      } else
        await e.navigate(s.action || l, {
          preventScrollReset: s.preventScrollReset,
          formData: m,
          body: h,
          formMethod: s.method || c,
          formEncType: s.encType || d,
          replace: s.replace,
          state: s.state,
          fromRouteId: r,
          flushSync: s.flushSync,
          viewTransition: s.viewTransition,
        });
    },
    [e, t, r],
  );
}
function cC(e, { relative: t } = {}) {
  let { basename: r } = w.useContext(kr),
    i = w.useContext(pr);
  Xe(i, "useFormAction must be used inside a RouteContext");
  let [s] = i.matches.slice(-1),
    l = { ..._l(e || ".", { relative: t }) },
    c = jr();
  if (e == null) {
    l.search = c.search;
    let d = new URLSearchParams(l.search),
      m = d.getAll("index");
    if (m.some((y) => y === "")) {
      (d.delete("index"),
        m.filter((g) => g).forEach((g) => d.append("index", g)));
      let y = d.toString();
      l.search = y ? `?${y}` : "";
    }
  }
  return (
    (!e || e === ".") &&
      s.route.index &&
      (l.search = l.search ? l.search.replace(/^\?/, "?index&") : "?index"),
    r !== "/" && (l.pathname = l.pathname === "/" ? r : Dr([r, l.pathname])),
    Ga(l)
  );
}
function fC(e, { relative: t } = {}) {
  let r = w.useContext(Xm);
  Xe(
    r != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?",
  );
  let { basename: i } = Kw("useViewTransitionState"),
    s = _l(e, { relative: t });
  if (!r.isTransitioning) return !1;
  let l = ir(r.currentLocation.pathname, i) || r.currentLocation.pathname,
    c = ir(r.nextLocation.pathname, i) || r.nextLocation.pathname;
  return Ec(s.pathname, c) != null || Ec(s.pathname, l) != null;
}
var qc = Ew();
const dC = _w(qc);
function hC(e) {
  return w.createElement(OA, { flushSync: qc.flushSync, ...e });
}
const mC = "modulepreload",
  pC = function (e) {
    return "/" + e;
  },
  vb = {},
  Lr = function (t, r, i) {
    let s = Promise.resolve();
    if (r && r.length > 0) {
      let m = function (h) {
        return Promise.all(
          h.map((y) =>
            Promise.resolve(y).then(
              (g) => ({ status: "fulfilled", value: g }),
              (g) => ({ status: "rejected", reason: g }),
            ),
          ),
        );
      };
      document.getElementsByTagName("link");
      const c = document.querySelector("meta[property=csp-nonce]"),
        d = c?.nonce || c?.getAttribute("nonce");
      s = m(
        r.map((h) => {
          if (((h = pC(h)), h in vb)) return;
          vb[h] = !0;
          const y = h.endsWith(".css"),
            g = y ? '[rel="stylesheet"]' : "";
          if (document.querySelector(`link[href="${h}"]${g}`)) return;
          const v = document.createElement("link");
          if (
            ((v.rel = y ? "stylesheet" : mC),
            y || (v.as = "script"),
            (v.crossOrigin = ""),
            (v.href = h),
            d && v.setAttribute("nonce", d),
            document.head.appendChild(v),
            y)
          )
            return new Promise((_, S) => {
              (v.addEventListener("load", _),
                v.addEventListener("error", () =>
                  S(new Error(`Unable to preload CSS for ${h}`)),
                ));
            });
        }),
      );
    }
    function l(c) {
      const d = new Event("vite:preloadError", { cancelable: !0 });
      if (((d.payload = c), window.dispatchEvent(d), !d.defaultPrevented))
        throw c;
    }
    return s.then((c) => {
      for (const d of c || []) d.status === "rejected" && l(d.reason);
      return t().catch(l);
    });
  },
  Ar = {
    HOME: { ROOT: "/" },
    AUCTION: { ROOT: "/auction", ROOM: "/auction/:auctionId" },
    CREATE: { ROOT: "/create" },
    HISTORY: { ROOT: "/history" },
    AUTH: { ROOT: "/auth" },
    PAYMENT: {
      APPROVAL: "/payment/approve",
      CANCEL: "/payment/cancel",
      FAIL: "/payment/fail",
      HISTORY: "/payment/history",
    },
  },
  Oc = "/assets/profile1-BgNf41Vs.svg",
  Qw = "/assets/profile2-uimi6C9l.svg",
  Xw = "/assets/profile3-Cw6ESoX5.svg",
  Jw = "/assets/profile4-BoJny71e.svg",
  Ww = "/assets/profile5-CaBIp1ZG.svg",
  e2 = "/assets/profile6-D02euur1.svg",
  yC = "/assets/logo-CjZZMZa2.svg",
  t2 = "/assets/cup-CJ517CSa.svg",
  gC =
    "data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M16.875%201.13754C16.7594%201.02166%2016.622%200.929722%2016.4708%200.866995C16.3196%200.804268%2016.1575%200.77198%2015.9938%200.77198C15.8301%200.77198%2015.668%200.804268%2015.5168%200.866995C15.3655%200.929722%2015.2282%201.02166%2015.1125%201.13754L9.00003%207.23753L2.88754%201.12504C2.77181%201.00931%202.63442%200.917508%202.48321%200.854877C2.33201%200.792245%202.16995%200.76001%202.00629%200.76001C1.84262%200.76001%201.68056%200.792245%201.52936%200.854877C1.37815%200.917508%201.24076%201.00931%201.12504%201.12504C1.00931%201.24076%200.917508%201.37815%200.854877%201.52936C0.792245%201.68056%200.76001%201.84262%200.76001%202.00629C0.76001%202.16995%200.792245%202.33201%200.854877%202.48321C0.917508%202.63442%201.00931%202.77181%201.12504%202.88754L7.23753%209.00003L1.12504%2015.1125C1.00931%2015.2283%200.917508%2015.3656%200.854877%2015.5169C0.792245%2015.6681%200.76001%2015.8301%200.76001%2015.9938C0.76001%2016.1574%200.792245%2016.3195%200.854877%2016.4707C0.917508%2016.6219%201.00931%2016.7593%201.12504%2016.875C1.24076%2016.9908%201.37815%2017.0826%201.52936%2017.1452C1.68056%2017.2078%201.84262%2017.2401%202.00629%2017.2401C2.16995%2017.2401%202.33201%2017.2078%202.48321%2017.1452C2.63442%2017.0826%202.77181%2016.9908%202.88754%2016.875L9.00003%2010.7625L15.1125%2016.875C15.2283%2016.9908%2015.3656%2017.0826%2015.5169%2017.1452C15.6681%2017.2078%2015.8301%2017.2401%2015.9938%2017.2401C16.1574%2017.2401%2016.3195%2017.2078%2016.4707%2017.1452C16.6219%2017.0826%2016.7593%2016.9908%2016.875%2016.875C16.9908%2016.7593%2017.0826%2016.6219%2017.1452%2016.4707C17.2078%2016.3195%2017.2401%2016.1574%2017.2401%2015.9938C17.2401%2015.8301%2017.2078%2015.6681%2017.1452%2015.5169C17.0826%2015.3656%2016.9908%2015.2283%2016.875%2015.1125L10.7625%209.00003L16.875%202.88754C17.35%202.41254%2017.35%201.61254%2016.875%201.13754Z'%20fill='%23525252'/%3e%3c/svg%3e",
  vC =
    "data:image/svg+xml,%3csvg%20width='29'%20height='26'%20viewBox='0%200%2029%2026'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M14.5%200C22.2333%200%2028.5013%204.88533%2028.5013%2010.9133C28.5013%2016.94%2022.2333%2021.8253%2014.5013%2021.8253C13.7315%2021.824%2012.9625%2021.775%2012.1987%2021.6787L6.32134%2025.5227C5.65334%2025.876%205.41734%2025.8373%205.69201%2024.972L6.88134%2020.068C3.04134%2018.1213%200.501343%2014.748%200.501343%2010.9133C0.501343%204.88667%206.76801%200%2014.5013%200M22.3787%2010.7467L24.3387%208.848C24.4518%208.73054%2024.5149%208.57378%2024.5147%208.41073C24.5145%208.24767%2024.451%208.09106%2024.3376%207.97388C24.2242%207.8567%2024.0698%207.78809%2023.9069%207.78252C23.7439%207.77695%2023.5851%207.83484%2023.464%207.944L20.8933%2010.432V8.376C20.8933%208.20909%2020.827%208.04902%2020.709%207.93099C20.591%207.81297%2020.4309%207.74667%2020.264%207.74667C20.0971%207.74667%2019.937%207.81297%2019.819%207.93099C19.701%208.04902%2019.6347%208.20909%2019.6347%208.376V11.7853C19.6125%2011.8828%2019.6125%2011.9839%2019.6347%2012.0813V14C19.6347%2014.1669%2019.701%2014.327%2019.819%2014.445C19.937%2014.563%2020.0971%2014.6293%2020.264%2014.6293C20.4309%2014.6293%2020.591%2014.563%2020.709%2014.445C20.827%2014.327%2020.8933%2014.1669%2020.8933%2014V12.1827L21.4627%2011.632L23.3667%2014.3427C23.4142%2014.4103%2023.4746%2014.468%2023.5444%2014.5123C23.6143%2014.5567%2023.6921%2014.5868%2023.7736%2014.601C23.8551%2014.6153%2023.9385%2014.6133%2024.0192%2014.5953C24.1%2014.5773%2024.1763%2014.5435%2024.244%2014.496C24.3117%2014.4485%2024.3693%2014.3881%2024.4137%2014.3182C24.458%2014.2484%2024.4881%2014.1706%2024.5024%2014.0891C24.5166%2014.0076%2024.5147%2013.9241%2024.4966%2013.8434C24.4786%2013.7627%2024.4449%2013.6863%2024.3973%2013.6187L22.3787%2010.7467ZM18.4347%2013.312H16.488V8.396C16.4806%208.23427%2016.4111%208.08164%2016.294%207.96983C16.1769%207.85802%2016.0212%207.79563%2015.8593%207.79563C15.6974%207.79563%2015.5418%207.85802%2015.4247%207.96983C15.3076%208.08164%2015.2381%208.23427%2015.2307%208.396V13.9413C15.2307%2014.288%2015.5107%2014.5707%2015.8587%2014.5707H18.4347C18.6016%2014.5707%2018.7617%2014.5044%2018.8797%2014.3863C18.9977%2014.2683%2019.064%2014.1082%2019.064%2013.9413C19.064%2013.7744%2018.9977%2013.6143%2018.8797%2013.4963C18.7617%2013.3783%2018.6016%2013.312%2018.4347%2013.312ZM10.6253%2011.8573L11.5533%209.58L12.404%2011.856L10.6253%2011.8573ZM13.9893%2012.5067L13.992%2012.4853C13.9916%2012.3268%2013.9311%2012.1744%2013.8227%2012.0587L12.428%208.32533C12.3695%208.14742%2012.2582%207.99159%2012.1088%207.87866C11.9594%207.76573%2011.7791%207.70107%2011.592%207.69333C11.4037%207.69325%2011.2198%207.75012%2011.0644%207.85649C10.909%207.96286%2010.7894%208.11375%2010.7213%208.28933L8.50534%2013.7227C8.44222%2013.8772%208.44307%2014.0505%208.50771%2014.2044C8.57235%2014.3583%208.69548%2014.4802%208.85001%2014.5433C9.00454%2014.6065%209.17782%2014.6056%209.33173%2014.541C9.48563%2014.4763%209.60756%2014.3532%209.67068%2014.1987L10.1133%2013.1147H12.8733L13.2707%2014.1813C13.2978%2014.2611%2013.3406%2014.3345%2013.3966%2014.3974C13.4527%2014.4603%2013.5207%2014.5113%2013.5968%2014.5474C13.6729%2014.5835%2013.7554%2014.6039%2013.8396%2014.6075C13.9237%2014.6111%2014.0077%2014.5978%2014.0866%2014.5684C14.1655%2014.5389%2014.2377%2014.4939%2014.2989%2014.4361C14.3601%2014.3782%2014.409%2014.3087%2014.4429%2014.2315C14.4767%2014.1544%2014.4947%2014.0713%2014.4958%2013.9871C14.4969%2013.9029%2014.4811%2013.8193%2014.4493%2013.7413L13.9893%2012.5067ZM9.55868%208.40267C9.55903%208.32003%209.54303%208.23815%209.51162%208.16172C9.4802%208.0853%209.43397%208.01584%209.3756%207.95735C9.31724%207.89886%209.24788%207.85249%209.17152%207.8209C9.09516%207.78932%209.01331%207.77316%208.93068%207.77333H4.60401C4.4371%207.77333%204.27703%207.83964%204.159%207.95766C4.04098%208.07568%203.97468%208.23576%203.97468%208.40267C3.97468%208.56958%204.04098%208.72965%204.159%208.84767C4.27703%208.9657%204.4371%209.032%204.60401%209.032H6.15068V14.0133C6.15068%2014.1802%206.21698%2014.3403%206.335%2014.4583C6.45303%2014.5764%206.6131%2014.6427%206.78001%2014.6427C6.94692%2014.6427%207.10699%2014.5764%207.22502%2014.4583C7.34304%2014.3403%207.40934%2014.1802%207.40934%2014.0133V9.032H8.92934C9.01209%209.03235%209.09408%209.01632%209.1706%208.98481C9.24711%208.95331%209.31663%208.90697%209.37514%208.84846C9.43365%208.78995%209.47999%208.72043%209.51149%208.64392C9.54299%208.5674%209.55903%208.48541%209.55868%208.40267Z'%20fill='black'/%3e%3c/svg%3e",
  bC =
    "data:image/svg+xml,%3csvg%20width='47'%20height='46'%20viewBox='0%200%2047%2046'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='23.5'%20cy='23'%20r='22'%20fill='white'%20stroke='%23F3F3F3'%20stroke-width='2'/%3e%3cpath%20d='M34.69%2011.8101C33.8509%2010.972%2032.7135%2010.5012%2031.5275%2010.5012C30.3416%2010.5012%2029.2041%2010.972%2028.365%2011.8101L13.425%2026.7501C12.9169%2027.2577%2012.5599%2027.8964%2012.3938%2028.5951L11.025%2034.3476C10.988%2034.5034%2010.9914%2034.6661%2011.0351%2034.8202C11.0788%2034.9743%2011.1612%2035.1146%2011.2745%2035.2278C11.3878%2035.341%2011.5283%2035.4233%2011.6824%2035.4668C11.8365%2035.5103%2011.9992%2035.5136%2012.155%2035.4764L17.9063%2034.1064C18.6054%2033.9404%2019.2446%2033.5834%2019.7525%2033.0751L34.69%2018.1376C35.5281%2017.2985%2035.9989%2016.1611%2035.9989%2014.9751C35.9989%2013.7892%2035.5281%2012.6517%2034.69%2011.8126M29.69%2013.1376C29.9313%2012.8963%2030.2178%2012.7049%2030.5331%2012.5743C30.8483%2012.4437%2031.1863%2012.3765%2031.5275%2012.3765C31.8688%2012.3765%2032.2067%2012.4437%2032.522%2012.5743C32.8372%2012.7049%2033.1237%2012.8963%2033.365%2013.1376C33.6063%2013.3789%2033.7977%2013.6654%2033.9283%2013.9807C34.0589%2014.2959%2034.1261%2014.6339%2034.1261%2014.9751C34.1261%2015.3164%2034.0589%2015.6543%2033.9283%2015.9696C33.7977%2016.2848%2033.6063%2016.5713%2033.365%2016.8126L32.25%2017.9239L28.575%2014.2501L29.69%2013.1376ZM27.25%2015.5776L30.925%2019.2501L18.425%2031.7501C18.1625%2032.0126%2017.8325%2032.1964%2017.4713%2032.2826L13.2013%2033.3001L14.2175%2029.0301C14.3038%2028.6676%2014.4888%2028.3376%2014.7513%2028.0751L27.25%2015.5776Z'%20fill='%23757575'/%3e%3c/svg%3e";
function n2(e) {
  var t,
    r,
    i = "";
  if (typeof e == "string" || typeof e == "number") i += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var s = e.length;
      for (t = 0; t < s; t++)
        e[t] && (r = n2(e[t])) && (i && (i += " "), (i += r));
    } else for (r in e) e[r] && (i && (i += " "), (i += r));
  return i;
}
function r2() {
  for (var e, t, r = 0, i = "", s = arguments.length; r < s; r++)
    (e = arguments[r]) && (t = n2(e)) && (i && (i += " "), (i += t));
  return i;
}
const rp = "-",
  wC = (e) => {
    const t = _C(e),
      { conflictingClassGroups: r, conflictingClassGroupModifiers: i } = e;
    return {
      getClassGroupId: (c) => {
        const d = c.split(rp);
        return (d[0] === "" && d.length !== 1 && d.shift(), a2(d, t) || SC(c));
      },
      getConflictingClassGroupIds: (c, d) => {
        const m = r[c] || [];
        return d && i[c] ? [...m, ...i[c]] : m;
      },
    };
  },
  a2 = (e, t) => {
    if (e.length === 0) return t.classGroupId;
    const r = e[0],
      i = t.nextPart.get(r),
      s = i ? a2(e.slice(1), i) : void 0;
    if (s) return s;
    if (t.validators.length === 0) return;
    const l = e.join(rp);
    return t.validators.find(({ validator: c }) => c(l))?.classGroupId;
  },
  bb = /^\[(.+)\]$/,
  SC = (e) => {
    if (bb.test(e)) {
      const t = bb.exec(e)[1],
        r = t?.substring(0, t.indexOf(":"));
      if (r) return "arbitrary.." + r;
    }
  },
  _C = (e) => {
    const { theme: t, classGroups: r } = e,
      i = { nextPart: new Map(), validators: [] };
    for (const s in r) cm(r[s], i, s, t);
    return i;
  },
  cm = (e, t, r, i) => {
    e.forEach((s) => {
      if (typeof s == "string") {
        const l = s === "" ? t : wb(t, s);
        l.classGroupId = r;
        return;
      }
      if (typeof s == "function") {
        if (EC(s)) {
          cm(s(i), t, r, i);
          return;
        }
        t.validators.push({ validator: s, classGroupId: r });
        return;
      }
      Object.entries(s).forEach(([l, c]) => {
        cm(c, wb(t, l), r, i);
      });
    });
  },
  wb = (e, t) => {
    let r = e;
    return (
      t.split(rp).forEach((i) => {
        (r.nextPart.has(i) ||
          r.nextPart.set(i, { nextPart: new Map(), validators: [] }),
          (r = r.nextPart.get(i)));
      }),
      r
    );
  },
  EC = (e) => e.isThemeGetter,
  xC = (e) => {
    if (e < 1) return { get: () => {}, set: () => {} };
    let t = 0,
      r = new Map(),
      i = new Map();
    const s = (l, c) => {
      (r.set(l, c), t++, t > e && ((t = 0), (i = r), (r = new Map())));
    };
    return {
      get(l) {
        let c = r.get(l);
        if (c !== void 0) return c;
        if ((c = i.get(l)) !== void 0) return (s(l, c), c);
      },
      set(l, c) {
        r.has(l) ? r.set(l, c) : s(l, c);
      },
    };
  },
  fm = "!",
  dm = ":",
  RC = dm.length,
  OC = (e) => {
    const { prefix: t, experimentalParseClassName: r } = e;
    let i = (s) => {
      const l = [];
      let c = 0,
        d = 0,
        m = 0,
        h;
      for (let S = 0; S < s.length; S++) {
        let E = s[S];
        if (c === 0 && d === 0) {
          if (E === dm) {
            (l.push(s.slice(m, S)), (m = S + RC));
            continue;
          }
          if (E === "/") {
            h = S;
            continue;
          }
        }
        E === "[" ? c++ : E === "]" ? c-- : E === "(" ? d++ : E === ")" && d--;
      }
      const y = l.length === 0 ? s : s.substring(m),
        g = AC(y),
        v = g !== y,
        _ = h && h > m ? h - m : void 0;
      return {
        modifiers: l,
        hasImportantModifier: v,
        baseClassName: g,
        maybePostfixModifierPosition: _,
      };
    };
    if (t) {
      const s = t + dm,
        l = i;
      i = (c) =>
        c.startsWith(s)
          ? l(c.substring(s.length))
          : {
              isExternal: !0,
              modifiers: [],
              hasImportantModifier: !1,
              baseClassName: c,
              maybePostfixModifierPosition: void 0,
            };
    }
    if (r) {
      const s = i;
      i = (l) => r({ className: l, parseClassName: s });
    }
    return i;
  },
  AC = (e) =>
    e.endsWith(fm)
      ? e.substring(0, e.length - 1)
      : e.startsWith(fm)
        ? e.substring(1)
        : e,
  CC = (e) => {
    const t = Object.fromEntries(e.orderSensitiveModifiers.map((i) => [i, !0]));
    return (i) => {
      if (i.length <= 1) return i;
      const s = [];
      let l = [];
      return (
        i.forEach((c) => {
          c[0] === "[" || t[c] ? (s.push(...l.sort(), c), (l = [])) : l.push(c);
        }),
        s.push(...l.sort()),
        s
      );
    };
  },
  TC = (e) => ({
    cache: xC(e.cacheSize),
    parseClassName: OC(e),
    sortModifiers: CC(e),
    ...wC(e),
  }),
  DC = /\s+/,
  MC = (e, t) => {
    const {
        parseClassName: r,
        getClassGroupId: i,
        getConflictingClassGroupIds: s,
        sortModifiers: l,
      } = t,
      c = [],
      d = e.trim().split(DC);
    let m = "";
    for (let h = d.length - 1; h >= 0; h -= 1) {
      const y = d[h],
        {
          isExternal: g,
          modifiers: v,
          hasImportantModifier: _,
          baseClassName: S,
          maybePostfixModifierPosition: E,
        } = r(y);
      if (g) {
        m = y + (m.length > 0 ? " " + m : m);
        continue;
      }
      let x = !!E,
        T = i(x ? S.substring(0, E) : S);
      if (!T) {
        if (!x) {
          m = y + (m.length > 0 ? " " + m : m);
          continue;
        }
        if (((T = i(S)), !T)) {
          m = y + (m.length > 0 ? " " + m : m);
          continue;
        }
        x = !1;
      }
      const P = l(v).join(":"),
        D = _ ? P + fm : P,
        B = D + T;
      if (c.includes(B)) continue;
      c.push(B);
      const k = s(T, x);
      for (let C = 0; C < k.length; ++C) {
        const Y = k[C];
        c.push(D + Y);
      }
      m = y + (m.length > 0 ? " " + m : m);
    }
    return m;
  };
function NC() {
  let e = 0,
    t,
    r,
    i = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (r = i2(t)) && (i && (i += " "), (i += r));
  return i;
}
const i2 = (e) => {
  if (typeof e == "string") return e;
  let t,
    r = "";
  for (let i = 0; i < e.length; i++)
    e[i] && (t = i2(e[i])) && (r && (r += " "), (r += t));
  return r;
};
function zC(e, ...t) {
  let r,
    i,
    s,
    l = c;
  function c(m) {
    const h = t.reduce((y, g) => g(y), e());
    return ((r = TC(h)), (i = r.cache.get), (s = r.cache.set), (l = d), d(m));
  }
  function d(m) {
    const h = i(m);
    if (h) return h;
    const y = MC(m, r);
    return (s(m, y), y);
  }
  return function () {
    return l(NC.apply(null, arguments));
  };
}
const qt = (e) => {
    const t = (r) => r[e] || [];
    return ((t.isThemeGetter = !0), t);
  },
  o2 = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
  s2 = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
  kC = /^\d+\/\d+$/,
  jC = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  LC =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  UC = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
  PC = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  FC =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  Ro = (e) => kC.test(e),
  Ie = (e) => !!e && !Number.isNaN(Number(e)),
  Ba = (e) => !!e && Number.isInteger(Number(e)),
  zh = (e) => e.endsWith("%") && Ie(e.slice(0, -1)),
  ia = (e) => jC.test(e),
  BC = () => !0,
  VC = (e) => LC.test(e) && !UC.test(e),
  l2 = () => !1,
  $C = (e) => PC.test(e),
  HC = (e) => FC.test(e),
  IC = (e) => !Te(e) && !De(e),
  ZC = (e) => $o(e, f2, l2),
  Te = (e) => o2.test(e),
  Ri = (e) => $o(e, d2, VC),
  kh = (e) => $o(e, QC, Ie),
  Sb = (e) => $o(e, u2, l2),
  qC = (e) => $o(e, c2, HC),
  qu = (e) => $o(e, h2, $C),
  De = (e) => s2.test(e),
  Js = (e) => Ho(e, d2),
  GC = (e) => Ho(e, XC),
  _b = (e) => Ho(e, u2),
  YC = (e) => Ho(e, f2),
  KC = (e) => Ho(e, c2),
  Gu = (e) => Ho(e, h2, !0),
  $o = (e, t, r) => {
    const i = o2.exec(e);
    return i ? (i[1] ? t(i[1]) : r(i[2])) : !1;
  },
  Ho = (e, t, r = !1) => {
    const i = s2.exec(e);
    return i ? (i[1] ? t(i[1]) : r) : !1;
  },
  u2 = (e) => e === "position" || e === "percentage",
  c2 = (e) => e === "image" || e === "url",
  f2 = (e) => e === "length" || e === "size" || e === "bg-size",
  d2 = (e) => e === "length",
  QC = (e) => e === "number",
  XC = (e) => e === "family-name",
  h2 = (e) => e === "shadow",
  JC = () => {
    const e = qt("color"),
      t = qt("font"),
      r = qt("text"),
      i = qt("font-weight"),
      s = qt("tracking"),
      l = qt("leading"),
      c = qt("breakpoint"),
      d = qt("container"),
      m = qt("spacing"),
      h = qt("radius"),
      y = qt("shadow"),
      g = qt("inset-shadow"),
      v = qt("text-shadow"),
      _ = qt("drop-shadow"),
      S = qt("blur"),
      E = qt("perspective"),
      x = qt("aspect"),
      T = qt("ease"),
      P = qt("animate"),
      D = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      B = () => [
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
      k = () => [...B(), De, Te],
      C = () => ["auto", "hidden", "clip", "visible", "scroll"],
      Y = () => ["auto", "contain", "none"],
      Q = () => [De, Te, m],
      me = () => [Ro, "full", "auto", ...Q()],
      pe = () => [Ba, "none", "subgrid", De, Te],
      we = () => ["auto", { span: ["full", Ba, De, Te] }, Ba, De, Te],
      be = () => [Ba, "auto", De, Te],
      Se = () => ["auto", "min", "max", "fr", De, Te],
      ce = () => [
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
      ge = () => [
        "start",
        "end",
        "center",
        "stretch",
        "center-safe",
        "end-safe",
      ],
      U = () => ["auto", ...Q()],
      ne = () => [
        Ro,
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
        ...Q(),
      ],
      q = () => [e, De, Te],
      ie = () => [...B(), _b, Sb, { position: [De, Te] }],
      N = () => ["no-repeat", { repeat: ["", "x", "y", "space", "round"] }],
      W = () => ["auto", "cover", "contain", YC, ZC, { size: [De, Te] }],
      fe = () => [zh, Js, Ri],
      le = () => ["", "none", "full", h, De, Te],
      ve = () => ["", Ie, Js, Ri],
      ke = () => ["solid", "dashed", "dotted", "double"],
      Oe = () => [
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
      Ne = () => [Ie, zh, _b, Sb],
      qe = () => ["", "none", S, De, Te],
      gt = () => ["none", Ie, De, Te],
      at = () => ["none", Ie, De, Te],
      ut = () => [Ie, De, Te],
      Xt = () => [Ro, "full", ...Q()];
    return {
      cacheSize: 500,
      theme: {
        animate: ["spin", "ping", "pulse", "bounce"],
        aspect: ["video"],
        blur: [ia],
        breakpoint: [ia],
        color: [BC],
        container: [ia],
        "drop-shadow": [ia],
        ease: ["in", "out", "in-out"],
        font: [IC],
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
        "inset-shadow": [ia],
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
        perspective: [
          "dramatic",
          "near",
          "normal",
          "midrange",
          "distant",
          "none",
        ],
        radius: [ia],
        shadow: [ia],
        spacing: ["px", Ie],
        text: [ia],
        "text-shadow": [ia],
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"],
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", Ro, Te, De, x] }],
        container: ["container"],
        columns: [{ columns: [Ie, Te, De, d] }],
        "break-after": [{ "break-after": D() }],
        "break-before": [{ "break-before": D() }],
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
        "object-position": [{ object: k() }],
        overflow: [{ overflow: C() }],
        "overflow-x": [{ "overflow-x": C() }],
        "overflow-y": [{ "overflow-y": C() }],
        overscroll: [{ overscroll: Y() }],
        "overscroll-x": [{ "overscroll-x": Y() }],
        "overscroll-y": [{ "overscroll-y": Y() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: me() }],
        "inset-x": [{ "inset-x": me() }],
        "inset-y": [{ "inset-y": me() }],
        start: [{ start: me() }],
        end: [{ end: me() }],
        top: [{ top: me() }],
        right: [{ right: me() }],
        bottom: [{ bottom: me() }],
        left: [{ left: me() }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: [Ba, "auto", De, Te] }],
        basis: [{ basis: [Ro, "full", "auto", d, ...Q()] }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["nowrap", "wrap", "wrap-reverse"] }],
        flex: [{ flex: [Ie, Ro, "auto", "initial", "none", Te] }],
        grow: [{ grow: ["", Ie, De, Te] }],
        shrink: [{ shrink: ["", Ie, De, Te] }],
        order: [{ order: [Ba, "first", "last", "none", De, Te] }],
        "grid-cols": [{ "grid-cols": pe() }],
        "col-start-end": [{ col: we() }],
        "col-start": [{ "col-start": be() }],
        "col-end": [{ "col-end": be() }],
        "grid-rows": [{ "grid-rows": pe() }],
        "row-start-end": [{ row: we() }],
        "row-start": [{ "row-start": be() }],
        "row-end": [{ "row-end": be() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": Se() }],
        "auto-rows": [{ "auto-rows": Se() }],
        gap: [{ gap: Q() }],
        "gap-x": [{ "gap-x": Q() }],
        "gap-y": [{ "gap-y": Q() }],
        "justify-content": [{ justify: [...ce(), "normal"] }],
        "justify-items": [{ "justify-items": [...ge(), "normal"] }],
        "justify-self": [{ "justify-self": ["auto", ...ge()] }],
        "align-content": [{ content: ["normal", ...ce()] }],
        "align-items": [{ items: [...ge(), { baseline: ["", "last"] }] }],
        "align-self": [{ self: ["auto", ...ge(), { baseline: ["", "last"] }] }],
        "place-content": [{ "place-content": ce() }],
        "place-items": [{ "place-items": [...ge(), "baseline"] }],
        "place-self": [{ "place-self": ["auto", ...ge()] }],
        p: [{ p: Q() }],
        px: [{ px: Q() }],
        py: [{ py: Q() }],
        ps: [{ ps: Q() }],
        pe: [{ pe: Q() }],
        pt: [{ pt: Q() }],
        pr: [{ pr: Q() }],
        pb: [{ pb: Q() }],
        pl: [{ pl: Q() }],
        m: [{ m: U() }],
        mx: [{ mx: U() }],
        my: [{ my: U() }],
        ms: [{ ms: U() }],
        me: [{ me: U() }],
        mt: [{ mt: U() }],
        mr: [{ mr: U() }],
        mb: [{ mb: U() }],
        ml: [{ ml: U() }],
        "space-x": [{ "space-x": Q() }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": Q() }],
        "space-y-reverse": ["space-y-reverse"],
        size: [{ size: ne() }],
        w: [{ w: [d, "screen", ...ne()] }],
        "min-w": [{ "min-w": [d, "screen", "none", ...ne()] }],
        "max-w": [
          { "max-w": [d, "screen", "none", "prose", { screen: [c] }, ...ne()] },
        ],
        h: [{ h: ["screen", "lh", ...ne()] }],
        "min-h": [{ "min-h": ["screen", "lh", "none", ...ne()] }],
        "max-h": [{ "max-h": ["screen", "lh", ...ne()] }],
        "font-size": [{ text: ["base", r, Js, Ri] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [{ font: [i, De, kh] }],
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
              zh,
              Te,
            ],
          },
        ],
        "font-family": [{ font: [GC, Te, t] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [{ tracking: [s, De, Te] }],
        "line-clamp": [{ "line-clamp": [Ie, "none", De, kh] }],
        leading: [{ leading: [l, ...Q()] }],
        "list-image": [{ "list-image": ["none", De, Te] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "list-style-type": [{ list: ["disc", "decimal", "none", De, Te] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "placeholder-color": [{ placeholder: q() }],
        "text-color": [{ text: q() }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...ke(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: [Ie, "from-font", "auto", De, Ri] },
        ],
        "text-decoration-color": [{ decoration: q() }],
        "underline-offset": [{ "underline-offset": [Ie, "auto", De, Te] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: Q() }],
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
              De,
              Te,
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
        content: [{ content: ["none", De, Te] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: ie() }],
        "bg-repeat": [{ bg: N() }],
        "bg-size": [{ bg: W() }],
        "bg-image": [
          {
            bg: [
              "none",
              {
                linear: [
                  { to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
                  Ba,
                  De,
                  Te,
                ],
                radial: ["", De, Te],
                conic: [Ba, De, Te],
              },
              KC,
              qC,
            ],
          },
        ],
        "bg-color": [{ bg: q() }],
        "gradient-from-pos": [{ from: fe() }],
        "gradient-via-pos": [{ via: fe() }],
        "gradient-to-pos": [{ to: fe() }],
        "gradient-from": [{ from: q() }],
        "gradient-via": [{ via: q() }],
        "gradient-to": [{ to: q() }],
        rounded: [{ rounded: le() }],
        "rounded-s": [{ "rounded-s": le() }],
        "rounded-e": [{ "rounded-e": le() }],
        "rounded-t": [{ "rounded-t": le() }],
        "rounded-r": [{ "rounded-r": le() }],
        "rounded-b": [{ "rounded-b": le() }],
        "rounded-l": [{ "rounded-l": le() }],
        "rounded-ss": [{ "rounded-ss": le() }],
        "rounded-se": [{ "rounded-se": le() }],
        "rounded-ee": [{ "rounded-ee": le() }],
        "rounded-es": [{ "rounded-es": le() }],
        "rounded-tl": [{ "rounded-tl": le() }],
        "rounded-tr": [{ "rounded-tr": le() }],
        "rounded-br": [{ "rounded-br": le() }],
        "rounded-bl": [{ "rounded-bl": le() }],
        "border-w": [{ border: ve() }],
        "border-w-x": [{ "border-x": ve() }],
        "border-w-y": [{ "border-y": ve() }],
        "border-w-s": [{ "border-s": ve() }],
        "border-w-e": [{ "border-e": ve() }],
        "border-w-t": [{ "border-t": ve() }],
        "border-w-r": [{ "border-r": ve() }],
        "border-w-b": [{ "border-b": ve() }],
        "border-w-l": [{ "border-l": ve() }],
        "divide-x": [{ "divide-x": ve() }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": ve() }],
        "divide-y-reverse": ["divide-y-reverse"],
        "border-style": [{ border: [...ke(), "hidden", "none"] }],
        "divide-style": [{ divide: [...ke(), "hidden", "none"] }],
        "border-color": [{ border: q() }],
        "border-color-x": [{ "border-x": q() }],
        "border-color-y": [{ "border-y": q() }],
        "border-color-s": [{ "border-s": q() }],
        "border-color-e": [{ "border-e": q() }],
        "border-color-t": [{ "border-t": q() }],
        "border-color-r": [{ "border-r": q() }],
        "border-color-b": [{ "border-b": q() }],
        "border-color-l": [{ "border-l": q() }],
        "divide-color": [{ divide: q() }],
        "outline-style": [{ outline: [...ke(), "none", "hidden"] }],
        "outline-offset": [{ "outline-offset": [Ie, De, Te] }],
        "outline-w": [{ outline: ["", Ie, Js, Ri] }],
        "outline-color": [{ outline: q() }],
        shadow: [{ shadow: ["", "none", y, Gu, qu] }],
        "shadow-color": [{ shadow: q() }],
        "inset-shadow": [{ "inset-shadow": ["none", g, Gu, qu] }],
        "inset-shadow-color": [{ "inset-shadow": q() }],
        "ring-w": [{ ring: ve() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: q() }],
        "ring-offset-w": [{ "ring-offset": [Ie, Ri] }],
        "ring-offset-color": [{ "ring-offset": q() }],
        "inset-ring-w": [{ "inset-ring": ve() }],
        "inset-ring-color": [{ "inset-ring": q() }],
        "text-shadow": [{ "text-shadow": ["none", v, Gu, qu] }],
        "text-shadow-color": [{ "text-shadow": q() }],
        opacity: [{ opacity: [Ie, De, Te] }],
        "mix-blend": [
          { "mix-blend": [...Oe(), "plus-darker", "plus-lighter"] },
        ],
        "bg-blend": [{ "bg-blend": Oe() }],
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
        "mask-image-linear-pos": [{ "mask-linear": [Ie] }],
        "mask-image-linear-from-pos": [{ "mask-linear-from": Ne() }],
        "mask-image-linear-to-pos": [{ "mask-linear-to": Ne() }],
        "mask-image-linear-from-color": [{ "mask-linear-from": q() }],
        "mask-image-linear-to-color": [{ "mask-linear-to": q() }],
        "mask-image-t-from-pos": [{ "mask-t-from": Ne() }],
        "mask-image-t-to-pos": [{ "mask-t-to": Ne() }],
        "mask-image-t-from-color": [{ "mask-t-from": q() }],
        "mask-image-t-to-color": [{ "mask-t-to": q() }],
        "mask-image-r-from-pos": [{ "mask-r-from": Ne() }],
        "mask-image-r-to-pos": [{ "mask-r-to": Ne() }],
        "mask-image-r-from-color": [{ "mask-r-from": q() }],
        "mask-image-r-to-color": [{ "mask-r-to": q() }],
        "mask-image-b-from-pos": [{ "mask-b-from": Ne() }],
        "mask-image-b-to-pos": [{ "mask-b-to": Ne() }],
        "mask-image-b-from-color": [{ "mask-b-from": q() }],
        "mask-image-b-to-color": [{ "mask-b-to": q() }],
        "mask-image-l-from-pos": [{ "mask-l-from": Ne() }],
        "mask-image-l-to-pos": [{ "mask-l-to": Ne() }],
        "mask-image-l-from-color": [{ "mask-l-from": q() }],
        "mask-image-l-to-color": [{ "mask-l-to": q() }],
        "mask-image-x-from-pos": [{ "mask-x-from": Ne() }],
        "mask-image-x-to-pos": [{ "mask-x-to": Ne() }],
        "mask-image-x-from-color": [{ "mask-x-from": q() }],
        "mask-image-x-to-color": [{ "mask-x-to": q() }],
        "mask-image-y-from-pos": [{ "mask-y-from": Ne() }],
        "mask-image-y-to-pos": [{ "mask-y-to": Ne() }],
        "mask-image-y-from-color": [{ "mask-y-from": q() }],
        "mask-image-y-to-color": [{ "mask-y-to": q() }],
        "mask-image-radial": [{ "mask-radial": [De, Te] }],
        "mask-image-radial-from-pos": [{ "mask-radial-from": Ne() }],
        "mask-image-radial-to-pos": [{ "mask-radial-to": Ne() }],
        "mask-image-radial-from-color": [{ "mask-radial-from": q() }],
        "mask-image-radial-to-color": [{ "mask-radial-to": q() }],
        "mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }],
        "mask-image-radial-size": [
          {
            "mask-radial": [
              { closest: ["side", "corner"], farthest: ["side", "corner"] },
            ],
          },
        ],
        "mask-image-radial-pos": [{ "mask-radial-at": B() }],
        "mask-image-conic-pos": [{ "mask-conic": [Ie] }],
        "mask-image-conic-from-pos": [{ "mask-conic-from": Ne() }],
        "mask-image-conic-to-pos": [{ "mask-conic-to": Ne() }],
        "mask-image-conic-from-color": [{ "mask-conic-from": q() }],
        "mask-image-conic-to-color": [{ "mask-conic-to": q() }],
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
        "mask-position": [{ mask: ie() }],
        "mask-repeat": [{ mask: N() }],
        "mask-size": [{ mask: W() }],
        "mask-type": [{ "mask-type": ["alpha", "luminance"] }],
        "mask-image": [{ mask: ["none", De, Te] }],
        filter: [{ filter: ["", "none", De, Te] }],
        blur: [{ blur: qe() }],
        brightness: [{ brightness: [Ie, De, Te] }],
        contrast: [{ contrast: [Ie, De, Te] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", _, Gu, qu] }],
        "drop-shadow-color": [{ "drop-shadow": q() }],
        grayscale: [{ grayscale: ["", Ie, De, Te] }],
        "hue-rotate": [{ "hue-rotate": [Ie, De, Te] }],
        invert: [{ invert: ["", Ie, De, Te] }],
        saturate: [{ saturate: [Ie, De, Te] }],
        sepia: [{ sepia: ["", Ie, De, Te] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none", De, Te] }],
        "backdrop-blur": [{ "backdrop-blur": qe() }],
        "backdrop-brightness": [{ "backdrop-brightness": [Ie, De, Te] }],
        "backdrop-contrast": [{ "backdrop-contrast": [Ie, De, Te] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": ["", Ie, De, Te] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [Ie, De, Te] }],
        "backdrop-invert": [{ "backdrop-invert": ["", Ie, De, Te] }],
        "backdrop-opacity": [{ "backdrop-opacity": [Ie, De, Te] }],
        "backdrop-saturate": [{ "backdrop-saturate": [Ie, De, Te] }],
        "backdrop-sepia": [{ "backdrop-sepia": ["", Ie, De, Te] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": Q() }],
        "border-spacing-x": [{ "border-spacing-x": Q() }],
        "border-spacing-y": [{ "border-spacing-y": Q() }],
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
              De,
              Te,
            ],
          },
        ],
        "transition-behavior": [{ transition: ["normal", "discrete"] }],
        duration: [{ duration: [Ie, "initial", De, Te] }],
        ease: [{ ease: ["linear", "initial", T, De, Te] }],
        delay: [{ delay: [Ie, De, Te] }],
        animate: [{ animate: ["none", P, De, Te] }],
        backface: [{ backface: ["hidden", "visible"] }],
        perspective: [{ perspective: [E, De, Te] }],
        "perspective-origin": [{ "perspective-origin": k() }],
        rotate: [{ rotate: gt() }],
        "rotate-x": [{ "rotate-x": gt() }],
        "rotate-y": [{ "rotate-y": gt() }],
        "rotate-z": [{ "rotate-z": gt() }],
        scale: [{ scale: at() }],
        "scale-x": [{ "scale-x": at() }],
        "scale-y": [{ "scale-y": at() }],
        "scale-z": [{ "scale-z": at() }],
        "scale-3d": ["scale-3d"],
        skew: [{ skew: ut() }],
        "skew-x": [{ "skew-x": ut() }],
        "skew-y": [{ "skew-y": ut() }],
        transform: [{ transform: [De, Te, "", "none", "gpu", "cpu"] }],
        "transform-origin": [{ origin: k() }],
        "transform-style": [{ transform: ["3d", "flat"] }],
        translate: [{ translate: Xt() }],
        "translate-x": [{ "translate-x": Xt() }],
        "translate-y": [{ "translate-y": Xt() }],
        "translate-z": [{ "translate-z": Xt() }],
        "translate-none": ["translate-none"],
        accent: [{ accent: q() }],
        appearance: [{ appearance: ["none", "auto"] }],
        "caret-color": [{ caret: q() }],
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
              De,
              Te,
            ],
          },
        ],
        "field-sizing": [{ "field-sizing": ["fixed", "content"] }],
        "pointer-events": [{ "pointer-events": ["auto", "none"] }],
        resize: [{ resize: ["none", "", "y", "x"] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": Q() }],
        "scroll-mx": [{ "scroll-mx": Q() }],
        "scroll-my": [{ "scroll-my": Q() }],
        "scroll-ms": [{ "scroll-ms": Q() }],
        "scroll-me": [{ "scroll-me": Q() }],
        "scroll-mt": [{ "scroll-mt": Q() }],
        "scroll-mr": [{ "scroll-mr": Q() }],
        "scroll-mb": [{ "scroll-mb": Q() }],
        "scroll-ml": [{ "scroll-ml": Q() }],
        "scroll-p": [{ "scroll-p": Q() }],
        "scroll-px": [{ "scroll-px": Q() }],
        "scroll-py": [{ "scroll-py": Q() }],
        "scroll-ps": [{ "scroll-ps": Q() }],
        "scroll-pe": [{ "scroll-pe": Q() }],
        "scroll-pt": [{ "scroll-pt": Q() }],
        "scroll-pr": [{ "scroll-pr": Q() }],
        "scroll-pb": [{ "scroll-pb": Q() }],
        "scroll-pl": [{ "scroll-pl": Q() }],
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
            "will-change": ["auto", "scroll", "contents", "transform", De, Te],
          },
        ],
        fill: [{ fill: ["none", ...q()] }],
        "stroke-w": [{ stroke: [Ie, Js, Ri, kh] }],
        stroke: [{ stroke: ["none", ...q()] }],
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
  m2 = zC(JC),
  WC = (...e) => m2(r2(e)),
  eT = { small: "px-3 py-1.5 text-base", large: "px-5 py-3 text-xl" },
  Eb = { small: "rounded-[10px]", large: "rounded-[50px]" },
  tT = {
    primary: "bg-brand-primary text-bg-white",
    outlined: "bg-bg-white border border-2 border-scale-100 text-scale-600",
    gray: "bg-scale-100 text-scale-500",
    darkgray: "bg-scale-200 text-scale-300",
    kakao: "bg-point-kakao text-scale-600",
    disabled: "bg-brand-secondary text-[#C5B6AD]",
  };
function Lo({
  children: e,
  className: t,
  disabled: r = !1,
  variant: i = "primary",
  size: s = "large",
  isRounded: l = !1,
  ...c
}) {
  const d = WC(
    "font-bold cursor-pointer",
    t,
    eT[s],
    l ? Eb.large : Eb.small,
    tT[r ? "disabled" : i],
  );
  return j.jsx("button", { className: d, ...c, children: e });
}
function Ze(e, t, { checkForDefaultPrevented: r = !0 } = {}) {
  return function (s) {
    if ((e?.(s), r === !1 || !s.defaultPrevented)) return t?.(s);
  };
}
function xb(e, t) {
  if (typeof e == "function") return e(t);
  e != null && (e.current = t);
}
function Gc(...e) {
  return (t) => {
    let r = !1;
    const i = e.map((s) => {
      const l = xb(s, t);
      return (!r && typeof l == "function" && (r = !0), l);
    });
    if (r)
      return () => {
        for (let s = 0; s < i.length; s++) {
          const l = i[s];
          typeof l == "function" ? l() : xb(e[s], null);
        }
      };
  };
}
function sn(...e) {
  return w.useCallback(Gc(...e), e);
}
function nT(e, t) {
  const r = w.createContext(t),
    i = (l) => {
      const { children: c, ...d } = l,
        m = w.useMemo(() => d, Object.values(d));
      return j.jsx(r.Provider, { value: m, children: c });
    };
  i.displayName = e + "Provider";
  function s(l) {
    const c = w.useContext(r);
    if (c) return c;
    if (t !== void 0) return t;
    throw new Error(`\`${l}\` must be used within \`${e}\``);
  }
  return [i, s];
}
function Io(e, t = []) {
  let r = [];
  function i(l, c) {
    const d = w.createContext(c),
      m = r.length;
    r = [...r, c];
    const h = (g) => {
      const { scope: v, children: _, ...S } = g,
        E = v?.[e]?.[m] || d,
        x = w.useMemo(() => S, Object.values(S));
      return j.jsx(E.Provider, { value: x, children: _ });
    };
    h.displayName = l + "Provider";
    function y(g, v) {
      const _ = v?.[e]?.[m] || d,
        S = w.useContext(_);
      if (S) return S;
      if (c !== void 0) return c;
      throw new Error(`\`${g}\` must be used within \`${l}\``);
    }
    return [h, y];
  }
  const s = () => {
    const l = r.map((c) => w.createContext(c));
    return function (d) {
      const m = d?.[e] || l;
      return w.useMemo(() => ({ [`__scope${e}`]: { ...d, [e]: m } }), [d, m]);
    };
  };
  return ((s.scopeName = e), [i, rT(s, ...t)]);
}
function rT(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const r = () => {
    const i = e.map((s) => ({ useScope: s(), scopeName: s.scopeName }));
    return function (l) {
      const c = i.reduce((d, { useScope: m, scopeName: h }) => {
        const g = m(l)[`__scope${h}`];
        return { ...d, ...g };
      }, {});
      return w.useMemo(() => ({ [`__scope${t.scopeName}`]: c }), [c]);
    };
  };
  return ((r.scopeName = t.scopeName), r);
}
var Ya = globalThis?.document ? w.useLayoutEffect : () => {},
  aT = xw[" useId ".trim().toString()] || (() => {}),
  iT = 0;
function zo(e) {
  const [t, r] = w.useState(aT());
  return (
    Ya(() => {
      r((i) => i ?? String(iT++));
    }, [e]),
    e || (t ? `radix-${t}` : "")
  );
}
var oT = xw[" useInsertionEffect ".trim().toString()] || Ya;
function ap({ prop: e, defaultProp: t, onChange: r = () => {}, caller: i }) {
  const [s, l, c] = sT({ defaultProp: t, onChange: r }),
    d = e !== void 0,
    m = d ? e : s;
  {
    const y = w.useRef(e !== void 0);
    w.useEffect(() => {
      const g = y.current;
      (g !== d &&
        console.warn(
          `${i} is changing from ${g ? "controlled" : "uncontrolled"} to ${d ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`,
        ),
        (y.current = d));
    }, [d, i]);
  }
  const h = w.useCallback(
    (y) => {
      if (d) {
        const g = lT(y) ? y(e) : y;
        g !== e && c.current?.(g);
      } else l(y);
    },
    [d, e, l, c],
  );
  return [m, h];
}
function sT({ defaultProp: e, onChange: t }) {
  const [r, i] = w.useState(e),
    s = w.useRef(r),
    l = w.useRef(t);
  return (
    oT(() => {
      l.current = t;
    }, [t]),
    w.useEffect(() => {
      s.current !== r && (l.current?.(r), (s.current = r));
    }, [r, s]),
    [r, i, l]
  );
}
function lT(e) {
  return typeof e == "function";
}
function dl(e) {
  const t = uT(e),
    r = w.forwardRef((i, s) => {
      const { children: l, ...c } = i,
        d = w.Children.toArray(l),
        m = d.find(fT);
      if (m) {
        const h = m.props.children,
          y = d.map((g) =>
            g === m
              ? w.Children.count(h) > 1
                ? w.Children.only(null)
                : w.isValidElement(h)
                  ? h.props.children
                  : null
              : g,
          );
        return j.jsx(t, {
          ...c,
          ref: s,
          children: w.isValidElement(h) ? w.cloneElement(h, void 0, y) : null,
        });
      }
      return j.jsx(t, { ...c, ref: s, children: l });
    });
  return ((r.displayName = `${e}.Slot`), r);
}
function uT(e) {
  const t = w.forwardRef((r, i) => {
    const { children: s, ...l } = r;
    if (w.isValidElement(s)) {
      const c = hT(s),
        d = dT(l, s.props);
      return (
        s.type !== w.Fragment && (d.ref = i ? Gc(i, c) : c),
        w.cloneElement(s, d)
      );
    }
    return w.Children.count(s) > 1 ? w.Children.only(null) : null;
  });
  return ((t.displayName = `${e}.SlotClone`), t);
}
var cT = Symbol("radix.slottable");
function fT(e) {
  return (
    w.isValidElement(e) &&
    typeof e.type == "function" &&
    "__radixId" in e.type &&
    e.type.__radixId === cT
  );
}
function dT(e, t) {
  const r = { ...t };
  for (const i in t) {
    const s = e[i],
      l = t[i];
    /^on[A-Z]/.test(i)
      ? s && l
        ? (r[i] = (...d) => {
            const m = l(...d);
            return (s(...d), m);
          })
        : s && (r[i] = s)
      : i === "style"
        ? (r[i] = { ...s, ...l })
        : i === "className" && (r[i] = [s, l].filter(Boolean).join(" "));
  }
  return { ...e, ...r };
}
function hT(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
    r = t && "isReactWarning" in t && t.isReactWarning;
  return r
    ? e.ref
    : ((t = Object.getOwnPropertyDescriptor(e, "ref")?.get),
      (r = t && "isReactWarning" in t && t.isReactWarning),
      r ? e.props.ref : e.props.ref || e.ref);
}
var mT = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "select",
    "span",
    "svg",
    "ul",
  ],
  Pt = mT.reduce((e, t) => {
    const r = dl(`Primitive.${t}`),
      i = w.forwardRef((s, l) => {
        const { asChild: c, ...d } = s,
          m = c ? r : t;
        return (
          typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
          j.jsx(m, { ...d, ref: l })
        );
      });
    return ((i.displayName = `Primitive.${t}`), { ...e, [t]: i });
  }, {});
function p2(e, t) {
  e && qc.flushSync(() => e.dispatchEvent(t));
}
function ua(e) {
  const t = w.useRef(e);
  return (
    w.useEffect(() => {
      t.current = e;
    }),
    w.useMemo(
      () =>
        (...r) =>
          t.current?.(...r),
      [],
    )
  );
}
function pT(e, t = globalThis?.document) {
  const r = ua(e);
  w.useEffect(() => {
    const i = (s) => {
      s.key === "Escape" && r(s);
    };
    return (
      t.addEventListener("keydown", i, { capture: !0 }),
      () => t.removeEventListener("keydown", i, { capture: !0 })
    );
  }, [r, t]);
}
var yT = "DismissableLayer",
  hm = "dismissableLayer.update",
  gT = "dismissableLayer.pointerDownOutside",
  vT = "dismissableLayer.focusOutside",
  Rb,
  y2 = w.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  ip = w.forwardRef((e, t) => {
    const {
        disableOutsidePointerEvents: r = !1,
        onEscapeKeyDown: i,
        onPointerDownOutside: s,
        onFocusOutside: l,
        onInteractOutside: c,
        onDismiss: d,
        ...m
      } = e,
      h = w.useContext(y2),
      [y, g] = w.useState(null),
      v = y?.ownerDocument ?? globalThis?.document,
      [, _] = w.useState({}),
      S = sn(t, (Y) => g(Y)),
      E = Array.from(h.layers),
      [x] = [...h.layersWithOutsidePointerEventsDisabled].slice(-1),
      T = E.indexOf(x),
      P = y ? E.indexOf(y) : -1,
      D = h.layersWithOutsidePointerEventsDisabled.size > 0,
      B = P >= T,
      k = ST((Y) => {
        const Q = Y.target,
          me = [...h.branches].some((pe) => pe.contains(Q));
        !B || me || (s?.(Y), c?.(Y), Y.defaultPrevented || d?.());
      }, v),
      C = _T((Y) => {
        const Q = Y.target;
        [...h.branches].some((pe) => pe.contains(Q)) ||
          (l?.(Y), c?.(Y), Y.defaultPrevented || d?.());
      }, v);
    return (
      pT((Y) => {
        P === h.layers.size - 1 &&
          (i?.(Y), !Y.defaultPrevented && d && (Y.preventDefault(), d()));
      }, v),
      w.useEffect(() => {
        if (y)
          return (
            r &&
              (h.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((Rb = v.body.style.pointerEvents),
                (v.body.style.pointerEvents = "none")),
              h.layersWithOutsidePointerEventsDisabled.add(y)),
            h.layers.add(y),
            Ob(),
            () => {
              r &&
                h.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (v.body.style.pointerEvents = Rb);
            }
          );
      }, [y, v, r, h]),
      w.useEffect(
        () => () => {
          y &&
            (h.layers.delete(y),
            h.layersWithOutsidePointerEventsDisabled.delete(y),
            Ob());
        },
        [y, h],
      ),
      w.useEffect(() => {
        const Y = () => _({});
        return (
          document.addEventListener(hm, Y),
          () => document.removeEventListener(hm, Y)
        );
      }, []),
      j.jsx(Pt.div, {
        ...m,
        ref: S,
        style: {
          pointerEvents: D ? (B ? "auto" : "none") : void 0,
          ...e.style,
        },
        onFocusCapture: Ze(e.onFocusCapture, C.onFocusCapture),
        onBlurCapture: Ze(e.onBlurCapture, C.onBlurCapture),
        onPointerDownCapture: Ze(
          e.onPointerDownCapture,
          k.onPointerDownCapture,
        ),
      })
    );
  });
ip.displayName = yT;
var bT = "DismissableLayerBranch",
  wT = w.forwardRef((e, t) => {
    const r = w.useContext(y2),
      i = w.useRef(null),
      s = sn(t, i);
    return (
      w.useEffect(() => {
        const l = i.current;
        if (l)
          return (
            r.branches.add(l),
            () => {
              r.branches.delete(l);
            }
          );
      }, [r.branches]),
      j.jsx(Pt.div, { ...e, ref: s })
    );
  });
wT.displayName = bT;
function ST(e, t = globalThis?.document) {
  const r = ua(e),
    i = w.useRef(!1),
    s = w.useRef(() => {});
  return (
    w.useEffect(() => {
      const l = (d) => {
          if (d.target && !i.current) {
            let m = function () {
              g2(gT, r, h, { discrete: !0 });
            };
            const h = { originalEvent: d };
            d.pointerType === "touch"
              ? (t.removeEventListener("click", s.current),
                (s.current = m),
                t.addEventListener("click", s.current, { once: !0 }))
              : m();
          } else t.removeEventListener("click", s.current);
          i.current = !1;
        },
        c = window.setTimeout(() => {
          t.addEventListener("pointerdown", l);
        }, 0);
      return () => {
        (window.clearTimeout(c),
          t.removeEventListener("pointerdown", l),
          t.removeEventListener("click", s.current));
      };
    }, [t, r]),
    { onPointerDownCapture: () => (i.current = !0) }
  );
}
function _T(e, t = globalThis?.document) {
  const r = ua(e),
    i = w.useRef(!1);
  return (
    w.useEffect(() => {
      const s = (l) => {
        l.target &&
          !i.current &&
          g2(vT, r, { originalEvent: l }, { discrete: !1 });
      };
      return (
        t.addEventListener("focusin", s),
        () => t.removeEventListener("focusin", s)
      );
    }, [t, r]),
    {
      onFocusCapture: () => (i.current = !0),
      onBlurCapture: () => (i.current = !1),
    }
  );
}
function Ob() {
  const e = new CustomEvent(hm);
  document.dispatchEvent(e);
}
function g2(e, t, r, { discrete: i }) {
  const s = r.originalEvent.target,
    l = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: r });
  (t && s.addEventListener(e, t, { once: !0 }),
    i ? p2(s, l) : s.dispatchEvent(l));
}
var jh = "focusScope.autoFocusOnMount",
  Lh = "focusScope.autoFocusOnUnmount",
  Ab = { bubbles: !1, cancelable: !0 },
  ET = "FocusScope",
  op = w.forwardRef((e, t) => {
    const {
        loop: r = !1,
        trapped: i = !1,
        onMountAutoFocus: s,
        onUnmountAutoFocus: l,
        ...c
      } = e,
      [d, m] = w.useState(null),
      h = ua(s),
      y = ua(l),
      g = w.useRef(null),
      v = sn(t, (E) => m(E)),
      _ = w.useRef({
        paused: !1,
        pause() {
          this.paused = !0;
        },
        resume() {
          this.paused = !1;
        },
      }).current;
    (w.useEffect(() => {
      if (i) {
        let E = function (D) {
            if (_.paused || !d) return;
            const B = D.target;
            d.contains(B) ? (g.current = B) : $a(g.current, { select: !0 });
          },
          x = function (D) {
            if (_.paused || !d) return;
            const B = D.relatedTarget;
            B !== null && (d.contains(B) || $a(g.current, { select: !0 }));
          },
          T = function (D) {
            if (document.activeElement === document.body)
              for (const k of D) k.removedNodes.length > 0 && $a(d);
          };
        (document.addEventListener("focusin", E),
          document.addEventListener("focusout", x));
        const P = new MutationObserver(T);
        return (
          d && P.observe(d, { childList: !0, subtree: !0 }),
          () => {
            (document.removeEventListener("focusin", E),
              document.removeEventListener("focusout", x),
              P.disconnect());
          }
        );
      }
    }, [i, d, _.paused]),
      w.useEffect(() => {
        if (d) {
          Tb.add(_);
          const E = document.activeElement;
          if (!d.contains(E)) {
            const T = new CustomEvent(jh, Ab);
            (d.addEventListener(jh, h),
              d.dispatchEvent(T),
              T.defaultPrevented ||
                (xT(TT(v2(d)), { select: !0 }),
                document.activeElement === E && $a(d)));
          }
          return () => {
            (d.removeEventListener(jh, h),
              setTimeout(() => {
                const T = new CustomEvent(Lh, Ab);
                (d.addEventListener(Lh, y),
                  d.dispatchEvent(T),
                  T.defaultPrevented || $a(E ?? document.body, { select: !0 }),
                  d.removeEventListener(Lh, y),
                  Tb.remove(_));
              }, 0));
          };
        }
      }, [d, h, y, _]));
    const S = w.useCallback(
      (E) => {
        if ((!r && !i) || _.paused) return;
        const x = E.key === "Tab" && !E.altKey && !E.ctrlKey && !E.metaKey,
          T = document.activeElement;
        if (x && T) {
          const P = E.currentTarget,
            [D, B] = RT(P);
          D && B
            ? !E.shiftKey && T === B
              ? (E.preventDefault(), r && $a(D, { select: !0 }))
              : E.shiftKey &&
                T === D &&
                (E.preventDefault(), r && $a(B, { select: !0 }))
            : T === P && E.preventDefault();
        }
      },
      [r, i, _.paused],
    );
    return j.jsx(Pt.div, { tabIndex: -1, ...c, ref: v, onKeyDown: S });
  });
op.displayName = ET;
function xT(e, { select: t = !1 } = {}) {
  const r = document.activeElement;
  for (const i of e)
    if (($a(i, { select: t }), document.activeElement !== r)) return;
}
function RT(e) {
  const t = v2(e),
    r = Cb(t, e),
    i = Cb(t.reverse(), e);
  return [r, i];
}
function v2(e) {
  const t = [],
    r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (i) => {
        const s = i.tagName === "INPUT" && i.type === "hidden";
        return i.disabled || i.hidden || s
          ? NodeFilter.FILTER_SKIP
          : i.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
      },
    });
  for (; r.nextNode(); ) t.push(r.currentNode);
  return t;
}
function Cb(e, t) {
  for (const r of e) if (!OT(r, { upTo: t })) return r;
}
function OT(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function AT(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function $a(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const r = document.activeElement;
    (e.focus({ preventScroll: !0 }), e !== r && AT(e) && t && e.select());
  }
}
var Tb = CT();
function CT() {
  let e = [];
  return {
    add(t) {
      const r = e[0];
      (t !== r && r?.pause(), (e = Db(e, t)), e.unshift(t));
    },
    remove(t) {
      ((e = Db(e, t)), e[0]?.resume());
    },
  };
}
function Db(e, t) {
  const r = [...e],
    i = r.indexOf(t);
  return (i !== -1 && r.splice(i, 1), r);
}
function TT(e) {
  return e.filter((t) => t.tagName !== "A");
}
var DT = "Portal",
  sp = w.forwardRef((e, t) => {
    const { container: r, ...i } = e,
      [s, l] = w.useState(!1);
    Ya(() => l(!0), []);
    const c = r || (s && globalThis?.document?.body);
    return c ? dC.createPortal(j.jsx(Pt.div, { ...i, ref: t }), c) : null;
  });
sp.displayName = DT;
function MT(e, t) {
  return w.useReducer((r, i) => t[r][i] ?? r, e);
}
var Wa = (e) => {
  const { present: t, children: r } = e,
    i = NT(t),
    s =
      typeof r == "function" ? r({ present: i.isPresent }) : w.Children.only(r),
    l = sn(i.ref, zT(s));
  return typeof r == "function" || i.isPresent
    ? w.cloneElement(s, { ref: l })
    : null;
};
Wa.displayName = "Presence";
function NT(e) {
  const [t, r] = w.useState(),
    i = w.useRef(null),
    s = w.useRef(e),
    l = w.useRef("none"),
    c = e ? "mounted" : "unmounted",
    [d, m] = MT(c, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    w.useEffect(() => {
      const h = Yu(i.current);
      l.current = d === "mounted" ? h : "none";
    }, [d]),
    Ya(() => {
      const h = i.current,
        y = s.current;
      if (y !== e) {
        const v = l.current,
          _ = Yu(h);
        (e
          ? m("MOUNT")
          : _ === "none" || h?.display === "none"
            ? m("UNMOUNT")
            : m(y && v !== _ ? "ANIMATION_OUT" : "UNMOUNT"),
          (s.current = e));
      }
    }, [e, m]),
    Ya(() => {
      if (t) {
        let h;
        const y = t.ownerDocument.defaultView ?? window,
          g = (_) => {
            const E = Yu(i.current).includes(CSS.escape(_.animationName));
            if (_.target === t && E && (m("ANIMATION_END"), !s.current)) {
              const x = t.style.animationFillMode;
              ((t.style.animationFillMode = "forwards"),
                (h = y.setTimeout(() => {
                  t.style.animationFillMode === "forwards" &&
                    (t.style.animationFillMode = x);
                })));
            }
          },
          v = (_) => {
            _.target === t && (l.current = Yu(i.current));
          };
        return (
          t.addEventListener("animationstart", v),
          t.addEventListener("animationcancel", g),
          t.addEventListener("animationend", g),
          () => {
            (y.clearTimeout(h),
              t.removeEventListener("animationstart", v),
              t.removeEventListener("animationcancel", g),
              t.removeEventListener("animationend", g));
          }
        );
      } else m("ANIMATION_END");
    }, [t, m]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(d),
      ref: w.useCallback((h) => {
        ((i.current = h ? getComputedStyle(h) : null), r(h));
      }, []),
    }
  );
}
function Yu(e) {
  return e?.animationName || "none";
}
function zT(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
    r = t && "isReactWarning" in t && t.isReactWarning;
  return r
    ? e.ref
    : ((t = Object.getOwnPropertyDescriptor(e, "ref")?.get),
      (r = t && "isReactWarning" in t && t.isReactWarning),
      r ? e.props.ref : e.props.ref || e.ref);
}
var Uh = 0;
function b2() {
  w.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return (
      document.body.insertAdjacentElement("afterbegin", e[0] ?? Mb()),
      document.body.insertAdjacentElement("beforeend", e[1] ?? Mb()),
      Uh++,
      () => {
        (Uh === 1 &&
          document
            .querySelectorAll("[data-radix-focus-guard]")
            .forEach((t) => t.remove()),
          Uh--);
      }
    );
  }, []);
}
function Mb() {
  const e = document.createElement("span");
  return (
    e.setAttribute("data-radix-focus-guard", ""),
    (e.tabIndex = 0),
    (e.style.outline = "none"),
    (e.style.opacity = "0"),
    (e.style.position = "fixed"),
    (e.style.pointerEvents = "none"),
    e
  );
}
var Or = function () {
  return (
    (Or =
      Object.assign ||
      function (t) {
        for (var r, i = 1, s = arguments.length; i < s; i++) {
          r = arguments[i];
          for (var l in r)
            Object.prototype.hasOwnProperty.call(r, l) && (t[l] = r[l]);
        }
        return t;
      }),
    Or.apply(this, arguments)
  );
};
function w2(e, t) {
  var r = {};
  for (var i in e)
    Object.prototype.hasOwnProperty.call(e, i) &&
      t.indexOf(i) < 0 &&
      (r[i] = e[i]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, i = Object.getOwnPropertySymbols(e); s < i.length; s++)
      t.indexOf(i[s]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, i[s]) &&
        (r[i[s]] = e[i[s]]);
  return r;
}
function kT(e, t, r) {
  if (r || arguments.length === 2)
    for (var i = 0, s = t.length, l; i < s; i++)
      (l || !(i in t)) &&
        (l || (l = Array.prototype.slice.call(t, 0, i)), (l[i] = t[i]));
  return e.concat(l || Array.prototype.slice.call(t));
}
var hc = "right-scroll-bar-position",
  mc = "width-before-scroll-bar",
  jT = "with-scroll-bars-hidden",
  LT = "--removed-body-scroll-bar-size";
function Ph(e, t) {
  return (typeof e == "function" ? e(t) : e && (e.current = t), e);
}
function UT(e, t) {
  var r = w.useState(function () {
    return {
      value: e,
      callback: t,
      facade: {
        get current() {
          return r.value;
        },
        set current(i) {
          var s = r.value;
          s !== i && ((r.value = i), r.callback(i, s));
        },
      },
    };
  })[0];
  return ((r.callback = t), r.facade);
}
var PT = typeof window < "u" ? w.useLayoutEffect : w.useEffect,
  Nb = new WeakMap();
function FT(e, t) {
  var r = UT(null, function (i) {
    return e.forEach(function (s) {
      return Ph(s, i);
    });
  });
  return (
    PT(
      function () {
        var i = Nb.get(r);
        if (i) {
          var s = new Set(i),
            l = new Set(e),
            c = r.current;
          (s.forEach(function (d) {
            l.has(d) || Ph(d, null);
          }),
            l.forEach(function (d) {
              s.has(d) || Ph(d, c);
            }));
        }
        Nb.set(r, e);
      },
      [e],
    ),
    r
  );
}
function BT(e) {
  return e;
}
function VT(e, t) {
  t === void 0 && (t = BT);
  var r = [],
    i = !1,
    s = {
      read: function () {
        if (i)
          throw new Error(
            "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.",
          );
        return r.length ? r[r.length - 1] : e;
      },
      useMedium: function (l) {
        var c = t(l, i);
        return (
          r.push(c),
          function () {
            r = r.filter(function (d) {
              return d !== c;
            });
          }
        );
      },
      assignSyncMedium: function (l) {
        for (i = !0; r.length; ) {
          var c = r;
          ((r = []), c.forEach(l));
        }
        r = {
          push: function (d) {
            return l(d);
          },
          filter: function () {
            return r;
          },
        };
      },
      assignMedium: function (l) {
        i = !0;
        var c = [];
        if (r.length) {
          var d = r;
          ((r = []), d.forEach(l), (c = r));
        }
        var m = function () {
            var y = c;
            ((c = []), y.forEach(l));
          },
          h = function () {
            return Promise.resolve().then(m);
          };
        (h(),
          (r = {
            push: function (y) {
              (c.push(y), h());
            },
            filter: function (y) {
              return ((c = c.filter(y)), r);
            },
          }));
      },
    };
  return s;
}
function $T(e) {
  e === void 0 && (e = {});
  var t = VT(null);
  return ((t.options = Or({ async: !0, ssr: !1 }, e)), t);
}
var S2 = function (e) {
  var t = e.sideCar,
    r = w2(e, ["sideCar"]);
  if (!t)
    throw new Error(
      "Sidecar: please provide `sideCar` property to import the right car",
    );
  var i = t.read();
  if (!i) throw new Error("Sidecar medium not found");
  return w.createElement(i, Or({}, r));
};
S2.isSideCarExport = !0;
function HT(e, t) {
  return (e.useMedium(t), S2);
}
var _2 = $T(),
  Fh = function () {},
  Yc = w.forwardRef(function (e, t) {
    var r = w.useRef(null),
      i = w.useState({
        onScrollCapture: Fh,
        onWheelCapture: Fh,
        onTouchMoveCapture: Fh,
      }),
      s = i[0],
      l = i[1],
      c = e.forwardProps,
      d = e.children,
      m = e.className,
      h = e.removeScrollBar,
      y = e.enabled,
      g = e.shards,
      v = e.sideCar,
      _ = e.noRelative,
      S = e.noIsolation,
      E = e.inert,
      x = e.allowPinchZoom,
      T = e.as,
      P = T === void 0 ? "div" : T,
      D = e.gapMode,
      B = w2(e, [
        "forwardProps",
        "children",
        "className",
        "removeScrollBar",
        "enabled",
        "shards",
        "sideCar",
        "noRelative",
        "noIsolation",
        "inert",
        "allowPinchZoom",
        "as",
        "gapMode",
      ]),
      k = v,
      C = FT([r, t]),
      Y = Or(Or({}, B), s);
    return w.createElement(
      w.Fragment,
      null,
      y &&
        w.createElement(k, {
          sideCar: _2,
          removeScrollBar: h,
          shards: g,
          noRelative: _,
          noIsolation: S,
          inert: E,
          setCallbacks: l,
          allowPinchZoom: !!x,
          lockRef: r,
          gapMode: D,
        }),
      c
        ? w.cloneElement(w.Children.only(d), Or(Or({}, Y), { ref: C }))
        : w.createElement(P, Or({}, Y, { className: m, ref: C }), d),
    );
  });
Yc.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
Yc.classNames = { fullWidth: mc, zeroRight: hc };
var IT = function () {
  if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
function ZT() {
  if (!document) return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = IT();
  return (t && e.setAttribute("nonce", t), e);
}
function qT(e, t) {
  e.styleSheet
    ? (e.styleSheet.cssText = t)
    : e.appendChild(document.createTextNode(t));
}
function GT(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var YT = function () {
    var e = 0,
      t = null;
    return {
      add: function (r) {
        (e == 0 && (t = ZT()) && (qT(t, r), GT(t)), e++);
      },
      remove: function () {
        (e--,
          !e && t && (t.parentNode && t.parentNode.removeChild(t), (t = null)));
      },
    };
  },
  KT = function () {
    var e = YT();
    return function (t, r) {
      w.useEffect(
        function () {
          return (
            e.add(t),
            function () {
              e.remove();
            }
          );
        },
        [t && r],
      );
    };
  },
  E2 = function () {
    var e = KT(),
      t = function (r) {
        var i = r.styles,
          s = r.dynamic;
        return (e(i, s), null);
      };
    return t;
  },
  QT = { left: 0, top: 0, right: 0, gap: 0 },
  Bh = function (e) {
    return parseInt(e || "", 10) || 0;
  },
  XT = function (e) {
    var t = window.getComputedStyle(document.body),
      r = t[e === "padding" ? "paddingLeft" : "marginLeft"],
      i = t[e === "padding" ? "paddingTop" : "marginTop"],
      s = t[e === "padding" ? "paddingRight" : "marginRight"];
    return [Bh(r), Bh(i), Bh(s)];
  },
  JT = function (e) {
    if ((e === void 0 && (e = "margin"), typeof window > "u")) return QT;
    var t = XT(e),
      r = document.documentElement.clientWidth,
      i = window.innerWidth;
    return {
      left: t[0],
      top: t[1],
      right: t[2],
      gap: Math.max(0, i - r + t[2] - t[0]),
    };
  },
  WT = E2(),
  ko = "data-scroll-locked",
  eD = function (e, t, r, i) {
    var s = e.left,
      l = e.top,
      c = e.right,
      d = e.gap;
    return (
      r === void 0 && (r = "margin"),
      `
  .`
        .concat(
          jT,
          ` {
   overflow: hidden `,
        )
        .concat(
          i,
          `;
   padding-right: `,
        )
        .concat(d, "px ")
        .concat(
          i,
          `;
  }
  body[`,
        )
        .concat(
          ko,
          `] {
    overflow: hidden `,
        )
        .concat(
          i,
          `;
    overscroll-behavior: contain;
    `,
        )
        .concat(
          [
            t && "position: relative ".concat(i, ";"),
            r === "margin" &&
              `
    padding-left: `
                .concat(
                  s,
                  `px;
    padding-top: `,
                )
                .concat(
                  l,
                  `px;
    padding-right: `,
                )
                .concat(
                  c,
                  `px;
    margin-left:0;
    margin-top:0;
    margin-right: `,
                )
                .concat(d, "px ")
                .concat(
                  i,
                  `;
    `,
                ),
            r === "padding" &&
              "padding-right: ".concat(d, "px ").concat(i, ";"),
          ]
            .filter(Boolean)
            .join(""),
          `
  }
  
  .`,
        )
        .concat(
          hc,
          ` {
    right: `,
        )
        .concat(d, "px ")
        .concat(
          i,
          `;
  }
  
  .`,
        )
        .concat(
          mc,
          ` {
    margin-right: `,
        )
        .concat(d, "px ")
        .concat(
          i,
          `;
  }
  
  .`,
        )
        .concat(hc, " .")
        .concat(
          hc,
          ` {
    right: 0 `,
        )
        .concat(
          i,
          `;
  }
  
  .`,
        )
        .concat(mc, " .")
        .concat(
          mc,
          ` {
    margin-right: 0 `,
        )
        .concat(
          i,
          `;
  }
  
  body[`,
        )
        .concat(
          ko,
          `] {
    `,
        )
        .concat(LT, ": ")
        .concat(
          d,
          `px;
  }
`,
        )
    );
  },
  zb = function () {
    var e = parseInt(document.body.getAttribute(ko) || "0", 10);
    return isFinite(e) ? e : 0;
  },
  tD = function () {
    w.useEffect(function () {
      return (
        document.body.setAttribute(ko, (zb() + 1).toString()),
        function () {
          var e = zb() - 1;
          e <= 0
            ? document.body.removeAttribute(ko)
            : document.body.setAttribute(ko, e.toString());
        }
      );
    }, []);
  },
  nD = function (e) {
    var t = e.noRelative,
      r = e.noImportant,
      i = e.gapMode,
      s = i === void 0 ? "margin" : i;
    tD();
    var l = w.useMemo(
      function () {
        return JT(s);
      },
      [s],
    );
    return w.createElement(WT, { styles: eD(l, !t, s, r ? "" : "!important") });
  },
  mm = !1;
if (typeof window < "u")
  try {
    var Ku = Object.defineProperty({}, "passive", {
      get: function () {
        return ((mm = !0), !0);
      },
    });
    (window.addEventListener("test", Ku, Ku),
      window.removeEventListener("test", Ku, Ku));
  } catch {
    mm = !1;
  }
var Oo = mm ? { passive: !1 } : !1,
  rD = function (e) {
    return e.tagName === "TEXTAREA";
  },
  x2 = function (e, t) {
    if (!(e instanceof Element)) return !1;
    var r = window.getComputedStyle(e);
    return (
      r[t] !== "hidden" &&
      !(r.overflowY === r.overflowX && !rD(e) && r[t] === "visible")
    );
  },
  aD = function (e) {
    return x2(e, "overflowY");
  },
  iD = function (e) {
    return x2(e, "overflowX");
  },
  kb = function (e, t) {
    var r = t.ownerDocument,
      i = t;
    do {
      typeof ShadowRoot < "u" && i instanceof ShadowRoot && (i = i.host);
      var s = R2(e, i);
      if (s) {
        var l = O2(e, i),
          c = l[1],
          d = l[2];
        if (c > d) return !0;
      }
      i = i.parentNode;
    } while (i && i !== r.body);
    return !1;
  },
  oD = function (e) {
    var t = e.scrollTop,
      r = e.scrollHeight,
      i = e.clientHeight;
    return [t, r, i];
  },
  sD = function (e) {
    var t = e.scrollLeft,
      r = e.scrollWidth,
      i = e.clientWidth;
    return [t, r, i];
  },
  R2 = function (e, t) {
    return e === "v" ? aD(t) : iD(t);
  },
  O2 = function (e, t) {
    return e === "v" ? oD(t) : sD(t);
  },
  lD = function (e, t) {
    return e === "h" && t === "rtl" ? -1 : 1;
  },
  uD = function (e, t, r, i, s) {
    var l = lD(e, window.getComputedStyle(t).direction),
      c = l * i,
      d = r.target,
      m = t.contains(d),
      h = !1,
      y = c > 0,
      g = 0,
      v = 0;
    do {
      if (!d) break;
      var _ = O2(e, d),
        S = _[0],
        E = _[1],
        x = _[2],
        T = E - x - l * S;
      (S || T) && R2(e, d) && ((g += T), (v += S));
      var P = d.parentNode;
      d = P && P.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? P.host : P;
    } while ((!m && d !== document.body) || (m && (t.contains(d) || t === d)));
    return (((y && Math.abs(g) < 1) || (!y && Math.abs(v) < 1)) && (h = !0), h);
  },
  Qu = function (e) {
    return "changedTouches" in e
      ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
      : [0, 0];
  },
  jb = function (e) {
    return [e.deltaX, e.deltaY];
  },
  Lb = function (e) {
    return e && "current" in e ? e.current : e;
  },
  cD = function (e, t) {
    return e[0] === t[0] && e[1] === t[1];
  },
  fD = function (e) {
    return `
  .block-interactivity-`
      .concat(
        e,
        ` {pointer-events: none;}
  .allow-interactivity-`,
      )
      .concat(
        e,
        ` {pointer-events: all;}
`,
      );
  },
  dD = 0,
  Ao = [];
function hD(e) {
  var t = w.useRef([]),
    r = w.useRef([0, 0]),
    i = w.useRef(),
    s = w.useState(dD++)[0],
    l = w.useState(E2)[0],
    c = w.useRef(e);
  (w.useEffect(
    function () {
      c.current = e;
    },
    [e],
  ),
    w.useEffect(
      function () {
        if (e.inert) {
          document.body.classList.add("block-interactivity-".concat(s));
          var E = kT([e.lockRef.current], (e.shards || []).map(Lb), !0).filter(
            Boolean,
          );
          return (
            E.forEach(function (x) {
              return x.classList.add("allow-interactivity-".concat(s));
            }),
            function () {
              (document.body.classList.remove("block-interactivity-".concat(s)),
                E.forEach(function (x) {
                  return x.classList.remove("allow-interactivity-".concat(s));
                }));
            }
          );
        }
      },
      [e.inert, e.lockRef.current, e.shards],
    ));
  var d = w.useCallback(function (E, x) {
      if (
        ("touches" in E && E.touches.length === 2) ||
        (E.type === "wheel" && E.ctrlKey)
      )
        return !c.current.allowPinchZoom;
      var T = Qu(E),
        P = r.current,
        D = "deltaX" in E ? E.deltaX : P[0] - T[0],
        B = "deltaY" in E ? E.deltaY : P[1] - T[1],
        k,
        C = E.target,
        Y = Math.abs(D) > Math.abs(B) ? "h" : "v";
      if ("touches" in E && Y === "h" && C.type === "range") return !1;
      var Q = kb(Y, C);
      if (!Q) return !0;
      if ((Q ? (k = Y) : ((k = Y === "v" ? "h" : "v"), (Q = kb(Y, C))), !Q))
        return !1;
      if (
        (!i.current && "changedTouches" in E && (D || B) && (i.current = k), !k)
      )
        return !0;
      var me = i.current || k;
      return uD(me, x, E, me === "h" ? D : B);
    }, []),
    m = w.useCallback(function (E) {
      var x = E;
      if (!(!Ao.length || Ao[Ao.length - 1] !== l)) {
        var T = "deltaY" in x ? jb(x) : Qu(x),
          P = t.current.filter(function (k) {
            return (
              k.name === x.type &&
              (k.target === x.target || x.target === k.shadowParent) &&
              cD(k.delta, T)
            );
          })[0];
        if (P && P.should) {
          x.cancelable && x.preventDefault();
          return;
        }
        if (!P) {
          var D = (c.current.shards || [])
              .map(Lb)
              .filter(Boolean)
              .filter(function (k) {
                return k.contains(x.target);
              }),
            B = D.length > 0 ? d(x, D[0]) : !c.current.noIsolation;
          B && x.cancelable && x.preventDefault();
        }
      }
    }, []),
    h = w.useCallback(function (E, x, T, P) {
      var D = { name: E, delta: x, target: T, should: P, shadowParent: mD(T) };
      (t.current.push(D),
        setTimeout(function () {
          t.current = t.current.filter(function (B) {
            return B !== D;
          });
        }, 1));
    }, []),
    y = w.useCallback(function (E) {
      ((r.current = Qu(E)), (i.current = void 0));
    }, []),
    g = w.useCallback(function (E) {
      h(E.type, jb(E), E.target, d(E, e.lockRef.current));
    }, []),
    v = w.useCallback(function (E) {
      h(E.type, Qu(E), E.target, d(E, e.lockRef.current));
    }, []);
  w.useEffect(function () {
    return (
      Ao.push(l),
      e.setCallbacks({
        onScrollCapture: g,
        onWheelCapture: g,
        onTouchMoveCapture: v,
      }),
      document.addEventListener("wheel", m, Oo),
      document.addEventListener("touchmove", m, Oo),
      document.addEventListener("touchstart", y, Oo),
      function () {
        ((Ao = Ao.filter(function (E) {
          return E !== l;
        })),
          document.removeEventListener("wheel", m, Oo),
          document.removeEventListener("touchmove", m, Oo),
          document.removeEventListener("touchstart", y, Oo));
      }
    );
  }, []);
  var _ = e.removeScrollBar,
    S = e.inert;
  return w.createElement(
    w.Fragment,
    null,
    S ? w.createElement(l, { styles: fD(s) }) : null,
    _
      ? w.createElement(nD, { noRelative: e.noRelative, gapMode: e.gapMode })
      : null,
  );
}
function mD(e) {
  for (var t = null; e !== null; )
    (e instanceof ShadowRoot && ((t = e.host), (e = e.host)),
      (e = e.parentNode));
  return t;
}
const pD = HT(_2, hD);
var lp = w.forwardRef(function (e, t) {
  return w.createElement(Yc, Or({}, e, { ref: t, sideCar: pD }));
});
lp.classNames = Yc.classNames;
var yD = function (e) {
    if (typeof document > "u") return null;
    var t = Array.isArray(e) ? e[0] : e;
    return t.ownerDocument.body;
  },
  Co = new WeakMap(),
  Xu = new WeakMap(),
  Ju = {},
  Vh = 0,
  A2 = function (e) {
    return e && (e.host || A2(e.parentNode));
  },
  gD = function (e, t) {
    return t
      .map(function (r) {
        if (e.contains(r)) return r;
        var i = A2(r);
        return i && e.contains(i)
          ? i
          : (console.error(
              "aria-hidden",
              r,
              "in not contained inside",
              e,
              ". Doing nothing",
            ),
            null);
      })
      .filter(function (r) {
        return !!r;
      });
  },
  vD = function (e, t, r, i) {
    var s = gD(t, Array.isArray(e) ? e : [e]);
    Ju[r] || (Ju[r] = new WeakMap());
    var l = Ju[r],
      c = [],
      d = new Set(),
      m = new Set(s),
      h = function (g) {
        !g || d.has(g) || (d.add(g), h(g.parentNode));
      };
    s.forEach(h);
    var y = function (g) {
      !g ||
        m.has(g) ||
        Array.prototype.forEach.call(g.children, function (v) {
          if (d.has(v)) y(v);
          else
            try {
              var _ = v.getAttribute(i),
                S = _ !== null && _ !== "false",
                E = (Co.get(v) || 0) + 1,
                x = (l.get(v) || 0) + 1;
              (Co.set(v, E),
                l.set(v, x),
                c.push(v),
                E === 1 && S && Xu.set(v, !0),
                x === 1 && v.setAttribute(r, "true"),
                S || v.setAttribute(i, "true"));
            } catch (T) {
              console.error("aria-hidden: cannot operate on ", v, T);
            }
        });
    };
    return (
      y(t),
      d.clear(),
      Vh++,
      function () {
        (c.forEach(function (g) {
          var v = Co.get(g) - 1,
            _ = l.get(g) - 1;
          (Co.set(g, v),
            l.set(g, _),
            v || (Xu.has(g) || g.removeAttribute(i), Xu.delete(g)),
            _ || g.removeAttribute(r));
        }),
          Vh--,
          Vh ||
            ((Co = new WeakMap()),
            (Co = new WeakMap()),
            (Xu = new WeakMap()),
            (Ju = {})));
      }
    );
  },
  C2 = function (e, t, r) {
    r === void 0 && (r = "data-aria-hidden");
    var i = Array.from(Array.isArray(e) ? e : [e]),
      s = yD(e);
    return s
      ? (i.push.apply(i, Array.from(s.querySelectorAll("[aria-live], script"))),
        vD(i, s, r, "aria-hidden"))
      : function () {
          return null;
        };
  },
  Kc = "Dialog",
  [T2, Hj] = Io(Kc),
  [bD, yr] = T2(Kc),
  D2 = (e) => {
    const {
        __scopeDialog: t,
        children: r,
        open: i,
        defaultOpen: s,
        onOpenChange: l,
        modal: c = !0,
      } = e,
      d = w.useRef(null),
      m = w.useRef(null),
      [h, y] = ap({ prop: i, defaultProp: s ?? !1, onChange: l, caller: Kc });
    return j.jsx(bD, {
      scope: t,
      triggerRef: d,
      contentRef: m,
      contentId: zo(),
      titleId: zo(),
      descriptionId: zo(),
      open: h,
      onOpenChange: y,
      onOpenToggle: w.useCallback(() => y((g) => !g), [y]),
      modal: c,
      children: r,
    });
  };
D2.displayName = Kc;
var M2 = "DialogTrigger",
  N2 = w.forwardRef((e, t) => {
    const { __scopeDialog: r, ...i } = e,
      s = yr(M2, r),
      l = sn(t, s.triggerRef);
    return j.jsx(Pt.button, {
      type: "button",
      "aria-haspopup": "dialog",
      "aria-expanded": s.open,
      "aria-controls": s.contentId,
      "data-state": dp(s.open),
      ...i,
      ref: l,
      onClick: Ze(e.onClick, s.onOpenToggle),
    });
  });
N2.displayName = M2;
var up = "DialogPortal",
  [wD, z2] = T2(up, { forceMount: void 0 }),
  cp = (e) => {
    const { __scopeDialog: t, forceMount: r, children: i, container: s } = e,
      l = yr(up, t);
    return j.jsx(wD, {
      scope: t,
      forceMount: r,
      children: w.Children.map(i, (c) =>
        j.jsx(Wa, {
          present: r || l.open,
          children: j.jsx(sp, { asChild: !0, container: s, children: c }),
        }),
      ),
    });
  };
cp.displayName = up;
var Ac = "DialogOverlay",
  k2 = w.forwardRef((e, t) => {
    const r = z2(Ac, e.__scopeDialog),
      { forceMount: i = r.forceMount, ...s } = e,
      l = yr(Ac, e.__scopeDialog);
    return l.modal
      ? j.jsx(Wa, {
          present: i || l.open,
          children: j.jsx(_D, { ...s, ref: t }),
        })
      : null;
  });
k2.displayName = Ac;
var SD = dl("DialogOverlay.RemoveScroll"),
  _D = w.forwardRef((e, t) => {
    const { __scopeDialog: r, ...i } = e,
      s = yr(Ac, r);
    return j.jsx(lp, {
      as: SD,
      allowPinchZoom: !0,
      shards: [s.contentRef],
      children: j.jsx(Pt.div, {
        "data-state": dp(s.open),
        ...i,
        ref: t,
        style: { pointerEvents: "auto", ...i.style },
      }),
    });
  }),
  zi = "DialogContent",
  j2 = w.forwardRef((e, t) => {
    const r = z2(zi, e.__scopeDialog),
      { forceMount: i = r.forceMount, ...s } = e,
      l = yr(zi, e.__scopeDialog);
    return j.jsx(Wa, {
      present: i || l.open,
      children: l.modal
        ? j.jsx(ED, { ...s, ref: t })
        : j.jsx(xD, { ...s, ref: t }),
    });
  });
j2.displayName = zi;
var ED = w.forwardRef((e, t) => {
    const r = yr(zi, e.__scopeDialog),
      i = w.useRef(null),
      s = sn(t, r.contentRef, i);
    return (
      w.useEffect(() => {
        const l = i.current;
        if (l) return C2(l);
      }, []),
      j.jsx(L2, {
        ...e,
        ref: s,
        trapFocus: r.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: Ze(e.onCloseAutoFocus, (l) => {
          (l.preventDefault(), r.triggerRef.current?.focus());
        }),
        onPointerDownOutside: Ze(e.onPointerDownOutside, (l) => {
          const c = l.detail.originalEvent,
            d = c.button === 0 && c.ctrlKey === !0;
          (c.button === 2 || d) && l.preventDefault();
        }),
        onFocusOutside: Ze(e.onFocusOutside, (l) => l.preventDefault()),
      })
    );
  }),
  xD = w.forwardRef((e, t) => {
    const r = yr(zi, e.__scopeDialog),
      i = w.useRef(!1),
      s = w.useRef(!1);
    return j.jsx(L2, {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      onCloseAutoFocus: (l) => {
        (e.onCloseAutoFocus?.(l),
          l.defaultPrevented ||
            (i.current || r.triggerRef.current?.focus(), l.preventDefault()),
          (i.current = !1),
          (s.current = !1));
      },
      onInteractOutside: (l) => {
        (e.onInteractOutside?.(l),
          l.defaultPrevented ||
            ((i.current = !0),
            l.detail.originalEvent.type === "pointerdown" && (s.current = !0)));
        const c = l.target;
        (r.triggerRef.current?.contains(c) && l.preventDefault(),
          l.detail.originalEvent.type === "focusin" &&
            s.current &&
            l.preventDefault());
      },
    });
  }),
  L2 = w.forwardRef((e, t) => {
    const {
        __scopeDialog: r,
        trapFocus: i,
        onOpenAutoFocus: s,
        onCloseAutoFocus: l,
        ...c
      } = e,
      d = yr(zi, r),
      m = w.useRef(null),
      h = sn(t, m);
    return (
      b2(),
      j.jsxs(j.Fragment, {
        children: [
          j.jsx(op, {
            asChild: !0,
            loop: !0,
            trapped: i,
            onMountAutoFocus: s,
            onUnmountAutoFocus: l,
            children: j.jsx(ip, {
              role: "dialog",
              id: d.contentId,
              "aria-describedby": d.descriptionId,
              "aria-labelledby": d.titleId,
              "data-state": dp(d.open),
              ...c,
              ref: h,
              onDismiss: () => d.onOpenChange(!1),
            }),
          }),
          j.jsxs(j.Fragment, {
            children: [
              j.jsx(AD, { titleId: d.titleId }),
              j.jsx(TD, { contentRef: m, descriptionId: d.descriptionId }),
            ],
          }),
        ],
      })
    );
  }),
  fp = "DialogTitle",
  RD = w.forwardRef((e, t) => {
    const { __scopeDialog: r, ...i } = e,
      s = yr(fp, r);
    return j.jsx(Pt.h2, { id: s.titleId, ...i, ref: t });
  });
RD.displayName = fp;
var U2 = "DialogDescription",
  OD = w.forwardRef((e, t) => {
    const { __scopeDialog: r, ...i } = e,
      s = yr(U2, r);
    return j.jsx(Pt.p, { id: s.descriptionId, ...i, ref: t });
  });
OD.displayName = U2;
var P2 = "DialogClose",
  F2 = w.forwardRef((e, t) => {
    const { __scopeDialog: r, ...i } = e,
      s = yr(P2, r);
    return j.jsx(Pt.button, {
      type: "button",
      ...i,
      ref: t,
      onClick: Ze(e.onClick, () => s.onOpenChange(!1)),
    });
  });
F2.displayName = P2;
function dp(e) {
  return e ? "open" : "closed";
}
var B2 = "DialogTitleWarning",
  [Ij, V2] = nT(B2, { contentName: zi, titleName: fp, docsSlug: "dialog" }),
  AD = ({ titleId: e }) => {
    const t = V2(B2),
      r = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
    return (
      w.useEffect(() => {
        e && (document.getElementById(e) || console.error(r));
      }, [r, e]),
      null
    );
  },
  CD = "DialogDescriptionWarning",
  TD = ({ contentRef: e, descriptionId: t }) => {
    const i = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${V2(CD).contentName}}.`;
    return (
      w.useEffect(() => {
        const s = e.current?.getAttribute("aria-describedby");
        t && s && (document.getElementById(t) || console.warn(i));
      }, [i, e, t]),
      null
    );
  },
  DD = D2,
  MD = N2,
  ND = cp,
  zD = k2,
  kD = j2,
  $2 = F2;
function hp(...e) {
  return m2(r2(e));
}
function Qc({ ...e }) {
  return j.jsx(DD, { "data-slot": "dialog", ...e });
}
function mp({ ...e }) {
  return j.jsx(ND, { "data-slot": "dialog-portal", ...e });
}
function jD({ className: e, ...t }) {
  return j.jsx(zD, {
    "data-slot": "dialog-overlay",
    className: hp(
      "fixed inset-0 z-[999] bg-black/60",
      "data-[state=open]:animate-in data-[state=closed]:animate-out",
      "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e,
    ),
    ...t,
  });
}
function Xc({ className: e, children: t, showCloseButton: r = !0, ...i }) {
  return j.jsxs(mp, {
    children: [
      j.jsx(jD, {}),
      j.jsxs(kD, {
        "data-slot": "dialog-content",
        className: hp(
          "fixed left-1/2 top-1/2 z-[999] -translate-x-1/2 -translate-y-1/2",
          "bg-bg-white rounded-xl shadow-2xl",
          "w-full max-w-lg max-h-[85vh] overflow-y-auto",
          "data-[state=open]:animate-in data-[state=closed]:animate-out",
          "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
          "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
          "focus:outline-none",
          e,
        ),
        ...i,
        children: [
          t,
          r &&
            j.jsx($2, {
              "aria-label": "close",
              className:
                "absolute right-7 top-7 p-2 cursor-pointer hover:opacity-70 transition-opacity",
              children: j.jsx("img", { src: gC, alt: "close" }),
            }),
        ],
      }),
    ],
  });
}
function Jc({ ...e }) {
  return j.jsx(MD, { "data-slot": "dialog-trigger", ...e });
}
const LD = $2;
function UD() {
  const e = () => {
    try {
      const t = String(void 0),
        r = String(void 0),
        i = `https://kauth.kakao.com/oauth/authorize?client_id=${t}&redirect_uri=${r}&response_type=code`;
      window.location.href = i;
    } catch (t) {
      console.error("카카오 로그인 오류:", t);
    }
  };
  return j.jsxs(Qc, {
    children: [
      j.jsx(cp, {}),
      j.jsx(Jc, {
        asChild: !0,
        children: j.jsx(Lo, { variant: "gray", children: "로그인" }),
      }),
      j.jsx(Xc, {
        className: "w-150",
        children: j.jsxs("div", {
          className: "px-20 py-22.5 flex flex-col gap-10",
          children: [
            j.jsxs("div", {
              className: "flex flex-col gap-4",
              children: [
                j.jsx("div", {
                  className: "text-4xl font-bold text-scale-600",
                  children: "로그인",
                }),
                j.jsx("div", {
                  className: "text-lg text-scale-400",
                  children: "처음이면 자동 회원가입 후 이용할 수 있어요.",
                }),
              ],
            }),
            j.jsxs(Lo, {
              variant: "kakao",
              onClick: e,
              className: "flex items-center justify-center gap-2",
              children: [
                j.jsx("img", { src: vC, className: "w-8 h-8" }),
                "카카오로 시작하기",
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
function H2(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: PD } = Object.prototype,
  { getPrototypeOf: pp } = Object,
  { iterator: Wc, toStringTag: I2 } = Symbol,
  ef = ((e) => (t) => {
    const r = PD.call(t);
    return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  gr = (e) => ((e = e.toLowerCase()), (t) => ef(t) === e),
  tf = (e) => (t) => typeof t === e,
  { isArray: Zo } = Array,
  Uo = tf("undefined");
function El(e) {
  return (
    e !== null &&
    !Uo(e) &&
    e.constructor !== null &&
    !Uo(e.constructor) &&
    An(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const Z2 = gr("ArrayBuffer");
function FD(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && Z2(e.buffer)),
    t
  );
}
const BD = tf("string"),
  An = tf("function"),
  q2 = tf("number"),
  xl = (e) => e !== null && typeof e == "object",
  VD = (e) => e === !0 || e === !1,
  pc = (e) => {
    if (ef(e) !== "object") return !1;
    const t = pp(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(I2 in e) &&
      !(Wc in e)
    );
  },
  $D = (e) => {
    if (!xl(e) || El(e)) return !1;
    try {
      return (
        Object.keys(e).length === 0 &&
        Object.getPrototypeOf(e) === Object.prototype
      );
    } catch {
      return !1;
    }
  },
  HD = gr("Date"),
  ID = gr("File"),
  ZD = gr("Blob"),
  qD = gr("FileList"),
  GD = (e) => xl(e) && An(e.pipe),
  YD = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        (An(e.append) &&
          ((t = ef(e)) === "formdata" ||
            (t === "object" &&
              An(e.toString) &&
              e.toString() === "[object FormData]"))))
    );
  },
  KD = gr("URLSearchParams"),
  [QD, XD, JD, WD] = ["ReadableStream", "Request", "Response", "Headers"].map(
    gr,
  ),
  eM = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Rl(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let i, s;
  if ((typeof e != "object" && (e = [e]), Zo(e)))
    for (i = 0, s = e.length; i < s; i++) t.call(null, e[i], i, e);
  else {
    if (El(e)) return;
    const l = r ? Object.getOwnPropertyNames(e) : Object.keys(e),
      c = l.length;
    let d;
    for (i = 0; i < c; i++) ((d = l[i]), t.call(null, e[d], d, e));
  }
}
function G2(e, t) {
  if (El(e)) return null;
  t = t.toLowerCase();
  const r = Object.keys(e);
  let i = r.length,
    s;
  for (; i-- > 0; ) if (((s = r[i]), t === s.toLowerCase())) return s;
  return null;
}
const Ci =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
        ? self
        : typeof window < "u"
          ? window
          : global,
  Y2 = (e) => !Uo(e) && e !== Ci;
function pm() {
  const { caseless: e, skipUndefined: t } = (Y2(this) && this) || {},
    r = {},
    i = (s, l) => {
      const c = (e && G2(r, l)) || l;
      pc(r[c]) && pc(s)
        ? (r[c] = pm(r[c], s))
        : pc(s)
          ? (r[c] = pm({}, s))
          : Zo(s)
            ? (r[c] = s.slice())
            : (!t || !Uo(s)) && (r[c] = s);
    };
  for (let s = 0, l = arguments.length; s < l; s++)
    arguments[s] && Rl(arguments[s], i);
  return r;
}
const tM = (e, t, r, { allOwnKeys: i } = {}) => (
    Rl(
      t,
      (s, l) => {
        r && An(s) ? (e[l] = H2(s, r)) : (e[l] = s);
      },
      { allOwnKeys: i },
    ),
    e
  ),
  nM = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  rM = (e, t, r, i) => {
    ((e.prototype = Object.create(t.prototype, i)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      r && Object.assign(e.prototype, r));
  },
  aM = (e, t, r, i) => {
    let s, l, c;
    const d = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (s = Object.getOwnPropertyNames(e), l = s.length; l-- > 0; )
        ((c = s[l]),
          (!i || i(c, e, t)) && !d[c] && ((t[c] = e[c]), (d[c] = !0)));
      e = r !== !1 && pp(e);
    } while (e && (!r || r(e, t)) && e !== Object.prototype);
    return t;
  },
  iM = (e, t, r) => {
    ((e = String(e)),
      (r === void 0 || r > e.length) && (r = e.length),
      (r -= t.length));
    const i = e.indexOf(t, r);
    return i !== -1 && i === r;
  },
  oM = (e) => {
    if (!e) return null;
    if (Zo(e)) return e;
    let t = e.length;
    if (!q2(t)) return null;
    const r = new Array(t);
    for (; t-- > 0; ) r[t] = e[t];
    return r;
  },
  sM = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && pp(Uint8Array)),
  lM = (e, t) => {
    const i = (e && e[Wc]).call(e);
    let s;
    for (; (s = i.next()) && !s.done; ) {
      const l = s.value;
      t.call(e, l[0], l[1]);
    }
  },
  uM = (e, t) => {
    let r;
    const i = [];
    for (; (r = e.exec(t)) !== null; ) i.push(r);
    return i;
  },
  cM = gr("HTMLFormElement"),
  fM = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (r, i, s) {
      return i.toUpperCase() + s;
    }),
  Ub = (
    ({ hasOwnProperty: e }) =>
    (t, r) =>
      e.call(t, r)
  )(Object.prototype),
  dM = gr("RegExp"),
  K2 = (e, t) => {
    const r = Object.getOwnPropertyDescriptors(e),
      i = {};
    (Rl(r, (s, l) => {
      let c;
      (c = t(s, l, e)) !== !1 && (i[l] = c || s);
    }),
      Object.defineProperties(e, i));
  },
  hM = (e) => {
    K2(e, (t, r) => {
      if (An(e) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
        return !1;
      const i = e[r];
      if (An(i)) {
        if (((t.enumerable = !1), "writable" in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + r + "'");
          });
      }
    });
  },
  mM = (e, t) => {
    const r = {},
      i = (s) => {
        s.forEach((l) => {
          r[l] = !0;
        });
      };
    return (Zo(e) ? i(e) : i(String(e).split(t)), r);
  },
  pM = () => {},
  yM = (e, t) => (e != null && Number.isFinite((e = +e)) ? e : t);
function gM(e) {
  return !!(e && An(e.append) && e[I2] === "FormData" && e[Wc]);
}
const vM = (e) => {
    const t = new Array(10),
      r = (i, s) => {
        if (xl(i)) {
          if (t.indexOf(i) >= 0) return;
          if (El(i)) return i;
          if (!("toJSON" in i)) {
            t[s] = i;
            const l = Zo(i) ? [] : {};
            return (
              Rl(i, (c, d) => {
                const m = r(c, s + 1);
                !Uo(m) && (l[d] = m);
              }),
              (t[s] = void 0),
              l
            );
          }
        }
        return i;
      };
    return r(e, 0);
  },
  bM = gr("AsyncFunction"),
  wM = (e) => e && (xl(e) || An(e)) && An(e.then) && An(e.catch),
  Q2 = ((e, t) =>
    e
      ? setImmediate
      : t
        ? ((r, i) => (
            Ci.addEventListener(
              "message",
              ({ source: s, data: l }) => {
                s === Ci && l === r && i.length && i.shift()();
              },
              !1,
            ),
            (s) => {
              (i.push(s), Ci.postMessage(r, "*"));
            }
          ))(`axios@${Math.random()}`, [])
        : (r) => setTimeout(r))(
    typeof setImmediate == "function",
    An(Ci.postMessage),
  ),
  SM =
    typeof queueMicrotask < "u"
      ? queueMicrotask.bind(Ci)
      : (typeof process < "u" && process.nextTick) || Q2,
  _M = (e) => e != null && An(e[Wc]),
  ee = {
    isArray: Zo,
    isArrayBuffer: Z2,
    isBuffer: El,
    isFormData: YD,
    isArrayBufferView: FD,
    isString: BD,
    isNumber: q2,
    isBoolean: VD,
    isObject: xl,
    isPlainObject: pc,
    isEmptyObject: $D,
    isReadableStream: QD,
    isRequest: XD,
    isResponse: JD,
    isHeaders: WD,
    isUndefined: Uo,
    isDate: HD,
    isFile: ID,
    isBlob: ZD,
    isRegExp: dM,
    isFunction: An,
    isStream: GD,
    isURLSearchParams: KD,
    isTypedArray: sM,
    isFileList: qD,
    forEach: Rl,
    merge: pm,
    extend: tM,
    trim: eM,
    stripBOM: nM,
    inherits: rM,
    toFlatObject: aM,
    kindOf: ef,
    kindOfTest: gr,
    endsWith: iM,
    toArray: oM,
    forEachEntry: lM,
    matchAll: uM,
    isHTMLForm: cM,
    hasOwnProperty: Ub,
    hasOwnProp: Ub,
    reduceDescriptors: K2,
    freezeMethods: hM,
    toObjectSet: mM,
    toCamelCase: fM,
    noop: pM,
    toFiniteNumber: yM,
    findKey: G2,
    global: Ci,
    isContextDefined: Y2,
    isSpecCompliantForm: gM,
    toJSONObject: vM,
    isAsyncFn: bM,
    isThenable: wM,
    setImmediate: Q2,
    asap: SM,
    isIterable: _M,
  };
function Ve(e, t, r, i, s) {
  (Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = "AxiosError"),
    t && (this.code = t),
    r && (this.config = r),
    i && (this.request = i),
    s && ((this.response = s), (this.status = s.status ? s.status : null)));
}
ee.inherits(Ve, Error, {
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
      config: ee.toJSONObject(this.config),
      code: this.code,
      status: this.status,
    };
  },
});
const X2 = Ve.prototype,
  J2 = {};
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
].forEach((e) => {
  J2[e] = { value: e };
});
Object.defineProperties(Ve, J2);
Object.defineProperty(X2, "isAxiosError", { value: !0 });
Ve.from = (e, t, r, i, s, l) => {
  const c = Object.create(X2);
  ee.toFlatObject(
    e,
    c,
    function (y) {
      return y !== Error.prototype;
    },
    (h) => h !== "isAxiosError",
  );
  const d = e && e.message ? e.message : "Error",
    m = t == null && e ? e.code : t;
  return (
    Ve.call(c, d, m, r, i, s),
    e &&
      c.cause == null &&
      Object.defineProperty(c, "cause", { value: e, configurable: !0 }),
    (c.name = (e && e.name) || "Error"),
    l && Object.assign(c, l),
    c
  );
};
const EM = null;
function ym(e) {
  return ee.isPlainObject(e) || ee.isArray(e);
}
function W2(e) {
  return ee.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Pb(e, t, r) {
  return e
    ? e
        .concat(t)
        .map(function (s, l) {
          return ((s = W2(s)), !r && l ? "[" + s + "]" : s);
        })
        .join(r ? "." : "")
    : t;
}
function xM(e) {
  return ee.isArray(e) && !e.some(ym);
}
const RM = ee.toFlatObject(ee, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function nf(e, t, r) {
  if (!ee.isObject(e)) throw new TypeError("target must be an object");
  ((t = t || new FormData()),
    (r = ee.toFlatObject(
      r,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (E, x) {
        return !ee.isUndefined(x[E]);
      },
    )));
  const i = r.metaTokens,
    s = r.visitor || y,
    l = r.dots,
    c = r.indexes,
    m = (r.Blob || (typeof Blob < "u" && Blob)) && ee.isSpecCompliantForm(t);
  if (!ee.isFunction(s)) throw new TypeError("visitor must be a function");
  function h(S) {
    if (S === null) return "";
    if (ee.isDate(S)) return S.toISOString();
    if (ee.isBoolean(S)) return S.toString();
    if (!m && ee.isBlob(S))
      throw new Ve("Blob is not supported. Use a Buffer instead.");
    return ee.isArrayBuffer(S) || ee.isTypedArray(S)
      ? m && typeof Blob == "function"
        ? new Blob([S])
        : Buffer.from(S)
      : S;
  }
  function y(S, E, x) {
    let T = S;
    if (S && !x && typeof S == "object") {
      if (ee.endsWith(E, "{}"))
        ((E = i ? E : E.slice(0, -2)), (S = JSON.stringify(S)));
      else if (
        (ee.isArray(S) && xM(S)) ||
        ((ee.isFileList(S) || ee.endsWith(E, "[]")) && (T = ee.toArray(S)))
      )
        return (
          (E = W2(E)),
          T.forEach(function (D, B) {
            !(ee.isUndefined(D) || D === null) &&
              t.append(
                c === !0 ? Pb([E], B, l) : c === null ? E : E + "[]",
                h(D),
              );
          }),
          !1
        );
    }
    return ym(S) ? !0 : (t.append(Pb(x, E, l), h(S)), !1);
  }
  const g = [],
    v = Object.assign(RM, {
      defaultVisitor: y,
      convertValue: h,
      isVisitable: ym,
    });
  function _(S, E) {
    if (!ee.isUndefined(S)) {
      if (g.indexOf(S) !== -1)
        throw Error("Circular reference detected in " + E.join("."));
      (g.push(S),
        ee.forEach(S, function (T, P) {
          (!(ee.isUndefined(T) || T === null) &&
            s.call(t, T, ee.isString(P) ? P.trim() : P, E, v)) === !0 &&
            _(T, E ? E.concat(P) : [P]);
        }),
        g.pop());
    }
  }
  if (!ee.isObject(e)) throw new TypeError("data must be an object");
  return (_(e), t);
}
function Fb(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (i) {
    return t[i];
  });
}
function yp(e, t) {
  ((this._pairs = []), e && nf(e, this, t));
}
const eS = yp.prototype;
eS.append = function (t, r) {
  this._pairs.push([t, r]);
};
eS.toString = function (t) {
  const r = t
    ? function (i) {
        return t.call(this, i, Fb);
      }
    : Fb;
  return this._pairs
    .map(function (s) {
      return r(s[0]) + "=" + r(s[1]);
    }, "")
    .join("&");
};
function OM(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+");
}
function tS(e, t, r) {
  if (!t) return e;
  const i = (r && r.encode) || OM;
  ee.isFunction(r) && (r = { serialize: r });
  const s = r && r.serialize;
  let l;
  if (
    (s
      ? (l = s(t, r))
      : (l = ee.isURLSearchParams(t) ? t.toString() : new yp(t, r).toString(i)),
    l)
  ) {
    const c = e.indexOf("#");
    (c !== -1 && (e = e.slice(0, c)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + l));
  }
  return e;
}
class Bb {
  constructor() {
    this.handlers = [];
  }
  use(t, r, i) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: r,
        synchronous: i ? i.synchronous : !1,
        runWhen: i ? i.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    ee.forEach(this.handlers, function (i) {
      i !== null && t(i);
    });
  }
}
const nS = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  AM = typeof URLSearchParams < "u" ? URLSearchParams : yp,
  CM = typeof FormData < "u" ? FormData : null,
  TM = typeof Blob < "u" ? Blob : null,
  DM = {
    isBrowser: !0,
    classes: { URLSearchParams: AM, FormData: CM, Blob: TM },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  gp = typeof window < "u" && typeof document < "u",
  gm = (typeof navigator == "object" && navigator) || void 0,
  MM =
    gp &&
    (!gm || ["ReactNative", "NativeScript", "NS"].indexOf(gm.product) < 0),
  NM =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  zM = (gp && window.location.href) || "http://localhost",
  kM = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: gp,
        hasStandardBrowserEnv: MM,
        hasStandardBrowserWebWorkerEnv: NM,
        navigator: gm,
        origin: zM,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  fn = { ...kM, ...DM };
function jM(e, t) {
  return nf(e, new fn.classes.URLSearchParams(), {
    visitor: function (r, i, s, l) {
      return fn.isNode && ee.isBuffer(r)
        ? (this.append(i, r.toString("base64")), !1)
        : l.defaultVisitor.apply(this, arguments);
    },
    ...t,
  });
}
function LM(e) {
  return ee
    .matchAll(/\w+|\[(\w*)]/g, e)
    .map((t) => (t[0] === "[]" ? "" : t[1] || t[0]));
}
function UM(e) {
  const t = {},
    r = Object.keys(e);
  let i;
  const s = r.length;
  let l;
  for (i = 0; i < s; i++) ((l = r[i]), (t[l] = e[l]));
  return t;
}
function rS(e) {
  function t(r, i, s, l) {
    let c = r[l++];
    if (c === "__proto__") return !0;
    const d = Number.isFinite(+c),
      m = l >= r.length;
    return (
      (c = !c && ee.isArray(s) ? s.length : c),
      m
        ? (ee.hasOwnProp(s, c) ? (s[c] = [s[c], i]) : (s[c] = i), !d)
        : ((!s[c] || !ee.isObject(s[c])) && (s[c] = []),
          t(r, i, s[c], l) && ee.isArray(s[c]) && (s[c] = UM(s[c])),
          !d)
    );
  }
  if (ee.isFormData(e) && ee.isFunction(e.entries)) {
    const r = {};
    return (
      ee.forEachEntry(e, (i, s) => {
        t(LM(i), s, r, 0);
      }),
      r
    );
  }
  return null;
}
function PM(e, t, r) {
  if (ee.isString(e))
    try {
      return ((t || JSON.parse)(e), ee.trim(e));
    } catch (i) {
      if (i.name !== "SyntaxError") throw i;
    }
  return (r || JSON.stringify)(e);
}
const Ol = {
  transitional: nS,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (t, r) {
      const i = r.getContentType() || "",
        s = i.indexOf("application/json") > -1,
        l = ee.isObject(t);
      if ((l && ee.isHTMLForm(t) && (t = new FormData(t)), ee.isFormData(t)))
        return s ? JSON.stringify(rS(t)) : t;
      if (
        ee.isArrayBuffer(t) ||
        ee.isBuffer(t) ||
        ee.isStream(t) ||
        ee.isFile(t) ||
        ee.isBlob(t) ||
        ee.isReadableStream(t)
      )
        return t;
      if (ee.isArrayBufferView(t)) return t.buffer;
      if (ee.isURLSearchParams(t))
        return (
          r.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1,
          ),
          t.toString()
        );
      let d;
      if (l) {
        if (i.indexOf("application/x-www-form-urlencoded") > -1)
          return jM(t, this.formSerializer).toString();
        if ((d = ee.isFileList(t)) || i.indexOf("multipart/form-data") > -1) {
          const m = this.env && this.env.FormData;
          return nf(
            d ? { "files[]": t } : t,
            m && new m(),
            this.formSerializer,
          );
        }
      }
      return l || s ? (r.setContentType("application/json", !1), PM(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const r = this.transitional || Ol.transitional,
        i = r && r.forcedJSONParsing,
        s = this.responseType === "json";
      if (ee.isResponse(t) || ee.isReadableStream(t)) return t;
      if (t && ee.isString(t) && ((i && !this.responseType) || s)) {
        const c = !(r && r.silentJSONParsing) && s;
        try {
          return JSON.parse(t, this.parseReviver);
        } catch (d) {
          if (c)
            throw d.name === "SyntaxError"
              ? Ve.from(d, Ve.ERR_BAD_RESPONSE, this, null, this.response)
              : d;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: fn.classes.FormData, Blob: fn.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
ee.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Ol.headers[e] = {};
});
const FM = ee.toObjectSet([
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
  BM = (e) => {
    const t = {};
    let r, i, s;
    return (
      e &&
        e
          .split(
            `
`,
          )
          .forEach(function (c) {
            ((s = c.indexOf(":")),
              (r = c.substring(0, s).trim().toLowerCase()),
              (i = c.substring(s + 1).trim()),
              !(!r || (t[r] && FM[r])) &&
                (r === "set-cookie"
                  ? t[r]
                    ? t[r].push(i)
                    : (t[r] = [i])
                  : (t[r] = t[r] ? t[r] + ", " + i : i)));
          }),
      t
    );
  },
  Vb = Symbol("internals");
function Ws(e) {
  return e && String(e).trim().toLowerCase();
}
function yc(e) {
  return e === !1 || e == null ? e : ee.isArray(e) ? e.map(yc) : String(e);
}
function VM(e) {
  const t = Object.create(null),
    r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let i;
  for (; (i = r.exec(e)); ) t[i[1]] = i[2];
  return t;
}
const $M = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function $h(e, t, r, i, s) {
  if (ee.isFunction(i)) return i.call(this, t, r);
  if ((s && (t = r), !!ee.isString(t))) {
    if (ee.isString(i)) return t.indexOf(i) !== -1;
    if (ee.isRegExp(i)) return i.test(t);
  }
}
function HM(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, r, i) => r.toUpperCase() + i);
}
function IM(e, t) {
  const r = ee.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((i) => {
    Object.defineProperty(e, i + r, {
      value: function (s, l, c) {
        return this[i].call(this, t, s, l, c);
      },
      configurable: !0,
    });
  });
}
let Cn = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, r, i) {
    const s = this;
    function l(d, m, h) {
      const y = Ws(m);
      if (!y) throw new Error("header name must be a non-empty string");
      const g = ee.findKey(s, y);
      (!g || s[g] === void 0 || h === !0 || (h === void 0 && s[g] !== !1)) &&
        (s[g || m] = yc(d));
    }
    const c = (d, m) => ee.forEach(d, (h, y) => l(h, y, m));
    if (ee.isPlainObject(t) || t instanceof this.constructor) c(t, r);
    else if (ee.isString(t) && (t = t.trim()) && !$M(t)) c(BM(t), r);
    else if (ee.isObject(t) && ee.isIterable(t)) {
      let d = {},
        m,
        h;
      for (const y of t) {
        if (!ee.isArray(y))
          throw TypeError("Object iterator must return a key-value pair");
        d[(h = y[0])] = (m = d[h])
          ? ee.isArray(m)
            ? [...m, y[1]]
            : [m, y[1]]
          : y[1];
      }
      c(d, r);
    } else t != null && l(r, t, i);
    return this;
  }
  get(t, r) {
    if (((t = Ws(t)), t)) {
      const i = ee.findKey(this, t);
      if (i) {
        const s = this[i];
        if (!r) return s;
        if (r === !0) return VM(s);
        if (ee.isFunction(r)) return r.call(this, s, i);
        if (ee.isRegExp(r)) return r.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, r) {
    if (((t = Ws(t)), t)) {
      const i = ee.findKey(this, t);
      return !!(i && this[i] !== void 0 && (!r || $h(this, this[i], i, r)));
    }
    return !1;
  }
  delete(t, r) {
    const i = this;
    let s = !1;
    function l(c) {
      if (((c = Ws(c)), c)) {
        const d = ee.findKey(i, c);
        d && (!r || $h(i, i[d], d, r)) && (delete i[d], (s = !0));
      }
    }
    return (ee.isArray(t) ? t.forEach(l) : l(t), s);
  }
  clear(t) {
    const r = Object.keys(this);
    let i = r.length,
      s = !1;
    for (; i--; ) {
      const l = r[i];
      (!t || $h(this, this[l], l, t, !0)) && (delete this[l], (s = !0));
    }
    return s;
  }
  normalize(t) {
    const r = this,
      i = {};
    return (
      ee.forEach(this, (s, l) => {
        const c = ee.findKey(i, l);
        if (c) {
          ((r[c] = yc(s)), delete r[l]);
          return;
        }
        const d = t ? HM(l) : String(l).trim();
        (d !== l && delete r[l], (r[d] = yc(s)), (i[d] = !0));
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const r = Object.create(null);
    return (
      ee.forEach(this, (i, s) => {
        i != null && i !== !1 && (r[s] = t && ee.isArray(i) ? i.join(", ") : i);
      }),
      r
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, r]) => t + ": " + r).join(`
`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...r) {
    const i = new this(t);
    return (r.forEach((s) => i.set(s)), i);
  }
  static accessor(t) {
    const i = (this[Vb] = this[Vb] = { accessors: {} }).accessors,
      s = this.prototype;
    function l(c) {
      const d = Ws(c);
      i[d] || (IM(s, c), (i[d] = !0));
    }
    return (ee.isArray(t) ? t.forEach(l) : l(t), this);
  }
};
Cn.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
ee.reduceDescriptors(Cn.prototype, ({ value: e }, t) => {
  let r = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(i) {
      this[r] = i;
    },
  };
});
ee.freezeMethods(Cn);
function Hh(e, t) {
  const r = this || Ol,
    i = t || r,
    s = Cn.from(i.headers);
  let l = i.data;
  return (
    ee.forEach(e, function (d) {
      l = d.call(r, l, s.normalize(), t ? t.status : void 0);
    }),
    s.normalize(),
    l
  );
}
function aS(e) {
  return !!(e && e.__CANCEL__);
}
function qo(e, t, r) {
  (Ve.call(this, e ?? "canceled", Ve.ERR_CANCELED, t, r),
    (this.name = "CanceledError"));
}
ee.inherits(qo, Ve, { __CANCEL__: !0 });
function iS(e, t, r) {
  const i = r.config.validateStatus;
  !r.status || !i || i(r.status)
    ? e(r)
    : t(
        new Ve(
          "Request failed with status code " + r.status,
          [Ve.ERR_BAD_REQUEST, Ve.ERR_BAD_RESPONSE][
            Math.floor(r.status / 100) - 4
          ],
          r.config,
          r.request,
          r,
        ),
      );
}
function ZM(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function qM(e, t) {
  e = e || 10;
  const r = new Array(e),
    i = new Array(e);
  let s = 0,
    l = 0,
    c;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (m) {
      const h = Date.now(),
        y = i[l];
      (c || (c = h), (r[s] = m), (i[s] = h));
      let g = l,
        v = 0;
      for (; g !== s; ) ((v += r[g++]), (g = g % e));
      if (((s = (s + 1) % e), s === l && (l = (l + 1) % e), h - c < t)) return;
      const _ = y && h - y;
      return _ ? Math.round((v * 1e3) / _) : void 0;
    }
  );
}
function GM(e, t) {
  let r = 0,
    i = 1e3 / t,
    s,
    l;
  const c = (h, y = Date.now()) => {
    ((r = y), (s = null), l && (clearTimeout(l), (l = null)), e(...h));
  };
  return [
    (...h) => {
      const y = Date.now(),
        g = y - r;
      g >= i
        ? c(h, y)
        : ((s = h),
          l ||
            (l = setTimeout(() => {
              ((l = null), c(s));
            }, i - g)));
    },
    () => s && c(s),
  ];
}
const Cc = (e, t, r = 3) => {
    let i = 0;
    const s = qM(50, 250);
    return GM((l) => {
      const c = l.loaded,
        d = l.lengthComputable ? l.total : void 0,
        m = c - i,
        h = s(m),
        y = c <= d;
      i = c;
      const g = {
        loaded: c,
        total: d,
        progress: d ? c / d : void 0,
        bytes: m,
        rate: h || void 0,
        estimated: h && d && y ? (d - c) / h : void 0,
        event: l,
        lengthComputable: d != null,
        [t ? "download" : "upload"]: !0,
      };
      e(g);
    }, r);
  },
  $b = (e, t) => {
    const r = e != null;
    return [(i) => t[0]({ lengthComputable: r, total: e, loaded: i }), t[1]];
  },
  Hb =
    (e) =>
    (...t) =>
      ee.asap(() => e(...t)),
  YM = fn.hasStandardBrowserEnv
    ? ((e, t) => (r) => (
        (r = new URL(r, fn.origin)),
        e.protocol === r.protocol &&
          e.host === r.host &&
          (t || e.port === r.port)
      ))(
        new URL(fn.origin),
        fn.navigator && /(msie|trident)/i.test(fn.navigator.userAgent),
      )
    : () => !0,
  KM = fn.hasStandardBrowserEnv
    ? {
        write(e, t, r, i, s, l) {
          const c = [e + "=" + encodeURIComponent(t)];
          (ee.isNumber(r) && c.push("expires=" + new Date(r).toGMTString()),
            ee.isString(i) && c.push("path=" + i),
            ee.isString(s) && c.push("domain=" + s),
            l === !0 && c.push("secure"),
            (document.cookie = c.join("; ")));
        },
        read(e) {
          const t = document.cookie.match(
            new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"),
          );
          return t ? decodeURIComponent(t[3]) : null;
        },
        remove(e) {
          this.write(e, "", Date.now() - 864e5);
        },
      }
    : {
        write() {},
        read() {
          return null;
        },
        remove() {},
      };
function QM(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function XM(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function oS(e, t, r) {
  let i = !QM(t);
  return e && (i || r == !1) ? XM(e, t) : t;
}
const Ib = (e) => (e instanceof Cn ? { ...e } : e);
function ki(e, t) {
  t = t || {};
  const r = {};
  function i(h, y, g, v) {
    return ee.isPlainObject(h) && ee.isPlainObject(y)
      ? ee.merge.call({ caseless: v }, h, y)
      : ee.isPlainObject(y)
        ? ee.merge({}, y)
        : ee.isArray(y)
          ? y.slice()
          : y;
  }
  function s(h, y, g, v) {
    if (ee.isUndefined(y)) {
      if (!ee.isUndefined(h)) return i(void 0, h, g, v);
    } else return i(h, y, g, v);
  }
  function l(h, y) {
    if (!ee.isUndefined(y)) return i(void 0, y);
  }
  function c(h, y) {
    if (ee.isUndefined(y)) {
      if (!ee.isUndefined(h)) return i(void 0, h);
    } else return i(void 0, y);
  }
  function d(h, y, g) {
    if (g in t) return i(h, y);
    if (g in e) return i(void 0, h);
  }
  const m = {
    url: l,
    method: l,
    data: l,
    baseURL: c,
    transformRequest: c,
    transformResponse: c,
    paramsSerializer: c,
    timeout: c,
    timeoutMessage: c,
    withCredentials: c,
    withXSRFToken: c,
    adapter: c,
    responseType: c,
    xsrfCookieName: c,
    xsrfHeaderName: c,
    onUploadProgress: c,
    onDownloadProgress: c,
    decompress: c,
    maxContentLength: c,
    maxBodyLength: c,
    beforeRedirect: c,
    transport: c,
    httpAgent: c,
    httpsAgent: c,
    cancelToken: c,
    socketPath: c,
    responseEncoding: c,
    validateStatus: d,
    headers: (h, y, g) => s(Ib(h), Ib(y), g, !0),
  };
  return (
    ee.forEach(Object.keys({ ...e, ...t }), function (y) {
      const g = m[y] || s,
        v = g(e[y], t[y], y);
      (ee.isUndefined(v) && g !== d) || (r[y] = v);
    }),
    r
  );
}
const sS = (e) => {
    const t = ki({}, e);
    let {
      data: r,
      withXSRFToken: i,
      xsrfHeaderName: s,
      xsrfCookieName: l,
      headers: c,
      auth: d,
    } = t;
    if (
      ((t.headers = c = Cn.from(c)),
      (t.url = tS(
        oS(t.baseURL, t.url, t.allowAbsoluteUrls),
        e.params,
        e.paramsSerializer,
      )),
      d &&
        c.set(
          "Authorization",
          "Basic " +
            btoa(
              (d.username || "") +
                ":" +
                (d.password ? unescape(encodeURIComponent(d.password)) : ""),
            ),
        ),
      ee.isFormData(r))
    ) {
      if (fn.hasStandardBrowserEnv || fn.hasStandardBrowserWebWorkerEnv)
        c.setContentType(void 0);
      else if (ee.isFunction(r.getHeaders)) {
        const m = r.getHeaders(),
          h = ["content-type", "content-length"];
        Object.entries(m).forEach(([y, g]) => {
          h.includes(y.toLowerCase()) && c.set(y, g);
        });
      }
    }
    if (
      fn.hasStandardBrowserEnv &&
      (i && ee.isFunction(i) && (i = i(t)), i || (i !== !1 && YM(t.url)))
    ) {
      const m = s && l && KM.read(l);
      m && c.set(s, m);
    }
    return t;
  },
  JM = typeof XMLHttpRequest < "u",
  WM =
    JM &&
    function (e) {
      return new Promise(function (r, i) {
        const s = sS(e);
        let l = s.data;
        const c = Cn.from(s.headers).normalize();
        let { responseType: d, onUploadProgress: m, onDownloadProgress: h } = s,
          y,
          g,
          v,
          _,
          S;
        function E() {
          (_ && _(),
            S && S(),
            s.cancelToken && s.cancelToken.unsubscribe(y),
            s.signal && s.signal.removeEventListener("abort", y));
        }
        let x = new XMLHttpRequest();
        (x.open(s.method.toUpperCase(), s.url, !0), (x.timeout = s.timeout));
        function T() {
          if (!x) return;
          const D = Cn.from(
              "getAllResponseHeaders" in x && x.getAllResponseHeaders(),
            ),
            k = {
              data:
                !d || d === "text" || d === "json"
                  ? x.responseText
                  : x.response,
              status: x.status,
              statusText: x.statusText,
              headers: D,
              config: e,
              request: x,
            };
          (iS(
            function (Y) {
              (r(Y), E());
            },
            function (Y) {
              (i(Y), E());
            },
            k,
          ),
            (x = null));
        }
        ("onloadend" in x
          ? (x.onloadend = T)
          : (x.onreadystatechange = function () {
              !x ||
                x.readyState !== 4 ||
                (x.status === 0 &&
                  !(x.responseURL && x.responseURL.indexOf("file:") === 0)) ||
                setTimeout(T);
            }),
          (x.onabort = function () {
            x &&
              (i(new Ve("Request aborted", Ve.ECONNABORTED, e, x)), (x = null));
          }),
          (x.onerror = function (B) {
            const k = B && B.message ? B.message : "Network Error",
              C = new Ve(k, Ve.ERR_NETWORK, e, x);
            ((C.event = B || null), i(C), (x = null));
          }),
          (x.ontimeout = function () {
            let B = s.timeout
              ? "timeout of " + s.timeout + "ms exceeded"
              : "timeout exceeded";
            const k = s.transitional || nS;
            (s.timeoutErrorMessage && (B = s.timeoutErrorMessage),
              i(
                new Ve(
                  B,
                  k.clarifyTimeoutError ? Ve.ETIMEDOUT : Ve.ECONNABORTED,
                  e,
                  x,
                ),
              ),
              (x = null));
          }),
          l === void 0 && c.setContentType(null),
          "setRequestHeader" in x &&
            ee.forEach(c.toJSON(), function (B, k) {
              x.setRequestHeader(k, B);
            }),
          ee.isUndefined(s.withCredentials) ||
            (x.withCredentials = !!s.withCredentials),
          d && d !== "json" && (x.responseType = s.responseType),
          h && (([v, S] = Cc(h, !0)), x.addEventListener("progress", v)),
          m &&
            x.upload &&
            (([g, _] = Cc(m)),
            x.upload.addEventListener("progress", g),
            x.upload.addEventListener("loadend", _)),
          (s.cancelToken || s.signal) &&
            ((y = (D) => {
              x &&
                (i(!D || D.type ? new qo(null, e, x) : D),
                x.abort(),
                (x = null));
            }),
            s.cancelToken && s.cancelToken.subscribe(y),
            s.signal &&
              (s.signal.aborted
                ? y()
                : s.signal.addEventListener("abort", y))));
        const P = ZM(s.url);
        if (P && fn.protocols.indexOf(P) === -1) {
          i(new Ve("Unsupported protocol " + P + ":", Ve.ERR_BAD_REQUEST, e));
          return;
        }
        x.send(l || null);
      });
    },
  e4 = (e, t) => {
    const { length: r } = (e = e ? e.filter(Boolean) : []);
    if (t || r) {
      let i = new AbortController(),
        s;
      const l = function (h) {
        if (!s) {
          ((s = !0), d());
          const y = h instanceof Error ? h : this.reason;
          i.abort(
            y instanceof Ve ? y : new qo(y instanceof Error ? y.message : y),
          );
        }
      };
      let c =
        t &&
        setTimeout(() => {
          ((c = null), l(new Ve(`timeout ${t} of ms exceeded`, Ve.ETIMEDOUT)));
        }, t);
      const d = () => {
        e &&
          (c && clearTimeout(c),
          (c = null),
          e.forEach((h) => {
            h.unsubscribe
              ? h.unsubscribe(l)
              : h.removeEventListener("abort", l);
          }),
          (e = null));
      };
      e.forEach((h) => h.addEventListener("abort", l));
      const { signal: m } = i;
      return ((m.unsubscribe = () => ee.asap(d)), m);
    }
  },
  t4 = function* (e, t) {
    let r = e.byteLength;
    if (r < t) {
      yield e;
      return;
    }
    let i = 0,
      s;
    for (; i < r; ) ((s = i + t), yield e.slice(i, s), (i = s));
  },
  n4 = async function* (e, t) {
    for await (const r of r4(e)) yield* t4(r, t);
  },
  r4 = async function* (e) {
    if (e[Symbol.asyncIterator]) {
      yield* e;
      return;
    }
    const t = e.getReader();
    try {
      for (;;) {
        const { done: r, value: i } = await t.read();
        if (r) break;
        yield i;
      }
    } finally {
      await t.cancel();
    }
  },
  Zb = (e, t, r, i) => {
    const s = n4(e, t);
    let l = 0,
      c,
      d = (m) => {
        c || ((c = !0), i && i(m));
      };
    return new ReadableStream(
      {
        async pull(m) {
          try {
            const { done: h, value: y } = await s.next();
            if (h) {
              (d(), m.close());
              return;
            }
            let g = y.byteLength;
            if (r) {
              let v = (l += g);
              r(v);
            }
            m.enqueue(new Uint8Array(y));
          } catch (h) {
            throw (d(h), h);
          }
        },
        cancel(m) {
          return (d(m), s.return());
        },
      },
      { highWaterMark: 2 },
    );
  },
  qb = 64 * 1024,
  { isFunction: Wu } = ee,
  a4 = (({ Request: e, Response: t }) => ({ Request: e, Response: t }))(
    ee.global,
  ),
  { ReadableStream: Gb, TextEncoder: Yb } = ee.global,
  Kb = (e, ...t) => {
    try {
      return !!e(...t);
    } catch {
      return !1;
    }
  },
  i4 = (e) => {
    e = ee.merge.call({ skipUndefined: !0 }, a4, e);
    const { fetch: t, Request: r, Response: i } = e,
      s = t ? Wu(t) : typeof fetch == "function",
      l = Wu(r),
      c = Wu(i);
    if (!s) return !1;
    const d = s && Wu(Gb),
      m =
        s &&
        (typeof Yb == "function"
          ? (
              (S) => (E) =>
                S.encode(E)
            )(new Yb())
          : async (S) => new Uint8Array(await new r(S).arrayBuffer())),
      h =
        l &&
        d &&
        Kb(() => {
          let S = !1;
          const E = new r(fn.origin, {
            body: new Gb(),
            method: "POST",
            get duplex() {
              return ((S = !0), "half");
            },
          }).headers.has("Content-Type");
          return S && !E;
        }),
      y = c && d && Kb(() => ee.isReadableStream(new i("").body)),
      g = { stream: y && ((S) => S.body) };
    s &&
      ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((S) => {
        !g[S] &&
          (g[S] = (E, x) => {
            let T = E && E[S];
            if (T) return T.call(E);
            throw new Ve(
              `Response type '${S}' is not supported`,
              Ve.ERR_NOT_SUPPORT,
              x,
            );
          });
      });
    const v = async (S) => {
        if (S == null) return 0;
        if (ee.isBlob(S)) return S.size;
        if (ee.isSpecCompliantForm(S))
          return (
            await new r(fn.origin, { method: "POST", body: S }).arrayBuffer()
          ).byteLength;
        if (ee.isArrayBufferView(S) || ee.isArrayBuffer(S)) return S.byteLength;
        if ((ee.isURLSearchParams(S) && (S = S + ""), ee.isString(S)))
          return (await m(S)).byteLength;
      },
      _ = async (S, E) => {
        const x = ee.toFiniteNumber(S.getContentLength());
        return x ?? v(E);
      };
    return async (S) => {
      let {
          url: E,
          method: x,
          data: T,
          signal: P,
          cancelToken: D,
          timeout: B,
          onDownloadProgress: k,
          onUploadProgress: C,
          responseType: Y,
          headers: Q,
          withCredentials: me = "same-origin",
          fetchOptions: pe,
        } = sS(S),
        we = t || fetch;
      Y = Y ? (Y + "").toLowerCase() : "text";
      let be = e4([P, D && D.toAbortSignal()], B),
        Se = null;
      const ce =
        be &&
        be.unsubscribe &&
        (() => {
          be.unsubscribe();
        });
      let ge;
      try {
        if (
          C &&
          h &&
          x !== "get" &&
          x !== "head" &&
          (ge = await _(Q, T)) !== 0
        ) {
          let W = new r(E, { method: "POST", body: T, duplex: "half" }),
            fe;
          if (
            (ee.isFormData(T) &&
              (fe = W.headers.get("content-type")) &&
              Q.setContentType(fe),
            W.body)
          ) {
            const [le, ve] = $b(ge, Cc(Hb(C)));
            T = Zb(W.body, qb, le, ve);
          }
        }
        ee.isString(me) || (me = me ? "include" : "omit");
        const U = l && "credentials" in r.prototype,
          ne = {
            ...pe,
            signal: be,
            method: x.toUpperCase(),
            headers: Q.normalize().toJSON(),
            body: T,
            duplex: "half",
            credentials: U ? me : void 0,
          };
        Se = l && new r(E, ne);
        let q = await (l ? we(Se, pe) : we(E, ne));
        const ie = y && (Y === "stream" || Y === "response");
        if (y && (k || (ie && ce))) {
          const W = {};
          ["status", "statusText", "headers"].forEach((ke) => {
            W[ke] = q[ke];
          });
          const fe = ee.toFiniteNumber(q.headers.get("content-length")),
            [le, ve] = (k && $b(fe, Cc(Hb(k), !0))) || [];
          q = new i(
            Zb(q.body, qb, le, () => {
              (ve && ve(), ce && ce());
            }),
            W,
          );
        }
        Y = Y || "text";
        let N = await g[ee.findKey(g, Y) || "text"](q, S);
        return (
          !ie && ce && ce(),
          await new Promise((W, fe) => {
            iS(W, fe, {
              data: N,
              headers: Cn.from(q.headers),
              status: q.status,
              statusText: q.statusText,
              config: S,
              request: Se,
            });
          })
        );
      } catch (U) {
        throw (
          ce && ce(),
          U && U.name === "TypeError" && /Load failed|fetch/i.test(U.message)
            ? Object.assign(new Ve("Network Error", Ve.ERR_NETWORK, S, Se), {
                cause: U.cause || U,
              })
            : Ve.from(U, U && U.code, S, Se)
        );
      }
    };
  },
  o4 = new Map(),
  lS = (e) => {
    let t = e ? e.env : {};
    const { fetch: r, Request: i, Response: s } = t,
      l = [i, s, r];
    let c = l.length,
      d = c,
      m,
      h,
      y = o4;
    for (; d--; )
      ((m = l[d]),
        (h = y.get(m)),
        h === void 0 && y.set(m, (h = d ? new Map() : i4(t))),
        (y = h));
    return h;
  };
lS();
const vm = { http: EM, xhr: WM, fetch: { get: lS } };
ee.forEach(vm, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Qb = (e) => `- ${e}`,
  s4 = (e) => ee.isFunction(e) || e === null || e === !1,
  uS = {
    getAdapter: (e, t) => {
      e = ee.isArray(e) ? e : [e];
      const { length: r } = e;
      let i, s;
      const l = {};
      for (let c = 0; c < r; c++) {
        i = e[c];
        let d;
        if (
          ((s = i),
          !s4(i) && ((s = vm[(d = String(i)).toLowerCase()]), s === void 0))
        )
          throw new Ve(`Unknown adapter '${d}'`);
        if (s && (ee.isFunction(s) || (s = s.get(t)))) break;
        l[d || "#" + c] = s;
      }
      if (!s) {
        const c = Object.entries(l).map(
          ([m, h]) =>
            `adapter ${m} ` +
            (h === !1
              ? "is not supported by the environment"
              : "is not available in the build"),
        );
        let d = r
          ? c.length > 1
            ? `since :
` +
              c.map(Qb).join(`
`)
            : " " + Qb(c[0])
          : "as no adapter specified";
        throw new Ve(
          "There is no suitable adapter to dispatch the request " + d,
          "ERR_NOT_SUPPORT",
        );
      }
      return s;
    },
    adapters: vm,
  };
function Ih(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new qo(null, e);
}
function Xb(e) {
  return (
    Ih(e),
    (e.headers = Cn.from(e.headers)),
    (e.data = Hh.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    uS
      .getAdapter(
        e.adapter || Ol.adapter,
        e,
      )(e)
      .then(
        function (i) {
          return (
            Ih(e),
            (i.data = Hh.call(e, e.transformResponse, i)),
            (i.headers = Cn.from(i.headers)),
            i
          );
        },
        function (i) {
          return (
            aS(i) ||
              (Ih(e),
              i &&
                i.response &&
                ((i.response.data = Hh.call(
                  e,
                  e.transformResponse,
                  i.response,
                )),
                (i.response.headers = Cn.from(i.response.headers)))),
            Promise.reject(i)
          );
        },
      )
  );
}
const cS = "1.12.2",
  rf = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    rf[e] = function (i) {
      return typeof i === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  },
);
const Jb = {};
rf.transitional = function (t, r, i) {
  function s(l, c) {
    return (
      "[Axios v" +
      cS +
      "] Transitional option '" +
      l +
      "'" +
      c +
      (i ? ". " + i : "")
    );
  }
  return (l, c, d) => {
    if (t === !1)
      throw new Ve(
        s(c, " has been removed" + (r ? " in " + r : "")),
        Ve.ERR_DEPRECATED,
      );
    return (
      r &&
        !Jb[c] &&
        ((Jb[c] = !0),
        console.warn(
          s(
            c,
            " has been deprecated since v" +
              r +
              " and will be removed in the near future",
          ),
        )),
      t ? t(l, c, d) : !0
    );
  };
};
rf.spelling = function (t) {
  return (r, i) => (console.warn(`${i} is likely a misspelling of ${t}`), !0);
};
function l4(e, t, r) {
  if (typeof e != "object")
    throw new Ve("options must be an object", Ve.ERR_BAD_OPTION_VALUE);
  const i = Object.keys(e);
  let s = i.length;
  for (; s-- > 0; ) {
    const l = i[s],
      c = t[l];
    if (c) {
      const d = e[l],
        m = d === void 0 || c(d, l, e);
      if (m !== !0)
        throw new Ve("option " + l + " must be " + m, Ve.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0) throw new Ve("Unknown option " + l, Ve.ERR_BAD_OPTION);
  }
}
const gc = { assertOptions: l4, validators: rf },
  Rr = gc.validators;
let Mi = class {
  constructor(t) {
    ((this.defaults = t || {}),
      (this.interceptors = { request: new Bb(), response: new Bb() }));
  }
  async request(t, r) {
    try {
      return await this._request(t, r);
    } catch (i) {
      if (i instanceof Error) {
        let s = {};
        Error.captureStackTrace
          ? Error.captureStackTrace(s)
          : (s = new Error());
        const l = s.stack ? s.stack.replace(/^.+\n/, "") : "";
        try {
          i.stack
            ? l &&
              !String(i.stack).endsWith(l.replace(/^.+\n.+\n/, "")) &&
              (i.stack +=
                `
` + l)
            : (i.stack = l);
        } catch {}
      }
      throw i;
    }
  }
  _request(t, r) {
    (typeof t == "string" ? ((r = r || {}), (r.url = t)) : (r = t || {}),
      (r = ki(this.defaults, r)));
    const { transitional: i, paramsSerializer: s, headers: l } = r;
    (i !== void 0 &&
      gc.assertOptions(
        i,
        {
          silentJSONParsing: Rr.transitional(Rr.boolean),
          forcedJSONParsing: Rr.transitional(Rr.boolean),
          clarifyTimeoutError: Rr.transitional(Rr.boolean),
        },
        !1,
      ),
      s != null &&
        (ee.isFunction(s)
          ? (r.paramsSerializer = { serialize: s })
          : gc.assertOptions(
              s,
              { encode: Rr.function, serialize: Rr.function },
              !0,
            )),
      r.allowAbsoluteUrls !== void 0 ||
        (this.defaults.allowAbsoluteUrls !== void 0
          ? (r.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls)
          : (r.allowAbsoluteUrls = !0)),
      gc.assertOptions(
        r,
        {
          baseUrl: Rr.spelling("baseURL"),
          withXsrfToken: Rr.spelling("withXSRFToken"),
        },
        !0,
      ),
      (r.method = (r.method || this.defaults.method || "get").toLowerCase()));
    let c = l && ee.merge(l.common, l[r.method]);
    (l &&
      ee.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (S) => {
          delete l[S];
        },
      ),
      (r.headers = Cn.concat(c, l)));
    const d = [];
    let m = !0;
    this.interceptors.request.forEach(function (E) {
      (typeof E.runWhen == "function" && E.runWhen(r) === !1) ||
        ((m = m && E.synchronous), d.unshift(E.fulfilled, E.rejected));
    });
    const h = [];
    this.interceptors.response.forEach(function (E) {
      h.push(E.fulfilled, E.rejected);
    });
    let y,
      g = 0,
      v;
    if (!m) {
      const S = [Xb.bind(this), void 0];
      for (
        S.unshift(...d), S.push(...h), v = S.length, y = Promise.resolve(r);
        g < v;

      )
        y = y.then(S[g++], S[g++]);
      return y;
    }
    v = d.length;
    let _ = r;
    for (; g < v; ) {
      const S = d[g++],
        E = d[g++];
      try {
        _ = S(_);
      } catch (x) {
        E.call(this, x);
        break;
      }
    }
    try {
      y = Xb.call(this, _);
    } catch (S) {
      return Promise.reject(S);
    }
    for (g = 0, v = h.length; g < v; ) y = y.then(h[g++], h[g++]);
    return y;
  }
  getUri(t) {
    t = ki(this.defaults, t);
    const r = oS(t.baseURL, t.url, t.allowAbsoluteUrls);
    return tS(r, t.params, t.paramsSerializer);
  }
};
ee.forEach(["delete", "get", "head", "options"], function (t) {
  Mi.prototype[t] = function (r, i) {
    return this.request(
      ki(i || {}, { method: t, url: r, data: (i || {}).data }),
    );
  };
});
ee.forEach(["post", "put", "patch"], function (t) {
  function r(i) {
    return function (l, c, d) {
      return this.request(
        ki(d || {}, {
          method: t,
          headers: i ? { "Content-Type": "multipart/form-data" } : {},
          url: l,
          data: c,
        }),
      );
    };
  }
  ((Mi.prototype[t] = r()), (Mi.prototype[t + "Form"] = r(!0)));
});
let u4 = class fS {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function (l) {
      r = l;
    });
    const i = this;
    (this.promise.then((s) => {
      if (!i._listeners) return;
      let l = i._listeners.length;
      for (; l-- > 0; ) i._listeners[l](s);
      i._listeners = null;
    }),
      (this.promise.then = (s) => {
        let l;
        const c = new Promise((d) => {
          (i.subscribe(d), (l = d));
        }).then(s);
        return (
          (c.cancel = function () {
            i.unsubscribe(l);
          }),
          c
        );
      }),
      t(function (l, c, d) {
        i.reason || ((i.reason = new qo(l, c, d)), r(i.reason));
      }));
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const r = this._listeners.indexOf(t);
    r !== -1 && this._listeners.splice(r, 1);
  }
  toAbortSignal() {
    const t = new AbortController(),
      r = (i) => {
        t.abort(i);
      };
    return (
      this.subscribe(r),
      (t.signal.unsubscribe = () => this.unsubscribe(r)),
      t.signal
    );
  }
  static source() {
    let t;
    return {
      token: new fS(function (s) {
        t = s;
      }),
      cancel: t,
    };
  }
};
function c4(e) {
  return function (r) {
    return e.apply(null, r);
  };
}
function f4(e) {
  return ee.isObject(e) && e.isAxiosError === !0;
}
const bm = {
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
Object.entries(bm).forEach(([e, t]) => {
  bm[t] = e;
});
function dS(e) {
  const t = new Mi(e),
    r = H2(Mi.prototype.request, t);
  return (
    ee.extend(r, Mi.prototype, t, { allOwnKeys: !0 }),
    ee.extend(r, t, null, { allOwnKeys: !0 }),
    (r.create = function (s) {
      return dS(ki(e, s));
    }),
    r
  );
}
const kt = dS(Ol);
kt.Axios = Mi;
kt.CanceledError = qo;
kt.CancelToken = u4;
kt.isCancel = aS;
kt.VERSION = cS;
kt.toFormData = nf;
kt.AxiosError = Ve;
kt.Cancel = kt.CanceledError;
kt.all = function (t) {
  return Promise.all(t);
};
kt.spread = c4;
kt.isAxiosError = f4;
kt.mergeConfig = ki;
kt.AxiosHeaders = Cn;
kt.formToJSON = (e) => rS(ee.isHTMLForm(e) ? new FormData(e) : e);
kt.getAdapter = uS.getAdapter;
kt.HttpStatusCode = bm;
kt.default = kt;
const {
    Axios: Gj,
    AxiosError: d4,
    CanceledError: Yj,
    isCancel: Kj,
    CancelToken: Qj,
    VERSION: Xj,
    all: Jj,
    Cancel: Wj,
    isAxiosError: or,
    spread: eL,
    toFormData: tL,
    AxiosHeaders: nL,
    HttpStatusCode: rL,
    formToJSON: aL,
    getAdapter: iL,
    mergeConfig: oL,
  } = kt,
  h4 = "http://127.0.0.1:8000",
  on = kt.create({ baseURL: `${h4}/api`, withCredentials: !0 });
on.interceptors.request.use((e) => e);
on.interceptors.response.use(
  (e) => e,
  async (e) => {
    const t = e.config,
      r = t?.url?.includes("/user/refresh/");
    if (e.response?.status === 401 && t && !r)
      try {
        return (await on.post("/user/refresh/", {}), on.request(t));
      } catch (i) {
        return i instanceof d4 && i.response?.status === 401
          ? Promise.reject(new m4("Refresh token expired"))
          : Promise.reject(i);
      }
    return Promise.reject(e instanceof Error ? e : new Error(String(e)));
  },
);
class m4 extends Error {
  constructor(t) {
    (super(t), (this.name = "RefreshTokenExpiredError"));
  }
}
async function sL(e) {
  try {
    return (
      (await on.get("/user/kakao/callback/", { params: { code: e } }))
        .status === 200
    );
  } catch (t) {
    or(t)
      ? console.error(
          "kakaoSignIn error:",
          t.response?.status,
          t.response?.data,
        )
      : console.error("kakaoSignIn unknown error:", t);
  }
  return !1;
}
async function lL(e = {}) {
  try {
    const t = await on.get("/auction/", { params: e });
    if (t.status === 200) return t.data;
    throw new Error(`경매 목록 요청 실패: ${t.status}`);
  } catch (t) {
    throw (
      or(t)
        ? console.error(
            "getAllAuctions error:",
            t.response?.status,
            t.response?.data,
          )
        : console.error("getAllAuctions unknown error:", t),
      t
    );
  }
}
async function uL() {
  try {
    const e = await on.get("/auction/recommended/");
    if (e.status === 200) return e.data;
    throw new Error(`추천 경매 요청 실패: ${e.status}`);
  } catch (e) {
    throw (
      or(e)
        ? console.error(
            "getRecommendedAuctions error:",
            e.response?.status,
            e.response?.data,
          )
        : console.error("getRecommendedAuctions unknown error:", e),
      e
    );
  }
}
async function cL(e) {
  try {
    const t = encodeURIComponent(String(e)),
      r = await on.get(`/auction/${t}/`);
    return r.status === 200 ? r.data : null;
  } catch (t) {
    return (
      or(t)
        ? console.error(
            "getAuctionDetail error:",
            t.response?.status,
            t.response?.data,
          )
        : console.error("getAuctionDetail unknown error:", t),
      null
    );
  }
}
async function p4() {
  try {
    const e = await on.get("/user/me/");
    return e.status === 200 ? e.data : null;
  } catch (e) {
    return (
      or(e)
        ? console.error(
            "getUserInfo error:",
            e.response?.status,
            e.response?.data,
          )
        : console.error("getUserInfo unknown error:", e),
      null
    );
  }
}
async function y4(e) {
  try {
    const t = await on.post("/payment/ready/", {
      partner_order_id: `order_${Date.now()}`,
      partner_user_id: "user",
      item_name: e.point,
      quantity: 1,
      total_amount: parseInt(e.price),
      vat_amount: 0,
      tax_free_amount: 0,
      approval_url: `${window.location.origin}/payment/approve`,
      cancel_url: `${window.location.origin}/payment/cancel`,
      fail_url: `${window.location.origin}/payment/fail`,
    });
    return t.status === 200 ? t.data : null;
  } catch (t) {
    return (
      or(t)
        ? console.error(
            "paymentReady error:",
            t.response?.status,
            t.response?.data,
          )
        : console.error("paymentReady unknown error:", t),
      null
    );
  }
}
async function g4(e, t) {
  try {
    const r = await on.put("/user/me/", { nickname: e, profilepic_id: t });
    return r.status === 200 ? r.data : null;
  } catch (r) {
    return (
      or(r)
        ? console.error(
            "updateUserProfile error:",
            r.response?.status,
            r.response?.data,
          )
        : console.error("updateUserProfile unknown error:", r),
      null
    );
  }
}
async function fL(e) {
  try {
    return (
      (await on.post("/payment/approve/", { pg_token: e.pg_token, tid: e.tid }))
        .status === 200
    );
  } catch (t) {
    return (
      or(t)
        ? console.error(
            "paymentApproval error:",
            t.response?.status,
            t.response?.data,
          )
        : console.error("paymentApproval unknown error:", t),
      !1
    );
  }
}
async function dL() {
  try {
    const e = await on.get("/payment/history/");
    return e.status === 200 ? e.data : [];
  } catch (e) {
    return (
      or(e)
        ? console.error(
            "[DEBUG] getPaymentHistory error:",
            e.response?.status,
            e.response?.data,
          )
        : console.error("[DEBUG] getPaymentHistory unknown error:", e),
      []
    );
  }
}
async function hL(e, t) {
  try {
    const r = await on.post(`/auction/${e}/bid/`, { amount: t });
    return r.status === 201 ? r.data : null;
  } catch (r) {
    return (
      or(r)
        ? console.error("placeBid error:", r.response?.status, r.response?.data)
        : console.error("placeBid unknown error:", r),
      null
    );
  }
}
async function mL(e) {
  try {
    if (e.image_file) {
      const s = new FormData();
      (s.append("title", e.title),
        s.append("description", e.description),
        s.append("starting_price", String(e.starting_price)),
        s.append("end_time", e.end_time),
        s.append("image_file", e.image_file, e.image_file.name));
      const l = await on.post("/auction/create/", s);
      return l.status === 201 ? l.data : null;
    }
    const { image_file: t, ...r } = e,
      i = await on.post("/auction/create/", r);
    return i.status === 201 ? i.data : null;
  } catch (t) {
    return (
      or(t)
        ? console.error(
            "createAuction error:",
            t.response?.status,
            t.response?.data,
          )
        : console.error("createAuction unknown error:", t),
      null
    );
  }
}
async function v4() {
  try {
    return (await on.post("/user/signout/")).status === 200;
  } catch (e) {
    return (
      or(e)
        ? console.error("signOut error:", e.response?.status, e.response?.data)
        : console.error("signOut unknown error:", e),
      !1
    );
  }
}
const hS = w.createContext(void 0),
  mS = (e) => {
    const t = w.useContext(hS);
    if (!t)
      throw new Error("No QueryClient set, use QueryClientProvider to set one");
    return t;
  },
  b4 = ({ client: e, children: t }) => (
    w.useEffect(
      () => (
        e.mount(),
        () => {
          e.unmount();
        }
      ),
      [e],
    ),
    j.jsx(hS.Provider, { value: e, children: t })
  ),
  w4 = {
    setTimeout: (e, t) => setTimeout(e, t),
    clearTimeout: (e) => clearTimeout(e),
    setInterval: (e, t) => setInterval(e, t),
    clearInterval: (e) => clearInterval(e),
  };
var S4 = class {
  #e = w4;
  #t = !1;
  setTimeoutProvider(e) {
    this.#e = e;
  }
  setTimeout(e, t) {
    return this.#e.setTimeout(e, t);
  }
  clearTimeout(e) {
    this.#e.clearTimeout(e);
  }
  setInterval(e, t) {
    return this.#e.setInterval(e, t);
  }
  clearInterval(e) {
    this.#e.clearInterval(e);
  }
};
const Ti = new S4();
function _4(e) {
  setTimeout(e, 0);
}
const E4 = typeof window > "u" || "Deno" in globalThis;
function xn() {}
function x4(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function pS(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function yS(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function wt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Wb(e, t) {
  const {
    type: r = "all",
    exact: i,
    fetchStatus: s,
    predicate: l,
    queryKey: c,
    stale: d,
  } = e;
  if (c) {
    if (i) {
      if (t.queryHash !== vp(c, t.options)) return !1;
    } else if (!Po(t.queryKey, c)) return !1;
  }
  if (r !== "all") {
    const m = t.isActive();
    if ((r === "active" && !m) || (r === "inactive" && m)) return !1;
  }
  return !(
    (typeof d == "boolean" && t.isStale() !== d) ||
    (s && s !== t.state.fetchStatus) ||
    (l && !l(t))
  );
}
function e1(e, t) {
  const { exact: r, status: i, predicate: s, mutationKey: l } = e;
  if (l) {
    if (!t.options.mutationKey) return !1;
    if (r) {
      if (hl(t.options.mutationKey) !== hl(l)) return !1;
    } else if (!Po(t.options.mutationKey, l)) return !1;
  }
  return !((i && t.state.status !== i) || (s && !s(t)));
}
function vp(e, t) {
  return (t?.queryKeyHashFn || hl)(e);
}
function hl(e) {
  return JSON.stringify(e, (t, r) =>
    wm(r)
      ? Object.keys(r)
          .sort()
          .reduce((i, s) => ((i[s] = r[s]), i), {})
      : r,
  );
}
function Po(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (e && t && typeof e == "object" && typeof t == "object") {
    if (Array.isArray(e) && Array.isArray(t)) {
      if (t.length > e.length) return !1;
      for (let i = 0; i < t.length; i++) if (!Po(e[i], t[i])) return !1;
      return !0;
    }
    const r = Object.keys(t);
    for (const i of r) if (!Po(e[i], t[i])) return !1;
    return !0;
  }
  return !1;
}
const gS = Object.prototype.hasOwnProperty;
function vS(e, t, r = 0) {
  if (e === t) return e;
  if (r > 500) return t;
  const i = t1(e) && t1(t);
  if (!i && !(wm(e) && wm(t))) return t;
  const s = (i ? e : Object.keys(e)).length,
    l = i ? t : Object.keys(t),
    c = l.length,
    d = i ? new Array(c) : {};
  let m = 0;
  for (let h = 0; h < c; h++) {
    const y = i ? h : l[h],
      g = e[y],
      v = t[y];
    if (g === v) {
      ((d[y] = g), (i ? h < s : gS.call(e, y)) && m++);
      continue;
    }
    if (
      g === null ||
      v === null ||
      typeof g != "object" ||
      typeof v != "object"
    ) {
      d[y] = v;
      continue;
    }
    const _ = vS(g, v, r + 1);
    ((d[y] = _), _ === g && m++);
  }
  return s === c && m === s ? e : d;
}
function Zh(e, t) {
  if (!t || Object.keys(e).length !== Object.keys(t).length) return !1;
  for (const r of Object.keys(e))
    if (!gS.call(t, r) || e[r] !== t[r]) return !1;
  return !0;
}
function t1(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function wm(e) {
  if (!n1(e)) return !1;
  const t = Object.getPrototypeOf(e),
    r = t?.constructor;
  if (r === void 0) return !0;
  if (typeof r != "function") return !1;
  const i = r.prototype;
  return !(
    !n1(i) ||
    !i.hasOwnProperty("isPrototypeOf") ||
    t !== Object.prototype
  );
}
function n1(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function R4(e) {
  return new Promise((t) => {
    Ti.setTimeout(t, e);
  });
}
function Sm(e, t, r) {
  return typeof r.structuralSharing == "function"
    ? r.structuralSharing(e, t)
    : r.structuralSharing !== !1
      ? vS(e, t)
      : t;
}
function O4(e, t, r = 0) {
  const i = [...e, t];
  return r && i.length > r ? i.slice(-r) : i;
}
function A4(e, t, r = 0) {
  const i = [t, ...e];
  return r && i.length > r ? i.slice(0, r) : i;
}
const bp = Symbol();
function bS(e, t) {
  return !e.queryFn && t?.initialPromise
    ? () => t.initialPromise
    : !e.queryFn || e.queryFn === bp
      ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`))
      : e.queryFn;
}
function wS(e, t) {
  return typeof e == "function" ? e(...t) : !!e;
}
const wp = Symbol();
function C4(e, t, r, i) {
  let s = !1,
    l;
  return (
    Object.defineProperties(e, {
      [wp]: { value: i },
      signal: {
        enumerable: !0,
        get: () => (
          (l ??= t()),
          s ||
            ((s = !0),
            l.aborted ? r() : l.addEventListener("abort", r, { once: !0 })),
          l
        ),
      },
    }),
    e
  );
}
let T4 = () => E4;
const Sp = () => T4();
var Al = class {
    constructor() {
      ((this.listeners = new Set()),
        (this.subscribe = this.subscribe.bind(this)));
    }
    subscribe(e) {
      return (
        this.listeners.add(e),
        this.onSubscribe(),
        () => {
          (this.listeners.delete(e), this.onUnsubscribe());
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  D4 = class extends Al {
    #e;
    #t;
    #n;
    constructor() {
      (super(),
        (this.#n = (e) => {
          if (typeof window < "u" && window.addEventListener) {
            const t = () => e();
            return (
              window.addEventListener("visibilitychange", t, !1),
              () => {
                window.removeEventListener("visibilitychange", t);
              }
            );
          }
        }));
    }
    onSubscribe() {
      this.#t || this.setEventListener(this.#n);
    }
    onUnsubscribe() {
      this.hasListeners() || (this.#t?.(), (this.#t = void 0));
    }
    setEventListener(e) {
      ((this.#n = e),
        this.#t?.(),
        (this.#t = e((t) => {
          typeof t == "boolean" ? this.setFocused(t) : this.onFocus();
        })));
    }
    setFocused(e) {
      this.#e !== e && ((this.#e = e), this.onFocus());
    }
    onFocus() {
      const e = this.isFocused();
      this.listeners.forEach((t) => {
        t(e);
      });
    }
    isFocused() {
      return typeof this.#e == "boolean"
        ? this.#e
        : globalThis.document?.visibilityState !== "hidden";
    }
  };
const _p = new D4(),
  M4 = _4;
function N4() {
  let e = [],
    t = 0,
    r = (d) => {
      d();
    },
    i = (d) => {
      d();
    },
    s = M4;
  const l = (d) => {
      t
        ? e.push(d)
        : s(() => {
            r(d);
          });
    },
    c = () => {
      const d = e;
      ((e = []),
        d.length &&
          s(() => {
            i(() => {
              d.forEach((m) => {
                r(m);
              });
            });
          }));
    };
  return {
    batch: (d) => {
      let m;
      t++;
      try {
        m = d();
      } finally {
        (t--, t || c());
      }
      return m;
    },
    batchCalls:
      (d) =>
      (...m) => {
        l(() => {
          d(...m);
        });
      },
    schedule: l,
    setNotifyFunction: (d) => {
      r = d;
    },
    setBatchNotifyFunction: (d) => {
      i = d;
    },
    setScheduler: (d) => {
      s = d;
    },
  };
}
const nn = N4();
var z4 = class extends Al {
  #e = !0;
  #t;
  #n;
  constructor() {
    (super(),
      (this.#n = (e) => {
        if (typeof window < "u" && window.addEventListener) {
          const t = () => e(!0),
            r = () => e(!1);
          return (
            window.addEventListener("online", t, !1),
            window.addEventListener("offline", r, !1),
            () => {
              (window.removeEventListener("online", t),
                window.removeEventListener("offline", r));
            }
          );
        }
      }));
  }
  onSubscribe() {
    this.#t || this.setEventListener(this.#n);
  }
  onUnsubscribe() {
    this.hasListeners() || (this.#t?.(), (this.#t = void 0));
  }
  setEventListener(e) {
    ((this.#n = e), this.#t?.(), (this.#t = e(this.setOnline.bind(this))));
  }
  setOnline(e) {
    this.#e !== e &&
      ((this.#e = e),
      this.listeners.forEach((t) => {
        t(e);
      }));
  }
  isOnline() {
    return this.#e;
  }
};
const Tc = new z4();
function k4(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function SS(e) {
  return (e ?? "online") === "online" ? Tc.isOnline() : !0;
}
var _m = class extends Error {
  constructor(e) {
    (super("CancelledError"),
      (this.revert = e?.revert),
      (this.silent = e?.silent));
  }
};
function _S(e) {
  let t = !1,
    r = 0,
    i,
    s = "pending",
    l,
    c;
  const d = new Promise((P, D) => {
    ((l = P), (c = D));
  });
  d.catch(xn);
  const m = () => s !== "pending",
    h = (P) => {
      if (!m()) {
        const D = new _m(P);
        (E(D), e.onCancel?.(D));
      }
    },
    y = () => {
      t = !0;
    },
    g = () => {
      t = !1;
    },
    v = () =>
      _p.isFocused() &&
      (e.networkMode === "always" || Tc.isOnline()) &&
      e.canRun(),
    _ = () => SS(e.networkMode) && e.canRun(),
    S = (P) => {
      m() || (i?.(), (s = "resolved"), l(P));
    },
    E = (P) => {
      m() || (i?.(), (s = "rejected"), c(P));
    },
    x = (P) =>
      new Promise((D) => {
        ((i = (B) => {
          (m() || P()) && D(B);
        }),
          e.onPause?.());
      }).then(() => {
        ((i = void 0), m() || e.onContinue?.());
      }),
    T = () => {
      if (m()) return;
      let P;
      const D = r === 0 ? e.initialPromise : void 0;
      try {
        P = D ?? e.fn();
      } catch (B) {
        P = Promise.reject(B);
      }
      Promise.resolve(P)
        .then(S)
        .catch((B) => {
          if (m()) return;
          const k = e.retry ?? (Sp() ? 0 : 3),
            C = e.retryDelay ?? k4,
            Y = typeof C == "function" ? C(r, B) : C,
            Q =
              k === !0 ||
              (typeof k == "number" && r < k) ||
              (typeof k == "function" && k(r, B));
          if (t || !Q) {
            E(B);
            return;
          }
          (r++,
            e.onFail?.(r, B),
            R4(Y)
              .then(() => (m() || v() ? void 0 : x(v)))
              .then(() => {
                t ? E(B) : T();
              }));
        });
    };
  return {
    promise: d,
    status: () => s,
    cancel: h,
    continue: () => (i?.(), d),
    cancelRetry: y,
    continueRetry: g,
    canStart: _,
    start: () => (_() ? T() : x(_).then(T), d),
  };
}
var ES = class {
  #e;
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    (this.clearGcTimeout(),
      pS(this.gcTime) &&
        (this.#e = Ti.setTimeout(() => {
          this.optionalRemove();
        }, this.gcTime)));
  }
  updateGcTime(e) {
    this.gcTime = Math.max(this.gcTime || 0, e ?? (Sp() ? 1 / 0 : 3e5));
  }
  clearGcTimeout() {
    this.#e !== void 0 && (Ti.clearTimeout(this.#e), (this.#e = void 0));
  }
};
function j4(e) {
  return {
    onFetch: (t, r) => {
      const i = t.options,
        s = t.fetchOptions?.meta?.fetchMore?.direction,
        l = t.state.data?.pages || [],
        c = t.state.data?.pageParams || [];
      let d = { pages: [], pageParams: [] },
        m = 0;
      const h = async () => {
        let y = !1;
        const g = t,
          v = (E) => {
            C4(
              E,
              () => t.signal,
              () => (y = !0),
              g[wp],
            );
          },
          _ = bS(t.options, t.fetchOptions),
          S = async (E, x, T) => {
            if (y) return Promise.reject(t.signal.reason);
            if (x == null && E.pages.length) return Promise.resolve(E);
            const D = (() => {
                const Y = {
                  client: t.client,
                  queryKey: t.queryKey,
                  pageParam: x,
                  direction: T ? "backward" : "forward",
                  meta: t.options.meta,
                };
                return (v(Y), Y);
              })(),
              B = await _(D),
              { maxPages: k } = t.options,
              C = T ? A4 : O4;
            return {
              pages: C(E.pages, B, k),
              pageParams: C(E.pageParams, x, k),
            };
          };
        if (s && l.length) {
          const E = s === "backward",
            x = E ? L4 : r1,
            T = { pages: l, pageParams: c };
          d = await S(T, x(i, T), E);
        } else {
          const E = e ?? l.length;
          do {
            const x =
              m === 0
                ? c[0] === void 0
                  ? i.initialPageParam
                  : c[0]
                : r1(i, d);
            if (m > 0 && x == null) break;
            ((d = await S(d, x)), m++);
          } while (m < E);
        }
        return d;
      };
      t.options.persister
        ? (t.fetchFn = () =>
            t.options.persister?.(
              h,
              {
                client: t.client,
                queryKey: t.queryKey,
                meta: t.options.meta,
                signal: t.signal,
              },
              r,
            ))
        : (t.fetchFn = h);
    },
  };
}
function r1(e, { pages: t, pageParams: r }) {
  const i = t.length - 1;
  return t.length > 0 ? e.getNextPageParam(t[i], t, r[i], r) : void 0;
}
function L4(e, { pages: t, pageParams: r }) {
  return t.length > 0 ? e.getPreviousPageParam?.(t[0], t, r[0], r) : void 0;
}
var U4 = class extends ES {
  #e;
  #t;
  #n;
  #r;
  #i;
  #a;
  #o;
  #l;
  #u;
  constructor(e) {
    (super(),
      (this.#u = !1),
      (this.#l = e.defaultOptions),
      this.setOptions(e.options),
      (this.observers = []),
      (this.#i = e.client),
      (this.#r = this.#i.getQueryCache()),
      (this.queryKey = e.queryKey),
      (this.queryHash = e.queryHash),
      (this.#t = i1(this.options)),
      (this.state = e.state ?? this.#t),
      this.scheduleGc());
  }
  get meta() {
    return this.options.meta;
  }
  get queryType() {
    return this.#e;
  }
  get promise() {
    return this.#a?.promise;
  }
  setOptions(e) {
    if (
      ((this.options = { ...this.#l, ...e }),
      e?._type && (this.#e = e._type),
      this.updateGcTime(this.options.gcTime),
      this.state && this.state.data === void 0)
    ) {
      const t = i1(this.options);
      t.data !== void 0 &&
        (this.setState(a1(t.data, t.dataUpdatedAt)), (this.#t = t));
    }
  }
  optionalRemove() {
    !this.observers.length &&
      this.state.fetchStatus === "idle" &&
      this.#r.remove(this);
  }
  setData(e, t) {
    const r = Sm(this.state.data, e, this.options);
    return (
      this.#s({
        data: r,
        type: "success",
        dataUpdatedAt: t?.updatedAt,
        manual: t?.manual,
      }),
      r
    );
  }
  setState(e) {
    this.#s({ type: "setState", state: e });
  }
  cancel(e) {
    const t = this.#a?.promise;
    return (this.#a?.cancel(e), t ? t.then(xn).catch(xn) : Promise.resolve());
  }
  destroy() {
    (super.destroy(), this.cancel({ silent: !0 }));
  }
  get resetState() {
    return this.#t;
  }
  reset() {
    (this.destroy(), this.setState(this.resetState));
  }
  isActive() {
    return this.observers.some((e) => wt(e.options.enabled, this) !== !1);
  }
  isDisabled() {
    return this.getObserversCount() > 0
      ? !this.isActive()
      : this.options.queryFn === bp || !this.isFetched();
  }
  isFetched() {
    return this.state.dataUpdateCount + this.state.errorUpdateCount > 0;
  }
  isStatic() {
    return this.state.data === void 0
      ? !1
      : this.getObserversCount() > 0
        ? this.observers.some((e) => wt(e.options.staleTime, this) === "static")
        : !1;
  }
  isStale() {
    return this.getObserversCount() > 0
      ? this.observers.some((e) => e.getCurrentResult().isStale)
      : this.state.data === void 0 || this.state.isInvalidated;
  }
  isStaleByTime(e = 0) {
    return this.state.data === void 0
      ? !0
      : e === "static"
        ? !1
        : this.state.isInvalidated
          ? !0
          : !yS(this.state.dataUpdatedAt, e);
  }
  onFocus() {
    (this.observers
      .find((e) => e.shouldFetchOnWindowFocus())
      ?.refetch({ cancelRefetch: !1 }),
      this.#a?.continue());
  }
  onOnline() {
    (this.observers
      .find((e) => e.shouldFetchOnReconnect())
      ?.refetch({ cancelRefetch: !1 }),
      this.#a?.continue());
  }
  addObserver(e) {
    this.observers.includes(e) ||
      (this.observers.push(e),
      this.clearGcTimeout(),
      this.#r.notify({ type: "observerAdded", query: this, observer: e }));
  }
  removeObserver(e) {
    const t = this.observers.indexOf(e);
    t !== -1 &&
      (this.observers.splice(t, 1),
      this.observers.length ||
        (this.#a &&
          (this.#u ||
          (this.state.fetchStatus === "paused" &&
            this.state.status === "pending")
            ? this.#a.cancel({ revert: !0 })
            : this.#a.cancelRetry()),
        this.scheduleGc()),
      this.#r.notify({ type: "observerRemoved", query: this, observer: e }));
  }
  getObserversCount() {
    return this.observers.length;
  }
  invalidate() {
    this.state.isInvalidated || this.#s({ type: "invalidate" });
  }
  async fetch(e, t) {
    if (this.state.fetchStatus !== "idle" && this.#a?.status() !== "rejected") {
      if (this.state.data !== void 0 && t?.cancelRefetch)
        this.cancel({ silent: !0 });
      else if (this.#a && this.#o) return (this.#a.continueRetry(), this.#o);
    }
    if ((e && this.setOptions(e), !this.options.queryFn)) {
      const h = this.observers.find((y) => y.options.queryFn);
      h && this.setOptions(h.options);
    }
    const r = new AbortController(),
      i = (h) => {
        Object.defineProperties(h, {
          [wp]: { value: r.signal, enumerable: !0 },
          signal: { enumerable: !0, get: () => ((this.#u = !0), r.signal) },
        });
      },
      s = () => {
        const h = bS(this.options, t),
          g = (() => {
            const v = {
              client: this.#i,
              queryKey: this.queryKey,
              meta: this.meta,
            };
            return (i(v), v);
          })();
        return (
          (this.#u = !1),
          this.options.persister ? this.options.persister(h, g, this) : h(g)
        );
      },
      c = (() => {
        const h = {
          fetchOptions: t,
          options: this.options,
          queryKey: this.queryKey,
          client: this.#i,
          state: this.state,
          fetchFn: s,
        };
        return (i(h), h);
      })();
    ((this.#e === "infinite"
      ? j4(this.options.pages)
      : this.options.behavior
    )?.onFetch(c, this),
      (this.#n = this.state),
      (this.state.fetchStatus === "idle" ||
        this.state.fetchMeta !== c.fetchOptions?.meta) &&
        this.#s({ type: "fetch", meta: c.fetchOptions?.meta }));
    const d = (this.#a = _S({
        initialPromise: t?.initialPromise,
        fn: c.fetchFn,
        onCancel: (h) => {
          (h instanceof _m &&
            h.revert &&
            this.setState({ ...this.#n, fetchStatus: "idle" }),
            r.abort());
        },
        onFail: (h, y) => {
          this.#s({ type: "failed", failureCount: h, error: y });
        },
        onPause: () => {
          this.#s({ type: "pause" });
        },
        onContinue: () => {
          this.#s({ type: "continue" });
        },
        retry: c.options.retry,
        retryDelay: c.options.retryDelay,
        networkMode: c.options.networkMode,
        canRun: () => !0,
      })),
      m = (async () => {
        try {
          const h = await d.promise;
          if (h === void 0)
            throw new Error(`${this.queryHash} data is undefined`);
          return (
            this.setData(h),
            this.#r.config.onSuccess?.(h, this),
            this.#r.config.onSettled?.(h, this.state.error, this),
            h
          );
        } catch (h) {
          if (h instanceof _m) {
            if (h.silent) {
              if (this.#a !== d && this.#o) return this.#o;
              throw h;
            } else if (h.revert) {
              if (this.state.data === void 0) throw h;
              return this.state.data;
            }
          }
          throw (
            this.#s({ type: "error", error: h }),
            this.#r.config.onError?.(h, this),
            this.#r.config.onSettled?.(this.state.data, h, this),
            h
          );
        } finally {
          (this.#a === d && ((this.#a = void 0), (this.#o = void 0)),
            this.scheduleGc());
        }
      })();
    return ((this.#o = m), d.start(), m);
  }
  #s(e) {
    const t = (r) => {
      switch (e.type) {
        case "failed":
          return {
            ...r,
            fetchFailureCount: e.failureCount,
            fetchFailureReason: e.error,
          };
        case "pause":
          return { ...r, fetchStatus: "paused" };
        case "continue":
          return { ...r, fetchStatus: "fetching" };
        case "fetch":
          return {
            ...r,
            ...xS(r.data, this.options),
            fetchMeta: e.meta ?? null,
          };
        case "success":
          const i = {
            ...r,
            ...a1(e.data, e.dataUpdatedAt),
            dataUpdateCount: r.dataUpdateCount + 1,
            ...(!e.manual && {
              fetchStatus: "idle",
              fetchFailureCount: 0,
              fetchFailureReason: null,
            }),
          };
          return ((this.#n = e.manual ? i : void 0), i);
        case "error":
          const s = e.error;
          return {
            ...r,
            error: s,
            errorUpdateCount: r.errorUpdateCount + 1,
            errorUpdatedAt: Date.now(),
            fetchFailureCount: r.fetchFailureCount + 1,
            fetchFailureReason: s,
            fetchStatus: "idle",
            status: "error",
            isInvalidated: !0,
          };
        case "invalidate":
          return { ...r, isInvalidated: !0 };
        case "setState":
          return { ...r, ...e.state };
      }
    };
    ((this.state = t(this.state)),
      nn.batch(() => {
        (this.observers.slice().forEach((r) => {
          r.onQueryUpdate();
        }),
          this.#r.notify({ query: this, type: "updated", action: e }));
      }));
  }
};
function xS(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: SS(t.networkMode) ? "fetching" : "paused",
    ...(e === void 0 && { error: null, status: "pending" }),
  };
}
function a1(e, t) {
  return {
    data: e,
    dataUpdatedAt: t ?? Date.now(),
    error: null,
    isInvalidated: !1,
    status: "success",
  };
}
function i1(e) {
  const t =
      typeof e.initialData == "function" ? e.initialData() : e.initialData,
    r = t !== void 0,
    i = r
      ? typeof e.initialDataUpdatedAt == "function"
        ? e.initialDataUpdatedAt()
        : e.initialDataUpdatedAt
      : 0;
  return {
    data: t,
    dataUpdateCount: 0,
    dataUpdatedAt: r ? (i ?? Date.now()) : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: r ? "success" : "pending",
    fetchStatus: "idle",
  };
}
var P4 = class extends Al {
  #e;
  #t = void 0;
  #n = void 0;
  #r = void 0;
  #i;
  #a;
  #o;
  #l;
  #u;
  #s;
  #f;
  #d;
  #c;
  #m = new Set();
  constructor(e, t) {
    (super(),
      (this.options = t),
      (this.#e = e),
      (this.#o = null),
      this.bindMethods(),
      this.setOptions(t));
  }
  bindMethods() {
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    this.listeners.size === 1 &&
      (this.#t.addObserver(this),
      o1(this.#t, this.options) ? this.#h() : this.updateResult(),
      this.#b());
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return Em(this.#t, this.options, this.options.refetchOnReconnect);
  }
  shouldFetchOnWindowFocus() {
    return Em(this.#t, this.options, this.options.refetchOnWindowFocus);
  }
  destroy() {
    ((this.listeners = new Set()),
      this.#w(),
      this.#S(),
      this.#t.removeObserver(this));
  }
  setOptions(e) {
    const t = this.options,
      r = this.#t;
    if (
      ((this.options = this.#e.defaultQueryOptions(e)),
      this.options.enabled !== void 0 &&
        typeof this.options.enabled != "boolean" &&
        typeof this.options.enabled != "function" &&
        typeof wt(this.options.enabled, this.#t) != "boolean")
    )
      throw new Error(
        "Expected enabled to be a boolean or a callback that returns a boolean",
      );
    (this.#_(),
      this.#t.setOptions(this.options),
      t._defaulted &&
        !Zh(this.options, t) &&
        this.#e
          .getQueryCache()
          .notify({
            type: "observerOptionsUpdated",
            query: this.#t,
            observer: this,
          }));
    const i = this.hasListeners();
    (i && s1(this.#t, r, this.options, t) && this.#h(),
      this.updateResult(),
      i &&
        (this.#t !== r ||
          wt(this.options.enabled, this.#t) !== wt(t.enabled, this.#t) ||
          wt(this.options.staleTime, this.#t) !== wt(t.staleTime, this.#t)) &&
        this.#y());
    const s = this.#g();
    i &&
      (this.#t !== r ||
        wt(this.options.enabled, this.#t) !== wt(t.enabled, this.#t) ||
        s !== this.#c) &&
      this.#v(s);
  }
  getOptimisticResult(e) {
    const t = this.#e.getQueryCache().build(this.#e, e),
      r = this.createResult(t, e);
    return (
      Zh(this.getCurrentResult(), r) ||
        ((this.#r = r), (this.#a = this.options), (this.#i = this.#t.state)),
      r
    );
  }
  getCurrentResult() {
    return this.#r;
  }
  trackResult(e, t) {
    return new Proxy(e, {
      get: (r, i) => (this.trackProp(i), t?.(i), Reflect.get(r, i)),
    });
  }
  trackProp(e) {
    this.#m.add(e);
  }
  getCurrentQuery() {
    return this.#t;
  }
  refetch({ ...e } = {}) {
    return this.fetch({ ...e });
  }
  fetchOptimistic(e) {
    const t = this.#e.defaultQueryOptions(e),
      r = this.#e.getQueryCache().build(this.#e, t);
    let i = () => {},
      s;
    const l = new Promise((c) => {
      ((s = c),
        (i = this.#e.getQueryCache().subscribe((d) => {
          d.type === "updated" &&
            d.query.queryHash === r.queryHash &&
            r.state.data !== void 0 &&
            (i(), c(this.createResult(r, t)));
        })));
    });
    return Promise.race([
      r
        .fetch(t)
        .then(() => {
          const c = this.createResult(r, t);
          return (s?.(c), c);
        })
        .finally(() => {
          i();
        }),
      l,
    ]);
  }
  fetch(e) {
    return this.#h({ ...e, cancelRefetch: e.cancelRefetch ?? !0 }).then(
      () => (this.updateResult(), this.#r),
    );
  }
  #h(e) {
    this.#_();
    let t = this.#t.fetch(this.options, e);
    return (e?.throwOnError || (t = t.catch(xn)), t);
  }
  #p(e) {
    return !Sp() && wt(this.options.enabled, this.#t) !== !1 && pS(e);
  }
  #y() {
    this.#w();
    const e = wt(this.options.staleTime, this.#t);
    if (this.#r.isStale || !this.#p(e)) return;
    const t = yS(this.#r.dataUpdatedAt, e) + 1;
    this.#f = Ti.setTimeout(() => {
      this.#r.isStale || this.updateResult();
    }, t);
  }
  #g() {
    return wt(this.options.refetchInterval, this.#t) ?? !1;
  }
  #v(e) {
    (this.#S(),
      (this.#c = e),
      !(this.#c === 0 || !this.#p(this.#c)) &&
        (this.#d = Ti.setInterval(() => {
          (this.options.refetchIntervalInBackground || _p.isFocused()) &&
            this.#h();
        }, this.#c)));
  }
  #b() {
    (this.#y(), this.#v(this.#g()));
  }
  #w() {
    this.#f !== void 0 && (Ti.clearTimeout(this.#f), (this.#f = void 0));
  }
  #S() {
    this.#d !== void 0 && (Ti.clearInterval(this.#d), (this.#d = void 0));
  }
  createResult(e, t) {
    const r = this.#t,
      i = this.options,
      s = this.#r,
      l = this.#i,
      c = this.#a,
      d = e !== r ? e.state : this.#n,
      { state: m } = e;
    let h = { ...m },
      y = !1,
      g;
    if (t._optimisticResults) {
      const k = this.hasListeners(),
        C = !k && o1(e, t),
        Y = k && s1(e, r, t, i);
      ((C || Y) && (h = { ...h, ...xS(m.data, e.options) }),
        t._optimisticResults === "isRestoring" && (h.fetchStatus = "idle"));
    }
    let { error: v, errorUpdatedAt: _, status: S } = h;
    g = h.data;
    let E = !1;
    if (t.placeholderData !== void 0 && g === void 0 && S === "pending") {
      let k;
      (s?.isPlaceholderData && t.placeholderData === c?.placeholderData
        ? ((k = s.data), (E = !0))
        : (k =
            typeof t.placeholderData == "function"
              ? t.placeholderData(this.#s?.state.data, this.#s)
              : t.placeholderData),
        k !== void 0 && ((S = "success"), (g = Sm(s?.data, k, t)), (y = !0)));
    }
    if (t.select && g !== void 0 && !E)
      if (s && g === l?.data && t.select === this.#l) g = this.#u;
      else
        try {
          ((this.#l = t.select),
            (g = t.select(g)),
            (g = Sm(s?.data, g, t)),
            (this.#u = g),
            (this.#o = null));
        } catch (k) {
          this.#o = k;
        }
    else g === void 0 && (this.#o = null);
    this.#o &&
      ((v = this.#o),
      (g = this.#u),
      (_ = s?.error === v ? s.errorUpdatedAt : Date.now()),
      (S = "error"),
      (y = !1));
    const x = h.fetchStatus === "fetching",
      T = S === "pending",
      P = S === "error",
      D = T && x,
      B = g !== void 0;
    return {
      status: S,
      fetchStatus: h.fetchStatus,
      isPending: T,
      isSuccess: S === "success",
      isError: P,
      isInitialLoading: D,
      isLoading: D,
      data: g,
      dataUpdatedAt: h.dataUpdatedAt,
      error: v,
      errorUpdatedAt: _,
      failureCount: h.fetchFailureCount,
      failureReason: h.fetchFailureReason,
      errorUpdateCount: h.errorUpdateCount,
      isFetched: e.isFetched(),
      isFetchedAfterMount:
        h.dataUpdateCount > d.dataUpdateCount ||
        h.errorUpdateCount > d.errorUpdateCount,
      isFetching: x,
      isRefetching: x && !T,
      isLoadingError: P && !B,
      isPaused: h.fetchStatus === "paused",
      isPlaceholderData: y,
      isRefetchError: P && B,
      isStale: Ep(e, t),
      refetch: this.refetch,
      isEnabled: wt(t.enabled, e) !== !1,
    };
  }
  updateResult() {
    const e = this.#r,
      t = this.createResult(this.#t, this.options);
    if (
      ((this.#i = this.#t.state),
      (this.#a = this.options),
      this.#i.data !== void 0 && (this.#s = this.#t),
      Zh(t, e))
    )
      return;
    this.#r = t;
    const i = (() => {
      if (!e) return !0;
      const { notifyOnChangeProps: s } = this.options,
        l = typeof s == "function" ? s() : s;
      if (
        l === "all" ||
        (!l && !this.#m.size) ||
        (this.options.throwOnError && this.#r.error !== e.error)
      )
        return !0;
      for (const c of l ?? this.#m) if (this.#r[c] !== e[c]) return !0;
      return !1;
    })();
    nn.batch(() => {
      (i &&
        this.listeners.forEach((s) => {
          s(this.#r);
        }),
        this.#e
          .getQueryCache()
          .notify({ query: this.#t, type: "observerResultsUpdated" }));
    });
  }
  #_() {
    const e = this.#e.getQueryCache().build(this.#e, this.options);
    if (e === this.#t) return;
    const t = this.#t;
    ((this.#t = e),
      (this.#n = e.state),
      this.hasListeners() && (t?.removeObserver(this), e.addObserver(this)));
  }
  onQueryUpdate() {
    (this.updateResult(), this.hasListeners() && this.#b());
  }
};
function F4(e, t) {
  return (
    wt(t.enabled, e) !== !1 &&
    e.state.data === void 0 &&
    !(e.state.status === "error" && wt(t.retryOnMount, e) === !1)
  );
}
function o1(e, t) {
  return F4(e, t) || (e.state.data !== void 0 && Em(e, t, t.refetchOnMount));
}
function Em(e, t, r) {
  if (wt(t.enabled, e) !== !1 && wt(t.staleTime, e) !== "static") {
    const i = wt(r, e);
    return i === "always" || (i !== !1 && Ep(e, t));
  }
  return !1;
}
function s1(e, t, r, i) {
  return (
    (e !== t || wt(i.enabled, e) === !1) &&
    (!r.suspense || e.state.status !== "error") &&
    Ep(e, r)
  );
}
function Ep(e, t) {
  return wt(t.enabled, e) !== !1 && e.isStaleByTime(wt(t.staleTime, e));
}
var B4 = class extends ES {
  #e;
  #t;
  #n;
  #r;
  constructor(e) {
    (super(),
      (this.#e = e.client),
      (this.mutationId = e.mutationId),
      (this.#n = e.mutationCache),
      (this.#t = []),
      (this.state = e.state || V4()),
      this.setOptions(e.options),
      this.scheduleGc());
  }
  setOptions(e) {
    ((this.options = e), this.updateGcTime(this.options.gcTime));
  }
  get meta() {
    return this.options.meta;
  }
  addObserver(e) {
    this.#t.includes(e) ||
      (this.#t.push(e),
      this.clearGcTimeout(),
      this.#n.notify({ type: "observerAdded", mutation: this, observer: e }));
  }
  removeObserver(e) {
    ((this.#t = this.#t.filter((t) => t !== e)),
      this.scheduleGc(),
      this.#n.notify({ type: "observerRemoved", mutation: this, observer: e }));
  }
  optionalRemove() {
    this.#t.length ||
      (this.state.status === "pending"
        ? this.scheduleGc()
        : this.#n.remove(this));
  }
  continue() {
    return (
      this.#r?.continue() ??
      (this.state.status === "pending"
        ? this.execute(this.state.variables)
        : Promise.resolve())
    );
  }
  async execute(e) {
    const t = () => {
        this.#i({ type: "continue" });
      },
      r = {
        client: this.#e,
        meta: this.options.meta,
        mutationKey: this.options.mutationKey,
      },
      i = (this.#r = _S({
        fn: () =>
          this.options.mutationFn
            ? this.options.mutationFn(e, r)
            : Promise.reject(new Error("No mutationFn found")),
        onFail: (c, d) => {
          this.#i({ type: "failed", failureCount: c, error: d });
        },
        onPause: () => {
          this.#i({ type: "pause" });
        },
        onContinue: t,
        retry: this.options.retry ?? 0,
        retryDelay: this.options.retryDelay,
        networkMode: this.options.networkMode,
        canRun: () => this.#n.canRun(this),
      })),
      s = this.state.status === "pending",
      l = !i.canStart();
    try {
      if (s) t();
      else {
        (this.#i({ type: "pending", variables: e, isPaused: l }),
          this.#n.config.onMutate &&
            (await this.#n.config.onMutate(e, this, r)));
        const d = await this.options.onMutate?.(e, r);
        d !== this.state.context &&
          this.#i({ type: "pending", context: d, variables: e, isPaused: l });
      }
      this.state.isPaused && i.canStart() && t();
      const c = await i.start();
      return (
        await this.#n.config.onSuccess?.(c, e, this.state.context, this, r),
        await this.options.onSuccess?.(c, e, this.state.context, r),
        await this.#n.config.onSettled?.(
          c,
          null,
          this.state.variables,
          this.state.context,
          this,
          r,
        ),
        await this.options.onSettled?.(c, null, e, this.state.context, r),
        this.#i({ type: "success", data: c }),
        c
      );
    } catch (c) {
      try {
        await this.#n.config.onError?.(c, e, this.state.context, this, r);
      } catch (d) {
        Promise.reject(d);
      }
      try {
        await this.options.onError?.(c, e, this.state.context, r);
      } catch (d) {
        Promise.reject(d);
      }
      try {
        await this.#n.config.onSettled?.(
          void 0,
          c,
          this.state.variables,
          this.state.context,
          this,
          r,
        );
      } catch (d) {
        Promise.reject(d);
      }
      try {
        await this.options.onSettled?.(void 0, c, e, this.state.context, r);
      } catch (d) {
        Promise.reject(d);
      }
      throw (this.#i({ type: "error", error: c }), c);
    } finally {
      (this.#r === i && (this.#r = void 0), this.#n.runNext(this));
    }
  }
  #i(e) {
    const t = (r) => {
      switch (e.type) {
        case "failed":
          return { ...r, failureCount: e.failureCount, failureReason: e.error };
        case "pause":
          return { ...r, isPaused: !0 };
        case "continue":
          return { ...r, isPaused: !1 };
        case "pending":
          return {
            ...r,
            context: e.context,
            data: void 0,
            failureCount: 0,
            failureReason: null,
            error: null,
            isPaused: e.isPaused,
            status: "pending",
            variables: e.variables,
            submittedAt: Date.now(),
          };
        case "success":
          return {
            ...r,
            data: e.data,
            failureCount: 0,
            failureReason: null,
            error: null,
            status: "success",
            isPaused: !1,
          };
        case "error":
          return {
            ...r,
            data: void 0,
            error: e.error,
            failureCount: r.failureCount + 1,
            failureReason: e.error,
            isPaused: !1,
            status: "error",
          };
      }
    };
    ((this.state = t(this.state)),
      nn.batch(() => {
        (this.#t.forEach((r) => {
          r.onMutationUpdate(e);
        }),
          this.#n.notify({ mutation: this, type: "updated", action: e }));
      }));
  }
};
function V4() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0,
  };
}
var $4 = class extends Al {
  #e;
  #t;
  #n;
  constructor(e = {}) {
    (super(),
      (this.config = e),
      (this.#e = new Set()),
      (this.#t = new Map()),
      (this.#n = 0));
  }
  build(e, t, r) {
    const i = new B4({
      client: e,
      mutationCache: this,
      mutationId: ++this.#n,
      options: e.defaultMutationOptions(t),
      state: r,
    });
    return (this.add(i), i);
  }
  add(e) {
    this.#e.add(e);
    const t = ec(e);
    if (typeof t == "string") {
      const r = this.#t.get(t);
      r ? r.push(e) : this.#t.set(t, [e]);
    }
    this.notify({ type: "added", mutation: e });
  }
  remove(e) {
    if (this.#e.delete(e)) {
      const t = ec(e);
      if (typeof t == "string") {
        const r = this.#t.get(t);
        if (r)
          if (r.length > 1) {
            const i = r.indexOf(e);
            i !== -1 && r.splice(i, 1);
          } else r[0] === e && this.#t.delete(t);
      }
    }
    this.notify({ type: "removed", mutation: e });
  }
  canRun(e) {
    const t = ec(e);
    if (typeof t == "string") {
      const r = this.#t.get(t)?.find((i) => i.state.status === "pending");
      return !r || r === e;
    } else return !0;
  }
  runNext(e) {
    const t = ec(e);
    return typeof t == "string"
      ? (this.#t
          .get(t)
          ?.find((r) => r !== e && r.state.isPaused)
          ?.continue() ?? Promise.resolve())
      : Promise.resolve();
  }
  clear() {
    nn.batch(() => {
      const e = this.getAll();
      (this.#e.clear(),
        this.#t.clear(),
        e.forEach((t) => {
          this.notify({ type: "removed", mutation: t });
        }));
    });
  }
  getAll() {
    return Array.from(this.#e);
  }
  find(e) {
    const t = { exact: !0, ...e };
    return this.getAll().find((r) => e1(t, r));
  }
  findAll(e = {}) {
    return this.getAll().filter((t) => e1(e, t));
  }
  notify(e) {
    nn.batch(() => {
      this.listeners.forEach((t) => {
        t(e);
      });
    });
  }
  resumePausedMutations() {
    const e = this.getAll().filter((t) => t.state.isPaused);
    return nn.batch(() => Promise.all(e.map((t) => t.continue().catch(xn))));
  }
};
function ec(e) {
  return e.options.scope?.id;
}
var H4 = class extends Al {
    #e;
    constructor(e = {}) {
      (super(), (this.config = e), (this.#e = new Map()));
    }
    build(e, t, r) {
      const i = t.queryKey,
        s = t.queryHash ?? vp(i, t);
      let l = this.get(s);
      return (
        l ||
          ((l = new U4({
            client: e,
            queryKey: i,
            queryHash: s,
            options: e.defaultQueryOptions(t),
            state: r,
            defaultOptions: e.getQueryDefaults(i),
          })),
          this.add(l)),
        l
      );
    }
    add(e) {
      this.#e.has(e.queryHash) ||
        (this.#e.set(e.queryHash, e), this.notify({ type: "added", query: e }));
    }
    remove(e) {
      this.#e.get(e.queryHash) === e &&
        (e.destroy(),
        this.#e.delete(e.queryHash),
        this.notify({ type: "removed", query: e }));
    }
    clear() {
      nn.batch(() => {
        this.getAll().forEach((e) => {
          this.remove(e);
        });
      });
    }
    get(e) {
      return this.#e.get(e);
    }
    getAll() {
      return [...this.#e.values()];
    }
    find(e) {
      const t = { exact: !0, ...e };
      return this.getAll().find((r) => Wb(t, r));
    }
    findAll(e = {}) {
      const t = this.getAll();
      return Object.keys(e).length > 0 ? t.filter((r) => Wb(e, r)) : t;
    }
    notify(e) {
      nn.batch(() => {
        this.listeners.forEach((t) => {
          t(e);
        });
      });
    }
    onFocus() {
      nn.batch(() => {
        this.getAll().forEach((e) => {
          e.onFocus();
        });
      });
    }
    onOnline() {
      nn.batch(() => {
        this.getAll().forEach((e) => {
          e.onOnline();
        });
      });
    }
  },
  I4 = class {
    #e;
    #t;
    #n;
    #r;
    #i;
    #a;
    #o;
    #l;
    constructor(e = {}) {
      ((this.#e = e.queryCache || new H4()),
        (this.#t = e.mutationCache || new $4()),
        (this.#n = e.defaultOptions || {}),
        (this.#r = new Map()),
        (this.#i = new Map()),
        (this.#a = 0));
    }
    mount() {
      (this.#a++,
        this.#a === 1 &&
          ((this.#o = _p.subscribe(async (e) => {
            e && (await this.resumePausedMutations(), this.#e.onFocus());
          })),
          (this.#l = Tc.subscribe(async (e) => {
            e && (await this.resumePausedMutations(), this.#e.onOnline());
          }))));
    }
    unmount() {
      (this.#a--,
        this.#a === 0 &&
          (this.#o?.(), (this.#o = void 0), this.#l?.(), (this.#l = void 0)));
    }
    isFetching(e) {
      return this.#e.findAll({ ...e, fetchStatus: "fetching" }).length;
    }
    isMutating(e) {
      return this.#t.findAll({ ...e, status: "pending" }).length;
    }
    getQueryData(e) {
      const t = this.defaultQueryOptions({ queryKey: e });
      return this.#e.get(t.queryHash)?.state.data;
    }
    ensureQueryData(e) {
      const t = this.defaultQueryOptions(e),
        r = this.#e.build(this, t),
        i = r.state.data;
      return i === void 0
        ? this.fetchQuery(e)
        : (e.revalidateIfStale &&
            r.isStaleByTime(wt(t.staleTime, r)) &&
            this.prefetchQuery(t),
          Promise.resolve(i));
    }
    getQueriesData(e) {
      return this.#e.findAll(e).map(({ queryKey: t, state: r }) => [t, r.data]);
    }
    setQueryData(e, t, r) {
      const i = this.defaultQueryOptions({ queryKey: e }),
        s = this.#e.get(i.queryHash)?.state.data,
        l = x4(t, s);
      if (l !== void 0)
        return this.#e.build(this, i).setData(l, { ...r, manual: !0 });
    }
    setQueriesData(e, t, r) {
      return nn.batch(() =>
        this.#e
          .findAll(e)
          .map(({ queryKey: i }) => [i, this.setQueryData(i, t, r)]),
      );
    }
    getQueryState(e) {
      const t = this.defaultQueryOptions({ queryKey: e });
      return this.#e.get(t.queryHash)?.state;
    }
    removeQueries(e) {
      const t = this.#e;
      nn.batch(() => {
        t.findAll(e).forEach((r) => {
          t.remove(r);
        });
      });
    }
    resetQueries(e, t) {
      const r = this.#e;
      return nn.batch(() => {
        const i = r.findAll(e),
          s = new Set(i);
        return (
          i.forEach((l) => {
            l.reset();
          }),
          this.refetchQueries({ type: "active", predicate: (l) => s.has(l) }, t)
        );
      });
    }
    cancelQueries(e, t = {}) {
      const r = { revert: !0, ...t },
        i = nn.batch(() => this.#e.findAll(e).map((s) => s.cancel(r)));
      return Promise.all(i).then(xn).catch(xn);
    }
    invalidateQueries(e, t = {}) {
      return nn.batch(
        () => (
          this.#e.findAll(e).forEach((r) => {
            r.invalidate();
          }),
          e?.refetchType === "none"
            ? Promise.resolve()
            : this.refetchQueries(
                { ...e, type: e?.refetchType ?? e?.type ?? "active" },
                t,
              )
        ),
      );
    }
    refetchQueries(e, t = {}) {
      const r = { ...t, cancelRefetch: t.cancelRefetch ?? !0 },
        i = nn.batch(() =>
          this.#e
            .findAll(e)
            .filter((s) => !s.isDisabled() && !s.isStatic())
            .map((s) => {
              let l = s.fetch(void 0, r);
              const c = s.state.fetchStatus === "paused";
              return (
                (!r.throwOnError || c) && (l = l.catch(xn)),
                c ? Promise.resolve() : l
              );
            }),
        );
      return Promise.all(i).then(xn);
    }
    async query(e) {
      const t = this.defaultQueryOptions(e);
      t.retry === void 0 && (t.retry = !1);
      const r = this.#e.build(this, t),
        i = r.isStaleByTime(wt(t.staleTime, r))
          ? await r.fetch(t)
          : r.state.data,
        s = t.select;
      return s ? s(i) : i;
    }
    fetchQuery(e) {
      const t = this.defaultQueryOptions(e);
      t.retry === void 0 && (t.retry = !1);
      const r = this.#e.build(this, t);
      return r.isStaleByTime(wt(t.staleTime, r))
        ? r.fetch(t)
        : Promise.resolve(r.state.data);
    }
    prefetchQuery(e) {
      return this.fetchQuery(e).then(xn).catch(xn);
    }
    infiniteQuery(e) {
      return ((e._type = "infinite"), this.query(e));
    }
    fetchInfiniteQuery(e) {
      return ((e._type = "infinite"), this.fetchQuery(e));
    }
    prefetchInfiniteQuery(e) {
      return this.fetchInfiniteQuery(e).then(xn).catch(xn);
    }
    ensureInfiniteQueryData(e) {
      return ((e._type = "infinite"), this.ensureQueryData(e));
    }
    resumePausedMutations() {
      return Tc.isOnline()
        ? this.#t.resumePausedMutations()
        : Promise.resolve();
    }
    getQueryCache() {
      return this.#e;
    }
    getMutationCache() {
      return this.#t;
    }
    getDefaultOptions() {
      return this.#n;
    }
    setDefaultOptions(e) {
      this.#n = e;
    }
    setQueryDefaults(e, t) {
      this.#r.set(hl(e), { queryKey: e, defaultOptions: t });
    }
    getQueryDefaults(e) {
      const t = [...this.#r.values()],
        r = {};
      return (
        t.forEach((i) => {
          Po(e, i.queryKey) && Object.assign(r, i.defaultOptions);
        }),
        r
      );
    }
    setMutationDefaults(e, t) {
      this.#i.set(hl(e), { mutationKey: e, defaultOptions: t });
    }
    getMutationDefaults(e) {
      const t = [...this.#i.values()],
        r = {};
      return (
        t.forEach((i) => {
          Po(e, i.mutationKey) && Object.assign(r, i.defaultOptions);
        }),
        r
      );
    }
    defaultQueryOptions(e) {
      if (e._defaulted) return e;
      const t = {
        ...this.#n.queries,
        ...this.getQueryDefaults(e.queryKey),
        ...e,
        _defaulted: !0,
      };
      return (
        t.queryHash || (t.queryHash = vp(t.queryKey, t)),
        t.refetchOnReconnect === void 0 &&
          (t.refetchOnReconnect = t.networkMode !== "always"),
        t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
        !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
        t.queryFn === bp && (t.enabled = !1),
        t
      );
    }
    defaultMutationOptions(e) {
      return e?._defaulted
        ? e
        : {
            ...this.#n.mutations,
            ...(e?.mutationKey && this.getMutationDefaults(e.mutationKey)),
            ...e,
            _defaulted: !0,
          };
    }
    clear() {
      (this.#e.clear(), this.#t.clear());
    }
  };
const RS = w.createContext(!1),
  Z4 = () => w.useContext(RS);
RS.Provider;
function q4() {
  let e = !1;
  return {
    clearReset: () => {
      e = !1;
    },
    reset: () => {
      e = !0;
    },
    isReset: () => e,
  };
}
const G4 = w.createContext(q4()),
  Y4 = () => w.useContext(G4),
  K4 = (e, t, r) => {
    const i =
      r?.state.status === "error" && typeof e.throwOnError == "function"
        ? wS(e.throwOnError, [r.state.error, r])
        : e.throwOnError;
    (e.suspense || i) && (t.isReset() || (e.retryOnMount = !1));
  },
  Q4 = (e) => {
    w.useEffect(() => {
      e.clearReset();
    }, [e]);
  },
  X4 = ({
    result: e,
    errorResetBoundary: t,
    throwOnError: r,
    query: i,
    suspense: s,
  }) =>
    e.isError &&
    !t.isReset() &&
    !e.isFetching &&
    i &&
    ((s && e.data === void 0) || wS(r, [e.error, i])),
  J4 = (e) => {
    if (e.suspense) {
      const r = (s) => (s === "static" ? s : Math.max(s ?? 1e3, 1e3)),
        i = e.staleTime;
      ((e.staleTime = typeof i == "function" ? (...s) => r(i(...s)) : r(i)),
        typeof e.gcTime == "number" && (e.gcTime = Math.max(e.gcTime, 1e3)));
    }
  },
  W4 = (e, t) => e?.suspense && t.isPending,
  e3 = (e, t, r) =>
    t.fetchOptimistic(e).catch(() => {
      r.clearReset();
    });
function t3(e, t, r) {
  const i = Z4(),
    s = Y4(),
    l = mS(),
    c = l.defaultQueryOptions(e),
    d = l.getQueryCache().get(c.queryHash),
    m = e.subscribed !== !1;
  ((c._optimisticResults = i ? "isRestoring" : m ? "optimistic" : void 0),
    J4(c),
    K4(c, s, d),
    Q4(s));
  const [h] = w.useState(() => new t(l, c)),
    y = h.getOptimisticResult(c);
  w.useEffect(() => {
    h.setOptions(c);
  }, [c, h]);
  const g = !i && m;
  if (
    (w.useSyncExternalStore(
      w.useCallback(
        (v) => {
          const _ = g ? h.subscribe(nn.batchCalls(v)) : xn;
          return (h.updateResult(), _);
        },
        [h, g],
      ),
      () => h.getCurrentResult(),
      () => h.getCurrentResult(),
    ),
    W4(c, y))
  )
    throw e3(c, h, s);
  if (
    X4({
      result: y,
      errorResetBoundary: s,
      throwOnError: c.throwOnError,
      query: d,
      suspense: c.suspense,
    })
  )
    throw y.error;
  return c.notifyOnChangeProps ? y : h.trackResult(y);
}
function n3(e, t) {
  return t3(e, P4);
}
const vc = ["user", "profile"];
function r3(e = !0) {
  return n3({
    queryKey: vc,
    queryFn: p4,
    enabled: e,
    staleTime: 300 * 1e3,
    refetchOnWindowFocus: !1,
    retry: 1,
  });
}
const OS = w.createContext(null),
  a3 = ({ children: e }) => {
    const t = mS(),
      { data: r } = r3(),
      i = w.useMemo(
        () =>
          r
            ? {
                profileImage: i3(r.profilepic_id),
                nickname: r.nickname ?? "",
                points: r.remaining_points,
              }
            : null,
        [r],
      ),
      s = (d) => {
        t.setQueryData(vc, d);
      },
      l = async () => {
        const d = await v4();
        return (d && t.setQueryData(vc, null), d);
      },
      c = async (d, m) => {
        const h = await g4(d, m);
        return h ? (t.setQueryData(vc, h), !0) : !1;
      };
    return j.jsx(OS.Provider, {
      value: { user: i, login: s, logout: l, updateProfile: c },
      children: e,
    });
  },
  xp = () => {
    const e = w.useContext(OS);
    if (!e) throw new Error("useUser must be used within a UserProvider");
    return e;
  },
  sa = [Oc, Qw, Xw, Jw, Ww, e2];
function i3(e) {
  return e ? (sa[(e - 1) % sa.length] ?? Oc) : Oc;
}
function AS(e) {
  const t = e + "CollectionProvider",
    [r, i] = Io(t),
    [s, l] = r(t, { collectionRef: { current: null }, itemMap: new Map() }),
    c = (E) => {
      const { scope: x, children: T } = E,
        P = Re.useRef(null),
        D = Re.useRef(new Map()).current;
      return j.jsx(s, { scope: x, itemMap: D, collectionRef: P, children: T });
    };
  c.displayName = t;
  const d = e + "CollectionSlot",
    m = dl(d),
    h = Re.forwardRef((E, x) => {
      const { scope: T, children: P } = E,
        D = l(d, T),
        B = sn(x, D.collectionRef);
      return j.jsx(m, { ref: B, children: P });
    });
  h.displayName = d;
  const y = e + "CollectionItemSlot",
    g = "data-radix-collection-item",
    v = dl(y),
    _ = Re.forwardRef((E, x) => {
      const { scope: T, children: P, ...D } = E,
        B = Re.useRef(null),
        k = sn(x, B),
        C = l(y, T);
      return (
        Re.useEffect(
          () => (
            C.itemMap.set(B, { ref: B, ...D }),
            () => void C.itemMap.delete(B)
          ),
        ),
        j.jsx(v, { [g]: "", ref: k, children: P })
      );
    });
  _.displayName = y;
  function S(E) {
    const x = l(e + "CollectionConsumer", E);
    return Re.useCallback(() => {
      const P = x.collectionRef.current;
      if (!P) return [];
      const D = Array.from(P.querySelectorAll(`[${g}]`));
      return Array.from(x.itemMap.values()).sort(
        (C, Y) => D.indexOf(C.ref.current) - D.indexOf(Y.ref.current),
      );
    }, [x.collectionRef, x.itemMap]);
  }
  return [{ Provider: c, Slot: h, ItemSlot: _ }, S, i];
}
var o3 = w.createContext(void 0);
function CS(e) {
  const t = w.useContext(o3);
  return e || t || "ltr";
}
const s3 = ["top", "right", "bottom", "left"],
  Ka = Math.min,
  Bn = Math.max,
  Dc = Math.round,
  tc = Math.floor,
  Mr = (e) => ({ x: e, y: e }),
  l3 = { left: "right", right: "left", bottom: "top", top: "bottom" },
  u3 = { start: "end", end: "start" };
function xm(e, t, r) {
  return Bn(e, Ka(t, r));
}
function ca(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function fa(e) {
  return e.split("-")[0];
}
function Go(e) {
  return e.split("-")[1];
}
function Rp(e) {
  return e === "x" ? "y" : "x";
}
function Op(e) {
  return e === "y" ? "height" : "width";
}
const c3 = new Set(["top", "bottom"]);
function Cr(e) {
  return c3.has(fa(e)) ? "y" : "x";
}
function Ap(e) {
  return Rp(Cr(e));
}
function f3(e, t, r) {
  r === void 0 && (r = !1);
  const i = Go(e),
    s = Ap(e),
    l = Op(s);
  let c =
    s === "x"
      ? i === (r ? "end" : "start")
        ? "right"
        : "left"
      : i === "start"
        ? "bottom"
        : "top";
  return (t.reference[l] > t.floating[l] && (c = Mc(c)), [c, Mc(c)]);
}
function d3(e) {
  const t = Mc(e);
  return [Rm(e), t, Rm(t)];
}
function Rm(e) {
  return e.replace(/start|end/g, (t) => u3[t]);
}
const l1 = ["left", "right"],
  u1 = ["right", "left"],
  h3 = ["top", "bottom"],
  m3 = ["bottom", "top"];
function p3(e, t, r) {
  switch (e) {
    case "top":
    case "bottom":
      return r ? (t ? u1 : l1) : t ? l1 : u1;
    case "left":
    case "right":
      return t ? h3 : m3;
    default:
      return [];
  }
}
function y3(e, t, r, i) {
  const s = Go(e);
  let l = p3(fa(e), r === "start", i);
  return (
    s && ((l = l.map((c) => c + "-" + s)), t && (l = l.concat(l.map(Rm)))),
    l
  );
}
function Mc(e) {
  return e.replace(/left|right|bottom|top/g, (t) => l3[t]);
}
function g3(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function TS(e) {
  return typeof e != "number"
    ? g3(e)
    : { top: e, right: e, bottom: e, left: e };
}
function Nc(e) {
  const { x: t, y: r, width: i, height: s } = e;
  return {
    width: i,
    height: s,
    top: r,
    left: t,
    right: t + i,
    bottom: r + s,
    x: t,
    y: r,
  };
}
function c1(e, t, r) {
  let { reference: i, floating: s } = e;
  const l = Cr(t),
    c = Ap(t),
    d = Op(c),
    m = fa(t),
    h = l === "y",
    y = i.x + i.width / 2 - s.width / 2,
    g = i.y + i.height / 2 - s.height / 2,
    v = i[d] / 2 - s[d] / 2;
  let _;
  switch (m) {
    case "top":
      _ = { x: y, y: i.y - s.height };
      break;
    case "bottom":
      _ = { x: y, y: i.y + i.height };
      break;
    case "right":
      _ = { x: i.x + i.width, y: g };
      break;
    case "left":
      _ = { x: i.x - s.width, y: g };
      break;
    default:
      _ = { x: i.x, y: i.y };
  }
  switch (Go(t)) {
    case "start":
      _[c] -= v * (r && h ? -1 : 1);
      break;
    case "end":
      _[c] += v * (r && h ? -1 : 1);
      break;
  }
  return _;
}
const v3 = async (e, t, r) => {
  const {
      placement: i = "bottom",
      strategy: s = "absolute",
      middleware: l = [],
      platform: c,
    } = r,
    d = l.filter(Boolean),
    m = await (c.isRTL == null ? void 0 : c.isRTL(t));
  let h = await c.getElementRects({ reference: e, floating: t, strategy: s }),
    { x: y, y: g } = c1(h, i, m),
    v = i,
    _ = {},
    S = 0;
  for (let E = 0; E < d.length; E++) {
    const { name: x, fn: T } = d[E],
      {
        x: P,
        y: D,
        data: B,
        reset: k,
      } = await T({
        x: y,
        y: g,
        initialPlacement: i,
        placement: v,
        strategy: s,
        middlewareData: _,
        rects: h,
        platform: c,
        elements: { reference: e, floating: t },
      });
    ((y = P ?? y),
      (g = D ?? g),
      (_ = { ..._, [x]: { ..._[x], ...B } }),
      k &&
        S <= 50 &&
        (S++,
        typeof k == "object" &&
          (k.placement && (v = k.placement),
          k.rects &&
            (h =
              k.rects === !0
                ? await c.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: s,
                  })
                : k.rects),
          ({ x: y, y: g } = c1(h, v, m))),
        (E = -1)));
  }
  return { x: y, y: g, placement: v, strategy: s, middlewareData: _ };
};
async function ml(e, t) {
  var r;
  t === void 0 && (t = {});
  const { x: i, y: s, platform: l, rects: c, elements: d, strategy: m } = e,
    {
      boundary: h = "clippingAncestors",
      rootBoundary: y = "viewport",
      elementContext: g = "floating",
      altBoundary: v = !1,
      padding: _ = 0,
    } = ca(t, e),
    S = TS(_),
    x = d[v ? (g === "floating" ? "reference" : "floating") : g],
    T = Nc(
      await l.getClippingRect({
        element:
          (r = await (l.isElement == null ? void 0 : l.isElement(x))) == null ||
          r
            ? x
            : x.contextElement ||
              (await (l.getDocumentElement == null
                ? void 0
                : l.getDocumentElement(d.floating))),
        boundary: h,
        rootBoundary: y,
        strategy: m,
      }),
    ),
    P =
      g === "floating"
        ? { x: i, y: s, width: c.floating.width, height: c.floating.height }
        : c.reference,
    D = await (l.getOffsetParent == null
      ? void 0
      : l.getOffsetParent(d.floating)),
    B = (await (l.isElement == null ? void 0 : l.isElement(D)))
      ? (await (l.getScale == null ? void 0 : l.getScale(D))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    k = Nc(
      l.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await l.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: d,
            rect: P,
            offsetParent: D,
            strategy: m,
          })
        : P,
    );
  return {
    top: (T.top - k.top + S.top) / B.y,
    bottom: (k.bottom - T.bottom + S.bottom) / B.y,
    left: (T.left - k.left + S.left) / B.x,
    right: (k.right - T.right + S.right) / B.x,
  };
}
const b3 = (e) => ({
    name: "arrow",
    options: e,
    async fn(t) {
      const {
          x: r,
          y: i,
          placement: s,
          rects: l,
          platform: c,
          elements: d,
          middlewareData: m,
        } = t,
        { element: h, padding: y = 0 } = ca(e, t) || {};
      if (h == null) return {};
      const g = TS(y),
        v = { x: r, y: i },
        _ = Ap(s),
        S = Op(_),
        E = await c.getDimensions(h),
        x = _ === "y",
        T = x ? "top" : "left",
        P = x ? "bottom" : "right",
        D = x ? "clientHeight" : "clientWidth",
        B = l.reference[S] + l.reference[_] - v[_] - l.floating[S],
        k = v[_] - l.reference[_],
        C = await (c.getOffsetParent == null ? void 0 : c.getOffsetParent(h));
      let Y = C ? C[D] : 0;
      (!Y || !(await (c.isElement == null ? void 0 : c.isElement(C)))) &&
        (Y = d.floating[D] || l.floating[S]);
      const Q = B / 2 - k / 2,
        me = Y / 2 - E[S] / 2 - 1,
        pe = Ka(g[T], me),
        we = Ka(g[P], me),
        be = pe,
        Se = Y - E[S] - we,
        ce = Y / 2 - E[S] / 2 + Q,
        ge = xm(be, ce, Se),
        U =
          !m.arrow &&
          Go(s) != null &&
          ce !== ge &&
          l.reference[S] / 2 - (ce < be ? pe : we) - E[S] / 2 < 0,
        ne = U ? (ce < be ? ce - be : ce - Se) : 0;
      return {
        [_]: v[_] + ne,
        data: {
          [_]: ge,
          centerOffset: ce - ge - ne,
          ...(U && { alignmentOffset: ne }),
        },
        reset: U,
      };
    },
  }),
  w3 = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "flip",
        options: e,
        async fn(t) {
          var r, i;
          const {
              placement: s,
              middlewareData: l,
              rects: c,
              initialPlacement: d,
              platform: m,
              elements: h,
            } = t,
            {
              mainAxis: y = !0,
              crossAxis: g = !0,
              fallbackPlacements: v,
              fallbackStrategy: _ = "bestFit",
              fallbackAxisSideDirection: S = "none",
              flipAlignment: E = !0,
              ...x
            } = ca(e, t);
          if ((r = l.arrow) != null && r.alignmentOffset) return {};
          const T = fa(s),
            P = Cr(d),
            D = fa(d) === d,
            B = await (m.isRTL == null ? void 0 : m.isRTL(h.floating)),
            k = v || (D || !E ? [Mc(d)] : d3(d)),
            C = S !== "none";
          !v && C && k.push(...y3(d, E, S, B));
          const Y = [d, ...k],
            Q = await ml(t, x),
            me = [];
          let pe = ((i = l.flip) == null ? void 0 : i.overflows) || [];
          if ((y && me.push(Q[T]), g)) {
            const ce = f3(s, c, B);
            me.push(Q[ce[0]], Q[ce[1]]);
          }
          if (
            ((pe = [...pe, { placement: s, overflows: me }]),
            !me.every((ce) => ce <= 0))
          ) {
            var we, be;
            const ce = (((we = l.flip) == null ? void 0 : we.index) || 0) + 1,
              ge = Y[ce];
            if (
              ge &&
              (!(g === "alignment" ? P !== Cr(ge) : !1) ||
                pe.every((q) =>
                  Cr(q.placement) === P ? q.overflows[0] > 0 : !0,
                ))
            )
              return {
                data: { index: ce, overflows: pe },
                reset: { placement: ge },
              };
            let U =
              (be = pe
                .filter((ne) => ne.overflows[0] <= 0)
                .sort((ne, q) => ne.overflows[1] - q.overflows[1])[0]) == null
                ? void 0
                : be.placement;
            if (!U)
              switch (_) {
                case "bestFit": {
                  var Se;
                  const ne =
                    (Se = pe
                      .filter((q) => {
                        if (C) {
                          const ie = Cr(q.placement);
                          return ie === P || ie === "y";
                        }
                        return !0;
                      })
                      .map((q) => [
                        q.placement,
                        q.overflows
                          .filter((ie) => ie > 0)
                          .reduce((ie, N) => ie + N, 0),
                      ])
                      .sort((q, ie) => q[1] - ie[1])[0]) == null
                      ? void 0
                      : Se[0];
                  ne && (U = ne);
                  break;
                }
                case "initialPlacement":
                  U = d;
                  break;
              }
            if (s !== U) return { reset: { placement: U } };
          }
          return {};
        },
      }
    );
  };
function f1(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width,
  };
}
function d1(e) {
  return s3.some((t) => e[t] >= 0);
}
const S3 = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "hide",
        options: e,
        async fn(t) {
          const { rects: r } = t,
            { strategy: i = "referenceHidden", ...s } = ca(e, t);
          switch (i) {
            case "referenceHidden": {
              const l = await ml(t, { ...s, elementContext: "reference" }),
                c = f1(l, r.reference);
              return {
                data: { referenceHiddenOffsets: c, referenceHidden: d1(c) },
              };
            }
            case "escaped": {
              const l = await ml(t, { ...s, altBoundary: !0 }),
                c = f1(l, r.floating);
              return { data: { escapedOffsets: c, escaped: d1(c) } };
            }
            default:
              return {};
          }
        },
      }
    );
  },
  DS = new Set(["left", "top"]);
async function _3(e, t) {
  const { placement: r, platform: i, elements: s } = e,
    l = await (i.isRTL == null ? void 0 : i.isRTL(s.floating)),
    c = fa(r),
    d = Go(r),
    m = Cr(r) === "y",
    h = DS.has(c) ? -1 : 1,
    y = l && m ? -1 : 1,
    g = ca(t, e);
  let {
    mainAxis: v,
    crossAxis: _,
    alignmentAxis: S,
  } = typeof g == "number"
    ? { mainAxis: g, crossAxis: 0, alignmentAxis: null }
    : {
        mainAxis: g.mainAxis || 0,
        crossAxis: g.crossAxis || 0,
        alignmentAxis: g.alignmentAxis,
      };
  return (
    d && typeof S == "number" && (_ = d === "end" ? S * -1 : S),
    m ? { x: _ * y, y: v * h } : { x: v * h, y: _ * y }
  );
}
const E3 = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: "offset",
        options: e,
        async fn(t) {
          var r, i;
          const { x: s, y: l, placement: c, middlewareData: d } = t,
            m = await _3(t, e);
          return c === ((r = d.offset) == null ? void 0 : r.placement) &&
            (i = d.arrow) != null &&
            i.alignmentOffset
            ? {}
            : { x: s + m.x, y: l + m.y, data: { ...m, placement: c } };
        },
      }
    );
  },
  x3 = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "shift",
        options: e,
        async fn(t) {
          const { x: r, y: i, placement: s } = t,
            {
              mainAxis: l = !0,
              crossAxis: c = !1,
              limiter: d = {
                fn: (x) => {
                  let { x: T, y: P } = x;
                  return { x: T, y: P };
                },
              },
              ...m
            } = ca(e, t),
            h = { x: r, y: i },
            y = await ml(t, m),
            g = Cr(fa(s)),
            v = Rp(g);
          let _ = h[v],
            S = h[g];
          if (l) {
            const x = v === "y" ? "top" : "left",
              T = v === "y" ? "bottom" : "right",
              P = _ + y[x],
              D = _ - y[T];
            _ = xm(P, _, D);
          }
          if (c) {
            const x = g === "y" ? "top" : "left",
              T = g === "y" ? "bottom" : "right",
              P = S + y[x],
              D = S - y[T];
            S = xm(P, S, D);
          }
          const E = d.fn({ ...t, [v]: _, [g]: S });
          return {
            ...E,
            data: { x: E.x - r, y: E.y - i, enabled: { [v]: l, [g]: c } },
          };
        },
      }
    );
  },
  R3 = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        options: e,
        fn(t) {
          const { x: r, y: i, placement: s, rects: l, middlewareData: c } = t,
            { offset: d = 0, mainAxis: m = !0, crossAxis: h = !0 } = ca(e, t),
            y = { x: r, y: i },
            g = Cr(s),
            v = Rp(g);
          let _ = y[v],
            S = y[g];
          const E = ca(d, t),
            x =
              typeof E == "number"
                ? { mainAxis: E, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...E };
          if (m) {
            const D = v === "y" ? "height" : "width",
              B = l.reference[v] - l.floating[D] + x.mainAxis,
              k = l.reference[v] + l.reference[D] - x.mainAxis;
            _ < B ? (_ = B) : _ > k && (_ = k);
          }
          if (h) {
            var T, P;
            const D = v === "y" ? "width" : "height",
              B = DS.has(fa(s)),
              k =
                l.reference[g] -
                l.floating[D] +
                ((B && ((T = c.offset) == null ? void 0 : T[g])) || 0) +
                (B ? 0 : x.crossAxis),
              C =
                l.reference[g] +
                l.reference[D] +
                (B ? 0 : ((P = c.offset) == null ? void 0 : P[g]) || 0) -
                (B ? x.crossAxis : 0);
            S < k ? (S = k) : S > C && (S = C);
          }
          return { [v]: _, [g]: S };
        },
      }
    );
  },
  O3 = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "size",
        options: e,
        async fn(t) {
          var r, i;
          const { placement: s, rects: l, platform: c, elements: d } = t,
            { apply: m = () => {}, ...h } = ca(e, t),
            y = await ml(t, h),
            g = fa(s),
            v = Go(s),
            _ = Cr(s) === "y",
            { width: S, height: E } = l.floating;
          let x, T;
          g === "top" || g === "bottom"
            ? ((x = g),
              (T =
                v ===
                ((await (c.isRTL == null ? void 0 : c.isRTL(d.floating)))
                  ? "start"
                  : "end")
                  ? "left"
                  : "right"))
            : ((T = g), (x = v === "end" ? "top" : "bottom"));
          const P = E - y.top - y.bottom,
            D = S - y.left - y.right,
            B = Ka(E - y[x], P),
            k = Ka(S - y[T], D),
            C = !t.middlewareData.shift;
          let Y = B,
            Q = k;
          if (
            ((r = t.middlewareData.shift) != null && r.enabled.x && (Q = D),
            (i = t.middlewareData.shift) != null && i.enabled.y && (Y = P),
            C && !v)
          ) {
            const pe = Bn(y.left, 0),
              we = Bn(y.right, 0),
              be = Bn(y.top, 0),
              Se = Bn(y.bottom, 0);
            _
              ? (Q =
                  S -
                  2 * (pe !== 0 || we !== 0 ? pe + we : Bn(y.left, y.right)))
              : (Y =
                  E -
                  2 * (be !== 0 || Se !== 0 ? be + Se : Bn(y.top, y.bottom)));
          }
          await m({ ...t, availableWidth: Q, availableHeight: Y });
          const me = await c.getDimensions(d.floating);
          return S !== me.width || E !== me.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function af() {
  return typeof window < "u";
}
function Yo(e) {
  return MS(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function $n(e) {
  var t;
  return (
    (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
    window
  );
}
function Ur(e) {
  var t;
  return (t = (MS(e) ? e.ownerDocument : e.document) || window.document) == null
    ? void 0
    : t.documentElement;
}
function MS(e) {
  return af() ? e instanceof Node || e instanceof $n(e).Node : !1;
}
function hr(e) {
  return af() ? e instanceof Element || e instanceof $n(e).Element : !1;
}
function Nr(e) {
  return af() ? e instanceof HTMLElement || e instanceof $n(e).HTMLElement : !1;
}
function h1(e) {
  return !af() || typeof ShadowRoot > "u"
    ? !1
    : e instanceof ShadowRoot || e instanceof $n(e).ShadowRoot;
}
const A3 = new Set(["inline", "contents"]);
function Cl(e) {
  const { overflow: t, overflowX: r, overflowY: i, display: s } = mr(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + i + r) && !A3.has(s);
}
const C3 = new Set(["table", "td", "th"]);
function T3(e) {
  return C3.has(Yo(e));
}
const D3 = [":popover-open", ":modal"];
function of(e) {
  return D3.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const M3 = ["transform", "translate", "scale", "rotate", "perspective"],
  N3 = ["transform", "translate", "scale", "rotate", "perspective", "filter"],
  z3 = ["paint", "layout", "strict", "content"];
function Cp(e) {
  const t = Tp(),
    r = hr(e) ? mr(e) : e;
  return (
    M3.some((i) => (r[i] ? r[i] !== "none" : !1)) ||
    (r.containerType ? r.containerType !== "normal" : !1) ||
    (!t && (r.backdropFilter ? r.backdropFilter !== "none" : !1)) ||
    (!t && (r.filter ? r.filter !== "none" : !1)) ||
    N3.some((i) => (r.willChange || "").includes(i)) ||
    z3.some((i) => (r.contain || "").includes(i))
  );
}
function k3(e) {
  let t = Qa(e);
  for (; Nr(t) && !Fo(t); ) {
    if (Cp(t)) return t;
    if (of(t)) return null;
    t = Qa(t);
  }
  return null;
}
function Tp() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
const j3 = new Set(["html", "body", "#document"]);
function Fo(e) {
  return j3.has(Yo(e));
}
function mr(e) {
  return $n(e).getComputedStyle(e);
}
function sf(e) {
  return hr(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function Qa(e) {
  if (Yo(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || (h1(e) && e.host) || Ur(e);
  return h1(t) ? t.host : t;
}
function NS(e) {
  const t = Qa(e);
  return Fo(t)
    ? e.ownerDocument
      ? e.ownerDocument.body
      : e.body
    : Nr(t) && Cl(t)
      ? t
      : NS(t);
}
function pl(e, t, r) {
  var i;
  (t === void 0 && (t = []), r === void 0 && (r = !0));
  const s = NS(e),
    l = s === ((i = e.ownerDocument) == null ? void 0 : i.body),
    c = $n(s);
  if (l) {
    const d = Om(c);
    return t.concat(
      c,
      c.visualViewport || [],
      Cl(s) ? s : [],
      d && r ? pl(d) : [],
    );
  }
  return t.concat(s, pl(s, [], r));
}
function Om(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function zS(e) {
  const t = mr(e);
  let r = parseFloat(t.width) || 0,
    i = parseFloat(t.height) || 0;
  const s = Nr(e),
    l = s ? e.offsetWidth : r,
    c = s ? e.offsetHeight : i,
    d = Dc(r) !== l || Dc(i) !== c;
  return (d && ((r = l), (i = c)), { width: r, height: i, $: d });
}
function Dp(e) {
  return hr(e) ? e : e.contextElement;
}
function jo(e) {
  const t = Dp(e);
  if (!Nr(t)) return Mr(1);
  const r = t.getBoundingClientRect(),
    { width: i, height: s, $: l } = zS(t);
  let c = (l ? Dc(r.width) : r.width) / i,
    d = (l ? Dc(r.height) : r.height) / s;
  return (
    (!c || !Number.isFinite(c)) && (c = 1),
    (!d || !Number.isFinite(d)) && (d = 1),
    { x: c, y: d }
  );
}
const L3 = Mr(0);
function kS(e) {
  const t = $n(e);
  return !Tp() || !t.visualViewport
    ? L3
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function U3(e, t, r) {
  return (t === void 0 && (t = !1), !r || (t && r !== $n(e)) ? !1 : t);
}
function ji(e, t, r, i) {
  (t === void 0 && (t = !1), r === void 0 && (r = !1));
  const s = e.getBoundingClientRect(),
    l = Dp(e);
  let c = Mr(1);
  t && (i ? hr(i) && (c = jo(i)) : (c = jo(e)));
  const d = U3(l, r, i) ? kS(l) : Mr(0);
  let m = (s.left + d.x) / c.x,
    h = (s.top + d.y) / c.y,
    y = s.width / c.x,
    g = s.height / c.y;
  if (l) {
    const v = $n(l),
      _ = i && hr(i) ? $n(i) : i;
    let S = v,
      E = Om(S);
    for (; E && i && _ !== S; ) {
      const x = jo(E),
        T = E.getBoundingClientRect(),
        P = mr(E),
        D = T.left + (E.clientLeft + parseFloat(P.paddingLeft)) * x.x,
        B = T.top + (E.clientTop + parseFloat(P.paddingTop)) * x.y;
      ((m *= x.x),
        (h *= x.y),
        (y *= x.x),
        (g *= x.y),
        (m += D),
        (h += B),
        (S = $n(E)),
        (E = Om(S)));
    }
  }
  return Nc({ width: y, height: g, x: m, y: h });
}
function lf(e, t) {
  const r = sf(e).scrollLeft;
  return t ? t.left + r : ji(Ur(e)).left + r;
}
function jS(e, t) {
  const r = e.getBoundingClientRect(),
    i = r.left + t.scrollLeft - lf(e, r),
    s = r.top + t.scrollTop;
  return { x: i, y: s };
}
function P3(e) {
  let { elements: t, rect: r, offsetParent: i, strategy: s } = e;
  const l = s === "fixed",
    c = Ur(i),
    d = t ? of(t.floating) : !1;
  if (i === c || (d && l)) return r;
  let m = { scrollLeft: 0, scrollTop: 0 },
    h = Mr(1);
  const y = Mr(0),
    g = Nr(i);
  if (
    (g || (!g && !l)) &&
    ((Yo(i) !== "body" || Cl(c)) && (m = sf(i)), Nr(i))
  ) {
    const _ = ji(i);
    ((h = jo(i)), (y.x = _.x + i.clientLeft), (y.y = _.y + i.clientTop));
  }
  const v = c && !g && !l ? jS(c, m) : Mr(0);
  return {
    width: r.width * h.x,
    height: r.height * h.y,
    x: r.x * h.x - m.scrollLeft * h.x + y.x + v.x,
    y: r.y * h.y - m.scrollTop * h.y + y.y + v.y,
  };
}
function F3(e) {
  return Array.from(e.getClientRects());
}
function B3(e) {
  const t = Ur(e),
    r = sf(e),
    i = e.ownerDocument.body,
    s = Bn(t.scrollWidth, t.clientWidth, i.scrollWidth, i.clientWidth),
    l = Bn(t.scrollHeight, t.clientHeight, i.scrollHeight, i.clientHeight);
  let c = -r.scrollLeft + lf(e);
  const d = -r.scrollTop;
  return (
    mr(i).direction === "rtl" && (c += Bn(t.clientWidth, i.clientWidth) - s),
    { width: s, height: l, x: c, y: d }
  );
}
const m1 = 25;
function V3(e, t) {
  const r = $n(e),
    i = Ur(e),
    s = r.visualViewport;
  let l = i.clientWidth,
    c = i.clientHeight,
    d = 0,
    m = 0;
  if (s) {
    ((l = s.width), (c = s.height));
    const y = Tp();
    (!y || (y && t === "fixed")) && ((d = s.offsetLeft), (m = s.offsetTop));
  }
  const h = lf(i);
  if (h <= 0) {
    const y = i.ownerDocument,
      g = y.body,
      v = getComputedStyle(g),
      _ =
        (y.compatMode === "CSS1Compat" &&
          parseFloat(v.marginLeft) + parseFloat(v.marginRight)) ||
        0,
      S = Math.abs(i.clientWidth - g.clientWidth - _);
    S <= m1 && (l -= S);
  } else h <= m1 && (l += h);
  return { width: l, height: c, x: d, y: m };
}
const $3 = new Set(["absolute", "fixed"]);
function H3(e, t) {
  const r = ji(e, !0, t === "fixed"),
    i = r.top + e.clientTop,
    s = r.left + e.clientLeft,
    l = Nr(e) ? jo(e) : Mr(1),
    c = e.clientWidth * l.x,
    d = e.clientHeight * l.y,
    m = s * l.x,
    h = i * l.y;
  return { width: c, height: d, x: m, y: h };
}
function p1(e, t, r) {
  let i;
  if (t === "viewport") i = V3(e, r);
  else if (t === "document") i = B3(Ur(e));
  else if (hr(t)) i = H3(t, r);
  else {
    const s = kS(e);
    i = { x: t.x - s.x, y: t.y - s.y, width: t.width, height: t.height };
  }
  return Nc(i);
}
function LS(e, t) {
  const r = Qa(e);
  return r === t || !hr(r) || Fo(r)
    ? !1
    : mr(r).position === "fixed" || LS(r, t);
}
function I3(e, t) {
  const r = t.get(e);
  if (r) return r;
  let i = pl(e, [], !1).filter((d) => hr(d) && Yo(d) !== "body"),
    s = null;
  const l = mr(e).position === "fixed";
  let c = l ? Qa(e) : e;
  for (; hr(c) && !Fo(c); ) {
    const d = mr(c),
      m = Cp(c);
    (!m && d.position === "fixed" && (s = null),
      (
        l
          ? !m && !s
          : (!m && d.position === "static" && !!s && $3.has(s.position)) ||
            (Cl(c) && !m && LS(e, c))
      )
        ? (i = i.filter((y) => y !== c))
        : (s = d),
      (c = Qa(c)));
  }
  return (t.set(e, i), i);
}
function Z3(e) {
  let { element: t, boundary: r, rootBoundary: i, strategy: s } = e;
  const c = [
      ...(r === "clippingAncestors"
        ? of(t)
          ? []
          : I3(t, this._c)
        : [].concat(r)),
      i,
    ],
    d = c[0],
    m = c.reduce(
      (h, y) => {
        const g = p1(t, y, s);
        return (
          (h.top = Bn(g.top, h.top)),
          (h.right = Ka(g.right, h.right)),
          (h.bottom = Ka(g.bottom, h.bottom)),
          (h.left = Bn(g.left, h.left)),
          h
        );
      },
      p1(t, d, s),
    );
  return {
    width: m.right - m.left,
    height: m.bottom - m.top,
    x: m.left,
    y: m.top,
  };
}
function q3(e) {
  const { width: t, height: r } = zS(e);
  return { width: t, height: r };
}
function G3(e, t, r) {
  const i = Nr(t),
    s = Ur(t),
    l = r === "fixed",
    c = ji(e, !0, l, t);
  let d = { scrollLeft: 0, scrollTop: 0 };
  const m = Mr(0);
  function h() {
    m.x = lf(s);
  }
  if (i || (!i && !l))
    if (((Yo(t) !== "body" || Cl(s)) && (d = sf(t)), i)) {
      const _ = ji(t, !0, l, t);
      ((m.x = _.x + t.clientLeft), (m.y = _.y + t.clientTop));
    } else s && h();
  l && !i && s && h();
  const y = s && !i && !l ? jS(s, d) : Mr(0),
    g = c.left + d.scrollLeft - m.x - y.x,
    v = c.top + d.scrollTop - m.y - y.y;
  return { x: g, y: v, width: c.width, height: c.height };
}
function qh(e) {
  return mr(e).position === "static";
}
function y1(e, t) {
  if (!Nr(e) || mr(e).position === "fixed") return null;
  if (t) return t(e);
  let r = e.offsetParent;
  return (Ur(e) === r && (r = r.ownerDocument.body), r);
}
function US(e, t) {
  const r = $n(e);
  if (of(e)) return r;
  if (!Nr(e)) {
    let s = Qa(e);
    for (; s && !Fo(s); ) {
      if (hr(s) && !qh(s)) return s;
      s = Qa(s);
    }
    return r;
  }
  let i = y1(e, t);
  for (; i && T3(i) && qh(i); ) i = y1(i, t);
  return i && Fo(i) && qh(i) && !Cp(i) ? r : i || k3(e) || r;
}
const Y3 = async function (e) {
  const t = this.getOffsetParent || US,
    r = this.getDimensions,
    i = await r(e.floating);
  return {
    reference: G3(e.reference, await t(e.floating), e.strategy),
    floating: { x: 0, y: 0, width: i.width, height: i.height },
  };
};
function K3(e) {
  return mr(e).direction === "rtl";
}
const Q3 = {
  convertOffsetParentRelativeRectToViewportRelativeRect: P3,
  getDocumentElement: Ur,
  getClippingRect: Z3,
  getOffsetParent: US,
  getElementRects: Y3,
  getClientRects: F3,
  getDimensions: q3,
  getScale: jo,
  isElement: hr,
  isRTL: K3,
};
function PS(e, t) {
  return (
    e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
  );
}
function X3(e, t) {
  let r = null,
    i;
  const s = Ur(e);
  function l() {
    var d;
    (clearTimeout(i), (d = r) == null || d.disconnect(), (r = null));
  }
  function c(d, m) {
    (d === void 0 && (d = !1), m === void 0 && (m = 1), l());
    const h = e.getBoundingClientRect(),
      { left: y, top: g, width: v, height: _ } = h;
    if ((d || t(), !v || !_)) return;
    const S = tc(g),
      E = tc(s.clientWidth - (y + v)),
      x = tc(s.clientHeight - (g + _)),
      T = tc(y),
      D = {
        rootMargin: -S + "px " + -E + "px " + -x + "px " + -T + "px",
        threshold: Bn(0, Ka(1, m)) || 1,
      };
    let B = !0;
    function k(C) {
      const Y = C[0].intersectionRatio;
      if (Y !== m) {
        if (!B) return c();
        Y
          ? c(!1, Y)
          : (i = setTimeout(() => {
              c(!1, 1e-7);
            }, 1e3));
      }
      (Y === 1 && !PS(h, e.getBoundingClientRect()) && c(), (B = !1));
    }
    try {
      r = new IntersectionObserver(k, { ...D, root: s.ownerDocument });
    } catch {
      r = new IntersectionObserver(k, D);
    }
    r.observe(e);
  }
  return (c(!0), l);
}
function J3(e, t, r, i) {
  i === void 0 && (i = {});
  const {
      ancestorScroll: s = !0,
      ancestorResize: l = !0,
      elementResize: c = typeof ResizeObserver == "function",
      layoutShift: d = typeof IntersectionObserver == "function",
      animationFrame: m = !1,
    } = i,
    h = Dp(e),
    y = s || l ? [...(h ? pl(h) : []), ...pl(t)] : [];
  y.forEach((T) => {
    (s && T.addEventListener("scroll", r, { passive: !0 }),
      l && T.addEventListener("resize", r));
  });
  const g = h && d ? X3(h, r) : null;
  let v = -1,
    _ = null;
  c &&
    ((_ = new ResizeObserver((T) => {
      let [P] = T;
      (P &&
        P.target === h &&
        _ &&
        (_.unobserve(t),
        cancelAnimationFrame(v),
        (v = requestAnimationFrame(() => {
          var D;
          (D = _) == null || D.observe(t);
        }))),
        r());
    })),
    h && !m && _.observe(h),
    _.observe(t));
  let S,
    E = m ? ji(e) : null;
  m && x();
  function x() {
    const T = ji(e);
    (E && !PS(E, T) && r(), (E = T), (S = requestAnimationFrame(x)));
  }
  return (
    r(),
    () => {
      var T;
      (y.forEach((P) => {
        (s && P.removeEventListener("scroll", r),
          l && P.removeEventListener("resize", r));
      }),
        g?.(),
        (T = _) == null || T.disconnect(),
        (_ = null),
        m && cancelAnimationFrame(S));
    }
  );
}
const W3 = E3,
  eN = x3,
  tN = w3,
  nN = O3,
  rN = S3,
  g1 = b3,
  aN = R3,
  iN = (e, t, r) => {
    const i = new Map(),
      s = { platform: Q3, ...r },
      l = { ...s.platform, _c: i };
    return v3(e, t, { ...s, platform: l });
  };
var oN = typeof document < "u",
  sN = function () {},
  bc = oN ? w.useLayoutEffect : sN;
function zc(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (typeof e == "function" && e.toString() === t.toString()) return !0;
  let r, i, s;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (((r = e.length), r !== t.length)) return !1;
      for (i = r; i-- !== 0; ) if (!zc(e[i], t[i])) return !1;
      return !0;
    }
    if (((s = Object.keys(e)), (r = s.length), r !== Object.keys(t).length))
      return !1;
    for (i = r; i-- !== 0; ) if (!{}.hasOwnProperty.call(t, s[i])) return !1;
    for (i = r; i-- !== 0; ) {
      const l = s[i];
      if (!(l === "_owner" && e.$$typeof) && !zc(e[l], t[l])) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function FS(e) {
  return typeof window > "u"
    ? 1
    : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function v1(e, t) {
  const r = FS(e);
  return Math.round(t * r) / r;
}
function Gh(e) {
  const t = w.useRef(e);
  return (
    bc(() => {
      t.current = e;
    }),
    t
  );
}
function lN(e) {
  e === void 0 && (e = {});
  const {
      placement: t = "bottom",
      strategy: r = "absolute",
      middleware: i = [],
      platform: s,
      elements: { reference: l, floating: c } = {},
      transform: d = !0,
      whileElementsMounted: m,
      open: h,
    } = e,
    [y, g] = w.useState({
      x: 0,
      y: 0,
      strategy: r,
      placement: t,
      middlewareData: {},
      isPositioned: !1,
    }),
    [v, _] = w.useState(i);
  zc(v, i) || _(i);
  const [S, E] = w.useState(null),
    [x, T] = w.useState(null),
    P = w.useCallback((q) => {
      q !== C.current && ((C.current = q), E(q));
    }, []),
    D = w.useCallback((q) => {
      q !== Y.current && ((Y.current = q), T(q));
    }, []),
    B = l || S,
    k = c || x,
    C = w.useRef(null),
    Y = w.useRef(null),
    Q = w.useRef(y),
    me = m != null,
    pe = Gh(m),
    we = Gh(s),
    be = Gh(h),
    Se = w.useCallback(() => {
      if (!C.current || !Y.current) return;
      const q = { placement: t, strategy: r, middleware: v };
      (we.current && (q.platform = we.current),
        iN(C.current, Y.current, q).then((ie) => {
          const N = { ...ie, isPositioned: be.current !== !1 };
          ce.current &&
            !zc(Q.current, N) &&
            ((Q.current = N),
            qc.flushSync(() => {
              g(N);
            }));
        }));
    }, [v, t, r, we, be]);
  bc(() => {
    h === !1 &&
      Q.current.isPositioned &&
      ((Q.current.isPositioned = !1), g((q) => ({ ...q, isPositioned: !1 })));
  }, [h]);
  const ce = w.useRef(!1);
  (bc(
    () => (
      (ce.current = !0),
      () => {
        ce.current = !1;
      }
    ),
    [],
  ),
    bc(() => {
      if ((B && (C.current = B), k && (Y.current = k), B && k)) {
        if (pe.current) return pe.current(B, k, Se);
        Se();
      }
    }, [B, k, Se, pe, me]));
  const ge = w.useMemo(
      () => ({ reference: C, floating: Y, setReference: P, setFloating: D }),
      [P, D],
    ),
    U = w.useMemo(() => ({ reference: B, floating: k }), [B, k]),
    ne = w.useMemo(() => {
      const q = { position: r, left: 0, top: 0 };
      if (!U.floating) return q;
      const ie = v1(U.floating, y.x),
        N = v1(U.floating, y.y);
      return d
        ? {
            ...q,
            transform: "translate(" + ie + "px, " + N + "px)",
            ...(FS(U.floating) >= 1.5 && { willChange: "transform" }),
          }
        : { position: r, left: ie, top: N };
    }, [r, d, U.floating, y.x, y.y]);
  return w.useMemo(
    () => ({ ...y, update: Se, refs: ge, elements: U, floatingStyles: ne }),
    [y, Se, ge, U, ne],
  );
}
const uN = (e) => {
    function t(r) {
      return {}.hasOwnProperty.call(r, "current");
    }
    return {
      name: "arrow",
      options: e,
      fn(r) {
        const { element: i, padding: s } = typeof e == "function" ? e(r) : e;
        return i && t(i)
          ? i.current != null
            ? g1({ element: i.current, padding: s }).fn(r)
            : {}
          : i
            ? g1({ element: i, padding: s }).fn(r)
            : {};
      },
    };
  },
  cN = (e, t) => ({ ...W3(e), options: [e, t] }),
  fN = (e, t) => ({ ...eN(e), options: [e, t] }),
  dN = (e, t) => ({ ...aN(e), options: [e, t] }),
  hN = (e, t) => ({ ...tN(e), options: [e, t] }),
  mN = (e, t) => ({ ...nN(e), options: [e, t] }),
  pN = (e, t) => ({ ...rN(e), options: [e, t] }),
  yN = (e, t) => ({ ...uN(e), options: [e, t] });
var gN = "Arrow",
  BS = w.forwardRef((e, t) => {
    const { children: r, width: i = 10, height: s = 5, ...l } = e;
    return j.jsx(Pt.svg, {
      ...l,
      ref: t,
      width: i,
      height: s,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? r : j.jsx("polygon", { points: "0,0 30,0 15,10" }),
    });
  });
BS.displayName = gN;
var vN = BS;
function bN(e) {
  const [t, r] = w.useState(void 0);
  return (
    Ya(() => {
      if (e) {
        r({ width: e.offsetWidth, height: e.offsetHeight });
        const i = new ResizeObserver((s) => {
          if (!Array.isArray(s) || !s.length) return;
          const l = s[0];
          let c, d;
          if ("borderBoxSize" in l) {
            const m = l.borderBoxSize,
              h = Array.isArray(m) ? m[0] : m;
            ((c = h.inlineSize), (d = h.blockSize));
          } else ((c = e.offsetWidth), (d = e.offsetHeight));
          r({ width: c, height: d });
        });
        return (i.observe(e, { box: "border-box" }), () => i.unobserve(e));
      } else r(void 0);
    }, [e]),
    t
  );
}
var Mp = "Popper",
  [VS, $S] = Io(Mp),
  [wN, HS] = VS(Mp),
  IS = (e) => {
    const { __scopePopper: t, children: r } = e,
      [i, s] = w.useState(null);
    return j.jsx(wN, { scope: t, anchor: i, onAnchorChange: s, children: r });
  };
IS.displayName = Mp;
var ZS = "PopperAnchor",
  qS = w.forwardRef((e, t) => {
    const { __scopePopper: r, virtualRef: i, ...s } = e,
      l = HS(ZS, r),
      c = w.useRef(null),
      d = sn(t, c),
      m = w.useRef(null);
    return (
      w.useEffect(() => {
        const h = m.current;
        ((m.current = i?.current || c.current),
          h !== m.current && l.onAnchorChange(m.current));
      }),
      i ? null : j.jsx(Pt.div, { ...s, ref: d })
    );
  });
qS.displayName = ZS;
var Np = "PopperContent",
  [SN, _N] = VS(Np),
  GS = w.forwardRef((e, t) => {
    const {
        __scopePopper: r,
        side: i = "bottom",
        sideOffset: s = 0,
        align: l = "center",
        alignOffset: c = 0,
        arrowPadding: d = 0,
        avoidCollisions: m = !0,
        collisionBoundary: h = [],
        collisionPadding: y = 0,
        sticky: g = "partial",
        hideWhenDetached: v = !1,
        updatePositionStrategy: _ = "optimized",
        onPlaced: S,
        ...E
      } = e,
      x = HS(Np, r),
      [T, P] = w.useState(null),
      D = sn(t, (Ne) => P(Ne)),
      [B, k] = w.useState(null),
      C = bN(B),
      Y = C?.width ?? 0,
      Q = C?.height ?? 0,
      me = i + (l !== "center" ? "-" + l : ""),
      pe =
        typeof y == "number"
          ? y
          : { top: 0, right: 0, bottom: 0, left: 0, ...y },
      we = Array.isArray(h) ? h : [h],
      be = we.length > 0,
      Se = { padding: pe, boundary: we.filter(xN), altBoundary: be },
      {
        refs: ce,
        floatingStyles: ge,
        placement: U,
        isPositioned: ne,
        middlewareData: q,
      } = lN({
        strategy: "fixed",
        placement: me,
        whileElementsMounted: (...Ne) =>
          J3(...Ne, { animationFrame: _ === "always" }),
        elements: { reference: x.anchor },
        middleware: [
          cN({ mainAxis: s + Q, alignmentAxis: c }),
          m &&
            fN({
              mainAxis: !0,
              crossAxis: !1,
              limiter: g === "partial" ? dN() : void 0,
              ...Se,
            }),
          m && hN({ ...Se }),
          mN({
            ...Se,
            apply: ({
              elements: Ne,
              rects: qe,
              availableWidth: gt,
              availableHeight: at,
            }) => {
              const { width: ut, height: Xt } = qe.reference,
                Hn = Ne.floating.style;
              (Hn.setProperty("--radix-popper-available-width", `${gt}px`),
                Hn.setProperty("--radix-popper-available-height", `${at}px`),
                Hn.setProperty("--radix-popper-anchor-width", `${ut}px`),
                Hn.setProperty("--radix-popper-anchor-height", `${Xt}px`));
            },
          }),
          B && yN({ element: B, padding: d }),
          RN({ arrowWidth: Y, arrowHeight: Q }),
          v && pN({ strategy: "referenceHidden", ...Se }),
        ],
      }),
      [ie, N] = QS(U),
      W = ua(S);
    Ya(() => {
      ne && W?.();
    }, [ne, W]);
    const fe = q.arrow?.x,
      le = q.arrow?.y,
      ve = q.arrow?.centerOffset !== 0,
      [ke, Oe] = w.useState();
    return (
      Ya(() => {
        T && Oe(window.getComputedStyle(T).zIndex);
      }, [T]),
      j.jsx("div", {
        ref: ce.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...ge,
          transform: ne ? ge.transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: ke,
          "--radix-popper-transform-origin": [
            q.transformOrigin?.x,
            q.transformOrigin?.y,
          ].join(" "),
          ...(q.hide?.referenceHidden && {
            visibility: "hidden",
            pointerEvents: "none",
          }),
        },
        dir: e.dir,
        children: j.jsx(SN, {
          scope: r,
          placedSide: ie,
          onArrowChange: k,
          arrowX: fe,
          arrowY: le,
          shouldHideArrow: ve,
          children: j.jsx(Pt.div, {
            "data-side": ie,
            "data-align": N,
            ...E,
            ref: D,
            style: { ...E.style, animation: ne ? void 0 : "none" },
          }),
        }),
      })
    );
  });
GS.displayName = Np;
var YS = "PopperArrow",
  EN = { top: "bottom", right: "left", bottom: "top", left: "right" },
  KS = w.forwardRef(function (t, r) {
    const { __scopePopper: i, ...s } = t,
      l = _N(YS, i),
      c = EN[l.placedSide];
    return j.jsx("span", {
      ref: l.onArrowChange,
      style: {
        position: "absolute",
        left: l.arrowX,
        top: l.arrowY,
        [c]: 0,
        transformOrigin: {
          top: "",
          right: "0 0",
          bottom: "center 0",
          left: "100% 0",
        }[l.placedSide],
        transform: {
          top: "translateY(100%)",
          right: "translateY(50%) rotate(90deg) translateX(-50%)",
          bottom: "rotate(180deg)",
          left: "translateY(50%) rotate(-90deg) translateX(50%)",
        }[l.placedSide],
        visibility: l.shouldHideArrow ? "hidden" : void 0,
      },
      children: j.jsx(vN, {
        ...s,
        ref: r,
        style: { ...s.style, display: "block" },
      }),
    });
  });
KS.displayName = YS;
function xN(e) {
  return e !== null;
}
var RN = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    const { placement: r, rects: i, middlewareData: s } = t,
      c = s.arrow?.centerOffset !== 0,
      d = c ? 0 : e.arrowWidth,
      m = c ? 0 : e.arrowHeight,
      [h, y] = QS(r),
      g = { start: "0%", center: "50%", end: "100%" }[y],
      v = (s.arrow?.x ?? 0) + d / 2,
      _ = (s.arrow?.y ?? 0) + m / 2;
    let S = "",
      E = "";
    return (
      h === "bottom"
        ? ((S = c ? g : `${v}px`), (E = `${-m}px`))
        : h === "top"
          ? ((S = c ? g : `${v}px`), (E = `${i.floating.height + m}px`))
          : h === "right"
            ? ((S = `${-m}px`), (E = c ? g : `${_}px`))
            : h === "left" &&
              ((S = `${i.floating.width + m}px`), (E = c ? g : `${_}px`)),
      { data: { x: S, y: E } }
    );
  },
});
function QS(e) {
  const [t, r = "center"] = e.split("-");
  return [t, r];
}
var ON = IS,
  AN = qS,
  CN = GS,
  TN = KS,
  Yh = "rovingFocusGroup.onEntryFocus",
  DN = { bubbles: !1, cancelable: !0 },
  Tl = "RovingFocusGroup",
  [Am, XS, MN] = AS(Tl),
  [NN, JS] = Io(Tl, [MN]),
  [zN, kN] = NN(Tl),
  WS = w.forwardRef((e, t) =>
    j.jsx(Am.Provider, {
      scope: e.__scopeRovingFocusGroup,
      children: j.jsx(Am.Slot, {
        scope: e.__scopeRovingFocusGroup,
        children: j.jsx(jN, { ...e, ref: t }),
      }),
    }),
  );
WS.displayName = Tl;
var jN = w.forwardRef((e, t) => {
    const {
        __scopeRovingFocusGroup: r,
        orientation: i,
        loop: s = !1,
        dir: l,
        currentTabStopId: c,
        defaultCurrentTabStopId: d,
        onCurrentTabStopIdChange: m,
        onEntryFocus: h,
        preventScrollOnEntryFocus: y = !1,
        ...g
      } = e,
      v = w.useRef(null),
      _ = sn(t, v),
      S = CS(l),
      [E, x] = ap({ prop: c, defaultProp: d ?? null, onChange: m, caller: Tl }),
      [T, P] = w.useState(!1),
      D = ua(h),
      B = XS(r),
      k = w.useRef(!1),
      [C, Y] = w.useState(0);
    return (
      w.useEffect(() => {
        const Q = v.current;
        if (Q)
          return (
            Q.addEventListener(Yh, D),
            () => Q.removeEventListener(Yh, D)
          );
      }, [D]),
      j.jsx(zN, {
        scope: r,
        orientation: i,
        dir: S,
        loop: s,
        currentTabStopId: E,
        onItemFocus: w.useCallback((Q) => x(Q), [x]),
        onItemShiftTab: w.useCallback(() => P(!0), []),
        onFocusableItemAdd: w.useCallback(() => Y((Q) => Q + 1), []),
        onFocusableItemRemove: w.useCallback(() => Y((Q) => Q - 1), []),
        children: j.jsx(Pt.div, {
          tabIndex: T || C === 0 ? -1 : 0,
          "data-orientation": i,
          ...g,
          ref: _,
          style: { outline: "none", ...e.style },
          onMouseDown: Ze(e.onMouseDown, () => {
            k.current = !0;
          }),
          onFocus: Ze(e.onFocus, (Q) => {
            const me = !k.current;
            if (Q.target === Q.currentTarget && me && !T) {
              const pe = new CustomEvent(Yh, DN);
              if ((Q.currentTarget.dispatchEvent(pe), !pe.defaultPrevented)) {
                const we = B().filter((U) => U.focusable),
                  be = we.find((U) => U.active),
                  Se = we.find((U) => U.id === E),
                  ge = [be, Se, ...we]
                    .filter(Boolean)
                    .map((U) => U.ref.current);
                n_(ge, y);
              }
            }
            k.current = !1;
          }),
          onBlur: Ze(e.onBlur, () => P(!1)),
        }),
      })
    );
  }),
  e_ = "RovingFocusGroupItem",
  t_ = w.forwardRef((e, t) => {
    const {
        __scopeRovingFocusGroup: r,
        focusable: i = !0,
        active: s = !1,
        tabStopId: l,
        children: c,
        ...d
      } = e,
      m = zo(),
      h = l || m,
      y = kN(e_, r),
      g = y.currentTabStopId === h,
      v = XS(r),
      {
        onFocusableItemAdd: _,
        onFocusableItemRemove: S,
        currentTabStopId: E,
      } = y;
    return (
      w.useEffect(() => {
        if (i) return (_(), () => S());
      }, [i, _, S]),
      j.jsx(Am.ItemSlot, {
        scope: r,
        id: h,
        focusable: i,
        active: s,
        children: j.jsx(Pt.span, {
          tabIndex: g ? 0 : -1,
          "data-orientation": y.orientation,
          ...d,
          ref: t,
          onMouseDown: Ze(e.onMouseDown, (x) => {
            i ? y.onItemFocus(h) : x.preventDefault();
          }),
          onFocus: Ze(e.onFocus, () => y.onItemFocus(h)),
          onKeyDown: Ze(e.onKeyDown, (x) => {
            if (x.key === "Tab" && x.shiftKey) {
              y.onItemShiftTab();
              return;
            }
            if (x.target !== x.currentTarget) return;
            const T = PN(x, y.orientation, y.dir);
            if (T !== void 0) {
              if (x.metaKey || x.ctrlKey || x.altKey || x.shiftKey) return;
              x.preventDefault();
              let D = v()
                .filter((B) => B.focusable)
                .map((B) => B.ref.current);
              if (T === "last") D.reverse();
              else if (T === "prev" || T === "next") {
                T === "prev" && D.reverse();
                const B = D.indexOf(x.currentTarget);
                D = y.loop ? FN(D, B + 1) : D.slice(B + 1);
              }
              setTimeout(() => n_(D));
            }
          }),
          children:
            typeof c == "function"
              ? c({ isCurrentTabStop: g, hasTabStop: E != null })
              : c,
        }),
      })
    );
  });
t_.displayName = e_;
var LN = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last",
};
function UN(e, t) {
  return t !== "rtl"
    ? e
    : e === "ArrowLeft"
      ? "ArrowRight"
      : e === "ArrowRight"
        ? "ArrowLeft"
        : e;
}
function PN(e, t, r) {
  const i = UN(e.key, r);
  if (
    !(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(i)) &&
    !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(i))
  )
    return LN[i];
}
function n_(e, t = !1) {
  const r = document.activeElement;
  for (const i of e)
    if (
      i === r ||
      (i.focus({ preventScroll: t }), document.activeElement !== r)
    )
      return;
}
function FN(e, t) {
  return e.map((r, i) => e[(t + i) % e.length]);
}
var BN = WS,
  VN = t_,
  Cm = ["Enter", " "],
  $N = ["ArrowDown", "PageUp", "Home"],
  r_ = ["ArrowUp", "PageDown", "End"],
  HN = [...$N, ...r_],
  IN = { ltr: [...Cm, "ArrowRight"], rtl: [...Cm, "ArrowLeft"] },
  ZN = { ltr: ["ArrowLeft"], rtl: ["ArrowRight"] },
  Dl = "Menu",
  [yl, qN, GN] = AS(Dl),
  [Pi, a_] = Io(Dl, [GN, $S, JS]),
  uf = $S(),
  i_ = JS(),
  [YN, Fi] = Pi(Dl),
  [KN, Ml] = Pi(Dl),
  o_ = (e) => {
    const {
        __scopeMenu: t,
        open: r = !1,
        children: i,
        dir: s,
        onOpenChange: l,
        modal: c = !0,
      } = e,
      d = uf(t),
      [m, h] = w.useState(null),
      y = w.useRef(!1),
      g = ua(l),
      v = CS(s);
    return (
      w.useEffect(() => {
        const _ = () => {
            ((y.current = !0),
              document.addEventListener("pointerdown", S, {
                capture: !0,
                once: !0,
              }),
              document.addEventListener("pointermove", S, {
                capture: !0,
                once: !0,
              }));
          },
          S = () => (y.current = !1);
        return (
          document.addEventListener("keydown", _, { capture: !0 }),
          () => {
            (document.removeEventListener("keydown", _, { capture: !0 }),
              document.removeEventListener("pointerdown", S, { capture: !0 }),
              document.removeEventListener("pointermove", S, { capture: !0 }));
          }
        );
      }, []),
      j.jsx(ON, {
        ...d,
        children: j.jsx(YN, {
          scope: t,
          open: r,
          onOpenChange: g,
          content: m,
          onContentChange: h,
          children: j.jsx(KN, {
            scope: t,
            onClose: w.useCallback(() => g(!1), [g]),
            isUsingKeyboardRef: y,
            dir: v,
            modal: c,
            children: i,
          }),
        }),
      })
    );
  };
o_.displayName = Dl;
var QN = "MenuAnchor",
  zp = w.forwardRef((e, t) => {
    const { __scopeMenu: r, ...i } = e,
      s = uf(r);
    return j.jsx(AN, { ...s, ...i, ref: t });
  });
zp.displayName = QN;
var kp = "MenuPortal",
  [XN, s_] = Pi(kp, { forceMount: void 0 }),
  l_ = (e) => {
    const { __scopeMenu: t, forceMount: r, children: i, container: s } = e,
      l = Fi(kp, t);
    return j.jsx(XN, {
      scope: t,
      forceMount: r,
      children: j.jsx(Wa, {
        present: r || l.open,
        children: j.jsx(sp, { asChild: !0, container: s, children: i }),
      }),
    });
  };
l_.displayName = kp;
var ar = "MenuContent",
  [JN, jp] = Pi(ar),
  u_ = w.forwardRef((e, t) => {
    const r = s_(ar, e.__scopeMenu),
      { forceMount: i = r.forceMount, ...s } = e,
      l = Fi(ar, e.__scopeMenu),
      c = Ml(ar, e.__scopeMenu);
    return j.jsx(yl.Provider, {
      scope: e.__scopeMenu,
      children: j.jsx(Wa, {
        present: i || l.open,
        children: j.jsx(yl.Slot, {
          scope: e.__scopeMenu,
          children: c.modal
            ? j.jsx(WN, { ...s, ref: t })
            : j.jsx(ez, { ...s, ref: t }),
        }),
      }),
    });
  }),
  WN = w.forwardRef((e, t) => {
    const r = Fi(ar, e.__scopeMenu),
      i = w.useRef(null),
      s = sn(t, i);
    return (
      w.useEffect(() => {
        const l = i.current;
        if (l) return C2(l);
      }, []),
      j.jsx(Lp, {
        ...e,
        ref: s,
        trapFocus: r.open,
        disableOutsidePointerEvents: r.open,
        disableOutsideScroll: !0,
        onFocusOutside: Ze(e.onFocusOutside, (l) => l.preventDefault(), {
          checkForDefaultPrevented: !1,
        }),
        onDismiss: () => r.onOpenChange(!1),
      })
    );
  }),
  ez = w.forwardRef((e, t) => {
    const r = Fi(ar, e.__scopeMenu);
    return j.jsx(Lp, {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => r.onOpenChange(!1),
    });
  }),
  tz = dl("MenuContent.ScrollLock"),
  Lp = w.forwardRef((e, t) => {
    const {
        __scopeMenu: r,
        loop: i = !1,
        trapFocus: s,
        onOpenAutoFocus: l,
        onCloseAutoFocus: c,
        disableOutsidePointerEvents: d,
        onEntryFocus: m,
        onEscapeKeyDown: h,
        onPointerDownOutside: y,
        onFocusOutside: g,
        onInteractOutside: v,
        onDismiss: _,
        disableOutsideScroll: S,
        ...E
      } = e,
      x = Fi(ar, r),
      T = Ml(ar, r),
      P = uf(r),
      D = i_(r),
      B = qN(r),
      [k, C] = w.useState(null),
      Y = w.useRef(null),
      Q = sn(t, Y, x.onContentChange),
      me = w.useRef(0),
      pe = w.useRef(""),
      we = w.useRef(0),
      be = w.useRef(null),
      Se = w.useRef("right"),
      ce = w.useRef(0),
      ge = S ? lp : w.Fragment,
      U = S ? { as: tz, allowPinchZoom: !0 } : void 0,
      ne = (ie) => {
        const N = pe.current + ie,
          W = B().filter((Ne) => !Ne.disabled),
          fe = document.activeElement,
          le = W.find((Ne) => Ne.ref.current === fe)?.textValue,
          ve = W.map((Ne) => Ne.textValue),
          ke = hz(ve, N, le),
          Oe = W.find((Ne) => Ne.textValue === ke)?.ref.current;
        ((function Ne(qe) {
          ((pe.current = qe),
            window.clearTimeout(me.current),
            qe !== "" && (me.current = window.setTimeout(() => Ne(""), 1e3)));
        })(N),
          Oe && setTimeout(() => Oe.focus()));
      };
    (w.useEffect(() => () => window.clearTimeout(me.current), []), b2());
    const q = w.useCallback(
      (ie) => Se.current === be.current?.side && pz(ie, be.current?.area),
      [],
    );
    return j.jsx(JN, {
      scope: r,
      searchRef: pe,
      onItemEnter: w.useCallback(
        (ie) => {
          q(ie) && ie.preventDefault();
        },
        [q],
      ),
      onItemLeave: w.useCallback(
        (ie) => {
          q(ie) || (Y.current?.focus(), C(null));
        },
        [q],
      ),
      onTriggerLeave: w.useCallback(
        (ie) => {
          q(ie) && ie.preventDefault();
        },
        [q],
      ),
      pointerGraceTimerRef: we,
      onPointerGraceIntentChange: w.useCallback((ie) => {
        be.current = ie;
      }, []),
      children: j.jsx(ge, {
        ...U,
        children: j.jsx(op, {
          asChild: !0,
          trapped: s,
          onMountAutoFocus: Ze(l, (ie) => {
            (ie.preventDefault(), Y.current?.focus({ preventScroll: !0 }));
          }),
          onUnmountAutoFocus: c,
          children: j.jsx(ip, {
            asChild: !0,
            disableOutsidePointerEvents: d,
            onEscapeKeyDown: h,
            onPointerDownOutside: y,
            onFocusOutside: g,
            onInteractOutside: v,
            onDismiss: _,
            children: j.jsx(BN, {
              asChild: !0,
              ...D,
              dir: T.dir,
              orientation: "vertical",
              loop: i,
              currentTabStopId: k,
              onCurrentTabStopIdChange: C,
              onEntryFocus: Ze(m, (ie) => {
                T.isUsingKeyboardRef.current || ie.preventDefault();
              }),
              preventScrollOnEntryFocus: !0,
              children: j.jsx(CN, {
                role: "menu",
                "aria-orientation": "vertical",
                "data-state": R_(x.open),
                "data-radix-menu-content": "",
                dir: T.dir,
                ...P,
                ...E,
                ref: Q,
                style: { outline: "none", ...E.style },
                onKeyDown: Ze(E.onKeyDown, (ie) => {
                  const W =
                      ie.target.closest("[data-radix-menu-content]") ===
                      ie.currentTarget,
                    fe = ie.ctrlKey || ie.altKey || ie.metaKey,
                    le = ie.key.length === 1;
                  W &&
                    (ie.key === "Tab" && ie.preventDefault(),
                    !fe && le && ne(ie.key));
                  const ve = Y.current;
                  if (ie.target !== ve || !HN.includes(ie.key)) return;
                  ie.preventDefault();
                  const Oe = B()
                    .filter((Ne) => !Ne.disabled)
                    .map((Ne) => Ne.ref.current);
                  (r_.includes(ie.key) && Oe.reverse(), fz(Oe));
                }),
                onBlur: Ze(e.onBlur, (ie) => {
                  ie.currentTarget.contains(ie.target) ||
                    (window.clearTimeout(me.current), (pe.current = ""));
                }),
                onPointerMove: Ze(
                  e.onPointerMove,
                  gl((ie) => {
                    const N = ie.target,
                      W = ce.current !== ie.clientX;
                    if (ie.currentTarget.contains(N) && W) {
                      const fe = ie.clientX > ce.current ? "right" : "left";
                      ((Se.current = fe), (ce.current = ie.clientX));
                    }
                  }),
                ),
              }),
            }),
          }),
        }),
      }),
    });
  });
u_.displayName = ar;
var nz = "MenuGroup",
  Up = w.forwardRef((e, t) => {
    const { __scopeMenu: r, ...i } = e;
    return j.jsx(Pt.div, { role: "group", ...i, ref: t });
  });
Up.displayName = nz;
var rz = "MenuLabel",
  c_ = w.forwardRef((e, t) => {
    const { __scopeMenu: r, ...i } = e;
    return j.jsx(Pt.div, { ...i, ref: t });
  });
c_.displayName = rz;
var kc = "MenuItem",
  b1 = "menu.itemSelect",
  cf = w.forwardRef((e, t) => {
    const { disabled: r = !1, onSelect: i, ...s } = e,
      l = w.useRef(null),
      c = Ml(kc, e.__scopeMenu),
      d = jp(kc, e.__scopeMenu),
      m = sn(t, l),
      h = w.useRef(!1),
      y = () => {
        const g = l.current;
        if (!r && g) {
          const v = new CustomEvent(b1, { bubbles: !0, cancelable: !0 });
          (g.addEventListener(b1, (_) => i?.(_), { once: !0 }),
            p2(g, v),
            v.defaultPrevented ? (h.current = !1) : c.onClose());
        }
      };
    return j.jsx(f_, {
      ...s,
      ref: m,
      disabled: r,
      onClick: Ze(e.onClick, y),
      onPointerDown: (g) => {
        (e.onPointerDown?.(g), (h.current = !0));
      },
      onPointerUp: Ze(e.onPointerUp, (g) => {
        h.current || g.currentTarget?.click();
      }),
      onKeyDown: Ze(e.onKeyDown, (g) => {
        const v = d.searchRef.current !== "";
        r ||
          (v && g.key === " ") ||
          (Cm.includes(g.key) && (g.currentTarget.click(), g.preventDefault()));
      }),
    });
  });
cf.displayName = kc;
var f_ = w.forwardRef((e, t) => {
    const { __scopeMenu: r, disabled: i = !1, textValue: s, ...l } = e,
      c = jp(kc, r),
      d = i_(r),
      m = w.useRef(null),
      h = sn(t, m),
      [y, g] = w.useState(!1),
      [v, _] = w.useState("");
    return (
      w.useEffect(() => {
        const S = m.current;
        S && _((S.textContent ?? "").trim());
      }, [l.children]),
      j.jsx(yl.ItemSlot, {
        scope: r,
        disabled: i,
        textValue: s ?? v,
        children: j.jsx(VN, {
          asChild: !0,
          ...d,
          focusable: !i,
          children: j.jsx(Pt.div, {
            role: "menuitem",
            "data-highlighted": y ? "" : void 0,
            "aria-disabled": i || void 0,
            "data-disabled": i ? "" : void 0,
            ...l,
            ref: h,
            onPointerMove: Ze(
              e.onPointerMove,
              gl((S) => {
                i
                  ? c.onItemLeave(S)
                  : (c.onItemEnter(S),
                    S.defaultPrevented ||
                      S.currentTarget.focus({ preventScroll: !0 }));
              }),
            ),
            onPointerLeave: Ze(
              e.onPointerLeave,
              gl((S) => c.onItemLeave(S)),
            ),
            onFocus: Ze(e.onFocus, () => g(!0)),
            onBlur: Ze(e.onBlur, () => g(!1)),
          }),
        }),
      })
    );
  }),
  az = "MenuCheckboxItem",
  d_ = w.forwardRef((e, t) => {
    const { checked: r = !1, onCheckedChange: i, ...s } = e;
    return j.jsx(g_, {
      scope: e.__scopeMenu,
      checked: r,
      children: j.jsx(cf, {
        role: "menuitemcheckbox",
        "aria-checked": jc(r) ? "mixed" : r,
        ...s,
        ref: t,
        "data-state": Fp(r),
        onSelect: Ze(s.onSelect, () => i?.(jc(r) ? !0 : !r), {
          checkForDefaultPrevented: !1,
        }),
      }),
    });
  });
d_.displayName = az;
var h_ = "MenuRadioGroup",
  [iz, oz] = Pi(h_, { value: void 0, onValueChange: () => {} }),
  m_ = w.forwardRef((e, t) => {
    const { value: r, onValueChange: i, ...s } = e,
      l = ua(i);
    return j.jsx(iz, {
      scope: e.__scopeMenu,
      value: r,
      onValueChange: l,
      children: j.jsx(Up, { ...s, ref: t }),
    });
  });
m_.displayName = h_;
var p_ = "MenuRadioItem",
  y_ = w.forwardRef((e, t) => {
    const { value: r, ...i } = e,
      s = oz(p_, e.__scopeMenu),
      l = r === s.value;
    return j.jsx(g_, {
      scope: e.__scopeMenu,
      checked: l,
      children: j.jsx(cf, {
        role: "menuitemradio",
        "aria-checked": l,
        ...i,
        ref: t,
        "data-state": Fp(l),
        onSelect: Ze(i.onSelect, () => s.onValueChange?.(r), {
          checkForDefaultPrevented: !1,
        }),
      }),
    });
  });
y_.displayName = p_;
var Pp = "MenuItemIndicator",
  [g_, sz] = Pi(Pp, { checked: !1 }),
  v_ = w.forwardRef((e, t) => {
    const { __scopeMenu: r, forceMount: i, ...s } = e,
      l = sz(Pp, r);
    return j.jsx(Wa, {
      present: i || jc(l.checked) || l.checked === !0,
      children: j.jsx(Pt.span, { ...s, ref: t, "data-state": Fp(l.checked) }),
    });
  });
v_.displayName = Pp;
var lz = "MenuSeparator",
  b_ = w.forwardRef((e, t) => {
    const { __scopeMenu: r, ...i } = e;
    return j.jsx(Pt.div, {
      role: "separator",
      "aria-orientation": "horizontal",
      ...i,
      ref: t,
    });
  });
b_.displayName = lz;
var uz = "MenuArrow",
  w_ = w.forwardRef((e, t) => {
    const { __scopeMenu: r, ...i } = e,
      s = uf(r);
    return j.jsx(TN, { ...s, ...i, ref: t });
  });
w_.displayName = uz;
var cz = "MenuSub",
  [pL, S_] = Pi(cz),
  nl = "MenuSubTrigger",
  __ = w.forwardRef((e, t) => {
    const r = Fi(nl, e.__scopeMenu),
      i = Ml(nl, e.__scopeMenu),
      s = S_(nl, e.__scopeMenu),
      l = jp(nl, e.__scopeMenu),
      c = w.useRef(null),
      { pointerGraceTimerRef: d, onPointerGraceIntentChange: m } = l,
      h = { __scopeMenu: e.__scopeMenu },
      y = w.useCallback(() => {
        (c.current && window.clearTimeout(c.current), (c.current = null));
      }, []);
    return (
      w.useEffect(() => y, [y]),
      w.useEffect(() => {
        const g = d.current;
        return () => {
          (window.clearTimeout(g), m(null));
        };
      }, [d, m]),
      j.jsx(zp, {
        asChild: !0,
        ...h,
        children: j.jsx(f_, {
          id: s.triggerId,
          "aria-haspopup": "menu",
          "aria-expanded": r.open,
          "aria-controls": s.contentId,
          "data-state": R_(r.open),
          ...e,
          ref: Gc(t, s.onTriggerChange),
          onClick: (g) => {
            (e.onClick?.(g),
              !(e.disabled || g.defaultPrevented) &&
                (g.currentTarget.focus(), r.open || r.onOpenChange(!0)));
          },
          onPointerMove: Ze(
            e.onPointerMove,
            gl((g) => {
              (l.onItemEnter(g),
                !g.defaultPrevented &&
                  !e.disabled &&
                  !r.open &&
                  !c.current &&
                  (l.onPointerGraceIntentChange(null),
                  (c.current = window.setTimeout(() => {
                    (r.onOpenChange(!0), y());
                  }, 100))));
            }),
          ),
          onPointerLeave: Ze(
            e.onPointerLeave,
            gl((g) => {
              y();
              const v = r.content?.getBoundingClientRect();
              if (v) {
                const _ = r.content?.dataset.side,
                  S = _ === "right",
                  E = S ? -5 : 5,
                  x = v[S ? "left" : "right"],
                  T = v[S ? "right" : "left"];
                (l.onPointerGraceIntentChange({
                  area: [
                    { x: g.clientX + E, y: g.clientY },
                    { x, y: v.top },
                    { x: T, y: v.top },
                    { x: T, y: v.bottom },
                    { x, y: v.bottom },
                  ],
                  side: _,
                }),
                  window.clearTimeout(d.current),
                  (d.current = window.setTimeout(
                    () => l.onPointerGraceIntentChange(null),
                    300,
                  )));
              } else {
                if ((l.onTriggerLeave(g), g.defaultPrevented)) return;
                l.onPointerGraceIntentChange(null);
              }
            }),
          ),
          onKeyDown: Ze(e.onKeyDown, (g) => {
            const v = l.searchRef.current !== "";
            e.disabled ||
              (v && g.key === " ") ||
              (IN[i.dir].includes(g.key) &&
                (r.onOpenChange(!0), r.content?.focus(), g.preventDefault()));
          }),
        }),
      })
    );
  });
__.displayName = nl;
var E_ = "MenuSubContent",
  x_ = w.forwardRef((e, t) => {
    const r = s_(ar, e.__scopeMenu),
      { forceMount: i = r.forceMount, ...s } = e,
      l = Fi(ar, e.__scopeMenu),
      c = Ml(ar, e.__scopeMenu),
      d = S_(E_, e.__scopeMenu),
      m = w.useRef(null),
      h = sn(t, m);
    return j.jsx(yl.Provider, {
      scope: e.__scopeMenu,
      children: j.jsx(Wa, {
        present: i || l.open,
        children: j.jsx(yl.Slot, {
          scope: e.__scopeMenu,
          children: j.jsx(Lp, {
            id: d.contentId,
            "aria-labelledby": d.triggerId,
            ...s,
            ref: h,
            align: "start",
            side: c.dir === "rtl" ? "left" : "right",
            disableOutsidePointerEvents: !1,
            disableOutsideScroll: !1,
            trapFocus: !1,
            onOpenAutoFocus: (y) => {
              (c.isUsingKeyboardRef.current && m.current?.focus(),
                y.preventDefault());
            },
            onCloseAutoFocus: (y) => y.preventDefault(),
            onFocusOutside: Ze(e.onFocusOutside, (y) => {
              y.target !== d.trigger && l.onOpenChange(!1);
            }),
            onEscapeKeyDown: Ze(e.onEscapeKeyDown, (y) => {
              (c.onClose(), y.preventDefault());
            }),
            onKeyDown: Ze(e.onKeyDown, (y) => {
              const g = y.currentTarget.contains(y.target),
                v = ZN[c.dir].includes(y.key);
              g &&
                v &&
                (l.onOpenChange(!1), d.trigger?.focus(), y.preventDefault());
            }),
          }),
        }),
      }),
    });
  });
x_.displayName = E_;
function R_(e) {
  return e ? "open" : "closed";
}
function jc(e) {
  return e === "indeterminate";
}
function Fp(e) {
  return jc(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function fz(e) {
  const t = document.activeElement;
  for (const r of e)
    if (r === t || (r.focus(), document.activeElement !== t)) return;
}
function dz(e, t) {
  return e.map((r, i) => e[(t + i) % e.length]);
}
function hz(e, t, r) {
  const s = t.length > 1 && Array.from(t).every((h) => h === t[0]) ? t[0] : t,
    l = r ? e.indexOf(r) : -1;
  let c = dz(e, Math.max(l, 0));
  s.length === 1 && (c = c.filter((h) => h !== r));
  const m = c.find((h) => h.toLowerCase().startsWith(s.toLowerCase()));
  return m !== r ? m : void 0;
}
function mz(e, t) {
  const { x: r, y: i } = e;
  let s = !1;
  for (let l = 0, c = t.length - 1; l < t.length; c = l++) {
    const d = t[l],
      m = t[c],
      h = d.x,
      y = d.y,
      g = m.x,
      v = m.y;
    y > i != v > i && r < ((g - h) * (i - y)) / (v - y) + h && (s = !s);
  }
  return s;
}
function pz(e, t) {
  if (!t) return !1;
  const r = { x: e.clientX, y: e.clientY };
  return mz(r, t);
}
function gl(e) {
  return (t) => (t.pointerType === "mouse" ? e(t) : void 0);
}
var yz = o_,
  gz = zp,
  vz = l_,
  bz = u_,
  wz = Up,
  Sz = c_,
  _z = cf,
  Ez = d_,
  xz = m_,
  Rz = y_,
  Oz = v_,
  Az = b_,
  Cz = w_,
  Tz = __,
  Dz = x_,
  ff = "DropdownMenu",
  [Mz, yL] = Io(ff, [a_]),
  yn = a_(),
  [Nz, O_] = Mz(ff),
  A_ = (e) => {
    const {
        __scopeDropdownMenu: t,
        children: r,
        dir: i,
        open: s,
        defaultOpen: l,
        onOpenChange: c,
        modal: d = !0,
      } = e,
      m = yn(t),
      h = w.useRef(null),
      [y, g] = ap({ prop: s, defaultProp: l ?? !1, onChange: c, caller: ff });
    return j.jsx(Nz, {
      scope: t,
      triggerId: zo(),
      triggerRef: h,
      contentId: zo(),
      open: y,
      onOpenChange: g,
      onOpenToggle: w.useCallback(() => g((v) => !v), [g]),
      modal: d,
      children: j.jsx(yz, {
        ...m,
        open: y,
        onOpenChange: g,
        dir: i,
        modal: d,
        children: r,
      }),
    });
  };
A_.displayName = ff;
var C_ = "DropdownMenuTrigger",
  T_ = w.forwardRef((e, t) => {
    const { __scopeDropdownMenu: r, disabled: i = !1, ...s } = e,
      l = O_(C_, r),
      c = yn(r);
    return j.jsx(gz, {
      asChild: !0,
      ...c,
      children: j.jsx(Pt.button, {
        type: "button",
        id: l.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": l.open,
        "aria-controls": l.open ? l.contentId : void 0,
        "data-state": l.open ? "open" : "closed",
        "data-disabled": i ? "" : void 0,
        disabled: i,
        ...s,
        ref: Gc(t, l.triggerRef),
        onPointerDown: Ze(e.onPointerDown, (d) => {
          !i &&
            d.button === 0 &&
            d.ctrlKey === !1 &&
            (l.onOpenToggle(), l.open || d.preventDefault());
        }),
        onKeyDown: Ze(e.onKeyDown, (d) => {
          i ||
            (["Enter", " "].includes(d.key) && l.onOpenToggle(),
            d.key === "ArrowDown" && l.onOpenChange(!0),
            ["Enter", " ", "ArrowDown"].includes(d.key) && d.preventDefault());
        }),
      }),
    });
  });
T_.displayName = C_;
var zz = "DropdownMenuPortal",
  D_ = (e) => {
    const { __scopeDropdownMenu: t, ...r } = e,
      i = yn(t);
    return j.jsx(vz, { ...i, ...r });
  };
D_.displayName = zz;
var M_ = "DropdownMenuContent",
  N_ = w.forwardRef((e, t) => {
    const { __scopeDropdownMenu: r, ...i } = e,
      s = O_(M_, r),
      l = yn(r),
      c = w.useRef(!1);
    return j.jsx(bz, {
      id: s.contentId,
      "aria-labelledby": s.triggerId,
      ...l,
      ...i,
      ref: t,
      onCloseAutoFocus: Ze(e.onCloseAutoFocus, (d) => {
        (c.current || s.triggerRef.current?.focus(),
          (c.current = !1),
          d.preventDefault());
      }),
      onInteractOutside: Ze(e.onInteractOutside, (d) => {
        const m = d.detail.originalEvent,
          h = m.button === 0 && m.ctrlKey === !0,
          y = m.button === 2 || h;
        (!s.modal || y) && (c.current = !0);
      }),
      style: {
        ...e.style,
        "--radix-dropdown-menu-content-transform-origin":
          "var(--radix-popper-transform-origin)",
        "--radix-dropdown-menu-content-available-width":
          "var(--radix-popper-available-width)",
        "--radix-dropdown-menu-content-available-height":
          "var(--radix-popper-available-height)",
        "--radix-dropdown-menu-trigger-width":
          "var(--radix-popper-anchor-width)",
        "--radix-dropdown-menu-trigger-height":
          "var(--radix-popper-anchor-height)",
      },
    });
  });
N_.displayName = M_;
var kz = "DropdownMenuGroup",
  jz = w.forwardRef((e, t) => {
    const { __scopeDropdownMenu: r, ...i } = e,
      s = yn(r);
    return j.jsx(wz, { ...s, ...i, ref: t });
  });
jz.displayName = kz;
var Lz = "DropdownMenuLabel",
  Uz = w.forwardRef((e, t) => {
    const { __scopeDropdownMenu: r, ...i } = e,
      s = yn(r);
    return j.jsx(Sz, { ...s, ...i, ref: t });
  });
Uz.displayName = Lz;
var Pz = "DropdownMenuItem",
  Fz = w.forwardRef((e, t) => {
    const { __scopeDropdownMenu: r, ...i } = e,
      s = yn(r);
    return j.jsx(_z, { ...s, ...i, ref: t });
  });
Fz.displayName = Pz;
var Bz = "DropdownMenuCheckboxItem",
  Vz = w.forwardRef((e, t) => {
    const { __scopeDropdownMenu: r, ...i } = e,
      s = yn(r);
    return j.jsx(Ez, { ...s, ...i, ref: t });
  });
Vz.displayName = Bz;
var $z = "DropdownMenuRadioGroup",
  Hz = w.forwardRef((e, t) => {
    const { __scopeDropdownMenu: r, ...i } = e,
      s = yn(r);
    return j.jsx(xz, { ...s, ...i, ref: t });
  });
Hz.displayName = $z;
var Iz = "DropdownMenuRadioItem",
  Zz = w.forwardRef((e, t) => {
    const { __scopeDropdownMenu: r, ...i } = e,
      s = yn(r);
    return j.jsx(Rz, { ...s, ...i, ref: t });
  });
Zz.displayName = Iz;
var qz = "DropdownMenuItemIndicator",
  Gz = w.forwardRef((e, t) => {
    const { __scopeDropdownMenu: r, ...i } = e,
      s = yn(r);
    return j.jsx(Oz, { ...s, ...i, ref: t });
  });
Gz.displayName = qz;
var Yz = "DropdownMenuSeparator",
  Kz = w.forwardRef((e, t) => {
    const { __scopeDropdownMenu: r, ...i } = e,
      s = yn(r);
    return j.jsx(Az, { ...s, ...i, ref: t });
  });
Kz.displayName = Yz;
var Qz = "DropdownMenuArrow",
  Xz = w.forwardRef((e, t) => {
    const { __scopeDropdownMenu: r, ...i } = e,
      s = yn(r);
    return j.jsx(Cz, { ...s, ...i, ref: t });
  });
Xz.displayName = Qz;
var Jz = "DropdownMenuSubTrigger",
  Wz = w.forwardRef((e, t) => {
    const { __scopeDropdownMenu: r, ...i } = e,
      s = yn(r);
    return j.jsx(Tz, { ...s, ...i, ref: t });
  });
Wz.displayName = Jz;
var e6 = "DropdownMenuSubContent",
  t6 = w.forwardRef((e, t) => {
    const { __scopeDropdownMenu: r, ...i } = e,
      s = yn(r);
    return j.jsx(Dz, {
      ...s,
      ...i,
      ref: t,
      style: {
        ...e.style,
        "--radix-dropdown-menu-content-transform-origin":
          "var(--radix-popper-transform-origin)",
        "--radix-dropdown-menu-content-available-width":
          "var(--radix-popper-available-width)",
        "--radix-dropdown-menu-content-available-height":
          "var(--radix-popper-available-height)",
        "--radix-dropdown-menu-trigger-width":
          "var(--radix-popper-anchor-width)",
        "--radix-dropdown-menu-trigger-height":
          "var(--radix-popper-anchor-height)",
      },
    });
  });
t6.displayName = e6;
var n6 = A_,
  r6 = T_,
  a6 = D_,
  i6 = N_;
function o6({ ...e }) {
  return j.jsx(n6, { "data-slot": "dropdown-menu", ...e });
}
function s6({ ...e }) {
  return j.jsx(r6, { "data-slot": "dropdown-menu-trigger", ...e });
}
function l6({ className: e, sideOffset: t = 4, ...r }) {
  return j.jsx(a6, {
    children: j.jsx(i6, {
      "data-slot": "dropdown-menu-content",
      sideOffset: t,
      className: hp(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
        e,
      ),
      ...r,
    }),
  });
}
const u6 = Intl.NumberFormat("ko-kr", { compactDisplay: "long" }).format,
  gL = (e) => e.toLocaleString("ko-KR");
function nc({ cup: e, money: t }) {
  const r = jr(),
    i = async () => {
      if (
        !(
          localStorage.getItem("access_token") ||
          document.cookie
            .split(";")
            .find((l) => l.trim().startsWith("access_token="))
            ?.split("=")[1]
        )
      ) {
        alert("로그인이 필요합니다. 먼저 로그인해주세요.");
        return;
      }
      try {
        const l = await y4({ point: e.toString(), price: t.toString() });
        l &&
          (sessionStorage.setItem("returnTo", r.pathname + r.search + r.hash),
          sessionStorage.setItem("returnToScroll", String(window.scrollY)),
          localStorage.setItem("tid", l.tid),
          (window.location.href = l.next_redirect_pc_url));
      } catch (l) {
        (console.error("결제 준비 실패:", l),
          l.response?.status === 401
            ? alert("로그인이 필요합니다. 먼저 로그인해주세요.")
            : alert("결제 준비에 실패했습니다. 다시 시도해주세요."));
      }
    };
  return j.jsxs("div", {
    className: "w-full flex items-center justify-between",
    children: [
      j.jsxs("div", {
        className: "flex items-center gap-2",
        children: [
          j.jsx("img", { src: t2, className: "w-10" }),
          j.jsxs("div", {
            className: "text-xl font-bold text-scale-500",
            children: [e, " 잔"],
          }),
        ],
      }),
      j.jsxs(Lo, {
        variant: "primary",
        isRounded: !0,
        className: "text-lg font-regular px-10 py-3",
        onClick: i,
        children: ["₩ ", u6(t)],
      }),
    ],
  });
}
function c6({ open: e, onOpenChange: t, children: r }) {
  return j.jsxs(Qc, {
    open: e,
    onOpenChange: t,
    children: [
      j.jsx(Jc, { asChild: !0, children: r }),
      j.jsx(Xc, {
        className: "w-133",
        children: j.jsxs("div", {
          className: "flex flex-col items-center px-8 py-15 gap-12.5",
          children: [
            j.jsx("div", {
              className: "text-2xl font-bold text-scale-600",
              children: "포인트 충전하기",
            }),
            j.jsxs("div", {
              className: "flex flex-col gap-9 w-full",
              children: [
                j.jsx(nc, { cup: 10, money: 1e4 }),
                j.jsx(nc, { cup: 30, money: 3e4 }),
                j.jsx(nc, { cup: 50, money: 5e4 }),
                j.jsx(nc, { cup: 100, money: 9e4 }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
var Ko = (e) => e.type === "checkbox",
  df = (e) => e.type === "file",
  Di = (e) => e instanceof Date,
  Ct = (e) => e == null;
const Bp = (e) => typeof e == "object";
var St = (e) => !Ct(e) && !Array.isArray(e) && Bp(e) && !Di(e),
  Tm = (e) =>
    St(e) && e.target
      ? Ko(e.target)
        ? e.target.checked
        : df(e.target)
          ? e.target.files
          : e.target.value
      : e;
const f6 = /[.[\]'"]/;
var Qo = (e) => e.split(f6).filter(Boolean);
function d6(e, t) {
  const r = Qo(t);
  let i = e._formValues,
    s = e._defaultValues;
  for (let l = 0; l < r.length - 1; l++) {
    const c = r[l];
    if (
      ((i = i == null ? i : i[c]),
      (s = s == null ? s : s[c]),
      i === null || s === null)
    )
      return null;
  }
}
var z_ = (e, t) =>
    t
      .split(".")
      .some((r, i, s) => !isNaN(Number(r)) && e.has(s.slice(0, i).join("."))),
  hf =
    typeof window < "u" &&
    typeof window.HTMLElement < "u" &&
    typeof document < "u";
function rt(e) {
  if (e === null || typeof e != "object") return e;
  if (e instanceof Date) return new Date(e);
  const t = typeof Blob < "u" && e instanceof Blob,
    r = typeof FileList < "u" && e instanceof FileList;
  if (hf && (t || r)) return e;
  const i = Array.isArray(e),
    s = Object.getPrototypeOf(e);
  if (!i && s && s.constructor !== Object) return e;
  const l = i ? new Array(e.length) : Object.create(s);
  for (const c in e)
    Object.prototype.hasOwnProperty.call(e, c) && (l[c] = rt(e[c]));
  return l;
}
const Ia = {
    BLUR: "blur",
    FOCUS_OUT: "focusout",
    CHANGE: "change",
    SUBMIT: "submit",
    TRIGGER: "trigger",
    VALID: "valid",
  },
  rr = {
    onBlur: "onBlur",
    onChange: "onChange",
    onSubmit: "onSubmit",
    onTouched: "onTouched",
    all: "all",
  },
  Qt = {
    max: "max",
    min: "min",
    maxLength: "maxLength",
    minLength: "minLength",
    pattern: "pattern",
    required: "required",
    validate: "validate",
  },
  h6 = [
    Qt.required,
    Qt.min,
    Qt.max,
    Qt.minLength,
    Qt.maxLength,
    Qt.pattern,
    Qt.validate,
  ],
  rl = "form",
  k_ = "root",
  Vp = ["__proto__", "constructor", "prototype"],
  m6 = /^\w*$/;
var Nl = (e) => m6.test(e),
  Ye = (e) => e === void 0,
  he = (e, t, r) => {
    if (!t || !St(e)) return r;
    const i = Nl(t) ? [t] : Qo(t);
    if (i.some((l) => Vp.includes(l))) return r;
    const s = i.reduce((l, c) => (Ct(l) ? void 0 : l[c]), e);
    return Ye(s) || s === e ? (Ye(e[t]) ? r : e[t]) : s;
  },
  On = (e) => typeof e == "boolean",
  rn = (e) => typeof e == "function",
  et = (e, t, r) => {
    let i = -1;
    const s = Nl(t) ? [t] : Qo(t),
      l = s.length,
      c = l - 1;
    for (; ++i < l; ) {
      const d = s[i];
      let m = r;
      if (i !== c) {
        const h = e[d];
        m = St(h) || Array.isArray(h) ? h : isNaN(+s[i + 1]) ? {} : [];
      }
      if (Vp.includes(d)) return;
      ((e[d] = m), (e = e[d]));
    }
  };
const $p = Re.createContext(null);
$p.displayName = "HookFormControlContext";
const Hp = () => Re.useContext($p);
var j_ = (e, t, r, i = !0) => {
  const s = {};
  for (const l in e)
    Object.defineProperty(s, l, {
      get: () => {
        const c = l;
        return (
          t._proxyFormState[c] !== rr.all &&
            (t._proxyFormState[c] = !i || rr.all),
          r && (r[c] = !0),
          e[c]
        );
      },
    });
  return s;
};
const Ip = hf ? Re.useLayoutEffect : Re.useEffect;
var p6 = (e) => {
    const t = e.constructor && e.constructor.prototype;
    return St(t) && t.hasOwnProperty("isPrototypeOf");
  },
  Dm = (e) => Ct(e) || !Bp(e);
const w1 = (e, t) =>
  t.length === 0 &&
  !Array.isArray(e) &&
  Object.getPrototypeOf(e) !== null &&
  !p6(e);
function tn(e, t, r = !1, i = new WeakMap()) {
  if (e === t) return !0;
  if (Dm(e) || Dm(t)) return Object.is(e, t);
  if (Di(e) && Di(t)) return Object.is(e.getTime(), t.getTime());
  if (Array.isArray(e) && Array.isArray(t) && e.length !== t.length) return !1;
  const s = Object.keys(e),
    l = Object.keys(t);
  if (s.length !== l.length) return !1;
  if (w1(e, s) || w1(t, l)) return Object.is(e, t);
  if (!s.length && Array.isArray(e) !== Array.isArray(t)) return !1;
  const c = i.get(e);
  if (c && c.has(t)) return !0;
  if (c) c.add(t);
  else {
    const d = new WeakSet();
    (d.add(t), i.set(e, d));
  }
  for (const d of s) {
    const m = e[d];
    if (!Object.prototype.hasOwnProperty.call(t, d)) return !1;
    if (!r || d !== "ref") {
      const h = t[d];
      if (
        (Di(m) && Di(h)) ||
        ((St(m) || Array.isArray(m)) && (St(h) || Array.isArray(h)))
          ? !tn(m, h, r, i)
          : !Object.is(m, h)
      )
        return !1;
    }
  }
  return !0;
}
function Zp(e) {
  const t = Re.useRef(!1),
    r = Re.useRef(!1),
    i = Re.useRef(void 0),
    s = Re.useRef(0);
  (s.current++, !r.current && e && ((r.current = !0), (i.current = rt(e()))));
  const l = Re.useCallback((d, m, h) => {
      if (d && (t.current || (r.current && s.current > 1))) {
        const y = m();
        tn(i.current, y) || h(y);
      }
      t.current = !0;
    }, []),
    c = Re.useCallback((d, m) => {
      d && (i.current = rt(m()));
    }, []);
  return { resyncIfNeeded: l, snapshot: c };
}
function y6(e) {
  const t = Hp(),
    { control: r = t, disabled: i, name: s, exact: l } = e || {},
    c = () => ({ ...r._formState, defaultValues: r._defaultValues }),
    [d, m] = Re.useState(c),
    h = Re.useRef({
      isDirty: !1,
      isLoading: !1,
      dirtyFields: !1,
      touchedFields: !1,
      validatingFields: !1,
      isValidating: !1,
      isValid: !1,
      errors: !1,
    }),
    { resyncIfNeeded: y, snapshot: g } = Zp(c);
  return (
    Ip(() => {
      y(!i, c, m);
      const v = r._subscribe({
        name: s,
        formState: h.current,
        exact: l,
        callback: (_) => {
          !i && m({ ...r._formState, ..._, defaultValues: r._defaultValues });
        },
      });
      return () => {
        (v(), g(!i, c));
      };
    }, [r, s, i, l, y, g]),
    Re.useEffect(() => {
      h.current.isValid && r._setValid(!0);
    }, [r]),
    Re.useMemo(() => j_(d, r, h.current, !1), [d, r])
  );
}
var an = (e) => typeof e == "string",
  Mm = (e, t, r, i, s) =>
    an(e)
      ? (i && t.watch.add(e), he(r, e, s))
      : Array.isArray(e)
        ? e.map((l) => (i && t.watch.add(l), he(r, l, he(s, l))))
        : (i && (t.watchAll = !0), r);
function g6(e) {
  const t = Hp(),
    {
      control: r = t,
      name: i,
      defaultValue: s,
      disabled: l,
      exact: c,
      compute: d,
    } = e || {},
    m = Re.useRef(s),
    h = Re.useRef(d),
    y = Re.useRef(r),
    g = Re.useRef(i);
  h.current = d;
  const v = () => {
      const pe = r._getWatch(i, m.current);
      return h.current ? h.current(pe) : pe;
    },
    [_, S] = Re.useState(v),
    E = Re.useRef(_),
    x = Re.useCallback(
      (pe) => {
        const we = Mm(i, r._names, pe || r._formValues, !1, m.current);
        return h.current ? h.current(we) : we;
      },
      [r._formValues, r._names, i],
    ),
    T = Re.useCallback(
      (pe) => {
        if (!l) {
          const we = Mm(i, r._names, pe || r._formValues, !1, m.current);
          if (h.current) {
            const be = h.current(we);
            tn(be, E.current) || (S(be), (E.current = be));
          } else S(we);
        }
      },
      [r._formValues, r._names, l, i],
    ),
    { resyncIfNeeded: P, snapshot: D } = Zp(v),
    B = Re.useRef(T);
  B.current = T;
  const k = Re.useRef(x);
  ((k.current = x),
    Ip(() => {
      y.current !== r || !tn(g.current, i)
        ? ((y.current = r), (g.current = i), B.current())
        : P(
            !l,
            () => k.current(),
            (we) => {
              const be = rt(we);
              (S(be), (E.current = be));
            },
          );
      const pe = r._subscribe({
        name: i,
        formState: { values: !0 },
        exact: c,
        callback: (we) => {
          B.current(we.values);
        },
      });
      return () => {
        (pe(), D(!l, () => k.current()));
      };
    }, [r, c, i, l, P, D]),
    Re.useEffect(() => r._removeUnmounted()));
  const C = y.current !== r,
    Y = g.current,
    Q = Re.useMemo(() => !C && !tn(Y, i), [C, i, Y]);
  return ((C || Q) && (m.current = s), !l && (C || Q) ? x() : _);
}
function v6(e) {
  const t = Hp(),
    {
      name: r,
      disabled: i,
      control: s = t,
      shouldUnregister: l,
      defaultValue: c,
      exact: d = !0,
    } = e,
    m = z_(s._names.array, r),
    h = Re.useMemo(() => {
      const B = he(s._formValues, r, he(s._defaultValues, r, c));
      return Ye(B) ? d6(s, r) : B;
    }, [s, r, c]),
    y = g6({ control: s, name: r, defaultValue: h, exact: d }),
    g = y6({ control: s, name: r, exact: d }),
    v = Re.useRef(e),
    _ = Re.useRef(null),
    S = Re.useRef(
      s.register(r, {
        ...e.rules,
        value: y,
        ...(On(e.disabled) ? { disabled: e.disabled } : {}),
      }),
    );
  v.current = e;
  const E = Re.useMemo(
      () =>
        Object.defineProperties(
          {},
          {
            invalid: { enumerable: !0, get: () => !!he(g.errors, r) },
            isDirty: { enumerable: !0, get: () => !!he(g.dirtyFields, r) },
            isTouched: { enumerable: !0, get: () => !!he(g.touchedFields, r) },
            isValidating: {
              enumerable: !0,
              get: () => !!he(g.validatingFields, r),
            },
            error: { enumerable: !0, get: () => he(g.errors, r) },
          },
        ),
      [g, r],
    ),
    x = Re.useCallback(
      (B) => {
        const k = Tm(B);
        return (
          he(s._fields, r) ||
            (S.current = s.register(r, { ...v.current.rules, value: k })),
          S.current.onChange({
            target: { value: Tm(B), name: r },
            type: Ia.CHANGE,
          })
        );
      },
      [r, s],
    ),
    T = Re.useCallback(() => {
      const B = he(s._formValues, r);
      return (
        he(s._fields, r) ||
          (S.current = s.register(r, { ...v.current.rules, value: B })),
        S.current.onBlur({ target: { value: B, name: r }, type: Ia.BLUR })
      );
    }, [r, s]),
    P = Re.useCallback(
      (B) => {
        B &&
          (_.current = {
            focus: () => rn(B.focus) && B.focus(),
            select: () => rn(B.select) && B.select(),
            setCustomValidity: (C) =>
              rn(B.setCustomValidity) && B.setCustomValidity(C),
            reportValidity: () => rn(B.reportValidity) && B.reportValidity(),
          });
        const k = he(s._fields, r);
        k && k._f && B && ((k._f.ref = _.current), (k._f._c = !0));
      },
      [s._fields, r],
    ),
    D = Re.useMemo(
      () => ({
        name: r,
        value: y,
        ...(On(i) || g.disabled ? { disabled: g.disabled || i } : {}),
        onChange: x,
        onBlur: T,
        ref: P,
      }),
      [r, i, g.disabled, x, T, P, y],
    );
  return (
    Re.useEffect(() => {
      const B = s._options.shouldUnregister || l;
      S.current = s.register(r, {
        ...v.current.rules,
        ...(On(v.current.disabled) ? { disabled: v.current.disabled } : {}),
      });
      const k = (C, Y) => {
        const Q = he(s._fields, C);
        Q && Q._f && ((Q._f.mount = Y), (Q._f._c = Y));
      };
      if ((k(r, !0), B)) {
        const C = rt(
          he(
            l ? s._defaultValues : s._options.values || s._defaultValues,
            r,
            he(s._options.defaultValues, r, v.current.defaultValue),
          ),
        );
        (et(s._defaultValues, r, C),
          Ye(he(s._formValues, r)) && et(s._formValues, r, C));
      }
      if (
        (!m &&
          s.register(r, {
            ...v.current.rules,
            ...(On(v.current.disabled) ? { disabled: v.current.disabled } : {}),
          }),
        _.current)
      ) {
        const C = he(s._fields, r);
        C && C._f && (C._f.ref = _.current);
      }
      return () => {
        (m ? B && !s._state.action : B) ? s.unregister(r) : k(r, !1);
      };
    }, [r, s, m, l]),
    Re.useEffect(() => {
      s._setDisabledField({ disabled: i, name: r });
    }, [i, r, s]),
    Re.useMemo(() => ({ field: D, formState: g, fieldState: E }), [D, g, E])
  );
}
const b6 = (e) => e.render(v6(e));
var rc = (e) => ({
    isOnSubmit: !e || e === rr.onSubmit,
    isOnBlur: e === rr.onBlur,
    isOnChange: e === rr.onChange,
    isOnAll: e === rr.all,
    isOnTouch: e === rr.onTouched,
  }),
  Kh = (e, t, r) => {
    if (r) return !1;
    if (t.watchAll || t.watch.has(e)) return !0;
    for (const i of t.watch)
      if (e.startsWith(i) && e.charAt(i.length) === ".") return !0;
    return !1;
  };
const ol = (e, t, r) => {
  for (const i of r || Object.keys(e)) {
    if (i === "_f") continue;
    const s = r ? he(e, i) : e[i];
    if (s) {
      const { _f: l } = s;
      if (l) {
        if (l.refs && l.refs[0] && t(l.refs[0], l.name)) return !0;
        if (l.ref && t(l.ref, l.name)) return !0;
        if (ol(s, t)) return !0;
      } else if ((St(s) || Array.isArray(s)) && ol(s, t)) return !0;
    }
  }
};
var S1 = (e, t, r) => {
    const i = he(e, r),
      s = Array.isArray(i) ? i : [];
    return (et(s, k_, t[r]), et(e, r, s), e);
  },
  Nt = (e) => St(e) && !Object.keys(e).length,
  Lc = (e) => {
    if (!hf) return !1;
    const t = e ? e.ownerDocument : 0;
    return (
      e instanceof
      (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement)
    );
  },
  mf = (e) => e.type === "radio",
  Uc = (e) => e instanceof RegExp,
  qp = (e, t, r, i, s) =>
    t
      ? {
          ...r[e],
          types: { ...(r[e] && r[e].types ? r[e].types : {}), [i]: s || !0 },
        }
      : {};
const _1 = { value: !1, isValid: !1 },
  E1 = { value: !0, isValid: !0 };
var L_ = (e) => {
  if (!Array.isArray(e)) return _1;
  if (e.length > 1) {
    const r = e
      .filter((i) => i && i.checked && !i.disabled)
      .map((i) => i.value);
    return { value: r, isValid: !!r.length };
  }
  const t = e[0];
  return !t || !t.checked || t.disabled
    ? _1
    : !t.attributes ||
        !("value" in t.attributes) ||
        Ye(t.value) ||
        t.value === ""
      ? E1
      : { value: t.value, isValid: !0 };
};
const x1 = { isValid: !1, value: null };
var U_ = (e) =>
  Array.isArray(e)
    ? e.reduce(
        (t, r) =>
          r && r.checked && !r.disabled ? { isValid: !0, value: r.value } : t,
        x1,
      )
    : x1;
function R1(e, t, r = "validate") {
  if (an(e) || (Array.isArray(e) && e.length && e.every(an)) || (On(e) && !e))
    return { type: r, message: an(e) ? e : "", ref: t };
}
var To = (e) => (St(e) && !Uc(e) ? e : { value: e, message: "" }),
  O1 = async (e, t, r, i, s, l) => {
    const {
        ref: c,
        refs: d,
        required: m,
        maxLength: h,
        minLength: y,
        min: g,
        max: v,
        pattern: _,
        validate: S,
        name: E,
        valueAsNumber: x,
        mount: T,
        _c: P,
      } = e._f,
      D = he(r, E);
    if (!T || t.has(E)) return {};
    const B = d ? d[0] : c,
      k = (ce) => {
        if (s && B.reportValidity) {
          const ge = On(ce) ? "" : ce || "";
          (d
            ? d.forEach(
                (U) => rn(U.setCustomValidity) && U.setCustomValidity(ge),
              )
            : B.setCustomValidity(ge),
            B.reportValidity());
        }
      },
      C = {},
      Y = !P && mf(c),
      Q = !P && Ko(c),
      me = Y || Q,
      pe =
        ((x || df(c)) && Ye(c.value) && Ye(D)) ||
        (Lc(c) && c.value === "" && !P) ||
        D === "" ||
        (Array.isArray(D) && !D.length),
      we = qp.bind(null, E, i, C),
      be = (ce, ge, U, ne = Qt.maxLength, q = Qt.minLength) => {
        const ie = ce ? ge : U;
        C[E] = {
          type: ce ? ne : q,
          message: ie,
          ref: c,
          ...we(ce ? ne : q, ie),
        };
      };
    if (
      l
        ? !Array.isArray(D) || !D.length
        : m &&
          ((!me && (pe || Ct(D))) ||
            (On(D) && !D) ||
            (Q && !L_(d).isValid) ||
            (Y && !U_(d).isValid))
    ) {
      const { value: ce, message: ge } = an(m)
        ? { value: !!m, message: m }
        : To(m);
      if (
        ce &&
        ((C[E] = {
          type: Qt.required,
          message: ge,
          ref: B,
          ...we(Qt.required, ge),
        }),
        !i)
      )
        return (k(ge), C);
    }
    if (!pe && (!Ct(g) || !Ct(v))) {
      let ce, ge;
      const U = To(v),
        ne = To(g);
      if (!Ct(D) && !Di(D) && !isNaN(D)) {
        const q = (!P && c.valueAsNumber) || (D && +D);
        (Ct(U.value) || (ce = q > U.value),
          Ct(ne.value) || (ge = q < ne.value));
      } else {
        const q = (!P && c.valueAsDate) || new Date(D),
          ie = (fe) => new Date(new Date().toDateString() + " " + fe),
          N = c.type == "time",
          W = c.type == "week";
        (an(U.value) &&
          D &&
          (ce = N
            ? ie(D) > ie(U.value)
            : W
              ? D > U.value
              : q > new Date(U.value)),
          an(ne.value) &&
            D &&
            (ge = N
              ? ie(D) < ie(ne.value)
              : W
                ? D < ne.value
                : q < new Date(ne.value)));
      }
      if ((ce || ge) && (be(!!ce, U.message, ne.message, Qt.max, Qt.min), !i))
        return (k(C[E].message), C);
    }
    if ((!Ct(h) || !Ct(y)) && !pe && (an(D) || (l && Array.isArray(D)))) {
      const ce = To(h),
        ge = To(y),
        U = !Ct(ce.value) && D.length > +ce.value,
        ne = !Ct(ge.value) && D.length < +ge.value;
      if ((U || ne) && (be(U, ce.message, ge.message), !i))
        return (k(C[E].message), C);
    }
    if (_ && !pe && an(D)) {
      const { value: ce, message: ge } = To(_);
      if (
        Uc(ce) &&
        !D.match(ce) &&
        ((C[E] = {
          type: Qt.pattern,
          message: ge,
          ref: c,
          ...we(Qt.pattern, ge),
        }),
        !i)
      )
        return (k(ge), C);
    }
    if (S) {
      if (rn(S)) {
        const ce = await S(D, r),
          ge = R1(ce, B);
        if (ge && ((C[E] = { ...ge, ...we(Qt.validate, ge.message) }), !i))
          return (k(ge.message), C);
      } else if (St(S)) {
        let ce = {};
        for (const ge in S) {
          if (!Nt(ce) && !i) break;
          const U = R1(await S[ge](D, r), B, ge);
          U &&
            ((ce = { ...U, ...we(ge, U.message) }),
            i || k(U.message),
            i && (C[E] = ce));
        }
        if (!Nt(ce) && ((C[E] = { ref: B, ...ce }), !i)) return C;
      }
    }
    const Se = C[E];
    return (k(Se ? Se.message : !0), C);
  },
  Qh = (e) => (Array.isArray(e) ? e : [e]),
  P_ = (e) => (Array.isArray(e) ? e.filter(Boolean) : []);
function w6(e, t) {
  const r = t.length - 1;
  let i = 0;
  for (; i < r; ) {
    if (Ct(e)) {
      e = void 0;
      break;
    }
    ((e = e[t[i]]), i++);
  }
  return e;
}
function S6(e) {
  for (const t in e) if (e.hasOwnProperty(t) && !Ye(e[t])) return !1;
  return !0;
}
function Mt(e, t) {
  if (an(t) && Object.prototype.hasOwnProperty.call(e, t))
    return (delete e[t], e);
  const r = Array.isArray(t) ? t : Nl(t) ? [t] : Qo(t);
  if (r.some((c) => Vp.includes(String(c)))) return e;
  const i = r.length === 1 ? e : w6(e, r),
    s = r.length - 1,
    l = r[s];
  return (
    i && delete i[l],
    s !== 0 &&
      ((St(i) && Nt(i)) || (Array.isArray(i) && S6(i))) &&
      Mt(e, r.slice(0, -1)),
    e
  );
}
var A1 = () => {
  let e = new Set(),
    t = 0;
  return {
    get observers() {
      return Array.from(e);
    },
    next: (l) => {
      const c = e;
      t++;
      for (const d of c) d.next && d.next(l);
      c === e && t--;
    },
    subscribe: (l) => (
      e.add(l),
      {
        unsubscribe: () => {
          (t && ((e = new Set(e)), (t = 0)), e.delete(l));
        },
      }
    ),
    unsubscribe: () => {
      ((e = new Set()), (t = 0));
    },
  };
};
function F_(e, t) {
  const r = Array.isArray(e) ? [] : {};
  for (const i in e)
    if (Object.prototype.hasOwnProperty.call(e, i)) {
      const s = e[i],
        l = t[i];
      s && (St(s) || Array.isArray(s)) && l
        ? (r[i] = F_(s, l))
        : e[i] && (r[i] = l);
    }
  return r;
}
const C1 = (e, t) =>
  e !== null && Bp(e) && Object.prototype.hasOwnProperty.call(e, t);
var Xh = (e, t) => {
    if (!t) return !1;
    let r = e;
    for (const i of Nl(t) ? [t] : Qo(t)) {
      if (!C1(r, i)) return C1(e, t);
      r = r[i];
    }
    return !0;
  },
  Gp = (e) => e.type === "select-multiple";
const _6 = (e) => {
  const t = [...e.options];
  return !e.multiple && e.size < 2 && !t.some((r) => r.defaultSelected)
    ? e.selectedIndex !== t.findIndex((r) => !r.disabled)
    : t.some((r) => r.selected !== r.defaultSelected);
};
var E6 = (e) =>
    Ko(e)
      ? e.checked !== e.defaultChecked
      : e.type === "select-one" || Gp(e)
        ? _6(e)
        : !mf(e) && "defaultValue" in e && e.value !== e.defaultValue,
  x6 = (e) => mf(e) || Ko(e),
  Jh = (e) => Lc(e) && e.isConnected;
function T1(e) {
  return Array.isArray(e) || St(e);
}
function B_(e, t, r = "", i = []) {
  for (const s in e) {
    const l = r ? `${r}.${s}` : s,
      c = e[s];
    T1(c) && T1(he(t, l)) ? B_(c, t, l, i) : i.push(l);
  }
  return i;
}
var R6 = (e) => {
  for (const t in e) if (rn(e[t])) return !0;
  return !1;
};
function V_(e) {
  return Array.isArray(e) || (St(e) && !R6(e));
}
function $_(e) {
  return !!(e && "_f" in e);
}
function H_(e) {
  return Array.isArray(e) ? !e.some((t) => !Ye(t)) : !Object.keys(e).length;
}
function Nm(e, t) {
  Array.isArray(e) ? (e[t] = void 0) : delete e[t];
}
function zm(e, t = {}, r) {
  for (const i in e) {
    const s = e[i],
      l = r && r[i];
    V_(s) && (!Array.isArray(s) || !$_(l))
      ? ((t[i] = Array.isArray(s) ? [] : {}),
        zm(s, t[i], l),
        H_(t[i]) && Nm(t, i))
      : Ye(s) || (t[i] = !0);
  }
  return t;
}
function oa(e, t, r, i) {
  r || (r = zm(t, Array.isArray(Ct(t) ? e : t) ? [] : {}, i));
  for (const s in e) {
    const l = e[s],
      c = i && i[s];
    V_(l) && (!Array.isArray(l) || !$_(c))
      ? (Ye(t) || Dm(r[s])
          ? (r[s] = zm(l, Array.isArray(l) ? [] : {}, c))
          : oa(l, Ct(t) ? {} : t[s], r[s], c),
        H_(r[s]) && Nm(r, s))
      : tn(l, Ct(t) ? void 0 : t[s])
        ? Nm(r, s)
        : (r[s] = !0);
  }
  return r;
}
var O6 = (e, t) => {
    const r = t.split("."),
      i = [];
    let s = r[0];
    for (let l = 1; l < r.length; s += "." + r[l++])
      !isNaN(+r[l]) && e.has(s) && i.push(`${s}.${r[l]}`);
    return i;
  },
  km = (e, { valueAsNumber: t, valueAsDate: r, setValueAs: i }) =>
    Ye(e)
      ? e
      : t
        ? e === ""
          ? NaN
          : e && +e
        : r && an(e)
          ? new Date(e)
          : i
            ? i(e)
            : e;
function D1(e) {
  const t = e.ref;
  return df(t)
    ? t.files
    : mf(t)
      ? U_(e.refs).value
      : Gp(t)
        ? [...t.selectedOptions].map(({ value: r }) => r)
        : Ko(t)
          ? L_(e.refs).value
          : km(t.value, e);
}
var A6 = (e, t, r, i) => {
    const s = {};
    for (const l of e) {
      const c = he(t, l);
      c && et(s, l, c._f);
    }
    return {
      criteriaMode: r,
      names: [...e],
      fields: s,
      shouldUseNativeValidation: i,
    };
  },
  Do = (e) =>
    Ye(e)
      ? e
      : Uc(e)
        ? e.source
        : St(e)
          ? Uc(e.value)
            ? e.value.source
            : e.value
          : e;
const M1 = "AsyncFunction";
var C6 = (e) => {
    if (!e || !e.validate) return !1;
    if (rn(e.validate)) return e.validate.constructor.name === M1;
    if (St(e.validate)) {
      for (const t in e.validate)
        if (e.validate[t].constructor.name === M1) return !0;
    }
    return !1;
  },
  T6 = (e) =>
    e.mount &&
    (e.required ||
      (!Ye(e.required) && e.required !== !1) ||
      !Ye(e.min) ||
      !Ye(e.max) ||
      !Ye(e.maxLength) ||
      !Ye(e.minLength) ||
      e.pattern ||
      e.validate);
function N1(e, t, r) {
  const i = he(e, r);
  if ((i && (i.type || i.message)) || Array.isArray(i))
    return { error: i, name: r };
  const s = r.split(".");
  for (; s.length; ) {
    const l = s.join("."),
      c = he(t, l),
      d = he(e, l);
    if (c && !Array.isArray(c) && r !== l) return { name: r };
    if (d && d.type) return { name: l, error: d };
    if (d && d.root && d.root.type) return { name: `${l}.root`, error: d.root };
    s.pop();
  }
  return { name: r };
}
var D6 = (e, t, r) => {
  const i = Object.keys(e).filter((s) => s !== "name");
  return (
    !i.length ||
    (r && i.length >= Object.keys(t).length) ||
    i.find((s) => t[s] === (!r || rr.all))
  );
};
const z1 = (e, t, r) =>
  r ? e === t || e.startsWith(t + ".") : e.startsWith(t) || t.startsWith(e);
var k1 = (e, t, r) => {
    if (!e || !t || e === t) return !0;
    if (!Array.isArray(e)) return z1(e, t, r);
    for (const i of e) if (i && z1(i, t, r)) return !0;
    return !1;
  },
  M6 = (e, t, r, i, s) =>
    s.isOnAll
      ? !1
      : !r && s.isOnTouch
        ? !(t || e)
        : (r ? i.isOnBlur : s.isOnBlur)
          ? !e
          : (r ? i.isOnChange : s.isOnChange)
            ? e
            : !0,
  N6 = (e, t) => {
    const r = he(e, t);
    !P_(r).length && !(r && r.root) && Mt(e, t);
  };
const wc = {
    mode: rr.onSubmit,
    reValidateMode: rr.onChange,
    shouldFocusError: !0,
  },
  z6 = (e, t) => {
    for (const r in e) delete e[r];
    Object.assign(e, t);
  },
  I_ = {
    submitCount: 0,
    isDirty: !1,
    isReady: !1,
    isValidating: !1,
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    touchedFields: {},
    dirtyFields: {},
    validatingFields: {},
  };
function k6(e = {}) {
  let t = { ...wc, ...e },
    r = {
      ...rt(I_),
      isLoading: rn(t.defaultValues),
      errors: rt(t.errors) || {},
      disabled: t.disabled || !1,
    },
    i = {},
    s =
      St(t.defaultValues) || St(t.values)
        ? rt(t.defaultValues || t.values) || {}
        : {},
    l = t.shouldUnregister ? {} : rt(s),
    c = {
      action: !1,
      actionArrayLengths: new Map(),
      mount: !1,
      watch: !1,
      keepIsValid: !1,
    },
    d = !1,
    m = {
      mount: new Set(),
      disabled: new Set(),
      unMount: new Set(),
      array: new Set(),
      watch: new Set(),
      registerName: new Set(),
    };
  const h = {},
    y = {},
    g = new Set();
  let v = rc(t.mode),
    _ = rc(t.reValidateMode);
  const S = {
      isDirty: !1,
      dirtyFields: !1,
      validatingFields: !1,
      touchedFields: !1,
      isValidating: !1,
      isValid: !1,
      errors: !1,
    },
    E = { ...S },
    x = {},
    T = (...A) => A.some((F) => E[F] || x[F]),
    P = (A) => {
      for (const F of g) if (k1(F.name, A, F.exact)) return !0;
      return !1;
    },
    D = { array: A1(), state: A1() };
  let B = 0,
    k = 0,
    C = 0;
  const Y = {};
  let Q = t.criteriaMode === rr.all;
  const me = (A, F) => (H) => {
      (clearTimeout(y[A]), (y[A] = setTimeout(F, H)));
    },
    pe = (A) => {
      (clearTimeout(y[A]), delete y[A], delete h[A]);
    },
    we = (A) => {
      pe(A);
      const F = `${A}.`;
      for (const H of Object.keys(h)) H.startsWith(F) && pe(H);
    },
    be = async (A) => {
      if (!c.keepIsValid && !t.disabled && (T("isValid") || A)) {
        const F = ++B;
        let H;
        (t.resolver
          ? ((H = Nt((await Oe()).errors)), F === B && ce())
          : (H = await gt({
              fields: i,
              onlyCheckValid: !0,
              eventType: Ia.VALID,
            })),
          F === B && H !== r.isValid && D.state.next({ isValid: H }));
      }
    },
    Se = (A, F) => {
      const H = [...A];
      if (
        !H.some(
          (O) =>
            O &&
            (F ? he(r.validatingFields, O) !== !0 : Xh(r.validatingFields, O)),
        )
      )
        return;
      const te = rt(r.validatingFields);
      for (const O of H) O && (F ? et(te, O, !0) : Mt(te, O));
      tn(r.validatingFields, te) || (r.validatingFields = te);
    },
    ce = (A, F) => {
      !t.disabled &&
        T("isValidating", "validatingFields") &&
        (Se(A || m.mount, F),
        D.state.next({
          validatingFields: r.validatingFields,
          isValidating: !Nt(r.validatingFields),
        }));
    },
    ge = () => {
      r.dirtyFields = oa(s, l, void 0, i);
    },
    U = (A, F = [], H, te, O = !0, M = !0) => {
      if (te && H && !t.disabled) {
        ((c.action = !0), (c.keepIsValid = !1));
        const z = he(i, A),
          $ = z && z._f,
          I = $ ? Object.assign([], z) : z;
        if (
          (c.actionArrayLengths.has(A) ||
            c.actionArrayLengths.set(A, Array.isArray(I) ? I.length : 0),
          M && Array.isArray(I))
        ) {
          const xe = H(I, te.argA, te.argB) || I;
          $ ? et(i, A, { ...xe, _f: $ }) : O && et(i, A, xe);
        }
        const oe = he(r.errors, A);
        if (M && Array.isArray(oe)) {
          const xe = oe.root,
            _e = H(oe, te.argA, te.argB) || oe;
          (xe && (_e.root = xe),
            O && et(r.errors, A, _e),
            N6(r.errors, A),
            (r.errors = { ...r.errors }));
        }
        const de = he(r.touchedFields, A),
          ye = M && Array.isArray(de);
        if (ye) {
          const xe = H(de, te.argA, te.argB);
          O && et(r.touchedFields, A, xe);
        }
        const Ee = he(r.dirtyFields, A);
        if (M && Array.isArray(Ee)) {
          const xe = H(Ee, te.argA, te.argB) || Ee;
          O && et(r.dirtyFields, A, xe);
        }
        (T("dirtyFields") ? ge() : (d = !0),
          D.state.next({
            name: A,
            isDirty: ut(A, F),
            dirtyFields: r.dirtyFields,
            ...(ye && { touchedFields: r.touchedFields }),
            errors: r.errors,
            isValid: r.isValid,
          }));
      } else et(l, A, F);
    },
    ne = (A, F) => {
      (et(r.errors, A, F),
        (r.errors = { ...r.errors }),
        D.state.next({ errors: r.errors }));
    },
    q = (A) => {
      Object.keys(h).forEach(pe);
      const F = !Nt(A);
      ((r.errors = rt(A)),
        D.state.next({ errors: r.errors, ...(F ? { isValid: !1 } : {}) }),
        !F && c.mount && be());
    },
    ie = (A) => (Nl(A) ? [A] : Qo(A)),
    N = (A) => {
      const F = ie(A);
      let H = l,
        te = s;
      for (let O = 0; O < F.length - 1; O++) {
        const M = F[O];
        if (
          ((H = Ct(H) ? H : H[M]),
          (te = Ct(te) ? te : te[M]),
          H === null && te !== null)
        )
          return !0;
      }
      return !1;
    },
    W = (A) => {
      if (!c.actionArrayLengths.size) return !1;
      const F = ie(A);
      let H = l,
        te = "",
        O = -1,
        M = 0;
      for (let z = 0; z < F.length; z++) {
        if (Ct(H)) return !1;
        const $ = F[z];
        if (((te = te ? `${te}.${$}` : $), Array.isArray(H) && +$ >= H.length))
          return O === -1 ? !1 : z === O ? +$ < M : !0;
        if (
          (c.actionArrayLengths.has(te) &&
            ((O = z + 1), (M = c.actionArrayLengths.get(te))),
          (H = H[$]),
          Ye(H) && O !== -1 && z > O && +F[O] < M)
        )
          return !0;
      }
      return !1;
    },
    fe = (A) => {
      let F = l;
      for (const H of ie(A)) {
        if (Array.isArray(F) && +H >= F.length) return !0;
        F = F && F[H];
      }
      return !1;
    },
    le = (A, F, H, te) => {
      const O = he(i, A);
      if (O) {
        if (N(A) || W(A)) return;
        const M = Ye(he(l, A)),
          z = he(l, A, Ye(H) ? he(s, A) : H),
          $ = !!te && !r.isReady && E6(te);
        if (Ye(z) || (te && te.defaultChecked) || $ || F) {
          const I = F ? z : D1(O._f);
          (!Ye(I) || !fe(A)) &&
            (T("dirtyFields") && !tn(he(l, A), I) && (d = !0),
            et(l, A, I),
            $ && ve(A, I));
        } else dn(A, z);
        c.mount &&
          !c.action &&
          (t.resolver && T("isValidating", "validatingFields")
            ? Promise.resolve().then(() => be())
            : be(),
          M &&
            r.isDirty &&
            T("isDirty") &&
            (ut() || ((r.isDirty = !1), D.state.next({ ...r }))),
          t.shouldUnregister &&
            M &&
            !Ye(he(l, A)) &&
            Kh(A, m) &&
            (c.watch = !0));
      }
    },
    ve = (A, F, H, te, O) => {
      let M = !1,
        z = !1;
      const $ = { name: A };
      if (!t.disabled || te === !0) {
        if (!H || te) {
          const I = tn(he(s, A), F);
          if (
            (T("isDirty") &&
              ((z = r.isDirty),
              (r.isDirty = $.isDirty = !I || ut()),
              (M = z !== $.isDirty)),
            (z = !!he(r.dirtyFields, A)),
            I)
          )
            Mt(r.dirtyFields, A);
          else {
            const de = he(s, A),
              ye = he(i, A),
              Ee =
                !(ye && ye._f) && (St(de) || Array.isArray(de))
                  ? oa(de, F, void 0, ye)
                  : !0;
            et(r.dirtyFields, A, Ee);
          }
          let oe = !1;
          if (d || (I && (T("isDirty") ? r.isDirty : ut()))) {
            d = !1;
            const de = oa(s, l, void 0, i);
            tn(r.dirtyFields, de) || ((oe = !0), z6(r.dirtyFields, de));
          }
          (($.dirtyFields = r.dirtyFields),
            (M = M || (T("dirtyFields") && (oe || z !== !I))));
        }
        if (H) {
          const I = Xh(r.touchedFields, A) ? he(r.touchedFields, A) : void 0;
          I ||
            (et(r.touchedFields, A, H),
            ($.touchedFields = r.touchedFields),
            (M = M || (T("touchedFields") && I !== H)));
        }
        M && O && D.state.next($);
      }
      return M ? $ : {};
    },
    ke = (A, F, H, te) => {
      const O = he(r.errors, A),
        M = T("isValid") && On(F) && r.isValid !== F;
      if (
        (t.delayError && H
          ? ((h[A] = me(A, () => ne(A, H))), h[A](t.delayError))
          : (pe(A),
            H ? et(r.errors, A, H) : Mt(r.errors, A),
            (r.errors = { ...r.errors })),
        (H ? !tn(O, H, !0) : O) || !Nt(te) || M)
      ) {
        const z = {
          ...te,
          ...(M && On(F) ? { isValid: F } : {}),
          errors: r.errors,
          name: A,
        };
        D.state.next(z);
      }
    },
    Oe = async (A) => (
      ce(A, !0),
      await t.resolver(
        l,
        t.context,
        A6(A || m.mount, i, t.criteriaMode, t.shouldUseNativeValidation),
      )
    ),
    Ne = async (A) => {
      const F = k,
        H = C,
        te = A ? A.filter((M) => he(i, M)) : [],
        { errors: O } = await Oe(A);
      if (F !== k) return O;
      if ((ce(A), A)) {
        for (const M of A) {
          if (te.includes(M) && (!he(i, M) || Y[M] > H)) {
            Mt(O, M);
            continue;
          }
          const z = he(O, M);
          we(M);
          const $ =
              m.array.has(M) &&
              St(z) &&
              !Object.keys(z).some((de) => !Number.isNaN(Number(de))),
            I = he(i, M),
            oe = St(I) && Object.keys(I).some((de) => de !== "_f");
          $
            ? S1(r.errors, { [M]: z }, M)
            : (z && (z.type || z.message)) || Array.isArray(z) || (St(z) && oe)
              ? et(r.errors, M, z)
              : Mt(r.errors, M);
        }
        r.errors = { ...r.errors };
      } else (Object.keys(h).forEach(pe), (r.errors = O));
      return O;
    },
    qe = async ({ name: A, eventType: F }) => {
      if (t.validate) {
        const H = k,
          te = await t.validate({
            formValues: l,
            formState: r,
            name: A,
            eventType: F,
          });
        if (H !== k) return !0;
        if (St(te)) {
          let O = !0;
          Pr(rl);
          for (const M in te) {
            const z = te[M];
            z &&
              ((O = !1),
              $t(`${rl}.${M}`, {
                message: an(z.message) ? z.message : "",
                type: z.type || Qt.validate,
              }));
          }
          return O;
        } else
          return an(te) || !te
            ? ($t(rl, { message: te || "", type: Qt.validate }), !1)
            : (Pr(rl), !0);
      }
      return !0;
    },
    gt = async ({
      fields: A,
      onlyCheckValid: F,
      name: H,
      eventType: te,
      context: O = { valid: !0, runRootValidation: !1 },
    }) => {
      const M = k;
      if (
        t.validate &&
        !O.runRootValidation &&
        ((O.runRootValidation = !0),
        !(await qe({ name: H, eventType: te })) && ((O.valid = !1), F))
      )
        return O.valid;
      for (const z in A) {
        const $ = A[z];
        if ($) {
          const { _f: I, ...oe } = $;
          if (I) {
            const de = m.array.has(I.name),
              ye = $._f && C6($._f),
              Ee = T("isValidating", "validatingFields");
            ye && Ee && ce([I.name], !0);
            const xe = C,
              _e = await O1(
                $,
                m.disabled,
                l,
                Q,
                t.shouldUseNativeValidation && !F,
                de,
              );
            if (M !== k) return O.valid;
            if ((ye && Ee && ce([I.name]), !he(i, I.name) || Y[I.name] > xe))
              continue;
            if (
              (_e[I.name] && ((O.valid = !1), F)) ||
              (F ||
                (pe(I.name),
                he(_e, I.name)
                  ? de
                    ? S1(r.errors, _e, I.name)
                    : et(r.errors, I.name, _e[I.name])
                  : Mt(r.errors, I.name)),
              t.shouldUseNativeValidation && _e[I.name])
            )
              break;
          }
          !Nt(oe) &&
            (await gt({
              context: O,
              onlyCheckValid: F,
              fields: oe,
              name: z,
              eventType: te,
            }));
        }
      }
      return O.valid;
    },
    at = () => {
      for (const A of m.unMount) {
        const F = he(i, A);
        F &&
          (F._f.refs ? F._f.refs.every((H) => !Jh(H)) : !Jh(F._f.ref)) &&
          ii(A);
      }
      m.unMount = new Set();
    },
    ut = (A, F) => (A && !Ye(F) && et(l, A, F), !tn(c.mount ? l : s, s)),
    Xt = (A, F, H) => {
      const te = c.mount ? l : Ye(F) || !Ye(A) ? s : F;
      return Mm(A, m, Ye(A) ? { ...te } : te, H, F);
    },
    Hn = (A) =>
      P_(he(c.mount ? l : s, A, t.shouldUnregister ? he(s, A, []) : [])),
    dn = (A, F, H = {}, te = !1, O = !1, M = !1) => {
      const z = he(i, A);
      let $ = F;
      if (z) {
        const I = z._f;
        I &&
          (!I.disabled && et(l, A, km(F, I)),
          ($ = Lc(I.ref) && Ct(F) ? "" : F),
          Gp(I.ref)
            ? [...I.ref.options].forEach(
                (oe) => (oe.selected = $.includes(oe.value)),
              )
            : I.refs
              ? Ko(I.ref)
                ? I.refs.forEach((oe) => {
                    (!oe.defaultChecked || !oe.disabled) &&
                      (Array.isArray($)
                        ? (oe.checked = !!$.find((de) => de === oe.value))
                        : (oe.checked = $ === oe.value || !!$));
                  })
                : I.refs.forEach((oe) => (oe.checked = oe.value === $))
              : df(I.ref)
                ? (I.ref.value = "")
                : ((I.ref.value = $),
                  !I.ref.type &&
                    !O &&
                    !M &&
                    D.state.next({
                      name: A,
                      values: te ? l : P(A) ? rt(l) : void 0,
                    })));
      }
      ((H.shouldDirty || H.shouldTouch) &&
        ve(
          A,
          z &&
            z._f &&
            !z._f.disabled &&
            (z._f.valueAsNumber || z._f.valueAsDate || z._f.setValueAs)
            ? km(F, z._f)
            : $,
          H.shouldTouch,
          H.shouldDirty,
          !O,
        ),
        H.shouldValidate && In(A, { delayError: H.delayError }),
        H.shouldValidate &&
          z &&
          z._f &&
          z._f.deps &&
          (!Array.isArray(z._f.deps) || z._f.deps.length > 0) &&
          In(z._f.deps));
    },
    Vi = (A, F, H, te = !1, O = !1, M = !1) => {
      for (const z in F) {
        if (!Object.prototype.hasOwnProperty.call(F, z)) continue;
        const $ = F[z],
          I = A + "." + z,
          oe = he(i, I);
        (m.array.has(I) && D.array.next({ name: I, values: te ? l : rt(l) }),
          (m.array.has(A) || St($) || (oe && !oe._f)) && !Di($)
            ? Vi(I, $, H, te, O, M)
            : dn(I, $, H, te, O, M));
      }
    },
    $i = (A, F, H, te, O = !1) => {
      const M = he(i, A),
        z = m.array.has(A),
        $ = te ? F : rt(F),
        I = he(l, A),
        oe = tn(I, $);
      if ((oe || et(l, A, $), z))
        (D.array.next({ name: A, values: te ? l : rt(l) }),
          T("isDirty", "dirtyFields") &&
            H.shouldDirty &&
            (ge(),
            (r.isDirty = ut(A, $)),
            O ||
              D.state.next({
                name: A,
                dirtyFields: r.dirtyFields,
                isDirty: r.isDirty,
              })),
          H.shouldValidate && In(A, { delayError: H.delayError }));
      else {
        const de = (Array.isArray($) && !$.length) || Nt($),
          ye = !oe && !O;
        !M || M._f || Ct($) || de
          ? dn(A, $, H, te, O, ye)
          : Vi(A, $, H, te, O, ye);
      }
      if (!oe && !O) {
        const de = Kh(A, m),
          ye = c.mount || de ? A : void 0,
          Ee = z ? [] : O6(m.array, A),
          xe = te ? l : P(ye) || Ee.some(P) ? rt(l) : void 0;
        D.state.next({ ...(de && r), name: ye, values: xe });
        for (const _e of Ee) D.state.next({ name: _e, values: xe });
      }
    },
    Vt = (A, F, H = {}) => $i(A, F, H, !1),
    es = (A, F = {}) => {
      const H = rn(A) ? A(l) : A;
      if (!tn(l, H)) {
        l = { ...l, ...H };
        for (const te of new Set([...m.mount, ...m.array]))
          Xh(H, te) && $i(te, he(H, te), F, !0, !0);
        (D.state.next({
          ...r,
          name: void 0,
          type: void 0,
          ...(g.size ? { values: l } : {}),
        }),
          F.shouldValidate && be());
      }
    },
    ni = async (A) => {
      c.mount = !0;
      const F = A.target;
      let H = F.name,
        te = !0;
      const O = he(i, H),
        M = C,
        z = ($) => {
          te = !!he(i, H) && !(Y[H] > M) && tn($, he(l, H, $));
        };
      if (O) {
        c.keepIsValid = !1;
        let $,
          I,
          oe = !1;
        const de = F.type ? D1(O._f) : Tm(A),
          ye = A.type === Ia.BLUR || A.type === Ia.FOCUS_OUT,
          Ee =
            !T6(O._f) &&
            !t.validate &&
            !t.resolver &&
            !he(r.errors, H) &&
            !O._f.deps,
          xe = Ee || M6(ye, he(r.touchedFields, H), r.isSubmitted, _, v),
          _e = Kh(H, m, ye);
        (et(l, H, rt(de)),
          ye
            ? (!F || !F.readOnly) &&
              (O._f.onBlur && O._f.onBlur(A),
              Object.prototype.hasOwnProperty.call(h, H) &&
                ((oe = !0), h[H](0)))
            : O._f.onChange && O._f.onChange(A));
        const Ae = ve(H, de, ye),
          Fe = !Nt(Ae) || _e;
        if (
          (!ye &&
            D.state.next({
              name: H,
              type: A.type,
              ...(P(H) ? { values: rt(l) } : {}),
            }),
          xe)
        )
          return (
            (!Ee || !r.isValid) &&
              T("isValid") &&
              (t.mode === "onBlur" ? ye && be() : ye || be()),
            Fe && D.state.next({ name: H, ...(_e ? {} : Ae) })
          );
        if (
          (!t.resolver &&
            t.validate &&
            (await qe({ name: H, eventType: A.type })),
          !ye && _e && D.state.next({ ...r }),
          t.resolver)
        ) {
          const Je = k,
            { errors: it } = await Oe([H]);
          if (Je !== k) return;
          if ((ce([H]), z(de), !te)) {
            !Nt(Ae) && D.state.next(Ae);
            return;
          }
          const vt = N1(r.errors, i, H),
            Pe = N1(it, i, vt.name || H);
          (($ = Pe.error), (H = Pe.name), (I = Nt(it)));
        } else {
          const Je = k,
            it = ++B;
          if (
            (ce([H], !0),
            ($ = (await O1(O, m.disabled, l, Q, t.shouldUseNativeValidation))[
              H
            ]),
            Je !== k)
          )
            return;
          if ((ce([H]), z(de), te)) {
            if ($) I = !1;
            else if (T("isValid")) {
              if (
                ((I = await gt({
                  fields: i,
                  onlyCheckValid: !0,
                  name: H,
                  eventType: A.type,
                })),
                Je !== k)
              )
                return;
              (z(de), it !== B && (I = void 0));
            }
          }
        }
        te &&
          (O._f.deps &&
            (!Array.isArray(O._f.deps) || O._f.deps.length > 0) &&
            In(O._f.deps),
          ke(H, I, $, Ae),
          oe && Object.prototype.hasOwnProperty.call(h, H) && h[H](0));
      }
    },
    ri = (A, F) => {
      if (he(r.errors, F) && A.focus) return (A.focus(), 1);
    },
    In = async (A, F = {}) => {
      c.keepIsValid = !1;
      let H, te;
      const O = Qh(A),
        M = k;
      if (t.resolver) {
        const z = await Ne(Ye(A) ? A : O);
        ((H = Nt(z)), (te = A ? !O.some(($) => he(z, $)) : H));
      } else
        A
          ? ((te = (
              await Promise.all(
                O.map(async (z) => {
                  const $ = he(i, z);
                  return await gt({
                    fields: $ && $._f ? { [z]: $ } : $,
                    eventType: Ia.TRIGGER,
                  });
                }),
              )
            ).every(Boolean)),
            !(!te && !r.isValid) && be())
          : (te = H = await gt({ fields: i, name: A, eventType: Ia.TRIGGER }));
      if (M !== k) return te;
      if (F.delayError && t.delayError && an(A)) {
        const z = he(r.errors, A);
        z
          ? (Mt(r.errors, A),
            (h[A] = me(A, () => ne(A, z))),
            h[A](t.delayError))
          : pe(A);
      }
      if (F.shouldTouch)
        for (const z of A ? O : m.mount)
          !m.array.has(z) && et(r.touchedFields, z, !0);
      return (
        (r.errors = { ...r.errors }),
        D.state.next({
          ...(!an(A) || (T("isValid") && H !== r.isValid) ? {} : { name: A }),
          ...(t.resolver || !A ? { isValid: H } : {}),
          ...(F.shouldTouch && T("touchedFields")
            ? { touchedFields: r.touchedFields }
            : {}),
          errors: r.errors,
        }),
        F.shouldFocus && !te && ol(i, ri, A ? O : m.mount),
        te
      );
    },
    lr = (A, F) => {
      let H = Ye(A) && !F ? { ...(c.mount ? l : s) } : c.mount ? l : s;
      return (
        F && (H = F_(F.dirtyFields ? r.dirtyFields : r.touchedFields, H)),
        Ye(A) ? H : an(A) ? he(H, A) : A.map((te) => he(H, te))
      );
    },
    vr = (A) =>
      Ye(A)
        ? { ...r.errors }
        : an(A)
          ? he(r.errors, A)
          : A.map((F) => he(r.errors, F)),
    ai = (A, F) => {
      const H = F || r,
        te = he(H.errors, A);
      return {
        invalid: !!te,
        isDirty: !!he(H.dirtyFields, A),
        error: te,
        isValidating: !!he(H.validatingFields, A),
        isTouched: !!he(H.touchedFields, A),
      };
    },
    Pr = (A) => {
      const F = A ? Qh(A) : void 0;
      F
        ? F.forEach((H) => {
            (we(H),
              Mt(r.errors, H),
              (r.errors = { ...r.errors }),
              D.state.next({ name: H, errors: r.errors }));
          })
        : (Object.keys(h).forEach(pe),
          (r.errors = {}),
          D.state.next({ errors: r.errors }));
    },
    $t = (A, F, H) => {
      we(A);
      const te = he(i, A, { _f: {} }),
        O = te._f && te._f.ref,
        M = he(r.errors, A) || {},
        { ref: z, message: $, type: I, types: oe, ...de } = M;
      (et(r.errors, A, { ...de, ...F, ref: O }),
        (r.errors = { ...r.errors }),
        D.state.next({ name: A, errors: r.errors, isValid: !1 }),
        H && H.shouldFocus && O && O.focus && O.focus());
    },
    yt = (A, F) => {
      if (rn(A)) {
        const H = {};
        g.add(H);
        const { unsubscribe: te } = D.state.subscribe({
          next: (O) => "values" in O && A(O.values || Xt(void 0, F), O),
        });
        return {
          unsubscribe: () => {
            (g.delete(H), te());
          },
        };
      }
      return Xt(A, F, !0);
    },
    vn = (A) => {
      const F = { name: A.name, exact: A.exact };
      A.formState && A.formState.values && g.add(F);
      const { unsubscribe: H } = D.state.subscribe({
        next: (te) => {
          if (
            k1(A.name, te.name, A.exact) &&
            D6(te, A.formState || E, A.reRenderRoot)
          ) {
            const O = te.values || { ...l };
            A.callback({
              ...r,
              ...te,
              validatingFields: r.validatingFields,
              isValidating: r.isValidating,
              values: O,
              defaultValues: s,
            });
          }
        },
      });
      return () => {
        (g.delete(F), H());
      };
    },
    Ht = (A) => {
      c.mount = !0;
      const F = Object.keys(A.formState || {}).filter(
        (te) => A.formState && A.formState[te],
      );
      for (const te of F) x[te] = (x[te] || 0) + 1;
      const H = vn({ ...A, formState: { ...S, ...A.formState } });
      return () => {
        for (const te of F.splice(0)) x[te]--;
        H();
      };
    },
    ii = (A, F = {}) => {
      const H = A ? Qh(A) : m.mount;
      F.keepIsValidating || Se(H);
      for (const te of H)
        (m.mount.delete(te),
          m.array.delete(te),
          m.disabled.delete(te),
          Mt(i, te),
          !F.keepValue && Mt(l, te),
          F.keepError || (we(te), Mt(r.errors, te)),
          !F.keepDirty && Mt(r.dirtyFields, te),
          !F.keepTouched && Mt(r.touchedFields, te),
          !t.shouldUnregister && !F.keepDefaultValue && Mt(s, te));
      (F.keepError || (r.errors = { ...r.errors }),
        g.size && D.state.next({ values: rt(l) }),
        D.state.next({
          ...r,
          ...(F.keepDirty ? {} : { isDirty: ut() }),
          ...(F.keepIsValidating
            ? {}
            : { isValidating: !Nt(r.validatingFields) }),
        }),
        !F.keepIsValid && be());
    },
    Tn = ({ disabled: A, name: F }) => {
      if ((On(A) && c.mount) || A || m.disabled.has(F)) {
        const O = m.disabled.has(F) !== !!A;
        (A ? m.disabled.add(F) : m.disabled.delete(F),
          O && c.mount && !c.action && be());
      }
    },
    ha = (A, F = {}) => {
      let H = he(i, A);
      const te = On(F.disabled) || On(t.disabled),
        O = !m.registerName.has(A) && H && H._f && !H._f.mount;
      if (
        ((!H || !H._f) && (Y[A] = ++C),
        et(i, A, {
          ...(H || {}),
          _f: {
            ...(H && H._f ? H._f : { ref: { name: A } }),
            name: A,
            mount: !0,
            ...F,
          },
        }),
        m.mount.add(A),
        H && H._f)
      ) {
        const M = he(i, A);
        for (const z of h6) z in F || delete M._f[z];
      }
      return (
        H && !O
          ? Tn({ disabled: On(F.disabled) ? F.disabled : t.disabled, name: A })
          : le(A, !0, F.value),
        {
          ...(te ? { disabled: F.disabled || t.disabled } : {}),
          ...(t.progressive
            ? {
                required: !!Do(F.required),
                min: Do(F.min),
                max: Do(F.max),
                minLength: Do(F.minLength),
                maxLength: Do(F.maxLength),
                pattern: Do(F.pattern),
              }
            : {}),
          name: A,
          onChange: ni,
          onBlur: ni,
          ref: (M) => {
            if (M) {
              (m.registerName.add(A),
                ha(A, F),
                m.registerName.delete(A),
                (H = he(i, A)));
              const z =
                  (Ye(M.value) &&
                    M.querySelectorAll &&
                    M.querySelectorAll("input,select,textarea")[0]) ||
                  M,
                $ = x6(z),
                I = H._f.refs || [];
              if ($ ? I.find((de) => de === z) : z === H._f.ref) return;
              const oe = { ...H._f };
              ($
                ? ((oe.refs = [
                    ...I.filter(Jh),
                    z,
                    ...(Array.isArray(he(s, A)) ? [{}] : []),
                  ]),
                  (oe.ref = { type: z.type, name: A }))
                : ((oe.ref = z), delete oe.refs),
                et(i, A, { _f: oe }),
                le(A, !1, void 0, z));
            } else
              ((H = he(i, A, {})),
                H._f && (H._f.mount = !1),
                (t.shouldUnregister || F.shouldUnregister) &&
                  !(z_(m.array, A) && c.action) &&
                  m.unMount.add(A));
          },
        }
      );
    },
    ur = () =>
      t.shouldFocusError && !t.shouldUseNativeValidation && ol(i, ri, m.mount),
    Fr = (A) => {
      On(A) &&
        (D.state.next({ disabled: A }),
        ol(
          i,
          (F, H) => {
            const te = he(i, H);
            te &&
              ((F.disabled = te._f.disabled || A),
              Array.isArray(te._f.refs) &&
                te._f.refs.forEach((O) => {
                  O.disabled = te._f.disabled || A;
                }));
          },
          0,
        ));
    },
    Zn = (A, F) => async (H) => {
      let te, O;
      H && (H.preventDefault && H.preventDefault(), H.persist && H.persist());
      let M = rt(l);
      D.state.next({ isSubmitting: !0 });
      const z = k,
        $ = (I) => {
          throw (z === k && D.state.next({ isSubmitting: !1 }), I);
        };
      if (t.resolver) {
        let I;
        try {
          I = await Oe();
        } catch (ye) {
          $(ye);
        }
        const { errors: oe, values: de } = I;
        if (z !== k) return;
        (ce(), Object.keys(h).forEach(pe), (r.errors = oe), (M = rt(de)));
      } else {
        try {
          await gt({ fields: i, eventType: Ia.SUBMIT });
        } catch (I) {
          $(I);
        }
        if (z !== k) return;
        (Mt(r.errors, k_), (r.errors = { ...r.errors }));
      }
      if (m.disabled.size) for (const I of m.disabled) Mt(M, I);
      if (Nt(r.errors)) {
        D.state.next({ errors: {} });
        try {
          te = await A(M, H);
        } catch (I) {
          O = I;
        }
      } else {
        if (F)
          try {
            await F({ ...r.errors }, H);
          } catch (I) {
            $(I);
          }
        (ur(), setTimeout(ur));
      }
      if (
        (D.state.next({
          isSubmitted: !0,
          isSubmitting: !1,
          isSubmitSuccessful: Nt(r.errors) && !O,
          submitCount: r.submitCount + 1,
          errors: r.errors,
        }),
        O)
      )
        throw O;
      return te;
    },
    Br = (A, F = {}) => {
      he(i, A) &&
        (Se([A]),
        Ye(F.defaultValue)
          ? Vt(A, rt(he(s, A)))
          : (Vt(A, F.defaultValue), et(s, A, rt(F.defaultValue))),
        F.keepTouched || Mt(r.touchedFields, A),
        F.keepDirty ||
          (Mt(r.dirtyFields, A),
          (r.isDirty = Ye(F.defaultValue) ? ut() : ut(A, rt(he(s, A))))),
        F.keepError ||
          (we(A), Mt(r.errors, A), (r.errors = { ...r.errors }), be()),
        D.state.next({ ...r, isValidating: !Nt(r.validatingFields) }));
    },
    Dn = (A, F = {}) => {
      (k++, B++);
      const H = A ? rt(A) : s,
        te = rt(H),
        O = Nt(A),
        M = te,
        z = i;
      if (
        (Object.keys(h).forEach(pe),
        F.keepDefaultValues || (s = H),
        !F.keepValues)
      ) {
        if (F.keepDirtyValues) {
          const $ = new Set([
            ...m.mount,
            ...B_(oa(s, l, void 0, z), r.dirtyFields),
          ]);
          for (const I of $) {
            const oe = he(r.dirtyFields, I),
              de = he(l, I),
              ye = he(M, I);
            oe && !Ye(de) ? et(M, I, de) : !oe && !Ye(ye) && Vt(I, ye);
          }
        } else {
          if (hf && Ye(A))
            for (const $ of m.mount) {
              const I = he(i, $);
              if (I && I._f) {
                const oe = Array.isArray(I._f.refs) ? I._f.refs[0] : I._f.ref;
                if (Lc(oe)) {
                  const de = oe.closest("form");
                  if (de) {
                    de.reset();
                    break;
                  }
                }
              }
            }
          if (F.keepFieldsRef) for (const $ of m.mount) Vt($, he(M, $));
          else i = {};
        }
        if (t.shouldUnregister) {
          if (((l = F.keepDefaultValues ? rt(s) : {}), F.keepFieldsRef))
            for (const $ of m.mount) et(l, $, he(M, $));
        } else l = rt(M);
        (D.array.next({ values: { ...M } }),
          D.state.next({ name: void 0, type: void 0, values: { ...M } }));
      }
      ((m = {
        mount: F.keepDirtyValues ? m.mount : new Set(),
        unMount: new Set(),
        array: new Set(),
        registerName: new Set(),
        disabled:
          F.keepValues || F.keepDirtyValues || F.keepFieldsRef
            ? new Set([...m.disabled].filter(($) => he(i, $)))
            : new Set(),
        watch: new Set(),
        watchAll: !1,
        focus: "",
      }),
        (c.mount =
          !E.isValid ||
          !!F.keepIsValid ||
          !!F.keepDirtyValues ||
          (!t.shouldUnregister && !Nt(M))),
        (c.watch = !!t.shouldUnregister),
        (c.keepIsValid = !!F.keepIsValid),
        (c.action = !1),
        c.actionArrayLengths.clear(),
        (d = !1),
        F.keepErrors || (r.errors = {}),
        D.state.next({
          submitCount: F.keepSubmitCount ? r.submitCount : 0,
          isDirty: O
            ? !1
            : F.keepDirty
              ? r.isDirty
              : F.keepValues
                ? ut()
                : !!(F.keepDefaultValues && A && !tn(A, s)),
          isSubmitted: F.keepIsSubmitted ? r.isSubmitted : !1,
          dirtyFields: O
            ? {}
            : F.keepDirtyValues
              ? F.keepDefaultValues && l
                ? oa(s, l, void 0, z)
                : r.dirtyFields
              : F.keepDefaultValues && A
                ? oa(s, A, void 0, z)
                : F.keepDirty
                  ? r.dirtyFields
                  : F.keepValues
                    ? oa(s, l, void 0, z)
                    : {},
          touchedFields: F.keepTouched ? r.touchedFields : {},
          ...(!F.keepIsValidating && (r.isValidating || !Nt(r.validatingFields))
            ? { validatingFields: {}, isValidating: !1 }
            : null),
          errors: F.keepErrors ? r.errors : {},
          isSubmitSuccessful: F.keepIsSubmitSuccessful
            ? r.isSubmitSuccessful
            : !1,
          isSubmitting: !1,
          defaultValues: s,
        }));
    },
    oi = (A, F) => Dn(rn(A) ? A(l) : A, { ...t.resetOptions, ...F }),
    ma = (A, F = {}) => {
      const H = he(i, A),
        te = H && H._f;
      if (te) {
        const O = te.refs ? te.refs[0] : te.ref;
        O.focus &&
          setTimeout(() => {
            (O.focus(), F.shouldSelect && rn(O.select) && O.select());
          });
      }
    },
    Hi = (A) => {
      const { name: F, type: H, values: te, ...O } = A;
      Object.keys(O).length && (r = { ...r, ...O });
    };
  D.state.subscribe({ next: Hi });
  const li = {
    control: {
      register: ha,
      unregister: ii,
      getFieldState: ai,
      handleSubmit: Zn,
      setError: $t,
      _subscribe: vn,
      _runSchema: Oe,
      _updateIsValidating: ce,
      _focusError: ur,
      _getWatch: Xt,
      _getDirty: ut,
      _setValid: be,
      _setFieldArray: U,
      _setDisabledField: Tn,
      _setErrors: q,
      _getFieldArray: Hn,
      _reset: Dn,
      _resetDefaultValues: () =>
        rn(t.defaultValues) &&
        t.defaultValues().then((A) => {
          (oi(A, t.resetOptions), D.state.next({ isLoading: !1 }));
        }),
      _removeUnmounted: at,
      _disableForm: Fr,
      _subjects: D,
      _proxyFormState: E,
      get _fields() {
        return i;
      },
      get _formValues() {
        return l;
      },
      get _state() {
        return c;
      },
      set _state(A) {
        c = A;
      },
      get _defaultValues() {
        return s;
      },
      get _names() {
        return m;
      },
      set _names(A) {
        m = A;
      },
      get _formState() {
        return r;
      },
      get _options() {
        return t;
      },
      set _options(A) {
        ((t = { ...t, ...A }),
          (v = rc(t.mode)),
          (_ = rc(t.reValidateMode)),
          (Q = t.criteriaMode === rr.all));
      },
    },
    subscribe: Ht,
    trigger: In,
    register: ha,
    handleSubmit: Zn,
    watch: yt,
    setValue: Vt,
    setValues: es,
    getValues: lr,
    getErrors: vr,
    reset: oi,
    resetField: Br,
    resetDefaultValues: (A, F = {}) => {
      if (((s = rt(A)), !F.keepDirty)) {
        const H = oa(s, l, void 0, i);
        ((r.dirtyFields = H), (r.isDirty = !Nt(H)));
      }
      (F.keepIsValid || be(), D.state.next({ ...r, defaultValues: s }));
    },
    clearErrors: Pr,
    unregister: ii,
    setError: $t,
    setFocus: ma,
    getFieldState: ai,
  };
  return { ...li, formControl: li };
}
const j1 = {
  mode: wc.mode,
  reValidateMode: wc.reValidateMode,
  shouldFocusError: wc.shouldFocusError,
  resolver: void 0,
  criteriaMode: void 0,
  delayError: void 0,
  shouldUnregister: void 0,
  shouldUseNativeValidation: void 0,
  context: void 0,
  progressive: void 0,
  resetOptions: void 0,
};
function j6(e = {}) {
  const t = Re.useRef(void 0),
    r = Re.useRef(void 0),
    i = Re.useRef(e.formControl),
    s = Re.useRef(!1),
    l = Re.useRef(!!e.validate),
    c = Re.useRef(!!e.errors),
    d = Re.useRef(!1),
    [m, h] = Re.useState(() => ({
      ...rt(I_),
      isLoading: rn(e.defaultValues),
      errors: e.errors || {},
      disabled: e.disabled || !1,
      defaultValues: rn(e.defaultValues) ? void 0 : e.defaultValues,
    }));
  if (!t.current || (e.formControl && i.current !== e.formControl))
    if (((i.current = e.formControl), (s.current = !1), e.formControl))
      ((t.current = { ...e.formControl, formState: m }),
        e.defaultValues &&
          !rn(e.defaultValues) &&
          e.formControl.reset(e.defaultValues, e.resetOptions));
    else {
      const { formControl: x, ...T } = k6(e);
      t.current = { ...T, formState: m };
    }
  const y = t.current.control,
    g = y._options,
    v = {};
  for (const x in j1) x in g && !(x in e) && (v[x] = j1[x]);
  (s.current && !e.disabled && (v.disabled = !1),
    (y._options = { ...v, ...e, validate: e.validate }));
  const _ = () => ({ ...y._formState, defaultValues: y._defaultValues }),
    { resyncIfNeeded: S, snapshot: E } = Zp(_);
  return (
    Ip(() => {
      S(!0, _, h);
      const x = y._subscribe({
        formState: y._proxyFormState,
        callback: () => h({ ...y._formState, defaultValues: y._defaultValues }),
        reRenderRoot: !0,
      });
      return (
        h((T) => ({ ...T, isReady: !0 })),
        (y._formState.isReady = !0),
        y._subjects.state.next({ isReady: !0 }),
        () => {
          (x(), E(!0, _));
        }
      );
    }, [y, S, E]),
    Re.useEffect(() => {
      (y._disableForm(s.current && !e.disabled ? !1 : e.disabled),
        (s.current = !!e.disabled));
    }, [y, e.disabled]),
    Re.useEffect(() => {
      (e.mode && (y._options.mode = e.mode),
        e.reValidateMode && (y._options.reValidateMode = e.reValidateMode));
    }, [y, e.mode, e.reValidateMode]),
    Re.useEffect(() => {
      (e.errors
        ? (y._setErrors(e.errors), y._focusError())
        : c.current && y._setErrors({}),
        (c.current = !!e.errors));
    }, [y, e.errors]),
    Re.useEffect(() => {
      (l.current && !e.validate && t.current && t.current.clearErrors(rl),
        (l.current = !!e.validate));
    }, [e.validate]),
    Re.useEffect(() => {
      e.shouldUnregister && y._subjects.state.next({ values: y._getWatch() });
    }, [y, e.shouldUnregister]),
    Re.useEffect(() => {
      if (y._proxyFormState.isDirty) {
        const x = y._getDirty();
        x !== m.isDirty && y._subjects.state.next({ isDirty: x });
      }
    }, [y, m.isDirty]),
    Re.useEffect(() => {
      e.values && !tn(e.values, r.current)
        ? (y._reset(e.values, {
            keepFieldsRef: !0,
            ...y._options.resetOptions,
          }),
          (y._options.resetOptions && y._options.resetOptions.keepIsValid) ||
            y._setValid(),
          (r.current = e.values),
          h((x) => ({ ...x })))
        : y._resetDefaultValues();
    }, [y, e.values]),
    Re.useEffect(() => {
      ((!y._state.mount || (!d.current && !e.values)) &&
        (y._setValid(), (y._state.mount = !0)),
        (d.current = !0),
        y._state.watch &&
          ((y._state.watch = !1), y._subjects.state.next({ ...y._formState })),
        y._removeUnmounted());
    }),
    (t.current.formState = Re.useMemo(() => j_(m, y), [y, m])),
    t.current
  );
}
const Yp = Re.createContext(null);
Yp.displayName = "HookFormContext";
const vL = () => Re.useContext(Yp),
  bL = ({
    children: e,
    watch: t,
    getValues: r,
    getErrors: i,
    getFieldState: s,
    setError: l,
    clearErrors: c,
    setValue: d,
    setValues: m,
    trigger: h,
    formState: y,
    resetField: g,
    reset: v,
    resetDefaultValues: _,
    handleSubmit: S,
    unregister: E,
    control: x,
    register: T,
    setFocus: P,
    subscribe: D,
  }) => {
    const B = Re.useMemo(
      () => ({
        watch: t,
        getValues: r,
        getErrors: i,
        getFieldState: s,
        setError: l,
        clearErrors: c,
        setValue: d,
        setValues: m,
        trigger: h,
        formState: y,
        resetField: g,
        reset: v,
        resetDefaultValues: _,
        handleSubmit: S,
        unregister: E,
        control: x,
        register: T,
        setFocus: P,
        subscribe: D,
      }),
      [c, x, y, i, s, r, S, T, v, _, g, l, P, d, m, D, h, E, t],
    );
    return Re.createElement(
      Yp.Provider,
      { value: B },
      Re.createElement($p.Provider, { value: B.control }, e),
    );
  },
  L1 = (e, t, r) => {
    if (e && "reportValidity" in e) {
      const i = he(r, t);
      (e.setCustomValidity((i && i.message) || ""), e.reportValidity());
    }
  },
  jm = (e, t) => {
    for (const r in t.fields) {
      const i = t.fields[r];
      i && i.ref && "reportValidity" in i.ref
        ? L1(i.ref, r, e)
        : i && i.refs && i.refs.forEach((s) => L1(s, r, e));
    }
  },
  U1 = (e, t) => {
    t.shouldUseNativeValidation && jm(e, t);
    const r = {};
    for (const i in e) {
      const s = he(t.fields, i),
        l = Object.assign(e[i] || {}, {
          ref: s && s.refs ? s.refs[0] : s && s.ref,
        });
      if (L6(t.names || Object.keys(e), i)) {
        const c = Object.assign({}, he(r, i));
        (et(c, "root", l), et(r, i, c));
      } else et(r, i, l);
    }
    return r;
  },
  L6 = (e, t) => {
    const r = P1(t).replace(/[.*+?^${}()|\\]/g, "\\$&");
    return e.some((i) => P1(i).match(`^${r}\\.\\d+`));
  };
function P1(e) {
  return e.replace(/\[(\d+)]/g, ".$1").replace(/[[\]]/g, "");
}
function Lm() {
  return (
    (Lm = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var i in r) ({}).hasOwnProperty.call(r, i) && (e[i] = r[i]);
          }
          return e;
        }),
    Lm.apply(null, arguments)
  );
}
function F1(e, t) {
  try {
    var r = e();
  } catch (i) {
    return t(i);
  }
  return r && r.then ? r.then(void 0, t) : r;
}
function U6(e, t) {
  for (var r = Object.create(null); e.length; ) {
    var i = e[0],
      s = i.code,
      l = i.message,
      c = i.path.join(".");
    if (!r[c])
      if ("unionErrors" in i) {
        var d,
          m,
          h = i.unionErrors.reduce(function (v, _) {
            return _.errors.length < v.errors.length ? _ : v;
          }).errors[0];
        r[c] = {
          message: (d = h?.message) != null ? d : l,
          type: (m = h?.code) != null ? m : s,
        };
      } else r[c] = { message: l, type: s };
    if (
      ("unionErrors" in i &&
        i.unionErrors.forEach(function (v) {
          return v.errors.forEach(function (_) {
            return e.push(_);
          });
        }),
      t)
    ) {
      var y = r[c].types,
        g = y && y[i.code];
      r[c] = qp(c, t, r, s, g ? [].concat(g, i.message) : i.message);
    }
    e.shift();
  }
  return r;
}
function P6(e, t) {
  for (
    var r = Object.create(null),
      i = function () {
        var s = e[0],
          l = s.code,
          c = s.message,
          d = s.path.join(".");
        if (!r[d])
          if (s.code === "invalid_union" && s.errors.length > 0) {
            var m,
              h,
              y = s.errors.reduce(function (_, S) {
                return S.length < _.length ? S : _;
              })[0];
            r[d] = {
              message: (m = y?.message) != null ? m : c,
              type: (h = y?.code) != null ? h : l,
            };
          } else r[d] = { message: c, type: l };
        if (
          (s.code === "invalid_union" &&
            s.errors.forEach(function (_) {
              return _.forEach(function (S) {
                return e.push(Lm({}, S, { path: [].concat(s.path, S.path) }));
              });
            }),
          t)
        ) {
          var g = r[d].types,
            v = g && g[s.code];
          r[d] = qp(d, t, r, l, v ? [].concat(v, s.message) : s.message);
        }
        e.shift();
      };
    e.length;

  )
    i();
  return r;
}
function F6(e, t, r) {
  if (
    (r === void 0 && (r = {}),
    (function (i) {
      return "_zod" in i && typeof i._zod == "object";
    })(e))
  )
    return function (i, s, l) {
      try {
        return Promise.resolve(
          F1(
            function () {
              function c(m) {
                return (
                  l.shouldUseNativeValidation && jm({}, l),
                  { errors: {}, values: r.raw ? Object.assign({}, i) : m }
                );
              }
              var d = e;
              return r.mode === "sync"
                ? c(d.parse(i, t))
                : Promise.resolve(d.parseAsync(i, t)).then(c);
            },
            function (c) {
              if (
                (function (d) {
                  var m;
                  return !(
                    d == null ||
                    (m = d._zod) == null ||
                    (m = m.traits) == null ||
                    !m.has("$ZodError")
                  );
                })(c)
              )
                return {
                  values: {},
                  errors: U1(
                    P6(
                      c.issues,
                      !l.shouldUseNativeValidation && l.criteriaMode === "all",
                    ),
                    l,
                  ),
                };
              throw c;
            },
          ),
        );
      } catch (c) {
        return Promise.reject(c);
      }
    };
  if (
    (function (i) {
      return "_def" in i && typeof i._def == "object";
    })(e)
  )
    return function (i, s, l) {
      try {
        return Promise.resolve(
          F1(
            function () {
              return Promise.resolve(
                e[r.mode === "sync" ? "parse" : "parseAsync"](i, t),
              ).then(function (c) {
                return (
                  l.shouldUseNativeValidation && jm({}, l),
                  { errors: {}, values: r.raw ? Object.assign({}, i) : c }
                );
              });
            },
            function (c) {
              if (
                (function (d) {
                  return Array.isArray(d?.issues);
                })(c)
              )
                return {
                  values: {},
                  errors: U1(
                    U6(
                      c.errors,
                      !l.shouldUseNativeValidation && l.criteriaMode === "all",
                    ),
                    l,
                  ),
                };
              throw c;
            },
          ),
        );
      } catch (c) {
        return Promise.reject(c);
      }
    };
  throw new Error("Invalid input: not a Zod schema");
}
function Um(e) {
  const t = Object.values(e).filter((i) => typeof i == "number");
  return Object.entries(e)
    .filter(([i, s]) => t.indexOf(+i) === -1)
    .map(([i, s]) => s);
}
function B1(e, t = "|") {
  return e.map((r) => Q_(r)).join(t);
}
function Pm(e, t) {
  return typeof t == "bigint" ? t.toString() : t;
}
class B6 {
  constructor(t) {
    ((this._getter = t), (this._value = void 0));
  }
  get value() {
    const t = this._getter;
    return (
      t !== void 0 && ((this._value = t()), (this._getter = void 0)),
      this._value
    );
  }
}
function Kp(e) {
  return new B6(e);
}
function V6(e) {
  return e == null;
}
function Qp(e) {
  const t = e.startsWith("^") ? 1 : 0,
    r = e.endsWith("$") ? e.length - 1 : e.length;
  return e.slice(t, r);
}
function $6(e, t) {
  const r = e / t,
    i = Math.round(r),
    s = 4 * Number.EPSILON * Math.max(Math.abs(r), 1);
  return Math.abs(r - i) < s ? 0 : r - i;
}
function Bi(e, t, r) {
  Object.defineProperty(e, t, {
    value: r,
    writable: !0,
    enumerable: !0,
    configurable: !0,
  });
}
function Z_(e) {
  const t = Object.getOwnPropertyDescriptor(e, "shape");
  return t?.get ? t.get.raw : t?.value;
}
function da(e) {
  return Z_(e._zod.def) ?? e._zod.def.shape;
}
function q_(e, t, r) {
  Object.defineProperty(e, t, {
    get() {
      const i = r();
      return (Bi(this, t, i), i);
    },
    enumerable: !0,
    configurable: !0,
  });
}
function G_(e, t, r) {
  t in e ? Bi(e, t, r) : (e[t] = r);
}
function Li(e, t, r, i) {
  const s = da(t);
  for (const l of r) {
    const c = Object.getOwnPropertyDescriptor(s, l);
    c.enumerable &&
      (c.get
        ? q_(e, l, () => {
            const d = t._zod.def.shape[l];
            return i ? i(d, l) : d;
          })
        : G_(e, l, i ? i(c.value, l) : c.value));
  }
}
function H6(e, t) {
  for (const r of Reflect.ownKeys(t)) {
    const i = Object.getOwnPropertyDescriptor(t, r);
    i.enumerable && (i.get ? q_(e, r, () => t[r]) : G_(e, r, i.value));
  }
}
function Vn(...e) {
  const t = {};
  for (const r of e) {
    const i = Object.getOwnPropertyDescriptors(r);
    Object.assign(t, i);
  }
  return Object.defineProperties({}, t);
}
function I6(e) {
  return JSON.stringify(e);
}
function Z6(e) {
  return e
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
const Y_ =
  "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {};
function Pc(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
const q6 = Kp(() => {
  if (
    zr.jitless ||
    (typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare"))
  )
    return !1;
  try {
    const e = Function;
    return (new e(""), !0);
  } catch {
    return !1;
  }
});
function vl(e) {
  if (Pc(e) === !1) return !1;
  const t = e.constructor;
  if (t === void 0 || typeof t != "function") return !0;
  const r = t.prototype;
  return !(
    Pc(r) === !1 ||
    Object.prototype.hasOwnProperty.call(r, "isPrototypeOf") === !1
  );
}
function K_(e) {
  return vl(e)
    ? { ...e }
    : Array.isArray(e)
      ? [...e]
      : e instanceof Map
        ? new Map(e)
        : e instanceof Set
          ? new Set(e)
          : e;
}
const G6 = new Set(["string", "number", "symbol"]);
function pf(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function ei(e, t, r) {
  const i = new e._zod.constr(t ?? e._zod.def);
  return ((!t || r?.parent) && (i._zod.parent = e), i);
}
function ze(e) {
  const t = e;
  if (!t) return {};
  if (typeof t == "string") return { error: () => t };
  if (t?.message !== void 0) {
    if (t?.error !== void 0)
      throw new Error("Cannot specify both `message` and `error` params");
    t.error = t.message;
  }
  return (
    delete t.message,
    typeof t.error == "string" ? { ...t, error: () => t.error } : t
  );
}
function Q_(e) {
  return typeof e == "bigint"
    ? e.toString() + "n"
    : typeof e == "string"
      ? `"${e}"`
      : `${e}`;
}
function Y6(e) {
  return Object.keys(e).filter(
    (t) => e[t]._zod.optin !== void 0 && e[t]._zod.optout === "optional",
  );
}
const X_ = {
    safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
    int32: [-2147483648, 2147483647],
    uint32: [0, 4294967295],
    float32: [-34028234663852886e22, 34028234663852886e22],
    float64: [-Number.MAX_VALUE, Number.MAX_VALUE],
  },
  K6 = {
    int64: [BigInt("-9223372036854775808"), BigInt("9223372036854775807")],
    uint64: [BigInt(0), BigInt("18446744073709551615")],
  };
function Q6(e, t) {
  const r = e._zod.def,
    i = r.checks;
  if (i && i.length > 0)
    throw new Error(
      ".pick() cannot be used on object schemas containing refinements",
    );
  const l = {};
  return (Li(l, e, yf(e, t)), ei(e, Vn(r, { shape: l, checks: [] })));
}
function yf(e, t) {
  const r = da(e),
    i = [];
  for (const s of Reflect.ownKeys(t)) {
    if (!Object.getOwnPropertyDescriptor(r, s)?.enumerable)
      throw new Error(`Unrecognized key: "${String(s)}"`);
    t[s] && i.push(s);
  }
  return i;
}
function X6(e, t) {
  const r = e._zod.def,
    i = r.checks;
  if (i && i.length > 0)
    throw new Error(
      ".omit() cannot be used on object schemas containing refinements",
    );
  const l = new Set(yf(e, t)),
    c = {};
  return (
    Li(
      c,
      e,
      Reflect.ownKeys(da(e)).filter((d) => !l.has(d)),
    ),
    ei(e, Vn(r, { shape: c, checks: [] }))
  );
}
function J6(e, t) {
  if (!vl(t))
    throw new Error("Invalid input to extend: expected a plain object");
  const r = e._zod.def.checks;
  if (r && r.length > 0) {
    const s = da(e);
    for (const l of Reflect.ownKeys(t))
      if (Object.getOwnPropertyDescriptor(s, l) !== void 0)
        throw new Error(
          "Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.",
        );
  }
  return ei(e, Vn(e._zod.def, { shape: J_(e, t) }));
}
function J_(e, t) {
  const r = {};
  return (Li(r, e, Reflect.ownKeys(da(e))), H6(r, t), r);
}
function W6(e, t) {
  if (!vl(t))
    throw new Error("Invalid input to safeExtend: expected a plain object");
  return ei(e, Vn(e._zod.def, { shape: J_(e, t) }));
}
function ek(e, t) {
  if (!t?._zod?.def)
    throw new Error(
      "Invalid input to merge: expected an object schema. To merge a plain shape, use `.extend()`.",
    );
  if (e._zod.def.checks?.length)
    throw new Error(
      ".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.",
    );
  const r = {};
  (Li(r, e, Reflect.ownKeys(da(e))), Li(r, t, Reflect.ownKeys(da(t))));
  const i = Vn(e._zod.def, {
    shape: r,
    get catchall() {
      return t._zod.def.catchall;
    },
    checks: t._zod.def.checks ?? [],
  });
  return ei(e, i);
}
function V1(e, t, r, i = "partial") {
  const l = t._zod.def.checks;
  if (l && l.length > 0)
    throw new Error(
      `.${i}() cannot be used on object schemas containing refinements`,
    );
  const d = r ? new Set(yf(t, r)) : void 0,
    m = {};
  return (
    Li(
      m,
      t,
      Reflect.ownKeys(da(t)),
      e &&
        ((h, y) =>
          d && !d.has(y) ? h : new e({ type: "optional", innerType: h })),
    ),
    ei(t, Vn(t._zod.def, { shape: m, checks: [] }))
  );
}
function tk(e, t, r) {
  const i = r ? new Set(yf(t, r)) : void 0,
    s = {};
  return (
    Li(s, t, Reflect.ownKeys(da(t)), (l, c) =>
      i && !i.has(c) ? l : new e({ type: "nonoptional", innerType: l }),
    ),
    ei(t, Vn(t._zod.def, { shape: s }))
  );
}
function la(e, t = 0) {
  if (e.aborted === !0) return !0;
  for (let r = t; r < e.issues.length; r++)
    if (e.issues[r]?.continue !== !0) return !0;
  return !1;
}
function nk(e, t = 0) {
  if (e.aborted === !0) return !0;
  for (let r = t; r < e.issues.length; r++)
    if (e.issues[r]?.continue === !1) return !0;
  return !1;
}
function Xp(e, t) {
  return t.map((r) => {
    var i;
    return ((i = r).path ?? (i.path = []), r.path.unshift(e), r);
  });
}
function el(e) {
  return typeof e == "string" ? e : e?.message;
}
function $1(e) {
  const t = [];
  for (const r of e ?? []) {
    const i = r._zod.def;
    if (!/_(length|size)$|_equals$/.test(i.check)) break;
    const s = i.maximum ?? i.length ?? i.size;
    s >= 0 && t.push([s, r]);
  }
  return t;
}
function Fm(e, t, r) {
  var i;
  for (let s = t; s < e.length; s++) (i = e[s]).schema ?? (i.schema = r);
}
function Xo(e, t, r) {
  var i;
  const s = e.inst?._zod?.traits;
  s?.has("$ZodType") &&
    (s.has("$ZodCheck")
      ? ((i = e).schema ?? (i.schema = e.inst))
      : (e.schema = e.inst));
  const l = e.schema !== e.inst ? e.schema?._zod.def?.error : void 0,
    c = e.message
      ? e.message
      : (el(e.inst?._zod.def?.error?.(e)) ??
        el(l?.(e)) ??
        el(t?.error?.(e)) ??
        el(r.customError?.(e)) ??
        el(r.localeError?.(e)) ??
        "Invalid input"),
    d = {};
  for (const m of Object.keys(e))
    m === "inst" ||
      m === "schema" ||
      m === "continue" ||
      m === "input" ||
      m === "__proto__" ||
      (d[m] = e[m]);
  return (
    d.path ?? (d.path = []),
    (d.message = c),
    t?.reportInput && (d.input = e.input),
    d
  );
}
const rk = /[\uD800-\uDBFF]/;
function Jp(e) {
  const t = e.length;
  if (!rk.test(e)) return t;
  let r = t;
  for (let i = 0; i < t - 1; i++)
    (e.charCodeAt(i) & 64512) === 55296 &&
      (e.charCodeAt(i + 1) & 64512) === 56320 &&
      (r--, i++);
  return r;
}
function Wp(e) {
  return Array.isArray(e)
    ? "array"
    : typeof e == "string"
      ? "string"
      : "unknown";
}
function ak(e) {
  const t = typeof e;
  switch (t) {
    case "number":
      return Number.isNaN(e) ? "nan" : "number";
    case "object": {
      if (e === null) return "null";
      if (Array.isArray(e)) return "array";
      const r = e;
      if (
        r &&
        Object.getPrototypeOf(r) !== Object.prototype &&
        "constructor" in r &&
        r.constructor
      )
        return r.constructor.name;
    }
  }
  return t;
}
function bl(...e) {
  const [t, r, i] = e;
  return typeof t == "string"
    ? { message: t, code: "custom", input: r, inst: i }
    : { ...t };
}
function ik(e, t) {
  for (const r in t) {
    const i = Object.getOwnPropertyDescriptor(t, r);
    i.get
      ? Object.defineProperty(e, r, { ...i, enumerable: !1 })
      : ok(e, r, i.value);
  }
}
function Xa(e, t, r, i = !0) {
  return (
    Object.defineProperty(e, t, {
      configurable: !0,
      writable: !0,
      enumerable: i,
      value: r,
    }),
    r
  );
}
function ey(e, t, r) {
  return Xa(e, t, r, !1);
}
function W_(e, t) {
  for (const r in e) {
    const i = e[r];
    Object.defineProperty(t, r, {
      configurable: !0,
      enumerable: !0,
      get() {
        return Xa(this, r, i(this));
      },
      set(s) {
        Xa(this, r, s);
      },
    });
  }
  return t;
}
function ok(e, t, r) {
  Object.defineProperty(e, t, {
    configurable: !0,
    get() {
      return this == null ? r : Xa(this, t, r.bind(this));
    },
    set(i) {
      Xa(this, t, i);
    },
  });
}
function sk(e, t) {
  const r = Object.getPrototypeOf(e);
  return t in r ? void 0 : r;
}
let Wh,
  Ha = !1;
const lk = {
  configurable: !0,
  get() {
    Ha = !0;
  },
};
function lt(e, t, r) {
  const i = Object.getPrototypeOf(e._zod);
  if (t in i && Wh !== e._zod) {
    Wh = void 0;
    return;
  }
  ((Wh = e._zod),
    Object.defineProperty(i, t, {
      configurable: !0,
      get() {
        Object.defineProperty(this, t, lk);
        const s = Ha;
        Ha = !1;
        try {
          const l = r(this);
          return (
            Ha
              ? delete this[t]
              : Object.defineProperty(this, t, {
                  configurable: !0,
                  writable: !0,
                  value: l,
                }),
            (Ha = Ha || s),
            l
          );
        } catch (l) {
          throw (delete this[t], (Ha = Ha || s), l);
        }
      },
      set(s) {
        Object.defineProperty(this, t, {
          configurable: !0,
          writable: !0,
          value: s,
        });
      },
    }));
}
function uk(e, t, r, i) {
  const s = sk(e, t);
  s &&
    Object.defineProperty(s, t, {
      configurable: !0,
      get() {
        const l = {
          configurable: !0,
          writable: !0,
          enumerable: i,
          value: void 0,
        };
        return (
          Object.defineProperty(this, t, l),
          (l.value = r(this)),
          Object.defineProperty(this, t, l),
          l.value
        );
      },
      set(l) {
        Object.defineProperty(this, t, {
          configurable: !0,
          writable: !0,
          enumerable: i,
          value: l,
        });
      },
    });
}
const ck = "~constantCatch";
function fk(e) {
  const t = () => e;
  return ((t[ck] = !0), t);
}
var H1;
const em = { value: void 0, enumerable: !1 };
let I1 = "captureStackTrace" in Error ? Error : null;
function dk(e) {
  const t = I1;
  if (t) {
    const r = t.stackTraceLimit;
    if (typeof r == "number") {
      try {
        t.stackTraceLimit = 0;
      } catch {
        return ((I1 = null), new e());
      }
      try {
        return new e();
      } finally {
        t.stackTraceLimit = r;
      }
    }
  }
  return new e();
}
function se(e, t, r, i) {
  const s = {};
  function l(v) {
    ((this.def = v), (this.constr = g), (this.traits = new Set()));
  }
  l.prototype = s;
  const c = r,
    d = c && new WeakSet();
  function m(v, _) {
    if (v._zod) {
      if (v._zod.traits.has(e)) return;
    } else {
      em.value = new l(_);
      try {
        Object.defineProperty(v, "_zod", em);
      } finally {
        em.value = void 0;
      }
    }
    if ((v._zod.traits.add(e), t(v, _), d)) {
      const E = Object.getPrototypeOf(v),
        x = v._zod.constr.prototype;
      let T = E;
      for (; T && T !== x; ) T = Object.getPrototypeOf(T);
      const P = T ?? E;
      d.has(P) || (d.add(P), ik(P, c));
    }
    const S = g.prototype;
    for (const E in S)
      Object.prototype.hasOwnProperty.call(S, E) &&
        (E in v || (v[E] = S[E].bind(v)));
  }
  const h = i?.Parent ?? Object;
  class y extends h {}
  Object.defineProperty(y, "name", { value: e });
  function g(v) {
    const _ = i?.Parent ? dk(y) : this;
    m(_, v);
    const S = _._zod.deferred;
    if (S) {
      for (const x of S) x();
      _._zod.deferred = void 0;
    }
    const E = globalThis.__zod_globalConfig?.postProcessor;
    return (E && E(_), _);
  }
  return (
    Object.defineProperty(g, "init", { value: m }),
    Object.defineProperty(g, Symbol.hasInstance, {
      value: (v) =>
        i?.Parent && v instanceof i.Parent ? !0 : v?._zod?.traits?.has(e),
    }),
    Object.defineProperty(g, "name", { value: e }),
    g
  );
}
class Ni extends Error {
  constructor() {
    super(
      "Encountered Promise during synchronous parse. Use .parseAsync() instead.",
    );
  }
}
class eE extends Error {
  constructor(t) {
    (super(`Encountered unidirectional transform during encode: ${t}`),
      (this.name = "ZodEncodeError"));
  }
}
(H1 = globalThis).__zod_globalConfig ?? (H1.__zod_globalConfig = {});
const zr = globalThis.__zod_globalConfig;
function ti(e) {
  return (e && Object.assign(zr, e), zr);
}
function hk() {
  const e = this._zod;
  return (e.message ?? (e.message = JSON.stringify(e.def, Pm, 2)), e.message);
}
function mk(e) {
  this._zod.message = e;
}
const pk = { get: hk, set: mk, enumerable: !0, configurable: !0 },
  tm = { value: void 0, enumerable: !1 },
  Z1 = new WeakSet([Object.prototype, Error.prototype]),
  yk = (e, t) => {
    ((e.name = "$ZodError"),
      (tm.value = t),
      Object.defineProperty(e, "issues", tm),
      (tm.value = void 0),
      Object.defineProperty(e, "message", pk));
    const r = Object.getPrototypeOf(e);
    Z1.has(r) ||
      (Z1.add(r),
      Object.defineProperty(r, "toString", {
        configurable: !0,
        enumerable: !1,
        get() {
          const i = () => this.message;
          return (
            Object.defineProperty(this, "toString", {
              value: i,
              configurable: !0,
              writable: !0,
            }),
            i
          );
        },
        set(i) {
          Object.defineProperty(this, "toString", {
            value: i,
            configurable: !0,
            writable: !0,
          });
        },
      }));
  },
  gk = se("$ZodError", yk);
function vk(e, t, r) {
  return (
    Object.prototype.hasOwnProperty.call(e, t) ||
      (t === "__proto__"
        ? Object.defineProperty(e, t, {
            value: r(),
            writable: !0,
            enumerable: !0,
            configurable: !0,
          })
        : (e[t] = r())),
    e[t]
  );
}
function bk(e, t = (r) => r.message) {
  const r = {},
    i = [];
  for (const s of e.issues)
    s.path.length > 0 ? vk(r, s.path[0], () => []).push(t(s)) : i.push(t(s));
  return { formErrors: i, fieldErrors: r };
}
function wk(e, t = (r) => r.message) {
  const r = { _errors: [] },
    i = (s, l = []) => {
      for (const c of s.issues)
        if (c.code === "invalid_union" && c.errors.length)
          c.errors.map((d) => i({ issues: d }, [...l, ...c.path]));
        else if (c.code === "invalid_key")
          i({ issues: c.issues }, [...l, ...c.path]);
        else if (c.code === "invalid_element")
          i({ issues: c.issues }, [...l, ...c.path]);
        else {
          const d = [...l, ...c.path];
          if (d.length === 0) r._errors.push(t(c));
          else {
            let m = r,
              h = 0;
            for (; h < d.length; ) {
              const y = d[h],
                g = h === d.length - 1;
              if (y === "_errors") {
                (g && m._errors.push(t(c)), h++);
                continue;
              }
              Object.prototype.hasOwnProperty.call(m, y) ||
                Object.defineProperty(m, y, {
                  value: { _errors: [] },
                  enumerable: !0,
                  writable: !0,
                  configurable: !0,
                });
              const v = m[y];
              (g && v._errors.push(t(c)), (m = v), h++);
            }
          }
        }
    };
  return (i(e), r);
}
function gf(e, t) {
  return { callee: t?.callee ?? e, Err: t?.Err };
}
const ty = (e) => {
    const t = (r, i, s, l) => {
      const c = s ? { ...s, async: !1 } : { async: !1 },
        d = r._zod.run({ value: i, issues: [] }, c);
      if (d instanceof Promise) throw new Ni();
      if (d.issues.length) {
        const m = new (l?.Err ?? e)(d.issues.map((h) => Xo(h, c, ti())));
        throw (Y_(m, l?.callee ?? t), m);
      }
      return d.value;
    };
    return t;
  },
  ny = (e) => {
    const t = async (r, i, s, l) => {
      const c = s ? { ...s, async: !0 } : { async: !0 };
      let d = r._zod.run({ value: i, issues: [] }, c);
      if ((d instanceof Promise && (d = await d), d.issues.length)) {
        const m = new (l?.Err ?? e)(d.issues.map((h) => Xo(h, c, ti())));
        throw (Y_(m, l?.callee ?? t), m);
      }
      return d.value;
    };
    return t;
  },
  ry = (e) => (t, r, i) => {
    const s = i ? { ...i, async: !1 } : { async: !1 },
      l = t._zod.run({ value: r, issues: [] }, s);
    if (l instanceof Promise) throw new Ni();
    return l.issues.length
      ? tE(e, l.issues, s)
      : { success: !0, data: l.value };
  };
function tE(e, t, r) {
  let i;
  return {
    success: !1,
    get error() {
      return (
        i ||
          ((i = new e(t.map((s) => Xo(s, r, ti())))),
          (t = void 0),
          (r = void 0)),
        i
      );
    },
    set error(s) {
      ((i = s), (t = void 0), (r = void 0));
    },
  };
}
const ay = (e) => async (t, r, i) => {
    const s = i ? { ...i, async: !0 } : { async: !0 };
    let l = t._zod.run({ value: r, issues: [] }, s);
    return (
      l instanceof Promise && (l = await l),
      l.issues.length ? tE(e, l.issues, s) : { success: !0, data: l.value }
    );
  },
  Sk = Symbol.for("zod.compile.invalid"),
  _k = Symbol.for("zod.compile.fallback"),
  Ek = (e, t, r) => {
    const i = e._zod.bag.validator;
    if (i !== void 0) {
      if (i(t) !== Sk) return !0;
      if (i.definite === !0 && r === void 0) return !1;
    }
    return xk(e, t, r);
  };
function xk(e, t, r) {
  const i = r
      ? { ...r, async: !1, abortEarly: !0 }
      : { async: !1, abortEarly: !0 },
    s = e._zod.bag.fallbackRun;
  let l;
  if (
    (s
      ? ((i[_k] = !0), (l = s({ value: t, issues: [] }, i)))
      : (l = e._zod.run({ value: t, issues: [] }, i)),
    l instanceof Promise)
  )
    throw new Ni();
  return l.issues.length === 0;
}
const Rk = async (e, t, r) => {
    const i = r
      ? { ...r, async: !0, abortEarly: !0 }
      : { async: !0, abortEarly: !0 };
    let s = e._zod.run({ value: t, issues: [] }, i);
    return (s instanceof Promise && (s = await s), s.issues.length === 0);
  },
  Ok = (e) => {
    const t = ty(e),
      r = (i, s, l, c) => {
        const d = l
          ? { ...l, direction: "backward" }
          : { direction: "backward" };
        return t(i, s, d, gf(r, c));
      };
    return r;
  },
  Ak = (e) => {
    const t = ty(e),
      r = (i, s, l, c) => t(i, s, l, gf(r, c));
    return r;
  },
  Ck = (e) => {
    const t = ny(e),
      r = async (i, s, l, c) => {
        const d = l
          ? { ...l, direction: "backward" }
          : { direction: "backward" };
        return await t(i, s, d, gf(r, c));
      };
    return r;
  },
  Tk = (e) => {
    const t = ny(e),
      r = async (i, s, l, c) => await t(i, s, l, gf(r, c));
    return r;
  },
  Dk = (e) => (t, r, i) => {
    const s = i ? { ...i, direction: "backward" } : { direction: "backward" };
    return ry(e)(t, r, s);
  },
  Mk = (e) => (t, r, i) => ry(e)(t, r, i),
  Nk = (e) => async (t, r, i) => {
    const s = i ? { ...i, direction: "backward" } : { direction: "backward" };
    return ay(e)(t, r, s);
  },
  zk = (e) => async (t, r, i) => ay(e)(t, r, i),
  kk = /^[cC][0-9a-z]{6,}$/,
  jk = /^[0-9a-z]+$/,
  Lk = /^[0-7][0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{25}$/,
  Uk = /^[0-9a-vA-V]{20}$/,
  Pk = /^[A-Za-z0-9]{27}$/,
  Fk = /^[a-zA-Z0-9_-]{21}$/;
function Bk(e) {
  return new RegExp(`^[a-zA-Z0-9_-]{${e}}$`);
}
const Vk =
    /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/,
  $k =
    /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,
  q1 = (e) =>
    e
      ? new RegExp(
          `^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`,
        )
      : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,
  Hk =
    /^(?:[A-Za-z0-9_'+\-]+\.)*[A-Za-z0-9_'+\-]*[A-Za-z0-9_+-]@(?:[A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/,
  Ik =
    "^(?=[\\s\\S]*[\\p{Extended_Pictographic}\\p{Regional_Indicator}\\u20E3])[\\p{Extended_Pictographic}\\p{Emoji_Component}]+$";
function Zk() {
  return new RegExp(Ik, "u");
}
const qk =
    /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
  Gk =
    /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/,
  Yk =
    /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,
  Kk =
    /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
  Qk =
    /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,
  Xk = /^(?:[A-Za-z0-9_-]{4})*(?:[A-Za-z0-9_-]{2,3})?$/,
  Jk = /^https?$/,
  Wk = /^\+[1-9]\d{6,14}$/,
  nE =
    "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))";
function e8(e) {
  return new RegExp(`^${e}$`);
}
const t8 = e8(nE);
function Bm(e) {
  const t = "(?:[01]\\d|2[0-3]):[0-5]\\d";
  return typeof e.precision == "number"
    ? e.precision === -1
      ? `${t}`
      : e.precision === 0
        ? `${t}:[0-5]\\d`
        : `${t}:[0-5]\\d\\.\\d{${e.precision}}`
    : e.seconds
      ? `${t}:[0-5]\\d(?:\\.\\d+)?`
      : `${t}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function n8(e) {
  return new RegExp(`^${Bm(e)}$`);
}
function r8(e) {
  const t = ["Z"];
  e.offset && t.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
  const r = `${Bm({ precision: e.precision, seconds: !0 })}(?:${t.join("|")})`,
    i = e.local ? `${r}|${Bm({ precision: e.precision })}` : r;
  return new RegExp(`^${nE}T(?:${i})$`);
}
const a8 = /^[\s\S]{0,}$/,
  i8 = /^-?\d+(?:\.\d+)?$/,
  o8 = /^[^A-Z]*$/,
  s8 = /^[^a-z]*$/,
  gn = se("$ZodCheck", (e, t) => {
    var r;
    (e._zod ?? (e._zod = {}),
      (e._zod.def = t),
      (r = e._zod).onattach ?? (r.onattach = []));
  }),
  iy = (e) => {
    const t = e.value;
    return !V6(t) && t.length !== void 0;
  },
  Fc = { number: "number", bigint: "bigint", object: "date" },
  rE = se("$ZodCheckLessThan", (e, t) => {
    gn.init(e, t);
    const r = Fc[typeof t.value];
    e._zod.check = (i) => {
      (t.inclusive ? i.value <= t.value : i.value < t.value) ||
        i.issues.push({
          origin: Fc[typeof i.value] ?? r,
          code: "too_big",
          maximum: typeof t.value == "object" ? t.value.getTime() : t.value,
          input: i.value,
          inclusive: t.inclusive,
          inst: e,
          continue: !t.abort,
        });
    };
  }),
  aE = se("$ZodCheckGreaterThan", (e, t) => {
    gn.init(e, t);
    const r = Fc[typeof t.value];
    e._zod.check = (i) => {
      (t.inclusive ? i.value >= t.value : i.value > t.value) ||
        i.issues.push({
          origin: Fc[typeof i.value] ?? r,
          code: "too_small",
          minimum: typeof t.value == "object" ? t.value.getTime() : t.value,
          input: i.value,
          inclusive: t.inclusive,
          inst: e,
          continue: !t.abort,
        });
    };
  }),
  l8 = se("$ZodCheckMultipleOf", (e, t) => {
    (gn.init(e, t),
      (e._zod.check = (r) => {
        if (typeof r.value != typeof t.value)
          throw new Error("Cannot mix number and bigint in multiple_of check.");
        (typeof r.value == "bigint"
          ? t.value !== BigInt(0) && r.value % t.value === BigInt(0)
          : $6(r.value, t.value) === 0) ||
          r.issues.push({
            origin: typeof r.value,
            code: "not_multiple_of",
            divisor: t.value,
            input: r.value,
            inst: e,
            continue: !t.abort,
          });
      }));
  }),
  u8 = se("$ZodCheckNumberFormat", (e, t) => {
    (gn.init(e, t), (t.format = t.format || "float64"));
    const r = t.format?.includes("int"),
      i = r ? "int" : "number",
      [s, l] = X_[t.format];
    e._zod.check = (c) => {
      const d = c.value;
      if (r) {
        if (!Number.isInteger(d)) {
          c.issues.push({
            expected: i,
            format: t.format,
            code: "invalid_type",
            continue: !1,
            input: d,
            inst: e,
          });
          return;
        }
        if (!Number.isSafeInteger(d)) {
          d > 0
            ? c.issues.push({
                input: d,
                code: "too_big",
                maximum: Number.MAX_SAFE_INTEGER,
                note: "Integers must be within the safe integer range.",
                inst: e,
                origin: i,
                inclusive: !0,
                continue: !t.abort,
              })
            : c.issues.push({
                input: d,
                code: "too_small",
                minimum: Number.MIN_SAFE_INTEGER,
                note: "Integers must be within the safe integer range.",
                inst: e,
                origin: i,
                inclusive: !0,
                continue: !t.abort,
              });
          return;
        }
      }
      (d < s &&
        c.issues.push({
          origin: "number",
          input: d,
          code: "too_small",
          minimum: s,
          inclusive: !0,
          inst: e,
          continue: !t.abort,
        }),
        d > l &&
          c.issues.push({
            origin: "number",
            input: d,
            code: "too_big",
            maximum: l,
            inclusive: !0,
            inst: e,
            continue: !t.abort,
          }));
    };
  }),
  c8 = se("$ZodCheckMaxLength", (e, t) => {
    var r;
    (gn.init(e, t),
      (r = e._zod.def).when ?? (r.when = iy),
      (e._zod.check = (i) => {
        const s = i.value,
          l = s.length;
        if ((typeof s == "string" && l > t.maximum ? Jp(s) : l) <= t.maximum)
          return;
        const d = Wp(s);
        i.issues.push({
          origin: d,
          code: "too_big",
          maximum: t.maximum,
          inclusive: !0,
          input: s,
          inst: e,
          continue: !t.abort,
        });
      }));
  }),
  f8 = se("$ZodCheckMinLength", (e, t) => {
    var r;
    (gn.init(e, t),
      (r = e._zod.def).when ?? (r.when = iy),
      (e._zod.check = (i) => {
        const s = i.value,
          l = s.length;
        if (
          (typeof s == "string" && l >= t.minimum && l < t.minimum * 2
            ? Jp(s)
            : l) >= t.minimum
        )
          return;
        const d = Wp(s);
        i.issues.push({
          origin: d,
          code: "too_small",
          minimum: t.minimum,
          inclusive: !0,
          input: s,
          inst: e,
          continue: !t.abort,
        });
      }));
  }),
  d8 = se("$ZodCheckLengthEquals", (e, t) => {
    var r;
    (gn.init(e, t),
      (r = e._zod.def).when ?? (r.when = iy),
      (e._zod.check = (i) => {
        const s = i.value,
          l = s.length,
          c =
            typeof s == "string" && l >= t.length && l <= t.length * 2
              ? Jp(s)
              : l;
        if (c === t.length) return;
        const d = Wp(s),
          m = c > t.length;
        i.issues.push({
          origin: d,
          ...(m
            ? { code: "too_big", maximum: t.length }
            : { code: "too_small", minimum: t.length }),
          inclusive: !0,
          exact: !0,
          input: i.value,
          inst: e,
          continue: !t.abort,
        });
      }));
  }),
  vf = se("$ZodCheckStringFormat", (e, t) => {
    var r, i;
    (gn.init(e, t),
      t.pattern
        ? ((r = e._zod).check ??
          (r.check = (s) => {
            ((t.pattern.lastIndex = 0),
              !t.pattern.test(s.value) &&
                s.issues.push({
                  origin: "string",
                  code: "invalid_format",
                  format: t.format,
                  input: s.value,
                  ...(t.pattern ? { pattern: t.pattern.toString() } : {}),
                  inst: e,
                  continue: !t.abort,
                }));
          }))
        : ((i = e._zod).check ?? (i.check = () => {})));
  }),
  h8 = se("$ZodCheckRegex", (e, t) => {
    (vf.init(e, t),
      (e._zod.check = (r) => {
        ((t.pattern.lastIndex = 0),
          !t.pattern.test(r.value) &&
            r.issues.push({
              origin: "string",
              code: "invalid_format",
              format: "regex",
              input: r.value,
              pattern: t.pattern.toString(),
              inst: e,
              continue: !t.abort,
            }));
      }));
  }),
  m8 = se("$ZodCheckLowerCase", (e, t) => {
    (t.pattern ?? (t.pattern = o8), vf.init(e, t));
  }),
  p8 = se("$ZodCheckUpperCase", (e, t) => {
    (t.pattern ?? (t.pattern = s8), vf.init(e, t));
  }),
  y8 = se("$ZodCheckIncludes", (e, t) => {
    gn.init(e, t);
    const r = pf(t.includes),
      i = new RegExp(
        typeof t.position == "number" ? `^.{${t.position},}${r}` : r,
      );
    ((t.pattern = i),
      (e._zod.check = (s) => {
        s.value.includes(t.includes, t.position) ||
          s.issues.push({
            origin: "string",
            code: "invalid_format",
            format: "includes",
            includes: t.includes,
            input: s.value,
            inst: e,
            continue: !t.abort,
          });
      }));
  }),
  g8 = se("$ZodCheckStartsWith", (e, t) => {
    gn.init(e, t);
    const r = new RegExp(`^${pf(t.prefix)}.*`);
    (t.pattern ?? (t.pattern = r),
      (e._zod.check = (i) => {
        i.value.startsWith(t.prefix) ||
          i.issues.push({
            origin: "string",
            code: "invalid_format",
            format: "starts_with",
            prefix: t.prefix,
            input: i.value,
            inst: e,
            continue: !t.abort,
          });
      }));
  }),
  v8 = se("$ZodCheckEndsWith", (e, t) => {
    gn.init(e, t);
    const r = new RegExp(`.*${pf(t.suffix)}$`);
    (t.pattern ?? (t.pattern = r),
      (e._zod.check = (i) => {
        i.value.endsWith(t.suffix) ||
          i.issues.push({
            origin: "string",
            code: "invalid_format",
            format: "ends_with",
            suffix: t.suffix,
            input: i.value,
            inst: e,
            continue: !t.abort,
          });
      }));
  });
function G1(e, t, r) {
  e.issues.length && t.issues.push(...Xp(r, e.issues));
}
const b8 = se("$ZodCheckProperties", (e, t) => {
    (gn.init(e, t),
      ey(e, Symbol.iterator, function* () {
        yield e;
      }));
    let r;
    e._zod.check = (i) => {
      if (i.value == null) {
        i.issues.push({
          expected: "object",
          code: "invalid_type",
          input: i.value,
          inst: e,
        });
        return;
      }
      r ?? (r = Reflect.ownKeys(t.shape).map((c) => [c, t.shape[c]]));
      const s = i.value;
      let l;
      for (const [c, d] of r) {
        const m = d._zod.run({ value: s[c], issues: [] }, {});
        m instanceof Promise
          ? (l ?? (l = []), l.push(m.then((h) => G1(h, i, c))))
          : G1(m, i, c);
      }
      if (l) return Promise.all(l).then(() => {});
    };
  }),
  w8 = se("$ZodCheckOverwrite", (e, t) => {
    (gn.init(e, t),
      (e._zod.check = (r) => {
        r.value = t.tx(r.value);
      }));
  });
class S8 {
  constructor(t = [], r = {}) {
    ((this.content = []),
      (this.indent = 0),
      (this.args = t),
      (this.closed = r));
  }
  indented(t) {
    this.indent += 1;
    try {
      t(this);
    } finally {
      this.indent -= 1;
    }
  }
  write(t) {
    if (typeof t == "function") {
      (t(this, { execution: "sync" }), t(this, { execution: "async" }));
      return;
    }
    const i = t
        .split(
          `
`,
        )
        .filter((c) => c),
      s = Math.min(...i.map((c) => c.length - c.trimStart().length)),
      l = i.map((c) => c.slice(s)).map((c) => " ".repeat(this.indent * 2) + c);
    for (const c of l) this.content.push(c);
  }
  compile() {
    const t = Function,
      r = this?.content ?? [""];
    return new t(
      ...Object.keys(this.closed),
      `return function (${this.args.join(", ")}) {
${r.join(`
`)}
};`,
    )(...Object.values(this.closed));
  }
}
const _8 = { major: 4, minor: 6, patch: 7 },
  Ft = se(
    "$ZodType",
    (e, t) => {
      var r;
      (e ?? (e = {}),
        (e._zod.def = t),
        (e._zod.bag = e._zod.bag || {}),
        (e._zod.version = _8));
      const i = e._zod.def.checks,
        s = e._zod.traits.has("$ZodCheck")
          ? [e, ...(i ?? [])]
          : i?.length
            ? [...i]
            : [];
      for (const l of s) for (const c of l._zod.onattach) c(e);
      if (s.length === 0)
        ((r = e._zod).deferred ?? (r.deferred = []),
          e._zod.deferred?.push(() => {
            e._zod.run = e._zod.parse;
          }));
      else {
        const l = (d, m, h) => {
            if (d.memo) return d;
            let y = la(d),
              g;
            for (const v of m) {
              if (v._zod.def.when) {
                if (nk(d) || !v._zod.def.when(d)) continue;
              } else if (y) continue;
              const _ = d.issues.length,
                S = v._zod.check(d);
              if (S instanceof Promise && h?.async === !1) throw new Ni();
              if (g || S instanceof Promise)
                g = (g ?? Promise.resolve()).then(async () => {
                  (await S,
                    d.issues.length !== _ &&
                      (Fm(d.issues, _, e), y || (y = la(d, _))));
                });
              else {
                if (d.issues.length === _) continue;
                (Fm(d.issues, _, e), y || (y = la(d, _)));
              }
            }
            return g ? g.then(() => d) : d;
          },
          c = (d, m, h) => {
            if (la(d)) return ((d.aborted = !0), d);
            const y = l(m, s, h);
            if (y instanceof Promise) {
              if (h.async === !1) throw new Ni();
              return y.then((g) => e._zod.parse(g, h));
            }
            return e._zod.parse(y, h);
          };
        e._zod.run = (d, m) => {
          if (m.skipChecks) return e._zod.parse(d, m);
          if (m.direction === "backward") {
            const y = e._zod.parse(
              { value: d.value, issues: [] },
              { ...m, skipChecks: !0 },
            );
            return y instanceof Promise
              ? y.then((g) => c(g, d, m))
              : c(y, d, m);
          }
          const h = e._zod.parse(d, m);
          if (h instanceof Promise) {
            if (m.async === !1) throw new Ni();
            return h.then((y) => l(y, s, m));
          }
          return l(h, s, m);
        };
      }
    },
    {
      get "~standard"() {
        return ey(this, "~standard", oE(this));
      },
      set "~standard"(e) {
        Xa(this, "~standard", e);
      },
    },
  ),
  iE = (e, t) =>
    e.issues.length
      ? { issues: e.issues.map((r) => Xo(r, t, ti())) }
      : { value: e.value };
async function E8(e, t) {
  const r = { async: !0 };
  return iE(await e._zod.run({ value: t, issues: [] }, r), r);
}
function oE(e) {
  return {
    validate: (t) => {
      const r = { async: !1 };
      try {
        const i = e._zod.run({ value: t, issues: [] }, r);
        if (!(i instanceof Promise)) return iE(i, r);
      } catch {}
      return E8(e, t);
    },
    vendor: "zod",
    version: 1,
  };
}
const oy = se("$ZodString", (e, t) => {
    (Ft.init(e, t),
      (e._zod.pattern = t.pattern ?? a8),
      (e._zod.parse = (r, i) => {
        if (t.coerce)
          try {
            r.value = String(r.value);
          } catch {}
        return (
          typeof r.value == "string" ||
            r.issues.push({
              expected: "string",
              code: "invalid_type",
              input: r.value,
              inst: e,
            }),
          r
        );
      }));
  }),
  _t = se("$ZodStringFormat", (e, t) => {
    (vf.init(e, t), oy.init(e, t));
  }),
  x8 = se("$ZodGUID", (e, t) => {
    (t.pattern ?? (t.pattern = $k), _t.init(e, t));
  }),
  R8 = se("$ZodUUID", (e, t) => {
    if (t.version) {
      const i = { v1: 1, v2: 2, v3: 3, v4: 4, v5: 5, v6: 6, v7: 7, v8: 8 }[
        t.version
      ];
      if (i === void 0) throw new Error(`Invalid UUID version: "${t.version}"`);
      t.pattern ?? (t.pattern = q1(i));
    } else t.pattern ?? (t.pattern = q1());
    _t.init(e, t);
  }),
  O8 = se("$ZodEmail", (e, t) => {
    (t.pattern ?? (t.pattern = Hk), _t.init(e, t));
  }),
  sE = 1,
  Bc = 2;
function lE(e) {
  try {
    return typeof URL < "u" && typeof URL.canParse == "function"
      ? URL.canParse(e)
      : (new URL(e), !0);
  } catch {
    return !1;
  }
}
function A8(e, t) {
  return !("normalize" in t) && !("hostname" in t) && !("protocol" in t)
    ? lE(e) || Bc
    : C8(e, t);
}
function C8(e, t) {
  if (
    !t.normalize &&
    t.protocol?.source === Jk.source &&
    !/^https?:\/\//i.test(e)
  )
    return sE;
  try {
    if (typeof URL < "u") {
      const r = URL;
      if (typeof r.parse == "function") return r.parse(e) ?? Bc;
    }
    return new URL(e);
  } catch {
    return Bc;
  }
}
const T8 = /[\t\n\r]/g;
function Y1(e) {
  return e.replace(T8, "");
}
function D8(e, t) {
  return ((t.lastIndex = 0), t.test(e.hostname));
}
function M8(e, t) {
  return (
    (t.lastIndex = 0),
    t.test(e.protocol.endsWith(":") ? e.protocol.slice(0, -1) : e.protocol)
  );
}
const N8 = se("$ZodURL", (e, t) => {
    (_t.init(e, t),
      (e._zod.check = (r) => {
        try {
          const i = r.value.trim(),
            s = A8(i, t);
          if (s === sE) {
            r.issues.push({
              code: "invalid_format",
              format: "url",
              note: "Invalid URL format",
              input: r.value,
              inst: e,
              continue: !t.abort,
            });
            return;
          }
          if (s === Bc) {
            r.issues.push({
              code: "invalid_format",
              format: "url",
              input: r.value,
              inst: e,
              continue: !t.abort,
            });
            return;
          }
          if (s === !0) {
            r.value = Y1(i);
            return;
          }
          (t.hostname &&
            !D8(s, t.hostname) &&
            r.issues.push({
              code: "invalid_format",
              format: "url",
              note: "Invalid hostname",
              pattern: t.hostname.source,
              input: r.value,
              inst: e,
              continue: !t.abort,
            }),
            t.protocol &&
              !M8(s, t.protocol) &&
              r.issues.push({
                code: "invalid_format",
                format: "url",
                note: "Invalid protocol",
                pattern: t.protocol.source,
                input: r.value,
                inst: e,
                continue: !t.abort,
              }),
            (r.value = t.normalize ? s.href : Y1(i)));
          return;
        } catch {
          r.issues.push({
            code: "invalid_format",
            format: "url",
            input: r.value,
            inst: e,
            continue: !t.abort,
          });
        }
      }));
  }),
  z8 = se("$ZodEmoji", (e, t) => {
    (t.pattern ?? (t.pattern = Zk()), _t.init(e, t));
  }),
  k8 = se("$ZodNanoID", (e, t) => {
    if (t.length !== void 0 && (!Number.isInteger(t.length) || t.length < 1))
      throw new Error(`Invalid nanoid length: ${t.length}`);
    (t.pattern ?? (t.pattern = t.length === void 0 ? Fk : Bk(t.length)),
      _t.init(e, t));
  }),
  j8 = se("$ZodCUID", (e, t) => {
    (t.pattern ?? (t.pattern = kk), _t.init(e, t));
  }),
  L8 = se("$ZodCUID2", (e, t) => {
    (t.pattern ?? (t.pattern = jk), _t.init(e, t));
  }),
  U8 = se("$ZodULID", (e, t) => {
    (t.pattern ?? (t.pattern = Lk), _t.init(e, t));
  }),
  P8 = se("$ZodXID", (e, t) => {
    (t.pattern ?? (t.pattern = Uk), _t.init(e, t));
  }),
  F8 = se("$ZodKSUID", (e, t) => {
    (t.pattern ?? (t.pattern = Pk), _t.init(e, t));
  }),
  B8 = se("$ZodISODateTime", (e, t) => {
    (t.pattern ?? (t.pattern = r8(t)), _t.init(e, t));
  }),
  V8 = se("$ZodISODate", (e, t) => {
    (t.pattern ?? (t.pattern = t8), _t.init(e, t));
  }),
  $8 = se("$ZodISOTime", (e, t) => {
    (t.pattern ?? (t.pattern = n8(t)), _t.init(e, t));
  }),
  H8 = se("$ZodISODuration", (e, t) => {
    (t.pattern ?? (t.pattern = Vk), _t.init(e, t));
  }),
  I8 = se("$ZodIPv4", (e, t) => {
    (t.pattern ?? (t.pattern = qk), _t.init(e, t));
  }),
  Z8 = /^[0-9a-fA-F:.]+$/;
function uE(e) {
  return Z8.test(e) ? lE(`http://[${e}]`) : !1;
}
const q8 = se("$ZodIPv6", (e, t) => {
    (t.pattern ?? (t.pattern = Gk),
      _t.init(e, t),
      (e._zod.check = (r) => {
        uE(r.value) ||
          r.issues.push({
            code: "invalid_format",
            format: "ipv6",
            input: r.value,
            inst: e,
            continue: !t.abort,
          });
      }));
  }),
  G8 = se("$ZodCIDRv4", (e, t) => {
    (t.pattern ?? (t.pattern = Yk), _t.init(e, t));
  });
function Y8(e) {
  const t = e.split("/");
  if (t.length !== 2) return !1;
  const [r, i] = t;
  if (!i) return !1;
  const s = Number(i);
  return `${s}` !== i || s < 0 || s > 128 ? !1 : uE(r);
}
const K8 = se("$ZodCIDRv6", (e, t) => {
  (t.pattern ?? (t.pattern = Kk),
    _t.init(e, t),
    (e._zod.check = (r) => {
      Y8(r.value) ||
        r.issues.push({
          code: "invalid_format",
          format: "cidrv6",
          input: r.value,
          inst: e,
          continue: !t.abort,
        });
    }));
});
function cE(e) {
  if (e === "") return !0;
  if (/\s/.test(e) || e.length % 4 !== 0) return !1;
  try {
    return (atob(e), !0);
  } catch {
    return !1;
  }
}
const fE = /^[0-9a-zA-Z+/]*={0,2}$/,
  Q8 = se("$ZodBase64", (e, t) => {
    (t.pattern ?? (t.pattern = fE),
      _t.init(e, t),
      (e._zod.check = (r) => {
        cE(r.value) ||
          r.issues.push({
            code: "invalid_format",
            format: "base64",
            input: r.value,
            inst: e,
            continue: !t.abort,
          });
      }));
  }),
  sy = /^[A-Za-z0-9_-]*$/;
function X8(e) {
  if (!sy.test(e)) return !1;
  const t = e.replace(/[-_]/g, (i) => (i === "-" ? "+" : "/")),
    r = t.padEnd(Math.ceil(t.length / 4) * 4, "=");
  return cE(r);
}
const J8 = se("$ZodBase64URL", (e, t) => {
    (t.pattern ?? (t.pattern = sy),
      _t.init(e, t),
      (e._zod.check = (r) => {
        X8(r.value) ||
          r.issues.push({
            code: "invalid_format",
            format: "base64url",
            input: r.value,
            inst: e,
            continue: !t.abort,
          });
      }));
  }),
  W8 = se("$ZodE164", (e, t) => {
    (t.pattern ?? (t.pattern = Wk), _t.init(e, t));
  });
function e7(e, t = null) {
  try {
    const r = e.split(".");
    if (r.length !== 3) return !1;
    const [i] = r;
    if (!i) return !1;
    const s = JSON.parse(atob(i));
    return !(
      ("typ" in s && s?.typ !== "JWT") ||
      !s.alg ||
      (t && (!("alg" in s) || s.alg !== t))
    );
  } catch {
    return !1;
  }
}
const t7 = se("$ZodJWT", (e, t) => {
    (_t.init(e, t),
      (e._zod.check = (r) => {
        e7(r.value, t.alg) ||
          r.issues.push({
            code: "invalid_format",
            format: "jwt",
            input: r.value,
            inst: e,
            continue: !t.abort,
          });
      }));
  }),
  dE = se("$ZodNumber", (e, t) => {
    (Ft.init(e, t),
      (e._zod.pattern = i8),
      (e._zod.parse = (r, i) => {
        if (t.coerce)
          try {
            r.value = Number(r.value);
          } catch {}
        const s = r.value;
        if (typeof s == "number" && !Number.isNaN(s) && Number.isFinite(s))
          return r;
        const l =
          typeof s == "number"
            ? Number.isNaN(s)
              ? "NaN"
              : Number.isFinite(s)
                ? void 0
                : String(s)
            : void 0;
        return (
          r.issues.push({
            expected: "number",
            code: "invalid_type",
            input: s,
            inst: e,
            ...(l ? { received: l } : {}),
          }),
          r
        );
      }));
  }),
  n7 = se("$ZodNumberFormat", (e, t) => {
    (u8.init(e, t), dE.init(e, t));
  }),
  r7 = se("$ZodUnknown", (e, t) => {
    (Ft.init(e, t), (e._zod.parse = (r) => r));
  }),
  a7 = se("$ZodNever", (e, t) => {
    (Ft.init(e, t),
      (e._zod.parse = (r, i) => (
        r.issues.push({
          expected: "never",
          code: "invalid_type",
          input: r.value,
          inst: e,
        }),
        r
      )));
  });
function i7(e, t) {
  const r = $1(e._zod.def.checks);
  if (!r.length) return;
  const i = Math.min(...r.map((l) => l[0])),
    s = e._zod.parse;
  e._zod.parse = (l, c) => {
    const d = t(l.value);
    if (d > i && !c?.skipChecks && c?.direction !== "backward") {
      for (const [m, h] of $1(e._zod.def.checks))
        if (d > m && h._zod.def.when(l)) {
          const y = l.issues.length;
          return (
            h._zod.check(l),
            (l.issues[y].continue = !1),
            Fm(l.issues, y, e),
            l
          );
        }
    }
    return s(l, c);
  };
}
const o7 = (e) => (Array.isArray(e) ? e.length : -1);
function K1(e, t, r) {
  (e.issues.length && t.issues.push(...Xp(r, e.issues)),
    (t.value[r] = e.value));
}
const s7 = se("$ZodArray", (e, t) => {
  Ft.init(e, t);
  const r = zr.memoizer;
  (r?.attach(e),
    (e._zod.parse = (i, s) => {
      const l = i.value;
      if (!Array.isArray(l))
        return (
          i.issues.push({
            expected: "array",
            code: "invalid_type",
            input: l,
            inst: e,
          }),
          i
        );
      i.value = r ? r.alloc(e, i, Array(l.length), s) : Array(l.length);
      const c = [],
        d = s?.abortEarly;
      for (let m = 0; m < l.length; m++) {
        const h = l[m],
          y = t.element._zod.run({ value: h, issues: [] }, s);
        if (y instanceof Promise) c.push(y.then((g) => K1(g, i, m)));
        else if ((K1(y, i, m), d && y.issues.length !== 0 && la(y))) break;
      }
      return c.length ? Promise.all(c).then(() => i) : i;
    }),
    i7(e, o7));
});
function Vc(e, t, r, i, s, l) {
  const c = r in i,
    d = l === "optional";
  if (!(!c && d && s === "optional")) {
    if (e.issues.length) {
      if (s !== void 0 && d && !c) return;
      t.issues.push(...Xp(r, e.issues));
    }
    if (!c && s === void 0) {
      e.issues.length ||
        t.issues.push({
          code: "invalid_type",
          expected: "nonoptional",
          input: void 0,
          path: [r],
        });
      return;
    }
    e.value === void 0
      ? (c || (s === "defaulted" && !d)) && (t.value[r] = void 0)
      : (t.value[r] = e.value);
  }
}
const l7 = [];
function hE(e) {
  const t = Object.keys(e.shape),
    r = Object.getOwnPropertySymbols(e.shape),
    i = r.length ? r : l7,
    s = i.length ? [...t, ...i] : t;
  for (const c of s)
    if (!e.shape?.[c]?._zod?.traits?.has("$ZodType"))
      throw new Error(
        `Invalid element at key "${String(c)}": expected a Zod schema`,
      );
  const l = Y6(e.shape);
  return {
    ...e,
    allKeys: s,
    symbolKeys: i,
    keySet: new Set(t),
    numKeys: t.length,
    optionalKeys: new Set(l),
  };
}
function mE(e, t, r, i, s, l, c) {
  const d = [],
    m = s.keySet,
    h = s.catchall._zod,
    y = h.def.type,
    g = h.optin,
    v = h.optout;
  let _ = 0;
  for (const S in t) {
    if (c && r.issues.length !== _) {
      if (la(r, _)) break;
      _ = r.issues.length;
    }
    if (m.has(S)) continue;
    if (S === "__proto__") {
      y === "never" && d.push(S);
      continue;
    }
    if (y === "never") {
      d.push(S);
      continue;
    }
    const E = h.run({ value: t[S], issues: [] }, i);
    E instanceof Promise
      ? e.push(E.then((x) => Vc(x, r, S, t, g, v)))
      : Vc(E, r, S, t, g, v);
  }
  return (
    d.length &&
      r.issues.push({
        code: "unrecognized_keys",
        keys: d,
        input: t,
        inst: l,
        continue: !0,
      }),
    e.length ? Promise.all(e).then(() => r) : r
  );
}
const u7 = se("$ZodObject", (e, t) => {
    Ft.init(e, t);
    const r = Object.getOwnPropertyDescriptor(t, "shape"),
      i = r?.get ? r.get.raw : (t.shape ?? {});
    if (i) {
      const h = () => {
        const y = { ...i };
        return (
          Object.defineProperty(t, "shape", { value: y }),
          (h.raw = y),
          y
        );
      };
      ((h.raw = i), Object.defineProperty(t, "shape", { get: h }));
    }
    const s = Kp(() => hE(t));
    lt(e, "propValues", (h) => {
      const y = h.def.shape,
        g = {};
      for (const v in y) {
        const _ = y[v]._zod;
        if (_.values) {
          Object.prototype.hasOwnProperty.call(g, v) || Bi(g, v, new Set());
          for (const S of _.values) g[v].add(S);
          _.optin !== void 0 && g[v].add(void 0);
        }
      }
      return g;
    });
    const l = Pc,
      c = t.catchall;
    let d;
    const m = zr.memoizer;
    (m?.attach(e),
      (e._zod.parse = (h, y) => {
        d ?? (d = s.value);
        const g = h.value;
        if (!l(g))
          return (
            h.issues.push({
              expected: "object",
              code: "invalid_type",
              input: g,
              inst: e,
            }),
            h
          );
        h.value = m ? m.alloc(e, h, {}, y) : {};
        const v = [],
          _ = d.shape,
          S = y?.abortEarly;
        let E = h.issues.length;
        for (const x of d.allKeys) {
          if (S && h.issues.length !== E) {
            if (la(h, E)) break;
            E = h.issues.length;
          }
          if (x === "__proto__") continue;
          const T = _[x],
            P = T._zod.optin,
            D = T._zod.optout,
            B = T._zod.run({ value: g[x], issues: [] }, y);
          B instanceof Promise
            ? v.push(B.then((k) => Vc(k, h, x, g, P, D)))
            : Vc(B, h, x, g, P, D);
        }
        return c
          ? mE(v, g, h, y, s.value, e, S === !0)
          : v.length
            ? Promise.all(v).then(() => h)
            : h;
      }));
  }),
  c7 = se("$ZodObjectJIT", (e, t) => {
    u7.init(e, t);
    const r = e._zod.parse,
      i = Kp(() => hE(t)),
      s = zr.memoizer,
      l = (_) => {
        const S = i.value,
          E = S.symbolKeys,
          x = new S8(["payload", "ctx"], {
            shape: _,
            inst: e,
            memo: s,
            syms: E,
          }),
          T = (k) =>
            `shape[${k}]._zod.run({ value: input[${k}], issues: [] }, ctx)`,
          P = (k, C) => `
          let ${k}_ab = false;
          for (let i = 0; i < ${k}.issues.length; i++) {
            const iss = ${k}.issues[i];
            iss.path = iss.path ? [${C}, ...iss.path] : [${C}];
            payload.issues.push(iss);
            if (iss.continue !== true) ${k}_ab = true;
          }
          if (${k}_ab && ctx && ctx.abortEarly) {
            payload.value = newResult;
            return payload;
          }`;
        x.write("const input = payload.value;");
        const D = Object.create(null);
        let B = 0;
        for (const k of S.allKeys) D[k] = `key_${B++}`;
        x.write(
          s
            ? "const newResult = memo.alloc(inst, payload, {}, ctx);"
            : "const newResult = {};",
        );
        for (const k of S.allKeys) {
          if (k === "__proto__") continue;
          const C = D[k],
            Y = typeof k == "symbol" ? `syms[${E.indexOf(k)}]` : I6(k),
            Q = `${Y} in input`,
            me = _[k],
            pe = me?._zod?.optin,
            we = pe !== void 0,
            be = me?._zod?.optout === "optional";
          if ((x.write(`const ${C} = ${T(Y)};`), we && be)) {
            const Se =
              pe === "optional"
                ? `${C}_present`
                : `${C}.value !== undefined || ${C}_present`;
            x.write(`
        const ${C}_present = ${Q};
        if (!${C}.issues.length || ${C}_present) {
          if (${C}.issues.length) {${P(C, Y)}
          }

          if (${Se}) {
            newResult[${Y}] = ${C}.value;
          }
        }

      `);
          } else
            we
              ? (x.write(`
        if (${C}.issues.length) {${P(C, Y)}
        }
      `),
                pe === "defaulted"
                  ? x.write(`newResult[${Y}] = ${C}.value;`)
                  : x.write(`
        if (${C}.value !== undefined || ${Q}) {
          newResult[${Y}] = ${C}.value;
        }
      `))
              : x.write(`
        const ${C}_present = ${Q};
        if (${C}.issues.length) {${P(C, Y)}
        }
        if (!${C}_present && !${C}.issues.length) {
          payload.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: undefined,
            path: [${Y}]
          });
          if (ctx && ctx.abortEarly) {
            payload.value = newResult;
            return payload;
          }
        }

        if (${C}_present) {
          newResult[${Y}] = ${C}.value;
        }

      `);
        }
        return (
          x.write("payload.value = newResult;"),
          x.write("return payload;"),
          x.compile()
        );
      };
    let c;
    const d = Pc,
      m = !zr.jitless,
      y = m && q6.value,
      g = t.catchall;
    let v;
    e._zod.parse = (_, S) => {
      v ?? (v = i.value);
      const E = _.value;
      return d(E)
        ? m && y && S?.async === !1 && S.jitless !== !0
          ? (c || (c = l(t.shape)),
            (_ = c(_, S)),
            g ? mE([], E, _, S, v, e, S?.abortEarly === !0) : _)
          : r(_, S)
        : (_.issues.push({
            expected: "object",
            code: "invalid_type",
            input: E,
            inst: e,
          }),
          _);
    };
  });
function Q1(e, t, r, i) {
  for (const l of e) if (l.issues.length === 0) return ((t.value = l.value), t);
  const s = e.filter((l) => !la(l));
  return s.length === 1
    ? ((t.value = s[0].value), s[0])
    : (t.issues.push({
        code: "invalid_union",
        input: t.value,
        inst: r,
        errors: e.map((l) => l.issues.map((c) => Xo(c, i, ti()))),
      }),
      t);
}
const f7 = se("$ZodUnion", (e, t) => {
    (Ft.init(e, t),
      lt(e, "optin", (i) =>
        i.def.options.some((s) => s._zod.optin === "defaulted")
          ? "defaulted"
          : i.def.options.some((s) => s._zod.optin !== void 0)
            ? "optional"
            : void 0,
      ),
      lt(e, "optout", (i) =>
        i.def.options.some((s) => s._zod.optout === "optional")
          ? "optional"
          : void 0,
      ),
      lt(e, "values", (i) => {
        if (i.def.options.every((s) => s._zod.values))
          return new Set(
            i.def.options.flatMap((s) => Array.from(s._zod.values)),
          );
      }),
      lt(e, "pattern", (i) => {
        if (i.def.options.every((s) => s._zod.pattern)) {
          const s = i.def.options.map((l) => l._zod.pattern);
          return new RegExp(`^(${s.map((l) => Qp(l.source)).join("|")})$`);
        }
      }));
    const r = t.options.length === 1 ? t.options[0]._zod.run : null;
    e._zod.parse = (i, s) => {
      if (r) return r(i, s);
      let l = !1;
      const c = [];
      for (const d of t.options) {
        const m = d._zod.run({ value: i.value, issues: [] }, s);
        if (m instanceof Promise) (c.push(m), (l = !0));
        else {
          if (m.issues.length === 0) return m;
          c.push(m);
        }
      }
      return l ? Promise.all(c).then((d) => Q1(d, i, e, s)) : Q1(c, i, e, s);
    };
  }),
  d7 = se("$ZodIntersection", (e, t) => {
    (Ft.init(e, t),
      (e._zod.parse = (r, i) => {
        const s = r.value,
          l = t.left._zod.run({ value: s, issues: [] }, i),
          c = t.right._zod.run({ value: s, issues: [] }, i);
        return l instanceof Promise || c instanceof Promise
          ? Promise.all([l, c]).then(([m, h]) => X1(r, m, h))
          : X1(r, l, c);
      }));
  });
function Vm(e, t) {
  if (e === t) return { valid: !0, data: e };
  if (e instanceof Date && t instanceof Date && +e == +t)
    return { valid: !0, data: e };
  if (vl(e) && vl(t)) {
    const r = Object.keys(t),
      i = Object.keys(e).filter((l) => r.indexOf(l) !== -1),
      s = { ...e, ...t };
    Object.prototype.hasOwnProperty.call(s, "__proto__") && delete s.__proto__;
    for (const l of i) {
      if (l === "__proto__") continue;
      const c = Vm(e[l], t[l]);
      if (!c.valid)
        return { valid: !1, mergeErrorPath: [l, ...c.mergeErrorPath] };
      s[l] = c.data;
    }
    return { valid: !0, data: s };
  }
  if (Array.isArray(e) && Array.isArray(t)) {
    if (e.length !== t.length) return { valid: !1, mergeErrorPath: [] };
    const r = [];
    for (let i = 0; i < e.length; i++) {
      const s = e[i],
        l = t[i],
        c = Vm(s, l);
      if (!c.valid)
        return { valid: !1, mergeErrorPath: [i, ...c.mergeErrorPath] };
      r.push(c.data);
    }
    return { valid: !0, data: r };
  }
  return { valid: !1, mergeErrorPath: [] };
}
function X1(e, t, r) {
  const i = new Map();
  let s;
  const l = new Map(),
    c = (h, y) => {
      let g;
      if (h.code === "unrecognized_keys" && !h.path?.length)
        (s ?? (s = h), (g = h.keys));
      else if (
        h.code === "invalid_key" &&
        h.origin === "record" &&
        h.path?.length === 1
      ) {
        const v = String(h.path[0]);
        (l.has(v) || l.set(v, h), (g = [v]));
      } else return !1;
      for (const v of g) (i.has(v) || i.set(v, {}), (i.get(v)[y] = !0));
      return !0;
    };
  for (const h of t.issues) c(h, "l") || e.issues.push(h);
  for (const h of r.issues) c(h, "r") || e.issues.push(h);
  const d = [...i].filter(([, h]) => h.l && h.r).map(([h]) => h);
  if (d.length) {
    const h = s ? d.filter((y) => s.keys.includes(y)) : [];
    h.length && e.issues.push({ ...s, keys: h });
    for (const y of d) !h.includes(y) && l.has(y) && e.issues.push(l.get(y));
  }
  const m = Vm(t.value, r.value);
  if (!m.valid) {
    if (la(e)) return e;
    throw new Error(
      `Unmergable intersection. Error path: ${JSON.stringify(m.mergeErrorPath)}`,
    );
  }
  return ((e.value = m.data), e);
}
const h7 = se("$ZodEnum", (e, t) => {
    Ft.init(e, t);
    const r = Um(t.entries),
      i = new Set(r);
    ((e._zod.values = i),
      lt(e, "pattern", (s) => {
        const l = Um(s.def.entries).filter((c) => G6.has(typeof c));
        return new RegExp(
          l.length
            ? `^(${l.map((c) => pf(c.toString())).join("|")})$`
            : "^[^\\s\\S]$",
        );
      }),
      (e._zod.parse = (s, l) => {
        const c = s.value;
        return (
          i.has(c) ||
            s.issues.push({
              code: "invalid_value",
              values: r,
              input: c,
              inst: e,
            }),
          s
        );
      }));
  }),
  m7 = se("$ZodTransform", (e, t) => {
    (Ft.init(e, t),
      (e._zod.optin = "optional"),
      zr.memoizer?.guard(e),
      (e._zod.parse = (r, i) => {
        if (i.direction === "backward") throw new eE(e.constructor.name);
        const s = t.transform(r.value, r);
        if (i.async)
          return (s instanceof Promise ? s : Promise.resolve(s)).then(
            (c) => ((r.value = c), r),
          );
        if (s instanceof Promise) throw new Ni();
        return ((r.value = s), r);
      }));
  });
function J1(e, t) {
  return ((e.value = t.issues.length ? void 0 : t.value), e);
}
const pE = se("$ZodOptional", (e, t) => {
    (Ft.init(e, t),
      lt(e, "optin", (r) =>
        r.def.innerType._zod.optin === "defaulted" ? "defaulted" : "optional",
      ),
      (e._zod.optout = "optional"),
      lt(e, "values", (r) => {
        const i = r.def.innerType._zod.values;
        return i ? new Set([...i, void 0]) : void 0;
      }),
      lt(e, "pattern", (r) => {
        const i = r.def.innerType._zod.pattern;
        return i ? new RegExp(`^(${Qp(i.source)})?$`) : void 0;
      }),
      (e._zod.parse = (r, i) => {
        if (r.value === void 0) {
          if (t.innerType._zod.optin !== "defaulted") return r;
          const s = t.innerType._zod.run({ value: r.value, issues: [] }, i);
          return s instanceof Promise ? s.then((l) => J1(r, l)) : J1(r, s);
        }
        return t.innerType._zod.run(r, i);
      }));
  }),
  p7 = se("$ZodExactOptional", (e, t) => {
    (pE.init(e, t),
      lt(e, "values", (r) => r.def.innerType._zod.values),
      lt(e, "pattern", (r) => r.def.innerType._zod.pattern),
      (e._zod.parse = (r, i) => t.innerType._zod.run(r, i)));
  }),
  y7 = se("$ZodNullable", (e, t) => {
    (Ft.init(e, t),
      lt(e, "optin", (r) => r.def.innerType._zod.optin),
      lt(e, "optout", (r) => r.def.innerType._zod.optout),
      lt(e, "pattern", (r) => {
        const i = r.def.innerType._zod.pattern;
        return i ? new RegExp(`^(${Qp(i.source)}|null)$`) : void 0;
      }),
      lt(e, "values", (r) =>
        r.def.innerType._zod.values
          ? new Set([...r.def.innerType._zod.values, null])
          : void 0,
      ),
      (e._zod.parse = (r, i) =>
        r.value === null ? r : t.innerType._zod.run(r, i)));
  }),
  g7 = se("$ZodDefault", (e, t) => {
    (Ft.init(e, t),
      (e._zod.optin = "defaulted"),
      lt(e, "values", (r) => r.def.innerType._zod.values),
      (e._zod.parse = (r, i) => {
        if (i.direction === "backward") return t.innerType._zod.run(r, i);
        if (r.value === void 0) return ((r.value = t.defaultValue), r);
        const s = t.innerType._zod.run(r, i);
        return s instanceof Promise ? s.then((l) => W1(l, t)) : W1(s, t);
      }));
  });
function W1(e, t) {
  return (e.value === void 0 && (e.value = t.defaultValue), e);
}
const v7 = se("$ZodPrefault", (e, t) => {
    (Ft.init(e, t),
      (e._zod.optin = "defaulted"),
      lt(e, "values", (r) => r.def.innerType._zod.values),
      (e._zod.parse = (r, i) => (
        i.direction === "backward" ||
          (r.value === void 0 && (r.value = t.defaultValue)),
        t.innerType._zod.run(r, i)
      )));
  }),
  b7 = se("$ZodNonOptional", (e, t) => {
    (Ft.init(e, t),
      lt(e, "values", (r) => {
        const i = r.def.innerType._zod.values;
        return i ? new Set([...i].filter((s) => s !== void 0)) : void 0;
      }),
      (e._zod.parse = (r, i) => {
        const s = t.innerType._zod.run(r, i);
        return s instanceof Promise ? s.then((l) => ew(l, e)) : ew(s, e);
      }));
  });
function ew(e, t) {
  return (
    !e.issues.length &&
      e.value === void 0 &&
      e.issues.push({
        code: "invalid_type",
        expected: "nonoptional",
        input: e.value,
        inst: t,
      }),
    e
  );
}
function tw(e, t, r, i) {
  return t.issues.length
    ? ((e.value = r.catchValue({
        ...t,
        value: e.value,
        error: { issues: t.issues.map((s) => Xo(s, i, ti())) },
        input: e.value,
      })),
      e)
    : ((e.value = t.value), t.memo && (e.memo = !0), e);
}
const w7 = se("$ZodCatch", (e, t) => {
    (Ft.init(e, t),
      lt(e, "optin", (r) =>
        r.def.innerType._zod.optin === "defaulted" ? "defaulted" : "optional",
      ),
      lt(e, "optout", (r) => r.def.innerType._zod.optout),
      lt(e, "values", (r) => r.def.innerType._zod.values),
      (e._zod.parse = (r, i) => {
        if (i.direction === "backward") return t.innerType._zod.run(r, i);
        const s = t.innerType._zod.run({ value: r.value, issues: [] }, i);
        return s instanceof Promise
          ? s.then((l) => tw(r, l, t, i))
          : tw(r, s, t, i);
      }));
  }),
  S7 = se("$ZodPipe", (e, t) => {
    (Ft.init(e, t),
      lt(e, "values", (r) => r.def.in._zod.values),
      lt(e, "optin", (r) => r.def.in._zod.optin),
      lt(e, "optout", (r) => r.def.out._zod.optout),
      lt(e, "propValues", (r) => r.def.in._zod.propValues),
      (e._zod.parse = (r, i) => {
        if (i.direction === "backward") {
          const l = t.out._zod.run(r, i);
          return l instanceof Promise
            ? l.then((c) => ac(c, t.in, i))
            : ac(l, t.in, i);
        }
        const s = t.in._zod.run(r, i);
        return s instanceof Promise
          ? s.then((l) => ac(l, t.out, i))
          : ac(s, t.out, i);
      }));
  });
function ac(e, t, r) {
  return e.issues.some((i) => i.code !== "unrecognized_keys")
    ? ((e.aborted = !0), e)
    : t._zod.run({ value: e.value, issues: e.issues }, r);
}
const _7 = se("$ZodReadonly", (e, t) => {
  (Ft.init(e, t),
    lt(e, "propValues", (r) => r.def.innerType._zod.propValues),
    lt(e, "values", (r) => r.def.innerType._zod.values),
    lt(e, "optin", (r) => r.def.innerType?._zod?.optin),
    lt(e, "optout", (r) => r.def.innerType?._zod?.optout),
    (e._zod.parse = (r, i) => {
      if (i.direction === "backward") return t.innerType._zod.run(r, i);
      const s = t.innerType._zod.run(r, i);
      return s instanceof Promise ? s.then(nw) : nw(s);
    }));
});
function nw(e) {
  return (e.memo || (e.value = Object.freeze(e.value)), e);
}
const E7 = se("$ZodCustom", (e, t) => {
  (gn.init(e, t),
    Ft.init(e, t),
    (e._zod.parse = (r, i) => r),
    (e._zod.check = (r) => {
      const i = r.value,
        s = t.fn(i);
      if (s instanceof Promise) return s.then((l) => rw(l, r, i, e));
      rw(s, r, i, e);
    }));
});
function rw(e, t, r, i) {
  if (!e) {
    const s = {
      code: "custom",
      input: r,
      inst: i,
      path: [...(i._zod.def.path ?? [])],
      continue: !i._zod.def.abort,
    };
    (i._zod.def.params && (s.params = i._zod.def.params), t.issues.push(bl(s)));
  }
}
class x7 extends Error {
  constructor() {
    (super("Cannot parse a reference cycle that closes through a transform"),
      (this.name = "ZodCyclicError"));
  }
}
const $m = "~memo",
  aw = [];
function yE(e) {
  return e !== null && typeof e == "object";
}
function nm(e) {
  return e.map((t) => (t.path ? { ...t, path: t.path.slice() } : { ...t }));
}
const gE = new WeakMap(),
  al = 0,
  Sc = 1,
  sl = 2;
function _c(e, t, r) {
  const i = gE.get(e);
  if (i !== void 0) return i ? sl : al;
  if (t.has(e)) return sl;
  t.add(e);
  let s = al;
  const l = (y) => {
      if (s !== sl && y?._zod) {
        const g = _c(y, t);
        g > s && (s = g);
      }
    },
    c = (y, g) => {
      let v = al;
      for (const _ of Reflect.ownKeys(y)) {
        const S = Object.getOwnPropertyDescriptor(y, _);
        if (!S.enumerable) continue;
        const E = S.get ? Sc : S.value?._zod ? _c(S.value, t) : al;
        E > v && (v = E);
      }
      return v;
    },
    d = (y) => {
      y > s && (s = y);
    },
    m = e._zod.def;
  switch (m.type) {
    case "object": {
      const y = Z_(m);
      (d(y ? c(y) : Sc), l(m.catchall));
      break;
    }
    case "array":
      l(m.element);
      break;
    case "tuple":
      for (const y of m.items) l(y);
      l(m.rest);
      break;
    case "record":
    case "map":
      (l(m.keyType), l(m.valueType));
      break;
    case "set":
      l(m.valueType);
      break;
    case "union":
      for (const y of m.options) l(y);
      break;
    case "intersection":
      (l(m.left), l(m.right));
      break;
    case "optional":
    case "nullable":
    case "default":
    case "prefault":
    case "catch":
    case "readonly":
    case "nonoptional":
    case "promise":
    case "success":
      l(m.innerType);
      break;
    case "pipe":
      (l(m.in), l(m.out));
      break;
    case "function":
      (l(m.input), l(m.output));
      break;
    case "lazy": {
      const y = m._cachedInner ?? void 0;
      d(y ? _c(y, t) : Sc);
      break;
    }
    case "template_literal":
    case "string":
    case "number":
    case "int":
    case "boolean":
    case "bigint":
    case "symbol":
    case "undefined":
    case "null":
    case "void":
    case "never":
    case "any":
    case "unknown":
    case "date":
    case "nan":
    case "enum":
    case "literal":
    case "file":
    case "transform":
    case "custom":
      break;
    default:
      for (const y in m) {
        const g = Object.getOwnPropertyDescriptor(m, y);
        if (!g || g.get) continue;
        const v = g.value;
        if (!(!v || typeof v != "object")) {
          if (v._zod) l(v);
          else if (Array.isArray(v)) for (const _ of v) l(_);
        }
      }
  }
  return (t.delete(e), R7(e, s));
}
function R7(e, t) {
  return (t !== Sc && gE.set(e, t === sl), t);
}
function O7(e, t) {
  let r = e.buckets.get(t);
  return (r || ((r = new WeakMap()), e.buckets.set(t, r)), r);
}
let ic;
const oc = [],
  A7 = {
    alloc(e, t, r) {
      const i = ic;
      if (!i) return r;
      ic = void 0;
      const s = { value: r, issues: null };
      return (i.set(t.value, s), oc.push(s), r);
    },
    guard(e) {
      var t;
      ((t = e._zod).deferred ?? (t.deferred = []),
        e._zod.deferred.push(() => {
          const r = e._zod.parse,
            i = (s, l) => {
              if (l.direction !== "backward" && T7(l, s.value)) throw new x7();
              return r(s, l);
            };
          ((e._zod.parse = i), e._zod.run === r && (e._zod.run = i));
        }));
    },
    attach(e) {
      var t;
      let r,
        i = !1,
        s,
        l;
      ((t = e._zod).deferred ?? (t.deferred = []),
        e._zod.deferred.push(() => {
          const c = e._zod.parse,
            d = (m, h) => {
              if (r === void 0) {
                const T = _c(e, new Set());
                if (T === al)
                  return (
                    (e._zod.parse = c),
                    e._zod.run === d && (e._zod.run = c),
                    c(m, h)
                  );
                T === sl || i ? (r = !0) : (i = !0);
              }
              const y = m.value;
              if (!yE(y)) return c(m, h);
              let g = h[$m];
              g ||
                ((g = { buckets: new WeakMap(), backEdges: void 0 }),
                (h[$m] = g));
              let v;
              s === h ? (v = l) : ((v = O7(g, e)), (s = h), (l = v));
              const _ = v.get(y);
              if (_)
                return (
                  (m.value = _.value),
                  _.issues
                    ? _.issues.length && m.issues.push(...nm(_.issues))
                    : ((m.memo = !0),
                      g.backEdges ?? (g.backEdges = new WeakSet()),
                      g.backEdges.add(_.value)),
                  m
                );
              ic = v;
              const S = oc.length,
                E = c(m, h);
              ic = void 0;
              const x = oc.length > S ? oc.pop() : void 0;
              return E instanceof Promise
                ? E.then(
                    (T) => (
                      x && (x.issues = T.issues.length ? nm(T.issues) : aw),
                      T
                    ),
                  )
                : (x && (x.issues = E.issues.length ? nm(E.issues) : aw), E);
            };
          ((e._zod.parse = d), e._zod.run === c && (e._zod.run = d));
        }));
    },
  };
function C7() {
  return A7;
}
function T7(e, t) {
  const r = e[$m]?.backEdges;
  return r !== void 0 && yE(t) && r.has(t);
}
const D7 = () => {
  const e = {
    string: { unit: "characters", verb: "to have" },
    file: { unit: "bytes", verb: "to have" },
    array: { unit: "items", verb: "to have" },
    set: { unit: "items", verb: "to have" },
    map: { unit: "entries", verb: "to have" },
  };
  function t(l) {
    return e[l] ?? null;
  }
  const r = {
      regex: "input",
      email: "email address",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO datetime",
      date: "ISO date",
      time: "ISO time",
      duration: "ISO duration",
      ipv4: "IPv4 address",
      ipv6: "IPv6 address",
      mac: "MAC address",
      cidrv4: "IPv4 range",
      cidrv6: "IPv6 range",
      base64: "base64-encoded string",
      base64url: "base64url-encoded string",
      json_string: "JSON string",
      e164: "E.164 number",
      currency_code: "currency code",
      credit_card: "credit card number",
      iban: "IBAN",
      jwt: "JWT",
      template_literal: "input",
    },
    i = { nan: "NaN" };
  function s(l, c) {
    return l === "number" && typeof c == "number" && !Number.isFinite(c)
      ? String(c)
      : (i[l] ?? l);
  }
  return (l) => {
    switch (l.code) {
      case "invalid_type": {
        const c = s(l.expected),
          d = ak(l.input),
          m = s(d, l.input);
        return `Invalid input: expected ${c}, received ${m}`;
      }
      case "invalid_value":
        return l.values.length === 1
          ? `Invalid input: expected ${Q_(l.values[0])}`
          : `Invalid option: expected one of ${B1(l.values, "|")}`;
      case "too_big": {
        const c = l.exact ? "exactly " : l.inclusive ? "<=" : "<",
          d = t(l.origin);
        return d
          ? `Too big: expected ${l.origin ?? "value"} to have ${c}${l.maximum.toString()} ${d.unit ?? "elements"}`
          : `Too big: expected ${l.origin ?? "value"} to be ${c}${l.maximum.toString()}`;
      }
      case "too_small": {
        const c = l.exact ? "exactly " : l.inclusive ? ">=" : ">",
          d = t(l.origin);
        return d
          ? `Too small: expected ${l.origin} to have ${c}${l.minimum.toString()} ${d.unit}`
          : `Too small: expected ${l.origin} to be ${c}${l.minimum.toString()}`;
      }
      case "invalid_format": {
        const c = l;
        return c.format === "starts_with"
          ? `Invalid string: must start with "${c.prefix}"`
          : c.format === "ends_with"
            ? `Invalid string: must end with "${c.suffix}"`
            : c.format === "includes"
              ? `Invalid string: must include "${c.includes}"`
              : c.format === "regex"
                ? `Invalid string: must match pattern ${c.pattern}`
                : `Invalid ${r[c.format] ?? l.format}`;
      }
      case "not_multiple_of":
        return `Invalid number: must be a multiple of ${l.divisor}`;
      case "unrecognized_keys":
        return `Unrecognized key${l.keys.length > 1 ? "s" : ""}: ${B1(l.keys, ", ")}`;
      case "invalid_key":
        return `Invalid key in ${l.origin}`;
      case "invalid_union":
        return l.options && Array.isArray(l.options) && l.options.length > 0
          ? `Invalid discriminator value. Expected ${l.options.map((d) => `'${d}'`).join(" | ")}`
          : l.inclusive === !1
            ? "Invalid input: more than one option matched"
            : "Invalid input";
      case "invalid_element":
        return `Invalid value in ${l.origin}`;
      default:
        return "Invalid input";
    }
  };
};
function M7() {
  return { localeError: D7() };
}
var iw;
class N7 {
  constructor() {
    ((this._map = new WeakMap()), (this._idmap = new Map()));
  }
  add(t, ...r) {
    const i = r[0];
    return (
      this._map.set(t, i),
      i && typeof i == "object" && "id" in i && this._idmap.set(i.id, t),
      this
    );
  }
  clear() {
    return ((this._map = new WeakMap()), (this._idmap = new Map()), this);
  }
  remove(t) {
    const r = this._map.get(t);
    return (
      r && typeof r == "object" && "id" in r && this._idmap.delete(r.id),
      this._map.delete(t),
      this
    );
  }
  get(t) {
    const r = t._zod.parent;
    if (r) {
      const i = { ...(this.get(r) ?? {}) };
      delete i.id;
      const s = { ...i, ...this._map.get(t) };
      return Object.keys(s).length ? s : void 0;
    }
    return this._map.get(t);
  }
  has(t) {
    return this._map.has(t);
  }
}
function z7() {
  return new N7();
}
(iw = globalThis).__zod_globalRegistry ?? (iw.__zod_globalRegistry = z7());
const il = globalThis.__zod_globalRegistry;
function vE(e) {
  return (e.checks && (e.checks = [...e.checks]), e);
}
function k7(e, t) {
  return new e(vE({ type: "string", ...ze(t) }));
}
function j7(e, t) {
  return new e({
    type: "string",
    format: "email",
    check: "string_format",
    abort: !1,
    ...ze(t),
  });
}
function L7(e, t) {
  return new e({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: !1,
    ...ze(t),
  });
}
function U7(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    ...ze(t),
  });
}
function P7(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v4",
    ...ze(t),
  });
}
function F7(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v6",
    ...ze(t),
  });
}
function B7(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v7",
    ...ze(t),
  });
}
function V7(e, t) {
  return new e({
    type: "string",
    format: "url",
    check: "string_format",
    abort: !1,
    ...ze(t),
  });
}
function $7(e, t) {
  return new e({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: !1,
    ...ze(t),
  });
}
function H7(e, t) {
  return new e({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: !1,
    ...ze(t),
  });
}
function I7(e, t) {
  return new e({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: !1,
    ...ze(t),
  });
}
function Z7(e, t) {
  return new e({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: !1,
    ...ze(t),
  });
}
function q7(e, t) {
  return new e({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: !1,
    ...ze(t),
  });
}
function G7(e, t) {
  return new e({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: !1,
    ...ze(t),
  });
}
function Y7(e, t) {
  return new e({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: !1,
    ...ze(t),
  });
}
function K7(e, t) {
  return new e({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: !1,
    ...ze(t),
  });
}
function Q7(e, t) {
  return new e({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: !1,
    ...ze(t),
  });
}
function X7(e, t) {
  return new e({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: !1,
    ...ze(t),
  });
}
function J7(e, t) {
  return new e({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: !1,
    ...ze(t),
  });
}
function W7(e, t) {
  return new e({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: !1,
    ...ze(t),
  });
}
function e5(e, t) {
  return new e({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: !1,
    ...ze(t),
  });
}
function t5(e, t) {
  return new e({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: !1,
    ...ze(t),
  });
}
function n5(e, t) {
  return new e({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: !1,
    ...ze(t),
  });
}
function r5(e, t) {
  return new e({
    type: "string",
    format: "datetime",
    check: "string_format",
    offset: !1,
    local: !1,
    precision: null,
    ...ze(t),
  });
}
function a5(e, t) {
  return new e({
    type: "string",
    format: "date",
    check: "string_format",
    ...ze(t),
  });
}
function i5(e, t) {
  return new e({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...ze(t),
  });
}
function o5(e, t) {
  return new e({
    type: "string",
    format: "duration",
    check: "string_format",
    ...ze(t),
  });
}
function s5(e, t) {
  return new e(vE({ type: "number", checks: [], ...ze(t) }));
}
function l5(e, t) {
  return new e({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "safeint",
    ...ze(t),
  });
}
function u5(e) {
  return new e({ type: "unknown" });
}
function c5(e, t) {
  return new e({ type: "never", ...ze(t) });
}
function ow(e, t) {
  return new rE({ check: "less_than", ...ze(t), value: e, inclusive: !1 });
}
function rm(e, t) {
  return new rE({ check: "less_than", ...ze(t), value: e, inclusive: !0 });
}
function sw(e, t) {
  return new aE({ check: "greater_than", ...ze(t), value: e, inclusive: !1 });
}
function am(e, t) {
  return new aE({ check: "greater_than", ...ze(t), value: e, inclusive: !0 });
}
function lw(e, t) {
  return new l8({ check: "multiple_of", ...ze(t), value: e });
}
function bE(e, t) {
  return new c8({ check: "max_length", ...ze(t), maximum: e });
}
function $c(e, t) {
  return new f8({ check: "min_length", ...ze(t), minimum: e });
}
function wE(e, t) {
  return new d8({ check: "length_equals", ...ze(t), length: e });
}
function f5(e, t) {
  return new h8({
    check: "string_format",
    format: "regex",
    ...ze(t),
    pattern: e,
  });
}
function d5(e) {
  return new m8({ check: "string_format", format: "lowercase", ...ze(e) });
}
function h5(e) {
  return new p8({ check: "string_format", format: "uppercase", ...ze(e) });
}
function m5(e, t) {
  return new y8({
    check: "string_format",
    format: "includes",
    ...ze(t),
    includes: e,
  });
}
function p5(e, t) {
  return new g8({
    check: "string_format",
    format: "starts_with",
    ...ze(t),
    prefix: e,
  });
}
function y5(e, t) {
  return new v8({
    check: "string_format",
    format: "ends_with",
    ...ze(t),
    suffix: e,
  });
}
function g5(e, t) {
  return new b8({ check: "properties", shape: e, ...ze(t) });
}
function Jo(e) {
  return new w8({ check: "overwrite", tx: e });
}
function v5(e) {
  return Jo((t) => t.normalize(e));
}
function b5() {
  return Jo((e) => e.trim());
}
function w5() {
  return Jo((e) => e.toLowerCase());
}
function S5() {
  return Jo((e) => e.toUpperCase());
}
function _5() {
  return Jo((e) => Z6(e));
}
function E5(e, t, r) {
  return new e({ type: "array", element: t, ...ze(r) });
}
function x5(e, t, r) {
  return new e({ type: "custom", check: "custom", fn: t, ...ze(r) });
}
function R5(e, t) {
  const r = O5(
    (i) => (
      (i.addIssue = (s) => {
        if (typeof s == "string") i.issues.push(bl(s, i.value, r._zod.def));
        else {
          const l = s;
          (l.fatal && (l.continue = !1),
            l.code ?? (l.code = "custom"),
            "input" in l || (l.input = i.value),
            l.inst ?? (l.inst = r),
            l.continue ?? (l.continue = !r._zod.def.abort),
            i.issues.push(bl(l)));
        }
      }),
      e(i.value, i)
    ),
    t,
  );
  return r;
}
function O5(e, t) {
  const r = new gn({ check: "custom", ...ze(t) });
  return ((r._zod.check = e), r);
}
function ll(e, ...t) {
  for (const r of t)
    for (const i of Reflect.ownKeys(r))
      Object.prototype.propertyIsEnumerable.call(r, i) && Bi(e, i, r[i]);
  return e;
}
function SE(e) {
  let t = e?.target ?? "draft-2020-12";
  return (
    t === "draft-4" && (t = "draft-04"),
    t === "draft-7" && (t = "draft-07"),
    {
      processors: e.processors ?? {},
      metadataRegistry: e?.metadata ?? il,
      target: t,
      unrepresentable: e?.unrepresentable ?? "throw",
      override: e?.override ?? (() => {}),
      io: e?.io ?? "output",
      counter: 0,
      seen: new Map(),
      sharedDefsExtractedFor: void 0,
      sharedEmitDoneFor: void 0,
      cycles: e?.cycles ?? "ref",
      reused: e?.reused ?? "inline",
      intersections: [],
      deferred: [],
      external: e?.external ?? void 0,
    }
  );
}
function Wo(e, t, r, i, s) {
  const l =
    typeof t.unrepresentable == "function"
      ? t.unrepresentable({ zodSchema: e, path: i.path, message: s })
      : t.unrepresentable;
  if (l === "any") return !1;
  if (l === void 0 || l === "throw") throw new Error(s);
  return (Object.assign(r, l), !0);
}
function ln(e, t, r = { path: [], schemaPath: [] }) {
  var i;
  const s = e._zod.def,
    l = t.seen.get(e);
  if (l)
    return (
      l.count++,
      r.schemaPath.includes(e) && (l.cycle = r.path),
      l.schema
    );
  const c = { schema: {}, count: 1, cycle: void 0, path: r.path };
  (t.seen.set(e, c),
    (t.sharedDefsExtractedFor = void 0),
    (t.sharedEmitDoneFor = void 0));
  const d = e._zod.toJSONSchema?.();
  if (d) c.schema = d;
  else {
    const y = { ...r, schemaPath: [...r.schemaPath, e], path: r.path };
    if (e._zod.processJSONSchema) e._zod.processJSONSchema(t, c.schema, y);
    else {
      const v = c.schema,
        _ = t.processors[s.type];
      if (!_)
        throw new Error(
          `[toJSONSchema]: Non-representable type encountered: ${s.type}`,
        );
      _(e, t, v, y);
    }
    const g = e._zod.parent;
    g && (c.ref || (c.ref = g), ln(g, t, y), (t.seen.get(g).isParent = !0));
  }
  const m = t.metadataRegistry.get(e);
  return (
    m && ll(c.schema, m),
    t.io === "input" &&
      pn(e) &&
      (delete c.schema.examples, delete c.schema.default),
    t.io === "input" &&
      "_prefault" in c.schema &&
      ((i = c.schema).default ?? (i.default = c.schema._prefault)),
    delete c.schema._prefault,
    t.seen.get(e).schema
  );
}
function uw(e) {
  return e.replace(/~/g, "~0").replace(/\//g, "~1");
}
function _E(e, t) {
  const r = e.seen.get(t);
  if (!r) throw new Error("Unprocessed schema. This is a bug in Zod.");
  if (e.external && e.sharedDefsExtractedFor === e.external) return;
  const i = new Map();
  for (const c of e.seen.entries()) {
    const d = e.metadataRegistry.get(c[0])?.id;
    if (d) {
      const m = i.get(d);
      if (m && m !== c[0])
        throw new Error(
          `Duplicate schema id "${d}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`,
        );
      i.set(d, c[0]);
    }
  }
  const s = (c) => {
      const d = e.target === "draft-2020-12" ? "$defs" : "definitions";
      if (e.external) {
        const g = e.external.registry.get(c[0])?.id,
          v = e.external.uri ?? ((S) => S);
        if (g) return { ref: v(g) };
        const _ = c[1].defId ?? c[1].schema.id ?? `schema${e.counter++}`;
        return (
          (c[1].defId = _),
          { defId: _, ref: `${v("__shared")}#/${d}/${uw(_)}` }
        );
      }
      const m = "#",
        h = `${m}/${d}/`;
      if (c[1] === r && !c[1].schema.id) return { ref: m };
      const y = c[1].schema.id ?? `__schema${e.counter++}`;
      return { defId: y, ref: h + uw(y) };
    },
    l = (c) => {
      if (c[1].schema.$ref) return;
      const d = c[1],
        { ref: m, defId: h } = s(c);
      ((d.def = { ...d.schema }), h && (d.defId = h));
      const y = d.schema;
      for (const g in y) delete y[g];
      y.$ref = m;
    };
  if (e.cycles === "throw")
    for (const c of e.seen.entries()) {
      const d = c[1];
      if (d.cycle)
        throw new Error(`Cycle detected: #/${d.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
    }
  for (const c of e.seen.entries()) {
    const d = c[1];
    if (t === c[0]) {
      l(c);
      continue;
    }
    if (e.external) {
      const h = e.external.registry.get(c[0])?.id;
      if (t !== c[0] && h) {
        l(c);
        continue;
      }
    }
    if (e.metadataRegistry.get(c[0])?.id) {
      l(c);
      continue;
    }
    if (d.cycle) {
      l(c);
      continue;
    }
    d.count > 1 && e.reused === "ref" && l(c);
  }
  e.external && (e.sharedDefsExtractedFor = e.external);
}
function EE(e) {
  const t = e.anyOf;
  if (!Array.isArray(t) || t.length === 0 || e.type !== void 0) return;
  const r = [];
  for (const i of t) {
    if (!i || typeof i != "object") return;
    EE(i);
    const s = Object.keys(i);
    if (s.length !== 1 || s[0] !== "type") return;
    const l = i.type;
    for (const c of Array.isArray(l) ? l : [l]) {
      if (typeof c != "string") return;
      r.includes(c) || r.push(c);
    }
  }
  (delete e.anyOf, (e.type = r.length === 1 ? r[0] : r));
}
const xE = new Set(["type", "properties", "required", "additionalProperties"]),
  cw = ["oneOf", "anyOf"];
function fw(e) {
  const t = e.additionalProperties;
  return t === void 0 || t === !1 || typeof t != "object" || t === null
    ? null
    : Object.keys(t).length
      ? t
      : null;
}
function Hm(e) {
  const t = [];
  for (const l of e) {
    if (typeof l != "object" || l.type !== "object") return null;
    for (const c in l) if (!xE.has(c)) return null;
    t.push(l);
  }
  const r = {},
    i = new Set();
  for (const l of t) {
    for (const c in l.properties) {
      if (Object.prototype.hasOwnProperty.call(r, c)) continue;
      const d = [];
      for (const h of t) {
        const y = h.properties?.[c] ?? fw(h);
        y != null &&
          (d.some((g) => JSON.stringify(g) === JSON.stringify(y)) || d.push(y));
      }
      const m = d.length === 1 ? d[0] : (Hm(d) ?? { allOf: d });
      Bi(r, c, m);
    }
    for (const c of l.required ?? []) i.add(c);
  }
  const s = { type: "object", properties: r };
  if (
    (i.size && (s.required = [...i]),
    t.every((l) => l.additionalProperties === !1))
  )
    s.additionalProperties = !1;
  else {
    const l = [];
    for (const c of t) {
      const d = fw(c);
      d && !l.some((m) => JSON.stringify(m) === JSON.stringify(d)) && l.push(d);
    }
    l.length === 1
      ? (s.additionalProperties = l[0])
      : l.length > 1 && (s.additionalProperties = { allOf: l });
  }
  return s;
}
function A5(e) {
  const t = e.allOf;
  if (!Array.isArray(t) || t.length < 2) return;
  for (const s of xE) if (s in e) return;
  const r = t.filter((s) => cw.some((l) => Array.isArray(s[l])));
  let i = null;
  if (!r.length) i = Hm(t);
  else {
    const s = r[0],
      l = cw.find((m) => Array.isArray(s[m]));
    if (Object.keys(s).length !== 1) return;
    const c = t.filter((m) => m !== s),
      d = s[l].map((m) => Hm([...c, m]));
    if (d.some((m) => !m)) return;
    i = { [l]: d };
  }
  i && (delete e.allOf, ll(e, i));
}
function RE(e, t) {
  const r = e.seen.get(t);
  if (!r) throw new Error("Unprocessed schema. This is a bug in Zod.");
  const i = (d) => {
    const m = e.seen.get(d);
    if (m.ref === null) return;
    const h = m.def ?? m.schema,
      y = { ...h },
      g = m.ref;
    if (((m.ref = null), g)) {
      i(g);
      const _ = e.seen.get(g),
        S = _.schema;
      if (
        (S.$ref &&
        (e.target === "draft-07" ||
          e.target === "draft-04" ||
          e.target === "openapi-3.0")
          ? ((h.allOf = h.allOf ?? []), h.allOf.push(S))
          : ll(h, S),
        ll(h, y),
        d._zod.parent === g)
      )
        for (const x in h)
          x === "$ref" || x === "allOf" || x in y || delete h[x];
      if (S.$ref && _.def)
        for (const x in h)
          x === "$ref" ||
            x === "allOf" ||
            (x in _.def &&
              JSON.stringify(h[x]) === JSON.stringify(_.def[x]) &&
              delete h[x]);
    }
    const v = d._zod.parent;
    if (v && v !== g) {
      i(v);
      const _ = e.seen.get(v);
      if (_?.schema.$ref && ((h.$ref = _.schema.$ref), _.def))
        for (const S in h)
          S === "$ref" ||
            S === "allOf" ||
            (S in _.def &&
              JSON.stringify(h[S]) === JSON.stringify(_.def[S]) &&
              delete h[S]);
    }
    e.override({ zodSchema: d, jsonSchema: h, path: m.path ?? [] });
  };
  if (!e.external || e.sharedEmitDoneFor !== e.external) {
    for (const d of [...e.seen.entries()].reverse()) i(d[0]);
    if (e.target !== "openapi-3.0")
      for (const d of e.seen.entries()) EE(d[1].def ?? d[1].schema);
    for (const d of e.deferred) d();
    if (e.intersections.length) {
      const d = new Map();
      for (const m of e.seen.values())
        for (const h of [m.schema, m.def]) {
          const y = h?.allOf;
          if (!Array.isArray(y)) continue;
          const g = d.get(y);
          g ? g.push(h) : d.set(y, [h]);
        }
      for (const m of e.intersections) for (const h of d.get(m) ?? []) A5(h);
    }
  }
  const s = {};
  if (
    (e.target === "draft-2020-12"
      ? (s.$schema = "https://json-schema.org/draft/2020-12/schema")
      : e.target === "draft-07"
        ? (s.$schema = "http://json-schema.org/draft-07/schema#")
        : e.target === "draft-04"
          ? (s.$schema = "http://json-schema.org/draft-04/schema#")
          : e.target,
    e.external?.uri)
  ) {
    const d = e.external.registry.get(t)?.id;
    if (!d) throw new Error("Schema is missing an `id` property");
    s.$id = e.external.uri(d);
  }
  ll(s, r.defId ? r.schema : (r.def ?? r.schema));
  const l = e.metadataRegistry.get(t)?.id;
  l !== void 0 && s.id === l && delete s.id;
  const c = e.external?.defs ?? {};
  if (!e.external || e.sharedEmitDoneFor !== e.external)
    for (const d of e.seen.entries()) {
      const m = d[1];
      m.def &&
        m.defId &&
        (m.def.id === m.defId && delete m.def.id, Bi(c, m.defId, m.def));
    }
  (e.external && (e.sharedEmitDoneFor = e.external),
    e.external ||
      (Object.keys(c).length > 0 &&
        (e.target === "draft-2020-12" ? (s.$defs = c) : (s.definitions = c))));
  try {
    const d = JSON.parse(JSON.stringify(s));
    return (
      Object.defineProperty(d, "~standard", {
        value: {
          ...t["~standard"],
          jsonSchema: {
            input: Hc(t, "input", e.processors),
            output: Hc(t, "output", e.processors),
          },
        },
        enumerable: !1,
        writable: !1,
      }),
      d
    );
  } catch {
    throw new Error("Error converting schema to JSON.");
  }
}
function pn(e, t) {
  const r = t ?? { seen: new Set() };
  if (r.seen.has(e)) return !1;
  r.seen.add(e);
  const i = e._zod.def;
  if (i.type === "transform") return !0;
  if (i.type === "array") return pn(i.element, r);
  if (i.type === "set") return pn(i.valueType, r);
  if (i.type === "lazy") return pn(i.getter(), r);
  if (
    i.type === "promise" ||
    i.type === "optional" ||
    i.type === "nonoptional" ||
    i.type === "nullable" ||
    i.type === "readonly" ||
    i.type === "default" ||
    i.type === "prefault" ||
    i.type === "catch"
  )
    return pn(i.innerType, r);
  if (i.type === "intersection") return pn(i.left, r) || pn(i.right, r);
  if (i.type === "record" || i.type === "map")
    return pn(i.keyType, r) || pn(i.valueType, r);
  if (i.type === "pipe")
    return e._zod.traits.has("$ZodCodec") ? !0 : pn(i.in, r) || pn(i.out, r);
  if (i.type === "object") {
    for (const s in i.shape) if (pn(i.shape[s], r)) return !0;
    return !1;
  }
  if (i.type === "union") {
    for (const s of i.options) if (pn(s, r)) return !0;
    return !1;
  }
  if (i.type === "tuple") {
    for (const s of i.items) if (pn(s, r)) return !0;
    return !!(i.rest && pn(i.rest, r));
  }
  return !1;
}
const C5 =
    (e, t = {}) =>
    (r) => {
      const i = SE({ ...r, processors: t });
      return (ln(e, i), _E(i, e), RE(i, e));
    },
  Hc =
    (e, t, r = {}) =>
    (i) => {
      const { libraryOptions: s, target: l } = i ?? {},
        c = SE({ ...(s ?? {}), target: l, io: t, processors: r });
      return (ln(e, c), _E(c, e), RE(c, e));
    },
  Bo = (e, t, r) => {
    (e[t] === void 0 || r > e[t]) && (e[t] = r);
  },
  Vo = (e, t, r) => {
    (e[t] === void 0 || r < e[t]) && (e[t] = r);
  },
  dw = (e, t) => {
    (Bo(e, "minimum", t), Vo(e, "maximum", t));
  },
  OE = (e, t) => {
    (e.multipleOf ?? (e.multipleOf = []),
      e.multipleOf.includes(t) || e.multipleOf.push(t));
  },
  AE = (e, t) => {
    (e.patterns ?? (e.patterns = new Set()), e.patterns.add(t));
  },
  CE = (e, t) => {
    e.mime = e.mime ? e.mime.filter((r) => t.includes(r)) : [...t];
  },
  TE = (e, t) => {
    ((e.format = t), t.includes("int") && (e.isInt = !0));
  },
  hw = (e, t) => Bo(e, "minimum", t.minimum),
  mw = (e, t) => Vo(e, "maximum", t.maximum),
  pw = (e) => (t, r) => {
    TE(t, r.format);
    const [i, s] = e[r.format];
    (Bo(t, "minimum", i), Vo(t, "maximum", s));
  },
  T5 = {
    greater_than: (e, t) =>
      Bo(e, t.inclusive ? "minimum" : "exclusiveMinimum", t.value),
    less_than: (e, t) =>
      Vo(e, t.inclusive ? "maximum" : "exclusiveMaximum", t.value),
    multiple_of: (e, t) => OE(e, t.value),
    number_format: pw(X_),
    bigint_format: pw(K6),
    min_length: hw,
    max_length: mw,
    length_equals: (e, t) => dw(e, t.length),
    min_size: hw,
    max_size: mw,
    size_equals: (e, t) => dw(e, t.size),
    string_format: (e, t) => {
      (TE(e, t.format),
        t.pattern && AE(e, t.pattern),
        (t.format === "base64" || t.format === "base64url") &&
          (e.contentEncoding = t.format),
        (t.local || t.precision === -1) && (e.laxFormat = !0));
    },
    mime_type: (e, t) => CE(e, t.mime),
  };
function Tr(e) {
  const t = {},
    r = e._zod.def,
    i = e._zod.traits.has("$ZodCheck")
      ? [e, ...(r.checks ?? [])]
      : (r.checks ?? []);
  for (const l of i) T5[l._zod.def.check]?.(t, l._zod.def);
  const s = e._zod.bag;
  (s.minimum !== void 0 && Bo(t, "minimum", s.minimum),
    s.exclusiveMinimum !== void 0 &&
      Bo(t, "exclusiveMinimum", s.exclusiveMinimum),
    s.maximum !== void 0 && Vo(t, "maximum", s.maximum),
    s.exclusiveMaximum !== void 0 &&
      Vo(t, "exclusiveMaximum", s.exclusiveMaximum),
    s.multipleOf !== void 0 && OE(t, s.multipleOf),
    s.format !== void 0 &&
      (t.format ?? (t.format = s.format),
      s.format.includes("int") && (t.isInt = !0)),
    s.mime && CE(t, s.mime));
  for (const l of s.patterns ?? []) AE(t, l);
  return t;
}
const D5 = {
    guid: "uuid",
    url: "uri",
    datetime: "date-time",
    json_string: "json-string",
    regex: "",
  },
  M5 = new Map([
    [fE, Qk],
    [sy, Xk],
  ]),
  N5 = (e) => M5.get(e) ?? e,
  z5 = (e, t, r, i) => {
    const s = r;
    s.type = "string";
    const {
      minimum: l,
      maximum: c,
      format: d,
      patterns: m,
      contentEncoding: h,
      laxFormat: y,
    } = Tr(e);
    if (
      (typeof l == "number" && (s.minLength = l),
      typeof c == "number" && (s.maxLength = c),
      d &&
        ((s.format = D5[d] ?? d),
        s.format === "" && delete s.format,
        (d === "time" || y) && delete s.format),
      h && (s.contentEncoding = h),
      m && m.size > 0)
    ) {
      const g = [...m].map(N5);
      g.length === 1
        ? (s.pattern = g[0].source)
        : g.length > 1 &&
          (s.allOf = [
            ...g.map((v) => ({
              ...(t.target === "draft-07" ||
              t.target === "draft-04" ||
              t.target === "openapi-3.0"
                ? { type: "string" }
                : {}),
              pattern: v.source,
            })),
          ]);
    }
  },
  k5 = (e, t, r, i) => {
    const s = r,
      {
        minimum: l,
        maximum: c,
        multipleOf: d,
        exclusiveMaximum: m,
        exclusiveMinimum: h,
        isInt: y,
      } = Tr(e);
    s.type = y ? "integer" : "number";
    const g = typeof h == "number" && h >= (l ?? Number.NEGATIVE_INFINITY),
      v = typeof m == "number" && m <= (c ?? Number.POSITIVE_INFINITY),
      _ = t.target === "draft-04" || t.target === "openapi-3.0";
    if (
      (g
        ? _
          ? ((s.minimum = h), (s.exclusiveMinimum = !0))
          : (s.exclusiveMinimum = h)
        : typeof l == "number" && (s.minimum = l),
      v
        ? _
          ? ((s.maximum = m), (s.exclusiveMaximum = !0))
          : (s.exclusiveMaximum = m)
        : typeof c == "number" && (s.maximum = c),
      d)
    ) {
      const S = new Set();
      for (const T of d)
        Number.isFinite(T) && T !== 0
          ? S.add(Math.abs(T))
          : Wo(
              e,
              t,
              s,
              i,
              `A multipleOf divisor of ${T} cannot be represented in JSON Schema`,
            );
      const [E, ...x] = S;
      (E !== void 0 && (s.multipleOf = E),
        x.length &&
          (s.allOf = [
            ...(s.allOf ?? []),
            ...x.map((T) => ({ multipleOf: T })),
          ]));
    }
  },
  j5 = (e, t, r, i) => {
    r.not = {};
  },
  L5 = (e, t, r, i) => {},
  U5 = (e, t, r, i) => {
    const s = e._zod.def,
      l = Um(s.entries);
    if (l.length === 0) {
      r.not = {};
      return;
    }
    (l.every((c) => typeof c == "number") && (r.type = "number"),
      l.every((c) => typeof c == "string") && (r.type = "string"),
      (r.enum = l));
  },
  P5 = (e, t, r, i) => {
    Wo(e, t, r, i, "Custom types cannot be represented in JSON Schema");
  },
  F5 = (e, t, r, i) => {
    Wo(e, t, r, i, "Transforms cannot be represented in JSON Schema");
  },
  B5 = (e, t, r, i) => {
    const s = r,
      l = e._zod.def,
      { minimum: c, maximum: d } = Tr(e);
    (typeof c == "number" && (s.minItems = c),
      typeof d == "number" && (s.maxItems = d),
      (s.type = "array"),
      (s.items = ln(l.element, t, { ...i, path: [...i.path, "items"] })));
  };
function Im(e) {
  const t = e._zod.def;
  return t.type === "pipe" && t.in._zod.traits.has("$ZodTransform")
    ? Im(t.out)
    : t.type === "catch"
      ? Im(t.innerType)
      : e._zod.optin;
}
const V5 = (e, t, r, i) => {
    const s = r,
      l = e._zod.def,
      c = l.shape;
    if (
      Object.getOwnPropertySymbols(c).length &&
      Wo(e, t, s, i, "Symbol keys cannot be represented in JSON Schema")
    )
      return;
    ((s.type = "object"), (s.properties = {}));
    for (const h in c)
      Bi(
        s.properties,
        h,
        ln(c[h], t, { ...i, path: [...i.path, "properties", h] }),
      );
    const m = [];
    for (const h of Object.keys(c)) {
      const y = l.shape[h];
      (t.io === "input" ? Im(y) === void 0 : y._zod.optout === void 0) &&
        m.push(h);
    }
    (m.length > 0 && (s.required = m),
      l.catchall?._zod.def.type === "never"
        ? (s.additionalProperties = !1)
        : l.catchall
          ? l.catchall &&
            (s.additionalProperties = ln(l.catchall, t, {
              ...i,
              path: [...i.path, "additionalProperties"],
            }))
          : t.io === "output" && (s.additionalProperties = !1));
  },
  $5 = (e, t, r, i) => {
    const s = e._zod.def,
      l = s.inclusive === !1,
      c = s.options.map((d, m) =>
        ln(d, t, { ...i, path: [...i.path, l ? "oneOf" : "anyOf", m] }),
      );
    l ? (r.oneOf = c) : (r.anyOf = c);
  },
  H5 = (e, t, r, i) => {
    const s = e._zod.def,
      l = ln(s.left, t, { ...i, path: [...i.path, "allOf", 0] }),
      c = ln(s.right, t, { ...i, path: [...i.path, "allOf", 1] }),
      d = (h) => "allOf" in h && Object.keys(h).length === 1,
      m = [...(d(l) ? l.allOf : [l]), ...(d(c) ? c.allOf : [c])];
    ((r.allOf = m), t.intersections.push(m));
  },
  I5 = (e, t, r, i) => {
    const s = e._zod.def,
      l = ln(s.innerType, t, i),
      c = t.seen.get(e);
    t.target === "openapi-3.0"
      ? ((c.ref = s.innerType), (r.nullable = !0))
      : (r.anyOf = [l, { type: "null" }]);
  },
  Z5 = (e, t, r, i) => {
    const s = e._zod.def;
    ln(s.innerType, t, i);
    const l = t.seen.get(e);
    l.ref = s.innerType;
  },
  ly = Symbol();
function DE(e, t, r, i, s) {
  let l = !1;
  const c = JSON.stringify(e, (d, m) =>
    typeof m != "bigint" ? m : ((l = !0), null),
  );
  return l
    ? (Wo(t, r, i, s, "BigInt defaults cannot be represented in JSON Schema"),
      ly)
    : JSON.parse(c);
}
const q5 = (e, t, r, i) => {
    const s = e._zod.def;
    ln(s.innerType, t, i);
    const l = t.seen.get(e);
    l.ref = s.innerType;
    const c = DE(s.defaultValue, e, t, r, i);
    c !== ly && (r.default = c);
  },
  G5 = (e, t, r, i) => {
    const s = e._zod.def;
    ln(s.innerType, t, i);
    const l = t.seen.get(e);
    if (((l.ref = s.innerType), t.io !== "input")) return;
    const c = DE(s.defaultValue, e, t, r, i);
    c !== ly && (r._prefault = c);
  },
  Y5 = (e, t, r, i) => {
    const s = e._zod.def;
    ln(s.innerType, t, i);
    const l = t.seen.get(e);
    l.ref = s.innerType;
    let c;
    try {
      c = s.catchValue(void 0);
    } catch {
      Wo(e, t, r, i, "Dynamic catch values are not supported in JSON Schema");
      return;
    }
    r.default = c;
  },
  K5 = (e, t, r, i) => {
    const s = e._zod.def,
      l = s.in._zod.traits.has("$ZodTransform"),
      c = t.io === "input" ? (l ? s.out : s.in) : s.out;
    ln(c, t, i);
    const d = t.seen.get(e);
    d.ref = c;
  },
  Q5 = (e, t, r, i) => {
    const s = e._zod.def;
    ln(s.innerType, t, i);
    const l = t.seen.get(e);
    ((l.ref = s.innerType), (r.readOnly = !0));
  },
  ME = (e, t, r, i) => {
    const s = e._zod.def;
    ln(s.innerType, t, i);
    const l = t.seen.get(e);
    l.ref = s.innerType;
  },
  yw = new WeakSet([Object.prototype, Error.prototype]);
function sc(e, t, r) {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    get() {
      const i = r(this);
      return (
        Object.defineProperty(this, t, {
          value: i,
          configurable: !0,
          writable: !0,
        }),
        i
      );
    },
    set(i) {
      Object.defineProperty(this, t, {
        value: i,
        configurable: !0,
        writable: !0,
      });
    },
  });
}
const X5 = (e, t) => {
    (gk.init(e, t), (e.name = "ZodError"));
    const r = Object.getPrototypeOf(e);
    yw.has(r) ||
      (yw.add(r),
      sc(r, "format", (i) => (s) => wk(i, s)),
      sc(r, "flatten", (i) => (s) => bk(i, s)),
      sc(r, "addIssue", (i) => (s) => {
        (i.issues.push(s), (i.message = JSON.stringify(i.issues, Pm, 2)));
      }),
      sc(r, "addIssues", (i) => (s) => {
        (i.issues.push(...s), (i.message = JSON.stringify(i.issues, Pm, 2)));
      }),
      Object.defineProperty(r, "isEmpty", {
        configurable: !0,
        enumerable: !1,
        get() {
          return this.issues.length === 0;
        },
      }));
  },
  sr = se("ZodError", X5, void 0, { Parent: Error }),
  J5 = ty(sr),
  W5 = ny(sr),
  e9 = ry(sr),
  t9 = ay(sr),
  n9 = Ok(sr),
  r9 = Ak(sr),
  a9 = Ck(sr),
  i9 = Tk(sr),
  o9 = Dk(sr),
  s9 = Mk(sr),
  l9 = Nk(sr),
  u9 = zk(sr);
function c9() {
  zr.localeError || ti(M7());
}
function uy() {
  zr.memoizer || ti({ memoizer: C7() });
}
const Bt = se(
    "ZodType",
    (e, t) => (c9(), Ft.init(e, t), (e.def = t), (e.type = t.type), e),
    {
      check(...e) {
        const t = this.def;
        return this.clone(
          Vn(t, {
            checks: [
              ...(t.checks ?? []),
              ...e.map((r) =>
                typeof r == "function"
                  ? {
                      _zod: {
                        check: r,
                        def: { check: "custom" },
                        onattach: [],
                      },
                    }
                  : r,
              ),
            ],
          }),
          { parent: !0 },
        );
      },
      with(...e) {
        return this.check(...e);
      },
      clone(e, t) {
        return ei(this, e, t);
      },
      brand() {
        return this;
      },
      register(e, t) {
        return (e.add(this, t), this);
      },
      refine(e, t) {
        return this.check(uj(e, t));
      },
      superRefine(e, t) {
        return this.check(cj(e, t));
      },
      overwrite(e) {
        return this.check(Jo(e));
      },
      optional() {
        return bw(this);
      },
      exactOptional() {
        return X9(this);
      },
      nullable() {
        return ww(this);
      },
      nullish() {
        return bw(ww(this));
      },
      nonoptional(e) {
        return rj(this, e);
      },
      array() {
        return V9(this);
      },
      or(e) {
        return Z9([this, e]);
      },
      and(e) {
        return G9(this, e);
      },
      transform(e) {
        return Sw(this, Q9(e));
      },
      default(e) {
        return ej(this, e);
      },
      prefault(e) {
        return nj(this, e);
      },
      catch(e) {
        return ij(this, e);
      },
      pipe(e) {
        return Sw(this, e);
      },
      readonly() {
        return lj(this);
      },
      describe(e) {
        const t = this.clone();
        return (il.add(t, { description: e }), t);
      },
      meta(...e) {
        if (e.length === 0) return il.get(this);
        const t = this.clone();
        return (il.add(t, e[0]), t);
      },
      isOptional() {
        return this.safeParse(void 0).success;
      },
      isNullable() {
        return this.safeParse(null).success;
      },
      apply(e, ...t) {
        return t.length === 0 ? e(this) : e(this, ...t);
      },
      get "~standard"() {
        return ey(this, "~standard", {
          ...oE(this),
          jsonSchema: { input: Hc(this, "input"), output: Hc(this, "output") },
        });
      },
      set "~standard"(e) {
        Xa(this, "~standard", e);
      },
      parse: function e(t, r) {
        return J5(this, t, r, { callee: e });
      },
      parseAsync: async function e(t, r) {
        return await W5(this, t, r, { callee: e });
      },
      safeParse(e, t) {
        return e9(this, e, t);
      },
      async safeParseAsync(e, t) {
        return t9(this, e, t);
      },
      get spa() {
        return this?.safeParseAsync;
      },
      set spa(e) {
        Xa(this, "spa", e);
      },
      validate(e, t) {
        return Ek(this, e, t);
      },
      validateAsync(e, t) {
        return Rk(this, e, t);
      },
      encode: function e(t, r) {
        return n9(this, t, r, { callee: e });
      },
      decode: function e(t, r) {
        return r9(this, t, r, { callee: e });
      },
      encodeAsync: async function e(t, r) {
        return await a9(this, t, r, { callee: e });
      },
      decodeAsync: async function e(t, r) {
        return await i9(this, t, r, { callee: e });
      },
      safeEncode(e, t) {
        return o9(this, e, t);
      },
      safeDecode(e, t) {
        return s9(this, e, t);
      },
      async safeEncodeAsync(e, t) {
        return l9(this, e, t);
      },
      async safeDecodeAsync(e, t) {
        return u9(this, e, t);
      },
      toJSONSchema(e) {
        return C5(this, {})(e);
      },
      get description() {
        return il.get(this)?.description;
      },
      get _def() {
        return this._zod.def;
      },
    },
  ),
  NE = se(
    "_ZodString",
    (e, t) => {
      (oy.init(e, t),
        Bt.init(e, t),
        (e._zod.processJSONSchema = (r, i, s) => z5(e, r, i)));
    },
    W_(
      {
        format: (e) => Tr(e).format ?? null,
        minLength: (e) => Tr(e).minimum ?? null,
        maxLength: (e) => Tr(e).maximum ?? null,
      },
      {
        regex(...e) {
          return this.check(f5(...e));
        },
        includes(...e) {
          return this.check(m5(...e));
        },
        startsWith(...e) {
          return this.check(p5(...e));
        },
        endsWith(...e) {
          return this.check(y5(...e));
        },
        min(...e) {
          return this.check($c(...e));
        },
        max(...e) {
          return this.check(bE(...e));
        },
        length(...e) {
          return this.check(wE(...e));
        },
        nonempty(...e) {
          return this.check($c(1, ...e));
        },
        lowercase(e) {
          return this.check(d5(e));
        },
        uppercase(e) {
          return this.check(h5(e));
        },
        trim() {
          return this.check(b5());
        },
        normalize(...e) {
          return this.check(v5(...e));
        },
        toLowerCase() {
          return this.check(w5());
        },
        toUpperCase() {
          return this.check(S5());
        },
        slugify() {
          return this.check(_5());
        },
      },
    ),
  ),
  f9 = se(
    "ZodString",
    (e, t) => {
      (oy.init(e, t), NE.init(e, t));
    },
    {
      email(e) {
        return this.check(j7(g9, e));
      },
      url(e) {
        return this.check(V7(b9, e));
      },
      jwt(e) {
        return this.check(n5(k9, e));
      },
      emoji(e) {
        return this.check($7(w9, e));
      },
      guid(e) {
        return this.check(L7(v9, e));
      },
      uuid(e) {
        return this.check(U7(lc, e));
      },
      uuidv4(e) {
        return this.check(P7(lc, e));
      },
      uuidv6(e) {
        return this.check(F7(lc, e));
      },
      uuidv7(e) {
        return this.check(B7(lc, e));
      },
      nanoid(e) {
        return this.check(H7(S9, e));
      },
      cuid(e) {
        return this.check(I7(_9, e));
      },
      cuid2(e) {
        return this.check(Z7(E9, e));
      },
      ulid(e) {
        return this.check(q7(x9, e));
      },
      base64(e) {
        return this.check(W7(M9, e));
      },
      base64url(e) {
        return this.check(e5(N9, e));
      },
      xid(e) {
        return this.check(G7(R9, e));
      },
      ksuid(e) {
        return this.check(Y7(O9, e));
      },
      ipv4(e) {
        return this.check(K7(A9, e));
      },
      ipv6(e) {
        return this.check(Q7(C9, e));
      },
      cidrv4(e) {
        return this.check(X7(T9, e));
      },
      cidrv6(e) {
        return this.check(J7(D9, e));
      },
      e164(e) {
        return this.check(t5(z9, e));
      },
      datetime(e) {
        return this.check(r5(h9, e));
      },
      date(e) {
        return this.check(a5(m9, e));
      },
      time(e) {
        return this.check(i5(p9, e));
      },
      duration(e) {
        return this.check(o5(y9, e));
      },
    },
  );
function d9(e) {
  return k7(f9, e);
}
const Rt = se("ZodStringFormat", (e, t) => {
    (_t.init(e, t), NE.init(e, t));
  }),
  h9 = se("ZodISODateTime", (e, t) => {
    (B8.init(e, t), Rt.init(e, t));
  }),
  m9 = se("ZodISODate", (e, t) => {
    (V8.init(e, t), Rt.init(e, t));
  }),
  p9 = se("ZodISOTime", (e, t) => {
    ($8.init(e, t), Rt.init(e, t));
  }),
  y9 = se("ZodISODuration", (e, t) => {
    (H8.init(e, t), Rt.init(e, t));
  }),
  g9 = se("ZodEmail", (e, t) => {
    (O8.init(e, t), Rt.init(e, t));
  }),
  v9 = se("ZodGUID", (e, t) => {
    (x8.init(e, t), Rt.init(e, t));
  }),
  lc = se("ZodUUID", (e, t) => {
    (R8.init(e, t), Rt.init(e, t));
  }),
  b9 = se("ZodURL", (e, t) => {
    (N8.init(e, t), Rt.init(e, t));
  }),
  w9 = se("ZodEmoji", (e, t) => {
    (z8.init(e, t), Rt.init(e, t));
  }),
  S9 = se("ZodNanoID", (e, t) => {
    (k8.init(e, t), Rt.init(e, t));
  }),
  _9 = se("ZodCUID", (e, t) => {
    (j8.init(e, t), Rt.init(e, t));
  }),
  E9 = se("ZodCUID2", (e, t) => {
    (L8.init(e, t), Rt.init(e, t));
  }),
  x9 = se("ZodULID", (e, t) => {
    (U8.init(e, t), Rt.init(e, t));
  }),
  R9 = se("ZodXID", (e, t) => {
    (P8.init(e, t), Rt.init(e, t));
  }),
  O9 = se("ZodKSUID", (e, t) => {
    (F8.init(e, t), Rt.init(e, t));
  }),
  A9 = se("ZodIPv4", (e, t) => {
    (I8.init(e, t), Rt.init(e, t));
  }),
  C9 = se("ZodIPv6", (e, t) => {
    (q8.init(e, t), Rt.init(e, t));
  }),
  T9 = se("ZodCIDRv4", (e, t) => {
    (G8.init(e, t), Rt.init(e, t));
  }),
  D9 = se("ZodCIDRv6", (e, t) => {
    (K8.init(e, t), Rt.init(e, t));
  }),
  M9 = se("ZodBase64", (e, t) => {
    (Q8.init(e, t), Rt.init(e, t));
  }),
  N9 = se("ZodBase64URL", (e, t) => {
    (J8.init(e, t), Rt.init(e, t));
  }),
  z9 = se("ZodE164", (e, t) => {
    (W8.init(e, t), Rt.init(e, t));
  }),
  k9 = se("ZodJWT", (e, t) => {
    (t7.init(e, t), Rt.init(e, t));
  }),
  zE = se(
    "ZodNumber",
    (e, t) => {
      (dE.init(e, t),
        Bt.init(e, t),
        (e._zod.processJSONSchema = (r, i, s) => k5(e, r, i, s)),
        (e.isFinite = !0));
    },
    W_(
      {
        minValue: (e) => {
          const { minimum: t, exclusiveMinimum: r } = Tr(e);
          return Math.max(
            t ?? Number.NEGATIVE_INFINITY,
            r ?? Number.NEGATIVE_INFINITY,
          );
        },
        maxValue: (e) => {
          const { maximum: t, exclusiveMaximum: r } = Tr(e);
          return Math.min(
            t ?? Number.POSITIVE_INFINITY,
            r ?? Number.POSITIVE_INFINITY,
          );
        },
        isInt: (e) => {
          const { isInt: t, multipleOf: r } = Tr(e);
          return !!t || !!r?.some(Number.isSafeInteger);
        },
        format: (e) => Tr(e).format ?? null,
      },
      {
        gt(e, t) {
          return this.check(sw(e, t));
        },
        gte(e, t) {
          return this.check(am(e, t));
        },
        min(e, t) {
          return this.check(am(e, t));
        },
        lt(e, t) {
          return this.check(ow(e, t));
        },
        lte(e, t) {
          return this.check(rm(e, t));
        },
        max(e, t) {
          return this.check(rm(e, t));
        },
        int(e) {
          return this.check(gw(e));
        },
        safe(e) {
          return this.check(gw(e));
        },
        positive(e) {
          return this.check(sw(0, e));
        },
        nonnegative(e) {
          return this.check(am(0, e));
        },
        negative(e) {
          return this.check(ow(0, e));
        },
        nonpositive(e) {
          return this.check(rm(0, e));
        },
        multipleOf(e, t) {
          return this.check(lw(e, t));
        },
        step(e, t) {
          return this.check(lw(e, t));
        },
        finite() {
          return this;
        },
      },
    ),
  );
function j9(e) {
  return s5(zE, e);
}
const L9 = se("ZodNumberFormat", (e, t) => {
  (n7.init(e, t), zE.init(e, t));
});
function gw(e) {
  return l5(L9, e);
}
const U9 = se("ZodUnknown", (e, t) => {
  (r7.init(e, t),
    Bt.init(e, t),
    (e._zod.processJSONSchema = (r, i, s) => L5()));
});
function vw() {
  return u5(U9);
}
const P9 = se("ZodNever", (e, t) => {
  (a7.init(e, t),
    Bt.init(e, t),
    (e._zod.processJSONSchema = (r, i, s) => j5(e, r, i)));
});
function F9(e) {
  return c5(P9, e);
}
const B9 = se(
  "ZodArray",
  (e, t) => {
    (uy(),
      s7.init(e, t),
      Bt.init(e, t),
      (e._zod.processJSONSchema = (r, i, s) => B5(e, r, i, s)),
      (e.element = t.element));
  },
  {
    min(e, t) {
      return this.check($c(e, t));
    },
    nonempty(e) {
      return this.check($c(1, e));
    },
    max(e, t) {
      return this.check(bE(e, t));
    },
    length(e, t) {
      return this.check(wE(e, t));
    },
    unwrap() {
      return this.element;
    },
  },
);
function V9(e, t) {
  return E5(B9, e, t);
}
const $9 = se(
  "ZodObject",
  (e, t) => {
    (uy(),
      c7.init(e, t),
      Bt.init(e, t),
      (e._zod.processJSONSchema = (r, i, s) => V5(e, r, i, s)),
      uk(e, "shape", (r) => r._zod.def.shape, !1));
  },
  {
    keyof() {
      return Y9(Object.keys(this._zod.def.shape));
    },
    catchall(e) {
      return this.clone(Vn(this._zod.def, { catchall: e }));
    },
    passthrough() {
      return this.clone(Vn(this._zod.def, { catchall: vw() }));
    },
    loose() {
      return this.clone(Vn(this._zod.def, { catchall: vw() }));
    },
    strict() {
      return this.clone(Vn(this._zod.def, { catchall: F9() }));
    },
    strip() {
      return this.clone(Vn(this._zod.def, { catchall: void 0 }));
    },
    extend(e) {
      return J6(this, e);
    },
    safeExtend(e) {
      return W6(this, e);
    },
    merge(e) {
      return ek(this, e);
    },
    pick(e) {
      return Q6(this, e);
    },
    omit(e) {
      return X6(this, e);
    },
    partial(...e) {
      return V1(kE, this, e[0]);
    },
    exactPartial(...e) {
      return V1(jE, this, e[0], "exactPartial");
    },
    required(...e) {
      return tk(LE, this, e[0]);
    },
  },
);
function H9(e, t) {
  const r = { type: "object", shape: e ?? {}, ...ze(t) };
  return new $9(r);
}
const I9 = se("ZodUnion", (e, t) => {
  (f7.init(e, t),
    Bt.init(e, t),
    (e._zod.processJSONSchema = (r, i, s) => $5(e, r, i, s)),
    (e.options = t.options));
});
function Z9(e, t) {
  return new I9({ type: "union", options: e, ...ze(t) });
}
const q9 = se("ZodIntersection", (e, t) => {
  (d7.init(e, t),
    Bt.init(e, t),
    (e._zod.processJSONSchema = (r, i, s) => H5(e, r, i, s)));
});
function G9(e, t) {
  return new q9({ type: "intersection", left: e, right: t });
}
const Zm = se("ZodEnum", (e, t) => {
  (h7.init(e, t),
    Bt.init(e, t),
    (e._zod.processJSONSchema = (i, s, l) => U5(e, i, s)),
    (e.enum = t.entries),
    (e.options = [...e._zod.values]));
  const r = new Set(Object.keys(t.entries));
  ((e.extract = (i, s) => {
    const l = {};
    for (const c of i)
      if (r.has(c)) l[c] = t.entries[c];
      else throw new Error(`Key ${c} not found in enum`);
    return new Zm({ ...t, checks: [], ...ze(s), entries: l });
  }),
    (e.exclude = (i, s) => {
      const l = { ...t.entries };
      for (const c of i)
        if (r.has(c)) delete l[c];
        else throw new Error(`Key ${c} not found in enum`);
      return new Zm({ ...t, checks: [], ...ze(s), entries: l });
    }));
});
function Y9(e, t) {
  const r = Array.isArray(e) ? Object.fromEntries(e.map((i) => [i, i])) : e;
  return new Zm({ type: "enum", entries: r, ...ze(t) });
}
const K9 = se("ZodTransform", (e, t) => {
  (uy(),
    m7.init(e, t),
    Bt.init(e, t),
    (e._zod.processJSONSchema = (r, i, s) => F5(e, r, i, s)),
    (e._zod.parse = (r, i) => {
      if (i.direction === "backward") throw new eE(e.constructor.name);
      r.addIssue = (l) => {
        if (typeof l == "string") r.issues.push(bl(l, r.value, t));
        else {
          const c = l;
          (c.fatal && (c.continue = !1),
            c.code ?? (c.code = "custom"),
            "input" in c || (c.input = r.value),
            c.inst ?? (c.inst = e),
            r.issues.push(bl(c)));
        }
      };
      const s = t.transform(r.value, r);
      return s instanceof Promise
        ? s.then((l) => ((r.value = l), r))
        : ((r.value = s), r);
    }));
});
function Q9(e) {
  return new K9({ type: "transform", transform: e });
}
const kE = se("ZodOptional", (e, t) => {
  (pE.init(e, t),
    Bt.init(e, t),
    (e._zod.processJSONSchema = (r, i, s) => ME(e, r, i, s)),
    (e.unwrap = () => e._zod.def.innerType));
});
function bw(e) {
  return new kE({ type: "optional", innerType: e });
}
const jE = se("ZodExactOptional", (e, t) => {
  (p7.init(e, t),
    Bt.init(e, t),
    (e._zod.processJSONSchema = (r, i, s) => ME(e, r, i, s)),
    (e.unwrap = () => e._zod.def.innerType));
});
function X9(e) {
  return new jE({ type: "optional", innerType: e });
}
const J9 = se("ZodNullable", (e, t) => {
  (y7.init(e, t),
    Bt.init(e, t),
    (e._zod.processJSONSchema = (r, i, s) => I5(e, r, i, s)),
    (e.unwrap = () => e._zod.def.innerType));
});
function ww(e) {
  return new J9({ type: "nullable", innerType: e });
}
const W9 = se("ZodDefault", (e, t) => {
  (g7.init(e, t),
    Bt.init(e, t),
    (e._zod.processJSONSchema = (r, i, s) => q5(e, r, i, s)),
    (e.unwrap = () => e._zod.def.innerType),
    (e.removeDefault = e.unwrap));
});
function ej(e, t) {
  return new W9({
    type: "default",
    innerType: e,
    get defaultValue() {
      return typeof t == "function" ? t() : K_(t);
    },
  });
}
const tj = se("ZodPrefault", (e, t) => {
  (v7.init(e, t),
    Bt.init(e, t),
    (e._zod.processJSONSchema = (r, i, s) => G5(e, r, i, s)),
    (e.unwrap = () => e._zod.def.innerType));
});
function nj(e, t) {
  return new tj({
    type: "prefault",
    innerType: e,
    get defaultValue() {
      return typeof t == "function" ? t() : K_(t);
    },
  });
}
const LE = se("ZodNonOptional", (e, t) => {
  (b7.init(e, t),
    Bt.init(e, t),
    (e._zod.processJSONSchema = (r, i, s) => Z5(e, r, i, s)),
    (e.unwrap = () => e._zod.def.innerType));
});
function rj(e, t) {
  return new LE({ type: "nonoptional", innerType: e, ...ze(t) });
}
const aj = se("ZodCatch", (e, t) => {
  (w7.init(e, t),
    Bt.init(e, t),
    (e._zod.processJSONSchema = (r, i, s) => Y5(e, r, i, s)),
    (e.unwrap = () => e._zod.def.innerType),
    (e.removeCatch = e.unwrap));
});
function ij(e, t) {
  return new aj({
    type: "catch",
    innerType: e,
    catchValue: typeof t == "function" ? t : fk(t),
  });
}
const oj = se("ZodPipe", (e, t) => {
  (S7.init(e, t),
    Bt.init(e, t),
    (e._zod.processJSONSchema = (r, i, s) => K5(e, r, i, s)),
    (e.in = t.in),
    (e.out = t.out));
});
function Sw(e, t) {
  return new oj({ type: "pipe", in: e, out: t });
}
const sj = se("ZodReadonly", (e, t) => {
  (_7.init(e, t),
    Bt.init(e, t),
    (e._zod.processJSONSchema = (r, i, s) => Q5(e, r, i, s)),
    (e.unwrap = () => e._zod.def.innerType));
});
function lj(e) {
  return new sj({ type: "readonly", innerType: e });
}
const UE = se("ZodCustom", (e, t) => {
  (E7.init(e, t),
    Bt.init(e, t),
    (e._zod.processJSONSchema = (r, i, s) => P5(e, r, i, s)));
});
function uj(e, t = {}) {
  return x5(UE, e, t);
}
function cj(e, t) {
  return R5(e, t);
}
const fj = se(
  "ZodInstanceOf",
  (e, t) => {
    UE.init(e, t);
  },
  {
    properties(e, t) {
      return this.check(g5(e, t));
    },
  },
);
function wL(e, t = {}) {
  const r = new fj({
    type: "custom",
    check: "custom",
    fn: (i) => i instanceof e,
    abort: !0,
    ...ze(t),
  });
  return (
    (r._zod.bag.Class = e),
    (r._zod.check = (i) => {
      i.value instanceof e ||
        i.issues.push({
          code: "invalid_type",
          expected: e.name,
          input: i.value,
          inst: r,
          path: [...(r._zod.def.path ?? [])],
        });
    }),
    r
  );
}
const dj = [Oc, Qw, Xw, Jw, Ww, e2];
function hj({
  imageCandidates: e,
  selectedProfileImage: t = dj[0],
  onSave: r,
}) {
  const [i, s] = w.useState(t);
  return j.jsxs(Qc, {
    children: [
      j.jsx(mp, {}),
      j.jsx(Jc, {
        asChild: !0,
        children: j.jsx("button", {
          className:
            "absolute -bottom-1 -right-1 w-9 h-9 rounded-full bg-white shadow flex items-center justify-center",
          "aria-label": "edit profile image",
          children: j.jsx("img", { src: bC, className: "w-9 h-9" }),
        }),
      }),
      j.jsx(Xc, {
        className: "w-105",
        children: j.jsxs("div", {
          className: "px-8.5 pt-20 pb-5 flex flex-col gap-15 items-center",
          children: [
            j.jsx("div", {
              className: "text-2xl font-bold text-scale-600",
              children: "프로필 이미지 고르기",
            }),
            j.jsx("div", {
              className: "grid grid-cols-3 px-10 gap-8",
              children: e.map((l) => {
                const c = i === l;
                return j.jsxs(
                  "button",
                  {
                    onClick: () => {
                      s(l);
                    },
                    className: `group relative w-20 h-20 rounded-full overflow-hidden ${c ? "ring-4 ring-brand-primary" : "ring-0"}`,
                    children: [
                      j.jsx("img", {
                        src: l,
                        className: "w-full h-full object-cover",
                      }),
                      j.jsx("span", {
                        className: `absolute inset-0 bg-black/15 opacity-0 group-hover:opacity-100 transition-opacity ${c ? "opacity-100" : ""}`,
                      }),
                    ],
                  },
                  l,
                );
              }),
            }),
            j.jsx(LD, {
              asChild: !0,
              children: j.jsx(Lo, {
                variant: "primary",
                onClick: () => {
                  r(i);
                },
                className: "w-90 h-14",
                children: "저장하기",
              }),
            }),
          ],
        }),
      }),
    ],
  });
}
const mj = H9({
  nickname: d9()
    .trim()
    .min(1, "닉네임을 입력해주세요.")
    .max(10, "닉네임은 10자 이내로 입력해주세요.")
    .regex(
      /^[0-9A-Za-z\uAC00-\uD7A3\u1100-\u11FF\u3130-\u318F]+$/u,
      "한글, 영문자, 숫자만 입력할 수 있습니다.",
    ),
  profilepicId: j9().int().min(1).max(sa.length),
});
function pj() {
  const { user: e, updateProfile: t } = xp(),
    [r, i] = w.useState(!1),
    [s, l] = w.useState(""),
    c = j6({
      resolver: F6(mj),
      mode: "onChange",
      defaultValues: { nickname: "", profilepicId: 1 },
    }),
    d = sa[c.watch("profilepicId") - 1] ?? sa[0],
    m = (y) => {
      if ((i(y), y)) {
        const g = sa.findIndex((v) => v === e?.profileImage);
        (c.reset({
          nickname: e?.nickname ?? "",
          profilepicId: g >= 0 ? g + 1 : 1,
        }),
          l(""));
      }
    },
    h = c.handleSubmit(async ({ nickname: y, profilepicId: g }) => {
      (l(""),
        (await t(y, g))
          ? i(!1)
          : l("프로필을 저장하지 못했습니다. 다시 시도해주세요."));
    });
  return j.jsxs(Qc, {
    open: r,
    onOpenChange: m,
    children: [
      j.jsx(mp, {}),
      j.jsx(Jc, {
        asChild: !0,
        children: j.jsxs("button", {
          type: "button",
          className: "flex items-center gap-2",
          children: [
            j.jsx("img", {
              src: e?.profileImage ?? sa[0],
              alt: "프로필",
              className: "h-8 w-8 rounded-full object-cover",
            }),
            j.jsx("span", {
              className: "text-lg font-bold text-scale-600",
              children: e?.nickname ?? "프로필 설정",
            }),
          ],
        }),
      }),
      j.jsx(Xc, {
        className: "w-180",
        children: j.jsxs("form", {
          onSubmit: h,
          className: "px-20 py-22.5 flex flex-col gap-20",
          children: [
            j.jsx("h2", {
              className: "text-4xl font-bold text-scale-600",
              children: "프로필 설정",
            }),
            j.jsxs("div", {
              className: "flex flex-col gap-12.5",
              children: [
                j.jsxs("div", {
                  className: "mx-auto relative w-28 h-28",
                  children: [
                    j.jsx("img", {
                      src: d,
                      alt: "선택한 프로필 이미지",
                      className: "w-28 h-28 rounded-full object-cover",
                    }),
                    j.jsx(b6, {
                      name: "profilepicId",
                      control: c.control,
                      render: ({ field: y }) =>
                        j.jsx(
                          hj,
                          {
                            imageCandidates: sa,
                            selectedProfileImage: d,
                            onSave: (g) => {
                              const v = sa.findIndex((_) => _ === g);
                              v >= 0 && y.onChange(v + 1);
                            },
                          },
                          y.value,
                        ),
                    }),
                  ],
                }),
                j.jsxs("div", {
                  className: "flex flex-col gap-3",
                  children: [
                    j.jsx("input", {
                      ...c.register("nickname"),
                      placeholder: "닉네임(최대 10자)",
                      className:
                        "w-full h-14 rounded-xl border border-black/10 px-5 outline-none focus:border-brand-primary",
                    }),
                    c.formState.errors.nickname &&
                      j.jsx("p", {
                        className: "text-sm text-red-500",
                        children: c.formState.errors.nickname.message,
                      }),
                    s &&
                      j.jsx("p", {
                        role: "alert",
                        className: "text-sm text-red-500",
                        children: s,
                      }),
                  ],
                }),
                j.jsx(Lo, {
                  type: "submit",
                  variant: c.formState.isValid ? "primary" : "disabled",
                  disabled: !c.formState.isValid || c.formState.isSubmitting,
                  className: "h-14",
                  children: c.formState.isSubmitting ? "저장 중…" : "저장하기",
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
function yj() {
  const { logout: e, user: t } = xp(),
    [r, i] = w.useState(!1);
  return j.jsxs(o6, {
    children: [
      j.jsx(s6, {
        asChild: !0,
        children: j.jsx(Lo, { variant: "gray", children: "프로필" }),
      }),
      j.jsxs(l6, {
        align: "end",
        sideOffset: 12,
        className:
          "p-6 flex flex-col gap-5 w-55 border border-brand-secondary rounded-xl bg-white",
        children: [
          j.jsx(pj, {}),
          j.jsxs("div", {
            className: "flex w-full justify-between items-center",
            children: [
              j.jsxs("div", {
                className: "flex items-center gap-1",
                children: [
                  j.jsx("img", { src: t2, className: "w-8.5" }),
                  j.jsx("div", {
                    className: "text-lg font-bold text-scale-500",
                    children: "포인트",
                  }),
                ],
              }),
              j.jsxs("div", {
                className: "text-lg font-bold text-scale-600",
                children: [
                  j.jsx(Ai, {
                    to: "/payment/history",
                    className: "text-brand-primary",
                    children: t?.points ?? 0,
                  }),
                  "잔",
                ],
              }),
            ],
          }),
          j.jsx(c6, { open: r, onOpenChange: i }),
          j.jsx("button", {
            onClick: e,
            className:
              "flex items-center text-base text-scale-400 underline underline-offset-1 cursor-pointer",
            children: "로그아웃",
          }),
        ],
      }),
    ],
  });
}
function gj() {
  const { user: e } = xp();
  return j.jsx("header", {
    className: "w-full h-22 fixed flex justify-center bg-bg-white mx-auto z-50",
    children: j.jsxs("div", {
      className: "w-full max-w-[1680px] flex justify-between px-17.5 py-5",
      children: [
        j.jsxs(Ai, {
          to: "/",
          className: "cursor-pointer flex gap-4.5 items-center",
          children: [
            j.jsx("img", { src: yC, className: "w-9 h-9" }),
            j.jsx("div", {
              className: "text-3xl text-brand-primary font-bold",
              children: "멋쟁이 시장처럼",
            }),
          ],
        }),
        j.jsxs("div", {
          className: "flex gap-10 items-center",
          children: [
            j.jsx(Ai, {
              to: "/auction",
              className: "cursor-pointer",
              children: j.jsx("div", {
                className: "text-xl text-scale-500",
                children: "경매 입찰",
              }),
            }),
            j.jsx(Ai, {
              to: "/create",
              className: "cursor-pointer",
              children: j.jsx("div", {
                className: "text-xl text-scale-500",
                children: "경매 등록",
              }),
            }),
            j.jsx(Ai, {
              to: "/history",
              className: "cursor-pointer",
              children: j.jsx("div", {
                className: "text-xl text-scale-500",
                children: "내 경매",
              }),
            }),
            e ? j.jsx(yj, {}) : j.jsx(UD, {}),
          ],
        }),
      ],
    }),
  });
}
function vj() {
  return j.jsx("footer", {
    className: "w-full flex justify-center px-15 py-25",
    children: j.jsx("div", {
      className: "text-xl text-scale-400",
      children: "© 2025 Likelion SNU 13th. All rights reserved.",
    }),
  });
}
function bj() {
  const { pathname: e, search: t, hash: r } = jr();
  return (
    w.useEffect(() => {
      if (r) {
        const i = document.getElementById(r.slice(1));
        if (i) {
          i.scrollIntoView({ block: "start" });
          return;
        }
      }
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, [e, t, r]),
    null
  );
}
function wj() {
  return j.jsxs("div", {
    className: "w-full bg-bg-default",
    children: [
      j.jsx(gj, {}),
      j.jsxs("main", {
        className: "min-h-screen pt-22",
        children: [j.jsx(bj, {}), j.jsx(TA, {})],
      }),
      j.jsx(vj, {}),
    ],
  });
}
const Sj = w.lazy(() =>
    Lr(() => import("./HomePage-gQiLUxDE.js"), __vite__mapDeps([0, 1, 2])),
  ),
  _j = w.lazy(() =>
    Lr(
      () => import("./AuctionSearchPage-Ba0u0fu1.js"),
      __vite__mapDeps([3, 1, 2]),
    ),
  ),
  Ej = w.lazy(() =>
    Lr(
      () => import("./AuctionRoomPage-B8JxJWj_.js"),
      __vite__mapDeps([4, 1, 2]),
    ),
  ),
  xj = w.lazy(() =>
    Lr(
      () => import("./AuctionCreatePage-DnX6Ao6l.js"),
      __vite__mapDeps([5, 2]),
    ),
  ),
  Rj = w.lazy(() => Lr(() => import("./Auth-CcKht6oJ.js"), [])),
  Oj = w.lazy(() => Lr(() => import("./PaymentApprovalPage-B_vcoGol.js"), [])),
  Aj = w.lazy(() => Lr(() => import("./PaymentCancelPage-nkNFYBxD.js"), [])),
  Cj = w.lazy(() => Lr(() => import("./PaymentFailPage-Dt20papN.js"), [])),
  Tj = w.lazy(() => Lr(() => import("./PaymentHistoryPage-CjFE8TQp.js"), [])),
  Dj = w.lazy(() => Lr(() => import("./HistoryPage-B4F9-HU4.js"), [])),
  Mj = [{ path: Ar.HOME.ROOT, element: j.jsx(Sj, {}) }],
  Nj = [
    { path: Ar.AUCTION.ROOT, element: j.jsx(_j, {}) },
    { path: Ar.AUCTION.ROOM, element: j.jsx(Ej, {}) },
  ],
  zj = [{ path: Ar.CREATE.ROOT, element: j.jsx(xj, {}) }],
  kj = [{ path: Ar.AUTH.ROOT, element: j.jsx(Rj, {}) }],
  jj = [{ path: Ar.HISTORY.ROOT, element: j.jsx(Dj, {}) }],
  Lj = [
    { path: Ar.PAYMENT.APPROVAL, element: j.jsx(Oj, {}) },
    { path: Ar.PAYMENT.CANCEL, element: j.jsx(Aj, {}) },
    { path: Ar.PAYMENT.FAIL, element: j.jsx(Cj, {}) },
    { path: Ar.PAYMENT.HISTORY, element: j.jsx(Tj, {}) },
  ],
  Uj = [...Mj, ...Nj, ...zj, ...kj, ...Lj, ...jj],
  Pj = eC([{ element: j.jsx(wj, {}), children: Uj }]),
  Fj = new I4({
    defaultOptions: {
      queries: { staleTime: 300 * 1e3, refetchOnWindowFocus: !1, retry: 1 },
    },
  });
function Bj() {
  return j.jsx(b4, {
    client: Fj,
    children: j.jsx(a3, {
      children: j.jsx(w.Suspense, {
        fallback: null,
        children: j.jsx(hC, { router: Pj }),
      }),
    }),
  });
}
const PE = document.getElementById("root");
if (!PE) throw new Error("Root element not found");
WR.createRoot(PE).render(j.jsx(w.StrictMode, { children: j.jsx(Bj, {}) }));
export {
  uL as A,
  Lo as B,
  t2 as C,
  Qc as D,
  cL as E,
  bL as F,
  xp as G,
  sL as H,
  $j as I,
  fL as J,
  dL as K,
  c6 as P,
  Ar as R,
  Al as S,
  wL as _,
  Xc as a,
  cp as b,
  Jc as c,
  Vj as d,
  mS as e,
  gL as f,
  p4 as g,
  hl as h,
  V4 as i,
  j,
  xn as k,
  wS as l,
  j9 as m,
  nn as n,
  H9 as o,
  hL as p,
  d9 as q,
  w as r,
  Zh as s,
  mL as t,
  Hw as u,
  vL as v,
  j6 as w,
  F6 as x,
  n3 as y,
  lL as z,
};
