import React from "react";
import { StyleSheet, View } from "react-native";



export default function ListSeperator() {
    return <View style={styles.seperator}/>
}

const styles = StyleSheet.create({
    seperator: {
        width: "100%",
        height: 1, 
        backgroundColor: "red"
    }
})