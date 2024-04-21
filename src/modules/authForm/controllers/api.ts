import {ISignUp} from "../types/signUp";
import axios, {AxiosError} from "axios";
import {IResponse} from "@src/types/api";
import {IConfirmCode} from "../types/confirmCode";
import {IResetPassword} from "../types/resetPassword";
import {IForgotPassword} from "../types/forgotPassword";
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

  async forgotPassword(data: IForgotPassword): Promise<IResponse<undefined>> {
    try {
      const response = await axios.post(`${this.url}/email-request`, data);
      return response.data;
    } catch (error) {
      if(error instanceof Error) {throw (error as AxiosError).response?.data;}
      throw (error as AxiosError);
    }
  }

  async confirmCode(data: Pick<ISignIn, "email"> & IConfirmCode): Promise<IResponse<undefined>> {
    try {
      const response = await axios.post(`${this.url}/confirm-email`, data);
      return response.data;
    } catch (error) {
      if(error instanceof Error) {throw (error as AxiosError).response?.data;}
      throw (error as AxiosError);
    }
  }

  async resetPassword(data: IResetPassword & Pick<ISignIn, "email"> & IConfirmCode): Promise<IResponse<undefined>> {
    try {
      const response = await axios.post(`${this.url}/reset-password`, data);
      return response.data;
    } catch (error) {
      if(error instanceof Error) {throw (error as AxiosError).response?.data;}
      throw (error as AxiosError);
    }
  }
}

export const authAPI = new AuthAPI(`${process.env.API_URL}/auth`);
