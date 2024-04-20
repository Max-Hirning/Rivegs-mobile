import {IResponse} from "@src/types/api";
import {recipeAPI} from "../controllers/api";
import {IPagination} from "../types/pagination";
import {QueryKeys} from "@src/config/queryKeys";
import {IFiltersStore} from "@src/modules/store";
import {UseQueryResult, useQuery} from "@tanstack/react-query";

export function useGetRecipes(filters: Partial<IFiltersStore>): UseQueryResult<IResponse<IPagination>, unknown> {
  return useQuery({
    queryKey: [QueryKeys.GetRecipes, JSON.stringify(filters)],
    queryFn: (): Promise<IResponse<IPagination>> => recipeAPI.get(filters),
  });
}
