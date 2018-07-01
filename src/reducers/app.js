import { NavigationActions } from 'react-navigation';

import { AppNavigator } from '../navigators';

const firstAction = AppNavigator.router.getActionForPathAndParams('Splash');
const tempNavState = AppNavigator.router.getStateForAction(firstAction);
console.log('tempNavState', tempNavState);
const secondAction = AppNavigator.router.getActionForPathAndParams('Splash');
const initialNavState = AppNavigator.router.getStateForAction(
  secondAction,
  tempNavState
);

console.log('initialNavState', initialNavState);

export default(state = initialNavState, action) => {
  let nextState;
  console.log('action.type', action.type);
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
