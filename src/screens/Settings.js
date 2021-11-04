import React, { useContext } from 'react'
import { Button, View, Text } from 'react-native'
import { AuthContext } from './../services/AuthService'

export default function Settings() {
    const { logout } = useContext(AuthContext)
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Settings Screen</Text>
            <Button
                title="Logout"
                onPress={() => logout()}
            />
        </View>
    )
}
