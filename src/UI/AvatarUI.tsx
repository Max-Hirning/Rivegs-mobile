import {TextUI} from "./TextUI";
import {Neutral} from "../config/themes";
import React, {ReactElement} from "react";
import {StyleSheet, View} from "react-native";

interface IProps {
  login: string;
}

export function AvatarUI({login}: IProps): ReactElement {
  return (
    <View style={styles.avatar}>
      <TextUI
        variant="h2"
        style={styles.label}
      >{login[0].toUpperCase()}</TextUI>
    </View>
  );
}

const styles = StyleSheet.create({
  avatar: {
    width: 100,
    height: 100,
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
