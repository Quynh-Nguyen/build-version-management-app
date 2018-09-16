import React, { Component } from 'react'
import { View } from 'react-native'
import NavStore from '../store/NavStore'
import { AppNavigator } from '../navigators'

export default class Router extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <AppNavigator
          onNavigationStateChange={(prev, next) => NavStore.onNavigationStateChange(prev, next)}
          ref={(ref) => { NavStore.navigator = ref }}
        />
      </View>
    )
  }
}
