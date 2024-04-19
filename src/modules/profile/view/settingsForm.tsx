import {IImage} from "@src/types/image";
import {InputUI} from "@src/UI/InputUI";
import {ImagePicker} from "./imagePicker";
import {ButtonUI} from "@src/UI/ButtonUI";
import {StyleSheet, View} from "react-native";
import React, {ReactElement, useState} from "react";

export function SettingsForm(): ReactElement {
  const [imageFile, setImageFile] = useState<null|IImage>(null);

  return (
    <View style={styles.form}>
      <View style={styles.avatarContainer}>
        <ImagePicker
          image={imageFile?.uri || undefined}
          chooseImage={(image: IImage): void => {
            setImageFile(image);
          }}
        />
        <View style={styles.avatarActions}>
          <ButtonUI
            size="small"
            title="Cancel"
            variant="secondary"
            disabled={!imageFile}
            onPress={(): void => setImageFile(null)}
          />
          <ButtonUI
            size="small"
            title="Delete"
            variant="primary"
          />
        </View>
      </View>
      <InputUI
        label="Login"
        placeholder="Login"
        containerStyle={styles.input}
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
  avatarContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  avatarActions: {
    gap: 10,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  input: {
    marginTop: 20,
  },
  button: {
    marginTop: 40,
  },
});
