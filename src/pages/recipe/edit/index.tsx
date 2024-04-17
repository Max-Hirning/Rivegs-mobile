import React, {ReactElement} from "react";
import {Routes} from "../../../config/routes";
import {Neutral} from "../../../config/themes";
import {Header} from "../../../components/headers/header";
import ArrowLeftIcon from "../../../assets/icons/arrows/left";
import {StyleSheet, TouchableOpacity, View} from "react-native";
import {PageScroll} from "../../../components/wrappers/pageScroll";
import {RouteProp, useNavigation, useRoute} from "@react-navigation/native";
import {NavigationParamList, ScreenRouteProp} from "../../../types/navigation";

export default function Page(): ReactElement {
  const {goBack} = useNavigation<ScreenRouteProp>();
  const {params} = useRoute<RouteProp<NavigationParamList, Routes.EditRecipe>>();
  console.log(params.recipeId);
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
        <></>
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
