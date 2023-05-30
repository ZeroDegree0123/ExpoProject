// import { StatusBar } from 'expo-status-bar';
import React from "react";
import { View, Text } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";

import HomeScreen from "./app/screens/HomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import Card from "./app/components/Card";
import MessagesScreen from "./app/screens/MessagesScreen";

export default function App() {

  // console.log(Dimensions.get("screen"));
  // const backgroundImage = {uri: "https://imgur.com/ksDz1mk.png"}

  return (
    <>
      <MessagesScreen/>
      {/* 
      <ListingDetailsScreen/>
      <HomeScreen/> 
      <ViewImageScreen/>
      */}
    </>
  );
}



