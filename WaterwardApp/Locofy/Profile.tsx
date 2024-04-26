import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Profile = () => {
  return (
    <View style={styles.profile}>
      <View style={[styles.rectangleParent, styles.groupChildPosition]}>
        <View style={[styles.groupChild, styles.groupShadowBox]} />
        <View style={styles.rectangleWrapper}>
          <View style={[styles.groupItem, styles.groupItemPosition]} />
        </View>
        <Image
          style={styles.groupInner}
          contentFit="cover"
          source={require("../assets/group-911.png")}
        />
        <Image
          style={[styles.search1Icon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/search-1.png")}
        />
        <Image
          style={[styles.home1Icon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/home-11.png")}
        />
        <Text style={styles.home}>Home</Text>
        <Text style={[styles.analysis, styles.settingTypo]}>Analysis</Text>
        <Text style={[styles.setting, styles.settingTypo]}>Setting</Text>
        <Text style={[styles.profile1, styles.settingTypo]}>Profile</Text>
        <Image
          style={[styles.userSvgrepoCom1Icon, styles.genderWrapperLayout]}
          contentFit="cover"
          source={require("../assets/usersvgrepocom-11.png")}
        />
        <Text style={styles.chartSimple}>chart-simple</Text>
      </View>
      <View style={styles.header}>
        <View style={styles.groupItemPosition}>
          <View style={[styles.battery, styles.batteryLayout]}>
            <View style={styles.border} />
            <Image
              style={[styles.capIcon, styles.capIconPosition]}
              contentFit="cover"
              source={require("../assets/cap.png")}
            />
            <View style={[styles.capacity, styles.capacityPosition]} />
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
      <Image
        style={styles.icon}
        contentFit="cover"
        source={require("../assets/53571-1.png")}
      />
      <View style={[styles.rectangleGroup, styles.groupLayout]}>
        <View style={styles.rectangleView} />
        <Text style={[styles.ayham, styles.textTypo]}>Ayham</Text>
        <Text style={[styles.firstName, styles.maleTypo]}>First Name</Text>
      </View>
      <View style={[styles.rectangleContainer, styles.groupLayout]}>
        <View style={styles.rectangleView} />
        <Text style={[styles.ayham, styles.textTypo]}>Al Ali</Text>
        <Text style={[styles.firstName, styles.maleTypo]}>Last Name</Text>
      </View>
      <View style={[styles.groupView, styles.groupLayout]}>
        <View style={styles.rectangleView} />
        <Text style={[styles.ayham, styles.textTypo]}>
          ayhamalali@designsfield.com
        </Text>
        <Text style={[styles.firstName, styles.maleTypo]}>Email Address</Text>
      </View>
      <View style={[styles.rectangleParent1, styles.groupLayout]}>
        <View style={styles.rectangleView} />
        <Text style={[styles.text, styles.textTypo]}>24</Text>
        <Text style={[styles.firstName, styles.maleTypo]}>Age</Text>
      </View>
      <View style={[styles.groupParent, styles.capIconPosition]}>
        <View style={[styles.genderWrapper, styles.genderWrapperLayout]}>
          <Text style={[styles.firstName, styles.maleTypo]}>Gender</Text>
        </View>
        <View style={[styles.groupContainer, styles.wrapperGroupLayout]}>
          <View style={[styles.maleWrapper, styles.wrapperGroupLayout]}>
            <Text style={[styles.male, styles.maleTypo]}>Male</Text>
          </View>
          <Image
            style={styles.ellipseIcon}
            contentFit="cover"
            source={require("../assets/ellipse-114.png")}
          />
        </View>
        <View style={[styles.groupParent1, styles.wrapperGroupLayout]}>
          <View style={[styles.femaleWrapper, styles.wrapperGroupLayout]}>
            <Text style={[styles.male, styles.maleTypo]}>Female</Text>
          </View>
          <Image
            style={styles.ellipseIcon}
            contentFit="cover"
            source={require("../assets/ellipse-114.png")}
          />
        </View>
        <Image
          style={[styles.groupChild5, styles.capacityPosition]}
          contentFit="cover"
          source={require("../assets/ellipse-115.png")}
        />
      </View>
      <View style={styles.groupGroup}>
        <Image
          style={styles.groupIcon}
          contentFit="cover"
          source={require("../assets/group.png")}
        />
        <Text style={[styles.myProfile, styles.timeTypo]}>My Profile</Text>
        <Image
          style={styles.groupEditIcon}
          contentFit="cover"
          source={require("../assets/group-edit.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  groupShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: -1,
    },
    backgroundColor: Color.lightGray0,
  },
  groupItemPosition: {
    height: "100%",
    top: "0%",
    left: "0%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
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
    textAlign: "center",
    lineHeight: 16,
    letterSpacing: 0,
    fontSize: FontSize.medium1_size,
    top: "53.66%",
    position: "absolute",
  },
  genderWrapperLayout: {
    height: 24,
    position: "absolute",
  },
  batteryLayout: {
    width: 24,
    top: 17,
  },
  capIconPosition: {
    left: 23,
    position: "absolute",
  },
  capacityPosition: {
    left: 2,
    position: "absolute",
  },
  timeTypo: {
    fontFamily: FontFamily.semibold,
    fontWeight: "600",
    textAlign: "center",
  },
  groupLayout: {
    height: 77,
    width: 327,
    left: 23,
    position: "absolute",
  },
  textTypo: {
    color: Color.colorDimgray_200,
    top: 43,
    fontFamily: FontFamily.medium,
    fontSize: FontSize.medium2_size,
    fontWeight: "500",
    position: "absolute",
  },
  maleTypo: {
    fontFamily: FontFamily.medium,
    left: 0,
    top: 0,
    textAlign: "center",
    color: Color.lightGray11,
    fontWeight: "500",
    position: "absolute",
  },
  wrapperGroupLayout: {
    height: 21,
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
    right: "0%",
    position: "absolute",
    width: "100%",
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
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
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
    textAlign: "center",
    color: Color.lightGray11,
    fontWeight: "500",
    fontSize: FontSize.medium1_size,
    top: "53.66%",
    lineHeight: 16,
    letterSpacing: 0,
    position: "absolute",
  },
  analysis: {
    left: "23.73%",
    color: Color.lightGray11,
  },
  setting: {
    left: "63.52%",
    color: Color.lightGray11,
  },
  profile1: {
    left: "83.47%",
    color: Color.colorLightskyblue_100,
  },
  userSvgrepoCom1Icon: {
    left: 319,
    width: 24,
    top: 17,
    overflow: "hidden",
  },
  chartSimple: {
    top: 21,
    left: 102,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.fontAwesome6FreeSolid,
    textAlign: "center",
    color: Color.lightGray11,
    lineHeight: 16,
    letterSpacing: 0,
    position: "absolute",
  },
  rectangleParent: {
    height: "10.1%",
    top: "89.9%",
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
    width: 1,
    height: 4,
    opacity: 0.4,
  },
  capacity: {
    top: 2,
    borderRadius: 1,
    backgroundColor: Color.colorDarkslategray,
    width: 18,
    height: 7,
  },
  battery: {
    left: 336,
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
    lineHeight: 20,
    color: Color.colorDarkslategray,
    width: 54,
    letterSpacing: 0,
    fontFamily: FontFamily.semibold,
    fontWeight: "600",
    position: "absolute",
  },
  header: {
    width: 375,
    height: 44,
    left: 0,
    top: 0,
    position: "absolute",
  },
  icon: {
    top: 102,
    left: 133,
    borderRadius: 500,
    width: 100,
    height: 100,
    position: "absolute",
  },
  rectangleView: {
    top: 31,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorAliceblue,
    height: 46,
    width: 327,
    left: 0,
    position: "absolute",
  },
  ayham: {
    left: 19,
    textAlign: "left",
  },
  firstName: {
    fontSize: FontSize.headingH4Regular_size,
  },
  rectangleGroup: {
    top: 225,
  },
  rectangleContainer: {
    top: 315,
  },
  groupView: {
    top: 415,
  },
  text: {
    left: 12,
    textAlign: "center",
  },
  rectangleParent1: {
    top: 505,
  },
  genderWrapper: {
    width: 60,
    left: 0,
    top: 0,
  },
  male: {
    fontSize: FontSize.medium2_size,
    fontFamily: FontFamily.medium,
  },
  maleWrapper: {
    left: 27,
    width: 35,
    top: 0,
  },
  ellipseIcon: {
    top: 1,
    width: 19,
    height: 19,
    left: 0,
    position: "absolute",
  },
  groupContainer: {
    width: 62,
    top: 33,
    height: 21,
    left: 0,
  },
  femaleWrapper: {
    left: 26,
    width: 53,
    top: 0,
  },
  groupParent1: {
    left: 88,
    width: 79,
    top: 33,
    height: 21,
  },
  groupChild5: {
    top: 36,
    height: 15,
    width: 15,
  },
  groupParent: {
    top: 595,
    width: 167,
    height: 54,
  },
  groupIcon: {
    width: 20,
    height: 18,
  },
  myProfile: {
    fontSize: FontSize.semibold_size,
    lineHeight: 32,
    color: Color.lightGray11,
  },
  groupEditIcon: {
    width: 32,
    height: 32,
  },
  groupGroup: {
    marginLeft: -168.5,
    top: 46,
    left: "50%",
    width: 337,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    position: "absolute",
  },
  profile: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.lightGray0,
  },
});

export default Profile;
