import React from "react";
import Image from "next/image";
import loader from "@/src/assets/loader.gif";

const Loader = () => {
  return (
    <div className="flex justify-center items-center">
      <Image src={loader} height={50} width={50} alt="Loading" />
    </div>
  );
};

export default Loader;
