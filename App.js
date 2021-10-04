import React, { useState } from 'react';
import { View, StyleSheet} from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import AppNavigator from './navigation/AppNavigator';
import {enableScreens} from 'react-native-screens'
import Constants from 'expo-constants'
import TopBar from './components/TopBar'
import BottomBar from './components/BottomBar'
import Swipes from './components/Swipes'

enableScreens();

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={console.error('Error loading assets')}
      />
    );
  }

  return (
    <View style={styles.container}>
    <TopBar />
    <AppNavigator />
    {/* <BottomBar /> */}
    </View>
  )


}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginTop: Constants.statusBarHeight,
  }
})
