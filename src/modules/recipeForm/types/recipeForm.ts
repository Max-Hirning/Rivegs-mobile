import {IRecipe} from "../../recipe";

export interface IStepIngredient {
  _id: string;
  value: string;
  bold: boolean;
  italic: boolean;
  underlined: boolean;
}

export interface IRecipeForm extends Pick<IRecipe, "ingredients"|"steps"|"title"|"description"> {
  typeId: string;
}
