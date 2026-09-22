import { r as t, c as r, j as e, n } from "./index-CsaUqdNM.js";
function i() {
  const [c, x] = t.useState([]),
    [a, l] = t.useState("결제 내역을 불러오는 중입니다.");
  return (
    t.useEffect(() => {
      r()
        .then((s) => {
          (x(s), l(s.length ? "" : "아직 결제 내역이 없습니다."));
        })
        .catch(() => l("로그인 후 결제 내역을 확인할 수 있습니다."));
    }, []),
    e.jsxs("section", {
      className: "max-w-4xl mx-auto px-8 py-16",
      children: [
        e.jsx("h1", {
          className: "text-3xl font-bold text-scale-600 mb-8",
          children: "결제 내역",
        }),
        a && e.jsx("p", { className: "text-scale-400", children: a }),
        e.jsx("div", {
          className: "flex flex-col gap-4",
          children: c.map((s) =>
            e.jsxs(
              "article",
              {
                className:
                  "rounded-2xl bg-white p-6 shadow-sm flex justify-between gap-6",
                children: [
                  e.jsxs("div", {
                    children: [
                      e.jsx("p", {
                        className: "font-bold text-lg text-scale-600",
                        children: s.item_name,
                      }),
                      e.jsx("p", {
                        className: "mt-2 text-scale-400",
                        children: new Date(s.created_at).toLocaleString(
                          "ko-KR",
                        ),
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "text-right",
                    children: [
                      e.jsxs("p", {
                        className: "font-bold text-scale-600",
                        children: ["₩ ", n(s.total_amount)],
                      }),
                      e.jsx("p", {
                        className: "mt-2 text-sm text-scale-400",
                        children:
                          s.status === "APPROVED"
                            ? "결제 완료"
                            : s.status === "FAILED"
                              ? "결제 실패"
                              : "결제 대기",
                      }),
                    ],
                  }),
                ],
              },
              s.id,
            ),
          ),
        }),
      ],
    })
  );
}
export { i as default };
