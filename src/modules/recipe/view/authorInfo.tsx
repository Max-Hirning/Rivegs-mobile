import React, {ReactElement} from "react";
import {TextUI} from "../../../UI/TextUI";
import {AvatarUI} from "../../../UI/AvatarUI";
import {ButtonUI} from "../../../UI/ButtonUI";
import {Routes} from "../../../config/routes";
import {StyleSheet, View} from "react-native";
import {Rating} from "../../../config/themes";
import StarIcon from "../../../assets/icons/star";
import {useNavigation} from "@react-navigation/native";
import {ScreenRouteProp} from "../../../types/navigation";

interface IProps {
  rate: number;
  authorId: string;
  authorLogin: string;
  authorAvatar?: string;
}

export function AuthorInfo({rate, authorLogin, authorAvatar, authorId}: IProps): ReactElement {
  const {navigate} = useNavigation<ScreenRouteProp>();

  return (
    <View style={styles.container}>
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
        >{rate}</TextUI>
      </View>
      <View style={styles.authorContainer}>
        <View style={styles.author}>
          <AvatarUI
            size="small"
            login={authorLogin}
            source={authorAvatar}
          />
          <TextUI
            variant="p"
            isBold={true}
            style={styles.authorLogin}
          >{authorLogin}</TextUI>
        </View>
        <ButtonUI
          size="small"
          title="Visit"
          variant="primary"
          onPress={(): void => navigate(Routes.AuthorProfile, {userId: authorId})}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: 10,
    marginBottom: 30,
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
});
