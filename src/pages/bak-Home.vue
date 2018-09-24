<template>
  <div>
    <div class="content">
      <h3 class="subtitle">Counter: {{number}}</h3>
    </div>

    <div class="control">
      <button @click="updateCounter()" class="button">Update</button>
    </div>

    <!-- <child/> -->
  </div>
</template>

<script>
// const Child = {
//     mounted() {
//         console.log('Child mounted()')
//     },
//     template: '<div>dd</div>'
// }
export default {
    // created() { // เกิดขึ้นก่อน mounted
    //     console.log('created')
    // },
    // components: {
    //     child: Child
    // },
    // mounted() {
    //     console.log('mounted')
    // },
    // beforeDestroy() {
    //     console.log('beforeDestroy')
    // },
    updated() {
        //focus ที่ตัว render, trigger by re-render
        console.log('updated')

        //
        this.$nextTick(() => {
            console.log('finished rendered')
        })
    },
    watch: {
        //foucus ที่ state, one by one, trigger by value change
        counter() {
            console.log('watch counter')
        }
    },
    data() {
        return {
            counter: 1,
            number: 1
        }
    },
    methods: {
        updateCounter() {
            //this.counter += 1
            this.number += 1
        }
    }
}
</script>

