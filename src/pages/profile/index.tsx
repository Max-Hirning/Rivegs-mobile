import {TextUI} from "../../UI/TextUI";
import {useSelector} from "react-redux";
import {Neutral} from "../../config/themes";
import {RootState} from "../../modules/store";
import MoreIcon from "../../assets/icons/more";
import {ProfileInfo} from "../../modules/profile";
import React, {ReactElement, useState} from "react";
import {PopUpMenu} from "../../components/popUpMenu";
import {RecipesList} from "../../modules/recipesList";
import {Header} from "../../components/headers/header";
import {StyleSheet, TouchableOpacity, View, Alert} from "react-native";

export default function Page(): ReactElement {
  const [menu, setMenu] = useState<boolean>(false);
  const profile = useSelector((state: RootState) => state.profile);

  if(!profile.data) {return <></>;}

  return (
    <View style={styles.container}>
      <Header
        rightIcon={
          <TouchableOpacity onPress={(): void => setMenu(true)}>
            <MoreIcon width={24} height={24} color={Neutral.Neutral100}/>
          </TouchableOpacity>
        }
        title="My profile"
      />
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
            <TextUI variant="p">Log out</TextUI>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={(): void => {
              setMenu(false);
              Alert.alert("Are you sure, you want delete account?", "All your recipes will be deleted and can not be undo", [
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
            <TextUI variant="p">Delete</TextUI>
          </TouchableOpacity>
        </View>
      </PopUpMenu>
      <ProfileInfo
        login={profile.data.login}
        avatar={profile.data.avatar}
        description={profile.data.description}
        recipesAmount={profile.data.recipeIds.length}
      />
      <View style={styles.horizontalDivider}/>
      <RecipesList filters={{
        recipesIds: profile.data.recipeIds,
      }}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Neutral.Neutral0,
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
  horizontalDivider: {
    height: 1,
    width: "100%",
    marginTop: 20,
    backgroundColor: Neutral.Neutral30,
  },
});
