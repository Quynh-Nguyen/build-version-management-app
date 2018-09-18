import React from 'react';
import { createStackNavigator } from 'react-navigation';

import { AuthScreen } from '../containers/Auth';
import { LoginNavigator } from './login';

const AuthNavigator = createStackNavigator({
  Auth: {
    screen: AuthScreen,
    navigationOptions: ({ navigation }) => ({

    })
  },
  LoginNavigator: {
    screen: LoginNavigator
  }
}, {
   headerMode: 'none',
   initialRouteName: 'Auth',
   mode: 'modal',
});

export { AuthNavigator }
