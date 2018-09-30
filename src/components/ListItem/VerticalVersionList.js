import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import PropTypes from 'prop-types';

import { VersionListItem } from './VersionListItem'

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
  header: {
    flexDirection: 'row',
    // justifyContent: 'flex-start',
  },
  text: {
    color: '#FFF',
    fontSize: 14,
    letterSpacing: 0.4,
    lineHeight: 20,
  },
  iconTextWrapper: {
    marginLeft: 10,
    backgroundColor: '#3D5AFE',
    borderRadius: 30,
    padding: 2,
  },
  iconText: {
    color: '#FFF',
    fontSize: 14,
  },
  content: {
    justifyContent: 'flex-start',
  }
});

const VerticalVersionList = ({ children, title, number, ...rest }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {children}
      </View>
    </View>
  )
}

VerticalVersionList.propTypes = {
  // children: PropTypes.element.isRequired
}

export { VerticalVersionList }
