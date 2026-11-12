import { createContext, useCallback, useContext, useMemo } from "react";
import type { ReactNode } from "react";

import { useQueryClient } from "@tanstack/react-query";

import type { UserProfile } from "@/apis/api";
import {
  Profile1,
  Profile2,
  Profile3,
  Profile4,
  Profile5,
  Profile6,
} from "@/assets/image";
import {
  useLogout,
  useUpdateUserProfile,
  useUserProfile,
  userQueryKey,
} from "@/hooks/useAuthQuery";

export const PROFILE_IMAGES = [
  Profile1,
  Profile2,
  Profile3,
  Profile4,
  Profile5,
  Profile6,
];

type UserInfo = {
  profileImage: string;
  nickname: string;
  points: number;
};

type UserContextType = {
  user: UserInfo | null;
  login: (profile: UserProfile) => Promise<void>;
  logout: () => Promise<void>;
  updateProfile: (nickname: string, profilepicId: number) => Promise<void>;
};

const UserContext = createContext<UserContextType | null>(null);

export function UserProvider({ children }: { children: ReactNode }) {
  const { data: userProfile } = useUserProfile();
  const queryClient = useQueryClient();
  const { mutateAsync: logoutMutation } = useLogout();
  const { mutateAsync: updateProfileMutation } = useUpdateUserProfile();

  const user = useMemo(
    () =>
      userProfile
        ? {
            profileImage: getProfileImageById(userProfile.profilepic_id),
            nickname: userProfile.nickname ?? "",
            points: userProfile.remaining_points,
          }
        : null,
    [userProfile],
  );

  const login = useCallback(
    async (profile: UserProfile) => {
      await queryClient.cancelQueries({ queryKey: userQueryKey });
      queryClient.setQueryData(userQueryKey, profile);
    },
    [queryClient],
  );
  const logout = useCallback(async () => {
    await logoutMutation();
  }, [logoutMutation]);
  const updateProfile = useCallback(
    async (nickname: string, profilepicId: number) => {
      await updateProfileMutation({ nickname, profilepicId });
    },
    [updateProfileMutation],
  );
  const value = useMemo(
    () => ({ user, login, logout, updateProfile }),
    [user, login, logout, updateProfile],
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUser must be used within a UserProvider");
  return context;
}

function getProfileImageById(id: number | null): string {
  if (!id || id < 1) return Profile1;
  return PROFILE_IMAGES[(id - 1) % PROFILE_IMAGES.length] ?? Profile1;
}
