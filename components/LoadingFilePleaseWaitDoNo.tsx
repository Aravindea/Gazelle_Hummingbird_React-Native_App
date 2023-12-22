import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { FontSize, Color, FontFamily } from "../GlobalStyles";

const LoadingFilePleaseWaitDoNo = () => {
  return (
    <View style={styles.loadingFilePleaseWaitDoNo}>
      <View style={styles.hbVariantTestParent}>
        <Text style={styles.hbVariantTest}>Hb VARIANT TEST</Text>
        <View style={styles.frameChild} />
        <View style={[styles.frameWrapper, styles.frameFlexBox]}>
          <View style={styles.frameParent}>
            <View style={styles.frameFlexBox}>
              <View style={styles.frameFlexBox}>
                <Text style={[styles.doNotOpen, styles.doNotOpenTypo]}>
                  DO NOT OPEN THE DOOR.
                </Text>
              </View>
            </View>
            <View style={[styles.frameView, styles.frameFlexBox]}>
              <View style={styles.frameFlexBox}>
                <Text style={[styles.preparingForTest, styles.doNotOpenTypo]}>
                  Preparing for test
                </Text>
              </View>
            </View>
            <View style={[styles.frameView, styles.frameFlexBox]}>
              <Text style={[styles.preparingForTest, styles.doNotOpenTypo]}>
                Please wait
              </Text>
              <Image
                style={styles.frameItem}
                resizeMode="cover"
                source={require("../assets/frame-9.png")}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  doNotOpenTypo: {
    fontSize: FontSize.size_sm,
    textAlign: "center",
    color: Color.colorWhite,
  },
  hbVariantTest: {
    fontSize: FontSize.size_xl,
    fontWeight: "700",
    fontFamily: FontFamily.workSansBold,
    textAlign: "center",
    color: Color.colorWhite,
  },
  frameChild: {
    borderStyle: "dashed",
    borderColor: Color.colorWhite,
    borderRadius: 0.001,
    borderTopWidth: 1.5,
    width: 330,
    marginTop: 17,
    height: 2,
  },
  doNotOpen: {
    fontWeight: "600",
    fontFamily: FontFamily.workSansSemiBold,
  },
  preparingForTest: {
    fontWeight: "500",
    fontFamily: FontFamily.workSansMedium,
  },
  frameView: {
    marginTop: 6,
  },
  frameItem: {
    width: 8,
    marginLeft: 3,
    height: 2,
  },
  frameParent: {
    alignItems: "center",
  },
  frameWrapper: {
    marginTop: 17,
  },
  hbVariantTestParent: {
    position: "absolute",
    top: 107,
    left: 14,
    alignItems: "center",
  },
  loadingFilePleaseWaitDoNo: {
    borderRadius: 12,
    backgroundColor: Color.colorOrange,
    width: 356,
    height: 286,
    overflow: "hidden",
  },
});

export default LoadingFilePleaseWaitDoNo;
