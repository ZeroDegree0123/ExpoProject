import React from 'react';
import { StyleSheet, ImageBackground, View, Image, Text } from "react-native";

import AppButton from '../components/AppButton';
import colors from '../config/colors';

export default function HomeScreen(props) {

    return (
        <ImageBackground blurRadius={2} style={styles.background} source={{ uri: "https://imgur.com/cYZTkeA.png" }}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={{ uri: "https://imgur.com/oCrhunl.png" }}/>
                <Text style={styles.text}>Listen Anywhere & Everywhere</Text>
            </View>
            <View style={styles.buttonContainer}>
                <AppButton title="Login" onPress={() => console.log("Logged In")}/>
                <AppButton title="Register" color="secondary" />
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
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
    text: {
        color: colors.white,
        fontWeight: "bold",
        fontSize: 20,
        marginTop: 15,
    },
    buttonContainer: {
        justifyContent: "center",
        alignItems: "center",
        padding: 5,
        width: "100%",
    }
})