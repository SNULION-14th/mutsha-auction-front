import { u as p, j as e, C as g, B as j, r as f } from "./index-B_UmRPDz.js";
import { L as b } from "./logo_white-B5195eUO.js";
import { a as N } from "./useAuctionQueries-1QkmGXdu.js";
function v({ id: s, img: l, title: t, description: i, current_price: a }) {
  const n = p();
  return e.jsxs("div", {
    className: "w-full h-109 flex flex-col bg-white shadow-lg rounded-xl",
    children: [
      e.jsx("img", {
        src: l,
        className: "w-full h-68 object-cover rounded-t-xl",
      }),
      e.jsxs("div", {
        className: "w-full flex flex-col gap-1.5 px-6 py-5",
        children: [
          e.jsx("div", {
            className: "text-lg font-bold text-scale-600",
            children: t,
          }),
          e.jsx("div", {
            className: "text-base text-scale-400 truncate max-w-70",
            children: i,
          }),
        ],
      }),
      e.jsxs("div", {
        className: "w-full flex px-6 justify-between items-center",
        children: [
          e.jsxs("div", {
            className: "flex flex-col gap-1",
            children: [
              e.jsx("div", {
                className: "text-base font-bold text-scale-400",
                children: "현재 입찰가",
              }),
              e.jsxs("div", {
                className: "flex gap-1 items-center",
                children: [
                  e.jsx("img", { src: g, className: "w-6" }),
                  e.jsxs("div", {
                    className: "text-xl font-bold text-brand-primary",
                    children: [a, "잔"],
                  }),
                ],
              }),
            ],
          }),
          e.jsxs(j, {
            variant: "primary",
            className:
              "flex gap-2.5 p-2.5 w-27.5 h-9.5 items-center justify-center",
            onClick: () => n(`/auction/${s}`),
            children: [
              e.jsx("img", { src: b, className: "w-4" }),
              e.jsx("div", {
                className: "text-base font-bold text-bg-white",
                children: "입찰",
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function w(s, l) {
  const t = [],
    i = (a) => t.push(a);
  if (l <= 7) {
    for (let a = 1; a <= l; a++) i(a);
    return t;
  }
  (i(1), s > 3 && i("..."));
  for (let a = Math.max(2, s - 1); a <= Math.min(l - 1, s + 1); a++) i(a);
  return (s < l - 2 && i("..."), i(l), t);
}
function $({
  totalItems: s,
  pageSize: l = 6,
  currentPage: t,
  onPageChange: i,
  className: a = "",
}) {
  const n = Math.max(1, Math.ceil(s / l)),
    c = w(t, n);
  if (n <= 1) return null;
  const o =
      "h-8 min-w-8 px-2 rounded-full text-base flex items-center justify-center transition",
    d =
      "text-scale-300 bg-transparent cursor-not-allowed border border-transparent",
    m =
      "text-scale-500 hover:text-scale-600 hover:bg-scale-100 border border-transparent",
    u = "bg-brand-primary text-bg-white font-bold";
  return e.jsxs("div", {
    className: `w-full flex items-center justify-center gap-2 ${a}`,
    children: [
      e.jsx("button", {
        className: `${o} ${t === 1 ? d : m}`,
        disabled: t === 1,
        onClick: () => i(Math.max(1, t - 1)),
        children: "‹",
      }),
      c.map((r, h) =>
        r === "..."
          ? e.jsx("span", { className: `${o} ${d}`, children: "…" }, `e${h}`)
          : e.jsx(
              "button",
              {
                onClick: () => i(r),
                className: `${o} ${r === t ? u : m}`,
                children: r,
              },
              r,
            ),
      ),
      e.jsx("button", {
        className: `${o} ${t === n ? d : m}`,
        disabled: t === n,
        onClick: () => i(Math.min(n, t + 1)),
        children: "›",
      }),
    ],
  });
}
function y(s) {
  if (!s) return "";
  if (/^https?:\/\//i.test(s)) return s;
  const l = "http://127.0.0.1:8000".replace(/\/+$/, "") || "",
    t = String(s).replace(/^\/+/, "") || "";
  return `${l}/${t}`;
}
const x = 6;
function M(s) {
  const l = s.image_file || s.image_file_url || s.image_url || "";
  return y(l);
}
function k() {
  const [s, l] = f.useState(1),
    t = N({ status: "active" }),
    i = t.data ?? [],
    a = i.length,
    n = f.useMemo(() => {
      const c = (s - 1) * x;
      return i.slice(c, c + x);
    }, [i, s]);
  return (
    f.useEffect(() => {
      const c = Math.max(1, Math.ceil(a / x));
      s > c && l(c);
    }, [a, s]),
    e.jsx("div", {
      className: "w-full px-50 py-30",
      children: e.jsxs("div", {
        className: "max-w-[1062px] flex flex-col mx-auto gap-25",
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
          t.isPending
            ? e.jsx("div", {
                className: "text-center text-scale-400 py-20",
                children: "불러오는 중 ...",
              })
            : t.isError
              ? e.jsx("div", {
                  className: "text-center text-point-warning py-20",
                  children:
                    t.error.message || "경매 목록을 불러오지 못했습니다.",
                })
              : a === 0
                ? e.jsx("div", {
                    className: "text-center text-scale-400 py-20",
                    children: "아직 진행 중인 경매가 없어요.",
                  })
                : e.jsxs(e.Fragment, {
                    children: [
                      e.jsx("div", {
                        className: "grid grid-cols-3 gap-6 min-h-[900px]",
                        children: n.map((c) =>
                          e.jsx(
                            v,
                            {
                              id: c.id,
                              img: M(c),
                              title: c.title,
                              description: c.description,
                              current_price: c.current_price,
                            },
                            c.id,
                          ),
                        ),
                      }),
                      e.jsx($, {
                        totalItems: a,
                        pageSize: x,
                        currentPage: s,
                        onPageChange: l,
                        className: "mt-8",
                      }),
                    ],
                  }),
        ],
      }),
    })
  );
}
export { k as default };
