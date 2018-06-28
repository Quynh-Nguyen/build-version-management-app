import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSwitchNavigator } from 'react-navigation';
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';

import { MainNavigator } from './main';
import { AuthNavigator } from './auth';
import { SplashScreen } from '../scenes/Splash';

const appMiddleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav
);

const AppNavigator = createSwitchNavigator({
  Splash: SplashScreen,
  Main: MainNavigator,
  Auth: AuthNavigator
}, {
  initialRouteName: 'Splash',
});

const AppWithNavigationState = reduxifyNavigator(AppNavigator, 'root');

const mapStateToProps = state => ({
  state: state.nav,
})

const AppNavigation = connect(mapStateToProps)(AppWithNavigationState);

export { AppNavigator, AppNavigation, appMiddleware };
