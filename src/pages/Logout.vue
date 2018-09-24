<template>
  <div>
    <h3 class="title">Logout ...</h3>
  </div>
</template>
<script>
import { firebaseApp } from '../firebase.js'
export default {
  async mounted() {
    //logout
    //redirect
    await firebaseApp()
      .auth()
      .signOut()

    this.$router.push('/login') // ทำการ push เพื่อเก็บไว้ใน history ของ browser
  }
}
</script>

