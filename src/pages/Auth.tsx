import { getUserInfo, kakaoSignIn } from "@/apis/api";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Auth() {
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const code = new URLSearchParams(window.location.search).get("code");
      if (!code) {
        console.error("카카오 code 없음");
        navigate("/");
        return;
      }
      try {
        const loginSuccess = await kakaoSignIn(code);
        if (loginSuccess) {
          localStorage.setItem("isLoggedIn", "true");
          try {
            const userProfile = await getUserInfo();
            if (userProfile) {
              localStorage.setItem("userProfile", JSON.stringify(userProfile));
            } else {
              console.error("사용자 프로필 정보를 가져올 수 없습니다.");
            }
          } catch (userInfoError) {
            console.error("사용자 프로필 정보 가져오기 실패:", userInfoError);
          }

          window.location.href = "/";
        } else {
          console.error("카카오 로그인 실패");
          navigate("/");
        }
      } catch (error) {
        console.error("카카오 로그인 실패:", error);
        navigate("/");
      }
    })();
  }, []);
  return null;
}
