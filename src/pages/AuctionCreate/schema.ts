import { z } from "zod";

export const auctionCreateSchema = z.object({
  title: z
    .string()
    .trim()
    .min(1, "상품명을 입력해주세요.")
    .max(100, "상품명은 100자 이내로 입력해주세요."),
  description: z
    .string()
    .trim()
    .min(1, "상품 설명을 입력해주세요.")
    .max(1000, "상품 설명은 1000자 이내로 입력해주세요."),
  startPrice: z
    .number()
    .int()
    .min(1, "시작가는 최소 1잔 이상이어야 합니다.")
    .max(999999, "시작가는 999,999잔을 초과할 수 없습니다."),
  image: z
    .instanceof(File, { message: "사진을 등록해주세요." })
    .refine(
      (file) => file.size <= 5 * 1024 * 1024,
      "이미지 크기는 5MB 이하여야 합니다.",
    )
    .refine(
      (file) => file.type.startsWith("image/"),
      "이미지 파일만 업로드 가능합니다.",
    ),
  duration: z
    .object({
      days: z.number().int().min(0).max(365),
      hours: z.number().int().min(0).max(23),
      minutes: z.number().int().min(0).max(59),
    })
    .refine(
      (duration) =>
        duration.days * 24 * 60 + duration.hours * 60 + duration.minutes >= 1,
      "경매 기간은 최소 1분 이상이어야 합니다.",
    ),
});

export type AuctionCreateFormData = z.infer<typeof auctionCreateSchema>;
