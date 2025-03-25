import { UserRole } from "@/src/types/user";
import { CharacterSimple } from "../character/types";

export interface UserStore {
  nickname: string | null;
  email: string | null;
  role: UserRole | null;
  characters: CharacterSimple[];
}
