import {useSelector} from "react-redux";
import React, {ReactElement} from "react";
import {Neutral} from "@src/config/themes";
import {RootState} from "@src/modules/store";
import {StyleSheet, View} from "react-native";
import {RecipesList} from "@src/modules/recipesList";
import {Header} from "@src/components/headers/header";

export default function Page(): ReactElement {
  const profile = useSelector((state: RootState) => state.profile);

  if(!profile.data) {return <></>;}

  return (
    <View style={styles.container}>
      <Header title="Saved recipes"/>
      <RecipesList filters={{
        recipesIds: profile.data.savedRecipes,
      }}/>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Neutral.Neutral0,
  },
});
