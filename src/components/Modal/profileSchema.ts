import { z } from "zod";

export const profileSettingSchema = z.object({
  nickname: z
    .string()
    .min(1, "닉네임을 입력해주세요.")
    .max(10, "닉네임은 10자 이내로 입력해주세요.")
    .regex(
      /^[0-9A-Za-z\uAC00-\uD7A3\u1100-\u11FF\u3130-\u318F]+$/u,
      "닉네임에는 한글, 숫자, 영문자만 사용할 수 있습니다.",
    ),
  profilepicId: z.number().int().min(1).max(6),
});

export type ProfileSettingFormData = z.infer<typeof profileSettingSchema>;
