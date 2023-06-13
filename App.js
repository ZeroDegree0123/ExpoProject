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
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import ListItem from "./app/components/ListItem";

export default function App() {

  return (
    <>
      <ListingEditScreen/>
      {/* 
      <MessagesScreen/>
      <HomeScreen/> 
      <ListingScreen/>
      <AccountScreen/>
      <LoginScreen/>
      <RegisterScreen/>
      <ListingDetailsScreen/>
      <ViewImageScreen/>
      */}
    </>
  );
}



