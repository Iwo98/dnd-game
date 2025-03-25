import { Button } from "@/src/components/ui/button";
import { APP_NAME } from "../lib/constants";
import Image from "next/image";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Image
        src="/images/logo.png"
        height={82}
        width={82}
        alt={`${APP_NAME}`}
      />
      <div className="p-6 rounded-lg text-center">
        <h1 className="text-3xl font-bold mb-4">Not Found</h1>
        <p className="text-destructive">Could not find requested resource</p>
        <Button asChild variant="outline" className="mt-4 ml-2">
          <Link href="/">Back to home</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
