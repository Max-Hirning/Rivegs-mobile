import {useFormik} from "formik";
import {TextUI} from "@src/UI/TextUI";
import {StyleSheet} from "react-native";
import {ButtonUI} from "@src/UI/ButtonUI";
import React, {ReactElement, useRef} from "react";
import {useConfirmCode} from "../hooks/confirmCode";
import {Neutral, Primary} from "@src/config/themes";
import {confirmCodeModel} from "../models/confirmCode";
import {Pressable, TextInput, View} from "react-native";
import {confirmCodeSchema} from "../schemas/confirmCode";

export function ConfirmCodeForm(): ReactElement {
  const formik = useFormik({
    initialValues: confirmCodeModel,
    validationSchema: confirmCodeSchema,
    onSubmit: (values, {resetForm}) => {
      mutate(values);
      resetForm();
    },
  });
  const {mutate} = useConfirmCode();
  const textInputRef = useRef<TextInput>(null);

  return (
    <View style={styles.form}>
      <TextInput
        maxLength={4}
        ref={textInputRef}
        style={styles.input}
        keyboardType="numeric"
        value={formik.values.code}
        onChangeText={(value: string): void => {
          formik.setFieldValue("code", value);
        }}
      />
      <View style={styles.inputBoxContainer}>
        {
          Array.from({length: 4}, (_, index) => index + 1).map((el): ReactElement => {
            return (
              <Pressable
                key={el}
                onPress={(): void => {
                  (textInputRef.current) && textInputRef.current.focus();
                }}
                style={[styles.inputBox, {
                  borderColor: (formik.values.code.length > el - 1) ? Primary.Primary50 : Neutral.Neutral20,
                }]}
              >
                <TextUI variant="h3">{formik.values.code[el - 1]}</TextUI>
              </Pressable>
            );
          })
        }
      </View>
      <ButtonUI
        size="large"
        title="Confirm"
        variant="primary"
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
    maxWidth: 360,
    alignItems: "center",
  },
  input: {
    width: 0,
    // height: 0,
    opacity: 0,
  },
  inputBoxContainer: {
    gap: 10,
    display: "flex",
    flexDirection: "row",
  },
  inputBox: {
    width: 50,
    height: 80,
    borderWidth: 2,
    display: "flex",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    height: 60,
    width: "100%",
    marginTop: 20,
    borderRadius: 10,
  },
});
