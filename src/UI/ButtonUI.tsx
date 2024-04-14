import {TextUI} from "./TextUI";
import {Neutral, Primary} from "../config/themes";
import React, {ReactElement, ReactNode} from "react";
import {StyleSheet, ButtonProps, TouchableOpacity} from "react-native";

interface IProps extends ButtonProps {
  title: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  size: "large"|"small";
  variant: "primary"|"secondary"|"text";
}

export function ButtonUI({title, size, onPress, leftIcon, variant, rightIcon, disabled, ...props}: IProps): ReactElement {
  return (
    <TouchableOpacity
      {...props}
      onPress={onPress}
      disabled={disabled}
      style={[stylesButton.button, (disabled ? stylesDisabledButton[variant] : stylesButton[variant]), stylesButton[size]]}
    >
      {leftIcon && leftIcon}
      <TextUI
        isBold={true}
        variant={(size === "large") ? "p" : "label"}
        style={[(disabled ? stylesButtonText.disabled : stylesButtonText[variant])]}
      >{title}</TextUI>
      {rightIcon && rightIcon}
    </TouchableOpacity>
  );
}

const stylesButton = StyleSheet.create({
  button: {
    borderWidth: 1,
    display: "flex",
    borderRadius: 10,
    paddingVertical: 8,
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 8,
    justifyContent: "center",
  },
  large: {
    minWidth: 161,
    minHeight: 54,
  },
  small: {
    minWidth: 117,
    minHeight: 36,
  },
  primary: {
    borderColor: Primary.Primary50,
    backgroundColor: Primary.Primary50,
  },
  secondary: {
    borderColor: Primary.Primary50,
    backgroundColor: "transparent",
  },
  text: {
    borderColor: "transparent",
    backgroundColor: "transparent",
  },
  disabled: {
    borderColor: Neutral.Neutral20,
    backgroundColor: Neutral.Neutral20,
  },
});
const stylesButtonText = StyleSheet.create({
  primary: {
    marginHorizontal: 8,
    color: Neutral.Neutral0,
  },
  secondary: {
    marginHorizontal: 8,
    color: Primary.Primary50,
  },
  text: {
    marginHorizontal: 8,
    color: Primary.Primary50,
  },
  disabled: {
    marginHorizontal: 8,
    color: Neutral.Neutral50,
  },
});
const stylesDisabledButton = StyleSheet.create({
  primary: {
    borderColor: Neutral.Neutral20,
    backgroundColor: Neutral.Neutral20,
  },
  secondary: {
    borderColor: Neutral.Neutral20,
    backgroundColor: "transparent",
  },
  text: {
    borderColor: "transparent",
    backgroundColor: "transparent",
  },
});
