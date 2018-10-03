<template>
  <div>
    <p>
      postItem
    </p>
    <pre>{{post}}</pre>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    async mounted() {
        // จะทำงานทุกครั้งเมื่อ component load สำเร็จ
        console.log('mounted')
        console.log(this.$route.params)
        const { id } = this.$route.params
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`

        try {
            const { data } = await axios.get(url)
            this.post = data
        } catch (err) {
            console.log(err.message)
        }
    },
    data() {
        return {
            post: []
        }
    }
}
</script>

