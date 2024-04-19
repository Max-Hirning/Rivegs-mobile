import {useFormik} from "formik";
import {InputUI} from "@src/UI/InputUI";
import {IImage} from "@src/types/image";
import {ImagePicker} from "./ImagePicker";
import {ButtonUI} from "@src/UI/ButtonUI";
import {StyleSheet, View} from "react-native";
import React, {ReactElement, useState} from "react";
import {useNavigation} from "@react-navigation/native";
import {recipeFormSchema} from "../schemas/recipeForm";
import {StepIngredientForm} from "./stepIngredientForm";
import {recipeFormInitialValue} from "../models/recipeForm";
import {IRecipeForm, IStepIngredient} from "../types/recipeForm";

interface IProps {
  initialState: IRecipeForm;
}

export function RecipeForm({initialState}: IProps): ReactElement {
  const formik = useFormik({
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: recipeFormSchema,
    initialValues: recipeFormInitialValue,
  });
  const navigation = useNavigation();
  const [imageFile, setImageFile] = useState<null|IImage>(null);

  React.useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      formik.setValues(initialState);
    });

    return unsubscribe;
  }, [navigation, initialState, formik]);

  return (
    <View style={styles.form}>
      <ImagePicker
        image={imageFile?.uri || undefined}
        chooseImage={(image: IImage): void => {
          setImageFile(image);
        }}
      />
      <InputUI
        label="Title"
        placeholder="Recipe Title"
        value={formik.values.title}
        containerStyle={styles.divider}
        onChangeText={(title: string): void => {
          formik.setFieldValue("title", title);
        }}
      />
      <InputUI
        multiline={true}
        label="Description"
        containerStyle={styles.divider}
        placeholder="Recipe Description"
        value={formik.values.description}
        onChangeText={(description: string): void => {
          formik.setFieldValue("description", description);
        }}
      />
      <StepIngredientForm
        title="Ingredients"
        containerStyle={styles.divider}
        values={formik.values.ingredients}
        removeEntry={(id: string): void => {
          formik.setFieldValue("ingredients", formik.values.ingredients.filter((el: IStepIngredient) => el._id !== id));
        }}
        updateEntry={(value: IStepIngredient, index: number): void => {
          const arr = [...formik.values.ingredients];
          arr[index] = value;
          formik.setFieldValue("ingredients", arr);
        }}
        addEntry={(value: IStepIngredient|Omit<IStepIngredient, "_id">): void => {
          formik.setFieldValue("ingredients", [...formik.values.ingredients, value]);
        }}
      />
      <StepIngredientForm
        title="Steps"
        values={formik.values.steps}
        containerStyle={styles.divider}
        removeEntry={(id: string): void => {
          formik.setFieldValue("steps", formik.values.steps.filter((el: IStepIngredient) => el._id !== id));
        }}
        updateEntry={(value: IStepIngredient, index: number): void => {
          const arr = [...formik.values.steps];
          arr[index] = value;
          formik.setFieldValue("steps", arr);
        }}
        addEntry={(value: IStepIngredient|Omit<IStepIngredient, "_id">): void => {
          formik.setFieldValue("steps", [...formik.values.steps, value]);
        }}
      />
      <ButtonUI
        size="large"
        variant="primary"
        title="Save Recipe"
        style={styles.button}
        onPress={(): void => {
          formik.submitForm();
        }}
        disabled={(!formik.isValid) || !(imageFile) || formik.values.steps.length === 0 || formik.values.ingredients.length === 0}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    width: "100%",
    maxWidth: 360,
  },
  divider: {
    marginTop: 15,
  },
  button: {
    marginTop: 30,
  },
});
