import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';

import { AppNavigation } from './src/navigators';
import store from './src/store';

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
      <AppNavigation />
    )
	}

  render() {
    return (
      <Provider store={store}>
        this.renderContent()
      </Provider>
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
