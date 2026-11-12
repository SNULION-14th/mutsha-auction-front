// hooks/useAuthQuery.ts

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getUserInfo, signOut, updateUserProfile } from "../apis/api";

/** 유저 프로필 서버 상태의 query key */
export const userQueryKey = ["user", "profile"] as const;

/** 서버에서 유저 프로필을 가져와 캐싱합니다. */
export function useUserProfile(enabled: boolean = true) {
  return useQuery({
    queryKey: userQueryKey,
    queryFn: getUserInfo,
    enabled,
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
    retry: false,
  });
}

/** 프로필 업데이트 요청 후 최신 프로필을 캐시에 반영합니다. */
export function useUpdateUserProfile() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: { nickname: string; profilepicId: number }) => {
      const profile = await updateUserProfile(data.nickname, data.profilepicId);
      if (!profile) throw new Error("프로필을 업데이트하지 못했습니다.");
      return profile;
    },
    onSuccess: (profile) => {
      queryClient.setQueryData(userQueryKey, profile);
    },
    onError: (error) => {
      console.error("updateUserProfile error:", error);
    },
  });
}

/** 로그아웃 요청이 끝나면 사용자 프로필 캐시를 비웁니다. */
export function useLogout() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: signOut,
    onSettled: () => {
      queryClient.setQueryData(userQueryKey, null);
    },
  });
}
