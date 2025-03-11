export interface CharacterSimple {
  name: string | null;
  class: string | null;
  level: number | null;
}

export interface CharacterStore extends CharacterSimple {
  race: string | null;
}
