import { zodResolver } from "@hookform/resolvers/zod";
import { isAxiosError } from "axios";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { DescriptionField } from "./components/DescriptionField";
import { DurationField } from "./components/DurationField";
import { ImageField } from "./components/ImageField";
import { StartPriceField } from "./components/StartPriceField";
import { TitleField } from "./components/TitleField";
import type { AuctionCreateFormData } from "./schema";
import { auctionCreateSchema } from "./schema";

import { RefreshTokenExpiredError } from "@/apis/axios";
import { Button } from "@/components/Button";
import { ROUTES } from "@/constants/router";
import { useCreateAuction } from "@/hooks/useAuctionQuery";
import { buildEndTimeISO } from "@/utils/auction";

export default function AuctionCreatePage() {
  const navigate = useNavigate();
  const { mutateAsync, isPending, error } = useCreateAuction();
  const methods = useForm<AuctionCreateFormData>({
    resolver: zodResolver(auctionCreateSchema),
    mode: "onTouched",
    defaultValues: {
      title: "",
      description: "",
      startPrice: 0,
      duration: { days: 10, hours: 0, minutes: 0 },
    },
  });

  const submitAuction = async (data: AuctionCreateFormData) => {
    try {
      await mutateAsync({
        title: data.title,
        description: data.description,
        starting_price: data.startPrice,
        image_file: data.image,
        end_time: buildEndTimeISO(data.duration),
      });
      navigate(ROUTES.AUCTION.ROOT);
    } catch {
      // useMutation의 error를 표시하고 입력값을 유지합니다.
    }
  };

  const isSubmitting = isPending || methods.formState.isSubmitting;
  const needsLogin =
    error instanceof RefreshTokenExpiredError ||
    (isAxiosError(error) && error.response?.status === 401);

  return (
    <div className="w-full px-50 py-30">
      <div className="max-w-[973px] mx-auto flex flex-col gap-25">
        <div className="flex flex-col gap-5">
          <div className="text-5xl font-bold text-scale-600">경매 등록하기</div>
          <div className="text-2xl text-scale-400">
            당신의 애착템, 술잔으로 걸어보세요!
          </div>
        </div>
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(submitAuction)}
            className="w-full rounded-2xl bg-bg-white flex flex-col gap-25 shadow-xl px-35 py-22.5"
          >
            <div className="grid grid-cols-1 gap-12">
              <TitleField />
              <DescriptionField />
              <ImageField />
              <div className="w-full flex gap-38">
                <StartPriceField />
                <DurationField />
              </div>
            </div>
            {error && (
              <p
                role="alert"
                className="text-point-warning text-base text-center"
              >
                {needsLogin
                  ? "로그인이 필요합니다. 로그인 후 다시 등록해주세요."
                  : "경매 등록에 실패했습니다. 잠시 후 다시 시도해주세요."}
              </p>
            )}
            <div className="w-full flex justify-center">
              <Button
                type="submit"
                variant={methods.formState.isValid ? "primary" : "disabled"}
                disabled={!methods.formState.isValid || isSubmitting}
                aria-busy={isSubmitting}
                className="w-80 h-14"
              >
                {isSubmitting ? "경매 등록 중…" : "상품 등록하기"}
              </Button>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}
