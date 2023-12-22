import * as React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import { Color } from "../GlobalStyles";

const Splash = () => {
  return (
    <View style={styles.splash}>
      <ImageBackground
        style={styles.logoGazelleOrangeTransparenIcon}
        resizeMode="cover"
        source={require("../assets/logogazelleorangetransparent1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  logoGazelleOrangeTransparenIcon: {
    width: 212,
    height: 177,
  },
  splash: {
    backgroundColor: Color.colorBlack,
    flex: 1,
    width: "100%",
    height: 736,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 101,
    paddingVertical: 279,
  },
});

export default Splash;
