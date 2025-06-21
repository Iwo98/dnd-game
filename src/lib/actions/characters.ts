import api from "../axios";
import { SimpleCharacter } from "@/src/types/character";

export const getCharacters = async () => {
  const response = await api.get<SimpleCharacter[]>("player/characters");

  return response.data;
};
