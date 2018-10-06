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
  ImageBackground,
} from 'react-native'
import { Icon } from 'react-native-material-ui'
import { LinearGradient } from 'expo'

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#3D5AFE',
    backgroundColor: '#0F1B37',
    borderRadius: 4,
    flex: 1,
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
    flex: 0.5,
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
  bannerText: {
    color: '#FFF',
    fontSize: 14,
    letterSpacing: 0.4,
    marginLeft: 5,
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
  },
  bannerContent: {
    flex: 0.15,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  bannerItem: {
    flexDirection: 'row',
    justifyContent: 'center',
  }
})

const ProjectBannerCard = ({ text, icon, number, action, ...rest }) => {

  return (
    <View>
        <ImageBackground
          style={{width: '100%', height: 200, justifyContent: 'flex-end'}}
          source={{uri: 'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX24694954.jpg'}}
        >
          <LinearGradient
            colors={['transparent', 'rgba(22,31,71,0.87)']}
            start={[0.5, 0]}
            end={[0.5, 1]}
            location={[0.25, 0.6, 1]}
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              top: 0,
              height: '100%',
            }}
          />
          <View style={styles.bannerContent}>
            <View style={styles.bannerItem}>
              <Icon
                name="all-inclusive"
                color="#FFF"
                size={20}
              />
              <Text style={styles.bannerText}>10 verions</Text>
            </View>
            <View style={styles.bannerItem}>
              <Icon
                name="important-devices"
                color="#FFF"
                size={20}
              />
              <Text style={styles.bannerText}>5 devices</Text>
            </View>
          </View>
        </ImageBackground>
    </View>
  )
}

ProjectBannerCard.propTypes = {
  text: PropTypes.string.isRequired,
  action: PropTypes.func,
  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]),
}

ProjectBannerCard.defaultProps = {
  action: () => {

  }
}

export { ProjectBannerCard }
