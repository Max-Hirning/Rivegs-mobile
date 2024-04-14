import {View} from "react-native";
import HomePage from "./pages/index";
import {Routes} from "./config/routes";
import {Primary} from "./config/themes";
import React, {ReactElement} from "react";
import HomeIcon from "./assets/icons/home";
import PlusIcon from "./assets/icons/plus";
import RecipePage from "./pages/recipe/index";
import ProfilePage from "./pages/profile/index";
import ProfileIcon from "./assets/icons/profile";
import SettingsPage from "./pages/settings/index";
import BookmarkIcon from "./assets/icons/bookmark";
import {PageHeader} from "./components/headers/page";
import AddRecipePage from "./pages/recipe/add/index";
import EditRecipePage from "./pages/recipe/edit/index";
import {SearchHeader} from "./components/headers/search";
import NotificationPage from "./pages/notifications/index";
import SavedRecipesPage from "./pages/saved-recipes/index";
import NotificationIcon from "./assets/icons/notification";
import {ProfileHeader} from "./components/headers/profile";
import {PageWithMenuHeader} from "./components/headers/pageWithMenu";
import {NotificationHeader} from "./components/headers/notification";
import {SavedRecipesHeader} from "./components/headers/savedRecipes";
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
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{
      width: 48,
      height: 48,
      bottom: 15,
      display: "flex",
      borderRadius: 100,
      alignItems: "center",
      position: "absolute",
      justifyContent: "center",
      backgroundColor: Primary.Primary50,
    }}>
      <PlusIcon width={24} height={24} color="white"/>
    </View>
  );
};
const HomeTabBarIcon = ({focused}: ITabBarIconArg): ReactElement => <HomeIcon width={24} height={24} color={focused ? "#E23E3E" : "#C1C1C1"} fill={focused ? "#F9D8D8" : "white"}/>;
const ProfileTabBarIcon = ({focused}: ITabBarIconArg): ReactElement => <ProfileIcon width={24} height={24} color={focused ? "#E23E3E" : "#C1C1C1"} fill={focused ? "#F9D8D8" : "white"}/>;
const NotificationTabBarIcon = ({focused}: ITabBarIconArg): ReactElement => <NotificationIcon width={24} height={24} color={focused ? "#E23E3E" : "#C1C1C1"} fill={focused ? "#F9D8D8" : "white"}/>;
const SavedRecipesTabBarIcon = ({focused}: ITabBarIconArg): ReactElement => <BookmarkIcon width={24} height={24} color={focused ? "#E23E3E" : "#C1C1C1"} stroke={focused ? "#E23E3E" : "#C1C1C1"} fill={focused ? "#F9D8D8" : "white"}/>;

function AppScreens(): ReactElement {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
      }}
      initialRouteName={Routes.Settings}
    >
      <Tab.Screen
        options={{
          header: SearchHeader,
          tabBarIcon: HomeTabBarIcon,
        }}
        name={Routes.Home}
        component={HomePage}
      />
      <Tab.Screen
        options={{
          header: SavedRecipesHeader,
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
          header: PageWithMenuHeader,
          tabBarIcon: AddRecipeTabBarIcon,
        }}
        name={Routes.AddRecipe}
        component={AddRecipePage}
      />
      <Tab.Screen
        options={{
          header: NotificationHeader,
          tabBarIcon: NotificationTabBarIcon,
        }}
        name={Routes.Notification}
        component={NotificationPage}
      />
      <Tab.Screen
        options={{
          header: ProfileHeader,
          tabBarIcon: ProfileTabBarIcon,
        }}
        name={Routes.Profile}
        component={ProfilePage}
      />
    </Tab.Navigator>
  );
}
export default function Navigation(): ReactElement {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={Routes.App}
    >
      <Stack.Screen
        name={Routes.App}
        component={AppScreens}
      />
      <Stack.Screen
        options={{
          headerShown: true,
          header: PageWithMenuHeader,
        }}
        name={Routes.Recipe}
        component={RecipePage}
      />
      <Stack.Screen
        options={{
          headerShown: true,
          header: PageWithMenuHeader,
        }}
        name={Routes.Profile}
        component={ProfilePage}
      />
      <Stack.Screen
        options={{
          headerShown: true,
          header: PageHeader,
        }}
        name={Routes.Settings}
        component={SettingsPage}
      />
      <Stack.Screen
        options={{
          headerShown: true,
          header: PageHeader,
        }}
        name={Routes.AddRecipe}
        component={AddRecipePage} />
      <Stack.Screen
        options={{
          headerShown: true,
          header: PageHeader,
        }}
        name={Routes.EditRecipe}
        component={EditRecipePage} />
    </Stack.Navigator>
  );
}
