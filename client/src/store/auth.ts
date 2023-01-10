import create from "zustand";
import { persist } from "zustand/middleware";

export interface Profile {
  _id: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

type State = {
  token: string;
  profile: Profile;
  isAuth: boolean;
};

type Actions = {
  setToken: (token: string) => void;
  setProfile: (profile: Profile) => void;
  logout: () => void;
};

export const useAuthStore = create(
  persist<State & Actions>(
    (set) => ({
      token: null,
      profile: null,
      isAuth: false,
      setToken: (token: string) =>
        set((state) => ({
          token,
          isAuth: !!token,
        })),
      setProfile: (profile: any) => set((state) => ({ profile })),
      logout: () =>
        set((state) => ({ token: null, profile: null, isAuth: false })),
    }),
    {
      name: "auth",
    }
  )
);
