import axios, {AxiosError} from "axios";
import {IResponse} from "../../../types/api";
import {IRecipeType} from "../types/recipeTypes";

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

export const recipeTypesAPI = new RecipeTypesAPI(`${process.env.API_URL}/recipe-type`);

