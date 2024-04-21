import {object, string} from "yup";

export const confirmCodeSchema = object({
  code: string().required("Code is required").length(4),
});
