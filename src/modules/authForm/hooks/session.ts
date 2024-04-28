import {useDispatch} from "react-redux";
import {Routes} from "@src/config/routes";
import Toast from "react-native-toast-message";
import {ISignInResponse} from "../types/signIn";
import {ScreenRouteProp} from "@src/types/navigation";
import {useNavigation} from "@react-navigation/native";
import {Token, UserId} from "@src/config/asyncStorageKeys";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {AppDispatch, fetchUser, resetProfile, setToken} from "@src/modules/store";

interface IHookResponse {
  logOut: () => Promise<void>;
  logIn: (arg: ISignInResponse) => void;
  update: (successCallback?: () => void) => Promise<void>;
}

export function useSession(): IHookResponse {
  const dispatch: AppDispatch = useDispatch();
  const {navigate} = useNavigation<ScreenRouteProp>();

  const logOut = async (): Promise<void> => {
    try {
      navigate(Routes.SignIn);
      dispatch(resetProfile());
      await AsyncStorage.removeItem(Token);
      await AsyncStorage.removeItem(UserId);
    } catch {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "Something went wrong",
      });
    }
  };

  const update = async (successCallback?: () => void): Promise<void> => {
    try {
      const token = await AsyncStorage.getItem(Token);
      const userId = await AsyncStorage.getItem(UserId);
      if(token && userId) {
        dispatch(setToken(token));
        await dispatch(fetchUser(userId));
        (successCallback) && successCallback();
      } else {
        navigate(Routes.Home);
      }
    } catch {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "Something went wrong",
      });
    }
  };

  const logIn = async ({token, userId}: ISignInResponse): Promise<void> => {
    try {
      AsyncStorage.setItem(Token, token);
      AsyncStorage.setItem(UserId, userId);
      dispatch(fetchUser(userId));
      dispatch(setToken(token));
      navigate(Routes.App);
    } catch {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "Something went wrong",
      });
    }
  };

  return {logOut, update, logIn};
}
