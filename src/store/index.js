import { AsyncStorage } from 'react-native'
import {
  createStore,
  combineReducers,
  compose,
  applyMiddleware
} from 'redux'
import {
  createReduxBoundAddListener,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'remote-redux-devtools'

const sagaMiddleware = createSagaMiddleware()

import { rootReducer, createReducer } from '../reducers'
// import { appMiddleware } from '../navigators';

const middlewares = [sagaMiddleware]

const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    composeWithDevTools
      ? composeWithDevTools
      : compose

const enhancers = [
  applyMiddleware(
    ...middlewares
  ),
]

const store = createStore(
  createReducer(),
  composeEnhancers(...enhancers),
)

// Extensions
store.runSaga = sagaMiddleware.run
store.injectedReducers = {} // Reducer registry
store.injectedSagas = {} // Saga registry

export default store
