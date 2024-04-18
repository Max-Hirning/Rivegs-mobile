import {IFilters} from "../types/filters";
import {recipeAPI} from "../controllers/api";
import {IResponse} from "../../../types/api";
import {IPagination} from "../types/pagination";
import {QueryKeys} from "../../../config/queryKeys";
import {UseQueryResult, useQuery} from "@tanstack/react-query";

export function useGetRecipes(filters: Partial<IFilters>): UseQueryResult<IResponse<IPagination>, unknown> {
  return useQuery({
    queryKey: [QueryKeys.GetRecipes, JSON.stringify(filters)],
    queryFn: (): Promise<IResponse<IPagination>> => recipeAPI.get(filters),
  });
}