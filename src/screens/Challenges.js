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
} from "react-native";
import { Button, View, Text } from "react-native";
import { AuthContext } from "../services/AuthService";
import { getStudents, getUsers, setCities } from "./../services/ApiService";
import { updateUser } from "./../services/ApiService";

export default function Challenges() {
  useEffect(() => {
    getUsers().then((d) => {
      console.log(d);
    });
  }, []);
  return (
    <View style={{ flex: 1, backgroundColor: "#0D013A" }}>
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, justifyContent: "flex-start" }}>
          {/*           <Text style={{ textAlign: "left", color: "#D4AF37", fontSize: 18 }}>
            Welcome,
          </Text> */}
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
            Challenges
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
        <TouchableOpacity>
          <Text
            style={{
              width: 200,
              padding: 40,
              borderRadius: 20,
              backgroundColor: "#D4AF37",
              textAlign: "center",
              color: "#000000",
              fontSize: 27,
              fontWeight: "600",
              margin: 15,
              width: 360,
            }}
          >
            Ramadan Challenge
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={{
              width: 200,
              padding: 40,
              borderRadius: 20,
              backgroundColor: "#D4AF37",
              textAlign: "center",
              color: "#000000",
              fontSize: 27,
              fontWeight: "600",
              margin: 15,
              width: 360,
            }}
          >
            Friday Challenge
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={{
              width: 200,
              padding: 40,
              borderRadius: 20,
              backgroundColor: "#D4AF37",
              textAlign: "center",
              color: "#000000",
              fontSize: 27,
              fontWeight: "600",
              margin: 15,
              width: 360,
            }}
          >
            Sleep Tight Challenge
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
