import React from "react";
import { StyleSheet } from "react-native"
import * as Yup from "yup";

import { AppForm, AppFormField, SubmitButton, AppFormPicker } from "../components/forms";
import Screen from "../components/Screen";
import CategoryPickerItem from "../components/CategoryPickerItem";
import AppFormImagePicker from "../components/forms/AppFormImagePicker";
import useLocation from "../hooks/useLocation";

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    category: Yup.object().required().nullable().label("Category"),
    description: Yup.string().label("Description"),
    images: Yup.array().min(1, "Please select at least one image")
})

const categories = [
    { label: "Furniture", value: 1, backgroundColor: "red", icon: "apps"},
    { label: "Clothing", value: 2, backgroundColor: "blue", icon: "email"},
    { label: "Camera", value: 3, backgroundColor: "green", icon: "lock"},
]

export default function ListingEditScreen() {
   const location = useLocation();

    return (
        <Screen style={styles.container}>
            <AppForm
                initialValues={{
                    title: "",
                    price: "",
                    description: "",
                    category: null,
                    images: [],
                }}
                onSubmit={(values) => console.log(location)}
                validationSchema={validationSchema}
            >
                <AppFormImagePicker
                    name="images"
                />
                <AppFormField
                    name="title"
                    maxLength={255} 
                    placeholder="Title"
                    />
                <AppFormField
                    name="price"
                    maxLength={8}
                    keyboardType="numeric"
                    placeholder="Price"
                    width={120}
                />
                <AppFormField
                    name="description"
                    multiline
                    numberOfLines={3}
                    maxLength={300}
                    placeholder="description"
                />
                <AppFormPicker
                    name="category"
                    items={categories}
                    placeholder="Category"
                    width="50%"
                    PickerItemComponent={CategoryPickerItem}
                    numberOfColumns={3}
                />
                <SubmitButton title="Post"/>
            </AppForm>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    }
})