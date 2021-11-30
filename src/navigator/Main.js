import React, { useEffect, useContext, useState } from "react"
import Tab from "./../navigator/Tab"
import { auth } from "./../services/firebase"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { onAuthStateChanged } from "firebase/auth"
import { AuthContext } from "./../services/AuthService"
import Loading from "../screens/Loading"
import Login from "../screens/Login"
import NickName from "../screens/NickName"
import Notification from "../screens/Notification"
import ramadanChallenge from "../screens/ramdanChallenge"
import fridayChallenge from "../screens/fridayChallenge"
import sleepTight from "../screens/sleepTight"

const Stack = createNativeStackNavigator()

export default function Main() {
    const { user, setUser } = useContext(AuthContext)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const subscriber = onAuthStateChanged(auth, (user) => {
            setUser(user)
            setLoading(false)
        })
        return subscriber
    }, [])

    if (loading) {
        return <Loading />
    }

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {user == null ? (
                <>
                    <Stack.Screen name="SignIn" component={Login} />
                </>
            ) : (
                <>
                    <Stack.Screen name="Tab" component={Tab} />
                    <Stack.Screen name="NickName" component={NickName} />
                    <Stack.Screen name="ramadanChallenge" component={ramadanChallenge} />
                    <Stack.Screen name="Notification" component={Notification} />
                    <Stack.Screen name="fridayChallenge" component={fridayChallenge} />
                    <Stack.Screen name="sleepTight" component={sleepTight} />
                </>
            )}
        </Stack.Navigator>
    )
}
