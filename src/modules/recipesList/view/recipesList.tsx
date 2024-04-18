import React, {ReactElement} from "react";
import {IFilters} from "../types/filters";
import {Neutral} from "../../../config/themes";
import {IRecipe} from "../../recipe/types/recipe";
import {useGetRecipes} from "../hooks/getRecipes";
import {FlatList, StyleSheet, View} from "react-native";
import {RecipeCard} from "../../../components/recipeCard";

interface IProps {
  filters: Partial<IFilters>;
}

const ListDivider = (): ReactElement => <View style={styles.listDivider} />;

export function RecipesList({filters}: IProps): ReactElement {
  const {data} = useGetRecipes(filters);

  return (
    <FlatList
      data={data?.data.data || []}
      contentContainerStyle={styles.list}
      ItemSeparatorComponent={ListDivider}
      keyExtractor={(item): string => item._id}
      renderItem={({item}: {item: IRecipe}): ReactElement => {
        return (
          <RecipeCard
            _id={item._id}
            rate={item.rate}
            title={item.title}
            image={item.image}
            authorLogin={item.author.login}
          />
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    paddingVertical: 20,
    alignItems: "center",
  },
  listDivider: {
    marginVertical: 5,
  },
  recipeCard: {
    width: 335,
    height: 223,
    borderRadius: 10,
    backgroundColor: Neutral.Neutral30,
  },
});
