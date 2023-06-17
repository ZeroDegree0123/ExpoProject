import React from 'react';
import {StyleSheet, FlatList } from "react-native";

import Screen from "../components/Screen";
import Card from '../components/Card';
import colors from '../config/colors';

const listings = [
    {
        id: 1,
        title: "red lasagnia rolls",
        price: 100, 
        image: { uri: "https://imgur.com/gVSNyGm.png" }
    },
    {
        id: 2,
        title: "beverages",
        price: 50, 
        image: { uri: "https://imgur.com/VHzeFlX.png" }
    },
]

export default function ListingScreen({ navigation }) {
    return (
        <Screen style={styles.screen}>
            <FlatList
                data={listings}
                keyExtractor={listing => listing.id.toString()}
                renderItem={({item}) => 
                    <Card
                        title={item.title}
                        subTitle={"$" + item.price}
                        image={item.image}
                        onPress={() => navigation.navigate("ListingDetails", item)}
                    />
                }
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        backgroundColor: colors.light
    }
})