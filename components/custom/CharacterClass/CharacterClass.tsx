"use client";

import Svg, { SvgProps } from "@/components/shared/Svg";
import Link, { LinkProps } from "next/link";

interface Props {
  label: string;
  svg: SvgProps;
  linkProps: LinkProps;
  onClick: () => void;
}

const CharacterClass = ({ label, svg, linkProps, onClick }: Props) => {
  return (
    <Link onClick={onClick} {...linkProps}>
      <div className="w-full flex gap-2 justify-start items-center p-2 border  border-neutral-300 rounded-xl">
        <Svg {...svg} />
        <span className="text-lg">{label}</span>
      </div>
    </Link>
  );
};

export default CharacterClass;
