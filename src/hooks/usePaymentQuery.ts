import { paymentApproval, paymentReady } from "@/apis/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { userQueryKey } from "./useAuthQuery";

export const usePaymentReady = () => {
  return useMutation({
    mutationFn: paymentReady,
  });
};

export const usePaymentApproval = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: paymentApproval,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: userQueryKey });
    },
  });
};
