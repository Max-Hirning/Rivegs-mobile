import {IUser} from "../types/user";
import {useSelector} from "react-redux";
import {IResponse} from "@src/types/api";
import {userAPI} from "../controllers/api";
import {RootState} from "@src/modules/store";
import Toast from "react-native-toast-message";
import {QueryKeys} from "@src/config/queryKeys";
import {IContactUsForm} from "../types/contactUsForm";
import {UseMutationResult, useMutation} from "@tanstack/react-query";

export function useContactUs(): UseMutationResult<IResponse<undefined>, IResponse<undefined>, IContactUsForm, unknown> {
  const profile = useSelector((state: RootState) => state.profile);

  return useMutation({
    mutationKey: [QueryKeys.ContactUs],
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
    },
    mutationFn: (data: IContactUsForm): Promise<IResponse<undefined>> => userAPI.contactUs((profile.data as IUser)._id, data, profile.token as string),
  });
}
