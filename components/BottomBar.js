import React from "react";
import {View, Text, StyleSheet, TouchableOpacity, Touchable} from 'react-native'
import {FontAwesome5, FontAwesome} from '@expo/vector-icons';

export default function BottomBar(){
  return (
    <View styles={styles.container} >
      <TouchableOpacity style={styles.button}>
        <FontAwesome name='times' size={27} color="red"></FontAwesome>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <FontAwesome name='heart' size={27} color="green"></FontAwesome>
      </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 1,
    height: 75,
  },
  button: {
    width: 50,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 25,
    justifyContent: 'space-around',
    alignItems: 'center',
    alignSelf: "flex-start",
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.15,
    shadowRadius: 6.46,
    elevation: 9,
  },
})

