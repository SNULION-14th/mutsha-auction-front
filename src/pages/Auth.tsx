import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getUserInfo, kakaoSignIn } from "@/apis/api";

export default function Auth() {
  const navigate = useNavigate();

  useEffect(() => {
    void (async () => {
      const code = new URLSearchParams(window.location.search).get("code");
      if (!code) {
        console.error("카카오 code 없음");
        navigate("/");
        return;
      }

      try {
        const loginSuccess = await kakaoSignIn(code);
        if (!loginSuccess) {
          console.error("카카오 로그인 실패");
          navigate("/");
          return;
        }

        localStorage.setItem("isLoggedIn", "true");
        const userProfile = await getUserInfo();
        if (userProfile) {
          localStorage.setItem("userProfile", JSON.stringify(userProfile));
        } else {
          console.error("사용자 프로필 정보를 가져올 수 없습니다.");
        }
        window.location.href = "/";
      } catch (error) {
        console.error("카카오 로그인 실패:", error);
        navigate("/");
      }
    })();
  }, [navigate]);

  return null;
}
