import React from 'react';
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	ImageBackground, Image,
	StatusBar
} from 'react-native';

import { styles } from './style.js'
const backgroundImage = require('../../../assets/images/background3.png');

export const LoginScreen = () => {
	return(
		<View style={styles.mainContainer}>
			<Image
				source={backgroundImage}
				style={styles.backgroundContainer}/>
			<View style={styles.loginCardContainer}>
				<Text style={styles.screenTitle}>
					Welcome<br/>Back
				</Text>
				<View style={styles.cardContainer}>
					<Text style={styles.textTitle}>Sign In</Text>
				</View>
				<View style={styles.formContainer}>
					<View style={styles.formGroup}>
						<TextInput
							style={styles.formInput}
							placeholder="Username"
						/>
					</View>
					<View style={styles.formGroup}>
						<TextInput
							style={styles.formInput}
							type='password'
							placeholder="Password"
						/>
					</View>
					<View style={styles.formGroup}>
						<TouchableOpacity
							style={styles.btnPrimary}
						>
							Login
						</TouchableOpacity>
					</View>
				</View>
				<View style={styles.secondaryActionContainer}>
					<Text style={styles.secondaryActionText}>
						Forgot Password ?
					</Text>
					<TouchableOpacity style={styles.secondaryActionButton}>
						Sign up
					</TouchableOpacity>
				</View>
			</View>
		</View>
	)
}
