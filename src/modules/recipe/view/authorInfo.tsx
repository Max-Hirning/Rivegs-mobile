import {TextUI} from "@src/UI/TextUI";
import React, {ReactElement} from "react";
import {AvatarUI} from "@src/UI/AvatarUI";
import {ButtonUI} from "@src/UI/ButtonUI";
import {Routes} from "@src/config/routes";
import {Rating} from "@src/config/themes";
import {StyleSheet, View} from "react-native";
import StarIcon from "@src/assets/icons/star";
import {ScreenRouteProp} from "@src/types/navigation";
import {useNavigation} from "@react-navigation/native";

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
          fill={Rating.Rating100}
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
    maxWidth: 335,
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
