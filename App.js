import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';

import { AppNavigator } from './src/navigators';

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isAppReady: false,
      isLoggedIn: false,
    }
  }

  renderContent = () => {
    return (
      <AppNavigator />
    )
	}

  render() {
    return (
      <View style={styles.container}>
          {this.renderContent()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
