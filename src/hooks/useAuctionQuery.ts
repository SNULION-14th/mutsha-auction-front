import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { createAuction, getAllAuctions } from "@/apis/api";
import type { AuctionListParams } from "@/apis/api";

export const auctionQueryKey = ["auctions"] as const;

export function useAuctions(params: AuctionListParams = {}) {
  return useQuery({
    queryKey: [...auctionQueryKey, params],
    queryFn: ({ signal }) => getAllAuctions(params, signal),
  });
}

export function useCreateAuction() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createAuction,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: auctionQueryKey }),
  });
}
