export default {
    imgchange(state) {
        state.imgvalue += 1
    },
    havegood(state, payload) {
        state.cartInfo[payload].num += 1
    },
    nogood(state, payload) {
        payload.num = 1
        payload.checked = false
        state.cartInfo.push(payload)
    },
    check(state, payload) {
        let obj = state.cartInfo.find(value => {
            return value.iid == payload
        })
        obj.iid = !obj.iid
    },

    allcheck(state, payload) {
        state.cartInfo.forEach(value => {
            value.checked = payload
        });
    }

}