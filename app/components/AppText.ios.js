import React from "react";
import { Text, StyleSheet } from "react-native";

function AppText({ children }) {
  return <Text style={styles.text}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: colors.textColor,
    fontWeight: "700",
    fontSize: 50,
    fontFamily: "Avenir",
  },
});

export default AppText;
