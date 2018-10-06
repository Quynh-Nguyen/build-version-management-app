import React from "react"
import PropTypes from 'prop-types'
import { Button } from 'react-native-material-ui'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native'
import { Icon } from 'react-native-material-ui'
import { FontAwesome, Octicons, MaterialCommunityIcons, Feather, Entypo } from '@expo/vector-icons'

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderBottomColor: 'rgba(61,90,254,0.35)',
    backgroundColor: 'transparent',
    flex: 1,
    height: 105,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  wrapper: {
    flex: 0.9,
    flexDirection: 'row',
  },
  header: {
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  footer: {
    flex: 0.5,
    justifyContent: 'center',
  },
  icon: {
    flex: 0.1,
    paddingTop: 20,
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
    fontSize: 14,
    letterSpacing: 0.4,
  },
  subText: {
    color: '#B1BCFD',
    fontSize: 10,
    letterSpacing: 0.29,
    marginLeft: 2,
  },
  subContent: {
    flexDirection: 'row',
    marginTop: 5,
  },
  subFooter: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  subFooterIcon: {
    marginRight: 15,
  }
})

const VersionListItem = ({ item, action, onDownload }) => {

  return (
    <View>
      <TouchableOpacity
        style={{flexDirection: 'row'}}
        onPress={() => { action() }}
      >
        <View style={styles.container}>
          <View style={styles.wrapper}>
            <View style={styles.icon}>
              <Octicons
                name="versions"
                size={22}
                color="#FFF"
              />
            </View>
            <View style={styles.content}>
              <View style={styles.header}>
                <Text style={styles.text}>{item.version}</Text>
                <Text style={{ color: '#FFFFFF', marginLeft: 'auto' }}>{ item.updated_at || item.created_at }</Text>
              </View>
              <View style={styles.footer}>
                <View style={styles.subFooter}>
                  <FontAwesome
                    name="bitbucket"
                    size={22}
                    color="#3D5AFE"
                    style={styles.subFooterIcon}
                  />
                  <Octicons
                    name="link"
                    size={12}
                    color="#B1BCFD"
                    style={styles.subFooterIcon}
                  />
                  <MaterialCommunityIcons
                    name="jira"
                    size={22}
                    color="#3D5AFE"
                    style={styles.subFooterIcon}
                  />
                  <Octicons
                    name="link"
                    size={12}
                    color="#B1BCFD"
                    style={styles.subFooterIcon}
                  />
                  <Feather
                    name="slack"
                    size={22}
                    color="#3D5AFE"
                    style={styles.subFooterIcon}
                  />
                  <Octicons
                    name="link"
                    size={12}
                    color="#B1BCFD"
                    style={styles.subFooterIcon}
                  />
                  <Entypo
                    name="download"
                    size={22}
                    color="#3D5AFE"
                    style={styles.subFooterIcon}
                    onPress={() => onDownload()}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}

VersionListItem.propTypes = {
  item: PropTypes.object.isRequired,
  action: PropTypes.func,
  onDownload: PropTypes.func,
}

VersionListItem.defaultProps = {
  action: () => {},
  onDownload: () => {}
}

export { VersionListItem }
