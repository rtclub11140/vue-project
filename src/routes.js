import Home from "./pages/Home.vue";
import About from "./pages/About.vue";
import Bnk48 from "./pages/Bnk48.vue";
import Post from "./pages/Post.vue";
import PostItem from "./pages/PostItem.vue";
import Firebase from "./pages/Firebase.vue";

export default [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/bnk48", component: Bnk48 },
  { path: "/post", component: Post },
  { path: "/post/:id", component: PostItem },
  { path: "/firebase", component: Firebase }
];
