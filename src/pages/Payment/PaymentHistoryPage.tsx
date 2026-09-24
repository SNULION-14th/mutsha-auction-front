import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { getPaymentHistory, type PaymentHistoryResponse } from "@/apis/api";
import { Button } from "@/components/Button";

const moneyFormatter = new Intl.NumberFormat("ko-KR");
const dateFormatter = new Intl.DateTimeFormat("ko-KR", {
  dateStyle: "medium",
  timeStyle: "short",
});

function formatApprovedAt(value: string | null) {
  if (!value) return "확인할 수 없음";
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? value : dateFormatter.format(date);
}

export default function PaymentHistoryPage() {
  const navigate = useNavigate();
  const [history, setHistory] = useState<PaymentHistoryResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    let cancelled = false;

    void (async () => {
      const response = await getPaymentHistory();
      if (cancelled) return;

      if (response) {
        setHistory(response);
      } else {
        setHasError(true);
      }
      setIsLoading(false);
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section className="mx-auto flex min-h-[70vh] w-full max-w-4xl flex-col gap-8 px-6 py-12">
      <div className="flex items-center justify-between gap-4">
        <h1 className="text-3xl font-bold text-scale-600">결제 내역</h1>
        <Button variant="gray" size="small" onButtonClick={() => navigate("/")}>
          메인으로
        </Button>
      </div>

      {isLoading ? (
        <p className="text-scale-500" role="status">
          결제 내역을 불러오고 있습니다...
        </p>
      ) : hasError ? (
        <p className="text-red-600" role="alert">
          결제 내역을 불러오지 못했습니다. 잠시 후 다시 시도해주세요.
        </p>
      ) : (
        <>
          {(history?.failed_count ?? 0) > 0 ? (
            <p
              className="rounded-lg bg-yellow-50 p-4 text-yellow-800"
              role="status"
            >
              일부 결제 내역을 조회하지 못했습니다. 조회 가능한 내역만
              표시합니다.
            </p>
          ) : null}

          {(history?.payments.length ?? 0) === 0 ? (
            <p className="rounded-xl border border-scale-200 bg-white p-8 text-center text-scale-500">
              승인 완료된 결제 내역이 없습니다.
            </p>
          ) : (
            <ul className="flex flex-col gap-4">
              {history?.payments.map((payment) => (
                <li key={payment.tid}>
                  <article className="grid gap-3 rounded-xl border border-scale-200 bg-white p-6 sm:grid-cols-2">
                    <div>
                      <p className="text-sm text-scale-400">상품 이름</p>
                      <p className="text-lg font-bold text-scale-600">
                        {payment.item_name ?? "확인할 수 없음"}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-scale-400">결제 금액</p>
                      <p className="text-lg font-bold text-scale-600">
                        {payment.amount
                          ? `${moneyFormatter.format(payment.amount.total)}원`
                          : "확인할 수 없음"}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-scale-400">결제 수단</p>
                      <p className="text-scale-600">
                        {payment.payment_method_type ?? "확인할 수 없음"}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-scale-400">결제 승인 시간</p>
                      <time
                        className="text-scale-600"
                        dateTime={payment.approved_at ?? undefined}
                      >
                        {formatApprovedAt(payment.approved_at)}
                      </time>
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </section>
  );
}
