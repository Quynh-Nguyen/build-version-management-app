import React from 'react';
import { createStackNavigator } from 'react-navigation';

import { MainTabbarNavigator } from './tabbar';

import { VersionListScreen } from '../containers/Version';

const MainNavigator = createStackNavigator({
  Main: {
    screen: MainTabbarNavigator
  },
  Version: {
    screen: VersionListScreen
  }
}, {
   headerMode: 'none',
   initialRouteName: 'Main',
});

export { MainNavigator };
