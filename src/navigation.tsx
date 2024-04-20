/* eslint-disable react-native/no-inline-styles */

import {View} from "react-native";
import {TextUI} from "@src/UI/TextUI";
import HomePage from "@src/pages/index";
import {useDispatch} from "react-redux";
import {Routes} from "@src/config/routes";
import HomeIcon from "@src/assets/icons/home";
import PlusIcon from "@src/assets/icons/plus";
import Toast from "react-native-toast-message";
import {useSession} from "@src/modules/authForm";
import RecipePage from "@src/pages/recipe/index";
import BookmarkIcon from "@src/assets/icons/saved";
import {ScreenRouteProp} from "./types/navigation";
import ProfilePage from "@src/pages/profile/index";
import ProfileIcon from "@src/assets/icons/profile";
import {Neutral, Primary} from "@src/config/themes";
import {getVersion} from "react-native-device-info";
import SettingsPage from "@src/pages/settings/index";
import SplashScreen from "react-native-splash-screen";
import NetInfo from "@react-native-community/netinfo";
import SignInPage from "@src/pages/auth/sign-in/index";
import {useNavigation} from "@react-navigation/native";
import SignUpPage from "@src/pages/auth/sign-up/index";
import AddRecipePage from "@src/pages/recipe/add/index";
import EditRecipePage from "@src/pages/recipe/edit/index";
import NotificationPage from "@src/pages/notifications/index";
import SavedRecipesPage from "@src/pages/saved-recipes/index";
import NotificationIcon from "@src/assets/icons/notification";
import {AppDispatch, fetchRecipeTypes} from "@src/modules/store";
import AuthorProfilePage from "@src/pages/profile/[userId]/index";
import React, {ReactElement, useCallback, useEffect} from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

interface ITabBarIconArg {
  size: number;
  color: string;
  focused: boolean;
}

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const AddRecipeTabBarIcon = (): ReactElement => {
  return (
    <View style={{
      bottom: 5,
      alignItems: "center",
      position: "absolute",
      justifyContent: "space-between",
    }}>
      <View style={{
        width: 48,
        height: 48,
        bottom: 20,
        display: "flex",
        borderRadius: 100,
        alignItems: "center",
        position: "absolute",
        justifyContent: "center",
        backgroundColor: Primary.Primary50,
      }}>
        <PlusIcon width={45} height={45} color="white"/>
      </View>
      <TextUI
        style={{
          color: Neutral.Neutral70,
        }}
        variant="small"
      >{getVersion()}</TextUI>
    </View>
  );
};
const HomeTabBarIcon = ({focused}: ITabBarIconArg): ReactElement => <HomeIcon width={30} height={30} color={focused ? Primary.Primary50 : Neutral.Neutral30} fill={focused ? "#F9D8D8" : Neutral.Neutral0}/>;
const ProfileTabBarIcon = ({focused}: ITabBarIconArg): ReactElement => <ProfileIcon width={30} height={30} color={focused ? Primary.Primary50 : Neutral.Neutral30} fill={focused ? "#F9D8D8" : Neutral.Neutral0}/>;
const SavedRecipesTabBarIcon = ({focused}: ITabBarIconArg): ReactElement => <BookmarkIcon width={30} height={30} color={focused ? Primary.Primary50 : Neutral.Neutral30} fill={focused ? "#F9D8D8" : Neutral.Neutral0}/>;
const NotificationTabBarIcon = ({focused}: ITabBarIconArg): ReactElement => <NotificationIcon width={30} height={30} color={focused ? Primary.Primary50 : Neutral.Neutral30} fill={focused ? "#F9D8D8" : Neutral.Neutral0}/>;

function AppScreens(): ReactElement {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}
      initialRouteName={Routes.Settings}
    >
      <Tab.Screen
        options={{
          tabBarIcon: HomeTabBarIcon,
        }}
        name={Routes.Home}
        component={HomePage}
      />
      <Tab.Screen
        options={{
          tabBarIcon: SavedRecipesTabBarIcon,
        }}
        name={Routes.SavedRecipes}
        component={SavedRecipesPage}
      />
      <Tab.Screen
        options={{
          tabBarStyle: {
            display: "none",
          },
          tabBarIcon: AddRecipeTabBarIcon,
        }}
        name={Routes.AddRecipe}
        component={AddRecipePage}
      />
      <Tab.Screen
        options={{
          tabBarIcon: NotificationTabBarIcon,
        }}
        name={Routes.Notification}
        component={NotificationPage}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ProfileTabBarIcon,
        }}
        name={Routes.Profile}
        component={ProfilePage}
      />
    </Tab.Navigator>
  );
}
function AuthScreens(): ReactElement {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={Routes.SignIn}
    >
      <Stack.Screen
        name={Routes.SignIn}
        component={SignInPage}
      />
      <Stack.Screen
        name={Routes.SignUp}
        component={SignUpPage}
      />
    </Stack.Navigator>
  );
}

export default function Navigation(): ReactElement {
  const {update} = useSession();
  const dispatch: AppDispatch = useDispatch();
  const {navigate} = useNavigation<ScreenRouteProp>();

  const start = useCallback(async (): Promise<void> => {
    update((): void => {
      navigate(Routes.App);
    });
    await dispatch(fetchRecipeTypes());
    setTimeout(() => SplashScreen.hide(), 1000);
  }, [dispatch, navigate, update]);

  useEffect(() => {
    start();
  }, [start]);

  useEffect(() => {
    const removeNetInfoSubscription = NetInfo.addEventListener((state) => {
      const offline = !(state.isConnected && state.isInternetReachable);
      if(offline) {
        Toast.show({
          type: "error",
          text1: "Error",
          text2: "No internet connection",
        });
      }
    });

    return () => removeNetInfoSubscription();
  }, [navigate]);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={Routes.Auth}
    >
      <Stack.Screen
        name={Routes.Auth}
        component={AuthScreens}
      />
      <Stack.Screen
        name={Routes.App}
        component={AppScreens}
      />
      <Stack.Screen
        name={Routes.Recipe}
        component={RecipePage}
      />
      <Stack.Screen
        name={Routes.AuthorProfile}
        component={AuthorProfilePage}
      />
      <Stack.Screen
        name={Routes.Settings}
        component={SettingsPage}
      />
      <Stack.Screen
        name={Routes.AddRecipe}
        component={AddRecipePage}
      />
      <Stack.Screen
        name={Routes.EditRecipe}
        component={EditRecipePage}
      />
    </Stack.Navigator>
  );
}
