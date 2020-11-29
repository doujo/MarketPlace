import React from 'react';
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	ImageBackground, Image,
	StatusBar
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { styles } from './style.js'
const backgroundImage = require('../../../assets/images/background2.png');

export const RegisterScreen = ({ navigation }) => {
	return(
		<View style={styles.mainContainer}>
			<Image
				source={backgroundImage}
				style={styles.backgroundContainer}/>
			<View style={styles.loginCardContainer}>
				<Text style={styles.screenTitle}>
				  Let Start
				</Text>
				<View style={styles.cardContainer}>
					<Text style={styles.textTitle}>Sign Up</Text>
				</View>
				<View style={styles.formContainer}>
					<View style={styles.formGroup}>
						<TextInput
							style={styles.formInput}
							placeholder="Name"
						/>
					</View>
					<View style={styles.formGroup}>
						<TextInput
							style={styles.formInput}
							placeholder="Email"
						/>
					</View>
					<View style={styles.formGroup}>
						<TextInput
							style={styles.formInput}
							placeholder="Phone Number"
						/>
					</View>
					<View style={styles.formGroup}>
						<TextInput
							style={styles.formInput}
							placeholder="Password"
						/>
					</View>
					<View style={styles.formGroup}>
						<TouchableOpacity
							style={styles.btnPrimary}
						>
							Register
						</TouchableOpacity>
					</View>
				</View>
				<View style={styles.secondaryActionContainer}>
					<Text style={styles.secondaryActionText}>
						Already have an account ?
					</Text>
					<TouchableOpacity
						onPress={() => navigation.navigate('LoginScreen')}
						style={styles.secondaryActionButton}>
						Sign in
					</TouchableOpacity>
				</View>
			</View>
		</View>
	)
}
