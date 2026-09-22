import { kakaoSignIn } from "@/apis/api";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Auth() {
  const navigate = useNavigate();

  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get("code");
    if (!code) {
      console.error("카카오 code 없음");
      navigate("/");
      return;
    }

    kakaoSignIn(code).then((result) => {
      console.log("kakaoSignIn 결과:", result);
    });
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">카카오 인가코드 확인</h1>
      <p className="mt-4 text-gray-600">
        콘솔에서 인가코드를 확인하세요. (Step2에서 토큰 요청을 구현합니다.)
      </p>
    </div>
  );
}
