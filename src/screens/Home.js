import React, { useEffect } from "react";
import { Button, View, Text } from "react-native";
import { getStudents, getUsers, setCities } from "./../services/ApiService";

export default function Home() {
  useEffect(() => {
    console.log("ddd");
    getUsers().then((d) => {
      console.log(d);
    });
  }, []);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
    </View>
  );
}
