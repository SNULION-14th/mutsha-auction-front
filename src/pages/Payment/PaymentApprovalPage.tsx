import { useEffect, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import { getUserInfo, paymentApproval } from "@/apis/api";
import { Button } from "@/components/Button";

type ApprovalStatus = "processing" | "success" | "error";

export default function PaymentApprovalPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [approvalStatus, setApprovalStatus] =
    useState<ApprovalStatus>("processing");
  const [errorMessage, setErrorMessage] = useState("");
  const hasProcessed = useRef(false);

  useEffect(() => {
    if (hasProcessed.current) return;
    hasProcessed.current = true;

    void (async () => {
      const pgToken = searchParams.get("pg_token");
      const tid = localStorage.getItem("tid");

      if (!pgToken || !tid) {
        setErrorMessage("결제 승인 정보가 올바르지 않습니다.");
        setApprovalStatus("error");
        return;
      }

      const approvalResult = await paymentApproval({
        pg_token: pgToken,
        tid,
      });

      if (!approvalResult) {
        setErrorMessage("결제 승인에 실패했습니다. 다시 시도해주세요.");
        setApprovalStatus("error");
        return;
      }

      localStorage.removeItem("tid");
      const latestUserInfo = await getUserInfo();
      if (latestUserInfo) {
        localStorage.setItem("userProfile", JSON.stringify(latestUserInfo));
      }
      setApprovalStatus("success");
    })();
  }, [searchParams]);

  if (approvalStatus === "processing") {
    return (
      <div className="min-h-[60vh] flex items-center justify-center text-xl font-bold">
        결제를 승인하고 있습니다...
      </div>
    );
  }

  if (approvalStatus === "error") {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-6">
        <h1 className="text-2xl font-bold">결제 승인 실패</h1>
        <p className="text-scale-500">{errorMessage}</p>
        <Button onButtonClick={() => navigate("/")}>메인으로 돌아가기</Button>
      </div>
    );
  }

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center gap-6">
      <h1 className="text-2xl font-bold">결제가 완료되었습니다.</h1>
      <p className="text-scale-500">포인트가 정상적으로 충전되었습니다.</p>
      <Button onButtonClick={() => (window.location.href = "/")}>
        메인으로 돌아가기
      </Button>
    </div>
  );
}
