import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { COUNTRIES } from '../data/countries';
import Colors from '../constants/Colors';

const LibraryScreen = (props) => {
	const countryId = props.navigation.getParam('categoryId');
	const selectedCountry = COUNTRIES.find((country) => country.id === countryId);

	return (
		<View style={styles.screen}>
			<Text> Library </Text>
			<Text>{selectedCountry.title}</Text>
			<Button
				title="See Names"
				onPress={() => {
					props.navigation.navigate({ routeName: 'NamesList' });
				}}
			/>
			<Button
				title="Go Back"
				onPress={() => {
					props.navigation.pop();
				}}
			/>
		</View>
	);
};

LibraryScreen.navigationOptions = (navigationData) => {
  const countryId = navigationData.navigation.getParam('categoryId')

  const selectedCountry = COUNTRIES.find((country) => country.id === countryId);

  return {
    headerTitle: selectedCountry.title,

  };

};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default LibraryScreen;
