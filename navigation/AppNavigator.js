
import { createStackNavigator} from 'react-navigation-stack';
import { createAppContainer } from "react-navigation";

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
});

export default createAppContainer(AppNavigator);
