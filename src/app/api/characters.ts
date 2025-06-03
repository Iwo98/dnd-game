export interface Character {
  name: string | null;
  class: string | null;
  level: number | null;
  id: string | null;
  race: string | null;
}

export const sampleCharacters: Character[] = [
  {
    id: "thalinda_brightwood",
    name: "Thalindra Brightwood",
    class: "druid",
    level: 5,
    race: "Wood Elf",
  },
  {
    id: "gorath_ironfist",
    name: "Gorath Ironfist",
    class: "barbarian",
    level: 3,
    race: "Mountain Dwarf",
  },
  {
    id: "seraphina_duskwatch",
    name: "Seraphina Duskwatch",
    class: "sorcerer",
    level: 7,
    race: "Tiefling",
  },
];

export const getCharacterById = (id: string) => {
  return sampleCharacters.find((character) => character.id === id);
};
