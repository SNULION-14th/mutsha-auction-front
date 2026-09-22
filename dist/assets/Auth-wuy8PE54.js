import { u as t, r as a, k as c, d as n } from "./index-DfqL7krD.js";
function l() {
  const o = t();
  return (
    a.useEffect(() => {
      (async () => {
        const r = new URLSearchParams(window.location.search).get("code");
        if (!r) {
          (console.error("카카오 code 없음"), o("/"));
          return;
        }
        try {
          if (await c(r)) {
            localStorage.setItem("isLoggedIn", "true");
            try {
              const e = await n();
              e
                ? localStorage.setItem("userProfile", JSON.stringify(e))
                : console.error("사용자 프로필 정보를 가져올 수 없습니다.");
            } catch (e) {
              console.error("사용자 프로필 정보 가져오기 실패:", e);
            }
            window.location.href = "/";
          } else (console.error("카카오 로그인 실패"), o("/"));
        } catch (s) {
          (console.error("카카오 로그인 실패:", s), o("/"));
        }
      })();
    }, []),
    null
  );
}
export { l as default };
