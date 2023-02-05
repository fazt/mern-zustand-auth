import create from "zustand";
import { persist } from "zustand/middleware";
import { profileRequest, registerRequest } from "../api/auth";
import { createUser } from "../interface/user";

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
  errors: any;
};

type Actions = {
  setToken: (token: string) => void;
  register: (user: createUser) => void;
  logout: () => void;
  cleanErrors: () => void;
};

export const useAuthStore = create(
  persist<State & Actions>(
    (set) => ({
      token: null,
      profile: null,
      isAuth: false,
      errors: null,
      setToken: (token: string) =>
        set((state) => ({
          token,
          isAuth: !!token,
        })),
      register: async (user: createUser) => {
        try {
          const resRegister = await registerRequest(user);
          set(() => ({
            token: resRegister.data.token,
            isAuth: true,
          }));
        } catch (error) {
          set(() => ({ errors: error.response.data }));
        }
      },
      getProfile: async () => {
        const resProfile = await profileRequest();
        set(() => ({
          profile: resProfile.data,
        }));
      },
      logout: () => set(() => ({ token: null, profile: null, isAuth: false })),
      cleanErrors: () => set(() => ({ errors: null })),
    }),
    {
      name: "auth",
    }
  )
);
