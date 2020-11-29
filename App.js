import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SplashScreen } from './src/pages/SplashScreen'
import { LoginScreen } from './src/pages/LoginScreen'
import { RegisterScreen } from './src/pages/RegisterScreen'

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
			<RegisterScreen />
    </>
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
