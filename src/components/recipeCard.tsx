import {TextUI} from "../UI/TextUI";
import {Routes} from "../config/routes";
import React, {ReactElement} from "react";
import {IRecipe} from "../modules/recipe";
import StartIcon from "../assets/icons/star";
import {Neutral, Secondary} from "../config/themes";
import {ScreenRouteProp} from "../types/navigation";
import {useNavigation} from "@react-navigation/native";
import LinearGradient from "react-native-linear-gradient";
import {ImageBackground, StyleSheet, TouchableOpacity, View} from "react-native";

interface IProps extends Pick<IRecipe, "image"|"title"|"rate"|"_id"> {
  authorLogin: string;
}

export function RecipeCard({image, title, rate, _id, authorLogin}: IProps): ReactElement {
  const navigation = useNavigation<ScreenRouteProp>();

  return (
    <TouchableOpacity
      style={styles.cardBtn}
      onPress={(): void => navigation.navigate(Routes.Recipe, {recipeId: _id})}
    >
      <ImageBackground
        source={{uri: image}}
        imageStyle={{...styles.cardBackgroundImage}}
      >
        <LinearGradient
          style={{...styles.cardLinear}}
          colors={["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 1)a"]}
        >
          <View style={styles.rateBox}>
            <StartIcon
              width={24}
              height={24}
              style={styles.icon}
              color={Secondary.Secondary50}
            />
            <TextUI variant="p">{`${rate}`}</TextUI>
          </View>
          <View style={styles.cardInfo}>
            <TextUI
              variant="h5"
              isBold={true}
              style={{color: Neutral.Neutral0}}
              numberOfLines={1}
              ellipsizeMode="tail"
            >{title}</TextUI>
            <TextUI
              variant="label"
              style={{color: Neutral.Neutral30}}
              numberOfLines={1}
              ellipsizeMode="tail"
            >By {authorLogin}</TextUI>
          </View>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardBtn: {
    height: 223,
    margin: 7.5,
    width: 335,
  },
  cardBackgroundImage: {
    height: 223,
    width: "100%",
    borderRadius: 10,
  },
  cardLinear: {
    height: 223,
    padding: 10,
    width: "100%",
    display: "flex",
    borderRadius: 10,
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  rateBox: {
    display: "flex",
    borderRadius: 20,
    paddingVertical: 2,
    paddingHorizontal: 7,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFE1B3",
  },
  icon: {
    marginRight: 5,
  },
  cardInfo: {
    width: "100%",
  },
});
