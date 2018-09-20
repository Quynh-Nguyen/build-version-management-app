import { NavigationActions } from 'react-navigation';
import { fromJS } from 'immutable';

import { AppNavigator } from '../navigators';

const initialState = {
  loading: false,
  error: false,
  currentUser: false,
};

export default(state = initialState, action) => {
  let nextState;
  switch (action.type) {
    case 'MAIN':
      // nextState = AppNavigator.router.getStateForAction(
      //   NavigationActions.navigate({ routeName: 'Main' }),
      //   state
      // );
      break;
    default:
      // nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }

  return nextState || state;
}
