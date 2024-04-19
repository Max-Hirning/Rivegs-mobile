import {ISignUp} from "../types/signUp";
import axios, {AxiosError} from "axios";
import {IResponse} from "@src/types/api";
import {ISignIn, ISignInResponse} from "../types/signIn";

class AuthAPI {
  constructor(protected readonly url: string) {}

  async signIn(data: ISignIn): Promise<IResponse<ISignInResponse>> {
    try {
      const response = await axios.post(`${this.url}/sign-in`, data);
      return response.data;
    } catch (error) {
      if(error instanceof Error) {throw (error as AxiosError).response?.data;}
      throw (error as AxiosError);
    }
  }

  async signUp(data: Omit<ISignUp, "confirmPassword">): Promise<IResponse<undefined>> {
    try {
      const response = await axios.post(`${this.url}/sign-up`, data);
      return response.data;
    } catch (error) {
      if(error instanceof Error) {throw (error as AxiosError).response?.data;}
      throw (error as AxiosError);
    }
  }
}

export const authAPI = new AuthAPI(`${process.env.API_URL}/auth`);
