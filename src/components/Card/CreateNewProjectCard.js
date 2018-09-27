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
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#3D5AFE',
    backgroundColor: '#0F1B37',
    borderRadius: 4,
    // marginRight: 10,
    flex: 1,
    height: 100,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  wrapper: {
    flex: 0.8,
    flexDirection: 'column',
  },
  header: {
    flex: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    flex: 1,
  },
  status: {
    flex: 0.5,
    alignItems: 'flex-end',
  },
  content:{
    flex: 0.5,
  },
  dot: {
    backgroundColor: '#3FE77B',
    width: 6,
    height: 6,
    borderRadius: 3,
  },
  text: {
    color: '#FFF',
    fontSize: 10,
    letterSpacing: 0.29,
  },
  subText: {
    color: '#B1BCFD',
    fontSize: 10,
    letterSpacing: 0.29,
    paddingTop: 5,
  }
})

const CreateNewProjectCard = ({ text, onPress, icon, number, ...rest }) => {
  return (
    <View style={{flexBasis: '49%', flexDirection: 'row', marginBottom: 10}}>
      <TouchableOpacity
        style={{flex: 1, flexDirection: 'row'}}
      >
        <View style={styles.container}>
          <View style={styles.wrapper}>
            <View style={styles.header}>
              <View style={styles.icon}>
                <Icon
                  name='add'
                  color="#FFF"
                />
              </View>
            </View>
            <View style={styles.content}>
              <Text style={styles.text}>{text}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}

CreateNewProjectCard.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]),
}

export { CreateNewProjectCard }
