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
  }
}

const getProjectsSucceed = (data) => {
  return {
    type: 'GET_PROJECTS_SUCCEED',
    payload: {
      data
    }
  }
}

const getVersionForProjectSucceed = (data) => {
  return {
    type: 'GET_VERSIONS_FOR_PROJECT_SUCCEED',
    payload: {
      projectId: data.projectId,
      versions: data.versions,
    }
  }
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
  getProjectsFailed,
  getVersionForProjectSucceed,
}
