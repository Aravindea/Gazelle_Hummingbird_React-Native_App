import * as React from "react";
import { Text, StyleSheet, Image, View, Pressable } from "react-native";
import { TextInput } from "react-native-paper";
import { Color, FontSize, Padding, Border, FontFamily } from "../GlobalStyles";

const Login = () => {
  return (
    <View style={[styles.login, styles.loginFlexBox]}>
      <View style={styles.loginContainer}>
        <View style={styles.loginSection}>
          <View style={styles.topBar}>
            <View style={[styles.chargerBar, styles.chargerFlexBox]}>
              <View
                style={[styles.chargerIconPercentage, styles.chargerFlexBox]}
              >
                <Text style={styles.text}>96%</Text>
                <Image
                  style={styles.chargeIcon}
                  resizeMode="cover"
                  source={require("../assets/charge-icon.png")}
                />
              </View>
            </View>
            <View style={[styles.pageTitleBar, styles.barBg]}>
              <Text style={styles.home}>HOME</Text>
            </View>
          </View>
          <View style={styles.loginInputFields}>
            <View style={styles.topBar}>
              <View style={styles.userIdInputField}>
                <Text style={[styles.userId, styles.nextTypo]}>USER ID</Text>
                <TextInput
                  style={[styles.userIdInputField1, styles.inputSpaceBlock]}
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
              <View style={styles.passwordInputField}>
                <Text style={[styles.userId, styles.nextTypo]}>PASSWORD</Text>
                <TextInput
                  style={[styles.passwordInputField1, styles.inputSpaceBlock]}
                  placeholder="ENTER PASSWORD"
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
  loginFlexBox: {
    flexDirection: "row",
    justifyContent: "center",
  },
  chargerFlexBox: {
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
  },
  barBg: {
    backgroundColor: Color.colorBlack,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  nextTypo: {
    textAlign: "left",
    fontSize: FontSize.size_sm,
    color: Color.colorBlack,
  },
  inputSpaceBlock: {
    paddingBottom: Padding.p_11xs,
    paddingRight: Padding.p_mini,
    paddingTop: Padding.p_11xs,
    paddingLeft: Padding.p_5xs,
    height: 41,
    borderRadius: Border.br_9xs,
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
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
  chargerIconPercentage: {
    flex: 1,
  },
  chargerBar: {
    height: 30,
    paddingLeft: Padding.p_mini,
    paddingTop: Padding.p_mini,
    paddingRight: Padding.p_3xs,
    paddingBottom: Padding.p_mini,
    backgroundColor: Color.colorBlack,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  home: {
    fontSize: FontSize.size_xl,
    fontWeight: "600",
    fontFamily: FontFamily.workSansSemiBold,
    textAlign: "center",
    color: Color.colorWhite,
    flex: 1,
  },
  pageTitleBar: {
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_mini,
    marginTop: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  topBar: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  userId: {
    fontFamily: FontFamily.workSansRegular,
    textAlign: "left",
    fontSize: FontSize.size_sm,
  },
  userIdInputField1: {
    marginTop: 9,
  },
  userIdInputField: {
    alignSelf: "stretch",
  },
  passwordInputField1: {
    marginTop: 8,
  },
  passwordInputField: {
    marginTop: 22,
    alignSelf: "stretch",
  },
  next: {
    fontWeight: "500",
    fontFamily: FontFamily.workSansMedium,
    textAlign: "left",
    fontSize: FontSize.size_sm,
  },
  nextButton: {
    backgroundColor: Color.colorNavajowhite,
    width: 170,
    paddingHorizontal: Padding.p_47xl,
    paddingVertical: Padding.p_base,
    marginTop: 140,
    borderRadius: Border.br_9xs,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  loginInputFields: {
    height: 572,
    paddingHorizontal: Padding.p_11xl,
    paddingBottom: Padding.p_12xs,
    maxWidth: 500,
    marginTop: 80,
    alignItems: "center",
    width: "100%",
  },
  loginSection: {
    alignSelf: "stretch",
    alignItems: "center",
    flex: 1,
  },
  text1: {
    width: 414,
    color: Color.colorBlack,
    fontFamily: FontFamily.workSansRegular,
    marginTop: 80,
    textAlign: "center",
    fontSize: FontSize.size_xs,
  },
  loginContainer: {
    height: 706,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  login: {
    backgroundColor: Color.colorWhite,
    paddingBottom: Padding.p_11xl,
    justifyContent: "center",
    overflow: "hidden",
    width: "100%",
    flexDirection: "row",
    flex: 1,
  },
});

export default Login;
