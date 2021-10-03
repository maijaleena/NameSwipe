import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const SharedNamesScreen = props => {
  return (
    <View style={styles.screen}>
      <Text> Shared Names </Text>
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

export default SharedNamesScreen;
