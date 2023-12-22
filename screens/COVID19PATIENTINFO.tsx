import React, { useState } from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { TextInput, RadioButton } from "react-native-paper";
import { Color, FontSize, Padding, Border, FontFamily } from "../GlobalStyles";

const COVID19PATIENTINFO = () => {
  const [yesValue, setYesValue] = useState("YES");
  const [noValue, setNoValue] = useState("NO");
  const [maleValue, setMaleValue] = useState("MALE");
  const [femaleValue, setFemaleValue] = useState("FEMALE");
  const [othersValue, setOthersValue] = useState("OTHERS");

  return (
    <View style={[styles.covid19PatientInfo, styles.noFlexBox]}>
      <View style={styles.covid19PatientInfoContaine}>
        <View style={styles.covid19PatientInfoSection}>
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
              <View
                style={[styles.homePreviousPageButton, styles.radioFlexBox]}
              >
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
              <Text style={styles.covid19PatientInfo1}>
                COVID-19 PATIENT INFO
              </Text>
            </View>
          </View>
          <View style={styles.patientInfo}>
            <View style={styles.topBar}>
              <View style={styles.patientId}>
                <Text style={[styles.patientId1, styles.nextTypo]}>
                  PATIENT ID
                </Text>
                <TextInput
                  style={[styles.patientIdInputField, styles.age2FlexBox]}
                  placeholder="ENTER USER ID"
                  mode="outlined"
                  placeholderTextColor="#878787"
                  activeOutlineColor="#f9a11b"
                  theme={{
                    fonts: {
                      regular: {
                        fontFamily: "Work Sans",
                        fontWeight: "Regular",
                      },
                    },
                    colors: { text: "#878787" },
                  }}
                />
              </View>
              <View style={styles.infantRadio}>
                <Text style={[styles.patientId1, styles.nextTypo]}>INFANT</Text>
                <View style={[styles.infantRadio1, styles.age2FlexBox]}>
                  <View style={[styles.infantRadioYesNo, styles.radioFlexBox]}>
                    <View
                      style={[styles.yes, styles.noFlexBox]}
                      value={yesValue}
                      onValueChange={setYesValue}
                    >
                      <RadioButton.Group
                        value={yesValue}
                        onValueChange={setYesValue}
                      >
                        <View>
                          <View style={[styles.view5, styles.radioFlexBox]}>
                            <RadioButton
                              color="#f9a11b"
                              uncheckedColor="#49454f"
                              value="YES"
                            />
                            <Text>YES</Text>
                          </View>
                        </View>
                      </RadioButton.Group>
                    </View>
                    <View
                      style={[styles.no, styles.noFlexBox]}
                      value={noValue}
                      onValueChange={setNoValue}
                    >
                      <RadioButton.Group
                        value={noValue}
                        onValueChange={setNoValue}
                      >
                        <View>
                          <View style={[styles.view5, styles.radioFlexBox]}>
                            <RadioButton
                              color="#f9a11b"
                              uncheckedColor="#49454f"
                              value="NO"
                            />
                            <Text>NO</Text>
                          </View>
                        </View>
                      </RadioButton.Group>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.infantRadio}>
                <Text style={[styles.patientId1, styles.nextTypo]}>
                  PATIENT NAME
                </Text>
                <TextInput
                  style={[styles.patientIdInputField, styles.age2FlexBox]}
                  placeholder="ENTER PATIENT NAME"
                  mode="outlined"
                  placeholderTextColor="#878787"
                  activeOutlineColor="#f9a11b"
                  theme={{
                    fonts: {
                      regular: {
                        fontFamily: "Work Sans",
                        fontWeight: "Regular",
                      },
                    },
                    colors: { text: "#878787" },
                  }}
                />
              </View>
              <View style={styles.infantRadio}>
                <Text style={[styles.patientId1, styles.nextTypo]}>AGE</Text>
                <View style={styles.age2FlexBox}>
                  <TextInput
                    style={[styles.ageInputField, styles.inputSpaceBlock]}
                    placeholder="ENTER AGE"
                    mode="outlined"
                    placeholderTextColor="#878787"
                    activeOutlineColor="#f9a11b"
                    theme={{
                      fonts: {
                        regular: {
                          fontFamily: "Work Sans",
                          fontWeight: "Regular",
                        },
                      },
                      colors: { text: "#878787" },
                    }}
                  />
                  <Text style={[styles.years, styles.nextTypo]}>Years</Text>
                </View>
              </View>
              <View style={styles.infantRadio}>
                <Text style={[styles.patientId1, styles.nextTypo]}>GENDER</Text>
                <View style={[styles.infantRadio1, styles.age2FlexBox]}>
                  <View style={[styles.genderRadio1, styles.radioFlexBox]}>
                    <View
                      style={[styles.yes, styles.noFlexBox]}
                      value={maleValue}
                      onValueChange={setMaleValue}
                    >
                      <RadioButton.Group
                        value={maleValue}
                        onValueChange={setMaleValue}
                      >
                        <View>
                          <View style={[styles.view5, styles.radioFlexBox]}>
                            <RadioButton
                              color="#f9a11b"
                              uncheckedColor="#49454f"
                              value="MALE"
                            />
                            <Text>MALE</Text>
                          </View>
                        </View>
                      </RadioButton.Group>
                    </View>
                    <View
                      style={[styles.female, styles.noFlexBox]}
                      value={femaleValue}
                      onValueChange={setFemaleValue}
                    >
                      <RadioButton.Group
                        value={femaleValue}
                        onValueChange={setFemaleValue}
                      >
                        <View>
                          <View style={[styles.view5, styles.radioFlexBox]}>
                            <RadioButton
                              color="#f9a11b"
                              uncheckedColor="#49454f"
                              value="FEMALE"
                            />
                            <Text>FEMALE</Text>
                          </View>
                        </View>
                      </RadioButton.Group>
                    </View>
                    <View
                      style={[styles.female, styles.noFlexBox]}
                      value={othersValue}
                      onValueChange={setOthersValue}
                    >
                      <RadioButton.Group
                        value={othersValue}
                        onValueChange={setOthersValue}
                      >
                        <View>
                          <View style={[styles.view5, styles.radioFlexBox]}>
                            <RadioButton
                              color="#f9a11b"
                              uncheckedColor="#49454f"
                              value="OTHERS"
                            />
                            <Text>OTHERS</Text>
                          </View>
                        </View>
                      </RadioButton.Group>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <Pressable style={styles.nextButton}>
              <Text style={[styles.next, styles.nextTypo]}>NEXT</Text>
            </Pressable>
          </View>
        </View>
        <Text style={styles.text1}>14:24 15/11/2023</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  yesText: {},
  view: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  noText: {},
  view1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  maleText: {},
  view2: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  femaleText: {},
  view3: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  othersText: {},
  view4: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  noFlexBox: {
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
  radioFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  homeIcIconLayout: {
    height: 24,
    width: 24,
  },
  nextTypo: {
    textAlign: "left",
    fontSize: FontSize.size_sm,
    color: Color.colorBlack,
  },
  age2FlexBox: {
    marginTop: 10,
    alignItems: "center",
    alignSelf: "stretch",
    flexDirection: "row",
  },
  inputSpaceBlock: {
    paddingBottom: Padding.p_11xs,
    paddingRight: Padding.p_mini,
    paddingTop: Padding.p_11xs,
    paddingLeft: Padding.p_5xs,
    borderRadius: Border.br_9xs,
    overflow: "hidden",
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
    flex: 1,
  },
  covid19PatientInfo1: {
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
    fontFamily: FontFamily.workSansRegular,
    textAlign: "left",
    fontSize: FontSize.size_sm,
  },
  patientIdInputField: {
    paddingBottom: Padding.p_11xs,
    paddingRight: Padding.p_mini,
    paddingTop: Padding.p_11xs,
    paddingLeft: Padding.p_5xs,
    borderRadius: Border.br_9xs,
    overflow: "hidden",
    height: 41,
  },
  patientId: {
    alignSelf: "stretch",
  },
  view5: {
    alignItems: "center",
  },
  yes: {
    alignItems: "center",
  },
  no: {
    marginLeft: 60,
    alignItems: "center",
  },
  infantRadioYesNo: {
    alignItems: "center",
  },
  infantRadio1: {
    borderStyle: "solid",
    borderColor: Color.colorGray_100,
    borderWidth: 1,
    height: 46,
    paddingBottom: Padding.p_11xs,
    paddingRight: Padding.p_mini,
    paddingTop: Padding.p_11xs,
    paddingLeft: Padding.p_5xs,
    borderRadius: Border.br_9xs,
    overflow: "hidden",
  },
  infantRadio: {
    marginTop: 22,
    alignSelf: "stretch",
  },
  ageInputField: {
    height: 41,
    paddingRight: Padding.p_mini,
    paddingTop: Padding.p_11xs,
    paddingLeft: Padding.p_5xs,
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  years: {
    marginLeft: 9,
    fontFamily: FontFamily.workSansRegular,
    textAlign: "left",
    fontSize: FontSize.size_sm,
    flex: 1,
  },
  female: {
    marginLeft: 30,
    alignItems: "center",
  },
  genderRadio1: {
    alignItems: "center",
    flex: 1,
  },
  next: {
    fontWeight: "500",
    fontFamily: FontFamily.workSansMedium,
    textAlign: "left",
    fontSize: FontSize.size_sm,
  },
  nextButton: {
    backgroundColor: Color.colorNavajowhite,
    paddingHorizontal: Padding.p_47xl,
    paddingVertical: Padding.p_base,
    marginTop: 60,
    borderRadius: Border.br_9xs,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  patientInfo: {
    paddingHorizontal: Padding.p_11xl,
    paddingBottom: Padding.p_21xl,
    maxWidth: 500,
    marginTop: 40,
    alignItems: "center",
    width: "100%",
  },
  covid19PatientInfoSection: {
    alignItems: "center",
    alignSelf: "stretch",
    flex: 1,
  },
  text1: {
    width: 414,
    color: Color.colorBlack,
    fontFamily: FontFamily.workSansRegular,
    marginTop: 40,
    textAlign: "center",
    fontSize: FontSize.size_xs,
  },
  covid19PatientInfoContaine: {
    paddingBottom: Padding.p_11xl,
    alignItems: "center",
    alignSelf: "stretch",
    flex: 1,
  },
  covid19PatientInfo: {
    backgroundColor: Color.colorWhite,
    height: 736,
    overflow: "hidden",
    width: "100%",
    justifyContent: "center",
    flex: 1,
  },
});

export default COVID19PATIENTINFO;
