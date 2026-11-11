import { z } from "zod";

const NICKNAME_PATTERN = /^[0-9A-Za-z가-힣ᄀ-ᇿ㄰-㆏]+$/u;

export const profileSettingSchema = z.object({
  nickname: z
    .string()
    .min(1, "*닉네임을 입력해주세요.")
    .max(10, "*10자 이내의 한글, 숫자, 영문자를 입력해주세요.")
    .regex(NICKNAME_PATTERN, "*10자 이내의 한글, 숫자, 영문자를 입력해주세요."),

  profileImage: z.string().min(1, "*프로필 이미지를 선택해주세요."),
});

export type ProfileSettingFormData = z.infer<typeof profileSettingSchema>;
