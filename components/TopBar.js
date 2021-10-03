import React from 'react';
import {View,Text, StyleSheet} from 'react-native';
import { MaterialTopTabBar } from 'react-navigation-tabs';
import {FontAwesome5, FontAwesome} from '@expo/vector-icons';

export default function TopBar(){
  return (
    <View style={styles.container}>
      <FontAwesome5 name="baby-carriage" size={27} color='black'/>
      <FontAwesome name="globe" size={27} color='black'/>
      <FontAwesome name="list-ul" size={27} color='black'/>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 15,
    backgroundColor: 'white'
  }
})
