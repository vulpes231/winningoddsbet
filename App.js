import Landing from "./src/screens/Landing";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Mainpage from "./src/screens/Mainpage";
import Twoodds from "./src/screens/TwoOdds";
import Tenodds from "./src/screens/TenOdds";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#333",
          },
          headerTitleStyle: {
            color: "#fff",
            fontSize: 10,
            // You can also add other styles like fontSize, fontWeight, etc.
          },
          headerTintColor: "#fff",
        }}
      >
        <Stack.Screen
          name="Welcome"
          component={Landing}
          options={{ title: "Welcome", headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Mainpage}
          options={{ title: "Home", headerShown: false }}
        />
        <Stack.Screen
          name="Two"
          component={Twoodds}
          options={{
            title: "2 Odds",
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="Ten"
          component={Tenodds}
          options={{
            title: "10+ Odds",
            headerShown: true,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
