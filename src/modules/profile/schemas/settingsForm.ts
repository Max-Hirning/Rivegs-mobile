import {object, string} from "yup";

export const settingsFormSchema = object({
  login: string().notRequired().max(30),
  description: string().notRequired().max(500),
  email: string().email("Email must be valid").notRequired(),
});
