import {
  Profile1,
  Profile6,
  Profile5,
  Profile2,
  Profile3,
  Profile4,
} from "@/assets/image";
import type { UserProfile } from "@/apis/api";
import { createContext, useContext, useMemo } from "react";
import { useQueryClient } from "@tanstack/react-query";
import {
  useLogout,
  useUpdateUserProfile,
  useUserProfile,
  userQueryKey,
} from "@/hooks/useAuthQuery";

//유저 정보
type UserInfo = {
  profileImage: string;
  nickname: string;
  points: number;
} | null;

//인증 및 유저 정보 관리 메서드
type AuthMethod = {
  login: (profile: UserProfile) => void;
  logout: () => Promise<boolean>;
  updateProfile: (nickname: string, profilepicId: number) => Promise<boolean>;
};

type UserContextType = {
  user: UserInfo;
} & AuthMethod;

const UserContext = createContext<UserContextType | null>(null);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const queryClient = useQueryClient();
  const { data: userProfile } = useUserProfile();
  const { mutateAsync: logoutMutation } = useLogout();
  const { mutateAsync: updateProfileMutation } = useUpdateUserProfile();

  const user = useMemo(() => {
    if (!userProfile) return null;
    return {
      profileImage: getProfileImageById(userProfile.profilepic_id),
      nickname: userProfile.nickname ?? "",
      points: userProfile.remaining_points,
    };
  }, [userProfile]);

  const login = (profile: UserProfile) => {
    queryClient.setQueryData(userQueryKey, profile);
  };

  const logout = async () => {
    return await logoutMutation();
  };

  const updateProfile = async (nickname: string, profilepicId: number) => {
    try {
      await updateProfileMutation({ nickname, profilepicId });
      return true;
    } catch {
      return false;
    }
  };

  return (
    <UserContext.Provider value={{ user, login, logout, updateProfile }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

export const PROFILE_IMAGES = [
  Profile1,
  Profile2,
  Profile3,
  Profile4,
  Profile5,
  Profile6,
];

function getProfileImageById(id: number | null | undefined): string {
  if (!id) return Profile1;
  return PROFILE_IMAGES[(id - 1) % PROFILE_IMAGES.length] ?? Profile1;
}
