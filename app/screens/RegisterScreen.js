import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Alert,
  ActivityIndicator,
  KeyboardAvoidingView,
} from "react-native";
import firebase from "../database/firebase";

import colors from "../config/colors";
import RegisterInputText from "../components/RegisterInputText";
import RegisterText from "../components/RegisterText";
import ButtonsWelcome from "../components/ButtonsWelcome";
import Loader from "../components/Loader";

export default class RegisterScreen extends Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
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

  registerUser = () => {
    if (this.state.email === "" || this.state.password === "") {
      Alert.alert("Please enter details");
    } else {
      console.log("--------------------------------------");
      console.log("Name is : " + this.state.displayName);
      console.log("Mail is : " + this.state.email);
      console.log("Password is : " + this.state.password);
      console.log("--------------------------------------");
      this.setState({ isLoading: true });

      firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then((res) => {
          res.user.updateProfile({
            displayName: this.state.displayName,
          });
          console.log("User registered successfully");
          this.setState({
            isLoading: false,
            displayName: "",
            email: "",
            password: "",
          });
          this.props.navigation.navigate("Login");
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
        <KeyboardAvoidingView
          style={styles.avoid}
          behavior="padding"
          keyboardVerticalOffset="-200"
        >
          <Text style={styles.heading}>Register</Text>
          <RegisterText>Please enter your name</RegisterText>
          <RegisterInputText
            placeholder={"Your name is...."}
            value={this.state.displayName}
            onChangeText={(val) => this.updateInputVal(val, "displayName")}
          ></RegisterInputText>
          <RegisterText>Please enter your email</RegisterText>
          <RegisterInputText
            placeholder={"Your email is...."}
            value={this.state.email}
            onChangeText={(val) => this.updateInputVal(val, "email")}
          ></RegisterInputText>
          <RegisterText>Please enter your password</RegisterText>
          <RegisterInputText
            placeholder={"Your password is...."}
            value={this.state.password}
            onChangeText={(val) => this.updateInputVal(val, "password")}
            secureTextEntry={true}
          ></RegisterInputText>
          <View style={styles.buttonContainer}>
            <ButtonsWelcome
              title="Register"
              onPress={() => this.registerUser()}
            />
          </View>
        </KeyboardAvoidingView>
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
  avoid: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
