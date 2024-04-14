import {TextUI} from "../../UI/TextUI";
import {AvatarUI} from "../../UI/AvatarUI";
import {ButtonUI} from "../../UI/ButtonUI";
import {Routes} from "../../config/routes";
import StarIcon from "../../assets/icons/star";
import {StyleSheet, Text, View} from "react-native";
import React, {ReactElement, useState} from "react";
import {Neutral, Rating} from "../../config/themes";
import {PageScroll} from "../../components/wrappers/pageScroll";
import {NavigationParamList, ScreenRouteProp} from "../../types/navigation";
import {RouteProp, useNavigation, useRoute} from "@react-navigation/native";

export default function Page(): ReactElement {
  const {navigate} = useNavigation<ScreenRouteProp>();
  const {params} = useRoute<RouteProp<NavigationParamList, Routes.Recipe>>();
  const [activeBtn, setActiveBtn] = useState<"ingredients"|"steps">("ingredients");
  console.log(params.recipeId);
  return (
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
        <View style={{
          marginTop: 30,
          alignItems: "center",
        }}>
          <View style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width: 280,
            justifyContent: "space-between",
            marginBottom: 10,
          }}>
            <ButtonUI
              style={{
                width: 125,
              }}
              onPress={(): void => setActiveBtn("ingredients")}
              size="small"
              variant={(activeBtn === "ingredients") ? "primary" : "secondary"}
              title="Ingredients"
            />
            <ButtonUI
              style={{
                width: 125,
              }}
              size="small"
              onPress={(): void => setActiveBtn("steps")}
              variant={(activeBtn === "steps") ? "primary" : "secondary"}
              title="Steps"
            />
          </View>
          <View style={{
            paddingBottom: 10,
          }}>
            {
              [1,2,3,4,5,6,7,8,9,10].map((el) => {
                return (
                  <View key={el} style={styles.el}>
                    <Text>{el}</Text>
                  </View>
                );
              })
            }
          </View>
        </View>
      </>
    </PageScroll>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 335,
    height: 223,
    borderRadius: 12,
    backgroundColor: Neutral.Neutral30,
  },
  infoContainer: {
    width: "100%",
    marginTop: 10,
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
