import AuthRequired from "@/src/components/shared/auth-required";
import { Button } from "@/src/components/ui/button";
import Link from "next/link";
import Svg from "@/src/components/shared/Svg";
import { characterClassess } from "@/src/lib/constants/characterClasses";
import { sampleCharacters } from "../../../api/characters";
import Level from "@/src/components/custom/character/level/level";

const DashboardPage = async () => (
  <AuthRequired role="player">
    <>
      <Button size="lg" variant="default" asChild>
        <Link href="/dashboard/create-character/pick-class">
          Create a character
        </Link>
      </Button>
      <div className="flex flex-col gap-2 mt-4">
        {sampleCharacters.map((character, index) => {
          const logo = characterClassess.find(
            (characterClass) => characterClass.id === character.class,
          );

          return (
            <Link href={`/dashboard/character/${character.id}`} key={index}>
              <div className="w-full flex gap-2 justify-start items-center p-2 border-2  border-neutral-300 rounded-xl">
                <Level level={character.level} />
                {logo && (
                  <Svg
                    className="w-8 h-8"
                    src={logo.svg.src}
                    viewBox={logo.svg.viewBox}
                  />
                )}

                <span className="text-lg">{character.name}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  </AuthRequired>
);

export default DashboardPage;
