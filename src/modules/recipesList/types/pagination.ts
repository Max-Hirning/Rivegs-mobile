import {IRecipe} from "@src/modules/recipe";

export interface IPagination {
  data: IRecipe[];
  page: number|null;
  next: number|null;
  previous: number|null;
  totalPages: number|null;
}
