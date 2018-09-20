import { combineReducers } from 'redux';
import globalReducer from './app';

const rootReducer = combineReducers({
  global: globalReducer,
  // authNavigation: auth
})

const createReducer = (injectedReducers) => {
  return combineReducers({
    global: globalReducer,
    ...injectedReducers,
  })
}

export {
  rootReducer,
  createReducer,
}
