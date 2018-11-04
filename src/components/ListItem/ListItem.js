import React from 'react';
import { Text, View, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { ScaleAndOpacity } from 'react-native-motion';

class ListItem extends React.Component {
  render() {
    const { item } = this.props;
    const { name, ...rest } = item;

    return (
      <ScaleAndOpacity
      >
        <TouchableWithoutFeedback>
          <View style={[styles.container]} pointerEvents="box-only">
            <Content {...rest} />
          </View>
        </TouchableWithoutFeedback>
      </ScaleAndOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginHorizontal: 16,
    marginVertical: 4,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 5
  },
});

export { ListItem }
