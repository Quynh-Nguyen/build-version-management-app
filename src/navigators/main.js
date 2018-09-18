import React from 'react';
import { createStackNavigator } from 'react-navigation';

import { MainScreen } from '../containers/Main';

const MainNavigator = createStackNavigator({
  Main: {
    screen: MainScreen
  }
});

export { MainNavigator };
