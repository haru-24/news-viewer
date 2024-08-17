import React from "react";
import { Text, SafeAreaView, StyleSheet } from "react-native";

export function ClipScreen({}: {}) {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Clip Screen</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
