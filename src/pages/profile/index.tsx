import {TextUI} from "../../UI/TextUI";
import React, {ReactElement} from "react";
import {ButtonUI} from "../../UI/ButtonUI";
import {AvatarUI} from "../../UI/AvatarUI";
import {Routes} from "../../config/routes";
import {Neutral} from "../../config/themes";
import {ProfileHeader} from "../../components/headers/profile";
import {RouteProp, useNavigation, useRoute} from "@react-navigation/native";
import {NavigationParamList, ScreenRouteProp} from "../../types/navigation";
import {FlatList, StyleSheet, TouchableOpacity, View, Text} from "react-native";

const ListDivider = (): ReactElement => <View style={styles.listDivider} />;

export default function Page(): ReactElement {
  const {navigate} = useNavigation<ScreenRouteProp>();
  const {params} = useRoute<RouteProp<NavigationParamList, Routes.Profile>>();
  console.log(params?.userId);
  return (
    <View style={styles.container}>
      <ProfileHeader
        title="My profile"
        showLogoutBtn={!(params?.userId)}
        showReturnBtn={!!(params?.userId)}
      />
      <View style={styles.userInfo}>
        <View style={styles.userAvatarContainer}>
          <AvatarUI
            login="Max"
            size="large"
          />
          {
            (params?.userId) ?
              <ButtonUI
                size="small"
                title="Follow"
                variant="primary"
                style={styles.button}
              /> :
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
        >Robert hurtson</TextUI>
        <TextUI
          variant="label"
          style={styles.description}
        >Hello world I’m lorenz florenza, I’m from Indonesia.</TextUI>
        <View style={styles.info}>
          <View>
            <TextUI variant="small">Recipes</TextUI>
            <TextUI
              variant="h5"
              isBold={true}
            >14</TextUI>
          </View>
          <View style={styles.verticalDivider}/>
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
          </View>
        </View>
      </View>
      <View style={styles.horizontalDivider}/>
      <FlatList
        data={[1,2,3,4,5,6,7,8,9,10]}
        contentContainerStyle={styles.list}
        ItemSeparatorComponent={ListDivider}
        keyExtractor={(item): string => item.toString()}
        renderItem={({item}: {item: number}): ReactElement => {
          return (
            <TouchableOpacity
              style={styles.recipeCard}
              onPress={(): void => navigate(Routes.Recipe, {recipeId: item.toString()})}
            >
              <Text>{item}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Neutral.Neutral0,
  },
  userInfo: {
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
  verticalDivider: {
    width: 1,
    height: "100%",
    marginHorizontal: 10,
    backgroundColor: Neutral.Neutral30,
  },
  horizontalDivider: {
    height: 1,
    width: "100%",
    marginTop: 20,
    backgroundColor: Neutral.Neutral30,
  },
  list: {
    paddingVertical: 20,
    alignItems: "center",
  },
  listDivider: {
    marginVertical: 5,
  },
  recipeCard: {
    width: 335,
    height: 223,
    borderRadius: 10,
    backgroundColor: Neutral.Neutral30,
  },
});
