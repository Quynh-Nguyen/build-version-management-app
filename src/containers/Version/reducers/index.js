import { fromJS } from 'immutable'

import NavStore from '../../../store/NavStore'

export const initialState = fromJS({
  loading: false,
  error: false,
})

export default(state = initialState, action) => {
  let nextState;
  switch (action.type) {
    case 'VERSION_LIST_GOTO':
        NavStore.pushToScreen('VersionList')
        break;
    default:
      // nextState = AuthNavigator.router.getStateForAction(action, state);
      break;
  }

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
};
