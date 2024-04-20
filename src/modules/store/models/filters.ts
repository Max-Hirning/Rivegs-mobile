import {IFiltersStore} from "../types/filters";

export const filtersStoreModel: Omit<IFiltersStore, "recipesIds"> = {
  page: 1,
  title: "",
  typeId: "",
  rate: [1, 5],
  authorLogin: "",
};
