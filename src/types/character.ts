export interface SimpleCharacter {
  id: number;
  name: string;
  level: number;
  character_class: string;
  race: string;
}

export type CreateCharacterPayload = Omit<SimpleCharacter, "id">;
