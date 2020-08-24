import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import colors from "../config/colors";
import AppText from "../components/AppText";
import ButtonsWelcome from "../components/ButtonsWelcome";

function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.background}>
      <StatusBar style="dark" />
      <View style={styles.logoContainer}>
        <AppText>Chat</AppText>
        <Image
          style={styles.imgStyle}
          source={require("../assets/welcome-logo.png")}
        />
      </View>
      <View style={styles.buttonsContainer}>
        <ButtonsWelcome
          title="Log In"
          onPress={() => navigation.navigate("Login")}
        />
        <ButtonsWelcome
          title="Register"
          onPress={() => navigation.navigate("Registration")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.backgroundColor,
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 30,
  },

  logoContainer: {
    position: "absolute",
    top: "30%",
    alignItems: "center",
  },

  welcomeText: {
    fontSize: 45,
    fontStyle: "italic",
    fontWeight: "700",
    color: "#314570",
  },

  buttonsContainer: {
    width: "70%",
  },

  imgStyle: {
    width: 90,
    height: 90,
  },
});

export default WelcomeScreen;
