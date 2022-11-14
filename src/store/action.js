export default {
    addcart(context, payload) {


        return new Promise((reslove, reject) => {
            for (let i = 0; i < context.state.cartInfo.length; i++) {
                if (context.state.cartInfo[i].iid == payload.iid) {
                    context.commit('havegood', i)
                    reslove('商品数量加一')
                    return
                }
            }
            context.commit('nogood', payload)
            reslove('商品加入成功')
        })
    }
}