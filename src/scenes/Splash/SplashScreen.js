import React from 'react';
import { StyleSheet, Container, View, ActivityIndicator } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

class SplashScreen extends React.Component {
  render() {
    console.log('THIS PROPS', this.props);
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
}

export { SplashScreen }
