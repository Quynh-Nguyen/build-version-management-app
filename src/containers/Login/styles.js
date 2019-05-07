import { StyleSheet, Dimensions } from 'react-native'

const window = Dimensions.get('window');
export const LOGO_LARGE = window.height / 3;
export const LOGO_SMALL = window.height / 8;

const styles = StyleSheet.create({
  fullScreen: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
  },
  container: {
    flex: 1,
    backgroundColor: '#141e29',
  },
  wrapper: {
    flex: 1,
  },
  logo: {
    flex: 0.3,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 0.7,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  inputContent: {
    flex: 0.8,
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  mainInput: {
    flex: 1
  },
  top: {
    flexDirection: 'row',
    // paddingBottom: 30,
    justifyContent: 'flex-start'
  },
  bottom: {
    flex: 0.5,
    paddingTop: 32,
  },
  logoIcon: {
    flex: 0.5,
    resizeMode: 'contain',
    height: LOGO_LARGE,
  },
})

export default styles;
