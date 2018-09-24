<template>
  <div>
    <h3 class="title">Slick</h3>
    <div ref='slick'>
      <div :key="each.id" v-for="each in bnk48">
        <img :src="`/images/${each.name}.png`" :alt="each.name">
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import 'slick-carousel'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { bnk48 } from '../db.json'
export default {
    mounted() {
        console.log(this.$refs.slick) // vue use
        console.log($(this.$refs.slick)) // style jquery
        $(this.$refs.slick).slick({
            arrow: true,
            dots: true,
            slidesToShow: 5
        })
    },
    beforeDestroy() {
        $(this.$refs.slick).slick('unslick')
    },
    data() {
        return {
            bnk48
        }
    }
}
</script>

<style>
.slick-prev:before,
.slick-next:before {
    color: brown !important;
}
</style>


