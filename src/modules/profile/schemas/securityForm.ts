import {object, string} from "yup";

export const securityFormSchema = object().shape({
  confirmPassword: string().required("Confirm your new password").max(20, "Max length is 20 chars").min(8, "Min length is 8 chars").test("passwords-match", "Passwords must match", function (value) {
    return this.parent.newPassword === value;
  }),
  newPassword: string().required("New password is required").max(20, "Max length is 20 chars").min(8, "Min length is 8 chars").test("passwords-match", "New password must not match with old one", function (value) {
    return this.parent.oldPassword !== value;
  }),
  oldPassword: string().required("Current password is required").max(20, "Max length is 20 chars").min(8, "Min length is 8 chars").test("passwords-match", "Old password must not match with new one", function (value) {
    return this.parent.newPassword !== value;
  }),
});
