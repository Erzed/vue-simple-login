const TOKEN = 'X-Auth'

export default {
  saveToken (token) {
    window.localStorage.setItem(TOKEN, token)
  },

  removeToken () {
    window.localStorage.removeItem(TOKEN)
  },

  getToken () {
    return window.localStorage.getItem(TOKEN)
  }

}
