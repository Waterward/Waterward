import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const NewsGoals = () => {
  return (
    <View style={styles.newsgoals}>
      <Text style={styles.today16}>Today - 16 June</Text>
      <Text style={styles.hiAyhamAl}>Hi, Ayham Al Ali</Text>
      <View style={[styles.homeIndicator, styles.headerPosition]}>
        <View style={styles.color} />
      </View>
      <View style={[styles.groupParent, styles.parentPosition]}>
        <View style={[styles.rectangleParent, styles.statusbarPosition]}>
          <View style={styles.groupChild} />
          <Text style={styles.youCanGet}>
            You can get everything in life you want if you will just help enough
            other people get what they want.
          </Text>
          <Image
            style={[styles.confettiIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/confetti1.png")}
          />
          <Image
            style={styles.goldTrophyInAir}
            contentFit="cover"
            source={require("../assets/gold-trophy-in-air.png")}
          />
        </View>
        <Text style={[styles.congratulations, styles.congratulationsPosition]}>
          Congratulations!
        </Text>
        <Text style={[styles.harryHasArchive, styles.congratulationsPosition]}>
          Harry has archive your goal today
        </Text>
      </View>
      <Image
        style={[styles.happyEmojiSvgrepoCom1Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/happyemojisvgrepocom-1.png")}
      />
      <View style={[styles.buttonWrapper, styles.buttonPosition]}>
        <View style={[styles.button, styles.buttonPosition]}>
          <Text style={[styles.goToHome, styles.timeTypo]}>Go to Home</Text>
        </View>
      </View>
      <View style={[styles.header, styles.headerPosition]}>
        <View style={[styles.statusbar, styles.statusbarPosition]}>
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
          <Text style={[styles.time, styles.timeTypo]}>9:41</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  parentPosition: {
    width: 353,
    marginLeft: -176.5,
    left: "50%",
  },
  statusbarPosition: {
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  iconLayout: {
    width: 100,
    position: "absolute",
  },
  congratulationsPosition: {
    color: Color.lightGray11,
    marginLeft: -149.5,
    textAlign: "left",
    left: "50%",
    position: "absolute",
  },
  buttonPosition: {
    width: 194,
    left: "50%",
    position: "absolute",
  },
  timeTypo: {
    textAlign: "center",
    lineHeight: 20,
    fontFamily: FontFamily.semibold,
    fontWeight: "600",
  },
  today16: {
    marginLeft: -80.5,
    top: 64,
    fontSize: FontSize.semibold_size,
    lineHeight: 32,
    color: Color.neutral1,
    textAlign: "left",
    fontFamily: FontFamily.semibold,
    fontWeight: "600",
    left: "50%",
    position: "absolute",
  },
  hiAyhamAl: {
    marginLeft: -62.5,
    top: 119,
    fontWeight: "500",
    fontFamily: FontFamily.medium,
    color: Color.neutral4,
    lineHeight: 20,
    letterSpacing: -0.1,
    fontSize: FontSize.medium2_size,
    textAlign: "left",
    left: "50%",
    position: "absolute",
  },
  color: {
    marginLeft: -66.5,
    bottom: 9,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.neutral1,
    width: 134,
    height: 5,
    left: "50%",
    position: "absolute",
  },
  homeIndicator: {
    height: 34,
    opacity: 0.3,
    bottom: 0,
  },
  groupChild: {
    height: "76.37%",
    top: "8.04%",
    bottom: "15.59%",
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorAliceblue,
    width: 340,
    marginLeft: -176.5,
    left: "50%",
    position: "absolute",
  },
  youCanGet: {
    width: "74.79%",
    top: "43.55%",
    left: "7.65%",
    fontFamily: FontFamily.headingH1Regular,
    color: Color.colorDimgray_300,
    fontSize: FontSize.medium2_size,
    textAlign: "left",
    position: "absolute",
  },
  confettiIcon: {
    left: 253,
    height: 108,
    top: 0,
  },
  goldTrophyInAir: {
    top: 227,
    left: 10,
    width: 174,
    height: 221,
    position: "absolute",
  },
  rectangleParent: {
    width: 353,
    marginLeft: -176.5,
    left: "50%",
  },
  congratulations: {
    top: "20.1%",
    fontSize: FontSize.size_5xl,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
  },
  harryHasArchive: {
    top: 146,
    fontSize: FontSize.headingH4Regular_size,
    lineHeight: 18,
    width: 226,
    fontFamily: FontFamily.semibold,
    fontWeight: "600",
    color: Color.lightGray11,
    marginLeft: -149.5,
  },
  groupParent: {
    height: "55.15%",
    top: "33.37%",
    bottom: "11.48%",
    position: "absolute",
  },
  happyEmojiSvgrepoCom1Icon: {
    top: 162,
    left: 138,
    height: 100,
    overflow: "hidden",
  },
  goToHome: {
    color: Color.lightGray0,
    letterSpacing: -0.1,
    textAlign: "center",
    fontSize: FontSize.medium2_size,
  },
  button: {
    marginLeft: -97,
    shadowColor: "rgba(0, 0, 0, 0.3)",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowRadius: 6,
    elevation: 6,
    shadowOpacity: 1,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorLightskyblue_200,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_sm,
    bottom: 0,
  },
  buttonWrapper: {
    marginLeft: -96.5,
    bottom: 45,
    height: 48,
  },
  border: {
    borderRadius: 3,
    borderStyle: "solid",
    borderColor: Color.colorDarkslategray,
    borderWidth: 1,
    width: 22,
    opacity: 0.35,
    height: 11,
    top: 0,
    left: 0,
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
    color: Color.colorDarkslategray,
    width: 54,
    position: "absolute",
  },
  statusbar: {
    right: "0%",
    left: "0%",
    width: "100%",
  },
  header: {
    height: 44,
    top: 0,
  },
  newsgoals: {
    backgroundColor: Color.lightGray0,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default NewsGoals;
