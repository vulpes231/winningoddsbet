import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Landing() {
  const navigation = useNavigation();

  let timeout;

  useEffect(() => {
    timeout = setTimeout(() => {
      navigation.navigate("Home");
    }, 4000);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <SafeAreaView style={styles.display}>
      <StatusBar barStyle={"dark-content"} />
      <Text style={styles.logoText}>Winning Odd Tips ⚽</Text>
      <ActivityIndicator size={30} color={"green"} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  display: {
    flex: 1,
    backgroundColor: "#333",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: StatusBar.currentHeight,
  },
  logoText: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
