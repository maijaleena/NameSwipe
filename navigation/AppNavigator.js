
import { createStackNavigator} from 'react-navigation-stack';
import { createAppContainer } from "react-navigation";
import {Platform} from 'react-native';
import Colors from '../constants/Colors';
import WelcomeScreen from '../screens/WelcomeScreen';
import SwipeScreen from '../screens/SwipeScreen';
import AllLibrariesScreen from '../screens/AllLibrariesScreen';
import LibraryScreen from '../screens/LibraryScreen';
import NamesListScreen from '../screens/NamesListScreen';

const AppNavigator = createStackNavigator({
  Welcome: WelcomeScreen,
  SwipeNames: SwipeScreen,
  Libraries: AllLibrariesScreen,
  Library: LibraryScreen,
  NamesList: NamesListScreen
}, {
defaultNavigationOptions: {
  headerStyle: {
    backgroundColor: "",
  },
  headerTintColor: Colors.primaryColor
}
}
);

export default createAppContainer(AppNavigator);
