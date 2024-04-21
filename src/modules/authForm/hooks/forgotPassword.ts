import {IResponse} from "@src/types/api";
import {Routes} from "@src/config/routes";
import {authAPI} from "../controllers/api";
import Toast from "react-native-toast-message";
import {QueryKeys} from "@src/config/queryKeys";
import {ScreenRouteProp} from "@src/types/navigation";
import {useNavigation} from "@react-navigation/native";
import {IForgotPassword} from "../types/forgotPassword";
import {UseMutationResult, useMutation} from "@tanstack/react-query";

export function useForgotPassword(): UseMutationResult<IResponse<undefined>, IResponse<undefined>, IForgotPassword, unknown> {
  const navigation = useNavigation<ScreenRouteProp>();

  return useMutation({
    mutationKey: [QueryKeys.ForgotPassword],
    onError: (error: IResponse<undefined>) => {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: error.message,
      });
    },
    onSuccess: (success: IResponse<undefined>, data: IForgotPassword) => {
      Toast.show({
        type: "success",
        text1: "Success",
        text2: success.message,
      });
      navigation.navigate(Routes.ConfirmCode, {...data, route: Routes.ResetPassword});
    },
    mutationFn: (data: IForgotPassword): Promise<IResponse<undefined>> => authAPI.forgotPassword(data),
  });
}
