import React, {ReactElement} from "react";
import {Routes} from "@src/config/routes";
import {Neutral} from "@src/config/themes";
import {useGetRecipe} from "@src/modules/recipe";
import {RecipeForm} from "@src/modules/recipeForm";
import {Header} from "@src/components/headers/header";
import ArrowLeftIcon from "@src/assets/icons/arrows/left";
import {PageScroll} from "@src/components/wrappers/pageScroll";
import {StyleSheet, TouchableOpacity, View} from "react-native";
import {NavigationParamList, ScreenRouteProp} from "@src/types/navigation";
import {RouteProp, useNavigation, useRoute} from "@react-navigation/native";

export default function Page(): ReactElement {
  const {goBack} = useNavigation<ScreenRouteProp>();
  const {params} = useRoute<RouteProp<NavigationParamList, Routes.EditRecipe>>();
  const {data} = useGetRecipe(params.recipeId);
  console.log(data?.data);
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
      <PageScroll listStyle={styles.list}>
        {
          (data?.data) ?
            <RecipeForm initialState={{
              steps: data.data.steps,
              title: data.data.title,
              typeId: data.data.type._id,
              ingredients: data.data.ingredients,
              description: data.data.description,
            }}/> :
            <></>
        }
      </PageScroll>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Neutral.Neutral0,
  },
  list: {
    paddingTop: 10,
    paddingBottom: 25,
    paddingHorizontal: 25,
  },
});
