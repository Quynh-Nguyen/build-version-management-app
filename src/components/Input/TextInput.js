import React from "react";
import PropTypes from 'prop-types';
import {
  StyleSheet,
  } from 'react-native';
import { TextField } from 'react-native-material-textfield';

const TextInputCustom = ({ text, onChangeText, label, secureTextEntry, autoCapitalize, ...rest }) => {
  return (
    <TextField
      baseColor='#B1BCFD'
      textColor='#FFF'
      tintColor='#00bafb'
      secureTextEntry={secureTextEntry}
      autoCapitalize={autoCapitalize ? autoCapitalize : 'none'}
      lineWidth={1}
      label={label}
      value={text}
      {...rest}
    />
  )
}

TextInputCustom.propTypes = {
  text: PropTypes.string,
  label: PropTypes.string.isRequired,
  onChangeText: PropTypes.func,
}

export { TextInputCustom }
