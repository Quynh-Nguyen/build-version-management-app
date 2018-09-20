import React from 'react';
import { StyleSheet, View, Text, AsyncStorage } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

class MainScreen extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  _bootstrapAsync = async() => {
    const userToken = await AsyncStorage.removeItem('userToken');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Main Screen!</Text>
      </View>
    )
  }
}

export { MainScreen }
