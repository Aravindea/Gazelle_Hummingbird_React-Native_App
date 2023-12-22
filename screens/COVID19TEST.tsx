import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { Padding, Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const COVID19TEST = () => {
  return (
    <View style={[styles.covid19Test, styles.covid19TestLayout]}>
      <View style={styles.covid19PrepareSampleContai}>
        <View style={styles.covid19PrepareSampleSectio}>
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
              <Text style={styles.covid19Test1}>COVID-19 TEST</Text>
            </View>
          </View>
          <View
            style={[
              styles.covid19PrepareSample,
              styles.progressBarImgSpaceBlock,
            ]}
          >
            <View style={[styles.covid19Testdiv, styles.covid19SpaceBlock]}>
              <View style={styles.topBar}>
                <View style={styles.quickTest}>
                  <Text style={[styles.patientIdCovid19, styles.cancelTypo]}>
                    PATIENT ID: Covid-19 DEMO
                  </Text>
                  <Text style={[styles.quickTest1, styles.cancelTypo]}>
                    QUICK TEST
                  </Text>
                </View>
                <Image
                  style={[
                    styles.progressBarImg,
                    styles.progressBarImgSpaceBlock,
                  ]}
                  resizeMode="cover"
                  source={require("../assets/progress-bar-img.png")}
                />
              </View>
              <View style={styles.cancelTestButton}>
                <View
                  style={[styles.cancelTestButton1, styles.chargerBarFlexBox]}
                >
                  <Text style={[styles.cancel, styles.cancelTypo]}>CANCEL</Text>
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
  covid19TestLayout: {
    width: "100%",
    overflow: "hidden",
  },
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
  progressBarImgSpaceBlock: {
    marginTop: 40,
    alignSelf: "stretch",
  },
  covid19SpaceBlock: {
    paddingBottom: Padding.p_12xs,
    alignItems: "center",
  },
  cancelTypo: {
    textAlign: "left",
    fontSize: FontSize.size_sm,
    color: Color.colorBlack,
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
  covid19Test1: {
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
    paddingRight: 35,
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
  patientIdCovid19: {
    width: 191,
    fontFamily: FontFamily.workSansRegular,
    textAlign: "left",
    fontSize: FontSize.size_sm,
  },
  quickTest1: {
    width: 147,
    marginTop: 20,
    fontFamily: FontFamily.workSansRegular,
    textAlign: "left",
    fontSize: FontSize.size_sm,
  },
  quickTest: {
    alignSelf: "stretch",
  },
  progressBarImg: {
    maxWidth: "100%",
    height: 92,
    overflow: "hidden",
    width: "100%",
  },
  cancel: {
    fontWeight: "500",
    fontFamily: FontFamily.workSansMedium,
    textAlign: "left",
    fontSize: FontSize.size_sm,
  },
  cancelTestButton1: {
    borderRadius: Border.br_9xs,
    backgroundColor: Color.colorNavajowhite,
    width: 169,
    paddingVertical: Padding.p_base,
    justifyContent: "center",
  },
  cancelTestButton: {
    marginTop: 108,
    justifyContent: "center",
    flexDirection: "row",
  },
  covid19Testdiv: {
    alignSelf: "stretch",
  },
  covid19PrepareSample: {
    paddingHorizontal: Padding.p_11xl,
    paddingBottom: Padding.p_12xs,
    alignItems: "center",
  },
  covid19PrepareSampleSectio: {
    alignItems: "center",
    alignSelf: "stretch",
    flex: 1,
  },
  text1: {
    width: 414,
    marginTop: 10,
    color: Color.colorBlack,
    fontFamily: FontFamily.workSansRegular,
    textAlign: "center",
    fontSize: FontSize.size_xs,
  },
  covid19PrepareSampleContai: {
    paddingBottom: Padding.p_11xl,
    alignItems: "center",
    alignSelf: "stretch",
    flex: 1,
  },
  covid19Test: {
    backgroundColor: Color.colorWhite,
    height: 736,
    justifyContent: "center",
    flexDirection: "row",
    overflow: "hidden",
    flex: 1,
  },
});

export default COVID19TEST;
