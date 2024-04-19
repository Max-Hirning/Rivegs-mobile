import axios, {AxiosError} from "axios";
import {IRecipe} from "../types/recipe";
import {IResponse} from "@src/types/api";

class RecipeAPI {
  constructor(protected readonly url: string) {}

  async get(recipeId: string): Promise<IResponse<IRecipe>> {
    try {
      const response = await axios.get(`${this.url}/${recipeId}`);
      return response.data;
    } catch (error) {
      if(error instanceof Error) {throw (error as AxiosError).response?.data;}
      throw (error as AxiosError);
    }
  }

  async delete(recipeId: string, token: string): Promise<IResponse<undefined>> {
    try {
      const response = await axios.delete(`${this.url}/${recipeId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      if(error instanceof Error) {throw (error as AxiosError).response?.data;}
      throw (error as AxiosError);
    }
  }

  async updateRecipeRate(recipeId: string, rate: number, token: string): Promise<IResponse<undefined>> {
    try {
      const response = await axios.patch(`${this.url}/rate/${recipeId}`, {rate}, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      if(error instanceof Error) {throw (error as AxiosError).response?.data;}
      throw (error as AxiosError);
    }
  }
}

export const recipeAPI = new RecipeAPI(`${process.env.API_URL}/recipe`);
