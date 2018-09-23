import React from "react";
import PropTypes from 'prop-types';
import { Button } from 'react-native-material-ui';
import {
  StyleSheet,
  View,
  Image,
} from 'react-native';

import { Images } from '../../utils'

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#3D5AFE',
    backgroundColor: '#0F1B37',
  },
  corner: {
    position: 'absolute',
    backgroundColor: '#0F1B37',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#3D5AFE',
    width: 3,
    height: 3,
  },
  topLeft: {
    top: -2,
    left: -2,
  },
  topRight: {
    top: -2,
    right: -2,
  },
  bottomLeft: {
    bottom: -2,
    left: -2,
  },
  bottomRight: {
    bottom: -2,
    right: -2,
  },
})

const PrimaryButton = ({ text, onPress, icon, ...rest }) => {

  return (
    <View style={styles.container}>
      <View style={[styles.corner, styles.topLeft]} />
      <View style={[styles.corner, styles.topRight]} />
      <View style={[styles.corner, styles.bottomLeft]} />
      <View style={[styles.corner, styles.bottomRight]} />
      <Button
        icon={icon}
        text={text}
        style={{container: {position: 'relative', borderRadius: 0, backgroundColor: 'transparent'} }}
        onPress={onPress}
        {...rest}
      />
    </View>
  )
}

PrimaryButton.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]),
}

export { PrimaryButton }
