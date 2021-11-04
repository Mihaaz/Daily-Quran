
import React, { useEffect, useContext } from "react"
import { Button, View, Text, ActivityIndicator } from "react-native"

export default function Loading() {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <ActivityIndicator color="#0D013A" />
        </View>
    )
}
