import { useFormContext } from "react-hook-form";

import type { AuctionCreateFormData } from "../schema";

export function DescriptionField() {
  const {
    register,
    formState: { errors },
  } = useFormContext<AuctionCreateFormData>();
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor="auction-description"
        className="text-lg font-bold text-scale-600"
      >
        상품 설명
      </label>
      <textarea
        id="auction-description"
        {...register("description")}
        placeholder="상품의 상태, 사용 이력, 특징 등을 작성해주세요."
        aria-invalid={!!errors.description}
        aria-describedby={
          errors.description ? "auction-description-error" : undefined
        }
        className="w-full min-h-36 rounded-md border border-scale-200 focus:border-brand-primary outline-none p-4 text-base text-scale-500 placeholder:text-scale-300"
      />
      {errors.description && (
        <p
          id="auction-description-error"
          className="text-point-warning text-base mt-1"
        >
          {errors.description.message}
        </p>
      )}
    </div>
  );
}
