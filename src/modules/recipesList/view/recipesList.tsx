import {TextUI} from "@src/UI/TextUI";
import {Error} from "@src/config/themes";
import React, {ReactElement} from "react";
import {IRecipe} from "@src/modules/recipe";
import {RecipeCard} from "@src/components/recipeCard";
import {ActivityIndicator, StyleSheet, View, VirtualizedList} from "react-native";

interface IProps {
  data: IRecipe[];
  isError: boolean;
  isLoading: boolean;
  refetch: () => void;
  fetchNextPage?: () => void;
  nextPage: number|null|undefined;
}

const EmptyListComponnet = (isError: boolean): ReactElement => {
  if(isError) {
    return (
      <TextUI
        variant="h2"
        isBold={true}
        style={styles.error}
      >No recipes</TextUI>
    );
  }
  return <></>;
};
const ListFooterComponent = (isLoading: boolean, nextPage: boolean): ReactElement => {
  if(isLoading || nextPage) {
    return (
      <ActivityIndicator
        size="large"
        style={styles.loader}
      />
    );
  }
  return <></>;
};
const ListDivider = (): ReactElement => <View style={styles.listDivider} />;

export function RecipesList({data, isError, nextPage, fetchNextPage, isLoading}: IProps): ReactElement {
  return (
    <VirtualizedList
      data={data || []}
      initialNumToRender={10}
      onEndReachedThreshold={0.1}
      onEndReached={(): void => {
        if(fetchNextPage && nextPage && !isLoading && !isError) {
          fetchNextPage();
        }
      }}
      contentContainerStyle={styles.list}
      ItemSeparatorComponent={ListDivider}
      keyExtractor={(item): string => item._id}
      getItemCount={(arr): number => arr.length}
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
      getItem={(arr: IRecipe[], index: number): IRecipe => arr[index]}
      ListEmptyComponent={(): ReactElement => EmptyListComponnet(isError)}
      ListFooterComponent={(): ReactElement => ListFooterComponent(isLoading, !!nextPage)}
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
  loader: {
    marginBottom: 15,
  },
  error: {
    color: Error.Error100,
  },
});
