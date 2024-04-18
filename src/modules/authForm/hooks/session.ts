import {AppDispatch} from "../../store";
import {useDispatch} from "react-redux";
import {Routes} from "../../../config/routes";
import Toast from "react-native-toast-message";
import {ISignInResponse} from "../types/signIn";
import {useNavigation} from "@react-navigation/native";
import {ScreenRouteProp} from "../../../types/navigation";
import {Token, UserId} from "../../../config/asyncStorageKeys";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {fetchUser, resetProfile, setToken} from "../../store/controllers/profile";

interface IHookResponse {
  logOut: () => Promise<void>;
  update: () => Promise<void>;
  logIn: (arg: ISignInResponse) => void;
}

export function useSession(): IHookResponse {
  const dispatch: AppDispatch = useDispatch();
  const {navigate} = useNavigation<ScreenRouteProp>();

  const logOut = async (): Promise<void> => {
    try {
      navigate(Routes.Auth);
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

  const update = async (): Promise<void> => {
    try {
      const token = await AsyncStorage.getItem(Token);
      const userId = await AsyncStorage.getItem(UserId);
      if(token && userId) {
        dispatch(setToken(token));
        await dispatch(fetchUser(userId));
        navigate(Routes.App);
      } else {
        navigate(Routes.Auth);
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
