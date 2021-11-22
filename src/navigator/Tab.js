import React, { useEffect, useContext } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Home from "../screens/Home";
import { useNavigation } from "@react-navigation/native";
import Settings from "../screens/Settings";
const Tab = createMaterialTopTabNavigator();
import { AuthContext } from "../services/AuthService";
import Challenges from "../screens/Challenges";
import { updateUser, getUser } from "../services/ApiService";

export default function Main() {
  const navigation = useNavigation();
  const { user } = useContext(AuthContext);
  useEffect(() => {
    getUser(user.uid).then((d) => {
      if (d.date == undefined || !isToday(d.date.toDate())) {
        updateUser(user, { count: 0, chapter: 1 });
      }
      updateUser(user, { date: new Date() });
    });
  }, []);

  const isToday = (someDate) => {
    const today = new Date();
    return (
      someDate.getDate() == today.getDate() &&
      someDate.getMonth() == today.getMonth() &&
      someDate.getFullYear() == today.getFullYear()
    );
  };

  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Challenges" component={Challenges} />
      <Tab.Screen name="My Account" component={Settings} />
    </Tab.Navigator>
  );
}
