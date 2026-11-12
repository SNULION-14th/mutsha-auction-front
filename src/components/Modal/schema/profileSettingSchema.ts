import { z } from "zod";

const NICKNAME_PATTERN =
  /^[0-9A-Za-z\uAC00-\uD7A3\u1100-\u11FF\u3130-\u318F]+$/u;
const NICKNAME_MESSAGE = "*10자 이내의 한글, 숫자, 영문자를 입력해주세요.";

export const profileSettingSchema = z.object({
  nickname: z
    .string()
    .min(1, "닉네임을 입력해주세요.")
    .max(10, NICKNAME_MESSAGE)
    .regex(NICKNAME_PATTERN, NICKNAME_MESSAGE),
  profileImage: z.string().min(1, "프로필 이미지를 선택해주세요."),
});

export type ProfileSettingFormData = z.infer<typeof profileSettingSchema>;
