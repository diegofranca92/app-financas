import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import Routes from './src/routes';
import AuthProvider from "./src/contexts/auth";
import firebase from "./src/services/firebaseConnection";

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar backgroundColor="#131313" style="light" />
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}
