import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { Svg } from 'expo';

import { BaseContentPlaceholder } from '.';

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#3D5AFE',
    backgroundColor: '#0F1B37',
    borderRadius: 4,
    width: 120,
    height: 100,
    marginRight: 10,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  wrapper: {
    flex: 0.8,
    flexDirection: 'column',
  },
});

const DashboardProjectCardPlaceholder = ({ title, number, ...rest }) => {
  return (
    <View style={styles.container}>
        <View style={styles.wrapper}>
            <BaseContentPlaceholder
                primaryColor="#fff0f6"
                secondaryColor="#B1BCFD"
            >
                <Svg.Circle cx="8" cy="24" r="8"/>
                <Svg.Circle cx="90" cy="24" r="3"/>
                <Svg.Rect x="0" y="50" rx="2" ry="2" width="70" height="8"/>
                <Svg.Rect x="0" y="67" rx="2" ry="2" width="30" height="8"/>
            </BaseContentPlaceholder>
        </View>
    </View>
  )
}

DashboardProjectCardPlaceholder.propTypes = {
  // children: PropTypes.element.isRequired
}

export default DashboardProjectCardPlaceholder
