import { combineReducers } from 'redux';
import auth from './auth';
import nav from './app';

export default combineReducers({
  nav,
  authNavigation: auth
});
