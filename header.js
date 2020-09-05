import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Categories</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 70,
    paddingTop: 28,
    backgroundColor: "#4da6ff",
  },
  title: {
    textAlign: "center",
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});
