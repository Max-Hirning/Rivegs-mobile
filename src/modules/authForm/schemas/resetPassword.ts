import {object, string} from "yup";

export const resetPasswordSchema = object({
  password: string().required("Password is required").min(8).max(20),
});
