import React from 'react';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { Image, StyleSheet, TouchableHighlight, View } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";


import AppText from './AppText';
import colors from '../config/colors';

export default function ListItem({ IconComponent, title, subTitle, image, onPress, renderRightActions, style, showCheverons}) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight underlayColor={"grey"} onPress={onPress}>
            <View style={[styles.container, style]}>
                {IconComponent}
                {image && <Image style={styles.image} source={image} />}
                <View style={styles.detailsContainer}>
                    <AppText style={styles.title} numberOfLines={1}>{title}</AppText>
                    {subTitle && <AppText style={styles.subTitle} numberOfLines={2}>{subTitle}</AppText>}
                </View>
                <MaterialCommunityIcons color={colors.medium} name="chevron-right" size={25}/>
            </View>
            </TouchableHighlight>
        </Swipeable>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 15,
        alignItems: "center",
        backgroundColor: colors.white
    },
    detailsContainer: {
        flex: 1,
        marginLeft: 10,
        justifyContent: "center"
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 35,
    },
    title: {
        fontWeight: "500",
    },
    subTitle: {
        color: "#6e6969"
    }
})