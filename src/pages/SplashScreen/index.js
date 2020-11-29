import React, {useEffect} from 'react'
import {
	View,
	Text,
	StyleSheet,
	TouchableOverlay,
	ImageBackground, Image
} from 'react-native'

import { styles } from './style.js'
const splashBackground = require('../../../assets/images/splash.png')

export const SplashScreen = ({ navigation }) => {
	useEffect(() => {
		setTimeout(() => {
			navigation.navigate('WelcomeScreen');
		}, 2000)
	}, []);

	return(
		<View style={styles.splashScreen}>
			<ImageBackground
				style={styles.background}
				source={splashBackground}
			>
			</ImageBackground>
		</View>
	)
}
