import { useEffect, useState } from "react";
import { getOrderHistory, type OrderHistoryItem } from "@/apis/api";

export default function PaymentHistoryPage() {
  const [orders, setOrders] = useState<OrderHistoryItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getOrderHistory().then((data) => {
      setOrders(data);
      setIsLoading(false);
    });
  }, []);

  return (
    <div className="w-full max-w-[1000px] mx-auto px-17.5 py-10 flex flex-col gap-6">
      <h1 className="text-3xl font-bold text-scale-600">주문 조회</h1>

      {isLoading ? (
        <div className="text-xl text-scale-400">불러오는 중...</div>
      ) : orders.length === 0 ? (
        <div className="text-xl text-scale-400">결제 내역이 없습니다.</div>
      ) : (
        <ul className="flex flex-col gap-4">
          {orders.map((order) => (
            <li
              key={order.tid}
              className="flex justify-between items-center p-6 bg-bg-white border border-brand-secondary rounded-xl"
            >
              <div className="flex flex-col gap-1">
                <div className="text-xl font-bold text-scale-600">
                  {order.item_name}
                </div>
                <div className="text-base text-scale-400">
                  {new Date(order.approved_at).toLocaleString("ko-KR")} ·{" "}
                  {order.payment_method_type}
                </div>
              </div>
              <div className="text-xl font-bold text-brand-primary">
                {order.amount.toLocaleString()}원
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
