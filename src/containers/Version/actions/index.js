const getVersionsRequest = (projectId, type) => {
  console.log('getVersionsRequest', { projectId, type });
  return {
    type: 'GET_VERSIONS',
    payload: {
      projectId,
      type
    }
  };
}

const getVersionSuccess = (data) => {
  return {
    type: 'GET_VERSIONS_SUCCESS',
    payload: {
      data
    }
  };
}

const getVersionsFailed = (error) => {
  return {
    type: 'GET_VERSIONS_FAILED',
    payload: {
      error
    }
  }
}

export {
  getVersionsRequest,
  getVersionSuccess,
  getVersionsFailed
}