import React, {
    useEffect,
    useContext,
    useState,
    useImperativeHandle,
} from "react"
import { Button, View, Text, Image, TouchableOpacity } from "react-native"
import { getUser } from "./../services/ApiService"
import { useNavigation } from "@react-navigation/core"
import { AuthContext } from "./../services/AuthService"
import { updateUser } from "./../services/ApiService"
import { getNotifications } from "../services/ApiService"

export default function Header({ name, showBack }) {
    const { user } = useContext(AuthContext)
    const [userName, setUserName] = useState(null)
    const [notificationCount, setNotificationCount] = useState(0)
    const navigation = useNavigation()
    useEffect(() => {
        getUser(user.uid).then((u) => {
            if (u.nickName != undefined) {
                setUserName(u.nickName)
            }
        })
        getNotifications(user).then((res) => {
            setNotificationCount(res.length)
        })
    }, [])
    return (
        <View style={{ height: 150 }}>
            <View style={{ flex: 1, justifyContent: "space-between", flexDirection: 'row', }}>
                <Text style={{ textAlign: "left", color: "#D4AF37", fontSize: 18, margin: 10 }}>
                    Welcome {userName},
                </Text>
                <View style={{ marginHorizontal: 40, marginTop: 20 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
                        <Image source={require("./../assets/notif.png")} style={{ width: 25, height: 30 }} />
                        {
                            notificationCount > 0 ? <Text style={{
                                position: 'absolute',
                                right: -20,
                                top: -10, textAlign: "left", color: "white", fontSize: 12, fontWeight: 'bold'
                                , backgroundColor: 'red', borderRadius: 20, padding: 5,
                            }}>
                                {notificationCount}
                            </Text> : null
                        }

                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ flex: 1, justifyContent: "center", flexDirection: "row" }}>
                <Text
                    style={{
                        textAlign: "center",
                        color: "#fff",
                        fontSize: 20,
                        fontWeight: "200",
                        width: 50,
                    }}
                    onPress={() => navigation.goBack()}
                >
                    {showBack ? "Back" : ""}
                </Text>
                <Text
                    style={{
                        textAlign: "center",
                        color: "#fff",
                        fontSize: 20,
                        fontWeight: "200",
                        flex: 1,
                    }}
                >
                    {name}
                </Text>
                <Text
                    style={{
                        textAlign: "center",
                        color: "#fff",
                        fontSize: 20,
                        fontWeight: "200",
                        width: 50,
                    }}
                ></Text>
            </View>
        </View>
    )
}
