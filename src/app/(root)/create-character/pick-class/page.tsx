"use client";

import CharacterClass from "@/components/custom/CharacterClass/CharacterClass";
import { characterClassess } from "@/src/lib/constants/characterClasses";

const PickClassPage = () => {
  return (
    <>
      <h1 className="text-3xl font-bold text-center mb-4">Pick a class</h1>
      <main className="flex flex-col gap-4">
        {characterClassess.map(({ svg, label }) => (
          <CharacterClass
            key={label}
            label={label}
            svg={{
              ...svg,
              className: "w-8 h-8",
            }}
            linkProps={{ href: "/create-character/fill-information" }}
            onClick={() => console.log("clicked")}
          />
        ))}
      </main>
    </>
  );
};

export default PickClassPage;
