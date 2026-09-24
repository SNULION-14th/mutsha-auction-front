import { useEffect, useState } from "react";
import { getPaymentHistory, type PaymentHistoryItem } from "@/apis/api";

const formatApprovedAt = (approvedAt: string) => {
  const date = new Date(approvedAt);
  return Number.isNaN(date.getTime())
    ? approvedAt
    : date.toLocaleString("ko-KR");
};

export default function PaymentHistoryPage() {
  const [history, setHistory] = useState<PaymentHistoryItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadHistory = async () => {
      try {
        setHistory(await getPaymentHistory());
      } catch (error) {
        console.error("결제 내역 조회 실패:", error);
        setError("결제 내역을 불러오지 못했습니다.");
      } finally {
        setIsLoading(false);
      }
    };

    loadHistory();
  }, []);

  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-scale-600 mb-8">결제 내역</h1>
      {isLoading && (
        <p className="text-scale-500">결제 내역을 불러오는 중입니다.</p>
      )}
      {error && <p className="text-red-500">{error}</p>}
      {!isLoading && !error && history.length === 0 && (
        <p className="text-scale-500">완료된 결제 내역이 없습니다.</p>
      )}
      {!isLoading && !error && history.length > 0 && (
        <div className="overflow-x-auto rounded-xl border border-scale-200 bg-bg-white">
          <table className="w-full text-left">
            <thead className="bg-bg-default text-scale-500">
              <tr>
                <th className="p-4">상품 이름</th>
                <th className="p-4">결제 금액</th>
                <th className="p-4">결제 수단</th>
                <th className="p-4">승인 시간</th>
              </tr>
            </thead>
            <tbody>
              {history.map((payment, index) => (
                <tr
                  key={`${payment.item_name}-${payment.approved_at}-${index}`}
                  className="border-t border-scale-200 text-scale-600"
                >
                  <td className="p-4">{payment.item_name}</td>
                  <td className="p-4">{payment.amount.toLocaleString()}원</td>
                  <td className="p-4">{payment.payment_method_type}</td>
                  <td className="p-4 whitespace-nowrap">
                    {formatApprovedAt(payment.approved_at)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
