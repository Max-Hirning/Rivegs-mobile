import React, {ReactElement} from "react";
import {Neutral} from "../../config/themes";
import {StyleSheet, View} from "react-native";
import {PageHeader} from "../../components/headers/page";
import {TabsNavigation} from "../../components/tabsNavigation";
import {PageScroll} from "../../components/wrappers/pageScroll";
import {SecurityForm, SettingsForm} from "../../modules/profile";

export default function Page(): ReactElement {
  return (
    <View style={styles.container}>
      <PageHeader/>
      <PageScroll>
        <TabsNavigation
          tabs={[
            {
              label: "Settings",
              content: <SettingsForm/>,
            },
            {
              label: "Security",
              content: <SecurityForm/>,
            },
          ]}
          style={styles.tabs}
        />
      </PageScroll>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Neutral.Neutral0,
  },
  tabs: {
    marginTop: 10,
  },
});
