const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import Login from "./screens/Login";
import Splash from "./screens/Splash";
import COVID19TESTResult from "./screens/COVID19TESTResult";
import COVID19TEST from "./screens/COVID19TEST";
import Covid19PREPARESAMPLE from "./screens/Covid19PREPARESAMPLE";
import Covid19CONFIRMPATIENTINFO from "./screens/Covid19CONFIRMPATIENTINFO";
import COVID19PATIENTINFO from "./screens/COVID19PATIENTINFO";
import LoadingFilePleaseWaitDoNo from "./components/LoadingFilePleaseWaitDoNo";
import HbVARIANTSUMMARYTestResult from "./components/HbVARIANTSUMMARYTestResult";
import HbVARIANTSUMMARYTestResult1 from "./screens/HbVARIANTSUMMARYTestResult1";
import HbVARIANTRUNNING from "./screens/HbVARIANTRUNNING";
import FILLWELLS from "./screens/FILLWELLS";
import APPLYSAMPLEWITHSTAMPER from "./screens/APPLYSAMPLEWITHSTAMPER";
import WETPAPERB from "./screens/WETPAPERB";
import WETPAPERA from "./screens/WETPAPERA";
import MIXBLOODANDMARKERFLUIDB from "./screens/MIXBLOODANDMARKERFLUIDB";
import MIXBLOODANDMARKERFLUIDA from "./screens/MIXBLOODANDMARKERFLUIDA";
import CONFIRMPATIENTINFO from "./screens/CONFIRMPATIENTINFO";
import HbVARIANTPATIENTINFO from "./screens/HbVARIANTPATIENTINFO";
import Home from "./screens/Home";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 3000);
  }, []);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Splash"
              component={Splash}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="COVID19TESTResult"
              component={COVID19TESTResult}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="COVID19TEST"
              component={COVID19TEST}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Covid19PREPARESAMPLE"
              component={Covid19PREPARESAMPLE}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Covid19CONFIRMPATIENTINFO"
              component={Covid19CONFIRMPATIENTINFO}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="COVID19PATIENTINFO"
              component={COVID19PATIENTINFO}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HbVARIANTSUMMARYTestResult1"
              component={HbVARIANTSUMMARYTestResult1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HbVARIANTRUNNING"
              component={HbVARIANTRUNNING}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FILLWELLS"
              component={FILLWELLS}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="APPLYSAMPLEWITHSTAMPER"
              component={APPLYSAMPLEWITHSTAMPER}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="WETPAPERB"
              component={WETPAPERB}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="WETPAPERA"
              component={WETPAPERA}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MIXBLOODANDMARKERFLUIDB"
              component={MIXBLOODANDMARKERFLUIDB}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MIXBLOODANDMARKERFLUIDA"
              component={MIXBLOODANDMARKERFLUIDA}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CONFIRMPATIENTINFO"
              component={CONFIRMPATIENTINFO}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HbVARIANTPATIENTINFO"
              component={HbVARIANTPATIENTINFO}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : (
          <Splash />
        )}
      </NavigationContainer>
    </>
  );
};
export default App;
