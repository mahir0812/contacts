import React, { Component } from "react";
import { View, Text, StyleSheet, Alert, ActivityIndicator } from "react-native";
import firebase from "../database/firebase";

import colors from "../config/colors";
import RegisterInputText from "../components/RegisterInputText";
import RegisterText from "../components/RegisterText";
import ButtonsWelcome from "../components/ButtonsWelcome";
import Loader from "../components/Loader";

export default class LoginScreen extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      isLoading: false,
    };
  }

  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  };

  userLogin = () => {
    if (this.state.email === "" || this.state.password === "") {
      Alert.alert("Please enter credentials");
    } else {
      this.setState({
        isLoading: true,
      });
      console.log("usao");
      firebase
        .auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .then((res) => {
          console.log({ res });
          this.setState({
            isLoading: false,
            email: "",
            password: "",
          });
          this.props.navigation.navigate("FriendList");
        })
        .catch((error) => this.setState({ errorMessage: error.message }));
    }
  };

  render() {
    if (this.state.isLoading) {
      return <Loader />;
    }
    return (
      <View style={styles.background}>
        <Text style={styles.heading}>Login</Text>
        <RegisterText>Please enter your email</RegisterText>
        <RegisterInputText
          placeholder={"Your email is..."}
          value={this.state.email}
          onChangeText={(val) => this.updateInputVal(val, "email")}
        ></RegisterInputText>
        <RegisterText>Please enter your password</RegisterText>
        <RegisterInputText
          placeholder={"Your password is..."}
          value={this.state.password}
          onChangeText={(val) => this.updateInputVal(val, "password")}
          secureTextEntry={true}
        ></RegisterInputText>
        <View style={styles.buttonContainer}>
          <ButtonsWelcome title="Log in" onPress={() => this.userLogin()} />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.backgroundColor,
  },

  heading: {
    fontSize: 30,
    position: "absolute",
    top: "20%",
    fontWeight: "700",
  },

  buttonContainer: {
    width: "70%",
    position: "absolute",
    bottom: "10%",
  },
});
