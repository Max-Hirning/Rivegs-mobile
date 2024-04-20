import {useFormik} from "formik";
import {InputUI} from "@src/UI/InputUI";
import {IImage} from "@src/types/image";
import {useSelector} from "react-redux";
import {ImagePicker} from "./ImagePicker";
import {ButtonUI} from "@src/UI/ButtonUI";
import {RootState} from "@src/modules/store";
import {StyleSheet, View} from "react-native";
import {useUpdateRecipe} from "../hooks/updateRecipe";
import {useCreateRecipe} from "../hooks/createRecipe";
import {useNavigation} from "@react-navigation/native";
import {recipeFormSchema} from "../schemas/recipeForm";
import {RecipeTypes} from "@src/components/recipeTypes";
import {StepIngredientForm} from "./stepIngredientForm";
import {recipeFormInitialValue} from "../models/recipeForm";
import React, {ReactElement, useEffect, useState} from "react";
import {IRecipeForm, IStepIngredient} from "../types/recipeForm";

interface IProps {
  initialImageUrl?: string;
  initialState: IRecipeForm;
}

export function RecipeForm({initialState, initialImageUrl}: IProps): ReactElement {
  const formik = useFormik({
    onSubmit: (values, {setValues}) => {
      const formData = new FormData();
      (imageFile) && formData.append("file", (imageFile as IImage));
      (values.title && values.title.length > 0) && formData.append("title", values.title);
      (values.steps.length > 0) && formData.append("steps", JSON.stringify(values.steps));
      (values.typeId && values.typeId.length > 0) && formData.append("typeId", values.typeId);
      (values.ingredients.length > 0) && formData.append("ingredients", JSON.stringify(values.ingredients));
      (values.description && values.description.length > 0) && formData.append("description", values.description);
      if(initialState) {
        updateRecipe.mutate(formData);
      } else {
        createRecipe.mutate(formData);
      }
      setValues(initialState || {
        title: "",
        steps: [],
        typeId: "",
        description: "",
        ingredients: [],
      });
      setImageFile(null);
    },
    validationSchema: recipeFormSchema,
    initialValues: recipeFormInitialValue,
  });
  const navigation = useNavigation();
  const updateRecipe = useUpdateRecipe();
  const createRecipe = useCreateRecipe();
  const [imageFile, setImageFile] = useState<null|IImage>(null);
  const recipeTypes = useSelector((state: RootState) => state.recipeTypes);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      formik.setValues(initialState);
    });

    return unsubscribe;
  }, [navigation, initialState, formik]);

  useEffect(() => {
    const unsubscribe = navigation.addListener("blur", () => {
      setImageFile(null);
    });

    return unsubscribe;
  }, [navigation, initialState, formik]);

  return (
    <View style={styles.form}>
      <ImagePicker
        chooseImage={(image: IImage): void => {
          setImageFile(image);
        }}
        image={imageFile?.uri || initialImageUrl || undefined}
      />
      <RecipeTypes
        style={styles.divider}
        value={formik.values.typeId}
        data={recipeTypes.data || []}
        onChange={(typeId: string): void => {
          formik.setFieldValue("typeId", typeId);
        }}
      />
      <InputUI
        label="Title"
        placeholder="Recipe Title"
        value={formik.values.title}
        onBlurAction={(): void => {
          formik.setFieldTouched("title", true);
        }}
        errorMsg={formik.errors.title}
        containerStyle={styles.divider}
        onChangeText={(title: string): void => {
          formik.setFieldValue("title", title);
        }}
        error={!!(formik.touched.title && formik.errors.title)}
      />
      <InputUI
        multiline={true}
        label="Description"
        onBlurAction={(): void => {
          formik.setFieldTouched("description", true);
        }}
        errorMsg={formik.errors.description}
        error={!!(formik.touched.description && formik.errors.description)}
        containerStyle={styles.divider}
        placeholder="Recipe Description"
        value={formik.values.description}
        onChangeText={(description: string): void => {
          formik.setFieldValue("description", description);
        }}
      />
      <StepIngredientForm
        title="Ingredients"
        placeholder="Ingredient"
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
        placeholder="Step"
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
        disabled={(!formik.isValid) || !(imageFile || initialImageUrl) || formik.values.steps.length === 0 || formik.values.ingredients.length === 0}
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
