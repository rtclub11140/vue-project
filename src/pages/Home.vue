<template>
    <div>
        <div class="content">
            <!-- การเข้าถึงค่าที่อยู่ใน store -->
            <!-- <h3 class="subtitle">Counter: {{$store.state.counter}}</h3> -->
            <h3 class="subtitle">1. Counter in Vuex: {{counter}}</h3>
            <h3 class="subtitle">2. Counter Component Home: {{doubleCounter}}</h3>

            <h3 class="subtitle">3. Counter Component Vuex: {{$store.getters.trippleCounter}}</h3>
            <h3 class="subtitle">4. Counter Component Vuex: {{trippleCounter}}</h3>
        </div>

        <div class="control">
            <!-- กรณียังไม่ได้ใช้ vuex -->
            <!-- <button @click="updateCounter()" class="button">Update1</button> -->
            <!-- กรณีใช้ vuex -->
            <button @click="updateCounter(1)" class="button">Update1</button>
            <!-- กรณีเรียก function จาก action ใน store จะใช้ dispatch -->
            <button @click="$store.dispatch('getPosts','https://jsonplaceholder.typicode.com/posts')" class="button">Get Posts</button>
        </div>
        <pre>{{posts}}</pre>
    </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex'
export default {
    data() {
        return {}
    },
    methods: {
        ...mapMutations(['updateCounter', 'updateLoading', 'updatePosts'])
        /*, กรณีย้ายฟังก์ชั่นไว้ใน store
        updateCounter() {
            this.$store.commit('updateCounter', 1)
        }
        */
    },
    //กรณีอยากมี computed เป็นของตัวเองและใช้ร่วมกับคนอื่น
    computed: {
        ...mapState(['counter', 'number', 'posts']),
        ...mapGetters(['trippleCounter']),
        doubleCounter() {
            return this.counter * 2
        }
    }
    // computed: {
    //     counter() {
    //         return this.$store.state.counter
    //     }
    // }
}
</script>

