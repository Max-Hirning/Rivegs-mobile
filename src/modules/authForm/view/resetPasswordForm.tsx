import {useFormik} from "formik";
import {View} from "react-native";
import {StyleSheet} from "react-native";
import {InputUI} from "@src/UI/InputUI";
import React, {ReactElement} from "react";
import {ButtonUI} from "@src/UI/ButtonUI";
import {Neutral} from "@src/config/themes";
import {useResetPassword} from "../hooks/resetPassword";
import ArrowRightIcon from "@src/assets/icons/arrow/right";
import {resetPasswordModel} from "../models/resetPassword";
import {resetPasswordSchema} from "../schemas/resetPassword";

export function ResetPasswordForm(): ReactElement {
  const formik = useFormik({
    initialValues: resetPasswordModel,
    validationSchema: resetPasswordSchema,
    onSubmit: (values, {resetForm}) => {
      mutate(values);
      resetForm();
    },
  });
  const {mutate} = useResetPassword();

  return (
    <View style={styles.form}>
      <InputUI
        label="Enter Password"
        secureTextEntry={true}
        onBlurAction={(): void => {
          formik.setFieldTouched("password", true);
        }}
        placeholder="Enter Password"
        containerStyle={styles.input}
        value={formik.values.password}
        errorMsg={formik.errors.password}
        onChangeText={(value: string): void => {
          formik.setFieldValue("password", value);
        }}
        error={!!(formik.touched.password && formik.errors.password)}
      />
      <ButtonUI
        size="large"
        variant="primary"
        style={styles.button}
        onPress={(): void => {
          formik.submitForm();
        }}
        title="Reset password"
        disabled={!formik.isValid || !(Object.values(formik.values) as string[]).some((value: string) => value.length)}
        rightIcon={<ArrowRightIcon width={30} height={30} color={(!formik.isValid || !(Object.values(formik.values) as string[]).some((value: string) => value.length)) ? Neutral.Neutral50 : Neutral.Neutral0}/>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    width: "100%",
    maxWidth: 360,
  },
  input: {
    marginTop: 10,
  },
  link: {
    marginTop: 10,
    alignSelf: "flex-start",
  },
  button: {
    height: 60,
    width: "100%",
    marginTop: 20,
    borderRadius: 10,
  },
  buttonIcon: {
    marginLeft: 15,
  },
});
