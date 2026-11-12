import {
  j as e,
  D as k,
  a as D,
  B as p,
  r as l,
  g as _,
  u as P,
  b as T,
  c as E,
  f as C,
  p as R,
  R as O,
  P as $,
  d as W,
  e as Q,
  C as A,
} from "./index-B_UmRPDz.js";
import { L } from "./logo_white-B5195eUO.js";
import { b as U, c as M } from "./useAuctionQueries-1QkmGXdu.js";
function y(t) {
  const m = new Date(t.replace(" ", "T")),
    o = new Date(),
    i = m.getTime() - o.getTime();
  if (i <= 0) return "00d 00h 00m";
  const s = Math.floor(i / (1e3 * 60)),
    n = Math.floor(s / 1440),
    u = Math.floor((s % 1440) / 60),
    N = s % 60;
  return `${n}d ${u}h ${N}m`;
}
function F({
  open: t,
  onOpenChange: m,
  title: o,
  closeButton: i,
  confirmButton: s,
  onConfirm: n,
  onClose: u,
}) {
  return e.jsx(k, {
    open: t,
    onOpenChange: m,
    children: e.jsx(D, {
      className: "w-[532px]",
      children: e.jsxs("div", {
        className: "flex flex-col px-8 pb-5 pt-20 gap-10 items-center",
        children: [
          e.jsx("div", {
            className:
              "text-2xl font-bold text-scale-600 whitespace-pre-line text-center",
            children: o,
          }),
          e.jsxs("div", {
            className: "flex w-full gap-5",
            children: [
              e.jsx(p, {
                variant: "outlined",
                className: "flex-1",
                onClick: u,
                children: i,
              }),
              e.jsx(p, {
                variant: "primary",
                onClick: n,
                className: "flex-1",
                children: s,
              }),
            ],
          }),
        ],
      }),
    }),
  });
}
function q({
  bid: t,
  auctionId: m,
  onBidSuccess: o,
  children: i,
  isOpen: s,
  onOpenChange: n,
}) {
  const [u, N] = l.useState(null),
    [h, j] = l.useState(!0),
    [v, g] = l.useState(!1),
    [b, w] = l.useState(!1),
    [x, a] = l.useState(!1),
    d = async () => {
      j(!0);
      try {
        const c = await _();
        N(c);
      } finally {
        j(!1);
      }
    };
  l.useEffect(() => {
    let c = !0;
    return (
      (async () => {
        try {
          const I = await _();
          c && N(I);
        } finally {
          c && j(!1);
        }
      })(),
      () => {
        c = !1;
      }
    );
  }, []);
  const r = u?.remaining_points ?? 0,
    f = l.useMemo(() => (h || !t || t <= 0 ? !1 : r >= t), [h, t, r]),
    S = !h && t > 0 && r < t,
    B = P();
  return e.jsxs(e.Fragment, {
    children: [
      e.jsxs(k, {
        open: s,
        onOpenChange: n,
        children: [
          e.jsx(T, {}),
          e.jsx(E, { asChild: !0, children: i }),
          e.jsx(D, {
            className: "w-[532px]",
            children: e.jsxs("div", {
              className: "px-8 pt-20 pb-5 flex flex-col items-center gap-5",
              children: [
                S
                  ? e.jsxs("p", {
                      className:
                        "text-scale-600 text-2xl font-bold text-center",
                      children: [
                        "포인트가 부족합니다. ",
                        e.jsx("br", {}),
                        " 지금 바로 충전하시겠습니까?",
                      ],
                    })
                  : e.jsxs("p", {
                      className:
                        "text-scale-600 text-2xl font-bold text-center",
                      children: [
                        e.jsx("span", {
                          className: "font-bold text-brand-primary",
                          children: C(t),
                        }),
                        e.jsx("span", {
                          className: "font-bold text-brand-primary",
                          children: " 잔",
                        }),
                        "으로 이 상품에 ",
                        e.jsx("br", {}),
                        "입찰할까요?",
                      ],
                    }),
                e.jsx("div", {
                  children: e.jsxs("span", {
                    className: "text-xl font-bold text-scale-500",
                    children: [
                      "내 포인트 :",
                      h ? "불러오는 중..." : ` ${C(r)} 잔`,
                    ],
                  }),
                }),
                e.jsxs("div", {
                  className:
                    "flex w-full items-center justify-center pt-5 gap-5",
                  children: [
                    e.jsx(p, {
                      variant: "outlined",
                      onClick: () => n(!1),
                      className: "flex-1",
                      children: "취소",
                    }),
                    S
                      ? e.jsx(p, {
                          variant: "primary",
                          onClick: () => w(!0),
                          className: "flex-1",
                          children: "충전하기",
                        })
                      : e.jsx(p, {
                          variant: "primary",
                          disabled: !f || x,
                          onClick: async () => {
                            if (!(!m || x))
                              try {
                                a(!0);
                                const c = await R(m, t);
                                c && (o(c), g(!0));
                              } finally {
                                a(!1);
                              }
                          },
                          className: "flex-1",
                          children: x ? "처리 중 ..." : "입찰",
                        }),
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
      e.jsx(F, {
        open: v,
        onOpenChange: (c) => {
          c || (g(!1), n(!1));
        },
        onClose: () => {
          (g(!1), n(!1));
        },
        title: `입찰이 완료되었어요! 
내 경매에서 확인해 보세요.`,
        closeButton: "닫기",
        confirmButton: "내 경매 보기",
        onConfirm: () => {
          (g(!1), n(!1), B(O.HISTORY.ROOT));
        },
      }),
      e.jsx($, {
        open: b,
        onOpenChange: (c) => {
          c || (w(!1), d());
        },
      }),
    ],
  });
}
function V() {
  const { auctionId: t } = W(),
    m = P(),
    o = Q(),
    i = U(t),
    s = i.data,
    [n, u] = l.useState(""),
    [N, h] = l.useState(!1),
    j = l.useMemo(() => {
      const a = Number(n.replace(/[^\d]/g, ""));
      return Number.isFinite(a) ? a : 0;
    }, [n]),
    [v, g] = l.useState("");
  (l.useEffect(() => {
    if (!t) return;
    const a = "http://127.0.0.1:8000".replace(/^http/, "ws"),
      d = new WebSocket(`${a}/ws/auction/${t}/`);
    return (
      (d.onopen = () => {
        console.log("WebSocket connection established");
      }),
      (d.onmessage = (r) => {
        try {
          const f = JSON.parse(r.data);
          f && f.id !== void 0
            ? (console.log("실시간 경매 상태 업데이트:", f.current_price),
              o.setQueryData(M.detail(t), f))
            : console.warn("수신된 데이터 형식이 다릅니다: ", f);
        } catch (f) {
          console.error("메시지 처리 중 오류 발생:", f);
        }
      }),
      (d.onclose = (r) => {
        console.log("WebSocket connection closed:", r);
      }),
      (d.onerror = (r) => {
        console.error("WebSocket error:", r);
      }),
      () => {
        d.close();
      }
    );
  }, [t, o]),
    l.useEffect(() => {
      if (!s?.end_time) return;
      g(y(s.end_time));
      const a = setInterval(() => {
        g(y(s.end_time));
      }, 1e3);
      return () => {
        clearInterval(a);
      };
    }, [s?.end_time]));
  const b = l.useMemo(() => {
      if (!s) return !1;
      const a = Math.max(s.starting_price ?? 0, (s.current_price ?? 0) + 1);
      return j >= a;
    }, [s, j]),
    w = (a) => {
      (t && o.setQueryData(M.detail(t), a), u(""));
    },
    x = l.useMemo(
      () => (s?.end_time ? v === "00d 00h 00m" : !1),
      [s?.end_time, v],
    );
  return i.isPending
    ? e.jsx("div", {
        className: "w-full py-40 text-center text-scale-400",
        children: "불러오는 중 ...",
      })
    : i.isError || !s
      ? e.jsx("div", {
          className: "w-full px-50 pt-40",
          children: e.jsxs("div", {
            className: "max-w-[1160px] mx-auto text-center",
            children: [
              e.jsx("div", {
                className: "text-2xl text-scale-500 mb-4",
                children: i.error?.message ?? "경매를 찾을 수 없습니다.",
              }),
              e.jsx(p, {
                variant: "primary",
                onClick: () => m("/auction"),
                children: "경매 목록으로 돌아가기",
              }),
            ],
          }),
        })
      : e.jsx("div", {
          className: "w-full px-50 py-30",
          children: e.jsxs("div", {
            className: "max-w-[1062px] mx-auto flex flex-col gap-25",
            children: [
              e.jsxs("div", {
                className: "flex flex-col gap-5",
                children: [
                  e.jsx("div", {
                    className: "text-5xl font-bold text-scale-600",
                    children: "경매 입찰하기",
                  }),
                  e.jsx("div", {
                    className: "text-2xl text-scale-400",
                    children: "멋사 구성원들의 애착템에 입찰해보세요!",
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "w-full h-full flex gap-9",
                children: [
                  e.jsxs("div", {
                    className:
                      "w-[470px] shrink-0 min-h-[577px] rounded-2xl bg-bg-white flex flex-col gap-5 shadow-xl",
                    children: [
                      e.jsx("img", {
                        src: String(s.image_file),
                        className:
                          "w-full h-[392px] object-cover rounded-t-2xl",
                      }),
                      e.jsxs("div", {
                        className: "px-7 py-5 pb-12 flex flex-col gap-6",
                        children: [
                          e.jsx("div", {
                            className: "text-2xl font-bold text-scale-600",
                            children: s.title,
                          }),
                          e.jsx("div", {
                            className: "text-lg text-scale-400",
                            children: s.description,
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className:
                      "w-full min-h-[577px] rounded-2xl bg-bg-white flex flex-col gap-14 shadow-xl px-12.5 py-20 justify-center",
                    children: [
                      e.jsxs("div", {
                        className: "flex flex-col gap-4",
                        children: [
                          e.jsx("div", {
                            className: "text-3xl font-bold text-scale-600",
                            children: "경매 정보",
                          }),
                          e.jsxs("div", {
                            className: "flex items-center justify-between",
                            children: [
                              e.jsx("div", {
                                className: "text-xl font-bold text-scale-500",
                                children: "현재 입찰가",
                              }),
                              e.jsxs("div", {
                                className: "flex items-center gap-3",
                                children: [
                                  e.jsx("img", { src: A, className: "w-10" }),
                                  e.jsxs("div", {
                                    className:
                                      "text-3xl font-bold text-brand-primary",
                                    children: [s.current_price, "잔"],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className: "flex items-center justify-between",
                            children: [
                              e.jsx("div", {
                                className: "text-xl font-bold text-scale-500",
                                children: "남은 시간",
                              }),
                              e.jsx("div", {
                                className: "text-2xl font-bold text-scale-500",
                                children: v || y(s.end_time),
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className: "flex items-center w-full py-2.5",
                            children: [
                              e.jsxs("div", {
                                className: "w-1/2 flex flex-col gap-1.5",
                                children: [
                                  e.jsx("div", {
                                    className:
                                      "text-xl font-bold text-scale-500",
                                    children: "최소 입찰가",
                                  }),
                                  e.jsx("div", {
                                    className: "text-xl text-scale-400",
                                    children: s.starting_price,
                                  }),
                                ],
                              }),
                              e.jsxs("div", {
                                className: "w-1/2 flex flex-col gap-1.5",
                                children: [
                                  e.jsx("div", {
                                    className:
                                      "text-xl font-bold text-scale-500",
                                    children: "판매자",
                                  }),
                                  e.jsx("div", {
                                    className: "text-xl text-scale-400",
                                    children: s.seller_nickname,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className: "flex flex-col gap-7",
                        children: [
                          e.jsx("div", {
                            className: "text-3xl font-bold text-scale-600",
                            children: "입찰하기",
                          }),
                          e.jsxs("div", {
                            className: "flex flex-col gap-2",
                            children: [
                              e.jsxs("div", {
                                className: "flex items-center gap-3",
                                children: [
                                  e.jsx("input", {
                                    type: "number",
                                    inputMode: "numeric",
                                    disabled: x,
                                    min: Math.max(
                                      s.starting_price ?? 0,
                                      (s.current_price ?? 0) + 1,
                                    ),
                                    value: n,
                                    onChange: (a) => {
                                      const d = a.target.value.replace(
                                        /[^\d]/g,
                                        "",
                                      );
                                      u(d.replace(/^0+(?=\d)/, ""));
                                    },
                                    placeholder: x
                                      ? "이미 종료된 경매"
                                      : "입찰가 입력",
                                    className: `flex-1 h-12 rounded-sm border border-scale-200 px-4 placeholder:text-scale-300 focus:outline-none ${x ? "bg-scale-100 text-scale-300 cursor-not-allowed" : "text-scale-600 focus:ring-2 focus:ring-brand-primary/40"}`,
                                  }),
                                  e.jsx("span", {
                                    className: "text-xl text-scale-600",
                                    children: "잔",
                                  }),
                                  x
                                    ? e.jsx(p, {
                                        variant: "darkgray",
                                        className:
                                          "h-12 w-50 px-6 flex gap-2.5 items-center justify-center cursor-not-allowed",
                                        children: "경매 종료",
                                      })
                                    : e.jsx(q, {
                                        bid: j,
                                        auctionId: s.id,
                                        onBidSuccess: w,
                                        isOpen: N,
                                        onOpenChange: h,
                                        children: e.jsxs(p, {
                                          variant: "primary",
                                          disabled: !b,
                                          onClick: () => h(!0),
                                          className:
                                            "h-12 w-50 px-6 flex gap-2.5 items-center justify-center",
                                          children: [
                                            e.jsx("img", {
                                              src: L,
                                              className: "w-5",
                                            }),
                                            "입찰하기",
                                          ],
                                        }),
                                      }),
                                ],
                              }),
                              !x &&
                                !b &&
                                e.jsxs("div", {
                                  className:
                                    "text-base px-2 text-point-warning",
                                  children: [
                                    "최소",
                                    " ",
                                    Math.max(
                                      s.starting_price ?? 0,
                                      (s.current_price ?? 0) + 1,
                                    ),
                                    "잔 이상으로 입력해 주세요.",
                                  ],
                                }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
}
export { V as default };
