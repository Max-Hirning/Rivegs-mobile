import {TextUI} from "../../UI/TextUI";
import {Neutral} from "../../config/themes";
import FilterIcon from "../../assets/icons/filter";
import React, {ReactElement, useState} from "react";
import {PopUpMenu} from "../../components/popUpMenu";
import {Header} from "../../components/headers/header";
import {StyleSheet, TouchableOpacity, View} from "react-native";
import {PageScroll} from "../../components/wrappers/pageScroll";

export default function Page(): ReactElement {
  const [menu, setMenu] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <Header
        rightIcon={
          <TouchableOpacity onPress={(): void => setMenu(true)}>
            <FilterIcon
              width={24}
              height={24}
              color={Neutral.Neutral100}
            />
          </TouchableOpacity>
        }
        title="Notifications"
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
      <PageScroll listStyle={styles.list}>
        <></>
      </PageScroll>
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
  list: {
    paddingTop: 10,
    paddingBottom: 25,
    paddingHorizontal: 25,
  },
});
