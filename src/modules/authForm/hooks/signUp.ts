import {ISignUp} from "../types/signUp";
import {IResponse} from "@src/types/api";
import {Routes} from "@src/config/routes";
import {authAPI} from "../controllers/api";
import Toast from "react-native-toast-message";
import {QueryKeys} from "@src/config/queryKeys";
import {AuthRouteProp} from "@src/types/navigation";
import {useNavigation} from "@react-navigation/native";
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
