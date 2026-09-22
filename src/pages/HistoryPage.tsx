import { useEffect, useState } from "react";
import { getPaymentHistory, Payment } from "@/apis/api";
import { numberCommaFormatter } from "@/utils/number";

function HistoryPage() {
  const [payments, setPayments] = useState<Payment[]>([]);
  const [message, setMessage] = useState("결제 내역을 불러오는 중입니다.");

  useEffect(() => {
    getPaymentHistory()
      .then((data) => {
        setPayments(data);
        setMessage(data.length ? "" : "아직 결제 내역이 없습니다.");
      })
      .catch(() => setMessage("로그인 후 결제 내역을 확인할 수 있습니다."));
  }, []);

  return (
    <section className="max-w-4xl mx-auto px-8 py-16">
      <h1 className="text-3xl font-bold text-scale-600 mb-8">결제 내역</h1>
      {message && <p className="text-scale-400">{message}</p>}
      <div className="flex flex-col gap-4">
        {payments.map((payment) => (
          <article
            key={payment.id}
            className="rounded-2xl bg-white p-6 shadow-sm flex justify-between gap-6"
          >
            <div>
              <p className="font-bold text-lg text-scale-600">
                {payment.item_name}
              </p>
              <p className="mt-2 text-scale-400">
                {new Date(payment.created_at).toLocaleString("ko-KR")}
              </p>
            </div>
            <div className="text-right">
              <p className="font-bold text-scale-600">
                ₩ {numberCommaFormatter(payment.total_amount)}
              </p>
              <p className="mt-2 text-sm text-scale-400">
                {payment.status === "APPROVED"
                  ? "결제 완료"
                  : payment.status === "FAILED"
                    ? "결제 실패"
                    : "결제 대기"}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default HistoryPage;
