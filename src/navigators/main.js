import React from 'react';
import { createStackNavigator } from 'react-navigation';

import { MainTabbarNavigator } from './tabbar';

const MainNavigator = createStackNavigator({
  Main: {
    screen: MainTabbarNavigator
  }
}, {
   headerMode: 'none',
   initialRouteName: 'Main',
});

export { MainNavigator };
