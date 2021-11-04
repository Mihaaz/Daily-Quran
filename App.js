// In App.js in a new project

import React, { useState, useContext, useEffect } from "react";
import { Button, View, Text } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthProvider } from "./src/services/AuthService";
import * as SecureStore from "expo-secure-store";
import { auth } from "./src/services/firebase";
import {
  getRedirectResult,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import { createUser, checkNickName } from "./src/services/ApiService";
import Login from "./src/screens/Login";
import Main from "./src/navigator/Main";

import { AuthContext } from "./src/services/AuthService";
function Loading() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Loading Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getRedirectResult(auth)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;
        // setUser(user);
        createUser(user);
        // checkNickName(user).then((val) => {
        //   if (val) {
        //     console.log("ddddd");
        //     navigation.navigate("NickName", user);
        //   }
        // });
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
    const subscriber = onAuthStateChanged(auth, (user) => {
      console.log(user);
      setUser(user);
      setLoading(false);
    });
    return subscriber;
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {user == null ? (
            <>
              <Stack.Screen name="SignIn" component={Login} />
            </>
          ) : (
            <>
              <Stack.Screen name="Main" component={Main} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}

export default App;
