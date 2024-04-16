import React, {ReactElement} from "react";
import {SafeAreaView, ScrollView, StyleSheet, ViewStyle} from "react-native";

interface IProps {
  style?: ViewStyle;
  children: ReactElement;
}

export function PageScroll({children, style}: IProps): ReactElement {
  return (
    <SafeAreaView style={[styles.container, style]}>
      <ScrollView contentContainerStyle={styles.list}>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  list: {
    alignItems: "center",
  },
});
