import React, {ReactElement} from "react";
import {SafeAreaView, ScrollView, StyleSheet} from "react-native";

interface IProps {
  children: ReactElement;
}

export function PageScroll({children}: IProps): ReactElement {
  return (
    <SafeAreaView style={styles.container}>
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
