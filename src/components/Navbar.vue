<template>
  <div class="box">
    <nav class="navbar">
      <div class="navbar-menu">
        <!-- <router-link to='/' class="navbar-item">Home</router-link>
          <router-link to ='/about' class="navbar-item">About</router-link> -->
        <router-link :key=idx v-for="(each,idx) in links" :to="each.to" class="navbar-item">{{ each.text }}</router-link>
        <router-link v-if="isAuth" to="/logout" class="navbar-item">Logout</router-link>
        <router-link v-if="!isAuth" to="/login" class="navbar-item">Login</router-link>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
    props: ['isAuth'],
    data() {
        return {
            links: [
                { to: '/', text: 'Home' }, //
                { to: 'about', text: 'About' }, //
                { to: 'bnk48', text: 'BNK48' }, //
                { to: 'post', text: 'Post' }, //
                { to: 'firebase', text: 'Firebase' }, //..
                { to: 'register', text: 'Register' }, //.
                { to: 'hotel', text: 'Hotel' }, //
                { to: 'chart', text: 'Chart' }, //
                { to: 'slick', text: 'Slick' }
            ]
        }
    }
}
</script>

