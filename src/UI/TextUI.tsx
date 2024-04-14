import {Neutral} from "../config/themes";
import React, {ReactElement} from "react";
import {StyleSheet, Text, TextProps, TextStyle} from "react-native";

interface IProps extends TextProps {
  isBold?: boolean;
  variant: TextVariant;
}
export type TextVariant = "heading"|"h1"|"h2"|"h3"|"h4"|"h5"|"p"|"label"|"small"|"tiny";

export function TextUI({children, style, isBold, variant, ...props}: IProps): ReactElement {
  const boldStyles = (): TextStyle => {
    if(isBold) {
      return ({
        fontWeight: "600",
      });
    }
    return {};
  };

  return (
    <Text
      {...props}
      style={[styles[variant], boldStyles(), styles.default, style]}
    >{children}</Text>
  );
}

const styles = StyleSheet.create({
  default: {
    color: Neutral.Neutral100,
  },
  heading: {
    fontSize: 56,
  },
  h1: {
    fontSize: 48,
  },
  h2: {
    fontSize: 40,
  },
  h3: {
    fontSize: 32,
  },
  h4: {
    fontSize: 24,
  },
  h5: {
    fontSize: 20,
  },
  p: {
    fontSize: 16,
  },
  label: {
    fontSize: 14,
  },
  small: {
    fontSize: 12,
  },
  tiny: {
    fontSize: 10,
  },
});
