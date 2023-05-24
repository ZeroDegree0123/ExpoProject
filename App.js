// import { StatusBar } from 'expo-status-bar';
import React from "react";
import { View } from 'react-native';
import { useDeviceOreintation } from "@react-native-community/hooks";
import HomeScreen from "./app/screens/HomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";

export default function App() {

  // console.log(Dimensions.get("screen"));
  const backgroundImage = {uri: "https://imgur.com/ksDz1mk.png"}

  return (
    // <HomeScreen/>
    <ViewImageScreen/>
  );
}



