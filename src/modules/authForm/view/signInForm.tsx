import {useFormik} from "formik";
import {TextUI} from "@src/UI/TextUI";
import {StyleSheet} from "react-native";
import {InputUI} from "@src/UI/InputUI";
import React, {ReactElement} from "react";
import {useSignIn} from "../hooks/signIn";
import {ButtonUI} from "@src/UI/ButtonUI";
import {Neutral} from "@src/config/themes";
import {signInModel} from "../models/signIn";
import {signInSchema} from "../schemas/signIn";
import {TouchableOpacity, View} from "react-native";
import ArrowRightIcon from "@src/assets/icons/arrows/right";

export function SignInForm(): ReactElement {
  const formik = useFormik({
    initialValues: signInModel,
    validationSchema: signInSchema,
    onSubmit: (values, {resetForm}) => {
      mutate(values);
      resetForm();
    },
  });
  const {mutate} = useSignIn();

  return (
    <View style={styles.form}>
      <InputUI
        label="Email"
        onBlur={(): void => {
          formik.setFieldTouched("email", true);
        }}
        placeholder="Enter Email"
        value={formik.values.email}
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
      <TouchableOpacity
        style={styles.link}
        onPress={(): void => console.log("open web page")}
      >
        <TextUI variant="p">Forgot Password?</TextUI>
      </TouchableOpacity>
      <ButtonUI
        size="large"
        title="Sign in"
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
