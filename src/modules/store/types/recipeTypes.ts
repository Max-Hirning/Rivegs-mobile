import {IRecipeType} from "@src/modules/recipeForm";

export interface IRecipeTypesStore {
  isError: boolean;
  isLoading: boolean;
  data: IRecipeType[];
}
