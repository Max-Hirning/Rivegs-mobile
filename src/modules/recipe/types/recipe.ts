import {IUser} from "../../profile";
import {IRecipeType} from "../../recipeForm/types/recipeTypes";
import {IStepIngredient} from "../../recipeForm/types/recipeForm";

export interface IRecipe {
  _id: string;
  rate: number;
  title: string;
  author: IUser;
  image: string;
  type: IRecipeType;
  description: string;
  steps: IStepIngredient[];
  ingredients: IStepIngredient[];
}
