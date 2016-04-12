/**
 * Created by cuitianhao on 16/4/12.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutation'

Vue.use(Vuex)

const state = {
    count: 0,
    formShow: false
}

export default new Vuex.Store({
    state,
    mutations
})