import { useNavigate } from "react-router-dom";
import { Button } from "@/components/Button";
import { auctionCreateSchema, AuctionCreateFormData } from "./schema";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TitleField } from "./components/TitleField";
import { DescriptionField } from "./components/DescriptionField";
import { ImageField } from "./components/ImageField";
import { StartPriceField } from "./components/StartPriceField";
import { DurationField } from "./components/DurationField";
import { useCreateAuction } from "@/hooks/useAuctionQuery";
import { CreateAuctionRequest } from "@/apis/api";
import { ROUTES } from "@/constants/router";

// 폼 데이터 → 서버 요청 형식 변환
function toCreateAuctionRequest(
  data: AuctionCreateFormData,
): CreateAuctionRequest {
  const { days, hours, minutes } = data.duration;
  const durationMs = ((days * 24 + hours) * 60 + minutes) * 60 * 1000;

  return {
    title: data.title.trim(),
    description: data.description.trim(),
    starting_price: data.startPrice,
    image_file: data.image,
    end_time: new Date(Date.now() + durationMs).toISOString(),
  };
}

function AuctionCreatePage() {
  const navigate = useNavigate();
  const { mutateAsync: createAuctionMutation, isPending } = useCreateAuction();

  const methods = useForm<AuctionCreateFormData>({
    resolver: zodResolver(auctionCreateSchema),
    mode: "onChange",
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

  const onSubmit = async (data: AuctionCreateFormData) => {
    if (isPending) return;
    try {
      await createAuctionMutation(toCreateAuctionRequest(data));
      // 등록 완료 후 경매 입찰 페이지로 이동
      navigate(ROUTES.AUCTION.ROOT);
    } catch {
      alert("경매 등록에 실패했습니다. 다시 시도해주세요.");
    }
  };

  const canSubmit = methods.formState.isValid && !isPending;

  return (
    <div className="w-full px-6 md:px-20 xl:px-50 py-30">
      <div className="max-w-[973px] mx-auto flex flex-col gap-25">
        <div className="flex flex-col gap-5">
          <div className="text-5xl font-bold text-scale-600">경매 등록하기</div>
          <div className="text-2xl text-scale-400">
            당신의 애착템, 술잔으로 걸어보세요!
          </div>
        </div>
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(onSubmit)}
            className="w-full rounded-2xl bg-bg-white flex flex-col gap-25 shadow-xl px-8 md:px-16 xl:px-35 py-22.5"
          >
            <div className="grid grid-cols-1 gap-12">
              <TitleField />
              <DescriptionField />
              <ImageField />

              <div className="w-full flex flex-wrap gap-x-20 gap-y-12 2xl:gap-x-38">
                <StartPriceField />
                <DurationField />
              </div>
            </div>

            {/* 제출 버튼 */}
            <div className="w-full flex justify-center">
              <Button
                type="submit"
                variant={canSubmit ? "primary" : "disabled"}
                disabled={!canSubmit}
                className="w-80 h-14"
              >
                {isPending ? "경매 등록 중..." : "상품 등록하기"}
              </Button>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}

export default AuctionCreatePage;
