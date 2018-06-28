import { NavigationActions } from 'react-navigation';

import { AuthNavigator } from '../navigators';

const initialState = AuthNavigator.router.getStateForAction(NavigationActions.init());

export default(state = initialState, action) => {
  const nextState = AuthNavigator.router.getStateForAction(action, state);
  return nextState || state;
};
