import {IUser} from "../types/user";
import {IResponse} from "@src/types/api";
import {Routes} from "@src/config/routes";
import {userAPI} from "../controllers/api";
import {QueryKeys} from "@src/config/queryKeys";
import {NavigationParamList} from "@src/types/navigation";
import {RouteProp, useRoute} from "@react-navigation/native";
import {UseQueryResult, useQuery} from "@tanstack/react-query";

export function useGetUser(): UseQueryResult<IResponse<IUser>, unknown> {
  const {params} = useRoute<RouteProp<NavigationParamList, Routes.AuthorProfile>>();

  return useQuery({
    queryKey: [QueryKeys.GetUser],
    queryFn: (): Promise<IResponse<IUser>> => userAPI.get(params.userId),
  });
}
