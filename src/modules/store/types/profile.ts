import {IUser} from "@src/modules/profile";

export interface IProfileStore {
  data: IUser|null;
  isError: boolean;
  token: string|null;
  isLoading: boolean;
}
