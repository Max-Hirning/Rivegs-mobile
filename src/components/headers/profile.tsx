import {TextUI} from "../../UI/TextUI";
import React, {ReactElement} from "react";
import {Neutral} from "../../config/themes";
import MoreIcon from "../../assets/icons/more";
import {StyleSheet, TouchableOpacity, View} from "react-native";

export function ProfileHeader(): ReactElement {
  return (
    <View style={styles.container}>
      <TextUI
        variant="h4"
        isBold={true}
      >My profile</TextUI>
      <TouchableOpacity>
        <MoreIcon width={24} height={24} color={Neutral.Neutral100}/>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    paddingVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 22,
    backgroundColor: "white",
    justifyContent: "space-between",
  },
});
