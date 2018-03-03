import storage from '@/common/storage'
import Query from '@/common/query'
console.log('que', Query);
import { LOGIN, LOGOUT, REGISTER, CHECK_AUTH, SET_ERROR, SET_AUTH } from '@/store/store.types'


const actions = {
  [LOGIN] (context, creds) {
    return new Promise((resolve) => {
      Query
        .post('login', {user: creds})
        .then(({data}) => {
          console.log('data', data);
          context.commit(SET_AUTH, data.user)
          resolve(data)
        })
        .catch((some, some2) => {
          console.log('data', some);
          context.commit(SET_ERROR, some.data)
        })

    })
  },

  [LOGOUT] (context) {
    context.commit(CLEAR_AUTH)
  },

  [REGISTER] (context, creds) {
    return new Promise((resolve, reject) => {
      Query
        .post('users', {user: creds})
        .then(({data}) => {
          context.commit(SET_AUTH, data.user)
          resolve(data)
        })
        .catch(({response}) => {
          context.commit(SET_ERROR, response.data.errors)
        })
    })
  },

  [CHECK_AUTH] (context) {
    if (storage.getToken()) {
      Query.setHeader()
      Query
        .get('user')
        .then(({data}) => {
          context.commit(SET_AUTH, data.user)
        })
        .catch(({response}) => {
          context.commit(SET_ERROR, response.data.errors)
        })
    } else {
      context.commit(CLEAR_AUTH)
    }
  }
}

export default actions
