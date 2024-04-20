import {Routes} from "@src/config/routes";
import {IRecipeForm} from "@src/modules/recipeForm";
import type {NavigationProp} from "@react-navigation/native";

type AppParamList = {
  [Routes.Home]: undefined;
  [Routes.Profile]: undefined;
  [Routes.AddRecipe]: undefined;
  [Routes.Notification]: undefined;
  [Routes.SavedRecipes]: undefined;
};

type AuthParamList = {
  [Routes.SignIn]: undefined;
  [Routes.SignUp]: undefined;
};

export type NavigationParamList = {
  [Routes.Recipe]: {
    recipeId: string;
  };
  [Routes.EditRecipe]: {
    recipeId: string;
    initialImageUrl: string;
    initialState: IRecipeForm;
  };
	[Routes.App]: undefined;
  [Routes.Auth]: undefined;
  [Routes.AuthorProfile]: {
    userId: string;
  };
  [Routes.Settings]: undefined;
  [Routes.Security]: undefined;
};
export type AppRouteProp = NavigationProp<AppParamList, Routes.Home>;
export type AuthRouteProp = NavigationProp<AuthParamList, Routes.SignIn>;
export type ScreenRouteProp = NavigationProp<NavigationParamList, Routes.App>;
