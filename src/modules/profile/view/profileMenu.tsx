import {TextUI} from "@src/UI/TextUI";
import {useSelector} from "react-redux";
import React, {ReactElement} from "react";
import {RootState} from "@src/modules/store";
import {useSession} from "@src/modules/authForm";
import {PopUpMenu} from "@src/components/popUpMenu";
import {useDeleteProfile} from "../hooks/deleteProfile";
import {StyleSheet, TouchableOpacity, View, Alert} from "react-native";

interface IProps {
  menu: boolean;
  closeMenu: () => void;
}

export function ProfileMenu({menu, closeMenu}: IProps): ReactElement {
  const {logOut} = useSession();
  const {mutate} = useDeleteProfile();
  const profile = useSelector((state: RootState) => state.profile);

  if(!profile.data) {return <></>;}

  return (
    <PopUpMenu
      isVisible={menu}
      onClose={closeMenu}
    >
      <View style={styles.menu}>
        <TouchableOpacity
          onPress={(): void => {
            closeMenu();
            logOut();
          }}
          style={styles.menuItem}
        >
          <TextUI variant="p">Log out</TextUI>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={(): void => {
            closeMenu();
            Alert.alert("Are you sure, you want delete account?", "All your recipes will be deleted and can not be undo", [
              {
                text: "Cancel",
                style: "cancel",
              },
              {
                text: "Delete",
                onPress: (): void => {
                  mutate();
                },
              },
            ]);
          }}
          style={styles.menuItem}
        >
          <TextUI variant="p">Delete</TextUI>
        </TouchableOpacity>
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
