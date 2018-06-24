import { AsyncStorage } from 'react-native';
import {
  createStore,
  combineReducers,
  compose,
  applyMiddleware
} from 'redux';
import createSagaMiddleware from 'redux-saga';

// import { reducer as dataReducer } from '../data/reducer';
// import { reducer as servicesReducer } from '../services/reducer';
//
// const appReducer = combineReducers({
//   services: servicesReducer,
//   data: dataReducer
// })

const sagaMiddleware = createSagaMiddleware();

const enhancer = compose(
  applyMiddleware(
    sagaMiddleware
  ),
)

const store = createStore(
  // appReducer,
  enhancer
)
console.log(store)

export default store
