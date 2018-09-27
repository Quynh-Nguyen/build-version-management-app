import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import {
  StyleSheet,
  View,
  Text,
  AsyncStorage,
  StatusBar,
  SafeAreaView,
} from 'react-native'
import { BottomNavigation } from 'react-native-material-ui'
import { LinearGradient } from 'expo'

import { NavigationHeader } from '../../components/Navigation'
import { Images, LayoutUtils } from '../../utils'
import { H1Text } from '../../components/Text'
import injectReducer from '../../utils/injectReducer'
import injectSaga from '../../utils/injectSaga'
import reducer from './reducers'
import saga from './saga'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141e29',
  },
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  content: {
    flex: 0.9,
    flexDirection: 'column',
  },
});

const stylesBottomNavigation = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#161F47',
  },
})

const marginTop = LayoutUtils.getExtraTop()

class VersionListClass extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { goBack } = this.props

    return (
      <View style={styles.container}>
        <LinearGradient
          colors={['rgba(7,46,89,0.8)', 'transparent']}
          start={[0, 0]}
          end={[1, 1]}
          location={[0.25, 0.6, 1]}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            height: '100%',
          }}
        />
        <StatusBar barStyle='light-content' />
        <NavigationHeader
          style={{ marginTop: marginTop + 20 }}
          headerItem={{
            title: `Versions`,
            icon: null,
            button: Images.closeButton
          }}
          action={goBack}
        />
        <SafeAreaView style={styles.wrapper}>
          <View style={styles.content}>

          </View>
        </SafeAreaView>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  const loading = state.version.get('loading')
  return {
    loading,
  }
}

const mapDispatchToProps = dispatch => ({
  goBack: () => dispatch({ type: 'GO_BACK' }),
})

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({key: 'version', reducer})
const withSaga = injectSaga({ key: 'version', saga })

const VersionListScreen = compose(
  withReducer,
  withConnect,
  withConnect,
)(VersionListClass)

export { VersionListScreen }
