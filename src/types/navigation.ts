import {Routes} from "../config/routes";
import type {NavigationProp} from "@react-navigation/native";

type AppParamList = {
  [Routes.Home]: undefined;
  [Routes.Profile]: undefined;
  [Routes.AddRecipe]: undefined;
  [Routes.Notification]: undefined;
  [Routes.SavedRecipes]: undefined;
};

export type NavigationParamList = {
  [Routes.Recipe]: {
    recipeId: string;
  };
  [Routes.Profile]: {
    userId: string;
  };
  [Routes.EditRecipe]: {
    recipeId: string;
  };
	[Routes.App]: undefined;
  [Routes.Settings]: undefined;
  [Routes.Security]: undefined;
};
export type AppRouteProp = NavigationProp<AppParamList, Routes.Home>;
export type ScreenRouteProp = NavigationProp<NavigationParamList, Routes.App>;