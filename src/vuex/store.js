import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
// {{$store.state.count}}
// <button @click="$store.commit('increment')">加一</button>
// <button  @click="$store.dispatch('addPlus')">加一</button>
const store = new Vuex.Store({
    state:{
        userCount:0,
        partyCount:0,
        dateCount:0,
        riskCount:0,
        nameJobCount:0,
        caseAddData:{
            //聘请人
            
        },
    },
    getters:{
        
    },
    mutations:{
            userIncrement (state) {
            state.userCount++
            },
            partyIncrement (state) {
                state.partyCount++
            },
            dateIncrement (state) {
                state.dateCount++
            },
            riskIncrement (state) {
                state.riskCount++
            },
            nameJobIncrement (state) {
                state.nameJobCount++
            },

            userReduce (state) {
                state.userCount--
                },
            partyReduce (state) {
                state.partyCount--
            },
            dateReduce (state) {
                state.dateCount--
            },
            riskReduce (state) {
                state.riskCount--
            },
            nameJobReduce (state) {
                state.nameJobCount--
            }
    },
    actions:{
        addUser(context){
            context.commit('userIncrement')
        },
        addParty(context){
            context.commit('partyIncrement')
        },
        addDate(context){
            context.commit('dateIncrement')
        },
        addRisk(context){
            context.commit('riskIncrement')
        },
        addNameJob(context){
            context.commit('nameJobIncrement')
        },
        reduceUser(context){
            context.commit('userReduce')
        },
        reduceParty(context){
            context.commit('partyReduce')
        },
        reduceDate(context){
            context.commit('dateReduce')
        },
        reduceRisk(context){
            context.commit('riskReduce')
        },
        reduceNameJob(context){
            context.commit('nameJobReduce')
        },

    },
   
})

export default store