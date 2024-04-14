import HomePage from "./pages/index";
import {Routes} from "./config/routes";
import React, {ReactElement} from "react";
import RecipePage from "./pages/recipe/index";
import ProfilePage from "./pages/profile/index";
import SettingsPage from "./pages/settings/index";
import AddRecipePage from "./pages/recipe/add/index";
import EditRecipePage from "./pages/recipe/edit/index";
import SecurityPage from "./pages/settings/security/index";
import NotificationPage from "./pages/notifications/index";
import SavedRecipesPage from "./pages/saved-recipes/index";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function AppScreens(): ReactElement {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#129575",
        tabBarInactiveTintColor: "#D9D9D9",
      }}
      initialRouteName={Routes.Settings}
    >
      <Tab.Screen
        name={Routes.Home}
        component={HomePage}
      />
      <Tab.Screen
        name={Routes.SavedRecipes}
        component={SavedRecipesPage}
      />
      <Tab.Screen
        name={Routes.Notification}
        component={NotificationPage}
      />
      <Tab.Screen
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
      <Stack.Screen name={Routes.App} component={AppScreens} />
      <Stack.Screen name={Routes.Recipe} component={RecipePage} />
      <Stack.Screen name={Routes.Profile} component={ProfilePage} />
      <Stack.Screen name={Routes.Security} component={SecurityPage} />
      <Stack.Screen name={Routes.Settings} component={SettingsPage} />
      <Stack.Screen name={Routes.AddRecipe} component={AddRecipePage} />
      <Stack.Screen name={Routes.EditRecipe} component={EditRecipePage} />
    </Stack.Navigator>
  );
}