import React from 'react';
import { StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    color: '#00bafb',
    fontWeight: 'bold',
  },
});

const BoldText = ({ children, ...rest }) => {
  return (
    <Text style={styles.container} {...rest}>{children}</Text>
  )
}

BoldText.propTypes = {
  children: PropTypes.string.isRequired
}

export { BoldText }
