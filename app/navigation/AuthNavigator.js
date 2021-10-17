import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "./../screens/RegisterScreen";
import WelcomeScreen from "./../screens/WelcomeScreen";
import AppNavigator from "./AppNavigation";

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator headerMode={'none'}>
    <Stack.Screen
      name="Welcome"
      component={WelcomeScreen}
      options={{
        headerShown: true,
      }}
    />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
    <Stack.Screen name="home" component={AppNavigator}></Stack.Screen>
  </Stack.Navigator>
);

export default AuthNavigator;
