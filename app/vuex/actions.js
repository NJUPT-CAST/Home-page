export const infoRecorder = function ({ dispatch, state }, info) {
  dispatch('FENTCHINFO', {
    name: info
  })
}
