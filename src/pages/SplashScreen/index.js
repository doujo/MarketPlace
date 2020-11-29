import React from 'react'
import {
	View,
	Text,
	StyleSheet,
	TouchableOverlay,
	ImageBackground, Image
} from 'react-native'

import { styles } from './style.js'
const { splashBackground } = { uri: '../../../assets/images/splash.png' }

export const SplashScreen = () => {
	return(
		<View style={styles.splashScreen}>
			<ImageBackground
				style={styles.background}
				source={splashBackground}
			>
			</ImageBackground>
			<Image
						source={splashBackground}
						style={{
							width: 60,
							height: 60,
							marginTop: 100
						}}
					/>
			<Text>tes splash</Text>
		</View>
	)
}
