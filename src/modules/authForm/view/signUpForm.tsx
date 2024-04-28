import {useFormik} from "formik";
import {TextUI} from "@src/UI/TextUI";
import {InputUI} from "@src/UI/InputUI";
import {useSignUp} from "../hooks/signUp";
import {ButtonUI} from "@src/UI/ButtonUI";
import {signUpModel} from "../models/signUp";
import {signUpSchema} from "../schemas/signUp";
import {Linking, StyleSheet} from "react-native";
import React, {ReactElement, useState} from "react";
import {TouchableOpacity, View} from "react-native";
import {Neutral, Primary} from "@src/config/themes";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import ArrowRightIcon from "@src/assets/icons/arrow/right";

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
  const [privacyPolicy, setPrivacyPolicy] = useState<boolean>(false);

  return (
    <View style={styles.form}>
      <InputUI
        label="Login"
        placeholder="Enter Login"
        value={formik.values.login}
        onBlurAction={(): void => {
          formik.setFieldTouched("login", true);
        }}
        errorMsg={formik.errors.login}
        onChangeText={(value: string): void => {
          formik.setFieldValue("login", value);
        }}
        error={!!(formik.touched.login && formik.errors.login)}
      />
      <InputUI
        label="Email"
        placeholder="Enter Email"
        value={formik.values.email}
        onBlurAction={(): void => {
          formik.setFieldTouched("email", true);
        }}
        containerStyle={styles.input}
        errorMsg={formik.errors.email}
        onChangeText={(value: string): void => {
          formik.setFieldValue("email", value);
        }}
        error={!!(formik.touched.email && formik.errors.email)}
      />
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
      <InputUI
        secureTextEntry={true}
        label="Confirm Password"
        onBlurAction={(): void => {
          formik.setFieldTouched("confirmPassword", true);
        }}
        containerStyle={styles.input}
        placeholder="Confirm Password"
        value={formik.values.confirmPassword}
        errorMsg={formik.errors.confirmPassword}
        onChangeText={(value: string): void => {
          formik.setFieldValue("confirmPassword", value);
        }}
        error={!!(formik.touched.confirmPassword && formik.errors.confirmPassword)}
      />
      <View style={styles.linkContainer}>
        <BouncyCheckbox
          size={25}
          unFillColor="#FFFFFF"
          isChecked={privacyPolicy}
          fillColor={Primary.Primary50}
          innerIconStyle={styles.checkbox}
          iconStyle={{borderColor: Primary.Primary50}}
          onPress={(): void => setPrivacyPolicy((state: boolean): boolean => !state)}
        />
        <TouchableOpacity onPress={(): void => {
          Linking.openURL("https://www.freeprivacypolicy.com/live/3698fd9c-29aa-4a5d-8052-03bf740ee93f");
        }}>
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
        disabled={!formik.isValid || !privacyPolicy || !(Object.values(formik.values) as string[]).some((value: string) => value.length)}
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
  linkContainer: {
    marginTop: 10,
    flexDirection: "row",
  },
  checkbox: {
    borderWidth: 2,
    borderRadius: 8,
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
