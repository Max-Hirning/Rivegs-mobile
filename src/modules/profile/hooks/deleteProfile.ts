import {IUser} from "../types/user";
import {useSelector} from "react-redux";
import {IResponse} from "@src/types/api";
import {userAPI} from "../controllers/api";
import {RootState} from "@src/modules/store";
import Toast from "react-native-toast-message";
import {QueryKeys} from "@src/config/queryKeys";
import {useSession} from "@src/modules/authForm";
import {UseMutationResult, useMutation} from "@tanstack/react-query";

export function useDeleteProfile(): UseMutationResult<IResponse<undefined>, IResponse<undefined>, void> {
  const {logOut} = useSession();
  const profile = useSelector((state: RootState) => state.profile);

  return useMutation({
    mutationKey: [QueryKeys.DeleteUser],
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
      logOut();
    },
    mutationFn: (): Promise<IResponse<undefined>> => userAPI.delete((profile.data as IUser)._id, profile.token as string),
  });
}
