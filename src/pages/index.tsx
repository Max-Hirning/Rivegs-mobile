import React, {ReactElement} from "react";
import {Neutral} from "@src/config/themes";
import {StyleSheet, View} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {RecipesList} from "@src/modules/recipesList";
import {RecipeTypes} from "@src/components/recipeTypes";
import {AppDispatch, RootState} from "@src/modules/store";
import {SearchHeader} from "@src/components/headers/search";
import {changeTypeId} from "@src/modules/store/controllers/filters";

export default function Page(): ReactElement {
  const dispatch: AppDispatch = useDispatch();
  const filters = useSelector((state: RootState) => state.filters);
  const recipeTypes = useSelector((state: RootState) => state.recipeTypes);

  return (
    <View style={styles.container}>
      <SearchHeader/>
      <View style={styles.recipeTypesListContainer}>
        <RecipeTypes
          value={filters.typeId}
          data={recipeTypes.data || []}
          style={styles.recipeTypesList}
          onChange={(typeId: string): void => {
            dispatch(changeTypeId(typeId));
          }}
        />
      </View>
      <RecipesList filters={{
        ...filters,
      }}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Neutral.Neutral0,
  },
  recipeTypesListContainer: {
    height: 50,
  },
  recipeTypesList: {
    height: 45,
    marginBottom: 10,
    paddingHorizontal: 25,
  },
});
