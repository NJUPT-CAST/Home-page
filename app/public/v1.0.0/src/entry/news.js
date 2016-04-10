/**
 * Created by cuitianhao on 16/4/10.
 */
var Vue = require('vue');
var Nav = require('../component/Nav.vue');
var Header = require('../component/Header.vue');

require('../style/sass/news.scss');

Vue.component('app-nav', Nav);
Vue.component('app-header', Header);

new Vue({
    el: '#news-container'
})