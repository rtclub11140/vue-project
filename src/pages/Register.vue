<template>
  <div>
    <!-- <h3 class="title">Register, {{counter}}</h3> -->
    <h3 class="title">Register4</h3>
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
      <button @click="register()" class="button">Register</button>
    </p>
  </div>
</template>
<script>
import { firebaseApp } from '../firebase.js'
export default {
  props: ['foo', 'counter'],
  created() {
    this.auth = firebaseApp().auth()
  },
  // move to app.vue
  // mounted() {
  //   this.unsubscribe = this.auth.onAuthStateChanged(user => {
  //     if (user) {
  //       console.log('user : ', user)
  //       this.$emit('updateAuth', true)
  //     } else {
  //       console.log('not logged in')
  //       this.$emit('updateAuth : ', true)
  //     }
  //   })
  // },
  // beforeDestroy() {
  //   this.unsubscribe()
  // },

  data() {
    return {
      user: {}
    }
  },

  methods: {
    async register() {
      const { email, password } = this.user
      console.log('register', email, password)
      try {
        // await this.auth.createUserWithEmailAndPassword(email, password)
        await firebaseApp()
          .auth()
          .createUserWithEmailAndPassword(email, password)
        this.user = {}
      } catch ({ message }) {
        alert(message)
      }
    }
  }
}
</script>

