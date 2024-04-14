import {TextUI} from "../../UI/TextUI";
import React, {ReactElement} from "react";
import {ButtonUI} from "../../UI/ButtonUI";
import {StyleSheet, View} from "react-native";
import {BottomTabHeaderProps} from "@react-navigation/bottom-tabs";

export function ProfileHeader({navigation}: BottomTabHeaderProps): ReactElement {
  return (
    <View style={styles.container}>
      <TextUI
        variant="h4"
        isBold={true}
      >My profile</TextUI>
      <ButtonUI
        size="small"
        title="Log out"
        variant="secondary"
        style={styles.button}
        onPress={(): void => console.log("logout")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    paddingVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 25,
    backgroundColor: "white",
    justifyContent: "space-between",
  },
  button: {
    height: 36,
    width: 107,
  },
});
