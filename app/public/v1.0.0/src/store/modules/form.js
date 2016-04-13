/**
 * Created by cuitianhao on 16/4/12.
 */
import {
    TOGGLE_FORM_SHOW
} from '../mutation-types'

const state = {
    isFormShow: false
}

const mutations = {
    [TOGGLE_FORM_SHOW] (state) {
        state.isFormShow = !state.isFormShow
    }
}

export default {
    state,
    mutations
}