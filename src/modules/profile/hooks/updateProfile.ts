import {IUser} from "../types/user";
import {useSelector} from "react-redux";
import {IFormDataPart} from "@src/types";
import {IResponse} from "@src/types/api";
import {userAPI} from "../controllers/api";
import {RootState} from "@src/modules/store";
import Toast from "react-native-toast-message";
import {QueryKeys} from "@src/config/queryKeys";
import {useSession} from "@src/modules/authForm";
import {UseMutationResult, useMutation} from "@tanstack/react-query";

export function useUpdateProfile(): UseMutationResult<IResponse<undefined>, IResponse<undefined>, FormData, unknown> {
  const {update, logOut} = useSession();
  const profile = useSelector((state: RootState) => state.profile);

  return useMutation({
    mutationKey: [QueryKeys.UpdateProfile],
    onError: (error: IResponse<undefined>) => {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: error.message,
      });
    },
    onSuccess: (success: IResponse<undefined>, payload: FormData) => {
      if((payload.getParts().find((el: FormDataPart) => (el as IFormDataPart).fieldName === "email") as IFormDataPart)?.string) {
        logOut();
      } else {
        update();
      }
      Toast.show({
        type: "success",
        text1: "Success",
        text2: success.message,
      });
    },
    mutationFn: (data: FormData): Promise<IResponse<undefined>> => userAPI.updateProfile((profile.data as IUser)._id, data, profile.token as string),
  });
}
