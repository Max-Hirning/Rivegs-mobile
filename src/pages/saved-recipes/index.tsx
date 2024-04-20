import {useSelector} from "react-redux";
import React, {ReactElement} from "react";
import {Neutral} from "@src/config/themes";
import {RootState} from "@src/modules/store";
import {StyleSheet, View} from "react-native";
import {Header} from "@src/components/headers/header";
import {RecipesList, useGetRecipes} from "@src/modules/recipesList";

export default function Page(): ReactElement {
  const profile = useSelector((state: RootState) => state.profile);
  const {data, isError, isLoading, refetch} = useGetRecipes({recipesIds: profile.data?.savedRecipes || []});

  if(!profile.data) {return <></>;}

  return (
    <View style={styles.container}>
      <Header title="Saved recipes"/>
      <RecipesList
        refetch={refetch}
        isError={isError}
        isLoading={isLoading}
        nextPage={data?.data.next}
        data={data?.data.data || []}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Neutral.Neutral0,
  },
});
