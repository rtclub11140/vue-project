import axios from 'axios'
const getPosts = async (ctx, payload) => {
    ctx.commit('updateLoading')
    const res = await axios.get(payload)
    ctx.commit('updatePosts', res.data)
    ctx.commit('updateLoading')
}

export { getPosts }
