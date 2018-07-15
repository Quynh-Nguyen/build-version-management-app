import React from 'react';
import { StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    color: '#FFF',
  },
});

const NormalText = ({ children, ...rest }) => {
  return (
    <Text style={styles.container} {...rest}>{children}</Text>
  )
}

NormalText.propTypes = {
  children: PropTypes.string.isRequired
}

export { NormalText }
