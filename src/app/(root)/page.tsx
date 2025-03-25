import { Button } from "@/src/components/ui/button";
import { APP_NAME } from "@/src/lib/constants";
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
        <h1 className="text-3xl font-bold mb-4">Choose your path</h1>
        <div className="flex justify-center gap-2">
          <Button asChild variant="default" className="mt-4 ml-2">
            <Link href="/login">Log in</Link>
          </Button>
          <Button variant="outline" className="mt-4 ml-2">
            <Link href="/register">Sign up</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
