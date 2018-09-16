import { AsyncStorage } from 'react-native';
import {
  createStore,
  combineReducers,
  compose,
  applyMiddleware
} from 'redux';
import {
  createReduxBoundAddListener,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';

import rootReducer from '../reducers';
// import { appMiddleware } from '../navigators';

const enhancer = compose(
  applyMiddleware(
    // appMiddleware,
  ),
)

const store = createStore(
  rootReducer,
  enhancer
)
console.log('store', store)

export default store
