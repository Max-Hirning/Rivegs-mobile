import React, {ReactElement} from "react";
import {Neutral} from "@src/config/themes";
import {ContactUsForm} from "@src/modules/profile";
import {Header} from "@src/components/headers/header";
import {ScreenRouteProp} from "@src/types/navigation";
import {useNavigation} from "@react-navigation/native";
import ArrowLeftIcon from "@src/assets/icons/arrow/left";
import {PageScroll} from "@src/components/wrappers/pageScroll";
import {StyleSheet, TouchableOpacity, View} from "react-native";

export default function Page(): ReactElement {
  const {goBack} = useNavigation<ScreenRouteProp>();

  return (
    <View style={styles.container}>
      <Header
        rightIcon={
          <TouchableOpacity onPress={(): void => goBack()}>
            <ArrowLeftIcon
              width={30}
              height={30}
              color={Neutral.Neutral100}
            />
          </TouchableOpacity>
        }
        title="Contact us"
      />
      <PageScroll listStyle={styles.list}>
        <ContactUsForm/>
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
});
