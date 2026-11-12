import { useMutation, useQueryClient } from "@tanstack/react-query";

import { userQueryKey } from "./useAuthQuery";

import { paymentApproval, paymentReady } from "@/apis/api";

export function usePaymentReady() {
  return useMutation({ mutationFn: paymentReady });
}

export function usePaymentApproval() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: paymentApproval,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: userQueryKey }),
  });
}
