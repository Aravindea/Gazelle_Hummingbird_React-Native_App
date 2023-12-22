import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { Padding, Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const HbVARIANTRUNNING = () => {
  return (
    <View style={styles.hbVariantRunning}>
      <View style={styles.hbVariantRunningContainer}>
        <View style={styles.hbVariantRunningSection}>
          <View style={styles.topBar}>
            <View style={[styles.chargerBar, styles.chargerBarFlexBox]}>
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
            <View style={[styles.pageTitleBar, styles.barBg]}>
              <View style={styles.homePreviousPageButton}>
                <Image
                  style={styles.homeIcIcon}
                  resizeMode="cover"
                  source={require("../assets/home-ic.png")}
                />
              </View>
              <Text style={styles.hbVariantRunning1}>Hb VARIANT RUNNING</Text>
            </View>
          </View>
          <View style={[styles.hbVariantRunning2, styles.variantSpaceBlock]}>
            <View
              style={[styles.hbVariantRunningDiv, styles.variantSpaceBlock]}
            >
              <Image
                style={styles.hbVariantRunningVideoGif}
                resizeMode="cover"
                source={require("../assets/hb-variant-running-video-gif.png")}
              />
              <View style={styles.cancelTestButton}>
                <View
                  style={[styles.cancelTestButton1, styles.chargerBarFlexBox]}
                >
                  <Text style={styles.cancel}>CANCEL</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <Text style={styles.text1}>14:24 15/11/2023</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  chargerBarFlexBox: {
    paddingHorizontal: Padding.p_3xs,
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  wifiMapPinIcFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  barBg: {
    backgroundColor: Color.colorBlack,
    alignSelf: "stretch",
  },
  variantSpaceBlock: {
    paddingBottom: Padding.p_12xs,
    alignItems: "center",
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
    justifyContent: "flex-end",
    backgroundColor: Color.colorBlack,
    alignSelf: "stretch",
  },
  homeIcIcon: {
    height: 24,
    width: 24,
  },
  homePreviousPageButton: {
    maxWidth: 63,
    width: 24,
    alignItems: "center",
    flexDirection: "row",
  },
  hbVariantRunning1: {
    fontSize: FontSize.size_base,
    fontWeight: "600",
    fontFamily: FontFamily.workSansSemiBold,
    textAlign: "center",
    marginLeft: 10,
    color: Color.colorWhite,
    flex: 1,
  },
  pageTitleBar: {
    paddingLeft: Padding.p_3xs,
    paddingTop: Padding.p_mini,
    paddingRight: Padding.p_11xl,
    paddingBottom: Padding.p_mini,
    marginTop: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  topBar: {
    alignItems: "center",
    alignSelf: "stretch",
  },
  hbVariantRunningVideoGif: {
    width: 320,
    height: 180,
  },
  cancel: {
    fontSize: FontSize.size_sm,
    fontWeight: "500",
    fontFamily: FontFamily.workSansMedium,
    textAlign: "left",
    color: Color.colorBlack,
  },
  cancelTestButton1: {
    borderRadius: Border.br_9xs,
    backgroundColor: Color.colorNavajowhite,
    width: 169,
    paddingVertical: Padding.p_base,
    justifyContent: "center",
  },
  cancelTestButton: {
    marginTop: 90,
    justifyContent: "center",
    flexDirection: "row",
  },
  hbVariantRunningDiv: {
    alignSelf: "stretch",
  },
  hbVariantRunning2: {
    paddingHorizontal: Padding.p_11xl,
    maxWidth: 500,
    marginTop: 40,
    width: "100%",
  },
  hbVariantRunningSection: {
    alignItems: "center",
    alignSelf: "stretch",
    flex: 1,
  },
  text1: {
    fontFamily: FontFamily.workSansRegular,
    width: 414,
    marginTop: 10,
    color: Color.colorBlack,
    textAlign: "center",
    fontSize: FontSize.size_xs,
  },
  hbVariantRunningContainer: {
    paddingBottom: Padding.p_11xl,
    alignItems: "center",
    alignSelf: "stretch",
    flex: 1,
  },
  hbVariantRunning: {
    backgroundColor: Color.colorWhite,
    height: 736,
    justifyContent: "center",
    flexDirection: "row",
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default HbVARIANTRUNNING;
