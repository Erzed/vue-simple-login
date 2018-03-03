<template>
    <div id="app">
      <h1>Login</h1>
      <ul v-if="errors">
        <li
          v-for="(v, k) in errors"
          :key="k">
          {{v}}
        </li>
      </ul>

      <form @submit.prevent='submit(email, password)'>
        <input
          type="email"
          v-model="email"
          placeholder="Email">
        <input
          type="password"
          v-model="password"
          placeholder="Password">
        <button type="submit">Login</button>
      </form>

    </div>    
</template>

<script>

import { LOGIN } from '@/store/store.types'
import { mapState } from 'vuex'

export default {
  name: 'login',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    submit: function(email, password) {
      this.$store
        .dispatch(LOGIN, { email, password })
        .then(() => {
          console.log('Opa');
          this.$router.push({ name: 'home' })
        })

    },
  },
  computed: mapState([
    'errors'
  ])

  }


</script>