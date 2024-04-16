import React, {ReactElement} from "react";
import {StyleSheet, View} from "react-native";
import {Neutral} from "../../../config/themes";
import {PageHeader} from "../../../components/headers/page";

export default function Page(): ReactElement {
  return (
    <View style={styles.container}>
      <PageHeader/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Neutral.Neutral0,
  },
});
