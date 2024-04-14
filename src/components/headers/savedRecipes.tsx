import {TextUI} from "../../UI/TextUI";
import React, {ReactElement} from "react";
import {StyleSheet, View} from "react-native";

export function SavedRecipesHeader(): ReactElement {
  return (
    <View style={styles.container}>
      <TextUI
        variant="h4"
        isBold={true}
      >Saved recipes</TextUI>
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
});
