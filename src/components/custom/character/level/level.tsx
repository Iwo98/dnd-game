import React from "react";

interface Props {
  level: number;
}

const Level = ({ level }: Props) => (
  <span className="text-lg border border-white bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center">
    {level}
  </span>
);

export default Level;
