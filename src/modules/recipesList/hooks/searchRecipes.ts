import {IResponse} from "@src/types/api";
import {recipeAPI} from "../controllers/api";
import {IPagination} from "../types/pagination";
import {QueryKeys} from "@src/config/queryKeys";
import {IFiltersStore} from "@src/modules/store";
import {UseInfiniteQueryResult, useInfiniteQuery} from "@tanstack/react-query";

interface IHookResponse {
  pageParams: number[];
  pages: IResponse<IPagination>[]
}

export function useSearchRecipes(filters: Partial<IFiltersStore>): UseInfiniteQueryResult<IHookResponse, unknown> {
  return useInfiniteQuery({
    queryFn: ({pageParam = 1}) => recipeAPI.get({...filters, page: pageParam}),
    getNextPageParam: (lastPage): number|null => lastPage.data.next,
    queryKey: [QueryKeys.GetRecipes, JSON.stringify(filters)],
    initialPageParam: 1,
  });
}
