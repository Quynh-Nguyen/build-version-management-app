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

export {
  goBack,
  gotoProjectDetail,
}
