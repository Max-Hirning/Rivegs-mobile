import {TextUI} from "./TextUI";
import React, {ReactElement, useState} from "react";
import {Error, Neutral, Primary} from "@src/config/themes";
import {StyleSheet, TextInput, TextInputProps, View, ViewStyle} from "react-native";

interface IProps extends TextInputProps {
  label?: string;
  error?: boolean;
  errorMsg?: string;
  onBlurAction?: () => void;
  containerStyle?: ViewStyle;
}

export function InputUI({label, containerStyle, onBlurAction, error, errorMsg, ...props}: IProps): ReactElement {
  const [status, setStatus] = useState<"default"|"focus">("default");

  return (
    <View style={containerStyle}>
      {
        label &&
        <TextUI
          variant="label"
          style={styles.label}
        >{label}</TextUI>
      }
      <TextInput
        {...props}
        onBlur={(): void => {
          (onBlurAction) && onBlurAction();
          setStatus("default");
        }}
        style={[styles[status], styles.input]}
        placeholderTextColor={Neutral.Neutral30}
        onFocus={(): void => setStatus("focus")}
      />
      {
        error &&
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
    marginBottom: 10,
    color: Neutral.Neutral100,
  },
  error: {
    marginTop: 2.5,
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
