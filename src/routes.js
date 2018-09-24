import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Bnk48 from './pages/Bnk48.vue'
import Post from './pages/Post.vue'
import PostItem from './pages/PostItem.vue'
import Firebase from './pages/Firebase.vue'
import Register from './pages/Register.vue'
import Login from './pages/Login.vue'
import Logout from './pages/Logout.vue'
import Hotel from './pages/Hotel.vue'
import Chart from './pages/Chart.vue'
import Slick from './pages/Slick.vue'

export default [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/bnk48', component: Bnk48 },
    { path: '/post', component: Post },
    { path: '/post/:id', component: PostItem },
    { path: '/firebase', component: Firebase },
    { path: '/register', component: Register },
    { path: '/login', component: Login },
    { path: '/logout', component: Logout },
    { path: '/hotel', component: Hotel },
    { path: '/chart', component: Chart },
    { path: '/slick', component: Slick }
]
