import {useFormik} from "formik";
import {View} from "react-native";
import {StyleSheet} from "react-native";
import {InputUI} from "@src/UI/InputUI";
import React, {ReactElement} from "react";
import {ButtonUI} from "@src/UI/ButtonUI";
import {Neutral} from "@src/config/themes";
import {useForgotPassword} from "../hooks/forgotPassword";
import ArrowRightIcon from "@src/assets/icons/arrow/right";
import {forgotPasswordModel} from "../models/forgotPassword";
import {forgotPasswordSchema} from "../schemas/forgotPassword";

export function ForgotPasswordForm(): ReactElement {
  const formik = useFormik({
    initialValues: forgotPasswordModel,
    validationSchema: forgotPasswordSchema,
    onSubmit: (values, {resetForm}) => {
      mutate(values);
      resetForm();
    },
  });
  const {mutate} = useForgotPassword();

  return (
    <View style={styles.form}>
      <InputUI
        label="Email"
        placeholder="Enter Email"
        value={formik.values.email}
        onBlurAction={(): void => {
          formik.setFieldTouched("email", true);
        }}
        errorMsg={formik.errors.email}
        onChangeText={(value: string): void => {
          formik.setFieldValue("email", value);
        }}
        error={!!(formik.touched.email && formik.errors.email)}
      />
      <ButtonUI
        size="large"
        variant="primary"
        title="Send email"
        style={styles.button}
        onPress={(): void => {
          formik.submitForm();
        }}
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
