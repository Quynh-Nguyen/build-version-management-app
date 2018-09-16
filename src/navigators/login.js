import React from 'react';
import { createStackNavigator } from 'react-navigation';

import { LoginScreen } from '../scenes/Login';

const LoginNavigator = createStackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: '#141e29'
      }
    })
  }
}, {
  headerMode: 'none',
  initialRouteName: 'Login',
});

export { LoginNavigator }
