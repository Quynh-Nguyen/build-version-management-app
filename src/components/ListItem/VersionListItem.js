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

import { DownloadButton } from '../../components/Button'

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
    flex: 1,
    flexDirection: 'row',
  },
  header: {
    flex: 0.5,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  footer: {
    flex: 0.5,
    // justifyContent: 'center',
    justifyContent: 'flex-start',
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
    flex: 0.7,
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
    marginBottom: 5,
  },
  subText: {
    color: '#B1BCFD',
    fontSize: 10,
    letterSpacing: 0.29,
  },
  subContent: {
    flexDirection: 'row',
    marginTop: 5,
  },
  subFooter: {
    flex: 0.8,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  subFooterIcon: {
    marginRight: 15,
  },
  download: {
    flex: 0.2,
    paddingTop: 15,
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
                <Text style={styles.text}>v{item.version}</Text>
                <Text style={styles.subText}>{ item.updated_at || item.created_at }</Text>
              </View>
              <View style={styles.footer}>
                <View style={styles.subFooter}>
                  <FontAwesome
                    name="bitbucket"
                    size={20}
                    color="#3D5AFE"
                    style={styles.subFooterIcon}
                  />
                  <Octicons
                    name="link"
                    size={10}
                    color="#B1BCFD"
                    style={styles.subFooterIcon}
                  />
                  <MaterialCommunityIcons
                    name="jira"
                    size={20}
                    color="#3D5AFE"
                    style={styles.subFooterIcon}
                  />
                  <Octicons
                    name="link"
                    size={10}
                    color="#B1BCFD"
                    style={styles.subFooterIcon}
                  />
                  <Feather
                    name="slack"
                    size={20}
                    color="#3D5AFE"
                    style={styles.subFooterIcon}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.download}>
            <DownloadButton
              size={22}
              text='Get'
              onPress={onDownload}
            />
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
