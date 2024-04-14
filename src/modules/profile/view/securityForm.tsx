import React, {ReactElement} from "react";
import {InputUI} from "../../../UI/InputUI";
import {ButtonUI} from "../../../UI/ButtonUI";
import {StyleSheet, View} from "react-native";

export function SecurityForm(): ReactElement {
  return (
    <View style={styles.form}>
      <InputUI
        label="Old password"
        secureTextEntry={true}
        placeholder="Old password"
      />
      <InputUI
        label="New password"
        secureTextEntry={true}
        placeholder="New password"
        containerStyle={styles.input}
      />
      <InputUI
        secureTextEntry={true}
        label="Confirm password"
        containerStyle={styles.input}
        placeholder="Confirm new password"
      />
      <ButtonUI
        size="large"
        variant="primary"
        style={styles.button}
        title="Update Security"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    width: "100%",
    maxWidth: 335,
  },
  input: {
    marginTop: 20,
  },
  button: {
    marginTop: 40,
  },
});
