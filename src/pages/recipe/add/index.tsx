import React, {ReactElement} from "react";
import {StyleSheet, View} from "react-native";
import {Neutral} from "../../../config/themes";
import {PageHeader} from "../../../components/headers/page";
import {PageScroll} from "../../../components/wrappers/pageScroll";
import {RecipeForm, recipeFormInitialValue} from "../../../modules/recipeForm";

export default function Page(): ReactElement {
  return (
    <View style={styles.container}>
      <PageHeader/>
      <PageScroll listStyle={styles.list}>
        <RecipeForm initialState={recipeFormInitialValue}/>
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
