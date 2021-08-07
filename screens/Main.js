import React, { Component } from "react";
import { Text, View } from "react-native";
import { style } from "../styles";

export default function Main({ navigation }) {
  return (
    <View style={style.Backgrounds}>
      <View style={style.topBar}>
        <Text>TopBar</Text>
      </View>
    </View>
  );
}
