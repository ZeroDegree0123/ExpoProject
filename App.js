// import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, Switch } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";

import HomeScreen from "./app/screens/HomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import Card from "./app/components/Card";
import MessagesScreen from "./app/screens/MessagesScreen";
import AccountScreen from "./app/screens/AccountScreen";
import ListingScreen from "./app/screens/ListingScreen";
import Screen from "./app/components/Screen";
import AppInput from "./app/components/AppInput";
import AppPicker from "./app/components/AppPicker";
import AppText from "./app/components/AppText";

const categories = [
  { 
    label: "Furniture",
    value: 1
  },
  { 
    label: "Clothing",
    value: 2
  },
  { 
    label: "Electronics",
    value: 3
  },
]

export default function App() {
  const [category, setCategory] = useState()

  return (
    <>
      <Screen>
        <AppPicker
          selectedItem={category}
          onSelectItem={item => setCategory(item)}
          items={categories} 
          icon="apps" 
          placeholder="Category"
        /> 
        <AppInput icon="email" placeholder="email"/>
      </Screen>
      {/* 
      <ListingScreen/>
      <AccountScreen/>
      <ListingDetailsScreen/>
      <MessagesScreen/>
      <HomeScreen/> 
      <ViewImageScreen/>
      */}
    </>
  );
}



