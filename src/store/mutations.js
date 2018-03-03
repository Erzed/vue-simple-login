import storage from '@/common/storage'

import { SET_ERROR, SET_AUTH, CLEAR_AUTH } from '@/store/store.types'


const mutations = {
  [SET_AUTH] (state, user) {
    console.log('came',user);
    state.isLoggedIn = true
    state.user = user
    state.errors = {}
    storage.saveToken(state.user.token)
  },
  [CLEAR_AUTH] (state) {
    state.isLoggedIn = false
    state.user = {}
    state.errors = {}
    storage.destroyToken()
  },
  [SET_ERROR] (state, error) {
    console.log('settong error', error);
    state.errors = error
  }

}

export default mutations
