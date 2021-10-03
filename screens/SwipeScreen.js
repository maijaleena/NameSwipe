import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const SwipeScreen = props => {
  return (

    <View style={styles.screen}>
      <Text> Names </Text>
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
  }
});

export default SwipeScreen;
