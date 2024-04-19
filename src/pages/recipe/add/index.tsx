import React, {ReactElement} from "react";
import {Neutral} from "@src/config/themes";
import {ScreenRouteProp} from "@src/types/navigation";
import {Header} from "@src/components/headers/header";
import {useNavigation} from "@react-navigation/native";
import ArrowLeftIcon from "@src/assets/icons/arrows/left";
import {PageScroll} from "@src/components/wrappers/pageScroll";
import {StyleSheet, TouchableOpacity, View} from "react-native";
import {RecipeForm, recipeFormInitialValue} from "@src/modules/recipeForm";

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
