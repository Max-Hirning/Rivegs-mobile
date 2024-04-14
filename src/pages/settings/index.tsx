import React, {ReactElement} from "react";
import {Neutral} from "../../config/themes";
import {StyleSheet, Text, View} from "react-native";
import {TabsNavigation} from "../../components/tabsNavigation";
import {PageScroll} from "../../components/wrappers/pageScroll";

export default function Page(): ReactElement {
  return (
    <PageScroll>
      <TabsNavigation
        tabs={[
          {
            label: "Settings",
            content: (
              <View>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((el) => (
                  <View key={el} style={styles.el}>
                    <Text>{el}</Text>
                  </View>
                ))}
              </View>
            ),
          },
          {
            label: "Security",
            content: (
              <View>
                {[1, 2, 3, 4].map((el) => (
                  <View key={el} style={styles.el}>
                    <Text>{el}</Text>
                  </View>
                ))}
              </View>
            ),
          },
        ]}
      />
    </PageScroll>
  );
}

const styles = StyleSheet.create({
  el: {
    width: 335,
    height: 76,
    borderRadius: 10,
    marginVertical: 5,
    backgroundColor: Neutral.Neutral30,
  },
});
