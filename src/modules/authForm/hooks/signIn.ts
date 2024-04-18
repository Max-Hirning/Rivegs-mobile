import {useSession} from "./session";
import {authAPI} from "../controllers/api";
import {IResponse} from "../../../types/api";
import {Routes} from "../../../config/routes";
import Toast from "react-native-toast-message";
import {QueryKeys} from "../../../config/queryKeys";
import {useNavigation} from "@react-navigation/native";
import {ISignIn, ISignInResponse} from "../types/signIn";
import {ScreenRouteProp} from "../../../types/navigation";
import {UseMutationResult, useMutation} from "@tanstack/react-query";

export function useSignIn(): UseMutationResult<IResponse<ISignInResponse>, IResponse<undefined>, ISignIn, unknown> {
  const {logIn} = useSession();
  const navigation = useNavigation<ScreenRouteProp>();

  return useMutation({
    mutationKey: [QueryKeys.SignIn],
    onError: (error: IResponse<undefined>) => {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: error.message,
      });
    },
    onSuccess: (success: IResponse<ISignInResponse>) => {
      Toast.show({
        type: "success",
        text1: "Success",
        text2: success.message,
      });
      if(success.data) {
        logIn(success.data);
        navigation.navigate(Routes.App);
      }
    },
    mutationFn: (data: ISignIn): Promise<IResponse<ISignInResponse>> => authAPI.signIn(data),
  });
}
