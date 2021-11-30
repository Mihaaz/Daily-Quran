// In App.js in a new project

import React, { useState, useContext, useEffect } from "react"
import { Button, View, Text } from "react-native"
import {
    NavigationContainer,
    useNavigationContainerRef,
} from "@react-navigation/native"
import { useNavigation } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { AuthProvider } from "./src/services/AuthService"
import { auth } from "./src/services/firebase"
import { getRedirectResult, GoogleAuthProvider } from "firebase/auth"
import { createUser, checkNickName } from "./src/services/ApiService"
import Main from "./src/navigator/Main"

const Stack = createNativeStackNavigator()

function App() {
    const navigationRef = useNavigationContainerRef()

    useEffect(() => {
        getRedirectResult(auth)
            .then((result) => {
                // The signed-in user info.
                const user = result.user
                createUser(user)
                checkNickName(user).then((val) => {
                    if (!val) {
                        navigationRef.navigate("NickName")
                    }
                })
            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code
                const errorMessage = error.message
                // The email of the user's account used.
                const email = error.email
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error)
                // ...
            })
    }, [])

    return (
        <AuthProvider>
            <NavigationContainer ref={navigationRef}>
                <Main />
            </NavigationContainer>
        </AuthProvider>
    )
}

export default App
