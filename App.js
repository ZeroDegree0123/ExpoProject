// import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, TextInput, Switch, Button, Image } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker"
import * as Permissions from "expo-permissions";

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
import ImageInput from "./app/components/ImageInput";
import ImageInputList from "./app/components/ImageInputList";

const Link = () => {
  const navigation = useNavigation()
  return (
    <Button
      title="Click"
      onPress={() => navigation.navigate("TweetDetails")}
    />
  )
}

////////////*SCREENS*/////////////
const Tweets = ({ navigation }) => (
  <Screen>
    <Text>Tweets</Text>
    {/* <Link/> */}
    <Button
      title="View Tweet"
      onPress={() => navigation.navigate("TweetDetails", { id: 1 })}
      /> 
  </Screen>
)

const TweetDetails = ({ route }) => (
  <Screen>
    <Text>Details {route.params.id}</Text>
  </Screen>
)

const Account = ({ navigation }) => (
  <Screen>
    <Text>Account</Text>
  </Screen>
)

////////////*STACK*/////////////
const Stack = createNativeStackNavigator()
const StackNavigator = () => (
  <Stack.Navigator
  screenOptions={{
    headerStyle: { backgroundColor: "dodgerblue"},
    headerTintColor: "white",
  }}>
    <Stack.Screen 
      name="Tweets" 
      component={Tweets}
      options={{
        headerStyle: { backgroundColor: "tomato"},
        headerTintColor: "white",
      }}
      />
    <Stack.Screen
      name="TweetDetails" 
      component={TweetDetails}
      />
  </Stack.Navigator>
)

////////////*TABS*/////////////
const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Feed" component={Tweets}/>
    <Tab.Screen name="Account" component={Account}/>
  </Tab.Navigator>
)

export default function App() {
  

  return (
    <>
      <NavigationContainer>
        <TabNavigator/>
        {/* <StackNavigator/> */}
      </NavigationContainer>
      {/* 
      <ListingEditScreen/>
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



