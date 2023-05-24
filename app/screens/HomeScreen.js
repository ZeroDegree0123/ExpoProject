import React from 'react';
import { StyleSheet, ImageBackground, View, Image, Text } from "react-native";

export default function HomeScreen(props) {
    return (
        <ImageBackground style={styles.background} source={{ uri: "https://imgur.com/cYZTkeA.png" }}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={{ uri: "https://imgur.com/oCrhunl.png" }}/>
                <Text style={{ color: "white"}}>Listen Anywhere & Everywhere</Text>
            </View>
            <View style={styles.loginButton}></View>
            <View style={styles.registerButton}></View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    loginButton: {
        width: "100%",
        height: 70,
        backgroundColor: "#fc5c65"
    },
    registerButton: {
        width: "100%",
        height: 70,
        backgroundColor: "#4ecdc4"
    },
    logoContainer: {
        position: "absolute",
        alignItems: "center",
        top: 70,
    },
    logo: {
        width: 100,
        height: 100
    },
})