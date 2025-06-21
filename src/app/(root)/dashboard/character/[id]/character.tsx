"use client";

import Loader from "@/src/components/shared/loader";
import { getCharacters } from "@/src/lib/actions/characters";
import { useQuery } from "@tanstack/react-query";
import { redirect } from "next/navigation";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/src/components/ui/tabs";
interface Props {
  characterId: number;
}

const Character = ({ characterId }: Props) => {
  const { data: simpleCharacters, isLoading } = useQuery({
    queryKey: ["characters"],
    queryFn: () => getCharacters(),
  });

  const character = simpleCharacters?.find(({ id }) => id === characterId);

  if (isLoading) {
    return <Loader />;
  }

  if (!character) {
    redirect("/not-found");
  }

  return (
    <div>
      <Tabs defaultValue="prepared" className="w-full">
        <TabsList className="w-full roun">
          <TabsTrigger className="w-full" value="prepared">
            Prepared
          </TabsTrigger>
          <TabsTrigger className="w-full" value="class">
            Class
          </TabsTrigger>
        </TabsList>
        <TabsContent value="prepared">Prepared spells</TabsContent>
        <TabsContent value="class">Class spells</TabsContent>
      </Tabs>
    </div>
  );
};

export default Character;
