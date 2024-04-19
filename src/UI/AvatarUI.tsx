import {Neutral} from "@src/config/themes";
import React, {ReactElement} from "react";
import {TextUI, TextVariant} from "./TextUI";
import {Image, ImageStyle, StyleSheet, View} from "react-native";

interface IProps {
  login: string;
  source?: string|null;
  size: "large"|"small"|"medium"|"big";
}

export function AvatarUI({login, size, source}: IProps): ReactElement {
  const sizeStyles = (): ImageStyle => {
    if(size === "large") {
      return ({
        width: 150,
        height: 150,
      });
    }
    if(size === "big") {
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
      return "h1";
    }
    if(size === "big") {
      return "h2";
    }
    if(size === "small") {
      return "h5";
    }
    return "h3";
  };

  if(source) {
    return (
      <Image
        source={{uri: source}}
        style={[styles.avatar, sizeStyles()]}
      />
    );
  }

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
    borderWidth: 1,
    display: "flex",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    borderColor: Neutral.Neutral30,
    backgroundColor: Neutral.Neutral30,
  },
  label: {
    color: Neutral.Neutral0,
  },
});
