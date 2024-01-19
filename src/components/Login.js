import { useEffect, useState } from "react";
import {
  View,
  Text,
  Modal,
  TextInput,
  StyleSheet,
  Button,
  ActivityIndicator,
  Alert,
} from "react-native";

export default function Loginpage() {
  const [showModal, SetShowModal] = useState(false);
  const [loading, SetLoading] = useState(false);
  function handleButtonPress() {
    console.log("Button pressed");
    SetLoading(true);
  }

  useEffect(() => {
    let timeout;
    if (loading) {
      timeout = setTimeout(() => {
        SetShowModal(true);
      }, 2000);
    }
    return () => clearTimeout(timeout);
  });

  function handleClose() {
    console.log("Closed modal");
    SetShowModal(false);
  }
  return (
    <View style={styles.display}>
      <View style={{ width: "100%", paddingHorizontal: 30 }}>
        <Text style={styles.color}>Username</Text>
        <TextInput style={styles.input} />
      </View>
      <View style={{ width: "100%", paddingHorizontal: 30 }}>
        <Text>Password</Text>
        <TextInput style={styles.input} />
      </View>
      <Button title="Login" onPress={() => handleButtonPress()} />
      <ActivityIndicator size={"large"} color={"white"} animating={loading} />

      <Button title="Alert" onPress={() => Alert.alert("Invalid Data!")} />

      <Modal visible={showModal} onRequestClose={() => showModal(false)}>
        <View
          style={{
            backgroundColor: "lightblue",
            flex: 1,
            padding: 50,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>User logged in</Text>
          <Button
            onPress={() => handleClose()}
            title="Close modal"
            color="blue"
          />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  display: {
    backgroundColor: "#333",
    justifyContent: "center",
    alignItems: "center",
    height: 250,
    marginVertical: 40,
  },
  color: {
    color: "#fff",
  },
  input: {
    backgroundColor: "lightblue",
    padding: 5,
    width: "100%",
    borderRadius: 5,
    borderWidth: 1,
  },
});
