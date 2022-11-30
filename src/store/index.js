import { createStore } from 'vuex'
import user from '@/store/modules/user'
import cart from './modules/cart'
import category from './modules/category'
import createPersistedState from 'vuex-persistedstate'

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    user,
    cart,
    category
  },
  plugins: [
    createPersistedState({
      key: 'yanxuan-client-pc-store',
      paths: ['user', 'cart']
    })
  ]
})
