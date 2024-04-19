/* eslint-disable react-native/no-inline-styles */

import {View} from "react-native";
import {TextUI} from "./UI/TextUI";
import HomePage from "./pages/index";
import {Routes} from "./config/routes";
import {useDispatch} from "react-redux";
import HomeIcon from "./assets/icons/home";
import PlusIcon from "./assets/icons/plus";
import RecipePage from "./pages/recipe/index";
import {useSession} from "./modules/authForm";
import ProfilePage from "./pages/profile/index";
import ProfileIcon from "./assets/icons/profile";
import {Neutral, Primary} from "./config/themes";
import SettingsPage from "./pages/settings/index";
import BookmarkIcon from "./assets/icons/bookmark";
import {getVersion} from "react-native-device-info";
import SignInPage from "./pages/auth/sign-in/index";
import SignUpPage from "./pages/auth/sign-up/index";
import AddRecipePage from "./pages/recipe/add/index";
import SplashScreen from "react-native-splash-screen";
import NetInfo from "@react-native-community/netinfo";
import EditRecipePage from "./pages/recipe/edit/index";
import NotificationPage from "./pages/notifications/index";
import SavedRecipesPage from "./pages/saved-recipes/index";
import NotificationIcon from "./assets/icons/notification";
import {AppDispatch, fetchRecipeTypes} from "./modules/store";
import AuthorProfilePage from "./pages/profile/[userId]/index";
import React, {ReactElement, useCallback, useEffect} from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {useNavigation} from "@react-navigation/native";
import Toast from "react-native-toast-message";

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
        <PlusIcon width={24} height={24} color="white"/>
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
const HomeTabBarIcon = ({focused}: ITabBarIconArg): ReactElement => <HomeIcon width={24} height={24} color={focused ? Primary.Primary50 : Neutral.Neutral30} fill={focused ? "#F9D8D8" : Neutral.Neutral0}/>;
const ProfileTabBarIcon = ({focused}: ITabBarIconArg): ReactElement => <ProfileIcon width={24} height={24} color={focused ? Primary.Primary50 : Neutral.Neutral30} fill={focused ? "#F9D8D8" : Neutral.Neutral0}/>;
const NotificationTabBarIcon = ({focused}: ITabBarIconArg): ReactElement => <NotificationIcon width={24} height={24} color={focused ? Primary.Primary50 : Neutral.Neutral30} fill={focused ? "#F9D8D8" : Neutral.Neutral0}/>;
const SavedRecipesTabBarIcon = ({focused}: ITabBarIconArg): ReactElement => <BookmarkIcon width={24} height={24} color={focused ? Primary.Primary50 : Neutral.Neutral30} stroke={focused ? Primary.Primary50 : Neutral.Neutral30} fill={focused ? "#F9D8D8" : Neutral.Neutral0}/>;

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
  const {navigate} = useNavigation();
  const dispatch: AppDispatch = useDispatch();

  const start = useCallback(async (): Promise<void> => {
    update();
    await dispatch(fetchRecipeTypes());
    setTimeout(() => SplashScreen.hide(), 1000);
  }, [dispatch, update]);

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
