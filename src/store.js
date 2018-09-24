import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { getPosts } from './actions/post'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        counter: 1,
        loading: false,
        posts: []
    },
    getters: {
        // ทำงานคล้าย computed
        trippleCounter(state) {
            return state.counter * 3
        }
    },
    mutations: {
        updateCounter(state, payload) {
            //สามารถดึงเฉพาะค่ามาได้โดยใช้ detrcuring
            state.counter = state.counter + payload
        },
        updateLoading(state) {
            state.loading = !state.loading
        },
        updatePosts(state, payload) {
            state.posts = payload
        }
    },
    actions: {
        incrementCounter() {},
        getPosts
    }
})
