import { getCharacterById } from "@/src/app/api/characters";
import Svg from "@/src/components/shared/Svg";
import { characterClassess } from "@/src/lib/constants/characterClasses";
import { redirect } from "next/navigation";

interface CharacterPageProps {
  params: Promise<{ slug: string }>;
}

const CharacterPage = async ({ params }: CharacterPageProps) => {
  const { slug } = await params;
  const character = getCharacterById(slug);

  if (!character) {
    redirect("/not-found");
  }

  const characterClass = characterClassess.find(
    (characterClass) => characterClass.id === character?.class,
  );

  return (
    <div className=" bg-zinc-800 text-foreground p-6 rounded-lg shadow-lg border border-white">
      <h1 className="character-name text-3xl font-bold text-red-400 mb-4">
        {character?.name}
      </h1>
      <div className="character-info space-y-4">
        <div className="character-class flex items-center space-x-3">
          {characterClass && (
            <>
              <Svg
                className="w-10 h-10"
                src={characterClass.svg.src}
                viewBox={characterClass.svg.viewBox}
              />
              <span className="text-xl font-semibold">
                {characterClass.label}
              </span>
            </>
          )}
        </div>
        <div className="character-race text-lg">
          <span className="font-medium text-red-200">
            Race: <span className="text-zinc-100">{character?.race}</span>
          </span>
        </div>
        <div className="character-level text-lg">
          <span className="font-medium text-red-200">
            Level: <span className="text-zinc-100">{character?.level}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CharacterPage;
