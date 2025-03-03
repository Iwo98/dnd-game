import { artificierIcon } from "@/assets/icons/class/artificerIcon";
import { barbarianIcon } from "@/assets/icons/class/barbarianIcon";
import { bardIcon } from "@/assets/icons/class/bardIcon";
import { clericIcon } from "@/assets/icons/class/clericIcon";
import { druidIcon } from "@/assets/icons/class/druidIcon";
import { fighterIcon } from "@/assets/icons/class/fighterIcon";
import { monkIcon } from "@/assets/icons/class/monkIcon";
import { paladinIcon } from "@/assets/icons/class/paladinIcon";
import { rangerIcon } from "@/assets/icons/class/rangerIcon";
import { rogueIcon } from "@/assets/icons/class/rogueIcon";
import { sorcererIcon } from "@/assets/icons/class/sorcererIcon";
import { warlockIcon } from "@/assets/icons/class/warlockIcon";
import { wizzarcIcon } from "@/assets/icons/class/wizardIcon";
import { SvgProps } from "@/components/shared/Svg";

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
