import React, { useEffect, useContext, useState } from "react"
import { Button, View, Text, TextInput } from "react-native"
import { getStudents, getUsers, setCities } from "../services/ApiService"
import { useNavigation } from "@react-navigation/core"
import { AuthContext } from "./../services/AuthService"
import { updateUser } from "./../services/ApiService"

export default function Home() {
    const navigation = useNavigation()
    const { user } = useContext(AuthContext)
    const [nickName, setNickName] = useState('')
    useEffect(() => {

    }, [])
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>NickName Screen</Text>
            <Text>{user.displayName}</Text>

            <TextInput
                style={{
                    height: 40,
                    margin: 12,
                    borderWidth: 1,
                    padding: 10,
                }}
                onChangeText={(val) => setNickName(val)}
                value={nickName}
            />

            <Button
                title="update"
                onPress={() => {
                    updateUser(user, { nickName: nickName })
                    navigation.navigate("Tab")
                }}
            />

            <Button
                title="Go to Tab Screen"
                onPress={() => navigation.navigate("Tab")}
            />
        </View>
    )
}
