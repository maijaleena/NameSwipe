import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { COUNTRIES } from '../data/countries';
import Colors from '../constants/Colors';


const AllLibrariesScreen = (props) => {
  const renderGridItem = (itemData) => {
    return (
      <TouchableOpacity style={styles.grid} onPress={()=>{
        props.navigation.navigate({routeName: 'Library', params: {
          categoryId: itemData.item.id
        }})
      }}>
      <View >
        <Text>{itemData.item.title}</Text>
      </View>
      </TouchableOpacity>
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
  headerStyle: {
    backgroundColor: "",
  },
  headerTintColor: Colors.primaryColor
};

const styles = StyleSheet.create({
  screen:{
    flex: 1,
    justifyContent: "center",
    alignItems: 'center'
  },
  grid:{
    flex:1,
    margin: 15,
    height: 150
  }
});

export default AllLibrariesScreen;
