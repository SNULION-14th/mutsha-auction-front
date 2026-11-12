import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { useState } from "react";
import { z } from "zod";
import { Button } from "../Button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogPortal,
  DialogTrigger,
} from "../ui/dialog";
import ProfileImageModal from "./ProfileImageModal";
import { PROFILE_IMAGES, useUser } from "@/contexts/UserContext";

const profileSettingsSchema = z.object({
  nickname: z
    .string()
    .trim()
    .min(1, "닉네임을 입력해주세요.")
    .max(10, "닉네임은 10자 이내로 입력해주세요.")
    .regex(
      /^[0-9A-Za-z\uAC00-\uD7A3\u1100-\u11FF\u3130-\u318F]+$/u,
      "한글, 영문자, 숫자만 입력할 수 있습니다.",
    ),
  profilepicId: z.number().int().min(1).max(PROFILE_IMAGES.length),
});

type ProfileSettingsForm = z.infer<typeof profileSettingsSchema>;

export default function ProfileSettingModal() {
  const { user, updateProfile } = useUser();
  const [isOpen, setIsOpen] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const methods = useForm<ProfileSettingsForm>({
    resolver: zodResolver(profileSettingsSchema),
    mode: "onChange",
    defaultValues: { nickname: "", profilepicId: 1 },
  });

  const selectedProfileImage =
    PROFILE_IMAGES[methods.watch("profilepicId") - 1] ?? PROFILE_IMAGES[0];

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (open) {
      const imageIndex = PROFILE_IMAGES.findIndex(
        (image) => image === user?.profileImage,
      );
      methods.reset({
        nickname: user?.nickname ?? "",
        profilepicId: imageIndex >= 0 ? imageIndex + 1 : 1,
      });
      setSubmitError("");
    }
  };

  const handleSubmit = methods.handleSubmit(
    async ({ nickname, profilepicId }) => {
      setSubmitError("");
      const updated = await updateProfile(nickname, profilepicId);
      if (updated) {
        setIsOpen(false);
      } else {
        setSubmitError("프로필을 저장하지 못했습니다. 다시 시도해주세요.");
      }
    },
  );

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogPortal />
      <DialogTrigger asChild>
        <button type="button" className="flex items-center gap-2">
          <img
            src={user?.profileImage ?? PROFILE_IMAGES[0]}
            alt="프로필"
            className="h-8 w-8 rounded-full object-cover"
          />
          <span className="text-lg font-bold text-scale-600">
            {user?.nickname ?? "프로필 설정"}
          </span>
        </button>
      </DialogTrigger>
      <DialogContent className="w-180">
        <form
          onSubmit={handleSubmit}
          className="px-20 py-22.5 flex flex-col gap-20"
        >
          <DialogTitle className="text-4xl font-bold text-scale-600">
            프로필 설정
          </DialogTitle>
          <DialogDescription className="sr-only">
            닉네임과 프로필 이미지를 변경할 수 있습니다.
          </DialogDescription>
          <div className="flex flex-col gap-12.5">
            <div className="mx-auto relative w-28 h-28">
              <img
                src={selectedProfileImage}
                alt="선택한 프로필 이미지"
                className="w-28 h-28 rounded-full object-cover"
              />
              <Controller
                name="profilepicId"
                control={methods.control}
                render={({ field }) => (
                  <ProfileImageModal
                    key={field.value}
                    imageCandidates={PROFILE_IMAGES}
                    selectedProfileImage={selectedProfileImage}
                    onSave={(image) => {
                      const imageIndex = PROFILE_IMAGES.findIndex(
                        (candidate) => candidate === image,
                      );
                      if (imageIndex >= 0) field.onChange(imageIndex + 1);
                    }}
                  />
                )}
              />
            </div>
            <div className="flex flex-col gap-3">
              <input
                {...methods.register("nickname")}
                placeholder="닉네임(최대 10자)"
                className="w-full h-14 rounded-xl border border-black/10 px-5 outline-none focus:border-brand-primary"
              />
              {methods.formState.errors.nickname && (
                <p className="text-sm text-red-500">
                  {methods.formState.errors.nickname.message}
                </p>
              )}
              {submitError && (
                <p role="alert" className="text-sm text-red-500">
                  {submitError}
                </p>
              )}
            </div>
            <Button
              type="submit"
              variant={methods.formState.isValid ? "primary" : "disabled"}
              disabled={
                !methods.formState.isValid || methods.formState.isSubmitting
              }
              className="h-14"
            >
              {methods.formState.isSubmitting ? "저장 중…" : "저장하기"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
