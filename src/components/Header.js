import React, {
  useEffect,
  useContext,
  useState,
  useImperativeHandle,
} from "react";
import { Button, View, Text } from "react-native";
import { getUser } from "./../services/ApiService";
import { useNavigation } from "@react-navigation/core";
import { AuthContext } from "./../services/AuthService";
import { updateUser } from "./../services/ApiService";

export default function Header({ name, showBack }) {
  const { user } = useContext(AuthContext);
  const [userName, setUserName] = useState(null);
  const navigation = useNavigation();
  useEffect(() => {
    getUser(user.uid).then((u) => {
      if (u.nickName != undefined) {
        setUserName(u.nickName);
      }
    });
  }, []);
  return (
    <View style={{ height: 150 }}>
      <View style={{ flex: 1, justifyContent: "flex-start" }}>
        <Text style={{ textAlign: "left", color: "#D4AF37", fontSize: 18 }}>
          Welcome {userName}
        </Text>
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
  );
}
