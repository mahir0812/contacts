import React from "react";
import { Text, StyleSheet, Platform } from "react-native";
import colors from "../config/colors";

function RegisterText({ children }) {
  return <Text style={styles.text}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    paddingVertical: 10,
    color: colors.textColor,
  },
});

export default RegisterText;
