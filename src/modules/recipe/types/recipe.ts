import {IUser} from "@src/modules/profile";
import {IRecipeType, IStepIngredient} from "@src/modules/recipeForm";

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
