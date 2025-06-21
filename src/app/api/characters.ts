export interface Character {
  name: string | null;
  class: string | null;
  level: number;
  id: string | null;
  race: string | null;
}

export const sampleCharacters: Character[] = [
  {
    id: "6",
    name: "Thalindra Brightwood",
    class: "druid",
    level: 5,
    race: "Wood Elf",
  },
  {
    id: "7",
    name: "Gorath Ironfist",
    class: "barbarian",
    level: 3,
    race: "Mountain Dwarf",
  },
  {
    id: "8",
    name: "Seraphina Duskwatch",
    class: "sorcerer",
    level: 7,
    race: "Tiefling",
  },
];

export const getCharacterById = (id: string) => {
  return sampleCharacters.find((character) => character.id === id);
};
