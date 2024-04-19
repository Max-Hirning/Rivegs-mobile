import {useFormik} from "formik";
import {TextUI} from "@src/UI/TextUI";
import {StyleSheet} from "react-native";
import {InputUI} from "@src/UI/InputUI";
import React, {ReactElement} from "react";
import {useSignUp} from "../hooks/signUp";
import {ButtonUI} from "@src/UI/ButtonUI";
import {signUpModel} from "../models/signUp";
import {signUpSchema} from "../schemas/signUp";
import {TouchableOpacity, View} from "react-native";
import {Neutral, Primary} from "@src/config/themes";
import ArrowRightIcon from "@src/assets/icons/arrows/right";

export function SignUpForm(): ReactElement {
  const formik = useFormik({
    initialValues: signUpModel,
    validationSchema: signUpSchema,
    onSubmit: (values, {resetForm}) => {
      mutate(values);
      resetForm();
    },
  });
  const {mutate} = useSignUp();

  return (
    <View style={styles.form}>
      <InputUI
        label="Login"
        onBlur={(): void => {
          formik.setFieldTouched("login", true);
        }}
        placeholder="Enter Login"
        value={formik.values.login}
        errorMsg={formik.errors.login}
        onChangeText={(value: string): void => {
          formik.setFieldValue("login", value);
        }}
      />
      <InputUI
        label="Email"
        onBlur={(): void => {
          formik.setFieldTouched("email", true);
        }}
        placeholder="Enter Email"
        value={formik.values.email}
        containerStyle={styles.input}
        errorMsg={formik.errors.email}
        onChangeText={(value: string): void => {
          formik.setFieldValue("email", value);
        }}
      />
      <InputUI
        onBlur={(): void => {
          formik.setFieldTouched("password", true);
        }}
        label="Enter Password"
        secureTextEntry={true}
        placeholder="Enter Password"
        containerStyle={styles.input}
        value={formik.values.password}
        errorMsg={formik.errors.password}
        onChangeText={(value: string): void => {
          formik.setFieldValue("password", value);
        }}
      />
      <InputUI
        onBlur={(): void => {
          formik.setFieldTouched("confirmPassword", true);
        }}
        secureTextEntry={true}
        label="Confirm Password"
        containerStyle={styles.input}
        placeholder="Confirm Password"
        value={formik.values.confirmPassword}
        errorMsg={formik.errors.confirmPassword}
        onChangeText={(value: string): void => {
          formik.setFieldValue("confirmPassword", value);
        }}
      />
      <View style={styles.linkContainer}>
        <TouchableOpacity onPress={(): void => console.log("open web page")}>
          <TextUI
            variant="p"
            style={styles.link}
          >Accept terms & Condition</TextUI>
        </TouchableOpacity>
      </View>
      <ButtonUI
        size="large"
        title="Sign up"
        variant="primary"
        style={styles.button}
        onPress={(): void => {
          formik.submitForm();
        }}
        disabled={!formik.isValid || !(Object.values(formik.values) as string[]).some((value: string) => value.length)}
        rightIcon={<ArrowRightIcon width={24} height={24} color={(!formik.isValid || !(Object.values(formik.values) as string[]).some((value: string) => value.length)) ? Neutral.Neutral50 : Neutral.Neutral0}/>}
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
  linkContainer: {
    marginTop: 10,
  },
  link: {
    color: Primary.Primary50,
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
