import {Text} from "react-native";
import React, {ReactElement} from "react";
import {Routes} from "../../../config/routes";
import {RouteProp, useRoute} from "@react-navigation/native";
import {NavigationParamList} from "../../../types/navigation";

export default function Page(): ReactElement {
  const {params} = useRoute<RouteProp<NavigationParamList, Routes.EditRecipe>>();
  console.log(params.recipeId);
  return (
    <Text>Edit recipe</Text>
  );
}
