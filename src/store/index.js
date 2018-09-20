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
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

import { rootReducer, createReducer } from '../reducers';
// import { appMiddleware } from '../navigators';

const middlewares = [sagaMiddleware];

const enhancers = compose(
  applyMiddleware(
    ...middlewares
  ),
)

const store = createStore(
  createReducer(),
  enhancers
)

// Extensions
store.runSaga = sagaMiddleware.run;
store.injectedReducers = {}; // Reducer registry
store.injectedSagas = {}; // Saga registry

export default store
