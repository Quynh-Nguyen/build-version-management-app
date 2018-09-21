// import { NavigationActions } from 'react-navigation';

import NavStore from '../../../store/NavStore'

export const initialState = {
  email: 'quynh.nn@terra-drone.co.jp'
}

export default(state = initialState, action) => {
  let nextState;
  switch (action.type) {
    case 'GET_STARTED':
      NavStore.pushToScreen('LoginNavigator')
      break;
    case 'GO_BACK':
      NavStore.goBack()
      break;
    case 'LOGIN_GOTO':
        NavStore.pushToScreen('Login')
        break;
    case 'REGISTER_GOTO':
      NavStore.pushToScreen('Register')
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
