import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  Container,
  StatusBar,
  StyleSheet,
  View,
  Text,
  } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

class SplashScreen extends React.Component {
  constructor() {
    super();
    this._bootstrapAsync();
  }

  _bootstrapAsync = async() => {
    console.log('test');
    const userToken = await AsyncStorage.getItem('userToken');
    console.log('userToken', userToken);
    console.log('this.props.navigation', this.props.navigation);

    this.props.navigation.navigate(userToken ? 'Main' : 'Auth');
  }

  render() {
    console.log('THIS PROPS', this.props);
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
        <StatusBar barStyle="default" />
        <Text>Splash Screen!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

export { SplashScreen }
