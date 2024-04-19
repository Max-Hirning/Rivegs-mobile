import {useSelector} from "react-redux";
import {IResponse} from "@src/types/api";
import {Routes} from "@src/config/routes";
import {recipeAPI} from "../controllers/api";
import {RootState} from "@src/modules/store";
import Toast from "react-native-toast-message";
import {QueryKeys} from "@src/config/queryKeys";
import {useSession} from "@src/modules/authForm";
import {NavigationParamList, ScreenRouteProp} from "@src/types/navigation";
import {RouteProp, useNavigation, useRoute} from "@react-navigation/native";
import {UseMutationResult, useMutation, useQueryClient} from "@tanstack/react-query";

export function useDeleteRecipe(): UseMutationResult<IResponse<undefined>, IResponse<undefined>, unknown, unknown> {
  const {update} = useSession();
  const queryClient = useQueryClient();
  const {goBack} = useNavigation<ScreenRouteProp>();
  const profile = useSelector((state: RootState) => state.profile);
  const {params} = useRoute<RouteProp<NavigationParamList, Routes.Recipe>>();

  return useMutation({
    mutationKey: [QueryKeys.DeleteRecipe],
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
      update((): void => goBack());
      queryClient.invalidateQueries({queryKey: [QueryKeys.GetRecipes]});
    },
    mutationFn: (): Promise<IResponse<undefined>> => recipeAPI.delete(params.recipeId, profile.token as string),
  });
}
