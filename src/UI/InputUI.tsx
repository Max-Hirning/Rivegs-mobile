import {TextUI} from "./TextUI";
import React, {ReactElement, useState} from "react";
import {Error, Neutral, Primary} from "../config/themes";
import {StyleSheet, TextInput, TextInputProps, View} from "react-native";

interface IProps extends TextInputProps {
  label?: string;
  errorMsg?: string;
}

export function InputUI({label, errorMsg, ...props}: IProps): ReactElement {
  const [status, setStatus] = useState<"default"|"focus">("default");

  return (
    <View>
      {
        label &&
        <TextUI
          variant="label"
          style={styles.label}
        >{label}</TextUI>
      }
      <TextInput
        {...props}
        style={[styles[status], styles.input]}
        placeholderTextColor={Neutral.Neutral30}
        onFocus={(): void => setStatus("focus")}
        onBlur={(): void => setStatus("default")}
      />
      {
        errorMsg &&
        <TextUI
          variant="small"
          style={styles.error}
        >{errorMsg}</TextUI>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    color: Neutral.Neutral100,
  },
  error: {
    color: Error.Error100,
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 16,
    color: Neutral.Neutral90,
  },
  default: {
    borderColor: Neutral.Neutral20,
  },
  focus: {
    borderColor: Primary.Primary50,
  },
  disabled: {
    borderColor: Neutral.Neutral30,
    backgroundColor: Neutral.Neutral10,
  },
});
