import Link from "next/link";
import { ChevronLeftIcon, UserRoundPenIcon } from "lucide-react";
import Level from "@/src/components/custom/character/level/level";

interface Props {
  logoRedirect?: string;
  characterName?: string;
  characterClass?: string;
  characterDomain?: string;
  characterLevel?: number;
}

const CharacterHeader = ({
  logoRedirect = "/dashboard/characters",
  characterName = "Lester",
  characterClass = "Cleric",
  characterDomain = "Light",
  characterLevel = 4,
}: Props) => {
  const characterInfo =
    characterName && characterClass ? (
      <div className="w-full flex gap-2 justify-center items-center px-3 cursor-pointer group">
        <Level level={characterLevel} />
        <span className="text-lg">
          {characterName} -{" "}
          <span className="text-neutral-400">
            {characterClass}
            {characterDomain ? ` (${characterDomain})` : ""}
          </span>
        </span>
      </div>
    ) : null;

  return (
    <header className="w-full border-b">
      <div className="p-4 lg:p-4 flex-between">
        <div className="flex-center">
          <Link href={logoRedirect} className="flex-start">
            <ChevronLeftIcon height={24} width={24} />
          </Link>
        </div>
        {characterInfo}
        {/* TODO ADD LINK TO EDIT VIEW */}
        <Link href="/">
          <UserRoundPenIcon className="flex shrink-0" height={24} width={24} />
        </Link>
      </div>
    </header>
  );
};

export default CharacterHeader;
