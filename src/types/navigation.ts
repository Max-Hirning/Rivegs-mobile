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

export type NavigationParamList = {
  [Routes.Recipe]: {
    recipeId: string;
  };
  [Routes.EditRecipe]: {
    recipeId: string;
    initialImageUrl: string;
    initialState: IRecipeForm;
  };
  [Routes.ConfirmCode]: {
    email: string;
    route: Routes.SignIn|Routes.ResetPassword;
  };
  [Routes.App]: undefined;
  [Routes.Home]: undefined;
  [Routes.ResetPassword]: {
    code: string;
    email: string;
  };
  [Routes.AuthorProfile]: {
    userId: string;
  };
  [Routes.SignIn]: undefined;
  [Routes.SignUp]: undefined;
  [Routes.Settings]: undefined;
  [Routes.Security]: undefined;
  [Routes.ContactUs]: undefined;
  [Routes.ForgotPassword]: undefined;
};
export type AppRouteProp = NavigationProp<AppParamList, Routes.Home>;
export type ScreenRouteProp = NavigationProp<NavigationParamList, Routes.App>;
