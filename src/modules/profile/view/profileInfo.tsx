import {IUser} from "../types/user";
import {TextUI} from "../../../UI/TextUI";
import React, {ReactElement} from "react";
import {ButtonUI} from "../../../UI/ButtonUI";
import {AvatarUI} from "../../../UI/AvatarUI";
import {Routes} from "../../../config/routes";
import {StyleSheet, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {ScreenRouteProp} from "../../../types/navigation";

interface IProps extends Pick<IUser, "login"|"avatar"> {
  description?: string;
  recipesAmount: number;
  isUserProfile?: boolean;
}

export function ProfileInfo({login, avatar, description, isUserProfile, recipesAmount}: IProps): ReactElement {
  const {navigate} = useNavigation<ScreenRouteProp>();

  return (
    <View style={styles.container}>
      <View style={styles.userAvatarContainer}>
        <AvatarUI
          size="large"
          login={login}
          source={avatar}
        />
        {
          (isUserProfile) ?
            <ButtonUI
              size="small"
              title="Edit"
              variant="secondary"
              style={styles.button}
              onPress={(): void => navigate(Routes.Settings)}
            /> :
            <ButtonUI
              size="small"
              title="Follow"
              variant="primary"
              style={styles.button}
            />
        }
      </View>
      <TextUI
        variant="h5"
        isBold={true}
      >{login}</TextUI>
      {
        (description) &&
        <TextUI
          variant="label"
          style={styles.description}
        >{description}</TextUI>
      }
      <View style={styles.info}>
        <View>
          <TextUI variant="small">Recipes</TextUI>
          <TextUI
            variant="h5"
            isBold={true}
          >{recipesAmount}</TextUI>
        </View>
        {/* <View style={styles.verticalDivider}/>
        <View>
          <TextUI variant="small">Followers</TextUI>
          <TextUI
            variant="h5"
            isBold={true}
          >14K</TextUI>
        </View>
        <View style={styles.verticalDivider}/>
        <View>
          <TextUI variant="small">Following</TextUI>
          <TextUI
            variant="h5"
            isBold={true}
          >120</TextUI>
        </View> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: 15,
    paddingHorizontal: 25,
  },
  userAvatarContainer: {
    maxWidth: 375,
    display: "flex",
    marginBottom: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  button: {
    height: 36,
    width: 107,
  },
  description: {
    marginTop: 10,
  },
  info: {
    marginTop: 25,
    display: "flex",
    flexDirection: "row",
  },
});
