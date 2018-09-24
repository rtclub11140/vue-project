<template>
    <div>
        <h3 class="title">
            Hotel
        </h3>
        <!-- <p>
      {{hotels}}
    </p> -->
        <p class="control">
            <button @click="bookHotel()" :disabled="!views.length" class="button">
                Book Now
            </button>
        </p>
        <br>
        <div class="columns is-multiline">
            <div class="column is-one-quarter" :key="each.id" v-for="each in hotels">
                <img @click="viewHotel(each.id)" :src="`/hotel/${each.name}.jpg`" :alt="each.name" :style="style(each.id)">
            </div>
        </div>
    </div>
</template>

<script>
import { hotels } from '../dbHotel.json'
import { firebaseApp } from '../firebase.js'
import { beforeRouteEnter } from '../router-guard.js'

export default {
    beforeRouteEnter,
    props: ['isAuth'],
    created() {
        this.viewRef = firebaseApp()
            .database()
            .ref('/views')

        this.booksRef = firebaseApp()
            .database()
            .ref('/booking')
    },
    mounted() {
        this.viewRef.on('value', ss => {
            // console.log(ss.val())
            // console.log(Object.keys(ss.val())) //เอา key มาใส่ใน array
            const obj = ss.val()
            this.views = obj
                ? Object.keys(obj).map(key => {
                      return {
                          key,
                          hotelId: obj[key].hotelId
                      }
                  })
                : []
        })

        this.booksRef.on('value', ss => {
            const obj = ss.val()
            this.books = obj
                ? Object.keys(obj).map(key => {
                      return {
                          key,
                          hotelId: obj[key].hotelId
                      }
                  })
                : []
        })
    },
    beforeDestroy() {
        this.viewRef.off()
    },
    data() {
        return {
            hotels,
            baseStyle: {
                cursor: 'pointer'
            },
            userId: 'admin',
            views: [],
            books: []
        }
    },
    computed: {
        currentUser() {
            return firebaseApp().auth().currentUser
        }
    },
    methods: {
        style(hotelId) {
            const found = this.findInViews(hotelId)
            return this.findInBooks(hotelId)
                ? {
                      filter: 'grayscale(100%)'
                  }
                : {
                      ...this.baseStyle,
                      border: found ? 'solid 2px red' : ''
                  }
        },

        findInViews(hotelId) {
            return this.views.find(each => {
                return each.hotelId === hotelId
            })
        },
        findInBooks(hotelId) {
            return this.books.find(each => {
                return each.hotelId === hotelId
            })
        },
        viewHotel(hotelId) {
            // const found = this.views.find(each => {
            //   return each.hotelId === hotelId
            // })

            // if (found) {
            //   console.log('delete')
            //   console.log(found.key)
            //   this.viewRef.child(found.key).remove() // found.key == found['key'] =/= found[key]
            //   //this.viewRef.child("LN3dKj1Z7p4UPFJxSVO").remove()
            // } else {
            //   console.log('push')
            //   this.viewRef.push({
            //     userId: this.userId,
            //     hotelId
            //   })
            // }

            const found = this.findInViews(hotelId)
            if (found) {
                this.viewRef.child(found.key).remove() // found.key == found['key'] =/= found[key]
                //this.viewRef.child("LN3dKj1Z7p4UPFJxSVO").remove()
            } else {
                this.viewRef.push({
                    userId: this.userId,
                    hotelId
                })
            }
        },
        bookHotel() {
            // forEach
            // await use booksRef.push()
            // await use viewRef.remove()
            this.views.forEach(async each => {
                await this.booksRef.push({
                    userId: this.userId,
                    hotelId: each.hotelId
                })
                await this.viewRef.child(each.key).remove()
            })
        }
    }
}
</script>

