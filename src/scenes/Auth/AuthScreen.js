import React from 'react';
import { StyleSheet, View, Text, StatusBar, FlatList, Easing } from 'react-native';
import Swiper from 'react-native-swiper';
import { SharedElementRenderer, SharedElement } from 'react-native-motion';
import moment from 'moment';

import { ListItem } from '../../components/ListItem';

const data = [
  {
    name: 'Hermes',
    amount: '$1,500.67',
    date: moment(),
    isReceived: false,
    items: [
      {
        name: 'Lather moto jacket',
        amount: '$8,564.00',
      },
      {
        name: 'Lorem ipsum',
        amount: '$358.00',
      },
      {
        name: 'Enim ad minim veniam',
        amount: '$1,355.00',
      },
      {
        name: 'Dolor in reprehenderit',
        amount: '$2,333.12',
      },
    ],
  },
  {
    name: 'Philipp Plein',
    amount: '$1,245.17',
    date: moment(),
    isReceived: true,
    items: [
      {
        name: 'Lather moto jacket',
        amount: '$8,564.00',
      },
      {
        name: 'Lorem ipsum',
        amount: '$358.00',
      },
      {
        name: 'Enim ad minim veniam',
        amount: '$1,355.00',
      },
      {
        name: 'Dolor in reprehenderit',
        amount: '$2,333.12',
      },
    ],
  },
  {
    name: 'L`Ocitane',
    amount: '$545.28',
    date: moment(),
    isReceived: true,
    items: [
      {
        name: 'Lather moto jacket',
        amount: '$8,564.00',
      },
      {
        name: 'Lorem ipsum',
        amount: '$358.00',
      },
      {
        name: 'Enim ad minim veniam',
        amount: '$1,355.00',
      },
      {
        name: 'Dolor in reprehenderit',
        amount: '$2,333.12',
      },
    ],
  },
  {
    name: 'Kenzo',
    amount: '$375.37',
    date: moment(),
    isReceived: false,
    items: [
      {
        name: 'Lather moto jacket',
        amount: '$8,564.00',
      },
      {
        name: 'Lorem ipsum',
        amount: '$358.00',
      },
      {
        name: 'Enim ad minim veniam',
        amount: '$1,355.00',
      },
      {
        name: 'Dolor in reprehenderit',
        amount: '$2,333.12',
      },
    ],
  },
  {
    name: 'Ray Ban',
    amount: '$151.33',
    date: moment(),
    isReceived: true,
    items: [
      {
        name: 'Lather moto jacket',
        amount: '$8,564.00',
      },
      {
        name: 'Lorem ipsum',
        amount: '$358.00',
      },
      {
        name: 'Enim ad minim veniam',
        amount: '$1,355.00',
      },
      {
        name: 'Dolor in reprehenderit',
        amount: '$2,333.12',
      },
    ],
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  wrapper: {
    // backgroundColor: '#f00'
  },
  dot: {
    backgroundColor: 'rgba(221, 221, 221,.3)',
    width: 13,
    height: 13,
    borderRadius: 7,
    marginLeft: 7,
    marginRight: 7
  },
  active_dot: {
    backgroundColor: '#bbb',
    width: 13,
    height: 13,
    borderRadius: 7,
    marginLeft: 7,
    marginRight: 7
  },
});

class AuthScreen extends React.Component {
  static navigationOptions = {
    title: 'Please sign in',
  };

  render() {
    return (
      <SharedElementRenderer>
        <View style={styles.container}>
          <StatusBar barStyle='dark-content' />
          <Swiper style={styles.wrapper}
            dot={<View style={styles.dot} />}
            activeDot={<View style={styles.active_dot} />}
            paginationStyle={{
              bottom: 70
            }}
            loop={true}>
            <View style={styles.slide}>
              <FlatList
              data={data}
              renderItem={this.renderItem}
              />
            </View>
            <View style={styles.slide}>
              <Text>Auth Screen!</Text>
              <Text>Changes you make will automatically reload.</Text>
              <Text>Shake your phone to open the developer menu.</Text>
            </View>
            <View style={styles.slide}>
              <Text>Auth Screen!</Text>
              <Text>Changes you make will automatically reload.</Text>
              <Text>Shake your phone to open the developer menu.</Text>
            </View>
          </Swiper>
        </View>
      </SharedElementRenderer>
    );
  }

  renderItem = ({ item }) => {
    const id = item.name;

    return (
      <SharedElement
        easing={Easing.in(Easing.back())}
        id={id}
        item={item}
      >
        <View
          style={{
            backgroundColor: 'transparent',
          }}
        >
          <ListItem item={item}/>
        </View>
      </SharedElement>
    );
  };
}

export { AuthScreen }
