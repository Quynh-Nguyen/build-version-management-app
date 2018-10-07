import React from 'react'
import { StyleSheet, View, FlatList, ActivityIndicator, Linking, Picker } from 'react-native'

import { compose } from 'redux';
import { connect } from 'react-redux';

import { NavigationHeader } from '../../components/Navigation';
import { Images, LayoutUtils } from '../../utils'
import { ProjectBannerCard } from '../../components/Card'
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
    padding: 10
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

  _download(item) {
    Linking.canOpenURL(item.link).then(supported => {
      if (supported) {
        Linking.openURL(item.link);
      } else {
        console.log('Can open link', item.link);
      }
    });
  }

  _renderVersionListItem(item) {
    return (
      <VersionListItem
        item={item}
        icon="people"
        onDownload={ () => this._download(item) } />
    );
  }

  _renderVersionList() {
    return (
      <FlatList style={styles.verionList}
        data={this.props.project.versions}
        keyExtractor={(item, index) => `${item.id}`}
        renderItem={({ item }) => this._renderVersionListItem(item)} />
    );
  }

  render() {
    let content;

    if (this.props.loading) {
      content = <ActivityIndicator style={styles.container} size="large" color="#FFFFFF" />;
    } else {
      content = this._renderVersionList();
    }

    return (
      <View style={styles.container}>
        <NavigationHeader
          style={{ marginTop: marginTop + 20 }}
          headerItem={{
            title: `Versions`,
            icon: null,
            button: Images.closeButton
          }}
          action={() => this.props.navigation.goBack()}
          rightView={{
            rightViewIcon: Images.closeButton,
            rightViewAction: this.goBack,
            rightViewTitle: '4'
          }}
        />
        <ProjectBannerCard text={this.props.project.name || ''} />
        <Picker
          selectedValue={this.props.type}
          style={{ height: 50, color: '#000000', backgroundColor: '#FFFFFF'}}
          onValueChange={(itemValue, itemIndex) => this.props.getVersions(this.props.navigation.getParam('projectId', -1), itemValue) }>
            <Picker.Item label="Android" value={2} />
            <Picker.Item label="iOS" value={1} />
        </Picker>
        {content}
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('mapStateToProps', state);
  return {
    loading: state.versions.loading,
    type: state.versions.type,
    project: state.versions.data
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