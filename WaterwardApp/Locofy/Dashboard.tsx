import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontFamily, Color, FontSize, Border, Padding } from "../GlobalStyles";

const Dashboard = () => {
  return (
    <View style={styles.dashboard}>
      <Text style={[styles.goodMorning, styles.goodMorningTypo]}>
        Good Morning,
      </Text>
      <Text style={styles.ayhamAlAli}>Ayham Al Ali</Text>
      <View style={[styles.roundedIcon, styles.buttonFlexBox]}>
        <Image
          style={styles.hiconBoldNotification3}
          contentFit="cover"
          source={require("../assets/hicon--bold--notification-3.png")}
        />
        <Image
          style={styles.roundedIconChild}
          contentFit="cover"
          source={require("../assets/ellipse-1.png")}
        />
      </View>
      <View style={[styles.button, styles.buttonFlexBox]}>
        <Text style={styles.goToStatistics}>Go To Statistics</Text>
      </View>
      <Text style={styles.youGot50}>
        You got 50% of today’s goal, keep focus on your health!
      </Text>
      <View style={styles.commingSoon}>
        <Image
          style={styles.commingSoonChild}
          contentFit="cover"
          source={require("../assets/vector-1.png")}
        />
        <Image
          style={styles.commingSoonItem}
          contentFit="cover"
          source={require("../assets/vector-2.png")}
        />
        <Text style={[styles.mainTank, styles.button1Position]}>Main Tank</Text>
        <Image
          style={styles.frameIcon}
          contentFit="cover"
          source={require("../assets/frame.png")}
        />
        <Text style={[styles.left7000ml10000ml, styles.button1Position]}>
          <Text style={styles.left}>{`70% left `}</Text>
          <Text style={styles.ml10000ml}>(7000ml/10000ml)</Text>
        </Text>
        <View style={[styles.button1, styles.button1Position]}>
          <View style={styles.shadow} />
          <View style={[styles.button2, styles.buttonFlexBox]}>
            <Text style={[styles.moreDetails, styles.goodMorningTypo]}>
              More Details
            </Text>
          </View>
        </View>
        <View style={styles.commingSoonInner} />
        <Image
          style={[styles.groupIcon, styles.groupIconLayout]}
          contentFit="cover"
          source={require("../assets/group-89.png")}
        />
      </View>
      <Image
        style={[styles.dashboardChild, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group-90.png")}
      />
      <View style={styles.header}>
        <View style={[styles.statusbar, styles.groupPosition]}>
          <View style={[styles.battery, styles.batteryPosition]}>
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
          <Text style={[styles.time, styles.timeFlexBox]}>9:41</Text>
        </View>
      </View>
      <View style={[styles.rectangleParent, styles.groupPosition]}>
        <View style={[styles.groupChild, styles.groupPosition]} />
        <View style={styles.rectangleWrapper}>
          <View style={[styles.groupItem, styles.groupPosition]} />
        </View>
        <Image
          style={[styles.groupInner, styles.groupIconLayout]}
          contentFit="cover"
          source={require("../assets/group-91.png")}
        />
        <Image
          style={[styles.search1Icon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/search-1.png")}
        />
        <Image
          style={[styles.home1Icon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/home-1.png")}
        />
        <Text style={styles.home}>Home</Text>
        <Text style={[styles.analysis, styles.settingTypo]}>Analysis</Text>
        <Text style={[styles.setting, styles.settingTypo]}>Setting</Text>
        <Text style={[styles.profile, styles.settingTypo]}>Profile</Text>
        <Image
          style={[styles.userSvgrepoCom1Icon, styles.batteryPosition]}
          contentFit="cover"
          source={require("../assets/usersvgrepocom-1.png")}
        />
        <Text style={[styles.chartSimple, styles.timeFlexBox]}>
          chart-simple
        </Text>
      </View>
      <View style={[styles.maskGroupParent, styles.maskGroupLayout]}>
        <Image
          style={[styles.maskGroupIcon, styles.maskGroupLayout]}
          contentFit="cover"
          source={require("../assets/mask-group.png")}
        />
        <View style={[styles.rectangleView, styles.maskGroupLayout]} />
        <Text style={[styles.todaysWaterUsage, styles.litersTypo]}>
          Today’s Water Usage
        </Text>
        <View style={[styles.groupChild1, styles.groupChildLayout1]} />
        <View style={[styles.groupChild2, styles.groupChildLayout]} />
        <View style={[styles.groupChild3, styles.groupChildPosition2]} />
        <View style={[styles.groupChild4, styles.groupChildPosition1]} />
        <View style={[styles.groupChild5, styles.groupChildPosition]} />
        <View style={[styles.groupChild6, styles.groupChildPosition4]} />
        <View style={[styles.groupChild7, styles.groupChildLayout]} />
        <View style={[styles.groupChild8, styles.groupChildPosition2]} />
        <View style={[styles.groupChild9, styles.groupChildPosition1]} />
        <View style={[styles.groupChild10, styles.groupChildPosition]} />
        <View style={[styles.groupChild11, styles.groupChildLayout1]} />
        <View style={[styles.groupChild12, styles.groupChildLayout]} />
        <View style={[styles.groupChild13, styles.groupChildLayout1]} />
        <Text style={[styles.liters, styles.litersTypo]}>
          <Text style={styles.litersTxt}>
            <Text style={styles.text}>{`257 `}</Text>
            <Text style={styles.left}>liters</Text>
          </Text>
        </Text>
        <Image
          style={[styles.vectorIcon, styles.groupIconLayout]}
          contentFit="cover"
          source={require("../assets/vector-5.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  goodMorningTypo: {
    textAlign: "left",
    fontFamily: FontFamily.medium,
    fontWeight: "500",
  },
  buttonFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  button1Position: {
    left: 20,
    position: "absolute",
  },
  groupIconLayout: {
    maxHeight: "100%",
    position: "absolute",
  },
  groupPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  batteryPosition: {
    width: 24,
    top: 17,
    position: "absolute",
  },
  timeFlexBox: {
    letterSpacing: 0,
    textAlign: "center",
    position: "absolute",
  },
  iconPosition: {
    bottom: "50%",
    top: "20.73%",
    height: "29.27%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  settingTypo: {
    fontFamily: FontFamily.robotoRegular,
    top: "53.66%",
    letterSpacing: 0,
    color: Color.lightGray11,
    lineHeight: 16,
    fontSize: FontSize.medium1_size,
    textAlign: "center",
    position: "absolute",
  },
  maskGroupLayout: {
    height: 216,
    position: "absolute",
  },
  litersTypo: {
    display: "flex",
    alignItems: "center",
    textAlign: "left",
    fontFamily: FontFamily.medium,
    fontWeight: "500",
    position: "absolute",
  },
  groupChildLayout1: {
    height: 73,
    backgroundColor: Color.colorSkyblue,
    top: 55,
    opacity: 0.3,
  },
  groupChildLayout: {
    width: 12,
    borderTopRightRadius: Border.br_5xs,
    borderTopLeftRadius: Border.br_5xs,
    position: "absolute",
  },
  groupChildPosition2: {
    left: 110,
    borderTopRightRadius: Border.br_5xs,
    borderTopLeftRadius: Border.br_5xs,
    width: 10,
    position: "absolute",
  },
  groupChildPosition1: {
    left: 137,
    width: 12,
    borderTopRightRadius: Border.br_5xs,
    borderTopLeftRadius: Border.br_5xs,
    position: "absolute",
  },
  groupChildPosition: {
    left: 168,
    width: 12,
    borderTopRightRadius: Border.br_5xs,
    borderTopLeftRadius: Border.br_5xs,
    position: "absolute",
  },
  groupChildPosition4: {
    borderTopRightRadius: Border.br_5xs,
    borderTopLeftRadius: Border.br_5xs,
    width: 10,
    position: "absolute",
  },
  goodMorning: {
    top: 68,
    color: Color.neutral4,
    lineHeight: 20,
    textAlign: "left",
    fontFamily: FontFamily.medium,
    fontWeight: "500",
    letterSpacing: -0.1,
    left: "50%",
    marginLeft: -159.5,
    fontSize: FontSize.medium2_size,
    position: "absolute",
  },
  ayhamAlAli: {
    color: Color.neutral1,
    lineHeight: 32,
    fontSize: FontSize.semibold_size,
    fontFamily: FontFamily.semibold,
    fontWeight: "600",
    top: 92,
    textAlign: "left",
    left: "50%",
    marginLeft: -159.5,
    position: "absolute",
  },
  hiconBoldNotification3: {
    width: 20,
    height: 20,
    zIndex: 0,
    overflow: "hidden",
  },
  roundedIconChild: {
    left: 29,
    height: 10,
    zIndex: 1,
    width: 10,
    top: 0,
    position: "absolute",
  },
  roundedIcon: {
    top: 72,
    left: 307,
    borderRadius: 70,
    width: 40,
    height: 40,
    padding: Padding.p_3xs,
    backgroundColor: Color.lightGray0,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    elevation: 45,
    shadowRadius: 45,
    shadowColor: "rgba(27, 169, 225, 0.08)",
    alignItems: "center",
    flexDirection: "row",
  },
  goToStatistics: {
    textAlign: "center",
    color: Color.lightGray0,
    fontFamily: FontFamily.semibold,
    fontWeight: "600",
    lineHeight: 20,
    letterSpacing: -0.1,
    fontSize: FontSize.medium2_size,
  },
  button: {
    right: 91,
    bottom: 208,
    left: 90,
    shadowColor: "rgba(0, 0, 0, 0.3)",
    shadowRadius: 6,
    elevation: 6,
    borderRadius: Border.br_5xs,
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_sm,
    backgroundColor: Color.colorLightskyblue_200,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  youGot50: {
    top: 624,
    left: 82,
    width: 220,
    fontSize: FontSize.medium1_size,
    textAlign: "center",
    color: Color.neutral4,
    fontFamily: FontFamily.medium,
    fontWeight: "500",
    lineHeight: 20,
    letterSpacing: -0.1,
    position: "absolute",
  },
  commingSoonChild: {
    bottom: -148,
    left: -264,
    width: 618,
    height: 259,
    position: "absolute",
  },
  commingSoonItem: {
    bottom: -110,
    left: -116,
    width: 519,
    height: 206,
    position: "absolute",
  },
  mainTank: {
    width: 106,
    top: 10,
    left: 20,
    color: Color.neutral1,
    fontFamily: FontFamily.semibold,
    fontWeight: "600",
    lineHeight: 32,
    fontSize: FontSize.semibold_size,
    textAlign: "left",
  },
  frameIcon: {
    top: 22,
    width: 68,
    height: 116,
    display: "none",
    left: 225,
    position: "absolute",
    overflow: "hidden",
  },
  left: {
    fontSize: FontSize.medium2_size,
  },
  ml10000ml: {
    fontSize: 8,
  },
  left7000ml10000ml: {
    top: 42,
    textAlign: "left",
    fontFamily: FontFamily.medium,
    fontWeight: "500",
    color: Color.neutral4,
    lineHeight: 20,
  },
  shadow: {
    right: 8,
    left: 8,
    backgroundColor: Color.colorCornflowerblue,
    opacity: 0.3,
    height: 24,
    top: 10,
    borderRadius: Border.br_base,
    position: "absolute",
  },
  moreDetails: {
    fontSize: FontSize.medium_size,
    letterSpacing: -0.2,
    color: Color.lightGray11,
    lineHeight: 16,
    textAlign: "left",
    fontFamily: FontFamily.medium,
    fontWeight: "500",
  },
  button2: {
    marginTop: -12,
    top: "50%",
    right: -25,
    borderRadius: 25,
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_9xs,
    left: 0,
    backgroundColor: Color.lightGray0,
  },
  button1: {
    top: 109,
    width: 92,
    height: 24,
  },
  commingSoonInner: {
    top: 45,
    left: 129,
    width: 100,
    height: 100,
    position: "absolute",
    overflow: "hidden",
  },
  groupIcon: {
    height: "90%",
    width: "38.46%",
    top: "-9.37%",
    right: "4.36%",
    bottom: "19.38%",
    left: "57.18%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    display: "none",
  },
  commingSoon: {
    top: 148,
    height: 160,
    width: 319,
    borderRadius: Border.br_base,
    left: 28,
    backgroundColor: Color.lightGray0,
    shadowOpacity: 1,
    elevation: 45,
    shadowRadius: 45,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(27, 169, 225, 0.08)",
    position: "absolute",
    overflow: "hidden",
  },
  dashboardChild: {
    height: "17.73%",
    width: "32.72%",
    top: "15.89%",
    right: "10.75%",
    bottom: "66.38%",
    left: "56.53%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
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
    borderRadius: 1,
    backgroundColor: Color.colorDarkslategray,
    width: 18,
    height: 7,
    left: 2,
    position: "absolute",
  },
  battery: {
    left: 336,
    height: 11,
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
    color: Color.colorDarkslategray,
    width: 54,
    fontFamily: FontFamily.semibold,
    fontWeight: "600",
    letterSpacing: 0,
    lineHeight: 20,
  },
  statusbar: {
    top: "0%",
    height: "100%",
    bottom: "0%",
    right: "0%",
  },
  header: {
    width: 375,
    height: 44,
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupChild: {
    height: "92.68%",
    top: "7.32%",
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowRadius: 1,
    elevation: 1,
    backgroundColor: Color.lightGray0,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  groupItem: {
    shadowColor: "rgba(0, 0, 0, 0.09)",
    shadowRadius: 14,
    elevation: 14,
    borderRadius: Border.br_31xl,
    top: "0%",
    height: "100%",
    bottom: "0%",
    right: "0%",
    backgroundColor: Color.lightGray0,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  rectangleWrapper: {
    height: "68.29%",
    width: "14.35%",
    right: "43.52%",
    bottom: "31.71%",
    left: "42.13%",
    top: "0%",
    position: "absolute",
  },
  groupInner: {
    height: "30.61%",
    width: "6.67%",
    top: "18.29%",
    right: "47.47%",
    bottom: "51.1%",
    left: "45.87%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  search1Icon: {
    width: "6.4%",
    right: "27.73%",
    left: "65.87%",
  },
  home1Icon: {
    width: "6.16%",
    right: "86.4%",
    left: "7.44%",
  },
  home: {
    left: "5.89%",
    fontFamily: FontFamily.robotoMedium,
    color: Color.colorLightskyblue_200,
    top: "53.66%",
    letterSpacing: 0,
    lineHeight: 16,
    fontSize: FontSize.medium1_size,
    textAlign: "center",
    fontWeight: "500",
    position: "absolute",
  },
  analysis: {
    left: "23.73%",
  },
  setting: {
    left: "63.52%",
  },
  profile: {
    left: "83.33%",
  },
  userSvgrepoCom1Icon: {
    left: 320,
    height: 24,
    overflow: "hidden",
  },
  chartSimple: {
    top: 21,
    left: 102,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.fontAwesome6FreeSolid,
    color: "transparent",
    lineHeight: 16,
  },
  rectangleParent: {
    height: "10.1%",
    top: "89.9%",
  },
  maskGroupIcon: {
    width: 315,
    left: 2,
    top: 0,
  },
  rectangleView: {
    top: 1,
    borderRadius: 18,
    left: 0,
    width: 319,
  },
  todaysWaterUsage: {
    top: 18,
    left: 41,
    fontSize: FontSize.size_lg,
    lineHeight: 18,
    width: 206,
    height: 14,
    color: Color.lightGray11,
  },
  groupChild1: {
    borderTopRightRadius: Border.br_5xs,
    borderTopLeftRadius: Border.br_5xs,
    width: 10,
    position: "absolute",
    left: 51,
  },
  groupChild2: {
    left: 80,
    width: 12,
    height: 73,
    backgroundColor: Color.colorSkyblue,
    top: 55,
    opacity: 0.3,
  },
  groupChild3: {
    height: 73,
    backgroundColor: Color.colorSkyblue,
    top: 55,
    opacity: 0.3,
  },
  groupChild4: {
    height: 73,
    backgroundColor: Color.colorSkyblue,
    top: 55,
    opacity: 0.3,
  },
  groupChild5: {
    height: 73,
    backgroundColor: Color.colorSkyblue,
    top: 55,
    opacity: 0.3,
  },
  groupChild6: {
    top: 57,
    height: 71,
    left: 51,
    borderTopRightRadius: Border.br_5xs,
    borderTopLeftRadius: Border.br_5xs,
    backgroundColor: Color.colorLightskyblue_200,
  },
  groupChild7: {
    top: 74,
    height: 54,
    left: 80,
    width: 12,
    backgroundColor: Color.colorLightskyblue_200,
  },
  groupChild8: {
    height: 36,
    backgroundColor: Color.colorLightskyblue_200,
    top: 92,
    left: 110,
  },
  groupChild9: {
    top: 81,
    height: 47,
    backgroundColor: Color.colorLightskyblue_200,
  },
  groupChild10: {
    top: 95,
    height: 33,
    backgroundColor: Color.colorLightskyblue_200,
  },
  groupChild11: {
    left: 196,
    borderTopRightRadius: Border.br_5xs,
    borderTopLeftRadius: Border.br_5xs,
    width: 10,
    position: "absolute",
  },
  groupChild12: {
    height: 73,
    backgroundColor: Color.colorSkyblue,
    top: 55,
    opacity: 0.3,
    left: 225,
  },
  groupChild13: {
    left: 256,
    borderTopRightRadius: Border.br_5xs,
    borderTopLeftRadius: Border.br_5xs,
    width: 10,
    position: "absolute",
  },
  text: {
    fontSize: 25,
  },
  litersTxt: {
    width: "100%",
  },
  liters: {
    top: 172,
    left: 43,
    width: 194,
    height: 26,
    color: Color.lightGray0,
    display: "flex",
  },
  vectorIcon: {
    top: 128,
    left: 27,
    width: 254,
  },
  maskGroupParent: {
    top: 329,
    shadowColor: "rgba(27, 169, 225, 0.25)",
    width: 319,
    left: 28,
    height: 216,
    shadowOpacity: 1,
    elevation: 45,
    shadowRadius: 45,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  dashboard: {
    backgroundColor: "#f4f8fb",
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Dashboard;
