const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/HomePage-NzXHq9EW.js",
      "assets/logo_white-B5195eUO.js",
      "assets/useAuctionQueries-CRez4Q5v.js",
      "assets/AuctionSearchPage-D_6_vK0x.js",
      "assets/AuctionRoomPage-QpC_UVUV.js",
      "assets/AuctionCreatePage-CsnrMbJC.js",
    ]),
) => i.map((i) => d[i]);
function NR(e, t) {
  for (var a = 0; a < t.length; a++) {
    const i = t[a];
    if (typeof i != "string" && !Array.isArray(i)) {
      for (const s in i)
        if (s !== "default" && !(s in e)) {
          const u = Object.getOwnPropertyDescriptor(i, s);
          u &&
            Object.defineProperty(
              e,
              s,
              u.get ? u : { enumerable: !0, get: () => i[s] },
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
    for (const u of s)
      if (u.type === "childList")
        for (const c of u.addedNodes)
          c.tagName === "LINK" && c.rel === "modulepreload" && i(c);
  }).observe(document, { childList: !0, subtree: !0 });
  function a(s) {
    const u = {};
    return (
      s.integrity && (u.integrity = s.integrity),
      s.referrerPolicy && (u.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === "use-credentials"
        ? (u.credentials = "include")
        : s.crossOrigin === "anonymous"
          ? (u.credentials = "omit")
          : (u.credentials = "same-origin"),
      u
    );
  }
  function i(s) {
    if (s.ep) return;
    s.ep = !0;
    const u = a(s);
    fetch(s.href, u);
  }
})();
function mw(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var wh = { exports: {} },
  Is = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var k0;
function zR() {
  if (k0) return Is;
  k0 = 1;
  var e = Symbol.for("react.transitional.element"),
    t = Symbol.for("react.fragment");
  function a(i, s, u) {
    var c = null;
    if (
      (u !== void 0 && (c = "" + u),
      s.key !== void 0 && (c = "" + s.key),
      "key" in s)
    ) {
      u = {};
      for (var d in s) d !== "key" && (u[d] = s[d]);
    } else u = s;
    return (
      (s = u.ref),
      { $$typeof: e, type: i, key: c, ref: s !== void 0 ? s : null, props: u }
    );
  }
  return ((Is.Fragment = t), (Is.jsx = a), (Is.jsxs = a), Is);
}
var j0;
function kR() {
  return (j0 || ((j0 = 1), (wh.exports = zR())), wh.exports);
}
var k = kR(),
  Sh = { exports: {} },
  qs = {},
  _h = { exports: {} },
  Eh = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var L0;
function jR() {
  return (
    L0 ||
      ((L0 = 1),
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
        function a(U) {
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
          var u = performance;
          e.unstable_now = function () {
            return u.now();
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
          F = typeof clearTimeout == "function" ? clearTimeout : null,
          D = typeof setImmediate < "u" ? setImmediate : null;
        function B(U) {
          for (var ne = a(h); ne !== null; ) {
            if (ne.callback === null) i(h);
            else if (ne.startTime <= U)
              (i(h), (ne.sortIndex = ne.expirationTime), t(m, ne));
            else break;
            ne = a(h);
          }
        }
        function L(U) {
          if (((E = !1), B(U), !S))
            if (a(m) !== null) ((S = !0), C || ((C = !0), be()));
            else {
              var ne = a(h);
              ne !== null && ge(L, ne.startTime - U);
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
                ((S = !1), E && ((E = !1), F(Y), (Y = -1)), (_ = !0));
                var q = v;
                try {
                  t: {
                    for (
                      B(U), g = a(m);
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
                        (g === a(m) && i(m), B(U));
                      } else i(m);
                      g = a(m);
                    }
                    if (g !== null) ne = !0;
                    else {
                      var W = a(h);
                      (W !== null && ge(L, W.startTime - U), (ne = !1));
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
                  a(m) === null &&
                    U === a(h) &&
                    (E ? (F(Y), (Y = -1)) : (E = !0), ge(L, q - ie)))
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
      })(Eh)),
    Eh
  );
}
var U0;
function LR() {
  return (U0 || ((U0 = 1), (_h.exports = jR())), _h.exports);
}
var xh = { exports: {} },
  $e = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var P0;
function UR() {
  if (P0) return $e;
  P0 = 1;
  var e = Symbol.for("react.transitional.element"),
    t = Symbol.for("react.portal"),
    a = Symbol.for("react.fragment"),
    i = Symbol.for("react.strict_mode"),
    s = Symbol.for("react.profiler"),
    u = Symbol.for("react.consumer"),
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
  function F(N, W, fe) {
    ((this.props = N),
      (this.context = W),
      (this.refs = E),
      (this.updater = fe || _));
  }
  var D = (F.prototype = new T());
  ((D.constructor = F), S(D, x.prototype), (D.isPureReactComponent = !0));
  var B = Array.isArray,
    L = { H: null, A: null, T: null, S: null, V: null },
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
    ($e.Fragment = a),
    ($e.Profiler = s),
    ($e.PureComponent = F),
    ($e.StrictMode = i),
    ($e.Suspense = m),
    ($e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = L),
    ($e.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (N) {
        return L.H.useMemoCache(N);
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
        (N.Consumer = { $$typeof: u, _context: N }),
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
      var W = L.T,
        fe = {};
      L.T = fe;
      try {
        var le = N(),
          ve = L.S;
        (ve !== null && ve(fe, le),
          typeof le == "object" &&
            le !== null &&
            typeof le.then == "function" &&
            le.then(ie, q));
      } catch (ke) {
        q(ke);
      } finally {
        L.T = W;
      }
    }),
    ($e.unstable_useCacheRefresh = function () {
      return L.H.useCacheRefresh();
    }),
    ($e.use = function (N) {
      return L.H.use(N);
    }),
    ($e.useActionState = function (N, W, fe) {
      return L.H.useActionState(N, W, fe);
    }),
    ($e.useCallback = function (N, W) {
      return L.H.useCallback(N, W);
    }),
    ($e.useContext = function (N) {
      return L.H.useContext(N);
    }),
    ($e.useDebugValue = function () {}),
    ($e.useDeferredValue = function (N, W) {
      return L.H.useDeferredValue(N, W);
    }),
    ($e.useEffect = function (N, W, fe) {
      var le = L.H;
      if (typeof fe == "function")
        throw Error(
          "useEffect CRUD overload is not enabled in this build of React.",
        );
      return le.useEffect(N, W);
    }),
    ($e.useId = function () {
      return L.H.useId();
    }),
    ($e.useImperativeHandle = function (N, W, fe) {
      return L.H.useImperativeHandle(N, W, fe);
    }),
    ($e.useInsertionEffect = function (N, W) {
      return L.H.useInsertionEffect(N, W);
    }),
    ($e.useLayoutEffect = function (N, W) {
      return L.H.useLayoutEffect(N, W);
    }),
    ($e.useMemo = function (N, W) {
      return L.H.useMemo(N, W);
    }),
    ($e.useOptimistic = function (N, W) {
      return L.H.useOptimistic(N, W);
    }),
    ($e.useReducer = function (N, W, fe) {
      return L.H.useReducer(N, W, fe);
    }),
    ($e.useRef = function (N) {
      return L.H.useRef(N);
    }),
    ($e.useState = function (N) {
      return L.H.useState(N);
    }),
    ($e.useSyncExternalStore = function (N, W, fe) {
      return L.H.useSyncExternalStore(N, W, fe);
    }),
    ($e.useTransition = function () {
      return L.H.useTransition();
    }),
    ($e.version = "19.1.1"),
    $e
  );
}
var F0;
function $m() {
  return (F0 || ((F0 = 1), (xh.exports = UR())), xh.exports);
}
var Rh = { exports: {} },
  ln = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var B0;
function PR() {
  if (B0) return ln;
  B0 = 1;
  var e = $m();
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
  function a() {}
  var i = {
      d: {
        f: a,
        r: function () {
          throw Error(t(522));
        },
        D: a,
        C: a,
        L: a,
        m: a,
        X: a,
        S: a,
        M: a,
      },
      p: 0,
      findDOMNode: null,
    },
    s = Symbol.for("react.portal");
  function u(m, h, y) {
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
    (ln.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i),
    (ln.createPortal = function (m, h) {
      var y =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!h || (h.nodeType !== 1 && h.nodeType !== 9 && h.nodeType !== 11))
        throw Error(t(299));
      return u(m, h, null, y);
    }),
    (ln.flushSync = function (m) {
      var h = c.T,
        y = i.p;
      try {
        if (((c.T = null), (i.p = 2), m)) return m();
      } finally {
        ((c.T = h), (i.p = y), i.d.f());
      }
    }),
    (ln.preconnect = function (m, h) {
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
    (ln.prefetchDNS = function (m) {
      typeof m == "string" && i.d.D(m);
    }),
    (ln.preinit = function (m, h) {
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
    (ln.preinitModule = function (m, h) {
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
    (ln.preload = function (m, h) {
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
    (ln.preloadModule = function (m, h) {
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
    (ln.requestFormReset = function (m) {
      i.d.r(m);
    }),
    (ln.unstable_batchedUpdates = function (m, h) {
      return m(h);
    }),
    (ln.useFormState = function (m, h, y) {
      return c.H.useFormState(m, h, y);
    }),
    (ln.useFormStatus = function () {
      return c.H.useHostTransitionStatus();
    }),
    (ln.version = "19.1.1"),
    ln
  );
}
var V0;
function pw() {
  if (V0) return Rh.exports;
  V0 = 1;
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
  return (e(), (Rh.exports = PR()), Rh.exports);
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $0;
function FR() {
  if ($0) return qs;
  $0 = 1;
  var e = LR(),
    t = $m(),
    a = pw();
  function i(n) {
    var r = "https://react.dev/errors/" + n;
    if (1 < arguments.length) {
      r += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var o = 2; o < arguments.length; o++)
        r += "&args[]=" + encodeURIComponent(arguments[o]);
    }
    return (
      "Minified React error #" +
      n +
      "; visit " +
      r +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function s(n) {
    return !(!n || (n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11));
  }
  function u(n) {
    var r = n,
      o = n;
    if (n.alternate) for (; r.return; ) r = r.return;
    else {
      n = r;
      do ((r = n), (r.flags & 4098) !== 0 && (o = r.return), (n = r.return));
      while (n);
    }
    return r.tag === 3 ? o : null;
  }
  function c(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (
        (r === null && ((n = n.alternate), n !== null && (r = n.memoizedState)),
        r !== null)
      )
        return r.dehydrated;
    }
    return null;
  }
  function d(n) {
    if (u(n) !== n) throw Error(i(188));
  }
  function m(n) {
    var r = n.alternate;
    if (!r) {
      if (((r = u(n)), r === null)) throw Error(i(188));
      return r !== n ? null : n;
    }
    for (var o = n, l = r; ; ) {
      var f = o.return;
      if (f === null) break;
      var p = f.alternate;
      if (p === null) {
        if (((l = f.return), l !== null)) {
          o = l;
          continue;
        }
        break;
      }
      if (f.child === p.child) {
        for (p = f.child; p; ) {
          if (p === o) return (d(f), n);
          if (p === l) return (d(f), r);
          p = p.sibling;
        }
        throw Error(i(188));
      }
      if (o.return !== l.return) ((o = f), (l = p));
      else {
        for (var b = !1, R = f.child; R; ) {
          if (R === o) {
            ((b = !0), (o = f), (l = p));
            break;
          }
          if (R === l) {
            ((b = !0), (l = f), (o = p));
            break;
          }
          R = R.sibling;
        }
        if (!b) {
          for (R = p.child; R; ) {
            if (R === o) {
              ((b = !0), (o = p), (l = f));
              break;
            }
            if (R === l) {
              ((b = !0), (l = p), (o = f));
              break;
            }
            R = R.sibling;
          }
          if (!b) throw Error(i(189));
        }
      }
      if (o.alternate !== l) throw Error(i(190));
    }
    if (o.tag !== 3) throw Error(i(188));
    return o.stateNode.current === o ? n : r;
  }
  function h(n) {
    var r = n.tag;
    if (r === 5 || r === 26 || r === 27 || r === 6) return n;
    for (n = n.child; n !== null; ) {
      if (((r = h(n)), r !== null)) return r;
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
    F = Symbol.for("react.consumer"),
    D = Symbol.for("react.context"),
    B = Symbol.for("react.forward_ref"),
    L = Symbol.for("react.suspense"),
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
      case L:
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
        case F:
          return (n._context.displayName || "Context") + ".Consumer";
        case B:
          var r = n.render;
          return (
            (n = n.displayName),
            n ||
              ((n = r.displayName || r.name || ""),
              (n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef")),
            n
          );
        case Y:
          return (
            (r = n.displayName || null),
            r !== null ? r : ce(n.type) || "Memo"
          );
        case Q:
          ((r = n._payload), (n = n._init));
          try {
            return ce(n(r));
          } catch {}
      }
    return null;
  }
  var ge = Array.isArray,
    U = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    ne = a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    q = { pending: !1, data: null, method: null, action: null },
    ie = [],
    N = -1;
  function W(n) {
    return { current: n };
  }
  function fe(n) {
    0 > N || ((n.current = ie[N]), (ie[N] = null), N--);
  }
  function le(n, r) {
    (N++, (ie[N] = n.current), (n.current = r));
  }
  var ve = W(null),
    ke = W(null),
    Oe = W(null),
    Ne = W(null);
  function qe(n, r) {
    switch ((le(Oe, r), le(ke, n), le(ve, null), r.nodeType)) {
      case 9:
      case 11:
        n = (n = r.documentElement) && (n = n.namespaceURI) ? l0(n) : 0;
        break;
      default:
        if (((n = r.tagName), (r = r.namespaceURI)))
          ((r = l0(r)), (n = u0(r, n)));
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
    var r = ve.current,
      o = u0(r, n.type);
    r !== o && (le(ke, n), le(ve, o));
  }
  function ut(n) {
    (ke.current === n && (fe(ve), fe(ke)),
      Ne.current === n && (fe(Ne), (Bs._currentValue = q)));
  }
  var Qt = Object.prototype.hasOwnProperty,
    Vn = e.unstable_scheduleCallback,
    cn = e.unstable_cancelCallback,
    Fi = e.unstable_shouldYield,
    Bi = e.unstable_requestPaint,
    Bt = e.unstable_now,
    Jo = e.unstable_getCurrentPriorityLevel,
    ti = e.unstable_ImmediatePriority,
    ni = e.unstable_UserBlockingPriority,
    $n = e.unstable_NormalPriority,
    sr = e.unstable_LowPriority,
    gr = e.unstable_IdlePriority,
    ri = e.log,
    Ur = e.unstable_setDisableYieldValue,
    Vt = null,
    yt = null;
  function gn(n) {
    if (
      (typeof ri == "function" && Ur(n),
      yt && typeof yt.setStrictMode == "function")
    )
      try {
        yt.setStrictMode(Vt, n);
      } catch {}
  }
  var $t = Math.clz32 ? Math.clz32 : da,
    ai = Math.log,
    An = Math.LN2;
  function da(n) {
    return ((n >>>= 0), n === 0 ? 32 : (31 - ((ai(n) / An) | 0)) | 0);
  }
  var lr = 256,
    Pr = 4194304;
  function Hn(n) {
    var r = n & 42;
    if (r !== 0) return r;
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
  function Fr(n, r, o) {
    var l = n.pendingLanes;
    if (l === 0) return 0;
    var f = 0,
      p = n.suspendedLanes,
      b = n.pingedLanes;
    n = n.warmLanes;
    var R = l & 134217727;
    return (
      R !== 0
        ? ((l = R & ~p),
          l !== 0
            ? (f = Hn(l))
            : ((b &= R),
              b !== 0
                ? (f = Hn(b))
                : o || ((o = R & ~n), o !== 0 && (f = Hn(o)))))
        : ((R = l & ~p),
          R !== 0
            ? (f = Hn(R))
            : b !== 0
              ? (f = Hn(b))
              : o || ((o = l & ~n), o !== 0 && (f = Hn(o)))),
      f === 0
        ? 0
        : r !== 0 &&
            r !== f &&
            (r & p) === 0 &&
            ((p = f & -f),
            (o = r & -r),
            p >= o || (p === 32 && (o & 4194048) !== 0))
          ? r
          : f
    );
  }
  function Cn(n, r) {
    return (n.pendingLanes & ~(n.suspendedLanes & ~n.pingedLanes) & r) === 0;
  }
  function ii(n, r) {
    switch (n) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return r + 250;
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
        return r + 5e3;
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
  function ha() {
    var n = lr;
    return ((lr <<= 1), (lr & 4194048) === 0 && (lr = 256), n);
  }
  function Vi() {
    var n = Pr;
    return ((Pr <<= 1), (Pr & 62914560) === 0 && (Pr = 4194304), n);
  }
  function oi(n) {
    for (var r = [], o = 0; 31 > o; o++) r.push(n);
    return r;
  }
  function ma(n, r) {
    ((n.pendingLanes |= r),
      r !== 268435456 &&
        ((n.suspendedLanes = 0), (n.pingedLanes = 0), (n.warmLanes = 0)));
  }
  function si(n, r, o, l, f, p) {
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
      j = n.expirationTimes,
      K = n.hiddenUpdates;
    for (o = b & ~o; 0 < o; ) {
      var re = 31 - $t(o),
        ue = 1 << re;
      ((R[re] = 0), (j[re] = -1));
      var X = K[re];
      if (X !== null)
        for (K[re] = null, re = 0; re < X.length; re++) {
          var J = X[re];
          J !== null && (J.lane &= -536870913);
        }
      o &= ~ue;
    }
    (l !== 0 && A(n, l, 0),
      p !== 0 && f === 0 && n.tag !== 0 && (n.suspendedLanes |= p & ~(b & ~r)));
  }
  function A(n, r, o) {
    ((n.pendingLanes |= r), (n.suspendedLanes &= ~r));
    var l = 31 - $t(r);
    ((n.entangledLanes |= r),
      (n.entanglements[l] = n.entanglements[l] | 1073741824 | (o & 4194090)));
  }
  function P(n, r) {
    var o = (n.entangledLanes |= r);
    for (n = n.entanglements; o; ) {
      var l = 31 - $t(o),
        f = 1 << l;
      ((f & r) | (n[l] & r) && (n[l] |= r), (o &= ~f));
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
    return n !== 0 ? n : ((n = window.event), n === void 0 ? 32 : C0(n.type));
  }
  function M(n, r) {
    var o = ne.p;
    try {
      return ((ne.p = n), r());
    } finally {
      ne.p = o;
    }
  }
  var z = Math.random().toString(36).slice(2),
    $ = "__reactFiber$" + z,
    Z = "__reactProps$" + z,
    oe = "__reactContainer$" + z,
    de = "__reactEvents$" + z,
    ye = "__reactListeners$" + z,
    Ee = "__reactHandles$" + z,
    xe = "__reactResources$" + z,
    _e = "__reactMarker$" + z;
  function Ae(n) {
    (delete n[$], delete n[Z], delete n[de], delete n[ye], delete n[Ee]);
  }
  function Fe(n) {
    var r = n[$];
    if (r) return r;
    for (var o = n.parentNode; o; ) {
      if ((r = o[oe] || o[$])) {
        if (
          ((o = r.alternate),
          r.child !== null || (o !== null && o.child !== null))
        )
          for (n = h0(n); n !== null; ) {
            if ((o = n[$])) return o;
            n = h0(n);
          }
        return r;
      }
      ((n = o), (o = n.parentNode));
    }
    return null;
  }
  function Je(n) {
    if ((n = n[$] || n[oe])) {
      var r = n.tag;
      if (r === 5 || r === 6 || r === 13 || r === 26 || r === 27 || r === 3)
        return n;
    }
    return null;
  }
  function it(n) {
    var r = n.tag;
    if (r === 5 || r === 26 || r === 27 || r === 6) return n.stateNode;
    throw Error(i(33));
  }
  function vt(n) {
    var r = n[xe];
    return (
      r ||
        (r = n[xe] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      r
    );
  }
  function Pe(n) {
    n[_e] = !0;
  }
  var ct = new Set(),
    vr = {};
  function Tn(n, r) {
    (fn(n, r), fn(n + "Capture", r));
  }
  function fn(n, r) {
    for (vr[n] = r, n = 0; n < r.length; n++) ct.add(r[n]);
  }
  var Zn = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    $i = {},
    pa = {};
  function Br(n) {
    return Qt.call(pa, n)
      ? !0
      : Qt.call($i, n)
        ? !1
        : Zn.test(n)
          ? (pa[n] = !0)
          : (($i[n] = !0), !1);
  }
  function Vr(n, r, o) {
    if (Br(r))
      if (o === null) n.removeAttribute(r);
      else {
        switch (typeof o) {
          case "undefined":
          case "function":
          case "symbol":
            n.removeAttribute(r);
            return;
          case "boolean":
            var l = r.toLowerCase().slice(0, 5);
            if (l !== "data-" && l !== "aria-") {
              n.removeAttribute(r);
              return;
            }
        }
        n.setAttribute(r, "" + o);
      }
  }
  function $r(n, r, o) {
    if (o === null) n.removeAttribute(r);
    else {
      switch (typeof o) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          n.removeAttribute(r);
          return;
      }
      n.setAttribute(r, "" + o);
    }
  }
  function Be(n, r, o, l) {
    if (l === null) n.removeAttribute(o);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          n.removeAttribute(o);
          return;
      }
      n.setAttributeNS(r, o, "" + l);
    }
  }
  var kt, Hr;
  function vn(n) {
    if (kt === void 0)
      try {
        throw Error();
      } catch (o) {
        var r = o.stack.trim().match(/\n( *(at )?)/);
        ((kt = (r && r[1]) || ""),
          (Hr =
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
      kt +
      n +
      Hr
    );
  }
  var _t = !1;
  function ya(n, r) {
    if (!n || _t) return "";
    _t = !0;
    var o = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = {
        DetermineComponentFrameRoot: function () {
          try {
            if (r) {
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
      l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var f = Object.getOwnPropertyDescriptor(
        l.DetermineComponentFrameRoot,
        "name",
      );
      f &&
        f.configurable &&
        Object.defineProperty(l.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var p = l.DetermineComponentFrameRoot(),
        b = p[0],
        R = p[1];
      if (b && R) {
        var j = b.split(`
`),
          K = R.split(`
`);
        for (
          f = l = 0;
          l < j.length && !j[l].includes("DetermineComponentFrameRoot");

        )
          l++;
        for (; f < K.length && !K[f].includes("DetermineComponentFrameRoot"); )
          f++;
        if (l === j.length || f === K.length)
          for (
            l = j.length - 1, f = K.length - 1;
            1 <= l && 0 <= f && j[l] !== K[f];

          )
            f--;
        for (; 1 <= l && 0 <= f; l--, f--)
          if (j[l] !== K[f]) {
            if (l !== 1 || f !== 1)
              do
                if ((l--, f--, 0 > f || j[l] !== K[f])) {
                  var re =
                    `
` + j[l].replace(" at new ", " at ");
                  return (
                    n.displayName &&
                      re.includes("<anonymous>") &&
                      (re = re.replace("<anonymous>", n.displayName)),
                    re
                  );
                }
              while (1 <= l && 0 <= f);
            break;
          }
      }
    } finally {
      ((_t = !1), (Error.prepareStackTrace = o));
    }
    return (o = n ? n.displayName || n.name : "") ? vn(o) : "";
  }
  function Ml(n) {
    switch (n.tag) {
      case 26:
      case 27:
      case 5:
        return vn(n.type);
      case 16:
        return vn("Lazy");
      case 13:
        return vn("Suspense");
      case 19:
        return vn("SuspenseList");
      case 0:
      case 15:
        return ya(n.type, !1);
      case 11:
        return ya(n.type.render, !1);
      case 1:
        return ya(n.type, !0);
      case 31:
        return vn("Activity");
      default:
        return "";
    }
  }
  function Nl(n) {
    try {
      var r = "";
      do ((r += Ml(n)), (n = n.return));
      while (n);
      return r;
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
  function In(n) {
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
  function ry(n) {
    var r = n.type;
    return (
      (n = n.nodeName) &&
      n.toLowerCase() === "input" &&
      (r === "checkbox" || r === "radio")
    );
  }
  function AE(n) {
    var r = ry(n) ? "checked" : "value",
      o = Object.getOwnPropertyDescriptor(n.constructor.prototype, r),
      l = "" + n[r];
    if (
      !n.hasOwnProperty(r) &&
      typeof o < "u" &&
      typeof o.get == "function" &&
      typeof o.set == "function"
    ) {
      var f = o.get,
        p = o.set;
      return (
        Object.defineProperty(n, r, {
          configurable: !0,
          get: function () {
            return f.call(this);
          },
          set: function (b) {
            ((l = "" + b), p.call(this, b));
          },
        }),
        Object.defineProperty(n, r, { enumerable: o.enumerable }),
        {
          getValue: function () {
            return l;
          },
          setValue: function (b) {
            l = "" + b;
          },
          stopTracking: function () {
            ((n._valueTracker = null), delete n[r]);
          },
        }
      );
    }
  }
  function zl(n) {
    n._valueTracker || (n._valueTracker = AE(n));
  }
  function ay(n) {
    if (!n) return !1;
    var r = n._valueTracker;
    if (!r) return !0;
    var o = r.getValue(),
      l = "";
    return (
      n && (l = ry(n) ? (n.checked ? "true" : "false") : n.value),
      (n = l),
      n !== o ? (r.setValue(n), !0) : !1
    );
  }
  function kl(n) {
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
  var CE = /[\n"\\]/g;
  function qn(n) {
    return n.replace(CE, function (r) {
      return "\\" + r.charCodeAt(0).toString(16) + " ";
    });
  }
  function gf(n, r, o, l, f, p, b, R) {
    ((n.name = ""),
      b != null &&
      typeof b != "function" &&
      typeof b != "symbol" &&
      typeof b != "boolean"
        ? (n.type = b)
        : n.removeAttribute("type"),
      r != null
        ? b === "number"
          ? ((r === 0 && n.value === "") || n.value != r) &&
            (n.value = "" + In(r))
          : n.value !== "" + In(r) && (n.value = "" + In(r))
        : (b !== "submit" && b !== "reset") || n.removeAttribute("value"),
      r != null
        ? vf(n, b, In(r))
        : o != null
          ? vf(n, b, In(o))
          : l != null && n.removeAttribute("value"),
      f == null && p != null && (n.defaultChecked = !!p),
      f != null &&
        (n.checked = f && typeof f != "function" && typeof f != "symbol"),
      R != null &&
      typeof R != "function" &&
      typeof R != "symbol" &&
      typeof R != "boolean"
        ? (n.name = "" + In(R))
        : n.removeAttribute("name"));
  }
  function iy(n, r, o, l, f, p, b, R) {
    if (
      (p != null &&
        typeof p != "function" &&
        typeof p != "symbol" &&
        typeof p != "boolean" &&
        (n.type = p),
      r != null || o != null)
    ) {
      if (!((p !== "submit" && p !== "reset") || r != null)) return;
      ((o = o != null ? "" + In(o) : ""),
        (r = r != null ? "" + In(r) : o),
        R || r === n.value || (n.value = r),
        (n.defaultValue = r));
    }
    ((l = l ?? f),
      (l = typeof l != "function" && typeof l != "symbol" && !!l),
      (n.checked = R ? n.checked : !!l),
      (n.defaultChecked = !!l),
      b != null &&
        typeof b != "function" &&
        typeof b != "symbol" &&
        typeof b != "boolean" &&
        (n.name = b));
  }
  function vf(n, r, o) {
    (r === "number" && kl(n.ownerDocument) === n) ||
      n.defaultValue === "" + o ||
      (n.defaultValue = "" + o);
  }
  function Hi(n, r, o, l) {
    if (((n = n.options), r)) {
      r = {};
      for (var f = 0; f < o.length; f++) r["$" + o[f]] = !0;
      for (o = 0; o < n.length; o++)
        ((f = r.hasOwnProperty("$" + n[o].value)),
          n[o].selected !== f && (n[o].selected = f),
          f && l && (n[o].defaultSelected = !0));
    } else {
      for (o = "" + In(o), r = null, f = 0; f < n.length; f++) {
        if (n[f].value === o) {
          ((n[f].selected = !0), l && (n[f].defaultSelected = !0));
          return;
        }
        r !== null || n[f].disabled || (r = n[f]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function oy(n, r, o) {
    if (
      r != null &&
      ((r = "" + In(r)), r !== n.value && (n.value = r), o == null)
    ) {
      n.defaultValue !== r && (n.defaultValue = r);
      return;
    }
    n.defaultValue = o != null ? "" + In(o) : "";
  }
  function sy(n, r, o, l) {
    if (r == null) {
      if (l != null) {
        if (o != null) throw Error(i(92));
        if (ge(l)) {
          if (1 < l.length) throw Error(i(93));
          l = l[0];
        }
        o = l;
      }
      (o == null && (o = ""), (r = o));
    }
    ((o = In(r)),
      (n.defaultValue = o),
      (l = n.textContent),
      l === o && l !== "" && l !== null && (n.value = l));
  }
  function Zi(n, r) {
    if (r) {
      var o = n.firstChild;
      if (o && o === n.lastChild && o.nodeType === 3) {
        o.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var TE = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " ",
    ),
  );
  function ly(n, r, o) {
    var l = r.indexOf("--") === 0;
    o == null || typeof o == "boolean" || o === ""
      ? l
        ? n.setProperty(r, "")
        : r === "float"
          ? (n.cssFloat = "")
          : (n[r] = "")
      : l
        ? n.setProperty(r, o)
        : typeof o != "number" || o === 0 || TE.has(r)
          ? r === "float"
            ? (n.cssFloat = o)
            : (n[r] = ("" + o).trim())
          : (n[r] = o + "px");
  }
  function uy(n, r, o) {
    if (r != null && typeof r != "object") throw Error(i(62));
    if (((n = n.style), o != null)) {
      for (var l in o)
        !o.hasOwnProperty(l) ||
          (r != null && r.hasOwnProperty(l)) ||
          (l.indexOf("--") === 0
            ? n.setProperty(l, "")
            : l === "float"
              ? (n.cssFloat = "")
              : (n[l] = ""));
      for (var f in r)
        ((l = r[f]), r.hasOwnProperty(f) && o[f] !== l && ly(n, f, l));
    } else for (var p in r) r.hasOwnProperty(p) && ly(n, p, r[p]);
  }
  function bf(n) {
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
  var DE = new Map([
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
    ME =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function jl(n) {
    return ME.test("" + n)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : n;
  }
  var wf = null;
  function Sf(n) {
    return (
      (n = n.target || n.srcElement || window),
      n.correspondingUseElement && (n = n.correspondingUseElement),
      n.nodeType === 3 ? n.parentNode : n
    );
  }
  var Ii = null,
    qi = null;
  function cy(n) {
    var r = Je(n);
    if (r && (n = r.stateNode)) {
      var o = n[Z] || null;
      e: switch (((n = r.stateNode), r.type)) {
        case "input":
          if (
            (gf(
              n,
              o.value,
              o.defaultValue,
              o.defaultValue,
              o.checked,
              o.defaultChecked,
              o.type,
              o.name,
            ),
            (r = o.name),
            o.type === "radio" && r != null)
          ) {
            for (o = n; o.parentNode; ) o = o.parentNode;
            for (
              o = o.querySelectorAll(
                'input[name="' + qn("" + r) + '"][type="radio"]',
              ),
                r = 0;
              r < o.length;
              r++
            ) {
              var l = o[r];
              if (l !== n && l.form === n.form) {
                var f = l[Z] || null;
                if (!f) throw Error(i(90));
                gf(
                  l,
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
            for (r = 0; r < o.length; r++)
              ((l = o[r]), l.form === n.form && ay(l));
          }
          break e;
        case "textarea":
          oy(n, o.value, o.defaultValue);
          break e;
        case "select":
          ((r = o.value), r != null && Hi(n, !!o.multiple, r, !1));
      }
    }
  }
  var _f = !1;
  function fy(n, r, o) {
    if (_f) return n(r, o);
    _f = !0;
    try {
      var l = n(r);
      return l;
    } finally {
      if (
        ((_f = !1),
        (Ii !== null || qi !== null) &&
          (wu(), Ii && ((r = Ii), (n = qi), (qi = Ii = null), cy(r), n)))
      )
        for (r = 0; r < n.length; r++) cy(n[r]);
    }
  }
  function Wo(n, r) {
    var o = n.stateNode;
    if (o === null) return null;
    var l = o[Z] || null;
    if (l === null) return null;
    o = l[r];
    e: switch (r) {
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
          ((n = n.type),
          (l = !(
            n === "button" ||
            n === "input" ||
            n === "select" ||
            n === "textarea"
          ))),
          (n = !l));
        break e;
      default:
        n = !1;
    }
    if (n) return null;
    if (o && typeof o != "function") throw Error(i(231, r, typeof o));
    return o;
  }
  var Zr = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    Ef = !1;
  if (Zr)
    try {
      var es = {};
      (Object.defineProperty(es, "passive", {
        get: function () {
          Ef = !0;
        },
      }),
        window.addEventListener("test", es, es),
        window.removeEventListener("test", es, es));
    } catch {
      Ef = !1;
    }
  var ga = null,
    xf = null,
    Ll = null;
  function dy() {
    if (Ll) return Ll;
    var n,
      r = xf,
      o = r.length,
      l,
      f = "value" in ga ? ga.value : ga.textContent,
      p = f.length;
    for (n = 0; n < o && r[n] === f[n]; n++);
    var b = o - n;
    for (l = 1; l <= b && r[o - l] === f[p - l]; l++);
    return (Ll = f.slice(n, 1 < l ? 1 - l : void 0));
  }
  function Ul(n) {
    var r = n.keyCode;
    return (
      "charCode" in n
        ? ((n = n.charCode), n === 0 && r === 13 && (n = 13))
        : (n = r),
      n === 10 && (n = 13),
      32 <= n || n === 13 ? n : 0
    );
  }
  function Pl() {
    return !0;
  }
  function hy() {
    return !1;
  }
  function bn(n) {
    function r(o, l, f, p, b) {
      ((this._reactName = o),
        (this._targetInst = f),
        (this.type = l),
        (this.nativeEvent = p),
        (this.target = b),
        (this.currentTarget = null));
      for (var R in n)
        n.hasOwnProperty(R) && ((o = n[R]), (this[R] = o ? o(p) : p[R]));
      return (
        (this.isDefaultPrevented = (
          p.defaultPrevented != null ? p.defaultPrevented : p.returnValue === !1
        )
          ? Pl
          : hy),
        (this.isPropagationStopped = hy),
        this
      );
    }
    return (
      y(r.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var o = this.nativeEvent;
          o &&
            (o.preventDefault
              ? o.preventDefault()
              : typeof o.returnValue != "unknown" && (o.returnValue = !1),
            (this.isDefaultPrevented = Pl));
        },
        stopPropagation: function () {
          var o = this.nativeEvent;
          o &&
            (o.stopPropagation
              ? o.stopPropagation()
              : typeof o.cancelBubble != "unknown" && (o.cancelBubble = !0),
            (this.isPropagationStopped = Pl));
        },
        persist: function () {},
        isPersistent: Pl,
      }),
      r
    );
  }
  var li = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (n) {
        return n.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Fl = bn(li),
    ts = y({}, li, { view: 0, detail: 0 }),
    NE = bn(ts),
    Rf,
    Of,
    ns,
    Bl = y({}, ts, {
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
      getModifierState: Cf,
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
          : (n !== ns &&
              (ns && n.type === "mousemove"
                ? ((Rf = n.screenX - ns.screenX), (Of = n.screenY - ns.screenY))
                : (Of = Rf = 0),
              (ns = n)),
            Rf);
      },
      movementY: function (n) {
        return "movementY" in n ? n.movementY : Of;
      },
    }),
    my = bn(Bl),
    zE = y({}, Bl, { dataTransfer: 0 }),
    kE = bn(zE),
    jE = y({}, ts, { relatedTarget: 0 }),
    Af = bn(jE),
    LE = y({}, li, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    UE = bn(LE),
    PE = y({}, li, {
      clipboardData: function (n) {
        return "clipboardData" in n ? n.clipboardData : window.clipboardData;
      },
    }),
    FE = bn(PE),
    BE = y({}, li, { data: 0 }),
    py = bn(BE),
    VE = {
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
    $E = {
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
    HE = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function ZE(n) {
    var r = this.nativeEvent;
    return r.getModifierState
      ? r.getModifierState(n)
      : (n = HE[n])
        ? !!r[n]
        : !1;
  }
  function Cf() {
    return ZE;
  }
  var IE = y({}, ts, {
      key: function (n) {
        if (n.key) {
          var r = VE[n.key] || n.key;
          if (r !== "Unidentified") return r;
        }
        return n.type === "keypress"
          ? ((n = Ul(n)), n === 13 ? "Enter" : String.fromCharCode(n))
          : n.type === "keydown" || n.type === "keyup"
            ? $E[n.keyCode] || "Unidentified"
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
      getModifierState: Cf,
      charCode: function (n) {
        return n.type === "keypress" ? Ul(n) : 0;
      },
      keyCode: function (n) {
        return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
      },
      which: function (n) {
        return n.type === "keypress"
          ? Ul(n)
          : n.type === "keydown" || n.type === "keyup"
            ? n.keyCode
            : 0;
      },
    }),
    qE = bn(IE),
    GE = y({}, Bl, {
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
    yy = bn(GE),
    YE = y({}, ts, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Cf,
    }),
    KE = bn(YE),
    QE = y({}, li, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    XE = bn(QE),
    JE = y({}, Bl, {
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
    WE = bn(JE),
    ex = y({}, li, { newState: 0, oldState: 0 }),
    tx = bn(ex),
    nx = [9, 13, 27, 32],
    Tf = Zr && "CompositionEvent" in window,
    rs = null;
  Zr && "documentMode" in document && (rs = document.documentMode);
  var rx = Zr && "TextEvent" in window && !rs,
    gy = Zr && (!Tf || (rs && 8 < rs && 11 >= rs)),
    vy = " ",
    by = !1;
  function wy(n, r) {
    switch (n) {
      case "keyup":
        return nx.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Sy(n) {
    return (
      (n = n.detail),
      typeof n == "object" && "data" in n ? n.data : null
    );
  }
  var Gi = !1;
  function ax(n, r) {
    switch (n) {
      case "compositionend":
        return Sy(r);
      case "keypress":
        return r.which !== 32 ? null : ((by = !0), vy);
      case "textInput":
        return ((n = r.data), n === vy && by ? null : n);
      default:
        return null;
    }
  }
  function ix(n, r) {
    if (Gi)
      return n === "compositionend" || (!Tf && wy(n, r))
        ? ((n = dy()), (Ll = xf = ga = null), (Gi = !1), n)
        : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || (r.ctrlKey && r.altKey)) {
          if (r.char && 1 < r.char.length) return r.char;
          if (r.which) return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return gy && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var ox = {
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
  function _y(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!ox[n.type] : r === "textarea";
  }
  function Ey(n, r, o, l) {
    (Ii ? (qi ? qi.push(l) : (qi = [l])) : (Ii = l),
      (r = Ou(r, "onChange")),
      0 < r.length &&
        ((o = new Fl("onChange", "change", null, o, l)),
        n.push({ event: o, listeners: r })));
  }
  var as = null,
    is = null;
  function sx(n) {
    r0(n, 0);
  }
  function Vl(n) {
    var r = it(n);
    if (ay(r)) return n;
  }
  function xy(n, r) {
    if (n === "change") return r;
  }
  var Ry = !1;
  if (Zr) {
    var Df;
    if (Zr) {
      var Mf = "oninput" in document;
      if (!Mf) {
        var Oy = document.createElement("div");
        (Oy.setAttribute("oninput", "return;"),
          (Mf = typeof Oy.oninput == "function"));
      }
      Df = Mf;
    } else Df = !1;
    Ry = Df && (!document.documentMode || 9 < document.documentMode);
  }
  function Ay() {
    as && (as.detachEvent("onpropertychange", Cy), (is = as = null));
  }
  function Cy(n) {
    if (n.propertyName === "value" && Vl(is)) {
      var r = [];
      (Ey(r, is, n, Sf(n)), fy(sx, r));
    }
  }
  function lx(n, r, o) {
    n === "focusin"
      ? (Ay(), (as = r), (is = o), as.attachEvent("onpropertychange", Cy))
      : n === "focusout" && Ay();
  }
  function ux(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown")
      return Vl(is);
  }
  function cx(n, r) {
    if (n === "click") return Vl(r);
  }
  function fx(n, r) {
    if (n === "input" || n === "change") return Vl(r);
  }
  function dx(n, r) {
    return (n === r && (n !== 0 || 1 / n === 1 / r)) || (n !== n && r !== r);
  }
  var Dn = typeof Object.is == "function" ? Object.is : dx;
  function os(n, r) {
    if (Dn(n, r)) return !0;
    if (
      typeof n != "object" ||
      n === null ||
      typeof r != "object" ||
      r === null
    )
      return !1;
    var o = Object.keys(n),
      l = Object.keys(r);
    if (o.length !== l.length) return !1;
    for (l = 0; l < o.length; l++) {
      var f = o[l];
      if (!Qt.call(r, f) || !Dn(n[f], r[f])) return !1;
    }
    return !0;
  }
  function Ty(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function Dy(n, r) {
    var o = Ty(n);
    n = 0;
    for (var l; o; ) {
      if (o.nodeType === 3) {
        if (((l = n + o.textContent.length), n <= r && l >= r))
          return { node: o, offset: r - n };
        n = l;
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
      o = Ty(o);
    }
  }
  function My(n, r) {
    return n && r
      ? n === r
        ? !0
        : n && n.nodeType === 3
          ? !1
          : r && r.nodeType === 3
            ? My(n, r.parentNode)
            : "contains" in n
              ? n.contains(r)
              : n.compareDocumentPosition
                ? !!(n.compareDocumentPosition(r) & 16)
                : !1
      : !1;
  }
  function Ny(n) {
    n =
      n != null &&
      n.ownerDocument != null &&
      n.ownerDocument.defaultView != null
        ? n.ownerDocument.defaultView
        : window;
    for (var r = kl(n.document); r instanceof n.HTMLIFrameElement; ) {
      try {
        var o = typeof r.contentWindow.location.href == "string";
      } catch {
        o = !1;
      }
      if (o) n = r.contentWindow;
      else break;
      r = kl(n.document);
    }
    return r;
  }
  function Nf(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return (
      r &&
      ((r === "input" &&
        (n.type === "text" ||
          n.type === "search" ||
          n.type === "tel" ||
          n.type === "url" ||
          n.type === "password")) ||
        r === "textarea" ||
        n.contentEditable === "true")
    );
  }
  var hx = Zr && "documentMode" in document && 11 >= document.documentMode,
    Yi = null,
    zf = null,
    ss = null,
    kf = !1;
  function zy(n, r, o) {
    var l =
      o.window === o ? o.document : o.nodeType === 9 ? o : o.ownerDocument;
    kf ||
      Yi == null ||
      Yi !== kl(l) ||
      ((l = Yi),
      "selectionStart" in l && Nf(l)
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
      (ss && os(ss, l)) ||
        ((ss = l),
        (l = Ou(zf, "onSelect")),
        0 < l.length &&
          ((r = new Fl("onSelect", "select", null, r, o)),
          n.push({ event: r, listeners: l }),
          (r.target = Yi))));
  }
  function ui(n, r) {
    var o = {};
    return (
      (o[n.toLowerCase()] = r.toLowerCase()),
      (o["Webkit" + n] = "webkit" + r),
      (o["Moz" + n] = "moz" + r),
      o
    );
  }
  var Ki = {
      animationend: ui("Animation", "AnimationEnd"),
      animationiteration: ui("Animation", "AnimationIteration"),
      animationstart: ui("Animation", "AnimationStart"),
      transitionrun: ui("Transition", "TransitionRun"),
      transitionstart: ui("Transition", "TransitionStart"),
      transitioncancel: ui("Transition", "TransitionCancel"),
      transitionend: ui("Transition", "TransitionEnd"),
    },
    jf = {},
    ky = {};
  Zr &&
    ((ky = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Ki.animationend.animation,
      delete Ki.animationiteration.animation,
      delete Ki.animationstart.animation),
    "TransitionEvent" in window || delete Ki.transitionend.transition);
  function ci(n) {
    if (jf[n]) return jf[n];
    if (!Ki[n]) return n;
    var r = Ki[n],
      o;
    for (o in r) if (r.hasOwnProperty(o) && o in ky) return (jf[n] = r[o]);
    return n;
  }
  var jy = ci("animationend"),
    Ly = ci("animationiteration"),
    Uy = ci("animationstart"),
    mx = ci("transitionrun"),
    px = ci("transitionstart"),
    yx = ci("transitioncancel"),
    Py = ci("transitionend"),
    Fy = new Map(),
    Lf =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  Lf.push("scrollEnd");
  function ur(n, r) {
    (Fy.set(n, r), Tn(r, [n]));
  }
  var By = new WeakMap();
  function Gn(n, r) {
    if (typeof n == "object" && n !== null) {
      var o = By.get(n);
      return o !== void 0
        ? o
        : ((r = { value: n, source: r, stack: Nl(r) }), By.set(n, r), r);
    }
    return { value: n, source: r, stack: Nl(r) };
  }
  var Yn = [],
    Qi = 0,
    Uf = 0;
  function $l() {
    for (var n = Qi, r = (Uf = Qi = 0); r < n; ) {
      var o = Yn[r];
      Yn[r++] = null;
      var l = Yn[r];
      Yn[r++] = null;
      var f = Yn[r];
      Yn[r++] = null;
      var p = Yn[r];
      if (((Yn[r++] = null), l !== null && f !== null)) {
        var b = l.pending;
        (b === null ? (f.next = f) : ((f.next = b.next), (b.next = f)),
          (l.pending = f));
      }
      p !== 0 && Vy(o, f, p);
    }
  }
  function Hl(n, r, o, l) {
    ((Yn[Qi++] = n),
      (Yn[Qi++] = r),
      (Yn[Qi++] = o),
      (Yn[Qi++] = l),
      (Uf |= l),
      (n.lanes |= l),
      (n = n.alternate),
      n !== null && (n.lanes |= l));
  }
  function Pf(n, r, o, l) {
    return (Hl(n, r, o, l), Zl(n));
  }
  function Xi(n, r) {
    return (Hl(n, null, null, r), Zl(n));
  }
  function Vy(n, r, o) {
    n.lanes |= o;
    var l = n.alternate;
    l !== null && (l.lanes |= o);
    for (var f = !1, p = n.return; p !== null; )
      ((p.childLanes |= o),
        (l = p.alternate),
        l !== null && (l.childLanes |= o),
        p.tag === 22 &&
          ((n = p.stateNode), n === null || n._visibility & 1 || (f = !0)),
        (n = p),
        (p = p.return));
    return n.tag === 3
      ? ((p = n.stateNode),
        f &&
          r !== null &&
          ((f = 31 - $t(o)),
          (n = p.hiddenUpdates),
          (l = n[f]),
          l === null ? (n[f] = [r]) : l.push(r),
          (r.lane = o | 536870912)),
        p)
      : null;
  }
  function Zl(n) {
    if (50 < Ns) throw ((Ns = 0), (Zd = null), Error(i(185)));
    for (var r = n.return; r !== null; ) ((n = r), (r = n.return));
    return n.tag === 3 ? n.stateNode : null;
  }
  var Ji = {};
  function gx(n, r, o, l) {
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
      (this.pendingProps = r),
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
  function Mn(n, r, o, l) {
    return new gx(n, r, o, l);
  }
  function Ff(n) {
    return ((n = n.prototype), !(!n || !n.isReactComponent));
  }
  function Ir(n, r) {
    var o = n.alternate;
    return (
      o === null
        ? ((o = Mn(n.tag, r, n.key, n.mode)),
          (o.elementType = n.elementType),
          (o.type = n.type),
          (o.stateNode = n.stateNode),
          (o.alternate = n),
          (n.alternate = o))
        : ((o.pendingProps = r),
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
      (r = n.dependencies),
      (o.dependencies =
        r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }),
      (o.sibling = n.sibling),
      (o.index = n.index),
      (o.ref = n.ref),
      (o.refCleanup = n.refCleanup),
      o
    );
  }
  function $y(n, r) {
    n.flags &= 65011714;
    var o = n.alternate;
    return (
      o === null
        ? ((n.childLanes = 0),
          (n.lanes = r),
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
          (r = o.dependencies),
          (n.dependencies =
            r === null
              ? null
              : { lanes: r.lanes, firstContext: r.firstContext })),
      n
    );
  }
  function Il(n, r, o, l, f, p) {
    var b = 0;
    if (((l = n), typeof n == "function")) Ff(n) && (b = 1);
    else if (typeof n == "string")
      b = bR(n, o, ve.current)
        ? 26
        : n === "html" || n === "head" || n === "body"
          ? 27
          : 5;
    else
      e: switch (n) {
        case me:
          return (
            (n = Mn(31, o, r, f)),
            (n.elementType = me),
            (n.lanes = p),
            n
          );
        case S:
          return fi(o.children, f, p, r);
        case E:
          ((b = 8), (f |= 24));
          break;
        case x:
          return (
            (n = Mn(12, o, r, f | 2)),
            (n.elementType = x),
            (n.lanes = p),
            n
          );
        case L:
          return ((n = Mn(13, o, r, f)), (n.elementType = L), (n.lanes = p), n);
        case C:
          return ((n = Mn(19, o, r, f)), (n.elementType = C), (n.lanes = p), n);
        default:
          if (typeof n == "object" && n !== null)
            switch (n.$$typeof) {
              case T:
              case D:
                b = 10;
                break e;
              case F:
                b = 9;
                break e;
              case B:
                b = 11;
                break e;
              case Y:
                b = 14;
                break e;
              case Q:
                ((b = 16), (l = null));
                break e;
            }
          ((b = 29),
            (o = Error(i(130, n === null ? "null" : typeof n, ""))),
            (l = null));
      }
    return (
      (r = Mn(b, o, r, f)),
      (r.elementType = n),
      (r.type = l),
      (r.lanes = p),
      r
    );
  }
  function fi(n, r, o, l) {
    return ((n = Mn(7, n, l, r)), (n.lanes = o), n);
  }
  function Bf(n, r, o) {
    return ((n = Mn(6, n, null, r)), (n.lanes = o), n);
  }
  function Vf(n, r, o) {
    return (
      (r = Mn(4, n.children !== null ? n.children : [], n.key, r)),
      (r.lanes = o),
      (r.stateNode = {
        containerInfo: n.containerInfo,
        pendingChildren: null,
        implementation: n.implementation,
      }),
      r
    );
  }
  var Wi = [],
    eo = 0,
    ql = null,
    Gl = 0,
    Kn = [],
    Qn = 0,
    di = null,
    qr = 1,
    Gr = "";
  function hi(n, r) {
    ((Wi[eo++] = Gl), (Wi[eo++] = ql), (ql = n), (Gl = r));
  }
  function Hy(n, r, o) {
    ((Kn[Qn++] = qr), (Kn[Qn++] = Gr), (Kn[Qn++] = di), (di = n));
    var l = qr;
    n = Gr;
    var f = 32 - $t(l) - 1;
    ((l &= ~(1 << f)), (o += 1));
    var p = 32 - $t(r) + f;
    if (30 < p) {
      var b = f - (f % 5);
      ((p = (l & ((1 << b) - 1)).toString(32)),
        (l >>= b),
        (f -= b),
        (qr = (1 << (32 - $t(r) + f)) | (o << f) | l),
        (Gr = p + n));
    } else ((qr = (1 << p) | (o << f) | l), (Gr = n));
  }
  function $f(n) {
    n.return !== null && (hi(n, 1), Hy(n, 1, 0));
  }
  function Hf(n) {
    for (; n === ql; )
      ((ql = Wi[--eo]), (Wi[eo] = null), (Gl = Wi[--eo]), (Wi[eo] = null));
    for (; n === di; )
      ((di = Kn[--Qn]),
        (Kn[Qn] = null),
        (Gr = Kn[--Qn]),
        (Kn[Qn] = null),
        (qr = Kn[--Qn]),
        (Kn[Qn] = null));
  }
  var dn = null,
    Rt = null,
    nt = !1,
    mi = null,
    br = !1,
    Zf = Error(i(519));
  function pi(n) {
    var r = Error(i(418, ""));
    throw (cs(Gn(r, n)), Zf);
  }
  function Zy(n) {
    var r = n.stateNode,
      o = n.type,
      l = n.memoizedProps;
    switch (((r[$] = n), (r[Z] = l), o)) {
      case "dialog":
        (Qe("cancel", r), Qe("close", r));
        break;
      case "iframe":
      case "object":
      case "embed":
        Qe("load", r);
        break;
      case "video":
      case "audio":
        for (o = 0; o < ks.length; o++) Qe(ks[o], r);
        break;
      case "source":
        Qe("error", r);
        break;
      case "img":
      case "image":
      case "link":
        (Qe("error", r), Qe("load", r));
        break;
      case "details":
        Qe("toggle", r);
        break;
      case "input":
        (Qe("invalid", r),
          iy(
            r,
            l.value,
            l.defaultValue,
            l.checked,
            l.defaultChecked,
            l.type,
            l.name,
            !0,
          ),
          zl(r));
        break;
      case "select":
        Qe("invalid", r);
        break;
      case "textarea":
        (Qe("invalid", r), sy(r, l.value, l.defaultValue, l.children), zl(r));
    }
    ((o = l.children),
      (typeof o != "string" && typeof o != "number" && typeof o != "bigint") ||
      r.textContent === "" + o ||
      l.suppressHydrationWarning === !0 ||
      s0(r.textContent, o)
        ? (l.popover != null && (Qe("beforetoggle", r), Qe("toggle", r)),
          l.onScroll != null && Qe("scroll", r),
          l.onScrollEnd != null && Qe("scrollend", r),
          l.onClick != null && (r.onclick = Au),
          (r = !0))
        : (r = !1),
      r || pi(n));
  }
  function Iy(n) {
    for (dn = n.return; dn; )
      switch (dn.tag) {
        case 5:
        case 13:
          br = !1;
          return;
        case 27:
        case 3:
          br = !0;
          return;
        default:
          dn = dn.return;
      }
  }
  function ls(n) {
    if (n !== dn) return !1;
    if (!nt) return (Iy(n), (nt = !0), !1);
    var r = n.tag,
      o;
    if (
      ((o = r !== 3 && r !== 27) &&
        ((o = r === 5) &&
          ((o = n.type),
          (o =
            !(o !== "form" && o !== "button") || oh(n.type, n.memoizedProps))),
        (o = !o)),
      o && Rt && pi(n),
      Iy(n),
      r === 13)
    ) {
      if (((n = n.memoizedState), (n = n !== null ? n.dehydrated : null), !n))
        throw Error(i(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8)
            if (((o = n.data), o === "/$")) {
              if (r === 0) {
                Rt = fr(n.nextSibling);
                break e;
              }
              r--;
            } else (o !== "$" && o !== "$!" && o !== "$?") || r++;
          n = n.nextSibling;
        }
        Rt = null;
      }
    } else
      r === 27
        ? ((r = Rt), za(n.type) ? ((n = ch), (ch = null), (Rt = n)) : (Rt = r))
        : (Rt = dn ? fr(n.stateNode.nextSibling) : null);
    return !0;
  }
  function us() {
    ((Rt = dn = null), (nt = !1));
  }
  function qy() {
    var n = mi;
    return (
      n !== null &&
        (_n === null ? (_n = n) : _n.push.apply(_n, n), (mi = null)),
      n
    );
  }
  function cs(n) {
    mi === null ? (mi = [n]) : mi.push(n);
  }
  var If = W(null),
    yi = null,
    Yr = null;
  function va(n, r, o) {
    (le(If, r._currentValue), (r._currentValue = o));
  }
  function Kr(n) {
    ((n._currentValue = If.current), fe(If));
  }
  function qf(n, r, o) {
    for (; n !== null; ) {
      var l = n.alternate;
      if (
        ((n.childLanes & r) !== r
          ? ((n.childLanes |= r), l !== null && (l.childLanes |= r))
          : l !== null && (l.childLanes & r) !== r && (l.childLanes |= r),
        n === o)
      )
        break;
      n = n.return;
    }
  }
  function Gf(n, r, o, l) {
    var f = n.child;
    for (f !== null && (f.return = n); f !== null; ) {
      var p = f.dependencies;
      if (p !== null) {
        var b = f.child;
        p = p.firstContext;
        e: for (; p !== null; ) {
          var R = p;
          p = f;
          for (var j = 0; j < r.length; j++)
            if (R.context === r[j]) {
              ((p.lanes |= o),
                (R = p.alternate),
                R !== null && (R.lanes |= o),
                qf(p.return, o, n),
                l || (b = null));
              break e;
            }
          p = R.next;
        }
      } else if (f.tag === 18) {
        if (((b = f.return), b === null)) throw Error(i(341));
        ((b.lanes |= o),
          (p = b.alternate),
          p !== null && (p.lanes |= o),
          qf(b, o, n),
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
  function fs(n, r, o, l) {
    n = null;
    for (var f = r, p = !1; f !== null; ) {
      if (!p) {
        if ((f.flags & 524288) !== 0) p = !0;
        else if ((f.flags & 262144) !== 0) break;
      }
      if (f.tag === 10) {
        var b = f.alternate;
        if (b === null) throw Error(i(387));
        if (((b = b.memoizedProps), b !== null)) {
          var R = f.type;
          Dn(f.pendingProps.value, b.value) ||
            (n !== null ? n.push(R) : (n = [R]));
        }
      } else if (f === Ne.current) {
        if (((b = f.alternate), b === null)) throw Error(i(387));
        b.memoizedState.memoizedState !== f.memoizedState.memoizedState &&
          (n !== null ? n.push(Bs) : (n = [Bs]));
      }
      f = f.return;
    }
    (n !== null && Gf(r, n, o, l), (r.flags |= 262144));
  }
  function Yl(n) {
    for (n = n.firstContext; n !== null; ) {
      if (!Dn(n.context._currentValue, n.memoizedValue)) return !0;
      n = n.next;
    }
    return !1;
  }
  function gi(n) {
    ((yi = n),
      (Yr = null),
      (n = n.dependencies),
      n !== null && (n.firstContext = null));
  }
  function sn(n) {
    return Gy(yi, n);
  }
  function Kl(n, r) {
    return (yi === null && gi(n), Gy(n, r));
  }
  function Gy(n, r) {
    var o = r._currentValue;
    if (((r = { context: r, memoizedValue: o, next: null }), Yr === null)) {
      if (n === null) throw Error(i(308));
      ((Yr = r),
        (n.dependencies = { lanes: 0, firstContext: r }),
        (n.flags |= 524288));
    } else Yr = Yr.next = r;
    return o;
  }
  var vx =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var n = [],
              r = (this.signal = {
                aborted: !1,
                addEventListener: function (o, l) {
                  n.push(l);
                },
              });
            this.abort = function () {
              ((r.aborted = !0),
                n.forEach(function (o) {
                  return o();
                }));
            };
          },
    bx = e.unstable_scheduleCallback,
    wx = e.unstable_NormalPriority,
    Ht = {
      $$typeof: D,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Yf() {
    return { controller: new vx(), data: new Map(), refCount: 0 };
  }
  function ds(n) {
    (n.refCount--,
      n.refCount === 0 &&
        bx(wx, function () {
          n.controller.abort();
        }));
  }
  var hs = null,
    Kf = 0,
    to = 0,
    no = null;
  function Sx(n, r) {
    if (hs === null) {
      var o = (hs = []);
      ((Kf = 0),
        (to = Xd()),
        (no = {
          status: "pending",
          value: void 0,
          then: function (l) {
            o.push(l);
          },
        }));
    }
    return (Kf++, r.then(Yy, Yy), r);
  }
  function Yy() {
    if (--Kf === 0 && hs !== null) {
      no !== null && (no.status = "fulfilled");
      var n = hs;
      ((hs = null), (to = 0), (no = null));
      for (var r = 0; r < n.length; r++) (0, n[r])();
    }
  }
  function _x(n, r) {
    var o = [],
      l = {
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
          ((l.status = "fulfilled"), (l.value = r));
          for (var f = 0; f < o.length; f++) (0, o[f])(r);
        },
        function (f) {
          for (l.status = "rejected", l.reason = f, f = 0; f < o.length; f++)
            (0, o[f])(void 0);
        },
      ),
      l
    );
  }
  var Ky = U.S;
  U.S = function (n, r) {
    (typeof r == "object" &&
      r !== null &&
      typeof r.then == "function" &&
      Sx(n, r),
      Ky !== null && Ky(n, r));
  };
  var vi = W(null);
  function Qf() {
    var n = vi.current;
    return n !== null ? n : pt.pooledCache;
  }
  function Ql(n, r) {
    r === null ? le(vi, vi.current) : le(vi, r.pool);
  }
  function Qy() {
    var n = Qf();
    return n === null ? null : { parent: Ht._currentValue, pool: n };
  }
  var ms = Error(i(460)),
    Xy = Error(i(474)),
    Xl = Error(i(542)),
    Xf = { then: function () {} };
  function Jy(n) {
    return ((n = n.status), n === "fulfilled" || n === "rejected");
  }
  function Jl() {}
  function Wy(n, r, o) {
    switch (
      ((o = n[o]),
      o === void 0 ? n.push(r) : o !== r && (r.then(Jl, Jl), (r = o)),
      r.status)
    ) {
      case "fulfilled":
        return r.value;
      case "rejected":
        throw ((n = r.reason), tg(n), n);
      default:
        if (typeof r.status == "string") r.then(Jl, Jl);
        else {
          if (((n = pt), n !== null && 100 < n.shellSuspendCounter))
            throw Error(i(482));
          ((n = r),
            (n.status = "pending"),
            n.then(
              function (l) {
                if (r.status === "pending") {
                  var f = r;
                  ((f.status = "fulfilled"), (f.value = l));
                }
              },
              function (l) {
                if (r.status === "pending") {
                  var f = r;
                  ((f.status = "rejected"), (f.reason = l));
                }
              },
            ));
        }
        switch (r.status) {
          case "fulfilled":
            return r.value;
          case "rejected":
            throw ((n = r.reason), tg(n), n);
        }
        throw ((ps = r), ms);
    }
  }
  var ps = null;
  function eg() {
    if (ps === null) throw Error(i(459));
    var n = ps;
    return ((ps = null), n);
  }
  function tg(n) {
    if (n === ms || n === Xl) throw Error(i(483));
  }
  var ba = !1;
  function Jf(n) {
    n.updateQueue = {
      baseState: n.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Wf(n, r) {
    ((n = n.updateQueue),
      r.updateQueue === n &&
        (r.updateQueue = {
          baseState: n.baseState,
          firstBaseUpdate: n.firstBaseUpdate,
          lastBaseUpdate: n.lastBaseUpdate,
          shared: n.shared,
          callbacks: null,
        }));
  }
  function wa(n) {
    return { lane: n, tag: 0, payload: null, callback: null, next: null };
  }
  function Sa(n, r, o) {
    var l = n.updateQueue;
    if (l === null) return null;
    if (((l = l.shared), (ot & 2) !== 0)) {
      var f = l.pending;
      return (
        f === null ? (r.next = r) : ((r.next = f.next), (f.next = r)),
        (l.pending = r),
        (r = Zl(n)),
        Vy(n, null, o),
        r
      );
    }
    return (Hl(n, l, r, o), Zl(n));
  }
  function ys(n, r, o) {
    if (
      ((r = r.updateQueue), r !== null && ((r = r.shared), (o & 4194048) !== 0))
    ) {
      var l = r.lanes;
      ((l &= n.pendingLanes), (o |= l), (r.lanes = o), P(n, o));
    }
  }
  function ed(n, r) {
    var o = n.updateQueue,
      l = n.alternate;
    if (l !== null && ((l = l.updateQueue), o === l)) {
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
        p === null ? (f = p = r) : (p = p.next = r);
      } else f = p = r;
      ((o = {
        baseState: l.baseState,
        firstBaseUpdate: f,
        lastBaseUpdate: p,
        shared: l.shared,
        callbacks: l.callbacks,
      }),
        (n.updateQueue = o));
      return;
    }
    ((n = o.lastBaseUpdate),
      n === null ? (o.firstBaseUpdate = r) : (n.next = r),
      (o.lastBaseUpdate = r));
  }
  var td = !1;
  function gs() {
    if (td) {
      var n = no;
      if (n !== null) throw n;
    }
  }
  function vs(n, r, o, l) {
    td = !1;
    var f = n.updateQueue;
    ba = !1;
    var p = f.firstBaseUpdate,
      b = f.lastBaseUpdate,
      R = f.shared.pending;
    if (R !== null) {
      f.shared.pending = null;
      var j = R,
        K = j.next;
      ((j.next = null), b === null ? (p = K) : (b.next = K), (b = j));
      var re = n.alternate;
      re !== null &&
        ((re = re.updateQueue),
        (R = re.lastBaseUpdate),
        R !== b &&
          (R === null ? (re.firstBaseUpdate = K) : (R.next = K),
          (re.lastBaseUpdate = j)));
    }
    if (p !== null) {
      var ue = f.baseState;
      ((b = 0), (re = K = j = null), (R = p));
      do {
        var X = R.lane & -536870913,
          J = X !== R.lane;
        if (J ? (We & X) === X : (l & X) === X) {
          (X !== 0 && X === to && (td = !0),
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
            X = r;
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
                ba = !0;
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
            re === null ? ((K = re = J), (j = ue)) : (re = re.next = J),
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
      (re === null && (j = ue),
        (f.baseState = j),
        (f.firstBaseUpdate = K),
        (f.lastBaseUpdate = re),
        p === null && (f.shared.lanes = 0),
        (Ta |= b),
        (n.lanes = b),
        (n.memoizedState = ue));
    }
  }
  function ng(n, r) {
    if (typeof n != "function") throw Error(i(191, n));
    n.call(r);
  }
  function rg(n, r) {
    var o = n.callbacks;
    if (o !== null)
      for (n.callbacks = null, n = 0; n < o.length; n++) ng(o[n], r);
  }
  var ro = W(null),
    Wl = W(0);
  function ag(n, r) {
    ((n = na), le(Wl, n), le(ro, r), (na = n | r.baseLanes));
  }
  function nd() {
    (le(Wl, na), le(ro, ro.current));
  }
  function rd() {
    ((na = Wl.current), fe(ro), fe(Wl));
  }
  var _a = 0,
    He = null,
    ft = null,
    jt = null,
    eu = !1,
    ao = !1,
    bi = !1,
    tu = 0,
    bs = 0,
    io = null,
    Ex = 0;
  function Ct() {
    throw Error(i(321));
  }
  function ad(n, r) {
    if (r === null) return !1;
    for (var o = 0; o < r.length && o < n.length; o++)
      if (!Dn(n[o], r[o])) return !1;
    return !0;
  }
  function id(n, r, o, l, f, p) {
    return (
      (_a = p),
      (He = r),
      (r.memoizedState = null),
      (r.updateQueue = null),
      (r.lanes = 0),
      (U.H = n === null || n.memoizedState === null ? Vg : $g),
      (bi = !1),
      (p = o(l, f)),
      (bi = !1),
      ao && (p = og(r, o, l, f)),
      ig(n),
      p
    );
  }
  function ig(n) {
    U.H = su;
    var r = ft !== null && ft.next !== null;
    if (((_a = 0), (jt = ft = He = null), (eu = !1), (bs = 0), (io = null), r))
      throw Error(i(300));
    n === null ||
      qt ||
      ((n = n.dependencies), n !== null && Yl(n) && (qt = !0));
  }
  function og(n, r, o, l) {
    He = n;
    var f = 0;
    do {
      if ((ao && (io = null), (bs = 0), (ao = !1), 25 <= f))
        throw Error(i(301));
      if (((f += 1), (jt = ft = null), n.updateQueue != null)) {
        var p = n.updateQueue;
        ((p.lastEffect = null),
          (p.events = null),
          (p.stores = null),
          p.memoCache != null && (p.memoCache.index = 0));
      }
      ((U.H = Dx), (p = r(o, l)));
    } while (ao);
    return p;
  }
  function xx() {
    var n = U.H,
      r = n.useState()[0];
    return (
      (r = typeof r.then == "function" ? ws(r) : r),
      (n = n.useState()[0]),
      (ft !== null ? ft.memoizedState : null) !== n && (He.flags |= 1024),
      r
    );
  }
  function od() {
    var n = tu !== 0;
    return ((tu = 0), n);
  }
  function sd(n, r, o) {
    ((r.updateQueue = n.updateQueue), (r.flags &= -2053), (n.lanes &= ~o));
  }
  function ld(n) {
    if (eu) {
      for (n = n.memoizedState; n !== null; ) {
        var r = n.queue;
        (r !== null && (r.pending = null), (n = n.next));
      }
      eu = !1;
    }
    ((_a = 0), (jt = ft = He = null), (ao = !1), (bs = tu = 0), (io = null));
  }
  function wn() {
    var n = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (jt === null ? (He.memoizedState = jt = n) : (jt = jt.next = n), jt);
  }
  function Lt() {
    if (ft === null) {
      var n = He.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = ft.next;
    var r = jt === null ? He.memoizedState : jt.next;
    if (r !== null) ((jt = r), (ft = n));
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
        jt === null ? (He.memoizedState = jt = n) : (jt = jt.next = n));
    }
    return jt;
  }
  function ud() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function ws(n) {
    var r = bs;
    return (
      (bs += 1),
      io === null && (io = []),
      (n = Wy(io, n, r)),
      (r = He),
      (jt === null ? r.memoizedState : jt.next) === null &&
        ((r = r.alternate),
        (U.H = r === null || r.memoizedState === null ? Vg : $g)),
      n
    );
  }
  function nu(n) {
    if (n !== null && typeof n == "object") {
      if (typeof n.then == "function") return ws(n);
      if (n.$$typeof === D) return sn(n);
    }
    throw Error(i(438, String(n)));
  }
  function cd(n) {
    var r = null,
      o = He.updateQueue;
    if ((o !== null && (r = o.memoCache), r == null)) {
      var l = He.alternate;
      l !== null &&
        ((l = l.updateQueue),
        l !== null &&
          ((l = l.memoCache),
          l != null &&
            (r = {
              data: l.data.map(function (f) {
                return f.slice();
              }),
              index: 0,
            })));
    }
    if (
      (r == null && (r = { data: [], index: 0 }),
      o === null && ((o = ud()), (He.updateQueue = o)),
      (o.memoCache = r),
      (o = r.data[r.index]),
      o === void 0)
    )
      for (o = r.data[r.index] = Array(n), l = 0; l < n; l++) o[l] = pe;
    return (r.index++, o);
  }
  function Qr(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function ru(n) {
    var r = Lt();
    return fd(r, ft, n);
  }
  function fd(n, r, o) {
    var l = n.queue;
    if (l === null) throw Error(i(311));
    l.lastRenderedReducer = o;
    var f = n.baseQueue,
      p = l.pending;
    if (p !== null) {
      if (f !== null) {
        var b = f.next;
        ((f.next = p.next), (p.next = b));
      }
      ((r.baseQueue = f = p), (l.pending = null));
    }
    if (((p = n.baseState), f === null)) n.memoizedState = p;
    else {
      r = f.next;
      var R = (b = null),
        j = null,
        K = r,
        re = !1;
      do {
        var ue = K.lane & -536870913;
        if (ue !== K.lane ? (We & ue) === ue : (_a & ue) === ue) {
          var X = K.revertLane;
          if (X === 0)
            (j !== null &&
              (j = j.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: K.action,
                  hasEagerState: K.hasEagerState,
                  eagerState: K.eagerState,
                  next: null,
                }),
              ue === to && (re = !0));
          else if ((_a & X) === X) {
            ((K = K.next), X === to && (re = !0));
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
              j === null ? ((R = j = ue), (b = p)) : (j = j.next = ue),
              (He.lanes |= X),
              (Ta |= X));
          ((ue = K.action),
            bi && o(p, ue),
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
            j === null ? ((R = j = X), (b = p)) : (j = j.next = X),
            (He.lanes |= ue),
            (Ta |= ue));
        K = K.next;
      } while (K !== null && K !== r);
      if (
        (j === null ? (b = p) : (j.next = R),
        !Dn(p, n.memoizedState) && ((qt = !0), re && ((o = no), o !== null)))
      )
        throw o;
      ((n.memoizedState = p),
        (n.baseState = b),
        (n.baseQueue = j),
        (l.lastRenderedState = p));
    }
    return (f === null && (l.lanes = 0), [n.memoizedState, l.dispatch]);
  }
  function dd(n) {
    var r = Lt(),
      o = r.queue;
    if (o === null) throw Error(i(311));
    o.lastRenderedReducer = n;
    var l = o.dispatch,
      f = o.pending,
      p = r.memoizedState;
    if (f !== null) {
      o.pending = null;
      var b = (f = f.next);
      do ((p = n(p, b.action)), (b = b.next));
      while (b !== f);
      (Dn(p, r.memoizedState) || (qt = !0),
        (r.memoizedState = p),
        r.baseQueue === null && (r.baseState = p),
        (o.lastRenderedState = p));
    }
    return [p, l];
  }
  function sg(n, r, o) {
    var l = He,
      f = Lt(),
      p = nt;
    if (p) {
      if (o === void 0) throw Error(i(407));
      o = o();
    } else o = r();
    var b = !Dn((ft || f).memoizedState, o);
    (b && ((f.memoizedState = o), (qt = !0)), (f = f.queue));
    var R = cg.bind(null, l, f, n);
    if (
      (Ss(2048, 8, R, [n]),
      f.getSnapshot !== r || b || (jt !== null && jt.memoizedState.tag & 1))
    ) {
      if (
        ((l.flags |= 2048),
        oo(9, au(), ug.bind(null, l, f, o, r), null),
        pt === null)
      )
        throw Error(i(349));
      p || (_a & 124) !== 0 || lg(l, r, o);
    }
    return o;
  }
  function lg(n, r, o) {
    ((n.flags |= 16384),
      (n = { getSnapshot: r, value: o }),
      (r = He.updateQueue),
      r === null
        ? ((r = ud()), (He.updateQueue = r), (r.stores = [n]))
        : ((o = r.stores), o === null ? (r.stores = [n]) : o.push(n)));
  }
  function ug(n, r, o, l) {
    ((r.value = o), (r.getSnapshot = l), fg(r) && dg(n));
  }
  function cg(n, r, o) {
    return o(function () {
      fg(r) && dg(n);
    });
  }
  function fg(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var o = r();
      return !Dn(n, o);
    } catch {
      return !0;
    }
  }
  function dg(n) {
    var r = Xi(n, 2);
    r !== null && Ln(r, n, 2);
  }
  function hd(n) {
    var r = wn();
    if (typeof n == "function") {
      var o = n;
      if (((n = o()), bi)) {
        gn(!0);
        try {
          o();
        } finally {
          gn(!1);
        }
      }
    }
    return (
      (r.memoizedState = r.baseState = n),
      (r.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Qr,
        lastRenderedState: n,
      }),
      r
    );
  }
  function hg(n, r, o, l) {
    return ((n.baseState = o), fd(n, ft, typeof l == "function" ? l : Qr));
  }
  function Rx(n, r, o, l, f) {
    if (ou(n)) throw Error(i(485));
    if (((n = r.action), n !== null)) {
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
        l(p),
        (o = r.pending),
        o === null
          ? ((p.next = r.pending = p), mg(r, p))
          : ((p.next = o.next), (r.pending = o.next = p)));
    }
  }
  function mg(n, r) {
    var o = r.action,
      l = r.payload,
      f = n.state;
    if (r.isTransition) {
      var p = U.T,
        b = {};
      U.T = b;
      try {
        var R = o(f, l),
          j = U.S;
        (j !== null && j(b, R), pg(n, r, R));
      } catch (K) {
        md(n, r, K);
      } finally {
        U.T = p;
      }
    } else
      try {
        ((p = o(f, l)), pg(n, r, p));
      } catch (K) {
        md(n, r, K);
      }
  }
  function pg(n, r, o) {
    o !== null && typeof o == "object" && typeof o.then == "function"
      ? o.then(
          function (l) {
            yg(n, r, l);
          },
          function (l) {
            return md(n, r, l);
          },
        )
      : yg(n, r, o);
  }
  function yg(n, r, o) {
    ((r.status = "fulfilled"),
      (r.value = o),
      gg(r),
      (n.state = o),
      (r = n.pending),
      r !== null &&
        ((o = r.next),
        o === r ? (n.pending = null) : ((o = o.next), (r.next = o), mg(n, o))));
  }
  function md(n, r, o) {
    var l = n.pending;
    if (((n.pending = null), l !== null)) {
      l = l.next;
      do ((r.status = "rejected"), (r.reason = o), gg(r), (r = r.next));
      while (r !== l);
    }
    n.action = null;
  }
  function gg(n) {
    n = n.listeners;
    for (var r = 0; r < n.length; r++) (0, n[r])();
  }
  function vg(n, r) {
    return r;
  }
  function bg(n, r) {
    if (nt) {
      var o = pt.formState;
      if (o !== null) {
        e: {
          var l = He;
          if (nt) {
            if (Rt) {
              t: {
                for (var f = Rt, p = br; f.nodeType !== 8; ) {
                  if (!p) {
                    f = null;
                    break t;
                  }
                  if (((f = fr(f.nextSibling)), f === null)) {
                    f = null;
                    break t;
                  }
                }
                ((p = f.data), (f = p === "F!" || p === "F" ? f : null));
              }
              if (f) {
                ((Rt = fr(f.nextSibling)), (l = f.data === "F!"));
                break e;
              }
            }
            pi(l);
          }
          l = !1;
        }
        l && (r = o[0]);
      }
    }
    return (
      (o = wn()),
      (o.memoizedState = o.baseState = r),
      (l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: vg,
        lastRenderedState: r,
      }),
      (o.queue = l),
      (o = Pg.bind(null, He, l)),
      (l.dispatch = o),
      (l = hd(!1)),
      (p = bd.bind(null, He, !1, l.queue)),
      (l = wn()),
      (f = { state: r, dispatch: null, action: n, pending: null }),
      (l.queue = f),
      (o = Rx.bind(null, He, f, p, o)),
      (f.dispatch = o),
      (l.memoizedState = n),
      [r, o, !1]
    );
  }
  function wg(n) {
    var r = Lt();
    return Sg(r, ft, n);
  }
  function Sg(n, r, o) {
    if (
      ((r = fd(n, r, vg)[0]),
      (n = ru(Qr)[0]),
      typeof r == "object" && r !== null && typeof r.then == "function")
    )
      try {
        var l = ws(r);
      } catch (b) {
        throw b === ms ? Xl : b;
      }
    else l = r;
    r = Lt();
    var f = r.queue,
      p = f.dispatch;
    return (
      o !== r.memoizedState &&
        ((He.flags |= 2048), oo(9, au(), Ox.bind(null, f, o), null)),
      [l, p, n]
    );
  }
  function Ox(n, r) {
    n.action = r;
  }
  function _g(n) {
    var r = Lt(),
      o = ft;
    if (o !== null) return Sg(r, o, n);
    (Lt(), (r = r.memoizedState), (o = Lt()));
    var l = o.queue.dispatch;
    return ((o.memoizedState = n), [r, l, !1]);
  }
  function oo(n, r, o, l) {
    return (
      (n = { tag: n, create: o, deps: l, inst: r, next: null }),
      (r = He.updateQueue),
      r === null && ((r = ud()), (He.updateQueue = r)),
      (o = r.lastEffect),
      o === null
        ? (r.lastEffect = n.next = n)
        : ((l = o.next), (o.next = n), (n.next = l), (r.lastEffect = n)),
      n
    );
  }
  function au() {
    return { destroy: void 0, resource: void 0 };
  }
  function Eg() {
    return Lt().memoizedState;
  }
  function iu(n, r, o, l) {
    var f = wn();
    ((l = l === void 0 ? null : l),
      (He.flags |= n),
      (f.memoizedState = oo(1 | r, au(), o, l)));
  }
  function Ss(n, r, o, l) {
    var f = Lt();
    l = l === void 0 ? null : l;
    var p = f.memoizedState.inst;
    ft !== null && l !== null && ad(l, ft.memoizedState.deps)
      ? (f.memoizedState = oo(r, p, o, l))
      : ((He.flags |= n), (f.memoizedState = oo(1 | r, p, o, l)));
  }
  function xg(n, r) {
    iu(8390656, 8, n, r);
  }
  function Rg(n, r) {
    Ss(2048, 8, n, r);
  }
  function Og(n, r) {
    return Ss(4, 2, n, r);
  }
  function Ag(n, r) {
    return Ss(4, 4, n, r);
  }
  function Cg(n, r) {
    if (typeof r == "function") {
      n = n();
      var o = r(n);
      return function () {
        typeof o == "function" ? o() : r(null);
      };
    }
    if (r != null)
      return (
        (n = n()),
        (r.current = n),
        function () {
          r.current = null;
        }
      );
  }
  function Tg(n, r, o) {
    ((o = o != null ? o.concat([n]) : null), Ss(4, 4, Cg.bind(null, r, n), o));
  }
  function pd() {}
  function Dg(n, r) {
    var o = Lt();
    r = r === void 0 ? null : r;
    var l = o.memoizedState;
    return r !== null && ad(r, l[1]) ? l[0] : ((o.memoizedState = [n, r]), n);
  }
  function Mg(n, r) {
    var o = Lt();
    r = r === void 0 ? null : r;
    var l = o.memoizedState;
    if (r !== null && ad(r, l[1])) return l[0];
    if (((l = n()), bi)) {
      gn(!0);
      try {
        n();
      } finally {
        gn(!1);
      }
    }
    return ((o.memoizedState = [l, r]), l);
  }
  function yd(n, r, o) {
    return o === void 0 || (_a & 1073741824) !== 0
      ? (n.memoizedState = r)
      : ((n.memoizedState = o), (n = kv()), (He.lanes |= n), (Ta |= n), o);
  }
  function Ng(n, r, o, l) {
    return Dn(o, r)
      ? o
      : ro.current !== null
        ? ((n = yd(n, o, l)), Dn(n, r) || (qt = !0), n)
        : (_a & 42) === 0
          ? ((qt = !0), (n.memoizedState = o))
          : ((n = kv()), (He.lanes |= n), (Ta |= n), r);
  }
  function zg(n, r, o, l, f) {
    var p = ne.p;
    ne.p = p !== 0 && 8 > p ? p : 8;
    var b = U.T,
      R = {};
    ((U.T = R), bd(n, !1, r, o));
    try {
      var j = f(),
        K = U.S;
      if (
        (K !== null && K(R, j),
        j !== null && typeof j == "object" && typeof j.then == "function")
      ) {
        var re = _x(j, l);
        _s(n, r, re, jn(n));
      } else _s(n, r, l, jn(n));
    } catch (ue) {
      _s(n, r, { then: function () {}, status: "rejected", reason: ue }, jn());
    } finally {
      ((ne.p = p), (U.T = b));
    }
  }
  function Ax() {}
  function gd(n, r, o, l) {
    if (n.tag !== 5) throw Error(i(476));
    var f = kg(n).queue;
    zg(
      n,
      f,
      r,
      q,
      o === null
        ? Ax
        : function () {
            return (jg(n), o(l));
          },
    );
  }
  function kg(n) {
    var r = n.memoizedState;
    if (r !== null) return r;
    r = {
      memoizedState: q,
      baseState: q,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Qr,
        lastRenderedState: q,
      },
      next: null,
    };
    var o = {};
    return (
      (r.next = {
        memoizedState: o,
        baseState: o,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Qr,
          lastRenderedState: o,
        },
        next: null,
      }),
      (n.memoizedState = r),
      (n = n.alternate),
      n !== null && (n.memoizedState = r),
      r
    );
  }
  function jg(n) {
    var r = kg(n).next.queue;
    _s(n, r, {}, jn());
  }
  function vd() {
    return sn(Bs);
  }
  function Lg() {
    return Lt().memoizedState;
  }
  function Ug() {
    return Lt().memoizedState;
  }
  function Cx(n) {
    for (var r = n.return; r !== null; ) {
      switch (r.tag) {
        case 24:
        case 3:
          var o = jn();
          n = wa(o);
          var l = Sa(r, n, o);
          (l !== null && (Ln(l, r, o), ys(l, r, o)),
            (r = { cache: Yf() }),
            (n.payload = r));
          return;
      }
      r = r.return;
    }
  }
  function Tx(n, r, o) {
    var l = jn();
    ((o = {
      lane: l,
      revertLane: 0,
      action: o,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      ou(n)
        ? Fg(r, o)
        : ((o = Pf(n, r, o, l)), o !== null && (Ln(o, n, l), Bg(o, r, l))));
  }
  function Pg(n, r, o) {
    var l = jn();
    _s(n, r, o, l);
  }
  function _s(n, r, o, l) {
    var f = {
      lane: l,
      revertLane: 0,
      action: o,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (ou(n)) Fg(r, f);
    else {
      var p = n.alternate;
      if (
        n.lanes === 0 &&
        (p === null || p.lanes === 0) &&
        ((p = r.lastRenderedReducer), p !== null)
      )
        try {
          var b = r.lastRenderedState,
            R = p(b, o);
          if (((f.hasEagerState = !0), (f.eagerState = R), Dn(R, b)))
            return (Hl(n, r, f, 0), pt === null && $l(), !1);
        } catch {
        } finally {
        }
      if (((o = Pf(n, r, f, l)), o !== null))
        return (Ln(o, n, l), Bg(o, r, l), !0);
    }
    return !1;
  }
  function bd(n, r, o, l) {
    if (
      ((l = {
        lane: 2,
        revertLane: Xd(),
        action: l,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      ou(n))
    ) {
      if (r) throw Error(i(479));
    } else ((r = Pf(n, o, l, 2)), r !== null && Ln(r, n, 2));
  }
  function ou(n) {
    var r = n.alternate;
    return n === He || (r !== null && r === He);
  }
  function Fg(n, r) {
    ao = eu = !0;
    var o = n.pending;
    (o === null ? (r.next = r) : ((r.next = o.next), (o.next = r)),
      (n.pending = r));
  }
  function Bg(n, r, o) {
    if ((o & 4194048) !== 0) {
      var l = r.lanes;
      ((l &= n.pendingLanes), (o |= l), (r.lanes = o), P(n, o));
    }
  }
  var su = {
      readContext: sn,
      use: nu,
      useCallback: Ct,
      useContext: Ct,
      useEffect: Ct,
      useImperativeHandle: Ct,
      useLayoutEffect: Ct,
      useInsertionEffect: Ct,
      useMemo: Ct,
      useReducer: Ct,
      useRef: Ct,
      useState: Ct,
      useDebugValue: Ct,
      useDeferredValue: Ct,
      useTransition: Ct,
      useSyncExternalStore: Ct,
      useId: Ct,
      useHostTransitionStatus: Ct,
      useFormState: Ct,
      useActionState: Ct,
      useOptimistic: Ct,
      useMemoCache: Ct,
      useCacheRefresh: Ct,
    },
    Vg = {
      readContext: sn,
      use: nu,
      useCallback: function (n, r) {
        return ((wn().memoizedState = [n, r === void 0 ? null : r]), n);
      },
      useContext: sn,
      useEffect: xg,
      useImperativeHandle: function (n, r, o) {
        ((o = o != null ? o.concat([n]) : null),
          iu(4194308, 4, Cg.bind(null, r, n), o));
      },
      useLayoutEffect: function (n, r) {
        return iu(4194308, 4, n, r);
      },
      useInsertionEffect: function (n, r) {
        iu(4, 2, n, r);
      },
      useMemo: function (n, r) {
        var o = wn();
        r = r === void 0 ? null : r;
        var l = n();
        if (bi) {
          gn(!0);
          try {
            n();
          } finally {
            gn(!1);
          }
        }
        return ((o.memoizedState = [l, r]), l);
      },
      useReducer: function (n, r, o) {
        var l = wn();
        if (o !== void 0) {
          var f = o(r);
          if (bi) {
            gn(!0);
            try {
              o(r);
            } finally {
              gn(!1);
            }
          }
        } else f = r;
        return (
          (l.memoizedState = l.baseState = f),
          (n = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: n,
            lastRenderedState: f,
          }),
          (l.queue = n),
          (n = n.dispatch = Tx.bind(null, He, n)),
          [l.memoizedState, n]
        );
      },
      useRef: function (n) {
        var r = wn();
        return ((n = { current: n }), (r.memoizedState = n));
      },
      useState: function (n) {
        n = hd(n);
        var r = n.queue,
          o = Pg.bind(null, He, r);
        return ((r.dispatch = o), [n.memoizedState, o]);
      },
      useDebugValue: pd,
      useDeferredValue: function (n, r) {
        var o = wn();
        return yd(o, n, r);
      },
      useTransition: function () {
        var n = hd(!1);
        return (
          (n = zg.bind(null, He, n.queue, !0, !1)),
          (wn().memoizedState = n),
          [!1, n]
        );
      },
      useSyncExternalStore: function (n, r, o) {
        var l = He,
          f = wn();
        if (nt) {
          if (o === void 0) throw Error(i(407));
          o = o();
        } else {
          if (((o = r()), pt === null)) throw Error(i(349));
          (We & 124) !== 0 || lg(l, r, o);
        }
        f.memoizedState = o;
        var p = { value: o, getSnapshot: r };
        return (
          (f.queue = p),
          xg(cg.bind(null, l, p, n), [n]),
          (l.flags |= 2048),
          oo(9, au(), ug.bind(null, l, p, o, r), null),
          o
        );
      },
      useId: function () {
        var n = wn(),
          r = pt.identifierPrefix;
        if (nt) {
          var o = Gr,
            l = qr;
          ((o = (l & ~(1 << (32 - $t(l) - 1))).toString(32) + o),
            (r = "«" + r + "R" + o),
            (o = tu++),
            0 < o && (r += "H" + o.toString(32)),
            (r += "»"));
        } else ((o = Ex++), (r = "«" + r + "r" + o.toString(32) + "»"));
        return (n.memoizedState = r);
      },
      useHostTransitionStatus: vd,
      useFormState: bg,
      useActionState: bg,
      useOptimistic: function (n) {
        var r = wn();
        r.memoizedState = r.baseState = n;
        var o = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (r.queue = o),
          (r = bd.bind(null, He, !0, o)),
          (o.dispatch = r),
          [n, r]
        );
      },
      useMemoCache: cd,
      useCacheRefresh: function () {
        return (wn().memoizedState = Cx.bind(null, He));
      },
    },
    $g = {
      readContext: sn,
      use: nu,
      useCallback: Dg,
      useContext: sn,
      useEffect: Rg,
      useImperativeHandle: Tg,
      useInsertionEffect: Og,
      useLayoutEffect: Ag,
      useMemo: Mg,
      useReducer: ru,
      useRef: Eg,
      useState: function () {
        return ru(Qr);
      },
      useDebugValue: pd,
      useDeferredValue: function (n, r) {
        var o = Lt();
        return Ng(o, ft.memoizedState, n, r);
      },
      useTransition: function () {
        var n = ru(Qr)[0],
          r = Lt().memoizedState;
        return [typeof n == "boolean" ? n : ws(n), r];
      },
      useSyncExternalStore: sg,
      useId: Lg,
      useHostTransitionStatus: vd,
      useFormState: wg,
      useActionState: wg,
      useOptimistic: function (n, r) {
        var o = Lt();
        return hg(o, ft, n, r);
      },
      useMemoCache: cd,
      useCacheRefresh: Ug,
    },
    Dx = {
      readContext: sn,
      use: nu,
      useCallback: Dg,
      useContext: sn,
      useEffect: Rg,
      useImperativeHandle: Tg,
      useInsertionEffect: Og,
      useLayoutEffect: Ag,
      useMemo: Mg,
      useReducer: dd,
      useRef: Eg,
      useState: function () {
        return dd(Qr);
      },
      useDebugValue: pd,
      useDeferredValue: function (n, r) {
        var o = Lt();
        return ft === null ? yd(o, n, r) : Ng(o, ft.memoizedState, n, r);
      },
      useTransition: function () {
        var n = dd(Qr)[0],
          r = Lt().memoizedState;
        return [typeof n == "boolean" ? n : ws(n), r];
      },
      useSyncExternalStore: sg,
      useId: Lg,
      useHostTransitionStatus: vd,
      useFormState: _g,
      useActionState: _g,
      useOptimistic: function (n, r) {
        var o = Lt();
        return ft !== null
          ? hg(o, ft, n, r)
          : ((o.baseState = n), [n, o.queue.dispatch]);
      },
      useMemoCache: cd,
      useCacheRefresh: Ug,
    },
    so = null,
    Es = 0;
  function lu(n) {
    var r = Es;
    return ((Es += 1), so === null && (so = []), Wy(so, n, r));
  }
  function xs(n, r) {
    ((r = r.props.ref), (n.ref = r !== void 0 ? r : null));
  }
  function uu(n, r) {
    throw r.$$typeof === g
      ? Error(i(525))
      : ((n = Object.prototype.toString.call(r)),
        Error(
          i(
            31,
            n === "[object Object]"
              ? "object with keys {" + Object.keys(r).join(", ") + "}"
              : n,
          ),
        ));
  }
  function Hg(n) {
    var r = n._init;
    return r(n._payload);
  }
  function Zg(n) {
    function r(I, V) {
      if (n) {
        var G = I.deletions;
        G === null ? ((I.deletions = [V]), (I.flags |= 16)) : G.push(V);
      }
    }
    function o(I, V) {
      if (!n) return null;
      for (; V !== null; ) (r(I, V), (V = V.sibling));
      return null;
    }
    function l(I) {
      for (var V = new Map(); I !== null; )
        (I.key !== null ? V.set(I.key, I) : V.set(I.index, I), (I = I.sibling));
      return V;
    }
    function f(I, V) {
      return ((I = Ir(I, V)), (I.index = 0), (I.sibling = null), I);
    }
    function p(I, V, G) {
      return (
        (I.index = G),
        n
          ? ((G = I.alternate),
            G !== null
              ? ((G = G.index), G < V ? ((I.flags |= 67108866), V) : G)
              : ((I.flags |= 67108866), V))
          : ((I.flags |= 1048576), V)
      );
    }
    function b(I) {
      return (n && I.alternate === null && (I.flags |= 67108866), I);
    }
    function R(I, V, G, ae) {
      return V === null || V.tag !== 6
        ? ((V = Bf(G, I.mode, ae)), (V.return = I), V)
        : ((V = f(V, G)), (V.return = I), V);
    }
    function j(I, V, G, ae) {
      var Ce = G.type;
      return Ce === S
        ? re(I, V, G.props.children, ae, G.key)
        : V !== null &&
            (V.elementType === Ce ||
              (typeof Ce == "object" &&
                Ce !== null &&
                Ce.$$typeof === Q &&
                Hg(Ce) === V.type))
          ? ((V = f(V, G.props)), xs(V, G), (V.return = I), V)
          : ((V = Il(G.type, G.key, G.props, null, I.mode, ae)),
            xs(V, G),
            (V.return = I),
            V);
    }
    function K(I, V, G, ae) {
      return V === null ||
        V.tag !== 4 ||
        V.stateNode.containerInfo !== G.containerInfo ||
        V.stateNode.implementation !== G.implementation
        ? ((V = Vf(G, I.mode, ae)), (V.return = I), V)
        : ((V = f(V, G.children || [])), (V.return = I), V);
    }
    function re(I, V, G, ae, Ce) {
      return V === null || V.tag !== 7
        ? ((V = fi(G, I.mode, ae, Ce)), (V.return = I), V)
        : ((V = f(V, G)), (V.return = I), V);
    }
    function ue(I, V, G) {
      if (
        (typeof V == "string" && V !== "") ||
        typeof V == "number" ||
        typeof V == "bigint"
      )
        return ((V = Bf("" + V, I.mode, G)), (V.return = I), V);
      if (typeof V == "object" && V !== null) {
        switch (V.$$typeof) {
          case v:
            return (
              (G = Il(V.type, V.key, V.props, null, I.mode, G)),
              xs(G, V),
              (G.return = I),
              G
            );
          case _:
            return ((V = Vf(V, I.mode, G)), (V.return = I), V);
          case Q:
            var ae = V._init;
            return ((V = ae(V._payload)), ue(I, V, G));
        }
        if (ge(V) || be(V))
          return ((V = fi(V, I.mode, G, null)), (V.return = I), V);
        if (typeof V.then == "function") return ue(I, lu(V), G);
        if (V.$$typeof === D) return ue(I, Kl(I, V), G);
        uu(I, V);
      }
      return null;
    }
    function X(I, V, G, ae) {
      var Ce = V !== null ? V.key : null;
      if (
        (typeof G == "string" && G !== "") ||
        typeof G == "number" ||
        typeof G == "bigint"
      )
        return Ce !== null ? null : R(I, V, "" + G, ae);
      if (typeof G == "object" && G !== null) {
        switch (G.$$typeof) {
          case v:
            return G.key === Ce ? j(I, V, G, ae) : null;
          case _:
            return G.key === Ce ? K(I, V, G, ae) : null;
          case Q:
            return ((Ce = G._init), (G = Ce(G._payload)), X(I, V, G, ae));
        }
        if (ge(G) || be(G)) return Ce !== null ? null : re(I, V, G, ae, null);
        if (typeof G.then == "function") return X(I, V, lu(G), ae);
        if (G.$$typeof === D) return X(I, V, Kl(I, G), ae);
        uu(I, G);
      }
      return null;
    }
    function J(I, V, G, ae, Ce) {
      if (
        (typeof ae == "string" && ae !== "") ||
        typeof ae == "number" ||
        typeof ae == "bigint"
      )
        return ((I = I.get(G) || null), R(V, I, "" + ae, Ce));
      if (typeof ae == "object" && ae !== null) {
        switch (ae.$$typeof) {
          case v:
            return (
              (I = I.get(ae.key === null ? G : ae.key) || null),
              j(V, I, ae, Ce)
            );
          case _:
            return (
              (I = I.get(ae.key === null ? G : ae.key) || null),
              K(V, I, ae, Ce)
            );
          case Q:
            var Ge = ae._init;
            return ((ae = Ge(ae._payload)), J(I, V, G, ae, Ce));
        }
        if (ge(ae) || be(ae))
          return ((I = I.get(G) || null), re(V, I, ae, Ce, null));
        if (typeof ae.then == "function") return J(I, V, G, lu(ae), Ce);
        if (ae.$$typeof === D) return J(I, V, G, Kl(V, ae), Ce);
        uu(V, ae);
      }
      return null;
    }
    function Ue(I, V, G, ae) {
      for (
        var Ce = null, Ge = null, Me = V, Le = (V = 0), Yt = null;
        Me !== null && Le < G.length;
        Le++
      ) {
        Me.index > Le ? ((Yt = Me), (Me = null)) : (Yt = Me.sibling);
        var tt = X(I, Me, G[Le], ae);
        if (tt === null) {
          Me === null && (Me = Yt);
          break;
        }
        (n && Me && tt.alternate === null && r(I, Me),
          (V = p(tt, V, Le)),
          Ge === null ? (Ce = tt) : (Ge.sibling = tt),
          (Ge = tt),
          (Me = Yt));
      }
      if (Le === G.length) return (o(I, Me), nt && hi(I, Le), Ce);
      if (Me === null) {
        for (; Le < G.length; Le++)
          ((Me = ue(I, G[Le], ae)),
            Me !== null &&
              ((V = p(Me, V, Le)),
              Ge === null ? (Ce = Me) : (Ge.sibling = Me),
              (Ge = Me)));
        return (nt && hi(I, Le), Ce);
      }
      for (Me = l(Me); Le < G.length; Le++)
        ((Yt = J(Me, I, Le, G[Le], ae)),
          Yt !== null &&
            (n &&
              Yt.alternate !== null &&
              Me.delete(Yt.key === null ? Le : Yt.key),
            (V = p(Yt, V, Le)),
            Ge === null ? (Ce = Yt) : (Ge.sibling = Yt),
            (Ge = Yt)));
      return (
        n &&
          Me.forEach(function (Pa) {
            return r(I, Pa);
          }),
        nt && hi(I, Le),
        Ce
      );
    }
    function je(I, V, G, ae) {
      if (G == null) throw Error(i(151));
      for (
        var Ce = null,
          Ge = null,
          Me = V,
          Le = (V = 0),
          Yt = null,
          tt = G.next();
        Me !== null && !tt.done;
        Le++, tt = G.next()
      ) {
        Me.index > Le ? ((Yt = Me), (Me = null)) : (Yt = Me.sibling);
        var Pa = X(I, Me, tt.value, ae);
        if (Pa === null) {
          Me === null && (Me = Yt);
          break;
        }
        (n && Me && Pa.alternate === null && r(I, Me),
          (V = p(Pa, V, Le)),
          Ge === null ? (Ce = Pa) : (Ge.sibling = Pa),
          (Ge = Pa),
          (Me = Yt));
      }
      if (tt.done) return (o(I, Me), nt && hi(I, Le), Ce);
      if (Me === null) {
        for (; !tt.done; Le++, tt = G.next())
          ((tt = ue(I, tt.value, ae)),
            tt !== null &&
              ((V = p(tt, V, Le)),
              Ge === null ? (Ce = tt) : (Ge.sibling = tt),
              (Ge = tt)));
        return (nt && hi(I, Le), Ce);
      }
      for (Me = l(Me); !tt.done; Le++, tt = G.next())
        ((tt = J(Me, I, Le, tt.value, ae)),
          tt !== null &&
            (n &&
              tt.alternate !== null &&
              Me.delete(tt.key === null ? Le : tt.key),
            (V = p(tt, V, Le)),
            Ge === null ? (Ce = tt) : (Ge.sibling = tt),
            (Ge = tt)));
      return (
        n &&
          Me.forEach(function (MR) {
            return r(I, MR);
          }),
        nt && hi(I, Le),
        Ce
      );
    }
    function ht(I, V, G, ae) {
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
                      (o(I, V.sibling),
                        (ae = f(V, G.props.children)),
                        (ae.return = I),
                        (I = ae));
                      break e;
                    }
                  } else if (
                    V.elementType === Ce ||
                    (typeof Ce == "object" &&
                      Ce !== null &&
                      Ce.$$typeof === Q &&
                      Hg(Ce) === V.type)
                  ) {
                    (o(I, V.sibling),
                      (ae = f(V, G.props)),
                      xs(ae, G),
                      (ae.return = I),
                      (I = ae));
                    break e;
                  }
                  o(I, V);
                  break;
                } else r(I, V);
                V = V.sibling;
              }
              G.type === S
                ? ((ae = fi(G.props.children, I.mode, ae, G.key)),
                  (ae.return = I),
                  (I = ae))
                : ((ae = Il(G.type, G.key, G.props, null, I.mode, ae)),
                  xs(ae, G),
                  (ae.return = I),
                  (I = ae));
            }
            return b(I);
          case _:
            e: {
              for (Ce = G.key; V !== null; ) {
                if (V.key === Ce)
                  if (
                    V.tag === 4 &&
                    V.stateNode.containerInfo === G.containerInfo &&
                    V.stateNode.implementation === G.implementation
                  ) {
                    (o(I, V.sibling),
                      (ae = f(V, G.children || [])),
                      (ae.return = I),
                      (I = ae));
                    break e;
                  } else {
                    o(I, V);
                    break;
                  }
                else r(I, V);
                V = V.sibling;
              }
              ((ae = Vf(G, I.mode, ae)), (ae.return = I), (I = ae));
            }
            return b(I);
          case Q:
            return ((Ce = G._init), (G = Ce(G._payload)), ht(I, V, G, ae));
        }
        if (ge(G)) return Ue(I, V, G, ae);
        if (be(G)) {
          if (((Ce = be(G)), typeof Ce != "function")) throw Error(i(150));
          return ((G = Ce.call(G)), je(I, V, G, ae));
        }
        if (typeof G.then == "function") return ht(I, V, lu(G), ae);
        if (G.$$typeof === D) return ht(I, V, Kl(I, G), ae);
        uu(I, G);
      }
      return (typeof G == "string" && G !== "") ||
        typeof G == "number" ||
        typeof G == "bigint"
        ? ((G = "" + G),
          V !== null && V.tag === 6
            ? (o(I, V.sibling), (ae = f(V, G)), (ae.return = I), (I = ae))
            : (o(I, V), (ae = Bf(G, I.mode, ae)), (ae.return = I), (I = ae)),
          b(I))
        : o(I, V);
    }
    return function (I, V, G, ae) {
      try {
        Es = 0;
        var Ce = ht(I, V, G, ae);
        return ((so = null), Ce);
      } catch (Me) {
        if (Me === ms || Me === Xl) throw Me;
        var Ge = Mn(29, Me, null, I.mode);
        return ((Ge.lanes = ae), (Ge.return = I), Ge);
      } finally {
      }
    };
  }
  var lo = Zg(!0),
    Ig = Zg(!1),
    Xn = W(null),
    wr = null;
  function Ea(n) {
    var r = n.alternate;
    (le(Zt, Zt.current & 1),
      le(Xn, n),
      wr === null &&
        (r === null || ro.current !== null || r.memoizedState !== null) &&
        (wr = n));
  }
  function qg(n) {
    if (n.tag === 22) {
      if ((le(Zt, Zt.current), le(Xn, n), wr === null)) {
        var r = n.alternate;
        r !== null && r.memoizedState !== null && (wr = n);
      }
    } else xa();
  }
  function xa() {
    (le(Zt, Zt.current), le(Xn, Xn.current));
  }
  function Xr(n) {
    (fe(Xn), wr === n && (wr = null), fe(Zt));
  }
  var Zt = W(0);
  function cu(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var o = r.memoizedState;
        if (
          o !== null &&
          ((o = o.dehydrated), o === null || o.data === "$?" || uh(o))
        )
          return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if ((r.flags & 128) !== 0) return r;
      } else if (r.child !== null) {
        ((r.child.return = r), (r = r.child));
        continue;
      }
      if (r === n) break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n) return null;
        r = r.return;
      }
      ((r.sibling.return = r.return), (r = r.sibling));
    }
    return null;
  }
  function wd(n, r, o, l) {
    ((r = n.memoizedState),
      (o = o(l, r)),
      (o = o == null ? r : y({}, r, o)),
      (n.memoizedState = o),
      n.lanes === 0 && (n.updateQueue.baseState = o));
  }
  var Sd = {
    enqueueSetState: function (n, r, o) {
      n = n._reactInternals;
      var l = jn(),
        f = wa(l);
      ((f.payload = r),
        o != null && (f.callback = o),
        (r = Sa(n, f, l)),
        r !== null && (Ln(r, n, l), ys(r, n, l)));
    },
    enqueueReplaceState: function (n, r, o) {
      n = n._reactInternals;
      var l = jn(),
        f = wa(l);
      ((f.tag = 1),
        (f.payload = r),
        o != null && (f.callback = o),
        (r = Sa(n, f, l)),
        r !== null && (Ln(r, n, l), ys(r, n, l)));
    },
    enqueueForceUpdate: function (n, r) {
      n = n._reactInternals;
      var o = jn(),
        l = wa(o);
      ((l.tag = 2),
        r != null && (l.callback = r),
        (r = Sa(n, l, o)),
        r !== null && (Ln(r, n, o), ys(r, n, o)));
    },
  };
  function Gg(n, r, o, l, f, p, b) {
    return (
      (n = n.stateNode),
      typeof n.shouldComponentUpdate == "function"
        ? n.shouldComponentUpdate(l, p, b)
        : r.prototype && r.prototype.isPureReactComponent
          ? !os(o, l) || !os(f, p)
          : !0
    );
  }
  function Yg(n, r, o, l) {
    ((n = r.state),
      typeof r.componentWillReceiveProps == "function" &&
        r.componentWillReceiveProps(o, l),
      typeof r.UNSAFE_componentWillReceiveProps == "function" &&
        r.UNSAFE_componentWillReceiveProps(o, l),
      r.state !== n && Sd.enqueueReplaceState(r, r.state, null));
  }
  function wi(n, r) {
    var o = r;
    if ("ref" in r) {
      o = {};
      for (var l in r) l !== "ref" && (o[l] = r[l]);
    }
    if ((n = n.defaultProps)) {
      o === r && (o = y({}, o));
      for (var f in n) o[f] === void 0 && (o[f] = n[f]);
    }
    return o;
  }
  var fu =
    typeof reportError == "function"
      ? reportError
      : function (n) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var r = new window.ErrorEvent("error", {
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
            if (!window.dispatchEvent(r)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", n);
            return;
          }
          console.error(n);
        };
  function Kg(n) {
    fu(n);
  }
  function Qg(n) {
    console.error(n);
  }
  function Xg(n) {
    fu(n);
  }
  function du(n, r) {
    try {
      var o = n.onUncaughtError;
      o(r.value, { componentStack: r.stack });
    } catch (l) {
      setTimeout(function () {
        throw l;
      });
    }
  }
  function Jg(n, r, o) {
    try {
      var l = n.onCaughtError;
      l(o.value, {
        componentStack: o.stack,
        errorBoundary: r.tag === 1 ? r.stateNode : null,
      });
    } catch (f) {
      setTimeout(function () {
        throw f;
      });
    }
  }
  function _d(n, r, o) {
    return (
      (o = wa(o)),
      (o.tag = 3),
      (o.payload = { element: null }),
      (o.callback = function () {
        du(n, r);
      }),
      o
    );
  }
  function Wg(n) {
    return ((n = wa(n)), (n.tag = 3), n);
  }
  function ev(n, r, o, l) {
    var f = o.type.getDerivedStateFromError;
    if (typeof f == "function") {
      var p = l.value;
      ((n.payload = function () {
        return f(p);
      }),
        (n.callback = function () {
          Jg(r, o, l);
        }));
    }
    var b = o.stateNode;
    b !== null &&
      typeof b.componentDidCatch == "function" &&
      (n.callback = function () {
        (Jg(r, o, l),
          typeof f != "function" &&
            (Da === null ? (Da = new Set([this])) : Da.add(this)));
        var R = l.stack;
        this.componentDidCatch(l.value, {
          componentStack: R !== null ? R : "",
        });
      });
  }
  function Mx(n, r, o, l, f) {
    if (
      ((o.flags |= 32768),
      l !== null && typeof l == "object" && typeof l.then == "function")
    ) {
      if (
        ((r = o.alternate),
        r !== null && fs(r, o, f, !0),
        (o = Xn.current),
        o !== null)
      ) {
        switch (o.tag) {
          case 13:
            return (
              wr === null ? qd() : o.alternate === null && Ot === 0 && (Ot = 3),
              (o.flags &= -257),
              (o.flags |= 65536),
              (o.lanes = f),
              l === Xf
                ? (o.flags |= 16384)
                : ((r = o.updateQueue),
                  r === null ? (o.updateQueue = new Set([l])) : r.add(l),
                  Yd(n, l, f)),
              !1
            );
          case 22:
            return (
              (o.flags |= 65536),
              l === Xf
                ? (o.flags |= 16384)
                : ((r = o.updateQueue),
                  r === null
                    ? ((r = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([l]),
                      }),
                      (o.updateQueue = r))
                    : ((o = r.retryQueue),
                      o === null ? (r.retryQueue = new Set([l])) : o.add(l)),
                  Yd(n, l, f)),
              !1
            );
        }
        throw Error(i(435, o.tag));
      }
      return (Yd(n, l, f), qd(), !1);
    }
    if (nt)
      return (
        (r = Xn.current),
        r !== null
          ? ((r.flags & 65536) === 0 && (r.flags |= 256),
            (r.flags |= 65536),
            (r.lanes = f),
            l !== Zf && ((n = Error(i(422), { cause: l })), cs(Gn(n, o))))
          : (l !== Zf && ((r = Error(i(423), { cause: l })), cs(Gn(r, o))),
            (n = n.current.alternate),
            (n.flags |= 65536),
            (f &= -f),
            (n.lanes |= f),
            (l = Gn(l, o)),
            (f = _d(n.stateNode, l, f)),
            ed(n, f),
            Ot !== 4 && (Ot = 2)),
        !1
      );
    var p = Error(i(520), { cause: l });
    if (
      ((p = Gn(p, o)),
      Ms === null ? (Ms = [p]) : Ms.push(p),
      Ot !== 4 && (Ot = 2),
      r === null)
    )
      return !0;
    ((l = Gn(l, o)), (o = r));
    do {
      switch (o.tag) {
        case 3:
          return (
            (o.flags |= 65536),
            (n = f & -f),
            (o.lanes |= n),
            (n = _d(o.stateNode, l, n)),
            ed(o, n),
            !1
          );
        case 1:
          if (
            ((r = o.type),
            (p = o.stateNode),
            (o.flags & 128) === 0 &&
              (typeof r.getDerivedStateFromError == "function" ||
                (p !== null &&
                  typeof p.componentDidCatch == "function" &&
                  (Da === null || !Da.has(p)))))
          )
            return (
              (o.flags |= 65536),
              (f &= -f),
              (o.lanes |= f),
              (f = Wg(f)),
              ev(f, n, o, l),
              ed(o, f),
              !1
            );
      }
      o = o.return;
    } while (o !== null);
    return !1;
  }
  var tv = Error(i(461)),
    qt = !1;
  function Xt(n, r, o, l) {
    r.child = n === null ? Ig(r, null, o, l) : lo(r, n.child, o, l);
  }
  function nv(n, r, o, l, f) {
    o = o.render;
    var p = r.ref;
    if ("ref" in l) {
      var b = {};
      for (var R in l) R !== "ref" && (b[R] = l[R]);
    } else b = l;
    return (
      gi(r),
      (l = id(n, r, o, b, p, f)),
      (R = od()),
      n !== null && !qt
        ? (sd(n, r, f), Jr(n, r, f))
        : (nt && R && $f(r), (r.flags |= 1), Xt(n, r, l, f), r.child)
    );
  }
  function rv(n, r, o, l, f) {
    if (n === null) {
      var p = o.type;
      return typeof p == "function" &&
        !Ff(p) &&
        p.defaultProps === void 0 &&
        o.compare === null
        ? ((r.tag = 15), (r.type = p), av(n, r, p, l, f))
        : ((n = Il(o.type, null, l, r, r.mode, f)),
          (n.ref = r.ref),
          (n.return = r),
          (r.child = n));
    }
    if (((p = n.child), !Dd(n, f))) {
      var b = p.memoizedProps;
      if (
        ((o = o.compare), (o = o !== null ? o : os), o(b, l) && n.ref === r.ref)
      )
        return Jr(n, r, f);
    }
    return (
      (r.flags |= 1),
      (n = Ir(p, l)),
      (n.ref = r.ref),
      (n.return = r),
      (r.child = n)
    );
  }
  function av(n, r, o, l, f) {
    if (n !== null) {
      var p = n.memoizedProps;
      if (os(p, l) && n.ref === r.ref)
        if (((qt = !1), (r.pendingProps = l = p), Dd(n, f)))
          (n.flags & 131072) !== 0 && (qt = !0);
        else return ((r.lanes = n.lanes), Jr(n, r, f));
    }
    return Ed(n, r, o, l, f);
  }
  function iv(n, r, o) {
    var l = r.pendingProps,
      f = l.children,
      p = n !== null ? n.memoizedState : null;
    if (l.mode === "hidden") {
      if ((r.flags & 128) !== 0) {
        if (((l = p !== null ? p.baseLanes | o : o), n !== null)) {
          for (f = r.child = n.child, p = 0; f !== null; )
            ((p = p | f.lanes | f.childLanes), (f = f.sibling));
          r.childLanes = p & ~l;
        } else ((r.childLanes = 0), (r.child = null));
        return ov(n, r, l, o);
      }
      if ((o & 536870912) !== 0)
        ((r.memoizedState = { baseLanes: 0, cachePool: null }),
          n !== null && Ql(r, p !== null ? p.cachePool : null),
          p !== null ? ag(r, p) : nd(),
          qg(r));
      else
        return (
          (r.lanes = r.childLanes = 536870912),
          ov(n, r, p !== null ? p.baseLanes | o : o, o)
        );
    } else
      p !== null
        ? (Ql(r, p.cachePool), ag(r, p), xa(), (r.memoizedState = null))
        : (n !== null && Ql(r, null), nd(), xa());
    return (Xt(n, r, f, o), r.child);
  }
  function ov(n, r, o, l) {
    var f = Qf();
    return (
      (f = f === null ? null : { parent: Ht._currentValue, pool: f }),
      (r.memoizedState = { baseLanes: o, cachePool: f }),
      n !== null && Ql(r, null),
      nd(),
      qg(r),
      n !== null && fs(n, r, l, !0),
      null
    );
  }
  function hu(n, r) {
    var o = r.ref;
    if (o === null) n !== null && n.ref !== null && (r.flags |= 4194816);
    else {
      if (typeof o != "function" && typeof o != "object") throw Error(i(284));
      (n === null || n.ref !== o) && (r.flags |= 4194816);
    }
  }
  function Ed(n, r, o, l, f) {
    return (
      gi(r),
      (o = id(n, r, o, l, void 0, f)),
      (l = od()),
      n !== null && !qt
        ? (sd(n, r, f), Jr(n, r, f))
        : (nt && l && $f(r), (r.flags |= 1), Xt(n, r, o, f), r.child)
    );
  }
  function sv(n, r, o, l, f, p) {
    return (
      gi(r),
      (r.updateQueue = null),
      (o = og(r, l, o, f)),
      ig(n),
      (l = od()),
      n !== null && !qt
        ? (sd(n, r, p), Jr(n, r, p))
        : (nt && l && $f(r), (r.flags |= 1), Xt(n, r, o, p), r.child)
    );
  }
  function lv(n, r, o, l, f) {
    if ((gi(r), r.stateNode === null)) {
      var p = Ji,
        b = o.contextType;
      (typeof b == "object" && b !== null && (p = sn(b)),
        (p = new o(l, p)),
        (r.memoizedState =
          p.state !== null && p.state !== void 0 ? p.state : null),
        (p.updater = Sd),
        (r.stateNode = p),
        (p._reactInternals = r),
        (p = r.stateNode),
        (p.props = l),
        (p.state = r.memoizedState),
        (p.refs = {}),
        Jf(r),
        (b = o.contextType),
        (p.context = typeof b == "object" && b !== null ? sn(b) : Ji),
        (p.state = r.memoizedState),
        (b = o.getDerivedStateFromProps),
        typeof b == "function" && (wd(r, o, b, l), (p.state = r.memoizedState)),
        typeof o.getDerivedStateFromProps == "function" ||
          typeof p.getSnapshotBeforeUpdate == "function" ||
          (typeof p.UNSAFE_componentWillMount != "function" &&
            typeof p.componentWillMount != "function") ||
          ((b = p.state),
          typeof p.componentWillMount == "function" && p.componentWillMount(),
          typeof p.UNSAFE_componentWillMount == "function" &&
            p.UNSAFE_componentWillMount(),
          b !== p.state && Sd.enqueueReplaceState(p, p.state, null),
          vs(r, l, p, f),
          gs(),
          (p.state = r.memoizedState)),
        typeof p.componentDidMount == "function" && (r.flags |= 4194308),
        (l = !0));
    } else if (n === null) {
      p = r.stateNode;
      var R = r.memoizedProps,
        j = wi(o, R);
      p.props = j;
      var K = p.context,
        re = o.contextType;
      ((b = Ji), typeof re == "object" && re !== null && (b = sn(re)));
      var ue = o.getDerivedStateFromProps;
      ((re =
        typeof ue == "function" ||
        typeof p.getSnapshotBeforeUpdate == "function"),
        (R = r.pendingProps !== R),
        re ||
          (typeof p.UNSAFE_componentWillReceiveProps != "function" &&
            typeof p.componentWillReceiveProps != "function") ||
          ((R || K !== b) && Yg(r, p, l, b)),
        (ba = !1));
      var X = r.memoizedState;
      ((p.state = X),
        vs(r, l, p, f),
        gs(),
        (K = r.memoizedState),
        R || X !== K || ba
          ? (typeof ue == "function" &&
              (wd(r, o, ue, l), (K = r.memoizedState)),
            (j = ba || Gg(r, o, j, l, X, K, b))
              ? (re ||
                  (typeof p.UNSAFE_componentWillMount != "function" &&
                    typeof p.componentWillMount != "function") ||
                  (typeof p.componentWillMount == "function" &&
                    p.componentWillMount(),
                  typeof p.UNSAFE_componentWillMount == "function" &&
                    p.UNSAFE_componentWillMount()),
                typeof p.componentDidMount == "function" &&
                  (r.flags |= 4194308))
              : (typeof p.componentDidMount == "function" &&
                  (r.flags |= 4194308),
                (r.memoizedProps = l),
                (r.memoizedState = K)),
            (p.props = l),
            (p.state = K),
            (p.context = b),
            (l = j))
          : (typeof p.componentDidMount == "function" && (r.flags |= 4194308),
            (l = !1)));
    } else {
      ((p = r.stateNode),
        Wf(n, r),
        (b = r.memoizedProps),
        (re = wi(o, b)),
        (p.props = re),
        (ue = r.pendingProps),
        (X = p.context),
        (K = o.contextType),
        (j = Ji),
        typeof K == "object" && K !== null && (j = sn(K)),
        (R = o.getDerivedStateFromProps),
        (K =
          typeof R == "function" ||
          typeof p.getSnapshotBeforeUpdate == "function") ||
          (typeof p.UNSAFE_componentWillReceiveProps != "function" &&
            typeof p.componentWillReceiveProps != "function") ||
          ((b !== ue || X !== j) && Yg(r, p, l, j)),
        (ba = !1),
        (X = r.memoizedState),
        (p.state = X),
        vs(r, l, p, f),
        gs());
      var J = r.memoizedState;
      b !== ue ||
      X !== J ||
      ba ||
      (n !== null && n.dependencies !== null && Yl(n.dependencies))
        ? (typeof R == "function" && (wd(r, o, R, l), (J = r.memoizedState)),
          (re =
            ba ||
            Gg(r, o, re, l, X, J, j) ||
            (n !== null && n.dependencies !== null && Yl(n.dependencies)))
            ? (K ||
                (typeof p.UNSAFE_componentWillUpdate != "function" &&
                  typeof p.componentWillUpdate != "function") ||
                (typeof p.componentWillUpdate == "function" &&
                  p.componentWillUpdate(l, J, j),
                typeof p.UNSAFE_componentWillUpdate == "function" &&
                  p.UNSAFE_componentWillUpdate(l, J, j)),
              typeof p.componentDidUpdate == "function" && (r.flags |= 4),
              typeof p.getSnapshotBeforeUpdate == "function" &&
                (r.flags |= 1024))
            : (typeof p.componentDidUpdate != "function" ||
                (b === n.memoizedProps && X === n.memoizedState) ||
                (r.flags |= 4),
              typeof p.getSnapshotBeforeUpdate != "function" ||
                (b === n.memoizedProps && X === n.memoizedState) ||
                (r.flags |= 1024),
              (r.memoizedProps = l),
              (r.memoizedState = J)),
          (p.props = l),
          (p.state = J),
          (p.context = j),
          (l = re))
        : (typeof p.componentDidUpdate != "function" ||
            (b === n.memoizedProps && X === n.memoizedState) ||
            (r.flags |= 4),
          typeof p.getSnapshotBeforeUpdate != "function" ||
            (b === n.memoizedProps && X === n.memoizedState) ||
            (r.flags |= 1024),
          (l = !1));
    }
    return (
      (p = l),
      hu(n, r),
      (l = (r.flags & 128) !== 0),
      p || l
        ? ((p = r.stateNode),
          (o =
            l && typeof o.getDerivedStateFromError != "function"
              ? null
              : p.render()),
          (r.flags |= 1),
          n !== null && l
            ? ((r.child = lo(r, n.child, null, f)),
              (r.child = lo(r, null, o, f)))
            : Xt(n, r, o, f),
          (r.memoizedState = p.state),
          (n = r.child))
        : (n = Jr(n, r, f)),
      n
    );
  }
  function uv(n, r, o, l) {
    return (us(), (r.flags |= 256), Xt(n, r, o, l), r.child);
  }
  var xd = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function Rd(n) {
    return { baseLanes: n, cachePool: Qy() };
  }
  function Od(n, r, o) {
    return ((n = n !== null ? n.childLanes & ~o : 0), r && (n |= Jn), n);
  }
  function cv(n, r, o) {
    var l = r.pendingProps,
      f = !1,
      p = (r.flags & 128) !== 0,
      b;
    if (
      ((b = p) ||
        (b =
          n !== null && n.memoizedState === null ? !1 : (Zt.current & 2) !== 0),
      b && ((f = !0), (r.flags &= -129)),
      (b = (r.flags & 32) !== 0),
      (r.flags &= -33),
      n === null)
    ) {
      if (nt) {
        if ((f ? Ea(r) : xa(), nt)) {
          var R = Rt,
            j;
          if ((j = R)) {
            e: {
              for (j = R, R = br; j.nodeType !== 8; ) {
                if (!R) {
                  R = null;
                  break e;
                }
                if (((j = fr(j.nextSibling)), j === null)) {
                  R = null;
                  break e;
                }
              }
              R = j;
            }
            R !== null
              ? ((r.memoizedState = {
                  dehydrated: R,
                  treeContext: di !== null ? { id: qr, overflow: Gr } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (j = Mn(18, null, null, 0)),
                (j.stateNode = R),
                (j.return = r),
                (r.child = j),
                (dn = r),
                (Rt = null),
                (j = !0))
              : (j = !1);
          }
          j || pi(r);
        }
        if (
          ((R = r.memoizedState),
          R !== null && ((R = R.dehydrated), R !== null))
        )
          return (uh(R) ? (r.lanes = 32) : (r.lanes = 536870912), null);
        Xr(r);
      }
      return (
        (R = l.children),
        (l = l.fallback),
        f
          ? (xa(),
            (f = r.mode),
            (R = mu({ mode: "hidden", children: R }, f)),
            (l = fi(l, f, o, null)),
            (R.return = r),
            (l.return = r),
            (R.sibling = l),
            (r.child = R),
            (f = r.child),
            (f.memoizedState = Rd(o)),
            (f.childLanes = Od(n, b, o)),
            (r.memoizedState = xd),
            l)
          : (Ea(r), Ad(r, R))
      );
    }
    if (
      ((j = n.memoizedState), j !== null && ((R = j.dehydrated), R !== null))
    ) {
      if (p)
        r.flags & 256
          ? (Ea(r), (r.flags &= -257), (r = Cd(n, r, o)))
          : r.memoizedState !== null
            ? (xa(), (r.child = n.child), (r.flags |= 128), (r = null))
            : (xa(),
              (f = l.fallback),
              (R = r.mode),
              (l = mu({ mode: "visible", children: l.children }, R)),
              (f = fi(f, R, o, null)),
              (f.flags |= 2),
              (l.return = r),
              (f.return = r),
              (l.sibling = f),
              (r.child = l),
              lo(r, n.child, null, o),
              (l = r.child),
              (l.memoizedState = Rd(o)),
              (l.childLanes = Od(n, b, o)),
              (r.memoizedState = xd),
              (r = f));
      else if ((Ea(r), uh(R))) {
        if (((b = R.nextSibling && R.nextSibling.dataset), b)) var K = b.dgst;
        ((b = K),
          (l = Error(i(419))),
          (l.stack = ""),
          (l.digest = b),
          cs({ value: l, source: null, stack: null }),
          (r = Cd(n, r, o)));
      } else if (
        (qt || fs(n, r, o, !1), (b = (o & n.childLanes) !== 0), qt || b)
      ) {
        if (
          ((b = pt),
          b !== null &&
            ((l = o & -o),
            (l = (l & 42) !== 0 ? 1 : H(l)),
            (l = (l & (b.suspendedLanes | o)) !== 0 ? 0 : l),
            l !== 0 && l !== j.retryLane))
        )
          throw ((j.retryLane = l), Xi(n, l), Ln(b, n, l), tv);
        (R.data === "$?" || qd(), (r = Cd(n, r, o)));
      } else
        R.data === "$?"
          ? ((r.flags |= 192), (r.child = n.child), (r = null))
          : ((n = j.treeContext),
            (Rt = fr(R.nextSibling)),
            (dn = r),
            (nt = !0),
            (mi = null),
            (br = !1),
            n !== null &&
              ((Kn[Qn++] = qr),
              (Kn[Qn++] = Gr),
              (Kn[Qn++] = di),
              (qr = n.id),
              (Gr = n.overflow),
              (di = r)),
            (r = Ad(r, l.children)),
            (r.flags |= 4096));
      return r;
    }
    return f
      ? (xa(),
        (f = l.fallback),
        (R = r.mode),
        (j = n.child),
        (K = j.sibling),
        (l = Ir(j, { mode: "hidden", children: l.children })),
        (l.subtreeFlags = j.subtreeFlags & 65011712),
        K !== null ? (f = Ir(K, f)) : ((f = fi(f, R, o, null)), (f.flags |= 2)),
        (f.return = r),
        (l.return = r),
        (l.sibling = f),
        (r.child = l),
        (l = f),
        (f = r.child),
        (R = n.child.memoizedState),
        R === null
          ? (R = Rd(o))
          : ((j = R.cachePool),
            j !== null
              ? ((K = Ht._currentValue),
                (j = j.parent !== K ? { parent: K, pool: K } : j))
              : (j = Qy()),
            (R = { baseLanes: R.baseLanes | o, cachePool: j })),
        (f.memoizedState = R),
        (f.childLanes = Od(n, b, o)),
        (r.memoizedState = xd),
        l)
      : (Ea(r),
        (o = n.child),
        (n = o.sibling),
        (o = Ir(o, { mode: "visible", children: l.children })),
        (o.return = r),
        (o.sibling = null),
        n !== null &&
          ((b = r.deletions),
          b === null ? ((r.deletions = [n]), (r.flags |= 16)) : b.push(n)),
        (r.child = o),
        (r.memoizedState = null),
        o);
  }
  function Ad(n, r) {
    return (
      (r = mu({ mode: "visible", children: r }, n.mode)),
      (r.return = n),
      (n.child = r)
    );
  }
  function mu(n, r) {
    return (
      (n = Mn(22, n, null, r)),
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
  function Cd(n, r, o) {
    return (
      lo(r, n.child, null, o),
      (n = Ad(r, r.pendingProps.children)),
      (n.flags |= 2),
      (r.memoizedState = null),
      n
    );
  }
  function fv(n, r, o) {
    n.lanes |= r;
    var l = n.alternate;
    (l !== null && (l.lanes |= r), qf(n.return, r, o));
  }
  function Td(n, r, o, l, f) {
    var p = n.memoizedState;
    p === null
      ? (n.memoizedState = {
          isBackwards: r,
          rendering: null,
          renderingStartTime: 0,
          last: l,
          tail: o,
          tailMode: f,
        })
      : ((p.isBackwards = r),
        (p.rendering = null),
        (p.renderingStartTime = 0),
        (p.last = l),
        (p.tail = o),
        (p.tailMode = f));
  }
  function dv(n, r, o) {
    var l = r.pendingProps,
      f = l.revealOrder,
      p = l.tail;
    if ((Xt(n, r, l.children, o), (l = Zt.current), (l & 2) !== 0))
      ((l = (l & 1) | 2), (r.flags |= 128));
    else {
      if (n !== null && (n.flags & 128) !== 0)
        e: for (n = r.child; n !== null; ) {
          if (n.tag === 13) n.memoizedState !== null && fv(n, o, r);
          else if (n.tag === 19) fv(n, o, r);
          else if (n.child !== null) {
            ((n.child.return = n), (n = n.child));
            continue;
          }
          if (n === r) break e;
          for (; n.sibling === null; ) {
            if (n.return === null || n.return === r) break e;
            n = n.return;
          }
          ((n.sibling.return = n.return), (n = n.sibling));
        }
      l &= 1;
    }
    switch ((le(Zt, l), f)) {
      case "forwards":
        for (o = r.child, f = null; o !== null; )
          ((n = o.alternate),
            n !== null && cu(n) === null && (f = o),
            (o = o.sibling));
        ((o = f),
          o === null
            ? ((f = r.child), (r.child = null))
            : ((f = o.sibling), (o.sibling = null)),
          Td(r, !1, f, o, p));
        break;
      case "backwards":
        for (o = null, f = r.child, r.child = null; f !== null; ) {
          if (((n = f.alternate), n !== null && cu(n) === null)) {
            r.child = f;
            break;
          }
          ((n = f.sibling), (f.sibling = o), (o = f), (f = n));
        }
        Td(r, !0, o, null, p);
        break;
      case "together":
        Td(r, !1, null, null, void 0);
        break;
      default:
        r.memoizedState = null;
    }
    return r.child;
  }
  function Jr(n, r, o) {
    if (
      (n !== null && (r.dependencies = n.dependencies),
      (Ta |= r.lanes),
      (o & r.childLanes) === 0)
    )
      if (n !== null) {
        if ((fs(n, r, o, !1), (o & r.childLanes) === 0)) return null;
      } else return null;
    if (n !== null && r.child !== n.child) throw Error(i(153));
    if (r.child !== null) {
      for (
        n = r.child, o = Ir(n, n.pendingProps), r.child = o, o.return = r;
        n.sibling !== null;

      )
        ((n = n.sibling),
          (o = o.sibling = Ir(n, n.pendingProps)),
          (o.return = r));
      o.sibling = null;
    }
    return r.child;
  }
  function Dd(n, r) {
    return (n.lanes & r) !== 0
      ? !0
      : ((n = n.dependencies), !!(n !== null && Yl(n)));
  }
  function Nx(n, r, o) {
    switch (r.tag) {
      case 3:
        (qe(r, r.stateNode.containerInfo),
          va(r, Ht, n.memoizedState.cache),
          us());
        break;
      case 27:
      case 5:
        at(r);
        break;
      case 4:
        qe(r, r.stateNode.containerInfo);
        break;
      case 10:
        va(r, r.type, r.memoizedProps.value);
        break;
      case 13:
        var l = r.memoizedState;
        if (l !== null)
          return l.dehydrated !== null
            ? (Ea(r), (r.flags |= 128), null)
            : (o & r.child.childLanes) !== 0
              ? cv(n, r, o)
              : (Ea(r), (n = Jr(n, r, o)), n !== null ? n.sibling : null);
        Ea(r);
        break;
      case 19:
        var f = (n.flags & 128) !== 0;
        if (
          ((l = (o & r.childLanes) !== 0),
          l || (fs(n, r, o, !1), (l = (o & r.childLanes) !== 0)),
          f)
        ) {
          if (l) return dv(n, r, o);
          r.flags |= 128;
        }
        if (
          ((f = r.memoizedState),
          f !== null &&
            ((f.rendering = null), (f.tail = null), (f.lastEffect = null)),
          le(Zt, Zt.current),
          l)
        )
          break;
        return null;
      case 22:
      case 23:
        return ((r.lanes = 0), iv(n, r, o));
      case 24:
        va(r, Ht, n.memoizedState.cache);
    }
    return Jr(n, r, o);
  }
  function hv(n, r, o) {
    if (n !== null)
      if (n.memoizedProps !== r.pendingProps) qt = !0;
      else {
        if (!Dd(n, o) && (r.flags & 128) === 0) return ((qt = !1), Nx(n, r, o));
        qt = (n.flags & 131072) !== 0;
      }
    else ((qt = !1), nt && (r.flags & 1048576) !== 0 && Hy(r, Gl, r.index));
    switch (((r.lanes = 0), r.tag)) {
      case 16:
        e: {
          n = r.pendingProps;
          var l = r.elementType,
            f = l._init;
          if (((l = f(l._payload)), (r.type = l), typeof l == "function"))
            Ff(l)
              ? ((n = wi(l, n)), (r.tag = 1), (r = lv(null, r, l, n, o)))
              : ((r.tag = 0), (r = Ed(null, r, l, n, o)));
          else {
            if (l != null) {
              if (((f = l.$$typeof), f === B)) {
                ((r.tag = 11), (r = nv(null, r, l, n, o)));
                break e;
              } else if (f === Y) {
                ((r.tag = 14), (r = rv(null, r, l, n, o)));
                break e;
              }
            }
            throw ((r = ce(l) || l), Error(i(306, r, "")));
          }
        }
        return r;
      case 0:
        return Ed(n, r, r.type, r.pendingProps, o);
      case 1:
        return ((l = r.type), (f = wi(l, r.pendingProps)), lv(n, r, l, f, o));
      case 3:
        e: {
          if ((qe(r, r.stateNode.containerInfo), n === null))
            throw Error(i(387));
          l = r.pendingProps;
          var p = r.memoizedState;
          ((f = p.element), Wf(n, r), vs(r, l, null, o));
          var b = r.memoizedState;
          if (
            ((l = b.cache),
            va(r, Ht, l),
            l !== p.cache && Gf(r, [Ht], o, !0),
            gs(),
            (l = b.element),
            p.isDehydrated)
          )
            if (
              ((p = { element: l, isDehydrated: !1, cache: b.cache }),
              (r.updateQueue.baseState = p),
              (r.memoizedState = p),
              r.flags & 256)
            ) {
              r = uv(n, r, l, o);
              break e;
            } else if (l !== f) {
              ((f = Gn(Error(i(424)), r)), cs(f), (r = uv(n, r, l, o)));
              break e;
            } else {
              switch (((n = r.stateNode.containerInfo), n.nodeType)) {
                case 9:
                  n = n.body;
                  break;
                default:
                  n = n.nodeName === "HTML" ? n.ownerDocument.body : n;
              }
              for (
                Rt = fr(n.firstChild),
                  dn = r,
                  nt = !0,
                  mi = null,
                  br = !0,
                  o = Ig(r, null, l, o),
                  r.child = o;
                o;

              )
                ((o.flags = (o.flags & -3) | 4096), (o = o.sibling));
            }
          else {
            if ((us(), l === f)) {
              r = Jr(n, r, o);
              break e;
            }
            Xt(n, r, l, o);
          }
          r = r.child;
        }
        return r;
      case 26:
        return (
          hu(n, r),
          n === null
            ? (o = g0(r.type, null, r.pendingProps, null))
              ? (r.memoizedState = o)
              : nt ||
                ((o = r.type),
                (n = r.pendingProps),
                (l = Cu(Oe.current).createElement(o)),
                (l[$] = r),
                (l[Z] = n),
                Wt(l, o, n),
                Pe(l),
                (r.stateNode = l))
            : (r.memoizedState = g0(
                r.type,
                n.memoizedProps,
                r.pendingProps,
                n.memoizedState,
              )),
          null
        );
      case 27:
        return (
          at(r),
          n === null &&
            nt &&
            ((l = r.stateNode = m0(r.type, r.pendingProps, Oe.current)),
            (dn = r),
            (br = !0),
            (f = Rt),
            za(r.type) ? ((ch = f), (Rt = fr(l.firstChild))) : (Rt = f)),
          Xt(n, r, r.pendingProps.children, o),
          hu(n, r),
          n === null && (r.flags |= 4194304),
          r.child
        );
      case 5:
        return (
          n === null &&
            nt &&
            ((f = l = Rt) &&
              ((l = oR(l, r.type, r.pendingProps, br)),
              l !== null
                ? ((r.stateNode = l),
                  (dn = r),
                  (Rt = fr(l.firstChild)),
                  (br = !1),
                  (f = !0))
                : (f = !1)),
            f || pi(r)),
          at(r),
          (f = r.type),
          (p = r.pendingProps),
          (b = n !== null ? n.memoizedProps : null),
          (l = p.children),
          oh(f, p) ? (l = null) : b !== null && oh(f, b) && (r.flags |= 32),
          r.memoizedState !== null &&
            ((f = id(n, r, xx, null, null, o)), (Bs._currentValue = f)),
          hu(n, r),
          Xt(n, r, l, o),
          r.child
        );
      case 6:
        return (
          n === null &&
            nt &&
            ((n = o = Rt) &&
              ((o = sR(o, r.pendingProps, br)),
              o !== null
                ? ((r.stateNode = o), (dn = r), (Rt = null), (n = !0))
                : (n = !1)),
            n || pi(r)),
          null
        );
      case 13:
        return cv(n, r, o);
      case 4:
        return (
          qe(r, r.stateNode.containerInfo),
          (l = r.pendingProps),
          n === null ? (r.child = lo(r, null, l, o)) : Xt(n, r, l, o),
          r.child
        );
      case 11:
        return nv(n, r, r.type, r.pendingProps, o);
      case 7:
        return (Xt(n, r, r.pendingProps, o), r.child);
      case 8:
        return (Xt(n, r, r.pendingProps.children, o), r.child);
      case 12:
        return (Xt(n, r, r.pendingProps.children, o), r.child);
      case 10:
        return (
          (l = r.pendingProps),
          va(r, r.type, l.value),
          Xt(n, r, l.children, o),
          r.child
        );
      case 9:
        return (
          (f = r.type._context),
          (l = r.pendingProps.children),
          gi(r),
          (f = sn(f)),
          (l = l(f)),
          (r.flags |= 1),
          Xt(n, r, l, o),
          r.child
        );
      case 14:
        return rv(n, r, r.type, r.pendingProps, o);
      case 15:
        return av(n, r, r.type, r.pendingProps, o);
      case 19:
        return dv(n, r, o);
      case 31:
        return (
          (l = r.pendingProps),
          (o = r.mode),
          (l = { mode: l.mode, children: l.children }),
          n === null
            ? ((o = mu(l, o)),
              (o.ref = r.ref),
              (r.child = o),
              (o.return = r),
              (r = o))
            : ((o = Ir(n.child, l)),
              (o.ref = r.ref),
              (r.child = o),
              (o.return = r),
              (r = o)),
          r
        );
      case 22:
        return iv(n, r, o);
      case 24:
        return (
          gi(r),
          (l = sn(Ht)),
          n === null
            ? ((f = Qf()),
              f === null &&
                ((f = pt),
                (p = Yf()),
                (f.pooledCache = p),
                p.refCount++,
                p !== null && (f.pooledCacheLanes |= o),
                (f = p)),
              (r.memoizedState = { parent: l, cache: f }),
              Jf(r),
              va(r, Ht, f))
            : ((n.lanes & o) !== 0 && (Wf(n, r), vs(r, null, null, o), gs()),
              (f = n.memoizedState),
              (p = r.memoizedState),
              f.parent !== l
                ? ((f = { parent: l, cache: l }),
                  (r.memoizedState = f),
                  r.lanes === 0 &&
                    (r.memoizedState = r.updateQueue.baseState = f),
                  va(r, Ht, l))
                : ((l = p.cache),
                  va(r, Ht, l),
                  l !== f.cache && Gf(r, [Ht], o, !0))),
          Xt(n, r, r.pendingProps.children, o),
          r.child
        );
      case 29:
        throw r.pendingProps;
    }
    throw Error(i(156, r.tag));
  }
  function Wr(n) {
    n.flags |= 4;
  }
  function mv(n, r) {
    if (r.type !== "stylesheet" || (r.state.loading & 4) !== 0)
      n.flags &= -16777217;
    else if (((n.flags |= 16777216), !_0(r))) {
      if (
        ((r = Xn.current),
        r !== null &&
          ((We & 4194048) === We
            ? wr !== null
            : ((We & 62914560) !== We && (We & 536870912) === 0) || r !== wr))
      )
        throw ((ps = Xf), Xy);
      n.flags |= 8192;
    }
  }
  function pu(n, r) {
    (r !== null && (n.flags |= 4),
      n.flags & 16384 &&
        ((r = n.tag !== 22 ? Vi() : 536870912), (n.lanes |= r), (ho |= r)));
  }
  function Rs(n, r) {
    if (!nt)
      switch (n.tailMode) {
        case "hidden":
          r = n.tail;
          for (var o = null; r !== null; )
            (r.alternate !== null && (o = r), (r = r.sibling));
          o === null ? (n.tail = null) : (o.sibling = null);
          break;
        case "collapsed":
          o = n.tail;
          for (var l = null; o !== null; )
            (o.alternate !== null && (l = o), (o = o.sibling));
          l === null
            ? r || n.tail === null
              ? (n.tail = null)
              : (n.tail.sibling = null)
            : (l.sibling = null);
      }
  }
  function Et(n) {
    var r = n.alternate !== null && n.alternate.child === n.child,
      o = 0,
      l = 0;
    if (r)
      for (var f = n.child; f !== null; )
        ((o |= f.lanes | f.childLanes),
          (l |= f.subtreeFlags & 65011712),
          (l |= f.flags & 65011712),
          (f.return = n),
          (f = f.sibling));
    else
      for (f = n.child; f !== null; )
        ((o |= f.lanes | f.childLanes),
          (l |= f.subtreeFlags),
          (l |= f.flags),
          (f.return = n),
          (f = f.sibling));
    return ((n.subtreeFlags |= l), (n.childLanes = o), r);
  }
  function zx(n, r, o) {
    var l = r.pendingProps;
    switch ((Hf(r), r.tag)) {
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
        return (Et(r), null);
      case 1:
        return (Et(r), null);
      case 3:
        return (
          (o = r.stateNode),
          (l = null),
          n !== null && (l = n.memoizedState.cache),
          r.memoizedState.cache !== l && (r.flags |= 2048),
          Kr(Ht),
          gt(),
          o.pendingContext &&
            ((o.context = o.pendingContext), (o.pendingContext = null)),
          (n === null || n.child === null) &&
            (ls(r)
              ? Wr(r)
              : n === null ||
                (n.memoizedState.isDehydrated && (r.flags & 256) === 0) ||
                ((r.flags |= 1024), qy())),
          Et(r),
          null
        );
      case 26:
        return (
          (o = r.memoizedState),
          n === null
            ? (Wr(r),
              o !== null ? (Et(r), mv(r, o)) : (Et(r), (r.flags &= -16777217)))
            : o
              ? o !== n.memoizedState
                ? (Wr(r), Et(r), mv(r, o))
                : (Et(r), (r.flags &= -16777217))
              : (n.memoizedProps !== l && Wr(r), Et(r), (r.flags &= -16777217)),
          null
        );
      case 27:
        (ut(r), (o = Oe.current));
        var f = r.type;
        if (n !== null && r.stateNode != null) n.memoizedProps !== l && Wr(r);
        else {
          if (!l) {
            if (r.stateNode === null) throw Error(i(166));
            return (Et(r), null);
          }
          ((n = ve.current),
            ls(r) ? Zy(r) : ((n = m0(f, l, o)), (r.stateNode = n), Wr(r)));
        }
        return (Et(r), null);
      case 5:
        if ((ut(r), (o = r.type), n !== null && r.stateNode != null))
          n.memoizedProps !== l && Wr(r);
        else {
          if (!l) {
            if (r.stateNode === null) throw Error(i(166));
            return (Et(r), null);
          }
          if (((n = ve.current), ls(r))) Zy(r);
          else {
            switch (((f = Cu(Oe.current)), n)) {
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
                      typeof l.is == "string"
                        ? f.createElement("select", { is: l.is })
                        : f.createElement("select")),
                      l.multiple
                        ? (n.multiple = !0)
                        : l.size && (n.size = l.size));
                    break;
                  default:
                    n =
                      typeof l.is == "string"
                        ? f.createElement(o, { is: l.is })
                        : f.createElement(o);
                }
            }
            ((n[$] = r), (n[Z] = l));
            e: for (f = r.child; f !== null; ) {
              if (f.tag === 5 || f.tag === 6) n.appendChild(f.stateNode);
              else if (f.tag !== 4 && f.tag !== 27 && f.child !== null) {
                ((f.child.return = f), (f = f.child));
                continue;
              }
              if (f === r) break e;
              for (; f.sibling === null; ) {
                if (f.return === null || f.return === r) break e;
                f = f.return;
              }
              ((f.sibling.return = f.return), (f = f.sibling));
            }
            r.stateNode = n;
            e: switch ((Wt(n, o, l), o)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                n = !!l.autoFocus;
                break e;
              case "img":
                n = !0;
                break e;
              default:
                n = !1;
            }
            n && Wr(r);
          }
        }
        return (Et(r), (r.flags &= -16777217), null);
      case 6:
        if (n && r.stateNode != null) n.memoizedProps !== l && Wr(r);
        else {
          if (typeof l != "string" && r.stateNode === null) throw Error(i(166));
          if (((n = Oe.current), ls(r))) {
            if (
              ((n = r.stateNode),
              (o = r.memoizedProps),
              (l = null),
              (f = dn),
              f !== null)
            )
              switch (f.tag) {
                case 27:
                case 5:
                  l = f.memoizedProps;
              }
            ((n[$] = r),
              (n = !!(
                n.nodeValue === o ||
                (l !== null && l.suppressHydrationWarning === !0) ||
                s0(n.nodeValue, o)
              )),
              n || pi(r));
          } else ((n = Cu(n).createTextNode(l)), (n[$] = r), (r.stateNode = n));
        }
        return (Et(r), null);
      case 13:
        if (
          ((l = r.memoizedState),
          n === null ||
            (n.memoizedState !== null && n.memoizedState.dehydrated !== null))
        ) {
          if (((f = ls(r)), l !== null && l.dehydrated !== null)) {
            if (n === null) {
              if (!f) throw Error(i(318));
              if (
                ((f = r.memoizedState),
                (f = f !== null ? f.dehydrated : null),
                !f)
              )
                throw Error(i(317));
              f[$] = r;
            } else
              (us(),
                (r.flags & 128) === 0 && (r.memoizedState = null),
                (r.flags |= 4));
            (Et(r), (f = !1));
          } else
            ((f = qy()),
              n !== null &&
                n.memoizedState !== null &&
                (n.memoizedState.hydrationErrors = f),
              (f = !0));
          if (!f) return r.flags & 256 ? (Xr(r), r) : (Xr(r), null);
        }
        if ((Xr(r), (r.flags & 128) !== 0)) return ((r.lanes = o), r);
        if (
          ((o = l !== null), (n = n !== null && n.memoizedState !== null), o)
        ) {
          ((l = r.child),
            (f = null),
            l.alternate !== null &&
              l.alternate.memoizedState !== null &&
              l.alternate.memoizedState.cachePool !== null &&
              (f = l.alternate.memoizedState.cachePool.pool));
          var p = null;
          (l.memoizedState !== null &&
            l.memoizedState.cachePool !== null &&
            (p = l.memoizedState.cachePool.pool),
            p !== f && (l.flags |= 2048));
        }
        return (
          o !== n && o && (r.child.flags |= 8192),
          pu(r, r.updateQueue),
          Et(r),
          null
        );
      case 4:
        return (gt(), n === null && th(r.stateNode.containerInfo), Et(r), null);
      case 10:
        return (Kr(r.type), Et(r), null);
      case 19:
        if ((fe(Zt), (f = r.memoizedState), f === null)) return (Et(r), null);
        if (((l = (r.flags & 128) !== 0), (p = f.rendering), p === null))
          if (l) Rs(f, !1);
          else {
            if (Ot !== 0 || (n !== null && (n.flags & 128) !== 0))
              for (n = r.child; n !== null; ) {
                if (((p = cu(n)), p !== null)) {
                  for (
                    r.flags |= 128,
                      Rs(f, !1),
                      n = p.updateQueue,
                      r.updateQueue = n,
                      pu(r, n),
                      r.subtreeFlags = 0,
                      n = o,
                      o = r.child;
                    o !== null;

                  )
                    ($y(o, n), (o = o.sibling));
                  return (le(Zt, (Zt.current & 1) | 2), r.child);
                }
                n = n.sibling;
              }
            f.tail !== null &&
              Bt() > vu &&
              ((r.flags |= 128), (l = !0), Rs(f, !1), (r.lanes = 4194304));
          }
        else {
          if (!l)
            if (((n = cu(p)), n !== null)) {
              if (
                ((r.flags |= 128),
                (l = !0),
                (n = n.updateQueue),
                (r.updateQueue = n),
                pu(r, n),
                Rs(f, !0),
                f.tail === null &&
                  f.tailMode === "hidden" &&
                  !p.alternate &&
                  !nt)
              )
                return (Et(r), null);
            } else
              2 * Bt() - f.renderingStartTime > vu &&
                o !== 536870912 &&
                ((r.flags |= 128), (l = !0), Rs(f, !1), (r.lanes = 4194304));
          f.isBackwards
            ? ((p.sibling = r.child), (r.child = p))
            : ((n = f.last),
              n !== null ? (n.sibling = p) : (r.child = p),
              (f.last = p));
        }
        return f.tail !== null
          ? ((r = f.tail),
            (f.rendering = r),
            (f.tail = r.sibling),
            (f.renderingStartTime = Bt()),
            (r.sibling = null),
            (n = Zt.current),
            le(Zt, l ? (n & 1) | 2 : n & 1),
            r)
          : (Et(r), null);
      case 22:
      case 23:
        return (
          Xr(r),
          rd(),
          (l = r.memoizedState !== null),
          n !== null
            ? (n.memoizedState !== null) !== l && (r.flags |= 8192)
            : l && (r.flags |= 8192),
          l
            ? (o & 536870912) !== 0 &&
              (r.flags & 128) === 0 &&
              (Et(r), r.subtreeFlags & 6 && (r.flags |= 8192))
            : Et(r),
          (o = r.updateQueue),
          o !== null && pu(r, o.retryQueue),
          (o = null),
          n !== null &&
            n.memoizedState !== null &&
            n.memoizedState.cachePool !== null &&
            (o = n.memoizedState.cachePool.pool),
          (l = null),
          r.memoizedState !== null &&
            r.memoizedState.cachePool !== null &&
            (l = r.memoizedState.cachePool.pool),
          l !== o && (r.flags |= 2048),
          n !== null && fe(vi),
          null
        );
      case 24:
        return (
          (o = null),
          n !== null && (o = n.memoizedState.cache),
          r.memoizedState.cache !== o && (r.flags |= 2048),
          Kr(Ht),
          Et(r),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(i(156, r.tag));
  }
  function kx(n, r) {
    switch ((Hf(r), r.tag)) {
      case 1:
        return (
          (n = r.flags),
          n & 65536 ? ((r.flags = (n & -65537) | 128), r) : null
        );
      case 3:
        return (
          Kr(Ht),
          gt(),
          (n = r.flags),
          (n & 65536) !== 0 && (n & 128) === 0
            ? ((r.flags = (n & -65537) | 128), r)
            : null
        );
      case 26:
      case 27:
      case 5:
        return (ut(r), null);
      case 13:
        if (
          (Xr(r), (n = r.memoizedState), n !== null && n.dehydrated !== null)
        ) {
          if (r.alternate === null) throw Error(i(340));
          us();
        }
        return (
          (n = r.flags),
          n & 65536 ? ((r.flags = (n & -65537) | 128), r) : null
        );
      case 19:
        return (fe(Zt), null);
      case 4:
        return (gt(), null);
      case 10:
        return (Kr(r.type), null);
      case 22:
      case 23:
        return (
          Xr(r),
          rd(),
          n !== null && fe(vi),
          (n = r.flags),
          n & 65536 ? ((r.flags = (n & -65537) | 128), r) : null
        );
      case 24:
        return (Kr(Ht), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function pv(n, r) {
    switch ((Hf(r), r.tag)) {
      case 3:
        (Kr(Ht), gt());
        break;
      case 26:
      case 27:
      case 5:
        ut(r);
        break;
      case 4:
        gt();
        break;
      case 13:
        Xr(r);
        break;
      case 19:
        fe(Zt);
        break;
      case 10:
        Kr(r.type);
        break;
      case 22:
      case 23:
        (Xr(r), rd(), n !== null && fe(vi));
        break;
      case 24:
        Kr(Ht);
    }
  }
  function Os(n, r) {
    try {
      var o = r.updateQueue,
        l = o !== null ? o.lastEffect : null;
      if (l !== null) {
        var f = l.next;
        o = f;
        do {
          if ((o.tag & n) === n) {
            l = void 0;
            var p = o.create,
              b = o.inst;
            ((l = p()), (b.destroy = l));
          }
          o = o.next;
        } while (o !== f);
      }
    } catch (R) {
      mt(r, r.return, R);
    }
  }
  function Ra(n, r, o) {
    try {
      var l = r.updateQueue,
        f = l !== null ? l.lastEffect : null;
      if (f !== null) {
        var p = f.next;
        l = p;
        do {
          if ((l.tag & n) === n) {
            var b = l.inst,
              R = b.destroy;
            if (R !== void 0) {
              ((b.destroy = void 0), (f = r));
              var j = o,
                K = R;
              try {
                K();
              } catch (re) {
                mt(f, j, re);
              }
            }
          }
          l = l.next;
        } while (l !== p);
      }
    } catch (re) {
      mt(r, r.return, re);
    }
  }
  function yv(n) {
    var r = n.updateQueue;
    if (r !== null) {
      var o = n.stateNode;
      try {
        rg(r, o);
      } catch (l) {
        mt(n, n.return, l);
      }
    }
  }
  function gv(n, r, o) {
    ((o.props = wi(n.type, n.memoizedProps)), (o.state = n.memoizedState));
    try {
      o.componentWillUnmount();
    } catch (l) {
      mt(n, r, l);
    }
  }
  function As(n, r) {
    try {
      var o = n.ref;
      if (o !== null) {
        switch (n.tag) {
          case 26:
          case 27:
          case 5:
            var l = n.stateNode;
            break;
          case 30:
            l = n.stateNode;
            break;
          default:
            l = n.stateNode;
        }
        typeof o == "function" ? (n.refCleanup = o(l)) : (o.current = l);
      }
    } catch (f) {
      mt(n, r, f);
    }
  }
  function Sr(n, r) {
    var o = n.ref,
      l = n.refCleanup;
    if (o !== null)
      if (typeof l == "function")
        try {
          l();
        } catch (f) {
          mt(n, r, f);
        } finally {
          ((n.refCleanup = null),
            (n = n.alternate),
            n != null && (n.refCleanup = null));
        }
      else if (typeof o == "function")
        try {
          o(null);
        } catch (f) {
          mt(n, r, f);
        }
      else o.current = null;
  }
  function vv(n) {
    var r = n.type,
      o = n.memoizedProps,
      l = n.stateNode;
    try {
      e: switch (r) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          o.autoFocus && l.focus();
          break e;
        case "img":
          o.src ? (l.src = o.src) : o.srcSet && (l.srcset = o.srcSet);
      }
    } catch (f) {
      mt(n, n.return, f);
    }
  }
  function Md(n, r, o) {
    try {
      var l = n.stateNode;
      (tR(l, n.type, o, r), (l[Z] = r));
    } catch (f) {
      mt(n, n.return, f);
    }
  }
  function bv(n) {
    return (
      n.tag === 5 ||
      n.tag === 3 ||
      n.tag === 26 ||
      (n.tag === 27 && za(n.type)) ||
      n.tag === 4
    );
  }
  function Nd(n) {
    e: for (;;) {
      for (; n.sibling === null; ) {
        if (n.return === null || bv(n.return)) return null;
        n = n.return;
      }
      for (
        n.sibling.return = n.return, n = n.sibling;
        n.tag !== 5 && n.tag !== 6 && n.tag !== 18;

      ) {
        if (
          (n.tag === 27 && za(n.type)) ||
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
  function zd(n, r, o) {
    var l = n.tag;
    if (l === 5 || l === 6)
      ((n = n.stateNode),
        r
          ? (o.nodeType === 9
              ? o.body
              : o.nodeName === "HTML"
                ? o.ownerDocument.body
                : o
            ).insertBefore(n, r)
          : ((r =
              o.nodeType === 9
                ? o.body
                : o.nodeName === "HTML"
                  ? o.ownerDocument.body
                  : o),
            r.appendChild(n),
            (o = o._reactRootContainer),
            o != null || r.onclick !== null || (r.onclick = Au)));
    else if (
      l !== 4 &&
      (l === 27 && za(n.type) && ((o = n.stateNode), (r = null)),
      (n = n.child),
      n !== null)
    )
      for (zd(n, r, o), n = n.sibling; n !== null; )
        (zd(n, r, o), (n = n.sibling));
  }
  function yu(n, r, o) {
    var l = n.tag;
    if (l === 5 || l === 6)
      ((n = n.stateNode), r ? o.insertBefore(n, r) : o.appendChild(n));
    else if (
      l !== 4 &&
      (l === 27 && za(n.type) && (o = n.stateNode), (n = n.child), n !== null)
    )
      for (yu(n, r, o), n = n.sibling; n !== null; )
        (yu(n, r, o), (n = n.sibling));
  }
  function wv(n) {
    var r = n.stateNode,
      o = n.memoizedProps;
    try {
      for (var l = n.type, f = r.attributes; f.length; )
        r.removeAttributeNode(f[0]);
      (Wt(r, l, o), (r[$] = n), (r[Z] = o));
    } catch (p) {
      mt(n, n.return, p);
    }
  }
  var ea = !1,
    Tt = !1,
    kd = !1,
    Sv = typeof WeakSet == "function" ? WeakSet : Set,
    Gt = null;
  function jx(n, r) {
    if (((n = n.containerInfo), (ah = ku), (n = Ny(n)), Nf(n))) {
      if ("selectionStart" in n)
        var o = { start: n.selectionStart, end: n.selectionEnd };
      else
        e: {
          o = ((o = n.ownerDocument) && o.defaultView) || window;
          var l = o.getSelection && o.getSelection();
          if (l && l.rangeCount !== 0) {
            o = l.anchorNode;
            var f = l.anchorOffset,
              p = l.focusNode;
            l = l.focusOffset;
            try {
              (o.nodeType, p.nodeType);
            } catch {
              o = null;
              break e;
            }
            var b = 0,
              R = -1,
              j = -1,
              K = 0,
              re = 0,
              ue = n,
              X = null;
            t: for (;;) {
              for (
                var J;
                ue !== o || (f !== 0 && ue.nodeType !== 3) || (R = b + f),
                  ue !== p || (l !== 0 && ue.nodeType !== 3) || (j = b + l),
                  ue.nodeType === 3 && (b += ue.nodeValue.length),
                  (J = ue.firstChild) !== null;

              )
                ((X = ue), (ue = J));
              for (;;) {
                if (ue === n) break t;
                if (
                  (X === o && ++K === f && (R = b),
                  X === p && ++re === l && (j = b),
                  (J = ue.nextSibling) !== null)
                )
                  break;
                ((ue = X), (X = ue.parentNode));
              }
              ue = J;
            }
            o = R === -1 || j === -1 ? null : { start: R, end: j };
          } else o = null;
        }
      o = o || { start: 0, end: 0 };
    } else o = null;
    for (
      ih = { focusedElem: n, selectionRange: o }, ku = !1, Gt = r;
      Gt !== null;

    )
      if (
        ((r = Gt), (n = r.child), (r.subtreeFlags & 1024) !== 0 && n !== null)
      )
        ((n.return = r), (Gt = n));
      else
        for (; Gt !== null; ) {
          switch (((r = Gt), (p = r.alternate), (n = r.flags), r.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((n & 1024) !== 0 && p !== null) {
                ((n = void 0),
                  (o = r),
                  (f = p.memoizedProps),
                  (p = p.memoizedState),
                  (l = o.stateNode));
                try {
                  var Ue = wi(o.type, f, o.elementType === o.type);
                  ((n = l.getSnapshotBeforeUpdate(Ue, p)),
                    (l.__reactInternalSnapshotBeforeUpdate = n));
                } catch (je) {
                  mt(o, o.return, je);
                }
              }
              break;
            case 3:
              if ((n & 1024) !== 0) {
                if (
                  ((n = r.stateNode.containerInfo), (o = n.nodeType), o === 9)
                )
                  lh(n);
                else if (o === 1)
                  switch (n.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      lh(n);
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
          if (((n = r.sibling), n !== null)) {
            ((n.return = r.return), (Gt = n));
            break;
          }
          Gt = r.return;
        }
  }
  function _v(n, r, o) {
    var l = o.flags;
    switch (o.tag) {
      case 0:
      case 11:
      case 15:
        (Oa(n, o), l & 4 && Os(5, o));
        break;
      case 1:
        if ((Oa(n, o), l & 4))
          if (((n = o.stateNode), r === null))
            try {
              n.componentDidMount();
            } catch (b) {
              mt(o, o.return, b);
            }
          else {
            var f = wi(o.type, r.memoizedProps);
            r = r.memoizedState;
            try {
              n.componentDidUpdate(f, r, n.__reactInternalSnapshotBeforeUpdate);
            } catch (b) {
              mt(o, o.return, b);
            }
          }
        (l & 64 && yv(o), l & 512 && As(o, o.return));
        break;
      case 3:
        if ((Oa(n, o), l & 64 && ((n = o.updateQueue), n !== null))) {
          if (((r = null), o.child !== null))
            switch (o.child.tag) {
              case 27:
              case 5:
                r = o.child.stateNode;
                break;
              case 1:
                r = o.child.stateNode;
            }
          try {
            rg(n, r);
          } catch (b) {
            mt(o, o.return, b);
          }
        }
        break;
      case 27:
        r === null && l & 4 && wv(o);
      case 26:
      case 5:
        (Oa(n, o), r === null && l & 4 && vv(o), l & 512 && As(o, o.return));
        break;
      case 12:
        Oa(n, o);
        break;
      case 13:
        (Oa(n, o),
          l & 4 && Rv(n, o),
          l & 64 &&
            ((n = o.memoizedState),
            n !== null &&
              ((n = n.dehydrated),
              n !== null && ((o = Zx.bind(null, o)), lR(n, o)))));
        break;
      case 22:
        if (((l = o.memoizedState !== null || ea), !l)) {
          ((r = (r !== null && r.memoizedState !== null) || Tt), (f = ea));
          var p = Tt;
          ((ea = l),
            (Tt = r) && !p ? Aa(n, o, (o.subtreeFlags & 8772) !== 0) : Oa(n, o),
            (ea = f),
            (Tt = p));
        }
        break;
      case 30:
        break;
      default:
        Oa(n, o);
    }
  }
  function Ev(n) {
    var r = n.alternate;
    (r !== null && ((n.alternate = null), Ev(r)),
      (n.child = null),
      (n.deletions = null),
      (n.sibling = null),
      n.tag === 5 && ((r = n.stateNode), r !== null && Ae(r)),
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
    Sn = !1;
  function ta(n, r, o) {
    for (o = o.child; o !== null; ) (xv(n, r, o), (o = o.sibling));
  }
  function xv(n, r, o) {
    if (yt && typeof yt.onCommitFiberUnmount == "function")
      try {
        yt.onCommitFiberUnmount(Vt, o);
      } catch {}
    switch (o.tag) {
      case 26:
        (Tt || Sr(o, r),
          ta(n, r, o),
          o.memoizedState
            ? o.memoizedState.count--
            : o.stateNode && ((o = o.stateNode), o.parentNode.removeChild(o)));
        break;
      case 27:
        Tt || Sr(o, r);
        var l = bt,
          f = Sn;
        (za(o.type) && ((bt = o.stateNode), (Sn = !1)),
          ta(n, r, o),
          Ls(o.stateNode),
          (bt = l),
          (Sn = f));
        break;
      case 5:
        Tt || Sr(o, r);
      case 6:
        if (
          ((l = bt),
          (f = Sn),
          (bt = null),
          ta(n, r, o),
          (bt = l),
          (Sn = f),
          bt !== null)
        )
          if (Sn)
            try {
              (bt.nodeType === 9
                ? bt.body
                : bt.nodeName === "HTML"
                  ? bt.ownerDocument.body
                  : bt
              ).removeChild(o.stateNode);
            } catch (p) {
              mt(o, r, p);
            }
          else
            try {
              bt.removeChild(o.stateNode);
            } catch (p) {
              mt(o, r, p);
            }
        break;
      case 18:
        bt !== null &&
          (Sn
            ? ((n = bt),
              d0(
                n.nodeType === 9
                  ? n.body
                  : n.nodeName === "HTML"
                    ? n.ownerDocument.body
                    : n,
                o.stateNode,
              ),
              Zs(n))
            : d0(bt, o.stateNode));
        break;
      case 4:
        ((l = bt),
          (f = Sn),
          (bt = o.stateNode.containerInfo),
          (Sn = !0),
          ta(n, r, o),
          (bt = l),
          (Sn = f));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (Tt || Ra(2, o, r), Tt || Ra(4, o, r), ta(n, r, o));
        break;
      case 1:
        (Tt ||
          (Sr(o, r),
          (l = o.stateNode),
          typeof l.componentWillUnmount == "function" && gv(o, r, l)),
          ta(n, r, o));
        break;
      case 21:
        ta(n, r, o);
        break;
      case 22:
        ((Tt = (l = Tt) || o.memoizedState !== null), ta(n, r, o), (Tt = l));
        break;
      default:
        ta(n, r, o);
    }
  }
  function Rv(n, r) {
    if (
      r.memoizedState === null &&
      ((n = r.alternate),
      n !== null &&
        ((n = n.memoizedState), n !== null && ((n = n.dehydrated), n !== null)))
    )
      try {
        Zs(n);
      } catch (o) {
        mt(r, r.return, o);
      }
  }
  function Lx(n) {
    switch (n.tag) {
      case 13:
      case 19:
        var r = n.stateNode;
        return (r === null && (r = n.stateNode = new Sv()), r);
      case 22:
        return (
          (n = n.stateNode),
          (r = n._retryCache),
          r === null && (r = n._retryCache = new Sv()),
          r
        );
      default:
        throw Error(i(435, n.tag));
    }
  }
  function jd(n, r) {
    var o = Lx(n);
    r.forEach(function (l) {
      var f = Ix.bind(null, n, l);
      o.has(l) || (o.add(l), l.then(f, f));
    });
  }
  function Nn(n, r) {
    var o = r.deletions;
    if (o !== null)
      for (var l = 0; l < o.length; l++) {
        var f = o[l],
          p = n,
          b = r,
          R = b;
        e: for (; R !== null; ) {
          switch (R.tag) {
            case 27:
              if (za(R.type)) {
                ((bt = R.stateNode), (Sn = !1));
                break e;
              }
              break;
            case 5:
              ((bt = R.stateNode), (Sn = !1));
              break e;
            case 3:
            case 4:
              ((bt = R.stateNode.containerInfo), (Sn = !0));
              break e;
          }
          R = R.return;
        }
        if (bt === null) throw Error(i(160));
        (xv(p, b, f),
          (bt = null),
          (Sn = !1),
          (p = f.alternate),
          p !== null && (p.return = null),
          (f.return = null));
      }
    if (r.subtreeFlags & 13878)
      for (r = r.child; r !== null; ) (Ov(r, n), (r = r.sibling));
  }
  var cr = null;
  function Ov(n, r) {
    var o = n.alternate,
      l = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (Nn(r, n),
          zn(n),
          l & 4 && (Ra(3, n, n.return), Os(3, n), Ra(5, n, n.return)));
        break;
      case 1:
        (Nn(r, n),
          zn(n),
          l & 512 && (Tt || o === null || Sr(o, o.return)),
          l & 64 &&
            ea &&
            ((n = n.updateQueue),
            n !== null &&
              ((l = n.callbacks),
              l !== null &&
                ((o = n.shared.hiddenCallbacks),
                (n.shared.hiddenCallbacks = o === null ? l : o.concat(l))))));
        break;
      case 26:
        var f = cr;
        if (
          (Nn(r, n),
          zn(n),
          l & 512 && (Tt || o === null || Sr(o, o.return)),
          l & 4)
        ) {
          var p = o !== null ? o.memoizedState : null;
          if (((l = n.memoizedState), o === null))
            if (l === null)
              if (n.stateNode === null) {
                e: {
                  ((l = n.type),
                    (o = n.memoizedProps),
                    (f = f.ownerDocument || f));
                  t: switch (l) {
                    case "title":
                      ((p = f.getElementsByTagName("title")[0]),
                        (!p ||
                          p[_e] ||
                          p[$] ||
                          p.namespaceURI === "http://www.w3.org/2000/svg" ||
                          p.hasAttribute("itemprop")) &&
                          ((p = f.createElement(l)),
                          f.head.insertBefore(
                            p,
                            f.querySelector("head > title"),
                          )),
                        Wt(p, l, o),
                        (p[$] = n),
                        Pe(p),
                        (l = p));
                      break e;
                    case "link":
                      var b = w0("link", "href", f).get(l + (o.href || ""));
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
                      ((p = f.createElement(l)),
                        Wt(p, l, o),
                        f.head.appendChild(p));
                      break;
                    case "meta":
                      if (
                        (b = w0("meta", "content", f).get(
                          l + (o.content || ""),
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
                      ((p = f.createElement(l)),
                        Wt(p, l, o),
                        f.head.appendChild(p));
                      break;
                    default:
                      throw Error(i(468, l));
                  }
                  ((p[$] = n), Pe(p), (l = p));
                }
                n.stateNode = l;
              } else S0(f, n.type, n.stateNode);
            else n.stateNode = b0(f, l, n.memoizedProps);
          else
            p !== l
              ? (p === null
                  ? o.stateNode !== null &&
                    ((o = o.stateNode), o.parentNode.removeChild(o))
                  : p.count--,
                l === null
                  ? S0(f, n.type, n.stateNode)
                  : b0(f, l, n.memoizedProps))
              : l === null &&
                n.stateNode !== null &&
                Md(n, n.memoizedProps, o.memoizedProps);
        }
        break;
      case 27:
        (Nn(r, n),
          zn(n),
          l & 512 && (Tt || o === null || Sr(o, o.return)),
          o !== null && l & 4 && Md(n, n.memoizedProps, o.memoizedProps));
        break;
      case 5:
        if (
          (Nn(r, n),
          zn(n),
          l & 512 && (Tt || o === null || Sr(o, o.return)),
          n.flags & 32)
        ) {
          f = n.stateNode;
          try {
            Zi(f, "");
          } catch (J) {
            mt(n, n.return, J);
          }
        }
        (l & 4 &&
          n.stateNode != null &&
          ((f = n.memoizedProps), Md(n, f, o !== null ? o.memoizedProps : f)),
          l & 1024 && (kd = !0));
        break;
      case 6:
        if ((Nn(r, n), zn(n), l & 4)) {
          if (n.stateNode === null) throw Error(i(162));
          ((l = n.memoizedProps), (o = n.stateNode));
          try {
            o.nodeValue = l;
          } catch (J) {
            mt(n, n.return, J);
          }
        }
        break;
      case 3:
        if (
          ((Mu = null),
          (f = cr),
          (cr = Tu(r.containerInfo)),
          Nn(r, n),
          (cr = f),
          zn(n),
          l & 4 && o !== null && o.memoizedState.isDehydrated)
        )
          try {
            Zs(r.containerInfo);
          } catch (J) {
            mt(n, n.return, J);
          }
        kd && ((kd = !1), Av(n));
        break;
      case 4:
        ((l = cr),
          (cr = Tu(n.stateNode.containerInfo)),
          Nn(r, n),
          zn(n),
          (cr = l));
        break;
      case 12:
        (Nn(r, n), zn(n));
        break;
      case 13:
        (Nn(r, n),
          zn(n),
          n.child.flags & 8192 &&
            (n.memoizedState !== null) !=
              (o !== null && o.memoizedState !== null) &&
            (Vd = Bt()),
          l & 4 &&
            ((l = n.updateQueue),
            l !== null && ((n.updateQueue = null), jd(n, l))));
        break;
      case 22:
        f = n.memoizedState !== null;
        var j = o !== null && o.memoizedState !== null,
          K = ea,
          re = Tt;
        if (
          ((ea = K || f),
          (Tt = re || j),
          Nn(r, n),
          (Tt = re),
          (ea = K),
          zn(n),
          l & 8192)
        )
          e: for (
            r = n.stateNode,
              r._visibility = f ? r._visibility & -2 : r._visibility | 1,
              f && (o === null || j || ea || Tt || Si(n)),
              o = null,
              r = n;
            ;

          ) {
            if (r.tag === 5 || r.tag === 26) {
              if (o === null) {
                j = o = r;
                try {
                  if (((p = j.stateNode), f))
                    ((b = p.style),
                      typeof b.setProperty == "function"
                        ? b.setProperty("display", "none", "important")
                        : (b.display = "none"));
                  else {
                    R = j.stateNode;
                    var ue = j.memoizedProps.style,
                      X =
                        ue != null && ue.hasOwnProperty("display")
                          ? ue.display
                          : null;
                    R.style.display =
                      X == null || typeof X == "boolean" ? "" : ("" + X).trim();
                  }
                } catch (J) {
                  mt(j, j.return, J);
                }
              }
            } else if (r.tag === 6) {
              if (o === null) {
                j = r;
                try {
                  j.stateNode.nodeValue = f ? "" : j.memoizedProps;
                } catch (J) {
                  mt(j, j.return, J);
                }
              }
            } else if (
              ((r.tag !== 22 && r.tag !== 23) ||
                r.memoizedState === null ||
                r === n) &&
              r.child !== null
            ) {
              ((r.child.return = r), (r = r.child));
              continue;
            }
            if (r === n) break e;
            for (; r.sibling === null; ) {
              if (r.return === null || r.return === n) break e;
              (o === r && (o = null), (r = r.return));
            }
            (o === r && (o = null),
              (r.sibling.return = r.return),
              (r = r.sibling));
          }
        l & 4 &&
          ((l = n.updateQueue),
          l !== null &&
            ((o = l.retryQueue),
            o !== null && ((l.retryQueue = null), jd(n, o))));
        break;
      case 19:
        (Nn(r, n),
          zn(n),
          l & 4 &&
            ((l = n.updateQueue),
            l !== null && ((n.updateQueue = null), jd(n, l))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (Nn(r, n), zn(n));
    }
  }
  function zn(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        for (var o, l = n.return; l !== null; ) {
          if (bv(l)) {
            o = l;
            break;
          }
          l = l.return;
        }
        if (o == null) throw Error(i(160));
        switch (o.tag) {
          case 27:
            var f = o.stateNode,
              p = Nd(n);
            yu(n, p, f);
            break;
          case 5:
            var b = o.stateNode;
            o.flags & 32 && (Zi(b, ""), (o.flags &= -33));
            var R = Nd(n);
            yu(n, R, b);
            break;
          case 3:
          case 4:
            var j = o.stateNode.containerInfo,
              K = Nd(n);
            zd(n, K, j);
            break;
          default:
            throw Error(i(161));
        }
      } catch (re) {
        mt(n, n.return, re);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function Av(n) {
    if (n.subtreeFlags & 1024)
      for (n = n.child; n !== null; ) {
        var r = n;
        (Av(r),
          r.tag === 5 && r.flags & 1024 && r.stateNode.reset(),
          (n = n.sibling));
      }
  }
  function Oa(n, r) {
    if (r.subtreeFlags & 8772)
      for (r = r.child; r !== null; ) (_v(n, r.alternate, r), (r = r.sibling));
  }
  function Si(n) {
    for (n = n.child; n !== null; ) {
      var r = n;
      switch (r.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (Ra(4, r, r.return), Si(r));
          break;
        case 1:
          Sr(r, r.return);
          var o = r.stateNode;
          (typeof o.componentWillUnmount == "function" && gv(r, r.return, o),
            Si(r));
          break;
        case 27:
          Ls(r.stateNode);
        case 26:
        case 5:
          (Sr(r, r.return), Si(r));
          break;
        case 22:
          r.memoizedState === null && Si(r);
          break;
        case 30:
          Si(r);
          break;
        default:
          Si(r);
      }
      n = n.sibling;
    }
  }
  function Aa(n, r, o) {
    for (o = o && (r.subtreeFlags & 8772) !== 0, r = r.child; r !== null; ) {
      var l = r.alternate,
        f = n,
        p = r,
        b = p.flags;
      switch (p.tag) {
        case 0:
        case 11:
        case 15:
          (Aa(f, p, o), Os(4, p));
          break;
        case 1:
          if (
            (Aa(f, p, o),
            (l = p),
            (f = l.stateNode),
            typeof f.componentDidMount == "function")
          )
            try {
              f.componentDidMount();
            } catch (K) {
              mt(l, l.return, K);
            }
          if (((l = p), (f = l.updateQueue), f !== null)) {
            var R = l.stateNode;
            try {
              var j = f.shared.hiddenCallbacks;
              if (j !== null)
                for (f.shared.hiddenCallbacks = null, f = 0; f < j.length; f++)
                  ng(j[f], R);
            } catch (K) {
              mt(l, l.return, K);
            }
          }
          (o && b & 64 && yv(p), As(p, p.return));
          break;
        case 27:
          wv(p);
        case 26:
        case 5:
          (Aa(f, p, o), o && l === null && b & 4 && vv(p), As(p, p.return));
          break;
        case 12:
          Aa(f, p, o);
          break;
        case 13:
          (Aa(f, p, o), o && b & 4 && Rv(f, p));
          break;
        case 22:
          (p.memoizedState === null && Aa(f, p, o), As(p, p.return));
          break;
        case 30:
          break;
        default:
          Aa(f, p, o);
      }
      r = r.sibling;
    }
  }
  function Ld(n, r) {
    var o = null;
    (n !== null &&
      n.memoizedState !== null &&
      n.memoizedState.cachePool !== null &&
      (o = n.memoizedState.cachePool.pool),
      (n = null),
      r.memoizedState !== null &&
        r.memoizedState.cachePool !== null &&
        (n = r.memoizedState.cachePool.pool),
      n !== o && (n != null && n.refCount++, o != null && ds(o)));
  }
  function Ud(n, r) {
    ((n = null),
      r.alternate !== null && (n = r.alternate.memoizedState.cache),
      (r = r.memoizedState.cache),
      r !== n && (r.refCount++, n != null && ds(n)));
  }
  function _r(n, r, o, l) {
    if (r.subtreeFlags & 10256)
      for (r = r.child; r !== null; ) (Cv(n, r, o, l), (r = r.sibling));
  }
  function Cv(n, r, o, l) {
    var f = r.flags;
    switch (r.tag) {
      case 0:
      case 11:
      case 15:
        (_r(n, r, o, l), f & 2048 && Os(9, r));
        break;
      case 1:
        _r(n, r, o, l);
        break;
      case 3:
        (_r(n, r, o, l),
          f & 2048 &&
            ((n = null),
            r.alternate !== null && (n = r.alternate.memoizedState.cache),
            (r = r.memoizedState.cache),
            r !== n && (r.refCount++, n != null && ds(n))));
        break;
      case 12:
        if (f & 2048) {
          (_r(n, r, o, l), (n = r.stateNode));
          try {
            var p = r.memoizedProps,
              b = p.id,
              R = p.onPostCommit;
            typeof R == "function" &&
              R(
                b,
                r.alternate === null ? "mount" : "update",
                n.passiveEffectDuration,
                -0,
              );
          } catch (j) {
            mt(r, r.return, j);
          }
        } else _r(n, r, o, l);
        break;
      case 13:
        _r(n, r, o, l);
        break;
      case 23:
        break;
      case 22:
        ((p = r.stateNode),
          (b = r.alternate),
          r.memoizedState !== null
            ? p._visibility & 2
              ? _r(n, r, o, l)
              : Cs(n, r)
            : p._visibility & 2
              ? _r(n, r, o, l)
              : ((p._visibility |= 2),
                uo(n, r, o, l, (r.subtreeFlags & 10256) !== 0)),
          f & 2048 && Ld(b, r));
        break;
      case 24:
        (_r(n, r, o, l), f & 2048 && Ud(r.alternate, r));
        break;
      default:
        _r(n, r, o, l);
    }
  }
  function uo(n, r, o, l, f) {
    for (f = f && (r.subtreeFlags & 10256) !== 0, r = r.child; r !== null; ) {
      var p = n,
        b = r,
        R = o,
        j = l,
        K = b.flags;
      switch (b.tag) {
        case 0:
        case 11:
        case 15:
          (uo(p, b, R, j, f), Os(8, b));
          break;
        case 23:
          break;
        case 22:
          var re = b.stateNode;
          (b.memoizedState !== null
            ? re._visibility & 2
              ? uo(p, b, R, j, f)
              : Cs(p, b)
            : ((re._visibility |= 2), uo(p, b, R, j, f)),
            f && K & 2048 && Ld(b.alternate, b));
          break;
        case 24:
          (uo(p, b, R, j, f), f && K & 2048 && Ud(b.alternate, b));
          break;
        default:
          uo(p, b, R, j, f);
      }
      r = r.sibling;
    }
  }
  function Cs(n, r) {
    if (r.subtreeFlags & 10256)
      for (r = r.child; r !== null; ) {
        var o = n,
          l = r,
          f = l.flags;
        switch (l.tag) {
          case 22:
            (Cs(o, l), f & 2048 && Ld(l.alternate, l));
            break;
          case 24:
            (Cs(o, l), f & 2048 && Ud(l.alternate, l));
            break;
          default:
            Cs(o, l);
        }
        r = r.sibling;
      }
  }
  var Ts = 8192;
  function co(n) {
    if (n.subtreeFlags & Ts)
      for (n = n.child; n !== null; ) (Tv(n), (n = n.sibling));
  }
  function Tv(n) {
    switch (n.tag) {
      case 26:
        (co(n),
          n.flags & Ts &&
            n.memoizedState !== null &&
            SR(cr, n.memoizedState, n.memoizedProps));
        break;
      case 5:
        co(n);
        break;
      case 3:
      case 4:
        var r = cr;
        ((cr = Tu(n.stateNode.containerInfo)), co(n), (cr = r));
        break;
      case 22:
        n.memoizedState === null &&
          ((r = n.alternate),
          r !== null && r.memoizedState !== null
            ? ((r = Ts), (Ts = 16777216), co(n), (Ts = r))
            : co(n));
        break;
      default:
        co(n);
    }
  }
  function Dv(n) {
    var r = n.alternate;
    if (r !== null && ((n = r.child), n !== null)) {
      r.child = null;
      do ((r = n.sibling), (n.sibling = null), (n = r));
      while (n !== null);
    }
  }
  function Ds(n) {
    var r = n.deletions;
    if ((n.flags & 16) !== 0) {
      if (r !== null)
        for (var o = 0; o < r.length; o++) {
          var l = r[o];
          ((Gt = l), Nv(l, n));
        }
      Dv(n);
    }
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; ) (Mv(n), (n = n.sibling));
  }
  function Mv(n) {
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        (Ds(n), n.flags & 2048 && Ra(9, n, n.return));
        break;
      case 3:
        Ds(n);
        break;
      case 12:
        Ds(n);
        break;
      case 22:
        var r = n.stateNode;
        n.memoizedState !== null &&
        r._visibility & 2 &&
        (n.return === null || n.return.tag !== 13)
          ? ((r._visibility &= -3), gu(n))
          : Ds(n);
        break;
      default:
        Ds(n);
    }
  }
  function gu(n) {
    var r = n.deletions;
    if ((n.flags & 16) !== 0) {
      if (r !== null)
        for (var o = 0; o < r.length; o++) {
          var l = r[o];
          ((Gt = l), Nv(l, n));
        }
      Dv(n);
    }
    for (n = n.child; n !== null; ) {
      switch (((r = n), r.tag)) {
        case 0:
        case 11:
        case 15:
          (Ra(8, r, r.return), gu(r));
          break;
        case 22:
          ((o = r.stateNode),
            o._visibility & 2 && ((o._visibility &= -3), gu(r)));
          break;
        default:
          gu(r);
      }
      n = n.sibling;
    }
  }
  function Nv(n, r) {
    for (; Gt !== null; ) {
      var o = Gt;
      switch (o.tag) {
        case 0:
        case 11:
        case 15:
          Ra(8, o, r);
          break;
        case 23:
        case 22:
          if (o.memoizedState !== null && o.memoizedState.cachePool !== null) {
            var l = o.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          ds(o.memoizedState.cache);
      }
      if (((l = o.child), l !== null)) ((l.return = o), (Gt = l));
      else
        e: for (o = n; Gt !== null; ) {
          l = Gt;
          var f = l.sibling,
            p = l.return;
          if ((Ev(l), l === o)) {
            Gt = null;
            break e;
          }
          if (f !== null) {
            ((f.return = p), (Gt = f));
            break e;
          }
          Gt = p;
        }
    }
  }
  var Ux = {
      getCacheForType: function (n) {
        var r = sn(Ht),
          o = r.data.get(n);
        return (o === void 0 && ((o = n()), r.data.set(n, o)), o);
      },
    },
    Px = typeof WeakMap == "function" ? WeakMap : Map,
    ot = 0,
    pt = null,
    Ke = null,
    We = 0,
    st = 0,
    kn = null,
    Ca = !1,
    fo = !1,
    Pd = !1,
    na = 0,
    Ot = 0,
    Ta = 0,
    _i = 0,
    Fd = 0,
    Jn = 0,
    ho = 0,
    Ms = null,
    _n = null,
    Bd = !1,
    Vd = 0,
    vu = 1 / 0,
    bu = null,
    Da = null,
    Jt = 0,
    Ma = null,
    mo = null,
    po = 0,
    $d = 0,
    Hd = null,
    zv = null,
    Ns = 0,
    Zd = null;
  function jn() {
    if ((ot & 2) !== 0 && We !== 0) return We & -We;
    if (U.T !== null) {
      var n = to;
      return n !== 0 ? n : Xd();
    }
    return O();
  }
  function kv() {
    Jn === 0 && (Jn = (We & 536870912) === 0 || nt ? ha() : 536870912);
    var n = Xn.current;
    return (n !== null && (n.flags |= 32), Jn);
  }
  function Ln(n, r, o) {
    (((n === pt && (st === 2 || st === 9)) || n.cancelPendingCommit !== null) &&
      (yo(n, 0), Na(n, We, Jn, !1)),
      ma(n, o),
      ((ot & 2) === 0 || n !== pt) &&
        (n === pt &&
          ((ot & 2) === 0 && (_i |= o), Ot === 4 && Na(n, We, Jn, !1)),
        Er(n)));
  }
  function jv(n, r, o) {
    if ((ot & 6) !== 0) throw Error(i(327));
    var l = (!o && (r & 124) === 0 && (r & n.expiredLanes) === 0) || Cn(n, r),
      f = l ? Vx(n, r) : Gd(n, r, !0),
      p = l;
    do {
      if (f === 0) {
        fo && !l && Na(n, r, 0, !1);
        break;
      } else {
        if (((o = n.current.alternate), p && !Fx(o))) {
          ((f = Gd(n, r, !1)), (p = !1));
          continue;
        }
        if (f === 2) {
          if (((p = r), n.errorRecoveryDisabledLanes & p)) var b = 0;
          else
            ((b = n.pendingLanes & -536870913),
              (b = b !== 0 ? b : b & 536870912 ? 536870912 : 0));
          if (b !== 0) {
            r = b;
            e: {
              var R = n;
              f = Ms;
              var j = R.current.memoizedState.isDehydrated;
              if ((j && (yo(R, b).flags |= 256), (b = Gd(R, b, !1)), b !== 2)) {
                if (Pd && !j) {
                  ((R.errorRecoveryDisabledLanes |= p), (_i |= p), (f = 4));
                  break e;
                }
                ((p = _n),
                  (_n = f),
                  p !== null &&
                    (_n === null ? (_n = p) : _n.push.apply(_n, p)));
              }
              f = b;
            }
            if (((p = !1), f !== 2)) continue;
          }
        }
        if (f === 1) {
          (yo(n, 0), Na(n, r, 0, !0));
          break;
        }
        e: {
          switch (((l = n), (p = f), p)) {
            case 0:
            case 1:
              throw Error(i(345));
            case 4:
              if ((r & 4194048) !== r) break;
            case 6:
              Na(l, r, Jn, !Ca);
              break e;
            case 2:
              _n = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(i(329));
          }
          if ((r & 62914560) === r && ((f = Vd + 300 - Bt()), 10 < f)) {
            if ((Na(l, r, Jn, !Ca), Fr(l, 0, !0) !== 0)) break e;
            l.timeoutHandle = c0(
              Lv.bind(null, l, o, _n, bu, Bd, r, Jn, _i, ho, Ca, p, 2, -0, 0),
              f,
            );
            break e;
          }
          Lv(l, o, _n, bu, Bd, r, Jn, _i, ho, Ca, p, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    Er(n);
  }
  function Lv(n, r, o, l, f, p, b, R, j, K, re, ue, X, J) {
    if (
      ((n.timeoutHandle = -1),
      (ue = r.subtreeFlags),
      (ue & 8192 || (ue & 16785408) === 16785408) &&
        ((Fs = { stylesheets: null, count: 0, unsuspend: wR }),
        Tv(r),
        (ue = _R()),
        ue !== null))
    ) {
      ((n.cancelPendingCommit = ue(
        Hv.bind(null, n, r, p, o, l, f, b, R, j, re, 1, X, J),
      )),
        Na(n, p, b, !K));
      return;
    }
    Hv(n, r, p, o, l, f, b, R, j);
  }
  function Fx(n) {
    for (var r = n; ; ) {
      var o = r.tag;
      if (
        (o === 0 || o === 11 || o === 15) &&
        r.flags & 16384 &&
        ((o = r.updateQueue), o !== null && ((o = o.stores), o !== null))
      )
        for (var l = 0; l < o.length; l++) {
          var f = o[l],
            p = f.getSnapshot;
          f = f.value;
          try {
            if (!Dn(p(), f)) return !1;
          } catch {
            return !1;
          }
        }
      if (((o = r.child), r.subtreeFlags & 16384 && o !== null))
        ((o.return = r), (r = o));
      else {
        if (r === n) break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n) return !0;
          r = r.return;
        }
        ((r.sibling.return = r.return), (r = r.sibling));
      }
    }
    return !0;
  }
  function Na(n, r, o, l) {
    ((r &= ~Fd),
      (r &= ~_i),
      (n.suspendedLanes |= r),
      (n.pingedLanes &= ~r),
      l && (n.warmLanes |= r),
      (l = n.expirationTimes));
    for (var f = r; 0 < f; ) {
      var p = 31 - $t(f),
        b = 1 << p;
      ((l[p] = -1), (f &= ~b));
    }
    o !== 0 && A(n, o, r);
  }
  function wu() {
    return (ot & 6) === 0 ? (zs(0), !1) : !0;
  }
  function Id() {
    if (Ke !== null) {
      if (st === 0) var n = Ke.return;
      else ((n = Ke), (Yr = yi = null), ld(n), (so = null), (Es = 0), (n = Ke));
      for (; n !== null; ) (pv(n.alternate, n), (n = n.return));
      Ke = null;
    }
  }
  function yo(n, r) {
    var o = n.timeoutHandle;
    (o !== -1 && ((n.timeoutHandle = -1), rR(o)),
      (o = n.cancelPendingCommit),
      o !== null && ((n.cancelPendingCommit = null), o()),
      Id(),
      (pt = n),
      (Ke = o = Ir(n.current, null)),
      (We = r),
      (st = 0),
      (kn = null),
      (Ca = !1),
      (fo = Cn(n, r)),
      (Pd = !1),
      (ho = Jn = Fd = _i = Ta = Ot = 0),
      (_n = Ms = null),
      (Bd = !1),
      (r & 8) !== 0 && (r |= r & 32));
    var l = n.entangledLanes;
    if (l !== 0)
      for (n = n.entanglements, l &= r; 0 < l; ) {
        var f = 31 - $t(l),
          p = 1 << f;
        ((r |= n[f]), (l &= ~p));
      }
    return ((na = r), $l(), o);
  }
  function Uv(n, r) {
    ((He = null),
      (U.H = su),
      r === ms || r === Xl
        ? ((r = eg()), (st = 3))
        : r === Xy
          ? ((r = eg()), (st = 4))
          : (st =
              r === tv
                ? 8
                : r !== null &&
                    typeof r == "object" &&
                    typeof r.then == "function"
                  ? 6
                  : 1),
      (kn = r),
      Ke === null && ((Ot = 1), du(n, Gn(r, n.current))));
  }
  function Pv() {
    var n = U.H;
    return ((U.H = su), n === null ? su : n);
  }
  function Fv() {
    var n = U.A;
    return ((U.A = Ux), n);
  }
  function qd() {
    ((Ot = 4),
      Ca || ((We & 4194048) !== We && Xn.current !== null) || (fo = !0),
      ((Ta & 134217727) === 0 && (_i & 134217727) === 0) ||
        pt === null ||
        Na(pt, We, Jn, !1));
  }
  function Gd(n, r, o) {
    var l = ot;
    ot |= 2;
    var f = Pv(),
      p = Fv();
    ((pt !== n || We !== r) && ((bu = null), yo(n, r)), (r = !1));
    var b = Ot;
    e: do
      try {
        if (st !== 0 && Ke !== null) {
          var R = Ke,
            j = kn;
          switch (st) {
            case 8:
              (Id(), (b = 6));
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Xn.current === null && (r = !0);
              var K = st;
              if (((st = 0), (kn = null), go(n, R, j, K), o && fo)) {
                b = 0;
                break e;
              }
              break;
            default:
              ((K = st), (st = 0), (kn = null), go(n, R, j, K));
          }
        }
        (Bx(), (b = Ot));
        break;
      } catch (re) {
        Uv(n, re);
      }
    while (!0);
    return (
      r && n.shellSuspendCounter++,
      (Yr = yi = null),
      (ot = l),
      (U.H = f),
      (U.A = p),
      Ke === null && ((pt = null), (We = 0), $l()),
      b
    );
  }
  function Bx() {
    for (; Ke !== null; ) Bv(Ke);
  }
  function Vx(n, r) {
    var o = ot;
    ot |= 2;
    var l = Pv(),
      f = Fv();
    pt !== n || We !== r
      ? ((bu = null), (vu = Bt() + 500), yo(n, r))
      : (fo = Cn(n, r));
    e: do
      try {
        if (st !== 0 && Ke !== null) {
          r = Ke;
          var p = kn;
          t: switch (st) {
            case 1:
              ((st = 0), (kn = null), go(n, r, p, 1));
              break;
            case 2:
            case 9:
              if (Jy(p)) {
                ((st = 0), (kn = null), Vv(r));
                break;
              }
              ((r = function () {
                ((st !== 2 && st !== 9) || pt !== n || (st = 7), Er(n));
              }),
                p.then(r, r));
              break e;
            case 3:
              st = 7;
              break e;
            case 4:
              st = 5;
              break e;
            case 7:
              Jy(p)
                ? ((st = 0), (kn = null), Vv(r))
                : ((st = 0), (kn = null), go(n, r, p, 7));
              break;
            case 5:
              var b = null;
              switch (Ke.tag) {
                case 26:
                  b = Ke.memoizedState;
                case 5:
                case 27:
                  var R = Ke;
                  if (!b || _0(b)) {
                    ((st = 0), (kn = null));
                    var j = R.sibling;
                    if (j !== null) Ke = j;
                    else {
                      var K = R.return;
                      K !== null ? ((Ke = K), Su(K)) : (Ke = null);
                    }
                    break t;
                  }
              }
              ((st = 0), (kn = null), go(n, r, p, 5));
              break;
            case 6:
              ((st = 0), (kn = null), go(n, r, p, 6));
              break;
            case 8:
              (Id(), (Ot = 6));
              break e;
            default:
              throw Error(i(462));
          }
        }
        $x();
        break;
      } catch (re) {
        Uv(n, re);
      }
    while (!0);
    return (
      (Yr = yi = null),
      (U.H = l),
      (U.A = f),
      (ot = o),
      Ke !== null ? 0 : ((pt = null), (We = 0), $l(), Ot)
    );
  }
  function $x() {
    for (; Ke !== null && !Fi(); ) Bv(Ke);
  }
  function Bv(n) {
    var r = hv(n.alternate, n, na);
    ((n.memoizedProps = n.pendingProps), r === null ? Su(n) : (Ke = r));
  }
  function Vv(n) {
    var r = n,
      o = r.alternate;
    switch (r.tag) {
      case 15:
      case 0:
        r = sv(o, r, r.pendingProps, r.type, void 0, We);
        break;
      case 11:
        r = sv(o, r, r.pendingProps, r.type.render, r.ref, We);
        break;
      case 5:
        ld(r);
      default:
        (pv(o, r), (r = Ke = $y(r, na)), (r = hv(o, r, na)));
    }
    ((n.memoizedProps = n.pendingProps), r === null ? Su(n) : (Ke = r));
  }
  function go(n, r, o, l) {
    ((Yr = yi = null), ld(r), (so = null), (Es = 0));
    var f = r.return;
    try {
      if (Mx(n, f, r, o, We)) {
        ((Ot = 1), du(n, Gn(o, n.current)), (Ke = null));
        return;
      }
    } catch (p) {
      if (f !== null) throw ((Ke = f), p);
      ((Ot = 1), du(n, Gn(o, n.current)), (Ke = null));
      return;
    }
    r.flags & 32768
      ? (nt || l === 1
          ? (n = !0)
          : fo || (We & 536870912) !== 0
            ? (n = !1)
            : ((Ca = n = !0),
              (l === 2 || l === 9 || l === 3 || l === 6) &&
                ((l = Xn.current),
                l !== null && l.tag === 13 && (l.flags |= 16384))),
        $v(r, n))
      : Su(r);
  }
  function Su(n) {
    var r = n;
    do {
      if ((r.flags & 32768) !== 0) {
        $v(r, Ca);
        return;
      }
      n = r.return;
      var o = zx(r.alternate, r, na);
      if (o !== null) {
        Ke = o;
        return;
      }
      if (((r = r.sibling), r !== null)) {
        Ke = r;
        return;
      }
      Ke = r = n;
    } while (r !== null);
    Ot === 0 && (Ot = 5);
  }
  function $v(n, r) {
    do {
      var o = kx(n.alternate, n);
      if (o !== null) {
        ((o.flags &= 32767), (Ke = o));
        return;
      }
      if (
        ((o = n.return),
        o !== null &&
          ((o.flags |= 32768), (o.subtreeFlags = 0), (o.deletions = null)),
        !r && ((n = n.sibling), n !== null))
      ) {
        Ke = n;
        return;
      }
      Ke = n = o;
    } while (n !== null);
    ((Ot = 6), (Ke = null));
  }
  function Hv(n, r, o, l, f, p, b, R, j) {
    n.cancelPendingCommit = null;
    do _u();
    while (Jt !== 0);
    if ((ot & 6) !== 0) throw Error(i(327));
    if (r !== null) {
      if (r === n.current) throw Error(i(177));
      if (
        ((p = r.lanes | r.childLanes),
        (p |= Uf),
        si(n, o, p, b, R, j),
        n === pt && ((Ke = pt = null), (We = 0)),
        (mo = r),
        (Ma = n),
        (po = o),
        ($d = p),
        (Hd = f),
        (zv = l),
        (r.subtreeFlags & 10256) !== 0 || (r.flags & 10256) !== 0
          ? ((n.callbackNode = null),
            (n.callbackPriority = 0),
            qx($n, function () {
              return (Yv(), null);
            }))
          : ((n.callbackNode = null), (n.callbackPriority = 0)),
        (l = (r.flags & 13878) !== 0),
        (r.subtreeFlags & 13878) !== 0 || l)
      ) {
        ((l = U.T), (U.T = null), (f = ne.p), (ne.p = 2), (b = ot), (ot |= 4));
        try {
          jx(n, r, o);
        } finally {
          ((ot = b), (ne.p = f), (U.T = l));
        }
      }
      ((Jt = 1), Zv(), Iv(), qv());
    }
  }
  function Zv() {
    if (Jt === 1) {
      Jt = 0;
      var n = Ma,
        r = mo,
        o = (r.flags & 13878) !== 0;
      if ((r.subtreeFlags & 13878) !== 0 || o) {
        ((o = U.T), (U.T = null));
        var l = ne.p;
        ne.p = 2;
        var f = ot;
        ot |= 4;
        try {
          Ov(r, n);
          var p = ih,
            b = Ny(n.containerInfo),
            R = p.focusedElem,
            j = p.selectionRange;
          if (
            b !== R &&
            R &&
            R.ownerDocument &&
            My(R.ownerDocument.documentElement, R)
          ) {
            if (j !== null && Nf(R)) {
              var K = j.start,
                re = j.end;
              if ((re === void 0 && (re = K), "selectionStart" in R))
                ((R.selectionStart = K),
                  (R.selectionEnd = Math.min(re, R.value.length)));
              else {
                var ue = R.ownerDocument || document,
                  X = (ue && ue.defaultView) || window;
                if (X.getSelection) {
                  var J = X.getSelection(),
                    Ue = R.textContent.length,
                    je = Math.min(j.start, Ue),
                    ht = j.end === void 0 ? je : Math.min(j.end, Ue);
                  !J.extend && je > ht && ((b = ht), (ht = je), (je = b));
                  var I = Dy(R, je),
                    V = Dy(R, ht);
                  if (
                    I &&
                    V &&
                    (J.rangeCount !== 1 ||
                      J.anchorNode !== I.node ||
                      J.anchorOffset !== I.offset ||
                      J.focusNode !== V.node ||
                      J.focusOffset !== V.offset)
                  ) {
                    var G = ue.createRange();
                    (G.setStart(I.node, I.offset),
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
          ((ku = !!ah), (ih = ah = null));
        } finally {
          ((ot = f), (ne.p = l), (U.T = o));
        }
      }
      ((n.current = r), (Jt = 2));
    }
  }
  function Iv() {
    if (Jt === 2) {
      Jt = 0;
      var n = Ma,
        r = mo,
        o = (r.flags & 8772) !== 0;
      if ((r.subtreeFlags & 8772) !== 0 || o) {
        ((o = U.T), (U.T = null));
        var l = ne.p;
        ne.p = 2;
        var f = ot;
        ot |= 4;
        try {
          _v(n, r.alternate, r);
        } finally {
          ((ot = f), (ne.p = l), (U.T = o));
        }
      }
      Jt = 3;
    }
  }
  function qv() {
    if (Jt === 4 || Jt === 3) {
      ((Jt = 0), Bi());
      var n = Ma,
        r = mo,
        o = po,
        l = zv;
      (r.subtreeFlags & 10256) !== 0 || (r.flags & 10256) !== 0
        ? (Jt = 5)
        : ((Jt = 0), (mo = Ma = null), Gv(n, n.pendingLanes));
      var f = n.pendingLanes;
      if (
        (f === 0 && (Da = null),
        te(o),
        (r = r.stateNode),
        yt && typeof yt.onCommitFiberRoot == "function")
      )
        try {
          yt.onCommitFiberRoot(Vt, r, void 0, (r.current.flags & 128) === 128);
        } catch {}
      if (l !== null) {
        ((r = U.T), (f = ne.p), (ne.p = 2), (U.T = null));
        try {
          for (var p = n.onRecoverableError, b = 0; b < l.length; b++) {
            var R = l[b];
            p(R.value, { componentStack: R.stack });
          }
        } finally {
          ((U.T = r), (ne.p = f));
        }
      }
      ((po & 3) !== 0 && _u(),
        Er(n),
        (f = n.pendingLanes),
        (o & 4194090) !== 0 && (f & 42) !== 0
          ? n === Zd
            ? Ns++
            : ((Ns = 0), (Zd = n))
          : (Ns = 0),
        zs(0));
    }
  }
  function Gv(n, r) {
    (n.pooledCacheLanes &= r) === 0 &&
      ((r = n.pooledCache), r != null && ((n.pooledCache = null), ds(r)));
  }
  function _u(n) {
    return (Zv(), Iv(), qv(), Yv());
  }
  function Yv() {
    if (Jt !== 5) return !1;
    var n = Ma,
      r = $d;
    $d = 0;
    var o = te(po),
      l = U.T,
      f = ne.p;
    try {
      ((ne.p = 32 > o ? 32 : o), (U.T = null), (o = Hd), (Hd = null));
      var p = Ma,
        b = po;
      if (((Jt = 0), (mo = Ma = null), (po = 0), (ot & 6) !== 0))
        throw Error(i(331));
      var R = ot;
      if (
        ((ot |= 4),
        Mv(p.current),
        Cv(p, p.current, b, o),
        (ot = R),
        zs(0, !1),
        yt && typeof yt.onPostCommitFiberRoot == "function")
      )
        try {
          yt.onPostCommitFiberRoot(Vt, p);
        } catch {}
      return !0;
    } finally {
      ((ne.p = f), (U.T = l), Gv(n, r));
    }
  }
  function Kv(n, r, o) {
    ((r = Gn(o, r)),
      (r = _d(n.stateNode, r, 2)),
      (n = Sa(n, r, 2)),
      n !== null && (ma(n, 2), Er(n)));
  }
  function mt(n, r, o) {
    if (n.tag === 3) Kv(n, n, o);
    else
      for (; r !== null; ) {
        if (r.tag === 3) {
          Kv(r, n, o);
          break;
        } else if (r.tag === 1) {
          var l = r.stateNode;
          if (
            typeof r.type.getDerivedStateFromError == "function" ||
            (typeof l.componentDidCatch == "function" &&
              (Da === null || !Da.has(l)))
          ) {
            ((n = Gn(o, n)),
              (o = Wg(2)),
              (l = Sa(r, o, 2)),
              l !== null && (ev(o, l, r, n), ma(l, 2), Er(l)));
            break;
          }
        }
        r = r.return;
      }
  }
  function Yd(n, r, o) {
    var l = n.pingCache;
    if (l === null) {
      l = n.pingCache = new Px();
      var f = new Set();
      l.set(r, f);
    } else ((f = l.get(r)), f === void 0 && ((f = new Set()), l.set(r, f)));
    f.has(o) ||
      ((Pd = !0), f.add(o), (n = Hx.bind(null, n, r, o)), r.then(n, n));
  }
  function Hx(n, r, o) {
    var l = n.pingCache;
    (l !== null && l.delete(r),
      (n.pingedLanes |= n.suspendedLanes & o),
      (n.warmLanes &= ~o),
      pt === n &&
        (We & o) === o &&
        (Ot === 4 || (Ot === 3 && (We & 62914560) === We && 300 > Bt() - Vd)
          ? (ot & 2) === 0 && yo(n, 0)
          : (Fd |= o),
        ho === We && (ho = 0)),
      Er(n));
  }
  function Qv(n, r) {
    (r === 0 && (r = Vi()), (n = Xi(n, r)), n !== null && (ma(n, r), Er(n)));
  }
  function Zx(n) {
    var r = n.memoizedState,
      o = 0;
    (r !== null && (o = r.retryLane), Qv(n, o));
  }
  function Ix(n, r) {
    var o = 0;
    switch (n.tag) {
      case 13:
        var l = n.stateNode,
          f = n.memoizedState;
        f !== null && (o = f.retryLane);
        break;
      case 19:
        l = n.stateNode;
        break;
      case 22:
        l = n.stateNode._retryCache;
        break;
      default:
        throw Error(i(314));
    }
    (l !== null && l.delete(r), Qv(n, o));
  }
  function qx(n, r) {
    return Vn(n, r);
  }
  var Eu = null,
    vo = null,
    Kd = !1,
    xu = !1,
    Qd = !1,
    Ei = 0;
  function Er(n) {
    (n !== vo &&
      n.next === null &&
      (vo === null ? (Eu = vo = n) : (vo = vo.next = n)),
      (xu = !0),
      Kd || ((Kd = !0), Yx()));
  }
  function zs(n, r) {
    if (!Qd && xu) {
      Qd = !0;
      do
        for (var o = !1, l = Eu; l !== null; ) {
          if (n !== 0) {
            var f = l.pendingLanes;
            if (f === 0) var p = 0;
            else {
              var b = l.suspendedLanes,
                R = l.pingedLanes;
              ((p = (1 << (31 - $t(42 | n) + 1)) - 1),
                (p &= f & ~(b & ~R)),
                (p = p & 201326741 ? (p & 201326741) | 1 : p ? p | 2 : 0));
            }
            p !== 0 && ((o = !0), e0(l, p));
          } else
            ((p = We),
              (p = Fr(
                l,
                l === pt ? p : 0,
                l.cancelPendingCommit !== null || l.timeoutHandle !== -1,
              )),
              (p & 3) === 0 || Cn(l, p) || ((o = !0), e0(l, p)));
          l = l.next;
        }
      while (o);
      Qd = !1;
    }
  }
  function Gx() {
    Xv();
  }
  function Xv() {
    xu = Kd = !1;
    var n = 0;
    Ei !== 0 && (nR() && (n = Ei), (Ei = 0));
    for (var r = Bt(), o = null, l = Eu; l !== null; ) {
      var f = l.next,
        p = Jv(l, r);
      (p === 0
        ? ((l.next = null),
          o === null ? (Eu = f) : (o.next = f),
          f === null && (vo = o))
        : ((o = l), (n !== 0 || (p & 3) !== 0) && (xu = !0)),
        (l = f));
    }
    zs(n);
  }
  function Jv(n, r) {
    for (
      var o = n.suspendedLanes,
        l = n.pingedLanes,
        f = n.expirationTimes,
        p = n.pendingLanes & -62914561;
      0 < p;

    ) {
      var b = 31 - $t(p),
        R = 1 << b,
        j = f[b];
      (j === -1
        ? ((R & o) === 0 || (R & l) !== 0) && (f[b] = ii(R, r))
        : j <= r && (n.expiredLanes |= R),
        (p &= ~R));
    }
    if (
      ((r = pt),
      (o = We),
      (o = Fr(
        n,
        n === r ? o : 0,
        n.cancelPendingCommit !== null || n.timeoutHandle !== -1,
      )),
      (l = n.callbackNode),
      o === 0 ||
        (n === r && (st === 2 || st === 9)) ||
        n.cancelPendingCommit !== null)
    )
      return (
        l !== null && l !== null && cn(l),
        (n.callbackNode = null),
        (n.callbackPriority = 0)
      );
    if ((o & 3) === 0 || Cn(n, o)) {
      if (((r = o & -o), r === n.callbackPriority)) return r;
      switch ((l !== null && cn(l), te(o))) {
        case 2:
        case 8:
          o = ni;
          break;
        case 32:
          o = $n;
          break;
        case 268435456:
          o = gr;
          break;
        default:
          o = $n;
      }
      return (
        (l = Wv.bind(null, n)),
        (o = Vn(o, l)),
        (n.callbackPriority = r),
        (n.callbackNode = o),
        r
      );
    }
    return (
      l !== null && l !== null && cn(l),
      (n.callbackPriority = 2),
      (n.callbackNode = null),
      2
    );
  }
  function Wv(n, r) {
    if (Jt !== 0 && Jt !== 5)
      return ((n.callbackNode = null), (n.callbackPriority = 0), null);
    var o = n.callbackNode;
    if (_u() && n.callbackNode !== o) return null;
    var l = We;
    return (
      (l = Fr(
        n,
        n === pt ? l : 0,
        n.cancelPendingCommit !== null || n.timeoutHandle !== -1,
      )),
      l === 0
        ? null
        : (jv(n, l, r),
          Jv(n, Bt()),
          n.callbackNode != null && n.callbackNode === o
            ? Wv.bind(null, n)
            : null)
    );
  }
  function e0(n, r) {
    if (_u()) return null;
    jv(n, r, !0);
  }
  function Yx() {
    aR(function () {
      (ot & 6) !== 0 ? Vn(ti, Gx) : Xv();
    });
  }
  function Xd() {
    return (Ei === 0 && (Ei = ha()), Ei);
  }
  function t0(n) {
    return n == null || typeof n == "symbol" || typeof n == "boolean"
      ? null
      : typeof n == "function"
        ? n
        : jl("" + n);
  }
  function n0(n, r) {
    var o = r.ownerDocument.createElement("input");
    return (
      (o.name = r.name),
      (o.value = r.value),
      n.id && o.setAttribute("form", n.id),
      r.parentNode.insertBefore(o, r),
      (n = new FormData(n)),
      o.parentNode.removeChild(o),
      n
    );
  }
  function Kx(n, r, o, l, f) {
    if (r === "submit" && o && o.stateNode === f) {
      var p = t0((f[Z] || null).action),
        b = l.submitter;
      b &&
        ((r = (r = b[Z] || null)
          ? t0(r.formAction)
          : b.getAttribute("formAction")),
        r !== null && ((p = r), (b = null)));
      var R = new Fl("action", "action", null, l, f);
      n.push({
        event: R,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (l.defaultPrevented) {
                if (Ei !== 0) {
                  var j = b ? n0(f, b) : new FormData(f);
                  gd(
                    o,
                    { pending: !0, data: j, method: f.method, action: p },
                    null,
                    j,
                  );
                }
              } else
                typeof p == "function" &&
                  (R.preventDefault(),
                  (j = b ? n0(f, b) : new FormData(f)),
                  gd(
                    o,
                    { pending: !0, data: j, method: f.method, action: p },
                    p,
                    j,
                  ));
            },
            currentTarget: f,
          },
        ],
      });
    }
  }
  for (var Jd = 0; Jd < Lf.length; Jd++) {
    var Wd = Lf[Jd],
      Qx = Wd.toLowerCase(),
      Xx = Wd[0].toUpperCase() + Wd.slice(1);
    ur(Qx, "on" + Xx);
  }
  (ur(jy, "onAnimationEnd"),
    ur(Ly, "onAnimationIteration"),
    ur(Uy, "onAnimationStart"),
    ur("dblclick", "onDoubleClick"),
    ur("focusin", "onFocus"),
    ur("focusout", "onBlur"),
    ur(mx, "onTransitionRun"),
    ur(px, "onTransitionStart"),
    ur(yx, "onTransitionCancel"),
    ur(Py, "onTransitionEnd"),
    fn("onMouseEnter", ["mouseout", "mouseover"]),
    fn("onMouseLeave", ["mouseout", "mouseover"]),
    fn("onPointerEnter", ["pointerout", "pointerover"]),
    fn("onPointerLeave", ["pointerout", "pointerover"]),
    Tn(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    Tn(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    Tn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Tn(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    Tn(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    Tn(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var ks =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    Jx = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(ks),
    );
  function r0(n, r) {
    r = (r & 4) !== 0;
    for (var o = 0; o < n.length; o++) {
      var l = n[o],
        f = l.event;
      l = l.listeners;
      e: {
        var p = void 0;
        if (r)
          for (var b = l.length - 1; 0 <= b; b--) {
            var R = l[b],
              j = R.instance,
              K = R.currentTarget;
            if (((R = R.listener), j !== p && f.isPropagationStopped()))
              break e;
            ((p = R), (f.currentTarget = K));
            try {
              p(f);
            } catch (re) {
              fu(re);
            }
            ((f.currentTarget = null), (p = j));
          }
        else
          for (b = 0; b < l.length; b++) {
            if (
              ((R = l[b]),
              (j = R.instance),
              (K = R.currentTarget),
              (R = R.listener),
              j !== p && f.isPropagationStopped())
            )
              break e;
            ((p = R), (f.currentTarget = K));
            try {
              p(f);
            } catch (re) {
              fu(re);
            }
            ((f.currentTarget = null), (p = j));
          }
      }
    }
  }
  function Qe(n, r) {
    var o = r[de];
    o === void 0 && (o = r[de] = new Set());
    var l = n + "__bubble";
    o.has(l) || (a0(r, n, 2, !1), o.add(l));
  }
  function eh(n, r, o) {
    var l = 0;
    (r && (l |= 4), a0(o, n, l, r));
  }
  var Ru = "_reactListening" + Math.random().toString(36).slice(2);
  function th(n) {
    if (!n[Ru]) {
      ((n[Ru] = !0),
        ct.forEach(function (o) {
          o !== "selectionchange" && (Jx.has(o) || eh(o, !1, n), eh(o, !0, n));
        }));
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[Ru] || ((r[Ru] = !0), eh("selectionchange", !1, r));
    }
  }
  function a0(n, r, o, l) {
    switch (C0(r)) {
      case 2:
        var f = RR;
        break;
      case 8:
        f = OR;
        break;
      default:
        f = ph;
    }
    ((o = f.bind(null, r, o, n)),
      (f = void 0),
      !Ef ||
        (r !== "touchstart" && r !== "touchmove" && r !== "wheel") ||
        (f = !0),
      l
        ? f !== void 0
          ? n.addEventListener(r, o, { capture: !0, passive: f })
          : n.addEventListener(r, o, !0)
        : f !== void 0
          ? n.addEventListener(r, o, { passive: f })
          : n.addEventListener(r, o, !1));
  }
  function nh(n, r, o, l, f) {
    var p = l;
    if ((r & 1) === 0 && (r & 2) === 0 && l !== null)
      e: for (;;) {
        if (l === null) return;
        var b = l.tag;
        if (b === 3 || b === 4) {
          var R = l.stateNode.containerInfo;
          if (R === f) break;
          if (b === 4)
            for (b = l.return; b !== null; ) {
              var j = b.tag;
              if ((j === 3 || j === 4) && b.stateNode.containerInfo === f)
                return;
              b = b.return;
            }
          for (; R !== null; ) {
            if (((b = Fe(R)), b === null)) return;
            if (((j = b.tag), j === 5 || j === 6 || j === 26 || j === 27)) {
              l = p = b;
              continue e;
            }
            R = R.parentNode;
          }
        }
        l = l.return;
      }
    fy(function () {
      var K = p,
        re = Sf(o),
        ue = [];
      e: {
        var X = Fy.get(n);
        if (X !== void 0) {
          var J = Fl,
            Ue = n;
          switch (n) {
            case "keypress":
              if (Ul(o) === 0) break e;
            case "keydown":
            case "keyup":
              J = qE;
              break;
            case "focusin":
              ((Ue = "focus"), (J = Af));
              break;
            case "focusout":
              ((Ue = "blur"), (J = Af));
              break;
            case "beforeblur":
            case "afterblur":
              J = Af;
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
              J = my;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              J = kE;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              J = KE;
              break;
            case jy:
            case Ly:
            case Uy:
              J = UE;
              break;
            case Py:
              J = XE;
              break;
            case "scroll":
            case "scrollend":
              J = NE;
              break;
            case "wheel":
              J = WE;
              break;
            case "copy":
            case "cut":
            case "paste":
              J = FE;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              J = yy;
              break;
            case "toggle":
            case "beforetoggle":
              J = tx;
          }
          var je = (r & 4) !== 0,
            ht = !je && (n === "scroll" || n === "scrollend"),
            I = je ? (X !== null ? X + "Capture" : null) : X;
          je = [];
          for (var V = K, G; V !== null; ) {
            var ae = V;
            if (
              ((G = ae.stateNode),
              (ae = ae.tag),
              (ae !== 5 && ae !== 26 && ae !== 27) ||
                G === null ||
                I === null ||
                ((ae = Wo(V, I)), ae != null && je.push(js(V, ae, G))),
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
      if ((r & 7) === 0) {
        e: {
          if (
            ((X = n === "mouseover" || n === "pointerover"),
            (J = n === "mouseout" || n === "pointerout"),
            X &&
              o !== wf &&
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
                  ((ht = u(Ue)),
                  (je = Ue.tag),
                  Ue !== ht || (je !== 5 && je !== 27 && je !== 6)) &&
                  (Ue = null))
              : ((J = null), (Ue = K)),
            J !== Ue)
          ) {
            if (
              ((je = my),
              (ae = "onMouseLeave"),
              (I = "onMouseEnter"),
              (V = "mouse"),
              (n === "pointerout" || n === "pointerover") &&
                ((je = yy),
                (ae = "onPointerLeave"),
                (I = "onPointerEnter"),
                (V = "pointer")),
              (ht = J == null ? X : it(J)),
              (G = Ue == null ? X : it(Ue)),
              (X = new je(ae, V + "leave", J, o, re)),
              (X.target = ht),
              (X.relatedTarget = G),
              (ae = null),
              Fe(re) === K &&
                ((je = new je(I, V + "enter", Ue, o, re)),
                (je.target = G),
                (je.relatedTarget = ht),
                (ae = je)),
              (ht = ae),
              J && Ue)
            )
              t: {
                for (je = J, I = Ue, V = 0, G = je; G; G = bo(G)) V++;
                for (G = 0, ae = I; ae; ae = bo(ae)) G++;
                for (; 0 < V - G; ) ((je = bo(je)), V--);
                for (; 0 < G - V; ) ((I = bo(I)), G--);
                for (; V--; ) {
                  if (je === I || (I !== null && je === I.alternate)) break t;
                  ((je = bo(je)), (I = bo(I)));
                }
                je = null;
              }
            else je = null;
            (J !== null && i0(ue, X, J, je, !1),
              Ue !== null && ht !== null && i0(ue, ht, Ue, je, !0));
          }
        }
        e: {
          if (
            ((X = K ? it(K) : window),
            (J = X.nodeName && X.nodeName.toLowerCase()),
            J === "select" || (J === "input" && X.type === "file"))
          )
            var Ce = xy;
          else if (_y(X))
            if (Ry) Ce = fx;
            else {
              Ce = ux;
              var Ge = lx;
            }
          else
            ((J = X.nodeName),
              !J ||
              J.toLowerCase() !== "input" ||
              (X.type !== "checkbox" && X.type !== "radio")
                ? K && bf(K.elementType) && (Ce = xy)
                : (Ce = cx));
          if (Ce && (Ce = Ce(n, K))) {
            Ey(ue, Ce, o, re);
            break e;
          }
          (Ge && Ge(n, X, K),
            n === "focusout" &&
              K &&
              X.type === "number" &&
              K.memoizedProps.value != null &&
              vf(X, "number", X.value));
        }
        switch (((Ge = K ? it(K) : window), n)) {
          case "focusin":
            (_y(Ge) || Ge.contentEditable === "true") &&
              ((Yi = Ge), (zf = K), (ss = null));
            break;
          case "focusout":
            ss = zf = Yi = null;
            break;
          case "mousedown":
            kf = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((kf = !1), zy(ue, o, re));
            break;
          case "selectionchange":
            if (hx) break;
          case "keydown":
          case "keyup":
            zy(ue, o, re);
        }
        var Me;
        if (Tf)
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
          Gi
            ? wy(n, o) && (Le = "onCompositionEnd")
            : n === "keydown" &&
              o.keyCode === 229 &&
              (Le = "onCompositionStart");
        (Le &&
          (gy &&
            o.locale !== "ko" &&
            (Gi || Le !== "onCompositionStart"
              ? Le === "onCompositionEnd" && Gi && (Me = dy())
              : ((ga = re),
                (xf = "value" in ga ? ga.value : ga.textContent),
                (Gi = !0))),
          (Ge = Ou(K, Le)),
          0 < Ge.length &&
            ((Le = new py(Le, n, null, o, re)),
            ue.push({ event: Le, listeners: Ge }),
            Me
              ? (Le.data = Me)
              : ((Me = Sy(o)), Me !== null && (Le.data = Me)))),
          (Me = rx ? ax(n, o) : ix(n, o)) &&
            ((Le = Ou(K, "onBeforeInput")),
            0 < Le.length &&
              ((Ge = new py("onBeforeInput", "beforeinput", null, o, re)),
              ue.push({ event: Ge, listeners: Le }),
              (Ge.data = Me))),
          Kx(ue, n, K, o, re));
      }
      r0(ue, r);
    });
  }
  function js(n, r, o) {
    return { instance: n, listener: r, currentTarget: o };
  }
  function Ou(n, r) {
    for (var o = r + "Capture", l = []; n !== null; ) {
      var f = n,
        p = f.stateNode;
      if (
        ((f = f.tag),
        (f !== 5 && f !== 26 && f !== 27) ||
          p === null ||
          ((f = Wo(n, o)),
          f != null && l.unshift(js(n, f, p)),
          (f = Wo(n, r)),
          f != null && l.push(js(n, f, p))),
        n.tag === 3)
      )
        return l;
      n = n.return;
    }
    return [];
  }
  function bo(n) {
    if (n === null) return null;
    do n = n.return;
    while (n && n.tag !== 5 && n.tag !== 27);
    return n || null;
  }
  function i0(n, r, o, l, f) {
    for (var p = r._reactName, b = []; o !== null && o !== l; ) {
      var R = o,
        j = R.alternate,
        K = R.stateNode;
      if (((R = R.tag), j !== null && j === l)) break;
      ((R !== 5 && R !== 26 && R !== 27) ||
        K === null ||
        ((j = K),
        f
          ? ((K = Wo(o, p)), K != null && b.unshift(js(o, K, j)))
          : f || ((K = Wo(o, p)), K != null && b.push(js(o, K, j)))),
        (o = o.return));
    }
    b.length !== 0 && n.push({ event: r, listeners: b });
  }
  var Wx = /\r\n?/g,
    eR = /\u0000|\uFFFD/g;
  function o0(n) {
    return (typeof n == "string" ? n : "" + n)
      .replace(
        Wx,
        `
`,
      )
      .replace(eR, "");
  }
  function s0(n, r) {
    return ((r = o0(r)), o0(n) === r);
  }
  function Au() {}
  function dt(n, r, o, l, f, p) {
    switch (o) {
      case "children":
        typeof l == "string"
          ? r === "body" || (r === "textarea" && l === "") || Zi(n, l)
          : (typeof l == "number" || typeof l == "bigint") &&
            r !== "body" &&
            Zi(n, "" + l);
        break;
      case "className":
        $r(n, "class", l);
        break;
      case "tabIndex":
        $r(n, "tabindex", l);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        $r(n, o, l);
        break;
      case "style":
        uy(n, l, p);
        break;
      case "data":
        if (r !== "object") {
          $r(n, "data", l);
          break;
        }
      case "src":
      case "href":
        if (l === "" && (r !== "a" || o !== "href")) {
          n.removeAttribute(o);
          break;
        }
        if (
          l == null ||
          typeof l == "function" ||
          typeof l == "symbol" ||
          typeof l == "boolean"
        ) {
          n.removeAttribute(o);
          break;
        }
        ((l = jl("" + l)), n.setAttribute(o, l));
        break;
      case "action":
      case "formAction":
        if (typeof l == "function") {
          n.setAttribute(
            o,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof p == "function" &&
            (o === "formAction"
              ? (r !== "input" && dt(n, r, "name", f.name, f, null),
                dt(n, r, "formEncType", f.formEncType, f, null),
                dt(n, r, "formMethod", f.formMethod, f, null),
                dt(n, r, "formTarget", f.formTarget, f, null))
              : (dt(n, r, "encType", f.encType, f, null),
                dt(n, r, "method", f.method, f, null),
                dt(n, r, "target", f.target, f, null)));
        if (l == null || typeof l == "symbol" || typeof l == "boolean") {
          n.removeAttribute(o);
          break;
        }
        ((l = jl("" + l)), n.setAttribute(o, l));
        break;
      case "onClick":
        l != null && (n.onclick = Au);
        break;
      case "onScroll":
        l != null && Qe("scroll", n);
        break;
      case "onScrollEnd":
        l != null && Qe("scrollend", n);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l)) throw Error(i(61));
          if (((o = l.__html), o != null)) {
            if (f.children != null) throw Error(i(60));
            n.innerHTML = o;
          }
        }
        break;
      case "multiple":
        n.multiple = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "muted":
        n.muted = l && typeof l != "function" && typeof l != "symbol";
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
          n.removeAttribute("xlink:href");
          break;
        }
        ((o = jl("" + l)),
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
        l != null && typeof l != "function" && typeof l != "symbol"
          ? n.setAttribute(o, "" + l)
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
        l && typeof l != "function" && typeof l != "symbol"
          ? n.setAttribute(o, "")
          : n.removeAttribute(o);
        break;
      case "capture":
      case "download":
        l === !0
          ? n.setAttribute(o, "")
          : l !== !1 &&
              l != null &&
              typeof l != "function" &&
              typeof l != "symbol"
            ? n.setAttribute(o, l)
            : n.removeAttribute(o);
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
          ? n.setAttribute(o, l)
          : n.removeAttribute(o);
        break;
      case "rowSpan":
      case "start":
        l == null || typeof l == "function" || typeof l == "symbol" || isNaN(l)
          ? n.removeAttribute(o)
          : n.setAttribute(o, l);
        break;
      case "popover":
        (Qe("beforetoggle", n), Qe("toggle", n), Vr(n, "popover", l));
        break;
      case "xlinkActuate":
        Be(n, "http://www.w3.org/1999/xlink", "xlink:actuate", l);
        break;
      case "xlinkArcrole":
        Be(n, "http://www.w3.org/1999/xlink", "xlink:arcrole", l);
        break;
      case "xlinkRole":
        Be(n, "http://www.w3.org/1999/xlink", "xlink:role", l);
        break;
      case "xlinkShow":
        Be(n, "http://www.w3.org/1999/xlink", "xlink:show", l);
        break;
      case "xlinkTitle":
        Be(n, "http://www.w3.org/1999/xlink", "xlink:title", l);
        break;
      case "xlinkType":
        Be(n, "http://www.w3.org/1999/xlink", "xlink:type", l);
        break;
      case "xmlBase":
        Be(n, "http://www.w3.org/XML/1998/namespace", "xml:base", l);
        break;
      case "xmlLang":
        Be(n, "http://www.w3.org/XML/1998/namespace", "xml:lang", l);
        break;
      case "xmlSpace":
        Be(n, "http://www.w3.org/XML/1998/namespace", "xml:space", l);
        break;
      case "is":
        Vr(n, "is", l);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < o.length) ||
          (o[0] !== "o" && o[0] !== "O") ||
          (o[1] !== "n" && o[1] !== "N")) &&
          ((o = DE.get(o) || o), Vr(n, o, l));
    }
  }
  function rh(n, r, o, l, f, p) {
    switch (o) {
      case "style":
        uy(n, l, p);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l)) throw Error(i(61));
          if (((o = l.__html), o != null)) {
            if (f.children != null) throw Error(i(60));
            n.innerHTML = o;
          }
        }
        break;
      case "children":
        typeof l == "string"
          ? Zi(n, l)
          : (typeof l == "number" || typeof l == "bigint") && Zi(n, "" + l);
        break;
      case "onScroll":
        l != null && Qe("scroll", n);
        break;
      case "onScrollEnd":
        l != null && Qe("scrollend", n);
        break;
      case "onClick":
        l != null && (n.onclick = Au);
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
        if (!vr.hasOwnProperty(o))
          e: {
            if (
              o[0] === "o" &&
              o[1] === "n" &&
              ((f = o.endsWith("Capture")),
              (r = o.slice(2, f ? o.length - 7 : void 0)),
              (p = n[Z] || null),
              (p = p != null ? p[o] : null),
              typeof p == "function" && n.removeEventListener(r, p, f),
              typeof l == "function")
            ) {
              (typeof p != "function" &&
                p !== null &&
                (o in n
                  ? (n[o] = null)
                  : n.hasAttribute(o) && n.removeAttribute(o)),
                n.addEventListener(r, l, f));
              break e;
            }
            o in n
              ? (n[o] = l)
              : l === !0
                ? n.setAttribute(o, "")
                : Vr(n, o, l);
          }
    }
  }
  function Wt(n, r, o) {
    switch (r) {
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
        var l = !1,
          f = !1,
          p;
        for (p in o)
          if (o.hasOwnProperty(p)) {
            var b = o[p];
            if (b != null)
              switch (p) {
                case "src":
                  l = !0;
                  break;
                case "srcSet":
                  f = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(i(137, r));
                default:
                  dt(n, r, p, b, o, null);
              }
          }
        (f && dt(n, r, "srcSet", o.srcSet, o, null),
          l && dt(n, r, "src", o.src, o, null));
        return;
      case "input":
        Qe("invalid", n);
        var R = (p = b = f = null),
          j = null,
          K = null;
        for (l in o)
          if (o.hasOwnProperty(l)) {
            var re = o[l];
            if (re != null)
              switch (l) {
                case "name":
                  f = re;
                  break;
                case "type":
                  b = re;
                  break;
                case "checked":
                  j = re;
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
                  if (re != null) throw Error(i(137, r));
                  break;
                default:
                  dt(n, r, l, re, o, null);
              }
          }
        (iy(n, p, R, j, K, b, f, !1), zl(n));
        return;
      case "select":
        (Qe("invalid", n), (l = b = p = null));
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
                l = R;
              default:
                dt(n, r, f, R, o, null);
            }
        ((r = p),
          (o = b),
          (n.multiple = !!l),
          r != null ? Hi(n, !!l, r, !1) : o != null && Hi(n, !!l, o, !0));
        return;
      case "textarea":
        (Qe("invalid", n), (p = f = l = null));
        for (b in o)
          if (o.hasOwnProperty(b) && ((R = o[b]), R != null))
            switch (b) {
              case "value":
                l = R;
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
                dt(n, r, b, R, o, null);
            }
        (sy(n, l, f, p), zl(n));
        return;
      case "option":
        for (j in o)
          if (o.hasOwnProperty(j) && ((l = o[j]), l != null))
            switch (j) {
              case "selected":
                n.selected =
                  l && typeof l != "function" && typeof l != "symbol";
                break;
              default:
                dt(n, r, j, l, o, null);
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
        for (l = 0; l < ks.length; l++) Qe(ks[l], n);
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
          if (o.hasOwnProperty(K) && ((l = o[K]), l != null))
            switch (K) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(i(137, r));
              default:
                dt(n, r, K, l, o, null);
            }
        return;
      default:
        if (bf(r)) {
          for (re in o)
            o.hasOwnProperty(re) &&
              ((l = o[re]), l !== void 0 && rh(n, r, re, l, o, void 0));
          return;
        }
    }
    for (R in o)
      o.hasOwnProperty(R) && ((l = o[R]), l != null && dt(n, r, R, l, o, null));
  }
  function tR(n, r, o, l) {
    switch (r) {
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
          j = null,
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
                j = ue;
              default:
                l.hasOwnProperty(J) || dt(n, r, J, null, l, ue);
            }
        }
        for (var X in l) {
          var J = l[X];
          if (((ue = o[X]), l.hasOwnProperty(X) && (J != null || ue != null)))
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
                if (J != null) throw Error(i(137, r));
                break;
              default:
                J !== ue && dt(n, r, X, J, l, ue);
            }
        }
        gf(n, b, R, j, K, re, p, f);
        return;
      case "select":
        J = b = R = X = null;
        for (p in o)
          if (((j = o[p]), o.hasOwnProperty(p) && j != null))
            switch (p) {
              case "value":
                break;
              case "multiple":
                J = j;
              default:
                l.hasOwnProperty(p) || dt(n, r, p, null, l, j);
            }
        for (f in l)
          if (
            ((p = l[f]),
            (j = o[f]),
            l.hasOwnProperty(f) && (p != null || j != null))
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
                p !== j && dt(n, r, f, p, l, j);
            }
        ((r = R),
          (o = b),
          (l = J),
          X != null
            ? Hi(n, !!o, X, !1)
            : !!l != !!o &&
              (r != null ? Hi(n, !!o, r, !0) : Hi(n, !!o, o ? [] : "", !1)));
        return;
      case "textarea":
        J = X = null;
        for (R in o)
          if (
            ((f = o[R]),
            o.hasOwnProperty(R) && f != null && !l.hasOwnProperty(R))
          )
            switch (R) {
              case "value":
                break;
              case "children":
                break;
              default:
                dt(n, r, R, null, l, f);
            }
        for (b in l)
          if (
            ((f = l[b]),
            (p = o[b]),
            l.hasOwnProperty(b) && (f != null || p != null))
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
                f !== p && dt(n, r, b, f, l, p);
            }
        oy(n, X, J);
        return;
      case "option":
        for (var Ue in o)
          if (
            ((X = o[Ue]),
            o.hasOwnProperty(Ue) && X != null && !l.hasOwnProperty(Ue))
          )
            switch (Ue) {
              case "selected":
                n.selected = !1;
                break;
              default:
                dt(n, r, Ue, null, l, X);
            }
        for (j in l)
          if (
            ((X = l[j]),
            (J = o[j]),
            l.hasOwnProperty(j) && X !== J && (X != null || J != null))
          )
            switch (j) {
              case "selected":
                n.selected =
                  X && typeof X != "function" && typeof X != "symbol";
                break;
              default:
                dt(n, r, j, X, l, J);
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
              !l.hasOwnProperty(je) &&
              dt(n, r, je, null, l, X));
        for (K in l)
          if (
            ((X = l[K]),
            (J = o[K]),
            l.hasOwnProperty(K) && X !== J && (X != null || J != null))
          )
            switch (K) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (X != null) throw Error(i(137, r));
                break;
              default:
                dt(n, r, K, X, l, J);
            }
        return;
      default:
        if (bf(r)) {
          for (var ht in o)
            ((X = o[ht]),
              o.hasOwnProperty(ht) &&
                X !== void 0 &&
                !l.hasOwnProperty(ht) &&
                rh(n, r, ht, void 0, l, X));
          for (re in l)
            ((X = l[re]),
              (J = o[re]),
              !l.hasOwnProperty(re) ||
                X === J ||
                (X === void 0 && J === void 0) ||
                rh(n, r, re, X, l, J));
          return;
        }
    }
    for (var I in o)
      ((X = o[I]),
        o.hasOwnProperty(I) &&
          X != null &&
          !l.hasOwnProperty(I) &&
          dt(n, r, I, null, l, X));
    for (ue in l)
      ((X = l[ue]),
        (J = o[ue]),
        !l.hasOwnProperty(ue) ||
          X === J ||
          (X == null && J == null) ||
          dt(n, r, ue, X, l, J));
  }
  var ah = null,
    ih = null;
  function Cu(n) {
    return n.nodeType === 9 ? n : n.ownerDocument;
  }
  function l0(n) {
    switch (n) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function u0(n, r) {
    if (n === 0)
      switch (r) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return n === 1 && r === "foreignObject" ? 0 : n;
  }
  function oh(n, r) {
    return (
      n === "textarea" ||
      n === "noscript" ||
      typeof r.children == "string" ||
      typeof r.children == "number" ||
      typeof r.children == "bigint" ||
      (typeof r.dangerouslySetInnerHTML == "object" &&
        r.dangerouslySetInnerHTML !== null &&
        r.dangerouslySetInnerHTML.__html != null)
    );
  }
  var sh = null;
  function nR() {
    var n = window.event;
    return n && n.type === "popstate"
      ? n === sh
        ? !1
        : ((sh = n), !0)
      : ((sh = null), !1);
  }
  var c0 = typeof setTimeout == "function" ? setTimeout : void 0,
    rR = typeof clearTimeout == "function" ? clearTimeout : void 0,
    f0 = typeof Promise == "function" ? Promise : void 0,
    aR =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof f0 < "u"
          ? function (n) {
              return f0.resolve(null).then(n).catch(iR);
            }
          : c0;
  function iR(n) {
    setTimeout(function () {
      throw n;
    });
  }
  function za(n) {
    return n === "head";
  }
  function d0(n, r) {
    var o = r,
      l = 0,
      f = 0;
    do {
      var p = o.nextSibling;
      if ((n.removeChild(o), p && p.nodeType === 8))
        if (((o = p.data), o === "/$")) {
          if (0 < l && 8 > l) {
            o = l;
            var b = n.ownerDocument;
            if ((o & 1 && Ls(b.documentElement), o & 2 && Ls(b.body), o & 4))
              for (o = b.head, Ls(o), b = o.firstChild; b; ) {
                var R = b.nextSibling,
                  j = b.nodeName;
                (b[_e] ||
                  j === "SCRIPT" ||
                  j === "STYLE" ||
                  (j === "LINK" && b.rel.toLowerCase() === "stylesheet") ||
                  o.removeChild(b),
                  (b = R));
              }
          }
          if (f === 0) {
            (n.removeChild(p), Zs(r));
            return;
          }
          f--;
        } else
          o === "$" || o === "$?" || o === "$!"
            ? f++
            : (l = o.charCodeAt(0) - 48);
      else l = 0;
      o = p;
    } while (o);
    Zs(r);
  }
  function lh(n) {
    var r = n.firstChild;
    for (r && r.nodeType === 10 && (r = r.nextSibling); r; ) {
      var o = r;
      switch (((r = r.nextSibling), o.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          (lh(o), Ae(o));
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
  function oR(n, r, o, l) {
    for (; n.nodeType === 1; ) {
      var f = o;
      if (n.nodeName.toLowerCase() !== r.toLowerCase()) {
        if (!l && (n.nodeName !== "INPUT" || n.type !== "hidden")) break;
      } else if (l) {
        if (!n[_e])
          switch (r) {
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
      } else if (r === "input" && n.type === "hidden") {
        var p = f.name == null ? null : "" + f.name;
        if (f.type === "hidden" && n.getAttribute("name") === p) return n;
      } else return n;
      if (((n = fr(n.nextSibling)), n === null)) break;
    }
    return null;
  }
  function sR(n, r, o) {
    if (r === "") return null;
    for (; n.nodeType !== 3; )
      if (
        ((n.nodeType !== 1 || n.nodeName !== "INPUT" || n.type !== "hidden") &&
          !o) ||
        ((n = fr(n.nextSibling)), n === null)
      )
        return null;
    return n;
  }
  function uh(n) {
    return (
      n.data === "$!" ||
      (n.data === "$?" && n.ownerDocument.readyState === "complete")
    );
  }
  function lR(n, r) {
    var o = n.ownerDocument;
    if (n.data !== "$?" || o.readyState === "complete") r();
    else {
      var l = function () {
        (r(), o.removeEventListener("DOMContentLoaded", l));
      };
      (o.addEventListener("DOMContentLoaded", l), (n._reactRetry = l));
    }
  }
  function fr(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3) break;
      if (r === 8) {
        if (
          ((r = n.data),
          r === "$" || r === "$!" || r === "$?" || r === "F!" || r === "F")
        )
          break;
        if (r === "/$") return null;
      }
    }
    return n;
  }
  var ch = null;
  function h0(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var o = n.data;
        if (o === "$" || o === "$!" || o === "$?") {
          if (r === 0) return n;
          r--;
        } else o === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  function m0(n, r, o) {
    switch (((r = Cu(o)), n)) {
      case "html":
        if (((n = r.documentElement), !n)) throw Error(i(452));
        return n;
      case "head":
        if (((n = r.head), !n)) throw Error(i(453));
        return n;
      case "body":
        if (((n = r.body), !n)) throw Error(i(454));
        return n;
      default:
        throw Error(i(451));
    }
  }
  function Ls(n) {
    for (var r = n.attributes; r.length; ) n.removeAttributeNode(r[0]);
    Ae(n);
  }
  var Wn = new Map(),
    p0 = new Set();
  function Tu(n) {
    return typeof n.getRootNode == "function"
      ? n.getRootNode()
      : n.nodeType === 9
        ? n
        : n.ownerDocument;
  }
  var ra = ne.d;
  ne.d = { f: uR, r: cR, D: fR, C: dR, L: hR, m: mR, X: yR, S: pR, M: gR };
  function uR() {
    var n = ra.f(),
      r = wu();
    return n || r;
  }
  function cR(n) {
    var r = Je(n);
    r !== null && r.tag === 5 && r.type === "form" ? jg(r) : ra.r(n);
  }
  var wo = typeof document > "u" ? null : document;
  function y0(n, r, o) {
    var l = wo;
    if (l && typeof r == "string" && r) {
      var f = qn(r);
      ((f = 'link[rel="' + n + '"][href="' + f + '"]'),
        typeof o == "string" && (f += '[crossorigin="' + o + '"]'),
        p0.has(f) ||
          (p0.add(f),
          (n = { rel: n, crossOrigin: o, href: r }),
          l.querySelector(f) === null &&
            ((r = l.createElement("link")),
            Wt(r, "link", n),
            Pe(r),
            l.head.appendChild(r))));
    }
  }
  function fR(n) {
    (ra.D(n), y0("dns-prefetch", n, null));
  }
  function dR(n, r) {
    (ra.C(n, r), y0("preconnect", n, r));
  }
  function hR(n, r, o) {
    ra.L(n, r, o);
    var l = wo;
    if (l && n && r) {
      var f = 'link[rel="preload"][as="' + qn(r) + '"]';
      r === "image" && o && o.imageSrcSet
        ? ((f += '[imagesrcset="' + qn(o.imageSrcSet) + '"]'),
          typeof o.imageSizes == "string" &&
            (f += '[imagesizes="' + qn(o.imageSizes) + '"]'))
        : (f += '[href="' + qn(n) + '"]');
      var p = f;
      switch (r) {
        case "style":
          p = So(n);
          break;
        case "script":
          p = _o(n);
      }
      Wn.has(p) ||
        ((n = y(
          {
            rel: "preload",
            href: r === "image" && o && o.imageSrcSet ? void 0 : n,
            as: r,
          },
          o,
        )),
        Wn.set(p, n),
        l.querySelector(f) !== null ||
          (r === "style" && l.querySelector(Us(p))) ||
          (r === "script" && l.querySelector(Ps(p))) ||
          ((r = l.createElement("link")),
          Wt(r, "link", n),
          Pe(r),
          l.head.appendChild(r)));
    }
  }
  function mR(n, r) {
    ra.m(n, r);
    var o = wo;
    if (o && n) {
      var l = r && typeof r.as == "string" ? r.as : "script",
        f =
          'link[rel="modulepreload"][as="' + qn(l) + '"][href="' + qn(n) + '"]',
        p = f;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          p = _o(n);
      }
      if (
        !Wn.has(p) &&
        ((n = y({ rel: "modulepreload", href: n }, r)),
        Wn.set(p, n),
        o.querySelector(f) === null)
      ) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (o.querySelector(Ps(p))) return;
        }
        ((l = o.createElement("link")),
          Wt(l, "link", n),
          Pe(l),
          o.head.appendChild(l));
      }
    }
  }
  function pR(n, r, o) {
    ra.S(n, r, o);
    var l = wo;
    if (l && n) {
      var f = vt(l).hoistableStyles,
        p = So(n);
      r = r || "default";
      var b = f.get(p);
      if (!b) {
        var R = { loading: 0, preload: null };
        if ((b = l.querySelector(Us(p)))) R.loading = 5;
        else {
          ((n = y({ rel: "stylesheet", href: n, "data-precedence": r }, o)),
            (o = Wn.get(p)) && fh(n, o));
          var j = (b = l.createElement("link"));
          (Pe(j),
            Wt(j, "link", n),
            (j._p = new Promise(function (K, re) {
              ((j.onload = K), (j.onerror = re));
            })),
            j.addEventListener("load", function () {
              R.loading |= 1;
            }),
            j.addEventListener("error", function () {
              R.loading |= 2;
            }),
            (R.loading |= 4),
            Du(b, r, l));
        }
        ((b = { type: "stylesheet", instance: b, count: 1, state: R }),
          f.set(p, b));
      }
    }
  }
  function yR(n, r) {
    ra.X(n, r);
    var o = wo;
    if (o && n) {
      var l = vt(o).hoistableScripts,
        f = _o(n),
        p = l.get(f);
      p ||
        ((p = o.querySelector(Ps(f))),
        p ||
          ((n = y({ src: n, async: !0 }, r)),
          (r = Wn.get(f)) && dh(n, r),
          (p = o.createElement("script")),
          Pe(p),
          Wt(p, "link", n),
          o.head.appendChild(p)),
        (p = { type: "script", instance: p, count: 1, state: null }),
        l.set(f, p));
    }
  }
  function gR(n, r) {
    ra.M(n, r);
    var o = wo;
    if (o && n) {
      var l = vt(o).hoistableScripts,
        f = _o(n),
        p = l.get(f);
      p ||
        ((p = o.querySelector(Ps(f))),
        p ||
          ((n = y({ src: n, async: !0, type: "module" }, r)),
          (r = Wn.get(f)) && dh(n, r),
          (p = o.createElement("script")),
          Pe(p),
          Wt(p, "link", n),
          o.head.appendChild(p)),
        (p = { type: "script", instance: p, count: 1, state: null }),
        l.set(f, p));
    }
  }
  function g0(n, r, o, l) {
    var f = (f = Oe.current) ? Tu(f) : null;
    if (!f) throw Error(i(446));
    switch (n) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof o.precedence == "string" && typeof o.href == "string"
          ? ((r = So(o.href)),
            (o = vt(f).hoistableStyles),
            (l = o.get(r)),
            l ||
              ((l = { type: "style", instance: null, count: 0, state: null }),
              o.set(r, l)),
            l)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          o.rel === "stylesheet" &&
          typeof o.href == "string" &&
          typeof o.precedence == "string"
        ) {
          n = So(o.href);
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
              (p = f.querySelector(Us(n))) &&
                !p._p &&
                ((b.instance = p), (b.state.loading = 5)),
              Wn.has(n) ||
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
                Wn.set(n, o),
                p || vR(f, n, o, b.state))),
            r && l === null)
          )
            throw Error(i(528, ""));
          return b;
        }
        if (r && l !== null) throw Error(i(529, ""));
        return null;
      case "script":
        return (
          (r = o.async),
          (o = o.src),
          typeof o == "string" &&
          r &&
          typeof r != "function" &&
          typeof r != "symbol"
            ? ((r = _o(o)),
              (o = vt(f).hoistableScripts),
              (l = o.get(r)),
              l ||
                ((l = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                o.set(r, l)),
              l)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(i(444, n));
    }
  }
  function So(n) {
    return 'href="' + qn(n) + '"';
  }
  function Us(n) {
    return 'link[rel="stylesheet"][' + n + "]";
  }
  function v0(n) {
    return y({}, n, { "data-precedence": n.precedence, precedence: null });
  }
  function vR(n, r, o, l) {
    n.querySelector('link[rel="preload"][as="style"][' + r + "]")
      ? (l.loading = 1)
      : ((r = n.createElement("link")),
        (l.preload = r),
        r.addEventListener("load", function () {
          return (l.loading |= 1);
        }),
        r.addEventListener("error", function () {
          return (l.loading |= 2);
        }),
        Wt(r, "link", o),
        Pe(r),
        n.head.appendChild(r));
  }
  function _o(n) {
    return '[src="' + qn(n) + '"]';
  }
  function Ps(n) {
    return "script[async]" + n;
  }
  function b0(n, r, o) {
    if ((r.count++, r.instance === null))
      switch (r.type) {
        case "style":
          var l = n.querySelector('style[data-href~="' + qn(o.href) + '"]');
          if (l) return ((r.instance = l), Pe(l), l);
          var f = y({}, o, {
            "data-href": o.href,
            "data-precedence": o.precedence,
            href: null,
            precedence: null,
          });
          return (
            (l = (n.ownerDocument || n).createElement("style")),
            Pe(l),
            Wt(l, "style", f),
            Du(l, o.precedence, n),
            (r.instance = l)
          );
        case "stylesheet":
          f = So(o.href);
          var p = n.querySelector(Us(f));
          if (p) return ((r.state.loading |= 4), (r.instance = p), Pe(p), p);
          ((l = v0(o)),
            (f = Wn.get(f)) && fh(l, f),
            (p = (n.ownerDocument || n).createElement("link")),
            Pe(p));
          var b = p;
          return (
            (b._p = new Promise(function (R, j) {
              ((b.onload = R), (b.onerror = j));
            })),
            Wt(p, "link", l),
            (r.state.loading |= 4),
            Du(p, o.precedence, n),
            (r.instance = p)
          );
        case "script":
          return (
            (p = _o(o.src)),
            (f = n.querySelector(Ps(p)))
              ? ((r.instance = f), Pe(f), f)
              : ((l = o),
                (f = Wn.get(p)) && ((l = y({}, o)), dh(l, f)),
                (n = n.ownerDocument || n),
                (f = n.createElement("script")),
                Pe(f),
                Wt(f, "link", l),
                n.head.appendChild(f),
                (r.instance = f))
          );
        case "void":
          return null;
        default:
          throw Error(i(443, r.type));
      }
    else
      r.type === "stylesheet" &&
        (r.state.loading & 4) === 0 &&
        ((l = r.instance), (r.state.loading |= 4), Du(l, o.precedence, n));
    return r.instance;
  }
  function Du(n, r, o) {
    for (
      var l = o.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]',
        ),
        f = l.length ? l[l.length - 1] : null,
        p = f,
        b = 0;
      b < l.length;
      b++
    ) {
      var R = l[b];
      if (R.dataset.precedence === r) p = R;
      else if (p !== f) break;
    }
    p
      ? p.parentNode.insertBefore(n, p.nextSibling)
      : ((r = o.nodeType === 9 ? o.head : o), r.insertBefore(n, r.firstChild));
  }
  function fh(n, r) {
    (n.crossOrigin == null && (n.crossOrigin = r.crossOrigin),
      n.referrerPolicy == null && (n.referrerPolicy = r.referrerPolicy),
      n.title == null && (n.title = r.title));
  }
  function dh(n, r) {
    (n.crossOrigin == null && (n.crossOrigin = r.crossOrigin),
      n.referrerPolicy == null && (n.referrerPolicy = r.referrerPolicy),
      n.integrity == null && (n.integrity = r.integrity));
  }
  var Mu = null;
  function w0(n, r, o) {
    if (Mu === null) {
      var l = new Map(),
        f = (Mu = new Map());
      f.set(o, l);
    } else ((f = Mu), (l = f.get(o)), l || ((l = new Map()), f.set(o, l)));
    if (l.has(n)) return l;
    for (
      l.set(n, null), o = o.getElementsByTagName(n), f = 0;
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
        var b = p.getAttribute(r) || "";
        b = n + b;
        var R = l.get(b);
        R ? R.push(p) : l.set(b, [p]);
      }
    }
    return l;
  }
  function S0(n, r, o) {
    ((n = n.ownerDocument || n),
      n.head.insertBefore(
        o,
        r === "title" ? n.querySelector("head > title") : null,
      ));
  }
  function bR(n, r, o) {
    if (o === 1 || r.itemProp != null) return !1;
    switch (n) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof r.precedence != "string" ||
          typeof r.href != "string" ||
          r.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof r.rel != "string" ||
          typeof r.href != "string" ||
          r.href === "" ||
          r.onLoad ||
          r.onError
        )
          break;
        switch (r.rel) {
          case "stylesheet":
            return (
              (n = r.disabled),
              typeof r.precedence == "string" && n == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          r.async &&
          typeof r.async != "function" &&
          typeof r.async != "symbol" &&
          !r.onLoad &&
          !r.onError &&
          r.src &&
          typeof r.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function _0(n) {
    return !(n.type === "stylesheet" && (n.state.loading & 3) === 0);
  }
  var Fs = null;
  function wR() {}
  function SR(n, r, o) {
    if (Fs === null) throw Error(i(475));
    var l = Fs;
    if (
      r.type === "stylesheet" &&
      (typeof o.media != "string" || matchMedia(o.media).matches !== !1) &&
      (r.state.loading & 4) === 0
    ) {
      if (r.instance === null) {
        var f = So(o.href),
          p = n.querySelector(Us(f));
        if (p) {
          ((n = p._p),
            n !== null &&
              typeof n == "object" &&
              typeof n.then == "function" &&
              (l.count++, (l = Nu.bind(l)), n.then(l, l)),
            (r.state.loading |= 4),
            (r.instance = p),
            Pe(p));
          return;
        }
        ((p = n.ownerDocument || n),
          (o = v0(o)),
          (f = Wn.get(f)) && fh(o, f),
          (p = p.createElement("link")),
          Pe(p));
        var b = p;
        ((b._p = new Promise(function (R, j) {
          ((b.onload = R), (b.onerror = j));
        })),
          Wt(p, "link", o),
          (r.instance = p));
      }
      (l.stylesheets === null && (l.stylesheets = new Map()),
        l.stylesheets.set(r, n),
        (n = r.state.preload) &&
          (r.state.loading & 3) === 0 &&
          (l.count++,
          (r = Nu.bind(l)),
          n.addEventListener("load", r),
          n.addEventListener("error", r)));
    }
  }
  function _R() {
    if (Fs === null) throw Error(i(475));
    var n = Fs;
    return (
      n.stylesheets && n.count === 0 && hh(n, n.stylesheets),
      0 < n.count
        ? function (r) {
            var o = setTimeout(function () {
              if ((n.stylesheets && hh(n, n.stylesheets), n.unsuspend)) {
                var l = n.unsuspend;
                ((n.unsuspend = null), l());
              }
            }, 6e4);
            return (
              (n.unsuspend = r),
              function () {
                ((n.unsuspend = null), clearTimeout(o));
              }
            );
          }
        : null
    );
  }
  function Nu() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) hh(this, this.stylesheets);
      else if (this.unsuspend) {
        var n = this.unsuspend;
        ((this.unsuspend = null), n());
      }
    }
  }
  var zu = null;
  function hh(n, r) {
    ((n.stylesheets = null),
      n.unsuspend !== null &&
        (n.count++,
        (zu = new Map()),
        r.forEach(ER, n),
        (zu = null),
        Nu.call(n)));
  }
  function ER(n, r) {
    if (!(r.state.loading & 4)) {
      var o = zu.get(n);
      if (o) var l = o.get(null);
      else {
        ((o = new Map()), zu.set(n, o));
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
            (o.set(b.dataset.precedence, b), (l = b));
        }
        l && o.set(null, l);
      }
      ((f = r.instance),
        (b = f.getAttribute("data-precedence")),
        (p = o.get(b) || l),
        p === l && o.set(null, f),
        o.set(b, f),
        this.count++,
        (l = Nu.bind(this)),
        f.addEventListener("load", l),
        f.addEventListener("error", l),
        p
          ? p.parentNode.insertBefore(f, p.nextSibling)
          : ((n = n.nodeType === 9 ? n.head : n),
            n.insertBefore(f, n.firstChild)),
        (r.state.loading |= 4));
    }
  }
  var Bs = {
    $$typeof: D,
    Provider: null,
    Consumer: null,
    _currentValue: q,
    _currentValue2: q,
    _threadCount: 0,
  };
  function xR(n, r, o, l, f, p, b, R) {
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
      (this.expirationTimes = oi(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = oi(0)),
      (this.hiddenUpdates = oi(null)),
      (this.identifierPrefix = l),
      (this.onUncaughtError = f),
      (this.onCaughtError = p),
      (this.onRecoverableError = b),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = R),
      (this.incompleteTransitions = new Map()));
  }
  function E0(n, r, o, l, f, p, b, R, j, K, re, ue) {
    return (
      (n = new xR(n, r, o, b, R, j, K, ue)),
      (r = 1),
      p === !0 && (r |= 24),
      (p = Mn(3, null, null, r)),
      (n.current = p),
      (p.stateNode = n),
      (r = Yf()),
      r.refCount++,
      (n.pooledCache = r),
      r.refCount++,
      (p.memoizedState = { element: l, isDehydrated: o, cache: r }),
      Jf(p),
      n
    );
  }
  function x0(n) {
    return n ? ((n = Ji), n) : Ji;
  }
  function R0(n, r, o, l, f, p) {
    ((f = x0(f)),
      l.context === null ? (l.context = f) : (l.pendingContext = f),
      (l = wa(r)),
      (l.payload = { element: o }),
      (p = p === void 0 ? null : p),
      p !== null && (l.callback = p),
      (o = Sa(n, l, r)),
      o !== null && (Ln(o, n, r), ys(o, n, r)));
  }
  function O0(n, r) {
    if (((n = n.memoizedState), n !== null && n.dehydrated !== null)) {
      var o = n.retryLane;
      n.retryLane = o !== 0 && o < r ? o : r;
    }
  }
  function mh(n, r) {
    (O0(n, r), (n = n.alternate) && O0(n, r));
  }
  function A0(n) {
    if (n.tag === 13) {
      var r = Xi(n, 67108864);
      (r !== null && Ln(r, n, 67108864), mh(n, 67108864));
    }
  }
  var ku = !0;
  function RR(n, r, o, l) {
    var f = U.T;
    U.T = null;
    var p = ne.p;
    try {
      ((ne.p = 2), ph(n, r, o, l));
    } finally {
      ((ne.p = p), (U.T = f));
    }
  }
  function OR(n, r, o, l) {
    var f = U.T;
    U.T = null;
    var p = ne.p;
    try {
      ((ne.p = 8), ph(n, r, o, l));
    } finally {
      ((ne.p = p), (U.T = f));
    }
  }
  function ph(n, r, o, l) {
    if (ku) {
      var f = yh(l);
      if (f === null) (nh(n, r, l, ju, o), T0(n, l));
      else if (CR(f, n, r, o, l)) l.stopPropagation();
      else if ((T0(n, l), r & 4 && -1 < AR.indexOf(n))) {
        for (; f !== null; ) {
          var p = Je(f);
          if (p !== null)
            switch (p.tag) {
              case 3:
                if (((p = p.stateNode), p.current.memoizedState.isDehydrated)) {
                  var b = Hn(p.pendingLanes);
                  if (b !== 0) {
                    var R = p;
                    for (R.pendingLanes |= 2, R.entangledLanes |= 2; b; ) {
                      var j = 1 << (31 - $t(b));
                      ((R.entanglements[1] |= j), (b &= ~j));
                    }
                    (Er(p), (ot & 6) === 0 && ((vu = Bt() + 500), zs(0)));
                  }
                }
                break;
              case 13:
                ((R = Xi(p, 2)), R !== null && Ln(R, p, 2), wu(), mh(p, 2));
            }
          if (((p = yh(l)), p === null && nh(n, r, l, ju, o), p === f)) break;
          f = p;
        }
        f !== null && l.stopPropagation();
      } else nh(n, r, l, null, o);
    }
  }
  function yh(n) {
    return ((n = Sf(n)), gh(n));
  }
  var ju = null;
  function gh(n) {
    if (((ju = null), (n = Fe(n)), n !== null)) {
      var r = u(n);
      if (r === null) n = null;
      else {
        var o = r.tag;
        if (o === 13) {
          if (((n = c(r)), n !== null)) return n;
          n = null;
        } else if (o === 3) {
          if (r.stateNode.current.memoizedState.isDehydrated)
            return r.tag === 3 ? r.stateNode.containerInfo : null;
          n = null;
        } else r !== n && (n = null);
      }
    }
    return ((ju = n), null);
  }
  function C0(n) {
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
        switch (Jo()) {
          case ti:
            return 2;
          case ni:
            return 8;
          case $n:
          case sr:
            return 32;
          case gr:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var vh = !1,
    ka = null,
    ja = null,
    La = null,
    Vs = new Map(),
    $s = new Map(),
    Ua = [],
    AR =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " ",
      );
  function T0(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        ka = null;
        break;
      case "dragenter":
      case "dragleave":
        ja = null;
        break;
      case "mouseover":
      case "mouseout":
        La = null;
        break;
      case "pointerover":
      case "pointerout":
        Vs.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        $s.delete(r.pointerId);
    }
  }
  function Hs(n, r, o, l, f, p) {
    return n === null || n.nativeEvent !== p
      ? ((n = {
          blockedOn: r,
          domEventName: o,
          eventSystemFlags: l,
          nativeEvent: p,
          targetContainers: [f],
        }),
        r !== null && ((r = Je(r)), r !== null && A0(r)),
        n)
      : ((n.eventSystemFlags |= l),
        (r = n.targetContainers),
        f !== null && r.indexOf(f) === -1 && r.push(f),
        n);
  }
  function CR(n, r, o, l, f) {
    switch (r) {
      case "focusin":
        return ((ka = Hs(ka, n, r, o, l, f)), !0);
      case "dragenter":
        return ((ja = Hs(ja, n, r, o, l, f)), !0);
      case "mouseover":
        return ((La = Hs(La, n, r, o, l, f)), !0);
      case "pointerover":
        var p = f.pointerId;
        return (Vs.set(p, Hs(Vs.get(p) || null, n, r, o, l, f)), !0);
      case "gotpointercapture":
        return (
          (p = f.pointerId),
          $s.set(p, Hs($s.get(p) || null, n, r, o, l, f)),
          !0
        );
    }
    return !1;
  }
  function D0(n) {
    var r = Fe(n.target);
    if (r !== null) {
      var o = u(r);
      if (o !== null) {
        if (((r = o.tag), r === 13)) {
          if (((r = c(o)), r !== null)) {
            ((n.blockedOn = r),
              M(n.priority, function () {
                if (o.tag === 13) {
                  var l = jn();
                  l = H(l);
                  var f = Xi(o, l);
                  (f !== null && Ln(f, o, l), mh(o, l));
                }
              }));
            return;
          }
        } else if (r === 3 && o.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = o.tag === 3 ? o.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function Lu(n) {
    if (n.blockedOn !== null) return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var o = yh(n.nativeEvent);
      if (o === null) {
        o = n.nativeEvent;
        var l = new o.constructor(o.type, o);
        ((wf = l), o.target.dispatchEvent(l), (wf = null));
      } else return ((r = Je(o)), r !== null && A0(r), (n.blockedOn = o), !1);
      r.shift();
    }
    return !0;
  }
  function M0(n, r, o) {
    Lu(n) && o.delete(r);
  }
  function TR() {
    ((vh = !1),
      ka !== null && Lu(ka) && (ka = null),
      ja !== null && Lu(ja) && (ja = null),
      La !== null && Lu(La) && (La = null),
      Vs.forEach(M0),
      $s.forEach(M0));
  }
  function Uu(n, r) {
    n.blockedOn === r &&
      ((n.blockedOn = null),
      vh ||
        ((vh = !0),
        e.unstable_scheduleCallback(e.unstable_NormalPriority, TR)));
  }
  var Pu = null;
  function N0(n) {
    Pu !== n &&
      ((Pu = n),
      e.unstable_scheduleCallback(e.unstable_NormalPriority, function () {
        Pu === n && (Pu = null);
        for (var r = 0; r < n.length; r += 3) {
          var o = n[r],
            l = n[r + 1],
            f = n[r + 2];
          if (typeof l != "function") {
            if (gh(l || o) === null) continue;
            break;
          }
          var p = Je(o);
          p !== null &&
            (n.splice(r, 3),
            (r -= 3),
            gd(p, { pending: !0, data: f, method: o.method, action: l }, l, f));
        }
      }));
  }
  function Zs(n) {
    function r(j) {
      return Uu(j, n);
    }
    (ka !== null && Uu(ka, n),
      ja !== null && Uu(ja, n),
      La !== null && Uu(La, n),
      Vs.forEach(r),
      $s.forEach(r));
    for (var o = 0; o < Ua.length; o++) {
      var l = Ua[o];
      l.blockedOn === n && (l.blockedOn = null);
    }
    for (; 0 < Ua.length && ((o = Ua[0]), o.blockedOn === null); )
      (D0(o), o.blockedOn === null && Ua.shift());
    if (((o = (n.ownerDocument || n).$$reactFormReplay), o != null))
      for (l = 0; l < o.length; l += 3) {
        var f = o[l],
          p = o[l + 1],
          b = f[Z] || null;
        if (typeof p == "function") b || N0(o);
        else if (b) {
          var R = null;
          if (p && p.hasAttribute("formAction")) {
            if (((f = p), (b = p[Z] || null))) R = b.formAction;
            else if (gh(f) !== null) continue;
          } else R = b.action;
          (typeof R == "function" ? (o[l + 1] = R) : (o.splice(l, 3), (l -= 3)),
            N0(o));
        }
      }
  }
  function bh(n) {
    this._internalRoot = n;
  }
  ((Fu.prototype.render = bh.prototype.render =
    function (n) {
      var r = this._internalRoot;
      if (r === null) throw Error(i(409));
      var o = r.current,
        l = jn();
      R0(o, l, n, r, null, null);
    }),
    (Fu.prototype.unmount = bh.prototype.unmount =
      function () {
        var n = this._internalRoot;
        if (n !== null) {
          this._internalRoot = null;
          var r = n.containerInfo;
          (R0(n.current, 2, null, n, null, null), wu(), (r[oe] = null));
        }
      }));
  function Fu(n) {
    this._internalRoot = n;
  }
  Fu.prototype.unstable_scheduleHydration = function (n) {
    if (n) {
      var r = O();
      n = { blockedOn: null, target: n, priority: r };
      for (var o = 0; o < Ua.length && r !== 0 && r < Ua[o].priority; o++);
      (Ua.splice(o, 0, n), o === 0 && D0(n));
    }
  };
  var z0 = t.version;
  if (z0 !== "19.1.1") throw Error(i(527, z0, "19.1.1"));
  ne.findDOMNode = function (n) {
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function"
        ? Error(i(188))
        : ((n = Object.keys(n).join(",")), Error(i(268, n)));
    return (
      (n = m(r)),
      (n = n !== null ? h(n) : null),
      (n = n === null ? null : n.stateNode),
      n
    );
  };
  var DR = {
    bundleType: 0,
    version: "19.1.1",
    rendererPackageName: "react-dom",
    currentDispatcherRef: U,
    reconcilerVersion: "19.1.1",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Bu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Bu.isDisabled && Bu.supportsFiber)
      try {
        ((Vt = Bu.inject(DR)), (yt = Bu));
      } catch {}
  }
  return (
    (qs.createRoot = function (n, r) {
      if (!s(n)) throw Error(i(299));
      var o = !1,
        l = "",
        f = Kg,
        p = Qg,
        b = Xg,
        R = null;
      return (
        r != null &&
          (r.unstable_strictMode === !0 && (o = !0),
          r.identifierPrefix !== void 0 && (l = r.identifierPrefix),
          r.onUncaughtError !== void 0 && (f = r.onUncaughtError),
          r.onCaughtError !== void 0 && (p = r.onCaughtError),
          r.onRecoverableError !== void 0 && (b = r.onRecoverableError),
          r.unstable_transitionCallbacks !== void 0 &&
            (R = r.unstable_transitionCallbacks)),
        (r = E0(n, 1, !1, null, null, o, l, f, p, b, R, null)),
        (n[oe] = r.current),
        th(n),
        new bh(r)
      );
    }),
    (qs.hydrateRoot = function (n, r, o) {
      if (!s(n)) throw Error(i(299));
      var l = !1,
        f = "",
        p = Kg,
        b = Qg,
        R = Xg,
        j = null,
        K = null;
      return (
        o != null &&
          (o.unstable_strictMode === !0 && (l = !0),
          o.identifierPrefix !== void 0 && (f = o.identifierPrefix),
          o.onUncaughtError !== void 0 && (p = o.onUncaughtError),
          o.onCaughtError !== void 0 && (b = o.onCaughtError),
          o.onRecoverableError !== void 0 && (R = o.onRecoverableError),
          o.unstable_transitionCallbacks !== void 0 &&
            (j = o.unstable_transitionCallbacks),
          o.formState !== void 0 && (K = o.formState)),
        (r = E0(n, 1, !0, r, o ?? null, l, f, p, b, R, j, K)),
        (r.context = x0(null)),
        (o = r.current),
        (l = jn()),
        (l = H(l)),
        (f = wa(l)),
        (f.callback = null),
        Sa(o, f, l),
        (o = l),
        (r.current.lanes = o),
        ma(r, o),
        Er(r),
        (n[oe] = r.current),
        th(n),
        new Fu(r)
      );
    }),
    (qs.version = "19.1.1"),
    qs
  );
}
var H0;
function BR() {
  if (H0) return Sh.exports;
  H0 = 1;
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
  return (e(), (Sh.exports = FR()), Sh.exports);
}
var VR = BR(),
  w = $m();
const Re = mw(w),
  yw = NR({ __proto__: null, default: Re }, [w]);
/**
 * react-router v7.9.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var gw = (e) => {
    throw TypeError(e);
  },
  $R = (e, t, a) => t.has(e) || gw("Cannot " + a),
  Oh = (e, t, a) => (
    $R(e, t, "read from private field"),
    a ? a.call(e) : t.get(e)
  ),
  HR = (e, t, a) =>
    t.has(e)
      ? gw("Cannot add the same private member more than once")
      : t instanceof WeakSet
        ? t.add(e)
        : t.set(e, a),
  Z0 = "popstate";
function ZR(e = {}) {
  function t(i, s) {
    let { pathname: u, search: c, hash: d } = i.location;
    return ll(
      "",
      { pathname: u, search: c, hash: d },
      (s.state && s.state.usr) || null,
      (s.state && s.state.key) || "default",
    );
  }
  function a(i, s) {
    return typeof s == "string" ? s : qa(s);
  }
  return qR(t, a, null, e);
}
function Xe(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Nt(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function IR() {
  return Math.random().toString(36).substring(2, 10);
}
function I0(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function ll(e, t, a = null, i) {
  return {
    pathname: typeof e == "string" ? e : e.pathname,
    search: "",
    hash: "",
    ...(typeof t == "string" ? Xa(t) : t),
    state: a,
    key: (t && t.key) || i || IR(),
  };
}
function qa({ pathname: e = "/", search: t = "", hash: a = "" }) {
  return (
    t && t !== "?" && (e += t.charAt(0) === "?" ? t : "?" + t),
    a && a !== "#" && (e += a.charAt(0) === "#" ? a : "#" + a),
    e
  );
}
function Xa(e) {
  let t = {};
  if (e) {
    let a = e.indexOf("#");
    a >= 0 && ((t.hash = e.substring(a)), (e = e.substring(0, a)));
    let i = e.indexOf("?");
    (i >= 0 && ((t.search = e.substring(i)), (e = e.substring(0, i))),
      e && (t.pathname = e));
  }
  return t;
}
function qR(e, t, a, i = {}) {
  let { window: s = document.defaultView, v5Compat: u = !1 } = i,
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
    let F = ll(E.location, x, T);
    h = y() + 1;
    let D = I0(F, h),
      B = E.createHref(F);
    try {
      c.pushState(D, "", B);
    } catch (L) {
      if (L instanceof DOMException && L.name === "DataCloneError") throw L;
      s.location.assign(B);
    }
    u && m && m({ action: d, location: E.location, delta: 1 });
  }
  function _(x, T) {
    d = "REPLACE";
    let F = ll(E.location, x, T);
    h = y();
    let D = I0(F, h),
      B = E.createHref(F);
    (c.replaceState(D, "", B),
      u && m && m({ action: d, location: E.location, delta: 0 }));
  }
  function S(x) {
    return vw(x);
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
        s.addEventListener(Z0, g),
        (m = x),
        () => {
          (s.removeEventListener(Z0, g), (m = null));
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
function vw(e, t = !1) {
  let a = "http://localhost";
  (typeof window < "u" &&
    (a =
      window.location.origin !== "null"
        ? window.location.origin
        : window.location.href),
    Xe(a, "No window.location.(origin|href) available to create URL"));
  let i = typeof e == "string" ? e : qa(e);
  return (
    (i = i.replace(/ $/, "%20")),
    !t && i.startsWith("//") && (i = a + i),
    new URL(i, a)
  );
}
var Ws,
  q0 = class {
    constructor(e) {
      if ((HR(this, Ws, new Map()), e)) for (let [t, a] of e) this.set(t, a);
    }
    get(e) {
      if (Oh(this, Ws).has(e)) return Oh(this, Ws).get(e);
      if (e.defaultValue !== void 0) return e.defaultValue;
      throw new Error("No value found for context");
    }
    set(e, t) {
      Oh(this, Ws).set(e, t);
    }
  };
Ws = new WeakMap();
var GR = new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);
function YR(e) {
  return GR.has(e);
}
var KR = new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "middleware",
  "children",
]);
function QR(e) {
  return KR.has(e);
}
function XR(e) {
  return e.index === !0;
}
function ul(e, t, a = [], i = {}, s = !1) {
  return e.map((u, c) => {
    let d = [...a, String(c)],
      m = typeof u.id == "string" ? u.id : d.join("-");
    if (
      (Xe(
        u.index !== !0 || !u.children,
        "Cannot specify children on an index route",
      ),
      Xe(
        s || !i[m],
        `Found a route id collision on id "${m}".  Route id's must be globally unique within Data Router usages`,
      ),
      XR(u))
    ) {
      let h = { ...u, ...t(u), id: m };
      return ((i[m] = h), h);
    } else {
      let h = { ...u, ...t(u), id: m, children: void 0 };
      return (
        (i[m] = h),
        u.children && (h.children = ul(u.children, t, d, i, s)),
        h
      );
    }
  });
}
function Za(e, t, a = "/") {
  return sc(e, t, a, !1);
}
function sc(e, t, a, i) {
  let s = typeof t == "string" ? Xa(t) : t,
    u = ar(s.pathname || "/", a);
  if (u == null) return null;
  let c = bw(e);
  WR(c);
  let d = null;
  for (let m = 0; d == null && m < c.length; ++m) {
    let h = cO(u);
    d = lO(c[m], h, i);
  }
  return d;
}
function JR(e, t) {
  let { route: a, pathname: i, params: s } = e;
  return {
    id: a.id,
    pathname: i,
    params: s,
    data: t[a.id],
    loaderData: t[a.id],
    handle: a.handle,
  };
}
function bw(e, t = [], a = [], i = "", s = !1) {
  let u = (c, d, m = s, h) => {
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
    let g = Tr([i, y.relativePath]),
      v = a.concat(y);
    (c.children &&
      c.children.length > 0 &&
      (Xe(
        c.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${g}".`,
      ),
      bw(c.children, t, v, g, m)),
      !(c.path == null && !c.index) &&
        t.push({ path: g, score: oO(g, c.index), routesMeta: v }));
  };
  return (
    e.forEach((c, d) => {
      if (c.path === "" || !c.path?.includes("?")) u(c, d);
      else for (let m of ww(c.path)) u(c, d, !0, m);
    }),
    t
  );
}
function ww(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [a, ...i] = t,
    s = a.endsWith("?"),
    u = a.replace(/\?$/, "");
  if (i.length === 0) return s ? [u, ""] : [u];
  let c = ww(i.join("/")),
    d = [];
  return (
    d.push(...c.map((m) => (m === "" ? u : [u, m].join("/")))),
    s && d.push(...c),
    d.map((m) => (e.startsWith("/") && m === "" ? "/" : m))
  );
}
function WR(e) {
  e.sort((t, a) =>
    t.score !== a.score
      ? a.score - t.score
      : sO(
          t.routesMeta.map((i) => i.childrenIndex),
          a.routesMeta.map((i) => i.childrenIndex),
        ),
  );
}
var eO = /^:[\w-]+$/,
  tO = 3,
  nO = 2,
  rO = 1,
  aO = 10,
  iO = -2,
  G0 = (e) => e === "*";
function oO(e, t) {
  let a = e.split("/"),
    i = a.length;
  return (
    a.some(G0) && (i += iO),
    t && (i += nO),
    a
      .filter((s) => !G0(s))
      .reduce((s, u) => s + (eO.test(u) ? tO : u === "" ? rO : aO), i)
  );
}
function sO(e, t) {
  return e.length === t.length && e.slice(0, -1).every((i, s) => i === t[s])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function lO(e, t, a = !1) {
  let { routesMeta: i } = e,
    s = {},
    u = "/",
    c = [];
  for (let d = 0; d < i.length; ++d) {
    let m = i[d],
      h = d === i.length - 1,
      y = u === "/" ? t : t.slice(u.length) || "/",
      g = wc(
        { path: m.relativePath, caseSensitive: m.caseSensitive, end: h },
        y,
      ),
      v = m.route;
    if (
      (!g &&
        h &&
        a &&
        !i[i.length - 1].route.index &&
        (g = wc(
          { path: m.relativePath, caseSensitive: m.caseSensitive, end: !1 },
          y,
        )),
      !g)
    )
      return null;
    (Object.assign(s, g.params),
      c.push({
        params: s,
        pathname: Tr([u, g.pathname]),
        pathnameBase: mO(Tr([u, g.pathnameBase])),
        route: v,
      }),
      g.pathnameBase !== "/" && (u = Tr([u, g.pathnameBase])));
  }
  return c;
}
function wc(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [a, i] = uO(e.path, e.caseSensitive, e.end),
    s = t.match(a);
  if (!s) return null;
  let u = s[0],
    c = u.replace(/(.)\/+$/, "$1"),
    d = s.slice(1);
  return {
    params: i.reduce((h, { paramName: y, isOptional: g }, v) => {
      if (y === "*") {
        let S = d[v] || "";
        c = u.slice(0, u.length - S.length).replace(/(.)\/+$/, "$1");
      }
      const _ = d[v];
      return (
        g && !_ ? (h[y] = void 0) : (h[y] = (_ || "").replace(/%2F/g, "/")),
        h
      );
    }, {}),
    pathname: u,
    pathnameBase: c,
    pattern: e,
  };
}
function uO(e, t = !1, a = !0) {
  Nt(
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
      : a
        ? (s += "\\/*$")
        : e !== "" && e !== "/" && (s += "(?:(?=\\/|$))"),
    [new RegExp(s, t ? void 0 : "i"), i]
  );
}
function cO(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      Nt(
        !1,
        `The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`,
      ),
      e
    );
  }
}
function ar(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let a = t.endsWith("/") ? t.length - 1 : t.length,
    i = e.charAt(a);
  return i && i !== "/" ? null : e.slice(a) || "/";
}
function fO({ basename: e, pathname: t }) {
  return t === "/" ? e : Tr([e, t]);
}
function dO(e, t = "/") {
  let {
    pathname: a,
    search: i = "",
    hash: s = "",
  } = typeof e == "string" ? Xa(e) : e;
  return {
    pathname: a ? (a.startsWith("/") ? a : hO(a, t)) : t,
    search: pO(i),
    hash: yO(s),
  };
}
function hO(e, t) {
  let a = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((s) => {
      s === ".." ? a.length > 1 && a.pop() : s !== "." && a.push(s);
    }),
    a.length > 1 ? a.join("/") : "/"
  );
}
function Ah(e, t, a, i) {
  return `Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${a}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function Sw(e) {
  return e.filter(
    (t, a) => a === 0 || (t.route.path && t.route.path.length > 0),
  );
}
function Hm(e) {
  let t = Sw(e);
  return t.map((a, i) => (i === t.length - 1 ? a.pathname : a.pathnameBase));
}
function Zm(e, t, a, i = !1) {
  let s;
  typeof e == "string"
    ? (s = Xa(e))
    : ((s = { ...e }),
      Xe(
        !s.pathname || !s.pathname.includes("?"),
        Ah("?", "pathname", "search", s),
      ),
      Xe(
        !s.pathname || !s.pathname.includes("#"),
        Ah("#", "pathname", "hash", s),
      ),
      Xe(!s.search || !s.search.includes("#"), Ah("#", "search", "hash", s)));
  let u = e === "" || s.pathname === "",
    c = u ? "/" : s.pathname,
    d;
  if (c == null) d = a;
  else {
    let g = t.length - 1;
    if (!i && c.startsWith("..")) {
      let v = c.split("/");
      for (; v[0] === ".."; ) (v.shift(), (g -= 1));
      s.pathname = v.join("/");
    }
    d = g >= 0 ? t[g] : "/";
  }
  let m = dO(s, d),
    h = c && c !== "/" && c.endsWith("/"),
    y = (u || c === ".") && a.endsWith("/");
  return (!m.pathname.endsWith("/") && (h || y) && (m.pathname += "/"), m);
}
var Tr = (e) => e.join("/").replace(/\/\/+/g, "/"),
  mO = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  pO = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  yO = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e),
  Sc = class {
    constructor(e, t, a, i = !1) {
      ((this.status = e),
        (this.statusText = t || ""),
        (this.internal = i),
        a instanceof Error
          ? ((this.data = a.toString()), (this.error = a))
          : (this.data = a));
    }
  };
function cl(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
var _w = ["POST", "PUT", "PATCH", "DELETE"],
  gO = new Set(_w),
  vO = ["GET", ..._w],
  bO = new Set(vO),
  wO = new Set([301, 302, 303, 307, 308]),
  SO = new Set([307, 308]),
  Ch = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  _O = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  Gs = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 },
  EO = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Im = (e) => EO.test(e),
  xO = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
  Ew = "remix-router-transitions",
  xw = Symbol("ResetLoaderData");
function RO(e) {
  const t = e.window ? e.window : typeof window < "u" ? window : void 0,
    a =
      typeof t < "u" &&
      typeof t.document < "u" &&
      typeof t.document.createElement < "u";
  Xe(
    e.routes.length > 0,
    "You must provide a non-empty routes array to createRouter",
  );
  let i = e.hydrationRouteProperties || [],
    s = e.mapRouteProperties || xO,
    u = {},
    c = ul(e.routes, s, void 0, u),
    d,
    m = e.basename || "/";
  m.startsWith("/") || (m = `/${m}`);
  let h = e.dataStrategy || DO,
    y = { ...e.future },
    g = null,
    v = new Set(),
    _ = null,
    S = null,
    E = null,
    x = e.hydrationData != null,
    T = Za(c, e.history.location, m),
    F = !1,
    D = null,
    B;
  if (T == null && !e.patchRoutesOnNavigation) {
    let O = er(404, { pathname: e.history.location.pathname }),
      { matches: M, route: z } = Vu(c);
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
        B = T.slice(0, z + 1).every(($) => !rm($.route, O, M));
      } else B = T.every((z) => !rm(z.route, O, M));
    }
  else {
    ((B = !1), (T = []));
    let O = A(null, c, e.history.location.pathname);
    O.active && O.matches && ((F = !0), (T = O.matches));
  }
  let L,
    C = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: T,
      initialized: B,
      navigation: Ch,
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
        Nt(
          ve.size === 0 || z != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.",
        );
        let $ = ii({
          currentLocation: C.location,
          nextLocation: M,
          historyAction: O,
        });
        if ($ && z != null) {
          let Z = new Promise((oe) => {
            ke = oe;
          });
          (e.history.go(z * -1),
            Cn($, {
              state: "blocked",
              location: M,
              proceed() {
                (Cn($, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: M,
                }),
                  Z.then(() => e.history.go(z)));
              },
              reset() {
                let oe = new Map(C.blockers);
                (oe.set($, Gs), at({ blockers: oe }));
              },
            }));
          return;
        }
        return cn(O, M);
      })),
      a)
    ) {
      IO(t, we);
      let O = () => qO(t, we);
      (t.addEventListener("pagehide", O),
        (be = () => t.removeEventListener("pagehide", O)));
    }
    return (
      C.initialized || cn("POP", C.location, { initialHydration: !0 }),
      L
    );
  }
  function qe() {
    (g && g(),
      be && be(),
      v.clear(),
      me && me.abort(),
      C.fetchers.forEach((O, M) => $t(M)),
      C.blockers.forEach((O, M) => Fr(M)));
  }
  function gt(O) {
    return (v.add(O), () => v.delete(O));
  }
  function at(O, M = {}) {
    (O.matches &&
      (O.matches = O.matches.map((Z) => {
        let oe = u[Z.route.id],
          de = Z.route;
        return de.element !== oe.element ||
          de.errorElement !== oe.errorElement ||
          de.hydrateFallbackElement !== oe.hydrateFallbackElement
          ? { ...Z, route: oe }
          : Z;
      })),
      (C = { ...C, ...O }));
    let z = [],
      $ = [];
    (C.fetchers.forEach((Z, oe) => {
      Z.state === "idle" && (le.has(oe) ? z.push(oe) : $.push(oe));
    }),
      le.forEach((Z) => {
        !C.fetchers.has(Z) && !U.has(Z) && z.push(Z);
      }),
      [...v].forEach((Z) =>
        Z(C, {
          deletedFetchers: z,
          viewTransitionOpts: M.viewTransitionOpts,
          flushSync: M.flushSync === !0,
        }),
      ),
      z.forEach((Z) => $t(Z)),
      $.forEach((Z) => C.fetchers.delete(Z)));
  }
  function ut(O, M, { flushSync: z } = {}) {
    let $ =
        C.actionData != null &&
        C.navigation.formMethod != null &&
        En(C.navigation.formMethod) &&
        C.navigation.state === "loading" &&
        O.state?._isRedirect !== !0,
      Z;
    M.actionData
      ? Object.keys(M.actionData).length > 0
        ? (Z = M.actionData)
        : (Z = null)
      : $
        ? (Z = C.actionData)
        : (Z = null);
    let oe = M.loaderData
        ? rb(C.loaderData, M.loaderData, M.matches || [], M.errors)
        : C.loaderData,
      de = C.blockers;
    de.size > 0 && ((de = new Map(de)), de.forEach((_e, Ae) => de.set(Ae, Gs)));
    let ye = Se ? !1 : si(O, M.matches || C.matches),
      Ee =
        Q === !0 ||
        (C.navigation.formMethod != null &&
          En(C.navigation.formMethod) &&
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
        actionData: Z,
        loaderData: oe,
        historyAction: Y,
        location: O,
        initialized: !0,
        navigation: Ch,
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
  async function Qt(O, M) {
    if (typeof O == "number") {
      e.history.go(O);
      return;
    }
    let z = nm(C.location, C.matches, m, O, M?.fromRouteId, M?.relative),
      { path: $, submission: Z, error: oe } = Y0(!1, z, M),
      de = C.location,
      ye = ll(C.location, $, M && M.state);
    ye = { ...ye, ...e.history.encodeLocation(ye) };
    let Ee = M && M.replace != null ? M.replace : void 0,
      xe = "PUSH";
    Ee === !0
      ? (xe = "REPLACE")
      : Ee === !1 ||
        (Z != null &&
          En(Z.formMethod) &&
          Z.formAction === C.location.pathname + C.location.search &&
          (xe = "REPLACE"));
    let _e =
        M && "preventScrollReset" in M ? M.preventScrollReset === !0 : void 0,
      Ae = (M && M.flushSync) === !0,
      Fe = ii({ currentLocation: de, nextLocation: ye, historyAction: xe });
    if (Fe) {
      Cn(Fe, {
        state: "blocked",
        location: ye,
        proceed() {
          (Cn(Fe, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: ye,
          }),
            Qt(O, M));
        },
        reset() {
          let Je = new Map(C.blockers);
          (Je.set(Fe, Gs), at({ blockers: Je }));
        },
      });
      return;
    }
    await cn(xe, ye, {
      submission: Z,
      pendingError: oe,
      preventScrollReset: _e,
      replace: M && M.replace,
      enableViewTransition: M && M.viewTransition,
      flushSync: Ae,
    });
  }
  function Vn() {
    (Oe || (Oe = GO()), Ur(), at({ revalidation: "loading" }));
    let O = Oe.promise;
    return C.navigation.state === "submitting"
      ? O
      : C.navigation.state === "idle"
        ? (cn(C.historyAction, C.location, {
            startUninterruptedRevalidation: !0,
          }),
          O)
        : (cn(Y || C.historyAction, C.navigation.location, {
            overrideNavigation: C.navigation,
            enableViewTransition: pe === !0,
          }),
          O);
  }
  async function cn(O, M, z) {
    (me && me.abort(),
      (me = null),
      (Y = O),
      (Se = (z && z.startUninterruptedRevalidation) === !0),
      ma(C.location, C.matches),
      (Q = (z && z.preventScrollReset) === !0),
      (pe = (z && z.enableViewTransition) === !0));
    let $ = d || c,
      Z = z && z.overrideNavigation,
      oe =
        z?.initialHydration && C.matches && C.matches.length > 0 && !F
          ? C.matches
          : Za($, M, m),
      de = (z && z.flushSync) === !0;
    if (
      oe &&
      C.initialized &&
      !ce &&
      PO(C.location, M) &&
      !(z && z.submission && En(z.submission.formMethod))
    ) {
      ut(M, { matches: oe }, { flushSync: de });
      return;
    }
    let ye = A(oe, $, M.pathname);
    if ((ye.active && ye.matches && (oe = ye.matches), !oe)) {
      let { error: vt, notFoundMatches: Pe, route: ct } = ha(M.pathname);
      ut(
        M,
        { matches: Pe, loaderData: {}, errors: { [ct.id]: vt } },
        { flushSync: de },
      );
      return;
    }
    me = new AbortController();
    let Ee = To(e.history, M, me.signal, z && z.submission),
      xe = e.getContext ? await e.getContext() : new q0(),
      _e;
    if (z && z.pendingError)
      _e = [Ia(oe).route.id, { type: "error", error: z.pendingError }];
    else if (z && z.submission && En(z.submission.formMethod)) {
      let vt = await Fi(
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
        if (Un(ct) && cl(ct.error) && ct.error.status === 404) {
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
        (Z = Th(M, z.submission)),
        (de = !1),
        (ye.active = !1),
        (Ee = To(e.history, Ee.url, Ee.signal)));
    }
    let {
      shortCircuited: Ae,
      matches: Fe,
      loaderData: Je,
      errors: it,
    } = await Bi(
      Ee,
      M,
      oe,
      xe,
      ye.active,
      Z,
      z && z.submission,
      z && z.fetcherSubmission,
      z && z.replace,
      z && z.initialHydration === !0,
      de,
      _e,
    );
    Ae ||
      ((me = null),
      ut(M, { matches: Fe || oe, ...ab(_e), loaderData: Je, errors: it }));
  }
  async function Fi(O, M, z, $, Z, oe, de, ye = {}) {
    Ur();
    let Ee = HO(M, z);
    if ((at({ navigation: Ee }, { flushSync: ye.flushSync === !0 }), oe)) {
      let Ae = await P($, M.pathname, O.signal);
      if (Ae.type === "aborted") return { shortCircuited: !0 };
      if (Ae.type === "error") {
        if (Ae.partialMatches.length === 0) {
          let { matches: Je, route: it } = Vu(c);
          return {
            matches: Je,
            pendingActionResult: [it.id, { type: "error", error: Ae.error }],
          };
        }
        let Fe = Ia(Ae.partialMatches).route.id;
        return {
          matches: Ae.partialMatches,
          pendingActionResult: [Fe, { type: "error", error: Ae.error }],
        };
      } else if (Ae.matches) $ = Ae.matches;
      else {
        let { notFoundMatches: Fe, error: Je, route: it } = ha(M.pathname);
        return {
          matches: Fe,
          pendingActionResult: [it.id, { type: "error", error: Je }],
        };
      }
    }
    let xe,
      _e = lc($, M);
    if (!_e.route.action && !_e.route.lazy)
      xe = {
        type: "error",
        error: er(405, {
          method: O.method,
          pathname: M.pathname,
          routeId: _e.route.id,
        }),
      };
    else {
      let Ae = Do(s, u, O, $, _e, de ? [] : i, Z),
        Fe = await gr(O, Ae, Z, null);
      if (((xe = Fe[_e.route.id]), !xe)) {
        for (let Je of $)
          if (Fe[Je.route.id]) {
            xe = Fe[Je.route.id];
            break;
          }
      }
      if (O.signal.aborted) return { shortCircuited: !0 };
    }
    if (Ri(xe)) {
      let Ae;
      return (
        ye && ye.replace != null
          ? (Ae = ye.replace)
          : (Ae =
              eb(xe.response.headers.get("Location"), new URL(O.url), m) ===
              C.location.pathname + C.location.search),
        await sr(O, xe, !0, { submission: z, replace: Ae }),
        { shortCircuited: !0 }
      );
    }
    if (Un(xe)) {
      let Ae = Ia($, _e.route.id);
      return (
        (ye && ye.replace) !== !0 && (Y = "PUSH"),
        { matches: $, pendingActionResult: [Ae.route.id, xe, _e.route.id] }
      );
    }
    return { matches: $, pendingActionResult: [_e.route.id, xe] };
  }
  async function Bi(O, M, z, $, Z, oe, de, ye, Ee, xe, _e, Ae) {
    let Fe = oe || Th(M, de),
      Je = de || ye || ob(Fe),
      it = !Se && !xe;
    if (Z) {
      if (it) {
        let kt = Bt(Ae);
        at(
          { navigation: Fe, ...(kt !== void 0 ? { actionData: kt } : {}) },
          { flushSync: _e },
        );
      }
      let Be = await P(z, M.pathname, O.signal);
      if (Be.type === "aborted") return { shortCircuited: !0 };
      if (Be.type === "error") {
        if (Be.partialMatches.length === 0) {
          let { matches: Hr, route: vn } = Vu(c);
          return { matches: Hr, loaderData: {}, errors: { [vn.id]: Be.error } };
        }
        let kt = Ia(Be.partialMatches).route.id;
        return {
          matches: Be.partialMatches,
          loaderData: {},
          errors: { [kt]: Be.error },
        };
      } else if (Be.matches) z = Be.matches;
      else {
        let { error: kt, notFoundMatches: Hr, route: vn } = ha(M.pathname);
        return { matches: Hr, loaderData: {}, errors: { [vn.id]: kt } };
      }
    }
    let vt = d || c,
      { dsMatches: Pe, revalidatingFetchers: ct } = K0(
        O,
        $,
        s,
        u,
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
      let Be = lr();
      return (
        ut(
          M,
          {
            matches: z,
            loaderData: {},
            errors: Ae && Un(Ae[1]) ? { [Ae[0]]: Ae[1].error } : null,
            ...ab(Ae),
            ...(Be ? { fetchers: new Map(C.fetchers) } : {}),
          },
          { flushSync: _e },
        ),
        { shortCircuited: !0 }
      );
    }
    if (it) {
      let Be = {};
      if (!Z) {
        Be.navigation = Fe;
        let kt = Bt(Ae);
        kt !== void 0 && (Be.actionData = kt);
      }
      (ct.length > 0 && (Be.fetchers = Jo(ct)), at(Be, { flushSync: _e }));
    }
    ct.forEach((Be) => {
      (An(Be.key), Be.controller && U.set(Be.key, Be.controller));
    });
    let vr = () => ct.forEach((Be) => An(Be.key));
    me && me.signal.addEventListener("abort", vr);
    let { loaderResults: Tn, fetcherResults: fn } = await ri(Pe, ct, O, $);
    if (O.signal.aborted) return { shortCircuited: !0 };
    (me && me.signal.removeEventListener("abort", vr),
      ct.forEach((Be) => U.delete(Be.key)));
    let Zn = $u(Tn);
    if (Zn)
      return (
        await sr(O, Zn.result, !0, { replace: Ee }),
        { shortCircuited: !0 }
      );
    if (((Zn = $u(fn)), Zn))
      return (
        N.add(Zn.key),
        await sr(O, Zn.result, !0, { replace: Ee }),
        { shortCircuited: !0 }
      );
    let { loaderData: $i, errors: pa } = nb(C, z, Tn, Ae, ct, fn);
    xe && C.errors && (pa = { ...C.errors, ...pa });
    let Br = lr(),
      Vr = Pr(q),
      $r = Br || Vr || ct.length > 0;
    return {
      matches: z,
      loaderData: $i,
      errors: pa,
      ...($r ? { fetchers: new Map(C.fetchers) } : {}),
    };
  }
  function Bt(O) {
    if (O && !Un(O[1])) return { [O[0]]: O[1].data };
    if (C.actionData)
      return Object.keys(C.actionData).length === 0 ? null : C.actionData;
  }
  function Jo(O) {
    return (
      O.forEach((M) => {
        let z = C.fetchers.get(M.key),
          $ = Ys(void 0, z ? z.data : void 0);
        C.fetchers.set(M.key, $);
      }),
      new Map(C.fetchers)
    );
  }
  async function ti(O, M, z, $) {
    An(O);
    let Z = ($ && $.flushSync) === !0,
      oe = d || c,
      de = nm(C.location, C.matches, m, z, M, $?.relative),
      ye = Za(oe, de, m),
      Ee = A(ye, oe, de);
    if ((Ee.active && Ee.matches && (ye = Ee.matches), !ye)) {
      yt(O, M, er(404, { pathname: de }), { flushSync: Z });
      return;
    }
    let { path: xe, submission: _e, error: Ae } = Y0(!0, de, $);
    if (Ae) {
      yt(O, M, Ae, { flushSync: Z });
      return;
    }
    let Fe = e.getContext ? await e.getContext() : new q0(),
      Je = ($ && $.preventScrollReset) === !0;
    if (_e && En(_e.formMethod)) {
      await ni(O, M, xe, ye, Fe, Ee.active, Z, Je, _e);
      return;
    }
    (W.set(O, { routeId: M, path: xe }),
      await $n(O, M, xe, ye, Fe, Ee.active, Z, Je, _e));
  }
  async function ni(O, M, z, $, Z, oe, de, ye, Ee) {
    (Ur(), W.delete(O));
    let xe = C.fetchers.get(O);
    Vt(O, ZO(Ee, xe), { flushSync: de });
    let _e = new AbortController(),
      Ae = To(e.history, z, _e.signal, Ee);
    if (oe) {
      let _t = await P($, new URL(Ae.url).pathname, Ae.signal, O);
      if (_t.type === "aborted") return;
      if (_t.type === "error") {
        yt(O, M, _t.error, { flushSync: de });
        return;
      } else if (_t.matches) $ = _t.matches;
      else {
        yt(O, M, er(404, { pathname: z }), { flushSync: de });
        return;
      }
    }
    let Fe = lc($, z);
    if (!Fe.route.action && !Fe.route.lazy) {
      let _t = er(405, { method: Ee.formMethod, pathname: z, routeId: M });
      yt(O, M, _t, { flushSync: de });
      return;
    }
    U.set(O, _e);
    let Je = ne,
      it = Do(s, u, Ae, $, Fe, i, Z),
      Pe = (await gr(Ae, it, Z, O))[Fe.route.id];
    if (Ae.signal.aborted) {
      U.get(O) === _e && U.delete(O);
      return;
    }
    if (le.has(O)) {
      if (Ri(Pe) || Un(Pe)) {
        Vt(O, Ba(void 0));
        return;
      }
    } else {
      if (Ri(Pe))
        if ((U.delete(O), q > Je)) {
          Vt(O, Ba(void 0));
          return;
        } else
          return (
            N.add(O),
            Vt(O, Ys(Ee)),
            sr(Ae, Pe, !1, { fetcherSubmission: Ee, preventScrollReset: ye })
          );
      if (Un(Pe)) {
        yt(O, M, Pe.error);
        return;
      }
    }
    let ct = C.navigation.location || C.location,
      vr = To(e.history, ct, _e.signal),
      Tn = d || c,
      fn =
        C.navigation.state !== "idle"
          ? Za(Tn, C.navigation.location, m)
          : C.matches;
    Xe(fn, "Didn't find any matches after fetcher action");
    let Zn = ++ne;
    ie.set(O, Zn);
    let $i = Ys(Ee, Pe.data);
    C.fetchers.set(O, $i);
    let { dsMatches: pa, revalidatingFetchers: Br } = K0(
      vr,
      Z,
      s,
      u,
      e.history,
      C,
      fn,
      Ee,
      ct,
      i,
      !1,
      ce,
      ge,
      le,
      W,
      N,
      Tn,
      m,
      e.patchRoutesOnNavigation != null,
      [Fe.route.id, Pe],
    );
    (Br.filter((_t) => _t.key !== O).forEach((_t) => {
      let ya = _t.key,
        Ml = C.fetchers.get(ya),
        Nl = Ys(void 0, Ml ? Ml.data : void 0);
      (C.fetchers.set(ya, Nl),
        An(ya),
        _t.controller && U.set(ya, _t.controller));
    }),
      at({ fetchers: new Map(C.fetchers) }));
    let Vr = () => Br.forEach((_t) => An(_t.key));
    _e.signal.addEventListener("abort", Vr);
    let { loaderResults: $r, fetcherResults: Be } = await ri(pa, Br, vr, Z);
    if (_e.signal.aborted) return;
    if (
      (_e.signal.removeEventListener("abort", Vr),
      ie.delete(O),
      U.delete(O),
      Br.forEach((_t) => U.delete(_t.key)),
      C.fetchers.has(O))
    ) {
      let _t = Ba(Pe.data);
      C.fetchers.set(O, _t);
    }
    let kt = $u($r);
    if (kt) return sr(vr, kt.result, !1, { preventScrollReset: ye });
    if (((kt = $u(Be)), kt))
      return (N.add(kt.key), sr(vr, kt.result, !1, { preventScrollReset: ye }));
    let { loaderData: Hr, errors: vn } = nb(C, fn, $r, void 0, Br, Be);
    (Pr(Zn),
      C.navigation.state === "loading" && Zn > q
        ? (Xe(Y, "Expected pending action"),
          me && me.abort(),
          ut(C.navigation.location, {
            matches: fn,
            loaderData: Hr,
            errors: vn,
            fetchers: new Map(C.fetchers),
          }))
        : (at({
            errors: vn,
            loaderData: rb(C.loaderData, Hr, fn, vn),
            fetchers: new Map(C.fetchers),
          }),
          (ce = !1)));
  }
  async function $n(O, M, z, $, Z, oe, de, ye, Ee) {
    let xe = C.fetchers.get(O);
    Vt(O, Ys(Ee, xe ? xe.data : void 0), { flushSync: de });
    let _e = new AbortController(),
      Ae = To(e.history, z, _e.signal);
    if (oe) {
      let ct = await P($, new URL(Ae.url).pathname, Ae.signal, O);
      if (ct.type === "aborted") return;
      if (ct.type === "error") {
        yt(O, M, ct.error, { flushSync: de });
        return;
      } else if (ct.matches) $ = ct.matches;
      else {
        yt(O, M, er(404, { pathname: z }), { flushSync: de });
        return;
      }
    }
    let Fe = lc($, z);
    U.set(O, _e);
    let Je = ne,
      it = Do(s, u, Ae, $, Fe, i, Z),
      Pe = (await gr(Ae, it, Z, O))[Fe.route.id];
    if ((U.get(O) === _e && U.delete(O), !Ae.signal.aborted)) {
      if (le.has(O)) {
        Vt(O, Ba(void 0));
        return;
      }
      if (Ri(Pe))
        if (q > Je) {
          Vt(O, Ba(void 0));
          return;
        } else {
          (N.add(O), await sr(Ae, Pe, !1, { preventScrollReset: ye }));
          return;
        }
      if (Un(Pe)) {
        yt(O, M, Pe.error);
        return;
      }
      Vt(O, Ba(Pe.data));
    }
  }
  async function sr(
    O,
    M,
    z,
    {
      submission: $,
      fetcherSubmission: Z,
      preventScrollReset: oe,
      replace: de,
    } = {},
  ) {
    M.response.headers.has("X-Remix-Revalidate") && (ce = !0);
    let ye = M.response.headers.get("Location");
    (Xe(ye, "Expected a Location header on the redirect Response"),
      (ye = eb(ye, new URL(O.url), m)));
    let Ee = ll(C.location, ye, { _isRedirect: !0 });
    if (a) {
      let it = !1;
      if (M.response.headers.has("X-Remix-Reload-Document")) it = !0;
      else if (Im(ye)) {
        const vt = vw(ye, !0);
        it = vt.origin !== t.location.origin || ar(vt.pathname, m) == null;
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
    !$ && !Z && _e && Ae && Fe && ($ = ob(C.navigation));
    let Je = $ || Z;
    if (SO.has(M.response.status) && Je && En(Je.formMethod))
      await cn(xe, Ee, {
        submission: { ...Je, formAction: ye },
        preventScrollReset: oe || Q,
        enableViewTransition: z ? pe : void 0,
      });
    else {
      let it = Th(Ee, $);
      await cn(xe, Ee, {
        overrideNavigation: it,
        fetcherSubmission: Z,
        preventScrollReset: oe || Q,
        enableViewTransition: z ? pe : void 0,
      });
    }
  }
  async function gr(O, M, z, $) {
    let Z,
      oe = {};
    try {
      Z = await NO(h, O, M, $, z, !1);
    } catch (de) {
      return (
        M.filter((ye) => ye.shouldLoad).forEach((ye) => {
          oe[ye.route.id] = { type: "error", error: de };
        }),
        oe
      );
    }
    if (O.signal.aborted) return oe;
    for (let [de, ye] of Object.entries(Z))
      if (VO(ye)) {
        let Ee = ye.result;
        oe[de] = { type: "redirect", response: LO(Ee, O, de, M, m) };
      } else oe[de] = await jO(ye);
    return oe;
  }
  async function ri(O, M, z, $) {
    let Z = gr(z, O, $, null),
      oe = Promise.all(
        M.map(async (Ee) => {
          if (Ee.matches && Ee.match && Ee.request && Ee.controller) {
            let _e = (await gr(Ee.request, Ee.matches, $, Ee.key))[
              Ee.match.route.id
            ];
            return { [Ee.key]: _e };
          } else
            return Promise.resolve({
              [Ee.key]: {
                type: "error",
                error: er(404, { pathname: Ee.path }),
              },
            });
        }),
      ),
      de = await Z,
      ye = (await oe).reduce((Ee, xe) => Object.assign(Ee, xe), {});
    return { loaderResults: de, fetcherResults: ye };
  }
  function Ur() {
    ((ce = !0),
      W.forEach((O, M) => {
        (U.has(M) && ge.add(M), An(M));
      }));
  }
  function Vt(O, M, z = {}) {
    (C.fetchers.set(O, M),
      at(
        { fetchers: new Map(C.fetchers) },
        { flushSync: (z && z.flushSync) === !0 },
      ));
  }
  function yt(O, M, z, $ = {}) {
    let Z = Ia(C.matches, M);
    ($t(O),
      at(
        { errors: { [Z.route.id]: z }, fetchers: new Map(C.fetchers) },
        { flushSync: ($ && $.flushSync) === !0 },
      ));
  }
  function gn(O) {
    return (
      fe.set(O, (fe.get(O) || 0) + 1),
      le.has(O) && le.delete(O),
      C.fetchers.get(O) || _O
    );
  }
  function $t(O) {
    let M = C.fetchers.get(O);
    (U.has(O) && !(M && M.state === "loading" && ie.has(O)) && An(O),
      W.delete(O),
      ie.delete(O),
      N.delete(O),
      le.delete(O),
      ge.delete(O),
      C.fetchers.delete(O));
  }
  function ai(O) {
    let M = (fe.get(O) || 0) - 1;
    (M <= 0 ? (fe.delete(O), le.add(O)) : fe.set(O, M),
      at({ fetchers: new Map(C.fetchers) }));
  }
  function An(O) {
    let M = U.get(O);
    M && (M.abort(), U.delete(O));
  }
  function da(O) {
    for (let M of O) {
      let z = gn(M),
        $ = Ba(z.data);
      C.fetchers.set(M, $);
    }
  }
  function lr() {
    let O = [],
      M = !1;
    for (let z of N) {
      let $ = C.fetchers.get(z);
      (Xe($, `Expected fetcher: ${z}`),
        $.state === "loading" && (N.delete(z), O.push(z), (M = !0)));
    }
    return (da(O), M);
  }
  function Pr(O) {
    let M = [];
    for (let [z, $] of ie)
      if ($ < O) {
        let Z = C.fetchers.get(z);
        (Xe(Z, `Expected fetcher: ${z}`),
          Z.state === "loading" && (An(z), ie.delete(z), M.push(z)));
      }
    return (da(M), M.length > 0);
  }
  function Hn(O, M) {
    let z = C.blockers.get(O) || Gs;
    return (ve.get(O) !== M && ve.set(O, M), z);
  }
  function Fr(O) {
    (C.blockers.delete(O), ve.delete(O));
  }
  function Cn(O, M) {
    let z = C.blockers.get(O) || Gs;
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
  function ii({ currentLocation: O, nextLocation: M, historyAction: z }) {
    if (ve.size === 0) return;
    ve.size > 1 && Nt(!1, "A router only supports one blocker at a time");
    let $ = Array.from(ve.entries()),
      [Z, oe] = $[$.length - 1],
      de = C.blockers.get(Z);
    if (
      !(de && de.state === "proceeding") &&
      oe({ currentLocation: O, nextLocation: M, historyAction: z })
    )
      return Z;
  }
  function ha(O) {
    let M = er(404, { pathname: O }),
      z = d || c,
      { matches: $, route: Z } = Vu(z);
    return { notFoundMatches: $, route: Z, error: M };
  }
  function Vi(O, M, z) {
    if (((_ = O), (E = M), (S = z || null), !x && C.navigation === Ch)) {
      x = !0;
      let $ = si(C.location, C.matches);
      $ != null && at({ restoreScrollPosition: $ });
    }
    return () => {
      ((_ = null), (E = null), (S = null));
    };
  }
  function oi(O, M) {
    return (
      (S &&
        S(
          O,
          M.map(($) => JR($, C.loaderData)),
        )) ||
      O.key
    );
  }
  function ma(O, M) {
    if (_ && E) {
      let z = oi(O, M);
      _[z] = E();
    }
  }
  function si(O, M) {
    if (_) {
      let z = oi(O, M),
        $ = _[z];
      if (typeof $ == "number") return $;
    }
    return null;
  }
  function A(O, M, z) {
    if (e.patchRoutesOnNavigation)
      if (O) {
        if (Object.keys(O[0].params).length > 0)
          return { active: !0, matches: sc(M, z, m, !0) };
      } else return { active: !0, matches: sc(M, z, m, !0) || [] };
    return { active: !1, matches: null };
  }
  async function P(O, M, z, $) {
    if (!e.patchRoutesOnNavigation) return { type: "success", matches: O };
    let Z = O;
    for (;;) {
      let oe = d == null,
        de = d || c,
        ye = u;
      try {
        await e.patchRoutesOnNavigation({
          signal: z,
          path: M,
          matches: Z,
          fetcherKey: $,
          patch: (_e, Ae) => {
            z.aborted || Q0(_e, Ae, de, ye, s, !1);
          },
        });
      } catch (_e) {
        return { type: "error", error: _e, partialMatches: Z };
      } finally {
        oe && !z.aborted && (c = [...c]);
      }
      if (z.aborted) return { type: "aborted" };
      let Ee = Za(de, M, m);
      if (Ee) return { type: "success", matches: Ee };
      let xe = sc(de, M, m, !0);
      if (
        !xe ||
        (Z.length === xe.length &&
          Z.every((_e, Ae) => _e.route.id === xe[Ae].route.id))
      )
        return { type: "success", matches: null };
      Z = xe;
    }
  }
  function H(O) {
    ((u = {}), (d = ul(O, s, void 0, u)));
  }
  function te(O, M, z = !1) {
    let $ = d == null;
    (Q0(O, M, d || c, u, s, z), $ && ((c = [...c]), at({})));
  }
  return (
    (L = {
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
      enableScrollRestoration: Vi,
      navigate: Qt,
      fetch: ti,
      revalidate: Vn,
      createHref: (O) => e.history.createHref(O),
      encodeLocation: (O) => e.history.encodeLocation(O),
      getFetcher: gn,
      deleteFetcher: ai,
      dispose: qe,
      getBlocker: Hn,
      deleteBlocker: Fr,
      patchRoutes: te,
      _internalFetchControllers: U,
      _internalSetRoutes: H,
      _internalSetStateDoNotUseOrYouWillBreakYourApp(O) {
        at(O);
      },
    }),
    L
  );
}
function OO(e) {
  return (
    e != null &&
    (("formData" in e && e.formData != null) ||
      ("body" in e && e.body !== void 0))
  );
}
function nm(e, t, a, i, s, u) {
  let c, d;
  if (s) {
    c = [];
    for (let h of t)
      if ((c.push(h), h.route.id === s)) {
        d = h;
        break;
      }
  } else ((c = t), (d = t[t.length - 1]));
  let m = Zm(i || ".", Hm(c), ar(e.pathname, a) || e.pathname, u === "path");
  if (
    (i == null && ((m.search = e.search), (m.hash = e.hash)),
    (i == null || i === "" || i === ".") && d)
  ) {
    let h = qm(m.search);
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
    a !== "/" && (m.pathname = fO({ basename: a, pathname: m.pathname })),
    qa(m)
  );
}
function Y0(e, t, a) {
  if (!a || !OO(a)) return { path: t };
  if (a.formMethod && !$O(a.formMethod))
    return { path: t, error: er(405, { method: a.formMethod }) };
  let i = () => ({ path: t, error: er(400, { type: "invalid-body" }) }),
    u = (a.formMethod || "get").toUpperCase(),
    c = Dw(t);
  if (a.body !== void 0) {
    if (a.formEncType === "text/plain") {
      if (!En(u)) return i();
      let g =
        typeof a.body == "string"
          ? a.body
          : a.body instanceof FormData || a.body instanceof URLSearchParams
            ? Array.from(a.body.entries()).reduce(
                (v, [_, S]) => `${v}${_}=${S}
`,
                "",
              )
            : String(a.body);
      return {
        path: t,
        submission: {
          formMethod: u,
          formAction: c,
          formEncType: a.formEncType,
          formData: void 0,
          json: void 0,
          text: g,
        },
      };
    } else if (a.formEncType === "application/json") {
      if (!En(u)) return i();
      try {
        let g = typeof a.body == "string" ? JSON.parse(a.body) : a.body;
        return {
          path: t,
          submission: {
            formMethod: u,
            formAction: c,
            formEncType: a.formEncType,
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
  if (a.formData) ((d = im(a.formData)), (m = a.formData));
  else if (a.body instanceof FormData) ((d = im(a.body)), (m = a.body));
  else if (a.body instanceof URLSearchParams) ((d = a.body), (m = tb(d)));
  else if (a.body == null) ((d = new URLSearchParams()), (m = new FormData()));
  else
    try {
      ((d = new URLSearchParams(a.body)), (m = tb(d)));
    } catch {
      return i();
    }
  let h = {
    formMethod: u,
    formAction: c,
    formEncType: (a && a.formEncType) || "application/x-www-form-urlencoded",
    formData: m,
    json: void 0,
    text: void 0,
  };
  if (En(h.formMethod)) return { path: t, submission: h };
  let y = Xa(t);
  return (
    e && y.search && qm(y.search) && d.append("index", ""),
    (y.search = `?${d}`),
    { path: qa(y), submission: h }
  );
}
function K0(e, t, a, i, s, u, c, d, m, h, y, g, v, _, S, E, x, T, F, D) {
  let B = D ? (Un(D[1]) ? D[1].error : D[1].data) : void 0,
    L = s.createURL(u.location),
    C = s.createURL(m),
    Y;
  if (y && u.errors) {
    let Se = Object.keys(u.errors)[0];
    Y = c.findIndex((ce) => ce.route.id === Se);
  } else if (D && Un(D[1])) {
    let Se = D[0];
    Y = c.findIndex((ce) => ce.route.id === Se) - 1;
  }
  let Q = D ? D[1].statusCode : void 0,
    me = Q && Q >= 400,
    pe = {
      currentUrl: L,
      currentParams: u.matches[0]?.params || {},
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
                ? (U = rm(ge, u.loaderData, u.errors))
                : AO(u.loaderData, u.matches[ce], Se) && (U = !0),
        U !== null)
      )
        return am(a, i, e, Se, h, t, U);
      let ne = me
          ? !1
          : g ||
            L.pathname + L.search === C.pathname + C.search ||
            L.search !== C.search ||
            CO(u.matches[ce], Se),
        q = { ...pe, defaultShouldRevalidate: ne },
        ie = _c(Se, q);
      return am(a, i, e, Se, h, t, ie, q);
    }),
    be = [];
  return (
    S.forEach((Se, ce) => {
      if (y || !c.some((fe) => fe.route.id === Se.routeId) || _.has(ce)) return;
      let ge = u.fetchers.get(ce),
        U = ge && ge.state !== "idle" && ge.data === void 0,
        ne = Za(x, Se.path, T);
      if (!ne) {
        if (F && U) return;
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
      let q = lc(ne, Se.path),
        ie = new AbortController(),
        N = To(s, Se.path, ie.signal),
        W = null;
      if (v.has(ce)) (v.delete(ce), (W = Do(a, i, N, ne, q, h, t)));
      else if (U) g && (W = Do(a, i, N, ne, q, h, t));
      else {
        let fe = { ...pe, defaultShouldRevalidate: me ? !1 : g };
        _c(q, fe) && (W = Do(a, i, N, ne, q, h, t, fe));
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
function rm(e, t, a) {
  if (e.lazy) return !0;
  if (!e.loader) return !1;
  let i = t != null && e.id in t,
    s = a != null && a[e.id] !== void 0;
  return !i && s
    ? !1
    : typeof e.loader == "function" && e.loader.hydrate === !0
      ? !0
      : !i && !s;
}
function AO(e, t, a) {
  let i = !t || a.route.id !== t.route.id,
    s = !e.hasOwnProperty(a.route.id);
  return i || s;
}
function CO(e, t) {
  let a = e.route.path;
  return (
    e.pathname !== t.pathname ||
    (a != null && a.endsWith("*") && e.params["*"] !== t.params["*"])
  );
}
function _c(e, t) {
  if (e.route.shouldRevalidate) {
    let a = e.route.shouldRevalidate(t);
    if (typeof a == "boolean") return a;
  }
  return t.defaultShouldRevalidate;
}
function Q0(e, t, a, i, s, u) {
  let c;
  if (e) {
    let h = i[e];
    (Xe(h, `No route found to patch children into: routeId = ${e}`),
      h.children || (h.children = []),
      (c = h.children));
  } else c = a;
  let d = [],
    m = [];
  if (
    (t.forEach((h) => {
      let y = c.find((g) => Rw(h, g));
      y ? m.push({ existingRoute: y, newRoute: h }) : d.push(h);
    }),
    d.length > 0)
  ) {
    let h = ul(d, s, [e || "_", "patch", String(c?.length || "0")], i);
    c.push(...h);
  }
  if (u && m.length > 0)
    for (let h = 0; h < m.length; h++) {
      let { existingRoute: y, newRoute: g } = m[h],
        v = y,
        [_] = ul([g], s, [], {}, !0);
      Object.assign(v, {
        element: _.element ? _.element : v.element,
        errorElement: _.errorElement ? _.errorElement : v.errorElement,
        hydrateFallbackElement: _.hydrateFallbackElement
          ? _.hydrateFallbackElement
          : v.hydrateFallbackElement,
      });
    }
}
function Rw(e, t) {
  return "id" in e && "id" in t && e.id === t.id
    ? !0
    : e.index === t.index &&
        e.path === t.path &&
        e.caseSensitive === t.caseSensitive
      ? (!e.children || e.children.length === 0) &&
        (!t.children || t.children.length === 0)
        ? !0
        : e.children.every((a, i) => t.children?.some((s) => Rw(a, s)))
      : !1;
}
var X0 = new WeakMap(),
  Ow = ({ key: e, route: t, manifest: a, mapRouteProperties: i }) => {
    let s = a[t.id];
    if (
      (Xe(s, "No route found in manifest"),
      !s.lazy || typeof s.lazy != "object")
    )
      return;
    let u = s.lazy[e];
    if (!u) return;
    let c = X0.get(s);
    c || ((c = {}), X0.set(s, c));
    let d = c[e];
    if (d) return d;
    let m = (async () => {
      let h = YR(e),
        g = s[e] !== void 0 && e !== "hasErrorBoundary";
      if (h)
        (Nt(
          !h,
          "Route property " +
            e +
            " is not a supported lazy route property. This property will be ignored.",
        ),
          (c[e] = Promise.resolve()));
      else if (g)
        Nt(
          !1,
          `Route "${s.id}" has a static property "${e}" defined. The lazy property will be ignored.`,
        );
      else {
        let v = await u();
        v != null && (Object.assign(s, { [e]: v }), Object.assign(s, i(s)));
      }
      typeof s.lazy == "object" &&
        ((s.lazy[e] = void 0),
        Object.values(s.lazy).every((v) => v === void 0) && (s.lazy = void 0));
    })();
    return ((c[e] = m), m);
  },
  J0 = new WeakMap();
function TO(e, t, a, i, s) {
  let u = a[e.id];
  if ((Xe(u, "No route found in manifest"), !e.lazy))
    return { lazyRoutePromise: void 0, lazyHandlerPromise: void 0 };
  if (typeof e.lazy == "function") {
    let y = J0.get(u);
    if (y) return { lazyRoutePromise: y, lazyHandlerPromise: y };
    let g = (async () => {
      Xe(typeof e.lazy == "function", "No lazy route function found");
      let v = await e.lazy(),
        _ = {};
      for (let S in v) {
        let E = v[S];
        if (E === void 0) continue;
        let x = QR(S),
          F = u[S] !== void 0 && S !== "hasErrorBoundary";
        x
          ? Nt(
              !x,
              "Route property " +
                S +
                " is not a supported property to be returned from a lazy route function. This property will be ignored.",
            )
          : F
            ? Nt(
                !F,
                `Route "${u.id}" has a static property "${S}" defined but its lazy function is also returning a value for this property. The lazy route property "${S}" will be ignored.`,
              )
            : (_[S] = E);
      }
      (Object.assign(u, _), Object.assign(u, { ...i(u), lazy: void 0 }));
    })();
    return (
      J0.set(u, g),
      g.catch(() => {}),
      { lazyRoutePromise: g, lazyHandlerPromise: g }
    );
  }
  let c = Object.keys(e.lazy),
    d = [],
    m;
  for (let y of c) {
    if (s && s.includes(y)) continue;
    let g = Ow({ key: y, route: e, manifest: a, mapRouteProperties: i });
    g && (d.push(g), y === t && (m = g));
  }
  let h = d.length > 0 ? Promise.all(d).then(() => {}) : void 0;
  return (
    h?.catch(() => {}),
    m?.catch(() => {}),
    { lazyRoutePromise: h, lazyHandlerPromise: m }
  );
}
async function W0(e) {
  let t = e.matches.filter((s) => s.shouldLoad),
    a = {};
  return (
    (await Promise.all(t.map((s) => s.resolve()))).forEach((s, u) => {
      a[t[u].route.id] = s;
    }),
    a
  );
}
async function DO(e) {
  return e.matches.some((t) => t.route.middleware) ? Aw(e, () => W0(e)) : W0(e);
}
function Aw(e, t) {
  return MO(e, t, (i) => i, FO, a);
  function a(i, s, u) {
    if (u)
      return Promise.resolve(
        Object.assign(u.value, { [s]: { type: "error", result: i } }),
      );
    {
      let { matches: c } = e,
        d = Math.min(
          c.findIndex((h) => h.route.id === s) || 0,
          c.findIndex((h) => h.unstable_shouldCallHandler()) || 0,
        ),
        m = Ia(c, c[d].route.id).route.id;
      return Promise.resolve({ [m]: { type: "error", result: i } });
    }
  }
}
async function MO(e, t, a, i, s) {
  let { matches: u, request: c, params: d, context: m } = e,
    h = u.flatMap((g) =>
      g.route.middleware ? g.route.middleware.map((v) => [g.route.id, v]) : [],
    );
  return await Cw({ request: c, params: d, context: m }, h, t, a, i, s);
}
async function Cw(e, t, a, i, s, u, c = 0) {
  let { request: d } = e;
  if (d.signal.aborted)
    throw d.signal.reason ?? new Error(`Request aborted: ${d.method} ${d.url}`);
  let m = t[c];
  if (!m) return await a();
  let [h, y] = m,
    g,
    v = async () => {
      if (g) throw new Error("You may only call `next()` once per middleware");
      try {
        return ((g = { value: await Cw(e, t, a, i, s, u, c + 1) }), g.value);
      } catch (_) {
        return ((g = { value: await u(_, h, g) }), g.value);
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
    return await u(_, h, g);
  }
}
function Tw(e, t, a, i, s) {
  let u = Ow({
      key: "middleware",
      route: i.route,
      manifest: t,
      mapRouteProperties: e,
    }),
    c = TO(i.route, En(a.method) ? "action" : "loader", t, e, s);
  return {
    middleware: u,
    route: c.lazyRoutePromise,
    handler: c.lazyHandlerPromise,
  };
}
function am(e, t, a, i, s, u, c, d = null) {
  let m = !1,
    h = Tw(e, t, a, i, s);
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
            ? _c(i, { ...d, defaultShouldRevalidate: y })
            : _c(i, d)
          : c
      );
    },
    resolve(y) {
      return m || c || (y && !En(a.method) && (i.route.lazy || i.route.loader))
        ? zO({
            request: a,
            match: i,
            lazyHandlerPromise: h?.handler,
            lazyRoutePromise: h?.route,
            handlerOverride: y,
            scopedContext: u,
          })
        : Promise.resolve({ type: "data", result: void 0 });
    },
  };
}
function Do(e, t, a, i, s, u, c, d = null) {
  return i.map((m) =>
    m.route.id !== s.route.id
      ? {
          ...m,
          shouldLoad: !1,
          unstable_shouldRevalidateArgs: d,
          unstable_shouldCallHandler: () => !1,
          _lazyPromises: Tw(e, t, a, m, u),
          resolve: () => Promise.resolve({ type: "data", result: void 0 }),
        }
      : am(e, t, a, m, u, c, !0, d),
  );
}
async function NO(e, t, a, i, s, u) {
  a.some((h) => h._lazyPromises?.middleware) &&
    (await Promise.all(a.map((h) => h._lazyPromises?.middleware)));
  let c = { request: t, params: a[0].params, context: s, matches: a },
    m = await e({
      ...c,
      fetcherKey: i,
      runClientMiddleware: (h) => {
        let y = c;
        return Aw(y, () =>
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
      a.flatMap((h) => [h._lazyPromises?.handler, h._lazyPromises?.route]),
    );
  } catch {}
  return m;
}
async function zO({
  request: e,
  match: t,
  lazyHandlerPromise: a,
  lazyRoutePromise: i,
  handlerOverride: s,
  scopedContext: u,
}) {
  let c,
    d,
    m = En(e.method),
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
                { request: e, params: t.params, context: u },
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
    if (a || i)
      if (g) {
        let v,
          [_] = await Promise.all([
            y(g).catch((S) => {
              v = S;
            }),
            a,
            i,
          ]);
        if (v !== void 0) throw v;
        c = _;
      } else {
        await a;
        let v = m ? t.route.action : t.route.loader;
        if (v) [c] = await Promise.all([y(v), i]);
        else if (h === "action") {
          let _ = new URL(e.url),
            S = _.pathname + _.search;
          throw er(405, { method: e.method, pathname: S, routeId: t.route.id });
        } else return { type: "data", result: void 0 };
      }
    else if (g) c = await y(g);
    else {
      let v = new URL(e.url),
        _ = v.pathname + v.search;
      throw er(404, { pathname: _ });
    }
  } catch (g) {
    return { type: "error", result: g };
  } finally {
    d && e.signal.removeEventListener("abort", d);
  }
  return c;
}
async function kO(e) {
  let t = e.headers.get("Content-Type");
  return t && /\bapplication\/json\b/.test(t)
    ? e.body == null
      ? null
      : e.json()
    : e.text();
}
async function jO(e) {
  let { result: t, type: a } = e;
  if (Mw(t)) {
    let i;
    try {
      i = await kO(t);
    } catch (s) {
      return { type: "error", error: s };
    }
    return a === "error"
      ? {
          type: "error",
          error: new Sc(t.status, t.statusText, i),
          statusCode: t.status,
          headers: t.headers,
        }
      : { type: "data", data: i, statusCode: t.status, headers: t.headers };
  }
  return a === "error"
    ? ib(t)
      ? t.data instanceof Error
        ? {
            type: "error",
            error: t.data,
            statusCode: t.init?.status,
            headers: t.init?.headers ? new Headers(t.init.headers) : void 0,
          }
        : {
            type: "error",
            error: new Sc(t.init?.status || 500, void 0, t.data),
            statusCode: cl(t) ? t.status : void 0,
            headers: t.init?.headers ? new Headers(t.init.headers) : void 0,
          }
      : { type: "error", error: t, statusCode: cl(t) ? t.status : void 0 }
    : ib(t)
      ? {
          type: "data",
          data: t.data,
          statusCode: t.init?.status,
          headers: t.init?.headers ? new Headers(t.init.headers) : void 0,
        }
      : { type: "data", data: t };
}
function LO(e, t, a, i, s) {
  let u = e.headers.get("Location");
  if (
    (Xe(
      u,
      "Redirects returned/thrown from loaders/actions must have a Location header",
    ),
    !Im(u))
  ) {
    let c = i.slice(0, i.findIndex((d) => d.route.id === a) + 1);
    ((u = nm(new URL(t.url), c, s, u)), e.headers.set("Location", u));
  }
  return e;
}
function eb(e, t, a) {
  if (Im(e)) {
    let i = e,
      s = i.startsWith("//") ? new URL(t.protocol + i) : new URL(i),
      u = ar(s.pathname, a) != null;
    if (s.origin === t.origin && u) return s.pathname + s.search + s.hash;
  }
  return e;
}
function To(e, t, a, i) {
  let s = e.createURL(Dw(t)).toString(),
    u = { signal: a };
  if (i && En(i.formMethod)) {
    let { formMethod: c, formEncType: d } = i;
    ((u.method = c.toUpperCase()),
      d === "application/json"
        ? ((u.headers = new Headers({ "Content-Type": d })),
          (u.body = JSON.stringify(i.json)))
        : d === "text/plain"
          ? (u.body = i.text)
          : d === "application/x-www-form-urlencoded" && i.formData
            ? (u.body = im(i.formData))
            : (u.body = i.formData));
  }
  return new Request(s, u);
}
function im(e) {
  let t = new URLSearchParams();
  for (let [a, i] of e.entries())
    t.append(a, typeof i == "string" ? i : i.name);
  return t;
}
function tb(e) {
  let t = new FormData();
  for (let [a, i] of e.entries()) t.append(a, i);
  return t;
}
function UO(e, t, a, i = !1, s = !1) {
  let u = {},
    c = null,
    d,
    m = !1,
    h = {},
    y = a && Un(a[1]) ? a[1].error : void 0;
  return (
    e.forEach((g) => {
      if (!(g.route.id in t)) return;
      let v = g.route.id,
        _ = t[v];
      if (
        (Xe(!Ri(_), "Cannot handle redirect results in processLoaderData"),
        Un(_))
      ) {
        let S = _.error;
        if ((y !== void 0 && ((S = y), (y = void 0)), (c = c || {}), s))
          c[v] = S;
        else {
          let E = Ia(e, v);
          c[E.route.id] == null && (c[E.route.id] = S);
        }
        (i || (u[v] = xw),
          m || ((m = !0), (d = cl(_.error) ? _.error.status : 500)),
          _.headers && (h[v] = _.headers));
      } else
        ((u[v] = _.data),
          _.statusCode && _.statusCode !== 200 && !m && (d = _.statusCode),
          _.headers && (h[v] = _.headers));
    }),
    y !== void 0 && a && ((c = { [a[0]]: y }), a[2] && (u[a[2]] = void 0)),
    { loaderData: u, errors: c, statusCode: d || 200, loaderHeaders: h }
  );
}
function nb(e, t, a, i, s, u) {
  let { loaderData: c, errors: d } = UO(t, a, i);
  return (
    s
      .filter((m) => !m.matches || m.matches.some((h) => h.shouldLoad))
      .forEach((m) => {
        let { key: h, match: y, controller: g } = m;
        if (g && g.signal.aborted) return;
        let v = u[h];
        if ((Xe(v, "Did not find corresponding fetcher result"), Un(v))) {
          let _ = Ia(e.matches, y?.route.id);
          ((d && d[_.route.id]) || (d = { ...d, [_.route.id]: v.error }),
            e.fetchers.delete(h));
        } else if (Ri(v)) Xe(!1, "Unhandled fetcher revalidation redirect");
        else {
          let _ = Ba(v.data);
          e.fetchers.set(h, _);
        }
      }),
    { loaderData: c, errors: d }
  );
}
function rb(e, t, a, i) {
  let s = Object.entries(t)
    .filter(([, u]) => u !== xw)
    .reduce((u, [c, d]) => ((u[c] = d), u), {});
  for (let u of a) {
    let c = u.route.id;
    if (
      (!t.hasOwnProperty(c) &&
        e.hasOwnProperty(c) &&
        u.route.loader &&
        (s[c] = e[c]),
      i && i.hasOwnProperty(c))
    )
      break;
  }
  return s;
}
function ab(e) {
  return e
    ? Un(e[1])
      ? { actionData: {} }
      : { actionData: { [e[0]]: e[1].data } }
    : {};
}
function Ia(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((i) => i.route.id === t) + 1) : [...e])
      .reverse()
      .find((i) => i.route.hasErrorBoundary === !0) || e[0]
  );
}
function Vu(e) {
  let t =
    e.length === 1
      ? e[0]
      : e.find((a) => a.index || !a.path || a.path === "/") || {
          id: "__shim-error-route__",
        };
  return {
    matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }],
    route: t,
  };
}
function er(
  e,
  { pathname: t, routeId: a, method: i, type: s, message: u } = {},
) {
  let c = "Unknown Server Error",
    d = "Unknown @remix-run/router error";
  return (
    e === 400
      ? ((c = "Bad Request"),
        i && t && a
          ? (d = `You made a ${i} request to "${t}" but did not provide a \`loader\` for route "${a}", so there is no way to handle the request.`)
          : s === "invalid-body" && (d = "Unable to encode submission body"))
      : e === 403
        ? ((c = "Forbidden"), (d = `Route "${a}" does not match URL "${t}"`))
        : e === 404
          ? ((c = "Not Found"), (d = `No route matches URL "${t}"`))
          : e === 405 &&
            ((c = "Method Not Allowed"),
            i && t && a
              ? (d = `You made a ${i.toUpperCase()} request to "${t}" but did not provide an \`action\` for route "${a}", so there is no way to handle the request.`)
              : i && (d = `Invalid request method "${i.toUpperCase()}"`)),
    new Sc(e || 500, c, new Error(d), !0)
  );
}
function $u(e) {
  let t = Object.entries(e);
  for (let a = t.length - 1; a >= 0; a--) {
    let [i, s] = t[a];
    if (Ri(s)) return { key: i, result: s };
  }
}
function Dw(e) {
  let t = typeof e == "string" ? Xa(e) : e;
  return qa({ ...t, hash: "" });
}
function PO(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search
    ? !1
    : e.hash === ""
      ? t.hash !== ""
      : e.hash === t.hash
        ? !0
        : t.hash !== "";
}
function FO(e) {
  return (
    e != null &&
    typeof e == "object" &&
    Object.entries(e).every(([t, a]) => typeof t == "string" && BO(a))
  );
}
function BO(e) {
  return (
    e != null &&
    typeof e == "object" &&
    "type" in e &&
    "result" in e &&
    (e.type === "data" || e.type === "error")
  );
}
function VO(e) {
  return Mw(e.result) && wO.has(e.result.status);
}
function Un(e) {
  return e.type === "error";
}
function Ri(e) {
  return (e && e.type) === "redirect";
}
function ib(e) {
  return (
    typeof e == "object" &&
    e != null &&
    "type" in e &&
    "data" in e &&
    "init" in e &&
    e.type === "DataWithResponseInit"
  );
}
function Mw(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.headers == "object" &&
    typeof e.body < "u"
  );
}
function $O(e) {
  return bO.has(e.toUpperCase());
}
function En(e) {
  return gO.has(e.toUpperCase());
}
function qm(e) {
  return new URLSearchParams(e).getAll("index").some((t) => t === "");
}
function lc(e, t) {
  let a = typeof t == "string" ? Xa(t).search : t.search;
  if (e[e.length - 1].route.index && qm(a || "")) return e[e.length - 1];
  let i = Sw(e);
  return i[i.length - 1];
}
function ob(e) {
  let {
    formMethod: t,
    formAction: a,
    formEncType: i,
    text: s,
    formData: u,
    json: c,
  } = e;
  if (!(!t || !a || !i)) {
    if (s != null)
      return {
        formMethod: t,
        formAction: a,
        formEncType: i,
        formData: void 0,
        json: void 0,
        text: s,
      };
    if (u != null)
      return {
        formMethod: t,
        formAction: a,
        formEncType: i,
        formData: u,
        json: void 0,
        text: void 0,
      };
    if (c !== void 0)
      return {
        formMethod: t,
        formAction: a,
        formEncType: i,
        formData: void 0,
        json: c,
        text: void 0,
      };
  }
}
function Th(e, t) {
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
function HO(e, t) {
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
function Ys(e, t) {
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
function ZO(e, t) {
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
function Ba(e) {
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
function IO(e, t) {
  try {
    let a = e.sessionStorage.getItem(Ew);
    if (a) {
      let i = JSON.parse(a);
      for (let [s, u] of Object.entries(i || {}))
        u && Array.isArray(u) && t.set(s, new Set(u || []));
    }
  } catch {}
}
function qO(e, t) {
  if (t.size > 0) {
    let a = {};
    for (let [i, s] of t) a[i] = [...s];
    try {
      e.sessionStorage.setItem(Ew, JSON.stringify(a));
    } catch (i) {
      Nt(
        !1,
        `Failed to save applied view transitions in sessionStorage (${i}).`,
      );
    }
  }
}
function GO() {
  let e,
    t,
    a = new Promise((i, s) => {
      ((e = async (u) => {
        i(u);
        try {
          await a;
        } catch {}
      }),
        (t = async (u) => {
          s(u);
          try {
            await a;
          } catch {}
        }));
    });
  return { promise: a, resolve: e, reject: t };
}
var ji = w.createContext(null);
ji.displayName = "DataRouter";
var bl = w.createContext(null);
bl.displayName = "DataRouterState";
w.createContext(!1);
var Gm = w.createContext({ isTransitioning: !1 });
Gm.displayName = "ViewTransition";
var Nw = w.createContext(new Map());
Nw.displayName = "Fetchers";
var YO = w.createContext(null);
YO.displayName = "Await";
var zr = w.createContext(null);
zr.displayName = "Navigation";
var Vc = w.createContext(null);
Vc.displayName = "Location";
var mr = w.createContext({ outlet: null, matches: [], isDataRoute: !1 });
mr.displayName = "Route";
var Ym = w.createContext(null);
Ym.displayName = "RouteError";
function KO(e, { relative: t } = {}) {
  Xe(
    wl(),
    "useHref() may be used only in the context of a <Router> component.",
  );
  let { basename: a, navigator: i } = w.useContext(zr),
    { hash: s, pathname: u, search: c } = Sl(e, { relative: t }),
    d = u;
  return (
    a !== "/" && (d = u === "/" ? a : Tr([a, u])),
    i.createHref({ pathname: d, search: c, hash: s })
  );
}
function wl() {
  return w.useContext(Vc) != null;
}
function kr() {
  return (
    Xe(
      wl(),
      "useLocation() may be used only in the context of a <Router> component.",
    ),
    w.useContext(Vc).location
  );
}
var zw =
  "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function kw(e) {
  w.useContext(zr).static || w.useLayoutEffect(e);
}
function jw() {
  let { isDataRoute: e } = w.useContext(mr);
  return e ? cA() : QO();
}
function QO() {
  Xe(
    wl(),
    "useNavigate() may be used only in the context of a <Router> component.",
  );
  let e = w.useContext(ji),
    { basename: t, navigator: a } = w.useContext(zr),
    { matches: i } = w.useContext(mr),
    { pathname: s } = kr(),
    u = JSON.stringify(Hm(i)),
    c = w.useRef(!1);
  return (
    kw(() => {
      c.current = !0;
    }),
    w.useCallback(
      (m, h = {}) => {
        if ((Nt(c.current, zw), !c.current)) return;
        if (typeof m == "number") {
          a.go(m);
          return;
        }
        let y = Zm(m, JSON.parse(u), s, h.relative === "path");
        (e == null &&
          t !== "/" &&
          (y.pathname = y.pathname === "/" ? t : Tr([t, y.pathname])),
          (h.replace ? a.replace : a.push)(y, h.state, h));
      },
      [t, a, u, s, e],
    )
  );
}
var XO = w.createContext(null);
function JO(e) {
  let t = w.useContext(mr).outlet;
  return t && w.createElement(XO.Provider, { value: e }, t);
}
function yj() {
  let { matches: e } = w.useContext(mr),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function Sl(e, { relative: t } = {}) {
  let { matches: a } = w.useContext(mr),
    { pathname: i } = kr(),
    s = JSON.stringify(Hm(a));
  return w.useMemo(() => Zm(e, JSON.parse(s), i, t === "path"), [e, s, i, t]);
}
function WO(e, t, a, i, s) {
  Xe(
    wl(),
    "useRoutes() may be used only in the context of a <Router> component.",
  );
  let { navigator: u } = w.useContext(zr),
    { matches: c } = w.useContext(mr),
    d = c[c.length - 1],
    m = d ? d.params : {},
    h = d ? d.pathname : "/",
    y = d ? d.pathnameBase : "/",
    g = d && d.route;
  {
    let F = (g && g.path) || "";
    Lw(
      h,
      !g || F.endsWith("*") || F.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${F}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${F}"> to <Route path="${F === "/" ? "*" : `${F}/*`}">.`,
    );
  }
  let v = kr(),
    _;
  _ = v;
  let S = _.pathname || "/",
    E = S;
  if (y !== "/") {
    let F = y.replace(/^\//, "").split("/");
    E = "/" + S.replace(/^\//, "").split("/").slice(F.length).join("/");
  }
  let x = Za(e, { pathname: E });
  return (
    Nt(
      g || x != null,
      `No routes matched location "${_.pathname}${_.search}${_.hash}" `,
    ),
    Nt(
      x == null ||
        x[x.length - 1].route.element !== void 0 ||
        x[x.length - 1].route.Component !== void 0 ||
        x[x.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${_.pathname}${_.search}${_.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`,
    ),
    aA(
      x &&
        x.map((F) =>
          Object.assign({}, F, {
            params: Object.assign({}, m, F.params),
            pathname: Tr([
              y,
              u.encodeLocation
                ? u.encodeLocation(F.pathname).pathname
                : F.pathname,
            ]),
            pathnameBase:
              F.pathnameBase === "/"
                ? y
                : Tr([
                    y,
                    u.encodeLocation
                      ? u.encodeLocation(F.pathnameBase).pathname
                      : F.pathnameBase,
                  ]),
          }),
        ),
      c,
      a,
      i,
      s,
    )
  );
}
function eA() {
  let e = uA(),
    t = cl(e)
      ? `${e.status} ${e.statusText}`
      : e instanceof Error
        ? e.message
        : JSON.stringify(e),
    a = e instanceof Error ? e.stack : null,
    i = "rgba(200,200,200, 0.5)",
    s = { padding: "0.5rem", backgroundColor: i },
    u = { padding: "2px 4px", backgroundColor: i },
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
        w.createElement("code", { style: u }, "ErrorBoundary"),
        " or",
        " ",
        w.createElement("code", { style: u }, "errorElement"),
        " prop on your route.",
      ),
    )),
    w.createElement(
      w.Fragment,
      null,
      w.createElement("h2", null, "Unexpected Application Error!"),
      w.createElement("h3", { style: { fontStyle: "italic" } }, t),
      a ? w.createElement("pre", { style: s }, a) : null,
      c,
    )
  );
}
var tA = w.createElement(eA, null),
  nA = class extends w.Component {
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
            mr.Provider,
            { value: this.props.routeContext },
            w.createElement(Ym.Provider, {
              value: this.state.error,
              children: this.props.component,
            }),
          )
        : this.props.children;
    }
  };
function rA({ routeContext: e, match: t, children: a }) {
  let i = w.useContext(ji);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (t.route.errorElement || t.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = t.route.id),
    w.createElement(mr.Provider, { value: e }, a)
  );
}
function aA(e, t = [], a = null, i = null, s = null) {
  if (e == null) {
    if (!a) return null;
    if (a.errors) e = a.matches;
    else if (t.length === 0 && !a.initialized && a.matches.length > 0)
      e = a.matches;
    else return null;
  }
  let u = e,
    c = a?.errors;
  if (c != null) {
    let h = u.findIndex((y) => y.route.id && c?.[y.route.id] !== void 0);
    (Xe(
      h >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`,
    ),
      (u = u.slice(0, Math.min(u.length, h + 1))));
  }
  let d = !1,
    m = -1;
  if (a)
    for (let h = 0; h < u.length; h++) {
      let y = u[h];
      if (
        ((y.route.HydrateFallback || y.route.hydrateFallbackElement) && (m = h),
        y.route.id)
      ) {
        let { loaderData: g, errors: v } = a,
          _ =
            y.route.loader &&
            !g.hasOwnProperty(y.route.id) &&
            (!v || v[y.route.id] === void 0);
        if (y.route.lazy || _) {
          ((d = !0), m >= 0 ? (u = u.slice(0, m + 1)) : (u = [u[0]]));
          break;
        }
      }
    }
  return u.reduceRight((h, y, g) => {
    let v,
      _ = !1,
      S = null,
      E = null;
    a &&
      ((v = c && y.route.id ? c[y.route.id] : void 0),
      (S = y.route.errorElement || tA),
      d &&
        (m < 0 && g === 0
          ? (Lw(
              "route-fallback",
              !1,
              "No `HydrateFallback` element provided to render during initial hydration",
            ),
            (_ = !0),
            (E = null))
          : m === g &&
            ((_ = !0), (E = y.route.hydrateFallbackElement || null))));
    let x = t.concat(u.slice(0, g + 1)),
      T = () => {
        let F;
        return (
          v
            ? (F = S)
            : _
              ? (F = E)
              : y.route.Component
                ? (F = w.createElement(y.route.Component, null))
                : y.route.element
                  ? (F = y.route.element)
                  : (F = h),
          w.createElement(rA, {
            match: y,
            routeContext: { outlet: h, matches: x, isDataRoute: a != null },
            children: F,
          })
        );
      };
    return a && (y.route.ErrorBoundary || y.route.errorElement || g === 0)
      ? w.createElement(nA, {
          location: a.location,
          revalidation: a.revalidation,
          component: S,
          error: v,
          children: T(),
          routeContext: { outlet: null, matches: x, isDataRoute: !0 },
          unstable_onError: i,
        })
      : T();
  }, null);
}
function Km(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function iA(e) {
  let t = w.useContext(ji);
  return (Xe(t, Km(e)), t);
}
function oA(e) {
  let t = w.useContext(bl);
  return (Xe(t, Km(e)), t);
}
function sA(e) {
  let t = w.useContext(mr);
  return (Xe(t, Km(e)), t);
}
function Qm(e) {
  let t = sA(e),
    a = t.matches[t.matches.length - 1];
  return (
    Xe(
      a.route.id,
      `${e} can only be used on routes that contain a unique "id"`,
    ),
    a.route.id
  );
}
function lA() {
  return Qm("useRouteId");
}
function uA() {
  let e = w.useContext(Ym),
    t = oA("useRouteError"),
    a = Qm("useRouteError");
  return e !== void 0 ? e : t.errors?.[a];
}
function cA() {
  let { router: e } = iA("useNavigate"),
    t = Qm("useNavigate"),
    a = w.useRef(!1);
  return (
    kw(() => {
      a.current = !0;
    }),
    w.useCallback(
      async (s, u = {}) => {
        (Nt(a.current, zw),
          a.current &&
            (typeof s == "number"
              ? e.navigate(s)
              : await e.navigate(s, { fromRouteId: t, ...u })));
      },
      [e, t],
    )
  );
}
var sb = {};
function Lw(e, t, a) {
  !t && !sb[e] && ((sb[e] = !0), Nt(!1, a));
}
var lb = {};
function ub(e, t) {
  !e && !lb[t] && ((lb[t] = !0), console.warn(t));
}
function fA(e) {
  let t = {
    hasErrorBoundary:
      e.hasErrorBoundary || e.ErrorBoundary != null || e.errorElement != null,
  };
  return (
    e.Component &&
      (e.element &&
        Nt(
          !1,
          "You should not include both `Component` and `element` on your route - `Component` will be used.",
        ),
      Object.assign(t, {
        element: w.createElement(e.Component),
        Component: void 0,
      })),
    e.HydrateFallback &&
      (e.hydrateFallbackElement &&
        Nt(
          !1,
          "You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used.",
        ),
      Object.assign(t, {
        hydrateFallbackElement: w.createElement(e.HydrateFallback),
        HydrateFallback: void 0,
      })),
    e.ErrorBoundary &&
      (e.errorElement &&
        Nt(
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
var dA = ["HydrateFallback", "hydrateFallbackElement"],
  hA = class {
    constructor() {
      ((this.status = "pending"),
        (this.promise = new Promise((e, t) => {
          ((this.resolve = (a) => {
            this.status === "pending" && ((this.status = "resolved"), e(a));
          }),
            (this.reject = (a) => {
              this.status === "pending" && ((this.status = "rejected"), t(a));
            }));
        })));
    }
  };
function mA({ router: e, flushSync: t, unstable_onError: a }) {
  let [i, s] = w.useState(e.state),
    [u, c] = w.useState(),
    [d, m] = w.useState({ isTransitioning: !1 }),
    [h, y] = w.useState(),
    [g, v] = w.useState(),
    [_, S] = w.useState(),
    E = w.useRef(new Map()),
    x = w.useCallback(
      (L) => {
        s(
          (C) => (
            L.errors &&
              a &&
              Object.entries(L.errors).forEach(([Y, Q]) => {
                C.errors?.[Y] !== Q && a(Q);
              }),
            L
          ),
        );
      },
      [a],
    ),
    T = w.useCallback(
      (L, { deletedFetchers: C, flushSync: Y, viewTransitionOpts: Q }) => {
        (L.fetchers.forEach((pe, we) => {
          pe.data !== void 0 && E.current.set(we, pe.data);
        }),
          C.forEach((pe) => E.current.delete(pe)),
          ub(
            Y === !1 || t != null,
            'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.',
          ));
        let me =
          e.window != null &&
          e.window.document != null &&
          typeof e.window.document.startViewTransition == "function";
        if (
          (ub(
            Q == null || me,
            "You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available.",
          ),
          !Q || !me)
        ) {
          t && Y ? t(() => x(L)) : w.startTransition(() => x(L));
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
            t(() => x(L));
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
              state: L,
              currentLocation: Q.currentLocation,
              nextLocation: Q.nextLocation,
            }))
          : (c(L),
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
      d.isTransitioning && !d.flushSync && y(new hA());
    }, [d]),
    w.useEffect(() => {
      if (h && u && e.window) {
        let L = u,
          C = h.promise,
          Y = e.window.document.startViewTransition(async () => {
            (w.startTransition(() => x(L)), await C);
          });
        (Y.finished.finally(() => {
          (y(void 0), v(void 0), c(void 0), m({ isTransitioning: !1 }));
        }),
          v(Y));
      }
    }, [u, h, e.window, x]),
    w.useEffect(() => {
      h && u && i.location.key === u.location.key && h.resolve();
    }, [h, g, i.location, u]),
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
  let F = w.useMemo(
      () => ({
        createHref: e.createHref,
        encodeLocation: e.encodeLocation,
        go: (L) => e.navigate(L),
        push: (L, C, Y) =>
          e.navigate(L, {
            state: C,
            preventScrollReset: Y?.preventScrollReset,
          }),
        replace: (L, C, Y) =>
          e.navigate(L, {
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
        navigator: F,
        static: !1,
        basename: D,
        unstable_onError: a,
      }),
      [e, F, D, a],
    );
  return w.createElement(
    w.Fragment,
    null,
    w.createElement(
      ji.Provider,
      { value: B },
      w.createElement(
        bl.Provider,
        { value: i },
        w.createElement(
          Nw.Provider,
          { value: E.current },
          w.createElement(
            Gm.Provider,
            { value: d },
            w.createElement(
              vA,
              {
                basename: D,
                location: i.location,
                navigationType: i.historyAction,
                navigator: F,
              },
              w.createElement(pA, {
                routes: e.routes,
                future: e.future,
                state: i,
                unstable_onError: a,
              }),
            ),
          ),
        ),
      ),
    ),
    null,
  );
}
var pA = w.memo(yA);
function yA({ routes: e, future: t, state: a, unstable_onError: i }) {
  return WO(e, void 0, a, i, t);
}
function gA(e) {
  return JO(e.context);
}
function vA({
  basename: e = "/",
  children: t = null,
  location: a,
  navigationType: i = "POP",
  navigator: s,
  static: u = !1,
}) {
  Xe(
    !wl(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.",
  );
  let c = e.replace(/^\/*/, "/"),
    d = w.useMemo(
      () => ({ basename: c, navigator: s, static: u, future: {} }),
      [c, s, u],
    );
  typeof a == "string" && (a = Xa(a));
  let {
      pathname: m = "/",
      search: h = "",
      hash: y = "",
      state: g = null,
      key: v = "default",
    } = a,
    _ = w.useMemo(() => {
      let S = ar(m, c);
      return S == null
        ? null
        : {
            location: { pathname: S, search: h, hash: y, state: g, key: v },
            navigationType: i,
          };
    }, [c, m, h, y, g, v, i]);
  return (
    Nt(
      _ != null,
      `<Router basename="${c}"> is not able to match the URL "${m}${h}${y}" because it does not start with the basename, so the <Router> won't render anything.`,
    ),
    _ == null
      ? null
      : w.createElement(
          zr.Provider,
          { value: d },
          w.createElement(Vc.Provider, { children: t, value: _ }),
        )
  );
}
var uc = "get",
  cc = "application/x-www-form-urlencoded";
function $c(e) {
  return e != null && typeof e.tagName == "string";
}
function bA(e) {
  return $c(e) && e.tagName.toLowerCase() === "button";
}
function wA(e) {
  return $c(e) && e.tagName.toLowerCase() === "form";
}
function SA(e) {
  return $c(e) && e.tagName.toLowerCase() === "input";
}
function _A(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function EA(e, t) {
  return e.button === 0 && (!t || t === "_self") && !_A(e);
}
function om(e = "") {
  return new URLSearchParams(
    typeof e == "string" || Array.isArray(e) || e instanceof URLSearchParams
      ? e
      : Object.keys(e).reduce((t, a) => {
          let i = e[a];
          return t.concat(Array.isArray(i) ? i.map((s) => [a, s]) : [[a, i]]);
        }, []),
  );
}
function xA(e, t) {
  let a = om(e);
  return (
    t &&
      t.forEach((i, s) => {
        a.has(s) ||
          t.getAll(s).forEach((u) => {
            a.append(s, u);
          });
      }),
    a
  );
}
var Hu = null;
function RA() {
  if (Hu === null)
    try {
      (new FormData(document.createElement("form"), 0), (Hu = !1));
    } catch {
      Hu = !0;
    }
  return Hu;
}
var OA = new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain",
]);
function Dh(e) {
  return e != null && !OA.has(e)
    ? (Nt(
        !1,
        `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${cc}"`,
      ),
      null)
    : e;
}
function AA(e, t) {
  let a, i, s, u, c;
  if (wA(e)) {
    let d = e.getAttribute("action");
    ((i = d ? ar(d, t) : null),
      (a = e.getAttribute("method") || uc),
      (s = Dh(e.getAttribute("enctype")) || cc),
      (u = new FormData(e)));
  } else if (bA(e) || (SA(e) && (e.type === "submit" || e.type === "image"))) {
    let d = e.form;
    if (d == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>',
      );
    let m = e.getAttribute("formaction") || d.getAttribute("action");
    if (
      ((i = m ? ar(m, t) : null),
      (a = e.getAttribute("formmethod") || d.getAttribute("method") || uc),
      (s =
        Dh(e.getAttribute("formenctype")) ||
        Dh(d.getAttribute("enctype")) ||
        cc),
      (u = new FormData(d, e)),
      !RA())
    ) {
      let { name: h, type: y, value: g } = e;
      if (y === "image") {
        let v = h ? `${h}.` : "";
        (u.append(`${v}x`, "0"), u.append(`${v}y`, "0"));
      } else h && u.append(h, g);
    }
  } else {
    if ($c(e))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">',
      );
    ((a = uc), (i = null), (s = cc), (c = e));
  }
  return (
    u && s === "text/plain" && ((c = u), (u = void 0)),
    { action: i, method: a.toLowerCase(), encType: s, formData: u, body: c }
  );
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function Xm(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function CA(e, t, a) {
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
      ? (i.pathname = `_root.${a}`)
      : t && ar(i.pathname, t) === "/"
        ? (i.pathname = `${t.replace(/\/$/, "")}/_root.${a}`)
        : (i.pathname = `${i.pathname.replace(/\/$/, "")}.${a}`),
    i
  );
}
async function TA(e, t) {
  if (e.id in t) return t[e.id];
  try {
    let a = await import(e.module);
    return ((t[e.id] = a), a);
  } catch (a) {
    return (
      console.error(
        `Error loading route module \`${e.module}\`, reloading page...`,
      ),
      console.error(a),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function DA(e) {
  return e == null
    ? !1
    : e.href == null
      ? e.rel === "preload" &&
        typeof e.imageSrcSet == "string" &&
        typeof e.imageSizes == "string"
      : typeof e.rel == "string" && typeof e.href == "string";
}
async function MA(e, t, a) {
  let i = await Promise.all(
    e.map(async (s) => {
      let u = t.routes[s.route.id];
      if (u) {
        let c = await TA(u, a);
        return c.links ? c.links() : [];
      }
      return [];
    }),
  );
  return jA(
    i
      .flat(1)
      .filter(DA)
      .filter((s) => s.rel === "stylesheet" || s.rel === "preload")
      .map((s) =>
        s.rel === "stylesheet"
          ? { ...s, rel: "prefetch", as: "style" }
          : { ...s, rel: "prefetch" },
      ),
  );
}
function cb(e, t, a, i, s, u) {
  let c = (m, h) => (a[h] ? m.route.id !== a[h].route.id : !0),
    d = (m, h) =>
      a[h].pathname !== m.pathname ||
      (a[h].route.path?.endsWith("*") && a[h].params["*"] !== m.params["*"]);
  return u === "assets"
    ? t.filter((m, h) => c(m, h) || d(m, h))
    : u === "data"
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
              currentParams: a[0]?.params || {},
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
function NA(e, t, { includeHydrateFallback: a } = {}) {
  return zA(
    e
      .map((i) => {
        let s = t.routes[i.route.id];
        if (!s) return [];
        let u = [s.module];
        return (
          s.clientActionModule && (u = u.concat(s.clientActionModule)),
          s.clientLoaderModule && (u = u.concat(s.clientLoaderModule)),
          a &&
            s.hydrateFallbackModule &&
            (u = u.concat(s.hydrateFallbackModule)),
          s.imports && (u = u.concat(s.imports)),
          u
        );
      })
      .flat(1),
  );
}
function zA(e) {
  return [...new Set(e)];
}
function kA(e) {
  let t = {},
    a = Object.keys(e).sort();
  for (let i of a) t[i] = e[i];
  return t;
}
function jA(e, t) {
  let a = new Set();
  return (
    new Set(t),
    e.reduce((i, s) => {
      let u = JSON.stringify(kA(s));
      return (a.has(u) || (a.add(u), i.push({ key: u, link: s })), i);
    }, [])
  );
}
function Uw() {
  let e = w.useContext(ji);
  return (
    Xm(
      e,
      "You must render this element inside a <DataRouterContext.Provider> element",
    ),
    e
  );
}
function LA() {
  let e = w.useContext(bl);
  return (
    Xm(
      e,
      "You must render this element inside a <DataRouterStateContext.Provider> element",
    ),
    e
  );
}
var Jm = w.createContext(void 0);
Jm.displayName = "FrameworkContext";
function Pw() {
  let e = w.useContext(Jm);
  return (
    Xm(e, "You must render this element inside a <HydratedRouter> element"),
    e
  );
}
function UA(e, t) {
  let a = w.useContext(Jm),
    [i, s] = w.useState(!1),
    [u, c] = w.useState(!1),
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
          T.forEach((F) => {
            c(F.isIntersecting);
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
  return a
    ? e !== "intent"
      ? [u, v, {}]
      : [
          u,
          v,
          {
            onFocus: Ks(d, _),
            onBlur: Ks(m, S),
            onMouseEnter: Ks(h, _),
            onMouseLeave: Ks(y, S),
            onTouchStart: Ks(g, _),
          },
        ]
    : [!1, v, {}];
}
function Ks(e, t) {
  return (a) => {
    (e && e(a), a.defaultPrevented || t(a));
  };
}
function PA({ page: e, ...t }) {
  let { router: a } = Uw(),
    i = w.useMemo(() => Za(a.routes, e, a.basename), [a.routes, e, a.basename]);
  return i ? w.createElement(BA, { page: e, matches: i, ...t }) : null;
}
function FA(e) {
  let { manifest: t, routeModules: a } = Pw(),
    [i, s] = w.useState([]);
  return (
    w.useEffect(() => {
      let u = !1;
      return (
        MA(e, t, a).then((c) => {
          u || s(c);
        }),
        () => {
          u = !0;
        }
      );
    }, [e, t, a]),
    i
  );
}
function BA({ page: e, matches: t, ...a }) {
  let i = kr(),
    { manifest: s, routeModules: u } = Pw(),
    { basename: c } = Uw(),
    { loaderData: d, matches: m } = LA(),
    h = w.useMemo(() => cb(e, t, m, s, i, "data"), [e, t, m, s, i]),
    y = w.useMemo(() => cb(e, t, m, s, i, "assets"), [e, t, m, s, i]),
    g = w.useMemo(() => {
      if (e === i.pathname + i.search + i.hash) return [];
      let S = new Set(),
        E = !1;
      if (
        (t.forEach((T) => {
          let F = s.routes[T.route.id];
          !F ||
            !F.hasLoader ||
            ((!h.some((D) => D.route.id === T.route.id) &&
              T.route.id in d &&
              u[T.route.id]?.shouldRevalidate) ||
            F.hasClientLoader
              ? (E = !0)
              : S.add(T.route.id));
        }),
        S.size === 0)
      )
        return [];
      let x = CA(e, c, "data");
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
    }, [c, d, i, s, h, t, e, u]),
    v = w.useMemo(() => NA(y, s), [y, s]),
    _ = FA(y);
  return w.createElement(
    w.Fragment,
    null,
    g.map((S) =>
      w.createElement("link", {
        key: S,
        rel: "prefetch",
        as: "fetch",
        href: S,
        ...a,
      }),
    ),
    v.map((S) =>
      w.createElement("link", { key: S, rel: "modulepreload", href: S, ...a }),
    ),
    _.map(({ key: S, link: E }) =>
      w.createElement("link", { key: S, nonce: a.nonce, ...E }),
    ),
  );
}
function VA(...e) {
  return (t) => {
    e.forEach((a) => {
      typeof a == "function" ? a(t) : a != null && (a.current = t);
    });
  };
}
var Fw =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
try {
  Fw && (window.__reactRouterVersion = "7.9.1");
} catch {}
function $A(e, t) {
  return RO({
    basename: t?.basename,
    getContext: t?.getContext,
    future: t?.future,
    history: ZR({ window: t?.window }),
    hydrationData: HA(),
    routes: e,
    mapRouteProperties: fA,
    hydrationRouteProperties: dA,
    dataStrategy: t?.dataStrategy,
    patchRoutesOnNavigation: t?.patchRoutesOnNavigation,
    window: t?.window,
  }).initialize();
}
function HA() {
  let e = window?.__staticRouterHydrationData;
  return (e && e.errors && (e = { ...e, errors: ZA(e.errors) }), e);
}
function ZA(e) {
  if (!e) return null;
  let t = Object.entries(e),
    a = {};
  for (let [i, s] of t)
    if (s && s.__type === "RouteErrorResponse")
      a[i] = new Sc(s.status, s.statusText, s.data, s.internal === !0);
    else if (s && s.__type === "Error") {
      if (s.__subType) {
        let u = window[s.__subType];
        if (typeof u == "function")
          try {
            let c = new u(s.message);
            ((c.stack = ""), (a[i] = c));
          } catch {}
      }
      if (a[i] == null) {
        let u = new Error(s.message);
        ((u.stack = ""), (a[i] = u));
      }
    } else a[i] = s;
  return a;
}
var Bw = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Oi = w.forwardRef(function (
    {
      onClick: t,
      discover: a = "render",
      prefetch: i = "none",
      relative: s,
      reloadDocument: u,
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
    let { basename: S } = w.useContext(zr),
      E = typeof h == "string" && Bw.test(h),
      x,
      T = !1;
    if (typeof h == "string" && E && ((x = h), Fw))
      try {
        let me = new URL(window.location.href),
          pe = h.startsWith("//") ? new URL(me.protocol + h) : new URL(h),
          we = ar(pe.pathname, S);
        pe.origin === me.origin && we != null
          ? (h = we + pe.search + pe.hash)
          : (T = !0);
      } catch {
        Nt(
          !1,
          `<Link to="${h}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`,
        );
      }
    let F = KO(h, { relative: s }),
      [D, B, L] = UA(i, v),
      C = YA(h, {
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
      ...L,
      href: x || F,
      onClick: T || u ? t : Y,
      ref: VA(_, B),
      target: m,
      "data-discover": !E && a === "render" ? "true" : void 0,
    });
    return D && !E
      ? w.createElement(w.Fragment, null, Q, w.createElement(PA, { page: F }))
      : Q;
  });
Oi.displayName = "Link";
var IA = w.forwardRef(function (
  {
    "aria-current": t = "page",
    caseSensitive: a = !1,
    className: i = "",
    end: s = !1,
    style: u,
    to: c,
    viewTransition: d,
    children: m,
    ...h
  },
  y,
) {
  let g = Sl(c, { relative: h.relative }),
    v = kr(),
    _ = w.useContext(bl),
    { navigator: S, basename: E } = w.useContext(zr),
    x = _ != null && WA(g) && d === !0,
    T = S.encodeLocation ? S.encodeLocation(g).pathname : g.pathname,
    F = v.pathname,
    D =
      _ && _.navigation && _.navigation.location
        ? _.navigation.location.pathname
        : null;
  (a ||
    ((F = F.toLowerCase()),
    (D = D ? D.toLowerCase() : null),
    (T = T.toLowerCase())),
    D && E && (D = ar(D, E) || D));
  const B = T !== "/" && T.endsWith("/") ? T.length - 1 : T.length;
  let L = F === T || (!s && F.startsWith(T) && F.charAt(B) === "/"),
    C =
      D != null &&
      (D === T || (!s && D.startsWith(T) && D.charAt(T.length) === "/")),
    Y = { isActive: L, isPending: C, isTransitioning: x },
    Q = L ? t : void 0,
    me;
  typeof i == "function"
    ? (me = i(Y))
    : (me = [
        i,
        L ? "active" : null,
        C ? "pending" : null,
        x ? "transitioning" : null,
      ]
        .filter(Boolean)
        .join(" "));
  let pe = typeof u == "function" ? u(Y) : u;
  return w.createElement(
    Oi,
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
IA.displayName = "NavLink";
var qA = w.forwardRef(
  (
    {
      discover: e = "render",
      fetcherKey: t,
      navigate: a,
      reloadDocument: i,
      replace: s,
      state: u,
      method: c = uc,
      action: d,
      onSubmit: m,
      relative: h,
      preventScrollReset: y,
      viewTransition: g,
      ...v
    },
    _,
  ) => {
    let S = XA(),
      E = JA(d, { relative: h }),
      x = c.toLowerCase() === "get" ? "get" : "post",
      T = typeof d == "string" && Bw.test(d),
      F = (D) => {
        if ((m && m(D), D.defaultPrevented)) return;
        D.preventDefault();
        let B = D.nativeEvent.submitter,
          L = B?.getAttribute("formmethod") || c;
        S(B || D.currentTarget, {
          fetcherKey: t,
          method: L,
          navigate: a,
          replace: s,
          state: u,
          relative: h,
          preventScrollReset: y,
          viewTransition: g,
        });
      };
    return w.createElement("form", {
      ref: _,
      method: x,
      action: E,
      onSubmit: i ? m : F,
      ...v,
      "data-discover": !T && e === "render" ? "true" : void 0,
    });
  },
);
qA.displayName = "Form";
function GA(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Vw(e) {
  let t = w.useContext(ji);
  return (Xe(t, GA(e)), t);
}
function YA(
  e,
  {
    target: t,
    replace: a,
    state: i,
    preventScrollReset: s,
    relative: u,
    viewTransition: c,
  } = {},
) {
  let d = jw(),
    m = kr(),
    h = Sl(e, { relative: u });
  return w.useCallback(
    (y) => {
      if (EA(y, t)) {
        y.preventDefault();
        let g = a !== void 0 ? a : qa(m) === qa(h);
        d(e, {
          replace: g,
          state: i,
          preventScrollReset: s,
          relative: u,
          viewTransition: c,
        });
      }
    },
    [m, d, h, a, i, t, e, s, u, c],
  );
}
function gj(e) {
  Nt(
    typeof URLSearchParams < "u",
    "You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.",
  );
  let t = w.useRef(om(e)),
    a = w.useRef(!1),
    i = kr(),
    s = w.useMemo(() => xA(i.search, a.current ? null : t.current), [i.search]),
    u = jw(),
    c = w.useCallback(
      (d, m) => {
        const h = om(typeof d == "function" ? d(new URLSearchParams(s)) : d);
        ((a.current = !0), u("?" + h, m));
      },
      [u, s],
    );
  return [s, c];
}
var KA = 0,
  QA = () => `__${String(++KA)}__`;
function XA() {
  let { router: e } = Vw("useSubmit"),
    { basename: t } = w.useContext(zr),
    a = lA();
  return w.useCallback(
    async (i, s = {}) => {
      let { action: u, method: c, encType: d, formData: m, body: h } = AA(i, t);
      if (s.navigate === !1) {
        let y = s.fetcherKey || QA();
        await e.fetch(y, a, s.action || u, {
          preventScrollReset: s.preventScrollReset,
          formData: m,
          body: h,
          formMethod: s.method || c,
          formEncType: s.encType || d,
          flushSync: s.flushSync,
        });
      } else
        await e.navigate(s.action || u, {
          preventScrollReset: s.preventScrollReset,
          formData: m,
          body: h,
          formMethod: s.method || c,
          formEncType: s.encType || d,
          replace: s.replace,
          state: s.state,
          fromRouteId: a,
          flushSync: s.flushSync,
          viewTransition: s.viewTransition,
        });
    },
    [e, t, a],
  );
}
function JA(e, { relative: t } = {}) {
  let { basename: a } = w.useContext(zr),
    i = w.useContext(mr);
  Xe(i, "useFormAction must be used inside a RouteContext");
  let [s] = i.matches.slice(-1),
    u = { ...Sl(e || ".", { relative: t }) },
    c = kr();
  if (e == null) {
    u.search = c.search;
    let d = new URLSearchParams(u.search),
      m = d.getAll("index");
    if (m.some((y) => y === "")) {
      (d.delete("index"),
        m.filter((g) => g).forEach((g) => d.append("index", g)));
      let y = d.toString();
      u.search = y ? `?${y}` : "";
    }
  }
  return (
    (!e || e === ".") &&
      s.route.index &&
      (u.search = u.search ? u.search.replace(/^\?/, "?index&") : "?index"),
    a !== "/" && (u.pathname = u.pathname === "/" ? a : Tr([a, u.pathname])),
    qa(u)
  );
}
function WA(e, { relative: t } = {}) {
  let a = w.useContext(Gm);
  Xe(
    a != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?",
  );
  let { basename: i } = Vw("useViewTransitionState"),
    s = Sl(e, { relative: t });
  if (!a.isTransitioning) return !1;
  let u = ar(a.currentLocation.pathname, i) || a.currentLocation.pathname,
    c = ar(a.nextLocation.pathname, i) || a.nextLocation.pathname;
  return wc(s.pathname, c) != null || wc(s.pathname, u) != null;
}
var Hc = pw();
const eC = mw(Hc);
function tC(e) {
  return w.createElement(mA, { flushSync: Hc.flushSync, ...e });
}
const nC = "modulepreload",
  rC = function (e) {
    return "/" + e;
  },
  fb = {},
  jr = function (t, a, i) {
    let s = Promise.resolve();
    if (a && a.length > 0) {
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
        a.map((h) => {
          if (((h = rC(h)), h in fb)) return;
          fb[h] = !0;
          const y = h.endsWith(".css"),
            g = y ? '[rel="stylesheet"]' : "";
          if (document.querySelector(`link[href="${h}"]${g}`)) return;
          const v = document.createElement("link");
          if (
            ((v.rel = y ? "stylesheet" : nC),
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
    function u(c) {
      const d = new Event("vite:preloadError", { cancelable: !0 });
      if (((d.payload = c), window.dispatchEvent(d), !d.defaultPrevented))
        throw c;
    }
    return s.then((c) => {
      for (const d of c || []) d.status === "rejected" && u(d.reason);
      return t().catch(u);
    });
  },
  Or = {
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
  Ec = "/assets/profile1-BgNf41Vs.svg",
  $w = "/assets/profile2-uimi6C9l.svg",
  Hw = "/assets/profile3-Cw6ESoX5.svg",
  Zw = "/assets/profile4-BoJny71e.svg",
  Iw = "/assets/profile5-CaBIp1ZG.svg",
  qw = "/assets/profile6-D02euur1.svg",
  aC = "/assets/logo-CjZZMZa2.svg",
  Gw = "/assets/cup-CJ517CSa.svg",
  iC =
    "data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M16.875%201.13754C16.7594%201.02166%2016.622%200.929722%2016.4708%200.866995C16.3196%200.804268%2016.1575%200.77198%2015.9938%200.77198C15.8301%200.77198%2015.668%200.804268%2015.5168%200.866995C15.3655%200.929722%2015.2282%201.02166%2015.1125%201.13754L9.00003%207.23753L2.88754%201.12504C2.77181%201.00931%202.63442%200.917508%202.48321%200.854877C2.33201%200.792245%202.16995%200.76001%202.00629%200.76001C1.84262%200.76001%201.68056%200.792245%201.52936%200.854877C1.37815%200.917508%201.24076%201.00931%201.12504%201.12504C1.00931%201.24076%200.917508%201.37815%200.854877%201.52936C0.792245%201.68056%200.76001%201.84262%200.76001%202.00629C0.76001%202.16995%200.792245%202.33201%200.854877%202.48321C0.917508%202.63442%201.00931%202.77181%201.12504%202.88754L7.23753%209.00003L1.12504%2015.1125C1.00931%2015.2283%200.917508%2015.3656%200.854877%2015.5169C0.792245%2015.6681%200.76001%2015.8301%200.76001%2015.9938C0.76001%2016.1574%200.792245%2016.3195%200.854877%2016.4707C0.917508%2016.6219%201.00931%2016.7593%201.12504%2016.875C1.24076%2016.9908%201.37815%2017.0826%201.52936%2017.1452C1.68056%2017.2078%201.84262%2017.2401%202.00629%2017.2401C2.16995%2017.2401%202.33201%2017.2078%202.48321%2017.1452C2.63442%2017.0826%202.77181%2016.9908%202.88754%2016.875L9.00003%2010.7625L15.1125%2016.875C15.2283%2016.9908%2015.3656%2017.0826%2015.5169%2017.1452C15.6681%2017.2078%2015.8301%2017.2401%2015.9938%2017.2401C16.1574%2017.2401%2016.3195%2017.2078%2016.4707%2017.1452C16.6219%2017.0826%2016.7593%2016.9908%2016.875%2016.875C16.9908%2016.7593%2017.0826%2016.6219%2017.1452%2016.4707C17.2078%2016.3195%2017.2401%2016.1574%2017.2401%2015.9938C17.2401%2015.8301%2017.2078%2015.6681%2017.1452%2015.5169C17.0826%2015.3656%2016.9908%2015.2283%2016.875%2015.1125L10.7625%209.00003L16.875%202.88754C17.35%202.41254%2017.35%201.61254%2016.875%201.13754Z'%20fill='%23525252'/%3e%3c/svg%3e",
  oC =
    "data:image/svg+xml,%3csvg%20width='29'%20height='26'%20viewBox='0%200%2029%2026'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M14.5%200C22.2333%200%2028.5013%204.88533%2028.5013%2010.9133C28.5013%2016.94%2022.2333%2021.8253%2014.5013%2021.8253C13.7315%2021.824%2012.9625%2021.775%2012.1987%2021.6787L6.32134%2025.5227C5.65334%2025.876%205.41734%2025.8373%205.69201%2024.972L6.88134%2020.068C3.04134%2018.1213%200.501343%2014.748%200.501343%2010.9133C0.501343%204.88667%206.76801%200%2014.5013%200M22.3787%2010.7467L24.3387%208.848C24.4518%208.73054%2024.5149%208.57378%2024.5147%208.41073C24.5145%208.24767%2024.451%208.09106%2024.3376%207.97388C24.2242%207.8567%2024.0698%207.78809%2023.9069%207.78252C23.7439%207.77695%2023.5851%207.83484%2023.464%207.944L20.8933%2010.432V8.376C20.8933%208.20909%2020.827%208.04902%2020.709%207.93099C20.591%207.81297%2020.4309%207.74667%2020.264%207.74667C20.0971%207.74667%2019.937%207.81297%2019.819%207.93099C19.701%208.04902%2019.6347%208.20909%2019.6347%208.376V11.7853C19.6125%2011.8828%2019.6125%2011.9839%2019.6347%2012.0813V14C19.6347%2014.1669%2019.701%2014.327%2019.819%2014.445C19.937%2014.563%2020.0971%2014.6293%2020.264%2014.6293C20.4309%2014.6293%2020.591%2014.563%2020.709%2014.445C20.827%2014.327%2020.8933%2014.1669%2020.8933%2014V12.1827L21.4627%2011.632L23.3667%2014.3427C23.4142%2014.4103%2023.4746%2014.468%2023.5444%2014.5123C23.6143%2014.5567%2023.6921%2014.5868%2023.7736%2014.601C23.8551%2014.6153%2023.9385%2014.6133%2024.0192%2014.5953C24.1%2014.5773%2024.1763%2014.5435%2024.244%2014.496C24.3117%2014.4485%2024.3693%2014.3881%2024.4137%2014.3182C24.458%2014.2484%2024.4881%2014.1706%2024.5024%2014.0891C24.5166%2014.0076%2024.5147%2013.9241%2024.4966%2013.8434C24.4786%2013.7627%2024.4449%2013.6863%2024.3973%2013.6187L22.3787%2010.7467ZM18.4347%2013.312H16.488V8.396C16.4806%208.23427%2016.4111%208.08164%2016.294%207.96983C16.1769%207.85802%2016.0212%207.79563%2015.8593%207.79563C15.6974%207.79563%2015.5418%207.85802%2015.4247%207.96983C15.3076%208.08164%2015.2381%208.23427%2015.2307%208.396V13.9413C15.2307%2014.288%2015.5107%2014.5707%2015.8587%2014.5707H18.4347C18.6016%2014.5707%2018.7617%2014.5044%2018.8797%2014.3863C18.9977%2014.2683%2019.064%2014.1082%2019.064%2013.9413C19.064%2013.7744%2018.9977%2013.6143%2018.8797%2013.4963C18.7617%2013.3783%2018.6016%2013.312%2018.4347%2013.312ZM10.6253%2011.8573L11.5533%209.58L12.404%2011.856L10.6253%2011.8573ZM13.9893%2012.5067L13.992%2012.4853C13.9916%2012.3268%2013.9311%2012.1744%2013.8227%2012.0587L12.428%208.32533C12.3695%208.14742%2012.2582%207.99159%2012.1088%207.87866C11.9594%207.76573%2011.7791%207.70107%2011.592%207.69333C11.4037%207.69325%2011.2198%207.75012%2011.0644%207.85649C10.909%207.96286%2010.7894%208.11375%2010.7213%208.28933L8.50534%2013.7227C8.44222%2013.8772%208.44307%2014.0505%208.50771%2014.2044C8.57235%2014.3583%208.69548%2014.4802%208.85001%2014.5433C9.00454%2014.6065%209.17782%2014.6056%209.33173%2014.541C9.48563%2014.4763%209.60756%2014.3532%209.67068%2014.1987L10.1133%2013.1147H12.8733L13.2707%2014.1813C13.2978%2014.2611%2013.3406%2014.3345%2013.3966%2014.3974C13.4527%2014.4603%2013.5207%2014.5113%2013.5968%2014.5474C13.6729%2014.5835%2013.7554%2014.6039%2013.8396%2014.6075C13.9237%2014.6111%2014.0077%2014.5978%2014.0866%2014.5684C14.1655%2014.5389%2014.2377%2014.4939%2014.2989%2014.4361C14.3601%2014.3782%2014.409%2014.3087%2014.4429%2014.2315C14.4767%2014.1544%2014.4947%2014.0713%2014.4958%2013.9871C14.4969%2013.9029%2014.4811%2013.8193%2014.4493%2013.7413L13.9893%2012.5067ZM9.55868%208.40267C9.55903%208.32003%209.54303%208.23815%209.51162%208.16172C9.4802%208.0853%209.43397%208.01584%209.3756%207.95735C9.31724%207.89886%209.24788%207.85249%209.17152%207.8209C9.09516%207.78932%209.01331%207.77316%208.93068%207.77333H4.60401C4.4371%207.77333%204.27703%207.83964%204.159%207.95766C4.04098%208.07568%203.97468%208.23576%203.97468%208.40267C3.97468%208.56958%204.04098%208.72965%204.159%208.84767C4.27703%208.9657%204.4371%209.032%204.60401%209.032H6.15068V14.0133C6.15068%2014.1802%206.21698%2014.3403%206.335%2014.4583C6.45303%2014.5764%206.6131%2014.6427%206.78001%2014.6427C6.94692%2014.6427%207.10699%2014.5764%207.22502%2014.4583C7.34304%2014.3403%207.40934%2014.1802%207.40934%2014.0133V9.032H8.92934C9.01209%209.03235%209.09408%209.01632%209.1706%208.98481C9.24711%208.95331%209.31663%208.90697%209.37514%208.84846C9.43365%208.78995%209.47999%208.72043%209.51149%208.64392C9.54299%208.5674%209.55903%208.48541%209.55868%208.40267Z'%20fill='black'/%3e%3c/svg%3e",
  sC =
    "data:image/svg+xml,%3csvg%20width='47'%20height='46'%20viewBox='0%200%2047%2046'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='23.5'%20cy='23'%20r='22'%20fill='white'%20stroke='%23F3F3F3'%20stroke-width='2'/%3e%3cpath%20d='M34.69%2011.8101C33.8509%2010.972%2032.7135%2010.5012%2031.5275%2010.5012C30.3416%2010.5012%2029.2041%2010.972%2028.365%2011.8101L13.425%2026.7501C12.9169%2027.2577%2012.5599%2027.8964%2012.3938%2028.5951L11.025%2034.3476C10.988%2034.5034%2010.9914%2034.6661%2011.0351%2034.8202C11.0788%2034.9743%2011.1612%2035.1146%2011.2745%2035.2278C11.3878%2035.341%2011.5283%2035.4233%2011.6824%2035.4668C11.8365%2035.5103%2011.9992%2035.5136%2012.155%2035.4764L17.9063%2034.1064C18.6054%2033.9404%2019.2446%2033.5834%2019.7525%2033.0751L34.69%2018.1376C35.5281%2017.2985%2035.9989%2016.1611%2035.9989%2014.9751C35.9989%2013.7892%2035.5281%2012.6517%2034.69%2011.8126M29.69%2013.1376C29.9313%2012.8963%2030.2178%2012.7049%2030.5331%2012.5743C30.8483%2012.4437%2031.1863%2012.3765%2031.5275%2012.3765C31.8688%2012.3765%2032.2067%2012.4437%2032.522%2012.5743C32.8372%2012.7049%2033.1237%2012.8963%2033.365%2013.1376C33.6063%2013.3789%2033.7977%2013.6654%2033.9283%2013.9807C34.0589%2014.2959%2034.1261%2014.6339%2034.1261%2014.9751C34.1261%2015.3164%2034.0589%2015.6543%2033.9283%2015.9696C33.7977%2016.2848%2033.6063%2016.5713%2033.365%2016.8126L32.25%2017.9239L28.575%2014.2501L29.69%2013.1376ZM27.25%2015.5776L30.925%2019.2501L18.425%2031.7501C18.1625%2032.0126%2017.8325%2032.1964%2017.4713%2032.2826L13.2013%2033.3001L14.2175%2029.0301C14.3038%2028.6676%2014.4888%2028.3376%2014.7513%2028.0751L27.25%2015.5776Z'%20fill='%23757575'/%3e%3c/svg%3e";
function Yw(e) {
  var t,
    a,
    i = "";
  if (typeof e == "string" || typeof e == "number") i += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var s = e.length;
      for (t = 0; t < s; t++)
        e[t] && (a = Yw(e[t])) && (i && (i += " "), (i += a));
    } else for (a in e) e[a] && (i && (i += " "), (i += a));
  return i;
}
function Kw() {
  for (var e, t, a = 0, i = "", s = arguments.length; a < s; a++)
    (e = arguments[a]) && (t = Yw(e)) && (i && (i += " "), (i += t));
  return i;
}
const Wm = "-",
  lC = (e) => {
    const t = cC(e),
      { conflictingClassGroups: a, conflictingClassGroupModifiers: i } = e;
    return {
      getClassGroupId: (c) => {
        const d = c.split(Wm);
        return (d[0] === "" && d.length !== 1 && d.shift(), Qw(d, t) || uC(c));
      },
      getConflictingClassGroupIds: (c, d) => {
        const m = a[c] || [];
        return d && i[c] ? [...m, ...i[c]] : m;
      },
    };
  },
  Qw = (e, t) => {
    if (e.length === 0) return t.classGroupId;
    const a = e[0],
      i = t.nextPart.get(a),
      s = i ? Qw(e.slice(1), i) : void 0;
    if (s) return s;
    if (t.validators.length === 0) return;
    const u = e.join(Wm);
    return t.validators.find(({ validator: c }) => c(u))?.classGroupId;
  },
  db = /^\[(.+)\]$/,
  uC = (e) => {
    if (db.test(e)) {
      const t = db.exec(e)[1],
        a = t?.substring(0, t.indexOf(":"));
      if (a) return "arbitrary.." + a;
    }
  },
  cC = (e) => {
    const { theme: t, classGroups: a } = e,
      i = { nextPart: new Map(), validators: [] };
    for (const s in a) sm(a[s], i, s, t);
    return i;
  },
  sm = (e, t, a, i) => {
    e.forEach((s) => {
      if (typeof s == "string") {
        const u = s === "" ? t : hb(t, s);
        u.classGroupId = a;
        return;
      }
      if (typeof s == "function") {
        if (fC(s)) {
          sm(s(i), t, a, i);
          return;
        }
        t.validators.push({ validator: s, classGroupId: a });
        return;
      }
      Object.entries(s).forEach(([u, c]) => {
        sm(c, hb(t, u), a, i);
      });
    });
  },
  hb = (e, t) => {
    let a = e;
    return (
      t.split(Wm).forEach((i) => {
        (a.nextPart.has(i) ||
          a.nextPart.set(i, { nextPart: new Map(), validators: [] }),
          (a = a.nextPart.get(i)));
      }),
      a
    );
  },
  fC = (e) => e.isThemeGetter,
  dC = (e) => {
    if (e < 1) return { get: () => {}, set: () => {} };
    let t = 0,
      a = new Map(),
      i = new Map();
    const s = (u, c) => {
      (a.set(u, c), t++, t > e && ((t = 0), (i = a), (a = new Map())));
    };
    return {
      get(u) {
        let c = a.get(u);
        if (c !== void 0) return c;
        if ((c = i.get(u)) !== void 0) return (s(u, c), c);
      },
      set(u, c) {
        a.has(u) ? a.set(u, c) : s(u, c);
      },
    };
  },
  lm = "!",
  um = ":",
  hC = um.length,
  mC = (e) => {
    const { prefix: t, experimentalParseClassName: a } = e;
    let i = (s) => {
      const u = [];
      let c = 0,
        d = 0,
        m = 0,
        h;
      for (let S = 0; S < s.length; S++) {
        let E = s[S];
        if (c === 0 && d === 0) {
          if (E === um) {
            (u.push(s.slice(m, S)), (m = S + hC));
            continue;
          }
          if (E === "/") {
            h = S;
            continue;
          }
        }
        E === "[" ? c++ : E === "]" ? c-- : E === "(" ? d++ : E === ")" && d--;
      }
      const y = u.length === 0 ? s : s.substring(m),
        g = pC(y),
        v = g !== y,
        _ = h && h > m ? h - m : void 0;
      return {
        modifiers: u,
        hasImportantModifier: v,
        baseClassName: g,
        maybePostfixModifierPosition: _,
      };
    };
    if (t) {
      const s = t + um,
        u = i;
      i = (c) =>
        c.startsWith(s)
          ? u(c.substring(s.length))
          : {
              isExternal: !0,
              modifiers: [],
              hasImportantModifier: !1,
              baseClassName: c,
              maybePostfixModifierPosition: void 0,
            };
    }
    if (a) {
      const s = i;
      i = (u) => a({ className: u, parseClassName: s });
    }
    return i;
  },
  pC = (e) =>
    e.endsWith(lm)
      ? e.substring(0, e.length - 1)
      : e.startsWith(lm)
        ? e.substring(1)
        : e,
  yC = (e) => {
    const t = Object.fromEntries(e.orderSensitiveModifiers.map((i) => [i, !0]));
    return (i) => {
      if (i.length <= 1) return i;
      const s = [];
      let u = [];
      return (
        i.forEach((c) => {
          c[0] === "[" || t[c] ? (s.push(...u.sort(), c), (u = [])) : u.push(c);
        }),
        s.push(...u.sort()),
        s
      );
    };
  },
  gC = (e) => ({
    cache: dC(e.cacheSize),
    parseClassName: mC(e),
    sortModifiers: yC(e),
    ...lC(e),
  }),
  vC = /\s+/,
  bC = (e, t) => {
    const {
        parseClassName: a,
        getClassGroupId: i,
        getConflictingClassGroupIds: s,
        sortModifiers: u,
      } = t,
      c = [],
      d = e.trim().split(vC);
    let m = "";
    for (let h = d.length - 1; h >= 0; h -= 1) {
      const y = d[h],
        {
          isExternal: g,
          modifiers: v,
          hasImportantModifier: _,
          baseClassName: S,
          maybePostfixModifierPosition: E,
        } = a(y);
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
      const F = u(v).join(":"),
        D = _ ? F + lm : F,
        B = D + T;
      if (c.includes(B)) continue;
      c.push(B);
      const L = s(T, x);
      for (let C = 0; C < L.length; ++C) {
        const Y = L[C];
        c.push(D + Y);
      }
      m = y + (m.length > 0 ? " " + m : m);
    }
    return m;
  };
function wC() {
  let e = 0,
    t,
    a,
    i = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (a = Xw(t)) && (i && (i += " "), (i += a));
  return i;
}
const Xw = (e) => {
  if (typeof e == "string") return e;
  let t,
    a = "";
  for (let i = 0; i < e.length; i++)
    e[i] && (t = Xw(e[i])) && (a && (a += " "), (a += t));
  return a;
};
function SC(e, ...t) {
  let a,
    i,
    s,
    u = c;
  function c(m) {
    const h = t.reduce((y, g) => g(y), e());
    return ((a = gC(h)), (i = a.cache.get), (s = a.cache.set), (u = d), d(m));
  }
  function d(m) {
    const h = i(m);
    if (h) return h;
    const y = bC(m, a);
    return (s(m, y), y);
  }
  return function () {
    return u(wC.apply(null, arguments));
  };
}
const It = (e) => {
    const t = (a) => a[e] || [];
    return ((t.isThemeGetter = !0), t);
  },
  Jw = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
  Ww = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
  _C = /^\d+\/\d+$/,
  EC = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  xC =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  RC = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
  OC = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  AC =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  Eo = (e) => _C.test(e),
  Ze = (e) => !!e && !Number.isNaN(Number(e)),
  Fa = (e) => !!e && Number.isInteger(Number(e)),
  Mh = (e) => e.endsWith("%") && Ze(e.slice(0, -1)),
  aa = (e) => EC.test(e),
  CC = () => !0,
  TC = (e) => xC.test(e) && !RC.test(e),
  e2 = () => !1,
  DC = (e) => OC.test(e),
  MC = (e) => AC.test(e),
  NC = (e) => !Te(e) && !De(e),
  zC = (e) => Bo(e, r2, e2),
  Te = (e) => Jw.test(e),
  xi = (e) => Bo(e, a2, TC),
  Nh = (e) => Bo(e, PC, Ze),
  mb = (e) => Bo(e, t2, e2),
  kC = (e) => Bo(e, n2, MC),
  Zu = (e) => Bo(e, i2, DC),
  De = (e) => Ww.test(e),
  Qs = (e) => Vo(e, a2),
  jC = (e) => Vo(e, FC),
  pb = (e) => Vo(e, t2),
  LC = (e) => Vo(e, r2),
  UC = (e) => Vo(e, n2),
  Iu = (e) => Vo(e, i2, !0),
  Bo = (e, t, a) => {
    const i = Jw.exec(e);
    return i ? (i[1] ? t(i[1]) : a(i[2])) : !1;
  },
  Vo = (e, t, a = !1) => {
    const i = Ww.exec(e);
    return i ? (i[1] ? t(i[1]) : a) : !1;
  },
  t2 = (e) => e === "position" || e === "percentage",
  n2 = (e) => e === "image" || e === "url",
  r2 = (e) => e === "length" || e === "size" || e === "bg-size",
  a2 = (e) => e === "length",
  PC = (e) => e === "number",
  FC = (e) => e === "family-name",
  i2 = (e) => e === "shadow",
  BC = () => {
    const e = It("color"),
      t = It("font"),
      a = It("text"),
      i = It("font-weight"),
      s = It("tracking"),
      u = It("leading"),
      c = It("breakpoint"),
      d = It("container"),
      m = It("spacing"),
      h = It("radius"),
      y = It("shadow"),
      g = It("inset-shadow"),
      v = It("text-shadow"),
      _ = It("drop-shadow"),
      S = It("blur"),
      E = It("perspective"),
      x = It("aspect"),
      T = It("ease"),
      F = It("animate"),
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
      L = () => [...B(), De, Te],
      C = () => ["auto", "hidden", "clip", "visible", "scroll"],
      Y = () => ["auto", "contain", "none"],
      Q = () => [De, Te, m],
      me = () => [Eo, "full", "auto", ...Q()],
      pe = () => [Fa, "none", "subgrid", De, Te],
      we = () => ["auto", { span: ["full", Fa, De, Te] }, Fa, De, Te],
      be = () => [Fa, "auto", De, Te],
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
        Eo,
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
      ie = () => [...B(), pb, mb, { position: [De, Te] }],
      N = () => ["no-repeat", { repeat: ["", "x", "y", "space", "round"] }],
      W = () => ["auto", "cover", "contain", LC, zC, { size: [De, Te] }],
      fe = () => [Mh, Qs, xi],
      le = () => ["", "none", "full", h, De, Te],
      ve = () => ["", Ze, Qs, xi],
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
      Ne = () => [Ze, Mh, pb, mb],
      qe = () => ["", "none", S, De, Te],
      gt = () => ["none", Ze, De, Te],
      at = () => ["none", Ze, De, Te],
      ut = () => [Ze, De, Te],
      Qt = () => [Eo, "full", ...Q()];
    return {
      cacheSize: 500,
      theme: {
        animate: ["spin", "ping", "pulse", "bounce"],
        aspect: ["video"],
        blur: [aa],
        breakpoint: [aa],
        color: [CC],
        container: [aa],
        "drop-shadow": [aa],
        ease: ["in", "out", "in-out"],
        font: [NC],
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
        "inset-shadow": [aa],
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
        perspective: [
          "dramatic",
          "near",
          "normal",
          "midrange",
          "distant",
          "none",
        ],
        radius: [aa],
        shadow: [aa],
        spacing: ["px", Ze],
        text: [aa],
        "text-shadow": [aa],
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"],
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", Eo, Te, De, x] }],
        container: ["container"],
        columns: [{ columns: [Ze, Te, De, d] }],
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
        "object-position": [{ object: L() }],
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
        z: [{ z: [Fa, "auto", De, Te] }],
        basis: [{ basis: [Eo, "full", "auto", d, ...Q()] }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["nowrap", "wrap", "wrap-reverse"] }],
        flex: [{ flex: [Ze, Eo, "auto", "initial", "none", Te] }],
        grow: [{ grow: ["", Ze, De, Te] }],
        shrink: [{ shrink: ["", Ze, De, Te] }],
        order: [{ order: [Fa, "first", "last", "none", De, Te] }],
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
        "font-size": [{ text: ["base", a, Qs, xi] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [{ font: [i, De, Nh] }],
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
              Mh,
              Te,
            ],
          },
        ],
        "font-family": [{ font: [jC, Te, t] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [{ tracking: [s, De, Te] }],
        "line-clamp": [{ "line-clamp": [Ze, "none", De, Nh] }],
        leading: [{ leading: [u, ...Q()] }],
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
          { decoration: [Ze, "from-font", "auto", De, xi] },
        ],
        "text-decoration-color": [{ decoration: q() }],
        "underline-offset": [{ "underline-offset": [Ze, "auto", De, Te] }],
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
                  Fa,
                  De,
                  Te,
                ],
                radial: ["", De, Te],
                conic: [Fa, De, Te],
              },
              UC,
              kC,
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
        "outline-offset": [{ "outline-offset": [Ze, De, Te] }],
        "outline-w": [{ outline: ["", Ze, Qs, xi] }],
        "outline-color": [{ outline: q() }],
        shadow: [{ shadow: ["", "none", y, Iu, Zu] }],
        "shadow-color": [{ shadow: q() }],
        "inset-shadow": [{ "inset-shadow": ["none", g, Iu, Zu] }],
        "inset-shadow-color": [{ "inset-shadow": q() }],
        "ring-w": [{ ring: ve() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: q() }],
        "ring-offset-w": [{ "ring-offset": [Ze, xi] }],
        "ring-offset-color": [{ "ring-offset": q() }],
        "inset-ring-w": [{ "inset-ring": ve() }],
        "inset-ring-color": [{ "inset-ring": q() }],
        "text-shadow": [{ "text-shadow": ["none", v, Iu, Zu] }],
        "text-shadow-color": [{ "text-shadow": q() }],
        opacity: [{ opacity: [Ze, De, Te] }],
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
        "mask-image-linear-pos": [{ "mask-linear": [Ze] }],
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
        "mask-image-conic-pos": [{ "mask-conic": [Ze] }],
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
        brightness: [{ brightness: [Ze, De, Te] }],
        contrast: [{ contrast: [Ze, De, Te] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", _, Iu, Zu] }],
        "drop-shadow-color": [{ "drop-shadow": q() }],
        grayscale: [{ grayscale: ["", Ze, De, Te] }],
        "hue-rotate": [{ "hue-rotate": [Ze, De, Te] }],
        invert: [{ invert: ["", Ze, De, Te] }],
        saturate: [{ saturate: [Ze, De, Te] }],
        sepia: [{ sepia: ["", Ze, De, Te] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none", De, Te] }],
        "backdrop-blur": [{ "backdrop-blur": qe() }],
        "backdrop-brightness": [{ "backdrop-brightness": [Ze, De, Te] }],
        "backdrop-contrast": [{ "backdrop-contrast": [Ze, De, Te] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": ["", Ze, De, Te] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [Ze, De, Te] }],
        "backdrop-invert": [{ "backdrop-invert": ["", Ze, De, Te] }],
        "backdrop-opacity": [{ "backdrop-opacity": [Ze, De, Te] }],
        "backdrop-saturate": [{ "backdrop-saturate": [Ze, De, Te] }],
        "backdrop-sepia": [{ "backdrop-sepia": ["", Ze, De, Te] }],
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
        duration: [{ duration: [Ze, "initial", De, Te] }],
        ease: [{ ease: ["linear", "initial", T, De, Te] }],
        delay: [{ delay: [Ze, De, Te] }],
        animate: [{ animate: ["none", F, De, Te] }],
        backface: [{ backface: ["hidden", "visible"] }],
        perspective: [{ perspective: [E, De, Te] }],
        "perspective-origin": [{ "perspective-origin": L() }],
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
        "transform-origin": [{ origin: L() }],
        "transform-style": [{ transform: ["3d", "flat"] }],
        translate: [{ translate: Qt() }],
        "translate-x": [{ "translate-x": Qt() }],
        "translate-y": [{ "translate-y": Qt() }],
        "translate-z": [{ "translate-z": Qt() }],
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
        "stroke-w": [{ stroke: [Ze, Qs, xi, Nh] }],
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
  o2 = SC(BC),
  VC = (...e) => o2(Kw(e)),
  $C = { small: "px-3 py-1.5 text-base", large: "px-5 py-3 text-xl" },
  yb = { small: "rounded-[10px]", large: "rounded-[50px]" },
  HC = {
    primary: "bg-brand-primary text-bg-white",
    outlined: "bg-bg-white border border-2 border-scale-100 text-scale-600",
    gray: "bg-scale-100 text-scale-500",
    darkgray: "bg-scale-200 text-scale-300",
    kakao: "bg-point-kakao text-scale-600",
    disabled: "bg-brand-secondary text-[#C5B6AD]",
  };
function ko({
  children: e,
  className: t,
  disabled: a = !1,
  variant: i = "primary",
  size: s = "large",
  isRounded: u = !1,
  ...c
}) {
  const d = VC(
    "font-bold cursor-pointer",
    t,
    $C[s],
    u ? yb.large : yb.small,
    HC[a ? "disabled" : i],
  );
  return k.jsx("button", { className: d, ...c, children: e });
}
function Ie(e, t, { checkForDefaultPrevented: a = !0 } = {}) {
  return function (s) {
    if ((e?.(s), a === !1 || !s.defaultPrevented)) return t?.(s);
  };
}
function gb(e, t) {
  if (typeof e == "function") return e(t);
  e != null && (e.current = t);
}
function Zc(...e) {
  return (t) => {
    let a = !1;
    const i = e.map((s) => {
      const u = gb(s, t);
      return (!a && typeof u == "function" && (a = !0), u);
    });
    if (a)
      return () => {
        for (let s = 0; s < i.length; s++) {
          const u = i[s];
          typeof u == "function" ? u() : gb(e[s], null);
        }
      };
  };
}
function an(...e) {
  return w.useCallback(Zc(...e), e);
}
function ZC(e, t) {
  const a = w.createContext(t),
    i = (u) => {
      const { children: c, ...d } = u,
        m = w.useMemo(() => d, Object.values(d));
      return k.jsx(a.Provider, { value: m, children: c });
    };
  i.displayName = e + "Provider";
  function s(u) {
    const c = w.useContext(a);
    if (c) return c;
    if (t !== void 0) return t;
    throw new Error(`\`${u}\` must be used within \`${e}\``);
  }
  return [i, s];
}
function $o(e, t = []) {
  let a = [];
  function i(u, c) {
    const d = w.createContext(c),
      m = a.length;
    a = [...a, c];
    const h = (g) => {
      const { scope: v, children: _, ...S } = g,
        E = v?.[e]?.[m] || d,
        x = w.useMemo(() => S, Object.values(S));
      return k.jsx(E.Provider, { value: x, children: _ });
    };
    h.displayName = u + "Provider";
    function y(g, v) {
      const _ = v?.[e]?.[m] || d,
        S = w.useContext(_);
      if (S) return S;
      if (c !== void 0) return c;
      throw new Error(`\`${g}\` must be used within \`${u}\``);
    }
    return [h, y];
  }
  const s = () => {
    const u = a.map((c) => w.createContext(c));
    return function (d) {
      const m = d?.[e] || u;
      return w.useMemo(() => ({ [`__scope${e}`]: { ...d, [e]: m } }), [d, m]);
    };
  };
  return ((s.scopeName = e), [i, IC(s, ...t)]);
}
function IC(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const a = () => {
    const i = e.map((s) => ({ useScope: s(), scopeName: s.scopeName }));
    return function (u) {
      const c = i.reduce((d, { useScope: m, scopeName: h }) => {
        const g = m(u)[`__scope${h}`];
        return { ...d, ...g };
      }, {});
      return w.useMemo(() => ({ [`__scope${t.scopeName}`]: c }), [c]);
    };
  };
  return ((a.scopeName = t.scopeName), a);
}
var Ga = globalThis?.document ? w.useLayoutEffect : () => {},
  qC = yw[" useId ".trim().toString()] || (() => {}),
  GC = 0;
function Mo(e) {
  const [t, a] = w.useState(qC());
  return (
    Ga(() => {
      a((i) => i ?? String(GC++));
    }, [e]),
    e || (t ? `radix-${t}` : "")
  );
}
var YC = yw[" useInsertionEffect ".trim().toString()] || Ga;
function ep({ prop: e, defaultProp: t, onChange: a = () => {}, caller: i }) {
  const [s, u, c] = KC({ defaultProp: t, onChange: a }),
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
        const g = QC(y) ? y(e) : y;
        g !== e && c.current?.(g);
      } else u(y);
    },
    [d, e, u, c],
  );
  return [m, h];
}
function KC({ defaultProp: e, onChange: t }) {
  const [a, i] = w.useState(e),
    s = w.useRef(a),
    u = w.useRef(t);
  return (
    YC(() => {
      u.current = t;
    }, [t]),
    w.useEffect(() => {
      s.current !== a && (u.current?.(a), (s.current = a));
    }, [a, s]),
    [a, i, u]
  );
}
function QC(e) {
  return typeof e == "function";
}
function fl(e) {
  const t = XC(e),
    a = w.forwardRef((i, s) => {
      const { children: u, ...c } = i,
        d = w.Children.toArray(u),
        m = d.find(WC);
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
        return k.jsx(t, {
          ...c,
          ref: s,
          children: w.isValidElement(h) ? w.cloneElement(h, void 0, y) : null,
        });
      }
      return k.jsx(t, { ...c, ref: s, children: u });
    });
  return ((a.displayName = `${e}.Slot`), a);
}
function XC(e) {
  const t = w.forwardRef((a, i) => {
    const { children: s, ...u } = a;
    if (w.isValidElement(s)) {
      const c = tT(s),
        d = eT(u, s.props);
      return (
        s.type !== w.Fragment && (d.ref = i ? Zc(i, c) : c),
        w.cloneElement(s, d)
      );
    }
    return w.Children.count(s) > 1 ? w.Children.only(null) : null;
  });
  return ((t.displayName = `${e}.SlotClone`), t);
}
var JC = Symbol("radix.slottable");
function WC(e) {
  return (
    w.isValidElement(e) &&
    typeof e.type == "function" &&
    "__radixId" in e.type &&
    e.type.__radixId === JC
  );
}
function eT(e, t) {
  const a = { ...t };
  for (const i in t) {
    const s = e[i],
      u = t[i];
    /^on[A-Z]/.test(i)
      ? s && u
        ? (a[i] = (...d) => {
            const m = u(...d);
            return (s(...d), m);
          })
        : s && (a[i] = s)
      : i === "style"
        ? (a[i] = { ...s, ...u })
        : i === "className" && (a[i] = [s, u].filter(Boolean).join(" "));
  }
  return { ...e, ...a };
}
function tT(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
    a = t && "isReactWarning" in t && t.isReactWarning;
  return a
    ? e.ref
    : ((t = Object.getOwnPropertyDescriptor(e, "ref")?.get),
      (a = t && "isReactWarning" in t && t.isReactWarning),
      a ? e.props.ref : e.props.ref || e.ref);
}
var nT = [
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
  Ut = nT.reduce((e, t) => {
    const a = fl(`Primitive.${t}`),
      i = w.forwardRef((s, u) => {
        const { asChild: c, ...d } = s,
          m = c ? a : t;
        return (
          typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
          k.jsx(m, { ...d, ref: u })
        );
      });
    return ((i.displayName = `Primitive.${t}`), { ...e, [t]: i });
  }, {});
function s2(e, t) {
  e && Hc.flushSync(() => e.dispatchEvent(t));
}
function la(e) {
  const t = w.useRef(e);
  return (
    w.useEffect(() => {
      t.current = e;
    }),
    w.useMemo(
      () =>
        (...a) =>
          t.current?.(...a),
      [],
    )
  );
}
function rT(e, t = globalThis?.document) {
  const a = la(e);
  w.useEffect(() => {
    const i = (s) => {
      s.key === "Escape" && a(s);
    };
    return (
      t.addEventListener("keydown", i, { capture: !0 }),
      () => t.removeEventListener("keydown", i, { capture: !0 })
    );
  }, [a, t]);
}
var aT = "DismissableLayer",
  cm = "dismissableLayer.update",
  iT = "dismissableLayer.pointerDownOutside",
  oT = "dismissableLayer.focusOutside",
  vb,
  l2 = w.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  tp = w.forwardRef((e, t) => {
    const {
        disableOutsidePointerEvents: a = !1,
        onEscapeKeyDown: i,
        onPointerDownOutside: s,
        onFocusOutside: u,
        onInteractOutside: c,
        onDismiss: d,
        ...m
      } = e,
      h = w.useContext(l2),
      [y, g] = w.useState(null),
      v = y?.ownerDocument ?? globalThis?.document,
      [, _] = w.useState({}),
      S = an(t, (Y) => g(Y)),
      E = Array.from(h.layers),
      [x] = [...h.layersWithOutsidePointerEventsDisabled].slice(-1),
      T = E.indexOf(x),
      F = y ? E.indexOf(y) : -1,
      D = h.layersWithOutsidePointerEventsDisabled.size > 0,
      B = F >= T,
      L = uT((Y) => {
        const Q = Y.target,
          me = [...h.branches].some((pe) => pe.contains(Q));
        !B || me || (s?.(Y), c?.(Y), Y.defaultPrevented || d?.());
      }, v),
      C = cT((Y) => {
        const Q = Y.target;
        [...h.branches].some((pe) => pe.contains(Q)) ||
          (u?.(Y), c?.(Y), Y.defaultPrevented || d?.());
      }, v);
    return (
      rT((Y) => {
        F === h.layers.size - 1 &&
          (i?.(Y), !Y.defaultPrevented && d && (Y.preventDefault(), d()));
      }, v),
      w.useEffect(() => {
        if (y)
          return (
            a &&
              (h.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((vb = v.body.style.pointerEvents),
                (v.body.style.pointerEvents = "none")),
              h.layersWithOutsidePointerEventsDisabled.add(y)),
            h.layers.add(y),
            bb(),
            () => {
              a &&
                h.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (v.body.style.pointerEvents = vb);
            }
          );
      }, [y, v, a, h]),
      w.useEffect(
        () => () => {
          y &&
            (h.layers.delete(y),
            h.layersWithOutsidePointerEventsDisabled.delete(y),
            bb());
        },
        [y, h],
      ),
      w.useEffect(() => {
        const Y = () => _({});
        return (
          document.addEventListener(cm, Y),
          () => document.removeEventListener(cm, Y)
        );
      }, []),
      k.jsx(Ut.div, {
        ...m,
        ref: S,
        style: {
          pointerEvents: D ? (B ? "auto" : "none") : void 0,
          ...e.style,
        },
        onFocusCapture: Ie(e.onFocusCapture, C.onFocusCapture),
        onBlurCapture: Ie(e.onBlurCapture, C.onBlurCapture),
        onPointerDownCapture: Ie(
          e.onPointerDownCapture,
          L.onPointerDownCapture,
        ),
      })
    );
  });
tp.displayName = aT;
var sT = "DismissableLayerBranch",
  lT = w.forwardRef((e, t) => {
    const a = w.useContext(l2),
      i = w.useRef(null),
      s = an(t, i);
    return (
      w.useEffect(() => {
        const u = i.current;
        if (u)
          return (
            a.branches.add(u),
            () => {
              a.branches.delete(u);
            }
          );
      }, [a.branches]),
      k.jsx(Ut.div, { ...e, ref: s })
    );
  });
lT.displayName = sT;
function uT(e, t = globalThis?.document) {
  const a = la(e),
    i = w.useRef(!1),
    s = w.useRef(() => {});
  return (
    w.useEffect(() => {
      const u = (d) => {
          if (d.target && !i.current) {
            let m = function () {
              u2(iT, a, h, { discrete: !0 });
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
          t.addEventListener("pointerdown", u);
        }, 0);
      return () => {
        (window.clearTimeout(c),
          t.removeEventListener("pointerdown", u),
          t.removeEventListener("click", s.current));
      };
    }, [t, a]),
    { onPointerDownCapture: () => (i.current = !0) }
  );
}
function cT(e, t = globalThis?.document) {
  const a = la(e),
    i = w.useRef(!1);
  return (
    w.useEffect(() => {
      const s = (u) => {
        u.target &&
          !i.current &&
          u2(oT, a, { originalEvent: u }, { discrete: !1 });
      };
      return (
        t.addEventListener("focusin", s),
        () => t.removeEventListener("focusin", s)
      );
    }, [t, a]),
    {
      onFocusCapture: () => (i.current = !0),
      onBlurCapture: () => (i.current = !1),
    }
  );
}
function bb() {
  const e = new CustomEvent(cm);
  document.dispatchEvent(e);
}
function u2(e, t, a, { discrete: i }) {
  const s = a.originalEvent.target,
    u = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: a });
  (t && s.addEventListener(e, t, { once: !0 }),
    i ? s2(s, u) : s.dispatchEvent(u));
}
var zh = "focusScope.autoFocusOnMount",
  kh = "focusScope.autoFocusOnUnmount",
  wb = { bubbles: !1, cancelable: !0 },
  fT = "FocusScope",
  np = w.forwardRef((e, t) => {
    const {
        loop: a = !1,
        trapped: i = !1,
        onMountAutoFocus: s,
        onUnmountAutoFocus: u,
        ...c
      } = e,
      [d, m] = w.useState(null),
      h = la(s),
      y = la(u),
      g = w.useRef(null),
      v = an(t, (E) => m(E)),
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
            d.contains(B) ? (g.current = B) : Va(g.current, { select: !0 });
          },
          x = function (D) {
            if (_.paused || !d) return;
            const B = D.relatedTarget;
            B !== null && (d.contains(B) || Va(g.current, { select: !0 }));
          },
          T = function (D) {
            if (document.activeElement === document.body)
              for (const L of D) L.removedNodes.length > 0 && Va(d);
          };
        (document.addEventListener("focusin", E),
          document.addEventListener("focusout", x));
        const F = new MutationObserver(T);
        return (
          d && F.observe(d, { childList: !0, subtree: !0 }),
          () => {
            (document.removeEventListener("focusin", E),
              document.removeEventListener("focusout", x),
              F.disconnect());
          }
        );
      }
    }, [i, d, _.paused]),
      w.useEffect(() => {
        if (d) {
          _b.add(_);
          const E = document.activeElement;
          if (!d.contains(E)) {
            const T = new CustomEvent(zh, wb);
            (d.addEventListener(zh, h),
              d.dispatchEvent(T),
              T.defaultPrevented ||
                (dT(gT(c2(d)), { select: !0 }),
                document.activeElement === E && Va(d)));
          }
          return () => {
            (d.removeEventListener(zh, h),
              setTimeout(() => {
                const T = new CustomEvent(kh, wb);
                (d.addEventListener(kh, y),
                  d.dispatchEvent(T),
                  T.defaultPrevented || Va(E ?? document.body, { select: !0 }),
                  d.removeEventListener(kh, y),
                  _b.remove(_));
              }, 0));
          };
        }
      }, [d, h, y, _]));
    const S = w.useCallback(
      (E) => {
        if ((!a && !i) || _.paused) return;
        const x = E.key === "Tab" && !E.altKey && !E.ctrlKey && !E.metaKey,
          T = document.activeElement;
        if (x && T) {
          const F = E.currentTarget,
            [D, B] = hT(F);
          D && B
            ? !E.shiftKey && T === B
              ? (E.preventDefault(), a && Va(D, { select: !0 }))
              : E.shiftKey &&
                T === D &&
                (E.preventDefault(), a && Va(B, { select: !0 }))
            : T === F && E.preventDefault();
        }
      },
      [a, i, _.paused],
    );
    return k.jsx(Ut.div, { tabIndex: -1, ...c, ref: v, onKeyDown: S });
  });
np.displayName = fT;
function dT(e, { select: t = !1 } = {}) {
  const a = document.activeElement;
  for (const i of e)
    if ((Va(i, { select: t }), document.activeElement !== a)) return;
}
function hT(e) {
  const t = c2(e),
    a = Sb(t, e),
    i = Sb(t.reverse(), e);
  return [a, i];
}
function c2(e) {
  const t = [],
    a = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (i) => {
        const s = i.tagName === "INPUT" && i.type === "hidden";
        return i.disabled || i.hidden || s
          ? NodeFilter.FILTER_SKIP
          : i.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
      },
    });
  for (; a.nextNode(); ) t.push(a.currentNode);
  return t;
}
function Sb(e, t) {
  for (const a of e) if (!mT(a, { upTo: t })) return a;
}
function mT(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function pT(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Va(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const a = document.activeElement;
    (e.focus({ preventScroll: !0 }), e !== a && pT(e) && t && e.select());
  }
}
var _b = yT();
function yT() {
  let e = [];
  return {
    add(t) {
      const a = e[0];
      (t !== a && a?.pause(), (e = Eb(e, t)), e.unshift(t));
    },
    remove(t) {
      ((e = Eb(e, t)), e[0]?.resume());
    },
  };
}
function Eb(e, t) {
  const a = [...e],
    i = a.indexOf(t);
  return (i !== -1 && a.splice(i, 1), a);
}
function gT(e) {
  return e.filter((t) => t.tagName !== "A");
}
var vT = "Portal",
  rp = w.forwardRef((e, t) => {
    const { container: a, ...i } = e,
      [s, u] = w.useState(!1);
    Ga(() => u(!0), []);
    const c = a || (s && globalThis?.document?.body);
    return c ? eC.createPortal(k.jsx(Ut.div, { ...i, ref: t }), c) : null;
  });
rp.displayName = vT;
function bT(e, t) {
  return w.useReducer((a, i) => t[a][i] ?? a, e);
}
var Ja = (e) => {
  const { present: t, children: a } = e,
    i = wT(t),
    s =
      typeof a == "function" ? a({ present: i.isPresent }) : w.Children.only(a),
    u = an(i.ref, ST(s));
  return typeof a == "function" || i.isPresent
    ? w.cloneElement(s, { ref: u })
    : null;
};
Ja.displayName = "Presence";
function wT(e) {
  const [t, a] = w.useState(),
    i = w.useRef(null),
    s = w.useRef(e),
    u = w.useRef("none"),
    c = e ? "mounted" : "unmounted",
    [d, m] = bT(c, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    w.useEffect(() => {
      const h = qu(i.current);
      u.current = d === "mounted" ? h : "none";
    }, [d]),
    Ga(() => {
      const h = i.current,
        y = s.current;
      if (y !== e) {
        const v = u.current,
          _ = qu(h);
        (e
          ? m("MOUNT")
          : _ === "none" || h?.display === "none"
            ? m("UNMOUNT")
            : m(y && v !== _ ? "ANIMATION_OUT" : "UNMOUNT"),
          (s.current = e));
      }
    }, [e, m]),
    Ga(() => {
      if (t) {
        let h;
        const y = t.ownerDocument.defaultView ?? window,
          g = (_) => {
            const E = qu(i.current).includes(CSS.escape(_.animationName));
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
            _.target === t && (u.current = qu(i.current));
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
        ((i.current = h ? getComputedStyle(h) : null), a(h));
      }, []),
    }
  );
}
function qu(e) {
  return e?.animationName || "none";
}
function ST(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
    a = t && "isReactWarning" in t && t.isReactWarning;
  return a
    ? e.ref
    : ((t = Object.getOwnPropertyDescriptor(e, "ref")?.get),
      (a = t && "isReactWarning" in t && t.isReactWarning),
      a ? e.props.ref : e.props.ref || e.ref);
}
var jh = 0;
function f2() {
  w.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return (
      document.body.insertAdjacentElement("afterbegin", e[0] ?? xb()),
      document.body.insertAdjacentElement("beforeend", e[1] ?? xb()),
      jh++,
      () => {
        (jh === 1 &&
          document
            .querySelectorAll("[data-radix-focus-guard]")
            .forEach((t) => t.remove()),
          jh--);
      }
    );
  }, []);
}
function xb() {
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
var Rr = function () {
  return (
    (Rr =
      Object.assign ||
      function (t) {
        for (var a, i = 1, s = arguments.length; i < s; i++) {
          a = arguments[i];
          for (var u in a)
            Object.prototype.hasOwnProperty.call(a, u) && (t[u] = a[u]);
        }
        return t;
      }),
    Rr.apply(this, arguments)
  );
};
function d2(e, t) {
  var a = {};
  for (var i in e)
    Object.prototype.hasOwnProperty.call(e, i) &&
      t.indexOf(i) < 0 &&
      (a[i] = e[i]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, i = Object.getOwnPropertySymbols(e); s < i.length; s++)
      t.indexOf(i[s]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, i[s]) &&
        (a[i[s]] = e[i[s]]);
  return a;
}
function _T(e, t, a) {
  if (a || arguments.length === 2)
    for (var i = 0, s = t.length, u; i < s; i++)
      (u || !(i in t)) &&
        (u || (u = Array.prototype.slice.call(t, 0, i)), (u[i] = t[i]));
  return e.concat(u || Array.prototype.slice.call(t));
}
var fc = "right-scroll-bar-position",
  dc = "width-before-scroll-bar",
  ET = "with-scroll-bars-hidden",
  xT = "--removed-body-scroll-bar-size";
function Lh(e, t) {
  return (typeof e == "function" ? e(t) : e && (e.current = t), e);
}
function RT(e, t) {
  var a = w.useState(function () {
    return {
      value: e,
      callback: t,
      facade: {
        get current() {
          return a.value;
        },
        set current(i) {
          var s = a.value;
          s !== i && ((a.value = i), a.callback(i, s));
        },
      },
    };
  })[0];
  return ((a.callback = t), a.facade);
}
var OT = typeof window < "u" ? w.useLayoutEffect : w.useEffect,
  Rb = new WeakMap();
function AT(e, t) {
  var a = RT(null, function (i) {
    return e.forEach(function (s) {
      return Lh(s, i);
    });
  });
  return (
    OT(
      function () {
        var i = Rb.get(a);
        if (i) {
          var s = new Set(i),
            u = new Set(e),
            c = a.current;
          (s.forEach(function (d) {
            u.has(d) || Lh(d, null);
          }),
            u.forEach(function (d) {
              s.has(d) || Lh(d, c);
            }));
        }
        Rb.set(a, e);
      },
      [e],
    ),
    a
  );
}
function CT(e) {
  return e;
}
function TT(e, t) {
  t === void 0 && (t = CT);
  var a = [],
    i = !1,
    s = {
      read: function () {
        if (i)
          throw new Error(
            "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.",
          );
        return a.length ? a[a.length - 1] : e;
      },
      useMedium: function (u) {
        var c = t(u, i);
        return (
          a.push(c),
          function () {
            a = a.filter(function (d) {
              return d !== c;
            });
          }
        );
      },
      assignSyncMedium: function (u) {
        for (i = !0; a.length; ) {
          var c = a;
          ((a = []), c.forEach(u));
        }
        a = {
          push: function (d) {
            return u(d);
          },
          filter: function () {
            return a;
          },
        };
      },
      assignMedium: function (u) {
        i = !0;
        var c = [];
        if (a.length) {
          var d = a;
          ((a = []), d.forEach(u), (c = a));
        }
        var m = function () {
            var y = c;
            ((c = []), y.forEach(u));
          },
          h = function () {
            return Promise.resolve().then(m);
          };
        (h(),
          (a = {
            push: function (y) {
              (c.push(y), h());
            },
            filter: function (y) {
              return ((c = c.filter(y)), a);
            },
          }));
      },
    };
  return s;
}
function DT(e) {
  e === void 0 && (e = {});
  var t = TT(null);
  return ((t.options = Rr({ async: !0, ssr: !1 }, e)), t);
}
var h2 = function (e) {
  var t = e.sideCar,
    a = d2(e, ["sideCar"]);
  if (!t)
    throw new Error(
      "Sidecar: please provide `sideCar` property to import the right car",
    );
  var i = t.read();
  if (!i) throw new Error("Sidecar medium not found");
  return w.createElement(i, Rr({}, a));
};
h2.isSideCarExport = !0;
function MT(e, t) {
  return (e.useMedium(t), h2);
}
var m2 = DT(),
  Uh = function () {},
  Ic = w.forwardRef(function (e, t) {
    var a = w.useRef(null),
      i = w.useState({
        onScrollCapture: Uh,
        onWheelCapture: Uh,
        onTouchMoveCapture: Uh,
      }),
      s = i[0],
      u = i[1],
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
      F = T === void 0 ? "div" : T,
      D = e.gapMode,
      B = d2(e, [
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
      L = v,
      C = AT([a, t]),
      Y = Rr(Rr({}, B), s);
    return w.createElement(
      w.Fragment,
      null,
      y &&
        w.createElement(L, {
          sideCar: m2,
          removeScrollBar: h,
          shards: g,
          noRelative: _,
          noIsolation: S,
          inert: E,
          setCallbacks: u,
          allowPinchZoom: !!x,
          lockRef: a,
          gapMode: D,
        }),
      c
        ? w.cloneElement(w.Children.only(d), Rr(Rr({}, Y), { ref: C }))
        : w.createElement(F, Rr({}, Y, { className: m, ref: C }), d),
    );
  });
Ic.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
Ic.classNames = { fullWidth: dc, zeroRight: fc };
var NT = function () {
  if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
function zT() {
  if (!document) return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = NT();
  return (t && e.setAttribute("nonce", t), e);
}
function kT(e, t) {
  e.styleSheet
    ? (e.styleSheet.cssText = t)
    : e.appendChild(document.createTextNode(t));
}
function jT(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var LT = function () {
    var e = 0,
      t = null;
    return {
      add: function (a) {
        (e == 0 && (t = zT()) && (kT(t, a), jT(t)), e++);
      },
      remove: function () {
        (e--,
          !e && t && (t.parentNode && t.parentNode.removeChild(t), (t = null)));
      },
    };
  },
  UT = function () {
    var e = LT();
    return function (t, a) {
      w.useEffect(
        function () {
          return (
            e.add(t),
            function () {
              e.remove();
            }
          );
        },
        [t && a],
      );
    };
  },
  p2 = function () {
    var e = UT(),
      t = function (a) {
        var i = a.styles,
          s = a.dynamic;
        return (e(i, s), null);
      };
    return t;
  },
  PT = { left: 0, top: 0, right: 0, gap: 0 },
  Ph = function (e) {
    return parseInt(e || "", 10) || 0;
  },
  FT = function (e) {
    var t = window.getComputedStyle(document.body),
      a = t[e === "padding" ? "paddingLeft" : "marginLeft"],
      i = t[e === "padding" ? "paddingTop" : "marginTop"],
      s = t[e === "padding" ? "paddingRight" : "marginRight"];
    return [Ph(a), Ph(i), Ph(s)];
  },
  BT = function (e) {
    if ((e === void 0 && (e = "margin"), typeof window > "u")) return PT;
    var t = FT(e),
      a = document.documentElement.clientWidth,
      i = window.innerWidth;
    return {
      left: t[0],
      top: t[1],
      right: t[2],
      gap: Math.max(0, i - a + t[2] - t[0]),
    };
  },
  VT = p2(),
  No = "data-scroll-locked",
  $T = function (e, t, a, i) {
    var s = e.left,
      u = e.top,
      c = e.right,
      d = e.gap;
    return (
      a === void 0 && (a = "margin"),
      `
  .`
        .concat(
          ET,
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
          No,
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
            a === "margin" &&
              `
    padding-left: `
                .concat(
                  s,
                  `px;
    padding-top: `,
                )
                .concat(
                  u,
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
            a === "padding" &&
              "padding-right: ".concat(d, "px ").concat(i, ";"),
          ]
            .filter(Boolean)
            .join(""),
          `
  }
  
  .`,
        )
        .concat(
          fc,
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
          dc,
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
        .concat(fc, " .")
        .concat(
          fc,
          ` {
    right: 0 `,
        )
        .concat(
          i,
          `;
  }
  
  .`,
        )
        .concat(dc, " .")
        .concat(
          dc,
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
          No,
          `] {
    `,
        )
        .concat(xT, ": ")
        .concat(
          d,
          `px;
  }
`,
        )
    );
  },
  Ob = function () {
    var e = parseInt(document.body.getAttribute(No) || "0", 10);
    return isFinite(e) ? e : 0;
  },
  HT = function () {
    w.useEffect(function () {
      return (
        document.body.setAttribute(No, (Ob() + 1).toString()),
        function () {
          var e = Ob() - 1;
          e <= 0
            ? document.body.removeAttribute(No)
            : document.body.setAttribute(No, e.toString());
        }
      );
    }, []);
  },
  ZT = function (e) {
    var t = e.noRelative,
      a = e.noImportant,
      i = e.gapMode,
      s = i === void 0 ? "margin" : i;
    HT();
    var u = w.useMemo(
      function () {
        return BT(s);
      },
      [s],
    );
    return w.createElement(VT, { styles: $T(u, !t, s, a ? "" : "!important") });
  },
  fm = !1;
if (typeof window < "u")
  try {
    var Gu = Object.defineProperty({}, "passive", {
      get: function () {
        return ((fm = !0), !0);
      },
    });
    (window.addEventListener("test", Gu, Gu),
      window.removeEventListener("test", Gu, Gu));
  } catch {
    fm = !1;
  }
var xo = fm ? { passive: !1 } : !1,
  IT = function (e) {
    return e.tagName === "TEXTAREA";
  },
  y2 = function (e, t) {
    if (!(e instanceof Element)) return !1;
    var a = window.getComputedStyle(e);
    return (
      a[t] !== "hidden" &&
      !(a.overflowY === a.overflowX && !IT(e) && a[t] === "visible")
    );
  },
  qT = function (e) {
    return y2(e, "overflowY");
  },
  GT = function (e) {
    return y2(e, "overflowX");
  },
  Ab = function (e, t) {
    var a = t.ownerDocument,
      i = t;
    do {
      typeof ShadowRoot < "u" && i instanceof ShadowRoot && (i = i.host);
      var s = g2(e, i);
      if (s) {
        var u = v2(e, i),
          c = u[1],
          d = u[2];
        if (c > d) return !0;
      }
      i = i.parentNode;
    } while (i && i !== a.body);
    return !1;
  },
  YT = function (e) {
    var t = e.scrollTop,
      a = e.scrollHeight,
      i = e.clientHeight;
    return [t, a, i];
  },
  KT = function (e) {
    var t = e.scrollLeft,
      a = e.scrollWidth,
      i = e.clientWidth;
    return [t, a, i];
  },
  g2 = function (e, t) {
    return e === "v" ? qT(t) : GT(t);
  },
  v2 = function (e, t) {
    return e === "v" ? YT(t) : KT(t);
  },
  QT = function (e, t) {
    return e === "h" && t === "rtl" ? -1 : 1;
  },
  XT = function (e, t, a, i, s) {
    var u = QT(e, window.getComputedStyle(t).direction),
      c = u * i,
      d = a.target,
      m = t.contains(d),
      h = !1,
      y = c > 0,
      g = 0,
      v = 0;
    do {
      if (!d) break;
      var _ = v2(e, d),
        S = _[0],
        E = _[1],
        x = _[2],
        T = E - x - u * S;
      (S || T) && g2(e, d) && ((g += T), (v += S));
      var F = d.parentNode;
      d = F && F.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? F.host : F;
    } while ((!m && d !== document.body) || (m && (t.contains(d) || t === d)));
    return (((y && Math.abs(g) < 1) || (!y && Math.abs(v) < 1)) && (h = !0), h);
  },
  Yu = function (e) {
    return "changedTouches" in e
      ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
      : [0, 0];
  },
  Cb = function (e) {
    return [e.deltaX, e.deltaY];
  },
  Tb = function (e) {
    return e && "current" in e ? e.current : e;
  },
  JT = function (e, t) {
    return e[0] === t[0] && e[1] === t[1];
  },
  WT = function (e) {
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
  e4 = 0,
  Ro = [];
function t4(e) {
  var t = w.useRef([]),
    a = w.useRef([0, 0]),
    i = w.useRef(),
    s = w.useState(e4++)[0],
    u = w.useState(p2)[0],
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
          var E = _T([e.lockRef.current], (e.shards || []).map(Tb), !0).filter(
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
      var T = Yu(E),
        F = a.current,
        D = "deltaX" in E ? E.deltaX : F[0] - T[0],
        B = "deltaY" in E ? E.deltaY : F[1] - T[1],
        L,
        C = E.target,
        Y = Math.abs(D) > Math.abs(B) ? "h" : "v";
      if ("touches" in E && Y === "h" && C.type === "range") return !1;
      var Q = Ab(Y, C);
      if (!Q) return !0;
      if ((Q ? (L = Y) : ((L = Y === "v" ? "h" : "v"), (Q = Ab(Y, C))), !Q))
        return !1;
      if (
        (!i.current && "changedTouches" in E && (D || B) && (i.current = L), !L)
      )
        return !0;
      var me = i.current || L;
      return XT(me, x, E, me === "h" ? D : B);
    }, []),
    m = w.useCallback(function (E) {
      var x = E;
      if (!(!Ro.length || Ro[Ro.length - 1] !== u)) {
        var T = "deltaY" in x ? Cb(x) : Yu(x),
          F = t.current.filter(function (L) {
            return (
              L.name === x.type &&
              (L.target === x.target || x.target === L.shadowParent) &&
              JT(L.delta, T)
            );
          })[0];
        if (F && F.should) {
          x.cancelable && x.preventDefault();
          return;
        }
        if (!F) {
          var D = (c.current.shards || [])
              .map(Tb)
              .filter(Boolean)
              .filter(function (L) {
                return L.contains(x.target);
              }),
            B = D.length > 0 ? d(x, D[0]) : !c.current.noIsolation;
          B && x.cancelable && x.preventDefault();
        }
      }
    }, []),
    h = w.useCallback(function (E, x, T, F) {
      var D = { name: E, delta: x, target: T, should: F, shadowParent: n4(T) };
      (t.current.push(D),
        setTimeout(function () {
          t.current = t.current.filter(function (B) {
            return B !== D;
          });
        }, 1));
    }, []),
    y = w.useCallback(function (E) {
      ((a.current = Yu(E)), (i.current = void 0));
    }, []),
    g = w.useCallback(function (E) {
      h(E.type, Cb(E), E.target, d(E, e.lockRef.current));
    }, []),
    v = w.useCallback(function (E) {
      h(E.type, Yu(E), E.target, d(E, e.lockRef.current));
    }, []);
  w.useEffect(function () {
    return (
      Ro.push(u),
      e.setCallbacks({
        onScrollCapture: g,
        onWheelCapture: g,
        onTouchMoveCapture: v,
      }),
      document.addEventListener("wheel", m, xo),
      document.addEventListener("touchmove", m, xo),
      document.addEventListener("touchstart", y, xo),
      function () {
        ((Ro = Ro.filter(function (E) {
          return E !== u;
        })),
          document.removeEventListener("wheel", m, xo),
          document.removeEventListener("touchmove", m, xo),
          document.removeEventListener("touchstart", y, xo));
      }
    );
  }, []);
  var _ = e.removeScrollBar,
    S = e.inert;
  return w.createElement(
    w.Fragment,
    null,
    S ? w.createElement(u, { styles: WT(s) }) : null,
    _
      ? w.createElement(ZT, { noRelative: e.noRelative, gapMode: e.gapMode })
      : null,
  );
}
function n4(e) {
  for (var t = null; e !== null; )
    (e instanceof ShadowRoot && ((t = e.host), (e = e.host)),
      (e = e.parentNode));
  return t;
}
const r4 = MT(m2, t4);
var ap = w.forwardRef(function (e, t) {
  return w.createElement(Ic, Rr({}, e, { ref: t, sideCar: r4 }));
});
ap.classNames = Ic.classNames;
var a4 = function (e) {
    if (typeof document > "u") return null;
    var t = Array.isArray(e) ? e[0] : e;
    return t.ownerDocument.body;
  },
  Oo = new WeakMap(),
  Ku = new WeakMap(),
  Qu = {},
  Fh = 0,
  b2 = function (e) {
    return e && (e.host || b2(e.parentNode));
  },
  i4 = function (e, t) {
    return t
      .map(function (a) {
        if (e.contains(a)) return a;
        var i = b2(a);
        return i && e.contains(i)
          ? i
          : (console.error(
              "aria-hidden",
              a,
              "in not contained inside",
              e,
              ". Doing nothing",
            ),
            null);
      })
      .filter(function (a) {
        return !!a;
      });
  },
  o4 = function (e, t, a, i) {
    var s = i4(t, Array.isArray(e) ? e : [e]);
    Qu[a] || (Qu[a] = new WeakMap());
    var u = Qu[a],
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
                E = (Oo.get(v) || 0) + 1,
                x = (u.get(v) || 0) + 1;
              (Oo.set(v, E),
                u.set(v, x),
                c.push(v),
                E === 1 && S && Ku.set(v, !0),
                x === 1 && v.setAttribute(a, "true"),
                S || v.setAttribute(i, "true"));
            } catch (T) {
              console.error("aria-hidden: cannot operate on ", v, T);
            }
        });
    };
    return (
      y(t),
      d.clear(),
      Fh++,
      function () {
        (c.forEach(function (g) {
          var v = Oo.get(g) - 1,
            _ = u.get(g) - 1;
          (Oo.set(g, v),
            u.set(g, _),
            v || (Ku.has(g) || g.removeAttribute(i), Ku.delete(g)),
            _ || g.removeAttribute(a));
        }),
          Fh--,
          Fh ||
            ((Oo = new WeakMap()),
            (Oo = new WeakMap()),
            (Ku = new WeakMap()),
            (Qu = {})));
      }
    );
  },
  w2 = function (e, t, a) {
    a === void 0 && (a = "data-aria-hidden");
    var i = Array.from(Array.isArray(e) ? e : [e]),
      s = a4(e);
    return s
      ? (i.push.apply(i, Array.from(s.querySelectorAll("[aria-live], script"))),
        o4(i, s, a, "aria-hidden"))
      : function () {
          return null;
        };
  },
  qc = "Dialog",
  [S2, vj] = $o(qc),
  [s4, pr] = S2(qc),
  _2 = (e) => {
    const {
        __scopeDialog: t,
        children: a,
        open: i,
        defaultOpen: s,
        onOpenChange: u,
        modal: c = !0,
      } = e,
      d = w.useRef(null),
      m = w.useRef(null),
      [h, y] = ep({ prop: i, defaultProp: s ?? !1, onChange: u, caller: qc });
    return k.jsx(s4, {
      scope: t,
      triggerRef: d,
      contentRef: m,
      contentId: Mo(),
      titleId: Mo(),
      descriptionId: Mo(),
      open: h,
      onOpenChange: y,
      onOpenToggle: w.useCallback(() => y((g) => !g), [y]),
      modal: c,
      children: a,
    });
  };
_2.displayName = qc;
var E2 = "DialogTrigger",
  x2 = w.forwardRef((e, t) => {
    const { __scopeDialog: a, ...i } = e,
      s = pr(E2, a),
      u = an(t, s.triggerRef);
    return k.jsx(Ut.button, {
      type: "button",
      "aria-haspopup": "dialog",
      "aria-expanded": s.open,
      "aria-controls": s.contentId,
      "data-state": lp(s.open),
      ...i,
      ref: u,
      onClick: Ie(e.onClick, s.onOpenToggle),
    });
  });
x2.displayName = E2;
var ip = "DialogPortal",
  [l4, R2] = S2(ip, { forceMount: void 0 }),
  op = (e) => {
    const { __scopeDialog: t, forceMount: a, children: i, container: s } = e,
      u = pr(ip, t);
    return k.jsx(l4, {
      scope: t,
      forceMount: a,
      children: w.Children.map(i, (c) =>
        k.jsx(Ja, {
          present: a || u.open,
          children: k.jsx(rp, { asChild: !0, container: s, children: c }),
        }),
      ),
    });
  };
op.displayName = ip;
var xc = "DialogOverlay",
  O2 = w.forwardRef((e, t) => {
    const a = R2(xc, e.__scopeDialog),
      { forceMount: i = a.forceMount, ...s } = e,
      u = pr(xc, e.__scopeDialog);
    return u.modal
      ? k.jsx(Ja, {
          present: i || u.open,
          children: k.jsx(c4, { ...s, ref: t }),
        })
      : null;
  });
O2.displayName = xc;
var u4 = fl("DialogOverlay.RemoveScroll"),
  c4 = w.forwardRef((e, t) => {
    const { __scopeDialog: a, ...i } = e,
      s = pr(xc, a);
    return k.jsx(ap, {
      as: u4,
      allowPinchZoom: !0,
      shards: [s.contentRef],
      children: k.jsx(Ut.div, {
        "data-state": lp(s.open),
        ...i,
        ref: t,
        style: { pointerEvents: "auto", ...i.style },
      }),
    });
  }),
  Mi = "DialogContent",
  A2 = w.forwardRef((e, t) => {
    const a = R2(Mi, e.__scopeDialog),
      { forceMount: i = a.forceMount, ...s } = e,
      u = pr(Mi, e.__scopeDialog);
    return k.jsx(Ja, {
      present: i || u.open,
      children: u.modal
        ? k.jsx(f4, { ...s, ref: t })
        : k.jsx(d4, { ...s, ref: t }),
    });
  });
A2.displayName = Mi;
var f4 = w.forwardRef((e, t) => {
    const a = pr(Mi, e.__scopeDialog),
      i = w.useRef(null),
      s = an(t, a.contentRef, i);
    return (
      w.useEffect(() => {
        const u = i.current;
        if (u) return w2(u);
      }, []),
      k.jsx(C2, {
        ...e,
        ref: s,
        trapFocus: a.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: Ie(e.onCloseAutoFocus, (u) => {
          (u.preventDefault(), a.triggerRef.current?.focus());
        }),
        onPointerDownOutside: Ie(e.onPointerDownOutside, (u) => {
          const c = u.detail.originalEvent,
            d = c.button === 0 && c.ctrlKey === !0;
          (c.button === 2 || d) && u.preventDefault();
        }),
        onFocusOutside: Ie(e.onFocusOutside, (u) => u.preventDefault()),
      })
    );
  }),
  d4 = w.forwardRef((e, t) => {
    const a = pr(Mi, e.__scopeDialog),
      i = w.useRef(!1),
      s = w.useRef(!1);
    return k.jsx(C2, {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      onCloseAutoFocus: (u) => {
        (e.onCloseAutoFocus?.(u),
          u.defaultPrevented ||
            (i.current || a.triggerRef.current?.focus(), u.preventDefault()),
          (i.current = !1),
          (s.current = !1));
      },
      onInteractOutside: (u) => {
        (e.onInteractOutside?.(u),
          u.defaultPrevented ||
            ((i.current = !0),
            u.detail.originalEvent.type === "pointerdown" && (s.current = !0)));
        const c = u.target;
        (a.triggerRef.current?.contains(c) && u.preventDefault(),
          u.detail.originalEvent.type === "focusin" &&
            s.current &&
            u.preventDefault());
      },
    });
  }),
  C2 = w.forwardRef((e, t) => {
    const {
        __scopeDialog: a,
        trapFocus: i,
        onOpenAutoFocus: s,
        onCloseAutoFocus: u,
        ...c
      } = e,
      d = pr(Mi, a),
      m = w.useRef(null),
      h = an(t, m);
    return (
      f2(),
      k.jsxs(k.Fragment, {
        children: [
          k.jsx(np, {
            asChild: !0,
            loop: !0,
            trapped: i,
            onMountAutoFocus: s,
            onUnmountAutoFocus: u,
            children: k.jsx(tp, {
              role: "dialog",
              id: d.contentId,
              "aria-describedby": d.descriptionId,
              "aria-labelledby": d.titleId,
              "data-state": lp(d.open),
              ...c,
              ref: h,
              onDismiss: () => d.onOpenChange(!1),
            }),
          }),
          k.jsxs(k.Fragment, {
            children: [
              k.jsx(p4, { titleId: d.titleId }),
              k.jsx(g4, { contentRef: m, descriptionId: d.descriptionId }),
            ],
          }),
        ],
      })
    );
  }),
  sp = "DialogTitle",
  h4 = w.forwardRef((e, t) => {
    const { __scopeDialog: a, ...i } = e,
      s = pr(sp, a);
    return k.jsx(Ut.h2, { id: s.titleId, ...i, ref: t });
  });
h4.displayName = sp;
var T2 = "DialogDescription",
  m4 = w.forwardRef((e, t) => {
    const { __scopeDialog: a, ...i } = e,
      s = pr(T2, a);
    return k.jsx(Ut.p, { id: s.descriptionId, ...i, ref: t });
  });
m4.displayName = T2;
var D2 = "DialogClose",
  M2 = w.forwardRef((e, t) => {
    const { __scopeDialog: a, ...i } = e,
      s = pr(D2, a);
    return k.jsx(Ut.button, {
      type: "button",
      ...i,
      ref: t,
      onClick: Ie(e.onClick, () => s.onOpenChange(!1)),
    });
  });
M2.displayName = D2;
function lp(e) {
  return e ? "open" : "closed";
}
var N2 = "DialogTitleWarning",
  [bj, z2] = ZC(N2, { contentName: Mi, titleName: sp, docsSlug: "dialog" }),
  p4 = ({ titleId: e }) => {
    const t = z2(N2),
      a = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
    return (
      w.useEffect(() => {
        e && (document.getElementById(e) || console.error(a));
      }, [a, e]),
      null
    );
  },
  y4 = "DialogDescriptionWarning",
  g4 = ({ contentRef: e, descriptionId: t }) => {
    const i = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${z2(y4).contentName}}.`;
    return (
      w.useEffect(() => {
        const s = e.current?.getAttribute("aria-describedby");
        t && s && (document.getElementById(t) || console.warn(i));
      }, [i, e, t]),
      null
    );
  },
  v4 = _2,
  b4 = x2,
  w4 = op,
  S4 = O2,
  _4 = A2,
  k2 = M2;
function up(...e) {
  return o2(Kw(e));
}
function Gc({ ...e }) {
  return k.jsx(v4, { "data-slot": "dialog", ...e });
}
function cp({ ...e }) {
  return k.jsx(w4, { "data-slot": "dialog-portal", ...e });
}
function E4({ className: e, ...t }) {
  return k.jsx(S4, {
    "data-slot": "dialog-overlay",
    className: up(
      "fixed inset-0 z-[999] bg-black/60",
      "data-[state=open]:animate-in data-[state=closed]:animate-out",
      "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e,
    ),
    ...t,
  });
}
function Yc({ className: e, children: t, showCloseButton: a = !0, ...i }) {
  return k.jsxs(cp, {
    children: [
      k.jsx(E4, {}),
      k.jsxs(_4, {
        "data-slot": "dialog-content",
        className: up(
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
          a &&
            k.jsx(k2, {
              "aria-label": "close",
              className:
                "absolute right-7 top-7 p-2 cursor-pointer hover:opacity-70 transition-opacity",
              children: k.jsx("img", { src: iC, alt: "close" }),
            }),
        ],
      }),
    ],
  });
}
function Kc({ ...e }) {
  return k.jsx(b4, { "data-slot": "dialog-trigger", ...e });
}
const x4 = k2;
function R4() {
  const e = () => {
    try {
      const t = String(void 0),
        a = String(void 0),
        i = `https://kauth.kakao.com/oauth/authorize?client_id=${t}&redirect_uri=${a}&response_type=code`;
      window.location.href = i;
    } catch (t) {
      console.error("카카오 로그인 오류:", t);
    }
  };
  return k.jsxs(Gc, {
    children: [
      k.jsx(op, {}),
      k.jsx(Kc, {
        asChild: !0,
        children: k.jsx(ko, { variant: "gray", children: "로그인" }),
      }),
      k.jsx(Yc, {
        className: "w-150",
        children: k.jsxs("div", {
          className: "px-20 py-22.5 flex flex-col gap-10",
          children: [
            k.jsxs("div", {
              className: "flex flex-col gap-4",
              children: [
                k.jsx("div", {
                  className: "text-4xl font-bold text-scale-600",
                  children: "로그인",
                }),
                k.jsx("div", {
                  className: "text-lg text-scale-400",
                  children: "처음이면 자동 회원가입 후 이용할 수 있어요.",
                }),
              ],
            }),
            k.jsxs(ko, {
              variant: "kakao",
              onClick: e,
              className: "flex items-center justify-center gap-2",
              children: [
                k.jsx("img", { src: oC, className: "w-8 h-8" }),
                "카카오로 시작하기",
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
function j2(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: O4 } = Object.prototype,
  { getPrototypeOf: fp } = Object,
  { iterator: Qc, toStringTag: L2 } = Symbol,
  Xc = ((e) => (t) => {
    const a = O4.call(t);
    return e[a] || (e[a] = a.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  yr = (e) => ((e = e.toLowerCase()), (t) => Xc(t) === e),
  Jc = (e) => (t) => typeof t === e,
  { isArray: Ho } = Array,
  jo = Jc("undefined");
function _l(e) {
  return (
    e !== null &&
    !jo(e) &&
    e.constructor !== null &&
    !jo(e.constructor) &&
    Rn(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const U2 = yr("ArrayBuffer");
function A4(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && U2(e.buffer)),
    t
  );
}
const C4 = Jc("string"),
  Rn = Jc("function"),
  P2 = Jc("number"),
  El = (e) => e !== null && typeof e == "object",
  T4 = (e) => e === !0 || e === !1,
  hc = (e) => {
    if (Xc(e) !== "object") return !1;
    const t = fp(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(L2 in e) &&
      !(Qc in e)
    );
  },
  D4 = (e) => {
    if (!El(e) || _l(e)) return !1;
    try {
      return (
        Object.keys(e).length === 0 &&
        Object.getPrototypeOf(e) === Object.prototype
      );
    } catch {
      return !1;
    }
  },
  M4 = yr("Date"),
  N4 = yr("File"),
  z4 = yr("Blob"),
  k4 = yr("FileList"),
  j4 = (e) => El(e) && Rn(e.pipe),
  L4 = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        (Rn(e.append) &&
          ((t = Xc(e)) === "formdata" ||
            (t === "object" &&
              Rn(e.toString) &&
              e.toString() === "[object FormData]"))))
    );
  },
  U4 = yr("URLSearchParams"),
  [P4, F4, B4, V4] = ["ReadableStream", "Request", "Response", "Headers"].map(
    yr,
  ),
  $4 = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function xl(e, t, { allOwnKeys: a = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let i, s;
  if ((typeof e != "object" && (e = [e]), Ho(e)))
    for (i = 0, s = e.length; i < s; i++) t.call(null, e[i], i, e);
  else {
    if (_l(e)) return;
    const u = a ? Object.getOwnPropertyNames(e) : Object.keys(e),
      c = u.length;
    let d;
    for (i = 0; i < c; i++) ((d = u[i]), t.call(null, e[d], d, e));
  }
}
function F2(e, t) {
  if (_l(e)) return null;
  t = t.toLowerCase();
  const a = Object.keys(e);
  let i = a.length,
    s;
  for (; i-- > 0; ) if (((s = a[i]), t === s.toLowerCase())) return s;
  return null;
}
const Ai =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
        ? self
        : typeof window < "u"
          ? window
          : global,
  B2 = (e) => !jo(e) && e !== Ai;
function dm() {
  const { caseless: e, skipUndefined: t } = (B2(this) && this) || {},
    a = {},
    i = (s, u) => {
      const c = (e && F2(a, u)) || u;
      hc(a[c]) && hc(s)
        ? (a[c] = dm(a[c], s))
        : hc(s)
          ? (a[c] = dm({}, s))
          : Ho(s)
            ? (a[c] = s.slice())
            : (!t || !jo(s)) && (a[c] = s);
    };
  for (let s = 0, u = arguments.length; s < u; s++)
    arguments[s] && xl(arguments[s], i);
  return a;
}
const H4 = (e, t, a, { allOwnKeys: i } = {}) => (
    xl(
      t,
      (s, u) => {
        a && Rn(s) ? (e[u] = j2(s, a)) : (e[u] = s);
      },
      { allOwnKeys: i },
    ),
    e
  ),
  Z4 = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  I4 = (e, t, a, i) => {
    ((e.prototype = Object.create(t.prototype, i)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      a && Object.assign(e.prototype, a));
  },
  q4 = (e, t, a, i) => {
    let s, u, c;
    const d = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (s = Object.getOwnPropertyNames(e), u = s.length; u-- > 0; )
        ((c = s[u]),
          (!i || i(c, e, t)) && !d[c] && ((t[c] = e[c]), (d[c] = !0)));
      e = a !== !1 && fp(e);
    } while (e && (!a || a(e, t)) && e !== Object.prototype);
    return t;
  },
  G4 = (e, t, a) => {
    ((e = String(e)),
      (a === void 0 || a > e.length) && (a = e.length),
      (a -= t.length));
    const i = e.indexOf(t, a);
    return i !== -1 && i === a;
  },
  Y4 = (e) => {
    if (!e) return null;
    if (Ho(e)) return e;
    let t = e.length;
    if (!P2(t)) return null;
    const a = new Array(t);
    for (; t-- > 0; ) a[t] = e[t];
    return a;
  },
  K4 = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && fp(Uint8Array)),
  Q4 = (e, t) => {
    const i = (e && e[Qc]).call(e);
    let s;
    for (; (s = i.next()) && !s.done; ) {
      const u = s.value;
      t.call(e, u[0], u[1]);
    }
  },
  X4 = (e, t) => {
    let a;
    const i = [];
    for (; (a = e.exec(t)) !== null; ) i.push(a);
    return i;
  },
  J4 = yr("HTMLFormElement"),
  W4 = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (a, i, s) {
      return i.toUpperCase() + s;
    }),
  Db = (
    ({ hasOwnProperty: e }) =>
    (t, a) =>
      e.call(t, a)
  )(Object.prototype),
  eD = yr("RegExp"),
  V2 = (e, t) => {
    const a = Object.getOwnPropertyDescriptors(e),
      i = {};
    (xl(a, (s, u) => {
      let c;
      (c = t(s, u, e)) !== !1 && (i[u] = c || s);
    }),
      Object.defineProperties(e, i));
  },
  tD = (e) => {
    V2(e, (t, a) => {
      if (Rn(e) && ["arguments", "caller", "callee"].indexOf(a) !== -1)
        return !1;
      const i = e[a];
      if (Rn(i)) {
        if (((t.enumerable = !1), "writable" in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + a + "'");
          });
      }
    });
  },
  nD = (e, t) => {
    const a = {},
      i = (s) => {
        s.forEach((u) => {
          a[u] = !0;
        });
      };
    return (Ho(e) ? i(e) : i(String(e).split(t)), a);
  },
  rD = () => {},
  aD = (e, t) => (e != null && Number.isFinite((e = +e)) ? e : t);
function iD(e) {
  return !!(e && Rn(e.append) && e[L2] === "FormData" && e[Qc]);
}
const oD = (e) => {
    const t = new Array(10),
      a = (i, s) => {
        if (El(i)) {
          if (t.indexOf(i) >= 0) return;
          if (_l(i)) return i;
          if (!("toJSON" in i)) {
            t[s] = i;
            const u = Ho(i) ? [] : {};
            return (
              xl(i, (c, d) => {
                const m = a(c, s + 1);
                !jo(m) && (u[d] = m);
              }),
              (t[s] = void 0),
              u
            );
          }
        }
        return i;
      };
    return a(e, 0);
  },
  sD = yr("AsyncFunction"),
  lD = (e) => e && (El(e) || Rn(e)) && Rn(e.then) && Rn(e.catch),
  $2 = ((e, t) =>
    e
      ? setImmediate
      : t
        ? ((a, i) => (
            Ai.addEventListener(
              "message",
              ({ source: s, data: u }) => {
                s === Ai && u === a && i.length && i.shift()();
              },
              !1,
            ),
            (s) => {
              (i.push(s), Ai.postMessage(a, "*"));
            }
          ))(`axios@${Math.random()}`, [])
        : (a) => setTimeout(a))(
    typeof setImmediate == "function",
    Rn(Ai.postMessage),
  ),
  uD =
    typeof queueMicrotask < "u"
      ? queueMicrotask.bind(Ai)
      : (typeof process < "u" && process.nextTick) || $2,
  cD = (e) => e != null && Rn(e[Qc]),
  ee = {
    isArray: Ho,
    isArrayBuffer: U2,
    isBuffer: _l,
    isFormData: L4,
    isArrayBufferView: A4,
    isString: C4,
    isNumber: P2,
    isBoolean: T4,
    isObject: El,
    isPlainObject: hc,
    isEmptyObject: D4,
    isReadableStream: P4,
    isRequest: F4,
    isResponse: B4,
    isHeaders: V4,
    isUndefined: jo,
    isDate: M4,
    isFile: N4,
    isBlob: z4,
    isRegExp: eD,
    isFunction: Rn,
    isStream: j4,
    isURLSearchParams: U4,
    isTypedArray: K4,
    isFileList: k4,
    forEach: xl,
    merge: dm,
    extend: H4,
    trim: $4,
    stripBOM: Z4,
    inherits: I4,
    toFlatObject: q4,
    kindOf: Xc,
    kindOfTest: yr,
    endsWith: G4,
    toArray: Y4,
    forEachEntry: Q4,
    matchAll: X4,
    isHTMLForm: J4,
    hasOwnProperty: Db,
    hasOwnProp: Db,
    reduceDescriptors: V2,
    freezeMethods: tD,
    toObjectSet: nD,
    toCamelCase: W4,
    noop: rD,
    toFiniteNumber: aD,
    findKey: F2,
    global: Ai,
    isContextDefined: B2,
    isSpecCompliantForm: iD,
    toJSONObject: oD,
    isAsyncFn: sD,
    isThenable: lD,
    setImmediate: $2,
    asap: uD,
    isIterable: cD,
  };
function Ve(e, t, a, i, s) {
  (Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = "AxiosError"),
    t && (this.code = t),
    a && (this.config = a),
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
const H2 = Ve.prototype,
  Z2 = {};
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
  Z2[e] = { value: e };
});
Object.defineProperties(Ve, Z2);
Object.defineProperty(H2, "isAxiosError", { value: !0 });
Ve.from = (e, t, a, i, s, u) => {
  const c = Object.create(H2);
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
    Ve.call(c, d, m, a, i, s),
    e &&
      c.cause == null &&
      Object.defineProperty(c, "cause", { value: e, configurable: !0 }),
    (c.name = (e && e.name) || "Error"),
    u && Object.assign(c, u),
    c
  );
};
const fD = null;
function hm(e) {
  return ee.isPlainObject(e) || ee.isArray(e);
}
function I2(e) {
  return ee.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Mb(e, t, a) {
  return e
    ? e
        .concat(t)
        .map(function (s, u) {
          return ((s = I2(s)), !a && u ? "[" + s + "]" : s);
        })
        .join(a ? "." : "")
    : t;
}
function dD(e) {
  return ee.isArray(e) && !e.some(hm);
}
const hD = ee.toFlatObject(ee, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function Wc(e, t, a) {
  if (!ee.isObject(e)) throw new TypeError("target must be an object");
  ((t = t || new FormData()),
    (a = ee.toFlatObject(
      a,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (E, x) {
        return !ee.isUndefined(x[E]);
      },
    )));
  const i = a.metaTokens,
    s = a.visitor || y,
    u = a.dots,
    c = a.indexes,
    m = (a.Blob || (typeof Blob < "u" && Blob)) && ee.isSpecCompliantForm(t);
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
        (ee.isArray(S) && dD(S)) ||
        ((ee.isFileList(S) || ee.endsWith(E, "[]")) && (T = ee.toArray(S)))
      )
        return (
          (E = I2(E)),
          T.forEach(function (D, B) {
            !(ee.isUndefined(D) || D === null) &&
              t.append(
                c === !0 ? Mb([E], B, u) : c === null ? E : E + "[]",
                h(D),
              );
          }),
          !1
        );
    }
    return hm(S) ? !0 : (t.append(Mb(x, E, u), h(S)), !1);
  }
  const g = [],
    v = Object.assign(hD, {
      defaultVisitor: y,
      convertValue: h,
      isVisitable: hm,
    });
  function _(S, E) {
    if (!ee.isUndefined(S)) {
      if (g.indexOf(S) !== -1)
        throw Error("Circular reference detected in " + E.join("."));
      (g.push(S),
        ee.forEach(S, function (T, F) {
          (!(ee.isUndefined(T) || T === null) &&
            s.call(t, T, ee.isString(F) ? F.trim() : F, E, v)) === !0 &&
            _(T, E ? E.concat(F) : [F]);
        }),
        g.pop());
    }
  }
  if (!ee.isObject(e)) throw new TypeError("data must be an object");
  return (_(e), t);
}
function Nb(e) {
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
function dp(e, t) {
  ((this._pairs = []), e && Wc(e, this, t));
}
const q2 = dp.prototype;
q2.append = function (t, a) {
  this._pairs.push([t, a]);
};
q2.toString = function (t) {
  const a = t
    ? function (i) {
        return t.call(this, i, Nb);
      }
    : Nb;
  return this._pairs
    .map(function (s) {
      return a(s[0]) + "=" + a(s[1]);
    }, "")
    .join("&");
};
function mD(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+");
}
function G2(e, t, a) {
  if (!t) return e;
  const i = (a && a.encode) || mD;
  ee.isFunction(a) && (a = { serialize: a });
  const s = a && a.serialize;
  let u;
  if (
    (s
      ? (u = s(t, a))
      : (u = ee.isURLSearchParams(t) ? t.toString() : new dp(t, a).toString(i)),
    u)
  ) {
    const c = e.indexOf("#");
    (c !== -1 && (e = e.slice(0, c)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + u));
  }
  return e;
}
class zb {
  constructor() {
    this.handlers = [];
  }
  use(t, a, i) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: a,
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
const Y2 = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  pD = typeof URLSearchParams < "u" ? URLSearchParams : dp,
  yD = typeof FormData < "u" ? FormData : null,
  gD = typeof Blob < "u" ? Blob : null,
  vD = {
    isBrowser: !0,
    classes: { URLSearchParams: pD, FormData: yD, Blob: gD },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  hp = typeof window < "u" && typeof document < "u",
  mm = (typeof navigator == "object" && navigator) || void 0,
  bD =
    hp &&
    (!mm || ["ReactNative", "NativeScript", "NS"].indexOf(mm.product) < 0),
  wD =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  SD = (hp && window.location.href) || "http://localhost",
  _D = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: hp,
        hasStandardBrowserEnv: bD,
        hasStandardBrowserWebWorkerEnv: wD,
        navigator: mm,
        origin: SD,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  un = { ..._D, ...vD };
function ED(e, t) {
  return Wc(e, new un.classes.URLSearchParams(), {
    visitor: function (a, i, s, u) {
      return un.isNode && ee.isBuffer(a)
        ? (this.append(i, a.toString("base64")), !1)
        : u.defaultVisitor.apply(this, arguments);
    },
    ...t,
  });
}
function xD(e) {
  return ee
    .matchAll(/\w+|\[(\w*)]/g, e)
    .map((t) => (t[0] === "[]" ? "" : t[1] || t[0]));
}
function RD(e) {
  const t = {},
    a = Object.keys(e);
  let i;
  const s = a.length;
  let u;
  for (i = 0; i < s; i++) ((u = a[i]), (t[u] = e[u]));
  return t;
}
function K2(e) {
  function t(a, i, s, u) {
    let c = a[u++];
    if (c === "__proto__") return !0;
    const d = Number.isFinite(+c),
      m = u >= a.length;
    return (
      (c = !c && ee.isArray(s) ? s.length : c),
      m
        ? (ee.hasOwnProp(s, c) ? (s[c] = [s[c], i]) : (s[c] = i), !d)
        : ((!s[c] || !ee.isObject(s[c])) && (s[c] = []),
          t(a, i, s[c], u) && ee.isArray(s[c]) && (s[c] = RD(s[c])),
          !d)
    );
  }
  if (ee.isFormData(e) && ee.isFunction(e.entries)) {
    const a = {};
    return (
      ee.forEachEntry(e, (i, s) => {
        t(xD(i), s, a, 0);
      }),
      a
    );
  }
  return null;
}
function OD(e, t, a) {
  if (ee.isString(e))
    try {
      return ((t || JSON.parse)(e), ee.trim(e));
    } catch (i) {
      if (i.name !== "SyntaxError") throw i;
    }
  return (a || JSON.stringify)(e);
}
const Rl = {
  transitional: Y2,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (t, a) {
      const i = a.getContentType() || "",
        s = i.indexOf("application/json") > -1,
        u = ee.isObject(t);
      if ((u && ee.isHTMLForm(t) && (t = new FormData(t)), ee.isFormData(t)))
        return s ? JSON.stringify(K2(t)) : t;
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
          a.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1,
          ),
          t.toString()
        );
      let d;
      if (u) {
        if (i.indexOf("application/x-www-form-urlencoded") > -1)
          return ED(t, this.formSerializer).toString();
        if ((d = ee.isFileList(t)) || i.indexOf("multipart/form-data") > -1) {
          const m = this.env && this.env.FormData;
          return Wc(
            d ? { "files[]": t } : t,
            m && new m(),
            this.formSerializer,
          );
        }
      }
      return u || s ? (a.setContentType("application/json", !1), OD(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const a = this.transitional || Rl.transitional,
        i = a && a.forcedJSONParsing,
        s = this.responseType === "json";
      if (ee.isResponse(t) || ee.isReadableStream(t)) return t;
      if (t && ee.isString(t) && ((i && !this.responseType) || s)) {
        const c = !(a && a.silentJSONParsing) && s;
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
  env: { FormData: un.classes.FormData, Blob: un.classes.Blob },
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
  Rl.headers[e] = {};
});
const AD = ee.toObjectSet([
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
  CD = (e) => {
    const t = {};
    let a, i, s;
    return (
      e &&
        e
          .split(
            `
`,
          )
          .forEach(function (c) {
            ((s = c.indexOf(":")),
              (a = c.substring(0, s).trim().toLowerCase()),
              (i = c.substring(s + 1).trim()),
              !(!a || (t[a] && AD[a])) &&
                (a === "set-cookie"
                  ? t[a]
                    ? t[a].push(i)
                    : (t[a] = [i])
                  : (t[a] = t[a] ? t[a] + ", " + i : i)));
          }),
      t
    );
  },
  kb = Symbol("internals");
function Xs(e) {
  return e && String(e).trim().toLowerCase();
}
function mc(e) {
  return e === !1 || e == null ? e : ee.isArray(e) ? e.map(mc) : String(e);
}
function TD(e) {
  const t = Object.create(null),
    a = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let i;
  for (; (i = a.exec(e)); ) t[i[1]] = i[2];
  return t;
}
const DD = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Bh(e, t, a, i, s) {
  if (ee.isFunction(i)) return i.call(this, t, a);
  if ((s && (t = a), !!ee.isString(t))) {
    if (ee.isString(i)) return t.indexOf(i) !== -1;
    if (ee.isRegExp(i)) return i.test(t);
  }
}
function MD(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, a, i) => a.toUpperCase() + i);
}
function ND(e, t) {
  const a = ee.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((i) => {
    Object.defineProperty(e, i + a, {
      value: function (s, u, c) {
        return this[i].call(this, t, s, u, c);
      },
      configurable: !0,
    });
  });
}
let On = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, a, i) {
    const s = this;
    function u(d, m, h) {
      const y = Xs(m);
      if (!y) throw new Error("header name must be a non-empty string");
      const g = ee.findKey(s, y);
      (!g || s[g] === void 0 || h === !0 || (h === void 0 && s[g] !== !1)) &&
        (s[g || m] = mc(d));
    }
    const c = (d, m) => ee.forEach(d, (h, y) => u(h, y, m));
    if (ee.isPlainObject(t) || t instanceof this.constructor) c(t, a);
    else if (ee.isString(t) && (t = t.trim()) && !DD(t)) c(CD(t), a);
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
      c(d, a);
    } else t != null && u(a, t, i);
    return this;
  }
  get(t, a) {
    if (((t = Xs(t)), t)) {
      const i = ee.findKey(this, t);
      if (i) {
        const s = this[i];
        if (!a) return s;
        if (a === !0) return TD(s);
        if (ee.isFunction(a)) return a.call(this, s, i);
        if (ee.isRegExp(a)) return a.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, a) {
    if (((t = Xs(t)), t)) {
      const i = ee.findKey(this, t);
      return !!(i && this[i] !== void 0 && (!a || Bh(this, this[i], i, a)));
    }
    return !1;
  }
  delete(t, a) {
    const i = this;
    let s = !1;
    function u(c) {
      if (((c = Xs(c)), c)) {
        const d = ee.findKey(i, c);
        d && (!a || Bh(i, i[d], d, a)) && (delete i[d], (s = !0));
      }
    }
    return (ee.isArray(t) ? t.forEach(u) : u(t), s);
  }
  clear(t) {
    const a = Object.keys(this);
    let i = a.length,
      s = !1;
    for (; i--; ) {
      const u = a[i];
      (!t || Bh(this, this[u], u, t, !0)) && (delete this[u], (s = !0));
    }
    return s;
  }
  normalize(t) {
    const a = this,
      i = {};
    return (
      ee.forEach(this, (s, u) => {
        const c = ee.findKey(i, u);
        if (c) {
          ((a[c] = mc(s)), delete a[u]);
          return;
        }
        const d = t ? MD(u) : String(u).trim();
        (d !== u && delete a[u], (a[d] = mc(s)), (i[d] = !0));
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const a = Object.create(null);
    return (
      ee.forEach(this, (i, s) => {
        i != null && i !== !1 && (a[s] = t && ee.isArray(i) ? i.join(", ") : i);
      }),
      a
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, a]) => t + ": " + a).join(`
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
  static concat(t, ...a) {
    const i = new this(t);
    return (a.forEach((s) => i.set(s)), i);
  }
  static accessor(t) {
    const i = (this[kb] = this[kb] = { accessors: {} }).accessors,
      s = this.prototype;
    function u(c) {
      const d = Xs(c);
      i[d] || (ND(s, c), (i[d] = !0));
    }
    return (ee.isArray(t) ? t.forEach(u) : u(t), this);
  }
};
On.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
ee.reduceDescriptors(On.prototype, ({ value: e }, t) => {
  let a = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(i) {
      this[a] = i;
    },
  };
});
ee.freezeMethods(On);
function Vh(e, t) {
  const a = this || Rl,
    i = t || a,
    s = On.from(i.headers);
  let u = i.data;
  return (
    ee.forEach(e, function (d) {
      u = d.call(a, u, s.normalize(), t ? t.status : void 0);
    }),
    s.normalize(),
    u
  );
}
function Q2(e) {
  return !!(e && e.__CANCEL__);
}
function Zo(e, t, a) {
  (Ve.call(this, e ?? "canceled", Ve.ERR_CANCELED, t, a),
    (this.name = "CanceledError"));
}
ee.inherits(Zo, Ve, { __CANCEL__: !0 });
function X2(e, t, a) {
  const i = a.config.validateStatus;
  !a.status || !i || i(a.status)
    ? e(a)
    : t(
        new Ve(
          "Request failed with status code " + a.status,
          [Ve.ERR_BAD_REQUEST, Ve.ERR_BAD_RESPONSE][
            Math.floor(a.status / 100) - 4
          ],
          a.config,
          a.request,
          a,
        ),
      );
}
function zD(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function kD(e, t) {
  e = e || 10;
  const a = new Array(e),
    i = new Array(e);
  let s = 0,
    u = 0,
    c;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (m) {
      const h = Date.now(),
        y = i[u];
      (c || (c = h), (a[s] = m), (i[s] = h));
      let g = u,
        v = 0;
      for (; g !== s; ) ((v += a[g++]), (g = g % e));
      if (((s = (s + 1) % e), s === u && (u = (u + 1) % e), h - c < t)) return;
      const _ = y && h - y;
      return _ ? Math.round((v * 1e3) / _) : void 0;
    }
  );
}
function jD(e, t) {
  let a = 0,
    i = 1e3 / t,
    s,
    u;
  const c = (h, y = Date.now()) => {
    ((a = y), (s = null), u && (clearTimeout(u), (u = null)), e(...h));
  };
  return [
    (...h) => {
      const y = Date.now(),
        g = y - a;
      g >= i
        ? c(h, y)
        : ((s = h),
          u ||
            (u = setTimeout(() => {
              ((u = null), c(s));
            }, i - g)));
    },
    () => s && c(s),
  ];
}
const Rc = (e, t, a = 3) => {
    let i = 0;
    const s = kD(50, 250);
    return jD((u) => {
      const c = u.loaded,
        d = u.lengthComputable ? u.total : void 0,
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
        event: u,
        lengthComputable: d != null,
        [t ? "download" : "upload"]: !0,
      };
      e(g);
    }, a);
  },
  jb = (e, t) => {
    const a = e != null;
    return [(i) => t[0]({ lengthComputable: a, total: e, loaded: i }), t[1]];
  },
  Lb =
    (e) =>
    (...t) =>
      ee.asap(() => e(...t)),
  LD = un.hasStandardBrowserEnv
    ? ((e, t) => (a) => (
        (a = new URL(a, un.origin)),
        e.protocol === a.protocol &&
          e.host === a.host &&
          (t || e.port === a.port)
      ))(
        new URL(un.origin),
        un.navigator && /(msie|trident)/i.test(un.navigator.userAgent),
      )
    : () => !0,
  UD = un.hasStandardBrowserEnv
    ? {
        write(e, t, a, i, s, u) {
          const c = [e + "=" + encodeURIComponent(t)];
          (ee.isNumber(a) && c.push("expires=" + new Date(a).toGMTString()),
            ee.isString(i) && c.push("path=" + i),
            ee.isString(s) && c.push("domain=" + s),
            u === !0 && c.push("secure"),
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
function PD(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function FD(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function J2(e, t, a) {
  let i = !PD(t);
  return e && (i || a == !1) ? FD(e, t) : t;
}
const Ub = (e) => (e instanceof On ? { ...e } : e);
function Ni(e, t) {
  t = t || {};
  const a = {};
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
  function u(h, y) {
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
    url: u,
    method: u,
    data: u,
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
    headers: (h, y, g) => s(Ub(h), Ub(y), g, !0),
  };
  return (
    ee.forEach(Object.keys({ ...e, ...t }), function (y) {
      const g = m[y] || s,
        v = g(e[y], t[y], y);
      (ee.isUndefined(v) && g !== d) || (a[y] = v);
    }),
    a
  );
}
const W2 = (e) => {
    const t = Ni({}, e);
    let {
      data: a,
      withXSRFToken: i,
      xsrfHeaderName: s,
      xsrfCookieName: u,
      headers: c,
      auth: d,
    } = t;
    if (
      ((t.headers = c = On.from(c)),
      (t.url = G2(
        J2(t.baseURL, t.url, t.allowAbsoluteUrls),
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
      ee.isFormData(a))
    ) {
      if (un.hasStandardBrowserEnv || un.hasStandardBrowserWebWorkerEnv)
        c.setContentType(void 0);
      else if (ee.isFunction(a.getHeaders)) {
        const m = a.getHeaders(),
          h = ["content-type", "content-length"];
        Object.entries(m).forEach(([y, g]) => {
          h.includes(y.toLowerCase()) && c.set(y, g);
        });
      }
    }
    if (
      un.hasStandardBrowserEnv &&
      (i && ee.isFunction(i) && (i = i(t)), i || (i !== !1 && LD(t.url)))
    ) {
      const m = s && u && UD.read(u);
      m && c.set(s, m);
    }
    return t;
  },
  BD = typeof XMLHttpRequest < "u",
  VD =
    BD &&
    function (e) {
      return new Promise(function (a, i) {
        const s = W2(e);
        let u = s.data;
        const c = On.from(s.headers).normalize();
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
          const D = On.from(
              "getAllResponseHeaders" in x && x.getAllResponseHeaders(),
            ),
            L = {
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
          (X2(
            function (Y) {
              (a(Y), E());
            },
            function (Y) {
              (i(Y), E());
            },
            L,
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
            const L = B && B.message ? B.message : "Network Error",
              C = new Ve(L, Ve.ERR_NETWORK, e, x);
            ((C.event = B || null), i(C), (x = null));
          }),
          (x.ontimeout = function () {
            let B = s.timeout
              ? "timeout of " + s.timeout + "ms exceeded"
              : "timeout exceeded";
            const L = s.transitional || Y2;
            (s.timeoutErrorMessage && (B = s.timeoutErrorMessage),
              i(
                new Ve(
                  B,
                  L.clarifyTimeoutError ? Ve.ETIMEDOUT : Ve.ECONNABORTED,
                  e,
                  x,
                ),
              ),
              (x = null));
          }),
          u === void 0 && c.setContentType(null),
          "setRequestHeader" in x &&
            ee.forEach(c.toJSON(), function (B, L) {
              x.setRequestHeader(L, B);
            }),
          ee.isUndefined(s.withCredentials) ||
            (x.withCredentials = !!s.withCredentials),
          d && d !== "json" && (x.responseType = s.responseType),
          h && (([v, S] = Rc(h, !0)), x.addEventListener("progress", v)),
          m &&
            x.upload &&
            (([g, _] = Rc(m)),
            x.upload.addEventListener("progress", g),
            x.upload.addEventListener("loadend", _)),
          (s.cancelToken || s.signal) &&
            ((y = (D) => {
              x &&
                (i(!D || D.type ? new Zo(null, e, x) : D),
                x.abort(),
                (x = null));
            }),
            s.cancelToken && s.cancelToken.subscribe(y),
            s.signal &&
              (s.signal.aborted
                ? y()
                : s.signal.addEventListener("abort", y))));
        const F = zD(s.url);
        if (F && un.protocols.indexOf(F) === -1) {
          i(new Ve("Unsupported protocol " + F + ":", Ve.ERR_BAD_REQUEST, e));
          return;
        }
        x.send(u || null);
      });
    },
  $D = (e, t) => {
    const { length: a } = (e = e ? e.filter(Boolean) : []);
    if (t || a) {
      let i = new AbortController(),
        s;
      const u = function (h) {
        if (!s) {
          ((s = !0), d());
          const y = h instanceof Error ? h : this.reason;
          i.abort(
            y instanceof Ve ? y : new Zo(y instanceof Error ? y.message : y),
          );
        }
      };
      let c =
        t &&
        setTimeout(() => {
          ((c = null), u(new Ve(`timeout ${t} of ms exceeded`, Ve.ETIMEDOUT)));
        }, t);
      const d = () => {
        e &&
          (c && clearTimeout(c),
          (c = null),
          e.forEach((h) => {
            h.unsubscribe
              ? h.unsubscribe(u)
              : h.removeEventListener("abort", u);
          }),
          (e = null));
      };
      e.forEach((h) => h.addEventListener("abort", u));
      const { signal: m } = i;
      return ((m.unsubscribe = () => ee.asap(d)), m);
    }
  },
  HD = function* (e, t) {
    let a = e.byteLength;
    if (a < t) {
      yield e;
      return;
    }
    let i = 0,
      s;
    for (; i < a; ) ((s = i + t), yield e.slice(i, s), (i = s));
  },
  ZD = async function* (e, t) {
    for await (const a of ID(e)) yield* HD(a, t);
  },
  ID = async function* (e) {
    if (e[Symbol.asyncIterator]) {
      yield* e;
      return;
    }
    const t = e.getReader();
    try {
      for (;;) {
        const { done: a, value: i } = await t.read();
        if (a) break;
        yield i;
      }
    } finally {
      await t.cancel();
    }
  },
  Pb = (e, t, a, i) => {
    const s = ZD(e, t);
    let u = 0,
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
            if (a) {
              let v = (u += g);
              a(v);
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
  Fb = 64 * 1024,
  { isFunction: Xu } = ee,
  qD = (({ Request: e, Response: t }) => ({ Request: e, Response: t }))(
    ee.global,
  ),
  { ReadableStream: Bb, TextEncoder: Vb } = ee.global,
  $b = (e, ...t) => {
    try {
      return !!e(...t);
    } catch {
      return !1;
    }
  },
  GD = (e) => {
    e = ee.merge.call({ skipUndefined: !0 }, qD, e);
    const { fetch: t, Request: a, Response: i } = e,
      s = t ? Xu(t) : typeof fetch == "function",
      u = Xu(a),
      c = Xu(i);
    if (!s) return !1;
    const d = s && Xu(Bb),
      m =
        s &&
        (typeof Vb == "function"
          ? (
              (S) => (E) =>
                S.encode(E)
            )(new Vb())
          : async (S) => new Uint8Array(await new a(S).arrayBuffer())),
      h =
        u &&
        d &&
        $b(() => {
          let S = !1;
          const E = new a(un.origin, {
            body: new Bb(),
            method: "POST",
            get duplex() {
              return ((S = !0), "half");
            },
          }).headers.has("Content-Type");
          return S && !E;
        }),
      y = c && d && $b(() => ee.isReadableStream(new i("").body)),
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
            await new a(un.origin, { method: "POST", body: S }).arrayBuffer()
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
          signal: F,
          cancelToken: D,
          timeout: B,
          onDownloadProgress: L,
          onUploadProgress: C,
          responseType: Y,
          headers: Q,
          withCredentials: me = "same-origin",
          fetchOptions: pe,
        } = W2(S),
        we = t || fetch;
      Y = Y ? (Y + "").toLowerCase() : "text";
      let be = $D([F, D && D.toAbortSignal()], B),
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
          let W = new a(E, { method: "POST", body: T, duplex: "half" }),
            fe;
          if (
            (ee.isFormData(T) &&
              (fe = W.headers.get("content-type")) &&
              Q.setContentType(fe),
            W.body)
          ) {
            const [le, ve] = jb(ge, Rc(Lb(C)));
            T = Pb(W.body, Fb, le, ve);
          }
        }
        ee.isString(me) || (me = me ? "include" : "omit");
        const U = u && "credentials" in a.prototype,
          ne = {
            ...pe,
            signal: be,
            method: x.toUpperCase(),
            headers: Q.normalize().toJSON(),
            body: T,
            duplex: "half",
            credentials: U ? me : void 0,
          };
        Se = u && new a(E, ne);
        let q = await (u ? we(Se, pe) : we(E, ne));
        const ie = y && (Y === "stream" || Y === "response");
        if (y && (L || (ie && ce))) {
          const W = {};
          ["status", "statusText", "headers"].forEach((ke) => {
            W[ke] = q[ke];
          });
          const fe = ee.toFiniteNumber(q.headers.get("content-length")),
            [le, ve] = (L && jb(fe, Rc(Lb(L), !0))) || [];
          q = new i(
            Pb(q.body, Fb, le, () => {
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
            X2(W, fe, {
              data: N,
              headers: On.from(q.headers),
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
  YD = new Map(),
  eS = (e) => {
    let t = e ? e.env : {};
    const { fetch: a, Request: i, Response: s } = t,
      u = [i, s, a];
    let c = u.length,
      d = c,
      m,
      h,
      y = YD;
    for (; d--; )
      ((m = u[d]),
        (h = y.get(m)),
        h === void 0 && y.set(m, (h = d ? new Map() : GD(t))),
        (y = h));
    return h;
  };
eS();
const pm = { http: fD, xhr: VD, fetch: { get: eS } };
ee.forEach(pm, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Hb = (e) => `- ${e}`,
  KD = (e) => ee.isFunction(e) || e === null || e === !1,
  tS = {
    getAdapter: (e, t) => {
      e = ee.isArray(e) ? e : [e];
      const { length: a } = e;
      let i, s;
      const u = {};
      for (let c = 0; c < a; c++) {
        i = e[c];
        let d;
        if (
          ((s = i),
          !KD(i) && ((s = pm[(d = String(i)).toLowerCase()]), s === void 0))
        )
          throw new Ve(`Unknown adapter '${d}'`);
        if (s && (ee.isFunction(s) || (s = s.get(t)))) break;
        u[d || "#" + c] = s;
      }
      if (!s) {
        const c = Object.entries(u).map(
          ([m, h]) =>
            `adapter ${m} ` +
            (h === !1
              ? "is not supported by the environment"
              : "is not available in the build"),
        );
        let d = a
          ? c.length > 1
            ? `since :
` +
              c.map(Hb).join(`
`)
            : " " + Hb(c[0])
          : "as no adapter specified";
        throw new Ve(
          "There is no suitable adapter to dispatch the request " + d,
          "ERR_NOT_SUPPORT",
        );
      }
      return s;
    },
    adapters: pm,
  };
function $h(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new Zo(null, e);
}
function Zb(e) {
  return (
    $h(e),
    (e.headers = On.from(e.headers)),
    (e.data = Vh.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    tS
      .getAdapter(
        e.adapter || Rl.adapter,
        e,
      )(e)
      .then(
        function (i) {
          return (
            $h(e),
            (i.data = Vh.call(e, e.transformResponse, i)),
            (i.headers = On.from(i.headers)),
            i
          );
        },
        function (i) {
          return (
            Q2(i) ||
              ($h(e),
              i &&
                i.response &&
                ((i.response.data = Vh.call(
                  e,
                  e.transformResponse,
                  i.response,
                )),
                (i.response.headers = On.from(i.response.headers)))),
            Promise.reject(i)
          );
        },
      )
  );
}
const nS = "1.12.2",
  ef = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    ef[e] = function (i) {
      return typeof i === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  },
);
const Ib = {};
ef.transitional = function (t, a, i) {
  function s(u, c) {
    return (
      "[Axios v" +
      nS +
      "] Transitional option '" +
      u +
      "'" +
      c +
      (i ? ". " + i : "")
    );
  }
  return (u, c, d) => {
    if (t === !1)
      throw new Ve(
        s(c, " has been removed" + (a ? " in " + a : "")),
        Ve.ERR_DEPRECATED,
      );
    return (
      a &&
        !Ib[c] &&
        ((Ib[c] = !0),
        console.warn(
          s(
            c,
            " has been deprecated since v" +
              a +
              " and will be removed in the near future",
          ),
        )),
      t ? t(u, c, d) : !0
    );
  };
};
ef.spelling = function (t) {
  return (a, i) => (console.warn(`${i} is likely a misspelling of ${t}`), !0);
};
function QD(e, t, a) {
  if (typeof e != "object")
    throw new Ve("options must be an object", Ve.ERR_BAD_OPTION_VALUE);
  const i = Object.keys(e);
  let s = i.length;
  for (; s-- > 0; ) {
    const u = i[s],
      c = t[u];
    if (c) {
      const d = e[u],
        m = d === void 0 || c(d, u, e);
      if (m !== !0)
        throw new Ve("option " + u + " must be " + m, Ve.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (a !== !0) throw new Ve("Unknown option " + u, Ve.ERR_BAD_OPTION);
  }
}
const pc = { assertOptions: QD, validators: ef },
  xr = pc.validators;
let Ti = class {
  constructor(t) {
    ((this.defaults = t || {}),
      (this.interceptors = { request: new zb(), response: new zb() }));
  }
  async request(t, a) {
    try {
      return await this._request(t, a);
    } catch (i) {
      if (i instanceof Error) {
        let s = {};
        Error.captureStackTrace
          ? Error.captureStackTrace(s)
          : (s = new Error());
        const u = s.stack ? s.stack.replace(/^.+\n/, "") : "";
        try {
          i.stack
            ? u &&
              !String(i.stack).endsWith(u.replace(/^.+\n.+\n/, "")) &&
              (i.stack +=
                `
` + u)
            : (i.stack = u);
        } catch {}
      }
      throw i;
    }
  }
  _request(t, a) {
    (typeof t == "string" ? ((a = a || {}), (a.url = t)) : (a = t || {}),
      (a = Ni(this.defaults, a)));
    const { transitional: i, paramsSerializer: s, headers: u } = a;
    (i !== void 0 &&
      pc.assertOptions(
        i,
        {
          silentJSONParsing: xr.transitional(xr.boolean),
          forcedJSONParsing: xr.transitional(xr.boolean),
          clarifyTimeoutError: xr.transitional(xr.boolean),
        },
        !1,
      ),
      s != null &&
        (ee.isFunction(s)
          ? (a.paramsSerializer = { serialize: s })
          : pc.assertOptions(
              s,
              { encode: xr.function, serialize: xr.function },
              !0,
            )),
      a.allowAbsoluteUrls !== void 0 ||
        (this.defaults.allowAbsoluteUrls !== void 0
          ? (a.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls)
          : (a.allowAbsoluteUrls = !0)),
      pc.assertOptions(
        a,
        {
          baseUrl: xr.spelling("baseURL"),
          withXsrfToken: xr.spelling("withXSRFToken"),
        },
        !0,
      ),
      (a.method = (a.method || this.defaults.method || "get").toLowerCase()));
    let c = u && ee.merge(u.common, u[a.method]);
    (u &&
      ee.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (S) => {
          delete u[S];
        },
      ),
      (a.headers = On.concat(c, u)));
    const d = [];
    let m = !0;
    this.interceptors.request.forEach(function (E) {
      (typeof E.runWhen == "function" && E.runWhen(a) === !1) ||
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
      const S = [Zb.bind(this), void 0];
      for (
        S.unshift(...d), S.push(...h), v = S.length, y = Promise.resolve(a);
        g < v;

      )
        y = y.then(S[g++], S[g++]);
      return y;
    }
    v = d.length;
    let _ = a;
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
      y = Zb.call(this, _);
    } catch (S) {
      return Promise.reject(S);
    }
    for (g = 0, v = h.length; g < v; ) y = y.then(h[g++], h[g++]);
    return y;
  }
  getUri(t) {
    t = Ni(this.defaults, t);
    const a = J2(t.baseURL, t.url, t.allowAbsoluteUrls);
    return G2(a, t.params, t.paramsSerializer);
  }
};
ee.forEach(["delete", "get", "head", "options"], function (t) {
  Ti.prototype[t] = function (a, i) {
    return this.request(
      Ni(i || {}, { method: t, url: a, data: (i || {}).data }),
    );
  };
});
ee.forEach(["post", "put", "patch"], function (t) {
  function a(i) {
    return function (u, c, d) {
      return this.request(
        Ni(d || {}, {
          method: t,
          headers: i ? { "Content-Type": "multipart/form-data" } : {},
          url: u,
          data: c,
        }),
      );
    };
  }
  ((Ti.prototype[t] = a()), (Ti.prototype[t + "Form"] = a(!0)));
});
let XD = class rS {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let a;
    this.promise = new Promise(function (u) {
      a = u;
    });
    const i = this;
    (this.promise.then((s) => {
      if (!i._listeners) return;
      let u = i._listeners.length;
      for (; u-- > 0; ) i._listeners[u](s);
      i._listeners = null;
    }),
      (this.promise.then = (s) => {
        let u;
        const c = new Promise((d) => {
          (i.subscribe(d), (u = d));
        }).then(s);
        return (
          (c.cancel = function () {
            i.unsubscribe(u);
          }),
          c
        );
      }),
      t(function (u, c, d) {
        i.reason || ((i.reason = new Zo(u, c, d)), a(i.reason));
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
    const a = this._listeners.indexOf(t);
    a !== -1 && this._listeners.splice(a, 1);
  }
  toAbortSignal() {
    const t = new AbortController(),
      a = (i) => {
        t.abort(i);
      };
    return (
      this.subscribe(a),
      (t.signal.unsubscribe = () => this.unsubscribe(a)),
      t.signal
    );
  }
  static source() {
    let t;
    return {
      token: new rS(function (s) {
        t = s;
      }),
      cancel: t,
    };
  }
};
function JD(e) {
  return function (a) {
    return e.apply(null, a);
  };
}
function WD(e) {
  return ee.isObject(e) && e.isAxiosError === !0;
}
const ym = {
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
Object.entries(ym).forEach(([e, t]) => {
  ym[t] = e;
});
function aS(e) {
  const t = new Ti(e),
    a = j2(Ti.prototype.request, t);
  return (
    ee.extend(a, Ti.prototype, t, { allOwnKeys: !0 }),
    ee.extend(a, t, null, { allOwnKeys: !0 }),
    (a.create = function (s) {
      return aS(Ni(e, s));
    }),
    a
  );
}
const zt = aS(Rl);
zt.Axios = Ti;
zt.CanceledError = Zo;
zt.CancelToken = XD;
zt.isCancel = Q2;
zt.VERSION = nS;
zt.toFormData = Wc;
zt.AxiosError = Ve;
zt.Cancel = zt.CanceledError;
zt.all = function (t) {
  return Promise.all(t);
};
zt.spread = JD;
zt.isAxiosError = WD;
zt.mergeConfig = Ni;
zt.AxiosHeaders = On;
zt.formToJSON = (e) => K2(ee.isHTMLForm(e) ? new FormData(e) : e);
zt.getAdapter = tS.getAdapter;
zt.HttpStatusCode = ym;
zt.default = zt;
const {
    Axios: _j,
    AxiosError: e3,
    CanceledError: Ej,
    isCancel: xj,
    CancelToken: Rj,
    VERSION: Oj,
    all: Aj,
    Cancel: Cj,
    isAxiosError: ir,
    spread: Tj,
    toFormData: Dj,
    AxiosHeaders: Mj,
    HttpStatusCode: Nj,
    formToJSON: zj,
    getAdapter: kj,
    mergeConfig: jj,
  } = zt,
  t3 = "http://127.0.0.1:8000",
  rn = zt.create({ baseURL: `${t3}/api`, withCredentials: !0 });
rn.interceptors.request.use((e) => e);
rn.interceptors.response.use(
  (e) => e,
  async (e) => {
    const t = e.config,
      a = t?.url?.includes("/user/refresh/");
    if (e.response?.status === 401 && t && !a)
      try {
        return (await rn.post("/user/refresh/", {}), rn.request(t));
      } catch (i) {
        return i instanceof e3 && i.response?.status === 401
          ? Promise.reject(new n3("Refresh token expired"))
          : Promise.reject(i);
      }
    return Promise.reject(e instanceof Error ? e : new Error(String(e)));
  },
);
class n3 extends Error {
  constructor(t) {
    (super(t), (this.name = "RefreshTokenExpiredError"));
  }
}
async function Lj(e) {
  try {
    return (
      (await rn.get("/user/kakao/callback/", { params: { code: e } }))
        .status === 200
    );
  } catch (t) {
    ir(t)
      ? console.error(
          "kakaoSignIn error:",
          t.response?.status,
          t.response?.data,
        )
      : console.error("kakaoSignIn unknown error:", t);
  }
  return !1;
}
async function Uj(e = {}) {
  try {
    const t = await rn.get("/auction/", { params: e });
    if (t.status === 200) return t.data;
    throw new Error(`경매 목록 요청 실패: ${t.status}`);
  } catch (t) {
    throw (
      ir(t)
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
async function Pj() {
  try {
    const e = await rn.get("/auction/recommended/");
    if (e.status === 200) return e.data;
    throw new Error(`추천 경매 요청 실패: ${e.status}`);
  } catch (e) {
    throw (
      ir(e)
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
async function Fj(e) {
  try {
    const t = encodeURIComponent(String(e)),
      a = await rn.get(`/auction/${t}/`);
    return a.status === 200 ? a.data : null;
  } catch (t) {
    return (
      ir(t)
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
async function Bj() {
  try {
    const e = await rn.get("/user/me/");
    return e.status === 200 ? e.data : null;
  } catch (e) {
    return (
      ir(e)
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
async function r3(e) {
  try {
    const t = await rn.post("/payment/ready/", {
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
      ir(t)
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
async function a3(e, t) {
  try {
    const a = await rn.put("/user/me/", { nickname: e, profilepic_id: t });
    return a.status === 200 ? a.data : null;
  } catch (a) {
    return (
      ir(a)
        ? console.error(
            "updateUserProfile error:",
            a.response?.status,
            a.response?.data,
          )
        : console.error("updateUserProfile unknown error:", a),
      null
    );
  }
}
async function Vj(e) {
  try {
    return (
      (await rn.post("/payment/approve/", { pg_token: e.pg_token, tid: e.tid }))
        .status === 200
    );
  } catch (t) {
    return (
      ir(t)
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
async function $j() {
  try {
    const e = await rn.get("/payment/history/");
    return e.status === 200 ? e.data : [];
  } catch (e) {
    return (
      ir(e)
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
async function Hj(e, t) {
  try {
    const a = await rn.post(`/auction/${e}/bid/`, { amount: t });
    return a.status === 201 ? a.data : null;
  } catch (a) {
    return (
      ir(a)
        ? console.error("placeBid error:", a.response?.status, a.response?.data)
        : console.error("placeBid unknown error:", a),
      null
    );
  }
}
async function Zj(e) {
  try {
    if (e.image_file) {
      const s = new FormData();
      (s.append("title", e.title),
        s.append("description", e.description),
        s.append("starting_price", String(e.starting_price)),
        s.append("end_time", e.end_time),
        s.append("image_file", e.image_file, e.image_file.name));
      const u = await rn.post("/auction/create/", s);
      return u.status === 201 ? u.data : null;
    }
    const { image_file: t, ...a } = e,
      i = await rn.post("/auction/create/", a);
    return i.status === 201 ? i.data : null;
  } catch (t) {
    return (
      ir(t)
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
async function i3() {
  try {
    return (await rn.post("/user/signout/")).status === 200;
  } catch (e) {
    return (
      ir(e)
        ? console.error("signOut error:", e.response?.status, e.response?.data)
        : console.error("signOut unknown error:", e),
      !1
    );
  }
}
const iS = w.createContext(null),
  o3 = ({ children: e }) => {
    const [t, a] = w.useState(null),
      i = (c) => {
        a({
          profileImage: qb(c.profilepic_id),
          nickname: c.nickname ?? "",
          points: c.remaining_points,
        });
      },
      s = async () => {
        (await i3(), a(null));
      },
      u = async (c, d) => {
        const m = await a3(c, d);
        return m
          ? (a({
              profileImage: qb(m.profilepic_id),
              nickname: m.nickname ?? "",
              points: m.remaining_points,
            }),
            !0)
          : !1;
      };
    return k.jsx(iS.Provider, {
      value: { user: t, login: i, logout: s, updateProfile: u },
      children: e,
    });
  },
  mp = () => {
    const e = w.useContext(iS);
    if (!e) throw new Error("useUser must be used within a UserProvider");
    return e;
  },
  oa = [Ec, $w, Hw, Zw, Iw, qw];
function qb(e) {
  return e ? (oa[(e - 1) % oa.length] ?? Ec) : Ec;
}
function oS(e) {
  const t = e + "CollectionProvider",
    [a, i] = $o(t),
    [s, u] = a(t, { collectionRef: { current: null }, itemMap: new Map() }),
    c = (E) => {
      const { scope: x, children: T } = E,
        F = Re.useRef(null),
        D = Re.useRef(new Map()).current;
      return k.jsx(s, { scope: x, itemMap: D, collectionRef: F, children: T });
    };
  c.displayName = t;
  const d = e + "CollectionSlot",
    m = fl(d),
    h = Re.forwardRef((E, x) => {
      const { scope: T, children: F } = E,
        D = u(d, T),
        B = an(x, D.collectionRef);
      return k.jsx(m, { ref: B, children: F });
    });
  h.displayName = d;
  const y = e + "CollectionItemSlot",
    g = "data-radix-collection-item",
    v = fl(y),
    _ = Re.forwardRef((E, x) => {
      const { scope: T, children: F, ...D } = E,
        B = Re.useRef(null),
        L = an(x, B),
        C = u(y, T);
      return (
        Re.useEffect(
          () => (
            C.itemMap.set(B, { ref: B, ...D }),
            () => void C.itemMap.delete(B)
          ),
        ),
        k.jsx(v, { [g]: "", ref: L, children: F })
      );
    });
  _.displayName = y;
  function S(E) {
    const x = u(e + "CollectionConsumer", E);
    return Re.useCallback(() => {
      const F = x.collectionRef.current;
      if (!F) return [];
      const D = Array.from(F.querySelectorAll(`[${g}]`));
      return Array.from(x.itemMap.values()).sort(
        (C, Y) => D.indexOf(C.ref.current) - D.indexOf(Y.ref.current),
      );
    }, [x.collectionRef, x.itemMap]);
  }
  return [{ Provider: c, Slot: h, ItemSlot: _ }, S, i];
}
var s3 = w.createContext(void 0);
function sS(e) {
  const t = w.useContext(s3);
  return e || t || "ltr";
}
const l3 = ["top", "right", "bottom", "left"],
  Ya = Math.min,
  Pn = Math.max,
  Oc = Math.round,
  Ju = Math.floor,
  Dr = (e) => ({ x: e, y: e }),
  u3 = { left: "right", right: "left", bottom: "top", top: "bottom" },
  c3 = { start: "end", end: "start" };
function gm(e, t, a) {
  return Pn(e, Ya(t, a));
}
function ua(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function ca(e) {
  return e.split("-")[0];
}
function Io(e) {
  return e.split("-")[1];
}
function pp(e) {
  return e === "x" ? "y" : "x";
}
function yp(e) {
  return e === "y" ? "height" : "width";
}
const f3 = new Set(["top", "bottom"]);
function Ar(e) {
  return f3.has(ca(e)) ? "y" : "x";
}
function gp(e) {
  return pp(Ar(e));
}
function d3(e, t, a) {
  a === void 0 && (a = !1);
  const i = Io(e),
    s = gp(e),
    u = yp(s);
  let c =
    s === "x"
      ? i === (a ? "end" : "start")
        ? "right"
        : "left"
      : i === "start"
        ? "bottom"
        : "top";
  return (t.reference[u] > t.floating[u] && (c = Ac(c)), [c, Ac(c)]);
}
function h3(e) {
  const t = Ac(e);
  return [vm(e), t, vm(t)];
}
function vm(e) {
  return e.replace(/start|end/g, (t) => c3[t]);
}
const Gb = ["left", "right"],
  Yb = ["right", "left"],
  m3 = ["top", "bottom"],
  p3 = ["bottom", "top"];
function y3(e, t, a) {
  switch (e) {
    case "top":
    case "bottom":
      return a ? (t ? Yb : Gb) : t ? Gb : Yb;
    case "left":
    case "right":
      return t ? m3 : p3;
    default:
      return [];
  }
}
function g3(e, t, a, i) {
  const s = Io(e);
  let u = y3(ca(e), a === "start", i);
  return (
    s && ((u = u.map((c) => c + "-" + s)), t && (u = u.concat(u.map(vm)))),
    u
  );
}
function Ac(e) {
  return e.replace(/left|right|bottom|top/g, (t) => u3[t]);
}
function v3(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function lS(e) {
  return typeof e != "number"
    ? v3(e)
    : { top: e, right: e, bottom: e, left: e };
}
function Cc(e) {
  const { x: t, y: a, width: i, height: s } = e;
  return {
    width: i,
    height: s,
    top: a,
    left: t,
    right: t + i,
    bottom: a + s,
    x: t,
    y: a,
  };
}
function Kb(e, t, a) {
  let { reference: i, floating: s } = e;
  const u = Ar(t),
    c = gp(t),
    d = yp(c),
    m = ca(t),
    h = u === "y",
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
  switch (Io(t)) {
    case "start":
      _[c] -= v * (a && h ? -1 : 1);
      break;
    case "end":
      _[c] += v * (a && h ? -1 : 1);
      break;
  }
  return _;
}
const b3 = async (e, t, a) => {
  const {
      placement: i = "bottom",
      strategy: s = "absolute",
      middleware: u = [],
      platform: c,
    } = a,
    d = u.filter(Boolean),
    m = await (c.isRTL == null ? void 0 : c.isRTL(t));
  let h = await c.getElementRects({ reference: e, floating: t, strategy: s }),
    { x: y, y: g } = Kb(h, i, m),
    v = i,
    _ = {},
    S = 0;
  for (let E = 0; E < d.length; E++) {
    const { name: x, fn: T } = d[E],
      {
        x: F,
        y: D,
        data: B,
        reset: L,
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
    ((y = F ?? y),
      (g = D ?? g),
      (_ = { ..._, [x]: { ..._[x], ...B } }),
      L &&
        S <= 50 &&
        (S++,
        typeof L == "object" &&
          (L.placement && (v = L.placement),
          L.rects &&
            (h =
              L.rects === !0
                ? await c.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: s,
                  })
                : L.rects),
          ({ x: y, y: g } = Kb(h, v, m))),
        (E = -1)));
  }
  return { x: y, y: g, placement: v, strategy: s, middlewareData: _ };
};
async function dl(e, t) {
  var a;
  t === void 0 && (t = {});
  const { x: i, y: s, platform: u, rects: c, elements: d, strategy: m } = e,
    {
      boundary: h = "clippingAncestors",
      rootBoundary: y = "viewport",
      elementContext: g = "floating",
      altBoundary: v = !1,
      padding: _ = 0,
    } = ua(t, e),
    S = lS(_),
    x = d[v ? (g === "floating" ? "reference" : "floating") : g],
    T = Cc(
      await u.getClippingRect({
        element:
          (a = await (u.isElement == null ? void 0 : u.isElement(x))) == null ||
          a
            ? x
            : x.contextElement ||
              (await (u.getDocumentElement == null
                ? void 0
                : u.getDocumentElement(d.floating))),
        boundary: h,
        rootBoundary: y,
        strategy: m,
      }),
    ),
    F =
      g === "floating"
        ? { x: i, y: s, width: c.floating.width, height: c.floating.height }
        : c.reference,
    D = await (u.getOffsetParent == null
      ? void 0
      : u.getOffsetParent(d.floating)),
    B = (await (u.isElement == null ? void 0 : u.isElement(D)))
      ? (await (u.getScale == null ? void 0 : u.getScale(D))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    L = Cc(
      u.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await u.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: d,
            rect: F,
            offsetParent: D,
            strategy: m,
          })
        : F,
    );
  return {
    top: (T.top - L.top + S.top) / B.y,
    bottom: (L.bottom - T.bottom + S.bottom) / B.y,
    left: (T.left - L.left + S.left) / B.x,
    right: (L.right - T.right + S.right) / B.x,
  };
}
const w3 = (e) => ({
    name: "arrow",
    options: e,
    async fn(t) {
      const {
          x: a,
          y: i,
          placement: s,
          rects: u,
          platform: c,
          elements: d,
          middlewareData: m,
        } = t,
        { element: h, padding: y = 0 } = ua(e, t) || {};
      if (h == null) return {};
      const g = lS(y),
        v = { x: a, y: i },
        _ = gp(s),
        S = yp(_),
        E = await c.getDimensions(h),
        x = _ === "y",
        T = x ? "top" : "left",
        F = x ? "bottom" : "right",
        D = x ? "clientHeight" : "clientWidth",
        B = u.reference[S] + u.reference[_] - v[_] - u.floating[S],
        L = v[_] - u.reference[_],
        C = await (c.getOffsetParent == null ? void 0 : c.getOffsetParent(h));
      let Y = C ? C[D] : 0;
      (!Y || !(await (c.isElement == null ? void 0 : c.isElement(C)))) &&
        (Y = d.floating[D] || u.floating[S]);
      const Q = B / 2 - L / 2,
        me = Y / 2 - E[S] / 2 - 1,
        pe = Ya(g[T], me),
        we = Ya(g[F], me),
        be = pe,
        Se = Y - E[S] - we,
        ce = Y / 2 - E[S] / 2 + Q,
        ge = gm(be, ce, Se),
        U =
          !m.arrow &&
          Io(s) != null &&
          ce !== ge &&
          u.reference[S] / 2 - (ce < be ? pe : we) - E[S] / 2 < 0,
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
  S3 = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "flip",
        options: e,
        async fn(t) {
          var a, i;
          const {
              placement: s,
              middlewareData: u,
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
            } = ua(e, t);
          if ((a = u.arrow) != null && a.alignmentOffset) return {};
          const T = ca(s),
            F = Ar(d),
            D = ca(d) === d,
            B = await (m.isRTL == null ? void 0 : m.isRTL(h.floating)),
            L = v || (D || !E ? [Ac(d)] : h3(d)),
            C = S !== "none";
          !v && C && L.push(...g3(d, E, S, B));
          const Y = [d, ...L],
            Q = await dl(t, x),
            me = [];
          let pe = ((i = u.flip) == null ? void 0 : i.overflows) || [];
          if ((y && me.push(Q[T]), g)) {
            const ce = d3(s, c, B);
            me.push(Q[ce[0]], Q[ce[1]]);
          }
          if (
            ((pe = [...pe, { placement: s, overflows: me }]),
            !me.every((ce) => ce <= 0))
          ) {
            var we, be;
            const ce = (((we = u.flip) == null ? void 0 : we.index) || 0) + 1,
              ge = Y[ce];
            if (
              ge &&
              (!(g === "alignment" ? F !== Ar(ge) : !1) ||
                pe.every((q) =>
                  Ar(q.placement) === F ? q.overflows[0] > 0 : !0,
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
                          const ie = Ar(q.placement);
                          return ie === F || ie === "y";
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
function Qb(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width,
  };
}
function Xb(e) {
  return l3.some((t) => e[t] >= 0);
}
const _3 = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "hide",
        options: e,
        async fn(t) {
          const { rects: a } = t,
            { strategy: i = "referenceHidden", ...s } = ua(e, t);
          switch (i) {
            case "referenceHidden": {
              const u = await dl(t, { ...s, elementContext: "reference" }),
                c = Qb(u, a.reference);
              return {
                data: { referenceHiddenOffsets: c, referenceHidden: Xb(c) },
              };
            }
            case "escaped": {
              const u = await dl(t, { ...s, altBoundary: !0 }),
                c = Qb(u, a.floating);
              return { data: { escapedOffsets: c, escaped: Xb(c) } };
            }
            default:
              return {};
          }
        },
      }
    );
  },
  uS = new Set(["left", "top"]);
async function E3(e, t) {
  const { placement: a, platform: i, elements: s } = e,
    u = await (i.isRTL == null ? void 0 : i.isRTL(s.floating)),
    c = ca(a),
    d = Io(a),
    m = Ar(a) === "y",
    h = uS.has(c) ? -1 : 1,
    y = u && m ? -1 : 1,
    g = ua(t, e);
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
const x3 = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: "offset",
        options: e,
        async fn(t) {
          var a, i;
          const { x: s, y: u, placement: c, middlewareData: d } = t,
            m = await E3(t, e);
          return c === ((a = d.offset) == null ? void 0 : a.placement) &&
            (i = d.arrow) != null &&
            i.alignmentOffset
            ? {}
            : { x: s + m.x, y: u + m.y, data: { ...m, placement: c } };
        },
      }
    );
  },
  R3 = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "shift",
        options: e,
        async fn(t) {
          const { x: a, y: i, placement: s } = t,
            {
              mainAxis: u = !0,
              crossAxis: c = !1,
              limiter: d = {
                fn: (x) => {
                  let { x: T, y: F } = x;
                  return { x: T, y: F };
                },
              },
              ...m
            } = ua(e, t),
            h = { x: a, y: i },
            y = await dl(t, m),
            g = Ar(ca(s)),
            v = pp(g);
          let _ = h[v],
            S = h[g];
          if (u) {
            const x = v === "y" ? "top" : "left",
              T = v === "y" ? "bottom" : "right",
              F = _ + y[x],
              D = _ - y[T];
            _ = gm(F, _, D);
          }
          if (c) {
            const x = g === "y" ? "top" : "left",
              T = g === "y" ? "bottom" : "right",
              F = S + y[x],
              D = S - y[T];
            S = gm(F, S, D);
          }
          const E = d.fn({ ...t, [v]: _, [g]: S });
          return {
            ...E,
            data: { x: E.x - a, y: E.y - i, enabled: { [v]: u, [g]: c } },
          };
        },
      }
    );
  },
  O3 = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        options: e,
        fn(t) {
          const { x: a, y: i, placement: s, rects: u, middlewareData: c } = t,
            { offset: d = 0, mainAxis: m = !0, crossAxis: h = !0 } = ua(e, t),
            y = { x: a, y: i },
            g = Ar(s),
            v = pp(g);
          let _ = y[v],
            S = y[g];
          const E = ua(d, t),
            x =
              typeof E == "number"
                ? { mainAxis: E, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...E };
          if (m) {
            const D = v === "y" ? "height" : "width",
              B = u.reference[v] - u.floating[D] + x.mainAxis,
              L = u.reference[v] + u.reference[D] - x.mainAxis;
            _ < B ? (_ = B) : _ > L && (_ = L);
          }
          if (h) {
            var T, F;
            const D = v === "y" ? "width" : "height",
              B = uS.has(ca(s)),
              L =
                u.reference[g] -
                u.floating[D] +
                ((B && ((T = c.offset) == null ? void 0 : T[g])) || 0) +
                (B ? 0 : x.crossAxis),
              C =
                u.reference[g] +
                u.reference[D] +
                (B ? 0 : ((F = c.offset) == null ? void 0 : F[g]) || 0) -
                (B ? x.crossAxis : 0);
            S < L ? (S = L) : S > C && (S = C);
          }
          return { [v]: _, [g]: S };
        },
      }
    );
  },
  A3 = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "size",
        options: e,
        async fn(t) {
          var a, i;
          const { placement: s, rects: u, platform: c, elements: d } = t,
            { apply: m = () => {}, ...h } = ua(e, t),
            y = await dl(t, h),
            g = ca(s),
            v = Io(s),
            _ = Ar(s) === "y",
            { width: S, height: E } = u.floating;
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
          const F = E - y.top - y.bottom,
            D = S - y.left - y.right,
            B = Ya(E - y[x], F),
            L = Ya(S - y[T], D),
            C = !t.middlewareData.shift;
          let Y = B,
            Q = L;
          if (
            ((a = t.middlewareData.shift) != null && a.enabled.x && (Q = D),
            (i = t.middlewareData.shift) != null && i.enabled.y && (Y = F),
            C && !v)
          ) {
            const pe = Pn(y.left, 0),
              we = Pn(y.right, 0),
              be = Pn(y.top, 0),
              Se = Pn(y.bottom, 0);
            _
              ? (Q =
                  S -
                  2 * (pe !== 0 || we !== 0 ? pe + we : Pn(y.left, y.right)))
              : (Y =
                  E -
                  2 * (be !== 0 || Se !== 0 ? be + Se : Pn(y.top, y.bottom)));
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
function tf() {
  return typeof window < "u";
}
function qo(e) {
  return cS(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Bn(e) {
  var t;
  return (
    (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
    window
  );
}
function Lr(e) {
  var t;
  return (t = (cS(e) ? e.ownerDocument : e.document) || window.document) == null
    ? void 0
    : t.documentElement;
}
function cS(e) {
  return tf() ? e instanceof Node || e instanceof Bn(e).Node : !1;
}
function dr(e) {
  return tf() ? e instanceof Element || e instanceof Bn(e).Element : !1;
}
function Mr(e) {
  return tf() ? e instanceof HTMLElement || e instanceof Bn(e).HTMLElement : !1;
}
function Jb(e) {
  return !tf() || typeof ShadowRoot > "u"
    ? !1
    : e instanceof ShadowRoot || e instanceof Bn(e).ShadowRoot;
}
const C3 = new Set(["inline", "contents"]);
function Ol(e) {
  const { overflow: t, overflowX: a, overflowY: i, display: s } = hr(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + i + a) && !C3.has(s);
}
const T3 = new Set(["table", "td", "th"]);
function D3(e) {
  return T3.has(qo(e));
}
const M3 = [":popover-open", ":modal"];
function nf(e) {
  return M3.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const N3 = ["transform", "translate", "scale", "rotate", "perspective"],
  z3 = ["transform", "translate", "scale", "rotate", "perspective", "filter"],
  k3 = ["paint", "layout", "strict", "content"];
function vp(e) {
  const t = bp(),
    a = dr(e) ? hr(e) : e;
  return (
    N3.some((i) => (a[i] ? a[i] !== "none" : !1)) ||
    (a.containerType ? a.containerType !== "normal" : !1) ||
    (!t && (a.backdropFilter ? a.backdropFilter !== "none" : !1)) ||
    (!t && (a.filter ? a.filter !== "none" : !1)) ||
    z3.some((i) => (a.willChange || "").includes(i)) ||
    k3.some((i) => (a.contain || "").includes(i))
  );
}
function j3(e) {
  let t = Ka(e);
  for (; Mr(t) && !Lo(t); ) {
    if (vp(t)) return t;
    if (nf(t)) return null;
    t = Ka(t);
  }
  return null;
}
function bp() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
const L3 = new Set(["html", "body", "#document"]);
function Lo(e) {
  return L3.has(qo(e));
}
function hr(e) {
  return Bn(e).getComputedStyle(e);
}
function rf(e) {
  return dr(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function Ka(e) {
  if (qo(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || (Jb(e) && e.host) || Lr(e);
  return Jb(t) ? t.host : t;
}
function fS(e) {
  const t = Ka(e);
  return Lo(t)
    ? e.ownerDocument
      ? e.ownerDocument.body
      : e.body
    : Mr(t) && Ol(t)
      ? t
      : fS(t);
}
function hl(e, t, a) {
  var i;
  (t === void 0 && (t = []), a === void 0 && (a = !0));
  const s = fS(e),
    u = s === ((i = e.ownerDocument) == null ? void 0 : i.body),
    c = Bn(s);
  if (u) {
    const d = bm(c);
    return t.concat(
      c,
      c.visualViewport || [],
      Ol(s) ? s : [],
      d && a ? hl(d) : [],
    );
  }
  return t.concat(s, hl(s, [], a));
}
function bm(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function dS(e) {
  const t = hr(e);
  let a = parseFloat(t.width) || 0,
    i = parseFloat(t.height) || 0;
  const s = Mr(e),
    u = s ? e.offsetWidth : a,
    c = s ? e.offsetHeight : i,
    d = Oc(a) !== u || Oc(i) !== c;
  return (d && ((a = u), (i = c)), { width: a, height: i, $: d });
}
function wp(e) {
  return dr(e) ? e : e.contextElement;
}
function zo(e) {
  const t = wp(e);
  if (!Mr(t)) return Dr(1);
  const a = t.getBoundingClientRect(),
    { width: i, height: s, $: u } = dS(t);
  let c = (u ? Oc(a.width) : a.width) / i,
    d = (u ? Oc(a.height) : a.height) / s;
  return (
    (!c || !Number.isFinite(c)) && (c = 1),
    (!d || !Number.isFinite(d)) && (d = 1),
    { x: c, y: d }
  );
}
const U3 = Dr(0);
function hS(e) {
  const t = Bn(e);
  return !bp() || !t.visualViewport
    ? U3
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function P3(e, t, a) {
  return (t === void 0 && (t = !1), !a || (t && a !== Bn(e)) ? !1 : t);
}
function zi(e, t, a, i) {
  (t === void 0 && (t = !1), a === void 0 && (a = !1));
  const s = e.getBoundingClientRect(),
    u = wp(e);
  let c = Dr(1);
  t && (i ? dr(i) && (c = zo(i)) : (c = zo(e)));
  const d = P3(u, a, i) ? hS(u) : Dr(0);
  let m = (s.left + d.x) / c.x,
    h = (s.top + d.y) / c.y,
    y = s.width / c.x,
    g = s.height / c.y;
  if (u) {
    const v = Bn(u),
      _ = i && dr(i) ? Bn(i) : i;
    let S = v,
      E = bm(S);
    for (; E && i && _ !== S; ) {
      const x = zo(E),
        T = E.getBoundingClientRect(),
        F = hr(E),
        D = T.left + (E.clientLeft + parseFloat(F.paddingLeft)) * x.x,
        B = T.top + (E.clientTop + parseFloat(F.paddingTop)) * x.y;
      ((m *= x.x),
        (h *= x.y),
        (y *= x.x),
        (g *= x.y),
        (m += D),
        (h += B),
        (S = Bn(E)),
        (E = bm(S)));
    }
  }
  return Cc({ width: y, height: g, x: m, y: h });
}
function af(e, t) {
  const a = rf(e).scrollLeft;
  return t ? t.left + a : zi(Lr(e)).left + a;
}
function mS(e, t) {
  const a = e.getBoundingClientRect(),
    i = a.left + t.scrollLeft - af(e, a),
    s = a.top + t.scrollTop;
  return { x: i, y: s };
}
function F3(e) {
  let { elements: t, rect: a, offsetParent: i, strategy: s } = e;
  const u = s === "fixed",
    c = Lr(i),
    d = t ? nf(t.floating) : !1;
  if (i === c || (d && u)) return a;
  let m = { scrollLeft: 0, scrollTop: 0 },
    h = Dr(1);
  const y = Dr(0),
    g = Mr(i);
  if (
    (g || (!g && !u)) &&
    ((qo(i) !== "body" || Ol(c)) && (m = rf(i)), Mr(i))
  ) {
    const _ = zi(i);
    ((h = zo(i)), (y.x = _.x + i.clientLeft), (y.y = _.y + i.clientTop));
  }
  const v = c && !g && !u ? mS(c, m) : Dr(0);
  return {
    width: a.width * h.x,
    height: a.height * h.y,
    x: a.x * h.x - m.scrollLeft * h.x + y.x + v.x,
    y: a.y * h.y - m.scrollTop * h.y + y.y + v.y,
  };
}
function B3(e) {
  return Array.from(e.getClientRects());
}
function V3(e) {
  const t = Lr(e),
    a = rf(e),
    i = e.ownerDocument.body,
    s = Pn(t.scrollWidth, t.clientWidth, i.scrollWidth, i.clientWidth),
    u = Pn(t.scrollHeight, t.clientHeight, i.scrollHeight, i.clientHeight);
  let c = -a.scrollLeft + af(e);
  const d = -a.scrollTop;
  return (
    hr(i).direction === "rtl" && (c += Pn(t.clientWidth, i.clientWidth) - s),
    { width: s, height: u, x: c, y: d }
  );
}
const Wb = 25;
function $3(e, t) {
  const a = Bn(e),
    i = Lr(e),
    s = a.visualViewport;
  let u = i.clientWidth,
    c = i.clientHeight,
    d = 0,
    m = 0;
  if (s) {
    ((u = s.width), (c = s.height));
    const y = bp();
    (!y || (y && t === "fixed")) && ((d = s.offsetLeft), (m = s.offsetTop));
  }
  const h = af(i);
  if (h <= 0) {
    const y = i.ownerDocument,
      g = y.body,
      v = getComputedStyle(g),
      _ =
        (y.compatMode === "CSS1Compat" &&
          parseFloat(v.marginLeft) + parseFloat(v.marginRight)) ||
        0,
      S = Math.abs(i.clientWidth - g.clientWidth - _);
    S <= Wb && (u -= S);
  } else h <= Wb && (u += h);
  return { width: u, height: c, x: d, y: m };
}
const H3 = new Set(["absolute", "fixed"]);
function Z3(e, t) {
  const a = zi(e, !0, t === "fixed"),
    i = a.top + e.clientTop,
    s = a.left + e.clientLeft,
    u = Mr(e) ? zo(e) : Dr(1),
    c = e.clientWidth * u.x,
    d = e.clientHeight * u.y,
    m = s * u.x,
    h = i * u.y;
  return { width: c, height: d, x: m, y: h };
}
function e1(e, t, a) {
  let i;
  if (t === "viewport") i = $3(e, a);
  else if (t === "document") i = V3(Lr(e));
  else if (dr(t)) i = Z3(t, a);
  else {
    const s = hS(e);
    i = { x: t.x - s.x, y: t.y - s.y, width: t.width, height: t.height };
  }
  return Cc(i);
}
function pS(e, t) {
  const a = Ka(e);
  return a === t || !dr(a) || Lo(a)
    ? !1
    : hr(a).position === "fixed" || pS(a, t);
}
function I3(e, t) {
  const a = t.get(e);
  if (a) return a;
  let i = hl(e, [], !1).filter((d) => dr(d) && qo(d) !== "body"),
    s = null;
  const u = hr(e).position === "fixed";
  let c = u ? Ka(e) : e;
  for (; dr(c) && !Lo(c); ) {
    const d = hr(c),
      m = vp(c);
    (!m && d.position === "fixed" && (s = null),
      (
        u
          ? !m && !s
          : (!m && d.position === "static" && !!s && H3.has(s.position)) ||
            (Ol(c) && !m && pS(e, c))
      )
        ? (i = i.filter((y) => y !== c))
        : (s = d),
      (c = Ka(c)));
  }
  return (t.set(e, i), i);
}
function q3(e) {
  let { element: t, boundary: a, rootBoundary: i, strategy: s } = e;
  const c = [
      ...(a === "clippingAncestors"
        ? nf(t)
          ? []
          : I3(t, this._c)
        : [].concat(a)),
      i,
    ],
    d = c[0],
    m = c.reduce(
      (h, y) => {
        const g = e1(t, y, s);
        return (
          (h.top = Pn(g.top, h.top)),
          (h.right = Ya(g.right, h.right)),
          (h.bottom = Ya(g.bottom, h.bottom)),
          (h.left = Pn(g.left, h.left)),
          h
        );
      },
      e1(t, d, s),
    );
  return {
    width: m.right - m.left,
    height: m.bottom - m.top,
    x: m.left,
    y: m.top,
  };
}
function G3(e) {
  const { width: t, height: a } = dS(e);
  return { width: t, height: a };
}
function Y3(e, t, a) {
  const i = Mr(t),
    s = Lr(t),
    u = a === "fixed",
    c = zi(e, !0, u, t);
  let d = { scrollLeft: 0, scrollTop: 0 };
  const m = Dr(0);
  function h() {
    m.x = af(s);
  }
  if (i || (!i && !u))
    if (((qo(t) !== "body" || Ol(s)) && (d = rf(t)), i)) {
      const _ = zi(t, !0, u, t);
      ((m.x = _.x + t.clientLeft), (m.y = _.y + t.clientTop));
    } else s && h();
  u && !i && s && h();
  const y = s && !i && !u ? mS(s, d) : Dr(0),
    g = c.left + d.scrollLeft - m.x - y.x,
    v = c.top + d.scrollTop - m.y - y.y;
  return { x: g, y: v, width: c.width, height: c.height };
}
function Hh(e) {
  return hr(e).position === "static";
}
function t1(e, t) {
  if (!Mr(e) || hr(e).position === "fixed") return null;
  if (t) return t(e);
  let a = e.offsetParent;
  return (Lr(e) === a && (a = a.ownerDocument.body), a);
}
function yS(e, t) {
  const a = Bn(e);
  if (nf(e)) return a;
  if (!Mr(e)) {
    let s = Ka(e);
    for (; s && !Lo(s); ) {
      if (dr(s) && !Hh(s)) return s;
      s = Ka(s);
    }
    return a;
  }
  let i = t1(e, t);
  for (; i && D3(i) && Hh(i); ) i = t1(i, t);
  return i && Lo(i) && Hh(i) && !vp(i) ? a : i || j3(e) || a;
}
const K3 = async function (e) {
  const t = this.getOffsetParent || yS,
    a = this.getDimensions,
    i = await a(e.floating);
  return {
    reference: Y3(e.reference, await t(e.floating), e.strategy),
    floating: { x: 0, y: 0, width: i.width, height: i.height },
  };
};
function Q3(e) {
  return hr(e).direction === "rtl";
}
const X3 = {
  convertOffsetParentRelativeRectToViewportRelativeRect: F3,
  getDocumentElement: Lr,
  getClippingRect: q3,
  getOffsetParent: yS,
  getElementRects: K3,
  getClientRects: B3,
  getDimensions: G3,
  getScale: zo,
  isElement: dr,
  isRTL: Q3,
};
function gS(e, t) {
  return (
    e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
  );
}
function J3(e, t) {
  let a = null,
    i;
  const s = Lr(e);
  function u() {
    var d;
    (clearTimeout(i), (d = a) == null || d.disconnect(), (a = null));
  }
  function c(d, m) {
    (d === void 0 && (d = !1), m === void 0 && (m = 1), u());
    const h = e.getBoundingClientRect(),
      { left: y, top: g, width: v, height: _ } = h;
    if ((d || t(), !v || !_)) return;
    const S = Ju(g),
      E = Ju(s.clientWidth - (y + v)),
      x = Ju(s.clientHeight - (g + _)),
      T = Ju(y),
      D = {
        rootMargin: -S + "px " + -E + "px " + -x + "px " + -T + "px",
        threshold: Pn(0, Ya(1, m)) || 1,
      };
    let B = !0;
    function L(C) {
      const Y = C[0].intersectionRatio;
      if (Y !== m) {
        if (!B) return c();
        Y
          ? c(!1, Y)
          : (i = setTimeout(() => {
              c(!1, 1e-7);
            }, 1e3));
      }
      (Y === 1 && !gS(h, e.getBoundingClientRect()) && c(), (B = !1));
    }
    try {
      a = new IntersectionObserver(L, { ...D, root: s.ownerDocument });
    } catch {
      a = new IntersectionObserver(L, D);
    }
    a.observe(e);
  }
  return (c(!0), u);
}
function W3(e, t, a, i) {
  i === void 0 && (i = {});
  const {
      ancestorScroll: s = !0,
      ancestorResize: u = !0,
      elementResize: c = typeof ResizeObserver == "function",
      layoutShift: d = typeof IntersectionObserver == "function",
      animationFrame: m = !1,
    } = i,
    h = wp(e),
    y = s || u ? [...(h ? hl(h) : []), ...hl(t)] : [];
  y.forEach((T) => {
    (s && T.addEventListener("scroll", a, { passive: !0 }),
      u && T.addEventListener("resize", a));
  });
  const g = h && d ? J3(h, a) : null;
  let v = -1,
    _ = null;
  c &&
    ((_ = new ResizeObserver((T) => {
      let [F] = T;
      (F &&
        F.target === h &&
        _ &&
        (_.unobserve(t),
        cancelAnimationFrame(v),
        (v = requestAnimationFrame(() => {
          var D;
          (D = _) == null || D.observe(t);
        }))),
        a());
    })),
    h && !m && _.observe(h),
    _.observe(t));
  let S,
    E = m ? zi(e) : null;
  m && x();
  function x() {
    const T = zi(e);
    (E && !gS(E, T) && a(), (E = T), (S = requestAnimationFrame(x)));
  }
  return (
    a(),
    () => {
      var T;
      (y.forEach((F) => {
        (s && F.removeEventListener("scroll", a),
          u && F.removeEventListener("resize", a));
      }),
        g?.(),
        (T = _) == null || T.disconnect(),
        (_ = null),
        m && cancelAnimationFrame(S));
    }
  );
}
const eM = x3,
  tM = R3,
  nM = S3,
  rM = A3,
  aM = _3,
  n1 = w3,
  iM = O3,
  oM = (e, t, a) => {
    const i = new Map(),
      s = { platform: X3, ...a },
      u = { ...s.platform, _c: i };
    return b3(e, t, { ...s, platform: u });
  };
var sM = typeof document < "u",
  lM = function () {},
  yc = sM ? w.useLayoutEffect : lM;
function Tc(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (typeof e == "function" && e.toString() === t.toString()) return !0;
  let a, i, s;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (((a = e.length), a !== t.length)) return !1;
      for (i = a; i-- !== 0; ) if (!Tc(e[i], t[i])) return !1;
      return !0;
    }
    if (((s = Object.keys(e)), (a = s.length), a !== Object.keys(t).length))
      return !1;
    for (i = a; i-- !== 0; ) if (!{}.hasOwnProperty.call(t, s[i])) return !1;
    for (i = a; i-- !== 0; ) {
      const u = s[i];
      if (!(u === "_owner" && e.$$typeof) && !Tc(e[u], t[u])) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function vS(e) {
  return typeof window > "u"
    ? 1
    : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function r1(e, t) {
  const a = vS(e);
  return Math.round(t * a) / a;
}
function Zh(e) {
  const t = w.useRef(e);
  return (
    yc(() => {
      t.current = e;
    }),
    t
  );
}
function uM(e) {
  e === void 0 && (e = {});
  const {
      placement: t = "bottom",
      strategy: a = "absolute",
      middleware: i = [],
      platform: s,
      elements: { reference: u, floating: c } = {},
      transform: d = !0,
      whileElementsMounted: m,
      open: h,
    } = e,
    [y, g] = w.useState({
      x: 0,
      y: 0,
      strategy: a,
      placement: t,
      middlewareData: {},
      isPositioned: !1,
    }),
    [v, _] = w.useState(i);
  Tc(v, i) || _(i);
  const [S, E] = w.useState(null),
    [x, T] = w.useState(null),
    F = w.useCallback((q) => {
      q !== C.current && ((C.current = q), E(q));
    }, []),
    D = w.useCallback((q) => {
      q !== Y.current && ((Y.current = q), T(q));
    }, []),
    B = u || S,
    L = c || x,
    C = w.useRef(null),
    Y = w.useRef(null),
    Q = w.useRef(y),
    me = m != null,
    pe = Zh(m),
    we = Zh(s),
    be = Zh(h),
    Se = w.useCallback(() => {
      if (!C.current || !Y.current) return;
      const q = { placement: t, strategy: a, middleware: v };
      (we.current && (q.platform = we.current),
        oM(C.current, Y.current, q).then((ie) => {
          const N = { ...ie, isPositioned: be.current !== !1 };
          ce.current &&
            !Tc(Q.current, N) &&
            ((Q.current = N),
            Hc.flushSync(() => {
              g(N);
            }));
        }));
    }, [v, t, a, we, be]);
  yc(() => {
    h === !1 &&
      Q.current.isPositioned &&
      ((Q.current.isPositioned = !1), g((q) => ({ ...q, isPositioned: !1 })));
  }, [h]);
  const ce = w.useRef(!1);
  (yc(
    () => (
      (ce.current = !0),
      () => {
        ce.current = !1;
      }
    ),
    [],
  ),
    yc(() => {
      if ((B && (C.current = B), L && (Y.current = L), B && L)) {
        if (pe.current) return pe.current(B, L, Se);
        Se();
      }
    }, [B, L, Se, pe, me]));
  const ge = w.useMemo(
      () => ({ reference: C, floating: Y, setReference: F, setFloating: D }),
      [F, D],
    ),
    U = w.useMemo(() => ({ reference: B, floating: L }), [B, L]),
    ne = w.useMemo(() => {
      const q = { position: a, left: 0, top: 0 };
      if (!U.floating) return q;
      const ie = r1(U.floating, y.x),
        N = r1(U.floating, y.y);
      return d
        ? {
            ...q,
            transform: "translate(" + ie + "px, " + N + "px)",
            ...(vS(U.floating) >= 1.5 && { willChange: "transform" }),
          }
        : { position: a, left: ie, top: N };
    }, [a, d, U.floating, y.x, y.y]);
  return w.useMemo(
    () => ({ ...y, update: Se, refs: ge, elements: U, floatingStyles: ne }),
    [y, Se, ge, U, ne],
  );
}
const cM = (e) => {
    function t(a) {
      return {}.hasOwnProperty.call(a, "current");
    }
    return {
      name: "arrow",
      options: e,
      fn(a) {
        const { element: i, padding: s } = typeof e == "function" ? e(a) : e;
        return i && t(i)
          ? i.current != null
            ? n1({ element: i.current, padding: s }).fn(a)
            : {}
          : i
            ? n1({ element: i, padding: s }).fn(a)
            : {};
      },
    };
  },
  fM = (e, t) => ({ ...eM(e), options: [e, t] }),
  dM = (e, t) => ({ ...tM(e), options: [e, t] }),
  hM = (e, t) => ({ ...iM(e), options: [e, t] }),
  mM = (e, t) => ({ ...nM(e), options: [e, t] }),
  pM = (e, t) => ({ ...rM(e), options: [e, t] }),
  yM = (e, t) => ({ ...aM(e), options: [e, t] }),
  gM = (e, t) => ({ ...cM(e), options: [e, t] });
var vM = "Arrow",
  bS = w.forwardRef((e, t) => {
    const { children: a, width: i = 10, height: s = 5, ...u } = e;
    return k.jsx(Ut.svg, {
      ...u,
      ref: t,
      width: i,
      height: s,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? a : k.jsx("polygon", { points: "0,0 30,0 15,10" }),
    });
  });
bS.displayName = vM;
var bM = bS;
function wM(e) {
  const [t, a] = w.useState(void 0);
  return (
    Ga(() => {
      if (e) {
        a({ width: e.offsetWidth, height: e.offsetHeight });
        const i = new ResizeObserver((s) => {
          if (!Array.isArray(s) || !s.length) return;
          const u = s[0];
          let c, d;
          if ("borderBoxSize" in u) {
            const m = u.borderBoxSize,
              h = Array.isArray(m) ? m[0] : m;
            ((c = h.inlineSize), (d = h.blockSize));
          } else ((c = e.offsetWidth), (d = e.offsetHeight));
          a({ width: c, height: d });
        });
        return (i.observe(e, { box: "border-box" }), () => i.unobserve(e));
      } else a(void 0);
    }, [e]),
    t
  );
}
var Sp = "Popper",
  [wS, SS] = $o(Sp),
  [SM, _S] = wS(Sp),
  ES = (e) => {
    const { __scopePopper: t, children: a } = e,
      [i, s] = w.useState(null);
    return k.jsx(SM, { scope: t, anchor: i, onAnchorChange: s, children: a });
  };
ES.displayName = Sp;
var xS = "PopperAnchor",
  RS = w.forwardRef((e, t) => {
    const { __scopePopper: a, virtualRef: i, ...s } = e,
      u = _S(xS, a),
      c = w.useRef(null),
      d = an(t, c),
      m = w.useRef(null);
    return (
      w.useEffect(() => {
        const h = m.current;
        ((m.current = i?.current || c.current),
          h !== m.current && u.onAnchorChange(m.current));
      }),
      i ? null : k.jsx(Ut.div, { ...s, ref: d })
    );
  });
RS.displayName = xS;
var _p = "PopperContent",
  [_M, EM] = wS(_p),
  OS = w.forwardRef((e, t) => {
    const {
        __scopePopper: a,
        side: i = "bottom",
        sideOffset: s = 0,
        align: u = "center",
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
      x = _S(_p, a),
      [T, F] = w.useState(null),
      D = an(t, (Ne) => F(Ne)),
      [B, L] = w.useState(null),
      C = wM(B),
      Y = C?.width ?? 0,
      Q = C?.height ?? 0,
      me = i + (u !== "center" ? "-" + u : ""),
      pe =
        typeof y == "number"
          ? y
          : { top: 0, right: 0, bottom: 0, left: 0, ...y },
      we = Array.isArray(h) ? h : [h],
      be = we.length > 0,
      Se = { padding: pe, boundary: we.filter(RM), altBoundary: be },
      {
        refs: ce,
        floatingStyles: ge,
        placement: U,
        isPositioned: ne,
        middlewareData: q,
      } = uM({
        strategy: "fixed",
        placement: me,
        whileElementsMounted: (...Ne) =>
          W3(...Ne, { animationFrame: _ === "always" }),
        elements: { reference: x.anchor },
        middleware: [
          fM({ mainAxis: s + Q, alignmentAxis: c }),
          m &&
            dM({
              mainAxis: !0,
              crossAxis: !1,
              limiter: g === "partial" ? hM() : void 0,
              ...Se,
            }),
          m && mM({ ...Se }),
          pM({
            ...Se,
            apply: ({
              elements: Ne,
              rects: qe,
              availableWidth: gt,
              availableHeight: at,
            }) => {
              const { width: ut, height: Qt } = qe.reference,
                Vn = Ne.floating.style;
              (Vn.setProperty("--radix-popper-available-width", `${gt}px`),
                Vn.setProperty("--radix-popper-available-height", `${at}px`),
                Vn.setProperty("--radix-popper-anchor-width", `${ut}px`),
                Vn.setProperty("--radix-popper-anchor-height", `${Qt}px`));
            },
          }),
          B && gM({ element: B, padding: d }),
          OM({ arrowWidth: Y, arrowHeight: Q }),
          v && yM({ strategy: "referenceHidden", ...Se }),
        ],
      }),
      [ie, N] = TS(U),
      W = la(S);
    Ga(() => {
      ne && W?.();
    }, [ne, W]);
    const fe = q.arrow?.x,
      le = q.arrow?.y,
      ve = q.arrow?.centerOffset !== 0,
      [ke, Oe] = w.useState();
    return (
      Ga(() => {
        T && Oe(window.getComputedStyle(T).zIndex);
      }, [T]),
      k.jsx("div", {
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
        children: k.jsx(_M, {
          scope: a,
          placedSide: ie,
          onArrowChange: L,
          arrowX: fe,
          arrowY: le,
          shouldHideArrow: ve,
          children: k.jsx(Ut.div, {
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
OS.displayName = _p;
var AS = "PopperArrow",
  xM = { top: "bottom", right: "left", bottom: "top", left: "right" },
  CS = w.forwardRef(function (t, a) {
    const { __scopePopper: i, ...s } = t,
      u = EM(AS, i),
      c = xM[u.placedSide];
    return k.jsx("span", {
      ref: u.onArrowChange,
      style: {
        position: "absolute",
        left: u.arrowX,
        top: u.arrowY,
        [c]: 0,
        transformOrigin: {
          top: "",
          right: "0 0",
          bottom: "center 0",
          left: "100% 0",
        }[u.placedSide],
        transform: {
          top: "translateY(100%)",
          right: "translateY(50%) rotate(90deg) translateX(-50%)",
          bottom: "rotate(180deg)",
          left: "translateY(50%) rotate(-90deg) translateX(50%)",
        }[u.placedSide],
        visibility: u.shouldHideArrow ? "hidden" : void 0,
      },
      children: k.jsx(bM, {
        ...s,
        ref: a,
        style: { ...s.style, display: "block" },
      }),
    });
  });
CS.displayName = AS;
function RM(e) {
  return e !== null;
}
var OM = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    const { placement: a, rects: i, middlewareData: s } = t,
      c = s.arrow?.centerOffset !== 0,
      d = c ? 0 : e.arrowWidth,
      m = c ? 0 : e.arrowHeight,
      [h, y] = TS(a),
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
function TS(e) {
  const [t, a = "center"] = e.split("-");
  return [t, a];
}
var AM = ES,
  CM = RS,
  TM = OS,
  DM = CS,
  Ih = "rovingFocusGroup.onEntryFocus",
  MM = { bubbles: !1, cancelable: !0 },
  Al = "RovingFocusGroup",
  [wm, DS, NM] = oS(Al),
  [zM, MS] = $o(Al, [NM]),
  [kM, jM] = zM(Al),
  NS = w.forwardRef((e, t) =>
    k.jsx(wm.Provider, {
      scope: e.__scopeRovingFocusGroup,
      children: k.jsx(wm.Slot, {
        scope: e.__scopeRovingFocusGroup,
        children: k.jsx(LM, { ...e, ref: t }),
      }),
    }),
  );
NS.displayName = Al;
var LM = w.forwardRef((e, t) => {
    const {
        __scopeRovingFocusGroup: a,
        orientation: i,
        loop: s = !1,
        dir: u,
        currentTabStopId: c,
        defaultCurrentTabStopId: d,
        onCurrentTabStopIdChange: m,
        onEntryFocus: h,
        preventScrollOnEntryFocus: y = !1,
        ...g
      } = e,
      v = w.useRef(null),
      _ = an(t, v),
      S = sS(u),
      [E, x] = ep({ prop: c, defaultProp: d ?? null, onChange: m, caller: Al }),
      [T, F] = w.useState(!1),
      D = la(h),
      B = DS(a),
      L = w.useRef(!1),
      [C, Y] = w.useState(0);
    return (
      w.useEffect(() => {
        const Q = v.current;
        if (Q)
          return (
            Q.addEventListener(Ih, D),
            () => Q.removeEventListener(Ih, D)
          );
      }, [D]),
      k.jsx(kM, {
        scope: a,
        orientation: i,
        dir: S,
        loop: s,
        currentTabStopId: E,
        onItemFocus: w.useCallback((Q) => x(Q), [x]),
        onItemShiftTab: w.useCallback(() => F(!0), []),
        onFocusableItemAdd: w.useCallback(() => Y((Q) => Q + 1), []),
        onFocusableItemRemove: w.useCallback(() => Y((Q) => Q - 1), []),
        children: k.jsx(Ut.div, {
          tabIndex: T || C === 0 ? -1 : 0,
          "data-orientation": i,
          ...g,
          ref: _,
          style: { outline: "none", ...e.style },
          onMouseDown: Ie(e.onMouseDown, () => {
            L.current = !0;
          }),
          onFocus: Ie(e.onFocus, (Q) => {
            const me = !L.current;
            if (Q.target === Q.currentTarget && me && !T) {
              const pe = new CustomEvent(Ih, MM);
              if ((Q.currentTarget.dispatchEvent(pe), !pe.defaultPrevented)) {
                const we = B().filter((U) => U.focusable),
                  be = we.find((U) => U.active),
                  Se = we.find((U) => U.id === E),
                  ge = [be, Se, ...we]
                    .filter(Boolean)
                    .map((U) => U.ref.current);
                jS(ge, y);
              }
            }
            L.current = !1;
          }),
          onBlur: Ie(e.onBlur, () => F(!1)),
        }),
      })
    );
  }),
  zS = "RovingFocusGroupItem",
  kS = w.forwardRef((e, t) => {
    const {
        __scopeRovingFocusGroup: a,
        focusable: i = !0,
        active: s = !1,
        tabStopId: u,
        children: c,
        ...d
      } = e,
      m = Mo(),
      h = u || m,
      y = jM(zS, a),
      g = y.currentTabStopId === h,
      v = DS(a),
      {
        onFocusableItemAdd: _,
        onFocusableItemRemove: S,
        currentTabStopId: E,
      } = y;
    return (
      w.useEffect(() => {
        if (i) return (_(), () => S());
      }, [i, _, S]),
      k.jsx(wm.ItemSlot, {
        scope: a,
        id: h,
        focusable: i,
        active: s,
        children: k.jsx(Ut.span, {
          tabIndex: g ? 0 : -1,
          "data-orientation": y.orientation,
          ...d,
          ref: t,
          onMouseDown: Ie(e.onMouseDown, (x) => {
            i ? y.onItemFocus(h) : x.preventDefault();
          }),
          onFocus: Ie(e.onFocus, () => y.onItemFocus(h)),
          onKeyDown: Ie(e.onKeyDown, (x) => {
            if (x.key === "Tab" && x.shiftKey) {
              y.onItemShiftTab();
              return;
            }
            if (x.target !== x.currentTarget) return;
            const T = FM(x, y.orientation, y.dir);
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
                D = y.loop ? BM(D, B + 1) : D.slice(B + 1);
              }
              setTimeout(() => jS(D));
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
kS.displayName = zS;
var UM = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last",
};
function PM(e, t) {
  return t !== "rtl"
    ? e
    : e === "ArrowLeft"
      ? "ArrowRight"
      : e === "ArrowRight"
        ? "ArrowLeft"
        : e;
}
function FM(e, t, a) {
  const i = PM(e.key, a);
  if (
    !(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(i)) &&
    !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(i))
  )
    return UM[i];
}
function jS(e, t = !1) {
  const a = document.activeElement;
  for (const i of e)
    if (
      i === a ||
      (i.focus({ preventScroll: t }), document.activeElement !== a)
    )
      return;
}
function BM(e, t) {
  return e.map((a, i) => e[(t + i) % e.length]);
}
var VM = NS,
  $M = kS,
  Sm = ["Enter", " "],
  HM = ["ArrowDown", "PageUp", "Home"],
  LS = ["ArrowUp", "PageDown", "End"],
  ZM = [...HM, ...LS],
  IM = { ltr: [...Sm, "ArrowRight"], rtl: [...Sm, "ArrowLeft"] },
  qM = { ltr: ["ArrowLeft"], rtl: ["ArrowRight"] },
  Cl = "Menu",
  [ml, GM, YM] = oS(Cl),
  [Li, US] = $o(Cl, [YM, SS, MS]),
  of = SS(),
  PS = MS(),
  [KM, Ui] = Li(Cl),
  [QM, Tl] = Li(Cl),
  FS = (e) => {
    const {
        __scopeMenu: t,
        open: a = !1,
        children: i,
        dir: s,
        onOpenChange: u,
        modal: c = !0,
      } = e,
      d = of(t),
      [m, h] = w.useState(null),
      y = w.useRef(!1),
      g = la(u),
      v = sS(s);
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
      k.jsx(AM, {
        ...d,
        children: k.jsx(KM, {
          scope: t,
          open: a,
          onOpenChange: g,
          content: m,
          onContentChange: h,
          children: k.jsx(QM, {
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
FS.displayName = Cl;
var XM = "MenuAnchor",
  Ep = w.forwardRef((e, t) => {
    const { __scopeMenu: a, ...i } = e,
      s = of(a);
    return k.jsx(CM, { ...s, ...i, ref: t });
  });
Ep.displayName = XM;
var xp = "MenuPortal",
  [JM, BS] = Li(xp, { forceMount: void 0 }),
  VS = (e) => {
    const { __scopeMenu: t, forceMount: a, children: i, container: s } = e,
      u = Ui(xp, t);
    return k.jsx(JM, {
      scope: t,
      forceMount: a,
      children: k.jsx(Ja, {
        present: a || u.open,
        children: k.jsx(rp, { asChild: !0, container: s, children: i }),
      }),
    });
  };
VS.displayName = xp;
var rr = "MenuContent",
  [WM, Rp] = Li(rr),
  $S = w.forwardRef((e, t) => {
    const a = BS(rr, e.__scopeMenu),
      { forceMount: i = a.forceMount, ...s } = e,
      u = Ui(rr, e.__scopeMenu),
      c = Tl(rr, e.__scopeMenu);
    return k.jsx(ml.Provider, {
      scope: e.__scopeMenu,
      children: k.jsx(Ja, {
        present: i || u.open,
        children: k.jsx(ml.Slot, {
          scope: e.__scopeMenu,
          children: c.modal
            ? k.jsx(eN, { ...s, ref: t })
            : k.jsx(tN, { ...s, ref: t }),
        }),
      }),
    });
  }),
  eN = w.forwardRef((e, t) => {
    const a = Ui(rr, e.__scopeMenu),
      i = w.useRef(null),
      s = an(t, i);
    return (
      w.useEffect(() => {
        const u = i.current;
        if (u) return w2(u);
      }, []),
      k.jsx(Op, {
        ...e,
        ref: s,
        trapFocus: a.open,
        disableOutsidePointerEvents: a.open,
        disableOutsideScroll: !0,
        onFocusOutside: Ie(e.onFocusOutside, (u) => u.preventDefault(), {
          checkForDefaultPrevented: !1,
        }),
        onDismiss: () => a.onOpenChange(!1),
      })
    );
  }),
  tN = w.forwardRef((e, t) => {
    const a = Ui(rr, e.__scopeMenu);
    return k.jsx(Op, {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => a.onOpenChange(!1),
    });
  }),
  nN = fl("MenuContent.ScrollLock"),
  Op = w.forwardRef((e, t) => {
    const {
        __scopeMenu: a,
        loop: i = !1,
        trapFocus: s,
        onOpenAutoFocus: u,
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
      x = Ui(rr, a),
      T = Tl(rr, a),
      F = of(a),
      D = PS(a),
      B = GM(a),
      [L, C] = w.useState(null),
      Y = w.useRef(null),
      Q = an(t, Y, x.onContentChange),
      me = w.useRef(0),
      pe = w.useRef(""),
      we = w.useRef(0),
      be = w.useRef(null),
      Se = w.useRef("right"),
      ce = w.useRef(0),
      ge = S ? ap : w.Fragment,
      U = S ? { as: nN, allowPinchZoom: !0 } : void 0,
      ne = (ie) => {
        const N = pe.current + ie,
          W = B().filter((Ne) => !Ne.disabled),
          fe = document.activeElement,
          le = W.find((Ne) => Ne.ref.current === fe)?.textValue,
          ve = W.map((Ne) => Ne.textValue),
          ke = mN(ve, N, le),
          Oe = W.find((Ne) => Ne.textValue === ke)?.ref.current;
        ((function Ne(qe) {
          ((pe.current = qe),
            window.clearTimeout(me.current),
            qe !== "" && (me.current = window.setTimeout(() => Ne(""), 1e3)));
        })(N),
          Oe && setTimeout(() => Oe.focus()));
      };
    (w.useEffect(() => () => window.clearTimeout(me.current), []), f2());
    const q = w.useCallback(
      (ie) => Se.current === be.current?.side && yN(ie, be.current?.area),
      [],
    );
    return k.jsx(WM, {
      scope: a,
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
      children: k.jsx(ge, {
        ...U,
        children: k.jsx(np, {
          asChild: !0,
          trapped: s,
          onMountAutoFocus: Ie(u, (ie) => {
            (ie.preventDefault(), Y.current?.focus({ preventScroll: !0 }));
          }),
          onUnmountAutoFocus: c,
          children: k.jsx(tp, {
            asChild: !0,
            disableOutsidePointerEvents: d,
            onEscapeKeyDown: h,
            onPointerDownOutside: y,
            onFocusOutside: g,
            onInteractOutside: v,
            onDismiss: _,
            children: k.jsx(VM, {
              asChild: !0,
              ...D,
              dir: T.dir,
              orientation: "vertical",
              loop: i,
              currentTabStopId: L,
              onCurrentTabStopIdChange: C,
              onEntryFocus: Ie(m, (ie) => {
                T.isUsingKeyboardRef.current || ie.preventDefault();
              }),
              preventScrollOnEntryFocus: !0,
              children: k.jsx(TM, {
                role: "menu",
                "aria-orientation": "vertical",
                "data-state": a_(x.open),
                "data-radix-menu-content": "",
                dir: T.dir,
                ...F,
                ...E,
                ref: Q,
                style: { outline: "none", ...E.style },
                onKeyDown: Ie(E.onKeyDown, (ie) => {
                  const W =
                      ie.target.closest("[data-radix-menu-content]") ===
                      ie.currentTarget,
                    fe = ie.ctrlKey || ie.altKey || ie.metaKey,
                    le = ie.key.length === 1;
                  W &&
                    (ie.key === "Tab" && ie.preventDefault(),
                    !fe && le && ne(ie.key));
                  const ve = Y.current;
                  if (ie.target !== ve || !ZM.includes(ie.key)) return;
                  ie.preventDefault();
                  const Oe = B()
                    .filter((Ne) => !Ne.disabled)
                    .map((Ne) => Ne.ref.current);
                  (LS.includes(ie.key) && Oe.reverse(), dN(Oe));
                }),
                onBlur: Ie(e.onBlur, (ie) => {
                  ie.currentTarget.contains(ie.target) ||
                    (window.clearTimeout(me.current), (pe.current = ""));
                }),
                onPointerMove: Ie(
                  e.onPointerMove,
                  pl((ie) => {
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
$S.displayName = rr;
var rN = "MenuGroup",
  Ap = w.forwardRef((e, t) => {
    const { __scopeMenu: a, ...i } = e;
    return k.jsx(Ut.div, { role: "group", ...i, ref: t });
  });
Ap.displayName = rN;
var aN = "MenuLabel",
  HS = w.forwardRef((e, t) => {
    const { __scopeMenu: a, ...i } = e;
    return k.jsx(Ut.div, { ...i, ref: t });
  });
HS.displayName = aN;
var Dc = "MenuItem",
  a1 = "menu.itemSelect",
  sf = w.forwardRef((e, t) => {
    const { disabled: a = !1, onSelect: i, ...s } = e,
      u = w.useRef(null),
      c = Tl(Dc, e.__scopeMenu),
      d = Rp(Dc, e.__scopeMenu),
      m = an(t, u),
      h = w.useRef(!1),
      y = () => {
        const g = u.current;
        if (!a && g) {
          const v = new CustomEvent(a1, { bubbles: !0, cancelable: !0 });
          (g.addEventListener(a1, (_) => i?.(_), { once: !0 }),
            s2(g, v),
            v.defaultPrevented ? (h.current = !1) : c.onClose());
        }
      };
    return k.jsx(ZS, {
      ...s,
      ref: m,
      disabled: a,
      onClick: Ie(e.onClick, y),
      onPointerDown: (g) => {
        (e.onPointerDown?.(g), (h.current = !0));
      },
      onPointerUp: Ie(e.onPointerUp, (g) => {
        h.current || g.currentTarget?.click();
      }),
      onKeyDown: Ie(e.onKeyDown, (g) => {
        const v = d.searchRef.current !== "";
        a ||
          (v && g.key === " ") ||
          (Sm.includes(g.key) && (g.currentTarget.click(), g.preventDefault()));
      }),
    });
  });
sf.displayName = Dc;
var ZS = w.forwardRef((e, t) => {
    const { __scopeMenu: a, disabled: i = !1, textValue: s, ...u } = e,
      c = Rp(Dc, a),
      d = PS(a),
      m = w.useRef(null),
      h = an(t, m),
      [y, g] = w.useState(!1),
      [v, _] = w.useState("");
    return (
      w.useEffect(() => {
        const S = m.current;
        S && _((S.textContent ?? "").trim());
      }, [u.children]),
      k.jsx(ml.ItemSlot, {
        scope: a,
        disabled: i,
        textValue: s ?? v,
        children: k.jsx($M, {
          asChild: !0,
          ...d,
          focusable: !i,
          children: k.jsx(Ut.div, {
            role: "menuitem",
            "data-highlighted": y ? "" : void 0,
            "aria-disabled": i || void 0,
            "data-disabled": i ? "" : void 0,
            ...u,
            ref: h,
            onPointerMove: Ie(
              e.onPointerMove,
              pl((S) => {
                i
                  ? c.onItemLeave(S)
                  : (c.onItemEnter(S),
                    S.defaultPrevented ||
                      S.currentTarget.focus({ preventScroll: !0 }));
              }),
            ),
            onPointerLeave: Ie(
              e.onPointerLeave,
              pl((S) => c.onItemLeave(S)),
            ),
            onFocus: Ie(e.onFocus, () => g(!0)),
            onBlur: Ie(e.onBlur, () => g(!1)),
          }),
        }),
      })
    );
  }),
  iN = "MenuCheckboxItem",
  IS = w.forwardRef((e, t) => {
    const { checked: a = !1, onCheckedChange: i, ...s } = e;
    return k.jsx(QS, {
      scope: e.__scopeMenu,
      checked: a,
      children: k.jsx(sf, {
        role: "menuitemcheckbox",
        "aria-checked": Mc(a) ? "mixed" : a,
        ...s,
        ref: t,
        "data-state": Tp(a),
        onSelect: Ie(s.onSelect, () => i?.(Mc(a) ? !0 : !a), {
          checkForDefaultPrevented: !1,
        }),
      }),
    });
  });
IS.displayName = iN;
var qS = "MenuRadioGroup",
  [oN, sN] = Li(qS, { value: void 0, onValueChange: () => {} }),
  GS = w.forwardRef((e, t) => {
    const { value: a, onValueChange: i, ...s } = e,
      u = la(i);
    return k.jsx(oN, {
      scope: e.__scopeMenu,
      value: a,
      onValueChange: u,
      children: k.jsx(Ap, { ...s, ref: t }),
    });
  });
GS.displayName = qS;
var YS = "MenuRadioItem",
  KS = w.forwardRef((e, t) => {
    const { value: a, ...i } = e,
      s = sN(YS, e.__scopeMenu),
      u = a === s.value;
    return k.jsx(QS, {
      scope: e.__scopeMenu,
      checked: u,
      children: k.jsx(sf, {
        role: "menuitemradio",
        "aria-checked": u,
        ...i,
        ref: t,
        "data-state": Tp(u),
        onSelect: Ie(i.onSelect, () => s.onValueChange?.(a), {
          checkForDefaultPrevented: !1,
        }),
      }),
    });
  });
KS.displayName = YS;
var Cp = "MenuItemIndicator",
  [QS, lN] = Li(Cp, { checked: !1 }),
  XS = w.forwardRef((e, t) => {
    const { __scopeMenu: a, forceMount: i, ...s } = e,
      u = lN(Cp, a);
    return k.jsx(Ja, {
      present: i || Mc(u.checked) || u.checked === !0,
      children: k.jsx(Ut.span, { ...s, ref: t, "data-state": Tp(u.checked) }),
    });
  });
XS.displayName = Cp;
var uN = "MenuSeparator",
  JS = w.forwardRef((e, t) => {
    const { __scopeMenu: a, ...i } = e;
    return k.jsx(Ut.div, {
      role: "separator",
      "aria-orientation": "horizontal",
      ...i,
      ref: t,
    });
  });
JS.displayName = uN;
var cN = "MenuArrow",
  WS = w.forwardRef((e, t) => {
    const { __scopeMenu: a, ...i } = e,
      s = of(a);
    return k.jsx(DM, { ...s, ...i, ref: t });
  });
WS.displayName = cN;
var fN = "MenuSub",
  [Ij, e_] = Li(fN),
  el = "MenuSubTrigger",
  t_ = w.forwardRef((e, t) => {
    const a = Ui(el, e.__scopeMenu),
      i = Tl(el, e.__scopeMenu),
      s = e_(el, e.__scopeMenu),
      u = Rp(el, e.__scopeMenu),
      c = w.useRef(null),
      { pointerGraceTimerRef: d, onPointerGraceIntentChange: m } = u,
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
      k.jsx(Ep, {
        asChild: !0,
        ...h,
        children: k.jsx(ZS, {
          id: s.triggerId,
          "aria-haspopup": "menu",
          "aria-expanded": a.open,
          "aria-controls": s.contentId,
          "data-state": a_(a.open),
          ...e,
          ref: Zc(t, s.onTriggerChange),
          onClick: (g) => {
            (e.onClick?.(g),
              !(e.disabled || g.defaultPrevented) &&
                (g.currentTarget.focus(), a.open || a.onOpenChange(!0)));
          },
          onPointerMove: Ie(
            e.onPointerMove,
            pl((g) => {
              (u.onItemEnter(g),
                !g.defaultPrevented &&
                  !e.disabled &&
                  !a.open &&
                  !c.current &&
                  (u.onPointerGraceIntentChange(null),
                  (c.current = window.setTimeout(() => {
                    (a.onOpenChange(!0), y());
                  }, 100))));
            }),
          ),
          onPointerLeave: Ie(
            e.onPointerLeave,
            pl((g) => {
              y();
              const v = a.content?.getBoundingClientRect();
              if (v) {
                const _ = a.content?.dataset.side,
                  S = _ === "right",
                  E = S ? -5 : 5,
                  x = v[S ? "left" : "right"],
                  T = v[S ? "right" : "left"];
                (u.onPointerGraceIntentChange({
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
                    () => u.onPointerGraceIntentChange(null),
                    300,
                  )));
              } else {
                if ((u.onTriggerLeave(g), g.defaultPrevented)) return;
                u.onPointerGraceIntentChange(null);
              }
            }),
          ),
          onKeyDown: Ie(e.onKeyDown, (g) => {
            const v = u.searchRef.current !== "";
            e.disabled ||
              (v && g.key === " ") ||
              (IM[i.dir].includes(g.key) &&
                (a.onOpenChange(!0), a.content?.focus(), g.preventDefault()));
          }),
        }),
      })
    );
  });
t_.displayName = el;
var n_ = "MenuSubContent",
  r_ = w.forwardRef((e, t) => {
    const a = BS(rr, e.__scopeMenu),
      { forceMount: i = a.forceMount, ...s } = e,
      u = Ui(rr, e.__scopeMenu),
      c = Tl(rr, e.__scopeMenu),
      d = e_(n_, e.__scopeMenu),
      m = w.useRef(null),
      h = an(t, m);
    return k.jsx(ml.Provider, {
      scope: e.__scopeMenu,
      children: k.jsx(Ja, {
        present: i || u.open,
        children: k.jsx(ml.Slot, {
          scope: e.__scopeMenu,
          children: k.jsx(Op, {
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
            onFocusOutside: Ie(e.onFocusOutside, (y) => {
              y.target !== d.trigger && u.onOpenChange(!1);
            }),
            onEscapeKeyDown: Ie(e.onEscapeKeyDown, (y) => {
              (c.onClose(), y.preventDefault());
            }),
            onKeyDown: Ie(e.onKeyDown, (y) => {
              const g = y.currentTarget.contains(y.target),
                v = qM[c.dir].includes(y.key);
              g &&
                v &&
                (u.onOpenChange(!1), d.trigger?.focus(), y.preventDefault());
            }),
          }),
        }),
      }),
    });
  });
r_.displayName = n_;
function a_(e) {
  return e ? "open" : "closed";
}
function Mc(e) {
  return e === "indeterminate";
}
function Tp(e) {
  return Mc(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function dN(e) {
  const t = document.activeElement;
  for (const a of e)
    if (a === t || (a.focus(), document.activeElement !== t)) return;
}
function hN(e, t) {
  return e.map((a, i) => e[(t + i) % e.length]);
}
function mN(e, t, a) {
  const s = t.length > 1 && Array.from(t).every((h) => h === t[0]) ? t[0] : t,
    u = a ? e.indexOf(a) : -1;
  let c = hN(e, Math.max(u, 0));
  s.length === 1 && (c = c.filter((h) => h !== a));
  const m = c.find((h) => h.toLowerCase().startsWith(s.toLowerCase()));
  return m !== a ? m : void 0;
}
function pN(e, t) {
  const { x: a, y: i } = e;
  let s = !1;
  for (let u = 0, c = t.length - 1; u < t.length; c = u++) {
    const d = t[u],
      m = t[c],
      h = d.x,
      y = d.y,
      g = m.x,
      v = m.y;
    y > i != v > i && a < ((g - h) * (i - y)) / (v - y) + h && (s = !s);
  }
  return s;
}
function yN(e, t) {
  if (!t) return !1;
  const a = { x: e.clientX, y: e.clientY };
  return pN(a, t);
}
function pl(e) {
  return (t) => (t.pointerType === "mouse" ? e(t) : void 0);
}
var gN = FS,
  vN = Ep,
  bN = VS,
  wN = $S,
  SN = Ap,
  _N = HS,
  EN = sf,
  xN = IS,
  RN = GS,
  ON = KS,
  AN = XS,
  CN = JS,
  TN = WS,
  DN = t_,
  MN = r_,
  lf = "DropdownMenu",
  [NN, qj] = $o(lf, [US]),
  pn = US(),
  [zN, i_] = NN(lf),
  o_ = (e) => {
    const {
        __scopeDropdownMenu: t,
        children: a,
        dir: i,
        open: s,
        defaultOpen: u,
        onOpenChange: c,
        modal: d = !0,
      } = e,
      m = pn(t),
      h = w.useRef(null),
      [y, g] = ep({ prop: s, defaultProp: u ?? !1, onChange: c, caller: lf });
    return k.jsx(zN, {
      scope: t,
      triggerId: Mo(),
      triggerRef: h,
      contentId: Mo(),
      open: y,
      onOpenChange: g,
      onOpenToggle: w.useCallback(() => g((v) => !v), [g]),
      modal: d,
      children: k.jsx(gN, {
        ...m,
        open: y,
        onOpenChange: g,
        dir: i,
        modal: d,
        children: a,
      }),
    });
  };
o_.displayName = lf;
var s_ = "DropdownMenuTrigger",
  l_ = w.forwardRef((e, t) => {
    const { __scopeDropdownMenu: a, disabled: i = !1, ...s } = e,
      u = i_(s_, a),
      c = pn(a);
    return k.jsx(vN, {
      asChild: !0,
      ...c,
      children: k.jsx(Ut.button, {
        type: "button",
        id: u.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": u.open,
        "aria-controls": u.open ? u.contentId : void 0,
        "data-state": u.open ? "open" : "closed",
        "data-disabled": i ? "" : void 0,
        disabled: i,
        ...s,
        ref: Zc(t, u.triggerRef),
        onPointerDown: Ie(e.onPointerDown, (d) => {
          !i &&
            d.button === 0 &&
            d.ctrlKey === !1 &&
            (u.onOpenToggle(), u.open || d.preventDefault());
        }),
        onKeyDown: Ie(e.onKeyDown, (d) => {
          i ||
            (["Enter", " "].includes(d.key) && u.onOpenToggle(),
            d.key === "ArrowDown" && u.onOpenChange(!0),
            ["Enter", " ", "ArrowDown"].includes(d.key) && d.preventDefault());
        }),
      }),
    });
  });
l_.displayName = s_;
var kN = "DropdownMenuPortal",
  u_ = (e) => {
    const { __scopeDropdownMenu: t, ...a } = e,
      i = pn(t);
    return k.jsx(bN, { ...i, ...a });
  };
u_.displayName = kN;
var c_ = "DropdownMenuContent",
  f_ = w.forwardRef((e, t) => {
    const { __scopeDropdownMenu: a, ...i } = e,
      s = i_(c_, a),
      u = pn(a),
      c = w.useRef(!1);
    return k.jsx(wN, {
      id: s.contentId,
      "aria-labelledby": s.triggerId,
      ...u,
      ...i,
      ref: t,
      onCloseAutoFocus: Ie(e.onCloseAutoFocus, (d) => {
        (c.current || s.triggerRef.current?.focus(),
          (c.current = !1),
          d.preventDefault());
      }),
      onInteractOutside: Ie(e.onInteractOutside, (d) => {
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
f_.displayName = c_;
var jN = "DropdownMenuGroup",
  LN = w.forwardRef((e, t) => {
    const { __scopeDropdownMenu: a, ...i } = e,
      s = pn(a);
    return k.jsx(SN, { ...s, ...i, ref: t });
  });
LN.displayName = jN;
var UN = "DropdownMenuLabel",
  PN = w.forwardRef((e, t) => {
    const { __scopeDropdownMenu: a, ...i } = e,
      s = pn(a);
    return k.jsx(_N, { ...s, ...i, ref: t });
  });
PN.displayName = UN;
var FN = "DropdownMenuItem",
  BN = w.forwardRef((e, t) => {
    const { __scopeDropdownMenu: a, ...i } = e,
      s = pn(a);
    return k.jsx(EN, { ...s, ...i, ref: t });
  });
BN.displayName = FN;
var VN = "DropdownMenuCheckboxItem",
  $N = w.forwardRef((e, t) => {
    const { __scopeDropdownMenu: a, ...i } = e,
      s = pn(a);
    return k.jsx(xN, { ...s, ...i, ref: t });
  });
$N.displayName = VN;
var HN = "DropdownMenuRadioGroup",
  ZN = w.forwardRef((e, t) => {
    const { __scopeDropdownMenu: a, ...i } = e,
      s = pn(a);
    return k.jsx(RN, { ...s, ...i, ref: t });
  });
ZN.displayName = HN;
var IN = "DropdownMenuRadioItem",
  qN = w.forwardRef((e, t) => {
    const { __scopeDropdownMenu: a, ...i } = e,
      s = pn(a);
    return k.jsx(ON, { ...s, ...i, ref: t });
  });
qN.displayName = IN;
var GN = "DropdownMenuItemIndicator",
  YN = w.forwardRef((e, t) => {
    const { __scopeDropdownMenu: a, ...i } = e,
      s = pn(a);
    return k.jsx(AN, { ...s, ...i, ref: t });
  });
YN.displayName = GN;
var KN = "DropdownMenuSeparator",
  QN = w.forwardRef((e, t) => {
    const { __scopeDropdownMenu: a, ...i } = e,
      s = pn(a);
    return k.jsx(CN, { ...s, ...i, ref: t });
  });
QN.displayName = KN;
var XN = "DropdownMenuArrow",
  JN = w.forwardRef((e, t) => {
    const { __scopeDropdownMenu: a, ...i } = e,
      s = pn(a);
    return k.jsx(TN, { ...s, ...i, ref: t });
  });
JN.displayName = XN;
var WN = "DropdownMenuSubTrigger",
  ez = w.forwardRef((e, t) => {
    const { __scopeDropdownMenu: a, ...i } = e,
      s = pn(a);
    return k.jsx(DN, { ...s, ...i, ref: t });
  });
ez.displayName = WN;
var tz = "DropdownMenuSubContent",
  nz = w.forwardRef((e, t) => {
    const { __scopeDropdownMenu: a, ...i } = e,
      s = pn(a);
    return k.jsx(MN, {
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
nz.displayName = tz;
var rz = o_,
  az = l_,
  iz = u_,
  oz = f_;
function sz({ ...e }) {
  return k.jsx(rz, { "data-slot": "dropdown-menu", ...e });
}
function lz({ ...e }) {
  return k.jsx(az, { "data-slot": "dropdown-menu-trigger", ...e });
}
function uz({ className: e, sideOffset: t = 4, ...a }) {
  return k.jsx(iz, {
    children: k.jsx(oz, {
      "data-slot": "dropdown-menu-content",
      sideOffset: t,
      className: up(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
        e,
      ),
      ...a,
    }),
  });
}
const cz = Intl.NumberFormat("ko-kr", { compactDisplay: "long" }).format,
  Gj = (e) => e.toLocaleString("ko-KR");
function Wu({ cup: e, money: t }) {
  const a = kr(),
    i = async () => {
      if (
        !(
          localStorage.getItem("access_token") ||
          document.cookie
            .split(";")
            .find((u) => u.trim().startsWith("access_token="))
            ?.split("=")[1]
        )
      ) {
        alert("로그인이 필요합니다. 먼저 로그인해주세요.");
        return;
      }
      try {
        const u = await r3({ point: e.toString(), price: t.toString() });
        u &&
          (sessionStorage.setItem("returnTo", a.pathname + a.search + a.hash),
          sessionStorage.setItem("returnToScroll", String(window.scrollY)),
          localStorage.setItem("tid", u.tid),
          (window.location.href = u.next_redirect_pc_url));
      } catch (u) {
        (console.error("결제 준비 실패:", u),
          u.response?.status === 401
            ? alert("로그인이 필요합니다. 먼저 로그인해주세요.")
            : alert("결제 준비에 실패했습니다. 다시 시도해주세요."));
      }
    };
  return k.jsxs("div", {
    className: "w-full flex items-center justify-between",
    children: [
      k.jsxs("div", {
        className: "flex items-center gap-2",
        children: [
          k.jsx("img", { src: Gw, className: "w-10" }),
          k.jsxs("div", {
            className: "text-xl font-bold text-scale-500",
            children: [e, " 잔"],
          }),
        ],
      }),
      k.jsxs(ko, {
        variant: "primary",
        isRounded: !0,
        className: "text-lg font-regular px-10 py-3",
        onClick: i,
        children: ["₩ ", cz(t)],
      }),
    ],
  });
}
function fz({ open: e, onOpenChange: t, children: a }) {
  return k.jsxs(Gc, {
    open: e,
    onOpenChange: t,
    children: [
      k.jsx(Kc, { asChild: !0, children: a }),
      k.jsx(Yc, {
        className: "w-133",
        children: k.jsxs("div", {
          className: "flex flex-col items-center px-8 py-15 gap-12.5",
          children: [
            k.jsx("div", {
              className: "text-2xl font-bold text-scale-600",
              children: "포인트 충전하기",
            }),
            k.jsxs("div", {
              className: "flex flex-col gap-9 w-full",
              children: [
                k.jsx(Wu, { cup: 10, money: 1e4 }),
                k.jsx(Wu, { cup: 30, money: 3e4 }),
                k.jsx(Wu, { cup: 50, money: 5e4 }),
                k.jsx(Wu, { cup: 100, money: 9e4 }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
var Go = (e) => e.type === "checkbox",
  uf = (e) => e.type === "file",
  Ci = (e) => e instanceof Date,
  At = (e) => e == null;
const Dp = (e) => typeof e == "object";
var wt = (e) => !At(e) && !Array.isArray(e) && Dp(e) && !Ci(e),
  _m = (e) =>
    wt(e) && e.target
      ? Go(e.target)
        ? e.target.checked
        : uf(e.target)
          ? e.target.files
          : e.target.value
      : e;
const dz = /[.[\]'"]/;
var Yo = (e) => e.split(dz).filter(Boolean);
function hz(e, t) {
  const a = Yo(t);
  let i = e._formValues,
    s = e._defaultValues;
  for (let u = 0; u < a.length - 1; u++) {
    const c = a[u];
    if (
      ((i = i == null ? i : i[c]),
      (s = s == null ? s : s[c]),
      i === null || s === null)
    )
      return null;
  }
}
var d_ = (e, t) =>
    t
      .split(".")
      .some((a, i, s) => !isNaN(Number(a)) && e.has(s.slice(0, i).join("."))),
  cf =
    typeof window < "u" &&
    typeof window.HTMLElement < "u" &&
    typeof document < "u";
function rt(e) {
  if (e === null || typeof e != "object") return e;
  if (e instanceof Date) return new Date(e);
  const t = typeof Blob < "u" && e instanceof Blob,
    a = typeof FileList < "u" && e instanceof FileList;
  if (cf && (t || a)) return e;
  const i = Array.isArray(e),
    s = Object.getPrototypeOf(e);
  if (!i && s && s.constructor !== Object) return e;
  const u = i ? new Array(e.length) : Object.create(s);
  for (const c in e)
    Object.prototype.hasOwnProperty.call(e, c) && (u[c] = rt(e[c]));
  return u;
}
const Ha = {
    BLUR: "blur",
    FOCUS_OUT: "focusout",
    CHANGE: "change",
    SUBMIT: "submit",
    TRIGGER: "trigger",
    VALID: "valid",
  },
  nr = {
    onBlur: "onBlur",
    onChange: "onChange",
    onSubmit: "onSubmit",
    onTouched: "onTouched",
    all: "all",
  },
  Kt = {
    max: "max",
    min: "min",
    maxLength: "maxLength",
    minLength: "minLength",
    pattern: "pattern",
    required: "required",
    validate: "validate",
  },
  mz = [
    Kt.required,
    Kt.min,
    Kt.max,
    Kt.minLength,
    Kt.maxLength,
    Kt.pattern,
    Kt.validate,
  ],
  tl = "form",
  h_ = "root",
  Mp = ["__proto__", "constructor", "prototype"],
  pz = /^\w*$/;
var Dl = (e) => pz.test(e),
  Ye = (e) => e === void 0,
  he = (e, t, a) => {
    if (!t || !wt(e)) return a;
    const i = Dl(t) ? [t] : Yo(t);
    if (i.some((u) => Mp.includes(u))) return a;
    const s = i.reduce((u, c) => (At(u) ? void 0 : u[c]), e);
    return Ye(s) || s === e ? (Ye(e[t]) ? a : e[t]) : s;
  },
  xn = (e) => typeof e == "boolean",
  tn = (e) => typeof e == "function",
  et = (e, t, a) => {
    let i = -1;
    const s = Dl(t) ? [t] : Yo(t),
      u = s.length,
      c = u - 1;
    for (; ++i < u; ) {
      const d = s[i];
      let m = a;
      if (i !== c) {
        const h = e[d];
        m = wt(h) || Array.isArray(h) ? h : isNaN(+s[i + 1]) ? {} : [];
      }
      if (Mp.includes(d)) return;
      ((e[d] = m), (e = e[d]));
    }
  };
const Np = Re.createContext(null);
Np.displayName = "HookFormControlContext";
const zp = () => Re.useContext(Np);
var m_ = (e, t, a, i = !0) => {
  const s = {};
  for (const u in e)
    Object.defineProperty(s, u, {
      get: () => {
        const c = u;
        return (
          t._proxyFormState[c] !== nr.all &&
            (t._proxyFormState[c] = !i || nr.all),
          a && (a[c] = !0),
          e[c]
        );
      },
    });
  return s;
};
const kp = cf ? Re.useLayoutEffect : Re.useEffect;
var yz = (e) => {
    const t = e.constructor && e.constructor.prototype;
    return wt(t) && t.hasOwnProperty("isPrototypeOf");
  },
  Em = (e) => At(e) || !Dp(e);
const i1 = (e, t) =>
  t.length === 0 &&
  !Array.isArray(e) &&
  Object.getPrototypeOf(e) !== null &&
  !yz(e);
function en(e, t, a = !1, i = new WeakMap()) {
  if (e === t) return !0;
  if (Em(e) || Em(t)) return Object.is(e, t);
  if (Ci(e) && Ci(t)) return Object.is(e.getTime(), t.getTime());
  if (Array.isArray(e) && Array.isArray(t) && e.length !== t.length) return !1;
  const s = Object.keys(e),
    u = Object.keys(t);
  if (s.length !== u.length) return !1;
  if (i1(e, s) || i1(t, u)) return Object.is(e, t);
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
    if (!a || d !== "ref") {
      const h = t[d];
      if (
        (Ci(m) && Ci(h)) ||
        ((wt(m) || Array.isArray(m)) && (wt(h) || Array.isArray(h)))
          ? !en(m, h, a, i)
          : !Object.is(m, h)
      )
        return !1;
    }
  }
  return !0;
}
function jp(e) {
  const t = Re.useRef(!1),
    a = Re.useRef(!1),
    i = Re.useRef(void 0),
    s = Re.useRef(0);
  (s.current++, !a.current && e && ((a.current = !0), (i.current = rt(e()))));
  const u = Re.useCallback((d, m, h) => {
      if (d && (t.current || (a.current && s.current > 1))) {
        const y = m();
        en(i.current, y) || h(y);
      }
      t.current = !0;
    }, []),
    c = Re.useCallback((d, m) => {
      d && (i.current = rt(m()));
    }, []);
  return { resyncIfNeeded: u, snapshot: c };
}
function gz(e) {
  const t = zp(),
    { control: a = t, disabled: i, name: s, exact: u } = e || {},
    c = () => ({ ...a._formState, defaultValues: a._defaultValues }),
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
    { resyncIfNeeded: y, snapshot: g } = jp(c);
  return (
    kp(() => {
      y(!i, c, m);
      const v = a._subscribe({
        name: s,
        formState: h.current,
        exact: u,
        callback: (_) => {
          !i && m({ ...a._formState, ..._, defaultValues: a._defaultValues });
        },
      });
      return () => {
        (v(), g(!i, c));
      };
    }, [a, s, i, u, y, g]),
    Re.useEffect(() => {
      h.current.isValid && a._setValid(!0);
    }, [a]),
    Re.useMemo(() => m_(d, a, h.current, !1), [d, a])
  );
}
var nn = (e) => typeof e == "string",
  xm = (e, t, a, i, s) =>
    nn(e)
      ? (i && t.watch.add(e), he(a, e, s))
      : Array.isArray(e)
        ? e.map((u) => (i && t.watch.add(u), he(a, u, he(s, u))))
        : (i && (t.watchAll = !0), a);
function vz(e) {
  const t = zp(),
    {
      control: a = t,
      name: i,
      defaultValue: s,
      disabled: u,
      exact: c,
      compute: d,
    } = e || {},
    m = Re.useRef(s),
    h = Re.useRef(d),
    y = Re.useRef(a),
    g = Re.useRef(i);
  h.current = d;
  const v = () => {
      const pe = a._getWatch(i, m.current);
      return h.current ? h.current(pe) : pe;
    },
    [_, S] = Re.useState(v),
    E = Re.useRef(_),
    x = Re.useCallback(
      (pe) => {
        const we = xm(i, a._names, pe || a._formValues, !1, m.current);
        return h.current ? h.current(we) : we;
      },
      [a._formValues, a._names, i],
    ),
    T = Re.useCallback(
      (pe) => {
        if (!u) {
          const we = xm(i, a._names, pe || a._formValues, !1, m.current);
          if (h.current) {
            const be = h.current(we);
            en(be, E.current) || (S(be), (E.current = be));
          } else S(we);
        }
      },
      [a._formValues, a._names, u, i],
    ),
    { resyncIfNeeded: F, snapshot: D } = jp(v),
    B = Re.useRef(T);
  B.current = T;
  const L = Re.useRef(x);
  ((L.current = x),
    kp(() => {
      y.current !== a || !en(g.current, i)
        ? ((y.current = a), (g.current = i), B.current())
        : F(
            !u,
            () => L.current(),
            (we) => {
              const be = rt(we);
              (S(be), (E.current = be));
            },
          );
      const pe = a._subscribe({
        name: i,
        formState: { values: !0 },
        exact: c,
        callback: (we) => {
          B.current(we.values);
        },
      });
      return () => {
        (pe(), D(!u, () => L.current()));
      };
    }, [a, c, i, u, F, D]),
    Re.useEffect(() => a._removeUnmounted()));
  const C = y.current !== a,
    Y = g.current,
    Q = Re.useMemo(() => !C && !en(Y, i), [C, i, Y]);
  return ((C || Q) && (m.current = s), !u && (C || Q) ? x() : _);
}
function bz(e) {
  const t = zp(),
    {
      name: a,
      disabled: i,
      control: s = t,
      shouldUnregister: u,
      defaultValue: c,
      exact: d = !0,
    } = e,
    m = d_(s._names.array, a),
    h = Re.useMemo(() => {
      const B = he(s._formValues, a, he(s._defaultValues, a, c));
      return Ye(B) ? hz(s, a) : B;
    }, [s, a, c]),
    y = vz({ control: s, name: a, defaultValue: h, exact: d }),
    g = gz({ control: s, name: a, exact: d }),
    v = Re.useRef(e),
    _ = Re.useRef(null),
    S = Re.useRef(
      s.register(a, {
        ...e.rules,
        value: y,
        ...(xn(e.disabled) ? { disabled: e.disabled } : {}),
      }),
    );
  v.current = e;
  const E = Re.useMemo(
      () =>
        Object.defineProperties(
          {},
          {
            invalid: { enumerable: !0, get: () => !!he(g.errors, a) },
            isDirty: { enumerable: !0, get: () => !!he(g.dirtyFields, a) },
            isTouched: { enumerable: !0, get: () => !!he(g.touchedFields, a) },
            isValidating: {
              enumerable: !0,
              get: () => !!he(g.validatingFields, a),
            },
            error: { enumerable: !0, get: () => he(g.errors, a) },
          },
        ),
      [g, a],
    ),
    x = Re.useCallback(
      (B) => {
        const L = _m(B);
        return (
          he(s._fields, a) ||
            (S.current = s.register(a, { ...v.current.rules, value: L })),
          S.current.onChange({
            target: { value: _m(B), name: a },
            type: Ha.CHANGE,
          })
        );
      },
      [a, s],
    ),
    T = Re.useCallback(() => {
      const B = he(s._formValues, a);
      return (
        he(s._fields, a) ||
          (S.current = s.register(a, { ...v.current.rules, value: B })),
        S.current.onBlur({ target: { value: B, name: a }, type: Ha.BLUR })
      );
    }, [a, s]),
    F = Re.useCallback(
      (B) => {
        B &&
          (_.current = {
            focus: () => tn(B.focus) && B.focus(),
            select: () => tn(B.select) && B.select(),
            setCustomValidity: (C) =>
              tn(B.setCustomValidity) && B.setCustomValidity(C),
            reportValidity: () => tn(B.reportValidity) && B.reportValidity(),
          });
        const L = he(s._fields, a);
        L && L._f && B && ((L._f.ref = _.current), (L._f._c = !0));
      },
      [s._fields, a],
    ),
    D = Re.useMemo(
      () => ({
        name: a,
        value: y,
        ...(xn(i) || g.disabled ? { disabled: g.disabled || i } : {}),
        onChange: x,
        onBlur: T,
        ref: F,
      }),
      [a, i, g.disabled, x, T, F, y],
    );
  return (
    Re.useEffect(() => {
      const B = s._options.shouldUnregister || u;
      S.current = s.register(a, {
        ...v.current.rules,
        ...(xn(v.current.disabled) ? { disabled: v.current.disabled } : {}),
      });
      const L = (C, Y) => {
        const Q = he(s._fields, C);
        Q && Q._f && ((Q._f.mount = Y), (Q._f._c = Y));
      };
      if ((L(a, !0), B)) {
        const C = rt(
          he(
            u ? s._defaultValues : s._options.values || s._defaultValues,
            a,
            he(s._options.defaultValues, a, v.current.defaultValue),
          ),
        );
        (et(s._defaultValues, a, C),
          Ye(he(s._formValues, a)) && et(s._formValues, a, C));
      }
      if (
        (!m &&
          s.register(a, {
            ...v.current.rules,
            ...(xn(v.current.disabled) ? { disabled: v.current.disabled } : {}),
          }),
        _.current)
      ) {
        const C = he(s._fields, a);
        C && C._f && (C._f.ref = _.current);
      }
      return () => {
        (m ? B && !s._state.action : B) ? s.unregister(a) : L(a, !1);
      };
    }, [a, s, m, u]),
    Re.useEffect(() => {
      s._setDisabledField({ disabled: i, name: a });
    }, [i, a, s]),
    Re.useMemo(() => ({ field: D, formState: g, fieldState: E }), [D, g, E])
  );
}
const wz = (e) => e.render(bz(e));
var ec = (e) => ({
    isOnSubmit: !e || e === nr.onSubmit,
    isOnBlur: e === nr.onBlur,
    isOnChange: e === nr.onChange,
    isOnAll: e === nr.all,
    isOnTouch: e === nr.onTouched,
  }),
  qh = (e, t, a) => {
    if (a) return !1;
    if (t.watchAll || t.watch.has(e)) return !0;
    for (const i of t.watch)
      if (e.startsWith(i) && e.charAt(i.length) === ".") return !0;
    return !1;
  };
const al = (e, t, a) => {
  for (const i of a || Object.keys(e)) {
    if (i === "_f") continue;
    const s = a ? he(e, i) : e[i];
    if (s) {
      const { _f: u } = s;
      if (u) {
        if (u.refs && u.refs[0] && t(u.refs[0], u.name)) return !0;
        if (u.ref && t(u.ref, u.name)) return !0;
        if (al(s, t)) return !0;
      } else if ((wt(s) || Array.isArray(s)) && al(s, t)) return !0;
    }
  }
};
var o1 = (e, t, a) => {
    const i = he(e, a),
      s = Array.isArray(i) ? i : [];
    return (et(s, h_, t[a]), et(e, a, s), e);
  },
  Mt = (e) => wt(e) && !Object.keys(e).length,
  Nc = (e) => {
    if (!cf) return !1;
    const t = e ? e.ownerDocument : 0;
    return (
      e instanceof
      (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement)
    );
  },
  ff = (e) => e.type === "radio",
  zc = (e) => e instanceof RegExp,
  Lp = (e, t, a, i, s) =>
    t
      ? {
          ...a[e],
          types: { ...(a[e] && a[e].types ? a[e].types : {}), [i]: s || !0 },
        }
      : {};
const s1 = { value: !1, isValid: !1 },
  l1 = { value: !0, isValid: !0 };
var p_ = (e) => {
  if (!Array.isArray(e)) return s1;
  if (e.length > 1) {
    const a = e
      .filter((i) => i && i.checked && !i.disabled)
      .map((i) => i.value);
    return { value: a, isValid: !!a.length };
  }
  const t = e[0];
  return !t || !t.checked || t.disabled
    ? s1
    : !t.attributes ||
        !("value" in t.attributes) ||
        Ye(t.value) ||
        t.value === ""
      ? l1
      : { value: t.value, isValid: !0 };
};
const u1 = { isValid: !1, value: null };
var y_ = (e) =>
  Array.isArray(e)
    ? e.reduce(
        (t, a) =>
          a && a.checked && !a.disabled ? { isValid: !0, value: a.value } : t,
        u1,
      )
    : u1;
function c1(e, t, a = "validate") {
  if (nn(e) || (Array.isArray(e) && e.length && e.every(nn)) || (xn(e) && !e))
    return { type: a, message: nn(e) ? e : "", ref: t };
}
var Ao = (e) => (wt(e) && !zc(e) ? e : { value: e, message: "" }),
  f1 = async (e, t, a, i, s, u) => {
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
        _c: F,
      } = e._f,
      D = he(a, E);
    if (!T || t.has(E)) return {};
    const B = d ? d[0] : c,
      L = (ce) => {
        if (s && B.reportValidity) {
          const ge = xn(ce) ? "" : ce || "";
          (d
            ? d.forEach(
                (U) => tn(U.setCustomValidity) && U.setCustomValidity(ge),
              )
            : B.setCustomValidity(ge),
            B.reportValidity());
        }
      },
      C = {},
      Y = !F && ff(c),
      Q = !F && Go(c),
      me = Y || Q,
      pe =
        ((x || uf(c)) && Ye(c.value) && Ye(D)) ||
        (Nc(c) && c.value === "" && !F) ||
        D === "" ||
        (Array.isArray(D) && !D.length),
      we = Lp.bind(null, E, i, C),
      be = (ce, ge, U, ne = Kt.maxLength, q = Kt.minLength) => {
        const ie = ce ? ge : U;
        C[E] = {
          type: ce ? ne : q,
          message: ie,
          ref: c,
          ...we(ce ? ne : q, ie),
        };
      };
    if (
      u
        ? !Array.isArray(D) || !D.length
        : m &&
          ((!me && (pe || At(D))) ||
            (xn(D) && !D) ||
            (Q && !p_(d).isValid) ||
            (Y && !y_(d).isValid))
    ) {
      const { value: ce, message: ge } = nn(m)
        ? { value: !!m, message: m }
        : Ao(m);
      if (
        ce &&
        ((C[E] = {
          type: Kt.required,
          message: ge,
          ref: B,
          ...we(Kt.required, ge),
        }),
        !i)
      )
        return (L(ge), C);
    }
    if (!pe && (!At(g) || !At(v))) {
      let ce, ge;
      const U = Ao(v),
        ne = Ao(g);
      if (!At(D) && !Ci(D) && !isNaN(D)) {
        const q = (!F && c.valueAsNumber) || (D && +D);
        (At(U.value) || (ce = q > U.value),
          At(ne.value) || (ge = q < ne.value));
      } else {
        const q = (!F && c.valueAsDate) || new Date(D),
          ie = (fe) => new Date(new Date().toDateString() + " " + fe),
          N = c.type == "time",
          W = c.type == "week";
        (nn(U.value) &&
          D &&
          (ce = N
            ? ie(D) > ie(U.value)
            : W
              ? D > U.value
              : q > new Date(U.value)),
          nn(ne.value) &&
            D &&
            (ge = N
              ? ie(D) < ie(ne.value)
              : W
                ? D < ne.value
                : q < new Date(ne.value)));
      }
      if ((ce || ge) && (be(!!ce, U.message, ne.message, Kt.max, Kt.min), !i))
        return (L(C[E].message), C);
    }
    if ((!At(h) || !At(y)) && !pe && (nn(D) || (u && Array.isArray(D)))) {
      const ce = Ao(h),
        ge = Ao(y),
        U = !At(ce.value) && D.length > +ce.value,
        ne = !At(ge.value) && D.length < +ge.value;
      if ((U || ne) && (be(U, ce.message, ge.message), !i))
        return (L(C[E].message), C);
    }
    if (_ && !pe && nn(D)) {
      const { value: ce, message: ge } = Ao(_);
      if (
        zc(ce) &&
        !D.match(ce) &&
        ((C[E] = {
          type: Kt.pattern,
          message: ge,
          ref: c,
          ...we(Kt.pattern, ge),
        }),
        !i)
      )
        return (L(ge), C);
    }
    if (S) {
      if (tn(S)) {
        const ce = await S(D, a),
          ge = c1(ce, B);
        if (ge && ((C[E] = { ...ge, ...we(Kt.validate, ge.message) }), !i))
          return (L(ge.message), C);
      } else if (wt(S)) {
        let ce = {};
        for (const ge in S) {
          if (!Mt(ce) && !i) break;
          const U = c1(await S[ge](D, a), B, ge);
          U &&
            ((ce = { ...U, ...we(ge, U.message) }),
            i || L(U.message),
            i && (C[E] = ce));
        }
        if (!Mt(ce) && ((C[E] = { ref: B, ...ce }), !i)) return C;
      }
    }
    const Se = C[E];
    return (L(Se ? Se.message : !0), C);
  },
  Gh = (e) => (Array.isArray(e) ? e : [e]),
  g_ = (e) => (Array.isArray(e) ? e.filter(Boolean) : []);
function Sz(e, t) {
  const a = t.length - 1;
  let i = 0;
  for (; i < a; ) {
    if (At(e)) {
      e = void 0;
      break;
    }
    ((e = e[t[i]]), i++);
  }
  return e;
}
function _z(e) {
  for (const t in e) if (e.hasOwnProperty(t) && !Ye(e[t])) return !1;
  return !0;
}
function Dt(e, t) {
  if (nn(t) && Object.prototype.hasOwnProperty.call(e, t))
    return (delete e[t], e);
  const a = Array.isArray(t) ? t : Dl(t) ? [t] : Yo(t);
  if (a.some((c) => Mp.includes(String(c)))) return e;
  const i = a.length === 1 ? e : Sz(e, a),
    s = a.length - 1,
    u = a[s];
  return (
    i && delete i[u],
    s !== 0 &&
      ((wt(i) && Mt(i)) || (Array.isArray(i) && _z(i))) &&
      Dt(e, a.slice(0, -1)),
    e
  );
}
var d1 = () => {
  let e = new Set(),
    t = 0;
  return {
    get observers() {
      return Array.from(e);
    },
    next: (u) => {
      const c = e;
      t++;
      for (const d of c) d.next && d.next(u);
      c === e && t--;
    },
    subscribe: (u) => (
      e.add(u),
      {
        unsubscribe: () => {
          (t && ((e = new Set(e)), (t = 0)), e.delete(u));
        },
      }
    ),
    unsubscribe: () => {
      ((e = new Set()), (t = 0));
    },
  };
};
function v_(e, t) {
  const a = Array.isArray(e) ? [] : {};
  for (const i in e)
    if (Object.prototype.hasOwnProperty.call(e, i)) {
      const s = e[i],
        u = t[i];
      s && (wt(s) || Array.isArray(s)) && u
        ? (a[i] = v_(s, u))
        : e[i] && (a[i] = u);
    }
  return a;
}
const h1 = (e, t) =>
  e !== null && Dp(e) && Object.prototype.hasOwnProperty.call(e, t);
var Yh = (e, t) => {
    if (!t) return !1;
    let a = e;
    for (const i of Dl(t) ? [t] : Yo(t)) {
      if (!h1(a, i)) return h1(e, t);
      a = a[i];
    }
    return !0;
  },
  Up = (e) => e.type === "select-multiple";
const Ez = (e) => {
  const t = [...e.options];
  return !e.multiple && e.size < 2 && !t.some((a) => a.defaultSelected)
    ? e.selectedIndex !== t.findIndex((a) => !a.disabled)
    : t.some((a) => a.selected !== a.defaultSelected);
};
var xz = (e) =>
    Go(e)
      ? e.checked !== e.defaultChecked
      : e.type === "select-one" || Up(e)
        ? Ez(e)
        : !ff(e) && "defaultValue" in e && e.value !== e.defaultValue,
  Rz = (e) => ff(e) || Go(e),
  Kh = (e) => Nc(e) && e.isConnected;
function m1(e) {
  return Array.isArray(e) || wt(e);
}
function b_(e, t, a = "", i = []) {
  for (const s in e) {
    const u = a ? `${a}.${s}` : s,
      c = e[s];
    m1(c) && m1(he(t, u)) ? b_(c, t, u, i) : i.push(u);
  }
  return i;
}
var Oz = (e) => {
  for (const t in e) if (tn(e[t])) return !0;
  return !1;
};
function w_(e) {
  return Array.isArray(e) || (wt(e) && !Oz(e));
}
function S_(e) {
  return !!(e && "_f" in e);
}
function __(e) {
  return Array.isArray(e) ? !e.some((t) => !Ye(t)) : !Object.keys(e).length;
}
function Rm(e, t) {
  Array.isArray(e) ? (e[t] = void 0) : delete e[t];
}
function Om(e, t = {}, a) {
  for (const i in e) {
    const s = e[i],
      u = a && a[i];
    w_(s) && (!Array.isArray(s) || !S_(u))
      ? ((t[i] = Array.isArray(s) ? [] : {}),
        Om(s, t[i], u),
        __(t[i]) && Rm(t, i))
      : Ye(s) || (t[i] = !0);
  }
  return t;
}
function ia(e, t, a, i) {
  a || (a = Om(t, Array.isArray(At(t) ? e : t) ? [] : {}, i));
  for (const s in e) {
    const u = e[s],
      c = i && i[s];
    w_(u) && (!Array.isArray(u) || !S_(c))
      ? (Ye(t) || Em(a[s])
          ? (a[s] = Om(u, Array.isArray(u) ? [] : {}, c))
          : ia(u, At(t) ? {} : t[s], a[s], c),
        __(a[s]) && Rm(a, s))
      : en(u, At(t) ? void 0 : t[s])
        ? Rm(a, s)
        : (a[s] = !0);
  }
  return a;
}
var Az = (e, t) => {
    const a = t.split("."),
      i = [];
    let s = a[0];
    for (let u = 1; u < a.length; s += "." + a[u++])
      !isNaN(+a[u]) && e.has(s) && i.push(`${s}.${a[u]}`);
    return i;
  },
  Am = (e, { valueAsNumber: t, valueAsDate: a, setValueAs: i }) =>
    Ye(e)
      ? e
      : t
        ? e === ""
          ? NaN
          : e && +e
        : a && nn(e)
          ? new Date(e)
          : i
            ? i(e)
            : e;
function p1(e) {
  const t = e.ref;
  return uf(t)
    ? t.files
    : ff(t)
      ? y_(e.refs).value
      : Up(t)
        ? [...t.selectedOptions].map(({ value: a }) => a)
        : Go(t)
          ? p_(e.refs).value
          : Am(t.value, e);
}
var Cz = (e, t, a, i) => {
    const s = {};
    for (const u of e) {
      const c = he(t, u);
      c && et(s, u, c._f);
    }
    return {
      criteriaMode: a,
      names: [...e],
      fields: s,
      shouldUseNativeValidation: i,
    };
  },
  Co = (e) =>
    Ye(e)
      ? e
      : zc(e)
        ? e.source
        : wt(e)
          ? zc(e.value)
            ? e.value.source
            : e.value
          : e;
const y1 = "AsyncFunction";
var Tz = (e) => {
    if (!e || !e.validate) return !1;
    if (tn(e.validate)) return e.validate.constructor.name === y1;
    if (wt(e.validate)) {
      for (const t in e.validate)
        if (e.validate[t].constructor.name === y1) return !0;
    }
    return !1;
  },
  Dz = (e) =>
    e.mount &&
    (e.required ||
      (!Ye(e.required) && e.required !== !1) ||
      !Ye(e.min) ||
      !Ye(e.max) ||
      !Ye(e.maxLength) ||
      !Ye(e.minLength) ||
      e.pattern ||
      e.validate);
function g1(e, t, a) {
  const i = he(e, a);
  if ((i && (i.type || i.message)) || Array.isArray(i))
    return { error: i, name: a };
  const s = a.split(".");
  for (; s.length; ) {
    const u = s.join("."),
      c = he(t, u),
      d = he(e, u);
    if (c && !Array.isArray(c) && a !== u) return { name: a };
    if (d && d.type) return { name: u, error: d };
    if (d && d.root && d.root.type) return { name: `${u}.root`, error: d.root };
    s.pop();
  }
  return { name: a };
}
var Mz = (e, t, a) => {
  const i = Object.keys(e).filter((s) => s !== "name");
  return (
    !i.length ||
    (a && i.length >= Object.keys(t).length) ||
    i.find((s) => t[s] === (!a || nr.all))
  );
};
const v1 = (e, t, a) =>
  a ? e === t || e.startsWith(t + ".") : e.startsWith(t) || t.startsWith(e);
var b1 = (e, t, a) => {
    if (!e || !t || e === t) return !0;
    if (!Array.isArray(e)) return v1(e, t, a);
    for (const i of e) if (i && v1(i, t, a)) return !0;
    return !1;
  },
  Nz = (e, t, a, i, s) =>
    s.isOnAll
      ? !1
      : !a && s.isOnTouch
        ? !(t || e)
        : (a ? i.isOnBlur : s.isOnBlur)
          ? !e
          : (a ? i.isOnChange : s.isOnChange)
            ? e
            : !0,
  zz = (e, t) => {
    const a = he(e, t);
    !g_(a).length && !(a && a.root) && Dt(e, t);
  };
const gc = {
    mode: nr.onSubmit,
    reValidateMode: nr.onChange,
    shouldFocusError: !0,
  },
  kz = (e, t) => {
    for (const a in e) delete e[a];
    Object.assign(e, t);
  },
  E_ = {
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
function jz(e = {}) {
  let t = { ...gc, ...e },
    a = {
      ...rt(E_),
      isLoading: tn(t.defaultValues),
      errors: rt(t.errors) || {},
      disabled: t.disabled || !1,
    },
    i = {},
    s =
      wt(t.defaultValues) || wt(t.values)
        ? rt(t.defaultValues || t.values) || {}
        : {},
    u = t.shouldUnregister ? {} : rt(s),
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
  let v = ec(t.mode),
    _ = ec(t.reValidateMode);
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
    T = (...A) => A.some((P) => E[P] || x[P]),
    F = (A) => {
      for (const P of g) if (b1(P.name, A, P.exact)) return !0;
      return !1;
    },
    D = { array: d1(), state: d1() };
  let B = 0,
    L = 0,
    C = 0;
  const Y = {};
  let Q = t.criteriaMode === nr.all;
  const me = (A, P) => (H) => {
      (clearTimeout(y[A]), (y[A] = setTimeout(P, H)));
    },
    pe = (A) => {
      (clearTimeout(y[A]), delete y[A], delete h[A]);
    },
    we = (A) => {
      pe(A);
      const P = `${A}.`;
      for (const H of Object.keys(h)) H.startsWith(P) && pe(H);
    },
    be = async (A) => {
      if (!c.keepIsValid && !t.disabled && (T("isValid") || A)) {
        const P = ++B;
        let H;
        (t.resolver
          ? ((H = Mt((await Oe()).errors)), P === B && ce())
          : (H = await gt({
              fields: i,
              onlyCheckValid: !0,
              eventType: Ha.VALID,
            })),
          P === B && H !== a.isValid && D.state.next({ isValid: H }));
      }
    },
    Se = (A, P) => {
      const H = [...A];
      if (
        !H.some(
          (O) =>
            O &&
            (P ? he(a.validatingFields, O) !== !0 : Yh(a.validatingFields, O)),
        )
      )
        return;
      const te = rt(a.validatingFields);
      for (const O of H) O && (P ? et(te, O, !0) : Dt(te, O));
      en(a.validatingFields, te) || (a.validatingFields = te);
    },
    ce = (A, P) => {
      !t.disabled &&
        T("isValidating", "validatingFields") &&
        (Se(A || m.mount, P),
        D.state.next({
          validatingFields: a.validatingFields,
          isValidating: !Mt(a.validatingFields),
        }));
    },
    ge = () => {
      a.dirtyFields = ia(s, u, void 0, i);
    },
    U = (A, P = [], H, te, O = !0, M = !0) => {
      if (te && H && !t.disabled) {
        ((c.action = !0), (c.keepIsValid = !1));
        const z = he(i, A),
          $ = z && z._f,
          Z = $ ? Object.assign([], z) : z;
        if (
          (c.actionArrayLengths.has(A) ||
            c.actionArrayLengths.set(A, Array.isArray(Z) ? Z.length : 0),
          M && Array.isArray(Z))
        ) {
          const xe = H(Z, te.argA, te.argB) || Z;
          $ ? et(i, A, { ...xe, _f: $ }) : O && et(i, A, xe);
        }
        const oe = he(a.errors, A);
        if (M && Array.isArray(oe)) {
          const xe = oe.root,
            _e = H(oe, te.argA, te.argB) || oe;
          (xe && (_e.root = xe),
            O && et(a.errors, A, _e),
            zz(a.errors, A),
            (a.errors = { ...a.errors }));
        }
        const de = he(a.touchedFields, A),
          ye = M && Array.isArray(de);
        if (ye) {
          const xe = H(de, te.argA, te.argB);
          O && et(a.touchedFields, A, xe);
        }
        const Ee = he(a.dirtyFields, A);
        if (M && Array.isArray(Ee)) {
          const xe = H(Ee, te.argA, te.argB) || Ee;
          O && et(a.dirtyFields, A, xe);
        }
        (T("dirtyFields") ? ge() : (d = !0),
          D.state.next({
            name: A,
            isDirty: ut(A, P),
            dirtyFields: a.dirtyFields,
            ...(ye && { touchedFields: a.touchedFields }),
            errors: a.errors,
            isValid: a.isValid,
          }));
      } else et(u, A, P);
    },
    ne = (A, P) => {
      (et(a.errors, A, P),
        (a.errors = { ...a.errors }),
        D.state.next({ errors: a.errors }));
    },
    q = (A) => {
      Object.keys(h).forEach(pe);
      const P = !Mt(A);
      ((a.errors = rt(A)),
        D.state.next({ errors: a.errors, ...(P ? { isValid: !1 } : {}) }),
        !P && c.mount && be());
    },
    ie = (A) => (Dl(A) ? [A] : Yo(A)),
    N = (A) => {
      const P = ie(A);
      let H = u,
        te = s;
      for (let O = 0; O < P.length - 1; O++) {
        const M = P[O];
        if (
          ((H = At(H) ? H : H[M]),
          (te = At(te) ? te : te[M]),
          H === null && te !== null)
        )
          return !0;
      }
      return !1;
    },
    W = (A) => {
      if (!c.actionArrayLengths.size) return !1;
      const P = ie(A);
      let H = u,
        te = "",
        O = -1,
        M = 0;
      for (let z = 0; z < P.length; z++) {
        if (At(H)) return !1;
        const $ = P[z];
        if (((te = te ? `${te}.${$}` : $), Array.isArray(H) && +$ >= H.length))
          return O === -1 ? !1 : z === O ? +$ < M : !0;
        if (
          (c.actionArrayLengths.has(te) &&
            ((O = z + 1), (M = c.actionArrayLengths.get(te))),
          (H = H[$]),
          Ye(H) && O !== -1 && z > O && +P[O] < M)
        )
          return !0;
      }
      return !1;
    },
    fe = (A) => {
      let P = u;
      for (const H of ie(A)) {
        if (Array.isArray(P) && +H >= P.length) return !0;
        P = P && P[H];
      }
      return !1;
    },
    le = (A, P, H, te) => {
      const O = he(i, A);
      if (O) {
        if (N(A) || W(A)) return;
        const M = Ye(he(u, A)),
          z = he(u, A, Ye(H) ? he(s, A) : H),
          $ = !!te && !a.isReady && xz(te);
        if (Ye(z) || (te && te.defaultChecked) || $ || P) {
          const Z = P ? z : p1(O._f);
          (!Ye(Z) || !fe(A)) &&
            (T("dirtyFields") && !en(he(u, A), Z) && (d = !0),
            et(u, A, Z),
            $ && ve(A, Z));
        } else cn(A, z);
        c.mount &&
          !c.action &&
          (t.resolver && T("isValidating", "validatingFields")
            ? Promise.resolve().then(() => be())
            : be(),
          M &&
            a.isDirty &&
            T("isDirty") &&
            (ut() || ((a.isDirty = !1), D.state.next({ ...a }))),
          t.shouldUnregister &&
            M &&
            !Ye(he(u, A)) &&
            qh(A, m) &&
            (c.watch = !0));
      }
    },
    ve = (A, P, H, te, O) => {
      let M = !1,
        z = !1;
      const $ = { name: A };
      if (!t.disabled || te === !0) {
        if (!H || te) {
          const Z = en(he(s, A), P);
          if (
            (T("isDirty") &&
              ((z = a.isDirty),
              (a.isDirty = $.isDirty = !Z || ut()),
              (M = z !== $.isDirty)),
            (z = !!he(a.dirtyFields, A)),
            Z)
          )
            Dt(a.dirtyFields, A);
          else {
            const de = he(s, A),
              ye = he(i, A),
              Ee =
                !(ye && ye._f) && (wt(de) || Array.isArray(de))
                  ? ia(de, P, void 0, ye)
                  : !0;
            et(a.dirtyFields, A, Ee);
          }
          let oe = !1;
          if (d || (Z && (T("isDirty") ? a.isDirty : ut()))) {
            d = !1;
            const de = ia(s, u, void 0, i);
            en(a.dirtyFields, de) || ((oe = !0), kz(a.dirtyFields, de));
          }
          (($.dirtyFields = a.dirtyFields),
            (M = M || (T("dirtyFields") && (oe || z !== !Z))));
        }
        if (H) {
          const Z = Yh(a.touchedFields, A) ? he(a.touchedFields, A) : void 0;
          Z ||
            (et(a.touchedFields, A, H),
            ($.touchedFields = a.touchedFields),
            (M = M || (T("touchedFields") && Z !== H)));
        }
        M && O && D.state.next($);
      }
      return M ? $ : {};
    },
    ke = (A, P, H, te) => {
      const O = he(a.errors, A),
        M = T("isValid") && xn(P) && a.isValid !== P;
      if (
        (t.delayError && H
          ? ((h[A] = me(A, () => ne(A, H))), h[A](t.delayError))
          : (pe(A),
            H ? et(a.errors, A, H) : Dt(a.errors, A),
            (a.errors = { ...a.errors })),
        (H ? !en(O, H, !0) : O) || !Mt(te) || M)
      ) {
        const z = {
          ...te,
          ...(M && xn(P) ? { isValid: P } : {}),
          errors: a.errors,
          name: A,
        };
        D.state.next(z);
      }
    },
    Oe = async (A) => (
      ce(A, !0),
      await t.resolver(
        u,
        t.context,
        Cz(A || m.mount, i, t.criteriaMode, t.shouldUseNativeValidation),
      )
    ),
    Ne = async (A) => {
      const P = L,
        H = C,
        te = A ? A.filter((M) => he(i, M)) : [],
        { errors: O } = await Oe(A);
      if (P !== L) return O;
      if ((ce(A), A)) {
        for (const M of A) {
          if (te.includes(M) && (!he(i, M) || Y[M] > H)) {
            Dt(O, M);
            continue;
          }
          const z = he(O, M);
          we(M);
          const $ =
              m.array.has(M) &&
              wt(z) &&
              !Object.keys(z).some((de) => !Number.isNaN(Number(de))),
            Z = he(i, M),
            oe = wt(Z) && Object.keys(Z).some((de) => de !== "_f");
          $
            ? o1(a.errors, { [M]: z }, M)
            : (z && (z.type || z.message)) || Array.isArray(z) || (wt(z) && oe)
              ? et(a.errors, M, z)
              : Dt(a.errors, M);
        }
        a.errors = { ...a.errors };
      } else (Object.keys(h).forEach(pe), (a.errors = O));
      return O;
    },
    qe = async ({ name: A, eventType: P }) => {
      if (t.validate) {
        const H = L,
          te = await t.validate({
            formValues: u,
            formState: a,
            name: A,
            eventType: P,
          });
        if (H !== L) return !0;
        if (wt(te)) {
          let O = !0;
          Ur(tl);
          for (const M in te) {
            const z = te[M];
            z &&
              ((O = !1),
              Vt(`${tl}.${M}`, {
                message: nn(z.message) ? z.message : "",
                type: z.type || Kt.validate,
              }));
          }
          return O;
        } else
          return nn(te) || !te
            ? (Vt(tl, { message: te || "", type: Kt.validate }), !1)
            : (Ur(tl), !0);
      }
      return !0;
    },
    gt = async ({
      fields: A,
      onlyCheckValid: P,
      name: H,
      eventType: te,
      context: O = { valid: !0, runRootValidation: !1 },
    }) => {
      const M = L;
      if (
        t.validate &&
        !O.runRootValidation &&
        ((O.runRootValidation = !0),
        !(await qe({ name: H, eventType: te })) && ((O.valid = !1), P))
      )
        return O.valid;
      for (const z in A) {
        const $ = A[z];
        if ($) {
          const { _f: Z, ...oe } = $;
          if (Z) {
            const de = m.array.has(Z.name),
              ye = $._f && Tz($._f),
              Ee = T("isValidating", "validatingFields");
            ye && Ee && ce([Z.name], !0);
            const xe = C,
              _e = await f1(
                $,
                m.disabled,
                u,
                Q,
                t.shouldUseNativeValidation && !P,
                de,
              );
            if (M !== L) return O.valid;
            if ((ye && Ee && ce([Z.name]), !he(i, Z.name) || Y[Z.name] > xe))
              continue;
            if (
              (_e[Z.name] && ((O.valid = !1), P)) ||
              (P ||
                (pe(Z.name),
                he(_e, Z.name)
                  ? de
                    ? o1(a.errors, _e, Z.name)
                    : et(a.errors, Z.name, _e[Z.name])
                  : Dt(a.errors, Z.name)),
              t.shouldUseNativeValidation && _e[Z.name])
            )
              break;
          }
          !Mt(oe) &&
            (await gt({
              context: O,
              onlyCheckValid: P,
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
        const P = he(i, A);
        P &&
          (P._f.refs ? P._f.refs.every((H) => !Kh(H)) : !Kh(P._f.ref)) &&
          ai(A);
      }
      m.unMount = new Set();
    },
    ut = (A, P) => (A && !Ye(P) && et(u, A, P), !en(c.mount ? u : s, s)),
    Qt = (A, P, H) => {
      const te = c.mount ? u : Ye(P) || !Ye(A) ? s : P;
      return xm(A, m, Ye(A) ? { ...te } : te, H, P);
    },
    Vn = (A) =>
      g_(he(c.mount ? u : s, A, t.shouldUnregister ? he(s, A, []) : [])),
    cn = (A, P, H = {}, te = !1, O = !1, M = !1) => {
      const z = he(i, A);
      let $ = P;
      if (z) {
        const Z = z._f;
        Z &&
          (!Z.disabled && et(u, A, Am(P, Z)),
          ($ = Nc(Z.ref) && At(P) ? "" : P),
          Up(Z.ref)
            ? [...Z.ref.options].forEach(
                (oe) => (oe.selected = $.includes(oe.value)),
              )
            : Z.refs
              ? Go(Z.ref)
                ? Z.refs.forEach((oe) => {
                    (!oe.defaultChecked || !oe.disabled) &&
                      (Array.isArray($)
                        ? (oe.checked = !!$.find((de) => de === oe.value))
                        : (oe.checked = $ === oe.value || !!$));
                  })
                : Z.refs.forEach((oe) => (oe.checked = oe.value === $))
              : uf(Z.ref)
                ? (Z.ref.value = "")
                : ((Z.ref.value = $),
                  !Z.ref.type &&
                    !O &&
                    !M &&
                    D.state.next({
                      name: A,
                      values: te ? u : F(A) ? rt(u) : void 0,
                    })));
      }
      ((H.shouldDirty || H.shouldTouch) &&
        ve(
          A,
          z &&
            z._f &&
            !z._f.disabled &&
            (z._f.valueAsNumber || z._f.valueAsDate || z._f.setValueAs)
            ? Am(P, z._f)
            : $,
          H.shouldTouch,
          H.shouldDirty,
          !O,
        ),
        H.shouldValidate && $n(A, { delayError: H.delayError }),
        H.shouldValidate &&
          z &&
          z._f &&
          z._f.deps &&
          (!Array.isArray(z._f.deps) || z._f.deps.length > 0) &&
          $n(z._f.deps));
    },
    Fi = (A, P, H, te = !1, O = !1, M = !1) => {
      for (const z in P) {
        if (!Object.prototype.hasOwnProperty.call(P, z)) continue;
        const $ = P[z],
          Z = A + "." + z,
          oe = he(i, Z);
        (m.array.has(Z) && D.array.next({ name: Z, values: te ? u : rt(u) }),
          (m.array.has(A) || wt($) || (oe && !oe._f)) && !Ci($)
            ? Fi(Z, $, H, te, O, M)
            : cn(Z, $, H, te, O, M));
      }
    },
    Bi = (A, P, H, te, O = !1) => {
      const M = he(i, A),
        z = m.array.has(A),
        $ = te ? P : rt(P),
        Z = he(u, A),
        oe = en(Z, $);
      if ((oe || et(u, A, $), z))
        (D.array.next({ name: A, values: te ? u : rt(u) }),
          T("isDirty", "dirtyFields") &&
            H.shouldDirty &&
            (ge(),
            (a.isDirty = ut(A, $)),
            O ||
              D.state.next({
                name: A,
                dirtyFields: a.dirtyFields,
                isDirty: a.isDirty,
              })),
          H.shouldValidate && $n(A, { delayError: H.delayError }));
      else {
        const de = (Array.isArray($) && !$.length) || Mt($),
          ye = !oe && !O;
        !M || M._f || At($) || de
          ? cn(A, $, H, te, O, ye)
          : Fi(A, $, H, te, O, ye);
      }
      if (!oe && !O) {
        const de = qh(A, m),
          ye = c.mount || de ? A : void 0,
          Ee = z ? [] : Az(m.array, A),
          xe = te ? u : F(ye) || Ee.some(F) ? rt(u) : void 0;
        D.state.next({ ...(de && a), name: ye, values: xe });
        for (const _e of Ee) D.state.next({ name: _e, values: xe });
      }
    },
    Bt = (A, P, H = {}) => Bi(A, P, H, !1),
    Jo = (A, P = {}) => {
      const H = tn(A) ? A(u) : A;
      if (!en(u, H)) {
        u = { ...u, ...H };
        for (const te of new Set([...m.mount, ...m.array]))
          Yh(H, te) && Bi(te, he(H, te), P, !0, !0);
        (D.state.next({
          ...a,
          name: void 0,
          type: void 0,
          ...(g.size ? { values: u } : {}),
        }),
          P.shouldValidate && be());
      }
    },
    ti = async (A) => {
      c.mount = !0;
      const P = A.target;
      let H = P.name,
        te = !0;
      const O = he(i, H),
        M = C,
        z = ($) => {
          te = !!he(i, H) && !(Y[H] > M) && en($, he(u, H, $));
        };
      if (O) {
        c.keepIsValid = !1;
        let $,
          Z,
          oe = !1;
        const de = P.type ? p1(O._f) : _m(A),
          ye = A.type === Ha.BLUR || A.type === Ha.FOCUS_OUT,
          Ee =
            !Dz(O._f) &&
            !t.validate &&
            !t.resolver &&
            !he(a.errors, H) &&
            !O._f.deps,
          xe = Ee || Nz(ye, he(a.touchedFields, H), a.isSubmitted, _, v),
          _e = qh(H, m, ye);
        (et(u, H, rt(de)),
          ye
            ? (!P || !P.readOnly) &&
              (O._f.onBlur && O._f.onBlur(A),
              Object.prototype.hasOwnProperty.call(h, H) &&
                ((oe = !0), h[H](0)))
            : O._f.onChange && O._f.onChange(A));
        const Ae = ve(H, de, ye),
          Fe = !Mt(Ae) || _e;
        if (
          (!ye &&
            D.state.next({
              name: H,
              type: A.type,
              ...(F(H) ? { values: rt(u) } : {}),
            }),
          xe)
        )
          return (
            (!Ee || !a.isValid) &&
              T("isValid") &&
              (t.mode === "onBlur" ? ye && be() : ye || be()),
            Fe && D.state.next({ name: H, ...(_e ? {} : Ae) })
          );
        if (
          (!t.resolver &&
            t.validate &&
            (await qe({ name: H, eventType: A.type })),
          !ye && _e && D.state.next({ ...a }),
          t.resolver)
        ) {
          const Je = L,
            { errors: it } = await Oe([H]);
          if (Je !== L) return;
          if ((ce([H]), z(de), !te)) {
            !Mt(Ae) && D.state.next(Ae);
            return;
          }
          const vt = g1(a.errors, i, H),
            Pe = g1(it, i, vt.name || H);
          (($ = Pe.error), (H = Pe.name), (Z = Mt(it)));
        } else {
          const Je = L,
            it = ++B;
          if (
            (ce([H], !0),
            ($ = (await f1(O, m.disabled, u, Q, t.shouldUseNativeValidation))[
              H
            ]),
            Je !== L)
          )
            return;
          if ((ce([H]), z(de), te)) {
            if ($) Z = !1;
            else if (T("isValid")) {
              if (
                ((Z = await gt({
                  fields: i,
                  onlyCheckValid: !0,
                  name: H,
                  eventType: A.type,
                })),
                Je !== L)
              )
                return;
              (z(de), it !== B && (Z = void 0));
            }
          }
        }
        te &&
          (O._f.deps &&
            (!Array.isArray(O._f.deps) || O._f.deps.length > 0) &&
            $n(O._f.deps),
          ke(H, Z, $, Ae),
          oe && Object.prototype.hasOwnProperty.call(h, H) && h[H](0));
      }
    },
    ni = (A, P) => {
      if (he(a.errors, P) && A.focus) return (A.focus(), 1);
    },
    $n = async (A, P = {}) => {
      c.keepIsValid = !1;
      let H, te;
      const O = Gh(A),
        M = L;
      if (t.resolver) {
        const z = await Ne(Ye(A) ? A : O);
        ((H = Mt(z)), (te = A ? !O.some(($) => he(z, $)) : H));
      } else
        A
          ? ((te = (
              await Promise.all(
                O.map(async (z) => {
                  const $ = he(i, z);
                  return await gt({
                    fields: $ && $._f ? { [z]: $ } : $,
                    eventType: Ha.TRIGGER,
                  });
                }),
              )
            ).every(Boolean)),
            !(!te && !a.isValid) && be())
          : (te = H = await gt({ fields: i, name: A, eventType: Ha.TRIGGER }));
      if (M !== L) return te;
      if (P.delayError && t.delayError && nn(A)) {
        const z = he(a.errors, A);
        z
          ? (Dt(a.errors, A),
            (h[A] = me(A, () => ne(A, z))),
            h[A](t.delayError))
          : pe(A);
      }
      if (P.shouldTouch)
        for (const z of A ? O : m.mount)
          !m.array.has(z) && et(a.touchedFields, z, !0);
      return (
        (a.errors = { ...a.errors }),
        D.state.next({
          ...(!nn(A) || (T("isValid") && H !== a.isValid) ? {} : { name: A }),
          ...(t.resolver || !A ? { isValid: H } : {}),
          ...(P.shouldTouch && T("touchedFields")
            ? { touchedFields: a.touchedFields }
            : {}),
          errors: a.errors,
        }),
        P.shouldFocus && !te && al(i, ni, A ? O : m.mount),
        te
      );
    },
    sr = (A, P) => {
      let H = Ye(A) && !P ? { ...(c.mount ? u : s) } : c.mount ? u : s;
      return (
        P && (H = v_(P.dirtyFields ? a.dirtyFields : a.touchedFields, H)),
        Ye(A) ? H : nn(A) ? he(H, A) : A.map((te) => he(H, te))
      );
    },
    gr = (A) =>
      Ye(A)
        ? { ...a.errors }
        : nn(A)
          ? he(a.errors, A)
          : A.map((P) => he(a.errors, P)),
    ri = (A, P) => {
      const H = P || a,
        te = he(H.errors, A);
      return {
        invalid: !!te,
        isDirty: !!he(H.dirtyFields, A),
        error: te,
        isValidating: !!he(H.validatingFields, A),
        isTouched: !!he(H.touchedFields, A),
      };
    },
    Ur = (A) => {
      const P = A ? Gh(A) : void 0;
      P
        ? P.forEach((H) => {
            (we(H),
              Dt(a.errors, H),
              (a.errors = { ...a.errors }),
              D.state.next({ name: H, errors: a.errors }));
          })
        : (Object.keys(h).forEach(pe),
          (a.errors = {}),
          D.state.next({ errors: a.errors }));
    },
    Vt = (A, P, H) => {
      we(A);
      const te = he(i, A, { _f: {} }),
        O = te._f && te._f.ref,
        M = he(a.errors, A) || {},
        { ref: z, message: $, type: Z, types: oe, ...de } = M;
      (et(a.errors, A, { ...de, ...P, ref: O }),
        (a.errors = { ...a.errors }),
        D.state.next({ name: A, errors: a.errors, isValid: !1 }),
        H && H.shouldFocus && O && O.focus && O.focus());
    },
    yt = (A, P) => {
      if (tn(A)) {
        const H = {};
        g.add(H);
        const { unsubscribe: te } = D.state.subscribe({
          next: (O) => "values" in O && A(O.values || Qt(void 0, P), O),
        });
        return {
          unsubscribe: () => {
            (g.delete(H), te());
          },
        };
      }
      return Qt(A, P, !0);
    },
    gn = (A) => {
      const P = { name: A.name, exact: A.exact };
      A.formState && A.formState.values && g.add(P);
      const { unsubscribe: H } = D.state.subscribe({
        next: (te) => {
          if (
            b1(A.name, te.name, A.exact) &&
            Mz(te, A.formState || E, A.reRenderRoot)
          ) {
            const O = te.values || { ...u };
            A.callback({
              ...a,
              ...te,
              validatingFields: a.validatingFields,
              isValidating: a.isValidating,
              values: O,
              defaultValues: s,
            });
          }
        },
      });
      return () => {
        (g.delete(P), H());
      };
    },
    $t = (A) => {
      c.mount = !0;
      const P = Object.keys(A.formState || {}).filter(
        (te) => A.formState && A.formState[te],
      );
      for (const te of P) x[te] = (x[te] || 0) + 1;
      const H = gn({ ...A, formState: { ...S, ...A.formState } });
      return () => {
        for (const te of P.splice(0)) x[te]--;
        H();
      };
    },
    ai = (A, P = {}) => {
      const H = A ? Gh(A) : m.mount;
      P.keepIsValidating || Se(H);
      for (const te of H)
        (m.mount.delete(te),
          m.array.delete(te),
          m.disabled.delete(te),
          Dt(i, te),
          !P.keepValue && Dt(u, te),
          P.keepError || (we(te), Dt(a.errors, te)),
          !P.keepDirty && Dt(a.dirtyFields, te),
          !P.keepTouched && Dt(a.touchedFields, te),
          !t.shouldUnregister && !P.keepDefaultValue && Dt(s, te));
      (P.keepError || (a.errors = { ...a.errors }),
        g.size && D.state.next({ values: rt(u) }),
        D.state.next({
          ...a,
          ...(P.keepDirty ? {} : { isDirty: ut() }),
          ...(P.keepIsValidating
            ? {}
            : { isValidating: !Mt(a.validatingFields) }),
        }),
        !P.keepIsValid && be());
    },
    An = ({ disabled: A, name: P }) => {
      if ((xn(A) && c.mount) || A || m.disabled.has(P)) {
        const O = m.disabled.has(P) !== !!A;
        (A ? m.disabled.add(P) : m.disabled.delete(P),
          O && c.mount && !c.action && be());
      }
    },
    da = (A, P = {}) => {
      let H = he(i, A);
      const te = xn(P.disabled) || xn(t.disabled),
        O = !m.registerName.has(A) && H && H._f && !H._f.mount;
      if (
        ((!H || !H._f) && (Y[A] = ++C),
        et(i, A, {
          ...(H || {}),
          _f: {
            ...(H && H._f ? H._f : { ref: { name: A } }),
            name: A,
            mount: !0,
            ...P,
          },
        }),
        m.mount.add(A),
        H && H._f)
      ) {
        const M = he(i, A);
        for (const z of mz) z in P || delete M._f[z];
      }
      return (
        H && !O
          ? An({ disabled: xn(P.disabled) ? P.disabled : t.disabled, name: A })
          : le(A, !0, P.value),
        {
          ...(te ? { disabled: P.disabled || t.disabled } : {}),
          ...(t.progressive
            ? {
                required: !!Co(P.required),
                min: Co(P.min),
                max: Co(P.max),
                minLength: Co(P.minLength),
                maxLength: Co(P.maxLength),
                pattern: Co(P.pattern),
              }
            : {}),
          name: A,
          onChange: ti,
          onBlur: ti,
          ref: (M) => {
            if (M) {
              (m.registerName.add(A),
                da(A, P),
                m.registerName.delete(A),
                (H = he(i, A)));
              const z =
                  (Ye(M.value) &&
                    M.querySelectorAll &&
                    M.querySelectorAll("input,select,textarea")[0]) ||
                  M,
                $ = Rz(z),
                Z = H._f.refs || [];
              if ($ ? Z.find((de) => de === z) : z === H._f.ref) return;
              const oe = { ...H._f };
              ($
                ? ((oe.refs = [
                    ...Z.filter(Kh),
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
                (t.shouldUnregister || P.shouldUnregister) &&
                  !(d_(m.array, A) && c.action) &&
                  m.unMount.add(A));
          },
        }
      );
    },
    lr = () =>
      t.shouldFocusError && !t.shouldUseNativeValidation && al(i, ni, m.mount),
    Pr = (A) => {
      xn(A) &&
        (D.state.next({ disabled: A }),
        al(
          i,
          (P, H) => {
            const te = he(i, H);
            te &&
              ((P.disabled = te._f.disabled || A),
              Array.isArray(te._f.refs) &&
                te._f.refs.forEach((O) => {
                  O.disabled = te._f.disabled || A;
                }));
          },
          0,
        ));
    },
    Hn = (A, P) => async (H) => {
      let te, O;
      H && (H.preventDefault && H.preventDefault(), H.persist && H.persist());
      let M = rt(u);
      D.state.next({ isSubmitting: !0 });
      const z = L,
        $ = (Z) => {
          throw (z === L && D.state.next({ isSubmitting: !1 }), Z);
        };
      if (t.resolver) {
        let Z;
        try {
          Z = await Oe();
        } catch (ye) {
          $(ye);
        }
        const { errors: oe, values: de } = Z;
        if (z !== L) return;
        (ce(), Object.keys(h).forEach(pe), (a.errors = oe), (M = rt(de)));
      } else {
        try {
          await gt({ fields: i, eventType: Ha.SUBMIT });
        } catch (Z) {
          $(Z);
        }
        if (z !== L) return;
        (Dt(a.errors, h_), (a.errors = { ...a.errors }));
      }
      if (m.disabled.size) for (const Z of m.disabled) Dt(M, Z);
      if (Mt(a.errors)) {
        D.state.next({ errors: {} });
        try {
          te = await A(M, H);
        } catch (Z) {
          O = Z;
        }
      } else {
        if (P)
          try {
            await P({ ...a.errors }, H);
          } catch (Z) {
            $(Z);
          }
        (lr(), setTimeout(lr));
      }
      if (
        (D.state.next({
          isSubmitted: !0,
          isSubmitting: !1,
          isSubmitSuccessful: Mt(a.errors) && !O,
          submitCount: a.submitCount + 1,
          errors: a.errors,
        }),
        O)
      )
        throw O;
      return te;
    },
    Fr = (A, P = {}) => {
      he(i, A) &&
        (Se([A]),
        Ye(P.defaultValue)
          ? Bt(A, rt(he(s, A)))
          : (Bt(A, P.defaultValue), et(s, A, rt(P.defaultValue))),
        P.keepTouched || Dt(a.touchedFields, A),
        P.keepDirty ||
          (Dt(a.dirtyFields, A),
          (a.isDirty = Ye(P.defaultValue) ? ut() : ut(A, rt(he(s, A))))),
        P.keepError ||
          (we(A), Dt(a.errors, A), (a.errors = { ...a.errors }), be()),
        D.state.next({ ...a, isValidating: !Mt(a.validatingFields) }));
    },
    Cn = (A, P = {}) => {
      (L++, B++);
      const H = A ? rt(A) : s,
        te = rt(H),
        O = Mt(A),
        M = te,
        z = i;
      if (
        (Object.keys(h).forEach(pe),
        P.keepDefaultValues || (s = H),
        !P.keepValues)
      ) {
        if (P.keepDirtyValues) {
          const $ = new Set([
            ...m.mount,
            ...b_(ia(s, u, void 0, z), a.dirtyFields),
          ]);
          for (const Z of $) {
            const oe = he(a.dirtyFields, Z),
              de = he(u, Z),
              ye = he(M, Z);
            oe && !Ye(de) ? et(M, Z, de) : !oe && !Ye(ye) && Bt(Z, ye);
          }
        } else {
          if (cf && Ye(A))
            for (const $ of m.mount) {
              const Z = he(i, $);
              if (Z && Z._f) {
                const oe = Array.isArray(Z._f.refs) ? Z._f.refs[0] : Z._f.ref;
                if (Nc(oe)) {
                  const de = oe.closest("form");
                  if (de) {
                    de.reset();
                    break;
                  }
                }
              }
            }
          if (P.keepFieldsRef) for (const $ of m.mount) Bt($, he(M, $));
          else i = {};
        }
        if (t.shouldUnregister) {
          if (((u = P.keepDefaultValues ? rt(s) : {}), P.keepFieldsRef))
            for (const $ of m.mount) et(u, $, he(M, $));
        } else u = rt(M);
        (D.array.next({ values: { ...M } }),
          D.state.next({ name: void 0, type: void 0, values: { ...M } }));
      }
      ((m = {
        mount: P.keepDirtyValues ? m.mount : new Set(),
        unMount: new Set(),
        array: new Set(),
        registerName: new Set(),
        disabled:
          P.keepValues || P.keepDirtyValues || P.keepFieldsRef
            ? new Set([...m.disabled].filter(($) => he(i, $)))
            : new Set(),
        watch: new Set(),
        watchAll: !1,
        focus: "",
      }),
        (c.mount =
          !E.isValid ||
          !!P.keepIsValid ||
          !!P.keepDirtyValues ||
          (!t.shouldUnregister && !Mt(M))),
        (c.watch = !!t.shouldUnregister),
        (c.keepIsValid = !!P.keepIsValid),
        (c.action = !1),
        c.actionArrayLengths.clear(),
        (d = !1),
        P.keepErrors || (a.errors = {}),
        D.state.next({
          submitCount: P.keepSubmitCount ? a.submitCount : 0,
          isDirty: O
            ? !1
            : P.keepDirty
              ? a.isDirty
              : P.keepValues
                ? ut()
                : !!(P.keepDefaultValues && A && !en(A, s)),
          isSubmitted: P.keepIsSubmitted ? a.isSubmitted : !1,
          dirtyFields: O
            ? {}
            : P.keepDirtyValues
              ? P.keepDefaultValues && u
                ? ia(s, u, void 0, z)
                : a.dirtyFields
              : P.keepDefaultValues && A
                ? ia(s, A, void 0, z)
                : P.keepDirty
                  ? a.dirtyFields
                  : P.keepValues
                    ? ia(s, u, void 0, z)
                    : {},
          touchedFields: P.keepTouched ? a.touchedFields : {},
          ...(!P.keepIsValidating && (a.isValidating || !Mt(a.validatingFields))
            ? { validatingFields: {}, isValidating: !1 }
            : null),
          errors: P.keepErrors ? a.errors : {},
          isSubmitSuccessful: P.keepIsSubmitSuccessful
            ? a.isSubmitSuccessful
            : !1,
          isSubmitting: !1,
          defaultValues: s,
        }));
    },
    ii = (A, P) => Cn(tn(A) ? A(u) : A, { ...t.resetOptions, ...P }),
    ha = (A, P = {}) => {
      const H = he(i, A),
        te = H && H._f;
      if (te) {
        const O = te.refs ? te.refs[0] : te.ref;
        O.focus &&
          setTimeout(() => {
            (O.focus(), P.shouldSelect && tn(O.select) && O.select());
          });
      }
    },
    Vi = (A) => {
      const { name: P, type: H, values: te, ...O } = A;
      Object.keys(O).length && (a = { ...a, ...O });
    };
  D.state.subscribe({ next: Vi });
  const si = {
    control: {
      register: da,
      unregister: ai,
      getFieldState: ri,
      handleSubmit: Hn,
      setError: Vt,
      _subscribe: gn,
      _runSchema: Oe,
      _updateIsValidating: ce,
      _focusError: lr,
      _getWatch: Qt,
      _getDirty: ut,
      _setValid: be,
      _setFieldArray: U,
      _setDisabledField: An,
      _setErrors: q,
      _getFieldArray: Vn,
      _reset: Cn,
      _resetDefaultValues: () =>
        tn(t.defaultValues) &&
        t.defaultValues().then((A) => {
          (ii(A, t.resetOptions), D.state.next({ isLoading: !1 }));
        }),
      _removeUnmounted: at,
      _disableForm: Pr,
      _subjects: D,
      _proxyFormState: E,
      get _fields() {
        return i;
      },
      get _formValues() {
        return u;
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
        return a;
      },
      get _options() {
        return t;
      },
      set _options(A) {
        ((t = { ...t, ...A }),
          (v = ec(t.mode)),
          (_ = ec(t.reValidateMode)),
          (Q = t.criteriaMode === nr.all));
      },
    },
    subscribe: $t,
    trigger: $n,
    register: da,
    handleSubmit: Hn,
    watch: yt,
    setValue: Bt,
    setValues: Jo,
    getValues: sr,
    getErrors: gr,
    reset: ii,
    resetField: Fr,
    resetDefaultValues: (A, P = {}) => {
      if (((s = rt(A)), !P.keepDirty)) {
        const H = ia(s, u, void 0, i);
        ((a.dirtyFields = H), (a.isDirty = !Mt(H)));
      }
      (P.keepIsValid || be(), D.state.next({ ...a, defaultValues: s }));
    },
    clearErrors: Ur,
    unregister: ai,
    setError: Vt,
    setFocus: ha,
    getFieldState: ri,
  };
  return { ...si, formControl: si };
}
const w1 = {
  mode: gc.mode,
  reValidateMode: gc.reValidateMode,
  shouldFocusError: gc.shouldFocusError,
  resolver: void 0,
  criteriaMode: void 0,
  delayError: void 0,
  shouldUnregister: void 0,
  shouldUseNativeValidation: void 0,
  context: void 0,
  progressive: void 0,
  resetOptions: void 0,
};
function Lz(e = {}) {
  const t = Re.useRef(void 0),
    a = Re.useRef(void 0),
    i = Re.useRef(e.formControl),
    s = Re.useRef(!1),
    u = Re.useRef(!!e.validate),
    c = Re.useRef(!!e.errors),
    d = Re.useRef(!1),
    [m, h] = Re.useState(() => ({
      ...rt(E_),
      isLoading: tn(e.defaultValues),
      errors: e.errors || {},
      disabled: e.disabled || !1,
      defaultValues: tn(e.defaultValues) ? void 0 : e.defaultValues,
    }));
  if (!t.current || (e.formControl && i.current !== e.formControl))
    if (((i.current = e.formControl), (s.current = !1), e.formControl))
      ((t.current = { ...e.formControl, formState: m }),
        e.defaultValues &&
          !tn(e.defaultValues) &&
          e.formControl.reset(e.defaultValues, e.resetOptions));
    else {
      const { formControl: x, ...T } = jz(e);
      t.current = { ...T, formState: m };
    }
  const y = t.current.control,
    g = y._options,
    v = {};
  for (const x in w1) x in g && !(x in e) && (v[x] = w1[x]);
  (s.current && !e.disabled && (v.disabled = !1),
    (y._options = { ...v, ...e, validate: e.validate }));
  const _ = () => ({ ...y._formState, defaultValues: y._defaultValues }),
    { resyncIfNeeded: S, snapshot: E } = jp(_);
  return (
    kp(() => {
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
      (u.current && !e.validate && t.current && t.current.clearErrors(tl),
        (u.current = !!e.validate));
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
      e.values && !en(e.values, a.current)
        ? (y._reset(e.values, {
            keepFieldsRef: !0,
            ...y._options.resetOptions,
          }),
          (y._options.resetOptions && y._options.resetOptions.keepIsValid) ||
            y._setValid(),
          (a.current = e.values),
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
    (t.current.formState = Re.useMemo(() => m_(m, y), [y, m])),
    t.current
  );
}
const Pp = Re.createContext(null);
Pp.displayName = "HookFormContext";
const Yj = () => Re.useContext(Pp),
  Kj = ({
    children: e,
    watch: t,
    getValues: a,
    getErrors: i,
    getFieldState: s,
    setError: u,
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
    setFocus: F,
    subscribe: D,
  }) => {
    const B = Re.useMemo(
      () => ({
        watch: t,
        getValues: a,
        getErrors: i,
        getFieldState: s,
        setError: u,
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
        setFocus: F,
        subscribe: D,
      }),
      [c, x, y, i, s, a, S, T, v, _, g, u, F, d, m, D, h, E, t],
    );
    return Re.createElement(
      Pp.Provider,
      { value: B },
      Re.createElement(Np.Provider, { value: B.control }, e),
    );
  },
  S1 = (e, t, a) => {
    if (e && "reportValidity" in e) {
      const i = he(a, t);
      (e.setCustomValidity((i && i.message) || ""), e.reportValidity());
    }
  },
  Cm = (e, t) => {
    for (const a in t.fields) {
      const i = t.fields[a];
      i && i.ref && "reportValidity" in i.ref
        ? S1(i.ref, a, e)
        : i && i.refs && i.refs.forEach((s) => S1(s, a, e));
    }
  },
  _1 = (e, t) => {
    t.shouldUseNativeValidation && Cm(e, t);
    const a = {};
    for (const i in e) {
      const s = he(t.fields, i),
        u = Object.assign(e[i] || {}, {
          ref: s && s.refs ? s.refs[0] : s && s.ref,
        });
      if (Uz(t.names || Object.keys(e), i)) {
        const c = Object.assign({}, he(a, i));
        (et(c, "root", u), et(a, i, c));
      } else et(a, i, u);
    }
    return a;
  },
  Uz = (e, t) => {
    const a = E1(t).replace(/[.*+?^${}()|\\]/g, "\\$&");
    return e.some((i) => E1(i).match(`^${a}\\.\\d+`));
  };
function E1(e) {
  return e.replace(/\[(\d+)]/g, ".$1").replace(/[[\]]/g, "");
}
function Tm() {
  return (
    (Tm = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var a = arguments[t];
            for (var i in a) ({}).hasOwnProperty.call(a, i) && (e[i] = a[i]);
          }
          return e;
        }),
    Tm.apply(null, arguments)
  );
}
function x1(e, t) {
  try {
    var a = e();
  } catch (i) {
    return t(i);
  }
  return a && a.then ? a.then(void 0, t) : a;
}
function Pz(e, t) {
  for (var a = Object.create(null); e.length; ) {
    var i = e[0],
      s = i.code,
      u = i.message,
      c = i.path.join(".");
    if (!a[c])
      if ("unionErrors" in i) {
        var d,
          m,
          h = i.unionErrors.reduce(function (v, _) {
            return _.errors.length < v.errors.length ? _ : v;
          }).errors[0];
        a[c] = {
          message: (d = h?.message) != null ? d : u,
          type: (m = h?.code) != null ? m : s,
        };
      } else a[c] = { message: u, type: s };
    if (
      ("unionErrors" in i &&
        i.unionErrors.forEach(function (v) {
          return v.errors.forEach(function (_) {
            return e.push(_);
          });
        }),
      t)
    ) {
      var y = a[c].types,
        g = y && y[i.code];
      a[c] = Lp(c, t, a, s, g ? [].concat(g, i.message) : i.message);
    }
    e.shift();
  }
  return a;
}
function Fz(e, t) {
  for (
    var a = Object.create(null),
      i = function () {
        var s = e[0],
          u = s.code,
          c = s.message,
          d = s.path.join(".");
        if (!a[d])
          if (s.code === "invalid_union" && s.errors.length > 0) {
            var m,
              h,
              y = s.errors.reduce(function (_, S) {
                return S.length < _.length ? S : _;
              })[0];
            a[d] = {
              message: (m = y?.message) != null ? m : c,
              type: (h = y?.code) != null ? h : u,
            };
          } else a[d] = { message: c, type: u };
        if (
          (s.code === "invalid_union" &&
            s.errors.forEach(function (_) {
              return _.forEach(function (S) {
                return e.push(Tm({}, S, { path: [].concat(s.path, S.path) }));
              });
            }),
          t)
        ) {
          var g = a[d].types,
            v = g && g[s.code];
          a[d] = Lp(d, t, a, u, v ? [].concat(v, s.message) : s.message);
        }
        e.shift();
      };
    e.length;

  )
    i();
  return a;
}
function Bz(e, t, a) {
  if (
    (a === void 0 && (a = {}),
    (function (i) {
      return "_zod" in i && typeof i._zod == "object";
    })(e))
  )
    return function (i, s, u) {
      try {
        return Promise.resolve(
          x1(
            function () {
              function c(m) {
                return (
                  u.shouldUseNativeValidation && Cm({}, u),
                  { errors: {}, values: a.raw ? Object.assign({}, i) : m }
                );
              }
              var d = e;
              return a.mode === "sync"
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
                  errors: _1(
                    Fz(
                      c.issues,
                      !u.shouldUseNativeValidation && u.criteriaMode === "all",
                    ),
                    u,
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
    return function (i, s, u) {
      try {
        return Promise.resolve(
          x1(
            function () {
              return Promise.resolve(
                e[a.mode === "sync" ? "parse" : "parseAsync"](i, t),
              ).then(function (c) {
                return (
                  u.shouldUseNativeValidation && Cm({}, u),
                  { errors: {}, values: a.raw ? Object.assign({}, i) : c }
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
                  errors: _1(
                    Pz(
                      c.errors,
                      !u.shouldUseNativeValidation && u.criteriaMode === "all",
                    ),
                    u,
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
function Dm(e) {
  const t = Object.values(e).filter((i) => typeof i == "number");
  return Object.entries(e)
    .filter(([i, s]) => t.indexOf(+i) === -1)
    .map(([i, s]) => s);
}
function R1(e, t = "|") {
  return e.map((a) => T_(a)).join(t);
}
function Mm(e, t) {
  return typeof t == "bigint" ? t.toString() : t;
}
class Vz {
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
function Fp(e) {
  return new Vz(e);
}
function $z(e) {
  return e == null;
}
function Bp(e) {
  const t = e.startsWith("^") ? 1 : 0,
    a = e.endsWith("$") ? e.length - 1 : e.length;
  return e.slice(t, a);
}
function Hz(e, t) {
  const a = e / t,
    i = Math.round(a),
    s = 4 * Number.EPSILON * Math.max(Math.abs(a), 1);
  return Math.abs(a - i) < s ? 0 : a - i;
}
function Pi(e, t, a) {
  Object.defineProperty(e, t, {
    value: a,
    writable: !0,
    enumerable: !0,
    configurable: !0,
  });
}
function x_(e) {
  const t = Object.getOwnPropertyDescriptor(e, "shape");
  return t?.get ? t.get.raw : t?.value;
}
function fa(e) {
  return x_(e._zod.def) ?? e._zod.def.shape;
}
function R_(e, t, a) {
  Object.defineProperty(e, t, {
    get() {
      const i = a();
      return (Pi(this, t, i), i);
    },
    enumerable: !0,
    configurable: !0,
  });
}
function O_(e, t, a) {
  t in e ? Pi(e, t, a) : (e[t] = a);
}
function ki(e, t, a, i) {
  const s = fa(t);
  for (const u of a) {
    const c = Object.getOwnPropertyDescriptor(s, u);
    c.enumerable &&
      (c.get
        ? R_(e, u, () => {
            const d = t._zod.def.shape[u];
            return i ? i(d, u) : d;
          })
        : O_(e, u, i ? i(c.value, u) : c.value));
  }
}
function Zz(e, t) {
  for (const a of Reflect.ownKeys(t)) {
    const i = Object.getOwnPropertyDescriptor(t, a);
    i.enumerable && (i.get ? R_(e, a, () => t[a]) : O_(e, a, i.value));
  }
}
function Fn(...e) {
  const t = {};
  for (const a of e) {
    const i = Object.getOwnPropertyDescriptors(a);
    Object.assign(t, i);
  }
  return Object.defineProperties({}, t);
}
function Iz(e) {
  return JSON.stringify(e);
}
function qz(e) {
  return e
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
const A_ =
  "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {};
function kc(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
const Gz = Fp(() => {
  if (
    Nr.jitless ||
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
function yl(e) {
  if (kc(e) === !1) return !1;
  const t = e.constructor;
  if (t === void 0 || typeof t != "function") return !0;
  const a = t.prototype;
  return !(
    kc(a) === !1 ||
    Object.prototype.hasOwnProperty.call(a, "isPrototypeOf") === !1
  );
}
function C_(e) {
  return yl(e)
    ? { ...e }
    : Array.isArray(e)
      ? [...e]
      : e instanceof Map
        ? new Map(e)
        : e instanceof Set
          ? new Set(e)
          : e;
}
const Yz = new Set(["string", "number", "symbol"]);
function df(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function Wa(e, t, a) {
  const i = new e._zod.constr(t ?? e._zod.def);
  return ((!t || a?.parent) && (i._zod.parent = e), i);
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
function T_(e) {
  return typeof e == "bigint"
    ? e.toString() + "n"
    : typeof e == "string"
      ? `"${e}"`
      : `${e}`;
}
function Kz(e) {
  return Object.keys(e).filter(
    (t) => e[t]._zod.optin !== void 0 && e[t]._zod.optout === "optional",
  );
}
const D_ = {
    safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
    int32: [-2147483648, 2147483647],
    uint32: [0, 4294967295],
    float32: [-34028234663852886e22, 34028234663852886e22],
    float64: [-Number.MAX_VALUE, Number.MAX_VALUE],
  },
  Qz = {
    int64: [BigInt("-9223372036854775808"), BigInt("9223372036854775807")],
    uint64: [BigInt(0), BigInt("18446744073709551615")],
  };
function Xz(e, t) {
  const a = e._zod.def,
    i = a.checks;
  if (i && i.length > 0)
    throw new Error(
      ".pick() cannot be used on object schemas containing refinements",
    );
  const u = {};
  return (ki(u, e, hf(e, t)), Wa(e, Fn(a, { shape: u, checks: [] })));
}
function hf(e, t) {
  const a = fa(e),
    i = [];
  for (const s of Reflect.ownKeys(t)) {
    if (!Object.getOwnPropertyDescriptor(a, s)?.enumerable)
      throw new Error(`Unrecognized key: "${String(s)}"`);
    t[s] && i.push(s);
  }
  return i;
}
function Jz(e, t) {
  const a = e._zod.def,
    i = a.checks;
  if (i && i.length > 0)
    throw new Error(
      ".omit() cannot be used on object schemas containing refinements",
    );
  const u = new Set(hf(e, t)),
    c = {};
  return (
    ki(
      c,
      e,
      Reflect.ownKeys(fa(e)).filter((d) => !u.has(d)),
    ),
    Wa(e, Fn(a, { shape: c, checks: [] }))
  );
}
function Wz(e, t) {
  if (!yl(t))
    throw new Error("Invalid input to extend: expected a plain object");
  const a = e._zod.def.checks;
  if (a && a.length > 0) {
    const s = fa(e);
    for (const u of Reflect.ownKeys(t))
      if (Object.getOwnPropertyDescriptor(s, u) !== void 0)
        throw new Error(
          "Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.",
        );
  }
  return Wa(e, Fn(e._zod.def, { shape: M_(e, t) }));
}
function M_(e, t) {
  const a = {};
  return (ki(a, e, Reflect.ownKeys(fa(e))), Zz(a, t), a);
}
function e6(e, t) {
  if (!yl(t))
    throw new Error("Invalid input to safeExtend: expected a plain object");
  return Wa(e, Fn(e._zod.def, { shape: M_(e, t) }));
}
function t6(e, t) {
  if (!t?._zod?.def)
    throw new Error(
      "Invalid input to merge: expected an object schema. To merge a plain shape, use `.extend()`.",
    );
  if (e._zod.def.checks?.length)
    throw new Error(
      ".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.",
    );
  const a = {};
  (ki(a, e, Reflect.ownKeys(fa(e))), ki(a, t, Reflect.ownKeys(fa(t))));
  const i = Fn(e._zod.def, {
    shape: a,
    get catchall() {
      return t._zod.def.catchall;
    },
    checks: t._zod.def.checks ?? [],
  });
  return Wa(e, i);
}
function O1(e, t, a, i = "partial") {
  const u = t._zod.def.checks;
  if (u && u.length > 0)
    throw new Error(
      `.${i}() cannot be used on object schemas containing refinements`,
    );
  const d = a ? new Set(hf(t, a)) : void 0,
    m = {};
  return (
    ki(
      m,
      t,
      Reflect.ownKeys(fa(t)),
      e &&
        ((h, y) =>
          d && !d.has(y) ? h : new e({ type: "optional", innerType: h })),
    ),
    Wa(t, Fn(t._zod.def, { shape: m, checks: [] }))
  );
}
function n6(e, t, a) {
  const i = a ? new Set(hf(t, a)) : void 0,
    s = {};
  return (
    ki(s, t, Reflect.ownKeys(fa(t)), (u, c) =>
      i && !i.has(c) ? u : new e({ type: "nonoptional", innerType: u }),
    ),
    Wa(t, Fn(t._zod.def, { shape: s }))
  );
}
function sa(e, t = 0) {
  if (e.aborted === !0) return !0;
  for (let a = t; a < e.issues.length; a++)
    if (e.issues[a]?.continue !== !0) return !0;
  return !1;
}
function r6(e, t = 0) {
  if (e.aborted === !0) return !0;
  for (let a = t; a < e.issues.length; a++)
    if (e.issues[a]?.continue === !1) return !0;
  return !1;
}
function Vp(e, t) {
  return t.map((a) => {
    var i;
    return ((i = a).path ?? (i.path = []), a.path.unshift(e), a);
  });
}
function Js(e) {
  return typeof e == "string" ? e : e?.message;
}
function A1(e) {
  const t = [];
  for (const a of e ?? []) {
    const i = a._zod.def;
    if (!/_(length|size)$|_equals$/.test(i.check)) break;
    const s = i.maximum ?? i.length ?? i.size;
    s >= 0 && t.push([s, a]);
  }
  return t;
}
function Nm(e, t, a) {
  var i;
  for (let s = t; s < e.length; s++) (i = e[s]).schema ?? (i.schema = a);
}
function Ko(e, t, a) {
  var i;
  const s = e.inst?._zod?.traits;
  s?.has("$ZodType") &&
    (s.has("$ZodCheck")
      ? ((i = e).schema ?? (i.schema = e.inst))
      : (e.schema = e.inst));
  const u = e.schema !== e.inst ? e.schema?._zod.def?.error : void 0,
    c = e.message
      ? e.message
      : (Js(e.inst?._zod.def?.error?.(e)) ??
        Js(u?.(e)) ??
        Js(t?.error?.(e)) ??
        Js(a.customError?.(e)) ??
        Js(a.localeError?.(e)) ??
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
const a6 = /[\uD800-\uDBFF]/;
function $p(e) {
  const t = e.length;
  if (!a6.test(e)) return t;
  let a = t;
  for (let i = 0; i < t - 1; i++)
    (e.charCodeAt(i) & 64512) === 55296 &&
      (e.charCodeAt(i + 1) & 64512) === 56320 &&
      (a--, i++);
  return a;
}
function Hp(e) {
  return Array.isArray(e)
    ? "array"
    : typeof e == "string"
      ? "string"
      : "unknown";
}
function i6(e) {
  const t = typeof e;
  switch (t) {
    case "number":
      return Number.isNaN(e) ? "nan" : "number";
    case "object": {
      if (e === null) return "null";
      if (Array.isArray(e)) return "array";
      const a = e;
      if (
        a &&
        Object.getPrototypeOf(a) !== Object.prototype &&
        "constructor" in a &&
        a.constructor
      )
        return a.constructor.name;
    }
  }
  return t;
}
function gl(...e) {
  const [t, a, i] = e;
  return typeof t == "string"
    ? { message: t, code: "custom", input: a, inst: i }
    : { ...t };
}
function o6(e, t) {
  for (const a in t) {
    const i = Object.getOwnPropertyDescriptor(t, a);
    i.get
      ? Object.defineProperty(e, a, { ...i, enumerable: !1 })
      : s6(e, a, i.value);
  }
}
function Qa(e, t, a, i = !0) {
  return (
    Object.defineProperty(e, t, {
      configurable: !0,
      writable: !0,
      enumerable: i,
      value: a,
    }),
    a
  );
}
function Zp(e, t, a) {
  return Qa(e, t, a, !1);
}
function N_(e, t) {
  for (const a in e) {
    const i = e[a];
    Object.defineProperty(t, a, {
      configurable: !0,
      enumerable: !0,
      get() {
        return Qa(this, a, i(this));
      },
      set(s) {
        Qa(this, a, s);
      },
    });
  }
  return t;
}
function s6(e, t, a) {
  Object.defineProperty(e, t, {
    configurable: !0,
    get() {
      return this == null ? a : Qa(this, t, a.bind(this));
    },
    set(i) {
      Qa(this, t, i);
    },
  });
}
function l6(e, t) {
  const a = Object.getPrototypeOf(e);
  return t in a ? void 0 : a;
}
let Qh,
  $a = !1;
const u6 = {
  configurable: !0,
  get() {
    $a = !0;
  },
};
function lt(e, t, a) {
  const i = Object.getPrototypeOf(e._zod);
  if (t in i && Qh !== e._zod) {
    Qh = void 0;
    return;
  }
  ((Qh = e._zod),
    Object.defineProperty(i, t, {
      configurable: !0,
      get() {
        Object.defineProperty(this, t, u6);
        const s = $a;
        $a = !1;
        try {
          const u = a(this);
          return (
            $a
              ? delete this[t]
              : Object.defineProperty(this, t, {
                  configurable: !0,
                  writable: !0,
                  value: u,
                }),
            ($a = $a || s),
            u
          );
        } catch (u) {
          throw (delete this[t], ($a = $a || s), u);
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
function c6(e, t, a, i) {
  const s = l6(e, t);
  s &&
    Object.defineProperty(s, t, {
      configurable: !0,
      get() {
        const u = {
          configurable: !0,
          writable: !0,
          enumerable: i,
          value: void 0,
        };
        return (
          Object.defineProperty(this, t, u),
          (u.value = a(this)),
          Object.defineProperty(this, t, u),
          u.value
        );
      },
      set(u) {
        Object.defineProperty(this, t, {
          configurable: !0,
          writable: !0,
          enumerable: i,
          value: u,
        });
      },
    });
}
const f6 = "~constantCatch";
function d6(e) {
  const t = () => e;
  return ((t[f6] = !0), t);
}
var C1;
const Xh = { value: void 0, enumerable: !1 };
let T1 = "captureStackTrace" in Error ? Error : null;
function h6(e) {
  const t = T1;
  if (t) {
    const a = t.stackTraceLimit;
    if (typeof a == "number") {
      try {
        t.stackTraceLimit = 0;
      } catch {
        return ((T1 = null), new e());
      }
      try {
        return new e();
      } finally {
        t.stackTraceLimit = a;
      }
    }
  }
  return new e();
}
function se(e, t, a, i) {
  const s = {};
  function u(v) {
    ((this.def = v), (this.constr = g), (this.traits = new Set()));
  }
  u.prototype = s;
  const c = a,
    d = c && new WeakSet();
  function m(v, _) {
    if (v._zod) {
      if (v._zod.traits.has(e)) return;
    } else {
      Xh.value = new u(_);
      try {
        Object.defineProperty(v, "_zod", Xh);
      } finally {
        Xh.value = void 0;
      }
    }
    if ((v._zod.traits.add(e), t(v, _), d)) {
      const E = Object.getPrototypeOf(v),
        x = v._zod.constr.prototype;
      let T = E;
      for (; T && T !== x; ) T = Object.getPrototypeOf(T);
      const F = T ?? E;
      d.has(F) || (d.add(F), o6(F, c));
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
    const _ = i?.Parent ? h6(y) : this;
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
class Di extends Error {
  constructor() {
    super(
      "Encountered Promise during synchronous parse. Use .parseAsync() instead.",
    );
  }
}
class z_ extends Error {
  constructor(t) {
    (super(`Encountered unidirectional transform during encode: ${t}`),
      (this.name = "ZodEncodeError"));
  }
}
(C1 = globalThis).__zod_globalConfig ?? (C1.__zod_globalConfig = {});
const Nr = globalThis.__zod_globalConfig;
function ei(e) {
  return (e && Object.assign(Nr, e), Nr);
}
function m6() {
  const e = this._zod;
  return (e.message ?? (e.message = JSON.stringify(e.def, Mm, 2)), e.message);
}
function p6(e) {
  this._zod.message = e;
}
const y6 = { get: m6, set: p6, enumerable: !0, configurable: !0 },
  Jh = { value: void 0, enumerable: !1 },
  D1 = new WeakSet([Object.prototype, Error.prototype]),
  g6 = (e, t) => {
    ((e.name = "$ZodError"),
      (Jh.value = t),
      Object.defineProperty(e, "issues", Jh),
      (Jh.value = void 0),
      Object.defineProperty(e, "message", y6));
    const a = Object.getPrototypeOf(e);
    D1.has(a) ||
      (D1.add(a),
      Object.defineProperty(a, "toString", {
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
  v6 = se("$ZodError", g6);
function b6(e, t, a) {
  return (
    Object.prototype.hasOwnProperty.call(e, t) ||
      (t === "__proto__"
        ? Object.defineProperty(e, t, {
            value: a(),
            writable: !0,
            enumerable: !0,
            configurable: !0,
          })
        : (e[t] = a())),
    e[t]
  );
}
function w6(e, t = (a) => a.message) {
  const a = {},
    i = [];
  for (const s of e.issues)
    s.path.length > 0 ? b6(a, s.path[0], () => []).push(t(s)) : i.push(t(s));
  return { formErrors: i, fieldErrors: a };
}
function S6(e, t = (a) => a.message) {
  const a = { _errors: [] },
    i = (s, u = []) => {
      for (const c of s.issues)
        if (c.code === "invalid_union" && c.errors.length)
          c.errors.map((d) => i({ issues: d }, [...u, ...c.path]));
        else if (c.code === "invalid_key")
          i({ issues: c.issues }, [...u, ...c.path]);
        else if (c.code === "invalid_element")
          i({ issues: c.issues }, [...u, ...c.path]);
        else {
          const d = [...u, ...c.path];
          if (d.length === 0) a._errors.push(t(c));
          else {
            let m = a,
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
  return (i(e), a);
}
function mf(e, t) {
  return { callee: t?.callee ?? e, Err: t?.Err };
}
const Ip = (e) => {
    const t = (a, i, s, u) => {
      const c = s ? { ...s, async: !1 } : { async: !1 },
        d = a._zod.run({ value: i, issues: [] }, c);
      if (d instanceof Promise) throw new Di();
      if (d.issues.length) {
        const m = new (u?.Err ?? e)(d.issues.map((h) => Ko(h, c, ei())));
        throw (A_(m, u?.callee ?? t), m);
      }
      return d.value;
    };
    return t;
  },
  qp = (e) => {
    const t = async (a, i, s, u) => {
      const c = s ? { ...s, async: !0 } : { async: !0 };
      let d = a._zod.run({ value: i, issues: [] }, c);
      if ((d instanceof Promise && (d = await d), d.issues.length)) {
        const m = new (u?.Err ?? e)(d.issues.map((h) => Ko(h, c, ei())));
        throw (A_(m, u?.callee ?? t), m);
      }
      return d.value;
    };
    return t;
  },
  Gp = (e) => (t, a, i) => {
    const s = i ? { ...i, async: !1 } : { async: !1 },
      u = t._zod.run({ value: a, issues: [] }, s);
    if (u instanceof Promise) throw new Di();
    return u.issues.length
      ? k_(e, u.issues, s)
      : { success: !0, data: u.value };
  };
function k_(e, t, a) {
  let i;
  return {
    success: !1,
    get error() {
      return (
        i ||
          ((i = new e(t.map((s) => Ko(s, a, ei())))),
          (t = void 0),
          (a = void 0)),
        i
      );
    },
    set error(s) {
      ((i = s), (t = void 0), (a = void 0));
    },
  };
}
const Yp = (e) => async (t, a, i) => {
    const s = i ? { ...i, async: !0 } : { async: !0 };
    let u = t._zod.run({ value: a, issues: [] }, s);
    return (
      u instanceof Promise && (u = await u),
      u.issues.length ? k_(e, u.issues, s) : { success: !0, data: u.value }
    );
  },
  _6 = Symbol.for("zod.compile.invalid"),
  E6 = Symbol.for("zod.compile.fallback"),
  x6 = (e, t, a) => {
    const i = e._zod.bag.validator;
    if (i !== void 0) {
      if (i(t) !== _6) return !0;
      if (i.definite === !0 && a === void 0) return !1;
    }
    return R6(e, t, a);
  };
function R6(e, t, a) {
  const i = a
      ? { ...a, async: !1, abortEarly: !0 }
      : { async: !1, abortEarly: !0 },
    s = e._zod.bag.fallbackRun;
  let u;
  if (
    (s
      ? ((i[E6] = !0), (u = s({ value: t, issues: [] }, i)))
      : (u = e._zod.run({ value: t, issues: [] }, i)),
    u instanceof Promise)
  )
    throw new Di();
  return u.issues.length === 0;
}
const O6 = async (e, t, a) => {
    const i = a
      ? { ...a, async: !0, abortEarly: !0 }
      : { async: !0, abortEarly: !0 };
    let s = e._zod.run({ value: t, issues: [] }, i);
    return (s instanceof Promise && (s = await s), s.issues.length === 0);
  },
  A6 = (e) => {
    const t = Ip(e),
      a = (i, s, u, c) => {
        const d = u
          ? { ...u, direction: "backward" }
          : { direction: "backward" };
        return t(i, s, d, mf(a, c));
      };
    return a;
  },
  C6 = (e) => {
    const t = Ip(e),
      a = (i, s, u, c) => t(i, s, u, mf(a, c));
    return a;
  },
  T6 = (e) => {
    const t = qp(e),
      a = async (i, s, u, c) => {
        const d = u
          ? { ...u, direction: "backward" }
          : { direction: "backward" };
        return await t(i, s, d, mf(a, c));
      };
    return a;
  },
  D6 = (e) => {
    const t = qp(e),
      a = async (i, s, u, c) => await t(i, s, u, mf(a, c));
    return a;
  },
  M6 = (e) => (t, a, i) => {
    const s = i ? { ...i, direction: "backward" } : { direction: "backward" };
    return Gp(e)(t, a, s);
  },
  N6 = (e) => (t, a, i) => Gp(e)(t, a, i),
  z6 = (e) => async (t, a, i) => {
    const s = i ? { ...i, direction: "backward" } : { direction: "backward" };
    return Yp(e)(t, a, s);
  },
  k6 = (e) => async (t, a, i) => Yp(e)(t, a, i),
  j6 = /^[cC][0-9a-z]{6,}$/,
  L6 = /^[0-9a-z]+$/,
  U6 = /^[0-7][0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{25}$/,
  P6 = /^[0-9a-vA-V]{20}$/,
  F6 = /^[A-Za-z0-9]{27}$/,
  B6 = /^[a-zA-Z0-9_-]{21}$/;
function V6(e) {
  return new RegExp(`^[a-zA-Z0-9_-]{${e}}$`);
}
const $6 =
    /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/,
  H6 =
    /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,
  M1 = (e) =>
    e
      ? new RegExp(
          `^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`,
        )
      : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,
  Z6 =
    /^(?:[A-Za-z0-9_'+\-]+\.)*[A-Za-z0-9_'+\-]*[A-Za-z0-9_+-]@(?:[A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/,
  I6 =
    "^(?=[\\s\\S]*[\\p{Extended_Pictographic}\\p{Regional_Indicator}\\u20E3])[\\p{Extended_Pictographic}\\p{Emoji_Component}]+$";
function q6() {
  return new RegExp(I6, "u");
}
const G6 =
    /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
  Y6 =
    /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/,
  K6 =
    /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,
  Q6 =
    /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
  X6 =
    /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,
  J6 = /^(?:[A-Za-z0-9_-]{4})*(?:[A-Za-z0-9_-]{2,3})?$/,
  W6 = /^https?$/,
  ek = /^\+[1-9]\d{6,14}$/,
  j_ =
    "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))";
function tk(e) {
  return new RegExp(`^${e}$`);
}
const nk = tk(j_);
function zm(e) {
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
function rk(e) {
  return new RegExp(`^${zm(e)}$`);
}
function ak(e) {
  const t = ["Z"];
  e.offset && t.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
  const a = `${zm({ precision: e.precision, seconds: !0 })}(?:${t.join("|")})`,
    i = e.local ? `${a}|${zm({ precision: e.precision })}` : a;
  return new RegExp(`^${j_}T(?:${i})$`);
}
const ik = /^[\s\S]{0,}$/,
  ok = /^-?\d+(?:\.\d+)?$/,
  sk = /^[^A-Z]*$/,
  lk = /^[^a-z]*$/,
  yn = se("$ZodCheck", (e, t) => {
    var a;
    (e._zod ?? (e._zod = {}),
      (e._zod.def = t),
      (a = e._zod).onattach ?? (a.onattach = []));
  }),
  Kp = (e) => {
    const t = e.value;
    return !$z(t) && t.length !== void 0;
  },
  jc = { number: "number", bigint: "bigint", object: "date" },
  L_ = se("$ZodCheckLessThan", (e, t) => {
    yn.init(e, t);
    const a = jc[typeof t.value];
    e._zod.check = (i) => {
      (t.inclusive ? i.value <= t.value : i.value < t.value) ||
        i.issues.push({
          origin: jc[typeof i.value] ?? a,
          code: "too_big",
          maximum: typeof t.value == "object" ? t.value.getTime() : t.value,
          input: i.value,
          inclusive: t.inclusive,
          inst: e,
          continue: !t.abort,
        });
    };
  }),
  U_ = se("$ZodCheckGreaterThan", (e, t) => {
    yn.init(e, t);
    const a = jc[typeof t.value];
    e._zod.check = (i) => {
      (t.inclusive ? i.value >= t.value : i.value > t.value) ||
        i.issues.push({
          origin: jc[typeof i.value] ?? a,
          code: "too_small",
          minimum: typeof t.value == "object" ? t.value.getTime() : t.value,
          input: i.value,
          inclusive: t.inclusive,
          inst: e,
          continue: !t.abort,
        });
    };
  }),
  uk = se("$ZodCheckMultipleOf", (e, t) => {
    (yn.init(e, t),
      (e._zod.check = (a) => {
        if (typeof a.value != typeof t.value)
          throw new Error("Cannot mix number and bigint in multiple_of check.");
        (typeof a.value == "bigint"
          ? t.value !== BigInt(0) && a.value % t.value === BigInt(0)
          : Hz(a.value, t.value) === 0) ||
          a.issues.push({
            origin: typeof a.value,
            code: "not_multiple_of",
            divisor: t.value,
            input: a.value,
            inst: e,
            continue: !t.abort,
          });
      }));
  }),
  ck = se("$ZodCheckNumberFormat", (e, t) => {
    (yn.init(e, t), (t.format = t.format || "float64"));
    const a = t.format?.includes("int"),
      i = a ? "int" : "number",
      [s, u] = D_[t.format];
    e._zod.check = (c) => {
      const d = c.value;
      if (a) {
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
        d > u &&
          c.issues.push({
            origin: "number",
            input: d,
            code: "too_big",
            maximum: u,
            inclusive: !0,
            inst: e,
            continue: !t.abort,
          }));
    };
  }),
  fk = se("$ZodCheckMaxLength", (e, t) => {
    var a;
    (yn.init(e, t),
      (a = e._zod.def).when ?? (a.when = Kp),
      (e._zod.check = (i) => {
        const s = i.value,
          u = s.length;
        if ((typeof s == "string" && u > t.maximum ? $p(s) : u) <= t.maximum)
          return;
        const d = Hp(s);
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
  dk = se("$ZodCheckMinLength", (e, t) => {
    var a;
    (yn.init(e, t),
      (a = e._zod.def).when ?? (a.when = Kp),
      (e._zod.check = (i) => {
        const s = i.value,
          u = s.length;
        if (
          (typeof s == "string" && u >= t.minimum && u < t.minimum * 2
            ? $p(s)
            : u) >= t.minimum
        )
          return;
        const d = Hp(s);
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
  hk = se("$ZodCheckLengthEquals", (e, t) => {
    var a;
    (yn.init(e, t),
      (a = e._zod.def).when ?? (a.when = Kp),
      (e._zod.check = (i) => {
        const s = i.value,
          u = s.length,
          c =
            typeof s == "string" && u >= t.length && u <= t.length * 2
              ? $p(s)
              : u;
        if (c === t.length) return;
        const d = Hp(s),
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
  pf = se("$ZodCheckStringFormat", (e, t) => {
    var a, i;
    (yn.init(e, t),
      t.pattern
        ? ((a = e._zod).check ??
          (a.check = (s) => {
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
  mk = se("$ZodCheckRegex", (e, t) => {
    (pf.init(e, t),
      (e._zod.check = (a) => {
        ((t.pattern.lastIndex = 0),
          !t.pattern.test(a.value) &&
            a.issues.push({
              origin: "string",
              code: "invalid_format",
              format: "regex",
              input: a.value,
              pattern: t.pattern.toString(),
              inst: e,
              continue: !t.abort,
            }));
      }));
  }),
  pk = se("$ZodCheckLowerCase", (e, t) => {
    (t.pattern ?? (t.pattern = sk), pf.init(e, t));
  }),
  yk = se("$ZodCheckUpperCase", (e, t) => {
    (t.pattern ?? (t.pattern = lk), pf.init(e, t));
  }),
  gk = se("$ZodCheckIncludes", (e, t) => {
    yn.init(e, t);
    const a = df(t.includes),
      i = new RegExp(
        typeof t.position == "number" ? `^.{${t.position},}${a}` : a,
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
  vk = se("$ZodCheckStartsWith", (e, t) => {
    yn.init(e, t);
    const a = new RegExp(`^${df(t.prefix)}.*`);
    (t.pattern ?? (t.pattern = a),
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
  bk = se("$ZodCheckEndsWith", (e, t) => {
    yn.init(e, t);
    const a = new RegExp(`.*${df(t.suffix)}$`);
    (t.pattern ?? (t.pattern = a),
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
function N1(e, t, a) {
  e.issues.length && t.issues.push(...Vp(a, e.issues));
}
const wk = se("$ZodCheckProperties", (e, t) => {
    (yn.init(e, t),
      Zp(e, Symbol.iterator, function* () {
        yield e;
      }));
    let a;
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
      a ?? (a = Reflect.ownKeys(t.shape).map((c) => [c, t.shape[c]]));
      const s = i.value;
      let u;
      for (const [c, d] of a) {
        const m = d._zod.run({ value: s[c], issues: [] }, {});
        m instanceof Promise
          ? (u ?? (u = []), u.push(m.then((h) => N1(h, i, c))))
          : N1(m, i, c);
      }
      if (u) return Promise.all(u).then(() => {});
    };
  }),
  Sk = se("$ZodCheckOverwrite", (e, t) => {
    (yn.init(e, t),
      (e._zod.check = (a) => {
        a.value = t.tx(a.value);
      }));
  });
class _k {
  constructor(t = [], a = {}) {
    ((this.content = []),
      (this.indent = 0),
      (this.args = t),
      (this.closed = a));
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
      u = i.map((c) => c.slice(s)).map((c) => " ".repeat(this.indent * 2) + c);
    for (const c of u) this.content.push(c);
  }
  compile() {
    const t = Function,
      a = this?.content ?? [""];
    return new t(
      ...Object.keys(this.closed),
      `return function (${this.args.join(", ")}) {
${a.join(`
`)}
};`,
    )(...Object.values(this.closed));
  }
}
const Ek = { major: 4, minor: 6, patch: 7 },
  Pt = se(
    "$ZodType",
    (e, t) => {
      var a;
      (e ?? (e = {}),
        (e._zod.def = t),
        (e._zod.bag = e._zod.bag || {}),
        (e._zod.version = Ek));
      const i = e._zod.def.checks,
        s = e._zod.traits.has("$ZodCheck")
          ? [e, ...(i ?? [])]
          : i?.length
            ? [...i]
            : [];
      for (const u of s) for (const c of u._zod.onattach) c(e);
      if (s.length === 0)
        ((a = e._zod).deferred ?? (a.deferred = []),
          e._zod.deferred?.push(() => {
            e._zod.run = e._zod.parse;
          }));
      else {
        const u = (d, m, h) => {
            if (d.memo) return d;
            let y = sa(d),
              g;
            for (const v of m) {
              if (v._zod.def.when) {
                if (r6(d) || !v._zod.def.when(d)) continue;
              } else if (y) continue;
              const _ = d.issues.length,
                S = v._zod.check(d);
              if (S instanceof Promise && h?.async === !1) throw new Di();
              if (g || S instanceof Promise)
                g = (g ?? Promise.resolve()).then(async () => {
                  (await S,
                    d.issues.length !== _ &&
                      (Nm(d.issues, _, e), y || (y = sa(d, _))));
                });
              else {
                if (d.issues.length === _) continue;
                (Nm(d.issues, _, e), y || (y = sa(d, _)));
              }
            }
            return g ? g.then(() => d) : d;
          },
          c = (d, m, h) => {
            if (sa(d)) return ((d.aborted = !0), d);
            const y = u(m, s, h);
            if (y instanceof Promise) {
              if (h.async === !1) throw new Di();
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
            if (m.async === !1) throw new Di();
            return h.then((y) => u(y, s, m));
          }
          return u(h, s, m);
        };
      }
    },
    {
      get "~standard"() {
        return Zp(this, "~standard", F_(this));
      },
      set "~standard"(e) {
        Qa(this, "~standard", e);
      },
    },
  ),
  P_ = (e, t) =>
    e.issues.length
      ? { issues: e.issues.map((a) => Ko(a, t, ei())) }
      : { value: e.value };
async function xk(e, t) {
  const a = { async: !0 };
  return P_(await e._zod.run({ value: t, issues: [] }, a), a);
}
function F_(e) {
  return {
    validate: (t) => {
      const a = { async: !1 };
      try {
        const i = e._zod.run({ value: t, issues: [] }, a);
        if (!(i instanceof Promise)) return P_(i, a);
      } catch {}
      return xk(e, t);
    },
    vendor: "zod",
    version: 1,
  };
}
const Qp = se("$ZodString", (e, t) => {
    (Pt.init(e, t),
      (e._zod.pattern = t.pattern ?? ik),
      (e._zod.parse = (a, i) => {
        if (t.coerce)
          try {
            a.value = String(a.value);
          } catch {}
        return (
          typeof a.value == "string" ||
            a.issues.push({
              expected: "string",
              code: "invalid_type",
              input: a.value,
              inst: e,
            }),
          a
        );
      }));
  }),
  St = se("$ZodStringFormat", (e, t) => {
    (pf.init(e, t), Qp.init(e, t));
  }),
  Rk = se("$ZodGUID", (e, t) => {
    (t.pattern ?? (t.pattern = H6), St.init(e, t));
  }),
  Ok = se("$ZodUUID", (e, t) => {
    if (t.version) {
      const i = { v1: 1, v2: 2, v3: 3, v4: 4, v5: 5, v6: 6, v7: 7, v8: 8 }[
        t.version
      ];
      if (i === void 0) throw new Error(`Invalid UUID version: "${t.version}"`);
      t.pattern ?? (t.pattern = M1(i));
    } else t.pattern ?? (t.pattern = M1());
    St.init(e, t);
  }),
  Ak = se("$ZodEmail", (e, t) => {
    (t.pattern ?? (t.pattern = Z6), St.init(e, t));
  }),
  B_ = 1,
  Lc = 2;
function V_(e) {
  try {
    return typeof URL < "u" && typeof URL.canParse == "function"
      ? URL.canParse(e)
      : (new URL(e), !0);
  } catch {
    return !1;
  }
}
function Ck(e, t) {
  return !("normalize" in t) && !("hostname" in t) && !("protocol" in t)
    ? V_(e) || Lc
    : Tk(e, t);
}
function Tk(e, t) {
  if (
    !t.normalize &&
    t.protocol?.source === W6.source &&
    !/^https?:\/\//i.test(e)
  )
    return B_;
  try {
    if (typeof URL < "u") {
      const a = URL;
      if (typeof a.parse == "function") return a.parse(e) ?? Lc;
    }
    return new URL(e);
  } catch {
    return Lc;
  }
}
const Dk = /[\t\n\r]/g;
function z1(e) {
  return e.replace(Dk, "");
}
function Mk(e, t) {
  return ((t.lastIndex = 0), t.test(e.hostname));
}
function Nk(e, t) {
  return (
    (t.lastIndex = 0),
    t.test(e.protocol.endsWith(":") ? e.protocol.slice(0, -1) : e.protocol)
  );
}
const zk = se("$ZodURL", (e, t) => {
    (St.init(e, t),
      (e._zod.check = (a) => {
        try {
          const i = a.value.trim(),
            s = Ck(i, t);
          if (s === B_) {
            a.issues.push({
              code: "invalid_format",
              format: "url",
              note: "Invalid URL format",
              input: a.value,
              inst: e,
              continue: !t.abort,
            });
            return;
          }
          if (s === Lc) {
            a.issues.push({
              code: "invalid_format",
              format: "url",
              input: a.value,
              inst: e,
              continue: !t.abort,
            });
            return;
          }
          if (s === !0) {
            a.value = z1(i);
            return;
          }
          (t.hostname &&
            !Mk(s, t.hostname) &&
            a.issues.push({
              code: "invalid_format",
              format: "url",
              note: "Invalid hostname",
              pattern: t.hostname.source,
              input: a.value,
              inst: e,
              continue: !t.abort,
            }),
            t.protocol &&
              !Nk(s, t.protocol) &&
              a.issues.push({
                code: "invalid_format",
                format: "url",
                note: "Invalid protocol",
                pattern: t.protocol.source,
                input: a.value,
                inst: e,
                continue: !t.abort,
              }),
            (a.value = t.normalize ? s.href : z1(i)));
          return;
        } catch {
          a.issues.push({
            code: "invalid_format",
            format: "url",
            input: a.value,
            inst: e,
            continue: !t.abort,
          });
        }
      }));
  }),
  kk = se("$ZodEmoji", (e, t) => {
    (t.pattern ?? (t.pattern = q6()), St.init(e, t));
  }),
  jk = se("$ZodNanoID", (e, t) => {
    if (t.length !== void 0 && (!Number.isInteger(t.length) || t.length < 1))
      throw new Error(`Invalid nanoid length: ${t.length}`);
    (t.pattern ?? (t.pattern = t.length === void 0 ? B6 : V6(t.length)),
      St.init(e, t));
  }),
  Lk = se("$ZodCUID", (e, t) => {
    (t.pattern ?? (t.pattern = j6), St.init(e, t));
  }),
  Uk = se("$ZodCUID2", (e, t) => {
    (t.pattern ?? (t.pattern = L6), St.init(e, t));
  }),
  Pk = se("$ZodULID", (e, t) => {
    (t.pattern ?? (t.pattern = U6), St.init(e, t));
  }),
  Fk = se("$ZodXID", (e, t) => {
    (t.pattern ?? (t.pattern = P6), St.init(e, t));
  }),
  Bk = se("$ZodKSUID", (e, t) => {
    (t.pattern ?? (t.pattern = F6), St.init(e, t));
  }),
  Vk = se("$ZodISODateTime", (e, t) => {
    (t.pattern ?? (t.pattern = ak(t)), St.init(e, t));
  }),
  $k = se("$ZodISODate", (e, t) => {
    (t.pattern ?? (t.pattern = nk), St.init(e, t));
  }),
  Hk = se("$ZodISOTime", (e, t) => {
    (t.pattern ?? (t.pattern = rk(t)), St.init(e, t));
  }),
  Zk = se("$ZodISODuration", (e, t) => {
    (t.pattern ?? (t.pattern = $6), St.init(e, t));
  }),
  Ik = se("$ZodIPv4", (e, t) => {
    (t.pattern ?? (t.pattern = G6), St.init(e, t));
  }),
  qk = /^[0-9a-fA-F:.]+$/;
function $_(e) {
  return qk.test(e) ? V_(`http://[${e}]`) : !1;
}
const Gk = se("$ZodIPv6", (e, t) => {
    (t.pattern ?? (t.pattern = Y6),
      St.init(e, t),
      (e._zod.check = (a) => {
        $_(a.value) ||
          a.issues.push({
            code: "invalid_format",
            format: "ipv6",
            input: a.value,
            inst: e,
            continue: !t.abort,
          });
      }));
  }),
  Yk = se("$ZodCIDRv4", (e, t) => {
    (t.pattern ?? (t.pattern = K6), St.init(e, t));
  });
function Kk(e) {
  const t = e.split("/");
  if (t.length !== 2) return !1;
  const [a, i] = t;
  if (!i) return !1;
  const s = Number(i);
  return `${s}` !== i || s < 0 || s > 128 ? !1 : $_(a);
}
const Qk = se("$ZodCIDRv6", (e, t) => {
  (t.pattern ?? (t.pattern = Q6),
    St.init(e, t),
    (e._zod.check = (a) => {
      Kk(a.value) ||
        a.issues.push({
          code: "invalid_format",
          format: "cidrv6",
          input: a.value,
          inst: e,
          continue: !t.abort,
        });
    }));
});
function H_(e) {
  if (e === "") return !0;
  if (/\s/.test(e) || e.length % 4 !== 0) return !1;
  try {
    return (atob(e), !0);
  } catch {
    return !1;
  }
}
const Z_ = /^[0-9a-zA-Z+/]*={0,2}$/,
  Xk = se("$ZodBase64", (e, t) => {
    (t.pattern ?? (t.pattern = Z_),
      St.init(e, t),
      (e._zod.check = (a) => {
        H_(a.value) ||
          a.issues.push({
            code: "invalid_format",
            format: "base64",
            input: a.value,
            inst: e,
            continue: !t.abort,
          });
      }));
  }),
  Xp = /^[A-Za-z0-9_-]*$/;
function Jk(e) {
  if (!Xp.test(e)) return !1;
  const t = e.replace(/[-_]/g, (i) => (i === "-" ? "+" : "/")),
    a = t.padEnd(Math.ceil(t.length / 4) * 4, "=");
  return H_(a);
}
const Wk = se("$ZodBase64URL", (e, t) => {
    (t.pattern ?? (t.pattern = Xp),
      St.init(e, t),
      (e._zod.check = (a) => {
        Jk(a.value) ||
          a.issues.push({
            code: "invalid_format",
            format: "base64url",
            input: a.value,
            inst: e,
            continue: !t.abort,
          });
      }));
  }),
  e8 = se("$ZodE164", (e, t) => {
    (t.pattern ?? (t.pattern = ek), St.init(e, t));
  });
function t8(e, t = null) {
  try {
    const a = e.split(".");
    if (a.length !== 3) return !1;
    const [i] = a;
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
const n8 = se("$ZodJWT", (e, t) => {
    (St.init(e, t),
      (e._zod.check = (a) => {
        t8(a.value, t.alg) ||
          a.issues.push({
            code: "invalid_format",
            format: "jwt",
            input: a.value,
            inst: e,
            continue: !t.abort,
          });
      }));
  }),
  I_ = se("$ZodNumber", (e, t) => {
    (Pt.init(e, t),
      (e._zod.pattern = ok),
      (e._zod.parse = (a, i) => {
        if (t.coerce)
          try {
            a.value = Number(a.value);
          } catch {}
        const s = a.value;
        if (typeof s == "number" && !Number.isNaN(s) && Number.isFinite(s))
          return a;
        const u =
          typeof s == "number"
            ? Number.isNaN(s)
              ? "NaN"
              : Number.isFinite(s)
                ? void 0
                : String(s)
            : void 0;
        return (
          a.issues.push({
            expected: "number",
            code: "invalid_type",
            input: s,
            inst: e,
            ...(u ? { received: u } : {}),
          }),
          a
        );
      }));
  }),
  r8 = se("$ZodNumberFormat", (e, t) => {
    (ck.init(e, t), I_.init(e, t));
  }),
  a8 = se("$ZodUnknown", (e, t) => {
    (Pt.init(e, t), (e._zod.parse = (a) => a));
  }),
  i8 = se("$ZodNever", (e, t) => {
    (Pt.init(e, t),
      (e._zod.parse = (a, i) => (
        a.issues.push({
          expected: "never",
          code: "invalid_type",
          input: a.value,
          inst: e,
        }),
        a
      )));
  });
function o8(e, t) {
  const a = A1(e._zod.def.checks);
  if (!a.length) return;
  const i = Math.min(...a.map((u) => u[0])),
    s = e._zod.parse;
  e._zod.parse = (u, c) => {
    const d = t(u.value);
    if (d > i && !c?.skipChecks && c?.direction !== "backward") {
      for (const [m, h] of A1(e._zod.def.checks))
        if (d > m && h._zod.def.when(u)) {
          const y = u.issues.length;
          return (
            h._zod.check(u),
            (u.issues[y].continue = !1),
            Nm(u.issues, y, e),
            u
          );
        }
    }
    return s(u, c);
  };
}
const s8 = (e) => (Array.isArray(e) ? e.length : -1);
function k1(e, t, a) {
  (e.issues.length && t.issues.push(...Vp(a, e.issues)),
    (t.value[a] = e.value));
}
const l8 = se("$ZodArray", (e, t) => {
  Pt.init(e, t);
  const a = Nr.memoizer;
  (a?.attach(e),
    (e._zod.parse = (i, s) => {
      const u = i.value;
      if (!Array.isArray(u))
        return (
          i.issues.push({
            expected: "array",
            code: "invalid_type",
            input: u,
            inst: e,
          }),
          i
        );
      i.value = a ? a.alloc(e, i, Array(u.length), s) : Array(u.length);
      const c = [],
        d = s?.abortEarly;
      for (let m = 0; m < u.length; m++) {
        const h = u[m],
          y = t.element._zod.run({ value: h, issues: [] }, s);
        if (y instanceof Promise) c.push(y.then((g) => k1(g, i, m)));
        else if ((k1(y, i, m), d && y.issues.length !== 0 && sa(y))) break;
      }
      return c.length ? Promise.all(c).then(() => i) : i;
    }),
    o8(e, s8));
});
function Uc(e, t, a, i, s, u) {
  const c = a in i,
    d = u === "optional";
  if (!(!c && d && s === "optional")) {
    if (e.issues.length) {
      if (s !== void 0 && d && !c) return;
      t.issues.push(...Vp(a, e.issues));
    }
    if (!c && s === void 0) {
      e.issues.length ||
        t.issues.push({
          code: "invalid_type",
          expected: "nonoptional",
          input: void 0,
          path: [a],
        });
      return;
    }
    e.value === void 0
      ? (c || (s === "defaulted" && !d)) && (t.value[a] = void 0)
      : (t.value[a] = e.value);
  }
}
const u8 = [];
function q_(e) {
  const t = Object.keys(e.shape),
    a = Object.getOwnPropertySymbols(e.shape),
    i = a.length ? a : u8,
    s = i.length ? [...t, ...i] : t;
  for (const c of s)
    if (!e.shape?.[c]?._zod?.traits?.has("$ZodType"))
      throw new Error(
        `Invalid element at key "${String(c)}": expected a Zod schema`,
      );
  const u = Kz(e.shape);
  return {
    ...e,
    allKeys: s,
    symbolKeys: i,
    keySet: new Set(t),
    numKeys: t.length,
    optionalKeys: new Set(u),
  };
}
function G_(e, t, a, i, s, u, c) {
  const d = [],
    m = s.keySet,
    h = s.catchall._zod,
    y = h.def.type,
    g = h.optin,
    v = h.optout;
  let _ = 0;
  for (const S in t) {
    if (c && a.issues.length !== _) {
      if (sa(a, _)) break;
      _ = a.issues.length;
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
      ? e.push(E.then((x) => Uc(x, a, S, t, g, v)))
      : Uc(E, a, S, t, g, v);
  }
  return (
    d.length &&
      a.issues.push({
        code: "unrecognized_keys",
        keys: d,
        input: t,
        inst: u,
        continue: !0,
      }),
    e.length ? Promise.all(e).then(() => a) : a
  );
}
const c8 = se("$ZodObject", (e, t) => {
    Pt.init(e, t);
    const a = Object.getOwnPropertyDescriptor(t, "shape"),
      i = a?.get ? a.get.raw : (t.shape ?? {});
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
    const s = Fp(() => q_(t));
    lt(e, "propValues", (h) => {
      const y = h.def.shape,
        g = {};
      for (const v in y) {
        const _ = y[v]._zod;
        if (_.values) {
          Object.prototype.hasOwnProperty.call(g, v) || Pi(g, v, new Set());
          for (const S of _.values) g[v].add(S);
          _.optin !== void 0 && g[v].add(void 0);
        }
      }
      return g;
    });
    const u = kc,
      c = t.catchall;
    let d;
    const m = Nr.memoizer;
    (m?.attach(e),
      (e._zod.parse = (h, y) => {
        d ?? (d = s.value);
        const g = h.value;
        if (!u(g))
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
            if (sa(h, E)) break;
            E = h.issues.length;
          }
          if (x === "__proto__") continue;
          const T = _[x],
            F = T._zod.optin,
            D = T._zod.optout,
            B = T._zod.run({ value: g[x], issues: [] }, y);
          B instanceof Promise
            ? v.push(B.then((L) => Uc(L, h, x, g, F, D)))
            : Uc(B, h, x, g, F, D);
        }
        return c
          ? G_(v, g, h, y, s.value, e, S === !0)
          : v.length
            ? Promise.all(v).then(() => h)
            : h;
      }));
  }),
  f8 = se("$ZodObjectJIT", (e, t) => {
    c8.init(e, t);
    const a = e._zod.parse,
      i = Fp(() => q_(t)),
      s = Nr.memoizer,
      u = (_) => {
        const S = i.value,
          E = S.symbolKeys,
          x = new _k(["payload", "ctx"], {
            shape: _,
            inst: e,
            memo: s,
            syms: E,
          }),
          T = (L) =>
            `shape[${L}]._zod.run({ value: input[${L}], issues: [] }, ctx)`,
          F = (L, C) => `
          let ${L}_ab = false;
          for (let i = 0; i < ${L}.issues.length; i++) {
            const iss = ${L}.issues[i];
            iss.path = iss.path ? [${C}, ...iss.path] : [${C}];
            payload.issues.push(iss);
            if (iss.continue !== true) ${L}_ab = true;
          }
          if (${L}_ab && ctx && ctx.abortEarly) {
            payload.value = newResult;
            return payload;
          }`;
        x.write("const input = payload.value;");
        const D = Object.create(null);
        let B = 0;
        for (const L of S.allKeys) D[L] = `key_${B++}`;
        x.write(
          s
            ? "const newResult = memo.alloc(inst, payload, {}, ctx);"
            : "const newResult = {};",
        );
        for (const L of S.allKeys) {
          if (L === "__proto__") continue;
          const C = D[L],
            Y = typeof L == "symbol" ? `syms[${E.indexOf(L)}]` : Iz(L),
            Q = `${Y} in input`,
            me = _[L],
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
          if (${C}.issues.length) {${F(C, Y)}
          }

          if (${Se}) {
            newResult[${Y}] = ${C}.value;
          }
        }

      `);
          } else
            we
              ? (x.write(`
        if (${C}.issues.length) {${F(C, Y)}
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
        if (${C}.issues.length) {${F(C, Y)}
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
    const d = kc,
      m = !Nr.jitless,
      y = m && Gz.value,
      g = t.catchall;
    let v;
    e._zod.parse = (_, S) => {
      v ?? (v = i.value);
      const E = _.value;
      return d(E)
        ? m && y && S?.async === !1 && S.jitless !== !0
          ? (c || (c = u(t.shape)),
            (_ = c(_, S)),
            g ? G_([], E, _, S, v, e, S?.abortEarly === !0) : _)
          : a(_, S)
        : (_.issues.push({
            expected: "object",
            code: "invalid_type",
            input: E,
            inst: e,
          }),
          _);
    };
  });
function j1(e, t, a, i) {
  for (const u of e) if (u.issues.length === 0) return ((t.value = u.value), t);
  const s = e.filter((u) => !sa(u));
  return s.length === 1
    ? ((t.value = s[0].value), s[0])
    : (t.issues.push({
        code: "invalid_union",
        input: t.value,
        inst: a,
        errors: e.map((u) => u.issues.map((c) => Ko(c, i, ei()))),
      }),
      t);
}
const d8 = se("$ZodUnion", (e, t) => {
    (Pt.init(e, t),
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
          const s = i.def.options.map((u) => u._zod.pattern);
          return new RegExp(`^(${s.map((u) => Bp(u.source)).join("|")})$`);
        }
      }));
    const a = t.options.length === 1 ? t.options[0]._zod.run : null;
    e._zod.parse = (i, s) => {
      if (a) return a(i, s);
      let u = !1;
      const c = [];
      for (const d of t.options) {
        const m = d._zod.run({ value: i.value, issues: [] }, s);
        if (m instanceof Promise) (c.push(m), (u = !0));
        else {
          if (m.issues.length === 0) return m;
          c.push(m);
        }
      }
      return u ? Promise.all(c).then((d) => j1(d, i, e, s)) : j1(c, i, e, s);
    };
  }),
  h8 = se("$ZodIntersection", (e, t) => {
    (Pt.init(e, t),
      (e._zod.parse = (a, i) => {
        const s = a.value,
          u = t.left._zod.run({ value: s, issues: [] }, i),
          c = t.right._zod.run({ value: s, issues: [] }, i);
        return u instanceof Promise || c instanceof Promise
          ? Promise.all([u, c]).then(([m, h]) => L1(a, m, h))
          : L1(a, u, c);
      }));
  });
function km(e, t) {
  if (e === t) return { valid: !0, data: e };
  if (e instanceof Date && t instanceof Date && +e == +t)
    return { valid: !0, data: e };
  if (yl(e) && yl(t)) {
    const a = Object.keys(t),
      i = Object.keys(e).filter((u) => a.indexOf(u) !== -1),
      s = { ...e, ...t };
    Object.prototype.hasOwnProperty.call(s, "__proto__") && delete s.__proto__;
    for (const u of i) {
      if (u === "__proto__") continue;
      const c = km(e[u], t[u]);
      if (!c.valid)
        return { valid: !1, mergeErrorPath: [u, ...c.mergeErrorPath] };
      s[u] = c.data;
    }
    return { valid: !0, data: s };
  }
  if (Array.isArray(e) && Array.isArray(t)) {
    if (e.length !== t.length) return { valid: !1, mergeErrorPath: [] };
    const a = [];
    for (let i = 0; i < e.length; i++) {
      const s = e[i],
        u = t[i],
        c = km(s, u);
      if (!c.valid)
        return { valid: !1, mergeErrorPath: [i, ...c.mergeErrorPath] };
      a.push(c.data);
    }
    return { valid: !0, data: a };
  }
  return { valid: !1, mergeErrorPath: [] };
}
function L1(e, t, a) {
  const i = new Map();
  let s;
  const u = new Map(),
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
        (u.has(v) || u.set(v, h), (g = [v]));
      } else return !1;
      for (const v of g) (i.has(v) || i.set(v, {}), (i.get(v)[y] = !0));
      return !0;
    };
  for (const h of t.issues) c(h, "l") || e.issues.push(h);
  for (const h of a.issues) c(h, "r") || e.issues.push(h);
  const d = [...i].filter(([, h]) => h.l && h.r).map(([h]) => h);
  if (d.length) {
    const h = s ? d.filter((y) => s.keys.includes(y)) : [];
    h.length && e.issues.push({ ...s, keys: h });
    for (const y of d) !h.includes(y) && u.has(y) && e.issues.push(u.get(y));
  }
  const m = km(t.value, a.value);
  if (!m.valid) {
    if (sa(e)) return e;
    throw new Error(
      `Unmergable intersection. Error path: ${JSON.stringify(m.mergeErrorPath)}`,
    );
  }
  return ((e.value = m.data), e);
}
const m8 = se("$ZodEnum", (e, t) => {
    Pt.init(e, t);
    const a = Dm(t.entries),
      i = new Set(a);
    ((e._zod.values = i),
      lt(e, "pattern", (s) => {
        const u = Dm(s.def.entries).filter((c) => Yz.has(typeof c));
        return new RegExp(
          u.length
            ? `^(${u.map((c) => df(c.toString())).join("|")})$`
            : "^[^\\s\\S]$",
        );
      }),
      (e._zod.parse = (s, u) => {
        const c = s.value;
        return (
          i.has(c) ||
            s.issues.push({
              code: "invalid_value",
              values: a,
              input: c,
              inst: e,
            }),
          s
        );
      }));
  }),
  p8 = se("$ZodTransform", (e, t) => {
    (Pt.init(e, t),
      (e._zod.optin = "optional"),
      Nr.memoizer?.guard(e),
      (e._zod.parse = (a, i) => {
        if (i.direction === "backward") throw new z_(e.constructor.name);
        const s = t.transform(a.value, a);
        if (i.async)
          return (s instanceof Promise ? s : Promise.resolve(s)).then(
            (c) => ((a.value = c), a),
          );
        if (s instanceof Promise) throw new Di();
        return ((a.value = s), a);
      }));
  });
function U1(e, t) {
  return ((e.value = t.issues.length ? void 0 : t.value), e);
}
const Y_ = se("$ZodOptional", (e, t) => {
    (Pt.init(e, t),
      lt(e, "optin", (a) =>
        a.def.innerType._zod.optin === "defaulted" ? "defaulted" : "optional",
      ),
      (e._zod.optout = "optional"),
      lt(e, "values", (a) => {
        const i = a.def.innerType._zod.values;
        return i ? new Set([...i, void 0]) : void 0;
      }),
      lt(e, "pattern", (a) => {
        const i = a.def.innerType._zod.pattern;
        return i ? new RegExp(`^(${Bp(i.source)})?$`) : void 0;
      }),
      (e._zod.parse = (a, i) => {
        if (a.value === void 0) {
          if (t.innerType._zod.optin !== "defaulted") return a;
          const s = t.innerType._zod.run({ value: a.value, issues: [] }, i);
          return s instanceof Promise ? s.then((u) => U1(a, u)) : U1(a, s);
        }
        return t.innerType._zod.run(a, i);
      }));
  }),
  y8 = se("$ZodExactOptional", (e, t) => {
    (Y_.init(e, t),
      lt(e, "values", (a) => a.def.innerType._zod.values),
      lt(e, "pattern", (a) => a.def.innerType._zod.pattern),
      (e._zod.parse = (a, i) => t.innerType._zod.run(a, i)));
  }),
  g8 = se("$ZodNullable", (e, t) => {
    (Pt.init(e, t),
      lt(e, "optin", (a) => a.def.innerType._zod.optin),
      lt(e, "optout", (a) => a.def.innerType._zod.optout),
      lt(e, "pattern", (a) => {
        const i = a.def.innerType._zod.pattern;
        return i ? new RegExp(`^(${Bp(i.source)}|null)$`) : void 0;
      }),
      lt(e, "values", (a) =>
        a.def.innerType._zod.values
          ? new Set([...a.def.innerType._zod.values, null])
          : void 0,
      ),
      (e._zod.parse = (a, i) =>
        a.value === null ? a : t.innerType._zod.run(a, i)));
  }),
  v8 = se("$ZodDefault", (e, t) => {
    (Pt.init(e, t),
      (e._zod.optin = "defaulted"),
      lt(e, "values", (a) => a.def.innerType._zod.values),
      (e._zod.parse = (a, i) => {
        if (i.direction === "backward") return t.innerType._zod.run(a, i);
        if (a.value === void 0) return ((a.value = t.defaultValue), a);
        const s = t.innerType._zod.run(a, i);
        return s instanceof Promise ? s.then((u) => P1(u, t)) : P1(s, t);
      }));
  });
function P1(e, t) {
  return (e.value === void 0 && (e.value = t.defaultValue), e);
}
const b8 = se("$ZodPrefault", (e, t) => {
    (Pt.init(e, t),
      (e._zod.optin = "defaulted"),
      lt(e, "values", (a) => a.def.innerType._zod.values),
      (e._zod.parse = (a, i) => (
        i.direction === "backward" ||
          (a.value === void 0 && (a.value = t.defaultValue)),
        t.innerType._zod.run(a, i)
      )));
  }),
  w8 = se("$ZodNonOptional", (e, t) => {
    (Pt.init(e, t),
      lt(e, "values", (a) => {
        const i = a.def.innerType._zod.values;
        return i ? new Set([...i].filter((s) => s !== void 0)) : void 0;
      }),
      (e._zod.parse = (a, i) => {
        const s = t.innerType._zod.run(a, i);
        return s instanceof Promise ? s.then((u) => F1(u, e)) : F1(s, e);
      }));
  });
function F1(e, t) {
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
function B1(e, t, a, i) {
  return t.issues.length
    ? ((e.value = a.catchValue({
        ...t,
        value: e.value,
        error: { issues: t.issues.map((s) => Ko(s, i, ei())) },
        input: e.value,
      })),
      e)
    : ((e.value = t.value), t.memo && (e.memo = !0), e);
}
const S8 = se("$ZodCatch", (e, t) => {
    (Pt.init(e, t),
      lt(e, "optin", (a) =>
        a.def.innerType._zod.optin === "defaulted" ? "defaulted" : "optional",
      ),
      lt(e, "optout", (a) => a.def.innerType._zod.optout),
      lt(e, "values", (a) => a.def.innerType._zod.values),
      (e._zod.parse = (a, i) => {
        if (i.direction === "backward") return t.innerType._zod.run(a, i);
        const s = t.innerType._zod.run({ value: a.value, issues: [] }, i);
        return s instanceof Promise
          ? s.then((u) => B1(a, u, t, i))
          : B1(a, s, t, i);
      }));
  }),
  _8 = se("$ZodPipe", (e, t) => {
    (Pt.init(e, t),
      lt(e, "values", (a) => a.def.in._zod.values),
      lt(e, "optin", (a) => a.def.in._zod.optin),
      lt(e, "optout", (a) => a.def.out._zod.optout),
      lt(e, "propValues", (a) => a.def.in._zod.propValues),
      (e._zod.parse = (a, i) => {
        if (i.direction === "backward") {
          const u = t.out._zod.run(a, i);
          return u instanceof Promise
            ? u.then((c) => tc(c, t.in, i))
            : tc(u, t.in, i);
        }
        const s = t.in._zod.run(a, i);
        return s instanceof Promise
          ? s.then((u) => tc(u, t.out, i))
          : tc(s, t.out, i);
      }));
  });
function tc(e, t, a) {
  return e.issues.some((i) => i.code !== "unrecognized_keys")
    ? ((e.aborted = !0), e)
    : t._zod.run({ value: e.value, issues: e.issues }, a);
}
const E8 = se("$ZodReadonly", (e, t) => {
  (Pt.init(e, t),
    lt(e, "propValues", (a) => a.def.innerType._zod.propValues),
    lt(e, "values", (a) => a.def.innerType._zod.values),
    lt(e, "optin", (a) => a.def.innerType?._zod?.optin),
    lt(e, "optout", (a) => a.def.innerType?._zod?.optout),
    (e._zod.parse = (a, i) => {
      if (i.direction === "backward") return t.innerType._zod.run(a, i);
      const s = t.innerType._zod.run(a, i);
      return s instanceof Promise ? s.then(V1) : V1(s);
    }));
});
function V1(e) {
  return (e.memo || (e.value = Object.freeze(e.value)), e);
}
const x8 = se("$ZodCustom", (e, t) => {
  (yn.init(e, t),
    Pt.init(e, t),
    (e._zod.parse = (a, i) => a),
    (e._zod.check = (a) => {
      const i = a.value,
        s = t.fn(i);
      if (s instanceof Promise) return s.then((u) => $1(u, a, i, e));
      $1(s, a, i, e);
    }));
});
function $1(e, t, a, i) {
  if (!e) {
    const s = {
      code: "custom",
      input: a,
      inst: i,
      path: [...(i._zod.def.path ?? [])],
      continue: !i._zod.def.abort,
    };
    (i._zod.def.params && (s.params = i._zod.def.params), t.issues.push(gl(s)));
  }
}
class R8 extends Error {
  constructor() {
    (super("Cannot parse a reference cycle that closes through a transform"),
      (this.name = "ZodCyclicError"));
  }
}
const jm = "~memo",
  H1 = [];
function K_(e) {
  return e !== null && typeof e == "object";
}
function Wh(e) {
  return e.map((t) => (t.path ? { ...t, path: t.path.slice() } : { ...t }));
}
const Q_ = new WeakMap(),
  nl = 0,
  vc = 1,
  il = 2;
function bc(e, t, a) {
  const i = Q_.get(e);
  if (i !== void 0) return i ? il : nl;
  if (t.has(e)) return il;
  t.add(e);
  let s = nl;
  const u = (y) => {
      if (s !== il && y?._zod) {
        const g = bc(y, t);
        g > s && (s = g);
      }
    },
    c = (y, g) => {
      let v = nl;
      for (const _ of Reflect.ownKeys(y)) {
        const S = Object.getOwnPropertyDescriptor(y, _);
        if (!S.enumerable) continue;
        const E = S.get ? vc : S.value?._zod ? bc(S.value, t) : nl;
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
      const y = x_(m);
      (d(y ? c(y) : vc), u(m.catchall));
      break;
    }
    case "array":
      u(m.element);
      break;
    case "tuple":
      for (const y of m.items) u(y);
      u(m.rest);
      break;
    case "record":
    case "map":
      (u(m.keyType), u(m.valueType));
      break;
    case "set":
      u(m.valueType);
      break;
    case "union":
      for (const y of m.options) u(y);
      break;
    case "intersection":
      (u(m.left), u(m.right));
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
      u(m.innerType);
      break;
    case "pipe":
      (u(m.in), u(m.out));
      break;
    case "function":
      (u(m.input), u(m.output));
      break;
    case "lazy": {
      const y = m._cachedInner ?? void 0;
      d(y ? bc(y, t) : vc);
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
          if (v._zod) u(v);
          else if (Array.isArray(v)) for (const _ of v) u(_);
        }
      }
  }
  return (t.delete(e), O8(e, s));
}
function O8(e, t) {
  return (t !== vc && Q_.set(e, t === il), t);
}
function A8(e, t) {
  let a = e.buckets.get(t);
  return (a || ((a = new WeakMap()), e.buckets.set(t, a)), a);
}
let nc;
const rc = [],
  C8 = {
    alloc(e, t, a) {
      const i = nc;
      if (!i) return a;
      nc = void 0;
      const s = { value: a, issues: null };
      return (i.set(t.value, s), rc.push(s), a);
    },
    guard(e) {
      var t;
      ((t = e._zod).deferred ?? (t.deferred = []),
        e._zod.deferred.push(() => {
          const a = e._zod.parse,
            i = (s, u) => {
              if (u.direction !== "backward" && D8(u, s.value)) throw new R8();
              return a(s, u);
            };
          ((e._zod.parse = i), e._zod.run === a && (e._zod.run = i));
        }));
    },
    attach(e) {
      var t;
      let a,
        i = !1,
        s,
        u;
      ((t = e._zod).deferred ?? (t.deferred = []),
        e._zod.deferred.push(() => {
          const c = e._zod.parse,
            d = (m, h) => {
              if (a === void 0) {
                const T = bc(e, new Set());
                if (T === nl)
                  return (
                    (e._zod.parse = c),
                    e._zod.run === d && (e._zod.run = c),
                    c(m, h)
                  );
                T === il || i ? (a = !0) : (i = !0);
              }
              const y = m.value;
              if (!K_(y)) return c(m, h);
              let g = h[jm];
              g ||
                ((g = { buckets: new WeakMap(), backEdges: void 0 }),
                (h[jm] = g));
              let v;
              s === h ? (v = u) : ((v = A8(g, e)), (s = h), (u = v));
              const _ = v.get(y);
              if (_)
                return (
                  (m.value = _.value),
                  _.issues
                    ? _.issues.length && m.issues.push(...Wh(_.issues))
                    : ((m.memo = !0),
                      g.backEdges ?? (g.backEdges = new WeakSet()),
                      g.backEdges.add(_.value)),
                  m
                );
              nc = v;
              const S = rc.length,
                E = c(m, h);
              nc = void 0;
              const x = rc.length > S ? rc.pop() : void 0;
              return E instanceof Promise
                ? E.then(
                    (T) => (
                      x && (x.issues = T.issues.length ? Wh(T.issues) : H1),
                      T
                    ),
                  )
                : (x && (x.issues = E.issues.length ? Wh(E.issues) : H1), E);
            };
          ((e._zod.parse = d), e._zod.run === c && (e._zod.run = d));
        }));
    },
  };
function T8() {
  return C8;
}
function D8(e, t) {
  const a = e[jm]?.backEdges;
  return a !== void 0 && K_(t) && a.has(t);
}
const M8 = () => {
  const e = {
    string: { unit: "characters", verb: "to have" },
    file: { unit: "bytes", verb: "to have" },
    array: { unit: "items", verb: "to have" },
    set: { unit: "items", verb: "to have" },
    map: { unit: "entries", verb: "to have" },
  };
  function t(u) {
    return e[u] ?? null;
  }
  const a = {
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
  function s(u, c) {
    return u === "number" && typeof c == "number" && !Number.isFinite(c)
      ? String(c)
      : (i[u] ?? u);
  }
  return (u) => {
    switch (u.code) {
      case "invalid_type": {
        const c = s(u.expected),
          d = i6(u.input),
          m = s(d, u.input);
        return `Invalid input: expected ${c}, received ${m}`;
      }
      case "invalid_value":
        return u.values.length === 1
          ? `Invalid input: expected ${T_(u.values[0])}`
          : `Invalid option: expected one of ${R1(u.values, "|")}`;
      case "too_big": {
        const c = u.exact ? "exactly " : u.inclusive ? "<=" : "<",
          d = t(u.origin);
        return d
          ? `Too big: expected ${u.origin ?? "value"} to have ${c}${u.maximum.toString()} ${d.unit ?? "elements"}`
          : `Too big: expected ${u.origin ?? "value"} to be ${c}${u.maximum.toString()}`;
      }
      case "too_small": {
        const c = u.exact ? "exactly " : u.inclusive ? ">=" : ">",
          d = t(u.origin);
        return d
          ? `Too small: expected ${u.origin} to have ${c}${u.minimum.toString()} ${d.unit}`
          : `Too small: expected ${u.origin} to be ${c}${u.minimum.toString()}`;
      }
      case "invalid_format": {
        const c = u;
        return c.format === "starts_with"
          ? `Invalid string: must start with "${c.prefix}"`
          : c.format === "ends_with"
            ? `Invalid string: must end with "${c.suffix}"`
            : c.format === "includes"
              ? `Invalid string: must include "${c.includes}"`
              : c.format === "regex"
                ? `Invalid string: must match pattern ${c.pattern}`
                : `Invalid ${a[c.format] ?? u.format}`;
      }
      case "not_multiple_of":
        return `Invalid number: must be a multiple of ${u.divisor}`;
      case "unrecognized_keys":
        return `Unrecognized key${u.keys.length > 1 ? "s" : ""}: ${R1(u.keys, ", ")}`;
      case "invalid_key":
        return `Invalid key in ${u.origin}`;
      case "invalid_union":
        return u.options && Array.isArray(u.options) && u.options.length > 0
          ? `Invalid discriminator value. Expected ${u.options.map((d) => `'${d}'`).join(" | ")}`
          : u.inclusive === !1
            ? "Invalid input: more than one option matched"
            : "Invalid input";
      case "invalid_element":
        return `Invalid value in ${u.origin}`;
      default:
        return "Invalid input";
    }
  };
};
function N8() {
  return { localeError: M8() };
}
var Z1;
class z8 {
  constructor() {
    ((this._map = new WeakMap()), (this._idmap = new Map()));
  }
  add(t, ...a) {
    const i = a[0];
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
    const a = this._map.get(t);
    return (
      a && typeof a == "object" && "id" in a && this._idmap.delete(a.id),
      this._map.delete(t),
      this
    );
  }
  get(t) {
    const a = t._zod.parent;
    if (a) {
      const i = { ...(this.get(a) ?? {}) };
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
function k8() {
  return new z8();
}
(Z1 = globalThis).__zod_globalRegistry ?? (Z1.__zod_globalRegistry = k8());
const rl = globalThis.__zod_globalRegistry;
function X_(e) {
  return (e.checks && (e.checks = [...e.checks]), e);
}
function j8(e, t) {
  return new e(X_({ type: "string", ...ze(t) }));
}
function L8(e, t) {
  return new e({
    type: "string",
    format: "email",
    check: "string_format",
    abort: !1,
    ...ze(t),
  });
}
function U8(e, t) {
  return new e({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: !1,
    ...ze(t),
  });
}
function P8(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    ...ze(t),
  });
}
function F8(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v4",
    ...ze(t),
  });
}
function B8(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v6",
    ...ze(t),
  });
}
function V8(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v7",
    ...ze(t),
  });
}
function $8(e, t) {
  return new e({
    type: "string",
    format: "url",
    check: "string_format",
    abort: !1,
    ...ze(t),
  });
}
function H8(e, t) {
  return new e({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: !1,
    ...ze(t),
  });
}
function Z8(e, t) {
  return new e({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: !1,
    ...ze(t),
  });
}
function I8(e, t) {
  return new e({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: !1,
    ...ze(t),
  });
}
function q8(e, t) {
  return new e({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: !1,
    ...ze(t),
  });
}
function G8(e, t) {
  return new e({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: !1,
    ...ze(t),
  });
}
function Y8(e, t) {
  return new e({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: !1,
    ...ze(t),
  });
}
function K8(e, t) {
  return new e({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: !1,
    ...ze(t),
  });
}
function Q8(e, t) {
  return new e({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: !1,
    ...ze(t),
  });
}
function X8(e, t) {
  return new e({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: !1,
    ...ze(t),
  });
}
function J8(e, t) {
  return new e({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: !1,
    ...ze(t),
  });
}
function W8(e, t) {
  return new e({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: !1,
    ...ze(t),
  });
}
function e7(e, t) {
  return new e({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: !1,
    ...ze(t),
  });
}
function t7(e, t) {
  return new e({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: !1,
    ...ze(t),
  });
}
function n7(e, t) {
  return new e({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: !1,
    ...ze(t),
  });
}
function r7(e, t) {
  return new e({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: !1,
    ...ze(t),
  });
}
function a7(e, t) {
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
function i7(e, t) {
  return new e({
    type: "string",
    format: "date",
    check: "string_format",
    ...ze(t),
  });
}
function o7(e, t) {
  return new e({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...ze(t),
  });
}
function s7(e, t) {
  return new e({
    type: "string",
    format: "duration",
    check: "string_format",
    ...ze(t),
  });
}
function l7(e, t) {
  return new e(X_({ type: "number", checks: [], ...ze(t) }));
}
function u7(e, t) {
  return new e({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "safeint",
    ...ze(t),
  });
}
function c7(e) {
  return new e({ type: "unknown" });
}
function f7(e, t) {
  return new e({ type: "never", ...ze(t) });
}
function I1(e, t) {
  return new L_({ check: "less_than", ...ze(t), value: e, inclusive: !1 });
}
function em(e, t) {
  return new L_({ check: "less_than", ...ze(t), value: e, inclusive: !0 });
}
function q1(e, t) {
  return new U_({ check: "greater_than", ...ze(t), value: e, inclusive: !1 });
}
function tm(e, t) {
  return new U_({ check: "greater_than", ...ze(t), value: e, inclusive: !0 });
}
function G1(e, t) {
  return new uk({ check: "multiple_of", ...ze(t), value: e });
}
function J_(e, t) {
  return new fk({ check: "max_length", ...ze(t), maximum: e });
}
function Pc(e, t) {
  return new dk({ check: "min_length", ...ze(t), minimum: e });
}
function W_(e, t) {
  return new hk({ check: "length_equals", ...ze(t), length: e });
}
function d7(e, t) {
  return new mk({
    check: "string_format",
    format: "regex",
    ...ze(t),
    pattern: e,
  });
}
function h7(e) {
  return new pk({ check: "string_format", format: "lowercase", ...ze(e) });
}
function m7(e) {
  return new yk({ check: "string_format", format: "uppercase", ...ze(e) });
}
function p7(e, t) {
  return new gk({
    check: "string_format",
    format: "includes",
    ...ze(t),
    includes: e,
  });
}
function y7(e, t) {
  return new vk({
    check: "string_format",
    format: "starts_with",
    ...ze(t),
    prefix: e,
  });
}
function g7(e, t) {
  return new bk({
    check: "string_format",
    format: "ends_with",
    ...ze(t),
    suffix: e,
  });
}
function v7(e, t) {
  return new wk({ check: "properties", shape: e, ...ze(t) });
}
function Qo(e) {
  return new Sk({ check: "overwrite", tx: e });
}
function b7(e) {
  return Qo((t) => t.normalize(e));
}
function w7() {
  return Qo((e) => e.trim());
}
function S7() {
  return Qo((e) => e.toLowerCase());
}
function _7() {
  return Qo((e) => e.toUpperCase());
}
function E7() {
  return Qo((e) => qz(e));
}
function x7(e, t, a) {
  return new e({ type: "array", element: t, ...ze(a) });
}
function R7(e, t, a) {
  return new e({ type: "custom", check: "custom", fn: t, ...ze(a) });
}
function O7(e, t) {
  const a = A7(
    (i) => (
      (i.addIssue = (s) => {
        if (typeof s == "string") i.issues.push(gl(s, i.value, a._zod.def));
        else {
          const u = s;
          (u.fatal && (u.continue = !1),
            u.code ?? (u.code = "custom"),
            "input" in u || (u.input = i.value),
            u.inst ?? (u.inst = a),
            u.continue ?? (u.continue = !a._zod.def.abort),
            i.issues.push(gl(u)));
        }
      }),
      e(i.value, i)
    ),
    t,
  );
  return a;
}
function A7(e, t) {
  const a = new yn({ check: "custom", ...ze(t) });
  return ((a._zod.check = e), a);
}
function ol(e, ...t) {
  for (const a of t)
    for (const i of Reflect.ownKeys(a))
      Object.prototype.propertyIsEnumerable.call(a, i) && Pi(e, i, a[i]);
  return e;
}
function eE(e) {
  let t = e?.target ?? "draft-2020-12";
  return (
    t === "draft-4" && (t = "draft-04"),
    t === "draft-7" && (t = "draft-07"),
    {
      processors: e.processors ?? {},
      metadataRegistry: e?.metadata ?? rl,
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
function Xo(e, t, a, i, s) {
  const u =
    typeof t.unrepresentable == "function"
      ? t.unrepresentable({ zodSchema: e, path: i.path, message: s })
      : t.unrepresentable;
  if (u === "any") return !1;
  if (u === void 0 || u === "throw") throw new Error(s);
  return (Object.assign(a, u), !0);
}
function on(e, t, a = { path: [], schemaPath: [] }) {
  var i;
  const s = e._zod.def,
    u = t.seen.get(e);
  if (u)
    return (
      u.count++,
      a.schemaPath.includes(e) && (u.cycle = a.path),
      u.schema
    );
  const c = { schema: {}, count: 1, cycle: void 0, path: a.path };
  (t.seen.set(e, c),
    (t.sharedDefsExtractedFor = void 0),
    (t.sharedEmitDoneFor = void 0));
  const d = e._zod.toJSONSchema?.();
  if (d) c.schema = d;
  else {
    const y = { ...a, schemaPath: [...a.schemaPath, e], path: a.path };
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
    g && (c.ref || (c.ref = g), on(g, t, y), (t.seen.get(g).isParent = !0));
  }
  const m = t.metadataRegistry.get(e);
  return (
    m && ol(c.schema, m),
    t.io === "input" &&
      hn(e) &&
      (delete c.schema.examples, delete c.schema.default),
    t.io === "input" &&
      "_prefault" in c.schema &&
      ((i = c.schema).default ?? (i.default = c.schema._prefault)),
    delete c.schema._prefault,
    t.seen.get(e).schema
  );
}
function Y1(e) {
  return e.replace(/~/g, "~0").replace(/\//g, "~1");
}
function tE(e, t) {
  const a = e.seen.get(t);
  if (!a) throw new Error("Unprocessed schema. This is a bug in Zod.");
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
          { defId: _, ref: `${v("__shared")}#/${d}/${Y1(_)}` }
        );
      }
      const m = "#",
        h = `${m}/${d}/`;
      if (c[1] === a && !c[1].schema.id) return { ref: m };
      const y = c[1].schema.id ?? `__schema${e.counter++}`;
      return { defId: y, ref: h + Y1(y) };
    },
    u = (c) => {
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
      u(c);
      continue;
    }
    if (e.external) {
      const h = e.external.registry.get(c[0])?.id;
      if (t !== c[0] && h) {
        u(c);
        continue;
      }
    }
    if (e.metadataRegistry.get(c[0])?.id) {
      u(c);
      continue;
    }
    if (d.cycle) {
      u(c);
      continue;
    }
    d.count > 1 && e.reused === "ref" && u(c);
  }
  e.external && (e.sharedDefsExtractedFor = e.external);
}
function nE(e) {
  const t = e.anyOf;
  if (!Array.isArray(t) || t.length === 0 || e.type !== void 0) return;
  const a = [];
  for (const i of t) {
    if (!i || typeof i != "object") return;
    nE(i);
    const s = Object.keys(i);
    if (s.length !== 1 || s[0] !== "type") return;
    const u = i.type;
    for (const c of Array.isArray(u) ? u : [u]) {
      if (typeof c != "string") return;
      a.includes(c) || a.push(c);
    }
  }
  (delete e.anyOf, (e.type = a.length === 1 ? a[0] : a));
}
const rE = new Set(["type", "properties", "required", "additionalProperties"]),
  K1 = ["oneOf", "anyOf"];
function Q1(e) {
  const t = e.additionalProperties;
  return t === void 0 || t === !1 || typeof t != "object" || t === null
    ? null
    : Object.keys(t).length
      ? t
      : null;
}
function Lm(e) {
  const t = [];
  for (const u of e) {
    if (typeof u != "object" || u.type !== "object") return null;
    for (const c in u) if (!rE.has(c)) return null;
    t.push(u);
  }
  const a = {},
    i = new Set();
  for (const u of t) {
    for (const c in u.properties) {
      if (Object.prototype.hasOwnProperty.call(a, c)) continue;
      const d = [];
      for (const h of t) {
        const y = h.properties?.[c] ?? Q1(h);
        y != null &&
          (d.some((g) => JSON.stringify(g) === JSON.stringify(y)) || d.push(y));
      }
      const m = d.length === 1 ? d[0] : (Lm(d) ?? { allOf: d });
      Pi(a, c, m);
    }
    for (const c of u.required ?? []) i.add(c);
  }
  const s = { type: "object", properties: a };
  if (
    (i.size && (s.required = [...i]),
    t.every((u) => u.additionalProperties === !1))
  )
    s.additionalProperties = !1;
  else {
    const u = [];
    for (const c of t) {
      const d = Q1(c);
      d && !u.some((m) => JSON.stringify(m) === JSON.stringify(d)) && u.push(d);
    }
    u.length === 1
      ? (s.additionalProperties = u[0])
      : u.length > 1 && (s.additionalProperties = { allOf: u });
  }
  return s;
}
function C7(e) {
  const t = e.allOf;
  if (!Array.isArray(t) || t.length < 2) return;
  for (const s of rE) if (s in e) return;
  const a = t.filter((s) => K1.some((u) => Array.isArray(s[u])));
  let i = null;
  if (!a.length) i = Lm(t);
  else {
    const s = a[0],
      u = K1.find((m) => Array.isArray(s[m]));
    if (Object.keys(s).length !== 1) return;
    const c = t.filter((m) => m !== s),
      d = s[u].map((m) => Lm([...c, m]));
    if (d.some((m) => !m)) return;
    i = { [u]: d };
  }
  i && (delete e.allOf, ol(e, i));
}
function aE(e, t) {
  const a = e.seen.get(t);
  if (!a) throw new Error("Unprocessed schema. This is a bug in Zod.");
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
          : ol(h, S),
        ol(h, y),
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
      for (const d of e.seen.entries()) nE(d[1].def ?? d[1].schema);
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
      for (const m of e.intersections) for (const h of d.get(m) ?? []) C7(h);
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
  ol(s, a.defId ? a.schema : (a.def ?? a.schema));
  const u = e.metadataRegistry.get(t)?.id;
  u !== void 0 && s.id === u && delete s.id;
  const c = e.external?.defs ?? {};
  if (!e.external || e.sharedEmitDoneFor !== e.external)
    for (const d of e.seen.entries()) {
      const m = d[1];
      m.def &&
        m.defId &&
        (m.def.id === m.defId && delete m.def.id, Pi(c, m.defId, m.def));
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
            input: Fc(t, "input", e.processors),
            output: Fc(t, "output", e.processors),
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
function hn(e, t) {
  const a = t ?? { seen: new Set() };
  if (a.seen.has(e)) return !1;
  a.seen.add(e);
  const i = e._zod.def;
  if (i.type === "transform") return !0;
  if (i.type === "array") return hn(i.element, a);
  if (i.type === "set") return hn(i.valueType, a);
  if (i.type === "lazy") return hn(i.getter(), a);
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
    return hn(i.innerType, a);
  if (i.type === "intersection") return hn(i.left, a) || hn(i.right, a);
  if (i.type === "record" || i.type === "map")
    return hn(i.keyType, a) || hn(i.valueType, a);
  if (i.type === "pipe")
    return e._zod.traits.has("$ZodCodec") ? !0 : hn(i.in, a) || hn(i.out, a);
  if (i.type === "object") {
    for (const s in i.shape) if (hn(i.shape[s], a)) return !0;
    return !1;
  }
  if (i.type === "union") {
    for (const s of i.options) if (hn(s, a)) return !0;
    return !1;
  }
  if (i.type === "tuple") {
    for (const s of i.items) if (hn(s, a)) return !0;
    return !!(i.rest && hn(i.rest, a));
  }
  return !1;
}
const T7 =
    (e, t = {}) =>
    (a) => {
      const i = eE({ ...a, processors: t });
      return (on(e, i), tE(i, e), aE(i, e));
    },
  Fc =
    (e, t, a = {}) =>
    (i) => {
      const { libraryOptions: s, target: u } = i ?? {},
        c = eE({ ...(s ?? {}), target: u, io: t, processors: a });
      return (on(e, c), tE(c, e), aE(c, e));
    },
  Uo = (e, t, a) => {
    (e[t] === void 0 || a > e[t]) && (e[t] = a);
  },
  Po = (e, t, a) => {
    (e[t] === void 0 || a < e[t]) && (e[t] = a);
  },
  X1 = (e, t) => {
    (Uo(e, "minimum", t), Po(e, "maximum", t));
  },
  iE = (e, t) => {
    (e.multipleOf ?? (e.multipleOf = []),
      e.multipleOf.includes(t) || e.multipleOf.push(t));
  },
  oE = (e, t) => {
    (e.patterns ?? (e.patterns = new Set()), e.patterns.add(t));
  },
  sE = (e, t) => {
    e.mime = e.mime ? e.mime.filter((a) => t.includes(a)) : [...t];
  },
  lE = (e, t) => {
    ((e.format = t), t.includes("int") && (e.isInt = !0));
  },
  J1 = (e, t) => Uo(e, "minimum", t.minimum),
  W1 = (e, t) => Po(e, "maximum", t.maximum),
  ew = (e) => (t, a) => {
    lE(t, a.format);
    const [i, s] = e[a.format];
    (Uo(t, "minimum", i), Po(t, "maximum", s));
  },
  D7 = {
    greater_than: (e, t) =>
      Uo(e, t.inclusive ? "minimum" : "exclusiveMinimum", t.value),
    less_than: (e, t) =>
      Po(e, t.inclusive ? "maximum" : "exclusiveMaximum", t.value),
    multiple_of: (e, t) => iE(e, t.value),
    number_format: ew(D_),
    bigint_format: ew(Qz),
    min_length: J1,
    max_length: W1,
    length_equals: (e, t) => X1(e, t.length),
    min_size: J1,
    max_size: W1,
    size_equals: (e, t) => X1(e, t.size),
    string_format: (e, t) => {
      (lE(e, t.format),
        t.pattern && oE(e, t.pattern),
        (t.format === "base64" || t.format === "base64url") &&
          (e.contentEncoding = t.format),
        (t.local || t.precision === -1) && (e.laxFormat = !0));
    },
    mime_type: (e, t) => sE(e, t.mime),
  };
function Cr(e) {
  const t = {},
    a = e._zod.def,
    i = e._zod.traits.has("$ZodCheck")
      ? [e, ...(a.checks ?? [])]
      : (a.checks ?? []);
  for (const u of i) D7[u._zod.def.check]?.(t, u._zod.def);
  const s = e._zod.bag;
  (s.minimum !== void 0 && Uo(t, "minimum", s.minimum),
    s.exclusiveMinimum !== void 0 &&
      Uo(t, "exclusiveMinimum", s.exclusiveMinimum),
    s.maximum !== void 0 && Po(t, "maximum", s.maximum),
    s.exclusiveMaximum !== void 0 &&
      Po(t, "exclusiveMaximum", s.exclusiveMaximum),
    s.multipleOf !== void 0 && iE(t, s.multipleOf),
    s.format !== void 0 &&
      (t.format ?? (t.format = s.format),
      s.format.includes("int") && (t.isInt = !0)),
    s.mime && sE(t, s.mime));
  for (const u of s.patterns ?? []) oE(t, u);
  return t;
}
const M7 = {
    guid: "uuid",
    url: "uri",
    datetime: "date-time",
    json_string: "json-string",
    regex: "",
  },
  N7 = new Map([
    [Z_, X6],
    [Xp, J6],
  ]),
  z7 = (e) => N7.get(e) ?? e,
  k7 = (e, t, a, i) => {
    const s = a;
    s.type = "string";
    const {
      minimum: u,
      maximum: c,
      format: d,
      patterns: m,
      contentEncoding: h,
      laxFormat: y,
    } = Cr(e);
    if (
      (typeof u == "number" && (s.minLength = u),
      typeof c == "number" && (s.maxLength = c),
      d &&
        ((s.format = M7[d] ?? d),
        s.format === "" && delete s.format,
        (d === "time" || y) && delete s.format),
      h && (s.contentEncoding = h),
      m && m.size > 0)
    ) {
      const g = [...m].map(z7);
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
  j7 = (e, t, a, i) => {
    const s = a,
      {
        minimum: u,
        maximum: c,
        multipleOf: d,
        exclusiveMaximum: m,
        exclusiveMinimum: h,
        isInt: y,
      } = Cr(e);
    s.type = y ? "integer" : "number";
    const g = typeof h == "number" && h >= (u ?? Number.NEGATIVE_INFINITY),
      v = typeof m == "number" && m <= (c ?? Number.POSITIVE_INFINITY),
      _ = t.target === "draft-04" || t.target === "openapi-3.0";
    if (
      (g
        ? _
          ? ((s.minimum = h), (s.exclusiveMinimum = !0))
          : (s.exclusiveMinimum = h)
        : typeof u == "number" && (s.minimum = u),
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
          : Xo(
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
  L7 = (e, t, a, i) => {
    a.not = {};
  },
  U7 = (e, t, a, i) => {},
  P7 = (e, t, a, i) => {
    const s = e._zod.def,
      u = Dm(s.entries);
    if (u.length === 0) {
      a.not = {};
      return;
    }
    (u.every((c) => typeof c == "number") && (a.type = "number"),
      u.every((c) => typeof c == "string") && (a.type = "string"),
      (a.enum = u));
  },
  F7 = (e, t, a, i) => {
    Xo(e, t, a, i, "Custom types cannot be represented in JSON Schema");
  },
  B7 = (e, t, a, i) => {
    Xo(e, t, a, i, "Transforms cannot be represented in JSON Schema");
  },
  V7 = (e, t, a, i) => {
    const s = a,
      u = e._zod.def,
      { minimum: c, maximum: d } = Cr(e);
    (typeof c == "number" && (s.minItems = c),
      typeof d == "number" && (s.maxItems = d),
      (s.type = "array"),
      (s.items = on(u.element, t, { ...i, path: [...i.path, "items"] })));
  };
function Um(e) {
  const t = e._zod.def;
  return t.type === "pipe" && t.in._zod.traits.has("$ZodTransform")
    ? Um(t.out)
    : t.type === "catch"
      ? Um(t.innerType)
      : e._zod.optin;
}
const $7 = (e, t, a, i) => {
    const s = a,
      u = e._zod.def,
      c = u.shape;
    if (
      Object.getOwnPropertySymbols(c).length &&
      Xo(e, t, s, i, "Symbol keys cannot be represented in JSON Schema")
    )
      return;
    ((s.type = "object"), (s.properties = {}));
    for (const h in c)
      Pi(
        s.properties,
        h,
        on(c[h], t, { ...i, path: [...i.path, "properties", h] }),
      );
    const m = [];
    for (const h of Object.keys(c)) {
      const y = u.shape[h];
      (t.io === "input" ? Um(y) === void 0 : y._zod.optout === void 0) &&
        m.push(h);
    }
    (m.length > 0 && (s.required = m),
      u.catchall?._zod.def.type === "never"
        ? (s.additionalProperties = !1)
        : u.catchall
          ? u.catchall &&
            (s.additionalProperties = on(u.catchall, t, {
              ...i,
              path: [...i.path, "additionalProperties"],
            }))
          : t.io === "output" && (s.additionalProperties = !1));
  },
  H7 = (e, t, a, i) => {
    const s = e._zod.def,
      u = s.inclusive === !1,
      c = s.options.map((d, m) =>
        on(d, t, { ...i, path: [...i.path, u ? "oneOf" : "anyOf", m] }),
      );
    u ? (a.oneOf = c) : (a.anyOf = c);
  },
  Z7 = (e, t, a, i) => {
    const s = e._zod.def,
      u = on(s.left, t, { ...i, path: [...i.path, "allOf", 0] }),
      c = on(s.right, t, { ...i, path: [...i.path, "allOf", 1] }),
      d = (h) => "allOf" in h && Object.keys(h).length === 1,
      m = [...(d(u) ? u.allOf : [u]), ...(d(c) ? c.allOf : [c])];
    ((a.allOf = m), t.intersections.push(m));
  },
  I7 = (e, t, a, i) => {
    const s = e._zod.def,
      u = on(s.innerType, t, i),
      c = t.seen.get(e);
    t.target === "openapi-3.0"
      ? ((c.ref = s.innerType), (a.nullable = !0))
      : (a.anyOf = [u, { type: "null" }]);
  },
  q7 = (e, t, a, i) => {
    const s = e._zod.def;
    on(s.innerType, t, i);
    const u = t.seen.get(e);
    u.ref = s.innerType;
  },
  Jp = Symbol();
function uE(e, t, a, i, s) {
  let u = !1;
  const c = JSON.stringify(e, (d, m) =>
    typeof m != "bigint" ? m : ((u = !0), null),
  );
  return u
    ? (Xo(t, a, i, s, "BigInt defaults cannot be represented in JSON Schema"),
      Jp)
    : JSON.parse(c);
}
const G7 = (e, t, a, i) => {
    const s = e._zod.def;
    on(s.innerType, t, i);
    const u = t.seen.get(e);
    u.ref = s.innerType;
    const c = uE(s.defaultValue, e, t, a, i);
    c !== Jp && (a.default = c);
  },
  Y7 = (e, t, a, i) => {
    const s = e._zod.def;
    on(s.innerType, t, i);
    const u = t.seen.get(e);
    if (((u.ref = s.innerType), t.io !== "input")) return;
    const c = uE(s.defaultValue, e, t, a, i);
    c !== Jp && (a._prefault = c);
  },
  K7 = (e, t, a, i) => {
    const s = e._zod.def;
    on(s.innerType, t, i);
    const u = t.seen.get(e);
    u.ref = s.innerType;
    let c;
    try {
      c = s.catchValue(void 0);
    } catch {
      Xo(e, t, a, i, "Dynamic catch values are not supported in JSON Schema");
      return;
    }
    a.default = c;
  },
  Q7 = (e, t, a, i) => {
    const s = e._zod.def,
      u = s.in._zod.traits.has("$ZodTransform"),
      c = t.io === "input" ? (u ? s.out : s.in) : s.out;
    on(c, t, i);
    const d = t.seen.get(e);
    d.ref = c;
  },
  X7 = (e, t, a, i) => {
    const s = e._zod.def;
    on(s.innerType, t, i);
    const u = t.seen.get(e);
    ((u.ref = s.innerType), (a.readOnly = !0));
  },
  cE = (e, t, a, i) => {
    const s = e._zod.def;
    on(s.innerType, t, i);
    const u = t.seen.get(e);
    u.ref = s.innerType;
  },
  tw = new WeakSet([Object.prototype, Error.prototype]);
function ac(e, t, a) {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    get() {
      const i = a(this);
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
const J7 = (e, t) => {
    (v6.init(e, t), (e.name = "ZodError"));
    const a = Object.getPrototypeOf(e);
    tw.has(a) ||
      (tw.add(a),
      ac(a, "format", (i) => (s) => S6(i, s)),
      ac(a, "flatten", (i) => (s) => w6(i, s)),
      ac(a, "addIssue", (i) => (s) => {
        (i.issues.push(s), (i.message = JSON.stringify(i.issues, Mm, 2)));
      }),
      ac(a, "addIssues", (i) => (s) => {
        (i.issues.push(...s), (i.message = JSON.stringify(i.issues, Mm, 2)));
      }),
      Object.defineProperty(a, "isEmpty", {
        configurable: !0,
        enumerable: !1,
        get() {
          return this.issues.length === 0;
        },
      }));
  },
  or = se("ZodError", J7, void 0, { Parent: Error }),
  W7 = Ip(or),
  e5 = qp(or),
  t5 = Gp(or),
  n5 = Yp(or),
  r5 = A6(or),
  a5 = C6(or),
  i5 = T6(or),
  o5 = D6(or),
  s5 = M6(or),
  l5 = N6(or),
  u5 = z6(or),
  c5 = k6(or);
function f5() {
  Nr.localeError || ei(N8());
}
function Wp() {
  Nr.memoizer || ei({ memoizer: T8() });
}
const Ft = se(
    "ZodType",
    (e, t) => (f5(), Pt.init(e, t), (e.def = t), (e.type = t.type), e),
    {
      check(...e) {
        const t = this.def;
        return this.clone(
          Fn(t, {
            checks: [
              ...(t.checks ?? []),
              ...e.map((a) =>
                typeof a == "function"
                  ? {
                      _zod: {
                        check: a,
                        def: { check: "custom" },
                        onattach: [],
                      },
                    }
                  : a,
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
        return Wa(this, e, t);
      },
      brand() {
        return this;
      },
      register(e, t) {
        return (e.add(this, t), this);
      },
      refine(e, t) {
        return this.check(c9(e, t));
      },
      superRefine(e, t) {
        return this.check(f9(e, t));
      },
      overwrite(e) {
        return this.check(Qo(e));
      },
      optional() {
        return aw(this);
      },
      exactOptional() {
        return J5(this);
      },
      nullable() {
        return iw(this);
      },
      nullish() {
        return aw(iw(this));
      },
      nonoptional(e) {
        return a9(this, e);
      },
      array() {
        return $5(this);
      },
      or(e) {
        return q5([this, e]);
      },
      and(e) {
        return Y5(this, e);
      },
      transform(e) {
        return ow(this, X5(e));
      },
      default(e) {
        return t9(this, e);
      },
      prefault(e) {
        return r9(this, e);
      },
      catch(e) {
        return o9(this, e);
      },
      pipe(e) {
        return ow(this, e);
      },
      readonly() {
        return u9(this);
      },
      describe(e) {
        const t = this.clone();
        return (rl.add(t, { description: e }), t);
      },
      meta(...e) {
        if (e.length === 0) return rl.get(this);
        const t = this.clone();
        return (rl.add(t, e[0]), t);
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
        return Zp(this, "~standard", {
          ...F_(this),
          jsonSchema: { input: Fc(this, "input"), output: Fc(this, "output") },
        });
      },
      set "~standard"(e) {
        Qa(this, "~standard", e);
      },
      parse: function e(t, a) {
        return W7(this, t, a, { callee: e });
      },
      parseAsync: async function e(t, a) {
        return await e5(this, t, a, { callee: e });
      },
      safeParse(e, t) {
        return t5(this, e, t);
      },
      async safeParseAsync(e, t) {
        return n5(this, e, t);
      },
      get spa() {
        return this?.safeParseAsync;
      },
      set spa(e) {
        Qa(this, "spa", e);
      },
      validate(e, t) {
        return x6(this, e, t);
      },
      validateAsync(e, t) {
        return O6(this, e, t);
      },
      encode: function e(t, a) {
        return r5(this, t, a, { callee: e });
      },
      decode: function e(t, a) {
        return a5(this, t, a, { callee: e });
      },
      encodeAsync: async function e(t, a) {
        return await i5(this, t, a, { callee: e });
      },
      decodeAsync: async function e(t, a) {
        return await o5(this, t, a, { callee: e });
      },
      safeEncode(e, t) {
        return s5(this, e, t);
      },
      safeDecode(e, t) {
        return l5(this, e, t);
      },
      async safeEncodeAsync(e, t) {
        return u5(this, e, t);
      },
      async safeDecodeAsync(e, t) {
        return c5(this, e, t);
      },
      toJSONSchema(e) {
        return T7(this, {})(e);
      },
      get description() {
        return rl.get(this)?.description;
      },
      get _def() {
        return this._zod.def;
      },
    },
  ),
  fE = se(
    "_ZodString",
    (e, t) => {
      (Qp.init(e, t),
        Ft.init(e, t),
        (e._zod.processJSONSchema = (a, i, s) => k7(e, a, i)));
    },
    N_(
      {
        format: (e) => Cr(e).format ?? null,
        minLength: (e) => Cr(e).minimum ?? null,
        maxLength: (e) => Cr(e).maximum ?? null,
      },
      {
        regex(...e) {
          return this.check(d7(...e));
        },
        includes(...e) {
          return this.check(p7(...e));
        },
        startsWith(...e) {
          return this.check(y7(...e));
        },
        endsWith(...e) {
          return this.check(g7(...e));
        },
        min(...e) {
          return this.check(Pc(...e));
        },
        max(...e) {
          return this.check(J_(...e));
        },
        length(...e) {
          return this.check(W_(...e));
        },
        nonempty(...e) {
          return this.check(Pc(1, ...e));
        },
        lowercase(e) {
          return this.check(h7(e));
        },
        uppercase(e) {
          return this.check(m7(e));
        },
        trim() {
          return this.check(w7());
        },
        normalize(...e) {
          return this.check(b7(...e));
        },
        toLowerCase() {
          return this.check(S7());
        },
        toUpperCase() {
          return this.check(_7());
        },
        slugify() {
          return this.check(E7());
        },
      },
    ),
  ),
  d5 = se(
    "ZodString",
    (e, t) => {
      (Qp.init(e, t), fE.init(e, t));
    },
    {
      email(e) {
        return this.check(L8(v5, e));
      },
      url(e) {
        return this.check($8(w5, e));
      },
      jwt(e) {
        return this.check(r7(j5, e));
      },
      emoji(e) {
        return this.check(H8(S5, e));
      },
      guid(e) {
        return this.check(U8(b5, e));
      },
      uuid(e) {
        return this.check(P8(ic, e));
      },
      uuidv4(e) {
        return this.check(F8(ic, e));
      },
      uuidv6(e) {
        return this.check(B8(ic, e));
      },
      uuidv7(e) {
        return this.check(V8(ic, e));
      },
      nanoid(e) {
        return this.check(Z8(_5, e));
      },
      cuid(e) {
        return this.check(I8(E5, e));
      },
      cuid2(e) {
        return this.check(q8(x5, e));
      },
      ulid(e) {
        return this.check(G8(R5, e));
      },
      base64(e) {
        return this.check(e7(N5, e));
      },
      base64url(e) {
        return this.check(t7(z5, e));
      },
      xid(e) {
        return this.check(Y8(O5, e));
      },
      ksuid(e) {
        return this.check(K8(A5, e));
      },
      ipv4(e) {
        return this.check(Q8(C5, e));
      },
      ipv6(e) {
        return this.check(X8(T5, e));
      },
      cidrv4(e) {
        return this.check(J8(D5, e));
      },
      cidrv6(e) {
        return this.check(W8(M5, e));
      },
      e164(e) {
        return this.check(n7(k5, e));
      },
      datetime(e) {
        return this.check(a7(m5, e));
      },
      date(e) {
        return this.check(i7(p5, e));
      },
      time(e) {
        return this.check(o7(y5, e));
      },
      duration(e) {
        return this.check(s7(g5, e));
      },
    },
  );
function h5(e) {
  return j8(d5, e);
}
const xt = se("ZodStringFormat", (e, t) => {
    (St.init(e, t), fE.init(e, t));
  }),
  m5 = se("ZodISODateTime", (e, t) => {
    (Vk.init(e, t), xt.init(e, t));
  }),
  p5 = se("ZodISODate", (e, t) => {
    ($k.init(e, t), xt.init(e, t));
  }),
  y5 = se("ZodISOTime", (e, t) => {
    (Hk.init(e, t), xt.init(e, t));
  }),
  g5 = se("ZodISODuration", (e, t) => {
    (Zk.init(e, t), xt.init(e, t));
  }),
  v5 = se("ZodEmail", (e, t) => {
    (Ak.init(e, t), xt.init(e, t));
  }),
  b5 = se("ZodGUID", (e, t) => {
    (Rk.init(e, t), xt.init(e, t));
  }),
  ic = se("ZodUUID", (e, t) => {
    (Ok.init(e, t), xt.init(e, t));
  }),
  w5 = se("ZodURL", (e, t) => {
    (zk.init(e, t), xt.init(e, t));
  }),
  S5 = se("ZodEmoji", (e, t) => {
    (kk.init(e, t), xt.init(e, t));
  }),
  _5 = se("ZodNanoID", (e, t) => {
    (jk.init(e, t), xt.init(e, t));
  }),
  E5 = se("ZodCUID", (e, t) => {
    (Lk.init(e, t), xt.init(e, t));
  }),
  x5 = se("ZodCUID2", (e, t) => {
    (Uk.init(e, t), xt.init(e, t));
  }),
  R5 = se("ZodULID", (e, t) => {
    (Pk.init(e, t), xt.init(e, t));
  }),
  O5 = se("ZodXID", (e, t) => {
    (Fk.init(e, t), xt.init(e, t));
  }),
  A5 = se("ZodKSUID", (e, t) => {
    (Bk.init(e, t), xt.init(e, t));
  }),
  C5 = se("ZodIPv4", (e, t) => {
    (Ik.init(e, t), xt.init(e, t));
  }),
  T5 = se("ZodIPv6", (e, t) => {
    (Gk.init(e, t), xt.init(e, t));
  }),
  D5 = se("ZodCIDRv4", (e, t) => {
    (Yk.init(e, t), xt.init(e, t));
  }),
  M5 = se("ZodCIDRv6", (e, t) => {
    (Qk.init(e, t), xt.init(e, t));
  }),
  N5 = se("ZodBase64", (e, t) => {
    (Xk.init(e, t), xt.init(e, t));
  }),
  z5 = se("ZodBase64URL", (e, t) => {
    (Wk.init(e, t), xt.init(e, t));
  }),
  k5 = se("ZodE164", (e, t) => {
    (e8.init(e, t), xt.init(e, t));
  }),
  j5 = se("ZodJWT", (e, t) => {
    (n8.init(e, t), xt.init(e, t));
  }),
  dE = se(
    "ZodNumber",
    (e, t) => {
      (I_.init(e, t),
        Ft.init(e, t),
        (e._zod.processJSONSchema = (a, i, s) => j7(e, a, i, s)),
        (e.isFinite = !0));
    },
    N_(
      {
        minValue: (e) => {
          const { minimum: t, exclusiveMinimum: a } = Cr(e);
          return Math.max(
            t ?? Number.NEGATIVE_INFINITY,
            a ?? Number.NEGATIVE_INFINITY,
          );
        },
        maxValue: (e) => {
          const { maximum: t, exclusiveMaximum: a } = Cr(e);
          return Math.min(
            t ?? Number.POSITIVE_INFINITY,
            a ?? Number.POSITIVE_INFINITY,
          );
        },
        isInt: (e) => {
          const { isInt: t, multipleOf: a } = Cr(e);
          return !!t || !!a?.some(Number.isSafeInteger);
        },
        format: (e) => Cr(e).format ?? null,
      },
      {
        gt(e, t) {
          return this.check(q1(e, t));
        },
        gte(e, t) {
          return this.check(tm(e, t));
        },
        min(e, t) {
          return this.check(tm(e, t));
        },
        lt(e, t) {
          return this.check(I1(e, t));
        },
        lte(e, t) {
          return this.check(em(e, t));
        },
        max(e, t) {
          return this.check(em(e, t));
        },
        int(e) {
          return this.check(nw(e));
        },
        safe(e) {
          return this.check(nw(e));
        },
        positive(e) {
          return this.check(q1(0, e));
        },
        nonnegative(e) {
          return this.check(tm(0, e));
        },
        negative(e) {
          return this.check(I1(0, e));
        },
        nonpositive(e) {
          return this.check(em(0, e));
        },
        multipleOf(e, t) {
          return this.check(G1(e, t));
        },
        step(e, t) {
          return this.check(G1(e, t));
        },
        finite() {
          return this;
        },
      },
    ),
  );
function L5(e) {
  return l7(dE, e);
}
const U5 = se("ZodNumberFormat", (e, t) => {
  (r8.init(e, t), dE.init(e, t));
});
function nw(e) {
  return u7(U5, e);
}
const P5 = se("ZodUnknown", (e, t) => {
  (a8.init(e, t),
    Ft.init(e, t),
    (e._zod.processJSONSchema = (a, i, s) => U7()));
});
function rw() {
  return c7(P5);
}
const F5 = se("ZodNever", (e, t) => {
  (i8.init(e, t),
    Ft.init(e, t),
    (e._zod.processJSONSchema = (a, i, s) => L7(e, a, i)));
});
function B5(e) {
  return f7(F5, e);
}
const V5 = se(
  "ZodArray",
  (e, t) => {
    (Wp(),
      l8.init(e, t),
      Ft.init(e, t),
      (e._zod.processJSONSchema = (a, i, s) => V7(e, a, i, s)),
      (e.element = t.element));
  },
  {
    min(e, t) {
      return this.check(Pc(e, t));
    },
    nonempty(e) {
      return this.check(Pc(1, e));
    },
    max(e, t) {
      return this.check(J_(e, t));
    },
    length(e, t) {
      return this.check(W_(e, t));
    },
    unwrap() {
      return this.element;
    },
  },
);
function $5(e, t) {
  return x7(V5, e, t);
}
const H5 = se(
  "ZodObject",
  (e, t) => {
    (Wp(),
      f8.init(e, t),
      Ft.init(e, t),
      (e._zod.processJSONSchema = (a, i, s) => $7(e, a, i, s)),
      c6(e, "shape", (a) => a._zod.def.shape, !1));
  },
  {
    keyof() {
      return K5(Object.keys(this._zod.def.shape));
    },
    catchall(e) {
      return this.clone(Fn(this._zod.def, { catchall: e }));
    },
    passthrough() {
      return this.clone(Fn(this._zod.def, { catchall: rw() }));
    },
    loose() {
      return this.clone(Fn(this._zod.def, { catchall: rw() }));
    },
    strict() {
      return this.clone(Fn(this._zod.def, { catchall: B5() }));
    },
    strip() {
      return this.clone(Fn(this._zod.def, { catchall: void 0 }));
    },
    extend(e) {
      return Wz(this, e);
    },
    safeExtend(e) {
      return e6(this, e);
    },
    merge(e) {
      return t6(this, e);
    },
    pick(e) {
      return Xz(this, e);
    },
    omit(e) {
      return Jz(this, e);
    },
    partial(...e) {
      return O1(hE, this, e[0]);
    },
    exactPartial(...e) {
      return O1(mE, this, e[0], "exactPartial");
    },
    required(...e) {
      return n6(pE, this, e[0]);
    },
  },
);
function Z5(e, t) {
  const a = { type: "object", shape: e ?? {}, ...ze(t) };
  return new H5(a);
}
const I5 = se("ZodUnion", (e, t) => {
  (d8.init(e, t),
    Ft.init(e, t),
    (e._zod.processJSONSchema = (a, i, s) => H7(e, a, i, s)),
    (e.options = t.options));
});
function q5(e, t) {
  return new I5({ type: "union", options: e, ...ze(t) });
}
const G5 = se("ZodIntersection", (e, t) => {
  (h8.init(e, t),
    Ft.init(e, t),
    (e._zod.processJSONSchema = (a, i, s) => Z7(e, a, i, s)));
});
function Y5(e, t) {
  return new G5({ type: "intersection", left: e, right: t });
}
const Pm = se("ZodEnum", (e, t) => {
  (m8.init(e, t),
    Ft.init(e, t),
    (e._zod.processJSONSchema = (i, s, u) => P7(e, i, s)),
    (e.enum = t.entries),
    (e.options = [...e._zod.values]));
  const a = new Set(Object.keys(t.entries));
  ((e.extract = (i, s) => {
    const u = {};
    for (const c of i)
      if (a.has(c)) u[c] = t.entries[c];
      else throw new Error(`Key ${c} not found in enum`);
    return new Pm({ ...t, checks: [], ...ze(s), entries: u });
  }),
    (e.exclude = (i, s) => {
      const u = { ...t.entries };
      for (const c of i)
        if (a.has(c)) delete u[c];
        else throw new Error(`Key ${c} not found in enum`);
      return new Pm({ ...t, checks: [], ...ze(s), entries: u });
    }));
});
function K5(e, t) {
  const a = Array.isArray(e) ? Object.fromEntries(e.map((i) => [i, i])) : e;
  return new Pm({ type: "enum", entries: a, ...ze(t) });
}
const Q5 = se("ZodTransform", (e, t) => {
  (Wp(),
    p8.init(e, t),
    Ft.init(e, t),
    (e._zod.processJSONSchema = (a, i, s) => B7(e, a, i, s)),
    (e._zod.parse = (a, i) => {
      if (i.direction === "backward") throw new z_(e.constructor.name);
      a.addIssue = (u) => {
        if (typeof u == "string") a.issues.push(gl(u, a.value, t));
        else {
          const c = u;
          (c.fatal && (c.continue = !1),
            c.code ?? (c.code = "custom"),
            "input" in c || (c.input = a.value),
            c.inst ?? (c.inst = e),
            a.issues.push(gl(c)));
        }
      };
      const s = t.transform(a.value, a);
      return s instanceof Promise
        ? s.then((u) => ((a.value = u), a))
        : ((a.value = s), a);
    }));
});
function X5(e) {
  return new Q5({ type: "transform", transform: e });
}
const hE = se("ZodOptional", (e, t) => {
  (Y_.init(e, t),
    Ft.init(e, t),
    (e._zod.processJSONSchema = (a, i, s) => cE(e, a, i, s)),
    (e.unwrap = () => e._zod.def.innerType));
});
function aw(e) {
  return new hE({ type: "optional", innerType: e });
}
const mE = se("ZodExactOptional", (e, t) => {
  (y8.init(e, t),
    Ft.init(e, t),
    (e._zod.processJSONSchema = (a, i, s) => cE(e, a, i, s)),
    (e.unwrap = () => e._zod.def.innerType));
});
function J5(e) {
  return new mE({ type: "optional", innerType: e });
}
const W5 = se("ZodNullable", (e, t) => {
  (g8.init(e, t),
    Ft.init(e, t),
    (e._zod.processJSONSchema = (a, i, s) => I7(e, a, i, s)),
    (e.unwrap = () => e._zod.def.innerType));
});
function iw(e) {
  return new W5({ type: "nullable", innerType: e });
}
const e9 = se("ZodDefault", (e, t) => {
  (v8.init(e, t),
    Ft.init(e, t),
    (e._zod.processJSONSchema = (a, i, s) => G7(e, a, i, s)),
    (e.unwrap = () => e._zod.def.innerType),
    (e.removeDefault = e.unwrap));
});
function t9(e, t) {
  return new e9({
    type: "default",
    innerType: e,
    get defaultValue() {
      return typeof t == "function" ? t() : C_(t);
    },
  });
}
const n9 = se("ZodPrefault", (e, t) => {
  (b8.init(e, t),
    Ft.init(e, t),
    (e._zod.processJSONSchema = (a, i, s) => Y7(e, a, i, s)),
    (e.unwrap = () => e._zod.def.innerType));
});
function r9(e, t) {
  return new n9({
    type: "prefault",
    innerType: e,
    get defaultValue() {
      return typeof t == "function" ? t() : C_(t);
    },
  });
}
const pE = se("ZodNonOptional", (e, t) => {
  (w8.init(e, t),
    Ft.init(e, t),
    (e._zod.processJSONSchema = (a, i, s) => q7(e, a, i, s)),
    (e.unwrap = () => e._zod.def.innerType));
});
function a9(e, t) {
  return new pE({ type: "nonoptional", innerType: e, ...ze(t) });
}
const i9 = se("ZodCatch", (e, t) => {
  (S8.init(e, t),
    Ft.init(e, t),
    (e._zod.processJSONSchema = (a, i, s) => K7(e, a, i, s)),
    (e.unwrap = () => e._zod.def.innerType),
    (e.removeCatch = e.unwrap));
});
function o9(e, t) {
  return new i9({
    type: "catch",
    innerType: e,
    catchValue: typeof t == "function" ? t : d6(t),
  });
}
const s9 = se("ZodPipe", (e, t) => {
  (_8.init(e, t),
    Ft.init(e, t),
    (e._zod.processJSONSchema = (a, i, s) => Q7(e, a, i, s)),
    (e.in = t.in),
    (e.out = t.out));
});
function ow(e, t) {
  return new s9({ type: "pipe", in: e, out: t });
}
const l9 = se("ZodReadonly", (e, t) => {
  (E8.init(e, t),
    Ft.init(e, t),
    (e._zod.processJSONSchema = (a, i, s) => X7(e, a, i, s)),
    (e.unwrap = () => e._zod.def.innerType));
});
function u9(e) {
  return new l9({ type: "readonly", innerType: e });
}
const yE = se("ZodCustom", (e, t) => {
  (x8.init(e, t),
    Ft.init(e, t),
    (e._zod.processJSONSchema = (a, i, s) => F7(e, a, i, s)));
});
function c9(e, t = {}) {
  return R7(yE, e, t);
}
function f9(e, t) {
  return O7(e, t);
}
const d9 = se(
  "ZodInstanceOf",
  (e, t) => {
    yE.init(e, t);
  },
  {
    properties(e, t) {
      return this.check(v7(e, t));
    },
  },
);
function Qj(e, t = {}) {
  const a = new d9({
    type: "custom",
    check: "custom",
    fn: (i) => i instanceof e,
    abort: !0,
    ...ze(t),
  });
  return (
    (a._zod.bag.Class = e),
    (a._zod.check = (i) => {
      i.value instanceof e ||
        i.issues.push({
          code: "invalid_type",
          expected: e.name,
          input: i.value,
          inst: a,
          path: [...(a._zod.def.path ?? [])],
        });
    }),
    a
  );
}
const h9 = [Ec, $w, Hw, Zw, Iw, qw];
function m9({
  imageCandidates: e,
  selectedProfileImage: t = h9[0],
  onSave: a,
}) {
  const [i, s] = w.useState(t);
  return k.jsxs(Gc, {
    children: [
      k.jsx(cp, {}),
      k.jsx(Kc, {
        asChild: !0,
        children: k.jsx("button", {
          className:
            "absolute -bottom-1 -right-1 w-9 h-9 rounded-full bg-white shadow flex items-center justify-center",
          "aria-label": "edit profile image",
          children: k.jsx("img", { src: sC, className: "w-9 h-9" }),
        }),
      }),
      k.jsx(Yc, {
        className: "w-105",
        children: k.jsxs("div", {
          className: "px-8.5 pt-20 pb-5 flex flex-col gap-15 items-center",
          children: [
            k.jsx("div", {
              className: "text-2xl font-bold text-scale-600",
              children: "프로필 이미지 고르기",
            }),
            k.jsx("div", {
              className: "grid grid-cols-3 px-10 gap-8",
              children: e.map((u) => {
                const c = i === u;
                return k.jsxs(
                  "button",
                  {
                    onClick: () => {
                      s(u);
                    },
                    className: `group relative w-20 h-20 rounded-full overflow-hidden ${c ? "ring-4 ring-brand-primary" : "ring-0"}`,
                    children: [
                      k.jsx("img", {
                        src: u,
                        className: "w-full h-full object-cover",
                      }),
                      k.jsx("span", {
                        className: `absolute inset-0 bg-black/15 opacity-0 group-hover:opacity-100 transition-opacity ${c ? "opacity-100" : ""}`,
                      }),
                    ],
                  },
                  u,
                );
              }),
            }),
            k.jsx(x4, {
              asChild: !0,
              children: k.jsx(ko, {
                variant: "primary",
                onClick: () => {
                  a(i);
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
const p9 = Z5({
  nickname: h5()
    .trim()
    .min(1, "닉네임을 입력해주세요.")
    .max(10, "닉네임은 10자 이내로 입력해주세요.")
    .regex(
      /^[0-9A-Za-z\uAC00-\uD7A3\u1100-\u11FF\u3130-\u318F]+$/u,
      "한글, 영문자, 숫자만 입력할 수 있습니다.",
    ),
  profilepicId: L5().int().min(1).max(oa.length),
});
function y9() {
  const { user: e, updateProfile: t } = mp(),
    [a, i] = w.useState(!1),
    [s, u] = w.useState(""),
    c = Lz({
      resolver: Bz(p9),
      mode: "onChange",
      defaultValues: { nickname: "", profilepicId: 1 },
    }),
    d = oa[c.watch("profilepicId") - 1] ?? oa[0],
    m = (y) => {
      if ((i(y), y)) {
        const g = oa.findIndex((v) => v === e?.profileImage);
        (c.reset({
          nickname: e?.nickname ?? "",
          profilepicId: g >= 0 ? g + 1 : 1,
        }),
          u(""));
      }
    },
    h = c.handleSubmit(async ({ nickname: y, profilepicId: g }) => {
      (u(""),
        (await t(y, g))
          ? i(!1)
          : u("프로필을 저장하지 못했습니다. 다시 시도해주세요."));
    });
  return k.jsxs(Gc, {
    open: a,
    onOpenChange: m,
    children: [
      k.jsx(cp, {}),
      k.jsx(Kc, {
        asChild: !0,
        children: k.jsxs("button", {
          type: "button",
          className: "flex items-center gap-2",
          children: [
            k.jsx("img", {
              src: e?.profileImage ?? oa[0],
              alt: "프로필",
              className: "h-8 w-8 rounded-full object-cover",
            }),
            k.jsx("span", {
              className: "text-lg font-bold text-scale-600",
              children: e?.nickname ?? "프로필 설정",
            }),
          ],
        }),
      }),
      k.jsx(Yc, {
        className: "w-180",
        children: k.jsxs("form", {
          onSubmit: h,
          className: "px-20 py-22.5 flex flex-col gap-20",
          children: [
            k.jsx("h2", {
              className: "text-4xl font-bold text-scale-600",
              children: "프로필 설정",
            }),
            k.jsxs("div", {
              className: "flex flex-col gap-12.5",
              children: [
                k.jsxs("div", {
                  className: "mx-auto relative w-28 h-28",
                  children: [
                    k.jsx("img", {
                      src: d,
                      alt: "선택한 프로필 이미지",
                      className: "w-28 h-28 rounded-full object-cover",
                    }),
                    k.jsx(wz, {
                      name: "profilepicId",
                      control: c.control,
                      render: ({ field: y }) =>
                        k.jsx(
                          m9,
                          {
                            imageCandidates: oa,
                            selectedProfileImage: d,
                            onSave: (g) => {
                              const v = oa.findIndex((_) => _ === g);
                              v >= 0 && y.onChange(v + 1);
                            },
                          },
                          y.value,
                        ),
                    }),
                  ],
                }),
                k.jsxs("div", {
                  className: "flex flex-col gap-3",
                  children: [
                    k.jsx("input", {
                      ...c.register("nickname"),
                      placeholder: "닉네임(최대 10자)",
                      className:
                        "w-full h-14 rounded-xl border border-black/10 px-5 outline-none focus:border-brand-primary",
                    }),
                    c.formState.errors.nickname &&
                      k.jsx("p", {
                        className: "text-sm text-red-500",
                        children: c.formState.errors.nickname.message,
                      }),
                    s &&
                      k.jsx("p", {
                        role: "alert",
                        className: "text-sm text-red-500",
                        children: s,
                      }),
                  ],
                }),
                k.jsx(ko, {
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
function g9() {
  const { logout: e, user: t } = mp(),
    [a, i] = w.useState(!1);
  return k.jsxs(sz, {
    children: [
      k.jsx(lz, {
        asChild: !0,
        children: k.jsx(ko, { variant: "gray", children: "프로필" }),
      }),
      k.jsxs(uz, {
        align: "end",
        sideOffset: 12,
        className:
          "p-6 flex flex-col gap-5 w-55 border border-brand-secondary rounded-xl bg-white",
        children: [
          k.jsx(y9, {}),
          k.jsxs("div", {
            className: "flex w-full justify-between items-center",
            children: [
              k.jsxs("div", {
                className: "flex items-center gap-1",
                children: [
                  k.jsx("img", { src: Gw, className: "w-8.5" }),
                  k.jsx("div", {
                    className: "text-lg font-bold text-scale-500",
                    children: "포인트",
                  }),
                ],
              }),
              k.jsxs("div", {
                className: "text-lg font-bold text-scale-600",
                children: [
                  k.jsx(Oi, {
                    to: "/payment/history",
                    className: "text-brand-primary",
                    children: t?.points ?? 0,
                  }),
                  "잔",
                ],
              }),
            ],
          }),
          k.jsx(fz, { open: a, onOpenChange: i }),
          k.jsx("button", {
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
function v9() {
  const { user: e } = mp();
  return k.jsx("header", {
    className: "w-full h-22 fixed flex justify-center bg-bg-white mx-auto z-50",
    children: k.jsxs("div", {
      className: "w-full max-w-[1680px] flex justify-between px-17.5 py-5",
      children: [
        k.jsxs(Oi, {
          to: "/",
          className: "cursor-pointer flex gap-4.5 items-center",
          children: [
            k.jsx("img", { src: aC, className: "w-9 h-9" }),
            k.jsx("div", {
              className: "text-3xl text-brand-primary font-bold",
              children: "멋쟁이 시장처럼",
            }),
          ],
        }),
        k.jsxs("div", {
          className: "flex gap-10 items-center",
          children: [
            k.jsx(Oi, {
              to: "/auction",
              className: "cursor-pointer",
              children: k.jsx("div", {
                className: "text-xl text-scale-500",
                children: "경매 입찰",
              }),
            }),
            k.jsx(Oi, {
              to: "/create",
              className: "cursor-pointer",
              children: k.jsx("div", {
                className: "text-xl text-scale-500",
                children: "경매 등록",
              }),
            }),
            k.jsx(Oi, {
              to: "/history",
              className: "cursor-pointer",
              children: k.jsx("div", {
                className: "text-xl text-scale-500",
                children: "내 경매",
              }),
            }),
            e ? k.jsx(g9, {}) : k.jsx(R4, {}),
          ],
        }),
      ],
    }),
  });
}
function b9() {
  return k.jsx("footer", {
    className: "w-full flex justify-center px-15 py-25",
    children: k.jsx("div", {
      className: "text-xl text-scale-400",
      children: "© 2025 Likelion SNU 13th. All rights reserved.",
    }),
  });
}
function w9() {
  const { pathname: e, search: t, hash: a } = kr();
  return (
    w.useEffect(() => {
      if (a) {
        const i = document.getElementById(a.slice(1));
        if (i) {
          i.scrollIntoView({ block: "start" });
          return;
        }
      }
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, [e, t, a]),
    null
  );
}
function S9() {
  return k.jsxs("div", {
    className: "w-full bg-bg-default",
    children: [
      k.jsx(v9, {}),
      k.jsxs("main", {
        className: "min-h-screen pt-22",
        children: [k.jsx(w9, {}), k.jsx(gA, {})],
      }),
      k.jsx(b9, {}),
    ],
  });
}
const _9 = w.lazy(() =>
    jr(() => import("./HomePage-NzXHq9EW.js"), __vite__mapDeps([0, 1, 2])),
  ),
  E9 = w.lazy(() =>
    jr(
      () => import("./AuctionSearchPage-D_6_vK0x.js"),
      __vite__mapDeps([3, 1, 2]),
    ),
  ),
  x9 = w.lazy(() =>
    jr(
      () => import("./AuctionRoomPage-QpC_UVUV.js"),
      __vite__mapDeps([4, 1, 2]),
    ),
  ),
  R9 = w.lazy(() =>
    jr(
      () => import("./AuctionCreatePage-CsnrMbJC.js"),
      __vite__mapDeps([5, 2]),
    ),
  ),
  O9 = w.lazy(() => jr(() => import("./Auth-C21Ccg3x.js"), [])),
  A9 = w.lazy(() => jr(() => import("./PaymentApprovalPage-xDFN86jY.js"), [])),
  C9 = w.lazy(() => jr(() => import("./PaymentCancelPage-CVJzypY7.js"), [])),
  T9 = w.lazy(() => jr(() => import("./PaymentFailPage-DP_YBoZs.js"), [])),
  D9 = w.lazy(() => jr(() => import("./PaymentHistoryPage-BPY2yuCO.js"), [])),
  M9 = w.lazy(() => jr(() => import("./HistoryPage-Wyy0w-PP.js"), [])),
  N9 = [{ path: Or.HOME.ROOT, element: k.jsx(_9, {}) }],
  z9 = [
    { path: Or.AUCTION.ROOT, element: k.jsx(E9, {}) },
    { path: Or.AUCTION.ROOM, element: k.jsx(x9, {}) },
  ],
  k9 = [{ path: Or.CREATE.ROOT, element: k.jsx(R9, {}) }],
  j9 = [{ path: Or.AUTH.ROOT, element: k.jsx(O9, {}) }],
  L9 = [{ path: Or.HISTORY.ROOT, element: k.jsx(M9, {}) }],
  U9 = [
    { path: Or.PAYMENT.APPROVAL, element: k.jsx(A9, {}) },
    { path: Or.PAYMENT.CANCEL, element: k.jsx(C9, {}) },
    { path: Or.PAYMENT.FAIL, element: k.jsx(T9, {}) },
    { path: Or.PAYMENT.HISTORY, element: k.jsx(D9, {}) },
  ],
  P9 = [...N9, ...z9, ...k9, ...j9, ...U9, ...L9],
  F9 = $A([{ element: k.jsx(S9, {}), children: P9 }]),
  gE = w.createContext(void 0),
  Xj = (e) => {
    const t = w.useContext(gE);
    if (!t)
      throw new Error("No QueryClient set, use QueryClientProvider to set one");
    return t;
  },
  B9 = ({ client: e, children: t }) => (
    w.useEffect(
      () => (
        e.mount(),
        () => {
          e.unmount();
        }
      ),
      [e],
    ),
    k.jsx(gE.Provider, { value: e, children: t })
  ),
  V9 = {
    setTimeout: (e, t) => setTimeout(e, t),
    clearTimeout: (e) => clearTimeout(e),
    setInterval: (e, t) => setInterval(e, t),
    clearInterval: (e) => clearInterval(e),
  };
var $9 = class {
  #e = V9;
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
const Fm = new $9();
function H9(e) {
  setTimeout(e, 0);
}
const Z9 = typeof window > "u" || "Deno" in globalThis;
function tr() {}
function I9(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function q9(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function G9(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function sl(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function sw(e, t) {
  const {
    type: a = "all",
    exact: i,
    fetchStatus: s,
    predicate: u,
    queryKey: c,
    stale: d,
  } = e;
  if (c) {
    if (i) {
      if (t.queryHash !== ey(c, t.options)) return !1;
    } else if (!Fo(t.queryKey, c)) return !1;
  }
  if (a !== "all") {
    const m = t.isActive();
    if ((a === "active" && !m) || (a === "inactive" && m)) return !1;
  }
  return !(
    (typeof d == "boolean" && t.isStale() !== d) ||
    (s && s !== t.state.fetchStatus) ||
    (u && !u(t))
  );
}
function lw(e, t) {
  const { exact: a, status: i, predicate: s, mutationKey: u } = e;
  if (u) {
    if (!t.options.mutationKey) return !1;
    if (a) {
      if (vl(t.options.mutationKey) !== vl(u)) return !1;
    } else if (!Fo(t.options.mutationKey, u)) return !1;
  }
  return !((i && t.state.status !== i) || (s && !s(t)));
}
function ey(e, t) {
  return (t?.queryKeyHashFn || vl)(e);
}
function vl(e) {
  return JSON.stringify(e, (t, a) =>
    Bm(a)
      ? Object.keys(a)
          .sort()
          .reduce((i, s) => ((i[s] = a[s]), i), {})
      : a,
  );
}
function Fo(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (e && t && typeof e == "object" && typeof t == "object") {
    if (Array.isArray(e) && Array.isArray(t)) {
      if (t.length > e.length) return !1;
      for (let i = 0; i < t.length; i++) if (!Fo(e[i], t[i])) return !1;
      return !0;
    }
    const a = Object.keys(t);
    for (const i of a) if (!Fo(e[i], t[i])) return !1;
    return !0;
  }
  return !1;
}
const vE = Object.prototype.hasOwnProperty;
function bE(e, t, a = 0) {
  if (e === t) return e;
  if (a > 500) return t;
  const i = uw(e) && uw(t);
  if (!i && !(Bm(e) && Bm(t))) return t;
  const s = (i ? e : Object.keys(e)).length,
    u = i ? t : Object.keys(t),
    c = u.length,
    d = i ? new Array(c) : {};
  let m = 0;
  for (let h = 0; h < c; h++) {
    const y = i ? h : u[h],
      g = e[y],
      v = t[y];
    if (g === v) {
      ((d[y] = g), (i ? h < s : vE.call(e, y)) && m++);
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
    const _ = bE(g, v, a + 1);
    ((d[y] = _), _ === g && m++);
  }
  return s === c && m === s ? e : d;
}
function Jj(e, t) {
  if (!t || Object.keys(e).length !== Object.keys(t).length) return !1;
  for (const a of Object.keys(e))
    if (!vE.call(t, a) || e[a] !== t[a]) return !1;
  return !0;
}
function uw(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function Bm(e) {
  if (!cw(e)) return !1;
  const t = Object.getPrototypeOf(e),
    a = t?.constructor;
  if (a === void 0) return !0;
  if (typeof a != "function") return !1;
  const i = a.prototype;
  return !(
    !cw(i) ||
    !i.hasOwnProperty("isPrototypeOf") ||
    t !== Object.prototype
  );
}
function cw(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Y9(e) {
  return new Promise((t) => {
    Fm.setTimeout(t, e);
  });
}
function K9(e, t, a) {
  return typeof a.structuralSharing == "function"
    ? a.structuralSharing(e, t)
    : a.structuralSharing !== !1
      ? bE(e, t)
      : t;
}
function Q9(e, t, a = 0) {
  const i = [...e, t];
  return a && i.length > a ? i.slice(-a) : i;
}
function X9(e, t, a = 0) {
  const i = [t, ...e];
  return a && i.length > a ? i.slice(0, a) : i;
}
const ty = Symbol();
function wE(e, t) {
  return !e.queryFn && t?.initialPromise
    ? () => t.initialPromise
    : !e.queryFn || e.queryFn === ty
      ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`))
      : e.queryFn;
}
function Wj(e, t) {
  return typeof e == "function" ? e(...t) : !!e;
}
const ny = Symbol();
function J9(e, t, a, i) {
  let s = !1,
    u;
  return (
    Object.defineProperties(e, {
      [ny]: { value: i },
      signal: {
        enumerable: !0,
        get: () => (
          (u ??= t()),
          s ||
            ((s = !0),
            u.aborted ? a() : u.addEventListener("abort", a, { once: !0 })),
          u
        ),
      },
    }),
    e
  );
}
let W9 = () => Z9;
const SE = () => W9();
var yf = class {
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
  ej = class extends yf {
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
const _E = new ej(),
  tj = H9;
function nj() {
  let e = [],
    t = 0,
    a = (d) => {
      d();
    },
    i = (d) => {
      d();
    },
    s = tj;
  const u = (d) => {
      t
        ? e.push(d)
        : s(() => {
            a(d);
          });
    },
    c = () => {
      const d = e;
      ((e = []),
        d.length &&
          s(() => {
            i(() => {
              d.forEach((m) => {
                a(m);
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
        u(() => {
          d(...m);
        });
      },
    schedule: u,
    setNotifyFunction: (d) => {
      a = d;
    },
    setBatchNotifyFunction: (d) => {
      i = d;
    },
    setScheduler: (d) => {
      s = d;
    },
  };
}
const mn = nj();
var rj = class extends yf {
  #e = !0;
  #t;
  #n;
  constructor() {
    (super(),
      (this.#n = (e) => {
        if (typeof window < "u" && window.addEventListener) {
          const t = () => e(!0),
            a = () => e(!1);
          return (
            window.addEventListener("online", t, !1),
            window.addEventListener("offline", a, !1),
            () => {
              (window.removeEventListener("online", t),
                window.removeEventListener("offline", a));
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
const Bc = new rj();
function aj(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function EE(e) {
  return (e ?? "online") === "online" ? Bc.isOnline() : !0;
}
var Vm = class extends Error {
  constructor(e) {
    (super("CancelledError"),
      (this.revert = e?.revert),
      (this.silent = e?.silent));
  }
};
function xE(e) {
  let t = !1,
    a = 0,
    i,
    s = "pending",
    u,
    c;
  const d = new Promise((F, D) => {
    ((u = F), (c = D));
  });
  d.catch(tr);
  const m = () => s !== "pending",
    h = (F) => {
      if (!m()) {
        const D = new Vm(F);
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
      _E.isFocused() &&
      (e.networkMode === "always" || Bc.isOnline()) &&
      e.canRun(),
    _ = () => EE(e.networkMode) && e.canRun(),
    S = (F) => {
      m() || (i?.(), (s = "resolved"), u(F));
    },
    E = (F) => {
      m() || (i?.(), (s = "rejected"), c(F));
    },
    x = (F) =>
      new Promise((D) => {
        ((i = (B) => {
          (m() || F()) && D(B);
        }),
          e.onPause?.());
      }).then(() => {
        ((i = void 0), m() || e.onContinue?.());
      }),
    T = () => {
      if (m()) return;
      let F;
      const D = a === 0 ? e.initialPromise : void 0;
      try {
        F = D ?? e.fn();
      } catch (B) {
        F = Promise.reject(B);
      }
      Promise.resolve(F)
        .then(S)
        .catch((B) => {
          if (m()) return;
          const L = e.retry ?? (SE() ? 0 : 3),
            C = e.retryDelay ?? aj,
            Y = typeof C == "function" ? C(a, B) : C,
            Q =
              L === !0 ||
              (typeof L == "number" && a < L) ||
              (typeof L == "function" && L(a, B));
          if (t || !Q) {
            E(B);
            return;
          }
          (a++,
            e.onFail?.(a, B),
            Y9(Y)
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
var RE = class {
  #e;
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    (this.clearGcTimeout(),
      q9(this.gcTime) &&
        (this.#e = Fm.setTimeout(() => {
          this.optionalRemove();
        }, this.gcTime)));
  }
  updateGcTime(e) {
    this.gcTime = Math.max(this.gcTime || 0, e ?? (SE() ? 1 / 0 : 3e5));
  }
  clearGcTimeout() {
    this.#e !== void 0 && (Fm.clearTimeout(this.#e), (this.#e = void 0));
  }
};
function ij(e) {
  return {
    onFetch: (t, a) => {
      const i = t.options,
        s = t.fetchOptions?.meta?.fetchMore?.direction,
        u = t.state.data?.pages || [],
        c = t.state.data?.pageParams || [];
      let d = { pages: [], pageParams: [] },
        m = 0;
      const h = async () => {
        let y = !1;
        const g = t,
          v = (E) => {
            J9(
              E,
              () => t.signal,
              () => (y = !0),
              g[ny],
            );
          },
          _ = wE(t.options, t.fetchOptions),
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
              { maxPages: L } = t.options,
              C = T ? X9 : Q9;
            return {
              pages: C(E.pages, B, L),
              pageParams: C(E.pageParams, x, L),
            };
          };
        if (s && u.length) {
          const E = s === "backward",
            x = E ? oj : fw,
            T = { pages: u, pageParams: c };
          d = await S(T, x(i, T), E);
        } else {
          const E = e ?? u.length;
          do {
            const x =
              m === 0
                ? c[0] === void 0
                  ? i.initialPageParam
                  : c[0]
                : fw(i, d);
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
              a,
            ))
        : (t.fetchFn = h);
    },
  };
}
function fw(e, { pages: t, pageParams: a }) {
  const i = t.length - 1;
  return t.length > 0 ? e.getNextPageParam(t[i], t, a[i], a) : void 0;
}
function oj(e, { pages: t, pageParams: a }) {
  return t.length > 0 ? e.getPreviousPageParam?.(t[0], t, a[0], a) : void 0;
}
var sj = class extends RE {
  #e;
  #t;
  #n;
  #a;
  #i;
  #r;
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
      (this.#a = this.#i.getQueryCache()),
      (this.queryKey = e.queryKey),
      (this.queryHash = e.queryHash),
      (this.#t = hw(this.options)),
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
    return this.#r?.promise;
  }
  setOptions(e) {
    if (
      ((this.options = { ...this.#l, ...e }),
      e?._type && (this.#e = e._type),
      this.updateGcTime(this.options.gcTime),
      this.state && this.state.data === void 0)
    ) {
      const t = hw(this.options);
      t.data !== void 0 &&
        (this.setState(dw(t.data, t.dataUpdatedAt)), (this.#t = t));
    }
  }
  optionalRemove() {
    !this.observers.length &&
      this.state.fetchStatus === "idle" &&
      this.#a.remove(this);
  }
  setData(e, t) {
    const a = K9(this.state.data, e, this.options);
    return (
      this.#s({
        data: a,
        type: "success",
        dataUpdatedAt: t?.updatedAt,
        manual: t?.manual,
      }),
      a
    );
  }
  setState(e) {
    this.#s({ type: "setState", state: e });
  }
  cancel(e) {
    const t = this.#r?.promise;
    return (this.#r?.cancel(e), t ? t.then(tr).catch(tr) : Promise.resolve());
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
    return this.observers.some((e) => sl(e.options.enabled, this) !== !1);
  }
  isDisabled() {
    return this.getObserversCount() > 0
      ? !this.isActive()
      : this.options.queryFn === ty || !this.isFetched();
  }
  isFetched() {
    return this.state.dataUpdateCount + this.state.errorUpdateCount > 0;
  }
  isStatic() {
    return this.state.data === void 0
      ? !1
      : this.getObserversCount() > 0
        ? this.observers.some((e) => sl(e.options.staleTime, this) === "static")
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
          : !G9(this.state.dataUpdatedAt, e);
  }
  onFocus() {
    (this.observers
      .find((e) => e.shouldFetchOnWindowFocus())
      ?.refetch({ cancelRefetch: !1 }),
      this.#r?.continue());
  }
  onOnline() {
    (this.observers
      .find((e) => e.shouldFetchOnReconnect())
      ?.refetch({ cancelRefetch: !1 }),
      this.#r?.continue());
  }
  addObserver(e) {
    this.observers.includes(e) ||
      (this.observers.push(e),
      this.clearGcTimeout(),
      this.#a.notify({ type: "observerAdded", query: this, observer: e }));
  }
  removeObserver(e) {
    const t = this.observers.indexOf(e);
    t !== -1 &&
      (this.observers.splice(t, 1),
      this.observers.length ||
        (this.#r &&
          (this.#u ||
          (this.state.fetchStatus === "paused" &&
            this.state.status === "pending")
            ? this.#r.cancel({ revert: !0 })
            : this.#r.cancelRetry()),
        this.scheduleGc()),
      this.#a.notify({ type: "observerRemoved", query: this, observer: e }));
  }
  getObserversCount() {
    return this.observers.length;
  }
  invalidate() {
    this.state.isInvalidated || this.#s({ type: "invalidate" });
  }
  async fetch(e, t) {
    if (this.state.fetchStatus !== "idle" && this.#r?.status() !== "rejected") {
      if (this.state.data !== void 0 && t?.cancelRefetch)
        this.cancel({ silent: !0 });
      else if (this.#r && this.#o) return (this.#r.continueRetry(), this.#o);
    }
    if ((e && this.setOptions(e), !this.options.queryFn)) {
      const h = this.observers.find((y) => y.options.queryFn);
      h && this.setOptions(h.options);
    }
    const a = new AbortController(),
      i = (h) => {
        Object.defineProperties(h, {
          [ny]: { value: a.signal, enumerable: !0 },
          signal: { enumerable: !0, get: () => ((this.#u = !0), a.signal) },
        });
      },
      s = () => {
        const h = wE(this.options, t),
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
      ? ij(this.options.pages)
      : this.options.behavior
    )?.onFetch(c, this),
      (this.#n = this.state),
      (this.state.fetchStatus === "idle" ||
        this.state.fetchMeta !== c.fetchOptions?.meta) &&
        this.#s({ type: "fetch", meta: c.fetchOptions?.meta }));
    const d = (this.#r = xE({
        initialPromise: t?.initialPromise,
        fn: c.fetchFn,
        onCancel: (h) => {
          (h instanceof Vm &&
            h.revert &&
            this.setState({ ...this.#n, fetchStatus: "idle" }),
            a.abort());
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
            this.#a.config.onSuccess?.(h, this),
            this.#a.config.onSettled?.(h, this.state.error, this),
            h
          );
        } catch (h) {
          if (h instanceof Vm) {
            if (h.silent) {
              if (this.#r !== d && this.#o) return this.#o;
              throw h;
            } else if (h.revert) {
              if (this.state.data === void 0) throw h;
              return this.state.data;
            }
          }
          throw (
            this.#s({ type: "error", error: h }),
            this.#a.config.onError?.(h, this),
            this.#a.config.onSettled?.(this.state.data, h, this),
            h
          );
        } finally {
          (this.#r === d && ((this.#r = void 0), (this.#o = void 0)),
            this.scheduleGc());
        }
      })();
    return ((this.#o = m), d.start(), m);
  }
  #s(e) {
    const t = (a) => {
      switch (e.type) {
        case "failed":
          return {
            ...a,
            fetchFailureCount: e.failureCount,
            fetchFailureReason: e.error,
          };
        case "pause":
          return { ...a, fetchStatus: "paused" };
        case "continue":
          return { ...a, fetchStatus: "fetching" };
        case "fetch":
          return {
            ...a,
            ...lj(a.data, this.options),
            fetchMeta: e.meta ?? null,
          };
        case "success":
          const i = {
            ...a,
            ...dw(e.data, e.dataUpdatedAt),
            dataUpdateCount: a.dataUpdateCount + 1,
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
            ...a,
            error: s,
            errorUpdateCount: a.errorUpdateCount + 1,
            errorUpdatedAt: Date.now(),
            fetchFailureCount: a.fetchFailureCount + 1,
            fetchFailureReason: s,
            fetchStatus: "idle",
            status: "error",
            isInvalidated: !0,
          };
        case "invalidate":
          return { ...a, isInvalidated: !0 };
        case "setState":
          return { ...a, ...e.state };
      }
    };
    ((this.state = t(this.state)),
      mn.batch(() => {
        (this.observers.slice().forEach((a) => {
          a.onQueryUpdate();
        }),
          this.#a.notify({ query: this, type: "updated", action: e }));
      }));
  }
};
function lj(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: EE(t.networkMode) ? "fetching" : "paused",
    ...(e === void 0 && { error: null, status: "pending" }),
  };
}
function dw(e, t) {
  return {
    data: e,
    dataUpdatedAt: t ?? Date.now(),
    error: null,
    isInvalidated: !1,
    status: "success",
  };
}
function hw(e) {
  const t =
      typeof e.initialData == "function" ? e.initialData() : e.initialData,
    a = t !== void 0,
    i = a
      ? typeof e.initialDataUpdatedAt == "function"
        ? e.initialDataUpdatedAt()
        : e.initialDataUpdatedAt
      : 0;
  return {
    data: t,
    dataUpdateCount: 0,
    dataUpdatedAt: a ? (i ?? Date.now()) : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: a ? "success" : "pending",
    fetchStatus: "idle",
  };
}
var uj = class extends RE {
  #e;
  #t;
  #n;
  #a;
  constructor(e) {
    (super(),
      (this.#e = e.client),
      (this.mutationId = e.mutationId),
      (this.#n = e.mutationCache),
      (this.#t = []),
      (this.state = e.state || cj()),
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
      this.#a?.continue() ??
      (this.state.status === "pending"
        ? this.execute(this.state.variables)
        : Promise.resolve())
    );
  }
  async execute(e) {
    const t = () => {
        this.#i({ type: "continue" });
      },
      a = {
        client: this.#e,
        meta: this.options.meta,
        mutationKey: this.options.mutationKey,
      },
      i = (this.#a = xE({
        fn: () =>
          this.options.mutationFn
            ? this.options.mutationFn(e, a)
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
      u = !i.canStart();
    try {
      if (s) t();
      else {
        (this.#i({ type: "pending", variables: e, isPaused: u }),
          this.#n.config.onMutate &&
            (await this.#n.config.onMutate(e, this, a)));
        const d = await this.options.onMutate?.(e, a);
        d !== this.state.context &&
          this.#i({ type: "pending", context: d, variables: e, isPaused: u });
      }
      this.state.isPaused && i.canStart() && t();
      const c = await i.start();
      return (
        await this.#n.config.onSuccess?.(c, e, this.state.context, this, a),
        await this.options.onSuccess?.(c, e, this.state.context, a),
        await this.#n.config.onSettled?.(
          c,
          null,
          this.state.variables,
          this.state.context,
          this,
          a,
        ),
        await this.options.onSettled?.(c, null, e, this.state.context, a),
        this.#i({ type: "success", data: c }),
        c
      );
    } catch (c) {
      try {
        await this.#n.config.onError?.(c, e, this.state.context, this, a);
      } catch (d) {
        Promise.reject(d);
      }
      try {
        await this.options.onError?.(c, e, this.state.context, a);
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
          a,
        );
      } catch (d) {
        Promise.reject(d);
      }
      try {
        await this.options.onSettled?.(void 0, c, e, this.state.context, a);
      } catch (d) {
        Promise.reject(d);
      }
      throw (this.#i({ type: "error", error: c }), c);
    } finally {
      (this.#a === i && (this.#a = void 0), this.#n.runNext(this));
    }
  }
  #i(e) {
    const t = (a) => {
      switch (e.type) {
        case "failed":
          return { ...a, failureCount: e.failureCount, failureReason: e.error };
        case "pause":
          return { ...a, isPaused: !0 };
        case "continue":
          return { ...a, isPaused: !1 };
        case "pending":
          return {
            ...a,
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
            ...a,
            data: e.data,
            failureCount: 0,
            failureReason: null,
            error: null,
            status: "success",
            isPaused: !1,
          };
        case "error":
          return {
            ...a,
            data: void 0,
            error: e.error,
            failureCount: a.failureCount + 1,
            failureReason: e.error,
            isPaused: !1,
            status: "error",
          };
      }
    };
    ((this.state = t(this.state)),
      mn.batch(() => {
        (this.#t.forEach((a) => {
          a.onMutationUpdate(e);
        }),
          this.#n.notify({ mutation: this, type: "updated", action: e }));
      }));
  }
};
function cj() {
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
var fj = class extends yf {
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
  build(e, t, a) {
    const i = new uj({
      client: e,
      mutationCache: this,
      mutationId: ++this.#n,
      options: e.defaultMutationOptions(t),
      state: a,
    });
    return (this.add(i), i);
  }
  add(e) {
    this.#e.add(e);
    const t = oc(e);
    if (typeof t == "string") {
      const a = this.#t.get(t);
      a ? a.push(e) : this.#t.set(t, [e]);
    }
    this.notify({ type: "added", mutation: e });
  }
  remove(e) {
    if (this.#e.delete(e)) {
      const t = oc(e);
      if (typeof t == "string") {
        const a = this.#t.get(t);
        if (a)
          if (a.length > 1) {
            const i = a.indexOf(e);
            i !== -1 && a.splice(i, 1);
          } else a[0] === e && this.#t.delete(t);
      }
    }
    this.notify({ type: "removed", mutation: e });
  }
  canRun(e) {
    const t = oc(e);
    if (typeof t == "string") {
      const a = this.#t.get(t)?.find((i) => i.state.status === "pending");
      return !a || a === e;
    } else return !0;
  }
  runNext(e) {
    const t = oc(e);
    return typeof t == "string"
      ? (this.#t
          .get(t)
          ?.find((a) => a !== e && a.state.isPaused)
          ?.continue() ?? Promise.resolve())
      : Promise.resolve();
  }
  clear() {
    mn.batch(() => {
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
    return this.getAll().find((a) => lw(t, a));
  }
  findAll(e = {}) {
    return this.getAll().filter((t) => lw(e, t));
  }
  notify(e) {
    mn.batch(() => {
      this.listeners.forEach((t) => {
        t(e);
      });
    });
  }
  resumePausedMutations() {
    const e = this.getAll().filter((t) => t.state.isPaused);
    return mn.batch(() => Promise.all(e.map((t) => t.continue().catch(tr))));
  }
};
function oc(e) {
  return e.options.scope?.id;
}
var dj = class extends yf {
    #e;
    constructor(e = {}) {
      (super(), (this.config = e), (this.#e = new Map()));
    }
    build(e, t, a) {
      const i = t.queryKey,
        s = t.queryHash ?? ey(i, t);
      let u = this.get(s);
      return (
        u ||
          ((u = new sj({
            client: e,
            queryKey: i,
            queryHash: s,
            options: e.defaultQueryOptions(t),
            state: a,
            defaultOptions: e.getQueryDefaults(i),
          })),
          this.add(u)),
        u
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
      mn.batch(() => {
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
      return this.getAll().find((a) => sw(t, a));
    }
    findAll(e = {}) {
      const t = this.getAll();
      return Object.keys(e).length > 0 ? t.filter((a) => sw(e, a)) : t;
    }
    notify(e) {
      mn.batch(() => {
        this.listeners.forEach((t) => {
          t(e);
        });
      });
    }
    onFocus() {
      mn.batch(() => {
        this.getAll().forEach((e) => {
          e.onFocus();
        });
      });
    }
    onOnline() {
      mn.batch(() => {
        this.getAll().forEach((e) => {
          e.onOnline();
        });
      });
    }
  },
  hj = class {
    #e;
    #t;
    #n;
    #a;
    #i;
    #r;
    #o;
    #l;
    constructor(e = {}) {
      ((this.#e = e.queryCache || new dj()),
        (this.#t = e.mutationCache || new fj()),
        (this.#n = e.defaultOptions || {}),
        (this.#a = new Map()),
        (this.#i = new Map()),
        (this.#r = 0));
    }
    mount() {
      (this.#r++,
        this.#r === 1 &&
          ((this.#o = _E.subscribe(async (e) => {
            e && (await this.resumePausedMutations(), this.#e.onFocus());
          })),
          (this.#l = Bc.subscribe(async (e) => {
            e && (await this.resumePausedMutations(), this.#e.onOnline());
          }))));
    }
    unmount() {
      (this.#r--,
        this.#r === 0 &&
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
        a = this.#e.build(this, t),
        i = a.state.data;
      return i === void 0
        ? this.fetchQuery(e)
        : (e.revalidateIfStale &&
            a.isStaleByTime(sl(t.staleTime, a)) &&
            this.prefetchQuery(t),
          Promise.resolve(i));
    }
    getQueriesData(e) {
      return this.#e.findAll(e).map(({ queryKey: t, state: a }) => [t, a.data]);
    }
    setQueryData(e, t, a) {
      const i = this.defaultQueryOptions({ queryKey: e }),
        s = this.#e.get(i.queryHash)?.state.data,
        u = I9(t, s);
      if (u !== void 0)
        return this.#e.build(this, i).setData(u, { ...a, manual: !0 });
    }
    setQueriesData(e, t, a) {
      return mn.batch(() =>
        this.#e
          .findAll(e)
          .map(({ queryKey: i }) => [i, this.setQueryData(i, t, a)]),
      );
    }
    getQueryState(e) {
      const t = this.defaultQueryOptions({ queryKey: e });
      return this.#e.get(t.queryHash)?.state;
    }
    removeQueries(e) {
      const t = this.#e;
      mn.batch(() => {
        t.findAll(e).forEach((a) => {
          t.remove(a);
        });
      });
    }
    resetQueries(e, t) {
      const a = this.#e;
      return mn.batch(() => {
        const i = a.findAll(e),
          s = new Set(i);
        return (
          i.forEach((u) => {
            u.reset();
          }),
          this.refetchQueries({ type: "active", predicate: (u) => s.has(u) }, t)
        );
      });
    }
    cancelQueries(e, t = {}) {
      const a = { revert: !0, ...t },
        i = mn.batch(() => this.#e.findAll(e).map((s) => s.cancel(a)));
      return Promise.all(i).then(tr).catch(tr);
    }
    invalidateQueries(e, t = {}) {
      return mn.batch(
        () => (
          this.#e.findAll(e).forEach((a) => {
            a.invalidate();
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
      const a = { ...t, cancelRefetch: t.cancelRefetch ?? !0 },
        i = mn.batch(() =>
          this.#e
            .findAll(e)
            .filter((s) => !s.isDisabled() && !s.isStatic())
            .map((s) => {
              let u = s.fetch(void 0, a);
              const c = s.state.fetchStatus === "paused";
              return (
                (!a.throwOnError || c) && (u = u.catch(tr)),
                c ? Promise.resolve() : u
              );
            }),
        );
      return Promise.all(i).then(tr);
    }
    async query(e) {
      const t = this.defaultQueryOptions(e);
      t.retry === void 0 && (t.retry = !1);
      const a = this.#e.build(this, t),
        i = a.isStaleByTime(sl(t.staleTime, a))
          ? await a.fetch(t)
          : a.state.data,
        s = t.select;
      return s ? s(i) : i;
    }
    fetchQuery(e) {
      const t = this.defaultQueryOptions(e);
      t.retry === void 0 && (t.retry = !1);
      const a = this.#e.build(this, t);
      return a.isStaleByTime(sl(t.staleTime, a))
        ? a.fetch(t)
        : Promise.resolve(a.state.data);
    }
    prefetchQuery(e) {
      return this.fetchQuery(e).then(tr).catch(tr);
    }
    infiniteQuery(e) {
      return ((e._type = "infinite"), this.query(e));
    }
    fetchInfiniteQuery(e) {
      return ((e._type = "infinite"), this.fetchQuery(e));
    }
    prefetchInfiniteQuery(e) {
      return this.fetchInfiniteQuery(e).then(tr).catch(tr);
    }
    ensureInfiniteQueryData(e) {
      return ((e._type = "infinite"), this.ensureQueryData(e));
    }
    resumePausedMutations() {
      return Bc.isOnline()
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
      this.#a.set(vl(e), { queryKey: e, defaultOptions: t });
    }
    getQueryDefaults(e) {
      const t = [...this.#a.values()],
        a = {};
      return (
        t.forEach((i) => {
          Fo(e, i.queryKey) && Object.assign(a, i.defaultOptions);
        }),
        a
      );
    }
    setMutationDefaults(e, t) {
      this.#i.set(vl(e), { mutationKey: e, defaultOptions: t });
    }
    getMutationDefaults(e) {
      const t = [...this.#i.values()],
        a = {};
      return (
        t.forEach((i) => {
          Fo(e, i.mutationKey) && Object.assign(a, i.defaultOptions);
        }),
        a
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
        t.queryHash || (t.queryHash = ey(t.queryKey, t)),
        t.refetchOnReconnect === void 0 &&
          (t.refetchOnReconnect = t.networkMode !== "always"),
        t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
        !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
        t.queryFn === ty && (t.enabled = !1),
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
const mj = new hj();
function pj() {
  return k.jsx(B9, {
    client: mj,
    children: k.jsx(o3, {
      children: k.jsx(w.Suspense, {
        fallback: null,
        children: k.jsx(tC, { router: F9 }),
      }),
    }),
  });
}
const OE = document.getElementById("root");
if (!OE) throw new Error("Root element not found");
VR.createRoot(OE).render(k.jsx(w.StrictMode, { children: k.jsx(pj, {}) }));
export {
  SE as A,
  ko as B,
  Gw as C,
  Gc as D,
  G9 as E,
  Kj as F,
  Fm as G,
  _E as H,
  lj as I,
  K9 as J,
  Uj as K,
  Pj as L,
  Fj as M,
  mp as N,
  Lj as O,
  fz as P,
  gj as Q,
  Or as R,
  yf as S,
  Vj as T,
  $j as U,
  Qj as _,
  Yc as a,
  op as b,
  Kc as c,
  yj as d,
  Xj as e,
  Gj as f,
  Bj as g,
  vl as h,
  cj as i,
  k as j,
  tr as k,
  Wj as l,
  L5 as m,
  mn as n,
  Z5 as o,
  Hj as p,
  h5 as q,
  w as r,
  Jj as s,
  Zj as t,
  jw as u,
  Yj as v,
  Lz as w,
  Bz as x,
  sl as y,
  q9 as z,
};
