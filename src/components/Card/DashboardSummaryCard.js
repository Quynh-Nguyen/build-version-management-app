import React from "react"
import PropTypes from 'prop-types'
import { Button } from 'react-native-material-ui'
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native'
import { Icon } from 'react-native-material-ui'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3D5AFE',
    borderRadius: 8,
    shadowColor: '#161F47',
    shadowOffset: {
      width: 8,
      height: 0,
    },
    shadowOpacity: 24,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    // justifyContent: 'center',
  },
  wrapper: {
    flex: 0.5,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  icon: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content:{
    flex: 0.7,
    justifyContent: 'center',
    // alignItems: 'center',
  },
  dot: {
    backgroundColor: '#3FE77B',
    width: 6,
    height: 6,
    borderRadius: 3,
  },
  text: {
    color: '#FFF',
    fontSize: 14,
    letterSpacing: 0.29,
  },
  subText: {
    color: '#B1BCFD',
    fontSize: 10,
    letterSpacing: 0.29,
    paddingTop: 5,
  }
})

const DashboardSummaryCard = ({ totalProjects, totalVersions, totalDevices, action, ...rest }) => {

  return (
    <View style={{marginTop: 36, height: 60}}>
      <TouchableOpacity
        style={{flex: 1, flexDirection: 'row'}}
        onPress={() => { action() }}
      >
        <View style={styles.container}>
          <View style={styles.wrapper}>
            <View style={styles.icon}>
              <Icon
                name="filter-tilt-shift"
                color="#FFF"
              />
            </View>
            <View style={styles.content}>
              <Text style={styles.text}>5 Projects</Text>
              <Text style={styles.subText}>10 Versions</Text>
            </View>
          </View>
          <View style={styles.wrapper}>
            <View style={styles.icon}>
              <Icon
                name="devices-other"
                color="#FFF"
              />
            </View>
            <View style={styles.content}>
              <Text style={styles.text}>5 Devices</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}

DashboardSummaryCard.propTypes = {
  totalProjects: PropTypes.number,
  totalVersions: PropTypes.number,
  totalDevices: PropTypes.number,
  action: PropTypes.func,
  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]),
}

DashboardSummaryCard.defaultProps = {
  action: () => {

  }
}

export { DashboardSummaryCard }
