import React from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import PatientCard from "../components/PatientCard";
import SummaryCard from "../components/SummaryCard";

export default function HomeScreen() {

  const patients = [
    { id: "1", name: "Dona Maria", age: 84, pending: 2 },
    { id: "2", name: "Seu João", age: 79, pending: 1 }
  ];

  return (
    <View style={styles.container}>

      <Text style={styles.greeting}>Olá, Claudia 👋</Text>
      <Text style={styles.date}>Segunda-feira, 24 de março</Text>

      <View style={styles.summaryContainer}>
        <SummaryCard title="Próxima medicação" value="08:00" />
        <SummaryCard title="Atividades pendentes" value="1" />
      </View>

      <Text style={styles.sectionTitle}>Meus Pacientes</Text>

      <FlatList
        data={patients}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <PatientCard patient={item} />
        )}
      />

      <View style={styles.actions}>
        <TouchableOpacity style={styles.buttonPrimary}>
          <Text style={styles.buttonText}>+ Adicionar Paciente</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonSecondary}>
          <Text style={styles.buttonText}>Registrar Atividade</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F5F7FA"
  },
  greeting: {
    fontSize: 22,
    fontWeight: "bold"
  },
  date: {
    color: "gray",
    marginBottom: 15
  },
  summaryContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  sectionTitle: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: "bold"
  },
  actions: {
    marginTop: 20
  },
  buttonPrimary: {
    backgroundColor: "#1E90FF",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10
  },
  buttonSecondary: {
    backgroundColor: "#32CD32",
    padding: 15,
    borderRadius: 10
  },
  buttonText: {
    color: "#FFF",
    textAlign: "center",
    fontWeight: "bold"
  }
});
