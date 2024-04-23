import React, {ReactElement} from "react";
import {Neutral} from "@src/config/themes";
import {Header} from "@src/components/headers/header";
import {ScreenRouteProp} from "@src/types/navigation";
import {useNavigation} from "@react-navigation/native";
import ArrowLeftIcon from "@src/assets/icons/arrow/left";
import {TabsNavigation} from "@src/components/tabsNavigation";
import {PageScroll} from "@src/components/wrappers/pageScroll";
import {StyleSheet, TouchableOpacity, View} from "react-native";
import {SecurityForm, SettingsForm} from "@src/modules/profile";

export default function Page(): ReactElement {
  const {goBack} = useNavigation<ScreenRouteProp>();

  return (
    <View style={styles.container}>
      <Header
        leftIcon={
          <TouchableOpacity onPress={(): void => goBack()}>
            <ArrowLeftIcon
              width={30}
              height={30}
              color={Neutral.Neutral100}
            />
          </TouchableOpacity>
        }
      />
      <PageScroll listStyle={styles.list}>
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
    alignItems: "center",
    backgroundColor: Neutral.Neutral0,
  },
  list: {
    paddingTop: 10,
    paddingBottom: 25,
    paddingHorizontal: 25,
  },
  tabs: {
    marginTop: 10,
  },
});
