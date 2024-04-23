import {TextUI} from "@src/UI/TextUI";
import {IStepIngredient} from "../types/recipeForm";
import React, {ReactElement, useCallback} from "react";
import {StyleSheet, View, ViewStyle} from "react-native";
import {EditStepIngredient} from "@src/components/editStepIngredient";
import {CreateStepIngredient} from "@src/components/createStepIngredient";

interface IProps {
  title: string;
  placeholder: string;
  values: IStepIngredient[];
  containerStyle?: ViewStyle;
  removeEntry: (value: string) => void;
  addEntry: (value: IStepIngredient) => void;
  updateEntry: (value: IStepIngredient, index: number) => void;
}

export function StepIngredientForm({title, placeholder, containerStyle, values, updateEntry, removeEntry, addEntry}: IProps): ReactElement {
  const addNewEntry = useCallback((data: IStepIngredient): void => addEntry(data), [addEntry]);
  const removeExistedEntry = useCallback((_id: string): void => removeEntry(_id), [removeEntry]);
  const updateExistedEntry = useCallback((data: IStepIngredient, index: number): void => updateEntry(data, index), [updateEntry]);

  return (
    <View style={containerStyle}>
      <TextUI
        variant="h5"
        isBold={true}
      >{title}</TextUI>
      <View style={styles.list}>
        <CreateStepIngredient addEntry={addNewEntry}/>
        {
          values.map((el: IStepIngredient, index: number): ReactElement => {
            return (
              <EditStepIngredient
                {...el}
                key={el._id}
                index={index}
                placeholder={placeholder}
                updateEntry={updateExistedEntry}
                removeEntry={removeExistedEntry}
              />
            );
          })
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    gap: 10,
    marginTop: 10,
  },
});
