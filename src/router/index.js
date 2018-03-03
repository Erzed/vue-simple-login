import Home from '../components/Home.vue'
import Login from '../components/account/Login.vue'
import SignUp from '../components/account/SignUp.vue'
import VueRouter from 'vue-router'

const router = new VueRouter({
  mode: 'history',
  routes: [
    
    { path: '/login', component: Login, name: 'login' },
    { path: '/signup', component: SignUp, name: 'signup' },
    { path: '/', component: Home, name: 'home' },
    { path: '/logout',
      beforeEnter (to, from, next) {
        auth.logout()
        next('/')
      }
    }
  ]
})


export default router