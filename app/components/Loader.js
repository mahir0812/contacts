import React, { Component } from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import colors from "../config/colors";

export default class Loader extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={colors.buttonColor} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: colors.backgroundColor,
  },
});
