"use client";

import { Button } from "@/src/components/ui/button";
import Link from "next/link";
import Svg from "@/src/components/shared/Svg";
import { characterClassess } from "@/src/lib/constants/characterClasses";
import Level from "@/src/components/custom/character/level/level";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getCharacters } from "@/src/lib/actions/characters";
import { createCharacter } from "@/src/lib/actions/character";
import Loader from "@/src/components/shared/loader";

const Characters = () => {
  const queryClient = useQueryClient();

  const { data: simpleCharacters, isLoading } = useQuery({
    queryKey: ["characters"],
    queryFn: () => getCharacters(),
  });

  // Create mutation
  const createCharacterMutation = useMutation({
    mutationFn: createCharacter,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["characters"] });
    },
  });

  const handleSubmit = () => {
    createCharacterMutation.mutate({
      character_class: "barbarian",
      level: 1,
      name: "Name",
      race: "human",
    });
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Button onClick={() => handleSubmit()} size="lg" variant="default">
        {/* <Link href="/dashboard/create-character/pick-class"> */}
        Create a character
        {/* </Link> */}
      </Button>
      <div className="flex flex-col gap-2 mt-4">
        {simpleCharacters?.map((character, index) => {
          const logo = characterClassess.find(
            (characterClass) => characterClass.id === character.character_class,
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
  );
};

export default Characters;
