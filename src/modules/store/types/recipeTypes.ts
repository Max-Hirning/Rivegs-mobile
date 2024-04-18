import {IRecipeType} from "../../recipeForm";

export interface IRecipeTypesStore {
  isError: boolean;
  isLoading: boolean;
  data: IRecipeType[];
}
