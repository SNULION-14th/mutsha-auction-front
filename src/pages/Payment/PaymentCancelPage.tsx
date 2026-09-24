import { useNavigate } from "react-router-dom";
import { Button } from "@/components/Button";

export default function PaymentCancelPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-bg-default">
      <div className="flex flex-col items-center gap-8 text-center">
        <h1 className="text-2xl font-bold text-scale-600">
          결제가 취소되었습니다.
        </h1>
        <Button
          variant="primary"
          size="large"
          onButtonClick={() => navigate("/")}
        >
          메인으로 돌아가기
        </Button>
      </div>
    </div>
  );
}
