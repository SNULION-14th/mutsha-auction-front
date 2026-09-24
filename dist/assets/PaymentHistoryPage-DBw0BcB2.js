import { r as l, j as e, e as i } from "./index-BvNJEmao.js";
const x = (t) => {
  const a = new Date(t);
  return Number.isNaN(a.getTime()) ? t : a.toLocaleString("ko-KR");
};
function m() {
  const [t, a] = l.useState([]),
    [c, n] = l.useState(!0),
    [r, d] = l.useState(null);
  return (
    l.useEffect(() => {
      (async () => {
        try {
          a(await i());
        } catch (o) {
          (console.error("결제 내역 조회 실패:", o),
            d("결제 내역을 불러오지 못했습니다."));
        } finally {
          n(!1);
        }
      })();
    }, []),
    e.jsxs("section", {
      className: "max-w-4xl mx-auto px-6 py-16",
      children: [
        e.jsx("h1", {
          className: "text-3xl font-bold text-scale-600 mb-8",
          children: "결제 내역",
        }),
        c &&
          e.jsx("p", {
            className: "text-scale-500",
            children: "결제 내역을 불러오는 중입니다.",
          }),
        r && e.jsx("p", { className: "text-red-500", children: r }),
        !c &&
          !r &&
          t.length === 0 &&
          e.jsx("p", {
            className: "text-scale-500",
            children: "완료된 결제 내역이 없습니다.",
          }),
        !c &&
          !r &&
          t.length > 0 &&
          e.jsx("div", {
            className:
              "overflow-x-auto rounded-xl border border-scale-200 bg-bg-white",
            children: e.jsxs("table", {
              className: "w-full text-left",
              children: [
                e.jsx("thead", {
                  className: "bg-bg-default text-scale-500",
                  children: e.jsxs("tr", {
                    children: [
                      e.jsx("th", { className: "p-4", children: "상품 이름" }),
                      e.jsx("th", { className: "p-4", children: "결제 금액" }),
                      e.jsx("th", { className: "p-4", children: "결제 수단" }),
                      e.jsx("th", { className: "p-4", children: "승인 시간" }),
                    ],
                  }),
                }),
                e.jsx("tbody", {
                  children: t.map((s, o) =>
                    e.jsxs(
                      "tr",
                      {
                        className: "border-t border-scale-200 text-scale-600",
                        children: [
                          e.jsx("td", {
                            className: "p-4",
                            children: s.item_name,
                          }),
                          e.jsxs("td", {
                            className: "p-4",
                            children: [s.amount.toLocaleString(), "원"],
                          }),
                          e.jsx("td", {
                            className: "p-4",
                            children: s.payment_method_type,
                          }),
                          e.jsx("td", {
                            className: "p-4 whitespace-nowrap",
                            children: x(s.approved_at),
                          }),
                        ],
                      },
                      `${s.item_name}-${s.approved_at}-${o}`,
                    ),
                  ),
                }),
              ],
            }),
          }),
      ],
    })
  );
}
export { m as default };
