import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const Notification1 = () => {
  return (
    <View style={styles.notification}>
      <Text style={[styles.notifications, styles.timeTypo]}>Notifications</Text>
      <Text style={[styles.hiAyhamAl, styles.alertFlexBox]}>
        Hi, Ayham Al Ali
      </Text>
      <View style={styles.homeIndicator}>
        <View style={styles.color} />
      </View>
      <View style={[styles.groupParent, styles.parentPosition]}>
        <View style={[styles.rectangleParent, styles.statusbarPosition]}>
          <View style={[styles.groupChild, styles.statusbarPosition]} />
          <Text
            style={[styles.yourWaterLevels, styles.alertFlexBox]}
          >{`Your water levels hve increased.....
blah blah..`}</Text>
          <Image
            style={[styles.confettiIcon, styles.headerPosition]}
            contentFit="cover"
            source={require("../assets/confetti.png")}
          />
        </View>
        <Text style={[styles.alert, styles.alertFlexBox]}>ALERT!</Text>
      </View>
      <Image
        style={styles.happyEmojiSvgrepoCom1Icon}
        contentFit="cover"
        source={require("../assets/happyemojisvgrepocom-1.png")}
      />
      <View style={[styles.buttonWrapper, styles.buttonPosition]}>
        <View style={[styles.button, styles.buttonPosition]}>
          <Text style={[styles.goToHome, styles.goToHomeLayout]}>
            Go to Home
          </Text>
        </View>
      </View>
      <View style={[styles.header, styles.headerPosition]}>
        <View style={[styles.statusbar, styles.statusbarPosition]}>
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
          <Text style={[styles.time, styles.timeTypo]}>9:41</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  timeTypo: {
    textAlign: "center",
    fontFamily: FontFamily.semibold,
    fontWeight: "600",
  },
  alertFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  parentPosition: {
    width: 353,
    marginLeft: -176.5,
    left: "50%",
  },
  statusbarPosition: {
    bottom: "0%",
    position: "absolute",
  },
  headerPosition: {
    top: 0,
    position: "absolute",
  },
  buttonPosition: {
    width: 194,
    left: "50%",
    position: "absolute",
  },
  goToHomeLayout: {
    letterSpacing: -0.1,
    lineHeight: 20,
    fontSize: FontSize.medium2_size,
  },
  notifications: {
    top: 66,
    fontSize: FontSize.semibold_size,
    lineHeight: 32,
    color: Color.neutral1,
    left: "50%",
    marginLeft: -62.5,
    position: "absolute",
  },
  hiAyhamAl: {
    top: 119,
    fontWeight: "500",
    fontFamily: FontFamily.medium,
    color: Color.neutral4,
    lineHeight: 20,
    letterSpacing: -0.1,
    fontSize: FontSize.medium2_size,
    left: "50%",
    marginLeft: -62.5,
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
    width: 375,
    left: 0,
    bottom: 0,
    position: "absolute",
  },
  groupChild: {
    height: "74.29%",
    top: "25.71%",
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorAliceblue,
    width: 340,
    bottom: "0%",
    marginLeft: -176.5,
    left: "50%",
  },
  yourWaterLevels: {
    width: "74.79%",
    top: "54.29%",
    left: "7.65%",
    fontSize: FontSize.medium1_size,
    fontFamily: FontFamily.headingH1Regular,
    color: Color.colorDimgray_300,
  },
  confettiIcon: {
    left: 283,
    width: 70,
    height: 76,
  },
  rectangleParent: {
    top: "0%",
    height: "100%",
    bottom: "0%",
    width: 353,
    marginLeft: -176.5,
    left: "50%",
  },
  alert: {
    marginLeft: -149.5,
    top: "37.14%",
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.lightGray11,
    fontSize: FontSize.medium2_size,
    textAlign: "left",
    left: "50%",
  },
  groupParent: {
    height: "17.24%",
    top: "33.37%",
    bottom: "49.38%",
    position: "absolute",
  },
  happyEmojiSvgrepoCom1Icon: {
    top: 162,
    left: 138,
    width: 100,
    height: 100,
    position: "absolute",
    overflow: "hidden",
  },
  goToHome: {
    color: Color.lightGray0,
    lineHeight: 20,
    textAlign: "center",
    fontFamily: FontFamily.semibold,
    fontWeight: "600",
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
    left: 0,
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
    lineHeight: 20,
    position: "absolute",
  },
  statusbar: {
    right: "0%",
    left: "0%",
    top: "0%",
    height: "100%",
    bottom: "0%",
    width: "100%",
  },
  header: {
    left: 20,
    height: 44,
    width: 375,
  },
  notification: {
    backgroundColor: Color.lightGray0,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Notification1;
