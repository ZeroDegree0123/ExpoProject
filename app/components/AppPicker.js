import React, { useState } from 'react';
import { Button, FlatList, Modal, StyleSheet, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons"

import colors from '../config/colors';
import defaultStyles from "../config/styles";
import AppText from './AppText';
import Screen from './Screen';
import PickerItem from './PickerItem';
// import styles from '../config/styles';

export default function AppPicker({icon, numberOfColumns = 1, items, placeholder, onSelectItem, selectedItem, width = "100%", PickerItemComponent = PickerItem}) {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={[styles.container, {width}]}>
                    {icon && 
                        <MaterialCommunityIcons 
                        name={icon} 
                        size={20} 
                        color={colors.secondary} 
                        style={styles.icon}
                        />
                    }
                    { selectedItem ? (
                        <AppText style={styles.text}>{selectedItem.label}</AppText>
                    ) : (
                        <AppText style={styles.placeholder}>{placeholder}</AppText>
                        )}
                    <MaterialCommunityIcons
                        name="chevron-down" 
                        size={20} 
                        color={colors.secondary} 
                        />
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType="slide">
                <Screen>
                    <Button title="Close"  onPress={() => setModalVisible(false)}/>
                    <FlatList
                        numColumns={numberOfColumns}
                        data={items}
                        keyExtractor={item => item.value.toString()}
                        renderItem={({item}) => 
                            <PickerItemComponent
                                item={item}
                                label={item.label}
                                onPress={() => {
                                    setModalVisible(false);
                                    onSelectItem(item);
                                }}
                            />
                        }
                    />
                </Screen>
            </Modal>  
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: colors.light,
        borderRadius: 25,
        padding: 15,
        marginVertical: 10,
    },
    icon: {
        margin: 10,

    },
    text: {
        flex: 1
    },
    placeholder: {
        color: colors.medium,
        flex: 1
    },
   
  })