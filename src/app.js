import Vue from 'vue'
import VueRouter from 'vue-router'

import store from '@/store'
import router from '@/router'
import App from '@/App.vue'
import Query from '@/common/query'

Query.init()
Vue.use(VueRouter)

const app = new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
