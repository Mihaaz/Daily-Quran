import React, {
  useEffect,
  useContext,
  useState,
  useImperativeHandle,
} from "react";
import {
  Button,
  View,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  Image,
  AppRegistry,
  StyleSheet,
} from "react-native";

import { useNavigation } from "@react-navigation/core";
import { AuthContext } from "./../services/AuthService";
import { updateUser } from "./../services/ApiService";

export default function Home() {
  const navigation = useNavigation();
  const { user } = useContext(AuthContext);
  const [nickName, setNickName] = useState("");
  useEffect(() => {}, []);
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0D013A",
      }}
    >
      <Text
        style={{
          textAlign: "center",
          color: "#fff",
          fontSize: 20,
          fontWeight: "200",
        }}
      >
        Let's setup a nickname for you,
      </Text>
      <Text
        style={{
          textAlign: "center",
          color: "#fff",
          fontSize: 20,
          fontWeight: "200",
        }}
      >
        {user.displayName}
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
        }}
        onChangeText={(val) => setNickName(val)}
        value={nickName}
      />

      <Button
        title="update"
        color="#D4AF37"
        onPress={() => {
          updateUser(user, { nickName: nickName });
          navigation.navigate("Tab");
        }}
      />

      <Button
        title="Go to Tab Screen"
        color="#D4AF37"
        onPress={() => navigation.navigate("Tab")}
      />
    </View>
  );
}
