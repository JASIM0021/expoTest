import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import { TextInput } from "react-native-gesture-handler";
import EventCard from "../Card/EventCard";

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.aHomePageEvent}>
      <EventCard />

      <Pressable
        style={styles.filter}
        onPress={() => navigation.navigate("AEventFilter")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../../assets/filter.png")}
        />
      </Pressable>
      <View style={[styles.searchBar, styles.searchLayout]}>
        <View style={[styles.searchBarChild, styles.searchLayout]} />
        <Image
          style={[styles.searchBarItem, styles.groupInnerPosition]}
          contentFit="cover"
          source={require("../../assets/group-2.png")}
        />
        {/* <Text style={[styles.searchPlaces, styles.searchPlacesTypo]}>
          Search places...
        </Text> */}
        <TextInput
          style={[styles.searchPlaces, styles.searchPlacesTypo]}
          placeholder="Search places..."
        />
      </View>
      <Text style={[styles.hangoutsNearYouContainer, styles.interestedTypo]}>
        <Text style={styles.hangouts}>{`Hangouts
`}</Text>
        <Text style={styles.near}>Near</Text>
        <Text style={styles.hangouts}> You</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  eventsTypo: {
    textAlign: "left",
    color: Color.lightseagreen_100,
    fontFamily: FontFamily.gilroySemiBoldRegular,
    position: "absolute",
  },
  cardLayout: {
    height: 401,
    left: 40,
  },
  childShadowBox: {
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.07)",
    backgroundColor: Color.gray_100,
    height: 401,
    left: 0,
    top: 0,
  },
  itemPosition: {
    height: 230,
    left: 0,
    top: 0,
  },
  hotelTypo: {
    fontSize: FontSize.size_5xl,
    left: 22,
    color: Color.darkslategray,
    textAlign: "left",
    fontFamily: FontFamily.gilroySemiBoldRegular,
    position: "absolute",
  },
  californiaTypo: {
    color: Color.lightsteelblue,
    fontFamily: FontFamily.gilroyMediumRegular,
    lineHeight: 20,
    textAlign: "left",
    position: "absolute",
  },
  // innerLayout: {
  //   transform: [
  //     {
  //       rotate: "180deg",
  //     },
  //   ],
  //   height: 49,
  //   borderRadius: Border.br_5xl_5,
  //   top: 330,
  //   backgroundColor: Color.lightseagreen_200,
  //   position: "absolute",
  // },
  childLayout: {
    width: 49,
    left: 70,
  },
  interestedTypo: {
    textAlign: "center",
    fontFamily: FontFamily.gilroySemiBoldRegular,
    position: "absolute",
  },
  iconChildLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  card1Layout: {
    width: 313,
    position: "absolute",
  },
  card1Position: {
    top: 329,
    transform: [
      {
        rotate: "180deg",
      },
    ],
    height: 49,
    backgroundColor: Color.lightseagreen_200,
    borderRadius: Border.br_5xl_5,
    position: "absolute",
  },
  parentLayout: {
    height: 33,
    width: 83,
    position: "absolute",
  },
  groupChildLayout: {
    width: 33,
    borderRadius: Border.br_base_5,
    height: 33,
    top: 0,
  },
  groupInnerPosition: {
    left: 20,
    position: "absolute",
  },
  searchLayout: {
    height: 59,
    width: 243,
    position: "absolute",
  },
  searchPlacesTypo: {
    fontSize: FontSize.size_sm,
    textAlign: "center",
    lineHeight: 20,
    position: "absolute",
  },
  topLayout: {
    height: 20,
    width: 314,
    position: "absolute",
  },
  aHomePageEventChild: {
    top: 1435,
    left: 117,
    width: 322,
    height: 322,
    position: "absolute",
  },
  aHomePageEventItem: {
    width: 424,
    height: 424,
    left: 0,
    top: 0,
    position: "absolute",
  },
  upcomingEvents: {
    top: 832,
    fontSize: FontSize.size_xl,
    color: Color.lightseagreen_100,
    fontFamily: FontFamily.gilroySemiBoldRegular,
    left: 39,
  },
  card3Child: {
    width: 315,
    position: "absolute",
  },
  card3Item: {
    width: 315,
    position: "absolute",
  },
  hotelAbc47: {
    top: 264,
    color: Color.darkslategray,
  },
  californiaDistance2km: {
    top: 295,
    fontSize: FontSize.size_xs,
    left: 21,
    color: Color.lightsteelblue,
  },
  card3Inner: {
    width: 208,
    left: 294,
    height: 49,
    borderRadius: Border.br_5xl_5,
    top: 330,
  },
  rectangleView: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
    height: 49,
    borderRadius: Border.br_5xl_5,
    top: 330,
    backgroundColor: Color.lightseagreen_200,
    position: "absolute",
    left: 70,
  },
  interested: {
    top: 347,
    left: 161,
    width: 59,
    color: Color.white,
    fontSize: FontSize.size_xs,
  },
  groupIcon: {
    top: "86.53%",
    bottom: "9.64%",
    left: "12.7%",
    right: "83.49%",
    width: "3.81%",
    height: "3.83%",
    maxWidth: "100%",
  },
  card3: {
    top: 1314,
    width: 315,
    position: "absolute",
  },
  card2Child: {
    width: 315,
    position: "absolute",
  },
  card2Inner: {
    width: 208,
    left: 294,
    height: 49,
    borderRadius: Border.br_5xl_5,
    top: 330,
  },

  hotelAbc472: {
    top: 263,
    width: 149,
    color: Color.darkslategray,
  },
  californiaDistance2km2: {
    top: 294,
    left: 34,
    width: 141,
    fontSize: FontSize.size_xs,
  },
  card1Inner: {
    left: 292,
    width: 207,
  },
  card1Child1: {
    width: 49,
    left: 70,
  },
  hangOutHere: {
    top: 346,
    left: 149,
    width: 81,
    color: Color.white,
    fontSize: FontSize.size_xs,
  },

  groupChild: {
    left: 0,
    position: "absolute",
  },
  groupItem: {
    left: 10,
    position: "absolute",
  },
  groupInner: {
    width: 33,
    borderRadius: Border.br_base_5,
    height: 33,
    top: 0,
  },
  rectangleIcon: {
    left: 30,
    position: "absolute",
  },
  groupChild1: {
    left: 40,
    position: "absolute",
  },
  groupChild2: {
    left: 50,
    backgroundColor: Color.lightseagreen_200,
    borderRadius: Border.br_base_5,
    position: "absolute",
  },
  rectangleParent: {
    left: 0,
    top: 0,
  },
  text: {
    top: 7,
    left: 60,
    fontSize: 11,
    width: 13,
    height: 26,
    color: Color.white,
    lineHeight: 20,
    textAlign: "left",
    fontFamily: FontFamily.gilroySemiBoldRegular,
    position: "absolute",
  },
  groupParent: {
    top: 269,
    left: 210,
  },
  card1Child3: {
    height: "2.87%",
    width: "2.86%",
    top: "74.06%",
    right: "90.48%",
    bottom: "23.07%",
    left: "6.67%",
  },
  startingToday500pm: {
    top: 241,
    fontSize: FontSize.size_3xs,
    width: 105,
    left: 21,
    color: Color.lightsteelblue,
  },
  card1: {
    top: 380,
    height: 401,
    left: 40,
  },
  eventsNearYou1: {
    fontSize: FontSize.size_xl,
    color: Color.lightseagreen_100,
    fontFamily: FontFamily.gilroySemiBoldRegular,
    left: 0,
    top: 0,
  },
  seeAll: {
    top: 5,
    left: 276,
    fontSize: FontSize.size_xs,
  },
  eventsNearYou: {
    top: 326,
    height: 25,
    width: 314,
    left: 39,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  filter: {
    left: 283,
    top: 92,
    width: 80,
    height: 80,
    position: "absolute",
  },
  searchBarChild: {
    borderRadius: Border.br_xl,
    borderStyle: "solid",
    borderColor: "#8af3ff",
    borderWidth: 1,
    left: 0,
    top: 0,
    backgroundColor: Color.white,
    height: 59,
    width: 243,
  },
  searchBarItem: {
    top: 21,
    width: 18,
    height: 18,
  },
  searchPlaces: {
    top: 20,
    left: 49,
    color: "#2aab9d",
    fontFamily: FontFamily.gilroyMediumRegular,
    fontSize: FontSize.size_sm,
  },
  searchBar: {
    top: 100,
    left: 40,
  },
  hangouts: {
    color: Color.darkslategray,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.gilroySemiBoldRegular,
  },
  near: {
    color: Color.paleturquoise,
  },
  hangoutsNearYouContainer: {
    top: 11,
    left: 116,
    fontSize: 30,
    textTransform: "uppercase",
  },
  topNavChild: {
    top: 3,
    left: -1,
    width: 15,
    height: 12,
    position: "absolute",
  },
  californiaUs: {
    left: 122,
    fontFamily: FontFamily.gilroyBoldRegular,
    color: Color.darkslategray,
    top: 0,
  },
  vectorIcon: {
    width: "5.41%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "94.59%",
    height: "100%",
  },
  topNavItem: {
    height: "76.69%",
    width: "3.82%",
    top: "10%",
    right: "63.69%",
    bottom: "13.31%",
    left: "32.48%",
  },
  topNav1: {
    left: 0,
    top: 0,
  },
  topNav: {
    top: 53,
    left: 40,
  },
  aHomePageEvent: {
    flex: 1,
    height: 1722,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default HomeScreen;
