import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { Padding, Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const APPLYSAMPLEWITHSTAMPER = () => {
  return (
    <View style={styles.applySampleWithStamper}>
      <View style={styles.applySampleWithStamperCont}>
        <View style={styles.applySampleWithStamperSect}>
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
                  style={styles.homeIcIconLayout}
                  resizeMode="cover"
                  source={require("../assets/home-ic.png")}
                />
                <Image
                  style={[
                    styles.leftArrowPreviousPageIc,
                    styles.homeIcIconLayout,
                  ]}
                  resizeMode="cover"
                  source={require("../assets/left-arrow-previous-page-ic.png")}
                />
              </View>
              <Text style={styles.applySampleWith}>
                APPLY SAMPLE WITH STAMPER
              </Text>
            </View>
          </View>
          <View
            style={[styles.applySampleWithStamper1, styles.applySpaceBlock]}
          >
            <View
              style={[styles.applySampleWithStamperDiv, styles.applySpaceBlock]}
            >
              <Image
                style={styles.applySampleWithStamperVide}
                resizeMode="cover"
                source={require("../assets/apply-sample-with-stamper-video-gif.png")}
              />
              <Pressable style={styles.nextButton}>
                <View style={[styles.nextButton1, styles.chargerBarFlexBox]}>
                  <Text style={styles.next}>NEXT</Text>
                </View>
              </Pressable>
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
  homeIcIconLayout: {
    height: 24,
    width: 24,
  },
  applySpaceBlock: {
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
  leftArrowPreviousPageIc: {
    marginLeft: 12,
  },
  homePreviousPageButton: {
    maxWidth: 63,
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  applySampleWith: {
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
    paddingRight: Padding.p_21xl,
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
  applySampleWithStamperVide: {
    width: 320,
    height: 180,
  },
  next: {
    fontSize: FontSize.size_sm,
    fontWeight: "500",
    fontFamily: FontFamily.workSansMedium,
    textAlign: "left",
    color: Color.colorBlack,
  },
  nextButton1: {
    borderRadius: Border.br_9xs,
    backgroundColor: Color.colorNavajowhite,
    width: 169,
    paddingVertical: Padding.p_base,
    justifyContent: "center",
  },
  nextButton: {
    marginTop: 90,
    justifyContent: "center",
    flexDirection: "row",
  },
  applySampleWithStamperDiv: {
    alignSelf: "stretch",
  },
  applySampleWithStamper1: {
    paddingHorizontal: Padding.p_11xl,
    maxWidth: 500,
    marginTop: 40,
    width: "100%",
  },
  applySampleWithStamperSect: {
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
  applySampleWithStamperCont: {
    paddingBottom: Padding.p_11xl,
    alignItems: "center",
    alignSelf: "stretch",
    flex: 1,
  },
  applySampleWithStamper: {
    backgroundColor: Color.colorWhite,
    height: 736,
    justifyContent: "center",
    flexDirection: "row",
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default APPLYSAMPLEWITHSTAMPER;
