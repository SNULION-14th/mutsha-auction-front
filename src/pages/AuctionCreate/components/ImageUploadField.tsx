import { useEffect, useRef, useState } from "react";
import { File as FileIcon } from "@/assets/image";
import { useFormContext } from "react-hook-form";
import type { AuctionCreateFormData } from "../schema";

export const ImageUploadField = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const {
    setValue,
    formState: { errors },
  } = useFormContext<AuctionCreateFormData>();

  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  const selectFile = (file?: File) => {
    if (!file || !file.type.startsWith("image/")) return;
    setPreview(URL.createObjectURL(file));
    setValue("image", file, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  };

  return (
    <div className="flex flex-col gap-2">
      <label className="text-lg font-bold text-scale-600">사진</label>
      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        className={`w-full h-[320px] rounded-md border ${preview ? "border-transparent" : "border-scale-200"} overflow-hidden cursor-pointer flex items-center justify-center`}
      >
        {preview ? (
          <img
            src={preview}
            alt="상품 사진 미리보기"
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
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(event) => selectFile(event.target.files?.[0])}
      />
      {errors.image && (
        <p className="text-point-warning text-base mt-1">
          {errors.image.message?.toString()}
        </p>
      )}
    </div>
  );
};
