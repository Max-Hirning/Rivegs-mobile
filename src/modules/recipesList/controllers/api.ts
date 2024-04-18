import axios, {AxiosError} from "axios";
import {IFilters} from "../types/filters";
import {IResponse} from "../../../types/api";
import {IPagination} from "../types/pagination";

class RecipeAPI {
  constructor(protected readonly url: string) {}

  async get({page, recipesIds, typeId, rate, title, authorLogin}: Partial<IFilters>): Promise<IResponse<IPagination>> {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const params: any = {};
      if(page) {params.page = page;}
      if(title) {params.title = title;}
      if(typeId) {params.typeId = typeId;}
      if(rate) {params.rate = JSON.stringify(rate);}
      if(authorLogin) {params.authorLogin = authorLogin;}
      if(recipesIds) {params.recipesIds = JSON.stringify(recipesIds);}
      const response = await axios.get(this.url, {params});
      return response.data;
    } catch (error) {
      if(error instanceof Error) {throw (error as AxiosError).response?.data;}
      throw (error as AxiosError);
    }
  }
}

export const recipeAPI = new RecipeAPI(`${process.env.API_URL}/recipe`);
