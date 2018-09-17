import React from "react";
import PropTypes from 'prop-types';
import {
  View,
  StyleSheet,
  Text,
  } from 'react-native';

  const styles = StyleSheet.create({
    container: {
      position: 'relative',
      paddingRight: 10,
    },
    after: {
      position: 'absolute',
      height: 2,
      backgroundColor: '#EE4B6E',
      bottom:0,
      left:0,
      right:0,
      alignItems: 'center',
      margin:'auto',
      borderRadius: 5,
    },
    text: {
      fontSize: 20,
      lineHeight: 47,
    }
  })

const EntryButton = ({ text, onPress, isActive, ...rest }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.after, {width: isActive ? 50 : 0}]} />
      <Text onPress={onPress} {...rest} style={[styles.text, {color: isActive ? '#FFF' : '#A1A3CF'}]}>
        {text}
      </Text>
    </View>
  )
}

EntryButton.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  isActive: PropTypes.bool,
}

export { EntryButton }
