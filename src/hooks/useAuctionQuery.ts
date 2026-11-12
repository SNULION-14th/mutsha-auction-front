import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  AuctionListParams,
  createAuction,
  CreateAuctionRequest,
  getAllAuctions,
} from "@/apis/api";

/**
 * 경매 관련 쿼리 키
 * - all: 경매 관련 모든 쿼리의 상위 키 (무효화 시 사용)
 * - list: 조건별 경매 목록
 */
export const auctionQueryKeys = {
  all: ["auctions"] as const,
  list: (params: AuctionListParams = {}) =>
    [...auctionQueryKeys.all, "list", params] as const,
};

/**
 * 경매 목록을 서버로부터 가져오고 관리하는 쿼리 훅
 */
export function useAuctionList(params: AuctionListParams = {}) {
  return useQuery({
    queryKey: auctionQueryKeys.list(params),
    queryFn: () => getAllAuctions(params),
  });
}

/**
 * 경매를 등록하는 뮤테이션 훅
 * 성공 시 경매 목록 캐시를 무효화하여 새로 등록한 경매가 목록에 반영되도록 합니다.
 */
export const useCreateAuction = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: CreateAuctionRequest) => {
      const response = await createAuction(data);
      // createAuction은 실패 시 null을 반환하므로, 에러로 바꿔 onError/isError가 동작하게 함
      if (!response) throw new Error("경매 등록에 실패했습니다.");
      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: auctionQueryKeys.all });
    },
    onError: (error) => {
      console.error("createAuction error:", error);
    },
  });
};
