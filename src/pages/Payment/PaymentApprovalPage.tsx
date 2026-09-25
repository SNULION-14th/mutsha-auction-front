import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { approvePayment } from "@/apis/api";

export default function PaymentApprovalPage() {
  const requested = useRef(false);
  const [message, setMessage] = useState("결제를 승인하고 있습니다.");
  useEffect(() => {
    if (requested.current) return;
    requested.current = true;
    const pgToken = new URLSearchParams(window.location.search).get("pg_token");
    const tid = localStorage.getItem("kakaoPayTid");
    if (!pgToken || !tid) {
      setMessage("결제 정보가 없습니다. 다시 시도해주세요.");
      return;
    }
    approvePayment(tid, pgToken)
      .then((result) => {
        localStorage.removeItem("kakaoPayTid");
        const saved = localStorage.getItem("userProfile");
        if (saved)
          localStorage.setItem(
            "userProfile",
            JSON.stringify({
              ...JSON.parse(saved),
              remaining_points: result.remaining_points,
            }),
          );
        setMessage("결제가 완료되었습니다.");
      })
      .catch(() =>
        setMessage("결제 승인에 실패했습니다. 결제 내역을 확인해주세요."),
      );
  }, []);
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-5">
      <h1 className="text-2xl font-bold">{message}</h1>
      <Link className="text-brand-primary underline" to="/">
        홈으로 돌아가기
      </Link>
    </div>
  );
}
