import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons"

import colors from '../config/colors';
import defaultStyles from "../config/styles";

export default function AppInput({icon, width = "100%", ...otherProps}) {
    return (
        <View style={[styles.container, { width }]}>
            {icon && <MaterialCommunityIcons name={icon} size={20} color={colors.secondary} style={styles.icon}/>}
            <TextInput placeholderTextColor={defaultStyles.colors.medium} style={defaultStyles.text} {...otherProps}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        borderRadius: 25,
        flexDirection: "row",
        padding: 15,
        marginVertical: 10
    },
    icon: {
        margin: 10,

    }
  })