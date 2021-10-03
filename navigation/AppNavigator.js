
import { createStackNavigator} from 'react-navigation-stack';
import { createAppContainer } from "react-navigation";

import WelcomeScreen from '../screens/WelcomeScreen';
import SwipeScreen from '../screens/SwipeScreen';
import AllLibrariesScreen from '../screens/AllLibrariesScreen';

const AppNavigator = createStackNavigator({
  Welcome: WelcomeScreen,
  SwipeNames: SwipeScreen,
  Libraries: AllLibrariesScreen,
});

export default createAppContainer(AppNavigator);
