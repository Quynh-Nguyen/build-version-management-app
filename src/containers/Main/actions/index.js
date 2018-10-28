const gotoProjectDetail = (payload) => {
  return {
    type: 'VERSION_LIST_GOTO',
    payload: {
      projectId: payload.projectId,
    }
  }
}

const goBack = () => {
  return {
    type: 'GO_BACK'
  }
}

const getProjectsRequest = () => {
  return {
    type: 'GET_PROJECTS_REQUEST',
    payload: {

    }
  }
}

const getProjectsSucceed = (data) => {
  return {
    type: 'GET_PROJECTS_SUCCEED',
    payload: {
      data
    }
  };
}

const getProjectsFailed = (error) => {
  return {
    type: 'GET_PROJECTS_FAILED',
    payload: {
      error
    }
  }
}

export {
  goBack,
  gotoProjectDetail,
  getProjectsRequest,
  getProjectsSucceed,
  getProjectsFailed
}
