import Image from "next/image";
import loader from "@/assets/loader.gif";

const LoadingPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Image src={loader} height={50} width={50} alt="Loading" />
    </div>
  );
};

export default LoadingPage;
