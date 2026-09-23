import { useEffect, useState } from "react";
import { getPaymentHistory, PaymentHistory } from "@/apis/api";

export default function PaymentHistoryPage() {
  const [payments, setPayments] = useState<PaymentHistory[]>([]);

  useEffect(() => {
    const loadPayments = async () => {
      setPayments(await getPaymentHistory());
    };

    loadPayments();
  }, []);

  return (
    <div className="max-w-3xl mx-auto py-16 px-8">
      <h1 className="text-3xl font-bold text-scale-600 mb-8">결제 내역</h1>
      <div className="flex flex-col gap-4">
        {payments.map((payment, index) => (
          <div
            key={`${payment.approved_at}-${index}`}
            className="border rounded-xl p-5"
          >
            <div>상품 이름: {payment.item_name}</div>
            <div>결제 금액: {payment.amount.total.toLocaleString()}원</div>
            <div>결제 수단: {payment.payment_method_type}</div>
            <div>결제 승인 시간: {payment.approved_at}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
