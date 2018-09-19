import { combineReducers } from 'redux';
import auth from './auth';
import globalReducer from './app';

export default combineReducers({
  global: globalReducer,
  authNavigation: auth
});
