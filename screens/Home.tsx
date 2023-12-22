import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { Color, Padding, Border, FontFamily, FontSize } from "../GlobalStyles";

const Home = () => {
  return (
    <View style={styles.home}>
      <View style={styles.homeContainer}>
        <View style={[styles.homeSection, styles.buttonsFlexBox]}>
          <View style={styles.buttonsFlexBox}>
            <View style={styles.chargerBar}>
              <View style={styles.wifiMapPinIcFlexBox}>
                <View style={[styles.wifiMapPinIc, styles.wifiMapPinIcFlexBox]}>
                  <Image
                    style={styles.wifiSvgrepoCom11}
                    resizeMode="cover"
                    source={require("../assets/wifisvgrepocom-1-1.png")}
                  />
                  <Image
                    style={styles.mapIcIcon}
                    resizeMode="cover"
                    source={require("../assets/map-ic.png")}
                  />
                </View>
                <View style={styles.chargerIconPercentage1}>
                  <Text style={styles.text}>96%</Text>
                  <Image
                    style={styles.chargeIcon}
                    resizeMode="cover"
                    source={require("../assets/charge-icon.png")}
                  />
                </View>
              </View>
            </View>
            <View style={styles.pageTitleBar}>
              <Text style={[styles.home1, styles.home1FlexBox]}>HOME</Text>
              <Image
                style={styles.settingsIcon}
                resizeMode="cover"
                source={require("../assets/settings-icon.png")}
              />
            </View>
          </View>
          <View style={[styles.buttons, styles.buttonsFlexBox]}>
            <View style={[styles.testButtons, styles.buttonsFlexBox]}>
              <Pressable style={[styles.hbVariantTest, styles.testFlexBox]}>
                <Text style={[styles.hbVariantTest1, styles.home1FlexBox]}>
                  Hb VARIANT TEST
                </Text>
              </Pressable>
              <Pressable style={[styles.covid19Test, styles.testFlexBox]}>
                <Text style={[styles.hbVariantTest1, styles.home1FlexBox]}>
                  COVID-19
                </Text>
              </Pressable>
            </View>
            <Pressable style={[styles.logoutButton, styles.testFlexBox]}>
              <Text style={[styles.logout, styles.text1Clr]}>LOGOUT</Text>
            </Pressable>
          </View>
        </View>
        <Text style={[styles.text1, styles.text1Clr]}>14:24 15/11/2023</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonsFlexBox: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  wifiMapPinIcFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  home1FlexBox: {
    textAlign: "center",
    color: Color.colorWhite,
    flex: 1,
  },
  testFlexBox: {
    paddingVertical: Padding.p_base,
    borderRadius: Border.br_9xs,
    paddingHorizontal: Padding.p_3xs,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  text1Clr: {
    color: Color.colorBlack,
    textAlign: "center",
  },
  wifiSvgrepoCom11: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  mapIcIcon: {
    width: 19,
    height: 19,
  },
  wifiMapPinIc: {
    maxWidth: 41,
  },
  text: {
    fontFamily: FontFamily.kokoro,
    textAlign: "right",
    display: "flex",
    width: 28,
    height: 15,
    color: Color.colorWhite,
    fontSize: FontSize.size_xs,
    alignItems: "center",
  },
  chargeIcon: {
    width: 29,
    marginLeft: 10,
    height: 15,
  },
  chargerIconPercentage1: {
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  chargerBar: {
    height: 30,
    paddingVertical: Padding.p_mini,
    paddingHorizontal: Padding.p_3xs,
    justifyContent: "flex-end",
    backgroundColor: Color.colorBlack,
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  home1: {
    fontSize: FontSize.size_xl,
    fontWeight: "600",
    fontFamily: FontFamily.workSansSemiBold,
  },
  settingsIcon: {
    width: 24,
    height: 24,
    marginLeft: 10,
    overflow: "hidden",
  },
  pageTitleBar: {
    paddingLeft: 50,
    paddingTop: Padding.p_mini,
    paddingRight: Padding.p_xl,
    paddingBottom: Padding.p_mini,
    marginTop: 1,
    backgroundColor: Color.colorBlack,
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  hbVariantTest1: {
    fontSize: FontSize.size_base,
    fontWeight: "700",
    fontFamily: FontFamily.workSansBold,
  },
  hbVariantTest: {
    height: 75,
    width: 203,
    backgroundColor: Color.colorOrange,
    paddingVertical: Padding.p_base,
    borderRadius: Border.br_9xs,
  },
  covid19Test: {
    marginTop: 30,
    height: 75,
    width: 203,
    backgroundColor: Color.colorOrange,
    paddingVertical: Padding.p_base,
    borderRadius: Border.br_9xs,
  },
  testButtons: {
    justifyContent: "center",
  },
  logout: {
    fontSize: FontSize.size_sm,
    fontWeight: "500",
    fontFamily: FontFamily.workSansMedium,
    flex: 1,
  },
  logoutButton: {
    backgroundColor: Color.colorNavajowhite,
    width: 169,
    marginTop: 140,
    paddingVertical: Padding.p_base,
    borderRadius: Border.br_9xs,
  },
  buttons: {
    height: 597,
    paddingTop: Padding.p_41xl,
  },
  homeSection: {
    flex: 1,
  },
  text1: {
    fontFamily: FontFamily.workSansRegular,
    width: 414,
    marginTop: 10,
    fontSize: FontSize.size_xs,
    color: Color.colorBlack,
  },
  homeContainer: {
    height: 736,
    paddingBottom: Padding.p_11xl,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  home: {
    backgroundColor: Color.colorWhite,
    width: "100%",
    justifyContent: "center",
    flexDirection: "row",
    overflow: "hidden",
    flex: 1,
  },
});

export default Home;
