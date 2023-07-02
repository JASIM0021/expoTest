import { StyleSheet, Text, View } from "react-native";
import React from "react";

const EmailSignUpScreen = () => {
  return (
    <>
      <TextInput
        inputMode="email"
        placeholder="user@domain.com"
        placeholderTextColor="rgba(8, 73, 117, 0.5)"
        style={{
          marginTop: 50,
          width: 300,
          height: 60,
          borderWidth: 1,
          borderColor: "#1BA999",
          borderRadius: 30,
          paddingLeft: 15,
          paddingRight: 15,
          fontSize: 14,
          color: "rgba(8, 73, 117, 1)",
          backgroundColor: "#ffffff",
          textAlign: "center",
        }}
        autoCorrect={false}
      />

      <TextInput
        inputMode="text"
        secureTextEntry={true}
        placeholder="Password"
        placeholderTextColor="rgba(8, 73, 117, 0.5)"
        onFocus={() => setScrollY(170)}
        style={{
          marginTop: 15,
          width: 300,
          height: 60,
          borderWidth: 1,
          borderColor: "#1BA999",
          borderRadius: 30,
          paddingLeft: 15,
          paddingRight: 15,
          fontSize: 14,
          color: "rgba(8, 73, 117, 1)",
          backgroundColor: "#ffffff",
          textAlign: "center",
        }}
        autoCorrect={false}
      />

      <TouchableOpacity
        onPress={() => doLogin()}
        style={{
          marginTop: 15,
          backgroundColor: "#1BA999",
          width: "100%",
          height: 60,
          borderRadius: 30,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 16, color: "#ffffff" }}>Sign Up</Text>
      </TouchableOpacity>
    </>
  );
};

export default EmailSignUpScreen;

const styles = StyleSheet.create({});
