import {PopUpMenu} from "../popUpMenu";
import {TextUI} from "../../UI/TextUI";
import {Routes} from "../../config/routes";
import {Neutral} from "../../config/themes";
import MoreIcon from "../../assets/icons/more";
import React, {ReactElement, useState} from "react";
import ArrowLeftIcon from "../../assets/icons/arrows/left";
import {Alert, StyleSheet, TouchableOpacity, View} from "react-native";
import {RouteProp, useNavigation, useRoute} from "@react-navigation/native";
import {ScreenRouteProp, NavigationParamList} from "../../types/navigation";

export function RecipeHeader(): ReactElement {
  const [menu, setMenu] = useState<boolean>(false);
  const {goBack, navigate} = useNavigation<ScreenRouteProp>();
  const {params} = useRoute<RouteProp<NavigationParamList, Routes.Recipe>>();

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity onPress={(): void => goBack()}>
          <ArrowLeftIcon width={24} height={24} color={Neutral.Neutral100}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={(): void => setMenu(true)}>
          <MoreIcon width={24} height={24} color={Neutral.Neutral100}/>
        </TouchableOpacity>
      </View>
      <PopUpMenu
        isVisible={menu}
        onClose={(): void => setMenu(false)}
      >
        <View style={styles.menu}>
          <TouchableOpacity
            onPress={(): void => {
              setMenu(false);
            }}
            style={styles.menuItem}
          >
            <TextUI variant="p">Share</TextUI>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={(): void => {
              setMenu(false);
            }}
            style={styles.menuItem}
          >
            <TextUI variant="p">Unsave</TextUI>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={(): void => {
              setMenu(false);
            }}
            style={styles.menuItem}
          >
            <TextUI variant="p">Rate Recipe</TextUI>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={(): void => {
              setMenu(false);
              navigate(Routes.EditRecipe, {recipeId: params.recipeId});
            }}
            style={styles.menuItem}
          >
            <TextUI variant="p">Edit Recipe</TextUI>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={(): void => {
              setMenu(false);
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
        </View>
      </PopUpMenu>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    paddingVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 25,
    backgroundColor: "white",
    justifyContent: "space-between",
  },
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
