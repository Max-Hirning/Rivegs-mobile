import {IUser} from "../types/user";
import {TextUI} from "@src/UI/TextUI";
import React, {ReactElement} from "react";
import {ButtonUI} from "@src/UI/ButtonUI";
import {AvatarUI} from "@src/UI/AvatarUI";
import {Routes} from "@src/config/routes";
import {StyleSheet, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {ScreenRouteProp} from "@src/types/navigation";

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
        {/* {
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
        } */}
        {
          (isUserProfile) &&
            <ButtonUI
              size="small"
              title="Edit"
              variant="secondary"
              style={styles.button}
              onPress={(): void => navigate(Routes.Settings)}
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
    marginTop: 15,
    maxWidth: 380,
    width: "100%",
    paddingHorizontal: 25,
  },
  userAvatarContainer: {
    display: "flex",
    marginBottom: 30,
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    height: 36,
    width: 107,
    marginLeft: 50,
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
