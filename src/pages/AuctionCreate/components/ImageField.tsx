import { useEffect, useRef, useState } from "react";

import { useController, useFormContext } from "react-hook-form";

import type { AuctionCreateFormData } from "../schema";

import { File as FileIcon } from "@/assets/image";

export function ImageField() {
  const { control } = useFormContext<AuctionCreateFormData>();
  const {
    field,
    fieldState: { error },
  } = useController({ name: "image", control });
  const [preview, setPreview] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (!field.value || !field.value.type.startsWith("image/")) {
      setPreview(null);
      return;
    }
    const url = URL.createObjectURL(field.value);
    setPreview(url);
    return () => URL.revokeObjectURL(url);
  }, [field.value]);

  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor="auction-image"
        className="text-lg font-bold text-scale-600"
      >
        사진
      </label>
      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        className={`w-full h-[320px] rounded-md border ${preview ? "border-transparent" : "border-scale-200"} overflow-hidden cursor-pointer flex items-center justify-center`}
        aria-label={preview ? "다른 사진으로 변경" : "사진 업로드"}
      >
        {preview ? (
          <img
            src={preview}
            alt="경매 상품 미리보기"
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="flex flex-col items-center gap-4 text-scale-300">
            <img src={FileIcon} alt="" className="w-16 opacity-60" />
            <span className="text-base">클릭하여 업로드</span>
          </span>
        )}
      </button>
      <input
        id="auction-image"
        name={field.name}
        ref={(element) => {
          inputRef.current = element;
          field.ref(element);
        }}
        type="file"
        accept="image/*"
        className="sr-only"
        onBlur={field.onBlur}
        aria-invalid={!!error}
        aria-describedby={error ? "auction-image-error" : undefined}
        onChange={(event) => {
          const file = event.target.files?.[0];
          if (file) {
            field.onChange(file);
            field.onBlur();
          }
        }}
      />
      {error && (
        <p
          id="auction-image-error"
          className="text-point-warning text-base mt-1"
        >
          {error.message}
        </p>
      )}
    </div>
  );
}
