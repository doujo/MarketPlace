import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SplashScreen } from './src/pages/SplashScreen'
import { WelcomeScreen } from './src/pages/WelcomeScreen'
import { LoginScreen } from './src/pages/LoginScreen'
import { RegisterScreen } from './src/pages/RegisterScreen'

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
			<WelcomeScreen />
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
