import { NavigationActions } from 'react-navigation';

import { AppNavigator } from '../navigators';

const firstAction = AppNavigator.router.getActionForPathAndParams('Splash');
const tempNavState = AppNavigator.router.getStateForAction(firstAction);
const secondAction = AppNavigator.router.getActionForPathAndParams('Auth');
const initialNavState = AppNavigator.router.getStateForAction(
  secondAction,
  tempNavState
);

export default(state = initialNavState, action) => {
  let nextState;
  switch (action.type) {
    case 'MAIN':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Main' }),
        state
      );
      break;
    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }

  return nextState || state;
}
