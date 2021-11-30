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
import { Button, View, Text } from "react-native"
import { AuthContext } from "../services/AuthService"
import { getUsers, getUser } from "./../services/ApiService"
import { updateUser, getChapter } from "./../services/ApiService"
import Header from "../components/Header"

export default function ramadanChallenge() {
    const [verses, setVerses] = useState([])

    const [chapterCount, setChapterCount] = useState(1)
    const [count, setCount] = useState(0)
    const [readCount, setReadCount] = useState(0)
    const [target, setTarget] = useState(null)

    const [name, setName] = useState(null)
    const { user } = useContext(AuthContext)
    useEffect(() => {
        // getUsers().then((d) => {
        //   console.log("sss", d);
        // });
        getUser(user.uid).then((u) => {
            console.log(u.count, u.chapter)
            setTarget(u.target)
            setChapterCount(u.chapter)

            setCount(u.count)
        })
        // getChapter(chapterCount).then((d) => {
        //   setVerses(d);
        // });
    }, [])
    useEffect(() => {
        console.log(chapterCount)
        getChapter(chapterCount).then((res) => {
            setName(res.name)
            setVerses(res.ayah)
        })
    }, [chapterCount])

    useEffect(() => {
        readCount == 20
        if (readCount == 20) {
            alert("You have reached your daily target")
            Alert.alert("You have reached your daily target", "My Alert Msg")
        }
    }, [readCount])

    return (
        <View style={{ flex: 1, backgroundColor: "#0D013A" }}>
            <Header name={"Ramadan Challenge"} showBack={true} />
            {verses.length != 0 ? (
                <View
                    style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#C2CCFF",
                    }}
                >
                    <Text
                        style={{
                            textAlign: "center",
                            color: "#000000",
                            fontSize: 20,
                            fontWeight: "300",
                            height: 30,
                            marginVertical: 20,
                        }}
                    >
                        {name}
                    </Text>

                    <Text
                        style={{
                            width: 200,
                            padding: 30,
                            borderRadius: 20,
                            backgroundColor: "#fff",
                            textAlign: "center",
                            color: "#000000",
                            fontSize: 27,
                            fontWeight: "600",
                            margin: 10,
                            width: 360,
                            height: 300,
                        }}
                    >
                        {verses[count].text}
                    </Text>

                    <View style={{ flexDirection: "row" }}>
                        {count != 0 ? (
                            <TouchableHighlight
                                disabled={count == 0}
                                onPress={() => {
                                    setCount(count - 1)
                                }}
                            >
                                <Text
                                    style={{
                                        padding: 20,
                                        borderRadius: 20,
                                        backgroundColor: "#D4AF37",
                                        textAlign: "center",
                                        color: "#000000",
                                        fontSize: 18,
                                        fontWeight: "600",
                                        margin: 5,
                                        width: 120,
                                    }}
                                >
                                    Previous
                                </Text>
                            </TouchableHighlight>
                        ) : null}
                        <TouchableHighlight
                            onPress={() => {
                                console.log({ count: count, chapter: chapterCount })
                                updateUser(user, { count: count, chapter: chapterCount })
                            }}
                        >
                            <Text
                                style={{
                                    padding: 20,
                                    borderRadius: 20,
                                    backgroundColor: "#D4AF37",
                                    textAlign: "center",
                                    color: "#000000",
                                    fontSize: 18,
                                    fontWeight: "600",
                                    margin: 5,
                                    width: 120,
                                }}
                            >
                                Save
                            </Text>
                        </TouchableHighlight>
                        {verses.length - 1 != count ? (
                            <TouchableHighlight
                                onPress={() => {
                                    setCount(count + 1)
                                    setReadCount(readCount + 1)
                                }}
                            >
                                <Text
                                    style={{
                                        padding: 20,
                                        borderRadius: 20,
                                        backgroundColor: "#D4AF37",
                                        textAlign: "center",
                                        color: "#000000",
                                        fontSize: 18,
                                        fontWeight: "600",
                                        margin: 5,
                                        width: 120,
                                    }}
                                >
                                    Next
                                </Text>
                            </TouchableHighlight>
                        ) : (
                            <TouchableHighlight
                                onPress={() => {
                                    setChapterCount(chapterCount + 1)
                                    setCount(0)
                                }}
                            >
                                <Text
                                    style={{
                                        padding: 20,
                                        borderRadius: 20,
                                        backgroundColor: "#D4AF37",
                                        textAlign: "center",
                                        color: "#000000",
                                        fontSize: 18,
                                        fontWeight: "600",
                                        margin: 5,
                                        width: 120,
                                    }}
                                >
                                    Next Chapter
                                </Text>
                            </TouchableHighlight>
                        )}
                    </View>

                    <Text> You have read {readCount} of 208 Ayahs</Text>
                </View>
            ) : null}
        </View>
    )
}
