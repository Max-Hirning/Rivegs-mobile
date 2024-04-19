import {IUser} from "../types/user";
import axios, {AxiosError} from "axios";
import {IResponse} from "@src/types/api";
import {ISecurityForm} from "../types/securityForm";

class UserAPI {
  constructor(protected readonly url: string) {}

  async get(userId: string): Promise<IResponse<IUser>> {
    try {
      const response = await axios.get(`${this.url}/${userId}`);
      return response.data;
    } catch (error) {
      if(error instanceof Error) {throw (error as AxiosError).response?.data;}
      throw (error as AxiosError);
    }
  }

  async delete(userId: string, token: string): Promise<IResponse<undefined>> {
    try {
      const response = await axios.delete(`${this.url}/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-type": "multipart/form-data",
        },
      });
      return response.data;
    } catch (error) {
      if(error instanceof Error) {throw (error as AxiosError).response?.data;}
      throw (error as AxiosError);
    }
  }

  async updateProfile(userId: string, data: FormData, token: string): Promise<IResponse<undefined>> {
    try {
      const response = await axios.put(`${this.url}/profile/${userId}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-type": "multipart/form-data",
        },
      });
      return response.data;
    } catch (error) {
      if(error instanceof Error) {throw (error as AxiosError).response?.data;}
      throw (error as AxiosError);
    }
  }

  async updateSecurity(userId: string, data: ISecurityForm, token: string): Promise<IResponse<undefined>> {
    try {
      const response = await axios.put(`${this.url}/security/${userId}`, {
        password: data.newPassword,
        oldPassword: data.oldPassword,
      }, {
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

export const userAPI = new UserAPI(`${process.env.API_URL}/user`);
