import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <View style={styles.headerContainer}>
      {/* {isSidebarOpen && <SideBar onClose={toggleSidebar} />} */}
      <TouchableOpacity style={styles.drawerIcon} onPress={toggleSidebar}>
        <Ionicons name="menu" size={24} color="#000" />
      </TouchableOpacity>
      <View style={styles.titleContainer}>
        <Ionicons name="location" size={24} color="#000" />
        <Text style={styles.title}>California, US</Text>
      </View>
      <View style={styles.iconsContainer}>
        <TouchableOpacity style={styles.icon}>
          <Ionicons name="person" size={24} color="#000" />
        </TouchableOpacity>
        {/* <TouchableOpacity style={styles.icon}>
          <Ionicons name="notifications" size={24} color="#000" />
        </TouchableOpacity> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
    backgroundColor: "#fff",
  },
  drawerIcon: {
    marginRight: 8,
  },
  titleContainer: {
    flex: 1,
    alignItems: "center",
    marginLeft: 8,
    marginRight: 8,
    justifyContent: "center",
    flexDirection: "row",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#303247",
    textAlign: "center",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "bold",
    lineHeight: 20,
    height: 20,
  },
  iconsContainer: {
    flexDirection: "row",
  },
  icon: {
    marginLeft: 8,
  },
});

export default Header;
