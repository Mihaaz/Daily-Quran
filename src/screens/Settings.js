import React, { useContext, useEffect } from "react";
import {
  Button,
  View,
  Text,
  Alert,
  TouchableHighlight,
  TextInput,
} from "react-native";
import { AuthContext } from "./../services/AuthService";
import { getUser, updateUser, quran } from "./../services/ApiService";
import firebase from "firebase/app";
import firestore from "firebase/app";
import { useState } from "react/cjs/react.development";

export default function Settings() {
  const { logout } = useContext(AuthContext);
  const [target, setTarget] = useState(null);
  const [loginUser, setLoginUser] = useState(null);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    console.log("user", user.uid);
    getUser(user.uid).then((u) => {
      setTarget(u.target);
      setLoginUser(u);
    });
  }, []);
  return (
    <View style={{ flex: 1, backgroundColor: "#0D013A" }}>
      {loginUser != null ? (
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1, justifyContent: "flex-start" }}>
            <Text style={{ textAlign: "left", color: "#D4AF37", fontSize: 18 }}>
              My Account
            </Text>
          </View>

          <Text
            style={{
              textAlign: "center",
              color: "#fff",
              fontSize: 20,
              fontWeight: "200",
            }}
          >
            Setup your daily goal!
          </Text>

          <TextInput
            style={{
              height: 40,
              margin: 12,
              borderWidth: 3,
              padding: 10,
              borderColor: "#D4AF37",
              color: "#D4AF37",
              fontSize: 16,
              fontWeight: "400",
              backgroundColor: "#fff",
              width: 100,
              alignSelf: "center",
            }}
            value={target}
            onChangeText={(text) => setTarget(text)}
          />

          <View style={{ flex: 1, justifyContent: "center" }}>
            <Text
              style={{
                textAlign: "center",
                color: "#fff",
                fontSize: 20,
                fontWeight: "200",
                width: "200",
              }}
            >
              <Button
                title="Save"
                color="#D4AF37"
                onPress={() => {
                  updateUser(user, { target: target }).then(() => {
                    Alert.alert("SUccess", "Saved successfully");
                  });
                }}
              />
            </Text>
          </View>
          <View style={{ flex: 1, justifyContent: "center" }}>
            <Text
              style={{
                textAlign: "center",
                color: "#fff",
                fontSize: 20,
                fontWeight: "200",
                width: "200",
              }}
            >
              <Button title="Logout" color="#D4AF37" onPress={() => logout()} />
            </Text>
          </View>
        </View>
      ) : null}
    </View>
  );
}
