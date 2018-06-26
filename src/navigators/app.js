import React from 'react';
import { createSwitchNavigator } from 'react-navigation';

import { MainNavigator } from './main';
import { AuthNavigator } from './auth';
import { SplashScreen } from '../scenes/Splash';

const AppNavigator = createSwitchNavigator({
  Splash: SplashScreen,
  Main: MainNavigator,
  Auth: AuthNavigator
}, {
  initialRouteName: 'Splash',
});

export { AppNavigator };
