import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

import AppText from './AppText';
import colors from '../config/colors';

export default function Card({title, subTitle, image}) {
    return (
        <View style={styles.card}>
            <Image style={styles.image} source={image}/>
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>{title}</AppText>
                <AppText style={styles.subTitle}>{subTitle}</AppText>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        overflow: "hidden",
        borderRadius: 15,
        backgroundColor: colors.white,
        marginBottom: 15,
    },
    detailsContainer: {
        padding: 20
    },
    title: {
        marginBottom: 10,
    },
    subTitle: {
        color: "green",
        fontWeight: "bold"
    },
    image: {
        width: "100%",
        height: 200,

    }
})