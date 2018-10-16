import React from "react"
import PropTypes from 'prop-types'
import { Button } from 'react-native-material-ui'
import {
  StyleSheet,
  View,
  Image,
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import { Images } from '../../utils'

const styles = StyleSheet.create({
  container: {
    // borderWidth: 1,
    // borderStyle: 'solid',
    // borderColor: '#3D5AFE',
    // backgroundColor: '#3D5AFE',
    // borderRadius: 4,
  },
})

const PlatformButton = ({ text, onPress, icon, platform, ...rest }) => {
  logoIcon = () => (
    <Ionicons
      name='logo-apple'
      size={26}
      color="white"
    />
  )

  return (
    <View style={styles.container}>
      <Ionicons
        name='logo-apple'
        size={26}
        color="white"
      />
    </View>
  )
}

PlatformButton.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]),
}

export { PlatformButton }
