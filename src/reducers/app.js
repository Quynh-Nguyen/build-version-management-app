import { NavigationActions } from 'react-navigation';
import { fromJS } from 'immutable';

import { AppNavigator } from '../navigators'
import NavStore from '../store/NavStore'

const initialState = {
  loading: false,
  error: false,
  currentUser: false,
};

export default(state = initialState, action) => {
  let nextState;
  switch (action.type) {
    case 'GO_BACK':
      NavStore.goBack()
      break;
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
