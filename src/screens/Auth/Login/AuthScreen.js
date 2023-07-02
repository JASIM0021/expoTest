import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ScrollView,
} from "react-native";
import React from "react";

const AuthScreen = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView
        style={{ flex: 1, position: "relative", backgroundColor: "#ffffff" }}
      >
        <ScrollView keyboardShouldPersistTaps="always">
          <View style={{ height: "auto", width: "100%", alignItems: "center" }}>
            <Image
              style={{ marginTop: 50 }}
              source={require("../../../assets/images/Logo.png")}
            />
            <Image
              style={{ marginTop: 10 }}
              source={require("../../../assets/images/Hero-Section.png")}
            />
            <View style={{ width: 300, alignItems: "center" }}>
              <Text
                style={{
                  fontSize: 24,
                  color: "#000000",
                  textAlign: "center",
                }}
              >
                Enjoy Your <Text style={{ color: "#8AF3FF" }}>Free Time</Text>
              </Text>
              <Text
                style={{
                  textAlign: "center",
                  color: "#2BAB9E",
                  fontSize: 14,
                  marginTop: 5,
                }}
              >
                Join a growing number of spontaneous people for real connections
              </Text>

              <TouchableOpacity
                onPress={() => setMode("login")}
                style={{
                  marginTop: 50,
                  width: "100%",
                  height: 60,
                  borderRadius: 30,
                  borderWidth: 1,
                  borderColor: "#1BA999",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 16, color: "#1BA999" }}>Log In</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => setMode("signup", setModeType("signup"))}
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

              <Text style={{ marginTop: 20, fontSize: 12, color: "#303247" }}>
                <Text style={{ color: "#2BAB9E" }}>Please read</Text> Terms and
                Conditions
              </Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default AuthScreen;
