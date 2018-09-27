import { fromJS } from 'immutable'

import NavStore from '../../../store/NavStore'

export const initialState = fromJS({
  loading: false,
  error: false,
})

export default(state = initialState, action) => {
  let nextState;
  switch (action.type) {
    case 'GET_STARTED':
      NavStore.pushToScreen('LoginNavigator')
      break;
    case 'LOGIN_GOTO':
        NavStore.pushToScreen('Login')
        break;
    case 'REGISTER_GOTO':
      NavStore.pushToScreen('Register')
      break;
    case 'LOGIN_REQUESTED':
      return state
        .set('loading', true)
      break;
    case 'LOGIN_FAILED':
      return state
        .set('loading', false)
        .set('error', true)
    break;
    case 'LOGIN_SUCCEED':
      NavStore.pushToScreen('Main')
      break;
    default:
      // nextState = AuthNavigator.router.getStateForAction(action, state);
      break;
  }

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
};
