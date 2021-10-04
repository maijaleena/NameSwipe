import React, { useState, useEffect, useRef} from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import axios from 'axios';
import SwipeableName from '../components/SwipeableName';
import Swipes from '../components/Swipes';
// import TopBar from '../components/TopBar'
import BottomBar from '../components/BottomBar'
import Constants from 'expo-constants'

const SwipeScreen = (props) => {
	const [names, setNames] = useState([]);
	const [currentIndex, setCurrentIndex] = useState(0);
  const swipesRef = useRef(null)

	async function fetchNames() {
		try {
			const { data } = await axios.get(
				'https://www.behindthename.com/api/random.json?usage=fin&number=6&key=so677108746'
			);
			setNames(data.names);
		} catch (error) {
			console.log(error);
			Alert.alert('Error getting names', '', [
				{ text: 'Retry', onPress: () => fetchNames() },
			]);
		}
	}

	useEffect(() => {
		fetchNames();
	}, []);

	function handleLike() {
		console.log('like');
		nextName();
	}

  function handlePass(){
    console.log('pass');
    nextName();
  }

	function nextName() {
		const nextIndex = names.length - 2 === currentIndex ? 0 : currentIndex + 1;
		setCurrentIndex(nextIndex);
	}

  function handleLikePress() {
    swipesRef.current.openLeft()
  }
  function handlePassPress() {
    swipesRef.current.openRight()
  }

	return (
		<View style={styles.screen} >
			<View style={styles.swipe}>
				{names.length > 1 &&
					names.map(
						(u, i) =>
							currentIndex === i && (
								<Swipes
                  ref= {swipesRef}
									currentIndex={currentIndex}
									names={names}
									handleLike={handleLike}
                  handlePass={handlePass}
								></Swipes>
							)
					)}
			</View>
			<Button
				title="Change Library"
				onPress={() => {
					props.navigation.navigate({ routeName: 'Libraries' });
				}}
			/>
      <BottomBar handleLikePress={handleLikePress} handlePassPress={handlePassPress} />
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	swipe: {
		flex: 1,
		backgroundColor: 'lightgreen',
		width: '95%',
		height: '75%',
		padding: 10,
		paddingTop: 8,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowOpacity: 0.29,
		shadowRadius: 4.65,
		elevation: 7,
	},
  container:{
    flex: 1,
    marginTop: Constants.statusBarHeight,
  }
});

export default SwipeScreen;
