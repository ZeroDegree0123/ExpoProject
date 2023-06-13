import React from 'react';
import { StyleSheet, View } from 'react-native';
import Icon from './Icon';
import AppText from './AppText';

export default function CategoryPickerItem({item, onPress}) {
    return (
        <View style={styles.container}>
            <Icon
                backgroundColor={item.backgroundColor}
                name={item.icon}
                size={80}
            />
            <AppText style={styles.label}>{item.label}</AppText>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "33%", 
        alignItems: "center",
        paddingHorizontal: 25,
        paddingVertical: 15,
    },
    label: {
        marginTop: 10,
        textAlign: "center"
    }
})