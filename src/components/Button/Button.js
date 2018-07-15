import React from "react";
import PropTypes from 'prop-types';
import { Button } from 'react-native-material-ui';

const TextButton = ({ text, ...rest }) => {
  return (
    <Button text={text} style={{container: {borderRadius: 24} }} {...rest} />
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired
}

export { TextButton }
