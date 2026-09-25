import { useEffect, useState } from "react";
import { getPaymentHistory, type PaymentHistoryItem } from "@/apis/api";

export default function PaymentHistoryPage() {
  const [items, setItems] = useState<PaymentHistoryItem[]>([]);
  const [error, setError] = useState("");
  useEffect(() => {
    getPaymentHistory()
      .then(setItems)
      .catch(() => setError("결제 내역을 불러오지 못했습니다."));
  }, []);
  return (
    <section className="max-w-3xl mx-auto py-20 px-6">
      <h1 className="text-3xl font-bold text-scale-600 mb-8">결제 내역</h1>
      {error && <p>{error}</p>}
      {!error && items.length === 0 && <p>완료된 결제 내역이 없습니다.</p>}
      <div className="flex flex-col gap-4">
        {items.map((item) => (
          <article key={item.tid} className="border rounded-xl p-5">
            <div className="font-bold text-lg">{item.item_name}</div>
            <div className="mt-2 text-scale-500">
              {item.amount.total.toLocaleString()}원 ·{" "}
              {item.payment_method_type || "카카오페이"}
            </div>
            <div className="mt-1 text-sm text-scale-400">
              {item.approved_at
                ? new Date(item.approved_at).toLocaleString()
                : "승인 일시 확인 중"}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
