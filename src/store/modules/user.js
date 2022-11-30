export default {
  namespaced: true,
  state () {
    return {
      profile: {
        id: '',
        avator: '',
        nickname: '',
        account: '',
        mobile: '',
        token: ''
      }
    }
  },
  getters: {},
  mutaitions: {
    setUser (state, newValue) {
      state.profile = newValue
    }
  },
  actions: {}
}
