import React, {ReactElement} from "react";
import {InputUI} from "../../../UI/InputUI";
import {ButtonUI} from "../../../UI/ButtonUI";
import {StyleSheet, View} from "react-native";

export function SettingsForm(): ReactElement {
  return (
    <View style={styles.form}>
      <InputUI
        label="Login"
        placeholder="Login"
      />
      <InputUI
        label="Email"
        placeholder="Email"
        containerStyle={styles.input}
      />
      <InputUI
        multiline={true}
        label="Description"
        containerStyle={styles.input}
        placeholder="Type something about you..."
      />
      <ButtonUI
        size="large"
        variant="primary"
        style={styles.button}
        title="Update Profile"
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
