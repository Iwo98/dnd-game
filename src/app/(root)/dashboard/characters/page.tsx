import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import Characters from "./characters";
import { getCharacters } from "@/src/lib/actions/characters";

const CharactersPage = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["characters"],
    queryFn: getCharacters,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Characters />
    </HydrationBoundary>
  );
};

export default CharactersPage;
