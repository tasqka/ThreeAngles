import { Platform } from "react-native";
import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

function WebRedirect() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.location.replace("http://localhost:5173");
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Redirecting...</Text>
    </View>
  );
}

export default function Index() {
  if (Platform.OS === "web") {
    return <WebRedirect />;
  }
  return null;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0f0f12",
  },
  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
