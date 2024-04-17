import {TextUI} from "../../../UI/TextUI";
import {InputUI} from "../../../UI/InputUI";
import {Neutral} from "../../../config/themes";
import React, {ReactElement, useState} from "react";
import {IStepIngredient} from "../types/recipeForm";
import AddBorderIcon from "../../../assets/icons/border/plus";
import RemoveBorderIcon from "../../../assets/icons/border/minus";
import {StyleSheet, TouchableOpacity, View, ViewStyle} from "react-native";

interface IProps {
  title: string;
  values: IStepIngredient[];
  containerStyle?: ViewStyle;
  removeEntry: (value: string) => void;
  addEntry: (value: IStepIngredient) => void;
  updateEntry: (value: IStepIngredient, index: number) => void;
}

export function StepIngredientForm({title, containerStyle, values, updateEntry, removeEntry, addEntry}: IProps): ReactElement {
  const [value, setValue] = useState<string>("");

  return (
    <View style={containerStyle}>
      <TextUI
        variant="h5"
        isBold={true}
      >{title}</TextUI>
      <View style={styles.list}>
        {
          values.map((el: IStepIngredient, index: number): ReactElement => {
            return (
              <View
                key={el._id}
                style={styles.form}
              >
                <InputUI
                  value={el.value}
                  onChangeText={(newValue: string): void => {
                    updateEntry({
                      ...el,
                      value: newValue,
                    }, index);
                  }}
                  placeholder="Ingerdient"
                  containerStyle={styles.input}
                />
                <TouchableOpacity
                  style={styles.button}
                  onPress={(): void => removeEntry(el._id)}
                >
                  <RemoveBorderIcon
                    width={24}
                    height={24}
                    color={Neutral.Neutral100}
                  />
                </TouchableOpacity>
              </View>
            );
          })
        }
        <View style={styles.form}>
          <InputUI
            value={value}
            onChangeText={setValue}
            placeholder="Ingerdient"
            containerStyle={styles.input}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={(): void => {
              addEntry({
                value,
                bold: false,
                italic: false,
                underlined: false,
                _id: Date.now().toString(),
              });
              setValue("");
            }}
          >
            <AddBorderIcon
              width={24}
              height={24}
              color={Neutral.Neutral100}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    gap: 10,
    marginTop: 10,
  },
  form: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  input: {
    flexGrow: 1,
  },
  button: {
    marginLeft: 20,
  },
});
