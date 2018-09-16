import { getStatusBarHeight } from 'react-native-status-bar-height'
import { Dimensions, Platform } from 'react-native'

const { width, height } = Dimensions.get('window')
const isIPX = height === 812

class LayoutUtils {
  static getExtraTop() {
    return getStatusBarHeight()
  }

  static getExtraTopAndroid() {
    return Platform.OS === 'android' ? getStatusBarHeight() : 0
  }

  static getExtraBottom() {
    return 0
  }

  static isLongScreenAndroid() {
    return Platform.OS === 'android' && width / height < 0.5625
  }

  static get heightNotif() {
    return isIPX ? 84 : 60
  }

  static isSmallScreen() {
    return height < 569
  }
}

export { LayoutUtils }
