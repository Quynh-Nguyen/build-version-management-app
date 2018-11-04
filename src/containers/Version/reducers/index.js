import { fromJS } from 'immutable'

const initialState = fromJS({
  loading: false,
  error: false,
  type: 1,
  versions: {},
})

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_VERSIONS':
      return state.mergeDeep({
        'type': action.payload.type,
        'loading': true,
      })
    case 'GET_VERSIONS_SUCCEED':
      return state.mergeDeep({
        'loading': false,
        'versions': action.payload.versions,
      })
    case 'GET_VERSIONS_FAILED':
      return state.mergeDeep({
        'loading': false,
        'error': action.payload.error,
      })
    default:
      return state;
  }
}