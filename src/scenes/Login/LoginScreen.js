import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  FlatList,
  Easing,
  Animated
} from 'react-native';
import { LinearGradient } from 'expo'

import { NavigationHeader } from '../../components/Navigation'
import { LayoutUtils } from '../../utils'
import { Images } from '../../utils'
import { NavStore } from '../../store'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141e29',
  },
})

const marginTop = LayoutUtils.getExtraTop()

class LoginScreen extends React.Component {
  static navigationOptions = {
    title: 'Login Screen',
  };

  constructor(props) {
    super(props);
  }

  // goBack = () => {
  //   NavStore.goBack()
  // }

  render() {
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={['rgba(7,46,89,0.8)', 'transparent']}
          start={[0, 0]}
          end={[1, 1]}
          location={[0.25, 0.6, 1]}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            height: '100%',
          }}
        />
        <StatusBar barStyle='light-content' />
        <NavigationHeader
          style={{ marginTop: marginTop + 20 }}
          headerItem={{
            title: `Sign In`,
            icon: null,
            button: Images.closeButton
          }}
          // action={this.goBack}
        />
        <Text>testttttttttttttttttt</Text>
      </View>
    )
  }
}

export { LoginScreen };
