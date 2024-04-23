import React, {ReactElement} from "react";
import {Neutral} from "@src/config/themes";
import {Header} from "@src/components/headers/header";
import {ScreenRouteProp} from "@src/types/navigation";
import {useNavigation} from "@react-navigation/native";
import ArrowLeftIcon from "@src/assets/icons/arrow/left";
import {ProfileInfo, useGetUser} from "@src/modules/profile";
import {StyleSheet, TouchableOpacity, View} from "react-native";
import {RecipesList, useGetRecipes} from "@src/modules/recipesList";

export default function Page(): ReactElement {
  const user = useGetUser();
  const {goBack} = useNavigation<ScreenRouteProp>();
  const {data, isError, isLoading, refetch} = useGetRecipes({recipesIds: user.data?.data.recipeIds || []});

  if(!user.data || user.isLoading || user.isError) {return <></>;}
  return (
    <View style={styles.container}>
      <Header
        leftIcon={
          <TouchableOpacity onPress={(): void => goBack()}>
            <ArrowLeftIcon
              width={30}
              height={30}
              color={Neutral.Neutral100}
            />
          </TouchableOpacity>
        }
      />
      <ProfileInfo
        login={user.data.data.login}
        avatar={user.data.data.avatar}
        description={user.data.data.description}
        recipesAmount={user.data.data.recipeIds.length}
      />
      <View style={styles.horizontalDivider}/>
      <RecipesList
        refetch={refetch}
        isError={isError}
        isLoading={isLoading}
        nextPage={data?.data.next}
        data={data?.data.data || []}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: Neutral.Neutral0,
  },
  horizontalDivider: {
    height: 1,
    width: "100%",
    marginTop: 20,
    backgroundColor: Neutral.Neutral30,
  },
});
