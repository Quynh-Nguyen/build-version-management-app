import React from 'react';
import { StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    color: '#fff',
    fontSize: 36,
    letterSpacing: 1,
  },
});

const H1Text = ({ children, ...rest }) => {
  return (
    <Text style={styles.container} {...rest}>{children}</Text>
  )
}

H1Text.propTypes = {
  children: PropTypes.string.isRequired
}

export { H1Text }
