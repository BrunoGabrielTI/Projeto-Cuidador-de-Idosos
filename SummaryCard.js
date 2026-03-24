import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function SummaryCard({ title, value }) {
  return (
    <View style={styles.card}>
      <Text style={styles.value}>{value}</Text>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    width: "48%",
    alignItems: "center"
  },
  value: {
    fontSize: 20,
    fontWeight: "bold"
  },
  title: {
    color: "gray"
  }
});
