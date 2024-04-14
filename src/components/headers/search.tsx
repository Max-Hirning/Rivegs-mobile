import {InputUI} from "../../UI/InputUI";
import React, {ReactElement} from "react";
import FilterIcon from "../../assets/icons/filter";
import {Neutral, Primary} from "../../config/themes";
import {StyleSheet, TouchableOpacity, View} from "react-native";

export function SearchHeader(): ReactElement {
  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <InputUI
          placeholder="Search recipe"
        />
      </View>
      <TouchableOpacity style={styles.button}>
        <FilterIcon width={24} height={24} color={Neutral.Neutral0}/>
      </TouchableOpacity>
    </View>
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
  input: {
    maxWidth: 255,
    width: "100%",
  },
  button: {
    width: 40,
    height: 40,
    display: "flex",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Primary.Primary50,
  },
});
