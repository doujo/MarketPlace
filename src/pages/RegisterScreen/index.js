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
const backgroundImage = require('../../../assets/images/background2.png');

export const RegisterScreen = () => {
	return(
		<View style={styles.mainContainer}>
			<Image
				source={backgroundImage}
				style={styles.backgroundContainer}/>
			<View style={styles.loginCardContainer}>
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
					<TouchableOpacity style={styles.secondaryActionButton}>
						Sign in
					</TouchableOpacity>
				</View>
			</View>
		</View>
	)
}
