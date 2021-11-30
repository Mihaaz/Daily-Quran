import React, {
    Component,
    useState,
    useContext,
    useEffect,
    useImperativeHandle,
    nickName,
} from "react"
import {
    TouchableHighlight,
    TouchableOpacity,
    Image,
    AppRegistry,
    StyleSheet,
    Alert,
} from "react-native"
import moment from "moment"
import { Button, View, Text } from "react-native"
import { AuthContext } from "../services/AuthService"
import { getUsers, getUser } from "../services/ApiService"
import { getNotifications } from "../services/ApiService"
import Header from "../components/Header"

export default function ramadanChallenge() {
    const [notifications, setNotifications] = useState([])

    const { user } = useContext(AuthContext)
    useEffect(() => {
        getNotifications(user).then((res) => {
            setNotifications(res)
        })
    }, [])



    return (
        <View style={{ flex: 1, backgroundColor: "#0D013A" }}>
            <Header name={"Notifications"} showBack={true} />
            <View
                style={{
                    flex: 1,
                    padding: 10,
                    backgroundColor: "#C2CCFF",
                }}
            >
                {notifications.length != 0 ? (
                    notifications.map((notification, index) => {

                        return (<View
                            key={index}
                            style={{
                                padding: 20,
                                borderRadius: 20,
                                backgroundColor: "#fff",
                                color: "#000000",
                                fontSize: 27,
                                fontWeight: "600",
                                width: '100%',
                            }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 5, }}>
                                <Text style={{ fontWeight: 'bold' }}>
                                    {notification.title}
                                </Text>
                                <Text>
                                    {moment(notification.time.toDate()).format("HH:mm MMM D, yyyy")}
                                </Text>
                            </View>
                            <View style={{ padding: 5, }}>
                                <Text>
                                    {notification.body}
                                </Text>
                            </View>
                        </View>)
                    })

                ) : <View style={{
                    padding: 20,
                    borderRadius: 20,
                    backgroundColor: "#fff",
                    color: "#000000",
                    fontSize: 27,
                    fontWeight: "600",
                    width: '100%',
                }}>
                    <View style={{ padding: 5, textAlign: 'center' }}>
                        <Text>
                            There are no notifications
                        </Text>
                    </View>
                </View>}

            </View>
        </View>
    )
}
