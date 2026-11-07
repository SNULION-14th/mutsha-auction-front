import { Cup } from "@/assets/image";
import { useFormContext } from "react-hook-form";
import type { AuctionCreateFormData } from "../schema";

export const StartPriceField = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<AuctionCreateFormData>();

  return (
    <div className="flex flex-col gap-2">
      <label className="text-lg font-bold text-scale-600">시작가</label>
      <div className="flex items-center gap-6">
        <img src={Cup} alt="" className="w-10" />
        <input
          type="number"
          min={1}
          {...register("startPrice", { valueAsNumber: true })}
          className="w-24 text-3xl font-bold text-brand-primary bg-transparent border-b-2 border-scale-300 focus:border-brand-primary outline-none text-center"
        />
        <span className="text-3xl font-bold text-scale-500">잔</span>
      </div>
      {errors.startPrice && (
        <p className="text-point-warning text-base mt-1">
          {errors.startPrice.message}
        </p>
      )}
    </div>
  );
};
