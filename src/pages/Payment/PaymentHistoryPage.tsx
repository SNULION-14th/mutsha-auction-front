import { useEffect, useState } from "react";
import { getPaymentHistory, type PaymentHistoryItem } from "@/apis/api";

function formatDate(value: string | null) {
  if (!value) return "-";
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? value : date.toLocaleString("ko-KR");
}

export default function PaymentHistoryPage() {
  const [payments, setPayments] = useState<PaymentHistoryItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPayments = async () => {
      setPayments(await getPaymentHistory());
      setLoading(false);
    };
    loadPayments();
  }, []);

  if (loading) {
    return (
      <div className="max-w-[1160px] mx-auto px-8 py-20 text-scale-500">
        결제 내역을 불러오는 중입니다.
      </div>
    );
  }

  return (
    <section className="max-w-[1160px] mx-auto px-8 py-14">
      <h1 className="text-4xl font-bold text-scale-600 mb-8">결제 내역</h1>
      {payments.length === 0 ? (
        <p className="text-scale-500">완료된 결제 내역이 없습니다.</p>
      ) : (
        <div className="overflow-x-auto rounded-xl bg-bg-white shadow-lg">
          <table className="w-full text-left">
            <thead className="border-b border-scale-200 text-scale-500">
              <tr>
                <th className="p-5">상품 이름</th>
                <th className="p-5">결제 금액</th>
                <th className="p-5">결제 수단</th>
                <th className="p-5">결제 승인 시간</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment) => (
                <tr
                  key={payment.tid}
                  className="border-b border-scale-100 last:border-0 text-scale-600"
                >
                  <td className="p-5 font-medium">
                    {payment.item_name || "-"}
                  </td>
                  <td className="p-5">
                    {payment.amount === null
                      ? "-"
                      : `${payment.amount.toLocaleString()}원`}
                  </td>
                  <td className="p-5">{payment.payment_method_type || "-"}</td>
                  <td className="p-5">{formatDate(payment.approved_at)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
