import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Padding, Border } from "../GlobalStyles";

const VerificationCode = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.verificationCode2}>
      <View style={[styles.resendCode, styles.codePosition]}>
        <Text style={[styles.didntReceiveThe, styles.verifyTypo]}>
          Didn’t Receive the Code?
        </Text>
        <Text style={[styles.resend, styles.timeTypo]}>Resend</Text>
      </View>
      <Pressable
        style={[styles.verifyButton, styles.codePosition]}
        onPress={() => navigation.navigate("YouAreVerified")}
      >
        <Text style={[styles.verify, styles.verifyTypo]}>Verify</Text>
      </Pressable>
      <View style={[styles.digitCode, styles.codePosition]}>
        <View style={styles.codeLayout}>
          <View style={[styles.code1, styles.code1Position]} />
          <Text style={[styles.text, styles.textTypo]}>9</Text>
        </View>
        <View style={[styles.code2, styles.codeLayout]}>
          <View style={[styles.code1, styles.code1Position]} />
          <Text style={[styles.text, styles.textTypo]}>2</Text>
        </View>
        <View style={[styles.code2, styles.codeLayout]}>
          <View style={[styles.code1, styles.code1Position]} />
          <Text style={[styles.text, styles.textTypo]}>5</Text>
        </View>
        <View style={[styles.code2, styles.codeLayout]}>
          <View style={[styles.code1, styles.code1Position]} />
          <Text style={[styles.text, styles.textTypo]}>0</Text>
        </View>
      </View>
      <View style={[styles.verificationDetails, styles.backButtonPosition]}>
        <Text style={styles.verificationCode}>Verification Code</Text>
        <Text
          style={[styles.weSentYou, styles.textTypo]}
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
            <View style={[styles.border, styles.code1Position]} />
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
  code1Position: {
    borderWidth: 1,
    borderStyle: "solid",
    left: 0,
    top: 0,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.headingH1Regular,
    textAlign: "left",
  },
  codeLayout: {
    height: 88,
    width: 66,
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
    top: 395,
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
    height: 88,
    width: 66,
    borderRadius: Border.br_8xs,
  },
  text: {
    marginTop: -27,
    marginLeft: -11,
    top: "50%",
    fontSize: FontSize.headingH1Regular_size,
    color: Color.colorLightskyblue_100,
    textAlign: "left",
    left: "50%",
    fontFamily: FontFamily.headingH1Regular,
    position: "absolute",
  },
  code2: {
    marginLeft: 20,
  },
  digitCode: {
    marginLeft: -161.5,
    top: 257,
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
    fontSize: FontSize.medium2_size,
  },
  verificationDetails: {
    top: 134,
  },
  backButton: {
    top: 54,
    width: 30,
    height: 30,
  },
  border: {
    borderRadius: 3,
    borderColor: Color.colorDarkslategray,
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
  verificationCode2: {
    backgroundColor: Color.lightGray0,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default VerificationCode;
