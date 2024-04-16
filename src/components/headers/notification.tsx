import {PopUpMenu} from "../popUpMenu";
import {TextUI} from "../../UI/TextUI";
import {Neutral} from "../../config/themes";
import FilterIcon from "../../assets/icons/filter";
import React, {ReactElement, useState} from "react";
import {StyleSheet, TouchableOpacity, View} from "react-native";

export function NotificationHeader(): ReactElement {
  const [menu, setMenu] = useState<boolean>(false);

  return (
    <>
      <View style={styles.container}>
        <TextUI
          variant="h4"
          isBold={true}
        >Notifications</TextUI>
        <TouchableOpacity onPress={(): void => setMenu(true)}>
          <FilterIcon width={24} height={24} color={Neutral.Neutral100}/>
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
            <TextUI variant="p">Mark all as read</TextUI>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={(): void => {
              setMenu(false);
            }}
            style={styles.menuItem}
          >
            <TextUI variant="p">Delete all</TextUI>
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
    top: 50,
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
