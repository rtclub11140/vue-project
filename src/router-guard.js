const beforeRouteEnter = (to, from, next) => {
    next(vm => {
        const { isAuth } = vm
        if (!isAuth) {
            next(false)
            next({ path: '/login' })
        }
        console.log(vm.$props)
    })
}

export { beforeRouteEnter }
