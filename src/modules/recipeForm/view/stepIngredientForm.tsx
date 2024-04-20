import {TextUI} from "@src/UI/TextUI";
import {InputUI} from "@src/UI/InputUI";
import {Neutral} from "@src/config/themes";
import React, {ReactElement, useState} from "react";
import {IStepIngredient} from "../types/recipeForm";
import AddBorderIcon from "@src/assets/icons/border/plus";
import RemoveBorderIcon from "@src/assets/icons/border/minus";
import {StyleSheet, TouchableOpacity, View, ViewStyle} from "react-native";

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
  const [value, setValue] = useState<string>("");

  return (
    <View style={containerStyle}>
      <TextUI
        variant="h5"
        isBold={true}
      >{title}</TextUI>
      <View style={styles.list}>
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
            disabled={value.length === 0}
          >
            <AddBorderIcon
              width={24}
              height={24}
              color={(value.length === 0) ? Neutral.Neutral50 : Neutral.Neutral100}
            />
          </TouchableOpacity>
        </View>
        {
          values.map((el: IStepIngredient, index: number): ReactElement => {
            return (
              <View
                key={el._id}
                style={styles.form}
              >
                <InputUI
                  value={el.value}
                  multiline={true}
                  placeholder={placeholder}
                  onBlurAction={(): void => {
                    if(el.value.length === 0) {
                      removeEntry(el._id);
                    }
                  }}
                  containerStyle={styles.input}
                  onChangeText={(newValue: string): void => {
                    updateEntry({
                      ...el,
                      value: newValue,
                    }, index);
                  }}
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
    width: "90%",
  },
  button: {
    marginLeft: 20,
  },
});
