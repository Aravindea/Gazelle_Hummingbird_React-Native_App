import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { Padding, Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const COVID19TESTResult = () => {
  return (
    <View style={styles.covid19TestResult}>
      <View style={styles.covid19PrepareSampleContai}>
        <View style={styles.covid19PrepareSampleSectio}>
          <View style={styles.topBar}>
            <View style={[styles.chargerBar, styles.chargerBarFlexBox]}>
              <View
                style={[
                  styles.chargerIconPercentage,
                  styles.printButtonFlexBox,
                ]}
              >
                <View style={[styles.wifiMapPinIc, styles.printButtonFlexBox]}>
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
              <Text style={styles.covid19TestResults}>
                COVID-19 TEST RESULTS
              </Text>
            </View>
          </View>
          <View style={[styles.covid19PrepareSample, styles.covid19SpaceBlock]}>
            <View style={[styles.covid19Testdiv, styles.covid19SpaceBlock]}>
              <View
                style={[styles.covid19TestResultsDiv, styles.covid19SpaceBlock]}
              >
                <Image
                  style={styles.covid19TestResultsImg}
                  resizeMode="cover"
                  source={require("../assets/covid19-test-results-img.png")}
                />
                <View style={[styles.printButton, styles.printButtonFlexBox]}>
                  <View style={styles.printButton1}>
                    <View
                      style={[styles.printButton2, styles.chargerBarFlexBox]}
                    >
                      <Text style={styles.print}>PRINT</Text>
                    </View>
                  </View>
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
  printButtonFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  barBg: {
    backgroundColor: Color.colorBlack,
    alignSelf: "stretch",
  },
  covid19SpaceBlock: {
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
    alignItems: "center",
    flex: 1,
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
  chargerIconPercentage: {
    alignItems: "center",
    flex: 1,
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
  covid19TestResults: {
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
  covid19TestResultsImg: {
    width: 347,
    height: 175,
  },
  print: {
    fontSize: FontSize.size_sm,
    fontWeight: "500",
    fontFamily: FontFamily.workSansMedium,
    textAlign: "left",
    color: Color.colorBlack,
  },
  printButton2: {
    borderRadius: Border.br_9xs,
    backgroundColor: Color.colorNavajowhite,
    width: 112,
    paddingVertical: Padding.p_base,
    justifyContent: "center",
  },
  printButton1: {
    justifyContent: "center",
    flexDirection: "row",
  },
  printButton: {
    marginTop: 108,
    alignSelf: "stretch",
  },
  covid19TestResultsDiv: {
    maxWidth: 350,
    width: "100%",
  },
  covid19Testdiv: {
    alignSelf: "stretch",
  },
  covid19PrepareSample: {
    paddingHorizontal: Padding.p_11xl,
    maxWidth: 500,
    marginTop: 40,
    width: "100%",
  },
  covid19PrepareSampleSectio: {
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
  covid19PrepareSampleContai: {
    paddingBottom: Padding.p_11xl,
    alignItems: "center",
    alignSelf: "stretch",
    flex: 1,
  },
  covid19TestResult: {
    backgroundColor: Color.colorWhite,
    height: 736,
    justifyContent: "center",
    flexDirection: "row",
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default COVID19TESTResult;
