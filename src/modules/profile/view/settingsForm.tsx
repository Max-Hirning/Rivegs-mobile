import {useFormik} from "formik";
import {IImage} from "@src/types/image";
import {InputUI} from "@src/UI/InputUI";
import {useSelector} from "react-redux";
import {ImagePicker} from "./imagePicker";
import {ButtonUI} from "@src/UI/ButtonUI";
import {RootState} from "@src/modules/store";
import {StyleSheet, View} from "react-native";
import React, {ReactElement, useState} from "react";
import {useDeleteAvatar} from "../hooks/deleteAvatar";
import {useUpdateProfile} from "../hooks/updateProfile";
import {settingsFormModel} from "../models/settingsForm";
import {settingsFormSchema} from "../schemas/settingsForm";

export function SettingsForm(): ReactElement {
  const formik = useFormik({
    initialValues: settingsFormModel,
    validationSchema: settingsFormSchema,
    onSubmit: (values, {resetForm}) => {
      const formData = new FormData();
      (imageFile) && formData.append("file", (imageFile as IImage));
      (values.login && values.login.length > 0) && formData.append("login", values.login);
      (values.email && values.email.length > 0) && formData.append("email", values.email);
      (values.description && values.description.length > 0) && formData.append("description", values.description);
      updateProfile.mutate(formData);
      resetForm();
      setImageFile(null);
    },
  });
  const deleteAvatar = useDeleteAvatar();
  const updateProfile = useUpdateProfile();
  const [imageFile, setImageFile] = useState<null|IImage>(null);
  const profile = useSelector((state: RootState) => state.profile);
  const [avatarHasBeenChanged, setAvatarHasBeenChanged] = useState<boolean>(false);

  return (
    <View style={styles.form}>
      <View style={styles.avatarContainer}>
        <ImagePicker
          chooseImage={(image: IImage): void => {
            setImageFile(image);
            setAvatarHasBeenChanged(true);
          }}
          image={imageFile?.uri || profile.data?.avatar || undefined}
        />
        <View style={styles.avatarActions}>
          <ButtonUI
            size="small"
            title="Cancel"
            variant="secondary"
            disabled={!imageFile}
            onPress={(): void => {
              setImageFile(null);
              setAvatarHasBeenChanged(false);
            }}
          />
          <ButtonUI
            size="small"
            title="Delete"
            variant="primary"
            onPress={(): void => {
              deleteAvatar.mutate();
              setAvatarHasBeenChanged(false);
            }}
          />
        </View>
      </View>
      <InputUI
        label="Login"
        placeholder="Login"
        value={formik.values.login}
        onBlurAction={(): void => {
          formik.setFieldTouched("login", true);
        }}
        containerStyle={styles.input}
        errorMsg={formik.errors.login}
        onChangeText={(value: string): void => {
          formik.setFieldValue("login", value);
        }}
        error={!!(formik.touched.login && formik.errors.login)}
      />
      <InputUI
        label="Email"
        placeholder="Email"
        value={formik.values.email}
        onBlurAction={(): void => {
          formik.setFieldTouched("email", true);
        }}
        containerStyle={styles.input}
        errorMsg={formik.errors.email}
        onChangeText={(value: string): void => {
          formik.setFieldValue("email", value);
        }}
        error={!!(formik.touched.email && formik.errors.email)}
      />
      <InputUI
        multiline={true}
        label="Description"
        onBlurAction={(): void => {
          formik.setFieldTouched("description", true);
        }}
        containerStyle={styles.input}
        value={formik.values.description}
        errorMsg={formik.errors.description}
        onChangeText={(value: string): void => {
          formik.setFieldValue("description", value);
        }}
        placeholder="Type something about you..."
        error={!!(formik.touched.description && formik.errors.description)}
      />
      <ButtonUI
        size="large"
        variant="primary"
        style={styles.button}
        title="Update Profile"
        onPress={(): void => {
          formik.submitForm();
        }}
        disabled={!((formik.isValid && Object.values(formik.values).some((el) => el.length > 0)) || avatarHasBeenChanged)}
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
