import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/Button";
import { getPaymentHistory, PaymentHistoryItem } from "@/apis/api";
import { numberCommaFormatter } from "@/utils/number";

const PAYMENT_METHOD_LABEL: Record<string, string> = {
  CARD: "카드",
  MONEY: "카카오페이 머니",
};

function formatDate(value: string) {
  if (!value) return "-";
  return new Date(value).toLocaleString("ko-KR");
}

export default function PaymentHistoryPage() {
  const navigate = useNavigate();
  const [history, setHistory] = useState<PaymentHistoryItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const data = await getPaymentHistory();
      if (data) {
        setHistory(data);
      } else {
        setError(
          "결제 내역을 불러오지 못했습니다. 로그인 상태를 확인해주세요.",
        );
      }
      setIsLoading(false);
    })();
  }, []);

  return (
    <div className="min-h-screen bg-bg-default px-6 py-16">
      <div className="mx-auto flex max-w-3xl flex-col gap-8">
        <h1 className="text-3xl font-bold text-scale-600">결제 내역</h1>

        {isLoading && <p className="text-scale-500">불러오는 중...</p>}

        {!isLoading && error && <p className="text-red-500">{error}</p>}

        {!isLoading && !error && history.length === 0 && (
          <p className="text-scale-500">아직 결제 내역이 없어요.</p>
        )}

        {!isLoading && !error && history.length > 0 && (
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-brand-secondary text-scale-500">
                <th className="py-3">상품 이름</th>
                <th className="py-3">결제 금액</th>
                <th className="py-3">결제 수단</th>
                <th className="py-3">결제 승인 시간</th>
              </tr>
            </thead>
            <tbody>
              {history.map((item) => (
                <tr
                  key={item.tid}
                  className="border-b border-scale-200 text-scale-600"
                >
                  <td className="py-3">소주잔 {item.item_name}잔</td>
                  <td className="py-3">₩{numberCommaFormatter(item.amount)}</td>
                  <td className="py-3">
                    {PAYMENT_METHOD_LABEL[item.payment_method_type] ??
                      item.payment_method_type}
                  </td>
                  <td className="py-3">{formatDate(item.approved_at)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        <div>
          <Button
            variant="primary"
            size="small"
            onButtonClick={() => navigate("/")}
          >
            메인으로 돌아가기
          </Button>
        </div>
      </div>
    </div>
  );
}
