import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const NamesList = props => {
  return (
    <View style={styles.screen}>
      <Text> Names List </Text>
    </View>

  )
}

const styles = StyleSheet.create({
  screen:{
    flex: 1,
    justifyContent: "center",
    alignItems: 'center'
  }
});

export default NamesList;
