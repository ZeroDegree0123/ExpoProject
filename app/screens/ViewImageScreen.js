import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import {MaterialCommunityIcons} from "@expo/vector-icons"

import colors from "../config/colors"

export default function ViewImageScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}>
                <MaterialCommunityIcons name="close" color="white" size={35}></MaterialCommunityIcons>
            </View>
            <View style={styles.deleteIcon}>
                <MaterialCommunityIcons name="trash-can-outline" color="white" size={35}></MaterialCommunityIcons>
            </View>
            <Image
                resizeMode="contain" 
                style={styles.albumCover} 
                source={{ uri: "https://imgur.com/VYB1MzV.png"}}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.black,
        flex: 1
    },
    albumCover: {
        width: "100%",
        height: "100%"
    },
    closeIcon: {
        position: "absolute",
        top: 40,
        left: 30,
    },
    deleteIcon: {
        position: "absolute",
        top: 40,
        right: 30,
    },
})
