import {
  Profile1,
  Profile6,
  Profile5,
  Profile2,
  Profile3,
  Profile4,
} from "@/assets/image";
import { UserProfile, updateUserProfile, signOut } from "@/apis/api";
import { createContext, useState, useContext } from "react";

//유저 정보
type UserInfo = {
  profileImage: string;
  nickname: string;
  points: number;
} | null;

//인증 및 유저 정보 관리 메서드
type AuthMethod = {
  login: (profile: UserProfile) => void;
  logout: () => void;
  updateProfile: (nickname: string, profilepicId: number) => Promise<boolean>;
};

type UserContextType = {
  user: UserInfo;
} & AuthMethod;

const UserContext = createContext<UserContextType | null>(null);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserInfo | null>(null);

  const login = (profile: UserProfile) => {
    setUser({
      profileImage: getProfileImageById(profile.profilepic_id),
      nickname: profile.nickname ?? "",
      points: profile.remaining_points,
    });
  };

  const logout = async () => {
    await signOut();
    setUser(null);
  };
  const updateProfile = async (
    nickname: string,
    profilepicId: number,
  ): Promise<boolean> => {
    const response = await updateUserProfile(nickname, profilepicId);
    if (!response) return false;

    setUser({
      profileImage: getProfileImageById(response.profilepic_id),
      nickname: response.nickname ?? "",
      points: response.remaining_points,
    });
    return true;
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
