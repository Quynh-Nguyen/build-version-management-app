import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { COLOR, ThemeContext, getTheme } from 'react-native-material-ui';

// import { AppNavigation } from './src/navigators';
import Router from './src/routes'
import store from './src/store'
import ApiService from './src/utils/axios'

const uiTheme = {
  palette: {
    primaryColor: '#3D5AFE',
    secondaryTextColor: '#63647D',
  },
  toolbar: {
    container: {
      height: 50,
    },
  },
  button: {
    text: {
      color: '#3D5AFE'
    },
    icon: {
      color: '#FFF'
    },
  },
  bottomNavigationAction: {
    iconActive: {
      color: '#FFF',
    },
    labelActive: {
      color: '#FFF',
      fontSize: 12,
    },
    containerActive: {
      paddingTop: 8,
    },
  },
};

export default class App extends React.Component {
  constructor(props) {
    super(props)
    ApiService.init()

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
