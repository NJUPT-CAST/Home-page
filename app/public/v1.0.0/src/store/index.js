/**
 * Created by cuitianhao on 16/4/12.
 */

import Vue from 'vue'
import Vuex from 'vuex'

import form from './modules/form'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        form
    }
})