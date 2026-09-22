import { useEffect, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/Button";
import { getUserInfo, paymentApproval } from "@/apis/api";

export default function PaymentApprovalPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [isProcessing, setIsProcessing] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const hasProcessedRef = useRef(false);

  useEffect(() => {
    if (hasProcessedRef.current) return;

    const processPayment = async () => {
      const pgToken = searchParams.get("pg_token");
      const tid = localStorage.getItem("tid");
      if (!pgToken || !tid) {
        setError("결제 정보가 올바르지 않습니다.");
        setIsProcessing(false);
        return;
      }

      hasProcessedRef.current = true;
      const approvalSuccess = await paymentApproval({ pg_token: pgToken, tid });
      if (!approvalSuccess) {
        setError("결제 승인에 실패했습니다.");
        setIsProcessing(false);
        return;
      }

      localStorage.removeItem("tid");
      try {
        const latestUserInfo = await getUserInfo();
        if (latestUserInfo) {
          localStorage.setItem("userProfile", JSON.stringify(latestUserInfo));
        }
      } catch (userInfoError) {
        console.error("사용자 정보 가져오기 실패:", userInfoError);
      }
      setIsProcessing(false);
      setTimeout(() => navigate("/"), 3000);
    };

    processPayment().catch((processError) => {
      console.error("결제 승인 실패:", processError);
      setError("결제 승인 중 오류가 발생했습니다.");
      setIsProcessing(false);
    });
  }, [searchParams, navigate]);

  if (isProcessing) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bg-default">
        결제를 처리하고 있습니다...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-8 bg-bg-default">
        <div className="text-xl">결제 실패: {error}</div>
        <Button
          variant="primary"
          size="large"
          onButtonClick={() => navigate("/")}
        >
          메인으로 돌아가기
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-8 bg-bg-default">
      <div className="text-xl">
        결제가 완료되었습니다! 포인트가 성공적으로 충전되었습니다.
      </div>
      <Button
        variant="primary"
        size="large"
        onButtonClick={() => navigate("/")}
      >
        바로 이동하기
      </Button>
    </div>
  );
}
