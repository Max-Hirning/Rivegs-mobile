import {InputUI} from "@src/UI/InputUI";
import {Neutral} from "@src/config/themes";
import React, {ReactElement, memo} from "react";
import {IStepIngredient} from "@src/modules/recipeForm";
import RemoveBorderIcon from "@src/assets/icons/border/minus";
import {StyleSheet, TouchableOpacity, View} from "react-native";

interface IProps extends IStepIngredient {
  index: number;
  placeholder: string;
  removeEntry: (value: string) => void;
  updateEntry: (value: IStepIngredient, index: number) => void;
}

function Component({_id, placeholder, value, index, updateEntry, removeEntry, ...el}: IProps): ReactElement {
  return (
    <View style={styles.form}>
      <InputUI
        value={value}
        multiline={true}
        placeholder={placeholder}
        onBlurAction={(): void => {
          if(value.length === 0) {
            removeEntry(_id);
          }
        }}
        containerStyle={styles.input}
        onChangeText={(newValue: string): void => {
          updateEntry({
            _id,
            ...el,
            value: newValue,
          }, index);
        }}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={(): void => removeEntry(_id)}
      >
        <RemoveBorderIcon
          width={30}
          height={30}
          color={Neutral.Neutral100}
        />
      </TouchableOpacity>
    </View>
  );
}
export const EditStepIngredient = memo(Component);
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
