"use client";

import Link from "next/link";
import { ChevronLeftIcon, UserRoundPenIcon } from "lucide-react";
import Level from "@/src/components/custom/character/level/level";
import { getCharacters } from "@/src/lib/actions/characters";
import { useQuery } from "@tanstack/react-query";

interface Props {
  characterId?: number;
}

const CharacterHeader = ({ characterId }: Props) => {
  const { data: simpleCharacters } = useQuery({
    queryKey: ["characters"],
    queryFn: () => getCharacters(),
  });

  console.log({ characterId, simpleCharacters });

  const character = simpleCharacters?.find(({ id }) => id === characterId);

  return (
    <header className="w-full border-b">
      <div className="p-4 lg:p-4 flex-between">
        <div className="flex-center">
          <Link href="/dashboard/characters" className="flex-start">
            <ChevronLeftIcon height={24} width={24} />
          </Link>
        </div>
        {character && (
          <div className="w-full flex gap-2 justify-center items-center px-3 cursor-pointer group">
            <Level level={character.level} />
            <span className="text-lg">
              {character.name} -{" "}
              <span className="text-neutral-400">
                {character.character_class}
              </span>
            </span>
          </div>
        )}
        {/* TODO ADD LINK TO EDIT VIEW */}
        <Link href="/">
          <UserRoundPenIcon className="flex shrink-0" height={24} width={24} />
        </Link>
      </div>
    </header>
  );
};

export default CharacterHeader;
