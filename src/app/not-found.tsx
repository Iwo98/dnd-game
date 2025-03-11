"use client";
import { Button } from "@/src/components/ui/button";
import { APP_NAME } from "../lib/constants";
import Image from "next/image";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Image
        src="/images/logo.png"
        height={82}
        width={82}
        alt={`${APP_NAME}`}
      />
      <div className="p-6 rounded-lg shadow-md w-1/3 text-center">
        <h1 className="text-3xl font-bold mb-4">Not Found</h1>
        <p className="text-destructive">Could not find requested resource</p>
        <Button
          variant="outline"
          className="mt-4 ml-2"
          onClick={() => window.location.assign("/")}
        >
          Back to home
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
