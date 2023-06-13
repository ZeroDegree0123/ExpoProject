import React from "react";
import { Image, StyleSheet } from "react-native";
import * as Yup from "yup";

import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import Screen from "../components/Screen";

const validationSchema = Yup.object().shape({
    name: Yup.string().required().label("name"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
})

export default function RegisterScreen() {
    return (
        <Screen style={styles.container}>
            <Image style={styles.logo} source={{ uri: "https://imgur.com/oCrhunl.png" }}/>
            <AppForm
                initialValues={{name: "", email: "", password: ""}}
                onSubmit={values =>console.log(values)}
                validationSchema={validationSchema}
            >
                <AppFormField
                    name="name"
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="account"
                    placeholder="Name"
                    textContentType="name"
                />
                <AppFormField
                    name="email"
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="email"
                    placeholder="Email"
                    keyboardType="email-address"
                    textContentType="emailAddress"
                />
                <AppFormField
                    name="password"
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="lock"
                    placeholder="Password"
                    textContentType="password"
                    secureTextEntry
                />
                <SubmitButton title="Register"/>
            </AppForm>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,

    },
    logo: {
        alignSelf: "center",
        marginTop: 50,
        marginBottom: 20,
        width: 80,
        height: 80,
    }
})
