import {TextUI} from "@src/UI/TextUI";
import {RateModal} from "./rateModal";
import {Routes} from "@src/config/routes";
import {PopUpMenu} from "@src/components/popUpMenu";
import React, {ReactElement, useState} from "react";
import {IRecipeForm} from "@src/modules/recipeForm";
import {ScreenRouteProp} from "@src/types/navigation";
import {useNavigation} from "@react-navigation/native";
import {useUpdateSavedRecipes} from "@src/modules/profile";
import {Alert, StyleSheet, TouchableOpacity, View} from "react-native";

interface IProps {
  _id: string;
  rate: number;
  menu: boolean;
  isAuthor: boolean;
  recipeImage: string;
  closeMenu: () => void;
  savedRecipes: string[];
  recipeState: IRecipeForm;
}

export function RecipeMenu({menu, closeMenu, rate, recipeImage, recipeState, isAuthor, savedRecipes, _id}: IProps): ReactElement {
  const deleteRecipe = useUpdateSavedRecipes();
  const saveUnSaveRecipe = useUpdateSavedRecipes();
  const {navigate} = useNavigation<ScreenRouteProp>();
  const [rateModal, setRateModal] = useState<boolean>(false);

  return (
    <>
      <PopUpMenu
        isVisible={menu}
        onClose={closeMenu}
      >
        <View style={styles.menu}>
          <TouchableOpacity
            onPress={(): void => {
              closeMenu();
            }}
            style={styles.menuItem}
          >
            <TextUI variant="p">Share</TextUI>
          </TouchableOpacity>
          {
            (isAuthor) &&
            <TouchableOpacity
              onPress={(): void => {
                closeMenu();
                saveUnSaveRecipe.mutate(_id);
              }}
              style={styles.menuItem}
            >
              <TextUI variant="p">{savedRecipes.includes(_id) ? "Unsave" : "Save"}</TextUI>
            </TouchableOpacity>
          }
          <TouchableOpacity
            onPress={(): void => {
              setRateModal(true);
              closeMenu();
            }}
            style={styles.menuItem}
          >
            <TextUI variant="p">Rate Recipe</TextUI>
          </TouchableOpacity>
          {
            (isAuthor) &&
            <>
              <TouchableOpacity
                onPress={(): void => {
                  closeMenu();
                  navigate(Routes.EditRecipe, {
                    recipeId: _id,
                    initialState: recipeState,
                    initialImageUrl: recipeImage,
                  });
                }}
                style={styles.menuItem}
              >
                <TextUI variant="p">Edit Recipe</TextUI>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={(): void => {
                  closeMenu();
                  Alert.alert("Are you sure, you want delete this recipe?", "Recipe will be deleted and can not be undo", [
                    {
                      text: "Cancel",
                      style: "cancel",
                    },
                    {
                      text: "Delete",
                      onPress: (): void => {
                        deleteRecipe.mutate(_id);
                      },
                    },
                  ]);
                }}
                style={styles.menuItem}
              >
                <TextUI variant="p">Delete Recipe</TextUI>
              </TouchableOpacity>
            </>
          }
        </View>
      </PopUpMenu>
      <RateModal
        menu={rateModal}
        initialRate={rate}
        closeMenu={(): void => {
          setRateModal(false);
        }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  menu: {
    gap: 10,
    top: 45,
    right: 25,
    width: 164,
    padding: 10,
    zIndex: 100,
    borderRadius: 8,
    position: "absolute",
    backgroundColor: "white",
  },
  menuItem: {
    paddingVertical: 8,
  },
});
