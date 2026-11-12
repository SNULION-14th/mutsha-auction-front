import { u as a, G as n, r as t, H as i, g as l } from "./index-B_UmRPDz.js";
function f() {
  const e = a(),
    { login: c } = n();
  return (
    t.useEffect(() => {
      (async () => {
        const o = new URLSearchParams(window.location.search).get("code");
        if (!o) {
          (console.error("카카오 code 없음"), e("/"));
          return;
        }
        try {
          if (await i(o)) {
            try {
              const r = await l();
              r
                ? c(r)
                : console.error("사용자 프로필 정보를 가져올 수 없습니다.");
            } catch (r) {
              console.error("사용자 프로필 정보 가져오기 실패:", r);
            }
            e("/", { replace: !0 });
          } else (console.error("카카오 로그인 실패"), e("/"));
        } catch (s) {
          (console.error("카카오 로그인 실패:", s), e("/"));
        }
      })();
    }, []),
    null
  );
}
export { f as default };
