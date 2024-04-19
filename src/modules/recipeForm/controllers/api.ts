import axios, {AxiosError} from "axios";
import {IResponse} from "@src/types/api";
import {IRecipeType} from "../types/recipeTypes";

class RecipeAPI {
  constructor(protected readonly url: string) {}

}
class RecipeTypesAPI {
  constructor(protected readonly url: string) {}

  async get(): Promise<IResponse<IRecipeType[]>> {
    try {
      const response = await axios.get(this.url);
      return response.data;
    } catch (error) {
      if(error instanceof Error) {throw (error as AxiosError).response?.data;}
      throw (error as AxiosError);
    }
  }
}

export const recipeAPI = new RecipeAPI(`${process.env.API_URL}/recipe`);
export const recipeTypesAPI = new RecipeTypesAPI(`${process.env.API_URL}/recipe-type`);
