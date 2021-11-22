import React, {
  Component,
  useState,
  useContext,
  useEffect,
  useImperativeHandle,
} from "react";
import {
  Button,
  View,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  Image,
  AppRegistry,
  StyleSheet,
} from "react-native";
import { AuthContext } from "./../services/AuthService";

export default function Login() {
  const { loginWithGoogle, login } = useContext(AuthContext);
  return (
    <View style={{ flex: 1, backgroundColor: "#0D013A" }}>
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, justifyContent: "flex-end" }}>
          <Text style={{ textAlign: "center", color: "#fff", fontSize: 36 }}>
            Daily Quran
          </Text>
        </View>
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Text
            style={{
              textAlign: "center",
              color: "#fff",
              fontSize: 30,
              fontWeight: "200",
            }}
          >
            Welcome Back!
          </Text>
        </View>
      </View>
      <View
        style={{
          flex: 2,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#C2CCFF",
        }}
      >
        <TouchableOpacity onPress={loginWithGoogle}>
          <Text
            style={{
              width: 200,
              padding: 20,
              borderRadius: 20,
              backgroundColor: "#D4AF37",
              textAlign: "center",
              color: "#000000",
              fontSize: 27,
              fontWeight: "600",
            }}
          >
            Sign In
          </Text>
        </TouchableOpacity>
      </View>
    </View>
    // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    //     <Text>Login Screen</Text>
    //     <Button
    //         title="Go to Details"
    //         onPress={() => navigation.navigate('Details')}
    //     />
    //     <Button
    //         title="Google"
    //         onPress={loginWithGoogle}
    //     />
    //     <Button
    //         title="Login"
    //         onPress={() => login('naifmhd@gmail.com', 'password')}
    //     />
    // </View>
  );
}
