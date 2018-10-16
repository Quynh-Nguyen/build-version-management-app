import { fromJS } from 'immutable'

import NavStore from '../../../store/NavStore'

import {
  LOGIN_REQUESTED,
  LOGIN_FAILED,
  REGISTER_REQUESTED,
  REGISTER_FAILED
} from '../constants'

export const initialState = fromJS({
  loading: false,
  error: false,
})

export default(state = initialState, action) => {
  let nextState;
  switch (action.type) {
    case LOGIN_REQUESTED || REGISTER_REQUESTED:
      return state
        .set('loading', true)
      break;
    case LOGIN_FAILED || REGISTER_FAILED:
      return state
        .set('loading', false)
        .set('error', true)
      break;
    default:
      // nextState = AuthNavigator.router.getStateForAction(action, state);
      break;
  }

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
};
