import React, {useState, useEffect } from 'react';
import {View, Text, StyleSheet, Button, Alert} from 'react-native';
import axios from 'axios';
import SwipeableName from '../components/SwipeableName';

const SwipeScreen = props => {

  const [names, setNames] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  async function fetchNames(){
    try{
      const {data} = await axios.get('https://www.behindthename.com/api/random.json?usage=fin&number=6&key=so677108746')
      setNames(data.names);
      console.log(data.names);
    }catch(error){
      console.log(error);
      Alert.alert('Error getting names','', [{text: "Retry", onPress: () => fetchNames()}])
    }
  }

  useEffect(() => {
    fetchNames()
  }, [])

  return (

    <View style={styles.screen}>
      <View style= {styles.swipe}>
        {names.length > 1 && (
          <SwipeableName name={names[currentIndex]} /> )}
      </View>
      <Button title="Change Library" onPress={() => {
      props.navigation.navigate({routeName: 'Libraries'});
    }} />
    </View>
  )
}

const styles = StyleSheet.create({
  screen:{
    flex: 1,
    justifyContent: "center",
    alignItems: 'center'
  },
  swipe:{
    flex: 1,
    backgroundColor: 'lightgreen',
    width: '95%',
    height: '95%',
    padding: 10,
    paddingTop: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7
  }
});

export default SwipeScreen;
