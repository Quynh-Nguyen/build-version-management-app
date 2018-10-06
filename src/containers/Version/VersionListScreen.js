import React from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'

import { compose } from 'redux';
import { connect } from 'react-redux';

import { VersionCard } from '../../components/Card';
import { NavigationHeader } from '../../components/Navigation';
import { Images, LayoutUtils } from '../../utils'
import { ProjectBannerCard } from '../../components/Card'
import { VerticalVersionList } from '../../components/ListItem'
import { VersionListItem } from '../../components/ListItem'

import injectReducer from '../../utils/injectReducer'
import injectSaga from '../../utils/injectSaga'
import reducer from './reducers'
import saga from './saga'

import { getVersionsRequest } from './actions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141e29',
  },
  verionList: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  contentPadding: {
    flex: 0.9,
  }
});

const marginTop = LayoutUtils.getExtraTop()

class VersionListScreenClass extends React.Component {

  constructor(props) {
    super(props);
    this.props.getVersions(this.props.navigation.getParam('projectId', -1), 1);
  }

  render() {
    console.log('[VersionListScreen] render', this.props.data);
    return (
      <View style={styles.container}>
        <NavigationHeader
          style={{ marginTop: marginTop + 20 }}
          headerItem={{
            title: `Versions`,
            icon: null,
            button: Images.closeButton
          }}
          action={goBack}
          rightView={{
            rightViewIcon: Images.closeButton,
            rightViewAction: this.goBack,
            rightViewTitle: '4'
          }}
        />
        <View style={styles.wrapper}>
          <ScrollView
            contentContainerStyle={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'center',
            }}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="always"
            nestedScrollEnabled={true}
          >
            <ProjectBannerCard text="Test Ne"/>
            <View style={styles.content}>
              <View style={styles.contentPadding}>
                <VerticalVersionList title="All" number="5">
                  <VersionListItem text="v1.0.1 - 2018/09/27" icon="people"/>
                  <VersionListItem text="v1.0.2 - 2018/09/27" icon="people"/>
                  <VersionListItem text="v1.0.3 - 2018/09/27" icon="people"/>
                  <VersionListItem text="v1.0.4 - 2018/09/27" icon="people"/>
                  <VersionListItem text="v1.0.5 - 2018/09/27" icon="people"/>
                  <VersionListItem text="v1.0.6 - 2018/09/27" icon="people"/>
                  <VersionListItem text="v1.0.7 - 2018/09/27" icon="people"/>
                  <VersionListItem text="v1.0.8 - 2018/09/27" icon="people"/>
                  <VersionListItem text="v1.0.9 - 2018/09/27" icon="people"/>
                  <VersionListItem text="v1.0.10 - 2018/09/27" icon="people"/>
                </VerticalVersionList>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }

  _renderRow(item) {
    console.log('Render row: ', item);
    return (
      <VersionCard item={item}/>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.versions.data
  }
}

const mapDispatchToProps = (dispatch) => ({
  getVersions: (projectId, type) => dispatch(getVersionsRequest(projectId, type)),
})

const withReducer = injectReducer({ key: 'versions', reducer });
const withSaga = injectSaga({ key: 'versions', saga });
const withConnect = connect(mapStateToProps, mapDispatchToProps);
const VersionListScreen = compose(withReducer, withSaga, withConnect)(VersionListScreenClass);

export { VersionListScreen }