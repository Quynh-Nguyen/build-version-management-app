import React from 'react';
import { createStackNavigator } from 'react-navigation';

import { ProjectListScreen } from '../containers/Project';
import { VersionListScreen } from '../containers/Version'

const ProjectNavigator = createStackNavigator({
  ProjectList: {
    screen: ProjectListScreen,
  },
  VersionList: {
    screen: VersionListScreen,
  },
}, {
  headerMode: 'none',
  initialRouteName: 'ProjectList',
});

export { ProjectNavigator }
