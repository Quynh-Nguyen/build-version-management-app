import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { COLOR, ThemeContext, getTheme } from 'react-native-material-ui';

// import { AppNavigation } from './src/navigators';
import Router from './src/routes'
import store from './src/store';

const uiTheme = {
  palette: {
    primaryColor: '#3D5AFE',
  },
  toolbar: {
    container: {
      height: 50,
    },
  },
  button: {
    text: {
      color: '#3D5AFE'
    }
  }
};

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isAppReady: false,
      isLoggedIn: false,
    }
  }

  render() {
    return (
      <ThemeContext.Provider value={getTheme(uiTheme)}>
        <Provider store={store}>
          <Router />
        </Provider>
      </ThemeContext.Provider>
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
