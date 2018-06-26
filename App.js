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
      <AppNavigator
        isAppReady={this.state.isAppReady}
        isLoggedIn={this.state.isLoggedIn}
      />
    )
	}

  render() {
    return (
      <View style={styles.container}>
          {this.renderContent()}
          <Text>Open up App.js to start working on your app!</Text>
          <Text>Changes you make will automatically reload.</Text>
          <Text>Shake your phone to open the developer menu.</Text>
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
