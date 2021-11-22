import React, {
  Component,
  useState,
  useContext,
  useEffect,
  useImperativeHandle,
  nickName,
} from "react";
import {
  TouchableHighlight,
  TouchableOpacity,
  Image,
  AppRegistry,
  StyleSheet,
  Alert,
} from "react-native";
import { Button, View, Text } from "react-native";
import { AuthContext } from "../services/AuthService";
import { getUsers, getUser } from "./../services/ApiService";
import { updateUser, getChapter } from "./../services/ApiService";
import firebase from "firebase/app";
import firestore from "firebase/app";

export default function Home() {
  const [verses, setVerses] = useState([]);

  const [chapterCount, setChapterCount] = useState(1);
  const [count, setCount] = useState(0);
  const [readCount, setReadCount] = useState(0);
  const [target, setTarget] = useState(null);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    getUsers().then((d) => {
      console.log("sss", d);
    });
    getUser(user.uid).then((u) => {
      setTarget(u.target);
      setChapterCount(u.chapter);
      console.log(u.count);
      setCount(u.count);
    });
    getChapter(chapterCount).then((d) => {
      setVerses(d);
    });
  }, []);
  useEffect(() => {
    console.log(chapterCount);
    // getChapter(chapterCount).then((res) => {
    //   setCount(0);
    //   console.log(res);
    //   setVerses(res);
    // });
  }, [chapterCount]);

  useEffect(() => {
    if (readCount == target) {
      alert("Target Reached");
      Alert.alert("Target Reached", "My Alert Msg");
    }
  }, [readCount]);

  return (
    <View style={{ flex: 1, backgroundColor: "#0D013A" }}>
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, justifyContent: "flex-start" }}>
          <Text style={{ textAlign: "left", color: "#D4AF37", fontSize: 18 }}>
            Welcome,
          </Text>
        </View>
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Text
            style={{
              textAlign: "center",
              color: "#fff",
              fontSize: 20,
              fontWeight: "200",
            }}
          >
            Your daily goal!
          </Text>
        </View>
      </View>

      <View
        style={{
          flex: 5,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#C2CCFF",
        }}
      >
        {verses.length != 0 ? (
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
        ) : null}

        <View style={{ flexDirection: "row" }}>
          {verses.length - 1 != count ? (
            <TouchableHighlight
              onPress={() => {
                setCount(count - 1);
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
          ) : (
            <TouchableHighlight
              onPress={() =>
                getChapter(1).then((d) => {
                  setVerses(d);
                })
              }
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
                Previous Chapter
              </Text>
            </TouchableHighlight>
          )}
          <TouchableHighlight
            onPress={() => {
              console.log("ddd");
              updateUser(user, { count: count, chapter: chapterCount });
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
              Submit
            </Text>
          </TouchableHighlight>
          {verses.length - 1 != count ? (
            <TouchableHighlight
              onPress={() => {
                setCount(count + 1);
                setReadCount(readCount + 1);
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
                setChapterCount(chapterCount + 1);
                getChapter(chapterCount).then((res) => {
                  setCount(0);
                  console.log(res);
                  setVerses(res);
                });
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

        <Text>
          {" "}
          Read {readCount} of {target}
        </Text>
      </View>
    </View>
  );
}
