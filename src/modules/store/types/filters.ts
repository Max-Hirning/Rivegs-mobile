export interface IFiltersStore {
  page: number;
  title: string;
  typeId: string;
  authorLogin: string;
  recipesIds: string[];
  rate: [number, number];
}
