import React from 'react';
import {
	StyleSheet
} from 'react-native';

const backgroundImage = '../../../assets/images/background2.png'

export const styles = StyleSheet.create({
	mainContainer: {
		flexGrow: 1,
		flexDirection: 'column',
		alignItems: 'flex-end'
	},
	backgroundContainer: {
		flex: 6,
		alignSelf: 'start',
    width: '100%',
  },
	screenTitle: {
		position: 'absolute',
		fontSize: 48,
		fontWeight: 400,
		color: '#fff',
		top: -400
	},
	loginCardContainer: {
		flex: 1,
		alignSelf: 'end',
		top: -48,
		width: '100%',
    paddingTop: 36,
		paddingHorizontal: 32,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    backgroundColor: "#fff",
    elevation: 6,
		fontFamily: 'SF Pro Display',
	},
	formGroup: {
		marginBottom: 20,
	},
	formInput: {
		height: 48,
		fontSize: 16,
		borderColor: '#828282',
		color: '#C4C4C4',
		borderBottomWidth: 1,
		paddingVertical: 10,
	},
	btnPrimary: {
		height: 44,
		fontFamily: 'Inter',
		fontWeight: 500,
		backgroundColor: '#FD4D4D',
		borderRadius: 16,
		paddingHorizontal: 24,
		paddingVertical: 12,
		color: '#fff',
		fontSize: 18,
		textAlign: 'center'
	},
	btnSecondary: {
		height: 44,
		fontFamily: 'Inter',
		fontWeight: 500,
		borderWidth: 1,
		borderColor: '#FD4D4D',
		color: '#FD4D4D',
		borderRadius: 16,
		paddingHorizontal: 24,
		paddingVertical: 12,
		fontSize: 18,
		textAlign: 'center'
	},
	secondaryActionContainer: {
		marginTop: 8,
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	secondaryActionText: {
		fontSize: 15,
		color: '#FD4D4D',
		fontWeight: 600,
	},
	secondaryActionButton: {
		fontSize: 15,
		fontWeight: 600,
	}
})
