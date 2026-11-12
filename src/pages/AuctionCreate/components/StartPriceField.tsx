import { Controller, useFormContext } from "react-hook-form";

import type { AuctionCreateFormData } from "../schema";

import { Cup } from "@/assets/image";
import { digitsOnly } from "@/utils/auction";

export function StartPriceField() {
  const { control } = useFormContext<AuctionCreateFormData>();
  return (
    <Controller
      name="startPrice"
      control={control}
      render={({ field, fieldState: { error } }) => (
        <div className="flex flex-col gap-2">
          <label
            htmlFor="auction-start-price"
            className="text-lg font-bold text-scale-600"
          >
            시작가
          </label>
          <div className="flex items-center gap-6">
            <img src={Cup} alt="" className="w-10" />
            <input
              {...field}
              id="auction-start-price"
              inputMode="numeric"
              value={field.value || ""}
              onChange={(event) =>
                field.onChange(Number(digitsOnly(event.target.value)))
              }
              aria-invalid={!!error}
              aria-describedby={error ? "auction-start-price-error" : undefined}
              className="w-24 text-3xl font-bold text-brand-primary bg-transparent border-b-2 border-scale-300 focus:border-brand-primary outline-none text-center"
            />
            <span className="text-3xl font-bold text-scale-500">잔</span>
          </div>
          {error && (
            <p
              id="auction-start-price-error"
              className="text-point-warning text-base mt-1"
            >
              {error.message}
            </p>
          )}
        </div>
      )}
    />
  );
}
