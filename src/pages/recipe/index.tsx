import {useSelector} from "react-redux";
import {Routes} from "@src/config/routes";
import {Neutral} from "@src/config/themes";
import {RootState} from "@src/modules/store";
import MoreIcon from "@src/assets/icons/menu";
import React, {ReactElement, useState} from "react";
import {Header} from "@src/components/headers/header";
import {IStepIngredient} from "@src/modules/recipeForm";
import ArrowLeftIcon from "@src/assets/icons/arrow/left";
import {TabsNavigation} from "@src/components/tabsNavigation";
import {PageScroll} from "@src/components/wrappers/pageScroll";
import {AuthorInfo, RecipeMenu, useGetRecipe} from "@src/modules/recipe";
import {NavigationParamList, ScreenRouteProp} from "@src/types/navigation";
import {RouteProp, useNavigation, useRoute} from "@react-navigation/native";
import {StyleSheet, Text, TouchableOpacity, View, Image, TextStyle} from "react-native";

export default function Page(): ReactElement {
  const [menu, setMenu] = useState<boolean>(false);
  const {goBack} = useNavigation<ScreenRouteProp>();
  const profile = useSelector((state: RootState) => state.profile);
  const {params} = useRoute<RouteProp<NavigationParamList, Routes.Recipe>>();
  const {data, isLoading, isError} = useGetRecipe(params.recipeId);

  const elStyles = ({bold, italic, underlined}: Pick<IStepIngredient, "bold"|"italic"|"underlined">): TextStyle => {
    const styles: TextStyle = {};
    if(bold) {styles.fontWeight = "bold";}
    if(italic) {styles.fontStyle = "italic";}
    if(underlined) {styles.textDecorationLine = "underline";}
    return styles;
  };

  if(!data || isLoading || isError) {return <></>;}

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
        rightIcon={
          <TouchableOpacity onPress={(): void => setMenu(true)}>
            <MoreIcon
              width={30}
              height={30}
              color={Neutral.Neutral100}
            />
          </TouchableOpacity>
        }
      />
      <RecipeMenu
        menu={menu}
        recipeState={{
          title: data.data.title,
          steps: data.data.steps,
          typeId: data.data.type._id,
          ingredients: data.data.ingredients,
          description: data.data.description,
        }}
        _id={data.data._id}
        rate={data.data.rate}
        isAuthed={!!profile.data}
        recipeImage={data.data.image}
        closeMenu={(): void => setMenu(false)}
        savedRecipes={profile.data?.savedRecipes || []}
        isAuthor={profile.data?._id === data.data.author._id}
      />
      <PageScroll listStyle={styles.list}>
        <>
          <Image
            style={styles.image}
            source={{uri: data.data.image}}
          />
          <AuthorInfo
            rate={data.data.rate}
            authorId={data.data.author._id}
            authorLogin={data.data.author.login}
            authorAvatar={data.data.author.avatar}
          />
          <TabsNavigation
            tabs={[
              {
                label: "Steps",
                content: (
                  <View style={styles.elList}>
                    {(data.data.steps || []).map(({_id, value, ...stepStyles}: IStepIngredient) => (
                      <View
                        key={_id}
                        style={[styles.el, elStyles(stepStyles)]}
                      >
                        <Text>{value}</Text>
                      </View>
                    ))}
                  </View>
                ),
              },
              {
                label: "Ingredients",
                content: (
                  <View style={styles.elList}>
                    {(data.data.ingredients || []).map(({_id, value, ...ingredientStyle}: IStepIngredient) => (
                      <View
                        key={_id}
                        style={[styles.el, elStyles(ingredientStyle)]}
                      >
                        <Text>{value}</Text>
                      </View>
                    ))}
                  </View>
                ),
              },
            ]}
          />
        </>
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
  image: {
    width: 335,
    height: 223,
    marginTop: 10,
    minWidth: 335,
    minHeight: 223,
    borderRadius: 12,
    backgroundColor: Neutral.Neutral30,
  },
  elList: {
    gap: 10,
    alignItems: "center",
  },
  el: {
    width: 335,
    padding: 10,
    borderRadius: 10,
    backgroundColor: Neutral.Neutral10,
  },
});
