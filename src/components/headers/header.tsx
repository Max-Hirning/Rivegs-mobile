import {TextUI} from "@src/UI/TextUI";
import React, {ReactElement} from "react";
import {StyleSheet, View} from "react-native";

interface IProps {
  title?: string;
  leftIcon?: ReactElement;
  rightIcon?: ReactElement;
}

export function Header({leftIcon, rightIcon, title}: IProps): ReactElement {
  return (
    <View style={styles.container}>
      {(leftIcon) && leftIcon}
      {
        (title) &&
        <TextUI
          variant="h4"
          isBold={true}
        >{title}</TextUI>
      }
      {(rightIcon) && rightIcon}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    paddingVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
    paddingHorizontal: 25,
    backgroundColor: "white",
    justifyContent: "space-between",
  },
});
