
import {TextUI} from "../../UI/TextUI";
import {AvatarUI} from "../../UI/AvatarUI";
import {ButtonUI} from "../../UI/ButtonUI";
import {Routes} from "../../config/routes";
import MoreIcon from "../../assets/icons/more";
import StarIcon from "../../assets/icons/star";
import {Neutral, Rating} from "../../config/themes";
import React, {ReactElement, useState} from "react";
import {PopUpMenu} from "../../components/popUpMenu";
import {Header} from "../../components/headers/header";
import ArrowLeftIcon from "../../assets/icons/arrows/left";
import {TabsNavigation} from "../../components/tabsNavigation";
import {PageScroll} from "../../components/wrappers/pageScroll";
import {NavigationParamList, ScreenRouteProp} from "../../types/navigation";
import {RouteProp, useNavigation, useRoute} from "@react-navigation/native";
import {Alert, StyleSheet, Text, TouchableOpacity, View} from "react-native";

export default function Page(): ReactElement {
  const [menu, setMenu] = useState<boolean>(false);
  const {navigate, goBack} = useNavigation<ScreenRouteProp>();
  const {params} = useRoute<RouteProp<NavigationParamList, Routes.Recipe>>();
  console.log(params.recipeId);
  return (
    <View style={styles.container}>
      <Header
        leftIcon={
          <TouchableOpacity onPress={(): void => goBack()}>
            <ArrowLeftIcon width={24} height={24} color={Neutral.Neutral100}/>
          </TouchableOpacity>
        }
        rightIcon={
          <TouchableOpacity onPress={(): void => setMenu(true)}>
            <MoreIcon width={24} height={24} color={Neutral.Neutral100}/>
          </TouchableOpacity>
        }
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
      <PageScroll>
        <>
          <View style={styles.image} />
          <View style={styles.infoContainer}>
            <View style={styles.rateContainer}>
              <StarIcon
                width={24}
                height={24}
                color={Rating.Rating100}
              />
              <TextUI
                variant="p"
                isBold={true}
                style={styles.rate}
              >4.5</TextUI>
            </View>
            <View style={styles.authorContainer}>
              <View style={styles.author}>
                <AvatarUI
                  login="Max"
                  size="small"
                />
                <TextUI
                  variant="p"
                  isBold={true}
                  style={styles.authorLogin}
                >Roberta Anny</TextUI>
              </View>
              <ButtonUI
                size="small"
                title="Visit"
                variant="primary"
                onPress={(): void => navigate(Routes.Profile, {userId: "1334"})}
              />
            </View>
          </View>
          <TabsNavigation
            tabs={[
              {
                label: "Steps",
                content: (
                  <View>
                    {[1, 2, 3, 7, 8, 9, 10].map((el) => (
                      <View key={el} style={styles.el}>
                        <Text>{el}</Text>
                      </View>
                    ))}
                  </View>
                ),
              },
              {
                label: "Ingredients",
                content: (
                  <View>
                    {[1, 2, 3, 4].map((el) => (
                      <View key={el} style={styles.el}>
                        <Text>{el}</Text>
                      </View>
                    ))}
                  </View>
                ),
              },
            ]}
          />
        </>
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
  image: {
    width: 335,
    height: 223,
    marginTop: 10,
    borderRadius: 12,
    backgroundColor: Neutral.Neutral30,
  },
  infoContainer: {
    width: "100%",
    marginTop: 10,
    marginBottom: 30,
    paddingHorizontal: 25,
  },
  rateContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
  },
  rate: {
    marginLeft: 5,
  },
  authorContainer: {
    marginTop: 10,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  author: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  authorLogin: {
    marginLeft: 10,
  },
  el: {
    width: 335,
    height: 76,
    borderRadius: 10,
    marginVertical: 5,
    backgroundColor: Neutral.Neutral30,
  },
});
