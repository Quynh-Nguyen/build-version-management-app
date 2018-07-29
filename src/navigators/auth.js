import React from 'react';
import { createStackNavigator } from 'react-navigation';

import { AuthScreen } from '../scenes/Auth';

const AuthNavigator = createStackNavigator({
  Auth: {
    screen: AuthScreen,
    navigationOptions: ({ navigation }) => ({

    })
  }
}, {
   headerMode: 'none',
   initialRouteName: 'Auth',
});

export { AuthNavigator }
