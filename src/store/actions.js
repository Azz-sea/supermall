const actions ={
    addCart(context, payload) {
        return new Promise((reslove, reject)=> {  let oldobj = context.state.cartList.find(item => item.iid === payload.iid)
            if (oldobj) {
                // oldobj.count += 1
                context.commit('addCounter', oldobj)
                reslove('👴的数量增加了1件')
            } else {
                payload.count = 1
                // state.cartList.push(payload)
                context.commit('addToCart', payload)
                reslove('👴已被添加到购物车')
            }})
        //    state.cartList.push(payload)
           
        }
}
export default actions