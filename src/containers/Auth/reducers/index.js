import { fromJS } from 'immutable'

import NavStore from '../../../store/NavStore'

import {
  GET_STARTED,
  LOGIN_GOTO,
  LOGIN_REQUESTED,
  LOGIN_SUCCEED,
  LOGIN_FAILED,
  REGISTER_REQUESTED,
  REGISTER_SUCCEED,
  REGISTER_FAILED
} from '../constants'

export const initialState = fromJS({
  loading: false,
  error: false,
})

export default(state = initialState, action) => {
  let nextState;
  switch (action.type) {
    case GET_STARTED:
      NavStore.pushToScreen('LoginNavigator')
      break;
    case LOGIN_GOTO:
        NavStore.pushToScreen('Login')
        break;
    case LOGIN_REQUESTED || REGISTER_REQUESTED:
      return state
        .set('loading', true)
      break;
    case LOGIN_FAILED || REGISTER_FAILED:
      return state
        .set('loading', false)
        .set('error', true)
      break;
    case LOGIN_SUCCEED || REGISTER_SUCCEED:
      NavStore.pushToScreen('Main')
      break;
    default:
      // nextState = AuthNavigator.router.getStateForAction(action, state);
      break;
  }

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
};
