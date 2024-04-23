import {InputUI} from "@src/UI/InputUI";
import {Neutral} from "@src/config/themes";
import {IStepIngredient} from "@src/modules/recipeForm";
import AddBorderIcon from "@src/assets/icons/border/plus";
import React, {ReactElement, memo, useState} from "react";
import {StyleSheet, TouchableOpacity, View} from "react-native";

interface IProps {
  addEntry: (value: IStepIngredient) => void;
}

function Component({addEntry}: IProps): ReactElement {
  const [value, setValue] = useState<string>("");

  return (
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
          width={30}
          height={30}
          color={(value.length === 0) ? Neutral.Neutral50 : Neutral.Neutral100}
        />
      </TouchableOpacity>
    </View>
  );
}
export const CreateStepIngredient = memo(Component);
const styles = StyleSheet.create({
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
