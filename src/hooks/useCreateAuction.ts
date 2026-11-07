import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createAuction } from "@/apis/api";
import { buildEndTimeISO } from "@/utils/auction";
import { auctionKeys } from "@/hooks/useAuctionQueries";

type CreateAuctionForm = {
  title: string;
  description: string;
  image: File;
  startPrice: number;
  duration: { days: number; hours: number; minutes: number };
};

export function useCreateAuction() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (form: CreateAuctionForm) => {
      const auction = await createAuction({
        title: form.title.trim(),
        description: form.description.trim(),
        starting_price: form.startPrice,
        image_file: form.image,
        end_time: buildEndTimeISO(form.duration),
      });

      if (!auction) {
        throw new Error(
          "경매 등록에 실패했습니다. 입력값과 로그인을 확인해주세요.",
        );
      }

      return auction;
    },
    onSuccess: async (auction) => {
      queryClient.setQueryData(auctionKeys.detail(auction.id), auction);
      await queryClient.invalidateQueries({ queryKey: auctionKeys.all });
    },
  });
}
