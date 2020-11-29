import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	splashScreen: {
		flex: 1,
	},
	background: {
		flex: 1,
		backgroundImage: {uri: '../../../src/assets/images/splash.png'}
	},
	image: {
		flex: 1,
		size: 'cover'
	},
	text: {
		fontSize: 14
	}
})

