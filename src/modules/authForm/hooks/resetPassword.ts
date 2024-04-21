import {IResponse} from "@src/types/api";
import {Routes} from "@src/config/routes";
import {authAPI} from "../controllers/api";
import Toast from "react-native-toast-message";
import {QueryKeys} from "@src/config/queryKeys";
import {IResetPassword} from "../types/resetPassword";
import {UseMutationResult, useMutation} from "@tanstack/react-query";
import {NavigationParamList, ScreenRouteProp} from "@src/types/navigation";
import {RouteProp, useNavigation, useRoute} from "@react-navigation/native";

export function useResetPassword(): UseMutationResult<IResponse<undefined>, IResponse<undefined>, IResetPassword, unknown> {
  const navigation = useNavigation<ScreenRouteProp>();
  const {params} = useRoute<RouteProp<NavigationParamList, Routes.ResetPassword>>();

  return useMutation({
    mutationKey: [QueryKeys.ResetPassword],
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
      navigation.navigate(Routes.SignIn);
    },
    mutationFn: (data: IResetPassword): Promise<IResponse<undefined>> => authAPI.resetPassword({...data, email: params.email, code: params.code}),
  });
}
