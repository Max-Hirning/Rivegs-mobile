import {IRecipe} from "../types/recipe";
import {recipeAPI} from "../controllers/api";
import {IResponse} from "../../../types/api";
import {QueryKeys} from "../../../config/queryKeys";
import {UseQueryResult, useQuery} from "@tanstack/react-query";

export function useGetRecipe(recipeId: string): UseQueryResult<IResponse<IRecipe>, unknown> {
  return useQuery({
    queryKey: [QueryKeys.GetRecipe, recipeId],
    queryFn: (): Promise<IResponse<IRecipe>> => recipeAPI.get(recipeId),
  });
}
