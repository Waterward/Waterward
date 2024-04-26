import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Settings = () => {
  return (
    <View style={styles.settings}>
      <View style={[styles.rectangleParent, styles.groupChildPosition]}>
        <View style={[styles.groupChild, styles.groupShadowBox]} />
        <View style={styles.rectangleWrapper}>
          <View style={[styles.groupItem, styles.groupItemPosition]} />
        </View>
        <Image
          style={[styles.groupInner, styles.groupInnerLayout]}
          contentFit="cover"
          source={require("../assets/group-911.png")}
        />
        <Image
          style={[styles.search1Icon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/search-11.png")}
        />
        <Image
          style={[styles.home1Icon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/home-11.png")}
        />
        <Text style={[styles.home, styles.homeFlexBox]}>Home</Text>
        <Text style={[styles.analysis, styles.settingTypo]}>Analysis</Text>
        <Text style={[styles.setting, styles.settingTypo]}>Setting</Text>
        <Text style={[styles.profile, styles.settingTypo]}>Profile</Text>
        <Image
          style={[styles.userSvgrepoCom1Icon, styles.batteryPosition]}
          contentFit="cover"
          source={require("../assets/usersvgrepocom-1.png")}
        />
        <Text style={[styles.chartSimple, styles.homeFlexBox]}>
          chart-simple
        </Text>
      </View>
      <View style={[styles.header, styles.groupPosition]}>
        <View style={[styles.statusbar, styles.groupItemPosition]}>
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
          <Text style={styles.time}>9:41</Text>
        </View>
      </View>
      <View style={[styles.historyParent, styles.parentLayout2]}>
        <Text style={[styles.history, styles.historyTypo]}>History</Text>
        <Image
          style={[styles.vectorIcon, styles.groupInnerLayout]}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
      </View>
      <View style={[styles.settingParent, styles.parentLayout2]}>
        <Text style={[styles.setting1, styles.historyTypo]}>Setting</Text>
        <Image
          style={[styles.vectorIcon, styles.groupInnerLayout]}
          contentFit="cover"
          source={require("../assets/search-12.png")}
        />
      </View>
      <View style={[styles.settingsChild, styles.settingsPosition]} />
      <View style={[styles.settingsItem, styles.settingsPosition]} />
      <View
        style={[styles.reminderSettingsParent, styles.groupContainerLayout]}
      >
        <Text style={[styles.reminderSettings, styles.generalTypo]}>
          Reminder Settings
        </Text>
        <View style={[styles.lineView, styles.groupChildLayout]} />
      </View>
      <View style={[styles.reminderSoundParent, styles.parentLayout1]}>
        <Text style={[styles.reminderSound, styles.reminderTypo]}>
          Reminder Sound
        </Text>
        <View style={[styles.groupChild1, styles.groupChildLayout]} />
      </View>
      <View style={[styles.groupParent, styles.parentLayout]}>
        <View style={styles.reminderModeParent}>
          <Text style={[styles.reminderMode, styles.reminderTypo]}>
            Reminder Mode
          </Text>
          <Text style={[styles.asDeviceSettings, styles.mlTypo]}>
            As device settings
          </Text>
        </View>
        <View style={[styles.groupChild2, styles.groupChildLayout]} />
      </View>
      <View style={[styles.generalParent, styles.parentLayout]}>
        <Text style={[styles.general, styles.generalTypo]}>General</Text>
        <View style={[styles.groupChild2, styles.groupChildLayout]} />
      </View>
      <View style={[styles.removeAdsParent, styles.parentLayout1]}>
        <Text style={[styles.reminderSound, styles.reminderTypo]}>
          Remove ADS
        </Text>
        <View style={[styles.groupChild1, styles.groupChildLayout]} />
      </View>
      <View style={[styles.groupContainer, styles.groupContainerLayout]}>
        <View style={styles.reminderModeParent}>
          <Text style={[styles.reminderMode, styles.reminderTypo]}>
            Light or dark interface
          </Text>
          <Text style={[styles.light, styles.mlTypo]}>Light</Text>
        </View>
        <View style={[styles.lineView, styles.groupChildLayout]} />
      </View>
      <View style={[styles.groupView, styles.groupPosition]}>
        <View style={styles.reminderModeParent}>
          <Text style={[styles.kgMl, styles.mlTypo]}>Kg. ml</Text>
          <Text style={[styles.reminderMode, styles.reminderTypo]}>Unit</Text>
        </View>
        <View style={[styles.groupChild6, styles.groupChildLayout]} />
      </View>
      <View style={[styles.groupParent1, styles.groupPosition]}>
        <View style={styles.reminderModeParent}>
          <Text style={[styles.ml, styles.mlTypo]}>2000 ml</Text>
          <Text style={[styles.reminderMode, styles.reminderTypo]}>
            Intake goal
          </Text>
        </View>
        <View style={[styles.groupChild7, styles.groupChildLayout]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildPosition: {
    left: "0%",
    bottom: "0%",
  },
  groupShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: -1,
    },
    right: "0%",
    position: "absolute",
    width: "100%",
    backgroundColor: Color.lightGray0,
  },
  groupItemPosition: {
    height: "100%",
    top: "0%",
    left: "0%",
    bottom: "0%",
  },
  groupInnerLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
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
  homeFlexBox: {
    textAlign: "center",
    lineHeight: 16,
    letterSpacing: 0,
    color: Color.lightGray11,
    position: "absolute",
  },
  settingTypo: {
    fontFamily: FontFamily.robotoRegular,
    textAlign: "center",
    lineHeight: 16,
    letterSpacing: 0,
    fontSize: FontSize.medium1_size,
    top: "53.66%",
    position: "absolute",
  },
  batteryPosition: {
    width: 24,
    top: 17,
    position: "absolute",
  },
  groupPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  parentLayout2: {
    width: 86,
    position: "absolute",
  },
  historyTypo: {
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.robotoRegular,
    textAlign: "center",
    lineHeight: 16,
    letterSpacing: 0,
    position: "absolute",
  },
  settingsPosition: {
    height: 2,
    borderTopWidth: 2,
    left: -1,
    top: 88,
    borderStyle: "solid",
    position: "absolute",
  },
  groupContainerLayout: {
    height: 36,
    width: 375,
    left: 0,
    position: "absolute",
  },
  generalTypo: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.semibold,
    fontWeight: "600",
    top: 0,
    textAlign: "center",
    color: Color.lightGray11,
    lineHeight: 16,
    letterSpacing: 0,
    position: "absolute",
  },
  groupChildLayout: {
    height: 1,
    width: 376,
    borderTopWidth: 1,
    borderColor: Color.colorGray_100,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  parentLayout1: {
    height: 34,
    width: 375,
    left: 0,
    position: "absolute",
  },
  reminderTypo: {
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.semibold1_size,
    top: 0,
    textAlign: "center",
    color: Color.lightGray11,
    lineHeight: 16,
    letterSpacing: 0,
    position: "absolute",
  },
  parentLayout: {
    height: 37,
    width: 375,
    left: 0,
    position: "absolute",
  },
  mlTypo: {
    color: Color.colorLightskyblue_200,
    fontFamily: FontFamily.medium,
    top: 0,
    textAlign: "center",
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 0,
    fontSize: FontSize.medium1_size,
    position: "absolute",
  },
  groupChild: {
    height: "92.68%",
    top: "7.32%",
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowRadius: 1,
    elevation: 1,
    left: "0%",
    bottom: "0%",
  },
  groupItem: {
    shadowColor: "rgba(0, 0, 0, 0.09)",
    shadowRadius: 14,
    elevation: 14,
    borderRadius: Border.br_31xl,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: -1,
    },
    right: "0%",
    position: "absolute",
    width: "100%",
    backgroundColor: Color.lightGray0,
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
    fontWeight: "500",
    fontSize: FontSize.medium1_size,
    top: "53.66%",
    textAlign: "center",
    lineHeight: 16,
    letterSpacing: 0,
  },
  analysis: {
    left: "23.73%",
    color: Color.lightGray11,
    fontFamily: FontFamily.robotoRegular,
  },
  setting: {
    left: "63.52%",
    color: Color.colorLightskyblue_100,
  },
  profile: {
    left: "83.47%",
    color: Color.lightGray11,
    fontFamily: FontFamily.robotoRegular,
  },
  userSvgrepoCom1Icon: {
    left: 319,
    height: 24,
    overflow: "hidden",
  },
  chartSimple: {
    top: 21,
    left: 102,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.fontAwesome6FreeSolid,
    textAlign: "center",
    lineHeight: 16,
    letterSpacing: 0,
  },
  rectangleParent: {
    height: "10.1%",
    top: "89.9%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  border: {
    borderRadius: 3,
    borderColor: Color.colorDarkslategray,
    borderWidth: 1,
    width: 22,
    opacity: 0.35,
    borderStyle: "solid",
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
    left: 2,
    borderRadius: 1,
    backgroundColor: Color.colorDarkslategray,
    width: 18,
    height: 7,
    top: 2,
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
    lineHeight: 20,
    color: Color.colorDarkslategray,
    width: 54,
    fontFamily: FontFamily.semibold,
    fontWeight: "600",
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
  },
  statusbar: {
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  header: {
    height: 44,
    top: 0,
  },
  history: {
    top: 1,
    left: 26,
    color: Color.colorDarkgray,
  },
  vectorIcon: {
    width: "22.09%",
    right: "77.91%",
    height: "100%",
    top: "0%",
    left: "0%",
    bottom: "0%",
  },
  historyParent: {
    top: 62,
    left: 34,
    height: 18,
  },
  setting1: {
    left: 27,
    top: 2,
    color: Color.colorLightskyblue_100,
  },
  settingParent: {
    top: 61,
    left: 242,
    height: 19,
  },
  settingsChild: {
    borderColor: Color.colorLightskyblue_100,
    width: 377,
  },
  settingsItem: {
    borderColor: Color.colorDarkgray,
    width: 189,
  },
  reminderSettings: {
    left: 17,
  },
  lineView: {
    top: 36,
  },
  reminderSettingsParent: {
    top: 118,
  },
  reminderSound: {
    left: 18,
  },
  groupChild1: {
    top: 34,
  },
  reminderSoundParent: {
    top: 173,
  },
  reminderMode: {
    left: 0,
    fontSize: FontSize.semibold1_size,
  },
  asDeviceSettings: {
    left: 220,
  },
  reminderModeParent: {
    width: 337,
    height: 16,
    left: 18,
    top: 0,
    position: "absolute",
  },
  groupChild2: {
    top: 37,
  },
  groupParent: {
    top: 226,
  },
  general: {
    left: 18,
  },
  generalParent: {
    top: 281,
  },
  removeAdsParent: {
    top: 338,
  },
  light: {
    left: 306,
  },
  groupContainer: {
    top: 389,
  },
  kgMl: {
    left: 297,
  },
  groupChild6: {
    top: 35,
  },
  groupView: {
    top: 444,
    height: 35,
  },
  ml: {
    left: 285,
  },
  groupChild7: {
    top: 39,
  },
  groupParent1: {
    top: 498,
    height: 39,
  },
  settings: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.lightGray0,
  },
});

export default Settings;
