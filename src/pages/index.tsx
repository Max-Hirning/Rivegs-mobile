import {IResponse} from "@src/types/api";
import React, {ReactElement} from "react";
import {Neutral} from "@src/config/themes";
import {IRecipe} from "@src/modules/recipe";
import {StyleSheet, View} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {RecipeTypes} from "@src/components/recipeTypes";
import {AppDispatch, RootState} from "@src/modules/store";
import {SearchHeader} from "@src/components/headers/search";
import {changeTypeId} from "@src/modules/store/controllers/filters";
import {IPagination} from "@src/modules/recipesList/types/pagination";
import {RecipesList, useSearchRecipes} from "@src/modules/recipesList";

export default function Page(): ReactElement {
  const dispatch: AppDispatch = useDispatch();
  const filters = useSelector((state: RootState) => state.filters);
  const recipeTypes = useSelector((state: RootState) => state.recipeTypes);
  const {data, isError, isLoading, fetchNextPage, refetch} = useSearchRecipes(filters);

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
      <RecipesList
        refetch={refetch}
        isError={isError}
        isLoading={isLoading}
        fetchNextPage={fetchNextPage}
        nextPage={data?.pages.reverse()[0].data.next}
        data={data?.pages.reduceRight((res: IRecipe[], el: IResponse<IPagination>) => res.concat(el.data.data), []) || []}
      />
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
    height: 50,
    marginBottom: 10,
    paddingHorizontal: 25,
  },
});
