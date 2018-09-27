const gotoProjectDetail = (payload) => {
  return {
    type: 'VERSION_LIST_GOTO',
    payload: {
      projectId: payload.projectId,
    }
  }
}

export {
  gotoProjectDetail,
}
