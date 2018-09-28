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
import { ProjectCard, DashboardSummaryCard } from '../../components/Card'
import { HorizontalList } from '../../components/ListItem'
import injectReducer from '../../utils/injectReducer'
import injectSaga from '../../utils/injectSaga'
import reducer from './reducers'
import saga from './saga'
import {
  gotoProjectDetail,
} from './actions'

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

class DashboardScreenClass extends React.Component {
  constructor(props) {
    super(props);
    // this._bootstrapAsync();
    this.state = {
      active: `dashboard`
    }
  }

  _bootstrapAsync = async() => {
    const userToken = await AsyncStorage.removeItem('userToken');
  }

  onPressProjectCard = () => {
    this.props.navigation.navigate('Version', { projectId: 1, type: 1 });
  }

  render() {
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
            title: `Dashboard`,
            icon: null,
            button: Images.closeButton
          }}
          action={this.goBack}
        />
        <SafeAreaView style={styles.wrapper}>
          <View style={styles.content}>
            <H1Text>Welcome,</H1Text>
            <H1Text>to Maverapp</H1Text>
            <DashboardSummaryCard />
            <HorizontalList title="Project" number="4">
              <ProjectCard text="PROJECT A" icon="compare-arrows" number="5" action={this.onPressProjectCard}/>
              <ProjectCard text="PROJECT B" icon="details" number="4"/>
              <ProjectCard text="PROJECT C" icon="polymer" number="10"/>
              <ProjectCard text="PROJECT D" icon="favorite-border" number="15"/>
            </HorizontalList>
            <HorizontalList title="Device" number="5">
              <ProjectCard text="iPhone 4" icon="compare-arrows" number="5"/>
              <ProjectCard text="iPhone 5" icon="details" number="4"/>
              <ProjectCard text="iPhone X" icon="polymer" number="10"/>
              <ProjectCard text="Samsung S9" icon="favorite-border" number="15"/>
              <ProjectCard text="Samsung S8" icon="favorite-border" number="15"/>
            </HorizontalList>
          </View>
        </SafeAreaView>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  const loading = state.main.get('loading')
  return {
    loading,
  }
}

const mapDispatchToProps = dispatch => ({
  goBack: () => dispatch({ type: 'GO_BACK' }),
  onPressProjectCard: () => dispatch(gotoProjectDetail({projectId: 5})),
})

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)

const withReducer = injectReducer({key: 'main', reducer})
const withSaga = injectSaga({ key: 'main', saga })

const DashboardScreen = compose(
  withReducer,
  withConnect,
  withConnect,
)(DashboardScreenClass)

export { DashboardScreen }
