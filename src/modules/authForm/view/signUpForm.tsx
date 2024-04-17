import {useFormik} from "formik";
import {StyleSheet} from "react-native";
import React, {ReactElement} from "react";
import {TextUI} from "../../../UI/TextUI";
import {InputUI} from "../../../UI/InputUI";
import {ButtonUI} from "../../../UI/ButtonUI";
import {Neutral, Primary} from "../../../config/themes";
import {signUpSchema} from "../schemas/signUp";
import {signUpInitialValue} from "../models/signUp";
import {TouchableOpacity, View} from "react-native";
import ArrowRightIcon from "../../../assets/icons/arrows/right";

export function SignUpForm(): ReactElement {
  const formik = useFormik({
    validationSchema: signUpSchema,
    initialValues: signUpInitialValue,
    onSubmit: (values, {resetForm}) => {
      console.log(values);
      resetForm();
    },
  });

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
