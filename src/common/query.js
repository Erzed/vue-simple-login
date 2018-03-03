import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import storage from './storage'
import { API_URL } from './config'


function dataEx(callback) {
  return callback.then((response, pr)=> {
    if (response.data.errors) {
      let err = new Error()
      console.log('ror', response.data.errors);
      err.data = response.data.errors
      throw err
    }
    return response
  })
}

const Query = {
  init () {
    Vue.use(VueAxios, axios)
    Vue.axios.defaults.baseURL = API_URL
  },



  setHeader () {
    Vue.axios.defaults.headers.common['Authorization'] = `Token ${storage.getToken()}`
  },

  query (resource, params) {
    return Vue.axios
      .get(resource, params)
  },

  get (resource, slug = '') {
    return Vue.axios
      .get(`${resource}/${slug}`)
  },

  post (resource, params) {
    return dataEx(Vue.axios.post(`${resource}`, params))
  }

}

export default Query
