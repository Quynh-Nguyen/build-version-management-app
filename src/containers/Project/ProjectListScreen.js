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
import { ProjectListCard } from '../../components/Card'
import { VerticalList } from '../../components/ListItem'
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

class ProjectListScreenClass extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  onPressProjectCard = () => {
    const { onPressProjectCard } = this.props

    onPressProjectCard(1)
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
            title: `Projects`,
            icon: null,
            button: Images.closeButton
          }}
          action={goBack}
        />
        <SafeAreaView style={styles.wrapper}>
          <View style={styles.content}>
            <VerticalList title="All" number="4">
              <ProjectListCard text="PROJECT A" icon="compare-arrows" number="5"  action={this.onPressProjectCard}/>
              <ProjectListCard text="PROJECT A" icon="compare-arrows" number="5"/>
              <ProjectListCard text="PROJECT A" icon="compare-arrows" number="5"/>
              <ProjectListCard text="PROJECT A" icon="compare-arrows" number="5"/>
              <ProjectListCard text="PROJECT A" icon="compare-arrows" number="5"/>
              <ProjectListCard text="PROJECT A" icon="compare-arrows" number="5"/>
              <ProjectListCard text="PROJECT A" icon="compare-arrows" number="5"/>
              <ProjectListCard text="PROJECT A" icon="compare-arrows" number="5"/>
              <ProjectListCard text="PROJECT A" icon="compare-arrows" number="5"/>
              <ProjectListCard text="PROJECT A" icon="compare-arrows" number="5"/>
              <ProjectListCard text="PROJECT A" icon="compare-arrows" number="5"/>
              <ProjectListCard text="PROJECT A" icon="compare-arrows" number="5"/>
              <ProjectListCard text="PROJECT A" icon="compare-arrows" number="5"/>
              <ProjectListCard text="PROJECT A" icon="compare-arrows" number="5"/>
              <ProjectListCard text="PROJECT A" icon="compare-arrows" number="5"/>
              <ProjectListCard text="PROJECT A" icon="compare-arrows" number="5"/>
            </VerticalList>
          </View>
        </SafeAreaView>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  const loading = state.project.get('loading')
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

const withReducer = injectReducer({key: 'project', reducer})
const withSaga = injectSaga({ key: 'project', saga })

const ProjectListScreen = compose(
  withReducer,
  withSaga,
  withConnect,
)(ProjectListScreenClass)

export { ProjectListScreen }
