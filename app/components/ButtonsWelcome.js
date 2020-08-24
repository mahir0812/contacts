import React from "react";
import { View, StyleSheet, Text } from "react-native";
import colors from "../config/colors";
import { TouchableOpacity } from "react-native-gesture-handler";

function ButtonsWelcome({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.buttonColor,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    margin: 10,
  },

  text: {
    color: colors.textColor,
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default ButtonsWelcome;
