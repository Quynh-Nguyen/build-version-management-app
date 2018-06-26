import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
});

class AuthScreen extends React.Component {
  static navigationOptions = {
    title: 'Please sign in',
  };

  render() {
    console.log('AuthScreen XXX');
    return (
      <View style={styles.container}>
        <Text>Auth Screen!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

export { AuthScreen }
