import React from "react";
import PropTypes from 'prop-types';
import {
  StyleSheet,
  } from 'react-native';
import { TextField } from 'react-native-material-textfield';

class TextInputCustom extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: props.value
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.value !== this.state.value) {
      this.setState({ value: nextProps.value})
    }
  }

  onChangeInput = e => {
    const { onChange, value: valueProp } = this.props

    if (e !== valueProp) {
        onChange(e)
      }
  }

  // onBlur = () => {
  //   const {value: valueState = ''} = this.state
  //   const {onChange, value: valueProp} = this.props
  //
  //   if (valueState.trim() === '' || valueState.length === 0) {
  //     this.setState({value: valueProp})
  //     return
  //   }
  //
  //   if (valueState !== valueProp) {
  //     onChange(valueState)
  //   }
  // }

  render() {
    const { value, onChange, label, secureTextEntry, autoCapitalize, ...rest } = this.props

    return (
      <TextField
        baseColor='#B1BCFD'
        textColor='#FFF'
        tintColor='#00bafb'
        fontSize={14}
        labelHeight={30}
        secureTextEntry={secureTextEntry}
        autoCapitalize={autoCapitalize ? autoCapitalize : 'none'}
        lineWidth={1}
        label={label}
        value={value}
        onChangeText={this.onChangeInput}
        // onBlur={this.onBlur}
        {...rest}
      />
    )
  }
}

TextInputCustom.propTypes = {
  text: PropTypes.string,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func,
}

export { TextInputCustom }
