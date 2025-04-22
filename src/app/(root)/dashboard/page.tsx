import AuthRequired from "@/src/components/shared/auth-required";
import { Button } from "@/src/components/ui/button";
import Link from "next/link";
import { Character } from "../../api/characters";
import Svg from "@/src/components/shared/Svg";
import { characterClassess } from "@/src/lib/constants/characterClasses";

const DashboardPage = async () => {
  let characters: Character[] = [];

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/characters`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      },
    );

    if (res.status !== 200) {
      throw new Error("Failed to fetch characters");
    }

    characters = await res.json();
  } catch (error) {
    console.error("Error fetching characters:", error);
  }

  return (
    <AuthRequired role="player">
      <>
        <Button size="lg" variant="default" asChild>
          <Link href="dashboard/create-character/pick-class">
            Create a character
          </Link>
        </Button>
        <div className="flex flex-col gap-2 mt-4">
          {characters.map((character, index) => {
            const logo = characterClassess.find(
              (characterClass) => characterClass.id === character.class,
            );

            return (
              <Link href={`/dashboard/character/${character.id}`} key={index}>
                <div className="w-full flex gap-2 justify-start items-center p-2 border-2  border-neutral-300 rounded-xl">
                  <span className="text-lg border border-white bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
                    {character.level}
                  </span>
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
};

export default DashboardPage;
