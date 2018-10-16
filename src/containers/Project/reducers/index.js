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
      return state.set('loading', false)
      // NavStore.pushToScreen('VersionList')
      break;
    default:
      return state;
  }

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
};
