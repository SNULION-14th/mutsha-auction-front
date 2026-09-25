import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "@/apis/axios";
import type { UserProfile } from "@/apis/api";

export default function Auth() {
  const navigate = useNavigate();
  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get("code");
    if (!code) {
      navigate("/", { replace: true });
      return;
    }
    let cancelled = false;
    api
      .post<UserProfile>("/user/kakao/callback/", { code })
      .then(({ data }) => {
        if (cancelled) return;
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("userProfile", JSON.stringify(data));
        localStorage.setItem("isFirstLogin", data.nickname ? "false" : "true");
        navigate("/", { replace: true });
      })
      .catch(() => {
        if (!cancelled) navigate("/", { replace: true });
      });
    return () => {
      cancelled = true;
    };
  }, [navigate]);
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">로그인 중입니다</h1>
      <p className="mt-4 text-gray-600">카카오 계정 정보를 확인하고 있어요.</p>
    </div>
  );
}
