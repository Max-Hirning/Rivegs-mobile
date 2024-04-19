import {TextUI} from "../../../UI/TextUI";
import React, {ReactElement} from "react";
import {Routes} from "../../../config/routes";
import {useNavigation} from "@react-navigation/native";
import {PopUpMenu} from "../../../components/popUpMenu";
import {ScreenRouteProp} from "../../../types/navigation";
import {Alert, StyleSheet, TouchableOpacity, View} from "react-native";

interface IProps {
  _id: string;
  menu: boolean;
  isAuthed: boolean;
  closeMenu: () => void;
  savedRecipes: string[];
}

export function RecipeMenu({menu, closeMenu, isAuthed, savedRecipes, _id}: IProps): ReactElement {
  const {navigate} = useNavigation<ScreenRouteProp>();

  return (
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
          (isAuthed) &&
            <TouchableOpacity
              onPress={(): void => {
                closeMenu();
                if(savedRecipes.includes(_id)) {
                  console.log("unsave");
                } else {
                  console.log("save");
                }
              }}
              style={styles.menuItem}
            >
              <TextUI variant="p">{savedRecipes.includes(_id) ? "Unsave" : "Save"}</TextUI>
            </TouchableOpacity>
        }
        <TouchableOpacity
          onPress={(): void => {
            closeMenu();
          }}
          style={styles.menuItem}
        >
          <TextUI variant="p">Rate Recipe</TextUI>
        </TouchableOpacity>
        {
          (isAuthed) &&
            <>
              <TouchableOpacity
                onPress={(): void => {
                  closeMenu();
                  navigate(Routes.EditRecipe, {recipeId: _id});
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
                      onPress: () => console.log("Cancel Pressed"),
                    },
                    {
                      text: "Delete",
                      onPress: () => console.log("OK Pressed"),
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
