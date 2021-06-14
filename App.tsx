import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import firebase from "./src/services/firebaseConnection";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#131313" style="light" />
      <Text>Começando...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
