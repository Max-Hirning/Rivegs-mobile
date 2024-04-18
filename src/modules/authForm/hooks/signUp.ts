import {ISignUp} from "../types/signUp";
import {authAPI} from "../controllers/api";
import {IResponse} from "../../../types/api";
import {Routes} from "../../../config/routes";
import Toast from "react-native-toast-message";
import {QueryKeys} from "../../../config/queryKeys";
import {useNavigation} from "@react-navigation/native";
import {AuthRouteProp} from "../../../types/navigation";
import {UseMutationResult, useMutation} from "@tanstack/react-query";

export function useSignUp(): UseMutationResult<IResponse<undefined>, IResponse<undefined>, Omit<ISignUp, "confirmPassword">, unknown> {
  const navigation = useNavigation<AuthRouteProp>();

  return useMutation({
    mutationKey: [QueryKeys.SignUp],
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
    mutationFn: (data: Omit<ISignUp, "confirmPassword">): Promise<IResponse<undefined>> => authAPI.signUp(data),
  });
}
