import React from "react";
import "react-native-gesture-handler";
import StackNav from "./navigation/navigate";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins: require("./assets/fonts/Poppins-Regular.ttf"),
    PoppinsSemiBold: require("./assets/fonts/Poppins-SemiBold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return <StackNav />;
}
