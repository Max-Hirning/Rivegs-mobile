import {IRecipe} from "../types/recipe";
import {IResponse} from "@src/types/api";
import {recipeAPI} from "../controllers/api";
import {QueryKeys} from "@src/config/queryKeys";
import {UseQueryResult, useQuery} from "@tanstack/react-query";

export function useGetRecipe(recipeId: string): UseQueryResult<IResponse<IRecipe>, unknown> {
  return useQuery({
    queryKey: [QueryKeys.GetRecipe, recipeId],
    queryFn: (): Promise<IResponse<IRecipe>> => recipeAPI.get(recipeId),
  });
}
