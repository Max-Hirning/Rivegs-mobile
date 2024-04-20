import axios, {AxiosError} from "axios";
import {IResponse} from "@src/types/api";
import {IPagination} from "../types/pagination";
import {IFiltersStore} from "@src/modules/store";

class RecipeAPI {
  constructor(protected readonly url: string) {}

  async get({page, recipesIds, typeId, rate, title, authorLogin}: Partial<IFiltersStore>): Promise<IResponse<IPagination>> {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const params: any = {};
      if(page) {params.page = page;}
      if(title) {params.title = title;}
      if(typeId) {params.typeId = typeId;}
      if(rate) {params.rate = JSON.stringify(rate);}
      if(authorLogin) {params.authorLogin = authorLogin;}
      if(recipesIds && recipesIds.length > 0) {params.recipesIds = JSON.stringify(recipesIds);}
      if(Object.keys(params).length === 0) {throw "No recipes";}
      const response = await axios.get(this.url, {params});
      return response.data;
    } catch (error) {
      if(error instanceof Error) {throw (error as AxiosError).response?.data;}
      throw (error as AxiosError);
    }
  }
}

export const recipeAPI = new RecipeAPI(`${process.env.API_URL}/recipe`);
