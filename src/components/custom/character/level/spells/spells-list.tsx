import { Spell } from "@/src/types/spells";
import React from "react";
import { RotateCcwIcon } from "lucide-react";
import SpellItem from "./components/spell-item";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/src/components/ui/accordion";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/src/components/ui/popover";
import {
  SpellSlots,
  UpdateUsedSpellSlots,
} from "@/src/app/(root)/dashboard/character/[id]/character";
import { Button } from "@/src/components/ui/button";

interface Props {
  handleResetSpellSlots?: () => void;
  spellSlots?: SpellSlots;
  updateUsedSpellSlots?: UpdateUsedSpellSlots;
  spells: Spell[];
  isPreparedList?: boolean;
  onTogglePrepared: (spellName: string) => void;
}

const SpellsList = ({
  handleResetSpellSlots,
  isPreparedList = false,
  onTogglePrepared,
  spellSlots,
  spells,
  updateUsedSpellSlots,
}: Props) => {
  const spellsByLevel = spells.reduce(
    (acc, currentSpell) => {
      const spellLevel = currentSpell.level;

      const currentSpellsAtLevel = acc[spellLevel] || [];

      return {
        ...acc,
        [spellLevel]: [...currentSpellsAtLevel, currentSpell],
      };
    },
    {} as Record<number, Spell[]>,
  );

  const renderDots = ({
    level,
    isPreview,
  }: {
    level: number;
    isPreview: boolean;
  }) => {
    if (!spellSlots || !updateUsedSpellSlots || level === 0) {
      return null;
    }

    const spellSlotsForLevel = spellSlots[level];
    return [...Array(spellSlotsForLevel?.available)].map((_, index) => (
      <div
        key={index}
        onClick={
          isPreview
            ? undefined
            : () => updateUsedSpellSlots({ level, used: index + 1 })
        }
        className={`rounded-full border border-primary transition-colors ${
          index < spellSlotsForLevel.used ? "bg-primary" : "bg-background"
        } ${isPreview ? "w-2 h-2" : "cursor-pointer  w-5 h-5"}`}
      />
    ));
  };

  return (
    <div className="w-full">
      {isPreparedList && (
        <div className="p-2">
          <Button
            onClick={handleResetSpellSlots}
            variant="secondary"
            size="sm"
            className="w-full"
          >
            <span className="flex items-center gap-1">
              <span>Reset All Spell Slots</span>
              <RotateCcwIcon width={14} height={14} />
            </span>
          </Button>
        </div>
      )}
      <Accordion type="multiple" className="space-y-2">
        {Object.entries(spellsByLevel).map(([level, spells]) => (
          <AccordionItem key={level} value={level}>
            <AccordionTrigger className="px-4 py-2 hover:no-underline">
              <div className="flex items-center justify-between w-full">
                <span className="font-semibold">
                  {level === "0" ? "Cantrips" : `Level: ${level}`}
                </span>
                <div className="flex-1 flex justify-center">
                  <Popover>
                    <PopoverTrigger
                      asChild
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                    >
                      <div className="flex space-x-1 ">
                        {renderDots({ level: Number(level), isPreview: true })}
                      </div>
                    </PopoverTrigger>
                    <PopoverContent
                      asChild
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                      className="flex justify-center border-2"
                    >
                      <div className="flex space-x-1">
                        {renderDots({ level: Number(level), isPreview: false })}
                      </div>
                    </PopoverContent>
                  </Popover>
                </div>
                <div className="w-4" /> {/* Spacer for visual balance */}
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-3">
              <div className="space-y-2">
                {spells.map((spell) => (
                  <SpellItem
                    isOnPreparedList={isPreparedList}
                    key={spell.name}
                    spell={spell}
                    onTogglePrepared={onTogglePrepared}
                  />
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default SpellsList;
