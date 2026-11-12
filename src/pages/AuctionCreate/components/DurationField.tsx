import { Controller, useFormContext } from "react-hook-form";

import type { AuctionCreateFormData } from "../schema";

import { digitsOnly } from "@/utils/auction";

const durationFields = [
  {
    name: "duration.days",
    label: "d",
    accessibleLabel: "경매 기간 일",
    max: 365,
  },
  {
    name: "duration.hours",
    label: "h",
    accessibleLabel: "경매 기간 시간",
    max: 23,
  },
  {
    name: "duration.minutes",
    label: "m",
    accessibleLabel: "경매 기간 분",
    max: 59,
  },
] as const;

export function DurationField() {
  const {
    control,
    trigger,
    formState: { errors },
  } = useFormContext<AuctionCreateFormData>();
  return (
    <div className="flex flex-col gap-2">
      <div className="text-lg font-bold text-scale-600">경매 기간</div>
      <div className="flex items-center gap-5 text-scale-500">
        {durationFields.map(({ name, label, accessibleLabel, max }) => (
          <Controller
            key={name}
            name={name}
            control={control}
            render={({ field }) => (
              <div className="flex items-center gap-2">
                <input
                  {...field}
                  inputMode="numeric"
                  aria-label={accessibleLabel}
                  aria-describedby={
                    errors.duration ? "auction-duration-error" : undefined
                  }
                  value={String(field.value).padStart(
                    label === "d" ? 1 : 2,
                    "0",
                  )}
                  onChange={(event) => {
                    field.onChange(
                      Math.min(Number(digitsOnly(event.target.value)), max),
                    );
                    // 세 입력값을 함께 검사해야 duration 객체의 refine 오류도 갱신됩니다.
                    void trigger("duration");
                  }}
                  onBlur={() => {
                    field.onBlur();
                    void trigger("duration");
                  }}
                  className="w-16 text-3xl font-bold bg-transparent border-b-2 border-scale-300 focus:border-brand-primary outline-none text-center"
                />
                <span className="text-3xl pb-1">{label}</span>
              </div>
            )}
          />
        ))}
      </div>
      {errors.duration && (
        <p
          id="auction-duration-error"
          className="text-point-warning text-base mt-1"
        >
          {errors.duration.message}
        </p>
      )}
    </div>
  );
}
