import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const Covid19CONFIRMPATIENTINFO = () => {
  return (
    <View
      style={[styles.covid19ConfirmPatientInfo, styles.pageTitleBarFlexBox]}
    >
      <View style={styles.covid19ConfirmPatientInfo1}>
        <View style={styles.covid19ConfirmPatientInfo2}>
          <View style={styles.topBar}>
            <View style={[styles.chargerBar, styles.chargerFlexBox]}>
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
                <View style={styles.chargerFlexBox}>
                  <Text style={styles.text}>96%</Text>
                  <Image
                    style={styles.chargeIcon}
                    resizeMode="cover"
                    source={require("../assets/charge-icon.png")}
                  />
                </View>
              </View>
            </View>
            <View style={[styles.pageTitleBar, styles.barFlexBox]}>
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
              <Text style={styles.confirmPatientInfo}>
                CONFIRM PATIENT INFO
              </Text>
            </View>
          </View>
          <View style={styles.covid19ConfirmPatientInfo3}>
            <View style={styles.covid19ConfirmPatientInfo4}>
              <View style={styles.patientInfoDetails}>
                <View style={styles.patientId}>
                  <Text style={styles.patientId1}>PATIENT ID</Text>
                  <Text style={[styles.text1, styles.text1Typo]}>:</Text>
                  <Text style={[styles.xxxxxxxxxxxxxxxxx, styles.text1Typo]}>
                    XXXXXXXXXXXXXXXXX
                  </Text>
                </View>
                <View style={styles.infant}>
                  <Text style={styles.patientId1}>INFANT</Text>
                  <Text style={[styles.text1, styles.text1Typo]}>:</Text>
                  <Text style={[styles.xxxxxxxxxxxxxxxxx, styles.text1Typo]}>
                    XXXXXXXXXXXXXXXXX
                  </Text>
                </View>
                <View style={styles.infant}>
                  <Text style={styles.patientId1}>PATIENT NAME</Text>
                  <Text style={[styles.text1, styles.text1Typo]}>:</Text>
                  <Text style={[styles.xxxxxxxxxxxxxxxxx, styles.text1Typo]}>
                    XXXXXXXXXXXXXXXXX
                  </Text>
                </View>
                <View style={styles.infant}>
                  <Text style={styles.patientId1}>AGE</Text>
                  <Text style={[styles.text1, styles.text1Typo]}>:</Text>
                  <Text style={[styles.xxxxxxxxxxxxxxxxx, styles.text1Typo]}>
                    XXXXXXXXXXXXXXXXX
                  </Text>
                </View>
                <View style={styles.infant}>
                  <Text style={styles.patientId1}>GENDER</Text>
                  <Text style={[styles.text1, styles.text1Typo]}>:</Text>
                  <Text style={[styles.xxxxxxxxxxxxxxxxx, styles.text1Typo]}>
                    XXXXXXXXXXXXXXXXX
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={[styles.editContinueButton, styles.pageTitleBarFlexBox]}
            >
              <Pressable style={styles.buttonFlexBox}>
                <Text style={[styles.edit, styles.editClr]}>EDIT</Text>
              </Pressable>
              <Pressable style={[styles.continueButton, styles.buttonFlexBox]}>
                <Text style={[styles.edit, styles.editClr]}>CONTINUE</Text>
              </Pressable>
            </View>
          </View>
        </View>
        <Text style={[styles.text6, styles.editClr]}>14:24 15/11/2023</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pageTitleBarFlexBox: {
    justifyContent: "center",
    flexDirection: "row",
  },
  chargerFlexBox: {
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  wifiMapPinIcFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  barFlexBox: {
    backgroundColor: Color.colorBlack,
    alignItems: "center",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  homeIcIconLayout: {
    height: 24,
    width: 24,
  },
  text1Typo: {
    marginLeft: 6,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.workSansRegular,
    fontSize: FontSize.size_sm,
  },
  editClr: {
    color: Color.colorBlack,
    textAlign: "center",
  },
  buttonFlexBox: {
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_xl,
    backgroundColor: Color.colorNavajowhite,
    borderRadius: Border.br_9xs,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    overflow: "hidden",
    flex: 1,
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
  chargerBar: {
    height: 30,
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_mini,
    backgroundColor: Color.colorBlack,
    alignItems: "center",
    alignSelf: "stretch",
    overflow: "hidden",
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
  confirmPatientInfo: {
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
    paddingRight: Padding.p_41xl,
    paddingBottom: Padding.p_mini,
    marginTop: 1,
    justifyContent: "center",
    flexDirection: "row",
  },
  topBar: {
    alignItems: "center",
    alignSelf: "stretch",
  },
  patientId1: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.workSansRegular,
    fontSize: FontSize.size_sm,
    flex: 1,
  },
  text1: {
    width: 5,
    height: 17,
  },
  xxxxxxxxxxxxxxxxx: {
    flex: 1,
  },
  patientId: {
    alignSelf: "stretch",
    flexDirection: "row",
  },
  infant: {
    marginTop: 20,
    alignSelf: "stretch",
    flexDirection: "row",
  },
  patientInfoDetails: {
    alignSelf: "stretch",
  },
  covid19ConfirmPatientInfo4: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorGainsboro_200,
    paddingHorizontal: Padding.p_mid,
    paddingVertical: Padding.p_11xl,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  edit: {
    fontWeight: "500",
    fontFamily: FontFamily.workSansMedium,
    color: Color.colorBlack,
    fontSize: FontSize.size_sm,
    flex: 1,
  },
  continueButton: {
    marginLeft: 60,
  },
  editContinueButton: {
    marginTop: 90,
    alignSelf: "stretch",
  },
  covid19ConfirmPatientInfo3: {
    paddingHorizontal: Padding.p_11xl,
    paddingBottom: Padding.p_12xs,
    maxWidth: 500,
    marginTop: 40,
    alignItems: "center",
    width: "100%",
  },
  covid19ConfirmPatientInfo2: {
    alignItems: "center",
    alignSelf: "stretch",
    flex: 1,
  },
  text6: {
    width: 414,
    marginTop: 10,
    fontFamily: FontFamily.workSansRegular,
    color: Color.colorBlack,
    fontSize: FontSize.size_xs,
  },
  covid19ConfirmPatientInfo1: {
    paddingBottom: Padding.p_11xl,
    alignItems: "center",
    alignSelf: "stretch",
    flex: 1,
  },
  covid19ConfirmPatientInfo: {
    backgroundColor: Color.colorWhite,
    height: 736,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default Covid19CONFIRMPATIENTINFO;
