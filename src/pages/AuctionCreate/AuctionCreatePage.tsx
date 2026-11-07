import { Cup, File } from "@/assets/image";
import { Button } from "@/components/Button";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { auctionCreateSchema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import type { AuctionCreateFormData } from "./schema";
import { useCreateAuction } from "@/hooks/useCreateAuction";
import { TitleField } from "./components/TitleField";
import { DescriptionField } from "./components/DescriptionField";
import { ImageUploadField } from "./components/ImageUploadField";
import { StartPriceField } from "./components/StartPriceField";
import { DurationField } from "./components/DurationField";

function AuctionCreatePage() {
  const navigate = useNavigate();
  const createAuctionMutation = useCreateAuction();
  const methods = useForm<AuctionCreateFormData>({
    resolver: zodResolver(auctionCreateSchema),
    mode: "onTouched",
    defaultValues: {
      title: "",
      description: "",
      startPrice: 0,
      duration: {
        days: 10,
        hours: 0,
        minutes: 0,
      },
    },
  });

  const handleCreateAuction = methods.handleSubmit(async (data) => {
    try {
      const auction = await createAuctionMutation.mutateAsync(data);
      navigate(`/auction/${auction.id}`);
    } catch {
      // The mutation error is displayed below the form.
    }
  });

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
            onSubmit={handleCreateAuction}
            className="w-full rounded-2xl bg-bg-white flex flex-col gap-25 shadow-xl px-35 py-22.5"
          >
            {createAuctionMutation.isError && (
              <p role="alert" className="text-point-warning text-base">
                {createAuctionMutation.error.message}
              </p>
            )}
            <div className="grid grid-cols-1 gap-12">
              <TitleField />
              <DescriptionField />
              <ImageUploadField />
              <div className="w-full flex gap-38">
                <StartPriceField />
                <DurationField />
              </div>
            </div>

            {/* 제출 버튼 */}
            <div className="w-full flex justify-center">
              <Button
                type="submit"
                variant={
                  methods.formState.isValid && !createAuctionMutation.isPending
                    ? "primary"
                    : "disabled"
                }
                disabled={
                  !methods.formState.isValid || createAuctionMutation.isPending
                }
                className="w-80 h-14"
              >
                {createAuctionMutation.isPending
                  ? "경매 등록 중…"
                  : "상품 등록하기"}
              </Button>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}

export default AuctionCreatePage;
