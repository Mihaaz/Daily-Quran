import React, { useEffect, useContext } from "react"
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import Home from "../screens/Home"
import { useNavigation } from "@react-navigation/native"
import Settings from "../screens/Settings"
const Tab = createMaterialTopTabNavigator()
import { AuthContext } from "../services/AuthService"

export default function Main() {
    const navigation = useNavigation()
    const { user } = useContext(AuthContext)
    useEffect(() => {

    }, [])

    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
    )
}
