import {useFormik} from "formik";
import {InputUI} from "@src/UI/InputUI";
import React, {ReactElement} from "react";
import {ButtonUI} from "@src/UI/ButtonUI";
import {StyleSheet, View} from "react-native";
import {useContactUs} from "../hooks/contactUs";
import {contactUsFromModel} from "../models/contactUsForm";
import {contactUsFormSchema} from "../schemas/contactUsForm";

export function ContactUsForm(): ReactElement {
  const formik = useFormik({
    initialValues: contactUsFromModel,
    validationSchema: contactUsFormSchema,
    onSubmit: (values, {resetForm}) => {
      mutate(values);
      resetForm();
    },
  });
  const {mutate} = useContactUs();

  return (
    <View style={styles.form}>
      <InputUI
        label="Title"
        placeholder="Title"
        onBlurAction={(): void => {
          formik.setFieldTouched("title", true);
        }}
        value={formik.values.title}
        errorMsg={formik.errors.title}
        onChangeText={(value: string): void => {
          formik.setFieldValue("title", value);
        }}
        error={!!(formik.touched.title && formik.errors.title)}
      />
      <InputUI
        multiline={true}
        label="Description"
        placeholder="Description"
        onBlurAction={(): void => {
          formik.setFieldTouched("text", true);
        }}
        value={formik.values.text}
        containerStyle={styles.input}
        errorMsg={formik.errors.text}
        onChangeText={(value: string): void => {
          formik.setFieldValue("text", value);
        }}
        error={!!(formik.touched.text && formik.errors.text)}
      />
      <ButtonUI
        size="large"
        variant="primary"
        title="Contact us"
        style={styles.button}
        onPress={(): void => {
          formik.submitForm();
        }}
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
