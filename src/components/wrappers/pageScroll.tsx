import React, {ReactElement} from "react";
import {SafeAreaView, ScrollView, StyleSheet, ViewStyle} from "react-native";

interface IProps {
  listStyle?: ViewStyle;
  children: ReactElement;
  containerStyle?: ViewStyle;
}

export function PageScroll({children, containerStyle, listStyle}: IProps): ReactElement {
  return (
    <SafeAreaView style={[styles.container, containerStyle]}>
      <ScrollView contentContainerStyle={[styles.list, listStyle]}>
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
