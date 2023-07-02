// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import {
//   HomeIcon as HomeOutline,
//   HeartIcon as HeartOutline,
//   ShoppingBagIcon as BagOutline,
// } from "react-native-heroicons/outline";
// import {
//   HomeIcon as HomeSolid,
//   HeartIcon as HeartSolid,
//   ShoppingBagIcon as BagSolid,
// } from "react-native-heroicons/solid";
// import HomeScreen from "../../Home/HomeScreen";
// import { themeColors } from "../../../constant/color";
// import { View } from "react-native";
// export function HomeTabs() {
//   const Tab = createBottomTabNavigator();
//   const ios = Platform.OS == "ios";
//   return (
//     <Tab.Navigator
//       screenOptions={({ route }) => ({
//         headerShown: false,
//         tabBarShowLabel: false,
//         tabBarIcon: ({ focused }) => menuIcons(route, focused),
//         tabBarStyle: {
//           marginBottom: 20,
//           height: 75,
//           alignItems: "center",

//           borderRadius: 100,
//           marginHorizontal: 20,
//           backgroundColor: themeColors.bgLight,
//         },
//         tabBarItemStyle: {
//           marginTop: ios ? 30 : 0,
//         },
//       })}
//     >
//       <Tab.Screen name="home" component={HomeScreen} />
//       <Tab.Screen name="favourite" component={HomeScreen} />
//       <Tab.Screen name="cart" component={HomeScreen} />
//     </Tab.Navigator>
//   );
// }

// const menuIcons = (route, focused) => {
//   let icon;

//   if (route.name === "home") {
//     icon = focused ? (
//       <HomeSolid size="30" color={themeColors.bgLight} />
//     ) : (
//       <HomeOutline size="30" strokeWidth={2} color="white" />
//     );
//   } else if (route.name === "favourite") {
//     icon = focused ? (
//       <HeartSolid size="30" color={themeColors.bgLight} />
//     ) : (
//       <HeartOutline size="30" strokeWidth={2} color="white" />
//     );
//   } else if (route.name === "cart") {
//     icon = focused ? (
//       <BagSolid size="30" color={themeColors.bgLight} />
//     ) : (
//       <BagOutline size="30" strokeWidth={2} color="white" />
//     );
//   }

//   let buttonClass = focused ? "bg-white" : "";
//   return (
//     <View
//       className={"flex items-center rounded-full p-3 shadow " + buttonClass}
//     >
//       {icon}
//     </View>
//   );
// };
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import HomeScreen from "../../Home/HomeScreen";

const Tab = createMaterialBottomTabNavigator();

export function HomeTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#f0edf6"
      inactiveColor="#3e2465"
      barStyle={{ backgroundColor: "#694fad", paddingBottom: 10 }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={HomeScreen}
        options={{
          tabBarLabel: "Updates",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={HomeScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
