import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';

import { compose } from 'redux';
import { connect } from 'react-redux';

import { VersionCard } from '../../components/Card';

import { NavigationHeader } from '../../components/Navigation';
import { Images, LayoutUtils } from '../../utils'
import { getVersionsRequest } from './actions';

import reducer from './reducers';
import saga from './saga';
import injectReducer from '../../utils/injectReducer';
import injectSaga from '../../utils/injectSaga';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141e29',
  },
  verionList: {
    flex: 1,
    padding: 10
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
          action={() => this.props.navigation.goBack()}
        />
        <Text style={{ color: '#FFFFFF' }} >Project Id: {this.props.navigation.getParam('projectId', -1)}</Text>
        <FlatList style={styles.verionList}
          data={this.props.data}
          keyExtractor={(item, index) => item.id}
          renderItem={({ item }) => this._renderRow(item)} />
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