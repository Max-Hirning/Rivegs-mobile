import React, {ReactElement} from "react";
import {Neutral} from "../../config/themes";
import {Header} from "../../components/headers/header";
import {useNavigation} from "@react-navigation/native";
import {ScreenRouteProp} from "../../types/navigation";
import ArrowLeftIcon from "../../assets/icons/arrows/left";
import {TabsNavigation} from "../../components/tabsNavigation";
import {StyleSheet, TouchableOpacity, View} from "react-native";
import {PageScroll} from "../../components/wrappers/pageScroll";
import {SecurityForm, SettingsForm} from "../../modules/profile";

export default function Page(): ReactElement {
  const {goBack} = useNavigation<ScreenRouteProp>();

  return (
    <View style={styles.container}>
      <Header
        leftIcon={
          <TouchableOpacity onPress={(): void => goBack()}>
            <ArrowLeftIcon width={24} height={24} color={Neutral.Neutral100}/>
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
