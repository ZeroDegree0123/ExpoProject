import React from 'react';
import { StyleSheet, Image, View } from 'react-native';

import AppText from '../components/AppText';
import ListItem from '../components/ListItem';
import colors from '../config/colors';

export default function ListingDetailsScreen(props) {
    return (
        <View>
            <Image style={styles.image} source={{ uri: "https://imgur.com/gVSNyGm.png" }}/>
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>Spahgetti Rolls</AppText>
                <AppText style={styles.price}>$100</AppText>
                <View style={styles.userContainer}>
                    <ListItem 
                        image={{ uri: "https://imgur.com/gVSNyGm.png" }}
                        title="Zach"
                        subTitle="5 Listings"
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 300,
    },
    detailsContainer: {
        padding: 20
    },
    title: {
        fontSize: 24,
        fontWeight: "500"
    },
    price: {
        color: colors.secondary,
        fontWeight: "bold",
        fontSize: 20,
        marginVertical: 10
    },
    userContainer: {
        marginVertical: 35
    }
})