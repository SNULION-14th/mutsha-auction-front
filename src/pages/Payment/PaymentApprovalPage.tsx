import { useEffect, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import { getUserInfo, paymentApproval } from "@/apis/api";
import { Button } from "@/components/Button";

export default function PaymentApprovalPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [isProcessing, setIsProcessing] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const hasProcessedRef = useRef(false);

  useEffect(() => {
    if (hasProcessedRef.current) {
      return;
    }
    hasProcessedRef.current = true;

    const processPayment = async () => {
      const pgToken = searchParams.get("pg_token");
      const tid = localStorage.getItem("tid");

      if (!pgToken || !tid) {
        setError("결제 정보가 올바르지 않습니다.");
        setIsProcessing(false);
        return;
      }

      const approvalSuccess = await paymentApproval({
        pg_token: pgToken,
        tid,
      });

      if (!approvalSuccess) {
        setError("결제 승인에 실패했습니다.");
        setIsProcessing(false);
        return;
      }

      localStorage.removeItem("tid");
      const latestUserInfo = await getUserInfo();
      if (latestUserInfo) {
        localStorage.setItem("userProfile", JSON.stringify(latestUserInfo));
        window.dispatchEvent(new Event("user-profile-updated"));
      }

      setIsProcessing(false);
      window.setTimeout(() => navigate("/"), 3000);
    };

    processPayment().catch(() => {
      setError("결제 승인 중 오류가 발생했습니다.");
      setIsProcessing(false);
    });
  }, [navigate, searchParams]);

  if (isProcessing) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        결제를 처리하고 있습니다. 잠시만 기다려주세요.
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col gap-6 items-center justify-center">
        <p>{error}</p>
        <Button variant="primary" onButtonClick={() => navigate("/")}>
          메인으로 돌아가기
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col gap-6 items-center justify-center">
      <h1 className="text-2xl font-bold">결제가 완료되었습니다!</h1>
      <p>포인트가 성공적으로 충전되었습니다.</p>
      <Button variant="primary" onButtonClick={() => navigate("/")}>
        바로 이동하기
      </Button>
    </div>
  );
}
