import React, {ReactElement} from "react";
import {Neutral} from "../../config/themes";
import {StyleSheet, View} from "react-native";
import {PageScroll} from "../../components/wrappers/pageScroll";
import {NotificationHeader} from "../../components/headers/notification";

export default function Page(): ReactElement {
  return (
    <View style={styles.container}>
      <NotificationHeader/>
      <PageScroll>
        <></>
      </PageScroll>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Neutral.Neutral0,
  },
});
