// hooks/useAuthQuery.ts

import { useQuery } from "@tanstack/react-query";
import { getUserInfo } from "../apis/api";

/**
 * 유저 프로필 상태를 관리하는 쿼리 키
 * 이 키들로 상태를 식별하고 접근합니다.
 */
export const userQueryKey = ["user", "profile"] as const;

/**
 * 유저 프로필 데이터를 서버로부터 가져오고 관리하는 쿼리 훅
 */
export function useUserProfile(enabled: boolean = true) {
  return useQuery({
    queryKey: userQueryKey,

    // 유저 프로필 데이터를 서버로부터 가져오는 함수
    queryFn: getUserInfo,
    enabled, // 쿼리 활성화 여부
    staleTime: 5 * 60 * 1000, // 5분
    retry: false, // 실패 시 재시도 하지 않음
  });
}
