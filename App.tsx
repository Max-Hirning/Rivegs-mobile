import {Provider} from "react-redux";
import {StatusBar} from "react-native";
import Navigation from "@src/navigation";
import {store} from "@src/modules/store";
import React, {ReactElement} from "react";
import {Loader} from "@src/components/loader";
import Toast from "react-native-toast-message";
import {NavigationContainer} from "@react-navigation/native";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App(): ReactElement {
  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <StatusBar
            barStyle="dark-content"
            backgroundColor="white"
          />
          <Loader/>
          <Navigation/>
          <Toast />
        </Provider>
      </QueryClientProvider>
    </NavigationContainer>
  );
}
