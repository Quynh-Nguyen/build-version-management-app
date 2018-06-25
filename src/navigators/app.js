import React from 'react';
import { StackNavigator } from 'react-navigation';
import { MainScreen } from '../scenes/Main'

const AppNavigator = StackNavigator({
  Main: {
    screen: MainScreen
  }
}, {
  initialRoute: 'Main'
});

export { AppNavigator };
