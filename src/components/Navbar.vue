<template>
  <div>
      <nav class="navbar">
        <div class="navbar-menu">
          <!-- <router-link to='/' class="navbar-item">Home</router-link>
          <router-link to ='/about' class="navbar-item">About</router-link> -->
          <router-link :key=idx v-for="(each,idx) in links" :to="each.to" class="navbar-item">{{ each.text }}</router-link>
        </div>
      </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { to: "/", text: "Home" }, //
        { to: "about", text: "About" }, //
        { to: "bnk48", text: "BNK48" }, //
        { to: "post", text: "Post" }, //
        { to: "firebase", text: "Firebase" }
      ]
    };
  }
};
</script>

