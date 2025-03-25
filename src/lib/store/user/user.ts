import { createStore } from "zustand";
import { UserStore } from "./types";

export const userStore = createStore<UserStore>((set) => ({
  email: null,
  nickname: null,
  role: null,
  characters: [],

  // reducers
  setUser: (user: UserStore) => set((state) => ({ ...state, ...user })),
}));
