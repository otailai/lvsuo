import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
// {{$store.state.count}}
// <button @click="$store.commit('increment')">加一</button>
// <button  @click="$store.dispatch('addPlus')">加一</button>
const store = new Vuex.Store({
    state:{
        count:0,
    },
    getters:{

    },
    mutations:{
         increment (state) {
            state.count++
            }
    },
    actions:{
        addPlus(context){
            context.commit('increment')
        },

    },
   
})

export default store