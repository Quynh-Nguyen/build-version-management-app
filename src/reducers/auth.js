import { NavigationActions } from 'react-navigation';

import { AuthNavigator } from '../navigators';
import NavStore from '../store/NavStore'

console.log('AuthNavigator', AuthNavigator)
const firstAction = AuthNavigator.router.getActionForPathAndParams('Auth');
const tempNavState = AuthNavigator.router.getStateForAction(firstAction);
const secondAction = AuthNavigator.router.getActionForPathAndParams('Auth');
const initialState = AuthNavigator.router.getStateForAction(
  secondAction,
  tempNavState
);

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
    default:
      nextState = AuthNavigator.router.getStateForAction(action, state);
      break;
  }

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
};
