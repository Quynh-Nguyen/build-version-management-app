import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-material-ui';

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#3D5AFE',
    backgroundColor: '#0F1B37',
    borderRadius: 4,
    color: '#FFF',
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
  },
})

const VersionCard = ({ item, action }) => {

  return (
    <View style={styles.container}>
      <TouchableOpacity style={{ flex: 1 }} onPress={() => { action() }}>
        <View>
          <Text>Version: {item.version}</Text>
          <Text>{item.updated_at || item.created_at}</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

VersionCard.propTypes = {
  item: PropTypes.object,
  action: PropTypes.func
}

VersionCard.defaultProps = {
  action: () => {

  }
}

export { VersionCard }
