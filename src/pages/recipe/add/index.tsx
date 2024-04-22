import React, {ReactElement} from "react";
import {Neutral} from "@src/config/themes";
import {RecipeForm} from "@src/modules/recipeForm";
import {ScreenRouteProp} from "@src/types/navigation";
import {Header} from "@src/components/headers/header";
import {useNavigation} from "@react-navigation/native";
import ArrowLeftIcon from "@src/assets/icons/arrow/left";
import {PageScroll} from "@src/components/wrappers/pageScroll";
import {StyleSheet, TouchableOpacity, View} from "react-native";

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
        <RecipeForm/>
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
