import { Button } from "../Button";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Dialog,
  DialogContent,
  DialogPortal,
  DialogTrigger,
} from "../ui/dialog";
import ProfileImageModal from "./ProfileImageModal";
import { useUser, PROFILE_IMAGES } from "@/contexts/UserContext";
import {
  profileSettingSchema,
  ProfileSettingFormData,
} from "./schema/profileSettingSchema";

export default function ProfileSettingModal() {
  const { user, updateProfile } = useUser();
  const [open, setOpen] = useState(false);

  const getDefaultValues = (): ProfileSettingFormData => ({
    nickname: user?.nickname ?? "",
    profileImage: user?.profileImage ?? PROFILE_IMAGES[0],
  });

  const {
    register,
    control,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isValid, isSubmitting },
  } = useForm<ProfileSettingFormData>({
    resolver: zodResolver(profileSettingSchema),
    mode: "onChange",
    defaultValues: getDefaultValues(),
  });

  // 모달이 열릴 때마다 현재 유저 정보로 폼 초기화
  const handleOpenChange = (next: boolean) => {
    if (next) reset(getDefaultValues());
    setOpen(next);
  };

  const onSubmit = async (data: ProfileSettingFormData) => {
    await updateProfile(
      data.nickname,
      PROFILE_IMAGES.indexOf(data.profileImage) + 1,
    );
    setOpen(false);
  };

  const selectedProfileImage = watch("profileImage");
  const canSubmit = isValid && !isSubmitting;

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogPortal />
      <DialogTrigger asChild>
        <div className="flex items-center gap-2 cursor-pointer">
          <img
            src={user?.profileImage}
            alt="profile"
            className="h-8 w-8 rounded-full object-cover"
          />
          <div className="text-lg font-bold text-scale-600">
            {user?.nickname}
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="w-180">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="px-20 py-22.5 flex flex-col gap-20"
        >
          <div className="text-4xl font-bold text-scale-600">프로필 설정</div>
          <div className="flex flex-col gap-12.5">
            <div className="mx-auto relative w-28 h-28">
              <img
                src={selectedProfileImage}
                className="w-28 h-28 rounded-full object-cover"
              />
              <Controller
                name="profileImage"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <ProfileImageModal
                    imageCandidates={PROFILE_IMAGES}
                    selectedProfileImage={value}
                    onSave={onChange}
                  />
                )}
              />
            </div>

            <div className="flex flex-col gap-3">
              <input
                {...register("nickname")}
                placeholder="닉네임(최대 10자)"
                className="w-full h-14 rounded-xl border border-black/10 px-5 outline-none focus:border-brand-primary"
              />
              {errors.nickname && (
                <p className="text-sm text-red-500">
                  {errors.nickname.message}
                </p>
              )}
            </div>

            <Button
              type="submit"
              variant={canSubmit ? "primary" : "disabled"}
              disabled={!canSubmit}
              className="h-14"
            >
              {isSubmitting ? "저장 중..." : "멋시장 시작하기"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
