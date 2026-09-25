import { Cup } from "@/assets/image";
import { preparePayment } from "@/apis/api";
import { numberCommaFormatter } from "@/utils/number";
import { Button } from "../Button";
import ModalLayout from "./ModalLayout";

type Props = { onClose: () => void; onCharge: (amount: number) => void };
const options = [
  { cup: 10, money: 10000 },
  { cup: 30, money: 30000 },
  { cup: 50, money: 50000 },
  { cup: 100, money: 90000 },
];

export default function PointChargeModal({ onClose }: Props) {
  const startPayment = async (cup: number, money: number) => {
    try {
      const payment = await preparePayment(`${cup} 포인트 충전`, cup, money);
      localStorage.setItem("kakaoPayTid", payment.tid);
      window.location.assign(payment.next_redirect_pc_url);
    } catch {
      alert(
        "결제를 준비하지 못했습니다. 로그인 상태와 결제 설정을 확인해주세요.",
      );
    }
  };
  return (
    <ModalLayout onClose={onClose}>
      <div className="flex flex-col items-center px-8 py-15 w-133 gap-12.5">
        <div className="text-2xl font-bold text-scale-600">포인트 충전하기</div>
        <div className="flex flex-col gap-9 w-full">
          {options.map(({ cup, money }) => (
            <div key={cup} className="w-full flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img src={Cup} className="w-10" />
                <div className="text-xl font-bold text-scale-500">
                  {cup} 포인트
                </div>
              </div>
              <Button
                variant="primary"
                isRounded
                className="text-lg font-regular px-10 py-3"
                onButtonClick={() => void startPayment(cup, money)}
              >
                {numberCommaFormatter(money)}원
              </Button>
            </div>
          ))}
        </div>
      </div>
    </ModalLayout>
  );
}
