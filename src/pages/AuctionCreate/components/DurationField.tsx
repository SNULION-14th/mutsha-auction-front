import { clampNum, digitsOnly } from "@/utils/auction";
import { Controller, useFormContext } from "react-hook-form";
import { AuctionCreateFormData } from "../schema";

const DurationControlRenderer = ({
  label,
  onChange,
  onBlur,
  value,
}: {
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: () => void;
  value: string;
}) => {
  return (
    <div className="flex items-center gap-2">
      <input
        inputMode="numeric"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className="w-16 text-3xl font-bold bg-transparent border-b-2 border-scale-300 focus:border-brand-primary outline-none text-center"
      />
      <span className="text-3xl pb-1">{label}</span>
    </div>
  );
};

const toClampedNumber = (raw: string, max: number) =>
  clampNum(Number(digitsOnly(raw) || "0"), 0, max);

export const DurationField = () => {
  const {
    control,
    trigger,
    formState: { errors },
  } = useFormContext<AuctionCreateFormData>();

  const handleChange = (
    onChange: (value: number) => void,
    raw: string,
    max: number,
  ) => {
    onChange(toClampedNumber(raw, max));
    trigger("duration");
  };

  return (
    <div className="flex flex-col gap-2">
      <label className="text-lg font-bold text-scale-600">경매 기간</label>
      <div className="flex items-center gap-5 text-scale-500">
        <Controller
          name="duration.days"
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <DurationControlRenderer
              label="d"
              value={String(value)}
              onChange={(e) => handleChange(onChange, e.target.value, 365)}
              onBlur={onBlur}
            />
          )}
        />

        <Controller
          name="duration.hours"
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <DurationControlRenderer
              label="h"
              value={String(value).padStart(2, "0")}
              onChange={(e) => handleChange(onChange, e.target.value, 23)}
              onBlur={onBlur}
            />
          )}
        />

        <Controller
          name="duration.minutes"
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <DurationControlRenderer
              label="m"
              value={String(value).padStart(2, "0")}
              onChange={(e) => handleChange(onChange, e.target.value, 59)}
              onBlur={onBlur}
            />
          )}
        />
      </div>
      {errors.duration?.message && (
        <p className="text-point-warning text-base mt-1">
          {errors.duration.message}
        </p>
      )}
    </div>
  );
};
