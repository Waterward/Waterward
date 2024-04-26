import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const Onboarding1 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.onboarding8}>
      <View style={styles.header}>
        <View style={styles.statusbar}>
          <View style={styles.battery}>
            <View style={styles.border} />
            <Image
              style={styles.capIcon}
              contentFit="cover"
              source={require("../assets/cap.png")}
            />
            <View style={styles.capacity} />
          </View>
          <Image
            style={styles.wifiIcon}
            contentFit="cover"
            source={require("../assets/wifi.png")}
          />
          <Image
            style={styles.cellularConnectionIcon}
            contentFit="cover"
            source={require("../assets/cellular-connection.png")}
          />
          <Text style={styles.time}>9:41</Text>
        </View>
      </View>
      <View style={[styles.swipeUp, styles.swipeUpLayout]}>
        <View style={[styles.btnhome, styles.swipeUpLayout]}>
          <Image
            style={[styles.btnhome, styles.swipeUpLayout]}
            contentFit="cover"
            source={require("../assets/background.png")}
          />
          <View style={styles.view} />
        </View>
      </View>
      <Image
        style={styles.groupIcon}
        contentFit="cover"
        source={require("../assets/group1.png")}
      />
      <Pressable
        style={[styles.btnnext, styles.btnnextLayout]}
        onPress={() => navigation.navigate("Onboarding2")}
      >
        <View style={[styles.background, styles.view3Bg]} />
        <Text style={[styles.next, styles.nextTypo]}>NEXT</Text>
      </Pressable>
      <View style={styles.dotslider}>
        <View style={[styles.view1, styles.viewLayout]} />
        <View style={[styles.view2, styles.viewLayout]} />
        <View style={[styles.view3, styles.viewLayout]} />
      </View>
      <Text style={styles.trackingYourWater}>
        Tracking your water tanks now is as easy as a single tap.
      </Text>
      <Text style={[styles.trackTheHouse, styles.nextTypo]}>
        Track the house daily water usage easily.
      </Text>
      <Image
        style={styles.onboarding11}
        contentFit="cover"
        source={require("../assets/onboarding-1-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  swipeUpLayout: {
    height: 35,
    width: 375,
    left: 0,
    position: "absolute",
  },
  btnnextLayout: {
    height: 60,
    width: 318,
    position: "absolute",
  },
  view3Bg: {
    backgroundColor: Color.colorLightskyblue_200,
    left: 0,
  },
  nextTypo: {
    fontWeight: "700",
    textAlign: "center",
    position: "absolute",
  },
  viewLayout: {
    width: 23,
    borderRadius: Border.br_31xl,
    height: 6,
    top: 0,
    position: "absolute",
  },
  border: {
    borderRadius: 3,
    borderStyle: "solid",
    borderColor: Color.colorDarkslategray,
    borderWidth: 1,
    width: 22,
    opacity: 0.35,
    height: 11,
    left: 0,
    top: 0,
    position: "absolute",
  },
  capIcon: {
    top: 4,
    left: 23,
    width: 1,
    height: 4,
    opacity: 0.4,
    position: "absolute",
  },
  capacity: {
    top: 2,
    left: 2,
    borderRadius: 1,
    backgroundColor: Color.colorDarkslategray,
    width: 18,
    height: 7,
    position: "absolute",
  },
  battery: {
    top: 17,
    left: 336,
    width: 24,
    height: 11,
    position: "absolute",
  },
  wifiIcon: {
    width: 15,
    height: 11,
  },
  cellularConnectionIcon: {
    width: 17,
    height: 11,
  },
  time: {
    top: 13,
    left: 21,
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: FontFamily.semibold,
    color: Color.colorDarkslategray,
    width: 54,
    textAlign: "center",
    position: "absolute",
  },
  statusbar: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  header: {
    height: 44,
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
  },
  btnhome: {
    top: 0,
  },
  view: {
    top: 21,
    left: 121,
    borderRadius: Border.br_11xl,
    width: 134,
    height: 5,
    backgroundColor: Color.lightGrey,
    position: "absolute",
  },
  swipeUp: {
    top: 777,
  },
  groupIcon: {
    top: "21.5%",
    left: "44.48%",
    width: 0,
    height: 0,
    position: "absolute",
  },
  background: {
    borderRadius: Border.br_5xs,
    height: 60,
    width: 318,
    position: "absolute",
    top: 0,
  },
  next: {
    top: 19,
    left: 141,
    textTransform: "uppercase",
    fontFamily: FontFamily.poppinsBold,
    color: Color.lightGray0,
    fontSize: FontSize.medium2_size,
  },
  btnnext: {
    top: 690,
    left: 28,
  },
  view1: {
    left: 28,
    backgroundColor: Color.lightGrey,
  },
  view2: {
    left: 56,
    backgroundColor: Color.lightGrey,
  },
  view3: {
    backgroundColor: Color.colorLightskyblue_200,
    left: 0,
  },
  dotslider: {
    top: 614,
    left: 148,
    width: 79,
    height: 6,
    position: "absolute",
  },
  trackingYourWater: {
    top: 527,
    left: 29,
    lineHeight: 22,
    fontFamily: FontFamily.headingH1Regular,
    color: Color.colorDimgray_100,
    fontSize: FontSize.medium2_size,
    width: 318,
    textAlign: "center",
    position: "absolute",
  },
  trackTheHouse: {
    top: 445,
    left: 37,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.interBold,
    color: Color.lightGray11,
    width: 302,
  },
  onboarding11: {
    marginLeft: -139.5,
    top: 159,
    left: "50%",
    width: 279,
    height: 200,
    position: "absolute",
  },
  onboarding8: {
    backgroundColor: Color.lightGray0,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Onboarding1;