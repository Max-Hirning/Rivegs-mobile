import {TextUI} from "@src/UI/TextUI";
import {Routes} from "@src/config/routes";
import {IRecipe} from "@src/modules/recipe";
import StartIcon from "@src/assets/icons/star";
import React, {ReactElement, memo} from "react";
import {Neutral, Secondary} from "@src/config/themes";
import {ScreenRouteProp} from "@src/types/navigation";
import {useNavigation} from "@react-navigation/native";
import LinearGradient from "react-native-linear-gradient";
import {ImageBackground, StyleSheet, TouchableOpacity, View} from "react-native";

interface IProps extends Pick<IRecipe, "image"|"title"|"rate"|"_id"> {
  authorLogin: string;
}

function Component({image, title, rate, _id, authorLogin}: IProps): ReactElement {
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
              width={20}
              height={20}
              style={styles.icon}
              fill={Secondary.Secondary50}
              color={Secondary.Secondary50}
            />
            <TextUI variant="p">{`${rate}`}</TextUI>
          </View>
          <View style={styles.cardInfo}>
            <TextUI
              variant="h5"
              isBold={true}
              numberOfLines={1}
              ellipsizeMode="tail"
              style={{color: Neutral.Neutral0}}
            >{title}</TextUI>
            <TextUI
              variant="label"
              numberOfLines={1}
              ellipsizeMode="tail"
              style={{color: Neutral.Neutral30}}
            >By {authorLogin}</TextUI>
          </View>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
}
export const RecipeCard = memo(Component);
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
