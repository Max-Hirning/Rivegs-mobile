import React, {ReactElement} from "react";
import {Neutral} from "../../../config/themes";
import {useNavigation} from "@react-navigation/native";
import {ScreenRouteProp} from "../../../types/navigation";
import {Header} from "../../../components/headers/header";
import ArrowLeftIcon from "../../../assets/icons/arrows/left";
import {StyleSheet, TouchableOpacity, View} from "react-native";
import {PageScroll} from "../../../components/wrappers/pageScroll";
import {RecipeForm, recipeFormInitialValue} from "../../../modules/recipeForm";

export default function Page(): ReactElement {
  const {goBack} = useNavigation<ScreenRouteProp>();

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
        <RecipeForm initialState={recipeFormInitialValue}/>
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
