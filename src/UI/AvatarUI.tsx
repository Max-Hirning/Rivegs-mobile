import {Neutral} from "../config/themes";
import React, {ReactElement} from "react";
import {TextUI, TextVariant} from "./TextUI";
import {StyleSheet, View, ViewStyle} from "react-native";

interface IProps {
  login: string;
  size: "large"|"small"|"medium";
}

export function AvatarUI({login, size}: IProps): ReactElement {
  const sizeStyles = (): ViewStyle => {
    if(size === "large") {
      return ({
        width: 100,
        height: 100,
      });
    }
    if(size === "small") {
      return ({
        width: 41,
        height: 41,
      });
    }
    return ({
      width: 81,
      height: 81,
    });
  };

  const labelSizeStyles = (): TextVariant => {
    if(size === "large") {
      return "h2";
    }
    if(size === "small") {
      return "h5";
    }
    return "h3";
  };

  return (
    <View style={[styles.avatar, sizeStyles()]}>
      <TextUI
        style={styles.label}
        variant={labelSizeStyles()}
      >{login[0].toUpperCase()}</TextUI>
    </View>
  );
}

const styles = StyleSheet.create({
  avatar: {
    display: "flex",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Neutral.Neutral30,
  },
  label: {
    color: Neutral.Neutral0,
  },
});
