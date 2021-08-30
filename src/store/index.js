  import { createStore } from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
const store = createStore({
    state() {
        return {
            cartList: []
        }
        
    },
    mutations,
    actions,
    getters,
})
// const store = createStore({
//     state () {
//       return {
//         count: 0
//       }
//     },
//     mutations: {
//       increment (state) {
//         state.count++
//       }
//     }
// })
// store.commit('increment')

// console.log(store.state.count) // -> 1
export default store