import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'
import storage from '@/common/storage'

Vue.use(Vuex)

const state = {
  errors: null,
  isLoggedIn: !!storage.getToken(),
  user: {}

}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
