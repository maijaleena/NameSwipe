import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const SwipeableName = ({name}) => (






  <View >
    <Text style={styles.name} > {name} </Text>
    <Text>   </Text>
  </View>);


export default SwipeableName ;

const styles = StyleSheet.create({
 name:{
   fontSize:50,
   textAlign: 'center'
 },
});
