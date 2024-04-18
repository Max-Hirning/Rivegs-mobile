import {IUser} from "../types/user";
import {userAPI} from "../controllers/api";
import {IResponse} from "../../../types/api";
import {Routes} from "../../../config/routes";
import {QueryKeys} from "../../../config/queryKeys";
import {RouteProp, useRoute} from "@react-navigation/native";
import {NavigationParamList} from "../../../types/navigation";
import {UseQueryResult, useQuery} from "@tanstack/react-query";

export function useGetUser(): UseQueryResult<IResponse<IUser>, unknown> {
  const {params} = useRoute<RouteProp<NavigationParamList, Routes.AuthorProfile>>();

  return useQuery({
    queryKey: [QueryKeys.GetUser],
    queryFn: (): Promise<IResponse<IUser>> => userAPI.get(params.userId),
  });
}
