import "react-native-gesture-handler";

import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";

import HomeNavigation from "./src/screens/Navigations/HomeNavigation";
import AuthNavigation from "./src/screens/Navigations/AuthNavigation";

export default function App() {
  const [token, setToken] = useState(null);
  return (
    <NavigationContainer>
      {token ? <HomeNavigation /> : <AuthNavigation />}
    </NavigationContainer>
  );
}
