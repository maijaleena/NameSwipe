import React from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';
import { COUNTRIES, NAMES } from '../data/countries';
import Colors from '../constants/Colors';

const LibraryScreen = (props) => {
	const countryId = props.navigation.getParam('categoryId');
	const selectedCountry = COUNTRIES.find((country) => country.id === countryId);

  const displayedNames = NAMES.filter(name => name.categoryId === countryId)

  const renderNameItem = itemData =>{
    return (<View><Text>{itemData.item.name}</Text></View>)
  }

	return (
		<View style={styles.screen}>
			<Text> Library of Names </Text>
			<Text>{selectedCountry.title}</Text>
      <FlatList data={displayedNames}
      keyExtractor={(item,index) => item.id}
      renderItem={renderNameItem}
       />

			{/* <Button
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
			/> */}
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
