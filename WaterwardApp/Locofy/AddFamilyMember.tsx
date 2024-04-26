import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const AddFamilyMember = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.addFamilyMember}>
      <View style={[styles.header, styles.sliderPosition]}>
        <View style={[styles.statusbar, styles.groupPosition]}>
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
          <Text style={[styles.time, styles.timeFlexBox]}>9:41</Text>
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
      <View style={styles.groupParent}>
        <Pressable
          style={[styles.group, styles.groupPosition]}
          onPress={() => navigation.navigate("Onboarding1")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/group2.png")}
          />
        </Pressable>
        <Text style={styles.selectYourAge}>
          Select your age, weight, gender and height
        </Text>
      </View>
      <View style={[styles.toolbarsiphoneXtextOnly2, styles.onlySpaceBlock]}>
        <View style={[styles.toolbarsIphone8textOnly, styles.onlySpaceBlock]}>
          <View
            style={[styles.arrowLeftSvgrepoCom1Parent, styles.parentFlexBox]}
          >
            <Image
              style={styles.arrowLeftSvgrepoCom1Icon}
              contentFit="cover"
              source={require("../assets/arrowleftsvgrepocom-1.png")}
            />
            <Text style={[styles.action2, styles.actionTypo]}>Skip</Text>
          </View>
          <View style={styles.parentFlexBox}>
            <Text style={[styles.action21, styles.whatTypo]}>Next</Text>
            <Image
              style={styles.arrowLeftSvgrepoCom1Icon}
              contentFit="cover"
              source={require("../assets/arrowrightsvgrepocom-1.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.groupContainer, styles.groupContainerPosition]}>
        <View style={styles.groupView}>
          <View style={styles.whatIsYourGenderWrapper}>
            <Text style={[styles.whatIsYour, styles.whatClr]}>
              What is your gender
            </Text>
          </View>
          <View style={styles.groupProfileParent}>
            <Image
              style={styles.groupProfileIcon}
              contentFit="cover"
              source={require("../assets/group-profile.png")}
            />
            <Image
              style={styles.groupProfileIcon1}
              contentFit="cover"
              source={require("../assets/group-profile1.png")}
            />
          </View>
        </View>
        <View style={styles.sliderParent}>
          <View style={[styles.slider, styles.sliderPosition]}>
            <View style={styles.track} />
            <View style={styles.slider1}>
              <View style={[styles.roundedRect, styles.roundedPosition]} />
              <Image
                style={[styles.knobIcon, styles.knobIconPosition]}
                contentFit="cover"
                source={require("../assets/knob.png")}
              />
              <Text style={styles.text}>33</Text>
            </View>
            <Text style={[styles.text1, styles.textTypo1]}>0</Text>
            <Text style={[styles.text2, styles.textTypo1]}>100</Text>
          </View>
          <Text style={[styles.whatIsYour, styles.whatClr]}>
            How old are you
          </Text>
        </View>
        <View style={styles.sliderGroup}>
          <View style={[styles.slider2, styles.sliderPosition]}>
            <View style={styles.track} />
            <View style={styles.slider1}>
              <View style={[styles.roundedRect, styles.roundedPosition]} />
              <Image
                style={[styles.knobIcon, styles.knobIconPosition]}
                contentFit="cover"
                source={require("../assets/knob1.png")}
              />
              <Text style={[styles.text3, styles.textTypo]}>57</Text>
            </View>
            <Text style={[styles.text1, styles.textTypo1]}>0</Text>
            <Text style={[styles.text5, styles.textTypo1]}>200</Text>
          </View>
          <Text style={[styles.whatIsYourContainer, styles.whatTypo]}>
            <Text style={styles.whatClr}>{`What is your weight `}</Text>
            <Text style={styles.textTypo}>(in kg)</Text>
          </Text>
        </View>
        <View style={styles.sliderParent}>
          <View style={[styles.slider, styles.sliderPosition]}>
            <View style={styles.track} />
            <View style={styles.slider1}>
              <View style={[styles.roundedRect2, styles.roundedPosition]} />
              <Image
                style={[styles.knobIcon2, styles.knobIconPosition]}
                contentFit="cover"
                source={require("../assets/knob2.png")}
              />
              <Text style={[styles.text6, styles.textTypo]}>125</Text>
            </View>
            <Text style={[styles.text1, styles.textTypo1]}>0</Text>
            <Text style={[styles.text5, styles.textTypo1]}>200</Text>
          </View>
          <Text style={[styles.whatIsYourContainer, styles.whatTypo]}>
            <Text style={styles.whatClr}>{`What is your height `}</Text>
            <Text style={styles.textTypo}>(in cm)</Text>
          </Text>
        </View>
        <View style={styles.groupParent1}>
          <View style={styles.groupWrapper}>
            <View style={[styles.timeParent, styles.timeSpaceBlock]}>
              <View style={[styles.time1, styles.time1Position]}>
                <View style={[styles.below, styles.belowPosition]}>
                  <Text style={[styles.text9, styles.textPosition2]}>42</Text>
                  <Text style={[styles.text10, styles.textPosition2]}>10</Text>
                </View>
                <View style={[styles.center, styles.centerPosition]}>
                  <Text style={[styles.text11, styles.textPosition1]}>41</Text>
                  <Text style={[styles.text12, styles.textPosition]}>:</Text>
                  <Text style={[styles.text13, styles.textPosition1]}>09</Text>
                </View>
                <View style={[styles.above, styles.belowPosition]}>
                  <Text style={[styles.text9, styles.textPosition2]}>40</Text>
                  <Text style={[styles.text10, styles.textPosition2]}>08</Text>
                </View>
              </View>
              <View style={[styles.segmentedControl, styles.time1Position]}>
                <View style={styles.option}>
                  <View style={styles.backgroundShadowBox} />
                  <View style={styles.separator} />
                  <Text style={[styles.label, styles.labelLayout]}>AM</Text>
                </View>
                <View style={styles.option1}>
                  <View style={styles.backgroundPosition} />
                  <Text style={[styles.label1, styles.labelLayout]}>Off</Text>
                </View>
              </View>
            </View>
          </View>
          <Text style={[styles.whatIsYour, styles.whatClr]}>Wake up time</Text>
        </View>
        <View style={styles.groupParent1}>
          <View style={styles.groupWrapper}>
            <View style={[styles.timeParent, styles.timeSpaceBlock]}>
              <View style={[styles.time1, styles.time1Position]}>
                <View style={[styles.below, styles.belowPosition]}>
                  <Text style={[styles.text9, styles.textPosition2]}>42</Text>
                  <Text style={[styles.text10, styles.textPosition2]}>10</Text>
                </View>
                <View style={[styles.center1, styles.centerPosition]}>
                  <Text style={[styles.text18, styles.textPosition1]}>41</Text>
                  <Text style={[styles.text19, styles.textPosition]}>:</Text>
                  <Text style={[styles.text20, styles.textPosition1]}>10</Text>
                </View>
                <View style={[styles.above, styles.belowPosition]}>
                  <Text style={[styles.text9, styles.textPosition2]}>40</Text>
                  <Text style={[styles.text10, styles.textPosition2]}>08</Text>
                </View>
              </View>
              <View style={[styles.segmentedControl, styles.time1Position]}>
                <View style={styles.option1}>
                  <View style={styles.backgroundPosition} />
                  <Text style={[styles.label1, styles.labelLayout]}>Off</Text>
                </View>
                <View style={styles.option}>
                  <View style={styles.backgroundShadowBox} />
                  <View style={styles.separator} />
                  <Text style={[styles.label, styles.labelLayout]}>PM</Text>
                </View>
              </View>
            </View>
          </View>
          <Text style={[styles.sleepingTime, styles.whatClr]}>
            Sleeping time
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sliderPosition: {
    height: 44,
    left: 0,
    position: "absolute",
  },
  groupPosition: {
    left: "0%",
    position: "absolute",
  },
  timeFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  swipeUpLayout: {
    height: 35,
    width: 375,
    left: 0,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  onlySpaceBlock: {
    paddingHorizontal: 0,
    alignItems: "center",
  },
  parentFlexBox: {
    width: 59,
    flexDirection: "row",
    alignItems: "center",
  },
  actionTypo: {
    textAlign: "right",
    textTransform: "capitalize",
    lineHeight: 22,
    fontSize: FontSize.size_mid,
    letterSpacing: 0,
  },
  whatTypo: {
    fontFamily: FontFamily.medium,
    fontWeight: "500",
  },
  groupContainerPosition: {
    left: "50%",
    position: "absolute",
  },
  whatClr: {
    color: Color.lightGray11,
    fontSize: FontSize.headingH4Regular_size,
  },
  roundedPosition: {
    backgroundColor: Color.colorLightskyblue_100,
    borderRadius: Border.br_11xs,
    top: "50%",
    marginTop: -2,
    height: 4,
    left: 0,
    position: "absolute",
  },
  knobIconPosition: {
    width: 28,
    height: 28,
    marginTop: -14,
    top: "50%",
    position: "absolute",
  },
  textTypo1: {
    top: 27,
    color: Color.colorDimgray_200,
    lineHeight: 14,
    fontSize: FontSize.medium2_size,
    fontFamily: FontFamily.medium,
    fontWeight: "500",
    textAlign: "center",
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.medium_size,
    color: Color.colorDimgray_200,
  },
  timeSpaceBlock: {
    marginTop: -18,
    height: 36,
  },
  time1Position: {
    backgroundColor: Color.colorGray_300,
    top: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  belowPosition: {
    width: 70,
    marginLeft: -35,
    height: 28,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  textPosition2: {
    color: Color.labelColorLightQuarternary,
    fontFamily: FontFamily.defaultRegularTitle2,
    lineHeight: 28,
    fontSize: FontSize.defaultRegularTitle2_size,
    width: 28,
    height: 28,
    marginTop: -14,
    top: "50%",
    textAlign: "right",
    left: "50%",
    letterSpacing: 0,
    position: "absolute",
  },
  centerPosition: {
    height: 29,
    marginTop: -14,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  textPosition1: {
    marginTop: -14.5,
    lineHeight: 28,
    fontSize: FontSize.defaultRegularTitle2_size,
    top: "50%",
    color: Color.lightGray11,
    textAlign: "right",
    fontFamily: FontFamily.headingH1Regular,
    left: "50%",
    letterSpacing: 0,
    position: "absolute",
  },
  textPosition: {
    marginTop: -13.5,
    lineHeight: 28,
    fontSize: FontSize.defaultRegularTitle2_size,
    top: "50%",
    color: Color.lightGray11,
    textAlign: "right",
    fontFamily: FontFamily.headingH1Regular,
    left: "50%",
    letterSpacing: 0,
    position: "absolute",
  },
  labelLayout: {
    height: 16,
    width: 34,
    display: "flex",
    left: 8,
    top: "50%",
    color: Color.lightGray11,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    lineHeight: 20,
    letterSpacing: 0,
    fontSize: FontSize.size_mini,
    position: "absolute",
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
    opacity: 0.4,
    height: 4,
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
    color: Color.colorDarkslategray,
    width: 54,
    fontFamily: FontFamily.semibold,
    fontWeight: "600",
    lineHeight: 20,
    letterSpacing: 0,
    fontSize: FontSize.size_mini,
    textAlign: "center",
  },
  statusbar: {
    top: "0%",
    right: "0%",
    bottom: "0%",
    height: "100%",
    width: "100%",
  },
  header: {
    width: 375,
    height: 44,
    top: 0,
  },
  btnhome: {
    top: 0,
  },
  view: {
    top: 21,
    left: 121,
    borderRadius: Border.br_11xl,
    backgroundColor: Color.lightGrey,
    width: 134,
    height: 5,
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
  icon: {
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  group: {
    top: "14.58%",
    right: "92.51%",
    bottom: "47.29%",
    width: "7.49%",
    height: "38.13%",
  },
  selectYourAge: {
    marginLeft: -72.5,
    color: Color.neutral1,
    width: 206,
    fontSize: FontSize.headingH4Regular_size,
    left: "50%",
    textAlign: "center",
    fontFamily: FontFamily.semibold,
    fontWeight: "600",
    top: 0,
    position: "absolute",
  },
  groupParent: {
    height: "5.91%",
    width: "71.2%",
    top: "6.77%",
    right: "22.4%",
    bottom: "87.32%",
    left: "6.4%",
    position: "absolute",
  },
  arrowLeftSvgrepoCom1Icon: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  action2: {
    color: "rgba(93, 204, 252, 0.53)",
    fontFamily: FontFamily.headingH1Regular,
  },
  arrowLeftSvgrepoCom1Parent: {
    justifyContent: "center",
  },
  action21: {
    color: Color.colorRoyalblue,
    textAlign: "right",
    textTransform: "capitalize",
    lineHeight: 22,
    fontSize: FontSize.size_mid,
    letterSpacing: 0,
  },
  toolbarsIphone8textOnly: {
    justifyContent: "space-between",
    paddingVertical: Padding.p_xs,
    flexDirection: "row",
    width: 327,
  },
  toolbarsiphoneXtextOnly2: {
    marginLeft: -163.5,
    top: 710,
    paddingVertical: Padding.p_9xs,
    justifyContent: "center",
    left: "50%",
    position: "absolute",
  },
  whatIsYour: {
    fontFamily: FontFamily.medium,
    fontWeight: "500",
    textAlign: "center",
    position: "absolute",
    left: 0,
    top: 0,
  },
  whatIsYourGenderWrapper: {
    width: 163,
    height: 24,
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupProfileIcon: {
    width: 100,
    height: 100,
  },
  groupProfileIcon1: {
    width: 107,
    marginLeft: 10,
    height: 100,
  },
  groupProfileParent: {
    top: 33,
    flexDirection: "row",
    left: 0,
    position: "absolute",
  },
  groupView: {
    width: 217,
    height: 133,
  },
  track: {
    backgroundColor: Color.labelColorLightQuarternary,
    borderRadius: Border.br_11xs,
    marginTop: -2,
    top: "50%",
    width: 327,
    height: 4,
    left: 0,
    position: "absolute",
  },
  roundedRect: {
    right: 68,
  },
  knobIcon: {
    right: 63,
  },
  text: {
    left: 115,
    color: Color.colorDimgray_200,
    fontSize: FontSize.medium2_size,
    lineHeight: 14,
    top: 7,
    fontFamily: FontFamily.medium,
    fontWeight: "500",
    textAlign: "center",
    position: "absolute",
  },
  slider1: {
    width: 200,
    height: 28,
    marginTop: -14,
    top: "50%",
    left: 0,
    position: "absolute",
  },
  text1: {
    left: 0,
  },
  text2: {
    left: 304,
  },
  slider: {
    top: 31,
    width: 327,
  },
  sliderParent: {
    height: 75,
    marginTop: 16,
    width: 327,
  },
  text3: {
    left: 117,
    lineHeight: 14,
    top: 7,
    fontSize: FontSize.medium_size,
    fontFamily: FontFamily.medium,
    fontWeight: "500",
    textAlign: "center",
    position: "absolute",
  },
  text5: {
    left: 302,
  },
  slider2: {
    top: 24,
    width: 327,
  },
  whatIsYourContainer: {
    textAlign: "center",
    position: "absolute",
    left: 0,
    top: 0,
  },
  sliderGroup: {
    height: 68,
    marginTop: 16,
    width: 327,
  },
  roundedRect2: {
    right: 3,
  },
  knobIcon2: {
    right: -3,
  },
  text6: {
    left: 181,
    lineHeight: 14,
    top: 7,
    fontSize: FontSize.medium_size,
    fontFamily: FontFamily.medium,
    fontWeight: "500",
    textAlign: "center",
    position: "absolute",
  },
  text9: {
    marginLeft: 7,
  },
  text10: {
    marginLeft: -35,
    color: Color.labelColorLightQuarternary,
    fontFamily: FontFamily.defaultRegularTitle2,
    lineHeight: 28,
    fontSize: FontSize.defaultRegularTitle2_size,
  },
  below: {
    marginTop: 8,
  },
  text11: {
    marginLeft: 13.5,
  },
  text12: {
    marginLeft: -1.5,
  },
  text13: {
    marginLeft: -35.5,
  },
  center: {
    marginLeft: -36,
    width: 71,
  },
  above: {
    marginTop: -36,
  },
  time1: {
    right: 115,
    borderRadius: Border.br_7xs,
    width: 86,
    marginTop: -18,
    height: 36,
  },
  backgroundShadowBox: {
    borderWidth: 0.5,
    borderColor: Color.colorLightskyblue_200,
    backgroundColor: Color.colorAliceblue,
    borderRadius: 5,
    shadowOpacity: 1,
    elevation: 8,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowColor: "rgba(93, 204, 252, 0.16)",
    left: "-1%",
    bottom: "-1.79%",
    right: "1%",
    top: "-1.79%",
    height: "103.57%",
    borderStyle: "solid",
    position: "absolute",
    width: "100%",
  },
  separator: {
    height: "57.14%",
    width: "0.6%",
    top: "21.43%",
    right: "1.2%",
    bottom: "21.43%",
    left: "98.2%",
    borderRadius: Border.br_12xs_5,
    backgroundColor: Color.colorGray_200,
    opacity: 0.3,
    display: "none",
    position: "absolute",
  },
  label: {
    marginTop: -8,
    fontFamily: FontFamily.semibold,
    fontWeight: "600",
  },
  option: {
    width: 50,
    height: 28,
  },
  backgroundPosition: {
    left: "0.8%",
    bottom: "3.81%",
    right: "-0.8%",
    top: "4.13%",
    height: "92.06%",
    display: "none",
    borderWidth: 0.5,
    borderColor: Color.colorLightskyblue_200,
    backgroundColor: Color.colorAliceblue,
    borderRadius: 5,
    shadowOpacity: 1,
    elevation: 8,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowColor: "rgba(93, 204, 252, 0.16)",
    borderStyle: "solid",
    position: "absolute",
    width: "100%",
  },
  label1: {
    marginTop: -7.75,
    fontFamily: FontFamily.headingH1Regular,
  },
  option1: {
    height: 32,
    width: 50,
  },
  segmentedControl: {
    marginTop: -17.8,
    borderRadius: 9,
    paddingHorizontal: Padding.p_9xs,
    paddingVertical: Padding.p_11xs,
    right: 0,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Color.colorGray_300,
  },
  timeParent: {
    right: 0,
    width: 201,
    top: "50%",
    marginTop: -18,
    position: "absolute",
  },
  groupWrapper: {
    marginTop: -2.5,
    height: 36,
    right: 0,
    width: 201,
    top: "50%",
    position: "absolute",
  },
  groupParent1: {
    height: 67,
    width: 201,
    marginTop: 16,
  },
  text18: {
    marginLeft: 12.5,
  },
  text19: {
    marginLeft: -2.5,
  },
  text20: {
    marginLeft: -34.5,
  },
  center1: {
    marginLeft: -34,
    width: 69,
  },
  sleepingTime: {
    left: 1,
    fontFamily: FontFamily.medium,
    fontWeight: "500",
    textAlign: "center",
    position: "absolute",
    top: 0,
  },
  groupContainer: {
    marginLeft: -163.7,
    top: 129,
  },
  addFamilyMember: {
    backgroundColor: Color.lightGray0,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default AddFamilyMember;
