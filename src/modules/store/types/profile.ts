import {IUser} from "../../profile";

export interface IProfileStore {
  data: IUser|null;
  isError: boolean;
  token: string|null;
  isLoading: boolean;
}
