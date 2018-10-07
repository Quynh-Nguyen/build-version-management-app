const initialState = {
  loading: false,
  type: 1,
  data: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_VERSIONS':
      return {
        ...state,
        type: action.payload.type,
        loading: true
      }
    case 'GET_VERSIONS_SUCCESS':
      return {
        ...state,
        loading: false,
        data: action.payload.data.project
      }
    case 'GET_VERSIONS_FAILED':
      return {
        ...state,
        loading: false,
        error: action.payload.error
      }
    default:
      return state;
  }
}