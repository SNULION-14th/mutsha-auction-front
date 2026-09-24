import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/Button";
import { numberCommaFormatter } from "@/utils/number";
import { getPaymentHistory, PaymentHistoryItem } from "@/apis/api";

const PAYMENT_METHOD_LABEL: Record<string, string> = {
  MONEY: "카카오페이머니",
  CARD: "카드",
};

function formatDateTime(iso: string) {
  try {
    const d = new Date(iso);
    return d.toLocaleString("ko-KR");
  } catch {
    return iso;
  }
}

export default function PaymentHistoryPage() {
  const navigate = useNavigate();
  const [history, setHistory] = useState<PaymentHistoryItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const data = await getPaymentHistory();
      setHistory(data);
      setIsLoading(false);
    })();
  }, []);

  return (
    <div className="max-w-2xl mx-auto px-6 py-12 flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-scale-600">결제 내역</h1>
        <Button
          variant="outlined"
          size="small"
          onButtonClick={() => navigate("/")}
        >
          메인으로
        </Button>
      </div>

      {isLoading && <div className="text-scale-400">불러오는 중...</div>}

      {!isLoading && history.length === 0 && (
        <div className="text-scale-400">아직 결제 내역이 없어요.</div>
      )}

      <div className="flex flex-col gap-4">
        {history.map((item) => (
          <div
            key={item.tid}
            className="flex flex-col gap-2 p-5 border border-scale-200 rounded-xl"
          >
            <div className="flex items-center justify-between">
              <div className="text-lg font-bold text-scale-600">
                {item.item_name}잔 충전
              </div>
              <div className="text-lg font-bold text-brand-primary">
                ₩ {numberCommaFormatter(item.amount)}
              </div>
            </div>
            <div className="flex items-center justify-between text-sm text-scale-400">
              <div>
                {PAYMENT_METHOD_LABEL[item.payment_method_type] ??
                  item.payment_method_type}
              </div>
              <div>{formatDateTime(item.approved_at)}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
