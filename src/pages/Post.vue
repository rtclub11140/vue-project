<template>
  <div>
    <p>posts</p>
    <button @click="getPosts()" class="button">Get Posts</button>
    <nav class="pagination">
      <ul class="pagination-list">
        <li :key="each" v-for="each in pages">
          <router-link :to="`/post?page=${each}`" :class="setStyle(each)">{{each}}</router-link>
        </li>
      </ul>
    </nav>
    <div class="field">
      <div class="control">
        <input type="text" class="input" v-model="filter">
      </div>
    </div>

    <div :key="each.id" v-for="each in filterPosts">
        <router-link :to="`/post/${each.id}`">{{each.id}} : {{each.title}}</router-link>
      <hr>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  watch: {
    //ดูว่า component มีการเปลี่ยนค่าไหม
    "$route.query"(query) {
      console.log(query);
      this.getPosts(query.page);
    }
  },
  mounted() {
    this.getPosts();
  },
  data() {
    return {
      posts: [],
      pages: 0,
      limit: 9,
      filter: ""
    };
  },
  computed: {
    filterPosts() {
      console.log(this.filter);
      return this.posts.filter(each => {
        const pattern = new RegExp(this.filter);
        return pattern.test(each.title);
      });
    }
  },
  methods: {
    // getPosts() {
    //   const url = "https://jsonplaceholder.typicode.com/posts";
    //   // const data = axios.get(url);
    //   // console.log(data);
    //   axios
    //     .get(url)
    //     .then(res => {
    //       console.log(res.data);
    //       this.posts = res.data;
    //     })
    //     .catch(err => {
    //       console.log(err.messgae);
    //     });
    //   console.log("OK");
    // }

    //use asyc awit
    async getPosts(page = 1) {
      // set default page = 1
      const url = `https://jsonplaceholder.typicode.com/posts?_limit=${
        this.limit
      }&_page=${page}`;

      try {
        const res = await axios.get(url);
        console.log(res);
        this.pages = Math.ceil(
          parseInt(res.headers["x-total-count"], 10) / this.limit
        );
        this.posts = res.data;
      } catch (err) {
        console.log(err.messgae);
      }
    },
    setStyle(page) {
      const currentPage = parseInt(this.$route.query.page, 10) || 1;
      console.log("page: ", page);
      console.log("currentPage: ", currentPage);
      return `pagination-link ${page === currentPage ? "is-current" : ""}`;
    }
  }
};
</script>

