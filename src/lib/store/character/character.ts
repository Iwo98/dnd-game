import { createStore } from "zustand";
import { CharacterStore } from "./types";

export const characterStore = createStore<CharacterStore>((set) => ({
  level: null,
  role: null,
  race: null,
  class: null,
  name: null,

  // reducers
  setCharacter: (character: CharacterStore) =>
    set((state) => ({ ...state, ...character })),
}));
