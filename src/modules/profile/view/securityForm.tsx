import {useFormik} from "formik";
import {InputUI} from "@src/UI/InputUI";
import React, {ReactElement} from "react";
import {ButtonUI} from "@src/UI/ButtonUI";
import {StyleSheet, View} from "react-native";
import {securityFormModel} from "../models/securityForm";
import {useUpdateSecurity} from "../hooks/updateSecurity";
import {securityFormSchema} from "../schemas/securityForm";

export function SecurityForm(): ReactElement {
  const formik = useFormik({
    initialValues: securityFormModel,
    validationSchema: securityFormSchema,
    onSubmit: (values, {resetForm}) => {
      mutate(values);
      resetForm();
    },
  });
  const {mutate} = useUpdateSecurity();

  return (
    <View style={styles.form}>
      <InputUI
        label="Old password"
        secureTextEntry={true}
        placeholder="Old password"
        onBlurAction={(): void => {
          formik.setFieldTouched("oldPassword", true);
        }}
        value={formik.values.oldPassword}
        errorMsg={formik.errors.oldPassword}
        onChangeText={(value: string): void => {
          formik.setFieldValue("oldPassword", value);
        }}
        error={!!(formik.touched.oldPassword && formik.errors.oldPassword)}
      />
      <InputUI
        label="New password"
        secureTextEntry={true}
        placeholder="New password"
        onBlurAction={(): void => {
          formik.setFieldTouched("newPassword", true);
        }}
        containerStyle={styles.input}
        value={formik.values.newPassword}
        errorMsg={formik.errors.newPassword}
        onChangeText={(value: string): void => {
          formik.setFieldValue("newPassword", value);
        }}
        error={!!(formik.touched.newPassword && formik.errors.newPassword)}
      />
      <InputUI
        secureTextEntry={true}
        label="Confirm password"
        onBlurAction={(): void => {
          formik.setFieldTouched("confirmPassword", true);
        }}
        containerStyle={styles.input}
        placeholder="Confirm new password"
        value={formik.values.confirmPassword}
        errorMsg={formik.errors.confirmPassword}
        onChangeText={(value: string): void => {
          formik.setFieldValue("confirmPassword", value);
        }}
        error={!!(formik.touched.confirmPassword && formik.errors.confirmPassword)}
      />
      <ButtonUI
        size="large"
        variant="primary"
        style={styles.button}
        onPress={(): void => {
          formik.submitForm();
        }}
        title="Update Security"
        disabled={!formik.isValid || !(Object.values(formik.values) as string[]).some((value: string) => value.length)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    width: "100%",
    maxWidth: 335,
  },
  input: {
    marginTop: 20,
  },
  button: {
    marginTop: 40,
  },
});
