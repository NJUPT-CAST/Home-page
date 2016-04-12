import Vue from 'vue'
import IndexMain from '../component/IndexMain.vue'
import store from '../store/index'

import '../style/sass/index.scss'

new Vue({
    el: 'body',
    store,
    vuex: {
        getters: {
            count: state => state.count
        }
    },
    components: {
        'index-main': IndexMain
    }
})