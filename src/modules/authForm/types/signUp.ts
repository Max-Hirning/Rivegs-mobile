import {ISignIn} from "./signIn";

export interface ISignUp extends ISignIn {
  login: string;
  confirmPassword: string;
}
