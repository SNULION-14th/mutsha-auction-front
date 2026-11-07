import { useFormContext } from "react-hook-form";
import type { AuctionCreateFormData } from "../schema";

const units = [
  { name: "days", label: "일", max: 365 },
  { name: "hours", label: "시간", max: 23 },
  { name: "minutes", label: "분", max: 59 },
] as const;

export const DurationField = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<AuctionCreateFormData>();
  const durationError = errors.duration?.message;

  return (
    <div className="flex flex-col gap-2">
      <label className="text-lg font-bold text-scale-600">경매 기간</label>
      <div className="flex items-center gap-5 text-scale-500">
        {units.map(({ name, label, max }) => (
          <div className="flex items-center gap-2" key={name}>
            <input
              type="number"
              min={0}
              max={max}
              {...register(`duration.${name}`, { valueAsNumber: true })}
              aria-label={label}
              className="w-16 text-3xl font-bold bg-transparent border-b-2 border-scale-300 focus:border-brand-primary outline-none text-center"
            />
            <span className="text-3xl pb-1">{label}</span>
          </div>
        ))}
      </div>
      {durationError && (
        <p className="text-point-warning text-base mt-1">{durationError}</p>
      )}
    </div>
  );
};
