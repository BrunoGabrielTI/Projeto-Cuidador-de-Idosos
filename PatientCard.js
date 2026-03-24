import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function PatientCard({ patient }) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{patient.name}</Text>
      <Text>{patient.age} anos</Text>
      <Text style={styles.pending}>
        {patient.pending} medicações pendentes
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    marginTop: 10
  },
  name: {
    fontWeight: "bold",
    fontSize: 16
  },
  pending: {
    color: "red",
    marginTop: 5
  }
});
