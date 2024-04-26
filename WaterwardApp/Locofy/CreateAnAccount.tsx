import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, Padding, Color, Border, FontSize } from "../GlobalStyles";

const CreateAnAccount = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.createAnAccount}>
      <View style={styles.logIn}>
        <Text style={styles.iAlreadyHave}>I Already Have an Account</Text>
        <Text style={[styles.logIn1, styles.textTypo]}>Log in</Text>
      </View>
      <Pressable
        style={styles.signUp}
        onPress={() => navigation.navigate("VerificationCode1")}
      >
        <Text style={styles.next}>Create Account</Text>
      </Pressable>
      <View style={[styles.forms, styles.formsPosition]}>
        <View style={[styles.fullName, styles.fullNameSpaceBlock]}>
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/user-outline.png")}
          />
          <Text style={[styles.emailAddress, styles.emailAddressTypo]}>
            Full Name
          </Text>
        </View>
        <View style={[styles.emailAddress1, styles.phoneNumberLayout1]}>
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/mail.png")}
          />
          <Text style={[styles.emailAddress, styles.emailAddressTypo]}>
            Email address
          </Text>
        </View>
        <View style={[styles.phoneNumber, styles.phoneNumberLayout]}>
          <Image
            style={[styles.nigeria1Icon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/nigeria-1.png")}
          />
          <Text style={[styles.text, styles.textClr]}>+234</Text>
          <Text style={[styles.enterNumber, styles.textClr]}>Enter number</Text>
        </View>
        <View style={[styles.phoneNumber, styles.phoneNumberLayout]}>
          <Text style={[styles.password1, styles.batteryPosition]}>
            Password
          </Text>
          <Image
            style={[styles.eyeIcon, styles.timePosition]}
            contentFit="cover"
            source={require("../assets/eye.png")}
          />
          <Image
            style={[styles.lockIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/lock.png")}
          />
        </View>
      </View>
      <View style={styles.loginDetails}>
        <Text style={styles.createAnAccount1}>Create an account</Text>
        <Text style={[styles.securelyLoginTo, styles.emailAddressTypo]}>
          Securely login to your account
        </Text>
      </View>
      <Image
        style={[styles.xCircleIcon, styles.phoneNumberLayout]}
        contentFit="cover"
        source={require("../assets/xcircle.png")}
      />
      <View style={[styles.header, styles.headerPosition]}>
        <View style={styles.statusbar}>
          <View style={[styles.battery, styles.batteryPosition]}>
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
          <Text style={[styles.time, styles.timePosition]}>9:41</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    fontFamily: FontFamily.semibold,
    fontWeight: "600",
  },
  formsPosition: {
    left: 25,
    position: "absolute",
  },
  fullNameSpaceBlock: {
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_smi,
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  emailAddressTypo: {
    color: Color.foundationGreyGrey300,
    textAlign: "left",
    fontFamily: FontFamily.headingH1Regular,
  },
  phoneNumberLayout1: {
    marginTop: 20,
    backgroundColor: Color.colorWhitesmoke_100,
    width: 325,
    borderRadius: Border.br_8xs,
  },
  phoneNumberLayout: {
    height: 50,
    overflow: "hidden",
  },
  iconPosition: {
    top: "50%",
    position: "absolute",
  },
  textClr: {
    color: Color.foundationGreyGrey200,
    textAlign: "left",
  },
  batteryPosition: {
    top: 17,
    position: "absolute",
  },
  timePosition: {
    top: 13,
    position: "absolute",
  },
  headerPosition: {
    top: 0,
    position: "absolute",
  },
  iAlreadyHave: {
    color: Color.foundationGreyGrey500,
    textAlign: "center",
    fontFamily: FontFamily.headingH1Regular,
    fontSize: FontSize.medium2_size,
  },
  logIn1: {
    textDecoration: "underline",
    color: Color.colorRoyalblue,
    marginLeft: 5,
    textAlign: "center",
    fontSize: FontSize.medium2_size,
  },
  logIn: {
    marginLeft: -116.5,
    top: 652,
    flexDirection: "row",
    left: "50%",
    position: "absolute",
  },
  next: {
    fontSize: FontSize.headingH4Regular_size,
    color: Color.lightGray0,
    textAlign: "center",
    fontFamily: FontFamily.headingH1Regular,
  },
  signUp: {
    marginLeft: -162.5,
    top: 572,
    shadowColor: "rgba(93, 204, 252, 0.42)",
    shadowOffset: {
      width: 4,
      height: 8,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    backgroundColor: Color.colorLightskyblue_100,
    justifyContent: "center",
    paddingHorizontal: Padding.p_64xl,
    paddingVertical: Padding.p_smi,
    alignItems: "center",
    width: 325,
    borderRadius: Border.br_8xs,
    flexDirection: "row",
    left: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  iconLayout: {
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  emailAddress: {
    marginLeft: 10,
    textAlign: "left",
    fontSize: FontSize.medium1_size,
  },
  fullName: {
    backgroundColor: Color.colorWhitesmoke_100,
    paddingHorizontal: Padding.p_xl,
    width: 325,
    borderRadius: Border.br_8xs,
  },
  emailAddress1: {
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_smi,
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  nigeria1Icon: {
    left: 20,
    marginTop: -12,
    top: "50%",
    height: 24,
    width: 24,
  },
  text: {
    marginTop: -10,
    left: 54,
    color: Color.foundationGreyGrey200,
    top: "50%",
    position: "absolute",
    fontFamily: FontFamily.semibold,
    fontWeight: "600",
    fontSize: FontSize.medium2_size,
  },
  enterNumber: {
    marginTop: -8,
    left: 100,
    top: "50%",
    position: "absolute",
    fontSize: FontSize.medium1_size,
    fontFamily: FontFamily.headingH1Regular,
  },
  phoneNumber: {
    marginTop: 20,
    backgroundColor: Color.colorWhitesmoke_100,
    width: 325,
    borderRadius: Border.br_8xs,
  },
  password1: {
    color: Color.foundationGreyGrey200,
    textAlign: "left",
    left: 54,
    fontSize: FontSize.medium1_size,
    fontFamily: FontFamily.headingH1Regular,
  },
  eyeIcon: {
    right: 20,
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  lockIcon: {
    right: 281,
    marginTop: -12,
    top: "50%",
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  forms: {
    top: 282,
  },
  createAnAccount1: {
    fontSize: FontSize.defaultRegularTitle2_size,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.foundationGreyGrey800,
    textAlign: "left",
  },
  securelyLoginTo: {
    marginTop: 5,
    textAlign: "left",
    fontSize: FontSize.medium2_size,
  },
  loginDetails: {
    top: 184,
    left: 35,
    position: "absolute",
  },
  xCircleIcon: {
    top: 94,
    width: 50,
    left: 25,
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
    left: 336,
    height: 11,
    width: 24,
    top: 17,
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
    left: 21,
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    lineHeight: 20,
    color: Color.colorDarkslategray,
    width: 54,
    fontFamily: FontFamily.semibold,
    fontWeight: "600",
    textAlign: "center",
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
  createAnAccount: {
    backgroundColor: Color.lightGray0,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default CreateAnAccount;
