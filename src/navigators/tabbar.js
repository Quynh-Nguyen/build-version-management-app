import React from 'react'
import { createBottomTabNavigator } from 'react-navigation'
import { Icon } from 'react-native-material-ui'

import { DashboardScreen } from '../containers/Main'
import { ProjectListScreen } from '../containers/Project'

const MainTabbarNavigator = createBottomTabNavigator({
  Dashboard: {
    screen: DashboardScreen,
  },
  Project: {
    screen: ProjectListScreen,
  },
  Device: {
    screen: DashboardScreen,
  },
  Settings: {
    screen: DashboardScreen,
  },
}, {
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      let iconName = null;
      switch (navigation.state.routeName) {
        case 'Dashboard':
          iconName = 'developer-board';
          break;
        case 'Project':
          iconName = 'developer-mode';
          break;
        case 'Device':
          iconName = 'phonelink-setup';
          break;
        case 'Settings':
          iconName = 'more-horiz';
          break;
        default: break;
      }
      return <Icon name={iconName} color={tintColor}/>;
    },
  }),
  tabBarOptions: {
    activeTintColor: '#FFF',
    inactiveTintColor: '#63647d',
    showLabel: true,
    showIcon: true,
    indicatorStyle: {
      backgroundColor: 'transparent'
    },
    style: {
      backgroundColor: '#161F47',
      // borderTopWidth: 1,
      // borderTopColor: '#ebebeb'
    },
    labelStyle: {
      fontSize: 12,
    }
  },
  tabBarPosition: 'bottom',
  animationEnabled: true,
  // swipeEnabled: true,
});

export { MainTabbarNavigator };
