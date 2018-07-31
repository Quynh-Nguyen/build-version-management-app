import { NavigationActions } from 'react-navigation';

import { AuthNavigator } from '../navigators';

const initialState = AuthNavigator.router.getStateForAction(NavigationActions.init());

export default(state = initialState, action) => {
  let nextState;
  switch (action.type) {
    case 'Login':
      nextState = AuthNavigator.router.getStateForAction(
        NavigationActions.back(),
        state
      );
      break;
    case 'GET_STARTED':
      nextState = AuthNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Login' }),
        state
      );
      break;
    default:
      nextState = AuthNavigator.router.getStateForAction(action, state);
      break;
  }

  console.log('nextState', nextState);
  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
};
