import {ButtonUI} from "@src/UI/ButtonUI";
import React, {ReactElement} from "react";
import {IRecipeType} from "@src/modules/recipeForm";
import {FlatList, StyleSheet, View, ViewStyle} from "react-native";

interface IProps {
  value: string;
  style?: ViewStyle;
  data: IRecipeType[];
  onChange: (typeId: string) => void;
}

const ListDivider = (): ReactElement => <View style={styles.listDivider} />;

export function RecipeTypes({style, data, onChange, value}: IProps): ReactElement {
  return (
    <FlatList
      data={data}
      horizontal={true}
      ItemSeparatorComponent={ListDivider}
      contentContainerStyle={[styles.list, style]}
      keyExtractor={({_id}: IRecipeType): string => _id}
      renderItem={({item}: {item: IRecipeType}): ReactElement => {
        return (
          <ButtonUI
            size="small"
            title={item.title}
            onPress={(): void => onChange(item._id)}
            variant={(value === item._id) ? "primary" : "secondary"}
          />
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    flexGrow: 1,
    paddingBottom: 10,
  },
  listDivider: {
    marginHorizontal: 5,
  },
});
