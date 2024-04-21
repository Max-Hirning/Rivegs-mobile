import {IResponse} from "@src/types/api";
import {Routes} from "@src/config/routes";
import {authAPI} from "../controllers/api";
import Toast from "react-native-toast-message";
import {QueryKeys} from "@src/config/queryKeys";
import {IConfirmCode} from "../types/confirmCode";
import {UseMutationResult, useMutation} from "@tanstack/react-query";
import {NavigationParamList, ScreenRouteProp} from "@src/types/navigation";
import {RouteProp, useNavigation, useRoute} from "@react-navigation/native";

export function useConfirmCode(): UseMutationResult<IResponse<undefined>, IResponse<undefined>, IConfirmCode, unknown> {
  const {navigate} = useNavigation<ScreenRouteProp>();
  const {params} = useRoute<RouteProp<NavigationParamList, Routes.ConfirmCode>>();

  return useMutation({
    mutationKey: [QueryKeys.ConfirmCode],
    onError: (error: IResponse<undefined>) => {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: error.message,
      });
    },
    onSuccess: (success: IResponse<undefined>, data: IConfirmCode) => {
      Toast.show({
        type: "success",
        text1: "Success",
        text2: success.message,
      });
      if(params.route === Routes.SignIn) {
        navigate(Routes.SignIn);
      } else if(params.route === Routes.ResetPassword) {
        navigate(Routes.ResetPassword, {email: params.email, ...data});
      }
    },
    mutationFn: (data: IConfirmCode): Promise<IResponse<undefined>> => authAPI.confirmCode({...data, email: params.email}),
  });
}
