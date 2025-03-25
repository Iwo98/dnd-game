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
}

export const characterClassess: CharacterClass[] = [
  {
    label: "Artificer",
    svg: artificierIcon,
  },
  {
    label: "Barbarian",
    svg: barbarianIcon,
  },
  {
    label: "Bard",
    svg: bardIcon,
  },
  {
    label: "Cleric",
    svg: clericIcon,
  },
  {
    label: "Druid",
    svg: druidIcon,
  },
  {
    label: "Fighter",
    svg: fighterIcon,
  },
  {
    label: "Monk",
    svg: monkIcon,
  },
  {
    label: "Paladin",
    svg: paladinIcon,
  },
  {
    label: "Ranger",
    svg: rangerIcon,
  },
  {
    label: "Rogue",
    svg: rogueIcon,
  },
  {
    label: "Sorcerer",
    svg: sorcererIcon,
  },
  {
    label: "Warlock",
    svg: warlockIcon,
  },
  {
    label: "Wizard",
    svg: wizzarcIcon,
  },
];
