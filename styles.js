import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";

export const style = StyleSheet.create({
  Backgrounds: {
    flex: 1,
    backgroundColor: "#2A2F54",
  },
  loginTop: {
    marginLeft: 40,
    marginRight: 60,
    marginTop: 58,
  },
  loginImage: {
    width: 90,
    height: 90,
  },
  loginTextStyle: {
    fontWeight: "500",
    fontSize: 42,
    color: "white",
    fontFamily: "Poppins",
  },
  loginArea: {
    marginTop: 19,
  },
  loginAreaText: {
    color: "white",
    fontSize: 18,
    fontWeight: "400",
    marginTop: 34,
    fontFamily: "Poppins",
  },
  loginAreaInput: {
    borderWidth: 1.5,
    borderColor: "white",
    borderRadius: 15,
    height: 60,
    paddingHorizontal: 20,
    marginTop: 14,
    color: "white",
  },
  loginAreaInputUsericon: {
    marginVertical: 20,
    marginHorizontal: 26,
  },
  loginButton: {
    marginTop: 46,
    backgroundColor: "#4C5699",
    width: 340,
    borderRadius: 15,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  loginButtonText: {
    color: "white",
    fontSize: 34,
    fontWeight: "500",
    lineHeight: 250,
    fontFamily: "Poppins",
  },
  poweredBy: {
    color: "grey",
    fontFamily: "PoppinsSemiBold",
    fontWeight: "500",
    fontSize: 16,
  },
  topBar: {
    marginTop: getStatusBarHeight(),
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 60,
    backgroundColor: "#b0b0b0",
  },
});
