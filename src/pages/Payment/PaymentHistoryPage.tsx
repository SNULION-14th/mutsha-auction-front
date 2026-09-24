import {
  getUserInfo,
  getPaymentApprovedInfo,
  getPaymentInfo,
} from "@/apis/api";
import { useEffect, useState } from "react";

export default function PaymentCancelPage() {
  const [historyList, setHistoryList] = useState<any[]>([]);
  useEffect(() => {
    const getPaymentHistory = async () => {
      try {
        const userInfo = await getUserInfo();
        if (!userInfo) {
          throw new Error("유저 정보 없음");
        }

        const paymentApprovedInfoList = await getPaymentApprovedInfo(userInfo);
        if (paymentApprovedInfoList && paymentApprovedInfoList.length > 0) {
          const promises = paymentApprovedInfoList.map(async (approvedItem) => {
            if (!approvedItem) return null;
            return await getPaymentInfo(approvedItem);
          });

          const history = await Promise.all(promises);
          const cleanHistory = history.filter((item) => item != null);

          setHistoryList(cleanHistory);
        } else {
          setHistoryList([]);
        }
      } catch (e) {
        console.error(e);
      }
    };

    getPaymentHistory();
  }, []);

  return (
    <div>
      {historyList.length === 0 ? (
        <div>결제 내역이 없습니다.</div>
      ) : (
        <ul>
          {historyList.map((historyItem) => (
            <li>{JSON.stringify(historyItem)}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
