import React from "react";
import { Text, StyleSheet, Platform } from "react-native";
import colors from "../config/colors";

function AppText({ children }) {
  return <Text>{children}</Text>;
}

export default AppText;
