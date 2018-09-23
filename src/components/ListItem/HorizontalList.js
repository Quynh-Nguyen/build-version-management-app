import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    paddingTop: 36,
    flexDirection: 'column',
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
    flexDirection: 'column',
    paddingTop: 10,
  }
});

const HorizontalList = ({ children, title, number, ...rest }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>{title}</Text>
        <View style={styles.iconTextWrapper}>
          <Text style={styles.iconText}>{number}</Text>
        </View>
      </View>
      <View style={styles.content}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          {children}
        </ScrollView>
      </View>
    </View>
  )
}

HorizontalList.propTypes = {
  // children: PropTypes.element.isRequired
}

export { HorizontalList }
