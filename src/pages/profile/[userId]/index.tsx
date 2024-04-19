import React, {ReactElement} from "react";
import {Neutral} from "@src/config/themes";
import {RecipesList} from "@src/modules/recipesList";
import {Header} from "@src/components/headers/header";
import {ScreenRouteProp} from "@src/types/navigation";
import {useNavigation} from "@react-navigation/native";
import ArrowLeftIcon from "@src/assets/icons/arrows/left";
import {ProfileInfo, useGetUser} from "@src/modules/profile";
import {StyleSheet, TouchableOpacity, View} from "react-native";

export default function Page(): ReactElement {
  const {data, isLoading, isError} = useGetUser();
  const {goBack} = useNavigation<ScreenRouteProp>();

  if(!data || isLoading || isError) {return <></>;}
  return (
    <View style={styles.container}>
      <Header
        leftIcon={
          <TouchableOpacity onPress={(): void => goBack()}>
            <ArrowLeftIcon
              width={24}
              height={24}
              color={Neutral.Neutral100}
            />
          </TouchableOpacity>
        }
      />
      <ProfileInfo
        login={data.data.login}
        avatar={data.data.avatar}
        description={data.data.description}
        recipesAmount={data.data.recipeIds.length}
      />
      <View style={styles.horizontalDivider}/>
      <RecipesList filters={{
        recipesIds: data.data.recipeIds,
      }}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Neutral.Neutral0,
  },
  horizontalDivider: {
    height: 1,
    width: "100%",
    marginTop: 20,
    backgroundColor: Neutral.Neutral30,
  },
});
