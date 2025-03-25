"use client";

import Link, { LinkProps } from "next/link";
import Svg, { SvgProps } from "../../../../shared/Svg";

interface Props {
  label: string;
  svg: SvgProps;
  linkProps: LinkProps;
  onClick: () => void;
}

const CharacterClassTile = ({ label, svg, linkProps, onClick }: Props) => {
  return (
    <Link onClick={onClick} {...linkProps}>
      <div className="w-full flex gap-2 justify-start items-center p-2 border  border-neutral-300 rounded-xl">
        <Svg {...svg} />
        <span className="text-lg">{label}</span>
      </div>
    </Link>
  );
};

export default CharacterClassTile;
