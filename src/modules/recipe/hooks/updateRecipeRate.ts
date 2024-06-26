import {useSelector} from "react-redux";
import {IResponse} from "@src/types/api";
import {Routes} from "@src/config/routes";
import {recipeAPI} from "../controllers/api";
import {RootState} from "@src/modules/store";
import Toast from "react-native-toast-message";
import {QueryKeys} from "@src/config/queryKeys";
import {NavigationParamList} from "@src/types/navigation";
import {RouteProp, useRoute} from "@react-navigation/native";
import {UseMutationResult, useMutation, useQueryClient} from "@tanstack/react-query";

export function useUpdateRecipeRate(): UseMutationResult<IResponse<undefined>, IResponse<undefined>, number, unknown> {
  const queryClient = useQueryClient();
  const profile = useSelector((state: RootState) => state.profile);
  const {params} = useRoute<RouteProp<NavigationParamList, Routes.Recipe>>();

  return useMutation({
    mutationKey: [QueryKeys.UpdateRecipeRate],
    onError: (error: IResponse<undefined>) => {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: error.message,
      });
    },
    onSuccess: (success: IResponse<undefined>) => {
      Toast.show({
        type: "success",
        text1: "Success",
        text2: success.message,
      });
      queryClient.invalidateQueries({queryKey: [QueryKeys.GetRecipe]});
      queryClient.invalidateQueries({queryKey: [QueryKeys.GetRecipes]});
    },
    mutationFn: (data: number): Promise<IResponse<undefined>> => recipeAPI.updateRecipeRate(params.recipeId, data, profile.token as string),
  });
}
