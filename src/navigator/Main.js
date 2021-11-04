import React, { useEffect, useContext } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Home from "./../screens/Home";
import Settings from "./../screens/Settings";
import { createUser, checkNickName } from "./../services/ApiService";
const Tab = createMaterialTopTabNavigator();
import { AuthContext } from "./../services/AuthService";

export default function Main() {
  const { user } = useContext(AuthContext);
  useEffect(() => {
    console.log(user);
    checkNickName(user).then((val) => {
      if (val) {
        console.log("ddddd");
      }
    });
  }, []);

  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}
