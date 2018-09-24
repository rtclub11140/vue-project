<template>
  <div>
    <h3 class="title">Login</h3>
    <div class="field">
      <div class="control">
        <input v-model="user.email" type="email" class="input" placeholder="email">
      </div>      
    </div>
    <div class="field">
      <div class="control">
        <input v-model="user.password" type="password" class="input" placeholder="password">
      </div>      
    </div>
    <hr>
    <p class="control">
      <button @click="login()" class="button">Login</button>
    </p>
  </div>
</template>

<script>
import { firebaseApp } from '../firebase.js'
export default {
  data() {
    return {
      user: {}
    }
  },
  methods: {
    async login() {
      const { email, password } = this.user
      try {
        await firebaseApp()
          .auth()
          .signInWithEmailAndPassword(email, password)

        this.$router.push('/')
      } catch ({ message }) {
        alert(message)
      }
    }
  }
}
</script>
