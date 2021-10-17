import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import * as Yup from "yup";

import Screen from "./../components/Screen";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import { StackActions } from '@react-navigation/native';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});


function LoginScreen(props) {
  const goHome = () => {
    props.navigation.reset({ index: 0, routes: [{ name: 'home' }], });
  };
  return (
    <Screen style={styles.container}>
      <TouchableOpacity
        onPress={() => goHome()} >
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      </TouchableOpacity>

      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={() => goHome()}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCapitlize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="email"
          textContentType="emailAddress"
        />
        <AppFormField
          autoCapitlize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="Login" onPress={() => goHome()} />
      </AppForm>
    </Screen >
  );
}


const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
  container: {
    padding: 10,
  },
});

export default LoginScreen;
