import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';


const WelcomeScreen = props => {
  return (
    <View style={styles.screen}>
      <Text> Welcome! </Text>
      <Button title="Start Swiping" onPress={() => {
        props.navigation.navigate({routeName: 'SwipeNames'});
      }} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen:{
    flex: 1,
    justifyContent: "center",
    alignItems: 'center'
  }
});

export default WelcomeScreen;
