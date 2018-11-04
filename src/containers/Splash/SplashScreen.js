import React from 'react'
import PropTypes from 'prop-types'
import {
  ActivityIndicator,
  AsyncStorage,
  Container,
  StatusBar,
  StyleSheet,
  View,
  Text,
  } from 'react-native'
import { Font } from 'expo'

import ApiService from '../../utils/axios'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

class SplashScreen extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  _bootstrapAsync = async() => {
    const { navigation } = this.props
    const userToken = await AsyncStorage.getItem('userToken')
    if (userToken) {
      await ApiService.setHeader()
    }
    await Font.loadAsync({
      'Material Icons': require('@expo/vector-icons/fonts/MaterialIcons.ttf'),
      'MaterialIcons': require('@expo/vector-icons/fonts/MaterialIcons.ttf')
    })
    console.log('userToken', userToken)

    navigation.navigate(userToken ? 'Main' : 'Auth')
  }

  render() {
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

SplashScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export { SplashScreen }
