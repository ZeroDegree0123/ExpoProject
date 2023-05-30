import React from "react";
import { StyleSheet, FlatList, View } from "react-native";

import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import ListSeperator from "../components/ListSeperator";

const messages = [
    {
        id: 1,
        title: "T1",
        description: "D1",
        image: {uri: "https://imgur.com/VHzeFlX.png"}
    },
    {
        id: 2,
        title: "T2",
        description: "D2",
        image: {uri: "https://imgur.com/pfv2ruS.png"}
    },
]

export default function MessagesScreen(props) {
    return (
        <Screen>
            <FlatList
                data={messages} 
                keyExtractor={message => message.id.toString()}
                renderItem={({item}) => (
                    <ListItem
                        title={item.title}
                        subTitle={item.description}
                        image={item.image}/>
                )}
                ItemSeparatorComponent={ListSeperator}
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    
})
