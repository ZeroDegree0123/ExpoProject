import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import Icon from "../components/Icon";
import colors from "../config/colors";
import ListSeperator from "../components/ListSeperator";

const menuItems = [
    {
        title: "My Listings",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: colors.primary
        }
    },
    {
        title: "My Messages",
        icon: {
            name: "email",
            backgroundColor: colors.secondary
        }
    }
]

export default function AccountScreen() {
    return (
        <Screen style={styles.container}>
            <View style={styles.container}>
                <ListItem
                    image={{ uri: "https://imgur.com/gVSNyGm.png" }}
                    // IconComponent={<Icon name="email"/>}
                    title="Zachary Vasquez"
                    subTitle="zach@email.com"
                    style={styles.profile}
                />
            </View>
            <View style={styles.container}>
                <FlatList 
                    data={menuItems}
                    keyExtractor={menuItem => menuItem.title}
                    ItemSeparatorComponent={ListSeperator}
                    renderItem={({ item }) => 
                        <ListItem
                            title={item.title}
                            IconComponent={
                                <Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor}/>
                            }
                        />
                    }
                />
            </View>
            <ListItem
                title="Log Out"
                IconComponent={
                    <Icon name="logout" backgroundColor="#ffe66d"/>
                }
            />
            {/* <Icon
                name="email"
                size={50}
                backgroundColor="red"
                iconColor="white"
            /> */}
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        paddingTop: 10,
        backgroundColor: colors.light
    }
})
