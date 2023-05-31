import React, { useState } from "react";
import { StyleSheet, FlatList, View } from "react-native";

import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import ListSeperator from "../components/ListSeperator";
import ListItemDelete from "../components/ListItemDelete";

const initialMessages = [
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
    const [messages, setMessages] = useState(initialMessages)
    const [refreshing, setRefreshing] = useState(false);

    const handleDelete = (message) => {
    //delete the message from messages
        const newMessages = messages.filter(m => m.id !== message.id);
        setMessages(newMessages);
    //call the server
    }

    return (
        <Screen>
            <FlatList
                data={messages} 
                keyExtractor={message => message.id.toString()}
                renderItem={({item}) => (
                    <ListItem
                        title={item.title}
                        subTitle={item.description}
                        image={item.image}
                        onPress={() => console.log("message selected", item)}
                        renderRightActions={() => 
                            <ListItemDelete onPress={() => handleDelete(item)}/>
                        }

                    />
                )}
                ItemSeparatorComponent={ListSeperator}
                refreshing={refreshing}
                onRefresh={
                    //calls backend for new/refreshed data
                    () => {
                        setMessages([
                            {
                                id: 2,
                                title: "T2",
                                description: "D2",
                                image: {uri: "https://imgur.com/pfv2ruS.png"}
                            },
                        ])
                    }
                }
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    
})
