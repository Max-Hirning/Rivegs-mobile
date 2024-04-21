import {TextUI} from "@src/UI/TextUI";
import React, {ReactElement} from "react";
import {StyleSheet, View} from "react-native";
import {ConfirmCodeForm} from "@src/modules/authForm";
import {PageScroll} from "@src/components/wrappers/pageScroll";

export default function Page(): ReactElement {
  return (
    <PageScroll listStyle={styles.list}>
      <>
        <View style={styles.titleContainer}>
          <TextUI
            variant="h4"
            isBold={true}
          >Got email from us,</TextUI>
          <TextUI variant="p">Enter code from email</TextUI>
        </View>
        <ConfirmCodeForm/>
      </>
    </PageScroll>
  );
}

const styles = StyleSheet.create({
  list: {
    paddingTop: 50,
    paddingBottom: 25,
    paddingHorizontal: 25,
  },
  titleContainer: {
    width: "100%",
    maxWidth: 360,
    marginBottom: 40,
  },
});
