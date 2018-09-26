import React from 'react'
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

class ProjectListScreen extends React.Component {
  constructor(props) {
    super(props);
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
            title: `Projects`,
            icon: null,
            button: Images.closeButton
          }}
          action={this.goBack}
        />
        <SafeAreaView style={styles.wrapper}>
          <View style={styles.content}>
            <H1Text>Welcome,</H1Text>
            <H1Text>to Maverapp</H1Text>
            <VerticalList title="Project" number="4">
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

export { ProjectListScreen }
