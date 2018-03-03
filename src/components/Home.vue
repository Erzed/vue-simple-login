<template>
    <div id="app">
        <router-link :to="{name: 'login'}">Login</router-link>
        <router-link :to="{name: 'signup'}">register</router-link>
        <div v-for='k in user'>
          {{ k }}
        </div>
    </div>    
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'App',
  computed: mapState([
    'user'
  ])
}

</script>