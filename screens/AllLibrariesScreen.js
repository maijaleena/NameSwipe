import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const AllLibrariesScreen = props => {
  return (
    <View style={styles.screen}>
      <Text> Add a library </Text>
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

export default AllLibrariesScreen;
