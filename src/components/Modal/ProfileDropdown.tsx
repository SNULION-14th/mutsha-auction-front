import { Link } from "react-router-dom";
import { Button } from "../Button";
import { Cup } from "@/assets/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useState } from "react";
import PointChargeModalButton from "./PointChargeModal";
import ProfileSettingModalButton from "./ProfileSettingModal";
import { useUser } from "@/contexts/UserContext";

export default function ProfileDropdown() {
  const { logout, user } = useUser();
  const [isPointChargeModalOpen, setIsPointChargeModalOpen] = useState(false);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="gray">{"프로필"}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        sideOffset={12}
        className="p-6 flex flex-col gap-5 w-55 border border-brand-secondary rounded-xl bg-white"
      >
        <ProfileSettingModalButton />
        <div className="flex w-full justify-between items-center">
          <div className="flex items-center gap-1">
            <img src={Cup} className="w-8.5" />
            <div className="text-lg font-bold text-scale-500">포인트</div>
          </div>
          <div className="text-lg font-bold text-scale-600">
            <Link to="/payment/history" className="text-brand-primary">
              {user?.points ?? 0}
            </Link>
            잔
          </div>
        </div>
        <PointChargeModalButton
          open={isPointChargeModalOpen}
          onOpenChange={setIsPointChargeModalOpen}
        />
        <button
          onClick={logout}
          className="flex items-center text-base text-scale-400 underline underline-offset-1 cursor-pointer"
        >
          로그아웃
        </button>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
