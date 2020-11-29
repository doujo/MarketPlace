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
const backgroundImage = require('../../../assets/images/background1.png');

export const WelcomeScreen = () => {
	return(
		<View style={styles.mainContainer}>
			<Image
				source={backgroundImage}
				style={styles.backgroundContainer}/>
			<View style={styles.loginCardContainer}>
			<Text style={styles.screenTitle}>
			  Welcome
			</Text>
				<View style={styles.formContainer}>
					<View style={styles.formGroup}>
						<TouchableOpacity
							style={styles.btnPrimary}
						>
						  Register
						</TouchableOpacity>
					</View>
					<View style={styles.formGroup}>
						<TouchableOpacity
							style={styles.btnSecondary}
						>
							Login
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</View>
	)
}
