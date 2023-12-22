import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { Padding, FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const HbVARIANTSUMMARYTestResult1 = () => {
  return (
    <View
      style={[styles.hbVariantSummaryTestResult, styles.pageTitleBarFlexBox]}
    >
      <View style={styles.hbVariantSummaryTestResult1}>
        <View style={styles.hbVariantSummaryTestResult2}>
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
            <View style={[styles.pageTitleBar, styles.pageTitleBarFlexBox]}>
              <View style={styles.homePreviousPageButton}>
                <Image
                  style={styles.homeIcIcon}
                  resizeMode="cover"
                  source={require("../assets/home-ic.png")}
                />
              </View>
              <Text
                style={[styles.hbVariantSummary, styles.hbVariantSummaryTypo]}
              >
                Hb VARIANT SUMMARY
              </Text>
            </View>
          </View>
          <View
            style={[styles.hbVariantSummaryTestResult3, styles.testSpaceBlock]}
          >
            <View style={[styles.testResultsDiv, styles.testSpaceBlock]}>
              <View style={[styles.testResultsChart, styles.chargerBarFlexBox]}>
                <View style={styles.testResultsChart1}>
                  <View style={styles.testResultsChart1}>
                    <Text style={[styles.patientIdPatient, styles.patientTypo]}>
                      PATIENT ID: Patient 7
                    </Text>
                    <View style={[styles.dividerLine, styles.dividerLayout]} />
                  </View>
                  <View style={styles.testResultsBarChart}>
                    <View style={styles.barChart}>
                      <View style={styles.a2CEChart}>
                        <Text style={[styles.a2CE, styles.patientTypo]}>
                          A2, C, E
                        </Text>
                        <View style={[styles.a2CEBar, styles.barPosition2]} />
                        <View
                          style={[styles.sBarFilled, styles.barPosition1]}
                        />
                        <Text style={styles.text1}>0%</Text>
                      </View>
                      <View style={styles.sChart}>
                        <Text style={[styles.a2CE, styles.patientTypo]}>S</Text>
                        <View style={[styles.sBar, styles.barPosition2]} />
                        <Text style={[styles.text2, styles.textTypo]}>
                          100%
                        </Text>
                        <View style={styles.sBarFilled1} />
                      </View>
                      <View style={styles.sChart}>
                        <Text style={[styles.a2CE, styles.patientTypo]}>F</Text>
                        <View style={[styles.sBar, styles.barPosition2]} />
                        <Text style={[styles.text2, styles.textTypo]}>0%</Text>
                        <View
                          style={[styles.sBarFilled2, styles.barPosition]}
                        />
                      </View>
                      <View style={styles.sChart}>
                        <Text style={[styles.a2CE, styles.patientTypo]}>A</Text>
                        <View style={[styles.sBar, styles.barPosition2]} />
                        <Text style={[styles.text2, styles.textTypo]}>70%</Text>
                        <View style={[styles.aBarFilled, styles.barPosition]} />
                      </View>
                    </View>
                    <View style={styles.dividerLine1} />
                    <View style={styles.phenotype}>
                      <Text style={[styles.phenotype1, styles.textTypo]}>
                        PHENOTYPE
                      </Text>
                      <Text style={[styles.as, styles.textTypo]}>AS</Text>
                    </View>
                  </View>
                  <View style={styles.dividerLine2}>
                    <View style={styles.dividerLayout} />
                    <View style={styles.dividerLine2}>
                      <Text
                        style={[
                          styles.likelySickleCell,
                          styles.hbVariantSummaryTypo,
                        ]}
                      >
                        Likely sickle cell trait (AS)
                      </Text>
                      <Text
                        style={[styles.noteTransfusionCan, styles.textTypo]}
                      >
                        Note: Transfusion can impact results
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.printButton}>
                <View
                  style={[styles.printButton1, styles.chargerBarSpaceBlock]}
                >
                  <Text style={[styles.print, styles.patientTypo]}>PRINT</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <Text style={[styles.text5, styles.textTypo]}>14:24 15/11/2023</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pageTitleBarFlexBox: {
    overflow: "hidden",
    justifyContent: "center",
  },
  chargerBarFlexBox: {
    paddingVertical: Padding.p_mini,
    alignItems: "center",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  wifiMapPinIcFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  hbVariantSummaryTypo: {
    fontFamily: FontFamily.workSansSemiBold,
    fontWeight: "600",
    textAlign: "center",
  },
  testSpaceBlock: {
    paddingBottom: Padding.p_12xs,
    alignItems: "center",
  },
  patientTypo: {
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
    color: Color.colorBlack,
  },
  dividerLayout: {
    height: 1,
    width: 283,
    backgroundColor: Color.colorGray_200,
  },
  barPosition2: {
    zIndex: 1,
    height: 46,
    marginTop: 5,
    backgroundColor: Color.colorWhite,
  },
  barPosition1: {
    top: 44,
    height: 20,
  },
  textTypo: {
    fontFamily: FontFamily.workSansRegular,
    color: Color.colorBlack,
    textAlign: "center",
  },
  barPosition: {
    left: 1,
    width: 25,
    zIndex: 3,
    position: "absolute",
  },
  chargerBarSpaceBlock: {
    paddingHorizontal: Padding.p_3xs,
    flexDirection: "row",
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
    paddingHorizontal: Padding.p_3xs,
    flexDirection: "row",
    justifyContent: "flex-end",
    backgroundColor: Color.colorBlack,
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
  hbVariantSummary: {
    fontSize: FontSize.size_base,
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
    backgroundColor: Color.colorBlack,
    alignItems: "center",
    alignSelf: "stretch",
    justifyContent: "center",
    flexDirection: "row",
  },
  topBar: {
    alignItems: "center",
    alignSelf: "stretch",
  },
  patientIdPatient: {
    color: Color.colorBlack,
    textAlign: "center",
    fontSize: FontSize.size_xs,
  },
  dividerLine: {
    marginTop: 6,
  },
  testResultsChart1: {
    alignItems: "center",
  },
  a2CE: {
    zIndex: 0,
    color: Color.colorBlack,
    textAlign: "center",
    fontSize: FontSize.size_xs,
  },
  a2CEBar: {
    width: 26,
    marginTop: 5,
  },
  sBarFilled: {
    left: 11,
    backgroundColor: Color.colorMediumaquamarine,
    zIndex: 2,
    position: "absolute",
    top: 44,
    width: 24,
  },
  text1: {
    zIndex: 3,
    fontFamily: FontFamily.workSansRegular,
    marginTop: 5,
    color: Color.colorBlack,
    textAlign: "center",
    fontSize: FontSize.size_xs,
  },
  a2CEChart: {
    alignItems: "center",
  },
  sBar: {
    width: 27,
    marginTop: 5,
  },
  text2: {
    zIndex: 2,
    marginTop: 5,
    fontSize: FontSize.size_xs,
  },
  sBarFilled1: {
    marginTop: -22,
    marginLeft: -12.5,
    top: "50%",
    left: "50%",
    backgroundColor: Color.colorKhaki,
    height: 44,
    width: 25,
    zIndex: 3,
    position: "absolute",
  },
  sChart: {
    marginLeft: 25,
    alignItems: "center",
  },
  sBarFilled2: {
    backgroundColor: Color.colorCornflowerblue,
    top: 44,
    height: 20,
  },
  aBarFilled: {
    top: 33,
    backgroundColor: Color.colorCoral,
    height: 31,
  },
  barChart: {
    flexDirection: "row",
  },
  dividerLine1: {
    width: 1,
    height: 79,
    marginLeft: 10,
    backgroundColor: Color.colorBlack,
  },
  phenotype1: {
    fontSize: FontSize.size_xs,
  },
  as: {
    marginTop: 10,
    fontSize: FontSize.size_xs,
  },
  phenotype: {
    marginLeft: 10,
    alignItems: "center",
  },
  testResultsBarChart: {
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  likelySickleCell: {
    color: Color.colorBlack,
    textAlign: "center",
    fontSize: FontSize.size_xs,
  },
  noteTransfusionCan: {
    fontSize: FontSize.size_5xs,
    marginTop: 3,
  },
  dividerLine2: {
    marginTop: 10,
    alignItems: "center",
  },
  testResultsChart: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorGainsboro_100,
    paddingHorizontal: Padding.p_xl,
    justifyContent: "center",
  },
  print: {
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.colorBlack,
  },
  printButton1: {
    borderRadius: Border.br_9xs,
    backgroundColor: Color.colorNavajowhite,
    width: 112,
    paddingVertical: Padding.p_base,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  printButton: {
    marginTop: 90,
    justifyContent: "center",
    flexDirection: "row",
  },
  testResultsDiv: {
    alignSelf: "stretch",
  },
  hbVariantSummaryTestResult3: {
    paddingHorizontal: Padding.p_11xl,
    maxWidth: 500,
    marginTop: 40,
    width: "100%",
  },
  hbVariantSummaryTestResult2: {
    alignItems: "center",
    alignSelf: "stretch",
    flex: 1,
  },
  text5: {
    width: 414,
    marginTop: 10,
    fontSize: FontSize.size_xs,
  },
  hbVariantSummaryTestResult1: {
    paddingBottom: Padding.p_11xl,
    alignItems: "center",
    alignSelf: "stretch",
    flex: 1,
  },
  hbVariantSummaryTestResult: {
    height: 736,
    justifyContent: "center",
    flexDirection: "row",
    width: "100%",
    flex: 1,
    backgroundColor: Color.colorWhite,
    overflow: "hidden",
  },
});

export default HbVARIANTSUMMARYTestResult1;
