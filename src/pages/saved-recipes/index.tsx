import React, {ReactElement} from "react";
import {Routes} from "../../config/routes";
import {Neutral} from "../../config/themes";
import {Header} from "../../components/headers/header";
import {useNavigation} from "@react-navigation/native";
import {ScreenRouteProp} from "../../types/navigation";
import {FlatList, StyleSheet, TouchableOpacity, View, Text} from "react-native";

const ListDivider = (): ReactElement => <View style={styles.listDivider} />;

export default function Page(): ReactElement {
  const {navigate} = useNavigation<ScreenRouteProp>();

  return (
    <View style={styles.container}>
      <Header title="Saved recipes"/>
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
  list: {
    marginTop: 15,
    paddingBottom: 40,
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
