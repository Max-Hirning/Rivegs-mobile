import {StatusBar} from "react-native";
import Navigation from "./src/navigation";
import React, {ReactElement} from "react";
import {NavigationContainer} from "@react-navigation/native";

export default function App(): ReactElement {
  return (
    <NavigationContainer>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="white"
      />
      <Navigation/>
    </NavigationContainer>
  );
}