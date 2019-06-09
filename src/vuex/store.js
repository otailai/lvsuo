import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
// {{$store.state.count}}
// <button @click="$store.commit('increment')">加一</button>
// <button  @click="$store.dispatch('addPlus')">加一</button>
const store = new Vuex.Store({
    state: {
        scorketId: '',
        child_id:0,
      },
      mutations: {
        changeChild(state,num){
          state.child_id = num
        },
        SCORKETID (state, obj) {
          state.scorketId = obj
        },
        RESET (state) {
          state.scorketId = null
        }
      },
      actions: {
        SAVE_ID ({commit}, obj) {
          commit('SCORKETID', obj)
        },
        RESET_ID ({commit}) {
          commit('SCORKETID')
        }
      }
})

export default store