import { fromJS } from 'immutable'

export const initialState = fromJS({
  loading: false,
  error: false,
  projects: {},
})

export default(state = initialState, action) => {
  let nextState;
  switch (action.type) {
    case 'VERSION_LIST_GOTO':
      break;
    case 'GET_PROJECTS_REQUEST':
      return state.merge({
        'loading': true,
      })
    case 'GET_PROJECTS_SUCCEED':
      return state.mergeDeep({
        'loading': false,
        'projects': action.payload.data,
      })
    case 'GET_PROJECTS_FAILED':
      return state.merge({
        'loading': true,
        'error': true,
      })
    case 'GET_VERSIONS_SUCCEED':
      const projectId = action.payload.projectId
      return state.mergeDeep({
        'projects': {
          [projectId]: {
            'versions': action.payload.versionsArray
          }
        }
      })
    default:
      // nextState = AuthNavigator.router.getStateForAction(action, state);
      break;
  }

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
};
