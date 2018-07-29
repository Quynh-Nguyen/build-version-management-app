import React from 'react';
import { StyleSheet, View, Animated } from 'react-native';

const ProjectPlaceHolder = ({ ...rest }) => {
  return (
    <Animated.View {...rest}>
      <View
        style={{
          // flex: 0.3,
          // flexBasis: 30,
          backgroundColor: '#00bafb',
          width: 40,
          height: 40,
          borderRadius: 8,
        }}
      />
      <View
        style={{
          flex: 0.8,
          flexDirection: 'column',
          flexWrap: 'wrap',
          // flexBasis: 70,
          backgroundColor: 'transparent',
          width: 50,
          height: 40,
        }}
      >
        <View
          style={{
            flex: 0.5,
            backgroundColor: '#2196F3',
            width: 150,
            height: 15,
            margin: 4,
            borderRadius: 8,
          }}
        />
        <View
          style={{
            flex: 0.5,
            backgroundColor: '#96caff',
            width: 50,
            height: 15,
            margin: 4,
            borderRadius: 8,
          }}
        />
      </View>
    </Animated.View>
  )
}

export { ProjectPlaceHolder }
