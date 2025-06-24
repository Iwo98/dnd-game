"use client";

import Loader from "@/src/components/shared/loader";
import { getCharacters } from "@/src/lib/actions/characters";
import { useQuery } from "@tanstack/react-query";
import { redirect } from "next/navigation";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/src/components/ui/tabs";
import SpellsList from "@/src/components/custom/character/level/spells/spells-list";
import { available_spells } from "@/src/app/api/spells";
import { Spell } from "@/src/types/spells";
import { useState } from "react";

export type SpellSlots = Record<number, { available: number; used: number }>;
export type UpdateUsedSpellSlots = ({
  level,
  used,
}: {
  level: number;
  used: number;
}) => void;

interface Props {
  characterId: number;
}

const Character = ({ characterId }: Props) => {
  const { data: simpleCharacters, isLoading } = useQuery({
    queryKey: ["characters"],
    queryFn: () => getCharacters(),
  });

  const [spells, setSpells] = useState<Spell[]>(available_spells);
  const [spellSlots, setSpellSlots] = useState<
    Record<number, { available: number; used: number }>
  >({
    1: { available: 5, used: 0 },
    2: { available: 3, used: 2 },
    3: { available: 2, used: 0 },
  });

  const updateUsedSpellSlots: UpdateUsedSpellSlots = ({ level, used }) => {
    console.log({ used });
    setSpellSlots((prevState) => {
      const properUsedNumber =
        prevState[level].used === 1 && used === 1 ? 0 : used;

      return {
        ...prevState,
        [level]: { ...prevState[level], used: properUsedNumber },
      };
    });
  };

  const handleResetSpellSlots = () => {
    setSpellSlots((prev) =>
      Object.keys(prev).reduce(
        (acc, level) => ({
          ...acc,
          [level]: { ...prev[Number(level)], used: 0 },
        }),
        prev,
      ),
    );
  };

  const handleTogglePrepared = (spellName: string) => {
    setSpells((currentSpells) =>
      currentSpells.map((spell) =>
        spell.name === spellName
          ? { ...spell, prepared: !spell.prepared }
          : spell,
      ),
    );
  };

  const preparedSpells = spells.filter(({ prepared }) => prepared);
  const character = simpleCharacters?.find(({ id }) => id === characterId);

  if (isLoading) {
    return <Loader />;
  }

  if (!character) {
    redirect("/not-found");
  }

  return (
    <div>
      <Tabs defaultValue="prepared" className="w-full">
        <TabsList className="w-full rounded-none">
          <TabsTrigger className="w-full" value="prepared">
            Prepared Spells
          </TabsTrigger>
          <TabsTrigger className="w-full" value="class">
            Class Spells
          </TabsTrigger>
        </TabsList>
        <TabsContent value="prepared">
          <SpellsList
            handleResetSpellSlots={handleResetSpellSlots}
            updateUsedSpellSlots={updateUsedSpellSlots}
            spellSlots={spellSlots}
            isPreparedList
            spells={preparedSpells}
            onTogglePrepared={handleTogglePrepared}
          />
        </TabsContent>
        <TabsContent value="class">
          <SpellsList spells={spells} onTogglePrepared={handleTogglePrepared} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Character;
