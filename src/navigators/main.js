import React from 'react';
import { createStackNavigator } from 'react-navigation';

import { MainScreen } from '../scenes/Main';

const MainNavigator = createStackNavigator({
  Main: {
    screen: MainScreen
  }
});

export { MainNavigator };
