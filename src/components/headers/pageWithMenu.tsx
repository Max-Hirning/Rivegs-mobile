import React, {ReactElement} from "react";
import {Neutral} from "../../config/themes";
import MoreIcon from "../../assets/icons/more";
import {useNavigation} from "@react-navigation/native";
import ArrowLeftIcon from "../../assets/icons/arrows/left";
import {StyleSheet, TouchableOpacity, View} from "react-native";

export function PageWithMenuHeader(): ReactElement {
  const {goBack} = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={(): void => goBack()}>
        <ArrowLeftIcon width={24} height={24} color={Neutral.Neutral100}/>
      </TouchableOpacity>
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
