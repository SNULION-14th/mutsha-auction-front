import { Link } from "react-router-dom";
export default function PaymentFailPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-5">
      <h1 className="text-2xl font-bold">결제에 실패했습니다.</h1>
      <Link className="text-brand-primary underline" to="/">
        홈으로 돌아가기
      </Link>
    </div>
  );
}
