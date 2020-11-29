import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { SplashScreen } from './src/pages/SplashScreen';
import { WelcomeScreen } from './src/pages/WelcomeScreen';
import { LoginScreen } from './src/pages/LoginScreen';
import { RegisterScreen } from './src/pages/RegisterScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
		<NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
				<Stack.Screen
					name="SplashScreen"
					component={SplashScreen}
					options={{
						headerShown: false
					}}
				/>
				<Stack.Screen
					name="WelcomeScreen"
					component={WelcomeScreen}
					options={{
						headerShown: false
					}}
				/>
				<Stack.Screen
					name="RegisterScreen"
					component={RegisterScreen}
					options={{
						headerShown: false
					}}
				/>
				<Stack.Screen
					name="LoginScreen"
					component={LoginScreen}
				/>
      </Stack.Navigator>
    </NavigationContainer>
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
