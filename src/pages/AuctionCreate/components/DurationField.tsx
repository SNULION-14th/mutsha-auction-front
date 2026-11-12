import { Controller, useFormContext } from "react-hook-form";
import { digitsOnly } from "@/utils/auction";
import type { AuctionCreateFormData } from "../schema";

const units = [
  { name: "duration.days", label: "일", max: 365 },
  { name: "duration.hours", label: "시간", max: 23 },
  { name: "duration.minutes", label: "분", max: 59 },
] as const;

function DurationInput({
  label,
  max,
  value,
  onChange,
}: {
  label: string;
  max: number;
  value: number;
  onChange: (value: number) => void;
}) {
  return (
    <div className="flex items-center gap-2">
      <input
        type="text"
        inputMode="numeric"
        value={String(value).padStart(label === "일" ? 1 : 2, "0")}
        onChange={(event) => {
          const digits = digitsOnly(event.target.value);
          const number = digits ? Number(digits) : 0;
          onChange(Math.min(number, max));
        }}
        aria-label={label}
        className="w-16 text-3xl font-bold bg-transparent border-b-2 border-scale-300 focus:border-brand-primary outline-none text-center"
      />
      <span className="text-3xl pb-1">{label}</span>
    </div>
  );
}

export const DurationField = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<AuctionCreateFormData>();

  return (
    <div className="flex flex-col gap-2">
      <label className="text-lg font-bold text-scale-600">경매 기간</label>
      <div className="flex items-center gap-5 text-scale-500">
        {units.map(({ name, label, max }) => (
          <Controller
            key={name}
            name={name}
            control={control}
            render={({ field }) => (
              <DurationInput
                label={label}
                max={max}
                value={field.value}
                onChange={field.onChange}
              />
            )}
          />
        ))}
      </div>
      {errors.duration?.message && (
        <p className="text-point-warning text-base mt-1">
          {errors.duration.message}
        </p>
      )}
    </div>
  );
};
