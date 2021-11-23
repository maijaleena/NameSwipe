import React from 'react';
import {
	View,
	Text,
	StyleSheet,
	FlatList,
	TouchableOpacity,
} from 'react-native';
import { COUNTRIES } from '../data/countries';
import Colors from '../constants/Colors';
import CategoryGridTile from '../components/CategoryGridTile';

const AllLibrariesScreen = (props) => {
	const renderGridItem = (itemData) => {
		return (
			<CategoryGridTile
				title={itemData.item.title}
        color={itemData.item.color}
				onSelect={() => {
					props.navigation.navigate({
						routeName: 'SwipeNames',
						params: {
							categoryId: itemData.item.id,
						},
					});
				}}
			/>
		);
	};

	return (
		<FlatList data={COUNTRIES} renderItem={renderGridItem} numColumns={2}>
			<Text> Add a library </Text>
		</FlatList>
	);
};

AllLibrariesScreen.navigationOptions = {
	headerTitle: 'Name Libraries by Country',
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	grid: {
		flex: 1,
		margin: 15,
		height: 150,
	},
});

export default AllLibrariesScreen;
