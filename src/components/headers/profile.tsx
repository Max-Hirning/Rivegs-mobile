import {TextUI} from "../../UI/TextUI";
import {PopUpMenu} from "../popUpMenu";
import {Neutral} from "../../config/themes";
import MoreIcon from "../../assets/icons/more";
import React, {ReactElement, useState} from "react";
import {useNavigation} from "@react-navigation/native";
import ArrowLeftIcon from "../../assets/icons/arrows/left";
import {Alert, StyleSheet, TouchableOpacity, View} from "react-native";

interface IProps {
  title: string;
  showReturnBtn?: boolean;
  showLogoutBtn?: boolean;
}

export function ProfileHeader({showLogoutBtn, showReturnBtn, title}: IProps): ReactElement {
  const {goBack} = useNavigation();
  const [menu, setMenu] = useState<boolean>(false);

  return (
    <>
      <View style={styles.container}>
        <TextUI
          variant="h4"
          isBold={true}
        >{title}</TextUI>
        {
          (showLogoutBtn) &&
          <TouchableOpacity onPress={(): void => setMenu(true)}>
            <MoreIcon width={24} height={24} color={Neutral.Neutral100}/>
          </TouchableOpacity>
        }
        {
          (showReturnBtn) &&
          <TouchableOpacity onPress={(): void => goBack()}>
            <ArrowLeftIcon width={24} height={24} color={Neutral.Neutral100}/>
          </TouchableOpacity>
        }
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
