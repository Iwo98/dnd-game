import { LucideIcon } from "lucide-react";
import Link, { LinkProps } from "next/link";

interface Props {
  label: string;
  icon: LucideIcon;
  linkProps: LinkProps;
}

const RoleTile = ({ icon: Icon, label, linkProps }: Props) => {
  return (
    <Link {...linkProps}>
      <div className="w-full flex gap-2 justify-start items-center p-2 border  border-neutral-300 rounded-xl">
        <Icon />
        <span className="text-lg">{label}</span>
      </div>
    </Link>
  );
};

export default RoleTile;
