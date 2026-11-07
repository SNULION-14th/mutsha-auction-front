import { useQuery } from "@tanstack/react-query";
import {
  getAllAuctions,
  getAuctionDetail,
  getRecommendedAuctions,
  type AuctionListParams,
} from "@/apis/api";

export const auctionKeys = {
  all: ["auctions"] as const,
  lists: () => [...auctionKeys.all, "list"] as const,
  list: (params: AuctionListParams = {}) =>
    [...auctionKeys.lists(), params] as const,
  recommended: () => [...auctionKeys.all, "recommended"] as const,
  detail: (id: number | string) => ["auction", String(id)] as const,
};

export function useAuctionList(params: AuctionListParams = {}) {
  return useQuery({
    queryKey: auctionKeys.list(params),
    queryFn: () => getAllAuctions(params),
    staleTime: 30_000,
  });
}

export function useRecommendedAuctions() {
  return useQuery({
    queryKey: auctionKeys.recommended(),
    queryFn: getRecommendedAuctions,
    staleTime: 60_000,
  });
}

export function useAuctionDetail(id: number | string | undefined) {
  return useQuery({
    queryKey: auctionKeys.detail(id ?? "missing"),
    enabled: id !== undefined && id !== "",
    queryFn: async () => {
      const auction = await getAuctionDetail(id!);
      if (!auction) throw new Error("경매 정보를 불러오지 못했습니다.");
      return auction;
    },
    staleTime: 15_000,
  });
}
