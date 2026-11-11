import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  AuctionListParams,
  createAuction,
  CreateAuctionRequest,
  getAllAuctions,
} from "../apis/api";

export const auctionQueryKeys = {
  all: ["auctions"] as const,
  list: (params: AuctionListParams) => ["auctions", "list", params] as const,
};

export function useAuctionList(params: AuctionListParams = {}) {
  return useQuery({
    queryKey: auctionQueryKeys.list(params),
    queryFn: () => getAllAuctions(params),
  });
}

export const useCreateAuction = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: CreateAuctionRequest) => {
      const response = await createAuction(data);
      if (!response) {
        throw new Error("경매 등록에 실패했습니다. 다시 시도해주세요.");
      }
      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: auctionQueryKeys.all });
    },
  });
};
