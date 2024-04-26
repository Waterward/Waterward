import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, Padding, Border, FontFamily, FontSize } from "../GlobalStyles";

const SignIn = () => {
  return (
    <View style={styles.signIn1}>
      <Text style={styles.byClickingContinueContainer}>
        <Text style={styles.byClickingContinue}>
          By clicking Continue, you agree to our
        </Text>
        <Text style={styles.text}>{` `}</Text>
        <Text style={styles.termsOfService}>Terms of Service</Text>
        <Text style={styles.text}>{` 
`}</Text>
        <Text style={styles.byClickingContinue}>and</Text>
        <Text style={styles.termsOfService}> Privacy Policy</Text>
      </Text>
      <View style={[styles.createAnAccount, styles.goodleFbSignInPosition]}>
        <Text style={[styles.createAnAccount1, styles.google1Clr]}>
          Create An Account
        </Text>
        <Text style={styles.signUp}>Sign Up</Text>
      </View>
      <View style={[styles.goodleFbSignIn, styles.goodleFbSignInPosition]}>
        <Text style={[styles.orContinueWith, styles.google1Clr]}>
          - OR Continue with -
        </Text>
        <View style={styles.buttons}>
          <View style={styles.googleBorder}>
            <View style={styles.google1Parent}>
              <Image
                style={styles.iconLayout}
                contentFit="cover"
                source={require("../assets/google-1.png")}
              />
              <Text style={[styles.google1, styles.google1Clr]}>Google</Text>
            </View>
          </View>
          <View style={[styles.facebook, styles.googleBorder]}>
            <View style={styles.google1Parent}>
              <Image
                style={styles.iconLayout}
                contentFit="cover"
                source={require("../assets/facebook-1.png")}
              />
              <Text style={[styles.google1, styles.google1Clr]}>Facebook</Text>
            </View>
          </View>
        </View>
      </View>
      <Text style={styles.fogotPassword}>Fogot Password</Text>
      <View style={[styles.buttonWrapper, styles.loginDetailsPosition]}>
        <View style={[styles.button, styles.buttonPosition]}>
          <View style={styles.shadow} />
          <View style={styles.button1}>
            <Text style={[styles.logIn, styles.timeTypo]}>LOG IN</Text>
          </View>
        </View>
      </View>
      <View style={styles.rememberMe}>
        <Image
          style={styles.checkIcon}
          contentFit="cover"
          source={require("../assets/check.png")}
        />
        <Text style={styles.rememberMe1}>Remember me</Text>
      </View>
      <View style={[styles.password, styles.passwordLayout]}>
        <Text style={[styles.password1, styles.batteryPosition]}>Password</Text>
        <Image
          style={[styles.eyeIcon, styles.timePosition]}
          contentFit="cover"
          source={require("../assets/eye.png")}
        />
        <Image
          style={[styles.lockIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/lock.png")}
        />
      </View>
      <View style={[styles.email, styles.emailShadowBox]}>
        <Image
          style={[styles.mailIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/mail.png")}
        />
        <Text style={[styles.emailAddress, styles.emailAddressTypo]}>
          Email address
        </Text>
      </View>
      <View style={[styles.loginDetails, styles.loginDetailsPosition]}>
        <Text style={styles.login}>Login</Text>
        <Text style={[styles.securelyLoginTo, styles.emailAddressTypo]}>
          Securely login to your account
        </Text>
      </View>
      <Image
        style={[styles.xCircleIcon, styles.passwordLayout]}
        contentFit="cover"
        source={require("../assets/xcircle.png")}
      />
      <View style={styles.header}>
        <View style={styles.statusbar}>
          <View style={[styles.battery, styles.batteryPosition]}>
            <View style={[styles.border, styles.buttonPosition]} />
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
  goodleFbSignInPosition: {
    left: "50%",
    position: "absolute",
  },
  google1Clr: {
    color: Color.foundationGreyGrey500,
    textAlign: "center",
  },
  googleBorder: {
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_mini,
    justifyContent: "center",
    borderColor: Color.colorDeepskyblue_100,
    backgroundColor: Color.colorAliceblue_100,
    borderRadius: Border.br_31xl,
    borderWidth: 1,
    borderStyle: "solid",
    alignItems: "center",
    overflow: "hidden",
  },
  loginDetailsPosition: {
    left: 25,
    position: "absolute",
  },
  buttonPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  timeTypo: {
    lineHeight: 20,
    fontFamily: FontFamily.semibold,
    fontWeight: "600",
    textAlign: "center",
  },
  passwordLayout: {
    height: 50,
    position: "absolute",
    overflow: "hidden",
  },
  batteryPosition: {
    top: 17,
    position: "absolute",
  },
  timePosition: {
    top: 13,
    position: "absolute",
  },
  iconLayout: {
    height: 24,
    width: 24,
  },
  emailShadowBox: {
    backgroundColor: Color.colorWhitesmoke_100,
    borderRadius: Border.br_8xs,
    shadowOpacity: 1,
    elevation: 30,
    shadowRadius: 30,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowColor: "rgba(51, 51, 51, 0.1)",
    width: 325,
    marginLeft: -162.5,
    left: "50%",
  },
  emailAddressTypo: {
    color: Color.foundationGreyGrey300,
    textAlign: "left",
    fontFamily: FontFamily.headingH1Regular,
  },
  byClickingContinue: {
    color: Color.lightGray11,
  },
  text: {
    color: Color.colorDarkgray_100,
  },
  termsOfService: {
    color: Color.colorRoyalblue,
  },
  byClickingContinueContainer: {
    marginLeft: -136.5,
    top: 752,
    textAlign: "center",
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    fontSize: FontSize.medium_size,
    left: "50%",
    position: "absolute",
  },
  createAnAccount1: {
    fontFamily: FontFamily.headingH1Regular,
    fontSize: FontSize.medium2_size,
  },
  signUp: {
    marginLeft: 5,
    fontFamily: FontFamily.semibold,
    fontWeight: "600",
    textDecoration: "underline",
    fontSize: FontSize.medium2_size,
    color: Color.colorRoyalblue,
    textAlign: "center",
  },
  createAnAccount: {
    marginLeft: -95.5,
    top: 711,
    flexDirection: "row",
  },
  orContinueWith: {
    fontWeight: "500",
    fontFamily: FontFamily.medium,
    fontSize: FontSize.medium1_size,
  },
  google1: {
    marginLeft: 10,
    fontSize: FontSize.medium1_size,
    fontFamily: FontFamily.headingH1Regular,
  },
  google1Parent: {
    alignItems: "center",
    flexDirection: "row",
  },
  facebook: {
    marginLeft: 10,
  },
  buttons: {
    marginTop: 20,
    flexDirection: "row",
  },
  goodleFbSignIn: {
    marginLeft: -120.5,
    top: 592,
    alignItems: "center",
  },
  fogotPassword: {
    marginLeft: -47.5,
    top: 534,
    textAlign: "left",
    fontSize: FontSize.medium1_size,
    textDecoration: "underline",
    fontFamily: FontFamily.headingH1Regular,
    color: Color.colorRoyalblue,
    left: "50%",
    position: "absolute",
  },
  shadow: {
    top: 19,
    left: 40,
    borderRadius: Border.br_base,
    backgroundColor: Color.colorCornflowerblue,
    height: 48,
    opacity: 0.3,
    right: 0,
    position: "absolute",
  },
  logIn: {
    letterSpacing: -0.1,
    color: Color.lightGray0,
    fontSize: FontSize.medium2_size,
  },
  button1: {
    bottom: 19,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorLightskyblue_100,
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_sm,
    width: 325,
    marginLeft: -162.5,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    left: "50%",
    position: "absolute",
  },
  button: {
    right: 0,
    height: 67,
  },
  buttonWrapper: {
    top: 454,
    right: 25,
    height: 67,
  },
  checkIcon: {
    width: 16,
    height: 16,
  },
  rememberMe1: {
    color: Color.foundationGreyGrey400,
    textAlign: "left",
    marginLeft: 10,
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    fontSize: FontSize.medium_size,
  },
  rememberMe: {
    top: 418,
    left: 50,
    alignItems: "flex-end",
    flexDirection: "row",
    position: "absolute",
  },
  password1: {
    left: 54,
    color: Color.foundationGreyGrey200,
    textAlign: "left",
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
    marginTop: -12,
    top: "50%",
    right: 281,
    position: "absolute",
    overflow: "hidden",
  },
  password: {
    top: 348,
    backgroundColor: Color.colorWhitesmoke_100,
    borderRadius: Border.br_8xs,
    shadowOpacity: 1,
    elevation: 30,
    shadowRadius: 30,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowColor: "rgba(51, 51, 51, 0.1)",
    width: 325,
    marginLeft: -162.5,
    left: "50%",
  },
  mailIcon: {
    overflow: "hidden",
  },
  emailAddress: {
    marginLeft: 10,
    fontSize: FontSize.medium1_size,
  },
  email: {
    top: 278,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_smi,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    overflow: "hidden",
  },
  login: {
    fontSize: FontSize.defaultRegularTitle2_size,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.foundationGreyGrey800,
    textAlign: "left",
  },
  securelyLoginTo: {
    marginTop: 5,
    fontSize: FontSize.medium2_size,
  },
  loginDetails: {
    top: 174,
  },
  xCircleIcon: {
    top: 94,
    left: 15,
    width: 50,
  },
  border: {
    borderRadius: 3,
    borderColor: Color.colorDarkslategray,
    width: 22,
    opacity: 0.35,
    height: 11,
    borderWidth: 1,
    borderStyle: "solid",
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
    color: Color.colorDarkslategray,
    width: 54,
    lineHeight: 20,
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
    top: 0,
    left: "50%",
    position: "absolute",
  },
  signIn1: {
    backgroundColor: Color.lightGray0,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default SignIn;
