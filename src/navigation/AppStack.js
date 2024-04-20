import DemoScreen from "../screens/DemoScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomePage";
import DetailScreen from "../screens/DetailScreen";
import Splash from "../screens/Splash";
const Stack = createStackNavigator();

export default function AppStack() {
  const config = {
    animation: "spring",
    config: {
      stiffness: 100,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };
    return (
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{ headerShown: false,
          transitionSpec: {
          open: config,
          close: config,
        },
        }}
      > 
          <Stack.Screen name="Splash" component={Splash}></Stack.Screen>
          <Stack.Screen name="HomeScreen" component={HomeScreen}></Stack.Screen>
          <Stack.Screen name="DetailScreen" component={DetailScreen}></Stack.Screen>
    </Stack.Navigator>
    )
}