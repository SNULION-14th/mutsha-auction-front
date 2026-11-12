import { y as n, z as i, A as u, E as o } from "./index-B_UmRPDz.js";
const t = {
  all: ["auctions"],
  lists: () => [...t.all, "list"],
  list: (e = {}) => [...t.lists(), e],
  recommended: () => [...t.all, "recommended"],
  detail: (e) => ["auction", String(e)],
};
function r(e = {}) {
  return n({ queryKey: t.list(e), queryFn: () => i(e), staleTime: 3e4 });
}
function c() {
  return n({ queryKey: t.recommended(), queryFn: u, staleTime: 6e4 });
}
function l(e) {
  return n({
    queryKey: t.detail(e ?? "missing"),
    enabled: e !== void 0 && e !== "",
    queryFn: async () => {
      const s = await o(e);
      if (!s) throw new Error("경매 정보를 불러오지 못했습니다.");
      return s;
    },
    staleTime: 15e3,
  });
}
export { r as a, l as b, t as c, c as u };
