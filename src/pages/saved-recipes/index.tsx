import React, {ReactElement} from "react";
import {Routes} from "../../config/routes";
import {Neutral} from "../../config/themes";
import {useNavigation} from "@react-navigation/native";
import {ScreenRouteProp} from "../../types/navigation";
import {FlatList, StyleSheet, TouchableOpacity, View, Text} from "react-native";

const ListDivider = (): ReactElement => <View style={styles.listDivider} />;

export default function Page(): ReactElement {
  const {navigate} = useNavigation<ScreenRouteProp>();

  return (
    <View style={styles.container}>
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
    marginVertical: 20,
    backgroundColor: Neutral.Neutral30,
  },
  list: {
    paddingBottom: 20,
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
