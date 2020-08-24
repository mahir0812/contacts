import React from "react";
import { Text, StyleSheet } from "react-native";
import colors from "../config/colors";
import { TextInput } from "react-native-gesture-handler";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { color } from "react-native-reanimated";

function RegisterInputText({
  placeholder,
  onChangeText,
  value,
  secureTextEntry,
  onFocus,
}) {
  return (
    <TextInput
      placeholderTextColor={colors.textColor}
      placeholder={placeholder}
      onChangeText={onChangeText}
      value={value}
      style={styles.text}
      secureTextEntry={secureTextEntry}
      onFocus={onFocus}
    ></TextInput>
  );
}

const styles = StyleSheet.create({
  text: {
    color: colors.textColor,
    backgroundColor: colors.white,
    borderRadius: 25,
    fontSize: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 10,
    textAlign: "center",
  },
});

export default RegisterInputText;
