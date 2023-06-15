import React from 'react';
import { useEffect } from 'react';
import { StyleSheet, View, Image, TouchableWithoutFeedback, Alert } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker"

import colors from '../config/colors';

export default function ImageInput({ imageUri, onChangeImage }) {

    useEffect(() => {
        const requestPermission = async () => {
          const {granted} = await ImagePicker.requestCameraPermissionsAsync();
          if (!granted) alert("You need to enable permision");
        };
        requestPermission();
    
      }, [])

    const handlePress = () => {
        if (!imageUri) {
            selectImage();
        } else  {
            Alert.alert("Delete", "Are you sure you want to delete this image?", [
                { text: "Yes", onPress: () => onChangeImage(null) },
                { text: "No" }
            ])
        } 

    }

    const selectImage = async () => {
        try {
          const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality: 0.5
          });
          if (!result.canceled) onChangeImage(result.assets[0].uri);
    
        } catch (error) {
          console.log(error)
        }
      }

    return (
        <TouchableWithoutFeedback onPress={handlePress}>
            <View style={styles.container}>
                { imageUri ?
                    <Image style={styles.image} source={{ uri: imageUri }}/>    
                    :
                    <MaterialCommunityIcons name="camera" size={40} color={colors.medium}/>
                }

                {/* {!imageUri && <MaterialCommunityIcons name="camera" size={40} color={colors.medium}/>} 
                {imageUri && <Image style={styles.image} source={{ uri: imageUri }}/>} */}

            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.light,
        borderRadius: 15,
        height: 100,
        width: 100,
        overflow: "hidden",
    },
    image: {
        width: "100%",
        height: "100%"
    },
});