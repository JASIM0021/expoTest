import React, { useState, useEffect } from "react";
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

import Styles from "./Login.style";

const LoginScreen = () => {
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const [showOtpScreen, setShowOtpScreen] = useState(false);
  const [mode, setMode] = useState(undefined);
  const [modeType, setModeType] = useState("login");
  const [scrollY, setScrollY] = useState(90);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      _keyboardDidShow
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      _keyboardDidHide
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const _keyboardDidShow = (event) => {
    setKeyboardHeight(event.endCoordinates.height);
    setScrollY(0);
  };

  const _keyboardDidHide = () => {
    setKeyboardHeight(0);
    setScrollY(90);
  };

  const renderOTP = () => {
    if (modeType !== "sendOTP") {
      return null;
    }

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

  const renderEmailPassword = () => {
    if (modeType !== "email" || mode !== "signup") {
      return null;
    }

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

            {mode === undefined && (
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
                  Join a growing number of spontaneous people for real
                  connections
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
                  <Text style={{ fontSize: 16, color: "#ffffff" }}>
                    Sign Up
                  </Text>
                </TouchableOpacity>

                <Text style={{ marginTop: 20, fontSize: 12, color: "#303247" }}>
                  <Text style={{ color: "#2BAB9E" }}>Please read</Text> Terms
                  and Conditions
                </Text>
              </View>
            )}

            {mode === "login" ? (
              <View style={{ width: 300, alignItems: "center" }}>
                {modeType === "login" ? (
                  <>
                    <View style={{ width: 200 }}>
                      <Text
                        style={{
                          fontSize: 24,
                          color: "#000000",
                          textAlign: "center",
                        }}
                      >
                        Login and{" "}
                        <Text style={{ color: "#8AF3FF" }}>Enjoy Your</Text>{" "}
                        Moments
                      </Text>
                    </View>

                    <TextInput
                      inputMode="numeric"
                      placeholder="+1000000000"
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
                      onPress={() => setModeType("sendOTP")}
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
                        Send OTP
                      </Text>
                    </TouchableOpacity>
                  </>
                ) : (
                  renderOTP()
                )}

                <Text style={{ marginTop: 20, fontSize: 12, color: "#2BAB9E" }}>
                  Don't have an account?
                  <Text
                    onPress={() => setMode("signup", setModeType("signup"))}
                    style={{ color: "#303247" }}
                  >
                    {" "}
                    Sign Up
                  </Text>
                </Text>
              </View>
            ) : null}

            {mode === "signup" ? (
              <View style={{ width: 300, alignItems: "center" }}>
                {(modeType === "signup" || modeType === "email") && (
                  <View style={{ width: 300 }}>
                    <Text
                      style={{
                        fontSize: 24,
                        color: "#000000",
                        textAlign: "center",
                      }}
                    >
                      Sign Up &{" "}
                      <Text style={{ color: "#8AF3FF" }}>Hangout</Text> to Make
                      Real Connections
                    </Text>
                  </View>
                )}

                {modeType === "signup" && (
                  <>
                    <TextInput
                      inputMode="numeric"
                      placeholder="+1000000000"
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
                      onPress={() => setModeType("sendOTP")}
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
                        Send OTP
                      </Text>
                    </TouchableOpacity>
                  </>
                )}
                {renderOTP()}
                {renderEmailPassword()}
                <Text style={{ marginTop: 20, fontSize: 12, color: "#2BAB9E" }}>
                  Already have an account?
                  <Text
                    onPress={() => setMode("login", setModeType("login"))}
                    style={{ color: "#303247" }}
                  >
                    {" "}
                    Log In
                  </Text>
                </Text>
              </View>
            ) : null}
          </View>
          <View style={{ height: 20, width: "100%" }} />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default LoginScreen;
