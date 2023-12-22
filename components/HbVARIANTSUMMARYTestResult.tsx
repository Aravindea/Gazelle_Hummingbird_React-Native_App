import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const HbVARIANTSUMMARYTestResult = () => {
  return (
    <View style={[styles.hbVariantSummaryTestResult, styles.testFlexBox]}>
      <View style={styles.testResultsChart}>
        <View style={styles.testResultsChart}>
          <Text style={[styles.patientIdPatient, styles.patientTypo]}>
            PATIENT ID: Patient 7
          </Text>
          <View style={[styles.dividerLine, styles.dividerLayout]} />
        </View>
        <View style={[styles.testResultsBarChart, styles.testFlexBox]}>
          <View style={styles.barChart}>
            <View style={styles.a2CEChart}>
              <Text style={[styles.a2CE, styles.patientTypo]}>A2, C, E</Text>
              <View style={[styles.a2CEBar, styles.barPosition1]} />
              <View style={[styles.sBarFilled, styles.barLayout]} />
              <Text style={styles.text}>0%</Text>
            </View>
            <View style={styles.sChart}>
              <Text style={[styles.a2CE, styles.patientTypo]}>S</Text>
              <View style={[styles.sBar, styles.barPosition1]} />
              <Text style={[styles.text1, styles.asTypo]}>100%</Text>
              <View style={[styles.sBarFilled1, styles.barPosition]} />
            </View>
            <View style={styles.sChart}>
              <Text style={[styles.a2CE, styles.patientTypo]}>F</Text>
              <View style={[styles.sBar, styles.barPosition1]} />
              <Text style={[styles.text1, styles.asTypo]}>0%</Text>
              <View style={[styles.sBarFilled2, styles.barPosition]} />
            </View>
            <View style={styles.sChart}>
              <Text style={[styles.a2CE, styles.patientTypo]}>A</Text>
              <View style={[styles.sBar, styles.barPosition1]} />
              <Text style={[styles.text1, styles.asTypo]}>70%</Text>
              <View style={[styles.aBarFilled, styles.barPosition]} />
            </View>
          </View>
          <View style={styles.dividerLine1} />
          <View style={styles.phenotype}>
            <Text style={[styles.phenotype1, styles.asTypo]}>PHENOTYPE</Text>
            <Text style={[styles.as, styles.asTypo]}>AS</Text>
          </View>
        </View>
        <View style={styles.dividerLine2}>
          <View style={styles.dividerLayout} />
          <View style={styles.dividerLine2}>
            <Text style={[styles.likelySickleCell, styles.patientTypo]}>
              Likely sickle cell trait (AS)
            </Text>
            <Text style={[styles.noteTransfusionCan, styles.asTypo]}>
              Note: Transfusion can impact results
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  testFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  patientTypo: {
    textAlign: "center",
    color: Color.colorBlack,
    fontSize: FontSize.size_xs,
  },
  dividerLayout: {
    height: 1,
    width: 283,
    backgroundColor: Color.colorGray_200,
  },
  barPosition1: {
    zIndex: 1,
    height: 46,
    backgroundColor: Color.colorWhite,
    marginTop: 5,
  },
  barLayout: {
    height: 20,
    marginTop: 2,
  },
  asTypo: {
    fontFamily: FontFamily.workSansRegular,
    textAlign: "center",
    color: Color.colorBlack,
  },
  barPosition: {
    width: 25,
    marginLeft: -12.5,
    zIndex: 3,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  patientIdPatient: {
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
    color: Color.colorBlack,
  },
  dividerLine: {
    marginTop: 6,
  },
  testResultsChart: {
    alignItems: "center",
  },
  a2CE: {
    zIndex: 0,
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
    color: Color.colorBlack,
  },
  a2CEBar: {
    width: 26,
    marginTop: 5,
  },
  sBarFilled: {
    marginLeft: -12,
    backgroundColor: Color.colorMediumaquamarine,
    width: 24,
    zIndex: 2,
    left: "50%",
    top: "50%",
    position: "absolute",
    height: 20,
    marginTop: 2,
  },
  text: {
    zIndex: 3,
    fontFamily: FontFamily.workSansRegular,
    marginTop: 5,
    textAlign: "center",
    color: Color.colorBlack,
    fontSize: FontSize.size_xs,
  },
  a2CEChart: {
    alignItems: "center",
  },
  sBar: {
    width: 27,
    marginTop: 5,
  },
  text1: {
    zIndex: 2,
    marginTop: 5,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.workSansRegular,
  },
  sBarFilled1: {
    marginTop: -22,
    backgroundColor: Color.colorKhaki,
    height: 44,
  },
  sChart: {
    marginLeft: 25,
    alignItems: "center",
  },
  sBarFilled2: {
    backgroundColor: Color.colorCornflowerblue,
    height: 20,
    marginTop: 2,
    marginLeft: -12.5,
  },
  aBarFilled: {
    marginTop: -9,
    backgroundColor: Color.colorCoral,
    height: 31,
  },
  barChart: {
    flexDirection: "row",
  },
  dividerLine1: {
    backgroundColor: Color.colorBlack,
    width: 1,
    height: 79,
    marginLeft: 10,
  },
  phenotype1: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.workSansRegular,
  },
  as: {
    marginTop: 10,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.workSansRegular,
  },
  phenotype: {
    marginLeft: 10,
    alignItems: "center",
  },
  testResultsBarChart: {
    marginTop: 10,
    flexDirection: "row",
  },
  likelySickleCell: {
    fontWeight: "600",
    fontFamily: FontFamily.workSansSemiBold,
  },
  noteTransfusionCan: {
    fontSize: FontSize.size_5xs,
    marginTop: 3,
  },
  dividerLine2: {
    marginTop: 10,
    alignItems: "center",
  },
  hbVariantSummaryTestResult: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorGainsboro_100,
    width: 354,
    overflow: "hidden",
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_mini,
  },
});

export default HbVARIANTSUMMARYTestResult;
