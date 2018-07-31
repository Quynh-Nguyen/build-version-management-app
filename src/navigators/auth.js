import React from 'react';
import { createStackNavigator } from 'react-navigation';

import { AuthScreen } from '../scenes/Auth';
import { LoginScreen } from '../scenes/Login';

const AuthNavigator = createStackNavigator({
  Auth: {
    screen: AuthScreen,
    navigationOptions: ({ navigation }) => ({

    })
  },
  Login: {
    screen: LoginScreen
  }
}, {
   headerMode: 'none',
   initialRouteName: 'Auth',
});

export { AuthNavigator }
