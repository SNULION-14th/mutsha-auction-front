import {
  u as f,
  e as u,
  r as c,
  j as e,
  B as d,
  p as h,
  d as p,
} from "./index-DfqL7krD.js";
function N() {
  const s = f(),
    [n] = u(),
    [m, t] = c.useState(!0),
    [i, l] = c.useState(null),
    o = c.useRef(!1);
  return (
    c.useEffect(() => {
      if (o.current) return;
      (async () => {
        try {
          const r = n.get("pg_token"),
            x = localStorage.getItem("tid");
          if (!r || !x) {
            (l("결제 정보가 올바르지 않습니다."), t(!1));
            return;
          }
          if (((o.current = !0), await h({ pg_token: r, tid: x }))) {
            localStorage.removeItem("tid");
            try {
              const a = await p();
              a && localStorage.setItem("userProfile", JSON.stringify(a));
            } catch (a) {
              console.error("사용자 정보 가져오기 실패:", a);
            }
            (t(!1),
              setTimeout(() => {
                s("/");
              }, 3e3));
          } else (l("결제 승인에 실패했습니다."), t(!1));
        } catch (r) {
          (console.error("결제 승인 실패:", r),
            l("결제 승인 중 오류가 발생했습니다."),
            t(!1));
        }
      })();
    }, [n, s]),
    m
      ? e.jsx("div", {
          className:
            "min-h-screen flex items-center justify-center bg-bg-default",
          children: e.jsxs("div", {
            className: "flex flex-col items-center gap-8",
            children: [
              e.jsx("div", {
                className:
                  "w-16 h-16 border-4 border-brand-primary border-t-transparent rounded-full animate-spin",
              }),
              e.jsxs("div", {
                className: "text-center",
                children: [
                  e.jsx("h1", {
                    className: "text-2xl font-bold text-scale-600 mb-2",
                    children: "결제를 처리하고 있습니다",
                  }),
                  e.jsx("p", {
                    className: "text-scale-500",
                    children: "잠시만 기다려주세요...",
                  }),
                ],
              }),
            ],
          }),
        })
      : i
        ? e.jsx("div", {
            className:
              "min-h-screen flex items-center justify-center bg-bg-default",
            children: e.jsxs("div", {
              className: "flex flex-col items-center gap-8 text-center",
              children: [
                e.jsx("div", {
                  className:
                    "w-20 h-20 bg-red-100 rounded-full flex items-center justify-center",
                  children: e.jsx("span", {
                    className: "text-4xl",
                    children: "❌",
                  }),
                }),
                e.jsxs("div", {
                  children: [
                    e.jsx("h1", {
                      className: "text-2xl font-bold text-scale-600 mb-2",
                      children: "결제 실패",
                    }),
                    e.jsx("p", { className: "text-scale-500", children: i }),
                  ],
                }),
                e.jsx(d, {
                  variant: "primary",
                  size: "large",
                  onButtonClick: () => s("/"),
                  children: "메인으로 돌아가기",
                }),
              ],
            }),
          })
        : e.jsx("div", {
            className:
              "min-h-screen flex items-center justify-center bg-bg-default",
            children: e.jsxs("div", {
              className: "flex flex-col items-center gap-8 text-center",
              children: [
                e.jsx("div", {
                  className:
                    "w-20 h-20 bg-green-100 rounded-full flex items-center justify-center",
                  children: e.jsx("span", {
                    className: "text-4xl",
                    children: "✅",
                  }),
                }),
                e.jsxs("div", {
                  children: [
                    e.jsx("h1", {
                      className: "text-2xl font-bold text-scale-600 mb-2",
                      children: "결제가 완료되었습니다!",
                    }),
                    e.jsx("p", {
                      className: "text-scale-500 mb-1",
                      children: "포인트가 성공적으로 충전되었습니다.",
                    }),
                    e.jsx("p", {
                      className: "text-sm text-scale-400",
                      children: "잠시 후 메인 페이지로 이동합니다...",
                    }),
                  ],
                }),
                e.jsx(d, {
                  variant: "primary",
                  size: "large",
                  onButtonClick: () => s("/"),
                  children: "바로 이동하기",
                }),
              ],
            }),
          })
  );
}
export { N as default };
