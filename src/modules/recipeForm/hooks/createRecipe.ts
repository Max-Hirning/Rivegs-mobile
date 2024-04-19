import {useSelector} from "react-redux";
import {IResponse} from "@src/types/api";
import {IUser} from "@src/modules/profile";
import {recipeAPI} from "../controllers/api";
import {RootState} from "@src/modules/store";
import Toast from "react-native-toast-message";
import {QueryKeys} from "@src/config/queryKeys";
import {UseMutationResult, useMutation, useQueryClient} from "@tanstack/react-query";

export function useCreateRecipe(): UseMutationResult<IResponse<undefined>, IResponse<undefined>, FormData, unknown> {
  const queryClient = useQueryClient();
  const profile = useSelector((state: RootState) => state.profile);

  return useMutation({
    mutationKey: [QueryKeys.CreateRecipe],
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
      queryClient.invalidateQueries({queryKey: [QueryKeys.GetRecipes]});
    },
    mutationFn: (data: FormData): Promise<IResponse<undefined>> => {
      data.append("authorId", (profile.data as IUser)._id);
      return recipeAPI.create(data, profile.token as string);
    },
  });
}
