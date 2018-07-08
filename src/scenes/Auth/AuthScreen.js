import React from 'react';
import { StyleSheet, View, Text, StatusBar, FlatList, Easing, Animated } from 'react-native';
import Swiper from 'react-native-swiper';
import moment from 'moment';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  wrapper: {
    // backgroundColor: '#f00'
  },
  dot: {
    backgroundColor: 'rgba(221, 221, 221,.3)',
    width: 13,
    height: 13,
    borderRadius: 7,
    marginLeft: 7,
    marginRight: 7
  },
  active_dot: {
    backgroundColor: '#bbb',
    width: 13,
    height: 13,
    borderRadius: 7,
    marginLeft: 7,
    marginRight: 7
  },
});

class AuthScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      marginTopAnim: new Animated.Value(0),
    }
  }

  componentDidMount() {
    Animated.timing(
      this.state.marginTopAnim,
      {
        duration: 400,
        toValue: 300,
        easing: Easing.linear
      }
    ).start();
  }

  static navigationOptions = {
    title: 'Please sign in',
  };

  render() {
    const { marginTopAnim } = this.state;

    return (
      <View style={styles.container}>
        <StatusBar barStyle='dark-content' />
        <Swiper style={styles.wrapper}
          dot={<View style={styles.dot} />}
          activeDot={<View style={styles.active_dot} />}
          paginationStyle={{
            bottom: 70
          }}
          loop={true}>
          <View style={styles.slide}>
            <Animated.View style={{
              backgroundColor: '#2196F3',
              width: 100,
              height: 100,
              borderRadius: 50,
              marginTop: marginTopAnim
            }}
            />
            <Text>Auth Screen!</Text>
            <Text>Changes you make will automatically reload.</Text>
            <Text>Shake your phone to open the developer menu.</Text>
          </View>
          <View style={styles.slide}>
            <Text>Auth Screen!</Text>
            <Text>Changes you make will automatically reload.</Text>
            <Text>Shake your phone to open the developer menu.</Text>
          </View>
          <View style={styles.slide}>
            <Text>Auth Screen!</Text>
            <Text>Changes you make will automatically reload.</Text>
            <Text>Shake your phone to open the developer menu.</Text>
          </View>
        </Swiper>
      </View>
    );
  }
}

export { AuthScreen }
