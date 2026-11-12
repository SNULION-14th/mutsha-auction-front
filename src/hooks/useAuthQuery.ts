import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { getUserInfo, signOut, updateUserProfile } from "@/apis/api";
import type { UserProfile } from "@/apis/api";

export const userQueryKey = ["user", "profile"] as const;

export function useUserProfile(enabled = true) {
  return useQuery({
    queryKey: userQueryKey,
    queryFn: ({ signal }) => getUserInfo(signal),
    enabled,
    staleTime: 5 * 60 * 1000,
    retry: false,
  });
}

export function useUpdateUserProfile() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: { nickname: string; profilepicId: number }) =>
      updateUserProfile(data.nickname, data.profilepicId),
    onSuccess: async (data) => {
      await queryClient.cancelQueries({ queryKey: userQueryKey });
      queryClient.setQueryData<UserProfile | null>(userQueryKey, (profile) =>
        profile ? { ...profile, ...data } : profile,
      );
    },
  });
}

export function useLogout() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: signOut,
    onSettled: async () => {
      await queryClient.cancelQueries({ queryKey: userQueryKey });
      queryClient.setQueryData(userQueryKey, null);
    },
  });
}
