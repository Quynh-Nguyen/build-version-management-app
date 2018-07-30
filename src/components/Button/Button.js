import React from "react";
import PropTypes from 'prop-types';
import { Button } from 'react-native-material-ui';

const TextButton = ({ text, onPress, ...rest }) => {
  return (
    <Button text={text} style={{container: {borderRadius: 24} }} onPress={onPress} {...rest} />
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func,
}

export { TextButton }
