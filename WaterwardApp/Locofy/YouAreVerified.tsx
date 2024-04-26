import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const YouAreVerified = () => {
  return (
    <View style={styles.youAreVerified}>
      <View style={styles.iconButton}>
        <Image
          style={styles.completedIcon}
          contentFit="cover"
          source={require("../assets/completed-icon.png")}
        />
        <View style={styles.continueButtonFlexBox}>
          <Text style={styles.youAreVerified2}>You are Verified</Text>
          <Text
            style={[styles.congratulationsToYou, styles.nextTypo]}
          >{`Congratulations to you. You are now Verified!
Kindly proceed to log in `}</Text>
        </View>
        <View style={[styles.continueButton, styles.continueButtonFlexBox]}>
          <Text style={[styles.next, styles.nextTypo]}>Continue</Text>
        </View>
      </View>
      <View style={[styles.header, styles.headerPosition]}>
        <View style={styles.statusbar}>
          <View style={styles.battery}>
            <View style={[styles.border, styles.headerPosition]} />
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
    </View>
  );
};

const styles = StyleSheet.create({
  nextTypo: {
    fontFamily: FontFamily.headingH1Regular,
    textAlign: "center",
  },
  continueButtonFlexBox: {
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  headerPosition: {
    top: 0,
    position: "absolute",
  },
  completedIcon: {
    width: 260,
    height: 168,
  },
  youAreVerified2: {
    fontSize: FontSize.defaultRegularTitle2_size,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.foundationGreyGrey800,
    textAlign: "left",
  },
  congratulationsToYou: {
    fontSize: FontSize.medium2_size,
    color: Color.foundationGreyGrey300,
    marginTop: 5,
    textAlign: "center",
  },
  next: {
    fontSize: FontSize.headingH4Regular_size,
    color: Color.foundationGreenGreen50,
    textAlign: "center",
  },
  continueButton: {
    shadowColor: "rgba(93, 204, 252, 0.4)",
    shadowOffset: {
      width: 4,
      height: 8,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorLightskyblue_100,
    width: 325,
    flexDirection: "row",
    paddingHorizontal: Padding.p_64xl,
    paddingVertical: Padding.p_smi,
    overflow: "hidden",
  },
  iconButton: {
    marginTop: -178.5,
    marginLeft: -162.5,
    top: "50%",
    alignItems: "center",
    left: "50%",
    position: "absolute",
  },
  border: {
    left: 0,
    borderRadius: 3,
    borderStyle: "solid",
    borderColor: Color.colorDarkslategray,
    borderWidth: 1,
    width: 22,
    opacity: 0.35,
    height: 11,
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
    marginLeft: -187.5,
    width: 375,
    height: 44,
    left: "50%",
    top: 0,
  },
  youAreVerified: {
    backgroundColor: Color.lightGray0,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default YouAreVerified;
