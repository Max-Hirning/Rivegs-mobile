import React, {ReactElement} from "react";
import {Routes} from "../../../config/routes";
import {StyleSheet, View} from "react-native";
import {Neutral} from "../../../config/themes";
import {PageHeader} from "../../../components/headers/page";
import {RouteProp, useRoute} from "@react-navigation/native";
import {NavigationParamList} from "../../../types/navigation";

export default function Page(): ReactElement {
  const {params} = useRoute<RouteProp<NavigationParamList, Routes.EditRecipe>>();
  console.log(params.recipeId);
  return (
    <View style={styles.container}>
      <PageHeader/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Neutral.Neutral0,
  },
});
