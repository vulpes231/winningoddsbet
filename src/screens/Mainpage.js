import { Pressable, StyleSheet, View, Text, SafeAreaView } from "react-native";

export default function Mainpage() {
  return (
    <SafeAreaView style={styles.container}>
      <Text
        style={{
          color: "#fff",
          fontSize: 24,
          fontWeight: 600,
          textAlign: "center",
          marginVertical: 45,
        }}
      >
        Today's Betcodes
      </Text>
      <View style={styles.display}>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Free 2 Odds</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Free 10+ Odds</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>VIP Odds</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333",
  },
  display: {
    alignItems: "center",
    justifyContent: "center",
    gap: 15,
  },
  button: {
    backgroundColor: "green",
    padding: 20,
    width: 250,
    shadowColor: "#333",
    shadowOffset: 5,
    shadowRadius: 10,
    borderRadius: 10,
  },
  buttonText: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "500",
    fontSize: 18,
  },
});
