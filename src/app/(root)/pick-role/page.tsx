import RoleTile from "@/src/components/custom/role-card/role-tile";
import { BrainIcon, SwordsIcon } from "lucide-react";

const PickRolePage = () => {
  return (
    <div className="h-full flex flex-col justify-center">
      <h1 className="text-4xl text-center">Who are you?</h1>
      <div className="flex flex-col justify-center gap-4 mt-4">
        <RoleTile
          icon={BrainIcon}
          label="Dungeon Master"
          linkProps={{
            href: {
              pathname: "/login",
              query: { role: "dm" },
            },
          }}
        />
        <RoleTile
          icon={SwordsIcon}
          label="Player"
          linkProps={{
            href: {
              pathname: "/login",
              query: { role: "player" },
            },
          }}
        />
      </div>
    </div>
  );
};

export default PickRolePage;
