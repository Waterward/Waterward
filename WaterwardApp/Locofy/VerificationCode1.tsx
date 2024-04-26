import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Padding, Border } from "../GlobalStyles";

const VerificationCode1 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.verificationCode1}>
      <View style={[styles.resendCode, styles.codePosition]}>
        <Text style={[styles.didntReceiveThe, styles.verifyTypo]}>
          Didn’t Receive the Code?
        </Text>
        <Text style={[styles.resend, styles.timeTypo]}>Resend</Text>
      </View>
      <View style={[styles.verifyButton, styles.codePosition]}>
        <Text style={[styles.verify, styles.verifyTypo]}>Verify</Text>
      </View>
      <Pressable
        style={[styles.digitCode, styles.codePosition]}
        onPress={() => navigation.navigate("VerificationCode")}
      >
        <View style={styles.codeLayout}>
          <View style={[styles.code1, styles.codeBorder]} />
          <View style={[styles.codeChild, styles.capIconLayout]} />
        </View>
        <View style={[styles.code2, styles.codeBorder]} />
        <View style={[styles.code2, styles.codeBorder]} />
        <View style={[styles.code2, styles.codeBorder]} />
      </Pressable>
      <View style={[styles.verificationDetails, styles.backButtonPosition]}>
        <Text style={styles.verificationCode}>Verification Code</Text>
        <Text
          style={styles.weSentYou}
        >{`We sent you a 4 digit code to your email address. please check & enter your code`}</Text>
      </View>
      <Pressable
        style={[styles.backButton, styles.backButtonPosition]}
        onPress={() => navigation.navigate("CreateAnAccount")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/back-button.png")}
        />
      </Pressable>
      <View style={styles.header}>
        <View style={[styles.statusbar, styles.iconLayout]}>
          <View style={styles.battery}>
            <View style={[styles.border, styles.codeBorder]} />
            <Image
              style={[styles.capIcon, styles.capIconLayout]}
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
  codePosition: {
    flexDirection: "row",
    left: "50%",
    position: "absolute",
  },
  verifyTypo: {
    textAlign: "center",
    fontFamily: FontFamily.headingH1Regular,
  },
  timeTypo: {
    fontFamily: FontFamily.semibold,
    fontWeight: "600",
    textAlign: "center",
  },
  codeBorder: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  capIconLayout: {
    width: 1,
    position: "absolute",
  },
  backButtonPosition: {
    left: 25,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  didntReceiveThe: {
    color: Color.foundationGreyGrey500,
    fontSize: FontSize.medium2_size,
  },
  resend: {
    textDecoration: "underline",
    color: Color.colorRoyalblue,
    marginLeft: 5,
    fontSize: FontSize.medium2_size,
  },
  resendCode: {
    marginLeft: -115.5,
    top: 749,
  },
  verify: {
    fontSize: FontSize.headingH4Regular_size,
    color: Color.foundationGreenGreen50,
  },
  verifyButton: {
    marginLeft: -162.5,
    top: 405,
    shadowColor: "rgba(93, 204, 252, 0.4)",
    shadowOffset: {
      width: 4,
      height: 8,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    backgroundColor: Color.colorLightskyblue_100,
    width: 325,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_64xl,
    paddingVertical: Padding.p_smi,
    borderRadius: Border.br_8xs,
    overflow: "hidden",
  },
  code1: {
    borderColor: Color.colorLightskyblue_100,
    left: 0,
    borderWidth: 1,
    top: 0,
    position: "absolute",
    height: 88,
    width: 66,
    borderRadius: Border.br_8xs,
  },
  codeChild: {
    top: 14,
    left: 33,
    borderColor: Color.foundationGreyGrey300,
    borderRightWidth: 0.5,
    height: 61,
    borderStyle: "solid",
    width: 1,
  },
  codeLayout: {
    height: 88,
    width: 66,
  },
  code2: {
    borderColor: Color.colorLightgray,
    marginLeft: 20,
    height: 88,
    width: 66,
    borderRadius: Border.br_8xs,
  },
  digitCode: {
    marginLeft: -161.5,
    top: 267,
  },
  verificationCode: {
    fontSize: FontSize.defaultRegularTitle2_size,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.foundationGreyGrey800,
    textAlign: "left",
  },
  weSentYou: {
    color: Color.foundationGreyGrey300,
    width: 329,
    marginTop: 5,
    textAlign: "left",
    fontFamily: FontFamily.headingH1Regular,
    fontSize: FontSize.medium2_size,
  },
  verificationDetails: {
    top: 144,
  },
  backButton: {
    top: 64,
    width: 30,
    height: 30,
  },
  border: {
    borderRadius: 3,
    borderColor: Color.colorDarkslategray,
    width: 22,
    opacity: 0.35,
    height: 11,
    left: 0,
    borderWidth: 1,
    top: 0,
    position: "absolute",
  },
  capIcon: {
    top: 4,
    left: 23,
    height: 4,
    opacity: 0.4,
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
    color: Color.colorDarkslategray,
    width: 54,
    position: "absolute",
  },
  statusbar: {
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    position: "absolute",
  },
  header: {
    marginLeft: -187.5,
    width: 375,
    height: 44,
    top: 0,
    left: "50%",
    position: "absolute",
  },
  verificationCode1: {
    backgroundColor: Color.lightGray0,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default VerificationCode1;
