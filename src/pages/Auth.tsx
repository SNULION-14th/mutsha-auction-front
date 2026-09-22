import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { kakaoSignIn } from "@/apis/api";

export default function Auth() {
  const navigate = useNavigate();

  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get("code");
    if (!code) {
      console.error("카카오 code 없음");
      navigate("/"); // code가 없으면 홈으로 돌려보냄
      return;
    }

    // ✅ Step 2: code를 서버로 보내 토큰 교환 → 유저 정보 조회까지 되는지 확인
    kakaoSignIn(code).then((result) => {
      console.log("kakaoSignIn 결과:", result);
    });

    // TODO: Step 3에서 로그인 처리를 완성합니다.
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">카카오 로그인 처리 중</h1>
      <p className="mt-4 text-gray-600">
        콘솔과 개발자 도구의 Network 탭에서 결과를 확인하세요. (Step 3에서
        로그인 처리를 완성합니다.)
      </p>
    </div>
  );
}
