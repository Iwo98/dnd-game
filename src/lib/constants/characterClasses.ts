import { artificierIcon } from "@/src/assets/icons/class/artificerIcon";
import { barbarianIcon } from "@/src/assets/icons/class/barbarianIcon";
import { bardIcon } from "@/src/assets/icons/class/bardIcon";
import { clericIcon } from "@/src/assets/icons/class/clericIcon";
import { druidIcon } from "@/src/assets/icons/class/druidIcon";
import { fighterIcon } from "@/src/assets/icons/class/fighterIcon";
import { monkIcon } from "@/src/assets/icons/class/monkIcon";
import { paladinIcon } from "@/src/assets/icons/class/paladinIcon";
import { rangerIcon } from "@/src/assets/icons/class/rangerIcon";
import { rogueIcon } from "@/src/assets/icons/class/rogueIcon";
import { sorcererIcon } from "@/src/assets/icons/class/sorcererIcon";
import { warlockIcon } from "@/src/assets/icons/class/warlockIcon";
import { wizzarcIcon } from "@/src/assets/icons/class/wizardIcon";
import { SvgProps } from "@/src/components/shared/Svg";

interface CharacterClass {
  label: string;
  svg: SvgProps;
  id: string;
}

export const characterClassess: CharacterClass[] = [
  {
    id: "artificer",
    label: "Artificer",
    svg: artificierIcon,
  },
  {
    id: "barbarian",
    label: "Barbarian",
    svg: barbarianIcon,
  },
  {
    id: "bard",
    label: "Bard",
    svg: bardIcon,
  },
  {
    id: "cleric",
    label: "Cleric",
    svg: clericIcon,
  },
  {
    id: "druid",
    label: "Druid",
    svg: druidIcon,
  },
  {
    id: "fighter",
    label: "Fighter",
    svg: fighterIcon,
  },
  {
    id: "monk",
    label: "Monk",
    svg: monkIcon,
  },
  {
    id: "paladin",
    label: "Paladin",
    svg: paladinIcon,
  },
  {
    id: "ranger",
    label: "Ranger",
    svg: rangerIcon,
  },
  {
    id: "rogue",
    label: "Rogue",
    svg: rogueIcon,
  },
  {
    id: "sorcerer",
    label: "Sorcerer",
    svg: sorcererIcon,
  },
  {
    id: "warlock",
    label: "Warlock",
    svg: warlockIcon,
  },
  {
    id: "wizard",
    label: "Wizard",
    svg: wizzarcIcon,
  },
];
