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
    // borderWidth: 1,
    // borderStyle: 'solid',
    // borderColor: '#3D5AFE',
    backgroundColor: '#3D5AFE',
    borderRadius: 4,
  },
})

const DownloadButton = ({ text, onPress, icon, ...rest }) => {

  return (
    <View style={styles.container}>
      <Button
        icon={icon}
        text={text}
        style={{
          container: {position: 'relative', borderRadius: 4, backgroundColor: 'transparent', height: 30},
          text: {color: '#FFF', fontSize: 10, letterSpacing: 0.29} 
        }}
        onPress={onPress}
        {...rest}
      />
    </View>
  )
}

DownloadButton.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]),
}

export { DownloadButton }
