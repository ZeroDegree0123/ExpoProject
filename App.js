// import { StatusBar } from 'expo-status-bar';
import React from "react";
import { 
  Dimensions,
  StyleSheet, 
  StatusBar, 
  Text, 
  TouchableOpacity, 
  TouchableNativeFeedback, 
  TouchableHighlight, 
  View, 
  SafeAreaView, 
  Image,
  ImageBackground, 
  Button, 
  Alert, 
  Platform, 
} from 'react-native';
import { useDeviceOreintation } from "@react-native-community/hooks";

export default function App() {

  // console.log(Dimensions.get("screen"));
  const backgroundImage = {uri: "https://imgur.com/ksDz1mk.png"}

  return (
    <>
    {/* <ImageBackground source={backgroundImage} style={styles.container}> */}
        <View
          style={{
            flex: 1, 
            justifyContent: "space-between", //main-axis
            alignItems: "center", // secondary-axis
          }}
          >
          <View
            style={{
              alignSelf: "center",
            }}
            >
            <Image style={styles.logo} source={{uri: "https://imgur.com/AD10h8L.png"}}/>
            <Text >Dj Meeseeks</Text>
          </View>
          <>
            <View 
              style={{
                backgroundColor: "tomato",
                width: "100%",
                height: 100,
                zIndex: 100
              }}
              />
            <View
              style={{
                backgroundColor: "teal",
                width: "100%",
                height: 80
              }}
              />
          </>
        </View>
      {/* </ImageBackground> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%"
  },
  logo: {
    width: 80,
    height: 80,
  },

})


