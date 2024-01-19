import Landing from "./src/screens/Landing";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Mainpage from "./src/screens/Mainpage";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
