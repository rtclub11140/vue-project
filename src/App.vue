<template>
    <div>
        <!-- <input v-model = "counter" type="number">
    <p>{{counter}}</p>   
    <input v-model = "name" type="text">
     <p>{{name}}</p>
        <button @click="updateCounter">updateCounter1</button>-->
        <!-- <section class="section">
       <div class="container"></div>
      <progress :class="className" :value="counter" max="15"></progress>
      <p v-if="counter>=10">Couter is To High</p>
      <p v-else>OK</p>
      <button @click="updateCounter()" class="button is-primary">Hello1</button>

      <p :key="idx" v-for="(each,idx) in numbers" :style="style(each)">{{each}}, {{idx}}</p>    
        </section>-->

        <section class="section">
            <div class="container">
                <navbar :isAuth="isAuth"/>
                <hr>
                <!-- <p class="control">
           <button @click="updateCounter()" class="button">Update</button>
                </p>-->
                <!-- <router-view :foo="'foo123'"></router-view> -->
                <!-- <router-view :counter="counter"></router-view> -->
                <router-view :isAuth="isAuth" @updateAuth="updateAuth($event)"></router-view>
            </div>
        </section>
    </div>
</template>

<script>
import 'bulma/css/bulma.min.css'
import Navbar from './components/Navbar'
import { firebaseApp } from './firebase.js'
export default {
    components: {
        navbar: Navbar
    },
    data() {
        return {
            counter: 1,
            name: 'Steve',
            numbers: [1, 2, 3, 4, 5],
            baseStyle: {
                color: 'red'
            },
            isAuth: false
        }
    },
    mounted() {
        this.unsubscribe = firebaseApp()
            .auth()
            .onAuthStateChanged(user => {
                if (user) {
                    //console.log('user : ', user)
                    //this.$emit('updateAuth', true)
                    // ที่ commment ไว้เพราะย้ายมาอยู่ตัวแม่แล้ว
                    this.isAuth = true
                    console.log('login')
                } else {
                    //console.log('not logged in')
                    //this.$emit('updateAuth : ', false)
                    this.isAuth = false
                }
            })
    },
    beforeDestroy() {
        this.unsubscribe()
    },

    computed: {
        className() {
            // sol1
            // if (this.counter >= 10) return "progress is-danger";
            // else return "progress is-primary";

            // sol2 for template string
            return `progress  ${
                this.counter >= 10 ? 'is-danger' : 'is-primary'
            }`
        }
    },
    methods: {
        updateCounter() {
            console.log(this)
            if (this.counter == 15) this.counter = 1
            else this.counter += 1
        },
        style(number) {
            console.log(number)
            return {
                ...this.baseStyle,
                fontWeight: number % 2 ? 'bold' : 'normal',
                fontSize: '15px'
            }
        },
        updateAuth(isAuth) {
            this.isAuth = isAuth
        }
    }
}
</script>


