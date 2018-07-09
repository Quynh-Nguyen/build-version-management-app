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
      marginTopAnim2: new Animated.Value(0),
      marginTopAnim3: new Animated.Value(0),
    }
  }

  componentDidMount() {
    // Animated.spring(
    //   this.state.marginTopAnim,
    //   {
    //     bounciness: 20,
    //     toValue: 2,
    //     useNativeDriver: true,
    //     // easing: Easing.linear
    //   }
    // ).start();
    Animated.sequence([
      Animated.timing(
        this.state.marginTopAnim,
        {
          // bounciness: 20,
          toValue: 1,
          duration: 500,
          // useNativeDriver: true,
          // easing: Easing.linear
        }
      ),
      Animated.timing(
        this.state.marginTopAnim2,
        {
          // bounciness: 20,
          toValue: 1,
          duration: 500,
          // useNativeDriver: true,
          // easing: Easing.linear
        }
      ),
      Animated.timing(
        this.state.marginTopAnim3,
        {
          // bounciness: 20,
          toValue: 1,
          duration: 500,
          // useNativeDriver: true,
          // easing: Easing.linear
        }
      )
    ]).start();
  }

  static navigationOptions = {
    title: 'Please sign in',
  };

  render() {
    const { marginTopAnim, marginTopAnim2, marginTopAnim3 } = this.state;

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
              // flex: 1,
              flexDirection: 'row',
              flexWrap: 'wrap',
              margin: 5,
              backgroundColor: '#fff',
              justifyContent: 'space-around',
              alignItems: 'center',
              width: 250,
              height: 60,
              borderRadius: 8,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 4
              },
              shadowRadius: 8,
              shadowOpacity: 0.1,
              transform: [{ scale: marginTopAnim.interpolate({
                inputRange: [0, 0.2, 0.8, 1],
                outputRange: [0, 0.6, 0.8, 1]
              }) }]
              // transform: [{ scale: marginTopAnim.interpolate({
              //   inputRange: [0, 0.2, 0.8, 1],
              //   outputRange: [1, 0.6, 2, 1]
              // }) }]
            }}>
              <View
                style={{
                  // flex: 0.3,
                  // flexBasis: 30,
                  backgroundColor: '#5daeff',
                  width: 40,
                  height: 40,
                  borderRadius: 8,
                }}
              />
              <View
                style={{
                  flex: 0.8,
                  flexDirection: 'column',
                  flexWrap: 'wrap',
                  // flexBasis: 70,
                  backgroundColor: 'transparent',
                  width: 50,
                  height: 40,
                }}
              >
                <View
                  style={{
                    flex: 0.5,
                    backgroundColor: '#2196F3',
                    width: 150,
                    height: 15,
                    margin: 4,
                    borderRadius: 8,
                  }}
                />
                <View
                  style={{
                    flex: 0.5,
                    backgroundColor: '#96caff',
                    width: 50,
                    height: 15,
                    margin: 4,
                    borderRadius: 8,
                  }}
                />
              </View>
            </Animated.View>
            <Animated.View style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              margin: 5,
              backgroundColor: '#fff',
              justifyContent: 'space-around',
              alignItems: 'center',
              width: 250,
              height: 60,
              borderRadius: 10,
              shadowColor: '#555',
              shadowOffset: {
                width: 0,
                height: 3
              },
              shadowRadius: 10,
              shadowOpacity: 0.2,
              // marginBottom: marginTopAnim2.interpolate({
              //   inputRange: [0, 0.2, 0.8, 1],
              //   outputRange: [20, 10, 5, 0]
              // }),
              transform: [{ scale: marginTopAnim2.interpolate({
                inputRange: [0, 0.2, 0.8, 1],
                outputRange: [0, 0.6, 0.8, 1]
              }) }]
            }}>
              <View
                style={{
                  backgroundColor: '#2196F3',
                  width: 40,
                  height: 40,
                  borderRadius: 10,
                }}
              />
            </Animated.View>
            <Animated.View style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              margin: 5,
              backgroundColor: '#fff',
              justifyContent: 'space-around',
              alignItems: 'center',
              width: 250,
              height: 60,
              borderRadius: 10,
              shadowColor: '#555',
              shadowOffset: {
                width: 0,
                height: 3
              },
              shadowRadius: 10,
              shadowOpacity: 0.2,
              transform: [{ scale: marginTopAnim3.interpolate({
                inputRange: [0, 0.2, 0.8, 1],
                outputRange: [0, 0.6, 0.8, 1]
              }) }]
              // marginTop: marginTopAnim.interpolate({
              //   inputRange: [0, 0.2, 0.8, 1],
              //   outputRange: [20, 10, 5, 0]
              // }),
              // transform: [{ scale: marginTopAnim.interpolate({
              //   inputRange: [0, 0.2, 0.8, 1],
              //   outputRange: [1, 0.6, 2, 1]
              // }) }]
            }}>
              <View
                style={{
                  backgroundColor: '#2196F3',
                  width: 40,
                  height: 40,
                  borderRadius: 10,
                }}
              />
            </Animated.View>
            <Text>Auth Screen!</Text>
            <Text>Changes you make will automatically reload.</Text>
            <Text>Shake your phone to open the developer menu.</Text>
          </View>
          <View style={styles.slide}>
            <Animated.View style={{
              backgroundColor: '#2196F3',
              width: 100,
              height: 100,
              borderRadius: 50,
              transform: [{ scale: marginTopAnim.interpolate({
                inputRange: [0, 0.2, 0.8, 1],
                outputRange: [1, 0.6, 2, 1]
              }) }]
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
        </Swiper>
      </View>
    );
  }
}

export { AuthScreen }
