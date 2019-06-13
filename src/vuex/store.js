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
        case:{
          child_id:0,
        },
        audit:{
          child_id:0,
        },
        base:{
          child_id:0,
        },
        search:{
          searchInput:'',
        }
      },
      mutations: {
        changeChild(state,num){
          state.child_id = num
        },
        changeCaseChild(state,num){
          state.case.child_id = num
        },
        changeAuditChild(state,num){
          state.audit.child_id = num
        },
        changeBaseChild(state,num){
          state.base.child_id = num
        },
        changeSearchChild(state,num){
          state.search.searchInput = num
        },
        changeCaseData(state,num){
          state.case.caseAllList = num
        },
        reset(state){
          state.child_id = 0
        },
        reset1(state){
          state.case.child_id = 0
        },
        reset2(state){
          state.audit.child_id = 0
        },
        reset3(state){
          state.base.child_id = 0
        },
        reset4(state){
          state.search.searchInput = null
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