import "react-native-gesture-handler";
import { createStore, applyMiddleware } from "redux";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import RegistrationScreen from "./app/screens/RegisterScreen";
import LoginScreen from "./app/screens/LoginScreen";
import FriendListScreen from "./app/screens/FriendListScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Registration" component={RegistrationScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen
          name="FriendList"
          component={FriendListScreen}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
