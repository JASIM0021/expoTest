import { StyleSheet, Text, View } from "react-native";
import React from "react";

const OtpScreen = ({ mode }) => {
  return (
    <>
      <View style={{ width: mode === "login" ? 200 : 215 }}>
        <Text style={{ fontSize: 24, color: "#000000", textAlign: "center" }}>
          Enter The <Text style={{ color: "#8AF3FF" }}>OTP</Text> code for{" "}
          <Text style={{ color: "#8AF3FF" }}>
            {mode === "login" ? "Log In" : "Continue"}
          </Text>
        </Text>
      </View>

      <TextInput
        inputMode="numeric"
        placeholder="*** - ***"
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

      <TouchableOpacity
        onPress={() => setModeType(mode === "signup" ? "email" : "sendOTP")}
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
        <Text style={{ fontSize: 16, color: "#ffffff" }}>
          {mode === "login" ? "Log In" : "Continue"}
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default OtpScreen;

const styles = StyleSheet.create({});
