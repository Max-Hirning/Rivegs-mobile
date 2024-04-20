import {useSelector} from "react-redux";
import {Neutral} from "@src/config/themes";
import {RootState} from "@src/modules/store";
import MoreIcon from "@src/assets/icons/more";
import React, {ReactElement, useState} from "react";
import {Header} from "@src/components/headers/header";
import {ProfileInfo, ProfileMenu} from "@src/modules/profile";
import {StyleSheet, TouchableOpacity, View} from "react-native";
import {RecipesList, useGetRecipes} from "@src/modules/recipesList";

export default function Page(): ReactElement {
  const [menu, setMenu] = useState<boolean>(false);
  const profile = useSelector((state: RootState) => state.profile);
  const {data, isError, isLoading, refetch} = useGetRecipes({recipesIds: profile.data?.recipeIds || []});

  if(!profile.data) {return <></>;}

  return (
    <View style={styles.container}>
      <Header
        rightIcon={
          <TouchableOpacity onPress={(): void => setMenu(true)}>
            <MoreIcon
              width={24}
              height={24}
              color={Neutral.Neutral100}
            />
          </TouchableOpacity>
        }
        title="My profile"
      />
      <ProfileMenu
        menu={menu}
        closeMenu={(): void => setMenu(false)}
      />
      <ProfileInfo
        isUserProfile={true}
        login={profile.data.login}
        avatar={profile.data.avatar}
        description={profile.data.description}
        recipesAmount={profile.data.recipeIds.length}
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
    backgroundColor: Neutral.Neutral0,
  },
  horizontalDivider: {
    height: 1,
    width: "100%",
    marginTop: 20,
    backgroundColor: Neutral.Neutral30,
  },
});
