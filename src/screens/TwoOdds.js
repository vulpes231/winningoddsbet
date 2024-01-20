import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function Twoodds() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>Today's Pick</Text>
      <View style={styles.betcodeWrapper}>
        <Text style={styles.miniText}>
          Currently cooking 2 odds, Kindly check back later.
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333",
    paddingTop: StatusBar.curentHeight,
  },
  miniText: {
    fontSize: 12,
    color: "#fff",
  },
  headerText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: 600,
    textAlign: "center",
    marginVertical: 45,
  },
  betcodeWrapper: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});
