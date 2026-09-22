import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { getUserInfo, kakaoSignIn } from "@/apis/api";

export default function Auth() {
  const navigate = useNavigate();
  const hasRequestedRef = useRef(false);

  useEffect(() => {
    if (hasRequestedRef.current) {
      return;
    }
    hasRequestedRef.current = true;

    const requestKakaoSignIn = async () => {
      const code = new URLSearchParams(window.location.search).get("code");

      if (!code) {
        console.error("카카오 인가 코드가 없습니다.");
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
          console.error("사용자 프로필을 가져오지 못했습니다.");
        }

        window.location.href = "/";
      } catch (error) {
        console.error("카카오 로그인 실패:", error);
        navigate("/");
      }
    };

    requestKakaoSignIn();
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">카카오 인가코드 확인</h1>
      <p className="mt-4 text-gray-600">카카오 로그인 처리 중입니다.</p>
    </div>
  );
}
