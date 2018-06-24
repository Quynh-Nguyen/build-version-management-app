import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';

import Splash from './src/scenes/Splash';
import store from './src/store';

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      initialRoute: null,
    }
  }

  renderContent = () => {
    if (!this.state.initialRoute) {
      return <Splash />
    }

    return (
      <Splash />
    )
	}

  render() {
    return (
      <View style={styles.container}>
        <Provider store={store}>
          {this.renderContent()}
          <Text>Open up App.js to start working on your app!</Text>
          <Text>Changes you make will automatically reload.</Text>
          <Text>Shake your phone to open the developer menu.</Text>
        </Provider>
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
