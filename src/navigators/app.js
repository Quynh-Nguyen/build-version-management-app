import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { MainScreen } from '../scenes/Main';
import { SplashScreen } from '../scenes/Splash';

const AppNavigator = createStackNavigator({
  SplashScreen: {
    screen: SplashScreen
  },
  Main: {
    screen: MainScreen
  }
}, {
  headerMode: 'screen'
});

export { AppNavigator };
