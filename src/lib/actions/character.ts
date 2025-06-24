import { CreateCharacterPayload, SimpleCharacter } from "@/src/types/character";
import api from "../axios";

export const createCharacter = async (payload: CreateCharacterPayload) => {
  const response = await api.post<SimpleCharacter>(
    "player/characters/create/",
    payload,
  );

  return response.data;
};
