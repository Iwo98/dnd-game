import { Spell } from "@/src/types/spells";
import React from "react";
import { Button } from "@/src/components/ui/button";
import { SquareXIcon } from "lucide-react";
import { Badge } from "@/src/components/ui/badge";

interface Props {
  isOnPreparedList: boolean;
  onTogglePrepared: (spellName: string) => void;
  spell: Spell;
}

const SpellItem = ({ isOnPreparedList, spell, onTogglePrepared }: Props) => {
  const badgeItems = (
    [
      {
        label: "bonus action",
        isAvailable: spell.bonus_action,
        variant: "default",
      },
      {
        label: "concentration",
        isAvailable: spell.concentration,
        variant: "secondary",
      },
      {
        label: "ritual",
        isAvailable: spell.ritual,
        variant: "destructive",
      },
    ] satisfies {
      label: string;
      variant: "default" | "outline" | "destructive" | "secondary";
      isAvailable: boolean;
    }[]
  ).filter(({ isAvailable }) => isAvailable);

  return (
    <div className="flex gap-2 items-center justify-between p-3 border rounded-lg mb-2">
      <div className="flex flex-col gap-1">
        <h3 className="font-semibold">{spell.name}</h3>
        <p className="text-sm text-gray-400">{spell.school}</p>
        <div className="flex flex-wrap gap-1">
          {badgeItems.map(({ label, variant }) => (
            <Badge variant={variant} key={label}>
              {label}
            </Badge>
          ))}
        </div>
      </div>
      {isOnPreparedList ? (
        <SquareXIcon
          onClick={() => onTogglePrepared(spell.name)}
          height={24}
          width={24}
        />
      ) : (
        <Button
          size="sm"
          variant={spell.prepared ? "secondary" : "destructive"}
          onClick={() => onTogglePrepared(spell.name)}
        >
          {spell.prepared ? "Prepared" : "Prepare"}
        </Button>
      )}
    </div>
  );
};

export default SpellItem;
