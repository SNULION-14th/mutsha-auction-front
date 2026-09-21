import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { getPaymentHistory, type PaymentHistoryItem } from "@/apis/api";
import { Button } from "@/components/Button";
import { numberCommaFormatter } from "@/utils/number";

export default function PaymentHistoryPage() {
  const navigate = useNavigate();
  const [history, setHistory] = useState<PaymentHistoryItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadHistory = async () => {
      const paymentHistory = await getPaymentHistory();
      setHistory(paymentHistory);
      setIsLoading(false);
    };

    loadHistory();
  }, []);

  return (
    <div className="max-w-3xl mx-auto px-8 py-16">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-scale-600">결제 내역</h1>
        <Button variant="gray" onButtonClick={() => navigate("/")}>
          메인으로
        </Button>
      </div>

      {isLoading ? (
        <p className="text-scale-500">결제 내역을 불러오는 중입니다.</p>
      ) : history.length === 0 ? (
        <p className="text-scale-500">결제 내역이 없습니다.</p>
      ) : (
        <ul className="flex flex-col gap-4">
          {history.map((payment) => (
            <li
              key={payment.tid}
              className="rounded-xl border border-black/10 bg-white p-6"
            >
              <div className="flex justify-between gap-4 font-bold text-lg text-scale-600">
                <span>{payment.item_name}</span>
                <span>₩ {numberCommaFormatter(payment.amount)}</span>
              </div>
              <div className="mt-3 text-scale-500">
                <p>결제 수단: {payment.payment_method_type}</p>
                <p>승인 시간: {payment.approved_at}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
