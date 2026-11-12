import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";

import { Button } from "../Button";
import {
  Dialog,
  DialogContent,
  DialogPortal,
  DialogTrigger,
  DialogTitle,
} from "../ui/dialog";

import ProfileImageModal from "./ProfileImageModal";
import { profileSettingSchema } from "./profileSchema";
import type { ProfileSettingFormData } from "./profileSchema";

import { PROFILE_IMAGES, useUser } from "@/contexts/UserContext";

export default function ProfileSettingModal() {
  const { user, updateProfile } = useUser();
  const [open, setOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isValid, isSubmitting },
  } = useForm<ProfileSettingFormData>({
    resolver: zodResolver(profileSettingSchema),
    mode: "onChange",
    defaultValues: {
      nickname: user?.nickname ?? "",
      profilepicId: Math.max(
        1,
        PROFILE_IMAGES.indexOf(user?.profileImage ?? "") + 1,
      ),
    },
  });

  const handleOpenChange = (nextOpen: boolean) => {
    if (nextOpen) {
      reset({
        nickname: user?.nickname ?? "",
        profilepicId: Math.max(
          1,
          PROFILE_IMAGES.indexOf(user?.profileImage ?? "") + 1,
        ),
      });
      setError(null);
    }
    setOpen(nextOpen);
  };

  const submitProfile = async ({
    nickname,
    profilepicId,
  }: ProfileSettingFormData) => {
    setError(null);
    try {
      await updateProfile(nickname, profilepicId);
      setOpen(false);
    } catch {
      setError("프로필을 저장하지 못했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogPortal />
      <DialogTrigger asChild>
        <button type="button" className="flex items-center gap-2">
          <img
            src={user?.profileImage}
            alt=""
            className="h-8 w-8 rounded-full object-cover"
          />
          <div className="text-lg font-bold text-scale-600">
            {user?.nickname}
          </div>
        </button>
      </DialogTrigger>
      <DialogContent className="w-180" aria-describedby={undefined}>
        <div className="px-20 py-22.5 flex flex-col gap-20">
          <DialogTitle>프로필 설정</DialogTitle>
          <form
            onSubmit={handleSubmit(submitProfile)}
            className="flex flex-col gap-12.5"
          >
            <Controller
              name="profilepicId"
              control={control}
              render={({ field }) => (
                <div className="mx-auto relative w-28 h-28">
                  <img
                    src={PROFILE_IMAGES[field.value - 1]}
                    alt="선택한 프로필 이미지"
                    className="w-28 h-28 rounded-full object-cover"
                  />
                  <ProfileImageModal
                    imageCandidates={PROFILE_IMAGES}
                    selectedProfileImage={PROFILE_IMAGES[field.value - 1]}
                    onSave={(selected) => {
                      field.onChange(PROFILE_IMAGES.indexOf(selected) + 1);
                      field.onBlur();
                    }}
                  />
                </div>
              )}
            />
            <div className="flex flex-col gap-3">
              <input
                aria-label="닉네임"
                {...register("nickname")}
                aria-invalid={!!errors.nickname}
                aria-describedby={
                  errors.nickname ? "nickname-error" : undefined
                }
                placeholder="닉네임(최대 10자)"
                className="w-full h-14 rounded-xl border border-black/10 px-5 outline-none focus:border-brand-primary"
              />
              {errors.nickname && (
                <p id="nickname-error" className="text-sm text-red-500">
                  {errors.nickname.message}
                </p>
              )}
            </div>
            <Button
              type="submit"
              variant={isValid ? "primary" : "disabled"}
              disabled={!isValid || isSubmitting}
              aria-busy={isSubmitting}
              className="h-14"
            >
              {isSubmitting ? "저장 중…" : "멋시장 시작하기"}
            </Button>
            {error && (
              <p role="alert" className="text-sm text-red-500">
                {error}
              </p>
            )}
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
