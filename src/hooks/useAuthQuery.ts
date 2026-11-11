import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getUserInfo, signOut, updateUserProfile } from "../apis/api";

export const userQueryKey = ["user", "profile"] as const;

export function useUserProfile(enabled: boolean = true) {
  return useQuery({
    queryKey: userQueryKey,

    queryFn: getUserInfo,
    enabled,
    staleTime: 5 * 60 * 1000,
    retry: false,
  });
}

export const useUpdateUserProfile = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: { nickname: string; profilepicId: number }) => {
      const response = await updateUserProfile(
        data.nickname,
        data.profilepicId,
      );
      if (!response) {
        throw new Error("프로필 업데이트에 실패했습니다.");
      }
      return response;
    },
    onSuccess: (data) => {
      if (data) {
        queryClient.setQueryData(userQueryKey, data);
      }
    },
    onError: (error) => {
      console.error("updateUserProfile error:", error);
    },
  });
};

export const useLogout = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: signOut,
    onSettled: async () => {
      console.log("logout settled");
      queryClient.setQueryData(userQueryKey, null);
    },
  });
};
